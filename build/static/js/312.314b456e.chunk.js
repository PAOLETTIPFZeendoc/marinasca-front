/*! For license information please see 312.314b456e.chunk.js.LICENSE.txt */
(self.webpackChunkmarinasca=self.webpackChunkmarinasca||[]).push([[312],{312:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return R}});var n,o,i,a=r(9439),c=r(2791),u=r(4466),s=r(7689),l=(r(2498),r(1264)),f=r(9806),d=r(168),h=r(6444),p=r(1798),v=h.ZP.div(n||(n=(0,d.Z)(["\n  position: relative;\n  margin: 12px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),y=h.ZP.div(o||(o=(0,d.Z)(["\n  margin: 8px;\n"]))),g=h.ZP.button(i||(i=(0,d.Z)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 12px;\n  background: ",";\n  :active {\n    background: black;\n  }\n"])),p.O9.main),x=r(3177),m=r(2898),b=r(3761),w=r(1632),j=r(184),L=function(t){var e=t._id,r=t.product,n=(0,u.v9)(b.H).token,o=(0,u.I0)();return(0,j.jsxs)(v,{children:[(0,j.jsx)(y,{children:(0,j.jsx)(g,{type:"button",onClick:function(){o((0,m.$J)("editer")),o((0,m.Ir)(r))},children:(0,j.jsx)(f.G,{icon:w.Xcf,size:"2x",color:"purple"})})}),(0,j.jsx)(y,{children:(0,j.jsx)(g,{type:"button",onClick:function(){return(0,x.tc)({_id:e,visible:!(null!==r&&void 0!==r&&r.visible)},o,n)},children:(0,j.jsx)(f.G,{icon:null!==r&&void 0!==r&&r.visible?w.Mdf:w.Aq,size:"2x",color:"grey"})})}),(0,j.jsx)(y,{children:(0,j.jsx)(g,{type:"button",onClick:function(){return(0,x.Ir)(e,o,n)},children:(0,j.jsx)(f.G,{icon:w.$aW,size:"2x",color:"red"})})})]})},_=r(3530),E=function(t){var e=t.couleur,r=(t.wineContent,function(t){switch(t){case"rouge":return"#742f37";case"blanc":return"#f1f285";case"ros\xe9":return"#ffb9b9";case"au verre":return"white";default:return p.O9.ecriture}});return(0,j.jsx)(_.gd,{children:e.map((function(t){return(null===t||void 0===t?void 0:t.isChecked)&&(0,j.jsx)(_.Uy,{className:"price wineprice",color:t.value,children:(0,j.jsxs)("div",{style:{display:"flex",wrap:"wrap",justifyContent:"center",color:r(t.value),background:"grey",margin:"5px",border:"1px solid white"},children:[(0,j.jsx)("span",{children:(0,j.jsx)(f.G,{icon:"white"!==r(t.value)?w.KJ2:w.ShZ,size:"1x"})}),(0,j.jsxs)("span",{style:{display:"inline-block",paddingLeft:"8px"},children:[Number(t.price).toFixed(2),"\u20ac"]})]})},t.value)}))})},k=r(1413),S=r(4942),O=r(4687),N=r.n(O),C="/home/bradley/Code/teamgantt/react-auto-translate/src/translator.tsx",Z=(0,c.createContext)((function(){})),P=(0,c.createContext)("en");function G(t){var e=t.to,r=t.from,n=t.cacheProvider,o=t.children,i=t.googleApiKey,a=function(t){if(n)return n.get(e,t)},u=function(t,r){n&&n.set(e,t,r)},s=function(t){var n,o;return N().async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N().awrap(fetch("https://translation.googleapis.com/language/translate/v2?source="+r+"&target="+e+"&key="+i+"&q="+t+"&format=text"));case 3:return n=a.sent,a.next=6,N().awrap(n.json());case 6:return o=a.sent,a.abrupt("return",o.data.translations[0].translatedText);case 10:return a.prev=10,a.t0=a.catch(0),a.abrupt("return",void 0);case 13:case"end":return a.stop()}}),null,null,[[0,10]])};return c.createElement(Z.Provider,{value:function(t,n){var o,i;return N().async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e!==r){c.next=3;break}return n(t),c.abrupt("return");case 3:if(!(o=a(t))){c.next=7;break}return n(o),c.abrupt("return");case 7:return c.next=9,N().awrap(s(t));case 9:if(!(i=c.sent)){c.next=14;break}return u(t,i),n(i),c.abrupt("return");case 14:n(t);case 15:case"end":return c.stop()}}))},__source:{fileName:C,lineNumber:96}},c.createElement(P.Provider,{value:e,__source:{fileName:C,lineNumber:97}},o))}function F(t){var e=t.children,r=(0,c.useContext)(P),n=(0,c.useContext)(Z),o=(0,c.useState)(e),i=(0,a.Z)(o,2),u=i[0],s=i[1];return c.useEffect((function(){n(e,s)}),[e,r]),u}var I=function(t){var e=t.children,r=navigator.language||navigator.userLanguage,n={get:function(t,e){return((JSON.parse(localStorage.getItem("cz-translations"))||{})[e]||{})[t]},set:function(t,e,r){var n=JSON.parse(localStorage.getItem("cz-translations"))||(0,S.Z)({},e,{});n[e]=(0,k.Z)((0,k.Z)({},n[e]),{},(0,S.Z)({},t,r)),localStorage.setItem("cz-translations",JSON.stringify(n))}};return(0,j.jsx)(G,{cacheProvider:n,from:"fr",to:r.substr(0,2),googleApiKey:p.JO,children:(0,j.jsx)(F,{children:e})})},A=function(t){var e=t.product,r=t.index,n=t.length,o=e._id,i=e.price,a=e.description,c=e.title,s=e.visible,l=e.category,f=e.couleur,d=(0,u.v9)(b.H);return(0,j.jsxs)(_.Er,{visible:"isAdmin"===(null===d||void 0===d?void 0:d.role)||s,category:l,last:r===n-1,children:[d&&"isAdmin"===d.role&&(0,j.jsx)(L,{_id:o,product:e}),(0,j.jsxs)("h3",{className:"title",children:[(0,j.jsx)("span",{style:{display:"inline-block"},children:"".concat(s?"":"CACH\xc9 : "," ").concat(c)}),"cave"!==l||f.every((function(t){return!t.isChecked}))?(0,j.jsxs)("span",{className:"price",children:[null===i||void 0===i?void 0:i.toFixed(2)," \u20ac"]}):(0,j.jsx)(E,{couleur:f,wineContent:function(t){return t?t.some((function(t){return t.isChecked&&"au verre"===t.value}))?"AU VERRE":"75 cl":""}})]}),(0,j.jsx)("p",{className:"description",children:(null===a||void 0===a?void 0:a.length)>0&&(0,j.jsx)(I,{children:null===a||void 0===a?void 0:a.replace("\n"," ")})})]})},z=r(8395),T=function(t){var e=t.loading,r=t.products,n=t.setFilter,o=t.filter;return(0,j.jsx)(z.Z,{setFilter:n,filter:o,children:e?(0,j.jsx)(l.Z,{}):null===r||void 0===r?void 0:r.map((function(t,e){return(0,j.jsx)("div",{style:{width:"100%"},children:(0,j.jsx)(A,{product:t,index:e,length:r.length})},t._id)}))})},J=r(9722);var M=function(t,e){var r=(0,u.v9)((0,J.ze)(e)),n=(0,u.I0)();return(0,c.useEffect)((function(){(0,x.Ge)(p.Sn,n,t)}),[n,t,e]),r},R=function(t){var e=t.loading,r=t.setLoading,n=(0,s.UO)().category||"suggestions";M(r,n);var o=(0,c.useState)(""),i=(0,a.Z)(o,2),l=i[0],f=i[1],d=(0,u.v9)((0,J.hL)(l,n));return(0,c.useEffect)((function(){f("")}),[e,n]),(0,j.jsx)("main",{children:(0,j.jsx)(T,{products:d,loading:e,setFilter:f,filter:l})})}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(Z){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new O(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}e.wrap=d;var p={};function v(){}function y(){}function g(){}var x={};f(x,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(N([])));b&&b!==r&&i.call(b,u)&&(x=b);var w=g.prototype=v.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return y.prototype=g,a(w,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(L.prototype),f(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=312.314b456e.chunk.js.map