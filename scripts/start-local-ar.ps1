param(
    [string]$HostAddress = '',
    [int]$HttpPort = 8080,
    [int]$HttpsPort = 8443,
    [string]$WebRoot = '',
    [string]$TlsDirectory = ''
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not $WebRoot) { $WebRoot = Join-Path $projectRoot 'dist' }
if (-not $TlsDirectory) { $TlsDirectory = Join-Path $projectRoot 'private\lan-tls' }
if (-not $HostAddress) {
    $HostAddress = @(Get-NetIPConfiguration | Where-Object {
        $_.IPv4DefaultGateway -and $_.IPv4Address -and $_.InterfaceAlias -notmatch 'VPN|TAP|TUN|Teredo|Docker|WSL|happ|xray'
    } | ForEach-Object { $_.IPv4Address.IPAddress }) | Select-Object -First 1
}
if (-not $HostAddress) { $HostAddress = '127.0.0.1' }
$portableNode = Join-Path $projectRoot 'runtime\node.exe'
$nodeCommand = if (Test-Path -LiteralPath $portableNode) { $portableNode } else { (Get-Command node.exe -ErrorAction Stop).Source }
$server = Join-Path $PSScriptRoot 'serve-lan.mjs'
$arguments = @($server, '--root', $WebRoot, '--host', $HostAddress, '--http-port', [string]$HttpPort, '--https-port', [string]$HttpsPort)
$key = Join-Path $TlsDirectory 'server-key.pem'
$cert = Join-Path $TlsDirectory 'server-cert.pem'
if ((Test-Path -LiteralPath $key) -and (Test-Path -LiteralPath $cert)) { $arguments += @('--tls-key', $key, '--tls-cert', $cert) }
& $nodeCommand @arguments
exit $LASTEXITCODE
