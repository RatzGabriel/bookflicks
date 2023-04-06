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
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N,P,R,D,A,L,M,j;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>i),(e=>i=e)),e(t.exports,"Fragment",(()=>o),(e=>o=e)),e(t.exports,"Profiler",(()=>s),(e=>s=e)),e(t.exports,"PureComponent",(()=>a),(e=>a=e)),e(t.exports,"StrictMode",(()=>l),(e=>l=e)),e(t.exports,"Suspense",(()=>u),(e=>u=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>c),(e=>c=e)),e(t.exports,"cloneElement",(()=>d),(e=>d=e)),e(t.exports,"createContext",(()=>h),(e=>h=e)),e(t.exports,"createElement",(()=>f),(e=>f=e)),e(t.exports,"createFactory",(()=>p),(e=>p=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>g),(e=>g=e)),e(t.exports,"isValidElement",(()=>v),(e=>v=e)),e(t.exports,"lazy",(()=>y),(e=>y=e)),e(t.exports,"memo",(()=>b),(e=>b=e)),e(t.exports,"startTransition",(()=>w),(e=>w=e)),e(t.exports,"unstable_act",(()=>S),(e=>S=e)),e(t.exports,"useCallback",(()=>E),(e=>E=e)),e(t.exports,"useContext",(()=>k),(e=>k=e)),e(t.exports,"useDebugValue",(()=>x),(e=>x=e)),e(t.exports,"useDeferredValue",(()=>T),(e=>T=e)),e(t.exports,"useEffect",(()=>_),(e=>_=e)),e(t.exports,"useId",(()=>C),(e=>C=e)),e(t.exports,"useImperativeHandle",(()=>I),(e=>I=e)),e(t.exports,"useInsertionEffect",(()=>O),(e=>O=e)),e(t.exports,"useLayoutEffect",(()=>N),(e=>N=e)),e(t.exports,"useMemo",(()=>P),(e=>P=e)),e(t.exports,"useReducer",(()=>R),(e=>R=e)),e(t.exports,"useRef",(()=>D),(e=>D=e)),e(t.exports,"useState",(()=>A),(e=>A=e)),e(t.exports,"useSyncExternalStore",(()=>L),(e=>L=e)),e(t.exports,"useTransition",(()=>M),(e=>M=e)),e(t.exports,"version",(()=>j),(e=>j=e));var F=Symbol.for("react.element"),U=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Y}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Y}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,X(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,oe={current:null},se={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)ie.call(t,r)&&!se.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:F,type:e,key:o,ref:s,props:i,_owner:oe.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case F:case U:s=!0}}if(s)return i=i(s=e),e=""===r?"."+ce(s,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),de(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var l=r+ce(o=e[a],a);s+=de(o,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)s+=de(o=o.value,t,n,l=r+ce(o,a++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function he(e,t,n){if(null==e)return e;var r=[],i=0;return de(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:he,forEach:function(e,t,n){he(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,o=z,s=B,a=te,l=V,u=W,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:oe},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=oe.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ie.call(t,l)&&!se.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:F,type:e.type,key:i,ref:o,props:r,_owner:s}},h=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:q,render:e}},v=le,y=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},S=function(){throw Error("act(...) is not supported in production builds of React.")},E=function(e,t){return pe.current.useCallback(e,t)},k=function(e){return pe.current.useContext(e)},x=function(){},T=function(e){return pe.current.useDeferredValue(e)},_=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},I=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},O=function(e,t){return pe.current.useInsertionEffect(e,t)},N=function(e,t){return pe.current.useLayoutEffect(e,t)},P=function(e,t){return pe.current.useMemo(e,t)},R=function(e,t,n){return pe.current.useReducer(e,t,n)},D=function(e){return pe.current.useRef(e)},A=function(e){return pe.current.useState(e)},L=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},j="18.2.0"})),o.register("Xw6Mv",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,a,l,u,c,d,h,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>i),(e=>i=e)),e(t.exports,"createRoot",(()=>s),(e=>s=e)),e(t.exports,"findDOMNode",(()=>a),(e=>a=e)),e(t.exports,"flushSync",(()=>l),(e=>l=e)),e(t.exports,"hydrate",(()=>u),(e=>u=e)),e(t.exports,"hydrateRoot",(()=>c),(e=>c=e)),e(t.exports,"render",(()=>d),(e=>d=e)),e(t.exports,"unmountComponentAtNode",(()=>h),(e=>h=e)),e(t.exports,"unstable_batchedUpdates",(()=>f),(e=>f=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>p),(e=>p=e)),e(t.exports,"version",(()=>m),(e=>m=e));var g=o("acw62"),v=o("fO90s");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function S(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var k=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),x=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},C={};function I(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){O[e]=new I(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];O[t]=new I(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){O[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){O[e]=new I(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){O[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){O[e]=new I(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){O[e]=new I(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){O[e]=new I(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){O[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)}));var N=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}function R(e,t,n,r){var i=O.hasOwnProperty(t)?O[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!x.call(C,e)||!x.call(_,e)&&(T.test(e)?C[e]=!0:(_[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(N,P);O[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)})),O.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)}));var D=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),q=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var W=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var K=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=K&&e[K]||e["@@iterator"])?e:null}var Q,Y=Object.assign;function X(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?X(e):""}function ee(e){switch(e.tag){case 5:return X(e.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case L:return"Portal";case F:return"Profiler";case j:return"StrictMode";case B:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case V:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function oe(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&R(e,"checked",t,!1)}function de(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function he(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ee,ke,xe=(ke=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((Ee=Ee||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ee.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ke(e,t)}))}:ke);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ie(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Oe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ie(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(_e).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]}))}));var Ne=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Re(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function Ae(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Le=null,Me=null,je=null;function Fe(e){if(e=Ri(e)){if("function"!=typeof Le)throw Error(y(280));var t=e.stateNode;t&&(t=Ai(t),Le(e.stateNode,e.type,t))}}function Ue(e){Me?je?je.push(e):je=[e]:Me=e}function ze(){if(Me){var e=Me,t=je;if(je=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function Ve(e,t){return e(t)}function Be(){}var $e=!1;function He(e,t,n){if($e)return e(t,n);$e=!0;try{return Ve(e,t,n)}finally{$e=!1,(null!==Me||null!==je)&&(Be(),ze())}}function qe(e,t){var n=e.stateNode;if(null===n)return null;var r=Ai(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var We=!1;if(k)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){We=!0}}),window.addEventListener("test",Ke,Ke),window.removeEventListener("test",Ke,Ke)}catch(ke){We=!1}function Ge(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Ye=null,Xe=!1,Je=null,Ze={onError:function(e){Qe=!0,Ye=e}};function et(e,t,n,r,i,o,s,a,l){Qe=!1,Ye=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rt(i),e;if(o===r)return rt(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?ot(e):null}function ot(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=ot(e);if(null!==t)return t;e=e.sibling}return null}var st=v.unstable_scheduleCallback,at=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ut=v.unstable_requestPaint,ct=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ht=v.unstable_ImmediatePriority,ft=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/St|0)|0},wt=Math.log,St=Math.LN2;var Et=64,kt=4194304;function xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?r=xt(a):0!==(o&=s)&&(r=xt(o))}else 0!==(s=n&~i)?r=xt(s):0!==o&&(r=xt(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function _t(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function It(){var e=Et;return 0==(4194240&(Et<<=1))&&(Et=64),e}function Ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Rt=0;function Dt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var At,Lt,Mt,jt,Ft,Ut=!1,zt=[],Vt=null,Bt=null,$t=null,Ht=new Map,qt=new Map,Wt=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qt.delete(t.pointerId)}}function Qt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=Ri(t))&&Lt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Yt(e){var t=Pi(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Xt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Ri(n))&&Lt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);De=r,n.target.dispatchEvent(r),De=null,t.shift()}return!0}function Jt(e,t,n){Xt(e)&&n.delete(t)}function Zt(){Ut=!1,null!==Vt&&Xt(Vt)&&(Vt=null),null!==Bt&&Xt(Bt)&&(Bt=null),null!==$t&&Xt($t)&&($t=null),Ht.forEach(Jt),qt.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Ut||(Ut=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<zt.length){en(zt[0],e);for(var n=1;n<zt.length;n++){var r=zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Vt&&en(Vt,e),null!==Bt&&en(Bt,e),null!==$t&&en($t,e),Ht.forEach(t),qt.forEach(t),n=0;n<Wt.length;n++)(r=Wt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&null===(n=Wt[0]).blockedOn;)Yt(n),null===n.blockedOn&&Wt.shift()}var nn=D.ReactCurrentBatchConfig,rn=!0;function on(e,t,n,r){var i=Rt,o=nn.transition;nn.transition=null;try{Rt=1,an(e,t,n,r)}finally{Rt=i,nn.transition=o}}function sn(e,t,n,r){var i=Rt,o=nn.transition;nn.transition=null;try{Rt=4,an(e,t,n,r)}finally{Rt=i,nn.transition=o}}function an(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Vt=Qt(Vt,e,t,n,r,i),!0;case"dragenter":return Bt=Qt(Bt,e,t,n,r,i),!0;case"mouseover":return $t=Qt($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ht.set(o,Qt(Ht.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qt.set(o,Qt(qt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Kt.indexOf(e)){for(;null!==i;){var o=Ri(i);if(null!==o&&At(o),null===(o=un(e,t,n,r))&&ri(e,t,r,ln,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Pi(e=Ae(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ht:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,hn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=hn,r=n.length,i="value"in dn?dn.value:dn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,Sn,En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=yn(En),xn=Y({},En,{view:0,detail:0}),Tn=yn(xn),_n=Y({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&"mousemove"===e.type?(bn=e.screenX-Sn.screenX,wn=e.screenY-Sn.screenY):wn=bn=0,Sn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=yn(_n),In=yn(Y({},_n,{dataTransfer:0})),On=yn(Y({},xn,{relatedTarget:0})),Nn=yn(Y({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=Y({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rn=yn(Pn),Dn=yn(Y({},En,{data:0})),An={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Fn(){return jn}var Un=Y({},xn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ln[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),zn=yn(Un),Vn=yn(Y({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=yn(Y({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),$n=yn(Y({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=Y({},_n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qn=yn(Hn),Wn=[9,13,27,32],Kn=k&&"CompositionEvent"in window,Gn=null;k&&"documentMode"in document&&(Gn=document.documentMode);var Qn=k&&"TextEvent"in window&&!Gn,Yn=k&&(!Kn||Gn&&8<Gn&&11>=Gn),Xn=String.fromCharCode(32),Jn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Ue(r),0<(t=oi(t,"onChange")).length&&(n=new kn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function ar(e){Xr(e,0)}function lr(e){if(se(Di(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(k){var dr;if(k){var hr="oninput"in document;if(!hr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),hr="function"==typeof fr.oninput}dr=hr}else dr=!1;cr=dr&&(!document.documentMode||9<document.documentMode)}function pr(){or&&(or.detachEvent("onpropertychange",mr),sr=or=null)}function mr(e){if("value"===e.propertyName&&lr(sr)){var t=[];ir(t,sr,e,Ae(e)),He(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),sr=n,(or=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(sr)}function yr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Sr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!x.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n,r=Er(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Er(r)}}function xr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?xr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Tr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Tr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xr(n.ownerDocument.documentElement,n)){if(null!==r&&_r(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kr(n,o);var s=kr(n,r);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ir=k&&"documentMode"in document&&11>=document.documentMode,Or=null,Nr=null,Pr=null,Rr=!1;function Dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Rr||null==Or||Or!==ae(r)||("selectionStart"in(r=Or)&&_r(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Pr&&Sr(Pr,r)||(Pr=r,0<(r=oi(Nr,"onSelect")).length&&(t=new kn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Mr={},jr={};function Fr(e){if(Mr[e])return Mr[e];if(!Lr[e])return e;var t,n=Lr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Mr[e]=n[t];return e}k&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);var Ur=Fr("animationend"),zr=Fr("animationiteration"),Vr=Fr("animationstart"),Br=Fr("transitionend"),$r=new Map,Hr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,t){$r.set(e,t),S(t,[e])}for(var Wr=0;Wr<Hr.length;Wr++){var Kr=Hr[Wr];qr(Kr.toLowerCase(),"on"+(Kr[0].toUpperCase()+Kr.slice(1)))}qr(Ur,"onAnimationEnd"),qr(zr,"onAnimationIteration"),qr(Vr,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Br,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Yr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,a,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(y(198));var u=Ye;Qe=!1,Ye=null,Xe||(Xe=!0,Je=u)}}(r,t,void 0,e),e.currentTarget=null}function Xr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Yr(i,a,u),o=l}else for(s=0;s<r.length;s++){if(l=(a=r[s]).instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Yr(i,a,u),o=l}}}if(Xe)throw e=Je,Xe=!1,Je=null,e}function Jr(e,t){var n=t[Ii];void 0===n&&(n=t[Ii]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=on;break;case 4:i=sn;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!We||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=Pi(a)))return;if(5===(l=s.tag)||6===l){r=o=s;continue e}a=a.parentNode}}r=r.return}He((function(){var r=o,i=Ae(n),s=[];e:{var a=$r.get(e);if(void 0!==a){var l=kn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=zn;break;case"focusin":u="focus",l=On;break;case"focusout":u="blur",l=On;break;case"beforeblur":case"afterblur":l=On;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=In;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Bn;break;case Ur:case zr:case Vr:l=Nn;break;case Br:l=$n;break;case"scroll":l=Tn;break;case"wheel":l=qn;break;case"copy":case"cut":case"paste":l=Rn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var c=0!=(4&t),d=!c&&"scroll"===e,h=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=qe(p,h))&&c.push(ii(p,m,f)))),d)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),s.push({event:a,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===De||!(u=n.relatedTarget||n.fromElement)||!Pi(u)&&!u[Ci])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Pi(u):null)&&(u!==(d=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Vn,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?a:Di(l),f=null==u?a:Di(u),(a=new c(m,p+"leave",l,n,i)).target=d,a.relatedTarget=f,m=null,Pi(i)===r&&((c=new c(h,p+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,p=0,f=c=l;f;f=si(f))p++;for(f=0,m=h;m;m=si(m))f++;for(;0<p-f;)c=si(c),p--;for(;0<f-p;)h=si(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=si(c),h=si(h)}c=null}else c=null;null!==l&&ai(s,a,l,c,!1),null!==u&&null!==d&&ai(s,d,u,c,!0)}if("select"===(l=(a=r?Di(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=ur;else if(rr(a))if(cr)g=br;else{g=vr;var v=gr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=yr);switch(g&&(g=g(e,r))?ir(s,g,n,i):(v&&v(e,a,r),"focusout"===e&&(v=a._wrapperState)&&v.controlled&&"number"===a.type&&fe(a,"number",a.value)),v=r?Di(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Or=v,Nr=r,Pr=null);break;case"focusout":Pr=Nr=Or=null;break;case"mousedown":Rr=!0;break;case"contextmenu":case"mouseup":case"dragend":Rr=!1,Dr(s,n,i);break;case"selectionchange":if(Ir)break;case"keydown":case"keyup":Dr(s,n,i)}var y;if(Kn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Yn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(y=pn()):(hn="value"in(dn=i)?dn.value:dn.textContent,tr=!0)),0<(v=oi(r,b)).length&&(b=new Dn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:null!==(y=er(n))&&(b.data=y))),(y=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Jn=!0,Xn);case"textInput":return(e=t.data)===Xn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Kn&&Zn(e,t)?(e=pn(),fn=hn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=oi(r,"onBeforeInput")).length&&(i=new Dn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=y))}Xr(s,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=qe(e,n))&&r.unshift(ii(e,o,i)),null!=(o=qe(e,t))&&r.push(ii(e,o,i))),e=e.return}return r}function si(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=qe(n,o))&&s.unshift(ii(n,l,a)):i||null!=(l=qe(n,o))&&s.push(ii(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ui,"")}function di(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(y(425))}function hi(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,vi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function Si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function Ei(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ki(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),Ti="__reactFiber$"+xi,_i="__reactProps$"+xi,Ci="__reactContainer$"+xi,Ii="__reactEvents$"+xi,Oi="__reactListeners$"+xi,Ni="__reactHandles$"+xi;function Pi(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Ti]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ki(e);null!==e;){if(n=e[Ti])return n;e=ki(e)}return t}n=(e=n).parentNode}return null}function Ri(e){return!(e=e[Ti]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Di(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Ai(e){return e[_i]||null}var Li=[],Mi=-1;function ji(e){return{current:e}}function Fi(e){0>Mi||(e.current=Li[Mi],Li[Mi]=null,Mi--)}function Ui(e,t){Mi++,Li[Mi]=e.current,e.current=t}var zi={},Vi=ji(zi),Bi=ji(!1),$i=zi;function Hi(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qi(e){return null!=(e=e.childContextTypes)}function Wi(){Fi(Bi),Fi(Vi)}function Ki(e,t,n){if(Vi.current!==zi)throw Error(y(168));Ui(Vi,t),Ui(Bi,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(y(108,ne(e)||"Unknown",i));return Y({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,$i=Vi.current,Ui(Vi,e),Ui(Bi,Bi.current),!0}function Yi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Gi(e,t,$i),r.__reactInternalMemoizedMergedChildContext=e,Fi(Bi),Fi(Vi),Ui(Vi,e)):Fi(Bi),Ui(Bi,n)}var Xi=null,Ji=!1,Zi=!1;function eo(e){null===Xi?Xi=[e]:Xi.push(e)}function to(){if(!Zi&&null!==Xi){Zi=!0;var e=0,t=Rt;try{var n=Xi;for(Rt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Xi=null,Ji=!1}catch(t){throw null!==Xi&&(Xi=Xi.slice(e+1)),st(ht,to),t}finally{Rt=t,Zi=!1}}return null}var no=[],ro=0,io=null,oo=0,so=[],ao=0,lo=null,uo=1,co="";function ho(e,t){no[ro++]=oo,no[ro++]=io,io=e,oo=t}function fo(e,t,n){so[ao++]=uo,so[ao++]=co,so[ao++]=lo,lo=e;var r=uo;e=co;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,uo=1<<32-bt(t)+i|n<<i|r,co=o+e}else uo=1<<o|n<<i|r,co=e}function po(e){null!==e.return&&(ho(e,1),fo(e,1,0))}function mo(e){for(;e===io;)io=no[--ro],no[ro]=null,oo=no[--ro],no[ro]=null;for(;e===lo;)lo=so[--ao],so[ao]=null,co=so[--ao],so[ao]=null,uo=so[--ao],so[ao]=null}var go=null,vo=null,yo=!1,bo=null;function wo(e,t){var n=qu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function So(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,go=e,vo=Ei(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,go=e,vo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==lo?{id:uo,overflow:co}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=qu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,go=e,vo=null,!0);default:return!1}}function Eo(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ko(e){if(yo){var t=vo;if(t){var n=t;if(!So(e,t)){if(Eo(e))throw Error(y(418));t=Ei(n.nextSibling);var r=go;t&&So(e,t)?wo(r,n):(e.flags=-4097&e.flags|2,yo=!1,go=e)}}else{if(Eo(e))throw Error(y(418));e.flags=-4097&e.flags|2,yo=!1,go=e}}}function xo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;go=e}function To(e){if(e!==go)return!1;if(!yo)return xo(e),yo=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=vo)){if(Eo(e))throw _o(),Error(y(418));for(;t;)wo(e,t),t=Ei(t.nextSibling)}if(xo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){vo=Ei(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}vo=null}}else vo=go?Ei(e.stateNode.nextSibling):null;return!0}function _o(){for(var e=vo;e;)e=Ei(e.nextSibling)}function Co(){vo=go=null,yo=!1}function Io(e){null===bo?bo=[e]:bo.push(e)}var Oo=D.ReactCurrentBatchConfig;function No(e,t){if(e&&e.defaultProps){for(var n in t=Y({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Po=ji(null),Ro=null,Do=null,Ao=null;function Lo(){Ao=Do=Ro=null}function Mo(e){var t=Po.current;Fi(Po),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t){Ro=e,Ao=Do=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Da=!0),e.firstContext=null)}function Uo(e){var t=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:t,next:null},null===Do){if(null===Ro)throw Error(y(308));Do=e,Ro.dependencies={lanes:0,firstContext:e}}else Do=Do.next=e;return t}var zo=null;function Vo(e){null===zo?zo=[e]:zo.push(e)}function Bo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Vo(t)):(n.next=i.next,i.next=n),t.interleaved=n,$o(e,r)}function $o(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ho=!1;function qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ko(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Go(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Bl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$o(e,n)}return null===(i=r.interleaved)?(t.next=t,Vo(r)):(t.next=i.next,i.next=t),r.interleaved=t,$o(e,n)}function Qo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}function Yo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var i=e.updateQueue;Ho=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===s?o=u:s.next=u,s=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(s=0,c=u=l=null,a=o;;){var h=a.lane,f=a.eventTime;if((r&h)===h){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=Y({},d,h);break e;case 2:Ho=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Yl|=s,e.lanes=s,e.memoizedState=d}}function Jo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var Zo=(new g.Component).refs;function es(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Y({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),o=Ko(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=Go(e,o,i))&&(gu(t,e,i,r),Qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),o=Ko(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=Go(e,o,i))&&(gu(t,e,i,r),Qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=mu(e),i=Ko(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Go(e,i,r))&&(gu(t,e,r,n),Qo(t,e,r))}};function ns(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!Sr(n,r)||!Sr(i,o))}function rs(e,t,n){var r=!1,i=zi,o=t.contextType;return"object"==typeof o&&null!==o?o=Uo(o):(i=qi(t)?$i:Vi.current,o=(r=null!=(r=t.contextTypes))?Hi(e,i):zi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function is(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zo,qo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Uo(o):(o=qi(t)?$i:Vi.current,i.context=Hi(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(es(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ts.enqueueReplaceState(i,i.state,null),Xo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ss(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;t===Zo&&(t=i.refs={}),null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ls(e){return(0,e._init)(e._payload)}function us(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Ku(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Xu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var o=n.type;return o===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===q&&ls(o)===t.type)?((r=i(t,n.props)).ref=ss(e,t,n),r.return=e,r):((r=Gu(n.type,n.key,n.props,null,e.mode,r)).ref=ss(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ju(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,o){return null===t||7!==t.tag?((t=Qu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Xu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=Gu(t.type,t.key,t.props,null,e.mode,n)).ref=ss(e,null,t),n.return=e,n;case L:return(t=Ju(t,e.mode,n)).return=e,t;case q:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qu(t,e.mode,n,null)).return=e,t;as(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===i?l(e,t,n,r):null;case L:return n.key===i?u(e,t,n,r):null;case q:return h(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);as(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case L:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case q:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);as(t,r)}return null}function p(i,s,a,l){for(var u=null,c=null,p=s,m=s=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,a[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v,p=g}if(m===a.length)return n(i,p),yo&&ho(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],l))&&(s=o(p,s,m),null===c?u=p:c.sibling=p,c=p);return yo&&ho(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),s=o(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),yo&&ho(i,m),u}function m(i,s,a,l){var u=G(a);if("function"!=typeof u)throw Error(y(150));if(null==(a=u.call(a)))throw Error(y(151));for(var c=u=null,p=s,m=s=0,g=null,v=a.next();null!==p&&!v.done;m++,v=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=h(i,p,v.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),s=o(b,s,m),null===c?u=b:c.sibling=b,c=b,p=g}if(v.done)return n(i,p),yo&&ho(i,m),u;if(null===p){for(;!v.done;m++,v=a.next())null!==(v=d(i,v.value,l))&&(s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return yo&&ho(i,m),u}for(p=r(i,p);!v.done;m++,v=a.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),s=o(v,s,m),null===c?u=v:c.sibling=v,c=v);return e&&p.forEach((function(e){return t(i,e)})),yo&&ho(i,m),u}return function e(r,o,a,l){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case A:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===M){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===q&&ls(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=ss(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===M?((o=Qu(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Gu(a.type,a.key,a.props,null,r.mode,l)).ref=ss(r,o,a),l.return=r,r=l)}return s(r);case L:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Ju(a,r.mode,l)).return=r,r=o}return s(r);case q:return e(r,o,(c=a._init)(a._payload),l)}if(pe(a))return p(r,o,a,l);if(G(a))return m(r,o,a,l);as(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Xu(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var cs=us(!0),ds=us(!1),hs={},fs=ji(hs),ps=ji(hs),ms=ji(hs);function gs(e){if(e===hs)throw Error(y(174));return e}function vs(e,t){switch(Ui(ms,t),Ui(ps,e),Ui(fs,hs),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Se(null,"");break;default:t=Se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Fi(fs),Ui(fs,t)}function ys(){Fi(fs),Fi(ps),Fi(ms)}function bs(e){gs(ms.current);var t=gs(fs.current),n=Se(t,e.type);t!==n&&(Ui(ps,e),Ui(fs,n))}function ws(e){ps.current===e&&(Fi(fs),Fi(ps))}var Ss=ji(0);function Es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function xs(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Ts=D.ReactCurrentDispatcher,_s=D.ReactCurrentBatchConfig,Cs=0,Is=null,Os=null,Ns=null,Ps=!1,Rs=!1,Ds=0,As=0;function Ls(){throw Error(y(321))}function Ms(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function js(e,t,n,r,i,o){if(Cs=o,Is=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ts.current=null===e||null===e.memoizedState?wa:Sa,e=n(r,i),Rs){o=0;do{if(Rs=!1,Ds=0,25<=o)throw Error(y(301));o+=1,Ns=Os=null,t.updateQueue=null,Ts.current=Ea,e=n(r,i)}while(Rs)}if(Ts.current=ba,t=null!==Os&&null!==Os.next,Cs=0,Ns=Os=Is=null,Ps=!1,t)throw Error(y(300));return e}function Fs(){var e=0!==Ds;return Ds=0,e}function Us(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ns?Is.memoizedState=Ns=e:Ns=Ns.next=e,Ns}function zs(){if(null===Os){var e=Is.alternate;e=null!==e?e.memoizedState:null}else e=Os.next;var t=null===Ns?Is.memoizedState:Ns.next;if(null!==t)Ns=t,Os=e;else{if(null===e)throw Error(y(310));e={memoizedState:(Os=e).memoizedState,baseState:Os.baseState,baseQueue:Os.baseQueue,queue:Os.queue,next:null},null===Ns?Is.memoizedState=Ns=e:Ns=Ns.next=e}return Ns}function Vs(e,t){return"function"==typeof t?t(e):t}function Bs(e){var t=zs(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=Os,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Cs&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=d,s=r):l=l.next=d,Is.lanes|=c,Yl|=c}u=u.next}while(null!==u&&u!==o);null===l?s=r:l.next=a,wr(r,t.memoizedState)||(Da=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,Is.lanes|=o,Yl|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $s(e){var t=zs(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);wr(o,t.memoizedState)||(Da=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hs(){}function qs(e,t){var n=Is,r=zs(),i=t(),o=!wr(r.memoizedState,i);if(o&&(r.memoizedState=i,Da=!0),r=r.queue,ra(Gs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==Ns&&1&Ns.memoizedState.tag){if(n.flags|=2048,Js(9,Ks.bind(null,n,r,i,t),void 0,null),null===$l)throw Error(y(349));0!=(30&Cs)||Ws(n,t,i)}return i}function Ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Is.updateQueue)?(t={lastEffect:null,stores:null},Is.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ks(e,t,n,r){t.value=n,t.getSnapshot=r,Qs(t)&&Ys(e)}function Gs(e,t,n){return n((function(){Qs(t)&&Ys(e)}))}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Ys(e){var t=$o(e,1);null!==t&&gu(t,e,1,-1)}function Xs(e){var t=Us();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,Is,e),[t.memoizedState,e]}function Js(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Is.updateQueue)?(t={lastEffect:null,stores:null},Is.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zs(){return zs().memoizedState}function ea(e,t,n,r){var i=Us();Is.flags|=e,i.memoizedState=Js(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=zs();r=void 0===r?null:r;var o=void 0;if(null!==Os){var s=Os.memoizedState;if(o=s.destroy,null!==r&&Ms(r,s.deps))return void(i.memoizedState=Js(t,n,o,r))}Is.flags|=e,i.memoizedState=Js(1|t,n,o,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function oa(e,t){return ta(4,4,e,t)}function sa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,sa.bind(null,t,e),n)}function la(){}function ua(e,t){var n=zs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ca(e,t){var n=zs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function da(e,t,n){return 0==(21&Cs)?(e.baseState&&(e.baseState=!1,Da=!0),e.memoizedState=n):(wr(n,t)||(n=It(),Is.lanes|=n,Yl|=n,e.baseState=!0),t)}function ha(e,t){var n=Rt;Rt=0!==n&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{Rt=n,_s.transition=r}}function fa(){return zs().memoizedState}function pa(e,t,n){var r=mu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))va(t,n);else if(null!==(n=Bo(e,t,n,r))){gu(n,e,r,pu()),ya(n,t,r)}}function ma(e,t,n){var r=mu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))va(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,s)){var l=t.interleaved;return null===l?(i.next=i,Vo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=Bo(e,t,i,r))&&(gu(n,e,r,i=pu()),ya(n,t,r))}}function ga(e){var t=e.alternate;return e===Is||null!==t&&t===Is}function va(e,t){Rs=Ps=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ya(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}var ba={readContext:Uo,useCallback:Ls,useContext:Ls,useEffect:Ls,useImperativeHandle:Ls,useInsertionEffect:Ls,useLayoutEffect:Ls,useMemo:Ls,useReducer:Ls,useRef:Ls,useState:Ls,useDebugValue:Ls,useDeferredValue:Ls,useTransition:Ls,useMutableSource:Ls,useSyncExternalStore:Ls,useId:Ls,unstable_isNewReconciler:!1},wa={readContext:Uo,useCallback:function(e,t){return Us().memoizedState=[e,void 0===t?null:t],e},useContext:Uo,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Us();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Us();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,Is,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Us().memoizedState=e},useState:Xs,useDebugValue:la,useDeferredValue:function(e){return Us().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=ha.bind(null,e[1]),Us().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Is,i=Us();if(yo){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===$l)throw Error(y(349));0!=(30&Cs)||Ws(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,na(Gs.bind(null,r,o,e),[e]),r.flags|=2048,Js(9,Ks.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Us(),t=$l.identifierPrefix;if(yo){var n=co;t=":"+t+"R"+(n=(uo&~(1<<32-bt(uo)-1)).toString(32)+n),0<(n=Ds++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=As++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sa={readContext:Uo,useCallback:ua,useContext:Uo,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:oa,useMemo:ca,useReducer:Bs,useRef:Zs,useState:function(){return Bs(Vs)},useDebugValue:la,useDeferredValue:function(e){return da(zs(),Os.memoizedState,e)},useTransition:function(){return[Bs(Vs)[0],zs().memoizedState]},useMutableSource:Hs,useSyncExternalStore:qs,useId:fa,unstable_isNewReconciler:!1},Ea={readContext:Uo,useCallback:ua,useContext:Uo,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:oa,useMemo:ca,useReducer:$s,useRef:Zs,useState:function(){return $s(Vs)},useDebugValue:la,useDeferredValue:function(e){var t=zs();return null===Os?t.memoizedState=e:da(t,Os.memoizedState,e)},useTransition:function(){return[$s(Vs)[0],zs().memoizedState]},useMutableSource:Hs,useSyncExternalStore:qs,useId:fa,unstable_isNewReconciler:!1};function ka(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ta(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var _a="function"==typeof WeakMap?WeakMap:Map;function Ca(e,t,n){(n=Ko(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){iu||(iu=!0,ou=r),Ta(0,t)},n}function Ia(e,t,n){(n=Ko(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){Ta(0,t),"function"!=typeof r&&(null===su?su=new Set([this]):su.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Oa(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new _a;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uu.bind(null,e,t,n),t.then(e,e))}function Na(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Pa(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ko(-1,1)).tag=2,Go(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ra=D.ReactCurrentOwner,Da=!1;function Aa(e,t,n,r){t.child=null===e?ds(t,null,n,r):cs(t,e.child,n,r)}function La(e,t,n,r,i){n=n.render;var o=t.ref;return Fo(t,i),r=js(e,t,n,r,o,i),n=Fs(),null===e||Da?(yo&&n&&po(t),t.flags|=1,Aa(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Wu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ja(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var s=o.memoizedProps;if((n=null!==(n=n.compare)?n:Sr)(s,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Ku(o,r)).ref=t.ref,e.return=t,t.child=e}function ja(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref){if(Da=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Da=!0)}}return za(e,t,n,r,i)}function Fa(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ui(Kl,Wl),Wl|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ui(Kl,Wl),Wl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ui(Kl,Wl),Wl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ui(Kl,Wl),Wl|=r;return Aa(e,t,i,n),t.child}function Ua(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=qi(n)?$i:Vi.current;return o=Hi(t,o),Fo(t,i),n=js(e,t,n,r,o,i),r=Fs(),null===e||Da?(yo&&r&&po(t),t.flags|=1,Aa(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Va(e,t,n,r,i){if(qi(n)){var o=!0;Qi(t)}else o=!1;if(Fo(t,i),null===t.stateNode)rl(e,t),rs(t,n,r),os(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;"object"==typeof u&&null!==u?u=Uo(u):u=Hi(t,u=qi(n)?$i:Vi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;d||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&is(t,s,r,u),Ho=!1;var h=t.memoizedState;s.state=h,Xo(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Bi.current||Ho?("function"==typeof c&&(es(t,n,c,r),l=t.memoizedState),(a=Ho||ns(t,n,a,r,h,l,u))?(d||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wo(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:No(t.type,a),s.props=u,d=t.pendingProps,h=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=Uo(l):l=Hi(t,l=qi(n)?$i:Vi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==d||h!==l)&&is(t,s,r,l),Ho=!1,h=t.memoizedState,s.state=h,Xo(t,r,s,i);var p=t.memoizedState;a!==d||h!==p||Bi.current||Ho?("function"==typeof f&&(es(t,n,f,r),p=t.memoizedState),(u=Ho||ns(t,n,u,r,h,p,l)||!1)?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=u):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,o,i)}function Ba(e,t,n,r,i,o){Ua(e,t);var s=0!=(128&t.flags);if(!r&&!s)return i&&Yi(t,n,!1),il(e,t,o);r=t.stateNode,Ra.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=cs(t,e.child,null,o),t.child=cs(t,null,a,o)):Aa(e,t,a,o),t.memoizedState=r.state,i&&Yi(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Ki(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(0,t.context,!1),vs(e,t.containerInfo)}function Ha(e,t,n,r,i){return Co(),Io(i),t.flags|=256,Aa(e,t,n,r),t.child}var qa,Wa,Ka,Ga,Qa={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r,i=t.pendingProps,o=Ss.current,s=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ui(Ss,1&o),null===e)return ko(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,s?(i=t.mode,s=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=a):s=Yu(a,i,0,null),e=Qu(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ya(n),t.memoizedState=Qa,e):Ja(t,a));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Za(e,t,s,r=xa(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Yu({mode:"visible",children:r.children},i,0,null),(o=Qu(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!=(1&t.mode)&&cs(t,e.child,null,s),t.child.memoizedState=Ya(s),t.memoizedState=Qa,o);if(0==(1&t.mode))return Za(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Za(e,t,s,r=xa(o=Error(y(419)),r,void 0))}if(a=0!=(s&e.childLanes),Da||a){if(null!==(r=$l)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,$o(e,i),gu(r,e,i,-1))}return Ou(),Za(e,t,s,r=xa(Error(y(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Vu.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vo=Ei(i.nextSibling),go=t,yo=!0,bo=null,null!==e&&(so[ao++]=uo,so[ao++]=co,so[ao++]=lo,uo=e.id,co=e.overflow,lo=t),t=Ja(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,o,n);if(s){s=i.fallback,a=t.mode,r=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Ku(o,l)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Ku(r,s):(s=Qu(s,a,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,a=null===(a=e.child.memoizedState)?Ya(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Qa,i}return e=(s=e.child).sibling,i=Ku(s,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ja(e,t){return(t=Yu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Za(e,t,n,r){return null!==r&&Io(r),cs(t,e.child,null,n),(e=Ja(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function tl(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Aa(e,t,r.children,n),0!=(2&(r=Ss.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ui(Ss,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Es(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Es(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,o);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Yl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=Ku(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ku(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ol(e,t){if(!yo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function al(e,t,n){var r=t.pendingProps;switch(mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sl(t),null;case 1:case 17:return qi(t.type)&&Wi(),sl(t),null;case 3:return r=t.stateNode,ys(),Fi(Bi),Fi(Vi),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(To(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==bo&&(wu(bo),bo=null))),Wa(e,t),sl(t),null;case 5:ws(t);var i=gs(ms.current);if(n=t.type,null!==e&&null!=t.stateNode)Ka(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return sl(t),null}if(e=gs(fs.current),To(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ti]=t,r[_i]=o,e=0!=(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":ue(r,o),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Jr("invalid",r);break;case"textarea":ve(r,o),Jr("invalid",r)}for(var s in Pe(n,o),i=null,o)if(o.hasOwnProperty(s)){var a=o[s];"children"===s?"string"==typeof a?r.textContent!==a&&(!0!==o.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==o.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",""+a]):w.hasOwnProperty(s)&&null!=a&&"onScroll"===s&&Jr("scroll",r)}switch(n){case"input":oe(r),he(r,o,!0);break;case"textarea":oe(r),be(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=hi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ti]=t,e[_i]=r,qa(e,t,!1,!1),t.stateNode=e;e:{switch(s=Re(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),i=r;break;case"iframe":case"object":case"embed":Jr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],e);i=r;break;case"source":Jr("error",e),i=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),i=r;break;case"details":Jr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Jr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":ve(e,r),i=ge(e,r),Jr("invalid",e)}for(o in Pe(n,i),a=i)if(a.hasOwnProperty(o)){var l=a[o];"style"===o?Oe(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&xe(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&Te(e,l):"number"==typeof l&&Te(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(w.hasOwnProperty(o)?null!=l&&"onScroll"===o&&Jr("scroll",e):null!=l&&R(e,o,l,s))}switch(n){case"input":oe(e),he(e,r,!1);break;case"textarea":oe(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?me(e,!!r.multiple,o,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return sl(t),null;case 6:if(e&&null!=t.stateNode)Ga(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=gs(ms.current),gs(fs.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ti]=t,(o=r.nodeValue!==n)&&null!==(e=go))switch(e.tag){case 3:di(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&di(r.nodeValue,n,0!=(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ti]=t,t.stateNode=r}return sl(t),null;case 13:if(Fi(Ss),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(yo&&null!==vo&&0!=(1&t.mode)&&0==(128&t.flags))_o(),Co(),t.flags|=98560,o=!1;else if(o=To(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(y(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(y(317));o[Ti]=t}else Co(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;sl(t),o=!1}else null!==bo&&(wu(bo),bo=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&Ss.current)?0===Gl&&(Gl=3):Ou())),null!==t.updateQueue&&(t.flags|=4),sl(t),null);case 4:return ys(),Wa(e,t),null===e&&ti(t.stateNode.containerInfo),sl(t),null;case 10:return Mo(t.type._context),sl(t),null;case 19:if(Fi(Ss),null===(o=t.memoizedState))return sl(t),null;if(r=0!=(128&t.flags),null===(s=o.rendering))if(r)ol(o,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=Es(e))){for(t.flags|=128,ol(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ui(Ss,1&Ss.current|2),t.child}e=e.sibling}null!==o.tail&&ct()>nu&&(t.flags|=128,r=!0,ol(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Es(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ol(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!yo)return sl(t),null}else 2*ct()-o.renderingStartTime>nu&&1073741824!==n&&(t.flags|=128,r=!0,ol(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ct(),t.sibling=null,n=Ss.current,Ui(Ss,r?1&n|2:1&n),t):(sl(t),null);case 22:case 23:return Tu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Wl)&&(sl(t),6&t.subtreeFlags&&(t.flags|=8192)):sl(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function ll(e,t){switch(mo(t),t.tag){case 1:return qi(t.type)&&Wi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ys(),Fi(Bi),Fi(Vi),xs(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ws(t),null;case 13:if(Fi(Ss),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));Co()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Fi(Ss),null;case 4:return ys(),null;case 10:return Mo(t.type._context),null;case 22:case 23:return Tu(),null;default:return null}}qa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Wa=function(){},Ka=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gs(fs.current);var o,s=null;switch(n){case"input":i=le(e,i),r=le(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=ge(e,i),r=ge(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=hi)}for(u in Pe(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(s=s||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(s=s||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Jr("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},Ga=function(e,t,n,r){n!==r&&(t.flags|=4)};var ul=!1,cl=!1,dl="function"==typeof WeakSet?WeakSet:Set,hl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Fu(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){Fu(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&pl(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ti],delete t[_i],delete t[Ii],delete t[Oi],delete t[Ni])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function Sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function El(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=hi));else if(4!==r&&null!==(e=e.child))for(El(e,t,n),e=e.sibling;null!==e;)El(e,t,n),e=e.sibling}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}var xl=null,Tl=!1;function _l(e,t,n){for(n=n.child;null!==n;)Cl(e,t,n),n=n.sibling}function Cl(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:cl||fl(n,t);case 6:var r=xl,i=Tl;xl=null,_l(e,t,n),Tl=i,null!==(xl=r)&&(Tl?(e=xl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):xl.removeChild(n.stateNode));break;case 18:null!==xl&&(Tl?(e=xl,n=n.stateNode,8===e.nodeType?Si(e.parentNode,n):1===e.nodeType&&Si(e,n),tn(e)):Si(xl,n.stateNode));break;case 4:r=xl,i=Tl,xl=n.stateNode.containerInfo,Tl=!0,_l(e,t,n),xl=r,Tl=i;break;case 0:case 11:case 14:case 15:if(!cl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,void 0!==s&&(0!=(2&o)||0!=(4&o))&&pl(n,t,s),i=i.next}while(i!==r)}_l(e,t,n);break;case 1:if(!cl&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Fu(n,t,e)}_l(e,t,n);break;case 21:_l(e,t,n);break;case 22:1&n.mode?(cl=(r=cl)||null!==n.memoizedState,_l(e,t,n),cl=r):_l(e,t,n);break;default:_l(e,t,n)}}function Il(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dl),t.forEach((function(t){var r=Bu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Ol(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;null!==a;){switch(a.tag){case 5:xl=a.stateNode,Tl=!1;break e;case 3:case 4:xl=a.stateNode.containerInfo,Tl=!0;break e}a=a.return}if(null===xl)throw Error(y(160));Cl(o,s,i),xl=null,Tl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Fu(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Nl(t,e),t=t.sibling}function Nl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ol(t,e),Pl(e),4&r){try{gl(3,e,e.return),vl(3,e)}catch(t){Fu(e,e.return,t)}try{gl(5,e,e.return)}catch(t){Fu(e,e.return,t)}}break;case 1:Ol(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(Ol(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Fu(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===o.type&&null!=o.name&&ce(i,o),Re(a,s);var u=Re(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];"style"===c?Oe(i,d):"dangerouslySetInnerHTML"===c?xe(i,d):"children"===c?Te(i,d):R(i,c,d,u)}switch(a){case"input":de(i,o);break;case"textarea":ye(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?me(i,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?me(i,!!o.multiple,o.defaultValue,!0):me(i,!!o.multiple,o.multiple?[]:"",!1))}i[_i]=o}catch(t){Fu(e,e.return,t)}}break;case 6:if(Ol(t,e),Pl(e),4&r){if(null===e.stateNode)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(t){Fu(e,e.return,t)}}break;case 3:if(Ol(t,e),Pl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Fu(e,e.return,t)}break;case 4:default:Ol(t,e),Pl(e);break;case 13:Ol(t,e),Pl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(tu=ct())),4&r&&Il(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cl=(u=cl)||c,Ol(t,e),cl=u):Ol(t,e),Pl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(hl=e,c=e.child;null!==c;){for(d=hl=c;null!==hl;){switch(f=(h=hl).child,h.tag){case 0:case 11:case 14:case 15:gl(4,h,h.return);break;case 1:fl(h,h.return);var p=h.stateNode;if("function"==typeof p.componentWillUnmount){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Fu(r,n,e)}}break;case 5:fl(h,h.return);break;case 22:if(null!==h.memoizedState){Ll(d);continue}}null!==f?(f.return=h,hl=f):Ll(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(a=d.stateNode,s=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ie("display",s))}catch(t){Fu(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){Fu(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ol(t,e),Pl(e),4&r&&Il(e);case 21:}}function Pl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),kl(e,Sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;El(e,Sl(e),o);break;default:throw Error(y(161))}}catch(t){Fu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Rl(e,t,n){hl=e,Dl(e,t,n)}function Dl(e,t,n){for(var r=0!=(1&e.mode);null!==hl;){var i=hl,o=i.child;if(22===i.tag&&r){var s=null!==i.memoizedState||ul;if(!s){var a=i.alternate,l=null!==a&&null!==a.memoizedState||cl;a=ul;var u=cl;if(ul=s,(cl=l)&&!u)for(hl=i;null!==hl;)l=(s=hl).child,22===s.tag&&null!==s.memoizedState?Ml(i):null!==l?(l.return=s,hl=l):Ml(i);for(;null!==o;)hl=o,Dl(o,t,n),o=o.sibling;hl=i,ul=a,cl=u}Al(e)}else 0!=(8772&i.subtreeFlags)&&null!==o?(o.return=i,hl=o):Al(e)}}function Al(e){for(;null!==hl;){var t=hl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cl||vl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:No(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Jo(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Jo(t,s,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}cl||512&t.flags&&yl(t)}catch(e){Fu(t,t.return,e)}}if(t===e){hl=null;break}if(null!==(n=t.sibling)){n.return=t.return,hl=n;break}hl=t.return}}function Ll(e){for(;null!==hl;){var t=hl;if(t===e){hl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,hl=n;break}hl=t.return}}function Ml(e){for(;null!==hl;){var t=hl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(e){Fu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Fu(t,i,e)}}var o=t.return;try{yl(t)}catch(e){Fu(t,o,e)}break;case 5:var s=t.return;try{yl(t)}catch(e){Fu(t,s,e)}}}catch(e){Fu(t,t.return,e)}if(t===e){hl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,hl=a;break}hl=t.return}}var jl,Fl=Math.ceil,Ul=D.ReactCurrentDispatcher,zl=D.ReactCurrentOwner,Vl=D.ReactCurrentBatchConfig,Bl=0,$l=null,Hl=null,ql=0,Wl=0,Kl=ji(0),Gl=0,Ql=null,Yl=0,Xl=0,Jl=0,Zl=null,eu=null,tu=0,nu=1/0,ru=null,iu=!1,ou=null,su=null,au=!1,lu=null,uu=0,cu=0,du=null,hu=-1,fu=0;function pu(){return 0!=(6&Bl)?ct():-1!==hu?hu:hu=ct()}function mu(e){return 0==(1&e.mode)?1:0!=(2&Bl)&&0!==ql?ql&-ql:null!==Oo.transition?(0===fu&&(fu=It()),fu):0!==(e=Rt)?e:e=void 0===(e=window.event)?16:cn(e.type)}function gu(e,t,n,r){if(50<cu)throw cu=0,du=null,Error(y(185));Nt(e,n,r),0!=(2&Bl)&&e===$l||(e===$l&&(0==(2&Bl)&&(Xl|=n),4===Gl&&Su(e,ql)),vu(e,r),1===n&&0===Bl&&0==(1&t.mode)&&(nu=ct()+500,Ji&&to()))}function vu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),a=1<<s,l=i[s];-1===l?0!=(a&n)&&0==(a&r)||(i[s]=_t(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}(e,t);var r=Tt(e,e===$l?ql:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Ji=!0,eo(e)}(Eu.bind(null,e)):eo(Eu.bind(null,e)),bi((function(){0==(6&Bl)&&to()})),n=null;else{switch(Dt(r)){case 1:n=ht;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=$u(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(hu=-1,fu=0,0!=(6&Bl))throw Error(y(327));var n=e.callbackNode;if(Mu()&&e.callbackNode!==n)return null;var r=Tt(e,e===$l?ql:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var i=Bl;Bl|=2;var o=Iu();for($l===e&&ql===t||(ru=null,nu=ct()+500,_u(e,t));;)try{Ru();break}catch(t){Cu(e,t)}Lo(),Ul.current=o,Bl=i,null!==Hl?t=0:($l=null,ql=0,t=Gl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=bu(e,i))),1===t)throw n=Ql,_u(e,0),Su(e,r),vu(e,ct()),n;if(6===t)Su(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wr(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Nu(e,r))&&(0!==(o=Ct(e))&&(r=o,t=bu(e,o))),1===t))throw n=Ql,_u(e,0),Su(e,r),vu(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Lu(e,eu,ru);break;case 3:if(Su(e,r),(130023424&r)===r&&10<(t=tu+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Lu.bind(null,e,eu,ru),t);break}Lu(e,eu,ru);break;case 4:if(Su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fl(r/1960))-r)){e.timeoutHandle=gi(Lu.bind(null,e,eu,ru),r);break}Lu(e,eu,ru);break;default:throw Error(y(329))}}}return vu(e,ct()),e.callbackNode===n?yu.bind(null,e):null}function bu(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(_u(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=eu,eu=n,null!==t&&wu(t)),e}function wu(e){null===eu?eu=e:eu.push.apply(eu,e)}function Su(e,t){for(t&=~Jl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Eu(e){if(0!=(6&Bl))throw Error(y(327));Mu();var t=Tt(e,0);if(0==(1&t))return vu(e,ct()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Ql,_u(e,0),Su(e,t),vu(e,ct()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lu(e,eu,ru),vu(e,ct()),null}function ku(e,t){var n=Bl;Bl|=1;try{return e(t)}finally{0===(Bl=n)&&(nu=ct()+500,Ji&&to())}}function xu(e){null!==lu&&0===lu.tag&&0==(6&Bl)&&Mu();var t=Bl;Bl|=1;var n=Vl.transition,r=Rt;try{if(Vl.transition=null,Rt=1,e)return e()}finally{Rt=r,Vl.transition=n,0==(6&(Bl=t))&&to()}}function Tu(){Wl=Kl.current,Fi(Kl)}function _u(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,vi(n)),null!==Hl)for(n=Hl.return;null!==n;){var r=n;switch(mo(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Wi();break;case 3:ys(),Fi(Bi),Fi(Vi),xs();break;case 5:ws(r);break;case 4:ys();break;case 13:case 19:Fi(Ss);break;case 10:Mo(r.type._context);break;case 22:case 23:Tu()}n=n.return}if($l=e,Hl=e=Ku(e.current,null),ql=Wl=t,Gl=0,Ql=null,Jl=Xl=Yl=0,eu=Zl=null,null!==zo){for(t=0;t<zo.length;t++)if(null!==(r=(n=zo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var s=o.next;o.next=i,r.next=s}n.pending=r}zo=null}return e}function Cu(e,t){for(;;){var n=Hl;try{if(Lo(),Ts.current=ba,Ps){for(var r=Is.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ps=!1}if(Cs=0,Ns=Os=Is=null,Rs=!1,Ds=0,zl.current=null,null===n||null===n.return){Gl=1,Ql=t,Hl=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ql,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Na(s);if(null!==f){f.flags&=-257,Pa(f,s,a,0,t),1&f.mode&&Oa(o,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Oa(o,u,t),Ou();break e}l=Error(y(426))}else if(yo&&1&a.mode){var g=Na(s);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Pa(g,s,a,0,t),Io(ka(l,a));break e}}o=l=ka(l,a),4!==Gl&&(Gl=2),null===Zl?Zl=[o]:Zl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Yo(o,Ca(0,l,t));break e;case 1:a=l;var v=o.type,b=o.stateNode;if(0==(128&o.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===su||!su.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Yo(o,Ia(o,a,t));break e}}o=o.return}while(null!==o)}Au(n)}catch(e){t=e,Hl===n&&null!==n&&(Hl=n=n.return);continue}break}}function Iu(){var e=Ul.current;return Ul.current=ba,null===e?ba:e}function Ou(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===$l||0==(268435455&Yl)&&0==(268435455&Xl)||Su($l,ql)}function Nu(e,t){var n=Bl;Bl|=2;var r=Iu();for($l===e&&ql===t||(ru=null,_u(e,t));;)try{Pu();break}catch(t){Cu(e,t)}if(Lo(),Bl=n,Ul.current=r,null!==Hl)throw Error(y(261));return $l=null,ql=0,Gl}function Pu(){for(;null!==Hl;)Du(Hl)}function Ru(){for(;null!==Hl&&!lt();)Du(Hl)}function Du(e){var t=jl(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,null===t?Au(e):Hl=t,zl.current=null}function Au(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=al(n,t,Wl)))return void(Hl=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void(Hl=n);if(null===e)return Gl=6,void(Hl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Hl=t);Hl=t=e}while(null!==t);0===Gl&&(Gl=5)}function Lu(e,t,n){var r=Rt,i=Vl.transition;try{Vl.transition=null,Rt=1,function(e,t,n,r){do{Mu()}while(null!==lu);if(0!=(6&Bl))throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,o),e===$l&&(Hl=$l=null,ql=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||au||(au=!0,$u(pt,(function(){return Mu(),null}))),o=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||o){o=Vl.transition,Vl.transition=null;var s=Rt;Rt=1;var a=Bl;Bl|=4,zl.current=null,function(e,t){if(fi=rn,_r(e=Tr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(e){n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||0!==i&&3!==d.nodeType||(a=s+i),d!==o||0!==r&&3!==d.nodeType||(l=s+r),3===d.nodeType&&(s+=d.nodeValue.length),null!==(f=d.firstChild);)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),null!==(f=d.nextSibling))break;h=(d=h).parentNode}d=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,hl=t;null!==hl;)if(e=(t=hl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,hl=e;else for(;null!==hl;){t=hl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:No(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(y(163))}}catch(e){Fu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,hl=e;break}hl=t.return}p=ml,ml=!1}(e,n),Nl(n,e),Cr(pi),rn=!!fi,pi=fi=null,e.current=n,Rl(n,e,i),ut(),Bl=a,Rt=s,Vl.transition=o}else e.current=n;if(au&&(au=!1,lu=e,uu=i),o=e.pendingLanes,0===o&&(su=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),vu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,e=ou,ou=null,e;0!=(1&uu)&&0!==e.tag&&Mu(),o=e.pendingLanes,0!=(1&o)?e===du?cu++:(cu=0,du=e):cu=0,to()}(e,t,n,r)}finally{Vl.transition=i,Rt=r}return null}function Mu(){if(null!==lu){var e=Dt(uu),t=Vl.transition,n=Rt;try{if(Vl.transition=null,Rt=16>e?16:e,null===lu)var r=!1;else{if(e=lu,lu=null,uu=0,0!=(6&Bl))throw Error(y(331));var i=Bl;for(Bl|=4,hl=e.current;null!==hl;){var o=hl,s=o.child;if(0!=(16&hl.flags)){var a=o.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(hl=u;null!==hl;){var c=hl;switch(c.tag){case 0:case 11:case 15:gl(8,c,o)}var d=c.child;if(null!==d)d.return=c,hl=d;else for(;null!==hl;){var h=(c=hl).sibling,f=c.return;if(bl(c),c===u){hl=null;break}if(null!==h){h.return=f,hl=h;break}hl=f}}}var p=o.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}hl=o}}if(0!=(2064&o.subtreeFlags)&&null!==s)s.return=o,hl=s;else e:for(;null!==hl;){if(0!=(2048&(o=hl).flags))switch(o.tag){case 0:case 11:case 15:gl(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,hl=v;break e}hl=o.return}}var b=e.current;for(hl=b;null!==hl;){var w=(s=hl).child;if(0!=(2064&s.subtreeFlags)&&null!==w)w.return=s,hl=w;else e:for(s=b;null!==hl;){if(0!=(2048&(a=hl).flags))try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(e){Fu(a,a.return,e)}if(a===s){hl=null;break e}var S=a.sibling;if(null!==S){S.return=a.return,hl=S;break e}hl=a.return}}if(Bl=i,to(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{Rt=n,Vl.transition=t}}return!1}function ju(e,t,n){e=Go(e,t=Ca(0,t=ka(n,t),1),1),t=pu(),null!==e&&(Nt(e,1,t),vu(e,t))}function Fu(e,t,n){if(3===e.tag)ju(e,e,n);else for(;null!==t;){if(3===t.tag){ju(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===su||!su.has(r))){t=Go(t,e=Ia(t,e=ka(n,e),1),1),e=pu(),null!==t&&(Nt(t,1,e),vu(t,e));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pu(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(ql&n)===n&&(4===Gl||3===Gl&&(130023424&ql)===ql&&500>ct()-tu?_u(e,0):Jl|=n),vu(e,t)}function zu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=kt,0==(130023424&(kt<<=1))&&(kt=4194304)));var n=pu();null!==(e=$o(e,t))&&(Nt(e,t,n),vu(e,n))}function Vu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zu(e,n)}function Bu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),zu(e,n)}function $u(e,t){return st(e,t)}function Hu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qu(e,t,n,r){return new Hu(e,t,n,r)}function Wu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ku(e,t){var n=e.alternate;return null===n?((n=qu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gu(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Wu(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case M:return Qu(n.children,i,o,t);case j:s=8,i|=8;break;case F:return(e=qu(12,n,t,2|i)).elementType=F,e.lanes=o,e;case B:return(e=qu(13,n,t,i)).elementType=B,e.lanes=o,e;case $:return(e=qu(19,n,t,i)).elementType=$,e.lanes=o,e;case W:return Yu(n,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case U:s=10;break e;case z:s=9;break e;case V:s=11;break e;case H:s=14;break e;case q:s=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=qu(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Qu(e,t,n,r){return(e=qu(7,e,r,t)).lanes=n,e}function Yu(e,t,n,r){return(e=qu(22,e,r,t)).elementType=W,e.lanes=n,e.stateNode={isHidden:!1},e}function Xu(e,t,n){return(e=qu(6,e,null,t)).lanes=n,e}function Ju(e,t,n){return(t=qu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ot(0),this.expirationTimes=Ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,o,s,a,l){return e=new Zu(e,t,n,a,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=qu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qo(o),e}function tc(e){if(!e)return zi;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(qi(n))return Gi(e,n,t)}return t}function nc(e,t,n,r,i,o,s,a,l){return(e=ec(n,r,!0,e,0,o,0,a,l)).context=tc(null),n=e.current,(o=Ko(r=pu(),i=mu(n))).callback=null!=t?t:null,Go(n,o,i),e.current.lanes=i,Nt(e,i,r),vu(e,r),e}function rc(e,t,n,r){var i=t.current,o=pu(),s=mu(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ko(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Go(i,t,s))&&(gu(e,i,s,o),Qo(e,i,s)),s}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function oc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function sc(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}jl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Bi.current)Da=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Da=!1,function(e,t,n){switch(t.tag){case 3:$a(t),Co();break;case 5:bs(t);break;case 1:qi(t.type)&&Qi(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ui(Po,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ui(Ss,1&Ss.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Xa(e,t,n):(Ui(Ss,1&Ss.current),null!==(e=il(e,t,n))?e.sibling:null);Ui(Ss,1&Ss.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ui(Ss,Ss.current),r)break;return null;case 22:case 23:return t.lanes=0,Fa(e,t,n)}return il(e,t,n)}(e,t,n);Da=0!=(131072&e.flags)}else Da=!1,yo&&0!=(1048576&t.flags)&&fo(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=Hi(t,Vi.current);Fo(t,n),i=js(null,t,r,e,i,n);var o=Fs();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qi(r)?(o=!0,Qi(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,qo(t),i.updater=ts,t.stateNode=i,i._reactInternals=t,os(t,r,e,n),t=Ba(null,t,r,!0,o,n)):(t.tag=0,yo&&o&&po(t),Aa(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Wu(e)?1:0;if(null!=e){if((e=e.$$typeof)===V)return 11;if(e===H)return 14}return 2}(r),e=No(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,No(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:No(r,i),n);case 1:return r=t.type,i=t.pendingProps,Va(e,t,r,i=t.elementType===r?i:No(r,i),n);case 3:e:{if($a(t),null===e)throw Error(y(387));r=t.pendingProps,i=(o=t.memoizedState).element,Wo(e,t),Xo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ha(e,t,r,n,i=ka(Error(y(423)),t));break e}if(r!==i){t=Ha(e,t,r,n,i=ka(Error(y(424)),t));break e}for(vo=Ei(t.stateNode.containerInfo.firstChild),go=t,yo=!0,bo=null,n=ds(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Co(),r===i){t=il(e,t,n);break e}Aa(e,t,r,n)}t=t.child}return t;case 5:return bs(t),null===e&&ko(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,mi(r,i)?s=null:null!==o&&mi(r,o)&&(t.flags|=32),Ua(e,t),Aa(e,t,s,n),t.child;case 6:return null===e&&ko(t),null;case 13:return Xa(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=cs(t,null,r,n):Aa(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,La(e,t,r,i=t.elementType===r?i:No(r,i),n);case 7:return Aa(e,t,t.pendingProps,n),t.child;case 8:case 12:return Aa(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ui(Po,r._currentValue),r._currentValue=s,null!==o)if(wr(o.value,s)){if(o.children===i.children&&!Bi.current){t=il(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var a=o.dependencies;if(null!==a){s=o.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===o.tag){(l=Ko(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),jo(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(y(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),jo(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}Aa(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fo(t,n),r=r(i=Uo(i)),t.flags|=1,Aa(e,t,r,n),t.child;case 14:return i=No(r=t.type,t.pendingProps),Ma(e,t,r,i=No(r.type,i),n);case 15:return ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:No(r,i),rl(e,t),t.tag=1,qi(r)?(e=!0,Qi(t)):e=!1,Fo(t,n),rs(t,r,i),os(t,r,i,n),Ba(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return Fa(e,t,n)}throw Error(y(156,t.tag))};var ac="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function hc(){}function fc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if("function"==typeof i){var a=i;i=function(){var e=ic(s);a.call(e)}}rc(t,s,e,i)}else s=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=ic(s);o.call(e)}}var s=nc(t,r,e,0,null,!1,0,"",hc);return e._reactRootContainer=s,e[Ci]=s.current,ti(8===e.nodeType?e.parentNode:e),xu(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=ic(l);a.call(e)}}var l=ec(e,0,!1,null,0,!1,0,"",hc);return e._reactRootContainer=l,e[Ci]=l.current,ti(8===e.nodeType?e.parentNode:e),xu((function(){rc(t,l,n,r)})),l}(n,t,e,i,r);return ic(s)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;xu((function(){rc(null,e,null,null)})),t[Ci]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&0!==t&&t<Wt[n].priority;n++);Wt.splice(n,0,e),0===n&&Yt(e)}},At=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xt(t.pendingLanes);0!==n&&(Pt(t,1|n),vu(t,ct()),0==(6&Bl)&&(nu=ct()+500,to()))}break;case 13:xu((function(){var t=$o(e,1);if(null!==t){var n=pu();gu(t,e,1,n)}})),sc(e,1)}},Lt=function(e){if(13===e.tag){var t=$o(e,134217728);if(null!==t)gu(t,e,134217728,pu());sc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mu(e),n=$o(e,t);if(null!==n)gu(n,e,t,pu());sc(e,t)}},jt=function(){return Rt},Ft=function(e,t){var n=Rt;try{return Rt=e,t()}finally{Rt=n}},Le=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ai(r);if(!i)throw Error(y(90));se(r),de(r,i)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Ve=ku,Be=xu;var pc={usingClientEntryPoint:!1,Events:[Ri,Di,Ai,Ue,ze,ku]},mc={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{vt=vc.inject(gc),yt=vc}catch(ke){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(y(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:L,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},s=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",i=ac;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,ti(8===e.nodeType?e.parentNode:e),new lc(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return xu(e)},u=function(e,t,n){if(!dc(t))throw Error(y(200));return fc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=ac;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,o,s),e[Ci]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uc(t)},d=function(e,t,n){if(!dc(t))throw Error(y(200));return fc(null,e,t,!1,n)},h=function(e){if(!dc(e))throw Error(y(40));return!!e._reactRootContainer&&(xu((function(){fc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ci]=null}))})),!0)},f=ku,p=function(e,t,n,r){if(!dc(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return fc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),o.register("fO90s",(function(e,t){e.exports=o("gcnCG")})),o.register("gcnCG",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S;function E(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function k(e){return 0===e.length?null:e[0]}function x(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,a=e[s],l=s+1,u=e[l];if(0>T(a,n))l<i&&0>T(u,a)?(e[r]=u,e[l]=n,r=l):(e[r]=a,e[s]=n,r=s);else{if(!(l<i&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_ImmediatePriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_LowPriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_NormalPriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_Profiling",(()=>l),(e=>l=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>u),(e=>u=e)),e(t.exports,"unstable_cancelCallback",(()=>c),(e=>c=e)),e(t.exports,"unstable_continueExecution",(()=>d),(e=>d=e)),e(t.exports,"unstable_forceFrameRate",(()=>h),(e=>h=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>f),(e=>f=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>p),(e=>p=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>g),(e=>g=e)),e(t.exports,"unstable_requestPaint",(()=>v),(e=>v=e)),e(t.exports,"unstable_runWithPriority",(()=>y),(e=>y=e)),e(t.exports,"unstable_scheduleCallback",(()=>b),(e=>b=e)),e(t.exports,"unstable_shouldYield",(()=>w),(e=>w=e)),e(t.exports,"unstable_wrapCallback",(()=>S),(e=>S=e)),"object"==typeof performance&&"function"==typeof performance.now){var _=performance;r=function(){return _.now()}}else{var C=Date,I=C.now();r=function(){return C.now()-I}}var O=[],N=[],P=1,R=null,D=3,A=!1,L=!1,M=!1,j="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,U="undefined"!=typeof setImmediate?setImmediate:null;function z(e){for(var t=k(N);null!==t;){if(null===t.callback)x(N);else{if(!(t.startTime<=e))break;x(N),t.sortIndex=t.expirationTime,E(O,t)}t=k(N)}}function V(e){if(M=!1,z(e),!L)if(null!==k(O))L=!0,Z(B);else{var t=k(N);null!==t&&ee(V,t.startTime-e)}}function B(e,t){L=!1,M&&(M=!1,F(W),W=-1),A=!0;var n=D;try{for(z(t),R=k(O);null!==R&&(!(R.expirationTime>t)||e&&!Q());){var i=R.callback;if("function"==typeof i){R.callback=null,D=R.priorityLevel;var o=i(R.expirationTime<=t);t=r(),"function"==typeof o?R.callback=o:R===k(O)&&x(O),z(t)}else x(O);R=k(O)}if(null!==R)var s=!0;else{var a=k(N);null!==a&&ee(V,a.startTime-t),s=!1}return s}finally{R=null,D=n,A=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var $,H=!1,q=null,W=-1,K=5,G=-1;function Q(){return!(r()-G<K)}function Y(){if(null!==q){var e=r();G=e;var t=!0;try{t=q(!0,e)}finally{t?$():(H=!1,q=null)}}else H=!1}if("function"==typeof U)$=function(){U(Y)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Y,$=function(){J.postMessage(null)}}else $=function(){j(Y,0)};function Z(e){q=e,H||(H=!0,$())}function ee(e,t){W=j((function(){e(r())}),t)}i=5,o=1,s=4,a=3,l=null,u=2,c=function(e){e.callback=null},d=function(){L||A||(L=!0,Z(B))},h=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},f=function(){return D},p=function(){return k(O)},m=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:P++,callback:t,priorityLevel:e,startTime:n,expirationTime:o=n+o,sortIndex:-1},n>i?(e.sortIndex=n,E(N,e),null===k(O)&&e===k(N)&&(M?(F(W),W=-1):M=!0,ee(V,n-i))):(e.sortIndex=o,E(O,e),L||A||(L=!0,Z(B))),e},w=Q,S=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}})),o.register("30Ie1",(function(t,n){
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
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N;e(t.exports,"AsyncMode",(()=>r),(e=>r=e)),e(t.exports,"ConcurrentMode",(()=>i),(e=>i=e)),e(t.exports,"ContextConsumer",(()=>o),(e=>o=e)),e(t.exports,"ContextProvider",(()=>s),(e=>s=e)),e(t.exports,"Element",(()=>a),(e=>a=e)),e(t.exports,"ForwardRef",(()=>l),(e=>l=e)),e(t.exports,"Fragment",(()=>u),(e=>u=e)),e(t.exports,"Lazy",(()=>c),(e=>c=e)),e(t.exports,"Memo",(()=>d),(e=>d=e)),e(t.exports,"Portal",(()=>h),(e=>h=e)),e(t.exports,"Profiler",(()=>f),(e=>f=e)),e(t.exports,"StrictMode",(()=>p),(e=>p=e)),e(t.exports,"Suspense",(()=>m),(e=>m=e)),e(t.exports,"isAsyncMode",(()=>g),(e=>g=e)),e(t.exports,"isConcurrentMode",(()=>v),(e=>v=e)),e(t.exports,"isContextConsumer",(()=>y),(e=>y=e)),e(t.exports,"isContextProvider",(()=>b),(e=>b=e)),e(t.exports,"isElement",(()=>w),(e=>w=e)),e(t.exports,"isForwardRef",(()=>S),(e=>S=e)),e(t.exports,"isFragment",(()=>E),(e=>E=e)),e(t.exports,"isLazy",(()=>k),(e=>k=e)),e(t.exports,"isMemo",(()=>x),(e=>x=e)),e(t.exports,"isPortal",(()=>T),(e=>T=e)),e(t.exports,"isProfiler",(()=>_),(e=>_=e)),e(t.exports,"isStrictMode",(()=>C),(e=>C=e)),e(t.exports,"isSuspense",(()=>I),(e=>I=e)),e(t.exports,"isValidElementType",(()=>O),(e=>O=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var P="function"==typeof Symbol&&Symbol.for,R=P?Symbol.for("react.element"):60103,D=P?Symbol.for("react.portal"):60106,A=P?Symbol.for("react.fragment"):60107,L=P?Symbol.for("react.strict_mode"):60108,M=P?Symbol.for("react.profiler"):60114,j=P?Symbol.for("react.provider"):60109,F=P?Symbol.for("react.context"):60110,U=P?Symbol.for("react.async_mode"):60111,z=P?Symbol.for("react.concurrent_mode"):60111,V=P?Symbol.for("react.forward_ref"):60112,B=P?Symbol.for("react.suspense"):60113,$=P?Symbol.for("react.suspense_list"):60120,H=P?Symbol.for("react.memo"):60115,q=P?Symbol.for("react.lazy"):60116,W=P?Symbol.for("react.block"):60121,K=P?Symbol.for("react.fundamental"):60117,G=P?Symbol.for("react.responder"):60118,Q=P?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case R:switch(e=e.type){case U:case z:case A:case M:case L:case B:return e;default:switch(e=e&&e.$$typeof){case F:case V:case q:case H:case j:return e;default:return t}}case D:return t}}}function X(e){return Y(e)===z}r=U,i=z,o=F,s=j,a=R,l=V,u=A,c=q,d=H,h=D,f=M,p=L,m=B,g=function(e){return X(e)||Y(e)===U},v=X,y=function(e){return Y(e)===F},b=function(e){return Y(e)===j},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},S=function(e){return Y(e)===V},E=function(e){return Y(e)===A},k=function(e){return Y(e)===q},x=function(e){return Y(e)===H},T=function(e){return Y(e)===D},_=function(e){return Y(e)===M},C=function(e){return Y(e)===L},I=function(e){return Y(e)===B},O=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===z||e===M||e===L||e===B||e===$||"object"==typeof e&&null!==e&&(e.$$typeof===q||e.$$typeof===H||e.$$typeof===j||e.$$typeof===F||e.$$typeof===V||e.$$typeof===K||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===W)},N=Y})),o.register("cgj07",(function(t,n){
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,s,a,l,u,c,d,h,f,p,m,g,v,y,b,w,S,E,k,x,T,_,C,I,O,N;e(t.exports,"ContextConsumer",(()=>r),(e=>r=e)),e(t.exports,"ContextProvider",(()=>i),(e=>i=e)),e(t.exports,"Element",(()=>o),(e=>o=e)),e(t.exports,"ForwardRef",(()=>s),(e=>s=e)),e(t.exports,"Fragment",(()=>a),(e=>a=e)),e(t.exports,"Lazy",(()=>l),(e=>l=e)),e(t.exports,"Memo",(()=>u),(e=>u=e)),e(t.exports,"Portal",(()=>c),(e=>c=e)),e(t.exports,"Profiler",(()=>d),(e=>d=e)),e(t.exports,"StrictMode",(()=>h),(e=>h=e)),e(t.exports,"Suspense",(()=>f),(e=>f=e)),e(t.exports,"SuspenseList",(()=>p),(e=>p=e)),e(t.exports,"isAsyncMode",(()=>m),(e=>m=e)),e(t.exports,"isConcurrentMode",(()=>g),(e=>g=e)),e(t.exports,"isContextConsumer",(()=>v),(e=>v=e)),e(t.exports,"isContextProvider",(()=>y),(e=>y=e)),e(t.exports,"isElement",(()=>b),(e=>b=e)),e(t.exports,"isForwardRef",(()=>w),(e=>w=e)),e(t.exports,"isFragment",(()=>S),(e=>S=e)),e(t.exports,"isLazy",(()=>E),(e=>E=e)),e(t.exports,"isMemo",(()=>k),(e=>k=e)),e(t.exports,"isPortal",(()=>x),(e=>x=e)),e(t.exports,"isProfiler",(()=>T),(e=>T=e)),e(t.exports,"isStrictMode",(()=>_),(e=>_=e)),e(t.exports,"isSuspense",(()=>C),(e=>C=e)),e(t.exports,"isSuspenseList",(()=>I),(e=>I=e)),e(t.exports,"isValidElementType",(()=>O),(e=>O=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var P,R=Symbol.for("react.element"),D=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),F=Symbol.for("react.context"),U=Symbol.for("react.server_context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen");function W(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case R:switch(e=e.type){case A:case M:case L:case V:case B:return e;default:switch(e=e&&e.$$typeof){case U:case F:case z:case H:case $:case j:return e;default:return t}}case D:return t}}}P=Symbol.for("react.module.reference"),r=F,i=j,o=R,s=z,a=A,l=H,u=$,c=D,d=M,h=L,f=V,p=B,m=function(){return!1},g=function(){return!1},v=function(e){return W(e)===F},y=function(e){return W(e)===j},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},w=function(e){return W(e)===z},S=function(e){return W(e)===A},E=function(e){return W(e)===H},k=function(e){return W(e)===$},x=function(e){return W(e)===D},T=function(e){return W(e)===M},_=function(e){return W(e)===L},C=function(e){return W(e)===V},I=function(e){return W(e)===B},O=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===M||e===L||e===V||e===B||e===q||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===$||e.$$typeof===j||e.$$typeof===F||e.$$typeof===z||e.$$typeof===P||void 0!==e.getModuleId)},N=W})),o.register("99b6d",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var r=u(o("acw62")),i=o("inpnQ"),s=u(o("aqP1M")),a=u(o("bt3o5")),l=o("2y81T");function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,r)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=(0,l.canUseDOM)()&&o("aqoFQ"),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,o,u=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),y(g(t=u.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),y(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),y(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),y(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),y(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),y(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){b.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var i;i=0===r?(0,s.default)({minWidth:0,maxWidth:n}):(0,s.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,l.canUseDOM)()&&e.media(i,(function(){e.setState({breakpoint:n})}))}));var n=(0,s.default)({minWidth:t.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){b.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":h(h(h({},a.default),this.props),t[0].settings):h(h({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=r.default.Children.toArray(this.props.children);o=o.filter((function(e){return"string"==typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var s=[],l=null,u=0;u<o.length;u+=e.rows*e.slidesPerRow){for(var d=[],f=u;f<u+e.rows*e.slidesPerRow;f+=e.slidesPerRow){for(var p=[],m=f;m<f+e.slidesPerRow&&(e.variableWidth&&o[m].props.style&&(l=o[m].props.style.width),!(m>=o.length));m+=1)p.push(r.default.cloneElement(o[m],{key:100*u+10*f+m,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));d.push(r.default.createElement("div",{key:10*u+f},p))}e.variableWidth?s.push(r.default.createElement("div",{key:u,style:{width:l}},d)):s.push(r.default.createElement("div",{key:u},d))}if("unslick"===e){var g="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:g},o)}return s.length<=e.slidesToShow&&(e.unslick=!0),r.default.createElement(i.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},e),s)}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component);e.exports.default=w})),o.register("inpnQ",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.InnerSlider=void 0;var n=h(o("acw62")),r=h(o("9jP9B")),i=h(o("lwfqC")),s=h(o("8g1PZ")),a=o("2y81T"),l=o("7yZIu"),u=o("5dzCO"),c=o("gught"),d=h(o("bEEfE"));function h(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(this,n)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(E,e);var t,o,h,g=w(E);function E(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),k(S(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),k(S(t),"trackRefHandler",(function(e){return t.track=e})),k(S(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,a.getHeight)(e)+"px"}})),k(S(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,a.getOnDemandLazySlides)(v(v({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=v({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),k(S(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),k(S(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var r=(0,a.getOnDemandLazySlides)(v(v({},t.props),t.state));r.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(r)}})),t.props.onLazyLoad&&t.props.onLazyLoad(r))}t.adaptHeight();var i=v(v({listRef:t.list,trackRef:t.track},t.props),t.state),o=t.didPropsChange(e);o&&t.updateState(i,o,(function(){t.state.currentSlide>=n.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:n.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),k(S(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,i.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),k(S(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=v(v({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),k(S(t),"updateState",(function(e,r,i){var o=(0,a.initializedState)(e);e=v(v(v({},e),o),{},{slideIndex:o.currentSlide});var s=(0,a.getTrackLeft)(e);e=v(v({},e),{},{left:s});var l=(0,a.getTrackCSS)(e);(r||n.default.Children.count(t.props.children)!==n.default.Children.count(e.children))&&(o.trackStyle=l),t.setState(o,i)})),k(S(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,r=0,i=[],o=(0,a.getPreClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length})),s=(0,a.getPostClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){i.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<o;l++)r+=i[i.length-1-l],e+=i[i.length-1-l];for(var u=0;u<s;u++)e+=i[u];for(var c=0;c<t.state.currentSlide;c++)r+=i[c];var d={width:e+"px",left:-r+"px"};if(t.props.centerMode){var h="".concat(i[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(h,") / 2 ) ")}return{trackStyle:d}}var f=n.default.Children.count(t.props.children),p=v(v(v({},t.props),t.state),{},{slideCount:f}),m=(0,a.getPreClones)(p)+(0,a.getPostClones)(p)+f,g=100/t.props.slidesToShow*m,y=100/m,b=-y*((0,a.getPreClones)(p)+t.state.currentSlide)*g/100;return t.props.centerMode&&(b+=(100-y*g/100)/2),{slideWidth:y+"%",trackStyle:{width:g+"%",left:b+"%"}}})),k(S(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(){o(),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),k(S(t),"progressiveLazyLoad",(function(){for(var e=[],n=v(v({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,a.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,a.getPreClones)(n);i--)if(t.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),k(S(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,s=r.onLazyLoad,l=r.speed,u=r.afterChange,c=t.state.currentSlide,d=(0,a.slideHandler)(v(v(v({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),h=d.state,f=d.nextState;if(h){o&&o(c,h.currentSlide);var p=h.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));s&&p.length>0&&s(p),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),u&&u(c),delete t.animationEndCallback),t.setState(h,(function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=m(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),u&&u(h.currentSlide),delete t.animationEndCallback}))}),l))}))}})),k(S(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=v(v({},t.props),t.state),i=(0,a.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}})),k(S(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),k(S(t),"keyHandler",(function(e){var n=(0,a.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),k(S(t),"selectHandler",(function(e){t.changeSlide(e)})),k(S(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),k(S(t),"enableBodyScroll",(function(){window.ontouchmove=null})),k(S(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,a.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),k(S(t),"swipeMove",(function(e){var n=(0,a.swipeMove)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),k(S(t),"swipeEnd",(function(e){var n=(0,a.swipeEnd)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),k(S(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),k(S(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),k(S(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),k(S(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),k(S(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,a.canGoNext)(v(v({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),k(S(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),k(S(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),k(S(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),k(S(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),k(S(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),k(S(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),k(S(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),k(S(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),k(S(t),"render",(function(){var e,r,i,o=(0,s.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=v(v({},t.props),t.state),h=(0,a.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(h=v(v({},h),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,a.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;m=v(v({},m),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=n.default.createElement(u.Dots,m)}var y=(0,a.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=t.changeSlide,t.props.arrows&&(r=n.default.createElement(c.PrevArrow,y),i=n.default.createElement(c.NextArrow,y));var b=null;t.props.vertical&&(b={height:t.state.listHeight});var w=null;!1===t.props.vertical?!0===t.props.centerMode&&(w={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(w={padding:t.props.centerPadding+" 0px"});var S=v(v({},b),w),E=t.props.touchMove,k={className:"slick-list",style:S,onClick:t.clickHandler,onMouseDown:E?t.swipeStart:null,onMouseMove:t.state.dragging&&E?t.swipeMove:null,onMouseUp:E?t.swipeEnd:null,onMouseLeave:t.state.dragging&&E?t.swipeEnd:null,onTouchStart:E?t.swipeStart:null,onTouchMove:t.state.dragging&&E?t.swipeMove:null,onTouchEnd:E?t.touchEnd:null,onTouchCancel:t.state.dragging&&E?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},x={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(k={className:"slick-list"},x={className:o}),n.default.createElement("div",x,t.props.unslick?"":r,n.default.createElement("div",p({ref:t.listRefHandler},k),n.default.createElement(l.Track,p({ref:t.trackRefHandler},h),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=v(v({},r.default),{},{currentSlide:t.props.initialSlide,slideCount:n.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var o=t.ssrInit();return t.state=v(v({},t.state),o),t}return t=E,(o=[{key:"didPropsChange",value:function(e){for(var t=!1,r=0,i=Object.keys(this.props);r<i.length;r++){var o=i[r];if(!e.hasOwnProperty(o)){t=!0;break}if("object"!==f(e[o])&&"function"!=typeof e[o]&&e[o]!==this.props[o]){t=!0;break}}return t||n.default.Children.count(this.props.children)!==n.default.Children.count(e.children)}}])&&y(t.prototype,o),h&&y(t,h),Object.defineProperty(t,"prototype",{writable:!1}),E}(n.default.Component);e.exports.InnerSlider=x})),o.register("9jP9B",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.exports.default=n})),o.register("lwfqC",(function(e,n){var r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,h=c||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return h.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?r:+e}e.exports=function(e,t,n){var r,i,o,s,a,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,s=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function w(){var e=g();if(b(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-l);return d?m(n,o-(e-u)):n}(e))}function S(e){return a=void 0,h&&r?f(e):(r=i=void 0,s)}function E(){var e=g(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return function(e){return u=e,a=setTimeout(w,t),c?f(e):s}(l);if(d)return a=setTimeout(w,t),f(l)}return void 0===a&&(a=setTimeout(w,t)),s}return t=y(t)||0,v(n)&&(c=!!n.leading,o=(d="maxWait"in n)?p(y(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),E.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=l=i=a=void 0},E.flush=function(){return void 0===a?s:S(g())},E}})),o.register("8g1PZ",(function(e,t){
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&e.push(s)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var a in i)t.call(i,a)&&i[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return n})):window.classNames=n}()})),o.register("2y81T",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.checkSpecKeys=e.exports.checkNavigable=e.exports.changeSlide=e.exports.canUseDOM=e.exports.canGoNext=void 0,e.exports.clamp=l,e.exports.swipeStart=e.exports.swipeMove=e.exports.swipeEnd=e.exports.slidesOnRight=e.exports.slidesOnLeft=e.exports.slideHandler=e.exports.siblingDirection=e.exports.safePreventDefault=e.exports.lazyStartIndex=e.exports.lazySlidesOnRight=e.exports.lazySlidesOnLeft=e.exports.lazyEndIndex=e.exports.keyHandler=e.exports.initializedState=e.exports.getWidth=e.exports.getTrackLeft=e.exports.getTrackCSS=e.exports.getTrackAnimateCSS=e.exports.getTotalSlides=e.exports.getSwipeDirection=e.exports.getSlideCount=e.exports.getRequiredLazySlides=e.exports.getPreClones=e.exports.getPostClones=e.exports.getOnDemandLazySlides=e.exports.getNavigableIndexes=e.exports.getHeight=e.exports.extractObject=void 0;var n,r=(n=o("acw62"))&&n.__esModule?n:{default:n};function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return Math.max(t,Math.min(e,n))}var u=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()};e.exports.safePreventDefault=u;var c=function(e){for(var t=[],n=d(e),r=h(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t};e.exports.getOnDemandLazySlides=c;e.exports.getRequiredLazySlides=function(e){for(var t=[],n=d(e),r=h(e),i=n;i<r;i++)t.push(i);return t};var d=function(e){return e.currentSlide-f(e)};e.exports.lazyStartIndex=d;var h=function(e){return e.currentSlide+p(e)};e.exports.lazyEndIndex=h;var f=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};e.exports.lazySlidesOnLeft=f;var p=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};e.exports.lazySlidesOnRight=p;var m=function(e){return e&&e.offsetWidth||0};e.exports.getWidth=m;var g=function(e){return e&&e.offsetHeight||0};e.exports.getHeight=g;var v=function(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(i=Math.round(180*r/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":!0===o?i>=35&&i<=135?"up":"down":"vertical"};e.exports.getSwipeDirection=v;var y=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t};e.exports.canGoNext=y;e.exports.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n};e.exports.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,o=Math.ceil(m(i)),a=e.trackRef&&e.trackRef.node,l=Math.ceil(m(a));if(e.vertical)t=o;else{var u=e.centerMode&&2*parseInt(e.centerPadding);"string"==typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(u*=o/100),t=Math.ceil((o-u)/e.slidesToShow)}var d=i&&g(i.querySelector('[data-index="0"]')),h=d*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var p=e.lazyLoadedList||[],v=c(s(s({},e),{},{currentSlide:f,lazyLoadedList:p})),y={slideCount:n,slideWidth:t,listWidth:o,trackWidth:l,currentSlide:f,slideHeight:d,listHeight:h,lazyLoadedList:p=p.concat(v)};return null===e.autoplaying&&e.autoplay&&(y.autoplaying="playing"),y};e.exports.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,u=e.lazyLoad,d=e.currentSlide,h=e.centerMode,f=e.slidesToScroll,p=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var v,b,w,S=o,E={},_={},C=i?o:l(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?S=o+a:o>=a&&(S=o-a),u&&g.indexOf(S)<0&&(g=g.concat(S)),E={animating:!0,currentSlide:S,lazyLoadedList:g,targetSlide:S},_={animating:!1,targetSlide:S}}else v=S,S<0?(v=S+a,i?a%f!=0&&(v=a-a%f):v=0):!y(e)&&S>d?S=v=d:h&&S>=a?(S=i?a:a-1,v=i?0:a-1):S>=a&&(v=S-a,i?a%f!=0&&(v=0):v=a-p),!i&&S+p>=a&&(v=a-p),b=T(s(s({},e),{},{slideIndex:S})),w=T(s(s({},e),{},{slideIndex:v})),i||(b===w&&(S=v),b=w),u&&(g=g.concat(c(s(s({},e),{},{currentSlide:S})))),m?(E={animating:!0,currentSlide:v,trackStyle:x(s(s({},e),{},{left:b})),lazyLoadedList:g,targetSlide:C},_={animating:!1,currentSlide:v,trackStyle:k(s(s({},e),{},{left:w})),swipeLeft:null,targetSlide:C}):E={currentSlide:v,trackStyle:k(s(s({},e),{},{left:w})),lazyLoadedList:g,targetSlide:C};return{state:E,nextState:_}};e.exports.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,l=e.slidesToShow,u=e.slideCount,c=e.currentSlide,d=e.targetSlide,h=e.lazyLoad,f=e.infinite;if(n=u%a!=0?0:(u-c)%a,"previous"===t.message)o=c-(i=0===n?a:l-n),h&&!f&&(o=-1===(r=c-i)?u-1:r),f||(o=d-a);else if("next"===t.message)o=c+(i=0===n?a:n),h&&!f&&(o=(c+a)%u+n),f||(o=d+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,f){var p=O(s(s({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===p?o-=u:o<t.currentSlide&&"right"===p&&(o+=u)}}else"index"===t.message&&(o=Number(t.index));return o};e.exports.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""};e.exports.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&u(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};e.exports.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,l=t.rtl,c=t.currentSlide,d=t.edgeFriction,h=t.edgeDragged,f=t.onEdge,p=t.swiped,m=t.swiping,g=t.slideCount,b=t.slidesToScroll,w=t.infinite,S=t.touchObject,E=t.swipeEvent,x=t.listHeight,_=t.listWidth;if(!n){if(r)return u(e);i&&o&&a&&u(e);var C,I={},O=T(t);S.curX=e.touches?e.touches[0].pageX:e.clientX,S.curY=e.touches?e.touches[0].pageY:e.clientY,S.swipeLength=Math.round(Math.sqrt(Math.pow(S.curX-S.startX,2)));var N=Math.round(Math.sqrt(Math.pow(S.curY-S.startY,2)));if(!a&&!m&&N>10)return{scrolling:!0};a&&(S.swipeLength=N);var P=(l?-1:1)*(S.curX>S.startX?1:-1);a&&(P=S.curY>S.startY?1:-1);var R=Math.ceil(g/b),D=v(t.touchObject,a),A=S.swipeLength;return w||(0===c&&("right"===D||"down"===D)||c+1>=R&&("left"===D||"up"===D)||!y(t)&&("left"===D||"up"===D))&&(A=S.swipeLength*d,!1===h&&f&&(f(D),I.edgeDragged=!0)),!p&&E&&(E(D),I.swiped=!0),C=i?O+A*(x/_)*P:l?O-A*P:O+A*P,a&&(C=O+A*P),I=s(s({},I),{},{touchObject:S,swipeLeft:C,trackStyle:k(s(s({},t),{},{left:C}))}),Math.abs(S.curX-S.startX)<.8*Math.abs(S.curY-S.startY)?I:(S.swipeLength>10&&(I.swiping=!0,u(e)),I)}};e.exports.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,l=t.verticalSwiping,c=t.listHeight,d=t.swipeToSlide,h=t.scrolling,f=t.onSwipe,p=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&u(e),{};var y=l?c/a:o/a,b=v(i,l),E={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h)return E;if(!i.swipeLength)return E;if(i.swipeLength>y){var k,_;u(e),f&&f(b);var C=g?m:p;switch(b){case"left":case"up":_=C+S(t),k=d?w(t,_):_,E.currentDirection=0;break;case"right":case"down":_=C-S(t),k=d?w(t,_):_,E.currentDirection=1;break;default:k=C}E.triggerSlideHandler=k}else{var I=T(t);E.trackStyle=x(s(s({},t),{},{left:I}))}return E};var b=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i};e.exports.getNavigableIndexes=b;var w=function(e,t){var n=b(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t};e.exports.checkNavigable=w;var S=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(i).every((function(r){if(e.vertical){if(r.offsetTop+g(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+m(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll};e.exports.getSlideCount=S;var E=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)};e.exports.checkSpecKeys=E;var k=function(e){var t,n;E(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=I(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=s(s({},i),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i};e.exports.getTrackCSS=k;var x=function(e){E(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=k(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t};e.exports.getTrackAnimateCSS=x;var T=function(e){if(e.unslick)return 0;E(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,o=e.infinite,s=e.centerMode,a=e.slideCount,l=e.slidesToShow,u=e.slidesToScroll,c=e.slideWidth,d=e.listWidth,h=e.variableWidth,f=e.slideHeight,p=e.fade,m=e.vertical;if(p||1===e.slideCount)return 0;var g=0;if(o?(g=-_(e),a%u!=0&&r+u>a&&(g=-(r>a?l-(r-a):a%u)),s&&(g+=parseInt(l/2))):(a%u!=0&&r+u>a&&(g=l-a%u),s&&(g=parseInt(l/2))),t=m?r*f*-1+g*f:r*c*-1+g*c,!0===h){var v,y=i&&i.node;if(v=r+_(e),t=(n=y&&y.childNodes[v])?-1*n.offsetLeft:0,!0===s){v=o?r+_(e):r,n=y&&y.children[v],t=0;for(var b=0;b<v;b++)t-=y&&y.children[b]&&y.children[b].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t};e.exports.getTrackLeft=T;var _=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};e.exports.getPreClones=_;var C=function(e){return e.unslick||!e.infinite?0:e.slideCount};e.exports.getPostClones=C;var I=function(e){return 1===e.slideCount?1:_(e)+e.slideCount+C(e)};e.exports.getTotalSlides=I;var O=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+N(e)?"left":"right":e.targetSlide<e.currentSlide-P(e)?"right":"left"};e.exports.siblingDirection=O;var N=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2==0&&(o+=1),o}return r?0:t-1};e.exports.slidesOnRight=N;var P=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!=0||(o+=1),o}return r?t-1:0};e.exports.slidesOnLeft=P;e.exports.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}})),o.register("7yZIu",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Track=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount==0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},y=function(e,t){return e.key||t},b=function(e){var t,n=[],o=[],a=[],l=r.default.Children.count(e.children),u=(0,s.lazyStartIndex)(e),c=(0,s.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,h){var f,p={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?d:r.default.createElement("div",null);var g=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(m(m({},e),{},{index:h})),b=f.props.className||"",w=v(m(m({},e),{},{index:h}));if(n.push(r.default.cloneElement(f,{key:"original"+y(f,h),"data-index":h,className:(0,i.default)(w,b),tabIndex:"-1","aria-hidden":!w["slick-active"],style:m(m({outline:"none"},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}})),e.infinite&&!1===e.fade){var S=l-h;S<=(0,s.getPreClones)(e)&&l!==e.slidesToShow&&((t=-S)>=u&&(f=d),w=v(m(m({},e),{},{index:t})),o.push(r.default.cloneElement(f,{key:"precloned"+y(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,b),"aria-hidden":!w["slick-active"],style:m(m({},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}}))),l!==e.slidesToShow&&((t=l+h)<c&&(f=d),w=v(m(m({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"postcloned"+y(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(w,b),"aria-hidden":!w["slick-active"],style:m(m({},f.props.style||{}),g),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(p)}})))}})),e.rtl?o.concat(n,a).reverse():o.concat(n,a)},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,n,i,o=d(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(h(e=o.call.apply(o,[this].concat(n))),"node",null),g(h(e),"handleRef",(function(t){e.node=t})),e}return t=s,(n=[{key:"render",value:function(){var e=b(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&u(t.prototype,n),i&&u(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.PureComponent);e.exports.Track=w})),o.register("5dzCO",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Dots=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(f,e);var t,n,o,a=h(f);function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),a.apply(this,arguments)}return t=f,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,o=t.onMouseOver,a=t.onMouseLeave,c=t.infinite,d=t.slidesToScroll,h=t.slidesToShow,f=t.slideCount,p=t.currentSlide,m=(e={slideCount:f,slidesToScroll:d,slidesToShow:h,infinite:c}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:o,onMouseLeave:a},v=[],y=0;y<m;y++){var b=(y+1)*d-1,w=c?b:(0,s.clamp)(b,0,f-1),S=w-(d-1),E=c?S:(0,s.clamp)(S,0,f-1),k=(0,i.default)({"slick-active":c?p>=E&&p<=w:p===E}),x={message:"dots",index:y,slidesToScroll:d,currentSlide:p},T=this.clickHandler.bind(this,x);v=v.concat(r.default.createElement("li",{key:y,className:k},r.default.cloneElement(this.props.customPaging(y),{onClick:T})))}return r.default.cloneElement(this.props.appendDots(v),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.default.PureComponent);e.exports.Dots=p})),o.register("gught",(function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.PrevArrow=e.exports.NextArrow=void 0;var r=a(o("acw62")),i=a(o("8g1PZ")),s=o("2y81T");function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){m(n,e);var t=v(n);function n(){return h(this,n),t.apply(this,arguments)}return p(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?r.default.cloneElement(this.props.prevArrow,c(c({},n),o)):r.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(r.default.PureComponent);e.exports.PrevArrow=b;var w=function(e){m(n,e);var t=v(n);function n(){return h(this,n),t.apply(this,arguments)}return p(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,s.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?r.default.cloneElement(this.props.nextArrow,c(c({},n),o)):r.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(r.default.PureComponent);e.exports.NextArrow=w})),o.register("bEEfE",(function(n,r){var i;i=n.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(()=>_));var o=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),s="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,a=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),l="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,d=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){l(o)}function a(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){s&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){s&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),h=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||a},p=w(0,0,0,0);function m(e){return parseFloat(e)||0}function g(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+m(e["border-"+n+"-width"])}),0)}function v(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=f(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=m(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=m(r.width),l=m(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=g(r,"left","right")+o),Math.round(l+s)!==n&&(l-=g(r,"top","bottom")+s)),!function(e){return e===f(e).document.documentElement}(e)){var u=Math.round(a+o)-t,c=Math.round(l+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(c)&&(l-=c)}return w(i.left,i.top,a,l)}var y="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function b(e){return s?y(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):v(e):p}function w(e,t,n,r){return{x:e,y:t,width:n,height:r}}var S=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=b(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),E=function(e,t){var n,r,i,o,s,a,l,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),h(l,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),l);h(this,{target:e,contentRect:u})},k=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new o,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new S(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new E(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x="undefined"!=typeof WeakMap?new WeakMap:new o,T=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=d.getInstance(),r=new k(t,n,this);x.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){T.prototype[e]=function(){var t;return(t=x.get(this))[e].apply(t,arguments)}}));var _=void 0!==a.ResizeObserver?a.ResizeObserver:T})),o.register("aqP1M",(function(e,t){var n=o("8R6TE"),r=function(e){var t="",r=Object.keys(e);return r.forEach((function(i,o){var s=e[i];(function(e){return/[height|width]$/.test(e)})(i=n(i))&&"number"==typeof s&&(s+="px"),t+=!0===s?i:!1===s?"not "+i:"("+i+": "+s+")",o<r.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,i){t+=r(n),i<e.length-1&&(t+=", ")})),t):r(e)}})),o.register("8R6TE",(function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}})),o.register("bt3o5",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,r=(n=o("acw62"))&&n.__esModule?n:{default:n};var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return r.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return r.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0};e.exports.default=i})),o.register("aqoFQ",(function(e,t){var n=o("7Jc9x");e.exports=new n})),o.register("7Jc9x",(function(e,t){var n=o("gSUE9"),r=o("aLVeZ"),i=r.each,s=r.isFunction,a=r.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,r){var o=this.queries,l=r&&this.browserIsIncapable;return o[e]||(o[e]=new n(e,l)),s(t)&&(t={match:t}),a(t)||(t=[t]),i(t,(function(t){s(t)&&(t={match:t}),o[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l})),o.register("gSUE9",(function(e,t){var n=o("1QiBY"),r=o("aLVeZ").each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new n(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;r(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";r(this.handlers,(function(t){t[e]()}))}},e.exports=i})),o.register("1QiBY",(function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n})),o.register("aLVeZ",(function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}}));var s={};s=o("1b2ls");var a,l,u={};e(u,"createRoot",(()=>a),(e=>a=e)),e(u,"hydrateRoot",(()=>l),(e=>l=e));var c;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),c=o("Xw6Mv"),a=c.createRoot,l=c.hydrateRoot;var d,h=o("hfliI");d=o("6VZtt");let f=function(e){e()};const p=()=>f;var m=o("acw62");m=o("acw62");const g=(0,(m=o("acw62")).createContext)(null);function v(){return(0,m.useContext)(g)}const y=()=>{throw new Error("uSES not initialized!")};let b=y;const w=(e,t)=>e===t;function S(e=g){const t=e===g?v:()=>(0,m.useContext)(e);return function(e,n=w){const{store:r,subscription:i,getServerState:o}=t(),s=b(i.addNestedSub,r.getState,o||r.getState,e,n);return(0,m.useDebugValue)(s),s}}const E=S();var k={};k=o("dNL7g");var x={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C={};function I(e){return k.isMemo(e)?_:C[e.$$typeof]||x}C[k.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C[k.Memo]=_;var O=Object.defineProperty,N=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,R=Object.getOwnPropertyDescriptor,D=Object.getPrototypeOf,A=Object.prototype;m=o("acw62");o("cgj07");const L={notify(){},get:()=>[]};function M(e,t){let n,r=L;function i(){s.onStateChange&&s.onStateChange()}function o(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){const e=p();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}const s={addNestedSub:function(e){return o(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:o,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=L)},getListeners:()=>r};return s}m=o("acw62");const j=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?m.useLayoutEffect:m.useEffect;let F=y;m=o("acw62");var U=function({store:e,context:t,children:r,serverState:i}){const o=(0,m.useMemo)((()=>{const t=M(e);return{store:e,subscription:t,getServerState:i?()=>i:void 0}}),[e,i]),s=(0,m.useMemo)((()=>e.getState()),[e]);j((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,s]);const a=t||g;return n(m).createElement(a.Provider,{value:o},r)};m=o("acw62");function z(e=g){const t=e===g?v:()=>(0,m.useContext)(e);return function(){const{store:e}=t();return e}}const V=z();function B(e=g){const t=e===g?V:z(e);return function(){return t().dispatch}}const $=B();var H,q,W,K;
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}H=d.useSyncExternalStoreWithSelector,b=H,(e=>{F=e})(h.useSyncExternalStore),q=c.unstable_batchedUpdates,f=q,(K=W||(W={})).Pop="POP",K.Push="PUSH",K.Replace="REPLACE";const Q="popstate";function Y(e){return void 0===e&&(e={}),re((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return ee("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:te(t)}),null,e)}function X(e,t){if(!1===e||null==e)throw new Error(t)}function J(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function Z(e,t){return{usr:e.state,key:e.key,idx:t}}function ee(e,t,n,r){return void 0===n&&(n=null),G({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?ne(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function te(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function ne(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function re(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=W.Pop,l=null,u=c();function c(){return(s.state||{idx:null}).idx}function d(){a=W.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:a,location:f.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:te(e);return X(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,s.replaceState(G({},s.state,{idx:u}),""));let f={get action(){return a},get location(){return e(i,s)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Q,d),l=e,()=>{i.removeEventListener(Q,d),l=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){a=W.Push;let r=ee(f.location,e,t);n&&n(r,e),u=c()+1;let d=Z(r,u),h=f.createHref(r);try{s.pushState(d,"",h)}catch(e){i.location.assign(h)}o&&l&&l({action:a,location:f.location,delta:1})},replace:function(e,t){a=W.Replace;let r=ee(f.location,e,t);n&&n(r,e),u=c();let i=Z(r,u),d=f.createHref(r);s.replaceState(i,"",d),o&&l&&l({action:a,location:f.location,delta:0})},go:e=>s.go(e)};return f}var ie,oe;(oe=ie||(ie={})).data="data",oe.deferred="deferred",oe.redirect="redirect",oe.error="error";const se=new Set(["lazy","caseSensitive","path","id","index","children"]);function ae(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,i)=>{let o=[...n,i],s="string"==typeof e.id?e.id:o.join("-");if(X(!0!==e.index||!e.children,"Cannot specify children on an index route"),X(!r[s],'Found a route id collision on id "'+s+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=G({},e,{hasErrorBoundary:t(e),id:s});return r[s]=n,n}{let n=G({},e,{id:s,hasErrorBoundary:t(e),children:void 0});return r[s]=n,e.children&&(n.children=ae(e.children,t,o,r)),n}}))}function le(e,t,n){void 0===n&&(n="/");let r=Ee(("string"==typeof t?ne(t):t).pathname||"/",n);if(null==r)return null;let i=ue(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=be(i[e],Se(r));return o}function ue(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(r.length));let a=_e([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(X(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),ue(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:ye(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of ce(e.path))i(e,t,n);else i(e,t)})),t}function ce(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let s=ce(r.join("/")),a=[];return a.push(...s.map((e=>""===e?o:[o,e].join("/")))),i&&a.push(...s),a.map((t=>e.startsWith("/")&&""===t?"/":t))}const de=/^:\w+$/,he=3,fe=2,pe=1,me=10,ge=-2,ve=e=>"*"===e;function ye(e,t){let n=e.split("/"),r=n.length;return n.some(ve)&&(r+=ge),t&&(r+=fe),n.filter((e=>!ve(e))).reduce(((e,t)=>e+(de.test(t)?he:""===t?pe:me)),r)}function be(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let s=n[e],a=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=we({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},l);if(!u)return null;Object.assign(r,u.params);let c=s.route;o.push({params:r,pathname:_e([i,u.pathname]),pathnameBase:Ce(_e([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=_e([i,u.pathnameBase]))}return o}function we(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);J("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=a[n]||"";s=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return J(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a[n]||"",t),e}),{}),pathname:o,pathnameBase:s,pattern:e}}function Se(e){try{return decodeURI(e)}catch(t){return J(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Ee(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function ke(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function xe(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function Te(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=ne(e):(i=G({},e),X(!i.pathname||!i.pathname.includes("?"),ke("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),ke("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),ke("#","search","hash",i)));let o,s=""===e||""===i.pathname,a=s?"/":i.pathname;if(r||null==a)o=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?ne(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Ie(r),hash:Oe(i)}}(i,o),u=a&&"/"!==a&&a.endsWith("/"),c=(s||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const _e=e=>e.join("/").replace(/\/\/+/g,"/"),Ce=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ie=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Oe=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class Ne extends Error{}class Pe{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Re(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const De=["post","put","patch","delete"],Ae=new Set(De),Le=["get",...De],Me=new Set(Le),je=new Set([301,302,303,307,308]),Fe=new Set([307,308]),Ue={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ze={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ve={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,He=!$e,qe=e=>Boolean(e.hasErrorBoundary);function We(e){X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t,n=e.detectErrorBoundary||qe,r={},i=ae(e.routes,n,void 0,r),o=G({v7_normalizeFormMethod:!1},e.future),s=null,a=new Set,l=null,u=null,c=null,d=null!=e.hydrationData,h=le(i,e.history.location,e.basename),f=null;if(null==h){let t=at(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=st(i);h=n,f={[r.id]:t}}let p,m,g=!(h.some((e=>e.route.lazy))||h.some((e=>e.route.loader))&&null==e.hydrationData),v={historyAction:e.history.action,location:e.history.location,matches:h,initialized:g,navigation:Ue,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},y=W.Pop,b=!1,w=!1,S=!1,E=[],k=[],x=new Map,T=0,_=-1,C=new Map,I=new Set,O=new Map,N=new Map,P=new Map,R=!1;function D(e){v=G({},v,e),a.forEach((e=>e(v)))}function A(n,r){var o,s;let a,l=null!=v.actionData&&null!=v.navigation.formMethod&&mt(v.navigation.formMethod)&&"loading"===v.navigation.state&&!0!==(null==(o=n.state)?void 0:o._isRedirect);a=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:l?v.actionData:null;let u=r.loaderData?it(v.loaderData,r.loaderData,r.matches||[],r.errors):v.loaderData;for(let[e]of P)q(e);let c=!0===b||null!=v.navigation.formMethod&&mt(v.navigation.formMethod)&&!0!==(null==(s=n.state)?void 0:s._isRedirect);t&&(i=t,t=void 0),D(G({},r,{actionData:a,loaderData:u,historyAction:y,location:n,initialized:!0,navigation:Ue,revalidation:"idle",restoreScrollPosition:Z(n,r.matches||v.matches),preventScrollReset:c,blockers:new Map(v.blockers)})),w||y===W.Pop||(y===W.Push?e.history.push(n,n.state):y===W.Replace&&e.history.replace(n,n.state)),y=W.Pop,b=!1,w=!1,S=!1,E=[],k=[]}async function L(o,s,a){m&&m.abort(),m=null,y=o,w=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(l&&u&&c){let n=t.map((e=>bt(e,v.loaderData))),r=u(e,n)||e.key;l[r]=c()}}(v.location,v.matches),b=!0===(a&&a.preventScrollReset);let d=t||i,h=a&&a.overrideNavigation,f=le(d,s,e.basename);if(!f){let e=at(404,{pathname:s.pathname}),{matches:t,route:n}=st(d);return Y(),void A(s,{matches:t,loaderData:{},errors:{[n.id]:e}})}if(!(g=v.location,C=s,g.pathname!==C.pathname||g.search!==C.search||g.hash===C.hash||a&&a.submission&&mt(a.submission.formMethod)))return void A(s,{matches:f});var g,C;m=new AbortController;let P,R,L=et(e.history,s,m.signal,a&&a.submission);if(a&&a.pendingError)R={[ot(f).route.id]:a.pendingError};else if(a&&a.submission&&mt(a.submission.formMethod)){let e=await async function(e,t,i,o,s){U();let a,l=G({state:"submitting",location:t},i);D({navigation:l});let u=wt(o,t);if(u.route.action||u.route.lazy){if(a=await Ze("action",e,u,o,r,n,p.basename),e.signal.aborted)return{shortCircuited:!0}}else a={type:ie.error,error:at(405,{method:e.method,pathname:t.pathname,routeId:u.route.id})};if(ht(a)){let e;return e=s&&null!=s.replace?s.replace:a.location===v.location.pathname+v.location.search,await j(v,a,{submission:i,replace:e}),{shortCircuited:!0}}if(dt(a)){let e=ot(o,u.route.id);return!0!==(s&&s.replace)&&(y=W.Push),{pendingActionData:{},pendingActionError:{[e.route.id]:a.error}}}if(ct(a))throw at(400,{type:"defer-action"});return{pendingActionData:{[u.route.id]:a.data}}}(L,s,a.submission,f,{replace:a.replace});if(e.shortCircuited)return;P=e.pendingActionData,R=e.pendingActionError,h=G({state:"loading",location:s},a.submission),L=new Request(L.url,{signal:L.signal})}let{shortCircuited:M,loaderData:z,errors:V}=await async function(n,r,o,s,a,l,u,c,d){let h=s;if(!h){h=G({state:"loading",location:r,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},a)}let f=a||l?a||l:h.formMethod&&h.formAction&&h.formData&&h.formEncType?{formMethod:h.formMethod,formAction:h.formAction,formData:h.formData,formEncType:h.formEncType}:void 0,p=t||i,[g,y]=Qe(e.history,v,o,f,r,S,E,k,O,p,e.basename,c,d);if(Y((e=>!(o&&o.some((t=>t.route.id===e)))||g&&g.some((t=>t.route.id===e)))),0===g.length&&0===y.length)return A(r,G({matches:o,loaderData:{},errors:d||null},c?{actionData:c}:{})),{shortCircuited:!0};if(!w){y.forEach((e=>{let t=v.fetchers.get(e.key),n={state:"loading",data:t&&t.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(e.key,n)}));let e=c||v.actionData;D(G({navigation:h},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},y.length>0?{fetchers:new Map(v.fetchers)}:{}))}_=++T,y.forEach((e=>x.set(e.key,m)));let{results:b,loaderResults:C,fetcherResults:P}=await F(v.matches,o,g,y,n);if(n.signal.aborted)return{shortCircuited:!0};y.forEach((e=>x.delete(e.key)));let R=lt(b);if(R)return await j(v,R,{replace:u}),{shortCircuited:!0};let{loaderData:L,errors:M}=rt(v,o,g,C,d,y,P,N);N.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&N.delete(t)}))})),function(){let e=[];for(let t of I){let n=v.fetchers.get(t);X(n,"Expected fetcher: "+t),"loading"===n.state&&(I.delete(t),e.push(t))}$(e)}();let U=H(_);return G({loaderData:L,errors:M},U||y.length>0?{fetchers:new Map(v.fetchers)}:{})}(L,s,f,h,a&&a.submission,a&&a.fetcherSubmission,a&&a.replace,P,R);M||(m=null,A(s,G({matches:f},P?{actionData:P}:{},{loaderData:z,errors:V})))}function M(e){return v.fetchers.get(e)||ze}async function j(t,n,r){var i;let{submission:o,replace:s,isFetchActionRedirect:a}=void 0===r?{}:r;n.revalidate&&(S=!0);let l=ee(t.location,n.location,G({_isRedirect:!0},a?{_isFetchActionRedirect:!0}:{}));if(X(l,"Expected a location on the redirect navigation"),Be.test(n.location)&&$e&&void 0!==(null==(i=window)?void 0:i.location)){let t=e.history.createURL(n.location),r=null==Ee(t.pathname,e.basename||"/");if(window.location.origin!==t.origin||r)return void(s?window.location.replace(n.location):window.location.assign(n.location))}m=null;let u=!0===s?W.Replace:W.Push,{formMethod:c,formAction:d,formEncType:h,formData:f}=t.navigation;!o&&c&&d&&f&&h&&(o={formMethod:c,formAction:d,formEncType:h,formData:f}),Fe.has(n.status)&&o&&mt(o.formMethod)?await L(u,l,{submission:G({},o,{formAction:n.location}),preventScrollReset:b}):a?await L(u,l,{overrideNavigation:{state:"loading",location:l,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:o,preventScrollReset:b}):await L(u,l,{overrideNavigation:{state:"loading",location:l,formMethod:o?o.formMethod:void 0,formAction:o?o.formAction:void 0,formEncType:o?o.formEncType:void 0,formData:o?o.formData:void 0},preventScrollReset:b})}async function F(t,i,o,s,a){let l=await Promise.all([...o.map((e=>Ze("loader",a,e,i,r,n,p.basename))),...s.map((t=>{if(t.matches&&t.match)return Ze("loader",et(e.history,t.path,a.signal),t.match,t.matches,r,n,p.basename);return{type:ie.error,error:at(404,{pathname:t.path})}}))]),u=l.slice(0,o.length),c=l.slice(o.length);return await Promise.all([gt(t,o,u,a.signal,!1,v.loaderData),gt(t,s.map((e=>e.match)),c,a.signal,!0)]),{results:l,loaderResults:u,fetcherResults:c}}function U(){S=!0,E.push(...Y()),O.forEach(((e,t)=>{x.has(t)&&(k.push(t),B(t))}))}function z(e,t,n){let r=ot(v.matches,t);V(e),D({errors:{[r.route.id]:n},fetchers:new Map(v.fetchers)})}function V(e){x.has(e)&&B(e),O.delete(e),C.delete(e),I.delete(e),v.fetchers.delete(e)}function B(e){let t=x.get(e);X(t,"Expected fetch controller: "+e),t.abort(),x.delete(e)}function $(e){for(let t of e){let e={state:"idle",data:M(t).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(t,e)}}function H(e){let t=[];for(let[n,r]of C)if(r<e){let e=v.fetchers.get(n);X(e,"Expected fetcher: "+n),"loading"===e.state&&(B(n),C.delete(n),t.push(n))}return $(t),t.length>0}function q(e){v.blockers.delete(e),P.delete(e)}function K(e,t){let n=v.blockers.get(e)||Ve;X("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state),v.blockers.set(e,t),D({blockers:new Map(v.blockers)})}function Q(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===P.size)return;P.size>1&&J(!1,"A router only supports one blocker at a time");let i=Array.from(P.entries()),[o,s]=i[i.length-1],a=v.blockers.get(o);return a&&"proceeding"===a.state?void 0:s({currentLocation:t,nextLocation:n,historyAction:r})?o:void 0}function Y(e){let t=[];return N.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),N.delete(r))})),t}function Z(e,t){if(l&&u&&c){let n=t.map((e=>bt(e,v.loaderData))),r=u(e,n)||e.key,i=l[r];if("number"==typeof i)return i}return null}return p={get basename(){return e.basename},get state(){return v},get routes(){return i},initialize:function(){return s=e.history.listen((t=>{let{action:n,location:r,delta:i}=t;if(R)return void(R=!1);J(0===P.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let o=Q({currentLocation:v.location,nextLocation:r,historyAction:n});return o&&null!=i?(R=!0,e.history.go(-1*i),void K(o,{state:"blocked",location:r,proceed(){K(o,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.history.go(i)},reset(){q(o),D({blockers:new Map(p.state.blockers)})}})):L(n,r)})),v.initialized||L(W.Pop,v.location),p},subscribe:function(e){return a.add(e),()=>a.delete(e)},enableScrollRestoration:function(e,t,n){if(l=e,c=t,u=n||(e=>e.key),!d&&v.navigation===Ue){d=!0;let e=Z(v.location,v.matches);null!=e&&D({restoreScrollPosition:e})}return()=>{l=null,c=null,u=null}},navigate:async function t(n,r){if("number"==typeof n)return void e.history.go(n);let{path:i,submission:s,error:a}=Ke(n,o,r),l=v.location,u=ee(v.location,i,r&&r.state);u=G({},u,e.history.encodeLocation(u));let c=r&&null!=r.replace?r.replace:void 0,d=W.Push;!0===c?d=W.Replace:!1===c||null!=s&&mt(s.formMethod)&&s.formAction===v.location.pathname+v.location.search&&(d=W.Replace);let h=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,f=Q({currentLocation:l,nextLocation:u,historyAction:d});if(!f)return await L(d,u,{submission:s,pendingError:a,preventScrollReset:h,replace:r&&r.replace});K(f,{state:"blocked",location:u,proceed(){K(f,{state:"proceeding",proceed:void 0,reset:void 0,location:u}),t(n,r)},reset(){q(f),D({blockers:new Map(v.blockers)})}})},fetch:function(s,a,l,u){if(He)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");x.has(s)&&B(s);let c=le(t||i,l,e.basename);if(!c)return void z(s,a,at(404,{pathname:l}));let{path:d,submission:h}=Ke(l,o,u,!0),f=wt(c,d);b=!0===(u&&u.preventScrollReset),h&&mt(h.formMethod)?async function(o,s,a,l,u,c){if(U(),O.delete(o),!l.route.action&&!l.route.lazy){let e=at(405,{method:c.formMethod,pathname:a,routeId:s});return void z(o,s,e)}let d=v.fetchers.get(o),h=G({state:"submitting"},c,{data:d&&d.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(o,h),D({fetchers:new Map(v.fetchers)});let f=new AbortController,g=et(e.history,a,f.signal,c);x.set(o,f);let b=await Ze("action",g,l,u,r,n,p.basename);if(g.signal.aborted)return void(x.get(o)===f&&x.delete(o));if(ht(b)){x.delete(o),I.add(o);let e=G({state:"loading"},c,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(o,e),D({fetchers:new Map(v.fetchers)}),j(v,b,{submission:c,isFetchActionRedirect:!0})}if(dt(b))return void z(o,s,b.error);if(ct(b))throw at(400,{type:"defer-action"});let w=v.navigation.location||v.location,P=et(e.history,w,f.signal),R=t||i,L="idle"!==v.navigation.state?le(R,v.navigation.location,e.basename):v.matches;X(L,"Didn't find any matches after fetcher action");let M=++T;C.set(o,M);let V=G({state:"loading",data:b.data},c,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(o,V);let[B,$]=Qe(e.history,v,L,c,w,S,E,k,O,R,e.basename,{[l.route.id]:b.data},void 0);$.filter((e=>e.key!==o)).forEach((e=>{let t=e.key,n=v.fetchers.get(t),r={state:"loading",data:n&&n.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(t,r),x.set(t,f)})),D({fetchers:new Map(v.fetchers)});let{results:q,loaderResults:W,fetcherResults:K}=await F(v.matches,L,B,$,P);if(f.signal.aborted)return;C.delete(o),x.delete(o),$.forEach((e=>x.delete(e.key)));let Q=lt(q);if(Q)return j(v,Q);let{loaderData:Y,errors:J}=rt(v,v.matches,B,W,void 0,$,K,N),Z={state:"idle",data:b.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(o,Z);let ee=H(M);"loading"===v.navigation.state&&M>_?(X(y,"Expected pending action"),m&&m.abort(),A(v.navigation.location,{matches:L,loaderData:Y,errors:J,fetchers:new Map(v.fetchers)})):(D(G({errors:J,loaderData:it(v.loaderData,Y,L,J)},ee?{fetchers:new Map(v.fetchers)}:{})),S=!1)}(s,a,d,f,c,h):(O.set(s,{routeId:a,path:d}),async function(t,i,o,s,a,l){let u=v.fetchers.get(t),c=G({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},l,{data:u&&u.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(t,c),D({fetchers:new Map(v.fetchers)});let d=new AbortController,h=et(e.history,o,d.signal);x.set(t,d);let f=await Ze("loader",h,s,a,r,n,p.basename);ct(f)&&(f=await vt(f,h.signal,!0)||f);x.get(t)===d&&x.delete(t);if(h.signal.aborted)return;if(ht(f))return void await j(v,f);if(dt(f)){let e=ot(v.matches,i);return v.fetchers.delete(t),void D({fetchers:new Map(v.fetchers),errors:{[e.route.id]:f.error}})}X(!ct(f),"Unhandled fetcher deferred data");let m={state:"idle",data:f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(t,m),D({fetchers:new Map(v.fetchers)})}(s,a,d,f,c,h))},revalidate:function(){U(),D({revalidation:"loading"}),"submitting"!==v.navigation.state&&("idle"!==v.navigation.state?L(y||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation}):L(v.historyAction,v.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:M,deleteFetcher:V,dispose:function(){s&&s(),a.clear(),m&&m.abort(),v.fetchers.forEach(((e,t)=>V(t))),v.blockers.forEach(((e,t)=>q(t)))},getBlocker:function(e,t){let n=v.blockers.get(e)||Ve;return P.get(e)!==t&&P.set(e,t),n},deleteBlocker:q,_internalFetchControllers:x,_internalActiveDeferreds:N,_internalSetRoutes:function(e){t=e}},p}Symbol("deferred");function Ke(e,t,n,r){void 0===r&&(r=!1);let i,o="string"==typeof e?e:te(e);if(!n||!function(e){return null!=e&&"formData"in e}(n))return{path:o};if(n.formMethod&&!pt(n.formMethod))return{path:o,error:at(405,{method:n.formMethod})};if(n.formData){let e=n.formMethod||"get";if(i={formMethod:t.v7_normalizeFormMethod?e.toUpperCase():e.toLowerCase(),formAction:ut(o),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},mt(i.formMethod))return{path:o,submission:i}}let s=ne(o),a=tt(n.formData);return r&&s.search&&yt(s.search)&&a.append("index",""),s.search="?"+a,{path:te(s),submission:i}}function Ge(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function Qe(e,t,n,r,i,o,s,a,l,u,c,d,h){let f=h?Object.values(h)[0]:d?Object.values(d)[0]:void 0,p=e.createURL(t.location),m=e.createURL(i),g=o||p.toString()===m.toString()||p.search!==m.search,v=h?Object.keys(h)[0]:void 0,y=Ge(n,v).filter(((e,n)=>{if(e.route.lazy)return!0;if(null==e.route.loader)return!1;if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||s.some((t=>t===e.route.id)))return!0;let i=t.matches[n],o=e;return Xe(e,G({currentUrl:p,currentParams:i.params,nextUrl:m,nextParams:o.params},r,{actionResult:f,defaultShouldRevalidate:g||Ye(i,o)}))})),b=[];return l.forEach(((e,i)=>{if(!n.some((t=>t.route.id===e.routeId)))return;let o=le(u,e.path,c);if(!o)return void b.push(G({key:i},e,{matches:null,match:null}));let s=wt(o,e.path);(a.includes(i)||Xe(s,G({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:f,defaultShouldRevalidate:g})))&&b.push(G({key:i,matches:o,match:s},e))})),[y,b]}function Ye(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Xe(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}async function Je(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];X(i,"No route found in manifest");let o={};for(let e in r){let t=void 0!==i[e]&&"hasErrorBoundary"!==e;J(!t,'Route "'+i.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||se.has(e)||(o[e]=r[e])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(G({},i)),lazy:void 0})}async function Ze(e,t,n,r,i,o,s,a,l,u){let c,d,h;void 0===s&&(s="/"),void 0===a&&(a=!1),void 0===l&&(l=!1);let f=e=>{let r,i=new Promise(((e,t)=>r=t));return h=()=>r(),t.signal.addEventListener("abort",h),Promise.race([e({request:t,params:n.params,context:u}),i])};try{let r=n.route[e];if(n.route.lazy)if(r){d=(await Promise.all([f(r),Je(n.route,o,i)]))[0]}else{if(await Je(n.route,o,i),r=n.route[e],!r){if("action"===e)throw at(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:ie.data,data:void 0}}d=await f(r)}else X(r,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),d=await f(r);X(void 0!==d,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){c=ie.error,d=e}finally{h&&t.signal.removeEventListener("abort",h)}if(ft(d)){let e,i=d.status;if(je.has(i)){let e=d.headers.get("Location");if(X(e,"Redirects returned/thrown from loaders/actions must have a Location header"),Be.test(e)){if(!a){let n=new URL(t.url),r=e.startsWith("//")?new URL(n.protocol+e):new URL(e),i=null!=Ee(r.pathname,s);r.origin===n.origin&&i&&(e=r.pathname+r.search+r.hash)}}else{let i=Te(e,xe(r.slice(0,r.indexOf(n)+1)).map((e=>e.pathnameBase)),new URL(t.url).pathname);if(X(te(i),"Unable to resolve redirect location: "+e),s){let e=i.pathname;i.pathname="/"===e?s:_e([s,e])}e=te(i)}if(a)throw d.headers.set("Location",e),d;return{type:ie.redirect,status:i,location:e,revalidate:null!==d.headers.get("X-Remix-Revalidate")}}if(l)throw{type:c||ie.data,response:d};let o=d.headers.get("Content-Type");return e=o&&/\bapplication\/json\b/.test(o)?await d.json():await d.text(),c===ie.error?{type:c,error:new Pe(i,d.statusText,e),headers:d.headers}:{type:ie.data,data:e,statusCode:d.status,headers:d.headers}}return c===ie.error?{type:c,error:d}:function(e){let t=e;return t&&"object"==typeof t&&"object"==typeof t.data&&"function"==typeof t.subscribe&&"function"==typeof t.cancel&&"function"==typeof t.resolveData}(d)?{type:ie.deferred,deferredData:d,statusCode:null==(p=d.init)?void 0:p.status,headers:(null==(m=d.init)?void 0:m.headers)&&new Headers(d.init.headers)}:{type:ie.data,data:d};var p,m}function et(e,t,n,r){let i=e.createURL(ut(t)).toString(),o={signal:n};if(r&&mt(r.formMethod)){let{formMethod:e,formEncType:t,formData:n}=r;o.method=e.toUpperCase(),o.body="application/x-www-form-urlencoded"===t?tt(n):n}return new Request(i,o)}function tt(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function nt(e,t,n,r,i){let o,s={},a=null,l=!1,u={};return n.forEach(((n,c)=>{let d=t[c].route.id;if(X(!ht(n),"Cannot handle redirect results in processLoaderData"),dt(n)){let t=ot(e,d),i=n.error;r&&(i=Object.values(r)[0],r=void 0),a=a||{},null==a[t.route.id]&&(a[t.route.id]=i),s[d]=void 0,l||(l=!0,o=Re(n.error)?n.error.status:500),n.headers&&(u[d]=n.headers)}else ct(n)?(i.set(d,n.deferredData),s[d]=n.deferredData.data):s[d]=n.data,null==n.statusCode||200===n.statusCode||l||(o=n.statusCode),n.headers&&(u[d]=n.headers)})),r&&(a=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:a,statusCode:o||200,loaderHeaders:u}}function rt(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=nt(t,n,r,i,a);for(let t=0;t<o.length;t++){let{key:n,match:r}=o[t];X(void 0!==s&&void 0!==s[t],"Did not find corresponding fetcher result");let i=s[t];if(dt(i)){let t=ot(e.matches,null==r?void 0:r.route.id);u&&u[t.route.id]||(u=G({},u,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(ht(i))X(!1,"Unhandled fetcher revalidation redirect");else if(ct(i))X(!1,"Unhandled fetcher deferred data");else{let t={state:"idle",data:i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(n,t)}}return{loaderData:l,errors:u}}function it(e,t,n,r){let i=G({},t);for(let o of n){let n=o.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&o.route.loader&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function ot(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function st(e){let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function at(e,t){let{pathname:n,routeId:r,method:i,type:o}=void 0===t?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return 400===e?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===o&&(a="defer() is not supported in actions")):403===e?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):404===e?(s="Not Found",a='No route matches URL "'+n+'"'):405===e&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Pe(e||500,s,new Error(a),!0)}function lt(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ht(n))return n}}function ut(e){return te(G({},"string"==typeof e?ne(e):e,{hash:""}))}function ct(e){return e.type===ie.deferred}function dt(e){return e.type===ie.error}function ht(e){return(e&&e.type)===ie.redirect}function ft(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function pt(e){return Me.has(e.toLowerCase())}function mt(e){return Ae.has(e.toLowerCase())}async function gt(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let u=e.find((e=>e.route.id===l.route.id)),c=null!=u&&!Ye(u,l)&&void 0!==(o&&o[l.route.id]);ct(a)&&(i||c)&&await vt(a,r,i).then((e=>{e&&(n[s]=e||n[s])}))}}async function vt(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ie.data,data:e.deferredData.unwrappedData}}catch(e){return{type:ie.error,error:e}}return{type:ie.data,data:e.deferredData.data}}}function yt(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function bt(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function wt(e,t){let n="string"==typeof t?ne(t).search:t.search;if(e[e.length-1].route.index&&yt(n||""))return e[e.length-1];let r=xe(e);return r[r.length-1]}m=o("acw62");const St="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:Et,useEffect:kt,useLayoutEffect:xt,useDebugValue:Tt}=m;function _t(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!St(n,e)}catch(e){return!0}}const Ct=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},o]=Et({inst:{value:r,getSnapshot:t}});return xt((()=>{i.value=r,i.getSnapshot=t,_t(i)&&o({inst:i})}),[e,r,t]),kt((()=>{_t(i)&&o({inst:i});return e((()=>{_t(i)&&o({inst:i})}))}),[e]),Tt(r),r},It="useSyncExternalStore"in m?m.useSyncExternalStore:Ct,Ot=m.createContext(null),Nt=m.createContext(null),Pt=m.createContext(null),Rt=m.createContext(null),Dt=m.createContext({outlet:null,matches:[]}),At=m.createContext(null);function Lt(){return Lt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lt.apply(this,arguments)}function Mt(e,t){let{relative:n}=void 0===t?{}:t;!jt()&&X(!1);let{basename:r,navigator:i}=m.useContext(Pt),{hash:o,pathname:s,search:a}=Vt(e,{relative:n}),l=s;return"/"!==r&&(l="/"===s?r:_e([r,s])),i.createHref({pathname:l,search:a,hash:o})}function jt(){return null!=m.useContext(Rt)}function Ft(){return!jt()&&X(!1),m.useContext(Rt).location}function Ut(){!jt()&&X(!1);let{basename:e,navigator:t}=m.useContext(Pt),{matches:n}=m.useContext(Dt),{pathname:r}=Ft(),i=JSON.stringify(xe(n).map((e=>e.pathnameBase))),o=m.useRef(!1);return m.useEffect((()=>{o.current=!0})),m.useCallback((function(n,s){if(void 0===s&&(s={}),!o.current)return;if("number"==typeof n)return void t.go(n);let a=Te(n,JSON.parse(i),r,"path"===s.relative);"/"!==e&&(a.pathname="/"===a.pathname?e:_e([e,a.pathname])),(s.replace?t.replace:t.push)(a,s.state,s)}),[e,t,i,r])}const zt=m.createContext(null);function Vt(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=m.useContext(Dt),{pathname:i}=Ft(),o=JSON.stringify(xe(r).map((e=>e.pathnameBase)));return m.useMemo((()=>Te(e,JSON.parse(o),i,"path"===n)),[e,o,i,n])}function Bt(){let e=function(){var e;let t=m.useContext(At),n=Yt(Gt.UseRouteError),r=Xt(Gt.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=Re(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}class $t extends m.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?m.createElement(Dt.Provider,{value:this.props.routeContext},m.createElement(At.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ht(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(Ot);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Dt.Provider,{value:t},r)}function qt(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,i=null==n?void 0:n.errors;if(null!=i){let e=r.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));!(e>=0)&&X(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,o,s)=>{let a=o.route.id?null==i?void 0:i[o.route.id]:null,l=null;n&&(l=o.route.ErrorBoundary?m.createElement(o.route.ErrorBoundary,null):o.route.errorElement?o.route.errorElement:m.createElement(Bt,null));let u=t.concat(r.slice(0,s+1)),c=()=>{let t=e;return a?t=l:o.route.Component?t=m.createElement(o.route.Component,null):o.route.element&&(t=o.route.element),m.createElement(Ht,{match:o,routeContext:{outlet:e,matches:u},children:t})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===s)?m.createElement($t,{location:n.location,component:l,error:a,children:c(),routeContext:{outlet:null,matches:u}}):c()}),null)}var Wt,Kt,Gt,Qt;function Yt(e){let t=m.useContext(Nt);return!t&&X(!1),t}function Xt(e){let t=function(e){let t=m.useContext(Dt);return!t&&X(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&X(!1),n.route.id}(Kt=Wt||(Wt={})).UseBlocker="useBlocker",Kt.UseRevalidator="useRevalidator",(Qt=Gt||(Gt={})).UseBlocker="useBlocker",Qt.UseLoaderData="useLoaderData",Qt.UseActionData="useActionData",Qt.UseRouteError="useRouteError",Qt.UseNavigation="useNavigation",Qt.UseRouteLoaderData="useRouteLoaderData",Qt.UseMatches="useMatches",Qt.UseRevalidator="useRevalidator";function Jt(e){return function(e){let t=m.useContext(Dt).outlet;return t?m.createElement(zt.Provider,{value:e},t):t}(e.context)}function Zt(e){X(!1)}function en(e){let{basename:t="/",children:n=null,location:r,navigationType:i=W.Pop,navigator:o,static:s=!1}=e;jt()&&X(!1);let a=t.replace(/^\/*/,"/"),l=m.useMemo((()=>({basename:a,navigator:o,static:s})),[a,o,s]);"string"==typeof r&&(r=ne(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,p=m.useMemo((()=>{let e=Ee(u,a);return null==e?null:{location:{pathname:e,search:c,hash:d,state:h,key:f},navigationType:i}}),[a,u,c,d,h,f,i]);return null==p?null:m.createElement(Pt.Provider,{value:l},m.createElement(Rt.Provider,{children:n,value:p}))}function tn(e){let{children:t,location:n}=e,r=m.useContext(Ot);return function(e,t){!jt()&&X(!1);let n,{navigator:r}=m.useContext(Pt),i=m.useContext(Nt),{matches:o}=m.useContext(Dt),s=o[o.length-1],a=s?s.params:{},l=(s&&s.pathname,s?s.pathnameBase:"/"),u=(s&&s.route,Ft());if(t){var c;let e="string"==typeof t?ne(t):t;"/"!==l&&!(null==(c=e.pathname)?void 0:c.startsWith(l))&&X(!1),n=e}else n=u;let d=n.pathname||"/",h=le(e,{pathname:"/"===l?d:d.slice(l.length)||"/"}),f=qt(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:_e([l,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:_e([l,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,i||void 0);return t&&f?m.createElement(Rt.Provider,{value:{location:Lt({pathname:"/",search:"",hash:"",state:null,key:"default"},n),navigationType:W.Pop}},f):f}(r&&!t?r.router.routes:sn(t),n)}var nn,rn;(rn=nn||(nn={}))[rn.pending=0]="pending",rn[rn.success=1]="success",rn[rn.error=2]="error";new Promise((()=>{}));class on extends m.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=nn.pending;if(n instanceof Promise)if(this.state.error){nn.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?nn.error:void 0!==r._data?nn.success:nn.pending):(nn.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else nn.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===nn.error&&r._error instanceof Ne)throw $7939e29d663dd3ed$var$neverSettledPromise;if(i===nn.error&&!t)throw r._error;if(i===nn.error)return m.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:t});if(i===nn.success)return m.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:e});throw r}}function sn(e,t){void 0===t&&(t=[]);let n=[];return m.Children.forEach(e,((e,r)=>{if(!m.isValidElement(e))return;let i=[...t,r];if(e.type===m.Fragment)return void n.push.apply(n,sn(e.props.children,i));e.type!==Zt&&X(!1),e.props.index&&e.props.children&&X(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=sn(e.props.children,i)),n.push(o)})),n}function an(e){return Boolean(e.ErrorBoundary)||Boolean(e.errorElement)}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
m=o("acw62");function ln(){return ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ln.apply(this,arguments)}function un(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const cn=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function dn(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ln({},t,{errors:hn(t.errors)})),t}function hn(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new Pe(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){let t=new Error(r.message);t.stack="",n[e]=t}else n[e]=r;return n}const fn="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,pn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mn=m.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=un(e,cn),{basename:h}=m.useContext(Pt),f=!1;if("string"==typeof u&&pn.test(u)&&(n=u,fn)){let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Ee(t.pathname,h);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:f=!0}let p=Mt(u,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=void 0===t?{}:t,a=Ut(),l=Ft(),u=Vt(e,{relative:s});return m.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:te(l)===te(u);a(e,{replace:n,state:i,preventScrollReset:o,relative:s})}}),[l,a,u,r,i,n,e,o,s])}(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});return m.createElement("a",ln({},d,{href:n||p,onClick:f||o?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}));var gn,vn;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(gn||(gn={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(vn||(vn={}));m=o("acw62");const yn=[{name:"Home",path:"/"},{name:"Favorites",path:"/favorites"},{name:"Crime",path:"/crime"},{name:"Fantasy",path:"/fantasy"},{name:"Comedy",path:"/comedy"}],bn="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png",wn=(0,s.jsx)("svg",{id:"rank-1",width:"100%",height:"100%",viewBox:"-20 0 70 154",className:"h-full pointer-events-none w-full svg-icon-rank-1 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"})}),Sn=(0,s.jsx)("svg",{id:"rank-2",width:"100%",height:"100%",viewBox:"0 0 80 154",className:"h-full pointer-events-none w-full svg-icon-rank-2 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"})}),En=(0,s.jsx)("svg",{id:"rank-3",width:"100%",height:"100%",viewBox:"0 0 80 154",className:"h-full pointer-events-none w-full svg-icon-rank-3 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"})}),kn=(0,s.jsx)("svg",{id:"rank-4",width:"100%",height:"100%",viewBox:"0 0 81 154",className:"h-full pointer-events-none w-full svg-icon-rank-4 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"})}),xn=(0,s.jsx)("svg",{id:"rank-5",width:"100%",height:"100%",viewBox:"0 0 81 154",className:"h-full pointer-events-none w-full svg-icon-rank-5 top-10-rank",children:(0,s.jsx)("path",{stroke:"#595959",strokeLinejoin:"square",strokeWidth:"4",d:"M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"})}),Tn={dots:!1,infinite:!1,speed:500,slidesToShow:2,slidesToScroll:3},_n={speed:500,slidesToShow:2,slidesToScroll:3,variableWidth:!0},Cn={dots:!0,infinite:!1,speed:500,slidesToShow:1.2,slidesToScroll:2};o("acw62");var In=function(){return(0,s.jsx)("div",{className:"flex pt-11 md:mt-12 w-full flex-col items-center ",children:(0,s.jsx)("img",{className:"w-3/6 hidden md:block ","data-testid":"image",src:"https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"})})};o("acw62");var On,Nn={};Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.default=void 0;var Pn=((On=o("99b6d"))&&On.__esModule?On:{default:On}).default;Nn.default=Pn;const Rn="bg-titleWhite font-netflixSans font-medium text-3xl";m=o("acw62"),m=o("acw62"),m=o("acw62");function Dn(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Dn),r}m=o("acw62");function An(...e){return e.filter(Boolean).join(" ")}var Ln,Mn,jn=((Mn=jn||{})[Mn.None=0]="None",Mn[Mn.RenderStrategy=1]="RenderStrategy",Mn[Mn.Static=2]="Static",Mn),Fn=((Ln=Fn||{})[Ln.Unmount=0]="Unmount",Ln[Ln.Hidden=1]="Hidden",Ln);function Un({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:o=!0,name:s}){let a=Vn(t,e);if(o)return zn(a,n,r,s);let l=null!=i?i:0;if(2&l){let{static:e=!1,...t}=a;if(e)return zn(t,n,r,s)}if(1&l){let{unmount:e=!0,...t}=a;return Dn(e?0:1,{0:()=>null,1:()=>zn({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return zn(a,n,r,s)}function zn(e,t={},n,r){var i;let{as:o=n,children:s,refName:a="ref",...l}=Hn(e,["unmount","static"]),u=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof s?s(t):s;"className"in l&&l.className&&"function"==typeof l.className&&(l.className=l.className(t));let d={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(o===m.Fragment&&Object.keys($n(l)).length>0){if(!(0,m.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=An(null==(i=c.props)?void 0:i.className,l.className),t=e?{className:e}:{};return(0,m.cloneElement)(c,Object.assign({},Vn(c.props,$n(Hn(l,["ref"]))),d,u,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,u.ref),t))}return(0,m.createElement)(o,Object.assign({},Hn(l,["ref"]),o!==m.Fragment&&u,o!==m.Fragment&&d),c)}function Vn(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let i=n[e];for(let e of i){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function Bn(e){var t;return Object.assign((0,m.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function $n(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function Hn(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}m=o("acw62"),m=o("acw62"),m=o("acw62"),m=o("acw62");var qn=Object.defineProperty,Wn=(e,t,n)=>(((e,t,n)=>{t in e?qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let Kn=new class{constructor(){Wn(this,"current",this.detect()),Wn(this,"handoffState","pending"),Wn(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},Gn=(e,t)=>{Kn.isServer?(0,m.useEffect)(e,t):(0,m.useLayoutEffect)(e,t)};function Qn(e){let t=(0,m.useRef)(e);return Gn((()=>{t.current=e}),[e]),t}let Yn=function(e){let t=Qn(e);return n(m).useCallback(((...e)=>t.current(...e)),[t])},Xn=Symbol();function Jn(e,t=!0){return Object.assign(e,{[Xn]:t})}function Zn(...e){let t=(0,m.useRef)(e);(0,m.useEffect)((()=>{t.current=e}),[e]);let n=Yn((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[Xn])))?void 0:n}var er,tr=((er=tr||{}).Space=" ",er.Enter="Enter",er.Escape="Escape",er.Backspace="Backspace",er.Delete="Delete",er.ArrowLeft="ArrowLeft",er.ArrowUp="ArrowUp",er.ArrowRight="ArrowRight",er.ArrowDown="ArrowDown",er.Home="Home",er.End="End",er.PageUp="PageUp",er.PageDown="PageDown",er.Tab="Tab",er);function nr(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var rr;m=o("acw62");function ir(){let[e,t]=(0,m.useState)(Kn.isHandoffComplete);return e&&!1===Kn.isHandoffComplete&&t(!1),(0,m.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,m.useEffect)((()=>Kn.handoff()),[]),e}let or=null!=(rr=n(m=o("acw62")).useId)?rr:function(){let e=ir(),[t,r]=n(m).useState(e?()=>Kn.nextId():null);return Gn((()=>{null===t&&r(Kn.nextId())}),[t]),null!=t?""+t:void 0};m=o("acw62");var sr=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(sr||{});let ar=Bn((function(e,t){let{features:n=1,...r}=e;return Un({ourProps:{ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function lr(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function ur(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add((()=>e.removeEventListener(n,r,i)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return lr((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=ur();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function cr(e){return Kn.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let dr=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var hr,fr,pr=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(pr||{}),mr=((fr=mr||{})[fr.Error=0]="Error",fr[fr.Overflow=1]="Overflow",fr[fr.Success=2]="Success",fr[fr.Underflow=3]="Underflow",fr),gr=((hr=gr||{})[hr.Previous=-1]="Previous",hr[hr.Next=1]="Next",hr);function vr(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(dr)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var yr=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(yr||{});function br(e,t=0){var n;return e!==(null==(n=cr(e))?void 0:n.body)&&Dn(t,{0:()=>e.matches(dr),1(){let t=e;for(;null!==t;){if(t.matches(dr))return!0;t=t.parentElement}return!1}})}function wr(e){null==e||e.focus({preventScroll:!0})}let Sr=["textarea","input"].join(",");function Er(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),i=t(n);if(null===r||null===i)return 0;let o=r.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:vr(e);i.length>0&&s.length>1&&(s=s.filter((e=>!i.includes(e)))),r=null!=r?r:o.activeElement;let a,l=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,h=s.length;do{if(d>=h||d+h<=0)return 0;let e=u+d;if(16&t)e=(e+h)%h;else{if(e<0)return 3;if(e>=h)return 1}a=s[e],null==a||a.focus(c),d+=l}while(a!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,Sr))&&n}(a)&&a.select(),a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),2}m=o("acw62"),m=o("acw62");function kr(e,t,n){let r=Qn(t);(0,m.useEffect)((()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var xr=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(xr||{});function Tr(){let e=(0,m.useRef)(0);return kr("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}m=o("acw62");function _r(){let e=(0,m.useRef)(!1);return Gn((()=>(e.current=!0,()=>{e.current=!1})),[]),e}m=o("acw62");function Cr(...e){return(0,m.useMemo)((()=>cr(...e)),[...e])}m=o("acw62");function Ir(e,t,n,r){let i=Qn(n);(0,m.useEffect)((()=>{function n(e){i.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}),[e,t,r])}m=o("acw62");function Or(e,t){let n=(0,m.useRef)([]),r=Yn(e);(0,m.useEffect)((()=>{let e=[...n.current];for(let[i,o]of t.entries())if(n.current[i]!==o){let i=r(t,e);return n.current=t,i}}),[r,...t])}m=o("acw62");function Nr(){let[e]=(0,m.useState)(ur);return(0,m.useEffect)((()=>()=>e.dispose()),[e]),e}function Pr(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var Rr=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Rr||{});let Dr=Bn((function(e,t){let r=(0,m.useRef)(null),i=Zn(r,t),{initialFocus:o,containers:s,features:a=30,...l}=e;ir()||(a=1);let u=Cr(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,m.useRef)(Lr.slice());return Or((([e],[n])=>{!0===n&&!1===e&&lr((()=>{t.current.splice(0)})),!1===n&&!0===e&&(t.current=Lr.slice())}),[e,Lr,t]),Yn((()=>{var e;return null!=(e=t.current.find((e=>null!=e&&e.isConnected)))?e:null}))}(t);Or((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&wr(n())}),[t]);let r=(0,m.useRef)(!1);(0,m.useEffect)((()=>(r.current=!1,()=>{r.current=!0,lr((()=>{r.current&&wr(n())}))})),[])}({ownerDocument:u},Boolean(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let i=(0,m.useRef)(null),o=_r();return Or((()=>{if(!r)return;let s=t.current;s&&lr((()=>{if(!o.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(i.current=t)}else if(s.contains(t))return void(i.current=t);null!=n&&n.current?wr(n.current):Er(s,pr.First)===mr.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=null==e?void 0:e.activeElement}))}),[r]),i}({ownerDocument:u,container:r,initialFocus:o},Boolean(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},i){let o=_r();Ir(null==e?void 0:e.defaultView,"focus",(e=>{if(!i||!o.current)return;let s=Pr(n);t.current instanceof HTMLElement&&s.add(t.current);let a=r.current;if(!a)return;let l=e.target;l&&l instanceof HTMLElement?Mr(s,l)?(r.current=l,wr(l)):(e.preventDefault(),e.stopPropagation(),wr(a)):wr(r.current)}),!0)}({ownerDocument:u,container:r,containers:s,previousActiveElement:c},Boolean(8&a));let d=Tr(),h=Yn((e=>{let t=r.current;t&&Dn(d.current,{[xr.Forwards]:()=>{Er(t,pr.First,{skipElements:[e.relatedTarget]})},[xr.Backwards]:()=>{Er(t,pr.Last,{skipElements:[e.relatedTarget]})}})})),f=Nr(),p=(0,m.useRef)(!1),g={ref:i,onKeyDown(e){"Tab"==e.key&&(p.current=!0,f.requestAnimationFrame((()=>{p.current=!1})))},onBlur(e){let t=Pr(s);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(Mr(t,n)||(p.current?Er(r.current,Dn(d.current,{[xr.Forwards]:()=>pr.Next,[xr.Backwards]:()=>pr.Previous})|pr.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&wr(e.target)))}};return n(m).createElement(n(m).Fragment,null,Boolean(4&a)&&n(m).createElement(ar,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:sr.Focusable}),Un({ourProps:g,theirProps:l,defaultTag:"div",name:"FocusTrap"}),Boolean(4&a)&&n(m).createElement(ar,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:sr.Focusable}))})),Ar=Object.assign(Dr,{features:Rr}),Lr=[];if("undefined"!=typeof window&&"undefined"!=typeof document){let e=function(e){e.target instanceof HTMLElement&&e.target!==document.body&&Lr[0]!==e.target&&(Lr.unshift(e.target),Lr=Lr.filter((e=>null!=e&&e.isConnected)),Lr.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function Mr(e,t){for(let n of e)if(n.contains(t))return!0;return!1}m=o("acw62");let jr=(0,(m=o("acw62")).createContext)(!1);function Fr(e){return n(m).createElement(jr.Provider,{value:e.force},e.children)}function Ur(e){let t=(0,m.useContext)(jr),n=(0,m.useContext)(Br),r=Cr(e),[i,o]=(0,m.useState)((()=>{if(!t&&null!==n||Kn.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)}));return(0,m.useEffect)((()=>{null!==i&&(null!=r&&r.body.contains(i)||null==r||r.body.appendChild(i))}),[i,r]),(0,m.useEffect)((()=>{t||null!==n&&o(n.current)}),[n,o,t]),i}let zr=m.Fragment;let Vr=m.Fragment,Br=(0,m.createContext)(null);let $r=Bn((function(e,t){let n=e,r=(0,m.useRef)(null),i=Zn(Jn((e=>{r.current=e})),t),o=Cr(r),s=Ur(r),[a]=(0,m.useState)((()=>{var e;return Kn.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null})),l=ir(),u=(0,m.useRef)(!1);return Gn((()=>{if(u.current=!1,s&&a)return s.contains(a)||(a.setAttribute("data-headlessui-portal",""),s.appendChild(a)),()=>{u.current=!0,lr((()=>{var e;u.current&&(!s||!a||(a instanceof Node&&s.contains(a)&&s.removeChild(a),s.childNodes.length<=0&&(null==(e=s.parentElement)||e.removeChild(s))))}))}}),[s,a]),l&&s&&a?(0,c.createPortal)(Un({ourProps:{ref:i},theirProps:n,defaultTag:zr,name:"Portal"}),a):null})),Hr=Bn((function(e,t){let{target:r,...i}=e,o={ref:Zn(t)};return n(m).createElement(Br.Provider,{value:r},Un({ourProps:o,theirProps:i,defaultTag:Vr,name:"Popover.Group"}))})),qr=Object.assign($r,{Group:Hr});let Wr=(0,(m=o("acw62")).createContext)(null);function Kr(){let e=(0,m.useContext)(Wr);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Kr),e}return e}function Gr(){let[e,t]=(0,m.useState)([]);return[e.length>0?e.join(" "):void 0,(0,m.useMemo)((()=>function(e){let r=Yn((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),i=(0,m.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n(m).createElement(Wr.Provider,{value:i},e.children)}),[t])]}let Qr=Bn((function(e,t){let n=or(),{id:r=`headlessui-description-${n}`,...i}=e,o=Kr(),s=Zn(t);return Gn((()=>o.register(r)),[r,o.register]),Un({ourProps:{ref:s,...o.props,id:r},theirProps:i,slot:o.slot||{},defaultTag:"p",name:o.name||"Description"})})),Yr=Object.assign(Qr,{});let Xr=(0,(m=o("acw62")).createContext)(null);Xr.displayName="OpenClosedContext";var Jr=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Jr||{});function Zr(){return(0,m.useContext)(Xr)}function ei({value:e,children:t}){return n(m).createElement(Xr.Provider,{value:e},t)}let ti=(0,(m=o("acw62")).createContext)((()=>{}));ti.displayName="StackContext";var ni=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ni||{});function ri({children:e,onUpdate:t,type:r,element:i,enabled:o}){let s=(0,m.useContext)(ti),a=Yn(((...e)=>{null==t||t(...e),s(...e)}));return Gn((()=>{let e=void 0===o||!0===o;return e&&a(0,r,i),()=>{e&&a(1,r,i)}}),[a,r,i,o]),n(m).createElement(ti.Provider,{value:a},e)}m=o("acw62"),m=o("acw62");function ii(e,t,n){let r=Qn(t);(0,m.useEffect)((()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function oi(e,t,n=!0){let r=(0,m.useRef)(!1);function i(n,i){if(!r.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),s=i(n);if(null!==s&&s.getRootNode().contains(s)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(s)||n.composed&&n.composedPath().includes(t))return}return!br(s,yr.Loose)&&-1!==s.tabIndex&&n.preventDefault(),t(n,s)}}(0,m.useEffect)((()=>{requestAnimationFrame((()=>{r.current=n}))}),[n]);let o=(0,m.useRef)(null);ii("mousedown",(e=>{var t,n;r.current&&(o.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),ii("click",(e=>{o.current&&(i(e,(()=>o.current)),o.current=null)}),!0),ii("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}m=o("acw62"),m=o("acw62");const si="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:ai,useEffect:li,useLayoutEffect:ui,useDebugValue:ci}=m;function di(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!si(n,e)}catch{return!0}}const hi=!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},o]=ai({inst:{value:r,getSnapshot:t}});return ui((()=>{i.value=r,i.getSnapshot=t,di(i)&&o({inst:i})}),[e,r,t]),li((()=>(di(i)&&o({inst:i}),e((()=>{di(i)&&o({inst:i})})))),[e]),ci(r),r},fi="useSyncExternalStore"in m?m.useSyncExternalStore:hi;function pi(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,i=r.clientWidth-r.offsetWidth,o=e-i;n.style(r,"paddingRight",`${o}px`)}}}function mi(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function gi(){if(!mi())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function i(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),s=t.querySelector(r);s&&!i(s)&&(o=s)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)}))}}}function vi(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let yi=function(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...i){let o=t[e].call(n,...i);o&&(n=o,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:ur(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:vi(n)},i=[gi(),pi(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach((({before:e})=>null==e?void 0:e(r))),i.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function bi(e,t,n){let r=fi((s=yi).subscribe,s.getSnapshot,s.getSnapshot),i=e?r.get(e):void 0,o=!!i&&i.count>0;var s;return Gn((()=>{if(e&&t)return yi.dispatch("PUSH",e,n),()=>yi.dispatch("POP",e,n)}),[t,e]),o}yi.subscribe((()=>{let e=yi.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&yi.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&yi.dispatch("TEARDOWN",n)}}));let wi=new Map,Si=new Map;function Ei(e,t=!0){Gn((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let i=null!=(n=Si.get(r))?n:0;return Si.set(r,i+1),0!==i||(wi.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=Si.get(r))?e:1;if(1===t?Si.delete(r):Si.set(r,t-1),1!==t)return;let n=wi.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,wi.delete(r))}}),[e,t])}var ki=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ki||{}),xi=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(xi||{});let Ti={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},_i=(0,m.createContext)(null);function Ci(e){let t=(0,m.useContext)(_i);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ci),t}return t}function Ii(e,t){return Dn(t.type,Ti,e,t)}_i.displayName="DialogContext";let Oi=jn.RenderStrategy|jn.Static;let Ni=Bn((function(e,t){let r=or(),{id:i=`headlessui-dialog-${r}`,open:o,onClose:s,initialFocus:a,__demoMode:l=!1,...u}=e,[c,d]=(0,m.useState)(0),h=Zr();void 0===o&&null!==h&&(o=(h&Jr.Open)===Jr.Open);let f=(0,m.useRef)(null),p=Zn(f,t),g=(0,m.useRef)(null),v=Cr(f),y=e.hasOwnProperty("open")||null!==h,b=e.hasOwnProperty("onClose");if(!y&&!b)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!b)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if("function"!=typeof s)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);let w=o?0:1,[S,E]=(0,m.useReducer)(Ii,{titleId:null,descriptionId:null,panelRef:(0,m.createRef)()}),k=Yn((()=>s(!1))),x=Yn((e=>E({type:0,id:e}))),T=!!ir()&&(!l&&0===w),_=c>1,C=null!==(0,m.useContext)(_i),I=_?"parent":"leaf",O=null!==h&&(h&Jr.Closing)===Jr.Closing,N=!C&&!O&&T,P=(0,m.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(g.current)&&e instanceof HTMLElement))))?t:null}),[g]);Ei(P,N);let R=!!_||T,D=(0,m.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==v?void 0:v.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(g.current)&&e instanceof HTMLElement)))?t:null}),[g]);Ei(D,R);let A=Yn((()=>{var e,t;return[...Array.from(null!=(e=null==v?void 0:v.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(g.current)||S.panelRef.current&&e.contains(S.panelRef.current)))),null!=(t=S.panelRef.current)?t:f.current]}));oi((()=>A()),k,!(!T||_));let L=!(_||0!==w);Ir(null==v?void 0:v.defaultView,"keydown",(e=>{L&&(e.defaultPrevented||e.key===tr.Escape&&(e.preventDefault(),e.stopPropagation(),k()))})),function(e,t,n=(()=>[document.body])){bi(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(v,!(O||0!==w||C),A),(0,m.useEffect)((()=>{if(0!==w||!f.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&k()}}));return e.observe(f.current),()=>e.disconnect()}),[w,f,k]);let[M,j]=Gr(),F=(0,m.useMemo)((()=>[{dialogState:w,close:k,setTitleId:x},S]),[w,S,k,x]),U=(0,m.useMemo)((()=>({open:0===w})),[w]),z={ref:p,id:i,role:"dialog","aria-modal":0===w||void 0,"aria-labelledby":S.titleId,"aria-describedby":M};return n(m).createElement(ri,{type:"Dialog",enabled:0===w,element:f,onUpdate:Yn(((e,t)=>{"Dialog"===t&&Dn(e,{[ni.Add]:()=>d((e=>e+1)),[ni.Remove]:()=>d((e=>e-1))})}))},n(m).createElement(Fr,{force:!0},n(m).createElement(qr,null,n(m).createElement(_i.Provider,{value:F},n(m).createElement(qr.Group,{target:f},n(m).createElement(Fr,{force:!1},n(m).createElement(j,{slot:U,name:"Dialog.Description"},n(m).createElement(Ar,{initialFocus:a,containers:A,features:T?Dn(I,{parent:Ar.features.RestoreFocus,leaf:Ar.features.All&~Ar.features.FocusLock}):Ar.features.None},Un({ourProps:z,theirProps:u,slot:U,defaultTag:"div",features:Oi,visible:0===w,name:"Dialog"})))))))),n(m).createElement(ar,{features:sr.Hidden,ref:g}))})),Pi=Bn((function(e,t){let r=or(),{id:i=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:s},a]=Ci("Dialog.Backdrop"),l=Zn(t);(0,m.useEffect)((()=>{if(null===a.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[a.panelRef]);let u=(0,m.useMemo)((()=>({open:0===s})),[s]);return n(m).createElement(Fr,{force:!0},n(m).createElement(qr,null,Un({ourProps:{ref:l,id:i,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))})),Ri=Bn((function(e,t){let n=or(),{id:r=`headlessui-dialog-panel-${n}`,...i}=e,[{dialogState:o},s]=Ci("Dialog.Panel"),a=Zn(t,s.panelRef),l=(0,m.useMemo)((()=>({open:0===o})),[o]);return Un({ourProps:{ref:a,id:r,onClick:Yn((e=>{e.stopPropagation()}))},theirProps:i,slot:l,defaultTag:"div",name:"Dialog.Panel"})})),Di=Bn((function(e,t){let n=or(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=e,[{dialogState:o,close:s}]=Ci("Dialog.Overlay");return Un({ourProps:{ref:Zn(t),id:r,"aria-hidden":!0,onClick:Yn((e=>{if(e.target===e.currentTarget){if(nr(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}))},theirProps:i,slot:(0,m.useMemo)((()=>({open:0===o})),[o]),defaultTag:"div",name:"Dialog.Overlay"})})),Ai=Bn((function(e,t){let n=or(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:o,setTitleId:s}]=Ci("Dialog.Title"),a=Zn(t);(0,m.useEffect)((()=>(s(r),()=>s(null))),[r,s]);let l=(0,m.useMemo)((()=>({open:0===o})),[o]);return Un({ourProps:{ref:a,id:r},theirProps:i,slot:l,defaultTag:"h2",name:"Dialog.Title"})})),Li=Object.assign(Ni,{Backdrop:Pi,Panel:Ri,Overlay:Di,Title:Ai,Description:Yr});m=o("acw62");function Mi(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function ji(e,...t){e&&t.length>0&&e.classList.add(...t)}function Fi(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ui(e,t,n,r){let i=n?"enter":"leave",o=ur(),s=void 0!==r?Mi(r):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let a=Dn(i,{enter:()=>t.enter,leave:()=>t.leave}),l=Dn(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=Dn(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Fi(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),ji(e,...a,...u),o.nextFrame((()=>{Fi(e,...u),ji(e,...l),function(e,t){let n=ur();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[o,s]=[r,i].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),a=o+s;if(0!==a){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),a),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(Fi(e,...a),ji(e,...t.entered),s())))})),o.dispose}function zi({container:e,direction:t,classes:n,onStart:r,onStop:i}){let o=_r(),s=Nr(),a=Qn(t);Gn((()=>{let t=ur();s.add(t.dispose);let l=e.current;if(l&&"idle"!==a.current&&o.current)return t.dispose(),r.current(a.current),t.add(Ui(l,n.current,"enter"===a.current,(()=>{t.dispose(),i.current(a.current)}))),t.dispose}),[t])}function Vi(e=0){let[t,n]=(0,m.useState)(e),r=(0,m.useCallback)((e=>n((t=>t|e))),[t]),i=(0,m.useCallback)((e=>Boolean(t&e)),[t]),o=(0,m.useCallback)((e=>n((t=>t&~e))),[n]),s=(0,m.useCallback)((e=>n((t=>t^e))),[n]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:o,toggleFlag:s}}function Bi(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let $i=(0,(m=o("acw62")).createContext)(null);$i.displayName="TransitionContext";var Hi=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Hi||{});let qi=(0,m.createContext)(null);function Wi(e){return"children"in e?Wi(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function Ki(e,t){let n=Qn(e),r=(0,m.useRef)([]),i=_r(),o=Nr(),s=Yn(((e,t=Fn.Hidden)=>{let s=r.current.findIndex((({el:t})=>t===e));-1!==s&&(Dn(t,{[Fn.Unmount](){r.current.splice(s,1)},[Fn.Hidden](){r.current[s].state="hidden"}}),o.microTask((()=>{var e;!Wi(r)&&i.current&&(null==(e=n.current)||e.call(n))})))})),a=Yn((e=>{let t=r.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>s(e,Fn.Unmount)})),l=(0,m.useRef)([]),u=(0,m.useRef)(Promise.resolve()),c=(0,m.useRef)({enter:[],leave:[],idle:[]}),d=Yn(((e,n,r)=>{l.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{l.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(c.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?u.current=u.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),h=Yn(((e,t,n)=>{Promise.all(c.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=l.current.shift())||e()})).then((()=>n(t)))}));return(0,m.useMemo)((()=>({children:r,register:a,unregister:s,onStart:d,onStop:h,wait:u,chains:c})),[a,s,r,d,h,c,u])}function Gi(){}qi.displayName="NestingContext";let Qi=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Yi(e){var t;let n={};for(let r of Qi)n[r]=null!=(t=e[r])?t:Gi;return n}let Xi=jn.RenderStrategy;let Ji=Bn((function(e,t){let{show:r,appear:i=!1,unmount:o,...s}=e,a=(0,m.useRef)(null),l=Zn(a,t);ir();let u=Zr();if(void 0===r&&null!==u&&(r=(u&Jr.Open)===Jr.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,m.useState)(r?"visible":"hidden"),h=Ki((()=>{d("hidden")})),[f,p]=(0,m.useState)(!0),g=(0,m.useRef)([r]);Gn((()=>{!1!==f&&g.current[g.current.length-1]!==r&&(g.current.push(r),p(!1))}),[g,r]);let v=(0,m.useMemo)((()=>({show:r,appear:i,initial:f})),[r,i,f]);(0,m.useEffect)((()=>{if(r)d("visible");else if(Wi(h)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")}),[r,h]);let y={unmount:o};return n(m).createElement(qi.Provider,{value:h},n(m).createElement($i.Provider,{value:v},Un({ourProps:{...y,as:m.Fragment,children:n(m).createElement(Zi,{ref:l,...y,...s})},theirProps:{},defaultTag:m.Fragment,features:Xi,visible:"visible"===c,name:"Transition"})))})),Zi=Bn((function(e,t){let{beforeEnter:r,afterEnter:i,beforeLeave:o,afterLeave:s,enter:a,enterFrom:l,enterTo:u,entered:c,leave:d,leaveFrom:h,leaveTo:f,...p}=e,g=(0,m.useRef)(null),v=Zn(g,t),y=p.unmount?Fn.Unmount:Fn.Hidden,{show:b,appear:w,initial:S}=function(){let e=(0,m.useContext)($i);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[E,k]=(0,m.useState)(b?"visible":"hidden"),x=function(){let e=(0,m.useContext)(qi);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:T,unregister:_}=x,C=(0,m.useRef)(null);(0,m.useEffect)((()=>T(g)),[T,g]),(0,m.useEffect)((()=>{if(y===Fn.Hidden&&g.current)return b&&"visible"!==E?void k("visible"):Dn(E,{hidden:()=>_(g),visible:()=>T(g)})}),[E,g,T,_,b,y]);let I=Qn({enter:Bi(a),enterFrom:Bi(l),enterTo:Bi(u),entered:Bi(c),leave:Bi(d),leaveFrom:Bi(h),leaveTo:Bi(f)}),O=function(e){let t=(0,m.useRef)(Yi(e));return(0,m.useEffect)((()=>{t.current=Yi(e)}),[e]),t}({beforeEnter:r,afterEnter:i,beforeLeave:o,afterLeave:s}),N=ir();(0,m.useEffect)((()=>{if(N&&"visible"===E&&null===g.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[g,E,N]);let P=S&&!w,R=!N||P||C.current===b?"idle":b?"enter":"leave",D=Vi(0),A=Yn((e=>Dn(e,{enter:()=>{D.addFlag(Jr.Opening),O.current.beforeEnter()},leave:()=>{D.addFlag(Jr.Closing),O.current.beforeLeave()},idle:()=>{}}))),L=Yn((e=>Dn(e,{enter:()=>{D.removeFlag(Jr.Opening),O.current.afterEnter()},leave:()=>{D.removeFlag(Jr.Closing),O.current.afterLeave()},idle:()=>{}}))),M=Ki((()=>{k("hidden"),_(g)}),x);zi({container:g,classes:I,direction:R,onStart:Qn((e=>{M.onStart(g,e,A)})),onStop:Qn((e=>{M.onStop(g,e,L),"leave"===e&&!Wi(M)&&(k("hidden"),_(g))}))}),(0,m.useEffect)((()=>{P&&(y===Fn.Hidden?C.current=null:C.current=b)}),[b,P,E]);let j=p,F={ref:v};return w&&b&&Kn.isServer&&(j={...j,className:An(p.className,...I.current.enter,...I.current.enterFrom)}),n(m).createElement(qi.Provider,{value:M},n(m).createElement(ei,{value:Dn(E,{visible:Jr.Open,hidden:Jr.Closed})|D.flags},Un({ourProps:F,theirProps:j,defaultTag:"div",features:Xi,visible:"visible"===E,name:"Transition.Child"})))})),eo=Bn((function(e,t){let r=null!==(0,m.useContext)($i),i=null!==Zr();return n(m).createElement(n(m).Fragment,null,!r&&i?n(m).createElement(Ji,{ref:t,...e}):n(m).createElement(Zi,{ref:t,...e}))})),to=Object.assign(Ji,{Child:eo,Root:Ji});for(var no,ro=256,io=[],oo=256;ro--;)io[ro]=(ro+256).toString(16).substring(1);function so(e){var t=0,n=e||11;if(!no||ro+n>2*oo)for(no="",ro=0;t<oo;t++)no+=io[256*Math.random()|0];return no.substring(ro,ro+++n)}var ao={};function lo(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function uo(e){return!!e&&!!e[Zo]}function co(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===es}(e)||Array.isArray(e)||!!e[Jo]||!!(null===(t=e.constructor)||void 0===t?void 0:t[Jo])||yo(e)||bo(e))}function ho(e,t,n){void 0===n&&(n=!1),0===fo(e)?(n?Object.keys:ts)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function fo(e){var t=e[Zo];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:yo(e)?2:bo(e)?3:0}function po(e,t){return 2===fo(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function mo(e,t){return 2===fo(e)?e.get(t):e[t]}function go(e,t,n){var r=fo(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function vo(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function yo(e){return Go&&e instanceof Map}function bo(e){return Qo&&e instanceof Set}function wo(e){return e.o||e.t}function So(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ns(e);delete t[Zo];for(var n=ts(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Eo(e,t){return void 0===t&&(t=!1),xo(e)||uo(e)||!co(e)||(fo(e)>1&&(e.set=e.add=e.clear=e.delete=ko),Object.freeze(e),t&&ho(e,(function(e,t){return Eo(t,!0)}),!0)),e}function ko(){lo(2)}function xo(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function To(e){var t=rs[e];return t||lo(18,e),t}function _o(e,t){rs[e]||(rs[e]=t)}function Co(){return Wo}function Io(e,t){t&&(To("Patches"),e.u=[],e.s=[],e.v=t)}function Oo(e){No(e),e.p.forEach(Ro),e.p=null}function No(e){e===Wo&&(Wo=e.l)}function Po(e){return Wo={p:[],l:Wo,h:e,m:!0,_:0}}function Ro(e){var t=e[Zo];0===t.i||1===t.i?t.j():t.g=!0}function Do(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.O||To("ES5").S(t,e,r),r?(n[Zo].P&&(Oo(t),lo(4)),co(e)&&(e=Ao(t,e),t.l||Mo(t,e)),t.u&&To("Patches").M(n[Zo].t,e,t.u,t.s)):e=Ao(t,n,[]),Oo(t),t.u&&t.v(t.u,t.s),e!==Xo?e:void 0}function Ao(e,t,n){if(xo(t))return t;var r=t[Zo];if(!r)return ho(t,(function(i,o){return Lo(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return Mo(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=So(r.k):r.o,o=i,s=!1;3===r.i&&(o=new Set(i),i.clear(),s=!0),ho(o,(function(t,o){return Lo(e,r,i,t,o,n,s)})),Mo(e,i,!1),n&&e.u&&To("Patches").N(r,n,e.u,e.s)}return r.o}function Lo(e,t,n,r,i,o,s){if(uo(i)){var a=Ao(e,i,o&&t&&3!==t.i&&!po(t.R,r)?o.concat(r):void 0);if(go(n,r,a),!uo(a))return;e.m=!1}else s&&n.add(i);if(co(i)&&!xo(i)){if(!e.h.D&&e._<1)return;Ao(e,i),t&&t.A.l||Mo(e,i)}}function Mo(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&Eo(t,n)}function jo(e,t){var n=e[Zo];return(n?wo(n):e)[t]}function Fo(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Uo(e){e.P||(e.P=!0,e.l&&Uo(e.l))}function zo(e){e.o||(e.o=So(e.t))}function Vo(e,t,n){var r=yo(t)?To("MapSet").F(t,n):bo(t)?To("MapSet").T(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:Co(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=is;n&&(i=[r],o=os);var s=Proxy.revocable(i,o),a=s.revoke,l=s.proxy;return r.k=l,r.j=a,l}(t,n):To("ES5").J(t,n);return(n?n.A:Co()).p.push(r),r}function Bo(e){return uo(e)||lo(22,e),function e(t){if(!co(t))return t;var n,r=t[Zo],i=fo(t);if(r){if(!r.P&&(r.i<4||!To("ES5").K(r)))return r.t;r.I=!0,n=$o(t,i),r.I=!1}else n=$o(t,i);return ho(n,(function(t,i){r&&mo(r.t,t)===i||go(n,t,e(i))})),3===i?new Set(n):n}(e)}function $o(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return So(e)}function Ho(){function e(e,t){var n=i[e];return n?n.enumerable=t:i[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[Zo];return is.get(t,e)},set:function(t){var n=this[Zo];is.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][Zo];if(!i.P)switch(i.i){case 5:r(i)&&Uo(i);break;case 4:n(i)&&Uo(i)}}}function n(e){for(var t=e.t,n=e.k,r=ts(n),i=r.length-1;i>=0;i--){var o=r[i];if(o!==Zo){var s=t[o];if(void 0===s&&!po(t,o))return!0;var a=n[o],l=a&&a[Zo];if(l?l.t!==s:!vo(a,s))return!0}}var u=!!t[Zo];return r.length!==ts(t).length+(u?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var i={};_o("ES5",{J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var o=ns(n);delete o[Zo];for(var s=ts(o),a=0;a<s.length;a++){var l=s[a];o[l]=e(l,t||!!o[l].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(r,t),o={i:r?5:4,A:n?n.A:Co(),P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Zo,{value:o,writable:!0}),i},S:function(e,n,i){i?uo(n)&&n[Zo].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[Zo];if(n){var i=n.t,o=n.k,s=n.R,a=n.i;if(4===a)ho(o,(function(t){t!==Zo&&(void 0!==i[t]||po(i,t)?s[t]||e(o[t]):(s[t]=!0,Uo(n)))})),ho(i,(function(e){void 0!==o[e]||po(o,e)||(s[e]=!1,Uo(n))}));else if(5===a){if(r(n)&&(Uo(n),s.length=!0),o.length<i.length)for(var l=o.length;l<i.length;l++)s[l]=!1;else for(var u=i.length;u<o.length;u++)s[u]=!0;for(var c=Math.min(o.length,i.length),d=0;d<c;d++)o.hasOwnProperty(d)||(s[d]=!0),void 0===s[d]&&e(o[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}e(ao,"applyMiddleware",(()=>xs),(e=>xs=e)),e(ao,"combineReducers",(()=>Es),(e=>Es=e)),e(ao,"compose",(()=>ks),(e=>ks=e)),e(ao,"createStore",(()=>Ss),(e=>Ss=e)),e(ao,"configureStore",(()=>ua),(e=>ua=e)),e(ao,"createSlice",(()=>ha),(e=>ha=e)),e(ao,"createAsyncThunk",(()=>ya),(e=>ya=e));var qo,Wo,Ko="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Go="undefined"!=typeof Map,Qo="undefined"!=typeof Set,Yo="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Xo=Ko?Symbol.for("immer-nothing"):((qo={})["immer-nothing"]=!0,qo),Jo=Ko?Symbol.for("immer-draftable"):"__$immer_draftable",Zo=Ko?Symbol.for("immer-state"):"__$immer_state",es=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),ts="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ns=Object.getOwnPropertyDescriptors||function(e){var t={};return ts(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},rs={},is={get:function(e,t){if(t===Zo)return e;var n=wo(e);if(!po(n,t))return function(e,t,n){var r,i=Fo(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!co(r)?r:r===jo(e.t,t)?(zo(e),e.o[t]=Vo(e.A.h,r,e)):r},has:function(e,t){return t in wo(e)},ownKeys:function(e){return Reflect.ownKeys(wo(e))},set:function(e,t,n){var r=Fo(wo(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=jo(wo(e),t),o=null==i?void 0:i[Zo];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(vo(n,i)&&(void 0!==n||po(e.t,t)))return!0;zo(e),Uo(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==jo(e.t,t)||t in e.t?(e.R[t]=!1,zo(e),Uo(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=wo(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){lo(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){lo(12)}},os={};ho(is,(function(e,t){os[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),os.deleteProperty=function(e,t){return os.set.call(this,e,t,void 0)},os.set=function(e,t,n){return is.set.call(this,e[0],t,n,e[0])};var ss=function(){function e(e){var t=this;this.O=Yo,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=i);for(var r=arguments.length,s=Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(s))}))}}var s;if("function"!=typeof n&&lo(6),void 0!==r&&"function"!=typeof r&&lo(7),co(e)){var a=Po(t),l=Vo(t,e,void 0),u=!0;try{s=n(l),u=!1}finally{u?Oo(a):No(a)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(e){return Io(a,r),Do(e,a)}),(function(e){throw Oo(a),e})):(Io(a,r),Do(s,a))}if(!e||"object"!=typeof e){if(void 0===(s=n(e))&&(s=e),s===Xo&&(s=void 0),t.D&&Eo(s,!0),r){var c=[],d=[];To("Patches").M(e,s,c,d),r(c,d)}return s}lo(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))};var r,i,o=t.produce(e,n,(function(e,t){r=e,i=t}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return[e,r,i]})):[o,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){co(e)||lo(8),uo(e)&&(e=Bo(e));var t=Po(this),n=Vo(this,e,void 0);return n[Zo].C=!0,No(t),n},t.finishDraft=function(e,t){var n=(e&&e[Zo]).A;return Io(n,t),Do(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!Yo&&lo(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var i=To("Patches").$;return uo(e)?i(e,t):this.produce(e,(function(e){return i(e,t)}))},e}(),as=new ss,ls=as.produce,us=(as.produceWithPatches.bind(as),as.setAutoFreeze.bind(as),as.setUseProxies.bind(as),as.applyPatches.bind(as),as.createDraft.bind(as),as.finishDraft.bind(as),ls);function cs(e){return cs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cs(e)}function ds(e,t){if("object"!==cs(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==cs(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function hs(e){var t=ds(e,"string");return"symbol"===cs(t)?t:String(t)}function fs(e,t,n){return(t=hs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ps(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ms(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ps(Object(n),!0).forEach((function(t){fs(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ps(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function gs(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var vs="function"==typeof Symbol&&Symbol.observable||"@@observable",ys=function(){return Math.random().toString(36).substring(7).split("").join(".")},bs={INIT:"@@redux/INIT"+ys(),REPLACE:"@@redux/REPLACE"+ys(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ys()}};function ws(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ss(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(gs(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(gs(1));return n(Ss)(e,t)}if("function"!=typeof e)throw new Error(gs(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(gs(3));return o}function d(e){if("function"!=typeof e)throw new Error(gs(4));if(l)throw new Error(gs(5));var t=!0;return u(),a.push(e),function(){if(t){if(l)throw new Error(gs(6));t=!1,u();var n=a.indexOf(e);a.splice(n,1),s=null}}}function h(e){if(!ws(e))throw new Error(gs(7));if(void 0===e.type)throw new Error(gs(8));if(l)throw new Error(gs(9));try{l=!0,o=i(o,e)}finally{l=!1}for(var t=s=a,n=0;n<t.length;n++){(0,t[n])()}return e}return h({type:bs.INIT}),(r={dispatch:h,subscribe:d,getState:c,replaceReducer:function(e){if("function"!=typeof e)throw new Error(gs(10));i=e,h({type:bs.REPLACE})}})[vs]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(gs(11));function n(){e.next&&e.next(c())}return n(),{unsubscribe:t(n)}}})[vs]=function(){return this},e},r}function Es(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var o,s=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:bs.INIT}))throw new Error(gs(12));if(void 0===n(void 0,{type:bs.PROBE_UNKNOWN_ACTION()}))throw new Error(gs(13))}))}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<s.length;a++){var l=s[a],u=n[l],c=e[l],d=u(c,t);if(void 0===d){t&&t.type;throw new Error(gs(14))}i[l]=d,r=r||d!==c}return(r=r||s.length!==Object.keys(e).length)?i:e}}function ks(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function xs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(gs(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return r=ks.apply(void 0,o)(n.dispatch),ms(ms({},n),{},{dispatch:r})}}}function Ts(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var _s=Ts();_s.withExtraArgument=Ts;var Cs,Is,Os=_s,Ns={},Ps=Ns={};function Rs(){throw new Error("setTimeout has not been defined")}function Ds(){throw new Error("clearTimeout has not been defined")}function As(e){if(Cs===setTimeout)return setTimeout(e,0);if((Cs===Rs||!Cs)&&setTimeout)return Cs=setTimeout,setTimeout(e,0);try{return Cs(e,0)}catch(t){try{return Cs.call(null,e,0)}catch(t){return Cs.call(this,e,0)}}}!function(){try{Cs="function"==typeof setTimeout?setTimeout:Rs}catch(e){Cs=Rs}try{Is="function"==typeof clearTimeout?clearTimeout:Ds}catch(e){Is=Ds}}();var Ls,Ms=[],js=!1,Fs=-1;function Us(){js&&Ls&&(js=!1,Ls.length?Ms=Ls.concat(Ms):Fs=-1,Ms.length&&zs())}function zs(){if(!js){var e=As(Us);js=!0;for(var t=Ms.length;t;){for(Ls=Ms,Ms=[];++Fs<t;)Ls&&Ls[Fs].run();Fs=-1,t=Ms.length}Ls=null,js=!1,function(e){if(Is===clearTimeout)return clearTimeout(e);if((Is===Ds||!Is)&&clearTimeout)return Is=clearTimeout,clearTimeout(e);try{return Is(e)}catch(t){try{return Is.call(null,e)}catch(t){return Is.call(this,e)}}}(e)}}function Vs(e,t){this.fun=e,this.array=t}function Bs(){}Ps.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ms.push(new Vs(e,t)),1!==Ms.length||js||As(zs)},Vs.prototype.run=function(){this.fun.apply(null,this.array)},Ps.title="browser",Ps.browser=!0,Ps.env={},Ps.argv=[],Ps.version="",Ps.versions={},Ps.on=Bs,Ps.addListener=Bs,Ps.once=Bs,Ps.off=Bs,Ps.removeListener=Bs,Ps.removeAllListeners=Bs,Ps.emit=Bs,Ps.prependListener=Bs,Ps.prependOnceListener=Bs,Ps.listeners=function(e){return[]},Ps.binding=function(e){throw new Error("process.binding is not supported")},Ps.cwd=function(){return"/"},Ps.chdir=function(e){throw new Error("process.chdir is not supported")},Ps.umask=function(){return 0};var $s,Hs=($s=function(e,t){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},$s(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}$s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),qs=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},Ws=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Ks=Object.defineProperty,Gs=Object.defineProperties,Qs=Object.getOwnPropertyDescriptors,Ys=Object.getOwnPropertySymbols,Xs=Object.prototype.hasOwnProperty,Js=Object.prototype.propertyIsEnumerable,Zs=function(e,t,n){return t in e?Ks(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ea=function(e,t){for(var n in t||(t={}))Xs.call(t,n)&&Zs(e,n,t[n]);if(Ys)for(var r=0,i=Ys(t);r<i.length;r++){n=i[r];Js.call(t,n)&&Zs(e,n,t[n])}return e},ta=function(e,t){return Gs(e,Qs(t))},na=function(e,t,n){return new Promise((function(r,i){var o=function(e){try{a(n.next(e))}catch(e){i(e)}},s=function(e){try{a(n.throw(e))}catch(e){i(e)}},a=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(o,s)};a((n=n.apply(e,t)).next())}))},ra="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?ks:ks.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function ia(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}var oa=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Hs(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,Ws([void 0],e[0].concat(this)))):new(t.bind.apply(t,Ws([void 0],e.concat(this))))},t}(Array);function sa(e){return co(e)?us(e,(function(){})):e}function aa(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,n=void 0===t||t,r=(e.immutableCheck,e.serializableCheck,new oa);n&&("boolean"==typeof n?r.push(Os):r.push(Os.withExtraArgument(n.extraArgument)));return r}(e)}}var la=!0;function ua(e){var t,n=aa(),r=e||{},i=r.reducer,o=void 0===i?void 0:i,s=r.middleware,a=void 0===s?n():s,l=r.devTools,u=void 0===l||l,c=r.preloadedState,d=void 0===c?void 0:c,h=r.enhancers,f=void 0===h?void 0:h;if("function"==typeof o)t=o;else{if(!ia(o))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=Es(o)}var p=a;if("function"==typeof p&&(p=p(n),!la&&!Array.isArray(p)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!la&&p.some((function(e){return"function"!=typeof e})))throw new Error("each middleware provided to configureStore must be a function");var m=xs.apply(void 0,p),g=ks;u&&(g=ra(ea({trace:!la},"object"==typeof u&&u)));var v=[m];return Array.isArray(f)?v=Ws([m],f):"function"==typeof f&&(v=f(v)),Ss(t,d,g.apply(void 0,v))}function ca(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ea(ea({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function da(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function ha(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n,r="function"==typeof e.initialState?e.initialState:sa(e.initialState),i=e.reducers||{},o=Object.keys(i),s={},a={},l={};function u(){var t="function"==typeof e.extraReducers?da(e.extraReducers):[e.extraReducers],n=t[0],i=void 0===n?{}:n,o=t[1],s=void 0===o?[]:o,l=t[2],u=void 0===l?void 0:l,c=ea(ea({},i),a);return function(e,t,n,r){void 0===n&&(n=[]);var i,o="function"==typeof t?da(t):[t,n,r],s=o[0],a=o[1],l=o[2];if("function"==typeof e)i=function(){return sa(e())};else{var u=sa(e);i=function(){return u}}function c(e,t){void 0===e&&(e=i());var n=Ws([s[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[l]),n.reduce((function(e,n){if(n){var r;if(uo(e))return void 0===(r=n(e,t))?e:r;if(co(e))return us(e,(function(e){return n(e,t)}));if(void 0===(r=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return c.getInitialState=i,c}(r,(function(e){for(var t in c)e.addCase(t,c[t]);for(var n=0,r=s;n<r.length;n++){var i=r[n];e.addMatcher(i.matcher,i.reducer)}u&&e.addDefaultCase(u)}))}return o.forEach((function(e){var n,r,o=i[e],u=t+"/"+e;"reducer"in o?(n=o.reducer,r=o.prepare):n=o,s[e]=n,a[u]=n,l[e]=r?ca(u,r):ca(u)})),{name:t,reducer:function(e,t){return n||(n=u()),n(e,t)},actions:l,caseReducers:s,getInitialState:function(){return n||(n=u()),n.getInitialState()}}}var fa=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},pa=["name","message","stack","code"],ma=function(e,t){this.payload=e,this.meta=t},ga=function(e,t){this.payload=e,this.meta=t},va=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0,r=pa;n<r.length;n++){var i=r[n];"string"==typeof e[i]&&(t[i]=e[i])}return t}return{message:String(e)}},ya=function(){function e(e,t,n){var r=ca(e+"/fulfilled",(function(e,t,n,r){return{payload:e,meta:ta(ea({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}})),i=ca(e+"/pending",(function(e,t,n){return{payload:void 0,meta:ta(ea({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),o=ca(e+"/rejected",(function(e,t,r,i,o){return{payload:i,error:(n&&n.serializeError||va)(e||"Rejected"),meta:ta(ea({},o||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),s="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(a,l,u){var c,d=(null==n?void 0:n.idGenerator)?n.idGenerator(e):fa(),h=new s;function f(e){c=e,h.abort()}var p=function(){return na(this,null,(function(){var s,p,m,g,v,y;return qs(this,(function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),g=null==(s=null==n?void 0:n.condition)?void 0:s.call(n,e,{getState:l,extra:u}),null===(w=g)||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return!0,v=new Promise((function(e,t){return h.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:c||"Aborted"})}))})),a(i(d,e,null==(p=null==n?void 0:n.getPendingMeta)?void 0:p.call(n,{requestId:d,arg:e},{getState:l,extra:u}))),[4,Promise.race([v,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:d,signal:h.signal,abort:f,rejectWithValue:function(e,t){return new ma(e,t)},fulfillWithValue:function(e,t){return new ga(e,t)}})).then((function(t){if(t instanceof ma)throw t;return t instanceof ga?r(t.payload,d,e,t.meta):r(t,d,e)}))])];case 3:return m=b.sent(),[3,5];case 4:return y=b.sent(),m=y instanceof ma?o(null,d,e,y.payload,y.meta):o(y,d,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&o.match(m)&&m.meta.condition||a(m),[2,m]}var w}))}))}();return Object.assign(p,{abort:f,requestId:d,arg:e,unwrap:function(){return p.then(ba)}})}}),{pending:i,rejected:o,fulfilled:r,typePrefix:e})}return e.withTypes=function(){return e},e}();function ba(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var wa="listenerMiddleware";ca(wa+"/add"),ca(wa+"/removeAll"),ca(wa+"/remove");"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==t?t:globalThis);var Sa,Ea=function(e){return function(t){setTimeout(t,e)}};"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Ea(10);Ho();
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
const ka=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ka(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw new Ta;const l=i<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ta extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _a=function(e){return function(e){const t=ka(e);return xa.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ca=function(e){try{return xa.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Ia=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Oa=()=>{try{return Ia()||(()=>{if(void 0===Ns||void 0===Ns.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ca(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Na=e=>{var t,n;return null===(n=null===(t=Oa())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Pa=e=>{const t=Na(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ra=()=>{var e;return null===(e=Oa())||void 0===e?void 0:e.config},Da=e=>{var t;return null===(t=Oa())||void 0===t?void 0:t[`_${e}`]};
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
class Aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function La(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_a(JSON.stringify({alg:"none",type:"JWT"})),_a(JSON.stringify(o)),""].join(".")}
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
 */function Ma(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ja(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Fa(){const e=Ma();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ua(){try{return"object"==typeof indexedDB}catch(e){return!1}}function za(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Va(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
 */class Ba extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ba.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(Ha,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new Ba(r,s,n)}}const Ha=/\{\$([^}]+)}/g;
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
 */function qa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Ka(n)&&Ka(o)){if(!Wa(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Ka(e){return null!==e&&"object"==typeof e}
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
function Ga(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qa(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Ya(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function Xa(e,t){const n=new Ja(e,t);return n.subscribe.bind(n)}class Ja{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Za),void 0===r.error&&(r.error=Za),void 0===r.complete&&(r.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Za(){}
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
const el=1e3,tl=2,nl=144e5,rl=.5;function il(e,t=el,n=tl){const r=t*Math.pow(n,e),i=Math.round(rl*r*(Math.random()-.5)*2);return Math.min(nl,r+i)}
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
function ol(e){return e&&e._delegate?e._delegate:e}class sl{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const al="[DEFAULT]";
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
 */class ll{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Aa;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:al})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=al){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=al){return this.instances.has(e)}getOptions(e=al){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===al?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=al){return this.component?this.component.multipleInstances?e:al:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ul{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ll(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const cl=[];var dl,hl;(hl=dl||(dl={}))[hl.DEBUG=0]="DEBUG",hl[hl.VERBOSE=1]="VERBOSE",hl[hl.INFO=2]="INFO",hl[hl.WARN=3]="WARN",hl[hl.ERROR=4]="ERROR",hl[hl.SILENT=5]="SILENT";const fl={debug:dl.DEBUG,verbose:dl.VERBOSE,info:dl.INFO,warn:dl.WARN,error:dl.ERROR,silent:dl.SILENT},pl=dl.INFO,ml={[dl.DEBUG]:"log",[dl.VERBOSE]:"log",[dl.INFO]:"info",[dl.WARN]:"warn",[dl.ERROR]:"error"},gl=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ml[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class vl{constructor(e){this.name=e,this._logLevel=pl,this._logHandler=gl,this._userLogHandler=null,cl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dl))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?fl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dl.DEBUG,...e),this._logHandler(this,dl.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dl.VERBOSE,...e),this._logHandler(this,dl.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dl.INFO,...e),this._logHandler(this,dl.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dl.WARN,...e),this._logHandler(this,dl.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dl.ERROR,...e),this._logHandler(this,dl.ERROR,...e)}}const yl=(e,t)=>t.some((t=>e instanceof t));let bl,wl;const Sl=new WeakMap,El=new WeakMap,kl=new WeakMap,xl=new WeakMap,Tl=new WeakMap;let _l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return El.get(e);if("objectStoreNames"===t)return e.objectStoreNames||kl.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ol(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Cl(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Nl(this),t),Ol(Sl.get(this))}:function(...t){return Ol(e.apply(Nl(this),t))}:function(t,...n){const r=e.call(Nl(this),t,...n);return kl.set(r,t.sort?t.sort():[t]),Ol(r)}}function Il(e){return"function"==typeof e?Cl(e):(e instanceof IDBTransaction&&function(e){if(El.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));El.set(e,t)}(e),yl(e,bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,_l):e)}function Ol(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Ol(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Sl.set(t,e)})).catch((()=>{})),Tl.set(t,e),t}(e);if(xl.has(e))return xl.get(e);const t=Il(e);return t!==e&&(xl.set(e,t),Tl.set(t,e)),t}const Nl=e=>Tl.get(e);function Pl(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ol(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Ol(s.result),e.oldVersion,e.newVersion,Ol(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Rl=["get","getKey","getAll","getAllKeys","count"],Dl=["put","add","delete","clear"],Al=new Map;function Ll(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Al.get(t))return Al.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Dl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Rl.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return Al.set(t,o),o}_l=(e=>({...e,get:(t,n,r)=>Ll(t,n)||e.get(t,n,r),has:(t,n)=>!!Ll(t,n)||e.has(t,n)}))(_l);
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
class Ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const jl="@firebase/app",Fl="0.9.7",Ul=new vl("@firebase/app"),zl="[DEFAULT]",Vl={[jl]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bl=new Map,$l=new Map;function Hl(e,t){try{e.container.addComponent(t)}catch(n){Ul.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ql(e){const t=e.name;if($l.has(t))return Ul.debug(`There were multiple attempts to register component ${t}.`),!1;$l.set(t,e);for(const t of Bl.values())Hl(t,e);return!0}function Wl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Kl=new $a("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Gl{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new sl("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kl.create("app-deleted",{appName:this._name})}}
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
 */const Ql="9.19.1";function Yl(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:zl,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Kl.create("bad-app-name",{appName:String(i)});if(n||(n=Ra()),!n)throw Kl.create("no-options");const o=Bl.get(i);if(o){if(Wa(n,o.options)&&Wa(r,o.config))return o;throw Kl.create("duplicate-app",{appName:i})}const s=new ul(i);for(const e of $l.values())s.addComponent(e);const a=new Gl(n,r,s);return Bl.set(i,a),a}function Xl(e=zl){const t=Bl.get(e);if(!t&&e===zl)return Yl();if(!t)throw Kl.create("no-app",{appName:e});return t}function Jl(e,t,n){var r;let i=null!==(r=Vl[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ul.warn(e.join(" "))}ql(new sl(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const Zl="firebase-heartbeat-database",eu=1,tu="firebase-heartbeat-store";let nu=null;function ru(){return nu||(nu=Pl(Zl,eu,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(tu)}}).catch((e=>{throw Kl.create("idb-open",{originalErrorMessage:e.message})}))),nu}async function iu(e,t){try{const n=(await ru()).transaction(tu,"readwrite"),r=n.objectStore(tu);return await r.put(t,ou(e)),n.done}catch(e){if(e instanceof Ba)Ul.warn(e.message);else{const t=Kl.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ul.warn(t.message)}}}function ou(e){return`${e.name}!${e.options.appId}`}
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
 */class su{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lu(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=au();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=au(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),uu(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=_a(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function au(){return(new Date).toISOString().substring(0,10)}class lu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ua()&&za().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await ru()).transaction(tu).objectStore(tu).get(ou(e))}catch(e){if(e instanceof Ba)Ul.warn(e.message);else{const t=Kl.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ul.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return iu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return iu(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function uu(e){return _a(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var cu;cu="",ql(new sl("platform-logger",(e=>new Ml(e)),"PRIVATE")),ql(new sl("heartbeat",(e=>new su(e)),"PRIVATE")),Jl(jl,Fl,cu),Jl(jl,Fl,"esm2017"),Jl("fire-js","");var du,hu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},fu={},pu=pu||{},mu=hu||self;function gu(){}function vu(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function yu(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var bu="closure_uid_"+(1e9*Math.random()>>>0),wu=0;function Su(e,t,n){return e.call.apply(e.bind,arguments)}function Eu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ku(e,t,n){return(ku=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Su:Eu).apply(null,arguments)}function xu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Tu(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function _u(){this.s=this.s,this.o=this.o}_u.prototype.s=!1,_u.prototype.na=function(){!this.s&&(this.s=!0,this.M(),0)&&function(e){Object.prototype.hasOwnProperty.call(e,bu)&&e[bu]||(e[bu]=++wu)}(this)},_u.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Iu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ou(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(vu(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function Nu(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Nu.prototype.h=function(){this.defaultPrevented=!0};var Pu=function(){if(!mu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{mu.addEventListener("test",gu,t),mu.removeEventListener("test",gu,t)}catch(e){}return e}();function Ru(e){return/^[\s\xa0]*$/.test(e)}var Du=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Au(e,t){return e<t?-1:e>t?1:0}function Lu(){var e=mu.navigator;return e&&(e=e.userAgent)?e:""}function Mu(e){return-1!=Lu().indexOf(e)}function ju(e){return ju[" "](e),e}ju[" "]=gu;var Fu,Uu=Mu("Opera"),zu=Mu("Trident")||Mu("MSIE"),Vu=Mu("Edge"),Bu=Vu||zu,$u=Mu("Gecko")&&!(-1!=Lu().toLowerCase().indexOf("webkit")&&!Mu("Edge"))&&!(Mu("Trident")||Mu("MSIE"))&&!Mu("Edge"),Hu=-1!=Lu().toLowerCase().indexOf("webkit")&&!Mu("Edge");function qu(){var e=mu.document;return e?e.documentMode:void 0}e:{var Wu="",Ku=function(){var e=Lu();return $u?/rv:([^\);]+)(\)|;)/.exec(e):Vu?/Edge\/([\d\.]+)/.exec(e):zu?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Hu?/WebKit\/(\S+)/.exec(e):Uu?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Ku&&(Wu=Ku?Ku[1]:""),zu){var Gu=qu();if(null!=Gu&&Gu>parseFloat(Wu)){Fu=String(Gu);break e}}Fu=Wu}var Qu,Yu={};function Xu(){return function(e){var t=Yu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Du(String(Fu)).split("."),n=Du("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=Au(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||Au(0==i[2].length,0==o[2].length)||Au(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(mu.document&&zu){var Ju=qu();Qu=Ju||(parseInt(Fu,10)||void 0)}else Qu=void 0;var Zu=Qu;function ec(e,t){if(Nu.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($u){e:{try{ju(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ec.X.h.call(this)}}Tu(ec,Nu);var tc={2:"touch",3:"pen",4:"mouse"};ec.prototype.h=function(){ec.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var nc="closure_listenable_"+(1e6*Math.random()|0),rc=0;function ic(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++rc,this.ba=this.ea=!1}function oc(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function sc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ac(e){const t={};for(const n in e)t[n]=e[n];return t}const lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uc(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<lc.length;t++)n=lc[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function cc(e){this.src=e,this.g={},this.h=0}function dc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Cu(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(oc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function hc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}cc.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=hc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):((t=new ic(t,this.src,o,!!r,i)).ea=n,e.push(t)),t};var fc="closure_lm_"+(1e6*Math.random()|0),pc={};function mc(e,t,n,r,i){if(r&&r.once)return vc(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)mc(e,t[o],n,r,i);return null}return n=xc(n),e&&e[nc]?e.N(t,n,yu(r)?!!r.capture:!!r,i):gc(e,t,n,!1,r,i)}function gc(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=yu(i)?!!i.capture:!!i,a=Ec(e);if(a||(e[fc]=a=new cc(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Sc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Pu||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(wc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function vc(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)vc(e,t[o],n,r,i);return null}return n=xc(n),e&&e[nc]?e.O(t,n,yu(r)?!!r.capture:!!r,i):gc(e,t,n,!0,r,i)}function yc(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)yc(e,t[o],n,r,i);else r=yu(r)?!!r.capture:!!r,n=xc(n),e&&e[nc]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=hc(o=e.g[t],n,r,i))&&(oc(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Ec(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hc(t,n,r,i)),(n=-1<e?t[e]:null)&&bc(n))}function bc(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[nc])dc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(wc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ec(t))?(dc(n,e),0==n.h&&(n.src=null,t[fc]=null)):oc(e)}}}function wc(e){return e in pc?pc[e]:pc[e]="on"+e}function Sc(e,t){if(e.ba)e=!0;else{t=new ec(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&bc(e),e=n.call(r,t)}return e}function Ec(e){return(e=e[fc])instanceof cc?e:null}var kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(e){return"function"==typeof e?e:(e[kc]||(e[kc]=function(t){return e.handleEvent(t)}),e[kc])}function Tc(){_u.call(this),this.i=new cc(this),this.P=this,this.I=null}function _c(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Nu(t,e);else if(t instanceof Nu)t.target=t.target||e;else{var i=t;uc(t=new Nu(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Cc(s,r,!0,t)&&i}if(i=Cc(s=t.g=e,r,!0,t)&&i,i=Cc(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=Cc(s=t.g=n[o],r,!1,t)&&i}function Cc(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&dc(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}Tu(Tc,_u),Tc.prototype[nc]=!0,Tc.prototype.removeEventListener=function(e,t,n,r){yc(this,e,t,n,r)},Tc.prototype.M=function(){if(Tc.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oc(n[r]);delete t.g[e],t.h--}}this.I=null},Tc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Tc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ic=mu.JSON.stringify;function Oc(){var e=Mc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Nc,Pc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Rc),(e=>e.reset()));class Rc{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Dc(e){mu.setTimeout((()=>{throw e}),0)}function Ac(e,t){Nc||function(){var e=mu.Promise.resolve(void 0);Nc=function(){e.then(jc)}}(),Lc||(Nc(),Lc=!0),Mc.add(e,t)}var Lc=!1,Mc=new class{constructor(){this.h=this.g=null}add(e,t){const n=Pc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function jc(){for(var e;e=Oc();){try{e.h.call(e.g)}catch(e){Dc(e)}var t=Pc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Lc=!1}function Fc(e,t){Tc.call(this),this.h=e||1,this.g=t||mu,this.j=ku(this.lb,this),this.l=Date.now()}function Uc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function zc(e,t,n){if("function"==typeof e)n&&(e=ku(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ku(e.handleEvent,e)}return 2147483647<Number(t)?-1:mu.setTimeout(e,t||0)}function Vc(e){e.g=zc((()=>{e.g=null,e.i&&(e.i=!1,Vc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Tu(Fc,Tc),(du=Fc.prototype).ca=!1,du.R=null,du.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_c(this,"tick"),this.ca&&(Uc(this),this.start()))}},du.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},du.M=function(){Fc.X.M.call(this),Uc(this),delete this.g};class Bc extends _u{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vc(this)}M(){super.M(),this.g&&(mu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $c(e){_u.call(this),this.h=e,this.g={}}Tu($c,_u);var Hc=[];function qc(e,t,n,r){Array.isArray(n)||(n&&(Hc[0]=n.toString()),n=Hc);for(var i=0;i<n.length;i++){var o=mc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Wc(e){sc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&bc(e)}),e),e.g={}}function Kc(){this.g=!0}function Gc(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ic(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}$c.prototype.M=function(){$c.X.M.call(this),Wc(this)},$c.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kc.prototype.Aa=function(){this.g=!1},Kc.prototype.info=function(){};var Qc={},Yc=null;function Xc(){return Yc=Yc||new Tc}function Jc(e){Nu.call(this,Qc.Pa,e)}function Zc(e){const t=Xc();_c(t,new Jc(t))}function ed(e,t){Nu.call(this,Qc.STAT_EVENT,e),this.stat=t}function td(e){const t=Xc();_c(t,new ed(t,e))}function nd(e,t){Nu.call(this,Qc.Qa,e),this.size=t}function rd(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return mu.setTimeout((function(){e()}),t)}Qc.Pa="serverreachability",Tu(Jc,Nu),Qc.STAT_EVENT="statevent",Tu(ed,Nu),Qc.Qa="timingevent",Tu(nd,Nu);var id={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},od={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function sd(){}function ad(e){return e.h||(e.h=e.i())}function ld(){}sd.prototype.h=null;var ud,cd={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dd(){Nu.call(this,"d")}function hd(){Nu.call(this,"c")}function fd(){}function pd(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new $c(this),this.O=gd,e=Bu?125:void 0,this.T=new Fc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new md}function md(){this.i=null,this.g="",this.h=!1}Tu(dd,Nu),Tu(hd,Nu),Tu(fd,sd),fd.prototype.g=function(){return new XMLHttpRequest},fd.prototype.i=function(){return{}},ud=new fd;var gd=45e3,vd={},yd={};function bd(e,t,n){e.K=1,e.v=Fd(Dd(t)),e.s=n,e.P=!0,wd(e,null)}function wd(e,t){e.F=Date.now(),xd(e),e.A=Dd(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Xd(n.i,"t",r),e.C=0,n=e.l.H,e.h=new md,e.g=Yh(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Bc(ku(e.La,e,e.g),e.N)),qc(e.S,e.g,"readystatechange",e.ib),t=e.H?ac(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Zc(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&"type"==d[1]?s+(c+"=")+u+"&":s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Sd(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Ed(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=kd(e,n),r==yd){4==t&&(e.o=4,td(14),i=!1),Gc(e.j,e.m,null,"[Incomplete Response]");break}if(r==vd){e.o=4,td(15),Gc(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Gc(e.j,e.m,r,null),Od(e,r)}Sd(e)&&r!=yd&&r!=vd&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,td(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(t),t.K=!0,td(11))):(Gc(e.j,e.m,n,"[Invalid Chunked Response]"),Id(e),Cd(e))}function kd(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?yd:(n=Number(t.substring(n,r)),isNaN(n)?vd:(r+=1)+n>t.length?yd:(t=t.substr(r,n),e.C=r+n,t))}function xd(e){e.V=Date.now()+e.O,Td(e,e.O)}function Td(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=rd(ku(e.gb,e),t)}function _d(e){e.B&&(mu.clearTimeout(e.B),e.B=null)}function Cd(e){0==e.l.G||e.I||qh(e.l,e)}function Id(e){_d(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Uc(e.T),Wc(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Od(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||rh(n.h,e)))if(!e.J&&rh(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Hh(n),Ah(n)}Vh(n),td(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=rd(ku(n.cb,n),6e3));if(1>=nh(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Kh(n,11)}else if((e.J||n.g==e)&&Hh(n),!Ru(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(ih(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,jd(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=e;if((r=n).sa=Qh(r,r.H?r.ka:null,r.V),s.J){oh(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(_d(a),xd(a)),r.g=s}else zh(r);0<n.i.length&&Mh(n)}else"stop"!=u[0]&&"close"!=u[0]||Kh(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Kh(n,7):Dh(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Zc()}catch(e){}}function Nd(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(vu(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(vu(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(vu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(du=pd.prototype).setTimeout=function(e){this.O=e},du.ib=function(e){e=e.target;const t=this.L;t&&3==Ch(e)?t.l():this.La(e)},du.La=function(e){try{if(e==this.g)e:{const c=Ch(this.g);var t=this.g.Ea();this.g.aa();if(!(3>c)&&(3!=c||Bu||this.g&&(this.h.h||this.g.fa()||Ih(this.g)))){this.I||4!=c||7==t||Zc(),_d(this);var n=this.g.aa();this.Y=n;t:if(Sd(this)){var r=Ih(this.g);e="";var i=r.length,o=4==Ch(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Id(this),Cd(this);var s="";break t}this.h.i=new mu.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ru(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,td(12),Id(this),Cd(this);break e}Gc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Od(this,n)}this.P?(Ed(this,c,s),Bu&&this.i&&3==c&&(qc(this.S,this.T,"tick",this.hb),this.T.start())):(Gc(this.j,this.m,s,null),Od(this,s)),4==c&&Id(this),this.i&&!this.I&&(4==c?qh(this.l,this):(this.i=!1,xd(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,td(12)):(this.o=0,td(13)),Id(this),Cd(this)}}}catch(e){}},du.hb=function(){if(this.g){var e=Ch(this.g),t=this.g.fa();this.C<t.length&&(_d(this),Ed(this,e,t),this.i&&4!=e&&xd(this))}},du.cancel=function(){this.I=!0,Id(this)},du.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Zc(),td(17)),Id(this),this.o=2,Cd(this)):Td(this,this.V-e)};var Pd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rd(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Rd){this.h=void 0!==t?t:e.h,Ad(this,e.j),this.s=e.s,this.g=e.g,Ld(this,e.m),this.l=e.l,t=e.i;var n=new Kd;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Md(this,n),this.o=e.o}else e&&(n=String(e).match(Pd))?(this.h=!!t,Ad(this,n[1]||"",!0),this.s=Ud(n[2]||""),this.g=Ud(n[3]||"",!0),Ld(this,n[4]),this.l=Ud(n[5]||"",!0),Md(this,n[6]||"",!0),this.o=Ud(n[7]||"")):(this.h=!!t,this.i=new Kd(null,this.h))}function Dd(e){return new Rd(e)}function Ad(e,t,n){e.j=n?Ud(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ld(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Md(e,t,n){t instanceof Kd?(e.i=t,function(e,t){t&&!e.j&&(Gd(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Qd(this,t),Xd(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=zd(t,qd)),e.i=new Kd(t,e.h))}function jd(e,t,n){e.i.set(t,n)}function Fd(e){return jd(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ud(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function zd(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Vd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vd(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Rd.prototype.toString=function(){var e=[],t=this.j;t&&e.push(zd(t,Bd,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(zd(t,Bd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(zd(n,"/"==n.charAt(0)?Hd:$d,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",zd(n,Wd)),e.join("")};var Bd=/[#\/\?@]/g,$d=/[#\?:]/g,Hd=/[#\?]/g,qd=/[#\?@]/g,Wd=/#/g;function Kd(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gd(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Qd(e,t){Gd(e),t=Jd(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yd(e,t){return Gd(e),t=Jd(e,t),e.g.has(t)}function Xd(e,t,n){Qd(e,t),0<n.length&&(e.i=null,e.g.set(Jd(e,t),Iu(n)),e.h+=n.length)}function Jd(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(du=Kd.prototype).add=function(e,t){Gd(this),this.i=null,e=Jd(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},du.forEach=function(e,t){Gd(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},du.oa=function(){Gd(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},du.W=function(e){Gd(this);let t=[];if("string"==typeof e)Yd(this,e)&&(t=t.concat(this.g.get(Jd(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},du.set=function(e,t){return Gd(this),this.i=null,Yd(this,e=Jd(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},du.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},du.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Zd(e){this.l=e||eh,mu.PerformanceNavigationTiming?e=0<(e=mu.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(mu.g&&mu.g.Ga&&mu.g.Ga()&&mu.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eh=10;function th(e){return!!e.h||!!e.g&&e.g.size>=e.j}function nh(e){return e.h?1:e.g?e.g.size:0}function rh(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ih(e,t){e.g?e.g.add(t):e.h=t}function oh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function sh(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Iu(e.i)}function ah(){}function lh(){this.g=new ah}function uh(e,t,n){const r=n||"";try{Nd(e,(function(e,n){let i=e;yu(e)&&(i=Ic(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function ch(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function dh(e){this.l=e.ac||null,this.j=e.jb||!1}function hh(e,t){Tc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=fh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zd.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ah.prototype.stringify=function(e){return mu.JSON.stringify(e,void 0)},ah.prototype.parse=function(e){return mu.JSON.parse(e,void 0)},Tu(dh,sd),dh.prototype.g=function(){return new hh(this.l,this.j)},dh.prototype.i=function(e){return function(){return e}}({}),Tu(hh,Tc);var fh=0;function ph(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function mh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gh(e)}function gh(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(du=hh.prototype).open=function(e,t){if(this.readyState!=fh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gh(this)},du.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||mu).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},du.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,mh(this)),this.readyState=fh},du.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gh(this)),this.g&&(this.readyState=3,gh(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==mu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ph(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},du.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?mh(this):gh(this),3==this.readyState&&ph(this)}},du.Va=function(e){this.g&&(this.response=this.responseText=e,mh(this))},du.Ua=function(e){this.g&&(this.response=e,mh(this))},du.ga=function(){this.g&&mh(this)},du.setRequestHeader=function(e,t){this.v.append(e,t)},du.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},du.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(hh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var vh=mu.JSON.parse;function yh(e){Tc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bh,this.K=this.L=!1}Tu(yh,Tc);var bh="",wh=/^https?$/i,Sh=["POST","PUT"];function Eh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,kh(e),Th(e)}function kh(e){e.D||(e.D=!0,_c(e,"complete"),_c(e,"error"))}function xh(e){if(e.h&&void 0!==pu&&(!e.C[1]||4!=Ch(e)||2!=e.aa()))if(e.v&&4==Ch(e))zc(e.Ha,0,e);else if(_c(e,"readystatechange"),4==Ch(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Pd)[1]||null;if(!i&&mu.self&&mu.self.location){var o=mu.self.location.protocol;i=o.substr(0,o.length-1)}r=!wh.test(i?i.toLowerCase():"")}n=r}if(n)_c(e,"complete"),_c(e,"success");else{e.m=6;try{var s=2<Ch(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",kh(e)}}finally{Th(e)}}}function Th(e,t){if(e.g){_h(e);const n=e.g,r=e.C[0]?gu:null;e.g=null,e.C=null,t||_c(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function _h(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(mu.clearTimeout(e.A),e.A=null)}function Ch(e){return e.g?e.g.readyState:0}function Ih(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case bh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Oh(e){let t="";return sc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Nh(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Oh(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):jd(e,t,n))}function Ph(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Rh(e){this.Ca=0,this.i=[],this.j=new Kc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ph("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ph("baseRetryDelayMs",5e3,e),this.bb=Ph("retryDelaySeedMs",1e4,e),this.$a=Ph("forwardChannelMaxRetries",2,e),this.ta=Ph("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Zd(e&&e.concurrentRequestLimit),this.Fa=new lh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Dh(e){if(Lh(e),3==e.G){var t=e.U++,n=Dd(e.F);jd(n,"SID",e.I),jd(n,"RID",t),jd(n,"TYPE","terminate"),Fh(e,n),(t=new pd(e,e.j,t,void 0)).K=2,t.v=Fd(Dd(n)),n=!1,mu.navigator&&mu.navigator.sendBeacon&&(n=mu.navigator.sendBeacon(t.v.toString(),"")),!n&&mu.Image&&((new Image).src=t.v,n=!0),n||(t.g=Yh(t.l,null),t.g.da(t.v)),t.F=Date.now(),xd(t)}Gh(e)}function Ah(e){e.g&&(Bh(e),e.g.cancel(),e.g=null)}function Lh(e){Ah(e),e.u&&(mu.clearTimeout(e.u),e.u=null),Hh(e),e.h.cancel(),e.m&&("number"==typeof e.m&&mu.clearTimeout(e.m),e.m=null)}function Mh(e){th(e.h)||e.m||(e.m=!0,Ac(e.Ja,e),e.C=0)}function jh(e,t){var n;n=t?t.m:e.U++;const r=Dd(e.F);jd(r,"SID",e.I),jd(r,"RID",n),jd(r,"AID",e.T),Fh(e,r),e.o&&e.s&&Nh(r,e.o,e.s),n=new pd(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Uh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ih(e.h,n),bd(n,r,t)}function Fh(e,t){e.ia&&sc(e.ia,(function(e,n){jd(t,n,e)})),e.l&&Nd({},(function(e,n){jd(t,n,e)}))}function Uh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ku(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=t,0>n)t=Math.max(0,i[s].h-100),o=!1;else try{uh(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function zh(e){e.g||e.u||(e.Z=1,Ac(e.Ia,e),e.A=0)}function Vh(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=rd(ku(e.Ia,e),Wh(e,e.A)),e.A++,!0)}function Bh(e){null!=e.B&&(mu.clearTimeout(e.B),e.B=null)}function $h(e){e.g=new pd(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Dd(e.sa);jd(t,"RID","rpc"),jd(t,"SID",e.I),jd(t,"CI",e.L?"0":"1"),jd(t,"AID",e.T),jd(t,"TYPE","xmlhttp"),Fh(e,t),e.o&&e.s&&Nh(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Fd(Dd(t)),n.s=null,n.P=!0,wd(n,e)}function Hh(e){null!=e.v&&(mu.clearTimeout(e.v),e.v=null)}function qh(e,t){var n=null;if(e.g==t){Hh(e),Bh(e),e.g=null;var r=2}else{if(!rh(e.h,t))return;n=t.D,oh(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;_c(r=Xc(),new nd(r,n)),Mh(e)}else zh(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(nh(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=rd(ku(e.Ja,e,t),Wh(e,e.C)),e.C++,0)))}(e,t)||2==r&&Vh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Kh(e,5);break;case 4:Kh(e,10);break;case 3:Kh(e,6);break;default:Kh(e,2)}}function Wh(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Kh(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=ku(e.kb,e);n||(n=new Rd("//www.google.com/images/cleardot.gif"),mu.location&&"http"==mu.location.protocol||Ad(n,"https"),Fd(n)),function(e,t){const n=new Kc;if(mu.Image){const r=new Image;r.onload=xu(ch,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xu(ch,n,r,"TestLoadImage: error",!1,t),r.onabort=xu(ch,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xu(ch,n,r,"TestLoadImage: timeout",!1,t),mu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else td(2);e.G=0,e.l&&e.l.va(t),Gh(e),Lh(e)}function Gh(e){if(e.G=0,e.la=[],e.l){const t=sh(e.h);0==t.length&&0==e.i.length||(Ou(e.la,t),Ou(e.la,e.i),e.h.i.length=0,Iu(e.i),e.i.length=0),e.l.ua()}}function Qh(e,t,n){var r=n instanceof Rd?Dd(n):new Rd(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ld(r,r.m);else{var i=mu.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Rd(null,void 0);r&&Ad(o,r),t&&(o.g=t),i&&Ld(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&jd(r,n,t),jd(r,"VER",e.ma),Fh(e,r),r}function Yh(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new yh(new dh({jb:!0})):new yh(e.ra)).Ka(e.H),t}function Xh(){}function Jh(){if(zu&&!(10<=Number(Zu)))throw Error("Environmental error: no available transport.")}function Zh(e,t){Tc.call(this),this.g=new Rh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ru(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ru(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new nf(this)}function ef(e){dd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function tf(){hd.call(this),this.status=1}function nf(e){this.g=e}(du=yh.prototype).Ka=function(e){this.L=e},du.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ud.g(),this.C=this.u?ad(this.u):ad(ud),this.g.onreadystatechange=ku(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Eh(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=mu.FormData&&e instanceof mu.FormData,!(0<=Cu(Sh,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_h(this),0<this.B&&((this.K=function(e){return zu&&Xu()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ku(this.qa,this)):this.A=zc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Eh(this,e)}},du.qa=function(){void 0!==pu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_c(this,"timeout"),this.abort(8))},du.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_c(this,"complete"),_c(this,"abort"),Th(this))},du.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Th(this,!0)),yh.X.M.call(this)},du.Ha=function(){this.s||(this.F||this.v||this.l?xh(this):this.fb())},du.fb=function(){xh(this)},du.aa=function(){try{return 2<Ch(this)?this.g.status:-1}catch(e){return-1}},du.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},du.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),vh(t)}},du.Ea=function(){return this.m},du.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(du=Rh.prototype).ma=8,du.G=1,du.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new pd(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=ac(o),uc(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Uh(this,i,t),jd(n=Dd(this.F),"RID",e),jd(n,"CVER",22),this.D&&jd(n,"X-HTTP-Session-Id",this.D),Fh(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(Oh(o)))+"&"+t:this.o&&Nh(n,this.o,o)),ih(this.h,i),this.Ya&&jd(n,"TYPE","init"),this.O?(jd(n,"$req",t),jd(n,"SID","null"),i.Z=!0,bd(i,n,null)):bd(i,n,t),this.G=2}}else 3==this.G&&(e?jh(this,e):0==this.i.length||th(this.h)||jh(this))},du.Ia=function(){if(this.u=null,$h(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=rd(ku(this.eb,this),e)}},du.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,td(10),Ah(this),$h(this))},du.cb=function(){null!=this.v&&(this.v=null,Ah(this),Vh(this),td(19))},du.kb=function(e){e?(this.j.info("Successfully pinged google.com"),td(2)):(this.j.info("Failed to ping google.com"),td(1))},(du=Xh.prototype).xa=function(){},du.wa=function(){},du.va=function(){},du.ua=function(){},du.Ra=function(){},Jh.prototype.g=function(e,t){return new Zh(e,t)},Tu(Zh,Tc),Zh.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;td(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Qh(e,null,e.V),Mh(e)},Zh.prototype.close=function(){Dh(this.g)},Zh.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ic(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Mh(t)},Zh.prototype.M=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,Zh.X.M.call(this)},Tu(ef,dd),Tu(tf,hd),Tu(nf,Xh),nf.prototype.xa=function(){_c(this.g,"a")},nf.prototype.wa=function(e){_c(this.g,new ef(e))},nf.prototype.va=function(e){_c(this.g,new tf)},nf.prototype.ua=function(){_c(this.g,"b")},Jh.prototype.createWebChannel=Jh.prototype.g,Zh.prototype.send=Zh.prototype.u,Zh.prototype.open=Zh.prototype.m,Zh.prototype.close=Zh.prototype.close,id.NO_ERROR=0,id.TIMEOUT=8,id.HTTP_ERROR=6,od.COMPLETE="complete",ld.EventType=cd,cd.OPEN="a",cd.CLOSE="b",cd.ERROR="c",cd.MESSAGE="d",Tc.prototype.listen=Tc.prototype.N,yh.prototype.listenOnce=yh.prototype.O,yh.prototype.getLastError=yh.prototype.Oa,yh.prototype.getLastErrorCode=yh.prototype.Ea,yh.prototype.getStatus=yh.prototype.aa,yh.prototype.getResponseJson=yh.prototype.Sa,yh.prototype.getResponseText=yh.prototype.fa,yh.prototype.send=yh.prototype.da,yh.prototype.setWithCredentials=yh.prototype.Ka;var rf=fu.createWebChannelTransport=function(){return new Jh},of=fu.getStatEventTarget=function(){return Xc()},sf=fu.ErrorCode=id,af=fu.EventType=od,lf=fu.Event=Qc,uf=fu.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},cf=fu.FetchXmlHttpFactory=dh,df=fu.WebChannel=ld,hf=fu.XhrIo=yh;const ff="@firebase/firestore";
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
 */class pf{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pf.UNAUTHENTICATED=new pf(null),pf.GOOGLE_CREDENTIALS=new pf("google-credentials-uid"),pf.FIRST_PARTY=new pf("first-party-uid"),pf.MOCK_USER=new pf("mock-user");
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
let mf="9.19.0";
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
 */const gf=new vl("@firebase/firestore");function vf(){return gf.logLevel}function yf(e,...t){if(gf.logLevel<=dl.DEBUG){const n=t.map(Sf);gf.debug(`Firestore (${mf}): ${e}`,...n)}}function bf(e,...t){if(gf.logLevel<=dl.ERROR){const n=t.map(Sf);gf.error(`Firestore (${mf}): ${e}`,...n)}}function wf(e,...t){if(gf.logLevel<=dl.WARN){const n=t.map(Sf);gf.warn(`Firestore (${mf}): ${e}`,...n)}}function Sf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function Ef(e="Unexpected state"){const t=`FIRESTORE (${mf}) INTERNAL ASSERTION FAILED: `+e;throw bf(t),new Error(t)}function kf(e,t){e||Ef()}function xf(e,t){return e}
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
 */const Tf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _f extends Ba{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Cf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class If{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Of{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pf.UNAUTHENTICATED)))}shutdown(){}}class Nf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Pf{constructor(e){this.t=e,this.currentUser=pf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Cf;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cf,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{yf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(yf("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cf)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(yf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(kf("string"==typeof t.accessToken),new If(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return kf(null===e||"string"==typeof e),new pf(e)}}class Rf{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=pf.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Df{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Rf(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(pf.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Af{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lf{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&yf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,yf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{yf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):yf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(kf("string"==typeof e.token),this.T=e.token,new Af(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Mf(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class jf{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Mf(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ff(e,t){return e<t?-1:e>t?1:0}function Uf(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class zf{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _f(Tf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _f(Tf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _f(Tf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _f(Tf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return zf.fromMillis(Date.now())}static fromDate(e){return zf.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new zf(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ff(this.nanoseconds,e.nanoseconds):Ff(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Vf{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Vf(e)}static min(){return new Vf(new zf(0,0))}static max(){return new Vf(new zf(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Bf{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ef(),void 0===n?n=e.length-t:n>e.length-t&&Ef(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Bf.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bf?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $f extends Bf{construct(e,t,n){return new $f(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new _f(Tf.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new $f(t)}static emptyPath(){return new $f([])}}const Hf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qf extends Bf{construct(e,t,n){return new qf(e,t,n)}static isValidIdentifier(e){return Hf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qf.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new qf(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _f(Tf.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new _f(Tf.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new _f(Tf.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new _f(Tf.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qf(t)}static emptyPath(){return new qf([])}}
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
 */class Wf{constructor(e){this.path=e}static fromPath(e){return new Wf($f.fromString(e))}static fromName(e){return new Wf($f.fromString(e).popFirst(5))}static empty(){return new Wf($f.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===$f.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $f.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wf(new $f(e.slice()))}}
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
 */class Kf{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Kf.UNKNOWN_ID=-1;function Gf(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Vf.fromTimestamp(1e9===r?new zf(n+1,0):new zf(n,r));return new Yf(i,Wf.empty(),t)}function Qf(e){return new Yf(e.readTime,e.key,-1)}class Yf{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Yf(Vf.min(),Wf.empty(),-1)}static max(){return new Yf(Vf.max(),Wf.empty(),-1)}}function Xf(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Wf.comparator(e.documentKey,t.documentKey),0!==n?n:Ff(e.largestBatchId,t.largestBatchId))}
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
 */const Jf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function ep(e){if(e.code!==Tf.FAILED_PRECONDITION||e.message!==Jf)throw e;yf("LocalStore","Unexpectedly lost primary lease")}
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
 */class tp{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ef(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tp(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof tp?t:tp.resolve(t)}catch(e){return tp.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):tp.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):tp.reject(t)}static resolve(e){return new tp(((t,n)=>{t(e)}))}static reject(e){return new tp(((t,n)=>{n(e)}))}static waitFor(e){return new tp(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=tp.resolve(!1);for(const n of e)t=t.next((e=>e?tp.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new tp(((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{o[l]=e,++s,s===i&&n(o)}),(e=>r(e)))}}))}static doWhile(e,t){return new tp(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */function np(e){return"IndexedDbTransactionError"===e.name}
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
class rp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ip(e){return null==e}function op(e){return 0===e&&1/e==-1/0}function sp(e){return"number"==typeof e&&Number.isInteger(e)&&!op(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */rp.ct=-1;const ap=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],lp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],up=lp;
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
function cp(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function dp(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function hp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class fp{constructor(e,t){this.comparator=e,this.root=t||mp.EMPTY}insert(e,t){return new fp(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,mp.BLACK,null,null))}remove(e){return new fp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mp.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pp(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pp(this.root,e,this.comparator,!1)}getReverseIterator(){return new pp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pp(this.root,e,this.comparator,!0)}}class pp{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mp{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:mp.RED,this.left=null!=r?r:mp.EMPTY,this.right=null!=i?i:mp.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new mp(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return mp.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return mp.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mp.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mp.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ef();if(this.right.isRed())throw Ef();const e=this.left.check();if(e!==this.right.check())throw Ef();return e+(this.isRed()?0:1)}}mp.EMPTY=null,mp.RED=!0,mp.BLACK=!1,mp.EMPTY=new class{constructor(){this.size=0}get key(){throw Ef()}get value(){throw Ef()}get color(){throw Ef()}get left(){throw Ef()}get right(){throw Ef()}copy(e,t,n,r,i){return this}insert(e,t,n){return new mp(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class gp{constructor(e){this.comparator=e,this.data=new fp(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vp(this.data.getIterator())}getIteratorFrom(e){return new vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof gp))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gp(this.comparator);return t.data=e,t}}class vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class yp{constructor(e){this.fields=e,e.sort(qf.comparator)}static empty(){return new yp([])}unionWith(e){let t=new gp(qf.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new yp(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uf(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class wp{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new bp("Invalid base64 string: "+e):e}}(e);return new wp(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new wp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ff(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wp.EMPTY_BYTE_STRING=new wp("");const Sp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ep(e){if(kf(!!e),"string"==typeof e){let t=0;const n=Sp.exec(e);if(kf(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:kp(e.seconds),nanos:kp(e.nanos)}}function kp(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xp(e){return"string"==typeof e?wp.fromBase64String(e):wp.fromUint8Array(e)}
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
 */function Tp(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _p(e){const t=e.mapValue.fields.__previous_value__;return Tp(t)?_p(t):t}function Cp(e){const t=Ep(e.mapValue.fields.__local_write_time__.timestampValue);return new zf(t.seconds,t.nanos)}
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
 */class Ip{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Op{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Op("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Op&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Np={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pp(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tp(e)?4:qp(e)?9007199254740991:10:Ef()}function Rp(e,t){if(e===t)return!0;const n=Pp(e);if(n!==Pp(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Cp(e).isEqual(Cp(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ep(e.timestampValue),r=Ep(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return xp(e.bytesValue).isEqual(xp(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return kp(e.geoPointValue.latitude)===kp(t.geoPointValue.latitude)&&kp(e.geoPointValue.longitude)===kp(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return kp(e.integerValue)===kp(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=kp(e.doubleValue),r=kp(t.doubleValue);return n===r?op(n)===op(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Uf(e.arrayValue.values||[],t.arrayValue.values||[],Rp);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(cp(n)!==cp(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Rp(n[e],r[e])))return!1;return!0}(e,t);default:return Ef()}}function Dp(e,t){return void 0!==(e.values||[]).find((e=>Rp(e,t)))}function Ap(e,t){if(e===t)return 0;const n=Pp(e),r=Pp(t);if(n!==r)return Ff(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ff(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=kp(e.integerValue||e.doubleValue),r=kp(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Lp(e.timestampValue,t.timestampValue);case 4:return Lp(Cp(e),Cp(t));case 5:return Ff(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xp(e),r=xp(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ff(n[e],r[e]);if(0!==t)return t}return Ff(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ff(kp(e.latitude),kp(t.latitude));return 0!==n?n:Ff(kp(e.longitude),kp(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Ap(n[e],r[e]);if(t)return t}return Ff(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Np.mapValue&&t===Np.mapValue)return 0;if(e===Np.mapValue)return 1;if(t===Np.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let e=0;e<r.length&&e<o.length;++e){const t=Ff(r[e],o[e]);if(0!==t)return t;const s=Ap(n[r[e]],i[o[e]]);if(0!==s)return s}return Ff(r.length,o.length)}(e.mapValue,t.mapValue);default:throw Ef()}}function Lp(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ff(e,t);const n=Ep(e),r=Ep(t),i=Ff(n.seconds,r.seconds);return 0!==i?i:Ff(n.nanos,r.nanos)}function Mp(e){return jp(e)}function jp(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ep(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xp(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Wf.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=jp(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${jp(e.fields[i])}`;return n+"}"}(e.mapValue):Ef()}function Fp(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Up(e){return!!e&&"integerValue"in e}function zp(e){return!!e&&"arrayValue"in e}function Vp(e){return!!e&&"nullValue"in e}function Bp(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $p(e){return!!e&&"mapValue"in e}function Hp(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return dp(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Hp(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Hp(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qp(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Wp{constructor(e){this.value=e}static empty(){return new Wp({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$p(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hp(t)}setAll(e){let t=qf.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Hp(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());$p(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rp(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];$p(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){dp(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Wp(Hp(this.value))}}function Kp(e){const t=[];return dp(e.fields,((e,n)=>{const r=new qf([e]);if($p(n)){const e=Kp(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new yp(t)
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
 */}class Gp{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Gp(e,0,Vf.min(),Vf.min(),Vf.min(),Wp.empty(),0)}static newFoundDocument(e,t,n,r){return new Gp(e,1,t,Vf.min(),n,r,0)}static newNoDocument(e,t){return new Gp(e,2,t,Vf.min(),Vf.min(),Wp.empty(),0)}static newUnknownDocument(e,t){return new Gp(e,3,t,Vf.min(),Vf.min(),Wp.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Vf.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wp.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vf.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Gp&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gp(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Qp{constructor(e,t){this.position=e,this.inclusive=t}}function Yp(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?Wf.comparator(Wf.fromName(s.referenceValue),n.key):Ap(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Xp(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Rp(e.position[n],t.position[n]))return!1;return!0}
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
 */class Jp{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class em{}class tm extends em{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new um(e,t,n):"array-contains"===t?new fm(e,n):"in"===t?new pm(e,n):"not-in"===t?new mm(e,n):"array-contains-any"===t?new gm(e,n):new tm(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new cm(e,n):new dm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ap(t,this.value)):null!==t&&Pp(this.value)===Pp(t)&&this.matchesComparison(Ap(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ef()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class nm extends em{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new nm(e,t)}matches(e){return rm(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function rm(e){return"and"===e.op}function im(e){return om(e)&&rm(e)}function om(e){for(const t of e.filters)if(t instanceof nm)return!1;return!0}function sm(e){if(e instanceof tm)return e.field.canonicalString()+e.op.toString()+Mp(e.value);if(im(e))return e.filters.map((e=>sm(e))).join(",");{const t=e.filters.map((e=>sm(e))).join(",");return`${e.op}(${t})`}}function am(e,t){return e instanceof tm?function(e,t){return t instanceof tm&&e.op===t.op&&e.field.isEqual(t.field)&&Rp(e.value,t.value)}(e,t):e instanceof nm?function(e,t){return t instanceof nm&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&am(n,t.filters[r])),!0)}(e,t):void Ef()}function lm(e){return e instanceof tm?function(e){return`${e.field.canonicalString()} ${e.op} ${Mp(e.value)}`}(e):e instanceof nm?function(e){return e.op.toString()+" {"+e.getFilters().map(lm).join(" ,")+"}"}(e):"Filter"}class um extends tm{constructor(e,t,n){super(e,t,n),this.key=Wf.fromName(n.referenceValue)}matches(e){const t=Wf.comparator(e.key,this.key);return this.matchesComparison(t)}}class cm extends tm{constructor(e,t){super(e,"in",t),this.keys=hm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dm extends tm{constructor(e,t){super(e,"not-in",t),this.keys=hm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hm(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Wf.fromName(e.referenceValue)))}class fm extends tm{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zp(t)&&Dp(t.arrayValue,this.value)}}class pm extends tm{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Dp(this.value.arrayValue,t)}}class mm extends tm{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dp(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Dp(this.value.arrayValue,t)}}class gm extends tm{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Dp(this.value.arrayValue,e)))}}
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
 */class vm{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ft=null}}function ym(e,t=null,n=[],r=[],i=null,o=null,s=null){return new vm(e,t,n,r,i,o,s)}function bm(e){const t=xf(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>sm(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ip(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Mp(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Mp(e))).join(",")),t.ft=e}return t.ft}function wm(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Zp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!am(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xp(e.startAt,t.startAt)&&Xp(e.endAt,t.endAt)}function Sm(e){return Wf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Em{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function km(e,t,n,r,i,o,s,a){return new Em(e,t,n,r,i,o,s,a)}function xm(e){return new Em(e)}function Tm(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _m(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Cm(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Im(e){return null!==e.collectionGroup}function Om(e){const t=xf(e);if(null===t.dt){t.dt=[];const e=Cm(t),n=_m(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Jp(e)),t.dt.push(new Jp(qf.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Jp(qf.keyField(),e))}}}return t.dt}function Nm(e){const t=xf(e);if(!t.wt)if("F"===t.limitType)t.wt=ym(t.path,t.collectionGroup,Om(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Om(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Jp(n.field,t))}const n=t.endAt?new Qp(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qp(t.startAt.position,t.startAt.inclusive):null;t.wt=ym(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Pm(e,t){t.getFirstInequalityField(),Cm(e);const n=e.filters.concat([t]);return new Em(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Rm(e,t,n){return new Em(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dm(e,t){return wm(Nm(e),Nm(t))&&e.limitType===t.limitType}function Am(e){return`${bm(Nm(e))}|lt:${e.limitType}`}function Lm(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>lm(e))).join(", ")}]`),ip(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Mp(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Mp(e))).join(",")),`Target(${t})`}(Nm(e))}; limitType=${e.limitType})`}function Mm(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Wf.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Om(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Yp(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Om(e),t))&&!(e.endAt&&!function(e,t,n){const r=Yp(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Om(e),t))}(e,t)}function jm(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fm(e){return(t,n)=>{let r=!1;for(const i of Om(e)){const e=Um(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Um(e,t,n){const r=e.field.isKeyField()?Wf.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ap(r,i):Ef()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ef()}}
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
 */class zm{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dp(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return hp(this.inner)}size(){return this.innerSize}}
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
 */const Vm=new fp(Wf.comparator);function Bm(){return Vm}const $m=new fp(Wf.comparator);function Hm(...e){let t=$m;for(const n of e)t=t.insert(n.key,n);return t}function qm(e){let t=$m;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Wm(){return Gm()}function Km(){return Gm()}function Gm(){return new zm((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Qm=new fp(Wf.comparator),Ym=new gp(Wf.comparator);function Xm(...e){let t=Ym;for(const n of e)t=t.add(n);return t}const Jm=new gp(Ff);function Zm(){return Jm}
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
 */function eg(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:op(t)?"-0":t}}function tg(e){return{integerValue:""+e}}function ng(e,t){return sp(t)?tg(t):eg(e,t)}
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
 */class rg{constructor(){this._=void 0}}function ig(e,t,n){return e instanceof ag?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof lg?ug(e,t):e instanceof cg?dg(e,t):function(e,t){const n=sg(e,t),r=fg(n)+fg(e._t);return Up(n)&&Up(e._t)?tg(r):eg(e.serializer,r)}(e,t)}function og(e,t,n){return e instanceof lg?ug(e,t):e instanceof cg?dg(e,t):n}function sg(e,t){var n;return e instanceof hg?Up(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class ag extends rg{}class lg extends rg{constructor(e){super(),this.elements=e}}function ug(e,t){const n=pg(t);for(const t of e.elements)n.some((e=>Rp(e,t)))||n.push(t);return{arrayValue:{values:n}}}class cg extends rg{constructor(e){super(),this.elements=e}}function dg(e,t){let n=pg(t);for(const t of e.elements)n=n.filter((e=>!Rp(e,t)));return{arrayValue:{values:n}}}class hg extends rg{constructor(e,t){super(),this.serializer=e,this._t=t}}function fg(e){return kp(e.integerValue||e.doubleValue)}function pg(e){return zp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class mg{constructor(e,t){this.version=e,this.transformResults=t}}class gg{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gg}static exists(e){return new gg(void 0,e)}static updateTime(e){return new gg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vg(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yg{}function bg(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Og(e.key,gg.none()):new xg(e.key,e.data,gg.none());{const n=e.data,r=Wp.empty();let i=new gp(qf.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Tg(e.key,r,new yp(i.toArray()),gg.none())}}function wg(e,t,n){e instanceof xg?function(e,t,n){const r=e.value.clone(),i=Cg(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Tg?function(e,t,n){if(!vg(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Cg(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(_g(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Sg(e,t,n,r){return e instanceof xg?function(e,t,n,r){if(!vg(e.precondition,t))return n;const i=e.value.clone(),o=Ig(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Tg?function(e,t,n,r){if(!vg(e.precondition,t))return n;const i=Ig(e.fieldTransforms,r,t),o=t.data;return o.setAll(_g(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return vg(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Eg(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=sg(r.transform,e||null);null!=i&&(null===n&&(n=Wp.empty()),n.set(r.field,i))}return n||null}function kg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Uf(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof lg&&t instanceof lg||e instanceof cg&&t instanceof cg?Uf(e.elements,t.elements,Rp):e instanceof hg&&t instanceof hg?Rp(e._t,t._t):e instanceof ag&&t instanceof ag}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xg extends yg{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tg extends yg{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _g(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Cg(e,t,n){const r=new Map;kf(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,og(s,a,n[i]))}return r}function Ig(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,ig(e,o,t))}return r}class Og extends yg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ng extends yg{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Pg{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&wg(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Sg(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Sg(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Km();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=bg(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Vf.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Xm())}isEqual(e){return this.batchId===e.batchId&&Uf(this.mutations,e.mutations,((e,t)=>kg(e,t)))&&Uf(this.baseMutations,e.baseMutations,((e,t)=>kg(e,t)))}}class Rg{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){kf(e.mutations.length===n.length);let r=Qm;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Rg(e,t,n,r)}}
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
 */class Dg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Ag{constructor(e){this.count=e}}
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
 */var Lg,Mg;function jg(e){switch(e){default:return Ef();case Tf.CANCELLED:case Tf.UNKNOWN:case Tf.DEADLINE_EXCEEDED:case Tf.RESOURCE_EXHAUSTED:case Tf.INTERNAL:case Tf.UNAVAILABLE:case Tf.UNAUTHENTICATED:return!1;case Tf.INVALID_ARGUMENT:case Tf.NOT_FOUND:case Tf.ALREADY_EXISTS:case Tf.PERMISSION_DENIED:case Tf.FAILED_PRECONDITION:case Tf.ABORTED:case Tf.OUT_OF_RANGE:case Tf.UNIMPLEMENTED:case Tf.DATA_LOSS:return!0}}function Fg(e){if(void 0===e)return bf("GRPC error has no .code"),Tf.UNKNOWN;switch(e){case Lg.OK:return Tf.OK;case Lg.CANCELLED:return Tf.CANCELLED;case Lg.UNKNOWN:return Tf.UNKNOWN;case Lg.DEADLINE_EXCEEDED:return Tf.DEADLINE_EXCEEDED;case Lg.RESOURCE_EXHAUSTED:return Tf.RESOURCE_EXHAUSTED;case Lg.INTERNAL:return Tf.INTERNAL;case Lg.UNAVAILABLE:return Tf.UNAVAILABLE;case Lg.UNAUTHENTICATED:return Tf.UNAUTHENTICATED;case Lg.INVALID_ARGUMENT:return Tf.INVALID_ARGUMENT;case Lg.NOT_FOUND:return Tf.NOT_FOUND;case Lg.ALREADY_EXISTS:return Tf.ALREADY_EXISTS;case Lg.PERMISSION_DENIED:return Tf.PERMISSION_DENIED;case Lg.FAILED_PRECONDITION:return Tf.FAILED_PRECONDITION;case Lg.ABORTED:return Tf.ABORTED;case Lg.OUT_OF_RANGE:return Tf.OUT_OF_RANGE;case Lg.UNIMPLEMENTED:return Tf.UNIMPLEMENTED;case Lg.DATA_LOSS:return Tf.DATA_LOSS;default:return Ef()}}(Mg=Lg||(Lg={}))[Mg.OK=0]="OK",Mg[Mg.CANCELLED=1]="CANCELLED",Mg[Mg.UNKNOWN=2]="UNKNOWN",Mg[Mg.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mg[Mg.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mg[Mg.NOT_FOUND=5]="NOT_FOUND",Mg[Mg.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mg[Mg.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mg[Mg.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mg[Mg.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mg[Mg.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mg[Mg.ABORTED=10]="ABORTED",Mg[Mg.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mg[Mg.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mg[Mg.INTERNAL=13]="INTERNAL",Mg[Mg.UNAVAILABLE=14]="UNAVAILABLE",Mg[Mg.DATA_LOSS=15]="DATA_LOSS";
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
 */
class Ug{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return zg}static getOrCreateInstance(){return null===zg&&(zg=new Ug),zg}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let zg=null;
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
 */class Vg{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Bg.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vg(Vf.min(),r,Zm(),Bm(),Xm())}}class Bg{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bg(n,t,Xm(),Xm(),Xm())}}
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
 */class $g{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Hg{constructor(e,t){this.targetId=e,this.Et=t}}class qg{constructor(e,t,n=wp.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Wg{constructor(){this.At=0,this.Rt=Qg(),this.vt=wp.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Xm(),t=Xm(),n=Xm();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ef()}})),new Bg(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=Qg()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Kg{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Bm(),this.qt=Gg(),this.Ut=new gp(Ff)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Ef()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const o=i.target;if(Sm(o))if(0===r){const e=new Wf(o.path);this.Qt(n,e,Gp.newNoDocument(e,Vf.min()))}else kf(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Ug.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Sm(i.target)){const t=new Wf(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Gp.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Xm();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Vg(e,t,this.Ut,this.Lt,n);return this.Lt=Bm(),this.qt=Gg(),this.Ut=new gp(Ff),r}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Wg,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new gp(Ff),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||yf("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Wg),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Gg(){return new fp(Wf.comparator)}function Qg(){return new fp(Wf.comparator)}
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
 */const Yg={asc:"ASCENDING",desc:"DESCENDING"},Xg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jg={and:"AND",or:"OR"};class Zg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ev(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nv(e,t){return ev(e,t.toTimestamp())}function rv(e){return kf(!!e),Vf.fromTimestamp(function(e){const t=Ep(e);return new zf(t.seconds,t.nanos)}(e))}function iv(e,t){return function(e){return new $f(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ov(e){const t=$f.fromString(e);return kf(Tv(t)),t}function sv(e,t){return iv(e.databaseId,t.path)}function av(e,t){const n=ov(t);if(n.get(1)!==e.databaseId.projectId)throw new _f(Tf.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _f(Tf.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Wf(dv(n))}function lv(e,t){return iv(e.databaseId,t)}function uv(e){const t=ov(e);return 4===t.length?$f.emptyPath():dv(t)}function cv(e){return new $f(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dv(e){return kf(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function hv(e,t,n){return{name:sv(e,t),fields:n.value.mapValue.fields}}function fv(e,t){let n;if(t instanceof xg)n={update:hv(e,t.key,t.value)};else if(t instanceof Og)n={delete:sv(e,t.key)};else if(t instanceof Tg)n={update:hv(e,t.key,t.data),updateMask:xv(t.fieldMask)};else{if(!(t instanceof Ng))return Ef();n={verify:sv(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ag)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof lg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hg)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Ef()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:nv(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ef()}(e,t.precondition)),n}function pv(e,t){return{documents:[lv(e,t.path)]}}function mv(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=lv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=lv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return kv(nm.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Sv(e.field),direction:yv(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.useProto3Json||ip(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function gv(e){let t=uv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){kf(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=vv(e);return t instanceof nm&&im(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>function(e){return new Jp(Ev(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ip(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Qp(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Qp(n,t)}(n.endAt)),km(t,i,s,o,a,"F",l,u)}function vv(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ev(e.unaryFilter.field);return tm.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ev(e.unaryFilter.field);return tm.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ev(e.unaryFilter.field);return tm.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ev(e.unaryFilter.field);return tm.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ef()}}(e):void 0!==e.fieldFilter?function(e){return tm.create(Ev(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ef()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return nm.create(e.compositeFilter.filters.map((e=>vv(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ef()}}(e.compositeFilter.op))}(e):Ef()}function yv(e){return Yg[e]}function bv(e){return Xg[e]}function wv(e){return Jg[e]}function Sv(e){return{fieldPath:e.canonicalString()}}function Ev(e){return qf.fromServerFormat(e.fieldPath)}function kv(e){return e instanceof tm?function(e){if("=="===e.op){if(Bp(e.value))return{unaryFilter:{field:Sv(e.field),op:"IS_NAN"}};if(Vp(e.value))return{unaryFilter:{field:Sv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Bp(e.value))return{unaryFilter:{field:Sv(e.field),op:"IS_NOT_NAN"}};if(Vp(e.value))return{unaryFilter:{field:Sv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sv(e.field),op:bv(e.op),value:e.value}}}(e):e instanceof nm?function(e){const t=e.getFilters().map((e=>kv(e)));return 1===t.length?t[0]:{compositeFilter:{op:wv(e.op),filters:t}}}(e):Ef()}function xv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Tv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class _v{constructor(e,t,n,r,i=Vf.min(),o=Vf.min(),s=wp.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new _v(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new _v(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _v(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Cv{constructor(e){this.se=e}}function Iv(e){const t=gv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Rm(t,t.limit,"L"):t}
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
 */class Ov{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(kp(e.integerValue));else if("doubleValue"in e){const n=kp(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),op(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(xp(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?qp(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Ef()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Wf.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}Ov.pe=new Ov;
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
class Nv{constructor(){this.He=new Pv}addToCollectionParentIndex(e,t){return this.He.add(t),tp.resolve()}getCollectionParents(e,t){return tp.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return tp.resolve()}deleteFieldIndex(e,t){return tp.resolve()}getDocumentsMatchingTarget(e,t){return tp.resolve(null)}getIndexType(e,t){return tp.resolve(0)}getFieldIndexes(e,t){return tp.resolve([])}getNextCollectionGroupToUpdate(e){return tp.resolve(null)}getMinOffset(e,t){return tp.resolve(Yf.min())}getMinOffsetFromCollectionGroup(e,t){return tp.resolve(Yf.min())}updateCollectionGroup(e,t,n){return tp.resolve()}updateIndexEntries(e,t){return tp.resolve()}}class Pv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new gp($f.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new gp($f.comparator)).toArray()}}
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
 */new Uint8Array(0);class Rv{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Rv(e,Rv.DEFAULT_COLLECTION_PERCENTILE,Rv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Rv.DEFAULT_COLLECTION_PERCENTILE=10,Rv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rv.DEFAULT=new Rv(41943040,Rv.DEFAULT_COLLECTION_PERCENTILE,Rv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rv.DISABLED=new Rv(-1,0,0);
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
class Dv{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Dv(0)}static bn(){return new Dv(-1)}}
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
class Av{constructor(){this.changes=new zm((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gp.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?tp.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Lv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Mv{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Sg(n.mutation,e,yp.empty(),zf.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Xm()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Xm()){const r=Wm();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Hm();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Wm();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Xm())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Bm();const o=Gm(),s=Gm();return t.forEach(((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof Tg)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),Sg(s.mutation,t,s.mutation.getFieldMask(),zf.now())):o.set(t.key,yp.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return s.set(e,new Lv(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(e,t){const n=Gm();let r=new fp(((e,t)=>e-t)),i=Xm();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||yp.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Xm()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,l=r.value,u=Km();l.forEach((e=>{if(!i.has(e)){const r=bg(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return tp.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Wf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Im(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):tp.resolve(Wm());let s=-1,a=i;return o.next((t=>tp.forEach(t,((t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?tp.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Xm()))).next((e=>({batchId:s,changes:qm(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Wf(t)).next((e=>{let t=Hm();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Hm();return this.indexManager.getCollectionParents(e,r).next((o=>tp.forEach(o,(o=>{const s=function(e,t){return new Em(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Gp.newInvalidDocument(r)))}));let n=Hm();return e.forEach(((e,i)=>{const o=r.get(e);void 0!==o&&Sg(o.mutation,i,yp.empty(),zf.now()),Mm(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class jv{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return tp.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:rv(n.createTime)}),tp.resolve()}getNamedQuery(e,t){return tp.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Iv(e.bundledQuery),readTime:rv(e.readTime)}}(t)),tp.resolve()}}
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
 */class Fv{constructor(){this.overlays=new fp(Wf.comparator),this.ts=new Map}getOverlay(e,t){return tp.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Wm();return tp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),tp.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),tp.resolve()}getOverlaysForCollection(e,t,n){const r=Wm(),i=t.length+1,o=new Wf(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return tp.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new fp(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Wm(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Wm(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>s.set(e,t))),!(s.size()>=r)););return tp.resolve(s)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Dg(t,n));let i=this.ts.get(t);void 0===i&&(i=Xm(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}}
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
 */class Uv{constructor(){this.es=new gp(zv.ns),this.ss=new gp(zv.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new zv(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new zv(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Wf(new $f([])),n=new zv(t,e),r=new zv(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Wf(new $f([])),n=new zv(t,e),r=new zv(t,e+1);let i=Xm();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new zv(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class zv{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return Wf.comparator(e.key,t.key)||Ff(e.ds,t.ds)}static rs(e,t){return Ff(e.ds,t.ds)||Wf.comparator(e.key,t.key)}}
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
 */class Vv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new gp(zv.ns)}checkEmpty(e){return tp.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pg(i,t,n,r);this.mutationQueue.push(o);for(const t of r)this._s=this._s.add(new zv(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return tp.resolve(o)}lookupMutationBatch(e,t){return tp.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return tp.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return tp.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return tp.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new zv(t,0),r=new zv(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),tp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new gp(Ff);return t.forEach((e=>{const t=new zv(e,0),r=new zv(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),tp.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Wf.isDocumentKey(i)||(i=i.child(""));const o=new zv(new Wf(i),0);let s=new gp(Ff);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.ds)),!0)}),o),tp.resolve(this.ps(s))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){kf(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return tp.forEach(t.mutations,(r=>{const i=new zv(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new zv(t,0),r=this._s.firstAfterOrEqual(n);return tp.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,tp.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Bv{constructor(e){this.Ts=e,this.docs=new fp(Wf.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return tp.resolve(n?n.document.mutableCopy():Gp.newInvalidDocument(t))}getEntries(e,t){let n=Bm();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Gp.newInvalidDocument(e))})),tp.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Bm();const o=t.path,s=new Wf(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:e,value:{document:s}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||Xf(Qf(s),n)<=0||(r.has(s.key)||Mm(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return tp.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ef()}Es(e,t){return tp.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new $v(this)}getSize(e){return tp.resolve(this.size)}}class $v extends Av{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),tp.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
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
 */class Hv{constructor(e){this.persistence=e,this.As=new zm((e=>bm(e)),wm),this.lastRemoteSnapshotVersion=Vf.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Uv,this.targetCount=0,this.bs=Dv.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),tp.resolve()}getLastRemoteSnapshotVersion(e){return tp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tp.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),tp.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),tp.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Dv(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,tp.resolve()}updateTargetData(e,t){return this.Sn(t),tp.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,tp.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),tp.waitFor(i).next((()=>r))}getTargetCount(e){return tp.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return tp.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),tp.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),tp.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),tp.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return tp.resolve(n)}containsKey(e,t){return tp.resolve(this.vs.containsKey(t))}}
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
 */class qv{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new rp(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Hv(this),this.indexManager=new Nv,this.remoteDocumentCache=function(e){return new Bv(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new Cv(t),this.xs=new jv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Vv(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){yf("MemoryPersistence","Starting transaction:",e);const r=new Wv(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return tp.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Wv extends Zf{constructor(e){super(),this.currentSequenceNumber=e}}class Kv{constructor(e){this.persistence=e,this.$s=new Uv,this.Ms=null}static Fs(e){return new Kv(e)}get Bs(){if(this.Ms)return this.Ms;throw Ef()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),tp.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),tp.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),tp.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tp.forEach(this.Bs,(n=>{const r=Wf.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,Vf.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return tp.or([()=>tp.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
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
class Gv{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}static Di(e,t){let n=Xm(),r=Xm();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Gv(e,t.fromCache,n,r)}}
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
 */class Qv{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(Tm(t))return tp.resolve(null);let n=Nm(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Rm(t,null,"F"),n=Nm(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Xm(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.$i(t,r);return this.Mi(t,o,i,n.readTime)?this.Ni(e,Rm(t,null,"F")):this.Fi(e,o,t,n)}))))})))))}ki(e,t,n,r){return Tm(t)||r.isEqual(Vf.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const o=this.$i(t,i);return this.Mi(t,o,n,r)?this.Oi(e,t):(vf()<=dl.DEBUG&&yf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Lm(t)),this.Fi(e,o,t,Gf(r,-1)))}))}$i(e,t){let n=new gp(Fm(e));return t.forEach(((t,r)=>{Mm(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return vf()<=dl.DEBUG&&yf("QueryEngine","Using full collection scan to execute query:",Lm(t)),this.xi.getDocumentsMatchingQuery(e,t,Yf.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class Yv{constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new fp(Ff),this.qi=new zm((e=>bm(e)),wm),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mv(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function Xv(e,t,n,r){return new Yv(e,t,n,r)}async function Jv(e,t){const n=xf(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],o=[];let s=Xm();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:o})))}))}))}function Zv(e){const t=xf(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function ey(e,t,n){let r=Xm(),i=Xm();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Bm();return n.forEach(((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Vf.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):yf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{zi:r,ji:i}}))}function ty(e,t){const n=xf(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function ny(e,t){const n=xf(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,tp.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new _v(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function ry(e,t,n){const r=xf(e),i=r.Li.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!np(e))throw e;yf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function iy(e,t,n){const r=xf(e);let i=Vf.min(),o=Xm();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=xf(e),i=r.qi.get(n);return void 0!==i?tp.resolve(r.Li.get(i)):r.Ds.getTargetData(t,n)}(r,e,Nm(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Bi.getDocumentsMatchingQuery(e,t,n?i:Vf.min(),n?o:Xm()))).next((e=>(oy(r,jm(t),e),{documents:e,Wi:o})))))}function oy(e,t,n){let r=e.Ui.get(t)||Vf.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}class sy{constructor(){this.activeTargetIds=Zm()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ay{constructor(){this.Br=new sy,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new sy,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class ly{qr(e){}shutdown(){}}
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
 */class uy{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){yf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){yf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let cy=null;function dy(){return null===cy?cy=268435456+Math.round(2147483648*Math.random()):cy++,"0x"+cy.toString(16)
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
 */}const hy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class fy{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
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
 */const py="WebChannelConnection";class my extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,r,i){const o=dy(),s=this.ao(e,t);yf("RestConnection",`Sending RPC '${e}' ${o}:`,s,n);const a={};return this.ho(a,r,i),this.lo(e,s,a,n).then((t=>(yf("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw wf("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",s,"request:",n),t}))}fo(e,t,n,r,i,o){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+mf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=hy[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){const i=dy();return new Promise(((o,s)=>{const a=new hf;a.setWithCredentials(!0),a.listenOnce(af.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case sf.NO_ERROR:const t=a.getResponseJson();yf(py,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case sf.TIMEOUT:yf(py,`RPC '${e}' ${i} timed out`),s(new _f(Tf.DEADLINE_EXCEEDED,"Request time out"));break;case sf.HTTP_ERROR:const n=a.getStatus();if(yf(py,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Tf).indexOf(t)>=0?t:Tf.UNKNOWN}(t.status);s(new _f(e,t.message))}else s(new _f(Tf.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new _f(Tf.UNAVAILABLE,"Connection failed."));break;default:Ef()}}finally{yf(py,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);yf(py,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}wo(e,t,n){const r=dy(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rf(),s=of(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new cf({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");yf(py,`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=o.createWebChannel(l,a);let c=!1,d=!1;const h=new fy({Wr:t=>{d?yf(py,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(yf(py,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),yf(py,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,df.EventType.OPEN,(()=>{d||yf(py,`RPC '${e}' stream ${r} transport opened.`)})),f(u,df.EventType.CLOSE,(()=>{d||(d=!0,yf(py,`RPC '${e}' stream ${r} transport closed`),h.so())})),f(u,df.EventType.ERROR,(t=>{d||(d=!0,wf(py,`RPC '${e}' stream ${r} transport errored:`,t),h.so(new _f(Tf.UNAVAILABLE,"The operation could not be completed")))})),f(u,df.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];kf(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){yf(py,`RPC '${e}' stream ${r} received error:`,s);const t=s.status;let n=function(e){const t=Lg[e];if(void 0!==t)return Fg(t)}(t),i=s.message;void 0===n&&(n=Tf.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,h.so(new _f(n,i)),u.close()}else yf(py,`RPC '${e}' stream ${r} received:`,i),h.io(i)}})),f(s,lf.STAT_EVENT,(t=>{t.stat===uf.PROXY?yf(py,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===uf.NOPROXY&&yf(py,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{h.no()}),0),h}}
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
 */function gy(){return"undefined"!=typeof document?document:null}
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
 */function vy(e){return new Zg(e,!0)}
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
 */class yy{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&yf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
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
 */class by{constructor(e,t,n,r,i,o,s,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new yy(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===Tf.RESOURCE_EXHAUSTED?(bf(t.toString()),bf("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===Tf.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new _f(Tf.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return yf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(yf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wy extends by{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ef()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(kf(void 0===t||"string"==typeof t),wp.fromBase64String(t||"")):(kf(void 0===t||t instanceof Uint8Array),wp.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?Tf.UNKNOWN:Fg(e.code);return new _f(t,e.message||"")}(s);n=new qg(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=av(e,r.document.name),o=rv(r.document.updateTime),s=r.document.createTime?rv(r.document.createTime):Vf.min(),a=new Wp({mapValue:{fields:r.document.fields}}),l=Gp.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new $g(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=av(e,r.document),o=r.readTime?rv(r.readTime):Vf.min(),s=Gp.newNoDocument(i,o),a=r.removedTargetIds||[];n=new $g([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=av(e,r.document),o=r.removedTargetIds||[];n=new $g([],o,i,null)}else{if(!("filter"in t))return Ef();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ag(r),o=e.targetId;n=new Hg(o,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Vf.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Vf.min():t.readTime?rv(t.readTime):Vf.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=cv(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;return n=Sm(r)?{documents:pv(e,r)}:{query:mv(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=tv(e,t.resumeToken):t.snapshotVersion.compareTo(Vf.min())>0&&(n.readTime=ev(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ef()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=cv(this.serializer),t.removeTarget=e,this.Fo(t)}}class Sy extends by{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(kf(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=function(e,t){return e&&e.length>0?(kf(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?rv(e.updateTime):rv(t);return n.isEqual(Vf.min())&&(n=rv(t)),new mg(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=rv(e.commitTime);return this.listener.Zo(n,t)}return kf(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=cv(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>fv(this.serializer,e)))};this.Fo(t)}}
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
 */class Ey extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new _f(Tf.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Tf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _f(Tf.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.fo(e,t,n,i,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Tf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new _f(Tf.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class ky{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(bf(t),this.ru=!1):yf("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
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
 */class xy{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{Dy(this)&&(yf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=xf(e);t.du.add(4),await _y(t),t.mu.set("Unknown"),t.du.delete(4),await Ty(t)}(this))}))})),this.mu=new ky(n,r)}}async function Ty(e){if(Dy(e))for(const t of e.wu)await t(!0)}async function _y(e){for(const t of e.wu)await t(!1)}function Cy(e,t){const n=xf(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Ry(n)?Py(n):Xy(n).No()&&Oy(n,t))}function Iy(e,t){const n=xf(e),r=Xy(n);n.fu.delete(t),r.No()&&Ny(n,t),0===n.fu.size&&(r.No()?r.$o():Dy(n)&&n.mu.set("Unknown"))}function Oy(e,t){e.gu.Ot(t.targetId),Xy(e).jo(t)}function Ny(e,t){e.gu.Ot(t),Xy(e).Wo(t)}function Py(e){e.gu=new Kg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Xy(e).start(),e.mu.ou()}function Ry(e){return Dy(e)&&!Xy(e).xo()&&e.fu.size>0}function Dy(e){return 0===xf(e).du.size}function Ay(e){e.gu=void 0}async function Ly(e){e.fu.forEach(((t,n)=>{Oy(e,t)}))}async function My(e,t){Ay(e),Ry(e)?(e.mu.au(t),Py(e)):e.mu.set("Unknown")}async function jy(e,t,n){if(e.mu.set("Online"),t instanceof qg&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){yf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Fy(e,n)}else if(t instanceof $g?e.gu.Kt(t):t instanceof Hg?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Vf.min()))try{const t=await Zv(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(wp.EMPTY_BYTE_STRING,n.snapshotVersion)),Ny(e,t);const r=new _v(n.target,t,1,n.sequenceNumber);Oy(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){yf("RemoteStore","Failed to raise snapshot:",t),await Fy(e,t)}}async function Fy(e,t,n){if(!np(t))throw t;e.du.add(1),await _y(e),e.mu.set("Offline"),n||(n=()=>Zv(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{yf("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Ty(e)}))}function Uy(e,t){return t().catch((n=>Fy(e,n,t)))}async function zy(e){const t=xf(e),n=Jy(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Vy(t);)try{const e=await ty(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,By(t,e)}catch(e){await Fy(t,e)}$y(t)&&Hy(t)}function Vy(e){return Dy(e)&&e.lu.length<10}function By(e,t){e.lu.push(t);const n=Jy(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function $y(e){return Dy(e)&&!Jy(e).xo()&&e.lu.length>0}function Hy(e){Jy(e).start()}async function qy(e){Jy(e).tu()}async function Wy(e){const t=Jy(e);for(const n of e.lu)t.Yo(n.mutations)}async function Ky(e,t,n){const r=e.lu.shift(),i=Rg.from(r,t,n);await Uy(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await zy(e)}async function Gy(e,t){t&&Jy(e).Jo&&await async function(e,t){if(jg(n=t.code)&&n!==Tf.ABORTED){const n=e.lu.shift();Jy(e).Oo(),await Uy(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await zy(e)}var n}(e,t),$y(e)&&Hy(e)}async function Qy(e,t){const n=xf(e);n.asyncQueue.verifyOperationInProgress(),yf("RemoteStore","RemoteStore received new credentials");const r=Dy(n);n.du.add(3),await _y(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Ty(n)}async function Yy(e,t){const n=xf(e);t?(n.du.delete(2),await Ty(n)):t||(n.du.add(2),await _y(n),n.mu.set("Unknown"))}function Xy(e){return e.yu||(e.yu=function(e,t,n){const r=xf(e);return r.nu(),new wy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Ly.bind(null,e),Zr:My.bind(null,e),zo:jy.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Ry(e)?Py(e):e.mu.set("Unknown")):(await e.yu.stop(),Ay(e))}))),e.yu}function Jy(e){return e.pu||(e.pu=function(e,t,n){const r=xf(e);return r.nu(),new Sy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:qy.bind(null,e),Zr:Gy.bind(null,e),Xo:Wy.bind(null,e),Zo:Ky.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await zy(e)):(await e.pu.stop(),e.lu.length>0&&(yf("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
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
 */}class Zy{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Cf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new Zy(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _f(Tf.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eb(e,t){if(bf("AsyncQueue",`${t}: ${e}`),np(e))return new _f(Tf.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class tb{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Wf.comparator(t.key,n.key):(e,t)=>Wf.comparator(e.key,t.key),this.keyedMap=Hm(),this.sortedSet=new fp(this.comparator)}static emptySet(e){return new tb(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tb))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new tb;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class nb{constructor(){this.Iu=new fp(Wf.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):Ef():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class rb{constructor(e,t,n,r,i,o,s,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new rb(e,t,tb.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class ib{constructor(){this.Eu=void 0,this.listeners=[]}}class ob{constructor(){this.queries=new zm((e=>Am(e)),Dm),this.onlineState="Unknown",this.Au=new Set}}async function sb(e,t){const n=xf(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new ib),i)try{o.Eu=await n.onListen(r)}catch(e){const n=eb(e,`Initialization of query '${Lm(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.Ru(n.onlineState),o.Eu&&t.vu(o.Eu)&&cb(n)}async function ab(e,t){const n=xf(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lb(e,t){const n=xf(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.vu(e)&&(r=!0);i.Eu=e}}r&&cb(n)}function ub(e,t,n){const r=xf(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function cb(e){e.Au.forEach((e=>{e.next()}))}class db{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new rb(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=rb.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
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
class hb{constructor(e){this.key=e}}class fb{constructor(e){this.key=e}}class pb{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Xm(),this.mutatedKeys=Xm(),this.Ku=Fm(e),this.Gu=new tb(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new nb,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Mm(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Wu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Ku(c,a)>0||l&&this.Ku(c,l)<0)&&(s=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(s=!0)),f&&(c?(o=o.add(c),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:o,ju:n,Mi:s,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ef()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const o=t?this.Ju():[],s=0===this.Uu.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new rb(this.query,e.Gu,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new nb,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Xm(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new fb(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new hb(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=Xm();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return rb.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class mb{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class gb{constructor(e){this.key=e,this.ec=!1}}class vb{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new zm((e=>Am(e)),Dm),this.ic=new Map,this.rc=new Set,this.oc=new fp(Wf.comparator),this.uc=new Map,this.cc=new Uv,this.ac={},this.hc=new Map,this.lc=Dv.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function yb(e,t){const n=Mb(e);let r,i;const o=n.sc.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.tc();else{const e=await ny(n.localStore,Nm(t));n.isPrimaryClient&&Cy(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await bb(n,t,r,"current"===o,e.resumeToken)}return i}async function bb(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await iy(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return Nb(e,t.targetId,s.Yu),s.snapshot}(e,t,n,r);const o=await iy(e.localStore,t,!0),s=new pb(t,o.Wi),a=s.zu(o.documents),l=Bg.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=s.applyChanges(a,e.isPrimaryClient,l);Nb(e,n,u.Yu);const c=new mb(t,n,s);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function wb(e,t){const n=xf(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!Dm(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ry(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Iy(n.remoteStore,r.targetId),Ib(n,r.targetId)})).catch(ep)):(Ib(n,r.targetId),await ry(n.localStore,r.targetId,!0))}async function Sb(e,t){const n=xf(e);try{const e=await function(e,t){const n=xf(e),r=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const s=[];t.targetChanges.forEach(((o,a)=>{const l=i.get(a);if(!l)return;s.push(n.Ds.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,o.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(wp.EMPTY_BYTE_STRING,Vf.min()).withLastLimboFreeSnapshotVersion(Vf.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,u,o)&&s.push(n.Ds.updateTargetData(e,u))}));let a=Bm(),l=Xm();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(ey(e,o,t.documentUpdates).next((e=>{a=e.zi,l=e.ji}))),!r.isEqual(Vf.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return tp.waitFor(s).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Li=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(kf(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?kf(r.ec):e.removedDocuments.size>0&&(kf(r.ec),r.ec=!1))})),await Db(n,e,t)}catch(e){await ep(e)}}function Eb(e,t,n){const r=xf(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=xf(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(r=!0)})),r&&cb(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kb(e,t,n){const r=xf(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),o=i&&i.key;if(o){let e=new fp(Wf.comparator);e=e.insert(o,Gp.newNoDocument(o,Vf.min()));const n=Xm().add(o),i=new Vg(Vf.min(),new Map,new gp(Ff),e,n);await Sb(r,i),r.oc=r.oc.remove(o),r.uc.delete(t),Rb(r)}else await ry(r.localStore,t,!1).then((()=>Ib(r,t,n))).catch(ep)}async function xb(e,t){const n=xf(e),r=t.batch.batchId;try{const e=await function(e,t){const n=xf(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=tp.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);kf(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),s.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Xm();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Cb(n,r,null),_b(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Db(n,e)}catch(e){await ep(e)}}async function Tb(e,t,n){const r=xf(e);try{const e=await function(e,t){const n=xf(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(kf(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Cb(r,t,n),_b(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Db(r,e)}catch(n){await ep(n)}}function _b(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Cb(e,t,n){const r=xf(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function Ib(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||Ob(e,t)}))}function Ob(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Iy(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Rb(e))}function Nb(e,t,n){for(const r of n)r instanceof hb?(e.cc.addReference(r.key,t),Pb(e,r)):r instanceof fb?(yf("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||Ob(e,r.key)):Ef()}function Pb(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(yf("SyncEngine","New document in limbo: "+n),e.rc.add(r),Rb(e))}function Rb(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Wf($f.fromString(t)),r=e.lc.next();e.uc.set(r,new gb(n)),e.oc=e.oc.insert(n,r),Cy(e.remoteStore,new _v(Nm(xm(n.path)),r,2,rp.ct))}}async function Db(e,t,n){const r=xf(e),i=[],o=[],s=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{s.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Gv.Di(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.nc.zo(i),await async function(e,t){const n=xf(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>tp.forEach(t,(t=>tp.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>tp.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!np(e))throw e;yf("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,o))}async function Ab(e,t){const n=xf(e);if(!n.currentUser.isEqual(t)){yf("SyncEngine","User change. New user:",t.toKey());const e=await Jv(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new _f(Tf.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.hc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Db(n,e.Qi)}}function Lb(e,t){const n=xf(e),r=n.uc.get(t);if(r&&r.ec)return Xm().add(r.key);{let e=Xm();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}function Mb(e){const t=xf(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kb.bind(null,t),t.nc.zo=lb.bind(null,t.eventManager),t.nc.wc=ub.bind(null,t.eventManager),t}function jb(e){const t=xf(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Tb.bind(null,t),t}class Fb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vy(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Xv(this.persistence,new Qv,e.initialUser,this.serializer)}createPersistence(e){return new qv(Kv.Fs,this.serializer)}createSharedClientState(e){return new ay}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ub{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Eb(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ab.bind(null,this.syncEngine),await Yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ob}createDatastore(e){const t=vy(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new my(r));var r;return function(e,t,n,r){return new Ey(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,o;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Eb(this.syncEngine,e,0),o=uy.D()?new uy:new ly,new xy(t,n,r,i,o)}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new vb(e,t,n,r,i,o);return s&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=xf(e);yf("RemoteStore","RemoteStore shutting down."),t.du.add(5),await _y(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
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
class zb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):bf("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Vb{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=pf.UNAUTHENTICATED,this.clientId=jf.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{yf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(yf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _f(Tf.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=eb(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Bb(e,t){e.asyncQueue.verifyOperationInProgress(),yf("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Jv(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function $b(e,t){e.asyncQueue.verifyOperationInProgress();const n=await qb(e);yf("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Qy(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Qy(t.remoteStore,n))),e._onlineComponents=t}function Hb(e){return"FirebaseError"===e.name?e.code===Tf.FAILED_PRECONDITION||e.code===Tf.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function qb(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){yf("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bb(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Hb(n))throw n;wf("Error using user provided cache. Falling back to memory cache: "+n),await Bb(e,new Fb)}}else yf("FirestoreClient","Using default OfflineComponentProvider"),await Bb(e,new Fb);return e._offlineComponents}async function Wb(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(yf("FirestoreClient","Using user provided OnlineComponentProvider"),await $b(e,e._uninitializedComponentsProvider._online)):(yf("FirestoreClient","Using default OnlineComponentProvider"),await $b(e,new Ub))),e._onlineComponents}function Kb(e){return Wb(e).then((e=>e.syncEngine))}async function Gb(e){const t=await Wb(e),n=t.eventManager;return n.onListen=yb.bind(null,t.syncEngine),n.onUnlisten=wb.bind(null,t.syncEngine),n}function Qb(e,t,n={}){const r=new Cf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new zb({next:o=>{t.enqueueAndForget((()=>ab(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new _f(Tf.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new _f(Tf.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new db(xm(n.path),o,{includeMetadataChanges:!0,xu:!0});return sb(e,s)}(await Gb(e),e.asyncQueue,t,n,r))),r.promise}
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
const Yb=new Map;
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
 */function Xb(e,t,n){if(!n)throw new _f(Tf.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Jb(e){if(!Wf.isDocumentKey(e))throw new _f(Tf.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zb(e){if(Wf.isDocumentKey(e))throw new _f(Tf.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ew(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ef()}function tw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _f(Tf.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ew(e);throw new _f(Tf.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class nw{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new _f(Tf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new _f(Tf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new _f(Tf.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class rw{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _f(Tf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new _f(Tf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nw(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Of;switch(e.type){case"firstParty":return new Df(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new _f(Tf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Yb.get(e);t&&(yf("ComponentProvider","Removing Datastore"),Yb.delete(e),t.terminate())}(this),Promise.resolve()}}function iw(e,t,n,r={}){var i;const o=(e=tw(e,rw))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&wf("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=pf.MOCK_USER;else{t=La(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new _f(Tf.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new pf(o)}e._authCredentials=new Nf(new If(t,n))}}
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
 */class ow{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ow(this.firestore,e,this._key)}}class sw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sw(this.firestore,e,this._query)}}class aw extends sw{constructor(e,t,n){super(e,t,xm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ow(this.firestore,null,new Wf(e))}withConverter(e){return new aw(this.firestore,e,this._path)}}function lw(e,t,...n){if(e=ol(e),Xb("collection","path",t),e instanceof rw){const r=$f.fromString(t,...n);return Zb(r),new aw(e,null,r)}{if(!(e instanceof ow||e instanceof aw))throw new _f(Tf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($f.fromString(t,...n));return Zb(r),new aw(e.firestore,null,r)}}function uw(e,t,...n){if(e=ol(e),1===arguments.length&&(t=jf.A()),Xb("doc","path",t),e instanceof rw){const r=$f.fromString(t,...n);return Jb(r),new ow(e,null,new Wf(r))}{if(!(e instanceof ow||e instanceof aw))throw new _f(Tf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($f.fromString(t,...n));return Jb(r),new ow(e.firestore,e instanceof aw?e.converter:null,new Wf(r))}}
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
class cw{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new yy(this,"async_queue_retry"),this.qc=()=>{const e=gy();e&&yf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=gy();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=gy();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new Cf;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!np(e))throw e;yf("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw bf("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Zy.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&Ef()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function dw(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class hw extends rw{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new cw,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pw(this),this._firestoreClient.terminate()}}function fw(e){return e._firestoreClient||pw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function pw(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new Ip(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Vb(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class mw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mw(wp.fromBase64String(e))}catch(e){throw new _f(Tf.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new mw(wp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class gw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new _f(Tf.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qf(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class vw{constructor(e){this._methodName=e}}
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
 */class yw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _f(Tf.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _f(Tf.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ff(this._lat,e._lat)||Ff(this._long,e._long)}}
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
 */const bw=/^__.*__$/;class ww{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Tg(e,this.data,this.fieldMask,t,this.fieldTransforms):new xg(e,this.data,t,this.fieldTransforms)}}function Sw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ef()}}class Ew{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ew(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Aw(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(Sw(this.Yc)&&bw.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class kw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vy(e)}ua(e,t,n,r=!1){return new Ew({Yc:e,methodName:t,oa:n,path:qf.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xw(e){const t=e._freezeSettings(),n=vy(e._databaseId);return new kw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Tw(e,t,n,r,i,o={}){const s=e.ua(o.merge||o.mergeFields?2:0,t,n,i);Nw("Data must be an object, but it was:",s,r);const a=Iw(r,s);let l,u;if(o.merge)l=new yp(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Pw(t,r,n);if(!s.contains(i))throw new _f(Tf.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Lw(e,i)||e.push(i)}l=new yp(e),u=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=s.fieldTransforms;return new ww(new Wp(a),l,u)}function _w(e,t,n,r=!1){return Cw(n,e.ua(r?4:3,t))}function Cw(e,t){if(Ow(e=ol(e)))return Nw("Unsupported field value:",t,e),Iw(e,t);if(e instanceof vw)return function(e,t){if(!Sw(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Cw(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ol(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ng(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=zf.fromDate(e);return{timestampValue:ev(t.serializer,n)}}if(e instanceof zf){const n=new zf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ev(t.serializer,n)}}if(e instanceof yw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof mw)return{bytesValue:tv(t.serializer,e._byteString)};if(e instanceof ow){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:iv(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${ew(e)}`)}(e,t)}function Iw(e,t){const n={};return hp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dp(e,((e,r)=>{const i=Cw(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Ow(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof zf||e instanceof yw||e instanceof mw||e instanceof ow||e instanceof vw)}function Nw(e,t,n){if(!Ow(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=ew(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function Pw(e,t,n){if((t=ol(t))instanceof gw)return t._internalPath;if("string"==typeof t)return Dw(e,t);throw Aw("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rw=new RegExp("[~\\*/\\[\\]]");function Dw(e,t,n){if(t.search(Rw)>=0)throw Aw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gw(...t.split("."))._internalPath}catch(r){throw Aw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Aw(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new _f(Tf.INVALID_ARGUMENT,a+e+l)}function Lw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Mw{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ow(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new jw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class jw extends Mw{data(){return super.data()}}function Fw(e,t){return"string"==typeof t?Dw(e,t):t instanceof gw?t._internalPath:t._delegate._internalPath}
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
 */function Uw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new _f(Tf.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zw{}class Vw extends zw{}function Bw(e,t,...n){let r=[];t instanceof zw&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof qw)).length,n=e.filter((e=>e instanceof $w)).length;if(t>1||t>0&&n>0)throw new _f(Tf.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class $w extends Vw{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new $w(e,t,n)}_apply(e){const t=this._parse(e);return Gw(e._query,t),new sw(e.firestore,e.converter,Pm(e._query,t))}_parse(e){const t=xw(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new _f(Tf.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Kw(s,o);const t=[];for(const n of s)t.push(Ww(r,e,n));a={arrayValue:{values:t}}}else a=Ww(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Kw(s,o),a=_w(n,"where",s,"in"===o||"not-in"===o);return tm.create(i,o,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Hw(e,t,n){const r=t,i=Fw("where",e);return $w._create(i,r,n)}class qw extends zw{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qw(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:nm.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Gw(n,e),n=Pm(n,e)}(e._query,t),new sw(e.firestore,e.converter,Pm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Ww(e,t,n){if("string"==typeof(n=ol(n))){if(""===n)throw new _f(Tf.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Im(t)&&-1!==n.indexOf("/"))throw new _f(Tf.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child($f.fromString(n));if(!Wf.isDocumentKey(r))throw new _f(Tf.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fp(e,new Wf(r))}if(n instanceof ow)return Fp(e,n._key);throw new _f(Tf.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ew(n)}.`)}function Kw(e,t){if(!Array.isArray(e)||0===e.length)throw new _f(Tf.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Gw(e,t){if(t.isInequality()){const n=Cm(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new _f(Tf.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=_m(e);null!==i&&Qw(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new _f(Tf.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _f(Tf.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Qw(e,t,n){if(!n.isEqual(t))throw new _f(Tf.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Yw{convertValue(e,t="none"){switch(Pp(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kp(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xp(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ef()}}convertObject(e,t){const n={};return dp(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new yw(kp(e.latitude),kp(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=_p(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Cp(e));default:return null}}convertTimestamp(e){const t=Ep(e);return new zf(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=$f.fromString(e);kf(Tv(n));const r=new Op(n.get(1),n.get(3)),i=new Wf(n.popFirst(5));return r.isEqual(t)||bf(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Xw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class Jw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zw extends Mw{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new eS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class eS extends Zw{data(e={}){return super.data(e)}}class tS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Jw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new eS(this._firestore,this._userDataWriter,n.key,n,new Jw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _f(Tf.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new eS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Jw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new eS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Jw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:nS(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ef()}}
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
function rS(e){e=tw(e,ow);const t=tw(e.firestore,hw);return Qb(fw(t),e._key).then((n=>lS(t,e,n)))}class iS extends Yw{constructor(e){super(),this.firestore=e}convertBytes(e){return new mw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ow(this.firestore,null,t)}}function oS(e,t,n){e=tw(e,ow);const r=tw(e.firestore,hw),i=Xw(e.converter,t,n);return aS(r,[Tw(xw(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,gg.none())])}function sS(e,...t){var n,r,i;e=ol(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||dw(t[s])||(o=t[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(dw(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,c;if(e instanceof ow)u=tw(e.firestore,hw),c=xm(e._key.path),l={next:n=>{t[s]&&t[s](lS(u,e,n))},error:t[s+1],complete:t[s+2]};else{const n=tw(e,sw);u=tw(n.firestore,hw),c=n._query;const r=new iS(u);l={next:e=>{t[s]&&t[s](new tS(u,r,n,e))},error:t[s+1],complete:t[s+2]},Uw(e._query)}return function(e,t,n,r){const i=new zb(r),o=new db(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>sb(await Gb(e),o))),()=>{i.yc(),e.asyncQueue.enqueueAndForget((async()=>ab(await Gb(e),o)))}}(fw(u),c,a,l)}function aS(e,t){return function(e,t){const n=new Cf;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=jb(e);try{const e=await function(e,t){const n=xf(e),r=zf.now(),i=t.reduce(((e,t)=>e.add(t.key)),Xm());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Bm(),l=Xm();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{o=i;const s=[];for(const e of t){const t=Eg(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new Tg(e.key,t,Kp(t.value.mapValue),gg.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)})).next((t=>{s=t;const r=t.applyToLocalDocumentSet(o,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:qm(o)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new fp(Ff)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await Db(r,e.changes),await zy(r.remoteStore)}catch(e){const t=eb(e,"Failed to persist write");n.reject(t)}}(await Kb(e),t,n))),n.promise}(fw(e),t)}function lS(e,t,n){const r=n.docs.get(t._key),i=new iS(e);return new Zw(e,i,t._key,r,new Jw(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){mf=Ql,ql(new sl("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new hw(new Pf(e.getProvider("auth-internal")),new Lf(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new _f(Tf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Op(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),Jl(ff,"3.10.0",e),Jl(ff,"3.10.0","esm2017")}();
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
Jl("firebase","9.19.1","app");const uS="@firebase/installations",cS="0.6.4",dS=1e4,hS=`w:${cS}`,fS="FIS_v2",pS="https://firebaseinstallations.googleapis.com/v1",mS=36e5,gS=new $a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function vS(e){return e instanceof Ba&&e.code.includes("request-failed")}
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
 */function yS({projectId:e}){return`${pS}/projects/${e}/installations`}function bS(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function wS(e,t){const n=(await t.json()).error;return gS.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function SS({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ES(e,{refreshToken:t}){const n=SS(e);return n.append("Authorization",function(e){return`${fS} ${e}`}
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
 */(t)),n}async function kS(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function xS(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const TS=/^[cdef][\w-]{21}$/,_S="";function CS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return TS.test(t)?t:_S}catch(e){return _S}}function IS(e){return`${e.appName}!${e.appId}`}
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
 */const OS=new Map;function NS(e,t){const n=IS(e);PS(n,t),function(e,t){const n=DS();n&&n.postMessage({key:e,fid:t});AS()}(n,t)}function PS(e,t){const n=OS.get(e);if(n)for(const e of n)e(t)}let RS=null;function DS(){return!RS&&"BroadcastChannel"in self&&(RS=new BroadcastChannel("[Firebase] FID Change"),RS.onmessage=e=>{PS(e.data.key,e.data.fid)}),RS}function AS(){0===OS.size&&RS&&(RS.close(),RS=null)}
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
 */const LS="firebase-installations-database",MS=1,jS="firebase-installations-store";let FS=null;function US(){return FS||(FS=Pl(LS,MS,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(jS)}})),FS}async function zS(e,t){const n=IS(e),r=(await US()).transaction(jS,"readwrite"),i=r.objectStore(jS),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||NS(e,t.fid),t}async function VS(e){const t=IS(e),n=(await US()).transaction(jS,"readwrite");await n.objectStore(jS).delete(t),await n.done}async function BS(e,t){const n=IS(e),r=(await US()).transaction(jS,"readwrite"),i=r.objectStore(jS),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||o&&o.fid===s.fid||NS(e,s.fid),s}
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
 */async function $S(e){let t;const n=await BS(e.appConfig,(n=>{const r=function(e){const t=e||{fid:CS(),registrationStatus:0};return WS(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(gS.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=yS(e),i=SS(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:fS,appId:e.appId,sdkVersion:hS},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await kS((()=>fetch(r,a)));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:bS(e.authToken)}}throw await wS("Create Installation",l)}(e,t);return zS(e.appConfig,n)}catch(n){throw vS(n)&&409===n.customData.serverCode?await VS(e.appConfig):await zS(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:HS(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===_S?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function HS(e){let t=await qS(e.appConfig);for(;1===t.registrationStatus;)await xS(100),t=await qS(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await $S(e);return n||t}return t}function qS(e){return BS(e,(e=>{if(!e)throw gS.create("installation-not-found");return WS(e)}))}function WS(e){return 1===(t=e).registrationStatus&&t.registrationTime+dS<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function KS({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${yS(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=ES(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:hS,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await kS((()=>fetch(r,a)));if(l.ok){return bS(await l.json())}throw await wS("Generate Auth Token",l)}async function GS(e,t=!1){let n;const r=await BS(e.appConfig,(r=>{if(!YS(r))throw gS.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+mS}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await QS(e.appConfig);for(;1===n.authToken.requestStatus;)await xS(100),n=await QS(e.appConfig);const r=n.authToken;return 0===r.requestStatus?GS(e,t):r}(e,t),r;{if(!navigator.onLine)throw gS.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await KS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await zS(e.appConfig,r),n}catch(n){if(!vS(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await zS(e.appConfig,n)}else await VS(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function QS(e){return BS(e,(e=>{if(!YS(e))throw gS.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+dS<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function YS(e){return void 0!==e&&2===e.registrationStatus}
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
async function XS(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await $S(e);t&&await t}
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
 */(n);return(await GS(n,t)).token}function JS(e){return gS.create("missing-app-config-values",{valueName:e})}
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
 */const ZS="installations",eE=e=>{const t=Wl(e.getProvider("app").getImmediate(),ZS).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await $S(t);return r?r.catch(console.error):GS(t).catch(console.error),n.fid}(t),getToken:e=>XS(t,e)}};ql(new sl(ZS,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw JS("App Configuration");if(!e.name)throw JS("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw JS(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Wl(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),ql(new sl("installations-internal",eE,"PRIVATE")),Jl(uS,cS),Jl(uS,cS,"esm2017");
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
const tE="analytics",nE="firebase_id",rE="origin",iE=6e4,oE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sE="https://www.googletagmanager.com/gtag/js",aE=new vl("@firebase/analytics"),lE=new $a("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function uE(e){if(!e.startsWith(sE)){const t=lE.create("invalid-gtag-resource",{gtagURL:e});return aE.warn(t.message),""}return e}function cE(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function dE(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:uE}),r=document.createElement("script"),i=`${sE}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function hE(e,t,n,r){return async function(i,o,s){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await cE(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(e){aE.error(e)}}(e,t,n,o,s):"config"===i?await async function(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=(await cE(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){aE.error(e)}e("config",i,o)}(e,t,n,r,o,s):"consent"===i?e("consent","update",s):e("set",o)}catch(e){aE.error(e)}}}
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
const fE=30;const pE=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function mE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function gE(e,t=pE,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw lE.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw lE.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yE;return setTimeout((async()=>{a.abort()}),void 0!==n?n:iE),vE({appId:r,apiKey:i,measurementId:o},s,a,t)}async function vE(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=pE){var o;const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(lE.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return aE.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:mE(r)},o=oE.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw lE.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){const l=t;if(!function(e){if(!(e instanceof Ba&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(i.deleteThrottleMetadata(s),a)return aE.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:s,measurementId:a};throw t}const u=503===Number(null===(o=null==l?void 0:l.customData)||void 0===o?void 0:o.httpStatus)?il(n,i.intervalMillis,fE):il(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(s,c),aE.debug(`Calling attemptFetch again in ${u} millis`),vE(e,c,r,i)}}class yE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */let bE,wE;function SE(e){wE=e}function EE(e){bE=e}
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
 */async function kE(e,t,n,r,i,o,s){var a;const l=gE(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&aE.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>aE.error(e))),t.push(l);const u=async function(){if(!Ua())return aE.warn(lE.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await za()}catch(e){return aE.warn(lE.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[c,d]=await Promise.all([l,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(sE)&&n.src.includes(e))return n;return null})(o)||dE(o,c.measurementId),wE&&(i("consent","default",wE),SE(void 0)),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h[rE]="firebase",h.update=!0,null!=d&&(h[nE]=d),i("config",c.measurementId,h),bE&&(i("set",bE),EE(void 0)),c.measurementId}
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
 */class xE{constructor(e){this.app=e}_delete(){return delete TE[this.app.options.appId],Promise.resolve()}}let TE={},_E=[];const CE={};let IE,OE,NE="dataLayer",PE="gtag",RE=!1;function DE(e,t,n){!function(){const e=[];if(ja()&&e.push("This is a browser extension environment."),Va()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=lE.create("invalid-analytics-context",{errorInfo:t});aE.warn(n.message)}}();const r=e.options.appId;if(!r)throw lE.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw lE.create("no-api-key");aE.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=TE[r])throw lE.create("already-exists",{id:r});if(!RE){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(NE);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=hE(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(TE,_E,CE,NE,PE);OE=e,IE=t,RE=!0}TE[r]=kE(e,_E,CE,t,IE,NE,n);return new xE(e)}function AE(e,t,n,r){e=ol(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(OE,TE[e.app.options.appId],t,n,r).catch((e=>aE.error(e)))}const LE="@firebase/analytics",ME="0.9.5";ql(new sl(tE,((e,{options:t})=>DE(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),ql(new sl("analytics-internal",(function(e){try{const t=e.getProvider(tE).getImmediate();return{logEvent:(e,n,r)=>AE(t,e,n,r)}}catch(e){throw lE.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Jl(LE,ME),Jl(LE,ME,"esm2017");function jE(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function FE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UE=FE,zE=new $a("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),VE=new vl("@firebase/auth");function BE(e,...t){VE.logLevel<=dl.ERROR&&VE.error(`Auth (${Ql}): ${e}`,...t)}
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
 */function $E(e,...t){throw KE(e,...t)}function HE(e,...t){return KE(e,...t)}function qE(e,t,n){const r=Object.assign(Object.assign({},UE()),{[t]:n});return new $a("auth","Firebase",r).create(t,{appName:e.name})}function WE(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&$E(e,"argument-error"),qE(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function KE(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return zE.create(e,...t)}function GE(e,t,...n){if(!e)throw KE(t,...n)}function QE(e){const t="INTERNAL ASSERTION FAILED: "+e;throw BE(t),new Error(t)}function YE(e,t){e||QE(t)}
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
 */const XE=new Map;function JE(e){YE(e instanceof Function,"Expected a class definition");let t=XE.get(e);return t?(YE(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,XE.set(e,t),t)}
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
function ZE(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ek(){return"http:"===tk()||"https:"===tk()}function tk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class nk{constructor(e,t){this.shortDelay=e,this.longDelay=t,YE(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ma())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ek()||ja()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function rk(e,t){YE(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class ik{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void QE("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void QE("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void QE("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},sk=new nk(3e4,6e4);
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
 */function ak(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lk(e,t,n,r,i={}){return uk(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Ga(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ik.fetch()(dk(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function uk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ok),t);try{const t=new hk(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fk(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw fk(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw fk(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw fk(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw qE(e,a,s);$E(e,a)}}catch(t){if(t instanceof Ba)throw t;$E(e,"network-request-failed",{message:String(t)})}}async function ck(e,t,n,r,i={}){const o=await lk(e,t,n,r,i);return"mfaPendingCredential"in o&&$E(e,"multi-factor-auth-required",{_serverResponse:o}),o}function dk(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?rk(e.config,i):`${e.config.apiScheme}://${i}`}class hk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(HE(this.auth,"network-request-failed"))),sk.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function fk(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=HE(e,t,r);return i.customData._tokenResponse=n,i}
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
function pk(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function mk(e){return 1e3*Number(e)}function gk(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return BE("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ca(n);return e?JSON.parse(e):(BE("Failed to decode base64 JWT payload"),null)}catch(e){return BE("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function vk(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ba&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class bk{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pk(this.lastLoginAt),this.creationTime=pk(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function wk(e){var t;const n=e.auth,r=await e.getIdToken(),i=await vk(e,async function(e,t){return lk(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));GE(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=jE(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),c=!!l&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new bk(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}
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
class Sk{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){GE(e.idToken,"internal-error"),GE(void 0!==e.idToken,"internal-error"),GE(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=gk(e);return GE(t,"internal-error"),GE(void 0!==t.exp,"internal-error"),GE(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return GE(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await uk(e,{},(async()=>{const n=Ga({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=dk(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ik.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Sk;return n&&(GE("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(GE("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(GE("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sk,this.toJSON())}_performRefresh(){return QE("not implemented")}}
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
 */function Ek(e,t){GE("string"==typeof e||void 0===e,"internal-error",{appName:t})}class kk{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=jE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bk(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await vk(this,this.stsTokenManager.getToken(this.auth,e));return GE(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ol(e),r=await n.getIdToken(t),i=gk(r);GE(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:pk(mk(i.auth_time)),issuedAtTime:pk(mk(i.iat)),expirationTime:pk(mk(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ol(e);await wk(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(GE(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kk(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){GE(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wk(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vk(this,async function(e,t){return lk(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:S,stsTokenManager:E}=t;GE(y&&E,e,"internal-error");const k=Sk.fromJSON(this.name,E);GE("string"==typeof y,e,"internal-error"),Ek(c,e.name),Ek(d,e.name),GE("boolean"==typeof b,e,"internal-error"),GE("boolean"==typeof w,e,"internal-error"),Ek(h,e.name),Ek(f,e.name),Ek(p,e.name),Ek(m,e.name),Ek(g,e.name),Ek(v,e.name);const x=new kk({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return S&&Array.isArray(S)&&(x.providerData=S.map((e=>Object.assign({},e)))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,t,n=!1){const r=new Sk;r.updateFromServerResponse(t);const i=new kk({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await wk(i),i}}
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
 */class xk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xk.type="NONE";const Tk=xk;
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
 */function _k(e,t,n){return`firebase:${e}:${t}:${n}`}class Ck{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_k(this.userKey,r.apiKey,i),this.fullPersistenceKey=_k("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kk._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ck(JE(Tk),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||JE(Tk);const o=_k(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=kk._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Ck(i,e,n)):new Ck(i,e,n)}}
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
 */function Ik(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rk(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ok(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ak(t))return"Blackberry";if(Lk(t))return"Webos";if(Nk(t))return"Safari";if((t.includes("chrome/")||Pk(t))&&!t.includes("edge/"))return"Chrome";if(Dk(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ok(e=Ma()){return/firefox\//i.test(e)}function Nk(e=Ma()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pk(e=Ma()){return/crios\//i.test(e)}function Rk(e=Ma()){return/iemobile/i.test(e)}function Dk(e=Ma()){return/android/i.test(e)}function Ak(e=Ma()){return/blackberry/i.test(e)}function Lk(e=Ma()){return/webos/i.test(e)}function Mk(e=Ma()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function jk(){return Fa()&&10===document.documentMode}function Fk(e=Ma()){return Mk(e)||Dk(e)||Lk(e)||Ak(e)||/windows phone/i.test(e)||Rk(e)}
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
function Uk(e,t=[]){let n;switch(e){case"Browser":n=Ik(Ma());break;case"Worker":n=`${Ik(Ma())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ql}/${r}`}
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
 */class zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Vk{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $k(this),this.idTokenSubscription=new $k(this),this.beforeStateQueue=new zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=JE(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ck.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return GE(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wk(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ol(e):null;return t&&GE(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&GE(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(JE(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&JE(e)||this._popupRedirectResolver;GE(t,this,"argument-error"),this.redirectPersistenceManager=await Ck.create(this,[JE(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return GE(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return GE(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Bk(e){return ol(e)}class $k{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xa((e=>this.observer=e))}get next(){return GE(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Hk(e,t,n){const r=Bk(e);GE(r._canInitEmulator,r,"emulator-config-failed"),GE(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=qk(t),{host:s,port:a}=function(e){const t=qk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Wk(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Wk(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function qk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Kk{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return QE("not implemented")}_getIdTokenResponse(e){return QE("not implemented")}_linkToIdToken(e,t){return QE("not implemented")}_getReauthenticationResolver(e){return QE("not implemented")}}
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
 */async function Gk(e,t){return lk(e,"POST","/v1/accounts:update",t)}
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
class Qk extends Kk{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qk(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qk(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return ck(e,"POST","/v1/accounts:signInWithPassword",ak(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return ck(e,"POST","/v1/accounts:signInWithEmailLink",ak(e,t))}(e,{email:this._email,oobCode:this._password});default:$E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Gk(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ck(e,"POST","/v1/accounts:signInWithEmailLink",ak(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:$E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Yk(e,t){return ck(e,"POST","/v1/accounts:signInWithIdp",ak(e,t))}
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
 */class Xk extends Kk{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xk(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=jE(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Xk(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Yk(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yk(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yk(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}
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
 */const Jk={USER_NOT_FOUND:"user-not-found"};
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
class Zk extends Kk{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Zk({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Zk({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ck(e,"POST","/v1/accounts:signInWithPhoneNumber",ak(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ck(e,"POST","/v1/accounts:signInWithPhoneNumber",ak(e,t));if(n.temporaryProof)throw fk(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ck(e,"POST","/v1/accounts:signInWithPhoneNumber",ak(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Jk)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Zk({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class ex{constructor(e){var t,n,r,i,o,s;const a=Qa(Ya(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);GE(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Qa(Ya(e)).link,n=t?Qa(Ya(t)).deep_link_id:null,r=Qa(Ya(e)).deep_link_id;return(r?Qa(Ya(r)).link:null)||r||n||t||e}(e);try{return new ex(t)}catch(e){return null}}}
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
class tx{constructor(){this.providerId=tx.PROVIDER_ID}static credential(e,t){return Qk._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ex.parseLink(t);return GE(n,"argument-error"),Qk._fromEmailAndCode(e,n.code,n.tenantId)}}tx.PROVIDER_ID="password",tx.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tx.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class nx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class rx extends nx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class ix extends rx{constructor(){super("facebook.com")}static credential(e){return Xk._fromParams({providerId:ix.PROVIDER_ID,signInMethod:ix.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ix.credentialFromTaggedObject(e)}static credentialFromError(e){return ix.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ix.credential(e.oauthAccessToken)}catch(e){return null}}}ix.FACEBOOK_SIGN_IN_METHOD="facebook.com",ix.PROVIDER_ID="facebook.com";
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
class ox extends rx{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xk._fromParams({providerId:ox.PROVIDER_ID,signInMethod:ox.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ox.credentialFromTaggedObject(e)}static credentialFromError(e){return ox.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ox.credential(t,n)}catch(e){return null}}}ox.GOOGLE_SIGN_IN_METHOD="google.com",ox.PROVIDER_ID="google.com";
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
class sx extends rx{constructor(){super("github.com")}static credential(e){return Xk._fromParams({providerId:sx.PROVIDER_ID,signInMethod:sx.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sx.credentialFromTaggedObject(e)}static credentialFromError(e){return sx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sx.credential(e.oauthAccessToken)}catch(e){return null}}}sx.GITHUB_SIGN_IN_METHOD="github.com",sx.PROVIDER_ID="github.com";
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
class ax extends rx{constructor(){super("twitter.com")}static credential(e,t){return Xk._fromParams({providerId:ax.PROVIDER_ID,signInMethod:ax.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ax.credentialFromTaggedObject(e)}static credentialFromError(e){return ax.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ax.credential(t,n)}catch(e){return null}}}ax.TWITTER_SIGN_IN_METHOD="twitter.com",ax.PROVIDER_ID="twitter.com";
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
class lx{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await kk._fromIdTokenResponse(e,n,r),o=ux(n);return new lx({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ux(n);return new lx({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ux(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class cx extends Ba{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,cx.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new cx(e,t,n,r)}}function dx(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw cx._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function hx(e,t,n=!1){const r=await vk(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lx._forOperation(e,"link",r)}
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
async function fx(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await vk(e,dx(r,i,t,e),n);GE(o.idToken,r,"internal-error");const s=gk(o.idToken);GE(s,r,"internal-error");const{sub:a}=s;return GE(e.uid===a,r,"user-mismatch"),lx._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&$E(r,"user-mismatch"),e}}
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
 */async function px(e,t,n=!1){const r="signIn",i=await dx(e,r,t),o=await lx._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function mx(e,t,n,r){return ol(e).onIdTokenChanged(t,n,r)}function gx(e,t,n,r){return ol(e).onAuthStateChanged(t,n,r)}new WeakMap;const vx="__sak";
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
 */class yx{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vx,"1"),this.storage.removeItem(vx),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class bx extends yx{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ma();return Nk(e)||Mk(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Fk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);jk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bx.type="LOCAL";const wx=bx;
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
 */class Sx extends yx{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sx.type="SESSION";const Ex=Sx;
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
class kx{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new kx(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function xx(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */kx.receivers=[];class Tx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=xx("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function _x(){return window}
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
function Cx(){return void 0!==_x().WorkerGlobalScope&&"function"==typeof _x().importScripts}
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
const Ix="firebaseLocalStorageDb",Ox="firebaseLocalStorage",Nx="fbase_key";class Px{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rx(e,t){return e.transaction([Ox],t?"readwrite":"readonly").objectStore(Ox)}function Dx(){const e=indexedDB.open(Ix,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ox,{keyPath:Nx})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ox)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ix);return new Px(e).toPromise()}(),t(await Dx()))}))}))}async function Ax(e,t,n){const r=Rx(e,!0).put({[Nx]:t,value:n});return new Px(r).toPromise()}function Lx(e,t){const n=Rx(e,!0).delete(t);return new Px(n).toPromise()}class Mx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Dx()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kx._getInstance(Cx()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Tx(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dx();return await Ax(e,vx,"1"),await Lx(e,vx),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ax(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rx(e,!1).get(t),r=await new Px(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Lx(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rx(e,!1).getAll();return new Px(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mx.type="LOCAL";const jx=Mx;
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
 */function Fx(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=HE("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function Ux(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Ux("rcb"),new nk(3e4,6e4);
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
const zx="recaptcha";async function Vx(e,t,n){var r;const i=await n.verify();try{let o;if(GE("string"==typeof i,e,"argument-error"),GE(n.type===zx,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){GE("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return lk(e,"POST","/v2/accounts/mfaEnrollment:start",ak(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{GE("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;GE(n,e,"missing-multi-factor-info");const s=await function(e,t){return lk(e,"POST","/v2/accounts/mfaSignIn:start",ak(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return lk(e,"POST","/v1/accounts:sendVerificationCode",ak(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Bx{constructor(e){this.providerId=Bx.PROVIDER_ID,this.auth=Bk(e)}verifyPhoneNumber(e,t){return Vx(this.auth,e,ol(t))}static credential(e,t){return Zk._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Bx.credentialFromTaggedObject(t)}static credentialFromError(e){return Bx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Zk._fromTokenResponse(t,n):null}}
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
function $x(e,t){return t?JE(t):(GE(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Bx.PROVIDER_ID="phone",Bx.PHONE_SIGN_IN_METHOD="phone";class Hx extends Kk{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yk(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yk(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yk(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qx(e){return px(e.auth,new Hx(e),e.bypassAuthState)}function Wx(e){const{auth:t,user:n}=e;return GE(n,t,"internal-error"),fx(n,new Hx(e),e.bypassAuthState)}async function Kx(e){const{auth:t,user:n}=e;return GE(n,t,"internal-error"),hx(n,new Hx(e),e.bypassAuthState)}
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
 */class Gx{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return Wx;default:$E(this.auth,"internal-error")}}resolve(e){YE(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){YE(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Qx=new nk(2e3,1e4);async function Yx(e,t,n){const r=Bk(e);WE(e,t,nx);const i=$x(r,n);return new Xx(r,"signInViaPopup",t,i).executeNotNull()}class Xx extends Gx{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xx.currentPopupAction&&Xx.currentPopupAction.cancel(),Xx.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return GE(e,this.auth,"internal-error"),e}async onExecution(){YE(1===this.filter.length,"Popup operations only handle one event");const e=xx();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(HE(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(HE(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xx.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(HE(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Qx.get())};e()}}Xx.currentPopupAction=null;
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
const Jx="pendingRedirect",Zx=new Map;class eT extends Gx{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zx.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=rT(t),r=nT(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Zx.set(this.auth._key(),e)}return this.bypassAuthState||Zx.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function tT(e,t){Zx.set(e._key(),t)}function nT(e){return JE(e._redirectPersistence)}function rT(e){return _k(Jx,e.config.apiKey,e.name)}
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
 */async function iT(e,t,n=!1){const r=Bk(e),i=$x(r,t),o=new eT(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class oT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aT(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!aT(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(HE(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sT(e))}saveEventToCache(e){this.cachedEventUids.add(sT(e)),this.lastProcessedEventTime=Date.now()}}function sT(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function aT({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const lT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uT=/^https?/;async function cT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return lk(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dT(e))return}catch(e){}$E(e,"unauthorized-domain")}function dT(e){const t=ZE(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!uT.test(n))return!1;if(lT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const hT=new nk(3e4,6e4);function fT(){const e=_x().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let pT=null;function mT(e){return pT=pT||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){fT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fT(),n(HE(e,"network-request-failed"))},timeout:hT.get()})}if(null===(i=null===(r=_x().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=_x().gapi)||void 0===o?void 0:o.load)){const t=Ux("iframefcb");return _x()[t]=()=>{gapi.load?s():n(HE(e,"network-request-failed"))},Fx(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw pT=null,e}))}(e),pT}
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
 */const gT=new nk(5e3,15e3),vT="__/auth/iframe",yT="emulator/auth/iframe",bT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ST(e){const t=e.config;GE(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rk(t,yT):`https://${e.config.authDomain}/${vT}`,r={apiKey:t.apiKey,appName:e.name,v:Ql},i=wT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ga(r).slice(1)}`}
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
const ET={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class kT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xT(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ET),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ma().toLowerCase();n&&(a=Pk(u)?"_blank":n),Ok(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ma()){var t;return Mk(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new kT(null);const d=window.open(t||"",a,c);GE(d,e,"popup-blocked");try{d.focus()}catch(e){}return new kT(d)}const TT="__/auth/handler",_T="emulator/auth/handler";function CT(e,t,n,r,i,o){GE(e.config.authDomain,e,"auth-domain-config-required"),GE(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ql,eventId:i};if(t instanceof nx){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",qa(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof rx){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?rk(e,_T):`https://${e.authDomain}/${TT}`}
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
 */(e)}?${Ga(a).slice(1)}`}const IT="webStorageSupport";const OT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ex,this._completeRedirectFn=iT,this._overrideRedirectResult=tT}async _openPopup(e,t,n,r){var i;YE(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return xT(e,CT(e,t,n,ZE(),r),xx())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=CT(e,t,n,ZE(),r),_x().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(YE(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await mT(e),n=_x().gapi;return GE(n,e,"internal-error"),t.open({where:document.body,url:ST(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bT,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=HE(e,"network-request-failed"),o=_x().setTimeout((()=>{r(i)}),gT.get());function s(){_x().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new oT(e);return t.register("authEvent",(t=>{GE(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(IT,{type:IT},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[IT];void 0!==i&&t(!!i),$E(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fk()||Nk()||Mk()}};var NT="@firebase/auth",PT="0.22.0";
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
class RT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){GE(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const DT=Da("authIdTokenMaxAge")||300;let AT=null;function LT(e=Xl()){const t=Wl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Wl(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Wa(n.getOptions(),null!=t?t:{}))return e;$E(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:OT,persistence:[jx,wx,Ex]}),r=Da("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>DT)return;const r=null==t?void 0:t.token;AT!==r&&(AT=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ol(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),mx(n,(t=>e(t)))}var i;const o=Na("auth");return o&&Hk(n,`http://${o}`),n}var MT;MT="Browser",ql(new sl("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{GE(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),GE(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:MT,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uk(MT)},s=new Vk(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(JE);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ql(new sl("auth-internal",(e=>(e=>new RT(e))(Bk(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Jl(NT,PT,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(MT)),Jl(NT,PT,"esm2017");const jT=(0,ao.createSlice)({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{const n={...t.payload};e.user=n}}}),{setUser:FT}=jT.actions;var UT=jT.reducer;const zT=Yl({apiKey:"AIzaSyDc0znz2fczV7ChFO5u_3ltIcLmOvgr9QU",authDomain:"bookflix-4892d.firebaseapp.com",projectId:"bookflix-4892d",storageBucket:"bookflix-4892d.appspot.com",messagingSenderId:"833962837938",appId:"1:833962837938:web:b3a3cc1495d1b8023646ab",measurementId:"G-5CBMEPBL54"}),VT=LT(zT),BT=new ox;function $T(){const e=$();return VT.currentUser&&(0,s.jsx)("button",{className:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2",onClick:()=>{VT.signOut(),e(FT(null))},children:"Sign Out"})}function HT(){const e=$();return(0,s.jsxs)("button",{onClick:()=>function(e){Yx(VT,BT).then((t=>{ox.credentialFromResult(t).accessToken;const n=t.user;console.log("user",n),e(FT(n))})).catch((e=>{e.code,e.message,e.email,ox.credentialFromError(e)}))}(e),type:"button",className:"text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2",children:[(0,s.jsx)("svg",{className:"w-4 h-4 mr-2 -ml-1","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",children:(0,s.jsx)("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})}),(0,s.jsx)("p",{className:"hidden md:inline-block",children:"Sign in with Google"})]})}const qT=function(e,t){const n="string"==typeof e?e:t||"(default)",r=Wl("object"==typeof e?e:Xl(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Pa("firestore");e&&iw(r,...e)}return r}(zT),WT=lw(qT,"favorites"),KT=LT(),GT=e=>({type:"favorites/updateFavorites",payload:e}),QT=(0,ao.createAsyncThunk)("favorites/loadFavorites",(async(e,{dispatch:t})=>{const n=KT.currentUser;null!=n.uid&&null!=n||t(GT([]));try{const e=await Bw(lw(qT,"favorites"),Hw("userId","==",n.uid));return new Promise((n=>{sS(e,(e=>{let r=[];e.forEach((e=>{r.push(e.data())})),t(GT(r)),n(r)}))}))}catch(e){throw console.error("Error loading favorites:",e),e}})),YT=(0,ao.createAsyncThunk)("favorites/addToFavorites",(async e=>{const t=currentUser.uid,n=uw(WT,e.id);if(!(await rS(n)).exists()){try{await oS(n,{...e,userId:t})}catch(e){throw e}return{...e,userId:t}}})),XT=(0,ao.createAsyncThunk)("favorites/removeFromFavorites",(async e=>{currentUser.uid;const t=uw(WT,e.id);var n;if((await rS(t)).exists())try{return await(n=t,aS(tw(n.firestore,hw),[new Og(n._key,gg.none())])),e.id}catch(e){throw e}}));var JT=(0,ao.createSlice)({name:"favorites",initialState:{items:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(QT.pending,(e=>{e.loading=!0,e.error=null})).addCase(QT.fulfilled,((e,t)=>{e.loading=!1,e.items=t.payload})).addCase(QT.rejected,((e,t)=>{e.loading=!1,e.error=t.error.message})).addCase(YT.fulfilled,((e,t)=>{e.items.push(t.payload)})).addCase(XT.fulfilled,((e,t)=>{e.items=e.items.filter((e=>e.id!==t.payload))})).addCase(GT,((e,t)=>{e.items=t.payload})).addCase(FT,((e,t)=>{t.payload||(e.items=[])}))}}).reducer;function ZT({modal:e,setModal:t,book:n}){const[r,i]=(0,m.useState)(!1),o=(0,m.useRef)(null),[a,l]=(0,m.useState)(!1),u=n.volumeInfo.imageLinks?.smallThumbnail||bn,c=(n?.volumeInfo?.description?.slice(0,400),E((e=>e.favorites.items)));(0,m.useEffect)((()=>{Object.values(c).some((e=>{e.id===n.id&&l(!0)}),[c])}));const d=$();return(0,s.jsx)(to.Root,{show:e,as:m.Fragment,children:(0,s.jsxs)(Li,{as:"div",className:"relative z-10",initialFocus:o,onClose:()=>t(!1),children:[(0,s.jsx)(to.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsx)(to.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)(Li.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[(0,s.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,s.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,s.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,s.jsx)("img",{src:u})}),(0,s.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,s.jsx)(Li.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:n?.volumeInfo?.title}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("p",{children:[n?.volumeInfo?.authors?.length>1?"Authors":"Author",":"]})}),(0,s.jsx)("div",{className:"mt-2",children:n?.volumeInfo?.authors?.map((e=>(0,s.jsx)("p",{className:"text-sm text-gray-500",children:e},so())))}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsxs)("p",{children:[n?.volumeInfo?.categories?.length>1?"Categories":"Category",":"]}),n.volumeInfo?.categories?.map((e=>(0,s.jsx)("p",{className:"text-sm text-gray-500",children:e},so())))]}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{children:" Pages:"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:n?.volumeInfo?.pageCount})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("p",{className:"text-sm text-gray-500",children:n?.volumeInfo?.description})})]})]})}),(0,s.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(0,s.jsx)("button",{type:"button",className:`${a?"bg-red-600":" bg-green-600"} transition-all duration-500 ${r?"animate-pulse":""} inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`,onClick:()=>{d(a?XT(n):YT(n))},children:a?"Remove from Favorites":"Add to Favorites"}),(0,s.jsx)("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>t(!1),ref:o,children:"Cancel"})]})]})})})})]})})}var e_=function({book:e}){if(null==e)return null;const[t,n]=(0,m.useState)(!1),{title:r,imageLinks:i}=e.volumeInfo,o=i?.smallThumbnail||bn;return(0,s.jsxs)("div",{href:e.id,className:"group w-11/12 md:w-full",children:[(0,s.jsx)("div",{onClick:()=>{n(!0)},className:"h-[15rem] aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8",children:(0,s.jsx)("img",{src:o,alt:r,className:"h-full w-full object-cover object-center group-hover:opacity-75"})}),t&&(0,s.jsx)(ZT,{setModal:n,modal:t,book:e})]},e.id)};o("acw62");const t_=()=>(0,s.jsxs)("div",{"data-testid":"shimmer-ui",className:"p-0 pt-6 flex md:p-20 shimmer-ui md:flex flex-col sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full",children:[(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{})]}),(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{})]}),(0,s.jsxs)("div",{className:"flex w-full flex-wrap justify-between",children:[(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{}),(0,s.jsx)(r_,{})]})]}),n_=()=>(0,s.jsx)("div",{className:"flex md:my-12 w-full",children:(0,s.jsx)("div",{className:"container px-5 pt-24 mx-auto w-full md:w-3/5",children:(0,s.jsx)("div",{className:"p-4 ",children:(0,s.jsxs)("div",{className:"h-full border-2 border-gray-200 rounded-lg overflow-hidden",children:[(0,s.jsx)("div",{className:"lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("h2",{className:"bg-gray-400 animate-pulse h-4 w-1/4 mb-2"}),(0,s.jsx)("h1",{className:"w-1/2 mb-4 h-6 animate-pulse bg-gray-500"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"}),(0,s.jsx)("p",{className:"leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"}),(0,s.jsxs)("div",{className:"flex items-center flex-wrap ",children:[(0,s.jsx)("a",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,s.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})})})}),r_=()=>(0,s.jsx)("div",{className:"h-60 w-36 mt-5 border border-blue-300 shadow rounded-md p-4 max-w-sm w-5/5 mx-auto",children:(0,s.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,s.jsx)("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),(0,s.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),(0,s.jsx)("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})});var i_=function({topBooks:e}){return e.books?(0,s.jsxs)("div",{className:"pt-24 max-h-50 w-full mx-auto ","data-testid":"container-title",children:[(0,s.jsx)("h1",{className:Rn,children:e.title}),(0,s.jsx)("div",{className:" md:hidden",children:(0,s.jsx)(n(Nn),{...Cn,className:" md:hidden",children:e.books.map(((e,t)=>(0,s.jsxs)("div",{className:" flex mx-1",children:[(0,s.jsx)("div",{className:"w-[8.5rem] h-64 md:w-20 ",children:o_(t)}),(0,s.jsx)(e_,{book:e,test:"test"})]},so())))})}),(0,s.jsx)("div",{className:" justify-between hidden md:flex ",children:e.books.map(((e,t)=>(0,s.jsxs)("div",{className:"flex max-h-40",children:[(0,s.jsx)("div",{className:"w-[10rem] h-40 md:w-40 md:h-56",children:o_(t)}),(0,s.jsx)(e_,{book:e})]},e.id+t)))})]}):(0,s.jsx)(t_,{})};const o_=e=>0===e?wn:1===e?Sn:2===e?En:3===e?kn:4===e?xn:void 0;var s_=function({books:e,title:t,isSearchResult:r,row:i}){let o;return"1"===i?o={books:e.slice(0,5),title:"Top 10 Austria"}:"2"===i&&(o={books:e.slice(5,10),title:"Top 10 USA"}),top&&void 0!==o?(0,s.jsx)(i_,{topBooks:o}):null!=e.length?(0,s.jsxs)("div",{className:"max-h-50 pt-24 md:","data-testid":"container-title",children:[(0,s.jsxs)("div",{className:"md:hidden",children:[(0,s.jsx)("h1",{className:Rn,children:r?"SearchResults":t}),(0,s.jsx)(n(Nn),{className:` max-h-60 md:hidden ${r&&"w-72"}  `,...r?_n:Tn,children:e&&e.map((e=>(0,s.jsx)(e_,{book:e},e.id)))})]}),(0,s.jsx)("div",{className:"hidden md:flex",children:(0,s.jsxs)("div",{className:"mx-auto py-4 w-full",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-white-900",children:t}),(0,s.jsx)("div",{className:"mt-1 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-x-8",children:e&&e.map(((e,t)=>{if(t<16)return(0,s.jsx)(e_,{book:e},e.id)}))})]})})]}):void 0};o("acw62");var a_=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n_,{}),(0,s.jsx)(t_,{}),(0,s.jsx)(t_,{}),(0,s.jsx)(t_,{})]});const l_=(0,ao.createSlice)({name:"books",initialState:{allBooks:{all:[],comedy:[],fantasy:[],crime:[]},loading:!1,searchValue:""},reducers:{addBooks:(e,t)=>{e.allBooks[t.payload.searchQuery]=t.payload.results},toggleLoading:(e,t)=>{e.loading=t.payload},setSearchValue:(e,t)=>{e.searchValue=t.payload}}}),{addBooks:u_,toggleLoading:c_,setSearchValue:d_}=l_.actions;var h_=l_.reducer;var f_=async(e,t,n)=>{if(console.log(e),null!=n[e]&&n[e].length>0)return n[e];let r;try{t(c_(!0));const n=""==e?"search-terms":e,i=await fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${n}&key=AIzaSyDVfI3QcVoemzczaDYqqg13x0lODr8iSy4`);if(r=await i.json(),null==r.items)return;t(u_({searchQuery:e,results:r.items})),t(c_(!1))}catch(e){if(e)return alert("error:",e),t(c_(!1)),e}};m=o("acw62");var p_=()=>{const e=E((e=>e.books.searchValue)),t=E((e=>e.books.allBooks)),[n,r]=(0,m.useState)([]);return(0,m.useEffect)((()=>{if(""===e)return r([]);null!=t[e]&&t[e].length>0&&r(t[e])}),[e,t]),console.log(n),n.length>0&&(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)(s_,{resultContainer:"resultContainer",text:e,books:n,isSearchResult:!0,title:e,length:n.length})})};o("acw62");var m_=()=>(0,s.jsx)("div",{className:"fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center",children:(0,s.jsxs)("div",{className:"bg-white border py-2 px-5 rounded-lg flex items-center flex-col",children:[(0,s.jsxs)("div",{className:"loader-dots block relative w-20 h-5 mt-2",children:[(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"}),(0,s.jsx)("div",{className:"absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"})]}),(0,s.jsx)("div",{className:"text-gray-500 text-xs font-medium mt-2 text-center",children:"Loading Data..."})]})});const g_=()=>{const e=$(),t=()=>E((e=>e.books.allBooks));return{load:async()=>{e((async(e,t)=>{try{f_("all",e,t),f_("fantasy",e,t),f_("comedy",e,t),f_("crime",e,t)}catch(e){console.error("Failed to fetch books",e)}}))},getAllBooks:t}};var v_=()=>{const e=$(),{load:t}=g_();(0,m.useEffect)((()=>{!function(e){const t=VT.onAuthStateChanged((t=>{e(FT(t||null))}))}(e)}),[e]),(0,m.useEffect)((()=>{t()}),[]);const n=E((e=>e.books.allBooks.all)),r=E((e=>e.books.allBooks.fantasy)),i=E((e=>e.books.allBooks.comedy)),o=E((e=>e.books.allBooks.crime)),a=E((e=>e.books.loading));return null==n||0==n.length?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a_,{})}):(0,s.jsxs)("div",{"data-testid":"homeComponent",className:"pt-20 md:pt-0 font-bookflix ",children:[a&&(0,s.jsx)(m_,{}),(0,s.jsx)(In,{book:n[3]}),(0,s.jsx)(p_,{}),(0,s.jsx)(s_,{books:r,title:"Fantasy"}),(0,s.jsx)(s_,{books:i,title:"Comedy"}),(0,s.jsx)(s_,{books:n,title:"TOP 10 Books today",row:"1",top:!0}),(0,s.jsx)(s_,{books:n,title:"TOP 10 Books in Austria",row:"2",top:!0}),(0,s.jsx)(s_,{books:o,title:"Crime"})]})};o("acw62");var y_=()=>(0,s.jsx)("div",{className:"bg-black text-white w-full min-h-screen ",children:(0,s.jsx)(mn,{to:"/",children:"Home"})});o("acw62");var b_=function(){return(0,s.jsx)("div",{className:"max-w-full",children:(0,s.jsxs)("div",{role:"contentinfo",className:"member-footer pt-10",id:"member-footer",children:[(0,s.jsxs)("div",{className:"social-links flex my-5 ",children:[(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"facebook",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-facebook-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"instagram",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-instagram-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"#",target:"_blank","aria-label":"twitter",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-twitter-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7679 8.20699C20.7912 11.5932 19.4564 14.8475 17.0619 17.242C14.6674 19.6365 11.4131 20.9713 8.02688 20.948C5.58911 20.9544 3.2014 20.2564 1.15088 18.938C1.50985 18.9771 1.87079 18.9955 2.23188 18.993C4.24756 18.9984 6.20627 18.3245 7.79188 17.08C5.87426 17.0472 4.18959 15.799 3.59988 13.974C3.8797 14.0187 4.16251 14.0421 4.44588 14.044C4.84342 14.0428 5.23922 13.9914 5.62388 13.891C3.53625 13.4666 2.03658 11.6303 2.03788 9.49999V9.44099C2.65823 9.78763 3.35178 9.98261 4.06188 10.01C2.08967 8.6933 1.48213 6.06953 2.67488 4.01999C4.9496 6.82015 8.30584 8.52335 11.9089 8.70599C11.8373 8.36899 11.8008 8.0255 11.7999 7.68099C11.8012 5.84293 12.9247 4.19202 14.634 3.51624C16.3433 2.84045 18.292 3.27679 19.5499 4.61699C20.552 4.4234 21.513 4.0573 22.3899 3.53499C22.0555 4.56892 21.3554 5.44537 20.4209 5.99999C21.3101 5.89964 22.1793 5.66707 22.9999 5.30999C22.3865 6.20227 21.6272 6.98488 20.7539 7.62499C20.7679 7.81999 20.7679 8.01399 20.7679 8.20699Z",fill:"currentColor"})})}),(0,s.jsx)("a",{className:"pr-5",href:"https://www.youtube.com/",target:"_blank","aria-label":"youtube",rel:"noreferrer",children:(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-youtube-logo",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z",fill:"currentColor"})})})]}),(0,s.jsxs)("ul",{className:"member-footer-links grid grid-flow-col",children:[(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"/browse/audio-description",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Audiodeskription"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"https:www.google.com",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Hilfe-Center"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"/redeem",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Geschenkkarten"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"www.google.com",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Medien-Center"})})})]}),(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Anlegerbeziehungen"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Karriere"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Nutzungsbedingungen"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Datenschutz"})})}),(0,s.jsx)("li",{className:"member-footer-link-wrapper",children:(0,s.jsx)("a",{className:"member-footer-link",href:"#",children:(0,s.jsx)("span",{className:"member-footer-link-content",children:"Rechtliche Hinweise"})})})]})]}),(0,s.jsx)("div",{className:"member-footer-service",children:(0,s.jsx)("button",{className:"service-code",children:"Service-Code"})}),(0,s.jsx)("div",{className:"member-footer-copyright",children:(0,s.jsx)("span",{children:"© 1997–2023 Inc.‎"})})]})})},w_=(m=o("acw62"),{});e(w_,"GenIcon",(()=>__),(e=>__=e));m=o("acw62"),m=o("acw62");var S_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E_=n(m).createContext&&n(m).createContext(S_),k_=function(){return k_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k_.apply(this,arguments)},x_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function T_(e){return e&&e.map((function(e,t){return n(m).createElement(e.tag,k_({key:t},e.attr),T_(e.child))}))}function __(e){return function(t){return n(m).createElement(C_,k_({attr:k_({},e.attr)},t),T_(e.child))}}function C_(e){var t=function(t){var r,i=e.attr,o=e.size,s=e.title,a=x_(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n(m).createElement("svg",k_({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,a,{className:r,style:k_(k_({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&n(m).createElement("title",null,s),e.children)};return void 0!==E_?n(m).createElement(E_.Consumer,null,(function(e){return t(e)})):t(S_)}function I_(e){return(0,w_.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function O_(e){return(0,w_.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}o("acw62");var N_=({setMenu:e})=>(0,s.jsxs)("div",{className:" z-50 border-r-4 text-white bg-black top-0 fixed w-3/6 left-0 overflow-hidden h-full overflow-x-hidden ",children:[(0,s.jsx)("div",{className:" items-center mx-auto w-4/5 flex mt-6 ",children:(0,s.jsx)(O_,{className:"pr-3 ",size:"3rem",onClick:()=>e(!1)})}),(0,s.jsx)("div",{className:"mx-auto w-4/5 mt-5",children:(0,s.jsx)("div",{className:"",children:yn.map(((e,t)=>(0,s.jsx)(mn,{className:"block mt-3 text-slate-300",to:e.path,children:e.name},e.path+t)))})})]});m=o("acw62"),m=o("acw62");var P_=e=>{const[t,n]=(0,m.useState)(e);return{value:t,onChange:e=>{n(e.target.value)}}};var R_=function(){const e=E((e=>e.books.allBooks)),t=P_(""),n=$();return(0,m.useEffect)((()=>{n(d_(t.value));const r=setTimeout((()=>{f_(t.value,n,e)}),1e3);return()=>{clearTimeout(r)}}),[t.value]),(0,s.jsx)("input",{type:"text",className:"text-black py-2 px-3 rounded-xl",placeholder:"Search for Books ",...t})};m=o("acw62");
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
function D_(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function A_(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}
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
***************************************************************************** */var L_=function(){return L_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},L_.apply(this,arguments)},M_=function(e){return{loading:null==e,value:e}},j_=function(e){var t=e?e():void 0,n=(0,m.useReducer)((function(e,t){switch(t.type){case"error":return L_(L_({},e),{error:t.error,loading:!1,value:void 0});case"reset":return M_(t.defaultValue);case"value":return L_(L_({},e),{error:void 0,loading:!1,value:t.value});default:return e}}),M_(t)),r=n[0],i=n[1],o=(0,m.useCallback)((function(){var t=e?e():void 0;i({type:"reset",defaultValue:t})}),[e]),s=(0,m.useCallback)((function(e){i({type:"error",error:e})}),[]),a=(0,m.useCallback)((function(e){i({type:"value",value:e})}),[]);return(0,m.useMemo)((function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}}),[r.error,r.loading,o,s,a,r.value])},F_=function(e,t){var n=j_((function(){return e.currentUser})),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return(0,m.useEffect)((function(){var n=gx(e,(function(e){return D_(void 0,void 0,void 0,(function(){var n;return A_(this,(function(r){switch(r.label){case 0:if(!(null==t?void 0:t.onUserChanged))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.onUserChanged(e)];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),o(n),[3,4];case 4:return s(e),[2]}}))}))}),o);return function(){n()}}),[e]),[a,i,r]};var U_=()=>{const[e]=F_(VT),t=Ft(),[n,r]=(0,m.useState)(!1),i=E((e=>e.favorites.items));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"z-50 h-20 flex  md:w-full  top-0 justify-between ",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-between w-full ",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(I_,{onClick:()=>{setTimeout((()=>{r(!n)}),50)},className:" md:hidden text-[2em] "}),(0,s.jsx)(mn,{to:"/",children:(0,s.jsx)("img",{"data-testid":"logo",className:"h-20 ",src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bookstore-logo-design-template-33f3abd4285d1eeccd6c235cbeb0b964_screen.jpg?ts=1659428394",alt:"logo"})}),(0,s.jsxs)("div",{className:"hidden md:flex",children:[(0,s.jsx)(mn,{className:("/"===t.pathname?"text-red-400":"")+" px-4",to:"/",children:"Home"}),(0,s.jsxs)(mn,{className:("/favorites"===t.pathname?"text-red-400":"")+" px-4",to:"/favorites",children:["Favorites",(0,s.jsx)("span",{className:"text-xs mx-1 ","data-testid":"booklength",children:null!=i?.length&&i.length})]}),(0,s.jsx)(mn,{className:("/comedy"===t.pathname?"text-red-400":"")+" px-4",to:"/comedy",children:"comedy"}),(0,s.jsx)(mn,{className:("/crime"===t.pathname?"text-red-400":"")+" px-4",to:"/crime",children:"crime"}),(0,s.jsx)(mn,{className:("/fantasy"===t.pathname?"text-red-400":"")+" px-4",to:"/fantasy",children:"fantasy"})]})]}),(0,s.jsx)("div",{className:"md:hidden ",children:e?(0,s.jsx)($T,{}):(0,s.jsx)(HT,{})})]}),(0,s.jsx)("div",{className:"w-full md:hidden",children:(0,s.jsx)(R_,{})})]}),(0,s.jsxs)("div",{"data-testid":"links",className:" hidden md:flex justify-between items-center w-6/12 text-3xl ",children:[(0,s.jsx)("div",{className:"w-full hidden md:inline-block",children:(0,s.jsx)(R_,{})}),e?(0,s.jsx)($T,{}):(0,s.jsx)(HT,{})]})]}),n&&(0,s.jsx)(N_,{setMenu:r})]})};var z_=(0,ao.configureStore)({reducer:{favorites:JT,books:h_,user:UT},middleware:e=>e({serializableCheck:!1})});m=o("acw62");var V_=()=>{const e=$(),t=E((e=>e.favorites.items)),n=E((e=>e.user.user));return(0,m.useEffect)((()=>{!function(e){const t=VT.onAuthStateChanged((t=>{e(FT(t||null))}))}(e)}),[e]),(0,m.useEffect)((()=>{null!=n&&e(QT(null,{extra:{user:n}}))}),[n]),(0,m.useEffect)((()=>{null!=n&&e(QT(null,{extra:{user:n}}))}),[]),t&&null!=t&&0!=t.length?(0,s.jsx)(s_,{books:t,title:"Favorites"}):(0,s.jsx)("div",{className:"text-3xl font-bold text-center mt-20",children:"No favorites yet"})},B_=(m=o("acw62"),o("99b6d"));var $_=({categorie:e})=>{const{load:t}=g_(),r=E((e=>e.books.allBooks.fantasy)),i=E((e=>e.books.allBooks.comedy)),o=E((e=>e.books.allBooks.crime)),a=E((e=>e.books.loading)),[l,u]=(0,m.useState)([]);return(0,m.useEffect)((()=>{console.log(a),a||u("fantasy"===e?r:"comedy"===e?i:o),0==r.length&&t()}),[e,a,r,i,o,u]),(0,s.jsxs)("div",{className:"max-h-50 pt-24 md: min-h-screen","data-testid":"categorie-title",children:[(0,s.jsx)(p_,{}),(0,s.jsxs)("div",{className:"md:hidden min-h-screen",children:[(0,s.jsx)("h1",{className:Rn,children:e}),(0,s.jsx)(n(B_),{className:" max-h-60 md:hidden w-72 ",...Tn,children:l&&l.map((e=>(0,s.jsx)(e_,{book:e},e.id)))})]}),(0,s.jsx)("div",{className:"hidden md:flex",children:(0,s.jsxs)("div",{className:"mx-auto py-4 w-full",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight text-white-900",children:e}),(0,s.jsx)("div",{className:"mt-1 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-x-8",children:l&&l.map((e=>(0,s.jsx)(e_,{book:e},e.id)))}),(0,s.jsx)("div",{children:0==l.length&&"No books in this categorie"})]})})]})};const H_=()=>(0,s.jsx)("div",{className:"bg-black text-white w-full ",children:(0,s.jsx)("div",{className:"mx-auto w-4/5 min-h-screen",children:(0,s.jsxs)(U,{store:z_,children:[(0,s.jsx)(U_,{}),(0,s.jsx)(Jt,{}),(0,s.jsx)(b_,{})]})})}),q_=(W_=[{path:"/",element:(0,s.jsx)(H_,{}),errorElement:(0,s.jsx)(y_,{}),children:[{path:"/",element:(0,s.jsx)(v_,{})},{path:"/favorites",element:(0,s.jsx)(V_,{})},{path:"/fantasy",element:(0,s.jsx)($_,{categorie:"fantasy"})},{path:"/comedy",element:(0,s.jsx)($_,{categorie:"comedy"})},{path:"/crime",element:(0,s.jsx)($_,{categorie:"crime"})}]}],We({basename:null==K_?void 0:K_.basename,future:null==K_?void 0:K_.future,history:Y({window:null==K_?void 0:K_.window}),hydrationData:(null==K_?void 0:K_.hydrationData)||dn(),routes:W_,detectErrorBoundary:an}).initialize());var W_,K_;n(u).createRoot(document.getElementById("root")).render((0,s.jsx)((function(e){let{fallbackElement:t,router:n}=e,r=m.useCallback((()=>n.state),[n]),i=It(n.subscribe,r,r),o=m.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),s=n.basename||"/",a=m.useMemo((()=>({router:n,navigator:o,static:!1,basename:s})),[n,o,s]);return m.createElement(m.Fragment,null,m.createElement(Ot.Provider,{value:a},m.createElement(Nt.Provider,{value:i},m.createElement(en,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?m.createElement(tn,null):t))),null)}),{router:q_}));
//# sourceMappingURL=index.f28d8ed9.js.map
