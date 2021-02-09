(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(f||"")+"_"+d++,f)}function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b}); 
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a} 
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ka={};try{ka.__proto__=ia;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null} 
var la=fa;function ma(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}function na(){this.j=!1;this.h=null;this.o=void 0;this.g=1;this.u=0;this.i=null}function oa(a){if(a.j)throw new TypeError("Generator is already running");a.j=!0}na.prototype.l=function(a){this.o=a}; 
function pa(a,b){a.i={N:b,O:!0};a.g=a.u}na.prototype.return=function(a){this.i={return:a};this.g=this.u};function qa(a){this.g=new na;this.h=a}function ra(a,b){oa(a.g);var c=a.g.h;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return v(a)} 
function sa(a,b,c,d){try{var f=b.call(a.g.h,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.j=!1,f;var g=f.value}catch(e){return a.g.h=null,pa(a.g,e),v(a)}a.g.h=null;d.call(a.g,g);return v(a)}function v(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.j=!1,{value:b.value,done:!1}}catch(c){a.g.o=void 0,pa(a.g,c)}a.g.j=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.O)throw b.N;return{value:b.return,done:!0}}return{value:void 0,done:!0}} 
function ta(a){this.next=function(b){oa(a.g);a.g.h?b=sa(a,a.g.h.next,b,a.g.l):(a.g.l(b),b=v(a));return b};this.throw=function(b){oa(a.g);a.g.h?b=sa(a,a.g.h["throw"],b,a.g.l):(pa(a.g,b),b=v(a));return b};this.return=function(b){return ra(a,b)};this[Symbol.iterator]=function(){return this}}function ua(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}new Promise(function(d,f){function g(e){e.done?d(e.value):Promise.resolve(e.value).then(b,c).then(g,f)}g(a.next())})} 
t("Promise",function(a){function b(e){this.g=0;this.i=void 0;this.h=[];this.u=!1;var h=this.j();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(e)};var f=r.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k= 
e[h];e[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:e(this.C),reject:e(this.l)}};b.prototype.C=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.L(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.B(e):this.o(e)}}; 
b.prototype.B=function(e){var h=void 0;try{h=e.then}catch(k){this.l(k);return}"function"==typeof h?this.M(h,e):this.o(e)};b.prototype.l=function(e){this.v(2,e)};b.prototype.o=function(e){this.v(1,e)};b.prototype.v=function(e,h){if(0!=this.g)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.g);this.g=e;this.i=h;2===this.g&&this.H();this.F()};b.prototype.H=function(){var e=this;f(function(){if(e.G()){var h=r.console;"undefined"!==typeof h&&h.error(e.i)}},1)};b.prototype.G= 
function(){if(this.u)return!1;var e=r.CustomEvent,h=r.Event,k=r.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=r.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.F=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)g.h(this.h[e]);this.h=null}};var g=new c;b.prototype.L= 
function(e){var h=this.j();e.D(h.resolve,h.reject)};b.prototype.M=function(e,h){var k=this.j();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(p,z){return"function"==typeof p?function(x){try{l(p(x))}catch(S){m(S)}}:z}var l,m,n=new b(function(p,z){l=p;m=z});this.D(k(e,l),k(h,m));return n};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.D=function(e,h){function k(){switch(l.g){case 1:e(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+ 
l.g);}}var l=this;null==this.h?g.h(k):this.h.push(k);this.u=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=u(e),m=l.next();!m.done;m=l.next())d(m.value).D(h,k)})};b.all=function(e){var h=u(e),k=h.next();return k.done?d([]):new b(function(l,m){function n(x){return function(S){p[x]=S;z--;0==z&&l(p)}}var p=[],z=0;do p.push(void 0),z++,d(k.value).D(n(p.length-1),m),k=h.next();while(!k.done)})};return b}); 
function va(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=va(this,b,"startsWith"),f=d.length,g=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var e=0;e<g&&c<f;)if(d[c++]!=b[e++])return!1;return e>=g}}); 
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==va(this,b,"includes").indexOf(b,c||0)}});var w=this||self; 
function y(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.R=function(d,f,g){for(var e=Array(arguments.length-2),h=2;h<arguments.length;h++)e[h-2]=arguments[h];return b.prototype[f].apply(d,e)}};function xa(a){this.j=a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}function ya(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:A(a,"&dct=1"):2==b?A(a,"&ri=2"):A(a,"&ri=16"):a.j}function A(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b};var za=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};function Aa(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a)){b=f;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function B(a,b){this.g=b===Ba?a:""}B.prototype.i=!0;B.prototype.h=function(){return this.g.toString()};B.prototype.toString=function(){return this.g.toString()};var Ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ba={};var C;a:{var Da=w.navigator;if(Da){var Ea=Da.userAgent;if(Ea){C=Ea;break a}}C=""};function Fa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function D(a,b){b instanceof B||b instanceof B||(b="object"==typeof b&&b.i?b.h():String(b),Ca.test(b)||(b="about:invalid#zClosurez"),b=new B(b,Ba));a.href=b instanceof B&&b.constructor===B?b.g:"type_error:SafeUrl"};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function Ha(){return-1!=C.indexOf("iPhone")&&-1==C.indexOf("iPod")&&-1==C.indexOf("iPad")};function Ia(a){Ia[" "](a);return a}Ia[" "]=function(){};var Ja=Ha(),Ka=-1!=C.indexOf("iPad");var La=Ha()||-1!=C.indexOf("iPod"),Ma=-1!=C.indexOf("iPad");var Na={},Oa=null;function Pa(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.g[c.toString()]=new Qa(c,b[1])}this.i=!0}}q=Pa.prototype;q.isFrozen=function(){return!1};q.s=function(){return Ra(this)};q.K=function(){return Ra(this)}; 
function Ra(a){if(a.i){if(a.j){var b=a.g,c;for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)){var d=b[c].g;d&&d.s()}}}else{a.h.length=0;b=E(a);b.sort();for(c=0;c<b.length;c++){var f=a.g[b[c]];(d=f.g)&&d.s();a.h.push([f.key,f.value])}a.i=!0}return a.h}q.entries=function(){var a=[],b=E(this);b.sort();for(var c=0;c<b.length;c++){var d=this.g[b[c]];a.push([d.key,Sa(this,d)])}return new F(a)};q.keys=function(){var a=[],b=E(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new F(a)}; 
q.values=function(){var a=[],b=E(this);b.sort();for(var c=0;c<b.length;c++)a.push(Sa(this,this.g[b[c]]));return new F(a)};function Ta(a,b){var c=E(a);c.sort();for(var d=0;d<c.length;d++){var f=a.g[c[d]];b.call(void 0,Sa(a,f),f.key,a)}}q.set=function(a,b){var c=new Qa(a);this.j?(c.g=b,c.value=b.K()):c.value=b;this.g[a.toString()]=c;this.i=!1;return this};function Sa(a,b){return a.j?(b.g||(b.g=new a.j(b.value),a.isFrozen()&&null(b.g)),b.g):b.value} 
q.get=function(a){if(a=this.g[a.toString()])return Sa(this,a)};q.has=function(a){return a.toString()in this.g};function E(a){a=a.g;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function Qa(a,b){this.key=a;this.value=b;this.g=void 0}function F(a){this.h=0;this.g=a}F.prototype.next=function(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}; 
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(F.prototype[Symbol.iterator]=function(){return this});function G(){}var Ua="function"==typeof Uint8Array;function H(a,b,c){a.g=null;b||(b=[]);a.v=void 0;a.j=-1;a.h=b;a:{if(b=a.h.length){--b;var d=a.h[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||Ua&&d instanceof Uint8Array)){a.l=b-a.j;a.i=d;break a}}a.l=Number.MAX_VALUE}a.u={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.l?(d+=a.j,a.h[d]=a.h[d]||I):(Va(a),a.i[d]=a.i[d]||I)}var I=[];function Va(a){var b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})} 
function J(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c!==I?c:a.h[b]=[]}if(a.i)return c=a.i[b],c===I?a.i[b]=[]:c}function K(a,b,c){a=J(a,b);return null==a?c:a}function L(a,b){return K(a,b,"")}function M(a,b){var c=void 0===c?!1:c;a=J(a,b);a=null==a?a:!!a;return null==a?c:a}function O(a,b,c){a.g||(a.g={});if(b in a.g)return a.g[b];var d=J(a,b);d||(d=[],P(a,b,d));c=new Pa(d,c);return a.g[b]=c}function P(a,b,c){b<a.l?a.h[b+a.j]=c:(Va(a),a.i[b]=c);return a} 
function Q(a,b,c){a.g||(a.g={});if(!a.g[c]){var d=J(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}function Wa(a){var b=Xa;a.g||(a.g={});if(!a.g[7]){for(var c=J(a,7),d=[],f=0;f<c.length;f++)d[f]=new b(c[f]);a.g[7]=d}b=a.g[7];b==I&&(b=a.g[7]=[]);return b}function Ya(a){if(a.g)for(var b in a.g){var c=a.g[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].s();else c&&c.s()}}G.prototype.s=function(){Ya(this);return this.h};G.prototype.K=function(){Ya(this);return this.h}; 
G.prototype.o=Ua?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!Oa){Oa={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(d[f].split(""));Na[f]=g;for(var e=0;e<g.length;e++){var h=g[e];void 0===Oa[h]&&(Oa[h]=e)}}}b=Na[b];c=[];for(d=0;d<this.length;d+=3){var k=this[d],l=(f=d+1<this.length)?this[d+1]:0;h=(g=d+2<this.length)?this[d+2]:0;e=k>> 
2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;g||(h=64,f||(l=64));c.push(b[e],b[k],b[l]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.h&&this.s(),ab)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.h&&this.s(),ab)};function ab(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}G.prototype.toString=function(){return this.s().toString()}; 
function bb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?bb(d):d)}return b}if(Ua&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?bb(d):d);return b};function cb(a){H(this,a,null)}y(cb,G);function db(a){H(this,a,eb)}y(db,G);function Xa(a){H(this,a,null)}y(Xa,G);function R(a){H(this,a,null)}y(R,G);function fb(a){H(this,a,null)}y(fb,G);var eb=[6,7];Xa.prototype.A=function(){return L(this,3)};Xa.prototype.J=function(a){P(this,5,a)};R.prototype.A=function(){return L(this,1)};R.prototype.J=function(a){P(this,2,a)};function gb(a){H(this,a,ib)}y(gb,G);var ib=[17];function jb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var kb={capture:!0},lb={passive:!0},nb=Fa(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});w.addEventListener("test",null,b)}catch(c){}return a});function ob(a){return a?a.passive&&nb()?a:a.capture||!1:!1}function pb(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,ob(d))}function qb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,ob(void 0))};var rb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function tb(a,b){return b?a?a+"&"+b:b:a}function ub(a,b){if(!b)return a;a=sb(a);a[1]=tb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]} 
function vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function wb(a){var b=[],c;for(c in a)vb(c,a[c],b);return b.join("&")}function xb(a,b){a=sb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(f){var g=f.indexOf("=");b.hasOwnProperty(0<=g?f.substr(0,g):f)||d.push(f)});a[1]=tb(d.join("&"),wb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function yb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ia(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function zb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ab=[];function Bb(){var a=Ab;Ab=[];a=u(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;try{b()}catch(c){}}} 
function Cb(a){var b=T;"complete"===b.readyState||"interactive"===b.readyState?(Ab.push(a),1==Ab.length&&(window.Promise?Promise.resolve().then(Bb):window.setImmediate?setImmediate(Bb):setTimeout(Bb,0))):b.addEventListener("DOMContentLoaded",a)};function Db(a,b,c){Eb(a,b,void 0===c?null:c)}function Eb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var f=function(g){c&&c(g);qb(d,"load",f);qb(d,"error",f)};pb(d,"load",f);pb(d,"error",f)}d.src=b;a.google_image_requests.push(d)};var Fb=0;function Gb(a){return(a=Hb(a))&&a.getAttribute("data-jc-version")||"unknown"}function Hb(a){var b=document.currentScript;return(b=void 0===b?null:b)&&b.getAttribute("data-jc")===String(a)?b:document.querySelector('[data-jc="'+a+'"]')} 
function Ib(a){var b=void 0===b?.01:b;if(!(Math.random()>b)){a="https://pagead2.googlesyndication.com/pagead/gen_204?id=jca&jc="+a+"&version="+Gb(a)+"&sample="+b;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Db(b,a)}};var T=document,Jb=window;function Kb(){this.i="&";this.h={};this.j=0;this.g=[]}function Lb(a,b){var c={};c[a]=b;return[c]}function Mb(a,b,c,d,f){var g=[];zb(a,function(e,h){(e=Nb(e,b,c,d,f))&&g.push(h+"="+e)});return g.join(b)} 
function Nb(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var g=[],e=0;e<a.length;e++)g.push(Nb(a[e],b,c,d+1,f));return g.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Mb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))} 
function Ob(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Pb(a)-c.length;if(0>d)return"";a.g.sort(function(m,n){return m-n});c=null;for(var f="",g=0;g<a.g.length;g++)for(var e=a.g[g],h=a.h[e],k=0;k<h.length;k++){if(!d){c=null==c?e:c;break}var l=Mb(h[k],a.i,",$");if(l){l=f+l;if(d>=l.length){d-=l.length;b+=l;f=a.i;break}c=null==c?e:c}}a="";null!=c&&(a=f+"trn="+c);return b+a}function Pb(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function Qb(a,b,c,d,f,g){if((d?a.g:Math.random())<(f||.01))try{if(c instanceof Kb)var e=c;else e=new Kb,zb(c,function(k,l){var m=e,n=m.j++;k=Lb(l,k);m.g.push(n);m.h[n]=k});var h=Ob(e,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof g?Db(w,h,g):Db(w,h))}catch(k){}};var U={};function Rb(a){if(a!==U)throw Error("Bad secret");};function Sb(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null};var Tb;function Ub(){}function Vb(a,b){Rb(b);this.g=a}ma(Vb,Ub);Vb.prototype.toString=function(){return this.g.toString()};var Wb=null===(Tb=Sb())||void 0===Tb?void 0:Tb.emptyHTML;new Vb(null!==Wb&&void 0!==Wb?Wb:"",U);var Xb;function Yb(){}function Zb(a,b){Rb(b);this.g=a}ma(Zb,Yb);Zb.prototype.toString=function(){return this.g.toString()};var $b=null===(Xb=Sb())||void 0===Xb?void 0:Xb.emptyScript;new Zb(null!==$b&&void 0!==$b?$b:"",U);function ec(){}function V(a,b){Rb(b);this.g=a}ma(V,ec);V.prototype.toString=function(){return this.g};new V("about:blank",U);var fc=new V("about:invalid#zTSz",U);var gc="DATA HTTP HTTPS MAILTO FTP RELATIVE".split(" "),hc={scheme:"RELATIVE",m:function(a){return/^[^:/?#]*(?:[/?#]|$)/i.test(a)}},ic={tel:{scheme:"TEL",m:W("tel:")},callto:{scheme:"CALLTO",m:function(a){return/^callto:\+?\d*$/i.test(a)}},ssh:{scheme:"SSH",m:W("ssh://")},rtsp:{scheme:"RTSP",m:W("rtsp://")},data:{scheme:"DATA",m:function(a){a=a.match(/^data:(.*);base64,[a-z0-9+\/]+=*$/i);var b;if(b=2===(null===a||void 0===a?void 0:a.length))a=a[1].match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i), 
b=2===(null===a||void 0===a?void 0:a.length)&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(a[1])||/^video\/(?:mpeg|mp4|ogg|webm|x-matroska)$/i.test(a[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(a[1]));return b}},http:{scheme:"HTTP",m:W("http:")},https:{scheme:"HTTPS",m:W("https:")},ftp:{scheme:"FTP",m:W("ftp:")},mailto:{scheme:"MAILTO",m:W("mailto:")},intent:{scheme:"INTENT",m:W("intent:")},market:{scheme:"MARKET",m:W("market:")}, 
itms:{scheme:"ITMS",m:W("itms:")},"itms-appss":{scheme:"ITMS_APPSS",m:W("itms-appss:")},"itms-services":{scheme:"ITMS_SERVICES",m:W("itms-services:")}};function W(a){return function(b){return b.substr(0,a.length).toLowerCase()===a}};var jc="HTTP HTTPS MAILTO FTP RELATIVE MARKET ITMS INTENT ITMS_APPSS".split(" ");function kc(a,b){if(a instanceof B)return a;var c,d=jc;d=void 0===d?gc:d;d=void 0===d?gc:d;var f=a.substring(0,14).indexOf(":");f=null!==(c=ic[0>f?"":a.substr(0,f).toLowerCase()])&&void 0!==c?c:hc;c=d.includes(f.scheme)&&f.m(a)?new V(a,U):void 0;c=c||fc;c===fc&&b(a);if(c instanceof V)a=c.g;else throw Error("wrong type");return new B(a,Ba)} 
function lc(a){var b=(mc()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(c){c=wb({id:"unsafeurl",ctx:a,url:c});c=ub(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};function mc(){var a=void 0===a?Jb:a;return"http:"===a.location.protocol}var nc=!!window.google_async_iframe_id,X=nc&&window.parent||window;function oc(a){var b=T;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};var pc=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function qc(a,b){this.g=a;this.h=b}function rc(a,b){this.url=a;this.I=!!b;this.depth=null};var sc=null;function tc(){var a=w.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function uc(){var a=void 0===a?w:a;return(a=a.performance)&&a.now?a.now():null};function vc(a,b){var c=uc()||tc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Y=w.performance,wc=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),xc=Fa(function(){var a;if(a=wc){var b;if(null===sc){sc="";try{a="";try{a=w.top.location.hash}catch(c){a=w.location.hash}a&&(sc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=sc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function yc(){var a=Z;this.h=[];this.i=a||w;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=xc()||(null!=b?b:1>Math.random())}function zc(a){a&&Y&&xc()&&(Y.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Y.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}yc.prototype.start=function(a,b){if(!this.g)return null;a=new vc(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";Y&&xc()&&Y.mark(b);return a};function Ac(){var a=Bc;this.i=Cc;this.h=null;this.o=this.l;this.g=void 0===a?null:a;this.j=!1}Ac.prototype.pinger=function(){return this.i}; 
function Dc(a,b,c){try{if(a.g&&a.g.g){var d=a.g.start(b.toString(),3);var f=c();var g=a.g;c=d;if(g.g&&"number"===typeof c.value){c.duration=(uc()||tc())-c.value;var e="goog_"+c.label+"_"+c.uniqueId+"_end";Y&&xc()&&Y.mark(e);!g.g||2048<g.h.length||g.h.push(c)}}else f=c()}catch(l){g=!0;try{zc(d),g=a.o(b,new jb(l,{message:Ec(l)}),void 0,void 0)}catch(m){a.l(217,m)}if(g){var h,k;null==(h=window.console)||null==(k=h.error)||k.call(h,l)}else throw l;}return f} 
function Fc(a,b){var c=Gc;return function(d){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return Dc(c,a,function(){return b.apply(void 0,f)})}} 
Ac.prototype.l=function(a,b,c,d,f){f=f||"jserror";try{var g=new Kb;g.g.push(1);g.h[1]=Lb("context",a);b.error&&b.meta&&b.id||(b=new jb(b,{message:Ec(b)}));if(b.msg){var e=b.msg.substring(0,512);g.g.push(2);g.h[2]=Lb("msg",e)}var h=b.meta||{};if(this.h)try{this.h(h)}catch(wa){}if(d)try{d(h)}catch(wa){}b=[h];g.g.push(3);g.h[3]=b;d=w;b=[];e=null;do{var k=d;if(yb(k)){var l=k.location.href;e=k.document&&k.document.referrer||null}else l=e,e=null;b.push(new rc(l||""));try{d=k.parent}catch(wa){d=null}}while(d&& 
k!=d);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;k=w;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var n=b[m];n.url||(n.url=k.location.ancestorOrigins[m-1]||"",n.I=!0)}var p=new rc(w.location.href,!1);k=null;var z=b.length-1;for(n=z;0<=n;--n){var x=b[n];!k&&pc.test(x.url)&&(k=x);if(x.url&&!x.I){p=x;break}}x=null;var S=b.length&&b[z].url;0!=p.depth&&S&&(x=b[z]);var N=new qc(p,x);if(N.h){var $c=N.h.url||"";g.g.push(4);g.h[4]=Lb("top", 
$c)}var Za={url:N.g.url||""};if(N.g.url){var $a=N.g.url.match(rb),ac=$a[1],bc=$a[3],cc=$a[4];p="";ac&&(p+=ac+":");bc&&(p+="//",p+=bc,cc&&(p+=":"+cc));var dc=p}else dc="";Za=[Za,{url:dc}];g.g.push(5);g.h[5]=Za;Qb(this.i,f,g,this.j,c)}catch(wa){try{Qb(this.i,f,{context:"ecmserr",rctx:a,msg:Ec(wa),url:N&&N.g.url},this.j,c)}catch(od){}}return!0}; 
function Ec(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var Cc,Gc;if(nc&&!yb(X)){var Hc="."+T.domain;try{for(;2<Hc.split(".").length&&!yb(X);)T.domain=Hc=Hc.substr(Hc.indexOf(".")+1),X=window.parent}catch(a){}yb(X)||(X=window)}var Z=X,Bc=new yc;function Ic(){if(!Z.google_measure_js_timing){var a=Bc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(xc()&&za(a.h,zc),a.h.length=0)}}Cc=new function(){this.h=mc()?"http:":"https:";this.g=Math.random()};"number"!==typeof Z.google_srt&&(Z.google_srt=Math.random());var Jc=Cc,Kc=Z.google_srt;0<=Kc&&1>=Kc&&(Jc.g=Kc); 
Gc=new Ac;Gc.h=function(a){var b=Fb;0!==b&&(a.jc=String(b),a.shv=Gb(b))};Gc.j=!0;"complete"==Z.document.readyState?Ic():Bc.g&&pb(Z,"load",function(){Ic()});function Lc(a,b){return Fc(a,b)}function Mc(a){Qb(Cc,"gdn-asoch",a,!0,void 0,void 0)};function Nc(a,b){b=L(a,2)||b;if(!b)return"";if(M(a,13))return b;var c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;var d=[b.slice(0,c.index+1)];Ta(O(a,4,null),function(f,g){d.push(encodeURIComponent(g)+"="+encodeURIComponent(f)+"&")});d.push(b.slice(c.index+1));return d.join("")} 
function Oc(a,b){b=void 0===b?[]:b;b=0<b.length?b:oc("data-asoch-targets");a=O(a,1,db);for(var c=[],d=0;d<b.length;++d){for(var f=b[d].getAttribute("data-asoch-targets"),g=f.split(","),e=!0,h=u(g),k=h.next();!k.done;k=h.next())if(!a.has(k.value)){e=!1;break}if(e){e=a.get(g[0]);for(f=1;f<g.length;++f){h=a.get(g[f]);e=(new e.constructor(bb(e.s()))).s();h=h.s();k=Math.max(e.length,h.length);for(var l=0;l<k;++l)null==e[l]&&(e[l]=h[l]);e=new db(e)}g=O(e,4,null);null!=J(e,5)&&g.set("nb",K(e,5,0).toString()); 
c.push({element:b[d],data:e})}else Mc({type:1,data:f})}return c}function Pc(a){var b=void 0===b?"":b;a=u(a);for(var c=a.next();!c.done;c=a.next()){var d=c.value;c=d.data;var f=0===b.length?!1:d.element.matches(b);"A"!=d.element.tagName||M(c,1)||f||(d=d.element,f=Nc(c,d.href),0<f.length&&(D(d,kc(f,lc(609))),d.target||(d.target=null!=J(c,11)?L(c,11):"_top")))}} 
function Qc(a){var b=window.oneAfmaInstance;if(b){a=u(a);for(var c=a.next();!c.done;c=a.next())if((c=c.value.data)&&null!=J(c,8)&&(c=L(Q(c,fb,8),4))){b.fetchAppStoreOverlay(c);break}}} 
function Rc(a){function b(g,e){if(e){g=u(d);for(var h=g.next();!h.done;h=g.next())h=h.value,h.J(e[h.A()]||!1)}}var c=[],d=[];a=u(a);for(var f=a.next();!f.done;f=a.next())(f=f.value.data)&&null!=J(f,12)&&(d.push(Q(f,R,12)),c.push(Q(f,R,12).A()));a=window.oneAfmaInstance;c=u(c);for(f=c.next();!f.done;f=c.next())a.canOpenAndroidApp(f.value,b)} 
function Sc(a,b,c,d){if(a||!b||null==J(b,12))return!1;var f=Q(b,R,12).A();if(M(Q(b,R,12),2)){a="";if(0<Wa(b).length){b=u(Wa(b));for(var g=b.next();!g.done;g=b.next())g=g.value,a+=L(g,2)+" "+g.A()+" "}Tc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1});d.click(c);d.openAndroidApp(f);setTimeout(function(){Tc({id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1})},1E3);return!0}Tc({id:"gmob-apps",event:"och-open-android-app-validated-false", 
appId:f,isDeepLinkPath:!1});return!1} 
function Uc(a,b,c,d,f){if(!c||null==J(c,8))return!1;var g=Q(c,fb,8),e=L(g,2);Ta(O(c,10,null),function(h,k){var l=e;k=encodeURIComponent(k);var m=encodeURIComponent(h);h=new RegExp("[?&]"+k+"=([^&]+)");var n=h.exec(l);console.log(n);k=k+"="+m;e=n?l.replace(h,n[0].charAt(0)+k):l.replace("?","?"+k+"&")});Tc({id:"gmob-apps",event:"och-try-u2-redirect",appId:L(g,4)||"",isIos:a,isDeepLinkPath:!1});return f.redirectForStoreU2({clickUrl:d,trackingUrl:L(g,3),finalUrl:e,pingFunc:f.click,openFunc:b?f.openStoreOverlay: 
f.openIntentOrNativeApp})}function Vc(a,b){b=void 0===b?null:b;if(null!==b){var c=new xa({url:a});if(c.i&&c.h||c.l)return b(A(c,"&act=1&ri=1")),ya(c,1)}else return b=new xa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(A(b,"&act=1&ri=1"),"")?ya(b,1):ya(b,2):ya(b,0):a;return a}function Tc(a){var b=Ga();b=null!=b?"="+encodeURIComponent(String(b)):"";b=ub("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+b);Wc(xb(b,a))} 
function Wc(a){Jb.fetch?Jb.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(function(b){b.ok||Db(Jb,a)}):Db(Jb,a)};function Xc(a){H(this,a,Yc)}y(Xc,G);var Yc=[6];var Zc=["platform","platformVersion","architecture","model","uaFullVersion"];function ad(){var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(Zc).then(function(b){var c=new Xc;c=P(c,1,b.platform);c=P(c,2,b.platformVersion);c=P(c,3,b.architecture);c=P(c,4,b.model);return P(c,5,b.uaFullVersion)}):null};function bd(a){var b=this;this.l=La||Ja||Ma||Ka;var c=oc("data-asoch-meta");if(1!==c.length)Mc({type:2,data:c.length});else{this.F=70;this.g=new gb(JSON.parse(c[0].getAttribute("data-asoch-meta"))||[]);this.h=a["extra-meta"]?new gb(JSON.parse(a["extra-meta"])):null;this.C=this.l&&"true"===a["ios-store-overlay"];this.v="";if(M(this.g,15)||this.h&&M(this.h,15))c=ad(),null!=c&&c.then(function(d){b.v=d.o()});this.i=Oc(this.g);this.H=Number(a["async-click-timeout"])||300;this.G=-Infinity;this.j=L(this.g, 
5)||"";this.B=M(this.g,11);this.h&&(this.B=M(this.h,11));this.u=this.o=null;M(this.g,3)||(Pc(this.i),P(this.g,3,!0));cd(this.i);!this.l&&window.oneAfmaInstance&&Rc(this.i);window.oneAfmaInstance&&this.C&&"true"===a["prefetch-ios-store-overlay"]&&Qc(this.i);pb(T,"click",Lc(557,function(d){a:if(!d.defaultPrevented||b.o===d){for(var f,g,e=d.target;(!f||!g)&&e;){g||"A"!=e.tagName||(g=e);var h=e.hasAttribute("data-asoch-targets");!f&&("A"==e.tagName||h)&&(h=h&&"true"===e.getAttribute("data-asoch-is-dynamic")? 
Oc(b.g,[e]):b.i,h=dd(h,e))&&(f=h.data);e=e.parentElement}if(e=f&&!M(f,1)){if(d.defaultPrevented){e=f;if(b.o===d&&b.u){h=new cb(b.u);f=L(e,9);var k="";switch(K(h,4,1)){case 2:if(K(h,2,0))k="blocked_fast_click";else if(L(h,1)||L(h,7))k="blocked_border_click";break;case 3:var l=void 0===l?T:l;l=l.getElementById?l.getElementById("common_15click_anchor"):null;"function"===typeof window.copfcChm&&l&&(e=new e.constructor(bb(e.s())),P(e,5,12),O(e,4,null).set("nb",(12).toString()),(h=dd(b.i,l))?h.data=e:b.i.push({element:l, 
data:e}),g&&(ed(b,d,g,e),P(e,2,g.href)),window.copfcChm(d,Nc(e,l.href)));k="onepointfiveclick_first_click"}f&&k&&Wc(f+"&label="+k);Ib(b.F)}break a}l=J(f,6);l=u(l);for(h=l.next();!h.done;h=l.next())Wc(h.value)}if(g&&e){l=g;f=e?f:null;(g=dd(b.i,l))?g=g.data:(g=new db,P(g,2,l.href),P(g,11,l.target||"_top"),b.i.push({element:l,data:g}));g=Nc(f||g,L(g,2));0<g.length&&(D(l,kc(g,lc(557))),l.target||(l.target=f&&null!=J(f,11)?L(f,11):"_top"));ed(b,d,l,f);g=u(J(b.g,17));for(h=g.next();!h.done;h=g.next()){e= 
void 0;k=h.value;var m=T.body;e=void 0===e?{}:e;"function"===typeof window.CustomEvent?h=new CustomEvent(k,e):(h=document.createEvent("CustomEvent"),h.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail));m.dispatchEvent(h)}M(b.g,16)?fd(b,d,l,f):(g="",window.oneAfmaInstance&&(g=window.oneAfmaInstance.appendClickSignals(l.href)),gd(b,d,l,f,g))}}}),kb);this.j&&"function"===typeof window.ss&&pb(T.body,"mouseover",Lc(626,function(){window.ss(b.j,0)}),lb);a=window;a.googqscp&&"function"===typeof a.googqscp.registerCallback&& 
a.googqscp.registerCallback(function(d,f){b.o=d;b.u=f})}}function fd(a,b,c,d){var f,g;ua(new ta(new qa(function(e){if(1==e.g){f="";if(!window.oneAfmaInstance){e.g=2;return}g=window.oneAfmaInstance;var h=g.appendClickSignalsAsync(c.href);e.g=3;return{value:h}}2!=e.g&&(f=e.o||"");gd(a,b,c,d,f);e.g=0})))} 
function gd(a,b,c,d,f){var g=M(a.g,2),e=g&&Date.now()-a.G>a.H;if(window.oneAfmaInstance){b.preventDefault?b.preventDefault():b.returnValue=!1;c=window.oneAfmaInstance;var h=a.h&&M(a.h,14)||!1;b=M(a.g,13)||a.h&&M(a.h,13);a.h&&M(a.h,18);var k=c.logScionEventAndAddParam(f);if(!Sc(a.l,d,k,c)&&!Uc(a.l,a.C,d,k,c)){f=a.l;h=h&&M(d,15);var l=!/[?&]dsh=1(&|$)/.test(k)&&/[?&]ae=1(&|$)/.test(k);g&&e&&!h&&l&&(k=Vc(k,c.click));k&&k.startsWith("intent:")?(c.openIntentOrNativeApp(k),Tc({id:"gmob-apps",event:"och-open-intent-or-native-app", 
appId:null!=J(d,8)&&L(Q(d,fb,8),4)||"",isIos:f,isDeepLinkPath:!1})):b?c.openChromeCustomTab(k):c.openSystemBrowser(k,{useFirstPackage:!0,useRunningProcess:!0})}}else e&&(d=Vc(c.href),d!==c.href&&D(c,kc(d,lc(599))));e&&(a.G=Date.now());Ib(a.F)} 
function ed(a,b,c,d){if(!M(d,13)){var f=c.href;var g=/[?&]adurl=([^&]+)/.exec(f);f=g?[f.slice(0,g.index),f.slice(g.index)]:[f,""];for(D(c,kc(f[0],lc(557)));!c.id;)if(g="asoch-id-"+Ga(),!T.getElementById(g)){c.id=g;break}g=c.id;"function"===typeof window.xy&&window.xy(b,c,T.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(g);"function"===typeof window.ja&&window.ja(g,d?K(d,5,0):0);a.j&&"function"===typeof window.ss&&(a.B?window.ss(g,1,a.j):window.ss(a.j, 
1));0<f.length&&(a=0<a.v.length?c.href+"&uach="+encodeURIComponent(a.v)+f[1]:c.href+f[1],D(c,kc(a,lc(557))))}}function hd(a){Cb(Lc(556,function(){new bd(a||{})}))}function dd(a,b){return Aa(a,function(c){return c.element===b})}function cd(a){a=u(a);for(var b=a.next();!b.done;b=a.next()){var c=b.value;"A"==c.element.tagName&&(b=c.element,c=c.data,null!=J(c,2)||P(c,2,b.href))}};var id=Lc(555,function(a){return hd(a)});Fb=70;var jd=Hb(70);if(null==jd)throw Error("JSC not found 70");for(var kd={},ld=jd.attributes,md=ld.length-1;0<=md;md--){var nd=ld[md].name;0===nd.indexOf("data-jcp-")&&(kd[nd.substring(9)]=ld[md].value)}id(kd);}).call(this);
