import {createBrandIntro} from './brand-intro.js?v=20261007ui-refresh'

// Keep the published application's boot-loader as the sole owner of startup,
// errors and the synchronous iOS Continue click. No XR8 API is intercepted.
const base=new URL('../',import.meta.url).href
const brand=createBrandIntro({base,showStartupStatus:false})
document.documentElement.dataset.spaceBrandPhase='intro'
brand.finished.then(()=>{document.documentElement.dataset.spaceBrandPhase='docked'})

const sync=()=>{
    const boot=document.getElementById('boot-loader')
    if(!boot){brand.ready();observer.disconnect();return}
    if(boot.classList.contains('boot-loader--error'))brand.dismiss()
}
const observer=new MutationObserver(sync)
const boot=document.getElementById('boot-loader')
if(boot)observer.observe(boot,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden']})
observer.observe(document.body,{childList:true})
sync()
