import{n as f,s as p}from"./scheduler.7a274a43.js";const e=[];function d(n,l=f){let o;const i=new Set;function r(t){if(p(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(n))}function _(t,c=f){const s=[t,c];return i.add(s),i.size===1&&(o=l(r,b)||f),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:b,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1en92cf)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_1en92cf)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
