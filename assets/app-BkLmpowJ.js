const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jsQR-BcqNJPtq.js","assets/cast-protocol-P8zNAO5I.js","assets/cast-protocol-CZP5ye7K.css"])))=>i.map(i=>d[i]);
import{$ as e,A as t,C as n,D as r,F as i,G as a,H as o,I as s,J as c,M as l,N as u,O as d,Q as f,R as p,S as m,V as h,Y as g,Z as _,_ as v,a as y,b,c as x,d as S,f as C,h as w,i as T,it as E,l as D,m as O,n as k,nt as A,o as ee,p as j,q as M,r as N,s as P,t as F,tt as te,u as I,v as ne,w as re,x as ie,y as ae,z as oe}from"./cast-protocol-P8zNAO5I.js";var L=`
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
`,se=e=>{if(e.thumbnail){let t=document.createElement(`img`);return t.src=e.thumbnail,t.alt=e.label,t.loading=`lazy`,t}let t=document.createElement(`div`);return t.className=`model-btn__thumb-placeholder`,t.textContent=(e.label||e.id||`?`).charAt(0).toUpperCase(),t},ce=(e,t)=>{C(`model-menu`,L);let n=document.createElement(`div`);n.className=`model-menu`,n.setAttribute(`aria-label`,`Выбор модели`);let r=document.createElement(`p`);r.className=`model-menu__title`,r.innerHTML=S(`gallery`,{size:16})+`<span>Фасады</span>`,n.appendChild(r);let i=document.createElement(`div`);i.className=`model-menu__list`;let a=new Map;return e.forEach(e=>{let n=document.createElement(`button`);n.className=`model-btn`,n.type=`button`,n.dataset.modelId=e.id;let r=document.createElement(`div`);r.className=`model-btn__thumb`,r.appendChild(se(e)),n.appendChild(r);let o=document.createElement(`span`);o.className=`model-btn__label`,o.textContent=e.label||e.id,n.appendChild(o),n.addEventListener(`click`,()=>{t(e)}),i.appendChild(n),a.set(e.id,n)}),n.appendChild(i),document.body.appendChild(n),{element:n,setActive(e){a.forEach((t,n)=>{t.classList.toggle(`model-btn--active`,n===e)})},show(){n.classList.add(`model-menu--visible`)},hide(){n.classList.remove(`model-menu--visible`)},destroy(){n.remove(),a.clear()}}},le={quality:`standard`,scanHint:!0},ue=`mosproekt.ar.preferences.v1`,de=`mosproekt.ar.models.v1`,fe=`mosproekt.ar.site.v1`,pe=new Map,me=()=>{try{let e=JSON.parse(localStorage.getItem(ue)||`{}`);return{quality:[`economy`,`standard`,`high`].includes(e?.quality)?e.quality:`standard`,scanHint:typeof e?.scanHint!=`boolean`||e.scanHint}}catch{return{...le}}},he=e=>{try{return localStorage.setItem(ue,JSON.stringify(e)),!0}catch{return!1}},ge=()=>{try{let e=JSON.parse(localStorage.getItem(de)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}},R=e=>{let t=pe.get(e)||ge()[e];return typeof t==`string`&&t?t:void 0},_e=(e,t)=>{if(!e||!t)return!1;pe.set(e,t);try{return localStorage.setItem(de,JSON.stringify({...ge(),[e]:t})),ge()[e]===t}catch{return!1}},z=[.2,20],ve=()=>{try{let e=JSON.parse(localStorage.getItem(fe)||`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}},ye=()=>{let e=ve().worldPerMeter,[t,n]=z;return typeof e==`number`&&Number.isFinite(e)&&e>0?Math.min(n,Math.max(t,e)):1},be=e=>{let[t,n]=z,r=Math.min(n,Math.max(t,Number(e)||1));try{return localStorage.setItem(fe,JSON.stringify({...ve(),worldPerMeter:r})),!0}catch{return!1}},xe=()=>ve().figure===!0,Se=e=>{try{return localStorage.setItem(fe,JSON.stringify({...ve(),figure:!!e})),!0}catch{return!1}},Ce=`mosproekt.ar.libraries.v1`,we=()=>{try{let e=JSON.parse(localStorage.getItem(Ce)||`[]`);return Array.isArray(e)?e.filter(e=>typeof e==`string`&&e):[]}catch{return[]}},Te=e=>{if(!e)return!1;let t=we().filter(t=>t!==e);t.push(e);try{return localStorage.setItem(Ce,JSON.stringify(t)),!0}catch{return!1}},B=.6,Ee=3,V=({scene:e,name:n,models:r,maxAnisotropy:i,loader:a=null,onModelActivated:o,onMenuSelect:s,onModelShown:c})=>{let l=new t;l.visible=!1,e.add(l);let u=j();l.add(u.object3D);let d={name:n,models:r,defaultModel:null,anchorGroup:l,groundShadow:u,markerPose:null,modelsCache:new Map,pendingLoads:new Map,menu:null,currentModel:null,currentModelRoot:null,currentFacades:null,currentModelId:null,currentBbox:null,activeMixer:null,currentLights:[],currentAppearGroup:null,appearTime:0,appearInProgress:!1,appearWarmupFrames:0,activate:h,update:g},f=new A,p=0,m=e=>{if(d.modelsCache.has(e.id))return Promise.resolve(d.modelsCache.get(e.id));if(d.pendingLoads.has(e.id))return d.pendingLoads.get(e.id);let t=D(e,{maxAnisotropy:i,onProgress:e=>{a&&a.setProgress(e)}}).then(t=>(d.modelsCache.set(e.id,t),d.pendingLoads.delete(e.id),t)).catch(t=>{throw d.pendingLoads.delete(e.id),t});return d.pendingLoads.set(e.id,t),t};function h(e){return e?(d.currentModel=e,d.currentModelId=e.id,d.menu&&d.menu.setActive(e.id),d.currentAppearGroup&&d.currentAppearGroup.parent===d.anchorGroup&&d.anchorGroup.remove(d.currentAppearGroup),d.currentAppearGroup=null,d.currentFacades=null,d.currentModelRoot=null,d.activeMixer=null,d.currentLights=[],!d.modelsCache.has(e.id)&&a&&a.show(),m(e).then(n=>{if(d.currentModelId!==e.id)return;d.currentFacades=n.facades||null,d.currentModelRoot=n.modelRoot,d.activeMixer=n.mixer,d.currentLights=n.lights,d.currentLights.length>0&&P(d.currentLights,n.modelRoot.scale.x,p),d.currentBbox=n.bbox,o&&o(d,n);let r=new t;r.scale.setScalar(0),r.add(n.modelRoot),d.anchorGroup.add(r),d.currentAppearGroup=r,d.appearTime=0,d.appearInProgress=!0,d.appearWarmupFrames=Ee,a&&a.hide(),c&&c(d),console.log(`[AR] Активирована модель: ${e.label} (${e.id})`)}).catch(()=>{a&&a.hide(),d.currentModelId=null,d.currentFacades=null,d.currentModelRoot=null,d.currentAppearGroup=null,d.currentBbox=null,d.currentLights=[]})):Promise.resolve()}function g(e,t=0){if(p=t,d.activeMixer&&d.activeMixer.update(e),d.appearInProgress&&d.currentAppearGroup)if(d.appearWarmupFrames>0)--d.appearWarmupFrames;else{d.appearTime+=Math.min(e,.05);let t=Math.min(d.appearTime/B,1),n=1-(1-t)**3;d.currentAppearGroup.scale.setScalar(n),t>=1&&(d.appearInProgress=!1)}if(d.currentLights.length>0&&d.currentModelRoot){d.currentModelRoot.getWorldScale(f);let e=d.currentAppearGroup!==null&&d.currentAppearGroup.scale.x===0;P(d.currentLights,e?0:f.x,t)}}r.length>1&&(d.menu=ce(r,e=>{s&&s(d,e)}));let _=R(n);return d.defaultModel=r.find(e=>e.id===_)||r.find(e=>e.isDefault)||r[0]||null,d.defaultModel||console.warn(`[AR] Нет моделей для маркера:`,n),d},De=({buildings:e={},hooks:t})=>{let n=new Map,r=`normal`,i=()=>r===`site`,a=null,s=null,c=null,l=(e,{position:t,rotation:n,scale:r})=>{e.markerPose||={position:new A,quaternion:new o,scale:new A},e.markerPose.position.copy(t),e.markerPose.quaternion.copy(n),e.markerPose.scale.set(r,r,r)},u=e=>{!e||!e.markerPose||e===s||e===c||(e.anchorGroup.position.copy(e.markerPose.position),e.anchorGroup.quaternion.copy(e.markerPose.quaternion),e.anchorGroup.scale.copy(e.markerPose.scale))};return{register(e){n.set(e.name,e)},has(e){return n.has(e)},get handlers(){return n},getActive:()=>a,getPinned:()=>s,getReturning:()=>c,setSuspended(e){r=e?`site`:`normal`},beginReturn:()=>{if(!s)return null;let e=s;return s=null,c=e,e},endReturn(e){c===e&&(c=null),u(e)},pin(e){c=null,s=e},release(e){s===e&&(s=null),c===e&&(c=null),u(e)},clearReturning(){c=null},processFound:r=>{let{name:o,position:c,rotation:d,scale:f}=r.detail||r,p=n.get(o);if(!p)return;if(i()){l(p,{position:c,rotation:d,scale:f});return}if(s){l(p,{position:c,rotation:d,scale:f});return}t.hideScanHint();let m=e[o],h=m?.name||o;t.setBuilding(h,m,o),t.setEnvironment(o),a=p,l(p,{position:c,rotation:d,scale:f}),u(p),p.anchorGroup.visible=!0,t.setSunAnchor(p.anchorGroup),n.forEach(e=>{e!==p&&e.anchorGroup.visible&&(e.anchorGroup.visible=!1)}),p.menu?t.presentMenu(p.menu):t.hideMenu(),!p.currentModelId&&p.defaultModel&&p.activate(p.defaultModel),console.log(`[AR] Маркер найден: ${o}`)},processUpdated:e=>{let{name:t,position:r,rotation:i,scale:a}=e.detail||e,o=n.get(t);o&&(l(o,{position:r,rotation:i,scale:a}),u(o))},processLost:e=>{let{name:t}=e.detail||e;n.has(t)}}},Oe=({sunMenu:e,infoMenu:t})=>{let n=null,r=null,i=!1,a=!1,o=!1,s=()=>{n&&=(n.hide(),null),r&&=(r.hide(),null)},c=()=>{n&&(r=n,n=null,r.hide())},l=()=>{let e=r;r=null,e&&!i&&!o&&!a&&u(e)},u=e=>{if(i||o||a){n&&=(n.hide(),null),r&&r!==e&&r.hide(),r=e,e.hide();return}r&&=(r.hide(),null),n&&n!==e&&n.hide(),n=e,e.show()};return{present:u,hide:s,openSun:()=>{i||(o&&(o=!1,t.hide()),i=!0,c(),e.show())},closeSun:()=>{i&&(i=!1,e.hide(),l())},isSunOpen:()=>i,suspend:()=>{a=!0,c(),i=!1,o=!1,e.hide(),t.hide()},resume:()=>{a=!1,l()},openInfo:()=>{o||(i&&(i=!1,e.hide()),o=!0,c(),t.show())},closeInfo:()=>{o&&(o=!1,t.hide(),l())},isInfoOpen:()=>o}},ke=`
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
`,Ae={morning:[300,660],day:[660,960],evening:[960,1260]},je=[{id:`morning`,label:`Утро`,icon:`morning`,minutes:540},{id:`day`,label:`День`,icon:`day`,minutes:780},{id:`evening`,label:`Вечер`,icon:`evening`,minutes:1080}],Me=e=>{let t=Math.round(e),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`},Ne=e=>e.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`}).replace(` г.`,``),Pe=({time:e=840,date:t=null,onChange:n=null,onClose:r=null}={})=>{C(`sun-menu`,ke);let i=Math.max(0,Math.min(T,e)),a=document.createElement(`div`);a.className=`sun-menu`,a.setAttribute(`role`,`dialog`),a.setAttribute(`aria-label`,`Солнце`);let o=document.createElement(`div`);o.className=`sun-menu__header`;let s=document.createElement(`p`);s.className=`sun-menu__title`,s.textContent=`Солнце`,o.appendChild(s);let c=document.createElement(`button`);c.className=`sun-menu__close`,c.type=`button`,c.setAttribute(`aria-label`,`Закрыть`),c.innerHTML=S(`close`),o.appendChild(c),a.appendChild(o);let l=document.createElement(`div`);l.className=`sun-menu__row`;let u=document.createElement(`span`);u.className=`sun-menu__label`,u.textContent=`Время`,l.appendChild(u);let d=document.createElement(`span`);d.className=`sun-menu__pill`,d.innerHTML=S(`clock`,{size:15})+`<span></span>`,l.appendChild(d),a.appendChild(l);let f=document.createElement(`div`);f.className=`sun-menu__slider-block`;let p=document.createElement(`input`);p.className=`sun-menu__slider`,p.type=`range`,p.min=`0`,p.max=String(T),p.step=`5`,p.setAttribute(`aria-label`,`Время суток`),f.appendChild(p);let m=document.createElement(`div`);m.className=`sun-menu__scale`,[`00:00`,`24:00`].forEach(e=>{let t=document.createElement(`span`);t.textContent=e,m.appendChild(t)}),f.appendChild(m),a.appendChild(f);let h=document.createElement(`div`);h.className=`sun-menu__row`,h.setAttribute(`aria-disabled`,`true`);let g=document.createElement(`span`);g.className=`sun-menu__label`,g.textContent=`Дата`,h.appendChild(g);let _=document.createElement(`span`);_.className=`sun-menu__pill`,_.innerHTML=S(`calendar`,{size:15})+`<span>${Ne(t||new Date)}</span>`,h.appendChild(_),a.appendChild(h);let v=(e,t)=>{let n=document.createElement(`div`);return n.className=`sun-menu__check sun-menu__check--disabled`,n.setAttribute(`aria-disabled`,`true`),n.innerHTML=S(t?`checkbox_on`:`checkbox_off`)+`<span>${e}</span>`,n};a.appendChild(v(`Реальное направление солнца`,!0)),a.appendChild(v(`Автоматическое движение`,!1));let y=document.createElement(`div`);y.className=`sun-menu__presets`;let b=new Map;je.forEach(({id:e,label:t,icon:n,minutes:r})=>{let i=document.createElement(`button`);i.className=`sun-menu__preset`,i.type=`button`,i.innerHTML=S(n)+`<span>${t}</span>`,i.addEventListener(`click`,()=>w(r)),y.appendChild(i),b.set(e,i)}),a.appendChild(y),document.body.appendChild(a);let x=()=>{b.forEach((e,t)=>{let[n,r]=Ae[t],a=i>=n&&i<r;e.classList.toggle(`sun-menu__preset--active`,a)})};function w(e,{silent:t=!1}={}){i=Math.max(0,Math.min(T,Number(e)||0)),p.value=String(i),d.querySelector(`span`).textContent=Me(i),x(),!t&&n&&n({minutes:i})}p.addEventListener(`input`,()=>w(Number(p.value))),c.addEventListener(`click`,()=>{D(),r&&r()});function E(){a.classList.add(`sun-menu--visible`)}function D(){a.classList.remove(`sun-menu--visible`)}return w(i,{silent:!0}),{element:a,show:E,hide:D,isVisible:()=>a.classList.contains(`sun-menu--visible`),getTime:()=>i,setTime(e,t){w(e,t)},destroy(){a.remove(),b.clear()}}},Fe=`
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
`,Ie=[{field:`address`,label:`Адрес`},{field:`architect`,label:`Архитектор`},{field:`stage`,label:`Стадия`},{field:`modelDate`,label:`Дата модели`},{field:`version`,label:`Версия`}],H=e=>typeof e==`string`?e.trim():``,Le=(e,t,n=null)=>{let r={};if(e){Ie.forEach(({field:t})=>{let n=H(e[t]);n&&(r[t]=n)});let t=H(e.description);t&&(r.description=t);let n=H(e.image);n&&(r.image=n)}let i=t&&e?.variants?e.variants[t]:void 0,a=!1;if(i){Ie.forEach(({field:e})=>{let t=H(i[e]);t&&(r[e]=t)});let e=H(i.description);e&&(r.description=e);let t=H(i.image);t&&(r.image=t),a=Object.values(i).some(e=>H(e))}return{name:e?H(e.name):``,rows:Ie,values:r,description:r.description||``,image:r.image||``,document:e?.document||``,facts:e?.facts||[],facade:a?H(n):``}},Re=({onClose:e=null}={})=>{C(`info-menu`,Fe);let t=document.createElement(`div`);t.className=`info-menu`,t.id=`ar-info-menu`,t.inert=!0,t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-label`,`Информация о проекте`);let n=document.createElement(`div`);n.className=`info-menu__header`;let r=document.createElement(`p`);r.className=`info-menu__title`,r.textContent=`Информация`,n.appendChild(r);let i=document.createElement(`button`);i.className=`info-menu__close`,i.type=`button`,i.setAttribute(`aria-label`,`Закрыть`),i.innerHTML=S(`close`),n.appendChild(i),t.appendChild(n);let a=document.createElement(`div`);a.className=`info-menu__body`;let o={},s={},c=null,l=null,u=document.createElement(`label`);u.className=`info-menu__project`,u.textContent=`Объект`,u.hidden=!0;let d=document.createElement(`select`);d.setAttribute(`aria-label`,`Объект`),u.appendChild(d),a.appendChild(u);let f=document.createElement(`div`);f.className=`info-menu__image`;let p=document.createElement(`img`);p.alt=`Фотография здания`,f.appendChild(p);let m=document.createElement(`div`);m.className=`info-menu__placeholder`,m.innerHTML=S(`gallery`,{size:34})+`<span>Изображение не добавлено</span>`,a.appendChild(f),a.appendChild(m);let h=document.createElement(`div`);h.className=`info-menu__rows`;let g=document.createElement(`div`);g.className=`info-menu__row`,g.hidden=!0;let _=document.createElement(`span`);_.className=`info-menu__label`,_.textContent=`Объект`;let v=document.createElement(`span`);v.className=`info-menu__value`,g.append(_,v),h.appendChild(g);let y=new Map;Ie.forEach(({field:e,label:t})=>{let n=document.createElement(`div`);n.className=`info-menu__row`,n.hidden=!0;let r=document.createElement(`span`);r.className=`info-menu__label`,r.textContent=t;let i=document.createElement(`span`);i.className=`info-menu__value`,n.append(r,i),h.appendChild(n),y.set(e,n)});let b=document.createElement(`div`);b.className=`info-menu__row`,b.hidden=!0;let x=document.createElement(`span`);x.className=`info-menu__label`,x.textContent=`Фасад`;let w=document.createElement(`span`);w.className=`info-menu__value info-menu__value--facade`,b.append(x,w),h.appendChild(b),a.appendChild(h);let T=document.createElement(`p`);T.className=`info-menu__description`,a.appendChild(T);let E=document.createElement(`dl`);E.className=`info-menu__facts`,a.appendChild(E);let D=document.createElement(`a`);D.className=`info-menu__document`,D.textContent=`Открыть презентацию PDF ↗`,D.target=`_blank`,D.rel=`noopener noreferrer`,a.appendChild(D);let O=document.createElement(`p`);O.className=`info-menu__empty`,a.appendChild(O),t.appendChild(a),document.body.appendChild(t);let k=null,A=(e,t)=>{k!==e&&(k=e,p.src=e,p.alt=t||`Фотография здания`,f.hidden=!1,m.hidden=!0)},ee=()=>{k=null,p.removeAttribute(`src`),f.hidden=!0,m.hidden=!1};p.addEventListener(`error`,()=>{p.getAttribute(`src`)&&ee()});let j=e=>{g.hidden=!e.name,v.textContent=e.name,Ie.forEach(({field:t})=>{let n=y.get(t),r=e.values[t];n.hidden=!r,r&&(n.querySelector(`.info-menu__value`).textContent=r)}),b.hidden=!e.facade,w.textContent=e.facade,T.hidden=!e.description,T.textContent=e.description,E.replaceChildren(),E.hidden=!e.facts.length;for(let t of e.facts){let e=document.createElement(`div`),n=document.createElement(`dt`),r=document.createElement(`dd`);n.textContent=t.label,r.textContent=t.value,e.append(n,r),E.appendChild(e)}let t=N(e.document);D.hidden=!t,t?D.href=t:D.removeAttribute(`href`);let n=!!(e.image||e.description||e.document||e.facts.length||Ie.some(({field:t})=>e.values[t])||e.facade);O.hidden=n,n||(O.textContent=e.name?`Подробная информация о «${e.name}» не добавлена`:`Наведите камеру на генплан`);let r=N(e.image);r?A(r,e.name||`Фотография здания`):ee()},M=()=>{t.classList.remove(`info-menu--visible`),t.inert=!0,t.contains(document.activeElement)&&l?.focus()},N=e=>{if(!e||e.startsWith(`/`)||/^[a-z]+:/i.test(e))return null;try{let t=new URL(`/AR-Buildings-build/`,location.href),n=new URL(e,t);return n.origin===t.origin&&n.pathname.startsWith(t.pathname)?n.href:null}catch{return null}},P=()=>{let e=c&&o[c]||null,t=c&&s[c]||[],n=t.find(e=>e.isDefault)||t[0],r=Le(e,n?.id||null,n?.label||null);!r.name&&c&&(r.name=c),j(r)};return d.addEventListener(`change`,()=>{c=d.value||null,P()}),t.addEventListener(`keydown`,t=>{t.key===`Escape`&&(t.preventDefault(),M(),e?.())}),i.addEventListener(`click`,()=>{M(),e&&e()}),{element:t,show(){a.scrollTop=0,l=document.activeElement,t.inert=!1,t.classList.add(`info-menu--visible`),i.focus()},hide:M,isVisible:()=>t.classList.contains(`info-menu--visible`),getSelectedProjectId:()=>c,setProjects(e,t){o=e,s=t,d.replaceChildren(new Option(`Выберите объект`,``));for(let e of Object.keys(s).sort((e,t)=>(o[e]?.name||e).localeCompare(o[t]?.name||t,`ru`)))d.add(new Option(o[e]?.name||e,e));u.hidden=!Object.keys(s).length;let n=new URLSearchParams(location.search).get(`object`);c=n&&Object.hasOwn(s,n)?n:null,d.value=c||``,P()},setContent(e,{modelId:t=null,facadeLabel:n=null,fallbackName:r=``,projectId:i=null}={}){i&&(c=i,d.value=i);let a=Le(e,t,n);!a.name&&r&&(a.name=r),j(a)},destroy(){t.remove(),y.clear()}}},ze=`
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
`,Be=()=>{C(`model-loader`,ze);let e=document.createElement(`div`);e.className=`model-loader`,e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-label`,`Загрузка модели`);let t=document.createElement(`div`);t.className=`model-loader__spinner`,e.appendChild(t);let n=document.createElement(`div`);n.className=`model-loader__bar`;let r=document.createElement(`div`);r.className=`model-loader__bar-fill`,n.appendChild(r),e.appendChild(n);let i=document.createElement(`div`);i.className=`model-loader__text`,e.appendChild(i),document.body.appendChild(e);let a=e=>{let t=typeof e==`number`&&Number.isFinite(e)&&e>=0?Math.min(1,e):null;n.classList.toggle(`model-loader__bar--indeterminate`,t===null),t!==null&&(r.style.width=`${Math.round(t*100)}%`),i.textContent=t===null?`Загрузка модели…`:`Загрузка модели… ${Math.round(t*100)}%`};return a(null),{element:e,show(){a(null),e.classList.add(`model-loader--visible`)},hide(){e.classList.remove(`model-loader--visible`)},setProgress:a,destroy(){e.remove()}}},Ve=`
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
`,He=`AR Buildings`,Ue=[[{id:`library`,label:`Библиотека`,icon:`library`},{id:`site`,label:`Примерка`,icon:`site`},{id:`sun`,label:`Солнце`,icon:`sun`},{id:`reset`,label:`Сброс`,icon:`reset`},{id:`info`,label:`Информация`,icon:`info`},{id:`settings`,label:`Настройки`,icon:`settings`}]].map(e=>e.filter(e=>(e.id!==`site`||!1)&&(e.id!==`library`||!0))),We=.25,Ge=8,Ke=.35,qe=({title:e=He,subtitle:t=``,version:n=``,pages:r=Ue,onAction:i=null}={})=>{C(`app-ui`,Ve);let a=r.filter(e=>e.length>0),o=Math.max(a.length,1),s=Math.max(1,...a.map(e=>e.length)),c=e=>typeof e==`string`?e.trim():``,l=c(t),u=c(n),d=document.createElement(`div`);d.className=`app-ui`;let f=document.createElement(`header`);f.className=`app-ui__header`;let p=document.createElement(`div`);p.className=`app-ui__meta`;let m=document.createElement(`h1`);m.className=`app-ui__title`,m.textContent=e,p.appendChild(m);let h=document.createElement(`div`);h.className=`app-ui__subtitle`,h.textContent=l,h.hidden=!l,p.appendChild(h);let g=document.createElement(`div`);g.className=`app-ui__version`,g.textContent=u,g.hidden=!u,p.appendChild(g),f.appendChild(p);let _=new Map;d.appendChild(f);let v=document.createElement(`div`);v.className=`app-ui__dock-wrap`;let y=document.createElement(`div`);y.className=`app-ui__dots`,y.setAttribute(`aria-hidden`,`true`),y.hidden=o<2,v.appendChild(y);let b=document.createElement(`div`);b.className=`app-ui__toolbar`;let x=document.createElement(`nav`);x.className=`app-ui__dock`,x.setAttribute(`aria-label`,`Инструменты`),x.style.setProperty(`--cols`,String(s));let w=document.createElement(`div`);w.className=`app-ui__dock-track`,w.style.setProperty(`--pages`,String(o)),x.appendChild(w);let T=new Map,E=[],D=[];a.forEach(e=>{let t=document.createElement(`div`);t.className=`app-ui__dock-page`,e.forEach(e=>{let n=document.createElement(`button`);n.className=`app-ui__dock-btn`,n.type=`button`,n.dataset.action=e.id,n.setAttribute(`aria-label`,e.label),n.title=e.label,(e.id===`info`||e.id===`settings`)&&(n.setAttribute(`aria-controls`,e.id===`info`?`ar-info-menu`:`project-sheet`),n.setAttribute(`aria-expanded`,`false`),_.set(e.id,n)),n.innerHTML=S(e.icon)+`<span class="app-ui__dock-label">${e.label}</span>`,n.addEventListener(`click`,()=>{i&&i(e.id)}),t.appendChild(n),T.set(e.id,n)}),w.appendChild(t),D.push(t);let n=document.createElement(`span`);n.className=`app-ui__dot`,y.appendChild(n),E.push(n)}),b.appendChild(x),v.appendChild(b),d.appendChild(v),document.body.appendChild(d);let O=0,k=null,A=!1,ee=(e,t=!0)=>{O=Math.max(0,Math.min(o-1,e)),D.forEach((e,t)=>{e.inert=t!==O,e.setAttribute(`aria-hidden`,String(t!==O))}),x.scrollLeft=0;let n=x.clientWidth;w.style.transition=t?``:`none`,w.style.transform=`translateX(${-O*n}px)`,t||(w.offsetWidth,w.style.transition=``),E.forEach((e,t)=>{e.classList.toggle(`app-ui__dot--active`,t===O)}),x.setAttribute(`aria-label`,o>1?`Инструменты, страница ${O+1} из ${o}`:`Инструменты`)},j=e=>{if(!k||e&&e.pointerId!==k.id)return;let{dx:t,width:n,locked:r}=k;if(k=null,!r)return;let i=n*We,a=O;t<=-i?a+=1:t>=i&&--a,ee(a),setTimeout(()=>{A=!1},0)};x.addEventListener(`pointerdown`,e=>{o<2||e.pointerType===`mouse`&&e.button!==0||(k={id:e.pointerId,startX:e.clientX,startY:e.clientY,dx:0,locked:!1,width:x.clientWidth},A=!1)}),x.addEventListener(`pointermove`,e=>{if(!k||e.pointerId!==k.id)return;if(k.dx=e.clientX-k.startX,e.clientY-k.startY,!k.locked){if(Math.abs(k.dx)<Ge)return;if(Math.abs(k.dy)>Math.abs(k.dx)){k=null;return}k.locked=!0,A=!0,x.setPointerCapture&&x.setPointerCapture(e.pointerId),w.style.transition=`none`}e.preventDefault();let t=-(o-1)*k.width,n=-O*k.width+k.dx;n>0?n*=Ke:n<t&&(n=t+(n-t)*Ke),w.style.transform=`translateX(${n}px)`}),x.addEventListener(`pointerup`,j),x.addEventListener(`pointercancel`,j),x.addEventListener(`click`,e=>{A&&(e.stopPropagation(),e.preventDefault())},!0),x.addEventListener(`contextmenu`,e=>e.preventDefault());let M=()=>{let e=window.innerHeight-v.getBoundingClientRect().top+8;document.documentElement.style.setProperty(`--ar-panel-space-bottom`,`${Math.max(0,e)}px`)},N=new ResizeObserver(M);N.observe(v);let P=()=>{ee(O,!1),M()};return window.addEventListener(`resize`,P),window.addEventListener(`orientationchange`,P),ee(0,!1),requestAnimationFrame(M),{element:d,setHeaderActive(e){_.forEach((t,n)=>{t.setAttribute(`aria-expanded`,String(n===e)),t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setBuilding({name:e,version:t}={}){let n=c(e),r=c(t);h.textContent=n,h.hidden=!n,g.textContent=r,g.hidden=!r},setActive(e){T.forEach((t,n)=>{t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setActionActive(e){_.forEach((t,n)=>{t.classList.toggle(`app-ui__dock-btn--active`,n===e)})},setPage(e,t=!0){ee(e,t)},getPage(){return O},show(){requestAnimationFrame(()=>d.classList.add(`app-ui--visible`))},hide(){d.classList.remove(`app-ui--visible`)},destroy(){N.disconnect(),window.removeEventListener(`resize`,P),window.removeEventListener(`orientationchange`,P),d.remove(),T.clear()}}},Je=.12,Ye=1.46,Xe=e=>s.clamp(e,Je,Ye),Ze=new A(0,1,0),Qe=({camera:e})=>{let t=new A,n=0,r=Math.PI/3,i=10,a=.5,o=100,c=new A,l=new A,u=new A,d=new A,f=new A,p=new A,m=()=>{let t=e.projectionMatrix.elements,n=t[5]?Math.abs(1/t[5]):Math.tan(Math.PI/6);return{tanX:t[0]?Math.abs(1/t[0]):n*(e.aspect||1),tanY:n}},h=e=>s.clamp(e,a,o);return{pivot:t,getAzimuth:()=>n,getPolar:()=>r,getDistance:()=>i,setAngles:(e,t)=>{n=Number.isFinite(e)?e:n,r=Xe(Number.isFinite(t)?t:r)},setDistance:e=>{i=h(Number.isFinite(e)?e:i)},setLimits:(e,t)=>{a=Math.max(.05,Number(e)||0),o=Math.max(a,Number(t)||a),i=h(i)},rotate:(e,t,i,a)=>{n-=Math.PI/Math.max(1,i)*e,r=Xe(r-Math.PI/Math.max(1,a)*t)},fromCamera:()=>{e.updateMatrixWorld(),e.getWorldPosition(c),l.copy(c).sub(t);let a=l.length();a<1e-4||(i=a,n=Math.atan2(l.x,l.z),r=Xe(Math.acos(s.clamp(l.y/a,-1,1))))},fitDistance:e=>{let{tanX:t,tanY:n}=m();return Math.max(.5,Math.max(.1,e)/Math.max(Math.sin(Math.min(Math.atan(t),Math.atan(n))),.001))},fitBox:(e,t={})=>{let{tanX:i,tanY:a}=m(),o=Number.isFinite(t.azimuth)?t.azimuth:n,s=Xe(Number.isFinite(t.polar)?t.polar:r),c=Math.sin(s);u.set(c*Math.sin(o),Math.cos(s),c*Math.cos(o)),d.crossVectors(Ze,u).normalize(),f.crossVectors(u,d),e.getCenter(l);let h=.5;for(let t=0;t<8;t++){p.set(t&1?e.max.x:e.min.x,t&2?e.max.y:e.min.y,t&4?e.max.z:e.min.z).sub(l);let n=p.dot(u);h=Math.max(h,Math.abs(p.dot(d))/Math.max(i,.001)+n,Math.abs(p.dot(f))/Math.max(a,.001)+n)}return h},apply:()=>{let a=Math.sin(r);c.set(t.x+i*a*Math.sin(n),t.y+i*Math.cos(r),t.z+i*a*Math.cos(n)),e.position.copy(c),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld()}}},$e=.4,et=3157806,tt=`
    uniform float uOpacity;
    uniform vec3 uColor;
    void main() {
        gl_FragColor = vec4(uColor, uOpacity);
    }
`,nt=`
    void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
    }
`,U=({scene:e})=>{let t=new h(2,2),n=new _({uniforms:{uOpacity:{value:0},uColor:{value:new re().setHex(et,i)}},vertexShader:nt,fragmentShader:tt,blending:5,blendEquation:100,blendSrc:204,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201,premultipliedAlpha:!1,depthTest:!1,depthWrite:!1}),r=new p(t,n);r.frustumCulled=!1,r.matrixAutoUpdate=!1,r.renderOrder=-1e3,r.visible=!1,e.add(r);let a=0,o=0,s=window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches;return{object3D:r,setVisible(e){o=+!!e,e&&(r.visible=!0,s&&(a=1,n.uniforms.uOpacity.value=1))},finish(){o=0,a=0,n.uniforms.uOpacity.value=0,r.visible=!1},update(e){if(!r.visible)return;if(a===o){o===0&&(r.visible=!1);return}let t=s?1:Math.max(0,Number(e)||0)/$e;a=o>a?Math.min(o,a+t):Math.max(o,a-t),n.uniforms.uOpacity.value=a,a===o&&o===0&&(r.visible=!1)},destroy(){e.remove(r),t.dispose(),n.dispose()}}},rt=.16,it=.35,at=.22,ot=2.2,st=.2,ct=.14,W=new Set([`apartments`,`residential`,`house`,`dormitory`,`hotel`]),lt=1e-6,G=.35,ut=.5,dt=.5,ft=2.5,pt=e=>typeof e==`number`&&Number.isFinite(e),K=e=>Array.isArray(e)&&e.length>=2&&pt(e[0])&&pt(e[1]),mt=(e,t)=>{if(!Array.isArray(e))return[];let n=(Number(t)||0)*Math.PI/180,r=Math.cos(n),i=Math.sin(n),a=[];for(let t of e){if(!K(t))continue;let e=Number(t[0]),n=Number(t[1]);a.push([e*r-n*i,e*i+n*r])}return a},ht=e=>{let t=e.length;if(t<3)return 0;let n=0;for(let r=0;r<t;r++){let i=e[r],a=e[(r+1)%t];n+=i[0]*a[1]-a[0]*i[1]}return n/2},gt=e=>Array.isArray(e)?Math.abs(ht(e.filter(K))):0,_t=(e,t)=>{let n=e.length,r=ht(e)>=0?1:-1,i=[];for(let a=0;a<n;a++){let o=e[(a-1+n)%n],s=e[a],c=e[(a+1)%n],l=s[0]-o[0],u=s[1]-o[1],d=c[0]-s[0],f=c[1]-s[1],p=Math.hypot(l,u),m=Math.hypot(d,f);if(p<1e-9||m<1e-9){i.push([s[0],s[1]]);continue}let h=-u/p*r,g=l/p*r,_=-f/m*r,v=d/m*r,y=h+_,b=g+v,x=Math.hypot(y,b);x<1e-9?(y=h,b=g):(y/=x,b/=x);let S=y*h+b*g,C=t/Math.max(S,G);i.push([s[0]+y*C,s[1]+b*C])}return i},vt=(e,t,n)=>{let r=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){let[o,s]=e[i],[c,l]=e[a];s>n!=l>n&&t<(c-o)*(n-s)/(l-s)+o&&(r=!r)}return r},yt=e=>e>0?1:e<0?-1:0,bt=(e,t,n,r)=>{let i=yt((t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])),a=yt((t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0])),o=yt((r[0]-n[0])*(e[1]-n[1])-(r[1]-n[1])*(e[0]-n[0])),s=yt((r[0]-n[0])*(t[1]-n[1])-(r[1]-n[1])*(t[0]-n[0]));return i!==a&&o!==s},xt=(e,t)=>{for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];for(let e=0;e<t.length;e++)if(bt(r,i,t[e],t[(e+1)%t.length]))return!0}return!1},St=(e,t)=>!(e.buildingIndex!==t.buildingIndex||e.windows!==t.windows||t.baseZ<e.baseZ||t.baseZ>e.topZ+Nt||t.topZ<=e.topZ||gt(t.outline)>=gt(e.outline)*.999||!vt(e.outline,t.outline[0][0],t.outline[0][1])||xt(e.outline,t.outline)),Ct=e=>{let t=e.filter(K),n=t.length;if(n<3)return!1;for(let e=0;e<n;e++){let r=t[e],i=t[(e+1)%n];for(let a=e+2;a<n;a++)if(!(e===0&&a===n-1)&&bt(r,i,t[a],t[(a+1)%n]))return!1}return!0},wt=(e,t)=>{if(!Array.isArray(e))return[];let n=e.filter(K).map(e=>[e[0],e[1]]),r=Number(t);if(n.length<3||!Number.isFinite(r)||r<=0)return n;let i=ht(n),a=Math.abs(i),o=r;for(let e=0;e<6;e++){let e=_t(n,o),t=e.every(e=>Number.isFinite(e[0])&&Number.isFinite(e[1])),r=ht(e),s=i===0||Math.sign(r)===Math.sign(i),c=Math.abs(r)<=a*.98&&Math.abs(r)>=a*.05;if(t&&s&&c&&Ct(e))return e;o/=2}return n},Tt=(e,t)=>{let n=t[0]-e[0],r=t[1]-e[1],i=Math.hypot(n,r);return i<1e-9?null:[n/i,r/i]},Et=(e,t,n,r)=>[e[0]+t[0]*n*r,e[1]+t[1]*n*r],Dt=(e,t,n,r)=>{let i=t[0]*r[1]-t[1]*r[0];if(Math.abs(i)<1e-12)return null;let a=((n[0]-e[0])*r[1]-(n[1]-e[1])*r[0])/i;return[e[0]+t[0]*a,e[1]+t[1]*a]},Ot=(e,t)=>{if(!Array.isArray(e))return null;let n=e.filter(K).map(e=>[e[0],e[1]]),r=n.length;if(r<2)return null;let i=Array.isArray(t)?t.map(Number):Array.from({length:r-1},()=>Number(t));if(i.length!==r-1)return null;let a=[],o=[],s=[];for(let e=0;e<r-1;e++){let t=i[e];if(!Number.isFinite(t)||t<=0)return null;let r=Tt(n[e],n[e+1]);if(!r)return null;o.push(r),s.push([-r[1],r[0]]),a.push(t/2)}let c=[Et(n[0],s[0],a[0],1)],l=[Et(n[0],s[0],a[0],-1)];for(let e=1;e<r-1;e++){let t=ft*Math.max(a[e-1],a[e]);for(let[r,i]of[[1,c],[-1,l]]){let c=Et(n[e-1],s[e-1],a[e-1],r),l=Et(n[e],s[e],a[e],r),u=Dt(c,o[e-1],l,o[e]);if(!u)u=l;else{let r=u[0]-n[e][0],i=u[1]-n[e][1],a=Math.hypot(r,i);a>t&&(u=[n[e][0]+r/a*t,n[e][1]+i/a*t])}i.push(u)}}let u=r-1;c.push(Et(n[u],s[u-1],a[u-1],1)),l.push(Et(n[u],s[u-1],a[u-1],-1));let d=[...l,...c.reverse()];return Ct(d)?(ht(d)<0&&d.reverse(),{outline:d}):null},kt=(e,t)=>{if(!Array.isArray(e))return[];let n=e.filter(K).map(e=>[e[0],e[1]]),r=n.length;if(r<2)return[];let i=Array.isArray(t)?t.map(Number):Array.from({length:r-1},()=>Number(t));if(i.length!==r-1)return[];let a=[],o=0;for(;o<r-1;){let e=null,t=r;for(;t>o+1&&(e=Ot(n.slice(o,t),i.slice(o,t-1)),!e);t--);if(!e){o++;continue}a.push(e),o=t-1}return a},At=e=>{if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!=`object`)continue;let e=It(n.line);if(!e)continue;let r=Number(n.width);if(!Number.isFinite(r)||r<=0)continue;let i=Tt(e[1],e[0]),a=Tt(e[e.length-2],e[e.length-1]);!i||!a||t.push({line:e,width:r,outward:[i,a]})}let n=t.length;if(n===0)return[];let r=[];for(let e=0;e<n;e++){let n=t[e].line;r.push({group:e,end:0,point:n[0],outward:t[e].outward[0]}),r.push({group:e,end:1,point:n[n.length-1],outward:t[e].outward[1]})}let i=(e,t)=>Math.abs(e[0]-t[0])<=ut&&Math.abs(e[1]-t[1])<=ut,a=r.map(e=>r.reduce((t,n,r)=>(n.group!==e.group&&i(n.point,e.point)&&t.push(r),t),[])),o=(e,t)=>-(r[e].outward[0]*r[t].outward[0]+r[e].outward[1]*r[t].outward[1]),s=e=>{let t=null;for(let n of a[e]){let r=o(e,n);(!t||r>t.score)&&(t={index:n,score:r})}return t},c=new Map;for(let e=0;e<r.length;e++){let t=s(e);if(!t)continue;let n=s(t.index);!n||n.index!==e||(a[e].length===1||t.score>=dt)&&c.set(e,t.index)}let l=new Set,u=[],d=(e,t)=>r.findIndex(n=>n.group===e&&n.end===t);for(let e=0;e<n;e++){if(l.has(e))continue;let n=[-1,-1];n[0]=d(e,0),n[1]=d(e,1);let i=n.find(e=>e>=0&&!c.has(e)),a=[],o=[],s=e,f=i===void 0?0:r[i].end;for(;!l.has(s);){l.add(s);let e=f===0?t[s].line:[...t[s].line].reverse();a.length===0&&a.push(e[0]);for(let n=1;n<e.length;n++){let r=e[n],i=a[a.length-1];Math.abs(i[0]-r[0])<=ut&&Math.abs(i[1]-r[1])<=ut||(a.push(r),o.push(t[s].width))}let n=+(f===0),i=c.get(d(s,n));if(i===void 0)break;let u=r[i].group;if(l.has(u))break;s=u,f=r[i].end}a.length>=2&&o.length===a.length-1&&u.push({line:a,widths:o})}return u},jt=e=>{if(e.length<3)return 0;let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)t=Math.min(t,a[0]),n=Math.min(n,a[1]),r=Math.max(r,a[0]),i=Math.max(i,a[1]);return Math.min(r-t,i-n)},Mt=(e,t,n=!1)=>{let r=Number(t);if(!Array.isArray(e)||e.length<3||!Number.isFinite(r)||r<=0)return[];if(!n)return[{inset:0,height:r}];let i=gt(e),a=jt(e.filter(K));if(i<250||r<12||a<=0)return[{inset:0,height:r}];let o=a*rt;if(i>=1500&&r>=30){let e=Math.min(o*ot,a*it);return[{inset:0,height:r*(1-st-ct)},{inset:o,height:r*st},{inset:e,height:r*ct}]}return[{inset:0,height:r*(1-at)},{inset:o,height:r*at}]},q=(e,t,n)=>{let r=String(e||``).trim().toLowerCase();if(W.has(r))return!0;let i=Number(t),a=Number(n);return Number.isFinite(i)&&Number.isFinite(a)&&i>=10&&a>=100},Nt=1e-9,Pt=e=>{let t=[];for(let n of e){let e=t[t.length-1];e&&e[0].buildingIndex===n.buildingIndex?e.push(n):t.push([n])}let n=[];for(let e of t){let t=e.length>1;for(let n=1;t&&n<e.length;n++)St(e[n-1],e[n])||(t=!1);if(t)n.push(e);else for(let t of e)n.push([t])}return n},Ft=e=>{if(!Array.isArray(e))return null;let t=[];for(let n of e){if(!K(n))continue;let e=[n[0],n[1]],r=t[t.length-1];r&&Math.abs(r[0]-e[0])<lt&&Math.abs(r[1]-e[1])<lt||t.push(e)}for(;t.length>=2;){let e=t[0],n=t[t.length-1];if(Math.abs(e[0]-n[0])<lt&&Math.abs(e[1]-n[1])<lt)t.pop();else break}return t.length>=3?t:null},It=e=>{if(!Array.isArray(e))return null;let t=[];for(let n of e){if(!K(n))continue;let e=[n[0],n[1]],r=t[t.length-1];r&&Math.abs(r[0]-e[0])<lt&&Math.abs(r[1]-e[1])<lt||t.push(e)}return t.length>=2?t:null},Lt={pieces:[],roads:[],bounds:null},Rt=(e,t)=>{if(!e)return Lt;let n=Number(t?.unitsPerMeter);if(!Number.isFinite(n)||n<=0)return Lt;let r=pt(Number(t?.centerX))?Number(t.centerX):0,i=pt(Number(t?.centerY))?Number(t.centerY):0,a=pt(Number(e.manual?.rotationDeg))?Number(e.manual.rotationDeg):0,o=Array.isArray(e.manual?.offset)?e.manual.offset:[],s=pt(Number(o[0]))?Number(o[0]):0,c=pt(Number(o[1]))?Number(o[1]):0,l=new Set(Array.isArray(e.manual?.removed)?e.manual.removed.filter(e=>typeof e==`string`):[]),u=e=>[(e[0]+s)*n+r,(e[1]+c)*n+i],d=[],f=0,p=(e,r,i,o)=>{let s=Ft(e);if(!s)return;let c=Number(r);if(!Number.isFinite(c)||c<=0)return;let l=mt(s,a),p=gt(l);if(p<1||!Ct(l))return;let m=q(i,c,p),h=Mt(l,c,t?.levels),g=f++,_=0;for(let e of h){let t=e.inset>0?wt(l,e.inset):l,r=_*n,i=(_+e.height)*n;if(_+=e.height,t.length<3||!(i>r))continue;let a={outline:t.map(u),baseZ:r,topZ:i,windows:m,buildingIndex:g};o&&(a.buildingId=o),d.push(a)}};if(Array.isArray(e.buildings))for(let t of e.buildings)!t||typeof t!=`object`||l.has(t.id)||p(t.outline,t.height,t.type,t.id);if(Array.isArray(e.manual?.added))for(let t of e.manual.added)!t||typeof t!=`object`||p(t.outline,t.height,`added`);let m=[];if(Array.isArray(e.roads))for(let t of At(e.roads)){let e=mt(t.line,a);for(let n of kt(e,t.widths))m.push({outline:n.outline.map(u)})}let h=1/0,g=1/0,_=-1/0,v=-1/0,y=e=>{h=Math.min(h,e[0]),g=Math.min(g,e[1]),_=Math.max(_,e[0]),v=Math.max(v,e[1])};for(let e of d)for(let t of e.outline)y(t);for(let e of m)for(let t of e.outline)y(t);return{pieces:d,roads:m,bounds:h===1/0?null:{minX:h,minY:g,maxX:_,maxY:v}}},zt=14672872,Bt=.1,Vt=12392994,Ht=.5,Ut=.6,Wt=3.2,Gt=.18,Kt=`#f2f5f8`,qt=`#5b6879`,Jt=.22,Yt=4,Xt=256,Zt=.4,Qt=.05,J=(e,t)=>{let n=Math.imul(e+2654435769,2246822507)^Math.imul(t+2654435769,3266489909);return n^=n>>>13,n=Math.imul(n,1540483477),n^=n>>>15,(n>>>0)/4294967296},$t=()=>{if(typeof document>`u`)return null;let e=document.createElement(`canvas`);e.width=Xt,e.height=Xt;let t=e.getContext(`2d`);if(!t)return null;t.fillStyle=Kt,t.fillRect(0,0,Xt,Xt);let n=Xt/Yt,r=n*Gt;for(let e=0;e<Yt;e++)for(let i=0;i<Yt;i++){let a=(J(i,e)-.5)*2*Jt;t.fillStyle=en(qt,Kt,1-Math.max(0,Math.min(1,1+a))),t.fillRect(i*n+r,e*n+r,n-r*2,n-r*2)}let i=new ie(e);return i.wrapS=M,i.wrapT=M,i.anisotropy=4,i.needsUpdate=!0,i},en=(e,t,n)=>{let r=tn(e),i=tn(t),a=(e,t)=>Math.round(e+(t-e)*nn(n));return`rgb(${a(r[0],i[0])}, ${a(r[1],i[1])}, ${a(r[2],i[2])})`},tn=e=>{let t=e.replace(`#`,``);return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]},nn=e=>Math.max(0,Math.min(1,e)),rn=(e,t,n,r,i)=>r?[e*i,n*i]:[t*i,n*i],an=e=>{let t=1/e;return{generateTopUV:(e,t,n,r,i)=>[n,r,i].map(e=>new te(t[e*3],t[e*3+1])),generateSideWallUV:(e,n,r,i,a,o)=>{let s=n[r*3],c=n[r*3+1],l=n[i*3],u=n[i*3+1],d=Math.abs(s-l)>=Math.abs(c-u),f=e=>{let r=rn(n[e*3],n[e*3+1],n[e*3+2],d,t);return new te(r[0],r[1])};return[f(r),f(i),f(a),f(o)]}}},on=(t,n,r,i)=>{if(t.length<3)return null;let a=e=>e.map(e=>new te(e[0],e[1])),o=null;try{o=e.triangulateShape(a(t),n.map(a))}catch{return null}if(!o||o.length===0)return null;let s=t.concat(...n),c=o[0],[l,u,d]=[s[c[0]],s[c[1]],s[c[2]]],f=(u[0]-l[0])*(d[1]-l[1])-(u[1]-l[1])*(d[0]-l[0])>=0!==i,p=new Float32Array(o.length*9),m=new Float32Array(o.length*6),h=new Float32Array(o.length*9),g=i?1:-1,_=0;for(let e of o){let t=f?[e[2],e[1],e[0]]:e;for(let e of t){let t=s[e];p[_*3]=t[0],p[_*3+1]=t[1],p[_*3+2]=r,h[_*3+2]=g,m[_*2]=t[0],m[_*2+1]=t[1],_++}}let v=new b;return v.setAttribute(`position`,new ae(p,3)),v.setAttribute(`uv`,new ae(m,2)),v.setAttribute(`normal`,new ae(h,3)),v},sn=e=>ht(e)>=0?e:[...e].reverse(),cn=(e,t,n,r)=>{if(e.length<3||!(n>t))return null;let i=sn(e),a=i.length*6,o=new Float32Array(a*3),s=new Float32Array(a*2),c=new Float32Array(a*3),l=0,u=(e,t,n,r,i,a)=>{let u=new A().subVectors(t,e),d=new A().subVectors(n,e),f=new A().crossVectors(u,d).normalize();for(let[u,d]of[[e,r],[t,i],[n,a]])o[l*3]=u.x,o[l*3+1]=u.y,o[l*3+2]=u.z,c[l*3]=f.x,c[l*3+1]=f.y,c[l*3+2]=f.z,s[l*2]=d[0],s[l*2+1]=d[1],l++};for(let e=0;e<i.length;e++){let a=i[e],o=i[(e+1)%i.length];if(a[0]===o[0]&&a[1]===o[1])continue;let s=Math.abs(a[0]-o[0])>=Math.abs(a[1]-o[1]),c=rn(a[0],a[1],t,s,r),l=rn(o[0],o[1],t,s,r),d=rn(a[0],a[1],n,s,r),f=rn(o[0],o[1],n,s,r),p=new A(a[0],a[1],t),m=new A(o[0],o[1],t),h=new A(a[0],a[1],n),g=new A(o[0],o[1],n);u(p,m,g,c,l,f),u(p,g,h,c,f,d)}if(l===0)return null;let d=new b;return d.setAttribute(`position`,new ae(o,3)),d.setAttribute(`uv`,new ae(s,2)),d.setAttribute(`normal`,new ae(c,3)),d},ln=(e,t)=>{if(e.length===0)return null;let n=1/t,r=[],i=[];for(let t of e){let e=cn(t.outline,t.baseZ,t.topZ,n);if(!e)return null;i.push(e)}let a=on(e[0].outline,[],e[0].baseZ,!1);if(!a)return null;r.push(a);for(let t=1;t<e.length;t++){let n=on(e[t-1].outline,[e[t].outline],e[t].baseZ,!0);if(!n)return null;r.push(n)}let o=on(e[e.length-1].outline,[],e[e.length-1].topZ,!0);return o?(r.push(o),{caps:r,walls:i}):null},un=()=>{let e=new t;e.visible=!1;let n=[],r=!1,i=0,a=0,o=typeof window<`u`&&!!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches,s=()=>{for(let t of n)e.remove(t),t.geometry.dispose();n.length=0,r=!1},c=new oe({color:zt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),l=new oe({color:zt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),u=new oe({color:Vt,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),m=null,h=()=>(m||=$t(),m&&l.map!==m&&(l.map=m,l.needsUpdate=!0),m),g=e=>e.length===0?null:w(e,!1),_=(e,t)=>{let n=g([...e,...t]);if(!n)return null;let r=0,i=(e,t)=>{for(let i of e){let e=i.attributes.position?.count??0;e>0&&n.addGroup(r,e,t),r+=e}};return i(e,0),i(t,1),n},v=()=>{let e=Bt*i;c.opacity=e,l.opacity=e,u.opacity=Ht*i},y=t=>{a=+!!t,t&&r&&(e.visible=!0,o&&(i=1,v()))},b=(e,t,n,r)=>{let i=[];for(let a of Pt(e)){let e=ln(a,t);if(!e){i.push(a);continue}r===`highlight`?n.highlight.push(...e.caps,...e.walls):a[0].windows?(n.cap.push(...e.caps),n.wall.push(...e.walls)):n.plain.push(...e.caps,...e.walls)}return i};return{object3D:e,build:({data:t,unitsPerMeter:i,centerX:o,centerY:m,highlight:v,levels:y})=>{s();let x=Number(i);if(!Number.isFinite(x)||x<=0)return;let S={unitsPerMeter:x,centerX:Number.isFinite(Number(o))?Number(o):0,centerY:Number.isFinite(Number(m))?Number(m):0,levels:y},C=Rt(t,S),w=new Set(Array.isArray(v)?v:[]),T=w.size>0&&t?Rt({...t,manual:{...t.manual,removed:[]}},S).pieces.filter(e=>e.buildingId!==void 0&&w.has(e.buildingId)):[];if(C.pieces.length===0&&C.roads.length===0&&T.length===0)return;let E=Wt*Yt*x,D=[],O=[],k=[],A=[],ee={plain:D,highlight:O,cap:[],wall:[]},j={plain:D,highlight:[],cap:k,wall:A},M=[...b(T,E,ee,`highlight`),...b(C.pieces,E,j,`plain`)];A.length>0&&h();for(let e of M){let t=e[0].windows;t&&h();for(let n of e){if(n.topZ-n.baseZ<Qt*x||n.outline.length<3||!(n.topZ>n.baseZ))continue;let e=new f;e.moveTo(n.outline[0][0],n.outline[0][1]);for(let t=1;t<n.outline.length;t++)e.lineTo(n.outline[t][0],n.outline[t][1]);e.closePath();try{let r=new d(e,{depth:n.topZ-n.baseZ,bevelEnabled:!1,steps:1,curveSegments:1,UVGenerator:an(E)});r.translate(0,0,n.baseZ),t?k.push(r):(r.clearGroups(),D.push(r))}catch{}}}let N=Ut*x;for(let e of C.roads){let t=on(e.outline,[],N,!0);t&&D.push(t)}let P=g(D);D.forEach(e=>e.dispose());let F=_(k,A);k.forEach(e=>e.dispose()),A.forEach(e=>e.dispose());let te=g(O);O.forEach(e=>e.dispose());let I=(t,r)=>{if(!t)return;let i=new p(t,r);i.castShadow=!1,i.receiveShadow=!1,e.add(i),n.push(i)};I(P,c),I(F,[c,l]),I(te,u),a>0&&(e.visible=!0),r=n.length>0},setVisible:y,update(t){if(!r)return;if(i===a){a===0&&(e.visible=!1);return}let n=o?1:Math.max(0,Number(t)||0)/Zt;i=a>i?Math.min(a,i+n):Math.max(a,i-n),v(),i===a&&a===0&&(e.visible=!1)},dispose(){s(),e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose()}),e.clear(),m?.dispose(),m=null,c.dispose(),l.dispose(),u.dispose(),r=!1,e.visible=!1,i=0,a=0}}},Y=e=>typeof e==`object`&&!!e&&!Array.isArray(e),X=e=>typeof e==`number`&&Number.isFinite(e),Z=e=>{if(!Array.isArray(e)||e.length<2)return null;let t=e[0],n=e[1];return!X(t)||!X(n)?null:[t,n]},dn=(e,t)=>{if(!Array.isArray(e))return null;let n=[];for(let t of e){let e=Z(t);e&&n.push(e)}return n.length>=t?n:null},fn=e=>typeof e==`string`?e.trim():``,pn=e=>{if(!Y(e))return null;let t=X(e.version)?e.version:1,n=Y(e.source)?e.source:{},r={address:fn(n.address),lat:X(n.lat)?n.lat:0,lon:X(n.lon)?n.lon:0,radius:X(n.radius)?n.radius:0,bakedAt:fn(n.bakedAt),provider:fn(n.provider)},i=Y(e.manual)?e.manual:{},a=Array.isArray(i.offset)&&i.offset.length===2&&X(i.offset[0])&&X(i.offset[1])?[i.offset[0],i.offset[1]]:[0,0],o={rotationDeg:X(i.rotationDeg)?i.rotationDeg:0,offset:a,removed:Array.isArray(i.removed)?i.removed.filter(e=>typeof e==`string`&&e.length>0):[],added:Array.isArray(i.added)?i.added.reduce((e,t)=>{if(!Y(t))return e;let n=dn(t.outline,3),r=t.height;return!n||!X(r)||r<=0||e.push({outline:n,height:r}),e},[]):[]},s=[];if(Array.isArray(e.buildings))for(let t of e.buildings){if(!Y(t))continue;let e=fn(t.id),n=dn(t.outline,3),r=t.height;if(!e||!n||!X(r)||r<=0)continue;let i={id:e,type:fn(t.type)||`yes`,height:r,outline:n},a=t.levels;X(a)&&Number.isInteger(a)&&a>=1&&a<=100&&(i.levels=a),s.push(i)}let c=[];if(Array.isArray(e.roads))for(let t of e.roads){if(!Y(t))continue;let e=fn(t.id),n=fn(t.kind),r=dn(t.line,2),i=t.width;if(!e||!n||!r||!X(i)||i<=0)continue;let a={id:e,kind:n,width:i,line:r},o=fn(t.name);o&&(a.name=o),c.push(a)}return{version:t,source:r,manual:o,buildings:s,roads:c}},mn=5e3,hn=2400,gn=.7,_n=.5,vn=1.15,yn=.35,bn=.5,xn=.5,Sn=2,Cn=.1,wn=320,Tn=28,En=12,Dn=300,On=new A(1,0,0),kn=new A(0,1,0),An=[`.pin-facades`,`.plan-align`,`.info-menu`,`.project-sheet`,`.app-ui`,`.model-menu`,`.sun-menu`,`.screenshot-view`,`.screenshot-flash`,`.screenshot-toast`,`.calib`,`.pin-hint`,`.pin-demo`,`.model-loader`,`.site-panel`,`.site-chip`,`.site-reticle`,`.site-hint`,`.ar-scanner`].join(`, `),jn=`
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
`,Mn=[{id:`orbit`,label:`1 палец — вращать`,art:`<svg class="pin-demo__svg" viewBox="0 0 132 64"><g class="pin-demo__ring" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 8"><circle cx="66" cy="32" r="22"/><path d="M62 4l10 6-10 6z" fill="currentColor" stroke="none"/></g></svg><span class="pin-demo__orbit"><span class="pin-demo__finger pin-demo__finger--orbit"></span></span>`},{id:`pinch`,label:`2 пальца — приблизить`,art:`<svg class="pin-demo__svg" viewBox="0 0 132 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M44 32H16"/><path d="M24 25l-8 7 8 7"/><path d="M88 32h28"/><path d="M108 25l8 7-8 7"/></svg><span class="pin-demo__finger pin-demo__finger--pinch-l"></span><span class="pin-demo__finger pin-demo__finger--pinch-r"></span>`},{id:`tap`,label:`Двойной тап — выделить объект`,art:`<span class="pin-demo__ripple"></span><span class="pin-demo__ripple pin-demo__ripple--late"></span><span class="pin-demo__finger"></span>`}],Nn=()=>{let e=document.createElement(`div`);e.className=`pin-demo`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-label`,`Жесты: один палец вращает модель, два пальца приближают, двойной тап выделяет объект`),e.style.setProperty(`--pin-stage`,`${hn}ms`);let t=document.createElement(`div`);return t.className=`pin-demo__viewport`,Mn.forEach(({id:e,label:n,art:r})=>{let i=document.createElement(`div`);i.className=`pin-demo__stage pin-demo__stage--${e}`,i.innerHTML=`<div class="pin-demo__art">${r}</div><div class="pin-demo__label">${n}</div>`,t.appendChild(i)}),e.appendChild(t),e},Pn=e=>e instanceof Element&&(!!e.closest(An)||!!e.closest(`input, select, textarea`)),Fn=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,In=!!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches,Ln=e=>In?.01:e,Rn=(e,t)=>((t-e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,zn=({camera:e,scene:t,onPinRequest:n})=>{C(`pin-mode`,jn);let r=U({scene:t}),i=un(),c=document.createElement(`div`);c.className=`pin-hint`,c.setAttribute(`role`,`status`),document.body.appendChild(c);let l=Nn();document.body.appendChild(l);let u=Qe({camera:e}),d=`off`,f=null,p=null,m=null,h=null,g=[],_=new A,v=null,y=null,b=null,x=null,S=new o,w=new o,T=new A,E=new A,D=new A,O=new ne,k=new A,ee=new te,j=new a,M=new Map,N=null,P=null,F=null,I=null,re=null,ie=(e,t=mn)=>{L(),c.textContent=e,c.classList.add(`pin-hint--visible`),clearTimeout(I??void 0),t>0&&(I=setTimeout(()=>c.classList.remove(`pin-hint--visible`),t))},ae=()=>{clearTimeout(I??void 0),c.classList.remove(`pin-hint--visible`)},oe=()=>{ae(),l.classList.remove(`pin-demo--run`),l.offsetWidth,l.classList.add(`pin-demo--run`),clearTimeout(re??void 0),re=setTimeout(L,hn*Mn.length)},L=()=>{clearTimeout(re??void 0),l.classList.remove(`pin-demo--run`)},se=e=>{if(!y)return;y.time+=e;let t=Fn(Math.min(y.time/y.duration,1)),{from:n,to:r}=y;u.setAngles(s.lerp(n.azimuth,r.azimuth,t),s.lerp(n.polar,r.polar,t)),u.setDistance(s.lerp(n.distance,r.distance,t)),u.pivot.lerpVectors(n.pivot,r.pivot,t),y.time>=y.duration&&(y=null)},ce=(e,t)=>{let n={azimuth:u.getAzimuth(),polar:u.getPolar(),distance:u.getDistance(),pivot:u.pivot.clone()};y={time:0,duration:Math.max(.01,t),from:n,to:{azimuth:n.azimuth+Rn(n.azimuth,e.azimuth),polar:e.polar,distance:e.distance,pivot:e.pivot.clone()}}},le=()=>(e.updateMatrixWorld(!0),{position:e.position.clone(),quaternion:e.quaternion.clone()}),ue=t=>{if(!x)return;x.time+=t;let n=Fn(Math.min(x.time/x.duration,1));n<1&&(D.copy(e.position),w.copy(e.quaternion),e.position.lerpVectors(x.from.position,D,n),e.quaternion.slerpQuaternions(x.from.quaternion,w,n)),x.time>=x.duration&&(x=null),e.updateMatrixWorld()},de=()=>{let e=s.degToRad(f?.currentModel?.anchor?.rotationY||0);return new o().setFromAxisAngle(kn,-e).multiply(new o().setFromAxisAngle(On,-Math.PI/2))},fe=()=>{let e=f?.currentModelRoot;if(!e)return[];let t=e=>e.filter(e=>{let t=!1;return e.traverse(e=>{e.isMesh&&(t=!0)}),t}),n=t(e.children);if(n.length===1&&n[0].children.length>1){let e=t(n[0].children);e.length>1&&(n=e)}return n},pe=e=>(f?.anchorGroup&&f.anchorGroup.updateWorldMatrix(!0,!0),O.setFromObject(e),{center:O.getCenter(new A),radius:O.isEmpty()?1:Math.max(O.getSize(k).length()/2,.02)}),me=()=>{let e=f?.currentBbox;if(e)return new A(e.centerX,e.centerY,e.height/2);let t=new A;if(!f||!p||(p.updateWorldMatrix(!0,!0),O.setFromObject(f.currentAppearGroup||p),O.isEmpty()))return t;O.getCenter(t);let n=p.getWorldScale(E).x||1;return t.sub(p.position).applyQuaternion(p.quaternion.clone().invert()).divideScalar(n)},he=()=>{let e=new A;if(!f||!p)return{center:e,radius:1};p.updateWorldMatrix(!0,!0);let t=p.getWorldScale(E).x||1,n=f.currentBbox;if(n){e.set(n.centerX,n.centerY,n.height/2).applyMatrix4(p.matrixWorld);let r=.5*Math.hypot(n.width,n.depth,n.height)*t;return{center:e,radius:Math.max(r,.05)}}return O.setFromObject(f.currentAppearGroup||p),O.isEmpty()?{center:e,radius:1}:(O.getCenter(e),{center:e,radius:Math.max(O.getSize(k).length()/2,.05)})},ge=e=>{let t=f?.currentBbox;if(!t||!p)return null;let n=p.getWorldScale(E).x||1,r=new A,i=new A;for(let a=0;a<8;a++)r.set(a&1?t.width/2:-t.width/2,a&2?t.depth/2:-t.depth/2,a&4?t.height/2:-t.height/2).applyQuaternion(e).multiplyScalar(n),i.set(Math.max(i.x,Math.abs(r.x)),Math.max(i.y,Math.abs(r.y)),Math.max(i.z,Math.abs(r.z)));return i},R=new Map,_e=null,z=null,ve=e=>{if(R.has(e))return Promise.resolve(R.get(e)??null);let t=`/AR-Buildings-build/config/city/${encodeURIComponent(e)}.json`;return fetch(t,{cache:`no-cache`}).then(e=>e.ok?e.json():null).then(t=>{let n=pn(t);return R.set(e,n),n}).catch(()=>(R.set(e,null),null))},ye=()=>{let e=f?.currentModelRoot?.scale?.x;if(typeof e==`number`&&Number.isFinite(e)&&e>0)return e;let t=f?.currentModel?.anchor?.scale;return typeof t==`number`&&Number.isFinite(t)&&t>0?t:null},be=()=>{let e=ye(),n=f?.currentBbox;i.build({data:_e,unitsPerMeter:e??0,centerX:Number.isFinite(Number(n?.centerX))?Number(n?.centerX):0,centerY:Number.isFinite(Number(n?.centerY))?Number(n?.centerY):0}),i.object3D.children.length>0?i.object3D.parent||t.add(i.object3D):i.object3D.parent&&t.remove(i.object3D)},xe=()=>{let e=f?.name;if(!(!e||z===e)){if(z=e,_e=R.get(e)??null,R.has(e)){be(),i.object3D.parent&&Se();return}ve(e).then(t=>{z===e&&(_e=t,be(),i.object3D.parent&&(Se(),i.setVisible(!0)))})}},Se=()=>{!f?.anchorGroup||!i.object3D.parent||(f.anchorGroup.updateWorldMatrix(!0,!1),i.object3D.matrix.copy(f.anchorGroup.matrixWorld),i.object3D.matrix.decompose(i.object3D.position,i.object3D.quaternion,i.object3D.scale))},Ce=1,we=e=>{Ce=e;let t=Math.min(Cn,e),n=e*Sn;if(d===`in`){let e=u.getDistance();u.setLimits(Math.min(t,e),Math.max(n,e))}else u.setLimits(t,n)},Te=({center:e,radius:t},{animate:n=!0}={})=>{let r=u.fitDistance(t);we(r);let i={azimuth:u.getAzimuth(),polar:u.getPolar(),distance:r*xn,pivot:e.clone()};n?ce(i,Ln(_n)):(u.setAngles(i.azimuth,i.polar),u.setDistance(i.distance),u.pivot.copy(i.pivot),u.apply())},B=document.createElement(`div`);B.className=`pin-facades`,B.setAttribute(`role`,`group`),B.setAttribute(`aria-label`,`Смена фасада`),B.hidden=!0;let Ee=[],V=()=>{B.hidden=!(d===`in`||d===`active`)||!h||h.count<2||!!(m&&!h.isFacadeNode(m)),Ee.forEach(e=>{e.disabled=d!==`active`})},De=()=>{g.forEach(e=>{e.visible=!0}),h?.applyVisibility(null)};for(let e of[-1,1]){let t=document.createElement(`button`);t.type=`button`,t.setAttribute(`aria-label`,e<0?`Предыдущий фасад`:`Следующий фасад`),t.title=e<0?`Предыдущий фасад`:`Следующий фасад`,t.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="`+(e<0?`M15 5l-7 7 7 7`:`M9 5l7 7-7 7`)+`"/></svg>`,t.addEventListener(`click`,()=>{if(d!==`active`||!h)return;let t=!!m&&h.isFacadeNode(m);h.step(e),t&&(m=h.getActiveNode(),g.forEach(e=>{e.visible=e===m})),h.applyVisibility(m),ae(),L(),V()}),Ee.push(t),B.appendChild(t)}document.body.appendChild(B);let Oe=({animate:e=!0,silent:t=!1}={})=>m?(De(),f?.groundShadow&&f.groundShadow.setVisible(!0),m=null,V(),t||ie(`Двойной тап — выделить объект`),e&&Te(he()),!0):!1,ke=e=>{!e||e===m||(m=e,g.forEach(t=>{t.visible=t===e}),h?.applyVisibility(m),V(),f?.groundShadow&&f.groundShadow.setVisible(!1),ie(`Выделен объект. Двойной тап — вернуть всю модель`),Te(pe(e)))},Ae=(t,n)=>{if(m){Oe();return}let r=f?.currentModelRoot;if(!r)return;if(g.length<2){ie(`В этой модели один объект — выделять нечего`);return}let i=[];r.traverseVisible(e=>{e.isMesh&&e.visible&&i.push(e)}),ee.set(t/window.innerWidth*2-1,-(n/window.innerHeight)*2+1),e.updateMatrixWorld(),j.setFromCamera(ee,e);let a=j.intersectObjects(i,!1);if(a.length===0)return;let o=a[0].object;for(;o.parent&&!g.includes(o);)o=o.parent;g.includes(o)&&ke(o)},je=()=>{d===`off`&&typeof n==`function`&&n()},Me=e=>{if(e.pointerType===`mouse`&&e.button!==0||Pn(e.target))return;let t=!1;if(d===`active`&&(t=!0,L(),ae(),y=null),M.size===0?N={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),moved:!1,multi:!1}:N&&(N.multi=!0),M.set(e.pointerId,{x:e.clientX,y:e.clientY}),t&&M.size===2){let[e,t]=Array.from(M.values());F=Math.max(1,Math.hypot(e.x-t.x,e.y-t.y))}t&&e.preventDefault()},Ne=e=>{let t=M.get(e.pointerId);if(!t)return;let n={x:e.clientX,y:e.clientY};if(N&&N.id===e.pointerId&&Math.hypot(n.x-N.x,n.y-N.y)>En&&(N.moved=!0),d===`active`){if(M.size===1)u.rotate(n.x-t.x,n.y-t.y,window.innerWidth,window.innerHeight),M.set(e.pointerId,n);else if(M.size>=2){M.set(e.pointerId,n);let[t,r]=Array.from(M.values()),i=Math.hypot(t.x-r.x,t.y-r.y);F&&i>1&&u.setDistance(u.getDistance()*(F/i)),F=i}e.preventDefault()}},Pe=(e,t,n,r)=>{if(P&&n-P.time<wn&&Math.hypot(e-P.x,t-P.y)<Tn){P=null,r(e,t);return}P={x:e,y:t,time:n}},Fe=e=>{if(!M.has(e.pointerId)||(M.delete(e.pointerId),M.size<2&&(F=null),!N||N.id!==e.pointerId))return;let t=N;if(N=null,e.type===`pointercancel`||d!==`active`&&d!==`off`)return;let n=performance.now()-t.time;t.moved||t.multi||n>=Dn||Pe(t.x,t.y,t.time,d===`active`?Ae:je)},Ie=!1,H=()=>{Ie||(Ie=!0,window.addEventListener(`pointerdown`,Me,{passive:!1}),window.addEventListener(`pointermove`,Ne,{passive:!1}),window.addEventListener(`pointerup`,Fe),window.addEventListener(`pointercancel`,Fe))},Le=()=>{Ie&&(Ie=!1,window.removeEventListener(`pointerdown`,Me),window.removeEventListener(`pointermove`,Ne),window.removeEventListener(`pointerup`,Fe),window.removeEventListener(`pointercancel`,Fe))};H();let Re=e=>{if(!v)return;v.time+=e;let t=Fn(Math.min(v.time/v.duration,1));v.apply(t),v.time>=v.duration&&(v=null)},ze=(e,t)=>{let n=p,r=n.getWorldScale(E).x||1;T.copy(me()).applyQuaternion(e).multiplyScalar(r),n.quaternion.copy(e),n.position.copy(t).sub(T)},Be=e=>{let t=e?.markerPose;t&&(e.anchorGroup.position.copy(t.position),e.anchorGroup.quaternion.copy(t.quaternion),e.anchorGroup.scale.copy(t.scale))},Ve=e=>{if(!e||!e.currentModelRoot)return!1;let t=f===e;d!==`off`&&(b=null,y=null,v=null,De(),f?.groundShadow&&f.groundShadow.setVisible(!0),f&&!t&&Be(f)),f=e,p=f.anchorGroup,d=`in`,m=null,M.clear(),N=null,P=null,F=null,p.updateMatrixWorld(!0);let n=p.position.clone(),a=p.quaternion.clone(),o=p.scale.clone(),s=o.x||1,c=me(),l=n.clone().add(c.clone().applyQuaternion(a).multiplyScalar(s)),C=t?_.clone():l.clone();_.copy(C);let w=de();v={time:0,duration:Ln(gn),apply:e=>{S.slerpQuaternions(a,w,e),p.quaternion.copy(S),T.copy(c).applyQuaternion(S).multiplyScalar(s),p.position.lerpVectors(l,C,e).sub(T),p.scale.copy(o)}};let{radius:E}=he();u.pivot.copy(C),u.setLimits(.05,1e3),u.fromCamera();let D=u.getAzimuth()+yn,k=ge(w),A=u.fitDistance(E);return k&&(O.min.copy(k).negate(),O.max.copy(k),A=u.fitBox(O,{azimuth:D,polar:vn})),we(A),x={time:0,duration:Ln(gn),from:le()},ce({azimuth:D,polar:vn,distance:A*bn,pivot:C},Ln(gn)),g=fe(),h=f.currentFacades,h?.applyVisibility(null),V(),H(),r.setVisible(!0),xe(),Se(),i.setVisible(!0),!0},He=(e=null)=>{if(b=e,d===`off`){let e=b;b=null,e&&e();return}if(d===`out`)return;m&&Oe({animate:!1,silent:!0}),d=`out`,V(),y=null,M.clear(),N=null,P=null,F=null,i.setVisible(!1),x={time:0,duration:Ln(gn),from:le()};let t=p.position.clone(),n=p.quaternion.clone(),a=p.scale.clone();v={time:0,duration:Ln(gn),apply:e=>{let r=f?.markerPose;r&&(S.slerpQuaternions(n,r.quaternion,e),p.quaternion.copy(S),p.position.lerpVectors(t,r.position,e),p.scale.lerpVectors(a,r.scale,e))}},r.setVisible(!1),ae(),L()},Ue=()=>{d=`off`,h=null,V(),f=null,p=null,x=null,r.finish(),i.setVisible(!1),i.object3D.parent&&t.remove(i.object3D);let e=b;b=null,e&&e()},We=()=>{if(!f||d===`off`||d===`out`)return;De(),m=null,g=fe(),h=f.currentFacades,h?.applyVisibility(null),V(),v=null,f.groundShadow&&f.groundShadow.setVisible(!0),xe(),be(),Se(),p.updateWorldMatrix(!0,!0),ze(de(),_);let e=he();d===`active`?Te(e):we(u.fitDistance(e.radius))},Ge=e=>{if(d===`off`)return;let t=Math.min(Number(e)||0,.05);r.update(t),Se(),i.update(t),v&&Re(t),y&&se(t),d===`in`||d===`active`?(u.apply(),ue(t),d===`in`&&!v&&!y&&(d=`active`,V(),we(Ce),oe())):d===`out`&&(ue(t),v||Ue())},Ke=new A,qe=new o;return{element:c,enable:Ve,disable:He,update:Ge,refresh:We,getCastFrame:()=>{let t=f?.currentModelRoot,n=t?.parent;if(d!==`active`&&d!==`in`||!f?.currentModelId||!t||!n)return{v:1,active:!1};n.updateWorldMatrix(!0,!1),e.getWorldPosition(Ke),e.getWorldQuaternion(qe);let r=Math.abs(e.projectionMatrix.elements[5]),i=Number.isFinite(r)&&r>0?s.radToDeg(2*Math.atan(1/r)):e.fov,a=Number.isFinite(i)&&i>0&&i<180?i:e.fov,o=null;if(m){let e=[],n=m;for(;n&&n!==t&&e.length<32&&n.parent;){let t=n.parent.children.indexOf(n);if(t<0)break;e.unshift(t),n=n.parent}n===t&&(o=e)}return{v:1,active:!0,marker:f.name,modelId:f.currentModelId,camera:{position:[Ke.x,Ke.y,Ke.z],quaternion:[qe.x,qe.y,qe.z,qe.w],fov:a,near:e.near,far:e.far},anchorMatrix:Array.from(n.matrixWorld.elements),facadeIndex:f.currentFacades?.getIndex()??null,selectionPath:o}},isActive:()=>d===`active`||d===`in`,hint:ie,destroy(){b=null,Ue(),Le(),clearTimeout(I??void 0),clearTimeout(re??void 0),r.destroy(),i.dispose(),c.remove(),l.remove(),B.remove()}}},Bn=1920,Vn=({scene:e,camera:t,renderer:n,onUiAction:r,onSunClose:i,onInfoClose:a,onPinRequest:o})=>{n.toneMapping=6,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=1;let s=k({renderer:n,scene:e}),c=y({scene:e}),l=Pe({onChange:({minutes:e})=>c.setTime(e),onClose:()=>{i&&i()}});c.setTime(l.getTime());let u=Re({onClose:()=>{a&&a()}}),d=Be(),f=qe({onAction:r});f.show();let p=zn({camera:t,scene:e,onPinRequest:o}),m=me().quality,h=()=>{let e=window.innerWidth,r=window.innerHeight,i=window.devicePixelRatio||1,a=Math.min(i,(m===`economy`?1280:m===`high`?2560:Bn)/Math.max(e,r));n.setPixelRatio(a),n.setSize(e,r),t.aspect=e/r,t.updateProjectionMatrix()},g=n.setSize.bind(n);return n.setSize=((e,t,r)=>{let i=n.domElement;e===i.width&&t===i.height||g(e,t,r)}),{resize:h,setRenderQuality:e=>{m=e,h()},loader:d,appUi:f,sunRig:c,sunMenu:l,infoMenu:u,pinMode:p,environment:s}},Hn=`
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
`,Un=({buildings:e,registry:t,onPreferenceChange:n,onClose:r,cast:i,anchorTools:a})=>{C(`project-panel`,Hn);let o=null,s=new URLSearchParams(location.search).get(`object`),c=s&&Object.hasOwn(t,s)?s:null,l=me(),u=null,d=null,f=``,p=!1,m=null,h=document.createElement(`div`);h.className=`project-sheet`,h.hidden=!0;let g=document.createElement(`button`);g.type=`button`,g.className=`project-sheet__backdrop`,g.tabIndex=-1,g.setAttribute(`aria-label`,`Закрыть панель`);let _=document.createElement(`section`);_.className=`project-sheet__paper`,_.id=`project-sheet`,_.setAttribute(`role`,`dialog`),_.setAttribute(`aria-modal`,`true`),_.setAttribute(`aria-labelledby`,`project-sheet-title`);let v=document.createElement(`div`);v.className=`project-sheet__header`;let y=document.createElement(`h2`);y.id=`project-sheet-title`;let b=document.createElement(`button`);b.type=`button`,b.className=`project-sheet__close`,b.setAttribute(`aria-label`,`Закрыть`),b.innerHTML=S(`close`,{size:22}),v.append(y,b);let x=document.createElement(`div`);x.className=`project-sheet__body`,_.append(v,x),h.append(g,_),document.body.append(h);let w=(e,t,n=``)=>{let r=document.createElement(e);return r.textContent=t,r.className=n,r},T=e=>{if(!e||e.startsWith(`/`)||/^[a-z]+:/i.test(e))return null;try{let t=new URL(`/AR-Buildings-build/`,location.href),n=new URL(e,t);return n.origin===t.origin&&n.pathname.startsWith(t.pathname)?n.href:null}catch{return null}},E=(e,t)=>{let n=document.createElement(`a`);return n.className=`project-sheet__action`,n.textContent=e+` ↗`,n.href=t,n.target=`_blank`,n.rel=`noopener noreferrer`,x.append(n),n},D=()=>{let n=w(`label`,`Объект`);n.setAttribute(`for`,`project-sheet-project`);let r=document.createElement(`select`);r.id=`project-sheet-project`;let i=new Option(`Выберите объект`,``);r.add(i),Object.keys(t).sort((t,n)=>(e[t]?.name||t).localeCompare(e[n]?.name||n,`ru`)).forEach(t=>r.add(new Option(e[t]?.name||t,t))),r.value=c||``,r.addEventListener(`change`,()=>{c=r.value||null,M(),x.querySelector(`#project-sheet-project`)?.focus()}),x.append(n,r)},O=()=>{if(D(),!c){x.append(w(`p`,`Наведите камеру на генплан или выберите объект, чтобы посмотреть сведения.`,`project-sheet__muted`));return}let t=e[c];x.append(w(`h3`,t?.name||c)),t?.address&&x.append(w(`p`,t.address,`project-sheet__muted`));let n=T(t?.image);if(n){let e=document.createElement(`img`);e.className=`project-sheet__render`,e.src=n,e.alt=`Рендер — `+(t?.name||c),e.loading=`lazy`,e.addEventListener(`error`,()=>{e.replaceWith(w(`p`,`Рендер не удалось загрузить.`,`project-sheet__muted`))},{once:!0}),x.append(e)}if(t?.description&&x.append(w(`p`,t.description)),t?.facts?.length){let e=document.createElement(`dl`);e.className=`project-sheet__facts`,t.facts.forEach(t=>{let n=document.createElement(`div`);n.append(w(`dt`,t.label),w(`dd`,t.value)),e.append(n)}),x.append(e)}let r=T(t?.document);r&&E(`Открыть презентацию PDF`,r);let i=T(t?.markerImage);i&&E(`Открыть генплан-маркер`,i),!n&&!r&&!t?.description&&!t?.facts?.length&&x.append(w(`p`,`Подробные материалы этого объекта пока не добавлены.`,`project-sheet__muted`)),t?.version&&x.append(w(`p`,t.version,`project-sheet__muted`))},k=()=>{let e=he(l);n({...l});let t=x.querySelector(`.project-sheet__status`);t&&(t.textContent=e?`Сохранено на этом устройстве.`:`Применено. Браузер не разрешил сохранить настройки.`)},A=()=>{if(o!==`settings`||!m)return;let e=i?.getStatus(),t=m;t.status.textContent=e?.message||`Общий экран доступен в локальной сети`,t.address.hidden=!e?.screenUrl,e?.screenUrl&&(t.address.href=e.screenUrl,t.address.textContent=e.screenUrl),t.code.disabled=p||!e?.available||!!e.connected,t.connect.disabled=p||!e?.available||!!e.connected||!/^\d{6}$/.test(t.code.value),t.connect.hidden=!!e?.connected,t.disconnect.hidden=!e?.connected,t.disconnect.disabled=p},ee=()=>{let e=document.createElement(`section`);e.className=`project-sheet__row`,e.setAttribute(`aria-label`,`Общий экран`),e.append(w(`h3`,`Общий экран`),w(`p`,`Откройте адрес на телевизоре, ПК или проекторе в той же локальной сети. Введите здесь код с экрана.`,`project-sheet__muted`));let t=w(`a`,``,`project-sheet__action project-sheet__cast-address`);t.target=`_blank`,t.rel=`noopener noreferrer`,t.hidden=!0;let n=w(`label`,`Код с общего экрана`),r=document.createElement(`input`);r.id=`project-sheet-cast-code`,r.className=`project-sheet__cast-code`,r.type=`text`,r.inputMode=`numeric`,r.maxLength=6,r.pattern=`[0-9]{6}`,r.autocomplete=`off`,r.spellcheck=!1,r.placeholder=`000000`,r.value=f,n.htmlFor=r.id,r.addEventListener(`input`,()=>{r.value=r.value.replace(/\D/g,``).slice(0,6),f=r.value,A()});let a=document.createElement(`div`);a.className=`project-sheet__cast-controls`;let o=w(`button`,`Подключить`,`project-sheet__action`),s=w(`button`,`Отключить`,`project-sheet__action`);o.type=`button`,s.type=`button`,o.addEventListener(`click`,async()=>{if(!(!i||p)){p=!0,A();try{await i.connect(r.value)}catch{}finally{p=!1,A()}}}),s.addEventListener(`click`,async()=>{if(!(!i||p)){p=!0,A();try{await i.disconnect()}catch{}finally{p=!1,A()}}}),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&!o.disabled&&(e.preventDefault(),o.click())});let c=w(`p`,``,`project-sheet__muted`);c.setAttribute(`role`,`status`),c.setAttribute(`aria-live`,`polite`),a.append(o,s),e.append(t,n,r,a,c),x.append(e),m={status:c,address:t,code:r,connect:o,disconnect:s},A()},j=()=>{x.append(w(`p`,`Настройки применяются сразу и сохраняются на этом устройстве.`,`project-sheet__muted`));let e=w(`label`,`Качество изображения`);e.setAttribute(`for`,`project-sheet-quality`);let t=document.createElement(`select`);t.id=`project-sheet-quality`;for(let[e,n]of[[`economy`,`Экономное`],[`standard`,`Стандартное`],[`high`,`Высокое`]])t.add(new Option(n,e));t.value=l.quality,t.addEventListener(`change`,()=>{l.quality=t.value,k()}),x.append(e,t,w(`p`,`Влияет на разрешение кадра. Геометрия и текстуры модели сохраняются.`,`project-sheet__muted`));let n=document.createElement(`div`);n.className=`project-sheet__row`;let r=document.createElement(`input`);r.type=`checkbox`,r.checked=l.scanHint,r.id=`project-sheet-hint`;let i=document.createElement(`label`);i.htmlFor=r.id,i.append(r,document.createTextNode(`Подсказка наведения на генплан`)),n.append(i),x.append(n),r.addEventListener(`change`,()=>{l.scanHint=r.checked,k()});let a=w(`p`,``,`project-sheet__status`);a.setAttribute(`role`,`status`),x.append(a);let o=w(`button`,`Сбросить настройки отображения`,`project-sheet__action`);o.type=`button`,o.addEventListener(`click`,()=>{l={...le},M(),k()}),x.append(o),ee()},M=()=>{m=null,x.replaceChildren(),y.textContent=o===`settings`?`Настройки`:`Информация об объекте`,o===`settings`?j():O()},N=()=>{o&&(o=null,_.inert=!0,h.classList.remove(`is-open`),r(),u?.focus(),d=setTimeout(()=>{o||(h.hidden=!0)},340))};return b.addEventListener(`click`,N),g.addEventListener(`click`,N),h.addEventListener(`keydown`,e=>{if(!o)return;if(e.key===`Escape`){e.preventDefault(),N();return}if(e.key!==`Tab`)return;let t=Array.from(_.querySelectorAll(`button:not(:disabled),select,a[href],input:not(:disabled)`)),n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())}),{open:e=>{if(o===e){N();return}d&&clearTimeout(d),u=document.activeElement,o=e,M(),h.hidden=!1,_.inert=!1,requestAnimationFrame(()=>{o===e&&(h.classList.add(`is-open`),b.focus())})},close:N,refreshCast:A,getMode:()=>o,getPreferences:()=>({...l}),setProject:e=>{c=e,o===`info`&&M()},destroy:()=>{d&&clearTimeout(d),h.remove()}}},Wn=800,Gn=3e3,Kn=8e3,qn=6e3,Jn=`фон`,Yn=new Set,Xn=!1,Zn=-1,Qn=0,$n=0,er=0,tr=!1,nr=()=>document.hidden===!0||document.webkitHidden===!0||document.mozHidden===!0||document.msHidden===!0,rr=()=>window.XR8!==void 0&&typeof XR8.isInitialized==`function`&&XR8.isInitialized(),ir=()=>{let e=document.querySelectorAll(`video`);return e.length>0?e[e.length-1]:null},ar=e=>{let t=e.srcObject;if(!t||typeof t.getVideoTracks!=`function`)return!0;let n=t.getVideoTracks();return n.length===0||n.some(e=>e.readyState===`live`)},or=(e=Jn)=>{Yn.add(e),rr()&&(XR8.isPaused()&&!tr||(XR8.pause(),tr=!1,console.log(`[AR] Пауза AR: ${e}`)))},sr=e=>{if(e&&Yn.delete(e),!(!rr()||nr()||Yn.size>0)){if(!XR8.isPaused()){tr=!1;return}if(tr){if(Date.now()-er<Kn)return;XR8.pause(),tr=!1}tr=!0,er=Date.now(),Qn=Date.now(),XR8.resume(),console.log(`[AR] Возобновляю AR${e?`: ${e}`:``}`)}},cr=e=>{let t=Date.now();t-$n<qn||($n=t,console.warn(`[AR] Перезапускаю камеру: ${e}`),(!XR8.isPaused()||tr)&&XR8.pause(),tr=!1,sr())},lr=()=>{if(!rr()||(!nr()&&Yn.has(`фон`)&&Yn.delete(Jn),nr())||Yn.size>0)return;let e=Date.now();if(XR8.isPaused()){tr?e-er>=Kn&&cr(`возобновление зависло`):sr();return}tr=!1;let t=ir();if(!(!t||!t.srcObject)){if(!ar(t)){cr(`треки камеры завершены`);return}if(t.paused&&t.play().catch(()=>{}),t.readyState>=2&&!t.paused&&t.currentTime!==Zn){Zn=t.currentTime,Qn=e;return}e-Qn>=Gn&&cr(`поток кадров остановился`)}},ur=()=>{if(Xn)return;Xn=!0;let e=`onvisibilitychange`in document?`visibilitychange`:`webkitvisibilitychange`;document.addEventListener(e,()=>{nr()?or(Jn):sr(Jn)}),window.addEventListener(`pagehide`,()=>or(Jn)),window.addEventListener(`pageshow`,()=>sr(Jn)),nr()&&or(Jn),Qn=Date.now(),window.setInterval(lr,Wn)},dr=1.75,fr=1.2,pr=176,mr=480,hr=new A(0,1,0),gr=(e,t,n,r,i,a)=>{let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.arcTo(t+r,n,t+r,n+o,o),e.lineTo(t+r,n+i-o),e.arcTo(t+r,n+i,t+r-o,n+i,o),e.lineTo(t+o,n+i),e.arcTo(t,n+i,t,n+i-o,o),e.lineTo(t,n+o),e.arcTo(t,n,t+o,n,o),e.closePath()},_r=()=>{let e=document.createElement(`canvas`);e.width=pr,e.height=mr;let t=e.getContext(`2d`);if(t){let n=e.height/dr,r=e.width/2,i=t=>e.height-t*n,a=`rgba(255, 255, 255, 0.92)`;t.lineWidth=5,t.strokeStyle=`rgba(20, 20, 20, 0.55)`,t.fillStyle=a,t.beginPath(),t.ellipse(r,e.height-4,.28*n,.045*n,0,0,Math.PI*2),t.fillStyle=`rgba(0, 0, 0, 0.22)`,t.fill(),t.fillStyle=a;let o=e=>{e(),t.fill(),t.stroke()},s=.075;o(()=>gr(t,r-.105*n-s*n,i(.98),s*2*n,.94*n,.05*n)),o(()=>gr(t,r+.105*n-s*n,i(.98),s*2*n,.94*n,.05*n));let c=.055;o(()=>gr(t,r-.245*n-c*n,i(1.42),c*2*n,.7*n,.055*n)),o(()=>gr(t,r+.245*n-c*n,i(1.42),c*2*n,.7*n,.055*n)),o(()=>gr(t,r-.2*n,i(1.47),.4*n,.57*n,.07*n)),o(()=>gr(t,r-.045*n,i(1.5),.09*n,.09*n,.02*n)),o(()=>{t.beginPath(),t.ellipse(r,i(1.63),.115*n,.13*n,0,0,Math.PI*2)})}let n=new ie(e);return n.colorSpace=g,n.anisotropy=4,n},vr=({scene:e})=>{let t=_r(),n=new oe({map:t,transparent:!0,alphaTest:.05,toneMapped:!1,side:2,depthWrite:!0}),r=new h(pr/mr*dr,dr),i=new p(r,n);i.name=`site-reference-figure`,i.frustumCulled=!1,i.visible=!1,i.renderOrder=1,e.add(i);let a=new A,o=0,s=1,c=1,l=1,u=!1,d=new A,f=new A,m=new A;return{object3D:i,place(e){a.copy(e.point),o=Number.isFinite(e.yaw)?e.yaw:0,s=Number.isFinite(e.worldPerMeter)&&e.worldPerMeter>0?e.worldPerMeter:1,c=Math.max(.1,Number(e.width)||1),l=Math.max(.1,Number(e.depth)||1),u=!0,i.scale.setScalar(s),i.visible=!0},setVisible(e){i.visible=!!e&&u},update:e=>{if(!i.visible)return;if(!u){i.visible=!1;return}let t=null,n=1/0,r=Math.cos(o),p=Math.sin(o);for(let i of[-1,1])for(let o of[-1,1]){let u=i*c/2,m=o*l/2;d.set(u*r+m*p,0,-u*p+m*r),f.copy(a).addScaledVector(d,s);let h=f.distanceToSquared(e.position);h<n&&(n=h,t=(t??new A).copy(f))}if(!t)return;m.copy(t).sub(a),m.y=0,m.lengthSq()>1e-6&&t.addScaledVector(m.normalize(),fr*s),t.y=a.y+dr/2*s,i.position.copy(t);let h=e.position.x-t.x,g=e.position.z-t.z;i.quaternion.setFromAxisAngle(hr,Math.atan2(h,g))},destroy(){e.remove(i),r.dispose(),n.dispose(),t.dispose()}}};Math.PI*.9,[`.site-panel`,`.site-chip`,`.app-ui`,`.sun-menu`,`.info-menu`,`.project-sheet`,`.model-menu`,`.pin-hint`,`.pin-demo`,`.pin-facades`,`.ar-scanner`,`.model-loader`].join(`, `);var yr=.35,br=(e,t=yr)=>{let n=[],r=new Set;e.traverse(e=>{let t=e;t.isMesh&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>{!e||r.has(e)||(r.add(e),n.push({material:e,transparent:e.transparent,opacity:e.opacity,depthWrite:e.depthWrite}))})});let i=!1,a=Number.isFinite(t)?s.clamp(t,0,1):yr,o=()=>{n.forEach(e=>{let{material:t}=e;t.transparent=i?!0:e.transparent,t.opacity=i?a:e.opacity,t.depthWrite=!i&&e.depthWrite,t.needsUpdate=!0})};return{setGhost(e){e!==i&&(i=e,o())},setOpacity(e){a!==e&&(a=s.clamp(e,0,1),i&&o())},isGhost:()=>i}},xr=1.75,Sr=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Cr=e=>typeof e==`number`&&Number.isFinite(e)?e:null,wr=e=>{if(!Sr(e))return{libraries:[],items:[]};let t=[],n=new Set;Array.isArray(e.libraries)&&e.libraries.forEach(e=>{if(!Sr(e))return;let r=typeof e.id==`string`?e.id.trim():``;if(!r||n.has(r))return;n.add(r);let i=typeof e.label==`string`&&e.label.trim()?e.label.trim():r;t.push({id:r,label:i})});let r=[],i=new Set;return Array.isArray(e.items)&&e.items.forEach(e=>{if(!Sr(e))return;let t=typeof e.id==`string`?e.id:``,a=typeof e.library==`string`?e.library.trim():``,o=typeof e.url==`string`?e.url:``;if(!t||!o||!a||!n.has(a)||i.has(t))return;i.add(t);let s=typeof e.label==`string`&&e.label.trim()?e.label.trim():t,c=typeof e.thumbnail==`string`&&e.thumbnail?e.thumbnail:null,l=Array.isArray(e.footprint)?e.footprint:[],u=Math.max(0,Cr(l[0])??0),d=Math.max(0,Cr(l[1])??0),f=Math.max(0,Cr(e.height)??0);r.push({id:t,library:a,label:s,url:o,thumbnail:c,footprint:[u,d],height:f,facades:Tr(e.facades)??void 0})}),{libraries:t,items:r}},Tr=e=>{if(!Sr(e)||!Array.isArray(e.variants))return null;let t=[],n=new Set;for(let r of e.variants){if(!Sr(r))return null;let e=typeof r.id==`string`?r.id.trim():``,i=typeof r.label==`string`&&r.label.trim()?r.label.trim():e;if(!e||n.has(e)||!Array.isArray(r.nodes)||r.nodes.length===0)return null;let a=r.nodes.filter(e=>typeof e==`string`&&!!e);if(a.length!==r.nodes.length)return null;n.add(e),t.push({id:e,label:i,nodes:a})}return t.length<2?null:{defaultId:typeof e.defaultId==`string`&&n.has(e.defaultId)?e.defaultId:void 0,variants:t,hiddenNodes:Array.isArray(e.hiddenNodes)?e.hiddenNodes.filter(e=>typeof e==`string`&&!!e):void 0}},Er=e=>[...e.libraries].sort((e,t)=>e.label.localeCompare(t.label,`ru`)),Dr=(e,t)=>t?e.items.filter(e=>e.library===t).sort((e,t)=>e.label.localeCompare(t.label,`ru`)):[],Or=(e,t)=>t&&e.libraries.find(e=>e.id===t)||null,kr=e=>{let t=e.startsWith(`?`)?e.slice(1):e;if(!t)return null;let n=new URLSearchParams(t),r=(n.get(`library`)||``).trim();return r?{library:r,item:(n.get(`item`)||``).trim()||null}:null},Ar=(e,t)=>{let n=new URLSearchParams({library:e});return t&&n.set(`item`,t),`?${n.toString()}`},jr=e=>{let t=wr(e);return{libraries:Er(t),itemsOf:e=>Dr(t,e),get:e=>Or(t,e),has:e=>Or(t,e)!==null,query:(e,t)=>Ar(e,t)}},Mr=(e,t,n)=>!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||Math.abs(t)>.85?null:Math.atan2(e,n),Nr=(e,t,n,r=0)=>({x:e.x+Math.sin(t)*n,y:r,z:e.z+Math.cos(t)*n}),Pr=(e,t)=>{let n=t.x-e.x,r=t.z-e.z;return Math.hypot(n,r)>1e-4?Math.atan2(n,r):0},Fr=(e,t,n)=>Math.min(n,Math.max(t,e)),Ir=(e,t,n)=>Math.max(1,Math.hypot(Math.max(0,e),Math.max(0,t))/2+n),Lr=(e,t,n)=>{let r=t.x-e.x,i=t.z-e.z,a=Math.cos(n),o=Math.sin(n);return{x:e.x+r*a+i*o,z:e.z+-r*o+i*a}},Rr=(e,t,n,r,i)=>{let a=t.x-e.x,o=t.z-e.z,s=Math.hypot(a,o),c=Fr(s*n,r,i);if(s<=1e-4)return{x:t.x,z:t.z};let l=c/s;return{x:e.x+a*l,z:e.z+o*l}},zr=(e,t)=>{let n=e.direction;if(!n||Math.abs(n.y)<.001)return null;let r=(t-e.origin.y)/n.y;return!Number.isFinite(r)||r<=0?null:{x:e.origin.x+n.x*r,z:e.origin.z+n.z*r}},Br=(e,t)=>{if(!e||e.length===0)return null;let n=null,r=1/0;for(let i of e){let e=i?.position;if(!e||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)||Number.isFinite(i.distance)&&i.distance>t)continue;let a=Number.isFinite(i.distance)?i.distance:1/0;(!n||a<r)&&(n={x:e.x,y:e.y,z:e.z},r=a)}return n},Vr=(e,t=xr)=>!Number.isFinite(e)||e<=0?1:Math.min(1,(Number.isFinite(t)&&t>0?t:xr)/e),Hr=2,Ur=60,Wr=.1,Gr=20,Kr=15,qr=1,Jr=1.5,Yr=15,Xr=.02,Zr=300,Qr=12,$r=Math.PI*.9,ei=2,ti=.95,ni=4,ri=.05,ii=1.1,ai=new A(0,1,0),oi=new o().setFromAxisAngle(new A(1,0,0),-Math.PI/2),si=[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]],ci=(e,t=2)=>e.toFixed(t).replace(`.`,`,`);function Q(e,t,n=``){let r=document.createElement(e);return r.className=t,n&&(r.textContent=n),r}function li(e){let t=document.createElement(`input`);return t.type=`range`,t.className=`lib-panel__slider`,t.min=String(e.min),t.max=String(e.max),t.step=e.step,t.setAttribute(`aria-label`,e.label),t}var ui=`
.lib-reticle {
    position: fixed; left: 50%; top: 50%;
    width: 44px; height: 44px; margin: -22px 0 0 -22px;
    z-index: 92; pointer-events: none; opacity: 0;
    transition: opacity 0.25s ease;
}
.lib-reticle.lib-reticle--visible { opacity: 1; }
.lib-reticle__ring {
    position: absolute; inset: 0;
    border: 1.5px solid rgba(255, 255, 255, 0.9);
    border-radius: 50%; box-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);
}
.lib-reticle__dot {
    position: absolute; left: 50%; top: 50%;
    width: 5px; height: 5px; margin: -2.5px 0 0 -2.5px;
    border-radius: 50%; background: var(--ui-accent);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85);
}
.lib-hint {
    position: fixed; left: 50%;
    top: calc(70px + env(safe-area-inset-top, 0px));
    transform: translate(-50%, -8px);
    z-index: 138; max-width: min(420px, 88vw);
    padding: 10px 16px; border-radius: 12px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow-soft); color: var(--ui-ink);
    font-family: var(--ui-font); font-size: 12.5px; font-weight: 500;
    line-height: 1.35; text-align: center; opacity: 0; pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
    user-select: none; -webkit-user-select: none;
}
.lib-hint.lib-hint--visible { opacity: 1; transform: translate(-50%, 0); }
.lib-panel {
    position: fixed; left: 50%;
    bottom: calc(120px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%) translateY(120%);
    z-index: 100; display: flex; flex-direction: column; gap: 12px;
    width: min(380px, 92vw); max-height: calc(100vh - 220px);
    overflow-y: auto; padding: 14px 16px 16px; box-sizing: border-box;
    border-radius: 20px; background: var(--ui-paper);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow); color: var(--ui-ink);
    font-family: var(--ui-font); font-size: 13px;
    opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    touch-action: pan-y; user-select: none; -webkit-user-select: none;
}
.lib-panel.lib-panel--visible {
    transform: translateX(-50%) translateY(0); opacity: 1; pointer-events: auto;
}
.lib-panel[hidden] { display: none; }
.lib-panel [hidden] { display: none !important; }
.lib-panel, .lib-panel * { -webkit-tap-highlight-color: transparent; }
.lib-panel__header {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.lib-panel__actions { display: flex; align-items: center; gap: 2px; }
.lib-panel__title {
    margin: 0; display: inline-flex; align-items: center; gap: 8px;
    font-size: 16px; font-weight: 700;
}
.lib-panel__title svg { width: 20px; height: 20px; display: block; }
.lib-panel__collapse {
    width: 36px; height: 36px; padding: 8px; border: 0; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: transparent; color: var(--ui-ink); cursor: pointer;
}
.lib-panel__collapse:active { background: var(--ui-chip); color: var(--ui-accent); }
.lib-panel__collapse svg { width: 20px; height: 20px; display: block; }
.lib-panel__row { display: flex; flex-direction: column; gap: 6px; }
.lib-panel__row--inline {
    display: flex; flex-direction: row; align-items: center;
    justify-content: space-between; gap: 10px;
}
.lib-panel__label { font-size: 12px; font-weight: 500; color: var(--ui-ink-soft); }
.lib-panel__value {
    font-size: 13px; font-weight: 600;
    font-variant-numeric: tabular-nums; white-space: nowrap;
}
.lib-panel__slider {
    -webkit-appearance: none; appearance: none;
    width: 100%; height: 4px; margin: 0; border-radius: 2px;
    background: rgba(20, 20, 20, 0.18); outline: none; touch-action: none;
}
.lib-panel__slider::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: 18px; height: 18px; border: 0; border-radius: 50%;
    background: var(--ui-accent);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3); cursor: pointer;
}
.lib-panel__slider::-moz-range-thumb {
    width: 18px; height: 18px; border: 0; border-radius: 50%;
    background: var(--ui-accent);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3); cursor: pointer;
}
.lib-panel__slider-row { display: flex; align-items: center; gap: 10px; }
.lib-panel select {
    width: 100%; min-height: 40px;
    border: 1px solid var(--ui-hairline); border-radius: 9px;
    padding: 8px 10px; background: var(--ui-paper-solid); color: var(--ui-ink);
    font: inherit; font-family: var(--ui-font);
}
.lib-toolbar { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.lib-btn {
    flex: 0 0 auto; min-width: 40px; min-height: 40px; padding: 0 12px;
    border: 0; border-radius: 10px; background: rgba(20, 20, 20, 0.07);
    color: var(--ui-ink); font: inherit; font-family: var(--ui-font);
    font-size: 13px; font-weight: 600; cursor: pointer; touch-action: manipulation;
}
.lib-btn:active { background: var(--ui-chip); color: var(--ui-accent); }
.lib-btn svg { width: 18px; height: 18px; display: block; }
.lib-btn--primary {
    min-height: 46px; margin-top: 2px;
    background: var(--ui-accent); color: #fff;
    font-size: 14px; letter-spacing: 0.4px; text-transform: uppercase;
}
.lib-btn--primary:active { background: var(--ui-accent-strong); color: #fff; }
.lib-panel__divider { height: 1px; background: var(--ui-hairline); margin: 2px 0; }
.lib-panel__meta {
    font-size: 12px; color: var(--ui-ink-soft);
    font-variant-numeric: tabular-nums; line-height: 1.45; white-space: pre-line;
}
.lib-panel__check {
    display: flex; align-items: center; gap: 10px; font-size: 13px; cursor: pointer;
}
.lib-panel__check input { width: 18px; height: 18px; accent-color: var(--ui-accent); }
.lib-chip {
    position: fixed; left: 50%;
    bottom: calc(120px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%) translateY(140%);
    z-index: 100; display: flex; align-items: center; gap: 8px;
    padding: 0 14px 0 8px; min-height: 44px;
    border: 0; border-radius: 999px; background: var(--ui-paper);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow); color: var(--ui-ink);
    font-family: var(--ui-font); font-size: 13px; font-weight: 600;
    cursor: pointer; opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    user-select: none; -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.lib-chip.lib-chip--visible {
    transform: translateX(-50%) translateY(0); opacity: 1; pointer-events: auto;
}
.lib-chip[hidden] { display: none; }
.lib-chip svg { width: 18px; height: 18px; display: block; flex: 0 0 auto; }
.lib-chip:active { color: var(--ui-accent); }
.lib-chip__meta {
    color: var(--ui-ink-soft); font-weight: 500;
    font-variant-numeric: tabular-nums; white-space: nowrap;
}
/* Стрелки смены фасада у выбранной модели — как в орбитальном просмотре
   (pin-mode.ts, .pin-facades): полупрозрачные кнопки у краёв экрана. */
.lib-facades {
    position: fixed;
    inset: 0;
    z-index: 105;
    pointer-events: none;
}
.lib-facades[hidden] { display: none; }
.lib-facades__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 52px;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    background: var(--ui-paper);
    color: var(--ui-ink);
    box-shadow: var(--ui-shadow-soft);
    pointer-events: auto;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.lib-facades__arrow:first-of-type { left: calc(12px + env(safe-area-inset-left, 0px)); }
.lib-facades__arrow:last-of-type { right: calc(12px + env(safe-area-inset-right, 0px)); }
.lib-facades__arrow:active { color: var(--ui-accent); }
.lib-facades__arrow:focus-visible { outline: 2px solid var(--ui-accent); outline-offset: 3px; }
.lib-facades__arrow svg { display: block; width: 100%; height: 100%; }
/* Подпись активного варианта — над верхним краем, по центру */
.lib-facades__badge {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-50% - 90px));
    padding: 6px 12px;
    border-radius: 10px;
    background: var(--ui-paper);
    box-shadow: var(--ui-shadow-soft);
    color: var(--ui-ink);
    font-family: var(--ui-font);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
    white-space: nowrap;
}
`,di=({scene:e,camera:n,loadEntry:r,createShadow:i,hitTest:d=null,onCountChange:f=null,onPlacementChange:h=null,onLibraryRequest:g=null,onScanRequest:_=null,resolveMarker:v=null,onMarkerItemMissing:y=null})=>{C(`library-mode`,ui);let w=[],T=null,E=ye(),D=xe(),O=new A,k=15,j=0,M=!1,N=new t;N.quaternion.setFromAxisAngle(new A(1,0,0),-Math.PI/2),e.add(N);let F=vr({scene:e}),re=new oe({color:12392994,transparent:!0,opacity:.9,side:2,toneMapped:!1}),ie=new c(.78,1,48),ae=new m(.08,20),L=new t,se=new p(ie,re);se.rotation.x=-Math.PI/2;let ce=new p(ae,re);ce.rotation.x=-Math.PI/2,L.add(se,ce),L.visible=!1,e.add(L);let le=new b,ue=new l({color:12392994,transparent:!0,opacity:ti,toneMapped:!1}),de=new u(le,ue);de.visible=!1,e.add(de);let fe=new b,pe=new l({color:12392994,transparent:!0,opacity:ti,toneMapped:!1}),me=new u(fe,pe);me.visible=!1,e.add(me);let he=Q(`div`,`lib-hint`);he.setAttribute(`role`,`status`),document.body.appendChild(he);let ge=null,R=(e,t=6e3)=>{he.textContent=e,he.classList.add(`lib-hint--visible`),clearTimeout(ge??void 0),t>0&&(ge=setTimeout(()=>he.classList.remove(`lib-hint--visible`),t))},_e=Q(`div`,`lib-reticle`);_e.setAttribute(`aria-hidden`,`true`),_e.innerHTML=`<span class="lib-reticle__ring"></span><span class="lib-reticle__dot"></span>`,document.body.appendChild(_e);let z=Q(`div`,`lib-panel`);z.setAttribute(`role`,`dialog`),z.setAttribute(`aria-label`,`Библиотека`),z.hidden=!0;let ve=Q(`div`,`lib-panel__header`),Ce=Q(`p`,`lib-panel__title`);Ce.innerHTML=S(`library`,{size:20})+`<span>Библиотека</span>`;let we=Q(`div`,`lib-panel__actions`),Te=Q(`button`,`lib-panel__collapse`);Te.type=`button`,Te.setAttribute(`aria-label`,`Сканировать QR-код библиотеки`),Te.title=`Сканировать QR`,Te.innerHTML=S(`qr_code`,{size:20});let B=Q(`button`,`lib-panel__collapse`);B.type=`button`,B.setAttribute(`aria-label`,`Свернуть панель библиотеки`),B.title=`Свернуть панель`,B.innerHTML=S(`chevron_down`,{size:20}),we.append(Te,B),ve.append(Ce,we),z.appendChild(ve);let Ee=Q(`div`,`lib-panel__row`);Ee.appendChild(Q(`label`,`lib-panel__label`,`Подборка`));let V=document.createElement(`select`);V.setAttribute(`aria-label`,`Библиотека`),Ee.appendChild(V),z.appendChild(Ee);let De=Q(`div`,`lib-panel__row`);De.appendChild(Q(`label`,`lib-panel__label`,`Модель`));let Oe=document.createElement(`select`);Oe.setAttribute(`aria-label`,`Модель для постановки`),De.appendChild(Oe),z.appendChild(De);let ke=Q(`div`,`lib-panel__row`),Ae=Q(`div`,`lib-panel__row--inline`);Ae.appendChild(Q(`span`,`lib-panel__label`,`Расстояние`));let je=Q(`span`,`lib-panel__value`);Ae.appendChild(je);let Me=li({min:Hr,max:Ur,step:`1`,label:`Расстояние до модели, метры`});ke.append(Ae,Me),z.appendChild(ke);let Ne=Q(`div`,`lib-panel__row`),Pe=Q(`div`,`lib-panel__row--inline`);Pe.appendChild(Q(`span`,`lib-panel__label`,`Размер`));let Fe=Q(`span`,`lib-panel__value`);Pe.appendChild(Fe);let Ie=Q(`div`,`lib-panel__slider-row`),H=li({min:Wr,max:Gr,step:`0.01`,label:`Размер модели`}),Le=Q(`button`,`lib-btn`,`Человек`);Le.type=`button`,Le.title=`Размер, при котором модель не выше человека (${ci(xr,2)} м)`,Ie.append(H,Le);let Re=Q(`div`,`lib-panel__meta`);Re.textContent=`По умолчанию — не выше человека (${ci(xr,2)} м). Дальше размер без ограничений`,Ne.append(Pe,Ie,Re),z.appendChild(Ne);let ze=Q(`div`,`lib-panel__row`),Be=Q(`div`,`lib-panel__row--inline`);Be.appendChild(Q(`span`,`lib-panel__label`,`Масштаб мира`));let Ve=Q(`span`,`lib-panel__value`);Be.appendChild(Ve);let He=Q(`div`,`lib-panel__slider-row`),Ue=li({min:.3,max:3,step:`0.01`,label:`Единиц мира на метр`}),We=Q(`button`,`lib-btn`,`1:1`);We.type=`button`,We.title=`Вернуть 1:1 — одна единица мира равна метру`,He.append(Ue,We),ze.append(Be,He),z.appendChild(ze);let Ge=Q(`label`,`lib-panel__check`),Ke=document.createElement(`input`);Ke.type=`checkbox`,Ge.append(Ke,document.createTextNode(`Фигурка человека ${ci(xr,2)} м — эталон масштаба`)),z.appendChild(Ge);let qe=Q(`div`,`lib-toolbar`),Je=fi(Q(`button`,`lib-btn`,`−`),`Уменьшить модель`),Ye=fi(Q(`button`,`lib-btn`,`+`),`Увеличить модель`),Xe=fi(Q(`button`,`lib-btn`,`−${Kr}°`),`Повернуть модель влево`),Ze=fi(Q(`button`,`lib-btn`,`+${Kr}°`),`Повернуть модель вправо`),Qe=fi(Q(`button`,`lib-btn`,`Уместить`),`Подогнать модель в кадр`),$e=fi(Q(`button`,`lib-btn`),`Дублировать модель`);$e.innerHTML=S(`copy`,{size:18});let et=fi(Q(`button`,`lib-btn`),`Удалить модель`);et.innerHTML=S(`trash`,{size:18}),qe.append(Je,Ye,Xe,Ze,Qe,$e,et),z.appendChild(qe),z.appendChild(Q(`div`,`lib-panel__divider`));let tt=Q(`div`,`lib-panel__meta`);z.appendChild(tt);let nt=Q(`button`,`lib-btn lib-btn--primary`,`Поставить`);nt.type=`button`,z.appendChild(nt),document.body.appendChild(z);let U=Q(`button`,`lib-chip`);U.type=`button`,U.hidden=!0,U.setAttribute(`aria-label`,`Развернуть панель библиотеки`),U.innerHTML=S(`library`,{size:18})+`<span>Библиотека</span><span class="lib-chip__meta"></span>`;let rt=U.querySelector(`.lib-chip__meta`);document.body.appendChild(U);let it=Q(`div`,`lib-facades`);it.setAttribute(`role`,`group`),it.setAttribute(`aria-label`,`Смена фасада`),it.hidden=!0;let at=Q(`span`,`lib-facades__badge`);it.appendChild(at);let ot=e=>{let t=Q(`button`,`lib-facades__arrow`);return t.type=`button`,t.setAttribute(`aria-label`,e<0?`Предыдущий фасад`:`Следующий фасад`),t.title=e<0?`Предыдущий фасад`:`Следующий фасад`,t.innerHTML=S(e<0?`chevron_left`:`chevron_right`,{size:24}),t.addEventListener(`click`,()=>Kt(e)),t},st=ot(-1),ct=ot(1);it.append(st,ct),document.body.appendChild(it);let W=`off`,lt=[],G=null,ut=1,dt=!1,ft=!1,pt=!1,K=()=>w.find(e=>e.item.id===T)||null,mt=()=>new A(n.position.x,j,n.position.z),ht=()=>{let e=new A(0,0,-1).applyQuaternion(n.quaternion);return Mr(e.x,e.y,e.z)},gt=()=>{let e=mt();return _t(e,O)},_t=(e,t)=>Pr({x:e.x,z:e.z},{x:t.x,z:t.z}),vt=()=>{let e=mt();return Math.hypot(O.x-e.x,O.z-e.z)/E},yt=(e,t)=>{if(t===null)return!1;let n=mt(),r=Nr({x:n.x,z:n.z},t,Fr(e,Hr,Ur)*E,j);return O.set(r.x,r.y,r.z),k=Fr(e,Hr,Ur),!0},bt=e=>{let t=mt(),n=Lr({x:t.x,z:t.z},{x:O.x,z:O.z},e);O.set(n.x,j,n.z)},xt=e=>{let t=mt(),n=Ir(1,1,qr)*E,r=Rr({x:t.x,z:t.z},{x:O.x,z:O.z},e,n,Ur*E);O.set(r.x,j,r.z),k=Math.hypot(O.x-t.x,O.z-t.z)/E},St=()=>{if(!d)return null;for(let[e,t]of[[.5,.8],[.5,.65],[.35,.8],[.65,.8]]){let n=[];try{n=d(e,t,[`FEATURE_POINT`])||[]}catch{n=[]}let r=Br(n,Yr);if(r)return r.y}return null},Ct=()=>{let e=St();e===null?(j=n.position.y-Jr*E,M=!1):(j=e,M=!0)},wt=e=>e.group.scale.x,Tt=(e,t)=>{let r=t?Mt(e):jt(e,wt(e)),i=null,a=1/0;for(let e of r){e.y+=pi;let t=e.distanceToSquared(n.position);t<a&&(a=t,i=e)}i&&e.corner.copy(i)},Et=e=>{let t=e.baseScale*e.scale*E;e.group.position.copy(e.center),e.group.quaternion.setFromAxisAngle(ai,e.yaw).multiply(oi),e.group.scale.setScalar(t),Tt(e,!1)},Dt=e=>{e.group.position.copy(e.pose.position),e.group.quaternion.copy(e.pose.rotation),e.group.scale.setScalar(e.pose.scale||1),e.group.updateMatrixWorld(!0),e.center.copy(e.group.position),Tt(e,!0)},Ot=e=>{let t=wt(e);P(e.lights,t>ri?t:0)},kt=e=>{w.forEach(t=>t.shadow.setOpacityScale(e))},At=e=>x(e),jt=(e,t)=>{let n=e.bbox,r=Math.cos(e.yaw),i=Math.sin(e.yaw);return si.map(([a,o])=>{let s=a*n.width*t,c=o*n.depth*t;return new A(e.center.x+s*r+c*i,e.center.y,e.center.z-s*i+c*r)})},Mt=e=>{let{width:t,depth:n}=e.bbox;return si.map(([r,i])=>{let a=new A(r*t,i*n,0);return e.group.localToWorld(a),a})},q=()=>{let e=K();if(!e||W===`off`){me.visible=!1;return}if(e.marker&&!e.bound){me.visible=!1,F.setVisible(!1);return}let t=(e.bound?Mt(e):jt(e,wt(e))).map(e=>{let t=e.clone();return t.y+=pi,t});fe.setFromPoints(t),me.visible=!0,F.place({point:e.corner,yaw:e.yaw,worldPerMeter:1,width:0,depth:0}),F.setVisible(D)},Nt=()=>{let e=G,t=e?Math.max(.1,e.footprint[0]):1,n=e?Math.max(.1,e.footprint[1]):1,r=Vr(e&&e.height||1)*ut*E,i=Math.cos(0),a=Math.sin(0),o=si.map(([e,o])=>{let s=e*t*r,c=o*n*r;return new A(O.x+s*i+c*a,O.y+pi,O.z-s*a+c*i)});le.setFromPoints(o),de.visible=!0,L.position.copy(O),L.position.y+=.02*E;let s=Fr(.04*vt()*E,.3,ni);L.scale.setScalar(s),L.visible=!0,F.place({point:O,yaw:0,worldPerMeter:1,width:t*r,depth:n*r}),F.setVisible(D)},Pt=async n=>{let a=await r(n),o=a.bbox,s=a.modelRoot.clone(!0),c=new t;c.add(s),e.add(c);let l=i();c.add(l.object3D),l.fit(o),l.setVisible(!0);let u=At(s),d=I(s,n.facades),f=Vr(o.height||1),p=v?v(n.id):null,m={item:n,group:c,root:s,entry:a,lights:u.length>0?u:a.lights,bbox:o,facades:d,scale:1,baseScale:f,yaw:0,center:new A(O.x,j,O.z),shadow:l,corner:new A(O.x,j,O.z),marker:p,ghost:null,bound:!1,pose:null,heldWorld:!1,freezeScale:1};p&&(m.ghost=br(s),m.ghost.setGhost(!0),l.setVisible(!1)),Et(m),Ot(m),w.push(m);let h=p?zt.get(p.marker):null;return h&&Vt(m,h),m},Ft=e=>{let t=e.parent;t?.remove(e);try{e.updateMatrixWorld(!0);let t=new ne().setFromObject(e);return{centerX:(t.min.x+t.max.x)/2,centerY:(t.min.y+t.max.y)/2,width:t.max.x-t.min.x,depth:t.max.y-t.min.y,height:t.max.z-t.min.z}}finally{t?.add(e),e.updateMatrixWorld(!0)}},It=(e,t)=>{e.ghost?.setGhost(t),e.shadow.setVisible(!t)},Lt=(e,t)=>{e.marker&&(e.pose=t,e.heldWorld=!1,ee(e.root,e.marker.anchor),e.bbox=Ft(e.root),e.shadow.fit(e.bbox),Dt(e),It(e,!1),e.bound=!0,Ot(e),q(),J(),h?.())},Rt=(e,{silent:t=!1}={})=>{!e.marker||!e.bound||(e.pose=null,e.bound=!1,e.heldWorld=!0,e.freezeScale=e.group.scale.x,e.bbox=Ft(e.root),e.center.copy(e.group.position),e.shadow.fit(e.bbox),It(e,!0),Ot(e),q(),J(),h?.(),t||R(`«${e.item.label}»: чертёж потерян — модель снова полупрозрачная`))},zt=new Map,Bt=(e,t)=>{zt.set(e,t);let n=!1,r=!1;w.forEach(i=>{if(i.marker?.marker===e){if(i.bound){i.pose=t,Dt(i),n=!0;return}!i.heldWorld&&!r&&(r=Vt(i,t),n=!0)}}),n&&(q(),h?.())},Vt=(e,t)=>e.bound?(e.pose=t,Dt(e),!1):w.find(t=>t!==e&&t.marker?.marker===e.marker?.marker&&t.bound)?!1:(Lt(e,t),!0),Ht=e=>w.some(t=>t.marker?.marker===e),Ut=e=>{w.forEach(t=>{t.marker?.marker===e&&t.bound&&Rt(t)})},Wt=e=>{T=e?e.item.id:null,J(),q(),Gt()},Gt=()=>{let e=K()?.facades??null,t=W===`placed`&&!!e&&e.count>1;it.hidden=!t,!(!t||!e)&&(at.textContent=e.getLabel())},Kt=e=>{let t=K();if(!t?.facades||t.facades.count<2)return;t.facades.step(e);let n=wt(t),r=new ne().setFromObject(t.root);!r.isEmpty()&&n>0&&(t.bbox={centerX:(r.min.x+r.max.x)/2,centerY:(r.min.y+r.max.y)/2,width:(r.max.x-r.min.x)/n,depth:(r.max.y-r.min.y)/n,height:(r.max.z-r.min.z)/n},t.shadow.fit(t.bbox)),q(),Gt(),J(),R(`Фасад: ${t.facades.getLabel()}`)},qt=t=>{let n=w.indexOf(t);n<0||(w.splice(n,1),e.remove(t.group),t.group.remove(t.root),t.root.traverse(e=>{let t=e;t.isMesh&&((Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e?.dispose()),t.geometry?.dispose())}),t.shadow.destroy(),T===t.item.id&&Wt(w[n]||w[n-1]||null),f?.(w.length),h?.())},Jt=()=>{if(W===`off`)return;dt&&rn(!1);let e=vt();Number.isFinite(e)&&e>0&&(k=Fr(e,Hr,Ur)),W=`placing`,yt(k,ht()??gt()),_e.classList.add(`lib-reticle--visible`),tn(),Nt(),Gt(),J(),R(`Наведите перекрестие на место установки и коснитесь экрана`)},Yt=()=>{de.visible=!1,L.visible=!1,_e.classList.remove(`lib-reticle--visible`),F.setVisible(!1)},Xt=async e=>{if(pt)return null;pt=!0;try{let t=await Pt(e);return t?(t.scale=ut,Et(t),Ot(t),W=`placed`,Yt(),Wt(t),tn(),f?.(w.length),h?.(),t):null}catch(e){return console.error(`[AR] Библиотека: не удалось загрузить модель`,e),R(`Не удалось загрузить модель — проверьте соединение`),null}finally{pt=!1}},Zt=async()=>{if(W!==`placing`||!G||pt)return;let e=v?v(G.id):null;if(e&&Ht(e.marker)){let t=w.find(t=>t.marker?.marker===e.marker);t&&Wt(t),R(`Модель этого чертежа уже на площадке — копии не ставятся`);return}let t=ht();if(t===null){R(`Наведите телефон вперёд: по вертикали вниз место не выбрать`);return}let n=St();if(n!==null&&(j=n,M=!0),!yt(k,t))return;let r=await Xt(G);r&&R(`Поставлено: ${r.item.label}. Один палец — перенести, два — размер`)},Qt=async(e,t)=>{let n=w.find(t=>t.marker?.marker===e);if(n)return Vt(n,t),q(),!0;let r=lt.find(t=>v?.(t.id)?.marker===e);if(!r)return!1;G=r,ut=1,Oe.value=r.id;let i=await Xt(r);return i?(Vt(i,t),q(),R(`«${i.item.label}» найден чертёж — модель на нём`),!0):!1},J=()=>{let e=K(),t=Math.max(1,Math.round(vt()));document.activeElement!==Me&&(Me.value=String(Fr(t,Hr,Ur))),je.textContent=`${t} м`;let n=e?e.bound?wt(e):e.heldWorld?e.freezeScale:e.scale:ut;document.activeElement!==H&&(H.value=String(Fr(n,Wr,Gr)));let r=e?e.bbox.height*wt(e):G?(G.height||0)*Vr(G.height||1)*ut*E:0;if(Fe.textContent=r>0?`${ci(r,2)} м`:`—`,document.activeElement!==Ue&&(Ue.value=String(Fr(E,.3,3))),Ve.textContent=`${Math.round(E*100)} %`,Ke.checked=D,qe.hidden=!e,e){let t=e.bound;H.disabled=t,Le.disabled=t,Je.disabled=t,Ye.disabled=t,Xe.disabled=t,Ze.disabled=t,Qe.disabled=t,$e.disabled=t||!!e.marker}$t(),en()},$t=()=>{let e=K(),t=[];if(e){let n=wt(e),r=e.bbox.height*n;t.push(`Модель: ${e.item.label}`),e.marker&&t.push(e.bound?`На чертеже: привязана, ведётся маркером`:`Призрак: ждёт чертёж, держится SLAM-ом`),e.facades&&e.facades.count>1&&t.push(`Фасад: ${e.facades.getLabel()} (${e.facades.getIndex()+1} из ${e.facades.count})`),t.push(`Габариты ${ci(e.bbox.width*n,1)} × ${ci(e.bbox.depth*n,1)} м, высота ${ci(r,1)} м (${ci(r/xr,1)}× роста)`)}t.push(`Моделей на площадке: ${w.length}`),e?.bound||t.push(M?`Уровень земли — по облаку точек`:`Уровень земли — по высоте телефона (${ci(Jr,1)} м)`),tt.textContent=t.join(`
`)},en=()=>{W!==`off`&&(rt.textContent=String(w.length),U.setAttribute(`aria-label`,`Развернуть панель библиотеки: моделей ${w.length}`))},tn=()=>{nt.textContent=W===`placing`?`Поставить`:`Переставить`},nn=e=>{if(ft=!!e&&W!==`off`,!ft){z.classList.remove(`lib-panel--visible`),z.hidden=!0,U.classList.remove(`lib-chip--visible`),U.hidden=!0;return}if(dt){z.classList.remove(`lib-panel--visible`),z.hidden=!0,U.hidden=!1,requestAnimationFrame(()=>{ft&&dt&&U.classList.add(`lib-chip--visible`)});return}U.classList.remove(`lib-chip--visible`),U.hidden=!0,z.hidden?(z.hidden=!1,requestAnimationFrame(()=>{ft&&W!==`off`&&!dt&&z.classList.add(`lib-panel--visible`)})):z.classList.add(`lib-panel--visible`)},rn=e=>{W!==`off`&&(dt=!!e,en(),nn(ft))},an=()=>{Oe.replaceChildren(),lt.slice().sort((e,t)=>e.label.localeCompare(t.label,`ru`)).forEach(e=>Oe.add(new Option(e.label,e.id))),G&&(Oe.value=G.id)},on=(e,t)=>{V.replaceChildren(),e.forEach(e=>V.add(new Option(e.label,e.id))),Ee.hidden=e.length<2,t&&(V.value=t)},sn=e=>{G=e,ut=1,Oe.value=e.id,W!==`off`&&Jt()},cn=[`.lib-panel`,`.lib-chip`,`.lib-facades`,`.app-ui`,`.sun-menu`,`.info-menu`,`.project-sheet`,`.model-menu`,`.pin-hint`,`.ar-scanner`,`.model-loader`].join(`, `),ln=e=>e instanceof Element&&(!!e.closest(cn)||!!e.closest(`input, select, textarea, button`)),un=()=>(document.querySelector(`canvas#camerafeed`)??document.body).getBoundingClientRect(),Y=new Map,X=null,Z=null,dn=!1,fn=()=>{let e=Array.from(Y.values());return Math.max(1,Math.hypot(e[1].x-e[0].x,e[1].y-e[0].y))},pn=new a,mn=new te,hn=(e,t)=>{let n=un();return mn.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height*2-1)),mn},gn=(e,t)=>(pn.setFromCamera(hn(e,t),n),zr({origin:{x:pn.ray.origin.x,y:pn.ray.origin.y,z:pn.ray.origin.z},direction:{x:pn.ray.direction.x,y:pn.ray.direction.y,z:pn.ray.direction.z}},j+Xr)),_n=(e,t,n)=>{let r=gn(t,n);return r?(e.center.set(r.x,j,r.z),Et(e),q(),!0):!1},vn=(e,t,r)=>{pn.setFromCamera(hn(e,t),n);let i=pn.ray.direction;if(Math.abs(i.y)<.001)return null;let a=(r-pn.ray.origin.y)/i.y;return!Number.isFinite(a)||a<=0?null:pn.ray.origin.clone().addScaledVector(i,a)},yn=(e,t,n)=>{if(!Z?.startCenter||!Z.startHit)return;let r=vn(t,n,Z.startHit.y);r&&(e.group.position.copy(Z.startCenter).add(r.sub(Z.startHit)),e.center.copy(e.group.position),Tt(e,e.heldWorld),q())},bn=e=>{if(W!==`off`&&!(e.pointerType===`mouse`&&e.button!==0)){if(Y.size===0){if(ln(e.target))return;X={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),moved:!1,multi:!1},Z={id:e.pointerId,x:e.clientX,y:e.clientY,active:!1,startScale:K()?.scale??1,span:1,startCenter:null,startHit:null}}else X&&(X.multi=!0,Z=null);if(Y.set(e.pointerId,{x:e.clientX,y:e.clientY}),Y.size===2){let t=K();if(t){let n=t.heldWorld;Z={id:e.pointerId,x:e.clientX,y:e.clientY,active:!0,startScale:n?t.freezeScale:t.scale,span:fn(),startCenter:null,startHit:null}}}}},xn=e=>{let t=K();if(!t||t.bound)return;if(!t.heldWorld){Nn(t=>{t.yaw+=e});return}let n=new A(0,1,0),r=t.group.position.clone();t.group.position.sub(r).applyAxisAngle(n,e).add(r),t.group.quaternion.premultiply(new o().setFromAxisAngle(n,e)),t.center.copy(t.group.position),Tt(t,!0),Ot(t),q(),J()},Sn=e=>{if(W===`off`||!Y.get(e.pointerId))return;let t={x:e.clientX,y:e.clientY};if(X&&X.id===e.pointerId&&Math.hypot(t.x-X.x,t.y-X.y)>Qr&&(X.moved=!0),Y.set(e.pointerId,t),Y.size>=2&&Z&&Z.active){let t=K();if(!t)return;let n=Z.span>0?fn()/Z.span:1;t.bound||(t.heldWorld?jn(t,Z.startScale*n):An(t,Z.startScale*n)),e.preventDefault();return}if(Y.size===1&&Z&&Z.id===e.pointerId){!Z.active&&X?.moved&&(Z.active=!0);let r=K(),i=Math.max(1,window.innerWidth),a=Math.max(1,window.innerHeight),o=(t.x-Z.x)/i,s=(t.y-Z.y)/a;if(Z.active&&W===`placed`&&r){if(r.bound){e.preventDefault();return}if(r.heldWorld){Z.startCenter||(Z.startCenter=r.group.position.clone(),Z.startHit=vn(t.x,t.y,r.group.position.y)),yn(r,t.x,t.y),Z.x=t.x,Z.y=t.y,e.preventDefault();return}if(!_n(r,t.x,t.y)){let e=_t(n.position,r.center)-o*$r,t=n.position,i=Fr(Math.hypot(r.center.x-t.x,r.center.z-t.z)*Math.exp(-s*ei),Hr*E,Ur*E);r.center.set(t.x+Math.sin(e)*i,j,t.z+Math.cos(e)*i),Et(r),q()}Z.x=t.x,Z.y=t.y,e.preventDefault()}else Z.active&&W===`placing`&&(dn=!0,bt(-o*$r),xt(Math.exp(-s*ei)),Nt(),Z.x=t.x,Z.y=t.y,e.preventDefault())}},Cn=(e,t)=>{pn.setFromCamera(hn(e,t),n);let r=null,i=1/0;for(let e of w){let t=pn.intersectObject(e.group,!0);t.length>0&&t[0].distance<i&&(i=t[0].distance,r=e)}r&&Wt(r)},wn=e=>{if(W===`off`||(Y.delete(e.pointerId),Y.size<2&&Z&&(Z.active=!1),Y.size===0&&(Z=null),dn=!1,!X||X.id!==e.pointerId))return;let t=X;if(X=null,e.type===`pointercancel`)return;let n=performance.now()-t.time;t.moved||t.multi||n>=Zr||(W===`placing`?Zt():W===`placed`&&Cn(t.x,t.y))},Tn=e=>{Y.has(e.pointerId)&&(Y.delete(e.pointerId),Y.size===0&&(Z=null),X&&X.id===e.pointerId&&(X=null))},En=!1,Dn=()=>{En||(En=!0,window.addEventListener(`pointerdown`,bn),window.addEventListener(`pointermove`,Sn,{passive:!1}),window.addEventListener(`pointerup`,wn),window.addEventListener(`pointercancel`,Tn))},On=()=>{En&&(En=!1,window.removeEventListener(`pointerdown`,bn),window.removeEventListener(`pointermove`,Sn),window.removeEventListener(`pointerup`,wn),window.removeEventListener(`pointercancel`,Tn))},kn=e=>Fr(e,Wr,Gr),An=(e,t)=>{e.bound||(e.scale=kn(t),Et(e),Ot(e),q(),J())},jn=(e,t)=>{e.bound||(e.freezeScale=kn(t),e.group.scale.setScalar(e.freezeScale),e.center.copy(e.group.position),Tt(e,!0),Ot(e),q(),J())},Mn=(e,t)=>{e.bound||(e.heldWorld?jn(e,t):An(e,t))},Nn=e=>{let t=K();!t||t.bound||(e(t),t.heldWorld?(t.center.copy(t.group.position),Tt(t,!0)):Et(t),Ot(t),q(),J())},Pn=()=>{w.forEach(e=>{e.bound?Dt(e):e.heldWorld?(e.group.scale.setScalar(e.freezeScale),e.center.copy(e.group.position),Tt(e,!0)):Et(e),Ot(e)}),q(),W===`placing`&&Nt(),J()};B.addEventListener(`click`,()=>rn(!0)),U.addEventListener(`click`,()=>rn(!1)),Te.addEventListener(`click`,()=>{_&&_()}),V.addEventListener(`change`,()=>{let e=V.value;e&&g&&g(e)}),Oe.addEventListener(`change`,()=>{let e=lt.find(e=>e.id===Oe.value);e&&sn(e)}),Me.addEventListener(`input`,()=>{W!==`off`&&(yt(Number(Me.value),gt()),W===`placing`&&Nt(),J())}),H.addEventListener(`input`,()=>{let e=Number(H.value),t=K();t?Mn(t,e):(ut=kn(e),W===`placing`&&Nt(),J())}),Le.addEventListener(`click`,()=>{let e=K();e?Mn(e,e.heldWorld?E:1):(ut=1,W===`placing`&&Nt(),J())}),Ue.addEventListener(`input`,()=>{E=Fr(Number(Ue.value)||E,.3,3),be(E),Pn()}),We.addEventListener(`click`,()=>{E=1,be(E),Pn()}),Ke.addEventListener(`change`,()=>{D=Ke.checked,Se(D),W===`placing`?Nt():q(),J()}),Je.addEventListener(`click`,()=>{let e=K();e&&Mn(e,(e.heldWorld?e.freezeScale:e.scale)/1.15)}),Ye.addEventListener(`click`,()=>{let e=K();e&&Mn(e,(e.heldWorld?e.freezeScale:e.scale)*1.15)}),Xe.addEventListener(`click`,()=>xn(-s.degToRad(Kr))),Ze.addEventListener(`click`,()=>xn(s.degToRad(Kr))),Qe.addEventListener(`click`,()=>{let e=K();if(!e||e.bound)return;let t=e.heldWorld?e.group.position:e.center,r=Math.hypot(t.x-n.position.x,t.z-n.position.z),i=Math.max(e.bbox.width,e.bbox.depth,e.bbox.height);if(r<=0||i<=0)return;let a=s.degToRad(n.fov*.5),o=Math.max(.5,r*Math.tan(a)*2*ii)/i;e.heldWorld?jn(e,o):An(e,o/(e.baseScale*E)),R(`Модель умещена в кадр`)}),$e.addEventListener(`click`,()=>{let e=K();!e||pt||(pt=!0,Pt(e.item).then(t=>{if(!t)return;t.scale=e.scale,t.baseScale=e.baseScale,t.yaw=e.yaw;let n=Math.max(e.bbox.width,e.bbox.depth)*wt(e)*1.2;t.center.copy(e.center).add(new A(Math.cos(e.yaw),0,-Math.sin(e.yaw)).multiplyScalar(n)),Et(t),Ot(t),Wt(t),f?.(w.length),h?.()}).finally(()=>{pt=!1}))}),et.addEventListener(`click`,()=>{let e=K();e&&qt(e)}),nt.addEventListener(`click`,()=>{W===`placing`?Zt():Jt()});let Fn=0,In=e=>{if(W===`off`)return;let t=Math.min(Number(e)||0,.05);if(W===`placing`){let e=ht();e===null?(L.visible=!1,de.visible=!1):dn||(yt(k,e),Nt())}if(F.update(n),w.length>0){let e=w[0];N.position.copy(e.center)}else W===`placing`&&N.position.copy(O);Fn+=t,Fn>=.3&&(Fn=0,en())},Ln=(e,t={})=>(lt=e,Number.isFinite(t.worldPerMeter)&&t.worldPerMeter>0&&(E=Fr(t.worldPerMeter,.3,3)),W=`placing`,dt=!1,Dn(),an(),G=lt[0]||null,ut=1,tn(),nn(!0),G?(Oe.value=G.id,Ct(),k=15,yt(k,ht()??0),_e.classList.add(`lib-reticle--visible`),Nt(),J(),R(`Наведите перекрестие на место установки и коснитесь экрана`),!0):(_e.classList.remove(`lib-reticle--visible`),R(`В этой библиотеке пока нет моделей`),J(),!1)),Rn=()=>{if(W!==`off`){for(W=`off`,On(),Yt(),z.classList.remove(`lib-panel--visible`),z.hidden=!0,U.classList.remove(`lib-chip--visible`),U.hidden=!0,it.hidden=!0,he.classList.remove(`lib-hint--visible`),clearTimeout(ge??void 0),Y.clear(),X=null,Z=null,dt=!1,ft=!1;w.length>0;)qt(w[w.length-1]);T=null,lt=[],G=null}},zn=e=>lt.some(t=>v?.(t.id)?.marker===e);return{enable:Ln,disable:Rn,update:In,isActive:()=>W!==`off`,isPlacing:()=>W===`placing`,setPanelVisible:nn,setCollapsed:rn,setLibraries:on,setShadowOpacityScale:kt,isCollapsed:()=>dt,getSunAnchor:()=>N,getCount:()=>w.length,getShadowMetrics:()=>{let e=0,t=0;return w.forEach(n=>{if(n.marker&&!n.bound)return;let r=wt(n);e=Math.max(e,n.shadow.radius*r),t=Math.max(t,n.bbox.height*r)}),w.length>0&&(e>0||t>0)?{radius:e,height:t}:null},setActiveItemById:e=>{let t=lt.find(t=>t.id===e);return t?(sn(t),!0):!1},notifyMarkerFound(e,t){Ht(e)||zn(e)?Qt(e,t):y&&y(e,t)},notifyMarkerUpdated(e,t){Bt(e,t)},notifyMarkerLost(e){Ut(e)},hasMarkerPlacement:Ht,hasMarkerItem:zn,getMarkerState:e=>{let t=w.find(t=>t.marker?.marker===e);return t?t.bound?`bound`:`ghost`:null},placeMarkerItem:Qt,hint:R,destroy(){Rn(),e.remove(N),e.remove(L),e.remove(de),e.remove(me),ie.dispose(),ae.dispose(),re.dispose(),le.dispose(),ue.dispose(),fe.dispose(),pe.dispose(),F.destroy(),_e.remove(),he.remove(),z.remove(),U.remove(),it.remove()}}};function fi(e,t){return e.type=`button`,e.setAttribute(`aria-label`,t),e}var pi=.01,mi=160,hi=640,gi=9e4,_i=`
.ar-scanner {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 96;
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    font-family: var(--ui-font);
}
.ar-scanner__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    opacity: 0;
    /* Скрытый оверлей не должен ловить касания: у переключателя ниже
       pointer-events: auto, а opacity: 0 сам по себе элемент кликабельным
       оставляет — невидимая кнопка перехватывала бы жесты вращения модели
       (как в app-ui.ts / model-menu.ts / info-menu.ts). */
    visibility: hidden;
    transform: translateY(14px);
    transition: opacity 0.45s ease, transform 0.45s ease, visibility 0s linear 0.45s;
}
.ar-scanner.ar-scanner--visible .ar-scanner__content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: opacity 0.45s ease, transform 0.45s ease;
}
.ar-scanner__frame {
    position: relative;
    /* Одна рамка на оба режима: прямоугольник одинакового размера. Скобки
       углов рисуются поверх и НЕ обрезаются — у рамки нет ни overflow:hidden,
       ни border-radius (маска срезала углы и портила вид). */
    width: min(74vw, 300px);
    height: min(58vw, 220px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.ar-scanner__corner {
    position: absolute;
    width: 36px;
    height: 36px;
    border: 2.5px solid rgba(255, 255, 255, 0.92);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
    z-index: 1;
}
.ar-scanner__corner--tl {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
}
.ar-scanner__corner--tr {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
}
.ar-scanner__corner--bl {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
}
.ar-scanner__corner--br {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
}
.ar-scanner__scanline {
    position: absolute;
    left: 12%;
    right: 12%;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #bd1a22 30%, #ff8b90 50%, #bd1a22 70%, transparent);
    box-shadow: 0 0 14px rgba(189, 26, 34, 0.85);
    animation: ar-scanner-sweep 2.8s ease-in-out infinite;
    z-index: 1;
}
/* Иконка-подсказка в центре рамки: кадрирование (чертёж) или QR-код */
.ar-scanner__fit {
    position: absolute;
    color: rgba(255, 255, 255, 0.85);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
    z-index: 1;
}
/* В QR-режиме линия сканирования не нужна — мешает читать код по центру */
.ar-scanner--qr .ar-scanner__scanline {
    display: none;
}
/* Переключатель «Чертёж / QR» — сразу под полем сканера */
.ar-scanner__switch {
    display: inline-flex;
    gap: 4px;
    padding: 4px;
    border-radius: 999px;
    background: var(--ui-paper);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--ui-shadow);
    pointer-events: auto;
}
.ar-scanner__mode {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 38px;
    padding: 0 16px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--ui-ink);
    font: inherit;
    font-family: var(--ui-font);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    -webkit-tap-highlight-color: transparent;
}
.ar-scanner__mode svg {
    width: 18px;
    height: 18px;
    display: block;
}
.ar-scanner__mode:active {
    background: var(--ui-chip);
}
.ar-scanner__mode--active {
    background: var(--ui-accent);
    color: #fff;
}
.ar-scanner__label {
    color: var(--ui-ink);
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
    max-width: min(420px, 86vw);
}
@keyframes ar-scanner-sweep {
    0%, 100% { top: 14%; }
    50% { top: 84%; }
}
@media (prefers-reduced-motion: reduce) {
    .ar-scanner__scanline {
        animation: none;
    }
}
`,vi={plan:`Наведите камеру на генплан`,qr:`Наведите камеру на QR-код библиотеки`},yi=({onLibrary:e,onModeChange:t=null,qrEnabled:n=!0})=>{C(`ar-scanner`,_i);let r=document.createElement(`div`);r.className=`ar-scanner`,r.setAttribute(`role`,`status`);let i=document.createElement(`div`);i.className=`ar-scanner__content`;let a=document.createElement(`canvas`);a.width=hi,a.height=hi;let o=a.getContext(`2d`,{willReadFrequently:!0}),s=document.createElement(`video`);s.muted=!0,s.playsInline=!0,s.setAttribute(`playsinline`,`true`);let c=document.createElement(`div`);c.className=`ar-scanner__frame`,[`tl`,`tr`,`bl`,`br`].forEach(e=>{let t=document.createElement(`span`);t.className=`ar-scanner__corner ar-scanner__corner--${e}`,c.appendChild(t)});let l=document.createElement(`div`);l.className=`ar-scanner__scanline`,c.appendChild(l);let u=document.createElement(`span`);u.className=`ar-scanner__fit`,c.appendChild(u);let d=e=>{u.innerHTML=e===`qr`?S(`qr_code`,{size:34}):S(`fit_image`,{size:40})};d(`plan`);let f=document.createElement(`div`);f.className=`ar-scanner__switch`,f.setAttribute(`role`,`tablist`),f.setAttribute(`aria-label`,`Что сканировать`);let p=new Map,m=(e,t,n)=>{let r=document.createElement(`button`);return r.type=`button`,r.className=`ar-scanner__mode`,r.dataset.mode=e,r.setAttribute(`role`,`tab`),r.innerHTML=S(t,{size:18})+`<span>${n}</span>`,r.addEventListener(`click`,()=>te(e)),f.appendChild(r),p.set(e,r),r};m(`plan`,`site`,`Чертёж`),m(`qr`,`qr_code`,`QR-код`),f.hidden=!n,n||(p.get(`qr`).hidden=!0);let h=document.createElement(`div`);h.className=`ar-scanner__label`,i.append(c,f,h),r.appendChild(i),document.body.appendChild(r);let g=`plan`,_=!1,v=null,y=null,b=null,x=null,w=!1,T=()=>_||g===`qr`,D=()=>{let e=T();r.classList.toggle(`ar-scanner--visible`,e),r.classList.toggle(`ar-scanner--qr`,g===`qr`),h.textContent=vi[g],d(g),p.forEach((e,t)=>{let n=t===g;e.classList.toggle(`ar-scanner__mode--active`,n),e.setAttribute(`aria-selected`,String(n))}),g===`qr`&&e?F():M()},O=()=>{t&&t(g)},k=()=>{let e=document.querySelectorAll(`video`);for(let t=e.length-1;t>=0;t--)if(e[t]!==s)return e[t];return null},A=()=>{let e=k();return e&&e.readyState>=2&&e.videoWidth>0?e:s.readyState>=2&&s.videoWidth>0?s:null},ee=t=>{if(w)return;let n=null;try{n=kr(new URL(t,location.href).search)}catch{n=kr(t)}if(!n){h.textContent=`Это не QR библиотеки. Наведите на QR-код из портала`;return}w=!0,h.textContent=`Библиотека найдена`,g=`plan`,_=!1,D(),e(n.library,n.item),O(),w=!1},j=()=>{if(!o||!v||g!==`qr`||!T())return;let e=A();if(!e)return;let t=Math.min(e.videoWidth,e.videoHeight),n=(e.videoWidth-t)/2,r=(e.videoHeight-t)/2;o.drawImage(e,n,r,t,t,0,0,hi,hi);let i=o.getImageData(0,0,hi,hi),a=v(i.data,i.width,i.height,{inversionAttempts:`dontInvert`});a?.data&&ee(a.data)},M=()=>{y&&clearInterval(y),y=null,b&&clearTimeout(b),b=null,x&&=(x.getTracks().forEach(e=>e.stop()),null),s.srcObject=null},P=!1,F=async()=>{if(!(P||y)){P=!0,w=!1;try{if(!v){let e=await N(()=>import(`./jsQR-BcqNJPtq.js`).then(e=>E(e.default)),__vite__mapDeps([0,1,2]));v=e.default||e}if(g!==`qr`||!T())return;let e=k();if(!e||e.readyState<2)try{x=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`}}),s.srcObject=x,await s.play().catch(()=>{})}catch(e){console.error(`[QR] камера недоступна`,e),h.textContent=`Нет доступа к камере`;return}if(g!==`qr`||!T())return;y=setInterval(j,mi),j(),b=setTimeout(()=>{g===`qr`&&te(`plan`)},gi)}catch(e){console.error(`[QR] декодер не загрузился`,e),h.textContent=`Не удалось загрузить декодер QR. Обновите страницу`}finally{P=!1}}},te=e=>{e!==g&&(g=e,e===`qr`&&(_=!0),D(),O())},I=e=>{e.key===`Escape`&&g===`qr`&&te(`plan`)};return window.addEventListener(`keydown`,I),D(),{element:r,show(){_=!0,D()},hide(){_=!1,D()},setMode:te,getMode:()=>g,isVisible:T,openQr(){let e=g!==`qr`;g=`qr`,_=!0,D(),e&&O()},destroy(){M(),window.removeEventListener(`keydown`,I),r.remove()}}},bi=1e3/15,xi=8e3,Si=`Общий экран доступен в локальной сети`,Ci=class extends Error{status;constructor(e){super(`Cast request ${e}`),this.status=e}},wi=({getFrame:e,onStatusChange:t})=>{let n={available:!1,connected:!1,code:null,screenUrl:null,message:Si},r=null,i=0,a=!1,o=null,s=null,c=null,l=null,u=null,d=1/0,f=``,p=``,m=null,h=-1/0,g=-1/0,_=0,v=0,y=0,b=e=>{if(a)return;let r={...n,...e};JSON.stringify(r)!==JSON.stringify(n)&&(n=r,t?.({...n}))},x=async(e,t,n,r,i=!1)=>{let a=setTimeout(()=>n.abort(),r);try{let r=await fetch(e,{...t,signal:n.signal,cache:`no-store`});if(!r.ok)throw new Ci(r.status);return i?await r.json():void 0}finally{clearTimeout(a)}},S=()=>{c?.abort(),c=null,l&&clearTimeout(l),u&&clearTimeout(u),l=null,u=null,d=1/0,m=null,f=``,p=``,h=-1/0,g=-1/0,v=0,y=0},C=e=>{if(!r||a)return;let t=performance.now()+Math.max(0,e);u&&d<=t||(u&&clearTimeout(u),d=t,u=setTimeout(()=>{u=null,d=1/0,w()},Math.max(0,t-performance.now())))},w=async()=>{if(!r||c||a)return;let e=performance.now();if(!m&&f&&e-_>=xi&&(m=f),!m){C(Math.max(0,xi-(e-_)));return}let t=Math.max(g+bi,v)-e;if(t>0){C(t);return}let n=r,o=i,s=m;m=null;let l=new AbortController;c=l,g=e;try{if(await x(`${F}rooms/${encodeURIComponent(n.id)}/state`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${n.producerToken}`},body:s},l,4e3),o!==i||a)return;p=s,_=performance.now(),v=0,y=0,b({message:`Подключено к экрану · ${n.code}`})}catch(e){if(o!==i||a)return;if(e instanceof Ci&&[401,403,404,410].includes(e.status)){r=null,S(),b({connected:!1,code:null,message:`Экран недоступен. Введите код заново.`});return}y+=1,v=performance.now()+Math.min(4e3,250*2**Math.min(y-1,4)),m=f||s,b({message:`Связь прервана. Подключаюсь снова…`})}finally{c===l&&(c=null),o===i&&r&&!a&&(m=y===0?f===p?null:f:f||m,C(m?Math.max(0,v-performance.now()):xi))}},T=()=>{if(l=null,!r||a)return;h=performance.now();let t=JSON.stringify(e());t!==f&&(f=t,m=t,C(0))},E=async()=>{let e=new AbortController;o=e;try{let t=await x(`${F}bootstrap`,{},e,4e3,!0);if(a||o!==e)return;if(!t?.enabled||typeof t.screenUrl!=`string`)throw Error(`Casting unavailable`);let n=new URL(t.screenUrl,location.href);if(!t.enabled||![`http:`,`https:`].includes(n.protocol))throw Error(`Casting unavailable`);b({available:!0,screenUrl:n.href,message:`Откройте адрес на общем экране и введите его код.`})}catch{!a&&o===e&&b({available:!1,screenUrl:null,message:Si})}finally{o===e&&(o=null)}},D=async()=>{let e=r;if(i+=1,r=null,s?.abort(),s=null,S(),b({connected:!1,code:null,message:n.available?`Экран отключён.`:Si}),!e||a)return;let t=new AbortController;s=t;try{await x(`${F}rooms/${encodeURIComponent(e.id)}/disconnect`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e.producerToken}`},body:`{}`},t,4e3)}catch{}finally{s===t&&(s=null)}};return E(),{getStatus:()=>({...n}),connect:async e=>{if(a)return;if(!n.available){b({message:Si});return}let t=e.replace(/\s/g,``);if(!/^\d{6}$/.test(t)){b({message:`Введите шесть цифр с общего экрана.`});return}r&&await D();let o=++i;s?.abort(),S(),b({connected:!1,code:null,message:`Подключаюсь к экрану…`});let c=new AbortController;s=c;try{let e=await x(`${F}rooms/join`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({code:t})},c,5e3,!0);if(a||o!==i)return;if(typeof e?.id!=`string`||!e.id||typeof e.producerToken!=`string`||!e.producerToken||e.code!==t)throw Error(`Invalid room`);r=e,_=performance.now(),b({connected:!0,code:t,message:`Подключено к экрану · ${t}`}),T()}catch(e){if(a||o!==i)return;let t=e instanceof Ci&&[404,410].includes(e.status)?`Код не найден. Проверьте код на экране.`:e instanceof Ci&&e.status===409?`Этот экран уже подключён к другому телефону.`:`Не удалось подключиться. Проверьте сеть и код экрана.`;b({connected:!1,code:null,message:t})}finally{s===c&&(s=null)}},disconnect:D,update(){if(!r||a)return;let e=h+bi-performance.now();if(e<=0){l&&clearTimeout(l),T();return}l||=setTimeout(T,e)},destroy(){a=!0,i+=1,r=null,o?.abort(),s?.abort(),S()}}},Ti=300,Ei=5,Di=250,Oi=24,ki=`
.ar-debug {
    position: fixed;
    left: calc(8px + env(safe-area-inset-left, 0px));
    top: calc(8px + env(safe-area-inset-top, 0px));
    z-index: 176;
    pointer-events: none;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 11px;
    line-height: 1.45;
    color: #fff;
    background: rgba(0, 0, 0, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 4px;
    padding: 8px 10px;
    max-width: min(360px, 92vw);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.ar-debug__status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    margin-bottom: 4px;
}
.ar-debug__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex: 0 0 auto;
    background: #9aa0a6;
}
.ar-debug[data-slam="NORMAL"] .ar-debug__dot { background: #35c759; }
.ar-debug[data-slam="LIMITED"] .ar-debug__dot { background: #ff453a; }
.ar-debug__verdict {
    margin-bottom: 5px;
    color: #ffd60a;
}
.ar-debug__controls {
    margin: 0 0 6px;
    pointer-events: auto;
}
.ar-debug__toggle {
    display: block;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font: inherit;
    font-size: 11px;
    padding: 5px 8px;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
}
.ar-debug[data-marker="off"] .ar-debug__toggle {
    background: rgba(255, 69, 58, 0.3);
    border-color: rgba(255, 69, 58, 0.65);
}
.ar-debug__body {
    margin: 0;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ar-debug__hide {
    position: absolute;
    top: 2px;
    right: 4px;
    width: 22px;
    height: 22px;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    font: inherit;
    font-size: 15px;
    line-height: 1;
    cursor: pointer;
    pointer-events: auto;
}
`,Ai=e=>{let t=e;return new A(t?.x??0,t?.y??0,t?.z??0)},ji=e=>{let t=e;return new o(t?.x??0,t?.y??0,t?.z??0,t?.w??1)},$=(e,t=2)=>Number.isFinite(e)?e.toFixed(t):`—`,Mi=({getActiveAnchor:e,onSetMarkerTracking:t})=>{C(`debug-hud`,ki);let n=document.createElement(`div`);n.className=`ar-debug`,n.dataset.slam=`UNKNOWN`,n.dataset.marker=`on`;let i=document.createElement(`button`);i.type=`button`,i.className=`ar-debug__hide`,i.textContent=`×`,i.setAttribute(`aria-label`,`Скрыть отладку`);let a=document.createElement(`div`);a.className=`ar-debug__status`;let o=document.createElement(`span`);o.className=`ar-debug__dot`;let s=document.createElement(`span`);a.append(o,s);let c=document.createElement(`div`);c.className=`ar-debug__verdict`;let l=document.createElement(`div`);l.className=`ar-debug__controls`;let u=document.createElement(`button`);u.type=`button`,u.className=`ar-debug__toggle`,u.addEventListener(`click`,()=>{p=t(!p),d()}),l.append(u);let d=()=>{n.dataset.marker=p?`on`:`off`,u.textContent=p?`Трекинг: маркер + SLAM`:`Трекинг: только SLAM`},f=document.createElement(`pre`);f.className=`ar-debug__body`,n.append(i,a,c,l,f),document.body.append(n);let p=!0;d();let m=new Map,h=null,g=0,_=0;performance.now();let v=``,y=``,b=`—`,x=0,S=new A,w=new r,T=0,E=e=>{let t=m.get(e);return t||(t={stamps:[],lastUpdateAt:0,lastPosition:null,lastRotation:null,deltaPos:0,deltaRot:0,scale:1,foundAt:0},m.set(e,t)),t},D={value:!1},O=(t,r)=>{if(D.value)return;let i=performance.now();if(t>0){let e=1/t;g=g>0?g+(e-g)*.1:e}if(r&&(r.trackingStatus&&(v=String(r.trackingStatus)),r.trackingReason&&(y=String(r.trackingReason)),r.position&&(S=Ai(r.position)),r.rotation&&w.setFromQuaternion(ji(r.rotation),`YXZ`),r.lighting&&typeof r.lighting.exposure==`number`&&(b=$(r.lighting.exposure,2)),Array.isArray(r.worldPoints)&&(x=r.worldPoints.length),r.intrinsics&&r.intrinsics.length>=6)){let e=r.intrinsics[5];Number.isFinite(e)&&e>0&&(T=2*Math.atan(1/e)*180/Math.PI)}let a=180/Math.PI,o=`камера  ${$(S.x)} ${$(S.y)} ${$(S.z)} м\n        yaw ${$(w.y*a,1)}  pitch ${$(w.x*a,1)}  roll ${$(w.z*a,1)}°\n        FOV ${$(T,1)}°  FPS ${$(g,0)}`,l=`SLAM    ${v||`—`}${y?` (${y})`:``}  эксп ${b}`+(x?`  точек ${x}`:``),u=e(),d=u?.name??h,p=`маркер  —`,m=``;if(d){let e=E(d),t=e.lastUpdateAt?i-e.lastUpdateAt:1/0,n=0;if(e.stamps.length>=2){let t=e.stamps[e.stamps.length-1]-e.stamps[0];t>0&&(n=(e.stamps.length-1)/t*1e3)}let r=`—`;if(u){let e=u.anchorGroup.getWorldPosition(new A);r=$(S.distanceTo(e))}p=`маркер  ${d}\n        imageupdated ${Number.isFinite(t)?$(t,0):`—`} мс назад  ${$(n,1)} Гц\n        Δпоза ${$(e.deltaPos*1e3,0)} мм / ${$(e.deltaRot*a,2)}°  scale ${$(e.scale,3)}\n        дистанция до камеры ${r} м`,m=Number.isFinite(t)?t>Ti?`поза маркера заморожена — нет imageupdated ${$(t,0)} мс`:v===`LIMITED`?`SLAM LIMITED — телефон теряет трекинг (дрейф)`:n>0&&n<Ei?`редкие обновления позы (${$(n,1)} Гц)`:`трекинг в норме`:`маркер найден, но поза ещё не обновлялась`}i-_<Di||(_=i,n.dataset.slam=v||`UNKNOWN`,s.textContent=`AR DEBUG · ${v||`—`}`,c.textContent=m,f.textContent=`${o}\n${l}\n${p}`)},k=e=>{let t=E(e);t.foundAt=performance.now(),t.stamps=[],h=e},ee=(e,t,n,r)=>{let i=performance.now(),a=E(e),o=Ai(t),s=ji(n);a.lastPosition&&a.lastRotation?(a.deltaPos=a.lastPosition.distanceTo(o),a.deltaRot=a.lastRotation.angleTo(s)):(a.deltaPos=0,a.deltaRot=0),a.lastPosition=o,a.lastRotation=s,typeof r==`number`&&(a.scale=r),a.lastUpdateAt=i,a.stamps.push(i),a.stamps.length>Oi&&a.stamps.shift(),h=e},j=e=>{},M=(e,t)=>{v=e,t&&(y=t)},N=()=>{n.remove()},P=e=>{D.value=e??!D.value,n.style.display=D.value?`none`:``};return i.addEventListener(`click`,()=>P(!0)),Object.assign(window,{arDebug:{toggle:P,destroy:N,markers:m,markerTracking:e=>{p=t(e),d()}}}),{update:O,imageFound:k,imageUpdated:ee,imageLost:j,trackingStatus:M,toggle:P,destroy:N}},Ni=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Pi=e=>{let t=new Map;if(!Ni(e))return t;for(let[n,r]of Object.entries(e))if(!(!n||!Array.isArray(r)))for(let e of r){if(!Ni(e))continue;let r=typeof e.id==`string`?e.id:``;!r||t.has(r)||t.set(r,{marker:n,model:e})}return t},Fi=(e,t)=>{if(!t)return null;let n=e.get(t);return n?{marker:n.marker,anchor:n.model.anchor??{}}:null},Ii=.25,Li=2e3,Ri=({registry:e={},buildings:t={},environments:r={},library:i={libraries:[],items:[]},imageTargets:a=[],onReady:o}={})=>{let s,c,l,u=null,d=null,f=null,p=null,m=null,h=null,g=new URLSearchParams(location.search).get(`debug`)===`1`?Mi({getActiveAnchor:()=>{let e=T.getActive();return e?{name:e.name,anchorGroup:e.anchorGroup}:null},onSetMarkerTracking:e=>{if(e&&a.length===0)return!1;try{return XR8.XrController.configure({imageTargetData:e?a:[]}),console.log(`[AR] Трекинг маркеров: ${e?`маркер + SLAM`:`только SLAM`}`),e}catch(t){return console.warn(`[AR] Не удалось переключить трекинг маркеров:`,t),!e}}}):null,_=jr(i),v=Pi(e),y=null,b=!1,x=``,S=null,C=null,w=null,T=De({buildings:t,hooks:{hideScanHint:()=>C?.hide(),setBuilding:(e,t,n)=>{p=e,w=t||null,d?.appUi.setBuilding({name:e,version:t?.version}),m?.setProject(n),E(n)},setSunAnchor:e=>d?.sunRig.setAnchor(e),setEnvironment:e=>d?.environment.setBuilding(e),presentMenu:e=>f?.present(e),hideMenu:()=>f?.hide()}}),E=e=>{if(!d)return;let n=T.getActive(),r=e||[...T.handlers].find(([,e])=>e===n)?.[0]||d.infoMenu.getSelectedProjectId(),i=(r&&T.handlers.get(r)||null)?.currentModel||null;d.infoMenu.setContent(r?t[r]||null:w,{projectId:r,modelId:i?.id??null,facadeLabel:i?.label??null,fallbackName:r||p||``})},O=()=>{d?.appUi.setActive(y?.isActive()?`library`:f?.isSunOpen()?`sun`:null),d?.appUi.setHeaderActive(m?.getMode()===`settings`?`settings`:f?.isInfoOpen()?`info`:null),m?.getMode()||f?.isInfoOpen()||f?.isSunOpen()||y?.isActive()||T.getActive()||!m?.getPreferences().scanHint?C?.hide():C?.show()},k=()=>{let e=T.beginReturn();if(!e)return;let t=d?.pinMode;t?t.disable(()=>{T.endReturn(e),O(),console.log(`[AR] Привязка к плану включена`)}):T.endReturn(e)},A=()=>{let e=d?.pinMode;if(!e)return;if(T.getPinned()){k(),O();return}let t=T.getActive();if(!t||!t.currentModelId){e.hint(`Сначала наведите камеру на генплан`);return}if(T.clearReturning(),!e.enable(t)){e.hint(`Модель ещё загружается — попробуйте через секунду`);return}T.pin(t),O(),console.log(`[AR] Привязка к плану выключена: ${t.name}`)},ee=()=>{T.getPinned()&&k(),d?.sunMenu.setTime(840),O(),console.log(`[AR] Вид сброшен: привязка к плану включена, время 14:00`)},M=()=>{f&&(f.openSun(),O())},N=()=>{f&&(f.closeSun(),O())},P=()=>{f&&(f.isInfoOpen()?f.closeInfo():(E(),f.openInfo()),O())},F=()=>{d?.resize()},te=()=>{let e=T.getActive();d?.sunRig.setAnchor(e?.anchorGroup??null),e?.currentBbox?d?.sunRig.setShadowExtent(e.groundShadow.radius,e.currentBbox.height):d?.sunRig.setShadowExtent(5,0)},I=e=>{try{XR8.XrController.configure({enableWorldPoints:e})}catch(e){console.warn(`[AR] Не удалось переключить world points:`,e)}},ne=e=>{try{XR8.XrController.updateCameraProjectionMatrix({cam:{nearClipPlane:e?Ii:.01,farClipPlane:e?Li:1e3}})}catch(e){console.warn(`[AR] Не удалось переключить плоскости отсечения:`,e)}},re=()=>{if(!y)return;let e=y.getShadowMetrics();if(!e){d?.sunRig.setShadowExtent(5,0),x=``;return}let t=`${Math.round(e.radius*10)}|${Math.round(e.height*10)}`;t!==x&&(x=t,d?.sunRig.setShadowExtent(e.radius,e.height))},ie=e=>_.itemsOf(e),ae=e=>{for(let t of _.libraries)if(ie(t.id).some(t=>v.get(t.id)?.marker===e))return t.id;return null},oe=()=>{if(!y)return;let e=we().filter(e=>_.has(e));S&&!e.includes(S)&&e.push(S),y.setLibraries(e.map(e=>_.get(e)).filter(e=>e!==null),S)},L=(e,t=null)=>{if(!y||e===S)return;let n=_.get(e);if(!n)return;let r=ie(e),i=y.isActive();y.disable(),S=e,Te(e),i&&(T.setSuspended(!0),I(!0),ne(!0),y.enable(r),d?.sunRig.setAnchor(y.getSunAnchor()),x=``,re(),t&&y.placeMarkerItem(t.marker,t.pose).then(e=>{e&&d?.appUi.setBuilding({name:n.label,version:`Моделей: ${r.length}`})})),oe(),d?.appUi.setBuilding({name:n.label,version:`Моделей: ${r.length}`})},se=(e,t=null)=>{if(!y||b)return;let n=_.get(e);if(!n){d?.pinMode.hint(`Библиотека не найдена — проверьте QR-код`);return}let r=ie(e);b=!0,Promise.resolve().then(()=>{if(d){if(N(),f?.closeInfo(),f?.hide(),m?.close(),T.setSuspended(!0),I(!0),ne(!0),T.handlers.forEach(e=>{e.anchorGroup.visible=!1}),Te(e),S=e,!y.enable(r)){T.setSuspended(!1),I(!1),ne(!1),oe();return}d?.sunRig.setAnchor(y.getSunAnchor()),x=``,re(),oe(),d?.appUi.setBuilding({name:n.label,version:`Моделей: ${r.length}`}),t&&y.setActiveItemById(t),console.log(`[AR] Библиотека: ${n.label} (${r.length} моделей)`)}}).catch(e=>{console.error(`[AR] Библиотека: не удалось открыть`,e),d?.pinMode.hint(`Не удалось открыть библиотеку`),y?.disable(),T.setSuspended(!1),I(!1),ne(!1)}).finally(()=>{b=!1,O()})},ce=({silent:e=!1}={})=>{if(!y?.isActive())return;y.disable(),T.setSuspended(!1),I(!1),ne(!1),x=``,te(),d?.environment.setBuilding(T.getActive()?.name??null);let n=T.getActive();d?.appUi.setBuilding(n?{name:t[n.name]?.name||n.name,version:t[n.name]?.version}:{}),e||d?.pinMode.hint(`Библиотека закрыта`),S=null,O()},le=()=>{if(!y)return;if(y.isActive()){ce();return}let e=we().filter(e=>_.has(e)),t=e[e.length-1]||null;if(!t){C?C.openQr():d?.pinMode.hint(`Сканируйте QR-код библиотеки, чтобы открыть её`);return}se(t)},ue=e=>{if(e===`library`){le();return}if(e!==`site`){if(e===`settings`){if(!m)return;m.getMode()!==e&&(N(),f?.suspend()),m.open(e),d?.appUi.setHeaderActive(m.getMode());return}m?.close(),e===`sun`?f?.isSunOpen()?N():M():e===`reset`?ee():e===`info`&&P()}},de=(e,n)=>{n=n.map(r=>({...r,label:n.length===1&&t[e]?.name||r.label}));let r=V({scene:s,name:e,models:n,maxAnisotropy:l.capabilities.getMaxAnisotropy(),loader:d?.loader??null,onModelActivated:(e,t)=>{e.groundShadow&&t.bbox&&(e.groundShadow.fit(t.bbox),e.groundShadow.setVisible(!0),d&&d.sunRig.setShadowExtent(e.groundShadow.radius,t.bbox.height))},onMenuSelect:(e,t)=>{e.activate(t).then(()=>{e.currentModelId===t.id&&e.currentModelRoot&&!_e(e.name,t.id)&&d?.pinMode.hint(`Не удалось сохранить выбранный вариант на устройстве. При перезагрузке выберите его снова.`)})},onModelShown:e=>{d&&T.getPinned()===e&&d.pinMode.refresh(),e===T.getActive()&&E()}});return T.register(r),r},fe=()=>d?{...d.pinMode.getCastFrame(),sunMinutes:d.sunRig.getTime()}:{v:1,active:!1},pe=()=>{d=Vn({scene:s,camera:c,renderer:l,onUiAction:ue,onSunClose:()=>N(),onInfoClose:()=>{f&&(f.closeInfo(),O())},onPinRequest:()=>{let e=T.getActive();!e||!e.currentModelId||A()}}),d.environment.setConfig(r),f=Oe({sunMenu:d.sunMenu,infoMenu:d.infoMenu}),m=Un({buildings:t,registry:e,cast:h||void 0,anchorTools:void 0,onPreferenceChange:e=>{d?.setRenderQuality(e.quality),O()},onClose:()=>{f?.resume(),d?.appUi.setHeaderActive(null),O()}}),d.infoMenu.setProjects(t,e),y=di({scene:s,camera:c,loadEntry:e=>(d?.loader.show(),D({id:e.id,label:e.label,url:e.url,thumbnail:e.thumbnail,facades:e.facades},{maxAnisotropy:l.capabilities.getMaxAnisotropy(),onProgress:e=>d?.loader.setProgress(e),anchor:{scale:1,offset:[0,0]}}).finally(()=>d?.loader.hide())),createShadow:()=>j(),hitTest:(e,t,n)=>XR8.XrController.hitTest(e,t,n),onCountChange:e=>{let t=S?_.get(S)?.label:null;t&&d?.appUi.setBuilding({name:t,version:`Моделей: ${e}`})},onPlacementChange:()=>re(),onLibraryRequest:e=>L(e),resolveMarker:e=>Fi(v,e),onMarkerItemMissing:(e,t)=>{let n=ae(e);if(!n){d?.pinMode.hint(`Для этого чертежа нет модели в каталоге`);return}n!==S&&L(n,{marker:e,pose:t})},onScanRequest:()=>{y?.setPanelVisible(!1),C&&C.openQr()}}),C=yi({qrEnabled:!0,onLibrary:(e,t)=>{if(!_.has(e)){d?.pinMode.hint(`Библиотека из QR-кода не найдена в этом приложении`);return}y?.isActive()?L(e):se(e,t)},onModeChange:e=>{e===`plan`&&y?.isActive()&&y.setPanelVisible(!0),O()}}),m?.getPreferences().scanHint!==!1&&C.show();let n=kr(location.search);n&&(Te(n.library),setTimeout(()=>se(n.library,n.item),0)),Object.entries(e).forEach(([e,t])=>{de(e,t||[])})};return{name:`ar-scene`,onStart:()=>{({scene:s,camera:c,renderer:l}=XR8.Threejs.xrScene()),u=new n,h?.destroy(),h=wi({getFrame:fe,onStatusChange:()=>m?.refreshCast()}),pe(),XR8.XrController.updateCameraProjectionMatrix({origin:c.position,facing:c.quaternion}),d?.resize(),window.addEventListener(`resize`,F),window.addEventListener(`orientationchange`,F),o&&o(),d?.environment.preloadDefault()},onUpdate:e=>{if(!u)return;let t=u.getDelta();if(g?.update(t,e?.processCpuResult?.reality),d){d.sunRig.update(),d.environment.update(d.sunRig.getDayFactor());let e=d.sunRig.getGroundShadowScale();T.handlers.forEach(t=>{t.groundShadow.setOpacityScale(e)}),y?.setShadowOpacityScale(e),d.pinMode.update(t),y?.update(t)}let n=d?d.sunRig.getNightFactor():0;T.handlers.forEach(e=>e.update(t,n)),h?.update()},onDetach:()=>{h?.destroy(),C?.destroy(),y?.destroy()},listeners:[{event:`reality.imagefound`,process:e=>{let t=e.detail||e;if(g?.imageFound(t.name),y?.isActive()){y.notifyMarkerFound(t.name,{position:t.position,rotation:t.rotation,scale:t.scale});return}T.processFound(e)}},{event:`reality.imageupdated`,process:e=>{let t=e.detail||e;if(g?.imageUpdated(t.name,t.position,t.rotation,t.scale),y?.isActive()){y.notifyMarkerUpdated(t.name,{position:t.position,rotation:t.rotation,scale:t.scale});return}T.processUpdated(e)}},{event:`reality.imagelost`,process:e=>{let t=e.detail||e;if(g?.imageLost(t.name),y?.isActive()){y.notifyMarkerLost(t.name);return}T.processLost(e)}},{event:`reality.trackingstatus`,process:e=>{let t=e?.detail||e;t?.status&&g?.trackingStatus(t.status,t.reason)}}]}},zi=`boot-loader--error`,Bi=`boot-loader--hidden`,Vi=()=>document.getElementById(`boot-loader`),Hi=()=>Vi()?.querySelector(`.boot-loader__text`),Ui=()=>Vi()?.querySelector(`.boot-loader__continue`),Wi=()=>Vi()?.querySelector(`.boot-loader__retry`),Gi=null,Ki=()=>{let e=Vi();return e?(Gi||(Gi=document.createElement(`a`),Gi.className=`boot-loader__link`,Gi.target=`_blank`,Gi.rel=`noopener`,e.append(Gi)),Gi):null},qi=()=>{Gi&&(Gi.hidden=!0)},Ji=e=>{let t=Vi();if(!t)return;t.classList.remove(zi),qi();let n=Wi();n&&(n.hidden=!0);let r=Hi();r&&(r.textContent=e)},Yi=(e,t)=>{let n=Vi();if(!n)return;n.classList.add(zi);let r=Ui();r&&(r.hidden=!0);let i=Hi();i&&(i.textContent=e);let a=Wi();a&&(a.hidden=!1,a.onclick=()=>window.location.reload());let o=Ki();o&&(t?(o.href=t.href,o.textContent=t.text,o.hidden=!1):qi())},Xi=(e,t)=>{let n=Vi();if(!n){t&&t();return}n.classList.remove(zi),qi();let r=Hi();r&&(r.textContent=e);let i=Wi();i&&(i.hidden=!0);let a=Ui();if(!a){t&&t();return}a.hidden=!1,a.onclick=()=>{a.hidden=!0,t&&t()}},Zi=()=>{let e=Vi();!e||e.classList.contains(Bi)||(e.classList.add(Bi),window.setTimeout(()=>e.remove(),450))};(()=>{if(!(navigator.maxTouchPoints>0||`ontouchstart`in window))return;let e=e=>{e.cancelable&&e.preventDefault()};document.addEventListener(`gesturestart`,e,{passive:!1,capture:!0}),document.addEventListener(`gesturechange`,e,{passive:!1,capture:!0}),document.addEventListener(`gestureend`,e,{passive:!1,capture:!0}),`touchAction`in document.documentElement.style||document.addEventListener(`touchmove`,e=>{e.touches.length>1&&e.cancelable&&e.preventDefault()},{passive:!1,capture:!0})})(),window.THREE={...v,GLTFLoader:O};var Qi=`/AR-Buildings-build/`,$i=3e4,ea=45e3,ta=()=>typeof DeviceMotionEvent<`u`&&typeof DeviceMotionEvent.requestPermission==`function`,na={DENY_CAMERA:`Нет доступа к камере.
Разрешите доступ в настройках браузера и обновите страницу.`,NO_CAMERA:`Камера не найдена.
Проверьте устройство и обновите страницу.`},ra=()=>navigator.maxTouchPoints>0||`ontouchstart`in window,ia=null,aa=!1,oa=async()=>{if(!aa){aa=!0;try{let e=new AbortController,t=setTimeout(()=>e.abort(),2e3),n=await fetch(`${Qi}__cast/bootstrap`,{cache:`no-store`,signal:e.signal});if(clearTimeout(t),!n.ok||!ia||ca)return;let r=await n.json();if(!r?.enabled||typeof r.screenUrl!=`string`)return;Yi(ia,{href:r.screenUrl,text:`Открыть страницу общего экрана ↗`})}catch{aa=!1}}},sa=e=>{ia=e,Yi(e),ra()||oa()},ca=!1,la=null,ua=()=>{ca=!0,fa(),Zi(),ur()},da=()=>{fa(),la=setTimeout(()=>{ca||sa(`AR не запустился.
Проверьте доступ к камере и датчикам движения, затем обновите страницу.`)},ea)},fa=()=>{la&&clearTimeout(la),la=null},pa=e=>{da();try{XR8.run({canvas:e,allowedDevices:XR8.XrConfig.device().ANY})}catch(e){console.error(`[AR] Не удалось запустить AR-движок:`,e),fa(),sa(`Не удалось запустить AR.
Обновите страницу и попробуйте снова.`)}};Ji(`Загрузка AR-движка…`);var ma=e=>fetch(e,{cache:`no-cache`}).then(t=>{if(!t.ok)throw Error(`HTTP ${t.status} для ${e}`);return t.json()}),ha=async()=>{let e=await ma(`${Qi}config/models.json`),t=Object.keys(e);return{registry:e,targets:await Promise.all(t.map(e=>ma(`${Qi}image-targets/${e}.json`))),buildings:await ma(`${Qi}config/buildings.json`).catch(()=>({})),environments:await ma(`${Qi}config/environments.json`).catch(()=>({})),library:await ma(`${Qi}config/library.json`).catch(()=>({libraries:[],items:[]}))}},ga=async()=>{clearTimeout(_a);let e,t,n,r,i;try{Ji(`Загрузка маркеров…`),{registry:e,targets:t,buildings:n,environments:r,library:i}=await ha()}catch(e){console.error(`[AR] Ошибка загрузки конфигурации:`,e),Yi(`Не удалось загрузить конфигурацию маркеров.
Проверьте соединение и файлы config/models.json и image-targets/*.json`);return}t.length===0&&console.warn(`[AR] В конфигурации нет ни одного маркера`),XR8.XrController.configure({imageTargetData:t}),XR8.addCameraPipelineModule({name:`boot-loader-status`,onCameraStatusChange:({status:e,reason:t})=>{if(!ca){if(e===`failed`){fa(),sa(na[t??``]||`Не удалось запустить камеру.
Обновите страницу и попробуйте снова.`);return}da(),Ji(`Запуск камеры…`)}},onException:e=>{if(!ca){if(fa(),e&&e.type===`permission`){sa(`Нет доступа к датчикам движения.
Разрешите «Движение и ориентацию» в настройках браузера и обновите страницу.`);return}sa(`Не удалось запустить AR.
Проверьте доступ к камере и датчикам движения и обновите страницу.`)}}}),XR8.addCameraPipelineModules([XR8.GlTextureRenderer.pipelineModule(),XR8.Threejs.pipelineModule(),XR8.XrController.pipelineModule(),Ri({registry:e,buildings:n,environments:r,library:i,imageTargets:t,onReady:ua})]),document.body.insertAdjacentHTML(`beforeend`,`<canvas id="camerafeed"></canvas>`);let a=document.getElementById(`camerafeed`);if(ta()){Xi(`Нажмите «Продолжить» и разрешите доступ к датчикам движения и камере`,()=>{Ji(`Запуск камеры…`),pa(a)});return}Ji(`Запуск камеры…`),pa(a)},_a=setTimeout(()=>{Yi(`AR-движок не загрузился.
Проверьте соединение с интернетом и обновите страницу.`)},$i);window.XR8?ga():window.addEventListener(`xrloaded`,ga,{once:!0});