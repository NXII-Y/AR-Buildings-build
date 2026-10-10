#!/usr/bin/env node
// Local AR hosting: раздаёт собранный dist/ и «Общий экран» (мост состояния
// сцены из scripts/lib/cast-server.mjs). Камера и видео не передаются.
import http from 'node:http'
import https from 'node:https'
import { createReadStream, existsSync, readFileSync, realpathSync, statSync } from 'node:fs'
import { dirname, extname, isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gzipSync } from 'node:zlib'
import { networkInterfaces } from 'node:os'
import { createCastHub } from './lib/cast-server.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const BASE = '/AR-Buildings-build/'
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.hdr': 'application/octet-stream', '.exr': 'application/octet-stream', '.pdf': 'application/pdf', '.cer': 'application/x-x509-ca-cert' }

export async function startLanServer({ root = join(ROOT, 'dist'), host = '0.0.0.0', port = 8080, httpsPort = 8443, tlsKey, tlsCert, roomTtlMs = 12 * 3600_000 } = {}) {
    const staticRoot = realpathSync(resolve(root))
    if (!existsSync(join(staticRoot, 'index.html')) || !existsSync(join(staticRoot, 'screen', 'index.html'))) throw new Error('Build the AR application and screen first: npm run build')
    const compressed = new Map()
    const httpServer = http.createServer()
    const httpsServer = tlsKey && tlsCert ? https.createServer({ key: readFileSync(tlsKey), cert: readFileSync(tlsCert) }) : null
    // Мост «Общего экрана»: адреса зависят от запроса (телефон может прийти
    // по IP, локально — по localhost), поэтому собираются на каждый bootstrap.
    const hub = createCastHub({
        base: BASE,
        modelsFile: join(staticRoot, 'config', 'models.json'),
        roomTtlMs,
        getBootstrapUrls: req => {
            const hostname = new URL(`http://${req.headers.host || 'localhost'}`).hostname
            const httpPort = httpServer.address()?.port || port
            const securePort = httpsServer?.address()?.port
            return {
                screenUrl: `http://${hostname}:${httpPort}/screen/`,
                controllerUrl: securePort ? `https://${hostname}:${securePort}${BASE}` : null,
            }
        },
    })
    const handler = async (req, res) => {
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('Referrer-Policy', 'no-referrer')
        try {
            const url = new URL(req.url, 'http://local.invalid')
            if (await hub.handle(req, res, url)) return
            if (req.method !== 'GET' && req.method !== 'HEAD') throw Object.assign(new Error('Method not allowed'), { status: 405 })
            if (url.pathname === '/screen' || url.pathname === '/screen/') { res.writeHead(302, { Location: `${BASE}screen/${url.search}` }); res.end(); return }
            // Корень HTTP-порта — страница «Общего экрана»: на компьютере
            // показа ждут код подключения, а не AR-приложение (ему нужна камера).
            // По HTTPS корень — приложение: так на телефоне открывают AR.
            if (url.pathname === '/') {
                const encrypted = Boolean(req.socket && 'encrypted' in req.socket && req.socket.encrypted)
                res.writeHead(302, { Location: (encrypted ? BASE : `${BASE}screen/`) + url.search })
                res.end()
                return
            }
            if (url.pathname === BASE.slice(0, -1)) { res.writeHead(302, { Location: BASE }); res.end(); return }
            if (url.pathname === `${BASE.slice(0, -1)}/screen`) { res.writeHead(302, { Location: `${BASE}screen/` }); res.end(); return }
            if (!url.pathname.startsWith(BASE)) throw Object.assign(new Error('Not found'), { status: 404 })
            let name
            try { name = decodeURIComponent(url.pathname.slice(BASE.length)) } catch { throw Object.assign(new Error('Invalid path'), { status: 400 }) }
            if (name.includes('\0')) throw Object.assign(new Error('Invalid path'), { status: 400 })
            if (!name || name.endsWith('/')) name += 'index.html'
            const file = resolve(staticRoot, name), rel = relative(staticRoot, file)
            if (isAbsolute(rel) || rel.startsWith('..')) throw Object.assign(new Error('Forbidden path'), { status: 403 })
            if (!existsSync(file)) throw Object.assign(new Error('Not found'), { status: 404 })
            const actual = realpathSync(file), actualRelative = relative(staticRoot, actual)
            if (isAbsolute(actualRelative) || actualRelative.startsWith('..')) throw Object.assign(new Error('Forbidden path'), { status: 403 })
            const stat = statSync(actual)
            if (!stat.isFile()) throw Object.assign(new Error('Not found'), { status: 404 })
            const extension = extname(actual).toLowerCase(), etag = `W/"${stat.size}-${Math.trunc(stat.mtimeMs)}"`
            const immutable = name.startsWith('assets/') && /-[A-Za-z0-9_-]{8,}\./.test(name)
            res.setHeader('Content-Type', MIME[extension] || 'application/octet-stream')
            res.setHeader('ETag', etag)
            res.setHeader('Cache-Control', immutable ? 'public, max-age=31536000, immutable' : 'no-cache')
            if (req.headers['if-none-match'] === etag) { res.writeHead(304); res.end(); return }
            if (['.html', '.js', '.mjs', '.css', '.json', '.svg'].includes(extension) && stat.size <= 3 * 1024 * 1024 && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
                const key = `${actual}:${etag}`
                let data = compressed.get(key)
                if (!data) { data = gzipSync(readFileSync(actual)); if (compressed.size >= 32) compressed.delete(compressed.keys().next().value); compressed.set(key, data) }
                res.setHeader('Content-Encoding', 'gzip')
                res.setHeader('Vary', 'Accept-Encoding')
                res.setHeader('Content-Length', data.length)
                res.writeHead(200)
                res.end(req.method === 'HEAD' ? undefined : data)
                return
            }
            res.setHeader('Content-Length', stat.size)
            res.writeHead(200)
            if (req.method === 'HEAD') { res.end(); return }
            createReadStream(actual).on('error', () => res.destroy()).pipe(res)
        } catch (error) {
            if (!res.headersSent) {
                res.statusCode = error.status || 500
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                res.end(JSON.stringify({ error: error.status ? error.message : 'Local server error' }))
            } else res.destroy()
        }
    }
    httpServer.on('request', handler)
    httpsServer?.on('request', handler)
    for (const server of [httpServer, httpsServer].filter(Boolean)) { server.keepAliveTimeout = 65_000; server.headersTimeout = 67_000; server.requestTimeout = 15_000 }
    const listen = (server, listenPort) => new Promise((done, reject) => { server.once('error', reject); server.listen(listenPort, host, () => { server.off('error', reject); done() }) })
    try { await listen(httpServer, port); if (httpsServer) await listen(httpsServer, httpsPort) }
    catch (error) { httpServer.close(); httpsServer?.close(); hub.close(); throw error }
    const heartbeat = setInterval(() => hub.heartbeat(), 15_000)
    heartbeat.unref()
    return {
        httpServer, httpsServer,
        httpPort: httpServer.address().port,
        httpsPort: httpsServer?.address().port || null,
        async close() {
            clearInterval(heartbeat)
            hub.close()
            await Promise.all([httpServer, httpsServer].filter(Boolean).map(server => new Promise(done => { server.close(done); server.closeAllConnections?.() })))
        },
    }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const args = {}
    for (let i = 2; i < process.argv.length; i++) {
        const flag = process.argv[i]
        if (!flag.startsWith('--') || i + 1 >= process.argv.length) throw new Error(`Expected --option value: ${flag}`)
        args[flag.slice(2)] = process.argv[++i]
    }
    const defaultKey = join(ROOT, 'private', 'lan-tls', 'server-key.pem'), defaultCert = join(ROOT, 'private', 'lan-tls', 'server-cert.pem')
    const options = { root: args.root || join(ROOT, 'dist'), host: args.host || '0.0.0.0', port: Number(args['http-port'] ?? args.port ?? 8080), httpsPort: Number(args['https-port'] ?? 8443), tlsKey: args['tls-key'] || (existsSync(defaultKey) ? defaultKey : null), tlsCert: args['tls-cert'] || (existsSync(defaultCert) ? defaultCert : null) }
    if (![options.port, options.httpsPort].every(value => Number.isInteger(value) && value >= 0 && value <= 65535)) throw new Error('Invalid port')
    const service = await startLanServer(options)
    const addresses = options.host === '0.0.0.0' || options.host === '::'
        ? ['127.0.0.1', ...Object.values(networkInterfaces()).flat().filter(info => info && !info.internal && info.family === 'IPv4').map(info => info.address)]
        : [options.host]
    for (const address of new Set(addresses)) {
        console.log(`Экран: http://${address}:${service.httpPort}/screen/`)
        if (service.httpsPort) console.log(`Телефон: https://${address}:${service.httpsPort}${BASE}`)
    }
    if (!service.httpsPort) console.log('Для камеры телефона нужен HTTPS. Настройте локальный сертификат или TLS корпоративного сервера; HTTP подходит общему экрану.')
    const stop = async () => { await service.close(); process.exit(0) }
    process.once('SIGINT', stop)
    process.once('SIGTERM', stop)
}
