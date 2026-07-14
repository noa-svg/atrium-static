!function(){"use strict";!function(e){function t(t){var n=new Function("module","exports","define","return (function () {\n"+t+"\n}).call(this);");n.call(e,void 0,void 0,void 0)}t('!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,t,u,i,o,e,r,f,c,s,h,a,p=65536,v=1<<17,d={},y=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function g(n,l){for(var t in l)n[t]=l[t];return n}function b(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,t,u){var i,o,e,r={};for(e in t)"key"==e?i=t[e]:"ref"==e?o=t[e]:r[e]=t[e];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):u),"function"==typeof n&&null!=n.defaultProps)for(e in n.defaultProps)void 0===r[e]&&(r[e]=n.defaultProps[e]);return k(n,r,i,o,null)}function k(n,l,i,o,e){var r={type:n,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==e?++u:e,__i:-1,__u:0};return null==e&&null!=t.vnode&&t.vnode(r),r}function x(n){return n.children}function S(n,l){this.props=n,this.context=l}function C(n,l){if(null==l)return n.__?C(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return"function"==typeof n.type?C(n):null}function M(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return M(n)}}function P(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!T.__r++||e!==t.debounceRendering)&&((e=t.debounceRendering)||r)(T)}function T(){var n,l,u,i,e,r,c,s;for(o.sort(f);n=o.shift();)n.__d&&(l=o.length,i=void 0,r=(e=(u=n).__v).__e,c=[],s=[],u.__P&&((i=g({},e)).__v=e.__v+1,t.vnode&&t.vnode(i),O(u.__P,i,e,u.__n,u.__P.namespaceURI,32&e.__u?[r]:null,c,null==r?C(e):r,!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,z(c,i,s),i.__e!=r&&M(i)),o.length>l&&o.sort(f));T.__r=0}function $(n,l,t,u,i,o,e,r,f,c,s){var h,a,v,w,_,g=u&&u.__k||y,b=l.length;for(t.__d=f,I(t,l,g),f=t.__d,h=0;h<b;h++)null!=(v=t.__k[h])&&(a=-1===v.__i?d:g[v.__i]||d,v.__i=h,O(n,v,a,i,o,e,r,f,c,s),w=v.__e,v.ref&&a.ref!=v.ref&&(a.ref&&V(a.ref,null,v),s.push(v.ref,v.__c||w,v)),null==_&&null!=w&&(_=w),v.__u&p||a.__k===v.__k?f=H(v,f,n):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:w&&(f=w.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=f,t.__e=_}function I(n,l,t){var u,i,o,e,r,f=l.length,c=t.length,s=c,h=0;for(n.__k=[],u=0;u<f;u++)null!=(i=l[u])&&"boolean"!=typeof i&&"function"!=typeof i?(e=u+h,(i=n.__k[u]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?k(null,i,null,null,null):_(i)?k(x,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?k(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(r=i.__i=L(i,t,e,s))&&(s--,(o=t[r])&&(o.__u|=v)),null==o||null===o.__v?(-1==r&&h--,"function"!=typeof i.type&&(i.__u|=p)):r!==e&&(r==e-1?h--:r==e+1?h++:(r>e?h--:h++,i.__u|=p))):i=n.__k[u]=null;if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(o.__u&v)&&(o.__e==n.__d&&(n.__d=C(o)),q(o,o))}function H(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=H(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=C(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function L(n,l,t,u){var i=n.key,o=n.type,e=t-1,r=t+1,f=l[t];if(null===f||f&&i==f.key&&o===f.type&&0==(f.__u&v))return t;if(u>(null!=f&&0==(f.__u&v)?1:0))for(;e>=0||r<l.length;){if(e>=0){if((f=l[e])&&0==(f.__u&v)&&i==f.key&&o===f.type)return e;e--}if(r<l.length){if((f=l[r])&&0==(f.__u&v)&&i==f.key&&o===f.type)return r;r++}}return-1}function j(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||w.test(l)?t:t+"px"}function A(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||j(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||j(n.style,l,t[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=c,n.addEventListener(l,o?h:s,o)):n.removeEventListener(l,o?h:s,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t))}}function F(n){return function(l){if(this.l){var u=this.l[l.type+n];if(null==l.u)l.u=c++;else if(l.u<u.t)return;return u(t.event?t.event(l):l)}}}function O(n,l,u,i,o,e,r,f,c,s){var h,a,p,v,d,y,w,b,m,k,C,M,P,T,I,H,L=l.type;if(void 0!==l.constructor)return null;128&u.__u&&(c=!!(32&u.__u),e=[f=l.__e=u.__e]),(h=t.__b)&&h(l);n:if("function"==typeof L)try{if(b=l.props,m="prototype"in L&&L.prototype.render,k=(h=L.contextType)&&i[h.__c],C=h?k?k.props.value:h.__:i,u.__c?w=(a=l.__c=u.__c).__=a.__E:(m?l.__c=a=new L(b,C):(l.__c=a=new S(b,C),a.constructor=L,a.render=B),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),m&&null==a.__s&&(a.__s=a.state),m&&null!=L.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=g({},a.__s)),g(a.__s,L.getDerivedStateFromProps(b,a.__s))),v=a.props,d=a.state,a.__v=l,p)m&&null==L.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),m&&null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(m&&null==L.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||l.__v===u.__v)){for(l.__v!==u.__v&&(a.props=b,a.state=a.__s,a.__d=!1),l.__e=u.__e,l.__k=u.__k,l.__k.some(function(n){n&&(n.__=l)}),M=0;M<a._sb.length;M++)a.__h.push(a._sb[M]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),m&&null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,d,y)})}if(a.context=C,a.props=b,a.__P=n,a.__e=!1,P=t.__r,T=0,m){for(a.state=a.__s,a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),I=0;I<a._sb.length;I++)a.__h.push(a._sb[I]);a._sb=[]}else do{a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++T<25);a.state=a.__s,null!=a.getChildContext&&(i=g(g({},i),a.getChildContext())),m&&!p&&null!=a.getSnapshotBeforeUpdate&&(y=a.getSnapshotBeforeUpdate(v,d)),$(n,_(H=null!=h&&h.type===x&&null==h.key?h.props.children:h)?H:[H],l,u,i,o,e,r,f,c,s),a.base=l.__e,l.__u&=-161,a.__h.length&&r.push(a),w&&(a.__E=a.__=null)}catch(n){if(l.__v=null,c||null!=e){for(l.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;e[e.indexOf(f)]=null,l.__e=f}else l.__e=u.__e,l.__k=u.__k;t.__e(n,l,u)}else null==e&&l.__v===u.__v?(l.__k=u.__k,l.__e=u.__e):l.__e=N(u.__e,l,u,i,o,e,r,c,s);(h=t.diffed)&&h(l)}function z(n,l,u){l.__d=void 0;for(var i=0;i<u.length;i++)V(u[i],u[++i],u[++i]);t.__c&&t.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){t.__e(n,l.__v)}})}function N(n,u,i,o,e,r,f,c,s){var h,a,p,v,y,w,g,m=i.props,k=u.props,x=u.type;if("svg"===x?e="http://www.w3.org/2000/svg":"math"===x?e="http://www.w3.org/1998/Math/MathML":e||(e="http://www.w3.org/1999/xhtml"),null!=r)for(h=0;h<r.length;h++)if((y=r[h])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[h]=null;break}if(null==n){if(null===x)return document.createTextNode(k);n=document.createElementNS(e,x,k.is&&k),c&&(t.__m&&t.__m(u,r),c=!1),r=null}if(null===x)m===k||c&&n.data===k||(n.data=k);else{if(r=r&&l.call(n.childNodes),m=i.props||d,!c&&null!=r)for(m={},h=0;h<n.attributes.length;h++)m[(y=n.attributes[h]).name]=y.value;for(h in m)if(y=m[h],"children"==h);else if("dangerouslySetInnerHTML"==h)p=y;else if(!(h in k)){if("value"==h&&"defaultValue"in k||"checked"==h&&"defaultChecked"in k)continue;A(n,h,null,y,e)}for(h in k)y=k[h],"children"==h?v=y:"dangerouslySetInnerHTML"==h?a=y:"value"==h?w=y:"checked"==h?g=y:c&&"function"!=typeof y||m[h]===y||A(n,h,y,m[h],e);if(a)c||p&&(a.__html===p.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),u.__k=[];else if(p&&(n.innerHTML=""),$(n,_(v)?v:[v],u,i,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":e,r,f,r?r[0]:i.__k&&C(i,0),c,s),null!=r)for(h=r.length;h--;)b(r[h]);c||(h="value","progress"===x&&null==w?n.removeAttribute("value"):void 0!==w&&(w!==n[h]||"progress"===x&&!w||"option"===x&&w!==m[h])&&A(n,h,w,m[h],e),h="checked",void 0!==g&&g!==n[h]&&A(n,h,g,m[h],e))}return n}function V(n,l,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==l||(n.__u=n(l))}else n.current=l}catch(n){t.__e(n,u)}}function q(n,l,u){var i,o;if(t.unmount&&t.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.__e(n,l)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],l,u||"function"!=typeof n.type);u||b(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function B(n,l,t){return this.constructor(n,t)}function D(n,u,i){var o,e,r,f;t.__&&t.__(n,u),e=(o="function"==typeof i)?null:i&&i.__k||u.__k,r=[],f=[],O(u,n=(!o&&i||u).__k=m(x,null,[n]),e||d,d,u.namespaceURI,!o&&i?[i]:e?null:u.firstChild?l.call(u.childNodes):null,r,!o&&i?i:e?e.__e:u.firstChild,o,f),z(r,n,f)}l=y.slice,t={__e:function(n,l,t,u){for(var i,o,e;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),e=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),e=i.__d),e)return i.__E=i}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&null==n.constructor},S.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof n&&(n=n(g({},t),this.props)),n&&g(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this))},S.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},S.prototype.render=x,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},T.__r=0,c=0,s=F(!1),h=F(!0),a=0,n.Component=S,n.Fragment=x,n.cloneElement=function(n,t,u){var i,o,e,r,f=g({},n.props);for(e in n.type&&n.type.defaultProps&&(r=n.type.defaultProps),t)"key"==e?i=t[e]:"ref"==e?o=t[e]:f[e]=void 0===t[e]&&void 0!==r?r[e]:t[e];return arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):u),k(n.type,f,i||n.key,o||n.ref,null)},n.createContext=function(n,l){var t={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=new Set,(u={})[l]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.forEach(function(n){n.__e=!0,P(n)})},this.sub=function(n){t.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t&&t.delete(n),l&&l.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t},n.createElement=m,n.createRef=function(){return{current:null}},n.h=m,n.hydrate=function n(l,t){D(l,t,n)},n.isValidElement=i,n.options=t,n.render=D,n.toChildArray=function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(_(l)?l.some(function(l){n(l,t)}):t.push(l)),t}});\n//# sourceMappingURL=preact.umd.js.map'),t('!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=t.options,a=e.__b,v=e.__r,l=e.diffed,d=e.__c,s=e.unmount,p=e.__;function h(n,t){e.__h&&e.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y(n){return f=1,m(j,n)}function m(n,t,i){var o=h(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):j(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=!1;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,u))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=h(u++,4);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function _(n,t){var r=h(u++,7);return g(r.__H,t)&&(r.__=n(),r.__H=t,r.__h=n),r.__}function b(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p&&p(n,t)},e.__r=function(n){v&&v(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(A),t.__h.forEach(F),t.__h=[],u=0)),i=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===e.requestAnimationFrame||((o=e.requestAnimationFrame)||x)(b)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),i=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(u,n.__v)}}),d&&d(n,t)},e.unmount=function(n){s&&s(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),u.__H=void 0,t&&e.__e(t,u.__v))};var q="function"==typeof requestAnimationFrame;function x(n){var t,u=function(){clearTimeout(r),q&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);q&&(t=requestAnimationFrame(u))}function A(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function F(n){var t=r;n.__c=n.__(),r=t}function g(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function j(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,_(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=h(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=h(u++,3);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=h(u++,10),i=y();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=h(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=_,n.useReducer=m,n.useRef=function(n){return f=5,_(function(){return{current:n}},[])},n.useState=y});\n//# sourceMappingURL=hooks.umd.js.map'),t('!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((i||self).preactSignalsCore={})}(this,function(i){var t=Symbol.for("preact-signals");function o(){if(!(f>1)){var i,t=!1;while(void 0!==n){var o=n;n=void 0;h++;while(void 0!==o){var r=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&u(o))try{o.c()}catch(o){if(!t){i=o;t=!0}}o=r}}h=0;f--;if(t)throw i}else f--}var r=void 0,n=void 0,f=0,h=0,s=0;function e(i){if(void 0!==r){var t=i.n;if(void 0===t||t.t!==r){t={i:0,S:i,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:t};if(void 0!==r.s)r.s.n=t;r.s=t;i.n=t;if(32&r.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=r.s;t.n=void 0;r.s.n=t;r.s=t}return t}}}function v(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0}v.prototype.brand=t;v.prototype.h=function(){return!0};v.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i}};v.prototype.U=function(i){if(void 0!==this.t){var t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0}if(void 0!==o){o.e=t;i.x=void 0}if(i===this.t)this.t=o}};v.prototype.subscribe=function(i){var t=this;return b(function(){var o=t.value,n=r;r=void 0;try{i(o)}finally{r=n}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){var i=r;r=void 0;try{return this.value}finally{r=i}};Object.defineProperty(v.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(h>100)throw new Error("Cycle detected");this.v=i;this.i++;s++;f++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{o()}}}});function u(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function d(i){for(var t=i.s;void 0!==t;t=t.n){var o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function c(i){var t=i.s,o=void 0;while(void 0!==t){var r=t.p;if(-1===t.i){t.S.U(t);if(void 0!==r)r.n=t.n;if(void 0!==t.n)t.n.p=r}else o=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=r}i.s=o}function a(i){v.call(this,void 0);this.x=i;this.s=void 0;this.g=s-1;this.f=4}(a.prototype=new v).h=function(){this.f&=-3;if(1&this.f)return!1;if(32==(36&this.f))return!0;this.f&=-5;if(this.g===s)return!0;this.g=s;this.f|=1;if(this.i>0&&!u(this)){this.f&=-2;return!0}var i=r;try{d(this);r=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++}}catch(i){this.v=i;this.f|=16;this.i++}r=i;c(this);this.f&=-2;return!0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}v.prototype.S.call(this,i)};a.prototype.U=function(i){if(void 0!==this.t){v.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N()}};Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function l(i){var t=i.u;i.u=void 0;if("function"==typeof t){f++;var n=r;r=void 0;try{t()}catch(t){i.f&=-2;i.f|=8;y(i);throw t}finally{r=n;o()}}}function y(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;l(i)}function w(i){if(r!==this)throw new Error("Out-of-order effect");c(this);r=i;this.f&=-2;if(8&this.f)y(this);o()}function p(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t}finally{i()}};p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;l(this);d(this);f++;var i=r;r=this;return w.bind(this,i)};p.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=n;n=this}};p.prototype.d=function(){this.f|=8;if(!(1&this.f))y(this)};function b(i){var t=new p(i);try{t.c()}catch(i){t.d();throw i}return t.d.bind(t)}i.Signal=v;i.batch=function(i){if(f>0)return i();f++;try{return i()}finally{o()}};i.computed=function(i){return new a(i)};i.effect=b;i.signal=function(i){return new v(i)};i.untracked=function(i){var t=r;r=void 0;try{return i()}finally{r=t}}});//# sourceMappingURL=signals-core.min.js.map'),t('!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("preact"),require("preact/hooks"),require("@preact/signals-core")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks","@preact/signals-core"],i):i((n||self).preactSignals={},n.preact,n.preactHooks,n.preactSignalsCore)}(this,function(n,i,r,t){var e,f;function o(n,r){i.options[n]=r.bind(null,i.options[n]||function(){})}function u(n){if(f)f();f=n&&n.S()}function a(n){var e=this,f=n.data,o=useSignal(f);o.value=f;var u=r.useMemo(function(){var n=e.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}e.__$u.c=function(){var n;if(!i.isValidElement(u.peek())&&3===(null==(n=e.base)?void 0:n.nodeType))e.base.data=u.peek();else{e.__$f|=1;e.setState({})}};return t.computed(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return u.value}a.displayName="_st";Object.defineProperties(t.Signal.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:a},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});o("__b",function(n,i){if("string"==typeof i.type){var r,e=i.props;for(var f in e)if("children"!==f){var o=e[f];if(o instanceof t.Signal){if(!r)i.__np=r={};r[f]=o;e[f]=o.peek()}}}n(i)});o("__r",function(n,i){u();var r,f=i.__c;if(f){f.__$f&=-2;if(void 0===(r=f.__$u))f.__$u=r=function(n){var i;t.effect(function(){i=this});i.c=function(){f.__$f|=1;f.setState({})};return i}()}e=f;u(r);n(i)});o("__e",function(n,i,r,t){u();e=void 0;n(i,r,t)});o("diffed",function(n,i){u();e=void 0;var r;if("string"==typeof i.type&&(r=i.__e)){var t=i.__np,f=i.props;if(t){var o=r.U;if(o)for(var a in o){var v=o[a];if(void 0!==v&&!(a in t)){v.d();o[a]=void 0}}else r.U=o={};for(var s in t){var l=o[s],d=t[s];if(void 0===l){l=c(r,s,d,f);o[s]=l}else l.o(d,f)}}}n(i)});function c(n,i,r,e){var f=i in n&&void 0===n.ownerSVGElement,o=t.signal(r);return{o:function(n,i){o.value=n;e=i},d:t.effect(function(){var r=o.value.value;if(e[i]!==r){e[i]=r;if(f)n[i]=r;else if(r)n.setAttribute(i,r);else n.removeAttribute(i)}})}}o("unmount",function(n,i){if("string"==typeof i.type){var r=i.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var e in t){var f=t[e];if(f)f.d()}}}}else{var o=i.__c;if(o){var u=o.__$u;if(u){o.__$u=void 0;u.d()}}}n(i)});o("__h",function(n,i,r,t){if(t<3||9===t)i.__$f|=2;n(i,r,t)});i.Component.prototype.shouldComponentUpdate=function(n,i){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var t in i)return!0;for(var e in n)if("__source"!==e&&n[e]!==this.props[e])return!0;for(var f in this.props)if(!(f in n))return!0;return!1};function useSignal(n){return r.useMemo(function(){return t.signal(n)},[])}n.Signal=t.Signal;n.batch=t.batch;n.computed=t.computed;n.effect=t.effect;n.signal=t.signal;n.untracked=t.untracked;n.useComputed=function(n){var i=r.useRef(n);i.current=n;e.__$f|=4;return r.useMemo(function(){return t.computed(function(){return i.current()})},[])};n.useSignal=useSignal;n.useSignalEffect=function(n){var i=r.useRef(n);i.current=n;r.useEffect(function(){return t.effect(function(){return i.current()})},[])}});//# sourceMappingURL=signals.min.js.map'),t('!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.htm=e()}(this,function(){var n=function(e,t,u,s){var r;t[0]=0;for(var p=1;p<t.length;p++){var h=t[p++],o=t[p]?(t[0]|=h?1:2,u[t[p++]]):t[++p];3===h?s[0]=o:4===h?s[1]=Object.assign(s[1]||{},o):5===h?(s[1]=s[1]||{})[t[++p]]=o:6===h?s[1][t[++p]]+=o+"":h?(r=e.apply(o,n(e,o,u,["",null])),s.push(r),o[0]?t[0]|=2:(t[p-2]=0,t[p]=r)):s.push(o)}return s},e=new Map;return function(t){var u=e.get(this);return u||(u=new Map,e.set(this,u)),(u=n(this,u.get(t)||(u.set(t,u=function(n){for(var e,t,u=1,s="",r="",p=[0],h=function(n){1===u&&(n||(s=s.replace(/^\\s*\\n\\s*|\\s*\\n\\s*$/g,"")))?p.push(0,n,s):3===u&&(n||s)?(p.push(3,n,s),u=2):2===u&&"..."===s&&n?p.push(4,n,0):2===u&&s&&!n?p.push(5,0,!0,s):u>=5&&((s||!n&&5===u)&&(p.push(u,0,s,t),u=6),n&&(p.push(u,n,0,t),u=6)),s=""},o=0;o<n.length;o++){o&&(1===u&&h(),h(o));for(var f=0;f<n[o].length;f++)e=n[o][f],1===u?"<"===e?(h(),p=[p],u=3):s+=e:4===u?"--"===s&&">"===e?(u=1,s=""):s=e+s[0]:r?e===r?r="":s+=e:\'"\'===e||"\'"===e?r=e:">"===e?(h(),u=1):u&&("="===e?(u=5,t=s,s=""):"/"===e&&(u<5||">"===n[o][f+1])?(h(),3===u&&(p=p[0]),u=p,(p=p[0]).push(2,0,u),u=0):" "===e||"\\t"===e||"\\n"===e||"\\r"===e?(h(),u=2):s+=e),3===u&&"!--"===s&&(u=4,p=p[0])}return h(),p}(t)),u),arguments,[])).length>1?u:u[0]}});')}("undefined"!=typeof window?window:this);var e=window.htm,{Component:t,h:n,render:r}=window.preact,{useCallback:a,useEffect:i,useMemo:o,useRef:l,useState:s}=window.preactHooks,{signal:u}=window.preactSignals;function c(){if(!("undefined"==typeof window||"undefined"==typeof document||window.AtriumReliability&&window.AtriumReliability.failBus)){var e;try{e=O({})}catch(e){try{console.error("[atriumX] reliability init failed",e)}catch(e){}return}window.AtriumReliability=e;var t=e.failBus;try{if(void 0!==In&&In&&In.length&&"function"==typeof t.setKnownStations){for(var n=[],r=0;r<In.length;r++)In[r]&&In[r].id&&n.push(In[r].id);t.setKnownStations(n)}}catch(e){}t.on("station",function(){try{"object"==typeof re&&re&&re.failNonce&&(re.failNonce.value=re.failNonce.value+1)}catch(e){}}),t.on("toast",function(e){try{var t=(e&&e.source?e.source+" · ":"")+(e&&e.message||"failed");if("function"==typeof Be)return void Be(t,"error");try{console.error("[atriumX:failBus]",e&&e.source,e&&e.message)}catch(e){}}catch(e){}}),t.on("banner",function(e){try{var t=document.getElementById("atrium-fail-banner");t||(t=document.createElement("div"),t.id="atrium-fail-banner",t.className="fail-banner",t.setAttribute("role","alert"),document.body.insertBefore(t,document.body.firstChild)),t.textContent=(e&&e.message||"a portal-wide failure occurred")+" · reload to retry",t.hidden=!1}catch(e){}})}}var d=3e5,f=216e5,p="atrium2:";function h(e){return 0===e.indexOf("tx:stop:")?f:d}function v(e){if(e)return e;try{if("undefined"!=typeof window&&window.localStorage)return window.localStorage}catch(e){}try{if("undefined"!=typeof localStorage)return localStorage}catch(e){}return null}function m(e,t){var n=v(e),r=t||function(){return Date.now()};function a(e){try{if(!n)return null;var t=n.getItem(p+e);if(!t)return null;var a=JSON.parse(t),i=h(e);if(!a||r()-(a.ts||0)>i){try{n.removeItem(p+e)}catch(e){}return null}return a.data}catch(e){return null}}function i(e,t){try{if(!n)return null;var a=n.getItem(p+e);if(!a)return null;var i=JSON.parse(a),o=null!=t?t:h(e);if(!i||r()-(i.ts||0)>o){try{n.removeItem(p+e)}catch(e){}return null}return i}catch(e){return null}}function o(){var e=[];try{for(var t=0;t<n.length;t++){var r=n.key(t);r&&0===r.indexOf(p)&&e.push(r)}}catch(e){}return e}function l(e){var t=r(),a=o().map(function(e){var r=0;try{var a=JSON.parse(n.getItem(e));r=a&&a.ts||0}catch(e){}var i=0===e.indexOf(p)?e.slice(p.length):e,o=h(i),l=t-r>o,s=0===i.indexOf("tx:stop:")&&!l;return{k:e,ts:r,expired:l,isLiveOverride:s}});a.sort(function(e,t){return e.isLiveOverride!==t.isLiveOverride?e.isLiveOverride?1:-1:e.expired!==t.expired?e.expired?-1:1:e.ts-t.ts});for(var i=0,l=0;l<a.length&&i<e&&!a[l].isLiveOverride;l++)try{n.removeItem(a[l].k),i++}catch(e){}}function s(e,t){if(n){var a=JSON.stringify({ts:r(),data:t});try{n.setItem(p+e,a)}catch(t){try{l(Math.max(1,Math.ceil(.2*o().length))),n.setItem(p+e,a)}catch(t){try{"undefined"!=typeof console&&console.warn("[atriumX] cache full; write dropped for "+e)}catch(e){}}}}}function u(e){try{n&&n.removeItem(p+e)}catch(e){}}return{get:a,getWithMeta:i,set:s,del:u,_store:n}}function g(){var e={};return{getItem:function(t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null},setItem:function(t,n){e[t]=String(n)},removeItem:function(t){delete e[t]},clear:function(){e={}},key:function(t){return Object.keys(e)[t]||null},get length(){return Object.keys(e).length}}}var _={makeCache:m,memoryStore:g,CACHE_TTL_MS:d,OVERRIDE_TTL_MS:f,_ttlForKey:h};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumCache=_);var y={toast:1,station:2,banner:3};function b(e){e=e||{};var t=e.ringMax||50,n=[],r={toast:[],station:[],banner:[]},a={},i=null;function o(e){if(null!=e){var t={};if("number"==typeof e.length)for(var n=0;n<e.length;n++)null!=e[n]&&(t[String(e[n])]=!0);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[String(r)]=!0);i=t}else i=null}function l(e){return!i||!0===i[String(e)]}function s(e){return y[e]?e:"toast"}function u(e){try{"undefined"!=typeof console&&console.error("[atriumX] failBus sink threw",e)}catch(e){}}function c(e,i,o){o=o||{};var c=s(o.severity),d={source:String(e||"unknown"),message:i&&i.message||String(null==i?"error":i),stack:i&&i.stack||"",severity:c,retry:"function"==typeof o.retry?o.retry:null,ts:Date.now()};if(n.push(d),n.length>t&&n.shift(),"station"===c)if(l(d.source))a[d.source]=d;else{d.orphaned=!0;try{"undefined"!=typeof console&&console.error('[atriumX] failBus.raise: unknown station id "'+d.source+'" (not in topology); the persistent glow would be orphaned. Dropped.')}catch(e){}}for(var f=r[c]||[],p=0;p<f.length;p++)try{f[p](d)}catch(e){u(e)}return d}function d(e){if(a[e]){delete a[e];for(var t=r.station||[],n=0;n<t.length;n++)try{t[n]({source:e,resolved:!0,ts:Date.now()})}catch(e){u(e)}return!0}return!1}function f(e,t){return r[e]||(r[e]=[]),r[e].push(t),function(){var n=r[e].indexOf(t);n>=0&&r[e].splice(n,1)}}function p(e){return a[e]||null}function h(e){var t=e||n.length;return n.slice(Math.max(0,n.length-t))}function v(){n.length=0,a={}}return{raise:c,resolve:d,on:f,stationHealth:p,recent:h,clear:v,setKnownStations:o,SEVERITIES:y}}_={makeFailBus:b,SEVERITIES:y};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumFailBus=_);var $={PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"},w={CONFIRMED:"CONFIRMED",PENDING_WRITE:"PENDING_WRITE",REVERTED:"REVERTED"},k={states:[$.PENDING,$.RUNNING,$.OK,$.ANOMALY,$.FAILED,$.STALE],initial:$.PENDING,transitions:{PENDING:{upload:$.RUNNING},RUNNING:{reconPass:$.OK,reconFail:$.ANOMALY,rpcFail:$.FAILED},OK:{monthBoundary:$.STALE,upload:$.RUNNING},ANOMALY:{upload:$.RUNNING},FAILED:{upload:$.RUNNING},STALE:{upload:$.RUNNING}}},x={states:[$.PENDING,$.RUNNING,$.OK,$.FAILED,$.STALE],initial:$.PENDING,transitions:{PENDING:{fanout:$.RUNNING},RUNNING:{ackOk:$.OK,ackFail:$.FAILED},OK:{newNavMonth:$.PENDING,fanout:$.RUNNING},FAILED:{fanout:$.RUNNING,newNavMonth:$.PENDING},STALE:{fanout:$.RUNNING,newNavMonth:$.PENDING}}},S={states:[w.PENDING_WRITE,w.CONFIRMED,w.REVERTED],initial:null,transitions:{null:{click:w.PENDING_WRITE},PENDING_WRITE:{ackOk:w.CONFIRMED,ackFail:w.REVERTED},CONFIRMED:{click:w.PENDING_WRITE},REVERTED:{click:w.PENDING_WRITE}}},A={states:[$.PENDING,$.OK,$.ANOMALY],initial:$.ANOMALY,transitions:{ANOMALY:{dismiss:$.OK,ack:$.PENDING},PENDING:{dismiss:$.OK,flag:$.ANOMALY},OK:{redetect:$.ANOMALY}}},C={navMonth:k,consumer:x,transferWrite:S,silentSignal:A},N={OK:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function D(e,t){var n=null==N[e]?-1:N[e],r=null==N[t]?-1:N[t];return r>n?t:e}function E(e,t){var n=C[e];if(!n)throw new Error("unknown entity type: "+e);var r=n.initial,a=[];function i(e){return null==e?"null":e}function o(e){var t=n.transitions[i(r)]||{},o=t[e];return void 0===o?(a.push({from:r,trigger:e}),r):(r=o,r)}function l(e){var t=n.transitions[i(r)]||{};return void 0!==t[e]}return{type:e,id:t,get state(){return r},set:function(e){return r=e,r},send:o,can:l,rejects:a}}_={HEALTH:$,WRITE:w,ENTITY_TYPES:C,HEALTH_RANK:N,worse:D,makeEntity:E};function P(){return"undefined"!=typeof module&&module.exports?{cache:require("./cache.js"),failBus:require("./failBus.js"),health:require("./health.js"),ow:require("./optimisticWrite.js")}:{cache:window.AtriumCache,failBus:window.AtriumFailBus,health:window.AtriumHealth,ow:window.AtriumOptimisticWrite}}function O(e){e=e||{};var t=P(),n=t.cache.makeCache(e.store,e.now),r=t.failBus.makeFailBus(e.failBusOpts);return{cache:n,failBus:r,health:t.health,optimisticWrite:t.ow.optimisticWrite}}if("undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumHealth=_),"undefined"!=typeof module&&module.exports){var T=P();module.exports={createReliability:O,cache:T.cache,failBus:T.failBus,health:T.health,optimisticWrite:T.ow.optimisticWrite}}function L(e){e=e||{};var t=e.entity||null,n=e.failBus||null,r=e.source||"write:"+(e.key||"unknown");t&&t.send("click");try{e.applyLocal&&e.applyLocal()}catch(e){}try{e.audit&&e.audit("applied")}catch(e){}var a=!1;function i(){if(!a){a=!0,t&&t.send("ackOk");try{e.audit&&e.audit("confirmed")}catch(e){}try{e.onConfirm&&e.onConfirm()}catch(e){}try{n&&n.resolve&&n.resolve(r)}catch(e){}}}function o(i){if(!a){a=!0,t&&t.send("ackFail");try{e.audit&&e.audit("reverted")}catch(e){}try{e.onRevert&&e.onRevert(i)}catch(e){}if(n)try{n.raise(r,i||new Error("write reverted"),{severity:"station",retry:e.retry||null})}catch(e){}}}try{e.rpc(function(e){e&&e.ok?i():o(new Error(e&&e.message||"server rejected write"))},function(e){o(e)})}catch(e){o(e)}return{confirm:i,revert:o,isSettled:function(){return a}}}_={optimisticWrite:L};function I(e,t){try{console.error("[atriumX:overrides] "+e,t)}catch(e){}try{"function"==typeof Fe&&Fe("overrides:"+e,t)}catch(e){}}"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumOptimisticWrite=_);d=3e5,f=216e5;function h(e){return 0===e.indexOf("tx:stop:")?f:d}function R(e){try{var t=localStorage.getItem("atrium2:"+e);if(!t)return null;var n=JSON.parse(t),r=h(e);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+e)}catch(e){}return null}return n.data}catch(e){return null}}function M(e){try{var t=localStorage.getItem("atrium2:"+e);if(!t)return null;var n=JSON.parse(t),r=h(e);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+e)}catch(e){}return null}return n}catch(e){return null}}function F(e,t){try{localStorage.setItem("atrium2:"+e,JSON.stringify({ts:Date.now(),data:t}))}catch(e){}}function j(e){try{localStorage.removeItem("atrium2:"+e)}catch(e){}}var K=["atrium2:tx:stop:","atrium2:tx:sig:","atrium2:tx:amt:","atrium2:tx:flag:"];function U(e){for(var t=0;t<K.length;t++)if(0===e.indexOf(K[t]))return K[t];return null}function B(){try{for(var e=Date.now(),t=[],n=0;n<localStorage.length;n++){var r=localStorage.key(n);if(r&&U(r)){var a=h(r.slice(8));try{var i=JSON.parse(localStorage.getItem(r));(!i||e-(i.ts||0)>a)&&t.push(r)}catch(e){t.push(r)}}}t.forEach(function(e){try{localStorage.removeItem(e)}catch(e){}}),t.length&&console.log("[atriumX] cleared "+t.length+" stale override(s)")}catch(e){}}function H(e){var t=R("tx:stop:"+e);return null==t?null:parseInt(t,10)}function G(e,t){F("tx:stop:"+e,t)}function V(e){j("tx:stop:"+e)}function W(e,t){F("tx:sig:"+e,String(t))}function Y(e){j("tx:sig:"+e)}function q(e){return"1"===R("tx:flag:"+e)}function J(e){q(e)?j("tx:flag:"+e):F("tx:flag:"+e,"1")}var z=["✓","wir","paid","transf","שולם","moved to trading","paid to client"];function X(e){for(var t=String(e||""),n=0;n<z.length;n++)if(t.indexOf(z[n])>=0)return!0;return t.indexOf("הועבר")>=0&&-1===t.indexOf("טרם")}var Q=["הושלם","sign","complet","done","נחתם","חתום"];function Z(e){for(var t=String(e||""),n=0;n<Q.length;n++)if(t.indexOf(Q[n])>=0)return!0;return!1}function ee(e){try{if(!e||!e.transfers||!Array.isArray(e.transfers.rows))return 0;var t=0;return e.transfers.rows.forEach(function(e){var n=e&&e.rowKey;if(n){var r=X(String(e.execStatus||"").toLowerCase()),a=Z(String(e.sigStatus||e.status||"").toLowerCase()),i=/\d/.test(String(e.amountText||"").trim()),o=H(n);null!=o&&r&&(V(n),t++);var l=R("tx:sig:"+n);"1"!==l&&"0"!==l||!a||(Y(n),t++),i&&null!=R("tx:amt:"+n)&&(j("tx:amt:"+n),t++)}}),t&&console.log("[atriumX] reconciled "+t+" override(s) against fresh boot"),t}catch(e){return I("reconcileOverridesWithBoot_",e),0}}function te(e,t){var n=Z(String(e&&e.sigStatus||"").toLowerCase()),r=X(String(e&&e.execStatus||"").toLowerCase()),a=n;if(t){var i=R("tx:sig:"+t);"1"===i?a=!0:"0"===i&&(a=!1)}var o=r,l=t?H(t):null;return 3===l?o=!0:1!==l&&2!==l||(o=!1),{sent:!0,signed:a,wired:o,overridden:null!=l}}var ne="object"==typeof BOOT&&BOOT||null,re={transfers:u(ne&&ne.transfers||null),navWidget:u(ne&&ne.navWidget||null),playbook:u(ne&&ne.playbook||null),suggestions:u(ne&&ne.transferSuggestions||null),portfolio:u(ne&&ne.portfolio||null),closePack:u(null),schedule:u(null),fanOut:u(null),silentSignals:u([]),navRecon:u(null),health:u({}),failNonce:u(0),staleData:u(ne&&ne._stale?{lastKnownAt:ne._lastKnownAt||null}:null),view:u("home")};function ae(e){var t=e||"home";re.view.value!==t&&(re.view.value=t)}function ie(e,t){var n=re.health.value||{};if(n[e]!==t){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);r[e]=t,re.health.value=r}}function oe(e,t){try{ie(e,"error")}catch(e){}try{re.failNonce.value=re.failNonce.value+1}catch(e){}}re.recordHealthError=oe,"undefined"!=typeof window&&(window.atriumStore=re);var le=0;function se(){return++le}function ue(e,t){if(null!=t&&t<le){try{console.log("[atriumX] dropped superseded boot (gen "+t+" < "+le+")")}catch(e){}return!1}if(!e)return!1;"transfers"in e&&(re.transfers.value=e.transfers||null),"navWidget"in e&&(re.navWidget.value=e.navWidget||null),"playbook"in e&&(re.playbook.value=e.playbook||null),"transferSuggestions"in e&&(re.suggestions.value=e.transferSuggestions||null),"portfolio"in e&&(re.portfolio.value=e.portfolio||null),"closePack"in e&&(re.closePack.value=e.closePack||null),"schedule"in e&&(re.schedule.value=e.schedule||null),re.staleData.value=e._stale?{lastKnownAt:e._lastKnownAt||null}:null;try{ee(e)}catch(e){}return!0}function ce(e){e=e||{};var t=e.render,n=e.rpc,r=e.report||function(e,t){try{console.error("[atriumX:boot] "+e,t)}catch(e){}};try{B()}catch(e){r("boot:sweep",e)}try{ee(ne)}catch(e){r("boot:reconcile",e)}if("function"==typeof t)try{t()}catch(e){r("boot:render",e)}try{null!=re.portfolio.value&&ie("portfolio","live")}catch(e){r("portfolio:seed",e)}n&&setTimeout(function(){try{n.transferSuggestions().then(function(e){re.suggestions.value=e,ie("suggestions","live")}).catch(function(e){ie("suggestions","error"),r("suggestions",e)})}catch(e){r("suggestions:sync",e)}},2e3)}const de="lvp_atrium_boot_cache_v1";function fe(e){if(e&&"undefined"!=typeof localStorage)try{const t=Object.assign({},e,{_stale:!0,_lastKnownAt:(new Date).toISOString()});localStorage.setItem(de,JSON.stringify(t))}catch(e){}}function pe(e,t){e&&"function"==typeof e.bootstrap&&e.bootstrap({lite:!0}).then(function(e){e&&e.portfolio&&(re.portfolio.value=e.portfolio,ie("portfolio","live"))}).catch(function(e){ie("portfolio","error"),"function"==typeof t&&t("portfolio",e)})}const he="717035109771-18bc6sb4651ofk6ep82q1ka4vjum326v.apps.googleusercontent.com",ve="lvp_atrium_id_token",me="legacyvpartners.com",ge=6e4;function _e(e){try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(e){return null}}function ye(e){if(!e)return!1;const t=String(e.hd||""),n=String(e.email||"").toLowerCase(),r=t===me||n.endsWith("@"+me);return r&&(!0===e.email_verified||"true"===e.email_verified)}function be(){if("undefined"==typeof localStorage)return null;let e;try{e=localStorage.getItem(ve)}catch(e){return null}if(!e)return null;const t=_e(e);return t&&t.exp?1e3*Number(t.exp)<Date.now()+ge?null:e:null}function $e(){const e=be();if(!e)return null;const t=_e(e);return t?String(t.email||"").toLowerCase():null}let we=null,ke=null,xe=null;function Se(e){const t=_e(e.credential);if(ye(t)){try{localStorage.setItem(ve,e.credential)}catch(e){}if(ke){const t=ke;ke=null,t(e.credential)}}else"function"==typeof xe&&xe()}function Ae(e,t){const n=be();return n?Promise.resolve(n):(xe=t||null,we||(we=new Promise(t=>{function n(){if(!("undefined"!=typeof window&&window.google&&window.google.accounts&&window.google.accounts.id))return void setTimeout(n,100);window.google.accounts.id.initialize({client_id:he,callback:Se,hd:me});const t="undefined"!=typeof document?document.getElementById(e):null;t&&window.google.accounts.id.renderButton(t,{theme:"outline",shape:"rectangular",size:"large",text:"signin_with"});try{window.google.accounts.id.prompt()}catch(e){}}ke=t,n()}),we))}function Ce(e,t,n){function r(){try{var r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r),t(!0)}catch(e){Fe(n||"copy:fallback",e),t(!1)}}t=t||function(){},"undefined"!=typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(function(){t(!0)},r):r()}function Ne(e){return(e>=0?"+":"")+(100*e).toFixed(2)+"%"}const De="https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxIzQKx6SbDzJj0ezjZUkZVKuBB5Go4amrMyZWvWTIZaI3n92dT-cBjUWX9nIQKPTGf/exec";function Ee(){return"undefined"!=typeof google&&!!google.script&&!!google.script.run}const Pe=9e4;Error;class Oe extends Error{constructor(e,t){super("RPC "+e+" did not return within "+t+"ms"),this.name="RpcTimeoutError",this.fnName=e,this.timeoutMs=t,this.rpcTimeout=!0}}class Te extends Error{constructor(e){super("no idToken available for "+e),this.name="RpcUnauthenticatedError",this.fnName=e,this.rpcUnauthenticated=!0}}class Le extends Error{constructor(e,t){super("RPC "+e+" rejected: "+t),this.name="RpcUnauthorizedError",this.fnName=e,this.reason=t,this.rpcUnauthorized=!0}}function Ie(e,t){return new Promise((n,r)=>{let a=!1;const i=setTimeout(()=>{a||(a=!0,r(new Oe(e,Pe)))},Pe);google.script.run.withSuccessHandler(e=>{a||(a=!0,clearTimeout(i),n(e))}).withFailureHandler(e=>{a||(a=!0,clearTimeout(i),r(e))})[e](...t)})}function Re(e,t,n){n=n||{};const r=be();if(!r&&!n.skipAuthGuard)return Promise.reject(new Te(e));const a="undefined"!=typeof AbortController?new AbortController:null,i=a?setTimeout(()=>a.abort(),Pe):null;return fetch(De,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({fn:e,args:t||[],idToken:r||""}),signal:a?a.signal:void 0}).then(e=>e.json()).then(t=>{if(i&&clearTimeout(i),!t||!0!==t.ok){const n=t&&(t.reason||t.error)||"unknown_error";if(t&&("unauthorized"===t.error||"unknown_fn"===t.error))throw new Le(e,n);throw new Error("RPC "+e+" failed: "+n+(t&&t.message?" / "+t.message:""))}return t.result}).catch(t=>{if(i&&clearTimeout(i),t&&"AbortError"===t.name)throw new Oe(e,Pe);throw t})}function Me(e,t,n){return Ee()?Ie(e,t||[]):Re(e,t||[],n)}function Fe(e,t){try{console.error("[atriumX] "+e,t)}catch(e){}try{const n="undefined"!=typeof window&&window.atriumStore||("undefined"!=typeof atriumStore?atriumStore:null);if(n)if("function"==typeof n.recordHealthError)n.recordHealthError(e,t);else if(n.health&&"object"==typeof n.health){const t=n.health.value&&"object"==typeof n.health.value?n.health.value:{},r={};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);r[e]="error",n.health.value=r}}catch(e){}try{Me("logErrorForPortal",["atriumX:"+e,t&&t.message||String(t),t&&t.stack||""],{skipAuthGuard:!0}).catch(()=>{})}catch(e){}return t}function je(e,...t){return Me(e,t).catch(t=>{throw Fe(e,t),t})}function Ke(e,t,n){return Me("logErrorForPortal",[e,t,n],{skipAuthGuard:!0}).catch(()=>!1)}const Ue={bootstrap:e=>je("getPortalBootstrap",e),appLinks:()=>je("getAppLinksForPortal"),transferSuggestions:()=>je("getTransferSuggestionsForPortal"),transferSuggestionLog:e=>je("getTransferSuggestionLogForPortal",e),applyTransferSuggestion:e=>je("applyTransferSuggestionForPortal",e),applyMultipleTransferSuggestions:e=>je("applyMultipleTransferSuggestionsForPortal",e),recordTransferSuggestionEvent:(e,t)=>je("recordTransferSuggestionEventForPortal",e,t),setTransferStatus:(e,t)=>je("setPortalTransferStatusForPortal",e,t),setTransferSigStatus:(e,t)=>je("setPortalTransferSigStatusForPortal",e,t),setTransferAmount:e=>je("setTransferAmountForPortal",e),rowsWithManualEvents:e=>je("getRowsWithManualEventsForPortal",e),monthlyTransferBreakdown:e=>je("getMonthlyTransferBreakdownForPortal",e),manualUpload:(e,t,n,r)=>je("manualUpload",e,t,n,r),fanOutStatus:(e,t)=>je("getFanOutStatusForPortal",e,t),triggerFanOut:(e,t)=>je("triggerFanOutForPortal",e,t),navReconciliation:(e,t)=>je("getNavReconciliationForPortal",e,t),approveNavClose:(e,t,n)=>je("approveNavCloseForPortal",e,t,n),playbookState:(e,t)=>je("getPlaybookStateForPortal",e,t),togglePlaybookStep:(e,t,n,r)=>je("togglePlaybookStepForPortal",e,t,n,r),lpSyncMoveToGroup:(e,t)=>je("lpSyncMoveToGroup",e,t),saveStoredRoughYield:(e,t)=>je("saveStoredRoughYield",e,t),portfolio:()=>je("getPortfolioForPortal"),quotes:e=>je("fetchQuotesForPortal",e),history:(e,t)=>je("fetchHistoryForPortal",e,t),fx:()=>je("fetchFxForPortal"),fundNavHistory:()=>je("fetchFundNavHistoryForPortal"),benchmarkHistory:(e,t)=>je("fetchBenchmarkHistoryForPortal",e,t),scheduleState:e=>je("getScheduleStateForPortal",e),completeTask:e=>je("completeTaskForPortal",e),removeTask:e=>je("removeTaskForPortal",e),updateTask:(e,t)=>je("updateTaskForPortal",e,t),onboardingSilentSignals:e=>je("getOnboardingSilentSignalsForPortal",e),dismissSilentSignal:e=>je("dismissSilentSignalForPortal",e),chatHistory:()=>je("getChatHistoryForPortal"),sendChatMessage:e=>je("sendChatMessageForPortal",e),resetChat:()=>je("resetChatForPortal"),logError:(e,t,n)=>Ke(e,t,n)};function Be(e,t){if("undefined"!=typeof document){var n=document.getElementById("toast");if(n){var r="error"===t;n.textContent=e;try{n.setAttribute("role",r?"alert":"status"),n.setAttribute("aria-live",r?"assertive":"polite")}catch(e){}n.className="toast is-show"+(r?" is-error":"success"===t?" is-success":""),clearTimeout(Be._t),Be._t=setTimeout(function(){n.className="toast"},r?8e3:3200)}else try{console.log("[toast] "+e)}catch(e){}}else try{console.log("[toast] "+e)}catch(e){}}var He=e.bind(n);function Ge(){var e=re.staleData.value;if(!e)return null;var t="";try{if(e.lastKnownAt){var n=new Date(e.lastKnownAt);isNaN(n.getTime())||(t=" from "+n.toLocaleString())}}catch(e){}return He`
      <div class="stale-banner" role="status" aria-live="polite">
        Showing last-known data${t}. Numbers may be behind until the next refresh.
      </div>
    `}function Ve(e){var t=l(null);return i(function(){try{t.current&&t.current.focus&&t.current.focus({preventScroll:!0})}catch(e){}},[e.view]),He`
      <div class=${"page page--focused"} data-view=${e.view}>
        <${Ge} />
        <${qe} label="masthead" fallback=${Je("masthead")}><${et} /><//>
        <${qe} label="statusStrip" fallback=${Je("status strip")}><${ot} /><//>
        <${qe} label="tabbar" fallback=${null}><${st} /><//>
        <nav class="focused-nav" aria-label="Focused view navigation">
          <button type="button" class="focused-nav__back" ref=${t}
                  onClick=${function(){ae("home")}}
                  aria-label="Back to the live map">← Map</button>
          <span class="focused-nav__crumb">${e.crumb}</span>
        </nav>
        <${qe} label=${"focused:"+e.view} fallback=${Je(e.crumb+" view")}>
          ${e.children}
        <//>
        <${qe} label="commandPalette" fallback=${null}><${Xn} /><//>
      </div>
    `}var We={transfers:{crumb:"Transfers",comp:ri},close:{crumb:"Close",comp:dt},projecting:{crumb:"Projecting",comp:Yr},portfolio:{crumb:"Portfolio",comp:mr},schedule:{crumb:"Schedule",comp:ua}},Ye=ce;function qe(){t.call(this),this.state={err:null}}function Je(e){return He`<div class="boundary-fallback" role="alert">${e} unavailable</div>`}function ze(e){var t="hdiv-sketch-"+e.seed;return He`
      <svg class="hdiv" viewBox="0 0 1200 14" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id=${t} x="-2%" y="-100%" width="104%" height="300%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.09" numOctaves="2" seed=${e.seed} result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
        <path d="M0,7 L1200,7" fill="none" stroke="#8A8268" stroke-width="1.5"
              stroke-linecap="round" filter=${"url(#"+t+")"}/>
      </svg>
    `}function Xe(){var e=re.view.value,t=We[e];return t?He`
        <${Ve} view=${e} crumb=${t.crumb}>
          <${t.comp} />
        <//>
      `:He`
      <div class="page" data-view="home">
        <${Ge} />
        <${qe} label="masthead" fallback=${Je("masthead")}><${et} /><//>
        <${qe} label="statusStrip" fallback=${Je("status strip")}><${ot} /><//>
        <${qe} label="tabbar" fallback=${null}><${st} /><//>
        <${qe} label="liveMap" fallback=${Je("live map")}><${tn} /><//>
        <${ze} seed="3" />
        <${qe} label="homeSchedule" fallback=${Je("schedule")}><${ua} /><//>
        <${ze} seed="8" />
        <${qe} label="portfolioPanel" fallback=${He`<section class="pfp" data-state="error" aria-label="Portfolio"><div class="pfp__msg" role="alert">portfolio panel unavailable</div></section>`}><${lr} /><//>
        <${ze} seed="13" />
        <${qe} label="companionStrip" fallback=${Je("companion strip")}><${Ot} /><//>
        <${qe} label="commandPalette" fallback=${null}><${Xn} /><//>
      </div>
    `}function Qe(){if("undefined"!=typeof document){var e=document.getElementById("atrium-root");e?r(He`<${Xe} />`,e):Fe("mount:no-root",new Error("#atrium-root missing"))}}qe.prototype=Object.create(t.prototype),qe.prototype.componentDidCatch=function(e){try{Fe("home:"+(this.props.label||"panel"),e)}catch(e){}this.setState({err:e||new Error("render error")})},qe.prototype.render=function(){return this.state&&this.state.err?null!=this.props.fallback?this.props.fallback:null:this.props.children},ce=function(){var e="undefined"!=typeof google&&!!google.script&&!!google.script.run;if(e)Ye({render:Qe,rpc:Ue,report:Fe});else if("undefined"!=typeof document){var t=document.getElementById("atrium-gate"),n=document.getElementById("atrium-root"),r=document.getElementById("atrium-gate-error");Ae("atrium-gate-signin",function(){r&&(r.style.display="block")}).then(function(){try{window.__initialMe=$e()||""}catch(e){}t&&(t.style.display="none"),n&&(n.style.display=""),Ye({render:Qe,rpc:Ue,report:Fe}),Ue&&"function"==typeof Ue.bootstrap&&Ue.bootstrap({lite:!0}).then(function(e){try{fe(e)}catch(e){}}).catch(function(e){try{Fe("bootCacheRefresh",e)}catch(e){}})})}else Ye({render:Qe,rpc:Ue,report:Fe})};He=e.bind(n);function Ze(e,t){try{if("undefined"!=typeof window&&null!=window[e]&&""!==window[e])return window[e]}catch(e){}return t}function et(){var e=Ze("__dateStr",""),t=Ze("__initialMe","noa@legacyvpartners.com"),n=Ze("__buildTag","dev");return He`
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
          ${e?He`<span>${e}</span>`:null}
          <span class="you">${t}</span>
          <span class="wm__build">build <b>${n}</b></span>
        </div>
      </header>
    `}var tt=Ne;He=e.bind(n);function nt(e){var t=s(0);i(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}var rt=String.fromCharCode(8212);function at(e){if(!e)return"";var t=new Date(e);if(isNaN(t.getTime()))return"";try{return t.toLocaleString()}catch(e){return t.toISOString()}}function it(e){var t=e.lbl,n=e.state||"live",r="status__val"+(e.tone?" status__val--"+e.tone:""),a=e.title?t+(null!=e.value?" "+e.value:"")+" · "+e.title:null;return"loading"===n?He`
        <div class="status__item" title=${e.title||null}
             role=${a?"group":null} aria-label=${a}>
          <span class="status__lbl">${t}</span>
          <span class="status__val is-loading" aria-busy="true">${rt}</span>
        </div>`:"error"===n?He`
        <div class="status__item">
          <span class="status__lbl">${t}</span>
          <span class="status__val status__val--err"
                role="button" tabindex="0" title=${e.title||"fetch failed, click to retry"}
                aria-label=${t+": "+(e.title||"fetch failed, click to retry")}
                onClick=${e.onRetry}>err / retry</span>
        </div>`:He`
      <div class="status__item" title=${e.title||null}
           role=${a?"group":null} aria-label=${a}>
        <span class="status__lbl">${t}</span>
        <span class=${r}>${e.value}</span>
      </div>`}function ot(){nt([re.navWidget,re.portfolio,re.health]);var e=re.navWidget.value,t=re.portfolio.value,n=re.health.value||{},r=e&&e.closed||{},a=e&&e.recon||null,i=n.portfolio||(t?"live":"loading"),o=t&&t.headline||null;function l(){return"error"===i?"error":o&&null!=o.ytd_pct?"live":"loading"}function s(){return"error"===i?"error":o&&null!=o.mtd_pct?"live":"loading"}function u(){try{pe(Ue,Fe)}catch(e){Fe("portfolio:retry",e)}}var c=o&&null!=o.ytd_pct?tt(o.ytd_pct):null,d=o&&null!=o.mtd_pct?tt(o.mtd_pct):null,f=o&&null!=o.ytd_pct?o.ytd_pct>=0?"up":"down":null,p=o&&null!=o.mtd_pct?o.mtd_pct>=0?"up":"down":null,h="live",v=rt,m=null,g="no snapshot reconciliation available";a&&(v=a.passed?"pass":"fail",a.deltaPctDisplay&&(v+=" ("+a.deltaPctDisplay+")"),m=a.passed?"up":"down",g=(a.monthLabel?a.monthLabel+" . ":"")+"NAV reconciliation "+(a.passed?"passed":"FAILED"));var _=null!=r.numeralDisplay?"live":"loading",y=null!=r.monthLabel||null!=r.label?"live":"loading",b=null;if(r.monthLabel){b="BDO NAV "+r.monthLabel;var $=at(r.uploadedAt);$&&(b+=" · uploaded "+$)}var w="latest closed NAV month",k=t&&(t.as_of_iso||t.as_of)||"",x="FIBI portfolio basis"+(k?" · as of "+k:"");return He`
      <div class="status">
        <${it} lbl="NAV"   state=${_}   value=${r.numeralDisplay} title=${b} />
        <${it} lbl="Month" state=${y} value=${r.monthLabel||r.label} title=${w} />
        <${it} lbl="YTD"   state=${l()} value=${c} tone=${f} onRetry=${u} title=${"live"===l()?x:null} />
        <${it} lbl="MTD"   state=${s()} value=${d} tone=${p} onRetry=${u} title=${"live"===s()?x:null} />
        <${it} lbl="Recon" state=${h} value=${v} tone=${m} title=${g} />
      </div>
    `}He=e.bind(n);var lt=[{id:"home",label:"Home"},{id:"portfolio",label:"Portfolio"},{id:"transfers",label:"Transfers"},{id:"projecting",label:"Projecting"},{id:"close",label:"Close"},{id:"schedule",label:"Schedule"}];function st(){var e=re.view.value;return He`
      <nav class="tabbar" aria-label="Sections">
        ${lt.map(function(t){var n=e===t.id;return He`
            <button
              key=${t.id}
              type="button"
              class=${"tabbar__tab"+(n?" is-active":"")}
              aria-current=${n?"page":null}
              onClick=${function(){ae(t.id)}}
            >${t.label}</button>
          `})}
      </nav>
    `}He=e.bind(n);var ut=Be;function ct(){return Ue.playbookState(null,{force:!0}).then(function(e){return e&&(re.playbook.value=e),e}).catch(function(e){return Fe("close:playbookReload",e),null})}function dt(){var e=re.playbook.value,t=re.navWidget.value,n=s({}),r=n[0],a=n[1];function i(e,t){a(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return t?r[e]=t:delete r[e],r})}function o(e){var t=re.playbook.value,n=t&&t.steps||[];return n[e]||null}function l(e){var t=o(e);if(t){var n=String(t.revShareCopy||"").trim();if(n){var r=t.revShareRows&&t.revShareRows.length||0;Ce(n,function(e){e?ut("Copied"+(r?" · "+r+" LPs":"")+" for Omri","success"):ut("Copy failed","error")},"close:copy:fallback")}else ut("Nothing to copy","error")}}function u(e){var t=o(e);if(t){var n=_t(t);if(n.length){if("undefined"==typeof window||!window.confirm||window.confirm("File "+n.length+" into their People-board group?\n\n"+yt(n))){i(e,"filing");var r=0,a=0,l=[];s()}}else ut("Nothing to file","success")}function s(){if(r>=n.length)return u();var e=n[r++];Ue.lpSyncMoveToGroup(e.itemId,e.toGroup).then(function(t){t&&t.ok?a++:l.push(e.name||e.itemId),s()}).catch(function(t){Fe("close:lpSyncMoveToGroup",t),l.push(e.name||e.itemId),s()})}function u(){ut($t(a,l.length),l.length?"error":"success"),ct().then(function(){i(e,null)})}}function c(e){var t=o(e);if(t){var n=re.playbook.value||{},r=n.month||{},a=!t.done,l=bt(t.id),s=n,u=(n.steps||[]).map(function(t,n){if(n!==e)return t;var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i]);return r.done=a,r}),c={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.steps=u,"number"==typeof n.completedCount&&(c.completedCount=n.completedCount+(a?1:-1)),re.playbook.value=c,i(e,"toggling"),Ue.togglePlaybookStep(r.year,r.month,l,a).then(function(){return ct()}).catch(function(e){re.playbook.value=s,Fe("close:toggleStep",e),ut("Could not toggle the step. Reverted.","error")}).then(function(){i(e,null)})}}if(!e)return He`
        <div class="close-view" data-state="loading">
          <div class="close-view__empty">awaiting playbook…</div>
        </div>`;var d=Array.isArray(e.steps)?e.steps:[];if(!d.length)return He`
        <div class="close-view" data-state="empty">
          <div class="close-view__empty">no close steps yet</div>
        </div>`;var f=ht(e),p=ft(d),h=f.total>0?Math.max(0,Math.min(100,f.done/f.total*100)):0,v=f.total>0&&f.done>=f.total,m=t&&Array.isArray(t.fanOut)?t.fanOut:[],g=e.month&&e.month.month,_=m.filter(function(e){return!(e.hideMonths&&g&&-1!==e.hideMonths.indexOf(g))}),y=!(!t||!0!==t.closedOk),b=!(!t||"boolean"!=typeof t.closedOk);return He`
      <div class="close-view" data-state="live">
        <div class="close-view__top">
          <div class="close-vessel" role="progressbar"
               aria-valuenow=${f.done} aria-valuemin="0" aria-valuemax=${f.total}
               aria-label=${"Close progress: "+f.done+" of "+f.total+" steps done"}>
            <div class="close-vessel__glass">
              <div class=${"close-vessel__fill"+(v?" is-full":"")}
                   style=${"height:"+h.toFixed(1)+"%;"}></div>
            </div>
            <div class="close-vessel__frac">
              ${f.done}<span class="close-vessel__of">/ ${f.total}</span>
            </div>
            <div class="close-vessel__month">${mt(e)}</div>
          </div>

          <ol class="close-steps" aria-label="Close checklist steps">
            ${d.map(function(e,t){var n=!e.done&&t===p,a="close-step"+(e.done?" is-done":n?" is-now":" is-pending"),i=e.link&&pt(e.link);e.link&&!i&&Fe("close:unsafe-link",new Error("non-http(s) link dropped: "+e.link));var o=wt(e,t),s=gt(e),d=r[t];return He`
                <li key=${null!=e.id?e.id:t} class=${a} role="checkbox" aria-checked=${!!e.done}>
                  <span class="close-step__dot" aria-hidden="true"></span>
                  <span class="close-step__name">
                    ${i?He`<a class="close-step__link" href=${e.link} target="_blank" rel="noopener">${o}</a>`:o}
                    ${e.autoDetail?He`<span class="close-step__detail">${e.autoDetail}</span>`:null}
                  </span>
                  <span class="close-step__when">
                    ${e.done?"done":n?"now":""}
                    ${s&&"rscopy"===s.type?He`<button type="button" class="close-step__act close-step__act--ghost"
                                aria-label="Copy the incoming-LP rev-share list for Omri"
                                title="Copy the incoming-LP rev-share list for Omri"
                                onClick=${function(){l(t)}}>⧉</button>`:null}
                    ${s&&"filelps"===s.type?He`<button type="button" class="close-step__act"
                                disabled=${"filing"===d}
                                aria-label=${"Open File "+s.count+" for "+o}
                                title="Move these LPs into their People-board group"
                                onClick=${function(){u(t)}}>${"filing"===d?"Filing…":"File "+s.count}</button>`:null}
                    ${s&&"toggle-manual"===s.type?He`<button type="button" class=${"close-step__act"+(e.done?" close-step__act--ghost":"")}
                                disabled=${"toggling"===d}
                                aria-label=${(e.done?"Undo ":"Mark ")+o+(e.done?"":" done")}
                                onClick=${function(){c(t)}}>${s.label}</button>`:null}
                  </span>
                </li>`})}
          </ol>
        </div>
        ${b?He`
          <div class=${"close-actually"+(y?" is-clean":" is-not-clean")}
               role="status" aria-live="polite">
            ${y?"✓ Actually clean. Reconciled and every fan-out consumer done.":"○ Not yet. Checklist may look done, but reconciliation or fan-out is not."}
          </div>`:null}
        ${_.length?He`
          <div class="close-fanout">
            <div class="close-fanout__title">Fan-out</div>
            <ul class="close-fanout__list">
              ${_.map(function(e){var t="close-fanout__row is-"+e.status,n=e.summaryLines&&e.summaryLines[0]||"";return He`
                  <li key=${e.key} class=${t} title=${e.lpsTooltip||null}>
                    <span class="close-fanout__dot" aria-hidden="true"></span>
                    <span class="close-fanout__label">${e.label}</span>
                    <span class="close-fanout__status">${e.status}</span>
                    ${e.ranAt?He`<span class="close-fanout__ran">${e.ranAt}</span>`:null}
                    <span class="close-fanout__summary">${n}</span>
                  </li>`})}
            </ul>
          </div>`:null}
      </div>
    `}function ft(e){e=e||[];for(var t=0;t<e.length;t++)if(!e[t].done&&(0===t||e[t-1].done))return t;return-1}function pt(e){return/^https?:\/\//i.test(String(null==e?"":e).trim())}function ht(e){var t=e&&Array.isArray(e.steps)?e.steps:[],n=e&&"number"==typeof e.completedCount?e.completedCount:t.filter(function(e){return e&&e.done}).length,r=e&&"number"==typeof e.totalCount?e.totalCount:t.length;return{done:n,total:r}}var vt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function mt(e,t){var n=e&&e.month;if(n&&"number"==typeof n.month&&n.month>=1&&n.month<=12)return vt[n.month-1]+" · in progress";var r=t||new Date;return vt[r.getMonth()]+" · in progress"}function gt(e){return e?"revshare"===e.id&&e.revShareCopy?{type:"rscopy"}:"filelps"===e.id&&e.lpMoves&&e.lpMoves.length?{type:"filelps",count:e.lpMoves.length}:e.auto?null:{type:"toggle-manual",label:e.done?"undo":"done"}:null}function _t(e){return(e&&e.lpMoves||[]).filter(function(e){return!!(e&&e.itemId&&e.toGroup)})}function yt(e){return(e||[]).map(function(e){return"• "+(e.name||e.itemId)+" → "+(e.toGroupLabel||e.toGroup)}).join("\n")}function bt(e){return"string"!=typeof e||""===e||isNaN(Number(e))?e:Number(e)}function $t(e,t){return t?"Filed "+e+" · "+t+" failed":"Filed "+e+" into their groups"}function wt(e,t){return e&&(e.title||e.label)||"Step "+(t+1)}tt=Ne,He=e.bind(n);function nt(e){var t=s(0);i(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}rt=String.fromCharCode(8212),$="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};var kt={PENDING:"pending",RUNNING:"working",OK:"live",STALE:"cached",FAILED:"failed",ANOMALY:"check"};function xt(e){var t=e.lbl,n=e.state||"live",r=e.health||$.OK,a=kt[r]||"",i=e.aria||t+": "+a;if("loading"===n)return He`
        <div class="companion__chip" data-health=${$.PENDING}
             tabindex="0" role="group" aria-label=${t+": loading"} title=${e.title||null}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${t}</span>
            <span class="companion__val is-loading" aria-busy="true">${rt}</span>
            <span class="companion__sub">loading</span>
          </span>
        </div>`;if("error"===n)return He`
        <div class="companion__chip" data-health=${$.FAILED}
             tabindex="0" role="group" aria-label=${t+": failed, activate to retry"} title=${e.title||"fetch failed, click to retry"}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${t}</span>
            <span class="companion__val companion__val--err"
                  role="button" tabindex="0"
                  onClick=${e.onRetry}
                  onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key||!e.onRetry||(t.preventDefault(),e.onRetry(t))}}
            >retry</span>
            <span class="companion__sub">failed</span>
          </span>
        </div>`;var o="companion__val"+(e.tone?" companion__val--"+e.tone:"");if(e.onOpen){function l(t){t&&t.preventDefault(),e.onOpen(t)}return He`
        <div class="companion__chip companion__chip--open" data-health=${r}
             role="button" tabindex="0" aria-label=${i+", activate to open"}
             title=${e.title||null}
             onClick=${l}
             onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||l(e)}}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${t}</span>
            <span class=${o}>${null!=e.value?e.value:rt}</span>
            <span class="companion__sub">${null!=e.sub?e.sub:a}</span>
          </span>
        </div>`}return He`
      <div class="companion__chip" data-health=${r}
           tabindex="0" role="group" aria-label=${i} title=${e.title||null}>
        <span class="companion__mark" aria-hidden="true"></span>
        <span class="companion__body">
          <span class="companion__lbl">${t}</span>
          <span class=${o}>${null!=e.value?e.value:rt}</span>
          <span class="companion__sub">${null!=e.sub?e.sub:a}</span>
        </span>
      </div>`}function St(e){if(!e||!Array.isArray(e.steps))return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Close: loading"};var t=e.steps,n="number"==typeof e.completedCount?e.completedCount:t.filter(function(e){return e&&e.done}).length,r="number"==typeof e.totalCount?e.totalCount:t.length,a=r>0&&n>=r;return{state:"live",health:$.OK,value:n+" / "+r,sub:a?"complete":"in progress",title:"Close checklist: "+n+" of "+r+" steps done",aria:"Close progress: "+n+" of "+r+" steps, "+(a?"complete":"in progress")}}function At(e){var t=e&&e.closed||null;if(!e||!t||null==t.numeralDisplay)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"NAV: loading"};var n=e.recon||null,r=t.monthLabel||t.label||"",a=$.OK,i=r||"closed",o="Closed NAV "+t.numeralDisplay+(r?" . "+r:"");return n&&(n.passed?(a=$.OK,i=(r?r+" . ":"")+"recon ok",o+=" . reconciliation passed"+(n.deltaPctDisplay?" ("+n.deltaPctDisplay+")":"")):(a=$.ANOMALY,i="recon fail"+(n.deltaPctDisplay?" "+n.deltaPctDisplay:""),o=(n.monthLabel?n.monthLabel+" . ":"")+"NAV reconciliation FAILED"+(n.deltaPctDisplay?" . delta "+n.deltaPctDisplay:""))),{state:"live",health:a,value:t.numeralDisplay,sub:i,title:o,aria:"NAV "+t.numeralDisplay+", "+(kt[a]||"")}}var Ct=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function Nt(e){var t=String(e||"").trim(),n=t.match(/^(\d{1,2})\/\d{4}$/);if(n){var r=parseInt(n[1],10)-1;return Ct[r]||""}var a=t.match(/^(\w{3})/);return a?a[1].toUpperCase():""}function Dt(e){var t=e&&e.yield||null,n=t&&null!=t.netFlowsDisplay?String(t.netFlowsDisplay):null;if(null==n&&t&&null!=t.netFlowsValue&&isFinite(Number(t.netFlowsValue))){var r=Number(t.netFlowsValue),a=r<0?String.fromCharCode(8722):"+";n=a+"₪"+(Math.abs(r)/1e6).toFixed(1)+"M"}if(!t||null==n)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Yield: pending"};var i=!0===t.netFlowsConfirmed,o=t.projectingLabel||t.prevMonthLabel||"",l=Nt(o);return{state:"live",health:i?$.OK:$.RUNNING,value:n,sub:(l?l+" NET":"NET")+(i?"":" · PROV"),title:(o||"Projecting month")+" net flows "+n+(i?" (confirmed)":" (provisional, awaiting breakdown)")+" -- this is the projecting month, not the Transfers chip's active month",aria:(o||"projecting month")+" net flows "+n+", "+(i?"confirmed":"provisional")}}function Et(e){if(!e||!Array.isArray(e.rows))return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Transfers: loading"};for(var t=e.monthLabel||"",n=Ei(e.rows,t),r=si(),a=0,i=0;i<n.length;i++)te(n[i],ui(n[i],r)).wired||a++;var o=Nt(t);return{state:"live",health:$.OK,value:String(a),sub:(o?o+" ":"")+(0===a?"CLEAR":"OPEN"),title:a+" transfer"+(1===a?"":"s")+" still open"+(t?" . "+t:"")+" -- this is the active month, not the Yield chip's projecting month",aria:a+" open transfer"+(1===a?"":"s")+(t?", "+t:"")}}function Pt(e,t){if("error"===t)return{state:"error",health:$.FAILED,aria:"YTD: fetch failed",title:"portfolio fetch failed, click to retry"};var n=e&&e.headline||null;if(!n||null==n.ytd_pct)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"YTD: loading"};var r=n.ytd_pct,a=e&&(e.as_of_iso||e.as_of)||"",i="FIBI portfolio basis"+(a?" · as of "+a:"");return{state:"live",health:$.OK,value:tt(r),sub:"year to date",tone:r>=0?"up":"down",title:i,aria:"Year to date return "+tt(r)+" · "+i}}function Ot(){nt([re.playbook,re.navWidget,re.transfers,re.portfolio,re.health]);var e=re.playbook.value,t=re.navWidget.value,n=re.transfers.value,r=re.portfolio.value,a=re.health.value||{},i=a.portfolio||(r?"live":"loading");function o(){try{pe(Ue,Fe)}catch(e){Fe("portfolio:retry",e)}}var l=St(e),s=At(t),u=Dt(t),c=Et(n),d=Pt(r,i);return He`
      <section class="companion" aria-label="Live map companion . firm status in words">
        <${xt} lbl="CLOSE" state=${l.state} health=${l.health}
                 value=${l.value} sub=${l.sub} title=${l.title} aria=${l.aria}
                 onOpen=${"live"===l.state?function(){ae("close")}:null} />
        <${xt} lbl="NAV" state=${s.state} health=${s.health}
                 value=${s.value} sub=${s.sub} title=${s.title} aria=${s.aria} />
        <${xt} lbl="YIELD" state=${u.state} health=${u.health}
                 value=${u.value} sub=${u.sub} title=${u.title} aria=${u.aria}
                 onOpen=${function(){ae("projecting")}} />
        <${xt} lbl="TRANSFERS" state=${c.state} health=${c.health}
                 value=${c.value} sub=${c.sub} title=${c.title} aria=${c.aria}
                 onOpen=${"live"===c.state?function(){ae("transfers")}:null} />
        <${xt} lbl="YTD" state=${d.state} health=${d.health}
                 value=${d.value} sub=${d.sub} tone=${d.tone} title=${d.title}
                 aria=${d.aria} onRetry=${o}
                 onOpen=${"live"===d.state?function(){ae("portfolio")}:null} />
      </section>
    `}He=e.bind(n);var Tt={};function Lt(e){if(null!=Tt[e])return Tt[e];var t=1e3;try{if("undefined"!=typeof document){var n=document.getElementById(e);n&&"function"==typeof n.getTotalLength&&(t=n.getTotalLength())}}catch(e){}return Tt[e]=t,t}function It(e){var t=175,n=1080,r=(e-t)/(n-t);return r<0?0:r>1?1:r}function Rt(e){e=e||{};var t=[],n={sequence:[],recon:void 0,frac:0,fillFrac:0,stalledAt:null,phase:"idle"};function r(){for(var e=0;e<t.length;e++)try{t[e](a())}catch(e){}}function a(){return{frac:n.frac,fillFrac:n.fillFrac,stalledAt:n.stalledAt,phase:n.phase,recon:n.recon}}function i(){if(null===n.recon)return n.phase="reconciling",n.stalledAt=l(),n.frac=s(n.stalledAt),void(n.fillFrac=n.frac);if(n.recon&&!1===n.recon.passed)return n.phase="recon-fail",n.stalledAt=l(),n.frac=s(n.stalledAt),void(n.fillFrac=n.frac);for(var e=n.sequence,t=0,r=null,a=0;a<e.length;a++){var i=e[a],u=s(i.stationId);if("FAILED"===i.health){r=i.stationId;break}if("OK"===i.health||"SKIPPED"===i.health)t=u;else if("RUNNING"===i.health||"PENDING"===i.health)return r=i.stationId,t=Math.max(t,o(e,a,t)),n.frac=u,n.fillFrac=t,n.stalledAt=r,void(n.phase="travelling")}if(r)return n.stalledAt=r,n.frac=s(r),n.fillFrac=t,void(n.phase="travelling");var c=e.length>0&&e.every(function(e){return"OK"===e.health||"SKIPPED"===e.health});n.stalledAt=null,n.fillFrac=t,n.frac=c?1:t,n.phase=c?"done":"idle"}function o(e,t,n){for(var r=t-1;r>=0;r--)if("OK"===e[r].health||"SKIPPED"===e[r].health)return s(e[r].stationId);return n}function l(){return n.sequence.length?n.sequence[0].stationId:null}function s(e){var t=Mt(e);return t?It(t.x):0}return{load:function(e){return n.sequence=e||[],i(),r(),this},gate:function(e){return n.recon=e,i(),r(),this},position:a,onStep:function(e){t.push(e);try{e(a())}catch(e){}return function(){var n=t.indexOf(e);n>=0&&t.splice(n,1)}},reset:function(){return n.sequence=[],n.recon=void 0,n.frac=0,n.fillFrac=0,n.stalledAt=null,n.phase="idle",r(),this},_state:n}}function Mt(e){for(var t=0;t<In.length;t++)if(In[t].id===e)return In[t];return null}function Ft(e){var t=e.pos||{frac:0,fillFrac:0,phase:"idle"},n=On.filter(function(e){return e.flow&&"nav"===e.key})[0]||On[0],r=Lt(n.id),a=r*(1-(t.fillFrac||0)),i=jt(n.id,t.frac),o="flow-packet"+("reconciling"===t.phase?" is-reconciling":"")+("recon-fail"===t.phase?" is-recon-fail":"")+("done"===t.phase?" is-done":"")+(t.stalledAt?" is-stalled":"");return He`
      <g class="flow-layer" aria-hidden="true">
        <path
          class="flow-fill"
          d=${n.d}
          fill="none"
          stroke=${n.color}
          stroke-width="6"
          stroke-linecap="butt"
          stroke-linejoin="round"
          style=${"stroke-dasharray:"+r+";stroke-dashoffset:"+a+";"}
        />
        ${"idle"!==t.phase?He`<circle class=${o} r="7" cx=${i.x} cy=${i.y} fill=${n.color} />`:null}
      </g>
    `}function jt(e,t){t=t<0?0:t>1?1:t;try{if("undefined"!=typeof document){var n=document.getElementById(e);if(n&&"function"==typeof n.getTotalLength){var r=n.getPointAtLength(n.getTotalLength()*t);return{x:r.x,y:r.y}}}}catch(e){}return{x:175+905*t,y:150}}He=e.bind(n);function Kt(e){var t=e.line;return He`
      <path
        id=${t.id}
        class=${"rail rail--"+t.key}
        d=${t.d}
        fill="none"
        stroke=${t.color}
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#atrium-map-sketch)"
      />
    `}function Ut(){return He`
      <g class="rail-lines">
        ${null}
        <defs>
          <filter id="atrium-map-sketch" x="-4%" y="-4%" width="108%" height="108%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="11" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>

        ${null}
        ${Ln.map(function(e){return He`<text class="region-label" x=${e.x} y=${e.y}>${e.text}</text>`})}

        ${null}
        ${On.map(function(e){return He`<${Kt} line=${e} key=${e.id} />`})}

        ${null}
        ${Tn.map(function(e,t){return He`<line
            key=${"tick-"+t}
            x1=${e.x1} y1=${e.y1} x2=${e.x2} y2=${e.y2}
            stroke=${e.color} stroke-width="6"
            filter="url(#atrium-map-sketch)" />`})}
      </g>
    `}He=e.bind(n);var Bt="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function Ht(e){return Bt&&"function"==typeof Bt.optimisticWrite?Bt.optimisticWrite(e):Gt(e)}function Gt(e){e=e||{};try{e.applyLocal&&e.applyLocal()}catch(e){}var t=!1;function n(){if(!t){t=!0;try{e.onConfirm&&e.onConfirm()}catch(e){}}}function r(n){if(!t){t=!0;try{e.onRevert&&e.onRevert(n)}catch(e){}}}try{e.rpc(function(e){e&&e.ok?n():r(new Error(e&&e.message||"server rejected write"))},function(e){r(e)})}catch(e){r(e)}return{confirm:n,revert:r,isSettled:function(){return t}}}var Vt=2500,Wt=30,Yt=["January","February","March","April","May","June","July","August","September","October","November","December"],qt="https://script.google.com/macros/s/AKfycbxSu6wp_NHktucOde1kS-rCVeV1IjkMnJxpycHffy62YU7lb4o-A349gF6_wwSiXLywfg/exec?api=consoleSummary",Jt=6e4,zt=18e4,Xt=6e4,Qt={fetchedAt:0},Zt={fetchedAt:0,attention:0},en={fetchedAt:0,key:null};function tn(){var e=re.navWidget.value,t=re.playbook.value,n=(re.health.value||{}).portfolio||(re.portfolio.value?"live":"loading"),r=re.fanOut.value;function a(e){re.fanOut.value=e}var o=re.silentSignals.value;function u(e){re.silentSignals.value=e}var c=re.navRecon.value,d=re.failNonce?re.failNonce.value:0,f="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,p=s({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),h=p[0],v=p[1],m=s(!1),g=m[0],_=m[1],y=s(null),b=y[0],$=y[1],w=s(!1),k=w[0],x=w[1],S=s(!1),A=S[0],C=S[1],N=s(!1),D=N[0],E=N[1],P=s(!1),O=P[0],T=P[1],L=l({timer:null,polls:0,ym:null,gen:0}),I=l(null),R=l(!0);function M(){Ue&&"function"==typeof Ue.onboardingSilentSignals&&Ue.onboardingSilentSignals({}).then(function(e){Qt.fetchedAt=Date.now(),C(!1);var t=e&&Array.isArray(e.rows)?e.rows:Array.isArray(e)?e:e&&e.signals||[],n=t.map(function(e){return e=e||{},e.kind&&!e.signalClass?e:{kind:e.signalClass,key:e.key,label:(e.lpNameHe?e.lpNameHe+" · ":"")+(e.signalLabelHe||""),gmailUrl:e.gmailUrl||null,severity:e.severity||"medium",ageRelHe:e.ageRelHe||null,evidence:e.evidence||null}});if(u(n),e&&e.banner){var r="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null;r&&"function"==typeof r.raise&&r.raise("onboarding:"+(e.banner.signalClass||"banner"),new Error(e.banner.text||e.banner.signalLabelHe||"onboarding banner"),{severity:"banner"})}}).catch(function(e){C(!0),Fe("map:silentSignals",e)})}i(function(){return R.current=!0,function(){R.current=!1}},[]),i(function(){if("undefined"!=typeof document){var e=document.createElement("input");return e.type="file",e.id="nav-file-input",e.accept=".xlsx,.xls",e.style.display="none",e.addEventListener("change",function(){var t=e.files&&e.files[0];if(t){var n=new Date,r=new Date(n.getFullYear(),n.getMonth()-1,1);W(r.getFullYear(),r.getMonth()+1,t),e.value=""}}),document.body.appendChild(e),I.current=e,function(){try{document.body.removeChild(e)}catch(e){}}}},[]),i(function(){var e=Qt.fetchedAt>0&&Date.now()-Qt.fetchedAt<Jt;e||M()},[]);var F=s(0),j=F[0],K=F[1];function U(e,t){return e&&t?Ue.navReconciliation(e,t).then(function(e){return re.navRecon.value=e||null,E(!1),e}).catch(function(e){return E(!0),Fe("map:navRecon",e),null}):Promise.resolve(null)}function B(){L.current.timer&&(clearTimeout(L.current.timer),L.current.timer=null)}function H(e,t){if(R.current){var n=L.current,r=n.gen;n.ym={year:e,month:t},Ue.fanOutStatus(e,t).then(function(i){if(n.gen===r&&R.current){a(i||null);var o=!(!i||!i._stale);if(_(o),$(o&&i&&i._lastKnownAt||null),n.polls++,o&&n.polls<=Wt)n.timer=setTimeout(function(){H(e,t)},Vt);else{var l=!o&&(!(!i||!i.pending)||(i&&i.consumers||[]).some(function(e){return"running"===e.status||"pending"===e.status||e.isPending}));!l||n.polls>Wt?(B(),x(l&&n.polls>Wt),o||U(e,t)):n.timer=setTimeout(function(){H(e,t)},Vt)}}}).catch(function(e){n.gen===r&&R.current&&(Fe("map:fanOutStatus",e),B(),_(!0),$(null),x(!1))})}}function G(){_(!1),x(!1);var t=L.current.ym||En(e);t&&V(t.year,t.month)}function V(e,t){R.current&&(B(),L.current.polls=0,L.current.gen+=1,H(e,t))}function W(e,t,n){Yt[t-1];v({uploadPhase:"reading",readingPct:0,uploading:!1,failReason:null});var r=new FileReader;r.onprogress=function(e){e.lengthComputable&&v({uploadPhase:"reading",readingPct:e.loaded/e.total*100,uploading:!1,failReason:null})},r.onerror=function(){var e=r.error||new Error("file read failed");v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:e&&e.message||"file read failed"}),Fe("map:upload:read",e)},r.onload=function(){try{v({uploadPhase:"uploading",readingPct:null,uploading:!0,failReason:null});var a=String(r.result).split(",").pop();Ue.manualUpload(e,t,n.name,a).then(function(n){v({uploadPhase:"reconciling",readingPct:null,uploading:!1,failReason:null}),V(e,t);var r=se();Ue.bootstrap({lite:!1}).then(function(n){n&&ue(n,r),v({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),U(e,t)}).catch(function(e){v({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),Fe("map:upload:reboot",e)})}).catch(function(e){v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:e&&e.message||"upload failed"}),Fe("map:manualUpload",e)})}catch(e){v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:e&&e.message||"upload failed"}),Fe("map:upload:run",e)}},r.readAsDataURL(n)}function Y(){I.current&&I.current.click()}function q(e,t){Ue.triggerFanOut(e,t).then(function(){V(e,t)}).catch(function(e){Fe("map:triggerFanOut",e),Be("Retry failed, try again","error")})}function J(e){if(e){var t=o.filter(function(t){return t.key===e})[0]||null,n=o;Ht({key:"map:dismissSignal:"+e,applyLocal:function(){u(n.filter(function(t){return t.key!==e}))},rpc:function(t,n){Ue.dismissSilentSignal(e).then(t).catch(n)},onRevert:function(n){var r=re.silentSignals.value;t&&!r.some(function(t){return t.key===e})&&u(r.concat([t])),Fe("map:dismissSignal",n),Be("Dismiss failed, alarm restored","error")}})}}function z(){var t=re.navRecon.value;if(t&&t.monthKey){var n=/^(\d{4})-(\d{1,2})/.exec(t.monthKey);if(n)return{year:parseInt(n[1],10),month:parseInt(n[2],10)}}return L.current.ym||En(e)}function X(e){var t=z();if(!t||!e){var n=new Error(e?"no close month resolved":"no sha256 on the reconciliation payload");return Fe("map:approveNavClose",n),Promise.resolve({ok:!1,error:n.message})}return Ue.approveNavClose(t.year,t.month,e).then(function(e){return e&&!1===e.ok?(Fe("map:approveNavClose",new Error(e.error||"approve rejected")),e):(U(t.year,t.month),V(t.year,t.month),e||{ok:!0})}).catch(function(e){return Fe("map:approveNavClose",e),{ok:!1,error:e&&e.message||String(e)}})}function Q(){var e=z();return e?U(e.year,e.month):Promise.resolve(null)}function Z(e){ae(e)}return i(function(){if("function"==typeof fetch){Zt.fetchedAt>0&&K(Zt.attention);var e=Zt.fetchedAt>0&&Date.now()-Zt.fetchedAt<zt;if(!e){var t=!1,n=null,r=setTimeout(function(){try{var e="function"==typeof AbortController?new AbortController:null;e&&(n=setTimeout(function(){e.abort()},2e4)),fetch(qt,e?{signal:e.signal}:void 0).then(function(e){return e.json()}).then(function(e){if(n&&(clearTimeout(n),n=null),!t&&e&&e.ok){var r=Number(e.attention)||0;K(r),T(!1),Zt={fetchedAt:Date.now(),attention:r}}}).catch(function(e){n&&(clearTimeout(n),n=null),t||(T(!0),Fe("map:consoleSummary",e))})}catch(e){t||(T(!0),Fe("map:consoleSummary",e))}},3e3);return function(){t=!0,clearTimeout(r),n&&clearTimeout(n)}}}},[]),i(function(){var t=En(e);if(t){var n=t.year+"-"+t.month,r=en.key===n&&en.fetchedAt>0&&Date.now()-en.fetchedAt<Xt&&!!re.navRecon.value;r||U(t.year,t.month).then(function(e){e&&(en={key:n,fetchedAt:Date.now()})})}},[e&&e.closed&&e.closed.monthLabel]),i(function(){var t=En(e);return t&&V(t.year,t.month),B},[e&&e.closed&&e.closed.monthLabel]),He`
      <div class="map-home">
        <${hn}
          navWidget=${e}
          fanOut=${r}
          navRecon=${c}
          silentSignals=${o}
          playbook=${t}
          portfolioHealth=${n}
          consoleAttention=${j}
          failBus=${f}
          failNonce=${d}
          uploadCtx=${h}
          onUpload=${Y}
          onRetryConsumer=${q}
          onDismissSignal=${J}
          onApprove=${X}
          onRerun=${Q}
          onOpenView=${Z} />
        ${g?He`<div class="map-stale" role="alert">fan-out status${b?" stale · last known "+new Date(b).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):" stale · last poll failed"} ·${" "}
              <button type="button" class="map-stale__retry" onClick=${G}>retry ↻</button>
            </div>`:null}
        ${k&&!g?He`<div class="map-stale map-stale--capped" role="status">checked out · some consumers still pending ·${" "}
              <button type="button" class="map-stale__retry" onClick=${G}>keep watching ↻</button>
            </div>`:null}
        ${A?He`<div class="map-stale" role="alert">alarms unavailable · onboarding signal feed failed ·${" "}
              <button type="button" class="map-stale__retry" onClick=${M}>retry ↻</button>
            </div>`:null}
        ${D?He`<div class="map-stale" role="alert">nav reconciliation check unavailable</div>`:null}
        ${O?He`<div class="map-stale" role="alert">console attention count unavailable</div>`:null}
      </div>
    `}He=e.bind(n);var nn=1180,rn=410;function an(e){return"left:"+e.x/nn*100+"%;top:"+e.y/rn*100+"%;"}function on(e){var t=e.station,n=Rn[t.line]||"--blue";if(t.isHub)return He`
        <span class="st-mark st-mark--hub" aria-hidden="true">
          <span class="st-hub__stripe st-hub__stripe--top"></span>
          <span class="st-hub__stripe st-hub__stripe--mid"></span>
          <span class="st-hub__stripe st-hub__stripe--bot"></span>
          <span class="st-hub__core"></span>
        </span>`;if(t.lines&&t.lines.length>=2&&t.capTop)return He`
        <span class="st-mark st-mark--cap" aria-hidden="true"
              style=${"--cap-top:var("+t.capTop+");--cap-bottom:var("+t.capBottom+");"}></span>`;var r="st-mark st-mark--dot"+("consumer"===t.role?" st-mark--consumer":"");return He`<span class=${r} aria-hidden="true" style=${"--mark-color:var("+n+");"}></span>`}function ln(e){var t=e.station,n=e.info||{},r=$n(n.health),a="station station--"+(t.role||"through")+" station--"+(t.labelSide||"above")+(e.active?" is-active":"")+(e.emphasis?" station--emphasis":"");function i(n){n&&n.preventDefault(),e.onActivate&&e.onActivate(t)}function o(e){"Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||i(e)}var l=t.label+(t.tip?" · "+t.tip:"")+(n.health?" · "+String(n.health).toLowerCase():"")+(n.badge?" · "+n.badge:"")+("unknown"===n.dispatch?" · send status unknown":n.dispatch?" · "+(n.dispatch.sent?"dispatched":"not dispatched"):"");return He`
      <div
        class=${a}
        style=${an(t)}
        data-health=${r}
        data-station=${t.id}
        role="button"
        tabindex="0"
        aria-label=${l}
        title=${l}
        onClick=${i}
        onKeyDown=${o}
      >
        <span class="st-hit" aria-hidden="true"></span>
        <${on} station=${t} />
        <span class="st-ring" aria-hidden="true"></span>
        ${n.badge?He`<span class="st-badge" aria-hidden="true">${n.badge}</span>`:null}
        <span class="st-label">${t.label}</span>
        ${"unknown"===n.dispatch?He`<span class="st-chip st-chip--unknown" aria-hidden="true">send status unknown</span>`:n.dispatch?He`<span class=${"st-chip "+(n.dispatch.sent?"st-chip--sent":"st-chip--unsent")}
                         aria-hidden="true">${n.dispatch.sent?"sent":"not sent"}</span>`:null}
      </div>
    `}function sn(e){var t=e.station,n=e.info||{},r=n.health||"ready",a=e.readingPct,i="failed"===r&&e.failReason?String(e.failReason):null;function o(n){n&&n.preventDefault(),"reading"!==r&&"uploading"!==r&&"reconciling"!==r&&e.onActivate&&e.onActivate(t)}function l(e){"Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||o(e)}var s="Upload NAV";return"reading"===r&&null!=a?s="↑ "+Math.round(a)+"%":"uploading"===r?s="Uploading…":"reconciling"===r?s="Reconciling…":"recon-pass"===r?s="NAV in ✓":"recon-fail"===r?s="Recon failed":"failed"===r&&(s="Upload failed · retry"),He`
      <div
        class=${"station station--upload station--right"}
        style=${an(t)}
        data-health=${r}
        data-station=${t.id}
        role="button"
        tabindex="0"
        aria-label=${"Upload audited NAV (xlsx to cache to pipeline) · "+r+(i?" · "+i:"")}
        title=${t.tip}
        onClick=${o}
        onKeyDown=${l}
      >
        <span class="st-hit" aria-hidden="true"></span>
        <span class="up-terminus" aria-hidden="true">
          <span class="up-arrow">↑</span>
        </span>
        <span class="st-ring st-ring--upload" aria-hidden="true"></span>
        <span class="st-label st-label--upload">${s}</span>
        ${i?He`<span class="st-label__reason">${i}</span>`:null}
      </div>
    `}He=e.bind(n);function un(e){return e.href?He`<a class="st-pop__act" href=${e.href} target="_blank" rel="noopener"
                     onClick=${e.onClick}>${e.label}</a>`:He`<button type="button" class=${"st-pop__act"+(e.tone?" st-pop__act--"+e.tone:"")}
                    onClick=${e.onClick}>${e.label}</button>`}function cn(e){var t=e.station||{},n=e.info||{},r=e.recon||null,a=e.signals||[],o=l(null),u=l(e.onClose);u.current=e.onClose,i(function(){if("undefined"!=typeof document){var e=document.activeElement,t=setTimeout(function(){try{var e=n();e.length&&e[0].focus()}catch(e){}},0);return document.addEventListener("keydown",r),document.addEventListener("mousedown",a),function(){clearTimeout(t),document.removeEventListener("keydown",r),document.removeEventListener("mousedown",a);try{e&&"function"==typeof e.focus&&e.focus()}catch(e){}}}function n(){var e=o.current;return e?Array.prototype.slice.call(e.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')):[]}function r(e){if("Escape"!==e.key){if("Tab"===e.key){var t=n();if(!t.length)return;var r=t[0],a=t[t.length-1],i=document.activeElement;e.shiftKey&&i===r?(e.preventDefault(),a.focus()):e.shiftKey||i!==a?o.current&&!o.current.contains(i)&&(e.preventDefault(),r.focus()):(e.preventDefault(),r.focus())}}else u.current&&u.current()}function a(e){var t=e.target;t&&t.closest&&t.closest(".station-layer")||o.current&&!o.current.contains(t)&&u.current&&u.current()}},[]);var c=n.health?String(n.health).toLowerCase():"idle",d=s(null),f=d[0],p=d[1],h=s(null),v=h[0],m=h[1];function g(){!f&&e.onApprove&&r&&r.sha256&&(p("approve"),m(null),Promise.resolve(e.onApprove(r.sha256)).then(function(e){p(null),e&&!1===e.ok&&m(e.error||"approve rejected")}).catch(function(e){p(null),m(e&&e.message||String(e))}))}function _(){!f&&e.onRerun&&(p("rerun"),m(null),Promise.resolve(e.onRerun()).then(function(){p(null)}).catch(function(e){p(null),m(e&&e.message||String(e))}))}if(null!=r&&"recon"===e.kind){var y=r.anomalies&&r.anomalies.length?r.anomalies:null,b=0,$=0;return(r.anomalies||[]).forEach(function(e){"hard"===e.severity?b++:"soft"===e.severity&&$++}),He`
        <div ref=${o} class="st-pop st-pop--recon" role="dialog" aria-modal="true" aria-label=${"Reconciliation "+t.label} data-health=${c}>
          <div class="st-pop__head">
            <span class="st-pop__title">Reconciliation</span>
            <button type="button" class="st-pop__x" aria-label="Close" onClick=${e.onClose}>×</button>
          </div>
          <div class=${"st-pop__recon "+(r.passed?"is-ok":"is-fail")} role=${r.passed?null:"alert"}>
            ${r.passed?"Passed":"FAILED"}
            ${r.deltaPctDisplay?He`<span class="st-pop__delta"> · Δ ${r.deltaPctDisplay}</span>`:null}
            ${r.monthLabel?He`<span class="st-pop__mo"> · ${r.monthLabel}</span>`:null}
          </div>
          ${y?He`<p class="st-pop__counts">${y.length} item${1===y.length?"":"s"}${b?" · "+b+" hard":""}${$?" · "+$+" soft":""}</p>`:null}
          ${y?He`<ul class="st-pop__anoms">
                ${y.map(function(e,t){return He`<li key=${t} class="st-pop__anom">
                    <span class="st-pop__anom-lp">${e.lp||e.kind||"item"}
                      ${e.severity?He`<span class=${"st-pop__anom-sev st-pop__anom-sev--"+e.severity}>${e.severity}</span>`:null}
                    </span>
                    <span class="st-pop__anom-ex">${e.explanation||""}</span>
                    ${e.action?He`<span class="st-pop__anom-act">${e.action}</span>`:null}
                  </li>`})}
              </ul>`:r.passed?null:He`<p class="st-pop__note">Fan-out is gated until the anomaly is resolved.</p>`}
          ${r.error?He`<p class="st-pop__reason is-fail">${r.error}</p>`:null}
          ${v?He`<p class="st-pop__reason is-fail" role="alert">${v}</p>`:null}
          ${r.approvable&&r.sha256&&e.onApprove||e.onRerun?He`<div class="st-pop__acts st-pop__acts--recon">
                ${r.approvable&&r.sha256&&e.onApprove?He`<button type="button" class="st-pop__act st-pop__act--retry"
                            disabled=${!!f} onClick=${g}>${"approve"===f?"Approving…":"Approve and release"}</button>`:null}
                ${e.onRerun?He`<button type="button" class="st-pop__act st-pop__act--ghost"
                            disabled=${!!f} onClick=${_}>${"rerun"===f?"Re-running…":"Re-run"}</button>`:null}
              </div>`:null}
        </div>
      `}return a&&a.length?He`
        <div ref=${o} class="st-pop st-pop--alarm" role="dialog" aria-modal="true" aria-label=${"Attention · "+t.label} data-health=${c}>
          <div class="st-pop__head">
            <span class="st-pop__title">${t.label} · ${a.length} item${1===a.length?"":"s"}</span>
            <button type="button" class="st-pop__x" aria-label="Close" onClick=${e.onClose}>×</button>
          </div>
          <ul class="st-pop__sigs">
            ${a.map(function(t,n){return He`<li key=${t.key||n} class="st-pop__sig">
                <span class="st-pop__sig-txt">${t.label||t.kind||"signal"}
                  ${t.ageRelHe?He`<span class="st-pop__sig-age">${" · "+t.ageRelHe}</span>`:null}
                </span>
                ${t.gmailUrl?He`<a class="st-pop__act" href=${t.gmailUrl} target="_blank" rel="noopener">Open</a>`:null}
                <button type="button" class="st-pop__act st-pop__act--ghost"
                        onClick=${function(){e.onDismiss&&e.onDismiss(t.key)}}>Dismiss</button>
              </li>`})}
          </ul>
        </div>
      `:He`
      <div ref=${o} class="st-pop" role="dialog" aria-modal="true" aria-label=${t.label+" status"} data-health=${c}>
        <div class="st-pop__head">
          <span class="st-pop__title">${t.label}</span>
          <button type="button" class="st-pop__x" aria-label="Close" onClick=${e.onClose}>×</button>
        </div>
        <p class="st-pop__tip">${t.tip||""}</p>
        ${n.reason?He`<p class=${"st-pop__reason"+("failed"===c?" is-fail":"")}>${n.reason}</p>`:null}
        ${n.dispatch?He`<p class="st-pop__dispatch">${n.dispatch.sent?"Dispatched · "+(n.dispatch.count||0)+" thread"+(1===n.dispatch.count?"":"s")+(n.dispatch.lastTs?" · "+at(n.dispatch.lastTs):""):"Not dispatched yet"}</p>`:null}
        <div class="st-pop__acts">
          ${n.retryable&&e.onRetry?He`<${un} label="Retry" tone="retry" onClick=${function(){e.onRetry()}} />`:null}
          ${n.openUrl?He`<${un} label="Open" href=${n.openUrl} onClick=${e.onClose} />`:null}
        </div>
      </div>
    `}function at(e){try{var t=new Date(e);if(!isNaN(t.getTime()))return t.toLocaleString()}catch(e){}return String(e)}He=e.bind(n);var dn=null;function fn(){var e=[{cls:"running",label:"running"},{cls:"ok",label:"done"},{cls:"failed",label:"failed"},{cls:"pending",label:"pending"},{cls:"anomaly",label:"attention"}];return He`
      <div class="map-key">
        ${On.map(function(e){return He`<span key=${e.key}>
            <span class="map-key__sw" style=${"background:"+e.color+";"}></span>${e.label}
          </span>`})}
        <span class="map-key__sep" aria-hidden="true"></span>
        ${e.map(function(e){return He`<span key=${"h-"+e.cls} class="map-key__health">
            <span class=${"map-key__hsw map-key__hsw--"+e.cls}></span>${e.label}
          </span>`})}
      </div>
    `}function pn(e){return He`
      <svg class="rails" viewBox="0 0 1180 410" role="img" aria-label="Firm operations map">
        <${Ut} />
        <${Ft} pos=${e.flowPos} />
      </svg>
    `}function hn(e){e=e||{};var t=e.navWidget||null,n=e.fanOut||null,r=e.navRecon||null,a=e.silentSignals||[],i=e.playbook||null,l=e.portfolioHealth||null,u=e.consoleAttention||0,c=e.failBus||null,d=e.failNonce||0,f=e.uploadCtx||{},p=s(null),h=p[0],v=p[1],m=s(function(){return(new Date).getDate()}),g=m[0],_=o(function(){return Sn({navWidget:t,fanOut:n,navRecon:r,silentSignals:a,playbook:i,portfolioHealth:l,consoleAttention:u,failBus:c,uploadCtx:f})},[t,n,r,a,i,l,u,c,d,f]),y=s(function(){return Rt()}),b=y[0],$=o(function(){var e=Pn(_),n=t&&void 0!==t.recon?t.recon||(t.ingestRunning?null:void 0):void 0;if(r){var a=!(n&&!1===n.passed),i=!1!==r.reconciled||!0===r.approved;n={passed:i&&a}}return b.gate(n),b.load(e),b.position()},[_,t,r]),w=vn("upload"),k=t&&t.recon,x=s(0),S=x[1],A=r?String(r.monthKey||"")+":"+String(r.sha256||""):"sumtie:"+String(k&&k.monthLabel||""),C=(r&&!1===r.reconciled&&!0!==r.approved||k&&!1===k.passed)&&dn!==A;function N(t){if(t.isUpload)e.onUpload&&e.onUpload(t);else if(t.focusView&&e.onOpenView)e.onOpenView(t.focusView,t);else{var n=_[t.id]||{};n.health||!t.href||t.alarmKey?v(t.id===h?null:t.id):"undefined"!=typeof window&&window.open(t.href,"_blank","noopener")}}function D(){C&&null==h&&(dn=A,S(function(e){return e+1})),v(null)}var E=h?vn(h):C?w:null,P=E?_[E.id]||{}:null,O=E?gn(E,a):[],T=E&&"upload"===E.id&&C,L=null;function I(){if(e.onRetryConsumer&&t&&t.closed){var r=_n(n)||En(t);r&&e.onRetryConsumer(r.year,r.month)}}function R(t){e.onDismissSignal&&e.onDismissSignal(t)}return T&&(L={passed:!(k&&!1===k.passed||r&&!1===r.reconciled),deltaPctDisplay:k?k.deltaPctDisplay:null,monthLabel:k&&k.monthLabel||r&&r.monthKey||null},r&&(L.approvable=!!r.approvable,L.sha256=r.sha256||null,L.counts=r.counts||null,L.error=r.error||null,L.anomalies=(r.anomalies||[]).map(function(e){return{lp:e.name||null,kind:e.class||null,severity:e.severity||null,explanation:e.detail||"",action:e.suggestedAction||null}}))),He`
      <div class="map-wrap">
        <${fn} />
        <div class="map-scroll">
          <div class="map">
            <${pn} flowPos=${$} />
            <div class="station-layer">
              ${In.map(function(e){return e.isUpload?He`<${sn}
                    key=${e.id}
                    station=${e}
                    info=${_[e.id]}
                    readingPct=${f.readingPct}
                    failReason=${f.failReason}
                    onActivate=${N} />`:He`<${ln}
                  key=${e.id}
                  station=${e}
                  info=${_[e.id]}
                  active=${h===e.id}
                  emphasis=${!(!e.emphasisDays||-1===e.emphasisDays.indexOf(g))}
                  onActivate=${N} />`})}
            </div>
          </div>
        </div>
        ${E&&(T||"upload"!==E.id)?He`<div class="st-pop-anchor" style=${mn(E)}>
              <${cn}
                station=${E}
                info=${P}
                recon=${T?L:null}
                kind=${T?"recon":null}
                signals=${O}
                onRetry=${I}
                onDismiss=${R}
                onApprove=${e.onApprove}
                onRerun=${e.onRerun}
                onClose=${D} />
            </div>`:null}
      </div>
    `}function vn(e){for(var t=0;t<In.length;t++)if(In[t].id===e)return In[t];return null}function mn(e){return e?"left:"+e.x/1180*100+"%;top:"+e.y/410*100+"%;":""}function gn(e,t){return e&&e.alarmKey&&t?t.filter(function(t){var n=t.station||Nn(t.kind);return n===e.alarmKey}):[]}function _n(e){if(!e||!e.monthKey)return null;var t=/^(\d{4})-(\d{1,2})/.exec(e.monthKey);return t?{year:parseInt(t[1],10),month:parseInt(t[2],10)}:null}var yn="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};function bn(e){switch(e){case"done":return yn.OK;case"running":return yn.RUNNING;case"failed":return yn.FAILED;case"skipped_seasonal":return"SKIPPED";case"pending":return yn.PENDING;default:return null}}function $n(e){return e?String(e).toLowerCase():"idle"}function wn(e){if(e=e||{},e.uploadPhase)return e.uploadPhase;var t=e.navWidget||null;return e.uploading?"uploading":null!=e.readingPct?"reading":t&&t.ingestRunning?"reconciling":kn(e.navRecon,t&&t.recon)}function kn(e,t){var n=!(!e||!1!==e.reconciled||!0===e.approved),r=!(!t||t.passed);if(n||r)return"recon-fail";var a=!(!e||!0!==e.reconciled),i=!(!t||!0!==t.passed);return a||i?"recon-pass":"ready"}var xn={close:function(e,t){var n=t.playbook;if(n&&Array.isArray(n.steps)&&n.steps.length){var r="number"==typeof n.completedCount?n.completedCount:n.steps.filter(function(e){return e&&e.done}).length,a="number"==typeof n.totalCount?n.totalCount:n.steps.length;e.health=Cn(e.health,a>0&&r>=a?yn.OK:yn.RUNNING),e.reason||(e.reason="close "+r+" / "+a)}},portfolio:function(e,t){if(t.portfolioHealth){var n="error"===t.portfolioHealth?yn.FAILED:"loading"===t.portfolioHealth?yn.PENDING:yn.OK;e.health=Cn(e.health,n),n===yn.FAILED&&(e.badge=e.badge||"!",e.retryable=!0,e.reason||(e.reason="portfolio fetch failed"))}},"operator-console":function(e,t,n){"number"==typeof t.consoleAttention&&t.consoleAttention>0&&(e.health=Cn(e.health,yn.ANOMALY),e.badge=String(t.consoleAttention+n),e.reason=(e.reason?e.reason+" · ":"")+t.consoleAttention+" console attention item"+(1===t.consoleAttention?"":"s"))}};function Sn(e){e=e||{};var t=e.fanOut||null,n=e.silentSignals||[],r=e.failBus||null,a={};if(t&&t.consumers)for(var i=0;i<t.consumers.length;i++){var o=t.consumers[i];o&&o.key&&(a[o.key]=o)}for(var l={},s=0;s<n.length;s++){var u=n[s]||{},c=u.station||Nn(u.kind)||"console";l[c]=(l[c]||0)+1}for(var d={},f=0;f<In.length;f++){var p=In[f],h=null,v=null,m=null,g=!1,_=p.href||null,y=null;if(p.isUpload){var b=e.uploadCtx||{},$={uploadPhase:b.uploadPhase,uploading:b.uploading,readingPct:b.readingPct,navWidget:e.navWidget||b.navWidget||null,navRecon:e.navRecon||null};h=wn($),d[p.id]={health:h,badge:null,reason:null,retryable:!1,openUrl:null,isUpload:!0}}else{if(p.consumerKey&&a[p.consumerKey]){var w=a[p.consumerKey],k=bn(w.status);k&&(h=k,w.details&&(m=w.details),w.manualOpenUrl&&(_=w.manualOpenUrl),k===yn.FAILED&&(v="!",g=!0)),y=Object.prototype.hasOwnProperty.call(w,"dispatch")?null===w.dispatch?"unknown":w.dispatch:null}p.alarmKey&&l[p.alarmKey]&&(h=Cn(h,yn.ANOMALY),v=String(l[p.alarmKey]),m||(m=l[p.alarmKey]+" attention item"+(1===l[p.alarmKey]?"":"s")));var x=xn[p.id];if(x){var S={health:h,badge:v,reason:m,retryable:g};x(S,e,l[p.alarmKey]||0),h=S.health,v=S.badge,m=S.reason,g=S.retryable}if(r&&"function"==typeof r.stationHealth){var A=r.stationHealth(p.id);A&&!A.resolved&&(h=Cn(h,yn.FAILED),v=v||"!",g=!0,m||(m=A.message||"fetch failed"),A.retry&&(d[p.id+":__retry"]=A.retry))}d[p.id]={health:h,badge:v,reason:m,retryable:g,openUrl:_,dispatch:y,consumerKey:p.consumerKey||null}}}return d}var An={OK:0,SKIPPED:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function Cn(e,t){if(null==e)return t;if(null==t)return e;var n=null==An[e]?-1:An[e],r=null==An[t]?-1:An[t];return r>n?t:e}function Nn(e){switch(e){case"sig_mismatch":case"bank_pushback":return"transfers";case"drive_proxy_request":case"easysend_error":return"easysend";case"bdo_ishur_unapproved":case"bdo_ooo_banner":return"console";default:return null}}var Dn=["January","February","March","April","May","June","July","August","September","October","November","December"];function En(e){var t=e&&e.closed;if(!t)return null;if(t.year&&t.month)return{year:t.year,month:t.month};if(t.monthLabel){var n=/^(\w+)\s+(\d{4})$/.exec(String(t.monthLabel).trim());if(n){var r=Dn.indexOf(n[1]);if(r>=0)return{year:parseInt(n[2],10),month:r+1}}}return null}function Pn(e){return e=e||{},Mn.map(function(t){var n=e[t]&&e[t].health||null;return{stationId:t,health:n}})}var On=[{id:"route-nav-main",key:"nav",color:"#1F5DB0",label:"NAV pipeline",flow:!0,d:"M 175,150 L 488,150 Q 500,150 508,158 L 562,212 Q 570,220 582,220 L 688,220 Q 700,220 708,212 L 762,158 Q 770,150 782,150 L 1080,150"},{id:"route-nav-867",key:"nav-867",color:"#1F5DB0",label:"NAV · 867 branch",flow:!0,d:"M 935,150 C 970,150 970,90 1000,90 L 1020,90"},{id:"route-daily",key:"daily",color:"#D4A227",label:"Daily ops",d:"M 175,250 L 1080,250"},{id:"route-lp",key:"lp",color:"#D85E4C",label:"LP onboarding",d:"M 175,300 L 300,300 Q 325,300 325,325 Q 325,350 350,350 L 1080,350"},{id:"route-cross",key:"cross",color:"#5C2C82",label:"Cross-cut",d:"M 475,150 L 755,350"},{id:"route-ext",key:"ext",color:"#5C7585",label:"External",d:"M 1060,150 L 1060,350"}],Tn=[{x1:1080,y1:140,x2:1080,y2:160,color:"#1F5DB0"},{x1:1020,y1:80,x2:1020,y2:100,color:"#1F5DB0"},{x1:1080,y1:240,x2:1080,y2:260,color:"#D4A227"},{x1:1080,y1:340,x2:1080,y2:360,color:"#D85E4C"}],Ln=[{text:"INVESTMENTS",x:335,y:115},{text:"OPERATIONS",x:345,y:395},{text:"PARTNERS",x:745,y:320}],In=[{id:"upload",role:"upload",line:"nav",x:175,y:150,labelSide:"right",label:"Upload NAV",tip:"Upload audited NAV (xlsx to cache to pipeline)",isUpload:!0},{id:"factsheet",role:"consumer",line:"nav",x:235,y:150,labelSide:"above",label:"Fct",tip:"Fact sheet · monthly LP-facing",href:"https://docs.google.com/spreadsheets/d/1Z34Yq3rlfQSRKhsexRVnb42XPb88YeabSv7mcpgJ4qs/edit",consumerKey:"factsheet",flowOrder:1},{id:"fo-reports",role:"consumer",line:"nav",x:310,y:150,labelSide:"below",label:"Foa",tip:"FO carry · semi-annual H1/H2 distribution + payout docs",href:"https://docs.google.com/spreadsheets/d/13SDNCrSNP_lthyr4woacjl8HEsPXZlo4lyFimmSPed4/edit",consumerKey:"family-office",flowOrder:2},{id:"operator-console",role:"through",line:"nav",x:475,y:90,labelSide:"above",label:"Op",tip:"Operator Console · LP onboarding (Cayman + Israel)",href:"https://sign.legacyvpartners.com/console",alarmKey:"console"},{id:"easysend-agent",role:"interchange",line:"nav",x:475,y:150,labelSide:"above",label:"Es",tip:"EasySend agent · live process management (NAV ↔ Cross-cut)",href:"https://legacy-value-partners.easysend.app/global-agent",lines:["nav","cross"],capTop:"--blue",capBottom:"--plum",alarmKey:"easysend"},{id:"gafner",role:"consumer",line:"nav",x:820,y:150,labelSide:"below",label:"Gfn",tip:"Gafner statement",href:"https://docs.google.com/spreadsheets/d/198ZVw-4RPr-KWX-KwpccHV1ofzqqHdq7adqSGVwAkVQ/edit",consumerKey:"gafner-bound",flowOrder:3},{id:"fibi-ws",role:"through",line:"nav",x:895,y:150,labelSide:"above",label:"Ws",tip:"WS Signer · upload xlsm, code signs and dates",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbwYp1O7A_GpikCM-bbazwkPjPc4MtID5oV8S-c338iptQfCxUanSu6qSgqhczwitG7GfA/exec"},{id:"form-867",role:"through",line:"nav-867",x:1005,y:90,labelSide:"above",label:"867",tip:"Form 867 · annual withholding-tax generator",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbytfIVXYCmzqtAg0u33YVNue03vBq5ZGlYGGYnYtrWMsJZt-grhi0pXgVHWrGbyMi3z/exec"},{id:"transfer-tracker",role:"through",line:"daily",x:235,y:250,labelSide:"above",label:"Tf",tip:"Transfers · the money workshop (sign / wire / amounts)",href:"https://docs.google.com/spreadsheets/d/1BcFFah16W-sYUHqIt6JyUttMOIQgQ7OyGEPE2zHpy6c/edit",alarmKey:"transfers",focusView:"transfers"},{id:"invoice",role:"through",line:"daily",x:310,y:250,labelSide:"below",label:"Inv",tip:"Invoice Reviewer · AI-assisted invoice approval drafts",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxGsshd9Cc9TB7nl0WzMTWaBHiMBIE97UHoLWVQlT4K/exec",consumerKey:"invoice-processor"},{id:"close",role:"through",line:"daily",x:400,y:250,labelSide:"above",label:"Cls",tip:"Close · monthly close checklist (the filling vessel)",focusView:"close"},{id:"projecting",role:"through",line:"daily",x:470,y:250,labelSide:"above",label:"Prj",tip:"Projecting · Rough Yield / day-1 WhatsApp yield card",focusView:"projecting",emphasisDays:[1,2,3]},{id:"portfolio",role:"through",line:"daily",x:540,y:250,labelSide:"below",label:"Pf",tip:"Portfolio · positions, movers, NAV chart",focusView:"portfolio"},{id:"builder-hub",role:"hub",line:"daily",x:615,y:237,labelSide:"below",label:"Bld",tip:"EasySend Builder · MAJOR HUB · NAV ↔ Daily ↔ Cross-cut",href:"https://builder.easysend.io/app/customers/legacy-value-partners/agent-dashboard",lines:["nav","cross","daily"],isHub:!0},{id:"payslip",role:"consumer",line:"daily",x:850,y:250,labelSide:"above",label:"Pyl",tip:"Payslip · monthly payslip parser",href:"https://docs.google.com/spreadsheets/d/1QhfGYFxKAnJHHSkBzI2N1aMyDi94fqCJ3PvZ3jxl8xA/edit",consumerKey:"salary"},{id:"monday",role:"interchange",line:"ext",x:1060,y:150,labelSide:"right",label:"Mon",tip:"Monday · People board (investor profiles, qualification, files)",href:"https://legacyvpartners.monday.com/boards/1606766164",lines:["nav","ext"],capTop:"--blue",capBottom:"--slate"},{id:"calendar",role:"through",line:"ext",x:1060,y:200,labelSide:"right",label:"Cal",tip:"Google Calendar · daily",href:"https://calendar.google.com/",focusView:"schedule"},{id:"gmail",role:"interchange",line:"ext",x:1060,y:250,labelSide:"right",label:"Gml",tip:"Gmail · daily inbox (Daily terminus interchange)",href:"https://mail.google.com/",lines:["daily","ext"],capTop:"--mustard",capBottom:"--slate"},{id:"drive",role:"interchange",line:"ext",x:1060,y:350,labelSide:"right",label:"Drv",tip:"Drive · shared files (LP onboarding terminus interchange)",href:"https://drive.google.com/",lines:["lp","ext"],capTop:"--coral",capBottom:"--slate"}],Rn={nav:"--blue","nav-867":"--blue",daily:"--mustard",lp:"--coral",cross:"--plum",ext:"--slate"},Mn=In.filter(function(e){return null!=e.flowOrder}).sort(function(e,t){return e.flowOrder-t.flowOrder}).map(function(e){return e.id}),Fn=(function(){for(var e={},t=0;t<In.length;t++)In[t].consumerKey&&(e[In[t].consumerKey]=In[t].id)}(),He=e.bind(n),String.fromCharCode(8230));function jn(e){var t=Rn[e];return t?"var("+t+")":"var(--ink-faint)"}function Kn(e){if(e.tip){var t=e.tip.split(String.fromCharCode(183))[0].trim();if(t)return t}return e.label}function Un(){return In.filter(function(e){return!e.isUpload&&!e.focusView}).map(function(e){var t=Kn(e);return{id:"go-"+e.id,kind:"destination",stationId:e.id,consumerKey:e.consumerKey||null,label:t,hint:e.label,keywords:(t+" "+e.label+" "+(e.tip||"")).toLowerCase(),lineColor:jn(e.line),href:e.href,isUpload:!!e.isUpload,run:function(t){Vn(e),t.close()}}})}function Bn(e){return Array.isArray(e)?e.filter(function(e){return e&&!e.isHeader&&e.url}).map(function(e){return{id:"app-"+e.key,kind:"app-link",label:e.label||e.key,hint:e.cadence||"",keywords:(String(e.label||"")+" "+String(e.subtitle||"")+" "+String(e.key||"")).toLowerCase(),href:e.url,run:function(t){try{var n=window.open(e.url,"_blank","noopener");n||(location.href=e.url)}catch(t){Fe("palette:app-link:"+e.key,t)}t.close()}}}):[]}function Hn(){return[{id:"act-upload",kind:"action",label:"Upload audited NAV",hint:"upload",keywords:"upload nav audited xlsx fan out fanout trigger ingest",run:function(e){Yn(),e.close()}},{id:"act-transfers",kind:"action",label:"Jump to Transfers",hint:"tracker",keywords:"transfers transfer tracker daily jump money wires",run:function(e){Gn("transfer-tracker"),e.close()}},{id:"act-refresh-portfolio",kind:"action",label:"Refresh portfolio",hint:"ytd / mtd",keywords:"refresh portfolio reload ytd mtd retry performance",run:function(e){qn(),e.close()}},{id:"act-open-close",kind:"action",label:"Open Close",hint:"checklist",keywords:"close checklist playbook month vessel steps filing revshare",run:function(e){ae("close"),e.close()}},{id:"act-open-projecting",kind:"action",label:"Open Projecting",hint:"rough yield",keywords:"projecting yield rough net flows closing whatsapp omri",run:function(e){ae("projecting"),e.close()}},{id:"act-open-portfolio",kind:"action",label:"Open Portfolio",hint:"positions",keywords:"portfolio positions movers chart benchmark nav fx allocation",run:function(e){ae("portfolio"),e.close()}},{id:"act-open-schedule",kind:"action",label:"Open Schedule",hint:"departures",keywords:"schedule departures board tasks events calendar today",run:function(e){ae("schedule"),e.close()}}]}function Gn(e){for(var t=0;t<In.length;t++)if(In[t].id===e)return void Vn(In[t])}function Vn(e){if(e.isUpload)Yn();else if(e.focusView)ae(e.focusView);else if(e.href)try{var t=window.open(e.href,"_blank","noopener");t||(location.href=e.href)}catch(t){Fe("palette:open:"+e.id,t)}else Wn(e.id)}function Wn(e){try{var t=document.querySelector('[data-station="'+e+'"]');t&&t.scrollIntoView&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});try{window.dispatchEvent(new CustomEvent("atrium:open-station",{detail:{id:e}}))}catch(e){}}catch(t){Fe("palette:scroll:"+e,t)}}function Yn(){"home"!==re.view.value&&ae("home");var e=0;!function t(){var n=document.getElementById("nav-file-input");n&&"function"==typeof n.click?n.click():e++<20?setTimeout(t,50):Fe("palette:upload:no-input",new Error("#nav-file-input not mounted after routing home"))}()}function qn(){try{"function"==typeof pe?pe(Ue,Fe):Ue.portfolio().catch(function(e){Fe("palette:portfolio",e)})}catch(e){Fe("palette:portfolio:sync",e)}}function Jn(e){switch(e){case"ok":return{txt:"ok",tone:"ok"};case"running":return{txt:"running",tone:"running"};case"pending":return{txt:"queued",tone:"pending"};case"skipped":return{txt:"skipped",tone:"stale"};case"stale":return{txt:"stale",tone:"stale"};case"failed":return{txt:"failed",tone:"failed"};case"anomaly":return{txt:"anomaly",tone:"anomaly"};default:return null}}function zn(e,t){if(!t)return 1;var n=e.keywords,r=e.label.toLowerCase();if(0===r.indexOf(t))return 1e3;if(r.indexOf(t)>=0)return 800;if(n.indexOf(t)>=0)return 500;for(var a=0,i=0;i<n.length&&a<t.length;i++)n.charCodeAt(i)===t.charCodeAt(a)&&a++;return a===t.length?100:-1}function Xn(){var e=s(!1),t=e[0],n=e[1],r=s(""),u=r[0],c=r[1],d=s(0),f=d[0],p=d[1],h=l(null),v=l(null),m=l(null),g=re.navWidget.value,_=re.fanOut&&re.fanOut.value||null,y=re.silentSignals&&re.silentSignals.value||[],b=o(function(){try{return Sn({navWidget:g,fanOut:_,silentSignals:y})||{}}catch(e){return Fe("palette:health",e),{}}},[g,_,y]),$=s([]),w=$[0],k=$[1],x=l(!1);i(function(){t&&!x.current&&(x.current=!0,Ue.appLinks().then(function(e){k(e||[])}).catch(function(e){Fe("palette:appLinks",e)}))},[t]);var S=o(function(){return Hn().concat(Un()).concat(Bn(w))},[w]),A=o(function(){for(var e=u.trim().toLowerCase(),t=[],n=0;n<S.length;n++){var r=zn(S[n],e);r>=0&&t.push({item:S[n],sc:r,ord:n})}return t.sort(function(e,t){return t.sc-e.sc||e.ord-t.ord}),t.map(function(e){return e.item})},[u,S]);i(function(){f>=A.length&&p(A.length?A.length-1:0)},[A.length]),i(function(){function e(e){var r=e.key,a=e.metaKey||e.ctrlKey;if(a&&("k"===r||"K"===r))return e.preventDefault(),void n(function(e){return!e});var i=e.target,o=i&&i.tagName?i.tagName.toLowerCase():"",l="input"===o||"textarea"===o||i&&i.isContentEditable;if(!t&&!l){if("/"===r)return e.preventDefault(),void n(!0);if(!a&&!e.altKey){var s=String(r||"").toLowerCase();if("u"===s)e.preventDefault(),Yn();else if("r"===s&&"transfers"===re.view.value){var u=document.querySelector(".tx-view__refresh");u&&(e.preventDefault(),u.click())}else if("e"===s){var c=document.querySelector(".tx-band--transferred .tx-band__hdr--toggle");c&&(e.preventDefault(),c.click())}}}}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[t]),i(function(){if(t){try{m.current=document.activeElement}catch(e){}c(""),p(0);var e=setTimeout(function(){try{h.current&&h.current.focus()}catch(e){}},0);return function(){clearTimeout(e)}}try{var n=m.current;n&&"function"==typeof n.focus&&n.focus()}catch(e){}},[t]);var C=a(function(){n(!1)},[]);function N(e){if(e)try{e.run({close:C})}catch(t){Fe("palette:run:"+e.id,t),C()}}function D(e){var t=e.key;if("Escape"===t)return e.preventDefault(),void C();if("ArrowDown"===t)return e.preventDefault(),void p(function(e){return A.length?(e+1)%A.length:0});if("ArrowUp"===t)return e.preventDefault(),void p(function(e){return A.length?(e-1+A.length)%A.length:0});if("Home"===t)return e.preventDefault(),void p(0);if("End"===t)return e.preventDefault(),void p(A.length?A.length-1:0);if("Enter"===t)return e.preventDefault(),void N(A[f]);if("Tab"===t){e.preventDefault();try{h.current&&h.current.focus()}catch(e){}}}if(i(function(){if(t&&v.current){var e=v.current.querySelector("#palette-opt-"+f);if(e&&e.scrollIntoView)try{e.scrollIntoView({block:"nearest"})}catch(e){}}},[f,t]),!t)return null;var E=A.length?"palette-opt-"+f:null,P="Jump to a station, view, or action"+Fn;return He`
      <div class="cmdp-overlay" onMouseDown=${function(e){e.target===e.currentTarget&&C()}}>
        <div class="cmdp" role="dialog" aria-modal="true" aria-label="Command palette"
             onKeyDown=${D}>
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
            ${0===A.length?He`
              <li class="cmdp__empty" role="option" aria-disabled="true">No matches</li>
            `:A.map(function(e,t){var n=t===f,r="destination"===e.kind&&e.stationId&&b[e.stationId]||null,a=r&&r.health?Jn(String(r.health).toLowerCase()):null;return He`
                <li id=${"palette-opt-"+t}
                    role="option"
                    aria-selected=${n}
                    class=${"cmdp__opt"+(n?" is-active":"")}
                    onMouseEnter=${function(){p(t)}}
                    onClick=${function(){N(e)}}>
                  <span class="cmdp__kind" data-kind=${e.kind} aria-hidden="true">
                    ${"action"===e.kind?String.fromCharCode(9656):"app-link"===e.kind?String.fromCharCode(8599):He`<span class="cmdp__line" style=${"background:"+(e.lineColor||"transparent")}></span>`}
                  </span>
                  <span class="cmdp__label">${e.label}</span>
                  ${e.hint?He`<span class="cmdp__hint">${e.hint}</span>`:null}
                  ${a?He`<span class=${"cmdp__health cmdp__health--"+a.tone}>${a.txt}</span>`:null}
                </li>`})}
          </ul>

          <div class="cmdp__foot" aria-hidden="true">
            <span><kbd>${String.fromCharCode(8593)}</kbd><kbd>${String.fromCharCode(8595)}</kbd> move</span>
            <span><kbd>${String.fromCharCode(8629)}</kbd> open</span>
            <span><kbd>${String.fromCharCode(8984)}K</kbd> toggle</span>
          </div>
        </div>
      </div>
    `}He=e.bind(n);var Qn=["day","mtd","hy","ytd","1y"];function Zn(e){var t=Nr(e.p);return"bloomberg"===t.kind?He`<span class="ticker-cell">
        <span class=${"ticker "+t.pill}>${t.base}</span>
        <span class="ticker-sub ticker-sub--xch">${t.sub}</span>
      </span>`:"tase"===t.kind?He`<span class="ticker-cell">
        <span class="ticker ticker--he">${t.base}</span>
        <span class="ticker-sub ticker-sub--tase">TASE</span>
      </span>`:"empty"===t.kind?He`<span class="ticker">${t.base}</span>`:He`<span class=${"ticker "+t.pill}>${t.base}</span>`}function er(e){var t=e.cell,n="pf-metric pf-metric--"+t.cls+(e.active?" is-active":"");return He`<span class=${n}>${"closed"===t.kind?"closed "+t.text:t.text}</span>`}function tr(e){var t=e.e,n=Pr(t.quote);return He`
      <div class="pf-mover-row">
        <${Zn} p=${t.p} />
        ${Qn.map(function(r){var a="day"===r?!!t.quote:!!t.hist,i=Mr(t[r],t.ysym,a,"day"===r&&n);return He`<${er} key=${r} cell=${i} active=${r===e.rank} />`})}
      </div>`}function nr(e){var t=e.rankBy||"mtd",n=Ir(e.enriched||[],t);function r(e,n,r){return He`
        <div class=${"pf-movers__col "+r}>
          <div class="pf-movers__hdr">
            <span class="pf-movers__lbl">${e}</span>
            ${Qn.map(function(e){return He`<span key=${e} class=${"pf-movers__m"+(e===t?" is-active":"")}>${e.toUpperCase()}</span>`})}
          </div>
          ${n.length?n.map(function(e,n){return He`<${tr} key=${e.ysym||n} e=${e} rank=${t} />`}):He`<div class="pf-movers__none">none</div>`}
        </div>`}return He`
      <div class="pf-movers" aria-label="Top movers, weighted fund contribution">
        ${r("UP",n.ups,"pf-movers__col--up")}
        ${r("DOWN",n.downs,"pf-movers__col--down")}
      </div>`}He=e.bind(n);function rr(e){var t=e.model;return t?He`
      <div class="pf-chart" data-state="live">
        <div class="pf-chart__y" aria-hidden="true">
          ${t.yLabels.map(function(e,t){return He`<span key=${t}>${e}</span>`})}
        </div>
        <svg class="pf-chart__svg" viewBox=${"0 0 "+t.W+" "+t.H}
             preserveAspectRatio="none" role="img" aria-label="Fund return vs benchmark">
          <line x1="0" y1="0" x2=${t.W} y2="0" stroke="rgba(20,20,20,0.06)" />
          <line x1="0" y1=${t.zeroY} x2=${t.W} y2=${t.zeroY}
                stroke="rgba(20,20,20,0.18)" stroke-dasharray="2 4" />
          <line x1="0" y1=${t.H} x2=${t.W} y2=${t.H} stroke="rgba(20,20,20,0.06)" />
          <path d=${t.areaPath} fill="rgba(46,133,64,0.10)" />
          ${t.benchPoints?He`<polyline points=${t.benchPoints} fill="none"
                     stroke=${t.benchStrokeVar} stroke-width="1.5"
                     stroke-dasharray="4 3" opacity="0.75" />`:null}
          <polyline points=${t.fundPoints} fill="none" stroke="var(--up)" stroke-width="2" />
          <circle cx=${t.lastX} cy=${t.lastY} r="4" fill="var(--up)" />
        </svg>
        <div class="pf-chart__x" aria-hidden="true">
          ${t.xTicks.map(function(e,t){return He`<span key=${t}>${e}</span>`})}
        </div>
      </div>
    `:He`
        <div class="pf-chart" data-state=${e.failed?"failed":"loading"}>
          <svg class="pf-chart__svg" viewBox="0 0 1000 280" role="img"
               aria-label=${e.failed?"NAV history unavailable":"NAV history loading"}>
            <text x="500" y="140" text-anchor="middle" font-size="13" fill="rgba(20,20,20,0.4)">
              ${e.failed?"history unavailable":"history loading"}
            </text>
          </svg>
        </div>`}He=e.bind(n);var ar=[{key:"mtd",label:"MTD"},{key:"hy",label:"HY"},{key:"ytd",label:"YTD"}];function ir(e,t){return e?"mtd"===t?e.mtd_pct:"hy"===t?e.hy_pct:e.ytd_pct:null}function or(e){var t=e.e,n=t[e.tf],r=null!=n?wr(n):"na";return He`
      <div class="pfp-row">
        <${Zn} p=${t.p} />
        <span class=${"pfp-row__pct pf-metric--"+r}>${null!=n?kr(n):$r}</span>
      </div>`}function lr(){var e=re.portfolio.value,t=re.health.value||{},n=t.portfolio||(e?"live":"loading"),r=s("mtd"),a=r[0],i=r[1];if(!e&&"error"===n)return He`
        <section class="pfp" data-state="error" aria-label="Portfolio">
          <div class="pfp__msg" role="alert">portfolio unavailable</div>
        </section>`;if(!e)return He`
        <section class="pfp" data-state="loading" aria-label="Portfolio">
          <div class="pfp__msg" aria-busy="true">loading portfolio…</div>
        </section>`;var o=e.headline||{},l=Ur(e.as_of_iso),u=Br(e.data_freshness),c=Lr(e,{},{}),d=Ir(c,a),f=ir(o,a);function p(){return He`
        <div class="pfp__tfs" role="group" aria-label="Timeframe">
          ${ar.map(function(e){var t=a===e.key,n="hy"===e.key?"HY is a projected (predicted) return, not yet realized":null;return He`<button key=${e.key} type="button"
                class=${"pfp__tf"+(t?" is-active":"")}
                aria-pressed=${String(t)} title=${n}
                onClick=${function(){i(e.key)}}>${e.label}</button>`})}
        </div>`}function h(e,t,n){return He`
        <div class=${"pfp__col "+n}>
          <div class="pfp__col-hdr">${e}</div>
          ${t.length?t.map(function(e,t){return He`<${or} key=${e.ysym||t} e=${e} tf=${a} />`}):He`<div class="pfp__none">none</div>`}
        </div>`}return He`
      <section class="pfp" data-state="live" aria-label="Portfolio">
        <header class="pfp__head">
          <div class="pfp__id">
            <span class="pfp__nav">${null!=o.nav_rolling?xr(o.nav_rolling):$r}</span>
            <span class="pfp__sub">${[c.length+" positions",null!=e.num_lps?e.num_lps+" LPs":null].filter(Boolean).join(" · ")||"unavailable"}</span>
            <span class=${"pfp__fresh pfp__fresh--"+(l.cls||"ok")}>${l.text}</span>
            ${u?He`<span class=${"pfp__fresh pfp__fresh--"+u.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${u.text}</span>`:null}
          </div>
          <div class="pfp__perf">
            <span class=${"pfp__perf-pct "+(null!=f?wr(f):"na")}>${null!=f?kr(f):$r}</span>
            ${p()}
          </div>
          <button type="button" class="pfp__open" onClick=${function(){ae("portfolio")}}
                  aria-label="Open the full portfolio view">positions, chart ↗</button>
        </header>

        ${"loading"===n?He`<div class="pfp__banner" aria-busy="true">refreshing portfolio…</div>`:null}
        ${"error"===n?He`<div class="pfp__banner pfp__banner--err" role="alert">refresh failed · showing last-known</div>`:null}

        <div class="pfp__movers">
          ${h("Gainers",d.ups,"pfp__col--up")}
          ${h("Detractors",d.downs,"pfp__col--down")}
        </div>
      </section>`}He=e.bind(n);var sr=["1mo","3mo","ytd","1y","3y","max"],ur=["day","mtd","hy","ytd","1y"],cr=[{value:"",label:"None"},{value:"SPX",label:"SPX"},{value:"TASE35",label:"TASE 35"},{value:"USDILS",label:"USD/ILS"}];function dr(e){return null==e.v?He`<span class="pf-id__pct"></span>`:He`<span class=${"pf-id__pct "+wr(e.v)}>${kr(e.v)}</span>`}var fr=3e5,pr={key:null,ts:0,md:null};function hr(e){var t=(e&&e.positions||[]).map(Sr).filter(Boolean);return(e&&e.as_of_iso||"")+"|"+t.join(",")}function vr(e){return e&&pr.md?pr.key!==hr(e)||Date.now()-pr.ts>fr?null:pr.md:null}function mr(){var e=re.portfolio.value,t=re.health.value||{},n=t.portfolio||(e?"live":"loading"),r=s(function(){return Gr()}),a=r[0],o=r[1];function u(e,t){o(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return r[e]=t,Vr(r),r})}var c=s(function(){return vr(e)||{quotes:{},history:{},fx:null,fxFailed:!1,navHistory:null,navHistoryFailed:!1,bench:null}}),d=c[0],f=c[1];function p(e){f(function(t){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n})}var h=l(0);function v(){pe(Ue,Fe)}if(i(function(){e&&(pr={key:hr(e),ts:Date.now(),md:d})},[d,e]),i(function(){if(e){var t=++h.current,n=(e.positions||[]).map(Sr).filter(Boolean);n.length&&(Ue.quotes(n).then(function(e){t===h.current&&e&&p({quotes:e})}).catch(function(e){Fe("pf:quotes",e)}),Ue.history(n,"2y").then(function(e){t===h.current&&e&&p({history:e})}).catch(function(e){Fe("pf:history",e)})),Ue.fx().then(function(e){t===h.current&&p({fx:e,fxFailed:!e})}).catch(function(e){t===h.current&&p({fx:null,fxFailed:!0}),Fe("pf:fx",e)});var r=jr(e);r&&r.length?p({navHistory:r,navHistoryFailed:!1}):Ue.fundNavHistory().then(function(e){t===h.current&&p({navHistory:e||[],navHistoryFailed:!1})}).catch(function(e){t===h.current&&p({navHistory:[],navHistoryFailed:!0}),Fe("pf:fundNavHistory",e)})}},[e]),i(function(){var e=h.current,t=a.activeBenchmark;t?Ue.benchmarkHistory(t,a.activeRange).then(function(t){e===h.current&&p({bench:t})}).catch(function(t){e===h.current&&p({bench:null}),Fe("pf:benchmarkHistory",t)}):p({bench:null})},[a.activeBenchmark,a.activeRange,e]),!e&&"error"===n)return He`
        <div class="pf-view" data-state="error">
          <div class="pf-view__err" role="alert">portfolio unavailable ·${" "}
            <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button>
          </div>
        </div>`;if(!e)return He`
        <div class="pf-view" data-state="loading">
          <div class="pf-view__empty" aria-busy="true">loading portfolio…</div>
        </div>`;var m=Array.isArray(e.positions)?e.positions:[],g=Lr(e,d.quotes,d.history),_=e.headline||{},y=Ur(e.as_of_iso),b=Br(e.data_freshness),$=Kr(d.navHistory||[],d.bench,a.activeRange,a.activeBenchmark);function w(e){a.sortBy===e?u("sortDir","asc"===a.sortDir?"desc":"asc"):o(function(t){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.sortBy=e,n.sortDir="sym"===e?"asc":"desc",Vr(n),n})}var k=d.fx,x="unavailable";if(k)if(k.last_updated_iso){var S=new Date(k.last_updated_iso);x="spot · live "+String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}else x="spot";else d.fxFailed||(x="loading");return He`
      <div class="pf-view" data-state="live">
        <div class="pf-id">
          <div class="pf-id__main">
            <span class="pf-id__nav">${null!=_.nav_rolling?xr(_.nav_rolling):$r}</span>
            <span class="pf-id__sub">
              ${[null!=e.num_lps?e.num_lps+" LPs":null,g.length+" positions"].filter(Boolean).join(" · ")||"unavailable"}
            </span>
            <span class=${"pf-id__fresh pf-id__fresh--"+(y.cls||"ok")}>${y.text}</span>
            ${b?He`<span class=${"pf-id__fresh pf-id__fresh--"+b.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${b.text}</span>`:null}
          </div>
          <div class="pf-id__perf">
            <span class="pf-id__perf-lbl">YTD</span><${dr} v=${_.ytd_pct} />
            <span class="pf-id__perf-lbl">MTD</span><${dr} v=${_.mtd_pct} />
          </div>
          <div class="pf-id__fx" aria-label="USD ILS spot">
            <span class="pf-id__fx-spot">${k&&null!=k.spot?k.spot.toFixed(3):d.fxFailed?$r:String.fromCharCode(8230)}</span>
            <span class="pf-id__fx-sub">${"USD/ILS · "+x}</span>
            ${k&&null!=k.mtd_pct?He`<span class=${"pf-id__fx-pct "+wr(k.mtd_pct)}>${kr(k.mtd_pct)} mtd</span>`:null}
            ${k&&null!=k.ytd_pct?He`<span class=${"pf-id__fx-pct "+wr(k.ytd_pct)}>${kr(k.ytd_pct)} ytd</span>`:null}
          </div>
          <button type="button" class="pf-view__refreshbtn" title="Refresh portfolio"
                  aria-label="Refresh portfolio" onClick=${v}>↻</button>
        </div>

        ${"loading"===n?He`<div class="pf-banner pf-banner--soft">refreshing portfolio…</div>`:null}
        ${"error"===n?He`<div class="pf-banner pf-banner--err" role="alert">portfolio refresh failed · showing last-known ·${" "}
              <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button></div>`:null}

        ${0===m.length?He`<div class="pf-view__empty">no positions in this snapshot</div>`:He`
            <div class="pf-rank" role="group" aria-label="Rank movers by">
              ${ur.map(function(e){var t=a.rankBy===e,n="hy"===e?"HY is a projected (predicted) return, not yet realized":null;return He`<button key=${e} type="button"
                    class=${"pf-pill"+(t?" pf-pill--active":"")}
                    aria-pressed=${String(t)} title=${n}
                    onClick=${function(){u("rankBy",e)}}>${e.toUpperCase()}</button>`})}
            </div>
            <${nr} enriched=${g} rankBy=${a.rankBy} />
            <${yr}
              enriched=${g}
              sortBy=${a.sortBy} sortDir=${a.sortDir}
              showAll=${a.showAllPositions}
              onSort=${w}
              onToggleShowAll=${function(){u("showAllPositions",!a.showAllPositions)}} />
          `}

        <div class="pf-graph">
          <div class="pf-graph__controls">
            <div class="pf-graph__pills" role="group" aria-label="Chart range">
              ${sr.map(function(e){var t=a.activeRange===e;return He`<button key=${e} type="button"
                    class=${"pf-pill"+(t?" pf-pill--active":"")}
                    aria-pressed=${String(t)}
                    onClick=${function(){u("activeRange",e)}}>${e.toUpperCase()}</button>`})}
            </div>
            <select class="pf-graph__bench" aria-label="Benchmark"
                    value=${a.activeBenchmark}
                    onChange=${function(e){u("activeBenchmark",e.target.value)}}>
              ${cr.map(function(e){return He`<option key=${e.value||"none"} value=${e.value}>${e.label}</option>`})}
            </select>
            ${a.activeBenchmark&&!d.bench?He`<span class="pf-graph__benchwarn" role="status">benchmark unavailable</span>`:null}
          </div>
          <${rr} model=${$} failed=${d.navHistoryFailed} />
        </div>
      </div>
    `}He=e.bind(n);var gr=[{key:"sym",label:"Position"},{key:"alloc",label:"Alloc",title:"Allocation % is of gross position value, not the headline NAV"},{key:"day",label:"Day"},{key:"mtd",label:"MTD"},{key:"ytd",label:"YTD"},{key:"1y",label:"1Y"}];function _r(e){var t=e.cell;return He`<td class=${"num pf-td--"+t.cls}>${"closed"===t.kind?"closed "+t.text:t.text}</td>`}function yr(e){var t=e.enriched||[],n=e.sortBy||"alloc",r=e.sortDir||"desc",a=Rr(t,n,r),i=e.showAll?a:a.slice(0,12),o=l(null);function s(){var t=!e.showAll;if(e.onToggleShowAll&&e.onToggleShowAll(),!t&&o.current&&o.current.scrollIntoView)try{o.current.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){}}return t.length?He`
      <div class="pf-positions" ref=${o}>
        <table class="pf-positions__table">
          <thead>
            <tr>
              ${gr.map(function(t){var a=t.key===n,i=a?"asc"===r?"ascending":"descending":null;return He`<th key=${t.key} scope="col" aria-sort=${i}
                    class=${(a?"sorted":"")+(a&&"asc"===r?" asc":"")}>
                  <button type="button" class="pf-positions__sortbtn" title=${t.title||null}
                          onClick=${function(){e.onSort&&e.onSort(t.key)}}>
                    ${t.label}${a?"asc"===r?" "+String.fromCharCode(8593):" "+String.fromCharCode(8595):""}
                  </button>
                </th>`})}
            </tr>
          </thead>
          <tbody>
            ${i.map(function(e,t){var n=Pr(e.quote);return He`<tr key=${e.ysym||e.p&&e.p.name||t}>
                <th scope="row"><${Zn} p=${e.p} /></th>
                <td class="num">${(100*e.alloc).toFixed(1)+"%"}</td>
                <${_r} cell=${Mr(e.day,e.ysym,!!e.quote,n)} />
                <${_r} cell=${Mr(e.mtd,e.ysym,!!e.hist,!1)} />
                <${_r} cell=${Mr(e.ytd,e.ysym,!!e.hist,!1)} />
                <${_r} cell=${Mr(e["1y"],e.ysym,!!e.hist,!1)} />
              </tr>`})}
          </tbody>
        </table>
        <div class="pf-positions__foot">
          <span class="pf-positions__count">${i.length} shown of ${a.length}</span>
          ${a.length>12?He`<button type="button" class="pf-positions__expand" onClick=${s}>
                ${e.showAll?"Show top 12 only":"Show all "+a.length+" positions"}
              </button>`:null}
        </div>
      </div>
    `:He`<div class="pf-positions" ref=${o}>
        <div class="pf-positions__empty">portfolio unavailable</div>
      </div>`}var br={"AIXA GY":"AIXA.DE","EXA FP":"EXA.PA","AVIO IM":"AVIO.MI","7013 JP":"7013.T","PLUS LN":"PLUS.L","LSEG LN":"LSEG.L","FFH CN":"FFH.TO","FQT GY":"FQT.DE","K7X GR":"K7X.DE","RW5 GR":"RW5.DE"},$r=String.fromCharCode(8212);function wr(e){return e>=0?"up":"down"}function kr(e){return Ne(e)}function xr(e){var t=Number(e);if(!isFinite(t)||0===t)return $r;var n=Math.abs(t);return n>=1e9?"₪"+(t/1e9).toFixed(2)+"B":n>=1e6?"₪"+(t/1e6).toFixed(1)+"M":n>=1e3?"₪"+Math.round(t/1e3)+"K":"₪"+Math.round(t)}function Sr(e){if(!e||!e.sym)return null;var t=String(e.sym).trim();return t?br[t]||t:null}function Ar(e){if(!e)return"tase";var t=String(e).trim();if(!t)return"tase";if(t.indexOf(" ")<0)return"americas";var n=t.split(/\s+/)[1];switch(n){case"GY":case"GR":case"FP":case"IM":case"LN":return"europe";case"JP":return"asia";case"CN":return"americas";case"TA":return"tase";default:return"other"}}var Cr={americas:"ticker--blue",europe:"ticker--mustard",asia:"ticker--coral",other:"ticker--slate"};function Nr(e){var t=String(e&&e.sym||"").trim();if(t){var n=Ar(t),r=Cr[n]||"ticker--slate";if(t.indexOf(" ")>=0){var a=t.split(/\s+/);return{kind:"bloomberg",pill:r,base:a[0],sub:a[1]}}return{kind:"us",pill:r,base:t,sub:null}}var i=String(e&&e.name||"").trim();return i?{kind:"tase",pill:"ticker--he",base:i,sub:"TASE"}:{kind:"empty",pill:"ticker",base:String.fromCharCode(8230),sub:null}}function Dr(e,t){if(!e||!e.closes||!e.timestamps)return null;for(var n=null,r=-1/0,a=0;a<e.timestamps.length;a++){var i=1e3*e.timestamps[a];if(i>t)break;i>r&&(r=i,n=e.closes[a])}return n}function Er(e,t,n,r){if("day"===n)return e&&null!=e.change_pct?e.change_pct:null;if(!e||null==e.price)return null;var a,i=r||new Date;if("mtd"===n)a=new Date(i.getFullYear(),i.getMonth(),0).getTime();else if("ytd"===n)a=new Date(i.getFullYear()-1,11,31).getTime();else{if("1y"!==n)return null;a=i.getTime()-31536e6}var o=Dr(t,a);return null==o||0===o?null:(e.price-o)/o}function Pr(e){if(!e)return!1;var t=String(e.market_state||"").toUpperCase();return!(!t||"REGULAR"===t||"PRE"===t||"PREPRE"===t||"POST"===t||"POSTPOST"===t)}function Or(e,t){return t&&e&&null!=e.value?Number(e.value)/t:0}function Tr(e,t,n,r,a){var i=Sr(e),o=i?(n||{})[i]:null,l=i?(r||{})[i]:null,s=Or(e,t);function u(e){if(!i)return null;var t="day"===e?o?Er(o,l,"day",a):null:l?Er(o,l,e,a):null;return null==t?null:t*s}return{p:e,ysym:i,quote:o,hist:l,alloc:s,day:u("day"),mtd:null!=e.mtd_contrib_pct?e.mtd_contrib_pct:u("mtd"),hy:null!=e.hy_contrib_pct?e.hy_contrib_pct:null,ytd:null!=e.ytd_contrib_pct?e.ytd_contrib_pct:u("ytd"),"1y":u("1y")}}function Lr(e,t,n,r){var a=e&&e.positions||[],i=a.reduce(function(e,t){return e+(Number(t.value)||0)},0)||1;return a.filter(function(e){return(e.value||0)>0}).map(function(e){return Tr(e,i,t,n,r)})}function Ir(e,t){var n=t||"mtd",r=(e||[]).filter(function(e){return null!=e[n]}),a=r.filter(function(e){return e[n]>0}).sort(function(e,t){return t[n]-e[n]}).slice(0,4),i=r.filter(function(e){return e[n]<0}).sort(function(e,t){return e[n]-t[n]}).slice(0,4);return{ups:a,downs:i}}function Rr(e,t,n){var r=(e||[]).slice(),a="desc"===n?1:-1;return r.sort(function(e,r){if("sym"===t){var i=String(e.p.sym||e.p.name),o=String(r.p.sym||r.p.name);return("asc"===n?1:-1)*i.localeCompare(o)}var l="alloc"===t?e.alloc:e[t],s="alloc"===t?r.alloc:r[t];return null==l&&null==s?0:null==l?1:null==s?-1:a*(s-l)}),r}function Mr(e,t,n,r){return null!=e?r?{kind:"closed",text:kr(e),cls:"closed"}:{kind:"value",text:kr(e),cls:wr(e)}:t?n?{kind:"na",text:$r,cls:"na"}:{kind:"cold",text:String.fromCharCode(8230),cls:"cold"}:{kind:"na",text:$r,cls:"na"}}function Fr(e,t){var n=null!=t?t:Date.now();switch(e){case"1mo":return 26784e5;case"3mo":return 79488e5;case"ytd":return n-new Date(new Date(n).getFullYear(),0,1).getTime();case"1y":default:return 31536e6;case"3y":return 94608e6;case"max":return null}}function jr(e){return e&&Array.isArray(e.historical_nav)&&e.historical_nav.length?e.historical_nav.map(function(e){var t=String(e.month||"").split("-");if(2!==t.length)return null;var n=parseInt(t[0],10),r=parseInt(t[1],10);return isFinite(n)&&isFinite(r)?{year:n,month:r,label:e.month,nav_ils:Number(e.total_ils)||0}:null}).filter(function(e){return e&&e.nav_ils>0}):null}function Kr(e,t,n,r,a){if(e=e||[],!e.length)return null;var i=null!=a?a:Date.now(),o=Fr(n,i),l=e.filter(function(e){var t=new Date(e.year,e.month-1,28).getTime();return null==o||i-t<=o});l.length<2&&(l=e.slice(-Math.max(2,e.length)));var s=l[0].nav_ils,u=l.map(function(e){return(e.nav_ils-s)/s}),c=l.map(function(e){return new Date(e.year,e.month-1,28).getTime()}),d=null;if(t&&t.closes&&t.closes.length&&t.timestamps){for(var f=c[0]/1e3,p=[],h=0;h<t.timestamps.length;h++)t.timestamps[h]>=f&&null!=t.closes[h]&&p.push({ts:t.timestamps[h],close:t.closes[h]});if(p.length>=2){var v=p[0].close;d=p.map(function(e){return{t:1e3*e.ts,v:(e.close-v)/v}})}}var m=u.slice();d&&(m=m.concat(d.map(function(e){return e.v})));var g=Math.min.apply(null,m),_=Math.max.apply(null,m);g===_&&(g-=.01,_+=.01);var y=.1*(_-g);g-=y,_+=y;var b=c[0],$=c[c.length-1];d&&(b=Math.min(b,d[0].t),$=Math.max($,d[d.length-1].t)),$===b&&($=b+1);var w=1e3,k=280;function x(e){return(_-e)/(_-g)*k}function S(e){return(e-b)/($-b)*w}var A=x(0).toFixed(1),C=u.map(function(e,t){return S(c[t]).toFixed(1)+","+x(e).toFixed(1)}),N=S(c[0]).toFixed(1),D=S(c[c.length-1]).toFixed(1),E="M"+N+","+A+" L"+C.join(" L")+" L"+D+","+A+" Z",P=null;d&&(P=d.map(function(e){return S(e.t).toFixed(1)+","+x(e.v).toFixed(1)}).join(" "));for(var O=[],T=(_-g)/4,L=4;L>=0;L--)O.push(kr(g+T*L));for(var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=l.length,M=[],F=Math.max(1,Math.floor(R/6)),j=0;j<R;j+=F){var K=l[j];M.push(I[K.month-1]+(0===j?" '"+String(K.year).slice(2):""))}if((R-1)%F!=0){var U=l[R-1];M.push(I[U.month-1])}return{W:w,H:k,fundPoints:C.join(" "),areaPath:E,lastX:D,lastY:x(u[u.length-1]).toFixed(1),zeroY:A,benchPoints:P,benchStrokeVar:"USDILS"===r?"var(--mustard)":"var(--slate)",yLabels:O,xTicks:M}}function Ur(e,t){if(!e)return{text:"no Drive file registered",cls:"missing"};var n=new Date(e+"T00:00:00");if(isNaN(n.getTime()))return{text:"exported "+e,cls:""};var r=null!=t?t:Date.now(),a=Math.floor((r-n.getTime())/864e5),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o="exported "+n.getDate()+" "+i[n.getMonth()];return a>14?{text:o+" · "+a+"d stale",cls:"very-stale"}:a>7?{text:o+" · "+a+"d ago",cls:"stale"}:{text:o+(a>0?" · "+a+"d ago":" · today"),cls:""}}function Br(e){if(!e||!1!==e.ok)return null;var t=[];return e.flow_months_missing&&e.flow_months_missing.length&&t.push("flows incomplete for "+e.flow_months_missing.join(", ")),!1===e.naaman_ok&&t.push("NAV "+(null!=e.naaman_stale_months?e.naaman_stale_months+"mo stale":"stale")+(e.naaman_as_of?" (as of "+e.naaman_as_of+")":"")),!1===e.benchmarks_ok&&t.push("benchmarks unavailable"),{text:t.length?t.join(" · "):"data freshness degraded",cls:"very-stale"}}var Hr={activeRange:"1y",activeBenchmark:"",rankBy:"mtd",sortBy:"alloc",sortDir:"desc",showAllPositions:!1};function Gr(e){var t={};for(var n in Hr)Object.prototype.hasOwnProperty.call(Hr,n)&&(t[n]=Hr[n]);try{var r=e||("undefined"!=typeof localStorage?localStorage:null);if(!r)return t;var a=r.getItem("pf:prefs");if(!a)return t;var i=JSON.parse(a);["activeRange","activeBenchmark","rankBy","sortBy","sortDir"].forEach(function(e){"string"==typeof i[e]&&(t[e]=i[e])}),"boolean"==typeof i.showAllPositions&&(t.showAllPositions=i.showAllPositions)}catch(e){}return t}function Vr(e,t){try{var n=t||("undefined"!=typeof localStorage?localStorage:null);if(!n)return;n.setItem("pf:prefs",JSON.stringify({activeRange:e.activeRange,activeBenchmark:e.activeBenchmark,rankBy:e.rankBy,sortBy:e.sortBy,sortDir:e.sortDir,showAllPositions:e.showAllPositions}))}catch(e){}}He=e.bind(n);function Wr(e){var t=e.rows||[];return t.length?He`
      <div class="pj-bd__group">
        <div class="pj-bd__heading">${e.label}</div>
        ${t.map(function(t,n){return He`<div key=${n} class="pj-bd__row">
            <span class="pj-bd__lp">${t.lp}</span>
            <span class=${"pj-bd__amt pj-bd__amt--"+("dep"===e.kind?"up":"down")}>
              ${("dep"===e.kind?"+":String.fromCharCode(8722))+Qr(t.amount,e.sym)}
            </span>
          </div>`})}
        <div class="pj-bd__subtotal">Subtotal${" "}
          <b>${("dep"===e.kind?"+":String.fromCharCode(8722))+Qr(e.total,e.sym)}</b>
        </div>
      </div>`:null}function Yr(){var e=re.navWidget.value,t=re.transfers.value,n=ea(e,t&&t.monthLabel),r=s({state:"idle",net:null,agg:null}),a=r[0],o=r[1],u=s(""),c=u[0],d=u[1],f=s(!1),p=f[0],h=f[1],v=s(null),m=v[0],g=v[1],_=l(!1),y=l(null),b="ok"===a.state?a.net:n.net,$="ok"===a.state||("idle"===a.state||"loading"===a.state)&&n.netConfirmed;i(function(){if(!_.current){_.current=!0;var e=n.lastResult;if(e&&(y.current={display:e.display||null,closingMillions:"number"==typeof e.closingMillions?e.closingMillions:null},"number"==typeof e.closingMillions&&isFinite(e.closingMillions)&&e.closingMillions>0?d(String(e.closingMillions)):e.display&&g(e)),!n.projectingMonthSlash)return o({state:"no-month",net:null,agg:null}),void Fe("projecting:no-month",new Error("no projectingMonthSlash resolved; net stays unconfirmed"));o({state:"loading",net:null,agg:null}),Ue.monthlyTransferBreakdown(n.projectingMonthSlash).then(function(e){var t=na(e),n=ta(t.rows),r=ra(t.totals,n);o({state:"ok",net:r/1e6,agg:n})}).catch(function(e){o({state:"fail",net:null,agg:null}),Fe("projecting:breakdown",e)})}},[]);var w=aa(c,n.prev,b);function k(){if(w&&null!=w.pct){var e=ia(w.pct),t=y.current;if(!t||t.display!==e||t.closingMillions!==w.closing){var r=n.projectingMonthSlash;r?Ue.saveStoredRoughYield(r,{display:e,tag:"rough · pre-BDO",ts:(new Date).toISOString(),closingMillions:w.closing}).then(function(){y.current={display:e,closingMillions:w.closing}}).catch(function(e){Fe("projecting:save",e)}):Fe("projecting:save:badLabel",new Error('cannot derive MM/YYYY from "'+n.prevMonthLabel+'"'))}}}var x,S=Xr(n.prev,n.cur),A=Xr(b,n.cur);w?(x=(n.prevMonthLabel?n.prevMonthLabel+" · ":"")+"projecting · read as "+Xr(w.closing,n.cur),$||(x+=" · net flows unconfirmed")):x=n.prevMonthLabel?n.prevMonthLabel+" · projecting":"projecting";var C=qr,N="",D=null,E=null;w?(C=ia(w.pct)+($?"":" ?"),N=$?w.pct>=0?"is-up":"is-down":"is-provisional",$||(D="Net flows not confirmed by the breakdown service. This yield is provisional.")):m&&m.display&&(C=m.display,N=/^[-−]/.test(m.display)?"is-down":"is-up",D=(m.tag||"saved")+(m.ts?" · "+String(m.ts).slice(0,16).replace("T"," "):""),E=(m.tag||"rough · saved")+(m.ts?" "+String(m.ts).slice(0,10):""));var P=a.agg,O=e?"live":"loading";return He`
      <div class="pj-view" data-state=${O} data-confirmed=${String(!!$)}>
        ${e?He`
            <div class="pj-card">
              <div class="pj-card__meta">${x}</div>

              <div class="pj-formula" aria-label="Rough yield formula">
                <span class="pj-formula__num">
                  closing <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <span class="pj-formula__term">${S}</span>
                  <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <button type="button"
                          class=${"pj-formula__net"+(P?" has-bd":"")}
                          aria-expanded=${String(p)}
                          aria-label="Net flows breakdown"
                          aria-disabled=${String(!P)}
                          onClick=${function(){P&&h(!p)}}>${A}</button>
                  ${$?null:He`<span class="pj-net-warn" role="status"
                            title="Net flows not confirmed by the breakdown service. Rough yield is provisional.">${String.fromCharCode(9888)} unconfirmed</span>`}
                </span>
                <span class="pj-formula__rule" aria-hidden="true"></span>
                <span class="pj-formula__den">${S}</span>
              </div>

              ${"fail"===a.state?He`<div class="pj-banner pj-banner--err" role="alert">net flows unconfirmed · breakdown fetch failed · rough yield is provisional</div>`:null}
              ${"no-month"===a.state?He`<div class="pj-banner pj-banner--err" role="alert">no projecting month resolved · net flows unconfirmed</div>`:null}
              ${"loading"===a.state?He`<div class="pj-banner pj-banner--soft">confirming net flows…</div>`:null}

              ${p&&P?He`<div class="pj-bd" aria-label="Net flows breakdown detail">
                    <div class="pj-bd__title">${(n.prevMonthLabel||n.projectingMonthSlash||"")+" · net flows"}</div>
                    <${Wr} label="+ Subscriptions / increases (ILS)" kind="dep" rows=${P.items.filter(function(e){return"ILS"===e.currency&&"dep"===e.kind})} total=${P.ilsDep} sym="₪" />
                    <${Wr} label=${String.fromCharCode(8722)+" Redemptions (ILS)"} kind="red" rows=${P.items.filter(function(e){return"ILS"===e.currency&&"red"===e.kind})} total=${P.ilsRed} sym="₪" />
                    <${Wr} label="+ Subscriptions / increases (USD)" kind="dep" rows=${P.items.filter(function(e){return"USD"===e.currency&&"dep"===e.kind})} total=${P.usdDep} sym="$" />
                    <${Wr} label=${String.fromCharCode(8722)+" Redemptions (USD)"} kind="red" rows=${P.items.filter(function(e){return"USD"===e.currency&&"red"===e.kind})} total=${P.usdRed} sym="$" />
                    ${P.items.length?He`
                        <div class="pj-bd__nets">
                          ${0!==P.netIls||P.items.some(function(e){return"ILS"===e.currency})?He`<div class="pj-bd__subtotal">Net ILS <b>${(P.netIls<0?String.fromCharCode(8722):"+")+Qr(P.netIls,"₪")}</b></div>`:null}
                          ${0!==P.netUsd||P.items.some(function(e){return"USD"===e.currency})?He`<div class="pj-bd__subtotal">Net USD <b>${(P.netUsd<0?String.fromCharCode(8722):"+")+Qr(P.netUsd,"$")}</b></div>`:null}
                        </div>`:He`<div class="pj-bd__empty">No settled transfers logged for this month</div>`}
                    ${null!=b&&isFinite(b)?He`<div class="pj-bd__total">Net (formula) <b>${(b<0?String.fromCharCode(8722):"+")+Qr(1e6*Math.abs(b),"₪")}</b></div>`:null}
                  </div>`:null}

              <div class="pj-input-row">
                <label class="pj-input-lbl" for="pj-closing-input">closing</label>
                <input id="pj-closing-input" class="pj-input" type="text"
                       inputmode="decimal" autocomplete="off"
                       placeholder=${"closing in millions ("+n.cur+")"}
                       value=${c}
                       onInput=${function(e){d(e.target.value),g(null)}}
                       onBlur=${k} />
                <output class=${"pj-result "+N} for="pj-closing-input"
                        title=${D}
                        aria-label=${"Rough yield "+C+($?"":", provisional")}>${C}</output>
                ${E?He`<span class="pj-restored-badge">${E}</span>`:null}
              </div>
            </div>
          `:He`<div class="pj-view__empty">awaiting NAV widget…</div>`}
      </div>
    `}var qr=String.fromCharCode(8212);function Jr(e){if(!e)return null;var t=String(e).match(/([0-9.]+)\s*([MBK])?/i);if(!t)return null;var n=parseFloat(t[1]);if(!isFinite(n))return null;var r=(t[2]||"M").toUpperCase();return"B"===r?1e3*n:"K"===r?n/1e3:n}function zr(e){var t=String(e||"").match(/([₪$€£])/);return t?t[1]:"₪"}function Xr(e,t){if(null==e||!isFinite(e))return qr;if(0===e)return t+"0";var n=e<0?String.fromCharCode(8722):"",r=Math.abs(e);return r>=1e3?n+t+(r/1e3).toFixed(2)+"B":n+t+r.toFixed(1)+"M"}function Qr(e,t){if(null==e||!isFinite(e))return qr;if(0===e)return t+"0";var n=Math.abs(e);return n>=1e9?t+(n/1e9).toFixed(2)+"B":n>=1e6?t+(n/1e6).toFixed(2)+"M":n>=1e3?t+Math.round(n/1e3)+"K":t+Math.round(n)}function Zr(e){if(!e)return"";var t=String(e).trim();if(/^\d{1,2}\/\d{4}$/.test(t))return t.replace(/^(\d)\//,"0$1/");var n=t.match(/(\w+)\s+(\d{4})/);if(!n)return"";var r=["january","february","march","april","may","june","july","august","september","october","november","december"],a=r.indexOf(n[1].toLowerCase());return a<0?"":String(a+1).padStart(2,"0")+"/"+n[2]}function ea(e,t){var n=null,r=null,a=!1,i="₪",o="",l="",s=null;if(e){var u=e.closed||{},c=e.yield||{};if(i=zr(u.numeralDisplay)||zr(c.netFlowsDisplay)||"₪",o=c.projectingLabel||c.prevMonthLabel||u.label||"",l=c.projectingMonthSlash||Zr(c.projectingLabel)||Zr(c.prevMonthLabel)||"",!l&&t&&(l=Zr(t)),null!=c.prevAmountExact){var d=Number(c.prevAmountExact);isFinite(d)&&(n=d/1e6)}if(null==n&&c.prevAmountDisplay){var f=Jr(c.prevAmountDisplay);null!=f&&(n=f)}if(null==n)if(null!=u.numeralExact)n=Number(u.numeralExact)/1e6;else{var p=Jr(u.numeralDisplay);null!=p&&(n=p)}if(null!=c.netFlowsValue)r=Number(c.netFlowsValue)/1e6;else{var h=Jr(c.netFlowsDisplay);null!=h&&(r=h)}null!=r&&!0===c.netFlowsConfirmed&&(a=!0),s=c.lastResult||null}return{prev:n,net:r,netConfirmed:a,cur:i,prevMonthLabel:o,projectingMonthSlash:l,lastResult:s}}function ta(e){var t=0,n=0,r=0,a=0,i=[];return(e||[]).forEach(function(e){if(e&&"number"==typeof e.amount&&e.amount>0&&e.direction&&e.settled){var o=fi(e.label||e.name||e.lp||"?"),l="USD"===e.currency,s="redemption"===e.direction?"red":"dep";i.push({lp:o,amount:e.amount,currency:l?"USD":"ILS",kind:s}),l?"red"===s?a+=e.amount:r+=e.amount:"red"===s?n+=e.amount:t+=e.amount}}),i.sort(function(e,t){return t.amount-e.amount}),{ilsDep:t,ilsRed:n,usdDep:r,usdRed:a,netIls:t-n,netUsd:r-a,items:i}}function na(e){var t=e&&Array.isArray(e.rows)?e.rows:Array.isArray(e)?e:[],n=e&&e.totals||{};return{rows:t,totals:n}}function ra(e,t){return e&&"number"==typeof e.netConverted&&isFinite(e.netConverted)?e.netConverted:e&&"number"==typeof e.netIls&&isFinite(e.netIls)?e.netIls:t?t.netIls:0}function aa(e,t,n){var r=String(null==e?"":e).replace(/[^0-9.]/g,""),a=parseFloat(r);if(isNaN(a)||a<=0||null==t||t<=0)return null;var i=!1;a>1e4&&(a/=1e6,i=!0);var o=null==n?0:n,l=a/(t+o)-1;return{closing:a,pct:l,rescaled:i}}function ia(e){var t=e>=0?"+":"";return t+(100*e).toFixed(2)+"%"}He=e.bind(n);var oa=Be,la=6e4,sa={fetchedAt:0};function nt(e){var t=s(0);i(function(){var n=e.map(function(e){return e.subscribe(function(){t[1](function(e){return e+1})})});return function(){n.forEach(function(e){try{e()}catch(e){}})}},[])}function ua(){var e=re.schedule.value;nt([re.silentSignals]);var t=re.silentSignals&&re.silentSignals.value||[],n=t.map(function(e,t){return{kind:"signal",id:"signal:"+(e.key||t),title:e.label||"Cross-tool signal",track:String.fromCharCode(8252),openUrl:e.gmailUrl||null}}),r=s({fetching:!1,error:null,fetchedAt:sa.fetchedAt}),a=r[0],o=r[1],u=s(0),c=(u[0],u[1]),d=s({}),f=d[0],p=d[1],h=s({}),v=h[0],m=h[1],g=s({}),_=g[0],y=g[1],b=l({}),$=s(null),w=$[0],k=$[1],x=l(null),S=s({}),A=S[0],C=S[1],N=s({}),D=N[0],E=N[1],P=l(null),O=l(0);function T(e){return function(t){var n={};for(var r in t)n[r]=t[r];return n[e]=!0,n}}function L(e){return function(t){var n={};for(var r in t)n[r]=t[r];return delete n[e],n}}function I(e){var t=++O.current;o(function(e){return{fetching:!0,error:null,fetchedAt:e.fetchedAt}}),Ue.scheduleState({}).then(function(e){t===O.current&&(e?(re.schedule.value=e,sa.fetchedAt=Date.now(),o({fetching:!1,error:null,fetchedAt:sa.fetchedAt})):o(function(e){return{fetching:!1,error:"schedule returned no state",fetchedAt:e.fetchedAt}}))}).catch(function(n){t===O.current&&(Fe("schedule:fetch:"+(e||""),n),o(function(e){return{fetching:!1,error:n&&n.message||String(n),fetchedAt:e.fetchedAt}}))})}function R(e){P.current&&clearTimeout(P.current),P.current=setTimeout(function(){P.current=null,I(e||"debounced")},600)}function M(e){var t=re.schedule.value;t&&(re.schedule.value={asOf:t.asOf,tasks:(t.tasks||[]).filter(function(t){return t.id!==e}),events:t.events||[],board:(t.board||[]).filter(function(t){return!("task"===t.kind&&t.id===e)})})}function F(e,t){var n=re.schedule.value;n&&(re.schedule.value={asOf:n.asOf,tasks:(n.tasks||[]).map(function(n){return n&&n.id===e?Object.assign({},n,{title:t}):n}),events:n.events||[],board:(n.board||[]).map(function(n){return n&&"task"===n.kind&&n.id===e?Object.assign({},n,{title:t}):n})})}function j(e){e&&e.id&&!f[e.id]&&!v[e.id]&&(p(T(e.id)),Ue.completeTask(e.id).then(function(t){if(!t||!1===t.ok)return p(L(e.id)),void oa("Could not complete: "+(t&&t.error||"unknown"),"error");M(e.id),p(L(e.id)),oa("✓ "+(e.title||"Done"),"success"),R("completed")}).catch(function(t){p(L(e.id)),Fe("schedule:complete",t),oa("Could not confirm completion, restored the task","error")}))}function K(e){var t=b.current;t[e]&&(clearTimeout(t[e]),delete t[e]),y(L(e))}function U(e){if(e&&e.id&&!f[e.id]&&!v[e.id]){if(!_[e.id])return y(T(e.id)),void(b.current[e.id]=setTimeout(function(){delete b.current[e.id],y(L(e.id))},3e3));K(e.id),m(T(e.id)),Ue.removeTask(e.id).then(function(t){if(!t||!1===t.ok)return m(L(e.id)),void oa("Could not delete: "+(t&&t.error||"unknown"),"error");M(e.id),m(L(e.id)),oa("Deleted "+(e.title||"task"),"success"),R("deleted")}).catch(function(t){m(L(e.id)),Fe("schedule:delete",t),oa(t&&t.rpcTimeout?"Could not confirm delete, restored the task":"Server error deleting task","error")})}}function B(e){if(e&&e.id&&!D[e.id]&&!f[e.id]&&!v[e.id]){var t=e.when?e.when.substring(0,10):"",n=document.createElement("input");n.type="date",n.value=t||"",n.className="sched-row__reschedule-input",n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var r=!1,a=!1;n.addEventListener("change",function(){r=!0;var a=n.value||"";i(),a&&a!==t&&(E(T(e.id)),Ue.updateTask(e.id,{due:a}).then(function(t){E(L(e.id)),t&&!1!==t.ok?(oa("Rescheduled to "+a,"success"),R("rescheduled")):oa("Could not reschedule: "+(t&&t.error||"unknown"),"error")}).catch(function(t){E(L(e.id)),Fe("schedule:reschedule",t),oa("Server error rescheduling","error")}))}),n.addEventListener("cancel",i),n.addEventListener("blur",function(){setTimeout(function(){r||i()},200)}),setTimeout(i,8e3);try{n.showPicker?n.showPicker():n.focus()}catch(e){n.focus()}}function i(){a||(a=!0,n.parentNode&&document.body.removeChild(n))}}function H(e){!e||!e.id||A[e.id]||f[e.id]||v[e.id]||w!==e.id&&(x.current={id:e.id,prev:e.title||"",done:!1},k(e.id))}function G(e){var t=x.current;if(t&&!t.done){t.done=!0,k(null);var n=String(null==e?"":e).trim();if(n&&n!==t.prev){var r=t.id,a=t.prev;F(r,n),C(T(r)),Ue.updateTask(r,{title:n}).then(function(e){if(C(L(r)),!e||!1===e.ok)return F(r,a),void oa("Rename failed: "+(e&&e.error||"unknown"),"error");oa("Renamed","success"),R("renamed")}).catch(function(e){C(L(r)),F(r,a),Fe("schedule:rename",e),oa("Server error renaming","error")})}}}function V(){var e=x.current;e&&!e.done&&(e.done=!0,k(null))}i(function(){var e=!!re.schedule.value&&sa.fetchedAt>0&&Date.now()-sa.fetchedAt<la;e||I("mount");var t=setInterval(function(){"undefined"!=typeof document&&document.hidden||c(function(e){return e+1})},3e4);return function(){clearInterval(t),P.current&&clearTimeout(P.current);var e=b.current;for(var n in e)e[n]&&clearTimeout(e[n]);b.current={}}},[]);var W,Y=Date.now();function q(t){var n=_a(e,t),r=t.openUrl||(n?ga(n.notes):null),a=!!_[t.id];return He`
        <span class="sched-row__acts">
          ${r?He`<a class="sched-row__open" href=${r} target="_blank" rel="noopener"
                      aria-label=${'Open the linked thread for "'+(t.title||"task")+'"'}>Open</a>`:null}
          ${"task"===t.kind&&t.id?He`<button type="button" class="sched-row__check"
                      disabled=${!!f[t.id]||!!v[t.id]}
                      aria-label=${'Mark "'+(t.title||"task")+'" done'}
                      onClick=${function(){j(t)}}>✓</button>`:null}
          ${"task"===t.kind&&t.id?He`<button type="button" class=${"sched-row__del"+(a?" is-armed":"")}
                      disabled=${!!f[t.id]||!!v[t.id]}
                      title=${a?"Click again to delete":""}
                      aria-label=${a?'Confirm delete "'+(t.title||"task")+'". Press again to delete, Escape to cancel':'Delete "'+(t.title||"task")+'"'}
                      onClick=${function(){U(t)}}
                      onKeyDown=${function(e){"Escape"===e.key&&_[t.id]&&(e.stopPropagation(),K(t.id))}}
                      >×</button>`:null}
        </span>`}function J(e,t){var n="task"===e.kind;return n&&e.id&&w===e.id?He`
          <input type="text" class="sched-row__rename-input" dir="auto"
                 value=${e.title||""}
                 aria-label=${'Rename "'+(e.title||"task")+'"'}
                 ref=${function(e){e&&!e.dataset.focused&&(e.dataset.focused="1",e.focus(),e.select())}}
                 onKeyDown=${function(e){"Enter"===e.key?(e.preventDefault(),G(e.target.value)):"Escape"===e.key&&(e.stopPropagation(),V())}}
                 onBlur=${function(e){G(e.target.value)}} />`:n&&e.id?He`
          <span class=${"sched-row__title sched-row__title--edit"+(A[e.id]?" is-saving":"")}
                dir="auto" role="button" tabindex="0"
                title="Double-click to rename"
                aria-label=${'"'+(e.title||t)+'". Press Enter to rename'}
                onDblClick=${function(){H(e)}}
                onKeyDown=${function(t){"Enter"===t.key&&(t.preventDefault(),H(e))}}>${e.title||t}</span>`:He`<span class="sched-row__title" dir="auto">${e.title||t}</span>`}function z(e){var t="task"===e.kind,n=e.when?new Date(e.when):null,r=n&&n.getTime()<Y,a=n?da(e.when,Y):e.dueRelative||"",i=fa(a),o=t&&!!e.id,l=He`
        <span class=${"sched-row__time"+(r?" is-past":"")}>${n?ha(n):String.fromCharCode(8212)}</span>
        <span class="sched-row__date">${n?ma(n,Y):""}</span>`;return He`
        <div key=${e.kind+":"+e.id}
             class=${"sched-row"+(t&&e.isOverdue?" is-overdue":"")+(f[e.id]||v[e.id]?" is-completing":"")}>
          ${o?He`<span class=${"sched-row__timewrap sched-row__timewrap--edit"+(D[e.id]?" is-saving":"")}
                      role="button" tabindex="0" title="Click to reschedule"
                      aria-label=${'Reschedule "'+(e.title||"task")+'"'}
                      onClick=${function(){B(e)}}
                      onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),B(e))}}>${l}</span>`:He`<span class="sched-row__timewrap">${l}</span>`}
          <span class=${"sched-row__track sched-row__track--"+(t?"task":"event")}>
            <span aria-hidden="true">${t?"•":String.fromCharCode(9670)}</span>
            ${e.track||(t?"A":"M")}
          </span>
          <span class="sched-row__titlewrap">
            ${J(e,"(untitled)")}
            ${e.platform?He`<span class="sched-row__platform">${e.platform}</span>`:null}
            ${t&&e.isOverdue?He`<span class="sched-row__overdue">overdue</span>`:null}
          </span>
          <span class=${"sched-row__rel"+(i?" is-"+i:"")}>${a}</span>
          ${q(e)}
        </div>`}function X(e){var t="signal"===e.kind?"sched-row__track--signal":"sched-row__track--task";return He`
        <div key=${"u:"+e.id}
             class=${"sched-row sched-row--undated"+(f[e.id]||v[e.id]?" is-completing":"")}>
          <span class=${"sched-row__track "+t}>${e.track||"A"}</span>
          <span class="sched-row__titlewrap">
            ${J(e,"(untitled task)")}
            ${e.platform?He`<span class="sched-row__platform">${e.platform}</span>`:null}
          </span>
          ${q(e)}
        </div>`}if(a.error&&!e)W=He`
        <div class="sched-error" role="alert">
          <div class="sched-error__title">Schedule unavailable</div>
          <div class="sched-error__msg">${a.error}</div>
          <button type="button" class="sched-error__retry" onClick=${function(){I("retry")}}>Retry</button>
        </div>`;else if(e){var Q=ca(e.board),Z=Q.dated,ee=Q.undated;W=He`
        ${Z.length||ee.length||n.length?Z.length?Z.map(z):He`<div class="sched-empty">Nothing scheduled in the next 7 days. Undated tasks below.</div>`:He`<div class="sched-empty">
              <div class="sched-empty__title">No tasks or events.</div>
            </div>`}
        ${ee.length?He`<div class="sched-undated">
              <div class="sched-undated__hdr">undated</div>
              ${ee.map(X)}
            </div>`:null}
        ${n.length?He`<div class="sched-crosstool">
              <div class="sched-crosstool__hdr">cross-tool signals · ${n.length}</div>
              ${n.map(X)}
            </div>`:null}
      `}else W=He`
        <div class="sched-loading" aria-busy="true">
          <span class="sched-loading__spin" aria-hidden="true">↻</span> Loading Schedule
        </div>`;var te="";if(e){te=(e.tasks||[]).length+" tasks · "+(e.events||[]).length+" events";var ne=pa(a.fetchedAt,Y);ne&&(te+="  "+ne)}else te=a.error?"unavailable":"loading";return He`
      <div class="sched-view" data-state=${e?"live":a.error?"error":"loading"}>
        <header class="sched-view__hdr">
          <h2 class="sched-view__title">Departures</h2>
          <span class="sched-view__meta">${te}</span>
          <button type="button" class=${"sched-view__refresh"+(a.fetching?" is-refreshing":"")}
                  title="Refresh schedule" aria-label="Refresh schedule"
                  onClick=${function(){I("manual")}}>↻</button>
        </header>
        <div class="sched-board">${W}</div>
      </div>
    `}function ca(e){var t=[],n=[];return(Array.isArray(e)?e:[]).forEach(function(e){e&&e.when?t.push(e):e&&n.push(e)}),{dated:t,undated:n}}function da(e,t){if(!e)return"";var n=new Date(e);if(isNaN(n.getTime()))return"";var r=null!=t?t:Date.now(),a=Math.round((n.getTime()-r)/6e4),i=Math.abs(a);if(i<1)return"now";if(i<60)return a>0?"in "+i+"m":i+"m ago";var o=Math.round(i/60);if(o<24)return a>0?"in "+o+"h":o+"h ago";var l=Math.round(o/24);return l<14?a>0?"in "+l+"d":l+"d ago":n.toISOString().substring(0,10)}function fa(e){return"now"===e?"now":e&&/^in \d+m$/.test(e)?"soon":""}function pa(e,t){if(!e)return"";var n=null!=t?t:Date.now(),r=n-e;if(r<9e4)return"";var a=Math.round(r/1e3);return a<120?"· "+a+"s stale":"· "+Math.round(a/60)+"m stale"}function ha(e){return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")}var va=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function ma(e,t){var n=new Date(null!=t?t:Date.now()),r=e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate();return r?"today":va[e.getDay()]+" "+e.getDate()+"/"+(e.getMonth()+1)}function ga(e){var t=String(e||"").match(/https?:\/\/[^\s"'<>)\]]+/i);return t?t[0]:null}function _a(e,t){if(!e||!Array.isArray(e.tasks)||!t||"task"!==t.kind)return null;for(var n=0;n<e.tasks.length;n++)if(e.tasks[n]&&e.tasks[n].id===t.id)return e.tasks[n];return null}He=e.bind(n);function ya(e){var t=e.row,n=e.rowKey,r=e.editedAmount,a=e.actions||{},o=s(!1),u=o[0],c=o[1],d=s(!1),f=d[0],p=d[1],h=l(null),v=Ti(t,r),m=v.isPending||null!=r&&""!==r;function g(e){e&&e.stopPropagation(),m&&c(!0)}function _(e){var t=String(e).replace(/[,\s]/g,"");return/^\d+(\.\d+)?$/.test(t)}function y(){var e=h.current,r=e?String(e.value).trim():"";if(!r||_(r))if(p(!1),c(!1),r){var i=r.replace(/[,\s]/g,""),o=parseFloat(i);a.commitAmount&&a.commitAmount(t,n,o)}else a.clearAmount&&a.clearAmount(n);else p(!0)}function b(e){"Enter"===e.key?(e.preventDefault(),e.target.blur()):"Escape"===e.key&&(e.preventDefault(),p(!1),c(!1))}i(function(){if(u&&h.current)try{h.current.focus(),h.current.select()}catch(e){}},[u]);var $="tx-amt"+(v.isPending?" is-pending":"")+(r?" tx-amt--edited":"")+(m?" tx-amt--editable":"");if(u){var w=r&&/\d/.test(String(r))?String(r):"",k="tx-amt-err-"+String(n||"row");return He`
        <div class=${$}>
          <input ref=${h} type="text" class="tx-amt__input" placeholder="amount…"
                 inputMode="decimal" value=${w}
                 aria-invalid=${f?"true":null}
                 aria-describedby=${f?k:null}
                 onBlur=${y} onKeyDown=${b}
                 onInput=${f?function(){p(!1)}:null}
                 onClick=${function(e){e.stopPropagation()}} />
          ${f?He`<span id=${k} class="tx-amt__err" role="alert">Numbers only. Not saved.</span>`:null}
        </div>`}var x="tx-amt__cc"+(!1===v.currencyKnown&&v.currencySymbol?" tx-amt__cc--unknown":""),S=!1===v.currencyKnown&&v.currencySymbol?"Unrecognized currency. Verify the unit before wiring.":null;return He`
      <div class=${$} role=${m?"button":null} tabindex=${m?"0":null}
           onClick=${g}
           onKeyDown=${m?function(e){"Enter"===e.key&&g(e)}:null}>
        <span class=${x} title=${S}>${v.currencySymbol||""}</span>
        <span class="tx-amt__val">${v.amtText}</span>
      </div>
    `}He=e.bind(n);function ba(){return He`
      <div class="tx-calm" role="status">
        <div class="tx-calm__mark" aria-hidden="true">✓</div>
        <div class="tx-calm__line">All caught up. No transfers in motion.</div>
        <div class="tx-calm__sub">New Gmail suggestions land here as they arrive.</div>
      </div>
    `}He=e.bind(n);function $a(e){var t=e.stats||{};function n(e,t,n){return He`
        <div class=${"tx-hero__cell"+(n?" tx-hero__cell--"+n:"")}>
          <span class="tx-hero__num">${null==t?0:t}</span>
          <span class="tx-hero__lbl">${e}</span>
        </div>`}return He`
      <div class="tx-hero" role="group" aria-label="Transfer counts">
        ${n("active",t.active)}
        ${n("in flight",t.inFlight)}
        ${n("awaiting Avi",t.awaitingAvi,"mustard")}
        ${n("ready",t.ready,"kelly")}
      </div>
    `}He=e.bind(n);var wa={drafted:{title:"Drafted",sub:"חדש",hairline:"ink",calm:null},atAvi:{title:"At Avi",sub:"נשלח לאבי",hairline:"mustard",calm:"no one awaiting Avi · all caught up"},approved:{title:"Approved",sub:"מאושר",hairline:"kelly",calm:"nothing ready to wire right now"},transferred:{title:"Transferred",sub:"הועברו",hairline:"sage",calm:null,collapsible:!0}},ka={};function xa(e){var t={},n=[];return e.forEach(function(e){var r=pi(e);t[r]||(t[r]=[],n.push(r)),t[r].push(e)}),n.map(function(e){return{name:e,rows:t[e]}})}function Sa(e){var t=e.group,n=e.keyOf,r=e.actions,a=e.flaggedOf,i=e.onToggleFlag,o=e.marksOf,l=s(!1),u=l[0],c=l[1];if(1===t.rows.length){var d=t.rows[0],f=n(d);return He`<${Va} row=${d} rowKey=${f} actions=${r}
                    flagged=${a(f)} onToggleFlag=${i}
                    manualMarks=${o(f)} />`}var p=t.rows[0],h=n(p);return He`
      <${Va} row=${p} rowKey=${h} count=${t.rows.length} isParent=${!0}
         expanded=${u} onToggleGroup=${function(){c(!u)}}
         actions=${r} flagged=${a(h)} onToggleFlag=${i} manualMarks=${o(h)} />
      ${t.rows.slice(1).map(function(e){var t=n(e);return He`<${Va} row=${e} rowKey=${t} isChild=${!0} expanded=${u}
                      actions=${r} flagged=${a(t)} onToggleFlag=${i} manualMarks=${o(t)} />`})}
    `}function Aa(e){var t=e.band,n=wa[t]||{title:t,hairline:"ink",calm:null},r=e.rows||[],a=e.keyOf||function(e){return e&&e.rowKey||""},i=s(function(){return Object.prototype.hasOwnProperty.call(ka,t)?ka[t]:"transferred"===t}),o=i[0];function l(e){ka[t]=e,i[1](e)}if(e.skeleton)return He`
        <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline} aria-busy="true">
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?He`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__rows">
            <div class="tx-row tx-row--skeleton"></div>
            <div class="tx-row tx-row--skeleton"></div>
          </div>
        </section>`;if(!r.length)return n.calm?He`
        <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline+" is-calm"}>
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?He`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__calm">${n.calm}</div>
        </section>`:null;var u=Mi(t,r,a),c=xa(u);function d(t){return!!e.flaggedOf&&e.flaggedOf(t)}function f(t){return e.marksOf?e.marksOf(t):null}var p=null;if(n.collapsible){var h=Ii(u,function(e){var t=a(e);return t?R("tx:amt:"+t):null});p=u.length+" wires"+(h?" · "+h:"")}return He`
      <section class=${"tx-band tx-band--"+t+" tx-band--"+n.hairline+(n.collapsible&&o?" is-collapsed":"")}>
        <header class=${"tx-band__hdr"+(n.collapsible?" tx-band__hdr--toggle":"")}
                role=${n.collapsible?"button":null} tabindex=${n.collapsible?"0":null}
                onClick=${n.collapsible?function(){l(!o)}:null}
                onKeyDown=${n.collapsible?function(e){"Enter"!==e.key&&" "!==e.key||l(!o)}:null}>
          <h3 class="tx-band__title">${n.title}</h3>
          ${n.sub?He`<span class="tx-band__sub">${n.sub}</span>`:null}
          ${p?He`<span class="tx-band__summary">${p}</span>`:null}
          ${n.collapsible?He`<span class="tx-band__chevron">${o?"▾":"▴"}</span>`:He`<span class="tx-band__count">${u.length}</span>`}
        </header>
        ${n.collapsible&&o?null:He`<div class="tx-band__rows">
              ${c.map(function(t){return He`<${Sa} group=${t} keyOf=${a} actions=${e.actions}
                              flaggedOf=${d} onToggleFlag=${e.onToggleFlag} marksOf=${f} />`})}
            </div>`}
      </section>
    `}He=e.bind(n);var Ca="#B6AE99",Na="#F2EDE0",Da=["","SENT (link sent)","SIGNED (LP completed)","WIRED (money landed)"],Ea=[63,190,317];function Pa(e){var t=!!e.sigDone,n=!!e.wireDone,r=e.color||"#1F5DB0",a=e.tooltipBase||"",i=e.manualMarks||null,o=[!0,t,n],l=t,s=t&&n;function u(e){var t=o[e-1],n=(t?"✓ ":"○ ")+Da[e];return a&&(n+="\n\n"+a),n}function c(t,n){n&&(n.preventDefault(),n.stopPropagation()),2===t&&e.onSign?e.onSign():3===t&&e.onWire&&e.onWire()}function d(e,t,n,a){return n?He`<line key=${a} x1=${e} y1="13" x2=${t} y2="13" stroke=${r} stroke-width="4" />`:He`<line key=${a} x1=${e} y1="13" x2=${t} y2="13" stroke=${Ca} stroke-width="1.5" stroke-dasharray="3 4" />`}function f(e){var t=Ea[e-1],n=o[e-1],a=2===e||3===e,i=u(e),l=a?"stop-hit stop-hit--clickable":"stop-hit",s=a?"stop-dot stop-dot--clickable":"stop-dot",d=a?Da[e]+(n?" · done. Activate to undo.":" · not done. Activate to mark."):null;return He`
        <g>
          <rect class=${l} data-stop=${e} x=${t-14} y="0" width="28" height="26"
                fill="transparent" role=${a?"button":null}
                tabindex=${a?"0":null}
                aria-label=${d}
                onClick=${a?function(t){c(e,t)}:null}
                onKeyDown=${a?function(t){"Enter"!==t.key&&" "!==t.key||c(e,t)}:null}>
            <title>${i}</title>
          </rect>
          ${n?He`<circle class=${s} data-stop=${e} cx=${t} cy="13" r="6.5" fill=${r}
                    onClick=${a?function(t){c(e,t)}:null}><title>${i}</title></circle>`:He`<circle class=${s} data-stop=${e} cx=${t} cy="13" r="6.5" fill=${Na} stroke=${Ca} stroke-width="2"
                    onClick=${a?function(t){c(e,t)}:null}><title>${i}</title></circle>`}
        </g>`}return He`
      <svg class="subway" viewBox="0 0 380 26" preserveAspectRatio="none">
        ${d(Ea[0],Ea[1],l,"s1")}
        ${d(Ea[1],Ea[2],s,"s2")}
        ${f(1)} ${f(2)} ${f(3)}
        ${e.overridden?He`<circle class="stop-override-mark" cx="362" cy="6" r="3.5" fill="#C24A56"><title>Wire marked locally. Click the dot to clear.</title></circle>`:null}
        ${i&&i.sig?He`<text class="stop-manual-mark" x=${Ea[1]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"SIGN flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
        ${i&&i.wire?He`<text class="stop-manual-mark" x=${Ea[2]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"WIRE flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
      </svg>
    `}He=e.bind(n);var Oa=6048e5;function Ta(e){return"tx:sg:skip:"+e}function La(e){var t=R(Ta(e));if(!t)return!1;var n=parseInt(t,10);return!!n&&Date.now()-n<Oa}function Ia(e){F(Ta(e),String(Date.now()))}var Ra={};function Ma(e){return String(e||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Fa(e,t){var n,r=String(e||""),a={},i=[];if((t||[]).forEach(function(e){var t=String(e||"").split(/\s+/)[0];t&&!a[t]&&(a[t]=!0,i.push(t))}),!i.length)return[{text:r,mark:!1}];try{n=new RegExp("("+i.map(Ma).join("|")+")","g")}catch(e){return[{text:r,mark:!1}]}return r.split(n).map(function(e,t){return{text:e,mark:t%2==1}}).filter(function(e){return""!==e.text})}function ja(e){return"tx-sg-det-"+String(e||"").replace(/[^A-Za-z0-9_-]/g,"-")}function Ka(e){var t=e.s||{},n=t.evidence&&"object"==typeof t.evidence?t.evidence:{},r=t.confidence||{};return He`
      <div class="tx-suggestion__details" id=${ja(t.id)}>
        ${r.reasoning&&r.reasoning.length?He`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Confidence</span>
              <span class="tx-suggestion__det-val">${(null!=r.score?r.score+" · ":"")+r.reasoning.join(", ")}</span>
            </div>`:null}
        ${n.matchedPhrases&&n.matchedPhrases.length?He`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Matched</span>
              <span class="tx-suggestion__det-val">
                ${n.matchedPhrases.map(function(e){return He`<span class="tx-pill tx-pill--pos">${e}</span> `})}
              </span>
            </div>`:null}
        ${n.negativeSignals&&n.negativeSignals.length?He`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Against</span>
              <span class="tx-suggestion__det-val">
                ${n.negativeSignals.map(function(e){return He`<span class="tx-pill tx-pill--neg">${e&&e.label||""}<span class="tx-pill__sub">${e&&e.kind||""}</span></span> `})}
              </span>
            </div>`:null}
        ${n.snippet?He`<div class="tx-suggestion__det-row tx-suggestion__det-row--snippet">
              <span class="tx-suggestion__det-lbl">Snippet</span>
              <span class="tx-suggestion__det-val tx-suggestion__det-snippet">
                ${Fa(n.snippet,n.matchedPhrases).map(function(e){return e.mark?He`<mark>${e.text}</mark>`:e.text})}
              </span>
            </div>`:null}
        ${n.subject?He`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Subject</span>
              <span class="tx-suggestion__det-val">${n.subject}</span>
            </div>`:null}
      </div>
    `}function Ua(e){var t=e.rpc||{},n=e.toast||function(){},r=e.audit||function(){},a=e.patchRowKey||function(e){return e},i=e.isWired||function(){return!1},o=s({}),l=o[0],u=o[1],c=s({}),d=c[0],f=c[1],p=s({}),h=p[0],v=p[1],m=(e.suggestions||[]).filter(function(e){return!(!e||!e.id)&&(!l[e.id]&&(!La(e.id)&&!i(e)))});if(!m.length)return null;m.forEach(function(e){if(!Ra[e.id]){Ra[e.id]=!0;try{r("shown",e)}catch(e){}}});var g=m.filter(function(e){return e.confidence&&"high"===e.confidence.tier});function _(e){v(Ba(h,e.id,!h[e.id]))}function y(r){r=a(r),r.rowKey?(f(Ba(d,r.id,!0)),n("Applying · "+(r.lpName||""),"success"),t.applyTransferSuggestion(r).then(function(t){if(f(Ba(d,r.id,!1)),t&&t.ok){var a=t.noop?"Already marked · "+(r.lpName||""):"Done · "+(r.lpName||"")+" marked wired";n(a,"success");try{V(r.rowKey),Y(r.rowKey)}catch(e){}e.onApplied&&e.onApplied(r),u(Ba(l,r.id,!0))}else n("Failed · "+(t&&t.error||"unknown"),"error")},function(e){f(Ba(d,r.id,!1)),n("Failed · "+(e&&e.message?e.message:"server error"),"error")})):n("Cannot match · "+(r.lpName||"")+" (no local row)","error")}function b(){var r=g.map(a).filter(function(e){return e.rowKey});r.length?(n("Applying "+r.length+" …","success"),t.applyMultipleTransferSuggestions(r).then(function(t){if(t&&Array.isArray(t.results)){var a={};t.results.forEach(function(e){e&&e.id&&e.result&&e.result.ok&&(a[e.id]=!0)});var i=Ha(l),o=0;r.forEach(function(t){if(a[t.id]){try{V(t.rowKey),Y(t.rowKey)}catch(e){}e.onApplied&&e.onApplied(t),i[t.id]=!0,o++}}),u(i);var s=r.length-o;o&&n("Applied "+o+(1===o?" wire":" wires"),"success"),s&&n("Batch · "+s+" failed, kept visible","error")}else n("Batch failed · "+(t&&t.error||"unknown"),"error")},function(e){n("Batch failed · "+(e&&e.message?e.message:"server error"),"error")})):n("No matchable high-confidence suggestions","error")}function $(e){Ia(e.id),r("skipped",e),u(Ba(l,e.id,!0)),n("Hidden for 7 days · "+(e.lpName||""),"success")}return He`
      <div class="tx-suggestions" role="region" aria-label="Transfer suggestions">
        <div class="tx-suggestions__bar">
          <div class="tx-suggestions__summary">
            <b>${m.length}</b> ${1===m.length?"suggestion":"suggestions"}
            ${g.length?He` · <span class="tx-conf tx-conf--high tx-conf--inline">${g.length} high</span>`:null}
          </div>
          ${g.length>=2?He`<button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                     onClick=${b}>Approve all high (${g.length})</button>`:null}
        </div>
        ${m.map(function(e){var t=e.evidence&&"object"==typeof e.evidence?e.evidence:null,n=t?(t.fromName?t.fromName+" · ":"")+String(t.dateIso||"").slice(0,10):"string"==typeof e.evidence?e.evidence:"";t&&!n&&(n=t.subject||"");var r=t&&(t.subject||t.snippet)||"",a=t&&t.threadUrl||e.threadUrl||"",i=!!h[e.id];return He`
            <div class=${"tx-suggestion"+(d[e.id]?" is-applying":"")+(i?" is-expanded":"")}>
              <div class="tx-suggestion__body">
                <div class="tx-suggestion__lp">
                  <bdi>${e.lpName||e.label||"(unnamed)"}</bdi>
                  ${e.confidence&&e.confidence.tier?He`<span class=${"tx-conf tx-conf--"+e.confidence.tier}>${e.confidence.tier}</span>`:null}
                </div>
                <div class="tx-suggestion__change">${e.changeLabel||e.change||"mark wired"}</div>
                ${n||a?He`<div class="tx-suggestion__evidence"
                          onClick=${function(t){t&&t.target&&"A"===t.target.tagName||_(e)}}>
                      ${a&&/^https?:\/\//i.test(a)?He`<a href=${a} target="_blank" rel="noopener" title=${r}>${n||"open thread ↗"}</a>`:He`<span title=${r}>${n}</span>`}
                    </div>`:null}
              </div>
              <div class="tx-suggestion__actions">
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                        onClick=${function(){y(e)}}>approve</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip"
                        onClick=${function(){$(e)}}>skip</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip tx-suggestion__btn--ghost"
                        title="Explain confidence"
                        aria-expanded=${i?"true":"false"}
                        aria-controls=${ja(e.id)}
                        onClick=${function(){_(e)}}>Why?</button>
              </div>
              ${i?He`<${Ka} s=${e} />`:null}
            </div>`})}
      </div>
    `}function Ba(e,t,n){var r=Ha(e);return r[t]=n,r}function Ha(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}He=e.bind(n);function Ga(e){var t=String(e||"");return/^https?:\/\//i.test(t)}function Va(e){var t=e.row,n=e.rowKey,r=e.count||1,a=e.actions||{},i=te(t,n),o=wi(t,n),l=Ci(t),s=Ni(t),u=Li(t),c=n?R("tx:amt:"+n):null,d=!!n&&null!=H(n),f=Si(t,n),p=t&&t.rowDeepLink,h="tx-row"+(e.isParent?" tx-row--parent":"")+(e.isChild?" tx-row--child":"")+(e.expanded?" is-expanded":"");function v(){e.isParent&&e.onToggleGroup&&e.onToggleGroup()}function m(t){t.stopPropagation(),e.onToggleFlag&&e.onToggleFlag(n)}return He`
      <div class=${h} hidden=${!(!e.isChild||e.expanded)||null}
           role=${e.isParent?"button":null}
           tabindex=${e.isParent?"0":null}
           aria-expanded=${e.isParent?e.expanded?"true":"false":null}
           onClick=${v}
           onKeyDown=${e.isParent?function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),v())}:null}>
        <div class="tx-lp">
          <div class="tx-name">
            <span class="tx-dir" style=${"color:"+l} aria-hidden="true">${s}</span>
            <bdi class="tx-name-bdi">${pi(t)}</bdi>
            ${u?He`<span class="tx-kind">${u}</span>`:null}
            ${r>1?He`<span class="tx-count">×${r}</span>`:null}
            <span class=${"tx-flag"+(e.flagged?" is-on":"")}
                  role="button" tabindex="0"
                  title=${e.flagged?"Marked for review · click to clear":"Mark for review"}
                  onClick=${m}
                  onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key||m(e)}}>⚑</span>
            ${o&&o.label?He`<span class=${"tx-stage tx-stage--"+o.tier} title=${o.blocker}>${o.label}</span>`:null}
          </div>
          ${o&&o.blocker?He`<div class="tx-state tx-state--prose">
                     ${o.blocker}
                     ${f&&p&&Ga(p)?He`<a class="tx-triage" href=${p} target="_blank" rel="noopener"
                                title="Money moved before paperwork done. Triage." onClick=${function(e){e.stopPropagation()}}> ↗</a>`:null}
                   </div>`:null}
          ${t.note||t.subtitle||t.lastNote?He`<div class="tx-note"><span class="arr">→</span>${" "+(t.note||t.subtitle||t.lastNote)}</div>`:null}
        </div>

        <div class=${"tx-track"+(d?" tx-track--overridden":"")}
             onClick=${function(e){e.stopPropagation()}}>
          <${Pa}
            sigDone=${i.signed}
            wireDone=${i.wired}
            color=${l}
            overridden=${d}
            manualMarks=${e.manualMarks}
            tooltipBase=${Ri(t,n)}
            onSign=${function(){a.signDot&&a.signDot(t,n)}}
            onWire=${function(){a.wireDot&&a.wireDot(t,n)}} />
        </div>

        <${ya} row=${t} rowKey=${n} editedAmount=${c} actions=${a} />
      </div>
    `}He=e.bind(n);function Wa(e){return"transfers:payload:"+String(e||"current")}var Ya=[2e3,4e3,6e3];function qa(e){var t=M(Wa(e));return t?Math.max(0,Date.now()-(t.ts||0)):0}var Ja=function(){for(var e=void 0!==In&&In||[],t=0;t<e.length;t++)if(e[t]&&"transfer-tracker"===e[t].id)return e[t].href||null;return null}(),za={scrollY:null},Xa=["drafted","atAvi","approved","transferred"],Qa=["drafted","atAvi","approved"],Za=String.fromCharCode(8212)+" departed "+String.fromCharCode(8212);function ei(e,t){var n=Ti(e,R("tx:amt:"+t)),r=n.amtText?(n.currencySymbol||"")+n.amtText:"",a=te(e,t),i=["Sent"];a.signed&&i.push("Signed"),a.wired&&i.push("Wired");var o=[pi(e)];if(e.subKind)o.push(/רווחי\s*הון/.test(e.subKind)?"capital gains tax":/דמי\s*הצלחה/.test(e.subKind)?"success fee":e.subKind);else{var l=Li(e);l&&o.push(l)}return r&&o.push(r),o.push(i.join(", ")),o.join(" · ")}function ti(e,t,n){var r=Mi(e,t||[],n),a={},i=[];r.forEach(function(e){var t=pi(e);a[t]||(a[t]=[],i.push(t)),a[t].push(e)});var o=[];return i.forEach(function(e){a[e].forEach(function(e){o.push(e)})}),o}function ni(e,t,n){var r=[];Qa.forEach(function(n){ti(n,e[n],t).forEach(function(e){r.push(e)})});var a=ti("transferred",e.transferred,t);if(!r.length&&!a.length)return{text:"",count:0};var i=["Transfers · "+(n||"")];return r.forEach(function(e){i.push(ei(e,t(e)))}),a.length&&(i.push(Za),a.forEach(function(e){i.push(ei(e,t(e)))})),{text:i.join("\n"),count:r.length+a.length}}function ri(){var e=re.transfers.value,t=re.suggestions.value,n=e&&e.monthLabel||"current",r=s(function(){if(e)return{state:"LIVE",data:e,watchdogPhase:null,ageMs:0};var t=R(Wa(n));return t?{state:"CACHED",data:t,watchdogPhase:null,ageMs:qa(n)}:{state:"LOADING",data:null,watchdogPhase:null,ageMs:0}}),a=r[0],o=r[1],u=s(0),c=(u[0],u[1]);function d(){c(function(e){return e+1})}var f=l([]),p=l(0);i(function(){if(e&&Array.isArray(e.rows)){try{F(Wa(n),e)}catch(e){}o({state:"LIVE",data:e,watchdogPhase:null,ageMs:0})}},[e,n]),i(function(){try{B()}catch(e){}try{e&&ee({transfers:e})}catch(e){}},[]),i(function(){if("undefined"!=typeof window){var e=za.scrollY;if(null!=e&&e>0){try{window.scrollTo(0,e)}catch(e){}try{requestAnimationFrame(function(){try{window.scrollTo(0,e)}catch(e){}})}catch(e){}}return function(){try{za.scrollY=window.pageYOffset||0}catch(e){}}}},[]);var h=s(null),v=h[0],m=h[1],g=s(!1),_=g[0],y=g[1],b=l(0);function $(){f.current.forEach(function(e){try{clearTimeout(e)}catch(e){}}),f.current=[]}function w(){var e=se();p.current=e,$();var t=!(!a.data&&!R(Wa(n)));o(function(e){return{state:t?"CACHED":"LOADING",data:e.data,watchdogPhase:null,ageMs:e.ageMs}}),f.current.push(setTimeout(function(){p.current===e&&o(function(e){return oi(e,{watchdogPhase:"slow"})})},Ya[0])),f.current.push(setTimeout(function(){if(p.current===e){var t=R(Wa(n));o(function(e){return t?{state:"STALE",data:t,watchdogPhase:"fallback",ageMs:qa(n)}:oi(e,{watchdogPhase:"fallback"})})}},Ya[1])),f.current.push(setTimeout(function(){p.current===e&&(R(Wa(n))||a.data||o(function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:e.ageMs}}))},Ya[2])),Ue.bootstrap({lite:!1}).then(function(t){if(p.current===e){if($(),!t||!t.transfers){var r=R(Wa(n));return o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:qa(n)}:function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:0}}),void Fe("transfers:refresh:empty",new Error("no transfers in refetch"))}ue(t,e);try{F(Wa(n),t.transfers)}catch(e){}o({state:"LIVE",data:t.transfers,watchdogPhase:null,ageMs:0})}},function(t){if(p.current===e){$();var r=R(Wa(n));o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:qa(n)}:function(e){return{state:"ERROR",data:e.data,watchdogPhase:"error",ageMs:0}}),Fe("transfers:refresh",t)}})}i(function(){var e=++b.current;try{Ue.rowsWithManualEvents(30).then(function(t){b.current===e&&(m(t&&"object"==typeof t?t:{}),y(!0))},function(){b.current===e&&(m({}),y(!1))})}catch(e){}return function(){b.current++}},[]),i(function(){return $},[]);var k=l(null);k.current||(k.current=Wi({rpc:Ue,toast:Be,toastUndo:ii,audit:function(e,t){try{Ue.recordTransferSuggestionEvent(e,t).catch(function(){})}catch(e){}},repaint:d,failBus:"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,confirmSigClear:function(e){return"undefined"==typeof window||!window.confirm||window.confirm("Clear signed status"+(e?" for "+e:"")+"? This clears the signature cell in the tracker.")}}));var x=k.current,S=a.data||e||null,A=S&&Array.isArray(S.rows)?S.rows:[],C=v&&_?v:S&&S.manualMarks||{},N=Ei(A,n),D=si(),E=!1,P=N.map(function(e){var t=ui(e,D);return ci(e)&&(E=!0),{row:e,rowKey:t}});if(E)try{console.warn("[atriumX] a transfer row has no server rowKey; using unstable display-field key. Local overrides may orphan on edit.")}catch(e){}var O=new Map;function T(e){return O.has(e)?O.get(e):ui(e,null)}P.forEach(function(e){O.set(e.row,e.rowKey)});var L={drafted:[],atAvi:[],approved:[],transferred:[]};P.forEach(function(e){var t=Ai(e.row,e.rowKey);(L[t]||L.drafted).push(e.row)});var I={active:L.drafted.length+L.atAvi.length+L.approved.length,inFlight:L.drafted.length,awaitingAvi:L.atAvi.length,ready:L.approved.length},M=Qa.every(function(e){return 0===L[e].length});function j(e){return!!e&&q(e)}function K(e){e&&(J(e),d())}function U(e){return e&&C&&C[e]||null}function H(e){if(!e||e.rowKey)return e;var t=String(e.lpName||"").toLowerCase().trim();if(!t)return e;for(var n=-1,r=0,a=0;a<P.length;a++){var i=P[a].row,o=String(i.engName||i.label||i.name||i.lpName||"").toLowerCase().trim();o&&o===t&&(r++,n=a)}if(1!==r)return e;var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(l[s]=e[s]);return l.rowKey=P[n].rowKey,l}function V(e){if(!e||!e.rowKey)return!1;for(var t=0;t<P.length;t++)if(P[t].rowKey===e.rowKey)return te(P[t].row,e.rowKey).wired;return!1}function W(e){e&&e.rowKey&&(G(e.rowKey,3),d())}function Y(){var e=ni(L,T,n);e.text?Ce(e.text,function(t){t?Be("Copied · "+e.count+" transfers","success"):Be("Copy failed","error")},"transfers:copy:fallback"):Be("Nothing to copy","error")}var z=ai(a,w),X="LOADING"===a.state&&!S;return He`
      <div class="tx-view" data-fetch-state=${a.state}>
        <header class="tx-view__hdr">
          <h2 class="tx-view__title">Transfers</h2>
          <span class="tx-view__month">${li(n)}</span>
          <button type="button" class="tx-view__copy" title="Copy the list as shown" aria-label="Copy transfers list" onClick=${Y}>⧉</button>
          <button type="button" class="tx-view__refresh" title="Refresh transfers" aria-label="Refresh transfers" onClick=${w}>↻</button>
        </header>

        <${$a} stats=${I} />

        ${z}

        <${Ua}
          suggestions=${t||S&&S.suggestions||[]}
          rpc=${Ue}
          toast=${Be}
          audit=${function(e,t){try{Ue.recordTransferSuggestionEvent(e,t).catch(function(){})}catch(e){}}}
          patchRowKey=${H}
          isWired=${V}
          onApplied=${W} />

        ${X?Xa.map(function(e){return He`<${Aa} band=${e} skeleton=${!0} />`}):He`
            ${Xa.map(function(e){return He`<${Aa} band=${e} rows=${L[e]} keyOf=${T}
                            actions=${x} flaggedOf=${j} onToggleFlag=${K} marksOf=${U} />`})}
            ${M&&0===L.transferred.length?He`<${ba} />`:null}
          `}

        ${Ja?He`<div class="tx-view__builder">
              <a class="tx-builder-link" href=${Ja} target="_blank" rel="noopener">Open the transfer-form builder ↗</a>
            </div>`:null}
      </div>
    `}function ai(e,t){var n=e.state,r=e.watchdogPhase;return"CACHED"===n&&"slow"===r?He`<div class="tx-banner tx-banner--soft">showing cached · refreshing…</div>`:"LOADING"===n&&"slow"===r?He`<div class="tx-banner tx-banner--soft">fetching latest…</div>`:"STALE"===n?He`<div class="tx-banner tx-banner--warn">showing last cached · <button type="button" class="tx-banner__retry" onClick=${t}>retry ↻</button></div>`:"ERROR"===n?He`<div class="tx-banner tx-banner--err">transfers fetch slow · <button type="button" class="tx-banner__retry" onClick=${t}>retry ↻</button></div>`:null}function ii(e,t,n){if("undefined"!=typeof document){var r=document.getElementById("toast-stack");if(r){var a=n||6e3,i=document.createElement("div");i.className="toast-stack__item is-success";var o=document.createElement("span");o.textContent=e,i.appendChild(o);var l=document.createElement("span");l.textContent=" · ",l.style.opacity="0.5",i.appendChild(l);var s=document.createElement("button");s.type="button",s.className="toast__undo",s.textContent="UNDO";var u=!1;s.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),c();try{t&&t()}catch(e){}}),i.appendChild(s),r.appendChild(i),requestAnimationFrame(function(){i.classList.add("is-show")}),setTimeout(c,a)}else Be(e,"success")}function c(){if(!u){u=!0;try{i.classList.remove("is-show"),setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i)},250)}catch(e){}}}}function oi(e,t){var n={};for(var r in e)n[r]=e[r];for(var a in t)n[a]=t[a];return n}function li(e){var t=String(e||"").match(/^(\d{1,2})\/(\d{4})$/);if(!t)return String(e||"");var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=parseInt(t[1],10)-1;return(n[r]||t[1])+" "+t[2]}function si(){return{n:0}}function ui(e,t){if(!e)return"";var n=e.rowKey||e.masterRid||e.rid||e.uid;if(n)return String(n);var r=fi(e.label||e.name)+":"+(e.kind||"")+":"+(e.startDateIso||"");if(!e.startDateIso){var a=t||{n:0};r+=":#"+a.n++}return r}function ci(e){return!e||!(e.rowKey||e.masterRid||e.rid||e.uid)}var di={"עדי רמניק":"Adi Ramnik","אלמוג חזון":"Almog Hazon","אקסל":"EXCEL","תיגבור קבו":"TIGBUR"};function fi(e){var t=String(null==e?"":e).trim();return t?t.indexOf("להשלים")>=0?"NAV":di[t]?di[t]:t:"NAV"}function pi(e){if(!e)return"";if(e.engName&&String(e.engName).trim())return String(e.engName).trim();var t=String(null==(e.label||e.name)?"":e.label||e.name).trim(),n=fi(e.label||e.name);return"NAV"===n&&!t&&e.identityPending?"NAV (pending identity)":n}var hi=["paid to client","הועבר ללקוח","moved to trading","הועבר למסחר","בברוקר"];function vi(e){for(var t=String(e||""),n=0;n<hi.length;n++)if(t.indexOf(hi[n])>=0)return!0;return!1}function mi(e){var t=String(e&&e.type||e&&e.kind||"").toLowerCase();return t.indexOf("הצטר")>=0||t.indexOf("join")>=0||t.indexOf("הגדל")>=0||t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0}var gi=["נשלח","נוצר","sent","emailed","נפתח","פתוח","בתהליך","open","viewed","clicked"];function _i(e){for(var t=String(e||""),n=0;n<gi.length;n++)if(t.indexOf(gi[n])>=0)return!0;return!1}function yi(e){var t=String(e&&e.amountText||"").trim();if(!t)return!1;if(e&&e.needsNavNumbers)return!1;if(t.indexOf("להשלים")>=0)return!1;var n=t.replace(/[₪$€£,\s]/g,""),r=parseFloat(n);return isFinite(r)?0!==r:/\d/.test(t)}var bi=["received in transit","התקבל במעבר","in transit"];function $i(e){for(var t=String(e||""),n=0;n<bi.length;n++)if(t.indexOf(bi[n])>=0)return!0;return!1}function wi(e,t){var n=te(e,t),r=String(e&&e.execStatus||"").toLowerCase(),a=yi(e);if(ki(e))return{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+String(e&&e.amountText||"").trim()+'". Avi sends this figure from the struck NAV.'};if(vi(r)||n.wired&&a)return{stage:"done",label:"Done",tier:"done",blocker:"Settled. Money landed."};if(!n.signed){var i=String(e&&e.sigStatus||"").toLowerCase();return{stage:"awaiting-sig",label:"Awaiting signature",tier:"muted",blocker:_i(i)?"Link sent / opened, not signed yet.":"Not signed. No signature link evidence in the tracker yet."}}if(!a){var o=String(e&&e.amountText||"").trim();return o.indexOf("להשלים")>=0?{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+o+'". Avi sends this figure from the struck NAV.'}:{stage:"amount-missing",label:"Amount missing in tracker",tier:"amber",blocker:o?'Amount cell holds "'+o+'". Fill the amount, then it can wire.':"Amount cell is empty. Fill the amount, then it can wire."}}return mi(e)&&$i(r)?{stage:"funds-in",label:"Funds received",tier:"ready",blocker:"Money received. Funds in the account."}:mi(e)&&!n.wired?{stage:"awaiting-funds",label:"Awaiting funds in",tier:"muted",blocker:"Signed. Money not received yet."}:{stage:"ready",label:"Ready to wire",tier:"ready",blocker:"Signed, amount set. Ready to wire."}}function ki(e){return!(!e||!0!==e.needsNavNumbers)||String(e&&e.amountText||"").indexOf("להשלים")>=0}function xi(e,t){if(ki(e))return!1;var n=te(e,t);return n.signed&&n.wired}function Si(e,t){var n=te(e,t);return n.wired&&!n.signed}function Ai(e,t){if(xi(e,t))return"transferred";var n=wi(e,t);return"ready"===n.stage||"funds-in"===n.stage?"approved":"amount-missing"===n.stage?Si(e,t)||te(e,t).signed?"atAvi":"drafted":"awaiting-sig"===n.stage?Si(e,t)?"atAvi":"drafted":"atAvi"}function Ci(e){var t=String(e&&e.kind||"").toLowerCase();return t.indexOf("withdraw")>=0||t.indexOf("redem")>=0?"#C0202E":t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0||t.indexOf("subscrip")>=0?"#2E8540":"#1F5DB0"}function Ni(e){var t=String(e&&e.kind||"").toLowerCase();return t.indexOf("withdraw")>=0||t.indexOf("redem")>=0?"↑":t.indexOf("increase")>=0||t.indexOf("onboard")>=0||t.indexOf("sub")>=0||t.indexOf("subscrip")>=0?"↓":"·"}var Di=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ei(e,t){if(!Array.isArray(e))return[];var n=String(t||""),r=-1,a=-1,i=n.match(/^(\d{1,2})\/(\d{4})$/);if(i)r=parseInt(i[1],10)-1,a=parseInt(i[2],10);else{var o=n.match(/(\w+)\s+(\d{4})/);o&&(r=Di.indexOf(o[1]),a=parseInt(o[2],10))}if(r<0)return e.slice();var l=("0"+(r+1)).slice(-2)+"/"+a;return e.filter(function(e){if(e.monthTab)return e.monthTab===l;var t=String(e.startDateIso||e.startDate||"").match(/(\d{4})-(\d{2})/);if(!t)return!1;var n=parseInt(t[1],10),i=parseInt(t[2],10)-1;return n===a&&i===r})}var Pi=/[֐-׿]/;function Oi(e){var t=String(e||"").trim();return/^[\d.,\s]+$/.test(t)&&(t=""),!t||/ש["׳]?ח|שקל|ils|₪/i.test(t)?{symbol:"₪",known:!0}:/דולר|usd|\$/i.test(t)?{symbol:"$",known:!0}:/(יורו|אירו|eur|€)/i.test(t)?{symbol:"€",known:!0}:/(לירה|£|gbp)/i.test(t)?{symbol:"£",known:!0}:{symbol:t.slice(0,4),known:!1}}function Ti(e,t){var n=null!=t&&""!==t?String(t):String(e&&e.amountText||"").trim();if(!n)return{amtText:"",isPending:!0,currencySymbol:""};if(n.indexOf("להשלים")>=0)return{amtText:"NAV",isPending:!0,currencySymbol:""};if(Pi.test(n))return{amtText:"unparsed",isPending:!0,currencySymbol:""};if(!/\d/.test(n))return{amtText:n,isPending:!0,currencySymbol:""};var r=n.replace(/[₪$€£,\s]/g,""),a=parseFloat(r),i=isFinite(a)?Math.round(a).toLocaleString("en-US"):n,o=Oi(e&&e.currency);return{amtText:i,isPending:!1,currencySymbol:o.symbol,currencyKnown:o.known}}function Li(e){var t=String(e&&e.kind||"").toLowerCase().trim();return t?t.indexOf("carry")>=0?"carry":t.indexOf("tax")>=0?"tax":t.indexOf("redem")>=0?"redemption":t.indexOf("sub")>=0?"sub":t.indexOf("fo-pay")>=0?"fo":t.indexOf("rev")>=0?"rev":t.slice(0,8):""}function Ii(e,t){t=t||function(){return null};var n={};return(e||[]).forEach(function(e){var r=Ti(e,t(e));if(r&&!r.isPending){var a=parseFloat(String(r.amtText).replace(/,/g,""));if(isFinite(a)){var i=r.currencySymbol||"₪";n[i]=(n[i]||0)+a}}}),Object.keys(n).map(function(e){var t=n[e];return t>=1e6?e+(t/1e6).toFixed(1)+"M":t>=1e3?e+Math.round(t/1e3)+"K":e+Math.round(t)}).join(" · ")}function Ri(e,t){var n=String(e&&e.sigStatus||"").trim(),r=String(e&&e.execStatus||"").trim(),a=String(e&&e.amountText||"").trim(),i=/\d/.test(a),o=[];return n&&o.push("STATUS="+n),r&&o.push("EXEC="+r),i&&o.push("AMOUNT="+a),e&&e.isDone&&o.push("isDone=✓"),o.length?o.join(" · "):"no upstream signal yet"}function Mi(e,t,n){var r=(t||[]).slice();function a(e,t){return String(pi(e)).localeCompare(String(pi(t)),"he")}return n=n||function(e){return ui(e,null)},"atAvi"===e||"approved"===e?(r.sort(function(e,t){function r(e){var t=n(e),r=te(e,t);return r.signed&&!r.wired?0:r.signed||r.wired?2:1}var i=r(e),o=r(t);return i!==o?i-o:a(e,t)}),r):(r.sort(a),r)}Bt="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function Fi(e){return Bt&&"function"==typeof Bt.optimisticWrite?Bt.optimisticWrite(e):Gt(e)}function Gt(e){e=e||{};var t=e.failBus||null,n=e.source||"write:"+(e.key||"unknown");try{e.applyLocal&&e.applyLocal()}catch(e){}try{e.audit&&e.audit("applied")}catch(e){}var r=!1;function a(){if(!r){r=!0;try{e.audit&&e.audit("confirmed")}catch(e){}try{e.onConfirm&&e.onConfirm()}catch(e){}try{t&&t.resolve&&t.resolve(n)}catch(e){}}}function i(a){if(!r){r=!0;try{e.audit&&e.audit("reverted")}catch(e){}try{e.onRevert&&e.onRevert(a)}catch(e){}if(t)try{t.raise(n,a||new Error("write reverted"),{severity:"station",retry:e.retry||null})}catch(e){}}}try{e.rpc(function(e){e&&e.ok?a():i(new Error(e&&e.message||"server rejected write"))},function(e){i(e)})}catch(e){i(e)}return{confirm:a,revert:i,isSettled:function(){return r}}}var ji=600,Ki=new Map;function Ui(e,t,n){var r=e+":"+t,a="number"==typeof n?n:Date.now(),i=Ki.get(r);return null!=i&&a-i<ji||(Ki.set(r,a),!1)}function Bi(e){return String(e&&(e.engName||e.label||e.name||e.lpName)||"").trim()}var Hi="transfer-tracker",Gi={};function Vi(e,t,n){if(!e)return null;var r=n||t;return{raise:function(n,a,i){var o=a instanceof Error?a:new Error(String(null==a?"write reverted":a));try{o.message=t+" · "+(o.message||"write reverted")}catch(e){}return Gi[r]=!0,e.raise(Hi,o,i)},resolve:function(){for(var t in delete Gi[r],Gi)if(Object.prototype.hasOwnProperty.call(Gi,t))return!1;return!!e.resolve&&e.resolve(Hi)}}}function Wi(e){e=e||{};var t=e.rpc||{},n=e.toast||function(){},r=e.toastUndo||function(){},a=e.audit||function(){},i=e.repaint||function(){},o=e.failBus||null,l=e.now||function(){return Date.now()},s=e.confirmSigClear||function(){return!0};function u(e,s){if(!s)return!1;if(Ui(s,3,l()))return!1;var c=Bi(e),d=H(s),f=te(e,null).wired,p=3===d||null==d&&f;if(p)return G(s,1),i(),r("Unmarked wired (local) · "+c,function(){G(s,3),i()},6e3),!0;var h={id:"manual-wire-"+s,rowKey:s,lpName:c,change:"manual_wire_set",confidence:{tier:"manual",score:0}};return Fi({key:"tx:stop:"+s,applyLocal:function(){G(s,3),i()},audit:function(e){a(e||"applied",h)},rpc:function(e,n){t.setTransferStatus(s,"Wired").then(e,n)},onConfirm:function(){V(s),n("Synced · wired","success")},onRevert:function(e){V(s),i(),n("Save failed · "+Yi(e)+" · reverted","error")},retry:function(){u(e,s)},failBus:Vi(o,"wire "+s+(c?" ("+c+")":""),"transfers:wire:"+s),source:"transfers:wire:"+s}),r("Marked wired · "+c,function(){G(s,1),i()},6e3),!0}function c(e,u){if(!u)return!1;if(Ui(u,2,l()))return!1;var d=Bi(e),f=te(e,u).signed;if(f&&!s(d))return!1;var p=f?"":"הושלם",h=f?"0":"1",v=f?"הושלם":"",m=f?"1":"0",g={id:"manual-sig-"+u,rowKey:u,lpName:d,change:p?"manual_sig_set":"manual_sig_clear",confidence:{tier:"manual",score:0}},_=null;return Fi({key:"tx:sig:"+u,applyLocal:function(){W(u,h),i()},audit:function(e){a(e||"applied",g)},rpc:function(e,n){_=t.setTransferSigStatus(u,p),_.then(e,n)},onConfirm:function(){Y(u),n("Synced · "+(p?"signed":"unsigned"),"success")},onRevert:function(e){Y(u),i(),n("Save failed · "+Yi(e)+" · reverted","error")},retry:function(){c(e,u)},failBus:Vi(o,"sign "+u+(d?" ("+d+")":""),"transfers:sign:"+u),source:"transfers:sign:"+u}),r((p?"Marked signed · ":"Unmarked · ")+d,function(){W(u,m),i();var e=_||Promise.resolve();function n(){t.setTransferSigStatus(u,v).then(function(e){e&&e.ok&&Y(u)},function(){})}e.then(n,n)},6e3),!0}function d(e,r,a){if(r)if("number"==typeof a&&isFinite(a)){F("tx:amt:"+r,a),n("Saved locally · "+a,"success"),i();var l={rowKey:r,amount:a,monthTab:e&&e.monthTab,kind:e&&e.kind,lp:fi(e&&(e.label||e.name))},s="transfers:amount:"+r;t.setTransferAmount(l).then(function(e){if(e&&e.ok){if(j("tx:amt:"+r),n("Synced · "+a,"success"),i(),o)try{Vi(o,"amount "+r,s).resolve()}catch(e){}}else e&&"no-backend-writeback-yet"===e.reason||u(new Error(e&&e.message||e&&e.reason||"server rejected write"))},function(e){u(e)})}else n("Save failed · amount must be a number · not sent","error");function u(t){if(j("tx:amt:"+r),n("Save failed · "+Yi(t)+" · reverted","error"),i(),o)try{Vi(o,"amount "+r,s).raise(null,t,{severity:"station",retry:function(){d(e,r,a)}})}catch(e){}}}function f(e){e&&(j("tx:amt:"+e),i())}return{wireDot:u,signDot:c,commitAmount:d,clearAmount:f}}function Yi(e){return e&&e.message?e.message:"server error"}"function"==typeof c&&c(),"function"==typeof ce&&ce()}();
