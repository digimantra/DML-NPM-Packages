const __vite__fileDeps=["./actions.stories-DRtYDCte.js","./jsx-runtime-DWbWqHZ-.js","./index-l2PZgWEW.js","./chunk-MZXVCX43-CM0pFb8Z.js","./v4-CQkTLCs1.js","./avatar.stories-53anggCv.js","./button.stories-D6i2zTYy.js","./index-B-T0PRdw.js","./button-Drs-W5Vt.js","./icons.stories-U0Aq5ezG.js","./icons-DuG-iMc8.js","./inputField.stories-CfcyNgK9.js","./notification.stories-DkjCXv20.js","./popup.stories-BA1fnFER.js","./table.stories-DcvKOoBI.js","./entry-preview-DyuSfUAi.js","./react-18-DAZJrOOF.js","./entry-preview-docs-DLxFCOnk.js","./_getPrototype-CJE51Znf.js","./index-DrFu-skq.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-DKkxphGd.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-C4J7x61r.js","./preview-B_l9vE4g.js","./preview-Cp_WszXL.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="modulepreload",R=function(_,s){return new URL(_,s).href},d={},t=function(s,c,m){let e=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,m),i in d)return;d[i]=!0;const a=i.endsWith(".css"),O=a?'[rel="stylesheet"]':"";if(!!m)for(let u=r.length-1;u>=0;u--){const l=r[u];if(l.href===i&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${O}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":f,a||(n.as="script",n.crossOrigin=""),n.href=i,E&&n.setAttribute("nonce",E),document.head.appendChild(n),a)return new Promise((u,l)=>{n.addEventListener("load",u),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,p=P({page:"preview"});T.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const v={"./src/components/actions/actions.stories.tsx":async()=>t(()=>import("./actions.stories-DRtYDCte.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/components/avatar/avatar.stories.tsx":async()=>t(()=>import("./avatar.stories-53anggCv.js"),__vite__mapDeps([5,1,2]),import.meta.url),"./src/components/button/button.stories.tsx":async()=>t(()=>import("./button.stories-D6i2zTYy.js"),__vite__mapDeps([6,1,2,3,4,7,8]),import.meta.url),"./src/components/icons/icons.stories.tsx":async()=>t(()=>import("./icons.stories-U0Aq5ezG.js"),__vite__mapDeps([9,1,2,10]),import.meta.url),"./src/components/inputFiled/inputField.stories.tsx":async()=>t(()=>import("./inputField.stories-CfcyNgK9.js"),__vite__mapDeps([11,1,2,7]),import.meta.url),"./src/components/notification/notification.stories.tsx":async()=>t(()=>import("./notification.stories-DkjCXv20.js"),__vite__mapDeps([12,1,2,10]),import.meta.url),"./src/components/popUp/popup.stories.tsx":async()=>t(()=>import("./popup.stories-BA1fnFER.js"),__vite__mapDeps([13,1,2,8,10]),import.meta.url),"./src/components/table/table.stories.tsx":async()=>t(()=>import("./table.stories-DcvKOoBI.js"),__vite__mapDeps([14,1,2,10]),import.meta.url)};async function L(_){return v[_]()}const{composeConfigs:A,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-DyuSfUAi.js"),__vite__mapDeps([15,2,16]),import.meta.url),t(()=>import("./entry-preview-docs-DLxFCOnk.js"),__vite__mapDeps([17,18,2,19]),import.meta.url),t(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([20,21]),import.meta.url),t(()=>import("./preview-DP_ZnzXe.js"),[],import.meta.url),t(()=>import("./preview-DKkxphGd.js"),__vite__mapDeps([22,4]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([23,19]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([24,19]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),t(()=>import("./preview-C4J7x61r.js"),__vite__mapDeps([25,7]),import.meta.url),t(()=>import("./preview-B_l9vE4g.js"),__vite__mapDeps([26,27]),import.meta.url)]);return A(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w(L,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};