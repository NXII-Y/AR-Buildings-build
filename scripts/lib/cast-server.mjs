// «Общий экран» в локальной сети: телефон управляет осмотром, компьютер
// рисует ту же модель и показывает шестизначный код подключения. Здесь —
// только транспорт и состояние комнат: HTTP-роуты (`__cast/...`) и рассылка
// по SSE. Модуль используют оба сервера, которые умеют этот протокол:
//   • scripts/serve-lan.mjs — сервер встречи (раздаёт собранный dist/);
//   • serveCast() в vite.config.js — привычные npm run dev / npm run preview.
// Формат кадров сверяется с src/cast-protocol.ts (на нём же — клиенты).
import { randomBytes, randomInt, randomUUID, timingSafeEqual } from 'node:crypto'
import { readFileSync, statSync } from 'node:fs'

// Тело запроса маленькое: здесь проходят только состояние сцены и ответы
// дисплея, но не кадры камеры. Комнат хватает на один показ и переподключения.
const MAX_BODY = 16 * 1024
const MAX_ROOMS = 32

const token = () => randomBytes(24).toString('base64url')
const fail = (status, message) => Object.assign(new Error(message), { status })
const safeEqual = (a, b) => typeof a === 'string' && typeof b === 'string' && /^[A-Za-z0-9_-]+$/.test(a) && a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b))
const vector = (value, count) => Array.isArray(value) && value.length === count && value.every(n => typeof n === 'number' && Number.isFinite(n) && Math.abs(n) <= 1e8)
const plain = value => value && typeof value === 'object' && !Array.isArray(value)
const onlyKeys = (value, keys) => plain(value) && Object.keys(value).every(key => keys.includes(key))

async function readJson(req) {
    if (!/^application\/json(?:;|$)/i.test(req.headers['content-type'] || '')) throw fail(415, 'Expected application/json')
    const chunks = []
    let size = 0
    await new Promise((done, reject) => {
        const collect = chunk => {
            size += chunk.length
            if (size > MAX_BODY) {
                req.off('data', collect)
                req.resume()
                reject(fail(413, 'Request too large'))
                return
            }
            chunks.push(chunk)
        }
        req.on('data', collect)
        req.once('end', done)
        req.once('aborted', () => reject(fail(400, 'Request interrupted')))
        req.once('error', reject)
    })
    try {
        const value = JSON.parse(Buffer.concat(chunks).toString('utf8'))
        if (!plain(value)) throw new Error()
        return value
    } catch { throw fail(400, 'Invalid JSON object') }
}

// Кадр состояния от телефона: строгая проверка формы и сверка модели с
// реестром (модель обязана существовать в config/models.json).
function cleanFrame(value, models) {
    if (!onlyKeys(value, ['v', 'active', 'marker', 'modelId', 'camera', 'anchorMatrix', 'facadeIndex', 'selectionPath', 'sunMinutes']) || value.v !== 1 || typeof value.active !== 'boolean') throw fail(400, 'Invalid scene state')
    if (!value.active) return { v: 1, active: false }
    const option = models.get(`${value.marker}\0${value.modelId}`)
    if (!option) throw fail(400, 'Unknown model')
    const camera = value.camera
    if (!onlyKeys(camera, ['position', 'quaternion', 'fov', 'near', 'far']) || !vector(camera.position, 3) || !vector(camera.quaternion, 4) || !Number.isFinite(camera.fov) || camera.fov < 1 || camera.fov > 179 || !Number.isFinite(camera.near) || camera.near <= 0 || !Number.isFinite(camera.far) || camera.far <= camera.near || camera.far > 1e9) throw fail(400, 'Invalid camera')
    const norm = Math.hypot(...camera.quaternion)
    if (norm < 0.5 || norm > 1.5) throw fail(400, 'Invalid camera orientation')
    const matrix = value.anchorMatrix
    if (!vector(matrix, 16) || [3, 7, 11].some(i => Math.abs(matrix[i]) > 1e-5) || Math.abs(matrix[15] - 1) > 1e-5) throw fail(400, 'Invalid model pose')
    const facadeIndex = value.facadeIndex ?? null
    if (facadeIndex !== null && (!Number.isInteger(facadeIndex) || facadeIndex < 0 || facadeIndex >= (option.facades?.variants?.length || 0))) throw fail(400, 'Invalid facade')
    const selectionPath = value.selectionPath ?? null
    if (selectionPath !== null && (!Array.isArray(selectionPath) || selectionPath.length > 32 || selectionPath.some(n => !Number.isInteger(n) || n < 0 || n > 100000))) throw fail(400, 'Invalid selection')
    if (!Number.isFinite(value.sunMinutes) || value.sunMinutes < 0 || value.sunMinutes > 1440) throw fail(400, 'Invalid time')
    return { v: 1, active: true, marker: value.marker, modelId: value.modelId, camera: { position: camera.position, quaternion: camera.quaternion, fov: camera.fov, near: camera.near, far: camera.far }, anchorMatrix: matrix, facadeIndex, selectionPath, sunMinutes: value.sunMinutes }
}

/**
 * Создаёт мост «Общего экрана» (без собственного HTTP-сервера).
 *
 * @param {object} options
 * @param {string} [options.base] базовый путь сборки (`/AR-Buildings-build/`)
 * @param {string} options.modelsFile путь к config/models.json (валидация кадров)
 * @param {(req: import('node:http').IncomingMessage) => {screenUrl: string, controllerUrl?: string | null}} options.getBootstrapUrls
 *   адреса страницы экрана и приложения телефона для конкретного запроса
 * @param {number} [options.roomTtlMs] сколько живёт забытая комната
 */
export const createCastHub = ({ base = '/', modelsFile, getBootstrapUrls, roomTtlMs = 12 * 3600_000 }) => {
    const apiPath = `${base}__cast/`
    const rooms = new Map()
    let models = new Map(), registryStamp = ''

    // Реестр перечитывается по mtime: после npm run import новый кадр из той
    // же комнаты проходит валидацию без перезапуска сервера. Нет файла —
    // работаем с пустым реестром (кадры active отклонятся как неизвестные).
    const refreshModels = () => {
        let stat
        try { stat = statSync(modelsFile) } catch { return }
        const stamp = `${stat.mtimeMs}:${stat.size}`
        if (stamp === registryStamp) return
        let registry
        try { registry = JSON.parse(readFileSync(modelsFile, 'utf8')) } catch { return }
        const next = new Map()
        for (const [marker, entries] of Object.entries(registry)) {
            if (Array.isArray(entries)) for (const entry of entries) if (entry?.id && typeof entry.url === 'string') next.set(`${marker}\0${entry.id}`, entry)
        }
        models = next
        registryStamp = stamp
    }
    refreshModels()

    const connected = room => Boolean(room.producerToken && Date.now() - room.producerSeen < 30_000)
    const emit = (room, event, value) => {
        const data = `event: ${event}\nid: ${++room.seq}\ndata: ${JSON.stringify(value)}\n\n`
        for (const client of room.clients) {
            if (client.destroyed || client.writableEnded) { room.clients.delete(client); continue }
            // Отставший/отвалившийся экран не должен копить устаревшие позы.
            if (client.writableLength > 64 * 1024) { client.destroy(); room.clients.delete(client); continue }
            client.write(data)
        }
    }
    const json = (res, status, value) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(value)) }

    const route = async (req, res, url) => {
        // Чужой сайт не должен знакомить устройства с локальным сервером.
        // Vite 8 отдаёт dev/preview по HTTP/2, где хост лежит не в headers.host,
        // а в псевдозаголовке :authority — учитываем оба варианта.
        if (req.headers.origin) {
            let origin
            try { origin = new URL(req.headers.origin) } catch { throw fail(403, 'Invalid origin') }
            const host = req.headers.host || req.headers[':authority']
            if (origin.host !== host) throw fail(403, 'Use the local AR application')
        }
        const path = url.pathname.slice(apiPath.length)
        if (path === 'bootstrap' && req.method === 'GET') {
            const urls = getBootstrapUrls(req)
            return json(res, 200, { enabled: true, screenUrl: urls.screenUrl, controllerUrl: urls.controllerUrl ?? null })
        }
        if (path === 'rooms' && req.method === 'POST') {
            const body = await readJson(req)
            if (Object.keys(body).length) throw fail(400, 'Invalid room request')
            if (rooms.size >= MAX_ROOMS) throw fail(429, 'Too many displays')
            let code
            do { code = String(randomInt(100000, 1000000)) } while ([...rooms.values()].some(room => room.code === code))
            const room = { id: randomUUID(), code, viewerToken: token(), producerToken: null, producerSeen: 0, touched: Date.now(), seq: 0, frame: null, clients: new Set() }
            rooms.set(room.id, room)
            return json(res, 201, { id: room.id, code, viewerToken: room.viewerToken })
        }
        if (path === 'rooms/join' && req.method === 'POST') {
            const body = await readJson(req)
            if (!onlyKeys(body, ['code']) || typeof body.code !== 'string' || !/^\d{6}$/.test(body.code)) throw fail(400, 'Введите шестизначный код экрана')
            const room = [...rooms.values()].find(room => room.code === body.code)
            if (!room) throw fail(404, 'Экран с таким кодом не найден')
            room.producerToken = token()
            room.producerSeen = room.touched = Date.now()
            emit(room, 'status', { connected: true })
            return json(res, 200, { id: room.id, code: room.code, producerToken: room.producerToken })
        }
        const match = /^rooms\/([a-f0-9-]{36})\/(state|disconnect|events|status)$/.exec(path)
        if (!match) throw fail(404, 'Not found')
        const room = rooms.get(match[1]), operation = match[2]
        if (!room) throw fail(404, 'Экран отключён. Откройте страницу показа заново')
        if (operation === 'events' || operation === 'status') {
            if (req.method !== 'GET') throw fail(405, 'Method not allowed')
            if (!safeEqual(url.searchParams.get('viewerToken'), room.viewerToken)) throw fail(403, 'Invalid display token')
            room.touched = Date.now()
            if (operation === 'status') return json(res, 200, { connected: connected(room), frame: room.frame })
            if (room.clients.size >= 4) throw fail(429, 'Too many display connections')
            // Connection не ставим намеренно: в HTTP/2 он запрещён, а у Vite 8
            // dev/preview идут по HTTP/2 (заголовок давал предупреждение).
            // Для HTTP/1.1 соединение и так keep-alive по умолчанию.
            res.writeHead(200, {
                'Content-Type': 'text/event-stream; charset=utf-8',
                'Cache-Control': 'no-cache, no-transform',
                'X-Accel-Buffering': 'no',
            })
            res.flushHeaders()
            req.socket.setNoDelay(true)
            res.write('retry: 1500\n\n')
            room.clients.add(res)
            res.write(`event: status\ndata: ${JSON.stringify({ connected: connected(room) })}\n\n`)
            if (room.frame) res.write(`event: state\nid: ${room.seq}\ndata: ${JSON.stringify(room.frame)}\n\n`)
            req.once('close', () => room.clients.delete(res))
            return
        }
        if (req.method !== 'POST') throw fail(405, 'Method not allowed')
        const auth = /^Bearer ([A-Za-z0-9_-]+)$/.exec(req.headers.authorization || '')?.[1]
        if (!room.producerToken || !safeEqual(auth, room.producerToken)) throw fail(403, 'Подключитесь к экрану заново')
        if (operation === 'disconnect') {
            await readJson(req)
            room.producerToken = null
            emit(room, 'status', { connected: false })
            return json(res, 200, { ok: true })
        }
        refreshModels()
        const frame = cleanFrame(await readJson(req), models)
        room.producerSeen = room.touched = Date.now()
        room.frame = frame
        emit(room, 'state', frame)
        return json(res, 200, { ok: true, seq: room.seq })
    }

    // Обрабатывает запрос, если путь принадлежит мосту. true — запрос наш и
    // ответ уже отправлен (ошибки тоже превращаются в JSON-ответ здесь же).
    const handle = async (req, res, url) => {
        if (!url.pathname.startsWith(apiPath)) return false
        try { await route(req, res, url) } catch (error) {
            if (!res.headersSent) json(res, error.status || 500, { error: error.status ? error.message : 'Local screen error' })
            else res.destroy()
        }
        return true
    }

    // Раз в 15 секунд: чистим заброшенные комнаты, шлём зрителям актуальное
    // «телефон в сети» и держим SSE-соединение живым.
    const heartbeat = () => {
        for (const [id, room] of rooms) {
            if (Date.now() - room.touched > roomTtlMs) { for (const client of room.clients) client.end(); rooms.delete(id); continue }
            if (room.clients.size) { room.touched = Date.now(); emit(room, 'status', { connected: connected(room) }); for (const client of room.clients) client.write(': keepalive\n\n') }
        }
    }

    const close = () => {
        for (const room of rooms.values()) for (const client of room.clients) client.end()
    }

    return { apiPath, handle, heartbeat, close }
}
