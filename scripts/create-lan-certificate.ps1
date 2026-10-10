param(
    [string[]]$IpAddress = @(),
    [string[]]$DnsName = @(),
    [string]$OutputDirectory = '',
    [int]$Days = 365
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not $OutputDirectory) { $OutputDirectory = Join-Path $projectRoot 'private\lan-tls' }
$output = [System.IO.Path]::GetFullPath($OutputDirectory)
if ($Days -lt 1 -or $Days -gt 365) { throw 'Days must be between 1 and 365' }
$files = @('ca-cert.cer','ca-cert.pem','ca-key.pem','server-cert.pem','server-key.pem')
foreach ($file in $files) {
    if (Test-Path -LiteralPath (Join-Path $output $file)) { throw "Certificate files already exist in $output. Reuse them or choose another OutputDirectory; existing keys will not be overwritten." }
}

if (-not $IpAddress.Count) {
    $IpAddress = @(Get-NetIPConfiguration | Where-Object {
        $_.IPv4DefaultGateway -and $_.IPv4Address -and $_.InterfaceAlias -notmatch 'VPN|TAP|TUN|Teredo|Docker|WSL|happ|xray'
    } | ForEach-Object { $_.IPv4Address.IPAddress })
}
$addresses = @('127.0.0.1','::1') + $IpAddress | Select-Object -Unique
$names = @('localhost', $env:COMPUTERNAME) + $DnsName | Where-Object { $_ } | Select-Object -Unique
$san = [System.Security.Cryptography.X509Certificates.SubjectAlternativeNameBuilder]::new()
foreach ($address in $addresses) { $san.AddIpAddress([System.Net.IPAddress]::Parse($address)) }
foreach ($name in $names) { $san.AddDnsName($name) }

function Write-Pem([string]$Name, [string]$Label, [byte[]]$Bytes) {
    $base64 = [Convert]::ToBase64String($Bytes)
    $lines = for ($i = 0; $i -lt $base64.Length; $i += 64) { $base64.Substring($i, [Math]::Min(64, $base64.Length - $i)) }
    $text = "-----BEGIN $Label-----" + [Environment]::NewLine + ($lines -join [Environment]::NewLine) + [Environment]::NewLine + "-----END $Label-----" + [Environment]::NewLine
    [System.IO.File]::WriteAllText((Join-Path $output $Name), $text, [System.Text.Encoding]::ASCII)
}

$caRsa = [System.Security.Cryptography.RSACng]::new(2048)
$serverRsa = [System.Security.Cryptography.RSACng]::new(2048)
$ca = $null
$server = $null
try {
    $caRequest = [System.Security.Cryptography.X509Certificates.CertificateRequest]::new('CN=Local AR development CA', $caRsa, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)
    $caRequest.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509BasicConstraintsExtension]::new($true, $true, 0, $true))
    $caUsage = [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::KeyCertSign -bor [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::CrlSign
    $caRequest.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509KeyUsageExtension]::new($caUsage, $true))
    $caRequest.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509SubjectKeyIdentifierExtension]::new($caRequest.PublicKey, $false))
    $now = [DateTimeOffset]::UtcNow
    $ca = $caRequest.CreateSelfSigned($now.AddMinutes(-5), $now.AddDays($Days + 30))

    $request = [System.Security.Cryptography.X509Certificates.CertificateRequest]::new('CN=Local AR server', $serverRsa, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)
    $request.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509BasicConstraintsExtension]::new($false, $false, 0, $true))
    $usage = [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::DigitalSignature -bor [System.Security.Cryptography.X509Certificates.X509KeyUsageFlags]::KeyEncipherment
    $request.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509KeyUsageExtension]::new($usage, $true))
    $eku = [System.Security.Cryptography.OidCollection]::new()
    [void]$eku.Add([System.Security.Cryptography.Oid]::new('1.3.6.1.5.5.7.3.1'))
    $request.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509EnhancedKeyUsageExtension]::new($eku, $false))
    $request.CertificateExtensions.Add($san.Build())
    $request.CertificateExtensions.Add([System.Security.Cryptography.X509Certificates.X509SubjectKeyIdentifierExtension]::new($request.PublicKey, $false))
    $serial = New-Object byte[] 16
    $random = [System.Security.Cryptography.RandomNumberGenerator]::Create()
    try { $random.GetBytes($serial) } finally { $random.Dispose() }
    $serial[0] = $serial[0] -band 0x7F
    $server = $request.Create($ca, $now.AddMinutes(-5), $now.AddDays($Days), $serial)
    New-Item -ItemType Directory -Path $output -Force | Out-Null
    $caBytes = $ca.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
    [System.IO.File]::WriteAllBytes((Join-Path $output 'ca-cert.cer'), $caBytes)
    Write-Pem 'ca-cert.pem' 'CERTIFICATE' $caBytes
    Write-Pem 'ca-key.pem' 'PRIVATE KEY' $caRsa.Key.Export([System.Security.Cryptography.CngKeyBlobFormat]::Pkcs8PrivateBlob)
    Write-Pem 'server-cert.pem' 'CERTIFICATE' $server.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
    Write-Pem 'server-key.pem' 'PRIVATE KEY' $serverRsa.Key.Export([System.Security.Cryptography.CngKeyBlobFormat]::Pkcs8PrivateBlob)
    Write-Output ('Certificate files: ' + $output)
    Write-Output ('IP addresses: ' + ($addresses -join ', '))
    Write-Output 'No certificate was installed in Windows or on any device. For local phone AR, use an IT-issued certificate or configure trust for ca-cert.cer on the participating device.'
} finally {
    if ($server) { $server.Dispose() }
    if ($ca) { $ca.Dispose() }
    $serverRsa.Dispose()
    $caRsa.Dispose()
}
