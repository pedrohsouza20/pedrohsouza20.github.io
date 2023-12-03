(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Q={},Ct=[],Se=()=>{},ys=()=>!1,_s=/^on[^a-z]/,Xn=e=>_s.test(e),Qr=e=>e.startsWith("onUpdate:"),se=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xs=Object.prototype.hasOwnProperty,U=(e,t)=>xs.call(e,t),M=Array.isArray,St=e=>Jn(e)==="[object Map]",qi=e=>Jn(e)==="[object Set]",$=e=>typeof e=="function",re=e=>typeof e=="string",Gn=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Vi=e=>(Z(e)||$(e))&&$(e.then)&&$(e.catch),Xi=Object.prototype.toString,Jn=e=>Xi.call(e),ws=e=>Jn(e).slice(8,-1),Gi=e=>Jn(e)==="[object Object]",ea=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ks=/-(\w)/g,Nt=Qn(e=>e.replace(ks,(t,n)=>n?n.toUpperCase():"")),As=/\B([A-Z])/g,$t=Qn(e=>e.replace(As,"-$1").toLowerCase()),Ji=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),pr=Qn(e=>e?`on${Ji(e)}`:""),ht=(e,t)=>!Object.is(e,t),hr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Os=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const Cr=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?Ps(r):ta(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||Z(e))return e}const Cs=/;(?![^(]*\))/g,Ss=/:([^]+)/,Es=/\/\*[^]*?\*\//g;function Ps(e){const t={};return e.replace(Es,"").split(Cs).forEach(n=>{if(n){const r=n.split(Ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function He(e){let t="";if(re(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=He(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ts=Jr(Is);function Qi(e){return!!e||e===""}const Fe=e=>re(e)?e:e==null?"":M(e)||Z(e)&&(e.toString===Xi||!$(e.toString))?JSON.stringify(e,Zi,2):String(e),Zi=(e,t)=>t&&t.__v_isRef?Zi(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:qi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!M(t)&&!Gi(t)?String(t):t;let we;class Ns{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ms(e,t=we){t&&t.active&&t.effects.push(e)}function Rs(){return we}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},eo=e=>(e.w&tt)>0,to=e=>(e.n&tt)>0,Fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=tt},js=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];eo(a)&&!to(a)?a.delete(e):t[n++]=a,a.w&=~tt,a.n&=~tt}t.length=n}},Sr=new WeakMap;let Kt=0,tt=1;const Er=30;let Ae;const mt=Symbol(""),Pr=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ms(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Ze=!0,tt=1<<++Kt,Kt<=Er?Fs(this):Da(this),this.fn()}finally{Kt<=Er&&js(this),tt=1<<--Kt,Ae=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const no=[];function Lt(){no.push(Ze),Ze=!1}function Dt(){const e=no.pop();Ze=e===void 0?!0:e}function ge(e,t,n){if(Ze&&Ae){let r=Sr.get(e);r||Sr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),ro(a)}}function ro(e,t){let n=!1;Kt<=Er?to(e)||(e.n|=tt,n=!eo(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Sr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Gn(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?ea(n)&&s.push(o.get("length")):(s.push(o.get(mt)),St(e)&&s.push(o.get(Pr)));break;case"delete":M(e)||(s.push(o.get(mt)),St(e)&&s.push(o.get(Pr)));break;case"set":St(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(na(l))}}function Ir(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&za(r);for(const r of n)r.computed||za(r)}function za(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const $s=Jr("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gn)),Ua=Ls();function Ls(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Lt();const r=H(this)[t].apply(this,n);return Dt(),r}}),e}function Ds(e){const t=H(this);return ge(t,"has",e),t.hasOwnProperty(e)}class io{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Qs:fo:i?lo:so).get(t))return t;const o=M(t);if(!a){if(o&&U(Ua,n))return Reflect.get(Ua,n,r);if(n==="hasOwnProperty")return Ds}const s=Reflect.get(t,n,r);return(Gn(n)?ao.has(n):$s(n))||(a||ge(t,"get",n),i)?s:ce(s)?o&&ea(n)?s:s.value:Z(s)?a?co(s):oa(s):s}}class oo extends io{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Mt(i)&&ce(i)&&!ce(r))return!1;if(!this._shallow&&(!Un(r)&&!Mt(r)&&(i=H(i),r=H(r)),!M(t)&&ce(i)&&!ce(r)))return i.value=r,!0;const o=M(t)&&ea(n)?Number(n)<t.length:U(t,n),s=Reflect.set(t,n,r,a);return t===H(a)&&(o?ht(r,i)&&Ye(t,"set",n,r):Ye(t,"add",n,r)),s}deleteProperty(t,n){const r=U(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ye(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Gn(n)||!ao.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",M(t)?"length":mt),Reflect.ownKeys(t)}}class zs extends io{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Us=new oo,Hs=new zs,Bs=new oo(!0),aa=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function bn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(ht(t,i)&&ge(a,"get",t),ge(a,"get",i));const{has:o}=Zn(a),s=r?aa:n?la:en;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function yn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(ht(e,a)&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function _n(e,t=!1){return e=e.__v_raw,!t&&ge(H(e),"iterate",mt),Reflect.get(e,"size",e)}function Ha(e){e=H(e);const t=H(this);return Zn(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Ba(e,t){t=H(t);const n=H(this),{has:r,get:a}=Zn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ht(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function Ya(e){const t=H(this),{has:n,get:r}=Zn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Wa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function xn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?aa:e?la:en;return!e&&ge(s,"iterate",mt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function wn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=St(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?aa:t?la:en;return!t&&ge(i,"iterate",l?Pr:mt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ys(){const e={get(i){return bn(this,i)},get size(){return _n(this)},has:yn,add:Ha,set:Ba,delete:Ya,clear:Wa,forEach:xn(!1,!1)},t={get(i){return bn(this,i,!1,!0)},get size(){return _n(this)},has:yn,add:Ha,set:Ba,delete:Ya,clear:Wa,forEach:xn(!1,!0)},n={get(i){return bn(this,i,!0)},get size(){return _n(this,!0)},has(i){return yn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:xn(!0,!1)},r={get(i){return bn(this,i,!0,!0)},get size(){return _n(this,!0)},has(i){return yn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=wn(i,!1,!1),n[i]=wn(i,!0,!1),t[i]=wn(i,!1,!0),r[i]=wn(i,!0,!0)}),[e,n,t,r]}const[Ws,Ks,qs,Vs]=Ys();function ia(e,t){const n=t?e?Vs:qs:e?Ks:Ws;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Xs={get:ia(!1,!1)},Gs={get:ia(!1,!0)},Js={get:ia(!0,!1)},so=new WeakMap,lo=new WeakMap,fo=new WeakMap,Qs=new WeakMap;function Zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function el(e){return e.__v_skip||!Object.isExtensible(e)?0:Zs(ws(e))}function oa(e){return Mt(e)?e:sa(e,!1,Us,Xs,so)}function tl(e){return sa(e,!1,Bs,Gs,lo)}function co(e){return sa(e,!0,Hs,Js,fo)}function sa(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=el(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Et(e){return Mt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function Un(e){return!!(e&&e.__v_isShallow)}function uo(e){return Et(e)||Mt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function mo(e){return zn(e,"__v_skip",!0),e}const en=e=>Z(e)?oa(e):e,la=e=>Z(e)?co(e):e;function po(e){Ze&&Ae&&(e=H(e),ro(e.dep||(e.dep=na())))}function ho(e,t){e=H(e);const n=e.dep;n&&Ir(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function nl(e){return rl(e,!1)}function rl(e,t){return ce(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:en(t)}get value(){return po(this),this._value}set value(t){const n=this.__v_isShallow||Un(t)||Mt(t);t=n?t:H(t),ht(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:en(t),ho(this))}}function yt(e){return ce(e)?e.value:e}const il={get:(e,t,n)=>yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function go(e){return Et(e)?e:new Proxy(e,il)}class ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return po(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function sl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new ol(r,a,i||!a,n)}function et(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){er(i,t,n)}return a}function Ee(e,t,n,r){if($(e)){const i=et(e,t,n,r);return i&&Vi(i)&&i.catch(o=>{er(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function er(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){et(l,null,10,[e,o,s]);return}}ll(e,n,a,r)}function ll(e,t,n,r=!0){console.error(e)}let tn=!1,Tr=!1;const le=[];let je=0;const Pt=[];let Ue=null,ft=0;const vo=Promise.resolve();let fa=null;function fl(e){const t=fa||vo;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=je+1,n=le.length;for(;t<n;){const r=t+n>>>1,a=le[r],i=nn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function ca(e){(!le.length||!le.includes(e,tn&&e.allowRecurse?je+1:je))&&(e.id==null?le.push(e):le.splice(cl(e.id),0,e),bo())}function bo(){!tn&&!Tr&&(Tr=!0,fa=vo.then(_o))}function ul(e){const t=le.indexOf(e);t>je&&le.splice(t,1)}function dl(e){M(e)?Pt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ft+1:ft))&&Pt.push(e),bo()}function Ka(e,t=tn?je+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function yo(e){if(Pt.length){const t=[...new Set(Pt)];if(Pt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>nn(n)-nn(r)),ft=0;ft<Ue.length;ft++)Ue[ft]();Ue=null,ft=0}}const nn=e=>e.id==null?1/0:e.id,ml=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _o(e){Tr=!1,tn=!0,le.sort(ml);const t=Se;try{for(je=0;je<le.length;je++){const n=le[je];n&&n.active!==!1&&et(n,null,14)}}finally{je=0,le.length=0,yo(),tn=!1,fa=null,(le.length||Pt.length)&&_o()}}function pl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||Q;h&&(a=n.map(y=>re(y)?y.trim():y)),m&&(a=n.map(Os))}let s,l=r[s=pr(t)]||r[s=pr(Nt(t))];!l&&i&&(l=r[s=pr($t(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const u=xo(c,t,!0);u&&(s=!0,se(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):se(o,i),Z(e)&&r.set(e,o),o)}function tr(e,t){return!e||!Xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,$t(t))||U(e,t))}let $e=null,nr=null;function Hn(e){const t=$e;return $e=e,nr=e&&e.type.__scopeId||null,t}function zt(e){nr=e}function Ut(){nr=null}function hl(e,t=$e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ni(-1);const i=Hn(t);let o;try{o=e(...a)}finally{Hn(i),r._d&&ni(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:y,ctx:j,inheritAttrs:I}=e;let D,k;const A=Hn(e);try{if(n.shapeFlag&4){const P=a||r,B=P;D=Re(u.call(B,P,m,i,y,h,j)),k=l}else{const P=t;D=Re(P.length>1?P(i,{attrs:l,slots:s,emit:c}):P(i,null)),k=t.props?l:gl(l)}}catch(P){Jt.length=0,er(P,e,1),D=W(gt)}let R=D;if(k&&I!==!1){const P=Object.keys(k),{shapeFlag:B}=R;P.length&&B&7&&(o&&P.some(Qr)&&(k=vl(k,o)),R=Rt(R,k))}return n.dirs&&(R=Rt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Hn(A),D}const gl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((t||(t={}))[n]=e[n]);return t},vl=(e,t)=>{const n={};for(const r in e)(!Qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!tr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,c):!0:!!o;return!1}function qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!tr(n,i))return!0}return!1}function yl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const _l=Symbol.for("v-ndc"),xl=e=>e.__isSuspense;function wl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):dl(e)}const kn={};function Xt(e,t,n){return wo(e,t,n)}function wo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Q){var s;const l=Rs()===((s=fe)==null?void 0:s.scope)?fe:null;let c,u=!1,m=!1;if(ce(e)?(c=()=>e.value,u=Un(e)):Et(e)?(c=()=>e,r=!0):M(e)?(m=!0,u=e.some(P=>Et(P)||Un(P)),c=()=>e.map(P=>{if(ce(P))return P.value;if(Et(P))return kt(P);if($(P))return et(P,l,2)})):$(e)?t?c=()=>et(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ee(e,l,3,[y])}:c=Se,t&&r){const P=c;c=()=>kt(P())}let h,y=P=>{h=A.onStop=()=>{et(P,l,4),h=A.onStop=void 0}},j;if(an)if(y=Se,t?n&&Ee(t,l,3,[c(),m?[]:void 0,y]):c(),a==="sync"){const P=gf();j=P.__watcherHandles||(P.__watcherHandles=[])}else return Se;let I=m?new Array(e.length).fill(kn):kn;const D=()=>{if(A.active)if(t){const P=A.run();(r||u||(m?P.some((B,ie)=>ht(B,I[ie])):ht(P,I)))&&(h&&h(),Ee(t,l,3,[P,I===kn?void 0:m&&I[0]===kn?[]:I,y]),I=P)}else A.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>he(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>ca(D));const A=new ra(c,k);t?n?D():I=A.run():a==="post"?he(A.run.bind(A),l&&l.suspense):A.run();const R=()=>{A.stop(),l&&l.scope&&Zr(l.scope.effects,A)};return j&&j.push(R),R}function kl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?ko(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=fe;Ft(this);const s=wo(a,i.bind(r),n);return o?Ft(o):pt(),s}function ko(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))kt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(qi(e)||St(e))e.forEach(n=>{kt(n,t)});else if(Gi(e))for(const n in e)kt(e[n],t);return e}function st(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Lt(),Ee(l,n,8,[e.el,s,e,t]),Dt())}}/*! #__NO_SIDE_EFFECTS__ */function Pe(e,t){return $(e)?(()=>se({name:e.name},t,{setup:e}))():e}const Rn=e=>!!e.type.__asyncLoader,Ao=e=>e.type.__isKeepAlive;function Al(e,t){Oo(e,"a",t)}function Ol(e,t){Oo(e,"da",t)}function Oo(e,t,n=fe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(rr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ao(a.parent.vnode)&&Cl(r,t,n,a),a=a.parent}}function Cl(e,t,n,r){const a=rr(t,e,r,!0);Co(()=>{Zr(r[t],a)},n)}function rr(e,t,n=fe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Lt(),Ft(n);const s=Ee(t,n,e,o);return pt(),Dt(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=fe)=>(!an||e==="sp")&&rr(e,(...r)=>t(...r),n),Sl=Ve("bm"),El=Ve("m"),Pl=Ve("bu"),Il=Ve("u"),Tl=Ve("bum"),Co=Ve("um"),Nl=Ve("sp"),Ml=Ve("rtg"),Rl=Ve("rtc");function Fl(e,t=fe){rr("ec",e,t)}function ar(e,t,n,r){let a;const i=n&&n[r];if(M(e)||re(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=e=>e?$o(e)?ga(e)||e.proxy:Nr(e.parent):null,Gt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>ua(e),$forceUpdate:e=>e.f||(e.f=()=>ca(e.update)),$nextTick:e=>e.n||(e.n=fl.bind(e.proxy)),$watch:e=>kl.bind(e)}),vr=(e,t)=>e!==Q&&!e.__isScriptSetup&&U(e,t),jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(vr(r,t))return o[t]=1,r[t];if(a!==Q&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==Q&&U(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const u=Gt[t];let m,h;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Q&&U(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,U(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return vr(a,t)?(a[t]=n,!0):r!==Q&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Q&&U(e,o)||vr(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Gt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Va(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Mr=!0;function $l(e){const t=ua(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&Xa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:j,activated:I,deactivated:D,beforeDestroy:k,beforeUnmount:A,destroyed:R,unmounted:P,render:B,renderTracked:ie,renderTriggered:oe,errorCaptured:ye,serverPrefetch:_e,expose:De,inheritAttrs:Bt,components:pn,directives:hn,filters:ur}=t;if(c&&Ll(c,r,null),o)for(const ee in o){const K=o[ee];$(K)&&(r[ee]=K.bind(n))}if(a){const ee=a.call(n,n);Z(ee)&&(e.data=oa(ee))}if(Mr=!0,i)for(const ee in i){const K=i[ee],it=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Se,gn=!$(K)&&$(K.set)?K.set.bind(n):Se,ot=ke({get:it,set:gn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Te=>ot.value=Te})}if(s)for(const ee in s)So(s[ee],r,n,ee);if(l){const ee=$(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(K=>{Fn(K,ee[K])})}u&&Xa(u,e,"c");function ue(ee,K){M(K)?K.forEach(it=>ee(it.bind(n))):K&&ee(K.bind(n))}if(ue(Sl,m),ue(El,h),ue(Pl,y),ue(Il,j),ue(Al,I),ue(Ol,D),ue(Fl,ye),ue(Rl,ie),ue(Ml,oe),ue(Tl,A),ue(Co,P),ue(Nl,_e),M(De))if(De.length){const ee=e.exposed||(e.exposed={});De.forEach(K=>{Object.defineProperty(ee,K,{get:()=>n[K],set:it=>n[K]=it})})}else e.exposed||(e.exposed={});B&&e.render===Se&&(e.render=B),Bt!=null&&(e.inheritAttrs=Bt),pn&&(e.components=pn),hn&&(e.directives=hn)}function Ll(e,t,n=Se){M(e)&&(e=Rr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=It(a.from||r,a.default,!0):i=It(a.from||r):i=It(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Xa(e,t,n){Ee(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function So(e,t,n,r){const a=r.includes(".")?ko(n,r):()=>n[r];if(re(e)){const i=t[e];$(i)&&Xt(a,i)}else if($(e))Xt(a,e.bind(n));else if(Z(e))if(M(e))e.forEach(i=>So(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&Xt(a,i,e)}}function ua(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Bn(l,c,o,!0)),Bn(l,t,o)),Z(t)&&i.set(t,l),l}function Bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Bn(e,i,n,!0),a&&a.forEach(o=>Bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Dl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Dl={data:Ga,props:Ja,emits:Ja,methods:qt,computed:qt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:qt,directives:qt,watch:Ul,provide:Ga,inject:zl};function Ga(e,t){return t?e?function(){return se($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function zl(e,t){return qt(Rr(e),Rr(t))}function Rr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?se(Object.create(null),e,t):t}function Ja(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:se(Object.create(null),Va(e),Va(t??{})):t}function Ul(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function Eo(){return{app:null,config:{isNativeTag:ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hl=0;function Bl(e,t){return function(r,a=null){$(r)||(r=se({},r)),a!=null&&!Z(a)&&(a=null);const i=Eo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Hl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=W(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,ga(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Yn=l;try{return c()}finally{Yn=null}}};return l}}let Yn=null;function Fn(e,t){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[e]=t}}function It(e,t,n=!1){const r=fe||$e;if(r||Yn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function Yl(e,t,n,r=!1){const a={},i={};zn(i,or,1),e.propsDefaults=Object.create(null),Po(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:tl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(tr(e.emitsOptions,h))continue;const y=t[h];if(l)if(U(i,h))y!==i[h]&&(i[h]=y,c=!0);else{const j=Nt(h);a[j]=Fr(l,s,j,y,e,!1)}else y!==i[h]&&(i[h]=y,c=!0)}}}else{Po(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=$t(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&Ye(e,"set","$attrs")}function Po(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const c=t[l];let u;a&&U(a,u=Nt(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:tr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||Q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Fr(a,l,m,c[m],e,!U(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[h,y]=Io(m,t,!0);se(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Z(e)&&r.set(e,Ct),Ct;if(M(i))for(let u=0;u<i.length;u++){const m=Nt(i[u]);Qa(m)&&(o[m]=Q)}else if(i)for(const u in i){const m=Nt(u);if(Qa(m)){const h=i[u],y=o[m]=M(h)||$(h)?{type:h}:se({},h);if(y){const j=ti(Boolean,y.type),I=ti(String,y.type);y[0]=j>-1,y[1]=I<0||j<I,(j>-1||U(y,"default"))&&s.push(m)}}}const c=[o,s];return Z(e)&&r.set(e,c),c}function Qa(e){return e[0]!=="$"}function Za(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ei(e,t){return Za(e)===Za(t)}function ti(e,t){return M(t)?t.findIndex(n=>ei(n,e)):$(t)&&ei(t,e)?0:-1}const To=e=>e[0]==="_"||e==="$stable",da=e=>M(e)?e.map(Re):[Re(e)],Kl=(e,t,n)=>{if(t._n)return t;const r=hl((...a)=>da(t(...a)),n);return r._c=!1,r},No=(e,t,n)=>{const r=e._ctx;for(const a in e){if(To(a))continue;const i=e[a];if($(i))t[a]=Kl(a,i,r);else if(i!=null){const o=da(i);t[a]=()=>o}}},Mo=(e,t)=>{const n=da(t);e.slots.default=()=>n},ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),zn(t,"_",n)):No(t,e.slots={})}else e.slots={},t&&Mo(e,t);zn(e.slots,or,1)},Vl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,No(t,a)),o=t}else t&&(Mo(e,t),o={default:1});if(i)for(const s in a)!To(s)&&o[s]==null&&delete a[s]};function jr(e,t,n,r,a=!1){if(M(e)){e.forEach((h,y)=>jr(h,t&&(M(t)?t[y]:t),n,r,a));return}if(Rn(r)&&!a)return;const i=r.shapeFlag&4?ga(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===Q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),$(l))et(l,s,12,[o,u]);else{const h=re(l),y=ce(l);if(h||y){const j=()=>{if(e.f){const I=h?U(m,l)?m[l]:u[l]:l.value;a?M(I)&&Zr(I,i):M(I)?I.includes(i)||I.push(i):h?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,U(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(j.id=-1,he(j,n)):j()}}}const he=wl;function Xl(e){return Gl(e)}function Gl(e,t){const n=Cr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Se,insertStaticContent:j}=e,I=(f,d,p,g=null,v=null,x=null,O=!1,_=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Wt(f,d)&&(g=vn(f),Te(f,v,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:S}=d;switch(b){case ir:D(f,d,p,g);break;case gt:k(f,d,p,g);break;case jn:f==null&&A(d,p,g,O);break;case me:pn(f,d,p,g,v,x,O,_,w);break;default:S&1?B(f,d,p,g,v,x,O,_,w):S&6?hn(f,d,p,g,v,x,O,_,w):(S&64||S&128)&&b.process(f,d,p,g,v,x,O,_,w,_t)}T!=null&&v&&jr(T,f&&f.ref,x,d||f,!d)},D=(f,d,p,g)=>{if(f==null)r(d.el=s(d.children),p,g);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},k=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},A=(f,d,p,g)=>{[f.el,f.anchor]=j(f.children,d,p,g,f.el,f.anchor)},R=({el:f,anchor:d},p,g)=>{let v;for(;f&&f!==d;)v=h(f),r(f,p,g),f=v;r(d,p,g)},P=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},B=(f,d,p,g,v,x,O,_,w)=>{O=O||d.type==="svg",f==null?ie(d,p,g,v,x,O,_,w):_e(f,d,v,x,O,_,w)},ie=(f,d,p,g,v,x,O,_)=>{let w,b;const{type:T,props:S,shapeFlag:N,transition:F,dirs:z}=f;if(w=f.el=o(f.type,x,S&&S.is,S),N&8?u(w,f.children):N&16&&ye(f.children,w,null,g,v,x&&T!=="foreignObject",O,_),z&&st(f,null,g,"created"),oe(w,f,f.scopeId,O,g),S){for(const Y in S)Y!=="value"&&!Mn(Y)&&i(w,Y,null,S[Y],x,f.children,g,v,ze);"value"in S&&i(w,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Me(b,g,f)}z&&st(f,null,g,"beforeMount");const q=Jl(v,F);q&&F.beforeEnter(w),r(w,d,p),((b=S&&S.onVnodeMounted)||q||z)&&he(()=>{b&&Me(b,g,f),q&&F.enter(w),z&&st(f,null,g,"mounted")},v)},oe=(f,d,p,g,v)=>{if(p&&y(f,p),g)for(let x=0;x<g.length;x++)y(f,g[x]);if(v){let x=v.subTree;if(d===x){const O=v.vnode;oe(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},ye=(f,d,p,g,v,x,O,_,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=_?Qe(f[b]):Re(f[b]);I(null,T,d,p,g,v,x,O,_)}},_e=(f,d,p,g,v,x,O)=>{const _=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=d;w|=f.patchFlag&16;const S=f.props||Q,N=d.props||Q;let F;p&&lt(p,!1),(F=N.onVnodeBeforeUpdate)&&Me(F,p,d,f),T&&st(d,f,p,"beforeUpdate"),p&&lt(p,!0);const z=v&&d.type!=="foreignObject";if(b?De(f.dynamicChildren,b,_,p,g,z,x):O||K(f,d,_,null,p,g,z,x,!1),w>0){if(w&16)Bt(_,d,S,N,p,g,v);else if(w&2&&S.class!==N.class&&i(_,"class",null,N.class,v),w&4&&i(_,"style",S.style,N.style,v),w&8){const q=d.dynamicProps;for(let Y=0;Y<q.length;Y++){const ne=q[Y],xe=S[ne],xt=N[ne];(xt!==xe||ne==="value")&&i(_,ne,xe,xt,v,f.children,p,g,ze)}}w&1&&f.children!==d.children&&u(_,d.children)}else!O&&b==null&&Bt(_,d,S,N,p,g,v);((F=N.onVnodeUpdated)||T)&&he(()=>{F&&Me(F,p,d,f),T&&st(d,f,p,"updated")},g)},De=(f,d,p,g,v,x,O)=>{for(let _=0;_<d.length;_++){const w=f[_],b=d[_],T=w.el&&(w.type===me||!Wt(w,b)||w.shapeFlag&70)?m(w.el):p;I(w,b,T,null,g,v,x,O,!0)}},Bt=(f,d,p,g,v,x,O)=>{if(p!==g){if(p!==Q)for(const _ in p)!Mn(_)&&!(_ in g)&&i(f,_,p[_],null,O,d.children,v,x,ze);for(const _ in g){if(Mn(_))continue;const w=g[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,O,d.children,v,x,ze)}"value"in g&&i(f,"value",p.value,g.value)}},pn=(f,d,p,g,v,x,O,_,w)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:F}=d;F&&(_=_?_.concat(F):F),f==null?(r(b,p,g),r(T,p,g),ye(d.children,p,T,v,x,O,_,w)):S>0&&S&64&&N&&f.dynamicChildren?(De(f.dynamicChildren,N,p,v,x,O,_),(d.key!=null||v&&d===v.subTree)&&Ro(f,d,!0)):K(f,d,p,T,v,x,O,_,w)},hn=(f,d,p,g,v,x,O,_,w)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?v.ctx.activate(d,p,g,O,w):ur(d,p,g,v,x,O,w):Na(f,d,w)},ur=(f,d,p,g,v,x,O)=>{const _=f.component=ff(f,g,v);if(Ao(f)&&(_.ctx.renderer=_t),cf(_),_.asyncDep){if(v&&v.registerDep(_,ue),!f.el){const w=_.subTree=W(gt);k(null,w,d,p)}return}ue(_,f,d,p,v,x,O)},Na=(f,d,p)=>{const g=d.component=f.component;if(bl(f,d,p))if(g.asyncDep&&!g.asyncResolved){ee(g,d,p);return}else g.next=d,ul(g.update),g.update();else d.el=f.el,g.vnode=d},ue=(f,d,p,g,v,x,O)=>{const _=()=>{if(f.isMounted){let{next:T,bu:S,u:N,parent:F,vnode:z}=f,q=T,Y;lt(f,!1),T?(T.el=z.el,ee(f,T,O)):T=z,S&&hr(S),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Me(Y,F,T,z),lt(f,!0);const ne=gr(f),xe=f.subTree;f.subTree=ne,I(xe,ne,m(xe.el),vn(xe),f,v,x),T.el=ne.el,q===null&&yl(f,ne.el),N&&he(N,v),(Y=T.props&&T.props.onVnodeUpdated)&&he(()=>Me(Y,F,T,z),v)}else{let T;const{el:S,props:N}=d,{bm:F,m:z,parent:q}=f,Y=Rn(d);if(lt(f,!1),F&&hr(F),!Y&&(T=N&&N.onVnodeBeforeMount)&&Me(T,q,d),lt(f,!0),S&&mr){const ne=()=>{f.subTree=gr(f),mr(S,f.subTree,f,v,null)};Y?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=gr(f);I(null,ne,p,g,f,v,x),d.el=ne.el}if(z&&he(z,v),!Y&&(T=N&&N.onVnodeMounted)){const ne=d;he(()=>Me(T,q,ne),v)}(d.shapeFlag&256||q&&Rn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&he(f.a,v),f.isMounted=!0,d=p=g=null}},w=f.effect=new ra(_,()=>ca(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,lt(f,!0),b()},ee=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Wl(f,d.props,g,p),Vl(f,d.children,p),Lt(),Ka(),Dt()},K=(f,d,p,g,v,x,O,_,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,S=d.children,{patchFlag:N,shapeFlag:F}=d;if(N>0){if(N&128){gn(b,S,p,g,v,x,O,_,w);return}else if(N&256){it(b,S,p,g,v,x,O,_,w);return}}F&8?(T&16&&ze(b,v,x),S!==b&&u(p,S)):T&16?F&16?gn(b,S,p,g,v,x,O,_,w):ze(b,v,x,!0):(T&8&&u(p,""),F&16&&ye(S,p,g,v,x,O,_,w))},it=(f,d,p,g,v,x,O,_,w)=>{f=f||Ct,d=d||Ct;const b=f.length,T=d.length,S=Math.min(b,T);let N;for(N=0;N<S;N++){const F=d[N]=w?Qe(d[N]):Re(d[N]);I(f[N],F,p,null,v,x,O,_,w)}b>T?ze(f,v,x,!0,!1,S):ye(d,p,g,v,x,O,_,w,S)},gn=(f,d,p,g,v,x,O,_,w)=>{let b=0;const T=d.length;let S=f.length-1,N=T-1;for(;b<=S&&b<=N;){const F=f[b],z=d[b]=w?Qe(d[b]):Re(d[b]);if(Wt(F,z))I(F,z,p,null,v,x,O,_,w);else break;b++}for(;b<=S&&b<=N;){const F=f[S],z=d[N]=w?Qe(d[N]):Re(d[N]);if(Wt(F,z))I(F,z,p,null,v,x,O,_,w);else break;S--,N--}if(b>S){if(b<=N){const F=N+1,z=F<T?d[F].el:g;for(;b<=N;)I(null,d[b]=w?Qe(d[b]):Re(d[b]),p,z,v,x,O,_,w),b++}}else if(b>N)for(;b<=S;)Te(f[b],v,x,!0),b++;else{const F=b,z=b,q=new Map;for(b=z;b<=N;b++){const ve=d[b]=w?Qe(d[b]):Re(d[b]);ve.key!=null&&q.set(ve.key,b)}let Y,ne=0;const xe=N-z+1;let xt=!1,Fa=0;const Yt=new Array(xe);for(b=0;b<xe;b++)Yt[b]=0;for(b=F;b<=S;b++){const ve=f[b];if(ne>=xe){Te(ve,v,x,!0);continue}let Ne;if(ve.key!=null)Ne=q.get(ve.key);else for(Y=z;Y<=N;Y++)if(Yt[Y-z]===0&&Wt(ve,d[Y])){Ne=Y;break}Ne===void 0?Te(ve,v,x,!0):(Yt[Ne-z]=b+1,Ne>=Fa?Fa=Ne:xt=!0,I(ve,d[Ne],p,null,v,x,O,_,w),ne++)}const ja=xt?Ql(Yt):Ct;for(Y=ja.length-1,b=xe-1;b>=0;b--){const ve=z+b,Ne=d[ve],$a=ve+1<T?d[ve+1].el:g;Yt[b]===0?I(null,Ne,p,$a,v,x,O,_,w):xt&&(Y<0||b!==ja[Y]?ot(Ne,p,$a,2):Y--)}}},ot=(f,d,p,g,v=null)=>{const{el:x,type:O,transition:_,children:w,shapeFlag:b}=f;if(b&6){ot(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){O.move(f,d,p,_t);return}if(O===me){r(x,d,p);for(let S=0;S<w.length;S++)ot(w[S],d,p,g);r(f.anchor,d,p);return}if(O===jn){R(f,d,p);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,d,p),he(()=>_.enter(x),v);else{const{leave:S,delayLeave:N,afterLeave:F}=_,z=()=>r(x,d,p),q=()=>{S(x,()=>{z(),F&&F()})};N?N(x,z,q):q()}else r(x,d,p)},Te=(f,d,p,g=!1,v=!1)=>{const{type:x,props:O,ref:_,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:S,dirs:N}=f;if(_!=null&&jr(_,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const F=T&1&&N,z=!Rn(f);let q;if(z&&(q=O&&O.onVnodeBeforeUnmount)&&Me(q,d,f),T&6)bs(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}F&&st(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,v,_t,g):b&&(x!==me||S>0&&S&64)?ze(b,d,p,!1,!0):(x===me&&S&384||!v&&T&16)&&ze(w,d,p),g&&Ma(f)}(z&&(q=O&&O.onVnodeUnmounted)||F)&&he(()=>{q&&Me(q,d,f),F&&st(f,null,d,"unmounted")},p)},Ma=f=>{const{type:d,el:p,anchor:g,transition:v}=f;if(d===me){vs(p,g);return}if(d===jn){P(f);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:_}=v,w=()=>O(p,x);_?_(f.el,x,w):w()}else x()},vs=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},bs=(f,d,p)=>{const{bum:g,scope:v,update:x,subTree:O,um:_}=f;g&&hr(g),v.stop(),x&&(x.active=!1,Te(O,f,d,p)),_&&he(_,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ze=(f,d,p,g=!1,v=!1,x=0)=>{for(let O=x;O<f.length;O++)Te(f[O],d,p,g,v)},vn=f=>f.shapeFlag&6?vn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ra=(f,d,p)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,p),Ka(),yo(),d._vnode=f},_t={p:I,um:Te,m:ot,r:Ma,mt:ur,mc:ye,pc:K,pbc:De,n:vn,o:e};let dr,mr;return t&&([dr,mr]=t(_t)),{render:Ra,hydrate:dr,createApp:Bl(Ra,dr)}}function lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Jl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ro(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Ro(o,s)),s.type===ir&&(s.el=o.el)}}function Ql(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zl=e=>e.__isTeleport,me=Symbol.for("v-fgt"),ir=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Jt=[];let Oe=null;function V(e=!1){Jt.push(Oe=e?null:[])}function ef(){Jt.pop(),Oe=Jt[Jt.length-1]||null}let rn=1;function ni(e){rn+=e}function Fo(e){return e.dynamicChildren=rn>0?Oe||Ct:null,ef(),rn>0&&Oe&&Oe.push(e),e}function G(e,t,n,r,a,i){return Fo(L(e,t,n,r,a,i,!0))}function tf(e,t,n,r,a){return Fo(W(e,t,n,r,a,!0))}function $r(e){return e?e.__v_isVNode===!0:!1}function Wt(e,t){return e.type===t.type&&e.key===t.key}const or="__vInternal",jo=({key:e})=>e??null,$n=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ce(e)||$(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function L(e,t=null,n=null,r=0,a=null,i=e===me?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jo(t),ref:t&&$n(t),scopeId:nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:$e};return s?(pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),rn>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const W=nf;function nf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_l)&&(e=gt),$r(e)){const s=Rt(e,t,!0);return n&&pa(s,n),rn>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(pf(e)&&(e=e.__vccOpts),t){t=rf(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=He(s)),Z(l)&&(uo(l)&&!M(l)&&(l=se({},l)),t.style=ta(l))}const o=re(e)?1:xl(e)?128:Zl(e)?64:Z(e)?4:$(e)?2:0;return L(e,t,n,r,a,o,i,!0)}function rf(e){return e?uo(e)||or in e?se({},e):e:null}function Rt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?of(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&jo(s),ref:t&&t.ref?n&&a?M(a)?a.concat($n(t)):[a,$n(t)]:$n(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ma(e=" ",t=0){return W(ir,null,e,t)}function af(e,t){const n=W(jn,null,e);return n.staticCount=t,n}function br(e="",t=!1){return t?(V(),tf(gt,null,e)):W(gt,null,e)}function Re(e){return e==null||typeof e=="boolean"?W(gt):M(e)?W(me,null,e.slice()):typeof e=="object"?Qe(e):W(ir,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(or in t)?t._ctx=$e:a===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[ma(t)]):n=8);e.children=t,e.shapeFlag|=n}function of(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=He([t.class,r.class]));else if(a==="style")t.style=ta([t.style,r.style]);else if(Xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ee(e,t,7,[n,r])}const sf=Eo();let lf=0;function ff(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||sf,i={uid:lf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=pl.bind(null,i),e.ce&&e.ce(i),i}let fe=null,ha,wt,ri="__VUE_INSTANCE_SETTERS__";(wt=Cr()[ri])||(wt=Cr()[ri]=[]),wt.push(e=>fe=e),ha=e=>{wt.length>1?wt.forEach(t=>t(e)):wt[0](e)};const Ft=e=>{ha(e),e.scope.on()},pt=()=>{fe&&fe.scope.off(),ha(null)};function $o(e){return e.vnode.shapeFlag&4}let an=!1;function cf(e,t=!1){an=t;const{props:n,children:r}=e.vnode,a=$o(e);Yl(e,n,a,t),ql(e,r);const i=a?uf(e,t):void 0;return an=!1,i}function uf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=mo(new Proxy(e.ctx,jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?mf(e):null;Ft(e),Lt();const i=et(r,e,0,[e.props,a]);if(Dt(),pt(),Vi(i)){if(i.then(pt,pt),t)return i.then(o=>{ai(e,o,t)}).catch(o=>{er(o,e,0)});e.asyncDep=i}else ai(e,i,t)}else Lo(e,t)}function ai(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=go(t)),Lo(e,n)}let ii;function Lo(e,t,n){const r=e.type;if(!e.render){if(!t&&ii&&!r.render){const a=r.template||ua(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=se(se({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}e.render=r.render||Se}{Ft(e),Lt();try{$l(e)}finally{Dt(),pt()}}}function df(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}}))}function mf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return df(e)},slots:e.slots,emit:e.emit,expose:t}}function ga(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(go(mo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}}))}function pf(e){return $(e)&&"__vccOpts"in e}const ke=(e,t)=>sl(e,t,an);function Do(e,t,n){const r=arguments.length;return r===2?Z(t)&&!M(t)?$r(t)?W(e,null,[t]):W(e,t):W(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$r(n)&&(n=[n]),W(e,t,n))}const hf=Symbol.for("v-scx"),gf=()=>It(hf),vf="3.3.9",bf="http://www.w3.org/2000/svg",ct=typeof document<"u"?document:null,oi=ct&&ct.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ct.createElementNS(bf,e):ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_f=Symbol("_vtc");function xf(e,t,n){const r=e[_f];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const wf=Symbol("_vod");function kf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Lr(r,i,"");for(const i in n)Lr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),wf in e&&(r.display=i)}}const si=/\s*!important$/;function Lr(e,t,n){if(M(n))n.forEach(r=>Lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Af(e,t);si.test(n)?e.setProperty($t(r),n.replace(si,""),"important"):e[r]=n}}const li=["Webkit","Moz","ms"],yr={};function Af(e,t){const n=yr[t];if(n)return n;let r=Nt(t);if(r!=="filter"&&r in e)return yr[t]=r;r=Ji(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in e)return yr[t]=i}return t}const fi="http://www.w3.org/1999/xlink";function Of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n);else{const i=Ts(t);n==null||i&&!Qi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Qi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Sf(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}const ci=Symbol("_vei");function Pf(e,t,n,r,a=null){const i=e[ci]||(e[ci]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=If(t);if(r){const c=i[t]=Mf(r,a);Sf(e,s,c,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function If(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let _r=0;const Tf=Promise.resolve(),Nf=()=>_r||(Tf.then(()=>_r=0),_r=Date.now());function Mf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Nf(),n}function Rf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const di=/^on[a-z]/,Ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?xf(e,r,a):t==="style"?kf(e,n,r):Xn(t)?Qr(t)||Pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,a))?Cf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Of(e,t,r,a))};function jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&di.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||di.test(t)&&re(n)?!1:t in e}const $f=se({patchProp:Ff},yf);let mi;function Lf(){return mi||(mi=Xl($f))}const Df=(...e)=>{const t=Lf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zf(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function zf(e){return re(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Uf=Object.assign;function Hf(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}var pi;(function(e){e.pop="pop",e.push="push"})(pi||(pi={}));var hi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hi||(hi={}));var gi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gi||(gi={}));const Bf=Symbol(""),vi=Symbol(""),bi=Symbol(""),Yf=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=It(bi),a=ke(()=>e.route||r.value),i=It(vi,0),o=ke(()=>{let c=yt(i);const{matched:u}=a.value;let m;for(;(m=u[c])&&!m.components;)c++;return c}),s=ke(()=>a.value.matched[o.value]);Fn(vi,ke(()=>o.value+1)),Fn(Bf,s),Fn(bi,a);const l=nl();return Xt(()=>[l.value,s.value,e.name],([c,u,m],[h,y,j])=>{u&&(u.instances[m]=c,y&&y!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),c&&u&&(!y||!Hf(u,y)||!h)&&(u.enterCallbacks[m]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=a.value,u=e.name,m=s.value,h=m&&m.components[u];if(!h)return yi(n.default,{Component:h,route:c});const y=m.props[u],j=y?y===!0?c.params:typeof y=="function"?y(c):y:null,D=Do(h,Uf({},j,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(m.instances[u]=null)},ref:l}));return yi(n.default,{Component:D,route:c})||D}}});function yi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wf=Yf,Kf="/assets/linkedin-9a2af6a1.svg",qf="/assets/github-41710eec.svg";const Ie=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vf={},Xf=af('<div class="size-limiter" data-v-72f42b24><nav data-v-72f42b24><ul data-v-72f42b24><li data-v-72f42b24><a href="#projects" data-v-72f42b24>Projetos</a></li><li data-v-72f42b24><a href="#skills" data-v-72f42b24>Skills</a></li><li data-v-72f42b24><a href="#about" data-v-72f42b24>Sobre</a></li><li data-v-72f42b24><a href="#contact" data-v-72f42b24>Contato</a></li></ul></nav><aside data-v-72f42b24><ul data-v-72f42b24><li data-v-72f42b24><a href="" data-v-72f42b24><img src="'+Kf+'" alt="" data-v-72f42b24></a></li><li data-v-72f42b24><a href="" data-v-72f42b24><img src="'+qf+'" alt="" data-v-72f42b24></a></li></ul></aside></div>',1),Gf=[Xf];function Jf(e,t){return V(),G("header",null,Gf)}const Qf=Ie(Vf,[["render",Jf],["__scopeId","data-v-72f42b24"]]),Zf="/assets/presentation-photo-6cc280b0.png",ec={key:0},tc=["href"],nc={key:1},rc={key:1},ac=Pe({__name:"ButtonComponent",props:{linkGo:{},text:{},targetType:{},backgroundColor:{}},setup(e){return(t,n)=>t.linkGo?(V(),G("div",ec,[t.targetType==="_blank"?(V(),G("a",{key:0,href:t.linkGo,target:"_blank"},[L("button",null,Fe(t.text),1)],8,tc)):(V(),G("a",nc,[L("button",null,Fe(t.text),1)]))])):(V(),G("div",rc))}});const zo=Ie(ac,[["__scopeId","data-v-4d040b09"]]),va=e=>(zt("data-v-1f1a72db"),e=e(),Ut(),e),ic={class:"presentation"},oc={class:"article-content"},sc=va(()=>L("h1",null,[L("span",{class:"text-purple"},"Olá! Sou o Pedro,"),ma(" Full-stack Developer")],-1)),lc=va(()=>L("p",null,"Aficionado por tecnologia e verdadeiro entusiasta do que faço, estou em constante evolução em busca do meu sucesso profissional e pessoal.",-1)),fc=va(()=>L("img",{class:"presentation-photo",src:Zf,alt:""},null,-1)),cc=Pe({__name:"PresentationComponent",setup(e){return(t,n)=>(V(),G("section",ic,[L("article",null,[L("div",oc,[sc,lc,W(zo,{targetType:"_blank",linkGo:"https://drive.google.com/file/d/12aWEO-HnFc6Sz_rUWZYjSxUJCqv4a7_U/view?usp=drive_link",text:"Download CV"},null,8,["linkGo"])]),fc])]))}});const uc=Ie(cc,[["__scopeId","data-v-1f1a72db"]]),dc={class:"project-item"},mc=["src","alt"],pc={class:"project-title"},hc={class:"project-description"},gc={class:"project-languages"},vc=Pe({__name:"ProjectComponent",props:{imgSrc:{},title:{},description:{},repository:{},languages:{}},setup(e){return(t,n)=>(V(),G("article",dc,[L("img",{src:t.imgSrc,alt:t.title},null,8,mc),L("h3",pc,Fe(t.title),1),L("p",hc,Fe(t.description),1),L("span",gc,Fe(t.languages),1),W(zo,{targetType:"_blank",linkGo:t.repository,text:"Ver Repositório"},null,8,["linkGo"])]))}});const bc=Ie(vc,[["__scopeId","data-v-5abe8c8b"]]),yc=e=>(zt("data-v-fb3f3863"),e=e(),Ut(),e),_c={class:"projects",id:"projects"},xc={class:"container"},wc=yc(()=>L("h2",{class:"title"}," Projetos ",-1)),kc={class:"projects-list"},Ac=Pe({__name:"ProjectsComponent",setup(e){let t=[];return t=[{imgSrc:"./../src/assets/images/thumbnails-projects/parachAdvent.jpg",title:"ParachAdvent",description:"Landing page de Marketing para a ParachAdvent, escola de paraquedismo.",repository:"https://github.com/pedrohsouza20/parachAdvent",languages:" Vue.js, SCSS, JavaScript"},{imgSrc:"./../src/assets/images/thumbnails-projects/parachAdvent.jpg",title:"Ask and Answers",description:"Um site de perguntas e respostas, ao melhor estilo Yahoo!",repository:"https://github.com/pedrohsouza20/Ask-Answers",languages:" Node.js, Express.js, MySQL, Sequelize, EJS"},{imgSrc:"./../src/assets/images/thumbnails-projects/parachAdvent.jpg",title:"Blog",description:"Um blog onde o administrador pode fazer vários posts",repository:"https://github.com/pedrohsouza20/Blog",languages:" Node.js, Express.js, MySQL, Sequelize, EJS"}],(n,r)=>(V(),G("section",_c,[L("div",xc,[wc,L("ul",kc,[(V(!0),G(me,null,ar(yt(t),a=>(V(),G("li",null,[W(bc,{imgSrc:a.imgSrc,description:a.description,repository:a.repository,title:a.title,languages:a.languages},null,8,["imgSrc","description","repository","title","languages"])]))),256))])])]))}});const Oc=Ie(Ac,[["__scopeId","data-v-fb3f3863"]]),Cc={key:0},Sc={class:"description"},Ec={key:1},Pc=["href"],Ic={class:"description"},Tc=["src"],Nc=Pe({__name:"CardComponent",props:{title:{},color:{},description:{},icon:{},personName:{},profission:{},urlToGo:{}},setup(e){return(t,n)=>(V(),G(me,null,[t.icon?br("",!0):(V(),G("div",Cc,[L("h3",null,Fe(t.title),1),L("article",{class:He([`color-${t.color}`,"card-item"])},[L("p",Sc,[ma(Fe(t.description)+" ",1),t.personName?(V(),G("p",{key:0,class:He(`${t.color}`)},[L("p",{class:He([`${t.color}`,"person-name"])},"- "+Fe(t.personName)+",",3),L("span",{class:He(`${t.color}`)},Fe(t.profission),3)],2)):br("",!0)])],2)])),t.icon?(V(),G("div",Ec,[L("a",{href:t.urlToGo},[L("article",{class:He([`color-${t.color}`,"card-item is-flex"])},[L("p",Ic,Fe(t.description),1),L("div",{class:He([t.color,"positioning"])},[L("img",{class:"img-icon",src:t.icon,alt:""},null,8,Tc)],2)],2)],8,Pc)])):br("",!0)],64))}});const ba=Ie(Nc,[["__scopeId","data-v-7feb94a8"]]),Mc=e=>(zt("data-v-36b1161b"),e=e(),Ut(),e),Rc={class:"skills",id:"skills"},Fc={class:"container"},jc=Mc(()=>L("h2",{class:"title"}," Skills ",-1)),$c={class:"skills-list"},Lc=Pe({__name:"SkillsComponent",setup(e){let t=[{title:"Front-end",color:"pink",description:"Angular 2+, Vue.js 3, VueX, TypeScript, SCSS, VueX, Pinia"},{title:"Back-end",color:"purple",description:"Node.js, Adonis.js, Express, MySQL"},{title:"Design",color:"green",description:"UI, Heurísticas, Tipografia, Cores"},{title:"Soft-skills",color:"orange",description:"Dedicado, Apaixonado por aprender, Amante do auto-didatismo"}];return(n,r)=>(V(),G("section",Rc,[L("div",Fc,[jc,L("ul",$c,[(V(!0),G(me,null,ar(yt(t),a=>(V(),G("li",null,[W(ba,{title:a.title,color:a.color,description:a.description,icon:a.icon},null,8,["title","color","description","icon"])]))),256))])])]))}});const Dc=Ie(Lc,[["__scopeId","data-v-36b1161b"]]),zc=e=>(zt("data-v-671f67a7"),e=e(),Ut(),e),Uc={class:"testimonies",id:"testimony"},Hc={class:"container"},Bc=zc(()=>L("h2",{class:"title"}," Depoimentos ",-1)),Yc={class:"testimony-list"},Wc=Pe({__name:"TestimoniesComponent",setup(e){let t=[{description:'"Pedro, é um desenvolvedor Front-end, e destaca-se pela excepcional clareza e escalabilidade de seus códigos. Seu talento evidencia-se na lógica impecável aplicada, proporcionando soluções elegantes para desafios complexos. Pedro não apenas eleva a qualidade das aplicações, mas também inspira todos ao seu redor com seu trabalho preciso e estratégico."',personName:"Paulo Roberto",profission:"CEO da Meet Developers - Soluções Tecnológicas",color:"pink"},{description:'"Testemunha 2"',personName:"John Doe",profission:"Engenheiro de Software",color:"purple"}];return(n,r)=>(V(),G("section",Uc,[L("div",Hc,[Bc,L("ul",Yc,[(V(!0),G(me,null,ar(yt(t),a=>(V(),G("li",null,[W(ba,{description:a.description,color:a.color,personName:a.personName,profission:a.profission},null,8,["description","color","personName","profission"])]))),256))])])]))}});const Kc=Ie(Wc,[["__scopeId","data-v-671f67a7"]]),qc=e=>(zt("data-v-1e7ae16b"),e=e(),Ut(),e),Vc={class:"contact",id:"contact"},Xc={class:"container"},Gc=qc(()=>L("h2",{class:"title"}," Contato ",-1)),Jc={class:"contact-list"},Qc=Pe({__name:"ContactComponent",setup(e){let t=[{color:"pink",description:"(38) 9 8409-2330",icon:"./../src/assets/icons/whatsapp.svg",urlToGo:"https://wa.me/+5538984092330"},{color:"purple",description:"Pedro Souza",icon:"./../src/assets/icons/linkedin.svg",urlToGo:"https://www.linkedin.com/in/pedrohdev/"}];return(n,r)=>(V(),G("section",Vc,[L("div",Xc,[Gc,L("ul",Jc,[(V(!0),G(me,null,ar(yt(t),a=>(V(),G("li",null,[W(ba,{color:a.color,description:a.description,icon:a.icon,urlToGo:a.urlToGo},null,8,["color","description","icon","urlToGo"])]))),256))])])]))}});const Zc=Ie(Qc,[["__scopeId","data-v-1e7ae16b"]]);const eu={},tu=e=>(zt("data-v-19ed63f5"),e=e(),Ut(),e),nu={class:"footer"},ru=tu(()=>L("p",null,"Pedro Souza - Desenvolvedor Full-stack",-1)),au=[ru];function iu(e,t){return V(),G("footer",nu,au)}const ou=Ie(eu,[["render",iu],["__scopeId","data-v-19ed63f5"]]),su=Pe({__name:"App",setup(e){return(t,n)=>(V(),G(me,null,[W(Qf),W(uc),W(Oc),W(Dc),W(Kc),W(Zc),W(ou),W(yt(Wf))],64))}});const lu=Ie(su,[["__scopeId","data-v-83e3557b"]]);function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_i(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function fu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cu(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){return du(e)||pu(e,t)||Uo(e,t)||gu()}function un(e){return uu(e)||mu(e)||Uo(e)||hu()}function uu(e){if(Array.isArray(e))return Dr(e)}function du(e){if(Array.isArray(e))return e}function mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Uo(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wi=function(){},_a={},Ho={},Bo=null,Yo={mark:wi,measure:wi};try{typeof window<"u"&&(_a=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Bo=MutationObserver),typeof performance<"u"&&(Yo=performance)}catch{}var vu=_a.navigator||{},ki=vu.userAgent,Ai=ki===void 0?"":ki,nt=_a,J=Ho,Oi=Bo,An=Yo;nt.document;var Xe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Wo=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),On,Cn,Sn,En,Pn,We="___FONT_AWESOME___",zr=16,Ko="fa",qo="svg-inline--fa",vt="data-fa-i2svg",Ur="data-fa-pseudo-element",bu="data-fa-pseudo-element-pending",xa="data-prefix",wa="data-icon",Ci="fontawesome-i2svg",yu="async",_u=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),X="classic",te="sharp",ka=[X,te];function dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var on=dn((On={},ae(On,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ae(On,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),On)),sn=dn((Cn={},ae(Cn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(Cn,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Cn)),ln=dn((Sn={},ae(Sn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Sn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Sn)),xu=dn((En={},ae(En,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(En,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),En)),wu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Xo="fa-layers-text",ku=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Au=dn((Pn={},ae(Pn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Pn,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pn)),Go=[1,2,3,4,5,6,7,8,9,10],Ou=Go.concat([11,12,13,14,15,16,17,18,19,20]),Cu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=new Set;Object.keys(sn[X]).map(fn.add.bind(fn));Object.keys(sn[te]).map(fn.add.bind(fn));var Su=[].concat(ka,un(fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(Go.map(function(e){return"".concat(e,"x")})).concat(Ou.map(function(e){return"w-".concat(e)})),Qt=nt.FontAwesomeConfig||{};function Eu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Iu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Iu.forEach(function(e){var t=ya(e,2),n=t[0],r=t[1],a=Pu(Eu(n));a!=null&&(Qt[r]=a)})}var Jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qt.familyPrefix&&(Qt.cssPrefix=Qt.familyPrefix);var jt=C(C({},Jo),Qt);jt.autoReplaceSvg||(jt.observeMutations=!1);var E={};Object.keys(Jo).forEach(function(e){Object.defineProperty(E,e,{enumerable:!0,set:function(n){jt[e]=n,Zt.forEach(function(r){return r(E)})},get:function(){return jt[e]}})});Object.defineProperty(E,"familyPrefix",{enumerable:!0,set:function(t){jt.cssPrefix=t,Zt.forEach(function(n){return n(E)})},get:function(){return jt.cssPrefix}});nt.FontAwesomeConfig=E;var Zt=[];function Tu(e){return Zt.push(e),function(){Zt.splice(Zt.indexOf(e),1)}}var Je=zr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nu(e){if(!(!e||!Xe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=Mu[Math.random()*62|0];return t}function Ht(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Aa(e){return e.classList?Ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ru(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qo(e[n]),'" ')},"").trim()}function sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Oa(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function Fu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ju(e){var t=e.transform,n=e.width,r=n===void 0?zr:n,a=e.height,i=a===void 0?zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Wo?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $u=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zo(){var e=Ko,t=qo,n=E.cssPrefix,r=E.replacementClass,a=$u;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Si=!1;function xr(){E.autoAddCss&&!Si&&(Nu(Zo()),Si=!0)}var Lu={mixout:function(){return{dom:{css:Zo,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},Ke=nt||{};Ke[We]||(Ke[We]={});Ke[We].styles||(Ke[We].styles={});Ke[We].hooks||(Ke[We].hooks={});Ke[We].shims||(Ke[We].shims=[]);var Ce=Ke[We],es=[],Du=function e(){J.removeEventListener("DOMContentLoaded",e),Kn=1,es.map(function(t){return t()})},Kn=!1;Xe&&(Kn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Kn||J.addEventListener("DOMContentLoaded",Du));function zu(e){Xe&&(Kn?setTimeout(e,0):es.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Qo(e):"<".concat(t," ").concat(Ru(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function Ei(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Uu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Hr(e){var t=Hu(e);return t.length===1?t[0].toString(16):null}function Bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pi(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,Pi(t)):Ce.styles[e]=C(C({},Ce.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var In,Tn,Nn,At=Ce.styles,Yu=Ce.shims,Wu=(In={},ae(In,X,Object.values(ln[X])),ae(In,te,Object.values(ln[te])),In),Ca=null,ts={},ns={},rs={},as={},is={},Ku=(Tn={},ae(Tn,X,Object.keys(on[X])),ae(Tn,te,Object.keys(on[te])),Tn);function qu(e){return~Su.indexOf(e)}function Vu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!qu(a)?a:null}var os=function(){var t=function(i){return wr(At,function(o,s,l){return o[l]=wr(s,i,{}),o},{})};ts=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ns=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),is=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in At||E.autoFetchSvg,r=wr(Yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rs=r.names,as=r.unicodes,Ca=lr(E.styleDefault,{family:E.familyDefault})};Tu(function(e){Ca=lr(e.styleDefault,{family:E.familyDefault})});os();function Sa(e,t){return(ts[e]||{})[t]}function Xu(e,t){return(ns[e]||{})[t]}function dt(e,t){return(is[e]||{})[t]}function ss(e){return rs[e]||{prefix:null,iconName:null}}function Gu(e){var t=as[e],n=Sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rt(){return Ca}var Ea=function(){return{prefix:null,iconName:null,rest:[]}};function lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=on[r][e],i=sn[r][e]||sn[r][a],o=e in Ce.styles?e:null;return i||o||null}var Ii=(Nn={},ae(Nn,X,Object.keys(ln[X])),ae(Nn,te,Object.keys(ln[te])),Nn);function fr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,X,"".concat(E.cssPrefix,"-").concat(X)),ae(t,te,"".concat(E.cssPrefix,"-").concat(te)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ii[X].includes(c)}))&&(s=X),(e.includes(i[te])||e.some(function(c){return Ii[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,u){var m=Vu(E.cssPrefix,u);if(At[u]?(u=Wu[s].includes(u)?xu[s][u]:u,o=u,c.prefix=u):Ku[s].indexOf(u)>-1?(o=u,c.prefix=lr(u,{family:s})):m?c.iconName=m:u!==E.replacementClass&&u!==i[X]&&u!==i[te]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?ss(c.iconName):{},y=dt(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||y||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!At.far&&At.fas&&!E.autoFetchSvg&&(c.prefix="fas")}return c},Ea());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(At.fass||E.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rt()||"fas"),l}var Ju=function(){function e(){fu(this,e),this.definitions={}}return cu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=ln[X][s];l&&Br(l,o[s]),os()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ti=[],Ot={},Tt={},Qu=Object.keys(Tt);function Zu(e,t){var n=t.mixoutsTo;return Ti=e,Ot={},Object.keys(Tt).forEach(function(r){Qu.indexOf(r)===-1&&delete Tt[r]}),Ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ot[o]||(Ot[o]=[]),Ot[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ot[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ot[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Wr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rt();if(t)return t=dt(n,t)||t,Ei(ls.definitions,n,t)||Ei(Ce.styles,n,t)}var ls=new Ju,ed=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,bt("noAuto")},td={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(bt("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,zu(function(){rd({autoReplaceSvgRoot:n}),bt("watch",t)})}},nd={icon:function(t){if(t===null)return null;if(Wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=lr(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(E.cssPrefix,"-"))>-1||t.match(wu))){var a=fr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rt(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rt();return{prefix:i,iconName:dt(i,t)||t}}}},be={noAuto:ed,config:E,dom:td,parse:nd,library:ls,findIconDefinition:Wr,toHtml:mn},rd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ce.styles).length>0||E.autoFetchSvg)&&Xe&&E.autoReplaceSvg&&be.dom.i2svg({node:r})};function cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Xe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ad(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=sr(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function id(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(E.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,j=r.found?r:n,I=j.width,D=j.height,k=a==="fak",A=[E.replacementClass,i?"".concat(E.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),R={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(D)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/D*16*.0625,"em")}:{};y&&(R.attributes[vt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||cn())},children:[l]}),delete R.attributes.title);var B=C(C({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},P),m.styles)}),ie=r.found&&n.found?qe("generateAbstractMask",B)||{children:[],attributes:{}}:qe("generateAbstractIcon",B)||{children:[],attributes:{}},oe=ie.children,ye=ie.attributes;return B.children=oe,B.attributes=ye,s?id(B):ad(B)}function Ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[vt]="");var u=C({},o.styles);Oa(a)&&(u.transform=ju({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=sr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function od(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=sr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Ce.styles;function Kr(e){var t=e[0],n=e[1],r=e.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var sd={found:!1,width:512,height:512};function ld(e,t){!Vo&&!E.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qr(e,t){var n=t;return t==="fa"&&E.styleDefault!==null&&(t=rt()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kr[t]&&kr[t][e]){var o=kr[t][e];return r(Kr(o))}ld(e,t),r(C(C({},sd),{},{icon:E.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Mi=function(){},Vr=E.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Mi,measure:Mi},Vt='FA "6.5.0"',fd=function(t){return Vr.mark("".concat(Vt," ").concat(t," begins")),function(){return fs(t)}},fs=function(t){Vr.mark("".concat(Vt," ").concat(t," ends")),Vr.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},Ia={begin:fd,end:fs},Ln=function(){};function Ri(e){var t=e.getAttribute?e.getAttribute(vt):null;return typeof t=="string"}function cd(e){var t=e.getAttribute?e.getAttribute(xa):null,n=e.getAttribute?e.getAttribute(wa):null;return t&&n}function ud(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(E.replacementClass)}function dd(){if(E.autoReplaceSvg===!0)return Dn.replace;var e=Dn[E.autoReplaceSvg];return e||Dn.replace}function md(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function pd(e){return J.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?md:pd:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function hd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Dn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(vt)===null&&E.keepOriginalSource){var r=J.createComment(hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Aa(n).indexOf(E.replacementClass))return Dn.replace(t);var a=new RegExp("".concat(E.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===E.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=o}};function Fi(e){e()}function us(e,t){var n=typeof t=="function"?t:Ln;if(e.length===0)n();else{var r=Fi;E.mutateApproach===yu&&(r=nt.requestAnimationFrame||Fi),r(function(){var a=dd(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Ta=!1;function ds(){Ta=!0}function Xr(){Ta=!1}var qn=null;function ji(e){if(Oi&&E.observeMutations){var t=e.treeCallback,n=t===void 0?Ln:t,r=e.nodeCallback,a=r===void 0?Ln:r,i=e.pseudoElementsCallback,o=i===void 0?Ln:i,s=e.observeMutationsRoot,l=s===void 0?J:s;qn=new Oi(function(c){if(!Ta){var u=rt();Ht(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ri(m.addedNodes[0])&&(E.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&E.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ri(m.target)&&~Cu.indexOf(m.attributeName))if(m.attributeName==="class"&&cd(m.target)){var h=fr(Aa(m.target)),y=h.prefix,j=h.iconName;m.target.setAttribute(xa,y||u),j&&m.target.setAttribute(wa,j)}else ud(m.target)&&a(m.target)})}}),Xe&&qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gd(){qn&&qn.disconnect()}function vd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function bd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=fr(Aa(e));return a.prefix||(a.prefix=rt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Xu(a.prefix,e.innerText)||Sa(a.prefix,Hr(e.innerText))),!a.iconName&&E.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yd(e){var t=Ht(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return E.autoA11y&&(n?t["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(r||cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function _d(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bd(e),r=n.iconName,a=n.prefix,i=n.rest,o=yd(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?vd(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xd=Ce.styles;function ms(e){var t=E.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(Xo)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var at=new Set;ka.map(function(e){at.add("fa-".concat(e))});Object.keys(on[X]).map(at.add.bind(at));Object.keys(on[te]).map(at.add.bind(at));at=un(at);function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Ci,"-").concat(m))},a=function(m){return n.remove("".concat(Ci,"-").concat(m))},i=E.autoFetchSvg?at:ka.map(function(u){return"fa-".concat(u)}).concat(Object.keys(xd));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(vt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(vt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ht(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=s.reduce(function(u,m){try{var h=ms(m);h&&u.push(h)}catch(y){Vo||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){us(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ms(e).then(function(n){n&&us([n],t)})}function kd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Wr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Wr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var Ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,y=n.titleId,j=y===void 0?null:y,I=n.classes,D=I===void 0?[]:I,k=n.attributes,A=k===void 0?{}:k,R=n.styles,P=R===void 0?{}:R;if(t){var B=t.prefix,ie=t.iconName,oe=t.icon;return cr(C({type:"icon"},t),function(){return bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),E.autoA11y&&(h?A["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(j||cn()):(A["aria-hidden"]="true",A.focusable="false")),Pa({icons:{main:Kr(oe),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ie,transform:C(C({},Le),a),symbol:o,title:h,maskId:u,titleId:j,extra:{attributes:A,styles:P,classes:D}})})}},Od={mixout:function(){return{icon:kd(Ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Li,n.nodeCallback=wd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Li(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,j){Promise.all([qr(a,s),u.iconName?qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var D=ya(I,2),k=D[0],A=D[1];y([n,Pa({icons:{main:k,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=sr(s);l.length>0&&(a.style=l);var c;return Oa(o)&&(c=qe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Cd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return cr({type:"layer"},function(){bt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(E.cssPrefix,"-layers")].concat(un(i)).join(" ")},children:o}]})}}}},Sd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return cr({type:"counter",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),od({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(E.cssPrefix,"-layers-counter")].concat(un(s))}})})}}}},Ed={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return cr({type:"text",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),Ni({content:n,transform:C(C({},Le),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(E.cssPrefix,"-layers-text")].concat(un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Wo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return E.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ni({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Pd=new RegExp('"',"ug"),Di=[1105920,1112319];function Id(e){var t=e.replace(Pd,""),n=Bu(t,0),r=n>=Di[0]&&n<=Di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Hr(a?t[0]:t),isSecondary:r||a}}function zi(e,t){var n="".concat(bu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ht(e.children),o=i.filter(function(oe){return oe.getAttribute(Ur)===t})[0],s=nt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ku),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sn[h][l[2].toLowerCase()]:Au[h][c],j=Id(m),I=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),A=Sa(y,I),R=A;if(k){var P=Gu(I);P.iconName&&P.prefix&&(A=P.iconName,y=P.prefix)}if(A&&!D&&(!o||o.getAttribute(xa)!==y||o.getAttribute(wa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var B=_d(),ie=B.extra;ie.attributes[Ur]=t,qr(A,y).then(function(oe){var ye=Pa(C(C({},B),{},{icons:{main:oe,mask:Ea()},prefix:y,iconName:R,extra:ie,watchable:!0})),_e=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=ye.map(function(De){return mn(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Td(e){return Promise.all([zi(e,"::before"),zi(e,"::after")])}function Nd(e){return e.parentNode!==document.head&&!~_u.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ui(e){if(Xe)return new Promise(function(t,n){var r=Ht(e.querySelectorAll("*")).filter(Nd).map(Td),a=Ia.begin("searchPseudoElements");ds(),Promise.all(r).then(function(){a(),Xr(),t()}).catch(function(){a(),Xr(),n()})})}var Md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;E.searchPseudoElements&&Ui(a)}}},Hi=!1,Rd={mixout:function(){return{dom:{unwatch:function(){ds(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){ji(Yr("mutationObserverCallbacks",{}))},noAuto:function(){gd()},watch:function(n){var r=n.observeMutationsRoot;Hi?Xr():ji(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Fd={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:C({},y.outer),children:[{tag:"g",attributes:C({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),y.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function jd(e){return e.tag==="g"?e.children:[e]}var $d={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?fr(a.split(" ").map(function(o){return o.trim()})):Ea();return i.prefix||(i.prefix=rt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,y=Fu({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:C(C({},Ar),{},{fill:"white"})},I=u.children?{children:u.children.map(Yi)}:{},D={tag:"g",attributes:C({},y.inner),children:[Yi(C({tag:u.tag,attributes:C(C({},u.attributes),y.path)},I))]},k={tag:"g",attributes:C({},y.outer),children:[D]},A="mask-".concat(s||cn()),R="clip-".concat(s||cn()),P={tag:"mask",attributes:C(C({},Ar),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:jd(h)},P]};return r.push(B,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(A,")")},Ar)}),{children:r,attributes:a}}}},Ld={provides:function(t){var n=!1;nt.matchMedia&&(n=nt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},zd=[Lu,Od,Cd,Sd,Ed,Md,Rd,Fd,$d,Ld,Dd];Zu(zd,{mixoutsTo:be});be.noAuto;be.config;var Ud=be.library;be.dom;var Gr=be.parse;be.findIconDefinition;be.toHtml;var Hd=be.icon;be.layer;be.text;be.counter;function Wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function pe(e,t,n){return t=Kd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yd(e,t){if(e==null)return{};var n=Bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kd(e){var t=Wd(e,"string");return typeof t=="symbol"?t:String(t)}var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ps={exports:{}};(function(e){(function(t){var n=function(k,A,R){if(!c(A)||m(A)||h(A)||y(A)||l(A))return A;var P,B=0,ie=0;if(u(A))for(P=[],ie=A.length;B<ie;B++)P.push(n(k,A[B],R));else{P={};for(var oe in A)Object.prototype.hasOwnProperty.call(A,oe)&&(P[k(oe,R)]=n(k,A[oe],R))}return P},r=function(k,A){A=A||{};var R=A.separator||"_",P=A.split||/(?=[A-Z])/;return k.split(P).join(R)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(k,A){return r(k,A).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},h=function(k){return s.call(k)=="[object RegExp]"},y=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},I=function(k,A){var R=A&&"process"in A?A.process:A;return typeof R!="function"?k:function(P,B){return R(P,k,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,A){return n(I(a,A),k)},decamelizeKeys:function(k,A){return n(I(o,A),k,A)},pascalizeKeys:function(k,A){return n(I(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(qd)})(ps);var Vd=ps.exports,Xd=["class","style"];function Gd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Jd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return hs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Jd(u);break;case"style":l.style=Gd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Yd(n,Xd);return Do(e.tag,Be(Be(Be({},t),{},{class:a.class,style:Be(Be({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Qd(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Or(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function Zd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ki(e){if(e&&Vn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gr.icon)return Gr.icon(e);if(e===null)return null;if(Vn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var em=Pe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ke(function(){return Ki(t.icon)}),i=ke(function(){return Or("classes",Zd(t))}),o=ke(function(){return Or("transform",typeof t.transform=="string"?Gr.transform(t.transform):t.transform)}),s=ke(function(){return Or("mask",Ki(t.mask))}),l=ke(function(){return Hd(a.value,Be(Be(Be(Be({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Xt(l,function(u){if(!u)return Qd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ke(function(){return l.value?hs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),tm={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};Ud.add(tm);Df(lu).component("font-awesome-icon",em).mount("#app");
