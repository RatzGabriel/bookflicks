function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire19e5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire19e5=o),o.register("1b2ls",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>i),(e=>i=e)),e(t.exports,"jsxs",(()=>s),(e=>s=e));var a=o("acw62"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},o=null,s=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:o,ref:s,props:i,_owner:d.current}}r=u,i=f,s=f})),o.register("acw62",(function(e,t){e.exports=o("2pUnB")})),o.register("2pUnB",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N,P,A,R,D,L,M,j;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>i),(e=>i=e)),e(t.exports,"Fragment",(()=>o),(e=>o=e)),e(t.exports,"Profiler",(()=>s),(e=>s=e)),e(t.exports,"PureComponent",(()=>a),(e=>a=e)),e(t.exports,"StrictMode",(()=>l),(e=>l=e)),e(t.exports,"Suspense",(()=>u),(e=>u=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>c),(e=>c=e)),e(t.exports,"cloneElement",(()=>d),(e=>d=e)),e(t.exports,"createContext",(()=>h),(e=>h=e)),e(t.exports,"createElement",(()=>f),(e=>f=e)),e(t.exports,"createFactory",(()=>p),(e=>p=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>g),(e=>g=e)),e(t.exports,"isValidElement",(()=>v),(e=>v=e)),e(t.exports,"lazy",(()=>y),(e=>y=e)),e(t.exports,"memo",(()=>b),(e=>b=e)),e(t.exports,"startTransition",(()=>w),(e=>w=e)),e(t.exports,"unstable_act",(()=>S),(e=>S=e)),e(t.exports,"useCallback",(()=>E),(e=>E=e)),e(t.exports,"useContext",(()=>k),(e=>k=e)),e(t.exports,"useDebugValue",(()=>x),(e=>x=e)),e(t.exports,"useDeferredValue",(()=>T),(e=>T=e)),e(t.exports,"useEffect",(()=>_),(e=>_=e)),e(t.exports,"useId",(()=>C),(e=>C=e)),e(t.exports,"useImperativeHandle",(()=>I),(e=>I=e)),e(t.exports,"useInsertionEffect",(()=>O),(e=>O=e)),e(t.exports,"useLayoutEffect",(()=>N),(e=>N=e)),e(t.exports,"useMemo",(()=>P),(e=>P=e)),e(t.exports,"useReducer",(()=>A),(e=>A=e)),e(t.exports,"useRef",(()=>R),(e=>R=e)),e(t.exports,"useState",(()=>D),(e=>D=e)),e(t.exports,"useSyncExternalStore",(()=>L),(e=>L=e)),e(t.exports,"useTransition",(()=>M),(e=>M=e)),e(t.exports,"version",(()=>j),(e=>j=e));var F=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,oe={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)ie.call(t,r)&&!se.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:F,type:e,key:o,ref:s,props:i,_owner:oe.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case F:case U:s=!0}}if(s)return i=i(s=e),e=""===r?"."+ce(s,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),de(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var l=r+ce(o=e[a],a);s+=de(o,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)s+=de(o=o.value,t,n,l=r+ce(o,a++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function he(e,t,n){if(null==e)return e;var r=[],i=0;return de(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:he,forEach:function(e,t,n){he(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,o=z,s=$,a=te,l=V,u=W,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:oe},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=oe.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ie.call(t,l)&&!se.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:F,type:e.type,key:i,ref:o,props:r,_owner:s}},h=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:B,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:q,render:e}},v=le,y=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},S=function(){throw Error("act(...) is not supported in production builds of React.")},E=function(e,t){return pe.current.useCallback(e,t)},k=function(e){return pe.current.useContext(e)},x=function(){},T=function(e){return pe.current.useDeferredValue(e)},_=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},I=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},O=function(e,t){return pe.current.useInsertionEffect(e,t)},N=function(e,t){return pe.current.useLayoutEffect(e,t)},P=function(e,t){return pe.current.useMemo(e,t)},A=function(e,t,n){return pe.current.useReducer(e,t,n)},R=function(e){return pe.current.useRef(e)},D=function(e){return pe.current.useState(e)},L=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},j="18.2.0"})),o.register("Xw6Mv",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,a,l,u,c,d,h,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>i),(e=>i=e)),e(t.exports,"createRoot",(()=>s),(e=>s=e)),e(t.exports,"findDOMNode",(()=>a),(e=>a=e)),e(t.exports,"flushSync",(()=>l),(e=>l=e)),e(t.exports,"hydrate",(()=>u),(e=>u=e)),e(t.exports,"hydrateRoot",(()=>c),(e=>c=e)),e(t.exports,"render",(()=>d),(e=>d=e)),e(t.exports,"unmountComponentAtNode",(()=>h),(e=>h=e)),e(t.exports,"unstable_batchedUpdates",(()=>f),(e=>f=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>p),(e=>p=e)),e(t.exports,"version",(()=>m),(e=>m=e));var g=o("acw62"),v=o("fO90s");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function S(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var k=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),x=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},C={};function I(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){O[e]=new I(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];O[t]=new I(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){O[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){O[e]=new I(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){O[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){O[e]=new I(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){O[e]=new I(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){O[e]=new I(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){O[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)}));var N=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}function A(e,t,n,r){var i=O.hasOwnProperty(t)?O[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!x.call(C,e)||!x.call(_,e)&&(T.test(e)?C[e]=!0:(_[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)})),O.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)}));var R=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),q=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var W=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var K=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=K&&e[K]||e["@@iterator"])?e:null}var Q,X=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case L:return"Portal";case F:return"Profiler";case j:return"StrictMode";case $:return"Suspense";case B:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case V:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function oe(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&A(e,"checked",t,!1)}function de(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function he(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ee,ke,xe=(ke=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((Ee=Ee||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ee.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ke(e,t)}))}:ke);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ie(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Oe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ie(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(_e).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]}))}));var Ne=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Ae(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function De(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Le=null,Me=null,je=null;function Fe(e){if(e=Ai(e)){if("function"!=typeof Le)throw Error(y(280));var t=e.stateNode;t&&(t=Di(t),Le(e.stateNode,e.type,t))}}function Ue(e){Me?je?je.push(e):je=[e]:Me=e}function ze(){if(Me){var e=Me,t=je;if(je=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function Ve(e,t){return e(t)}function $e(){}var Be=!1;function He(e,t,n){if(Be)return e(t,n);Be=!0;try{return Ve(e,t,n)}finally{Be=!1,(null!==Me||null!==je)&&($e(),ze())}}function qe(e,t){var n=e.stateNode;if(null===n)return null;var r=Di(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var We=!1;if(k)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){We=!0}}),window.addEventListener("test",Ke,Ke),window.removeEventListener("test",Ke,Ke)}catch(ke){We=!1}function Ge(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Xe=null,Ye=!1,Je=null,Ze={onError:function(e){Qe=!0,Xe=e}};function et(e,t,n,r,i,o,s,a,l){Qe=!1,Xe=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rt(i),e;if(o===r)return rt(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?ot(e):null}function ot(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=ot(e);if(null!==t)return t;e=e.sibling}return null}var st=v.unstable_scheduleCallback,at=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ut=v.unstable_requestPaint,ct=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ht=v.unstable_ImmediatePriority,ft=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/St|0)|0},wt=Math.log,St=Math.LN2;var Et=64,kt=4194304;function xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?r=xt(a):0!==(o&=s)&&(r=xt(o))}else 0!==(s=n&~i)?r=xt(s):0!==o&&(r=xt(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function _t(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function It(){var e=Et;return 0==(4194240&(Et<<=1))&&(Et=64),e}function Ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var At=0;function Rt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Dt,Lt,Mt,jt,Ft,Ut=!1,zt=[],Vt=null,$t=null,Bt=null,Ht=new Map,qt=new Map,Wt=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(t.pointerId)}}function Qt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=Ai(t))&&Lt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Xt(e){var t=Pi(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Ai(n))&&Lt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Re=r,n.target.dispatchEvent(r),Re=null,t.shift()}return!0}function Jt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Ut=!1,null!==Vt&&Yt(Vt)&&(Vt=null),null!==$t&&Yt($t)&&($t=null),null!==Bt&&Yt(Bt)&&(Bt=null),Ht.forEach(Jt),qt.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Ut||(Ut=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<zt.length){en(zt[0],e);for(var n=1;n<zt.length;n++){var r=zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Vt&&en(Vt,e),null!==$t&&en($t,e),null!==Bt&&en(Bt,e),Ht.forEach(t),qt.forEach(t),n=0;n<Wt.length;n++)(r=Wt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&null===(n=Wt[0]).blockedOn;)Xt(n),null===n.blockedOn&&Wt.shift()}var nn=R.ReactCurrentBatchConfig,rn=!0;function on(e,t,n,r){var i=At,o=nn.transition;nn.transition=null;try{At=1,an(e,t,n,r)}finally{At=i,nn.transition=o}}function sn(e,t,n,r){var i=At,o=nn.transition;nn.transition=null;try{At=4,an(e,t,n,r)}finally{At=i,nn.transition=o}}function an(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Vt=Qt(Vt,e,t,n,r,i),!0;case"dragenter":return $t=Qt($t,e,t,n,r,i),!0;case"mouseover":return Bt=Qt(Bt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ht.set(o,Qt(Ht.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qt.set(o,Qt(qt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Kt.indexOf(e)){for(;null!==i;){var o=Ai(i);if(null!==o&&Dt(o),null===(o=un(e,t,n,r))&&ri(e,t,r,ln,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Pi(e=De(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ht:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,hn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=hn,r=n.length,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,Sn,En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=yn(En),xn=X({},En,{view:0,detail:0}),Tn=yn(xn),_n=X({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&"mousemove"===e.type?(bn=e.screenX-Sn.screenX,wn=e.screenY-Sn.screenY):wn=bn=0,Sn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=yn(_n),In=yn(X({},_n,{dataTransfer:0})),On=yn(X({},xn,{relatedTarget:0})),Nn=yn(X({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=X({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),An=yn(Pn),Rn=yn(X({},En,{data:0})),Dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Fn(){return jn}var Un=X({},xn,{key:function(e){if(e.key){var t=Dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ln[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),zn=yn(Un),Vn=yn(X({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=yn(X({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),Bn=yn(X({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=X({},_n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qn=yn(Hn),Wn=[9,13,27,32],Kn=k&&"CompositionEvent"in window,Gn=null;k&&"documentMode"in document&&(Gn=document.documentMode);var Qn=k&&"TextEvent"in window&&!Gn,Xn=k&&(!Kn||Gn&&8<Gn&&11>=Gn),Yn=String.fromCharCode(32),Jn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Ue(r),0<(t=oi(t,"onChange")).length&&(n=new kn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function ar(e){Yr(e,0)}function lr(e){if(se(Ri(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(k){var dr;if(k){var hr="oninput"in document;if(!hr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),hr="function"==typeof fr.oninput}dr=hr}else dr=!1;cr=dr&&(!document.documentMode||9<document.documentMode)}function pr(){or&&(or.detachEvent("onpropertychange",mr),sr=or=null)}function mr(e){if("value"===e.propertyName&&lr(sr)){var t=[];ir(t,sr,e,De(e)),He(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),sr=n,(or=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(sr)}function yr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Sr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!x.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n,r=Er(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Er(r)}}function xr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?xr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Tr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Tr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xr(n.ownerDocument.documentElement,n)){if(null!==r&&_r(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kr(n,o);var s=kr(n,r);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ir=k&&"documentMode"in document&&11>=document.documentMode,Or=null,Nr=null,Pr=null,Ar=!1;function Rr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Ar||null==Or||Or!==ae(r)||("selectionStart"in(r=Or)&&_r(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Pr&&Sr(Pr,r)||(Pr=r,0<(r=oi(Nr,"onSelect")).length&&(t=new kn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Mr={},jr={};function Fr(e){if(Mr[e])return Mr[e];if(!Lr[e])return e;var t,n=Lr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Mr[e]=n[t];return e}k&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);var Ur=Fr("animationend"),zr=Fr("animationiteration"),Vr=Fr("animationstart"),$r=Fr("transitionend"),Br=new Map,Hr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,t){Br.set(e,t),S(t,[e])}for(var Wr=0;Wr<Hr.length;Wr++){var Kr=Hr[Wr];qr(Kr.toLowerCase(),"on"+(Kr[0].toUpperCase()+Kr.slice(1)))}qr(Ur,"onAnimationEnd"),qr(zr,"onAnimationIteration"),qr(Vr,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr($r,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Xr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,a,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(y(198));var u=Xe;Qe=!1,Xe=null,Ye||(Ye=!0,Je=u)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Xr(i,a,u),o=l}else for(s=0;s<r.length;s++){if(l=(a=r[s]).instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Xr(i,a,u),o=l}}}if(Ye)throw e=Je,Ye=!1,Je=null,e}function Jr(e,t){var n=t[Ii];void 0===n&&(n=t[Ii]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=on;break;case 4:i=sn;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!We||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=Pi(a)))return;if(5===(l=s.tag)||6===l){r=o=s;continue e}a=a.parentNode}}r=r.return}He((function(){var r=o,i=De(n),s=[];e:{var a=Br.get(e);if(void 0!==a){var l=kn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=zn;break;case"focusin":u="focus",l=On;break;case"focusout":u="blur",l=On;break;case"beforeblur":case"afterblur":l=On;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=In;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=$n;break;case Ur:case zr:case Vr:l=Nn;break;case $r:l=Bn;break;case"scroll":l=Tn;break;case"wheel":l=qn;break;case"copy":case"cut":case"paste":l=An;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var c=0!=(4&t),d=!c&&"scroll"===e,h=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=qe(p,h))&&c.push(ii(p,m,f)))),d)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),s.push({event:a,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===Re||!(u=n.relatedTarget||n.fromElement)||!Pi(u)&&!u[Ci])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Pi(u):null)&&(u!==(d=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Vn,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?a:Ri(l),f=null==u?a:Ri(u),(a=new c(m,p+"leave",l,n,i)).target=d,a.relatedTarget=f,m=null,Pi(i)===r&&((c=new c(h,p+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,p=0,f=c=l;f;f=si(f))p++;for(f=0,m=h;m;m=si(m))f++;for(;0<p-f;)c=si(c),p--;for(;0<f-p;)h=si(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=si(c),h=si(h)}c=null}else c=null;null!==l&&ai(s,a,l,c,!1),null!==u&&null!==d&&ai(s,d,u,c,!0)}if("select"===(l=(a=r?Ri(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=ur;else if(rr(a))if(cr)g=br;else{g=vr;var v=gr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=yr);switch(g&&(g=g(e,r))?ir(s,g,n,i):(v&&v(e,a,r),"focusout"===e&&(v=a._wrapperState)&&v.controlled&&"number"===a.type&&fe(a,"number",a.value)),v=r?Ri(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Or=v,Nr=r,Pr=null);break;case"focusout":Pr=Nr=Or=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,Rr(s,n,i);break;case"selectionchange":if(Ir)break;case"keydown":case"keyup":Rr(s,n,i)}var y;if(Kn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Xn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(y=pn()):(hn="value"in(dn=i)?dn.value:dn.textContent,tr=!0)),0<(v=oi(r,b)).length&&(b=new Rn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:null!==(y=er(n))&&(b.data=y))),(y=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Jn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Kn&&Zn(e,t)?(e=pn(),fn=hn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=oi(r,"onBeforeInput")).length&&(i=new Rn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=y))}Yr(s,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=qe(e,n))&&r.unshift(ii(e,o,i)),null!=(o=qe(e,t))&&r.push(ii(e,o,i))),e=e.return}return r}function si(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=qe(n,o))&&s.unshift(ii(n,l,a)):i||null!=(l=qe(n,o))&&s.push(ii(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ui,"")}function di(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(y(425))}function hi(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,vi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function Ei(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ki(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Ti="__reactFiber$"+xi,_i="__reactProps$"+xi,Ci="__reactContainer$"+xi,Ii="__reactEvents$"+xi,Oi="__reactListeners$"+xi,Ni="__reactHandles$"+xi;function Pi(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Ti]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ki(e);null!==e;){if(n=e[Ti])return n;e=ki(e)}return t}n=(e=n).parentNode}return null}function Ai(e){return!(e=e[Ti]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ri(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Di(e){return e[_i]||null}var Li=[],Mi=-1;function ji(e){return{current:e}}function Fi(e){0>Mi||(e.current=Li[Mi],Li[Mi]=null,Mi--)}function Ui(e,t){Mi++,Li[Mi]=e.current,e.current=t}var zi={},Vi=ji(zi),$i=ji(!1),Bi=zi;function Hi(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qi(e){return null!=(e=e.childContextTypes)}function Wi(){Fi($i),Fi(Vi)}function Ki(e,t,n){if(Vi.current!==zi)throw Error(y(168));Ui(Vi,t),Ui($i,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(y(108,ne(e)||"Unknown",i));return X({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Bi=Vi.current,Ui(Vi,e),Ui($i,$i.current),!0}function Xi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Gi(e,t,Bi),r.__reactInternalMemoizedMergedChildContext=e,Fi($i),Fi(Vi),Ui(Vi,e)):Fi($i),Ui($i,n)}var Yi=null,Ji=!1,Zi=!1;function eo(e){null===Yi?Yi=[e]:Yi.push(e)}function to(){if(!Zi&&null!==Yi){Zi=!0;var e=0,t=At;try{var n=Yi;for(At=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Yi=null,Ji=!1}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),st(ht,to),t}finally{At=t,Zi=!1}}return null}var no=[],ro=0,io=null,oo=0,so=[],ao=0,lo=null,uo=1,co="";function ho(e,t){no[ro++]=oo,no[ro++]=io,io=e,oo=t}function fo(e,t,n){so[ao++]=uo,so[ao++]=co,so[ao++]=lo,lo=e;var r=uo;e=co;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,uo=1<<32-bt(t)+i|n<<i|r,co=o+e}else uo=1<<o|n<<i|r,co=e}function po(e){null!==e.return&&(ho(e,1),fo(e,1,0))}function mo(e){for(;e===io;)io=no[--ro],no[ro]=null,oo=no[--ro],no[ro]=null;for(;e===lo;)lo=so[--ao],so[ao]=null,co=so[--ao],so[ao]=null,uo=so[--ao],so[ao]=null}var go=null,vo=null,yo=!1,bo=null;function wo(e,t){var n=qu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function So(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,go=e,vo=Ei(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,go=e,vo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==lo?{id:uo,overflow:co}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=qu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,go=e,vo=null,!0);default:return!1}}function Eo(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ko(e){if(yo){var t=vo;if(t){var n=t;if(!So(e,t)){if(Eo(e))throw Error(y(418));t=Ei(n.nextSibling);var r=go;t&&So(e,t)?wo(r,n):(e.flags=-4097&e.flags|2,yo=!1,go=e)}}else{if(Eo(e))throw Error(y(418));e.flags=-4097&e.flags|2,yo=!1,go=e}}}function xo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;go=e}function To(e){if(e!==go)return!1;if(!yo)return xo(e),yo=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=vo)){if(Eo(e))throw _o(),Error(y(418));for(;t;)wo(e,t),t=Ei(t.nextSibling)}if(xo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){vo=Ei(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}vo=null}}else vo=go?Ei(e.stateNode.nextSibling):null;return!0}function _o(){for(var e=vo;e;)e=Ei(e.nextSibling)}function Co(){vo=go=null,yo=!1}function Io(e){null===bo?bo=[e]:bo.push(e)}var Oo=R.ReactCurrentBatchConfig;function No(e,t){if(e&&e.defaultProps){for(var n in t=X({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Po=ji(null),Ao=null,Ro=null,Do=null;function Lo(){Do=Ro=Ao=null}function Mo(e){var t=Po.current;Fi(Po),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t){Ao=e,Do=Ro=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ra=!0),e.firstContext=null)}function Uo(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},null===Ro){if(null===Ao)throw Error(y(308));Ro=e,Ao.dependencies={lanes:0,firstContext:e}}else Ro=Ro.next=e;return t}var zo=null;function Vo(e){null===zo?zo=[e]:zo.push(e)}function $o(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Vo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bo(e,r)}function Bo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ho=!1;function qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ko(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Go(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&$l)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bo(e,n)}return null===(i=r.interleaved)?(t.next=t,Vo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bo(e,n)}function Qo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}function Xo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;Ho=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===s?o=u:s.next=u,s=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(s=0,c=u=l=null,a=o;;){var h=a.lane,f=a.eventTime;if((r&h)===h){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=X({},d,h);break e;case 2:Ho=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Xl|=s,e.lanes=s,e.memoizedState=d}}function Jo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var Zo=(new g.Component).refs;function es(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:X({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),o=Ko(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=Go(e,o,i))&&(gu(t,e,i,r),Qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),o=Ko(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=Go(e,o,i))&&(gu(t,e,i,r),Qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=mu(e),i=Ko(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Go(e,i,r))&&(gu(t,e,r,n),Qo(t,e,r))}};function ns(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!Sr(n,r)||!Sr(i,o))}function rs(e,t,n){var r=!1,i=zi,o=t.contextType;return"object"==typeof o&&null!==o?o=Uo(o):(i=qi(t)?Bi:Vi.current,o=(r=null!=(r=t.contextTypes))?Hi(e,i):zi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function is(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zo,qo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Uo(o):(o=qi(t)?Bi:Vi.current,i.context=Hi(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(es(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ts.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ss(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;t===Zo&&(t=i.refs={}),null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ls(e){return(0,e._init)(e._payload)}function us(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Ku(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Yu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var o=n.type;return o===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===q&&ls(o)===t.type)?((r=i(t,n.props)).ref=ss(e,t,n),r.return=e,r):((r=Gu(n.type,n.key,n.props,null,e.mode,r)).ref=ss(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ju(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,o){return null===t||7!==t.tag?((t=Qu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Yu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case D:return(n=Gu(t.type,t.key,t.props,null,e.mode,n)).ref=ss(e,null,t),n.return=e,n;case L:return(t=Ju(t,e.mode,n)).return=e,t;case q:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qu(t,e.mode,n,null)).return=e,t;as(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case D:return n.key===i?l(e,t,n,r):null;case L:return n.key===i?u(e,t,n,r):null;case q:return h(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);as(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case D:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case L:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case q:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);as(t,r)}return null}function p(i,s,a,l){for(var u=null,c=null,p=s,m=s=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,a[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===a.length)return n(i,p),yo&&ho(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],l))&&(s=o(p,s,m),null===c?u=p:c.sibling=p,c=p);return yo&&ho(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),s=o(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),yo&&ho(i,m),u}function m(i,s,a,l){var u=G(a);if("function"!=typeof u)throw Error(y(150));if(null==(a=u.call(a)))throw Error(y(151));for(var c=u=null,p=s,m=s=0,g=null,v=a.next();null!==p&&!v.done;m++,v=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=h(i,p,v.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),s=o(b,s,m),null===c?u=b:c.sibling=b,c=b,p=g}if(v.done)return n(i,p),yo&&ho(i,m),u;if(null===p){for(;!v.done;m++,v=a.next())null!==(v=d(i,v.value,l))&&(s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return yo&&ho(i,m),u}for(p=r(i,p);!v.done;m++,v=a.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),yo&&ho(i,m),u}return function e(r,o,a,l){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case D:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===M){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===q&&ls(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=ss(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===M?((o=Qu(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Gu(a.type,a.key,a.props,null,r.mode,l)).ref=ss(r,o,a),l.return=r,r=l)}return s(r);case L:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Ju(a,r.mode,l)).return=r,r=o}return s(r);case q:return e(r,o,(c=a._init)(a._payload),l)}if(pe(a))return p(r,o,a,l);if(G(a))return m(r,o,a,l);as(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Yu(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var cs=us(!0),ds=us(!1),hs={},fs=ji(hs),ps=ji(hs),ms=ji(hs);function gs(e){if(e===hs)throw Error(y(174));return e}function vs(e,t){switch(Ui(ms,t),Ui(ps,e),Ui(fs,hs),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Se(null,"");break;default:t=Se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Fi(fs),Ui(fs,t)}function ys(){Fi(fs),Fi(ps),Fi(ms)}function bs(e){gs(ms.current);var t=gs(fs.current),n=Se(t,e.type);t!==n&&(Ui(ps,e),Ui(fs,n))}function ws(e){ps.current===e&&(Fi(fs),Fi(ps))}var Ss=ji(0);function Es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function xs(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Ts=R.ReactCurrentDispatcher,_s=R.ReactCurrentBatchConfig,Cs=0,Is=null,Os=null,Ns=null,Ps=!1,As=!1,Rs=0,Ds=0;function Ls(){throw Error(y(321))}function Ms(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function js(e,t,n,r,i,o){if(Cs=o,Is=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=null===e||null===e.memoizedState?wa:Sa,e=n(r,i),As){o=0;do{if(As=!1,Rs=0,25<=o)throw Error(y(301));o+=1,Ns=Os=null,t.updateQueue=null,Ts.current=Ea,e=n(r,i)}while(As)}if(Ts.current=ba,t=null!==Os&&null!==Os.next,Cs=0,Ns=Os=Is=null,Ps=!1,t)throw Error(y(300));return e}function Fs(){var e=0!==Rs;return Rs=0,e}function Us(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ns?Is.memoizedState=Ns=e:Ns=Ns.next=e,Ns}function zs(){if(null===Os){var e=Is.alternate;e=null!==e?e.memoizedState:null}else e=Os.next;var t=null===Ns?Is.memoizedState:Ns.next;if(null!==t)Ns=t,Os=e;else{if(null===e)throw Error(y(310));e={memoizedState:(Os=e).memoizedState,baseState:Os.baseState,baseQueue:Os.baseQueue,queue:Os.queue,next:null},null===Ns?Is.memoizedState=Ns=e:Ns=Ns.next=e}return Ns}function Vs(e,t){return"function"==typeof t?t(e):t}function $s(e){var t=zs(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=Os,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Cs&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=d,s=r):l=l.next=d,Is.lanes|=c,Xl|=c}u=u.next}while(null!==u&&u!==o);null===l?s=r:l.next=a,wr(r,t.memoizedState)||(Ra=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,Is.lanes|=o,Xl|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bs(e){var t=zs(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);wr(o,t.memoizedState)||(Ra=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hs(){}function qs(e,t){var n=Is,r=zs(),i=t(),o=!wr(r.memoizedState,i);if(o&&(r.memoizedState=i,Ra=!0),r=r.queue,ra(Gs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==Ns&&1&Ns.memoizedState.tag){if(n.flags|=2048,Js(9,Ks.bind(null,n,r,i,t),void 0,null),null===Bl)throw Error(y(349));0!=(30&Cs)||Ws(n,t,i)}return i}function Ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Is.updateQueue)?(t={lastEffect:null,stores:null},Is.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ks(e,t,n,r){t.value=n,t.getSnapshot=r,Qs(t)&&Xs(e)}function Gs(e,t,n){return n((function(){Qs(t)&&Xs(e)}))}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Xs(e){var t=Bo(e,1);null!==t&&gu(t,e,1,-1)}function Ys(e){var t=Us();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,Is,e),[t.memoizedState,e]}function Js(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Is.updateQueue)?(t={lastEffect:null,stores:null},Is.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zs(){return zs().memoizedState}function ea(e,t,n,r){var i=Us();Is.flags|=e,i.memoizedState=Js(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=zs();r=void 0===r?null:r;var o=void 0;if(null!==Os){var s=Os.memoizedState;if(o=s.destroy,null!==r&&Ms(r,s.deps))return void(i.memoizedState=Js(t,n,o,r))}Is.flags|=e,i.memoizedState=Js(1|t,n,o,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function oa(e,t){return ta(4,4,e,t)}function sa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,sa.bind(null,t,e),n)}function la(){}function ua(e,t){var n=zs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ca(e,t){var n=zs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function da(e,t,n){return 0==(21&Cs)?(e.baseState&&(e.baseState=!1,Ra=!0),e.memoizedState=n):(wr(n,t)||(n=It(),Is.lanes|=n,Xl|=n,e.baseState=!0),t)}function ha(e,t){var n=At;At=0!==n&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{At=n,_s.transition=r}}function fa(){return zs().memoizedState}function pa(e,t,n){var r=mu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))va(t,n);else if(null!==(n=$o(e,t,n,r))){gu(n,e,r,pu()),ya(n,t,r)}}function ma(e,t,n){var r=mu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))va(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,s)){var l=t.interleaved;return null===l?(i.next=i,Vo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=$o(e,t,i,r))&&(gu(n,e,r,i=pu()),ya(n,t,r))}}function ga(e){var t=e.alternate;return e===Is||null!==t&&t===Is}function va(e,t){As=Ps=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ya(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}var ba={readContext:Uo,useCallback:Ls,useContext:Ls,useEffect:Ls,useImperativeHandle:Ls,useInsertionEffect:Ls,useLayoutEffect:Ls,useMemo:Ls,useReducer:Ls,useRef:Ls,useState:Ls,useDebugValue:Ls,useDeferredValue:Ls,useTransition:Ls,useMutableSource:Ls,useSyncExternalStore:Ls,useId:Ls,unstable_isNewReconciler:!1},wa={readContext:Uo,useCallback:function(e,t){return Us().memoizedState=[e,void 0===t?null:t],e},useContext:Uo,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Us();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Us();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,Is,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Us().memoizedState=e},useState:Ys,useDebugValue:la,useDeferredValue:function(e){return Us().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=ha.bind(null,e[1]),Us().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Is,i=Us();if(yo){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===Bl)throw Error(y(349));0!=(30&Cs)||Ws(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,na(Gs.bind(null,r,o,e),[e]),r.flags|=2048,Js(9,Ks.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Us(),t=Bl.identifierPrefix;if(yo){var n=co;t=":"+t+"R"+(n=(uo&~(1<<32-bt(uo)-1)).toString(32)+n),0<(n=Rs++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ds++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sa={readContext:Uo,useCallback:ua,useContext:Uo,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:oa,useMemo:ca,useReducer:$s,useRef:Zs,useState:function(){return $s(Vs)},useDebugValue:la,useDeferredValue:function(e){return da(zs(),Os.memoizedState,e)},useTransition:function(){return[$s(Vs)[0],zs().memoizedState]},useMutableSource:Hs,useSyncExternalStore:qs,useId:fa,unstable_isNewReconciler:!1},Ea={readContext:Uo,useCallback:ua,useContext:Uo,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:oa,useMemo:ca,useReducer:Bs,useRef:Zs,useState:function(){return Bs(Vs)},useDebugValue:la,useDeferredValue:function(e){var t=zs();return null===Os?t.memoizedState=e:da(t,Os.memoizedState,e)},useTransition:function(){return[Bs(Vs)[0],zs().memoizedState]},useMutableSource:Hs,useSyncExternalStore:qs,useId:fa,unstable_isNewReconciler:!1};function ka(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ta(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var _a="function"==typeof WeakMap?WeakMap:Map;function Ca(e,t,n){(n=Ko(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){iu||(iu=!0,ou=r),Ta(0,t)},n}function Ia(e,t,n){(n=Ko(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){Ta(0,t),"function"!=typeof r&&(null===su?su=new Set([this]):su.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Oa(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new _a;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uu.bind(null,e,t,n),t.then(e,e))}function Na(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Pa(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ko(-1,1)).tag=2,Go(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Aa=R.ReactCurrentOwner,Ra=!1;function Da(e,t,n,r){t.child=null===e?ds(t,null,n,r):cs(t,e.child,n,r)}function La(e,t,n,r,i){n=n.render;var o=t.ref;return Fo(t,i),r=js(e,t,n,r,o,i),n=Fs(),null===e||Ra?(yo&&n&&po(t),t.flags|=1,Da(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Wu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ja(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var s=o.memoizedProps;if((n=null!==(n=n.compare)?n:Sr)(s,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Ku(o,r)).ref=t.ref,e.return=t,t.child=e}function ja(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref){if(Ra=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Ra=!0)}}return za(e,t,n,r,i)}function Fa(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ui(Kl,Wl),Wl|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ui(Kl,Wl),Wl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ui(Kl,Wl),Wl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ui(Kl,Wl),Wl|=r;return Da(e,t,i,n),t.child}function Ua(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=qi(n)?Bi:Vi.current;return o=Hi(t,o),Fo(t,i),n=js(e,t,n,r,o,i),r=Fs(),null===e||Ra?(yo&&r&&po(t),t.flags|=1,Da(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Va(e,t,n,r,i){if(qi(n)){var o=!0;Qi(t)}else o=!1;if(Fo(t,i),null===t.stateNode)rl(e,t),rs(t,n,r),os(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;"object"==typeof u&&null!==u?u=Uo(u):u=Hi(t,u=qi(n)?Bi:Vi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;d||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&is(t,s,r,u),Ho=!1;var h=t.memoizedState;s.state=h,Yo(t,r,s,i),l=t.memoizedState,a!==r||h!==l||$i.current||Ho?("function"==typeof c&&(es(t,n,c,r),l=t.memoizedState),(a=Ho||ns(t,n,a,r,h,l,u))?(d||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wo(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:No(t.type,a),s.props=u,d=t.pendingProps,h=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=Uo(l):l=Hi(t,l=qi(n)?Bi:Vi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==d||h!==l)&&is(t,s,r,l),Ho=!1,h=t.memoizedState,s.state=h,Yo(t,r,s,i);var p=t.memoizedState;a!==d||h!==p||$i.current||Ho?("function"==typeof f&&(es(t,n,f,r),p=t.memoizedState),(u=Ho||ns(t,n,u,r,h,p,l)||!1)?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=u):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,o,i)}function $a(e,t,n,r,i,o){Ua(e,t);var s=0!=(128&t.flags);if(!r&&!s)return i&&Xi(t,n,!1),il(e,t,o);r=t.stateNode,Aa.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=cs(t,e.child,null,o),t.child=cs(t,null,a,o)):Da(e,t,a,o),t.memoizedState=r.state,i&&Xi(t,n,!0),t.child}function Ba(e){var t=e.stateNode;t.pendingContext?Ki(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(0,t.context,!1),vs(e,t.containerInfo)}function Ha(e,t,n,r,i){return Co(),Io(i),t.flags|=256,Da(e,t,n,r),t.child}var qa,Wa,Ka,Ga,Qa={dehydrated:null,treeContext:null,retryLane:0};function Xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ya(e,t,n){var r,i=t.pendingProps,o=Ss.current,s=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ui(Ss,1&o),null===e)return ko(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,s?(i=t.mode,s=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=a):s=Xu(a,i,0,null),e=Qu(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xa(n),t.memoizedState=Qa,e):Ja(t,a));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Za(e,t,s,r=xa(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xu({mode:"visible",children:r.children},i,0,null),(o=Qu(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!=(1&t.mode)&&cs(t,e.child,null,s),t.child.memoizedState=Xa(s),t.memoizedState=Qa,o);if(0==(1&t.mode))return Za(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Za(e,t,s,r=xa(o=Error(y(419)),r,void 0))}if(a=0!=(s&e.childLanes),Ra||a){if(null!==(r=Bl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Bo(e,i),gu(r,e,i,-1))}return Ou(),Za(e,t,s,r=xa(Error(y(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Vu.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vo=Ei(i.nextSibling),go=t,yo=!0,bo=null,null!==e&&(so[ao++]=uo,so[ao++]=co,so[ao++]=lo,uo=e.id,co=e.overflow,lo=t),t=Ja(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,o,n);if(s){s=i.fallback,a=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Ku(o,l)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Ku(r,s):(s=Qu(s,a,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,a=null===(a=e.child.memoizedState)?Xa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Qa,i}return e=(s=e.child).sibling,i=Ku(s,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ja(e,t){return(t=Xu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Za(e,t,n,r){return null!==r&&Io(r),cs(t,e.child,null,n),(e=Ja(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function tl(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Da(e,t,r.children,n),0!=(2&(r=Ss.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ui(Ss,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Es(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Es(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,o);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Xl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=Ku(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ku(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ol(e,t){if(!yo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function al(e,t,n){var r=t.pendingProps;switch(mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sl(t),null;case 1:case 17:return qi(t.type)&&Wi(),sl(t),null;case 3:return r=t.stateNode,ys(),Fi($i),Fi(Vi),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(To(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==bo&&(wu(bo),bo=null))),Wa(e,t),sl(t),null;case 5:ws(t);var i=gs(ms.current);if(n=t.type,null!==e&&null!=t.stateNode)Ka(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return sl(t),null}if(e=gs(fs.current),To(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ti]=t,r[_i]=o,e=0!=(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":ue(r,o),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Jr("invalid",r);break;case"textarea":ve(r,o),Jr("invalid",r)}for(var s in Pe(n,o),i=null,o)if(o.hasOwnProperty(s)){var a=o[s];"children"===s?"string"==typeof a?r.textContent!==a&&(!0!==o.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==o.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",""+a]):w.hasOwnProperty(s)&&null!=a&&"onScroll"===s&&Jr("scroll",r)}switch(n){case"input":oe(r),he(r,o,!0);break;case"textarea":oe(r),be(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=hi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ti]=t,e[_i]=r,qa(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ae(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),i=r;break;case"iframe":case"object":case"embed":Jr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],e);i=r;break;case"source":Jr("error",e),i=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),i=r;break;case"details":Jr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Jr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":ve(e,r),i=ge(e,r),Jr("invalid",e)}for(o in Pe(n,i),a=i)if(a.hasOwnProperty(o)){var l=a[o];"style"===o?Oe(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&xe(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&Te(e,l):"number"==typeof l&&Te(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(w.hasOwnProperty(o)?null!=l&&"onScroll"===o&&Jr("scroll",e):null!=l&&A(e,o,l,s))}switch(n){case"input":oe(e),he(e,r,!1);break;case"textarea":oe(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?me(e,!!r.multiple,o,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return sl(t),null;case 6:if(e&&null!=t.stateNode)Ga(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=gs(ms.current),gs(fs.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ti]=t,(o=r.nodeValue!==n)&&null!==(e=go))switch(e.tag){case 3:di(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&di(r.nodeValue,n,0!=(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ti]=t,t.stateNode=r}return sl(t),null;case 13:if(Fi(Ss),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(yo&&null!==vo&&0!=(1&t.mode)&&0==(128&t.flags))_o(),Co(),t.flags|=98560,o=!1;else if(o=To(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(y(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(y(317));o[Ti]=t}else Co(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;sl(t),o=!1}else null!==bo&&(wu(bo),bo=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&Ss.current)?0===Gl&&(Gl=3):Ou())),null!==t.updateQueue&&(t.flags|=4),sl(t),null);case 4:return ys(),Wa(e,t),null===e&&ti(t.stateNode.containerInfo),sl(t),null;case 10:return Mo(t.type._context),sl(t),null;case 19:if(Fi(Ss),null===(o=t.memoizedState))return sl(t),null;if(r=0!=(128&t.flags),null===(s=o.rendering))if(r)ol(o,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=Es(e))){for(t.flags|=128,ol(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ui(Ss,1&Ss.current|2),t.child}e=e.sibling}null!==o.tail&&ct()>nu&&(t.flags|=128,r=!0,ol(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Es(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ol(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!yo)return sl(t),null}else 2*ct()-o.renderingStartTime>nu&&1073741824!==n&&(t.flags|=128,r=!0,ol(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ct(),t.sibling=null,n=Ss.current,Ui(Ss,r?1&n|2:1&n),t):(sl(t),null);case 22:case 23:return Tu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Wl)&&(sl(t),6&t.subtreeFlags&&(t.flags|=8192)):sl(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function ll(e,t){switch(mo(t),t.tag){case 1:return qi(t.type)&&Wi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ys(),Fi($i),Fi(Vi),xs(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ws(t),null;case 13:if(Fi(Ss),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));Co()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Fi(Ss),null;case 4:return ys(),null;case 10:return Mo(t.type._context),null;case 22:case 23:return Tu(),null;default:return null}}qa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Wa=function(){},Ka=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gs(fs.current);var o,s=null;switch(n){case"input":i=le(e,i),r=le(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=ge(e,i),r=ge(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=hi)}for(u in Pe(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(s=s||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(s=s||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Jr("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},Ga=function(e,t,n,r){n!==r&&(t.flags|=4)};var ul=!1,cl=!1,dl="function"==typeof WeakSet?WeakSet:Set,hl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Fu(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){Fu(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&pl(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ti],delete t[_i],delete t[Ii],delete t[Oi],delete t[Ni])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function Sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function El(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=hi));else if(4!==r&&null!==(e=e.child))for(El(e,t,n),e=e.sibling;null!==e;)El(e,t,n),e=e.sibling}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}var xl=null,Tl=!1;function _l(e,t,n){for(n=n.child;null!==n;)Cl(e,t,n),n=n.sibling}function Cl(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:cl||fl(n,t);case 6:var r=xl,i=Tl;xl=null,_l(e,t,n),Tl=i,null!==(xl=r)&&(Tl?(e=xl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):xl.removeChild(n.stateNode));break;case 18:null!==xl&&(Tl?(e=xl,n=n.stateNode,8===e.nodeType?Si(e.parentNode,n):1===e.nodeType&&Si(e,n),tn(e)):Si(xl,n.stateNode));break;case 4:r=xl,i=Tl,xl=n.stateNode.containerInfo,Tl=!0,_l(e,t,n),xl=r,Tl=i;break;case 0:case 11:case 14:case 15:if(!cl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,void 0!==s&&(0!=(2&o)||0!=(4&o))&&pl(n,t,s),i=i.next}while(i!==r)}_l(e,t,n);break;case 1:if(!cl&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Fu(n,t,e)}_l(e,t,n);break;case 21:_l(e,t,n);break;case 22:1&n.mode?(cl=(r=cl)||null!==n.memoizedState,_l(e,t,n),cl=r):_l(e,t,n);break;default:_l(e,t,n)}}function Il(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dl),t.forEach((function(t){var r=$u.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Ol(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;null!==a;){switch(a.tag){case 5:xl=a.stateNode,Tl=!1;break e;case 3:case 4:xl=a.stateNode.containerInfo,Tl=!0;break e}a=a.return}if(null===xl)throw Error(y(160));Cl(o,s,i),xl=null,Tl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Fu(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Nl(t,e),t=t.sibling}function Nl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ol(t,e),Pl(e),4&r){try{gl(3,e,e.return),vl(3,e)}catch(t){Fu(e,e.return,t)}try{gl(5,e,e.return)}catch(t){Fu(e,e.return,t)}}break;case 1:Ol(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(Ol(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Fu(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===o.type&&null!=o.name&&ce(i,o),Ae(a,s);var u=Ae(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];"style"===c?Oe(i,d):"dangerouslySetInnerHTML"===c?xe(i,d):"children"===c?Te(i,d):A(i,c,d,u)}switch(a){case"input":de(i,o);break;case"textarea":ye(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?me(i,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?me(i,!!o.multiple,o.defaultValue,!0):me(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(t){Fu(e,e.return,t)}}break;case 6:if(Ol(t,e),Pl(e),4&r){if(null===e.stateNode)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(t){Fu(e,e.return,t)}}break;case 3:if(Ol(t,e),Pl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Fu(e,e.return,t)}break;case 4:default:Ol(t,e),Pl(e);break;case 13:Ol(t,e),Pl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(tu=ct())),4&r&&Il(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cl=(u=cl)||c,Ol(t,e),cl=u):Ol(t,e),Pl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(hl=e,c=e.child;null!==c;){for(d=hl=c;null!==hl;){switch(f=(h=hl).child,h.tag){case 0:case 11:case 14:case 15:gl(4,h,h.return);break;case 1:fl(h,h.return);var p=h.stateNode;if("function"==typeof p.componentWillUnmount){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Fu(r,n,e)}}break;case 5:fl(h,h.return);break;case 22:if(null!==h.memoizedState){Ll(d);continue}}null!==f?(f.return=h,hl=f):Ll(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(a=d.stateNode,s=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ie("display",s))}catch(t){Fu(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){Fu(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ol(t,e),Pl(e),4&r&&Il(e);case 21:}}function Pl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),kl(e,Sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;El(e,Sl(e),o);break;default:throw Error(y(161))}}catch(t){Fu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Al(e,t,n){hl=e,Rl(e,t,n)}function Rl(e,t,n){for(var r=0!=(1&e.mode);null!==hl;){var i=hl,o=i.child;if(22===i.tag&&r){var s=null!==i.memoizedState||ul;if(!s){var a=i.alternate,l=null!==a&&null!==a.memoizedState||cl;a=ul;var u=cl;if(ul=s,(cl=l)&&!u)for(hl=i;null!==hl;)l=(s=hl).child,22===s.tag&&null!==s.memoizedState?Ml(i):null!==l?(l.return=s,hl=l):Ml(i);for(;null!==o;)hl=o,Rl(o,t,n),o=o.sibling;hl=i,ul=a,cl=u}Dl(e)}else 0!=(8772&i.subtreeFlags)&&null!==o?(o.return=i,hl=o):Dl(e)}}function Dl(e){for(;null!==hl;){var t=hl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cl||vl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:No(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Jo(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Jo(t,s,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}cl||512&t.flags&&yl(t)}catch(e){Fu(t,t.return,e)}}if(t===e){hl=null;break}if(null!==(n=t.sibling)){n.return=t.return,hl=n;break}hl=t.return}}function Ll(e){for(;null!==hl;){var t=hl;if(t===e){hl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,hl=n;break}hl=t.return}}function Ml(e){for(;null!==hl;){var t=hl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(e){Fu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Fu(t,i,e)}}var o=t.return;try{yl(t)}catch(e){Fu(t,o,e)}break;case 5:var s=t.return;try{yl(t)}catch(e){Fu(t,s,e)}}}catch(e){Fu(t,t.return,e)}if(t===e){hl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,hl=a;break}hl=t.return}}var jl,Fl=Math.ceil,Ul=R.ReactCurrentDispatcher,zl=R.ReactCurrentOwner,Vl=R.ReactCurrentBatchConfig,$l=0,Bl=null,Hl=null,ql=0,Wl=0,Kl=ji(0),Gl=0,Ql=null,Xl=0,Yl=0,Jl=0,Zl=null,eu=null,tu=0,nu=1/0,ru=null,iu=!1,ou=null,su=null,au=!1,lu=null,uu=0,cu=0,du=null,hu=-1,fu=0;function pu(){return 0!=(6&$l)?ct():-1!==hu?hu:hu=ct()}function mu(e){return 0==(1&e.mode)?1:0!=(2&$l)&&0!==ql?ql&-ql:null!==Oo.transition?(0===fu&&(fu=It()),fu):0!==(e=At)?e:e=void 0===(e=window.event)?16:cn(e.type)}function gu(e,t,n,r){if(50<cu)throw cu=0,du=null,Error(y(185));Nt(e,n,r),0!=(2&$l)&&e===Bl||(e===Bl&&(0==(2&$l)&&(Yl|=n),4===Gl&&Su(e,ql)),vu(e,r),1===n&&0===$l&&0==(1&t.mode)&&(nu=ct()+500,Ji&&to()))}function vu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),a=1<<s,l=i[s];-1===l?0!=(a&n)&&0==(a&r)||(i[s]=_t(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}(e,t);var r=Tt(e,e===Bl?ql:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Ji=!0,eo(e)}(Eu.bind(null,e)):eo(Eu.bind(null,e)),bi((function(){0==(6&$l)&&to()})),n=null;else{switch(Rt(r)){case 1:n=ht;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Bu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(hu=-1,fu=0,0!=(6&$l))throw Error(y(327));var n=e.callbackNode;if(Mu()&&e.callbackNode!==n)return null;var r=Tt(e,e===Bl?ql:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var i=$l;$l|=2;var o=Iu();for(Bl===e&&ql===t||(ru=null,nu=ct()+500,_u(e,t));;)try{Au();break}catch(t){Cu(e,t)}Lo(),Ul.current=o,$l=i,null!==Hl?t=0:(Bl=null,ql=0,t=Gl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=bu(e,i))),1===t)throw n=Ql,_u(e,0),Su(e,r),vu(e,ct()),n;if(6===t)Su(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wr(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Nu(e,r))&&(0!==(o=Ct(e))&&(r=o,t=bu(e,o))),1===t))throw n=Ql,_u(e,0),Su(e,r),vu(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Lu(e,eu,ru);break;case 3:if(Su(e,r),(130023424&r)===r&&10<(t=tu+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Lu.bind(null,e,eu,ru),t);break}Lu(e,eu,ru);break;case 4:if(Su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fl(r/1960))-r)){e.timeoutHandle=gi(Lu.bind(null,e,eu,ru),r);break}Lu(e,eu,ru);break;default:throw Error(y(329))}}}return vu(e,ct()),e.callbackNode===n?yu.bind(null,e):null}function bu(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(_u(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=eu,eu=n,null!==t&&wu(t)),e}function wu(e){null===eu?eu=e:eu.push.apply(eu,e)}function Su(e,t){for(t&=~Jl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if(0!=(6&$l))throw Error(y(327));Mu();var t=Tt(e,0);if(0==(1&t))return vu(e,ct()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Ql,_u(e,0),Su(e,t),vu(e,ct()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lu(e,eu,ru),vu(e,ct()),null}function ku(e,t){var n=$l;$l|=1;try{return e(t)}finally{0===($l=n)&&(nu=ct()+500,Ji&&to())}}function xu(e){null!==lu&&0===lu.tag&&0==(6&$l)&&Mu();var t=$l;$l|=1;var n=Vl.transition,r=At;try{if(Vl.transition=null,At=1,e)return e()}finally{At=r,Vl.transition=n,0==(6&($l=t))&&to()}}function Tu(){Wl=Kl.current,Fi(Kl)}function _u(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,vi(n)),null!==Hl)for(n=Hl.return;null!==n;){var r=n;switch(mo(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Wi();break;case 3:ys(),Fi($i),Fi(Vi),xs();break;case 5:ws(r);break;case 4:ys();break;case 13:case 19:Fi(Ss);break;case 10:Mo(r.type._context);break;case 22:case 23:Tu()}n=n.return}if(Bl=e,Hl=e=Ku(e.current,null),ql=Wl=t,Gl=0,Ql=null,Jl=Yl=Xl=0,eu=Zl=null,null!==zo){for(t=0;t<zo.length;t++)if(null!==(r=(n=zo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var s=o.next;o.next=i,r.next=s}n.pending=r}zo=null}return e}function Cu(e,t){for(;;){var n=Hl;try{if(Lo(),Ts.current=ba,Ps){for(var r=Is.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ps=!1}if(Cs=0,Ns=Os=Is=null,As=!1,Rs=0,zl.current=null,null===n||null===n.return){Gl=1,Ql=t,Hl=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ql,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Na(s);if(null!==f){f.flags&=-257,Pa(f,s,a,0,t),1&f.mode&&Oa(o,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Oa(o,u,t),Ou();break e}l=Error(y(426))}else if(yo&&1&a.mode){var g=Na(s);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Pa(g,s,a,0,t),Io(ka(l,a));break e}}o=l=ka(l,a),4!==Gl&&(Gl=2),null===Zl?Zl=[o]:Zl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Xo(o,Ca(0,l,t));break e;case 1:a=l;var v=o.type,b=o.stateNode;if(0==(128&o.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===su||!su.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Xo(o,Ia(o,a,t));break e}}o=o.return}while(null!==o)}Du(n)}catch(e){t=e,Hl===n&&null!==n&&(Hl=n=n.return);continue}break}}function Iu(){var e=Ul.current;return Ul.current=ba,null===e?ba:e}function Ou(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===Bl||0==(268435455&Xl)&&0==(268435455&Yl)||Su(Bl,ql)}function Nu(e,t){var n=$l;$l|=2;var r=Iu();for(Bl===e&&ql===t||(ru=null,_u(e,t));;)try{Pu();break}catch(t){Cu(e,t)}if(Lo(),$l=n,Ul.current=r,null!==Hl)throw Error(y(261));return Bl=null,ql=0,Gl}function Pu(){for(;null!==Hl;)Ru(Hl)}function Au(){for(;null!==Hl&&!lt();)Ru(Hl)}function Ru(e){var t=jl(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,null===t?Du(e):Hl=t,zl.current=null}function Du(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=al(n,t,Wl)))return void(Hl=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void(Hl=n);if(null===e)return Gl=6,void(Hl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Hl=t);Hl=t=e}while(null!==t);0===Gl&&(Gl=5)}function Lu(e,t,n){var r=At,i=Vl.transition;try{Vl.transition=null,At=1,function(e,t,n,r){do{Mu()}while(null!==lu);if(0!=(6&$l))throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===Bl&&(Hl=Bl=null,ql=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||au||(au=!0,Bu(pt,(function(){return Mu(),null}))),o=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||o){o=Vl.transition,Vl.transition=null;var s=At;At=1;var a=$l;$l|=4,zl.current=null,function(e,t){if(fi=rn,_r(e=Tr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(e){n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||0!==i&&3!==d.nodeType||(a=s+i),d!==o||0!==r&&3!==d.nodeType||(l=s+r),3===d.nodeType&&(s+=d.nodeValue.length),null!==(f=d.firstChild);)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),null!==(f=d.nextSibling))break;h=(d=h).parentNode}d=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,hl=t;null!==hl;)if(e=(t=hl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,hl=e;else for(;null!==hl;){t=hl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:No(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(y(163))}}catch(e){Fu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,hl=e;break}hl=t.return}p=ml,ml=!1}(e,n),Nl(n,e),Cr(pi),rn=!!fi,pi=fi=null,e.current=n,Al(n,e,i),ut(),$l=a,At=s,Vl.transition=o}else e.current=n;if(au&&(au=!1,lu=e,uu=i),o=e.pendingLanes,0===o&&(su=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),vu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,e=ou,ou=null,e;0!=(1&uu)&&0!==e.tag&&Mu(),o=e.pendingLanes,0!=(1&o)?e===du?cu++:(cu=0,du=e):cu=0,to()}(e,t,n,r)}finally{Vl.transition=i,At=r}return null}function Mu(){if(null!==lu){var e=Rt(uu),t=Vl.transition,n=At;try{if(Vl.transition=null,At=16>e?16:e,null===lu)var r=!1;else{if(e=lu,lu=null,uu=0,0!=(6&$l))throw Error(y(331));var i=$l;for($l|=4,hl=e.current;null!==hl;){var o=hl,s=o.child;if(0!=(16&hl.flags)){var a=o.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(hl=u;null!==hl;){var c=hl;switch(c.tag){case 0:case 11:case 15:gl(8,c,o)}var d=c.child;if(null!==d)d.return=c,hl=d;else for(;null!==hl;){var h=(c=hl).sibling,f=c.return;if(bl(c),c===u){hl=null;break}if(null!==h){h.return=f,hl=h;break}hl=f}}}var p=o.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}hl=o}}if(0!=(2064&o.subtreeFlags)&&null!==s)s.return=o,hl=s;else e:for(;null!==hl;){if(0!=(2048&(o=hl).flags))switch(o.tag){case 0:case 11:case 15:gl(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,hl=v;break e}hl=o.return}}var b=e.current;for(hl=b;null!==hl;){var w=(s=hl).child;if(0!=(2064&s.subtreeFlags)&&null!==w)w.return=s,hl=w;else e:for(s=b;null!==hl;){if(0!=(2048&(a=hl).flags))try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(e){Fu(a,a.return,e)}if(a===s){hl=null;break e}var S=a.sibling;if(null!==S){S.return=a.return,hl=S;break e}hl=a.return}}if($l=i,to(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{At=n,Vl.transition=t}}return!1}function ju(e,t,n){e=Go(e,t=Ca(0,t=ka(n,t),1),1),t=pu(),null!==e&&(Nt(e,1,t),vu(e,t))}function Fu(e,t,n){if(3===e.tag)ju(e,e,n);else for(;null!==t;){if(3===t.tag){ju(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===su||!su.has(r))){t=Go(t,e=Ia(t,e=ka(n,e),1),1),e=pu(),null!==t&&(Nt(t,1,e),vu(t,e));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pu(),e.pingedLanes|=e.suspendedLanes&n,Bl===e&&(ql&n)===n&&(4===Gl||3===Gl&&(130023424&ql)===ql&&500>ct()-tu?_u(e,0):Jl|=n),vu(e,t)}function zu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=kt,0==(130023424&(kt<<=1))&&(kt=4194304)));var n=pu();null!==(e=Bo(e,t))&&(Nt(e,t,n),vu(e,n))}function Vu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zu(e,n)}function $u(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),zu(e,n)}function Bu(e,t){return st(e,t)}function Hu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qu(e,t,n,r){return new Hu(e,t,n,r)}function Wu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ku(e,t){var n=e.alternate;return null===n?((n=qu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gu(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Wu(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case M:return Qu(n.children,i,o,t);case j:s=8,i|=8;break;case F:return(e=qu(12,n,t,2|i)).elementType=F,e.lanes=o,e;case $:return(e=qu(13,n,t,i)).elementType=$,e.lanes=o,e;case B:return(e=qu(19,n,t,i)).elementType=B,e.lanes=o,e;case W:return Xu(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case U:s=10;break e;case z:s=9;break e;case V:s=11;break e;case H:s=14;break e;case q:s=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=qu(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Qu(e,t,n,r){return(e=qu(7,e,r,t)).lanes=n,e}function Xu(e,t,n,r){return(e=qu(22,e,r,t)).elementType=W,e.lanes=n,e.stateNode={isHidden:!1},e}function Yu(e,t,n){return(e=qu(6,e,null,t)).lanes=n,e}function Ju(e,t,n){return(t=qu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ot(0),this.expirationTimes=Ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,o,s,a,l){return e=new Zu(e,t,n,a,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=qu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qo(o),e}function tc(e){if(!e)return zi;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(qi(n))return Gi(e,n,t)}return t}function nc(e,t,n,r,i,o,s,a,l){return(e=ec(n,r,!0,e,0,o,0,a,l)).context=tc(null),n=e.current,(o=Ko(r=pu(),i=mu(n))).callback=null!=t?t:null,Go(n,o,i),e.current.lanes=i,Nt(e,i,r),vu(e,r),e}function rc(e,t,n,r){var i=t.current,o=pu(),s=mu(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ko(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Go(i,t,s))&&(gu(e,i,s,o),Qo(e,i,s)),s}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function oc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function sc(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}jl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||$i.current)Ra=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ra=!1,function(e,t,n){switch(t.tag){case 3:Ba(t),Co();break;case 5:bs(t);break;case 1:qi(t.type)&&Qi(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ui(Po,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ui(Ss,1&Ss.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ya(e,t,n):(Ui(Ss,1&Ss.current),null!==(e=il(e,t,n))?e.sibling:null);Ui(Ss,1&Ss.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ui(Ss,Ss.current),r)break;return null;case 22:case 23:return t.lanes=0,Fa(e,t,n)}return il(e,t,n)}(e,t,n);Ra=0!=(131072&e.flags)}else Ra=!1,yo&&0!=(1048576&t.flags)&&fo(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=Hi(t,Vi.current);Fo(t,n),i=js(null,t,r,e,i,n);var o=Fs();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qi(r)?(o=!0,Qi(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,qo(t),i.updater=ts,t.stateNode=i,i._reactInternals=t,os(t,r,e,n),t=$a(null,t,r,!0,o,n)):(t.tag=0,yo&&o&&po(t),Da(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Wu(e)?1:0;if(null!=e){if((e=e.$$typeof)===V)return 11;if(e===H)return 14}return 2}(r),e=No(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,No(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:No(r,i),n);case 1:return r=t.type,i=t.pendingProps,Va(e,t,r,i=t.elementType===r?i:No(r,i),n);case 3:e:{if(Ba(t),null===e)throw Error(y(387));r=t.pendingProps,i=(o=t.memoizedState).element,Wo(e,t),Yo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ha(e,t,r,n,i=ka(Error(y(423)),t));break e}if(r!==i){t=Ha(e,t,r,n,i=ka(Error(y(424)),t));break e}for(vo=Ei(t.stateNode.containerInfo.firstChild),go=t,yo=!0,bo=null,n=ds(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Co(),r===i){t=il(e,t,n);break e}Da(e,t,r,n)}t=t.child}return t;case 5:return bs(t),null===e&&ko(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,mi(r,i)?s=null:null!==o&&mi(r,o)&&(t.flags|=32),Ua(e,t),Da(e,t,s,n),t.child;case 6:return null===e&&ko(t),null;case 13:return Ya(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=cs(t,null,r,n):Da(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,La(e,t,r,i=t.elementType===r?i:No(r,i),n);case 7:return Da(e,t,t.pendingProps,n),t.child;case 8:case 12:return Da(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ui(Po,r._currentValue),r._currentValue=s,null!==o)if(wr(o.value,s)){if(o.children===i.children&&!$i.current){t=il(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var a=o.dependencies;if(null!==a){s=o.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=Ko(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),jo(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(y(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),jo(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}Da(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fo(t,n),r=r(i=Uo(i)),t.flags|=1,Da(e,t,r,n),t.child;case 14:return i=No(r=t.type,t.pendingProps),Ma(e,t,r,i=No(r.type,i),n);case 15:return ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:No(r,i),rl(e,t),t.tag=1,qi(r)?(e=!0,Qi(t)):e=!1,Fo(t,n),rs(t,r,i),os(t,r,i,n),$a(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return Fa(e,t,n)}throw Error(y(156,t.tag))};var ac="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function hc(){}function fc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if("function"==typeof i){var a=i;i=function(){var e=ic(s);a.call(e)}}rc(t,s,e,i)}else s=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=ic(s);o.call(e)}}var s=nc(t,r,e,0,null,!1,0,"",hc);return e._reactRootContainer=s,e[Ci]=s.current,ti(8===e.nodeType?e.parentNode:e),xu(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=ic(l);a.call(e)}}var l=ec(e,0,!1,null,0,!1,0,"",hc);return e._reactRootContainer=l,e[Ci]=l.current,ti(8===e.nodeType?e.parentNode:e),xu((function(){rc(t,l,n,r)})),l}(n,t,e,i,r);return ic(s)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;xu((function(){rc(null,e,null,null)})),t[Ci]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&0!==t&&t<Wt[n].priority;n++);Wt.splice(n,0,e),0===n&&Xt(e)}},Dt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xt(t.pendingLanes);0!==n&&(Pt(t,1|n),vu(t,ct()),0==(6&$l)&&(nu=ct()+500,to()))}break;case 13:xu((function(){var t=Bo(e,1);if(null!==t){var n=pu();gu(t,e,1,n)}})),sc(e,1)}},Lt=function(e){if(13===e.tag){var t=Bo(e,134217728);if(null!==t)gu(t,e,134217728,pu());sc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mu(e),n=Bo(e,t);if(null!==n)gu(n,e,t,pu());sc(e,t)}},jt=function(){return At},Ft=function(e,t){var n=At;try{return At=e,t()}finally{At=n}},Le=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(y(90));se(r),de(r,i)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Ve=ku,$e=xu;var pc={usingClientEntryPoint:!1,Events:[Ai,Ri,Di,Ue,ze,ku]},mc={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{vt=vc.inject(gc),yt=vc}catch(ke){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(y(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:L,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},s=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",i=ac;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,ti(8===e.nodeType?e.parentNode:e),new lc(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return xu(e)},u=function(e,t,n){if(!dc(t))throw Error(y(200));return fc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=ac;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,o,s),e[Ci]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uc(t)},d=function(e,t,n){if(!dc(t))throw Error(y(200));return fc(null,e,t,!1,n)},h=function(e){if(!dc(e))throw Error(y(40));return!!e._reactRootContainer&&(xu((function(){fc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ci]=null}))})),!0)},f=ku,p=function(e,t,n,r){if(!dc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return fc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),o.register("fO90s",(function(e,t){e.exports=o("gcnCG")})),o.register("gcnCG",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S;function E(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function k(e){return 0===e.length?null:e[0]}function x(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,a=e[s],l=s+1,u=e[l];if(0>T(a,n))l<i&&0>T(u,a)?(e[r]=u,e[l]=n,r=l):(e[r]=a,e[s]=n,r=s);else{if(!(l<i&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_ImmediatePriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_LowPriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_NormalPriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_Profiling",(()=>l),(e=>l=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>u),(e=>u=e)),e(t.exports,"unstable_cancelCallback",(()=>c),(e=>c=e)),e(t.exports,"unstable_continueExecution",(()=>d),(e=>d=e)),e(t.exports,"unstable_forceFrameRate",(()=>h),(e=>h=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>f),(e=>f=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>p),(e=>p=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>g),(e=>g=e)),e(t.exports,"unstable_requestPaint",(()=>v),(e=>v=e)),e(t.exports,"unstable_runWithPriority",(()=>y),(e=>y=e)),e(t.exports,"unstable_scheduleCallback",(()=>b),(e=>b=e)),e(t.exports,"unstable_shouldYield",(()=>w),(e=>w=e)),e(t.exports,"unstable_wrapCallback",(()=>S),(e=>S=e)),"object"==typeof performance&&"function"==typeof performance.now){var _=performance;r=function(){return _.now()}}else{var C=Date,I=C.now();r=function(){return C.now()-I}}var O=[],N=[],P=1,A=null,R=3,D=!1,L=!1,M=!1,j="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function z(e){for(var t=k(N);null!==t;){if(null===t.callback)x(N);else{if(!(t.startTime<=e))break;x(N),t.sortIndex=t.expirationTime,E(O,t)}t=k(N)}}function V(e){if(M=!1,z(e),!L)if(null!==k(O))L=!0,Z($);else{var t=k(N);null!==t&&ee(V,t.startTime-e)}}function $(e,t){L=!1,M&&(M=!1,F(W),W=-1),D=!0;var n=R;try{for(z(t),A=k(O);null!==A&&(!(A.expirationTime>t)||e&&!Q());){var i=A.callback;if("function"==typeof i){A.callback=null,R=A.priorityLevel;var o=i(A.expirationTime<=t);t=r(),"function"==typeof o?A.callback=o:A===k(O)&&x(O),z(t)}else x(O);A=k(O)}if(null!==A)var s=!0;else{var a=k(N);null!==a&&ee(V,a.startTime-t),s=!1}return s}finally{A=null,R=n,D=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B,H=!1,q=null,W=-1,K=5,G=-1;function Q(){return!(r()-G<K)}function X(){if(null!==q){var e=r();G=e;var t=!0;try{t=q(!0,e)}finally{t?B():(H=!1,q=null)}}else H=!1}if("function"==typeof U)B=function(){U(X)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=X,B=function(){J.postMessage(null)}}else B=function(){j(X,0)};function Z(e){q=e,H||(H=!0,B())}function ee(e,t){W=j((function(){e(r())}),t)}i=5,o=1,s=4,a=3,l=null,u=2,c=function(e){e.callback=null},d=function(){L||D||(L=!0,Z($))},h=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},f=function(){return R},p=function(){return k(O)},m=function(e){switch(R){case 1:case 2:case 3:var t=3;break;default:t=R}var n=R;R=t;try{return e()}finally{R=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=R;R=e;try{return t()}finally{R=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:P++,callback:t,priorityLevel:e,startTime:n,expirationTime:o=n+o,sortIndex:-1},n>i?(e.sortIndex=n,E(N,e),null===k(O)&&e===k(N)&&(M?(F(W),W=-1):M=!0,ee(V,n-i))):(e.sortIndex=o,E(O,e),L||D||(L=!0,Z($))),e},w=Q,S=function(e){var t=R;return function(){var n=R;R=t;try{return e.apply(this,arguments)}finally{R=n}}}})),o.register("30Ie1",(function(t,n){
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r;e(t.exports,"useSyncExternalStore",(()=>r),(e=>r=e));var i=o("acw62");var s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useState,l=i.useEffect,u=i.useLayoutEffect,c=i.useDebugValue;function d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!s(e,n)}catch(e){return!0}}var h="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return u((function(){i.value=n,i.getSnapshot=t,d(i)&&o({inst:i})}),[e,n,t]),l((function(){return d(i)&&o({inst:i}),e((function(){d(i)&&o({inst:i})}))}),[e]),c(n),n};r=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:h})),o.register("6VZtt",(function(t,n){
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r;e(t.exports,"useSyncExternalStoreWithSelector",(()=>r),(e=>r=e));var i=o("acw62"),s=o("hfliI");var a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=s.useSyncExternalStore,u=i.useRef,c=i.useEffect,d=i.useMemo,h=i.useDebugValue;r=function(e,t,n,r,i){var o=u(null);if(null===o.current){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=d((function(){function e(e){if(!u){if(u=!0,o=e,e=r(e),void 0!==i&&s.hasValue){var t=s.value;if(i(t,e))return l=t}return l=e}if(t=l,a(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(o=e,l=n)}var o,l,u=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,i]);var f=l(e,o[0],o[1]);return c((function(){s.hasValue=!0,s.value=f}),[f]),h(f),f}})),o.register("hfliI",(function(e,t){e.exports=o("30Ie1")})),o.register("dNL7g",(function(t,n){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N;e(t.exports,"AsyncMode",(()=>r),(e=>r=e)),e(t.exports,"ConcurrentMode",(()=>i),(e=>i=e)),e(t.exports,"ContextConsumer",(()=>o),(e=>o=e)),e(t.exports,"ContextProvider",(()=>s),(e=>s=e)),e(t.exports,"Element",(()=>a),(e=>a=e)),e(t.exports,"ForwardRef",(()=>l),(e=>l=e)),e(t.exports,"Fragment",(()=>u),(e=>u=e)),e(t.exports,"Lazy",(()=>c),(e=>c=e)),e(t.exports,"Memo",(()=>d),(e=>d=e)),e(t.exports,"Portal",(()=>h),(e=>h=e)),e(t.exports,"Profiler",(()=>f),(e=>f=e)),e(t.exports,"StrictMode",(()=>p),(e=>p=e)),e(t.exports,"Suspense",(()=>m),(e=>m=e)),e(t.exports,"isAsyncMode",(()=>g),(e=>g=e)),e(t.exports,"isConcurrentMode",(()=>v),(e=>v=e)),e(t.exports,"isContextConsumer",(()=>y),(e=>y=e)),e(t.exports,"isContextProvider",(()=>b),(e=>b=e)),e(t.exports,"isElement",(()=>w),(e=>w=e)),e(t.exports,"isForwardRef",(()=>S),(e=>S=e)),e(t.exports,"isFragment",(()=>E),(e=>E=e)),e(t.exports,"isLazy",(()=>k),(e=>k=e)),e(t.exports,"isMemo",(()=>x),(e=>x=e)),e(t.exports,"isPortal",(()=>T),(e=>T=e)),e(t.exports,"isProfiler",(()=>_),(e=>_=e)),e(t.exports,"isStrictMode",(()=>C),(e=>C=e)),e(t.exports,"isSuspense",(()=>I),(e=>I=e)),e(t.exports,"isValidElementType",(()=>O),(e=>O=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var P="function"==typeof Symbol&&Symbol.for,A=P?Symbol.for("react.element"):60103,R=P?Symbol.for("react.portal"):60106,D=P?Symbol.for("react.fragment"):60107,L=P?Symbol.for("react.strict_mode"):60108,M=P?Symbol.for("react.profiler"):60114,j=P?Symbol.for("react.provider"):60109,F=P?Symbol.for("react.context"):60110,U=P?Symbol.for("react.async_mode"):60111,z=P?Symbol.for("react.concurrent_mode"):60111,V=P?Symbol.for("react.forward_ref"):60112,$=P?Symbol.for("react.suspense"):60113,B=P?Symbol.for("react.suspense_list"):60120,H=P?Symbol.for("react.memo"):60115,q=P?Symbol.for("react.lazy"):60116,W=P?Symbol.for("react.block"):60121,K=P?Symbol.for("react.fundamental"):60117,G=P?Symbol.for("react.responder"):60118,Q=P?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case U:case z:case D:case M:case L:case $:return e;default:switch(e=e&&e.$$typeof){case F:case V:case q:case H:case j:return e;default:return t}}case R:return t}}}function Y(e){return X(e)===z}r=U,i=z,o=F,s=j,a=A,l=V,u=D,c=q,d=H,h=R,f=M,p=L,m=$,g=function(e){return Y(e)||X(e)===U},v=Y,y=function(e){return X(e)===F},b=function(e){return X(e)===j},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},S=function(e){return X(e)===V},E=function(e){return X(e)===D},k=function(e){return X(e)===q},x=function(e){return X(e)===H},T=function(e){return X(e)===R},_=function(e){return X(e)===M},C=function(e){return X(e)===L},I=function(e){return X(e)===$},O=function(e){return"string"==typeof e||"function"==typeof e||e===D||e===z||e===M||e===L||e===$||e===B||"object"==typeof e&&null!==e&&(e.$$typeof===q||e.$$typeof===H||e.$$typeof===j||e.$$typeof===F||e.$$typeof===V||e.$$typeof===K||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===W)},N=X})),o.register("9cCWX",(function(t,n){
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N;e(t.exports,"ContextConsumer",(()=>r),(e=>r=e)),e(t.exports,"ContextProvider",(()=>i),(e=>i=e)),e(t.exports,"Element",(()=>o),(e=>o=e)),e(t.exports,"ForwardRef",(()=>s),(e=>s=e)),e(t.exports,"Fragment",(()=>a),(e=>a=e)),e(t.exports,"Lazy",(()=>l),(e=>l=e)),e(t.exports,"Memo",(()=>u),(e=>u=e)),e(t.exports,"Portal",(()=>c),(e=>c=e)),e(t.exports,"Profiler",(()=>d),(e=>d=e)),e(t.exports,"StrictMode",(()=>h),(e=>h=e)),e(t.exports,"Suspense",(()=>f),(e=>f=e)),e(t.exports,"SuspenseList",(()=>p),(e=>p=e)),e(t.exports,"isAsyncMode",(()=>m),(e=>m=e)),e(t.exports,"isConcurrentMode",(()=>g),(e=>g=e)),e(t.exports,"isContextConsumer",(()=>v),(e=>v=e)),e(t.exports,"isContextProvider",(()=>y),(e=>y=e)),e(t.exports,"isElement",(()=>b),(e=>b=e)),e(t.exports,"isForwardRef",(()=>w),(e=>w=e)),e(t.exports,"isFragment",(()=>S),(e=>S=e)),e(t.exports,"isLazy",(()=>E),(e=>E=e)),e(t.exports,"isMemo",(()=>k),(e=>k=e)),e(t.exports,"isPortal",(()=>x),(e=>x=e)),e(t.exports,"isProfiler",(()=>T),(e=>T=e)),e(t.exports,"isStrictMode",(()=>_),(e=>_=e)),e(t.exports,"isSuspense",(()=>C),(e=>C=e)),e(t.exports,"isSuspenseList",(()=>I),(e=>I=e)),e(t.exports,"isValidElementType",(()=>O),(e=>O=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var P,A=Symbol.for("react.element"),R=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),F=Symbol.for("react.context"),U=Symbol.for("react.server_context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen");function W(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case D:case M:case L:case V:case $:return e;default:switch(e=e&&e.$$typeof){case U:case F:case z:case H:case B:case j:return e;default:return t}}case R:return t}}}P=Symbol.for("react.module.reference"),r=F,i=j,o=A,s=z,a=D,l=H,u=B,c=R,d=M,h=L,f=V,p=$,m=function(){return!1},g=function(){return!1},v=function(e){return W(e)===F},y=function(e){return W(e)===j},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},w=function(e){return W(e)===z},S=function(e){return W(e)===D},E=function(e){return W(e)===H},k=function(e){return W(e)===B},x=function(e){return W(e)===R},T=function(e){return W(e)===M},_=function(e){return W(e)===L},C=function(e){return W(e)===V},I=function(e){return W(e)===$},O=function(e){return"string"==typeof e||"function"==typeof e||e===D||e===M||e===L||e===V||e===$||e===q||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===B||e.$$typeof===j||e.$$typeof===F||e.$$typeof===z||e.$$typeof===P||void 0!==e.getModuleId)},N=W})),o.register("99b6d",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=u(o("acw62")),i=o("inpnQ"),s=u(o("aqP1M")),a=u(o("bt3o5")),l=o("2y81T");function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,r)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=(0,l.canUseDOM)()&&o("aqoFQ"),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,o,u=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),y(g(t=u.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),y(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),y(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),y(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),y(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),y(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){b.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var i;i=0===r?(0,s.default)({minWidth:0,maxWidth:n}):(0,s.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,l.canUseDOM)()&&e.media(i,(function(){e.setState({breakpoint:n})}))}));var n=(0,s.default)({minWidth:t.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){b.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":h(h(h({},a.default),this.props),t[0].settings):h(h({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=r.default.Children.toArray(this.props.children);o=o.filter((function(e){return"string"==typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var s=[],l=null,u=0;u<o.length;u+=e.rows*e.slidesPerRow){for(var d=[],f=u;f<u+e.rows*e.slidesPerRow;f+=e.slidesPerRow){for(var p=[],m=f;m<f+e.slidesPerRow&&(e.variableWidth&&o[m].props.style&&(l=o[m].props.style.width),!(m>=o.length));m+=1)p.push(r.default.cloneElement(o[m],{key:100*u+10*f+m,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));d.push(r.default.createElement("div",{key:10*u+f},p))}e.variableWidth?s.push(r.default.createElement("div",{key:u,style:{width:l}},d)):s.push(r.default.createElement("div",{key:u},d))}if("unslick"===e){var g="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:g},o)}return s.length<=e.slidesToShow&&(e.unslick=!0),r.default.createElement(i.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},e),s)}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component);e.exports.default=w})),o.register("inpnQ",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.InnerSlider=void 0;var n=h(o("acw62")),r=h(o("9jP9B")),i=h(o("lwfqC")),s=h(o("8g1PZ")),a=o("2y81T"),l=o("7yZIu"),u=o("5dzCO"),c=o("gught"),d=h(o("bEEfE"));function h(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(this,n)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(E,e);var t,o,h,g=w(E);function E(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),k(S(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),k(S(t),"trackRefHandler",(function(e){return t.track=e})),k(S(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,a.getHeight)(e)+"px"}})),k(S(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,a.getOnDemandLazySlides)(v(v({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=v({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),k(S(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),k(S(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var r=(0,a.getOnDemandLazySlides)(v(v({},t.props),t.state));r.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(r)}})),t.props.onLazyLoad&&t.props.onLazyLoad(r))}t.adaptHeight();var i=v(v({listRef:t.list,trackRef:t.track},t.props),t.state),o=t.didPropsChange(e);o&&t.updateState(i,o,(function(){t.state.currentSlide>=n.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:n.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),k(S(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,i.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),k(S(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=v(v({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),k(S(t),"updateState",(function(e,r,i){var o=(0,a.initializedState)(e);e=v(v(v({},e),o),{},{slideIndex:o.currentSlide});var s=(0,a.getTrackLeft)(e);e=v(v({},e),{},{left:s});var l=(0,a.getTrackCSS)(e);(r||n.default.Children.count(t.props.children)!==n.default.Children.count(e.children))&&(o.trackStyle=l),t.setState(o,i)})),k(S(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,r=0,i=[],o=(0,a.getPreClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length})),s=(0,a.getPostClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){i.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<o;l++)r+=i[i.length-1-l],e+=i[i.length-1-l];for(var u=0;u<s;u++)e+=i[u];for(var c=0;c<t.state.currentSlide;c++)r+=i[c];var d={width:e+"px",left:-r+"px"};if(t.props.centerMode){var h="".concat(i[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(h,") / 2 ) ")}return{trackStyle:d}}var f=n.default.Children.count(t.props.children),p=v(v(v({},t.props),t.state),{},{slideCount:f}),m=(0,a.getPreClones)(p)+(0,a.getPostClones)(p)+f,g=100/t.props.slidesToShow*m,y=100/m,b=-y*((0,a.getPreClones)(p)+t.state.currentSlide)*g/100;return t.props.centerMode&&(b+=(100-y*g/100)/2),{slideWidth:y+"%",trackStyle:{width:g+"%",left:b+"%"}}})),k(S(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(){o(),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),k(S(t),"progressiveLazyLoad",(function(){for(var e=[],n=v(v({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,a.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,a.getPreClones)(n);i--)if(t.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),k(S(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,s=r.onLazyLoad,l=r.speed,u=r.afterChange,c=t.state.currentSlide,d=(0,a.slideHandler)(v(v(v({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),h=d.state,f=d.nextState;if(h){o&&o(c,h.currentSlide);var p=h.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));s&&p.length>0&&s(p),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),u&&u(c),delete t.animationEndCallback),t.setState(h,(function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=m(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),u&&u(h.currentSlide),delete t.animationEndCallback}))}),l))}))}})),k(S(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=v(v({},t.props),t.state),i=(0,a.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}})),k(S(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),k(S(t),"keyHandler",(function(e){var n=(0,a.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),k(S(t),"selectHandler",(function(e){t.changeSlide(e)})),k(S(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),k(S(t),"enableBodyScroll",(function(){window.ontouchmove=null})),k(S(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,a.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),k(S(t),"swipeMove",(function(e){var n=(0,a.swipeMove)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),k(S(t),"swipeEnd",(function(e){var n=(0,a.swipeEnd)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),k(S(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),k(S(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),k(S(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),k(S(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),k(S(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,a.canGoNext)(v(v({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),k(S(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),k(S(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),k(S(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),k(S(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),k(S(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),k(S(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),k(S(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),k(S(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),k(S(t),"render",(function(){var e,r,i,o=(0,s.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=v(v({},t.props),t.state),h=(0,a.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(h=v(v({},h),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,a.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;m=v(v({},m),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=n.default.createElement(u.Dots,m)}var y=(0,a.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=t.changeSlide,t.props.arrows&&(r=n.default.createElement(c.PrevArrow,y),i=n.default.createElement(c.NextArrow,y));var b=null;t.props.vertical&&(b={height:t.state.listHeight});var w=null;!1===t.props.vertical?!0===t.props.centerMode&&(w={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(w={padding:t.props.centerPadding+" 0px"});var S=v(v({},b),w),E=t.props.touchMove,k={className:"slick-list",style:S,onClick:t.clickHandler,onMouseDown:E?t.swipeStart:null,onMouseMove:t.state.dragging&&E?t.swipeMove:null,onMouseUp:E?t.swipeEnd:null,onMouseLeave:t.state.dragging&&E?t.swipeEnd:null,onTouchStart:E?t.swipeStart:null,onTouchMove:t.state.dragging&&E?t.swipeMove:null,onTouchEnd:E?t.touchEnd:null,onTouchCancel:t.state.dragging&&E?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},x={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(k={className:"slick-list"},x={className:o}),n.default.createElement("div",x,t.props.unslick?"":r,n.default.createElement("div",p({ref:t.listRefHandler},k),n.default.createElement(l.Track,p({ref:t.trackRefHandler},h),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=v(v({},r.default),{},{currentSlide:t.props.initialSlide,slideCount:n.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var o=t.ssrInit();return t.state=v(v({},t.state),o),t}return t=E,(o=[{key:"didPropsChange",value:function(e){for(var t=!1,r=0,i=Object.keys(this.props);r<i.length;r++){var o=i[r];if(!e.hasOwnProperty(o)){t=!0;break}if("object"!==f(e[o])&&"function"!=typeof e[o]&&e[o]!==this.props[o]){t=!0;break}}return t||n.default.Children.count(this.props.children)!==n.default.Children.count(e.children)}}])&&y(t.prototype,o),h&&y(t,h),Object.defineProperty(t,"prototype",{writable:!1}),E}(n.default.Component);e.exports.InnerSlider=x})),o.register("9jP9B",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.exports.default=n})),o.register("lwfqC",(function(e,n){var r="Expected a function",i=NaN,o="[object Symbol]",s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,f=d||h||Function("return this")(),p=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return f.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):a.test(e)?i:+e}e.exports=function(e,t,n){var i,o,s,a,l,u,c=0,d=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=s}function S(){var e=v();if(w(e))return E(e);l=setTimeout(S,function(e){var n=t-(e-u);return h?g(n,s-(e-c)):n}(e))}function E(e){return l=void 0,f&&i?p(e):(i=o=void 0,a)}function k(){var e=v(),n=w(e);if(i=arguments,o=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(S,t),d?p(e):a}(u);if(h)return l=setTimeout(S,t),p(u)}return void 0===l&&(l=setTimeout(S,t)),a}return t=b(t)||0,y(n)&&(d=!!n.leading,s=(h="maxWait"in n)?m(b(n.maxWait)||0,t):s,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=o=l=void 0},k.flush=function(){return void 0===l?a:E(v())},k}})),o.register("8g1PZ",(function(e,t){
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&e.push(s)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var a in i)t.call(i,a)&&i[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return n})):window.classNames=n}()})),o.register("2y81T",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.checkSpecKeys=e.exports.checkNavigable=e.exports.changeSlide=e.exports.canUseDOM=e.exports.canGoNext=void 0,e.exports.clamp=l,e.exports.swipeStart=e.exports.swipeMove=e.exports.swipeEnd=e.exports.slidesOnRight=e.exports.slidesOnLeft=e.exports.slideHandler=e.exports.siblingDirection=e.exports.safePreventDefault=e.exports.lazyStartIndex=e.exports.lazySlidesOnRight=e.exports.lazySlidesOnLeft=e.exports.lazyEndIndex=e.exports.keyHandler=e.exports.initializedState=e.exports.getWidth=e.exports.getTrackLeft=e.exports.getTrackCSS=e.exports.getTrackAnimateCSS=e.exports.getTotalSlides=e.exports.getSwipeDirection=e.exports.getSlideCount=e.exports.getRequiredLazySlides=e.exports.getPreClones=e.exports.getPostClones=e.exports.getOnDemandLazySlides=e.exports.getNavigableIndexes=e.exports.getHeight=e.exports.extractObject=void 0;var n,r=(n=o("acw62"))&&n.__esModule?n:{default:n};function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return Math.max(t,Math.min(e,n))}var u=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()};e.exports.safePreventDefault=u;var c=function(e){for(var t=[],n=d(e),r=h(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t};e.exports.getOnDemandLazySlides=c;e.exports.getRequiredLazySlides=function(e){for(var t=[],n=d(e),r=h(e),i=n;i<r;i++)t.push(i);return t};var d=function(e){return e.currentSlide-f(e)};e.exports.lazyStartIndex=d;var h=function(e){return e.currentSlide+p(e)};e.exports.lazyEndIndex=h;var f=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};e.exports.lazySlidesOnLeft=f;var p=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};e.exports.lazySlidesOnRight=p;var m=function(e){return e&&e.offsetWidth||0};e.exports.getWidth=m;var g=function(e){return e&&e.offsetHeight||0};e.exports.getHeight=g;var v=function(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(i=Math.round(180*r/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":!0===o?i>=35&&i<=135?"up":"down":"vertical"};e.exports.getSwipeDirection=v;var y=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t};e.exports.canGoNext=y;e.exports.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n};e.exports.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,o=Math.ceil(m(i)),a=e.trackRef&&e.trackRef.node,l=Math.ceil(m(a));if(e.vertical)t=o;else{var u=e.centerMode&&2*parseInt(e.centerPadding);"string"==typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(u*=o/100),t=Math.ceil((o-u)/e.slidesToShow)}var d=i&&g(i.querySelector('[data-index="0"]')),h=d*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var p=e.lazyLoadedList||[],v=c(s(s({},e),{},{currentSlide:f,lazyLoadedList:p})),y={slideCount:n,slideWidth:t,listWidth:o,trackWidth:l,currentSlide:f,slideHeight:d,listHeight:h,lazyLoadedList:p=p.concat(v)};return null===e.autoplaying&&e.autoplay&&(y.autoplaying="playing"),y};e.exports.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,u=e.lazyLoad,d=e.currentSlide,h=e.centerMode,f=e.slidesToScroll,p=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var v,b,w,S=o,E={},_={},C=i?o:l(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?S=o+a:o>=a&&(S=o-a),u&&g.indexOf(S)<0&&(g=g.concat(S)),E={animating:!0,currentSlide:S,lazyLoadedList:g,targetSlide:S},_={animating:!1,targetSlide:S}}else v=S,S<0?(v=S+a,i?a%f!=0&&(v=a-a%f):v=0):!y(e)&&S>d?S=v=d:h&&S>=a?(S=i?a:a-1,v=i?0:a-1):S>=a&&(v=S-a,i?a%f!=0&&(v=0):v=a-p),!i&&S+p>=a&&(v=a-p),b=T(s(s({},e),{},{slideIndex:S})),w=T(s(s({},e),{},{slideIndex:v})),i||(b===w&&(S=v),b=w),u&&(g=g.concat(c(s(s({},e),{},{currentSlide:S})))),m?(E={animating:!0,currentSlide:v,trackStyle:x(s(s({},e),{},{left:b})),lazyLoadedList:g,targetSlide:C},_={animating:!1,currentSlide:v,trackStyle:k(s(s({},e),{},{left:w})),swipeLeft:null,targetSlide:C}):E={currentSlide:v,trackStyle:k(s(s({},e),{},{left:w})),lazyLoadedList:g,targetSlide:C};return{state:E,nextState:_}};e.exports.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,l=e.slidesToShow,u=e.slideCount,c=e.currentSlide,d=e.targetSlide,h=e.lazyLoad,f=e.infinite;if(n=u%a!=0?0:(u-c)%a,"previous"===t.message)o=c-(i=0===n?a:l-n),h&&!f&&(o=-1===(r=c-i)?u-1:r),f||(o=d-a);else if("next"===t.message)o=c+(i=0===n?a:n),h&&!f&&(o=(c+a)%u+n),f||(o=d+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,f){var p=O(s(s({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===p?o-=u:o<t.currentSlide&&"right"===p&&(o+=u)}}else"index"===t.message&&(o=Number(t.index));return o};e.exports.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""};e.exports.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&u(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};e.exports.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,l=t.rtl,c=t.currentSlide,d=t.edgeFriction,h=t.edgeDragged,f=t.onEdge,p=t.swiped,m=t.swiping,g=t.slideCount,b=t.slidesToScroll,w=t.infinite,S=t.touchObject,E=t.swipeEvent,x=t.listHeight,_=t.listWidth;if(!n){if(r)return u(e);i&&o&&a&&u(e);var C,I={},O=T(t);S.curX=e.touches?e.touches[0].pageX:e.clientX,S.curY=e.touches?e.touches[0].pageY:e.clientY,S.swipeLength=Math.round(Math.sqrt(Math.pow(S.curX-S.startX,2)));var N=Math.round(Math.sqrt(Math.pow(S.curY-S.startY,2)));if(!a&&!m&&N>10)return{scrolling:!0};a&&(S.swipeLength=N);var P=(l?-1:1)*(S.curX>S.startX?1:-1);a&&(P=S.curY>S.startY?1:-1);var A=Math.ceil(g/b),R=v(t.touchObject,a),D=S.swipeLength;return w||(0===c&&("right"===R||"down"===R)||c+1>=A&&("left"===R||"up"===R)||!y(t)&&("left"===R||"up"===R))&&(D=S.swipeLength*d,!1===h&&f&&(f(R),I.edgeDragged=!0)),!p&&E&&(E(R),I.swiped=!0),C=i?O+D*(x/_)*P:l?O-D*P:O+D*P,a&&(C=O+D*P),I=s(s({},I),{},{touchObject:S,swipeLeft:C,trackStyle:k(s(s({},t),{},{left:C}))}),Math.abs(S.curX-S.startX)<.8*Math.abs(S.curY-S.startY)?I:(S.swipeLength>10&&(I.swiping=!0,u(e)),I)}};e.exports.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,l=t.verticalSwiping,c=t.listHeight,d=t.swipeToSlide,h=t.scrolling,f=t.onSwipe,p=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&u(e),{};var y=l?c/a:o/a,b=v(i,l),E={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h)return E;if(!i.swipeLength)return E;if(i.swipeLength>y){var k,_;u(e),f&&f(b);var C=g?m:p;switch(b){case"left":case"up":_=C+S(t),k=d?w(t,_):_,E.currentDirection=0;break;case"right":case"down":_=C-S(t),k=d?w(t,_):_,E.currentDirection=1;break;default:k=C}E.triggerSlideHandler=k}else{var I=T(t);E.trackStyle=x(s(s({},t),{},{left:I}))}return E};var b=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i};e.exports.getNavigableIndexes=b;var w=function(e,t){var n=b(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t};e.exports.checkNavigable=w;var S=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(i).every((function(r){if(e.vertical){if(r.offsetTop+g(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+m(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll};e.exports.getSlideCount=S;var E=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)};e.exports.checkSpecKeys=E;var k=function(e){var t,n;E(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=I(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=s(s({},i),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i};e.exports.getTrackCSS=k;var x=function(e){E(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=k(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t};e.exports.getTrackAnimateCSS=x;var T=function(e){if(e.unslick)return 0;E(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,o=e.infinite,s=e.centerMode,a=e.slideCount,l=e.slidesToShow,u=e.slidesToScroll,c=e.slideWidth,d=e.listWidth,h=e.variableWidth,f=e.slideHeight,p=e.fade,m=e.vertical;if(p||1===e.slideCount)return 0;var g=0;if(o?(g=-_(e),a%u!=0&&r+u>a&&(g=-(r>a?l-(r-a):a%u)),s&&(g+=parseInt(l/2))):(a%u!=0&&r+u>a&&(g=l-a%u),s&&(g=parseInt(l/2))),t=m?r*f*-1+g*f:r*c*-1+g*c,!0===h){var v,y=i&&i.node;if(v=r+_(e),t=(n=y&&y.childNodes[v])?-1*n.offsetLeft:0,!0===s){v=o?r+_(e):r,n=y&&y.children[v],t=0;for(var b=0;b<v;b++)t-=y&&y.children[b]&&y.children[b].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t};e.exports.getTrackLeft=T;var _=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};e.exports.getPreClones=_;var C=function(e){return e.unslick||!e.infinite?0:e.slideCount};e.exports.getPostClones=C;var I=function(e){return 1===e.slideCount?1:_(e)+e.slideCount+C(e)};e.exports.getTotalSlides=I;var O=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+N(e)?"left":"right":e.targetSlide<e.currentSlide-P(e)?"right":"left"};e.exports.siblingDirection=O;var N=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2==0&&(o+=1),o}return r?0:t-1};e.exports.slidesOnRight=N;var P=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!=0||(o+=1),o}return r?t-1:0};e.exports.slidesOnLeft=P;e.exports.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}})),o.register("7yZIu",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Track=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount==0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},y=function(e,t){return e.key||t},b=function(e){var t,n=[],o=[],a=[],l=r.default.Children.count(e.children),u=(0,s.lazyStartIndex)(e),c=(0,s.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,h){var f,p={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?d:r.default.createElement("div",null);var g=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(m(m({},e),{},{index:h})),b=f.props.className||"",w=v(m(m({},e),{},{index:h}));if(n.push(r.default.cloneElement(f,{key:"original"+y(f,h),"data-index":h,className:(0,i.default)(w,b),tabIndex:"-1","aria-hidden":!w["slick-active"],style:m(m({outline:"none"},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}})),e.infinite&&!1===e.fade){var S=l-h;S<=(0,s.getPreClones)(e)&&l!==e.slidesToShow&&((t=-S)>=u&&(f=d),w=v(m(m({},e),{},{index:t})),o.push(r.default.cloneElement(f,{key:"precloned"+y(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,b),"aria-hidden":!w["slick-active"],style:m(m({},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}}))),l!==e.slidesToShow&&((t=l+h)<c&&(f=d),w=v(m(m({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"postcloned"+y(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,b),"aria-hidden":!w["slick-active"],style:m(m({},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}})))}})),e.rtl?o.concat(n,a).reverse():o.concat(n,a)},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,n,i,o=d(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(h(e=o.call.apply(o,[this].concat(n))),"node",null),g(h(e),"handleRef",(function(t){e.node=t})),e}return t=s,(n=[{key:"render",value:function(){var e=b(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&u(t.prototype,n),i&&u(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.PureComponent);e.exports.Track=w})),o.register("5dzCO",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Dots=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(f,e);var t,n,o,a=h(f);function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),a.apply(this,arguments)}return t=f,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,o=t.onMouseOver,a=t.onMouseLeave,c=t.infinite,d=t.slidesToScroll,h=t.slidesToShow,f=t.slideCount,p=t.currentSlide,m=(e={slideCount:f,slidesToScroll:d,slidesToShow:h,infinite:c}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:o,onMouseLeave:a},v=[],y=0;y<m;y++){var b=(y+1)*d-1,w=c?b:(0,s.clamp)(b,0,f-1),S=w-(d-1),E=c?S:(0,s.clamp)(S,0,f-1),k=(0,i.default)({"slick-active":c?p>=E&&p<=w:p===E}),x={message:"dots",index:y,slidesToScroll:d,currentSlide:p},T=this.clickHandler.bind(this,x);v=v.concat(r.default.createElement("li",{key:y,className:k},r.default.cloneElement(this.props.customPaging(y),{onClick:T})))}return r.default.cloneElement(this.props.appendDots(v),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.default.PureComponent);e.exports.Dots=p})),o.register("gught",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.PrevArrow=e.exports.NextArrow=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){m(n,e);var t=v(n);function n(){return h(this,n),t.apply(this,arguments)}return p(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?r.default.cloneElement(this.props.prevArrow,c(c({},n),o)):r.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(r.default.PureComponent);e.exports.PrevArrow=b;var w=function(e){m(n,e);var t=v(n);function n(){return h(this,n),t.apply(this,arguments)}return p(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?r.default.cloneElement(this.props.nextArrow,c(c({},n),o)):r.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(r.default.PureComponent);e.exports.NextArrow=w})),o.register("bEEfE",(function(n,r){var i;i=n.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(()=>I));var o=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),s="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,a=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),l="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},u=2;var c=20,d=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,f=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){l(o)}function a(){var e=Date.now();if(n){if(e-i<u)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return a}(this.refresh.bind(this),c)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){s&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){s&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;d.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),p=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},m=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||a},g=E(0,0,0,0);function v(e){return parseFloat(e)||0}function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+v(e["border-"+n+"-width"])}),0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return g;var r=m(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=v(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=v(r.width),l=v(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=y(r,"left","right")+o),Math.round(l+s)!==n&&(l-=y(r,"top","bottom")+s)),!function(e){return e===m(e).document.documentElement}(e)){var u=Math.round(a+o)-t,c=Math.round(l+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(c)&&(l-=c)}return E(i.left,i.top,a,l)}var w="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof m(e).SVGGraphicsElement}:function(e){return e instanceof m(e).SVGElement&&"function"==typeof e.getBBox};function S(e){return s?w(e)?function(e){var t=e.getBBox();return E(0,0,t.width,t.height)}(e):b(e):g}function E(e,t,n,r){return{x:e,y:t,width:n,height:r}}var k=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=E(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=S(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),x=function(e,t){var n,r,i,o,s,a,l,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),p(l,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),l);p(this,{target:e,contentRect:u})},T=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new o,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new k(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new x(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),_="undefined"!=typeof WeakMap?new WeakMap:new o,C=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new T(t,n,this);_.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){C.prototype[e]=function(){var t;return(t=_.get(this))[e].apply(t,arguments)}}));var I=void 0!==a.ResizeObserver?a.ResizeObserver:C})),o.register("aqP1M",(function(e,t){var n=o("8R6TE"),r=function(e){var t="",r=Object.keys(e);return r.forEach((function(i,o){var s=e[i];(function(e){return/[height|width]$/.test(e)})(i=n(i))&&"number"==typeof s&&(s+="px"),t+=!0===s?i:!1===s?"not "+i:"("+i+": "+s+")",o<r.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,i){t+=r(n),i<e.length-1&&(t+=", ")})),t):r(e)}})),o.register("8R6TE",(function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}})),o.register("bt3o5",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=(n=o("acw62"))&&n.__esModule?n:{default:n};var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return r.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return r.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0};e.exports.default=i})),o.register("aqoFQ",(function(e,t){var n=o("7Jc9x");e.exports=new n})),o.register("7Jc9x",(function(e,t){var n=o("gSUE9"),r=o("aLVeZ"),i=r.each,s=r.isFunction,a=r.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,r){var o=this.queries,l=r&&this.browserIsIncapable;return o[e]||(o[e]=new n(e,l)),s(t)&&(t={match:t}),a(t)||(t=[t]),i(t,(function(t){s(t)&&(t={match:t}),o[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l})),o.register("gSUE9",(function(e,t){var n=o("1QiBY"),r=o("aLVeZ").each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new n(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;r(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";r(this.handlers,(function(t){t[e]()}))}},e.exports=i})),o.register("1QiBY",(function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n})),o.register("aLVeZ",(function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}}));var s={};s=o("1b2ls");var a,l,u={};e(u,"createRoot",(()=>a),(e=>a=e)),e(u,"hydrateRoot",(()=>l),(e=>l=e));var c={};!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),c=o("Xw6Mv"),a=c.createRoot,l=c.hydrateRoot;var d,h=o("hfliI");d=o("6VZtt");let f=function(e){e()};const p=()=>f;var m=o("acw62");m=o("acw62");const g=(0,(m=o("acw62")).createContext)(null);function v(){return(0,m.useContext)(g)}const y=()=>{throw new Error("uSES not initialized!")};let b=y;const w=(e,t)=>e===t;function S(e=g){const t=e===g?v:()=>(0,m.useContext)(e);return function(e,n=w){const{store:r,subscription:i,getServerState:o}=t(),s=b(i.addNestedSub,r.getState,o||r.getState,e,n);return(0,m.useDebugValue)(s),s}}const E=S();var k={};k=o("dNL7g");var x={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C={};function I(e){return k.isMemo(e)?_:C[e.$$typeof]||x}C[k.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C[k.Memo]=_;var O=Object.defineProperty,N=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,A=Object.getOwnPropertyDescriptor,R=Object.getPrototypeOf,D=Object.prototype;m=o("acw62");o("9cCWX");const L={notify(){},get:()=>[]};function M(e,t){let n,r=L;function i(){s.onStateChange&&s.onStateChange()}function o(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){const e=p();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}const s={addNestedSub:function(e){return o(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:o,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=L)},getListeners:()=>r};return s}m=o("acw62");const j=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?m.useLayoutEffect:m.useEffect;let F=y;m=o("acw62");var U=function({store:e,context:t,children:r,serverState:i}){const o=(0,m.useMemo)((()=>{const t=M(e);return{store:e,subscription:t,getServerState:i?()=>i:void 0}}),[e,i]),s=(0,m.useMemo)((()=>e.getState()),[e]);j((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,s]);const a=t||g;return n(m).createElement(a.Provider,{value:o},r)};m=o("acw62");function z(e=g){const t=e===g?v:()=>(0,m.useContext)(e);return function(){const{store:e}=t();return e}}const V=z();function $(e=g){const t=e===g?V:z(e);return function(){return t().dispatch}}const B=$();var H,q,W,K;
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}H=d.useSyncExternalStoreWithSelector,b=H,(e=>{F=e})(h.useSyncExternalStore),q=c.unstable_batchedUpdates,f=q,(K=W||(W={})).Pop="POP",K.Push="PUSH",K.Replace="REPLACE";const Q="popstate";function X(e){return void 0===e&&(e={}),ne((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Z("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:ee(t)}),null,e)}function Y(e,t){if(!1===e||null==e)throw new Error(t)}function J(e,t){return{usr:e.state,key:e.key,idx:t}}function Z(e,t,n,r){return void 0===n&&(n=null),G({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?te(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function ee(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function te(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ne(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=W.Pop,l=null,u=c();function c(){return(s.state||{idx:null}).idx}function d(){a=W.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:a,location:f.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:ee(e);return Y(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,s.replaceState(G({},s.state,{idx:u}),""));let f={get action(){return a},get location(){return e(i,s)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Q,d),l=e,()=>{i.removeEventListener(Q,d),l=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){a=W.Push;let r=Z(f.location,e,t);n&&n(r,e),u=c()+1;let d=J(r,u),h=f.createHref(r);try{s.pushState(d,"",h)}catch(e){i.location.assign(h)}o&&l&&l({action:a,location:f.location,delta:1})},replace:function(e,t){a=W.Replace;let r=Z(f.location,e,t);n&&n(r,e),u=c();let i=J(r,u),d=f.createHref(r);s.replaceState(i,"",d),o&&l&&l({action:a,location:f.location,delta:0})},go:e=>s.go(e)};return f}var re,ie;function oe(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=new Set),e.map(((e,r)=>{let i=[...t,r],o="string"==typeof e.id?e.id:i.join("-");if(Y(!0!==e.index||!e.children,"Cannot specify children on an index route"),Y(!n.has(o),'Found a route id collision on id "'+o+"\".  Route id's must be globally unique within Data Router usages"),n.add(o),function(e){return!0===e.index}(e)){return G({},e,{id:o})}return G({},e,{id:o,children:e.children?oe(e.children,i,n):void 0})}))}function se(e,t,n){void 0===n&&(n="/");let r=we(("string"==typeof t?te(t):t).pathname||"/",n);if(null==r)return null;let i=ae(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=ve(i[e],be(r));return o}function ae(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(r.length));let a=Te([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(Y(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),ae(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:ge(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of le(e.path))i(e,t,n);else i(e,t)})),t}function le(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let s=le(r.join("/")),a=[];return a.push(...s.map((e=>""===e?o:[o,e].join("/")))),i&&a.push(...s),a.map((t=>e.startsWith("/")&&""===t?"/":t))}(ie=re||(re={})).data="data",ie.deferred="deferred",ie.redirect="redirect",ie.error="error";const ue=/^:\w+$/,ce=3,de=2,he=1,fe=10,pe=-2,me=e=>"*"===e;function ge(e,t){let n=e.split("/"),r=n.length;return n.some(me)&&(r+=pe),t&&(r+=de),n.filter((e=>!me(e))).reduce(((e,t)=>e+(ue.test(t)?ce:""===t?he:fe)),r)}function ve(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let s=n[e],a=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},l);if(!u)return null;Object.assign(r,u.params);let c=s.route;o.push({params:r,pathname:Te([i,u.pathname]),pathnameBase:_e(Te([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=Te([i,u.pathnameBase]))}return o}function ye(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Se("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=a[n]||"";s=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return Se(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a[n]||"",t),e}),{}),pathname:o,pathnameBase:s,pattern:e}}function be(e){try{return decodeURI(e)}catch(t){return Se(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function we(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Se(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function Ee(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function ke(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function xe(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=te(e):(i=G({},e),Y(!i.pathname||!i.pathname.includes("?"),Ee("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),Ee("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),Ee("#","search","hash",i)));let o,s=""===e||""===i.pathname,a=s?"/":i.pathname;if(r||null==a)o=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?te(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Ce(r),hash:Ie(i)}}(i,o),u=a&&"/"!==a&&a.endsWith("/"),c=(s||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Te=e=>e.join("/").replace(/\/\/+/g,"/"),_e=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ce=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Ie=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class Oe extends Error{}class Ne{constructor(e,t){let n;this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Y(e&&"object"==typeof e&&!Array.isArray(e),"defer() only accepts plain objects"),this.abortPromise=new Promise(((e,t)=>n=t)),this.controller=new AbortController;let r=()=>n(new Oe("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce(((e,t)=>{let[n,r]=t;return Object.assign(e,{[n]:this.trackPromise(n,r)})}),{}),this.done&&this.unlistenAbortSignal(),this.init=t}trackPromise(e,t){if(!(t instanceof Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let n=Promise.race([t,this.abortPromise]).then((t=>this.onSettle(n,e,null,t)),(t=>this.onSettle(n,e,t)));return n.catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),n}onSettle(e,t,n,r){return this.controller.signal.aborted&&n instanceof Oe?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>n}),Promise.reject(n)):(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),n?(Object.defineProperty(e,"_error",{get:()=>n}),this.emit(!1,t),Promise.reject(n)):(Object.defineProperty(e,"_data",{get:()=>r}),this.emit(!1,t),r))}emit(e,t){this.subscribers.forEach((n=>n(e,t)))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach(((e,t)=>this.pendingKeysSet.delete(t))),this.emit(!0)}async resolveData(e){let t=!1;if(!this.done){let n=()=>this.cancel();e.addEventListener("abort",n),t=await new Promise((t=>{this.subscribe((r=>{e.removeEventListener("abort",n),(r||this.done)&&t(r)}))}))}return t}get done(){return 0===this.pendingKeysSet.size}get unwrappedData(){return Y(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(((e,t)=>{let[n,r]=t;return Object.assign(e,{[n]:Pe(r)})}),{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Pe(e){if(!function(e){return e instanceof Promise&&!0===e._tracked}(e))return e;if(e._error)throw e._error;return e._data}class Ae{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Re(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const De=["post","put","patch","delete"],Le=new Set(De),Me=["get",...De],je=new Set(Me),Fe=new Set([301,302,303,307,308]),Ue=new Set([307,308]),ze={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ve={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$e={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,qe=!He;function We(e){Y(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=oe(e.routes),n=null,r=new Set,i=null,o=null,s=null,a=null!=e.hydrationData,l=se(t,e.history.location,e.basename),u=null;if(null==l){let n=st(404,{pathname:e.history.location.pathname}),{matches:r,route:i}=ot(t);l=r,u={[i.id]:n}}let c,d,h=!l.some((e=>e.route.loader))||null!=e.hydrationData,f={historyAction:e.history.action,location:e.history.location,matches:l,initialized:h,navigation:ze,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map,blockers:new Map},p=W.Pop,m=!1,g=!1,v=!1,y=[],b=[],w=new Map,S=0,E=-1,k=new Map,x=new Set,T=new Map,_=new Map,C=new Map,I=!1;function O(e){f=G({},f,e),r.forEach((e=>e(f)))}function N(t,n){var r,i;let o,s=null!=f.actionData&&null!=f.navigation.formMethod&&pt(f.navigation.formMethod)&&"loading"===f.navigation.state&&!0!==(null==(r=t.state)?void 0:r._isRedirect);o=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:s?f.actionData:null;let a=n.loaderData?rt(f.loaderData,n.loaderData,n.matches||[],n.errors):f.loaderData;for(let[e]of C)V(e);let l=!0===m||null!=f.navigation.formMethod&&pt(f.navigation.formMethod)&&!0!==(null==(i=t.state)?void 0:i._isRedirect);O(G({},n,{actionData:o,loaderData:a,historyAction:p,location:t,initialized:!0,navigation:ze,revalidation:"idle",restoreScrollPosition:q(t,n.matches||f.matches),preventScrollReset:l,blockers:new Map(f.blockers)})),g||p===W.Pop||(p===W.Push?e.history.push(t,t.state):p===W.Replace&&e.history.replace(t,t.state)),p=W.Pop,m=!1,g=!1,v=!1,y=[],b=[]}async function P(n,r,a){d&&d.abort(),d=null,p=n,g=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(i&&o&&s){let n=t.map((e=>yt(e,f.loaderData))),r=o(e,n)||e.key;i[r]=s()}}(f.location,f.matches),m=!0===(a&&a.preventScrollReset);let l=a&&a.overrideNavigation,u=se(t,r,e.basename);if(!u){let e=st(404,{pathname:r.pathname}),{matches:n,route:i}=ot(t);return H(),void N(r,{matches:n,loaderData:{},errors:{[i.id]:e}})}if(!(h=f.location,k=r,h.pathname!==k.pathname||h.search!==k.search||h.hash===k.hash||a&&a.submission&&pt(a.submission.formMethod)))return void N(r,{matches:u});var h,k;d=new AbortController;let C,I,P=Ze(e.history,r,d.signal,a&&a.submission);if(a&&a.pendingError)I={[it(u).route.id]:a.pendingError};else if(a&&a.submission&&pt(a.submission.formMethod)){let e=await async function(e,t,n,r,i){L();let o,s=G({state:"submitting",location:t},n);O({navigation:s});let a=bt(r,t);if(a.route.action){if(o=await Je("action",e,a,r,c.basename),e.signal.aborted)return{shortCircuited:!0}}else o={type:re.error,error:st(405,{method:e.method,pathname:t.pathname,routeId:a.route.id})};if(dt(o)){let e;return e=i&&null!=i.replace?i.replace:o.location===f.location.pathname+f.location.search,await R(f,o,{submission:n,replace:e}),{shortCircuited:!0}}if(ct(o)){let e=it(r,a.route.id);return!0!==(i&&i.replace)&&(p=W.Push),{pendingActionData:{},pendingActionError:{[e.route.id]:o.error}}}if(ut(o))throw st(400,{type:"defer-action"});return{pendingActionData:{[a.route.id]:o.data}}}(P,r,a.submission,u,{replace:a.replace});if(e.shortCircuited)return;C=e.pendingActionData,I=e.pendingActionError,l=G({state:"loading",location:r},a.submission),P=new Request(P.url,{signal:P.signal})}let{shortCircuited:A,loaderData:M,errors:j}=await async function(t,n,r,i,o,s,a,l){let u=i;if(!u){u=G({state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},o)}let c=o||(u.formMethod&&u.formAction&&u.formData&&u.formEncType?{formMethod:u.formMethod,formAction:u.formAction,formData:u.formData,formEncType:u.formEncType}:void 0),[h,p]=Qe(e.history,f,r,c,n,v,y,b,a,l,T);if(H((e=>!(r&&r.some((t=>t.route.id===e)))||h&&h.some((t=>t.route.id===e)))),0===h.length&&0===p.length)return N(n,G({matches:r,loaderData:{},errors:l||null},a?{actionData:a}:{})),{shortCircuited:!0};if(!g){p.forEach((e=>{let t=f.fetchers.get(e.key),n={state:"loading",data:t&&t.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(e.key,n)}));let e=a||f.actionData;O(G({navigation:u},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},p.length>0?{fetchers:new Map(f.fetchers)}:{}))}E=++S,p.forEach((e=>w.set(e.key,d)));let{results:m,loaderResults:k,fetcherResults:C}=await D(f.matches,r,h,p,t);if(t.signal.aborted)return{shortCircuited:!0};p.forEach((e=>w.delete(e.key)));let I=at(m);if(I)return await R(f,I,{replace:s}),{shortCircuited:!0};let{loaderData:P,errors:A}=nt(f,r,h,k,l,p,C,_);_.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&_.delete(t)}))})),function(){let e=[];for(let t of x){let n=f.fetchers.get(t);Y(n,"Expected fetcher: "+t),"loading"===n.state&&(x.delete(t),e.push(t))}U(e)}();let L=z(E);return G({loaderData:P,errors:A},L||p.length>0?{fetchers:new Map(f.fetchers)}:{})}(P,r,u,l,a&&a.submission,a&&a.replace,C,I);A||(d=null,N(r,G({matches:u},C?{actionData:C}:{},{loaderData:M,errors:j})))}function A(e){return f.fetchers.get(e)||Ve}async function R(t,n,r){var i;let{submission:o,replace:s,isFetchActionRedirect:a}=void 0===r?{}:r;n.revalidate&&(v=!0);let l=Z(t.location,n.location,G({_isRedirect:!0},a?{_isFetchActionRedirect:!0}:{}));if(Y(l,"Expected a location on the redirect navigation"),Be.test(n.location)&&He&&void 0!==(null==(i=window)?void 0:i.location)){let t=e.history.createURL(n.location).origin;if(window.location.origin!==t)return void(s?window.location.replace(n.location):window.location.assign(n.location))}d=null;let u=!0===s?W.Replace:W.Push,{formMethod:c,formAction:h,formEncType:f,formData:p}=t.navigation;!o&&c&&h&&p&&f&&(o={formMethod:c,formAction:h,formEncType:f,formData:p}),Ue.has(n.status)&&o&&pt(o.formMethod)?await P(u,l,{submission:G({},o,{formAction:n.location}),preventScrollReset:m}):await P(u,l,{overrideNavigation:{state:"loading",location:l,formMethod:o?o.formMethod:void 0,formAction:o?o.formAction:void 0,formEncType:o?o.formEncType:void 0,formData:o?o.formData:void 0},preventScrollReset:m})}async function D(t,n,r,i,o){let s=await Promise.all([...r.map((e=>Je("loader",o,e,n,c.basename))),...i.map((t=>Je("loader",Ze(e.history,t.path,o.signal),t.match,t.matches,c.basename)))]),a=s.slice(0,r.length),l=s.slice(r.length);return await Promise.all([mt(t,r,a,o.signal,!1,f.loaderData),mt(t,i.map((e=>e.match)),l,o.signal,!0)]),{results:s,loaderResults:a,fetcherResults:l}}function L(){v=!0,y.push(...H()),T.forEach(((e,t)=>{w.has(t)&&(b.push(t),F(t))}))}function M(e,t,n){let r=it(f.matches,t);j(e),O({errors:{[r.route.id]:n},fetchers:new Map(f.fetchers)})}function j(e){w.has(e)&&F(e),T.delete(e),k.delete(e),x.delete(e),f.fetchers.delete(e)}function F(e){let t=w.get(e);Y(t,"Expected fetch controller: "+e),t.abort(),w.delete(e)}function U(e){for(let t of e){let e={state:"idle",data:A(t).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(t,e)}}function z(e){let t=[];for(let[n,r]of k)if(r<e){let e=f.fetchers.get(n);Y(e,"Expected fetcher: "+n),"loading"===e.state&&(F(n),k.delete(n),t.push(n))}return U(t),t.length>0}function V(e){f.blockers.delete(e),C.delete(e)}function $(e,t){let n=f.blockers.get(e)||$e;Y("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state),f.blockers.set(e,t),O({blockers:new Map(f.blockers)})}function B(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===C.size)return;C.size>1&&Se(!1,"A router only supports one blocker at a time");let i=Array.from(C.entries()),[o,s]=i[i.length-1],a=f.blockers.get(o);return a&&"proceeding"===a.state?void 0:s({currentLocation:t,nextLocation:n,historyAction:r})?o:void 0}function H(e){let t=[];return _.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),_.delete(r))})),t}function q(e,t){if(i&&o&&s){let n=t.map((e=>yt(e,f.loaderData))),r=o(e,n)||e.key,s=i[r];if("number"==typeof s)return s}return null}return c={get basename(){return e.basename},get state(){return f},get routes(){return t},initialize:function(){return n=e.history.listen((t=>{let{action:n,location:r,delta:i}=t;if(I)return void(I=!1);Se(0===C.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let o=B({currentLocation:f.location,nextLocation:r,historyAction:n});return o&&null!=i?(I=!0,e.history.go(-1*i),void $(o,{state:"blocked",location:r,proceed(){$(o,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.history.go(i)},reset(){V(o),O({blockers:new Map(c.state.blockers)})}})):P(n,r)})),f.initialized||P(W.Pop,f.location),c},subscribe:function(e){return r.add(e),()=>r.delete(e)},enableScrollRestoration:function(e,t,n){if(i=e,s=t,o=n||(e=>e.key),!a&&f.navigation===ze){a=!0;let e=q(f.location,f.matches);null!=e&&O({restoreScrollPosition:e})}return()=>{i=null,s=null,o=null}},navigate:async function t(n,r){if("number"==typeof n)return void e.history.go(n);let{path:i,submission:o,error:s}=Ke(n,r),a=f.location,l=Z(f.location,i,r&&r.state);l=G({},l,e.history.encodeLocation(l));let u=r&&null!=r.replace?r.replace:void 0,c=W.Push;!0===u?c=W.Replace:!1===u||null!=o&&pt(o.formMethod)&&o.formAction===f.location.pathname+f.location.search&&(c=W.Replace);let d=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,h=B({currentLocation:a,nextLocation:l,historyAction:c});if(!h)return await P(c,l,{submission:o,pendingError:s,preventScrollReset:d,replace:r&&r.replace});$(h,{state:"blocked",location:l,proceed(){$(h,{state:"proceeding",proceed:void 0,reset:void 0,location:l}),t(n,r)},reset(){V(h),O({blockers:new Map(f.blockers)})}})},fetch:function(n,r,i,o){if(qe)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");w.has(n)&&F(n);let s=se(t,i,e.basename);if(!s)return void M(n,r,st(404,{pathname:i}));let{path:a,submission:l}=Ke(i,o,!0),u=bt(s,a);m=!0===(o&&o.preventScrollReset),l&&pt(l.formMethod)?async function(n,r,i,o,s,a){if(L(),T.delete(n),!o.route.action){let e=st(405,{method:a.formMethod,pathname:i,routeId:r});return void M(n,r,e)}let l=f.fetchers.get(n),u=G({state:"submitting"},a,{data:l&&l.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(n,u),O({fetchers:new Map(f.fetchers)});let h=new AbortController,m=Ze(e.history,i,h.signal,a);w.set(n,h);let g=await Je("action",m,o,s,c.basename);if(m.signal.aborted)return void(w.get(n)===h&&w.delete(n));if(dt(g)){w.delete(n),x.add(n);let e=G({state:"loading"},a,{data:void 0," _hasFetcherDoneAnything ":!0});return f.fetchers.set(n,e),O({fetchers:new Map(f.fetchers)}),R(f,g,{isFetchActionRedirect:!0})}if(ct(g))return void M(n,r,g.error);if(ut(g))throw st(400,{type:"defer-action"});let C=f.navigation.location||f.location,I=Ze(e.history,C,h.signal),P="idle"!==f.navigation.state?se(t,f.navigation.location,e.basename):f.matches;Y(P,"Didn't find any matches after fetcher action");let A=++S;k.set(n,A);let j=G({state:"loading",data:g.data},a,{" _hasFetcherDoneAnything ":!0});f.fetchers.set(n,j);let[F,U]=Qe(e.history,f,P,a,C,v,y,b,{[o.route.id]:g.data},void 0,T);U.filter((e=>e.key!==n)).forEach((e=>{let t=e.key,n=f.fetchers.get(t),r={state:"loading",data:n&&n.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(t,r),w.set(t,h)})),O({fetchers:new Map(f.fetchers)});let{results:V,loaderResults:$,fetcherResults:B}=await D(f.matches,P,F,U,I);if(h.signal.aborted)return;k.delete(n),w.delete(n),U.forEach((e=>w.delete(e.key)));let H=at(V);if(H)return R(f,H);let{loaderData:q,errors:W}=nt(f,f.matches,F,$,void 0,U,B,_),K={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(n,K);let Q=z(A);"loading"===f.navigation.state&&A>E?(Y(p,"Expected pending action"),d&&d.abort(),N(f.navigation.location,{matches:P,loaderData:q,errors:W,fetchers:new Map(f.fetchers)})):(O(G({errors:W,loaderData:rt(f.loaderData,q,P,W)},Q?{fetchers:new Map(f.fetchers)}:{})),v=!1)}(n,r,a,u,s,l):(T.set(n,{routeId:r,path:a,match:u,matches:s}),async function(t,n,r,i,o,s){let a=f.fetchers.get(t),l=G({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},s,{data:a&&a.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(t,l),O({fetchers:new Map(f.fetchers)});let u=new AbortController,d=Ze(e.history,r,u.signal);w.set(t,u);let h=await Je("loader",d,i,o,c.basename);ut(h)&&(h=await gt(h,d.signal,!0)||h);w.get(t)===u&&w.delete(t);if(d.signal.aborted)return;if(dt(h))return void await R(f,h);if(ct(h)){let e=it(f.matches,n);return f.fetchers.delete(t),void O({fetchers:new Map(f.fetchers),errors:{[e.route.id]:h.error}})}Y(!ut(h),"Unhandled fetcher deferred data");let p={state:"idle",data:h.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(t,p),O({fetchers:new Map(f.fetchers)})}(n,r,a,u,s,l))},revalidate:function(){L(),O({revalidation:"loading"}),"submitting"!==f.navigation.state&&("idle"!==f.navigation.state?P(p||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation}):P(f.historyAction,f.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:A,deleteFetcher:j,dispose:function(){n&&n(),r.clear(),d&&d.abort(),f.fetchers.forEach(((e,t)=>j(t))),f.blockers.forEach(((e,t)=>V(t)))},getBlocker:function(e,t){let n=f.blockers.get(e)||$e;return C.get(e)!==t&&C.set(e,t),n},deleteBlocker:V,_internalFetchControllers:w,_internalActiveDeferreds:_},c}Symbol("deferred");function Ke(e,t,n){void 0===n&&(n=!1);let r,i="string"==typeof e?e:ee(e);if(!t||!function(e){return null!=e&&"formData"in e}(t))return{path:i};if(t.formMethod&&!ft(t.formMethod))return{path:i,error:st(405,{method:t.formMethod})};if(t.formData&&(r={formMethod:t.formMethod||"get",formAction:lt(i),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},pt(r.formMethod)))return{path:i,submission:r};let o=te(i),s=et(t.formData);return n&&o.search&&vt(o.search)&&s.append("index",""),o.search="?"+s,{path:ee(o),submission:r}}function Ge(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function Qe(e,t,n,r,i,o,s,a,l,u,c){let d=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,h=e.createURL(t.location),f=e.createURL(i),p=o||h.toString()===f.toString()||h.search!==f.search,m=u?Object.keys(u)[0]:void 0,g=Ge(n,m).filter(((e,n)=>{if(null==e.route.loader)return!1;if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||s.some((t=>t===e.route.id)))return!0;let i=t.matches[n],o=e;return Ye(e,G({currentUrl:h,currentParams:i.params,nextUrl:f,nextParams:o.params},r,{actionResult:d,defaultShouldRevalidate:p||Xe(i,o)}))})),v=[];return c&&c.forEach(((e,i)=>{if(n.some((t=>t.route.id===e.routeId)))if(a.includes(i))v.push(G({key:i},e));else{Ye(e.match,G({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:d,defaultShouldRevalidate:p}))&&v.push(G({key:i},e))}})),[g,v]}function Xe(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ye(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}async function Je(e,t,n,r,i,o,s,a){let l,u,c;void 0===i&&(i="/"),void 0===o&&(o=!1),void 0===s&&(s=!1);let d=new Promise(((e,t)=>c=t)),h=()=>c();t.signal.addEventListener("abort",h);try{let r=n.route[e];Y(r,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),u=await Promise.race([r({request:t,params:n.params,context:a}),d]),Y(void 0!==u,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){l=re.error,u=e}finally{t.signal.removeEventListener("abort",h)}if(ht(u)){let e,a=u.status;if(Fe.has(a)){let e=u.headers.get("Location");if(Y(e,"Redirects returned/thrown from loaders/actions must have a Location header"),Be.test(e)){if(!o){let n=new URL(t.url),r=e.startsWith("//")?new URL(n.protocol+e):new URL(e);r.origin===n.origin&&(e=r.pathname+r.search+r.hash)}}else{let o=xe(e,ke(r.slice(0,r.indexOf(n)+1)).map((e=>e.pathnameBase)),new URL(t.url).pathname);if(Y(ee(o),"Unable to resolve redirect location: "+e),i){let e=o.pathname;o.pathname="/"===e?i:Te([i,e])}e=ee(o)}if(o)throw u.headers.set("Location",e),u;return{type:re.redirect,status:a,location:e,revalidate:null!==u.headers.get("X-Remix-Revalidate")}}if(s)throw{type:l||re.data,response:u};let c=u.headers.get("Content-Type");return e=c&&/\bapplication\/json\b/.test(c)?await u.json():await u.text(),l===re.error?{type:l,error:new Ae(a,u.statusText,e),headers:u.headers}:{type:re.data,data:e,statusCode:u.status,headers:u.headers}}return l===re.error?{type:l,error:u}:u instanceof Ne?{type:re.deferred,deferredData:u}:{type:re.data,data:u}}function Ze(e,t,n,r){let i=e.createURL(lt(t)).toString(),o={signal:n};if(r&&pt(r.formMethod)){let{formMethod:e,formEncType:t,formData:n}=r;o.method=e.toUpperCase(),o.body="application/x-www-form-urlencoded"===t?et(n):n}return new Request(i,o)}function et(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function tt(e,t,n,r,i){let o,s={},a=null,l=!1,u={};return n.forEach(((n,c)=>{let d=t[c].route.id;if(Y(!dt(n),"Cannot handle redirect results in processLoaderData"),ct(n)){let t=it(e,d),i=n.error;r&&(i=Object.values(r)[0],r=void 0),a=a||{},null==a[t.route.id]&&(a[t.route.id]=i),s[d]=void 0,l||(l=!0,o=Re(n.error)?n.error.status:500),n.headers&&(u[d]=n.headers)}else ut(n)?(i.set(d,n.deferredData),s[d]=n.deferredData.data):s[d]=n.data,null==n.statusCode||200===n.statusCode||l||(o=n.statusCode),n.headers&&(u[d]=n.headers)})),r&&(a=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:a,statusCode:o||200,loaderHeaders:u}}function nt(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=tt(t,n,r,i,a);for(let t=0;t<o.length;t++){let{key:n,match:r}=o[t];Y(void 0!==s&&void 0!==s[t],"Did not find corresponding fetcher result");let i=s[t];if(ct(i)){let t=it(e.matches,r.route.id);u&&u[t.route.id]||(u=G({},u,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(dt(i))Y(!1,"Unhandled fetcher revalidation redirect");else if(ut(i))Y(!1,"Unhandled fetcher deferred data");else{let t={state:"idle",data:i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(n,t)}}return{loaderData:l,errors:u}}function rt(e,t,n,r){let i=G({},t);for(let o of n){let n=o.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function it(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function ot(e){let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function st(e,t){let{pathname:n,routeId:r,method:i,type:o}=void 0===t?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return 400===e?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===o&&(a="defer() is not supported in actions")):403===e?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):404===e?(s="Not Found",a='No route matches URL "'+n+'"'):405===e&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Ae(e||500,s,new Error(a),!0)}function at(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(dt(n))return n}}function lt(e){return ee(G({},"string"==typeof e?te(e):e,{hash:""}))}function ut(e){return e.type===re.deferred}function ct(e){return e.type===re.error}function dt(e){return(e&&e.type)===re.redirect}function ht(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function ft(e){return je.has(e)}function pt(e){return Le.has(e)}async function mt(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s],u=e.find((e=>e.route.id===l.route.id)),c=null!=u&&!Xe(u,l)&&void 0!==(o&&o[l.route.id]);ut(a)&&(i||c)&&await gt(a,r,i).then((e=>{e&&(n[s]=e||n[s])}))}}async function gt(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:re.data,data:e.deferredData.unwrappedData}}catch(e){return{type:re.error,error:e}}return{type:re.data,data:e.deferredData.data}}}function vt(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function yt(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function bt(e,t){let n="string"==typeof t?te(t).search:t.search;if(e[e.length-1].route.index&&vt(n||""))return e[e.length-1];let r=ke(e);return r[r.length-1]}m=o("acw62");function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}const St="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:Et,useEffect:kt,useLayoutEffect:xt,useDebugValue:Tt}=m;function _t(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!St(n,e)}catch(e){return!0}}const Ct=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},o]=Et({inst:{value:r,getSnapshot:t}});return xt((()=>{i.value=r,i.getSnapshot=t,_t(i)&&o({inst:i})}),[e,r,t]),kt((()=>{_t(i)&&o({inst:i});return e((()=>{_t(i)&&o({inst:i})}))}),[e]),Tt(r),r},It="useSyncExternalStore"in m?m.useSyncExternalStore:Ct,Ot=m.createContext(null),Nt=m.createContext(null),Pt=m.createContext(null),At=m.createContext(null),Rt=m.createContext({outlet:null,matches:[]}),Dt=m.createContext(null);function Lt(e,t){let{relative:n}=void 0===t?{}:t;!Mt()&&Y(!1);let{basename:r,navigator:i}=m.useContext(Pt),{hash:o,pathname:s,search:a}=zt(e,{relative:n}),l=s;return"/"!==r&&(l="/"===s?r:Te([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Mt(){return null!=m.useContext(At)}function jt(){return!Mt()&&Y(!1),m.useContext(At).location}function Ft(){!Mt()&&Y(!1);let{basename:e,navigator:t}=m.useContext(Pt),{matches:n}=m.useContext(Rt),{pathname:r}=jt(),i=JSON.stringify(ke(n).map((e=>e.pathnameBase))),o=m.useRef(!1);return m.useEffect((()=>{o.current=!0})),m.useCallback((function(n,s){if(void 0===s&&(s={}),!o.current)return;if("number"==typeof n)return void t.go(n);let a=xe(n,JSON.parse(i),r,"path"===s.relative);"/"!==e&&(a.pathname="/"===a.pathname?e:Te([e,a.pathname])),(s.replace?t.replace:t.push)(a,s.state,s)}),[e,t,i,r])}const Ut=m.createContext(null);function zt(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=m.useContext(Rt),{pathname:i}=jt(),o=JSON.stringify(ke(r).map((e=>e.pathnameBase)));return m.useMemo((()=>xe(e,JSON.parse(o),i,"path"===n)),[e,o,i,n])}function Vt(){let e=function(){var e;let t=m.useContext(Dt),n=Qt(Kt.UseRouteError),r=Xt(Kt.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=Re(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}class $t extends m.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?m.createElement(Rt.Provider,{value:this.props.routeContext},m.createElement(Dt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bt(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(Ot);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Rt.Provider,{value:t},r)}function Ht(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,i=null==n?void 0:n.errors;if(null!=i){let e=r.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));!(e>=0)&&Y(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,o,s)=>{let a=o.route.id?null==i?void 0:i[o.route.id]:null,l=n?o.route.errorElement||m.createElement(Vt,null):null,u=t.concat(r.slice(0,s+1)),c=()=>m.createElement(Bt,{match:o,routeContext:{outlet:e,matches:u}},a?l:void 0!==o.route.element?o.route.element:e);return n&&(o.route.errorElement||0===s)?m.createElement($t,{location:n.location,component:l,error:a,children:c(),routeContext:{outlet:null,matches:u}}):c()}),null)}var qt,Wt,Kt,Gt;function Qt(e){let t=m.useContext(Nt);return!t&&Y(!1),t}function Xt(e){let t=function(e){let t=m.useContext(Rt);return!t&&Y(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&Y(!1),n.route.id}(Wt=qt||(qt={})).UseBlocker="useBlocker",Wt.UseRevalidator="useRevalidator",(Gt=Kt||(Kt={})).UseLoaderData="useLoaderData",Gt.UseActionData="useActionData",Gt.UseRouteError="useRouteError",Gt.UseNavigation="useNavigation",Gt.UseRouteLoaderData="useRouteLoaderData",Gt.UseMatches="useMatches",Gt.UseRevalidator="useRevalidator";function Yt(e){return function(e){let t=m.useContext(Rt).outlet;return t?m.createElement(Ut.Provider,{value:e},t):t}(e.context)}function Jt(e){Y(!1)}function Zt(e){let{basename:t="/",children:n=null,location:r,navigationType:i=W.Pop,navigator:o,static:s=!1}=e;Mt()&&Y(!1);let a=t.replace(/^\/*/,"/"),l=m.useMemo((()=>({basename:a,navigator:o,static:s})),[a,o,s]);"string"==typeof r&&(r=te(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,p=m.useMemo((()=>{let e=we(u,a);return null==e?null:{pathname:e,search:c,hash:d,state:h,key:f}}),[a,u,c,d,h,f]);return null==p?null:m.createElement(Pt.Provider,{value:l},m.createElement(At.Provider,{children:n,value:{location:p,navigationType:i}}))}function en(e){let{children:t,location:n}=e,r=m.useContext(Ot);return function(e,t){!Mt()&&Y(!1);let n,{navigator:r}=m.useContext(Pt),i=m.useContext(Nt),{matches:o}=m.useContext(Rt),s=o[o.length-1],a=s?s.params:{},l=(s&&s.pathname,s?s.pathnameBase:"/"),u=(s&&s.route,jt());if(t){var c;let e="string"==typeof t?te(t):t;"/"!==l&&!(null==(c=e.pathname)?void 0:c.startsWith(l))&&Y(!1),n=e}else n=u;let d=n.pathname||"/",h=se(e,{pathname:"/"===l?d:d.slice(l.length)||"/"}),f=Ht(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:Te([l,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Te([l,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,i||void 0);return t&&f?m.createElement(At.Provider,{value:{location:wt({pathname:"/",search:"",hash:"",state:null,key:"default"},n),navigationType:W.Pop}},f):f}(r&&!t?r.router.routes:on(t),n)}var tn,nn;(nn=tn||(tn={}))[nn.pending=0]="pending",nn[nn.success=1]="success",nn[nn.error=2]="error";new Promise((()=>{}));class rn extends m.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=tn.pending;if(n instanceof Promise)if(this.state.error){tn.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?tn.error:void 0!==r._data?tn.success:tn.pending):(tn.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else tn.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===tn.error&&r._error instanceof Oe)throw $7939e29d663dd3ed$var$neverSettledPromise;if(i===tn.error&&!t)throw r._error;if(i===tn.error)return m.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:t});if(i===tn.success)return m.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:e});throw r}}function on(e,t){void 0===t&&(t=[]);let n=[];return m.Children.forEach(e,((e,r)=>{if(!m.isValidElement(e))return;if(e.type===m.Fragment)return void n.push.apply(n,on(e.props.children,t));e.type!==Jt&&Y(!1),e.props.index&&e.props.children&&Y(!1);let i=[...t,r],o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(o.children=on(e.props.children,i)),n.push(o)})),n}function sn(e){return e.map((e=>{let t=wt({},e);return null==t.hasErrorBoundary&&(t.hasErrorBoundary=null!=t.errorElement),t.children&&(t.children=sn(t.children)),t}))}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
m=o("acw62");function an(){return an=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},an.apply(this,arguments)}function ln(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const un=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function cn(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=an({},t,{errors:dn(t.errors)})),t}function dn(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new Ae(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){let t=new Error(r.message);t.stack="",n[e]=t}else n[e]=r;return n}const hn="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,fn=m.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=ln(e,un),h=!1;if(hn&&"string"==typeof u&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){n=u;let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u);t.origin===e.origin?u=t.pathname+t.search+t.hash:h=!0}let f=Lt(u,{relative:i}),p=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=void 0===t?{}:t,a=Ft(),l=jt(),u=zt(e,{relative:s});return m.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:ee(l)===ee(u);a(e,{replace:n,state:i,preventScrollReset:o,relative:s})}}),[l,a,u,r,i,n,e,o,s])}(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});return m.createElement("a",an({},d,{href:n||f,onClick:h||o?r:function(e){r&&r(e),e.defaultPrevented||p(e)},ref:t,target:l}))}));var pn,mn;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(pn||(pn={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(mn||(mn={}));m=o("acw62");const gn=[{name:"Home",path:"/"},{name:"My List",path:"/favorites"}],vn="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",yn="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png",bn=(0,s.jsx)("svg",{id:"rank-1",width:"100%",height:"100%",viewBox:"-20 0 70 154",className:"h-full pointer-events-none w-full svg-icon-rank-1 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"})}),wn=(0,s.jsx)("svg",{id:"rank-2",width:"100%",height:"100%",viewBox:"0 0 80 154",className:"h-full pointer-events-none w-full svg-icon-rank-2 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"})}),Sn=(0,s.jsx)("svg",{id:"rank-3",width:"100%",height:"100%",viewBox:"0 0 80 154",className:"h-full pointer-events-none w-full svg-icon-rank-3 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"})}),En=(0,s.jsx)("svg",{id:"rank-4",width:"100%",height:"100%",viewBox:"0 0 81 154",className:"h-full pointer-events-none w-full svg-icon-rank-4 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"})}),kn=(0,s.jsx)("svg",{id:"rank-5",width:"100%",height:"100%",viewBox:"0 0 81 154",className:"h-full pointer-events-none w-full svg-icon-rank-5 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"})}),xn={dots:!1,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:3},Tn={speed:500,slidesToShow:2,slidesToScroll:3,variableWidth:!0},_n={dots:!0,infinite:!1,speed:500,slidesToShow:1.2,slidesToScroll:2};o("acw62");var Cn=function(){return(0,s.jsx)("div",{className:"flex pt-11 md:mt-12 w-full flex-col items-center ",children:(0,s.jsx)("img",{className:"w-3/6 hidden md:block ","data-testid":"image",src:vn})})};o("acw62");var In,On={};Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var Nn=((In=o("99b6d"))&&In.__esModule?In:{default:In}).default;On.default=Nn;const Pn="bg-titleWhite font-netflixSans font-medium text-3xl";m=o("acw62"),m=o("acw62"),m=o("acw62");function An(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,An),r}m=o("acw62");function Rn(...e){return e.filter(Boolean).join(" ")}var Dn,Ln,Mn=((Ln=Mn||{})[Ln.None=0]="None",Ln[Ln.RenderStrategy=1]="RenderStrategy",Ln[Ln.Static=2]="Static",Ln),jn=((Dn=jn||{})[Dn.Unmount=0]="Unmount",Dn[Dn.Hidden=1]="Hidden",Dn);function Fn({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:o=!0,name:s}){let a=zn(t,e);if(o)return Un(a,n,r,s);let l=null!=i?i:0;if(2&l){let{static:e=!1,...t}=a;if(e)return Un(t,n,r,s)}if(1&l){let{unmount:e=!0,...t}=a;return An(e?0:1,{0:()=>null,1:()=>Un({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return Un(a,n,r,s)}function Un(e,t={},n,r){var i;let{as:o=n,children:s,refName:a="ref",...l}=Bn(e,["unmount","static"]),u=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof s?s(t):s;"className"in l&&l.className&&"function"==typeof l.className&&(l.className=l.className(t));let d={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(o===m.Fragment&&Object.keys($n(l)).length>0){if(!(0,m.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=Rn(null==(i=c.props)?void 0:i.className,l.className),t=e?{className:e}:{};return(0,m.cloneElement)(c,Object.assign({},zn(c.props,$n(Bn(l,["ref"]))),d,u,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,u.ref),t))}return(0,m.createElement)(o,Object.assign({},Bn(l,["ref"]),o!==m.Fragment&&u,o!==m.Fragment&&d),c)}function zn(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let i=n[e];for(let e of i){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function Vn(e){var t;return Object.assign((0,m.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function $n(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function Bn(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}m=o("acw62"),m=o("acw62"),m=o("acw62"),m=o("acw62");var Hn=Object.defineProperty,qn=(e,t,n)=>(((e,t,n)=>{t in e?Hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let Wn=new class{constructor(){qn(this,"current",this.detect()),qn(this,"handoffState","pending"),qn(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},Kn=(e,t)=>{Wn.isServer?(0,m.useEffect)(e,t):(0,m.useLayoutEffect)(e,t)};function Gn(e){let t=(0,m.useRef)(e);return Kn((()=>{t.current=e}),[e]),t}let Qn=function(e){let t=Gn(e);return n(m).useCallback(((...e)=>t.current(...e)),[t])},Xn=Symbol();function Yn(e,t=!0){return Object.assign(e,{[Xn]:t})}function Jn(...e){let t=(0,m.useRef)(e);(0,m.useEffect)((()=>{t.current=e}),[e]);let n=Qn((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[Xn])))?void 0:n}var Zn,er=((Zn=er||{}).Space=" ",Zn.Enter="Enter",Zn.Escape="Escape",Zn.Backspace="Backspace",Zn.Delete="Delete",Zn.ArrowLeft="ArrowLeft",Zn.ArrowUp="ArrowUp",Zn.ArrowRight="ArrowRight",Zn.ArrowDown="ArrowDown",Zn.Home="Home",Zn.End="End",Zn.PageUp="PageUp",Zn.PageDown="PageDown",Zn.Tab="Tab",Zn);function tr(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var nr;m=o("acw62");function rr(){let[e,t]=(0,m.useState)(Wn.isHandoffComplete);return e&&!1===Wn.isHandoffComplete&&t(!1),(0,m.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,m.useEffect)((()=>Wn.handoff()),[]),e}let ir=null!=(nr=n(m=o("acw62")).useId)?nr:function(){let e=rr(),[t,r]=n(m).useState(e?()=>Wn.nextId():null);return Kn((()=>{null===t&&r(Wn.nextId())}),[t]),null!=t?""+t:void 0};m=o("acw62");let or="div";var sr=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(sr||{});let ar=Vn((function(e,t){let{features:n=1,...r}=e;return Fn({ourProps:{ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:or,name:"Hidden"})}));function lr(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function ur(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add((()=>e.removeEventListener(n,r,i)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return lr((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=ur();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function cr(e){return Wn.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let dr=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var hr,fr,pr=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(pr||{}),mr=((fr=mr||{})[fr.Error=0]="Error",fr[fr.Overflow=1]="Overflow",fr[fr.Success=2]="Success",fr[fr.Underflow=3]="Underflow",fr),gr=((hr=gr||{})[hr.Previous=-1]="Previous",hr[hr.Next=1]="Next",hr);function vr(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(dr)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var yr=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(yr||{});function br(e,t=0){var n;return e!==(null==(n=cr(e))?void 0:n.body)&&An(t,{0:()=>e.matches(dr),1(){let t=e;for(;null!==t;){if(t.matches(dr))return!0;t=t.parentElement}return!1}})}function wr(e){null==e||e.focus({preventScroll:!0})}let Sr=["textarea","input"].join(",");function Er(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),i=t(n);if(null===r||null===i)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:vr(e);i.length>0&&s.length>1&&(s=s.filter((e=>!i.includes(e)))),r=null!=r?r:o.activeElement;let a,l=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,h=s.length;do{if(d>=h||d+h<=0)return 0;let e=u+d;if(16&t)e=(e+h)%h;else{if(e<0)return 3;if(e>=h)return 1}a=s[e],null==a||a.focus(c),d+=l}while(a!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,Sr))&&n}(a)&&a.select(),a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),2}m=o("acw62"),m=o("acw62");function kr(e,t,n){let r=Gn(t);(0,m.useEffect)((()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var xr=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(xr||{});function Tr(){let e=(0,m.useRef)(0);return kr("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}m=o("acw62");function _r(){let e=(0,m.useRef)(!1);return Kn((()=>(e.current=!0,()=>{e.current=!1})),[]),e}m=o("acw62");function Cr(...e){return(0,m.useMemo)((()=>cr(...e)),[...e])}m=o("acw62");function Ir(e,t,n,r){let i=Gn(n);(0,m.useEffect)((()=>{function n(e){i.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}),[e,t,r])}m=o("acw62");function Or(e,t){let n=(0,m.useRef)([]),r=Qn(e);(0,m.useEffect)((()=>{let e=[...n.current];for(let[i,o]of t.entries())if(n.current[i]!==o){let i=r(t,e);return n.current=t,i}}),[r,...t])}m=o("acw62");function Nr(){let[e]=(0,m.useState)(ur);return(0,m.useEffect)((()=>()=>e.dispose()),[e]),e}function Pr(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Ar="div";var Rr=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Rr||{});let Dr=Vn((function(e,t){let r=(0,m.useRef)(null),i=Jn(r,t),{initialFocus:o,containers:s,features:a=30,...l}=e;rr()||(a=1);let u=Cr(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,m.useRef)(Mr.slice());return Or((([e],[n])=>{!0===n&&!1===e&&lr((()=>{t.current.splice(0)})),!1===n&&!0===e&&(t.current=Mr.slice())}),[e,Mr,t]),Qn((()=>{var e;return null!=(e=t.current.find((e=>null!=e&&e.isConnected)))?e:null}))}(t);Or((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&wr(n())}),[t]);let r=(0,m.useRef)(!1);(0,m.useEffect)((()=>(r.current=!1,()=>{r.current=!0,lr((()=>{r.current&&wr(n())}))})),[])}({ownerDocument:u},Boolean(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let i=(0,m.useRef)(null),o=_r();return Or((()=>{if(!r)return;let s=t.current;s&&lr((()=>{if(!o.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(i.current=t)}else if(s.contains(t))return void(i.current=t);null!=n&&n.current?wr(n.current):Er(s,pr.First)===mr.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=null==e?void 0:e.activeElement}))}),[r]),i}({ownerDocument:u,container:r,initialFocus:o},Boolean(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},i){let o=_r();Ir(null==e?void 0:e.defaultView,"focus",(e=>{if(!i||!o.current)return;let s=Pr(n);t.current instanceof HTMLElement&&s.add(t.current);let a=r.current;if(!a)return;let l=e.target;l&&l instanceof HTMLElement?jr(s,l)?(r.current=l,wr(l)):(e.preventDefault(),e.stopPropagation(),wr(a)):wr(r.current)}),!0)}({ownerDocument:u,container:r,containers:s,previousActiveElement:c},Boolean(8&a));let d=Tr(),h=Qn((e=>{let t=r.current;t&&An(d.current,{[xr.Forwards]:()=>{Er(t,pr.First,{skipElements:[e.relatedTarget]})},[xr.Backwards]:()=>{Er(t,pr.Last,{skipElements:[e.relatedTarget]})}})})),f=Nr(),p=(0,m.useRef)(!1),g={ref:i,onKeyDown(e){"Tab"==e.key&&(p.current=!0,f.requestAnimationFrame((()=>{p.current=!1})))},onBlur(e){let t=Pr(s);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(jr(t,n)||(p.current?Er(r.current,An(d.current,{[xr.Forwards]:()=>pr.Next,[xr.Backwards]:()=>pr.Previous})|pr.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&wr(e.target)))}};return n(m).createElement(n(m).Fragment,null,Boolean(4&a)&&n(m).createElement(ar,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:sr.Focusable}),Fn({ourProps:g,theirProps:l,defaultTag:Ar,name:"FocusTrap"}),Boolean(4&a)&&n(m).createElement(ar,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:sr.Focusable}))})),Lr=Object.assign(Dr,{features:Rr}),Mr=[];if("undefined"!=typeof window&&"undefined"!=typeof document){let e=function(e){e.target instanceof HTMLElement&&e.target!==document.body&&Mr[0]!==e.target&&(Mr.unshift(e.target),Mr=Mr.filter((e=>null!=e&&e.isConnected)),Mr.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function jr(e,t){for(let n of e)if(n.contains(t))return!0;return!1}m=o("acw62");let Fr=(0,(m=o("acw62")).createContext)(!1);function Ur(e){return n(m).createElement(Fr.Provider,{value:e.force},e.children)}function zr(e){let t=(0,m.useContext)(Fr),n=(0,m.useContext)(Br),r=Cr(e),[i,o]=(0,m.useState)((()=>{if(!t&&null!==n||Wn.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)}));return(0,m.useEffect)((()=>{null!==i&&(null!=r&&r.body.contains(i)||null==r||r.body.appendChild(i))}),[i,r]),(0,m.useEffect)((()=>{t||null!==n&&o(n.current)}),[n,o,t]),i}let Vr=m.Fragment;let $r=m.Fragment,Br=(0,m.createContext)(null);let Hr=Vn((function(e,t){let n=e,r=(0,m.useRef)(null),i=Jn(Yn((e=>{r.current=e})),t),o=Cr(r),s=zr(r),[a]=(0,m.useState)((()=>{var e;return Wn.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null})),l=rr(),u=(0,m.useRef)(!1);return Kn((()=>{if(u.current=!1,s&&a)return s.contains(a)||(a.setAttribute("data-headlessui-portal",""),s.appendChild(a)),()=>{u.current=!0,lr((()=>{var e;u.current&&(!s||!a||(a instanceof Node&&s.contains(a)&&s.removeChild(a),s.childNodes.length<=0&&(null==(e=s.parentElement)||e.removeChild(s))))}))}}),[s,a]),l&&s&&a?(0,c.createPortal)(Fn({ourProps:{ref:i},theirProps:n,defaultTag:Vr,name:"Portal"}),a):null})),qr=Vn((function(e,t){let{target:r,...i}=e,o={ref:Jn(t)};return n(m).createElement(Br.Provider,{value:r},Fn({ourProps:o,theirProps:i,defaultTag:$r,name:"Popover.Group"}))})),Wr=Object.assign(Hr,{Group:qr});let Kr=(0,(m=o("acw62")).createContext)(null);function Gr(){let e=(0,m.useContext)(Kr);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Gr),e}return e}function Qr(){let[e,t]=(0,m.useState)([]);return[e.length>0?e.join(" "):void 0,(0,m.useMemo)((()=>function(e){let r=Qn((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),i=(0,m.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n(m).createElement(Kr.Provider,{value:i},e.children)}),[t])]}let Xr="p";let Yr=Vn((function(e,t){let n=ir(),{id:r=`headlessui-description-${n}`,...i}=e,o=Gr(),s=Jn(t);return Kn((()=>o.register(r)),[r,o.register]),Fn({ourProps:{ref:s,...o.props,id:r},theirProps:i,slot:o.slot||{},defaultTag:Xr,name:o.name||"Description"})})),Jr=Object.assign(Yr,{});let Zr=(0,(m=o("acw62")).createContext)(null);Zr.displayName="OpenClosedContext";var ei=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ei||{});function ti(){return(0,m.useContext)(Zr)}function ni({value:e,children:t}){return n(m).createElement(Zr.Provider,{value:e},t)}let ri=(0,(m=o("acw62")).createContext)((()=>{}));ri.displayName="StackContext";var ii=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ii||{});function oi({children:e,onUpdate:t,type:r,element:i,enabled:o}){let s=(0,m.useContext)(ri),a=Qn(((...e)=>{null==t||t(...e),s(...e)}));return Kn((()=>{let e=void 0===o||!0===o;return e&&a(0,r,i),()=>{e&&a(1,r,i)}}),[a,r,i,o]),n(m).createElement(ri.Provider,{value:a},e)}m=o("acw62"),m=o("acw62");function si(e,t,n){let r=Gn(t);(0,m.useEffect)((()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function ai(e,t,n=!0){let r=(0,m.useRef)(!1);function i(n,i){if(!r.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),s=i(n);if(null!==s&&s.getRootNode().contains(s)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(s)||n.composed&&n.composedPath().includes(t))return}return!br(s,yr.Loose)&&-1!==s.tabIndex&&n.preventDefault(),t(n,s)}}(0,m.useEffect)((()=>{requestAnimationFrame((()=>{r.current=n}))}),[n]);let o=(0,m.useRef)(null);si("mousedown",(e=>{var t,n;r.current&&(o.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),si("click",(e=>{o.current&&(i(e,(()=>o.current)),o.current=null)}),!0),si("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}m=o("acw62"),m=o("acw62");const li="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:ui,useEffect:ci,useLayoutEffect:di,useDebugValue:hi}=m;function fi(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!li(n,e)}catch{return!0}}const pi=!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},o]=ui({inst:{value:r,getSnapshot:t}});return di((()=>{i.value=r,i.getSnapshot=t,fi(i)&&o({inst:i})}),[e,r,t]),ci((()=>(fi(i)&&o({inst:i}),e((()=>{fi(i)&&o({inst:i})})))),[e]),hi(r),r},mi="useSyncExternalStore"in m?m.useSyncExternalStore:pi;function gi(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,i=r.clientWidth-r.offsetWidth,o=e-i;n.style(r,"paddingRight",`${o}px`)}}}function vi(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function yi(){if(!vi())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function i(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),s=t.querySelector(r);s&&!i(s)&&(o=s)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)}))}}}function bi(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let wi=function(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...i){let o=t[e].call(n,...i);o&&(n=o,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:ur(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:bi(n)},i=[yi(),gi(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach((({before:e})=>null==e?void 0:e(r))),i.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function Si(e,t,n){let r=mi((s=wi).subscribe,s.getSnapshot,s.getSnapshot),i=e?r.get(e):void 0,o=!!i&&i.count>0;var s;return Kn((()=>{if(e&&t)return wi.dispatch("PUSH",e,n),()=>wi.dispatch("POP",e,n)}),[t,e]),o}wi.subscribe((()=>{let e=wi.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&wi.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&wi.dispatch("TEARDOWN",n)}}));let Ei=new Map,ki=new Map;function xi(e,t=!0){Kn((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let i=null!=(n=ki.get(r))?n:0;return ki.set(r,i+1),0!==i||(Ei.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=ki.get(r))?e:1;if(1===t?ki.delete(r):ki.set(r,t-1),1!==t)return;let n=Ei.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,Ei.delete(r))}}),[e,t])}var Ti=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ti||{}),_i=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(_i||{});let Ci={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},Ii=(0,m.createContext)(null);function Oi(e){let t=(0,m.useContext)(Ii);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Oi),t}return t}function Ni(e,t){return An(t.type,Ci,e,t)}Ii.displayName="DialogContext";let Pi="div",Ai=Mn.RenderStrategy|Mn.Static;let Ri="div";let Di="div";let Li="div";let Mi="h2";let ji=Vn((function(e,t){let r=ir(),{id:i=`headlessui-dialog-${r}`,open:o,onClose:s,initialFocus:a,__demoMode:l=!1,...u}=e,[c,d]=(0,m.useState)(0),h=ti();void 0===o&&null!==h&&(o=(h&ei.Open)===ei.Open);let f=(0,m.useRef)(null),p=Jn(f,t),g=(0,m.useRef)(null),v=Cr(f),y=e.hasOwnProperty("open")||null!==h,b=e.hasOwnProperty("onClose");if(!y&&!b)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!b)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if("function"!=typeof s)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);let w=o?0:1,[S,E]=(0,m.useReducer)(Ni,{titleId:null,descriptionId:null,panelRef:(0,m.createRef)()}),k=Qn((()=>s(!1))),x=Qn((e=>E({type:0,id:e}))),T=!!rr()&&(!l&&0===w),_=c>1,C=null!==(0,m.useContext)(Ii),I=_?"parent":"leaf",O=null!==h&&(h&ei.Closing)===ei.Closing,N=!C&&!O&&T,P=(0,m.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(g.current)&&e instanceof HTMLElement))))?t:null}),[g]);xi(P,N);let A=!!_||T,R=(0,m.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(g.current)&&e instanceof HTMLElement)))?t:null}),[g]);xi(R,A);let D=Qn((()=>{var e,t;return[...Array.from(null!=(e=null==v?void 0:v.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(g.current)||S.panelRef.current&&e.contains(S.panelRef.current)))),null!=(t=S.panelRef.current)?t:f.current]}));ai((()=>D()),k,!(!T||_));let L=!(_||0!==w);Ir(null==v?void 0:v.defaultView,"keydown",(e=>{L&&(e.defaultPrevented||e.key===er.Escape&&(e.preventDefault(),e.stopPropagation(),k()))})),function(e,t,n=(()=>[document.body])){Si(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(v,!(O||0!==w||C),D),(0,m.useEffect)((()=>{if(0!==w||!f.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&k()}}));return e.observe(f.current),()=>e.disconnect()}),[w,f,k]);let[M,j]=Qr(),F=(0,m.useMemo)((()=>[{dialogState:w,close:k,setTitleId:x},S]),[w,S,k,x]),U=(0,m.useMemo)((()=>({open:0===w})),[w]),z={ref:p,id:i,role:"dialog","aria-modal":0===w||void 0,"aria-labelledby":S.titleId,"aria-describedby":M};return n(m).createElement(oi,{type:"Dialog",enabled:0===w,element:f,onUpdate:Qn(((e,t)=>{"Dialog"===t&&An(e,{[ii.Add]:()=>d((e=>e+1)),[ii.Remove]:()=>d((e=>e-1))})}))},n(m).createElement(Ur,{force:!0},n(m).createElement(Wr,null,n(m).createElement(Ii.Provider,{value:F},n(m).createElement(Wr.Group,{target:f},n(m).createElement(Ur,{force:!1},n(m).createElement(j,{slot:U,name:"Dialog.Description"},n(m).createElement(Lr,{initialFocus:a,containers:D,features:T?An(I,{parent:Lr.features.RestoreFocus,leaf:Lr.features.All&~Lr.features.FocusLock}):Lr.features.None},Fn({ourProps:z,theirProps:u,slot:U,defaultTag:Pi,features:Ai,visible:0===w,name:"Dialog"})))))))),n(m).createElement(ar,{features:sr.Hidden,ref:g}))})),Fi=Vn((function(e,t){let r=ir(),{id:i=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:s},a]=Oi("Dialog.Backdrop"),l=Jn(t);(0,m.useEffect)((()=>{if(null===a.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[a.panelRef]);let u=(0,m.useMemo)((()=>({open:0===s})),[s]);return n(m).createElement(Ur,{force:!0},n(m).createElement(Wr,null,Fn({ourProps:{ref:l,id:i,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Di,name:"Dialog.Backdrop"})))})),Ui=Vn((function(e,t){let n=ir(),{id:r=`headlessui-dialog-panel-${n}`,...i}=e,[{dialogState:o},s]=Oi("Dialog.Panel"),a=Jn(t,s.panelRef),l=(0,m.useMemo)((()=>({open:0===o})),[o]);return Fn({ourProps:{ref:a,id:r,onClick:Qn((e=>{e.stopPropagation()}))},theirProps:i,slot:l,defaultTag:Li,name:"Dialog.Panel"})})),zi=Vn((function(e,t){let n=ir(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=e,[{dialogState:o,close:s}]=Oi("Dialog.Overlay");return Fn({ourProps:{ref:Jn(t),id:r,"aria-hidden":!0,onClick:Qn((e=>{if(e.target===e.currentTarget){if(tr(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}))},theirProps:i,slot:(0,m.useMemo)((()=>({open:0===o})),[o]),defaultTag:Ri,name:"Dialog.Overlay"})})),Vi=Vn((function(e,t){let n=ir(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:o,setTitleId:s}]=Oi("Dialog.Title"),a=Jn(t);(0,m.useEffect)((()=>(s(r),()=>s(null))),[r,s]);let l=(0,m.useMemo)((()=>({open:0===o})),[o]);return Fn({ourProps:{ref:a,id:r},theirProps:i,slot:l,defaultTag:Mi,name:"Dialog.Title"})})),$i=Object.assign(ji,{Backdrop:Fi,Panel:Ui,Overlay:zi,Title:Vi,Description:Jr});m=o("acw62");function Bi(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Hi(e,...t){e&&t.length>0&&e.classList.add(...t)}function qi(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Wi(e,t,n,r){let i=n?"enter":"leave",o=ur(),s=void 0!==r?Bi(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let a=An(i,{enter:()=>t.enter,leave:()=>t.leave}),l=An(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=An(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return qi(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Hi(e,...a,...u),o.nextFrame((()=>{qi(e,...u),Hi(e,...l),function(e,t){let n=ur();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,s]=[r,i].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),a=o+s;if(0!==a){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),a),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(qi(e,...a),Hi(e,...t.entered),s())))})),o.dispose}function Ki({container:e,direction:t,classes:n,onStart:r,onStop:i}){let o=_r(),s=Nr(),a=Gn(t);Kn((()=>{let t=ur();s.add(t.dispose);let l=e.current;if(l&&"idle"!==a.current&&o.current)return t.dispose(),r.current(a.current),t.add(Wi(l,n.current,"enter"===a.current,(()=>{t.dispose(),i.current(a.current)}))),t.dispose}),[t])}function Gi(e=0){let[t,n]=(0,m.useState)(e),r=(0,m.useCallback)((e=>n((t=>t|e))),[t]),i=(0,m.useCallback)((e=>Boolean(t&e)),[t]),o=(0,m.useCallback)((e=>n((t=>t&~e))),[n]),s=(0,m.useCallback)((e=>n((t=>t^e))),[n]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:o,toggleFlag:s}}function Qi(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let Xi=(0,(m=o("acw62")).createContext)(null);Xi.displayName="TransitionContext";var Yi=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Yi||{});let Ji=(0,m.createContext)(null);function Zi(e){return"children"in e?Zi(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function eo(e,t){let n=Gn(e),r=(0,m.useRef)([]),i=_r(),o=Nr(),s=Qn(((e,t=jn.Hidden)=>{let s=r.current.findIndex((({el:t})=>t===e));-1!==s&&(An(t,{[jn.Unmount](){r.current.splice(s,1)},[jn.Hidden](){r.current[s].state="hidden"}}),o.microTask((()=>{var e;!Zi(r)&&i.current&&(null==(e=n.current)||e.call(n))})))})),a=Qn((e=>{let t=r.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>s(e,jn.Unmount)})),l=(0,m.useRef)([]),u=(0,m.useRef)(Promise.resolve()),c=(0,m.useRef)({enter:[],leave:[],idle:[]}),d=Qn(((e,n,r)=>{l.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{l.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(c.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?u.current=u.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),h=Qn(((e,t,n)=>{Promise.all(c.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=l.current.shift())||e()})).then((()=>n(t)))}));return(0,m.useMemo)((()=>({children:r,register:a,unregister:s,onStart:d,onStop:h,wait:u,chains:c})),[a,s,r,d,h,c,u])}function to(){}Ji.displayName="NestingContext";let no=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ro(e){var t;let n={};for(let r of no)n[r]=null!=(t=e[r])?t:to;return n}let io="div",oo=Mn.RenderStrategy;let so=Vn((function(e,t){let{show:r,appear:i=!1,unmount:o,...s}=e,a=(0,m.useRef)(null),l=Jn(a,t);rr();let u=ti();if(void 0===r&&null!==u&&(r=(u&ei.Open)===ei.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,m.useState)(r?"visible":"hidden"),h=eo((()=>{d("hidden")})),[f,p]=(0,m.useState)(!0),g=(0,m.useRef)([r]);Kn((()=>{!1!==f&&g.current[g.current.length-1]!==r&&(g.current.push(r),p(!1))}),[g,r]);let v=(0,m.useMemo)((()=>({show:r,appear:i,initial:f})),[r,i,f]);(0,m.useEffect)((()=>{if(r)d("visible");else if(Zi(h)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")}),[r,h]);let y={unmount:o};return n(m).createElement(Ji.Provider,{value:h},n(m).createElement(Xi.Provider,{value:v},Fn({ourProps:{...y,as:m.Fragment,children:n(m).createElement(ao,{ref:l,...y,...s})},theirProps:{},defaultTag:m.Fragment,features:oo,visible:"visible"===c,name:"Transition"})))})),ao=Vn((function(e,t){let{beforeEnter:r,afterEnter:i,beforeLeave:o,afterLeave:s,enter:a,enterFrom:l,enterTo:u,entered:c,leave:d,leaveFrom:h,leaveTo:f,...p}=e,g=(0,m.useRef)(null),v=Jn(g,t),y=p.unmount?jn.Unmount:jn.Hidden,{show:b,appear:w,initial:S}=function(){let e=(0,m.useContext)(Xi);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[E,k]=(0,m.useState)(b?"visible":"hidden"),x=function(){let e=(0,m.useContext)(Ji);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:T,unregister:_}=x,C=(0,m.useRef)(null);(0,m.useEffect)((()=>T(g)),[T,g]),(0,m.useEffect)((()=>{if(y===jn.Hidden&&g.current)return b&&"visible"!==E?void k("visible"):An(E,{hidden:()=>_(g),visible:()=>T(g)})}),[E,g,T,_,b,y]);let I=Gn({enter:Qi(a),enterFrom:Qi(l),enterTo:Qi(u),entered:Qi(c),leave:Qi(d),leaveFrom:Qi(h),leaveTo:Qi(f)}),O=function(e){let t=(0,m.useRef)(ro(e));return(0,m.useEffect)((()=>{t.current=ro(e)}),[e]),t}({beforeEnter:r,afterEnter:i,beforeLeave:o,afterLeave:s}),N=rr();(0,m.useEffect)((()=>{if(N&&"visible"===E&&null===g.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[g,E,N]);let P=S&&!w,A=!N||P||C.current===b?"idle":b?"enter":"leave",R=Gi(0),D=Qn((e=>An(e,{enter:()=>{R.addFlag(ei.Opening),O.current.beforeEnter()},leave:()=>{R.addFlag(ei.Closing),O.current.beforeLeave()},idle:()=>{}}))),L=Qn((e=>An(e,{enter:()=>{R.removeFlag(ei.Opening),O.current.afterEnter()},leave:()=>{R.removeFlag(ei.Closing),O.current.afterLeave()},idle:()=>{}}))),M=eo((()=>{k("hidden"),_(g)}),x);Ki({container:g,classes:I,direction:A,onStart:Gn((e=>{M.onStart(g,e,D)})),onStop:Gn((e=>{M.onStop(g,e,L),"leave"===e&&!Zi(M)&&(k("hidden"),_(g))}))}),(0,m.useEffect)((()=>{P&&(y===jn.Hidden?C.current=null:C.current=b)}),[b,P,E]);let j=p,F={ref:v};return w&&b&&Wn.isServer&&(j={...j,className:Rn(p.className,...I.current.enter,...I.current.enterFrom)}),n(m).createElement(Ji.Provider,{value:M},n(m).createElement(ni,{value:An(E,{visible:ei.Open,hidden:ei.Closed})|R.flags},Fn({ourProps:F,theirProps:j,defaultTag:io,features:oo,visible:"visible"===E,name:"Transition.Child"})))})),lo=Vn((function(e,t){let r=null!==(0,m.useContext)(Xi),i=null!==ti();return n(m).createElement(n(m).Fragment,null,!r&&i?n(m).createElement(so,{ref:t,...e}):n(m).createElement(ao,{ref:t,...e}))})),uo=Object.assign(so,{Child:lo,Root:so});for(var co,ho=256,fo=[],po=256;ho--;)fo[ho]=(ho+256).toString(16).substring(1);function mo(e){var t=0,n=e||11;if(!co||ho+n>2*po)for(co="",ho=0;t<po;t++)co+=fo[256*Math.random()|0];return co.substring(ho,ho+++n)}var go={};function vo(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function yo(e){return!!e&&!!e[as]}function bo(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ls}(e)||Array.isArray(e)||!!e[ss]||!!(null===(t=e.constructor)||void 0===t?void 0:t[ss])||_o(e)||Co(e))}function wo(e,t,n){void 0===n&&(n=!1),0===So(e)?(n?Object.keys:us)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function So(e){var t=e[as];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:_o(e)?2:Co(e)?3:0}function Eo(e,t){return 2===So(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ko(e,t){return 2===So(e)?e.get(t):e[t]}function xo(e,t,n){var r=So(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function To(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function _o(e){return ns&&e instanceof Map}function Co(e){return rs&&e instanceof Set}function Io(e){return e.o||e.t}function Oo(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=cs(e);delete t[as];for(var n=us(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function No(e,t){return void 0===t&&(t=!1),Ao(e)||yo(e)||!bo(e)||(So(e)>1&&(e.set=e.add=e.clear=e.delete=Po),Object.freeze(e),t&&wo(e,(function(e,t){return No(t,!0)}),!0)),e}function Po(){vo(2)}function Ao(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Ro(e){var t=ds[e];return t||vo(18,e),t}function Do(e,t){ds[e]||(ds[e]=t)}function Lo(){return es}function Mo(e,t){t&&(Ro("Patches"),e.u=[],e.s=[],e.v=t)}function jo(e){Fo(e),e.p.forEach(zo),e.p=null}function Fo(e){e===es&&(es=e.l)}function Uo(e){return es={p:[],l:es,h:e,m:!0,_:0}}function zo(e){var t=e[as];0===t.i||1===t.i?t.j():t.O=!0}function Vo(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||Ro("ES5").S(t,e,r),r?(n[as].P&&(jo(t),vo(4)),bo(e)&&(e=$o(t,e),t.l||Ho(t,e)),t.u&&Ro("Patches").M(n[as].t,e,t.u,t.s)):e=$o(t,n,[]),jo(t),t.u&&t.v(t.u,t.s),e!==os?e:void 0}function $o(e,t,n){if(Ao(t))return t;var r=t[as];if(!r)return wo(t,(function(i,o){return Bo(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return Ho(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=Oo(r.k):r.o,o=i,s=!1;3===r.i&&(o=new Set(i),i.clear(),s=!0),wo(o,(function(t,o){return Bo(e,r,i,t,o,n,s)})),Ho(e,i,!1),n&&e.u&&Ro("Patches").N(r,n,e.u,e.s)}return r.o}function Bo(e,t,n,r,i,o,s){if(yo(i)){var a=$o(e,i,o&&t&&3!==t.i&&!Eo(t.R,r)?o.concat(r):void 0);if(xo(n,r,a),!yo(a))return;e.m=!1}else s&&n.add(i);if(bo(i)&&!Ao(i)){if(!e.h.D&&e._<1)return;$o(e,i),t&&t.A.l||Ho(e,i)}}function Ho(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&No(t,n)}function qo(e,t){var n=e[as];return(n?Io(n):e)[t]}function Wo(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ko(e){e.P||(e.P=!0,e.l&&Ko(e.l))}function Go(e){e.o||(e.o=Oo(e.t))}function Qo(e,t,n){var r=_o(t)?Ro("MapSet").F(t,n):Co(t)?Ro("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:Lo(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=hs;n&&(i=[r],o=fs);var s=Proxy.revocable(i,o),a=s.revoke,l=s.proxy;return r.k=l,r.j=a,l}(t,n):Ro("ES5").J(t,n);return(n?n.A:Lo()).p.push(r),r}function Xo(e){return yo(e)||vo(22,e),function e(t){if(!bo(t))return t;var n,r=t[as],i=So(t);if(r){if(!r.P&&(r.i<4||!Ro("ES5").K(r)))return r.t;r.I=!0,n=Yo(t,i),r.I=!1}else n=Yo(t,i);return wo(n,(function(t,i){r&&ko(r.t,t)===i||xo(n,t,e(i))})),3===i?new Set(n):n}(e)}function Yo(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Oo(e)}function Jo(){function e(e,t){var n=i[e];return n?n.enumerable=t:i[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[as];return hs.get(t,e)},set:function(t){var n=this[as];hs.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][as];if(!i.P)switch(i.i){case 5:r(i)&&Ko(i);break;case 4:n(i)&&Ko(i)}}}function n(e){for(var t=e.t,n=e.k,r=us(n),i=r.length-1;i>=0;i--){var o=r[i];if(o!==as){var s=t[o];if(void 0===s&&!Eo(t,o))return!0;var a=n[o],l=a&&a[as];if(l?l.t!==s:!To(a,s))return!0}}var u=!!t[as];return r.length!==us(t).length+(u?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var i={};Do("ES5",{J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var o=cs(n);delete o[as];for(var s=us(o),a=0;a<s.length;a++){var l=s[a];o[l]=e(l,t||!!o[l].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(r,t),o={i:r?5:4,A:n?n.A:Lo(),P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,as,{value:o,writable:!0}),i},S:function(e,n,i){i?yo(n)&&n[as].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[as];if(n){var i=n.t,o=n.k,s=n.R,a=n.i;if(4===a)wo(o,(function(t){t!==as&&(void 0!==i[t]||Eo(i,t)?s[t]||e(o[t]):(s[t]=!0,Ko(n)))})),wo(i,(function(e){void 0!==o[e]||Eo(o,e)||(s[e]=!1,Ko(n))}));else if(5===a){if(r(n)&&(Ko(n),s.length=!0),o.length<i.length)for(var l=o.length;l<i.length;l++)s[l]=!1;else for(var u=i.length;u<o.length;u++)s[u]=!0;for(var c=Math.min(o.length,i.length),d=0;d<c;d++)o.hasOwnProperty(d)||(s[d]=!0),void 0===s[d]&&e(o[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}e(go,"applyMiddleware",(()=>As),(e=>As=e)),e(go,"combineReducers",(()=>Ns),(e=>Ns=e)),e(go,"compose",(()=>Ps),(e=>Ps=e)),e(go,"createStore",(()=>Os),(e=>Os=e)),e(go,"configureStore",(()=>va),(e=>va=e)),e(go,"createSlice",(()=>wa),(e=>wa=e)),e(go,"createAsyncThunk",(()=>_a),(e=>_a=e));var Zo,es,ts="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),ns="undefined"!=typeof Map,rs="undefined"!=typeof Set,is="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,os=ts?Symbol.for("immer-nothing"):((Zo={})["immer-nothing"]=!0,Zo),ss=ts?Symbol.for("immer-draftable"):"__$immer_draftable",as=ts?Symbol.for("immer-state"):"__$immer_state",ls=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),us="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,cs=Object.getOwnPropertyDescriptors||function(e){var t={};return us(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},ds={},hs={get:function(e,t){if(t===as)return e;var n=Io(e);if(!Eo(n,t))return function(e,t,n){var r,i=Wo(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!bo(r)?r:r===qo(e.t,t)?(Go(e),e.o[t]=Qo(e.A.h,r,e)):r},has:function(e,t){return t in Io(e)},ownKeys:function(e){return Reflect.ownKeys(Io(e))},set:function(e,t,n){var r=Wo(Io(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=qo(Io(e),t),o=null==i?void 0:i[as];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(To(n,i)&&(void 0!==n||Eo(e.t,t)))return!0;Go(e),Ko(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==qo(e.t,t)||t in e.t?(e.R[t]=!1,Go(e),Ko(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Io(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){vo(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){vo(12)}},fs={};wo(hs,(function(e,t){fs[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),fs.deleteProperty=function(e,t){return fs.set.call(this,e,t,void 0)},fs.set=function(e,t,n){return hs.set.call(this,e[0],t,n,e[0])};var ps=function(){function e(e){var t=this;this.g=is,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=i);for(var r=arguments.length,s=Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(s))}))}}var s;if("function"!=typeof n&&vo(6),void 0!==r&&"function"!=typeof r&&vo(7),bo(e)){var a=Uo(t),l=Qo(t,e,void 0),u=!0;try{s=n(l),u=!1}finally{u?jo(a):Fo(a)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(e){return Mo(a,r),Vo(e,a)}),(function(e){throw jo(a),e})):(Mo(a,r),Vo(s,a))}if(!e||"object"!=typeof e){if(void 0===(s=n(e))&&(s=e),s===os&&(s=void 0),t.D&&No(s,!0),r){var c=[],d=[];Ro("Patches").M(e,s,c,d),r(c,d)}return s}vo(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))};var r,i,o=t.produce(e,n,(function(e,t){r=e,i=t}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return[e,r,i]})):[o,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){bo(e)||vo(8),yo(e)&&(e=Xo(e));var t=Uo(this),n=Qo(this,e,void 0);return n[as].C=!0,Fo(t),n},t.finishDraft=function(e,t){var n=(e&&e[as]).A;return Mo(n,t),Vo(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!is&&vo(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var i=Ro("Patches").$;return yo(e)?i(e,t):this.produce(e,(function(e){return i(e,t)}))},e}(),ms=new ps,gs=ms.produce,vs=(ms.produceWithPatches.bind(ms),ms.setAutoFreeze.bind(ms),ms.setUseProxies.bind(ms),ms.applyPatches.bind(ms),ms.createDraft.bind(ms),ms.finishDraft.bind(ms),gs);function ys(e){return ys="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ys(e)}function bs(e,t){if("object"!==ys(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==ys(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function ws(e){var t=bs(e,"string");return"symbol"===ys(t)?t:String(t)}function Ss(e,t,n){return(t=ws(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Es(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ks(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Es(Object(n),!0).forEach((function(t){Ss(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Es(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xs(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ts="function"==typeof Symbol&&Symbol.observable||"@@observable",_s=function(){return Math.random().toString(36).substring(7).split("").join(".")},Cs={INIT:"@@redux/INIT"+_s(),REPLACE:"@@redux/REPLACE"+_s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+_s()}};function Is(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Os(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(xs(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(xs(1));return n(Os)(e,t)}if("function"!=typeof e)throw new Error(xs(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(xs(3));return o}function d(e){if("function"!=typeof e)throw new Error(xs(4));if(l)throw new Error(xs(5));var t=!0;return u(),a.push(e),function(){if(t){if(l)throw new Error(xs(6));t=!1,u();var n=a.indexOf(e);a.splice(n,1),s=null}}}function h(e){if(!Is(e))throw new Error(xs(7));if(void 0===e.type)throw new Error(xs(8));if(l)throw new Error(xs(9));try{l=!0,o=i(o,e)}finally{l=!1}for(var t=s=a,n=0;n<t.length;n++){(0,t[n])()}return e}return h({type:Cs.INIT}),(r={dispatch:h,subscribe:d,getState:c,replaceReducer:function(e){if("function"!=typeof e)throw new Error(xs(10));i=e,h({type:Cs.REPLACE})}})[Ts]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(xs(11));function n(){e.next&&e.next(c())}return n(),{unsubscribe:t(n)}}})[Ts]=function(){return this},e},r}function Ns(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var o,s=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:Cs.INIT}))throw new Error(xs(12));if(void 0===n(void 0,{type:Cs.PROBE_UNKNOWN_ACTION()}))throw new Error(xs(13))}))}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<s.length;a++){var l=s[a],u=n[l],c=e[l],d=u(c,t);if(void 0===d){t&&t.type;throw new Error(xs(14))}i[l]=d,r=r||d!==c}return(r=r||s.length!==Object.keys(e).length)?i:e}}function Ps(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function As(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(xs(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return r=Ps.apply(void 0,o)(n.dispatch),ks(ks({},n),{},{dispatch:r})}}}function Rs(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var Ds=Rs();Ds.withExtraArgument=Rs;var Ls,Ms,js=Ds,Fs={},Us=Fs={};function zs(){throw new Error("setTimeout has not been defined")}function Vs(){throw new Error("clearTimeout has not been defined")}function $s(e){if(Ls===setTimeout)return setTimeout(e,0);if((Ls===zs||!Ls)&&setTimeout)return Ls=setTimeout,setTimeout(e,0);try{return Ls(e,0)}catch(t){try{return Ls.call(null,e,0)}catch(t){return Ls.call(this,e,0)}}}!function(){try{Ls="function"==typeof setTimeout?setTimeout:zs}catch(e){Ls=zs}try{Ms="function"==typeof clearTimeout?clearTimeout:Vs}catch(e){Ms=Vs}}();var Bs,Hs=[],qs=!1,Ws=-1;function Ks(){qs&&Bs&&(qs=!1,Bs.length?Hs=Bs.concat(Hs):Ws=-1,Hs.length&&Gs())}function Gs(){if(!qs){var e=$s(Ks);qs=!0;for(var t=Hs.length;t;){for(Bs=Hs,Hs=[];++Ws<t;)Bs&&Bs[Ws].run();Ws=-1,t=Hs.length}Bs=null,qs=!1,function(e){if(Ms===clearTimeout)return clearTimeout(e);if((Ms===Vs||!Ms)&&clearTimeout)return Ms=clearTimeout,clearTimeout(e);try{Ms(e)}catch(t){try{return Ms.call(null,e)}catch(t){return Ms.call(this,e)}}}(e)}}function Qs(e,t){this.fun=e,this.array=t}function Xs(){}Us.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Hs.push(new Qs(e,t)),1!==Hs.length||qs||$s(Gs)},Qs.prototype.run=function(){this.fun.apply(null,this.array)},Us.title="browser",Us.browser=!0,Us.env={},Us.argv=[],Us.version="",Us.versions={},Us.on=Xs,Us.addListener=Xs,Us.once=Xs,Us.off=Xs,Us.removeListener=Xs,Us.removeAllListeners=Xs,Us.emit=Xs,Us.prependListener=Xs,Us.prependOnceListener=Xs,Us.listeners=function(e){return[]},Us.binding=function(e){throw new Error("process.binding is not supported")},Us.cwd=function(){return"/"},Us.chdir=function(e){throw new Error("process.chdir is not supported")},Us.umask=function(){return 0};var Ys,Js=(Ys=function(e,t){return Ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ys(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Ys(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Zs=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},ea=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},ta=Object.defineProperty,na=Object.defineProperties,ra=Object.getOwnPropertyDescriptors,ia=Object.getOwnPropertySymbols,oa=Object.prototype.hasOwnProperty,sa=Object.prototype.propertyIsEnumerable,aa=function(e,t,n){return t in e?ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},la=function(e,t){for(var n in t||(t={}))oa.call(t,n)&&aa(e,n,t[n]);if(ia)for(var r=0,i=ia(t);r<i.length;r++){n=i[r];sa.call(t,n)&&aa(e,n,t[n])}return e},ua=function(e,t){return na(e,ra(t))},ca=function(e,t,n){return new Promise((function(r,i){var o=function(e){try{a(n.next(e))}catch(e){i(e)}},s=function(e){try{a(n.throw(e))}catch(e){i(e)}},a=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(o,s)};a((n=n.apply(e,t)).next())}))},da="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?Ps:Ps.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function ha(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}var fa=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Js(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ea([void 0],e[0].concat(this)))):new(t.bind.apply(t,ea([void 0],e.concat(this))))},t}(Array);function pa(e){return bo(e)?vs(e,(function(){})):e}function ma(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,n=void 0===t||t,r=(e.immutableCheck,e.serializableCheck,new fa);n&&("boolean"==typeof n?r.push(js):r.push(js.withExtraArgument(n.extraArgument)));return r}(e)}}var ga=!0;function va(e){var t,n=ma(),r=e||{},i=r.reducer,o=void 0===i?void 0:i,s=r.middleware,a=void 0===s?n():s,l=r.devTools,u=void 0===l||l,c=r.preloadedState,d=void 0===c?void 0:c,h=r.enhancers,f=void 0===h?void 0:h;if("function"==typeof o)t=o;else{if(!ha(o))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=Ns(o)}var p=a;if("function"==typeof p&&(p=p(n),!ga&&!Array.isArray(p)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!ga&&p.some((function(e){return"function"!=typeof e})))throw new Error("each middleware provided to configureStore must be a function");var m=As.apply(void 0,p),g=Ps;u&&(g=da(la({trace:!ga},"object"==typeof u&&u)));var v=[m];return Array.isArray(f)?v=ea([m],f):"function"==typeof f&&(v=f(v)),Os(t,d,g.apply(void 0,v))}function ya(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return la(la({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function ba(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function wa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n,r="function"==typeof e.initialState?e.initialState:pa(e.initialState),i=e.reducers||{},o=Object.keys(i),s={},a={},l={};function u(){var t="function"==typeof e.extraReducers?ba(e.extraReducers):[e.extraReducers],n=t[0],i=void 0===n?{}:n,o=t[1],s=void 0===o?[]:o,l=t[2],u=void 0===l?void 0:l,c=la(la({},i),a);return function(e,t,n,r){void 0===n&&(n=[]);var i,o="function"==typeof t?ba(t):[t,n,r],s=o[0],a=o[1],l=o[2];if("function"==typeof e)i=function(){return pa(e())};else{var u=pa(e);i=function(){return u}}function c(e,t){void 0===e&&(e=i());var n=ea([s[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[l]),n.reduce((function(e,n){if(n){var r;if(yo(e))return void 0===(r=n(e,t))?e:r;if(bo(e))return vs(e,(function(e){return n(e,t)}));if(void 0===(r=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return c.getInitialState=i,c}(r,(function(e){for(var t in c)e.addCase(t,c[t]);for(var n=0,r=s;n<r.length;n++){var i=r[n];e.addMatcher(i.matcher,i.reducer)}u&&e.addDefaultCase(u)}))}return o.forEach((function(e){var n,r,o=i[e],u=t+"/"+e;"reducer"in o?(n=o.reducer,r=o.prepare):n=o,s[e]=n,a[u]=n,l[e]=r?ya(u,r):ya(u)})),{name:t,reducer:function(e,t){return n||(n=u()),n(e,t)},actions:l,caseReducers:s,getInitialState:function(){return n||(n=u()),n.getInitialState()}}}var Sa=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},Ea=["name","message","stack","code"],ka=function(e,t){this.payload=e,this.meta=t},xa=function(e,t){this.payload=e,this.meta=t},Ta=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0,r=Ea;n<r.length;n++){var i=r[n];"string"==typeof e[i]&&(t[i]=e[i])}return t}return{message:String(e)}},_a=function(){function e(e,t,n){var r=ya(e+"/fulfilled",(function(e,t,n,r){return{payload:e,meta:ua(la({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}})),i=ya(e+"/pending",(function(e,t,n){return{payload:void 0,meta:ua(la({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),o=ya(e+"/rejected",(function(e,t,r,i,o){return{payload:i,error:(n&&n.serializeError||Ta)(e||"Rejected"),meta:ua(la({},o||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),s="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(a,l,u){var c,d=(null==n?void 0:n.idGenerator)?n.idGenerator(e):Sa(),h=new s;function f(e){c=e,h.abort()}var p=function(){return ca(this,null,(function(){var s,p,m,g,v,y;return Zs(this,(function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),g=null==(s=null==n?void 0:n.condition)?void 0:s.call(n,e,{getState:l,extra:u}),null===(w=g)||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return!0,v=new Promise((function(e,t){return h.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:c||"Aborted"})}))})),a(i(d,e,null==(p=null==n?void 0:n.getPendingMeta)?void 0:p.call(n,{requestId:d,arg:e},{getState:l,extra:u}))),[4,Promise.race([v,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:d,signal:h.signal,abort:f,rejectWithValue:function(e,t){return new ka(e,t)},fulfillWithValue:function(e,t){return new xa(e,t)}})).then((function(t){if(t instanceof ka)throw t;return t instanceof xa?r(t.payload,d,e,t.meta):r(t,d,e)}))])];case 3:return m=b.sent(),[3,5];case 4:return y=b.sent(),m=y instanceof ka?o(null,d,e,y.payload,y.meta):o(y,d,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&o.match(m)&&m.meta.condition||a(m),[2,m]}var w}))}))}();return Object.assign(p,{abort:f,requestId:d,arg:e,unwrap:function(){return p.then(Ca)}})}}),{pending:i,rejected:o,fulfilled:r,typePrefix:e})}return e.withTypes=function(){return e},e}();function Ca(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var Ia="listenerMiddleware";ya(Ia+"/add"),ya(Ia+"/removeAll"),ya(Ia+"/remove");"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==t?t:globalThis);var Oa,Na=function(e){return function(t){setTimeout(t,e)}};"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Na(10);Jo();
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
const Pa=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw new Ra;const l=i<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ra extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Da=function(e){return function(e){const t=Pa(e);return Aa.encodeByteArray(t,!0)}(e).replace(/\./g,"")},La=function(e){try{return Aa.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Ma=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ja=()=>{try{return Ma()||(()=>{if(void 0===Fs||void 0===Fs.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&La(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Fa=e=>{var t,n;return null===(n=null===(t=ja())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Ua=e=>{const t=Fa(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},za=()=>{var e;return null===(e=ja())||void 0===e?void 0:e.config},Va=e=>{var t;return null===(t=ja())||void 0===t?void 0:t[`_${e}`]};
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
class $a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function Ba(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Da(JSON.stringify({alg:"none",type:"JWT"})),Da(JSON.stringify(o)),""].join(".")}
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
 */function Ha(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qa(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Wa(){const e=Ha();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ka(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Ga(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Qa(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class Xa extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Xa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(Ja,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new Xa(r,s,n)}}const Ja=/\{\$([^}]+)}/g;
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
 */function Za(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function el(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(tl(n)&&tl(o)){if(!el(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function tl(e){return null!==e&&"object"==typeof e}
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
function nl(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rl(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function il(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function ol(e,t){const n=new sl(e,t);return n.subscribe.bind(n)}class sl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=al),void 0===r.error&&(r.error=al),void 0===r.complete&&(r.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function al(){}
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
const ll=1e3,ul=2,cl=144e5,dl=.5;function hl(e,t=ll,n=ul){const r=t*Math.pow(n,e),i=Math.round(dl*r*(Math.random()-.5)*2);return Math.min(cl,r+i)}
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
function fl(e){return e&&e._delegate?e._delegate:e}class pl{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const ml="[DEFAULT]";
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
 */class gl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new $a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:ml})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ml){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ml){return this.instances.has(e)}getOptions(e=ml){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===ml?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=ml){return this.component?this.component.multipleInstances?e:ml:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class vl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const yl=[];var bl,wl;(wl=bl||(bl={}))[wl.DEBUG=0]="DEBUG",wl[wl.VERBOSE=1]="VERBOSE",wl[wl.INFO=2]="INFO",wl[wl.WARN=3]="WARN",wl[wl.ERROR=4]="ERROR",wl[wl.SILENT=5]="SILENT";const Sl={debug:bl.DEBUG,verbose:bl.VERBOSE,info:bl.INFO,warn:bl.WARN,error:bl.ERROR,silent:bl.SILENT},El=bl.INFO,kl={[bl.DEBUG]:"log",[bl.VERBOSE]:"log",[bl.INFO]:"info",[bl.WARN]:"warn",[bl.ERROR]:"error"},xl=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=kl[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Tl{constructor(e){this.name=e,this._logLevel=El,this._logHandler=xl,this._userLogHandler=null,yl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in bl))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Sl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,bl.DEBUG,...e),this._logHandler(this,bl.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,bl.VERBOSE,...e),this._logHandler(this,bl.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,bl.INFO,...e),this._logHandler(this,bl.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,bl.WARN,...e),this._logHandler(this,bl.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,bl.ERROR,...e),this._logHandler(this,bl.ERROR,...e)}}const _l=(e,t)=>t.some((t=>e instanceof t));let Cl,Il;const Ol=new WeakMap,Nl=new WeakMap,Pl=new WeakMap,Al=new WeakMap,Rl=new WeakMap;let Dl={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Nl.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Pl.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jl(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ll(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Il||(Il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Fl(this),t),jl(Ol.get(this))}:function(...t){return jl(e.apply(Fl(this),t))}:function(t,...n){const r=e.call(Fl(this),t,...n);return Pl.set(r,t.sort?t.sort():[t]),jl(r)}}function Ml(e){return"function"==typeof e?Ll(e):(e instanceof IDBTransaction&&function(e){if(Nl.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Nl.set(e,t)}(e),_l(e,Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Dl):e)}function jl(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(jl(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Ol.set(t,e)})).catch((()=>{})),Rl.set(t,e),t}(e);if(Al.has(e))return Al.get(e);const t=Ml(e);return t!==e&&(Al.set(e,t),Rl.set(t,e)),t}const Fl=e=>Rl.get(e);function Ul(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=jl(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(jl(s.result),e.oldVersion,e.newVersion,jl(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const zl=["get","getKey","getAll","getAllKeys","count"],Vl=["put","add","delete","clear"],$l=new Map;function Bl(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if($l.get(t))return $l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Vl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!zl.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return $l.set(t,o),o}Dl=(e=>({...e,get:(t,n,r)=>Bl(t,n)||e.get(t,n,r),has:(t,n)=>!!Bl(t,n)||e.has(t,n)}))(Dl);
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
class Hl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ql="@firebase/app",Wl="0.9.5",Kl=new Tl("@firebase/app"),Gl="[DEFAULT]",Ql={[ql]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Xl=new Map,Yl=new Map;function Jl(e,t){try{e.container.addComponent(t)}catch(n){Kl.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zl(e){const t=e.name;if(Yl.has(t))return Kl.debug(`There were multiple attempts to register component ${t}.`),!1;Yl.set(t,e);for(const t of Xl.values())Jl(t,e);return!0}function eu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const tu=new Ya("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class nu{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pl("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tu.create("app-deleted",{appName:this._name})}}
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
 */const ru="9.18.0";function iu(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw tu.create("bad-app-name",{appName:String(i)});if(n||(n=za()),!n)throw tu.create("no-options");const o=Xl.get(i);if(o){if(el(n,o.options)&&el(r,o.config))return o;throw tu.create("duplicate-app",{appName:i})}const s=new vl(i);for(const e of Yl.values())s.addComponent(e);const a=new nu(n,r,s);return Xl.set(i,a),a}function ou(e=Gl){const t=Xl.get(e);if(!t&&e===Gl)return iu();if(!t)throw tu.create("no-app",{appName:e});return t}function su(e,t,n){var r;let i=null!==(r=Ql[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Kl.warn(e.join(" "))}Zl(new pl(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const au="firebase-heartbeat-database",lu=1,uu="firebase-heartbeat-store";let cu=null;function du(){return cu||(cu=Ul(au,lu,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(uu)}}).catch((e=>{throw tu.create("idb-open",{originalErrorMessage:e.message})}))),cu}async function hu(e,t){try{const n=(await du()).transaction(uu,"readwrite"),r=n.objectStore(uu);return await r.put(t,fu(e)),n.done}catch(e){if(e instanceof Xa)Kl.warn(e.message);else{const t=tu.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Kl.warn(t.message)}}}function fu(e){return`${e.name}!${e.options.appId}`}
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
 */const pu=1024;class mu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vu(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=gu();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=gu(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=pu){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),yu(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Da(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gu(){return(new Date).toISOString().substring(0,10)}class vu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ka()&&Ga().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await du()).transaction(uu).objectStore(uu).get(fu(e))}catch(e){if(e instanceof Xa)Kl.warn(e.message);else{const t=tu.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Kl.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return hu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return hu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function yu(e){return Da(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var bu;bu="",Zl(new pl("platform-logger",(e=>new Hl(e)),"PRIVATE")),Zl(new pl("heartbeat",(e=>new mu(e)),"PRIVATE")),su(ql,Wl,bu),su(ql,Wl,"esm2017"),su("fire-js","");var wu,Su="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Eu={},ku=ku||{},xu=Su||self;function Tu(){}function _u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Cu(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Iu="closure_uid_"+(1e9*Math.random()>>>0),Ou=0;function Nu(e,t,n){return e.call.apply(e.bind,arguments)}function Pu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Au(e,t,n){return(Au=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Nu:Pu).apply(null,arguments)}function Ru(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Du(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function Lu(){this.s=this.s,this.o=this.o}Lu.prototype.s=!1,Lu.prototype.na=function(){!this.s&&(this.s=!0,this.M(),0)&&function(e){Object.prototype.hasOwnProperty.call(e,Iu)&&e[Iu]||(e[Iu]=++Ou)}(this)},Lu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ju(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Fu(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(_u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function Uu(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Uu.prototype.h=function(){this.defaultPrevented=!0};var zu=function(){if(!xu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{xu.addEventListener("test",Tu,t),xu.removeEventListener("test",Tu,t)}catch(e){}return e}();function Vu(e){return/^[\s\xa0]*$/.test(e)}var $u=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Bu(e,t){return e<t?-1:e>t?1:0}function Hu(){var e=xu.navigator;return e&&(e=e.userAgent)?e:""}function qu(e){return-1!=Hu().indexOf(e)}function Wu(e){return Wu[" "](e),e}Wu[" "]=Tu;var Ku,Gu=qu("Opera"),Qu=qu("Trident")||qu("MSIE"),Xu=qu("Edge"),Yu=Xu||Qu,Ju=qu("Gecko")&&!(-1!=Hu().toLowerCase().indexOf("webkit")&&!qu("Edge"))&&!(qu("Trident")||qu("MSIE"))&&!qu("Edge"),Zu=-1!=Hu().toLowerCase().indexOf("webkit")&&!qu("Edge");function ec(){var e=xu.document;return e?e.documentMode:void 0}e:{var tc="",nc=function(){var e=Hu();return Ju?/rv:([^\);]+)(\)|;)/.exec(e):Xu?/Edge\/([\d\.]+)/.exec(e):Qu?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Zu?/WebKit\/(\S+)/.exec(e):Gu?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(nc&&(tc=nc?nc[1]:""),Qu){var rc=ec();if(null!=rc&&rc>parseFloat(tc)){Ku=String(rc);break e}}Ku=tc}var ic,oc={};function sc(){return function(e){var t=oc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=$u(String(Ku)).split("."),n=$u("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=Bu(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||Bu(0==i[2].length,0==o[2].length)||Bu(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(xu.document&&Qu){var ac=ec();ic=ac||(parseInt(Ku,10)||void 0)}else ic=void 0;var lc=ic;function uc(e,t){if(Uu.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ju){e:{try{Wu(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:cc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&uc.X.h.call(this)}}Du(uc,Uu);var cc={2:"touch",3:"pen",4:"mouse"};uc.prototype.h=function(){uc.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var dc="closure_listenable_"+(1e6*Math.random()|0),hc=0;function fc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++hc,this.ba=this.ea=!1}function pc(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function mc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function gc(e){const t={};for(const n in e)t[n]=e[n];return t}const vc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yc(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<vc.length;t++)n=vc[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function bc(e){this.src=e,this.g={},this.h=0}function wc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Mu(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(pc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Sc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}bc.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=Sc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):((t=new fc(t,this.src,o,!!r,i)).ea=n,e.push(t)),t};var Ec="closure_lm_"+(1e6*Math.random()|0),kc={};function xc(e,t,n,r,i){if(r&&r.once)return _c(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)xc(e,t[o],n,r,i);return null}return n=Rc(n),e&&e[dc]?e.N(t,n,Cu(r)?!!r.capture:!!r,i):Tc(e,t,n,!1,r,i)}function Tc(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Cu(i)?!!i.capture:!!i,a=Pc(e);if(a||(e[Ec]=a=new bc(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Nc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)zu||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Oc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _c(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)_c(e,t[o],n,r,i);return null}return n=Rc(n),e&&e[dc]?e.O(t,n,Cu(r)?!!r.capture:!!r,i):Tc(e,t,n,!0,r,i)}function Cc(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)Cc(e,t[o],n,r,i);else r=Cu(r)?!!r.capture:!!r,n=Rc(n),e&&e[dc]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Sc(o=e.g[t],n,r,i))&&(pc(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Pc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Sc(t,n,r,i)),(n=-1<e?t[e]:null)&&Ic(n))}function Ic(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[dc])wc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Oc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Pc(t))?(wc(n,e),0==n.h&&(n.src=null,t[Ec]=null)):pc(e)}}}function Oc(e){return e in kc?kc[e]:kc[e]="on"+e}function Nc(e,t){if(e.ba)e=!0;else{t=new uc(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ic(e),e=n.call(r,t)}return e}function Pc(e){return(e=e[Ec])instanceof bc?e:null}var Ac="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rc(e){return"function"==typeof e?e:(e[Ac]||(e[Ac]=function(t){return e.handleEvent(t)}),e[Ac])}function Dc(){Lu.call(this),this.i=new bc(this),this.P=this,this.I=null}function Lc(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Uu(t,e);else if(t instanceof Uu)t.target=t.target||e;else{var i=t;yc(t=new Uu(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Mc(s,r,!0,t)&&i}if(i=Mc(s=t.g=e,r,!0,t)&&i,i=Mc(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=Mc(s=t.g=n[o],r,!1,t)&&i}function Mc(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&wc(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}Du(Dc,Lu),Dc.prototype[dc]=!0,Dc.prototype.removeEventListener=function(e,t,n,r){Cc(this,e,t,n,r)},Dc.prototype.M=function(){if(Dc.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pc(n[r]);delete t.g[e],t.h--}}this.I=null},Dc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Dc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var jc=xu.JSON.stringify;function Fc(){var e=qc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Uc,zc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Vc),(e=>e.reset()));class Vc{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function $c(e){xu.setTimeout((()=>{throw e}),0)}function Bc(e,t){Uc||function(){var e=xu.Promise.resolve(void 0);Uc=function(){e.then(Wc)}}(),Hc||(Uc(),Hc=!0),qc.add(e,t)}var Hc=!1,qc=new class{constructor(){this.h=this.g=null}add(e,t){const n=zc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Wc(){for(var e;e=Fc();){try{e.h.call(e.g)}catch(e){$c(e)}var t=zc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hc=!1}function Kc(e,t){Dc.call(this),this.h=e||1,this.g=t||xu,this.j=Au(this.lb,this),this.l=Date.now()}function Gc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Qc(e,t,n){if("function"==typeof e)n&&(e=Au(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Au(e.handleEvent,e)}return 2147483647<Number(t)?-1:xu.setTimeout(e,t||0)}function Xc(e){e.g=Qc((()=>{e.g=null,e.i&&(e.i=!1,Xc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Du(Kc,Dc),(wu=Kc.prototype).ca=!1,wu.R=null,wu.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Lc(this,"tick"),this.ca&&(Gc(this),this.start()))}},wu.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},wu.M=function(){Kc.X.M.call(this),Gc(this),delete this.g};class Yc extends Lu{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xc(this)}M(){super.M(),this.g&&(xu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jc(e){Lu.call(this),this.h=e,this.g={}}Du(Jc,Lu);var Zc=[];function ed(e,t,n,r){Array.isArray(n)||(n&&(Zc[0]=n.toString()),n=Zc);for(var i=0;i<n.length;i++){var o=xc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function td(e){mc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ic(e)}),e),e.g={}}function nd(){this.g=!0}function rd(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return jc(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Jc.prototype.M=function(){Jc.X.M.call(this),td(this)},Jc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},nd.prototype.Aa=function(){this.g=!1},nd.prototype.info=function(){};var id={},od=null;function sd(){return od=od||new Dc}function ad(e){Uu.call(this,id.Pa,e)}function ld(e){const t=sd();Lc(t,new ad(t))}function ud(e,t){Uu.call(this,id.STAT_EVENT,e),this.stat=t}function cd(e){const t=sd();Lc(t,new ud(t,e))}function dd(e,t){Uu.call(this,id.Qa,e),this.size=t}function hd(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return xu.setTimeout((function(){e()}),t)}id.Pa="serverreachability",Du(ad,Uu),id.STAT_EVENT="statevent",Du(ud,Uu),id.Qa="timingevent",Du(dd,Uu);var fd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function md(){}function gd(e){return e.h||(e.h=e.i())}function vd(){}md.prototype.h=null;var yd,bd={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function wd(){Uu.call(this,"d")}function Sd(){Uu.call(this,"c")}function Ed(){}function kd(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Jc(this),this.O=Td,e=Yu?125:void 0,this.T=new Kc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new xd}function xd(){this.i=null,this.g="",this.h=!1}Du(wd,Uu),Du(Sd,Uu),Du(Ed,md),Ed.prototype.g=function(){return new XMLHttpRequest},Ed.prototype.i=function(){return{}},yd=new Ed;var Td=45e3,_d={},Cd={};function Id(e,t,n){e.K=1,e.v=Kd($d(t)),e.s=n,e.P=!0,Od(e,null)}function Od(e,t){e.F=Date.now(),Rd(e),e.A=$d(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),sh(n.i,"t",r),e.C=0,n=e.l.H,e.h=new xd,e.g=sf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Yc(Au(e.La,e,e.g),e.N)),ed(e.S,e.g,"readystatechange",e.ib),t=e.H?gc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ld(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&"type"==d[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Nd(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Pd(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Ad(e,n),r==Cd){4==t&&(e.o=4,cd(14),i=!1),rd(e.j,e.m,null,"[Incomplete Response]");break}if(r==_d){e.o=4,cd(15),rd(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}rd(e.j,e.m,r,null),Fd(e,r)}Nd(e)&&r!=Cd&&r!=_d&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,cd(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yh(t),t.K=!0,cd(11))):(rd(e.j,e.m,n,"[Invalid Chunked Response]"),jd(e),Md(e))}function Ad(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Cd:(n=Number(t.substring(n,r)),isNaN(n)?_d:(r+=1)+n>t.length?Cd:(t=t.substr(r,n),e.C=r+n,t))}function Rd(e){e.V=Date.now()+e.O,Dd(e,e.O)}function Dd(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=hd(Au(e.gb,e),t)}function Ld(e){e.B&&(xu.clearTimeout(e.B),e.B=null)}function Md(e){0==e.l.G||e.I||ef(e.l,e)}function jd(e){Ld(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Gc(e.T),td(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Fd(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||hh(n.h,e)))if(!e.J&&hh(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zh(n),Bh(n)}Xh(n),cd(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=hd(Au(n.cb,n),6e3));if(1>=dh(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else nf(n,11)}else if((e.J||n.g==e)&&Zh(n),!Vu(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(fh(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Wd(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=e;if((r=n).sa=of(r,r.H?r.ka:null,r.V),s.J){ph(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Ld(a),Rd(a)),r.g=s}else Qh(r);0<n.i.length&&qh(n)}else"stop"!=u[0]&&"close"!=u[0]||nf(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?nf(n,7):$h(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ld()}catch(e){}}function Ud(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(_u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(_u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(_u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(wu=kd.prototype).setTimeout=function(e){this.O=e},wu.ib=function(e){e=e.target;const t=this.L;t&&3==Mh(e)?t.l():this.La(e)},wu.La=function(e){try{if(e==this.g)e:{const c=Mh(this.g);var t=this.g.Ea();this.g.aa();if(!(3>c)&&(3!=c||Yu||this.g&&(this.h.h||this.g.fa()||jh(this.g)))){this.I||4!=c||7==t||ld(),Ld(this);var n=this.g.aa();this.Y=n;t:if(Nd(this)){var r=jh(this.g);e="";var i=r.length,o=4==Mh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){jd(this),Md(this);var s="";break t}this.h.i=new xu.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vu(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,cd(12),jd(this),Md(this);break e}rd(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fd(this,n)}this.P?(Pd(this,c,s),Yu&&this.i&&3==c&&(ed(this.S,this.T,"tick",this.hb),this.T.start())):(rd(this.j,this.m,s,null),Fd(this,s)),4==c&&jd(this),this.i&&!this.I&&(4==c?ef(this.l,this):(this.i=!1,Rd(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,cd(12)):(this.o=0,cd(13)),jd(this),Md(this)}}}catch(e){}},wu.hb=function(){if(this.g){var e=Mh(this.g),t=this.g.fa();this.C<t.length&&(Ld(this),Pd(this,e,t),this.i&&4!=e&&Rd(this))}},wu.cancel=function(){this.I=!0,jd(this)},wu.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(ld(),cd(17)),jd(this),this.o=2,Md(this)):Dd(this,this.V-e)};var zd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vd(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vd){this.h=void 0!==t?t:e.h,Bd(this,e.j),this.s=e.s,this.g=e.g,Hd(this,e.m),this.l=e.l,t=e.i;var n=new nh;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qd(this,n),this.o=e.o}else e&&(n=String(e).match(zd))?(this.h=!!t,Bd(this,n[1]||"",!0),this.s=Gd(n[2]||""),this.g=Gd(n[3]||"",!0),Hd(this,n[4]),this.l=Gd(n[5]||"",!0),qd(this,n[6]||"",!0),this.o=Gd(n[7]||"")):(this.h=!!t,this.i=new nh(null,this.h))}function $d(e){return new Vd(e)}function Bd(e,t,n){e.j=n?Gd(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qd(e,t,n){t instanceof nh?(e.i=t,function(e,t){t&&!e.j&&(rh(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ih(this,t),sh(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Qd(t,eh)),e.i=new nh(t,e.h))}function Wd(e,t,n){e.i.set(t,n)}function Kd(e){return Wd(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gd(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qd(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Xd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xd(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Vd.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qd(t,Yd,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qd(t,Yd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qd(n,"/"==n.charAt(0)?Zd:Jd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qd(n,th)),e.join("")};var Yd=/[#\/\?@]/g,Jd=/[#\?:]/g,Zd=/[#\?]/g,eh=/[#\?@]/g,th=/#/g;function nh(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rh(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ih(e,t){rh(e),t=ah(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oh(e,t){return rh(e),t=ah(e,t),e.g.has(t)}function sh(e,t,n){ih(e,t),0<n.length&&(e.i=null,e.g.set(ah(e,t),ju(n)),e.h+=n.length)}function ah(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(wu=nh.prototype).add=function(e,t){rh(this),this.i=null,e=ah(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},wu.forEach=function(e,t){rh(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},wu.oa=function(){rh(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},wu.W=function(e){rh(this);let t=[];if("string"==typeof e)oh(this,e)&&(t=t.concat(this.g.get(ah(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},wu.set=function(e,t){return rh(this),this.i=null,oh(this,e=ah(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},wu.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},wu.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function lh(e){this.l=e||uh,xu.PerformanceNavigationTiming?e=0<(e=xu.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(xu.g&&xu.g.Ga&&xu.g.Ga()&&xu.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uh=10;function ch(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dh(e){return e.h?1:e.g?e.g.size:0}function hh(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fh(e,t){e.g?e.g.add(t):e.h=t}function ph(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mh(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ju(e.i)}function gh(){}function vh(){this.g=new gh}function yh(e,t,n){const r=n||"";try{Ud(e,(function(e,n){let i=e;Cu(e)&&(i=jc(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function bh(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function wh(e){this.l=e.ac||null,this.j=e.jb||!1}function Sh(e,t){Dc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Eh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},gh.prototype.stringify=function(e){return xu.JSON.stringify(e,void 0)},gh.prototype.parse=function(e){return xu.JSON.parse(e,void 0)},Du(wh,md),wh.prototype.g=function(){return new Sh(this.l,this.j)},wh.prototype.i=function(e){return function(){return e}}({}),Du(Sh,Dc);var Eh=0;function kh(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Th(e)}function Th(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(wu=Sh.prototype).open=function(e,t){if(this.readyState!=Eh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Th(this)},wu.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||xu).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},wu.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xh(this)),this.readyState=Eh},wu.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Th(this)),this.g&&(this.readyState=3,Th(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==xu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kh(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},wu.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xh(this):Th(this),3==this.readyState&&kh(this)}},wu.Va=function(e){this.g&&(this.response=this.responseText=e,xh(this))},wu.Ua=function(e){this.g&&(this.response=e,xh(this))},wu.ga=function(){this.g&&xh(this)},wu.setRequestHeader=function(e,t){this.v.append(e,t)},wu.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},wu.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Sh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var _h=xu.JSON.parse;function Ch(e){Dc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ih,this.K=this.L=!1}Du(Ch,Dc);var Ih="",Oh=/^https?$/i,Nh=["POST","PUT"];function Ph(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ah(e),Dh(e)}function Ah(e){e.D||(e.D=!0,Lc(e,"complete"),Lc(e,"error"))}function Rh(e){if(e.h&&void 0!==ku&&(!e.C[1]||4!=Mh(e)||2!=e.aa()))if(e.v&&4==Mh(e))Qc(e.Ha,0,e);else if(Lc(e,"readystatechange"),4==Mh(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(zd)[1]||null;if(!i&&xu.self&&xu.self.location){var o=xu.self.location.protocol;i=o.substr(0,o.length-1)}r=!Oh.test(i?i.toLowerCase():"")}n=r}if(n)Lc(e,"complete"),Lc(e,"success");else{e.m=6;try{var s=2<Mh(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Ah(e)}}finally{Dh(e)}}}function Dh(e,t){if(e.g){Lh(e);const n=e.g,r=e.C[0]?Tu:null;e.g=null,e.C=null,t||Lc(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Lh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(xu.clearTimeout(e.A),e.A=null)}function Mh(e){return e.g?e.g.readyState:0}function jh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ih:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Fh(e){let t="";return mc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Uh(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Fh(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Wd(e,t,n))}function zh(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vh(e){this.Ca=0,this.i=[],this.j=new nd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=zh("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=zh("baseRetryDelayMs",5e3,e),this.bb=zh("retryDelaySeedMs",1e4,e),this.$a=zh("forwardChannelMaxRetries",2,e),this.ta=zh("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new lh(e&&e.concurrentRequestLimit),this.Fa=new vh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function $h(e){if(Hh(e),3==e.G){var t=e.U++,n=$d(e.F);Wd(n,"SID",e.I),Wd(n,"RID",t),Wd(n,"TYPE","terminate"),Kh(e,n),(t=new kd(e,e.j,t,void 0)).K=2,t.v=Kd($d(n)),n=!1,xu.navigator&&xu.navigator.sendBeacon&&(n=xu.navigator.sendBeacon(t.v.toString(),"")),!n&&xu.Image&&((new Image).src=t.v,n=!0),n||(t.g=sf(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rd(t)}rf(e)}function Bh(e){e.g&&(Yh(e),e.g.cancel(),e.g=null)}function Hh(e){Bh(e),e.u&&(xu.clearTimeout(e.u),e.u=null),Zh(e),e.h.cancel(),e.m&&("number"==typeof e.m&&xu.clearTimeout(e.m),e.m=null)}function qh(e){ch(e.h)||e.m||(e.m=!0,Bc(e.Ja,e),e.C=0)}function Wh(e,t){var n;n=t?t.m:e.U++;const r=$d(e.F);Wd(r,"SID",e.I),Wd(r,"RID",n),Wd(r,"AID",e.T),Kh(e,r),e.o&&e.s&&Uh(r,e.o,e.s),n=new kd(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Gh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),fh(e.h,n),Id(n,r,t)}function Kh(e,t){e.ia&&mc(e.ia,(function(e,n){Wd(t,n,e)})),e.l&&Ud({},(function(e,n){Wd(t,n,e)}))}function Gh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Au(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=t,0>n)t=Math.max(0,i[s].h-100),o=!1;else try{yh(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Qh(e){e.g||e.u||(e.Z=1,Bc(e.Ia,e),e.A=0)}function Xh(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=hd(Au(e.Ia,e),tf(e,e.A)),e.A++,!0)}function Yh(e){null!=e.B&&(xu.clearTimeout(e.B),e.B=null)}function Jh(e){e.g=new kd(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=$d(e.sa);Wd(t,"RID","rpc"),Wd(t,"SID",e.I),Wd(t,"CI",e.L?"0":"1"),Wd(t,"AID",e.T),Wd(t,"TYPE","xmlhttp"),Kh(e,t),e.o&&e.s&&Uh(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kd($d(t)),n.s=null,n.P=!0,Od(n,e)}function Zh(e){null!=e.v&&(xu.clearTimeout(e.v),e.v=null)}function ef(e,t){var n=null;if(e.g==t){Zh(e),Yh(e),e.g=null;var r=2}else{if(!hh(e.h,t))return;n=t.D,ph(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Lc(r=sd(),new dd(r,n)),qh(e)}else Qh(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(dh(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=hd(Au(e.Ja,e,t),tf(e,e.C)),e.C++,0)))}(e,t)||2==r&&Xh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nf(e,5);break;case 4:nf(e,10);break;case 3:nf(e,6);break;default:nf(e,2)}}function tf(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function nf(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Au(e.kb,e);n||(n=new Vd("//www.google.com/images/cleardot.gif"),xu.location&&"http"==xu.location.protocol||Bd(n,"https"),Kd(n)),function(e,t){const n=new nd;if(xu.Image){const r=new Image;r.onload=Ru(bh,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ru(bh,n,r,"TestLoadImage: error",!1,t),r.onabort=Ru(bh,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ru(bh,n,r,"TestLoadImage: timeout",!1,t),xu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else cd(2);e.G=0,e.l&&e.l.va(t),rf(e),Hh(e)}function rf(e){if(e.G=0,e.la=[],e.l){const t=mh(e.h);0==t.length&&0==e.i.length||(Fu(e.la,t),Fu(e.la,e.i),e.h.i.length=0,ju(e.i),e.i.length=0),e.l.ua()}}function of(e,t,n){var r=n instanceof Vd?$d(n):new Vd(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Hd(r,r.m);else{var i=xu.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Vd(null,void 0);r&&Bd(o,r),t&&(o.g=t),i&&Hd(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Wd(r,n,t),Wd(r,"VER",e.ma),Kh(e,r),r}function sf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Ch(new wh({jb:!0})):new Ch(e.ra)).Ka(e.H),t}function af(){}function lf(){if(Qu&&!(10<=Number(lc)))throw Error("Environmental error: no available transport.")}function uf(e,t){Dc.call(this),this.g=new Vh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Vu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vu(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new hf(this)}function cf(e){wd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function df(){Sd.call(this),this.status=1}function hf(e){this.g=e}(wu=Ch.prototype).Ka=function(e){this.L=e},wu.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yd.g(),this.C=this.u?gd(this.u):gd(yd),this.g.onreadystatechange=Au(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Ph(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=xu.FormData&&e instanceof xu.FormData,!(0<=Mu(Nh,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Lh(this),0<this.B&&((this.K=function(e){return Qu&&sc()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Au(this.qa,this)):this.A=Qc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ph(this,e)}},wu.qa=function(){void 0!==ku&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lc(this,"timeout"),this.abort(8))},wu.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Lc(this,"complete"),Lc(this,"abort"),Dh(this))},wu.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dh(this,!0)),Ch.X.M.call(this)},wu.Ha=function(){this.s||(this.F||this.v||this.l?Rh(this):this.fb())},wu.fb=function(){Rh(this)},wu.aa=function(){try{return 2<Mh(this)?this.g.status:-1}catch(e){return-1}},wu.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},wu.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),_h(t)}},wu.Ea=function(){return this.m},wu.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(wu=Vh.prototype).ma=8,wu.G=1,wu.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new kd(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=gc(o),yc(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Gh(this,i,t),Wd(n=$d(this.F),"RID",e),Wd(n,"CVER",22),this.D&&Wd(n,"X-HTTP-Session-Id",this.D),Kh(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(Fh(o)))+"&"+t:this.o&&Uh(n,this.o,o)),fh(this.h,i),this.Ya&&Wd(n,"TYPE","init"),this.O?(Wd(n,"$req",t),Wd(n,"SID","null"),i.Z=!0,Id(i,n,null)):Id(i,n,t),this.G=2}}else 3==this.G&&(e?Wh(this,e):0==this.i.length||ch(this.h)||Wh(this))},wu.Ia=function(){if(this.u=null,Jh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=hd(Au(this.eb,this),e)}},wu.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,cd(10),Bh(this),Jh(this))},wu.cb=function(){null!=this.v&&(this.v=null,Bh(this),Xh(this),cd(19))},wu.kb=function(e){e?(this.j.info("Successfully pinged google.com"),cd(2)):(this.j.info("Failed to ping google.com"),cd(1))},(wu=af.prototype).xa=function(){},wu.wa=function(){},wu.va=function(){},wu.ua=function(){},wu.Ra=function(){},lf.prototype.g=function(e,t){return new uf(e,t)},Du(uf,Dc),uf.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;cd(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=of(e,null,e.V),qh(e)},uf.prototype.close=function(){$h(this.g)},uf.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=jc(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&qh(t)},uf.prototype.M=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,uf.X.M.call(this)},Du(cf,wd),Du(df,Sd),Du(hf,af),hf.prototype.xa=function(){Lc(this.g,"a")},hf.prototype.wa=function(e){Lc(this.g,new cf(e))},hf.prototype.va=function(e){Lc(this.g,new df)},hf.prototype.ua=function(){Lc(this.g,"b")},lf.prototype.createWebChannel=lf.prototype.g,uf.prototype.send=uf.prototype.u,uf.prototype.open=uf.prototype.m,uf.prototype.close=uf.prototype.close,fd.NO_ERROR=0,fd.TIMEOUT=8,fd.HTTP_ERROR=6,pd.COMPLETE="complete",vd.EventType=bd,bd.OPEN="a",bd.CLOSE="b",bd.ERROR="c",bd.MESSAGE="d",Dc.prototype.listen=Dc.prototype.N,Ch.prototype.listenOnce=Ch.prototype.O,Ch.prototype.getLastError=Ch.prototype.Oa,Ch.prototype.getLastErrorCode=Ch.prototype.Ea,Ch.prototype.getStatus=Ch.prototype.aa,Ch.prototype.getResponseJson=Ch.prototype.Sa,Ch.prototype.getResponseText=Ch.prototype.fa,Ch.prototype.send=Ch.prototype.da,Ch.prototype.setWithCredentials=Ch.prototype.Ka;var ff=Eu.createWebChannelTransport=function(){return new lf},pf=Eu.getStatEventTarget=function(){return sd()},mf=Eu.ErrorCode=fd,gf=Eu.EventType=pd,vf=Eu.Event=id,yf=Eu.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bf=Eu.FetchXmlHttpFactory=wh,wf=Eu.WebChannel=vd,Sf=Eu.XhrIo=Ch;const Ef="@firebase/firestore";
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
 */class kf{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kf.UNAUTHENTICATED=new kf(null),kf.GOOGLE_CREDENTIALS=new kf("google-credentials-uid"),kf.FIRST_PARTY=new kf("first-party-uid"),kf.MOCK_USER=new kf("mock-user");
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
let xf="9.18.0";
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
 */const Tf=new Tl("@firebase/firestore");function _f(){return Tf.logLevel}function Cf(e,...t){if(Tf.logLevel<=bl.DEBUG){const n=t.map(Nf);Tf.debug(`Firestore (${xf}): ${e}`,...n)}}function If(e,...t){if(Tf.logLevel<=bl.ERROR){const n=t.map(Nf);Tf.error(`Firestore (${xf}): ${e}`,...n)}}function Of(e,...t){if(Tf.logLevel<=bl.WARN){const n=t.map(Nf);Tf.warn(`Firestore (${xf}): ${e}`,...n)}}function Nf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function Pf(e="Unexpected state"){const t=`FIRESTORE (${xf}) INTERNAL ASSERTION FAILED: `+e;throw If(t),new Error(t)}function Af(e,t){e||Pf()}function Rf(e,t){return e}
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
 */const Df={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Lf extends Xa{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Mf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class jf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ff{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(kf.UNAUTHENTICATED)))}shutdown(){}}class Uf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zf{constructor(e){this.t=e,this.currentUser=kf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Mf;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mf,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{Cf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Cf("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mf)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Cf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Af("string"==typeof t.accessToken),new jf(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Af(null===e||"string"==typeof e),new kf(e)}}class Vf{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=kf.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Af(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class $f{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Vf(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(kf.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Cf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Cf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Cf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Cf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Af("string"==typeof e.token),this.A=e.token,new Bf(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function qf(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Wf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=qf(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Kf(e,t){return e<t?-1:e>t?1:0}function Gf(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Qf{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Lf(Df.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Lf(Df.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Lf(Df.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Lf(Df.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qf.fromMillis(Date.now())}static fromDate(e){return Qf.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Qf(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Kf(this.nanoseconds,e.nanoseconds):Kf(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Xf{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xf(e)}static min(){return new Xf(new Qf(0,0))}static max(){return new Xf(new Qf(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Yf{constructor(e,t,n){void 0===t?t=0:t>e.length&&Pf(),void 0===n?n=e.length-t:n>e.length-t&&Pf(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Yf.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yf?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Jf extends Yf{construct(e,t,n){return new Jf(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Lf(Df.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Jf(t)}static emptyPath(){return new Jf([])}}const Zf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ep extends Yf{construct(e,t,n){return new ep(e,t,n)}static isValidIdentifier(e){return Zf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ep.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ep(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Lf(Df.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Lf(Df.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Lf(Df.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new Lf(Df.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ep(t)}static emptyPath(){return new ep([])}}
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
 */class tp{constructor(e){this.path=e}static fromPath(e){return new tp(Jf.fromString(e))}static fromName(e){return new tp(Jf.fromString(e).popFirst(5))}static empty(){return new tp(Jf.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Jf.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Jf.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new tp(new Jf(e.slice()))}}
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
 */class np{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}np.UNKNOWN_ID=-1;function rp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Xf.fromTimestamp(1e9===r?new Qf(n+1,0):new Qf(n,r));return new op(i,tp.empty(),t)}function ip(e){return new op(e.readTime,e.key,-1)}class op{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new op(Xf.min(),tp.empty(),-1)}static max(){return new op(Xf.max(),tp.empty(),-1)}}function sp(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=tp.comparator(e.documentKey,t.documentKey),0!==n?n:Kf(e.largestBatchId,t.largestBatchId))}
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
 */const ap="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function up(e){if(e.code!==Df.FAILED_PRECONDITION||e.message!==ap)throw e;Cf("LocalStore","Unexpectedly lost primary lease")}
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
 */class cp{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new cp(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof cp?t:cp.resolve(t)}catch(e){return cp.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):cp.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):cp.reject(t)}static resolve(e){return new cp(((t,n)=>{t(e)}))}static reject(e){return new cp(((t,n)=>{n(e)}))}static waitFor(e){return new cp(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=cp.resolve(!1);for(const n of e)t=t.next((e=>e?cp.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new cp(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{o[l]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new cp(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function dp(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class hp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}hp.at=-1;
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
class fp{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class pp{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pp("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof pp&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function mp(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function gp(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function vp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */function yp(e){return null==e}function bp(e){return 0===e&&1/e==-1/0}function wp(e){return"number"==typeof e&&Number.isInteger(e)&&!bp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Sp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Ep{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new Sp("Invalid base64 string: "+e):e}}(e);return new Ep(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ep(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Kf(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ep.EMPTY_BYTE_STRING=new Ep("");const kp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xp(e){if(Af(!!e),"string"==typeof e){let t=0;const n=kp.exec(e);if(Af(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Tp(e.seconds),nanos:Tp(e.nanos)}}function Tp(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function _p(e){return"string"==typeof e?Ep.fromBase64String(e):Ep.fromUint8Array(e)}
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
 */function Cp(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ip(e){const t=e.mapValue.fields.__previous_value__;return Cp(t)?Ip(t):t}function Op(e){const t=xp(e.mapValue.fields.__local_write_time__.timestampValue);return new Qf(t.seconds,t.nanos)}
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
 */const Np={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pp(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cp(e)?4:qp(e)?9007199254740991:10:Pf()}function Ap(e,t){if(e===t)return!0;const n=Pp(e);if(n!==Pp(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Op(e).isEqual(Op(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xp(e.timestampValue),r=xp(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return _p(e.bytesValue).isEqual(_p(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Tp(e.geoPointValue.latitude)===Tp(t.geoPointValue.latitude)&&Tp(e.geoPointValue.longitude)===Tp(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Tp(e.integerValue)===Tp(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Tp(e.doubleValue),r=Tp(t.doubleValue);return n===r?bp(n)===bp(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Gf(e.arrayValue.values||[],t.arrayValue.values||[],Ap);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(mp(n)!==mp(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Ap(n[e],r[e])))return!1;return!0}(e,t);default:return Pf()}}function Rp(e,t){return void 0!==(e.values||[]).find((e=>Ap(e,t)))}function Dp(e,t){if(e===t)return 0;const n=Pp(e),r=Pp(t);if(n!==r)return Kf(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Kf(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Tp(e.integerValue||e.doubleValue),r=Tp(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Lp(e.timestampValue,t.timestampValue);case 4:return Lp(Op(e),Op(t));case 5:return Kf(e.stringValue,t.stringValue);case 6:return function(e,t){const n=_p(e),r=_p(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Kf(n[e],r[e]);if(0!==t)return t}return Kf(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Kf(Tp(e.latitude),Tp(t.latitude));return 0!==n?n:Kf(Tp(e.longitude),Tp(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Dp(n[e],r[e]);if(t)return t}return Kf(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Np.mapValue&&t===Np.mapValue)return 0;if(e===Np.mapValue)return 1;if(t===Np.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let e=0;e<r.length&&e<o.length;++e){const t=Kf(r[e],o[e]);if(0!==t)return t;const s=Dp(n[r[e]],i[o[e]]);if(0!==s)return s}return Kf(r.length,o.length)}(e.mapValue,t.mapValue);default:throw Pf()}}function Lp(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Kf(e,t);const n=xp(e),r=xp(t),i=Kf(n.seconds,r.seconds);return 0!==i?i:Kf(n.nanos,r.nanos)}function Mp(e){return jp(e)}function jp(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xp(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?_p(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,tp.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=jp(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${jp(e.fields[i])}`;return n+"}"}(e.mapValue):Pf()}function Fp(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Up(e){return!!e&&"integerValue"in e}function zp(e){return!!e&&"arrayValue"in e}function Vp(e){return!!e&&"nullValue"in e}function $p(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bp(e){return!!e&&"mapValue"in e}function Hp(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return gp(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Hp(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Hp(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qp(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Wp{constructor(e,t){this.position=e,this.inclusive=t}}function Kp(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?tp.comparator(tp.fromName(s.referenceValue),n.key):Dp(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Gp(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ap(e.position[n],t.position[n]))return!1;return!0}
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
 */class Qp{}class Xp extends Qp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new im(e,t,n):"array-contains"===t?new lm(e,n):"in"===t?new um(e,n):"not-in"===t?new cm(e,n):"array-contains-any"===t?new dm(e,n):new Xp(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new om(e,n):new sm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Dp(t,this.value)):null!==t&&Pp(this.value)===Pp(t)&&this.matchesComparison(Dp(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Pf()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yp extends Qp{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new Yp(e,t)}matches(e){return Jp(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt((e=>e.isInequality()));return null!==e?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Jp(e){return"and"===e.op}function Zp(e){return em(e)&&Jp(e)}function em(e){for(const t of e.filters)if(t instanceof Yp)return!1;return!0}function tm(e){if(e instanceof Xp)return e.field.canonicalString()+e.op.toString()+Mp(e.value);if(Zp(e))return e.filters.map((e=>tm(e))).join(",");{const t=e.filters.map((e=>tm(e))).join(",");return`${e.op}(${t})`}}function nm(e,t){return e instanceof Xp?function(e,t){return t instanceof Xp&&e.op===t.op&&e.field.isEqual(t.field)&&Ap(e.value,t.value)}(e,t):e instanceof Yp?function(e,t){return t instanceof Yp&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&nm(n,t.filters[r])),!0)}(e,t):void Pf()}function rm(e){return e instanceof Xp?function(e){return`${e.field.canonicalString()} ${e.op} ${Mp(e.value)}`}(e):e instanceof Yp?function(e){return e.op.toString()+" {"+e.getFilters().map(rm).join(" ,")+"}"}(e):"Filter"}class im extends Xp{constructor(e,t,n){super(e,t,n),this.key=tp.fromName(n.referenceValue)}matches(e){const t=tp.comparator(e.key,this.key);return this.matchesComparison(t)}}class om extends Xp{constructor(e,t){super(e,"in",t),this.keys=am("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class sm extends Xp{constructor(e,t){super(e,"not-in",t),this.keys=am("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function am(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>tp.fromName(e.referenceValue)))}class lm extends Xp{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zp(t)&&Rp(t.arrayValue,this.value)}}class um extends Xp{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Rp(this.value.arrayValue,t)}}class cm extends Xp{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rp(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Rp(this.value.arrayValue,t)}}class dm extends Xp{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Rp(this.value.arrayValue,e)))}}
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
 */class hm{constructor(e,t="asc"){this.field=e,this.dir=t}}function fm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class pm{constructor(e,t){this.comparator=e,this.root=t||gm.EMPTY}insert(e,t){return new pm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gm.BLACK,null,null))}remove(e){return new pm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gm.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mm(this.root,e,this.comparator,!1)}getReverseIterator(){return new mm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mm(this.root,e,this.comparator,!0)}}class mm{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gm{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:gm.RED,this.left=null!=r?r:gm.EMPTY,this.right=null!=i?i:gm.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new gm(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gm.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return gm.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gm.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pf();if(this.right.isRed())throw Pf();const e=this.left.check();if(e!==this.right.check())throw Pf();return e+(this.isRed()?0:1)}}gm.EMPTY=null,gm.RED=!0,gm.BLACK=!1,gm.EMPTY=new class{constructor(){this.size=0}get key(){throw Pf()}get value(){throw Pf()}get color(){throw Pf()}get left(){throw Pf()}get right(){throw Pf()}copy(e,t,n,r,i){return this}insert(e,t,n){return new gm(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class vm{constructor(e){this.comparator=e,this.data=new pm(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ym(this.data.getIterator())}getIteratorFrom(e){return new ym(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof vm))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vm(this.comparator);return t.data=e,t}}class ym{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class bm{constructor(e){this.fields=e,e.sort(ep.comparator)}static empty(){return new bm([])}unionWith(e){let t=new vm(ep.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new bm(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gf(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class wm{constructor(e){this.value=e}static empty(){return new wm({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hp(t)}setAll(e){let t=ep.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Hp(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Bp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ap(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Bp(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){gp(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new wm(Hp(this.value))}}function Sm(e){const t=[];return gp(e.fields,((e,n)=>{const r=new ep([e]);if(Bp(n)){const e=Sm(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new bm(t)
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
 */}class Em{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Em(e,0,Xf.min(),Xf.min(),Xf.min(),wm.empty(),0)}static newFoundDocument(e,t,n,r){return new Em(e,1,t,Xf.min(),n,r,0)}static newNoDocument(e,t){return new Em(e,2,t,Xf.min(),Xf.min(),wm.empty(),0)}static newUnknownDocument(e,t){return new Em(e,3,t,Xf.min(),Xf.min(),wm.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Xf.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wm.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wm.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xf.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Em&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Em(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class km{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this._t=null}}function xm(e,t=null,n=[],r=[],i=null,o=null,s=null){return new km(e,t,n,r,i,o,s)}function Tm(e){const t=Rf(e);if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>tm(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),yp(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Mp(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Mp(e))).join(",")),t._t=e}return t._t}function _m(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fm(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!nm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gp(e.startAt,t.startAt)&&Gp(e.endAt,t.endAt)}function Cm(e){return tp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Im{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Om(e,t,n,r,i,o,s,a){return new Im(e,t,n,r,i,o,s,a)}function Nm(e){return new Im(e)}function Pm(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Am(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Rm(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Dm(e){return null!==e.collectionGroup}function Lm(e){const t=Rf(e);if(null===t.wt){t.wt=[];const e=Rm(t),n=Am(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new hm(e)),t.wt.push(new hm(ep.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new hm(ep.keyField(),e))}}}return t.wt}function Mm(e){const t=Rf(e);if(!t.gt)if("F"===t.limitType)t.gt=xm(t.path,t.collectionGroup,Lm(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Lm(t)){const t="desc"===n.dir?"asc":"desc";e.push(new hm(n.field,t))}const n=t.endAt?new Wp(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wp(t.startAt.position,t.startAt.inclusive):null;t.gt=xm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.gt}function jm(e,t){t.getFirstInequalityField(),Rm(e);const n=e.filters.concat([t]);return new Im(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Fm(e,t,n){return new Im(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Um(e,t){return _m(Mm(e),Mm(t))&&e.limitType===t.limitType}function zm(e){return`${Tm(Mm(e))}|lt:${e.limitType}`}function Vm(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>rm(e))).join(", ")}]`),yp(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Mp(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Mp(e))).join(",")),`Target(${t})`}(Mm(e))}; limitType=${e.limitType})`}function $m(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):tp.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Lm(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Kp(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Lm(e),t))&&!(e.endAt&&!function(e,t,n){const r=Kp(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Lm(e),t))}(e,t)}function Bm(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Hm(e){return(t,n)=>{let r=!1;for(const i of Lm(e)){const e=qm(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function qm(e,t,n){const r=e.field.isKeyField()?tp.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Dp(r,i):Pf()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Pf()}}
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
 */function Wm(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bp(t)?"-0":t}}function Km(e){return{integerValue:""+e}}function Gm(e,t){return wp(t)?Km(t):Wm(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Qm{constructor(){this._=void 0}}function Xm(e,t,n){return e instanceof Zm?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof eg?tg(e,t):e instanceof ng?rg(e,t):function(e,t){const n=Jm(e,t),r=og(n)+og(e.It);return Up(n)&&Up(e.It)?Km(r):Wm(e.Tt,r)}(e,t)}function Ym(e,t,n){return e instanceof eg?tg(e,t):e instanceof ng?rg(e,t):n}function Jm(e,t){var n;return e instanceof ig?Up(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class Zm extends Qm{}class eg extends Qm{constructor(e){super(),this.elements=e}}function tg(e,t){const n=sg(t);for(const t of e.elements)n.some((e=>Ap(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ng extends Qm{constructor(e){super(),this.elements=e}}function rg(e,t){let n=sg(t);for(const t of e.elements)n=n.filter((e=>!Ap(e,t)));return{arrayValue:{values:n}}}class ig extends Qm{constructor(e,t){super(),this.Tt=e,this.It=t}}function og(e){return Tp(e.integerValue||e.doubleValue)}function sg(e){return zp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class ag{constructor(e,t){this.version=e,this.transformResults=t}}class lg{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lg}static exists(e){return new lg(void 0,e)}static updateTime(e){return new lg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ug(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class cg{}function dg(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Sg(e.key,lg.none()):new gg(e.key,e.data,lg.none());{const n=e.data,r=wm.empty();let i=new vm(ep.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new vg(e.key,r,new bm(i.toArray()),lg.none())}}function hg(e,t,n){e instanceof gg?function(e,t,n){const r=e.value.clone(),i=bg(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof vg?function(e,t,n){if(!ug(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=bg(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(yg(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function fg(e,t,n,r){return e instanceof gg?function(e,t,n,r){if(!ug(e.precondition,t))return n;const i=e.value.clone(),o=wg(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof vg?function(e,t,n,r){if(!ug(e.precondition,t))return n;const i=wg(e.fieldTransforms,r,t),o=t.data;return o.setAll(yg(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ug(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function pg(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Jm(r.transform,e||null);null!=i&&(null===n&&(n=wm.empty()),n.set(r.field,i))}return n||null}function mg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Gf(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof eg&&t instanceof eg||e instanceof ng&&t instanceof ng?Gf(e.elements,t.elements,Ap):e instanceof ig&&t instanceof ig?Ap(e.It,t.It):e instanceof Zm&&t instanceof Zm}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class gg extends cg{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vg extends cg{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yg(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function bg(e,t,n){const r=new Map;Af(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,Ym(s,a,n[i]))}return r}function wg(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,Xm(e,o,t))}return r}class Sg extends cg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eg extends cg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class kg{constructor(e){this.count=e}}
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
 */var xg,Tg;function _g(e){switch(e){default:return Pf();case Df.CANCELLED:case Df.UNKNOWN:case Df.DEADLINE_EXCEEDED:case Df.RESOURCE_EXHAUSTED:case Df.INTERNAL:case Df.UNAVAILABLE:case Df.UNAUTHENTICATED:return!1;case Df.INVALID_ARGUMENT:case Df.NOT_FOUND:case Df.ALREADY_EXISTS:case Df.PERMISSION_DENIED:case Df.FAILED_PRECONDITION:case Df.ABORTED:case Df.OUT_OF_RANGE:case Df.UNIMPLEMENTED:case Df.DATA_LOSS:return!0}}function Cg(e){if(void 0===e)return If("GRPC error has no .code"),Df.UNKNOWN;switch(e){case xg.OK:return Df.OK;case xg.CANCELLED:return Df.CANCELLED;case xg.UNKNOWN:return Df.UNKNOWN;case xg.DEADLINE_EXCEEDED:return Df.DEADLINE_EXCEEDED;case xg.RESOURCE_EXHAUSTED:return Df.RESOURCE_EXHAUSTED;case xg.INTERNAL:return Df.INTERNAL;case xg.UNAVAILABLE:return Df.UNAVAILABLE;case xg.UNAUTHENTICATED:return Df.UNAUTHENTICATED;case xg.INVALID_ARGUMENT:return Df.INVALID_ARGUMENT;case xg.NOT_FOUND:return Df.NOT_FOUND;case xg.ALREADY_EXISTS:return Df.ALREADY_EXISTS;case xg.PERMISSION_DENIED:return Df.PERMISSION_DENIED;case xg.FAILED_PRECONDITION:return Df.FAILED_PRECONDITION;case xg.ABORTED:return Df.ABORTED;case xg.OUT_OF_RANGE:return Df.OUT_OF_RANGE;case xg.UNIMPLEMENTED:return Df.UNIMPLEMENTED;case xg.DATA_LOSS:return Df.DATA_LOSS;default:return Pf()}}(Tg=xg||(xg={}))[Tg.OK=0]="OK",Tg[Tg.CANCELLED=1]="CANCELLED",Tg[Tg.UNKNOWN=2]="UNKNOWN",Tg[Tg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tg[Tg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tg[Tg.NOT_FOUND=5]="NOT_FOUND",Tg[Tg.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tg[Tg.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tg[Tg.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tg[Tg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tg[Tg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tg[Tg.ABORTED=10]="ABORTED",Tg[Tg.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tg[Tg.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tg[Tg.INTERNAL=13]="INTERNAL",Tg[Tg.UNAVAILABLE=14]="UNAVAILABLE",Tg[Tg.DATA_LOSS=15]="DATA_LOSS";
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
class Ig{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){gp(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return vp(this.inner)}size(){return this.innerSize}}
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
 */const Og=new pm(tp.comparator);function Ng(){return Og}const Pg=new pm(tp.comparator);function Ag(...e){let t=Pg;for(const n of e)t=t.insert(n.key,n);return t}function Rg(e){let t=Pg;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Dg(){return Mg()}function Lg(){return Mg()}function Mg(){return new Ig((e=>e.toString()),((e,t)=>e.isEqual(t)))}const jg=new pm(tp.comparator),Fg=new vm(tp.comparator);function Ug(...e){let t=Fg;for(const n of e)t=t.add(n);return t}const zg=new vm(Kf);function Vg(){return zg}
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
 */class $g{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Bg.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new $g(Xf.min(),r,Vg(),Ng(),Ug())}}class Bg{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bg(n,t,Ug(),Ug(),Ug())}}
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
 */class Hg{constructor(e,t,n,r){this.Et=e,this.removedTargetIds=t,this.key=n,this.At=r}}class qg{constructor(e,t){this.targetId=e,this.Rt=t}}class Wg{constructor(e,t,n=Ep.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Kg{constructor(){this.Pt=0,this.vt=Xg(),this.bt=Ep.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return 0!==this.Pt}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Ug(),t=Ug(),n=Ug();return this.vt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Pf()}})),new Bg(this.bt,this.Vt,e,t,n)}kt(){this.St=!1,this.vt=Xg()}$t(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class Gg{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ng(),this.Kt=Qg(),this.Gt=new vm(Kf)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,(t=>{const n=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&n.xt(e.resumeToken);break;case 1:n.Ft(),n.Dt||n.kt(),n.xt(e.resumeToken);break;case 2:n.Ft(),n.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(n.Bt(),n.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),n.xt(e.resumeToken));break;default:Pf()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach(((e,n)=>{this.Jt(n)&&t(n)}))}Zt(e){const t=e.targetId,n=e.Rt.count,r=this.Xt(t);if(r){const e=r.target;if(Cm(e))if(0===n){const n=new tp(e.path);this.zt(t,n,Em.newNoDocument(n,Xf.min()))}else Af(1===n);else this.te(t)!==n&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Cm(i.target)){const t=new tp(i.target.path);null!==this.Ut.get(t)||this.ne(r,t)||this.zt(r,t,Em.newNoDocument(t,e))}n.Ct&&(t.set(r,n.Nt()),n.kt())}}));let n=Ug();this.Kt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new $g(e,t,this.Gt,this.Ut,n);return this.Ut=Ng(),this.Kt=Qg(),this.Gt=new vm(Kf),r}jt(e,t){if(!this.Jt(e))return;const n=this.ne(e,t.key)?2:0;this.Ht(e).$t(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,n){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,t)?r.$t(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let t=this.qt.get(e);return t||(t=new Kg,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new vm(Kf),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=null!==this.Xt(e);return t||Cf("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Kg),this.Lt.getRemoteKeysForTarget(e).forEach((t=>{this.zt(e,t,null)}))}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function Qg(){return new pm(tp.comparator)}function Xg(){return new pm(tp.comparator)}
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
 */const Yg={asc:"ASCENDING",desc:"DESCENDING"},Jg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zg={and:"AND",or:"OR"};class ev{constructor(e,t){this.databaseId=e,this.yt=t}}function tv(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nv(e,t){return e.yt?t.toBase64():t.toUint8Array()}function rv(e,t){return tv(e,t.toTimestamp())}function iv(e){return Af(!!e),Xf.fromTimestamp(function(e){const t=xp(e);return new Qf(t.seconds,t.nanos)}(e))}function ov(e,t){return function(e){return new Jf(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function sv(e){const t=Jf.fromString(e);return Af(_v(t)),t}function av(e,t){return ov(e.databaseId,t.path)}function lv(e,t){const n=sv(t);if(n.get(1)!==e.databaseId.projectId)throw new Lf(Df.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Lf(Df.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new tp(hv(n))}function uv(e,t){return ov(e.databaseId,t)}function cv(e){const t=sv(e);return 4===t.length?Jf.emptyPath():hv(t)}function dv(e){return new Jf(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function hv(e){return Af(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function fv(e,t,n){return{name:av(e,t),fields:n.value.mapValue.fields}}function pv(e,t){let n;if(t instanceof gg)n={update:fv(e,t.key,t.value)};else if(t instanceof Sg)n={delete:av(e,t.key)};else if(t instanceof vg)n={update:fv(e,t.key,t.data),updateMask:Tv(t.fieldMask)};else{if(!(t instanceof Eg))return Pf();n={verify:av(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Zm)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof eg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ng)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ig)return{fieldPath:t.field.canonicalString(),increment:n.It};throw Pf()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:rv(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Pf()}(e,t.precondition)),n}function mv(e,t){return{documents:[uv(e,t.path)]}}function gv(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=uv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=uv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return xv(Yp.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ev(e.field),direction:bv(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.yt||yp(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function vv(e){let t=cv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Af(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=yv(e);return t instanceof Yp&&Zp(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new hm(kv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,yp(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Wp(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Wp(n,t)}(n.endAt)),Om(t,i,s,o,a,"F",l,u)}function yv(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=kv(e.unaryFilter.field);return Xp.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=kv(e.unaryFilter.field);return Xp.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kv(e.unaryFilter.field);return Xp.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kv(e.unaryFilter.field);return Xp.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pf()}}(e):void 0!==e.fieldFilter?function(e){return Xp.create(kv(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pf()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Yp.create(e.compositeFilter.filters.map((e=>yv(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Pf()}}(e.compositeFilter.op))}(e):Pf()}function bv(e){return Yg[e]}function wv(e){return Jg[e]}function Sv(e){return Zg[e]}function Ev(e){return{fieldPath:e.canonicalString()}}function kv(e){return ep.fromServerFormat(e.fieldPath)}function xv(e){return e instanceof Xp?function(e){if("=="===e.op){if($p(e.value))return{unaryFilter:{field:Ev(e.field),op:"IS_NAN"}};if(Vp(e.value))return{unaryFilter:{field:Ev(e.field),op:"IS_NULL"}}}else if("!="===e.op){if($p(e.value))return{unaryFilter:{field:Ev(e.field),op:"IS_NOT_NAN"}};if(Vp(e.value))return{unaryFilter:{field:Ev(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ev(e.field),op:wv(e.op),value:e.value}}}(e):e instanceof Yp?function(e){const t=e.getFilters().map((e=>xv(e)));return 1===t.length?t[0]:{compositeFilter:{op:Sv(e.op),filters:t}}}(e):Pf()}function Tv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function _v(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const Cv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Iv=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ov=Iv;
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
class Nv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&hg(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=fg(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=fg(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lg();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=dg(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Xf.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ug())}isEqual(e){return this.batchId===e.batchId&&Gf(this.mutations,e.mutations,((e,t)=>mg(e,t)))&&Gf(this.baseMutations,e.baseMutations,((e,t)=>mg(e,t)))}}class Pv{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Af(e.mutations.length===n.length);let r=jg;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Pv(e,t,n,r)}}
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
 */class Av{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Rv{constructor(e,t,n,r,i=Xf.min(),o=Xf.min(),s=Ep.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new Rv(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Rv(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Rv(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Dv{constructor(e){this.oe=e}}function Lv(e){const t=vv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Fm(t,t.limit,"L"):t}
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
 */class Mv{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(Tp(e.integerValue));else if("doubleValue"in e){const n=Tp(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),bp(n)?t.de(0):t.de(n))}else if("timestampValue"in e){const n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(_p(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?qp(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):Pf()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){const n=e.fields||{};this.fe(t,55);for(const e of Object.keys(n))this.we(e,t),this.he(n[e],t)}Ie(e,t){const n=e.values||[];this.fe(t,50);for(const e of n)this.he(e,t)}ye(e,t){this.fe(t,37),tp.fromName(e).path.forEach((e=>{this.fe(t,60),this.Te(e,t)}))}fe(e,t){e.de(t)}me(e){e.de(2)}}Mv.Ee=new Mv;
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
class jv{constructor(){this.Ze=new Fv}addToCollectionParentIndex(e,t){return this.Ze.add(t),cp.resolve()}getCollectionParents(e,t){return cp.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return cp.resolve()}deleteFieldIndex(e,t){return cp.resolve()}getDocumentsMatchingTarget(e,t){return cp.resolve(null)}getIndexType(e,t){return cp.resolve(0)}getFieldIndexes(e,t){return cp.resolve([])}getNextCollectionGroupToUpdate(e){return cp.resolve(null)}getMinOffset(e,t){return cp.resolve(op.min())}getMinOffsetFromCollectionGroup(e,t){return cp.resolve(op.min())}updateCollectionGroup(e,t,n){return cp.resolve()}updateIndexEntries(e,t){return cp.resolve()}}class Fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new vm(Jf.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new vm(Jf.comparator)).toArray()}}
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
 */new Uint8Array(0);class Uv{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Uv(e,Uv.DEFAULT_COLLECTION_PERCENTILE,Uv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Uv.DEFAULT_COLLECTION_PERCENTILE=10,Uv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Uv.DEFAULT=new Uv(41943040,Uv.DEFAULT_COLLECTION_PERCENTILE,Uv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Uv.DISABLED=new Uv(-1,0,0);
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
class zv{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new zv(0)}static Sn(){return new zv(-1)}}
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
class Vv{constructor(){this.changes=new Ig((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Em.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?cp.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class $v{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Bv{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&fg(n.mutation,e,bm.empty(),Qf.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ug()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ug()){const r=Dg();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ag();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Dg();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ug())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ng();const o=Mg(),s=Mg();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof vg)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),fg(s.mutation,t,s.mutation.getFieldMask(),Qf.now())):o.set(t.key,bm.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new $v(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=Mg();let r=new pm(((e,t)=>e-t)),i=Ug();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||bm.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Ug()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=Lg();l.forEach((e=>{if(!i.has(e)){const r=dg(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return cp.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return tp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):cp.resolve(Dg());let s=-1,a=i;return o.next((t=>cp.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?cp.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ug()))).next((e=>({batchId:s,changes:Rg(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new tp(t)).next((e=>{let t=Ag();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ag();return this.indexManager.getCollectionParents(e,r).next((o=>cp.forEach(o,(o=>{const s=function(e,t){return new Im(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Em.newInvalidDocument(r)))}));let n=Ag();return e.forEach(((e,i)=>{const o=r.get(e);void 0!==o&&fg(o.mutation,i,bm.empty(),Qf.now()),$m(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class Hv{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return cp.resolve(this.es.get(t))}saveBundleMetadata(e,t){var n;return this.es.set(t.id,{id:(n=t).id,version:n.version,createTime:iv(n.createTime)}),cp.resolve()}getNamedQuery(e,t){return cp.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(e){return{name:e.name,query:Lv(e.bundledQuery),readTime:iv(e.readTime)}}(t)),cp.resolve()}}
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
 */class qv{constructor(){this.overlays=new pm(tp.comparator),this.ss=new Map}getOverlay(e,t){return cp.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dg();return cp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ce(e,t,r)})),cp.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ss.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ss.delete(n)),cp.resolve()}getOverlaysForCollection(e,t,n){const r=Dg(),i=t.length+1,o=new tp(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return cp.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new pm(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Dg(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Dg(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>s.set(e,t))),!(s.size()>=r)););return cp.resolve(s)}ce(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Av(t,n));let i=this.ss.get(t);void 0===i&&(i=Ug(),this.ss.set(t,i)),this.ss.set(t,i.add(n.key))}}
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
 */class Wv{constructor(){this.rs=new vm(Kv.os),this.us=new vm(Kv.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const n=new Kv(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ls(new Kv(e,t))}fs(e,t){e.forEach((e=>this.removeReference(e,t)))}ds(e){const t=new tp(new Jf([])),n=new Kv(t,e),r=new Kv(t,e+1),i=[];return this.us.forEachInRange([n,r],(e=>{this.ls(e),i.push(e.key)})),i}_s(){this.rs.forEach((e=>this.ls(e)))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new tp(new Jf([])),n=new Kv(t,e),r=new Kv(t,e+1);let i=Ug();return this.us.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Kv(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Kv{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return tp.comparator(e.key,t.key)||Kf(e.gs,t.gs)}static cs(e,t){return Kf(e.gs,t.gs)||tp.comparator(e.key,t.key)}}
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
 */class Gv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new vm(Kv.os)}checkEmpty(e){return cp.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nv(i,t,n,r);this.mutationQueue.push(o);for(const t of r)this.ps=this.ps.add(new Kv(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return cp.resolve(o)}lookupMutationBatch(e,t){return cp.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ts(n),i=r<0?0:r;return cp.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return cp.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return cp.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Kv(t,0),r=new Kv(t,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,r],(e=>{const t=this.Is(e.gs);i.push(t)})),cp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new vm(Kf);return t.forEach((e=>{const t=new Kv(e,0),r=new Kv(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],(e=>{n=n.add(e.gs)}))})),cp.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;tp.isDocumentKey(i)||(i=i.child(""));const o=new Kv(new tp(i),0);let s=new vm(Kf);return this.ps.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.gs)),!0)}),o),cp.resolve(this.Es(s))}Es(e){const t=[];return e.forEach((e=>{const n=this.Is(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Af(0===this.As(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return cp.forEach(t.mutations,(r=>{const i=new Kv(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ps=n}))}Pn(e){}containsKey(e,t){const n=new Kv(t,0),r=this.ps.firstAfterOrEqual(n);return cp.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,cp.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Qv{constructor(e){this.Rs=e,this.docs=new pm(tp.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return cp.resolve(n?n.document.mutableCopy():Em.newInvalidDocument(t))}getEntries(e,t){let n=Ng();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Em.newInvalidDocument(e))})),cp.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ng();const o=t.path,s=new tp(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||sp(ip(s),n)<=0||(r.has(s.key)||$m(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return cp.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Pf()}Ps(e,t){return cp.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Xv(this)}getSize(e){return cp.resolve(this.size)}}class Xv extends Vv{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(n)})),cp.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}
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
 */class Yv{constructor(e){this.persistence=e,this.vs=new Ig((e=>Tm(e)),_m),this.lastRemoteSnapshotVersion=Xf.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Wv,this.targetCount=0,this.Ss=zv.Vn()}forEachTarget(e,t){return this.vs.forEach(((e,n)=>t(n))),cp.resolve()}getLastRemoteSnapshotVersion(e){return cp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return cp.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),cp.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),cp.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new zv(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,cp.resolve()}updateTargetData(e,t){return this.xn(t),cp.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,cp.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.vs.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),cp.waitFor(i).next((()=>r))}getTargetCount(e){return cp.resolve(this.targetCount)}getTargetData(e,t){const n=this.vs.get(t)||null;return cp.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),cp.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),cp.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),cp.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Vs.ws(t);return cp.resolve(n)}containsKey(e,t){return cp.resolve(this.Vs.containsKey(t))}}
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
 */class Jv{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new hp(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Yv(this),this.indexManager=new jv,this.remoteDocumentCache=function(e){return new Qv(e)}((e=>this.referenceDelegate.ks(e))),this.Tt=new Dv(t),this.$s=new Hv(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new Gv(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,n){Cf("MemoryPersistence","Starting transaction:",e);const r=new Zv(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Fs(e,t){return cp.or(Object.values(this.Ds).map((n=>()=>n.containsKey(e,t))))}}class Zv extends lp{constructor(e){super(),this.currentSequenceNumber=e}}class ey{constructor(e){this.persistence=e,this.Bs=new Wv,this.Ls=null}static qs(e){return new ey(e)}get Us(){if(this.Ls)return this.Ls;throw Pf()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),cp.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),cp.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),cp.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach((e=>this.Us.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Us.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ms(){this.Ls=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return cp.forEach(this.Us,(n=>{const r=tp.fromPath(n);return this.Ks(e,r).next((e=>{e||t.removeEntry(r,Xf.min())}))})).next((()=>(this.Ls=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ks(e,t).next((e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())}))}ks(e){return 0}Ks(e,t){return cp.or([()=>cp.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}
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
class ty{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=r}static Ni(e,t){let n=Ug(),r=Ug();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new ty(e,t.fromCache,n,r)}}
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
 */class ny{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Mi(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Fi(e,t)))}Mi(e,t){if(Pm(t))return cp.resolve(null);let n=Mm(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Fm(t,null,"F"),n=Mm(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ug(...r);return this.$i.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.Bi(t,r);return this.Li(t,o,i,n.readTime)?this.Mi(e,Fm(t,null,"F")):this.qi(e,o,t,n)}))))})))))}Oi(e,t,n,r){return Pm(t)||r.isEqual(Xf.min())?this.Fi(e,t):this.$i.getDocuments(e,n).next((i=>{const o=this.Bi(t,i);return this.Li(t,o,n,r)?this.Fi(e,t):(_f()<=bl.DEBUG&&Cf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vm(t)),this.qi(e,o,t,rp(r,-1)))}))}Bi(e,t){let n=new vm(Hm(e));return t.forEach(((t,r)=>{$m(e,r)&&(n=n.add(r))})),n}Li(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,t){return _f()<=bl.DEBUG&&Cf("QueryEngine","Using full collection scan to execute query:",Vm(t)),this.$i.getDocumentsMatchingQuery(e,t,op.min())}qi(e,t,n,r){return this.$i.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class ry{constructor(e,t,n,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new pm(Kf),this.Gi=new Ig((e=>Tm(e)),_m),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bv(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ki)))}}function iy(e,t,n,r){return new ry(e,t,n,r)}async function oy(e,t){const n=Rf(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Ug();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({Wi:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function sy(e){const t=Rf(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ns.getLastRemoteSnapshotVersion(e)))}function ay(e,t,n){let r=Ug(),i=Ug();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ng();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Xf.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):Cf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Hi:r,Ji:i}}))}function ly(e,t){const n=Rf(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function uy(e,t){const n=Rf(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ns.getTargetData(e,t).next((i=>i?(r=i,cp.resolve(r)):n.Ns.allocateTargetId(e).next((i=>(r=new Rv(t,i,0,e.currentSequenceNumber),n.Ns.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ki.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(e.targetId,e),n.Gi.set(t,e.targetId)),e}))}async function cy(e,t,n){const r=Rf(e),i=r.Ki.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!dp(e))throw e;Cf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ki=r.Ki.remove(t),r.Gi.delete(i.target)}function dy(e,t,n){const r=Rf(e);let i=Xf.min(),o=Ug();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Rf(e),i=r.Gi.get(n);return void 0!==i?cp.resolve(r.Ki.get(i)):r.Ns.getTargetData(t,n)}(r,e,Mm(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Ui.getDocumentsMatchingQuery(e,t,n?i:Xf.min(),n?o:Ug()))).next((e=>(hy(r,Bm(t),e),{documents:e,Yi:o})))))}function hy(e,t,n){let r=e.Qi.get(t)||Xf.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Qi.set(t,r)}class fy{constructor(){this.activeTargetIds=Vg()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class py{constructor(){this.Ur=new fy,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new fy,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class my{Gr(e){}shutdown(){}}
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
 */class gy{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){Cf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){Cf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let vy=null;function yy(){return null===vy?vy=268435456+Math.round(2147483648*Math.random()):vy++,"0x"+vy.toString(16)
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
 */}const by={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class wy{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}
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
 */const Sy="WebChannelConnection";class Ey extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,r,i){const o=yy(),s=this.fo(e,t);Cf("RestConnection",`Sending RPC '${e}' ${o}:`,s,n);const a={};return this._o(a,r,i),this.wo(e,s,a,n).then((t=>(Cf("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw Of("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",s,"request:",n),t}))}mo(e,t,n,r,i,o){return this.lo(e,t,n,r,i)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+xf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}fo(e,t){const n=by[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,r){const i=yy();return new Promise(((o,s)=>{const a=new Sf;a.setWithCredentials(!0),a.listenOnce(gf.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case mf.NO_ERROR:const t=a.getResponseJson();Cf(Sy,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case mf.TIMEOUT:Cf(Sy,`RPC '${e}' ${i} timed out`),s(new Lf(Df.DEADLINE_EXCEEDED,"Request time out"));break;case mf.HTTP_ERROR:const n=a.getStatus();if(Cf(Sy,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Df).indexOf(t)>=0?t:Df.UNKNOWN}(t.status);s(new Lf(e,t.message))}else s(new Lf(Df.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Lf(Df.UNAVAILABLE,"Connection failed."));break;default:Pf()}}finally{Cf(Sy,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Cf(Sy,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}yo(e,t,n){const r=yy(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ff(),s=pf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new bf({})),this._o(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");Cf(Sy,`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=o.createWebChannel(l,a);let c=!1,d=!1;const h=new wy({Yr:t=>{d?Cf(Sy,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(Cf(Sy,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),Cf(Sy,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,wf.EventType.OPEN,(()=>{d||Cf(Sy,`RPC '${e}' stream ${r} transport opened.`)})),f(u,wf.EventType.CLOSE,(()=>{d||(d=!0,Cf(Sy,`RPC '${e}' stream ${r} transport closed`),h.oo())})),f(u,wf.EventType.ERROR,(t=>{d||(d=!0,Of(Sy,`RPC '${e}' stream ${r} transport errored:`,t),h.oo(new Lf(Df.UNAVAILABLE,"The operation could not be completed")))})),f(u,wf.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Af(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Cf(Sy,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=xg[e];if(void 0!==t)return Cg(t)}(t),i=s.message;void 0===n&&(n=Df.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,h.oo(new Lf(n,i)),u.close()}else Cf(Sy,`RPC '${e}' stream ${r} received:`,i),h.uo(i)}})),f(s,vf.STAT_EVENT,(t=>{t.stat===yf.PROXY?Cf(Sy,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===yf.NOPROXY&&Cf(Sy,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{h.ro()}),0),h}}
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
 */function ky(){return"undefined"!=typeof document?document:null}
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
 */function xy(e){return new ev(e,!0)}
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
 */class Ty{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.bo()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-n);r>0&&Cf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,(()=>(this.Ro=Date.now(),e()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}
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
 */class _y{constructor(e,t,n,r,i,o,s,a){this.Ys=e,this.So=n,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Ty(e,t)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===Df.RESOURCE_EXHAUSTED?(If(t.toString()),If("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===Df.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Co===t&&this.jo(e,n)}),(t=>{e((()=>{const e=new Lf(Df.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)}))}))}jo(e,t){const n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((e=>{n((()=>this.zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(e){return Cf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget((()=>this.Co===e?t():(Cf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cy extends _y{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.Tt=i}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Pf()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.yt?(Af(void 0===t||"string"==typeof t),Ep.fromBase64String(t||"")):(Af(void 0===t||t instanceof Uint8Array),Ep.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?Df.UNKNOWN:Cg(e.code);return new Lf(t,e.message||"")}(s);n=new Wg(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=lv(e,r.document.name),o=iv(r.document.updateTime),s=r.document.createTime?iv(r.document.createTime):Xf.min(),a=new wm({mapValue:{fields:r.document.fields}}),l=Em.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Hg(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=lv(e,r.document),o=r.readTime?iv(r.readTime):Xf.min(),s=Em.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Hg([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=lv(e,r.document),o=r.removedTargetIds||[];n=new Hg([],o,i,null)}else{if(!("filter"in t))return Pf();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new kg(r),o=e.targetId;n=new qg(o,i)}}return n}(this.Tt,e),n=function(e){if(!("targetChange"in e))return Xf.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Xf.min():t.readTime?iv(t.readTime):Xf.min()}(e);return this.listener.Ho(t,n)}Jo(e){const t={};t.database=dv(this.Tt),t.addTarget=function(e,t){let n;const r=t.target;return n=Cm(r)?{documents:mv(e,r)}:{query:gv(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=nv(e,t.resumeToken):t.snapshotVersion.compareTo(Xf.min())>0&&(n.readTime=tv(e,t.snapshotVersion.toTimestamp())),n}(this.Tt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Pf()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.Tt,e);n&&(t.labels=n),this.qo(t)}Yo(e){const t={};t.database=dv(this.Tt),t.removeTarget=e,this.qo(t)}}class Iy extends _y{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(Af(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=function(e,t){return e&&e.length>0?(Af(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?iv(e.updateTime):iv(t);return n.isEqual(Xf.min())&&(n=iv(t)),new ag(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=iv(e.commitTime);return this.listener.eu(n,t)}return Af(!e.writeResults||0===e.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=dv(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>pv(this.Tt,e)))};this.qo(t)}}
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
 */class Oy extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new Lf(Df.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.lo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Df.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Lf(Df.UNKNOWN,e.toString())}))}mo(e,t,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.mo(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Df.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Lf(Df.UNKNOWN,e.toString())}))}terminate(){this.iu=!0}}class Ny{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(If(t),this.cu=!1):Cf("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}
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
 */class Py{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr((e=>{n.enqueueAndForget((async()=>{zy(this)&&(Cf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Rf(e);t.mu.add(4),await Ry(t),t.pu.set("Unknown"),t.mu.delete(4),await Ay(t)}(this))}))})),this.pu=new Ny(n,r)}}async function Ay(e){if(zy(e))for(const t of e.gu)await t(!0)}async function Ry(e){for(const t of e.gu)await t(!1)}function Dy(e,t){const n=Rf(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),Uy(n)?Fy(n):ib(n).Mo()&&My(n,t))}function Ly(e,t){const n=Rf(e),r=ib(n);n.wu.delete(t),r.Mo()&&jy(n,t),0===n.wu.size&&(r.Mo()?r.Bo():zy(n)&&n.pu.set("Unknown"))}function My(e,t){e.Iu.Ot(t.targetId),ib(e).Jo(t)}function jy(e,t){e.Iu.Ot(t),ib(e).Yo(t)}function Fy(e){e.Iu=new Gg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),ib(e).start(),e.pu.au()}function Uy(e){return zy(e)&&!ib(e).$o()&&e.wu.size>0}function zy(e){return 0===Rf(e).mu.size}function Vy(e){e.Iu=void 0}async function $y(e){e.wu.forEach(((t,n)=>{My(e,t)}))}async function By(e,t){Vy(e),Uy(e)?(e.pu.fu(t),Fy(e)):e.pu.set("Unknown")}async function Hy(e,t,n){if(e.pu.set("Online"),t instanceof Wg&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.wu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.wu.delete(r),e.Iu.removeTarget(r))}(e,t)}catch(n){Cf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await qy(e,n)}else if(t instanceof Hg?e.Iu.Qt(t):t instanceof qg?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(Xf.min()))try{const t=await sy(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Iu.ee(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.wu.get(r);i&&e.wu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.wu.get(t);if(!n)return;e.wu.set(t,n.withResumeToken(Ep.EMPTY_BYTE_STRING,n.snapshotVersion)),jy(e,t);const r=new Rv(n.target,t,1,n.sequenceNumber);My(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Cf("RemoteStore","Failed to raise snapshot:",t),await qy(e,t)}}async function qy(e,t,n){if(!dp(t))throw t;e.mu.add(1),await Ry(e),e.pu.set("Offline"),n||(n=()=>sy(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Cf("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await Ay(e)}))}function Wy(e,t){return t().catch((n=>qy(e,n,t)))}async function Ky(e){const t=Rf(e),n=ob(t);let r=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;Gy(t);)try{const e=await ly(t.localStore,r);if(null===e){0===t._u.length&&n.Bo();break}r=e.batchId,Qy(t,e)}catch(e){await qy(t,e)}Xy(t)&&Yy(t)}function Gy(e){return zy(e)&&e._u.length<10}function Qy(e,t){e._u.push(t);const n=ob(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function Xy(e){return zy(e)&&!ob(e).$o()&&e._u.length>0}function Yy(e){ob(e).start()}async function Jy(e){ob(e).su()}async function Zy(e){const t=ob(e);for(const n of e._u)t.tu(n.mutations)}async function eb(e,t,n){const r=e._u.shift(),i=Pv.from(r,t,n);await Wy(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Ky(e)}async function tb(e,t){t&&ob(e).Xo&&await async function(e,t){if(_g(n=t.code)&&n!==Df.ABORTED){const n=e._u.shift();ob(e).Fo(),await Wy(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ky(e)}var n}(e,t),Xy(e)&&Yy(e)}async function nb(e,t){const n=Rf(e);n.asyncQueue.verifyOperationInProgress(),Cf("RemoteStore","RemoteStore received new credentials");const r=zy(n);n.mu.add(3),await Ry(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await Ay(n)}async function rb(e,t){const n=Rf(e);t?(n.mu.delete(2),await Ay(n)):t||(n.mu.add(2),await Ry(n),n.pu.set("Unknown"))}function ib(e){return e.Tu||(e.Tu=function(e,t,n){const r=Rf(e);return r.ru(),new Cy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)}(e.datastore,e.asyncQueue,{Xr:$y.bind(null,e),no:By.bind(null,e),Ho:Hy.bind(null,e)}),e.gu.push((async t=>{t?(e.Tu.Fo(),Uy(e)?Fy(e):e.pu.set("Unknown")):(await e.Tu.stop(),Vy(e))}))),e.Tu}function ob(e){return e.Eu||(e.Eu=function(e,t,n){const r=Rf(e);return r.ru(),new Iy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)}(e.datastore,e.asyncQueue,{Xr:Jy.bind(null,e),no:tb.bind(null,e),nu:Zy.bind(null,e),eu:eb.bind(null,e)}),e.gu.push((async t=>{t?(e.Eu.Fo(),await Ky(e)):(await e.Eu.stop(),e._u.length>0&&(Cf("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))}))),e.Eu
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
 */}class sb{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Mf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new sb(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Lf(Df.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ab(e,t){if(If("AsyncQueue",`${t}: ${e}`),dp(e))return new Lf(Df.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class lb{constructor(e){this.comparator=e?(t,n)=>e(t,n)||tp.comparator(t.key,n.key):(e,t)=>tp.comparator(e.key,t.key),this.keyedMap=Ag(),this.sortedSet=new pm(this.comparator)}static emptySet(e){return new lb(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lb))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new lb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class ub{constructor(){this.Au=new pm(tp.comparator)}track(e){const t=e.doc.key,n=this.Au.get(t);n?0!==e.type&&3===n.type?this.Au=this.Au.insert(t,e):3===e.type&&1!==n.type?this.Au=this.Au.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Au=this.Au.remove(t):1===e.type&&2===n.type?this.Au=this.Au.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):Pf():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal(((t,n)=>{e.push(n)})),e}}class cb{constructor(e,t,n,r,i,o,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new cb(e,t,lb.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Um(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class db{constructor(){this.Pu=void 0,this.listeners=[]}}class hb{constructor(){this.queries=new Ig((e=>zm(e)),Um),this.onlineState="Unknown",this.vu=new Set}}async function fb(e,t){const n=Rf(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new db),i)try{o.Pu=await n.onListen(r)}catch(e){const n=ab(e,`Initialization of query '${Vm(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Pu&&t.Vu(o.Pu)&&vb(n)}async function pb(e,t){const n=Rf(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mb(e,t){const n=Rf(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Vu(e)&&(r=!0);i.Pu=e}}r&&vb(n)}function gb(e,t,n){const r=Rf(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function vb(e){e.vu.forEach((e=>{e.next()}))}class yb{constructor(e,t,n){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new cb(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.$u||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ku(e){e=cb.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}
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
class bb{constructor(e){this.key=e}}class wb{constructor(e){this.key=e}}class Sb{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Ug(),this.mutatedKeys=Ug(),this.ju=Hm(e),this.zu=new lb(this.ju)}get Wu(){return this.Ku}Hu(e,t){const n=t?t.Ju:new ub,r=t?t.zu:this.zu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=$m(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Yu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.ju(c,a)>0||l&&this.ju(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(o=o.add(c),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{zu:o,Ju:n,Li:s,mutatedKeys:i}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pf()}};return n(e)-n(t)}(e.type,t.type)||this.ju(e.doc,t.doc))),this.Zu(n);const o=t?this.Xu():[],s=0===this.Qu.size&&this.current?1:0,a=s!==this.Gu;return this.Gu=s,0!==i.length||a?{snapshot:new cb(this.query,e.zu,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ub,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach((e=>this.Ku=this.Ku.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ku=this.Ku.delete(e))),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Ug(),this.zu.forEach((e=>{this.ec(e.key)&&(this.Qu=this.Qu.add(e.key))}));const t=[];return e.forEach((e=>{this.Qu.has(e)||t.push(new wb(e))})),this.Qu.forEach((n=>{e.has(n)||t.push(new bb(n))})),t}nc(e){this.Ku=e.Yi,this.Qu=Ug();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return cb.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class Eb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class kb{constructor(e){this.key=e,this.ic=!1}}class xb{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ig((e=>zm(e)),Um),this.uc=new Map,this.cc=new Set,this.ac=new pm(tp.comparator),this.hc=new Map,this.lc=new Wv,this.fc={},this.dc=new Map,this._c=zv.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function Tb(e,t){const n=Bb(e);let r,i;const o=n.oc.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.sc();else{const e=await uy(n.localStore,Mm(t));n.isPrimaryClient&&Dy(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await _b(n,t,r,"current"===o,e.resumeToken)}return i}async function _b(e,t,n,r,i){e.mc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Hu(n);i.Li&&(i=await dy(e.localStore,t.query,!1).then((({documents:e})=>t.view.Hu(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return jb(e,t.targetId,s.tc),s.snapshot}(e,t,n,r);const o=await dy(e.localStore,t,!0),s=new Sb(t,o.Yi),a=s.Hu(o.documents),l=Bg.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,l);jb(e,n,u.tc);const c=new Eb(t,n,s);return e.oc.set(t,c),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function Cb(e,t){const n=Rf(e),r=n.oc.get(t),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter((e=>!Um(e,t)))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cy(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ly(n.remoteStore,r.targetId),Lb(n,r.targetId)})).catch(up)):(Lb(n,r.targetId),await cy(n.localStore,r.targetId,!0))}async function Ib(e,t){const n=Rf(e);try{const e=await function(e,t){const n=Rf(e),r=t.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const s=[];t.targetChanges.forEach(((o,a)=>{const l=i.get(a);if(!l)return;s.push(n.Ns.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Ns.addMatchingKeys(e,o.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ep.EMPTY_BYTE_STRING,Xf.min()).withLastLimboFreeSnapshotVersion(Xf.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,u,o)&&s.push(n.Ns.updateTargetData(e,u))}));let a=Ng(),l=Ug();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(ay(e,o,t.documentUpdates).next((e=>{a=e.Hi,l=e.Ji}))),!r.isEqual(Xf.min())){const t=n.Ns.getLastRemoteSnapshotVersion(e).next((t=>n.Ns.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return cp.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ki=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.hc.get(t);r&&(Af(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ic=!0:e.modifiedDocuments.size>0?Af(r.ic):e.removedDocuments.size>0&&(Af(r.ic),r.ic=!1))})),await zb(n,e,t)}catch(e){await up(e)}}function Ob(e,t,n){const r=Rf(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.oc.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Rf(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)})),r&&vb(n)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nb(e,t,n){const r=Rf(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.hc.get(t),o=i&&i.key;if(o){let e=new pm(tp.comparator);e=e.insert(o,Em.newNoDocument(o,Xf.min()));const n=Ug().add(o),i=new $g(Xf.min(),new Map,new vm(Kf),e,n);await Ib(r,i),r.ac=r.ac.remove(o),r.hc.delete(t),Ub(r)}else await cy(r.localStore,t,!1).then((()=>Lb(r,t,n))).catch(up)}async function Pb(e,t){const n=Rf(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Rf(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=cp.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);Af(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ug();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Db(n,r,null),Rb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zb(n,e)}catch(e){await up(e)}}async function Ab(e,t,n){const r=Rf(e);try{const e=await function(e,t){const n=Rf(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Af(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Db(r,t,n),Rb(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zb(r,e)}catch(n){await up(n)}}function Rb(e,t){(e.dc.get(t)||[]).forEach((e=>{e.resolve()})),e.dc.delete(t)}function Db(e,t,n){const r=Rf(e);let i=r.fc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.fc[r.currentUser.toKey()]=i}}function Lb(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.uc.get(t))e.oc.delete(r),n&&e.rc.gc(r,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach((t=>{e.lc.containsKey(t)||Mb(e,t)}))}function Mb(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);null!==n&&(Ly(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),Ub(e))}function jb(e,t,n){for(const r of n)r instanceof bb?(e.lc.addReference(r.key,t),Fb(e,r)):r instanceof wb?(Cf("SyncEngine","Document no longer in limbo: "+r.key),e.lc.removeReference(r.key,t),e.lc.containsKey(r.key)||Mb(e,r.key)):Pf()}function Fb(e,t){const n=t.key,r=n.path.canonicalString();e.ac.get(n)||e.cc.has(r)||(Cf("SyncEngine","New document in limbo: "+n),e.cc.add(r),Ub(e))}function Ub(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new tp(Jf.fromString(t)),r=e._c.next();e.hc.set(r,new kb(n)),e.ac=e.ac.insert(n,r),Dy(e.remoteStore,new Rv(Mm(Nm(n.path)),r,2,hp.at))}}async function zb(e,t,n){const r=Rf(e),i=[],o=[],s=[];r.oc.isEmpty()||(r.oc.forEach(((e,a)=>{s.push(r.mc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=ty.Ni(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.rc.Ho(i),await async function(e,t){const n=Rf(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>cp.forEach(t,(t=>cp.forEach(t.Ci,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>cp.forEach(t.xi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!dp(e))throw e;Cf("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ki.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(t,i)}}}(r.localStore,o))}async function Vb(e,t){const n=Rf(e);if(!n.currentUser.isEqual(t)){Cf("SyncEngine","User change. New user:",t.toKey());const e=await oy(n.localStore,t);n.currentUser=t,function(e,t){e.dc.forEach((e=>{e.forEach((e=>{e.reject(new Lf(Df.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.dc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await zb(n,e.Wi)}}function $b(e,t){const n=Rf(e),r=n.hc.get(t);if(r&&r.ic)return Ug().add(r.key);{let e=Ug();const r=n.uc.get(t);if(!r)return e;for(const t of r){const r=n.oc.get(t);e=e.unionWith(r.view.Wu)}return e}}function Bb(e){const t=Rf(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ib.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nb.bind(null,t),t.rc.Ho=mb.bind(null,t.eventManager),t.rc.gc=gb.bind(null,t.eventManager),t}function Hb(e){const t=Rf(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ab.bind(null,t),t}class qb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=xy(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return iy(this.persistence,new ny,e.initialUser,this.Tt)}Tc(e){return new Jv(ey.qs,this.Tt)}Ic(e){return new py}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wb{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ob(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await rb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hb}createDatastore(e){const t=xy(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ey(r));var r;return function(e,t,n,r){return new Oy(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,o;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ob(this.syncEngine,e,0),o=gy.C()?new gy:new my,new Py(t,n,r,i,o)}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new xb(e,t,n,r,i,o);return s&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Rf(e);Cf("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await Ry(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}
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
class Kb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):If("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Gb{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=kf.UNAUTHENTICATED,this.clientId=Wf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Cf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Cf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Lf(Df.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ab(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Qb(e,t){e.asyncQueue.verifyOperationInProgress(),Cf("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await oy(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Xb(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yb(e);Cf("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>nb(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>nb(t.remoteStore,n))),e.onlineComponents=t}async function Yb(e){return e.offlineComponents||(Cf("FirestoreClient","Using default OfflineComponentProvider"),await Qb(e,new qb)),e.offlineComponents}async function Jb(e){return e.onlineComponents||(Cf("FirestoreClient","Using default OnlineComponentProvider"),await Xb(e,new Wb)),e.onlineComponents}function Zb(e){return Jb(e).then((e=>e.syncEngine))}async function ew(e){const t=await Jb(e),n=t.eventManager;return n.onListen=Tb.bind(null,t.syncEngine),n.onUnlisten=Cb.bind(null,t.syncEngine),n}function tw(e,t,n={}){const r=new Mf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new Kb({next:o=>{t.enqueueAndForget((()=>pb(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new Lf(Df.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new Lf(Df.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new yb(Nm(n.path),o,{includeMetadataChanges:!0,$u:!0});return fb(e,s)}(await ew(e),e.asyncQueue,t,n,r))),r.promise}const nw=new Map;
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
 */function rw(e,t,n){if(!n)throw new Lf(Df.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iw(e){if(!tp.isDocumentKey(e))throw new Lf(Df.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ow(e){if(tp.isDocumentKey(e))throw new Lf(Df.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Pf()}function aw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Lf(Df.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sw(e);throw new Lf(Df.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class lw{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Lf(Df.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Lf(Df.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Lf(Df.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class uw{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Lf(Df.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Lf(Df.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lw(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ff;switch(e.type){case"gapi":const t=e.client;return new $f(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Lf(Df.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nw.get(e);t&&(Cf("ComponentProvider","Removing Datastore"),nw.delete(e),t.terminate())}(this),Promise.resolve()}}function cw(e,t,n,r={}){var i;const o=(e=aw(e,uw))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&Of("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=kf.MOCK_USER;else{t=Ba(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Lf(Df.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new kf(o)}e._authCredentials=new Uf(new jf(t,n))}}
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
 */class dw{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dw(this.firestore,e,this._key)}}class hw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hw(this.firestore,e,this._query)}}class fw extends hw{constructor(e,t,n){super(e,t,Nm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dw(this.firestore,null,new tp(e))}withConverter(e){return new fw(this.firestore,e,this._path)}}function pw(e,t,...n){if(e=fl(e),rw("collection","path",t),e instanceof uw){const r=Jf.fromString(t,...n);return ow(r),new fw(e,null,r)}{if(!(e instanceof dw||e instanceof fw))throw new Lf(Df.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Jf.fromString(t,...n));return ow(r),new fw(e.firestore,null,r)}}function mw(e,t,...n){if(e=fl(e),1===arguments.length&&(t=Wf.R()),rw("doc","path",t),e instanceof uw){const r=Jf.fromString(t,...n);return iw(r),new dw(e,null,new tp(r))}{if(!(e instanceof dw||e instanceof fw))throw new Lf(Df.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Jf.fromString(t,...n));return iw(r),new dw(e.firestore,e instanceof fw?e.converter:null,new tp(r))}}
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
class gw{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ty(this,"async_queue_retry"),this.Hc=()=>{const e=ky();e&&Cf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};const e=ky();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=ky();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise((()=>{}));const t=new Mf;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Uc.push(e),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!dp(e))throw e;Cf("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(e){const t=this.qc.then((()=>(this.jc=!0,e().catch((e=>{this.Qc=e,this.jc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw If("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.jc=!1,e))))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const r=sb.createAndSchedule(this,e,t,n,(e=>this.Xc(e)));return this.Gc.push(r),r}Jc(){this.Qc&&Pf()}verifyOperationInProgress(){}async ta(){let e;do{e=this.qc,await e}while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then((()=>{this.Gc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Gc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()}))}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function vw(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class yw extends uw{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gw,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ww(this),this._firestoreClient.terminate()}}function bw(e){return e._firestoreClient||ww(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ww(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new fp(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Gb(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class Sw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sw(Ep.fromBase64String(e))}catch(e){throw new Lf(Df.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Sw(Ep.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Ew{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Lf(Df.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ep(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class kw{constructor(e){this._methodName=e}}
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
 */class xw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Lf(Df.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Lf(Df.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Kf(this._lat,e._lat)||Kf(this._long,e._long)}}
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
 */const Tw=/^__.*__$/;class _w{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new vg(e,this.data,this.fieldMask,t,this.fieldTransforms):new gg(e,this.data,t,this.fieldTransforms)}}function Cw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pf()}}class Iw{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Iw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.aa(e),r}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return zw(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(Cw(this.ra)&&Tw.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Ow{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||xy(e)}wa(e,t,n,r=!1){return new Iw({ra:e,methodName:t,_a:n,path:ep.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Nw(e){const t=e._freezeSettings(),n=xy(e._databaseId);return new Ow(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pw(e,t,n,r,i,o={}){const s=e.wa(o.merge||o.mergeFields?2:0,t,n,i);Mw("Data must be an object, but it was:",s,r);const a=Dw(r,s);let l,u;if(o.merge)l=new bm(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=jw(t,r,n);if(!s.contains(i))throw new Lf(Df.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Vw(e,i)||e.push(i)}l=new bm(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new _w(new wm(a),l,u)}function Aw(e,t,n,r=!1){return Rw(n,e.wa(r?4:3,t))}function Rw(e,t){if(Lw(e=fl(e)))return Mw("Unsupported field value:",t,e),Dw(e,t);if(e instanceof kw)return function(e,t){if(!Cw(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&4!==t.ra)throw t.fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Rw(i,t.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=fl(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Gm(t.Tt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Qf.fromDate(e);return{timestampValue:tv(t.Tt,n)}}if(e instanceof Qf){const n=new Qf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tv(t.Tt,n)}}if(e instanceof xw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Sw)return{bytesValue:nv(t.Tt,e._byteString)};if(e instanceof dw){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ov(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${sw(e)}`)}(e,t)}function Dw(e,t){const n={};return vp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):gp(e,((e,r)=>{const i=Rw(r,t.ua(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Lw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Qf||e instanceof xw||e instanceof Sw||e instanceof dw||e instanceof kw)}function Mw(e,t,n){if(!Lw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=sw(n);throw"an object"===r?t.fa(e+" a custom object"):t.fa(e+" "+r)}}function jw(e,t,n){if((t=fl(t))instanceof Ew)return t._internalPath;if("string"==typeof t)return Uw(e,t);throw zw("Field path arguments must be of type string or ",e,!1,void 0,n)}const Fw=new RegExp("[~\\*/\\[\\]]");function Uw(e,t,n){if(t.search(Fw)>=0)throw zw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ew(...t.split("."))._internalPath}catch(r){throw zw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zw(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Lf(Df.INVALID_ARGUMENT,a+e+l)}function Vw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class $w{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dw(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Bw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Bw extends $w{data(){return super.data()}}function Hw(e,t){return"string"==typeof t?Uw(e,t):t instanceof Ew?t._internalPath:t._delegate._internalPath}
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
 */function qw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Lf(Df.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ww{}class Kw extends Ww{}function Gw(e,t,...n){let r=[];t instanceof Ww&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Yw)).length,n=e.filter((e=>e instanceof Qw)).length;if(t>1||t>0&&n>0)throw new Lf(Df.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class Qw extends Kw{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Qw(e,t,n)}_apply(e){const t=this._parse(e);return eS(e._query,t),new hw(e.firestore,e.converter,jm(e._query,t))}_parse(e){const t=Nw(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new Lf(Df.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Zw(s,o);const t=[];for(const n of s)t.push(Jw(r,e,n));a={arrayValue:{values:t}}}else a=Jw(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Zw(s,o),a=Aw(n,"where",s,"in"===o||"not-in"===o);return Xp.create(i,o,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Xw(e,t,n){const r=t,i=Hw("where",e);return Qw._create(i,r,n)}class Yw extends Ww{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yw(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Yp.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)eS(n,e),n=jm(n,e)}(e._query,t),new hw(e.firestore,e.converter,jm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Jw(e,t,n){if("string"==typeof(n=fl(n))){if(""===n)throw new Lf(Df.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(t)&&-1!==n.indexOf("/"))throw new Lf(Df.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Jf.fromString(n));if(!tp.isDocumentKey(r))throw new Lf(Df.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fp(e,new tp(r))}if(n instanceof dw)return Fp(e,n._key);throw new Lf(Df.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sw(n)}.`)}function Zw(e,t){if(!Array.isArray(e)||0===e.length)throw new Lf(Df.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function eS(e,t){if(t.isInequality()){const n=Rm(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Lf(Df.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Am(e);null!==i&&tS(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Lf(Df.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Lf(Df.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function tS(e,t,n){if(!n.isEqual(t))throw new Lf(Df.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class nS{convertValue(e,t="none"){switch(Pp(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tp(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_p(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Pf()}}convertObject(e,t){const n={};return gp(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new xw(Tp(e.latitude),Tp(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ip(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Op(e));default:return null}}convertTimestamp(e){const t=xp(e);return new Qf(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Jf.fromString(e);Af(_v(n));const r=new pp(n.get(1),n.get(3)),i=new tp(n.popFirst(5));return r.isEqual(t)||If(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function rS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class iS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oS extends $w{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sS extends oS{data(e={}){return super.data(e)}}class aS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new iS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new sS(this._firestore,this._userDataWriter,n.key,n,new iS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Lf(Df.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new sS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new iS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new sS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:lS(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Pf()}}
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
function uS(e){e=aw(e,dw);const t=aw(e.firestore,yw);return tw(bw(t),e._key).then((n=>pS(t,e,n)))}class cS extends nS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dw(this.firestore,null,t)}}function dS(e,t,n){e=aw(e,dw);const r=aw(e.firestore,yw),i=rS(e.converter,t,n);return fS(r,[Pw(Nw(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,lg.none())])}function hS(e,...t){var n,r,i;e=fl(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||vw(t[s])||(o=t[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(vw(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,c;if(e instanceof dw)u=aw(e.firestore,yw),c=Nm(e._key.path),l={next:n=>{t[s]&&t[s](pS(u,e,n))},error:t[s+1],complete:t[s+2]};else{const n=aw(e,hw);u=aw(n.firestore,yw),c=n._query;const r=new cS(u);l={next:e=>{t[s]&&t[s](new aS(u,r,n,e))},error:t[s+1],complete:t[s+2]},qw(e._query)}return function(e,t,n,r){const i=new Kb(r),o=new yb(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>fb(await ew(e),o))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>pb(await ew(e),o)))}}(bw(u),c,a,l)}function fS(e,t){return function(e,t){const n=new Mf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Hb(e);try{const e=await function(e,t){const n=Rf(e),r=Qf.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ug());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ng(),l=Ug();return n.ji.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=pg(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new vg(e.key,t,Sm(t.value.mapValue),lg.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Rg(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fc[e.currentUser.toKey()];r||(r=new pm(Kf)),r=r.insert(t,n),e.fc[e.currentUser.toKey()]=r}(r,e.batchId,n),await zb(r,e.changes),await Ky(r.remoteStore)}catch(e){const t=ab(e,"Failed to persist write");n.reject(t)}}(await Zb(e),t,n))),n.promise}(bw(e),t)}function pS(e,t,n){const r=n.docs.get(t._key),i=new cS(e);return new oS(e,i,t._key,r,new iS(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){xf=ru,Zl(new pl("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new yw(new zf(e.getProvider("auth-internal")),new Hf(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Lf(Df.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pp(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),su(Ef,"3.9.0",e),su(Ef,"3.9.0","esm2017")}();
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
su("firebase","9.18.0","app");const mS="@firebase/installations",gS="0.6.4",vS=1e4,yS=`w:${gS}`,bS="FIS_v2",wS="https://firebaseinstallations.googleapis.com/v1",SS=36e5,ES=new Ya("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function kS(e){return e instanceof Xa&&e.code.includes("request-failed")}
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
 */function xS({projectId:e}){return`${wS}/projects/${e}/installations`}function TS(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function _S(e,t){const n=(await t.json()).error;return ES.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function CS({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function IS(e,{refreshToken:t}){const n=CS(e);return n.append("Authorization",function(e){return`${bS} ${e}`}
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
 */(t)),n}async function OS(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function NS(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const PS=/^[cdef][\w-]{21}$/,AS="";function RS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return PS.test(t)?t:AS}catch(e){return AS}}function DS(e){return`${e.appName}!${e.appId}`}
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
 */const LS=new Map;function MS(e,t){const n=DS(e);jS(n,t),function(e,t){const n=US();n&&n.postMessage({key:e,fid:t});zS()}(n,t)}function jS(e,t){const n=LS.get(e);if(n)for(const e of n)e(t)}let FS=null;function US(){return!FS&&"BroadcastChannel"in self&&(FS=new BroadcastChannel("[Firebase] FID Change"),FS.onmessage=e=>{jS(e.data.key,e.data.fid)}),FS}function zS(){0===LS.size&&FS&&(FS.close(),FS=null)}
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
 */const VS="firebase-installations-database",$S=1,BS="firebase-installations-store";let HS=null;function qS(){return HS||(HS=Ul(VS,$S,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(BS)}})),HS}async function WS(e,t){const n=DS(e),r=(await qS()).transaction(BS,"readwrite"),i=r.objectStore(BS),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||MS(e,t.fid),t}async function KS(e){const t=DS(e),n=(await qS()).transaction(BS,"readwrite");await n.objectStore(BS).delete(t),await n.done}async function GS(e,t){const n=DS(e),r=(await qS()).transaction(BS,"readwrite"),i=r.objectStore(BS),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||o&&o.fid===s.fid||MS(e,s.fid),s}
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
 */async function QS(e){let t;const n=await GS(e.appConfig,(n=>{const r=function(e){const t=e||{fid:RS(),registrationStatus:0};return JS(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(ES.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=xS(e),i=CS(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:bS,appId:e.appId,sdkVersion:yS},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await OS((()=>fetch(r,a)));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:TS(e.authToken)}}throw await _S("Create Installation",l)}(e,t);return WS(e.appConfig,n)}catch(n){throw kS(n)&&409===n.customData.serverCode?await KS(e.appConfig):await WS(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:XS(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===AS?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function XS(e){let t=await YS(e.appConfig);for(;1===t.registrationStatus;)await NS(100),t=await YS(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await QS(e);return n||t}return t}function YS(e){return GS(e,(e=>{if(!e)throw ES.create("installation-not-found");return JS(e)}))}function JS(e){return 1===(t=e).registrationStatus&&t.registrationTime+vS<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function ZS({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${xS(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=IS(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:yS,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await OS((()=>fetch(r,a)));if(l.ok){return TS(await l.json())}throw await _S("Generate Auth Token",l)}async function eE(e,t=!1){let n;const r=await GS(e.appConfig,(r=>{if(!nE(r))throw ES.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+SS}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await tE(e.appConfig);for(;1===n.authToken.requestStatus;)await NS(100),n=await tE(e.appConfig);const r=n.authToken;return 0===r.requestStatus?eE(e,t):r}(e,t),r;{if(!navigator.onLine)throw ES.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await ZS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await WS(e.appConfig,r),n}catch(n){if(!kS(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await WS(e.appConfig,n)}else await KS(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function tE(e){return GS(e,(e=>{if(!nE(e))throw ES.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+vS<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function nE(e){return void 0!==e&&2===e.registrationStatus}
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
async function rE(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await QS(e);t&&await t}
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
 */(n);return(await eE(n,t)).token}function iE(e){return ES.create("missing-app-config-values",{valueName:e})}
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
 */const oE="installations",sE="installations-internal",aE=e=>{const t=eu(e.getProvider("app").getImmediate(),oE).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await QS(t);return r?r.catch(console.error):eE(t).catch(console.error),n.fid}(t),getToken:e=>rE(t,e)}};Zl(new pl(oE,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw iE("App Configuration");if(!e.name)throw iE("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw iE(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:eu(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Zl(new pl(sE,aE,"PRIVATE")),su(mS,gS),su(mS,gS,"esm2017");
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
const lE="analytics",uE="firebase_id",cE="origin",dE=6e4,hE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fE="https://www.googletagmanager.com/gtag/js",pE=new Tl("@firebase/analytics");
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
function mE(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function gE(e,t,n,r){return async function(i,o,s){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await mE(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(e){pE.error(e)}}(e,t,n,o,s):"config"===i?await async function(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=(await mE(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){pE.error(e)}e("config",i,o)}(e,t,n,r,o,s):"consent"===i?e("consent","update",s):e("set",o)}catch(e){pE.error(e)}}}
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
const vE=new Ya("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),yE=30;const bE=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function wE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function SE(e,t=bE,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw vE.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw vE.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kE;return setTimeout((async()=>{a.abort()}),void 0!==n?n:dE),EE({appId:r,apiKey:i,measurementId:o},s,a,t)}async function EE(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=bE){var o;const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(vE.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return pE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:wE(r)},o=hE.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw vE.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){const l=t;if(!function(e){if(!(e instanceof Xa&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(i.deleteThrottleMetadata(s),a)return pE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:s,measurementId:a};throw t}const u=503===Number(null===(o=null==l?void 0:l.customData)||void 0===o?void 0:o.httpStatus)?hl(n,i.intervalMillis,yE):hl(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,c),pE.debug(`Calling attemptFetch again in ${u} millis`),EE(e,c,r,i)}}class kE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */let xE,TE;function _E(e){TE=e}function CE(e){xE=e}
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
 */async function IE(e,t,n,r,i,o,s){var a;const l=SE(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&pE.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>pE.error(e))),t.push(l);const u=async function(){if(!Ka())return pE.warn(vE.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Ga()}catch(e){return pE.warn(vE.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[c,d]=await Promise.all([l,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(fE)&&n.src.includes(e))return n;return null})(o)||function(e,t){const n=document.createElement("script");n.src=`${fE}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(o,c.measurementId),TE&&(i("consent","default",TE),_E(void 0)),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h[cE]="firebase",h.update=!0,null!=d&&(h[uE]=d),i("config",c.measurementId,h),xE&&(i("set",xE),CE(void 0)),c.measurementId}
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
 */class OE{constructor(e){this.app=e}_delete(){return delete NE[this.app.options.appId],Promise.resolve()}}let NE={},PE=[];const AE={};let RE,DE,LE="dataLayer",ME="gtag",jE=!1;function FE(e,t,n){!function(){const e=[];if(qa()&&e.push("This is a browser extension environment."),Qa()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=vE.create("invalid-analytics-context",{errorInfo:t});pE.warn(n.message)}}();const r=e.options.appId;if(!r)throw vE.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw vE.create("no-api-key");pE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=NE[r])throw vE.create("already-exists",{id:r});if(!jE){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(LE);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=gE(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(NE,PE,AE,LE,ME);DE=e,RE=t,jE=!0}NE[r]=IE(e,PE,AE,t,RE,LE,n);return new OE(e)}function UE(e,t,n,r){e=fl(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(DE,NE[e.app.options.appId],t,n,r).catch((e=>pE.error(e)))}const zE="@firebase/analytics",VE="0.9.4";Zl(new pl(lE,((e,{options:t})=>FE(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Zl(new pl("analytics-internal",(function(e){try{const t=e.getProvider(lE).getImmediate();return{logEvent:(e,n,r)=>UE(t,e,n,r)}}catch(e){throw vE.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),su(zE,VE),su(zE,VE,"esm2017");function $E(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function BE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HE=BE,qE=new Ya("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),WE=new Tl("@firebase/auth");function KE(e,...t){WE.logLevel<=bl.ERROR&&WE.error(`Auth (${ru}): ${e}`,...t)}
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
 */function GE(e,...t){throw JE(e,...t)}function QE(e,...t){return JE(e,...t)}function XE(e,t,n){const r=Object.assign(Object.assign({},HE()),{[t]:n});return new Ya("auth","Firebase",r).create(t,{appName:e.name})}function YE(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&GE(e,"argument-error"),XE(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function JE(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qE.create(e,...t)}function ZE(e,t,...n){if(!e)throw JE(t,...n)}function ek(e){const t="INTERNAL ASSERTION FAILED: "+e;throw KE(t),new Error(t)}function tk(e,t){e||ek(t)}
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
 */const nk=new Map;function rk(e){tk(e instanceof Function,"Expected a class definition");let t=nk.get(e);return t?(tk(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,nk.set(e,t),t)}
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
function ik(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ok(){return"http:"===sk()||"https:"===sk()}function sk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class ak{constructor(e,t){this.shortDelay=e,this.longDelay=t,tk(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ha())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ok()||qa()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function lk(e,t){tk(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class uk{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ek("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ek("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ek("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ck={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},dk=new ak(3e4,6e4);
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
 */function hk(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fk(e,t,n,r,i={}){return pk(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=nl(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),uk.fetch()(gk(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function pk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ck),t);try{const t=new vk(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yk(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw yk(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw yk(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw yk(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw XE(e,a,s);GE(e,a)}}catch(t){if(t instanceof Xa)throw t;GE(e,"internal-error",{message:String(t)})}}async function mk(e,t,n,r,i={}){const o=await fk(e,t,n,r,i);return"mfaPendingCredential"in o&&GE(e,"multi-factor-auth-required",{_serverResponse:o}),o}function gk(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?lk(e.config,i):`${e.config.apiScheme}://${i}`}class vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(QE(this.auth,"network-request-failed"))),dk.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function yk(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=QE(e,t,r);return i.customData._tokenResponse=n,i}
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
function bk(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function wk(e){return 1e3*Number(e)}function Sk(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return KE("JWT malformed, contained fewer than 3 sections"),null;try{const e=La(n);return e?JSON.parse(e):(KE("Failed to decode base64 JWT payload"),null)}catch(e){return KE("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function Ek(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Xa&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class xk{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bk(this.lastLoginAt),this.creationTime=bk(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Tk(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ek(e,async function(e,t){return fk(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ZE(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=$E(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),c=!!l&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new xk(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}
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
class _k{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ZE(e.idToken,"internal-error"),ZE(void 0!==e.idToken,"internal-error"),ZE(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Sk(e);return ZE(t,"internal-error"),ZE(void 0!==t.exp,"internal-error"),ZE(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ZE(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await pk(e,{},(async()=>{const n=nl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=gk(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",uk.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new _k;return n&&(ZE("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(ZE("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(ZE("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _k,this.toJSON())}_performRefresh(){return ek("not implemented")}}
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
 */function Ck(e,t){ZE("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ik{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=$E(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xk(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ek(this,this.stsTokenManager.getToken(this.auth,e));return ZE(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=fl(e),r=await n.getIdToken(t),i=Sk(r);ZE(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:bk(wk(i.auth_time)),issuedAtTime:bk(wk(i.iat)),expirationTime:bk(wk(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=fl(e);await Tk(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ZE(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ik(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ZE(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Tk(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ek(this,async function(e,t){return fk(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:S,stsTokenManager:E}=t;ZE(y&&E,e,"internal-error");const k=_k.fromJSON(this.name,E);ZE("string"==typeof y,e,"internal-error"),Ck(c,e.name),Ck(d,e.name),ZE("boolean"==typeof b,e,"internal-error"),ZE("boolean"==typeof w,e,"internal-error"),Ck(h,e.name),Ck(f,e.name),Ck(p,e.name),Ck(m,e.name),Ck(g,e.name),Ck(v,e.name);const x=new Ik({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return S&&Array.isArray(S)&&(x.providerData=S.map((e=>Object.assign({},e)))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new _k;r.updateFromServerResponse(t);const i=new Ik({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Tk(i),i}}
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
 */class Ok{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ok.type="NONE";const Nk=Ok;
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
 */function Pk(e,t,n){return`firebase:${e}:${t}:${n}`}class Ak{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Pk(this.userKey,r.apiKey,i),this.fullPersistenceKey=Pk("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ik._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ak(rk(Nk),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||rk(Nk);const o=Pk(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=Ik._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Ak(i,e,n)):new Ak(i,e,n)}}
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
 */function Rk(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Dk(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Uk(t))return"Blackberry";if(zk(t))return"Webos";if(Lk(t))return"Safari";if((t.includes("chrome/")||Mk(t))&&!t.includes("edge/"))return"Chrome";if(Fk(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Dk(e=Ha()){return/firefox\//i.test(e)}function Lk(e=Ha()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mk(e=Ha()){return/crios\//i.test(e)}function jk(e=Ha()){return/iemobile/i.test(e)}function Fk(e=Ha()){return/android/i.test(e)}function Uk(e=Ha()){return/blackberry/i.test(e)}function zk(e=Ha()){return/webos/i.test(e)}function Vk(e=Ha()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $k(){return Wa()&&10===document.documentMode}function Bk(e=Ha()){return Vk(e)||Fk(e)||zk(e)||Uk(e)||/windows phone/i.test(e)||jk(e)}
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
function Hk(e,t=[]){let n;switch(e){case"Browser":n=Rk(Ha());break;case"Worker":n=`${Rk(Ha())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ru}/${r}`}
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
 */class qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Wk{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gk(this),this.idTokenSubscription=new Gk(this),this.beforeStateQueue=new qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rk(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ak.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ZE(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tk(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?fl(e):null;return t&&ZE(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ZE(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(rk(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rk(e)||this._popupRedirectResolver;ZE(t,this,"argument-error"),this.redirectPersistenceManager=await Ak.create(this,[rk(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ZE(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ZE(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Kk(e){return fl(e)}class Gk{constructor(e){this.auth=e,this.observer=null,this.addObserver=ol((e=>this.observer=e))}get next(){return ZE(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Qk(e,t,n){const r=Kk(e);ZE(r._canInitEmulator,r,"emulator-config-failed"),ZE(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=Xk(t),{host:s,port:a}=function(e){const t=Xk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Yk(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Yk(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Xk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Yk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Jk{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ek("not implemented")}_getIdTokenResponse(e){return ek("not implemented")}_linkToIdToken(e,t){return ek("not implemented")}_getReauthenticationResolver(e){return ek("not implemented")}}
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
 */async function Zk(e,t){return fk(e,"POST","/v1/accounts:update",t)}
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
class ex extends Jk{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ex(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ex(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return mk(e,"POST","/v1/accounts:signInWithPassword",hk(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return mk(e,"POST","/v1/accounts:signInWithEmailLink",hk(e,t))}(e,{email:this._email,oobCode:this._password});default:GE(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Zk(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return mk(e,"POST","/v1/accounts:signInWithEmailLink",hk(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:GE(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function tx(e,t){return mk(e,"POST","/v1/accounts:signInWithIdp",hk(e,t))}
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
 */class nx extends Jk{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nx(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):GE("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=$E(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new nx(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return tx(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,tx(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tx(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nl(t)}return e}}
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
 */const rx={USER_NOT_FOUND:"user-not-found"};
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
class ix extends Jk{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ix({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ix({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return mk(e,"POST","/v1/accounts:signInWithPhoneNumber",hk(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await mk(e,"POST","/v1/accounts:signInWithPhoneNumber",hk(e,t));if(n.temporaryProof)throw yk(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return mk(e,"POST","/v1/accounts:signInWithPhoneNumber",hk(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),rx)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ix({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class ox{constructor(e){var t,n,r,i,o,s;const a=rl(il(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ZE(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=rl(il(e)).link,n=t?rl(il(t)).deep_link_id:null,r=rl(il(e)).deep_link_id;return(r?rl(il(r)).link:null)||r||n||t||e}(e);try{return new ox(t)}catch(e){return null}}}
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
class sx{constructor(){this.providerId=sx.PROVIDER_ID}static credential(e,t){return ex._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ox.parseLink(t);return ZE(n,"argument-error"),ex._fromEmailAndCode(e,n.code,n.tenantId)}}sx.PROVIDER_ID="password",sx.EMAIL_PASSWORD_SIGN_IN_METHOD="password",sx.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ax{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class lx extends ax{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class ux extends lx{constructor(){super("facebook.com")}static credential(e){return nx._fromParams({providerId:ux.PROVIDER_ID,signInMethod:ux.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ux.credentialFromTaggedObject(e)}static credentialFromError(e){return ux.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ux.credential(e.oauthAccessToken)}catch(e){return null}}}ux.FACEBOOK_SIGN_IN_METHOD="facebook.com",ux.PROVIDER_ID="facebook.com";
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
class cx extends lx{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nx._fromParams({providerId:cx.PROVIDER_ID,signInMethod:cx.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return cx.credentialFromTaggedObject(e)}static credentialFromError(e){return cx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return cx.credential(t,n)}catch(e){return null}}}cx.GOOGLE_SIGN_IN_METHOD="google.com",cx.PROVIDER_ID="google.com";
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
class dx extends lx{constructor(){super("github.com")}static credential(e){return nx._fromParams({providerId:dx.PROVIDER_ID,signInMethod:dx.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dx.credentialFromTaggedObject(e)}static credentialFromError(e){return dx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dx.credential(e.oauthAccessToken)}catch(e){return null}}}dx.GITHUB_SIGN_IN_METHOD="github.com",dx.PROVIDER_ID="github.com";
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
class hx extends lx{constructor(){super("twitter.com")}static credential(e,t){return nx._fromParams({providerId:hx.PROVIDER_ID,signInMethod:hx.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hx.credentialFromTaggedObject(e)}static credentialFromError(e){return hx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return hx.credential(t,n)}catch(e){return null}}}hx.TWITTER_SIGN_IN_METHOD="twitter.com",hx.PROVIDER_ID="twitter.com";
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
class fx{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ik._fromIdTokenResponse(e,n,r),o=px(n);return new fx({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=px(n);return new fx({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function px(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class mx extends Xa{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,mx.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new mx(e,t,n,r)}}function gx(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw mx._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function vx(e,t,n=!1){const r=await Ek(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fx._forOperation(e,"link",r)}
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
async function yx(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Ek(e,gx(r,i,t,e),n);ZE(o.idToken,r,"internal-error");const s=Sk(o.idToken);ZE(s,r,"internal-error");const{sub:a}=s;return ZE(e.uid===a,r,"user-mismatch"),fx._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&GE(r,"user-mismatch"),e}}
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
 */async function bx(e,t,n=!1){const r="signIn",i=await gx(e,r,t),o=await fx._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function wx(e,t,n,r){return fl(e).onIdTokenChanged(t,n,r)}function Sx(e,t,n,r){return fl(e).onAuthStateChanged(t,n,r)}new WeakMap;const Ex="__sak";
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
 */class kx{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ex,"1"),this.storage.removeItem(Ex),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class xx extends kx{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ha();return Lk(e)||Vk(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Bk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);$k()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xx.type="LOCAL";const Tx=xx;
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
 */class _x extends kx{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_x.type="SESSION";const Cx=_x;
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
class Ix{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ix(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ox(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ix.receivers=[];class Nx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=Ox("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function Px(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function Ax(){return void 0!==Px().WorkerGlobalScope&&"function"==typeof Px().importScripts}
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
const Rx="firebaseLocalStorageDb",Dx=1,Lx="firebaseLocalStorage",Mx="fbase_key";class jx{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Fx(e,t){return e.transaction([Lx],t?"readwrite":"readonly").objectStore(Lx)}function Ux(){const e=indexedDB.open(Rx,Dx);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Lx,{keyPath:Mx})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Lx)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Rx);return new jx(e).toPromise()}(),t(await Ux()))}))}))}async function zx(e,t,n){const r=Fx(e,!0).put({[Mx]:t,value:n});return new jx(r).toPromise()}function Vx(e,t){const n=Fx(e,!0).delete(t);return new jx(n).toPromise()}class $x{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ux()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ax()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ix._getInstance(Ax()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Nx(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ux();return await zx(e,Ex,"1"),await Vx(e,Ex),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>zx(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Fx(e,!1).get(t),r=await new jx(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Vx(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Fx(e,!1).getAll();return new jx(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$x.type="LOCAL";const Bx=$x;
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
 */function Hx(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=QE("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function qx(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
qx("rcb"),new ak(3e4,6e4);
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
const Wx="recaptcha";async function Kx(e,t,n){var r;const i=await n.verify();try{let o;if(ZE("string"==typeof i,e,"argument-error"),ZE(n.type===Wx,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){ZE("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return fk(e,"POST","/v2/accounts/mfaEnrollment:start",hk(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{ZE("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;ZE(n,e,"missing-multi-factor-info");const s=await function(e,t){return fk(e,"POST","/v2/accounts/mfaSignIn:start",hk(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return fk(e,"POST","/v1/accounts:sendVerificationCode",hk(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Gx{constructor(e){this.providerId=Gx.PROVIDER_ID,this.auth=Kk(e)}verifyPhoneNumber(e,t){return Kx(this.auth,e,fl(t))}static credential(e,t){return ix._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Gx.credentialFromTaggedObject(t)}static credentialFromError(e){return Gx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ix._fromTokenResponse(t,n):null}}
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
function Qx(e,t){return t?rk(t):(ZE(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Gx.PROVIDER_ID="phone",Gx.PHONE_SIGN_IN_METHOD="phone";class Xx extends Jk{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tx(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tx(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tx(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yx(e){return bx(e.auth,new Xx(e),e.bypassAuthState)}function Jx(e){const{auth:t,user:n}=e;return ZE(n,t,"internal-error"),yx(n,new Xx(e),e.bypassAuthState)}async function Zx(e){const{auth:t,user:n}=e;return ZE(n,t,"internal-error"),vx(n,new Xx(e),e.bypassAuthState)}
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
 */class eT{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yx;case"linkViaPopup":case"linkViaRedirect":return Zx;case"reauthViaPopup":case"reauthViaRedirect":return Jx;default:GE(this.auth,"internal-error")}}resolve(e){tk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const tT=new ak(2e3,1e4);async function nT(e,t,n){const r=Kk(e);YE(e,t,ax);const i=Qx(r,n);return new rT(r,"signInViaPopup",t,i).executeNotNull()}class rT extends eT{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,rT.currentPopupAction&&rT.currentPopupAction.cancel(),rT.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ZE(e,this.auth,"internal-error"),e}async onExecution(){tk(1===this.filter.length,"Popup operations only handle one event");const e=Ox();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(QE(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(QE(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rT.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(QE(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,tT.get())};e()}}rT.currentPopupAction=null;
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
const iT="pendingRedirect",oT=new Map;class sT extends eT{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=oT.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=uT(t),r=lT(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}oT.set(this.auth._key(),e)}return this.bypassAuthState||oT.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function aT(e,t){oT.set(e._key(),t)}function lT(e){return rk(e._redirectPersistence)}function uT(e){return Pk(iT,e.config.apiKey,e.name)}
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
 */async function cT(e,t,n=!1){const r=Kk(e),i=Qx(r,t),o=new sT(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class dT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fT(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(QE(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hT(e))}saveEventToCache(e){this.cachedEventUids.add(hT(e)),this.lastProcessedEventTime=Date.now()}}function hT(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fT({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const pT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mT=/^https?/;async function gT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return fk(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(vT(e))return}catch(e){}GE(e,"unauthorized-domain")}function vT(e){const t=ik(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mT.test(n))return!1;if(pT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yT=new ak(3e4,6e4);function bT(){const e=Px().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let wT=null;function ST(e){return wT=wT||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){bT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bT(),n(QE(e,"network-request-failed"))},timeout:yT.get()})}if(null===(i=null===(r=Px().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Px().gapi)||void 0===o?void 0:o.load)){const t=qx("iframefcb");return Px()[t]=()=>{gapi.load?s():n(QE(e,"network-request-failed"))},Hx(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw wT=null,e}))}(e),wT}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ET=new ak(5e3,15e3),kT="__/auth/iframe",xT="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_T=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CT(e){const t=e.config;ZE(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?lk(t,xT):`https://${e.config.authDomain}/${kT}`,r={apiKey:t.apiKey,appName:e.name,v:ru},i=_T.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${nl(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const IT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OT=500,NT=600,PT="_blank",AT="http://localhost";class RT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function DT(e,t,n,r=OT,i=NT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ha().toLowerCase();n&&(a=Mk(u)?PT:n),Dk(u)&&(t=t||AT,l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ha()){var t;return Vk(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new RT(null);const d=window.open(t||"",a,c);ZE(d,e,"popup-blocked");try{d.focus()}catch(e){}return new RT(d)}const LT="__/auth/handler",MT="emulator/auth/handler";function jT(e,t,n,r,i,o){ZE(e.config.authDomain,e,"auth-domain-config-required"),ZE(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ru,eventId:i};if(t instanceof ax){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Za(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof lx){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?lk(e,MT):`https://${e.authDomain}/${LT}`}
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
 */(e)}?${nl(a).slice(1)}`}const FT="webStorageSupport";const UT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cx,this._completeRedirectFn=cT,this._overrideRedirectResult=aT}async _openPopup(e,t,n,r){var i;tk(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return DT(e,jT(e,t,n,ik(),r),Ox())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=jT(e,t,n,ik(),r),Px().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(tk(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ST(e),n=Px().gapi;return ZE(n,e,"internal-error"),t.open({where:document.body,url:CT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=QE(e,"network-request-failed"),o=Px().setTimeout((()=>{r(i)}),ET.get());function s(){Px().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new dT(e);return t.register("authEvent",(t=>{ZE(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(FT,{type:FT},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[FT];void 0!==i&&t(!!i),GE(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bk()||Lk()||Vk()}};var zT="@firebase/auth",VT="0.21.5";
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
class $T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ZE(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const BT=Va("authIdTokenMaxAge")||300;let HT=null;const qT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BT)return;const i=null==n?void 0:n.token;HT!==i&&(HT=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WT(e=ou()){const t=eu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=eu(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(el(n.getOptions(),null!=t?t:{}))return e;GE(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:UT,persistence:[Bx,Tx,Cx]}),r=Va("authTokenSyncURL");if(r){const e=qT(r);!function(e,t,n){fl(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),wx(n,(t=>e(t)))}const i=Fa("auth");return i&&Qk(n,`http://${i}`),n}var KT;KT="Browser",Zl(new pl("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{ZE(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),ZE(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:KT,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hk(KT)},s=new Wk(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rk);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Zl(new pl("auth-internal",(e=>(e=>new $T(e))(Kk(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),su(zT,VT,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(KT)),su(zT,VT,"esm2017");const GT=(0,go.createSlice)({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{const n={...t.payload};e.user=n}}}),{setUser:QT}=GT.actions;var XT=GT.reducer;const YT=iu({apiKey:"AIzaSyDc0znz2fczV7ChFO5u_3ltIcLmOvgr9QU",authDomain:"bookflix-4892d.firebaseapp.com",projectId:"bookflix-4892d",storageBucket:"bookflix-4892d.appspot.com",messagingSenderId:"833962837938",appId:"1:833962837938:web:b3a3cc1495d1b8023646ab",measurementId:"G-5CBMEPBL54"}),JT=WT(YT),ZT=new cx;function e_(){const e=B();return JT.currentUser&&(0,s.jsx)("button",{className:"sign-out",onClick:()=>{JT.signOut(),e(QT(null))},children:"Sign Out"})}function t_(){const e=B();return(0,s.jsxs)("button",{onClick:()=>function(e){nT(JT,ZT).then((t=>{cx.credentialFromResult(t).accessToken;const n=t.user;console.log("user",n),e(QT(n))})).catch((e=>{e.code,e.message,e.email,cx.credentialFromError(e)}))}(e),type:"button",class:"text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",children:[(0,s.jsx)("svg",{class:"w-4 h-4 mr-2 -ml-1","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,s.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),"Sign in with Github"]})}const n_=function(e,t){const n="string"==typeof e?e:t||"(default)",r=eu("object"==typeof e?e:ou(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Ua("firestore");e&&cw(r,...e)}return r}(YT),r_=pw(n_,"favorites"),i_=WT(),o_=e=>({type:"favorites/updateFavorites",payload:e}),s_=(0,go.createAsyncThunk)("favorites/loadFavorites",(async(e,{dispatch:t})=>{const n=i_.currentUser;console.log(n),null!=n.uid&&null!=n||(console.log(n),t(o_([])));try{console.log("try",n.uid);const e=await Gw(pw(n_,"favorites"),Xw("userId","==",n.uid));return new Promise((n=>{hS(e,(e=>{let r=[];e.forEach((e=>{r.push(e.data())})),console.log(r),t(o_(r)),n(r)}))}))}catch(e){throw console.error("Error loading favorites:",e),e}})),a_=(0,go.createAsyncThunk)("favorites/addToFavorites",(async e=>{const t=currentUser.uid,n=mw(r_,e.id);if(!(await uS(n)).exists()){try{await dS(n,{...e,userId:t})}catch(e){throw e}return{...e,userId:t}}})),l_=(0,go.createAsyncThunk)("favorites/removeFromFavorites",(async e=>{currentUser.uid;const t=mw(r_,e.id);var n;if((await uS(t)).exists())try{return await(n=t,fS(aw(n.firestore,yw),[new Sg(n._key,lg.none())])),e.id}catch(e){throw e}}));var u_=(0,go.createSlice)({name:"favorites",initialState:{items:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(s_.pending,(e=>{e.loading=!0,e.error=null})).addCase(s_.fulfilled,((e,t)=>{e.loading=!1,e.items=t.payload})).addCase(s_.rejected,((e,t)=>{e.loading=!1,e.error=t.error.message})).addCase(a_.fulfilled,((e,t)=>{e.items.push(t.payload)})).addCase(l_.fulfilled,((e,t)=>{e.items=e.items.filter((e=>e.id!==t.payload))})).addCase(o_,((e,t)=>{console.log("action.payload",t.payload),e.items=t.payload})).addCase(QT,((e,t)=>{t.payload||(e.items=[])}))}}).reducer;function c_({modal:e,setModal:t,book:n}){const[r,i]=(0,m.useState)(!1),o=(0,m.useRef)(null),[a,l]=(0,m.useState)(!1),u=n.volumeInfo.imageLinks?.smallThumbnail||yn,c=(n?.volumeInfo?.description?.slice(0,400),E((e=>e.favorites.items)));(0,m.useEffect)((()=>{Object.values(c).some((e=>{console.log(c),console.log(e),console.log(n.id),console.log(e.id),e.id===n.id&&l(!0)}),[c])}));const d=B();return(0,s.jsx)(uo.Root,{show:e,as:m.Fragment,children:(0,s.jsxs)($i,{as:"div",className:"relative z-10",initialFocus:o,onClose:()=>t(!1),children:[(0,s.jsx)(uo.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsx)(uo.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)($i.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[(0,s.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,s.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,s.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,s.jsx)("img",{src:u})}),(0,s.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,s.jsx)($i.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:n?.volumeInfo?.title}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("p",{children:[n?.volumeInfo?.authors?.length>1?"Authors":"Author",":"]})}),(0,s.jsx)("div",{className:"mt-2",children:n?.volumeInfo?.authors?.map((e=>(0,s.jsx)("p",{className:"text-sm text-gray-500",children:e},mo())))}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsxs)("p",{children:[n?.volumeInfo?.categories?.length>1?"Categories":"Category",":"]}),n.volumeInfo?.categories?.map((e=>(0,s.jsx)("p",{className:"text-sm text-gray-500",children:e},mo())))]}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{children:" Pages:"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:n?.volumeInfo?.pageCount})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("p",{className:"text-sm text-gray-500",children:n?.volumeInfo?.description})})]})]})}),(0,s.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(0,s.jsx)("button",{type:"button",className:`${a?"bg-red-600":" bg-green-600"} transition-all duration-500 ${r?"animate-pulse":""} inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`,onClick:()=>(console.log(n),void d(a?l_(n):a_(n))),children:a?"Remove from Favorites":"Add to Favorites"}),(0,s.jsx)("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>t(!1),ref:o,children:"Cancel"})]})]})})})})]})})}var d_=function({book:e}){if(null==e)return null;const[t,n]=(0,m.useState)(!1),{title:r,imageLinks:i}=e.volumeInfo,o=i?.smallThumbnail||yn;return(0,s.jsxs)("div",{href:e.id,className:"group w-11/12 md:w-full",children:[(0,s.jsx)("div",{onClick:()=>{n(!0)},className:"h-[15rem] aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8",children:(0,s.jsx)("img",{src:o,alt:r,className:"h-full w-full object-cover object-center group-hover:opacity-75"})}),t&&(0,s.jsx)(c_,{setModal:n,modal:t,book:e})]},e.id)};o("acw62");const h_=()=>(0,s.jsxs)("div",{"data-testid":"shimmer-ui",className:"p-0 pt-6 flex md:p-20 shimmer-ui md:flex flex-col sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full",children:[(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{})]}),(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{})]}),(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{}),(0,s.jsx)(p_,{})]})]}),f_=()=>(0,s.jsx)("div",{className:"flex md:my-12 w-full",children:(0,s.jsx)("div",{className:"container px-5 pt-24 mx-auto w-full md:w-3/5",children:(0,s.jsx)("div",{className:"p-4 ",children:(0,s.jsxs)("div",{className:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[(0,s.jsx)("div",{className:"lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("h2",{className:"bg-gray-400 animate-pulse h-4 w-1/4 mb-2"}),(0,s.jsx)("h1",{className:"w-1/2 mb-4 h-6 animate-pulse bg-gray-500"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"}),(0,s.jsxs)("div",{className:"flex items-center flex-wrap ",children:[(0,s.jsx)("a",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,s.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})})})}),p_=()=>(0,s.jsx)("div",{className:"h-60 w-36 mt-5 border border-blue-300 shadow rounded-md p-4 max-w-sm w-5/5 mx-auto",children:(0,s.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,s.jsx)("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),(0,s.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})});var m_=function({topBooks:e}){return e.books?(0,s.jsxs)("div",{className:"pt-24 max-h-50 w-full mx-auto ","data-testid":"container-title",children:[(0,s.jsx)("h1",{className:Pn,children:e.title}),(0,s.jsx)("div",{className:" md:hidden",children:(0,s.jsx)(n(On),{..._n,className:" md:hidden",children:e.books.map(((e,t)=>(0,s.jsxs)("div",{className:" flex mx-1",children:[(0,s.jsx)("div",{className:"w-[8.5rem] h-64 md:w-20 ",children:g_(t)}),(0,s.jsx)(d_,{book:e,test:"test"})]},mo())))})}),(0,s.jsx)("div",{className:" justify-between hidden md:flex ",children:e.books.map(((e,t)=>(0,s.jsxs)("div",{className:"flex max-h-40",children:[(0,s.jsx)("div",{className:"w-[10rem] h-40 md:w-40 md:h-56",children:g_(t)}),(0,s.jsx)(d_,{book:e})]},e.id+t)))})]}):(0,s.jsx)(h_,{})};const g_=e=>0===e?bn:1===e?wn:2===e?Sn:3===e?En:4===e?kn:void 0;var v_=function({books:e,title:t,isSearchResult:r,row:i}){let o;return"1"===i?o={books:e.slice(0,5),title:"Top 10 Austria"}:"2"===i&&(o={books:e.slice(5,10),title:"Top 10 USA"}),top&&void 0!==o?(0,s.jsx)(m_,{topBooks:o}):null!=e.length?(0,s.jsxs)("div",{className:"max-h-50 pt-24 md:","data-testid":"container-title",children:[(0,s.jsxs)("div",{className:"md:hidden",children:[(0,s.jsx)("h1",{className:Pn,children:r?"SearchResults":t}),(0,s.jsx)(n(On),{className:` max-h-60 md:hidden ${r&&"w-72"}  `,...r?Tn:xn,children:e&&e.map((e=>(0,s.jsx)(d_,{book:e})))})]}),(0,s.jsx)("div",{className:"hidden md:flex",children:(0,s.jsxs)("div",{className:"mx-auto py-4 w-full",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-white-900",children:t}),(0,s.jsx)("div",{className:"mt-1 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-x-8",children:e&&e.map(((e,t)=>{if(t<16)return(0,s.jsx)(d_,{book:e})}))})]})})]}):void 0};o("acw62");var y_=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f_,{}),(0,s.jsx)(h_,{}),(0,s.jsx)(h_,{}),(0,s.jsx)(h_,{})]});const b_=(0,go.createSlice)({name:"books",initialState:{allBooks:{all:[],comedy:[],fantasy:[],crime:[]},loading:!1,searchValue:""},reducers:{addBooks:(e,t)=>{e.allBooks[t.payload.searchQuery]=t.payload.results},toggleLoading:(e,t)=>{e.loading=t.payload},setSearchValue:(e,t)=>{e.searchValue=t.payload}}}),{addBooks:w_,toggleLoading:S_,setSearchValue:E_}=b_.actions;var k_=b_.reducer;var x_=async(e,t,n)=>{if(null!=n[e]&&n[e].length>0)return n[e];let r;try{t(S_(!0));const n=""==e?"search-terms":e,i=await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${n}&key=AIzaSyDVfI3QcVoemzczaDYqqg13x0lODr8iSy4`);if(r=await i.json(),null==r.items)return;t(w_({searchQuery:e,results:r.items})),t(S_(!1))}catch(e){if(e)return alert("error:",e),t(S_(!1)),e}};m=o("acw62");var T_=()=>{const e=E((e=>e.books.searchValue)),t=E((e=>e.books.allBooks)),[n,r]=(0,m.useState)([]);return(0,m.useEffect)((()=>{if(""===e)return r([]);null!=t[e]&&t[e].length>0&&r(t[e])}),[e,t]),n.length>0&&(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)(v_,{resultContainer:"resultContainer",text:e,books:n,isSearchResult:!0,title:e,length:n.length})})};o("acw62");var __=()=>(0,s.jsx)("div",{className:"fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center",children:(0,s.jsxs)("div",{className:"bg-white border py-2 px-5 rounded-lg flex items-center flex-col",children:[(0,s.jsxs)("div",{className:"loader-dots block relative w-20 h-5 mt-2",children:[(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"})]}),(0,s.jsx)("div",{className:"text-gray-500 text-xs font-medium mt-2 text-center",children:"Loading Data..."})]})});var C_=()=>{const e=B(),t=async()=>{s_(),e((async(e,t)=>{try{x_("all",e,t),x_("fantasy",e,t),x_("comedy",e,t),x_("crime",e,t)}catch(e){console.error("Failed to fetch books",e)}}))};(0,m.useEffect)((()=>{!function(e){const t=JT.onAuthStateChanged((t=>{e(QT(t||null))}))}(e)}),[e]),(0,m.useEffect)((()=>{t()}),[]);const n=E((e=>e.books.allBooks.all)),r=E((e=>e.books.allBooks.fantasy)),i=E((e=>e.books.allBooks.comedy)),o=E((e=>e.books.allBooks.crime)),a=E((e=>e.books.loading));return null==n||0==n.length?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(y_,{})}):(0,s.jsxs)("div",{"data-testid":"homeComponent",className:"pt-20 md:pt-0 font-bookflix ",children:[a&&(0,s.jsx)(__,{}),(0,s.jsx)(Cn,{book:n[3]}),(0,s.jsx)(T_,{}),(0,s.jsx)(v_,{books:r,title:"Fantasy"}),(0,s.jsx)(v_,{books:i,title:"Comedy"}),(0,s.jsx)(v_,{books:n,title:"TOP 10 Books today",row:"1",top:!0}),(0,s.jsx)(v_,{books:n,title:"TOP 10 Books in Austria",row:"2",top:!0}),(0,s.jsx)(v_,{books:o,title:"Crime"})]})};o("acw62");var I_=()=>(0,s.jsx)("div",{className:"bg-black text-white w-full min-h-screen ",children:(0,s.jsx)(fn,{to:"/",children:"Home"})});o("acw62");var O_=function(){return(0,s.jsx)("div",{className:"max-w-full",children:(0,s.jsxs)("div",{role:"contentinfo",className:"member-footer pt-10",id:"member-footer",children:[(0,s.jsxs)("div",{className:"social-links flex my-5 ",children:[(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"facebook",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-facebook-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"instagram",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-instagram-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"twitter",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-twitter-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7679 8.20699C20.7912 11.5932 19.4564 14.8475 17.0619 17.242C14.6674 19.6365 11.4131 20.9713 8.02688 20.948C5.58911 20.9544 3.2014 20.2564 1.15088 18.938C1.50985 18.9771 1.87079 18.9955 2.23188 18.993C4.24756 18.9984 6.20627 18.3245 7.79188 17.08C5.87426 17.0472 4.18959 15.799 3.59988 13.974C3.8797 14.0187 4.16251 14.0421 4.44588 14.044C4.84342 14.0428 5.23922 13.9914 5.62388 13.891C3.53625 13.4666 2.03658 11.6303 2.03788 9.49999V9.44099C2.65823 9.78763 3.35178 9.98261 4.06188 10.01C2.08967 8.6933 1.48213 6.06953 2.67488 4.01999C4.9496 6.82015 8.30584 8.52335 11.9089 8.70599C11.8373 8.36899 11.8008 8.0255 11.7999 7.68099C11.8012 5.84293 12.9247 4.19202 14.634 3.51624C16.3433 2.84045 18.292 3.27679 19.5499 4.61699C20.552 4.4234 21.513 4.0573 22.3899 3.53499C22.0555 4.56892 21.3554 5.44537 20.4209 5.99999C21.3101 5.89964 22.1793 5.66707 22.9999 5.30999C22.3865 6.20227 21.6272 6.98488 20.7539 7.62499C20.7679 7.81999 20.7679 8.01399 20.7679 8.20699Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"https://www.youtube.com/",target:"_blank","aria-label":"youtube",rel:"noreferrer",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-youtube-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z",fill:"currentColor"})})})]}),(0,s.jsxs)("ul",{className:"member-footer-links grid grid-flow-col",children:[(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"/browse/audio-description",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Audiodeskription"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"https:www.google.com",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Hilfe-Center"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"/redeem",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Geschenkkarten"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"www.google.com",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Medien-Center"})})})]}),(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Anlegerbeziehungen"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Karriere"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Nutzungsbedingungen"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Datenschutz"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Rechtliche Hinweise"})})})]})]}),(0,s.jsx)("div",{className:"member-footer-service",children:(0,s.jsx)("button",{className:"service-code",children:"Service-Code"})}),(0,s.jsx)("div",{className:"member-footer-copyright",children:(0,s.jsx)("span",{children:"© 1997–2023 Inc.‎"})})]})})},N_=(m=o("acw62"),{});e(N_,"GenIcon",(()=>M_),(e=>M_=e));m=o("acw62"),m=o("acw62");var P_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A_=n(m).createContext&&n(m).createContext(P_),R_=function(){return R_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},R_.apply(this,arguments)},D_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function L_(e){return e&&e.map((function(e,t){return n(m).createElement(e.tag,R_({key:t},e.attr),L_(e.child))}))}function M_(e){return function(t){return n(m).createElement(j_,R_({attr:R_({},e.attr)},t),L_(e.child))}}function j_(e){var t=function(t){var r,i=e.attr,o=e.size,s=e.title,a=D_(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n(m).createElement("svg",R_({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,a,{className:r,style:R_(R_({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&n(m).createElement("title",null,s),e.children)};return void 0!==A_?n(m).createElement(A_.Consumer,null,(function(e){return t(e)})):t(P_)}function F_(e){return(0,N_.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function U_(e){return(0,N_.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}o("acw62");var z_=({setMenu:e})=>(0,s.jsxs)("div",{className:" z-50 border-r-4 text-white bg-black top-0 fixed w-3/6 left-0 overflow-hidden h-full overflow-x-hidden ",children:[(0,s.jsx)("div",{className:" items-center mx-auto w-4/5 flex mt-6 ",children:(0,s.jsx)(U_,{className:"pr-3 ",size:"3rem",onClick:()=>e(!1)})}),(0,s.jsx)("div",{className:"mx-auto w-4/5 mt-5",children:(0,s.jsx)("div",{className:"",children:gn.map(((e,t)=>(0,s.jsx)(fn,{className:"block mt-3 text-slate-300",to:e.path,children:e.name},e.path+t)))})})]});m=o("acw62"),m=o("acw62");var V_=e=>{const[t,n]=(0,m.useState)(e);return{value:t,onChange:e=>{n(e.target.value)}}};var $_=function(){const e=E((e=>e.books.allBooks)),t=V_(""),n=B();return(0,m.useEffect)((()=>{n(E_(t.value));const r=setTimeout((()=>{x_(t.value,n,e)}),1e3);return()=>{clearTimeout(r)}}),[t.value]),(0,s.jsx)("input",{type:"text",className:"text-black py-2 px-3 rounded-xl",placeholder:"Search for Books ",...t})};m=o("acw62");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function B_(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function H_(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var q_=function(){return q_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},q_.apply(this,arguments)},W_=function(e){return{loading:null==e,value:e}},K_=function(e){var t=e?e():void 0,n=(0,m.useReducer)((function(e,t){switch(t.type){case"error":return q_(q_({},e),{error:t.error,loading:!1,value:void 0});case"reset":return W_(t.defaultValue);case"value":return q_(q_({},e),{error:void 0,loading:!1,value:t.value});default:return e}}),W_(t)),r=n[0],i=n[1],o=(0,m.useCallback)((function(){var t=e?e():void 0;i({type:"reset",defaultValue:t})}),[e]),s=(0,m.useCallback)((function(e){i({type:"error",error:e})}),[]),a=(0,m.useCallback)((function(e){i({type:"value",value:e})}),[]);return(0,m.useMemo)((function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}}),[r.error,r.loading,o,s,a,r.value])},G_=function(e,t){var n=K_((function(){return e.currentUser})),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return(0,m.useEffect)((function(){var n=Sx(e,(function(e){return B_(void 0,void 0,void 0,(function(){var n;return H_(this,(function(r){switch(r.label){case 0:if(!(null==t?void 0:t.onUserChanged))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.onUserChanged(e)];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),o(n),[3,4];case 4:return s(e),[2]}}))}))}),o);return function(){n()}}),[e]),[a,i,r]};var Q_=()=>{const[e]=G_(JT),t=jt(),[n,r]=(0,m.useState)(!1),i=E((e=>e.favorites.items));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"z-50 h-20 flex  md:w-full  top-0 ",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between w-full ",children:[(0,s.jsx)(F_,{onClick:()=>{setTimeout((()=>{r(!n)}),50)},className:" md:hidden text-[2em] "}),(0,s.jsx)(fn,{to:"/",children:(0,s.jsx)("img",{"data-testid":"logo",className:"h-20 ",src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bookstore-logo-design-template-33f3abd4285d1eeccd6c235cbeb0b964_screen.jpg?ts=1659428394",alt:"logo"})}),(0,s.jsx)($_,{})]}),(0,s.jsxs)("div",{"data-testid":"links",className:" hidden md:flex justify-between items-center w-3/12 text-3xl ",children:[(0,s.jsxs)("div",{className:"flex items-center ",children:[(0,s.jsx)(fn,{className:("/"===t.pathname?"text-red-400":"")+" px-4  font-bold",to:"/",children:"Home"}),e?(0,s.jsx)(e_,{}):(0,s.jsx)(t_,{})]}),(0,s.jsxs)("div",{className:"flex items-center ",children:[(0,s.jsx)(fn,{className:("/favorites"===t.pathname?"text-red-400":"")+"  text-3xl font-bold",to:"/favorites",children:"Favorites"}),(0,s.jsx)("span",{className:"text-xs mx-3 ","data-testid":"booklength",children:null!=i?.length&&i.length})]})]})]}),n&&(0,s.jsx)(z_,{setMenu:r})]})};var X_=(0,go.configureStore)({reducer:{favorites:u_,books:k_,user:XT},middleware:e=>e({serializableCheck:!1})});m=o("acw62");var Y_=()=>{const e=B(),t=E((e=>e.favorites.items)),n=E((e=>e.user.user));return(0,m.useEffect)((()=>{!function(e){const t=JT.onAuthStateChanged((t=>{e(QT(t||null))}))}(e)}),[e]),(0,m.useEffect)((()=>{console.log(n),null!=n&&e(s_(null,{extra:{user:n}}))}),[n]),(0,m.useEffect)((()=>{console.log(n),null!=n&&e(s_(null,{extra:{user:n}}))}),[]),t&&null!=t&&0!=t.length?(0,s.jsx)(v_,{books:t,title:"Favorites"}):(0,s.jsx)("div",{className:"text-3xl font-bold text-center mt-20",children:"No favorites yet"})};const J_=()=>(0,s.jsx)("div",{className:"bg-black text-white w-full ",children:(0,s.jsx)("div",{className:"mx-auto w-4/5 min-h-screen",children:(0,s.jsxs)(U,{store:X_,children:[(0,s.jsx)(Q_,{}),(0,s.jsx)(Yt,{}),(0,s.jsx)(O_,{})]})})}),Z_=(eC=[{path:"/",element:(0,s.jsx)(J_,{}),errorElement:(0,s.jsx)(I_,{}),children:[{path:"/",element:(0,s.jsx)(C_,{})},{path:"/favorites",element:(0,s.jsx)(Y_,{})}]}],We({basename:null==tC?void 0:tC.basename,history:X({window:null==tC?void 0:tC.window}),hydrationData:(null==tC?void 0:tC.hydrationData)||cn(),routes:sn(eC)}).initialize());var eC,tC;n(u).createRoot(document.getElementById("root")).render((0,s.jsx)((function(e){let{fallbackElement:t,router:n}=e,r=It(n.subscribe,(()=>n.state),(()=>n.state)),i=m.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),o=n.basename||"/";return m.createElement(m.Fragment,null,m.createElement(Ot.Provider,{value:{router:n,navigator:i,static:!1,basename:o}},m.createElement(Nt.Provider,{value:r},m.createElement(Zt,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?m.createElement(en,null):t))),null)}),{router:Z_}));
//# sourceMappingURL=index.1a489709.js.map
