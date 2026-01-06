"use strict";(self["webpackChunkfront_checklist"]=self["webpackChunkfront_checklist"]||[]).push([[504],{33:function(e,t,n){
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function i(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:function(){return p},$H:function(){return L},BH:function(){return V},BX:function(){return ne},Bm:function(){return b},C4:function(){return Q},CE:function(){return _},CP:function(){return c},DY:function(){return q},Gv:function(){return w},J$:function(){return J},Kg:function(){return C},MZ:function(){return s},Mp:function(){return l},NO:function(){return a},Oj:function(){return r},PT:function(){return R},Qd:function(){return k},Ro:function(){return j},SU:function(){return N},TF:function(){return h},Tg:function(){return O},Tn:function(){return y},Tr:function(){return z},We:function(){return B},X$:function(){return u},Y2:function(){return ee},ZH:function(){return M},Zf:function(){return S},bB:function(){return U},cy:function(){return f},gd:function(){return v},pD:function(){return i},rU:function(){return F},tE:function(){return o},u3:function(){return ie},vM:function(){return g},v_:function(){return re},yI:function(){return x},yL:function(){return T},yQ:function(){return $}});const s={},r=[],o=()=>{},a=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,_=e=>"[object Map]"===I(e),g=e=>"[object Set]"===I(e),m=e=>"[object Date]"===I(e),v=e=>"[object RegExp]"===I(e),y=e=>"function"===typeof e,C=e=>"string"===typeof e,b=e=>"symbol"===typeof e,w=e=>null!==e&&"object"===typeof e,T=e=>(w(e)||y(e))&&y(e.then)&&y(e.catch),E=Object.prototype.toString,I=e=>E.call(e),S=e=>I(e).slice(8,-1),k=e=>"[object Object]"===I(e),x=e=>C(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},A=/-\w/g,R=P(e=>e.replace(A,e=>e.slice(1).toUpperCase())),D=/\B([A-Z])/g,O=P(e=>e.replace(D,"-$1").toLowerCase()),M=P(e=>e.charAt(0).toUpperCase()+e.slice(1)),F=P(e=>{const t=e?`on${M(e)}`:"";return t}),L=(e,t)=>!Object.is(e,t),q=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t},j=e=>{const t=C(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const B=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",V=i(H);function z(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=C(i)?Z(i):z(i);if(s)for(const e in s)t[e]=s[e]}return t}if(C(e)||w(e))return e}const K=/;(?![^(]*\))/g,Y=/:([^]+)/,G=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(G,"").split(K).forEach(e=>{if(e){const n=e.split(Y);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Q(e){let t="";if(C(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const i=Q(e[n]);i&&(t+=i+" ")}else if(w(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J=i(X);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ne(e[i],t[i]);return n}function ne(e,t){if(e===t)return!0;let n=m(e),i=m(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=b(e),i=b(t),n||i)return e===t;if(n=f(e),i=f(t),n||i)return!(!n||!i)&&te(e,t);if(n=w(e),i=w(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const n in e){const i=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(i&&!s||!i&&s||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex(e=>ne(e,t))}const se=e=>!(!e||!0!==e["__v_isRef"]),re=e=>C(e)?e:null==e?"":f(e)||w(e)&&(e.toString===E||!y(e.toString))?se(e)?re(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>se(t)?oe(e,t.value):_(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],i)=>(e[ae(t,i)+" =>"]=n,e),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ae(e))}:b(t)?ae(t):!w(t)||f(t)||k(t)?t:String(t),ae=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},125:function(e,t,n){n.d(t,{h1:function(){return c},uA:function(){return s}});var i=n(743);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===r?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},223:function(e,t,n){n.d(t,{Wp:function(){return i.Wp}});var i=n(928),s="firebase",r="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(s,r,"app")},262:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n}},424:function(e,t,n){n.d(t,{$b:function(){return s},Vy:function(){return c}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},641:function(e,t,n){n.d(t,{$u:function(){return re},CE:function(){return Gt},Df:function(){return U},FK:function(){return qt},Gy:function(){return O},K9:function(){return ut},Lk:function(){return en},MZ:function(){return $},OW:function(){return q},QP:function(){return F},bF:function(){return tn},dY:function(){return g},g2:function(){return pe},nI:function(){return gn},pI:function(){return me},qL:function(){return o},uX:function(){return Ht}});var i=n(953),s=n(33);function r(e,t,n,i){try{return i?e(...i):e()}catch(s){a(s,t,n)}}function o(e,t,n,i){if((0,s.Tn)(e)){const o=r(e,t,n,i);return o&&(0,s.yL)(o)&&o.catch(e=>{a(e,t,n)}),o}if((0,s.cy)(e)){const s=[];for(let r=0;r<e.length;r++)s.push(o(e[r],t,n,i));return s}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||s.MZ;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(s){const t=s.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;s=s.parent}if(c)return(0,i.C4)(),r(c,null,10,[e,o,a]),void(0,i.bl)()}l(e,n,a,o,u)}function l(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const c=[];let u=-1;const h=[];let d=null,p=0;const f=Promise.resolve();let _=null;function g(e){const t=_||f;return e?t.then(this?e.bind(this):e):t}function m(e){let t=u+1,n=c.length;while(t<n){const i=t+n>>>1,s=c[i],r=T(s);r<e||r===e&&2&s.flags?t=i+1:n=i}return t}function v(e){if(!(1&e.flags)){const t=T(e),n=c[c.length-1];!n||!(2&e.flags)&&t>=T(n)?c.push(e):c.splice(m(t),0,e),e.flags|=1,y()}}function y(){_||(_=f.then(E))}function C(e){(0,s.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(p+1,0,e):1&e.flags||(h.push(e),e.flags|=1),y()}function b(e,t,n=u+1){for(0;n<c.length;n++){const t=c[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,c.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function w(e){if(h.length){const e=[...new Set(h)].sort((e,t)=>T(e)-T(t));if(h.length=0,d)return void d.push(...e);for(d=e,p=0;p<d.length;p++){const e=d[p];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,p=0}}const T=e=>null==e.id?2&e.flags?-1:1/0:e.id;function E(e){s.tE;try{for(u=0;u<c.length;u++){const e=c[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),r(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<c.length;u++){const e=c[u];e&&(e.flags&=-2)}u=-1,c.length=0,w(e),_=null,(c.length||h.length)&&E(e)}}let I=null,S=null;function k(e){const t=I;return I=e,S=e&&e.type.__scopeId||null,t}function x(e,t=I,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Kt(-1);const s=k(t);let r;try{r=e(...n)}finally{k(s),i._d&&Kt(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function N(e,t,n,s){const r=e.dirs,a=t&&t.dirs;for(let l=0;l<r.length;l++){const c=r[l];a&&(c.oldValue=a[l].value);let u=c.dir[s];u&&((0,i.C4)(),o(u,n,8,[e.el,c,e,t]),(0,i.bl)())}}const P=Symbol("_vte"),A=e=>e.__isTeleport;const R=Symbol("_leaveCb"),D=Symbol("_enterCb");function O(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ie(()=>{e.isMounted=!0}),oe(()=>{e.isUnmounting=!0}),e}const M=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function L(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function q(e,t,n,i,r){const{appear:a,mode:l,persisted:c=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:f,onLeave:_,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:C,onAppearCancelled:b}=t,w=String(e.key),T=L(n,e),E=(e,t)=>{e&&o(e,i,9,t)},I=(e,t)=>{const n=t[1];E(e,t),(0,s.cy)(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},S={mode:l,persisted:c,beforeEnter(t){let i=u;if(!n.isMounted){if(!a)return;i=v||u}t[R]&&t[R](!0);const s=T[w];s&&Qt(e,s)&&s.el[R]&&s.el[R](),E(i,[t])},enter(e){let t=h,i=d,s=p;if(!n.isMounted){if(!a)return;t=y||h,i=C||d,s=b||p}let r=!1;const o=e[D]=t=>{r||(r=!0,E(t?s:i,[e]),S.delayedLeave&&S.delayedLeave(),e[D]=void 0)};t?I(t,[e,o]):o()},leave(t,i){const s=String(e.key);if(t[D]&&t[D](!0),n.isUnmounting)return i();E(f,[t]);let r=!1;const o=t[R]=n=>{r||(r=!0,i(),E(n?m:g,[t]),t[R]=void 0,T[s]===e&&delete T[s])};T[s]=e,_?I(_,[t,o]):o()},clone(e){const s=q(e,t,n,i,r);return r&&r(s),s}};return S}function $(e,t){6&e.shapeFlag&&e.component?(e.transition=t,$(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function U(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:r);o.type===qt?(128&o.patchFlag&&s++,i=i.concat(U(o.children,t,a))):(t||o.type!==Ut)&&i.push(null!=a?rn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function j(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const W=new WeakMap;function B(e,t,n,o,a=!1){if((0,s.cy)(e))return void e.forEach((e,i)=>B(e,t&&((0,s.cy)(t)?t[i]:t),n,o,a));if(V(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&B(e,t,n,o.component.subTree));const l=4&o.shapeFlag?An(o.component):o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,p=u.refs===s.MZ?u.refs={}:u.refs,f=u.setupState,_=(0,i.ux)(f),g=f===s.MZ?s.NO:e=>(0,s.$3)(_,e),m=e=>!0;if(null!=d&&d!==h)if(H(t),(0,s.Kg)(d))p[d]=null,g(d)&&(f[d]=null);else if((0,i.i9)(d)){m(d)&&(d.value=null);const e=t;e.k&&(p[e.k]=null)}if((0,s.Tn)(h))r(h,u,12,[c,p]);else{const t=(0,s.Kg)(h),r=(0,i.i9)(h);if(t||r){const i=()=>{if(e.f){const n=t?g(h)?f[h]:p[h]:m(h)||!e.k?h.value:p[e.k];if(a)(0,s.cy)(n)&&(0,s.TF)(n,l);else if((0,s.cy)(n))n.includes(l)||n.push(l);else if(t)p[h]=[l],g(h)&&(f[h]=p[h]);else{const t=[l];m(h)&&(h.value=t),e.k&&(p[e.k]=t)}}else t?(p[h]=c,g(h)&&(f[h]=c)):r&&(m(h)&&(h.value=c),e.k&&(p[e.k]=c))};if(c){const t=()=>{i(),W.delete(e)};t.id=-1,W.set(e,t),ct(t,n)}else H(e),i()}else 0}}function H(e){const t=W.get(e);t&&(t.flags|=8,W.delete(e))}(0,s.We)().requestIdleCallback,(0,s.We)().cancelIdleCallback;const V=e=>!!e.type.__asyncLoader;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function K(e,t){return(0,s.cy)(e)?e.some(e=>K(e,t)):(0,s.Kg)(e)?e.split(",").includes(t):!!(0,s.gd)(e)&&(e.lastIndex=0,e.test(t))}function Y(e,t){Z(e,"a",t)}function G(e,t){Z(e,"da",t)}function Z(e,t,n=_n){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,i,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&Q(i,t,n,e),e=e.parent}}function Q(e,t,n,i){const r=ee(t,e,i,!0);ae(()=>{(0,s.TF)(i[t],r)},n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function J(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=_n,s=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{(0,i.C4)();const r=yn(n),a=o(t,n,e,s);return r(),(0,i.bl)(),a});return s?r.unshift(a):r.push(a),a}}const te=e=>(t,n=_n)=>{En&&"sp"!==e||ee(e,(...e)=>t(...e),n)},ne=te("bm"),ie=te("m"),se=te("bu"),re=te("u"),oe=te("bum"),ae=te("um"),le=te("sp"),ce=te("rtg"),ue=te("rtc");function he(e,t=_n){ee("ec",e,t)}const de="components";function pe(e,t){return _e(de,e,!0,t)||e}const fe=Symbol.for("v-ndc");function _e(e,t,n=!0,i=!1){const r=I||_n;if(r){const n=r.type;if(e===de){const e=Rn(n,!1);if(e&&(e===t||e===(0,s.PT)(t)||e===(0,s.ZH)((0,s.PT)(t))))return n}const o=ge(r[e]||n[e],t)||ge(r.appContext[e],t);return!o&&i?n:o}}function ge(e,t){return e&&(e[t]||e[(0,s.PT)(t)]||e[(0,s.ZH)((0,s.PT)(t))])}function me(e,t,n,r){let o;const a=n&&n[r],l=(0,s.cy)(e);if(l||(0,s.Kg)(e)){const n=l&&(0,i.g8)(e);let s=!1,r=!1;n&&(s=!(0,i.fE)(e),r=(0,i.Tm)(e),e=(0,i.qA)(e)),o=new Array(e.length);for(let l=0,c=e.length;l<c;l++)o[l]=t(s?r?(0,i.a1)((0,i.lJ)(e[l])):(0,i.lJ)(e[l]):e[l],l,void 0,a&&a[l])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,s.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let i=0,s=n.length;i<s;i++){const s=n[i];o[i]=t(e[s],s,i,a&&a[i])}}else o=[];return n&&(n[r]=o),o}const ve=e=>e?bn(e)?An(e):ve(e.parent):null,ye=(0,s.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ve(e.parent),$root:e=>ve(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xe(e),$forceUpdate:e=>e.f||(e.f=()=>{v(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Tt.bind(e)}),Ce=(e,t)=>e!==s.MZ&&!e.__isScriptSetup&&(0,s.$3)(e,t),be={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:r,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ce(r,t))return l[t]=1,r[t];if(o!==s.MZ&&(0,s.$3)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.$3)(h,t))return l[t]=3,a[t];if(n!==s.MZ&&(0,s.$3)(n,t))return l[t]=4,n[t];Te&&(l[t]=0)}}const d=ye[t];let p,f;return d?("$attrs"===t&&(0,i.u4)(e.attrs,"get",""),d(e)):(p=c.__cssModules)&&(p=p[t])?p:n!==s.MZ&&(0,s.$3)(n,t)?(l[t]=4,n[t]):(f=u.config.globalProperties,(0,s.$3)(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:r,ctx:o}=e;return Ce(r,t)?(r[t]=n,!0):i!==s.MZ&&(0,s.$3)(i,t)?(i[t]=n,!0):!(0,s.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:o,type:a}},l){let c,u;return!!(n[l]||e!==s.MZ&&"$"!==l[0]&&(0,s.$3)(e,l)||Ce(t,l)||(c=o[0])&&(0,s.$3)(c,l)||(0,s.$3)(i,l)||(0,s.$3)(ye,l)||(0,s.$3)(r.config.globalProperties,l)||(u=a.__cssModules)&&u[l])},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function we(e){return(0,s.cy)(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let Te=!0;function Ee(e){const t=xe(e),n=e.proxy,r=e.ctx;Te=!1,t.beforeCreate&&Se(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:f,beforeUpdate:_,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:C,destroyed:b,unmounted:w,render:T,renderTracked:E,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:x,inheritAttrs:N,components:P,directives:A,filters:R}=t,D=null;if(h&&Ie(h,r,D),l)for(const i in l){const e=l[i];(0,s.Tn)(e)&&(r[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(Te=!0,a)for(const i in a){const e=a[i],t=(0,s.Tn)(e)?e.bind(n,n):(0,s.Tn)(e.get)?e.get.bind(n,n):s.tE;0;const o=!(0,s.Tn)(e)&&(0,s.Tn)(e.set)?e.set.bind(n):s.tE,l=On({get:t,set:o});Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)ke(c[i],r,n,i);if(u){const e=(0,s.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{We(t,e[t])})}function O(e,t){(0,s.cy)(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Se(d,e,"c"),O(ne,p),O(ie,f),O(se,_),O(re,g),O(Y,m),O(G,v),O(he,S),O(ue,E),O(ce,I),O(oe,C),O(ae,w),O(le,k),(0,s.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===s.tE&&(e.render=T),null!=N&&(e.inheritAttrs=N),P&&(e.components=P),A&&(e.directives=A),k&&j(e)}function Ie(e,t,n=s.tE){(0,s.cy)(e)&&(e=De(e));for(const r in e){const n=e[r];let o;o=(0,s.Gv)(n)?"default"in n?Be(n.from||r,n.default,!0):Be(n.from||r):Be(n),(0,i.i9)(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[r]=o}}function Se(e,t,n){o((0,s.cy)(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ke(e,t,n,i){let r=i.includes(".")?Et(n,i):()=>n[i];if((0,s.Kg)(e)){const n=t[e];(0,s.Tn)(n)&&bt(r,n)}else if((0,s.Tn)(e))bt(r,e.bind(n));else if((0,s.Gv)(e))if((0,s.cy)(e))e.forEach(e=>ke(e,t,n,i));else{const i=(0,s.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.Tn)(i)&&bt(r,i,e)}else 0}function xe(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:r.length||n||i?(c={},r.length&&r.forEach(e=>Ne(c,e,a,!0)),Ne(c,t,a)):c=t,(0,s.Gv)(t)&&o.set(t,c),c}function Ne(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ne(e,r,n,!0),s&&s.forEach(t=>Ne(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=Pe[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Pe={data:Ae,props:Fe,emits:Fe,methods:Me,computed:Me,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Me,directives:Me,watch:Le,provide:Ae,inject:Re};function Ae(e,t){return t?e?function(){return(0,s.X$)((0,s.Tn)(e)?e.call(this,this):e,(0,s.Tn)(t)?t.call(this,this):t)}:t:e}function Re(e,t){return Me(De(e),De(t))}function De(e){if((0,s.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Me(e,t){return e?(0,s.X$)(Object.create(null),e,t):t}function Fe(e,t){return e?(0,s.cy)(e)&&(0,s.cy)(t)?[...new Set([...e,...t])]:(0,s.X$)(Object.create(null),we(e),we(null!=t?t:{})):t}function Le(e,t){if(!e)return t;if(!t)return e;const n=(0,s.X$)(Object.create(null),e);for(const i in t)n[i]=Oe(e[i],t[i]);return n}function qe(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $e=0;function Ue(e,t){return function(n,i=null){(0,s.Tn)(n)||(n=(0,s.X$)({},n)),null==i||(0,s.Gv)(i)||(i=null);const r=qe(),a=new WeakSet,l=[];let c=!1;const u=r.app={_uid:$e++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Mn,get config(){return r.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,s.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,s.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return r.mixins.includes(e)||r.mixins.push(e),u},component(e,t){return t?(r.components[e]=t,u):r.components[e]},directive(e,t){return t?(r.directives[e]=t,u):r.directives[e]},mount(s,o,a){if(!c){0;const l=u._ceVNode||tn(n,i);return l.appContext=r,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(l,s):e(l,s,a),c=!0,u._container=s,s.__vue_app__=u,An(l.component)}},onUnmount(e){l.push(e)},unmount(){c&&(o(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return r.provides[e]=t,u},runWithContext(e){const t=je;je=u;try{return e()}finally{je=t}}};return u}}let je=null;function We(e,t){if(_n){let n=_n.provides;const i=_n.parent&&_n.parent.provides;i===n&&(n=_n.provides=Object.create(i)),n[e]=t}else 0}function Be(e,t,n=!1){const i=gn();if(i||je){let r=je?je._context.provides:i?null==i.parent||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&(0,s.Tn)(t)?t.call(i&&i.proxy):t}else 0}const He={},Ve=()=>Object.create(He),ze=e=>Object.getPrototypeOf(e)===He;function Ke(e,t,n,s=!1){const r={},o=Ve();e.propsDefaults=Object.create(null),Ge(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:(0,i.Gc)(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Ye(e,t,n,r){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.ux)(o),[u]=e.propsOptions;let h=!1;if(!(r||l>0)||16&l){let i;Ge(e,t,o,a)&&(h=!0);for(const r in c)t&&((0,s.$3)(t,r)||(i=(0,s.Tg)(r))!==r&&(0,s.$3)(t,i))||(u?!n||void 0===n[r]&&void 0===n[i]||(o[r]=Ze(u,c,r,void 0,e,!0)):delete o[r]);if(a!==c)for(const e in a)t&&(0,s.$3)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let r=n[i];if(Nt(e.emitsOptions,r))continue;const l=t[r];if(u)if((0,s.$3)(a,r))l!==a[r]&&(a[r]=l,h=!0);else{const t=(0,s.PT)(r);o[t]=Ze(u,c,t,l,e,!1)}else l!==a[r]&&(a[r]=l,h=!0)}}h&&(0,i.hZ)(e.attrs,"set","")}function Ge(e,t,n,r){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,s.SU)(i))continue;const u=t[i];let h;o&&(0,s.$3)(o,h=(0,s.PT)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:Nt(e.emitsOptions,i)||i in r&&u===r[i]||(r[i]=u,c=!0)}if(a){const t=(0,i.ux)(n),r=l||s.MZ;for(let i=0;i<a.length;i++){const l=a[i];n[l]=Ze(o,t,l,r[l],e,!(0,s.$3)(r,l))}}return c}function Ze(e,t,n,i,r,o){const a=e[n];if(null!=a){const e=(0,s.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.Tn)(e)){const{propsDefaults:s}=r;if(n in s)i=s[n];else{const o=yn(r);i=s[n]=e.call(null,t),o()}}else i=e;r.ce&&r.ce._setProp(n,i)}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,s.Tg)(n)||(i=!0))}return i}const Qe=new WeakMap;function Xe(e,t,n=!1){const i=n?Qe:t.propsCache,r=i.get(e);if(r)return r;const o=e.props,a={},l=[];let c=!1;if(!(0,s.Tn)(e)){const i=e=>{c=!0;const[n,i]=Xe(e,t,!0);(0,s.X$)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!c)return(0,s.Gv)(e)&&i.set(e,s.Oj),s.Oj;if((0,s.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,s.PT)(o[h]);Je(e)&&(a[e]=s.MZ)}else if(o){0;for(const e in o){const t=(0,s.PT)(e);if(Je(t)){const n=o[e],i=a[t]=(0,s.cy)(n)||(0,s.Tn)(n)?{type:n}:(0,s.X$)({},n),r=i.type;let c=!1,u=!0;if((0,s.cy)(r))for(let e=0;e<r.length;++e){const t=r[e],n=(0,s.Tn)(t)&&t.name;if("Boolean"===n){c=!0;break}"String"===n&&(u=!1)}else c=(0,s.Tn)(r)&&"Boolean"===r.name;i[0]=c,i[1]=u,(c||(0,s.$3)(i,"default"))&&l.push(t)}}}const u=[a,l];return(0,s.Gv)(e)&&i.set(e,u),u}function Je(e){return"$"!==e[0]&&!(0,s.SU)(e)}const et=e=>"_"===e||"_ctx"===e||"$stable"===e,tt=e=>(0,s.cy)(e)?e.map(an):[an(e)],nt=(e,t,n)=>{if(t._n)return t;const i=x((...e)=>tt(t(...e)),n);return i._c=!1,i},it=(e,t,n)=>{const i=e._ctx;for(const r in e){if(et(r))continue;const n=e[r];if((0,s.Tn)(n))t[r]=nt(r,n,i);else if(null!=n){0;const e=tt(n);t[r]=()=>e}}},st=(e,t)=>{const n=tt(t);e.slots.default=()=>n},rt=(e,t,n)=>{for(const i in t)!n&&et(i)||(e[i]=t[i])},ot=(e,t,n)=>{const i=e.slots=Ve();if(32&e.vnode.shapeFlag){const e=t._;e?(rt(i,t,n),n&&(0,s.yQ)(i,"_",e,!0)):it(t,i)}else t&&st(e,t)},at=(e,t,n)=>{const{vnode:i,slots:r}=e;let o=!0,a=s.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:rt(r,t,n):(o=!t.$stable,it(t,r)),a=t}else t&&(st(e,t),a={default:1});if(o)for(const s in r)et(s)||null!=a[s]||delete r[s]};function lt(){}const ct=Lt;function ut(e){return ht(e)}function ht(e,t){lt();const n=(0,s.We)();n.__VUE__=!0;const{insert:r,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:f,setScopeId:_=s.tE,insertStaticContent:g}=e,m=(e,t,n,i=null,s=null,r=null,o=void 0,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(i=ee(e),G(e,s,r,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case $t:y(e,t,n,i);break;case Ut:C(e,t,n,i);break;case jt:null==e&&T(t,n,i,o);break;case qt:F(e,t,n,i,s,r,o,a,l);break;default:1&h?S(e,t,n,i,s,r,o,a,l):6&h?L(e,t,n,i,s,r,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,s,r,o,a,l,ie)}null!=u&&s?B(u,e&&e.ref,r,t||e,!t):null==u&&e&&null!=e.ref&&B(e.ref,null,r,e,!0)},y=(e,t,n,i)=>{if(null==e)r(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},C=(e,t,n,i)=>{null==e?r(t.el=u(t.children||""),n,i):t.el=e.el},T=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i,e.el,e.anchor)},E=({el:e,anchor:t},n,i)=>{let s;while(e&&e!==t)s=f(e),r(e,n,i),e=s;r(t,n,i)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},S=(e,t,n,i,s,r,o,a,l)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,i,s,r,o,a,l):D(e,t,s,r,o,a,l)},k=(e,t,n,i,o,c,u,h)=>{let p,f;const{props:_,shapeFlag:g,transition:m,dirs:v}=e;if(p=e.el=l(e.type,c,_&&_.is,_),8&g?d(p,e.children):16&g&&A(e.children,p,null,i,o,dt(e,c),u,h),v&&N(e,null,i,"created"),x(p,e,e.scopeId,u,i),_){for(const e in _)"value"===e||(0,s.SU)(e)||a(p,e,null,_[e],c,i);"value"in _&&a(p,"value",null,_.value,c),(f=_.onVnodeBeforeMount)&&hn(f,i,e)}v&&N(e,null,i,"beforeMount");const y=ft(o,m);y&&m.beforeEnter(p),r(p,t,n),((f=_&&_.onVnodeMounted)||y||v)&&ct(()=>{f&&hn(f,i,e),y&&m.enter(p),v&&N(e,null,i,"mounted")},o)},x=(e,t,n,i,s)=>{if(n&&_(e,n),i)for(let r=0;r<i.length;r++)_(e,i[r]);if(s){let n=s.subTree;if(t===n||Ft(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=s.vnode;x(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},A=(e,t,n,i,s,r,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?ln(e[c]):an(e[c]);m(null,l,t,n,i,s,r,o,a)}},D=(e,t,n,i,r,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||s.MZ,_=t.props||s.MZ;let g;if(n&&pt(n,!1),(g=_.onVnodeBeforeUpdate)&&hn(g,n,t,e),p&&N(t,e,n,"beforeUpdate"),n&&pt(n,!0),(f.innerHTML&&null==_.innerHTML||f.textContent&&null==_.textContent)&&d(c,""),h?O(e.dynamicChildren,h,c,n,i,dt(t,r),o):l||W(e,t,c,null,n,i,dt(t,r),o,!1),u>0){if(16&u)M(c,f,_,n,r);else if(2&u&&f.class!==_.class&&a(c,"class",null,_.class,r),4&u&&a(c,"style",f.style,_.style,r),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const i=e[t],s=f[i],o=_[i];o===s&&"value"!==i||a(c,i,s,o,r,n)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||M(c,f,_,n,r);((g=_.onVnodeUpdated)||p)&&ct(()=>{g&&hn(g,n,t,e),p&&N(t,e,n,"updated")},i)},O=(e,t,n,i,s,r,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===qt||!Qt(l,c)||198&l.shapeFlag)?p(l.el):n;m(l,c,u,null,i,s,r,o,!0)}},M=(e,t,n,i,r)=>{if(t!==n){if(t!==s.MZ)for(const o in t)(0,s.SU)(o)||o in n||a(e,o,t[o],null,r,i);for(const o in n){if((0,s.SU)(o))continue;const l=n[o],c=t[o];l!==c&&"value"!==o&&a(e,o,c,l,r,i)}"value"in n&&a(e,"value",t.value,n.value,r)}},F=(e,t,n,i,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(r(h,n,i),r(d,n,i),A(t.children||[],n,d,s,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(O(e.dynamicChildren,f,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&_t(e,t,!0)):W(e,t,n,d,s,o,a,l,u)},L=(e,t,n,i,s,r,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,i,o,l):q(t,n,i,s,r,o,l):$(e,t,l)},q=(e,t,n,i,s,r,o)=>{const a=e.component=fn(e,i,s);if(z(e)&&(a.ctx.renderer=ie),In(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,U,o),!e.el){const i=a.subTree=tn(Ut);C(null,i,t,n),e.placeholder=i.el}}else U(a,e,t,n,s,r,o)},$=(e,t,n)=>{const i=t.component=e.component;if(Dt(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,t,n);i.next=t,i.update()}else t.el=e.el,i.vnode=t},U=(e,t,n,r,o,a,l)=>{const c=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:r,vnode:u}=e;{const n=mt(e);if(n)return t&&(t.el=u.el,j(e,t,l)),void n.asyncDep.then(()=>{e.isUnmounted||c()})}let h,d=t;0,pt(e,!1),t?(t.el=u.el,j(e,t,l)):t=u,n&&(0,s.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&hn(h,r,t,u),pt(e,!0);const f=Pt(e);0;const _=e.subTree;e.subTree=f,m(_,f,p(_.el),ee(_),e,o,a),t.el=f.el,null===d&&Mt(e,f.el),i&&ct(i,o),(h=t.props&&t.props.onVnodeUpdated)&&ct(()=>hn(h,r,t,u),o)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d,root:p,type:f}=e,_=V(t);if(pt(e,!1),u&&(0,s.DY)(u),!_&&(i=c&&c.onVnodeBeforeMount)&&hn(i,d,t),pt(e,!0),l&&re){const t=()=>{e.subTree=Pt(e),re(l,e.subTree,e,o,null)};_&&f.__asyncHydrate?f.__asyncHydrate(l,e,t):t()}else{p.ce&&!1!==p.ce._def.shadowRoot&&p.ce._injectChildStyle(f);const i=e.subTree=Pt(e);0,m(null,i,n,r,e,o,a),t.el=i.el}if(h&&ct(h,o),!_&&(i=c&&c.onVnodeMounted)){const e=t;ct(()=>hn(i,d,e),o)}(256&t.shapeFlag||d&&V(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&ct(e.a,o),e.isMounted=!0,t=n=r=null}};e.scope.on();const u=e.effect=new i.X2(c);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>v(d),pt(e,!0),h()},j=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,Ye(e,t.props,s,n),at(e,t.children,n),(0,i.C4)(),b(e),(0,i.bl)()},W=(e,t,n,i,s,r,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void K(c,h,n,i,s,r,o,a,l);if(256&p)return void H(c,h,n,i,s,r,o,a,l)}8&f?(16&u&&J(c,s,r),h!==c&&d(n,h)):16&u?16&f?K(c,h,n,i,s,r,o,a,l):J(c,s,r,!0):(8&u&&d(n,""),16&f&&A(h,n,i,s,r,o,a,l))},H=(e,t,n,i,r,o,a,l,c)=>{e=e||s.Oj,t=t||s.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const i=t[p]=c?ln(t[p]):an(t[p]);m(e[p],i,n,null,r,o,a,l,c)}u>h?J(e,r,o,!0,!1,d):A(t,n,i,r,o,a,l,c,d)},K=(e,t,n,i,r,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;while(u<=d&&u<=p){const i=e[u],s=t[u]=c?ln(t[u]):an(t[u]);if(!Qt(i,s))break;m(i,s,n,null,r,o,a,l,c),u++}while(u<=d&&u<=p){const i=e[d],s=t[p]=c?ln(t[p]):an(t[p]);if(!Qt(i,s))break;m(i,s,n,null,r,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,s=e<h?t[e].el:i;while(u<=p)m(null,t[u]=c?ln(t[u]):an(t[u]),n,s,r,o,a,l,c),u++}}else if(u>p)while(u<=d)G(e[u],r,o,!0),u++;else{const f=u,_=u,g=new Map;for(u=_;u<=p;u++){const e=t[u]=c?ln(t[u]):an(t[u]);null!=e.key&&g.set(e.key,u)}let v,y=0;const C=p-_+1;let b=!1,w=0;const T=new Array(C);for(u=0;u<C;u++)T[u]=0;for(u=f;u<=d;u++){const i=e[u];if(y>=C){G(i,r,o,!0);continue}let s;if(null!=i.key)s=g.get(i.key);else for(v=_;v<=p;v++)if(0===T[v-_]&&Qt(i,t[v])){s=v;break}void 0===s?G(i,r,o,!0):(T[s-_]=u+1,s>=w?w=s:b=!0,m(i,t[s],n,null,r,o,a,l,c),y++)}const E=b?gt(T):s.Oj;for(v=E.length-1,u=C-1;u>=0;u--){const e=_+u,s=t[e],d=t[e+1],p=e+1<h?d.el||d.placeholder:i;0===T[u]?m(null,s,n,p,r,o,a,l,c):b&&(v<0||u!==E[v]?Y(s,n,p,2):v--)}}},Y=(e,t,n,i,s=null)=>{const{el:a,type:l,transition:c,children:u,shapeFlag:h}=e;if(6&h)return void Y(e.component.subTree,t,n,i);if(128&h)return void e.suspense.move(t,n,i);if(64&h)return void l.move(e,t,n,ie);if(l===qt){r(a,t,n);for(let e=0;e<u.length;e++)Y(u[e],t,n,i);return void r(e.anchor,t,n)}if(l===jt)return void E(e,t,n);const d=2!==i&&1&h&&c;if(d)if(0===i)c.beforeEnter(a),r(a,t,n),ct(()=>c.enter(a),s);else{const{leave:i,delayLeave:s,afterLeave:l}=c,u=()=>{e.ctx.isUnmounted?o(a):r(a,t,n)},h=()=>{a._isLeaving&&a[R](!0),i(a,()=>{u(),l&&l()})};s?s(a,u,h):h()}else r(a,t,n)},G=(e,t,n,s=!1,r=!1)=>{const{type:o,props:a,ref:l,children:c,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:p,cacheIndex:f}=e;if(-2===d&&(r=!1),null!=l&&((0,i.C4)(),B(l,null,n,e,!0),(0,i.bl)()),null!=f&&(t.renderCache[f]=void 0),256&h)return void t.ctx.deactivate(e);const _=1&h&&p,g=!V(e);let m;if(g&&(m=a&&a.onVnodeBeforeUnmount)&&hn(m,t,e),6&h)X(e.component,n,s);else{if(128&h)return void e.suspense.unmount(n,s);_&&N(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,ie,s):u&&!u.hasOnce&&(o!==qt||d>0&&64&d)?J(u,t,n,!1,!0):(o===qt&&384&d||!r&&16&h)&&J(c,t,n),s&&Z(e)}(g&&(m=a&&a.onVnodeUnmounted)||_)&&ct(()=>{m&&hn(m,t,e),_&&N(e,null,t,"unmounted")},n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===qt)return void Q(n,i);if(t===jt)return void I(e);const r=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:i}=s,o=()=>t(n,r);i?i(e.el,r,o):o()}else r()},Q=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:i,scope:r,job:o,subTree:a,um:l,m:c,a:u}=e;vt(c),vt(u),i&&(0,s.DY)(i),r.stop(),o&&(o.flags|=8,G(a,e,t,n)),l&&ct(l,t),ct(()=>{e.isUnmounted=!0},t)},J=(e,t,n,i=!1,s=!1,r=0)=>{for(let o=r;o<e.length;o++)G(e[o],t,n,i,s)},ee=e=>{if(6&e.shapeFlag)return ee(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=f(e.anchor||e.el),n=t&&t[P];return n?f(n):t};let te=!1;const ne=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),t._vnode=e,te||(te=!0,b(),w(),te=!1)},ie={p:m,um:G,m:Y,r:Z,mt:q,mc:A,pc:W,pbc:O,n:ee,o:e};let se,re;return t&&([se,re]=t(ie)),{render:ne,hydrate:se,createApp:Ue(ne,se)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _t(e,t,n=!1){const i=e.children,r=t.children;if((0,s.cy)(i)&&(0,s.cy)(r))for(let s=0;s<i.length;s++){const e=i[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=ln(r[s]),t.el=e.el),n||-2===t.patchFlag||_t(e,t)),t.type===$t&&-1!==t.patchFlag&&(t.el=e.el),t.type!==Ut||t.el||(t.el=e.el)}}function gt(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(s=n[n.length-1],e[s]<l){t[i]=s,n.push(i);continue}r=0,o=n.length-1;while(r<o)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}r=n.length,o=n[r-1];while(r-- >0)n[r]=o,o=t[o];return n}function mt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mt(t)}function vt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),Ct=()=>{{const e=Be(yt);return e}};function bt(e,t,n){return wt(e,t,n)}function wt(e,t,n=s.MZ){const{immediate:r,deep:a,flush:l,once:c}=n;const u=(0,s.X$)({},n);const h=t&&r||!t&&"post"!==l;let d;if(En)if("sync"===l){const e=Ct();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=s.tE,e.resume=s.tE,e.pause=s.tE,e}const p=_n;u.call=(e,t,n)=>o(e,p,t,n);let f=!1;"post"===l?u.scheduler=e=>{ct(e,p&&p.suspense)}:"sync"!==l&&(f=!0,u.scheduler=(e,t)=>{t?e():v(e)}),u.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};const _=(0,i.wB)(e,t,u);return En&&(d?d.push(_):h&&_()),_}function Tt(e,t,n){const i=this.proxy,r=(0,s.Kg)(e)?e.includes(".")?Et(i,e):()=>i[e]:e.bind(i,i);let o;(0,s.Tn)(t)?o=t:(o=t.handler,n=t);const a=yn(this),l=wt(r,o.bind(i),n);return a(),l}function Et(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const It=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,s.PT)(t)}Modifiers`]||e[`${(0,s.Tg)(t)}Modifiers`];function St(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||s.MZ;let r=n;const a=t.startsWith("update:"),l=a&&It(i,t.slice(7));let c;l&&(l.trim&&(r=n.map(e=>(0,s.Kg)(e)?e.trim():e)),l.number&&(r=n.map(s.bB)));let u=i[c=(0,s.rU)(t)]||i[c=(0,s.rU)((0,s.PT)(t))];!u&&a&&(u=i[c=(0,s.rU)((0,s.Tg)(t))]),u&&o(u,e,6,r);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,r)}}const kt=new WeakMap;function xt(e,t,n=!1){const i=n?kt:t.emitsCache,r=i.get(e);if(void 0!==r)return r;const o=e.emits;let a={},l=!1;if(!(0,s.Tn)(e)){const i=e=>{const n=xt(e,t,!0);n&&(l=!0,(0,s.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||l?((0,s.cy)(o)?o.forEach(e=>a[e]=null):(0,s.X$)(a,o),(0,s.Gv)(e)&&i.set(e,a),a):((0,s.Gv)(e)&&i.set(e,null),null)}function Nt(e,t){return!(!e||!(0,s.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,s.$3)(e,(0,s.Tg)(t))||(0,s.$3)(e,t))}function Pt(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,props:p,data:f,setupState:_,ctx:g,inheritAttrs:m}=e,v=k(e);let y,C;try{if(4&n.shapeFlag){const e=r||i,t=e;y=an(h.call(t,e,d,p,_,f,g)),C=c}else{const e=t;0,y=an(e.length>1?e(p,{attrs:c,slots:l,emit:u}):e(p,null)),C=t.props?c:At(c)}}catch(w){Wt.length=0,a(w,e,1),y=tn(Ut)}let b=y;if(C&&!1!==m){const e=Object.keys(C),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(s.CP)&&(C=Rt(C,o)),b=rn(b,C,!1,!0))}return n.dirs&&(b=rn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&$(b,n.transition),y=b,k(v),y}const At=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Rt=(e,t)=>{const n={};for(const i in e)(0,s.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Dt(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!s&&!a||a&&a.$stable)||i!==o&&(i?!o||Ot(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?Ot(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Nt(c,n))return!0}}return!1}function Ot(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Nt(n,r))return!0}return!1}function Mt({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const Ft=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,s.cy)(e)?t.effects.push(...e):t.effects.push(e):C(e)}const qt=Symbol.for("v-fgt"),$t=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),jt=Symbol.for("v-stc"),Wt=[];let Bt=null;function Ht(e=!1){Wt.push(Bt=e?null:[])}function Vt(){Wt.pop(),Bt=Wt[Wt.length-1]||null}let zt=1;function Kt(e,t=!1){zt+=e,e<0&&Bt&&t&&(Bt.hasOnce=!0)}function Yt(e){return e.dynamicChildren=zt>0?Bt||s.Oj:null,Vt(),zt>0&&Bt&&Bt.push(e),e}function Gt(e,t,n,i,s,r){return Yt(en(e,t,n,i,s,r,!0))}function Zt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Xt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,s.Kg)(e)||(0,i.i9)(e)||(0,s.Tn)(e)?{i:I,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,i=0,r=null,o=(e===qt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Jt(t),scopeId:S,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:I};return l?(cn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,s.Kg)(n)?8:16),zt>0&&!a&&Bt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Bt.push(c),c}const tn=nn;function nn(e,t=null,n=null,r=0,o=null,a=!1){if(e&&e!==fe||(e=Ut),Zt(e)){const i=rn(e,t,!0);return n&&cn(i,n),zt>0&&!a&&Bt&&(6&i.shapeFlag?Bt[Bt.indexOf(e)]=i:Bt.push(i)),i.patchFlag=-2,i}if(Dn(e)&&(e=e.__vccOpts),t){t=sn(t);let{class:e,style:n}=t;e&&!(0,s.Kg)(e)&&(t.class=(0,s.C4)(e)),(0,s.Gv)(n)&&((0,i.ju)(n)&&!(0,s.cy)(n)&&(n=(0,s.X$)({},n)),t.style=(0,s.Tr)(n))}const l=(0,s.Kg)(e)?1:Ft(e)?128:A(e)?64:(0,s.Gv)(e)?4:(0,s.Tn)(e)?2:0;return en(e,t,n,r,o,l,a,!0)}function sn(e){return e?(0,i.ju)(e)||ze(e)?(0,s.X$)({},e):e:null}function rn(e,t,n=!1,i=!1){const{props:r,ref:o,patchFlag:a,children:l,transition:c}=e,u=t?un(r||{},t):r,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xt(u),ref:t&&t.ref?n&&o?(0,s.cy)(o)?o.concat(Jt(t)):[o,Jt(t)]:Jt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&$(h,c.clone(h)),h}function on(e=" ",t=0){return tn($t,null,e,t)}function an(e){return null==e||"boolean"===typeof e?tn(Ut):(0,s.cy)(e)?tn(qt,null,e.slice()):Zt(e)?ln(e):tn($t,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function cn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,s.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),cn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||ze(t)?3===i&&I&&(1===I.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=I}}else(0,s.Tn)(t)?(t={default:t,_ctx:I},n=32):(t=String(t),64&i?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function un(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,s.C4)([t.class,i.class]));else if("style"===e)t.style=(0,s.Tr)([t.style,i.style]);else if((0,s.Mp)(e)){const n=t[e],r=i[e];!r||n===r||(0,s.cy)(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}function hn(e,t,n,i=null){o(e,t,7,[n,i])}const dn=qe();let pn=0;function fn(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||dn,a={uid:pn++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(r,o),emitsOptions:xt(r,o),emit:null,emitted:null,propsDefaults:s.MZ,inheritAttrs:r.inheritAttrs,ctx:s.MZ,data:s.MZ,props:s.MZ,attrs:s.MZ,slots:s.MZ,refs:s.MZ,setupState:s.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=St.bind(null,a),e.ce&&e.ce(a),a}let _n=null;const gn=()=>_n||I;let mn,vn;{const e=(0,s.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach(t=>t(e)):i[0](e)}};mn=t("__VUE_INSTANCE_SETTERS__",e=>_n=e),vn=t("__VUE_SSR_SETTERS__",e=>En=e)}const yn=e=>{const t=_n;return mn(e),e.scope.on(),()=>{e.scope.off(),mn(t)}},Cn=()=>{_n&&_n.scope.off(),mn(null)};function bn(e){return 4&e.vnode.shapeFlag}let wn,Tn,En=!1;function In(e,t=!1,n=!1){t&&vn(t);const{props:i,children:s}=e.vnode,r=bn(e);Ke(e,i,r,t),ot(e,s,n||t);const o=r?Sn(e,t):void 0;return t&&vn(!1),o}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,be);const{setup:o}=n;if(o){(0,i.C4)();const n=e.setupContext=o.length>1?Pn(e):null,l=yn(e),c=r(o,e,0,[e.props,n]),u=(0,s.yL)(c);if((0,i.bl)(),l(),!u&&!e.sp||V(e)||j(e),u){if(c.then(Cn,Cn),t)return c.then(n=>{kn(e,n,t)}).catch(t=>{a(t,e,0)});e.asyncDep=c}else kn(e,c,t)}else xn(e,t)}function kn(e,t,n){(0,s.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),xn(e,n)}function xn(e,t,n){const r=e.type;if(!e.render){if(!t&&wn&&!r.render){const t=r.template||xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=r,l=(0,s.X$)((0,s.X$)({isCustomElement:n,delimiters:o},i),a);r.render=wn(t,l)}}e.render=r.render||s.tE,Tn&&Tn(e)}{const t=yn(e);(0,i.C4)();try{Ee(e)}finally{(0,i.bl)(),t()}}}const Nn={get(e,t){return(0,i.u4)(e,"get",""),e[t]}};function Pn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Nn),slots:e.slots,emit:e.emit,expose:t}}function An(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function Rn(e,t=!0){return(0,s.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Dn(e){return(0,s.Tn)(e)&&"__vccOpts"in e}const On=(e,t)=>{const n=(0,i.EW)(e,t,En);return n};const Mn="3.5.22"},743:function(e,t,n){n.d(t,{$L:function(){return L},$g:function(){return N},A4:function(){return p},Am:function(){return Y},As:function(){return q},Cv:function(){return U},FA:function(){return O},Fy:function(){return I},Hk:function(){return r},Im:function(){return H},K3:function(){return l},KA:function(){return u},Ku:function(){return J},OE:function(){return X},T9:function(){return T},Uj:function(){return h},bD:function(){return z},cY:function(){return E},dI:function(){return Z},eX:function(){return A},g:function(){return D},gR:function(){return W},gz:function(){return G},jZ:function(){return k},kH:function(){return V},kj:function(){return Q},lV:function(){return x},qc:function(){return j},vA:function(){return s},yU:function(){return w},yw:function(){return B},zW:function(){return P}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw r(t)},r=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,l=a?n[e.charAt(s)]:64;++s;const u=s<e.length,h=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==l||null==h)throw new c;const d=t<<2|o>>4;if(i.push(d),64!==l){const e=o<<4&240|l>>2;if(i.push(e),64!==h){const e=l<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=f(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=()=>g().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/abertura-anoletivo/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},y=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},C=()=>{try{return m()||v()||y()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},T=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function x(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function P(){try{return"object"===typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?M(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new D(i,o,n);return a}}function M(e,t){return e.replace(F,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=L(d(r[0])||""),n=L(d(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:t,claims:n,data:i,signature:s}},U=function(e){const t=$(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},j=function(e){const t=$(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function H(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function z(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(K(n)&&K(r)){if(!z(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function K(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):u<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const e=(r<<5|r>>>27)+i+c+s+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<t){if(0===r)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<t)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function Z(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,s(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;r=65536+(t<<10)+n}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}},751:function(e,t,n){n.d(t,{Ef:function(){return z}});var i=n(641),s=n(33);n(953);
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let r;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{r=o.createPolicy("vue",{createHTML:e=>e})}catch(G){}const a=r?e=>r.createHTML(e):e=>e,l="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s="svg"===t?u.createElementNS(l,e):"mathml"===t?u.createElementNS(c,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&i&&null!=i.multiple&&s.setAttribute("multiple",i.multiple),s},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===r||!(s=s.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e);const s=h.content;if("svg"===i||"mathml"===i){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},p=Symbol("_vtc"),f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function _(e,t,n){const i=e[p];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),m=Symbol("_vsh");const v=Symbol("");const y=/(?:^|;)\s*display\s*:/;function C(e,t,n){const i=e.style,r=(0,s.Kg)(n);let o=!1;if(n&&!r){if(t)if((0,s.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&w(i,t,"")}else for(const e in t)null==n[e]&&w(i,e,"");for(const e in n)"display"===e&&(o=!0),w(i,e,n[e])}else if(r){if(t!==n){const e=i[v];e&&(n+=";"+e),i.cssText=n,o=y.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=o?i.display:"",e[m]&&(i.display="none"))}const b=/\s*!important$/;function w(e,t,n){if((0,s.cy)(n))n.forEach(n=>w(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=I(e,t);b.test(n)?e.setProperty((0,s.Tg)(i),n.replace(b,""),"important"):e[i]=n}}const T=["Webkit","Moz","ms"],E={};function I(e,t){const n=E[t];if(n)return n;let i=(0,s.PT)(t);if("filter"!==i&&i in e)return E[t]=i;i=(0,s.ZH)(i);for(let s=0;s<T.length;s++){const n=T[s]+i;if(n in e)return E[t]=n}return t}const S="http://www.w3.org/1999/xlink";function k(e,t,n,i,r,o=(0,s.J$)(t)){i&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(S,t.slice(6,t.length)):e.setAttributeNS(S,t,n):null==n||o&&!(0,s.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,s.Bm)(n)?String(n):n)}function x(e,t,n,i,r){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?e.getAttribute("value")||"":e.value,s=null==n?"checkbox"===e.type?"on":"":String(n);return i===s&&"_value"in e||(e.value=s),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,s.Y2)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(G){0}l&&e.removeAttribute(r||t)}function N(e,t,n,i){e.addEventListener(t,n,i)}function P(e,t,n,i){e.removeEventListener(t,n,i)}const A=Symbol("_vei");function R(e,t,n,i,s=null){const r=e[A]||(e[A]={}),o=r[t];if(i&&o)o.value=i;else{const[n,a]=O(t);if(i){const o=r[t]=q(i,s);N(e,n,o,a)}else o&&(P(e,n,o,a),r[t]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function O(e){let t;if(D.test(e)){let n;t={};while(n=e.match(D))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,s.Tg)(e.slice(2));return[n,t]}let M=0;const F=Promise.resolve(),L=()=>M||(F.then(()=>M=0),M=Date.now());function q(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)($(e,n.value),t,5,[e])};return n.value=e,n.attached=L(),n}function $(e,t){if((0,s.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const U=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,j=(e,t,n,i,r,o)=>{const a="svg"===r;"class"===t?_(e,i,a):"style"===t?C(e,n,i):(0,s.Mp)(t)?(0,s.CP)(t)||R(e,t,n,i,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):W(e,t,i,a))?(x(e,t,i),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||k(e,t,i,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,s.Kg)(i)?("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),k(e,t,i,a)):x(e,(0,s.PT)(t),i,o,t)};function W(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&U(t)&&(0,s.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!U(t)||!(0,s.Kg)(n))&&t in e}"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const B=(0,s.X$)({patchProp:j},d);let H;function V(){return H||(H=(0,i.K9)(B))}const z=(...e)=>{const t=V().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Y(e);if(!i)return;const r=t._component;(0,s.Tn)(r)||r.render||r.template||(r.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,K(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function K(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Y(e){if((0,s.Kg)(e)){const t=document.querySelector(e);return t}return e}},928:function(e,t,n){n.d(t,{MF:function(){return _e},j6:function(){return he},om:function(){return ue},Sx:function(){return me},Wp:function(){return ge},KO:function(){return ve}});var i=n(125),s=n(424),r=n(743);const o=(e,t)=>t.some(t=>e instanceof t);let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,_=new WeakMap;function g(e){const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(w(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),_.set(t,e),t}function m(e){if(d.has(e))return;const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)});d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function C(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),w(h.get(this))}:function(...t){return w(e.apply(T(this),t))}:function(t,...n){const i=e.call(T(this),t,...n);return p.set(i,t.sort?t.sort():[t]),w(i)}}function b(e){return"function"===typeof e?C(e):(e instanceof IDBTransaction&&m(e),o(e,c())?new Proxy(e,v):e)}function w(e){if(e instanceof IDBRequest)return g(e);if(f.has(e))return f.get(e);const t=b(e);return t!==e&&(f.set(e,t),_.set(t,e)),t}const T=e=>_.get(e);function E(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=w(o);return i&&o.addEventListener("upgradeneeded",e=>{i(w(o.result),e.oldVersion,e.newVersion,w(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{r&&e.addEventListener("close",()=>r()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=S.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!I.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return k.set(t,r),r}y(e=>({...e,get:(t,n,i)=>x(t,n)||e.get(t,n,i),has:(t,n)=>!!x(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const A="@firebase/app",R="0.9.13",D=new s.Vy("@firebase/app"),O="@firebase/app-compat",M="@firebase/analytics-compat",F="@firebase/analytics",L="@firebase/app-check-compat",q="@firebase/app-check",$="@firebase/auth",U="@firebase/auth-compat",j="@firebase/database",W="@firebase/database-compat",B="@firebase/functions",H="@firebase/functions-compat",V="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",Y="@firebase/messaging-compat",G="@firebase/performance",Z="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",J="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",se="9.23.0",re="[DEFAULT]",oe={[A]:"fire-core",[O]:"fire-core-compat",[F]:"fire-analytics",[M]:"fire-analytics-compat",[q]:"fire-app-check",[L]:"fire-app-check-compat",[$]:"fire-auth",[U]:"fire-auth-compat",[j]:"fire-rtdb",[W]:"fire-rtdb-compat",[B]:"fire-fn",[H]:"fire-fn-compat",[V]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[Y]:"fire-fcm-compat",[G]:"fire-perf",[Z]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[J]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pe=new r.FA("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=se;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const s=Object.assign({name:re,automaticDataCollectionEnabled:!1},t),o=s.name;if("string"!==typeof o||!o)throw pe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.T9)()),!n)throw pe.create("no-options");const a=ae.get(o);if(a){if((0,r.bD)(n,a.options)&&(0,r.bD)(s,a.config))return a;throw pe.create("duplicate-app",{appName:o})}const l=new i.h1(o);for(const i of le.values())l.addComponent(i);const c=new fe(n,s,l);return ae.set(o,c),c}function me(e=re){const t=ae.get(e);if(!t&&e===re&&(0,r.T9)())return ge();if(!t)throw pe.create("no-app",{appName:e});return t}function ve(e,t,n){var s;let r=null!==(s=oe[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ue(new i.uA(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",Ce=1,be="firebase-heartbeat-store";let we=null;function Te(){return we||(we=E(ye,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch(e=>{throw pe.create("idb-open",{originalErrorMessage:e.message})})),we}async function Ee(e){try{const t=await Te(),n=await t.transaction(be).objectStore(be).get(Se(e));return n}catch(t){if(t instanceof r.g)D.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),i=n.transaction(be,"readwrite"),s=i.objectStore(be);await s.put(t,Se(e)),await i.done}catch(n){if(n instanceof r.g)D.warn(n.message);else{const e=pe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,xe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Ae(this._heartbeatsCache.heartbeats),i=(0,r.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Ae(e,t=ke){const n=[];let i=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Re{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.zW)()&&(0,r.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ee(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,r.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){ue(new i.uA("platform-logger",e=>new N(e),"PRIVATE")),ue(new i.uA("heartbeat",e=>new Ne(e),"PRIVATE")),ve(A,R,e),ve(A,R,"esm2017"),ve("fire-js","")}Oe("")},933:function(e,t,n){n.d(t,{C3:function(){return Yo},off:function(){return $o},onValue:function(){return qo},ref:function(){return Do}});var i=n(928),s=n(125),r=n(743),o=n(424);const a="@firebase/database",l="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function u(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,r.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,r.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,r.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},f=p("localStorage"),_=p("sessionStorage"),g=new o.Vy("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,r.kj)(e),n=new r.gz;n.update(t);const i=n.digest();return r.K3.encodeByteArray(i)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=y.apply(null,i):t+="object"===typeof i?(0,r.As)(i):i,t+=" "}return t};let C=null,b=!0;const w=function(e,t){(0,r.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o.$b.VERBOSE,C=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?C=e:(C=null,_.remove("logging_enabled"))},T=function(...e){if(!0===b&&(b=!1,null===C&&!0===_.get("logging_enabled")&&w(!0)),C){const t=y.apply(null,e);C(t)}},E=function(e){return function(...t){T(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);g.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw g.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+y(...e);g.warn(t)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if((0,r.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},A="[MIN_NAME]",R="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===A||t===R)return-1;if(t===A||e===R)return 1;{const n=z(e),i=z(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},O=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,r.As)(t))},F=function(e){if("object"!==typeof e||null===e)return(0,r.As)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,r.As)(t[i]),n+=":",n+=F(e[t[i]]);return n+="}",n},L=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function q(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){(0,r.vA)(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,l,c;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(h.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function W(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const B=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,V=2147483647,z=function(e){if(B.test(e)){const t=Number(e);if(t>=H&&t<=V)return t}return null},K=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t},Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="5",ee="v",te="s",ne="r",ie="f",se=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if((0,r.vA)("string"===typeof t,"typeof type must == string"),(0,r.vA)("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const s=[];return q(n,(e,t)=>{s.push(e+"="+t)}),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,r.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,r.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},_e={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new pe),fe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",Ce="close",be="pLPCommand",we="pRTLPCB",Te="id",Ee="pw",Ie="ser",Se="cb",ke="seg",xe="ts",Ne="d",Pe="dframe",Ae=1870,Re=30,De=Ae-Re,Oe=25e3,Me=3e4;class Fe{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Me)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Le((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==Ce)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Se]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=J,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[re]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!(0,r.$g)()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,r.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,r.KA)(t),i=L(n,De);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,r.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Te]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,r.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Le{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,r.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Le.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){T("frame writing exception"),s.stack&&T(s.stack),T(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[Ee]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Ae))break;{const e=this.pendingSegs.shift();n=n+"&"+ke+i+"="+e.seg+"&"+xe+i+"="+e.ts+"&"+Ne+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Oe)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,r.$g)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=16384,$e=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class je{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ge(t),this.connURL=je.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const o={};return o[ee]=J,!(0,r.$g)()&&"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(o[ne]=ie),t&&(o[te]=t),n&&(o[re]=n),i&&(o[ae]=i),s&&(o[oe]=s),de(e,le,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,r.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${J}/${c}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/abertura-anoletivo/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ue(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!je.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,r.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,r.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,r.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=L(t,qe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of We.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Be=6e4,He=5e3,Ve=10240,ze=102400,Ke="t",Ye="d",Ge="s",Ze="r",Qe="e",Xe="o",Je="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Je?this.upgradeIfSecondaryHealthy_():t===Ze?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Je,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ke,e);if(Ye in e){const n=e[Ye];if(t===nt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Ze?this.onReset_(n):t===Qe?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),J!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Be))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,r.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){(0,r.vA)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends rt{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,r.jZ)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,r.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new ct("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function vt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function Ct(e,t){const n=ht(e),i=ht(t);if(null===n)return t;if(n===i)return Ct(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,r.OE)(this.parts_[n]);St(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,r.OE)(t),St(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=(0,r.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+kt(e))}function kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends rt{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new xt}getInitialEvent(e){return(0,r.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,Pt=3e5,At=3e4,Rt=1.3,Dt=3e4,Ot="server_kill",Mt=3;class Ft extends st{constructor(e,t,n,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ft.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,r.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,r.As)(s)),(0,r.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new r.cY,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),(0,r.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,r.vA)(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,s=>{const r=s["d"],o=s["s"];Ft.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,r.gR)(e,"w")){const n=(0,r.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,r.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,r.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,r.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,r.As)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,r.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,r.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){(0,r.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ot)},s))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),l())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,r.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>F(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,r.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,(0,r.jZ)()?e["framework.cordova"]=1:(0,r.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,r.Im)(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Lt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Lt(A,e),i=new Lt(A,t);return 0!==this.compare(n,i)}minPost(){return Lt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;class Ut extends qt{static get __EMPTY_NODE(){return $t}static set __EMPTY_NODE(e){$t=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,r.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(R,$t)}makePost(e,t){return(0,r.vA)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Lt(e,$t)}toString(){return".key"}}const jt=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=i?i:Vt.EMPTY_NODE,this.right=null!=s?s:Vt.EMPTY_NODE}copy(e,t,n,i,s){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class Ht{copy(e,t,n,i,s){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,t=Vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e,t){return D(e.name,t.name)}function Kt(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Gt(e){Yt=e}Vt.EMPTY_NODE=new Ht;const Zt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,r.vA)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,r.gR)(t,".sv"),"Priority must be a string or number.")}else(0,r.vA)(e===Yt||e.isEmpty(),"priority of unexpected type.");(0,r.vA)(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xt,Jt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,r.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,r.vA)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:((0,r.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),s=tn.VALUE_TYPE_ORDER.indexOf(n);return(0,r.vA)(i>=0,"Unknown leaf type: "+t),(0,r.vA)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Jt=e}function sn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rn extends qt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(R,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Jt(e);return new Lt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new rn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),u=s(l+1,i);return o=e[l],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,c,u)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),u=e[r],h=n?n(u):u;l(new Bt(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Bt.BLACK):(a(i,Bt.BLACK),a(i,Bt.RED))}return r},o=new ln(e.length),a=r(o);return new Vt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,r.vA)(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(e){const t=(0,r.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vt?t:null}hasIndex(e){return(0,r.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,r.vA)(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Lt.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?cn(n,e.getCompare()):hn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=o,new dn(u,c)}addToIndexes(e,t){const n=(0,r.kH)(this.indexes_,(n,i)=>{const s=(0,r.yw)(this.indexSet_,i);if((0,r.vA)(s,"Missing index implementation for "+i),n===hn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Lt.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),cn(n,s.getCompare())}return hn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Lt(e.name,i))),s.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,r.kH)(this.indexes_,n=>{if(n===hn)return n;{const i=t.get(e.name);return i?n.remove(new Lt(e.name,i)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,r.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new fn(new Vt(Kt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,r.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Lt(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?pn:this.priorityNode_;return new fn(i,r,s)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,r.vA)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(pt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(on,(r,o)=>{t[r]=o.val(e),n++,s&&fn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Lt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Lt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Lt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _n extends fn{constructor(){super(new Vt(Kt),fn.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const gn=new _n;Object.defineProperties(Lt,{MIN:{value:new Lt(A,fn.EMPTY_NODE)},MAX:{value:new Lt(R,gn)}}),Ut.__EMPTY_NODE=fn.EMPTY_NODE,tn.__childrenNodeConstructor=fn,Gt(gn),sn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=!0;function vn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,r.vA)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,vn(t))}if(e instanceof Array||!mn){let n=fn.EMPTY_NODE;return q(e,(t,i)=>{if((0,r.gR)(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(vn(t))}{const n=[];let i=!1;const s=e;if(q(s,(e,t)=>{if("."!==e.substring(0,1)){const s=vn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Lt(e,s)))}}),0===n.length)return fn.EMPTY_NODE;const r=cn(n,zt,e=>e.name,Kt);if(i){const e=cn(n,on.getCompare());return new fn(r,vn(t),new dn({".priority":e},{".priority":on}))}return new fn(r,vn(t),dn.Default)}}nn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends qt{constructor(e){super(),this.indexPath_=e,(0,r.vA)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}makePost(e,t){const n=vn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Lt(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Lt(R,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(e,t){const n=vn(e);return new Lt(t,n)}toString(){return".value"}}const bn=new Cn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function In(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){(0,r.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(En(t,a)):(0,r.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(In(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,i)=>{t.hasChild(e)||n.trackChildChange(En(e,i))}),t.isLeafNode()||t.forEachChild(on,(t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(In(t,i,s))}else n.trackChildChange(Tn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.indexedFilter_=new kn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const s=this;return t.forEachChild(on,(e,t)=>{s.matches(new Lt(e,t))||(i=i.updateImmediateChild(e,fn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),s=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);s?n++:i=i.updateImmediateChild(t.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,r.vA)(a.numChildren()===this.limit_,"");const l=new Lt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=r&&(r.name===t||a.hasChild(r.name)))r=i.getChildAfterChild(this.index_,r,this.reverse_);const h=null==r?1:o(r,l),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=s&&s.trackChildChange(In(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,fn.EMPTY_NODE),i=null!=r&&this.rangedFilter_.matches(r);return i?(null!=s&&s.trackChildChange(Tn(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:u&&o(c,l)>=0?(null!=s&&(s.trackChildChange(En(c.name,c.node)),s.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,fn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,r.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,r.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:A}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,r.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,r.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,r.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){return e.loadsAllData()?new kn(e.getIndex()):e.hasLimit()?new Nn(e):new xn(e)}function Rn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===on?n="$priority":e.index_===bn?n="$value":e.index_===jt?n="$key":((0,r.vA)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,r.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,r.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,r.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,r.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,r.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Dn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends st{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,r.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=On.getListenId_(e,n),a={};this.listens_[o]=a;const l=Rn(e._queryParams);this.restRequest_(s+".json",l,(e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,r.yw)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=On.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Rn(e._queryParams),n=e._path.toString(),i=new r.cY;return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,r.Am)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,r.$L)(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Ln(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ht(t);e.children.has(i)||e.children.set(i,Fn());const s=e.children.get(i);t=pt(t),Ln(s,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):$n(e,(e,i)=>{const s=new ct(t.toString()+"/"+e);qn(i,s,n)})}function $n(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=1e4,Wn=3e4,Bn=3e5;class Hn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Un(e);const n=jn+(Wn-jn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;q(e,(e,i)=>{i>0&&(0,r.gR)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn;function zn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Vn||(Vn={}));class Gn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Vn.ACK_USER_WRITE,this.source=zn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,r.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Gn(ut(),t,this.revert)}}return(0,r.vA)(ht(this.path)===e,"operationForChild called for unrelated child."),new Gn(pt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=Vn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new Zn(this.source,ut()):new Zn(this.source,pt(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Vn.OVERWRITE}operationForChild(e){return yt(this.path)?new Qn(this.source,ut(),this.snap.getImmediateChild(e)):new Qn(this.source,pt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Vn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Qn(this.source,ut(),t.value):new Xn(this.source,ut(),t)}return(0,r.vA)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ti(e,t,n,i){const s=[],r=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Sn(t.childName,t.snapshotNode))}),ni(e,s,"child_removed",t,i,n),ni(e,s,"child_added",t,i,n),ni(e,s,"child_moved",r,i,n),ni(e,s,"child_changed",t,i,n),ni(e,s,"value",t,i,n),s}function ni(e,t,n,i,s,r){const o=i.filter(e=>e.type===n);o.sort((t,n)=>si(e,t,n)),o.forEach(n=>{const i=ii(e,n,r);s.forEach(s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))})})}function ii(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function si(e,t,n){if(null==t.childName||null==n.childName)throw(0,r.Hk)("Should only compare child_ events.");const i=new Lt(t.childName,t.snapshotNode),s=new Lt(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return{eventCache:e,serverCache:t}}function oi(e,t,n,i){return ri(new Jn(t,n,i),e.serverCache)}function ai(e,t,n,i){return ri(e.eventCache,new Jn(t,n,i))}function li(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ci(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;const hi=()=>(ui||(ui=new Vt(O)),ui);class di{constructor(e,t=hi()){this.value=e,this.children=t}static fromObject(e){let t=new di(null);return q(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(pt(e),t);if(null!=s){const e=vt(new ct(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(pt(e)):new di(null)}}set(e,t){if(yt(e))return new di(t,this.children);{const n=ht(e),i=this.children.get(n)||new di(null),s=i.set(pt(e),t),r=this.children.insert(n,s);return new di(this.value,r)}}remove(e){if(yt(e))return this.children.isEmpty()?new di(null):new di(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const i=n.remove(pt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new di(null):new di(this.value,s)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),i=this.children.get(n)||new di(null),s=i.setTree(pt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new di(this.value,r)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(vt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ht(e),s=this.children.get(i);return s?s.findOnPath_(pt(e),vt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ht(e),s=this.children.get(i);return s?s.foreachOnPath_(pt(e),vt(t,i),n):new di(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new di(null))}}function fi(e,t,n){if(yt(t))return new pi(new di(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ct(s,t);return r=r.updateChild(o,n),new pi(e.writeTree_.set(s,r))}{const i=new di(n),s=e.writeTree_.setTree(t,i);return new pi(s)}}}function _i(e,t,n){let i=e;return q(n,(e,n)=>{i=fi(i,vt(t,e),n)}),i}function gi(e,t){if(yt(t))return pi.empty();{const n=e.writeTree_.setTree(t,new di(null));return new pi(n)}}function mi(e,t){return null!=vi(e,t)}function vi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ct(n.path,t)):null}function yi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Lt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Lt(e,n.value))}),t}function Ci(e,t){if(yt(t))return e;{const n=vi(e,t);return new pi(null!=n?new di(n):e.writeTree_.subtree(t))}}function bi(e){return e.writeTree_.isEmpty()}function wi(e,t){return Ti(ut(),e.writeTree_,t)}function Ti(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,s)=>{".priority"===t?((0,r.vA)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ti(vt(e,t),s,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t){return zi(t,e)}function Ii(e,t,n,i,s){(0,r.vA)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=fi(e.visibleWrites,t,n)),e.lastWriteId=i}function Si(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function ki(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);(0,r.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&xi(t,i.path)?s=!1:wt(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return Ni(e),!0;if(i.snap)e.visibleWrites=gi(e.visibleWrites,i.path);else{const t=i.children;q(t,t=>{e.visibleWrites=gi(e.visibleWrites,vt(i.path,t))})}return!0}return!1}function xi(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(vt(e.path,n),t))return!0;return!1}function Ni(e){e.visibleWrites=Ai(e.allWrites,Pi,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Pi(e){return e.visible}function Ai(e,t,n){let i=pi.empty();for(let s=0;s<e.length;++s){const o=e[s];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=Ct(n,e),i=fi(i,t,o.snap)):wt(e,n)&&(t=Ct(e,n),i=fi(i,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,r.Hk)("WriteRecord should have .snap or .children");if(wt(n,e))t=Ct(n,e),i=_i(i,t,o.children);else if(wt(e,n))if(t=Ct(e,n),yt(t))i=_i(i,ut(),o.children);else{const e=(0,r.yw)(o.children,ht(t));if(e){const n=e.getChild(pt(t));i=fi(i,ut(),n)}}}}}return i}function Ri(e,t,n,i,s){if(i||s){const r=Ci(e.visibleWrites,t);if(!s&&bi(r))return n;if(s||null!=n||mi(r,ut())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=Ai(e.allWrites,r,t),a=n||fn.EMPTY_NODE;return wi(o,a)}return null}{const i=vi(e.visibleWrites,t);if(null!=i)return i;{const i=Ci(e.visibleWrites,t);if(bi(i))return n;if(null!=n||mi(i,ut())){const e=n||fn.EMPTY_NODE;return wi(i,e)}return null}}}function Di(e,t,n){let i=fn.EMPTY_NODE;const s=vi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(on,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const s=Ci(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=wi(Ci(s,new ct(e)),t);i=i.updateImmediateChild(e,n)}),yi(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Ci(e.visibleWrites,t);return yi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Oi(e,t,n,i,s){(0,r.vA)(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(mi(e.visibleWrites,o))return null;{const t=Ci(e.visibleWrites,o);return bi(t)?s.getChild(n):wi(t,s.getChild(n))}}function Mi(e,t,n,i){const s=vt(t,n),r=vi(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=Ci(e.visibleWrites,s);return wi(t,i.getNode().getImmediateChild(n))}return null}function Fi(e,t){return vi(e.visibleWrites,t)}function Li(e,t,n,i,s,r,o){let a;const l=Ci(e.visibleWrites,t),c=vi(l,ut());if(null!=c)a=c;else{if(null==n)return[];a=wi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<s)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function qi(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function $i(e,t,n,i){return Ri(e.writeTree,e.treePath,t,n,i)}function Ui(e,t){return Di(e.writeTree,e.treePath,t)}function ji(e,t,n,i){return Oi(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return Fi(e.writeTree,vt(e.treePath,t))}function Bi(e,t,n,i,s,r){return Li(e.writeTree,e.treePath,t,n,i,s,r)}function Hi(e,t,n){return Mi(e.writeTree,e.treePath,t,n)}function Vi(e,t){return zi(vt(e.treePath,t),e.writeTree)}function zi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,r.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,r.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,In(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,En(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,r.Hk)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,In(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Gi=new Yi;class Zi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ci(this.viewCache_),s=Bi(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){return{filter:e}}function Xi(e,t){(0,r.vA)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,r.vA)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Ji(e,t,n,i,s){const o=new Ki;let a,l;if(n.type===Vn.OVERWRITE){const c=n;c.source.fromUser?a=is(e,t,c.path,c.snap,i,s,o):((0,r.vA)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!yt(c.path),a=ns(e,t,c.path,c.snap,i,s,l,o))}else if(n.type===Vn.MERGE){const c=n;c.source.fromUser?a=rs(e,t,c.path,c.children,i,s,o):((0,r.vA)(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=as(e,t,c.path,c.children,i,s,l,o))}else if(n.type===Vn.ACK_USER_WRITE){const r=n;a=r.revert?us(e,t,r.path,i,s,o):ls(e,t,r.path,r.affectedTree,i,s,o)}else{if(n.type!==Vn.LISTEN_COMPLETE)throw(0,r.Hk)("Unknown operation type: "+n.type);a=cs(e,t,n.path,i,o)}const c=o.getChanges();return es(t,a,c),{viewCache:a,changes:c}}function es(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=li(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(wn(li(t)))}}function ts(e,t,n,i,s,o){const a=t.eventCache;if(null!=Wi(i,n))return t;{let l,c;if(yt(n))if((0,r.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ci(t),s=n instanceof fn?n:fn.EMPTY_NODE,r=Ui(i,s);l=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=$i(i,ci(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,r.vA)(1===dt(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const o=ji(i,n,s,c);l=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=pt(n);let h;if(a.isCompleteForChild(u)){c=t.serverCache.getNode();const e=ji(i,n,a.getNode(),c);h=null!=e?a.getNode().getImmediateChild(u).updateChild(r,e):a.getNode().getImmediateChild(u)}else h=Hi(i,u,t.serverCache);l=null!=h?e.filter.updateChild(a.getNode(),u,h,r,s,o):a.getNode()}}return oi(t,l,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ns(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ht(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const s=pt(n),r=l.getNode().getImmediateChild(e),o=r.updateChild(s,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,s,Gi,null)}const h=ai(t,c,l.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Zi(s,h,r);return ts(e,h,n,s,d,a)}function is(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const u=new Zi(s,t,r);if(yt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=oi(t,c,!0,e.filter.filtersNodes());else{const s=ht(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=oi(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=pt(n),c=a.getNode().getImmediateChild(s);let h;if(yt(r))h=i;else{const e=u.getCompleteChild(s);h=null!=e?".priority"===ft(r)&&e.getChild(mt(r)).isEmpty()?e:e.updateChild(r,i):fn.EMPTY_NODE}if(c.equals(h))l=t;else{const n=e.filter.updateChild(a.getNode(),s,h,r,u,o);l=oi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ss(e,t){return e.eventCache.isCompleteForChild(t)}function rs(e,t,n,i,s,r,o){let a=t;return i.foreach((i,l)=>{const c=vt(n,i);ss(t,ht(c))&&(a=is(e,a,c,l,s,r,o))}),i.foreach((i,l)=>{const c=vt(n,i);ss(t,ht(c))||(a=is(e,a,c,l,s,r,o))}),a}function os(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function as(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=yt(n)?i:new di(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),u=os(e,l,i);c=ns(e,c,new ct(n),u,s,r,o,a)}}),l.children.inorderTraversal((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),u=os(e,l,i);c=ns(e,c,new ct(n),u,s,r,o,a)}}),c}function ls(e,t,n,i,s,r,o){if(null!=Wi(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(yt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ns(e,t,n,l.getNode().getChild(n),s,r,a,o);if(yt(n)){let i=new di(null);return l.getNode().forEachChild(jt,(e,t)=>{i=i.set(new ct(e),t)}),as(e,t,n,i,s,r,a,o)}return t}{let c=new di(null);return i.foreach((e,t)=>{const i=vt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))}),as(e,t,n,c,s,r,a,o)}}function cs(e,t,n,i,s){const r=t.serverCache,o=ai(t,r.getNode(),r.isFullyInitialized()||yt(n),r.isFiltered());return ts(e,o,n,i,Gi,s)}function us(e,t,n,i,s,o){let a;if(null!=Wi(i,n))return t;{const l=new Zi(i,t,s),c=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=$i(i,ci(t));else{const e=t.serverCache.getNode();(0,r.vA)(e instanceof fn,"serverChildren would be complete if leaf node"),n=Ui(i,e)}u=e.filter.updateFullNode(c,n,o)}else{const s=ht(n);let r=Hi(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=c.getImmediateChild(s)),u=null!=r?e.filter.updateChild(c,s,r,pt(n),l,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,fn.EMPTY_NODE,pt(n),l,o):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=$i(i,ci(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Wi(i,ut()),oi(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new kn(n.getIndex()),s=An(n);this.processor_=Qi(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(fn.EMPTY_NODE,r.getNode(),null),l=s.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),c=new Jn(a,r.isFullyInitialized(),i.filtersNodes()),u=new Jn(l,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=ri(u,c),this.eventGenerator_=new ei(this.query_)}get query(){return this.query_}}function ds(e){return e.viewCache_.serverCache.getNode()}function ps(e,t){const n=ci(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function fs(e){return 0===e.eventRegistrations_.length}function _s(e,t){e.eventRegistrations_.push(t)}function gs(e,t,n){const i=[];if(n){(0,r.vA)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ms(e,t,n,i){t.type===Vn.MERGE&&null!==t.source.queryId&&((0,r.vA)(ci(e.viewCache_),"We should always have a full cache before handling merges"),(0,r.vA)(li(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=Ji(e.processor_,s,t,n,i);return Xi(e.processor_,o.viewCache),(0,r.vA)(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ys(e,o.changes,o.viewCache.eventCache.getNode(),null)}function vs(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(on,(e,t)=>{i.push(Tn(e,t))})}return n.isFullyInitialized()&&i.push(wn(n.getNode())),ys(e,i,n.getNode(),t)}function ys(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return ti(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs,bs;class ws{constructor(){this.views=new Map}}function Ts(e){(0,r.vA)(!Cs,"__referenceConstructor has already been defined"),Cs=e}function Es(){return(0,r.vA)(Cs,"Reference.ts has not been loaded"),Cs}function Is(e){return 0===e.views.size}function Ss(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return(0,r.vA)(null!=o,"SyncTree gave us an op for an invalid query."),ms(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(ms(r,t,n,i));return s}}function ks(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=$i(n,s?i:null),r=!1;e?r=!0:i instanceof fn?(e=Ui(n,i),r=!1):(e=fn.EMPTY_NODE,r=!1);const o=ri(new Jn(e,r,!1),new Jn(i,s,!1));return new hs(t,o)}return o}function xs(e,t,n,i,s,r){const o=ks(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),_s(o,n),vs(o,n)}function Ns(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Os(e);if("default"===s)for(const[l,c]of e.views.entries())o=o.concat(gs(c,n,i)),fs(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const t=e.views.get(s);t&&(o=o.concat(gs(t,n,i)),fs(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Os(e)&&r.push(new(Es())(t._repo,t._path)),{removed:r,events:o}}function Ps(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function As(e,t){let n=null;for(const i of e.views.values())n=n||ps(i,t);return n}function Rs(e,t){const n=t._queryParams;if(n.loadsAllData())return Ms(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ds(e,t){return null!=Rs(e,t)}function Os(e){return null!=Ms(e)}function Ms(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e){(0,r.vA)(!bs,"__referenceConstructor has already been defined"),bs=e}function Ls(){return(0,r.vA)(bs,"Reference.ts has not been loaded"),bs}let qs=1;class $s{constructor(e){this.listenProvider_=e,this.syncPointTree_=new di(null),this.pendingWriteTree_=qi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Us(e,t,n,i,s){return Ii(e.pendingWriteTree_,t,n,i,s),s?Qs(e,new Qn(zn(),t,n)):[]}function js(e,t,n=!1){const i=Si(e.pendingWriteTree_,t),s=ki(e.pendingWriteTree_,t);if(s){let t=new di(null);return null!=i.snap?t=t.set(ut(),!0):q(i.children,e=>{t=t.set(new ct(e),!0)}),Qs(e,new Gn(i.path,t,n))}return[]}function Ws(e,t,n){return Qs(e,new Qn(Kn(),t,n))}function Bs(e,t,n){const i=di.fromObject(n);return Qs(e,new Xn(Kn(),t,i))}function Hs(e,t){return Qs(e,new Zn(Kn(),t))}function Vs(e,t,n){const i=ir(e,n);if(i){const n=sr(i),s=n.path,r=n.queryId,o=Ct(s,t),a=new Zn(Yn(r),o);return rr(e,s,a)}return[]}function zs(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Ds(o,t))){const l=Ns(o,t,n,i);Is(o)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),s=e.syncPointTree_.findOnPath(r,(e,t)=>Os(t));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=or(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=er(e,i);e.listenProvider_.startListening(ar(s),tr(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ar(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(nr(t));e.listenProvider_.stopListening(ar(t),n)})}lr(e,c)}return a}function Ks(e,t,n,i){const s=ir(e,i);if(null!=s){const i=sr(s),r=i.path,o=i.queryId,a=Ct(r,t),l=new Qn(Yn(o),a,n);return rr(e,r,l)}return[]}function Ys(e,t,n,i){const s=ir(e,i);if(s){const i=sr(s),r=i.path,o=i.queryId,a=Ct(r,t),l=di.fromObject(n),c=new Xn(Yn(o),a,l);return rr(e,r,c)}return[]}function Gs(e,t,n,i=!1){const s=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{const n=Ct(e,s);o=o||As(t,n),a=a||Os(t)});let l,c=e.syncPointTree_.get(s);if(c?(a=a||Os(c),o=o||As(c,ut())):(c=new ws,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=o)l=!0;else{l=!1,o=fn.EMPTY_NODE;const t=e.syncPointTree_.subtree(s);t.foreachChild((e,t)=>{const n=As(t,ut());n&&(o=o.updateImmediateChild(e,n))})}const u=Ds(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=nr(t);(0,r.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=cr();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ei(e.pendingWriteTree_,s);let d=xs(c,t,n,h,o,l);if(!u&&!a&&!i){const n=Rs(c,t);d=d.concat(ur(e,t,n))}return d}function Zs(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=Ct(e,t),s=As(n,i);if(s)return s});return Ri(s,t,r,n,i)}function Qs(e,t){return Xs(t,e.syncPointTree_,null,Ei(e.pendingWriteTree_,ut()))}function Xs(e,t,n,i){if(yt(e.path))return Js(e,t,n,i);{const s=t.get(ut());null==n&&null!=s&&(n=As(s,ut()));let r=[];const o=ht(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Vi(i,o);r=r.concat(Xs(a,l,e,t))}return s&&(r=r.concat(Ss(s,e,i,n))),r}}function Js(e,t,n,i){const s=t.get(ut());null==n&&null!=s&&(n=As(s,ut()));let r=[];return t.children.inorderTraversal((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Vi(i,t),l=e.operationForChild(t);l&&(r=r.concat(Js(l,s,o,a)))}),s&&(r=r.concat(Ss(s,e,i,n))),r}function er(e,t){const n=t.query,i=tr(e,n);return{hashFn:()=>{const e=ds(t)||fn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Vs(e,n._path,i):Hs(e,n._path);{const i=W(t,n);return zs(e,n,null,i)}}}}function tr(e,t){const n=nr(t);return e.queryToTagMap.get(n)}function nr(e){return e._path.toString()+"$"+e._queryIdentifier}function ir(e,t){return e.tagToQueryMap.get(t)}function sr(e){const t=e.indexOf("$");return(0,r.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function rr(e,t,n){const i=e.syncPointTree_.get(t);(0,r.vA)(i,"Missing sync point for query tag that we're tracking");const s=Ei(e.pendingWriteTree_,t);return Ss(i,n,s,null)}function or(e){return e.fold((e,t,n)=>{if(t&&Os(t)){const e=Ms(t);return[e]}{let e=[];return t&&(e=Ps(t)),q(n,(t,n)=>{e=e.concat(n)}),e}})}function ar(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ls())(e._repo,e._path):e}function lr(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=nr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function cr(){return qs++}function ur(e,t,n){const i=t._path,s=tr(e,t),o=er(e,n),a=e.listenProvider_.startListening(ar(t),s,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,r.vA)(!Os(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold((e,t,n)=>{if(!yt(e)&&t&&Os(t))return[Ms(t).query];{let e=[];return t&&(e=e.concat(Ps(t).map(e=>e.query))),q(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ar(i),tr(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hr(t)}node(){return this.node_}}class dr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new dr(this.syncTree_,t)}node(){return Zs(this.syncTree_,this.path_)}}const pr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},fr=function(e,t,n){return e&&"object"===typeof e?((0,r.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_r(e[".sv"],t,n):"object"===typeof e[".sv"]?gr(e[".sv"],t):void(0,r.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_r=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,r.vA)(!1,"Unexpected server value: "+e)}},gr=function(e,t,n){e.hasOwnProperty("increment")||(0,r.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,r.vA)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,r.vA)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},mr=function(e,t,n,i){return yr(t,new dr(n,e),i)},vr=function(e,t,n){return yr(e,new hr(t),n)};function yr(e,t,n){const i=e.getPriority().val(),s=fr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=fr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new tn(r,vn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new tn(s))),i.forEachChild(on,(e,i)=>{const s=yr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function br(e,t){let n=t instanceof ct?t:new ct(t),i=e,s=ht(n);while(null!==s){const e=(0,r.yw)(i.node.children,s)||{children:{},childCount:0};i=new Cr(s,i,e),n=pt(n),s=ht(n)}return i}function wr(e){return e.node.value}function Tr(e,t){e.node.value=t,Pr(e)}function Er(e){return e.node.childCount>0}function Ir(e){return void 0===wr(e)&&!Er(e)}function Sr(e,t){q(e.node.children,(n,i)=>{t(new Cr(n,e,i))})}function kr(e,t,n,i){n&&!i&&t(e),Sr(e,e=>{kr(e,t,!0,i)}),n&&i&&t(e)}function xr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Nr(e){return new ct(null===e.parent?e.name:Nr(e.parent)+"/"+e.name)}function Pr(e){null!==e.parent&&Ar(e.parent,e.name,e)}function Ar(e,t,n){const i=Ir(n),s=(0,r.gR)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Pr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Pr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=/[\[\].#$\/\u0000-\u001F\u007F]/,Dr=/[\[\].#$\u0000-\u001F\u007F]/,Or=10485760,Mr=function(e){return"string"===typeof e&&0!==e.length&&!Rr.test(e)},Fr=function(e){return"string"===typeof e&&0!==e.length&&!Dr.test(e)},Lr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fr(e)},qr=function(e,t,n){const i=n instanceof ct?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kt(i));if("function"===typeof t)throw new Error(e+"contains a function "+kt(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+kt(i));if("string"===typeof t&&t.length>Or/3&&(0,r.OE)(t)>Or)throw new Error(e+"contains a string greater than "+Or+" utf8 bytes "+kt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(q(t,(t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Mr(t)))throw new Error(e+" contains an invalid key ("+t+") "+kt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(i,t),qr(e,r,i),It(i)}),n&&s)throw new Error(e+' contains ".value" child '+kt(i)+" in addition to actual children.")}},$r=function(e,t,n,i){if((!i||void 0!==n)&&!Fr(n))throw new Error((0,r.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ur=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$r(e,t,n,i)},jr=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Mr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Lr(n))throw new Error((0,r.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Br(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||bt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Hr(e,t,n){Br(e,n),zr(e,e=>bt(e,t))}function Vr(e,t,n){Br(e,n),zr(e,e=>wt(e,t)||wt(t,e))}function zr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Kr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Kr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();C&&T("event: "+n.toString()),K(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="repo_interrupt",Gr=25;class Zr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qr(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||Y())e.server_=new On(e.repoInfo_,(t,n,i,s)=>{eo(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>to(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,r.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Ft(e.repoInfo_,t,(t,n,i,s)=>{eo(e,t,n,i,s)},t=>{to(e,t)},t=>{no(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new Hn(e.stats_,e.server_)),e.infoData_=new Mn,e.infoSyncTree_=new $s({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ws(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening:()=>{}}),io(e,"connected",!1),e.serverSyncTree_=new $s({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{const r=s(n,i);Vr(e.eventQueue_,t._path,r)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xr(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Jr(e){return pr({timestamp:Xr(e)})}function eo(e,t,n,i,s){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=(0,r.kH)(n,e=>vn(e));a=Ys(e.serverSyncTree_,o,t,s)}else{const t=vn(n);a=Ks(e.serverSyncTree_,o,t,s)}else if(i){const t=(0,r.kH)(n,e=>vn(e));a=Bs(e.serverSyncTree_,o,t)}else{const t=vn(n);a=Ws(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=fo(e,o)),Vr(e.eventQueue_,l,a)}function to(e,t){io(e,"connected",t),!1===t&&ro(e)}function no(e,t){q(t,(t,n)=>{io(e,t,n)})}function io(e,t,n){const i=new ct("/.info/"+t),s=vn(n);e.infoData_.updateSnapshot(i,s);const r=Ws(e.infoSyncTree_,i,s);Vr(e.eventQueue_,i,r)}function so(e){return e.nextWriteId_++}function ro(e){co(e,"onDisconnectEvents");const t=Jr(e),n=Fn();qn(e.onDisconnect_,ut(),(i,s)=>{const r=mr(i,s,e.serverSyncTree_,t);Ln(n,i,r)});let i=[];qn(n,ut(),(t,n)=>{i=i.concat(Ws(e.serverSyncTree_,t,n));const s=Co(e,t);fo(e,s)}),e.onDisconnect_=Fn(),Vr(e.eventQueue_,ut(),i)}function oo(e,t,n){let i;i=".info"===ht(t._path)?Gs(e.infoSyncTree_,t,n):Gs(e.serverSyncTree_,t,n),Hr(e.eventQueue_,t._path,i)}function ao(e,t,n){let i;i=".info"===ht(t._path)?zs(e.infoSyncTree_,t,n):zs(e.serverSyncTree_,t,n),Hr(e.eventQueue_,t._path,i)}function lo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Yr)}function co(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function uo(e,t,n){return Zs(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function ho(e,t=e.transactionQueueTree_){if(t||yo(e,t),wr(t)){const n=mo(e,t);(0,r.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&po(e,Nr(t),n)}else Er(t)&&Sr(t,t=>{ho(e,t)})}function po(e,t,n){const i=n.map(e=>e.currentWriteId),s=uo(e,t,i);let o=s;const a=s.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,r.vA)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Ct(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,i=>{co(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(js(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();yo(e,br(e.transactionQueueTree_,t)),ho(e,e.transactionQueueTree_),Vr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)K(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}fo(e,t)}},a)}function fo(e,t){const n=go(e,t),i=Nr(n),s=mo(e,n);return _o(e,s,i),i}function _o(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){const o=t[l],c=Ct(n,o.path);let u,h=!1;if((0,r.vA)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,s=s.concat(js(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Gr)h=!0,u="maxretry",s=s.concat(js(e.serverSyncTree_,o.currentWriteId,!0));else{const n=uo(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){qr("transaction failed: Data returned ",i,o.path);let t=vn(i);const l="object"===typeof i&&null!=i&&(0,r.gR)(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,u=Jr(e),h=vr(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=so(e),a.splice(a.indexOf(c),1),s=s.concat(Us(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),s=s.concat(js(e.serverSyncTree_,c,!0))}else h=!0,u="nodata",s=s.concat(js(e.serverSyncTree_,o.currentWriteId,!0))}Vr(e.eventQueue_,n,s),s=[],h&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===u?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(u),!1,null))))}yo(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)K(i[r]);ho(e,e.transactionQueueTree_)}function go(e,t){let n,i=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===wr(i))i=br(i,n),t=pt(t),n=ht(t);return i}function mo(e,t){const n=[];return vo(e,t,n),n.sort((e,t)=>e.order-t.order),n}function vo(e,t,n){const i=wr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Sr(t,t=>{vo(e,t,n)})}function yo(e,t){const n=wr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Tr(t,n.length>0?n:void 0)}Sr(t,t=>{yo(e,t)})}function Co(e,t){const n=Nr(go(e,t)),i=br(e.transactionQueueTree_,t);return xr(i,t=>{bo(e,t)}),bo(e,i),kr(i,t=>{bo(e,t)}),n}function bo(e,t){const n=wr(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,r.vA)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,r.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(js(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Tr(t,void 0):n.length=o+1,Vr(e.eventQueue_,Nr(t),s);for(let e=0;e<i.length;e++)K(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function To(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const Eo=function(e,t){const n=Io(e),i=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ct(n.pathString)}},Io=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(s=wo(e.substring(u,h)));const d=To(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},So="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,r.As)(this.snapshot.exportVal())}}class xo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,r.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const e=Dn(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return Dn(this._queryParams)}isEqual(e){if(e=(0,r.Ku)(e),!(e instanceof Po))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Ao extends Po{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Ao(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ro{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Oo(this.ref,e);return new Ro(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Ro(n,Oo(this.ref,t),on)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Do(e,t){return e=(0,r.Ku)(e),e._checkNotDeleted("ref"),void 0!==t?Oo(e._root,t):e._root}function Oo(e,t){return e=(0,r.Ku)(e),null===ht(e._path)?Ur("child","path",t,!1):$r("child","path",t,!1),new Ao(e._repo,vt(e._path,t))}class Mo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ko("value",this,new Ro(e.snapshotNode,new Ao(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}matches(e){return e instanceof Mo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Fo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xo(this,e,t):null}createEvent(e,t){(0,r.vA)(null!=e.childName,"Child events should have a childName.");const n=Oo(new Ao(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ko(e.type,this,new Ro(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Lo(e,t,n,i,s){let r;if("object"===typeof i&&(r=void 0,s=i),"function"===typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{ao(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new No(n,r||void 0),a="value"===t?new Mo(o):new Fo(t,o);return oo(e._repo,e,a),()=>ao(e._repo,e,a)}function qo(e,t,n,i){return Lo(e,"value",t,n,i)}function $o(e,t,n){let i=null;const s=n?new No(n):null;"value"===t?i=new Mo(s):t&&(i=new Fo(t,s)),ao(e._repo,e,i)}Ts(Ao),Fs(Ao);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uo="FIREBASE_DATABASE_EMULATOR_HOST",jo={};let Wo=!1;function Bo(e,t,n,i){e.repoInfo_=new ue(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function Ho(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Eo(r,s),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/abertura-anoletivo/"}[Uo]),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=Eo(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const u=s&&o?new X(X.OWNER):new Q(e.name,e.options,t);jr("Invalid Firebase Database URL",l),yt(l.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zo(c,e,u,new Z(e.name,n));return new Ko(h,e)}function Vo(e,t){const n=jo[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),lo(e),delete n[e.key]}function zo(e,t,n,i){let s=jo[t.name];s||(s={},jo[t.name]=s);let r=s[e.toURLString()];return r&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zr(e,Wo,n,i),s[e.toURLString()]=r,r}class Ko{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Vo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}function Yo(e=(0,i.Sx)(),t){const n=(0,i.j6)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,r.yU)("database");e&&Go(n,...e)}return n}function Go(e,t,n,i={}){e=(0,r.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&S("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&S('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:(0,r.Fy)(i.mockUserToken,e.app.options.projectId);o=new X(t)}Bo(s,t,n,o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(e){u(i.MF),(0,i.om)(new s.uA("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ho(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(a,l,e),(0,i.KO)(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Zo()},953:function(e,t,n){n.d(t,{C4:function(){return E},EW:function(){return De},Gc:function(){return me},IG:function(){return Ie},Kh:function(){return ge},Pr:function(){return Ae},R1:function(){return Ne},Tm:function(){return be},X2:function(){return c},a1:function(){return ke},bl:function(){return I},fE:function(){return we},g8:function(){return Ce},hZ:function(){return F},i9:function(){return xe},ju:function(){return Te},lJ:function(){return Se},qA:function(){return q},u4:function(){return M},ux:function(){return Ee},wB:function(){return qe},yC:function(){return o}});var i=n(33);
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s,r;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=s,!e&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){1===++this._on&&(this.prevScope=s,s=this)}off(){this._on>0&&0===--this._on&&(s=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return s}const l=new WeakSet;class c{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,s&&s.active&&s.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||p(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,S(this),g(this);const e=r,t=w;r=this,w=!0;try{return this.fn()}finally{0,m(this),r=e,w=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)C(e);this.deps=this.depsTail=void 0,S(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let u,h,d=0;function p(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=u,u=e}function f(){d++}function _(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=i}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function m(e){let t,n=e.depsTail,i=n;while(i){const e=i.prevDep;-1===i.version?(i===n&&(n=e),C(i),b(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=t,e.depsTail=n}function v(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(y(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function y(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===k)return;if(e.globalVersion=k,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!v(e)))return;e.flags|=2;const t=e.dep,n=r,s=w;r=e,w=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,i.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{r=n,w=s,m(e),e.flags&=-3}}function C(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)C(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function b(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let w=!0;const T=[];function E(){T.push(w),w=!1}function I(){const e=T.pop();w=void 0===e||e}function S(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=r;r=void 0;try{t()}finally{r=e}}}let k=0;class x{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class N{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!r||!w||r===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==r)t=this.activeLink=new x(r,this),r.deps?(t.prevDep=r.depsTail,r.depsTail.nextDep=t,r.depsTail=t):r.deps=r.depsTail=t,P(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=r.depsTail,t.nextDep=void 0,r.depsTail.nextDep=t,r.depsTail=t,r.deps===t&&(r.deps=e)}return t}trigger(e){this.version++,k++,this.notify(e)}notify(e){f();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{_()}}}function P(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)P(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const A=new WeakMap,R=Symbol(""),D=Symbol(""),O=Symbol("");function M(e,t,n){if(w&&r){let t=A.get(e);t||A.set(e,t=new Map);let i=t.get(n);i||(t.set(n,i=new N),i.map=t,i.key=n),i.track()}}function F(e,t,n,s,r,o){const a=A.get(e);if(!a)return void k++;const l=e=>{e&&e.trigger()};if(f(),"clear"===t)a.forEach(l);else{const r=(0,i.cy)(e),o=r&&(0,i.yI)(n);if(r&&"length"===n){const e=Number(s);a.forEach((t,n)=>{("length"===n||n===O||!(0,i.Bm)(n)&&n>=e)&&l(t)})}else switch((void 0!==n||a.has(void 0))&&l(a.get(n)),o&&l(a.get(O)),t){case"add":r?o&&l(a.get("length")):(l(a.get(R)),(0,i.CE)(e)&&l(a.get(D)));break;case"delete":r||(l(a.get(R)),(0,i.CE)(e)&&l(a.get(D)));break;case"set":(0,i.CE)(e)&&l(a.get(R));break}}_()}function L(e){const t=Ee(e);return t===e?t:(M(t,"iterate",O),we(e)?t:t.map(Se))}function q(e){return M(e=Ee(e),"iterate",O),e}const $={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,Se)},concat(...e){return L(this).concat(...e.map(e=>(0,i.cy)(e)?L(e):e))},entries(){return U(this,"entries",e=>(e[1]=Se(e[1]),e))},every(e,t){return W(this,"every",e,t,void 0,arguments)},filter(e,t){return W(this,"filter",e,t,e=>e.map(Se),arguments)},find(e,t){return W(this,"find",e,t,Se,arguments)},findIndex(e,t){return W(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return W(this,"findLast",e,t,Se,arguments)},findLastIndex(e,t){return W(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return W(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return L(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return W(this,"map",e,t,void 0,arguments)},pop(){return V(this,"pop")},push(...e){return V(this,"push",e)},reduce(e,...t){return B(this,"reduce",e,t)},reduceRight(e,...t){return B(this,"reduceRight",e,t)},shift(){return V(this,"shift")},some(e,t){return W(this,"some",e,t,void 0,arguments)},splice(...e){return V(this,"splice",e)},toReversed(){return L(this).toReversed()},toSorted(e){return L(this).toSorted(e)},toSpliced(...e){return L(this).toSpliced(...e)},unshift(...e){return V(this,"unshift",e)},values(){return U(this,"values",Se)}};function U(e,t,n){const i=q(e),s=i[t]();return i===e||we(e)||(s._next=s.next,s.next=()=>{const e=s._next();return e.done||(e.value=n(e.value)),e}),s}const j=Array.prototype;function W(e,t,n,i,s,r){const o=q(e),a=o!==e&&!we(e),l=o[t];if(l!==j[t]){const t=l.apply(e,r);return a?Se(t):t}let c=n;o!==e&&(a?c=function(t,i){return n.call(this,Se(t),i,e)}:n.length>2&&(c=function(t,i){return n.call(this,t,i,e)}));const u=l.call(o,c,i);return a&&s?s(u):u}function B(e,t,n,i){const s=q(e);let r=n;return s!==e&&(we(e)?n.length>3&&(r=function(t,i,s){return n.call(this,t,i,s,e)}):r=function(t,i,s){return n.call(this,t,Se(i),s,e)}),s[t](r,...i)}function H(e,t,n){const i=Ee(e);M(i,"iterate",O);const s=i[t](...n);return-1!==s&&!1!==s||!Te(n[0])?s:(n[0]=Ee(n[0]),i[t](...n))}function V(e,t,n=[]){E(),f();const i=Ee(e)[t].apply(e,n);return _(),I(),i}const z=(0,i.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(i.Bm));function Y(e){(0,i.Bm)(e)||(e=String(e));const t=Ee(this);return M(t,"has",e),t.hasOwnProperty(e)}class G{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const s=this._isReadonly,r=this._isShallow;if("__v_isReactive"===t)return!s;if("__v_isReadonly"===t)return s;if("__v_isShallow"===t)return r;if("__v_raw"===t)return n===(s?r?pe:de:r?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,i.cy)(e);if(!s){let e;if(o&&(e=$[t]))return e;if("hasOwnProperty"===t)return Y}const a=Reflect.get(e,t,xe(e)?e:n);if((0,i.Bm)(t)?K.has(t):z(t))return a;if(s||M(e,"get",t),r)return a;if(xe(a)){const e=o&&(0,i.yI)(t)?a:a.value;return s&&(0,i.Gv)(e)?ve(e):e}return(0,i.Gv)(a)?s?ve(a):ge(a):a}}class Z extends G{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const t=be(r);if(we(n)||be(n)||(r=Ee(r),n=Ee(n)),!(0,i.cy)(e)&&xe(r)&&!xe(n))return t||(r.value=n),!0}const o=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,xe(e)?e:s);return e===Ee(s)&&(o?(0,i.$H)(n,r)&&F(e,"set",t,n,r):F(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&F(e,"delete",t,void 0,s),r}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&K.has(t)||M(e,"has",t),n}ownKeys(e){return M(e,"iterate",(0,i.cy)(e)?"length":R),Reflect.ownKeys(e)}}class Q extends G{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const X=new Z,J=new Q,ee=new Z(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function ie(e,t,n){return function(...s){const r=this["__v_raw"],o=Ee(r),a=(0,i.CE)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=r[e](...s),h=n?te:t?ke:Se;return!t&&M(o,"iterate",c?D:R),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function re(e,t){const n={get(n){const s=this["__v_raw"],r=Ee(s),o=Ee(n);e||((0,i.$H)(n,o)&&M(r,"get",n),M(r,"get",o));const{has:a}=ne(r),l=t?te:e?ke:Se;return a.call(r,n)?l(s.get(n)):a.call(r,o)?l(s.get(o)):void(s!==r&&s.get(n))},get size(){const t=this["__v_raw"];return!e&&M(Ee(t),"iterate",R),t.size},has(t){const n=this["__v_raw"],s=Ee(n),r=Ee(t);return e||((0,i.$H)(t,r)&&M(s,"has",t),M(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)},forEach(n,i){const s=this,r=s["__v_raw"],o=Ee(r),a=t?te:e?ke:Se;return!e&&M(o,"iterate",R),r.forEach((e,t)=>n.call(i,a(e),a(t),s))}};(0,i.X$)(n,e?{add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear")}:{add(e){t||we(e)||be(e)||(e=Ee(e));const n=Ee(this),i=ne(n),s=i.has.call(n,e);return s||(n.add(e),F(n,"add",e,e)),this},set(e,n){t||we(n)||be(n)||(n=Ee(n));const s=Ee(this),{has:r,get:o}=ne(s);let a=r.call(s,e);a||(e=Ee(e),a=r.call(s,e));const l=o.call(s,e);return s.set(e,n),a?(0,i.$H)(n,l)&&F(s,"set",e,n,l):F(s,"add",e,n),this},delete(e){const t=Ee(this),{has:n,get:i}=ne(t);let s=n.call(t,e);s||(e=Ee(e),s=n.call(t,e));const r=i?i.call(t,e):void 0,o=t.delete(e);return s&&F(t,"delete",e,void 0,r),o},clear(){const e=Ee(this),t=0!==e.size,n=void 0,i=e.clear();return t&&F(e,"clear",void 0,void 0,n),i}});const s=["keys","values","entries",Symbol.iterator];return s.forEach(i=>{n[i]=ie(i,e,t)}),n}function oe(e,t){const n=re(e,t);return(t,s,r)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,i.$3)(n,s)&&s in t?n:t,s,r)}const ae={get:oe(!1,!1)},le={get:oe(!1,!0)},ce={get:oe(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,i.Zf)(e))}function ge(e){return be(e)?e:ye(e,!1,X,ae,ue)}function me(e){return ye(e,!1,ee,le,he)}function ve(e){return ye(e,!0,J,ce,de)}function ye(e,t,n,s,r){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=_e(e);if(0===o)return e;const a=r.get(e);if(a)return a;const l=new Proxy(e,2===o?s:n);return r.set(e,l),l}function Ce(e){return be(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function Te(e){return!!e&&!!e["__v_raw"]}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Ie(e){return!(0,i.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,i.yQ)(e,"__v_skip",!0),e}const Se=e=>(0,i.Gv)(e)?ge(e):e,ke=e=>(0,i.Gv)(e)?ve(e):e;function xe(e){return!!e&&!0===e["__v_isRef"]}function Ne(e){return xe(e)?e.value:e}const Pe={get:(e,t,n)=>"__v_raw"===t?e:Ne(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Ae(e){return Ce(e)?e:new Proxy(e,Pe)}class Re{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new N(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||r===this))return p(this,!0),!0}get value(){const e=this.dep.track();return y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function De(e,t,n=!1){let s,r;(0,i.Tn)(e)?s=e:(s=e.get,r=e.set);const o=new Re(s,r,n);return o}const Oe={},Me=new WeakMap;let Fe;function Le(e,t=!1,n=Fe){if(n){let t=Me.get(n);t||Me.set(n,t=[]),t.push(e)}else 0}function qe(e,t,n=i.MZ){const{immediate:s,deep:r,once:o,scheduler:l,augmentJob:u,call:h}=n,d=e=>r?e:we(e)||!1===r||0===r?$e(e,1):$e(e);let p,f,_,g,m=!1,v=!1;if(xe(e)?(f=()=>e.value,m=we(e)):Ce(e)?(f=()=>d(e),m=!0):(0,i.cy)(e)?(v=!0,m=e.some(e=>Ce(e)||we(e)),f=()=>e.map(e=>xe(e)?e.value:Ce(e)?d(e):(0,i.Tn)(e)?h?h(e,2):e():void 0)):f=(0,i.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(_){E();try{_()}finally{I()}}const t=Fe;Fe=p;try{return h?h(e,3,[g]):e(g)}finally{Fe=t}}:i.tE,t&&r){const e=f,t=!0===r?1/0:r;f=()=>$e(e(),t)}const y=a(),C=()=>{p.stop(),y&&y.active&&(0,i.TF)(y.effects,p)};if(o&&t){const e=t;t=(...t)=>{e(...t),C()}}let b=v?new Array(e.length).fill(Oe):Oe;const w=e=>{if(1&p.flags&&(p.dirty||e))if(t){const e=p.run();if(r||m||(v?e.some((e,t)=>(0,i.$H)(e,b[t])):(0,i.$H)(e,b))){_&&_();const n=Fe;Fe=p;try{const n=[e,b===Oe?void 0:v&&b[0]===Oe?[]:b,g];b=e,h?h(t,3,n):t(...n)}finally{Fe=n}}}else p.run()};return u&&u(w),p=new c(f),p.scheduler=l?()=>l(w,!1):w,g=e=>Le(e,!1,p),_=p.onStop=()=>{const e=Me.get(p);if(e){if(h)h(e,4);else for(const t of e)t();Me.delete(p)}},t?s?w(!0):b=p.run():l?l(w.bind(null,!0),!0):p.run(),C.pause=p.pause.bind(p),C.resume=p.resume.bind(p),C.stop=C,C}function $e(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Map,(n.get(e)||0)>=t)return e;if(n.set(e,t),t--,xe(e))$e(e.value,t,n);else if((0,i.cy)(e))for(let i=0;i<e.length;i++)$e(e[i],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach(e=>{$e(e,t,n)});else if((0,i.Qd)(e)){for(const i in e)$e(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&$e(e[i],t,n)}return e}}}]);
//# sourceMappingURL=chunk-vendors.93773f29.js.map