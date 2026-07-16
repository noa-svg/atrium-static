!function(){"use strict";!function(e){function t(t){var n=new Function("module","exports","define","return (function () {\n"+t+"\n}).call(this);");n.call(e,void 0,void 0,void 0)}t('!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,t,u,i,o,e,r,f,c,s,h,a,p=65536,v=1<<17,d={},y=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function g(n,l){for(var t in l)n[t]=l[t];return n}function b(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,t,u){var i,o,e,r={};for(e in t)"key"==e?i=t[e]:"ref"==e?o=t[e]:r[e]=t[e];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):u),"function"==typeof n&&null!=n.defaultProps)for(e in n.defaultProps)void 0===r[e]&&(r[e]=n.defaultProps[e]);return k(n,r,i,o,null)}function k(n,l,i,o,e){var r={type:n,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==e?++u:e,__i:-1,__u:0};return null==e&&null!=t.vnode&&t.vnode(r),r}function x(n){return n.children}function S(n,l){this.props=n,this.context=l}function C(n,l){if(null==l)return n.__?C(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return"function"==typeof n.type?C(n):null}function M(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return M(n)}}function P(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!T.__r++||e!==t.debounceRendering)&&((e=t.debounceRendering)||r)(T)}function T(){var n,l,u,i,e,r,c,s;for(o.sort(f);n=o.shift();)n.__d&&(l=o.length,i=void 0,r=(e=(u=n).__v).__e,c=[],s=[],u.__P&&((i=g({},e)).__v=e.__v+1,t.vnode&&t.vnode(i),O(u.__P,i,e,u.__n,u.__P.namespaceURI,32&e.__u?[r]:null,c,null==r?C(e):r,!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,z(c,i,s),i.__e!=r&&M(i)),o.length>l&&o.sort(f));T.__r=0}function $(n,l,t,u,i,o,e,r,f,c,s){var h,a,v,w,_,g=u&&u.__k||y,b=l.length;for(t.__d=f,I(t,l,g),f=t.__d,h=0;h<b;h++)null!=(v=t.__k[h])&&(a=-1===v.__i?d:g[v.__i]||d,v.__i=h,O(n,v,a,i,o,e,r,f,c,s),w=v.__e,v.ref&&a.ref!=v.ref&&(a.ref&&V(a.ref,null,v),s.push(v.ref,v.__c||w,v)),null==_&&null!=w&&(_=w),v.__u&p||a.__k===v.__k?f=H(v,f,n):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:w&&(f=w.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=f,t.__e=_}function I(n,l,t){var u,i,o,e,r,f=l.length,c=t.length,s=c,h=0;for(n.__k=[],u=0;u<f;u++)null!=(i=l[u])&&"boolean"!=typeof i&&"function"!=typeof i?(e=u+h,(i=n.__k[u]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?k(null,i,null,null,null):_(i)?k(x,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?k(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(r=i.__i=L(i,t,e,s))&&(s--,(o=t[r])&&(o.__u|=v)),null==o||null===o.__v?(-1==r&&h--,"function"!=typeof i.type&&(i.__u|=p)):r!==e&&(r==e-1?h--:r==e+1?h++:(r>e?h--:h++,i.__u|=p))):i=n.__k[u]=null;if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(o.__u&v)&&(o.__e==n.__d&&(n.__d=C(o)),q(o,o))}function H(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=H(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=C(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function L(n,l,t,u){var i=n.key,o=n.type,e=t-1,r=t+1,f=l[t];if(null===f||f&&i==f.key&&o===f.type&&0==(f.__u&v))return t;if(u>(null!=f&&0==(f.__u&v)?1:0))for(;e>=0||r<l.length;){if(e>=0){if((f=l[e])&&0==(f.__u&v)&&i==f.key&&o===f.type)return e;e--}if(r<l.length){if((f=l[r])&&0==(f.__u&v)&&i==f.key&&o===f.type)return r;r++}}return-1}function j(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||w.test(l)?t:t+"px"}function A(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||j(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||j(n.style,l,t[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=c,n.addEventListener(l,o?h:s,o)):n.removeEventListener(l,o?h:s,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t))}}function F(n){return function(l){if(this.l){var u=this.l[l.type+n];if(null==l.u)l.u=c++;else if(l.u<u.t)return;return u(t.event?t.event(l):l)}}}function O(n,l,u,i,o,e,r,f,c,s){var h,a,p,v,d,y,w,b,m,k,C,M,P,T,I,H,L=l.type;if(void 0!==l.constructor)return null;128&u.__u&&(c=!!(32&u.__u),e=[f=l.__e=u.__e]),(h=t.__b)&&h(l);n:if("function"==typeof L)try{if(b=l.props,m="prototype"in L&&L.prototype.render,k=(h=L.contextType)&&i[h.__c],C=h?k?k.props.value:h.__:i,u.__c?w=(a=l.__c=u.__c).__=a.__E:(m?l.__c=a=new L(b,C):(l.__c=a=new S(b,C),a.constructor=L,a.render=B),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),m&&null==a.__s&&(a.__s=a.state),m&&null!=L.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=g({},a.__s)),g(a.__s,L.getDerivedStateFromProps(b,a.__s))),v=a.props,d=a.state,a.__v=l,p)m&&null==L.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),m&&null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(m&&null==L.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||l.__v===u.__v)){for(l.__v!==u.__v&&(a.props=b,a.state=a.__s,a.__d=!1),l.__e=u.__e,l.__k=u.__k,l.__k.some(function(n){n&&(n.__=l)}),M=0;M<a._sb.length;M++)a.__h.push(a._sb[M]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),m&&null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,d,y)})}if(a.context=C,a.props=b,a.__P=n,a.__e=!1,P=t.__r,T=0,m){for(a.state=a.__s,a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),I=0;I<a._sb.length;I++)a.__h.push(a._sb[I]);a._sb=[]}else do{a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++T<25);a.state=a.__s,null!=a.getChildContext&&(i=g(g({},i),a.getChildContext())),m&&!p&&null!=a.getSnapshotBeforeUpdate&&(y=a.getSnapshotBeforeUpdate(v,d)),$(n,_(H=null!=h&&h.type===x&&null==h.key?h.props.children:h)?H:[H],l,u,i,o,e,r,f,c,s),a.base=l.__e,l.__u&=-161,a.__h.length&&r.push(a),w&&(a.__E=a.__=null)}catch(n){if(l.__v=null,c||null!=e){for(l.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;e[e.indexOf(f)]=null,l.__e=f}else l.__e=u.__e,l.__k=u.__k;t.__e(n,l,u)}else null==e&&l.__v===u.__v?(l.__k=u.__k,l.__e=u.__e):l.__e=N(u.__e,l,u,i,o,e,r,c,s);(h=t.diffed)&&h(l)}function z(n,l,u){l.__d=void 0;for(var i=0;i<u.length;i++)V(u[i],u[++i],u[++i]);t.__c&&t.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){t.__e(n,l.__v)}})}function N(n,u,i,o,e,r,f,c,s){var h,a,p,v,y,w,g,m=i.props,k=u.props,x=u.type;if("svg"===x?e="http://www.w3.org/2000/svg":"math"===x?e="http://www.w3.org/1998/Math/MathML":e||(e="http://www.w3.org/1999/xhtml"),null!=r)for(h=0;h<r.length;h++)if((y=r[h])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[h]=null;break}if(null==n){if(null===x)return document.createTextNode(k);n=document.createElementNS(e,x,k.is&&k),c&&(t.__m&&t.__m(u,r),c=!1),r=null}if(null===x)m===k||c&&n.data===k||(n.data=k);else{if(r=r&&l.call(n.childNodes),m=i.props||d,!c&&null!=r)for(m={},h=0;h<n.attributes.length;h++)m[(y=n.attributes[h]).name]=y.value;for(h in m)if(y=m[h],"children"==h);else if("dangerouslySetInnerHTML"==h)p=y;else if(!(h in k)){if("value"==h&&"defaultValue"in k||"checked"==h&&"defaultChecked"in k)continue;A(n,h,null,y,e)}for(h in k)y=k[h],"children"==h?v=y:"dangerouslySetInnerHTML"==h?a=y:"value"==h?w=y:"checked"==h?g=y:c&&"function"!=typeof y||m[h]===y||A(n,h,y,m[h],e);if(a)c||p&&(a.__html===p.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),u.__k=[];else if(p&&(n.innerHTML=""),$(n,_(v)?v:[v],u,i,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":e,r,f,r?r[0]:i.__k&&C(i,0),c,s),null!=r)for(h=r.length;h--;)b(r[h]);c||(h="value","progress"===x&&null==w?n.removeAttribute("value"):void 0!==w&&(w!==n[h]||"progress"===x&&!w||"option"===x&&w!==m[h])&&A(n,h,w,m[h],e),h="checked",void 0!==g&&g!==n[h]&&A(n,h,g,m[h],e))}return n}function V(n,l,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==l||(n.__u=n(l))}else n.current=l}catch(n){t.__e(n,u)}}function q(n,l,u){var i,o;if(t.unmount&&t.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.__e(n,l)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],l,u||"function"!=typeof n.type);u||b(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function B(n,l,t){return this.constructor(n,t)}function D(n,u,i){var o,e,r,f;t.__&&t.__(n,u),e=(o="function"==typeof i)?null:i&&i.__k||u.__k,r=[],f=[],O(u,n=(!o&&i||u).__k=m(x,null,[n]),e||d,d,u.namespaceURI,!o&&i?[i]:e?null:u.firstChild?l.call(u.childNodes):null,r,!o&&i?i:e?e.__e:u.firstChild,o,f),z(r,n,f)}l=y.slice,t={__e:function(n,l,t,u){for(var i,o,e;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),e=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),e=i.__d),e)return i.__E=i}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&null==n.constructor},S.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof n&&(n=n(g({},t),this.props)),n&&g(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this))},S.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},S.prototype.render=x,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},T.__r=0,c=0,s=F(!1),h=F(!0),a=0,n.Component=S,n.Fragment=x,n.cloneElement=function(n,t,u){var i,o,e,r,f=g({},n.props);for(e in n.type&&n.type.defaultProps&&(r=n.type.defaultProps),t)"key"==e?i=t[e]:"ref"==e?o=t[e]:f[e]=void 0===t[e]&&void 0!==r?r[e]:t[e];return arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):u),k(n.type,f,i||n.key,o||n.ref,null)},n.createContext=function(n,l){var t={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=new Set,(u={})[l]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.forEach(function(n){n.__e=!0,P(n)})},this.sub=function(n){t.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t&&t.delete(n),l&&l.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t},n.createElement=m,n.createRef=function(){return{current:null}},n.h=m,n.hydrate=function n(l,t){D(l,t,n)},n.isValidElement=i,n.options=t,n.render=D,n.toChildArray=function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(_(l)?l.some(function(l){n(l,t)}):t.push(l)),t}});\n//# sourceMappingURL=preact.umd.js.map'),t('!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=t.options,a=e.__b,v=e.__r,l=e.diffed,d=e.__c,s=e.unmount,p=e.__;function h(n,t){e.__h&&e.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y(n){return f=1,m(j,n)}function m(n,t,i){var o=h(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):j(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=!1;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,u))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=h(u++,4);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function _(n,t){var r=h(u++,7);return g(r.__H,t)&&(r.__=n(),r.__H=t,r.__h=n),r.__}function b(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p&&p(n,t)},e.__r=function(n){v&&v(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(A),t.__h.forEach(F),t.__h=[],u=0)),i=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===e.requestAnimationFrame||((o=e.requestAnimationFrame)||x)(b)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),i=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(u,n.__v)}}),d&&d(n,t)},e.unmount=function(n){s&&s(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),u.__H=void 0,t&&e.__e(t,u.__v))};var q="function"==typeof requestAnimationFrame;function x(n){var t,u=function(){clearTimeout(r),q&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);q&&(t=requestAnimationFrame(u))}function A(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function F(n){var t=r;n.__c=n.__(),r=t}function g(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function j(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,_(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=h(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=h(u++,3);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=h(u++,10),i=y();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=h(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=_,n.useReducer=m,n.useRef=function(n){return f=5,_(function(){return{current:n}},[])},n.useState=y});\n//# sourceMappingURL=hooks.umd.js.map'),t('!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((i||self).preactSignalsCore={})}(this,function(i){var t=Symbol.for("preact-signals");function o(){if(!(f>1)){var i,t=!1;while(void 0!==n){var o=n;n=void 0;h++;while(void 0!==o){var r=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&u(o))try{o.c()}catch(o){if(!t){i=o;t=!0}}o=r}}h=0;f--;if(t)throw i}else f--}var r=void 0,n=void 0,f=0,h=0,s=0;function e(i){if(void 0!==r){var t=i.n;if(void 0===t||t.t!==r){t={i:0,S:i,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:t};if(void 0!==r.s)r.s.n=t;r.s=t;i.n=t;if(32&r.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=r.s;t.n=void 0;r.s.n=t;r.s=t}return t}}}function v(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0}v.prototype.brand=t;v.prototype.h=function(){return!0};v.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i}};v.prototype.U=function(i){if(void 0!==this.t){var t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0}if(void 0!==o){o.e=t;i.x=void 0}if(i===this.t)this.t=o}};v.prototype.subscribe=function(i){var t=this;return b(function(){var o=t.value,n=r;r=void 0;try{i(o)}finally{r=n}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){var i=r;r=void 0;try{return this.value}finally{r=i}};Object.defineProperty(v.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(h>100)throw new Error("Cycle detected");this.v=i;this.i++;s++;f++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{o()}}}});function u(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function d(i){for(var t=i.s;void 0!==t;t=t.n){var o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function c(i){var t=i.s,o=void 0;while(void 0!==t){var r=t.p;if(-1===t.i){t.S.U(t);if(void 0!==r)r.n=t.n;if(void 0!==t.n)t.n.p=r}else o=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=r}i.s=o}function a(i){v.call(this,void 0);this.x=i;this.s=void 0;this.g=s-1;this.f=4}(a.prototype=new v).h=function(){this.f&=-3;if(1&this.f)return!1;if(32==(36&this.f))return!0;this.f&=-5;if(this.g===s)return!0;this.g=s;this.f|=1;if(this.i>0&&!u(this)){this.f&=-2;return!0}var i=r;try{d(this);r=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++}}catch(i){this.v=i;this.f|=16;this.i++}r=i;c(this);this.f&=-2;return!0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}v.prototype.S.call(this,i)};a.prototype.U=function(i){if(void 0!==this.t){v.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N()}};Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function l(i){var t=i.u;i.u=void 0;if("function"==typeof t){f++;var n=r;r=void 0;try{t()}catch(t){i.f&=-2;i.f|=8;y(i);throw t}finally{r=n;o()}}}function y(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;l(i)}function w(i){if(r!==this)throw new Error("Out-of-order effect");c(this);r=i;this.f&=-2;if(8&this.f)y(this);o()}function p(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t}finally{i()}};p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;l(this);d(this);f++;var i=r;r=this;return w.bind(this,i)};p.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=n;n=this}};p.prototype.d=function(){this.f|=8;if(!(1&this.f))y(this)};function b(i){var t=new p(i);try{t.c()}catch(i){t.d();throw i}return t.d.bind(t)}i.Signal=v;i.batch=function(i){if(f>0)return i();f++;try{return i()}finally{o()}};i.computed=function(i){return new a(i)};i.effect=b;i.signal=function(i){return new v(i)};i.untracked=function(i){var t=r;r=void 0;try{return i()}finally{r=t}}});//# sourceMappingURL=signals-core.min.js.map'),t('!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("preact"),require("preact/hooks"),require("@preact/signals-core")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks","@preact/signals-core"],i):i((n||self).preactSignals={},n.preact,n.preactHooks,n.preactSignalsCore)}(this,function(n,i,r,t){var e,f;function o(n,r){i.options[n]=r.bind(null,i.options[n]||function(){})}function u(n){if(f)f();f=n&&n.S()}function a(n){var e=this,f=n.data,o=useSignal(f);o.value=f;var u=r.useMemo(function(){var n=e.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}e.__$u.c=function(){var n;if(!i.isValidElement(u.peek())&&3===(null==(n=e.base)?void 0:n.nodeType))e.base.data=u.peek();else{e.__$f|=1;e.setState({})}};return t.computed(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return u.value}a.displayName="_st";Object.defineProperties(t.Signal.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:a},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});o("__b",function(n,i){if("string"==typeof i.type){var r,e=i.props;for(var f in e)if("children"!==f){var o=e[f];if(o instanceof t.Signal){if(!r)i.__np=r={};r[f]=o;e[f]=o.peek()}}}n(i)});o("__r",function(n,i){u();var r,f=i.__c;if(f){f.__$f&=-2;if(void 0===(r=f.__$u))f.__$u=r=function(n){var i;t.effect(function(){i=this});i.c=function(){f.__$f|=1;f.setState({})};return i}()}e=f;u(r);n(i)});o("__e",function(n,i,r,t){u();e=void 0;n(i,r,t)});o("diffed",function(n,i){u();e=void 0;var r;if("string"==typeof i.type&&(r=i.__e)){var t=i.__np,f=i.props;if(t){var o=r.U;if(o)for(var a in o){var v=o[a];if(void 0!==v&&!(a in t)){v.d();o[a]=void 0}}else r.U=o={};for(var s in t){var l=o[s],d=t[s];if(void 0===l){l=c(r,s,d,f);o[s]=l}else l.o(d,f)}}}n(i)});function c(n,i,r,e){var f=i in n&&void 0===n.ownerSVGElement,o=t.signal(r);return{o:function(n,i){o.value=n;e=i},d:t.effect(function(){var r=o.value.value;if(e[i]!==r){e[i]=r;if(f)n[i]=r;else if(r)n.setAttribute(i,r);else n.removeAttribute(i)}})}}o("unmount",function(n,i){if("string"==typeof i.type){var r=i.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var e in t){var f=t[e];if(f)f.d()}}}}else{var o=i.__c;if(o){var u=o.__$u;if(u){o.__$u=void 0;u.d()}}}n(i)});o("__h",function(n,i,r,t){if(t<3||9===t)i.__$f|=2;n(i,r,t)});i.Component.prototype.shouldComponentUpdate=function(n,i){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var t in i)return!0;for(var e in n)if("__source"!==e&&n[e]!==this.props[e])return!0;for(var f in this.props)if(!(f in n))return!0;return!1};function useSignal(n){return r.useMemo(function(){return t.signal(n)},[])}n.Signal=t.Signal;n.batch=t.batch;n.computed=t.computed;n.effect=t.effect;n.signal=t.signal;n.untracked=t.untracked;n.useComputed=function(n){var i=r.useRef(n);i.current=n;e.__$f|=4;return r.useMemo(function(){return t.computed(function(){return i.current()})},[])};n.useSignal=useSignal;n.useSignalEffect=function(n){var i=r.useRef(n);i.current=n;r.useEffect(function(){return t.effect(function(){return i.current()})},[])}});//# sourceMappingURL=signals.min.js.map'),t('!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.htm=e()}(this,function(){var n=function(e,t,u,s){var r;t[0]=0;for(var p=1;p<t.length;p++){var h=t[p++],o=t[p]?(t[0]|=h?1:2,u[t[p++]]):t[++p];3===h?s[0]=o:4===h?s[1]=Object.assign(s[1]||{},o):5===h?(s[1]=s[1]||{})[t[++p]]=o:6===h?s[1][t[++p]]+=o+"":h?(r=e.apply(o,n(e,o,u,["",null])),s.push(r),o[0]?t[0]|=2:(t[p-2]=0,t[p]=r)):s.push(o)}return s},e=new Map;return function(t){var u=e.get(this);return u||(u=new Map,e.set(this,u)),(u=n(this,u.get(t)||(u.set(t,u=function(n){for(var e,t,u=1,s="",r="",p=[0],h=function(n){1===u&&(n||(s=s.replace(/^\\s*\\n\\s*|\\s*\\n\\s*$/g,"")))?p.push(0,n,s):3===u&&(n||s)?(p.push(3,n,s),u=2):2===u&&"..."===s&&n?p.push(4,n,0):2===u&&s&&!n?p.push(5,0,!0,s):u>=5&&((s||!n&&5===u)&&(p.push(u,0,s,t),u=6),n&&(p.push(u,n,0,t),u=6)),s=""},o=0;o<n.length;o++){o&&(1===u&&h(),h(o));for(var f=0;f<n[o].length;f++)e=n[o][f],1===u?"<"===e?(h(),p=[p],u=3):s+=e:4===u?"--"===s&&">"===e?(u=1,s=""):s=e+s[0]:r?e===r?r="":s+=e:\'"\'===e||"\'"===e?r=e:">"===e?(h(),u=1):u&&("="===e?(u=5,t=s,s=""):"/"===e&&(u<5||">"===n[o][f+1])?(h(),3===u&&(p=p[0]),u=p,(p=p[0]).push(2,0,u),u=0):" "===e||"\\t"===e||"\\n"===e||"\\r"===e?(h(),u=2):s+=e),3===u&&"!--"===s&&(u=4,p=p[0])}return h(),p}(t)),u),arguments,[])).length>1?u:u[0]}});')}("undefined"!=typeof window?window:this);var e=window.htm,{Component:t,h:n,render:r}=window.preact,{useCallback:i,useEffect:a,useMemo:o,useRef:l,useState:s}=window.preactHooks,{signal:u}=window.preactSignals;function c(){if(!("undefined"==typeof window||"undefined"==typeof document||window.AtriumReliability&&window.AtriumReliability.failBus)){var e;try{e=D({})}catch(e){try{console.error("[atriumX] reliability init failed",e)}catch(e){}return}window.AtriumReliability=e;var t=e.failBus;try{if(void 0!==mn&&mn&&mn.length&&"function"==typeof t.setKnownStations){for(var n=[],r=0;r<mn.length;r++)mn[r]&&mn[r].id&&n.push(mn[r].id);t.setKnownStations(n)}}catch(e){}t.on("station",function(){try{"object"==typeof ae&&ae&&ae.failNonce&&(ae.failNonce.value=ae.failNonce.value+1)}catch(e){}}),t.on("toast",function(e){try{var t=(e&&e.source?e.source+" · ":"")+(e&&e.message||"failed");if("function"==typeof qe)return void qe(t,"error");try{console.error("[atriumX:failBus]",e&&e.source,e&&e.message)}catch(e){}}catch(e){}}),t.on("banner",function(e){try{var t=document.getElementById("atrium-fail-banner");t||(t=document.createElement("div"),t.id="atrium-fail-banner",t.className="fail-banner",t.setAttribute("role","alert"),document.body.insertBefore(t,document.body.firstChild)),t.textContent=(e&&e.message||"a portal-wide failure occurred")+" · reload to retry",t.hidden=!1}catch(e){}})}}var d=3e5,f=216e5,p="atrium2:";function h(e){return 0===e.indexOf("tx:stop:")?f:d}function v(e){if(e)return e;try{if("undefined"!=typeof window&&window.localStorage)return window.localStorage}catch(e){}try{if("undefined"!=typeof localStorage)return localStorage}catch(e){}return null}function g(e,t){var n=v(e),r=t||function(){return Date.now()};function i(e){try{if(!n)return null;var t=n.getItem(p+e);if(!t)return null;var i=JSON.parse(t),a=h(e);if(!i||r()-(i.ts||0)>a){try{n.removeItem(p+e)}catch(e){}return null}return i.data}catch(e){return null}}function a(e,t){try{if(!n)return null;var i=n.getItem(p+e);if(!i)return null;var a=JSON.parse(i),o=null!=t?t:h(e);if(!a||r()-(a.ts||0)>o){try{n.removeItem(p+e)}catch(e){}return null}return a}catch(e){return null}}function o(){var e=[];try{for(var t=0;t<n.length;t++){var r=n.key(t);r&&0===r.indexOf(p)&&e.push(r)}}catch(e){}return e}function l(e){var t=r(),i=o().map(function(e){var r=0;try{var i=JSON.parse(n.getItem(e));r=i&&i.ts||0}catch(e){}var a=0===e.indexOf(p)?e.slice(p.length):e,o=h(a),l=t-r>o,s=0===a.indexOf("tx:stop:")&&!l;return{k:e,ts:r,expired:l,isLiveOverride:s}});i.sort(function(e,t){return e.isLiveOverride!==t.isLiveOverride?e.isLiveOverride?1:-1:e.expired!==t.expired?e.expired?-1:1:e.ts-t.ts});for(var a=0,l=0;l<i.length&&a<e&&!i[l].isLiveOverride;l++)try{n.removeItem(i[l].k),a++}catch(e){}}function s(e,t){if(n){var i=JSON.stringify({ts:r(),data:t});try{n.setItem(p+e,i)}catch(t){try{l(Math.max(1,Math.ceil(.2*o().length))),n.setItem(p+e,i)}catch(t){try{"undefined"!=typeof console&&console.warn("[atriumX] cache full; write dropped for "+e)}catch(e){}}}}}function u(e){try{n&&n.removeItem(p+e)}catch(e){}}return{get:i,getWithMeta:a,set:s,del:u,_store:n}}function m(){var e={};return{getItem:function(t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null},setItem:function(t,n){e[t]=String(n)},removeItem:function(t){delete e[t]},clear:function(){e={}},key:function(t){return Object.keys(e)[t]||null},get length(){return Object.keys(e).length}}}var _={makeCache:g,memoryStore:m,CACHE_TTL_MS:d,OVERRIDE_TTL_MS:f,_ttlForKey:h};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumCache=_);var y={toast:1,station:2,banner:3};function b(e){e=e||{};var t=e.ringMax||50,n=[],r={toast:[],station:[],banner:[]},i={},a=null;function o(e){if(null!=e){var t={};if("number"==typeof e.length)for(var n=0;n<e.length;n++)null!=e[n]&&(t[String(e[n])]=!0);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[String(r)]=!0);a=t}else a=null}function l(e){return!a||!0===a[String(e)]}function s(e){return y[e]?e:"toast"}function u(e){try{"undefined"!=typeof console&&console.error("[atriumX] failBus sink threw",e)}catch(e){}}function c(e,a,o){o=o||{};var c=s(o.severity),d={source:String(e||"unknown"),message:a&&a.message||String(null==a?"error":a),stack:a&&a.stack||"",severity:c,retry:"function"==typeof o.retry?o.retry:null,ts:Date.now()};if(n.push(d),n.length>t&&n.shift(),"station"===c)if(l(d.source))i[d.source]=d;else{d.orphaned=!0;try{"undefined"!=typeof console&&console.error('[atriumX] failBus.raise: unknown station id "'+d.source+'" (not in topology); the persistent glow would be orphaned. Dropped.')}catch(e){}}for(var f=r[c]||[],p=0;p<f.length;p++)try{f[p](d)}catch(e){u(e)}return d}function d(e){if(i[e]){delete i[e];for(var t=r.station||[],n=0;n<t.length;n++)try{t[n]({source:e,resolved:!0,ts:Date.now()})}catch(e){u(e)}return!0}return!1}function f(e,t){return r[e]||(r[e]=[]),r[e].push(t),function(){var n=r[e].indexOf(t);n>=0&&r[e].splice(n,1)}}function p(e){return i[e]||null}function h(e){var t=e||n.length;return n.slice(Math.max(0,n.length-t))}function v(){n.length=0,i={}}return{raise:c,resolve:d,on:f,stationHealth:p,recent:h,clear:v,setKnownStations:o,SEVERITIES:y}}_={makeFailBus:b,SEVERITIES:y};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumFailBus=_);var w={PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"},k={CONFIRMED:"CONFIRMED",PENDING_WRITE:"PENDING_WRITE",REVERTED:"REVERTED"},$={states:[w.PENDING,w.RUNNING,w.OK,w.ANOMALY,w.FAILED,w.STALE],initial:w.PENDING,transitions:{PENDING:{upload:w.RUNNING},RUNNING:{reconPass:w.OK,reconFail:w.ANOMALY,rpcFail:w.FAILED},OK:{monthBoundary:w.STALE,upload:w.RUNNING},ANOMALY:{upload:w.RUNNING},FAILED:{upload:w.RUNNING},STALE:{upload:w.RUNNING}}},x={states:[w.PENDING,w.RUNNING,w.OK,w.FAILED,w.STALE],initial:w.PENDING,transitions:{PENDING:{fanout:w.RUNNING},RUNNING:{ackOk:w.OK,ackFail:w.FAILED},OK:{newNavMonth:w.PENDING,fanout:w.RUNNING},FAILED:{fanout:w.RUNNING,newNavMonth:w.PENDING},STALE:{fanout:w.RUNNING,newNavMonth:w.PENDING}}},S={states:[k.PENDING_WRITE,k.CONFIRMED,k.REVERTED],initial:null,transitions:{null:{click:k.PENDING_WRITE},PENDING_WRITE:{ackOk:k.CONFIRMED,ackFail:k.REVERTED},CONFIRMED:{click:k.PENDING_WRITE},REVERTED:{click:k.PENDING_WRITE}}},A={states:[w.PENDING,w.OK,w.ANOMALY],initial:w.ANOMALY,transitions:{ANOMALY:{dismiss:w.OK,ack:w.PENDING},PENDING:{dismiss:w.OK,flag:w.ANOMALY},OK:{redetect:w.ANOMALY}}},C={navMonth:$,consumer:x,transferWrite:S,silentSignal:A},N={OK:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function E(e,t){var n=null==N[e]?-1:N[e],r=null==N[t]?-1:N[t];return r>n?t:e}function P(e,t){var n=C[e];if(!n)throw new Error("unknown entity type: "+e);var r=n.initial,i=[];function a(e){return null==e?"null":e}function o(e){var t=n.transitions[a(r)]||{},o=t[e];return void 0===o?(i.push({from:r,trigger:e}),r):(r=o,r)}function l(e){var t=n.transitions[a(r)]||{};return void 0!==t[e]}return{type:e,id:t,get state(){return r},set:function(e){return r=e,r},send:o,can:l,rejects:i}}_={HEALTH:w,WRITE:k,ENTITY_TYPES:C,HEALTH_RANK:N,worse:E,makeEntity:P};function O(){return"undefined"!=typeof module&&module.exports?{cache:require("./cache.js"),failBus:require("./failBus.js"),health:require("./health.js"),ow:require("./optimisticWrite.js")}:{cache:window.AtriumCache,failBus:window.AtriumFailBus,health:window.AtriumHealth,ow:window.AtriumOptimisticWrite}}function D(e){e=e||{};var t=O(),n=t.cache.makeCache(e.store,e.now),r=t.failBus.makeFailBus(e.failBusOpts);return{cache:n,failBus:r,health:t.health,optimisticWrite:t.ow.optimisticWrite}}if("undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumHealth=_),"undefined"!=typeof module&&module.exports){var T=O();module.exports={createReliability:D,cache:T.cache,failBus:T.failBus,health:T.health,optimisticWrite:T.ow.optimisticWrite}}function M(e){e=e||{};var t=e.entity||null,n=e.failBus||null,r=e.source||"write:"+(e.key||"unknown");t&&t.send("click");try{e.applyLocal&&e.applyLocal()}catch(e){}try{e.audit&&e.audit("applied")}catch(e){}var i=!1;function a(){if(!i){i=!0,t&&t.send("ackOk");try{e.audit&&e.audit("confirmed")}catch(e){}try{e.onConfirm&&e.onConfirm()}catch(e){}try{n&&n.resolve&&n.resolve(r)}catch(e){}}}function o(a){if(!i){i=!0,t&&t.send("ackFail");try{e.audit&&e.audit("reverted")}catch(e){}try{e.onRevert&&e.onRevert(a)}catch(e){}if(n)try{n.raise(r,a||new Error("write reverted"),{severity:"station",retry:e.retry||null})}catch(e){}}}try{e.rpc(function(e){e&&e.ok?a():o(new Error(e&&e.message||"server rejected write"))},function(e){o(e)})}catch(e){o(e)}return{confirm:a,revert:o,isSettled:function(){return i}}}_={optimisticWrite:M};function R(e,t){try{console.error("[atriumX:overrides] "+e,t)}catch(e){}try{"function"==typeof Be&&Be("overrides:"+e,t)}catch(e){}}"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumOptimisticWrite=_);d=3e5,f=216e5;function h(e){return 0===e.indexOf("tx:stop:")?f:d}function I(e){try{var t=localStorage.getItem("atrium2:"+e);if(!t)return null;var n=JSON.parse(t),r=h(e);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+e)}catch(e){}return null}return n.data}catch(e){return null}}function L(e){try{var t=localStorage.getItem("atrium2:"+e);if(!t)return null;var n=JSON.parse(t),r=h(e);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+e)}catch(e){}return null}return n}catch(e){return null}}function F(){var e=[];try{for(var t=0;t<localStorage.length;t++){var n=localStorage.key(t);n&&0===n.indexOf("atrium2:")&&e.push(n)}}catch(e){}return e}function j(e){var t=Date.now(),n=F().map(function(e){var n=0;try{var r=JSON.parse(localStorage.getItem(e));n=r&&r.ts||0}catch(e){}var i=0===e.indexOf("atrium2:")?e.slice(8):e,a=h(i),o=t-n>a,l=0===i.indexOf("tx:stop:")&&!o;return{k:e,ts:n,expired:o,isLiveOverride:l}});n.sort(function(e,t){return e.isLiveOverride!==t.isLiveOverride?e.isLiveOverride?1:-1:e.expired!==t.expired?e.expired?-1:1:e.ts-t.ts});for(var r=0,i=0;i<n.length&&r<e&&!n[i].isLiveOverride;i++)try{localStorage.removeItem(n[i].k),r++}catch(e){}}function U(e,t){var n=JSON.stringify({ts:Date.now(),data:t});try{localStorage.setItem("atrium2:"+e,n)}catch(t){try{j(Math.max(1,Math.ceil(.2*F().length))),localStorage.setItem("atrium2:"+e,n)}catch(t){try{"undefined"!=typeof console&&console.warn("[atriumX] cache full; write dropped for "+e)}catch(e){}}}}function B(e){try{localStorage.removeItem("atrium2:"+e)}catch(e){}}var K=["atrium2:tx:stop:","atrium2:tx:sig:","atrium2:tx:amt:","atrium2:tx:flag:"];function H(e){for(var t=0;t<K.length;t++)if(0===e.indexOf(K[t]))return K[t];return null}function G(){try{for(var e=Date.now(),t=[],n=0;n<localStorage.length;n++){var r=localStorage.key(n);if(r&&H(r)){var i=h(r.slice(8));try{var a=JSON.parse(localStorage.getItem(r));(!a||e-(a.ts||0)>i)&&t.push(r)}catch(e){t.push(r)}}}t.forEach(function(e){try{localStorage.removeItem(e)}catch(e){}}),t.length&&console.log("[atriumX] cleared "+t.length+" stale override(s)")}catch(e){}}function W(e){var t=I("tx:stop:"+e);return null==t?null:parseInt(t,10)}function V(e,t){U("tx:stop:"+e,t)}function Y(e){B("tx:stop:"+e)}function q(e,t){U("tx:sig:"+e,String(t))}function J(e){B("tx:sig:"+e)}function X(e){return"1"===I("tx:flag:"+e)}function z(e){X(e)?B("tx:flag:"+e):U("tx:flag:"+e,"1")}var Q=["✓","wir","paid","transf","שולם","moved to trading","paid to client"];function Z(e){for(var t=String(e||""),n=0;n<Q.length;n++)if(t.indexOf(Q[n])>=0)return!0;return t.indexOf("הועבר")>=0&&-1===t.indexOf("טרם")}var ee=["הושלם","sign","complet","done","נחתם","חתום"];function te(e){for(var t=String(e||""),n=0;n<ee.length;n++)if(t.indexOf(ee[n])>=0)return!0;return!1}function ne(e){try{if(!e||!e.transfers||!Array.isArray(e.transfers.rows))return 0;var t=0;return e.transfers.rows.forEach(function(e){var n=e&&e.rowKey;if(n){var r=Z(String(e.execStatus||"").toLowerCase()),i=te(String(e.sigStatus||e.status||"").toLowerCase()),a=/\d/.test(String(e.amountText||"").trim()),o=W(n);null!=o&&r&&(Y(n),t++);var l=I("tx:sig:"+n);"1"!==l&&"0"!==l||!i||(J(n),t++),a&&null!=I("tx:amt:"+n)&&(B("tx:amt:"+n),t++)}}),t&&console.log("[atriumX] reconciled "+t+" override(s) against fresh boot"),t}catch(e){return R("reconcileOverridesWithBoot_",e),0}}function re(e,t){var n=te(String(e&&e.sigStatus||"").toLowerCase()),r=Z(String(e&&e.execStatus||"").toLowerCase()),i=n;if(t){var a=I("tx:sig:"+t);"1"===a?i=!0:"0"===a&&(i=!1)}var o=r,l=t?W(t):null;return 3===l?o=!0:1!==l&&2!==l||(o=!1),{sent:!0,signed:i,wired:o,overridden:null!=l}}var ie="object"==typeof BOOT&&BOOT||null,ae={transfers:u(ie&&ie.transfers||null),navWidget:u(ie&&ie.navWidget||null),playbook:u(ie&&ie.playbook||null),suggestions:u(ie&&ie.transferSuggestions||null),portfolio:u(ie&&ie.portfolio||null),closePack:u(null),schedule:u(null),fanOut:u(null),silentSignals:u([]),navRecon:u(null),health:u({}),failNonce:u(0),staleData:u(ie&&ie._stale?{lastKnownAt:ie._lastKnownAt||null}:null),view:u("home")};function oe(e){var t=e||"home";ae.view.value!==t&&(ae.view.value=t)}function le(e,t){var n=ae.health.value||{};if(n[e]!==t){var r={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i]);r[e]=t,ae.health.value=r}}function se(e,t){try{le(e,"error")}catch(e){}try{ae.failNonce.value=ae.failNonce.value+1}catch(e){}}ae.recordHealthError=se,"undefined"!=typeof window&&(window.atriumStore=ae);var ue=0;function ce(){return++ue}function de(e,t){if(null!=t&&t<ue){try{console.log("[atriumX] dropped superseded boot (gen "+t+" < "+ue+")")}catch(e){}return!1}if(!e)return!1;"transfers"in e&&(ae.transfers.value=e.transfers||null),"navWidget"in e&&(ae.navWidget.value=e.navWidget||null),"playbook"in e&&(ae.playbook.value=e.playbook||null),"transferSuggestions"in e&&(ae.suggestions.value=e.transferSuggestions||null),"portfolio"in e&&(ae.portfolio.value=e.portfolio||null),"closePack"in e&&(ae.closePack.value=e.closePack||null),"schedule"in e&&(ae.schedule.value=e.schedule||null),ae.staleData.value=e._stale?{lastKnownAt:e._lastKnownAt||null}:null;try{ne(e)}catch(e){}return!0}function fe(e){e=e||{};var t=e.render,n=e.rpc,r=e.report||function(e,t){try{console.error("[atriumX:boot] "+e,t)}catch(e){}};try{G()}catch(e){r("boot:sweep",e)}try{ne(ie)}catch(e){r("boot:reconcile",e)}if("function"==typeof t)try{t()}catch(e){r("boot:render",e)}try{null!=ae.portfolio.value&&le("portfolio","live")}catch(e){r("portfolio:seed",e)}n&&setTimeout(function(){try{n.transferSuggestions().then(function(e){ae.suggestions.value=e,le("suggestions","live")}).catch(function(e){le("suggestions","error"),r("suggestions",e)})}catch(e){r("suggestions:sync",e)}},2e3)}const pe="lvp_atrium_boot_cache_v1";function he(e){if(e&&"undefined"!=typeof localStorage)try{const t=Object.assign({},e,{_stale:!0,_lastKnownAt:(new Date).toISOString()});localStorage.setItem(pe,JSON.stringify(t))}catch(e){}}function ve(e,t){e&&"function"==typeof e.bootstrap&&e.bootstrap({lite:!0}).then(function(e){e&&e.portfolio&&(ae.portfolio.value=e.portfolio,le("portfolio","live"))}).catch(function(e){le("portfolio","error"),"function"==typeof t&&t("portfolio",e)})}function ge(){var e=s(!1),t=e[0],n=e[1],r=s(null),i=r[0],a=r[1];function o(e,r){r=r||{},t||(n(!0),a(null),Promise.resolve(e).then(function(e){n(!1),r.successMsg&&qe(r.successMsg,"success"),r.onSuccess&&r.onSuccess(e)}).catch(function(e){var t=r.errorMsg||e&&e.message||"action failed";n(!1),a(t),qe(t,"error")}))}return{busy:t,error:i,run:o}}const me="717035109771-18bc6sb4651ofk6ep82q1ka4vjum326v.apps.googleusercontent.com",_e="lvp_atrium_id_token",ye="legacyvpartners.com",be=6e4;function we(e){try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return null}}function ke(e){if(!e)return!1;const t=String(e.hd||""),n=String(e.email||"").toLowerCase(),r=t===ye||n.endsWith("@"+ye);return r&&(!0===e.email_verified||"true"===e.email_verified)}function $e(){if("undefined"==typeof localStorage)return null;let e;try{e=localStorage.getItem(_e)}catch(e){return null}if(!e)return null;const t=we(e);return t&&t.exp?1e3*Number(t.exp)<Date.now()+be?null:e:null}function xe(){const e=$e();if(!e)return null;const t=we(e);return t?String(t.email||"").toLowerCase():null}let Se=null,Ae=null,Ce=null;function Ne(e){const t=we(e.credential);if(ke(t)){try{localStorage.setItem(_e,e.credential)}catch(e){}if(Ae){const t=Ae;Ae=null,t(e.credential)}}else"function"==typeof Ce&&Ce()}function Ee(e,t){const n=$e();return n?Promise.resolve(n):(Ce=t||null,Se||(Se=new Promise(t=>{function n(){if(!("undefined"!=typeof window&&window.google&&window.google.accounts&&window.google.accounts.id))return void setTimeout(n,100);window.google.accounts.id.initialize({client_id:me,callback:Ne,hd:ye});const t="undefined"!=typeof document?document.getElementById(e):null;t&&window.google.accounts.id.renderButton(t,{theme:"outline",shape:"rectangular",size:"large",text:"signin_with"});try{window.google.accounts.id.prompt()}catch(e){}}Ae=t,n()}),Se))}function Pe(e,t,n){function r(){try{var r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r),t(!0)}catch(e){Be(n||"copy:fallback",e),t(!1)}}t=t||function(){},"undefined"!=typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(function(){t(!0)},r):r()}function Oe(e){return(e>=0?"+":"")+(100*e).toFixed(2)+"%"}const De="https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxIzQKx6SbDzJj0ezjZUkZVKuBB5Go4amrMyZWvWTIZaI3n92dT-cBjUWX9nIQKPTGf/exec";function Te(){return"undefined"!=typeof google&&!!google.script&&!!google.script.run}const Me=9e4;Error;class Re extends Error{constructor(e,t){super("RPC "+e+" did not return within "+t+"ms"),this.name="RpcTimeoutError",this.fnName=e,this.timeoutMs=t,this.rpcTimeout=!0}}class Ie extends Error{constructor(e){super("no idToken available for "+e),this.name="RpcUnauthenticatedError",this.fnName=e,this.rpcUnauthenticated=!0}}class Le extends Error{constructor(e,t){super("RPC "+e+" rejected: "+t),this.name="RpcUnauthorizedError",this.fnName=e,this.reason=t,this.rpcUnauthorized=!0}}function Fe(e,t){return new Promise((n,r)=>{let i=!1;const a=setTimeout(()=>{i||(i=!0,r(new Re(e,Me)))},Me);google.script.run.withSuccessHandler(e=>{i||(i=!0,clearTimeout(a),n(e))}).withFailureHandler(e=>{i||(i=!0,clearTimeout(a),r(e))})[e](...t)})}function je(e,t,n){n=n||{};const r=$e();if(!r&&!n.skipAuthGuard)return Promise.reject(new Ie(e));const i="undefined"!=typeof AbortController?new AbortController:null,a=i?setTimeout(()=>i.abort(),Me):null;return fetch(De,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({fn:e,args:t||[],idToken:r||""}),signal:i?i.signal:void 0}).then(e=>e.json()).then(t=>{if(a&&clearTimeout(a),!t||!0!==t.ok){const n=t&&(t.reason||t.error)||"unknown_error";if(t&&("unauthorized"===t.error||"unknown_fn"===t.error))throw new Le(e,n);throw new Error("RPC "+e+" failed: "+n+(t&&t.message?" / "+t.message:""))}return t.result}).catch(t=>{if(a&&clearTimeout(a),t&&"AbortError"===t.name)throw new Re(e,Me);throw t})}function Ue(e,t,n){return Te()?Fe(e,t||[]):je(e,t||[],n)}function Be(e,t){try{console.error("[atriumX] "+e,t)}catch(e){}try{const n="undefined"!=typeof window&&window.atriumStore||("undefined"!=typeof atriumStore?atriumStore:null);if(n)if("function"==typeof n.recordHealthError)n.recordHealthError(e,t);else if(n.health&&"object"==typeof n.health){const t=n.health.value&&"object"==typeof n.health.value?n.health.value:{},r={};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);r[e]="error",n.health.value=r}}catch(e){}try{Ue("logErrorForPortal",["atriumX:"+e,t&&t.message||String(t),t&&t.stack||""],{skipAuthGuard:!0}).catch(()=>{})}catch(e){}return t}function Ke(e,...t){return Ue(e,t).catch(t=>{throw Be(e,t),t})}function He(e,t,n){return Ue("logErrorForPortal",[e,t,n],{skipAuthGuard:!0}).catch(()=>!1)}const Ge={bootstrap:e=>Ke("getPortalBootstrap",e),appLinks:()=>Ke("getAppLinksForPortal"),transferSuggestions:()=>Ke("getTransferSuggestionsForPortal"),transferSuggestionLog:e=>Ke("getTransferSuggestionLogForPortal",e),applyTransferSuggestion:e=>Ke("applyTransferSuggestionForPortal",e),applyMultipleTransferSuggestions:e=>Ke("applyMultipleTransferSuggestionsForPortal",e),recordTransferSuggestionEvent:(e,t)=>Ke("recordTransferSuggestionEventForPortal",e,t),setTransferStatus:(e,t)=>Ke("setPortalTransferStatusForPortal",e,t),setTransferSigStatus:(e,t)=>Ke("setPortalTransferSigStatusForPortal",e,t),setTransferAmount:e=>Ke("setTransferAmountForPortal",e),rowsWithManualEvents:e=>Ke("getRowsWithManualEventsForPortal",e),monthlyTransferBreakdown:e=>Ke("getMonthlyTransferBreakdownForPortal",e),manualUpload:(e,t,n,r)=>Ke("manualUpload",e,t,n,r),fanOutStatus:(e,t)=>Ke("getFanOutStatusForPortal",e,t),triggerFanOut:(e,t)=>Ke("triggerFanOutForPortal",e,t),navReconciliation:(e,t)=>Ke("getNavReconciliationForPortal",e,t),approveNavClose:(e,t,n)=>Ke("approveNavCloseForPortal",e,t,n),playbookState:(e,t)=>Ke("getPlaybookStateForPortal",e,t),togglePlaybookStep:(e,t,n,r)=>Ke("togglePlaybookStepForPortal",e,t,n,r),lpSyncMoveToGroup:(e,t)=>Ke("lpSyncMoveToGroup",e,t),saveStoredRoughYield:(e,t)=>Ke("saveStoredRoughYield",e,t),portfolio:()=>Ke("getPortfolioForPortal"),quotes:e=>Ke("fetchQuotesForPortal",e),history:(e,t)=>Ke("fetchHistoryForPortal",e,t),fx:()=>Ke("fetchFxForPortal"),fundNavHistory:()=>Ke("fetchFundNavHistoryForPortal"),benchmarkHistory:(e,t)=>Ke("fetchBenchmarkHistoryForPortal",e,t),scheduleState:e=>Ke("getScheduleStateForPortal",e),completeTask:e=>Ke("completeTaskForPortal",e),removeTask:e=>Ke("removeTaskForPortal",e),updateTask:(e,t)=>Ke("updateTaskForPortal",e,t),onboardingSilentSignals:e=>Ke("getOnboardingSilentSignalsForPortal",e),dismissSilentSignal:e=>Ke("dismissSilentSignalForPortal",e),chatHistory:()=>Ke("getChatHistoryForPortal"),sendChatMessage:e=>Ke("sendChatMessageForPortal",e),resetChat:()=>Ke("resetChatForPortal"),logError:(e,t,n)=>He(e,t,n)};var We={promise:null,links:null,failedAt:0},Ve=3e4;function Ye(){var e=Date.now();return We.links?Promise.resolve(We.links):(We.promise&&e-We.failedAt<Ve||(We.promise=Ge.appLinks().then(function(e){var t=e||[];return We.links=t,t}).catch(function(e){throw We.promise=null,We.failedAt=Date.now(),e})),We.promise)}function qe(e,t){if("undefined"!=typeof document){var n=document.getElementById("toast");if(n){var r="error"===t;n.textContent=e;try{n.setAttribute("role",r?"alert":"status"),n.setAttribute("aria-live",r?"assertive":"polite")}catch(e){}n.className="toast is-show"+(r?" is-error":"success"===t?" is-success":""),clearTimeout(qe._t),qe._t=setTimeout(function(){n.className="toast"},r?8e3:3200)}else try{console.log("[toast] "+e)}catch(e){}}else try{console.log("[toast] "+e)}catch(e){}}var Je=e.bind(n);function Xe(){var e=ae.staleData.value;if(!e)return null;var t="";try{if(e.lastKnownAt){var n=new Date(e.lastKnownAt);isNaN(n.getTime())||(t=" from "+n.toLocaleString())}}catch(e){}return Je`
      <div class="stale-banner" role="status" aria-live="polite">
        Showing last-known data${t}. Numbers may be behind until the next refresh.
      </div>
    `}function ze(e){var t=l(null);return a(function(){try{t.current&&t.current.focus&&t.current.focus({preventScroll:!0})}catch(e){}},[e.view]),Je`
      <div class=${"page page--focused"} data-view=${e.view}>
        <${Xe} />
        <${et} label="masthead" fallback=${tt("masthead")}><${st} /><//>
        <${et} label="statusStrip" fallback=${tt("status strip")}><${pt} /><//>
        <${et} label="tabbar" fallback=${null}><${vt} /><//>
        <nav class="focused-nav" aria-label="Focused view navigation">
          <button type="button" class="focused-nav__back" ref=${t}
                  onClick=${function(){oe("home")}}
                  aria-label="Back to Home">← Home</button>
          <span class="focused-nav__crumb hdr-stub">${e.crumb}</span>
        </nav>
        <${et} label=${"focused:"+e.view} fallback=${tt(e.crumb+" view")}>
          ${e.children}
        <//>
        <${et} label="commandPalette" fallback=${null}><${Dn} /><//>
      </div>
    `}var Qe={transfers:{crumb:"Transfers",comp:Ri},close:{crumb:"Close",comp:_t},projecting:{crumb:"Projecting",comp:Sr},portfolio:{crumb:"Portfolio",comp:Yn},schedule:{crumb:"Schedule",comp:Br}},Ze=fe;function et(){t.call(this),this.state={err:null}}function tt(e){return Je`<div class="boundary-fallback" role="alert">${e} unavailable</div>`}function nt(e){var t="hdiv-sketch-"+e.seed;return Je`
      <svg class="hdiv" viewBox="0 0 1200 14" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <!-- filterUnits="userSpaceOnUse" required: the path is a perfectly
               horizontal line (zero-height bounding box), so the default
               objectBoundingBox percentage region resolves against that zero
               height and collapses to nothing -- this silently erased every
               divider on the page since Phase 4B shipped (caught + explained
               2026-07-14 while chasing Masthead.js's identical bug; same fix,
               region given in the viewBox's own units instead of percentages). -->
          <filter id=${t} filterUnits="userSpaceOnUse" x="-20" y="-40" width="1240" height="94">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.09" numOctaves="2" seed=${e.seed} result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
        <path d="M0,7 L1200,7" fill="none" stroke="#8A8268" stroke-width="1.5"
              stroke-linecap="round" filter=${"url(#"+t+")"}/>
      </svg>
    `}function rt(e){var t=s(0);a(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}function it(){rt([ae.view]);var e=ae.view.value,t=Qe[e];return t?Je`
        <${ze} view=${e} crumb=${t.crumb}>
          <${t.comp} />
        <//>
      `:Je`
      <div class="page" data-view="home">
        <${Xe} />
        <${et} label="masthead" fallback=${tt("masthead")}><${st} /><//>
        <${et} label="statusStrip" fallback=${tt("status strip")}><${pt} /><//>
        <${et} label="tabbar" fallback=${null}><${vt} /><//>
        <${et} label="home" fallback=${tt("home")}><${Wt} /><//>
        <${nt} seed="3" />
        <${et} label="homeSchedule" fallback=${tt("schedule")}><${Br} /><//>
        <${et} label="commandPalette" fallback=${null}><${Dn} /><//>
      </div>
    `}function at(){if("undefined"!=typeof document){var e=document.getElementById("atrium-root");e?r(Je`<${it} />`,e):Be("mount:no-root",new Error("#atrium-root missing"))}}et.prototype=Object.create(t.prototype),et.prototype.componentDidCatch=function(e){try{Be("home:"+(this.props.label||"panel"),e)}catch(e){}this.setState({err:e||new Error("render error")})},et.prototype.render=function(){return this.state&&this.state.err?null!=this.props.fallback?this.props.fallback:null:this.props.children},fe=function(){var e="undefined"!=typeof google&&!!google.script&&!!google.script.run;if(e)Ze({render:at,rpc:Ge,report:Be});else if("undefined"!=typeof document){var t=document.getElementById("atrium-gate"),n=document.getElementById("atrium-root"),r=document.getElementById("atrium-gate-error");Ee("atrium-gate-signin",function(){r&&(r.style.display="block")}).then(function(){try{window.__initialMe=xe()||""}catch(e){}t&&(t.style.display="none"),n&&(n.style.display=""),Ze({render:at,rpc:Ge,report:Be}),Ge&&"function"==typeof Ge.bootstrap&&Ge.bootstrap({lite:!0}).then(function(e){try{he(e)}catch(e){}}).catch(function(e){try{Be("bootCacheRefresh",e)}catch(e){}})})}else Ze({render:at,rpc:Ge,report:Be})};Je=e.bind(n);function ot(e,t){try{if("undefined"!=typeof window&&null!=window[e]&&""!==window[e])return window[e]}catch(e){}return t}function lt(){try{window.dispatchEvent(new CustomEvent("atriumX:openPalette"))}catch(e){}}function st(){var e=ot("__dateStr",""),t=ot("__initialMe","noa@legacyvpartners.com"),n=ot("__buildTag","dev");return Je`
      <header class="wm">
        <div class="wm__brand" aria-label="Legacy Value Partners">
          <svg class="wm__logo" viewBox="0 0 64 64" aria-hidden="true">
            <!-- Phase 4 interior redesign (2026-07-14): the same hand-wobble
                 technique as the sign-in gate's skyline and the map's rails
                 (Map/Line.js's #atrium-map-sketch), kept on the SHAPE only (not
                 the letterform) so the mark stays legible at 26px while still
                 reading as sketched, not printed. A SEPARATE filter def, own id
                 -- Masthead renders on every view including focused views where
                 the map's <defs> never mounts, so it can't share that filter's
                 id across two independent <svg> roots. -->
            <defs>
              <filter id="wm-sketch" x="-8%" y="-8%" width="116%" height="116%">
                <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="4" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </defs>
            <rect width="64" height="64" rx="6" fill="#D85E4C" filter="url(#wm-sketch)"></rect>
            <text x="50%" y="58%" dominant-baseline="central" text-anchor="middle"
                  font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  font-weight="800" font-size="44" fill="#F2EDE0">L</text>
          </svg>
          <span>Legacy</span>
          <span class="wm__sub">Value Partners</span>
        </div>
        <div class="wm__right">
          <button type="button" class="wm__search" onClick=${lt}
                  aria-label="Open search (or press Cmd+K)">
            Search <span class="wm__search-kbd">⌘K</span>
          </button>
          ${e?Je`<span>${e}</span>`:null}
          <span class="you">${t}</span>
          <span class="wm__build">build <b>${n}</b></span>
        </div>
      </header>
      <!-- Phase 4D (2026-07-14): a hand-wobbled coral underline beneath the
           wordmark bar, same feTurbulence/feDisplacementMap technique as the
           sign-in skyline and the map rails -- the one accent stroke that
           signals "drawn, not printed" the instant the page loads, before any
           data even paints. Own filter id (wm-underline-sketch), aria-hidden,
           pure chrome (S1: one line, no data). -->
      <svg class="wm__scribble" viewBox="0 0 1200 10" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <!-- filterUnits="userSpaceOnUse" is required here, not decorative: a
               perfectly horizontal line has a ZERO-HEIGHT bounding box, and the
               default objectBoundingBox filter units resolve any percentage
               region against that box -- 300%/500% of 0 is still 0, so the
               filter region collapsed to nothing and silently erased the whole
               line (caught live, 2026-07-14: a lime debug stroke rendered fine
               with the filter removed, vanished the instant it was reattached).
               userSpaceOnUse with an explicit region in the SAME units as the
               viewBox sidesteps the bbox entirely. -->
          <filter id="wm-underline-sketch" filterUnits="userSpaceOnUse" x="-20" y="-30" width="1240" height="70">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.11" numOctaves="2" seed="11" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
        <path d="M0,5 L1200,5" fill="none" stroke="#D85E4C" stroke-width="3"
              stroke-linecap="round" filter="url(#wm-underline-sketch)"/>
      </svg>
    `}var ut=Oe;Je=e.bind(n);function rt(e){var t=s(0);a(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}var ct=String.fromCharCode(8212);function dt(e){if(!e)return"";var t=new Date(e);if(isNaN(t.getTime()))return"";try{return t.toLocaleString()}catch(e){return t.toISOString()}}function ft(e){var t=e.lbl,n=e.state||"live",r="status__val"+(e.tone?" status__val--"+e.tone:""),i=e.title?t+(null!=e.value?" "+e.value:"")+" · "+e.title:null;return"loading"===n?Je`
        <div class="status__item" title=${e.title||null}
             role=${i?"group":null} aria-label=${i}>
          <span class="status__lbl">${t}</span>
          <span class="status__val is-loading" aria-busy="true">${ct}</span>
        </div>`:"error"===n?Je`
        <div class="status__item">
          <span class="status__lbl">${t}</span>
          <span class="status__val status__val--err"
                role="button" tabindex="0" title=${e.title||"fetch failed, click to retry"}
                aria-label=${t+": "+(e.title||"fetch failed, click to retry")}
                onClick=${e.onRetry}>err / retry</span>
        </div>`:Je`
      <div class="status__item" title=${e.title||null}
           role=${i?"group":null} aria-label=${i}>
        <span class="status__lbl">${t}</span>
        <span class=${r}>${e.value}</span>
      </div>`}function pt(){rt([ae.navWidget,ae.portfolio,ae.health]);var e=ae.navWidget.value,t=ae.portfolio.value,n=ae.health.value||{},r=e&&e.closed||{},i=e&&e.recon||null,a=n.portfolio||(t?"live":"loading"),o=t&&t.headline||null;function l(){return"error"===a?"error":o&&null!=o.ytd_pct?"live":"loading"}function s(){return"error"===a?"error":o&&null!=o.mtd_pct?"live":"loading"}function u(){try{ve(Ge,Be)}catch(e){Be("portfolio:retry",e)}}var c=o&&null!=o.ytd_pct?ut(o.ytd_pct):null,d=o&&null!=o.mtd_pct?ut(o.mtd_pct):null,f=o&&null!=o.ytd_pct?o.ytd_pct>=0?"up":"down":null,p=o&&null!=o.mtd_pct?o.mtd_pct>=0?"up":"down":null,h="live",v=ct,g=null,m="no snapshot reconciliation available";i&&(v=i.passed?"pass":"fail",i.deltaPctDisplay&&(v+=" ("+i.deltaPctDisplay+")"),g=i.passed?"up":"down",m=(i.monthLabel?i.monthLabel+" . ":"")+"NAV reconciliation "+(i.passed?"passed":"FAILED"));var _=null!=r.numeralDisplay?"live":"loading",y=null!=r.monthLabel||null!=r.label?"live":"loading",b=null;if(r.monthLabel){b="BDO NAV "+r.monthLabel;var w=dt(r.uploadedAt);w&&(b+=" · uploaded "+w)}var k="latest closed NAV month",$=t&&(t.as_of_iso||t.as_of)||"",x="FIBI portfolio basis"+($?" · as of "+$:"");return Je`
      <div class="status">
        <${ft} lbl="NAV"   state=${_}   value=${r.numeralDisplay} title=${b} />
        <${ft} lbl="Month" state=${y} value=${r.monthLabel||r.label} title=${k} />
        <${ft} lbl="YTD"   state=${l()} value=${c} tone=${f} onRetry=${u} title=${"live"===l()?x:null} />
        <${ft} lbl="MTD"   state=${s()} value=${d} tone=${p} onRetry=${u} title=${"live"===s()?x:null} />
        <${ft} lbl="Recon" state=${h} value=${v} tone=${g} title=${m} />
      </div>
    `}Je=e.bind(n);var ht=[{id:"home",label:"Home"},{id:"portfolio",label:"Portfolio"},{id:"transfers",label:"Transfers"},{id:"projecting",label:"Projecting"},{id:"close",label:"Close"},{id:"schedule",label:"Schedule"}];function vt(){var e=ae.view.value;return Je`
      <nav class="tabbar" aria-label="Sections">
        ${ht.map(function(t){var n=e===t.id;return Je`
            <button
              key=${t.id}
              type="button"
              class=${"tabbar__tab"+(n?" is-active":"")}
              aria-current=${n?"page":null}
              onClick=${function(){oe(t.id)}}
            >${t.label}</button>
          `})}
      </nav>
    `}Je=e.bind(n);var gt=qe;function mt(){return Ge.playbookState(null,{force:!0}).then(function(e){return e&&(ae.playbook.value=e),e}).catch(function(e){return Be("close:playbookReload",e),null})}function _t(){var e=ae.playbook.value,t=ae.navWidget.value,n=s(!1),r=n[0],i=n[1],a=s({}),o=a[0],l=a[1];function u(e,t){l(function(n){var r={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i]);return t?r[e]=t:delete r[e],r})}function c(e){var t=ae.playbook.value,n=t&&t.steps||[];return n[e]||null}function d(e){var t=c(e);if(t){var n=String(t.revShareCopy||"").trim();if(n){var r=t.revShareRows&&t.revShareRows.length||0;Pe(n,function(e){e?gt("Copied"+(r?" · "+r+" LPs":"")+" for Omri","success"):gt("Copy failed","error")},"close:copy:fallback")}else gt("Nothing to copy","error")}}function f(e){var t=c(e);if(t){var n=St(t);if(n.length){if("undefined"==typeof window||!window.confirm||window.confirm("File "+n.length+" into their People-board group?\n\n"+At(n))){u(e,"filing");var r=0,i=0,a=[];o()}}else gt("Nothing to file","success")}function o(){if(r>=n.length)return l();var e=n[r++];Ge.lpSyncMoveToGroup(e.itemId,e.toGroup).then(function(t){t&&t.ok?i++:a.push(e.name||e.itemId),o()}).catch(function(t){Be("close:lpSyncMoveToGroup",t),a.push(e.name||e.itemId),o()})}function l(){gt(Nt(i,a.length),a.length?"error":"success"),mt().then(function(){u(e,null)})}}function p(e){var t=c(e);if(t){var n=ae.playbook.value||{},r=n.month||{},i=!t.done,a=Ct(t.id),o=n,l=(n.steps||[]).map(function(t,n){if(n!==e)return t;var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r.done=i,r}),s={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.steps=l,"number"==typeof n.completedCount&&(s.completedCount=n.completedCount+(i?1:-1)),ae.playbook.value=s,u(e,"toggling"),Ge.togglePlaybookStep(r.year,r.month,a,i).then(function(){return mt()}).catch(function(e){ae.playbook.value=o,Be("close:toggleStep",e),gt("Could not toggle the step. Reverted.","error")}).then(function(){u(e,null)})}}if(!e)return Je`
        <div class="close-view" data-state="loading">
          <div class="close-view__empty">awaiting playbook…</div>
          <button type="button" class="close-view__retry" disabled=${r}
                  onClick=${function(){i(!0),mt().then(function(){i(!1)})}}>${r?"Retrying…":"Retry"}</button>
        </div>`;var h=Array.isArray(e.steps)?e.steps:[];if(!h.length)return Je`
        <div class="close-view" data-state="empty">
          <div class="close-view__empty">no close steps yet</div>
        </div>`;var v=wt(e),g=yt(h),m=v.total>0?Math.max(0,Math.min(100,v.done/v.total*100)):0,_=v.total>0&&v.done>=v.total,y=t&&Array.isArray(t.fanOut)?t.fanOut:[],b=e.month&&e.month.month,w=y.filter(function(e){return!(e.hideMonths&&b&&-1!==e.hideMonths.indexOf(b))}),k=!(!t||!0!==t.closedOk),$=!(!t||"boolean"!=typeof t.closedOk);return Je`
      <div class="close-view" data-state="live">
        <div class="close-view__top">
          <div class="close-vessel" role="progressbar"
               aria-valuenow=${v.done} aria-valuemin="0" aria-valuemax=${v.total}
               aria-label=${"Close progress: "+v.done+" of "+v.total+" steps done"}>
            <div class="close-vessel__glass">
              <div class=${"close-vessel__fill"+(_?" is-full":"")}
                   style=${"height:"+m.toFixed(1)+"%;"}></div>
            </div>
            <div class="close-vessel__frac">
              ${v.done}<span class="close-vessel__of">/ ${v.total}</span>
            </div>
            <div class="close-vessel__month">${$t(e)}</div>
          </div>

          <ol class="close-steps" aria-label="Close checklist steps">
            ${h.map(function(e,t){var n=!e.done&&t===g,r="close-step"+(e.done?" is-done":n?" is-now":" is-pending"),i=e.link&&bt(e.link);e.link&&!i&&Be("close:unsafe-link",new Error("non-http(s) link dropped: "+e.link));var a=Et(e,t),l=xt(e),s=o[t];return Je`
                <li key=${null!=e.id?e.id:t} class=${r} role="checkbox" aria-checked=${!!e.done}>
                  <span class="close-step__dot" aria-hidden="true"></span>
                  <span class="close-step__name">
                    ${i?Je`<a class="close-step__link" href=${e.link} target="_blank" rel="noopener">${a}</a>`:a}
                    ${e.autoDetail?Je`<span class="close-step__detail">${e.autoDetail}</span>`:null}
                  </span>
                  <span class="close-step__when">
                    ${e.done?"done":n?"now":""}
                    ${l&&"rscopy"===l.type?Je`<button type="button" class="close-step__act close-step__act--ghost"
                                aria-label="Copy the incoming-LP rev-share list for Omri"
                                title="Copy the incoming-LP rev-share list for Omri"
                                onClick=${function(){d(t)}}>⧉</button>`:null}
                    ${l&&"filelps"===l.type?Je`<button type="button" class="close-step__act"
                                disabled=${"filing"===s}
                                aria-label=${"Open File "+l.count+" for "+a}
                                title="Move these LPs into their People-board group"
                                onClick=${function(){f(t)}}>${"filing"===s?"Filing…":"File "+l.count}</button>`:null}
                    ${l&&"toggle-manual"===l.type?Je`<button type="button" class=${"close-step__act"+(e.done?" close-step__act--ghost":"")}
                                disabled=${"toggling"===s}
                                aria-label=${(e.done?"Undo ":"Mark ")+a+(e.done?"":" done")}
                                onClick=${function(){p(t)}}>${l.label}</button>`:null}
                  </span>
                </li>`})}
          </ol>
        </div>
        ${$?Je`
          <div class=${"close-actually"+(k?" is-clean":" is-not-clean")}
               role="status" aria-live="polite">
            ${k?"✓ Actually clean. Reconciled and every fan-out consumer done.":"○ Not yet. Checklist may look done, but reconciliation or fan-out is not."}
          </div>`:null}
        ${w.length?Je`
          <div class="close-fanout">
            <div class="close-fanout__title">Fan-out</div>
            <ul class="close-fanout__list">
              ${w.map(function(e){var t="close-fanout__row is-"+e.status,n=e.summaryLines&&e.summaryLines[0]||"";return Je`
                  <li key=${e.key} class=${t} title=${e.lpsTooltip||null}>
                    <span class="close-fanout__dot" aria-hidden="true"></span>
                    <span class="close-fanout__label">${e.label}</span>
                    <span class="close-fanout__status">${e.status}</span>
                    ${e.ranAt?Je`<span class="close-fanout__ran">${e.ranAt}</span>`:null}
                    <span class="close-fanout__summary">${n}</span>
                  </li>`})}
            </ul>
          </div>`:null}
      </div>
    `}function yt(e){e=e||[];for(var t=0;t<e.length;t++)if(!e[t].done&&(0===t||e[t-1].done))return t;return-1}function bt(e){return/^https?:\/\//i.test(String(null==e?"":e).trim())}function wt(e){var t=e&&Array.isArray(e.steps)?e.steps:[],n=e&&"number"==typeof e.completedCount?e.completedCount:t.filter(function(e){return e&&e.done}).length,r=e&&"number"==typeof e.totalCount?e.totalCount:t.length;return{done:n,total:r}}var kt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function $t(e,t){var n=e&&e.month;if(n&&"number"==typeof n.month&&n.month>=1&&n.month<=12)return kt[n.month-1]+" · in progress";var r=t||new Date;return kt[r.getMonth()]+" · in progress"}function xt(e){return e?"revshare"===e.id&&e.revShareCopy?{type:"rscopy"}:"filelps"===e.id&&e.lpMoves&&e.lpMoves.length?{type:"filelps",count:e.lpMoves.length}:e.auto?null:{type:"toggle-manual",label:e.done?"undo":"done"}:null}function St(e){return(e&&e.lpMoves||[]).filter(function(e){return!!(e&&e.itemId&&e.toGroup)})}function At(e){return(e||[]).map(function(e){return"• "+(e.name||e.itemId)+" → "+(e.toGroupLabel||e.toGroup)}).join("\n")}function Ct(e){return"string"!=typeof e||""===e||isNaN(Number(e))?e:Number(e)}function Nt(e,t){return t?"Filed "+e+" · "+t+" failed":"Filed "+e+" into their groups"}function Et(e,t){return e&&(e.title||e.label)||"Step "+(t+1)}Je=e.bind(n);var Pt=6;function Ot(e){var t=e.signals||[];if(!t.length)return null;var n=t.slice(0,Pt);return Je`
      <div class="hgrid">
        <div class="hblk" data-status="crit">
          <div class="hblk__hdr">
            <span class="hblk__title">Alarms</span>
            <span class="hblk__tag hblk__tag--crit">${t.length} item${1===t.length?"":"s"}</span>
          </div>
          <ul class="hblk__anoms">
            ${n.map(function(t,n){return Je`<li key=${t.key||n} class="hblk__anom">
                <span class="hblk__anom-lp">
                  ${t.label||t.kind||"signal"}
                  ${t.ageRelHe?Je`<span class="hblk__anom-sev">${t.ageRelHe}</span>`:null}
                </span>
                <span class="hblk__anom-ex" style="display:flex; gap:10px; margin-top:6px;">
                  ${t.gmailUrl?Je`<a class="hbtn hbtn--ghost hbtn--sm" href=${t.gmailUrl} target="_blank" rel="noopener">Open</a>`:null}
                  <button type="button" class="hbtn hbtn--ghost hbtn--sm"
                          onClick=${function(){e.onDismiss&&e.onDismiss(t.key)}}>Dismiss</button>
                </span>
              </li>`})}
          </ul>
          ${t.length>Pt?Je`<div class="hblk__note">+${t.length-Pt} more -- open the operator console to see the rest.</div>`:null}
        </div>
      </div>
    `}Je=e.bind(n);var Dt="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function Tt(e){return Dt&&"function"==typeof Dt.optimisticWrite?Dt.optimisticWrite(e):Mt(e)}function Mt(e){e=e||{};try{e.applyLocal&&e.applyLocal()}catch(e){}var t=!1;function n(){if(!t){t=!0;try{e.onConfirm&&e.onConfirm()}catch(e){}}}function r(n){if(!t){t=!0;try{e.onRevert&&e.onRevert(n)}catch(e){}}}try{e.rpc(function(e){e&&e.ok?n():r(new Error(e&&e.message||"server rejected write"))},function(e){r(e)})}catch(e){r(e)}return{confirm:n,revert:r,isSettled:function(){return t}}}var Rt=2500,It=30,Lt=["January","February","March","April","May","June","July","August","September","October","November","December"],Ft="https://script.google.com/macros/s/AKfycbxSu6wp_NHktucOde1kS-rCVeV1IjkMnJxpycHffy62YU7lb4o-A349gF6_wwSiXLywfg/exec?api=consoleSummary",jt=6e4,Ut=18e4,Bt=6e4,Kt={fetchedAt:0},Ht={fetchedAt:0,attention:0},Gt={fetchedAt:0,key:null};function Wt(){var e=ae.navWidget.value,t=ae.playbook.value,n=((ae.health.value||{}).portfolio||ae.portfolio.value,ae.fanOut.value);function r(e){ae.fanOut.value=e}var i=ae.silentSignals.value;function o(e){ae.silentSignals.value=e}var u=ae.navRecon.value,c=(ae.failNonce&&ae.failNonce.value,"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus,s({uploadPhase:null,readingPct:null,uploading:!1,failReason:null})),d=c[0],f=c[1],p=s(!1),h=p[0],v=p[1],g=s(null),m=g[0],_=g[1],y=s(!1),b=y[0],w=y[1],k=s(!1),$=k[0],x=k[1],S=s(!1),A=S[0],C=S[1],N=s(!1),E=N[0],P=N[1],O=l({timer:null,polls:0,ym:null,gen:0}),D=l(null),T=l(!0);function M(){Ge&&"function"==typeof Ge.onboardingSilentSignals&&Ge.onboardingSilentSignals({}).then(function(e){Kt.fetchedAt=Date.now(),x(!1);var t=e&&Array.isArray(e.rows)?e.rows:Array.isArray(e)?e:e&&e.signals||[],n=t.map(function(e){return e=e||{},e.kind&&!e.signalClass?e:{kind:e.signalClass,key:e.key,label:(e.lpNameHe?e.lpNameHe+" · ":"")+(e.signalLabelHe||""),gmailUrl:e.gmailUrl||null,severity:e.severity||"medium",ageRelHe:e.ageRelHe||null,evidence:e.evidence||null}});if(o(n),e&&e.banner){var r="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null;r&&"function"==typeof r.raise&&r.raise("onboarding:"+(e.banner.signalClass||"banner"),new Error(e.banner.text||e.banner.signalLabelHe||"onboarding banner"),{severity:"banner"})}}).catch(function(e){x(!0),Be("map:silentSignals",e)})}a(function(){return T.current=!0,function(){T.current=!1}},[]),a(function(){if("undefined"!=typeof document){var e=document.createElement("input");return e.type="file",e.id="nav-file-input",e.accept=".xlsx,.xls",e.style.display="none",e.addEventListener("change",function(){var t=e.files&&e.files[0];if(t){var n=new Date,r=new Date(n.getFullYear(),n.getMonth()-1,1);H(r.getFullYear(),r.getMonth()+1,t),e.value=""}}),document.body.appendChild(e),D.current=e,function(){try{document.body.removeChild(e)}catch(e){}}}},[]),a(function(){var e=Kt.fetchedAt>0&&Date.now()-Kt.fetchedAt<jt;e||M()},[]);var R=s(0),I=R[0],L=R[1];function F(e,t){return e&&t?Ge.navReconciliation(e,t).then(function(e){return ae.navRecon.value=e||null,C(!1),e}).catch(function(e){return C(!0),Be("map:navRecon",e),null}):Promise.resolve(null)}function j(){O.current.timer&&(clearTimeout(O.current.timer),O.current.timer=null)}function U(e,t){if(T.current){var n=O.current,i=n.gen;n.ym={year:e,month:t},Ge.fanOutStatus(e,t).then(function(a){if(n.gen===i&&T.current){r(a||null);var o=!(!a||!a._stale);if(v(o),_(o&&a&&a._lastKnownAt||null),n.polls++,o&&n.polls<=It)n.timer=setTimeout(function(){U(e,t)},Rt);else{var l=!o&&(!(!a||!a.pending)||(a&&a.consumers||[]).some(function(e){return"running"===e.status||"pending"===e.status||e.isPending}));!l||n.polls>It?(j(),w(l&&n.polls>It),o||F(e,t)):n.timer=setTimeout(function(){U(e,t)},Rt)}}}).catch(function(e){n.gen===i&&T.current&&(Be("map:fanOutStatus",e),j(),v(!0),_(null),w(!1))})}}function B(){v(!1),w(!1);var t=O.current.ym||gn(e);t&&K(t.year,t.month)}function K(e,t){T.current&&(j(),O.current.polls=0,O.current.gen+=1,U(e,t))}function H(e,t,n){var r=(Lt[t-1]||"month "+t)+" "+e;f({uploadPhase:"reading",readingPct:0,uploading:!1,failReason:null});var i=new FileReader;i.onprogress=function(e){e.lengthComputable&&f({uploadPhase:"reading",readingPct:e.loaded/e.total*100,uploading:!1,failReason:null})},i.onerror=function(){var e=i.error||new Error("file read failed"),t=e&&e.message||"file read failed";f({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:t}),Be("map:upload:read",e),qe("Upload failed: "+t,"error")},i.onload=function(){try{f({uploadPhase:"uploading",readingPct:null,uploading:!0,failReason:null});var a=String(i.result).split(",").pop();Ge.manualUpload(e,t,n.name,a).then(function(n){f({uploadPhase:"reconciling",readingPct:null,uploading:!1,failReason:null}),K(e,t);var i=ce();Ge.bootstrap({lite:!1}).then(function(n){n&&de(n,i),f({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),F(e,t),qe("NAV uploaded for "+r,"success")}).catch(function(e){f({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),Be("map:upload:reboot",e),qe("NAV uploaded for "+r+", but the refresh failed -- reload to see it","error")})}).catch(function(e){var t=e&&e.message||"upload failed";f({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:t}),Be("map:manualUpload",e),qe("Upload failed: "+t,"error")})}catch(e){var o=e&&e.message||"upload failed";f({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:o}),Be("map:upload:run",e),qe("Upload failed: "+o,"error")}},i.readAsDataURL(n)}function G(){D.current&&D.current.click()}function W(e,t){Ge.triggerFanOut(e,t).then(function(){K(e,t)}).catch(function(e){Be("map:triggerFanOut",e),qe("Retry failed, try again","error")})}function V(e){if(e){var t=i.filter(function(t){return t.key===e})[0]||null,n=i;Tt({key:"map:dismissSignal:"+e,applyLocal:function(){o(n.filter(function(t){return t.key!==e}))},rpc:function(t,n){Ge.dismissSilentSignal(e).then(t).catch(n)},onRevert:function(n){var r=ae.silentSignals.value;t&&!r.some(function(t){return t.key===e})&&o(r.concat([t])),Be("map:dismissSignal",n),qe("Dismiss failed, alarm restored","error")}})}}function Y(){var t=ae.navRecon.value;if(t&&t.monthKey){var n=/^(\d{4})-(\d{1,2})/.exec(t.monthKey);if(n)return{year:parseInt(n[1],10),month:parseInt(n[2],10)}}return O.current.ym||gn(e)}function q(e){var t=Y();if(!t||!e){var n=new Error(e?"no close month resolved":"no sha256 on the reconciliation payload");return Be("map:approveNavClose",n),Promise.resolve({ok:!1,error:n.message})}return Ge.approveNavClose(t.year,t.month,e).then(function(e){return e&&!1===e.ok?(Be("map:approveNavClose",new Error(e.error||"approve rejected")),e):(F(t.year,t.month),K(t.year,t.month),e||{ok:!0})}).catch(function(e){return Be("map:approveNavClose",e),{ok:!1,error:e&&e.message||String(e)}})}function J(){var e=Y();return e?F(e.year,e.month):Promise.resolve(null)}a(function(){if("function"==typeof fetch){Ht.fetchedAt>0&&L(Ht.attention);var e=Ht.fetchedAt>0&&Date.now()-Ht.fetchedAt<Ut;if(!e){var t=!1,n=null,r=setTimeout(function(){try{var e="function"==typeof AbortController?new AbortController:null;e&&(n=setTimeout(function(){e.abort()},2e4)),fetch(Ft,e?{signal:e.signal}:void 0).then(function(e){return e.json()}).then(function(e){if(n&&(clearTimeout(n),n=null),!t&&e&&e.ok){var r=Number(e.attention)||0;L(r),P(!1),Ht={fetchedAt:Date.now(),attention:r}}}).catch(function(e){n&&(clearTimeout(n),n=null),t||(P(!0),Be("map:consoleSummary",e))})}catch(e){t||(P(!0),Be("map:consoleSummary",e))}},3e3);return function(){t=!0,clearTimeout(r),n&&clearTimeout(n)}}}},[]),a(function(){var t=gn(e);if(t){var n=t.year+"-"+t.month,r=Gt.key===n&&Gt.fetchedAt>0&&Date.now()-Gt.fetchedAt<Bt&&!!ae.navRecon.value;r||F(t.year,t.month).then(function(e){e&&(Gt={key:n,fetchedAt:Date.now()})})}},[e&&e.closed&&e.closed.monthLabel]),a(function(){var t=gn(e);return t&&K(t.year,t.month),j},[e&&e.closed&&e.closed.monthLabel]);var X=[h?Je`<div key="fanOutStale" class="hblk__stale" role="alert">fan-out status${m?" stale · last known "+new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):" stale · last poll failed"} · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${B}>retry ↻</button></div>`:null,b&&!h?Je`<div key="fanOutCapped" class="hblk__stale hblk__stale--soft" role="status">checked out · some consumers still pending · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${B}>keep watching ↻</button></div>`:null,$?Je`<div key="silentSignalsFailed" class="hblk__stale" role="alert">alarms unavailable · onboarding signal feed failed · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${M}>retry ↻</button></div>`:null,A?Je`<div key="navReconFailed" class="hblk__stale" role="alert">nav reconciliation check unavailable</div>`:null];return Je`
      <div class="home">
        <div class="hgrid hgrid--top">
          <${Vt}
            navWidget=${e}
            navRecon=${u}
            playbook=${t}
            portfolio=${ae.portfolio.value}
            fanOut=${n}
            onApproveRecon=${q}
            onRerunRecon=${J}
            onRetryConsumer=${function(){var t=O.current.ym||gn(e);return t?W(t.year,t.month):Promise.resolve(null)}}
            onUpload=${G}
            onOpenClose=${function(){oe("close")}}
            uploadCtx=${d}
            staleBanners=${X} />
          <${en} onOpenProjecting=${function(){oe("projecting")}} />
        </div>
        <div class="hgrid">
          <${an}
            transfers=${ae.transfers.value}
            onOpenTransfers=${function(){oe("transfers")}} />
        </div>
        <${Ot} signals=${i} onDismiss=${V} />
        <${tn}
          consoleAttention=${I}
          consoleSummaryFailed=${E} />
      </div>
    `}Je=e.bind(n),ct=String.fromCharCode(8212);function Vt(e){var t=e.navWidget||null,n=e.navRecon||null,r=e.playbook||null,i=e.portfolio||null,a=e.fanOut||null,o=t&&t.closed||{},l=t&&t.recon,s=un(n,l),u="recon-fail"===s?"crit":"recon-pass"===s?null:"warn",c="recon-fail"===s?"FAILED":"recon-pass"===s?"pass":"pending",d=n&&n.deltaPctDisplay||l&&l.deltaPctDisplay||null,f=wt(r),p=f.total>0?Math.round(f.done/f.total*100):0,h="recon-pass"===s&&!(n&&!1===n.reconciled),v=i&&i.headline||null,g=v&&null!=v.ytd_pct?Yt(v.ytd_pct):null,m=v&&null!=v.mtd_pct?Yt(v.mtd_pct):null,_=n&&n.anomalies&&n.anomalies.length?n.anomalies:null,y=!!(n&&n.approvable&&n.sha256&&e.onApproveRecon),b=!!(a&&Array.isArray(a.consumers)&&a.consumers.some(function(e){return e&&"failed"===e.status})),w="recon-fail"===s?"crit":!h||f.done<f.total||b?"warn":"ok",k=ge(),$=ge(),x=ge(),S=k.busy,A=$.busy,C=x.busy,N=k.error||$.error||x.error;function E(){!S&&y&&k.run(Promise.resolve(e.onApproveRecon(n.sha256)).then(function(e){if(e&&!1===e.ok)throw new Error(e.error||"approve rejected");return e}))}function P(){!A&&e.onRerunRecon&&$.run(e.onRerunRecon())}function O(){!C&&e.onRetryConsumer&&x.run(e.onRetryConsumer())}return Je`
      <div class="hblk" data-status=${w}>
        <div class="hblk__hdr">
          <span class="hblk__title">NAV & Close</span>
          ${"recon-fail"===s?Je`<span class="hblk__tag hblk__tag--crit">recon FAILED</span>`:h?null:Je`<span class="hblk__tag hblk__tag--warn">recon unconfirmed</span>`}
        </div>
        <div class="hblk__big">${o.numeralDisplay||ct}</div>
        <div class="hblk__row"><span class="hblk__k">Month</span><span class="hblk__v">${o.monthLabel||o.label||ct}</span></div>
        <div class="hblk__row">
          <span class="hblk__k">Recon</span>
          <span class=${"hblk__v"+("crit"===u?" hblk__v--down":null===u?" hblk__v--up":"")}>
            ${c}${d?" · "+d:""}
          </span>
        </div>
        ${g||m?Je`<div class="hblk__row">
              <span class="hblk__k">YTD / MTD</span>
              <span class="hblk__v">
                ${g?Je`<span class=${v.ytd_pct>=0?"hblk__v--up":"hblk__v--down"}>${g}</span>`:ct}
                ${" / "}
                ${m?Je`<span class=${v.mtd_pct>=0?"hblk__v--up":"hblk__v--down"}>${m}</span>`:ct}
              </span>
            </div>`:null}
        <div class="hblk__row"><span class="hblk__k">Close checklist</span><span class="hblk__v">${f.total?f.done+" / "+f.total+" steps":ct}</span></div>
        ${f.total?Je`<div class="hblk__bar"><div class="hblk__bartrack"><div class="hblk__barfill" style=${"width:"+p+"%"}></div></div><div class="hblk__barlbl">${p}%</div></div>`:null}
        ${Xt(a)}
        ${_?Je`<ul class="hblk__anoms">
              ${Qt(_).map(function(e,t){return Je`<li key=${t} class="hblk__anom">
                  <span class="hblk__anom-lp">${e.name||e.class||"item"}${e.severity?Je`<span class="hblk__anom-sev">${e.severity}</span>`:null}</span>
                  <span class="hblk__anom-ex">${e.detail||""}</span>
                </li>`})}
            </ul>
            ${_.length>zt?Je`<div class="hblk__note">+${_.length-zt} more -- open the close checklist to see the rest.</div>`:null}`:h||"ready"===s?null:Je`<div class="hblk__note">Fan-out is gated until the anomaly is resolved.</div>`}
        ${N?Je`<div class="hblk__note" role="alert" style="color:var(--down)">${N}</div>`:null}
        ${qt(e.uploadCtx)}
        ${e.staleBanners}
        <div class="hblk__acts">
          ${y?Je`<button type="button" class="hbtn hbtn--warn" disabled=${S} onClick=${E}>${S?"Confirming…":"Confirm reconciliation"}</button>`:null}
          ${b&&e.onRetryConsumer?Je`<button type="button" class="hbtn hbtn--crit" disabled=${C} onClick=${O}>${C?"Retrying…":"Retry fan-out"}</button>`:null}
          ${e.onOpenClose?Je`<button type="button" class="hbtn hbtn--ghost" onClick=${e.onOpenClose}>Open close checklist →</button>`:null}
        </div>
        <div class="hblk__acts hblk__acts--secondary">
          ${e.onRerunRecon?Je`<button type="button" class="hbtn hbtn--ghost hbtn--sm" disabled=${A} onClick=${P}>${A?"Re-running…":"Re-run recon"}</button>`:null}
          ${e.onUpload?Je`<button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${e.onUpload}>Upload NAV</button>`:null}
        </div>
      </div>
    `}function Yt(e){var t=100*e,n=t>=0?"+":"";return n+t.toFixed(2)+"%"}function qt(e){if(!e||!e.uploadPhase)return null;if("failed"===e.uploadPhase)return Je`<div class="hblk__note" role="alert" style="color:var(--down)">Upload failed: ${e.failReason||"unknown error"}</div>`;var t="reading"===e.uploadPhase?"Reading file"+(null!=e.readingPct?" · "+Math.round(e.readingPct)+"%":""):"uploading"===e.uploadPhase?"Uploading NAV…":"reconciling"===e.uploadPhase?"Reconciling…":e.uploadPhase;return Je`<div class="hblk__note is-loading" aria-busy="true">${t}</div>`}var Jt={done:"done",failed:"failed",running:"running…",pending:"pending",skipped_seasonal:"not this month"};function Xt(e){var t=e&&Array.isArray(e.consumers)?e.consumers:null;return t&&t.length?Je`
      <div class="hblk__row hblk__row--fanout">
        <span class="hblk__k">Fan-out</span>
        <span class="hblk__fanout">
          ${t.map(function(e){var t=e.status||"pending",n="done"===t?"hblk__fochip--ok":"failed"===t?"hblk__fochip--crit":"running"===t||"pending"===t?"hblk__fochip--warn":"hblk__fochip--muted";return Je`<span key=${e.key} class=${"hblk__fochip "+n} title=${e.details||""}>${e.label||e.key} · ${Jt[t]||t}</span>`})}
        </span>
      </div>
    `:null}var zt=6;function Qt(e){var t=e.filter(function(e){return"hard"===e.severity}),n=e.filter(function(e){return"hard"!==e.severity});return t.concat(n).slice(0,zt)}Je=e.bind(n);var Zt=[1,2,3];function dt(e){if(!e)return null;var t=new Date(e);if(isNaN(t.getTime()))return null;try{return t.toLocaleString()}catch(e){return null}}function en(e){var t=(new Date).getDate(),n=-1!==Zt.indexOf(t);if(n)return Je`
        <div class="hblk" data-status="warn">
          <div class="hblk__hdr"><span class="hblk__title">Rough Yield · Projecting</span><span class="hblk__tag hblk__tag--warn">day 1-3 window</span></div>
          <${Sr} />
        </div>
      `;var r=ae.navWidget.value,i=ae.transfers.value,a=Dr(r,i&&i.monthLabel),o=a.lastResult&&dt(a.lastResult.ts);return Je`
      <div class="hblk" data-status="dormant">
        <div class="hblk__hdr"><span class="hblk__title">Rough Yield · Projecting</span><span class="hblk__tag">opens day 1</span></div>
        <div class="hblk__row"><span class="hblk__k">Last prepared</span><span class="hblk__v">${o||a.lastResult&&a.lastResult.display||"not prepared yet"}</span></div>
        <div class="hblk__row"><span class="hblk__k">Basis</span><span class="hblk__v">${a.prevMonthLabel||Er(a.prev,a.cur)}</span></div>
        <div class="hblk__note">Quiet outside the day-1-3 window. Prev auto-fills from NAV & Close, nothing gets re-typed under pressure.</div>
        <div class="hblk__acts">
          <button type="button" class="hbtn hbtn--ghost" onClick=${e.onOpenProjecting}>Open →</button>
        </div>
      </div>
    `}Je=e.bind(n);function tn(e){return Je`
      <div class="hgrid hgrid--small">
        ${"number"==typeof e.consoleAttention&&e.consoleAttention>0?Je`<div class="hblk" data-status="warn">
              <div class="hblk__hdr"><span class="hblk__title">Operator Console</span></div>
              <div class="hblk__mini"><span class="hblk__badge">${e.consoleAttention}</span> attention</div>
              <div class="hblk__minisub">LP onboarding, needs a look</div>
              <div class="hblk__acts"><a class="hbtn hbtn--ghost" href="https://sign.legacyvpartners.com/console" target="_blank" rel="noopener">Open ↗</a></div>
            </div>`:null}
        ${e.consoleSummaryFailed?Je`<div class="hblk" data-status="warn">
              <div class="hblk__hdr"><span class="hblk__title">Operator Console</span></div>
              <div class="hblk__minisub">attention count unavailable</div>
            </div>`:null}
      </div>
    `}Je=e.bind(n);var nn=[{key:"drafted",label:"Drafted",he:"חדש"},{key:"atAvi",label:"At AVI",he:"נשלח לאבי"},{key:"approved",label:"Approved",he:"מאושר"},{key:"transferred",label:"Transferred",he:"הועברו"}];function rn(e){var t=null;if(e.forEach(function(e){var n=e&&(e.startDateIso||e.startDate);if(n){var r=new Date(n);isNaN(r.getTime())||(null===t||r<t)&&(t=r)}}),null===t)return null;var n=Math.floor((Date.now()-t.getTime())/864e5);return n>=0?n:null}function an(e){var t=e.transfers||null,n=t&&Array.isArray(t.rows)?t.rows:[],r=sa(n,t&&t.monthLabel),i=Ui(),a={drafted:[],atAvi:[],approved:[],transferred:[]};r.forEach(function(e){var t=Bi(e,i),n=ia(e,t);a[n]&&a[n].push(e)});var o=a.atAvi.length,l=o?rn(a.atAvi):null,s=o?"crit":"ok";return Je`
      <div class="hblk" data-status=${s}>
        <div class="hblk__hdr">
          <span class="hblk__title">Transfers</span>
          ${o?Je`<span class="hblk__tag hblk__tag--crit">${o} stuck at AVI${null!=l?" · "+l+"d":""}</span>`:null}
        </div>
        <div class="hblk__pipeline">
          ${nn.map(function(e){var t=a[e.key].length,n="atAvi"===e.key&&t>0?"crit":null;return Je`<div key=${e.key} class="hstage" data-flag=${n}>
              <div class="hstage__lbl">${e.label} <span class="hstage__he">${e.he}</span></div>
              <div class="hstage__n">${t}</div>
            </div>`})}
        </div>
        ${e.staleBanners}
        <div class="hblk__acts">
          ${o?Je`<button type="button" class="hbtn hbtn--crit" onClick=${e.onOpenTransfers}>Review ${o} at AVI →</button>`:Je`<button type="button" class="hbtn hbtn--ghost" onClick=${e.onOpenTransfers}>Open →</button>`}
        </div>
      </div>
    `}var on="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};function ln(e){switch(e){case"done":return on.OK;case"running":return on.RUNNING;case"failed":return on.FAILED;case"skipped_seasonal":return"SKIPPED";case"pending":return on.PENDING;default:return null}}function sn(e){if(e=e||{},e.uploadPhase)return e.uploadPhase;var t=e.navWidget||null;return e.uploading?"uploading":null!=e.readingPct?"reading":t&&t.ingestRunning?"reconciling":un(e.navRecon,t&&t.recon)}function un(e,t){var n=!(!e||!1!==e.reconciled||!0===e.approved),r=!(!t||t.passed);if(n||r)return"recon-fail";var i=!(!e||!0!==e.reconciled),a=!(!t||!0!==t.passed);return i||a?"recon-pass":"ready"}var cn={close:function(e,t){var n=t.playbook;if(n&&Array.isArray(n.steps)&&n.steps.length){var r="number"==typeof n.completedCount?n.completedCount:n.steps.filter(function(e){return e&&e.done}).length,i="number"==typeof n.totalCount?n.totalCount:n.steps.length;e.health=pn(e.health,i>0&&r>=i?on.OK:on.RUNNING),e.reason||(e.reason="close "+r+" / "+i)}},portfolio:function(e,t){if(t.portfolioHealth){var n="error"===t.portfolioHealth?on.FAILED:"loading"===t.portfolioHealth?on.PENDING:on.OK;e.health=pn(e.health,n),n===on.FAILED&&(e.badge=e.badge||"!",e.retryable=!0,e.reason||(e.reason="portfolio fetch failed"))}},"operator-console":function(e,t,n){"number"==typeof t.consoleAttention&&t.consoleAttention>0&&(e.health=pn(e.health,on.ANOMALY),e.badge=String(t.consoleAttention+n),e.reason=(e.reason?e.reason+" · ":"")+t.consoleAttention+" console attention item"+(1===t.consoleAttention?"":"s"))}};function dn(e){e=e||{};var t=e.fanOut||null,n=e.silentSignals||[],r=e.failBus||null,i={};if(t&&t.consumers)for(var a=0;a<t.consumers.length;a++){var o=t.consumers[a];o&&o.key&&(i[o.key]=o)}for(var l={},s=0;s<n.length;s++){var u=n[s]||{},c=u.station||hn(u.kind)||"console";l[c]=(l[c]||0)+1}for(var d={},f=0;f<mn.length;f++){var p=mn[f],h=null,v=null,g=null,m=!1,_=p.href||null,y=null;if(p.isUpload){var b=e.uploadCtx||{},w={uploadPhase:b.uploadPhase,uploading:b.uploading,readingPct:b.readingPct,navWidget:e.navWidget||b.navWidget||null,navRecon:e.navRecon||null};h=sn(w),d[p.id]={health:h,badge:null,reason:null,retryable:!1,openUrl:null,isUpload:!0}}else{if(p.consumerKey&&i[p.consumerKey]){var k=i[p.consumerKey],$=ln(k.status);$&&(h=$,k.details&&(g=k.details),k.manualOpenUrl&&(_=k.manualOpenUrl),$===on.FAILED&&(v="!",m=!0)),y=Object.prototype.hasOwnProperty.call(k,"dispatch")?null===k.dispatch?"unknown":k.dispatch:null}p.alarmKey&&l[p.alarmKey]&&(h=pn(h,on.ANOMALY),v=String(l[p.alarmKey]),g||(g=l[p.alarmKey]+" attention item"+(1===l[p.alarmKey]?"":"s")));var x=cn[p.id];if(x){var S={health:h,badge:v,reason:g,retryable:m};x(S,e,l[p.alarmKey]||0),h=S.health,v=S.badge,g=S.reason,m=S.retryable}if(r&&"function"==typeof r.stationHealth){var A=r.stationHealth(p.id);A&&!A.resolved&&(h=pn(h,on.FAILED),v=v||"!",m=!0,g||(g=A.message||"fetch failed"),A.retry&&(d[p.id+":__retry"]=A.retry))}d[p.id]={health:h,badge:v,reason:g,retryable:m,openUrl:_,dispatch:y,consumerKey:p.consumerKey||null}}}return d}var fn={OK:0,SKIPPED:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function pn(e,t){if(null==e)return t;if(null==t)return e;var n=null==fn[e]?-1:fn[e],r=null==fn[t]?-1:fn[t];return r>n?t:e}function hn(e){switch(e){case"sig_mismatch":case"bank_pushback":return"transfers";case"drive_proxy_request":case"easysend_error":return"easysend";case"bdo_ishur_unapproved":case"bdo_ooo_banner":return"console";default:return null}}var vn=["January","February","March","April","May","June","July","August","September","October","November","December"];function gn(e){var t=e&&e.closed;if(!t)return null;if(t.year&&t.month)return{year:t.year,month:t.month};if(t.monthLabel){var n=/^(\w+)\s+(\d{4})$/.exec(String(t.monthLabel).trim());if(n){var r=vn.indexOf(n[1]);if(r>=0)return{year:parseInt(n[2],10),month:r+1}}}return null}var mn=[{id:"upload",role:"upload",line:"nav",x:175,y:150,labelSide:"right",label:"Upload NAV",tip:"Upload audited NAV (xlsx to cache to pipeline)",isUpload:!0},{id:"factsheet",role:"consumer",line:"nav",x:235,y:150,labelSide:"above",label:"Fct",tip:"Fact sheet · monthly LP-facing",href:"https://docs.google.com/spreadsheets/d/1Z34Yq3rlfQSRKhsexRVnb42XPb88YeabSv7mcpgJ4qs/edit",consumerKey:"factsheet",flowOrder:1},{id:"fo-reports",role:"consumer",line:"nav",x:310,y:150,labelSide:"below",label:"Foa",tip:"FO carry · semi-annual H1/H2 distribution + payout docs",href:"https://docs.google.com/spreadsheets/d/13SDNCrSNP_lthyr4woacjl8HEsPXZlo4lyFimmSPed4/edit",consumerKey:"family-office",flowOrder:2},{id:"operator-console",role:"through",line:"nav",x:475,y:90,labelSide:"above",label:"Op",tip:"Operator Console · LP onboarding (Cayman + Israel)",href:"https://sign.legacyvpartners.com/console",alarmKey:"console"},{id:"easysend-agent",role:"interchange",line:"nav",x:475,y:150,labelSide:"above",label:"Es",tip:"EasySend agent · live process management (NAV ↔ Cross-cut)",href:"https://legacy-value-partners.easysend.app/global-agent",lines:["nav","cross"],capTop:"--blue",capBottom:"--plum",alarmKey:"easysend"},{id:"gafner",role:"consumer",line:"nav",x:820,y:150,labelSide:"below",label:"Gfn",tip:"Gafner statement",href:"https://docs.google.com/spreadsheets/d/198ZVw-4RPr-KWX-KwpccHV1ofzqqHdq7adqSGVwAkVQ/edit",consumerKey:"gafner-bound",flowOrder:3},{id:"fibi-ws",role:"through",line:"nav",x:895,y:150,labelSide:"above",label:"Ws",tip:"WS Signer · upload xlsm, code signs and dates",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbwYp1O7A_GpikCM-bbazwkPjPc4MtID5oV8S-c338iptQfCxUanSu6qSgqhczwitG7GfA/exec"},{id:"form-867",role:"through",line:"nav-867",x:1005,y:90,labelSide:"above",label:"867",tip:"Form 867 · annual withholding-tax generator",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbytfIVXYCmzqtAg0u33YVNue03vBq5ZGlYGGYnYtrWMsJZt-grhi0pXgVHWrGbyMi3z/exec"},{id:"transfer-tracker",role:"through",line:"daily",x:235,y:250,labelSide:"above",label:"Tf",tip:"Transfers · the money workshop (sign / wire / amounts)",href:"https://docs.google.com/spreadsheets/d/1BcFFah16W-sYUHqIt6JyUttMOIQgQ7OyGEPE2zHpy6c/edit",alarmKey:"transfers",focusView:"transfers"},{id:"invoice",role:"through",line:"daily",x:310,y:250,labelSide:"below",label:"Inv",tip:"Invoice Reviewer · AI-assisted invoice approval drafts",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxGsshd9Cc9TB7nl0WzMTWaBHiMBIE97UHoLWVQlT4K/exec",consumerKey:"invoice-processor"},{id:"close",role:"through",line:"daily",x:400,y:250,labelSide:"above",label:"Cls",tip:"Close · monthly close checklist (the filling vessel)",focusView:"close"},{id:"projecting",role:"through",line:"daily",x:470,y:250,labelSide:"above",label:"Prj",tip:"Projecting · Rough Yield / day-1 WhatsApp yield card",focusView:"projecting",emphasisDays:[1,2,3]},{id:"portfolio",role:"through",line:"daily",x:540,y:250,labelSide:"below",label:"Pf",tip:"Portfolio · positions, movers, NAV chart",focusView:"portfolio"},{id:"builder-hub",role:"hub",line:"daily",x:615,y:237,labelSide:"below",label:"Bld",tip:"EasySend Builder · MAJOR HUB · NAV ↔ Daily ↔ Cross-cut",href:"https://builder.easysend.io/app/customers/legacy-value-partners/agent-dashboard",lines:["nav","cross","daily"],isHub:!0},{id:"payslip",role:"consumer",line:"daily",x:850,y:250,labelSide:"above",label:"Pyl",tip:"Payslip · monthly payslip parser",href:"https://docs.google.com/spreadsheets/d/1QhfGYFxKAnJHHSkBzI2N1aMyDi94fqCJ3PvZ3jxl8xA/edit",consumerKey:"salary"},{id:"monday",role:"interchange",line:"ext",x:1060,y:150,labelSide:"right",label:"Mon",tip:"Monday · People board (investor profiles, qualification, files)",href:"https://legacyvpartners.monday.com/boards/1606766164",lines:["nav","ext"],capTop:"--blue",capBottom:"--slate"},{id:"calendar",role:"through",line:"ext",x:1060,y:200,labelSide:"right",label:"Cal",tip:"Google Calendar · daily",href:"https://calendar.google.com/",focusView:"schedule"},{id:"gmail",role:"interchange",line:"ext",x:1060,y:250,labelSide:"right",label:"Gml",tip:"Gmail · daily inbox (Daily terminus interchange)",href:"https://mail.google.com/",lines:["daily","ext"],capTop:"--mustard",capBottom:"--slate"},{id:"drive",role:"interchange",line:"ext",x:1060,y:350,labelSide:"right",label:"Drv",tip:"Drive · shared files (LP onboarding terminus interchange)",href:"https://drive.google.com/",lines:["lp","ext"],capTop:"--coral",capBottom:"--slate"}],_n={nav:"--blue","nav-867":"--blue",daily:"--mustard",lp:"--coral",cross:"--plum",ext:"--slate"},yn=(mn.filter(function(e){return null!=e.flowOrder}).sort(function(e,t){return e.flowOrder-t.flowOrder}).map(function(e){return e.id}),function(){for(var e={},t=0;t<mn.length;t++)mn[t].consumerKey&&(e[mn[t].consumerKey]=mn[t].id)}(),Je=e.bind(n),String.fromCharCode(8230));function bn(e){var t=_n[e];return t?"var("+t+")":"var(--ink-faint)"}function wn(e){if(e.tip){var t=e.tip.split(String.fromCharCode(183))[0].trim();if(t)return t}return e.label}function kn(){return mn.filter(function(e){return!e.isUpload&&!e.focusView}).map(function(e){var t=wn(e);return{id:"go-"+e.id,kind:"destination",stationId:e.id,consumerKey:e.consumerKey||null,label:t,hint:e.label,keywords:(t+" "+e.label+" "+(e.tip||"")).toLowerCase(),lineColor:bn(e.line),href:e.href,isUpload:!!e.isUpload,run:function(t){An(e),t.close()}}})}function $n(e){return Array.isArray(e)?e.filter(function(e){return e&&!e.isHeader&&e.url}).map(function(e){return{id:"app-"+e.key,kind:"app-link",label:e.label||e.key,hint:e.cadence||"",keywords:(String(e.label||"")+" "+String(e.subtitle||"")+" "+String(e.key||"")).toLowerCase(),href:e.url,run:function(t){try{var n=window.open(e.url,"_blank","noopener");n||(location.href=e.url)}catch(t){Be("palette:app-link:"+e.key,t)}t.close()}}}):[]}function xn(){return[{id:"act-upload",kind:"action",label:"Upload audited NAV",hint:"upload",keywords:"upload nav audited xlsx fan out fanout trigger ingest",run:function(e){Nn(),e.close()}},{id:"act-transfers",kind:"action",label:"Jump to Transfers",hint:"tracker",keywords:"transfers transfer tracker daily jump money wires",run:function(e){Sn("transfer-tracker"),e.close()}},{id:"act-refresh-portfolio",kind:"action",label:"Refresh portfolio",hint:"ytd / mtd",keywords:"refresh portfolio reload ytd mtd retry performance",run:function(e){En(),e.close()}},{id:"act-open-close",kind:"action",label:"Open Close",hint:"checklist",keywords:"close checklist playbook month vessel steps filing revshare",run:function(e){oe("close"),e.close()}},{id:"act-open-projecting",kind:"action",label:"Open Projecting",hint:"rough yield",keywords:"projecting yield rough net flows closing whatsapp omri",run:function(e){oe("projecting"),e.close()}},{id:"act-open-portfolio",kind:"action",label:"Open Portfolio",hint:"positions",keywords:"portfolio positions movers chart benchmark nav fx allocation",run:function(e){oe("portfolio"),e.close()}},{id:"act-open-schedule",kind:"action",label:"Open Schedule",hint:"departures",keywords:"schedule departures board tasks events calendar today",run:function(e){oe("schedule"),e.close()}}]}function Sn(e){for(var t=0;t<mn.length;t++)if(mn[t].id===e)return void An(mn[t])}function An(e){if(e.isUpload)Nn();else if(e.focusView)oe(e.focusView);else if(e.href)try{var t=window.open(e.href,"_blank","noopener");t||(location.href=e.href)}catch(t){Be("palette:open:"+e.id,t)}else Cn(e.id)}function Cn(e){try{var t=document.querySelector('[data-station="'+e+'"]');t&&t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});try{window.dispatchEvent(new CustomEvent("atrium:open-station",{detail:{id:e}}))}catch(e){}}catch(t){Be("palette:scroll:"+e,t)}}function Nn(){"home"!==ae.view.value&&oe("home");var e=0;!function t(){var n=document.getElementById("nav-file-input");n&&"function"==typeof n.click?n.click():e++<20?setTimeout(t,50):(Be("palette:upload:no-input",new Error("#nav-file-input not mounted after routing home")),qe("Could not open the upload picker -- open Home and use Upload NAV directly","error"))}()}function En(){try{"function"==typeof ve?ve(Ge,Be):Ge.portfolio().catch(function(e){Be("palette:portfolio",e)})}catch(e){Be("palette:portfolio:sync",e)}}function Pn(e){switch(e){case"ok":return{txt:"ok",tone:"ok"};case"running":return{txt:"running",tone:"running"};case"pending":return{txt:"queued",tone:"pending"};case"skipped":return{txt:"skipped",tone:"stale"};case"stale":return{txt:"stale",tone:"stale"};case"failed":return{txt:"failed",tone:"failed"};case"anomaly":return{txt:"anomaly",tone:"anomaly"};default:return null}}function On(e,t){if(!t)return 1;var n=e.keywords,r=e.label.toLowerCase();if(0===r.indexOf(t))return 1e3;if(r.indexOf(t)>=0)return 800;if(n.indexOf(t)>=0)return 500;for(var i=0,a=0;a<n.length&&i<t.length;a++)n.charCodeAt(a)===t.charCodeAt(i)&&i++;return i===t.length?100:-1}function Dn(){var e=s(!1),t=e[0],n=e[1],r=s(""),u=r[0],c=r[1],d=s(0),f=d[0],p=d[1],h=l(null),v=l(null),g=l(null),m=ae.navWidget.value,_=ae.fanOut&&ae.fanOut.value||null,y=ae.silentSignals&&ae.silentSignals.value||[],b=o(function(){try{return dn({navWidget:m,fanOut:_,silentSignals:y})||{}}catch(e){return Be("palette:health",e),{}}},[m,_,y]),w=s([]),k=w[0],$=w[1];a(function(){t&&Ye().then(function(e){$(e)}).catch(function(e){Be("palette:appLinks",e)})},[t]);var x=o(function(){return xn().concat(kn()).concat($n(k))},[k]),S=o(function(){for(var e=u.trim().toLowerCase(),t=[],n=0;n<x.length;n++){var r=On(x[n],e);r>=0&&t.push({item:x[n],sc:r,ord:n})}return t.sort(function(e,t){return t.sc-e.sc||e.ord-t.ord}),t.map(function(e){return e.item})},[u,x]);a(function(){f>=S.length&&p(S.length?S.length-1:0)},[S.length]),a(function(){function e(e){var r=e.key,i=e.metaKey||e.ctrlKey;if(i&&("k"===r||"K"===r))return e.preventDefault(),void n(function(e){return!e});var a=e.target,o=a&&a.tagName?a.tagName.toLowerCase():"",l="input"===o||"textarea"===o||a&&a.isContentEditable;if(!t&&!l){if("/"===r)return e.preventDefault(),void n(!0);if(!i&&!e.altKey){var s=String(r||"").toLowerCase();if("u"===s)e.preventDefault(),Nn();else if("r"===s&&"transfers"===ae.view.value){var u=document.querySelector(".tx-view__refresh");u&&(e.preventDefault(),u.click())}else if("e"===s){var c=document.querySelector(".tx-band--transferred .tx-band__hdr--toggle");c&&(e.preventDefault(),c.click())}}}}function r(){n(!0)}return window.addEventListener("keydown",e),window.addEventListener("atriumX:openPalette",r),function(){window.removeEventListener("keydown",e),window.removeEventListener("atriumX:openPalette",r)}},[t]),a(function(){if(t){try{g.current=document.activeElement}catch(e){}c(""),p(0);var e=setTimeout(function(){try{h.current&&h.current.focus()}catch(e){}},0);return function(){clearTimeout(e)}}try{var n=g.current;n&&"function"==typeof n.focus&&n.focus()}catch(e){}},[t]);var A=i(function(){n(!1)},[]);function C(e){if(e)try{e.run({close:A})}catch(t){Be("palette:run:"+e.id,t),A()}}function N(e){var t=e.key;if("Escape"===t)return e.preventDefault(),void A();if("ArrowDown"===t)return e.preventDefault(),void p(function(e){return S.length?(e+1)%S.length:0});if("ArrowUp"===t)return e.preventDefault(),void p(function(e){return S.length?(e-1+S.length)%S.length:0});if("Home"===t)return e.preventDefault(),void p(0);if("End"===t)return e.preventDefault(),void p(S.length?S.length-1:0);if("Enter"===t)return e.preventDefault(),void C(S[f]);if("Tab"===t){e.preventDefault();try{h.current&&h.current.focus()}catch(e){}}}if(a(function(){if(t&&v.current){var e=v.current.querySelector("#palette-opt-"+f);if(e&&e.scrollIntoView)try{e.scrollIntoView({block:"nearest"})}catch(e){}}},[f,t]),!t)return null;var E=S.length?"palette-opt-"+f:null,P="Jump to a station, view, or action"+yn;return Je`
      <div class="cmdp-overlay" onMouseDown=${function(e){e.target===e.currentTarget&&A()}}>
        <div class="cmdp" role="dialog" aria-modal="true" aria-label="Command palette"
             onKeyDown=${N}>
          <div class="cmdp__search">
            <span class="cmdp__icon" aria-hidden="true">${String.fromCharCode(8981)}</span>
            <input ref=${h} class="cmdp__input" type="text"
                   placeholder=${P}
                   role="combobox" aria-expanded="true" aria-controls="cmdp-list"
                   aria-activedescendant=${E}
                   autocomplete="off" autocorrect="off" spellcheck=${!1}
                   value=${u}
                   onInput=${function(e){c(e.target.value),p(0)}} />
            <kbd class="cmdp__kbd" aria-hidden="true">esc</kbd>
          </div>

          <ul ref=${v} id="cmdp-list" class="cmdp__list" role="listbox"
              aria-label="Results">
            ${0===S.length?Je`
              <li class="cmdp__empty" role="option" aria-disabled="true">No matches</li>
            `:S.map(function(e,t){var n=t===f,r="destination"===e.kind&&e.stationId&&b[e.stationId]||null,i=r&&r.health?Pn(String(r.health).toLowerCase()):null;return Je`
                <li id=${"palette-opt-"+t}
                    role="option"
                    aria-selected=${n}
                    class=${"cmdp__opt"+(n?" is-active":"")}
                    onMouseEnter=${function(){p(t)}}
                    onClick=${function(){C(e)}}>
                  <span class="cmdp__kind" data-kind=${e.kind} aria-hidden="true">
                    ${"action"===e.kind?String.fromCharCode(9656):"app-link"===e.kind?String.fromCharCode(8599):Je`<span class="cmdp__line" style=${"background:"+(e.lineColor||"transparent")}></span>`}
                  </span>
                  <span class="cmdp__label">${e.label}</span>
                  ${e.hint?Je`<span class="cmdp__hint">${e.hint}</span>`:null}
                  ${i?Je`<span class=${"cmdp__health cmdp__health--"+i.tone}>${i.txt}</span>`:null}
                </li>`})}
          </ul>

          <div class="cmdp__foot" aria-hidden="true">
            <span><kbd>${String.fromCharCode(8593)}</kbd><kbd>${String.fromCharCode(8595)}</kbd> move</span>
            <span><kbd>${String.fromCharCode(8629)}</kbd> open</span>
            <span><kbd>${String.fromCharCode(8984)}K</kbd> toggle</span>
          </div>
        </div>
      </div>
    `}Je=e.bind(n);var Tn=["day","mtd","hy","ytd","1y"];function Mn(e){var t=or(e.p);return"bloomberg"===t.kind?Je`<span class="ticker-cell">
        <span class=${"ticker "+t.pill}>${t.base}</span>
        <span class="ticker-sub ticker-sub--xch">${t.sub}</span>
      </span>`:"tase"===t.kind?Je`<span class="ticker-cell">
        <span class="ticker ticker--he">${t.base}</span>
        <span class="ticker-sub ticker-sub--tase">TASE</span>
      </span>`:"empty"===t.kind?Je`<span class="ticker">${t.base}</span>`:Je`<span class=${"ticker "+t.pill}>${t.base}</span>`}function Rn(e){var t=e.cell,n="pf-metric pf-metric--"+t.cls+(e.active?" is-active":"");return Je`<span class=${n}>${"closed"===t.kind?"closed "+t.text:t.text}</span>`}function In(e){var t=e.e,n=ur(t.quote);return Je`
      <div class="pf-mover-row">
        <${Mn} p=${t.p} />
        ${Tn.map(function(r){var i="day"===r?!!t.quote:!!t.hist,a=vr(t[r],t.ysym,i,"day"===r&&n);return Je`<${Rn} key=${r} cell=${a} active=${r===e.rank} />`})}
      </div>`}function Ln(e){var t=e.rankBy||"mtd",n=pr(e.enriched||[],t);function r(e,n,r){return Je`
        <div class=${"pf-movers__col "+r}>
          <div class="pf-movers__hdr">
            <span class="pf-movers__lbl">${e}</span>
            ${Tn.map(function(e){return Je`<span key=${e} class=${"pf-movers__m"+(e===t?" is-active":"")}>${e.toUpperCase()}</span>`})}
          </div>
          ${n.length?n.map(function(e,n){return Je`<${In} key=${e.ysym||n} e=${e} rank=${t} />`}):Je`<div class="pf-movers__none">none</div>`}
        </div>`}return Je`
      <div class="pf-movers" aria-label="Top movers, weighted fund contribution">
        ${r("UP",n.ups,"pf-movers__col--up")}
        ${r("DOWN",n.downs,"pf-movers__col--down")}
      </div>`}Je=e.bind(n);function Fn(e){var t=e.model;return t?Je`
      <div class="pf-chart" data-state="live">
        <div class="pf-chart__y" aria-hidden="true">
          ${t.yLabels.map(function(e,t){return Je`<span key=${t}>${e}</span>`})}
        </div>
        <svg class="pf-chart__svg" viewBox=${"0 0 "+t.W+" "+t.H}
             preserveAspectRatio="none" role="img" aria-label="Fund return vs benchmark">
          <line x1="0" y1="0" x2=${t.W} y2="0" stroke="rgba(20,20,20,0.06)" />
          <line x1="0" y1=${t.zeroY} x2=${t.W} y2=${t.zeroY}
                stroke="rgba(20,20,20,0.18)" stroke-dasharray="2 4" />
          <line x1="0" y1=${t.H} x2=${t.W} y2=${t.H} stroke="rgba(20,20,20,0.06)" />
          <path d=${t.areaPath} fill="rgba(46,133,64,0.10)" />
          ${t.benchPoints?Je`<polyline points=${t.benchPoints} fill="none"
                     stroke=${t.benchStrokeVar} stroke-width="1.5"
                     stroke-dasharray="4 3" opacity="0.75" />`:null}
          <polyline points=${t.fundPoints} fill="none" stroke="var(--up)" stroke-width="2" />
          <circle cx=${t.lastX} cy=${t.lastY} r="4" fill="var(--up)" />
        </svg>
        <div class="pf-chart__x" aria-hidden="true">
          ${t.xTicks.map(function(e,t){return Je`<span key=${t}>${e}</span>`})}
        </div>
      </div>
    `:Je`
        <div class="pf-chart" data-state=${e.failed?"failed":"loading"}>
          <svg class="pf-chart__svg" viewBox="0 0 1000 280" role="img"
               aria-label=${e.failed?"NAV history unavailable":"NAV history loading"}>
            <text x="500" y="140" text-anchor="middle" font-size="13" fill="rgba(20,20,20,0.4)"
                  class=${e.failed?null:"is-loading"} aria-busy=${e.failed?null:"true"}>
              ${e.failed?"history unavailable":"history loading"}
            </text>
          </svg>
        </div>`}Je=e.bind(n);Je=e.bind(n);var jn=["1mo","3mo","ytd","1y","3y","max"],Un=["day","mtd","hy","ytd","1y"],Bn=[{value:"",label:"None"},{value:"SPX",label:"SPX"},{value:"TASE35",label:"TASE 35"},{value:"USDILS",label:"USD/ILS"}];function Kn(e){return null==e.v?Je`<span class="pf-id__pct"></span>`:Je`<span class=${"pf-id__pct "+er(e.v)}>${tr(e.v)}</span>`}var Hn=3e5,Gn={key:null,ts:0,md:null};function Wn(e){var t=(e&&e.positions||[]).map(rr).filter(Boolean);return(e&&e.as_of_iso||"")+"|"+t.join(",")}function Vn(e){return e&&Gn.md?Gn.key!==Wn(e)||Date.now()-Gn.ts>Hn?null:Gn.md:null}function Yn(){var e=ae.portfolio.value,t=ae.health.value||{},n=t.portfolio||(e?"live":"loading"),r=s(function(){return kr()}),i=r[0],o=r[1];function u(e,t){o(function(n){var r={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i]);return r[e]=t,$r(r),r})}var c=s(function(){return Vn(e)||{quotes:{},history:{},fx:null,fxFailed:!1,navHistory:null,navHistoryFailed:!1,bench:null}}),d=c[0],f=c[1];function p(e){f(function(t){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n})}var h=l(0);function v(){ve(Ge,Be)}if(a(function(){e&&(Gn={key:Wn(e),ts:Date.now(),md:d})},[d,e]),a(function(){if(e){var t=++h.current,n=(e.positions||[]).map(rr).filter(Boolean);n.length&&(Ge.quotes(n).then(function(e){t===h.current&&e&&p({quotes:e})}).catch(function(e){Be("pf:quotes",e)}),Ge.history(n,"2y").then(function(e){t===h.current&&e&&p({history:e})}).catch(function(e){Be("pf:history",e)})),Ge.fx().then(function(e){t===h.current&&p({fx:e,fxFailed:!e})}).catch(function(e){t===h.current&&p({fx:null,fxFailed:!0}),Be("pf:fx",e)});var r=mr(e);r&&r.length?p({navHistory:r,navHistoryFailed:!1}):Ge.fundNavHistory().then(function(e){t===h.current&&p({navHistory:e||[],navHistoryFailed:!1})}).catch(function(e){t===h.current&&p({navHistory:[],navHistoryFailed:!0}),Be("pf:fundNavHistory",e)})}},[e]),a(function(){var e=h.current,t=i.activeBenchmark;t?Ge.benchmarkHistory(t,i.activeRange).then(function(t){e===h.current&&p({bench:t})}).catch(function(t){e===h.current&&p({bench:null}),Be("pf:benchmarkHistory",t)}):p({bench:null})},[i.activeBenchmark,i.activeRange,e]),!e&&"error"===n)return Je`
        <div class="pf-view" data-state="error">
          <div class="pf-view__err" role="alert">portfolio unavailable ·${" "}
            <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button>
          </div>
        </div>`;if(!e)return Je`
        <div class="pf-view" data-state="loading">
          <div class="pf-view__empty" aria-busy="true">loading portfolio…</div>
        </div>`;var g=Array.isArray(e.positions)?e.positions:[],m=fr(e,d.quotes,d.history),_=e.headline||{},y=yr(e.as_of_iso),b=br(e.data_freshness),w=_r(d.navHistory||[],d.bench,i.activeRange,i.activeBenchmark);function k(e){i.sortBy===e?u("sortDir","asc"===i.sortDir?"desc":"asc"):o(function(t){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.sortBy=e,n.sortDir="sym"===e?"asc":"desc",$r(n),n})}var $=d.fx,x="unavailable";if($)if($.last_updated_iso){var S=new Date($.last_updated_iso);x="spot · live "+String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}else x="spot";else d.fxFailed||(x="loading");return Je`
      <div class="pf-view" data-state="live">
        <div class="pf-id">
          <div class="pf-id__main">
            <span class="pf-id__nav">${null!=_.nav_rolling?nr(_.nav_rolling):Qn}</span>
            <span class="pf-id__sub">
              ${[null!=e.num_lps?e.num_lps+" LPs":null,m.length+" positions"].filter(Boolean).join(" · ")||"unavailable"}
            </span>
            <span class=${"pf-id__fresh pf-id__fresh--"+(y.cls||"ok")}>${y.text}</span>
            ${b?Je`<span class=${"pf-id__fresh pf-id__fresh--"+b.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${b.text}</span>`:null}
          </div>
          <div class="pf-id__perf">
            <span class="pf-id__perf-lbl">YTD</span><${Kn} v=${_.ytd_pct} />
            <span class="pf-id__perf-lbl">MTD</span><${Kn} v=${_.mtd_pct} />
          </div>
          <div class="pf-id__fx" aria-label="USD ILS spot">
            <span class="pf-id__fx-spot">${$&&null!=$.spot?$.spot.toFixed(3):d.fxFailed?Qn:String.fromCharCode(8230)}</span>
            <span class="pf-id__fx-sub">${"USD/ILS · "+x}</span>
            ${$&&null!=$.mtd_pct?Je`<span class=${"pf-id__fx-pct "+er($.mtd_pct)}>${tr($.mtd_pct)} mtd</span>`:null}
            ${$&&null!=$.ytd_pct?Je`<span class=${"pf-id__fx-pct "+er($.ytd_pct)}>${tr($.ytd_pct)} ytd</span>`:null}
          </div>
          <a class="pf-view__exportbtn" href=${Zn}
             target="_blank" rel="noopener"
             title="Fresh FIBI export: launches a local Claude session that drives the whole flow; you only do the FIBI login"
             aria-label="Export portfolio from FIBI">Export ↗</a>
          <button type="button" class="pf-view__refreshbtn" title="Refresh portfolio"
                  aria-label="Refresh portfolio" onClick=${v}>↻</button>
        </div>

        ${"loading"===n?Je`<div class="pf-banner pf-banner--soft">refreshing portfolio…</div>`:null}
        ${"error"===n?Je`<div class="pf-banner pf-banner--err" role="alert">portfolio refresh failed · showing last-known ·${" "}
              <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button></div>`:null}

        ${0===g.length?Je`<div class="pf-view__empty">no positions in this snapshot</div>`:Je`
            <div class="pf-rank" role="group" aria-label="Rank movers by">
              ${Un.map(function(e){var t=i.rankBy===e,n="hy"===e?"HY is a projected (predicted) return, not yet realized":null;return Je`<button key=${e} type="button"
                    class=${"pf-pill"+(t?" pf-pill--active":"")}
                    aria-pressed=${String(t)} title=${n}
                    onClick=${function(){u("rankBy",e)}}>${e.toUpperCase()}</button>`})}
            </div>
            <${Ln} enriched=${m} rankBy=${i.rankBy} />
            <${Xn}
              enriched=${m}
              sortBy=${i.sortBy} sortDir=${i.sortDir}
              showAll=${i.showAllPositions}
              onSort=${k}
              onToggleShowAll=${function(){u("showAllPositions",!i.showAllPositions)}} />
          `}

        <div class="pf-graph">
          <div class="pf-graph__controls">
            <div class="pf-graph__pills" role="group" aria-label="Chart range">
              ${jn.map(function(e){var t=i.activeRange===e;return Je`<button key=${e} type="button"
                    class=${"pf-pill"+(t?" pf-pill--active":"")}
                    aria-pressed=${String(t)}
                    onClick=${function(){u("activeRange",e)}}>${e.toUpperCase()}</button>`})}
            </div>
            <select class="pf-graph__bench" aria-label="Benchmark"
                    value=${i.activeBenchmark}
                    onChange=${function(e){u("activeBenchmark",e.target.value)}}>
              ${Bn.map(function(e){return Je`<option key=${e.value||"none"} value=${e.value}>${e.label}</option>`})}
            </select>
            ${i.activeBenchmark&&!d.bench?Je`<span class="pf-graph__benchwarn" role="status">benchmark unavailable</span>`:null}
          </div>
          <${Fn} model=${w} failed=${d.navHistoryFailed} />
        </div>
      </div>
    `}Je=e.bind(n);var qn=[{key:"sym",label:"Position"},{key:"alloc",label:"Alloc",title:"Allocation % is of gross position value, not the headline NAV"},{key:"day",label:"Day"},{key:"mtd",label:"MTD"},{key:"ytd",label:"YTD"},{key:"1y",label:"1Y"}];function Jn(e){var t=e.cell;return Je`<td class=${"num pf-td--"+t.cls}>${"closed"===t.kind?"closed "+t.text:t.text}</td>`}function Xn(e){var t=e.enriched||[],n=e.sortBy||"alloc",r=e.sortDir||"desc",i=hr(t,n,r),a=e.showAll?i:i.slice(0,12),o=l(null);function s(){var t=!e.showAll;if(e.onToggleShowAll&&e.onToggleShowAll(),!t&&o.current&&o.current.scrollIntoView)try{o.current.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){}}return t.length?Je`
      <div class="pf-positions" ref=${o}>
        <table class="pf-positions__table">
          <thead>
            <tr>
              ${qn.map(function(t){var i=t.key===n,a=i?"asc"===r?"ascending":"descending":null;return Je`<th key=${t.key} scope="col" aria-sort=${a}
                    class=${(i?"sorted":"")+(i&&"asc"===r?" asc":"")}>
                  <button type="button" class="pf-positions__sortbtn" title=${t.title||null}
                          onClick=${function(){e.onSort&&e.onSort(t.key)}}>
                    ${t.label}${i?"asc"===r?" "+String.fromCharCode(8593):" "+String.fromCharCode(8595):""}
                  </button>
                </th>`})}
            </tr>
          </thead>
          <tbody>
            ${a.map(function(e,t){var n=ur(e.quote);return Je`<tr key=${e.ysym||e.p&&e.p.name||t}>
                <th scope="row"><${Mn} p=${e.p} /></th>
                <td class="num">${(100*e.alloc).toFixed(1)+"%"}</td>
                <${Jn} cell=${vr(e.day,e.ysym,!!e.quote,n)} />
                <${Jn} cell=${vr(e.mtd,e.ysym,!!e.hist,!1)} />
                <${Jn} cell=${vr(e.ytd,e.ysym,!!e.hist,!1)} />
                <${Jn} cell=${vr(e["1y"],e.ysym,!!e.hist,!1)} />
              </tr>`})}
          </tbody>
        </table>
        <div class="pf-positions__foot">
          <span class="pf-positions__count">${a.length} shown of ${i.length}</span>
          ${i.length>12?Je`<button type="button" class="pf-positions__expand" onClick=${s}>
                ${e.showAll?"Show top 12 only":"Show all "+i.length+" positions"}
              </button>`:null}
        </div>
      </div>
    `:Je`<div class="pf-positions" ref=${o}>
        <div class="pf-positions__empty">portfolio unavailable</div>
      </div>`}var zn={"AIXA GY":"AIXA.DE","EXA FP":"EXA.PA","AVIO IM":"AVIO.MI","7013 JP":"7013.T","PLUS LN":"PLUS.L","LSEG LN":"LSEG.L","FFH CN":"FFH.TO","FQT GY":"FQT.DE","K7X GR":"K7X.DE","RW5 GR":"RW5.DE"},Qn=String.fromCharCode(8212),Zn="https://operate.legacyvpartners.com/go/export-portfolio.html";function er(e){return e>=0?"up":"down"}function tr(e){return Oe(e)}function nr(e){var t=Number(e);if(!isFinite(t)||0===t)return Qn;var n=Math.abs(t);return n>=1e9?"₪"+(t/1e9).toFixed(2)+"B":n>=1e6?"₪"+(t/1e6).toFixed(1)+"M":n>=1e3?"₪"+Math.round(t/1e3)+"K":"₪"+Math.round(t)}function rr(e){if(!e||!e.sym)return null;var t=String(e.sym).trim();return t?zn[t]||t:null}function ir(e){if(!e)return"tase";var t=String(e).trim();if(!t)return"tase";if(t.indexOf(" ")<0)return"americas";var n=t.split(/\s+/)[1];switch(n){case"GY":case"GR":case"FP":case"IM":case"LN":return"europe";case"JP":return"asia";case"CN":return"americas";case"TA":return"tase";default:return"other"}}var ar={americas:"ticker--blue",europe:"ticker--mustard",asia:"ticker--coral",other:"ticker--slate"};function or(e){var t=String(e&&e.sym||"").trim();if(t){var n=ir(t),r=ar[n]||"ticker--slate";if(t.indexOf(" ")>=0){var i=t.split(/\s+/);return{kind:"bloomberg",pill:r,base:i[0],sub:i[1]}}return{kind:"us",pill:r,base:t,sub:null}}var a=String(e&&e.name||"").trim();return a?{kind:"tase",pill:"ticker--he",base:a,sub:"TASE"}:{kind:"empty",pill:"ticker",base:String.fromCharCode(8230),sub:null}}function lr(e,t){if(!e||!e.closes||!e.timestamps)return null;for(var n=null,r=-1/0,i=0;i<e.timestamps.length;i++){var a=1e3*e.timestamps[i];if(a>t)break;a>r&&(r=a,n=e.closes[i])}return n}function sr(e,t,n,r){if("day"===n)return e&&null!=e.change_pct?e.change_pct:null;if(!e||null==e.price)return null;var i,a=r||new Date;if("mtd"===n)i=new Date(a.getFullYear(),a.getMonth(),0).getTime();else if("ytd"===n)i=new Date(a.getFullYear()-1,11,31).getTime();else{if("1y"!==n)return null;i=a.getTime()-31536e6}var o=lr(t,i);return null==o||0===o?null:(e.price-o)/o}function ur(e){if(!e)return!1;var t=String(e.market_state||"").toUpperCase();return!(!t||"REGULAR"===t||"PRE"===t||"PREPRE"===t||"POST"===t||"POSTPOST"===t)}function cr(e,t){return t&&e&&null!=e.value?Number(e.value)/t:0}function dr(e,t,n,r,i){var a=rr(e),o=a?(n||{})[a]:null,l=a?(r||{})[a]:null,s=cr(e,t);function u(e){if(!a)return null;var t="day"===e?o?sr(o,l,"day",i):null:l?sr(o,l,e,i):null;return null==t?null:t*s}return{p:e,ysym:a,quote:o,hist:l,alloc:s,day:u("day"),mtd:null!=e.mtd_contrib_pct?e.mtd_contrib_pct:u("mtd"),hy:null!=e.hy_contrib_pct?e.hy_contrib_pct:null,ytd:null!=e.ytd_contrib_pct?e.ytd_contrib_pct:u("ytd"),"1y":u("1y")}}function fr(e,t,n,r){var i=e&&e.positions||[],a=i.reduce(function(e,t){return e+(Number(t.value)||0)},0)||1;return i.filter(function(e){return(e.value||0)>0}).map(function(e){return dr(e,a,t,n,r)})}function pr(e,t){var n=t||"mtd",r=(e||[]).filter(function(e){return null!=e[n]}),i=r.filter(function(e){return e[n]>0}).sort(function(e,t){return t[n]-e[n]}).slice(0,4),a=r.filter(function(e){return e[n]<0}).sort(function(e,t){return e[n]-t[n]}).slice(0,4);return{ups:i,downs:a}}function hr(e,t,n){var r=(e||[]).slice(),i="desc"===n?1:-1;return r.sort(function(e,r){if("sym"===t){var a=String(e.p.sym||e.p.name),o=String(r.p.sym||r.p.name);return("asc"===n?1:-1)*a.localeCompare(o)}var l="alloc"===t?e.alloc:e[t],s="alloc"===t?r.alloc:r[t];return null==l&&null==s?0:null==l?1:null==s?-1:i*(s-l)}),r}function vr(e,t,n,r){return null!=e?r?{kind:"closed",text:tr(e),cls:"closed"}:{kind:"value",text:tr(e),cls:er(e)}:t?n?{kind:"na",text:Qn,cls:"na"}:{kind:"cold",text:String.fromCharCode(8230),cls:"cold"}:{kind:"na",text:Qn,cls:"na"}}function gr(e,t){var n=null!=t?t:Date.now();switch(e){case"1mo":return 26784e5;case"3mo":return 79488e5;case"ytd":return n-new Date(new Date(n).getFullYear(),0,1).getTime();case"1y":default:return 31536e6;case"3y":return 94608e6;case"max":return null}}function mr(e){return e&&Array.isArray(e.historical_nav)&&e.historical_nav.length?e.historical_nav.map(function(e){var t=String(e.month||"").split("-");if(2!==t.length)return null;var n=parseInt(t[0],10),r=parseInt(t[1],10);return isFinite(n)&&isFinite(r)?{year:n,month:r,label:e.month,nav_ils:Number(e.total_ils)||0}:null}).filter(function(e){return e&&e.nav_ils>0}):null}function _r(e,t,n,r,i){if(e=e||[],!e.length)return null;var a=null!=i?i:Date.now(),o=gr(n,a),l=e.filter(function(e){var t=new Date(e.year,e.month-1,28).getTime();return null==o||a-t<=o});l.length<2&&(l=e.slice(-Math.max(2,e.length)));var s=l[0].nav_ils,u=l.map(function(e){return(e.nav_ils-s)/s}),c=l.map(function(e){return new Date(e.year,e.month-1,28).getTime()}),d=null;if(t&&t.closes&&t.closes.length&&t.timestamps){for(var f=c[0]/1e3,p=[],h=0;h<t.timestamps.length;h++)t.timestamps[h]>=f&&null!=t.closes[h]&&p.push({ts:t.timestamps[h],close:t.closes[h]});if(p.length>=2){var v=p[0].close;d=p.map(function(e){return{t:1e3*e.ts,v:(e.close-v)/v}})}}var g=u.slice();d&&(g=g.concat(d.map(function(e){return e.v})));var m=Math.min.apply(null,g),_=Math.max.apply(null,g);m===_&&(m-=.01,_+=.01);var y=.1*(_-m);m-=y,_+=y;var b=c[0],w=c[c.length-1];d&&(b=Math.min(b,d[0].t),w=Math.max(w,d[d.length-1].t)),w===b&&(w=b+1);var k=1e3,$=280;function x(e){return(_-e)/(_-m)*$}function S(e){return(e-b)/(w-b)*k}var A=x(0).toFixed(1),C=u.map(function(e,t){return S(c[t]).toFixed(1)+","+x(e).toFixed(1)}),N=S(c[0]).toFixed(1),E=S(c[c.length-1]).toFixed(1),P="M"+N+","+A+" L"+C.join(" L")+" L"+E+","+A+" Z",O=null;d&&(O=d.map(function(e){return S(e.t).toFixed(1)+","+x(e.v).toFixed(1)}).join(" "));for(var D=[],T=(_-m)/4,M=4;M>=0;M--)D.push(tr(m+T*M));for(var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=l.length,L=[],F=Math.max(1,Math.floor(I/6)),j=0;j<I;j+=F){var U=l[j];L.push(R[U.month-1]+(0===j?" '"+String(U.year).slice(2):""))}if((I-1)%F!=0){var B=l[I-1];L.push(R[B.month-1])}return{W:k,H:$,fundPoints:C.join(" "),areaPath:P,lastX:E,lastY:x(u[u.length-1]).toFixed(1),zeroY:A,benchPoints:O,benchStrokeVar:"USDILS"===r?"var(--mustard)":"var(--slate)",yLabels:D,xTicks:L}}function yr(e,t){if(!e)return{text:"no Drive file registered",cls:"missing"};var n=new Date(e+"T00:00:00");if(isNaN(n.getTime()))return{text:"exported "+e,cls:""};var r=null!=t?t:Date.now(),i=Math.floor((r-n.getTime())/864e5),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o="exported "+n.getDate()+" "+a[n.getMonth()];return i>14?{text:o+" · "+i+"d stale",cls:"very-stale"}:i>7?{text:o+" · "+i+"d ago",cls:"stale"}:{text:o+(i>0?" · "+i+"d ago":" · today"),cls:""}}function br(e){if(!e||!1!==e.ok)return null;var t=[];return e.flow_months_missing&&e.flow_months_missing.length&&t.push("flows incomplete for "+e.flow_months_missing.join(", ")),!1===e.naaman_ok&&t.push("NAV "+(null!=e.naaman_stale_months?e.naaman_stale_months+"mo stale":"stale")+(e.naaman_as_of?" (as of "+e.naaman_as_of+")":"")),!1===e.benchmarks_ok&&t.push("benchmarks unavailable"),{text:t.length?t.join(" · "):"data freshness degraded",cls:"very-stale"}}var wr={activeRange:"1y",activeBenchmark:"",rankBy:"mtd",sortBy:"alloc",sortDir:"desc",showAllPositions:!1};function kr(e){var t={};for(var n in wr)Object.prototype.hasOwnProperty.call(wr,n)&&(t[n]=wr[n]);try{var r=e||("undefined"!=typeof localStorage?localStorage:null);if(!r)return t;var i=r.getItem("pf:prefs");if(!i)return t;var a=JSON.parse(i);["activeRange","activeBenchmark","rankBy","sortBy","sortDir"].forEach(function(e){"string"==typeof a[e]&&(t[e]=a[e])}),"boolean"==typeof a.showAllPositions&&(t.showAllPositions=a.showAllPositions)}catch(e){}return t}function $r(e,t){try{var n=t||("undefined"!=typeof localStorage?localStorage:null);if(!n)return;n.setItem("pf:prefs",JSON.stringify({activeRange:e.activeRange,activeBenchmark:e.activeBenchmark,rankBy:e.rankBy,sortBy:e.sortBy,sortDir:e.sortDir,showAllPositions:e.showAllPositions}))}catch(e){}}Je=e.bind(n);function xr(e){var t=e.rows||[];return t.length?Je`
      <div class="pj-bd__group">
        <div class="pj-bd__heading">${e.label}</div>
        ${t.map(function(t,n){return Je`<div key=${n} class="pj-bd__row">
            <span class="pj-bd__lp">${t.lp}</span>
            <span class=${"pj-bd__amt pj-bd__amt--"+("dep"===e.kind?"up":"down")}>
              ${("dep"===e.kind?"+":String.fromCharCode(8722))+Pr(t.amount,e.sym)}
            </span>
          </div>`})}
        <div class="pj-bd__subtotal">Subtotal${" "}
          <b>${("dep"===e.kind?"+":String.fromCharCode(8722))+Pr(e.total,e.sym)}</b>
        </div>
      </div>`:null}function Sr(){var e=ae.navWidget.value,t=ae.transfers.value,n=Dr(e,t&&t.monthLabel),r=s({state:"idle",net:null,agg:null}),i=r[0],o=r[1],u=s(""),c=u[0],d=u[1],f=s(!1),p=f[0],h=f[1],v=s(null),g=v[0],m=v[1],_=l(!1),y=l(null),b=ge(),w="ok"===i.state?i.net:n.net,k="ok"===i.state||("idle"===i.state||"loading"===i.state)&&n.netConfirmed;a(function(){if(!_.current){_.current=!0;var e=n.lastResult;if(e&&(y.current={display:e.display||null,closingMillions:"number"==typeof e.closingMillions?e.closingMillions:null},"number"==typeof e.closingMillions&&isFinite(e.closingMillions)&&e.closingMillions>0?d(String(e.closingMillions)):e.display&&m(e)),!n.projectingMonthSlash)return o({state:"no-month",net:null,agg:null}),void Be("projecting:no-month",new Error("no projectingMonthSlash resolved; net stays unconfirmed"));o({state:"loading",net:null,agg:null}),Ge.monthlyTransferBreakdown(n.projectingMonthSlash).then(function(e){var t=Mr(e),n=Tr(t.rows),r=Rr(t.totals,n);o({state:"ok",net:r/1e6,agg:n})}).catch(function(e){o({state:"fail",net:null,agg:null}),Be("projecting:breakdown",e)})}},[]);var $=Ir(c,n.prev,w);function x(){if($&&null!=$.pct){var e=Lr($.pct),t=y.current;if(!t||t.display!==e||t.closingMillions!==$.closing){var r=n.projectingMonthSlash;r?b.run(Ge.saveStoredRoughYield(r,{display:e,tag:"rough · pre-BDO",ts:(new Date).toISOString(),closingMillions:$.closing}).then(function(t){return y.current={display:e,closingMillions:$.closing},t}).catch(function(e){throw Be("projecting:save",e),e}),{errorMsg:"Could not save the rough yield estimate, try again"}):Be("projecting:save:badLabel",new Error('cannot derive MM/YYYY from "'+n.prevMonthLabel+'"'))}}}var S,A=Er(n.prev,n.cur),C=Er(w,n.cur);$?(S=(n.prevMonthLabel?n.prevMonthLabel+" · ":"")+"projecting · read as "+Er($.closing,n.cur),k||(S+=" · net flows unconfirmed")):S=n.prevMonthLabel?n.prevMonthLabel+" · projecting":"projecting";var N=Ar,E="",P=null,O=null;$?(N=Lr($.pct)+(k?"":" ?"),E=k?$.pct>=0?"is-up":"is-down":"is-provisional",k||(P="Net flows not confirmed by the breakdown service. This yield is provisional.")):g&&g.display&&(N=g.display,E=/^[-−]/.test(g.display)?"is-down":"is-up",P=(g.tag||"saved")+(g.ts?" · "+String(g.ts).slice(0,16).replace("T"," "):""),O=(g.tag||"rough · saved")+(g.ts?" "+String(g.ts).slice(0,10):""));var D=i.agg,T=e?"live":"loading";return Je`
      <div class="pj-view" data-state=${T} data-confirmed=${String(!!k)}>
        ${e?Je`
            <div class="pj-card">
              <div class="pj-card__meta">${S}</div>

              <div class="pj-formula" aria-label="Rough yield formula">
                <span class="pj-formula__num">
                  closing <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <span class="pj-formula__term">${A}</span>
                  <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <button type="button"
                          class=${"pj-formula__net"+(D?" has-bd":"")}
                          aria-expanded=${String(p)}
                          aria-label="Net flows breakdown"
                          aria-disabled=${String(!D)}
                          onClick=${function(){D&&h(!p)}}>${C}</button>
                  ${k?null:Je`<span class="pj-net-warn" role="status"
                            title="Net flows not confirmed by the breakdown service. Rough yield is provisional.">${String.fromCharCode(9888)} unconfirmed</span>`}
                </span>
                <span class="pj-formula__rule" aria-hidden="true"></span>
                <span class="pj-formula__den">${A}</span>
              </div>

              ${"fail"===i.state?Je`<div class="pj-banner pj-banner--err" role="alert">net flows unconfirmed · breakdown fetch failed · rough yield is provisional</div>`:null}
              ${"no-month"===i.state?Je`<div class="pj-banner pj-banner--err" role="alert">no projecting month resolved · net flows unconfirmed</div>`:null}
              ${"loading"===i.state?Je`<div class="pj-banner pj-banner--soft">confirming net flows…</div>`:null}

              ${p&&D?Je`<div class="pj-bd" aria-label="Net flows breakdown detail">
                    <div class="pj-bd__title">${(n.prevMonthLabel||n.projectingMonthSlash||"")+" · net flows"}</div>
                    <${xr} label="+ Subscriptions / increases (ILS)" kind="dep" rows=${D.items.filter(function(e){return"ILS"===e.currency&&"dep"===e.kind})} total=${D.ilsDep} sym="₪" />
                    <${xr} label=${String.fromCharCode(8722)+" Redemptions (ILS)"} kind="red" rows=${D.items.filter(function(e){return"ILS"===e.currency&&"red"===e.kind})} total=${D.ilsRed} sym="₪" />
                    <${xr} label="+ Subscriptions / increases (USD)" kind="dep" rows=${D.items.filter(function(e){return"USD"===e.currency&&"dep"===e.kind})} total=${D.usdDep} sym="$" />
                    <${xr} label=${String.fromCharCode(8722)+" Redemptions (USD)"} kind="red" rows=${D.items.filter(function(e){return"USD"===e.currency&&"red"===e.kind})} total=${D.usdRed} sym="$" />
                    ${D.items.length?Je`
                        <div class="pj-bd__nets">
                          ${0!==D.netIls||D.items.some(function(e){return"ILS"===e.currency})?Je`<div class="pj-bd__subtotal">Net ILS <b>${(D.netIls<0?String.fromCharCode(8722):"+")+Pr(D.netIls,"₪")}</b></div>`:null}
                          ${0!==D.netUsd||D.items.some(function(e){return"USD"===e.currency})?Je`<div class="pj-bd__subtotal">Net USD <b>${(D.netUsd<0?String.fromCharCode(8722):"+")+Pr(D.netUsd,"$")}</b></div>`:null}
                        </div>`:Je`<div class="pj-bd__empty">No settled transfers logged for this month</div>`}
                    ${null!=w&&isFinite(w)?Je`<div class="pj-bd__total">Net (formula) <b>${(w<0?String.fromCharCode(8722):"+")+Pr(1e6*Math.abs(w),"₪")}</b></div>`:null}
                  </div>`:null}

              <div class="pj-input-row">
                <label class="pj-input-lbl" for="pj-closing-input">closing</label>
                <input id="pj-closing-input" class="pj-input" type="text"
                       inputmode="decimal" autocomplete="off"
                       placeholder=${"closing in millions ("+n.cur+")"}
                       value=${c}
                       onInput=${function(e){d(e.target.value),m(null)}}
                       onBlur=${x} />
                <output class=${"pj-result "+E} for="pj-closing-input"
                        title=${P}
                        aria-label=${"Rough yield "+N+(k?"":", provisional")}>${N}</output>
                ${O?Je`<span class="pj-restored-badge">${O}</span>`:null}
                ${b.busy?Je`<span class="pj-restored-badge is-loading" aria-busy="true">saving…</span>`:b.error?Je`<span class="pj-restored-badge pj-restored-badge--err" role="alert">${b.error}</span>`:null}
              </div>
            </div>
          `:Je`<div class="pj-view__empty">awaiting NAV widget…</div>`}
      </div>
    `}var Ar=String.fromCharCode(8212);function Cr(e){if(!e)return null;var t=String(e).match(/([0-9.]+)\s*([MBK])?/i);if(!t)return null;var n=parseFloat(t[1]);if(!isFinite(n))return null;var r=(t[2]||"M").toUpperCase();return"B"===r?1e3*n:"K"===r?n/1e3:n}function Nr(e){var t=String(e||"").match(/([₪$€£])/);return t?t[1]:"₪"}function Er(e,t){if(null==e||!isFinite(e))return Ar;if(0===e)return t+"0";var n=e<0?String.fromCharCode(8722):"",r=Math.abs(e);return r>=1e3?n+t+(r/1e3).toFixed(2)+"B":n+t+r.toFixed(1)+"M"}function Pr(e,t){if(null==e||!isFinite(e))return Ar;if(0===e)return t+"0";var n=Math.abs(e);return n>=1e9?t+(n/1e9).toFixed(2)+"B":n>=1e6?t+(n/1e6).toFixed(2)+"M":n>=1e3?t+Math.round(n/1e3)+"K":t+Math.round(n)}function Or(e){if(!e)return"";var t=String(e).trim();if(/^\d{1,2}\/\d{4}$/.test(t))return t.replace(/^(\d)\//,"0$1/");var n=t.match(/(\w+)\s+(\d{4})/);if(!n)return"";var r=["january","february","march","april","may","june","july","august","september","october","november","december"],i=r.indexOf(n[1].toLowerCase());return i<0?"":String(i+1).padStart(2,"0")+"/"+n[2]}function Dr(e,t){var n=null,r=null,i=!1,a="₪",o="",l="",s=null;if(e){var u=e.closed||{},c=e.yield||{};if(a=Nr(u.numeralDisplay)||Nr(c.netFlowsDisplay)||"₪",o=c.projectingLabel||c.prevMonthLabel||u.label||"",l=c.projectingMonthSlash||Or(c.projectingLabel)||Or(c.prevMonthLabel)||"",!l&&t&&(l=Or(t)),null!=c.prevAmountExact){var d=Number(c.prevAmountExact);isFinite(d)&&(n=d/1e6)}if(null==n&&c.prevAmountDisplay){var f=Cr(c.prevAmountDisplay);null!=f&&(n=f)}if(null==n)if(null!=u.numeralExact)n=Number(u.numeralExact)/1e6;else{var p=Cr(u.numeralDisplay);null!=p&&(n=p)}if(null!=c.netFlowsValue)r=Number(c.netFlowsValue)/1e6;else{var h=Cr(c.netFlowsDisplay);null!=h&&(r=h)}null!=r&&!0===c.netFlowsConfirmed&&(i=!0),s=c.lastResult||null}return{prev:n,net:r,netConfirmed:i,cur:a,prevMonthLabel:o,projectingMonthSlash:l,lastResult:s}}function Tr(e){var t=0,n=0,r=0,i=0,a=[];return(e||[]).forEach(function(e){if(e&&"number"==typeof e.amount&&e.amount>0&&e.direction&&e.settled){var o=Gi(e.label||e.name||e.lp||"?"),l="USD"===e.currency,s="redemption"===e.direction?"red":"dep";a.push({lp:o,amount:e.amount,currency:l?"USD":"ILS",kind:s}),l?"red"===s?i+=e.amount:r+=e.amount:"red"===s?n+=e.amount:t+=e.amount}}),a.sort(function(e,t){return t.amount-e.amount}),{ilsDep:t,ilsRed:n,usdDep:r,usdRed:i,netIls:t-n,netUsd:r-i,items:a}}function Mr(e){var t=e&&Array.isArray(e.rows)?e.rows:Array.isArray(e)?e:[],n=e&&e.totals||{};return{rows:t,totals:n}}function Rr(e,t){return e&&"number"==typeof e.netConverted&&isFinite(e.netConverted)?e.netConverted:e&&"number"==typeof e.netIls&&isFinite(e.netIls)?e.netIls:t?t.netIls:0}function Ir(e,t,n){var r=String(null==e?"":e).replace(/[^0-9.]/g,""),i=parseFloat(r);if(isNaN(i)||i<=0||null==t||t<=0)return null;var a=!1;i>1e4&&(i/=1e6,a=!0);var o=null==n?0:n,l=i/(t+o)-1;return{closing:i,pct:l,rescaled:a}}function Lr(e){var t=e>=0?"+":"";return t+(100*e).toFixed(2)+"%"}Je=e.bind(n);var Fr=qe,jr=6e4,Ur={fetchedAt:0};function rt(e){var t=s(0);a(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}function Br(){var e=ae.schedule.value;rt([ae.silentSignals]);var t=ae.silentSignals&&ae.silentSignals.value||[],n=t.map(function(e,t){return{kind:"signal",id:"signal:"+(e.key||t),title:e.label||"Cross-tool signal",track:String.fromCharCode(8252),openUrl:e.gmailUrl||null}}),r=s({fetching:!1,error:null,fetchedAt:Ur.fetchedAt}),i=r[0],o=r[1],u=s(0),c=(u[0],u[1]),d=s({}),f=d[0],p=d[1],h=s({}),v=h[0],g=h[1],m=s({}),_=m[0],y=m[1],b=l({}),w=s(null),k=w[0],$=w[1],x=l(null),S=s({}),A=S[0],C=S[1],N=s({}),E=N[0],P=N[1],O=l(null),D=l(0);function T(e){return function(t){var n={};for(var r in t)n[r]=t[r];return n[e]=!0,n}}function M(e){return function(t){var n={};for(var r in t)n[r]=t[r];return delete n[e],n}}function R(e){var t=++D.current;o(function(e){return{fetching:!0,error:null,fetchedAt:e.fetchedAt}}),Ge.scheduleState({}).then(function(e){t===D.current&&(e?(ae.schedule.value=e,Ur.fetchedAt=Date.now(),o({fetching:!1,error:null,fetchedAt:Ur.fetchedAt})):o(function(e){return{fetching:!1,error:"schedule returned no state",fetchedAt:e.fetchedAt}}))}).catch(function(n){if(t===D.current){Be("schedule:fetch:"+(e||""),n);var r=n&&n.message||String(n);o(function(e){return{fetching:!1,error:r,fetchedAt:e.fetchedAt}}),Fr("Schedule refresh failed · "+r,"error")}})}function I(e){O.current&&clearTimeout(O.current),O.current=setTimeout(function(){O.current=null,R(e||"debounced")},600)}function L(e){var t=ae.schedule.value;t&&(ae.schedule.value={asOf:t.asOf,tasks:(t.tasks||[]).filter(function(t){return t.id!==e}),events:t.events||[],board:(t.board||[]).filter(function(t){return!("task"===t.kind&&t.id===e)})})}function F(e,t){var n=ae.schedule.value;n&&(ae.schedule.value={asOf:n.asOf,tasks:(n.tasks||[]).map(function(n){return n&&n.id===e?Object.assign({},n,{title:t}):n}),events:n.events||[],board:(n.board||[]).map(function(n){return n&&"task"===n.kind&&n.id===e?Object.assign({},n,{title:t}):n})})}function j(e){e&&e.id&&!f[e.id]&&!v[e.id]&&(p(T(e.id)),Ge.completeTask(e.id).then(function(t){if(!t||!1===t.ok)return p(M(e.id)),void Fr("Could not complete: "+(t&&t.error||"unknown"),"error");L(e.id),p(M(e.id)),Fr("✓ "+(e.title||"Done"),"success"),I("completed")}).catch(function(t){p(M(e.id)),Be("schedule:complete",t),Fr("Could not confirm completion, restored the task","error")}))}function U(e){var t=b.current;t[e]&&(clearTimeout(t[e]),delete t[e]),y(M(e))}function B(e){if(e&&e.id&&!f[e.id]&&!v[e.id]){if(!_[e.id])return y(T(e.id)),void(b.current[e.id]=setTimeout(function(){delete b.current[e.id],y(M(e.id))},3e3));U(e.id),g(T(e.id)),Ge.removeTask(e.id).then(function(t){if(!t||!1===t.ok)return g(M(e.id)),void Fr("Could not delete: "+(t&&t.error||"unknown"),"error");L(e.id),g(M(e.id)),Fr("Deleted "+(e.title||"task"),"success"),I("deleted")}).catch(function(t){g(M(e.id)),Be("schedule:delete",t),Fr(t&&t.rpcTimeout?"Could not confirm delete, restored the task":"Server error deleting task","error")})}}function K(e){if(e&&e.id&&!E[e.id]&&!f[e.id]&&!v[e.id]){var t=e.when?e.when.substring(0,10):"",n=document.createElement("input");n.type="date",n.value=t||"",n.className="sched-row__reschedule-input",n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var r=!1,i=!1;n.addEventListener("change",function(){r=!0;var i=n.value||"";a(),i&&i!==t&&(P(T(e.id)),Ge.updateTask(e.id,{due:i}).then(function(t){P(M(e.id)),t&&!1!==t.ok?(Fr("Rescheduled to "+i,"success"),I("rescheduled")):Fr("Could not reschedule: "+(t&&t.error||"unknown"),"error")}).catch(function(t){P(M(e.id)),Be("schedule:reschedule",t),Fr("Server error rescheduling","error")}))}),n.addEventListener("cancel",a),n.addEventListener("blur",function(){setTimeout(function(){r||a()},200)}),setTimeout(a,8e3);try{n.showPicker?n.showPicker():n.focus()}catch(e){n.focus()}}function a(){i||(i=!0,n.parentNode&&document.body.removeChild(n))}}function H(e){!e||!e.id||A[e.id]||f[e.id]||v[e.id]||k!==e.id&&(x.current={id:e.id,prev:e.title||"",done:!1},$(e.id))}function G(e){var t=x.current;if(t&&!t.done){t.done=!0,$(null);var n=String(null==e?"":e).trim();if(n&&n!==t.prev){var r=t.id,i=t.prev;F(r,n),C(T(r)),Ge.updateTask(r,{title:n}).then(function(e){if(C(M(r)),!e||!1===e.ok)return F(r,i),void Fr("Rename failed: "+(e&&e.error||"unknown"),"error");Fr("Renamed","success"),I("renamed")}).catch(function(e){C(M(r)),F(r,i),Be("schedule:rename",e),Fr("Server error renaming","error")})}}}function W(){var e=x.current;e&&!e.done&&(e.done=!0,$(null))}a(function(){var e=!!ae.schedule.value&&Ur.fetchedAt>0&&Date.now()-Ur.fetchedAt<jr;e||R("mount");var t=setInterval(function(){"undefined"!=typeof document&&document.hidden||c(function(e){return e+1})},3e4);return function(){clearInterval(t),O.current&&clearTimeout(O.current);var e=b.current;for(var n in e)e[n]&&clearTimeout(e[n]);b.current={}}},[]);var V,Y=Date.now();function q(t){var n=Xr(e,t),r=t.openUrl||(n?Jr(n.notes):null),i=!!_[t.id];return Je`
        <span class="sched-row__acts">
          ${r?Je`<a class="sched-row__open" href=${r} target="_blank" rel="noopener"
                      aria-label=${'Open the linked thread for "'+(t.title||"task")+'"'}>Open</a>`:null}
          ${"task"===t.kind&&t.id?Je`<button type="button" class="sched-row__check"
                      disabled=${!!f[t.id]||!!v[t.id]}
                      aria-label=${'Mark "'+(t.title||"task")+'" done'}
                      onClick=${function(){j(t)}}>✓</button>`:null}
          ${"task"===t.kind&&t.id?Je`<button type="button" class=${"sched-row__del"+(i?" is-armed":"")}
                      disabled=${!!f[t.id]||!!v[t.id]}
                      title=${i?"Click again to delete":""}
                      aria-label=${i?'Confirm delete "'+(t.title||"task")+'". Press again to delete, Escape to cancel':'Delete "'+(t.title||"task")+'"'}
                      onClick=${function(){B(t)}}
                      onKeyDown=${function(e){"Escape"===e.key&&_[t.id]&&(e.stopPropagation(),U(t.id))}}
                      >×</button>`:null}
        </span>`}function J(e,t){var n="task"===e.kind;return n&&e.id&&k===e.id?Je`
          <input type="text" class="sched-row__rename-input" dir="auto"
                 value=${e.title||""}
                 aria-label=${'Rename "'+(e.title||"task")+'"'}
                 ref=${function(e){e&&!e.dataset.focused&&(e.dataset.focused="1",e.focus(),e.select())}}
                 onKeyDown=${function(e){"Enter"===e.key?(e.preventDefault(),G(e.target.value)):"Escape"===e.key&&(e.stopPropagation(),W())}}
                 onBlur=${function(e){G(e.target.value)}} />`:n&&e.id?Je`
          <span class=${"sched-row__title sched-row__title--edit"+(A[e.id]?" is-saving":"")}
                dir="auto" role="button" tabindex="0"
                title="Double-click to rename"
                aria-label=${'"'+(e.title||t)+'". Press Enter to rename'}
                onDblClick=${function(){H(e)}}
                onKeyDown=${function(t){"Enter"===t.key&&(t.preventDefault(),H(e))}}>${e.title||t}</span>`:Je`<span class="sched-row__title" dir="auto">${e.title||t}</span>`}function X(e){var t="task"===e.kind,n=e.when?new Date(e.when):null,r=n&&n.getTime()<Y,i=n?Hr(e.when,Y):e.dueRelative||"",a=Gr(i),o=t&&!!e.id,l=Je`
        <span class=${"sched-row__time"+(r?" is-past":"")}>${n?Vr(n):String.fromCharCode(8212)}</span>
        <span class="sched-row__date">${n?qr(n,Y):""}</span>`;return Je`
        <div key=${e.kind+":"+e.id}
             class=${"sched-row"+(t&&e.isOverdue?" is-overdue":"")+(f[e.id]||v[e.id]?" is-completing":"")}>
          ${o?Je`<span class=${"sched-row__timewrap sched-row__timewrap--edit"+(E[e.id]?" is-saving":"")}
                      role="button" tabindex="0" title="Click to reschedule"
                      aria-label=${'Reschedule "'+(e.title||"task")+'"'}
                      onClick=${function(){K(e)}}
                      onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),K(e))}}>${l}</span>`:Je`<span class="sched-row__timewrap">${l}</span>`}
          <span class=${"sched-row__track sched-row__track--"+(t?"task":"event")}>
            <span aria-hidden="true">${t?"•":String.fromCharCode(9670)}</span>
            ${e.track||(t?"A":"M")}
          </span>
          <span class="sched-row__titlewrap">
            ${J(e,"(untitled)")}
            ${e.platform?Je`<span class="sched-row__platform">${e.platform}</span>`:null}
            ${t&&e.isOverdue?Je`<span class="sched-row__overdue">overdue</span>`:null}
          </span>
          <span class=${"sched-row__rel"+(a?" is-"+a:"")}>${i}</span>
          ${q(e)}
        </div>`}function z(e){var t="signal"===e.kind?"sched-row__track--signal":"sched-row__track--task";return Je`
        <div key=${"u:"+e.id}
             class=${"sched-row sched-row--undated"+(f[e.id]||v[e.id]?" is-completing":"")}>
          <span class=${"sched-row__track "+t}>${e.track||"A"}</span>
          <span class="sched-row__titlewrap">
            ${J(e,"(untitled task)")}
            ${e.platform?Je`<span class="sched-row__platform">${e.platform}</span>`:null}
          </span>
          ${q(e)}
        </div>`}if(i.error&&!e)V=Je`
        <div class="sched-error" role="alert">
          <div class="sched-error__title">Schedule unavailable</div>
          <div class="sched-error__msg">${i.error}</div>
          <button type="button" class="sched-error__retry" onClick=${function(){R("retry")}}>Retry</button>
        </div>`;else if(e){var Q=Kr(e.board),Z=Q.dated,ee=Q.undated;V=Je`
        ${Z.length||ee.length||n.length?Z.length?Z.map(X):Je`<div class="sched-empty">Nothing scheduled in the next 7 days. Undated tasks below.</div>`:Je`<div class="sched-empty">
              <div class="sched-empty__title">No tasks or events.</div>
            </div>`}
        ${ee.length?Je`<div class="sched-undated">
              <div class="sched-undated__hdr">undated</div>
              ${ee.map(z)}
            </div>`:null}
        ${n.length?Je`<div class="sched-crosstool">
              <div class="sched-crosstool__hdr">cross-tool signals · ${n.length}</div>
              ${n.map(z)}
            </div>`:null}
      `}else V=Je`
        <div class="sched-loading" aria-busy="true">
          <span class="sched-loading__spin" aria-hidden="true">↻</span> Loading Schedule
        </div>`;var te="";if(e){te=(e.tasks||[]).length+" tasks · "+(e.events||[]).length+" events";var ne=Wr(i.fetchedAt,Y);ne&&(te+="  "+ne),i.error&&(te+="  ·  refresh failed")}else te=i.error?"unavailable":"loading";return Je`
      <div class="sched-view" data-state=${e?"live":i.error?"error":"loading"}>
        <header class="sched-view__hdr">
          <h2 class="sched-view__title hdr-stub">Departures</h2>
          <span class="sched-view__meta">${te}</span>
          <button type="button" class=${"sched-view__refresh"+(i.fetching?" is-refreshing":"")}
                  title="Refresh schedule" aria-label="Refresh schedule"
                  onClick=${function(){R("manual")}}>↻</button>
        </header>
        <div class="sched-board">${V}</div>
      </div>
    `}function Kr(e){var t=[],n=[];return(Array.isArray(e)?e:[]).forEach(function(e){e&&e.when?t.push(e):e&&n.push(e)}),{dated:t,undated:n}}function Hr(e,t){if(!e)return"";var n=new Date(e);if(isNaN(n.getTime()))return"";var r=null!=t?t:Date.now(),i=Math.round((n.getTime()-r)/6e4),a=Math.abs(i);if(a<1)return"now";if(a<60)return i>0?"in "+a+"m":a+"m ago";var o=Math.round(a/60);if(o<24)return i>0?"in "+o+"h":o+"h ago";var l=Math.round(o/24);return l<14?i>0?"in "+l+"d":l+"d ago":n.toISOString().substring(0,10)}function Gr(e){return"now"===e?"now":e&&/^in \d+m$/.test(e)?"soon":""}function Wr(e,t){if(!e)return"";var n=null!=t?t:Date.now(),r=n-e;if(r<9e4)return"";var i=Math.round(r/1e3);return i<120?"· "+i+"s stale":"· "+Math.round(i/60)+"m stale"}function Vr(e){return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")}var Yr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function qr(e,t){var n=new Date(null!=t?t:Date.now()),r=e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate();return r?"today":Yr[e.getDay()]+" "+e.getDate()+"/"+(e.getMonth()+1)}function Jr(e){var t=String(e||"").match(/https?:\/\/[^\s"'<>)\]]+/i);return t?t[0]:null}function Xr(e,t){if(!e||!Array.isArray(e.tasks)||!t||"task"!==t.kind)return null;for(var n=0;n<e.tasks.length;n++)if(e.tasks[n]&&e.tasks[n].id===t.id)return e.tasks[n];return null}Je=e.bind(n);function zr(e){var t=e.row,n=e.rowKey,r=e.editedAmount,i=e.actions||{},o=s(!1),u=o[0],c=o[1],d=s(!1),f=d[0],p=d[1],h=l(null),v=da(t,r),g=v.isPending||null!=r&&""!==r;function m(e){e&&e.stopPropagation(),g&&c(!0)}function _(e){var t=String(e).replace(/[,\s]/g,"");return/^\d+(\.\d+)?$/.test(t)}function y(){var e=h.current,r=e?String(e.value).trim():"";if(!r||_(r))if(p(!1),c(!1),r){var a=r.replace(/[,\s]/g,""),o=parseFloat(a);i.commitAmount&&i.commitAmount(t,n,o)}else i.clearAmount&&i.clearAmount(n);else p(!0)}function b(e){"Enter"===e.key?(e.preventDefault(),e.target.blur()):"Escape"===e.key&&(e.preventDefault(),p(!1),c(!1))}a(function(){if(u&&h.current)try{h.current.focus(),h.current.select()}catch(e){}},[u]);var w="tx-amt"+(v.isPending?" is-pending":"")+(r?" tx-amt--edited":"")+(g?" tx-amt--editable":"");if(u){var k=r&&/\d/.test(String(r))?String(r):"",$="tx-amt-err-"+String(n||"row");return Je`
        <div class=${w}>
          <input ref=${h} type="text" class="tx-amt__input" placeholder="amount…"
                 inputMode="decimal" value=${k}
                 aria-invalid=${f?"true":null}
                 aria-describedby=${f?$:null}
                 onBlur=${y} onKeyDown=${b}
                 onInput=${f?function(){p(!1)}:null}
                 onClick=${function(e){e.stopPropagation()}} />
          ${f?Je`<span id=${$} class="tx-amt__err" role="alert">Numbers only. Not saved.</span>`:null}
        </div>`}var x="tx-amt__cc"+(!1===v.currencyKnown&&v.currencySymbol?" tx-amt__cc--unknown":""),S=!1===v.currencyKnown&&v.currencySymbol?"Unrecognized currency. Verify the unit before wiring.":null;return Je`
      <div class=${w} role=${g?"button":null} tabindex=${g?"0":null}
           onClick=${m}
           onKeyDown=${g?function(e){"Enter"===e.key&&m(e)}:null}>
        <span class=${x} title=${S}>${v.currencySymbol||""}</span>
        <span class="tx-amt__val">${v.amtText}</span>
      </div>
    `}Je=e.bind(n);function Qr(){return Je`
      <div class="tx-calm" role="status">
        <div class="tx-calm__mark" aria-hidden="true">✓</div>
        <div class="tx-calm__line">All caught up. No transfers in motion.</div>
        <div class="tx-calm__sub">New Gmail suggestions land here as they arrive.</div>
      </div>
    `}Je=e.bind(n);function Zr(e){var t=e.stats||{};function n(e,t,n){return Je`
        <div class=${"tx-hero__cell"+(n?" tx-hero__cell--"+n:"")}>
          <span class="tx-hero__num">${null==t?0:t}</span>
          <span class="tx-hero__lbl">${e}</span>
        </div>`}return Je`
      <div class="tx-hero" role="group" aria-label="Transfer counts">
        ${n("active",t.active)}
        ${n("in flight",t.inFlight)}
        ${n("awaiting Avi",t.awaitingAvi,"mustard")}
        ${n("ready",t.ready,"kelly")}
      </div>
    `}Je=e.bind(n);var ei={drafted:{title:"Drafted",sub:"חדש",hairline:"ink",calm:null},atAvi:{title:"At Avi",sub:"נשלח לאבי",hairline:"mustard",calm:"no one awaiting Avi · all caught up",hint:"signed, not yet wired. Either Avi's step or the funds still landing."},approved:{title:"Approved",sub:"מאושר",hairline:"kelly",calm:"nothing ready to wire right now"},transferred:{title:"Transferred",sub:"הועברו",hairline:"sage",calm:null,collapsible:!0}},ti={};function ni(e){var t={},n=[];return e.forEach(function(e){var r=Wi(e);t[r]||(t[r]=[],n.push(r)),t[r].push(e)}),n.map(function(e){return{name:e,rows:t[e]}})}function ri(e){var t=e.group,n=e.keyOf,r=e.actions,i=e.flaggedOf,a=e.onToggleFlag,o=e.marksOf,l=s(!1),u=l[0],c=l[1];if(1===t.rows.length){var d=t.rows[0],f=n(d);return Je`<${$i} row=${d} rowKey=${f} actions=${r}
                    flagged=${i(f)} onToggleFlag=${a}
                    manualMarks=${o(f)} />`}var p=t.rows[0],h=n(p);return Je`
      <${$i} row=${p} rowKey=${h} count=${t.rows.length} isParent=${!0}
         expanded=${u} onToggleGroup=${function(){c(!u)}}
         actions=${r} flagged=${i(h)} onToggleFlag=${a} manualMarks=${o(h)} />
      ${t.rows.slice(1).map(function(e){var t=n(e);return Je`<${$i} row=${e} rowKey=${t} isChild=${!0} expanded=${u}
                      actions=${r} flagged=${i(t)} onToggleFlag=${a} manualMarks=${o(t)} />`})}
    `}function ii(e){var t=e.band,n=ei[t]||{title:t,hairline:"ink",calm:null},r=e.rows||[],i=e.keyOf||function(e){return e&&e.rowKey||""},a=s(function(){return Object.prototype.hasOwnProperty.call(ti,t)?ti[t]:"transferred"===t}),o=a[0];function l(e){ti[t]=e,a[1](e)}if(e.skeleton)return Je`
        <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline} aria-busy="true">
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?Je`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__rows">
            <div class="tx-row tx-row--skeleton"></div>
            <div class="tx-row tx-row--skeleton"></div>
          </div>
        </section>`;if(!r.length)return n.calm?Je`
        <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline+" is-calm"}>
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?Je`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__calm">${n.calm}</div>
        </section>`:null;var u=va(t,r,i),c=ni(u);function d(t){return!!e.flaggedOf&&e.flaggedOf(t)}function f(t){return e.marksOf?e.marksOf(t):null}var p=null;if(n.collapsible){var h=pa(u,function(e){var t=i(e);return t?I("tx:amt:"+t):null});p=u.length+" wires"+(h?" · "+h:"")}return Je`
      <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline+(n.collapsible&&o?" is-collapsed":"")}>
        <header class=${"tx-band__hdr"+(n.collapsible?" tx-band__hdr--toggle":"")}
                role=${n.collapsible?"button":null} tabindex=${n.collapsible?"0":null}
                aria-expanded=${n.collapsible?o?"false":"true":null}
                onClick=${n.collapsible?function(){l(!o)}:null}
                onKeyDown=${n.collapsible?function(e){"Enter"!==e.key&&" "!==e.key||l(!o)}:null}>
          <h3 class="tx-band__title">${n.title}</h3>
          ${n.sub?Je`<span class="tx-band__sub">${n.sub}</span>`:null}
          ${p?Je`<span class="tx-band__summary">${p}</span>`:null}
          ${n.collapsible?Je`<span class="tx-band__chevron">${o?"▾":"▴"}</span>`:Je`<span class="tx-band__count">${u.length}</span>`}
        </header>
        ${!n.hint||n.collapsible&&o?null:Je`<div class="tx-band__hint">${n.hint}</div>`}
        ${n.collapsible&&o?null:Je`<div class="tx-band__rows">
              ${c.map(function(t){return Je`<${ri} group=${t} keyOf=${i} actions=${e.actions}
                              flaggedOf=${d} onToggleFlag=${e.onToggleFlag} marksOf=${f} />`})}
            </div>`}
      </section>
    `}Je=e.bind(n);var ai="#B6AE99",oi="#F2EDE0",li=["","SENT (link sent)","SIGNED (LP completed)","WIRED (money landed)"],si=[63,190,317];function ui(e){var t=!!e.sigDone,n=!!e.wireDone,r=e.color||"#1F5DB0",i=e.tooltipBase||"",a=e.manualMarks||null,o=[!0,t,n],l=t,s=t&&n;function u(e){var t=o[e-1],n=(t?"✓ ":"○ ")+li[e];return i&&(n+="\n\n"+i),n}function c(t,n){n&&(n.preventDefault(),n.stopPropagation()),2===t&&e.onSign?e.onSign():3===t&&e.onWire&&e.onWire()}function d(e,t,n,i){return n?Je`<line key=${i} x1=${e} y1="13" x2=${t} y2="13" stroke=${r} stroke-width="4" />`:Je`<line key=${i} x1=${e} y1="13" x2=${t} y2="13" stroke=${ai} stroke-width="1.5" stroke-dasharray="3 4" />`}function f(e){var t=si[e-1],n=o[e-1],i=2===e||3===e,a=u(e),l=i?"stop-hit stop-hit--clickable":"stop-hit",s=i?"stop-dot stop-dot--clickable":"stop-dot",d=i?li[e]+(n?" · done. Activate to undo.":" · not done. Activate to mark."):null;return Je`
        <g>
          <rect class=${l} data-stop=${e} x=${t-14} y="0" width="28" height="26"
                fill="transparent" role=${i?"button":null}
                tabindex=${i?"0":null}
                aria-label=${d}
                onClick=${i?function(t){c(e,t)}:null}
                onKeyDown=${i?function(t){"Enter"!==t.key&&" "!==t.key||c(e,t)}:null}>
            <title>${a}</title>
          </rect>
          ${n?Je`<circle class=${s} data-stop=${e} cx=${t} cy="13" r="6.5" fill=${r}
                    onClick=${i?function(t){c(e,t)}:null}><title>${a}</title></circle>`:Je`<circle class=${s} data-stop=${e} cx=${t} cy="13" r="6.5" fill=${oi} stroke=${ai} stroke-width="2"
                    onClick=${i?function(t){c(e,t)}:null}><title>${a}</title></circle>`}
        </g>`}return Je`
      <svg class="subway" viewBox="0 0 380 26" preserveAspectRatio="none">
        ${d(si[0],si[1],l,"s1")}
        ${d(si[1],si[2],s,"s2")}
        ${f(1)} ${f(2)} ${f(3)}
        ${e.overridden?Je`<circle class="stop-override-mark" cx="362" cy="6" r="3.5" fill="#C24A56"><title>Wire marked locally. Click the dot to clear.</title></circle>`:null}
        ${a&&a.sig?Je`<text class="stop-manual-mark" x=${si[1]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"SIGN flipped manually"+(a.lastTs?" · last "+String(a.lastTs).slice(0,10):"")}</title></text>`:null}
        ${a&&a.wire?Je`<text class="stop-manual-mark" x=${si[2]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"WIRE flipped manually"+(a.lastTs?" · last "+String(a.lastTs).slice(0,10):"")}</title></text>`:null}
      </svg>
    `}Je=e.bind(n);var ci=6048e5;function di(e){return"tx:sg:skip:"+e}function fi(e){var t=I(di(e));if(!t)return!1;var n=parseInt(t,10);return!!n&&Date.now()-n<ci}function pi(e){U(di(e),String(Date.now()))}var hi={};function vi(e){return String(e||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gi(e,t){var n,r=String(e||""),i={},a=[];if((t||[]).forEach(function(e){var t=String(e||"").split(/\s+/)[0];t&&!i[t]&&(i[t]=!0,a.push(t))}),!a.length)return[{text:r,mark:!1}];try{n=new RegExp("("+a.map(vi).join("|")+")","g")}catch(e){return[{text:r,mark:!1}]}return r.split(n).map(function(e,t){return{text:e,mark:t%2==1}}).filter(function(e){return""!==e.text})}function mi(e){return"tx-sg-det-"+String(e||"").replace(/[^A-Za-z0-9_-]/g,"-")}function _i(e){var t=e.s||{},n=t.evidence&&"object"==typeof t.evidence?t.evidence:{},r=t.confidence||{};return Je`
      <div class="tx-suggestion__details" id=${mi(t.id)}>
        ${r.reasoning&&r.reasoning.length?Je`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Confidence</span>
              <span class="tx-suggestion__det-val">${(null!=r.score?r.score+" · ":"")+r.reasoning.join(", ")}</span>
            </div>`:null}
        ${n.matchedPhrases&&n.matchedPhrases.length?Je`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Matched</span>
              <span class="tx-suggestion__det-val">
                ${n.matchedPhrases.map(function(e){return Je`<span class="tx-pill tx-pill--pos">${e}</span> `})}
              </span>
            </div>`:null}
        ${n.negativeSignals&&n.negativeSignals.length?Je`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Against</span>
              <span class="tx-suggestion__det-val">
                ${n.negativeSignals.map(function(e){return Je`<span class="tx-pill tx-pill--neg">${e&&e.label||""}<span class="tx-pill__sub">${e&&e.kind||""}</span></span> `})}
              </span>
            </div>`:null}
        ${n.snippet?Je`<div class="tx-suggestion__det-row tx-suggestion__det-row--snippet">
              <span class="tx-suggestion__det-lbl">Snippet</span>
              <span class="tx-suggestion__det-val tx-suggestion__det-snippet">
                ${gi(n.snippet,n.matchedPhrases).map(function(e){return e.mark?Je`<mark>${e.text}</mark>`:e.text})}
              </span>
            </div>`:null}
        ${n.subject?Je`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Subject</span>
              <span class="tx-suggestion__det-val">${n.subject}</span>
            </div>`:null}
      </div>
    `}function yi(e){var t=e.rpc||{},n=e.toast||function(){},r=e.audit||function(){},i=e.patchRowKey||function(e){return e},a=e.isWired||function(){return!1},o=s({}),l=o[0],u=o[1],c=s({}),d=c[0],f=c[1],p=s({}),h=p[0],v=p[1],g=(e.suggestions||[]).filter(function(e){return!(!e||!e.id)&&(!l[e.id]&&(!fi(e.id)&&!a(e)))});if(!g.length)return null;g.forEach(function(e){if(!hi[e.id]){hi[e.id]=!0;try{r("shown",e)}catch(e){}}});var m=g.filter(function(e){return e.confidence&&"high"===e.confidence.tier});function _(e){v(bi(h,e.id,!h[e.id]))}function y(r){r=i(r),r.rowKey?(f(bi(d,r.id,!0)),n("Applying · "+(r.lpName||""),"success"),t.applyTransferSuggestion(r).then(function(t){if(f(bi(d,r.id,!1)),t&&t.ok){var i=t.noop?"Already marked · "+(r.lpName||""):"Done · "+(r.lpName||"")+" marked wired";n(i,"success");try{Y(r.rowKey),J(r.rowKey)}catch(e){}e.onApplied&&e.onApplied(r),u(bi(l,r.id,!0))}else n("Failed · "+(t&&t.error||"unknown"),"error")},function(e){f(bi(d,r.id,!1)),n("Failed · "+(e&&e.message?e.message:"server error"),"error")})):n("Cannot match · "+(r.lpName||"")+" (no local row)","error")}function b(){var r=m.map(i).filter(function(e){return e.rowKey});r.length?(n("Applying "+r.length+" …","success"),t.applyMultipleTransferSuggestions(r).then(function(t){if(t&&Array.isArray(t.results)){var i={};t.results.forEach(function(e){e&&e.id&&e.result&&e.result.ok&&(i[e.id]=!0)});var a=wi(l),o=0;r.forEach(function(t){if(i[t.id]){try{Y(t.rowKey),J(t.rowKey)}catch(e){}e.onApplied&&e.onApplied(t),a[t.id]=!0,o++}}),u(a);var s=r.length-o;o&&n("Applied "+o+(1===o?" wire":" wires"),"success"),s&&n("Batch · "+s+" failed, kept visible","error")}else n("Batch failed · "+(t&&t.error||"unknown"),"error")},function(e){n("Batch failed · "+(e&&e.message?e.message:"server error"),"error")})):n("No matchable high-confidence suggestions","error")}function w(e){pi(e.id),r("skipped",e),u(bi(l,e.id,!0)),n("Hidden for 7 days · "+(e.lpName||""),"success")}return Je`
      <div class="tx-suggestions" role="region" aria-label="Transfer suggestions">
        <div class="tx-suggestions__bar">
          <div class="tx-suggestions__summary">
            <b>${g.length}</b> ${1===g.length?"suggestion":"suggestions"}
            ${m.length?Je` · <span class="tx-conf tx-conf--high tx-conf--inline">${m.length} high</span>`:null}
          </div>
          ${m.length>=2?Je`<button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                     onClick=${b}>Approve all high (${m.length})</button>`:null}
        </div>
        ${g.map(function(e){var t=e.evidence&&"object"==typeof e.evidence?e.evidence:null,n=t?(t.fromName?t.fromName+" · ":"")+String(t.dateIso||"").slice(0,10):"string"==typeof e.evidence?e.evidence:"";t&&!n&&(n=t.subject||"");var r=t&&(t.subject||t.snippet)||"",i=t&&t.threadUrl||e.threadUrl||"",a=!!h[e.id];return Je`
            <div class=${"tx-suggestion"+(d[e.id]?" is-applying":"")+(a?" is-expanded":"")}>
              <div class="tx-suggestion__body">
                <div class="tx-suggestion__lp">
                  <bdi>${e.lpName||e.label||"(unnamed)"}</bdi>
                  ${e.confidence&&e.confidence.tier?Je`<span class=${"tx-conf tx-conf--"+e.confidence.tier}>${e.confidence.tier}</span>`:null}
                </div>
                <div class="tx-suggestion__change">${e.changeLabel||e.change||"mark wired"}</div>
                ${n||i?Je`<div class="tx-suggestion__evidence"
                          onClick=${function(t){t&&t.target&&"A"===t.target.tagName||_(e)}}>
                      ${i&&/^https?:\/\//i.test(i)?Je`<a href=${i} target="_blank" rel="noopener" title=${r}>${n||"open thread ↗"}</a>`:Je`<span title=${r}>${n}</span>`}
                    </div>`:null}
              </div>
              <div class="tx-suggestion__actions">
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                        onClick=${function(){y(e)}}>approve</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip"
                        onClick=${function(){w(e)}}>skip</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip tx-suggestion__btn--ghost"
                        title="Explain confidence"
                        aria-expanded=${a?"true":"false"}
                        aria-controls=${mi(e.id)}
                        onClick=${function(){_(e)}}>Why?</button>
              </div>
              ${a?Je`<${_i} s=${e} />`:null}
            </div>`})}
      </div>
    `}function bi(e,t,n){var r=wi(e);return r[t]=n,r}function wi(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}Je=e.bind(n);function ki(e){var t=String(e||"");return/^https?:\/\//i.test(t)}function $i(e){var t=e.row,n=e.rowKey,r=e.count||1,i=e.actions||{},a=re(t,n),o=ea(t,n),l=aa(t),s=oa(t),u=fa(t),c=n?I("tx:amt:"+n):null,d=!!n&&null!=W(n),f=ra(t,n),p=t&&t.rowDeepLink,h="tx-row"+(e.isParent?" tx-row--parent":"")+(e.isChild?" tx-row--child":"")+(e.expanded?" is-expanded":"");function v(){e.isParent&&e.onToggleGroup&&e.onToggleGroup()}function g(t){t.stopPropagation(),e.onToggleFlag&&e.onToggleFlag(n)}return Je`
      <div class=${h} hidden=${!(!e.isChild||e.expanded)||null}
           role=${e.isParent?"button":null}
           tabindex=${e.isParent?"0":null}
           aria-expanded=${e.isParent?e.expanded?"true":"false":null}
           onClick=${v}
           onKeyDown=${e.isParent?function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),v())}:null}>
        <div class="tx-lp">
          <div class="tx-name">
            <span class="tx-dir" style=${"color:"+l} aria-hidden="true">${s}</span>
            <bdi class="tx-name-bdi">${Wi(t)}</bdi>
            ${u?Je`<span class="tx-kind">${u}</span>`:null}
            ${r>1?Je`<span class="tx-count">×${r}</span>`:null}
            <span class=${"tx-flag"+(e.flagged?" is-on":"")}
                  role="button" tabindex="0"
                  title=${e.flagged?"Marked for review · click to clear":"Mark for review"}
                  onClick=${g}
                  onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key||g(e)}}>⚑</span>
            ${o&&o.label?Je`<span class=${"tx-stage tx-stage--"+o.tier} title=${o.blocker}>${o.label}</span>`:null}
          </div>
          ${o&&o.blocker?Je`<div class="tx-state tx-state--prose">
                     ${o.blocker}
                     ${f&&p&&ki(p)?Je`<a class="tx-triage" href=${p} target="_blank" rel="noopener"
                                title="Money moved before paperwork done. Triage." onClick=${function(e){e.stopPropagation()}}> ↗</a>`:null}
                   </div>`:null}
          ${t.note||t.subtitle||t.lastNote?Je`<div class="tx-note"><span class="arr">→</span>${" "+(t.note||t.subtitle||t.lastNote)}</div>`:null}
        </div>

        <div class=${"tx-track"+(d?" tx-track--overridden":"")}
             onClick=${function(e){e.stopPropagation()}}>
          <${ui}
            sigDone=${a.signed}
            wireDone=${a.wired}
            color=${l}
            overridden=${d}
            manualMarks=${e.manualMarks}
            tooltipBase=${ha(t,n)}
            onSign=${function(){i.signDot&&i.signDot(t,n)}}
            onWire=${function(){i.wireDot&&i.wireDot(t,n)}} />
        </div>

        <${zr} row=${t} rowKey=${n} editedAmount=${c} actions=${i} />
      </div>
    `}Je=e.bind(n);function xi(e){return"transfers:payload:"+String(e||"current")}var Si=[2e3,4e3,6e3];function Ai(e){var t=L(xi(e));return t?Math.max(0,Date.now()-(t.ts||0)):0}var Ci=function(){for(var e=void 0!==mn&&mn||[],t=0;t<e.length;t++)if(e[t]&&"transfer-tracker"===e[t].id)return e[t].href||null;return null}(),Ni={scrollY:null},Ei=["drafted","atAvi","approved","transferred"],Pi=["drafted","atAvi","approved"],Oi=String.fromCharCode(8212)+" departed "+String.fromCharCode(8212);function Di(e,t){var n=da(e,I("tx:amt:"+t)),r=n.amtText?(n.currencySymbol||"")+n.amtText:"",i=re(e,t),a=["Sent"];i.signed&&a.push("Signed"),i.wired&&a.push("Wired");var o=[Wi(e)];if(e.subKind)o.push(/רווחי\s*הון/.test(e.subKind)?"capital gains tax":/דמי\s*הצלחה/.test(e.subKind)?"success fee":e.subKind);else{var l=fa(e);l&&o.push(l)}return r&&o.push(r),o.push(a.join(", ")),o.join(" · ")}function Ti(e,t,n){var r=va(e,t||[],n),i={},a=[];r.forEach(function(e){var t=Wi(e);i[t]||(i[t]=[],a.push(t)),i[t].push(e)});var o=[];return a.forEach(function(e){i[e].forEach(function(e){o.push(e)})}),o}function Mi(e,t,n){var r=[];Pi.forEach(function(n){Ti(n,e[n],t).forEach(function(e){r.push(e)})});var i=Ti("transferred",e.transferred,t);if(!r.length&&!i.length)return{text:"",count:0};var a=["Transfers · "+(n||"")];return r.forEach(function(e){a.push(Di(e,t(e)))}),i.length&&(a.push(Oi),i.forEach(function(e){a.push(Di(e,t(e)))})),{text:a.join("\n"),count:r.length+i.length}}function Ri(){var e=ae.transfers.value,t=ae.suggestions.value,n=e&&e.monthLabel||"current",r=s(function(){if(e)return{state:"LIVE",data:e,watchdogPhase:null,ageMs:0};var t=I(xi(n));return t?{state:"CACHED",data:t,watchdogPhase:null,ageMs:Ai(n)}:{state:"LOADING",data:null,watchdogPhase:null,ageMs:0}}),i=r[0],o=r[1],u=s(0),c=(u[0],u[1]);function d(){c(function(e){return e+1})}var f=l([]),p=l(0);a(function(){if(e&&Array.isArray(e.rows)){try{U(xi(n),e)}catch(e){}o({state:"LIVE",data:e,watchdogPhase:null,ageMs:0})}},[e,n]),a(function(){try{G()}catch(e){}try{e&&ne({transfers:e})}catch(e){}},[]),a(function(){if("undefined"!=typeof window){var e=Ni.scrollY;if(null!=e&&e>0){try{window.scrollTo(0,e)}catch(e){}try{requestAnimationFrame(function(){try{window.scrollTo(0,e)}catch(e){}})}catch(e){}}return function(){try{Ni.scrollY=window.pageYOffset||0}catch(e){}}}},[]);var h=s(null),v=h[0],g=h[1],m=s(!1),_=m[0],y=m[1],b=l(0);function w(){f.current.forEach(function(e){try{clearTimeout(e)}catch(e){}}),f.current=[]}function k(){var e=ce();p.current=e,w();var t=!(!i.data&&!I(xi(n)));o(function(e){return{state:t?"CACHED":"LOADING",data:e.data,watchdogPhase:null,ageMs:e.ageMs}}),f.current.push(setTimeout(function(){p.current===e&&o(function(e){return Fi(e,{watchdogPhase:"slow"})})},Si[0])),f.current.push(setTimeout(function(){if(p.current===e){var t=I(xi(n));o(function(e){return t?{state:"STALE",data:t,watchdogPhase:"fallback",ageMs:Ai(n)}:Fi(e,{watchdogPhase:"fallback"})})}},Si[1])),f.current.push(setTimeout(function(){p.current===e&&(I(xi(n))||i.data||o(function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:e.ageMs}}))},Si[2])),Ge.bootstrap({lite:!1}).then(function(t){if(p.current===e){if(w(),!t||!t.transfers){var r=I(xi(n));return o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Ai(n)}:function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:0}}),void Be("transfers:refresh:empty",new Error("no transfers in refetch"))}de(t,e);try{U(xi(n),t.transfers)}catch(e){}o({state:"LIVE",data:t.transfers,watchdogPhase:null,ageMs:0})}},function(t){if(p.current===e){w();var r=I(xi(n));o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Ai(n)}:function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:0}}),Be("transfers:refresh",t)}})}a(function(){var e=++b.current;try{Ge.rowsWithManualEvents(30).then(function(t){b.current===e&&(g(t&&"object"==typeof t?t:{}),y(!0))},function(){b.current===e&&(g({}),y(!1))})}catch(e){}return function(){b.current++}},[]),a(function(){return w},[]);var $=l(null);$.current||($.current=xa({rpc:Ge,toast:qe,toastUndo:Li,audit:function(e,t){try{Ge.recordTransferSuggestionEvent(e,t).catch(function(){})}catch(e){}},repaint:d,failBus:"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,confirmSigClear:function(e){return"undefined"==typeof window||!window.confirm||window.confirm("Clear signed status"+(e?" for "+e:"")+"? This clears the signature cell in the tracker.")}}));var x=$.current,S=i.data||e||null,A=S&&Array.isArray(S.rows)?S.rows:[],C=v&&_?v:S&&S.manualMarks||{},N=sa(A,n),E=Ui(),P=!1,O=N.map(function(e){var t=Bi(e,E);return Ki(e)&&(P=!0),{row:e,rowKey:t}});if(P)try{console.warn("[atriumX] a transfer row has no server rowKey; using unstable display-field key. Local overrides may orphan on edit.")}catch(e){}var D=new Map;function T(e){return D.has(e)?D.get(e):Bi(e,null)}O.forEach(function(e){D.set(e.row,e.rowKey)});var M={drafted:[],atAvi:[],approved:[],transferred:[]};O.forEach(function(e){var t=ia(e.row,e.rowKey);(M[t]||M.drafted).push(e.row)});var R={active:M.drafted.length+M.atAvi.length+M.approved.length,inFlight:M.drafted.length,awaitingAvi:M.atAvi.length,ready:M.approved.length},L=Pi.every(function(e){return 0===M[e].length});function F(e){return!!e&&X(e)}function j(e){e&&(z(e),d())}function B(e){return e&&C&&C[e]||null}function K(e){if(!e||e.rowKey)return e;var t=String(e.lpName||"").toLowerCase().trim();if(!t)return e;for(var n=-1,r=0,i=0;i<O.length;i++){var a=O[i].row,o=String(a.engName||a.label||a.name||a.lpName||"").toLowerCase().trim();o&&o===t&&(r++,n=i)}if(1!==r)return e;var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(l[s]=e[s]);return l.rowKey=O[n].rowKey,l}function H(e){if(!e||!e.rowKey)return!1;for(var t=0;t<O.length;t++)if(O[t].rowKey===e.rowKey)return re(O[t].row,e.rowKey).wired;return!1}function W(e){e&&e.rowKey&&(V(e.rowKey,3),d())}function Y(){var e=Mi(M,T,n);e.text?Pe(e.text,function(t){t?qe("Copied · "+e.count+" transfers","success"):qe("Copy failed","error")},"transfers:copy:fallback"):qe("Nothing to copy","error")}var q=Ii(i,k),J="LOADING"===i.state&&!S;return Je`
      <div class="tx-view" data-fetch-state=${i.state}>
        <header class="tx-view__hdr">
          <h2 class="tx-view__title hdr-stub">Transfers</h2>
          <span class="tx-view__month">${ji(n)}</span>
          <button type="button" class="tx-view__copy" title="Copy the list as shown" aria-label="Copy transfers list" onClick=${Y}>⧉</button>
          <button type="button" class="tx-view__refresh" title="Refresh transfers" aria-label="Refresh transfers" onClick=${k}>↻</button>
        </header>

        <${Zr} stats=${R} />

        ${q}

        <${yi}
          suggestions=${t||S&&S.suggestions||[]}
          rpc=${Ge}
          toast=${qe}
          audit=${function(e,t){try{Ge.recordTransferSuggestionEvent(e,t).catch(function(){})}catch(e){}}}
          patchRowKey=${K}
          isWired=${H}
          onApplied=${W} />

        ${J?Ei.map(function(e){return Je`<${ii} band=${e} skeleton=${!0} />`}):Je`
            ${Ei.map(function(e){return Je`<${ii} band=${e} rows=${M[e]} keyOf=${T}
                            actions=${x} flaggedOf=${F} onToggleFlag=${j} marksOf=${B} />`})}
            ${L&&0===M.transferred.length?Je`<${Qr} />`:null}
          `}

        ${Ci?Je`<div class="tx-view__builder">
              <a class="tx-builder-link" href=${Ci} target="_blank" rel="noopener">Open the transfer-form builder ↗</a>
            </div>`:null}
      </div>
    `}function Ii(e,t){var n=e.state,r=e.watchdogPhase;return"CACHED"===n&&"slow"===r?Je`<div class="tx-banner tx-banner--soft">showing cached · refreshing…</div>`:"LOADING"===n&&"slow"===r?Je`<div class="tx-banner tx-banner--soft">fetching latest…</div>`:"STALE"===n?Je`<div class="tx-banner tx-banner--warn">showing last cached · <button type="button" class="tx-banner__retry" onClick=${t}>retry ↻</button></div>`:"ERROR"===n?Je`<div class="tx-banner tx-banner--err">transfers fetch slow · <button type="button" class="tx-banner__retry" onClick=${t}>retry ↻</button></div>`:null}function Li(e,t,n){if("undefined"!=typeof document){var r=document.getElementById("toast-stack");if(r){var i=n||6e3,a=document.createElement("div");a.className="toast-stack__item is-success";var o=document.createElement("span");o.textContent=e,a.appendChild(o);var l=document.createElement("span");l.textContent=" · ",l.style.opacity="0.5",a.appendChild(l);var s=document.createElement("button");s.type="button",s.className="toast__undo",s.textContent="UNDO";var u=!1;s.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),c();try{t&&t()}catch(e){}}),a.appendChild(s),r.appendChild(a),requestAnimationFrame(function(){a.classList.add("is-show")}),setTimeout(c,i)}else qe(e,"success")}function c(){if(!u){u=!0;try{a.classList.remove("is-show"),setTimeout(function(){a.parentNode&&a.parentNode.removeChild(a)},250)}catch(e){}}}}function Fi(e,t){var n={};for(var r in e)n[r]=e[r];for(var i in t)n[i]=t[i];return n}function ji(e){var t=String(e||"").match(/^(\d{1,2})\/(\d{4})$/);if(!t)return String(e||"");var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=parseInt(t[1],10)-1;return(n[r]||t[1])+" "+t[2]}function Ui(){return{n:0}}function Bi(e,t){if(!e)return"";var n=e.rowKey||e.masterRid||e.rid||e.uid;if(n)return String(n);var r=Gi(e.label||e.name)+":"+(e.kind||"")+":"+(e.startDateIso||"");if(!e.startDateIso){var i=t||{n:0};r+=":#"+i.n++}return r}function Ki(e){return!e||!(e.rowKey||e.masterRid||e.rid||e.uid)}var Hi={"עדי רמניק":"Adi Ramnik","אלמוג חזון":"Almog Hazon","אקסל":"EXCEL","תיגבור קבו":"TIGBUR"};function Gi(e){var t=String(null==e?"":e).trim();return t?t.indexOf("להשלים")>=0?"NAV":Hi[t]?Hi[t]:t:"NAV"}function Wi(e){if(!e)return"";if(e.engName&&String(e.engName).trim())return String(e.engName).trim();var t=String(null==(e.label||e.name)?"":e.label||e.name).trim(),n=Gi(e.label||e.name);return"NAV"===n&&!t&&e.identityPending?"NAV (pending identity)":n}var Vi=["paid to client","הועבר ללקוח","moved to trading","הועבר למסחר","בברוקר"];function Yi(e){for(var t=String(e||""),n=0;n<Vi.length;n++)if(t.indexOf(Vi[n])>=0)return!0;return!1}function qi(e){var t=String(e&&e.type||e&&e.kind||"").toLowerCase();return t.indexOf("הצטר")>=0||t.indexOf("join")>=0||t.indexOf("הגדל")>=0||t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0}var Ji=["נשלח","נוצר","sent","emailed","נפתח","פתוח","בתהליך","open","viewed","clicked"];function Xi(e){for(var t=String(e||""),n=0;n<Ji.length;n++)if(t.indexOf(Ji[n])>=0)return!0;return!1}function zi(e){var t=String(e&&e.amountText||"").trim();if(!t)return!1;if(e&&e.needsNavNumbers)return!1;if(t.indexOf("להשלים")>=0)return!1;var n=t.replace(/[₪$€£,\s]/g,""),r=parseFloat(n);return isFinite(r)?0!==r:/\d/.test(t)}var Qi=["received in transit","התקבל במעבר","in transit"];function Zi(e){for(var t=String(e||""),n=0;n<Qi.length;n++)if(t.indexOf(Qi[n])>=0)return!0;return!1}function ea(e,t){var n=re(e,t),r=String(e&&e.execStatus||"").toLowerCase(),i=zi(e);if(ta(e))return{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+String(e&&e.amountText||"").trim()+'". Avi sends this figure from the struck NAV.'};if(Yi(r)||n.wired&&i)return{stage:"done",label:"Done",tier:"done",blocker:"Settled. Money landed."};if(!n.signed){var a=String(e&&e.sigStatus||"").toLowerCase();return{stage:"awaiting-sig",label:"Awaiting signature",tier:"muted",blocker:Xi(a)?"Link sent / opened, not signed yet.":"Not signed. No signature link evidence in the tracker yet."}}if(!i){var o=String(e&&e.amountText||"").trim();return o.indexOf("להשלים")>=0?{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+o+'". Avi sends this figure from the struck NAV.'}:{stage:"amount-missing",label:"Amount missing in tracker",tier:"amber",blocker:o?'Amount cell holds "'+o+'". Fill the amount, then it can wire.':"Amount cell is empty. Fill the amount, then it can wire."}}return qi(e)&&Zi(r)?{stage:"funds-in",label:"Funds received",tier:"ready",blocker:"Money received. Funds in the account."}:qi(e)&&!n.wired?{stage:"awaiting-funds",label:"Awaiting funds in",tier:"muted",blocker:"Signed. Money not received yet."}:{stage:"ready",label:"Ready to wire",tier:"ready",blocker:"Signed, amount set. Ready to wire."}}function ta(e){return!(!e||!0!==e.needsNavNumbers)||String(e&&e.amountText||"").indexOf("להשלים")>=0}function na(e,t){if(ta(e))return!1;var n=re(e,t);return n.signed&&n.wired}function ra(e,t){var n=re(e,t);return n.wired&&!n.signed}function ia(e,t){if(na(e,t))return"transferred";var n=ea(e,t);return"ready"===n.stage||"funds-in"===n.stage?"approved":"amount-missing"===n.stage?ra(e,t)||re(e,t).signed?"atAvi":"drafted":"awaiting-sig"===n.stage?ra(e,t)?"atAvi":"drafted":"atAvi"}function aa(e){var t=String(e&&e.kind||"").toLowerCase();return t.indexOf("withdraw")>=0||t.indexOf("redem")>=0?"#C0202E":t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0||t.indexOf("subscrip")>=0?"#2E8540":"#1F5DB0"}function oa(e){var t=String(e&&e.kind||"").toLowerCase();return t.indexOf("withdraw")>=0||t.indexOf("redem")>=0?"↑":t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0||t.indexOf("subscrip")>=0?"↓":"·"}var la=["January","February","March","April","May","June","July","August","September","October","November","December"];function sa(e,t){if(!Array.isArray(e))return[];var n=String(t||""),r=-1,i=-1,a=n.match(/^(\d{1,2})\/(\d{4})$/);if(a)r=parseInt(a[1],10)-1,i=parseInt(a[2],10);else{var o=n.match(/(\w+)\s+(\d{4})/);o&&(r=la.indexOf(o[1]),i=parseInt(o[2],10))}if(r<0)return e.slice();var l=("0"+(r+1)).slice(-2)+"/"+i;return e.filter(function(e){if(e.monthTab)return e.monthTab===l;var t=String(e.startDateIso||e.startDate||"").match(/(\d{4})-(\d{2})/);if(!t)return!1;var n=parseInt(t[1],10),a=parseInt(t[2],10)-1;return n===i&&a===r})}var ua=/[֐-׿]/;function ca(e){var t=String(e||"").trim();return/^[\d.,\s]+$/.test(t)&&(t=""),!t||/ש["׳]?ח|שקל|ils|₪/i.test(t)?{symbol:"₪",known:!0}:/דולר|usd|\$/i.test(t)?{symbol:"$",known:!0}:/(יורו|אירו|eur|€)/i.test(t)?{symbol:"€",known:!0}:/(לירה|£|gbp)/i.test(t)?{symbol:"£",known:!0}:{symbol:t.slice(0,4),known:!1}}function da(e,t){var n=null!=t&&""!==t?String(t):String(e&&e.amountText||"").trim();if(!n)return{amtText:"",isPending:!0,currencySymbol:""};if(n.indexOf("להשלים")>=0)return{amtText:"NAV",isPending:!0,currencySymbol:""};if(ua.test(n))return{amtText:"unparsed",isPending:!0,currencySymbol:""};if(!/\d/.test(n))return{amtText:n,isPending:!0,currencySymbol:""};var r=n.replace(/[₪$€£,\s]/g,""),i=parseFloat(r),a=isFinite(i)?Math.round(i).toLocaleString("en-US"):n,o=ca(e&&e.currency);return{amtText:a,isPending:!1,currencySymbol:o.symbol,currencyKnown:o.known}}function fa(e){var t=String(e&&e.kind||"").toLowerCase().trim();return t?t.indexOf("carry")>=0?"carry":t.indexOf("tax")>=0?"tax":t.indexOf("redem")>=0?"redemption":t.indexOf("sub")>=0?"sub":t.indexOf("fo-pay")>=0?"fo":t.indexOf("rev")>=0?"rev":t.slice(0,8):""}function pa(e,t){t=t||function(){return null};var n={};return(e||[]).forEach(function(e){var r=da(e,t(e));if(r&&!r.isPending){var i=parseFloat(String(r.amtText).replace(/,/g,""));if(isFinite(i)){var a=r.currencySymbol||"₪";n[a]=(n[a]||0)+i}}}),Object.keys(n).map(function(e){var t=n[e];return t>=1e6?e+(t/1e6).toFixed(1)+"M":t>=1e3?e+Math.round(t/1e3)+"K":e+Math.round(t)}).join(" · ")}function ha(e,t){var n=String(e&&e.sigStatus||"").trim(),r=String(e&&e.execStatus||"").trim(),i=String(e&&e.amountText||"").trim(),a=/\d/.test(i),o=[];return n&&o.push("STATUS="+n),r&&o.push("EXEC="+r),a&&o.push("AMOUNT="+i),e&&e.isDone&&o.push("isDone=✓"),o.length?o.join(" · "):"no upstream signal yet"}function va(e,t,n){var r=(t||[]).slice();function i(e,t){return String(Wi(e)).localeCompare(String(Wi(t)),"he")}return n=n||function(e){return Bi(e,null)},"atAvi"===e||"approved"===e?(r.sort(function(e,t){function r(e){var t=n(e),r=re(e,t);return r.signed&&!r.wired?0:r.signed||r.wired?2:1}var a=r(e),o=r(t);return a!==o?a-o:i(e,t)}),r):(r.sort(i),r)}Dt="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function ga(e){return Dt&&"function"==typeof Dt.optimisticWrite?Dt.optimisticWrite(e):Mt(e)}function Mt(e){e=e||{};var t=e.failBus||null,n=e.source||"write:"+(e.key||"unknown");try{e.applyLocal&&e.applyLocal()}catch(e){}try{e.audit&&e.audit("applied")}catch(e){}var r=!1;function i(){if(!r){r=!0;try{e.audit&&e.audit("confirmed")}catch(e){}try{e.onConfirm&&e.onConfirm()}catch(e){}try{t&&t.resolve&&t.resolve(n)}catch(e){}}}function a(i){if(!r){r=!0;try{e.audit&&e.audit("reverted")}catch(e){}try{e.onRevert&&e.onRevert(i)}catch(e){}if(t)try{t.raise(n,i||new Error("write reverted"),{severity:"station",retry:e.retry||null})}catch(e){}}}try{e.rpc(function(e){e&&e.ok?i():a(new Error(e&&e.message||"server rejected write"))},function(e){a(e)})}catch(e){a(e)}return{confirm:i,revert:a,isSettled:function(){return r}}}var ma=600,_a=new Map;function ya(e,t,n){var r=e+":"+t,i="number"==typeof n?n:Date.now(),a=_a.get(r);return null!=a&&i-a<ma||(_a.set(r,i),!1)}function ba(e){return String(e&&(e.engName||e.label||e.name||e.lpName)||"").trim()}var wa="transfer-tracker",ka={};function $a(e,t,n){if(!e)return null;var r=n||t;return{raise:function(n,i,a){var o=i instanceof Error?i:new Error(String(null==i?"write reverted":i));try{o.message=t+" · "+(o.message||"write reverted")}catch(e){}return ka[r]=!0,e.raise(wa,o,a)},resolve:function(){for(var t in delete ka[r],ka)if(Object.prototype.hasOwnProperty.call(ka,t))return!1;return!!e.resolve&&e.resolve(wa)}}}function xa(e){e=e||{};var t=e.rpc||{},n=e.toast||function(){},r=e.toastUndo||function(){},i=e.audit||function(){},a=e.repaint||function(){},o=e.failBus||null,l=e.now||function(){return Date.now()},s=e.confirmSigClear||function(){return!0};function u(e,s){if(!s)return!1;if(ya(s,3,l()))return!1;var c=ba(e),d=W(s),f=re(e,null).wired,p=3===d||null==d&&f;if(p)return V(s,1),a(),r("Unmarked wired (local) · "+c,function(){V(s,3),a()},6e3),!0;var h={id:"manual-wire-"+s,rowKey:s,lpName:c,change:"manual_wire_set",confidence:{tier:"manual",score:0}};return ga({key:"tx:stop:"+s,applyLocal:function(){V(s,3),a()},audit:function(e){i(e||"applied",h)},rpc:function(e,n){t.setTransferStatus(s,"Wired").then(e,n)},onConfirm:function(){Y(s),n("Synced · wired","success")},onRevert:function(e){Y(s),a(),n("Save failed · "+Sa(e)+" · reverted","error")},retry:function(){u(e,s)},failBus:$a(o,"wire "+s+(c?" ("+c+")":""),"transfers:wire:"+s),source:"transfers:wire:"+s}),r("Marked wired · "+c,function(){V(s,1),a()},6e3),!0}function c(e,u){if(!u)return!1;if(ya(u,2,l()))return!1;var d=ba(e),f=re(e,u).signed;if(f&&!s(d))return!1;var p=f?"":"הושלם",h=f?"0":"1",v=f?"הושלם":"",g=f?"1":"0",m={id:"manual-sig-"+u,rowKey:u,lpName:d,change:p?"manual_sig_set":"manual_sig_clear",confidence:{tier:"manual",score:0}},_=null;return ga({key:"tx:sig:"+u,applyLocal:function(){q(u,h),a()},audit:function(e){i(e||"applied",m)},rpc:function(e,n){_=t.setTransferSigStatus(u,p),_.then(e,n)},onConfirm:function(){J(u),n("Synced · "+(p?"signed":"unsigned"),"success")},onRevert:function(e){J(u),a(),n("Save failed · "+Sa(e)+" · reverted","error")},retry:function(){c(e,u)},failBus:$a(o,"sign "+u+(d?" ("+d+")":""),"transfers:sign:"+u),source:"transfers:sign:"+u}),r((p?"Marked signed · ":"Unmarked · ")+d,function(){q(u,g),a();var e=_||Promise.resolve();function n(){t.setTransferSigStatus(u,v).then(function(e){e&&e.ok&&J(u)},function(){})}e.then(n,n)},6e3),!0}function d(e,r,i){if(r)if("number"==typeof i&&isFinite(i)){U("tx:amt:"+r,i),n("Saved locally · "+i,"success"),a();var l={rowKey:r,amount:i,monthTab:e&&e.monthTab,kind:e&&e.kind,lp:Gi(e&&(e.label||e.name))},s="transfers:amount:"+r;t.setTransferAmount(l).then(function(e){if(e&&e.ok){if(B("tx:amt:"+r),n("Synced · "+i,"success"),a(),o)try{$a(o,"amount "+r,s).resolve()}catch(e){}}else{if(e&&"no-backend-writeback-yet"===e.reason)return n("Saved locally only · this transfer kind has no tracker write path yet","error"),void a();u(new Error(e&&e.message||e&&e.reason||"server rejected write"))}},function(e){u(e)})}else n("Save failed · amount must be a number · not sent","error");function u(t){if(B("tx:amt:"+r),n("Save failed · "+Sa(t)+" · reverted","error"),a(),o)try{$a(o,"amount "+r,s).raise(null,t,{severity:"station",retry:function(){d(e,r,i)}})}catch(e){}}}function f(e){e&&(B("tx:amt:"+e),a())}return{wireDot:u,signDot:c,commitAmount:d,clearAmount:f}}function Sa(e){return e&&e.message?e.message:"server error"}"function"==typeof c&&c(),"function"==typeof fe&&fe()}();
