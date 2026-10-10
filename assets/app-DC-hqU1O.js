import{C as e,E as t,F as n,I as r,N as i,T as a,_ as o,a as s,c,d as l,f as u,i as d,k as f,n as p,o as m,r as h,s as g,t as _,u as v,x as y}from"./cast-protocol-lqe-miyB.js";var b=`
:root {
    /* Цвета атласа: белый / чёрный / #BD1A22 */
    --ui-accent: #bd1a22;          /* активное состояние */
    --ui-accent-strong: #9c141b;   /* нажатие «заливных» кнопок */
    --ui-ink: #141414;             /* обычные иконки и текст на бумаге */
    --ui-ink-soft: rgba(20, 20, 20, 0.6);
    --ui-muted: #c8c8c8;           /* недоступное состояние */
    --ui-chip: #f2f2f2;            /* серая подложка состояния «нажатие» */
    --ui-paper: rgba(255, 255, 255, 0.94); /* бумажная панель поверх камеры */
    --ui-paper-solid: #ffffff;
    --ui-hairline: rgba(20, 20, 20, 0.12);
    --ui-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
    --ui-shadow-soft: 0 4px 16px rgba(0, 0, 0, 0.2);

    /* Размеры атласа */
    --ui-icon: 22px;
    --ui-btn: 48px;
    --ui-radius: 16px;
}

/* --- Бумажная панель поверх камеры --- */
.ui-panel {
    background: var(--ui-paper);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    border-radius: var(--ui-radius);
    box-shadow: var(--ui-shadow);
    -webkit-tap-highlight-color: transparent;
}
.ui-panel,
.ui-panel * {
    box-sizing: border-box;
}

/* --- Иконочная кнопка (размер атласа, 4 состояния) --- */
.ui-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--ui-btn);
    height: var(--ui-btn);
    padding: 0;
    border: 0;
    border-radius: 12px;
    background: transparent;
    color: var(--ui-ink);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.ui-icon-btn svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
/* активное — акцент */
.ui-icon-btn--active {
    color: var(--ui-accent);
}
/* нажатие — акцент на сером чипе */
.ui-icon-btn:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
/* недоступно */
.ui-icon-btn:disabled,
.ui-icon-btn--disabled {
    color: var(--ui-muted);
    cursor: default;
}

/* --- Кнопка с подписью (размер атласа) --- */
.ui-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: var(--ui-btn);
    padding: 0 18px;
    border: 0;
    border-radius: 12px;
    background: transparent;
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, transform 0.1s;
    -webkit-tap-highlight-color: transparent;
}
.ui-btn svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
/* активное — акцент */
.ui-btn--active {
    color: var(--ui-accent);
}
/* нажатие — акцент на сером чипе */
.ui-btn:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
/* заливная кнопка (главное действие) */
.ui-btn--solid {
    background: var(--ui-accent);
    color: #fff;
}
.ui-btn--solid:active {
    background: var(--ui-accent-strong);
    color: #fff;
    transform: scale(0.97);
}
/* недоступно */
.ui-btn:disabled,
.ui-btn--disabled {
    color: var(--ui-muted);
    cursor: default;
    pointer-events: none;
}
`,x=!1,S=()=>{if(!x){if(!document.getElementById(`ui-theme`)){let e=document.createElement(`style`);e.id=`ui-theme`,e.textContent=b,document.head.appendChild(e)}x=!0}},C=new Set,w=(e,t)=>{if(S(),C.has(e))return;let n=document.createElement(`style`);n.textContent=t,document.head.appendChild(n),C.add(e)},T=1.7,E={pin:`<path d="M20 10.2c0 5.3-8 11.3-8 11.3s-8-6-8-11.3a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,camera:`<rect x="2.5" y="6.5" width="19" height="13.5" rx="2.5"/><path d="M8.5 6.5 10 4h4l1.5 2.5"/><circle cx="12" cy="13.2" r="3.6"/>`,sun:`<circle cx="12" cy="12" r="3.7"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2"/><path d="m5.2 5.2 1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"/>`,reset:`<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3.5V8h-4.5"/>`,layers:`<path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"/><path d="m3 12 9 4.5L21 12"/><path d="m3 16.5 9 4.5 9-4.5"/>`,view:`<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5"/><path d="M12 12v9"/>`,info:`<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.6" r="0.5" fill="currentColor" stroke="none"/>`,settings:`<circle cx="12" cy="12" r="3.1"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.08a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"/>`,close:`<path d="M6 6 18 18M18 6 6 18"/>`,chevron_left:`<path d="M15 5 8 12l7 7"/>`,chevron_right:`<path d="M9 5l7 7-7 7"/>`,chevron_up:`<path d="M5 15l7-7 7 7"/>`,chevron_down:`<path d="M5 9l7 7 7-7"/>`,morning:`<path d="M3 18h18"/><path d="M7 18a5 5 0 0 1 10 0"/><path d="M12 8V5M6.5 10.5 4.8 8.8M17.5 10.5l1.7-1.7"/>`,day:`<circle cx="12" cy="12" r="3.7"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2"/><path d="m5.2 5.2 1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"/>`,evening:`<path d="M3 18h18"/><path d="M7 18a5 5 0 0 1 10 0"/><path d="M12 3v6.5M9 6.5 12 9.5l3-3"/>`,calendar:`<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/>`,clock:`<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`,checkbox_off:`<rect x="4.5" y="4.5" width="15" height="15" rx="3"/>`,checkbox_on:`<rect x="4.5" y="4.5" width="15" height="15" rx="3"/><path d="m8 12 2.6 2.6L16 9.2"/>`,save:`<path d="M12 3.5v10.5"/><path d="m7.5 10 4.5 4.5 4.5-4.5"/><path d="M4.5 16.5v1.5a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-1.5"/>`,share:`<circle cx="6" cy="12" r="2.4"/><circle cx="17.5" cy="6.5" r="2.4"/><circle cx="17.5" cy="17.5" r="2.4"/><path d="M8.1 10.9 15.4 7.6M8.1 13.1l7.3 3.3"/>`,copy:`<rect x="3.5" y="3.5" width="12" height="12" rx="2.5"/><rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/>`,json:`<path d="M9.5 3.5C7.8 3.5 7 4.7 7 6.2v1.9c0 1.5-.8 2.4-2 3 1.2.6 2 1.5 2 3v1.9c0 1.5.8 2.7 2.5 2.7"/><path d="M14.5 20.5c1.7 0 2.5-1.2 2.5-2.7v-1.9c0-1.5.8-2.4 2-3-1.2-.6-2-1.5-2-3V6.2c0-1.5-.8-2.7-2.5-2.7"/>`,calibrate:`<path d="M4 6h3M11 6h9"/><circle cx="9" cy="6" r="2"/><path d="M4 12h9M17 12h3"/><circle cx="15" cy="12" r="2"/><path d="M4 18h3M11 18h9"/><circle cx="9" cy="18" r="2"/>`,plus:`<path d="M12 5v14M5 12h14"/>`,minus:`<path d="M5 12h14"/>`,check:`<path d="m5 12.5 4.5 4.5L19 7.5"/>`,warning:`<path d="M12 4 2.9 19.1a1 1 0 0 0 .9 1.5h16.4a1 1 0 0 0 .9-1.5L12 4Z"/><path d="M12 10v4"/><circle cx="12" cy="17.3" r="0.5" fill="currentColor" stroke="none"/>`,gallery:`<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m5 17 4.5-4.5 3.5 3.5 2.5-2.5L20 17"/>`,move:`<path d="M12 3v18M3 12h18"/><path d="M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>`,rotate:`<path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 3.5V8h4.5"/>`,scale:`<path d="M4 20 20 4"/><path d="M13 4h7v7"/><path d="M4 13v7h7"/>`,offset_x:`<path d="M4 12h16"/><path d="m7.5 8.5-3.5 3.5 3.5 3.5M16.5 8.5l3.5 3.5-3.5 3.5"/>`,offset_y:`<path d="M12 4v16"/><path d="m8.5 7.5 3.5-3.5 3.5 3.5M8.5 16.5l3.5 3.5 3.5-3.5"/>`,fit_image:`<path d="M8 3.5H5.5A2 2 0 0 0 3.5 5.5V8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16"/><rect x="9" y="9" width="6" height="6" rx="1.2"/>`},D=(e,{size:t=22,className:n=``,label:r=``}={})=>{let i=E[e];return i?`<svg${n?` class="${n}"`:``}${r?` role="img" aria-label="${r}"`:` aria-hidden="true"`} viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="${T}" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`:``},O=`
.model-menu {
    position: fixed;
    left: 50%;
    /* выше нижнего дока app-ui и точек-индикаторов, чтобы не перекрывать их */
    bottom: calc(120px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%) translateY(120%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: var(--ui-paper);
    border-radius: 18px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow);
    color: var(--ui-ink);
    z-index: 100;
    max-width: 92vw;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    box-sizing: border-box;
}
.model-menu.model-menu--visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
}
/* Стандартная синяя подсветка тапа (Android/Chrome) — не нужна */
.model-menu,
.model-menu * {
    -webkit-tap-highlight-color: transparent;
}
.model-menu__title {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    opacity: 0.75;
    margin: 0;
}
.model-menu__title svg {
    width: 16px;
    height: 16px;
    display: block;
}
.model-menu__list {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
    max-width: 86vw;
    padding: 2px;
    /* Список листается вбок; вертикальные жесты (и зум страницы) не нужны */
    touch-action: pan-x;
}
.model-menu__list::-webkit-scrollbar {
    display: none;
}
.model-btn {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 8px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: rgba(20, 20, 20, 0.05);
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.1s;
    color: var(--ui-ink);
    font-family: var(--ui-font);
}
.model-btn:active {
    transform: scale(0.94);
}
/* Активная модель — рамка и подпись акцентом атласа */
.model-btn--active {
    border-color: var(--ui-accent);
    background: rgba(189, 26, 34, 0.08);
    color: var(--ui-accent);
}
.model-btn__thumb {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(20, 20, 20, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
}
.model-btn__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
/* Заглушка превью — когда thumbnail === null */
.model-btn__thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: rgba(20, 20, 20, 0.4);
    background: linear-gradient(135deg, #f2f2f2, #e4e4e4);
}
.model-btn__label {
    font-size: 11px;
    font-weight: 500;
    max-width: 72px;
    text-align: center;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`,k=e=>{if(e.thumbnail){let t=document.createElement(`img`);return t.src=e.thumbnail,t.alt=e.label,t.loading=`lazy`,t}let t=document.createElement(`div`);return t.className=`model-btn__thumb-placeholder`,t.textContent=(e.label||e.id||`?`).charAt(0).toUpperCase(),t},A=(e,t)=>{w(`model-menu`,O);let n=document.createElement(`div`);n.className=`model-menu`,n.setAttribute(`aria-label`,`Выбор модели`);let r=document.createElement(`p`);r.className=`model-menu__title`,r.innerHTML=D(`gallery`,{size:16})+`<span>Фасады</span>`,n.appendChild(r);let i=document.createElement(`div`);i.className=`model-menu__list`;let a=new Map;return e.forEach(e=>{let n=document.createElement(`button`);n.className=`model-btn`,n.type=`button`,n.dataset.modelId=e.id;let r=document.createElement(`div`);r.className=`model-btn__thumb`,r.appendChild(k(e)),n.appendChild(r);let o=document.createElement(`span`);o.className=`model-btn__label`,o.textContent=e.label||e.id,n.appendChild(o),n.addEventListener(`click`,()=>{t(e)}),i.appendChild(n),a.set(e.id,n)}),n.appendChild(i),document.body.appendChild(n),{element:n,setActive(e){a.forEach((t,n)=>{t.classList.toggle(`model-btn--active`,n===e)})},show(){n.classList.add(`model-menu--visible`)},hide(){n.classList.remove(`model-menu--visible`)},destroy(){n.remove(),a.clear()}}},j={quality:`standard`,scanHint:!0},M=`mosproekt.ar.preferences.v1`,N=`mosproekt.ar.models.v1`,P=new Map,F=()=>{try{let e=JSON.parse(localStorage.getItem(M)||`{}`);return{quality:[`economy`,`standard`,`high`].includes(e?.quality)?e.quality:`standard`,scanHint:typeof e?.scanHint!=`boolean`||e.scanHint}}catch{return{...j}}},I=e=>{try{return localStorage.setItem(M,JSON.stringify(e)),!0}catch{return!1}},L=()=>{try{let e=JSON.parse(localStorage.getItem(N)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}},R=e=>{let t=P.get(e)||L()[e];return typeof t==`string`&&t?t:void 0},ee=(e,t)=>{if(!e||!t)return!1;P.set(e,t);try{return localStorage.setItem(N,JSON.stringify({...L(),[e]:t})),L()[e]===t}catch{return!1}},te=.6,ne=3,re=({scene:e,name:t,models:n,maxAnisotropy:i,loader:a=null,onModelActivated:c,onMenuSelect:l,onModelShown:u})=>{let d=new o;d.visible=!1,e.add(d);let f=g();d.add(f.object3D);let p={name:t,models:n,defaultModel:null,anchorGroup:d,groundShadow:f,markerPose:null,modelsCache:new Map,pendingLoads:new Map,menu:null,currentModel:null,currentModelRoot:null,currentFacades:null,currentModelId:null,currentBbox:null,activeMixer:null,currentLights:[],currentAppearGroup:null,appearTime:0,appearInProgress:!1,appearWarmupFrames:0,activate:y,update:b},h=new r,_=0,v=e=>{if(p.modelsCache.has(e.id))return Promise.resolve(p.modelsCache.get(e.id));if(p.pendingLoads.has(e.id))return p.pendingLoads.get(e.id);let t=m(e,{maxAnisotropy:i,onProgress:e=>{a&&a.setProgress(e)}}).then(t=>(p.modelsCache.set(e.id,t),p.pendingLoads.delete(e.id),t)).catch(t=>{throw p.pendingLoads.delete(e.id),t});return p.pendingLoads.set(e.id,t),t};function y(e){return e?(p.currentModel=e,p.currentModelId=e.id,p.menu&&p.menu.setActive(e.id),p.currentAppearGroup&&p.currentAppearGroup.parent===p.anchorGroup&&p.anchorGroup.remove(p.currentAppearGroup),p.currentAppearGroup=null,p.currentFacades=null,p.currentModelRoot=null,p.activeMixer=null,p.currentLights=[],!p.modelsCache.has(e.id)&&a&&a.show(),v(e).then(t=>{if(p.currentModelId!==e.id)return;p.currentFacades=t.facades||null,p.currentModelRoot=t.modelRoot,p.activeMixer=t.mixer,p.currentLights=t.lights,p.currentLights.length>0&&s(p.currentLights,t.modelRoot.scale.x,_),p.currentBbox=t.bbox,c&&c(p,t);let n=new o;n.scale.setScalar(0),n.add(t.modelRoot),p.anchorGroup.add(n),p.currentAppearGroup=n,p.appearTime=0,p.appearInProgress=!0,p.appearWarmupFrames=ne,a&&a.hide(),u&&u(p),console.log(`[AR] Активирована модель: ${e.label} (${e.id})`)}).catch(()=>{a&&a.hide(),p.currentModelId=null,p.currentFacades=null,p.currentModelRoot=null,p.currentAppearGroup=null,p.currentBbox=null,p.currentLights=[]})):Promise.resolve()}function b(e,t=0){if(_=t,p.activeMixer&&p.activeMixer.update(e),p.appearInProgress&&p.currentAppearGroup)if(p.appearWarmupFrames>0)--p.appearWarmupFrames;else{p.appearTime+=Math.min(e,.05);let t=Math.min(p.appearTime/te,1),n=1-(1-t)**3;p.currentAppearGroup.scale.setScalar(n),t>=1&&(p.appearInProgress=!1)}if(p.currentLights.length>0&&p.currentModelRoot){p.currentModelRoot.getWorldScale(h);let e=p.currentAppearGroup!==null&&p.currentAppearGroup.scale.x===0;s(p.currentLights,e?0:h.x,t)}}n.length>1&&(p.menu=A(n,e=>{l&&l(p,e)}));let x=R(t);return p.defaultModel=n.find(e=>e.id===x)||n.find(e=>e.isDefault)||n[0]||null,p.defaultModel||console.warn(`[AR] Нет моделей для маркера:`,t),p},z=({buildings:e={},hooks:n})=>{let i=new Map,a=null,o=null,s=null,c=(e,{position:n,rotation:i,scale:a})=>{e.markerPose||={position:new r,quaternion:new t,scale:new r},e.markerPose.position.copy(n),e.markerPose.quaternion.copy(i),e.markerPose.scale.set(a,a,a)},l=e=>{!e||!e.markerPose||e===o||e===s||(e.anchorGroup.position.copy(e.markerPose.position),e.anchorGroup.quaternion.copy(e.markerPose.quaternion),e.anchorGroup.scale.copy(e.markerPose.scale))};return{register(e){i.set(e.name,e)},has(e){return i.has(e)},get handlers(){return i},getActive:()=>a,getPinned:()=>o,getReturning:()=>s,beginReturn:()=>{if(!o)return null;let e=o;return o=null,s=e,e},endReturn(e){s===e&&(s=null),l(e)},pin(e){s=null,o=e},clearReturning(){s=null},processFound:t=>{let{name:r,position:s,rotation:u,scale:d}=t.detail||t,f=i.get(r);if(!f)return;if(o){c(f,{position:s,rotation:u,scale:d});return}n.hideScanHint();let p=e[r],m=p?.name||r;n.setBuilding(m,p,r),n.setEnvironment(r),a=f,c(f,{position:s,rotation:u,scale:d}),l(f),f.anchorGroup.visible=!0,n.setSunAnchor(f.anchorGroup),i.forEach(e=>{e!==f&&e.anchorGroup.visible&&(e.anchorGroup.visible=!1)}),f.menu?n.presentMenu(f.menu):n.hideMenu(),!f.currentModelId&&f.defaultModel&&f.activate(f.defaultModel),console.log(`[AR] Маркер найден: ${r}`)},processUpdated:e=>{let{name:t,position:n,rotation:r,scale:a}=e.detail||e,o=i.get(t);o&&(c(o,{position:n,rotation:r,scale:a}),l(o))},processLost:e=>{let{name:t}=e.detail||e;i.has(t)}}},ie=({sunMenu:e,infoMenu:t})=>{let n=null,r=null,i=!1,a=!1,o=!1,s=()=>{n&&=(n.hide(),null),r&&=(r.hide(),null)},c=()=>{n&&(r=n,n=null,r.hide())},l=()=>{let e=r;r=null,e&&!i&&!o&&!a&&u(e)},u=e=>{if(i||o||a){n&&=(n.hide(),null),r&&r!==e&&r.hide(),r=e,e.hide();return}r&&=(r.hide(),null),n&&n!==e&&n.hide(),n=e,e.show()};return{present:u,hide:s,openSun:()=>{i||(o&&(o=!1,t.hide()),i=!0,c(),e.show())},closeSun:()=>{i&&(i=!1,e.hide(),l())},isSunOpen:()=>i,suspend:()=>{a=!0,c(),i=!1,o=!1,e.hide(),t.hide()},resume:()=>{a=!1,l()},openInfo:()=>{o||(i&&(i=!1,e.hide()),o=!0,c(),t.show())},closeInfo:()=>{o&&(o=!1,t.hide(),l())},isInfoOpen:()=>o}},ae=`
.sun-menu {
    position: fixed;
    left: 50%;
    /* выше нижнего дока app-ui и точек-индикаторов, как меню «Фасады» */
    bottom: calc(120px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%) translateY(120%);
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: min(360px, 92vw);
    max-height: calc(100vh - 220px);
    overflow-y: auto;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 20px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 13px;
    box-shadow: var(--ui-shadow);
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    user-select: none;
    -webkit-user-select: none;
    /* Панель листается только по вертикали: горизонтальный жест и зум
       страницы внутри неё не нужны (см. page-gestures.ts) */
    touch-action: pan-y;
}
.sun-menu.sun-menu--visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
}
/* Стандартная синяя подсветка тапа (Android/Chrome) — не нужна */
.sun-menu,
.sun-menu * {
    -webkit-tap-highlight-color: transparent;
}
.sun-menu__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}
.sun-menu__title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
}
.sun-menu__close {
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--ui-ink);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.sun-menu__close:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
.sun-menu__close svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
.sun-menu__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
.sun-menu__label {
    font-size: 13px;
    font-weight: 500;
}
.sun-menu__pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 28px;
    padding: 4px 10px;
    border-radius: 9px;
    background: rgba(20, 20, 20, 0.06);
    font-size: 12.5px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}
.sun-menu__pill svg {
    width: 15px;
    height: 15px;
    display: block;
    opacity: 0.75;
}
.sun-menu__slider-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: -6px;
}
.sun-menu__slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    margin: 0;
    border-radius: 2px;
    background: rgba(20, 20, 20, 0.18);
    outline: none;
    /* Ползунок перетаскивается пальцем; пусть жест не уходит в прокрутку
       панели и не считается зумом страницы */
    touch-action: none;
}
.sun-menu__slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 0;
    border-radius: 50%;
    background: var(--ui-accent);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
.sun-menu__slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border: 0;
    border-radius: 50%;
    background: var(--ui-accent);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
.sun-menu__scale {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: var(--ui-ink-soft);
}
.sun-menu__check {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 12.5px;
    color: var(--ui-ink);
}
.sun-menu__check svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
    flex: 0 0 auto;
}
/* Декоративные пункты прототипа — приглушены (как «числа» в концепте) */
.sun-menu__check--disabled {
    opacity: 0.55;
}
.sun-menu__presets {
    display: flex;
    gap: 8px;
}
.sun-menu__preset {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    min-height: 56px;
    padding: 8px 4px;
    border: 0;
    border-radius: 12px;
    background: rgba(20, 20, 20, 0.06);
    color: var(--ui-ink);
    font: inherit;
    font-family: var(--ui-font);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.sun-menu__preset svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
.sun-menu__preset:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
.sun-menu__preset--active {
    background: var(--ui-accent);
    color: #fff;
}
`,oe={morning:[300,660],day:[660,960],evening:[960,1260]},se=[{id:`morning`,label:`Утро`,icon:`morning`,minutes:540},{id:`day`,label:`День`,icon:`day`,minutes:780},{id:`evening`,label:`Вечер`,icon:`evening`,minutes:1080}],ce=e=>{let t=Math.round(e),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`},le=e=>e.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`}).replace(` г.`,``),ue=({time:e=840,date:t=null,onChange:n=null,onClose:r=null}={})=>{w(`sun-menu`,ae);let i=Math.max(0,Math.min(h,e)),a=document.createElement(`div`);a.className=`sun-menu`,a.setAttribute(`role`,`dialog`),a.setAttribute(`aria-label`,`Солнце`);let o=document.createElement(`div`);o.className=`sun-menu__header`;let s=document.createElement(`p`);s.className=`sun-menu__title`,s.textContent=`Солнце`,o.appendChild(s);let c=document.createElement(`button`);c.className=`sun-menu__close`,c.type=`button`,c.setAttribute(`aria-label`,`Закрыть`),c.innerHTML=D(`close`),o.appendChild(c),a.appendChild(o);let l=document.createElement(`div`);l.className=`sun-menu__row`;let u=document.createElement(`span`);u.className=`sun-menu__label`,u.textContent=`Время`,l.appendChild(u);let d=document.createElement(`span`);d.className=`sun-menu__pill`,d.innerHTML=D(`clock`,{size:15})+`<span></span>`,l.appendChild(d),a.appendChild(l);let f=document.createElement(`div`);f.className=`sun-menu__slider-block`;let p=document.createElement(`input`);p.className=`sun-menu__slider`,p.type=`range`,p.min=`0`,p.max=String(h),p.step=`5`,p.setAttribute(`aria-label`,`Время суток`),f.appendChild(p);let m=document.createElement(`div`);m.className=`sun-menu__scale`,[`00:00`,`24:00`].forEach(e=>{let t=document.createElement(`span`);t.textContent=e,m.appendChild(t)}),f.appendChild(m),a.appendChild(f);let g=document.createElement(`div`);g.className=`sun-menu__row`,g.setAttribute(`aria-disabled`,`true`);let _=document.createElement(`span`);_.className=`sun-menu__label`,_.textContent=`Дата`,g.appendChild(_);let v=document.createElement(`span`);v.className=`sun-menu__pill`,v.innerHTML=D(`calendar`,{size:15})+`<span>${le(t||new Date)}</span>`,g.appendChild(v),a.appendChild(g);let y=(e,t)=>{let n=document.createElement(`div`);return n.className=`sun-menu__check sun-menu__check--disabled`,n.setAttribute(`aria-disabled`,`true`),n.innerHTML=D(t?`checkbox_on`:`checkbox_off`)+`<span>${e}</span>`,n};a.appendChild(y(`Реальное направление солнца`,!0)),a.appendChild(y(`Автоматическое движение`,!1));let b=document.createElement(`div`);b.className=`sun-menu__presets`;let x=new Map;se.forEach(({id:e,label:t,icon:n,minutes:r})=>{let i=document.createElement(`button`);i.className=`sun-menu__preset`,i.type=`button`,i.innerHTML=D(n)+`<span>${t}</span>`,i.addEventListener(`click`,()=>C(r)),b.appendChild(i),x.set(e,i)}),a.appendChild(b),document.body.appendChild(a);let S=()=>{x.forEach((e,t)=>{let[n,r]=oe[t],a=i>=n&&i<r;e.classList.toggle(`sun-menu__preset--active`,a)})};function C(e,{silent:t=!1}={}){i=Math.max(0,Math.min(h,Number(e)||0)),p.value=String(i),d.querySelector(`span`).textContent=ce(i),S(),!t&&n&&n({minutes:i})}p.addEventListener(`input`,()=>C(Number(p.value))),c.addEventListener(`click`,()=>{E(),r&&r()});function T(){a.classList.add(`sun-menu--visible`)}function E(){a.classList.remove(`sun-menu--visible`)}return C(i,{silent:!0}),{element:a,show:T,hide:E,isVisible:()=>a.classList.contains(`sun-menu--visible`),getTime:()=>i,setTime(e,t){C(e,t)},destroy(){a.remove(),x.clear()}}},de=`
.info-menu [hidden] {display:none!important}
.info-menu__project {display:flex;flex-direction:column;gap:6px;margin:0 0 14px;font-size:12px;color:#777}
.info-menu__project select {width:100%;min-height:44px;box-sizing:border-box;padding:8px;background:#fff;color:#141414;border:1px solid #dedcdf;border-radius:3px;font:inherit;font-size:14px}
.info-menu__facts {margin:16px 0}
.info-menu__facts div {padding:10px 0;border-top:1px solid #e6e4e6}
.info-menu__facts dt {color:#777;font-size:12px}
.info-menu__facts dd {margin:3px 0 0;font-size:14px}
.info-menu__document {display:block;padding:12px;background:#f5f4f5;color:#141414;text-decoration:none;border-radius:3px;min-height:44px;box-sizing:border-box}
.info-menu {
    position: fixed;
    left: 50%;
    /* выезжает из-под шапки, у которой кнопка «инфо» (высота шапки ~74px) */
    top: calc(76px + env(safe-area-inset-top, 0px));
    transform: translateX(-50%) translateY(-12px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: min(400px, 94vw);
    /* Панель не выше экрана: заголовок закреплён, содержимое скроллится */
    max-height: calc(100dvh - 76px - var(--ar-panel-space-bottom, 110px) - env(safe-area-inset-top, 0px));
    overflow: hidden;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 20px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 13px;
    box-shadow: var(--ui-shadow);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;
    user-select: none;
    -webkit-user-select: none;
}
.info-menu.info-menu--visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
}
/* Стандартная синяя подсветка тапа (Android/Chrome) — не нужна */
.info-menu,
.info-menu * {
    -webkit-tap-highlight-color: transparent;
}
.info-menu__header {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}
/* Тело панели: картинка, строки и описание. Скроллится, когда контент
   не помещается в экран; листается только по вертикали — как «Солнце»
   (page-gestures.ts) */
.info-menu__body {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    overscroll-behavior: contain;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
}
.info-menu__title {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
}
.info-menu__close {
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--ui-ink);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.info-menu__close:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
.info-menu__close svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
/* --- Картинка здания (или заглушка) --- */
/* Рамка облегает саму картинку: у обёртки нет подложки и лишней ширины,
   изображение центрируется и скругляется по своим углам. Потолки по ширине
   панели и высоте — широкие панорамы и высокие кадры влезают целиком */
.info-menu__image {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
}
.info-menu__image img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 220px;
    border-radius: 14px;
}
.info-menu__image[hidden],
.info-menu__placeholder[hidden] {
    display: none;
}
.info-menu__placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 120px;
    padding: 22px 16px;
    box-sizing: border-box;
    border-radius: 14px;
    background: rgba(20, 20, 20, 0.06);
    color: var(--ui-ink-soft);
}
.info-menu__placeholder svg {
    width: 34px;
    height: 34px;
    display: block;
    opacity: 0.6;
}
.info-menu__placeholder span {
    font-size: 12.5px;
    text-align: center;
}
/* --- Строки «подпись → значение» --- */
.info-menu__rows {
    display: flex;
    flex-direction: column;
}
.info-menu__row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 14px;
    padding: 8px 0;
    border-bottom: 1px solid var(--ui-hairline);
}
.info-menu__row:last-child {
    border-bottom: 0;
}
.info-menu__row[hidden] {
    display: none;
}
.info-menu__label {
    flex: 0 0 auto;
    color: var(--ui-ink-soft);
    font-size: 12.5px;
}
.info-menu__value {
    text-align: right;
    font-weight: 500;
    overflow-wrap: anywhere;
}
/* Фасад — активный вариант, а не здание: акцентная пометка */
.info-menu__value--facade {
    color: var(--ui-accent);
}
.info-menu__description {
    margin: 0;
    color: var(--ui-ink);
    font-size: 13px;
    line-height: 1.45;
    white-space: pre-line;
}
.info-menu__description[hidden] {
    display: none;
}
/* Пустое состояние: маркер не найден или нет данных */
.info-menu__empty {
    margin: 0;
    padding: 2px 0;
    color: var(--ui-ink-soft);
    font-size: 12.5px;
    line-height: 1.45;
}
.info-menu__empty[hidden] {
    display: none;
}
`,B=[{field:`address`,label:`Адрес`},{field:`architect`,label:`Архитектор`},{field:`stage`,label:`Стадия`},{field:`modelDate`,label:`Дата модели`},{field:`version`,label:`Версия`}],V=e=>typeof e==`string`?e.trim():``,fe=(e,t,n=null)=>{let r={};if(e){B.forEach(({field:t})=>{let n=V(e[t]);n&&(r[t]=n)});let t=V(e.description);t&&(r.description=t);let n=V(e.image);n&&(r.image=n)}let i=t&&e?.variants?e.variants[t]:void 0,a=!1;if(i){B.forEach(({field:e})=>{let t=V(i[e]);t&&(r[e]=t)});let e=V(i.description);e&&(r.description=e);let t=V(i.image);t&&(r.image=t),a=Object.values(i).some(e=>V(e))}return{name:e?V(e.name):``,rows:B,values:r,description:r.description||``,image:r.image||``,document:e?.document||``,facts:e?.facts||[],facade:a?V(n):``}},pe=({onClose:e=null}={})=>{w(`info-menu`,de);let t=document.createElement(`div`);t.className=`info-menu`,t.id=`ar-info-menu`,t.inert=!0,t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-label`,`Информация о проекте`);let n=document.createElement(`div`);n.className=`info-menu__header`;let r=document.createElement(`p`);r.className=`info-menu__title`,r.textContent=`Информация`,n.appendChild(r);let i=document.createElement(`button`);i.className=`info-menu__close`,i.type=`button`,i.setAttribute(`aria-label`,`Закрыть`),i.innerHTML=D(`close`),n.appendChild(i),t.appendChild(n);let a=document.createElement(`div`);a.className=`info-menu__body`;let o={},s={},c=null,l=null,u=document.createElement(`label`);u.className=`info-menu__project`,u.textContent=`Объект`,u.hidden=!0;let d=document.createElement(`select`);d.setAttribute(`aria-label`,`Объект`),u.appendChild(d),a.appendChild(u);let f=document.createElement(`div`);f.className=`info-menu__image`;let p=document.createElement(`img`);p.alt=`Фотография здания`,f.appendChild(p);let m=document.createElement(`div`);m.className=`info-menu__placeholder`,m.innerHTML=D(`gallery`,{size:34})+`<span>Изображение не добавлено</span>`,a.appendChild(f),a.appendChild(m);let h=document.createElement(`div`);h.className=`info-menu__rows`;let g=document.createElement(`div`);g.className=`info-menu__row`,g.hidden=!0;let _=document.createElement(`span`);_.className=`info-menu__label`,_.textContent=`Объект`;let v=document.createElement(`span`);v.className=`info-menu__value`,g.append(_,v),h.appendChild(g);let y=new Map;B.forEach(({field:e,label:t})=>{let n=document.createElement(`div`);n.className=`info-menu__row`,n.hidden=!0;let r=document.createElement(`span`);r.className=`info-menu__label`,r.textContent=t;let i=document.createElement(`span`);i.className=`info-menu__value`,n.append(r,i),h.appendChild(n),y.set(e,n)});let b=document.createElement(`div`);b.className=`info-menu__row`,b.hidden=!0;let x=document.createElement(`span`);x.className=`info-menu__label`,x.textContent=`Фасад`;let S=document.createElement(`span`);S.className=`info-menu__value info-menu__value--facade`,b.append(x,S),h.appendChild(b),a.appendChild(h);let C=document.createElement(`p`);C.className=`info-menu__description`,a.appendChild(C);let T=document.createElement(`dl`);T.className=`info-menu__facts`,a.appendChild(T);let E=document.createElement(`a`);E.className=`info-menu__document`,E.textContent=`Открыть презентацию PDF ↗`,E.target=`_blank`,E.rel=`noopener noreferrer`,a.appendChild(E);let O=document.createElement(`p`);O.className=`info-menu__empty`,a.appendChild(O),t.appendChild(a),document.body.appendChild(t);let k=null,A=(e,t)=>{k!==e&&(k=e,p.src=e,p.alt=t||`Фотография здания`,f.hidden=!1,m.hidden=!0)},j=()=>{k=null,p.removeAttribute(`src`),f.hidden=!0,m.hidden=!1};p.addEventListener(`error`,()=>{p.getAttribute(`src`)&&j()});let M=e=>{g.hidden=!e.name,v.textContent=e.name,B.forEach(({field:t})=>{let n=y.get(t),r=e.values[t];n.hidden=!r,r&&(n.querySelector(`.info-menu__value`).textContent=r)}),b.hidden=!e.facade,S.textContent=e.facade,C.hidden=!e.description,C.textContent=e.description,T.replaceChildren(),T.hidden=!e.facts.length;for(let t of e.facts){let e=document.createElement(`div`),n=document.createElement(`dt`),r=document.createElement(`dd`);n.textContent=t.label,r.textContent=t.value,e.append(n,r),T.appendChild(e)}let t=P(e.document);E.hidden=!t,t?E.href=t:E.removeAttribute(`href`);let n=!!(e.image||e.description||e.document||e.facts.length||B.some(({field:t})=>e.values[t])||e.facade);O.hidden=n,n||(O.textContent=e.name?`Подробная информация о «${e.name}» не добавлена`:`Наведите камеру на генплан`);let r=P(e.image);r?A(r,e.name||`Фотография здания`):j()},N=()=>{t.classList.remove(`info-menu--visible`),t.inert=!0,t.contains(document.activeElement)&&l?.focus()},P=e=>{if(!e||e.startsWith(`/`)||/^[a-z]+:/i.test(e))return null;try{let t=new URL(`/AR-Buildings-build/`,location.href),n=new URL(e,t);return n.origin===t.origin&&n.pathname.startsWith(t.pathname)?n.href:null}catch{return null}},F=()=>{let e=c&&o[c]||null,t=c&&s[c]||[],n=t.find(e=>e.isDefault)||t[0],r=fe(e,n?.id||null,n?.label||null);!r.name&&c&&(r.name=c),M(r)};return d.addEventListener(`change`,()=>{c=d.value||null,F()}),t.addEventListener(`keydown`,t=>{t.key===`Escape`&&(t.preventDefault(),N(),e?.())}),i.addEventListener(`click`,()=>{N(),e&&e()}),{element:t,show(){a.scrollTop=0,l=document.activeElement,t.inert=!1,t.classList.add(`info-menu--visible`),i.focus()},hide:N,isVisible:()=>t.classList.contains(`info-menu--visible`),getSelectedProjectId:()=>c,setProjects(e,t){o=e,s=t,d.replaceChildren(new Option(`Выберите объект`,``));for(let e of Object.keys(s).sort((e,t)=>(o[e]?.name||e).localeCompare(o[t]?.name||t,`ru`)))d.add(new Option(o[e]?.name||e,e));u.hidden=!Object.keys(s).length;let n=new URLSearchParams(location.search).get(`object`);c=n&&Object.hasOwn(s,n)?n:null,d.value=c||``,F()},setContent(e,{modelId:t=null,facadeLabel:n=null,fallbackName:r=``,projectId:i=null}={}){i&&(c=i,d.value=i);let a=fe(e,t,n);!a.name&&r&&(a.name=r),M(a)},destroy(){t.remove(),y.clear()}}},me=`
.model-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    z-index: 110;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
}
.model-loader.model-loader--visible {
    opacity: 1;
}
.model-loader__spinner {
    width: 56px;
    height: 56px;
    border: 4px solid rgba(255, 255, 255, 0.35);
    border-top-color: var(--ui-accent);
    border-radius: 50%;
    animation: model-loader-spin 0.8s linear infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}
.model-loader__bar {
    width: 168px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
.model-loader__bar-fill {
    width: 0%;
    height: 100%;
    border-radius: 2px;
    background: var(--ui-accent);
    transition: width 0.15s linear;
}
/* Размер файла неизвестен — полоса бежит сама */
.model-loader__bar--indeterminate .model-loader__bar-fill {
    width: 40%;
    animation: model-loader-slide 1.1s ease-in-out infinite;
}
@keyframes model-loader-slide {
    0% { transform: translateX(-110%); }
    100% { transform: translateX(260%); }
}
.model-loader__text {
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.3px;
    background: var(--ui-paper);
    padding: 7px 14px;
    border-radius: 12px;
    box-shadow: var(--ui-shadow-soft);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
@keyframes model-loader-spin {
    to { transform: rotate(360deg); }
}
`,H=()=>{w(`model-loader`,me);let e=document.createElement(`div`);e.className=`model-loader`,e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-label`,`Загрузка модели`);let t=document.createElement(`div`);t.className=`model-loader__spinner`,e.appendChild(t);let n=document.createElement(`div`);n.className=`model-loader__bar`;let r=document.createElement(`div`);r.className=`model-loader__bar-fill`,n.appendChild(r),e.appendChild(n);let i=document.createElement(`div`);i.className=`model-loader__text`,e.appendChild(i),document.body.appendChild(e);let a=e=>{let t=typeof e==`number`&&Number.isFinite(e)&&e>=0?Math.min(1,e):null;n.classList.toggle(`model-loader__bar--indeterminate`,t===null),t!==null&&(r.style.width=`${Math.round(t*100)}%`),i.textContent=t===null?`Загрузка модели…`:`Загрузка модели… ${Math.round(t*100)}%`};return a(null),{element:e,show(){a(null),e.classList.add(`model-loader--visible`)},hide(){e.classList.remove(`model-loader--visible`)},setProgress:a,destroy(){e.remove()}}},he=`
.scan-hint {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 90;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
}
.scan-hint__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.45s ease, transform 0.45s ease;
}
.scan-hint.scan-hint--visible .scan-hint__content {
    opacity: 1;
    transform: translateY(0);
}
.scan-hint__frame {
    position: relative;
    width: min(74vw, 290px);
    height: min(58vw, 220px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scan-hint-breathe 2.8s ease-in-out infinite;
}
.scan-hint__corner {
    position: absolute;
    width: 36px;
    height: 36px;
    border: 2.5px solid rgba(255, 255, 255, 0.92);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
}
.scan-hint__corner--tl {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 12px;
}
.scan-hint__corner--tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 12px;
}
.scan-hint__corner--bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 12px;
}
.scan-hint__corner--br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 12px;
}
.scan-hint__scanline {
    position: absolute;
    left: 12%;
    right: 12%;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #bd1a22 30%, #ff8b90 50%, #bd1a22 70%, transparent);
    box-shadow: 0 0 14px rgba(189, 26, 34, 0.85);
    animation: scan-hint-sweep 2.8s ease-in-out infinite;
}
/* Иконка fit_image в центре рамки — подсказка «кадрируй в эти границы» */
.scan-hint__fit {
    position: absolute;
    color: rgba(255, 255, 255, 0.85);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
}
.scan-hint__label {
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-align: center;
    background: var(--ui-paper);
    padding: 10px 18px;
    border-radius: 14px;
    box-shadow: var(--ui-shadow-soft);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
@keyframes scan-hint-sweep {
    0%, 100% { top: 14%; }
    50% { top: 84%; }
}
@keyframes scan-hint-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.045); }
}
`,U=()=>{w(`scan-hint`,he);let e=document.createElement(`div`);e.className=`scan-hint`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-label`,`Наведите камеру на генплан`);let t=document.createElement(`div`);t.className=`scan-hint__content`;let n=document.createElement(`div`);n.className=`scan-hint__frame`,[`tl`,`tr`,`bl`,`br`].forEach(e=>{let t=document.createElement(`span`);t.className=`scan-hint__corner scan-hint__corner--${e}`,n.appendChild(t)});let r=document.createElement(`div`);r.className=`scan-hint__scanline`,n.appendChild(r);let i=document.createElement(`span`);i.className=`scan-hint__fit`,i.innerHTML=D(`fit_image`,{size:40}),n.appendChild(i);let a=document.createElement(`div`);a.className=`scan-hint__label`,a.textContent=`Наведите камеру на генплан`,t.appendChild(n),t.appendChild(a),e.appendChild(t),document.body.appendChild(e);let o=!1;return{element:e,show(){o=!0,requestAnimationFrame(()=>{o&&e.classList.add(`scan-hint--visible`)})},hide(){o=!1,e.classList.remove(`scan-hint--visible`)},destroy(){o=!1,e.remove()}}},ge=`
.app-ui {
    position: fixed;
    inset: 0;
    z-index: 95;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.45s ease, visibility 0s linear 0.45s;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    font-family: var(--ui-font);
}
.app-ui.app-ui--visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.45s ease;
}
/* Стандартная синяя подсветка тапа (Android/Chrome) — не нужна:
   у кнопок свои состояния нажатия */
.app-ui,
.app-ui * {
    -webkit-tap-highlight-color: transparent;
}
/* --- Шапка: белый текст поверх камеры --- */
.app-ui__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding: calc(8px + env(safe-area-inset-top, 0px)) calc(12px + env(safe-area-inset-right, 0px)) 0 calc(12px + env(safe-area-inset-left, 0px));
    box-sizing: border-box;
    pointer-events: none;
}
.app-ui__meta {
    display: flex;
    flex-direction: column;
    gap: 0;
    min-width: 0;
    max-width: 100%;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
.app-ui__title {
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2px;
    line-height: 1.2;
}
.app-ui__subtitle {
    color: var(--ui-ink);
    background: rgba(255, 255, 255, 0.88);
    width: max-content;
    max-width: 100%;
    padding: 0 4px;
    box-sizing: border-box;
    border-radius: 3px;
    text-shadow: none;
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.app-ui__version {
    display: none;
}
/* Пока здание не распознано, подпись и версия не показываются */
.app-ui__subtitle[hidden],
.app-ui__version[hidden] {
    display: none;
}
/* Постоянные кнопки справа от инструментов; свайп дока их не затрагивает. */
.app-ui__actions {
    flex: 0 0 auto;
    display: flex;
    gap: 2px;
    padding-left: 4px;
    border-left: 1px solid var(--ui-hairline);
    pointer-events: auto;
}
.app-ui__icon-btn {
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--ui-ink);
    cursor: pointer;
    transition: background 0.2s, color 0.2s, transform 0.1s;
}
.app-ui__icon-btn:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
    transform: scale(0.94);
}
/* активное состояние — как в доке: акцент без подложки */
.app-ui__icon-btn--active {
    color: var(--ui-accent);
}
.app-ui__icon-btn svg {
    width: 20px;
    height: 20px;
    display: block;
}
.app-ui__dock-wrap {
    position: absolute;
    left: 50%;
    bottom: calc(8px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%);
    width: min(420px, calc(100vw - 24px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
    display: flex;
    flex-direction: column;
    gap: 4px;
    pointer-events: auto;
}
.app-ui__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    height: 8px;
    pointer-events: none;
}
.app-ui__dots[hidden] {
    display: none;
}
.app-ui__dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    transition: width 0.25s ease, background 0.25s ease;
}
.app-ui__dot--active {
    width: 14px;
    background: rgba(255, 255, 255, 0.95);
}
/* Одна невысокая панель для инструментов, информации и настроек. */
.app-ui__toolbar {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    border-radius: 14px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow);
    color: var(--ui-ink);
}
.app-ui__dock {
    position: relative;
    flex: 1;
    min-width: 0;
    overflow: clip;
    border-radius: 9px;
    touch-action: none;
}
.app-ui__dock-track {
    display: flex;
    width: calc(var(--pages, 1) * 100%);
    transition: transform 0.28s ease;
    will-change: transform;
}
.app-ui__dock-page {
    flex: 0 0 calc(100% / var(--pages, 1));
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
}
.app-ui__dock-btn {
    flex: 0 0 calc(100% / var(--cols, 1));
    min-width: 0;
    min-height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: var(--ui-ink);
    font: inherit;
    font-family: var(--ui-font);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 1.15;
    text-align: center;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
/* нажатие — акцент на сером чипе */
.app-ui__dock-btn:active {
    background: var(--ui-chip);
    color: var(--ui-accent);
}
/* активный пункт — акцент */
.app-ui__dock-btn--active {
    color: var(--ui-accent);
}
.app-ui__dock-btn svg {
    width: var(--ui-icon);
    height: var(--ui-icon);
    display: block;
}
.app-ui__dock-label {display:none}
.app-ui button:focus-visible {outline:2px solid var(--ui-accent);outline-offset:-2px}
.app-ui__dock-btn--disabled,
.app-ui__dock-btn:disabled {
    color: var(--ui-muted);
    pointer-events: none;
}
@media (prefers-reduced-motion: reduce) {
    .app-ui__dock-track {
        transition: none;
    }
}
`,_e=`AR Buildings`,ve=[[{id:`sun`,label:`Солнце`,icon:`sun`},{id:`reset`,label:`Сброс`,icon:`reset`},{id:`info`,label:`Информация`,icon:`info`},{id:`settings`,label:`Настройки`,icon:`settings`}]],ye=.25,be=8,xe=.35,Se=({title:e=_e,subtitle:t=``,version:n=``,pages:r=ve,onAction:i=null}={})=>{w(`app-ui`,ge);let a=r.filter(e=>e.length>0),o=Math.max(a.length,1),s=Math.max(1,...a.map(e=>e.length)),c=e=>typeof e==`string`?e.trim():``,l=c(t),u=c(n),d=document.createElement(`div`);d.className=`app-ui`;let f=document.createElement(`header`);f.className=`app-ui__header`;let p=document.createElement(`div`);p.className=`app-ui__meta`;let m=document.createElement(`h1`);m.className=`app-ui__title`,m.textContent=e,p.appendChild(m);let h=document.createElement(`div`);h.className=`app-ui__subtitle`,h.textContent=l,h.hidden=!l,p.appendChild(h);let g=document.createElement(`div`);g.className=`app-ui__version`,g.textContent=u,g.hidden=!u,p.appendChild(g),f.appendChild(p);let _=new Map;d.appendChild(f);let v=document.createElement(`div`);v.className=`app-ui__dock-wrap`;let y=document.createElement(`div`);y.className=`app-ui__dots`,y.setAttribute(`aria-hidden`,`true`),y.hidden=o<2,v.appendChild(y);let b=document.createElement(`div`);b.className=`app-ui__toolbar`;let x=document.createElement(`nav`);x.className=`app-ui__dock`,x.setAttribute(`aria-label`,`Инструменты`),x.style.setProperty(`--cols`,String(s));let S=document.createElement(`div`);S.className=`app-ui__dock-track`,S.style.setProperty(`--pages`,String(o)),x.appendChild(S);let C=new Map,T=[],E=[];a.forEach(e=>{let t=document.createElement(`div`);t.className=`app-ui__dock-page`,e.forEach(e=>{let n=document.createElement(`button`);n.className=`app-ui__dock-btn`,n.type=`button`,n.dataset.action=e.id,n.setAttribute(`aria-label`,e.label),n.title=e.label,(e.id===`info`||e.id===`settings`)&&(n.setAttribute(`aria-controls`,e.id===`info`?`ar-info-menu`:`project-sheet`),n.setAttribute(`aria-expanded`,`false`),_.set(e.id,n)),n.innerHTML=D(e.icon)+`<span class="app-ui__dock-label">${e.label}</span>`,n.addEventListener(`click`,()=>{i&&i(e.id)}),t.appendChild(n),C.set(e.id,n)}),S.appendChild(t),E.push(t);let n=document.createElement(`span`);n.className=`app-ui__dot`,y.appendChild(n),T.push(n)}),b.appendChild(x),v.appendChild(b),d.appendChild(v),document.body.appendChild(d);let O=0,k=null,A=!1,j=(e,t=!0)=>{O=Math.max(0,Math.min(o-1,e)),E.forEach((e,t)=>{e.inert=t!==O,e.setAttribute(`aria-hidden`,String(t!==O))}),x.scrollLeft=0;let n=x.clientWidth;S.style.transition=t?``:`none`,S.style.transform=`translateX(${-O*n}px)`,t||(S.offsetWidth,S.style.transition=``),T.forEach((e,t)=>{e.classList.toggle(`app-ui__dot--active`,t===O)}),x.setAttribute(`aria-label`,o>1?`Инструменты, страница ${O+1} из ${o}`:`Инструменты`)},M=e=>{if(!k||e&&e.pointerId!==k.id)return;let{dx:t,width:n,locked:r}=k;if(k=null,!r)return;let i=n*ye,a=O;t<=-i?a+=1:t>=i&&--a,j(a),setTimeout(()=>{A=!1},0)};x.addEventListener(`pointerdown`,e=>{o<2||e.pointerType===`mouse`&&e.button!==0||(k={id:e.pointerId,startX:e.clientX,startY:e.clientY,dx:0,locked:!1,width:x.clientWidth},A=!1)}),x.addEventListener(`pointermove`,e=>{if(!k||e.pointerId!==k.id)return;if(k.dx=e.clientX-k.startX,e.clientY-k.startY,!k.locked){if(Math.abs(k.dx)<be)return;if(Math.abs(k.dy)>Math.abs(k.dx)){k=null;return}k.locked=!0,A=!0,x.setPointerCapture&&x.setPointerCapture(e.pointerId),S.style.transition=`none`}e.preventDefault();let t=-(o-1)*k.width,n=-O*k.width+k.dx;n>0?n*=xe:n<t&&(n=t+(n-t)*xe),S.style.transform=`translateX(${n}px)`}),x.addEventListener(`pointerup`,M),x.addEventListener(`pointercancel`,M),x.addEventListener(`click`,e=>{A&&(e.stopPropagation(),e.preventDefault())},!0),x.addEventListener(`contextmenu`,e=>e.preventDefault());let N=()=>{let e=window.innerHeight-v.getBoundingClientRect().top+8;document.documentElement.style.setProperty(`--ar-panel-space-bottom`,`${Math.max(0,e)}px`)},P=new ResizeObserver(N);P.observe(v);let F=()=>{j(O,!1),N()};return window.addEventListener(`resize`,F),window.addEventListener(`orientationchange`,F),j(0,!1),requestAnimationFrame(N),{element:d,setHeaderActive(e){_.forEach((t,n)=>{t.setAttribute(`aria-expanded`,String(n===e)),t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setBuilding({name:e,version:t}={}){let n=c(e),r=c(t);h.textContent=n,h.hidden=!n,g.textContent=r,g.hidden=!r},setActive(e){C.forEach((t,n)=>{t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setActionActive(e){_.forEach((t,n)=>{t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setPage(e,t=!0){j(e,t)},getPage(){return O},show(){requestAnimationFrame(()=>d.classList.add(`app-ui--visible`))},hide(){d.classList.remove(`app-ui--visible`)},destroy(){P.disconnect(),window.removeEventListener(`resize`,F),window.removeEventListener(`orientationchange`,F),d.remove(),C.clear()}}},Ce=.12,we=1.46,W=e=>y.clamp(e,Ce,we),Te=new r(0,1,0),Ee=({camera:e})=>{let t=new r,n=0,i=Math.PI/3,a=10,o=.5,s=100,c=new r,l=new r,u=new r,d=new r,f=new r,p=new r,m=()=>{let t=e.projectionMatrix.elements,n=t[5]?Math.abs(1/t[5]):Math.tan(Math.PI/6);return{tanX:t[0]?Math.abs(1/t[0]):n*(e.aspect||1),tanY:n}},h=e=>y.clamp(e,o,s);return{pivot:t,getAzimuth:()=>n,getPolar:()=>i,getDistance:()=>a,setAngles:(e,t)=>{n=Number.isFinite(e)?e:n,i=W(Number.isFinite(t)?t:i)},setDistance:e=>{a=h(Number.isFinite(e)?e:a)},setLimits:(e,t)=>{o=Math.max(.05,Number(e)||0),s=Math.max(o,Number(t)||o),a=h(a)},rotate:(e,t,r,a)=>{n-=Math.PI/Math.max(1,r)*e,i=W(i-Math.PI/Math.max(1,a)*t)},fromCamera:()=>{e.updateMatrixWorld(),e.getWorldPosition(c),l.copy(c).sub(t);let r=l.length();r<1e-4||(a=r,n=Math.atan2(l.x,l.z),i=W(Math.acos(y.clamp(l.y/r,-1,1))))},fitDistance:e=>{let{tanX:t,tanY:n}=m();return Math.max(.5,Math.max(.1,e)/Math.max(Math.sin(Math.min(Math.atan(t),Math.atan(n))),.001))},fitBox:(e,t={})=>{let{tanX:r,tanY:a}=m(),o=Number.isFinite(t.azimuth)?t.azimuth:n,s=W(Number.isFinite(t.polar)?t.polar:i),c=Math.sin(s);u.set(c*Math.sin(o),Math.cos(s),c*Math.cos(o)),d.crossVectors(Te,u).normalize(),f.crossVectors(u,d),e.getCenter(l);let h=.5;for(let t=0;t<8;t++){p.set(t&1?e.max.x:e.min.x,t&2?e.max.y:e.min.y,t&4?e.max.z:e.min.z).sub(l);let n=p.dot(u);h=Math.max(h,Math.abs(p.dot(d))/Math.max(r,.001)+n,Math.abs(p.dot(f))/Math.max(a,.001)+n)}return h},apply:()=>{let r=Math.sin(i);c.set(t.x+a*r*Math.sin(n),t.y+a*Math.cos(i),t.z+a*r*Math.cos(n)),e.position.copy(c),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld()}}},De=.4,Oe=`
    uniform float uOpacity;
    void main() {
        float level = 1.0 - uOpacity;
        gl_FragColor = vec4(vec3(level), 1.0);
    }
`,ke=`
    void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
    }
`,Ae=({scene:t})=>{let n=new a(2,2),r=new i({uniforms:{uOpacity:{value:0}},vertexShader:ke,fragmentShader:Oe,blending:5,blendSrc:200,blendDst:202,blendSrcAlpha:200,blendDstAlpha:201,depthTest:!1,depthWrite:!1}),o=new e(n,r);o.frustumCulled=!1,o.matrixAutoUpdate=!1,o.renderOrder=-1e3,o.visible=!1,t.add(o);let s=0,c=0,l=window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches;return{object3D:o,setVisible(e){c=+!!e,e&&(o.visible=!0,l&&(s=1,r.uniforms.uOpacity.value=1))},finish(){c=0,s=0,r.uniforms.uOpacity.value=0,o.visible=!1},update(e){if(!o.visible)return;if(s===c){c===0&&(o.visible=!1);return}let t=l?1:Math.max(0,Number(e)||0)/De;s=c>s?Math.min(c,s+t):Math.max(c,s-t),r.uniforms.uOpacity.value=s,s===c&&c===0&&(o.visible=!1)},destroy(){t.remove(o),n.dispose(),r.dispose()}}},je=5e3,Me=2400,G=.7,Ne=.5,Pe=1.15,Fe=.35,Ie=.5,Le=.5,Re=2,ze=.1,Be=320,Ve=28,He=12,Ue=300,We=new r(1,0,0),Ge=new r(0,1,0),Ke=[`.pin-facades`,`.plan-align`,`.info-menu`,`.project-sheet`,`.app-ui`,`.model-menu`,`.sun-menu`,`.screenshot-view`,`.screenshot-flash`,`.screenshot-toast`,`.calib`,`.pin-hint`,`.pin-demo`,`.model-loader`].join(`, `),qe=`
.pin-facades {position:fixed;inset:0;z-index:105;pointer-events:none}
.pin-facades[hidden] {display:none}
.pin-facades button {position:absolute;top:50%;transform:translateY(-50%);width:44px;height:52px;padding:10px;border:0;border-radius:10px;background:var(--ui-paper);color:var(--ui-ink);box-shadow:var(--ui-shadow-soft);pointer-events:auto;touch-action:manipulation;cursor:pointer}
.pin-facades button:first-child {left:calc(12px + env(safe-area-inset-left,0px))}
.pin-facades button:last-child {right:calc(12px + env(safe-area-inset-right,0px))}
.pin-facades button:active {color:var(--ui-accent)}
.pin-facades button:focus-visible {outline:2px solid var(--ui-accent);outline-offset:3px}
.pin-facades button:disabled {opacity:.5}
.pin-facades svg {display:block;width:100%;height:100%}

/* Подсказка — бумажная плашка с чернильным текстом */
.pin-hint {
    position: fixed;
    left: 50%;
    top: calc(70px + env(safe-area-inset-top, 0px));
    transform: translate(-50%, -8px);
    z-index: 140;
    max-width: 88vw;
    padding: 10px 16px;
    border-radius: 12px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow-soft);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.35;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
    user-select: none;
    -webkit-user-select: none;
}
.pin-hint.pin-hint--visible {
    opacity: 1;
    transform: translate(-50%, 0);
}
.pin-demo {
    position: fixed;
    left: 50%;
    top: calc(70px + env(safe-area-inset-top, 0px));
    transform: translate(-50%, -8px);
    z-index: 139;
    width: min(300px, 86vw);
    padding: 12px 16px 10px;
    box-sizing: border-box;
    border-radius: 16px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow-soft);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0.25s;
    user-select: none;
    -webkit-user-select: none;
}
.pin-demo.pin-demo--run {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
    transition: opacity 0.25s ease, transform 0.25s ease;
}
.pin-demo__viewport {
    position: relative;
    height: 98px;
}
/* Сцены сменяют друг друга: одна сцена = --pin-stage, всего их три */
.pin-demo__stage {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
}
.pin-demo--run .pin-demo__stage {
    animation: pin-demo-stage var(--pin-stage, 2400ms) linear 1 forwards;
}
.pin-demo--run .pin-demo__stage--pinch {
    animation-delay: var(--pin-stage, 2400ms);
}
.pin-demo--run .pin-demo__stage--tap {
    animation-delay: calc(var(--pin-stage, 2400ms) * 2);
}
@keyframes pin-demo-stage {
    0% { opacity: 0; }
    8% { opacity: 1; }
    92% { opacity: 1; }
    100% { opacity: 0; }
}
.pin-demo__art {
    position: relative;
    width: 132px;
    height: 64px;
}
.pin-demo__svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: rgba(20, 20, 20, 0.4);
}
.pin-demo__finger {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    border-radius: 50%;
    background: var(--ui-accent);
    box-shadow: 0 0 0 4px rgba(189, 26, 34, 0.18);
}
/* Вращение: один палец облетает центр, кольцо крутится */
.pin-demo__orbit {
    position: absolute;
    inset: 0;
}
.pin-demo--run .pin-demo__orbit {
    animation: pin-demo-orbit 2.6s linear infinite;
}
@keyframes pin-demo-orbit {
    to { transform: rotate(360deg); }
}
.pin-demo__finger--orbit {
    top: calc(50% - 22px);
}
.pin-demo__ring {
    transform-box: fill-box;
    transform-origin: center;
}
.pin-demo--run .pin-demo__ring {
    animation: pin-demo-ring 2.6s linear infinite;
}
@keyframes pin-demo-ring {
    to { transform: rotate(360deg); }
}
/* Щипок: два пальца расходятся и сходятся */
.pin-demo--run .pin-demo__finger--pinch-l {
    animation: pin-demo-pinch-l 1.9s ease-in-out infinite;
}
@keyframes pin-demo-pinch-l {
    0%, 100% { transform: translateX(-30px); }
    50% { transform: translateX(-8px); }
}
.pin-demo--run .pin-demo__finger--pinch-r {
    animation: pin-demo-pinch-r 1.9s ease-in-out infinite;
}
@keyframes pin-demo-pinch-r {
    0%, 100% { transform: translateX(30px); }
    50% { transform: translateX(8px); }
}
/* Двойной тап: палец и расходящиеся круги */
.pin-demo__ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    box-sizing: border-box;
    border: 2px solid var(--ui-accent);
    border-radius: 50%;
    opacity: 0;
}
.pin-demo--run .pin-demo__ripple {
    animation: pin-demo-ripple 1.9s ease-out infinite;
}
.pin-demo--run .pin-demo__ripple--late {
    animation-delay: 0.95s;
}
@keyframes pin-demo-ripple {
    0% { transform: scale(0.6); opacity: 0.75; }
    70% { opacity: 0; }
    100% { transform: scale(2.9); opacity: 0; }
}
.pin-demo__label {
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    color: var(--ui-ink-soft);
}
/* Анимация демо показывается на всех устройствах, в том числе при
   prefers-reduced-motion: статичный фолбэк выглядел на таких телефонах как
   другая подсказка (две голые подписи), и поведение расходилось. */
`,Je=[{id:`orbit`,label:`1 палец — вращать`,art:`<svg class="pin-demo__svg" viewBox="0 0 132 64"><g class="pin-demo__ring" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 8"><circle cx="66" cy="32" r="22"/><path d="M62 4l10 6-10 6z" fill="currentColor" stroke="none"/></g></svg><span class="pin-demo__orbit"><span class="pin-demo__finger pin-demo__finger--orbit"></span></span>`},{id:`pinch`,label:`2 пальца — приблизить`,art:`<svg class="pin-demo__svg" viewBox="0 0 132 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M44 32H16"/><path d="M24 25l-8 7 8 7"/><path d="M88 32h28"/><path d="M108 25l8 7-8 7"/></svg><span class="pin-demo__finger pin-demo__finger--pinch-l"></span><span class="pin-demo__finger pin-demo__finger--pinch-r"></span>`},{id:`tap`,label:`Двойной тап — выделить объект`,art:`<span class="pin-demo__ripple"></span><span class="pin-demo__ripple pin-demo__ripple--late"></span><span class="pin-demo__finger"></span>`}],Ye=()=>{let e=document.createElement(`div`);e.className=`pin-demo`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-label`,`Жесты: один палец вращает модель, два пальца приближают, двойной тап выделяет объект`),e.style.setProperty(`--pin-stage`,`${Me}ms`);let t=document.createElement(`div`);return t.className=`pin-demo__viewport`,Je.forEach(({id:e,label:n,art:r})=>{let i=document.createElement(`div`);i.className=`pin-demo__stage pin-demo__stage--${e}`,i.innerHTML=`<div class="pin-demo__art">${r}</div><div class="pin-demo__label">${n}</div>`,t.appendChild(i)}),e.appendChild(t),e},Xe=e=>e instanceof Element&&(!!e.closest(Ke)||!!e.closest(`input, select, textarea`)),Ze=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,Qe=!!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches,K=e=>Qe?.01:e,$e=(e,t)=>((t-e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,et=({camera:e,scene:i,onPinRequest:a})=>{w(`pin-mode`,qe);let o=Ae({scene:i}),s=document.createElement(`div`);s.className=`pin-hint`,s.setAttribute(`role`,`status`),document.body.appendChild(s);let c=Ye();document.body.appendChild(c);let u=Ee({camera:e}),d=`off`,p=null,m=null,h=null,g=null,_=[],v=new r,b=null,x=null,S=null,C=null,T=new t,E=new t,D=new r,O=new r,k=new r,A=new l,j=new r,M=new n,N=new f,P=new Map,F=null,I=null,L=null,R=null,ee=null,te=(e,t=je)=>{z(),s.textContent=e,s.classList.add(`pin-hint--visible`),clearTimeout(R??void 0),t>0&&(R=setTimeout(()=>s.classList.remove(`pin-hint--visible`),t))},ne=()=>{clearTimeout(R??void 0),s.classList.remove(`pin-hint--visible`)},re=()=>{ne(),c.classList.remove(`pin-demo--run`),c.offsetWidth,c.classList.add(`pin-demo--run`),clearTimeout(ee??void 0),ee=setTimeout(z,Me*Je.length)},z=()=>{clearTimeout(ee??void 0),c.classList.remove(`pin-demo--run`)},ie=e=>{if(!x)return;x.time+=e;let t=Ze(Math.min(x.time/x.duration,1)),{from:n,to:r}=x;u.setAngles(y.lerp(n.azimuth,r.azimuth,t),y.lerp(n.polar,r.polar,t)),u.setDistance(y.lerp(n.distance,r.distance,t)),u.pivot.lerpVectors(n.pivot,r.pivot,t),x.time>=x.duration&&(x=null)},ae=(e,t)=>{let n={azimuth:u.getAzimuth(),polar:u.getPolar(),distance:u.getDistance(),pivot:u.pivot.clone()};x={time:0,duration:Math.max(.01,t),from:n,to:{azimuth:n.azimuth+$e(n.azimuth,e.azimuth),polar:e.polar,distance:e.distance,pivot:e.pivot.clone()}}},oe=()=>(e.updateMatrixWorld(!0),{position:e.position.clone(),quaternion:e.quaternion.clone()}),se=t=>{if(!C)return;C.time+=t;let n=Ze(Math.min(C.time/C.duration,1));n<1&&(k.copy(e.position),E.copy(e.quaternion),e.position.lerpVectors(C.from.position,k,n),e.quaternion.slerpQuaternions(C.from.quaternion,E,n)),C.time>=C.duration&&(C=null),e.updateMatrixWorld()},ce=()=>{let e=y.degToRad(p?.currentModel?.anchor?.rotationY||0);return new t().setFromAxisAngle(Ge,-e).multiply(new t().setFromAxisAngle(We,-Math.PI/2))},le=()=>{let e=p?.currentModelRoot;if(!e)return[];let t=e=>e.filter(e=>{let t=!1;return e.traverse(e=>{e.isMesh&&(t=!0)}),t}),n=t(e.children);if(n.length===1&&n[0].children.length>1){let e=t(n[0].children);e.length>1&&(n=e)}return n},ue=e=>(p?.anchorGroup&&p.anchorGroup.updateWorldMatrix(!0,!0),A.setFromObject(e),{center:A.getCenter(new r),radius:A.isEmpty()?1:Math.max(A.getSize(j).length()/2,.02)}),de=()=>{let e=p?.currentBbox;if(e)return new r(e.centerX,e.centerY,e.height/2);let t=new r;if(!p||!m||(m.updateWorldMatrix(!0,!0),A.setFromObject(p.currentAppearGroup||m),A.isEmpty()))return t;A.getCenter(t);let n=m.getWorldScale(O).x||1;return t.sub(m.position).applyQuaternion(m.quaternion.clone().invert()).divideScalar(n)},B=()=>{let e=new r;if(!p||!m)return{center:e,radius:1};m.updateWorldMatrix(!0,!0);let t=m.getWorldScale(O).x||1,n=p.currentBbox;if(n){e.set(n.centerX,n.centerY,n.height/2).applyMatrix4(m.matrixWorld);let r=.5*Math.hypot(n.width,n.depth,n.height)*t;return{center:e,radius:Math.max(r,.05)}}return A.setFromObject(p.currentAppearGroup||m),A.isEmpty()?{center:e,radius:1}:(A.getCenter(e),{center:e,radius:Math.max(A.getSize(j).length()/2,.05)})},V=e=>{let t=p?.currentBbox;if(!t||!m)return null;let n=m.getWorldScale(O).x||1,i=new r,a=new r;for(let r=0;r<8;r++)i.set(r&1?t.width/2:-t.width/2,r&2?t.depth/2:-t.depth/2,r&4?t.height/2:-t.height/2).applyQuaternion(e).multiplyScalar(n),a.set(Math.max(a.x,Math.abs(i.x)),Math.max(a.y,Math.abs(i.y)),Math.max(a.z,Math.abs(i.z)));return a},fe=1,pe=e=>{fe=e;let t=Math.min(ze,e),n=e*Re;if(d===`in`){let e=u.getDistance();u.setLimits(Math.min(t,e),Math.max(n,e))}else u.setLimits(t,n)},me=({center:e,radius:t},{animate:n=!0}={})=>{let r=u.fitDistance(t);pe(r);let i={azimuth:u.getAzimuth(),polar:u.getPolar(),distance:r*Le,pivot:e.clone()};n?ae(i,K(Ne)):(u.setAngles(i.azimuth,i.polar),u.setDistance(i.distance),u.pivot.copy(i.pivot),u.apply())},H=document.createElement(`div`);H.className=`pin-facades`,H.setAttribute(`role`,`group`),H.setAttribute(`aria-label`,`Смена фасада`),H.hidden=!0;let he=[],U=()=>{H.hidden=!(d===`in`||d===`active`)||!g||g.count<2||!!(h&&!g.isFacadeNode(h)),he.forEach(e=>{e.disabled=d!==`active`})},ge=()=>{_.forEach(e=>{e.visible=!0}),g?.applyVisibility(null)};for(let e of[-1,1]){let t=document.createElement(`button`);t.type=`button`,t.setAttribute(`aria-label`,e<0?`Предыдущий фасад`:`Следующий фасад`),t.title=e<0?`Предыдущий фасад`:`Следующий фасад`,t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="`+(e<0?`M15 5l-7 7 7 7`:`M9 5l7 7-7 7`)+`"/></svg>`,t.addEventListener(`click`,()=>{if(d!==`active`||!g)return;let t=!!h&&g.isFacadeNode(h);g.step(e),t&&(h=g.getActiveNode(),_.forEach(e=>{e.visible=e===h})),g.applyVisibility(h),ne(),z(),U()}),he.push(t),H.appendChild(t)}document.body.appendChild(H);let _e=({animate:e=!0,silent:t=!1}={})=>h?(ge(),p?.groundShadow&&p.groundShadow.setVisible(!0),h=null,U(),t||te(`Двойной тап — выделить объект`),e&&me(B()),!0):!1,ve=e=>{!e||e===h||(h=e,_.forEach(t=>{t.visible=t===e}),g?.applyVisibility(h),U(),p?.groundShadow&&p.groundShadow.setVisible(!1),te(`Выделен объект. Двойной тап — вернуть всю модель`),me(ue(e)))},ye=(t,n)=>{if(h){_e();return}let r=p?.currentModelRoot;if(!r)return;if(_.length<2){te(`В этой модели один объект — выделять нечего`);return}let i=[];r.traverseVisible(e=>{e.isMesh&&e.visible&&i.push(e)}),M.set(t/window.innerWidth*2-1,-(n/window.innerHeight)*2+1),e.updateMatrixWorld(),N.setFromCamera(M,e);let a=N.intersectObjects(i,!1);if(a.length===0)return;let o=a[0].object;for(;o.parent&&!_.includes(o);)o=o.parent;_.includes(o)&&ve(o)},be=()=>{d===`off`&&typeof a==`function`&&a()},xe=e=>{if(e.pointerType===`mouse`&&e.button!==0||Xe(e.target))return;let t=!1;if(d===`active`&&(t=!0,z(),ne(),x=null),P.size===0?F={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),moved:!1,multi:!1}:F&&(F.multi=!0),P.set(e.pointerId,{x:e.clientX,y:e.clientY}),t&&P.size===2){let[e,t]=Array.from(P.values());L=Math.max(1,Math.hypot(e.x-t.x,e.y-t.y))}t&&e.preventDefault()},Se=e=>{let t=P.get(e.pointerId);if(!t)return;let n={x:e.clientX,y:e.clientY};if(F&&F.id===e.pointerId&&Math.hypot(n.x-F.x,n.y-F.y)>He&&(F.moved=!0),d===`active`){if(P.size===1)u.rotate(n.x-t.x,n.y-t.y,window.innerWidth,window.innerHeight),P.set(e.pointerId,n);else if(P.size>=2){P.set(e.pointerId,n);let[t,r]=Array.from(P.values()),i=Math.hypot(t.x-r.x,t.y-r.y);L&&i>1&&u.setDistance(u.getDistance()*(L/i)),L=i}e.preventDefault()}},Ce=(e,t,n,r)=>{if(I&&n-I.time<Be&&Math.hypot(e-I.x,t-I.y)<Ve){I=null,r(e,t);return}I={x:e,y:t,time:n}},we=e=>{if(!P.has(e.pointerId)||(P.delete(e.pointerId),P.size<2&&(L=null),!F||F.id!==e.pointerId))return;let t=F;if(F=null,e.type===`pointercancel`||d!==`active`&&d!==`off`)return;let n=performance.now()-t.time;t.moved||t.multi||n>=Ue||Ce(t.x,t.y,t.time,d===`active`?ye:be)},W=!1,Te=()=>{W||(W=!0,window.addEventListener(`pointerdown`,xe,{passive:!1}),window.addEventListener(`pointermove`,Se,{passive:!1}),window.addEventListener(`pointerup`,we),window.addEventListener(`pointercancel`,we))},De=()=>{W&&(W=!1,window.removeEventListener(`pointerdown`,xe),window.removeEventListener(`pointermove`,Se),window.removeEventListener(`pointerup`,we),window.removeEventListener(`pointercancel`,we))};Te();let Oe=e=>{if(!b)return;b.time+=e;let t=Ze(Math.min(b.time/b.duration,1));b.apply(t),b.time>=b.duration&&(b=null)},ke=(e,t)=>{let n=m,r=n.getWorldScale(O).x||1;D.copy(de()).applyQuaternion(e).multiplyScalar(r),n.quaternion.copy(e),n.position.copy(t).sub(D)},Ke=e=>{let t=e?.markerPose;t&&(e.anchorGroup.position.copy(t.position),e.anchorGroup.quaternion.copy(t.quaternion),e.anchorGroup.scale.copy(t.scale))},Qe=e=>{if(!e||!e.currentModelRoot)return!1;let t=p===e;d!==`off`&&(S=null,x=null,b=null,ge(),p?.groundShadow&&p.groundShadow.setVisible(!0),p&&!t&&Ke(p)),p=e,m=p.anchorGroup,d=`in`,h=null,P.clear(),F=null,I=null,L=null,m.updateMatrixWorld(!0);let n=m.position.clone(),r=m.quaternion.clone(),i=m.scale.clone(),a=i.x||1,s=de(),c=n.clone().add(s.clone().applyQuaternion(r).multiplyScalar(a)),l=t?v.clone():c.clone();v.copy(l);let f=ce();b={time:0,duration:K(G),apply:e=>{T.slerpQuaternions(r,f,e),m.quaternion.copy(T),D.copy(s).applyQuaternion(T).multiplyScalar(a),m.position.lerpVectors(c,l,e).sub(D),m.scale.copy(i)}};let{radius:y}=B();u.pivot.copy(l),u.setLimits(.05,1e3),u.fromCamera();let w=u.getAzimuth()+Fe,E=V(f),O=u.fitDistance(y);return E&&(A.min.copy(E).negate(),A.max.copy(E),O=u.fitBox(A,{azimuth:w,polar:Pe})),pe(O),C={time:0,duration:K(G),from:oe()},ae({azimuth:w,polar:Pe,distance:O*Ie,pivot:l},K(G)),_=le(),g=p.currentFacades,g?.applyVisibility(null),U(),Te(),o.setVisible(!0),!0},et=(e=null)=>{if(S=e,d===`off`){let e=S;S=null,e&&e();return}if(d===`out`)return;h&&_e({animate:!1,silent:!0}),d=`out`,U(),x=null,P.clear(),F=null,I=null,L=null,C={time:0,duration:K(G),from:oe()};let t=m.position.clone(),n=m.quaternion.clone(),r=m.scale.clone();b={time:0,duration:K(G),apply:e=>{let i=p?.markerPose;i&&(T.slerpQuaternions(n,i.quaternion,e),m.quaternion.copy(T),m.position.lerpVectors(t,i.position,e),m.scale.lerpVectors(r,i.scale,e))}},o.setVisible(!1),ne(),z()},tt=()=>{d=`off`,g=null,U(),p=null,m=null,C=null,o.finish();let e=S;S=null,e&&e()},nt=()=>{if(!p||d===`off`||d===`out`)return;ge(),h=null,_=le(),g=p.currentFacades,g?.applyVisibility(null),U(),b=null,p.groundShadow&&p.groundShadow.setVisible(!0),m.updateWorldMatrix(!0,!0),ke(ce(),v);let e=B();d===`active`?me(e):pe(u.fitDistance(e.radius))},rt=e=>{if(d===`off`)return;let t=Math.min(Number(e)||0,.05);o.update(t),b&&Oe(t),x&&ie(t),d===`in`||d===`active`?(u.apply(),se(t),d===`in`&&!b&&!x&&(d=`active`,U(),pe(fe),re())):d===`out`&&(se(t),b||tt())},q=new r,J=new t;return{element:s,enable:Qe,disable:et,update:rt,refresh:nt,getCastFrame:()=>{let t=p?.currentModelRoot,n=t?.parent;if(d!==`active`&&d!==`in`||!p?.currentModelId||!t||!n)return{v:1,active:!1};n.updateWorldMatrix(!0,!1),e.getWorldPosition(q),e.getWorldQuaternion(J);let r=Math.abs(e.projectionMatrix.elements[5]),i=Number.isFinite(r)&&r>0?y.radToDeg(2*Math.atan(1/r)):e.fov,a=Number.isFinite(i)&&i>0&&i<180?i:e.fov,o=null;if(h){let e=[],n=h;for(;n&&n!==t&&e.length<32&&n.parent;){let t=n.parent.children.indexOf(n);if(t<0)break;e.unshift(t),n=n.parent}n===t&&(o=e)}return{v:1,active:!0,marker:p.name,modelId:p.currentModelId,camera:{position:[q.x,q.y,q.z],quaternion:[J.x,J.y,J.z,J.w],fov:a,near:e.near,far:e.far},anchorMatrix:Array.from(n.matrixWorld.elements),facadeIndex:p.currentFacades?.getIndex()??null,selectionPath:o}},isActive:()=>d===`active`||d===`in`,hint:te,destroy(){S=null,tt(),De(),clearTimeout(R??void 0),clearTimeout(ee??void 0),o.destroy(),s.remove(),c.remove(),H.remove()}}},tt=1920,nt=({scene:e,camera:t,renderer:n,onUiAction:r,onSunClose:i,onInfoClose:a,onPinRequest:o})=>{n.toneMapping=6,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=1;let s=p({renderer:n,scene:e}),c=d({scene:e}),l=ue({onChange:({minutes:e})=>c.setTime(e),onClose:()=>{i&&i()}});c.setTime(l.getTime());let u=pe({onClose:()=>{a&&a()}}),f=H(),m=U();m.show();let h=Se({onAction:r});h.show();let g=et({camera:t,scene:e,onPinRequest:o}),_=F().quality,v=()=>{let e=window.innerWidth,r=window.innerHeight,i=window.devicePixelRatio||1,a=Math.min(i,(_===`economy`?1280:_===`high`?2560:tt)/Math.max(e,r));n.setPixelRatio(a),n.setSize(e,r),t.aspect=e/r,t.updateProjectionMatrix()},y=n.setSize.bind(n);return n.setSize=((e,t,r)=>{let i=n.domElement;e===i.width&&t===i.height||y(e,t,r)}),{resize:v,setRenderQuality:e=>{_=e,v()},loader:f,scanHint:m,appUi:h,sunRig:c,sunMenu:l,infoMenu:u,pinMode:g,environment:s}},rt=`
.project-sheet {position:fixed;inset:0;z-index:180;pointer-events:none;font-family:var(--ui-font)}
.project-sheet[hidden]{display:none}
.project-sheet__backdrop{position:absolute;inset:0;border:0;background:transparent;padding:0;pointer-events:auto}
.project-sheet__paper{position:absolute;right:0;top:0;bottom:0;width:min(420px,94vw);background:#fff;color:#141414;pointer-events:auto;display:flex;flex-direction:column;box-shadow:-1px 0 0 #ddd;transform:translateX(100%);transition:transform .32s cubic-bezier(.4,0,.2,1);box-sizing:border-box}
.project-sheet.is-open .project-sheet__paper{transform:none}
.project-sheet__header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:calc(18px + env(safe-area-inset-top,0px)) 24px 16px;border-bottom:1px solid #e6e4e6;flex:0 0 auto}
.project-sheet__header h2{font-size:18px;font-weight:500;margin:0}
.project-sheet__close{width:40px;height:40px;border:0;padding:8px;background:transparent;color:inherit;cursor:pointer;display:grid;place-items:center}
.project-sheet__body{padding:24px 24px calc(28px + env(safe-area-inset-bottom,0px));overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;flex:1;min-height:0;scrollbar-width:thin;font-size:14px;line-height:1.55}
.project-sheet h3{font-size:22px;line-height:1.25;font-weight:500;margin:22px 0 8px;overflow-wrap:anywhere}
.project-sheet p{margin:10px 0;white-space:pre-line}
.project-sheet__muted{color:#777;font-size:12px}
.project-sheet__render{display:block;width:100%;max-height:260px;object-fit:contain;margin:20px 0;background:#f8f8f8}
.project-sheet__facts{margin:20px 0}
.project-sheet__facts div{padding:12px 0;border-top:1px solid #e6e4e6}
.project-sheet__facts dt{font-size:12px;color:#777;margin-bottom:3px}
.project-sheet__facts dd{margin:0;font-size:15px}
.project-sheet label{display:block;color:#777;font-size:12px}
.project-sheet select{display:block;width:100%;min-height:44px;border:1px solid #dedcdf;border-radius:3px;padding:9px 10px;margin:7px 0 16px;background:#fff;color:#141414;font:inherit;box-sizing:border-box}
.project-sheet__action{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box;min-height:44px;margin:12px 0;padding:11px 12px;color:#141414;background:#f5f4f5;border:0;border-radius:3px;font:inherit;text-decoration:none;cursor:pointer;text-align:left}
.project-sheet__row{padding:18px 0;border-top:1px solid #e6e4e6}
.project-sheet__row label{display:flex;align-items:center;gap:12px;color:#141414;font-size:14px;cursor:pointer}
.project-sheet input[type=checkbox]{width:18px;height:18px;accent-color:#141414}
.project-sheet :focus-visible{outline:2px solid #777;outline-offset:3px}
.project-sheet__status{font-size:12px;color:#777;min-height:19px}
.project-sheet__cast-code{width:100%;min-height:44px;border:1px solid #dedcdf;border-radius:3px;padding:9px 10px;margin:7px 0;background:#fff;color:#141414;font:inherit;font-size:20px;letter-spacing:4px}
.project-sheet__cast-address{overflow-wrap:anywhere;font-size:12px}
.project-sheet__cast-controls{display:flex;gap:8px}
.project-sheet__cast-controls .project-sheet__action{justify-content:center}
.project-sheet__cast-controls button:disabled{opacity:.45;cursor:default}
@media(prefers-reduced-motion:reduce){.project-sheet__paper{transition:none}}
`,q=({buildings:e,registry:t,onPreferenceChange:n,onClose:r,cast:i,anchorTools:a})=>{w(`project-panel`,rt);let o=null,s=new URLSearchParams(location.search).get(`object`),c=s&&Object.hasOwn(t,s)?s:null,l=F(),u=null,d=null,f=``,p=!1,m=null,h=document.createElement(`div`);h.className=`project-sheet`,h.hidden=!0;let g=document.createElement(`button`);g.type=`button`,g.className=`project-sheet__backdrop`,g.tabIndex=-1,g.setAttribute(`aria-label`,`Закрыть панель`);let _=document.createElement(`section`);_.className=`project-sheet__paper`,_.id=`project-sheet`,_.setAttribute(`role`,`dialog`),_.setAttribute(`aria-modal`,`true`),_.setAttribute(`aria-labelledby`,`project-sheet-title`);let v=document.createElement(`div`);v.className=`project-sheet__header`;let y=document.createElement(`h2`);y.id=`project-sheet-title`;let b=document.createElement(`button`);b.type=`button`,b.className=`project-sheet__close`,b.setAttribute(`aria-label`,`Закрыть`),b.innerHTML=D(`close`,{size:22}),v.append(y,b);let x=document.createElement(`div`);x.className=`project-sheet__body`,_.append(v,x),h.append(g,_),document.body.append(h);let S=(e,t,n=``)=>{let r=document.createElement(e);return r.textContent=t,r.className=n,r},C=e=>{if(!e||e.startsWith(`/`)||/^[a-z]+:/i.test(e))return null;try{let t=new URL(`/AR-Buildings-build/`,location.href),n=new URL(e,t);return n.origin===t.origin&&n.pathname.startsWith(t.pathname)?n.href:null}catch{return null}},T=(e,t)=>{let n=document.createElement(`a`);return n.className=`project-sheet__action`,n.textContent=e+` ↗`,n.href=t,n.target=`_blank`,n.rel=`noopener noreferrer`,x.append(n),n},E=()=>{let n=S(`label`,`Объект`);n.setAttribute(`for`,`project-sheet-project`);let r=document.createElement(`select`);r.id=`project-sheet-project`;let i=new Option(`Выберите объект`,``);r.add(i),Object.keys(t).sort((t,n)=>(e[t]?.name||t).localeCompare(e[n]?.name||n,`ru`)).forEach(t=>r.add(new Option(e[t]?.name||t,t))),r.value=c||``,r.addEventListener(`change`,()=>{c=r.value||null,P(),x.querySelector(`#project-sheet-project`)?.focus()}),x.append(n,r)},O=()=>{if(E(),!c){x.append(S(`p`,`Наведите камеру на генплан или выберите объект, чтобы посмотреть сведения.`,`project-sheet__muted`));return}let t=e[c];x.append(S(`h3`,t?.name||c)),t?.address&&x.append(S(`p`,t.address,`project-sheet__muted`));let n=C(t?.image);if(n){let e=document.createElement(`img`);e.className=`project-sheet__render`,e.src=n,e.alt=`Рендер — `+(t?.name||c),e.loading=`lazy`,e.addEventListener(`error`,()=>{e.replaceWith(S(`p`,`Рендер не удалось загрузить.`,`project-sheet__muted`))},{once:!0}),x.append(e)}if(t?.description&&x.append(S(`p`,t.description)),t?.facts?.length){let e=document.createElement(`dl`);e.className=`project-sheet__facts`,t.facts.forEach(t=>{let n=document.createElement(`div`);n.append(S(`dt`,t.label),S(`dd`,t.value)),e.append(n)}),x.append(e)}let r=C(t?.document);r&&T(`Открыть презентацию PDF`,r);let i=C(t?.markerImage);i&&T(`Открыть генплан-маркер`,i),!n&&!r&&!t?.description&&!t?.facts?.length&&x.append(S(`p`,`Подробные материалы этого объекта пока не добавлены.`,`project-sheet__muted`)),t?.version&&x.append(S(`p`,t.version,`project-sheet__muted`))},k=()=>{let e=I(l);n({...l});let t=x.querySelector(`.project-sheet__status`);t&&(t.textContent=e?`Сохранено на этом устройстве.`:`Применено. Браузер не разрешил сохранить настройки.`)},A=()=>{if(o!==`settings`||!m)return;let e=i?.getStatus(),t=m;t.status.textContent=e?.message||`Общий экран доступен в локальной сети`,t.address.hidden=!e?.screenUrl,e?.screenUrl&&(t.address.href=e.screenUrl,t.address.textContent=e.screenUrl),t.code.disabled=p||!e?.available||!!e.connected,t.connect.disabled=p||!e?.available||!!e.connected||!/^\d{6}$/.test(t.code.value),t.connect.hidden=!!e?.connected,t.disconnect.hidden=!e?.connected,t.disconnect.disabled=p},M=()=>{let e=document.createElement(`section`);e.className=`project-sheet__row`,e.setAttribute(`aria-label`,`Общий экран`),e.append(S(`h3`,`Общий экран`),S(`p`,`Откройте адрес на телевизоре, ПК или проекторе в той же локальной сети. Введите здесь код с экрана.`,`project-sheet__muted`));let t=S(`a`,``,`project-sheet__action project-sheet__cast-address`);t.target=`_blank`,t.rel=`noopener noreferrer`,t.hidden=!0;let n=S(`label`,`Код с общего экрана`),r=document.createElement(`input`);r.id=`project-sheet-cast-code`,r.className=`project-sheet__cast-code`,r.type=`text`,r.inputMode=`numeric`,r.maxLength=6,r.pattern=`[0-9]{6}`,r.autocomplete=`off`,r.spellcheck=!1,r.placeholder=`000000`,r.value=f,n.htmlFor=r.id,r.addEventListener(`input`,()=>{r.value=r.value.replace(/\D/g,``).slice(0,6),f=r.value,A()});let a=document.createElement(`div`);a.className=`project-sheet__cast-controls`;let o=S(`button`,`Подключить`,`project-sheet__action`),s=S(`button`,`Отключить`,`project-sheet__action`);o.type=`button`,s.type=`button`,o.addEventListener(`click`,async()=>{if(!(!i||p)){p=!0,A();try{await i.connect(r.value)}catch{}finally{p=!1,A()}}}),s.addEventListener(`click`,async()=>{if(!(!i||p)){p=!0,A();try{await i.disconnect()}catch{}finally{p=!1,A()}}}),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&!o.disabled&&(e.preventDefault(),o.click())});let c=S(`p`,``,`project-sheet__muted`);c.setAttribute(`role`,`status`),c.setAttribute(`aria-live`,`polite`),a.append(o,s),e.append(t,n,r,a,c),x.append(e),m={status:c,address:t,code:r,connect:o,disconnect:s},A()},N=()=>{x.append(S(`p`,`Настройки применяются сразу и сохраняются на этом устройстве.`,`project-sheet__muted`));let e=S(`label`,`Качество изображения`);e.setAttribute(`for`,`project-sheet-quality`);let t=document.createElement(`select`);t.id=`project-sheet-quality`;for(let[e,n]of[[`economy`,`Экономное`],[`standard`,`Стандартное`],[`high`,`Высокое`]])t.add(new Option(n,e));t.value=l.quality,t.addEventListener(`change`,()=>{l.quality=t.value,k()}),x.append(e,t,S(`p`,`Влияет на разрешение кадра. Геометрия и текстуры модели сохраняются.`,`project-sheet__muted`));let n=document.createElement(`div`);n.className=`project-sheet__row`;let r=document.createElement(`input`);r.type=`checkbox`,r.checked=l.scanHint,r.id=`project-sheet-hint`;let i=document.createElement(`label`);i.htmlFor=r.id,i.append(r,document.createTextNode(`Подсказка наведения на генплан`)),n.append(i),x.append(n),r.addEventListener(`change`,()=>{l.scanHint=r.checked,k()});let a=S(`p`,``,`project-sheet__status`);a.setAttribute(`role`,`status`),x.append(a);let o=S(`button`,`Сбросить настройки отображения`,`project-sheet__action`);o.type=`button`,o.addEventListener(`click`,()=>{l={...j},P(),k()}),x.append(o),M()},P=()=>{m=null,x.replaceChildren(),y.textContent=o===`settings`?`Настройки`:`Информация об объекте`,o===`settings`?N():O()},L=()=>{o&&(o=null,_.inert=!0,h.classList.remove(`is-open`),r(),u?.focus(),d=setTimeout(()=>{o||(h.hidden=!0)},340))};return b.addEventListener(`click`,L),g.addEventListener(`click`,L),h.addEventListener(`keydown`,e=>{if(!o)return;if(e.key===`Escape`){e.preventDefault(),L();return}if(e.key!==`Tab`)return;let t=Array.from(_.querySelectorAll(`button:not(:disabled),select,a[href],input:not(:disabled)`)),n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())}),{open:e=>{if(o===e){L();return}d&&clearTimeout(d),u=document.activeElement,o=e,P(),h.hidden=!1,_.inert=!1,requestAnimationFrame(()=>{o===e&&(h.classList.add(`is-open`),b.focus())})},close:L,refreshCast:A,getMode:()=>o,getPreferences:()=>({...l}),setProject:e=>{c=e,o===`info`&&P()},destroy:()=>{d&&clearTimeout(d),h.remove()}}},J=800,it=3e3,at=8e3,ot=6e3,Y=`фон`,X=new Set,st=!1,ct=-1,lt=0,ut=0,dt=0,Z=!1,ft=()=>document.hidden===!0||document.webkitHidden===!0||document.mozHidden===!0||document.msHidden===!0,pt=()=>window.XR8!==void 0&&typeof XR8.isInitialized==`function`&&XR8.isInitialized(),mt=()=>{let e=document.querySelectorAll(`video`);return e.length>0?e[e.length-1]:null},ht=e=>{let t=e.srcObject;if(!t||typeof t.getVideoTracks!=`function`)return!0;let n=t.getVideoTracks();return n.length===0||n.some(e=>e.readyState===`live`)},gt=(e=Y)=>{X.add(e),pt()&&(XR8.isPaused()&&!Z||(XR8.pause(),Z=!1,console.log(`[AR] Пауза AR: ${e}`)))},_t=e=>{if(e&&X.delete(e),!(!pt()||ft()||X.size>0)){if(!XR8.isPaused()){Z=!1;return}if(Z){if(Date.now()-dt<at)return;XR8.pause(),Z=!1}Z=!0,dt=Date.now(),lt=Date.now(),XR8.resume(),console.log(`[AR] Возобновляю AR${e?`: ${e}`:``}`)}},vt=e=>{let t=Date.now();t-ut<ot||(ut=t,console.warn(`[AR] Перезапускаю камеру: ${e}`),(!XR8.isPaused()||Z)&&XR8.pause(),Z=!1,_t())},yt=()=>{if(!pt()||(!ft()&&X.has(`фон`)&&X.delete(Y),ft())||X.size>0)return;let e=Date.now();if(XR8.isPaused()){Z?e-dt>=at&&vt(`возобновление зависло`):_t();return}Z=!1;let t=mt();if(!(!t||!t.srcObject)){if(!ht(t)){vt(`треки камеры завершены`);return}if(t.paused&&t.play().catch(()=>{}),t.readyState>=2&&!t.paused&&t.currentTime!==ct){ct=t.currentTime,lt=e;return}e-lt>=it&&vt(`поток кадров остановился`)}},bt=()=>{if(st)return;st=!0;let e=`onvisibilitychange`in document?`visibilitychange`:`webkitvisibilitychange`;document.addEventListener(e,()=>{ft()?gt(Y):_t(Y)}),window.addEventListener(`pagehide`,()=>gt(Y)),window.addEventListener(`pageshow`,()=>_t(Y)),ft()&&gt(Y),lt=Date.now(),window.setInterval(yt,J)},xt=1e3/15,St=8e3,Ct=`Общий экран доступен в локальной сети`,wt=class extends Error{status;constructor(e){super(`Cast request ${e}`),this.status=e}},Tt=({getFrame:e,onStatusChange:t})=>{let n={available:!1,connected:!1,code:null,screenUrl:null,message:Ct},r=null,i=0,a=!1,o=null,s=null,c=null,l=null,u=null,d=1/0,f=``,p=``,m=null,h=-1/0,g=-1/0,v=0,y=0,b=0,x=e=>{if(a)return;let r={...n,...e};JSON.stringify(r)!==JSON.stringify(n)&&(n=r,t?.({...n}))},S=async(e,t,n,r,i=!1)=>{let a=setTimeout(()=>n.abort(),r);try{let r=await fetch(e,{...t,signal:n.signal,cache:`no-store`});if(!r.ok)throw new wt(r.status);return i?await r.json():void 0}finally{clearTimeout(a)}},C=()=>{c?.abort(),c=null,l&&clearTimeout(l),u&&clearTimeout(u),l=null,u=null,d=1/0,m=null,f=``,p=``,h=-1/0,g=-1/0,y=0,b=0},w=e=>{if(!r||a)return;let t=performance.now()+Math.max(0,e);u&&d<=t||(u&&clearTimeout(u),d=t,u=setTimeout(()=>{u=null,d=1/0,T()},Math.max(0,t-performance.now())))},T=async()=>{if(!r||c||a)return;let e=performance.now();if(!m&&f&&e-v>=St&&(m=f),!m){w(Math.max(0,St-(e-v)));return}let t=Math.max(g+xt,y)-e;if(t>0){w(t);return}let n=r,o=i,s=m;m=null;let l=new AbortController;c=l,g=e;try{if(await S(`${_}rooms/${encodeURIComponent(n.id)}/state`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${n.producerToken}`},body:s},l,4e3),o!==i||a)return;p=s,v=performance.now(),y=0,b=0,x({message:`Подключено к экрану · ${n.code}`})}catch(e){if(o!==i||a)return;if(e instanceof wt&&[401,403,404,410].includes(e.status)){r=null,C(),x({connected:!1,code:null,message:`Экран недоступен. Введите код заново.`});return}b+=1,y=performance.now()+Math.min(4e3,250*2**Math.min(b-1,4)),m=f||s,x({message:`Связь прервана. Подключаюсь снова…`})}finally{c===l&&(c=null),o===i&&r&&!a&&(m=b===0?f===p?null:f:f||m,w(m?Math.max(0,y-performance.now()):St))}},E=()=>{if(l=null,!r||a)return;h=performance.now();let t=JSON.stringify(e());t!==f&&(f=t,m=t,w(0))},D=async()=>{let e=new AbortController;o=e;try{let t=await S(`${_}bootstrap`,{},e,4e3,!0);if(a||o!==e)return;if(!t?.enabled||typeof t.screenUrl!=`string`)throw Error(`Casting unavailable`);let n=new URL(t.screenUrl,location.href);if(!t.enabled||![`http:`,`https:`].includes(n.protocol))throw Error(`Casting unavailable`);x({available:!0,screenUrl:n.href,message:`Откройте адрес на общем экране и введите его код.`})}catch{!a&&o===e&&x({available:!1,screenUrl:null,message:Ct})}finally{o===e&&(o=null)}},O=async()=>{let e=r;if(i+=1,r=null,s?.abort(),s=null,C(),x({connected:!1,code:null,message:n.available?`Экран отключён.`:Ct}),!e||a)return;let t=new AbortController;s=t;try{await S(`${_}rooms/${encodeURIComponent(e.id)}/disconnect`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e.producerToken}`},body:`{}`},t,4e3)}catch{}finally{s===t&&(s=null)}};return D(),{getStatus:()=>({...n}),connect:async e=>{if(a)return;if(!n.available){x({message:Ct});return}let t=e.replace(/\s/g,``);if(!/^\d{6}$/.test(t)){x({message:`Введите шесть цифр с общего экрана.`});return}r&&await O();let o=++i;s?.abort(),C(),x({connected:!1,code:null,message:`Подключаюсь к экрану…`});let c=new AbortController;s=c;try{let e=await S(`${_}rooms/join`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({code:t})},c,5e3,!0);if(a||o!==i)return;if(typeof e?.id!=`string`||!e.id||typeof e.producerToken!=`string`||!e.producerToken||e.code!==t)throw Error(`Invalid room`);r=e,v=performance.now(),x({connected:!0,code:t,message:`Подключено к экрану · ${t}`}),E()}catch(e){if(a||o!==i)return;let t=e instanceof wt&&[404,410].includes(e.status)?`Код не найден. Проверьте код на экране.`:e instanceof wt&&e.status===409?`Этот экран уже подключён к другому телефону.`:`Не удалось подключиться. Проверьте сеть и код экрана.`;x({connected:!1,code:null,message:t})}finally{s===c&&(s=null)}},disconnect:O,update(){if(!r||a)return;let e=h+xt-performance.now();if(e<=0){l&&clearTimeout(l),E();return}l||=setTimeout(E,e)},destroy(){a=!0,i+=1,r=null,o?.abort(),s?.abort(),C()}}},Et=({registry:e={},buildings:t={},environments:n={},onReady:r}={})=>{let i,a,o,s=null,c=null,l=null,d=null,f=null,p=null,m=null,h=z({buildings:t,hooks:{hideScanHint:()=>c?.scanHint.hide(),setBuilding:(e,t,n)=>{d=e,m=t||null,c?.appUi.setBuilding({name:e,version:t?.version}),f?.setProject(n),g(n)},setSunAnchor:e=>c?.sunRig.setAnchor(e),setEnvironment:e=>c?.environment.setBuilding(e),presentMenu:e=>l?.present(e),hideMenu:()=>l?.hide()}}),g=e=>{if(!c)return;let n=h.getActive(),r=e||[...h.handlers].find(([,e])=>e===n)?.[0]||c.infoMenu.getSelectedProjectId(),i=(r&&h.handlers.get(r)||null)?.currentModel||null;c.infoMenu.setContent(r?t[r]||null:m,{projectId:r,modelId:i?.id??null,facadeLabel:i?.label??null,fallbackName:r||d||``})},_=()=>{c?.appUi.setActive(l?.isSunOpen()?`sun`:null),c?.appUi.setHeaderActive(f?.getMode()===`settings`?`settings`:l?.isInfoOpen()?`info`:null),f?.getMode()||l?.isInfoOpen()||l?.isSunOpen()||h.getActive()||!f?.getPreferences().scanHint?c?.scanHint.hide():c?.scanHint.show()},v=()=>{let e=h.beginReturn();if(!e)return;let t=c?.pinMode;t?t.disable(()=>{h.endReturn(e),_(),console.log(`[AR] Привязка к плану включена`)}):h.endReturn(e)},y=()=>{let e=c?.pinMode;if(!e)return;if(h.getPinned()){v(),_();return}let t=h.getActive();if(!t||!t.currentModelId){e.hint(`Сначала наведите камеру на генплан`);return}if(h.clearReturning(),!e.enable(t)){e.hint(`Модель ещё загружается — попробуйте через секунду`);return}h.pin(t),_(),console.log(`[AR] Привязка к плану выключена: ${t.name}`)},b=()=>{h.getPinned()&&v(),c?.sunMenu.setTime(840),_(),console.log(`[AR] Вид сброшен: привязка к плану включена, время 14:00`)},x=()=>{l&&(l.openSun(),_())},S=()=>{l&&(l.closeSun(),_())},C=()=>{l&&(l.isInfoOpen()?l.closeInfo():(g(),l.openInfo()),_())},w=()=>{c?.resize()},T=e=>{if(e===`settings`){if(!f)return;f.getMode()!==e&&(S(),l?.suspend()),f.open(e),c?.appUi.setHeaderActive(f.getMode());return}f?.close(),e===`sun`?l?.isSunOpen()?S():x():e===`reset`?b():e===`info`&&C()},E=(e,n)=>{n=n.map(r=>({...r,label:n.length===1&&t[e]?.name||r.label}));let r=re({scene:i,name:e,models:n,maxAnisotropy:o.capabilities.getMaxAnisotropy(),loader:c?.loader??null,onModelActivated:(e,t)=>{e.groundShadow&&t.bbox&&(e.groundShadow.fit(t.bbox),e.groundShadow.setVisible(!0),c&&c.sunRig.setShadowExtent(e.groundShadow.radius,t.bbox.height))},onMenuSelect:(e,t)=>{e.activate(t).then(()=>{e.currentModelId===t.id&&e.currentModelRoot&&!ee(e.name,t.id)&&c?.pinMode.hint(`Не удалось сохранить выбранный вариант на устройстве. При перезагрузке выберите его снова.`)})},onModelShown:e=>{c&&h.getPinned()===e&&c.pinMode.refresh(),e===h.getActive()&&g()}});return h.register(r),r},D=()=>c?{...c.pinMode.getCastFrame(),sunMinutes:c.sunRig.getTime()}:{v:1,active:!1},O=()=>{c=nt({scene:i,camera:a,renderer:o,onUiAction:T,onSunClose:()=>S(),onInfoClose:()=>{l&&(l.closeInfo(),_())},onPinRequest:()=>{let e=h.getActive();!e||!e.currentModelId||y()}}),c.environment.setConfig(n),l=ie({sunMenu:c.sunMenu,infoMenu:c.infoMenu}),f=q({buildings:t,registry:e,cast:p||void 0,anchorTools:void 0,onPreferenceChange:e=>{c?.setRenderQuality(e.quality),_()},onClose:()=>{l?.resume(),c?.appUi.setHeaderActive(null),_()}}),f.getPreferences().scanHint||c.scanHint.hide(),c.infoMenu.setProjects(t,e),Object.entries(e).forEach(([e,t])=>{E(e,t||[])})};return{name:`ar-scene`,onStart:()=>{({scene:i,camera:a,renderer:o}=XR8.Threejs.xrScene()),s=new u,p?.destroy(),p=Tt({getFrame:D,onStatusChange:()=>f?.refreshCast()}),O(),XR8.XrController.updateCameraProjectionMatrix({origin:a.position,facing:a.quaternion}),c?.resize(),window.addEventListener(`resize`,w),window.addEventListener(`orientationchange`,w),r&&r(),c?.environment.preloadDefault()},onUpdate:()=>{if(!s)return;let e=s.getDelta();if(c){c.sunRig.update(),c.environment.update(c.sunRig.getDayFactor());let t=c.sunRig.getGroundShadowScale();h.handlers.forEach(e=>{e.groundShadow.setOpacityScale(t)}),c.pinMode.update(e)}let t=c?c.sunRig.getNightFactor():0;h.handlers.forEach(n=>n.update(e,t)),p?.update()},onDetach:()=>p?.destroy(),listeners:[{event:`reality.imagefound`,process:e=>h.processFound(e)},{event:`reality.imageupdated`,process:e=>h.processUpdated(e)},{event:`reality.imagelost`,process:e=>h.processLost(e)}]}},Dt=`boot-loader--error`,Ot=`boot-loader--hidden`,Q=()=>document.getElementById(`boot-loader`),kt=()=>Q()?.querySelector(`.boot-loader__text`),At=()=>Q()?.querySelector(`.boot-loader__continue`),jt=()=>Q()?.querySelector(`.boot-loader__retry`),$=null,Mt=()=>{let e=Q();return e?($||($=document.createElement(`a`),$.className=`boot-loader__link`,$.target=`_blank`,$.rel=`noopener`,e.append($)),$):null},Nt=()=>{$&&($.hidden=!0)},Pt=e=>{let t=Q();if(!t)return;t.classList.remove(Dt),Nt();let n=jt();n&&(n.hidden=!0);let r=kt();r&&(r.textContent=e)},Ft=(e,t)=>{let n=Q();if(!n)return;n.classList.add(Dt);let r=At();r&&(r.hidden=!0);let i=kt();i&&(i.textContent=e);let a=jt();a&&(a.hidden=!1,a.onclick=()=>window.location.reload());let o=Mt();o&&(t?(o.href=t.href,o.textContent=t.text,o.hidden=!1):Nt())},It=(e,t)=>{let n=Q();if(!n){t&&t();return}n.classList.remove(Dt),Nt();let r=kt();r&&(r.textContent=e);let i=jt();i&&(i.hidden=!0);let a=At();if(!a){t&&t();return}a.hidden=!1,a.onclick=()=>{a.hidden=!0,t&&t()}},Lt=()=>{let e=Q();!e||e.classList.contains(Ot)||(e.classList.add(Ot),window.setTimeout(()=>e.remove(),450))};(()=>{if(!(navigator.maxTouchPoints>0||`ontouchstart`in window))return;let e=e=>{e.cancelable&&e.preventDefault()};document.addEventListener(`gesturestart`,e,{passive:!1,capture:!0}),document.addEventListener(`gesturechange`,e,{passive:!1,capture:!0}),document.addEventListener(`gestureend`,e,{passive:!1,capture:!0}),`touchAction`in document.documentElement.style||document.addEventListener(`touchmove`,e=>{e.touches.length>1&&e.cancelable&&e.preventDefault()},{passive:!1,capture:!0})})(),window.THREE={...v,GLTFLoader:c};var Rt=`/AR-Buildings-build/`,zt=3e4,Bt=45e3,Vt=()=>typeof DeviceMotionEvent<`u`&&typeof DeviceMotionEvent.requestPermission==`function`,Ht={DENY_CAMERA:`Нет доступа к камере.
Разрешите доступ в настройках браузера и обновите страницу.`,NO_CAMERA:`Камера не найдена.
Проверьте устройство и обновите страницу.`},Ut=()=>navigator.maxTouchPoints>0||`ontouchstart`in window,Wt=null,Gt=!1,Kt=async()=>{if(!Gt){Gt=!0;try{let e=new AbortController,t=setTimeout(()=>e.abort(),2e3),n=await fetch(`${Rt}__cast/bootstrap`,{cache:`no-store`,signal:e.signal});if(clearTimeout(t),!n.ok||!Wt||Jt)return;let r=await n.json();if(!r?.enabled||typeof r.screenUrl!=`string`)return;Ft(Wt,{href:r.screenUrl,text:`Открыть страницу общего экрана ↗`})}catch{Gt=!1}}},qt=e=>{Wt=e,Ft(e),Ut()||Kt()},Jt=!1,Yt=null,Xt=()=>{Jt=!0,Qt(),Lt(),bt()},Zt=()=>{Qt(),Yt=setTimeout(()=>{Jt||qt(`AR не запустился.
Проверьте доступ к камере и датчикам движения, затем обновите страницу.`)},Bt)},Qt=()=>{Yt&&clearTimeout(Yt),Yt=null},$t=e=>{Zt();try{XR8.run({canvas:e,allowedDevices:XR8.XrConfig.device().ANY})}catch(e){console.error(`[AR] Не удалось запустить AR-движок:`,e),Qt(),qt(`Не удалось запустить AR.
Обновите страницу и попробуйте снова.`)}};Pt(`Загрузка AR-движка…`);var en=e=>fetch(e,{cache:`no-cache`}).then(t=>{if(!t.ok)throw Error(`HTTP ${t.status} для ${e}`);return t.json()}),tn=async()=>{let e=await en(`${Rt}config/models.json`),t=Object.keys(e);return{registry:e,targets:await Promise.all(t.map(e=>en(`${Rt}image-targets/${e}.json`))),buildings:await en(`${Rt}config/buildings.json`).catch(()=>({})),environments:await en(`${Rt}config/environments.json`).catch(()=>({}))}},nn=async()=>{clearTimeout(rn);let e,t,n,r;try{Pt(`Загрузка маркеров…`),{registry:e,targets:t,buildings:n,environments:r}=await tn()}catch(e){console.error(`[AR] Ошибка загрузки конфигурации:`,e),Ft(`Не удалось загрузить конфигурацию маркеров.
Проверьте соединение и файлы config/models.json и image-targets/*.json`);return}t.length===0&&console.warn(`[AR] В конфигурации нет ни одного маркера`),XR8.XrController.configure({imageTargetData:t}),XR8.addCameraPipelineModule({name:`boot-loader-status`,onCameraStatusChange:({status:e,reason:t})=>{if(!Jt){if(e===`failed`){Qt(),qt(Ht[t??``]||`Не удалось запустить камеру.
Обновите страницу и попробуйте снова.`);return}Zt(),Pt(`Запуск камеры…`)}},onException:e=>{if(!Jt){if(Qt(),e&&e.type===`permission`){qt(`Нет доступа к датчикам движения.
Разрешите «Движение и ориентацию» в настройках браузера и обновите страницу.`);return}qt(`Не удалось запустить AR.
Проверьте доступ к камере и датчикам движения и обновите страницу.`)}}}),XR8.addCameraPipelineModules([XR8.GlTextureRenderer.pipelineModule(),XR8.Threejs.pipelineModule(),XR8.XrController.pipelineModule(),Et({registry:e,buildings:n,environments:r,onReady:Xt})]),document.body.insertAdjacentHTML(`beforeend`,`<canvas id="camerafeed"></canvas>`);let i=document.getElementById(`camerafeed`);if(Vt()){It(`Нажмите «Продолжить» и разрешите доступ к датчикам движения и камере`,()=>{Pt(`Запуск камеры…`),$t(i)});return}Pt(`Запуск камеры…`),$t(i)},rn=setTimeout(()=>{Ft(`AR-движок не загрузился.
Проверьте соединение с интернетом и обновите страницу.`)},zt);window.XR8?nn():window.addEventListener(`xrloaded`,nn,{once:!0});