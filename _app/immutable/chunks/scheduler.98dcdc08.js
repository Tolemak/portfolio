function D(){}function C(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function Z(){return Object.create(null)}function q(t){t.forEach(P)}function $(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function et(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function nt(t){return Object.keys(t).length===0}function H(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function it(t,e,n){t.$$.on_destroy.push(H(e,n))}function ct(t,e,n,i){if(t){const c=N(t,e,n,i);return t[0](c)}}function N(t,e,n,i){return t[1]&&i?C(n.ctx.slice(),t[1](i(e))):n.ctx}function lt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(e.dirty.length,c.length);for(let s=0;s<l;s+=1)u[s]=e.dirty[s]|c[s];return u}return e.dirty|c}return e.dirty}function rt(t,e,n,i,c,u){if(c){const l=N(e,n,i,u);t.p(l,c)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ut(t){const e={};for(const n in t)e[n]=!0;return e}function ot(t){return t??""}let p=!1;function at(){p=!0}function ft(){p=!1}function B(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function L(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:B(1,c,T=>e[n[T]].claim_order,o))-1;i[r]=n[a]+1;const w=a+1;n[w]=r,c=Math.max(w,c)}const u=[],l=[];let s=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);s>=r;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);u.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<u.length&&l[r].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(l[r],a)}}function M(t,e){if(p){for(L(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){p&&!n?M(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function mt(){return v(" ")}function pt(){return v("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const I=["width","height"];function R(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&I.indexOf(i)===-1?t[i]=e[i]:A(t,i,e[i])}function U(t,e){Object.keys(e).forEach(n=>{W(t,n,e[n])})}function W(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:A(t,e,n)}function bt(t){return/-/.test(t)?U:R}function gt(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,c=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function O(t,e,n,i){return j(t,c=>c.nodeName===e,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];n[s.name]||u.push(s.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(e))}function vt(t,e,n){return O(t,e,n,z)}function Et(t,e,n){return O(t,e,n,F)}function J(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function wt(t){return J(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e){t.value=e??""}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function jt(t,e,n){t.classList.toggle(e,!!n)}function K(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ot(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const u=c.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(c)):u===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}function St(t,e){return new t(e)}let m;function y(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function Tt(t){E().$$.on_mount.push(t)}function Dt(t){E().$$.after_update.push(t)}function Ct(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=K(e,n,{cancelable:i});return c.slice().forEach(l=>{l.call(t,u)}),!u.defaultPrevented}return!0}}function Pt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],k=[];let _=[];const g=[],S=Promise.resolve();let x=!1;function Q(){x||(x=!0,S.then(X))}function qt(){return Q(),S}function V(t){_.push(t)}function Ht(t){g.push(t)}const b=new Set;let f=0;function X(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),Y(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function Y(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function Bt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Q as $,D as A,Pt as B,ct as C,rt as D,st as E,lt as F,et as G,F as H,Et as I,Ot as J,ut as K,C as L,bt as M,jt as N,$ as O,Nt as P,Ct as Q,Ht as R,Z as S,X as T,nt as U,V,Bt as W,m as X,y as Y,P as Z,d as _,mt as a,at as a0,ft as a1,Dt as b,wt as c,dt as d,pt as e,z as f,vt as g,xt as h,_t as i,A as j,At as k,v as l,J as m,kt as n,Tt as o,k as p,St as q,gt as r,tt as s,qt as t,ot as u,M as v,yt as w,ht as x,q as y,it as z};
