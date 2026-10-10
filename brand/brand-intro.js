// A single wordmark moves from the intro into the camera header.
// The camera pipeline runs independently; this UI never holds XR8.run().
export const APP_NAME = 'Моспроект · Пространство'

export const createBrandIntro = ({ base = './', showStartupStatus = true } = {}) => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const style = document.createElement('style')
    style.dataset.mosproektBrand = ''
    style.textContent = `
        @font-face {font-family:SpaceFirs;src:url("${base}brand/firs-neue.ttf") format("truetype");font-weight:500;font-display:swap}
        .space-brand {position:fixed;left:calc(12px + env(safe-area-inset-left,0px));top:calc(8px + env(safe-area-inset-top,0px));width:156px;padding:0;background:transparent;box-sizing:border-box;transform-origin:0 0;z-index:521;pointer-events:none;user-select:none;will-change:transform,opacity}
        .space-brand__logo {display:block;width:100%;height:auto;aspect-ratio:14447/1309;filter:drop-shadow(0 0 1.5px rgba(255,255,255,.95)) drop-shadow(0 1px 1px rgba(255,255,255,.8))}
        .space-brand__name {margin:9px 0 0;font:500 10px/1.3 SpaceFirs,Arial,sans-serif;letter-spacing:1.65px;text-align:center;color:#202023}
        .space-brand__fallback {font:700 19px/1.2 Arial,sans-serif;letter-spacing:.3px;display:block;text-align:center;color:#111}
        .space-intro {position:fixed;inset:0;background:#fff;z-index:520;pointer-events:auto;will-change:opacity}
        .space-intro__line {position:fixed;height:1px;background:#b9b6ba;transform-origin:0 50%;z-index:521;pointer-events:none;will-change:transform,opacity}
        .space-status {position:fixed;left:24px;right:24px;bottom:calc(26px + env(safe-area-inset-bottom,0px));margin:0;text-align:center;font:500 11px/1.6 SpaceFirs,Arial,sans-serif;letter-spacing:.25px;color:#737079;z-index:522;pointer-events:none}
        .space-status.is-floating {left:50%;right:auto;transform:translateX(-50%);max-width:calc(100vw - 48px);width:max-content;background:#fff;padding:8px 12px;color:#4d4950}
        .space-error {position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(300px,calc(100vw - 48px));padding:22px;box-sizing:border-box;background:#fff;color:#202023;z-index:523;font:500 14px/1.6 SpaceFirs,Arial,sans-serif;text-align:center}
        .space-error button {margin-top:14px;padding:10px 14px;border:1px solid #d8d5da;border-radius:0;background:#fff;color:#202023;font:inherit;cursor:pointer}
        .space-error button:focus-visible {outline:2px solid #777;outline-offset:3px}
        .space-brand [hidden], .space-error[hidden], .space-status[hidden] {display:none!important}
        .space-brand[data-phase=docked] .space-brand__name {display:none}
    `
    document.head.appendChild(style)
    document.title = APP_NAME

    const backdrop = document.createElement('div')
    backdrop.className = 'space-intro'
    backdrop.setAttribute('aria-hidden', 'true')
    const identity = document.createElement('div')
    identity.className = 'space-brand'
    identity.setAttribute('aria-label', APP_NAME)
    const logo = document.createElement('img')
    logo.className = 'space-brand__logo'
    logo.src = `${base}brand/mosproekt-black-logo-web.png`
    logo.alt = 'Моспроект'
    logo.width = 14447
    logo.height = 1309
    const fallback = document.createElement('span')
    fallback.className = 'space-brand__fallback'
    fallback.textContent = 'МОСПРОЕКТ'
    fallback.hidden = true
    logo.addEventListener('error', () => { logo.hidden = true; fallback.hidden = false }, { once: true })
    const name = document.createElement('p')
    name.className = 'space-brand__name'
    name.textContent = 'ПРОСТРАНСТВО'
    identity.append(logo, fallback, name)
    const line = document.createElement('div')
    line.className = 'space-intro__line'
    const status = document.createElement('p')
    status.className = 'space-status'
    status.setAttribute('role', 'status')
    status.setAttribute('aria-live', 'polite')
    status.textContent = 'Подготовка дополненной реальности'
    status.hidden = !showStartupStatus
    const errorBox = document.createElement('div')
    errorBox.className = 'space-error'
    errorBox.setAttribute('role', 'alert')
    errorBox.hidden = true
    const errorText = document.createElement('div')
    const retry = document.createElement('button')
    retry.type = 'button'
    retry.textContent = 'Обновить страницу'
    retry.addEventListener('click', () => window.location.reload())
    errorBox.append(errorText, retry)
    document.body.append(backdrop, identity, line, status, errorBox)

    let phase = 'intro'
    let cameraReady = false
    let disposed = false
    let error = false
    const motions = new Set()
    let resolveFinished
    const finished = new Promise((resolve) => { resolveFinished = resolve })
    const setPhase = (value) => { phase = value; identity.dataset.phase = value }
    const wait = (time) => new Promise((resolve) => window.setTimeout(resolve, time))
    const motion = async (element, frames, duration) => {
        if (reduceMotion || typeof element.animate !== 'function') return
        const animation = element.animate(frames, { duration, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'both' })
        motions.add(animation)
        try {
            await animation.finished
            const last = frames[frames.length - 1]
            for (const key of ['opacity', 'transform']) if (last[key] !== undefined) element.style[key] = last[key]
        } catch { /* resize/disposal cancels a transition */ }
        motions.delete(animation)
        animation.cancel()
    }
    const centerTransform = () => {
        const rect = identity.getBoundingClientRect()
        const width = Math.min(380, window.innerWidth * .76)
        const factor = width / rect.width
        const left = (window.innerWidth - rect.width * factor) / 2
        const top = (window.innerHeight - rect.height * factor) / 2
        line.style.left = `${left + 6 * factor}px`
        line.style.top = `${top + rect.height * factor + 18}px`
        line.style.width = `${logo.offsetWidth * factor}px`
        return `translate(${left - rect.left}px,${top - rect.top}px) scale(${factor})`
    }
    // Get the destination rectangle before applying any transformed start state.
    const centered = centerTransform()
    identity.style.transform = centered
    identity.style.opacity = '0'
    line.style.transform = 'scaleX(0)'
    const resize = () => {
        if (phase !== 'intro' || disposed) return
        motions.forEach((animation) => animation.cancel())
        identity.style.transform = 'none'
        identity.style.transform = centerTransform()
        identity.style.opacity = '1'
    }
    window.addEventListener('resize', resize)

    const finish = () => {
        if (disposed || phase === 'docked') return
        identity.style.transform = 'none'
        identity.style.opacity = '1'
        identity.style.willChange = 'auto'
        identity.style.zIndex = cameraReady ? '96' : '521'
        backdrop.remove()
        line.remove()
        status.classList.add('is-floating')
        status.hidden = !showStartupStatus || cameraReady || error
        window.removeEventListener('resize', resize)
        setPhase('docked')
        resolveFinished()
    }
    const play = async () => {
        try {
            await Promise.race([
                Promise.allSettled([logo.decode?.(), document.fonts?.ready]),
                wait(400),
            ])
            if (disposed || phase === 'docked') return
            if (reduceMotion || typeof identity.animate !== 'function') { finish(); return }
            const current = identity.style.transform
            const appear = motion(identity, [{ opacity: 0, transform: `${current} translateY(5px)` }, { opacity: 1, transform: current }], 800)
            await wait(320)
            if (disposed || phase === 'docked') return
            const draw = motion(line, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 1300)
            await Promise.all([appear, draw])
            if (disposed || phase === 'docked') return
            identity.style.opacity = '1'
            line.style.transform = 'scaleX(1)'
            await wait(260)
            if (disposed || phase === 'docked') return
            setPhase('docking')
            await Promise.all([
                motion(identity, [{ transform: identity.style.transform, opacity: 1 }, { transform: 'none', opacity: 1 }], 1050),
                motion(line, [{ opacity: 1 }, { opacity: 0 }], 420),
            ])
            if (disposed || phase === 'docked') return
            identity.style.transform = 'none'
            identity.style.opacity = '1'
            await motion(backdrop, [{ opacity: 1 }, { opacity: 0 }], 380)
            finish()
        } catch { finish() }
    }
    setPhase('intro')
    void play()

    return {
        finished,
        element: identity,
        setStatus(text) {
            if (disposed || error) return
            status.textContent = text
            status.hidden = !showStartupStatus || cameraReady
        },
        dismiss() {
            if (disposed) return
            motions.forEach((animation) => animation.cancel())
            finish()
        },
        ready() {
            if (disposed || error || cameraReady) return
            cameraReady = true
            if (phase === 'docked') identity.style.zIndex = '96'
            status.hidden = true
        },
        error(text) {
            if (disposed) return
            error = true
            motions.forEach((animation) => animation.cancel())
            finish()
            status.hidden = true
            errorText.textContent = text
            errorBox.hidden = false
        },
        destroy() {
            if (disposed) return
            disposed = true
            motions.forEach((animation) => animation.cancel())
            window.removeEventListener('resize', resize)
            backdrop.remove(); identity.remove(); line.remove(); status.remove(); errorBox.remove(); style.remove()
            resolveFinished()
        },
    }
}
