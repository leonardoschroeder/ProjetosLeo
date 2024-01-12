(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Qr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const G={},Ae=[],xt=()=>{},xs=()=>!1,Yn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ta=t=>t.startsWith("onUpdate:"),ot=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ws=Object.prototype.hasOwnProperty,B=(t,e)=>ws.call(t,e),F=Array.isArray,Oe=t=>nn(t)==="[object Map]",Wn=t=>nn(t)==="[object Set]",Da=t=>nn(t)==="[object Date]",j=t=>typeof t=="function",nt=t=>typeof t=="string",qt=t=>typeof t=="symbol",K=t=>t!==null&&typeof t=="object",Yi=t=>(K(t)||j(t))&&j(t.then)&&j(t.catch),Wi=Object.prototype.toString,nn=t=>Wi.call(t),ks=t=>nn(t).slice(8,-1),Ki=t=>nn(t)==="[object Object]",na=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,On=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Es=/-(\w)/g,Te=Kn(t=>t.replace(Es,(e,n)=>n?n.toUpperCase():"")),As=/\B([A-Z])/g,Le=Kn(t=>t.replace(As,"-$1").toLowerCase()),Gi=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=Kn(t=>t?`on${Gi(t)}`:""),Xt=(t,e)=>!Object.is(t,e),Sn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let za;const Ji=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?Ps(r):ra(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||K(t))return t}const Os=/;(?![^(]*\))/g,Ss=/:([^]+)/,Cs=/\/\*[^]*?\*\//g;function Ps(t){const e={};return t.replace(Cs,"").split(Os).forEach(n=>{if(n){const r=n.split(Ss);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(nt(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(K(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ts=Qr(Is);function qi(t){return!!t||t===""}function Ns(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gn(t[r],e[r]);return n}function Gn(t,e){if(t===e)return!0;let n=Da(t),r=Da(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=qt(t),r=qt(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Ns(t,e):!1;if(n=K(t),r=K(e),n||r){if(!n||!r)return!1;const a=Object.keys(t).length,i=Object.keys(e).length;if(a!==i)return!1;for(const o in t){const s=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(s&&!l||!s&&l||!Gn(t[o],e[o]))return!1}}return String(t)===String(e)}function Xi(t,e){return t.findIndex(n=>Gn(n,e))}const we=t=>nt(t)?t:t==null?"":F(t)||K(t)&&(t.toString===Wi||!j(t.toString))?JSON.stringify(t,Zi,2):String(t),Zi=(t,e)=>e&&e.__v_isRef?Zi(t,e.value):Oe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[dr(r,i)+" =>"]=a,n),{})}:Wn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dr(n))}:qt(e)?dr(e):K(e)&&!F(e)&&!Ki(e)?String(e):e,dr=(t,e="")=>{var n;return qt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Tt;class Ms{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Rs(t,e=Tt){e&&e.active&&e.effects.push(t)}let de;class ia{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Rs(this,a)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,be();for(const e of this.deps)if(e.computed&&(Fs(e.computed),this._dirtyLevel>=2))break;ye(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Gt,n=de;try{return Gt=!0,de=this,this._runnings++,Ua(this),this.fn()}finally{Ha(this),this._runnings--,de=n,Gt=e}}stop(){var e;this.active&&(Ua(this),Ha(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Fs(t){return t.value}function Ua(t){t._trackId++,t._depsLength=0}function Ha(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Qi(t.deps[e],t);t.deps.length=t._depsLength}}function Qi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Gt=!0,Sr=0;const to=[];function be(){to.push(Gt),Gt=!1}function ye(){const t=to.pop();Gt=t===void 0?!0:t}function oa(){Sr++}function sa(){for(Sr--;!Sr&&Cr.length;)Cr.shift()()}function eo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Qi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Cr=[];function no(t,e,n){oa();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const a=r._dirtyLevel;r._dirtyLevel=e,a===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Cr.push(r.scheduler))}sa()}const ro=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Pr=new WeakMap,me=Symbol(""),Ir=Symbol("");function pt(t,e,n){if(Gt&&de){let r=Pr.get(t);r||Pr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=ro(()=>r.delete(n))),eo(de,a)}}function jt(t,e,n,r,a,i){const o=Pr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&F(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!qt(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":F(t)?na(n)&&s.push(o.get("length")):(s.push(o.get(me)),Oe(t)&&s.push(o.get(Ir)));break;case"delete":F(t)||(s.push(o.get(me)),Oe(t)&&s.push(o.get(Ir)));break;case"set":Oe(t)&&s.push(o.get(me));break}oa();for(const l of s)l&&no(l,3);sa()}const Ls=Qr("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qt)),Ba=$s();function $s(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){be(),oa();const r=V(this)[e].apply(this,n);return sa(),ye(),r}}),t}function js(t){const e=V(this);return pt(e,"has",t),e.hasOwnProperty(t)}class io{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Xs:fo:i?lo:so).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!a){if(o&&B(Ba,n))return Reflect.get(Ba,n,r);if(n==="hasOwnProperty")return js}const s=Reflect.get(e,n,r);return(qt(n)?ao.has(n):Ls(n))||(a||pt(e,"get",n),i)?s:ht(s)?o&&na(n)?s:s.value:K(s)?a?co(s):ca(s):s}}class oo extends io{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Ne(i);if(!Ln(r)&&!Ne(r)&&(i=V(i),r=V(r)),!F(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const o=F(e)&&na(n)?Number(n)<e.length:B(e,n),s=Reflect.set(e,n,r,a);return e===V(a)&&(o?Xt(r,i)&&jt(e,"set",n,r):jt(e,"add",n,r)),s}deleteProperty(e,n){const r=B(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&jt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!qt(n)||!ao.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",F(e)?"length":me),Reflect.ownKeys(e)}}class Ds extends io{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zs=new oo,Us=new Ds,Hs=new oo(!0),la=t=>t,Jn=t=>Reflect.getPrototypeOf(t);function un(t,e,n=!1,r=!1){t=t.__v_raw;const a=V(t),i=V(e);n||(Xt(e,i)&&pt(a,"get",e),pt(a,"get",i));const{has:o}=Jn(a),s=r?la:n?da:Ke;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function dn(t,e=!1){const n=this.__v_raw,r=V(n),a=V(t);return e||(Xt(t,a)&&pt(r,"has",t),pt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function mn(t,e=!1){return t=t.__v_raw,!e&&pt(V(t),"iterate",me),Reflect.get(t,"size",t)}function Va(t){t=V(t);const e=V(this);return Jn(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Ya(t,e){e=V(e);const n=V(this),{has:r,get:a}=Jn(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Xt(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function Wa(t){const e=V(this),{has:n,get:r}=Jn(e);let a=n.call(e,t);a||(t=V(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&jt(e,"delete",t,void 0),i}function Ka(){const t=V(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function pn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=e?la:t?da:Ke;return!t&&pt(s,"iterate",me),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(t,e,n){return function(...r){const a=this.__v_raw,i=V(a),o=Oe(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?la:e?da:Ke;return!e&&pt(i,"iterate",l?Ir:me),{next(){const{value:m,done:b}=c.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bs(){const t={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:Va,set:Ya,delete:Wa,clear:Ka,forEach:pn(!1,!1)},e={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:Va,set:Ya,delete:Wa,clear:Ka,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),e[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[t,n,e,r]}const[Vs,Ys,Ws,Ks]=Bs();function fa(t,e){const n=e?t?Ks:Ws:t?Ys:Vs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Gs={get:fa(!1,!1)},Js={get:fa(!1,!0)},qs={get:fa(!0,!1)},so=new WeakMap,lo=new WeakMap,fo=new WeakMap,Xs=new WeakMap;function Zs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qs(t){return t.__v_skip||!Object.isExtensible(t)?0:Zs(ks(t))}function ca(t){return Ne(t)?t:ua(t,!1,zs,Gs,so)}function tl(t){return ua(t,!1,Hs,Js,lo)}function co(t){return ua(t,!0,Us,qs,fo)}function ua(t,e,n,r,a){if(!K(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Qs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Se(t){return Ne(t)?Se(t.__v_raw):!!(t&&t.__v_isReactive)}function Ne(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function uo(t){return Se(t)||Ne(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function mo(t){return Fn(t,"__v_skip",!0),t}const Ke=t=>K(t)?ca(t):t,da=t=>K(t)?co(t):t;class po{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ia(()=>e(this._value),()=>Tr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=V(this);return ho(e),(!e._cacheable||e.effect.dirty)&&Xt(e._value,e._value=e.effect.run())&&Tr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function el(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=xt):(r=t.get,a=t.set),new po(r,a,i||!a,n)}function ho(t){Gt&&de&&(t=V(t),eo(de,t.dep||(t.dep=ro(()=>t.dep=void 0,t instanceof po?t:void 0))))}function Tr(t,e=3,n){t=V(t);const r=t.dep;r&&no(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function re(t){return nl(t,!1)}function nl(t,e){return ht(t)?t:new rl(t,e)}class rl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Ke(e)}get value(){return ho(this),this._value}set value(e){const n=this.__v_isShallow||Ln(e)||Ne(e);e=n?e:V(e),Xt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ke(e),Tr(this,3))}}function al(t){return ht(t)?t.value:t}const il={get:(t,e,n)=>al(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ht(a)&&!ht(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function go(t){return Se(t)?t:new Proxy(t,il)}function Jt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){qn(i,e,n)}return a}function St(t,e,n,r){if(j(t)){const i=Jt(t,e,n,r);return i&&Yi(i)&&i.catch(o=>{qn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(St(t[i],e,n,r));return a}function qn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}ol(t,n,a,r)}function ol(t,e,n,r=!0){console.error(t)}let Ge=!1,Nr=!1;const st=[];let Mt=0;const Ce=[];let Lt=null,se=0;const vo=Promise.resolve();let ma=null;function sl(t){const e=ma||vo;return t?e.then(this?t.bind(this):t):e}function ll(t){let e=Mt+1,n=st.length;for(;e<n;){const r=e+n>>>1,a=st[r],i=Je(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function pa(t){(!st.length||!st.includes(t,Ge&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?st.push(t):st.splice(ll(t.id),0,t),bo())}function bo(){!Ge&&!Nr&&(Nr=!0,ma=vo.then(_o))}function fl(t){const e=st.indexOf(t);e>Mt&&st.splice(e,1)}function cl(t){F(t)?Ce.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?se+1:se))&&Ce.push(t),bo()}function Ga(t,e,n=Ge?Mt+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function yo(t){if(Ce.length){const e=[...new Set(Ce)];if(Ce.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,r)=>Je(n)-Je(r)),se=0;se<Lt.length;se++)Lt[se]();Lt=null,se=0}}const Je=t=>t.id==null?1/0:t.id,ul=(t,e)=>{const n=Je(t)-Je(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _o(t){Nr=!1,Ge=!0,st.sort(ul);try{for(Mt=0;Mt<st.length;Mt++){const e=st[Mt];e&&e.active!==!1&&Jt(e,null,14)}}finally{Mt=0,st.length=0,yo(),Ge=!1,ma=null,(st.length||Ce.length)&&_o()}}function dl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||G;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||G;b&&(a=n.map(O=>nt(O)?O.trim():O)),m&&(a=n.map(Or))}let s,l=r[s=ur(e)]||r[s=ur(Te(e))];!l&&i&&(l=r[s=ur(Le(e))]),l&&St(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,St(c,t,6,a)}}function xo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!j(t)){const l=c=>{const d=xo(c,e,!0);d&&(s=!0,ot(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(K(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):ot(o,i),K(t)&&r.set(t,o),o)}function Xn(t,e){return!t||!Yn(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,Le(e))||B(t,e))}let Et=null,Zn=null;function $n(t){const e=Et;return Et=t,Zn=t&&t.type.__scopeId||null,e}function ml(t){Zn=t}function pl(){Zn=null}function hl(t,e=Et,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ai(-1);const i=$n(e);let o;try{o=t(...a)}finally{$n(i),r._d&&ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:b,setupState:O,ctx:$,inheritAttrs:M}=t;let H,S;const _=$n(t);try{if(n.shapeFlag&4){const v=a||r,E=v;H=Nt(d.call(E,v,m,i,O,b,$)),S=l}else{const v=e;H=Nt(v.length>1?v(i,{attrs:l,slots:s,emit:c}):v(i,null)),S=e.props?l:gl(l)}}catch(v){Ve.length=0,qn(v,t,1),H=lt(he)}let y=H;if(S&&M!==!1){const v=Object.keys(S),{shapeFlag:E}=y;v.length&&E&7&&(o&&v.some(ta)&&(S=vl(S,o)),y=Me(y,S))}return n.dirs&&(y=Me(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),H=y,$n(_),H}const gl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yn(n))&&((e||(e={}))[n]=t[n]);return e},vl=(t,e)=>{const n={};for(const r in t)(!ta(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Xn(c,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Xn(n,i))return!0}return!1}function yl({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const _l=Symbol.for("v-ndc"),xl=t=>t.__isSuspense;function wl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):cl(t)}const kl=Symbol.for("v-scx"),El=()=>In(kl),gn={};function Cn(t,e,n){return wo(t,e,n)}function wo(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=G){if(e&&i){const E=e;e=(...Z)=>{E(...Z),v()}}const l=ut,c=E=>r===!0?E:fe(E,r===!1?1:void 0);let d,m=!1,b=!1;if(ht(t)?(d=()=>t.value,m=Ln(t)):Se(t)?(d=()=>c(t),m=!0):F(t)?(b=!0,m=t.some(E=>Se(E)||Ln(E)),d=()=>t.map(E=>{if(ht(E))return E.value;if(Se(E))return c(E);if(j(E))return Jt(E,l,2)})):j(t)?e?d=()=>Jt(t,l,2):d=()=>(O&&O(),St(t,l,3,[$])):d=xt,e&&r){const E=d;d=()=>fe(E())}let O,$=E=>{O=y.onStop=()=>{Jt(E,l,4),O=y.onStop=void 0}},M;if(nr)if($=xt,e?n&&St(e,l,3,[d(),b?[]:void 0,$]):d(),a==="sync"){const E=El();M=E.__watcherHandles||(E.__watcherHandles=[])}else return xt;let H=b?new Array(t.length).fill(gn):gn;const S=()=>{if(!(!y.active||!y.dirty))if(e){const E=y.run();(r||m||(b?E.some((Z,D)=>Xt(Z,H[D])):Xt(E,H)))&&(O&&O(),St(e,l,3,[E,H===gn?void 0:b&&H[0]===gn?[]:H,$]),H=E)}else y.run()};S.allowRecurse=!!e;let _;a==="sync"?_=S:a==="post"?_=()=>mt(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),_=()=>pa(S));const y=new ia(d,xt,_),v=()=>{y.stop(),l&&l.scope&&ea(l.scope.effects,y)};return e?n?S():H=y.run():a==="post"?mt(y.run.bind(y),l&&l.suspense):y.run(),M&&M.push(v),v}function Al(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?ko(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=ut;Re(this);const s=wo(a,i.bind(r),n);return o?Re(o):pe(),s}function ko(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function fe(t,e,n=0,r){if(!K(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))fe(t.value,e,n,r);else if(F(t))for(let a=0;a<t.length;a++)fe(t[a],e,n,r);else if(Wn(t)||Oe(t))t.forEach(a=>{fe(a,e,n,r)});else if(Ki(t))for(const a in t)fe(t[a],e,n,r);return t}function pr(t,e){const n=Et;if(n===null)return t;const r=rr(n)||n.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,l,c=G]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&fe(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function ae(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(be(),St(l,n,8,[t.el,s,t,e]),ye())}}/*! #__NO_SIDE_EFFECTS__ */function Ol(t,e){return j(t)?ot({name:t.name},e,{setup:t}):t}const Pn=t=>!!t.type.__asyncLoader,Eo=t=>t.type.__isKeepAlive;function Sl(t,e){Ao(t,"a",e)}function Cl(t,e){Ao(t,"da",e)}function Ao(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Qn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Eo(a.parent.vnode)&&Pl(r,e,n,a),a=a.parent}}function Pl(t,e,n,r){const a=Qn(e,t,r,!0);So(()=>{ea(r[e],a)},n)}function Qn(t,e,n=ut,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;be(),Re(n);const s=St(e,n,t,o);return pe(),ye(),s});return r?a.unshift(i):a.push(i),i}}const Ht=t=>(e,n=ut)=>(!nr||t==="sp")&&Qn(t,(...r)=>e(...r),n),Il=Ht("bm"),Oo=Ht("m"),Tl=Ht("bu"),Nl=Ht("u"),Ml=Ht("bum"),So=Ht("um"),Rl=Ht("sp"),Fl=Ht("rtg"),Ll=Ht("rtc");function $l(t,e=ut){Qn("ec",t,e)}function hr(t,e,n,r){let a;const i=n&&n[r];if(F(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(K(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Mr=t=>t?Do(t)?rr(t)||t.proxy:Mr(t.parent):null,Be=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,pa(t.update)}),$nextTick:t=>t.n||(t.n=sl.bind(t.proxy)),$watch:t=>Al.bind(t)}),gr=(t,e)=>t!==G&&!t.__isScriptSetup&&B(t,e),jl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const O=o[e];if(O!==void 0)switch(O){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(gr(r,e))return o[e]=1,r[e];if(a!==G&&B(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&B(c,e))return o[e]=3,i[e];if(n!==G&&B(n,e))return o[e]=4,n[e];Rr&&(o[e]=0)}}const d=Be[e];let m,b;if(d)return e==="$attrs"&&pt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==G&&B(n,e))return o[e]=4,n[e];if(b=l.config.globalProperties,B(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return gr(a,e)?(a[e]=n,!0):r!==G&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==G&&B(t,o)||gr(e,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Be,o)||B(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qa(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rr=!0;function Dl(t){const e=ha(t),n=t.proxy,r=t.ctx;Rr=!1,e.beforeCreate&&Xa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:$,activated:M,deactivated:H,beforeDestroy:S,beforeUnmount:_,destroyed:y,unmounted:v,render:E,renderTracked:Z,renderTriggered:D,errorCaptured:Q,serverPrefetch:it,expose:wt,inheritAttrs:je,components:sn,directives:ln,filters:lr}=e;if(c&&zl(c,r,null),o)for(const tt in o){const W=o[tt];j(W)&&(r[tt]=W.bind(n))}if(a){const tt=a.call(n,n);K(tt)&&(t.data=ca(tt))}if(Rr=!0,i)for(const tt in i){const W=i[tt],ee=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):xt,fn=!j(W)&&j(W.set)?W.set.bind(n):xt,ne=oe({get:ee,set:fn});Object.defineProperty(r,tt,{enumerable:!0,configurable:!0,get:()=>ne.value,set:Ct=>ne.value=Ct})}if(s)for(const tt in s)Co(s[tt],r,n,tt);if(l){const tt=j(l)?l.call(n):l;Reflect.ownKeys(tt).forEach(W=>{Wl(W,tt[W])})}d&&Xa(d,t,"c");function ft(tt,W){F(W)?W.forEach(ee=>tt(ee.bind(n))):W&&tt(W.bind(n))}if(ft(Il,m),ft(Oo,b),ft(Tl,O),ft(Nl,$),ft(Sl,M),ft(Cl,H),ft($l,Q),ft(Ll,Z),ft(Fl,D),ft(Ml,_),ft(So,v),ft(Rl,it),F(wt))if(wt.length){const tt=t.exposed||(t.exposed={});wt.forEach(W=>{Object.defineProperty(tt,W,{get:()=>n[W],set:ee=>n[W]=ee})})}else t.exposed||(t.exposed={});E&&t.render===xt&&(t.render=E),je!=null&&(t.inheritAttrs=je),sn&&(t.components=sn),ln&&(t.directives=ln)}function zl(t,e,n=xt){F(t)&&(t=Fr(t));for(const r in t){const a=t[r];let i;K(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Xa(t,e,n){St(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Co(t,e,n,r){const a=r.includes(".")?ko(n,r):()=>n[r];if(nt(t)){const i=e[t];j(i)&&Cn(a,i)}else if(j(t))Cn(a,t.bind(n));else if(K(t))if(F(t))t.forEach(i=>Co(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Cn(a,i,t)}}function ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,e,o)),K(e)&&i.set(e,l),l}function jn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&jn(t,i,n,!0),a&&a.forEach(o=>jn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ul[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ul={data:Za,props:Qa,emits:Qa,methods:Ue,computed:Ue,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Ue,directives:Ue,watch:Bl,provide:Za,inject:Hl};function Za(t,e){return e?t?function(){return ot(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Hl(t,e){return Ue(Fr(t),Fr(e))}function Fr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Ue(t,e){return t?ot(Object.create(null),t,e):e}function Qa(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ot(Object.create(null),qa(t),qa(e??{})):e}function Bl(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function Po(){return{app:null,config:{isNativeTag:xs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Yl(t,e){return function(r,a=null){j(r)||(r=ot({},r)),a!=null&&!K(a)&&(a=null);const i=Po(),o=new WeakSet;let s=!1;const l=i.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const b=lt(r,a);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(b,c):t(b,c,m),s=!0,l._container=c,c.__vue_app__=l,rr(b.component)||b.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Dn=l;try{return c()}finally{Dn=null}}};return l}}let Dn=null;function Wl(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=ut||Et;if(r||Dn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Kl(t,e,n,r=!1){const a={},i={};Fn(i,er,1),t.propsDefaults=Object.create(null),Io(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:tl(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Gl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=V(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Xn(t.emitsOptions,b))continue;const O=e[b];if(l)if(B(i,b))O!==i[b]&&(i[b]=O,c=!0);else{const $=Te(b);a[$]=Lr(l,s,$,O,t,!1)}else O!==i[b]&&(i[b]=O,c=!0)}}}else{Io(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!B(e,m)&&((d=Le(m))===m||!B(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Lr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!B(e,m))&&(delete i[m],c=!0)}c&&jt(t,"set","$attrs")}function Io(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(On(l))continue;const c=e[l];let d;a&&B(a,d=Te(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||G;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Lr(a,l,m,c[m],t,!B(c,m))}}return o}function Lr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Re(a),r=c[n]=l.call(null,e),pe())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Le(n))&&(r=!0))}return r}function To(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!j(t)){const d=m=>{l=!0;const[b,O]=To(m,e,!0);ot(o,b),O&&s.push(...O)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return K(t)&&r.set(t,Ae),Ae;if(F(i))for(let d=0;d<i.length;d++){const m=Te(i[d]);ti(m)&&(o[m]=G)}else if(i)for(const d in i){const m=Te(d);if(ti(m)){const b=i[d],O=o[m]=F(b)||j(b)?{type:b}:ot({},b);if(O){const $=ri(Boolean,O.type),M=ri(String,O.type);O[0]=$>-1,O[1]=M<0||$<M,($>-1||B(O,"default"))&&s.push(m)}}}const c=[o,s];return K(t)&&r.set(t,c),c}function ti(t){return t[0]!=="$"}function ei(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ni(t,e){return ei(t)===ei(e)}function ri(t,e){return F(e)?e.findIndex(n=>ni(n,t)):j(e)&&ni(e,t)?0:-1}const No=t=>t[0]==="_"||t==="$stable",ga=t=>F(t)?t.map(Nt):[Nt(t)],Jl=(t,e,n)=>{if(e._n)return e;const r=hl((...a)=>ga(e(...a)),n);return r._c=!1,r},Mo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(No(a))continue;const i=t[a];if(j(i))e[a]=Jl(a,i,r);else if(i!=null){const o=ga(i);e[a]=()=>o}}},Ro=(t,e)=>{const n=ga(e);t.slots.default=()=>n},ql=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),Fn(e,"_",n)):Mo(e,t.slots={})}else t.slots={},e&&Ro(t,e);Fn(t.slots,er,1)},Xl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=G;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(ot(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Mo(e,a)),o=e}else e&&(Ro(t,e),o={default:1});if(i)for(const s in a)!No(s)&&o[s]==null&&delete a[s]};function $r(t,e,n,r,a=!1){if(F(t)){t.forEach((b,O)=>$r(b,e&&(F(e)?e[O]:e),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(d[c]=null,B(m,c)&&(m[c]=null)):ht(c)&&(c.value=null)),j(l))Jt(l,s,12,[o,d]);else{const b=nt(l),O=ht(l);if(b||O){const $=()=>{if(t.f){const M=b?B(m,l)?m[l]:d[l]:l.value;a?F(M)&&ea(M,i):F(M)?M.includes(i)||M.push(i):b?(d[l]=[i],B(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else b?(d[l]=o,B(m,l)&&(m[l]=o)):O&&(l.value=o,t.k&&(d[t.k]=o))};o?($.id=-1,mt($,n)):$()}}}const mt=wl;function Zl(t){return Ql(t)}function Ql(t,e){const n=Ji();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=xt,insertStaticContent:$}=t,M=(f,u,p,h=null,g=null,k=null,C=void 0,w=null,A=!!u.dynamicChildren)=>{if(f===u)return;f&&!ze(f,u)&&(h=cn(f),Ct(f,g,k,!0),f=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:x,ref:I,shapeFlag:R}=u;switch(x){case tr:H(f,u,p,h);break;case he:S(f,u,p,h);break;case Tn:f==null&&_(u,p,h,C);break;case bt:sn(f,u,p,h,g,k,C,w,A);break;default:R&1?E(f,u,p,h,g,k,C,w,A):R&6?ln(f,u,p,h,g,k,C,w,A):(R&64||R&128)&&x.process(f,u,p,h,g,k,C,w,A,_e)}I!=null&&g&&$r(I,f&&f.ref,k,u||f,!u)},H=(f,u,p,h)=>{if(f==null)r(u.el=s(u.children),p,h);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},S=(f,u,p,h)=>{f==null?r(u.el=l(u.children||""),p,h):u.el=f.el},_=(f,u,p,h)=>{[f.el,f.anchor]=$(f.children,u,p,h,f.el,f.anchor)},y=({el:f,anchor:u},p,h)=>{let g;for(;f&&f!==u;)g=b(f),r(f,p,h),f=g;r(u,p,h)},v=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=b(f),a(f),f=p;a(u)},E=(f,u,p,h,g,k,C,w,A)=>{u.type==="svg"?C="svg":u.type==="math"&&(C="mathml"),f==null?Z(u,p,h,g,k,C,w,A):it(f,u,g,k,C,w,A)},Z=(f,u,p,h,g,k,C,w)=>{let A,x;const{props:I,shapeFlag:R,transition:N,dirs:L}=f;if(A=f.el=o(f.type,k,I&&I.is,I),R&8?d(A,f.children):R&16&&Q(f.children,A,null,h,g,vr(f,k),C,w),L&&ae(f,null,h,"created"),D(A,f,f.scopeId,C,h),I){for(const Y in I)Y!=="value"&&!On(Y)&&i(A,Y,null,I[Y],k,f.children,h,g,Ft);"value"in I&&i(A,"value",null,I.value,k),(x=I.onVnodeBeforeMount)&&It(x,h,f)}L&&ae(f,null,h,"beforeMount");const U=tf(g,N);U&&N.beforeEnter(A),r(A,u,p),((x=I&&I.onVnodeMounted)||U||L)&&mt(()=>{x&&It(x,h,f),U&&N.enter(A),L&&ae(f,null,h,"mounted")},g)},D=(f,u,p,h,g)=>{if(p&&O(f,p),h)for(let k=0;k<h.length;k++)O(f,h[k]);if(g){let k=g.subTree;if(u===k){const C=g.vnode;D(f,C,C.scopeId,C.slotScopeIds,g.parent)}}},Q=(f,u,p,h,g,k,C,w,A=0)=>{for(let x=A;x<f.length;x++){const I=f[x]=w?Wt(f[x]):Nt(f[x]);M(null,I,u,p,h,g,k,C,w)}},it=(f,u,p,h,g,k,C)=>{const w=u.el=f.el;let{patchFlag:A,dynamicChildren:x,dirs:I}=u;A|=f.patchFlag&16;const R=f.props||G,N=u.props||G;let L;if(p&&ie(p,!1),(L=N.onVnodeBeforeUpdate)&&It(L,p,u,f),I&&ae(u,f,p,"beforeUpdate"),p&&ie(p,!0),x?wt(f.dynamicChildren,x,w,p,h,vr(u,g),k):C||W(f,u,w,null,p,h,vr(u,g),k,!1),A>0){if(A&16)je(w,u,R,N,p,h,g);else if(A&2&&R.class!==N.class&&i(w,"class",null,N.class,g),A&4&&i(w,"style",R.style,N.style,g),A&8){const U=u.dynamicProps;for(let Y=0;Y<U.length;Y++){const X=U[Y],at=R[X],kt=N[X];(kt!==at||X==="value")&&i(w,X,at,kt,g,f.children,p,h,Ft)}}A&1&&f.children!==u.children&&d(w,u.children)}else!C&&x==null&&je(w,u,R,N,p,h,g);((L=N.onVnodeUpdated)||I)&&mt(()=>{L&&It(L,p,u,f),I&&ae(u,f,p,"updated")},h)},wt=(f,u,p,h,g,k,C)=>{for(let w=0;w<u.length;w++){const A=f[w],x=u[w],I=A.el&&(A.type===bt||!ze(A,x)||A.shapeFlag&70)?m(A.el):p;M(A,x,I,null,h,g,k,C,!0)}},je=(f,u,p,h,g,k,C)=>{if(p!==h){if(p!==G)for(const w in p)!On(w)&&!(w in h)&&i(f,w,p[w],null,C,u.children,g,k,Ft);for(const w in h){if(On(w))continue;const A=h[w],x=p[w];A!==x&&w!=="value"&&i(f,w,x,A,C,u.children,g,k,Ft)}"value"in h&&i(f,"value",p.value,h.value,C)}},sn=(f,u,p,h,g,k,C,w,A)=>{const x=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:R,dynamicChildren:N,slotScopeIds:L}=u;L&&(w=w?w.concat(L):L),f==null?(r(x,p,h),r(I,p,h),Q(u.children,p,I,g,k,C,w,A)):R>0&&R&64&&N&&f.dynamicChildren?(wt(f.dynamicChildren,N,p,g,k,C,w),(u.key!=null||g&&u===g.subTree)&&Fo(f,u,!0)):W(f,u,p,I,g,k,C,w,A)},ln=(f,u,p,h,g,k,C,w,A)=>{u.slotScopeIds=w,f==null?u.shapeFlag&512?g.ctx.activate(u,p,h,C,A):lr(u,p,h,g,k,C,A):Ma(f,u,A)},lr=(f,u,p,h,g,k,C)=>{const w=f.component=mf(f,h,g);if(Eo(f)&&(w.ctx.renderer=_e),pf(w),w.asyncDep){if(g&&g.registerDep(w,ft),!f.el){const A=w.subTree=lt(he);S(null,A,u,p)}}else ft(w,f,u,p,g,k,C)},Ma=(f,u,p)=>{const h=u.component=f.component;if(bl(f,u,p))if(h.asyncDep&&!h.asyncResolved){tt(h,u,p);return}else h.next=u,fl(h.update),h.effect.dirty=!0,h.update();else u.el=f.el,h.vnode=u},ft=(f,u,p,h,g,k,C)=>{const w=()=>{if(f.isMounted){let{next:I,bu:R,u:N,parent:L,vnode:U}=f;{const xe=Lo(f);if(xe){I&&(I.el=U.el,tt(f,I,C)),xe.asyncDep.then(()=>{f.isUnmounted||w()});return}}let Y=I,X;ie(f,!1),I?(I.el=U.el,tt(f,I,C)):I=U,R&&Sn(R),(X=I.props&&I.props.onVnodeBeforeUpdate)&&It(X,L,I,U),ie(f,!0);const at=mr(f),kt=f.subTree;f.subTree=at,M(kt,at,m(kt.el),cn(kt),f,g,k),I.el=at.el,Y===null&&yl(f,at.el),N&&mt(N,g),(X=I.props&&I.props.onVnodeUpdated)&&mt(()=>It(X,L,I,U),g)}else{let I;const{el:R,props:N}=u,{bm:L,m:U,parent:Y}=f,X=Pn(u);if(ie(f,!1),L&&Sn(L),!X&&(I=N&&N.onVnodeBeforeMount)&&It(I,Y,u),ie(f,!0),R&&cr){const at=()=>{f.subTree=mr(f),cr(R,f.subTree,f,g,null)};X?u.type.__asyncLoader().then(()=>!f.isUnmounted&&at()):at()}else{const at=f.subTree=mr(f);M(null,at,p,h,f,g,k),u.el=at.el}if(U&&mt(U,g),!X&&(I=N&&N.onVnodeMounted)){const at=u;mt(()=>It(I,Y,at),g)}(u.shapeFlag&256||Y&&Pn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&mt(f.a,g),f.isMounted=!0,u=p=h=null}},A=f.effect=new ia(w,xt,()=>pa(x),f.scope),x=f.update=()=>{A.dirty&&A.run()};x.id=f.uid,ie(f,!0),x()},tt=(f,u,p)=>{u.component=f;const h=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,h,p),Xl(f,u.children,p),be(),Ga(f),ye()},W=(f,u,p,h,g,k,C,w,A=!1)=>{const x=f&&f.children,I=f?f.shapeFlag:0,R=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){fn(x,R,p,h,g,k,C,w,A);return}else if(N&256){ee(x,R,p,h,g,k,C,w,A);return}}L&8?(I&16&&Ft(x,g,k),R!==x&&d(p,R)):I&16?L&16?fn(x,R,p,h,g,k,C,w,A):Ft(x,g,k,!0):(I&8&&d(p,""),L&16&&Q(R,p,h,g,k,C,w,A))},ee=(f,u,p,h,g,k,C,w,A)=>{f=f||Ae,u=u||Ae;const x=f.length,I=u.length,R=Math.min(x,I);let N;for(N=0;N<R;N++){const L=u[N]=A?Wt(u[N]):Nt(u[N]);M(f[N],L,p,null,g,k,C,w,A)}x>I?Ft(f,g,k,!0,!1,R):Q(u,p,h,g,k,C,w,A,R)},fn=(f,u,p,h,g,k,C,w,A)=>{let x=0;const I=u.length;let R=f.length-1,N=I-1;for(;x<=R&&x<=N;){const L=f[x],U=u[x]=A?Wt(u[x]):Nt(u[x]);if(ze(L,U))M(L,U,p,null,g,k,C,w,A);else break;x++}for(;x<=R&&x<=N;){const L=f[R],U=u[N]=A?Wt(u[N]):Nt(u[N]);if(ze(L,U))M(L,U,p,null,g,k,C,w,A);else break;R--,N--}if(x>R){if(x<=N){const L=N+1,U=L<I?u[L].el:h;for(;x<=N;)M(null,u[x]=A?Wt(u[x]):Nt(u[x]),p,U,g,k,C,w,A),x++}}else if(x>N)for(;x<=R;)Ct(f[x],g,k,!0),x++;else{const L=x,U=x,Y=new Map;for(x=U;x<=N;x++){const gt=u[x]=A?Wt(u[x]):Nt(u[x]);gt.key!=null&&Y.set(gt.key,x)}let X,at=0;const kt=N-U+1;let xe=!1,La=0;const De=new Array(kt);for(x=0;x<kt;x++)De[x]=0;for(x=L;x<=R;x++){const gt=f[x];if(at>=kt){Ct(gt,g,k,!0);continue}let Pt;if(gt.key!=null)Pt=Y.get(gt.key);else for(X=U;X<=N;X++)if(De[X-U]===0&&ze(gt,u[X])){Pt=X;break}Pt===void 0?Ct(gt,g,k,!0):(De[Pt-U]=x+1,Pt>=La?La=Pt:xe=!0,M(gt,u[Pt],p,null,g,k,C,w,A),at++)}const $a=xe?ef(De):Ae;for(X=$a.length-1,x=kt-1;x>=0;x--){const gt=U+x,Pt=u[gt],ja=gt+1<I?u[gt+1].el:h;De[x]===0?M(null,Pt,p,ja,g,k,C,w,A):xe&&(X<0||x!==$a[X]?ne(Pt,p,ja,2):X--)}}},ne=(f,u,p,h,g=null)=>{const{el:k,type:C,transition:w,children:A,shapeFlag:x}=f;if(x&6){ne(f.component.subTree,u,p,h);return}if(x&128){f.suspense.move(u,p,h);return}if(x&64){C.move(f,u,p,_e);return}if(C===bt){r(k,u,p);for(let R=0;R<A.length;R++)ne(A[R],u,p,h);r(f.anchor,u,p);return}if(C===Tn){y(f,u,p);return}if(h!==2&&x&1&&w)if(h===0)w.beforeEnter(k),r(k,u,p),mt(()=>w.enter(k),g);else{const{leave:R,delayLeave:N,afterLeave:L}=w,U=()=>r(k,u,p),Y=()=>{R(k,()=>{U(),L&&L()})};N?N(k,U,Y):Y()}else r(k,u,p)},Ct=(f,u,p,h=!1,g=!1)=>{const{type:k,props:C,ref:w,children:A,dynamicChildren:x,shapeFlag:I,patchFlag:R,dirs:N}=f;if(w!=null&&$r(w,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const L=I&1&&N,U=!Pn(f);let Y;if(U&&(Y=C&&C.onVnodeBeforeUnmount)&&It(Y,u,f),I&6)_s(f.component,p,h);else{if(I&128){f.suspense.unmount(p,h);return}L&&ae(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,g,_e,h):x&&(k!==bt||R>0&&R&64)?Ft(x,u,p,!1,!0):(k===bt&&R&384||!g&&I&16)&&Ft(A,u,p),h&&Ra(f)}(U&&(Y=C&&C.onVnodeUnmounted)||L)&&mt(()=>{Y&&It(Y,u,f),L&&ae(f,null,u,"unmounted")},p)},Ra=f=>{const{type:u,el:p,anchor:h,transition:g}=f;if(u===bt){ys(p,h);return}if(u===Tn){v(f);return}const k=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:w}=g,A=()=>C(p,k);w?w(f.el,k,A):A()}else k()},ys=(f,u)=>{let p;for(;f!==u;)p=b(f),a(f),f=p;a(u)},_s=(f,u,p)=>{const{bum:h,scope:g,update:k,subTree:C,um:w}=f;h&&Sn(h),g.stop(),k&&(k.active=!1,Ct(C,f,u,p)),w&&mt(w,u),mt(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ft=(f,u,p,h=!1,g=!1,k=0)=>{for(let C=k;C<f.length;C++)Ct(f[C],u,p,h,g)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),Fa=(f,u,p)=>{f==null?u._vnode&&Ct(u._vnode,null,null,!0):M(u._vnode||null,f,u,null,null,null,p),Ga(),yo(),u._vnode=f},_e={p:M,um:Ct,m:ne,r:Ra,mt:lr,mc:Q,pc:W,pbc:wt,n:cn,o:t};let fr,cr;return e&&([fr,cr]=e(_e)),{render:Fa,hydrate:fr,createApp:Yl(Fa,fr)}}function vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function tf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fo(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Wt(a[i]),s.el=o.el),n||Fo(o,s)),s.type===tr&&(s.el=o.el)}}function ef(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Lo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lo(e)}const nf=t=>t.__isTeleport,bt=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),he=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Ve=[];let At=null;function vt(t=!1){Ve.push(At=t?null:[])}function rf(){Ve.pop(),At=Ve[Ve.length-1]||null}let qe=1;function ai(t){qe+=t}function $o(t){return t.dynamicChildren=qe>0?At||Ae:null,rf(),qe>0&&At&&At.push(t),t}function _t(t,e,n,r,a,i){return $o(z(t,e,n,r,a,i,!0))}function af(t,e,n,r,a){return $o(lt(t,e,n,r,a,!0))}function jr(t){return t?t.__v_isVNode===!0:!1}function ze(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",jo=({key:t})=>t??null,Nn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||ht(t)||j(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,a=null,i=t===bt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jo(e),ref:e&&Nn(e),scopeId:Zn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Et};return s?(va(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),qe>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const lt=of;function of(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===_l)&&(t=he),jr(t)){const s=Me(t,e,!0);return n&&va(s,n),qe>0&&!i&&At&&(s.shapeFlag&6?At[At.indexOf(t)]=s:At.push(s)),s.patchFlag|=-2,s}if(bf(t)&&(t=t.__vccOpts),e){e=sf(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=aa(s)),K(l)&&(uo(l)&&!F(l)&&(l=ot({},l)),e.style=ra(l))}const o=nt(t)?1:xl(t)?128:nf(t)?64:K(t)?4:j(t)?2:0;return z(t,e,n,r,a,o,i,!0)}function sf(t){return t?uo(t)||er in t?ot({},t):t:null}function Me(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?cf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&jo(s),ref:e&&e.ref?n&&a?F(a)?a.concat(Nn(e)):[a,Nn(e)]:Nn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Me(t.ssContent),ssFallback:t.ssFallback&&Me(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lf(t=" ",e=0){return lt(tr,null,t,e)}function ff(t,e){const n=lt(Tn,null,t);return n.staticCount=e,n}function br(t="",e=!1){return e?(vt(),af(he,null,t)):lt(he,null,t)}function Nt(t){return t==null||typeof t=="boolean"?lt(he):F(t)?lt(bt,null,t.slice()):typeof t=="object"?Wt(t):lt(tr,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Me(t)}function va(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),va(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(er in e)?e._ctx=Et:a===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[lf(e)]):n=8);t.children=e,t.shapeFlag|=n}function cf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(a==="style")e.style=ra([e.style,r.style]);else if(Yn(a)){const i=e[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function It(t,e,n,r=null){St(t,e,7,[n,r])}const uf=Po();let df=0;function mf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||uf,i={uid:df++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:To(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dl.bind(null,i),t.ce&&t.ce(i),i}let ut=null,ba,Dr;{const t=Ji(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};ba=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),Dr=e("__VUE_SSR_SETTERS__",n=>nr=n)}const Re=t=>{ba(t),t.scope.on()},pe=()=>{ut&&ut.scope.off(),ba(null)};function Do(t){return t.vnode.shapeFlag&4}let nr=!1;function pf(t,e=!1){e&&Dr(e);const{props:n,children:r}=t.vnode,a=Do(t);Kl(t,n,a,e),ql(t,r);const i=a?hf(t,e):void 0;return e&&Dr(!1),i}function hf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mo(new Proxy(t.ctx,jl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?vf(t):null;Re(t),be();const i=Jt(r,t,0,[t.props,a]);if(ye(),pe(),Yi(i)){if(i.then(pe,pe),e)return i.then(o=>{ii(t,o,e)}).catch(o=>{qn(o,t,0)});t.asyncDep=i}else ii(t,i,e)}else zo(t,e)}function ii(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:K(e)&&(t.setupState=go(e)),zo(t,n)}let oi;function zo(t,e,n){const r=t.type;if(!t.render){if(!e&&oi&&!r.render){const a=r.template||ha(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ot(ot({isCustomElement:i,delimiters:s},o),l);r.render=oi(a,c)}}t.render=r.render||xt}{Re(t),be();try{Dl(t)}finally{ye(),pe()}}}function gf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}}))}function vf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gf(t)},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(go(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Be)return Be[n](t)},has(e,n){return n in e||n in Be}}))}function bf(t){return j(t)&&"__vccOpts"in t}const oe=(t,e)=>el(t,e,nr);function yf(t,e,n){const r=arguments.length;return r===2?K(e)&&!F(e)?jr(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),lt(t,e,n))}const _f="3.4.4",xf="http://www.w3.org/2000/svg",wf="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,si=Kt&&Kt.createElement("template"),kf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Kt.createElementNS(xf,t):e==="mathml"?Kt.createElementNS(wf,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{si.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=si.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ef=Symbol("_vtc");function Af(t,e,n){const r=t[Ef];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Of=Symbol("_vod"),Sf=Symbol("");function Cf(t,e,n){const r=t.style,a=nt(n);if(n&&!a){if(e&&!nt(e))for(const i in e)n[i]==null&&zr(r,i,"");for(const i in n)zr(r,i,n[i])}else{const i=r.display;if(a){if(e!==n){const o=r[Sf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Of in t&&(r.display=i)}}const li=/\s*!important$/;function zr(t,e,n){if(F(n))n.forEach(r=>zr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pf(t,e);li.test(n)?t.setProperty(Le(r),n.replace(li,""),"important"):t[r]=n}}const fi=["Webkit","Moz","ms"],yr={};function Pf(t,e){const n=yr[e];if(n)return n;let r=Te(e);if(r!=="filter"&&r in t)return yr[e]=r;r=Gi(r);for(let a=0;a<fi.length;a++){const i=fi[a]+r;if(i in t)return yr[e]=i}return e}const ci="http://www.w3.org/1999/xlink";function If(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ci,e.slice(6,e.length)):t.setAttributeNS(ci,e,n);else{const i=Ts(e);n==null||i&&!qi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Tf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function le(t,e,n,r){t.addEventListener(e,n,r)}function Nf(t,e,n,r){t.removeEventListener(e,n,r)}const ui=Symbol("_vei");function Mf(t,e,n,r,a=null){const i=t[ui]||(t[ui]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Rf(e);if(r){const c=i[e]=$f(r,a);le(t,s,c,l)}else o&&(Nf(t,s,o,l),i[e]=void 0)}}const di=/(?:Once|Passive|Capture)$/;function Rf(t){let e;if(di.test(t)){e={};let r;for(;r=t.match(di);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Le(t.slice(2)),e]}let _r=0;const Ff=Promise.resolve(),Lf=()=>_r||(Ff.then(()=>_r=0),_r=Date.now());function $f(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(jf(r,n.value),e,5,[r])};return n.value=t,n.attached=Lf(),n}function jf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const mi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Df=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?Af(t,r,c):e==="style"?Cf(t,n,r):Yn(e)?ta(e)||Mf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zf(t,e,r,c))?Tf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),If(t,e,r,c))};function zf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mi(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return mi(e)&&nt(n)?!1:e in t}const zn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Sn(e,n):e};function Uf(t){t.target.composing=!0}function pi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pe=Symbol("_assign"),hi={created(t,{modifiers:{lazy:e,trim:n,number:r}},a){t[Pe]=zn(a);const i=r||a.props&&a.props.type==="number";le(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),i&&(s=Or(s)),t[Pe](s)}),n&&le(t,"change",()=>{t.value=t.value.trim()}),e||(le(t,"compositionstart",Uf),le(t,"compositionend",pi),le(t,"change",pi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:a}},i){if(t[Pe]=zn(i),t.composing)return;const o=a||t.type==="number"?Or(t.value):t.value,s=e??"";o!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},Hf={deep:!0,created(t,e,n){t[Pe]=zn(n),le(t,"change",()=>{const r=t._modelValue,a=Bf(t),i=t.checked,o=t[Pe];if(F(r)){const s=Xi(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Wn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(Uo(t,i))})},mounted:gi,beforeUpdate(t,e,n){t[Pe]=zn(n),gi(t,e,n)}};function gi(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=Xi(e,r.props.value)>-1:Wn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Gn(e,Uo(t,!0)))}function Bf(t){return"_value"in t?t._value:t.value}function Uo(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vf=ot({patchProp:Df},kf);let vi;function Yf(){return vi||(vi=Zl(Vf))}const Wf=(...t)=>{const e=Yf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Gf(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Kf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Kf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gf(t){return nt(t)?document.querySelector(t):t}const Ho=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Jf=z("hr",null,null,-1),qf={__name:"PaginaTitulo",props:{titulo:String},setup(t){return(e,n)=>(vt(),_t(bt,null,[z("h4",null,we(t.titulo),1),Jf],64))}},ya=t=>(ml("data-v-01f71293"),t=t(),pl(),t),Xf={id:"sorteador",width:"500px;"},Zf={key:0,class:"w-100"},Qf=ya(()=>z("label",null," Coloque a lista de jogadores aqui, um por linha",-1)),tc={key:1,class:"w-100 h-50"},ec={class:"table table-hover"},nc=ya(()=>z("thead",null,[z("th",null,"Número"),z("th",null,"Nome"),z("th",null,"Estrela"),z("th",null,"Goleiro")],-1)),rc={class:"row"},ac={class:"col-3"},ic=["onClick"],oc={class:"col-6"},sc=["onUpdate:modelValue"],lc={class:"col-3"},fc=["onClick"],cc=["onUpdate:modelValue"],uc={key:2,class:"w-100"},dc=ya(()=>z("label",{class:"mb-2"}," Times Sorteados!",-1)),mc={class:"row mb-4"},pc={class:"col-6"},hc={class:"col-12 mb-1"},gc={class:"col-12"},vc={__name:"Sorteador",setup(t){const e=re(""),n=re(0),r=re([]),a=re(.1),i=re([]),o=re([]),s=re(2),l=()=>{n.value=1;for(var _=e.value.split(`
`),y=0;y<_.length;y++){var v={Indice:y,Goleiro:!1,Nome:_[y],Estrela:5};let E=m(_[y]);E!=null&&E?(v.Nome=E.Nome,v.Estrela=E.Estrela,E.Goleiro&&(v.Goleiro=!0)):(_[y].toUpperCase().includes("GOLEIRO")&&(v.Goleiro=!0),_[y].toUpperCase().includes("CONVIDADO")&&(v.Estrela=6.7,v.Goleiro=!1),v.Nome=b(v.Nome)),r.value.push(v)}},c=_=>{_.Estrela>1&&(_.Estrela=(parseFloat(_.Estrela)-parseFloat(a.value)).toFixed(2))},d=_=>{_.Estrela<10&&(_.Estrela=(parseFloat(_.Estrela)+parseFloat(a.value)).toFixed(2))},m=_=>{var y=b(_);return i.value.find(v=>v.Nome.toUpperCase()===y)},b=_=>(_.includes("-")&&(_=_.split("-")[1]),_.trim().toUpperCase()),O=()=>{n.value=2,o.value=[],$(r.value)},$=_=>{let y=[];for(let D=1;D<=s.value;D++){let Q={Nome:"Time "+D.toString(),Jogadores:[],MediaEstrelas:0};y.push(Q)}const v=[..._];v.sort((D,Q)=>Q.Estrela-D.Estrela);const E=v.reduce((D,Q,it)=>(Q.Goleiro===!0&&D.push(it),D),[]);E.length>1&&(y[0].Jogadores.push(v[E[0]]),y[1].Jogadores.push(v[E[1]])),E.length==1&&y[0].Jogadores.push(v[E[0]]),E.reverse().forEach(D=>{v.splice(D,1)});let Z=!0;for(;v.length>0;)if(Z){const D=Math.floor(Math.random()*v.length),Q=v[D];y[0].Jogadores.push(Q),v.splice(D,1);const it=Math.floor(Math.random()*v.length),wt=v[it];y[1].Jogadores.push(wt),v.splice(it,1),Z=!1}else if(v.length>1){let D=0,Q=1;M(y[1].Jogadores)<=M(y[0].Jogadores)&&(D=1,Q=0),y[D].Jogadores.push(v[0]),y[Q].Jogadores.push(v[v.length-1]),v.shift(),v.pop()}else M(y[1].Jogadores)<M(y[0].Jogadores)?y[1].Jogadores.push(v[0]):y[0].Jogadores.push(v[0]),v.shift();y.forEach(D=>{D.MediaEstrelas=H(D.Jogadores)}),o.value=y},M=_=>_.reduce((y,v)=>y+v.Estrela,0),H=_=>{let y=0,v=0;for(var E=0;E<_.length;E++)y=(parseFloat(y)+parseFloat(_[E].Estrela)).toFixed(2),v++;return(parseFloat(y)/parseFloat(v)).toFixed(2)},S=()=>{const _=JSON.stringify(r.value);localStorage.setItem("jogadores",_)};return Oo(()=>{if(localStorage.getItem("jogadores"))try{i.value=JSON.parse(localStorage.getItem("jogadores"))}catch{localStorage.removeItem("jogadores")}}),(_,y)=>(vt(),_t("div",Xf,[lt(qf,{titulo:"Sorteador de times"}),n.value==0?(vt(),_t("div",Zf,[Qf,pr(z("textarea",{class:"w-100",id:"listaJogadores","onUpdate:modelValue":y[0]||(y[0]=v=>e.value=v)}," ",512),[[hi,e.value]]),z("button",{class:"btn btn-primary",onClick:y[1]||(y[1]=v=>l())}," Carregar Jogadores ")])):br("",!0),n.value==1?(vt(),_t("div",tc,[z("table",ec,[nc,z("tbody",null,[(vt(!0),_t(bt,null,hr(r.value,v=>(vt(),_t("tr",null,[z("td",null,we(v.Indice),1),z("td",null,we(v.Nome),1),z("td",null,[z("div",rc,[z("div",ac,[z("button",{class:"btn btn-default btn-sm",type:"button",onClick:E=>c(v)}," - ",8,ic)]),z("div",oc,[pr(z("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":E=>v.Estrela=E},null,8,sc),[[hi,v.Estrela]])]),z("div",lc,[z("button",{class:"btn btn-default btn-sm",type:"button",onClick:E=>d(v)}," + ",8,fc)])])]),z("td",null,[pr(z("input",{class:"form-check-input me-1",type:"checkbox","onUpdate:modelValue":E=>v.Goleiro=E},null,8,cc),[[Hf,v.Goleiro]])])]))),256))])]),z("button",{class:"btn btn-primary m-2",onClick:y[2]||(y[2]=v=>O())},"Sortear"),z("button",{class:"btn btn-primary m-2",onClick:y[3]||(y[3]=v=>S())},"Salvar Notas")])):br("",!0),n.value==2?(vt(),_t("div",uc,[dc,z("div",mc,[(vt(!0),_t(bt,null,hr(o.value,v=>(vt(),_t("div",pc,[z("div",hc,[z("label",null,[z("b",null,we(v.Nome)+" - Media Estrelhas "+we(v.MediaEstrelas),1)])]),(vt(!0),_t(bt,null,hr(v.Jogadores,E=>(vt(),_t("div",gc,[z("label",null,we(E.Nome),1)]))),256))]))),256))]),z("button",{class:"btn btn-primary",onClick:y[4]||(y[4]=v=>O())},"Sortear Novamente")])):br("",!0)]))}},bc=Ho(vc,[["__scopeId","data-v-01f71293"]]),yc={class:"container-fluid"},_c={class:"container"},xc={class:"row py-3"},wc=ff('<div class="col-lg-3 col-sm-3 mr-auto" id="sticky-sidebar" data-v-ca43c100><div class="sticky-top" data-v-ca43c100><div class="barra w-100" style="padding-top:100px;" data-v-ca43c100><ul class="nav flex-column" data-v-ca43c100><li class="nav-item" data-v-ca43c100><a id="cor" class="nav-link" href="#" data-v-ca43c100>Sorteador de Times </a><hr class="hr-menu" data-v-ca43c100></li><li class="nav-item" style="margin-top:-15px;" data-v-ca43c100><a id="cor" class="nav-link" href="#" data-v-ca43c100>Listar Clientes</a><hr class="hr-menu" data-v-ca43c100></li><li class="nav-item" style="margin-top:-15px;" data-v-ca43c100><a id="cor" class="nav-link" href="#" data-v-ca43c100>Editar Clientes</a><hr class="hr-menu" data-v-ca43c100></li></ul></div></div></div>',1),kc={class:"col-lg-9 col-sm-9",id:"main"},Ec={class:"conteudo"},Ac={__name:"App",setup(t){return(e,n)=>(vt(),_t("div",yc,[z("div",_c,[z("div",xc,[wc,z("div",kc,[z("div",Ec,[lt(bc)])])])])]))}},Oc=Ho(Ac,[["__scopeId","data-v-ca43c100"]]);function bi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bi(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function Sc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Cc(t,e,n){return e&&yi(t.prototype,e),n&&yi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _a(t,e){return Ic(t)||Nc(t,e)||Bo(t,e)||Rc()}function rn(t){return Pc(t)||Tc(t)||Bo(t)||Mc()}function Pc(t){if(Array.isArray(t))return Ur(t)}function Ic(t){if(Array.isArray(t))return t}function Tc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Nc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Bo(t,e){if(t){if(typeof t=="string")return Ur(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(t,e)}}function Ur(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Mc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _i=function(){},xa={},Vo={},Yo=null,Wo={mark:_i,measure:_i};try{typeof window<"u"&&(xa=window),typeof document<"u"&&(Vo=document),typeof MutationObserver<"u"&&(Yo=MutationObserver),typeof performance<"u"&&(Wo=performance)}catch{}var Fc=xa.navigator||{},xi=Fc.userAgent,wi=xi===void 0?"":xi,Zt=xa,q=Vo,ki=Yo,vn=Wo;Zt.document;var Bt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Ko=~wi.indexOf("MSIE")||~wi.indexOf("Trident/"),bn,yn,_n,xn,wn,Dt="___FONT_AWESOME___",Hr=16,Go="fa",Jo="svg-inline--fa",ge="data-fa-i2svg",Br="data-fa-pseudo-element",Lc="data-fa-pseudo-element-pending",wa="data-prefix",ka="data-icon",Ei="fontawesome-i2svg",$c="async",jc=["HTML","HEAD","STYLE","SCRIPT"],qo=function(){try{return!0}catch{return!1}}(),J="classic",et="sharp",Ea=[J,et];function an(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[J]}})}var Xe=an((bn={},rt(bn,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(bn,et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bn)),Ze=an((yn={},rt(yn,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(yn,et,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),yn)),Qe=an((_n={},rt(_n,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(_n,et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),Dc=an((xn={},rt(xn,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(xn,et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xn)),zc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Xo="fa-layers-text",Uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hc=an((wn={},rt(wn,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(wn,et,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wn)),Zo=[1,2,3,4,5,6,7,8,9,10],Bc=Zo.concat([11,12,13,14,15,16,17,18,19,20]),Vc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Ze[J]).map(tn.add.bind(tn));Object.keys(Ze[et]).map(tn.add.bind(tn));var Yc=[].concat(Ea,rn(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Zo.map(function(t){return"".concat(t,"x")})).concat(Bc.map(function(t){return"w-".concat(t)})),Ye=Zt.FontAwesomeConfig||{};function Wc(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var Gc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gc.forEach(function(t){var e=_a(t,2),n=e[0],r=e[1],a=Kc(Wc(n));a!=null&&(Ye[r]=a)})}var Qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Go,replacementClass:Jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ye.familyPrefix&&(Ye.cssPrefix=Ye.familyPrefix);var Fe=P(P({},Qo),Ye);Fe.autoReplaceSvg||(Fe.observeMutations=!1);var T={};Object.keys(Qo).forEach(function(t){Object.defineProperty(T,t,{enumerable:!0,set:function(n){Fe[t]=n,We.forEach(function(r){return r(T)})},get:function(){return Fe[t]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){Fe.cssPrefix=e,We.forEach(function(n){return n(T)})},get:function(){return Fe.cssPrefix}});Zt.FontAwesomeConfig=T;var We=[];function Jc(t){return We.push(t),function(){We.splice(We.indexOf(t),1)}}var Yt=Hr,Rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qc(t){if(!(!t||!Bt)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var Xc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var t=12,e="";t-- >0;)e+=Xc[Math.random()*62|0];return e}function $e(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Aa(t){return t.classList?$e(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ts(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ts(t[n]),'" ')},"").trim()}function ar(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oa(t){return t.size!==Rt.size||t.x!==Rt.x||t.y!==Rt.y||t.rotate!==Rt.rotate||t.flipX||t.flipY}function Qc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function tu(t){var e=t.transform,n=t.width,r=n===void 0?Hr:n,a=t.height,i=a===void 0?Hr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ko?l+="translate(".concat(e.x/Yt-r/2,"em, ").concat(e.y/Yt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Yt,"em), calc(-50% + ").concat(e.y/Yt,"em)) "):l+="translate(".concat(e.x/Yt,"em, ").concat(e.y/Yt,"em) "),l+="scale(".concat(e.size/Yt*(e.flipX?-1:1),", ").concat(e.size/Yt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var eu=`:root, :host {
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
}`;function es(){var t=Go,e=Jo,n=T.cssPrefix,r=T.replacementClass,a=eu;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ai=!1;function xr(){T.autoAddCss&&!Ai&&(qc(es()),Ai=!0)}var nu={mixout:function(){return{dom:{css:es,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},zt=Zt||{};zt[Dt]||(zt[Dt]={});zt[Dt].styles||(zt[Dt].styles={});zt[Dt].hooks||(zt[Dt].hooks={});zt[Dt].shims||(zt[Dt].shims=[]);var Ot=zt[Dt],ns=[],ru=function t(){q.removeEventListener("DOMContentLoaded",t),Hn=1,ns.map(function(e){return e()})},Hn=!1;Bt&&(Hn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Hn||q.addEventListener("DOMContentLoaded",ru));function au(t){Bt&&(Hn?setTimeout(t,0):ns.push(t))}function on(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?ts(t):"<".concat(e," ").concat(Zc(r),">").concat(i.map(on).join(""),"</").concat(e,">")}function Oi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var iu=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},wr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?iu(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function ou(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Vr(t){var e=ou(t);return e.length===1?e[0].toString(16):null}function su(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Si(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Yr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Si(e);typeof Ot.hooks.addPack=="function"&&!a?Ot.hooks.addPack(t,Si(e)):Ot.styles[t]=P(P({},Ot.styles[t]||{}),i),t==="fas"&&Yr("fa",e)}var kn,En,An,ke=Ot.styles,lu=Ot.shims,fu=(kn={},rt(kn,J,Object.values(Qe[J])),rt(kn,et,Object.values(Qe[et])),kn),Sa=null,rs={},as={},is={},os={},ss={},cu=(En={},rt(En,J,Object.keys(Xe[J])),rt(En,et,Object.keys(Xe[et])),En);function uu(t){return~Yc.indexOf(t)}function du(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!uu(a)?a:null}var ls=function(){var e=function(i){return wr(ke,function(o,s,l){return o[l]=wr(s,i,{}),o},{})};rs=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),as=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ss=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ke||T.autoFetchSvg,r=wr(lu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});is=r.names,os=r.unicodes,Sa=ir(T.styleDefault,{family:T.familyDefault})};Jc(function(t){Sa=ir(t.styleDefault,{family:T.familyDefault})});ls();function Ca(t,e){return(rs[t]||{})[e]}function mu(t,e){return(as[t]||{})[e]}function ue(t,e){return(ss[t]||{})[e]}function fs(t){return is[t]||{prefix:null,iconName:null}}function pu(t){var e=os[t],n=Ca("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return Sa}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function ir(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?J:n,a=Xe[r][t],i=Ze[r][t]||Ze[r][a],o=t in Ot.styles?t:null;return i||o||null}var Ci=(An={},rt(An,J,Object.keys(Qe[J])),rt(An,et,Object.keys(Qe[et])),An);function or(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},rt(e,J,"".concat(T.cssPrefix,"-").concat(J)),rt(e,et,"".concat(T.cssPrefix,"-").concat(et)),e),o=null,s=J;(t.includes(i[J])||t.some(function(c){return Ci[J].includes(c)}))&&(s=J),(t.includes(i[et])||t.some(function(c){return Ci[et].includes(c)}))&&(s=et);var l=t.reduce(function(c,d){var m=du(T.cssPrefix,d);if(ke[d]?(d=fu[s].includes(d)?Dc[s][d]:d,o=d,c.prefix=d):cu[s].indexOf(d)>-1?(o=d,c.prefix=ir(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[J]&&d!==i[et]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var b=o==="fa"?fs(c.iconName):{},O=ue(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||O||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!ke.far&&ke.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},Pa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===et&&(ke.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var hu=function(){function t(){Sc(this,t),this.definitions={}}return Cc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Yr(s,o[s]);var l=Qe[J][s];l&&Yr(l,o[s]),ls()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Pi=[],Ee={},Ie={},gu=Object.keys(Ie);function vu(t,e){var n=e.mixoutsTo;return Pi=t,Ee={},Object.keys(Ie).forEach(function(r){gu.indexOf(r)===-1&&delete Ie[r]}),Pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Un(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ee[o]||(Ee[o]=[]),Ee[o].push(i[o])})}r.provides&&r.provides(Ie)}),n}function Wr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ee[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ve(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Ee[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ie[t]?Ie[t].apply(null,e):void 0}function Kr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=ue(n,e)||e,Oi(cs.definitions,n,e)||Oi(Ot.styles,n,e)}var cs=new hu,bu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,ve("noAuto")},yu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(ve("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,au(function(){xu({autoReplaceSvgRoot:n}),ve("watch",e)})}},_u={icon:function(e){if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ir(e[0]);return{prefix:r,iconName:ue(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(zc))){var a=or(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qt(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Qt();return{prefix:i,iconName:ue(i,e)||e}}}},yt={noAuto:bu,config:T,dom:yu,parse:_u,library:cs,findIconDefinition:Kr,toHtml:on},xu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ot.styles).length>0||T.autoFetchSvg)&&Bt&&T.autoReplaceSvg&&yt.dom.i2svg({node:r})};function sr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return on(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bt){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function wu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(P(P({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function ku(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function Ia(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,b=t.watchable,O=b===void 0?!1:b,$=r.found?r:n,M=$.width,H=$.height,S=a==="fak",_=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(it){return m.classes.indexOf(it)===-1}).filter(function(it){return it!==""||!!it}).concat(m.classes).join(" "),y={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(H)})},v=S&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/H*16*.0625,"em")}:{};O&&(y.attributes[ge]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete y.attributes.title);var E=P(P({},y),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P(P({},v),m.styles)}),Z=r.found&&n.found?Ut("generateAbstractMask",E)||{children:[],attributes:{}}:Ut("generateAbstractIcon",E)||{children:[],attributes:{}},D=Z.children,Q=Z.attributes;return E.children=D,E.attributes=Q,s?ku(E):wu(E)}function Ii(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ge]="");var d=P({},o.styles);Oa(a)&&(d.transform=tu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ar(d);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Eu(t){var e=t.content,n=t.title,r=t.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Ot.styles;function Gr(t){var e=t[0],n=t[1],r=t.slice(4),a=_a(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Au={found:!1,width:512,height:512};function Ou(t,e){!qo&&!T.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jr(t,e){var n=e;return e==="fa"&&T.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=fs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&kr[e]&&kr[e][t]){var o=kr[e][t];return r(Gr(o))}Ou(t,e),r(P(P({},Au),{},{icon:T.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var Ti=function(){},qr=T.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:Ti,measure:Ti},He='FA "6.5.1"',Su=function(e){return qr.mark("".concat(He," ").concat(e," begins")),function(){return us(e)}},us=function(e){qr.mark("".concat(He," ").concat(e," ends")),qr.measure("".concat(He," ").concat(e),"".concat(He," ").concat(e," begins"),"".concat(He," ").concat(e," ends"))},Ta={begin:Su,end:us},Mn=function(){};function Ni(t){var e=t.getAttribute?t.getAttribute(ge):null;return typeof e=="string"}function Cu(t){var e=t.getAttribute?t.getAttribute(wa):null,n=t.getAttribute?t.getAttribute(ka):null;return e&&n}function Pu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(T.replacementClass)}function Iu(){if(T.autoReplaceSvg===!0)return Rn.replace;var t=Rn[T.autoReplaceSvg];return t||Rn.replace}function Tu(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function Nu(t){return q.createElement(t)}function ds(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Tu:Nu:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ds(o,{ceFn:r}))}),a}function Mu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(ds(a),n)}),n.getAttribute(ge)===null&&T.keepOriginalSource){var r=q.createComment(Mu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Aa(n).indexOf(T.replacementClass))return Rn.replace(e);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(ge,""),n.innerHTML=o}};function Mi(t){t()}function ms(t,e){var n=typeof e=="function"?e:Mn;if(t.length===0)n();else{var r=Mi;T.mutateApproach===$c&&(r=Zt.requestAnimationFrame||Mi),r(function(){var a=Iu(),i=Ta.begin("mutate");t.map(a),i(),n()})}}var Na=!1;function ps(){Na=!0}function Xr(){Na=!1}var Bn=null;function Ri(t){if(ki&&T.observeMutations){var e=t.treeCallback,n=e===void 0?Mn:e,r=t.nodeCallback,a=r===void 0?Mn:r,i=t.pseudoElementsCallback,o=i===void 0?Mn:i,s=t.observeMutationsRoot,l=s===void 0?q:s;Bn=new ki(function(c){if(!Na){var d=Qt();$e(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ni(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ni(m.target)&&~Vc.indexOf(m.attributeName))if(m.attributeName==="class"&&Cu(m.target)){var b=or(Aa(m.target)),O=b.prefix,$=b.iconName;m.target.setAttribute(wa,O||d),$&&m.target.setAttribute(ka,$)}else Pu(m.target)&&a(m.target)})}}),Bt&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ru(){Bn&&Bn.disconnect()}function Fu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Lu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=or(Aa(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=mu(a.prefix,t.innerText)||Ca(a.prefix,Vr(t.innerText))),!a.iconName&&T.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function $u(t){var e=$e(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return T.autoA11y&&(n?e["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||en()):(e["aria-hidden"]="true",e.focusable="false")),e}function ju(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Lu(t),r=n.iconName,a=n.prefix,i=n.rest,o=$u(t),s=Wr("parseNodeAttributes",{},t),l=e.styleParser?Fu(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Du=Ot.styles;function hs(t){var e=T.autoReplaceSvg==="nest"?Fi(t,{styleParser:!1}):Fi(t);return~e.extra.classes.indexOf(Xo)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}var te=new Set;Ea.map(function(t){te.add("fa-".concat(t))});Object.keys(Xe[J]).map(te.add.bind(te));Object.keys(Xe[et]).map(te.add.bind(te));te=rn(te);function Li(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(Ei,"-").concat(m))},a=function(m){return n.remove("".concat(Ei,"-").concat(m))},i=T.autoFetchSvg?te:Ea.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Du));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(ge,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ge,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=$e(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ta.begin("onTree"),c=s.reduce(function(d,m){try{var b=hs(m);b&&d.push(b)}catch(O){qo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(b){ms(b,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(b){l(),m(b)})})}function zu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hs(t).then(function(n){n&&ms([n],e)})}function Uu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Kr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),t(r,P(P({},n),{},{mask:a}))}}var Hu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Rt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,b=m===void 0?null:m,O=n.titleId,$=O===void 0?null:O,M=n.classes,H=M===void 0?[]:M,S=n.attributes,_=S===void 0?{}:S,y=n.styles,v=y===void 0?{}:y;if(e){var E=e.prefix,Z=e.iconName,D=e.icon;return sr(P({type:"icon"},e),function(){return ve("beforeDOMElementCreation",{iconDefinition:e,params:n}),T.autoA11y&&(b?_["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat($||en()):(_["aria-hidden"]="true",_.focusable="false")),Ia({icons:{main:Gr(D),mask:l?Gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:Z,transform:P(P({},Rt),a),symbol:o,title:b,maskId:d,titleId:$,extra:{attributes:_,styles:v,classes:H}})})}},Bu={mixout:function(){return{icon:Uu(Hu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Li,n.nodeCallback=zu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Li(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,$){Promise.all([Jr(a,s),d.iconName?Jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var H=_a(M,2),S=H[0],_=H[1];O([n,Ia({icons:{main:S,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch($)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Oa(o)&&(c=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Vu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){ve("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},Yu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return sr({type:"counter",content:n},function(){return ve("beforeDOMElementCreation",{content:n,params:r}),Eu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},Wu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Rt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return sr({type:"text",content:n},function(){return ve("beforeDOMElementCreation",{content:n,params:r}),Ii({content:n,transform:P(P({},Rt),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ko){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ku=new RegExp('"',"ug"),$i=[1105920,1112319];function Gu(t){var e=t.replace(Ku,""),n=su(e,0),r=n>=$i[0]&&n<=$i[1],a=e.length===2?e[0]===e[1]:!1;return{value:Vr(a?e[0]:e),isSecondary:r||a}}function ji(t,e){var n="".concat(Lc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=$e(t.children),o=i.filter(function(D){return D.getAttribute(Br)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Uc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?et:J,O=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ze[b][l[2].toLowerCase()]:Hc[b][c],$=Gu(m),M=$.value,H=$.isSecondary,S=l[0].startsWith("FontAwesome"),_=Ca(O,M),y=_;if(S){var v=pu(M);v.iconName&&v.prefix&&(_=v.iconName,O=v.prefix)}if(_&&!H&&(!o||o.getAttribute(wa)!==O||o.getAttribute(ka)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var E=ju(),Z=E.extra;Z.attributes[Br]=e,Jr(_,O).then(function(D){var Q=Ia(P(P({},E),{},{icons:{main:D,mask:Pa()},prefix:O,iconName:y,extra:Z,watchable:!0})),it=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(it,t.firstChild):t.appendChild(it),it.outerHTML=Q.map(function(wt){return on(wt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ju(t){return Promise.all([ji(t,"::before"),ji(t,"::after")])}function qu(t){return t.parentNode!==document.head&&!~jc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Br)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Di(t){if(Bt)return new Promise(function(e,n){var r=$e(t.querySelectorAll("*")).filter(qu).map(Ju),a=Ta.begin("searchPseudoElements");ps(),Promise.all(r).then(function(){a(),Xr(),e()}).catch(function(){a(),Xr(),n()})})}var Xu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Di,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;T.searchPseudoElements&&Di(a)}}},zi=!1,Zu={mixout:function(){return{dom:{unwatch:function(){ps(),zi=!0}}}},hooks:function(){return{bootstrap:function(){Ri(Wr("mutationObserverCallbacks",{}))},noAuto:function(){Ru()},watch:function(n){var r=n.observeMutationsRoot;zi?Xr():Ri(Wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ui=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Qu={mixout:function(){return{parse:{transform:function(n){return Ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ui(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:P({},O.outer),children:[{tag:"g",attributes:P({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),O.path)}]}]}}}},Er={x:0,y:0,width:"100%",height:"100%"};function Hi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function td(t){return t.tag==="g"?t.children:[t]}var ed={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Pa();return i.prefix||(i.prefix=Qt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,b=o.icon,O=Qc({transform:l,containerWidth:m,iconWidth:c}),$={tag:"rect",attributes:P(P({},Er),{},{fill:"white"})},M=d.children?{children:d.children.map(Hi)}:{},H={tag:"g",attributes:P({},O.inner),children:[Hi(P({tag:d.tag,attributes:P(P({},d.attributes),O.path)},M))]},S={tag:"g",attributes:P({},O.outer),children:[H]},_="mask-".concat(s||en()),y="clip-".concat(s||en()),v={tag:"mask",attributes:P(P({},Er),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,S]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:td(b)},v]};return r.push(E,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Er)}),{children:r,attributes:a}}}},nd={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},rd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ad=[nu,Bu,Vu,Yu,Wu,Xu,Zu,Qu,ed,nd,rd];vu(ad,{mixoutsTo:yt});yt.noAuto;yt.config;var id=yt.library;yt.dom;var Zr=yt.parse;yt.findIconDefinition;yt.toHtml;var od=yt.icon;yt.layer;yt.text;yt.counter;var sd={prefix:"fas",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"]};function Bi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bi(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vn(t){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vn(t)}function dt(t,e,n){return e=ud(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ld(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function fd(t,e){if(t==null)return{};var n=ld(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function cd(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ud(t){var e=cd(t,"string");return typeof e=="symbol"?e:String(e)}var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gs={exports:{}};(function(t){(function(e){var n=function(S,_,y){if(!c(_)||m(_)||b(_)||O(_)||l(_))return _;var v,E=0,Z=0;if(d(_))for(v=[],Z=_.length;E<Z;E++)v.push(n(S,_[E],y));else{v={};for(var D in _)Object.prototype.hasOwnProperty.call(_,D)&&(v[S(D,y)]=n(S,_[D],y))}return v},r=function(S,_){_=_||{};var y=_.separator||"_",v=_.split||/(?=[A-Z])/;return S.split(v).join(y)},a=function(S){return $(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(_,y){return y?y.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},i=function(S){var _=a(S);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(S,_){return r(S,_).toLowerCase()},s=Object.prototype.toString,l=function(S){return typeof S=="function"},c=function(S){return S===Object(S)},d=function(S){return s.call(S)=="[object Array]"},m=function(S){return s.call(S)=="[object Date]"},b=function(S){return s.call(S)=="[object RegExp]"},O=function(S){return s.call(S)=="[object Boolean]"},$=function(S){return S=S-0,S===S},M=function(S,_){var y=_&&"process"in _?_.process:_;return typeof y!="function"?S:function(v,E){return y(v,S,E)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(S,_){return n(M(a,_),S)},decamelizeKeys:function(S,_){return n(M(o,_),S,_)},pascalizeKeys:function(S,_){return n(M(i,_),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=H:e.humps=H})(dd)})(gs);var md=gs.exports,pd=["class","style"];function hd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=md.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function gd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function vs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return vs(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=gd(d);break;case"style":l.style=hd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=fd(n,pd);return yf(t.tag,$t($t($t({},e),{},{class:a.class,style:$t($t({},a.style),o)},a.attrs),s),r)}var bs=!1;try{bs=!0}catch{}function vd(){if(!bs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ar(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?dt({},t,e):{}}function bd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},dt(e,"fa-".concat(t.size),t.size!==null),dt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),dt(e,"fa-pull-".concat(t.pull),t.pull!==null),dt(e,"fa-swap-opacity",t.swapOpacity),dt(e,"fa-bounce",t.bounce),dt(e,"fa-shake",t.shake),dt(e,"fa-beat",t.beat),dt(e,"fa-fade",t.fade),dt(e,"fa-beat-fade",t.beatFade),dt(e,"fa-flash",t.flash),dt(e,"fa-spin-pulse",t.spinPulse),dt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Vi(t){if(t&&Vn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zr.icon)return Zr.icon(t);if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yd=Ol({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=oe(function(){return Vi(e.icon)}),i=oe(function(){return Ar("classes",bd(e))}),o=oe(function(){return Ar("transform",typeof e.transform=="string"?Zr.transform(e.transform):e.transform)}),s=oe(function(){return Ar("mask",Vi(e.mask))}),l=oe(function(){return od(a.value,$t($t($t($t({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Cn(l,function(d){if(!d)return vd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?vs(l.value.abstract[0],{},r):null});return function(){return c.value}}});id.add(sd);Wf(Oc).component("font-awesome-icon",yd).mount("#app");
