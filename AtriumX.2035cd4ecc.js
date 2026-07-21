!function(){"use strict";!function(t){function e(e){var n=new Function("module","exports","define","return (function () {\n"+e+"\n}).call(this);");n.call(t,void 0,void 0,void 0)}e('!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,t,u,i,o,e,r,f,c,s,h,a,p=65536,v=1<<17,d={},y=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function g(n,l){for(var t in l)n[t]=l[t];return n}function b(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,t,u){var i,o,e,r={};for(e in t)"key"==e?i=t[e]:"ref"==e?o=t[e]:r[e]=t[e];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):u),"function"==typeof n&&null!=n.defaultProps)for(e in n.defaultProps)void 0===r[e]&&(r[e]=n.defaultProps[e]);return k(n,r,i,o,null)}function k(n,l,i,o,e){var r={type:n,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==e?++u:e,__i:-1,__u:0};return null==e&&null!=t.vnode&&t.vnode(r),r}function x(n){return n.children}function S(n,l){this.props=n,this.context=l}function C(n,l){if(null==l)return n.__?C(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return"function"==typeof n.type?C(n):null}function M(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return M(n)}}function P(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!T.__r++||e!==t.debounceRendering)&&((e=t.debounceRendering)||r)(T)}function T(){var n,l,u,i,e,r,c,s;for(o.sort(f);n=o.shift();)n.__d&&(l=o.length,i=void 0,r=(e=(u=n).__v).__e,c=[],s=[],u.__P&&((i=g({},e)).__v=e.__v+1,t.vnode&&t.vnode(i),O(u.__P,i,e,u.__n,u.__P.namespaceURI,32&e.__u?[r]:null,c,null==r?C(e):r,!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,z(c,i,s),i.__e!=r&&M(i)),o.length>l&&o.sort(f));T.__r=0}function $(n,l,t,u,i,o,e,r,f,c,s){var h,a,v,w,_,g=u&&u.__k||y,b=l.length;for(t.__d=f,I(t,l,g),f=t.__d,h=0;h<b;h++)null!=(v=t.__k[h])&&(a=-1===v.__i?d:g[v.__i]||d,v.__i=h,O(n,v,a,i,o,e,r,f,c,s),w=v.__e,v.ref&&a.ref!=v.ref&&(a.ref&&V(a.ref,null,v),s.push(v.ref,v.__c||w,v)),null==_&&null!=w&&(_=w),v.__u&p||a.__k===v.__k?f=H(v,f,n):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:w&&(f=w.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=f,t.__e=_}function I(n,l,t){var u,i,o,e,r,f=l.length,c=t.length,s=c,h=0;for(n.__k=[],u=0;u<f;u++)null!=(i=l[u])&&"boolean"!=typeof i&&"function"!=typeof i?(e=u+h,(i=n.__k[u]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?k(null,i,null,null,null):_(i)?k(x,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?k(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(r=i.__i=L(i,t,e,s))&&(s--,(o=t[r])&&(o.__u|=v)),null==o||null===o.__v?(-1==r&&h--,"function"!=typeof i.type&&(i.__u|=p)):r!==e&&(r==e-1?h--:r==e+1?h++:(r>e?h--:h++,i.__u|=p))):i=n.__k[u]=null;if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(o.__u&v)&&(o.__e==n.__d&&(n.__d=C(o)),q(o,o))}function H(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=H(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=C(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function L(n,l,t,u){var i=n.key,o=n.type,e=t-1,r=t+1,f=l[t];if(null===f||f&&i==f.key&&o===f.type&&0==(f.__u&v))return t;if(u>(null!=f&&0==(f.__u&v)?1:0))for(;e>=0||r<l.length;){if(e>=0){if((f=l[e])&&0==(f.__u&v)&&i==f.key&&o===f.type)return e;e--}if(r<l.length){if((f=l[r])&&0==(f.__u&v)&&i==f.key&&o===f.type)return r;r++}}return-1}function j(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||w.test(l)?t:t+"px"}function A(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||j(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||j(n.style,l,t[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=c,n.addEventListener(l,o?h:s,o)):n.removeEventListener(l,o?h:s,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t))}}function F(n){return function(l){if(this.l){var u=this.l[l.type+n];if(null==l.u)l.u=c++;else if(l.u<u.t)return;return u(t.event?t.event(l):l)}}}function O(n,l,u,i,o,e,r,f,c,s){var h,a,p,v,d,y,w,b,m,k,C,M,P,T,I,H,L=l.type;if(void 0!==l.constructor)return null;128&u.__u&&(c=!!(32&u.__u),e=[f=l.__e=u.__e]),(h=t.__b)&&h(l);n:if("function"==typeof L)try{if(b=l.props,m="prototype"in L&&L.prototype.render,k=(h=L.contextType)&&i[h.__c],C=h?k?k.props.value:h.__:i,u.__c?w=(a=l.__c=u.__c).__=a.__E:(m?l.__c=a=new L(b,C):(l.__c=a=new S(b,C),a.constructor=L,a.render=B),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),m&&null==a.__s&&(a.__s=a.state),m&&null!=L.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=g({},a.__s)),g(a.__s,L.getDerivedStateFromProps(b,a.__s))),v=a.props,d=a.state,a.__v=l,p)m&&null==L.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),m&&null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(m&&null==L.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||l.__v===u.__v)){for(l.__v!==u.__v&&(a.props=b,a.state=a.__s,a.__d=!1),l.__e=u.__e,l.__k=u.__k,l.__k.some(function(n){n&&(n.__=l)}),M=0;M<a._sb.length;M++)a.__h.push(a._sb[M]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),m&&null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,d,y)})}if(a.context=C,a.props=b,a.__P=n,a.__e=!1,P=t.__r,T=0,m){for(a.state=a.__s,a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),I=0;I<a._sb.length;I++)a.__h.push(a._sb[I]);a._sb=[]}else do{a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++T<25);a.state=a.__s,null!=a.getChildContext&&(i=g(g({},i),a.getChildContext())),m&&!p&&null!=a.getSnapshotBeforeUpdate&&(y=a.getSnapshotBeforeUpdate(v,d)),$(n,_(H=null!=h&&h.type===x&&null==h.key?h.props.children:h)?H:[H],l,u,i,o,e,r,f,c,s),a.base=l.__e,l.__u&=-161,a.__h.length&&r.push(a),w&&(a.__E=a.__=null)}catch(n){if(l.__v=null,c||null!=e){for(l.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;e[e.indexOf(f)]=null,l.__e=f}else l.__e=u.__e,l.__k=u.__k;t.__e(n,l,u)}else null==e&&l.__v===u.__v?(l.__k=u.__k,l.__e=u.__e):l.__e=N(u.__e,l,u,i,o,e,r,c,s);(h=t.diffed)&&h(l)}function z(n,l,u){l.__d=void 0;for(var i=0;i<u.length;i++)V(u[i],u[++i],u[++i]);t.__c&&t.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){t.__e(n,l.__v)}})}function N(n,u,i,o,e,r,f,c,s){var h,a,p,v,y,w,g,m=i.props,k=u.props,x=u.type;if("svg"===x?e="http://www.w3.org/2000/svg":"math"===x?e="http://www.w3.org/1998/Math/MathML":e||(e="http://www.w3.org/1999/xhtml"),null!=r)for(h=0;h<r.length;h++)if((y=r[h])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[h]=null;break}if(null==n){if(null===x)return document.createTextNode(k);n=document.createElementNS(e,x,k.is&&k),c&&(t.__m&&t.__m(u,r),c=!1),r=null}if(null===x)m===k||c&&n.data===k||(n.data=k);else{if(r=r&&l.call(n.childNodes),m=i.props||d,!c&&null!=r)for(m={},h=0;h<n.attributes.length;h++)m[(y=n.attributes[h]).name]=y.value;for(h in m)if(y=m[h],"children"==h);else if("dangerouslySetInnerHTML"==h)p=y;else if(!(h in k)){if("value"==h&&"defaultValue"in k||"checked"==h&&"defaultChecked"in k)continue;A(n,h,null,y,e)}for(h in k)y=k[h],"children"==h?v=y:"dangerouslySetInnerHTML"==h?a=y:"value"==h?w=y:"checked"==h?g=y:c&&"function"!=typeof y||m[h]===y||A(n,h,y,m[h],e);if(a)c||p&&(a.__html===p.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),u.__k=[];else if(p&&(n.innerHTML=""),$(n,_(v)?v:[v],u,i,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":e,r,f,r?r[0]:i.__k&&C(i,0),c,s),null!=r)for(h=r.length;h--;)b(r[h]);c||(h="value","progress"===x&&null==w?n.removeAttribute("value"):void 0!==w&&(w!==n[h]||"progress"===x&&!w||"option"===x&&w!==m[h])&&A(n,h,w,m[h],e),h="checked",void 0!==g&&g!==n[h]&&A(n,h,g,m[h],e))}return n}function V(n,l,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==l||(n.__u=n(l))}else n.current=l}catch(n){t.__e(n,u)}}function q(n,l,u){var i,o;if(t.unmount&&t.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.__e(n,l)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],l,u||"function"!=typeof n.type);u||b(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function B(n,l,t){return this.constructor(n,t)}function D(n,u,i){var o,e,r,f;t.__&&t.__(n,u),e=(o="function"==typeof i)?null:i&&i.__k||u.__k,r=[],f=[],O(u,n=(!o&&i||u).__k=m(x,null,[n]),e||d,d,u.namespaceURI,!o&&i?[i]:e?null:u.firstChild?l.call(u.childNodes):null,r,!o&&i?i:e?e.__e:u.firstChild,o,f),z(r,n,f)}l=y.slice,t={__e:function(n,l,t,u){for(var i,o,e;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),e=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),e=i.__d),e)return i.__E=i}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&null==n.constructor},S.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof n&&(n=n(g({},t),this.props)),n&&g(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this))},S.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},S.prototype.render=x,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},T.__r=0,c=0,s=F(!1),h=F(!0),a=0,n.Component=S,n.Fragment=x,n.cloneElement=function(n,t,u){var i,o,e,r,f=g({},n.props);for(e in n.type&&n.type.defaultProps&&(r=n.type.defaultProps),t)"key"==e?i=t[e]:"ref"==e?o=t[e]:f[e]=void 0===t[e]&&void 0!==r?r[e]:t[e];return arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):u),k(n.type,f,i||n.key,o||n.ref,null)},n.createContext=function(n,l){var t={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=new Set,(u={})[l]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.forEach(function(n){n.__e=!0,P(n)})},this.sub=function(n){t.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t&&t.delete(n),l&&l.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t},n.createElement=m,n.createRef=function(){return{current:null}},n.h=m,n.hydrate=function n(l,t){D(l,t,n)},n.isValidElement=i,n.options=t,n.render=D,n.toChildArray=function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(_(l)?l.some(function(l){n(l,t)}):t.push(l)),t}});\n//# sourceMappingURL=preact.umd.js.map'),e('!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=t.options,a=e.__b,v=e.__r,l=e.diffed,d=e.__c,s=e.unmount,p=e.__;function h(n,t){e.__h&&e.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y(n){return f=1,m(j,n)}function m(n,t,i){var o=h(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):j(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=!1;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,u))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=h(u++,4);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function _(n,t){var r=h(u++,7);return g(r.__H,t)&&(r.__=n(),r.__H=t,r.__h=n),r.__}function b(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p&&p(n,t)},e.__r=function(n){v&&v(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(A),t.__h.forEach(F),t.__h=[],u=0)),i=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===e.requestAnimationFrame||((o=e.requestAnimationFrame)||x)(b)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),i=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(u,n.__v)}}),d&&d(n,t)},e.unmount=function(n){s&&s(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),u.__H=void 0,t&&e.__e(t,u.__v))};var q="function"==typeof requestAnimationFrame;function x(n){var t,u=function(){clearTimeout(r),q&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);q&&(t=requestAnimationFrame(u))}function A(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function F(n){var t=r;n.__c=n.__(),r=t}function g(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function j(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,_(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=h(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=h(u++,3);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=h(u++,10),i=y();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=h(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=_,n.useReducer=m,n.useRef=function(n){return f=5,_(function(){return{current:n}},[])},n.useState=y});\n//# sourceMappingURL=hooks.umd.js.map'),e('!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((i||self).preactSignalsCore={})}(this,function(i){var t=Symbol.for("preact-signals");function o(){if(!(f>1)){var i,t=!1;while(void 0!==n){var o=n;n=void 0;h++;while(void 0!==o){var r=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&u(o))try{o.c()}catch(o){if(!t){i=o;t=!0}}o=r}}h=0;f--;if(t)throw i}else f--}var r=void 0,n=void 0,f=0,h=0,s=0;function e(i){if(void 0!==r){var t=i.n;if(void 0===t||t.t!==r){t={i:0,S:i,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:t};if(void 0!==r.s)r.s.n=t;r.s=t;i.n=t;if(32&r.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=r.s;t.n=void 0;r.s.n=t;r.s=t}return t}}}function v(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0}v.prototype.brand=t;v.prototype.h=function(){return!0};v.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i}};v.prototype.U=function(i){if(void 0!==this.t){var t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0}if(void 0!==o){o.e=t;i.x=void 0}if(i===this.t)this.t=o}};v.prototype.subscribe=function(i){var t=this;return b(function(){var o=t.value,n=r;r=void 0;try{i(o)}finally{r=n}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){var i=r;r=void 0;try{return this.value}finally{r=i}};Object.defineProperty(v.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(h>100)throw new Error("Cycle detected");this.v=i;this.i++;s++;f++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{o()}}}});function u(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function d(i){for(var t=i.s;void 0!==t;t=t.n){var o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function c(i){var t=i.s,o=void 0;while(void 0!==t){var r=t.p;if(-1===t.i){t.S.U(t);if(void 0!==r)r.n=t.n;if(void 0!==t.n)t.n.p=r}else o=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=r}i.s=o}function a(i){v.call(this,void 0);this.x=i;this.s=void 0;this.g=s-1;this.f=4}(a.prototype=new v).h=function(){this.f&=-3;if(1&this.f)return!1;if(32==(36&this.f))return!0;this.f&=-5;if(this.g===s)return!0;this.g=s;this.f|=1;if(this.i>0&&!u(this)){this.f&=-2;return!0}var i=r;try{d(this);r=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++}}catch(i){this.v=i;this.f|=16;this.i++}r=i;c(this);this.f&=-2;return!0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}v.prototype.S.call(this,i)};a.prototype.U=function(i){if(void 0!==this.t){v.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N()}};Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function l(i){var t=i.u;i.u=void 0;if("function"==typeof t){f++;var n=r;r=void 0;try{t()}catch(t){i.f&=-2;i.f|=8;y(i);throw t}finally{r=n;o()}}}function y(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;l(i)}function w(i){if(r!==this)throw new Error("Out-of-order effect");c(this);r=i;this.f&=-2;if(8&this.f)y(this);o()}function p(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t}finally{i()}};p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;l(this);d(this);f++;var i=r;r=this;return w.bind(this,i)};p.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=n;n=this}};p.prototype.d=function(){this.f|=8;if(!(1&this.f))y(this)};function b(i){var t=new p(i);try{t.c()}catch(i){t.d();throw i}return t.d.bind(t)}i.Signal=v;i.batch=function(i){if(f>0)return i();f++;try{return i()}finally{o()}};i.computed=function(i){return new a(i)};i.effect=b;i.signal=function(i){return new v(i)};i.untracked=function(i){var t=r;r=void 0;try{return i()}finally{r=t}}});//# sourceMappingURL=signals-core.min.js.map'),e('!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("preact"),require("preact/hooks"),require("@preact/signals-core")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks","@preact/signals-core"],i):i((n||self).preactSignals={},n.preact,n.preactHooks,n.preactSignalsCore)}(this,function(n,i,r,t){var e,f;function o(n,r){i.options[n]=r.bind(null,i.options[n]||function(){})}function u(n){if(f)f();f=n&&n.S()}function a(n){var e=this,f=n.data,o=useSignal(f);o.value=f;var u=r.useMemo(function(){var n=e.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}e.__$u.c=function(){var n;if(!i.isValidElement(u.peek())&&3===(null==(n=e.base)?void 0:n.nodeType))e.base.data=u.peek();else{e.__$f|=1;e.setState({})}};return t.computed(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return u.value}a.displayName="_st";Object.defineProperties(t.Signal.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:a},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});o("__b",function(n,i){if("string"==typeof i.type){var r,e=i.props;for(var f in e)if("children"!==f){var o=e[f];if(o instanceof t.Signal){if(!r)i.__np=r={};r[f]=o;e[f]=o.peek()}}}n(i)});o("__r",function(n,i){u();var r,f=i.__c;if(f){f.__$f&=-2;if(void 0===(r=f.__$u))f.__$u=r=function(n){var i;t.effect(function(){i=this});i.c=function(){f.__$f|=1;f.setState({})};return i}()}e=f;u(r);n(i)});o("__e",function(n,i,r,t){u();e=void 0;n(i,r,t)});o("diffed",function(n,i){u();e=void 0;var r;if("string"==typeof i.type&&(r=i.__e)){var t=i.__np,f=i.props;if(t){var o=r.U;if(o)for(var a in o){var v=o[a];if(void 0!==v&&!(a in t)){v.d();o[a]=void 0}}else r.U=o={};for(var s in t){var l=o[s],d=t[s];if(void 0===l){l=c(r,s,d,f);o[s]=l}else l.o(d,f)}}}n(i)});function c(n,i,r,e){var f=i in n&&void 0===n.ownerSVGElement,o=t.signal(r);return{o:function(n,i){o.value=n;e=i},d:t.effect(function(){var r=o.value.value;if(e[i]!==r){e[i]=r;if(f)n[i]=r;else if(r)n.setAttribute(i,r);else n.removeAttribute(i)}})}}o("unmount",function(n,i){if("string"==typeof i.type){var r=i.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var e in t){var f=t[e];if(f)f.d()}}}}else{var o=i.__c;if(o){var u=o.__$u;if(u){o.__$u=void 0;u.d()}}}n(i)});o("__h",function(n,i,r,t){if(t<3||9===t)i.__$f|=2;n(i,r,t)});i.Component.prototype.shouldComponentUpdate=function(n,i){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var t in i)return!0;for(var e in n)if("__source"!==e&&n[e]!==this.props[e])return!0;for(var f in this.props)if(!(f in n))return!0;return!1};function useSignal(n){return r.useMemo(function(){return t.signal(n)},[])}n.Signal=t.Signal;n.batch=t.batch;n.computed=t.computed;n.effect=t.effect;n.signal=t.signal;n.untracked=t.untracked;n.useComputed=function(n){var i=r.useRef(n);i.current=n;e.__$f|=4;return r.useMemo(function(){return t.computed(function(){return i.current()})},[])};n.useSignal=useSignal;n.useSignalEffect=function(n){var i=r.useRef(n);i.current=n;r.useEffect(function(){return t.effect(function(){return i.current()})},[])}});//# sourceMappingURL=signals.min.js.map'),e('!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.htm=e()}(this,function(){var n=function(e,t,u,s){var r;t[0]=0;for(var p=1;p<t.length;p++){var h=t[p++],o=t[p]?(t[0]|=h?1:2,u[t[p++]]):t[++p];3===h?s[0]=o:4===h?s[1]=Object.assign(s[1]||{},o):5===h?(s[1]=s[1]||{})[t[++p]]=o:6===h?s[1][t[++p]]+=o+"":h?(r=e.apply(o,n(e,o,u,["",null])),s.push(r),o[0]?t[0]|=2:(t[p-2]=0,t[p]=r)):s.push(o)}return s},e=new Map;return function(t){var u=e.get(this);return u||(u=new Map,e.set(this,u)),(u=n(this,u.get(t)||(u.set(t,u=function(n){for(var e,t,u=1,s="",r="",p=[0],h=function(n){1===u&&(n||(s=s.replace(/^\\s*\\n\\s*|\\s*\\n\\s*$/g,"")))?p.push(0,n,s):3===u&&(n||s)?(p.push(3,n,s),u=2):2===u&&"..."===s&&n?p.push(4,n,0):2===u&&s&&!n?p.push(5,0,!0,s):u>=5&&((s||!n&&5===u)&&(p.push(u,0,s,t),u=6),n&&(p.push(u,n,0,t),u=6)),s=""},o=0;o<n.length;o++){o&&(1===u&&h(),h(o));for(var f=0;f<n[o].length;f++)e=n[o][f],1===u?"<"===e?(h(),p=[p],u=3):s+=e:4===u?"--"===s&&">"===e?(u=1,s=""):s=e+s[0]:r?e===r?r="":s+=e:\'"\'===e||"\'"===e?r=e:">"===e?(h(),u=1):u&&("="===e?(u=5,t=s,s=""):"/"===e&&(u<5||">"===n[o][f+1])?(h(),3===u&&(p=p[0]),u=p,(p=p[0]).push(2,0,u),u=0):" "===e||"\\t"===e||"\\n"===e||"\\r"===e?(h(),u=2):s+=e),3===u&&"!--"===s&&(u=4,p=p[0])}return h(),p}(t)),u),arguments,[])).length>1?u:u[0]}});')}("undefined"!=typeof window?window:this);var t=window.htm,{Component:e,h:n,render:r}=window.preact,{useCallback:a,useEffect:i,useMemo:o,useRef:l,useState:s}=window.preactHooks,{signal:u}=window.preactSignals;function c(){if(!("undefined"==typeof window||"undefined"==typeof document||window.AtriumReliability&&window.AtriumReliability.failBus)){var t;try{t=x({})}catch(t){try{console.error("[atriumX] reliability init failed",t)}catch(t){}return}window.AtriumReliability=t;var e=t.failBus;try{if(void 0!==cr&&cr&&cr.length&&"function"==typeof e.setKnownStations){for(var n=[],r=0;r<cr.length;r++)cr[r]&&cr[r].id&&n.push(cr[r].id);e.setKnownStations(n)}}catch(t){}e.on("station",function(){try{"object"==typeof et&&et&&et.failNonce&&(et.failNonce.value=et.failNonce.value+1)}catch(t){}}),e.on("toast",function(t){try{var e=(t&&t.source?t.source+" · ":"")+(t&&t.message||"failed");if("function"==typeof we)return void we(e,"error");try{console.error("[atriumX:failBus]",t&&t.source,t&&t.message)}catch(t){}}catch(t){}}),e.on("banner",function(t){try{var e=document.getElementById("atrium-fail-banner");e||(e=document.createElement("div"),e.id="atrium-fail-banner",e.className="fail-banner",e.setAttribute("role","alert"),document.body.insertBefore(e,document.body.firstChild)),e.textContent=(t&&t.message||"a portal-wide failure occurred")+" · reload to retry",e.hidden=!1}catch(t){}})}}var d={toast:1,station:2,banner:3};function f(t){t=t||{};var e=t.ringMax||50,n=[],r={toast:[],station:[],banner:[]},a={},i=null;function o(t){if(null!=t){var e={};if("number"==typeof t.length)for(var n=0;n<t.length;n++)null!=t[n]&&(e[String(t[n])]=!0);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[String(r)]=!0);i=e}else i=null}function l(t){return!i||!0===i[String(t)]}function s(t){return d[t]?t:"toast"}function u(t){try{"undefined"!=typeof console&&console.error("[atriumX] failBus sink threw",t)}catch(t){}}function c(t,i,o){o=o||{};var c=s(o.severity),d={source:String(t||"unknown"),message:i&&i.message||String(null==i?"error":i),stack:i&&i.stack||"",severity:c,retry:"function"==typeof o.retry?o.retry:null,ts:Date.now()};if(n.push(d),n.length>e&&n.shift(),"station"===c)if(l(d.source))a[d.source]=d;else{d.orphaned=!0;try{"undefined"!=typeof console&&console.error('[atriumX] failBus.raise: unknown station id "'+d.source+'" (not in topology); the persistent glow would be orphaned. Dropped.')}catch(t){}}for(var f=r[c]||[],p=0;p<f.length;p++)try{f[p](d)}catch(t){u(t)}return d}function f(t){if(a[t]){delete a[t];for(var e=r.station||[],n=0;n<e.length;n++)try{e[n]({source:t,resolved:!0,ts:Date.now()})}catch(t){u(t)}return!0}return!1}function p(t,e){return r[t]||(r[t]=[]),r[t].push(e),function(){var n=r[t].indexOf(e);n>=0&&r[t].splice(n,1)}}function h(t){return a[t]||null}function v(t){var e=t||n.length;return n.slice(Math.max(0,n.length-e))}function m(){n.length=0,a={}}return{raise:c,resolve:f,on:p,stationHealth:h,recent:v,clear:m,setKnownStations:o,SEVERITIES:d}}var p={makeFailBus:f,SEVERITIES:d};"undefined"!=typeof module&&module.exports&&(module.exports=p),"undefined"!=typeof window&&(window.AtriumFailBus=p);var h={PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"},v={CONFIRMED:"CONFIRMED",PENDING_WRITE:"PENDING_WRITE",REVERTED:"REVERTED"},m={states:[h.PENDING,h.RUNNING,h.OK,h.ANOMALY,h.FAILED,h.STALE],initial:h.PENDING,transitions:{PENDING:{upload:h.RUNNING},RUNNING:{reconPass:h.OK,reconFail:h.ANOMALY,rpcFail:h.FAILED},OK:{monthBoundary:h.STALE,upload:h.RUNNING},ANOMALY:{upload:h.RUNNING},FAILED:{upload:h.RUNNING},STALE:{upload:h.RUNNING}}},g={states:[h.PENDING,h.RUNNING,h.OK,h.FAILED,h.STALE],initial:h.PENDING,transitions:{PENDING:{fanout:h.RUNNING},RUNNING:{ackOk:h.OK,ackFail:h.FAILED},OK:{newNavMonth:h.PENDING,fanout:h.RUNNING},FAILED:{fanout:h.RUNNING,newNavMonth:h.PENDING},STALE:{fanout:h.RUNNING,newNavMonth:h.PENDING}}},_={states:[v.PENDING_WRITE,v.CONFIRMED,v.REVERTED],initial:null,transitions:{null:{click:v.PENDING_WRITE},PENDING_WRITE:{ackOk:v.CONFIRMED,ackFail:v.REVERTED},CONFIRMED:{click:v.PENDING_WRITE},REVERTED:{click:v.PENDING_WRITE}}},y={states:[h.PENDING,h.OK,h.ANOMALY],initial:h.ANOMALY,transitions:{ANOMALY:{dismiss:h.OK,ack:h.PENDING},PENDING:{dismiss:h.OK,flag:h.ANOMALY},OK:{redetect:h.ANOMALY}}},b={navMonth:m,consumer:g,transferWrite:_,silentSignal:y},w={OK:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function k(t,e){var n=null==w[t]?-1:w[t],r=null==w[e]?-1:w[e];return r>n?e:t}function $(t,e){var n=b[t];if(!n)throw new Error("unknown entity type: "+t);var r=n.initial,a=[];function i(t){return null==t?"null":t}function o(t){var e=n.transitions[i(r)]||{},o=e[t];return void 0===o?(a.push({from:r,trigger:t}),r):(r=o,r)}function l(t){var e=n.transitions[i(r)]||{};return void 0!==e[t]}return{type:t,id:e,get state(){return r},set:function(t){return r=t,r},send:o,can:l,rejects:a}}p={HEALTH:h,WRITE:v,ENTITY_TYPES:b,HEALTH_RANK:w,worse:k,makeEntity:$};function S(){return"undefined"!=typeof module&&module.exports?{failBus:require("./failBus.js"),health:require("./health.js"),ow:require("./optimisticWrite.js")}:{failBus:window.AtriumFailBus,health:window.AtriumHealth,ow:window.AtriumOptimisticWrite}}function x(t){t=t||{};var e=S(),n=e.failBus.makeFailBus(t.failBusOpts);return{failBus:n,health:e.health,optimisticWrite:e.ow.optimisticWrite}}if("undefined"!=typeof module&&module.exports&&(module.exports=p),"undefined"!=typeof window&&(window.AtriumHealth=p),"undefined"!=typeof module&&module.exports){var A=S();module.exports={createReliability:x,failBus:A.failBus,health:A.health,optimisticWrite:A.ow.optimisticWrite}}function C(t){t=t||{};var e=t.entity||null,n=t.failBus||null,r=t.source||"write:"+(t.key||"unknown");e&&e.send("click");try{t.applyLocal&&t.applyLocal()}catch(t){}try{t.audit&&t.audit("applied")}catch(t){}var a=!1;function i(){if(!a){a=!0,e&&e.send("ackOk");try{t.audit&&t.audit("confirmed")}catch(t){}try{t.onConfirm&&t.onConfirm()}catch(t){}try{n&&n.resolve&&n.resolve(r)}catch(t){}}}function o(i){if(!a){a=!0,e&&e.send("ackFail");try{t.audit&&t.audit("reverted")}catch(t){}try{t.onRevert&&t.onRevert(i)}catch(t){}if(n)try{n.raise(r,i||new Error("write reverted"),{severity:"station",retry:t.retry||null})}catch(t){}}}try{t.rpc(function(t){t&&t.ok?i():o(new Error(t&&t.message||"server rejected write"))},function(t){o(t)})}catch(t){o(t)}return{confirm:i,revert:o,isSettled:function(){return a}}}p={optimisticWrite:C};function N(t,e){try{console.error("[atriumX:overrides] "+t,e)}catch(t){}try{"function"==typeof pe&&pe("overrides:"+t,e)}catch(t){}}"undefined"!=typeof module&&module.exports&&(module.exports=p),"undefined"!=typeof window&&(window.AtriumOptimisticWrite=p);var E=3e5,D=216e5;function P(t){return 0===t.indexOf("tx:stop:")?D:E}function O(t){try{var e=localStorage.getItem("atrium2:"+t);if(!e)return null;var n=JSON.parse(e),r=P(t);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+t)}catch(t){}return null}return n.data}catch(t){return null}}function T(t){try{var e=localStorage.getItem("atrium2:"+t);if(!e)return null;var n=JSON.parse(e),r=P(t);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+t)}catch(t){}return null}return n}catch(t){return null}}function R(){var t=[];try{for(var e=0;e<localStorage.length;e++){var n=localStorage.key(e);n&&0===n.indexOf("atrium2:")&&t.push(n)}}catch(t){}return t}function M(t){var e=Date.now(),n=R().map(function(t){var n=0;try{var r=JSON.parse(localStorage.getItem(t));n=r&&r.ts||0}catch(t){}var a=0===t.indexOf("atrium2:")?t.slice(8):t,i=P(a),o=e-n>i,l=0===a.indexOf("tx:stop:")&&!o;return{k:t,ts:n,expired:o,isLiveOverride:l}});n.sort(function(t,e){return t.isLiveOverride!==e.isLiveOverride?t.isLiveOverride?1:-1:t.expired!==e.expired?t.expired?-1:1:t.ts-e.ts});for(var r=0,a=0;a<n.length&&r<t&&!n[a].isLiveOverride;a++)try{localStorage.removeItem(n[a].k),r++}catch(t){}}function L(t,e){var n=JSON.stringify({ts:Date.now(),data:e});try{localStorage.setItem("atrium2:"+t,n)}catch(e){try{M(Math.max(1,Math.ceil(.2*R().length))),localStorage.setItem("atrium2:"+t,n)}catch(e){try{"undefined"!=typeof console&&console.warn("[atriumX] cache full; write dropped for "+t)}catch(t){}}}}function F(t){try{localStorage.removeItem("atrium2:"+t)}catch(t){}}var I=["atrium2:tx:stop:","atrium2:tx:sig:","atrium2:tx:amt:","atrium2:tx:flag:"];function j(t){for(var e=0;e<I.length;e++)if(0===t.indexOf(I[e]))return I[e];return null}function U(){try{for(var t=Date.now(),e=[],n=0;n<localStorage.length;n++){var r=localStorage.key(n);if(r&&j(r)){var a=P(r.slice(8));try{var i=JSON.parse(localStorage.getItem(r));(!i||t-(i.ts||0)>a)&&e.push(r)}catch(t){e.push(r)}}}e.forEach(function(t){try{localStorage.removeItem(t)}catch(t){}}),e.length&&console.log("[atriumX] cleared "+e.length+" stale override(s)")}catch(t){}}function K(t){var e=O("tx:stop:"+t);return null==e?null:parseInt(e,10)}function B(t,e){L("tx:stop:"+t,e)}function H(t){F("tx:stop:"+t)}function G(t,e){L("tx:sig:"+t,String(e))}function W(t){F("tx:sig:"+t)}function V(t){return"1"===O("tx:flag:"+t)}function Y(t){V(t)?F("tx:flag:"+t):L("tx:flag:"+t,"1")}var q=["✓","wir","paid","transf","שולם","moved to trading","paid to client"];function J(t){for(var e=String(t||""),n=0;n<q.length;n++)if(e.indexOf(q[n])>=0)return!0;return e.indexOf("הועבר")>=0&&-1===e.indexOf("טרם")}var z=["הושלם","sign","complet","done","נחתם","חתום"];function X(t){for(var e=String(t||""),n=0;n<z.length;n++)if(e.indexOf(z[n])>=0)return!0;return!1}function Q(t){try{if(!t||!t.transfers||!Array.isArray(t.transfers.rows))return 0;var e=0;return t.transfers.rows.forEach(function(t){var n=t&&t.rowKey;if(n){var r=J(String(t.execStatus||"").toLowerCase()),a=X(String(t.sigStatus||t.status||"").toLowerCase()),i=/\d/.test(String(t.amountText||"").trim()),o=K(n);null!=o&&r&&(H(n),e++);var l=O("tx:sig:"+n);"1"!==l&&"0"!==l||!a||(W(n),e++),i&&null!=O("tx:amt:"+n)&&(F("tx:amt:"+n),e++)}}),e&&console.log("[atriumX] reconciled "+e+" override(s) against fresh boot"),e}catch(t){return N("reconcileOverridesWithBoot_",t),0}}function Z(t,e){var n=X(String(t&&t.sigStatus||"").toLowerCase()),r=J(String(t&&t.execStatus||"").toLowerCase()),a=n;if(e){var i=O("tx:sig:"+e);"1"===i?a=!0:"0"===i&&(a=!1)}var o=r,l=e?K(e):null;return 3===l?o=!0:1!==l&&2!==l||(o=!1),{sent:!0,signed:a,wired:o,overridden:null!=l}}var tt="object"==typeof BOOT&&BOOT||null,et={transfers:u(tt&&tt.transfers||null),navWidget:u(tt&&tt.navWidget||null),playbook:u(tt&&tt.playbook||null),suggestions:u(tt&&tt.transferSuggestions||null),portfolio:u(tt&&tt.portfolio||null),closePack:u(null),schedule:u(null),fanOut:u(null),silentSignals:u([]),navRecon:u(null),atriumHealth:u(tt&&tt.atriumHealth||null),health:u({}),failNonce:u(0),staleData:u(tt&&tt._stale?{lastKnownAt:tt._lastKnownAt||null}:null),view:u("home")};function nt(t){var e=t||"home";et.view.value!==e&&(et.view.value=e)}function rt(t,e){var n=et.health.value||{};if(n[t]!==e){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);r[t]=e,et.health.value=r}}function at(t,e){try{rt(t,"error")}catch(t){}try{et.failNonce.value=et.failNonce.value+1}catch(t){}}et.recordHealthError=at,"undefined"!=typeof window&&(window.atriumStore=et);var it=0;function ot(){return++it}function lt(t,e){if(null!=e&&e<it){try{console.log("[atriumX] dropped superseded boot (gen "+e+" < "+it+")")}catch(t){}return!1}if(!t)return!1;"transfers"in t&&(et.transfers.value=t.transfers||null),"navWidget"in t&&(et.navWidget.value=t.navWidget||null),"playbook"in t&&(et.playbook.value=t.playbook||null),"transferSuggestions"in t&&(et.suggestions.value=t.transferSuggestions||null),"portfolio"in t&&(et.portfolio.value=t.portfolio||null),"closePack"in t&&(et.closePack.value=t.closePack||null),"schedule"in t&&(et.schedule.value=t.schedule||null),"atriumHealth"in t&&(et.atriumHealth.value=t.atriumHealth||null),et.staleData.value=t._stale?{lastKnownAt:t._lastKnownAt||null}:null;try{Q(t)}catch(t){}return!0}function st(t){t=t||{};var e=t.render,n=t.rpc,r=t.report||function(t,e){try{console.error("[atriumX:boot] "+t,e)}catch(t){}};try{U()}catch(t){r("boot:sweep",t)}try{Q(tt)}catch(t){r("boot:reconcile",t)}if("function"==typeof e)try{e()}catch(t){r("boot:render",t)}try{null!=et.portfolio.value&&rt("portfolio","live")}catch(t){r("portfolio:seed",t)}n&&setTimeout(function(){try{n.transferSuggestions().then(function(t){et.suggestions.value=t,rt("suggestions","live")}).catch(function(t){rt("suggestions","error"),r("suggestions",t)})}catch(t){r("suggestions:sync",t)}},2e3)}const ut="lvp_atrium_boot_cache_v1";function ct(t){if(t&&"undefined"!=typeof localStorage)try{const e=Object.assign({},t,{_stale:!0,_lastKnownAt:(new Date).toISOString()});localStorage.setItem(ut,JSON.stringify(e))}catch(t){}}function dt(t,e){if(!t||"function"!=typeof t.bootstrap)return Promise.resolve(!1);var n=ot();return t.bootstrap({lite:!0}).then(function(t){if(!t)return!1;var e=lt(t,n);try{ct(t)}catch(t){}return e}).catch(function(t){if(et.staleData.value||(et.staleData.value={lastKnownAt:null}),"function"==typeof e)try{e("bootRefresh",t)}catch(t){}return!1})}function ft(t,e){t&&"function"==typeof t.bootstrap&&t.bootstrap({lite:!0}).then(function(t){t&&t.portfolio&&(et.portfolio.value=t.portfolio,rt("portfolio","live"))}).catch(function(t){rt("portfolio","error"),"function"==typeof e&&e("portfolio",t)})}function pt(){var t=s(!1),e=t[0],n=t[1],r=s(null),a=r[0],i=r[1];function o(t,r){r=r||{},e||(n(!0),i(null),Promise.resolve(t).then(function(t){n(!1),r.successMsg&&we(r.successMsg,"success"),r.onSuccess&&r.onSuccess(t)}).catch(function(t){var e=r.errorMsg||t&&t.message||"action failed";n(!1),i(e),we(e,"error")}))}return{busy:e,error:a,run:o}}const ht="717035109771-18bc6sb4651ofk6ep82q1ka4vjum326v.apps.googleusercontent.com",vt="lvp_atrium_id_token",mt="legacyvpartners.com",gt=6e4,_t=1e4,yt=3e5,bt=3e4,wt="atrium-gate-error";function kt(t){try{const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(e).split("").map(t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(t){return null}}function $t(t){if(!t)return!1;const e=String(t.hd||""),n=String(t.email||"").toLowerCase(),r=e===mt||n.endsWith("@"+mt);return r&&(!0===t.email_verified||"true"===t.email_verified)}function St(){if("undefined"==typeof localStorage)return null;let t;try{t=localStorage.getItem(vt)}catch(t){return null}if(!t)return null;const e=kt(t);return e&&e.exp?1e3*Number(e.exp)<Date.now()+gt?null:t:null}function xt(t,e){const n=t-e;return n>0&&n<=yt}let At=null;function Ct(){At||(At=setInterval(()=>{let t;try{t=localStorage.getItem(vt)}catch(t){return}if(!t)return;const e=kt(t);if(e&&e.exp&&xt(1e3*Number(e.exp),Date.now())&&Rt())try{window.google.accounts.id.prompt()}catch(t){}},bt))}function Nt(){const t=St();if(!t)return null;const e=kt(t);return e?String(e.email||"").toLowerCase():null}let Et=null,Dt=null,Pt=null;function Ot(t){const e=kt(t.credential);if($t(e)){try{localStorage.setItem(vt,t.credential)}catch(t){}if(Dt){const e=Dt;Dt=null,e(t.credential)}}else"function"==typeof Pt&&Pt()}function Tt(t,e,n){return e-t>=n}function Rt(){return!!("undefined"!=typeof window&&window.google&&window.google.accounts&&window.google.accounts.id)}function Mt(t){if("undefined"==typeof document)return;const e=document.getElementById(t||wt);if(!e)return;e.textContent="Sign-in didn't load — check your connection and ";const n=document.createElement("a");n.href="undefined"!=typeof location&&location.href?location.href:"#",n.textContent="reload",n.onclick=function(t){t&&"function"==typeof t.preventDefault&&t.preventDefault();try{"undefined"!=typeof location&&location.reload&&location.reload()}catch(t){}return!1},e.appendChild(n),e.appendChild(document.createTextNode(".")),e.style.display="block"}function Lt(t){if("undefined"==typeof document||!document.querySelector)return;let e=null;try{e=document.querySelector('script[src*="gsi/client"]')}catch(t){return}if(!e)return;const n=e.onerror;e.onerror=function(e){try{"function"==typeof n&&n.call(this,e)}catch(t){}Mt(t)}}function Ft(t,e,n){const r=St();if(r)return Ct(),Promise.resolve(r);if(Pt=e||null,Et)return Et;const a=n||wt;return Lt(a),Et=new Promise(e=>{Dt=t=>{Ct(),e(t)};const n=Date.now();function r(){if(!Rt())return Tt(n,Date.now(),_t)?void Mt(a):void setTimeout(r,100);window.google.accounts.id.initialize({client_id:ht,callback:Ot,hd:mt});const e="undefined"!=typeof document?document.getElementById(t):null;e&&window.google.accounts.id.renderButton(e,{theme:"outline",shape:"rectangular",size:"large",text:"signin_with"});try{window.google.accounts.id.prompt()}catch(t){}}r()}),Et}function It(t){return!(!t||!t.rpcUnauthenticated&&!t.rpcUnauthorized)}let jt=!1;function Ut(){if("undefined"==typeof document)return;if(jt)return;const t=document.getElementById("atrium-gate");if(!t)return;jt=!0;try{localStorage.removeItem(vt)}catch(t){}Et=null,Dt=null;const e=document.getElementById("atrium-root"),n=document.getElementById(wt);n&&(n.textContent="Your session expired. Sign in again to continue.",n.style.display="block"),e&&(e.style.display="none"),t.style.display="",Ft("atrium-gate-signin",function(){n&&(n.textContent="That account isn't on legacyvpartners.com. Sign in with your Legacy Google account.",n.style.display="block")}).then(function(){n&&(n.style.display="none"),e&&(e.style.display=""),t.style.display="none",jt=!1})}function Kt(t,e,n){function r(){try{var r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r),e(!0)}catch(t){pe(n||"copy:fallback",t),e(!1)}}e=e||function(){},"undefined"!=typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(function(){e(!0)},r):r()}function Bt(t){return(t>=0?"+":"")+(100*t).toFixed(2)+"%"}function Ht(t){t=t||{};var e=t.failBus||null,n=t.source||"write:"+(t.key||"unknown");try{t.applyLocal&&t.applyLocal()}catch(t){}try{t.audit&&t.audit("applied")}catch(t){}var r=!1;function a(){if(!r){r=!0;try{t.audit&&t.audit("confirmed")}catch(t){}try{t.onConfirm&&t.onConfirm()}catch(t){}try{e&&e.resolve&&e.resolve(n)}catch(t){}}}function i(a){if(!r){r=!0;try{t.audit&&t.audit("reverted")}catch(t){}try{t.onRevert&&t.onRevert(a)}catch(t){}if(e)try{e.raise(n,a||new Error("write reverted"),{severity:"station",retry:t.retry||null})}catch(t){}}}try{t.rpc(function(t){t&&t.ok?a():i(new Error(t&&t.message||"server rejected write"))},function(t){i(t)})}catch(t){i(t)}return{confirm:a,revert:i,isSettled:function(){return r}}}const Gt="https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxIzQKx6SbDzJj0ezjZUkZVKuBB5Go4amrMyZWvWTIZaI3n92dT-cBjUWX9nIQKPTGf/exec";function Wt(){return"undefined"!=typeof google&&!!google.script&&!!google.script.run}const Vt=9e4;var Yt=4e3,qt=Object.create(null);function Jt(){try{return"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null}catch(t){return null}}function zt(t){var e=Date.now(),n=qt[t]||0;return!(e-n<Yt)&&(qt[t]=e,!0)}var Xt=8e3,Qt=4e3,Zt=Object.create(null);function te(){return"undefined"!=typeof Date&&Date.now?Date.now():0}function ee(t,e){return"number"==typeof t&&isFinite(t)&&"number"==typeof e&&e>0&&t>=e}function ne(t){var e=te(),n=Zt[t]||0;return!(e-n<Qt)&&(Zt[t]=e,!0)}function re(t,e){try{if(!ee(e,Xt))return;if(!ne(t))return;var n=Math.round(e);try{console.warn("[atriumX] slow RPC "+t+" "+n+"ms (soft threshold "+Xt+"ms; hard timeout "+Vt+"ms)")}catch(t){}}catch(t){}}Error;class ae extends Error{constructor(t,e){super("RPC "+t+" did not return within "+e+"ms"),this.name="RpcTimeoutError",this.fnName=t,this.timeoutMs=e,this.rpcTimeout=!0}}class ie extends Error{constructor(t){super("no idToken available for "+t),this.name="RpcUnauthenticatedError",this.fnName=t,this.rpcUnauthenticated=!0}}class oe extends Error{constructor(t,e){super("RPC "+t+" rejected: "+e),this.name="RpcUnauthorizedError",this.fnName=t,this.reason=e,this.rpcUnauthorized=!0}}function le(t,e){return new Promise((n,r)=>{let a=!1;const i=setTimeout(()=>{a||(a=!0,r(new ae(t,Vt)))},Vt);google.script.run.withSuccessHandler(t=>{a||(a=!0,clearTimeout(i),n(t))}).withFailureHandler(t=>{a||(a=!0,clearTimeout(i),r(t))})[t](...e)})}const se=400;function ue(t,e,n){const r="undefined"!=typeof AbortController?new AbortController:null,a=r?setTimeout(()=>r.abort(),Vt):null;return fetch(Gt,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({fn:e,args:n||[],idToken:t||""}),signal:r?r.signal:void 0}).then(t=>t.json()).then(t=>{if(a&&clearTimeout(a),!t||!0!==t.ok){const n=t&&(t.reason||t.error)||"unknown_error";if(t&&("unauthorized"===t.error||"unknown_fn"===t.error))throw new oe(e,n);throw new Error("RPC "+e+" failed: "+n+(t&&t.message?" / "+t.message:""))}return t.result}).catch(t=>{if(a&&clearTimeout(a),t&&"AbortError"===t.name)throw new ae(e,Vt);throw t})}function ce(t){return!(!t||"TypeError"!==t.name)}function de(t,e,n){n=n||{};const r=St();return r||n.skipAuthGuard?ue(r,t,e).catch(n=>{if(!ce(n))throw n;return new Promise(t=>setTimeout(t,se)).then(()=>ue(r,t,e))}):Promise.reject(new ie(t))}function fe(t,e,n){return Wt()?le(t,e||[]):de(t,e||[],n)}function pe(t,e,n){n=n||{};try{console.error("[atriumX] "+t,e)}catch(t){}var r=!1;try{r=!!It(e),r&&Ut()}catch(t){}try{const n="undefined"!=typeof window&&window.atriumStore||("undefined"!=typeof atriumStore?atriumStore:null);if(n)if("function"==typeof n.recordHealthError)n.recordHealthError(t,e);else if(n.health&&"object"==typeof n.health){const e=n.health.value&&"object"==typeof n.health.value?n.health.value:{},r={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r[t]="error",n.health.value=r}}catch(t){}try{fe("logErrorForPortal",["atriumX:"+t,e&&e.message||String(e),e&&e.stack||""],{skipAuthGuard:!0}).catch(()=>{})}catch(t){}try{if(!n.ownsSurfacing&&!r){var a=Jt();a&&"function"==typeof a.raise&&zt(t)&&a.raise(t,e,{severity:"toast"})}}catch(t){}return e}function he(t,e,n){var r=te(),a=null;try{"function"==typeof setTimeout&&(a=setTimeout(function(){re(t,Math.max(Xt,te()-r))},Xt),a&&"function"==typeof a.unref&&a.unref())}catch(t){}function i(){try{null!=a&&clearTimeout(a)}catch(t){}}return fe(t,e).then(e=>(i(),re(t,te()-r),e),e=>{throw i(),re(t,te()-r),pe(t,e,n),e})}function ve(t,...e){return he(t,e,void 0)}function me(t,e,n){return fe("logErrorForPortal",[t,e,n],{skipAuthGuard:!0}).catch(()=>!1)}const ge={bootstrap:(t,e)=>he("getPortalBootstrap",[t],e),appLinks:()=>ve("getAppLinksForPortal"),transferSuggestions:()=>ve("getTransferSuggestionsForPortal"),transferSuggestionLog:t=>ve("getTransferSuggestionLogForPortal",t),applyTransferSuggestion:t=>ve("applyTransferSuggestionForPortal",t),applyMultipleTransferSuggestions:t=>ve("applyMultipleTransferSuggestionsForPortal",t),recordTransferSuggestionEvent:(t,e)=>ve("recordTransferSuggestionEventForPortal",t,e),setTransferStatus:(t,e)=>he("setPortalTransferStatusForPortal",[t,e],{ownsSurfacing:!0}),setTransferSigStatus:(t,e)=>he("setPortalTransferSigStatusForPortal",[t,e],{ownsSurfacing:!0}),setTransferAmount:t=>he("setTransferAmountForPortal",[t],{ownsSurfacing:!0}),rowsWithManualEvents:t=>ve("getRowsWithManualEventsForPortal",t),monthlyTransferBreakdown:t=>ve("getMonthlyTransferBreakdownForPortal",t),manualUpload:(t,e,n,r)=>he("manualUpload",[t,e,n,r],{ownsSurfacing:!0}),fanOutStatus:(t,e)=>ve("getFanOutStatusForPortal",t,e),triggerFanOut:(t,e)=>ve("triggerFanOutForPortal",t,e),atriumHealth:()=>ve("getAtriumHealthForPortal"),navReconciliation:(t,e)=>ve("getNavReconciliationForPortal",t,e),approveNavClose:(t,e,n)=>ve("approveNavCloseForPortal",t,e,n),playbookState:(t,e)=>ve("getPlaybookStateForPortal",t,e),togglePlaybookStep:(t,e,n,r)=>ve("togglePlaybookStepForPortal",t,e,n,r),lpSyncMoveToGroup:(t,e)=>he("lpSyncMoveToGroup",[t,e],{ownsSurfacing:!0}),saveStoredRoughYield:(t,e)=>ve("saveStoredRoughYield",t,e),portfolio:()=>ve("getPortfolioForPortal"),quotes:t=>ve("fetchQuotesForPortal",t),history:(t,e)=>ve("fetchHistoryForPortal",t,e),fx:()=>ve("fetchFxForPortal"),fundNavHistory:()=>ve("fetchFundNavHistoryForPortal"),benchmarkHistory:(t,e)=>ve("fetchBenchmarkHistoryForPortal",t,e),scheduleState:t=>ve("getScheduleStateForPortal",t),completeTask:t=>ve("completeTaskForPortal",t),removeTask:t=>ve("removeTaskForPortal",t),updateTask:(t,e)=>ve("updateTaskForPortal",t,e),onboardingSilentSignals:t=>ve("getOnboardingSilentSignalsForPortal",t),dismissSilentSignal:t=>he("dismissSilentSignalForPortal",[t],{ownsSurfacing:!0}),chatHistory:()=>ve("getChatHistoryForPortal"),sendChatMessage:t=>ve("sendChatMessageForPortal",t),resetChat:()=>ve("resetChatForPortal"),logError:(t,e,n)=>me(t,e,n)};var _e={promise:null,links:null,failedAt:0},ye=3e4;function be(){var t=Date.now();return _e.links?Promise.resolve(_e.links):(_e.promise&&t-_e.failedAt<ye||(_e.promise=ge.appLinks().then(function(t){var e=t||[];return _e.links=e,e}).catch(function(t){throw _e.promise=null,_e.failedAt=Date.now(),t})),_e.promise)}function we(t,e){if("undefined"!=typeof document){var n=document.getElementById("toast");if(n){var r="error"===e;n.textContent=t;try{n.setAttribute("role",r?"alert":"status"),n.setAttribute("aria-live",r?"assertive":"polite")}catch(t){}n.className="toast is-show"+(r?" is-error":"success"===e?" is-success":""),clearTimeout(we._t),we._t=setTimeout(function(){n.className="toast"},r?8e3:3200)}else try{console.log("[toast] "+t)}catch(t){}}else try{console.log("[toast] "+t)}catch(t){}}var ke=t.bind(n);function $e(){De([et.staleData]);var t=et.staleData.value;if(!t)return null;var e="";try{if(t.lastKnownAt){var n=new Date(t.lastKnownAt);isNaN(n.getTime())||(e=" from "+n.toLocaleString())}}catch(t){}return ke`
      <div class="stale-banner" role="status" aria-live="polite">
        Showing last-known data${e}. Numbers may be behind until the next refresh.
      </div>
    `}function Se(t){var e=l(null);return i(function(){try{e.current&&e.current.focus&&e.current.focus({preventScroll:!0})}catch(t){}},[t.view]),ke`
      <div class=${"page page--focused"} data-view=${t.view}>
        <${$e} />
        <${Ce} label="masthead" fallback=${Ne("masthead")}><${Le} /><//>
        <${Ce} label="statusStrip" fallback=${Ne("status strip")}><${Ke} /><//>
        <${Ce} label="tabbar" fallback=${null}><${He} /><//>
        <nav class="focused-nav" aria-label="Focused view navigation">
          <button type="button" class="focused-nav__back" ref=${e}
                  onClick=${function(){nt("home")}}
                  aria-label="Back to Home">← Home</button>
          <span class="focused-nav__crumb hdr-stub">${t.crumb}</span>
        </nav>
        <${Ce} label=${"focused:"+t.view} fallback=${Ne(t.crumb+" view")}>
          ${t.children}
        <//>
        <${Ce} label="commandPalette" fallback=${null}><${Ar} /><//>
      </div>
    `}var xe={transfers:{crumb:"Transfers",comp:Fi},close:{crumb:"Close",comp:Ve},projecting:{crumb:"Projecting",comp:Sa},portfolio:{crumb:"Portfolio",comp:Wr},schedule:{crumb:"Schedule",comp:Ka}},Ae=st;function Ce(){e.call(this),this.state={err:null}}function Ne(t){return ke`<div class="boundary-fallback" role="alert">${t} unavailable</div>`}function Ee(){return ke`<div class="hdiv" aria-hidden="true"></div>`}function De(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}function Pe(){De([et.view]);var t=et.view.value,e=xe[t];return e?ke`
        <${Se} view=${t} crumb=${e.crumb}>
          <${e.comp} />
        <//>
      `:ke`
      <div class="page" data-view="home">
        <${$e} />
        <${Ce} label="masthead" fallback=${Ne("masthead")}><${Le} /><//>
        <${Ce} label="statusStrip" fallback=${Ne("status strip")}><${Ke} /><//>
        <${Ce} label="tabbar" fallback=${null}><${He} /><//>
        <${Ce} label="home" fallback=${Ne("home")}><${Sn} /><//>
        <${Ee} />
        <${Ce} label="homeSchedule" fallback=${Ne("schedule")}><${Ka} /><//>
        <${Ce} label="commandPalette" fallback=${null}><${Ar} /><//>
      </div>
    `}function Oe(){if("undefined"!=typeof document){var t=document.getElementById("atrium-root");t?r(ke`<${Pe} />`,t):pe("mount:no-root",new Error("#atrium-root missing"))}}Ce.prototype=Object.create(e.prototype),Ce.prototype.componentDidCatch=function(t){try{pe("home:"+(this.props.label||"panel"),t)}catch(t){}this.setState({err:t||new Error("render error")})},Ce.prototype.render=function(){return this.state&&this.state.err?null!=this.props.fallback?this.props.fallback:null:this.props.children},st=function(){var t="undefined"!=typeof google&&!!google.script&&!!google.script.run;if(t)Ae({render:Oe,rpc:ge,report:pe});else if("undefined"!=typeof document){var e=document.getElementById("atrium-gate"),n=document.getElementById("atrium-root"),r=document.getElementById("atrium-gate-error");Ft("atrium-gate-signin",function(){r&&(r.style.display="block")}).then(function(){try{window.__initialMe=Nt()||""}catch(t){}e&&(e.style.display="none"),n&&(n.style.display=""),Ae({render:Oe,rpc:ge,report:pe}),dt(ge,pe)})}else Ae({render:Oe,rpc:ge,report:pe})};ke=t.bind(n);function Te(t,e){try{if("undefined"!=typeof window&&null!=window[t]&&""!==window[t])return window[t]}catch(t){}return e}var Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAA3NCSVQICAjb4U/gAAADHUlEQVRIie2WXUhTYRjH/2e60ikWkUFdFIRBEV1EF1GEJEWUtkhBza1m+VkxrIsugq68sru6q5QsTSj7cLOpmJtO06LUoJRESNKm6djSdG1n7j0fTxcTnXn8KBIKfG4OB/7P7/eec573nMMREZazVMtKXxGsCOYWeZ0gabkExH8TrRvF5ty/JvBPBkLobtEaizCQ555ozwqN8f7AnNYlCCqe1mvWZHt9fkytfQNkqLaWcTFZNDHjcLrHojRJ9rbOeQ2kVBVP6oFkROmwz+gZ6ZMsYFUQ3xcTEZHMrKnMBKk5Z2DICeiwTg9oG1s7FFEKgvLHdcDxlNxCW+s7IBPbMkYr11B3aUhEluwGyQLXo23Ylf+qozvu6GUgsfFl++KCIP2Q7ppIRMKo7UYKwvOx84zHNxka63cM95dGyLUq1nSOiLz8JPZfABJtLW8XEpRV1s7QeRczgWrQ9PAmkI7deRM/fMHY1xE3oAcy+QaDYAZr1E85DlwEjtla2pUFxQ/MQLKh4LpMRJ5BVgVWDfHjQyJ63dGFCB12ZI9+nxgYHAFSsSWzt89BREKLkZnBrGlEAj8ZiE+7CmhrGtqmsTNTxPMBQBUZoeaC51MHArBKrcZqDt8FSZIlUQQkRKjU6vCQOZRAFKYKi45UAxwfMt+zbtHtMhOgTc4pJCLi3cwEwQy3vQg4jbissXFPMPZlyAmkA2d7HhnJAmY7RUT+gLD5yCUg0fKidaGHfKfcDGhPBh2BMcGyimrReSvBNc6HxhyOQcCAtXk9lcYgfdPhAiDpF7qCgIiKy82AVm8san7TtTc+w/sMkgVy991ZoeYznysSAAMiszs+9O45eQVIrLG2zaUpb7SSimogBRodtp93OT4Jz2dvNFs6M4FeZjsGh4A0rNUDJ2qtrxRRygIiKnlQDaSNe7xEJPvczAxWBbHrvmDPZSYIjZnB2NCwCzhYZ1OmExFH8/9VeH3+6KjIqVngv4nWWHAAgYs5F55QOh3zePmYaM3vvYsUS/a5WRWEprNLb1nkChRW43VymvVQhS+95fcEf1D/2Dd5RfBfCn4CQzeGOJRqTeoAAAAASUVORK5CYII=";function Me(){try{window.dispatchEvent(new CustomEvent("atriumX:openPalette"))}catch(t){}}function Le(){var t=Te("__dateStr",""),e=Te("__initialMe","noa@legacyvpartners.com"),n=Te("__buildTag","dev");return ke`
      <header class="wm">
        <div class="wm__brand" aria-label="Legacy Value Partners">
          <img class="wm__logo" src=${Re} width="30" height="30"
               alt="" aria-hidden="true" />
          <span>Legacy</span>
          <span class="wm__sub">Value Partners</span>
        </div>
        <div class="wm__right">
          <button type="button" class="wm__search" onClick=${Me}
                  aria-label="Open search (or press Cmd+K)">
            Search <span class="wm__search-kbd">⌘K</span>
          </button>
          ${t?ke`<span>${t}</span>`:null}
          <span class="you">${e}</span>
          <span class="wm__build">build <b>${n}</b></span>
        </div>
      </header>
    `}var Fe=Bt;ke=t.bind(n);function De(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}var Ie=String.fromCharCode(8212);function je(t){if(!t)return"";var e=new Date(t);if(isNaN(e.getTime()))return"";try{return e.toLocaleString()}catch(t){return e.toISOString()}}function Ue(t){var e=t.lbl,n=t.state||"live",r="status__val"+(t.tone?" status__val--"+t.tone:""),a=t.title?e+(null!=t.value?" "+t.value:"")+" · "+t.title:null;return"loading"===n?ke`
        <div class="status__item" title=${t.title||null}
             role=${a?"group":null} aria-label=${a}>
          <span class="status__lbl">${e}</span>
          <span class="status__val is-loading" aria-busy="true">${Ie}</span>
        </div>`:"error"===n?ke`
        <div class="status__item">
          <span class="status__lbl">${e}</span>
          <span class="status__val status__val--err"
                role="button" tabindex="0" title=${t.title||"fetch failed, click to retry"}
                aria-label=${e+": "+(t.title||"fetch failed, click to retry")}
                onClick=${t.onRetry}>${t.errLabel||"err / retry"}</span>
        </div>`:ke`
      <div class="status__item" title=${t.title||null}
           role=${a?"group":null} aria-label=${a}>
        <span class="status__lbl">${e}</span>
        <span class=${r}>${t.value}</span>
      </div>`}function Ke(){De([et.navWidget,et.portfolio,et.health,et.navRecon]);var t=et.navWidget.value,e=et.portfolio.value,n=et.health.value||{},r=et.navRecon.value||null,a=t&&t.closed||{},i=t&&t.recon||null,o=n.portfolio||(e?"live":"loading"),l=e&&e.headline||null;function s(){return"error"===o?"error":l&&null!=l.ytd_pct?"live":"loading"}function u(){return"error"===o?"error":l&&null!=l.mtd_pct?"live":"loading"}function c(){try{ft(ge,pe)}catch(t){pe("portfolio:retry",t)}}var d=l&&null!=l.ytd_pct?Fe(l.ytd_pct):null,f=l&&null!=l.mtd_pct?Fe(l.mtd_pct):null,p=l&&null!=l.ytd_pct?l.ytd_pct>=0?"up":"down":null,h=l&&null!=l.mtd_pct?l.mtd_pct>=0?"up":"down":null,v="inconsistent"===Zn(r,i);v&&nr(r,i);var m="live",g=Ie,_=null,y="no snapshot reconciliation available";function b(){try{"undefined"!=typeof window&&window.location&&"function"==typeof window.location.reload&&window.location.reload()}catch(t){}}v?(m="error",y="recon sources disagree, reload the page"):i&&(g=i.passed?"pass":"fail",i.deltaPctDisplay&&(g+=" ("+i.deltaPctDisplay+")"),_=i.passed?"up":"down",y=(i.monthLabel?i.monthLabel+" . ":"")+"NAV reconciliation "+(i.passed?"passed":"FAILED"));var w=null!=a.numeralDisplay?"live":"loading",k=null!=a.monthLabel||null!=a.label?"live":"loading",$=null;if(a.monthLabel){$="BDO NAV "+a.monthLabel;var S=je(a.uploadedAt);S&&($+=" · uploaded "+S)}var x="latest closed NAV month",A=e&&(e.as_of_iso||e.as_of)||"",C="FIBI portfolio basis"+(A?" · as of "+A:"");return ke`
      <div class="status">
        <${Ue} lbl="NAV"   state=${w}   value=${a.numeralDisplay} title=${$} />
        <${Ue} lbl="Month" state=${k} value=${a.monthLabel||a.label} title=${x} />
        <${Ue} lbl="YTD"   state=${s()} value=${d} tone=${p} onRetry=${c} title=${"live"===s()?C:null} />
        <${Ue} lbl="MTD"   state=${u()} value=${f} tone=${h} onRetry=${c} title=${"live"===u()?C:null} />
        <${Ue} lbl="Recon" state=${m} value=${g} tone=${_} title=${y}
                 errLabel=${v?"reload":null} onRetry=${v?b:null} />
      </div>
    `}ke=t.bind(n);var Be=[{id:"home",label:"Home"},{id:"portfolio",label:"Portfolio"},{id:"transfers",label:"Transfers"},{id:"projecting",label:"Projecting"},{id:"close",label:"Close"},{id:"schedule",label:"Schedule"}];function He(){var t=et.view.value;return ke`
      <nav class="tabbar" aria-label="Sections">
        ${Be.map(function(e){var n=t===e.id;return ke`
            <button
              key=${e.id}
              type="button"
              class=${"tabbar__tab"+(n?" is-active":"")}
              aria-current=${n?"page":null}
              onClick=${function(){nt(e.id)}}
            >${e.label}</button>
          `})}
      </nav>
    `}ke=t.bind(n);var Ge=we;function We(){return ge.playbookState(null,{force:!0}).then(function(t){return t&&(et.playbook.value=t),t}).catch(function(t){return pe("close:playbookReload",t),null})}function Ve(){var t=et.playbook.value,e=et.navWidget.value,n=s(!1),r=n[0],a=n[1],i=s({}),o=i[0],l=i[1];function u(t,e){l(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return e?r[t]=e:delete r[t],r})}function c(t){var e=et.playbook.value,n=e&&e.steps||[];return n[t]||null}function d(t){var e=c(t);if(e){var n=String(e.revShareCopy||"").trim();if(n){var r=e.revShareRows&&e.revShareRows.length||0;Kt(n,function(t){t?Ge("Copied"+(r?" · "+r+" LPs":"")+" for Omri","success"):Ge("Copy failed","error")},"close:copy:fallback")}else Ge("Nothing to copy","error")}}function f(t){var e=c(t);if(e){var n=Ze(e);if(n.length){if("undefined"==typeof window||!window.confirm||window.confirm("File "+n.length+" into their People-board group?\n\n"+tn(n))){u(t,"filing");var r=0,a=0,i=[];o()}}else Ge("Nothing to file","success")}function o(){if(r>=n.length)return l();var t=n[r++];ge.lpSyncMoveToGroup(t.itemId,t.toGroup).then(function(e){e&&e.ok?a++:i.push(t.name||t.itemId),o()}).catch(function(e){pe("close:lpSyncMoveToGroup",e,{ownsSurfacing:!0}),i.push(t.name||t.itemId),o()})}function l(){Ge(nn(a,i.length),i.length?"error":"success"),We().then(function(){u(t,null)})}}function p(t){var e=c(t);if(e){var n=et.playbook.value||{},r=n.month||{},a=!e.done,i=en(e.id),o=n,l=(n.steps||[]).map(function(e,n){if(n!==t)return e;var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r.done=a,r}),s={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.steps=l,"number"==typeof n.completedCount&&(s.completedCount=n.completedCount+(a?1:-1)),et.playbook.value=s,u(t,"toggling"),ge.togglePlaybookStep(r.year,r.month,i,a).then(function(){return We()}).catch(function(t){et.playbook.value=o,pe("close:toggleStep",t),Ge("Could not toggle the step. Reverted.","error")}).then(function(){u(t,null)})}}if(!t)return ke`
        <div class="close-view" data-state="loading">
          <div class="close-view__empty">awaiting playbook…</div>
          <button type="button" class="close-view__retry" disabled=${r}
                  onClick=${function(){a(!0),We().then(function(){a(!1)})}}>${r?"Retrying…":"Retry"}</button>
        </div>`;var h=Array.isArray(t.steps)?t.steps:[];if(!h.length)return ke`
        <div class="close-view" data-state="empty">
          <div class="close-view__empty">no close steps yet</div>
        </div>`;var v=Je(t),m=Ye(h),g=v.total>0?Math.max(0,Math.min(100,v.done/v.total*100)):0,_=v.total>0&&v.done>=v.total,y=e&&Array.isArray(e.fanOut)?e.fanOut:[],b=t.month&&t.month.month,w=y.filter(function(t){return!(t.hideMonths&&b&&-1!==t.hideMonths.indexOf(b))}),k=!(!e||!0!==e.closedOk),$=!(!e||"boolean"!=typeof e.closedOk);return ke`
      <div class="close-view" data-state="live">
        <div class="close-view__top">
          <div class="close-vessel" role="progressbar"
               aria-valuenow=${v.done} aria-valuemin="0" aria-valuemax=${v.total}
               aria-label=${"Close progress: "+v.done+" of "+v.total+" steps done"}>
            <div class="close-vessel__glass">
              <div class=${"close-vessel__fill"+(_?" is-full":"")}
                   style=${"height:"+g.toFixed(1)+"%;"}></div>
            </div>
            <div class="close-vessel__frac">
              ${v.done}<span class="close-vessel__of">/ ${v.total}</span>
            </div>
            <div class="close-vessel__month">${Xe(t)}</div>
          </div>

          <ol class="close-steps" aria-label="Close checklist steps">
            ${h.map(function(t,e){var n=!t.done&&e===m,r="close-step"+(t.done?" is-done":n?" is-now":" is-pending"),a=t.link&&qe(t.link);t.link&&!a&&pe("close:unsafe-link",new Error("non-http(s) link dropped: "+t.link));var i=rn(t,e),l=Qe(t),s=o[e];return ke`
                <li key=${null!=t.id?t.id:e} class=${r} role="checkbox" aria-checked=${!!t.done}>
                  <span class="close-step__dot" aria-hidden="true"></span>
                  <span class="close-step__name">
                    ${a?ke`<a class="close-step__link" href=${t.link} target="_blank" rel="noopener">${i}</a>`:i}
                    ${t.autoDetail?ke`<span class="close-step__detail">${t.autoDetail}</span>`:null}
                  </span>
                  <span class="close-step__when">
                    ${t.done?"done":n?"now":""}
                    ${l&&"rscopy"===l.type?ke`<button type="button" class="close-step__act close-step__act--ghost"
                                aria-label="Copy the incoming-LP rev-share list for Omri"
                                title="Copy the incoming-LP rev-share list for Omri"
                                onClick=${function(){d(e)}}>⧉</button>`:null}
                    ${l&&"filelps"===l.type?ke`<button type="button" class="close-step__act"
                                disabled=${"filing"===s}
                                aria-label=${"Open File "+l.count+" for "+i}
                                title="Move these LPs into their People-board group"
                                onClick=${function(){f(e)}}>${"filing"===s?"Filing…":"File "+l.count}</button>`:null}
                    ${l&&"toggle-manual"===l.type?ke`<button type="button" class=${"close-step__act"+(t.done?" close-step__act--ghost":"")}
                                disabled=${"toggling"===s}
                                aria-label=${(t.done?"Undo ":"Mark ")+i+(t.done?"":" done")}
                                onClick=${function(){p(e)}}>${l.label}</button>`:null}
                  </span>
                </li>`})}
          </ol>
        </div>
        ${$?ke`
          <div class=${"close-actually"+(k?" is-clean":" is-not-clean")}
               role="status" aria-live="polite">
            ${k?"✓ Actually clean. Reconciled and every fan-out consumer done.":"○ Not yet. Checklist may look done, but reconciliation or fan-out is not."}
          </div>`:null}
        ${w.length?ke`
          <div class="close-fanout">
            <div class="close-fanout__title">Fan-out</div>
            <ul class="close-fanout__list">
              ${w.map(function(t){var e="close-fanout__row is-"+t.status,n=t.summaryLines&&t.summaryLines[0]||"";return ke`
                  <li key=${t.key} class=${e} title=${t.lpsTooltip||null}>
                    <span class="close-fanout__dot" aria-hidden="true"></span>
                    <span class="close-fanout__label">${t.label}</span>
                    <span class="close-fanout__status">${t.status}</span>
                    ${t.ranAt?ke`<span class="close-fanout__ran">${t.ranAt}</span>`:null}
                    <span class="close-fanout__summary">${n}</span>
                  </li>`})}
            </ul>
          </div>`:null}
      </div>
    `}function Ye(t){t=t||[];for(var e=0;e<t.length;e++)if(!t[e].done&&(0===e||t[e-1].done))return e;return-1}function qe(t){return/^https?:\/\//i.test(String(null==t?"":t).trim())}function Je(t){var e=t&&Array.isArray(t.steps)?t.steps:[],n=t&&"number"==typeof t.completedCount?t.completedCount:e.filter(function(t){return t&&t.done}).length,r=t&&"number"==typeof t.totalCount?t.totalCount:e.length;return{done:n,total:r}}var ze=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Xe(t,e){var n=t&&t.month;if(n&&"number"==typeof n.month&&n.month>=1&&n.month<=12)return ze[n.month-1]+" · in progress";var r=e||new Date;return ze[r.getMonth()]+" · in progress"}function Qe(t){return t?"revshare"===t.id&&t.revShareCopy?{type:"rscopy"}:"filelps"===t.id&&t.lpMoves&&t.lpMoves.length?{type:"filelps",count:t.lpMoves.length}:t.auto?null:{type:"toggle-manual",label:t.done?"undo":"done"}:null}function Ze(t){return(t&&t.lpMoves||[]).filter(function(t){return!!(t&&t.itemId&&t.toGroup)})}function tn(t){return(t||[]).map(function(t){return"• "+(t.name||t.itemId)+" → "+(t.toGroupLabel||t.toGroup)}).join("\n")}function en(t){return"string"!=typeof t||""===t||isNaN(Number(t))?t:Number(t)}function nn(t,e){return e?"Filed "+t+" · "+e+" failed":"Filed "+t+" into their groups"}function rn(t,e){return t&&(t.title||t.label)||"Step "+(e+1)}ke=t.bind(n);var an=6;function on(t){var e=t.signals||[];if(!e.length)return null;var n=e.slice(0,an);return ke`
      <div class="hgrid">
        <div class="hblk" data-status="crit">
          <div class="hblk__hdr">
            <span class="hblk__title">Alarms</span>
            <span class="hblk__tag hblk__tag--crit">${e.length} item${1===e.length?"":"s"}</span>
          </div>
          <ul class="hblk__anoms">
            ${n.map(function(e,n){return ke`<li key=${e.key||n} class="hblk__anom">
                <span class="hblk__anom-lp">
                  ${e.label||e.kind||"signal"}
                  ${e.ageRelHe?ke`<span class="hblk__anom-sev">${e.ageRelHe}</span>`:null}
                </span>
                <span class="hblk__anom-ex" style="display:flex; gap:10px; margin-top:6px;">
                  ${e.gmailUrl?ke`<a class="hbtn hbtn--ghost hbtn--sm" href=${e.gmailUrl} target="_blank" rel="noopener">Open</a>`:null}
                  <button type="button" class="hbtn hbtn--ghost hbtn--sm"
                          onClick=${function(){t.onDismiss&&t.onDismiss(e.key)}}>Dismiss</button>
                </span>
              </li>`})}
          </ul>
          ${e.length>an?ke`<div class="hblk__note">+${e.length-an} more -- dismiss items above to see them.</div>`:null}
        </div>
      </div>
    `}ke=t.bind(n);function ln(t,e,n,r){var a=Qn(t,e);return"recon-fail"===a?"crit":"recon-pass"!==a||(n||0)>0||r?"warn":"ok"}function sn(t,e,n,r){var a=Qn(t,e),i=[];return"recon-fail"===a?i.push("recon FAILED"):"recon-pass"!==a&&i.push("recon unconfirmed"),(n||0)>0&&i.push(n+" open alarm"+(1===n?"":"s")),r&&i.push("showing last-known data"),i}function un(t){return"crit"===t?ke`<span class="hblk__tag hblk__tag--crit">attention</span>`:"warn"===t?ke`<span class="hblk__tag hblk__tag--warn">check</span>`:ke`<span class="hblk__tag">ok</span>`}function cn(t){t=t||{};var e=t.health||null;if(e){var n="crit"===e.status||"warn"===e.status||"ok"===e.status?e.status:"warn",r=Array.isArray(e.consumers)?e.consumers:[],a=r.length,i=r.filter(function(t){return t&&"ok"===t.status}).length,o=r.filter(function(t){return t&&"crit"===t.status}),l=r.filter(function(t){return t&&"unknown"===t.status}),s=e.navMonth||"pending",u=e.backup||{},c=null!=u.ageDays?"backup "+u.ageDays+"d"+(u.stale?" stale":""):"backup unknown",d=!0===e.smoke?"smoke ok":!1===e.smoke?"smoke FAIL":"smoke ?",f=[i+"/"+a+" consumers produced "+s,c,d];e.build&&f.push(e.build);var p=f.join(" · "),h="missing: "+o.map(function(t){return t.app}).join(", "),v=l.length+" unconfirmed";return ke`
        <div class="hblk hblk--health" data-status=${n}>
          <div class="hblk__hdr">
            <span class="hblk__title">Atrium</span>
            ${un(n)}
          </div>
          <div class="hl__msg">${p}</div>
          ${o.length?ke`<div class="hl__note hl__note--crit">${h}</div>`:null}
          ${l.length?ke`<div class="hl__note hl__note--warn">${v}</div>`:null}
          ${o.length||l.length?null:ke`<div class="hl__note">all consumers confirmed</div>`}
        </div>`}var m=t.navRecon||null,g=t.navWidget||null,_=g&&g.recon,y=Array.isArray(t.alarms)?t.alarms.length:0,b=!!t.stale,w="inconsistent"===Zn(m,_);w&&nr(m,_);var k=w?"crit":ln(m,_,y,b),$=sn(m,_,y,b),S=w?"data inconsistent, reload":"ok"===k?"All systems normal":$.join(" · ");return ke`
      <div class="hblk hblk--health" data-status=${k}>
        <div class="hblk__hdr">
          <span class="hblk__title">Atrium</span>
          ${un(k)}
        </div>
        <div class="hl__msg">${S}</div>
        <div class="hl__note">consumers: see the close card</div>
      </div>`}ke=t.bind(n);var dn="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function fn(t){return dn&&"function"==typeof dn.optimisticWrite?dn.optimisticWrite(t):Ht(t)}var pn=2500,hn=30,vn="https://script.google.com/macros/s/AKfycbxSu6wp_NHktucOde1kS-rCVeV1IjkMnJxpycHffy62YU7lb4o-A349gF6_wwSiXLywfg/exec?api=consoleSummary",mn=6e4,gn=18e4,_n=6e4,yn=3e5,bn={fetchedAt:0},wn={fetchedAt:0,attention:0},kn={fetchedAt:0,key:null},$n={fetchedAt:0};function De(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}function Sn(){De([et.fanOut,et.navRecon,et.navWidget,et.playbook,et.transfers,et.silentSignals,et.staleData,et.atriumHealth]);var t=et.navWidget.value,e=et.playbook.value,n=((et.health.value||{}).portfolio||et.portfolio.value,et.fanOut.value);function r(t){et.fanOut.value=t}var a=et.silentSignals.value;function o(t){et.silentSignals.value=t}var u=et.navRecon.value,c=et.atriumHealth.value,d=(et.failNonce&&et.failNonce.value,"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus,s({uploadPhase:null,readingPct:null,uploading:!1,failReason:null})),f=d[0],p=d[1],h=s(null),v=h[0],m=h[1],g=s(!1),_=g[0],y=g[1],b=s(null),w=b[0],k=b[1],$=s(!1),S=$[0],x=$[1],A=s(!1),C=A[0],N=A[1],E=s(!1),D=E[0],P=E[1],O=s(!1),T=O[0],R=O[1],M=l({timer:null,polls:0,ym:null,gen:0}),L=l(null),F=l(0),I=l(!0);function j(){var t=v;t&&t.file&&(m(null),rt(t.year,t.month,t.file))}function U(){m(null)}function K(t){m(function(e){if(!e)return e;var n=Yn(e,t);return{file:e.file,year:n.year,month:n.month}})}function B(){ge&&"function"==typeof ge.onboardingSilentSignals&&ge.onboardingSilentSignals({}).then(function(t){bn.fetchedAt=Date.now(),N(!1);var e=t&&Array.isArray(t.rows)?t.rows:Array.isArray(t)?t:t&&t.signals||[],n=e.map(function(t){return t=t||{},t.kind&&!t.signalClass?t:{kind:t.signalClass,key:t.key,label:(t.lpNameHe?t.lpNameHe+" · ":"")+(t.signalLabelHe||""),gmailUrl:t.gmailUrl||null,severity:t.severity||"medium",ageRelHe:t.ageRelHe||null,evidence:t.evidence||null}});if(o(n),t&&t.banner){var r="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null;r&&"function"==typeof r.raise&&r.raise("onboarding:"+(t.banner.signalClass||"banner"),new Error(t.banner.text||t.banner.signalLabelHe||"onboarding banner"),{severity:"banner"})}}).catch(function(t){N(!0),pe("map:silentSignals",t)})}function H(){ge&&"function"==typeof ge.atriumHealth&&ge.atriumHealth().then(function(t){$n.fetchedAt=Date.now(),t&&(et.atriumHealth.value=t)}).catch(function(t){pe("home:atriumHealth",t)})}i(function(){return I.current=!0,function(){I.current=!1}},[]),i(function(){if("undefined"!=typeof document){var t=document.createElement("input");return t.type="file",t.id="nav-file-input",t.accept=".xlsx,.xls",t.style.display="none",t.addEventListener("change",function(){var e=t.files&&t.files[0];if(e){var n=Vn(new Date);m({file:e,year:n.year,month:n.month}),t.value=""}}),document.body.appendChild(t),L.current=t,function(){try{document.body.removeChild(t)}catch(t){}}}},[]),i(function(){var t=bn.fetchedAt>0&&Date.now()-bn.fetchedAt<mn;t||B()},[]),i(function(){var t=$n.fetchedAt>0&&Date.now()-$n.fetchedAt<yn;t||H()},[]);var G=s(0),W=G[0],V=G[1];i(function(){if("function"==typeof fetch){wn.fetchedAt>0&&V(wn.attention);var t=wn.fetchedAt>0&&Date.now()-wn.fetchedAt<gn;if(!t){var e=!1,n=null,r=setTimeout(function(){try{var t="function"==typeof AbortController?new AbortController:null;t&&(n=setTimeout(function(){t.abort()},2e4)),fetch(vn,t?{signal:t.signal}:void 0).then(function(t){return t.json()}).then(function(t){if(n&&(clearTimeout(n),n=null),!e&&t&&t.ok){var r=Number(t.attention)||0;V(r),R(!1),wn={fetchedAt:Date.now(),attention:r}}}).catch(function(t){n&&(clearTimeout(n),n=null),e||(R(!0),pe("map:consoleSummary",t))})}catch(t){e||(R(!0),pe("map:consoleSummary",t))}},3e3);return function(){e=!0,clearTimeout(r),n&&clearTimeout(n)}}}},[]);var Y=s([]),q=Y[0],J=Y[1];i(function(){be().then(function(t){J(t)}).catch(function(t){pe("home:appLinks",t)})},[]);var z=Gn({rpc:ge,writeRecon:function(t){et.navRecon.value=t},setFailed:P,onError:function(t){pe("map:navRecon",t)},genRef:F});function X(){M.current.timer&&(clearTimeout(M.current.timer),M.current.timer=null)}function Q(t,e){if(I.current){var n=M.current,a=n.gen;n.ym={year:t,month:e},ge.fanOutStatus(t,e).then(function(i){if(n.gen===a&&I.current){r(i||null);var o=!(!i||!i._stale);if(y(o),k(o&&i&&i._lastKnownAt||null),n.polls++,o&&n.polls<=hn)n.timer=setTimeout(function(){Q(t,e)},pn);else{var l=!o&&(!(!i||!i.pending)||(i&&i.consumers||[]).some(function(t){return"running"===t.status||"pending"===t.status||t.isPending}));!l||n.polls>hn?(X(),x(l&&n.polls>hn),o||z(t,e)):n.timer=setTimeout(function(){Q(t,e)},pn)}}}).catch(function(t){n.gen===a&&I.current&&(pe("map:fanOutStatus",t),X(),y(!0),k(null),x(!1))})}}function Z(){y(!1),x(!1);var e=M.current.ym||ur(t);e&&tt(e.year,e.month)}function tt(t,e){I.current&&(X(),M.current.polls=0,M.current.gen+=1,Q(t,e))}function rt(t,e,n){var r=qn({year:t,month:e});p({uploadPhase:"reading",readingPct:0,uploading:!1,failReason:null});var a=new FileReader;a.onprogress=function(t){t.lengthComputable&&p({uploadPhase:"reading",readingPct:t.loaded/t.total*100,uploading:!1,failReason:null})},a.onerror=function(){var t=a.error||new Error("file read failed"),e=t&&t.message||"file read failed";p({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:e}),pe("map:upload:read",t,{ownsSurfacing:!0}),we("Upload failed: "+e,"error")},a.onload=function(){try{p({uploadPhase:"uploading",readingPct:null,uploading:!0,failReason:null});var i=String(a.result).split(",").pop();ge.manualUpload(t,e,n.name,i).then(function(n){p({uploadPhase:"reconciling",readingPct:null,uploading:!1,failReason:null}),tt(t,e);var a=ot();ge.bootstrap({lite:!1},{ownsSurfacing:!0}).then(function(n){n&&lt(n,a),p({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),z(t,e),we("NAV uploaded for "+r,"success")}).catch(function(t){p({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),pe("map:upload:reboot",t,{ownsSurfacing:!0}),we("NAV uploaded for "+r+", but the refresh failed -- reload to see it","error")})}).catch(function(t){var e=t&&t.message||"upload failed";p({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:e}),pe("map:manualUpload",t,{ownsSurfacing:!0}),we("Upload failed: "+e,"error")})}catch(t){var o=t&&t.message||"upload failed";p({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:o}),pe("map:upload:run",t,{ownsSurfacing:!0}),we("Upload failed: "+o,"error")}},a.readAsDataURL(n)}function at(){L.current&&L.current.click()}function it(t,e){ge.triggerFanOut(t,e).then(function(){tt(t,e)}).catch(function(t){pe("map:triggerFanOut",t),we("Retry failed, try again","error")})}function st(t){if(t){var e=a.filter(function(e){return e.key===t})[0]||null,n=a;fn({key:"map:dismissSignal:"+t,applyLocal:function(){o(n.filter(function(e){return e.key!==t}))},rpc:function(e,n){ge.dismissSilentSignal(t).then(e).catch(n)},onRevert:function(n){var r=et.silentSignals.value;e&&!r.some(function(e){return e.key===t})&&o(r.concat([e])),pe("map:dismissSignal",n,{ownsSurfacing:!0}),we("Dismiss failed, alarm restored","error")}})}}function ut(){var e=et.navRecon.value;if(e&&e.monthKey){var n=/^(\d{4})-(\d{1,2})/.exec(e.monthKey);if(n)return{year:parseInt(n[1],10),month:parseInt(n[2],10)}}return M.current.ym||ur(t)}function ct(t){var e=ut();if(!e||!t){var n=new Error(t?"no close month resolved":"no sha256 on the reconciliation payload");return pe("map:approveNavClose",n),Promise.resolve({ok:!1,error:n.message})}return ge.approveNavClose(e.year,e.month,t).then(function(t){return t&&!1===t.ok?(pe("map:approveNavClose",new Error(t.error||"approve rejected")),t):(z(e.year,e.month),tt(e.year,e.month),t||{ok:!0})}).catch(function(t){return pe("map:approveNavClose",t),{ok:!1,error:t&&t.message||String(t)}})}function dt(){var t=ut();return t?z(t.year,t.month):Promise.resolve(null)}i(function(){var e=ur(t);if(e){var n=e.year+"-"+e.month,r=kn.key===n&&kn.fetchedAt>0&&Date.now()-kn.fetchedAt<_n&&!!et.navRecon.value;r||z(e.year,e.month).then(function(t){t&&(kn={key:n,fetchedAt:Date.now()})})}},[t&&t.closed&&t.closed.monthLabel]),i(function(){var e=ur(t);return e&&tt(e.year,e.month),X},[t&&t.closed&&t.closed.monthLabel]);var ft=[_?ke`<div key="fanOutStale" class="hblk__stale" role="alert">fan-out status${w?" stale · last known "+new Date(w).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):" stale · last poll failed"} · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${Z}>retry ↻</button></div>`:null,S&&!_?ke`<div key="fanOutCapped" class="hblk__stale hblk__stale--soft" role="status">checked out · some consumers still pending · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${Z}>keep watching ↻</button></div>`:null,C?ke`<div key="silentSignalsFailed" class="hblk__stale" role="alert">alarms unavailable · onboarding signal feed failed · <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${B}>retry ↻</button></div>`:null,D?ke`<div key="navReconFailed" class="hblk__stale" role="alert">nav reconciliation check unavailable</div>`:null];return ke`
      <div class="home">
        <${cn} health=${c} navRecon=${u} navWidget=${t}
                       alarms=${a} stale=${et.staleData.value} />
        <div class="hgrid hgrid--top">
          <${xn}
            navWidget=${t}
            navRecon=${u}
            playbook=${e}
            portfolio=${et.portfolio.value}
            fanOut=${n}
            onApproveRecon=${ct}
            onRerunRecon=${dt}
            onRetryConsumer=${function(){var e=M.current.ym||ur(t);return e?it(e.year,e.month):Promise.resolve(null)}}
            onUpload=${at}
            onOpenClose=${function(){nt("close")}}
            uploadCtx=${f}
            uploadConfirm=${{pending:v,onConfirm:j,onCancel:U,onStep:K}}
            staleBanners=${ft} />
          <${Fn} onOpenProjecting=${function(){nt("projecting")}} />
        </div>
        <div class="hgrid">
          <${Bn}
            transfers=${et.transfers.value}
            onOpenTransfers=${function(){nt("transfers")}} />
        </div>
        <${on} signals=${a} onDismiss=${st} />
        <${In}
          consoleAttention=${W}
          consoleSummaryFailed=${T}
          appLinks=${q} />
        <${Mn} />
      </div>
    `}ke=t.bind(n),Ie=String.fromCharCode(8212);function xn(t){var e=t.navWidget||null,n=t.navRecon||null,r=t.playbook||null,a=t.portfolio||null,i=t.fanOut||null,o=e&&e.closed||{},l=e&&e.recon,s=Qn(n,l),u=!(!n||!0!==n.reconciled&&!1!==n.reconciled),c="recon-fail"===s?"recon-fail":"recon-pass"===s&&u?"recon-pass":"recon-pending",d="recon-fail"===c?"crit":"recon-pass"===c?null:"warn",f="recon-fail"===c?"FAILED":"recon-pass"===c?"pass":"checking…",p=n&&n.deltaPctDisplay||l&&l.deltaPctDisplay||null,h=Je(r),v=h.total>0?Math.round(h.done/h.total*100):0,m="recon-pass"===c,g=a&&a.headline||null,_=g&&null!=g.ytd_pct?An(g.ytd_pct):null,y=g&&null!=g.mtd_pct?An(g.mtd_pct):null,b=n&&n.anomalies&&n.anomalies.length?n.anomalies:null,w=!!(n&&n.approvable&&n.sha256&&t.onApproveRecon),k=!!(i&&Array.isArray(i.consumers)&&i.consumers.some(function(t){return t&&"failed"===t.status})),$="recon-fail"===c?"crit":!m||h.done<h.total||k?"warn":"ok",S=pt(),x=pt(),A=pt(),C=S.busy,N=x.busy,E=A.busy,D=S.error||x.error||A.error;function P(){!C&&w&&S.run(Promise.resolve(t.onApproveRecon(n.sha256)).then(function(t){if(t&&!1===t.ok)throw new Error(t.error||"approve rejected");return t}))}function O(){!N&&t.onRerunRecon&&x.run(t.onRerunRecon())}function T(){!E&&t.onRetryConsumer&&A.run(t.onRetryConsumer())}return ke`
      <div class="hblk" data-status=${$}>
        <div class="hblk__hdr">
          <span class="hblk__title">NAV & Close</span>
          ${"recon-fail"===s?ke`<span class="hblk__tag hblk__tag--crit">recon FAILED</span>`:m?null:ke`<span class="hblk__tag hblk__tag--warn">recon unconfirmed</span>`}
        </div>
        <div class="hblk__big">${o.numeralDisplay||Ie}</div>
        <div class="hblk__row"><span class="hblk__k">Month</span><span class="hblk__v">${o.monthLabel||o.label||Ie}</span></div>
        <div class="hblk__row">
          <span class="hblk__k">Recon</span>
          <span class=${"hblk__v"+("crit"===d?" hblk__v--down":null===d?" hblk__v--up":"")}>
            ${f}${p?" · "+p:""}
          </span>
        </div>
        ${_||y?ke`<div class="hblk__row">
              <span class="hblk__k">YTD / MTD</span>
              <span class="hblk__v">
                ${_?ke`<span class=${g.ytd_pct>=0?"hblk__v--up":"hblk__v--down"}>${_}</span>`:Ie}
                ${" / "}
                ${y?ke`<span class=${g.mtd_pct>=0?"hblk__v--up":"hblk__v--down"}>${y}</span>`:Ie}
              </span>
            </div>`:null}
        <div class="hblk__row"><span class="hblk__k">Close checklist</span><span class="hblk__v">${h.total?h.done+" / "+h.total+" steps":Ie}</span></div>
        ${h.total?ke`<div class="hblk__bar"><div class="hblk__bartrack"><div class="hblk__barfill" style=${"width:"+v+"%"}></div></div><div class="hblk__barlbl">${v}%</div></div>`:null}
        ${Dn(i)}
        ${b?ke`<p class="hblk__counts">${b.length} item${1===b.length?"":"s"}${Pn(b)}</p>
             <ul class="hblk__anoms">
              ${Tn(b).map(function(t,e){return ke`<li key=${e} class="hblk__anom">
                  <span class="hblk__anom-lp">${t.name||t.class||"item"}${t.severity?ke`<span class="hblk__anom-sev">${t.severity}</span>`:null}</span>
                  <span class="hblk__anom-ex">${t.detail||""}</span>
                  ${t.suggestedAction?ke`<span class="hblk__anom-act">${t.suggestedAction}</span>`:null}
                </li>`})}
            </ul>
            ${b.length>On?ke`<div class="hblk__note">+${b.length-On} more -- open the close checklist to see the rest.</div>`:null}`:m||"ready"===s?null:ke`<div class="hblk__note">Fan-out is gated until the anomaly is resolved.</div>`}
        ${D?ke`<div class="hblk__note" role="alert" style="color:var(--down)">${D}</div>`:null}
        ${Cn(t.uploadConfirm)}
        ${Nn(t.uploadCtx)}
        ${t.staleBanners}
        <div class="hblk__acts">
          ${w?ke`<button type="button" class="hbtn hbtn--warn" disabled=${C} onClick=${P}>${C?"Confirming…":"Confirm reconciliation"}</button>`:null}
          ${k&&t.onRetryConsumer?ke`<button type="button" class="hbtn hbtn--crit" disabled=${E} onClick=${T}>${E?"Retrying…":"Retry fan-out"}</button>`:null}
          ${t.onOpenClose?ke`<button type="button" class="hbtn hbtn--ghost" onClick=${t.onOpenClose}>Open close checklist →</button>`:null}
        </div>
        <div class="hblk__acts hblk__acts--secondary">
          ${t.onRerunRecon?ke`<button type="button" class="hbtn hbtn--ghost hbtn--sm" disabled=${N} onClick=${O}>${N?"Re-running…":"Re-run recon"}</button>`:null}
          ${t.onUpload?ke`<button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${t.onUpload}>Upload NAV</button>`:null}
        </div>
      </div>
    `}function An(t){var e=100*t,n=e>=0?"+":"";return n+e.toFixed(2)+"%"}function Cn(t){if(!t||!t.pending)return null;var e=qn(t.pending),n=t.pending.file&&t.pending.file.name||"file";return ke`
      <div class="hblk__note hblk__upconfirm" role="status">
        <span class="hblk__upconfirm-lbl">Uploading ${n} as <strong>${e}</strong></span>
        <span class="hblk__upconfirm-acts">
          <button type="button" class="hbtn hbtn--ghost hbtn--sm" aria-label="Previous month"
                  onClick=${function(){t.onStep(-1)}}>${String.fromCharCode(8249)}</button>
          <button type="button" class="hbtn hbtn--ghost hbtn--sm" aria-label="Next month"
                  onClick=${function(){t.onStep(1)}}>${String.fromCharCode(8250)}</button>
          <button type="button" class="hbtn hbtn--warn hbtn--sm" onClick=${t.onConfirm}>Upload ${e}</button>
          <button type="button" class="hbtn hbtn--ghost hbtn--sm" onClick=${t.onCancel}>Cancel</button>
        </span>
      </div>`}function Nn(t){if(!t||!t.uploadPhase)return null;if("failed"===t.uploadPhase)return ke`<div class="hblk__note" role="alert" style="color:var(--down)">Upload failed: ${t.failReason||"unknown error"}</div>`;var e="reading"===t.uploadPhase?"Reading file"+(null!=t.readingPct?" · "+Math.round(t.readingPct)+"%":""):"uploading"===t.uploadPhase?"Uploading NAV…":"reconciling"===t.uploadPhase?"Reconciling…":t.uploadPhase;return ke`<div class="hblk__note is-loading" aria-busy="true">${e}</div>`}var En={done:"done",failed:"failed",running:"running…",pending:"pending",skipped_seasonal:"not this month"};function Dn(t){var e=t&&Array.isArray(t.consumers)?t.consumers:null;return e&&e.length?ke`
      <div class="hblk__row hblk__row--fanout">
        <span class="hblk__k">Fan-out</span>
        <span class="hblk__fanout">
          ${e.map(function(t){var e=t.status||"pending",n="done"===e?"hblk__fochip--ok":"failed"===e?"hblk__fochip--crit":"running"===e||"pending"===e?"hblk__fochip--warn":"hblk__fochip--muted";return ke`<span key=${t.key} class=${"hblk__fochip "+n} title=${t.details||""}>${t.label||t.key} · ${En[e]||e}</span>`})}
        </span>
      </div>
    `:null}function Pn(t){var e=0,n=0;return t.forEach(function(t){"hard"===t.severity?e++:"soft"===t.severity&&n++}),(e?" · "+e+" hard":"")+(n?" · "+n+" soft":"")}var On=6;function Tn(t){var e=t.filter(function(t){return"hard"===t.severity}),n=t.filter(function(t){return"hard"!==t.severity});return e.concat(n).slice(0,On)}ke=t.bind(n);function Rn(t){return Array.isArray(t)?t.filter(function(t){return t&&t.ownerOnly&&t.url&&!t.isHeader}):[]}function Mn(t){t=t||{};var e=Array.isArray(t.probeApps)?t.probeApps:null,n=s(e||[]),r=n[0],a=n[1];i(function(){if(!e){var t=!1;return be().then(function(e){t||a(e||[])}).catch(function(t){pe("personal:appLinks",t)}),function(){t=!0}}},[]);var o=Rn(r);return o.length?ke`
      <div class="hgrid hgrid--small hgrid--personal">
        ${o.map(function(t){return ke`
            <div class="hblk hblk--personal" data-status="info" key=${t.key}>
              <div class="hblk__hdr">
                <span class="hblk__title">Personal</span>
                ${t.cadence?ke`<span class="hblk__tag">${t.cadence}</span>`:null}
              </div>
              <div class="hblk__mini">${t.label||t.key}</div>
              ${t.subtitle?ke`<div class="hblk__minisub">${t.subtitle}</div>`:null}
              <div class="hblk__acts">
                <a class="hbtn hbtn--ghost" href=${t.url} target="_blank" rel="noopener">Open ↗</a>
              </div>
            </div>`})}
      </div>
    `:null}ke=t.bind(n);var Ln=[1,2,3];function je(t){if(!t)return null;var e=new Date(t);if(isNaN(e.getTime()))return null;try{return e.toLocaleString()}catch(t){return null}}function Fn(t){var e=(new Date).getDate(),n=-1!==Ln.indexOf(e);if(n)return ke`
        <div class="hblk" data-status="warn">
          <div class="hblk__hdr"><span class="hblk__title">Rough Yield · Projecting</span><span class="hblk__tag hblk__tag--warn">day 1-3 window</span></div>
          <${Sa} />
        </div>
      `;var r=et.navWidget.value,a=et.transfers.value,i=Pa(r,a&&a.monthLabel),o=i.lastResult&&je(i.lastResult.ts),l=null!=i.projectingClosingExact&&null!=i.prev,s=l?La(String(i.projectingClosingExact/1e6),i.prev,i.net):null;if(l&&s&&!s.invalid){var u=Fa(s.pct);return ke`
        <div class="hblk" data-status="ok">
          <div class="hblk__hdr"><span class="hblk__title">Rough Yield · Projecting</span><span class="hblk__tag">ready</span></div>
          <div class="hblk__row"><span class="hblk__k">${i.projectingMonthSlash||i.prevMonthLabel||"this month"}</span>
            <span class=${"hblk__v "+(s.pct>=0?"is-up":"is-down")}>${u}${i.netConfirmed?"":" ?"}</span>
          </div>
          <div class="hblk__row"><span class="hblk__k">Basis</span><span class="hblk__v">${i.prevMonthLabel||Na(i.prev,i.cur)} + ${Na(i.net,i.cur)} net</span></div>
          <div class="hblk__note">Computed from the finalized NAV as soon as it landed.${i.netConfirmed?"":" Net flows still confirming."}</div>
          <div class="hblk__acts">
            <button type="button" class="hbtn hbtn--ghost" onClick=${t.onOpenProjecting}>Open →</button>
          </div>
        </div>
      `}return ke`
      <div class="hblk" data-status="dormant">
        <div class="hblk__hdr"><span class="hblk__title">Rough Yield · Projecting</span><span class="hblk__tag">waiting on NAV</span></div>
        <div class="hblk__row"><span class="hblk__k">Last prepared</span><span class="hblk__v">${o||i.lastResult&&i.lastResult.display||"not prepared yet"}</span></div>
        <div class="hblk__row"><span class="hblk__k">Basis</span><span class="hblk__v">${i.prevMonthLabel||Na(i.prev,i.cur)}</span></div>
        ${null!=i.net?ke`<div class="hblk__row">
              <span class="hblk__k">Net flows (${i.projectingMonthSlash||i.prevMonthLabel||"projecting mo."})</span>
              <span class="hblk__v">
                ${i.cur}${i.net.toFixed(1)}M
                ${i.netConfirmed?null:ke`<span class="hblk__tag hblk__tag--warn">provisional</span>`}
              </span>
            </div>`:null}
        <div class="hblk__note">Fills in the moment NAV lands - no re-typing under pressure. Day 1-3 opens the editable card for an early estimate.</div>
        <div class="hblk__acts">
          <button type="button" class="hbtn hbtn--ghost" onClick=${t.onOpenProjecting}>Open →</button>
        </div>
      </div>
    `}ke=t.bind(n);function In(t){return ke`
      <div class="hgrid hgrid--small">
        ${"number"==typeof t.consoleAttention&&t.consoleAttention>0?ke`<div class="hblk">
              <div class="hblk__hdr"><span class="hblk__title">Operator Console</span></div>
              <div class="hblk__minisub">LP onboarding pipeline</div>
              <div class="hblk__acts"><a class="hbtn hbtn--ghost" href="https://sign.legacyvpartners.com/console" target="_blank" rel="noopener">Open ↗</a></div>
            </div>`:null}
        ${t.consoleSummaryFailed?ke`<div class="hblk">
              <div class="hblk__hdr"><span class="hblk__title">Operator Console</span></div>
              <div class="hblk__minisub">status unknown right now</div>
            </div>`:null}
        <${jn} appLinks=${t.appLinks} />
      </div>
    `}ke=t.bind(n);function jn(t){var e=(t.appLinks||[]).filter(function(t){return t&&!t.isHeader&&t.url&&!t.hideFromGrid&&!t.ownerOnly});return e.length?ke`
      <div class="hblk hblk--tools">
        <div class="hblk__hdr"><span class="hblk__title">More tools</span></div>
        <div class="hblk__tools">
          ${e.map(function(t){return ke`<a key=${t.key} class="hblk__toollink" href=${t.url} target="_blank" rel="noopener">${t.label||t.key}</a>`})}
        </div>
      </div>
    `:null}ke=t.bind(n);var Un=[{key:"drafted",label:"Drafted",he:"חדש"},{key:"atAvi",label:"Awaiting Wire",he:"ממתין להעברה"},{key:"approved",label:"Approved",he:"מאושר"},{key:"transferred",label:"Transferred",he:"הועברו"}];function Kn(t){var e=null;if(t.forEach(function(t){var n=t&&(t.startDateIso||t.startDate);if(n){var r=new Date(n);isNaN(r.getTime())||(null===e||r<e)&&(e=r)}}),null===e)return null;var n=Math.floor((Date.now()-e.getTime())/864e5);return n>=0?n:null}function Bn(t){var e=t.transfers||null,n=e&&Array.isArray(e.rows)?e.rows:[],r=co(n,e&&e.monthLabel),a=Bi(),i={drafted:[],atAvi:[],approved:[],transferred:[]};r.forEach(function(t){var e=Hi(t,a),n=oo(t,e);i[n]&&i[n].push(t)});var o=i.atAvi.length,l=o?Kn(i.atAvi):null,s=o?"crit":"ok";return ke`
      <div class="hblk" data-status=${s}>
        <div class="hblk__hdr">
          <span class="hblk__title">Transfers</span>
          ${o?ke`<span class="hblk__tag hblk__tag--crit">${o} awaiting wire${null!=l?" · "+l+"d":""}</span>`:null}
        </div>
        <div class="hblk__pipeline">
          ${Un.map(function(t){var e=i[t.key].length,n="atAvi"===t.key&&e>0?"crit":null;return ke`<div key=${t.key} class="hstage" data-flag=${n}>
              <div class="hstage__lbl">${t.label} <span class="hstage__he">${t.he}</span></div>
              <div class="hstage__n">${e}</div>
            </div>`})}
        </div>
        ${t.staleBanners}
        <div class="hblk__acts">
          ${o?ke`<button type="button" class="hbtn hbtn--crit" onClick=${t.onOpenTransfers}>Review ${o} awaiting wire →</button>`:ke`<button type="button" class="hbtn hbtn--ghost" onClick=${t.onOpenTransfers}>Open →</button>`}
        </div>
      </div>
    `}function Hn(t,e){return!!t&&t.current===e}function Gn(t){var e=t.rpc,n=t.writeRecon,r=t.setFailed,a=t.onError,i=t.genRef;return function(t,o){if(!t||!o)return Promise.resolve(null);var l=i.current=(i.current||0)+1;return e.navReconciliation(t,o).then(function(t){return Hn(i,l)?(n(t||null),r(!1),t):null}).catch(function(t){return Hn(i,l)?(r(!0),a&&a(t),null):null})}}var Wn=["January","February","March","April","May","June","July","August","September","October","November","December"];function Vn(t){var e=t||new Date,n=new Date(e.getFullYear(),e.getMonth()-1,1);return{year:n.getFullYear(),month:n.getMonth()+1}}function Yn(t,e){var n=new Date(t.year,t.month-1+e,1);return{year:n.getFullYear(),month:n.getMonth()+1}}function qn(t){return t&&t.month?(Wn[t.month-1]||"month "+t.month)+" "+t.year:""}var Jn="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};function zn(t){switch(t){case"done":return Jn.OK;case"running":return Jn.RUNNING;case"failed":return Jn.FAILED;case"skipped_seasonal":return"SKIPPED";case"pending":return Jn.PENDING;default:return null}}function Xn(t){if(t=t||{},t.uploadPhase)return t.uploadPhase;var e=t.navWidget||null;return t.uploading?"uploading":null!=t.readingPct?"reading":e&&e.ingestRunning?"reconciling":Qn(t.navRecon,e&&e.recon)}function Qn(t,e){var n=!(!t||!1!==t.reconciled||!0===t.approved),r=!(!e||e.passed);if(n||r)return"recon-fail";var a=!(!t||!0!==t.reconciled),i=!(!e||!0!==e.passed);return a||i?"recon-pass":"ready"}function Zn(t,e){var n=!(!t||!1!==t.reconciled||!0===t.approved),r=!(!t||!0!==t.reconciled),a=!(!e||e.passed),i=!(!e||!0!==e.passed);return r&&a||n&&i?"inconsistent":"consistent"}var tr=4e3,er=Object.create(null);function nr(t,e){try{if("inconsistent"!==Zn(t,e))return!1;var n=t&&!0===t.reconciled?"recon-pass":"recon-fail",r=e&&!0===e.passed?"recon-pass":"recon-fail",a=n+"|"+r,i="undefined"!=typeof Date&&Date.now?Date.now():0,o=er[a]||0;return i-o>=tr&&(er[a]=i,"undefined"!=typeof console&&console.warn&&console.warn("[atriumX] recon feeds disagree: cross="+n+", legacy="+r+' . showing "data inconsistent, reload" instead of trusting either feed.')),!0}catch(t){return!1}}var rr={close:function(t,e){var n=e.playbook;if(n&&Array.isArray(n.steps)&&n.steps.length){var r="number"==typeof n.completedCount?n.completedCount:n.steps.filter(function(t){return t&&t.done}).length,a="number"==typeof n.totalCount?n.totalCount:n.steps.length;t.health=or(t.health,a>0&&r>=a?Jn.OK:Jn.RUNNING),t.reason||(t.reason="close "+r+" / "+a)}},portfolio:function(t,e){if(e.portfolioHealth){var n="error"===e.portfolioHealth?Jn.FAILED:"loading"===e.portfolioHealth?Jn.PENDING:Jn.OK;t.health=or(t.health,n),n===Jn.FAILED&&(t.badge=t.badge||"!",t.retryable=!0,t.reason||(t.reason="portfolio fetch failed"))}},"operator-console":function(t,e,n){"number"==typeof e.consoleAttention&&e.consoleAttention>0&&(t.health=or(t.health,Jn.ANOMALY),t.badge=String(e.consoleAttention+n),t.reason=(t.reason?t.reason+" · ":"")+e.consoleAttention+" console attention item"+(1===e.consoleAttention?"":"s"))}};function ar(t){t=t||{};var e=t.fanOut||null,n=t.silentSignals||[],r=t.failBus||null,a={};if(e&&e.consumers)for(var i=0;i<e.consumers.length;i++){var o=e.consumers[i];o&&o.key&&(a[o.key]=o)}for(var l={},s=0;s<n.length;s++){var u=n[s]||{},c=u.station||lr(u.kind)||"console";l[c]=(l[c]||0)+1}for(var d={},f=0;f<cr.length;f++){var p=cr[f],h=null,v=null,m=null,g=!1,_=p.href||null,y=null;if(p.isUpload){var b=t.uploadCtx||{},w={uploadPhase:b.uploadPhase,uploading:b.uploading,readingPct:b.readingPct,navWidget:t.navWidget||b.navWidget||null,navRecon:t.navRecon||null};h=Xn(w),d[p.id]={health:h,badge:null,reason:null,retryable:!1,openUrl:null,isUpload:!0}}else{if(p.consumerKey&&a[p.consumerKey]){var k=a[p.consumerKey],$=zn(k.status);$&&(h=$,k.details&&(m=k.details),k.manualOpenUrl&&(_=k.manualOpenUrl),$===Jn.FAILED&&(v="!",g=!0)),y=Object.prototype.hasOwnProperty.call(k,"dispatch")?null===k.dispatch?"unknown":k.dispatch:null}p.alarmKey&&l[p.alarmKey]&&(h=or(h,Jn.ANOMALY),v=String(l[p.alarmKey]),m||(m=l[p.alarmKey]+" attention item"+(1===l[p.alarmKey]?"":"s")));var S=rr[p.id];if(S){var x={health:h,badge:v,reason:m,retryable:g};S(x,t,l[p.alarmKey]||0),h=x.health,v=x.badge,m=x.reason,g=x.retryable}if(r&&"function"==typeof r.stationHealth){var A=r.stationHealth(p.id);A&&!A.resolved&&(h=or(h,Jn.FAILED),v=v||"!",g=!0,m||(m=A.message||"fetch failed"),A.retry&&(d[p.id+":__retry"]=A.retry))}d[p.id]={health:h,badge:v,reason:m,retryable:g,openUrl:_,dispatch:y,consumerKey:p.consumerKey||null}}}return d}var ir={OK:0,SKIPPED:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function or(t,e){if(null==t)return e;if(null==e)return t;var n=null==ir[t]?-1:ir[t],r=null==ir[e]?-1:ir[e];return r>n?e:t}function lr(t){switch(t){case"sig_mismatch":case"bank_pushback":return"transfers";case"bdo_ishur_unapproved":case"bdo_ooo_banner":return"console";default:return null}}var sr=["January","February","March","April","May","June","July","August","September","October","November","December"];function ur(t){var e=t&&t.closed;if(!e)return null;if(e.year&&e.month)return{year:e.year,month:e.month};if(e.monthLabel){var n=/^(\w+)\s+(\d{4})$/.exec(String(e.monthLabel).trim());if(n){var r=sr.indexOf(n[1]);if(r>=0)return{year:parseInt(n[2],10),month:r+1}}}return null}var cr=[{id:"upload",role:"upload",line:"nav",x:175,y:150,labelSide:"right",label:"Upload NAV",tip:"Upload audited NAV (xlsx to cache to pipeline)",isUpload:!0},{id:"factsheet",role:"consumer",line:"nav",x:235,y:150,labelSide:"above",label:"Fct",tip:"Fact sheet · monthly LP-facing",href:"https://docs.google.com/spreadsheets/d/1Z34Yq3rlfQSRKhsexRVnb42XPb88YeabSv7mcpgJ4qs/edit",consumerKey:"factsheet",flowOrder:1},{id:"fo-reports",role:"consumer",line:"nav",x:310,y:150,labelSide:"below",label:"Foa",tip:"FO carry · semi-annual H1/H2 distribution + payout docs",href:"https://docs.google.com/spreadsheets/d/13SDNCrSNP_lthyr4woacjl8HEsPXZlo4lyFimmSPed4/edit",consumerKey:"family-office",flowOrder:2},{id:"operator-console",role:"through",line:"nav",x:475,y:90,labelSide:"above",label:"Op",tip:"Operator Console · LP onboarding (Cayman + Israel)",href:"https://sign.legacyvpartners.com/console",alarmKey:"console"},{id:"gafner",role:"consumer",line:"nav",x:820,y:150,labelSide:"below",label:"Gfn",tip:"Gafner statement",href:"https://docs.google.com/spreadsheets/d/198ZVw-4RPr-KWX-KwpccHV1ofzqqHdq7adqSGVwAkVQ/edit",consumerKey:"gafner-bound",flowOrder:3},{id:"fibi-ws",role:"through",line:"nav",x:895,y:150,labelSide:"above",label:"Ws",tip:"WS Signer · upload xlsm, code signs and dates",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbwYp1O7A_GpikCM-bbazwkPjPc4MtID5oV8S-c338iptQfCxUanSu6qSgqhczwitG7GfA/exec"},{id:"form-867",role:"through",line:"nav-867",x:1005,y:90,labelSide:"above",label:"867",tip:"Form 867 · annual withholding-tax generator",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbytfIVXYCmzqtAg0u33YVNue03vBq5ZGlYGGYnYtrWMsJZt-grhi0pXgVHWrGbyMi3z/exec"},{id:"transfer-tracker",role:"through",line:"daily",x:235,y:250,labelSide:"above",label:"Tf",tip:"Transfers · the money workshop (sign / wire / amounts)",href:"https://docs.google.com/spreadsheets/d/1BcFFah16W-sYUHqIt6JyUttMOIQgQ7OyGEPE2zHpy6c/edit",alarmKey:"transfers",focusView:"transfers"},{id:"invoice",role:"through",line:"daily",x:310,y:250,labelSide:"below",label:"Inv",tip:"Invoice Reviewer · AI-assisted invoice approval drafts",href:"https://docs.google.com/spreadsheets/d/1HVKIOTZdxssrx8kOmfRh3MEiWb9K8rwgnoIN_oFq0vM/edit"},{id:"close",role:"through",line:"daily",x:400,y:250,labelSide:"above",label:"Cls",tip:"Close · monthly close checklist (the filling vessel)",focusView:"close"},{id:"projecting",role:"through",line:"daily",x:470,y:250,labelSide:"above",label:"Prj",tip:"Projecting · Rough Yield / day-1 WhatsApp yield card",focusView:"projecting"},{id:"portfolio",role:"through",line:"daily",x:540,y:250,labelSide:"below",label:"Pf",tip:"Portfolio · positions, movers, NAV chart",focusView:"portfolio"},{id:"payslip",role:"consumer",line:"daily",x:850,y:250,labelSide:"above",label:"Pyl",tip:"Payslip · monthly payslip parser",ownerOnly:!0,consumerKey:"salary"},{id:"monday",role:"interchange",line:"ext",x:1060,y:150,labelSide:"right",label:"Mon",tip:"Monday · People board (investor profiles, qualification, files)",href:"https://legacyvpartners.monday.com/boards/1606766164",lines:["nav","ext"],capTop:"--blue",capBottom:"--slate"},{id:"calendar",role:"through",line:"ext",x:1060,y:200,labelSide:"right",label:"Cal",tip:"Google Calendar · daily",href:"https://calendar.google.com/",focusView:"schedule"},{id:"gmail",role:"interchange",line:"ext",x:1060,y:250,labelSide:"right",label:"Gml",tip:"Gmail · daily inbox (Daily terminus interchange)",href:"https://mail.google.com/",lines:["daily","ext"],capTop:"--mustard",capBottom:"--slate"},{id:"drive",role:"interchange",line:"ext",x:1060,y:350,labelSide:"right",label:"Drv",tip:"Drive · shared files (LP onboarding terminus interchange)",href:"https://drive.google.com/",lines:["lp","ext"],capTop:"--coral",capBottom:"--slate"}],dr={nav:"--blue","nav-867":"--blue",daily:"--mustard",lp:"--coral",cross:"--plum",ext:"--slate"},fr=(cr.filter(function(t){return null!=t.flowOrder}).sort(function(t,e){return t.flowOrder-e.flowOrder}).map(function(t){return t.id}),function(){for(var t={},e=0;e<cr.length;e++)cr[e].consumerKey&&(t[cr[e].consumerKey]=cr[e].id)}(),ke=t.bind(n),String.fromCharCode(8230));function pr(t){var e=dr[t];return e?"var("+e+")":"var(--ink-faint)"}function hr(t){if(t.tip){var e=t.tip.split(String.fromCharCode(183))[0].trim();if(e)return e}return t.label}function vr(t){var e={};if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];r&&r.key&&r.url&&(e[r.key]=r.url)}return cr.filter(function(t){return!t.isUpload&&!t.focusView}).filter(function(t){return!t.ownerOnly||!(!t.consumerKey||!e[t.consumerKey])}).map(function(t){var n=hr(t),r=t.ownerOnly?t.consumerKey&&e[t.consumerKey]||null:t.href;return{id:"go-"+t.id,kind:"destination",stationId:t.id,consumerKey:t.consumerKey||null,label:n,hint:t.label,keywords:(n+" "+t.label+" "+(t.tip||"")).toLowerCase(),lineColor:pr(t.line),href:r,isUpload:!!t.isUpload,run:function(e){br(r?Object.assign({},t,{href:r}):t),e.close()}}})}function mr(t){return Array.isArray(t)?t.filter(function(t){return t&&!t.isHeader&&t.url&&!t.ownerOnly}).map(function(t){return{id:"app-"+t.key,kind:"app-link",label:t.label||t.key,hint:t.cadence||"",keywords:(String(t.label||"")+" "+String(t.subtitle||"")+" "+String(t.key||"")).toLowerCase(),href:t.url,run:function(e){try{var n=window.open(t.url,"_blank","noopener");n||(location.href=t.url)}catch(e){pe("palette:app-link:"+t.key,e)}e.close()}}}):[]}function gr(){return[{id:"act-upload",kind:"action",isWrite:!0,label:"Upload audited NAV",hint:"upload",keywords:"upload nav audited xlsx fan out fanout trigger ingest",run:function(t){kr(),t.close()}},{id:"act-transfers",kind:"action",label:"Jump to Transfers",hint:"tracker",keywords:"transfers transfer tracker daily jump money wires",run:function(t){yr("transfer-tracker"),t.close()}},{id:"act-refresh-portfolio",kind:"action",label:"Refresh portfolio",hint:"ytd / mtd",keywords:"refresh portfolio reload ytd mtd retry performance",run:function(t){$r(),t.close()}},{id:"act-open-close",kind:"action",label:"Open Close",hint:"checklist",keywords:"close checklist playbook month vessel steps filing revshare",run:function(t){nt("close"),t.close()}},{id:"act-open-projecting",kind:"action",label:"Open Projecting",hint:"rough yield",keywords:"projecting yield rough net flows closing whatsapp omri",run:function(t){nt("projecting"),t.close()}},{id:"act-open-portfolio",kind:"action",label:"Open Portfolio",hint:"positions",keywords:"portfolio positions movers chart benchmark nav fx allocation",run:function(t){nt("portfolio"),t.close()}},{id:"act-open-schedule",kind:"action",label:"Open Schedule",hint:"departures",keywords:"schedule departures board tasks events calendar today",run:function(t){nt("schedule"),t.close()}}]}function _r(t){for(var e=0;e<(t||[]).length;e++)if(t[e]&&!t[e].isWrite)return e;return 0}function yr(t){for(var e=0;e<cr.length;e++)if(cr[e].id===t)return void br(cr[e])}function br(t){if(t.isUpload)kr();else if(t.focusView)nt(t.focusView);else if(t.href)try{var e=window.open(t.href,"_blank","noopener");e||(location.href=t.href)}catch(e){pe("palette:open:"+t.id,e)}else wr(t.id)}function wr(t){try{var e=document.querySelector('[data-station="'+t+'"]');e&&e.scrollIntoView&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});try{window.dispatchEvent(new CustomEvent("atrium:open-station",{detail:{id:t}}))}catch(t){}}catch(e){pe("palette:scroll:"+t,e)}}function kr(){"home"!==et.view.value&&nt("home");var t=0;!function e(){var n=document.getElementById("nav-file-input");n&&"function"==typeof n.click?n.click():t++<20?setTimeout(e,50):(pe("palette:upload:no-input",new Error("#nav-file-input not mounted after routing home")),we("Could not open the upload picker -- open Home and use Upload NAV directly","error"))}()}function $r(){try{"function"==typeof ft?ft(ge,pe):ge.portfolio().catch(function(t){pe("palette:portfolio",t)})}catch(t){pe("palette:portfolio:sync",t)}}function Sr(t){switch(t){case"ok":return{txt:"ok",tone:"ok"};case"running":return{txt:"running",tone:"running"};case"pending":return{txt:"queued",tone:"pending"};case"skipped":return{txt:"skipped",tone:"stale"};case"stale":return{txt:"stale",tone:"stale"};case"failed":return{txt:"failed",tone:"failed"};case"anomaly":return{txt:"anomaly",tone:"anomaly"};default:return null}}function xr(t,e){if(!e)return 1;var n=t.keywords,r=t.label.toLowerCase();if(0===r.indexOf(e))return 1e3;if(r.indexOf(e)>=0)return 800;if(n.indexOf(e)>=0)return 500;for(var a=0,i=0;i<n.length&&a<e.length;i++)n.charCodeAt(i)===e.charCodeAt(a)&&a++;return a===e.length?100:-1}function Ar(){var t=s(!1),e=t[0],n=t[1],r=s(""),u=r[0],c=r[1],d=s(0),f=d[0],p=d[1],h=l(null),v=l(null),m=l(null),g=et.navWidget.value,_=et.fanOut&&et.fanOut.value||null,y=et.silentSignals&&et.silentSignals.value||[],b=o(function(){try{return ar({navWidget:g,fanOut:_,silentSignals:y})||{}}catch(t){return pe("palette:health",t),{}}},[g,_,y]),w=s([]),k=w[0],$=w[1];i(function(){e&&be().then(function(t){$(t)}).catch(function(t){pe("palette:appLinks",t)})},[e]);var S=o(function(){return gr().concat(vr(k)).concat(mr(k))},[k]),x=o(function(){for(var t=u.trim().toLowerCase(),e=[],n=0;n<S.length;n++){var r=xr(S[n],t);r>=0&&e.push({item:S[n],sc:r,ord:n})}return e.sort(function(t,e){return e.sc-t.sc||t.ord-e.ord}),e.map(function(t){return t.item})},[u,S]);i(function(){f>=x.length&&p(x.length?x.length-1:0)},[x.length]),i(function(){function t(t){var r=t.key,a=t.metaKey||t.ctrlKey;if(a&&("k"===r||"K"===r))return t.preventDefault(),void n(function(t){return!t});var i=t.target,o=i&&i.tagName?i.tagName.toLowerCase():"",l="input"===o||"textarea"===o||i&&i.isContentEditable;if(!e&&!l){if("/"===r)return t.preventDefault(),void n(!0);if(!a&&!t.altKey){var s=String(r||"").toLowerCase();if("u"===s)t.preventDefault(),kr();else if("r"===s&&"transfers"===et.view.value){var u=document.querySelector(".tx-view__refresh");u&&(t.preventDefault(),u.click())}else if("e"===s){var c=document.querySelector(".tx-band--transferred .tx-band__hdr--toggle");c&&(t.preventDefault(),c.click())}}}}function r(){n(!0)}return window.addEventListener("keydown",t),window.addEventListener("atriumX:openPalette",r),function(){window.removeEventListener("keydown",t),window.removeEventListener("atriumX:openPalette",r)}},[e]),i(function(){if(e){try{m.current=document.activeElement}catch(t){}c(""),p(_r(S));var t=setTimeout(function(){try{h.current&&h.current.focus()}catch(t){}},0);return function(){clearTimeout(t)}}try{var n=m.current;n&&"function"==typeof n.focus&&n.focus()}catch(t){}},[e]);var A=a(function(){n(!1)},[]);function C(t){if(t)try{t.run({close:A})}catch(e){pe("palette:run:"+t.id,e),A()}}function N(t){var e=t.key;if("Escape"===e)return t.preventDefault(),void A();if("ArrowDown"===e)return t.preventDefault(),void p(function(t){return x.length?(t+1)%x.length:0});if("ArrowUp"===e)return t.preventDefault(),void p(function(t){return x.length?(t-1+x.length)%x.length:0});if("Home"===e)return t.preventDefault(),void p(0);if("End"===e)return t.preventDefault(),void p(x.length?x.length-1:0);if("Enter"===e)return t.preventDefault(),void C(x[f]);if("Tab"===e){t.preventDefault();try{h.current&&h.current.focus()}catch(t){}}}if(i(function(){if(e&&v.current){var t=v.current.querySelector("#palette-opt-"+f);if(t&&t.scrollIntoView)try{t.scrollIntoView({block:"nearest"})}catch(t){}}},[f,e]),!e)return null;var E=x.length?"palette-opt-"+f:null,D="Jump to a station, view, or action"+fr;return ke`
      <div class="cmdp-overlay" onMouseDown=${function(t){t.target===t.currentTarget&&A()}}>
        <div class="cmdp" role="dialog" aria-modal="true" aria-label="Command palette"
             onKeyDown=${N}>
          <div class="cmdp__search">
            <span class="cmdp__icon" aria-hidden="true">${String.fromCharCode(8981)}</span>
            <input ref=${h} class="cmdp__input" type="text"
                   placeholder=${D}
                   role="combobox" aria-expanded="true" aria-controls="cmdp-list"
                   aria-activedescendant=${E}
                   autocomplete="off" autocorrect="off" spellcheck=${!1}
                   value=${u}
                   onInput=${function(t){c(t.target.value),p(t.target.value.trim()?0:_r(S))}} />
            <kbd class="cmdp__kbd" aria-hidden="true">esc</kbd>
          </div>

          <ul ref=${v} id="cmdp-list" class="cmdp__list" role="listbox"
              aria-label="Results">
            ${0===x.length?ke`
              <li class="cmdp__empty" role="option" aria-disabled="true">No matches</li>
            `:x.map(function(t,e){var n=e===f,r="destination"===t.kind&&t.stationId&&b[t.stationId]||null,a=r&&r.health?Sr(String(r.health).toLowerCase()):null;return ke`
                <li id=${"palette-opt-"+e}
                    role="option"
                    aria-selected=${n}
                    class=${"cmdp__opt"+(n?" is-active":"")}
                    onMouseEnter=${function(){p(e)}}
                    onClick=${function(){C(t)}}>
                  <span class="cmdp__kind" data-kind=${t.kind} aria-hidden="true">
                    ${"action"===t.kind?String.fromCharCode(9656):"app-link"===t.kind?String.fromCharCode(8599):ke`<span class="cmdp__line" style=${"background:"+(t.lineColor||"transparent")}></span>`}
                  </span>
                  <span class="cmdp__label">${t.label}</span>
                  ${t.hint?ke`<span class="cmdp__hint">${t.hint}</span>`:null}
                  ${a?ke`<span class=${"cmdp__health cmdp__health--"+a.tone}>${a.txt}</span>`:null}
                </li>`})}
          </ul>

          <div class="cmdp__foot" aria-hidden="true">
            <span><kbd>${String.fromCharCode(8593)}</kbd><kbd>${String.fromCharCode(8595)}</kbd> move</span>
            <span><kbd>${String.fromCharCode(8629)}</kbd> open</span>
            <span><kbd>${String.fromCharCode(8984)}K</kbd> toggle</span>
          </div>
        </div>
      </div>
    `}ke=t.bind(n);var Cr=["day","mtd","hy","ytd","1y"];function Nr(t){var e=ia(t.p);return"bloomberg"===e.kind?ke`<span class="ticker-cell">
        <span class=${"ticker "+e.pill}>${e.base}</span>
        <span class="ticker-sub ticker-sub--xch">${e.sub}</span>
      </span>`:"tase"===e.kind?ke`<span class="ticker-cell">
        <span class="ticker ticker--he">${e.base}</span>
        <span class="ticker-sub ticker-sub--tase">TASE</span>
      </span>`:"empty"===e.kind?ke`<span class="ticker">${e.base}</span>`:ke`<span class=${"ticker "+e.pill}>${e.base}</span>`}function Er(t){var e=t.cell,n="pf-metric pf-metric--"+e.cls+(t.active?" is-active":"");return ke`<span class=${n} title=${e.title||null}>${"closed"===e.kind?"closed "+e.text:e.text}</span>`}function Dr(t){var e=t.e,n=sa(e.quote);return ke`
      <div class="pf-mover-row">
        <${Nr} p=${e.p} />
        ${Cr.map(function(r){var a="day"===r?!!e.quote:!!e.hist,i="day"===r?t.quotesSettled:t.historySettled,o=ha(e[r],e.ysym,a,"day"===r&&n,i);return ke`<${Er} key=${r} cell=${o} active=${r===t.rank} />`})}
      </div>`}function Pr(t){var e=t.rankBy||"mtd",n=fa(t.enriched||[],e);function r(n,r,a){return ke`
        <div class=${"pf-movers__col "+a}>
          <div class="pf-movers__hdr">
            <span class="pf-movers__lbl">${n}</span>
            ${Cr.map(function(t){return ke`<span key=${t} class=${"pf-movers__m"+(t===e?" is-active":"")}>${t.toUpperCase()}</span>`})}
          </div>
          ${r.length?r.map(function(n,r){return ke`<${Dr} key=${n.ysym||r} e=${n} rank=${e}
                  quotesSettled=${t.quotesSettled} historySettled=${t.historySettled} />`}):ke`<div class="pf-movers__none">none</div>`}
        </div>`}return ke`
      <div class="pf-movers" aria-label="Top movers, weighted fund contribution">
        ${r("UP",n.ups,"pf-movers__col--up")}
        ${r("DOWN",n.downs,"pf-movers__col--down")}
      </div>`}ke=t.bind(n);function Or(t){var e=t.model;return e?ke`
      <div class="pf-chart" data-state="live">
        <div class="pf-chart__y" aria-hidden="true">
          ${e.yLabels.map(function(t,e){return ke`<span key=${e}>${t}</span>`})}
        </div>
        <svg class="pf-chart__svg" viewBox=${"0 0 "+e.W+" "+e.H}
             preserveAspectRatio="none" role="img" aria-label="Fund return vs benchmark">
          <line x1="0" y1="0" x2=${e.W} y2="0" stroke="rgba(20,20,20,0.06)" />
          <line x1="0" y1=${e.zeroY} x2=${e.W} y2=${e.zeroY}
                stroke="rgba(20,20,20,0.18)" stroke-dasharray="2 4" />
          <line x1="0" y1=${e.H} x2=${e.W} y2=${e.H} stroke="rgba(20,20,20,0.06)" />
          <path d=${e.areaPath} fill="rgba(46,133,64,0.10)" />
          ${e.benchPoints?ke`<polyline points=${e.benchPoints} fill="none"
                     stroke=${e.benchStrokeVar} stroke-width="1.5"
                     stroke-dasharray="4 3" opacity="0.75" />`:null}
          <polyline points=${e.fundPoints} fill="none" stroke="var(--up)" stroke-width="2" />
          <circle cx=${e.lastX} cy=${e.lastY} r="4" fill="var(--up)" />
        </svg>
        <div class="pf-chart__x" aria-hidden="true">
          ${e.xTicks.map(function(t,e){return ke`<span key=${e}>${t}</span>`})}
        </div>
      </div>
    `:ke`
        <div class="pf-chart" data-state=${t.failed?"failed":"loading"}>
          <svg class="pf-chart__svg" viewBox="0 0 1000 280" role="img"
               aria-label=${t.failed?"NAV history unavailable":"NAV history loading"}>
            <text x="500" y="140" text-anchor="middle" font-size="13" fill="rgba(20,20,20,0.4)"
                  class=${t.failed?null:"is-loading"} aria-busy=${t.failed?null:"true"}>
              ${t.failed?"history unavailable":"history loading"}
            </text>
          </svg>
        </div>`}ke=t.bind(n);var Tr=["1mo","3mo","ytd","1y","3y","max"],Rr=["day","mtd","hy","ytd","1y"],Mr=[{value:"",label:"None"},{value:"SPX",label:"SPX"},{value:"TASE35",label:"TASE 35"},{value:"USDILS",label:"USD/ILS"}];function Lr(t){return null==t.v?ke`<span class="pf-id__pct"></span>`:ke`<span class=${"pf-id__pct "+Zr(t.v)}>${ta(t.v)}</span>`}var Fr=3e5,Ir={key:null,ts:0,md:null};function jr(t){var e=(t&&t.positions||[]).map(na).filter(Boolean);return(t&&t.as_of_iso||"")+"|"+e.join(",")}function Ur(t){return t&&Ir.md?Ir.key!==jr(t)||Date.now()-Ir.ts>Fr?null:Ir.md:null}var Kr="(max-width: 560px)";function Br(){var t=s(function(){return"undefined"!=typeof matchMedia&&matchMedia(Kr).matches}),e=t[0],n=t[1];return i(function(){if("undefined"!=typeof matchMedia){var t=matchMedia(Kr);return n(t.matches),t.addEventListener?t.addEventListener("change",e):t.addListener&&t.addListener(e),function(){t.removeEventListener?t.removeEventListener("change",e):t.removeListener&&t.removeListener(e)}}function e(t){n(t.matches)}},[]),e}function Hr(t){return null==t?{text:zr,cls:"na"}:{text:ta(t),cls:Zr(t)}}function Gr(t){var e=t.headline||{},n=t.enriched||[],r=t.fresh||{},a=null!=e.nav_rolling?ea(e.nav_rolling):zr,i=Hr(e.mtd_pct),o=Hr(e.ytd_pct),l=fa(n,"mtd"),s=l.ups.slice(0,3),u=l.downs.slice(0,3),c=pa(n,"alloc","desc").slice(0,7);function d(t,e,n){return ke`
        <div class=${"pf-m-movers__col "+n}>
          <span class="pf-m-movers__hdr">${t}</span>
          ${e.length?e.map(function(t,e){var n=ia(t.p),r=Hr(t.mtd);return ke`<div class="pf-m-movers__row" key=${t.ysym||e}>
                  <span class="pf-m-movers__tkr">${n.base}</span>
                  <span class=${"pf-m-movers__pct "+r.cls}>${r.text}</span>
                </div>`}):ke`<div class="pf-m-movers__none">none</div>`}
        </div>`}return ke`
      <div class="pf-m">
        <section class="pf-m-card">
          <div class="pf-m-card__head">
            <span class="pf-m-card__title">Returns</span>
            <span class="pf-m-card__asof">${r.text||""}</span>
          </div>
          <div class="pf-m-nav">
            <span class="pf-m-nav__brand">Legacy Value Partners</span>
            <span class="pf-m-nav__val">${a}</span>
          </div>
          <div class="pf-m-stats">
            <div class="pf-m-stat">
              <span class="pf-m-stat__lbl">MTD</span>
              <span class=${"pf-m-stat__val "+i.cls}>${i.text}</span>
            </div>
            <div class="pf-m-stat">
              <span class="pf-m-stat__lbl">YTD</span>
              <span class=${"pf-m-stat__val "+o.cls}>${o.text}</span>
            </div>
          </div>
          <div class="pf-m-movers" aria-label="Top movers by MTD contribution">
            ${d(String.fromCharCode(9650),s,"pf-m-movers__col--up")}
            ${d(String.fromCharCode(9660),u,"pf-m-movers__col--down")}
          </div>
        </section>

        <section class="pf-m-card">
          <div class="pf-m-card__head">
            <span class="pf-m-card__title">Top holdings</span>
            <span class="pf-m-card__asof">top ${Math.min(7,c.length)}</span>
          </div>
          <div class="pf-m-holds">
            ${c.length?c.map(function(t,e){var n=ia(t.p),r=String(t.p&&t.p.name||"").trim()||n.base,a=Hr(t.mtd);return ke`<div class="pf-m-hold-row" key=${t.ysym||e}>
                    <span class="pf-m-hold-row__name">${r}</span>
                    <span class="pf-m-hold-row__wt">${(100*t.alloc).toFixed(1)+"%"}</span>
                    <span class=${"pf-m-hold-row__mtd "+a.cls}>${a.text}</span>
                  </div>`}):ke`<div class="pf-m-movers__none">no positions in this snapshot</div>`}
          </div>
        </section>
      </div>`}function Wr(){var t=et.portfolio.value,e=et.health.value||{},n=e.portfolio||(t?"live":"loading"),r=s(function(){return wa()}),a=r[0],o=r[1];function u(t,e){o(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return r[t]=e,ka(r),r})}var c=s(function(){return Ur(t)||{quotes:{},history:{},fx:null,fxFailed:!1,navHistory:null,navHistoryFailed:!1,bench:null,quotesSettled:!1,historySettled:!1}}),d=c[0],f=c[1];function p(t){f(function(e){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n})}var h=l(0);i(function(){t&&(Ir={key:jr(t),ts:Date.now(),md:d})},[d,t]),i(function(){if(t){var e=++h.current,n=(t.positions||[]).map(na).filter(Boolean);n.length&&(p({quotesSettled:!1,historySettled:!1}),ge.quotes(n).then(function(t){e===h.current&&p(t?{quotes:t,quotesSettled:!0}:{quotesSettled:!0})}).catch(function(t){e===h.current&&p({quotesSettled:!0}),pe("pf:quotes",t)}),ge.history(n,"2y").then(function(t){e===h.current&&p(t?{history:t,historySettled:!0}:{historySettled:!0})}).catch(function(t){e===h.current&&p({historySettled:!0}),pe("pf:history",t)})),ge.fx().then(function(t){e===h.current&&p({fx:t,fxFailed:!t})}).catch(function(t){e===h.current&&p({fx:null,fxFailed:!0}),pe("pf:fx",t)});var r=ma(t);r&&r.length?p({navHistory:r,navHistoryFailed:!1}):ge.fundNavHistory().then(function(t){e===h.current&&p({navHistory:t||[],navHistoryFailed:!1})}).catch(function(t){e===h.current&&p({navHistory:[],navHistoryFailed:!0}),pe("pf:fundNavHistory",t)})}},[t]),i(function(){var t=h.current,e=a.activeBenchmark;e?ge.benchmarkHistory(e,a.activeRange).then(function(e){t===h.current&&p({bench:e})}).catch(function(e){t===h.current&&p({bench:null}),pe("pf:benchmarkHistory",e)}):p({bench:null})},[a.activeBenchmark,a.activeRange,t]);var v=Br();function m(){ft(ge,pe)}if(!t&&"error"===n)return ke`
        <div class="pf-view" data-state="error">
          <div class="pf-view__err" role="alert">portfolio unavailable ·${" "}
            <button type="button" class="pf-view__retry" onClick=${m}>retry ↻</button>
          </div>
        </div>`;if(!t)return ke`
        <div class="pf-view" data-state="loading">
          <div class="pf-view__empty" aria-busy="true">loading portfolio…</div>
        </div>`;var g=Array.isArray(t.positions)?t.positions:[],_=da(t,d.quotes,d.history),y=t.headline||{},b=_a(t.as_of_iso),w=ya(t.data_freshness),k=ga(d.navHistory||[],d.bench,a.activeRange,a.activeBenchmark);function $(t){a.sortBy===t?u("sortDir","asc"===a.sortDir?"desc":"asc"):o(function(e){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.sortBy=t,n.sortDir="sym"===t?"asc":"desc",ka(n),n})}var S=d.fx,x="unavailable";if(S)if(S.last_updated_iso){var A=new Date(S.last_updated_iso);x="spot · live "+String(A.getHours()).padStart(2,"0")+":"+String(A.getMinutes()).padStart(2,"0")}else x="spot";else d.fxFailed||(x="loading");return v?ke`
        <div class="pf-view pf-view--compact" data-state="live">
          ${"loading"===n?ke`<div class="pf-banner pf-banner--soft">refreshing portfolio…</div>`:null}
          ${"error"===n?ke`<div class="pf-banner pf-banner--err" role="alert">portfolio refresh failed · showing last-known ·${" "}
                <button type="button" class="pf-view__retry" onClick=${m}>retry ↻</button></div>`:null}
          <${Gr} headline=${y} enriched=${_} fresh=${b} />
        </div>`:ke`
      <div class="pf-view" data-state="live">
        <div class="pf-id">
          <div class="pf-id__main">
            <span class="pf-id__nav">${null!=y.nav_rolling?ea(y.nav_rolling):zr}</span>
            <span class="pf-id__sub">
              ${[null!=t.num_lps?t.num_lps+" LPs":null,_.length+" positions"].filter(Boolean).join(" · ")||"unavailable"}
            </span>
            <span class=${"pf-id__fresh pf-id__fresh--"+(b.cls||"ok")}>${b.text}</span>
            ${w?ke`<span class=${"pf-id__fresh pf-id__fresh--"+w.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${w.text}</span>`:null}
          </div>
          <div class="pf-id__perf">
            <span class="pf-id__perf-lbl">YTD</span><${Lr} v=${y.ytd_pct} />
            <span class="pf-id__perf-lbl">MTD</span><${Lr} v=${y.mtd_pct} />
          </div>
          <div class="pf-id__fx" aria-label="USD ILS spot">
            <span class="pf-id__fx-spot">${S&&null!=S.spot?S.spot.toFixed(3):d.fxFailed?zr:String.fromCharCode(8230)}</span>
            <span class="pf-id__fx-sub">${"USD/ILS · "+x}</span>
            ${S&&null!=S.mtd_pct?ke`<span class=${"pf-id__fx-pct "+Zr(S.mtd_pct)}>${ta(S.mtd_pct)} mtd</span>`:null}
            ${S&&null!=S.ytd_pct?ke`<span class=${"pf-id__fx-pct "+Zr(S.ytd_pct)}>${ta(S.ytd_pct)} ytd</span>`:null}
          </div>
          <a class="pf-view__exportbtn" href=${Xr}
             target="_blank" rel="noopener"
             title="Fresh FIBI export: launches a local Claude session that drives the whole flow; you only do the FIBI login"
             aria-label="Export portfolio from FIBI">Export ↗</a>
          <button type="button" class="pf-view__refreshbtn" title="Refresh portfolio"
                  aria-label="Refresh portfolio" onClick=${m}>↻</button>
        </div>

        ${"loading"===n?ke`<div class="pf-banner pf-banner--soft">refreshing portfolio…</div>`:null}
        ${"error"===n?ke`<div class="pf-banner pf-banner--err" role="alert">portfolio refresh failed · showing last-known ·${" "}
              <button type="button" class="pf-view__retry" onClick=${m}>retry ↻</button></div>`:null}

        ${0===g.length?ke`<div class="pf-view__empty">no positions in this snapshot</div>`:ke`
            <div class="pf-rank" role="group" aria-label="Rank movers by">
              ${Rr.map(function(t){var e=a.rankBy===t,n="hy"===t?"HY is a projected (predicted) return, not yet realized":null;return ke`<button key=${t} type="button"
                    class=${"pf-pill"+(e?" pf-pill--active":"")}
                    aria-pressed=${String(e)} title=${n}
                    onClick=${function(){u("rankBy",t)}}>${t.toUpperCase()}</button>`})}
            </div>
            <${Pr} enriched=${_} rankBy=${a.rankBy}
              quotesSettled=${d.quotesSettled} historySettled=${d.historySettled} />
            <${qr}
              enriched=${_}
              sortBy=${a.sortBy} sortDir=${a.sortDir}
              showAll=${a.showAllPositions}
              quotesSettled=${d.quotesSettled} historySettled=${d.historySettled}
              onSort=${$}
              onToggleShowAll=${function(){u("showAllPositions",!a.showAllPositions)}} />
          `}

        <div class="pf-graph">
          <div class="pf-graph__controls">
            <div class="pf-graph__pills" role="group" aria-label="Chart range">
              ${Tr.map(function(t){var e=a.activeRange===t;return ke`<button key=${t} type="button"
                    class=${"pf-pill"+(e?" pf-pill--active":"")}
                    aria-pressed=${String(e)}
                    onClick=${function(){u("activeRange",t)}}>${t.toUpperCase()}</button>`})}
            </div>
            <select class="pf-graph__bench" aria-label="Benchmark"
                    value=${a.activeBenchmark}
                    onChange=${function(t){u("activeBenchmark",t.target.value)}}>
              ${Mr.map(function(t){return ke`<option key=${t.value||"none"} value=${t.value}>${t.label}</option>`})}
            </select>
            ${a.activeBenchmark&&!d.bench?ke`<span class="pf-graph__benchwarn" role="status">benchmark unavailable</span>`:null}
          </div>
          <${Or} model=${k} failed=${d.navHistoryFailed} />
        </div>
      </div>
    `}ke=t.bind(n);var Vr=[{key:"sym",label:"Position"},{key:"alloc",label:"Alloc",title:"Allocation % is of gross position value, not the headline NAV"},{key:"day",label:"Day"},{key:"mtd",label:"MTD"},{key:"ytd",label:"YTD"},{key:"1y",label:"1Y"}];function Yr(t){var e=t.cell;return ke`<td class=${"num pf-td--"+e.cls} title=${e.title||null}>${"closed"===e.kind?"closed "+e.text:e.text}</td>`}function qr(t){var e=t.enriched||[],n=t.sortBy||"alloc",r=t.sortDir||"desc",a=pa(e,n,r),i=t.showAll?a:a.slice(0,12),o=l(null);function s(){var e=!t.showAll;if(t.onToggleShowAll&&t.onToggleShowAll(),!e&&o.current&&o.current.scrollIntoView)try{o.current.scrollIntoView({behavior:"smooth",block:"start"})}catch(t){}}return e.length?ke`
      <div class="pf-positions" ref=${o}>
        <div class="pf-positions__scroll">
        <table class="pf-positions__table">
          <thead>
            <tr>
              ${Vr.map(function(e){var a=e.key===n,i=a?"asc"===r?"ascending":"descending":null;return ke`<th key=${e.key} scope="col" aria-sort=${i}
                    class=${(a?"sorted":"")+(a&&"asc"===r?" asc":"")}>
                  <button type="button" class="pf-positions__sortbtn" title=${e.title||null}
                          onClick=${function(){t.onSort&&t.onSort(e.key)}}>
                    ${e.label}${a?"asc"===r?" "+String.fromCharCode(8593):" "+String.fromCharCode(8595):""}
                  </button>
                </th>`})}
            </tr>
          </thead>
          <tbody>
            ${i.map(function(e,n){var r=sa(e.quote);return ke`<tr key=${e.ysym||e.p&&e.p.name||n}>
                <th scope="row"><${Nr} p=${e.p} /></th>
                <td class="num">${(100*e.alloc).toFixed(1)+"%"}</td>
                <${Yr} cell=${ha(e.day,e.ysym,!!e.quote,r,t.quotesSettled)} />
                <${Yr} cell=${ha(e.mtd,e.ysym,!!e.hist,!1,t.historySettled)} />
                <${Yr} cell=${ha(e.ytd,e.ysym,!!e.hist,!1,t.historySettled)} />
                <${Yr} cell=${ha(e["1y"],e.ysym,!!e.hist,!1,t.historySettled)} />
              </tr>`})}
          </tbody>
        </table>
        </div>
        <div class="pf-positions__foot">
          <span class="pf-positions__count">${i.length} shown of ${a.length}</span>
          ${a.length>12?ke`<button type="button" class="pf-positions__expand" onClick=${s}>
                ${t.showAll?"Show top 12 only":"Show all "+a.length+" positions"}
              </button>`:null}
        </div>
      </div>
    `:ke`<div class="pf-positions" ref=${o}>
        <div class="pf-positions__empty">portfolio unavailable</div>
      </div>`}var Jr={"AIXA GY":"AIXA.DE","EXA FP":"EXA.PA","AVIO IM":"AVIO.MI","7013 JP":"7013.T","PLUS LN":"PLUS.L","LSEG LN":"LSEG.L","FFH CN":"FFH.TO","FQT GY":"FQT.DE","K7X GR":"K7X.DE","RW5 GR":"RW5.DE"},zr=String.fromCharCode(8212),Xr="https://operate.legacyvpartners.com/go/export-portfolio.html";function Qr(t){return t<0&&"-0.00"===(100*t).toFixed(2)}function Zr(t){return Qr(t)?"":t>=0?"up":"down"}function ta(t){return Qr(t)?"0.00%":Bt(t)}function ea(t){var e=Number(t);if(!isFinite(e)||0===e)return zr;var n=Math.abs(e);return n>=1e9?"₪"+(e/1e9).toFixed(2)+"B":n>=1e6?"₪"+(e/1e6).toFixed(1)+"M":n>=1e3?"₪"+Math.round(e/1e3)+"K":"₪"+Math.round(e)}function na(t){if(!t||!t.sym)return null;var e=String(t.sym).trim();return e?Jr[e]||e:null}function ra(t){if(!t)return"tase";var e=String(t).trim();if(!e)return"tase";if(e.indexOf(" ")<0)return"americas";var n=e.split(/\s+/)[1];switch(n){case"GY":case"GR":case"FP":case"IM":case"LN":return"europe";case"JP":return"asia";case"CN":return"americas";case"TA":return"tase";default:return"other"}}var aa={americas:"ticker--blue",europe:"ticker--mustard",asia:"ticker--coral",other:"ticker--slate"};function ia(t){var e=String(t&&t.sym||"").trim();if(e){var n=ra(e),r=aa[n]||"ticker--slate";if(e.indexOf(" ")>=0){var a=e.split(/\s+/);return{kind:"bloomberg",pill:r,base:a[0],sub:a[1]}}return{kind:"us",pill:r,base:e,sub:null}}var i=String(t&&t.name||"").trim();return i?{kind:"tase",pill:"ticker--he",base:i,sub:"TASE"}:{kind:"empty",pill:"ticker",base:String.fromCharCode(8230),sub:null}}function oa(t,e){if(!t||!t.closes||!t.timestamps)return null;for(var n=null,r=-1/0,a=0;a<t.timestamps.length;a++){var i=1e3*t.timestamps[a];if(i>e)break;i>r&&(r=i,n=t.closes[a])}return n}function la(t,e,n,r){if("day"===n)return t&&null!=t.change_pct?t.change_pct:null;if(!t||null==t.price)return null;var a,i=r||new Date;if("mtd"===n)a=new Date(i.getFullYear(),i.getMonth(),0).getTime();else if("ytd"===n)a=new Date(i.getFullYear()-1,11,31).getTime();else{if("1y"!==n)return null;a=i.getTime()-31536e6}var o=oa(e,a);return null==o||0===o?null:(t.price-o)/o}function sa(t){if(!t)return!1;var e=String(t.market_state||"").toUpperCase();return!(!e||"REGULAR"===e||"PRE"===e||"PREPRE"===e||"POST"===e||"POSTPOST"===e)}function ua(t,e){return e&&t&&null!=t.value?Number(t.value)/e:0}function ca(t,e,n,r,a){var i=na(t),o=i?(n||{})[i]:null,l=i?(r||{})[i]:null,s=ua(t,e);function u(t){if(!i)return null;var e="day"===t?o?la(o,l,"day",a):null:l?la(o,l,t,a):null;return null==e?null:e*s}return{p:t,ysym:i,quote:o,hist:l,alloc:s,day:u("day"),mtd:null!=t.mtd_contrib_pct?t.mtd_contrib_pct:u("mtd"),hy:null!=t.hy_contrib_pct?t.hy_contrib_pct:null,ytd:null!=t.ytd_contrib_pct?t.ytd_contrib_pct:u("ytd"),"1y":u("1y")}}function da(t,e,n,r){var a=t&&t.positions||[],i=a.reduce(function(t,e){return t+(Number(e.value)||0)},0)||1;return a.filter(function(t){return(t.value||0)>0}).map(function(t){return ca(t,i,e,n,r)})}function fa(t,e){var n=e||"mtd",r=(t||[]).filter(function(t){return null!=t[n]}),a=r.filter(function(t){return t[n]>0}).sort(function(t,e){return e[n]-t[n]}).slice(0,4),i=r.filter(function(t){return t[n]<0}).sort(function(t,e){return t[n]-e[n]}).slice(0,4);return{ups:a,downs:i}}function pa(t,e,n){var r=(t||[]).slice(),a="desc"===n?1:-1;return r.sort(function(t,r){if("sym"===e){var i=String(t.p.sym||t.p.name),o=String(r.p.sym||r.p.name);return("asc"===n?1:-1)*i.localeCompare(o)}var l="alloc"===e?t.alloc:t[e],s="alloc"===e?r.alloc:r[e];return null==l&&null==s?0:null==l?1:null==s?-1:a*(s-l)}),r}function ha(t,e,n,r,a){return null!=t?r?{kind:"closed",text:ta(t),cls:"closed"}:{kind:"value",text:ta(t),cls:Zr(t)}:e?n?{kind:"na",text:zr,cls:"na"}:a?{kind:"noquote",text:zr,cls:"na",title:"no quote"}:{kind:"cold",text:String.fromCharCode(8230),cls:"cold"}:{kind:"na",text:zr,cls:"na"}}function va(t,e){var n=null!=e?e:Date.now();switch(t){case"1mo":return 26784e5;case"3mo":return 79488e5;case"ytd":return n-new Date(new Date(n).getFullYear(),0,1).getTime();case"1y":default:return 31536e6;case"3y":return 94608e6;case"max":return null}}function ma(t){return t&&Array.isArray(t.historical_nav)&&t.historical_nav.length?t.historical_nav.map(function(t){var e=String(t.month||"").split("-");if(2!==e.length)return null;var n=parseInt(e[0],10),r=parseInt(e[1],10);return isFinite(n)&&isFinite(r)?{year:n,month:r,label:t.month,nav_ils:Number(t.total_ils)||0}:null}).filter(function(t){return t&&t.nav_ils>0}):null}function ga(t,e,n,r,a){if(t=t||[],!t.length)return null;var i=null!=a?a:Date.now(),o=va(n,i),l=t.filter(function(t){var e=new Date(t.year,t.month-1,28).getTime();return null==o||i-e<=o});l.length<2&&(l=t.slice(-Math.max(2,t.length)));var s=l[0].nav_ils,u=l.map(function(t){return(t.nav_ils-s)/s}),c=l.map(function(t){return new Date(t.year,t.month-1,28).getTime()}),d=null;if(e&&e.closes&&e.closes.length&&e.timestamps){for(var f=c[0]/1e3,p=[],h=0;h<e.timestamps.length;h++)e.timestamps[h]>=f&&null!=e.closes[h]&&p.push({ts:e.timestamps[h],close:e.closes[h]});if(p.length>=2){var v=p[0].close;d=p.map(function(t){return{t:1e3*t.ts,v:(t.close-v)/v}})}}var m=u.slice();d&&(m=m.concat(d.map(function(t){return t.v})));var g=Math.min.apply(null,m),_=Math.max.apply(null,m);g===_&&(g-=.01,_+=.01);var y=.1*(_-g);g-=y,_+=y;var b=c[0],w=c[c.length-1];d&&(b=Math.min(b,d[0].t),w=Math.max(w,d[d.length-1].t)),w===b&&(w=b+1);var k=1e3,$=280;function S(t){return(_-t)/(_-g)*$}function x(t){return(t-b)/(w-b)*k}var A=S(0).toFixed(1),C=u.map(function(t,e){return x(c[e]).toFixed(1)+","+S(t).toFixed(1)}),N=x(c[0]).toFixed(1),E=x(c[c.length-1]).toFixed(1),D="M"+N+","+A+" L"+C.join(" L")+" L"+E+","+A+" Z",P=null;d&&(P=d.map(function(t){return x(t.t).toFixed(1)+","+S(t.v).toFixed(1)}).join(" "));for(var O=[],T=(_-g)/4,R=4;R>=0;R--)O.push(ta(g+T*R));for(var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],L=l.length,F=[],I=Math.max(1,Math.floor(L/6)),j=0;j<L;j+=I){var U=l[j];F.push(M[U.month-1]+(0===j?" '"+String(U.year).slice(2):""))}if((L-1)%I!=0){var K=l[L-1];F.push(M[K.month-1])}return{W:k,H:$,fundPoints:C.join(" "),areaPath:D,lastX:E,lastY:S(u[u.length-1]).toFixed(1),zeroY:A,benchPoints:P,benchStrokeVar:"USDILS"===r?"var(--mustard)":"var(--slate)",yLabels:O,xTicks:F}}function _a(t,e){if(!t)return{text:"no Drive file registered",cls:"missing"};var n=new Date(t+"T00:00:00");if(isNaN(n.getTime()))return{text:"exported "+t,cls:""};var r=null!=e?e:Date.now(),a=Math.floor((r-n.getTime())/864e5),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o="exported "+n.getDate()+" "+i[n.getMonth()];return a>14?{text:o+" · "+a+"d stale",cls:"very-stale"}:a>7?{text:o+" · "+a+"d ago",cls:"stale"}:{text:o+(a>0?" · "+a+"d ago":" · today"),cls:""}}function ya(t){if(!t||!1!==t.ok)return null;var e=[];return t.flow_months_missing&&t.flow_months_missing.length&&e.push("flows incomplete for "+t.flow_months_missing.join(", ")),!1===t.naaman_ok&&e.push("NAV "+(null!=t.naaman_stale_months?t.naaman_stale_months+"mo stale":"stale")+(t.naaman_as_of?" (as of "+t.naaman_as_of+")":"")),!1===t.benchmarks_ok&&e.push("benchmarks unavailable"),{text:e.length?e.join(" · "):"data freshness degraded",cls:"very-stale"}}var ba={activeRange:"1y",activeBenchmark:"",rankBy:"mtd",sortBy:"alloc",sortDir:"desc",showAllPositions:!1};function wa(t){var e={};for(var n in ba)Object.prototype.hasOwnProperty.call(ba,n)&&(e[n]=ba[n]);try{var r=t||("undefined"!=typeof localStorage?localStorage:null);if(!r)return e;var a=r.getItem("pf:prefs");if(!a)return e;var i=JSON.parse(a);["activeRange","activeBenchmark","rankBy","sortBy","sortDir"].forEach(function(t){"string"==typeof i[t]&&(e[t]=i[t])}),"boolean"==typeof i.showAllPositions&&(e.showAllPositions=i.showAllPositions)}catch(t){}return e}function ka(t,e){try{var n=e||("undefined"!=typeof localStorage?localStorage:null);if(!n)return;n.setItem("pf:prefs",JSON.stringify({activeRange:t.activeRange,activeBenchmark:t.activeBenchmark,rankBy:t.rankBy,sortBy:t.sortBy,sortDir:t.sortDir,showAllPositions:t.showAllPositions}))}catch(t){}}ke=t.bind(n);function $a(t){var e=t.rows||[];return e.length?ke`
      <div class="pj-bd__group">
        <div class="pj-bd__heading">${t.label}</div>
        ${e.map(function(e,n){return ke`<div key=${n} class="pj-bd__row">
            <span class="pj-bd__lp">${e.lp}</span>
            <span class=${"pj-bd__amt pj-bd__amt--"+("dep"===t.kind?"up":"down")}>
              ${("dep"===t.kind?"+":String.fromCharCode(8722))+Ea(e.amount,t.sym)}
            </span>
          </div>`})}
        <div class="pj-bd__subtotal">Subtotal${" "}
          <b>${("dep"===t.kind?"+":String.fromCharCode(8722))+Ea(t.total,t.sym)}</b>
        </div>
      </div>`:null}function Sa(){var t=et.navWidget.value,e=et.transfers.value,n=Pa(t,e&&e.monthLabel),r=s({state:"idle",net:null,agg:null}),a=r[0],o=r[1],u=s(""),c=u[0],d=u[1],f=s(!1),p=f[0],h=f[1],v=s(null),m=v[0],g=v[1],_=l(!1),y=l(null),b=pt(),w="ok"===a.state?a.net:n.net,k="ok"===a.state||("idle"===a.state||"loading"===a.state)&&n.netConfirmed;i(function(){if(!_.current){_.current=!0;var t=n.lastResult;if(t&&(y.current={display:t.display||null,closingMillions:"number"==typeof t.closingMillions?t.closingMillions:null},"number"==typeof t.closingMillions&&isFinite(t.closingMillions)&&t.closingMillions>0?d(String(t.closingMillions)):t.display&&g(t)),!n.projectingMonthSlash)return o({state:"no-month",net:null,agg:null}),void pe("projecting:no-month",new Error("no projectingMonthSlash resolved; net stays unconfirmed"));o({state:"loading",net:null,agg:null}),ge.monthlyTransferBreakdown(n.projectingMonthSlash).then(function(t){var e=Ta(t),n=Oa(e.rows),r=Ra(e.totals,n);o({state:"ok",net:r/1e6,agg:n})}).catch(function(t){o({state:"fail",net:null,agg:null}),pe("projecting:breakdown",t)})}},[]);var $=La(c,n.prev,w),S=!(!$||!$.invalid),x=S?null:$;function A(){if(x&&null!=x.pct){var t=Fa(x.pct),e=y.current;if(!e||e.display!==t||e.closingMillions!==x.closing){var r=n.projectingMonthSlash;r?b.run(ge.saveStoredRoughYield(r,{display:t,tag:"rough · pre-BDO",ts:(new Date).toISOString(),closingMillions:x.closing}).then(function(e){return y.current={display:t,closingMillions:x.closing},e}).catch(function(t){throw pe("projecting:save",t),t}),{errorMsg:"Could not save the rough yield estimate, try again"}):pe("projecting:save:badLabel",new Error('cannot derive MM/YYYY from "'+n.prevMonthLabel+'"'))}}}var C,N=Na(n.prev,n.cur),E=Na(w,n.cur);x?(C=(n.prevMonthLabel?n.prevMonthLabel+" · ":"")+"projecting · read as "+Na(x.closing,n.cur),k||(C+=" · net flows unconfirmed")):C=n.prevMonthLabel?n.prevMonthLabel+" · projecting":"projecting";var D=xa,P="",O=null,T=null;x?(D=Fa(x.pct)+(k?"":" ?"),P=k?x.pct>=0?"is-up":"is-down":"is-provisional",k||(O="Net flows not confirmed by the breakdown service. This yield is provisional.")):m&&m.display&&(D=m.display,P=/^[-−]/.test(m.display)?"is-down":"is-up",O=(m.tag||"saved")+(m.ts?" · "+String(m.ts).slice(0,16).replace("T"," "):""),T=(m.tag||"rough · saved")+(m.ts?" "+String(m.ts).slice(0,10):""));var R=a.agg,M=t?"live":"loading";return ke`
      <div class="pj-view" data-state=${M} data-confirmed=${String(!!k)}>
        ${t?ke`
            <div class="pj-card">
              <div class="pj-card__meta">${C}</div>

              <div class="pj-formula" aria-label="Rough yield formula">
                <span class="pj-formula__num">
                  closing <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <span class="pj-formula__term">${N}</span>
                  <span class="pj-formula__op">${String.fromCharCode(8722)}</span>${" "}
                  <button type="button"
                          class=${"pj-formula__net"+(R?" has-bd":"")}
                          aria-expanded=${String(p)}
                          aria-label="Net flows breakdown"
                          aria-disabled=${String(!R)}
                          onClick=${function(){R&&h(!p)}}>${E}</button>
                  ${k?null:ke`<span class="pj-net-warn" role="status"
                            title="Net flows not confirmed by the breakdown service. Rough yield is provisional.">${String.fromCharCode(9888)} unconfirmed</span>`}
                </span>
                <span class="pj-formula__rule" aria-hidden="true"></span>
                <span class="pj-formula__den">${N}</span>
              </div>

              ${"fail"===a.state?ke`<div class="pj-banner pj-banner--err" role="alert">net flows unconfirmed · breakdown fetch failed · rough yield is provisional</div>`:null}
              ${"no-month"===a.state?ke`<div class="pj-banner pj-banner--err" role="alert">no projecting month resolved · net flows unconfirmed</div>`:null}
              ${"loading"===a.state?ke`<div class="pj-banner pj-banner--soft">confirming net flows…</div>`:null}

              ${p&&R?ke`<div class="pj-bd" aria-label="Net flows breakdown detail">
                    <div class="pj-bd__title">${(n.prevMonthLabel||n.projectingMonthSlash||"")+" · net flows"}</div>
                    <${$a} label="+ Subscriptions / increases (ILS)" kind="dep" rows=${R.items.filter(function(t){return"ILS"===t.currency&&"dep"===t.kind})} total=${R.ilsDep} sym="₪" />
                    <${$a} label=${String.fromCharCode(8722)+" Redemptions (ILS)"} kind="red" rows=${R.items.filter(function(t){return"ILS"===t.currency&&"red"===t.kind})} total=${R.ilsRed} sym="₪" />
                    <${$a} label="+ Subscriptions / increases (USD)" kind="dep" rows=${R.items.filter(function(t){return"USD"===t.currency&&"dep"===t.kind})} total=${R.usdDep} sym="$" />
                    <${$a} label=${String.fromCharCode(8722)+" Redemptions (USD)"} kind="red" rows=${R.items.filter(function(t){return"USD"===t.currency&&"red"===t.kind})} total=${R.usdRed} sym="$" />
                    ${R.items.length?ke`
                        <div class="pj-bd__nets">
                          ${0!==R.netIls||R.items.some(function(t){return"ILS"===t.currency})?ke`<div class="pj-bd__subtotal">Net ILS <b>${(R.netIls<0?String.fromCharCode(8722):"+")+Ea(R.netIls,"₪")}</b></div>`:null}
                          ${0!==R.netUsd||R.items.some(function(t){return"USD"===t.currency})?ke`<div class="pj-bd__subtotal">Net USD <b>${(R.netUsd<0?String.fromCharCode(8722):"+")+Ea(R.netUsd,"$")}</b></div>`:null}
                        </div>`:ke`<div class="pj-bd__empty">No settled transfers logged for this month</div>`}
                    ${null!=w&&isFinite(w)?ke`<div class="pj-bd__total">Net (formula) <b>${(w<0?String.fromCharCode(8722):"+")+Ea(1e6*Math.abs(w),"₪")}</b></div>`:null}
                  </div>`:null}

              <div class="pj-input-row">
                <label class="pj-input-lbl" for="pj-closing-input">closing</label>
                <input id="pj-closing-input" class="pj-input" type="text"
                       inputmode="decimal" autocomplete="off"
                       placeholder=${"closing in millions ("+n.cur+")"}
                       value=${c}
                       aria-invalid=${S?"true":null}
                       aria-describedby=${S?"pj-closing-err":null}
                       onInput=${function(t){d(t.target.value),g(null)}}
                       onBlur=${A} />
                <output class=${"pj-result "+P} for="pj-closing-input"
                        title=${O}
                        aria-label=${"Rough yield "+D+(k?"":", provisional")}>${D}</output>
                ${S?ke`<span id="pj-closing-err" class="pj-restored-badge pj-restored-badge--err" role="alert">not a number · use 279.5, 279,500,000 or ${n.cur}279.5M</span>`:null}
                ${T?ke`<span class="pj-restored-badge">${T}</span>`:null}
                ${b.busy?ke`<span class="pj-restored-badge is-loading" aria-busy="true">saving…</span>`:b.error?ke`<span class="pj-restored-badge pj-restored-badge--err" role="alert">${b.error}</span>`:null}
              </div>
            </div>
          `:ke`<div class="pj-view__empty">awaiting NAV widget…</div>`}
      </div>
    `}var xa=String.fromCharCode(8212);function Aa(t){if(!t)return null;var e=String(t).match(/([0-9.]+)\s*([MBK])?/i);if(!e)return null;var n=parseFloat(e[1]);if(!isFinite(n))return null;var r=(e[2]||"M").toUpperCase();return"B"===r?1e3*n:"K"===r?n/1e3:n}function Ca(t){var e=String(t||"").match(/([₪$€£])/);return e?e[1]:"₪"}function Na(t,e){if(null==t||!isFinite(t))return xa;if(0===t)return e+"0";var n=t<0?String.fromCharCode(8722):"",r=Math.abs(t);return r>=1e3?n+e+(r/1e3).toFixed(2)+"B":n+e+r.toFixed(1)+"M"}function Ea(t,e){if(null==t||!isFinite(t))return xa;if(0===t)return e+"0";var n=Math.abs(t);return n>=1e9?e+(n/1e9).toFixed(2)+"B":n>=1e6?e+(n/1e6).toFixed(2)+"M":n>=1e3?e+Math.round(n/1e3)+"K":e+Math.round(n)}function Da(t){if(!t)return"";var e=String(t).trim();if(/^\d{1,2}\/\d{4}$/.test(e))return e.replace(/^(\d)\//,"0$1/");var n=e.match(/(\w+)\s+(\d{4})/);if(!n)return"";var r=["january","february","march","april","may","june","july","august","september","october","november","december"],a=r.indexOf(n[1].toLowerCase());return a<0?"":String(a+1).padStart(2,"0")+"/"+n[2]}function Pa(t,e){var n=null,r=null,a=!1,i="₪",o="",l="",s=null;if(t){var u=t.closed||{},c=t.yield||{};if(i=Ca(u.numeralDisplay)||Ca(c.netFlowsDisplay)||"₪",o=c.projectingLabel||c.prevMonthLabel||u.label||"",l=c.projectingMonthSlash||Da(c.projectingLabel)||Da(c.prevMonthLabel)||"",!l&&e&&(l=Da(e)),null!=c.prevAmountExact){var d=Number(c.prevAmountExact);isFinite(d)&&(n=d/1e6)}if(null==n&&c.prevAmountDisplay){var f=Aa(c.prevAmountDisplay);null!=f&&(n=f)}if(null==n)if(null!=u.numeralExact)n=Number(u.numeralExact)/1e6;else{var p=Aa(u.numeralDisplay);null!=p&&(n=p)}if(null!=c.netFlowsValue)r=Number(c.netFlowsValue)/1e6;else{var h=Aa(c.netFlowsDisplay);null!=h&&(r=h)}null!=r&&!0===c.netFlowsConfirmed&&(a=!0),s=c.lastResult||null}var v=t&&t.yield&&null!=t.yield.projectingClosingExact?Number(t.yield.projectingClosingExact):null,m=t&&t.yield&&t.yield.projectingClosingSource||null;return{prev:n,net:r,netConfirmed:a,cur:i,prevMonthLabel:o,projectingMonthSlash:l,lastResult:s,projectingClosingExact:v,projectingClosingSource:m}}function Oa(t){var e=0,n=0,r=0,a=0,i=[];return(t||[]).forEach(function(t){if(t&&"number"==typeof t.amount&&t.amount>0&&t.direction&&t.settled){var o=Vi(t.label||t.name||t.lp||"?"),l="USD"===t.currency,s="redemption"===t.direction?"red":"dep";i.push({lp:o,amount:t.amount,currency:l?"USD":"ILS",kind:s}),l?"red"===s?a+=t.amount:r+=t.amount:"red"===s?n+=t.amount:e+=t.amount}}),i.sort(function(t,e){return e.amount-t.amount}),{ilsDep:e,ilsRed:n,usdDep:r,usdRed:a,netIls:e-n,netUsd:r-a,items:i}}function Ta(t){var e=t&&Array.isArray(t.rows)?t.rows:Array.isArray(t)?t:[],n=t&&t.totals||{};return{rows:e,totals:n}}function Ra(t,e){return t&&"number"==typeof t.netConverted&&isFinite(t.netConverted)?t.netConverted:t&&"number"==typeof t.netIls&&isFinite(t.netIls)?t.netIls:e?e.netIls:0}function Ma(t){var e=String(null==t?"":t).trim();if(!e)return{empty:!0,millions:null};var n=/^[₪$€£]?\s*(\d[\d,\s]*(?:\.\d+)?)\s*([MBKmbk])?$/.exec(e);if(!n)return{empty:!1,millions:null};var r=parseFloat(n[1].replace(/[,\s]/g,""));if(!isFinite(r))return{empty:!1,millions:null};var a=(n[2]||"M").toUpperCase();return"B"===a?r*=1e3:"K"===a&&(r/=1e3),{empty:!1,millions:r}}function La(t,e,n){var r=Ma(t);if(!r.empty&&null==r.millions)return{invalid:!0};var a=r.millions;if(null==a||a<=0||null==e||e<=0)return null;var i=!1;a>1e4&&(a/=1e6,i=!0);var o=null==n?0:n,l=a/(e+o)-1;return{closing:a,pct:l,rescaled:i}}function Fa(t){var e=t>=0?"+":"";return e+(100*t).toFixed(2)+"%"}ke=t.bind(n);var Ia=we,ja=6e4,Ua={fetchedAt:0};function De(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}function Ka(){var t=et.schedule.value;De([et.silentSignals]);var e=et.silentSignals&&et.silentSignals.value||[],n=e.map(function(t,e){return{kind:"signal",id:"signal:"+(t.key||e),title:t.label||"Cross-tool signal",track:String.fromCharCode(8252),openUrl:t.gmailUrl||null}}),r=s({fetching:!1,error:null,fetchedAt:Ua.fetchedAt}),a=r[0],o=r[1],u=s(0),c=(u[0],u[1]),d=s({}),f=d[0],p=d[1],h=s({}),v=h[0],m=h[1],g=s({}),_=g[0],y=g[1],b=l({}),w=s(null),k=w[0],$=w[1],S=l(null),x=s({}),A=x[0],C=x[1],N=s({}),E=N[0],D=N[1],P=l(null),O=l(0),T=l(Date.now()),R=s(0),M=R[1];function L(t){return function(e){var n={};for(var r in e)n[r]=e[r];return n[t]=!0,n}}function F(t){return function(e){var n={};for(var r in e)n[r]=e[r];return delete n[t],n}}function I(t){var e=++O.current;o(function(t){return{fetching:!0,error:null,fetchedAt:t.fetchedAt}}),ge.scheduleState({}).then(function(t){e===O.current&&(t?(et.schedule.value=t,Ua.fetchedAt=Date.now(),o({fetching:!1,error:null,fetchedAt:Ua.fetchedAt})):o(function(t){return{fetching:!1,error:"schedule returned no state",fetchedAt:t.fetchedAt}}))}).catch(function(n){if(e===O.current){pe("schedule:fetch:"+(t||""),n);var r=n&&n.message||String(n);o(function(t){return{fetching:!1,error:r,fetchedAt:t.fetchedAt}}),Ia("Schedule refresh failed · "+r,"error")}})}function j(t){P.current&&clearTimeout(P.current),P.current=setTimeout(function(){P.current=null,I(t||"debounced")},600)}function U(t){var e=et.schedule.value;e&&(et.schedule.value={asOf:e.asOf,tasks:(e.tasks||[]).filter(function(e){return e.id!==t}),events:e.events||[],board:(e.board||[]).filter(function(e){return!("task"===e.kind&&e.id===t)})})}function K(t,e){var n=et.schedule.value;n&&(et.schedule.value={asOf:n.asOf,tasks:(n.tasks||[]).map(function(n){return n&&n.id===t?Object.assign({},n,{title:e}):n}),events:n.events||[],board:(n.board||[]).map(function(n){return n&&"task"===n.kind&&n.id===t?Object.assign({},n,{title:e}):n})})}function B(t){t&&t.id&&!f[t.id]&&!v[t.id]&&(p(L(t.id)),ge.completeTask(t.id).then(function(e){if(!e||!1===e.ok)return p(F(t.id)),void Ia("Could not complete: "+(e&&e.error||"unknown"),"error");U(t.id),p(F(t.id)),Ia("✓ "+(t.title||"Done"),"success"),j("completed")}).catch(function(e){p(F(t.id)),pe("schedule:complete",e),Ia("Could not confirm completion, restored the task","error")}))}function H(t){var e=b.current;e[t]&&(clearTimeout(e[t]),delete e[t]),y(F(t))}function G(t){if(t&&t.id&&!f[t.id]&&!v[t.id]){if(!_[t.id])return y(L(t.id)),void(b.current[t.id]=setTimeout(function(){delete b.current[t.id],y(F(t.id))},3e3));H(t.id),m(L(t.id)),ge.removeTask(t.id).then(function(e){if(!e||!1===e.ok)return m(F(t.id)),void Ia("Could not delete: "+(e&&e.error||"unknown"),"error");U(t.id),m(F(t.id)),Ia("Deleted "+(t.title||"task"),"success"),j("deleted")}).catch(function(e){m(F(t.id)),pe("schedule:delete",e),Ia(e&&e.rpcTimeout?"Could not confirm delete, restored the task":"Server error deleting task","error")})}}function W(t){if(t&&t.id&&!E[t.id]&&!f[t.id]&&!v[t.id]){var e=t.when?t.when.substring(0,10):"",n=document.createElement("input");n.type="date",n.value=e||"",n.className="sched-row__reschedule-input",n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var r=!1,a=!1;n.addEventListener("change",function(){r=!0;var a=n.value||"";i(),a&&a!==e&&(D(L(t.id)),ge.updateTask(t.id,{due:a}).then(function(e){D(F(t.id)),e&&!1!==e.ok?(Ia("Rescheduled to "+a,"success"),j("rescheduled")):Ia("Could not reschedule: "+(e&&e.error||"unknown"),"error")}).catch(function(e){D(F(t.id)),pe("schedule:reschedule",e),Ia("Server error rescheduling","error")}))}),n.addEventListener("cancel",i),n.addEventListener("blur",function(){setTimeout(function(){r||i()},200)}),setTimeout(i,8e3);try{n.showPicker?n.showPicker():n.focus()}catch(t){n.focus()}}function i(){a||(a=!0,n.parentNode&&document.body.removeChild(n))}}function V(t){!t||!t.id||A[t.id]||f[t.id]||v[t.id]||k!==t.id&&(S.current={id:t.id,prev:t.title||"",done:!1},$(t.id))}function Y(t){var e=S.current;if(e&&!e.done){e.done=!0,$(null);var n=String(null==t?"":t).trim();if(n&&n!==e.prev){var r=e.id,a=e.prev;K(r,n),C(L(r)),ge.updateTask(r,{title:n}).then(function(t){if(C(F(r)),!t||!1===t.ok)return K(r,a),void Ia("Rename failed: "+(t&&t.error||"unknown"),"error");Ia("Renamed","success"),j("renamed")}).catch(function(t){C(F(r)),K(r,a),pe("schedule:rename",t),Ia("Server error renaming","error")})}}}function q(){var t=S.current;t&&!t.done&&(t.done=!0,$(null))}i(function(){if(!t){var e=setInterval(function(){M(function(t){return t+1})},1e3);return function(){clearInterval(e)}}},[!!t]),i(function(){var t=!!et.schedule.value&&Ua.fetchedAt>0&&Date.now()-Ua.fetchedAt<ja;t||I("mount");var e=setInterval(function(){"undefined"!=typeof document&&document.hidden||c(function(t){return t+1})},3e4);return function(){clearInterval(e),P.current&&clearTimeout(P.current);var t=b.current;for(var n in t)t[n]&&clearTimeout(t[n]);b.current={}}},[]);var J,z=Date.now();function X(e){var n=Qa(t,e),r=e.openUrl||(n?Xa(n.notes):null),a=!!_[e.id];return ke`
        <span class="sched-row__acts">
          ${r?ke`<a class="sched-row__open" href=${r} target="_blank" rel="noopener"
                      aria-label=${'Open the linked thread for "'+(e.title||"task")+'"'}>Open</a>`:null}
          ${"task"===e.kind&&e.id?ke`<button type="button" class="sched-row__check"
                      disabled=${!!f[e.id]||!!v[e.id]}
                      aria-label=${'Mark "'+(e.title||"task")+'" done'}
                      onClick=${function(){B(e)}}>✓</button>`:null}
          ${"task"===e.kind&&e.id?ke`<button type="button" class=${"sched-row__del"+(a?" is-armed":"")}
                      disabled=${!!f[e.id]||!!v[e.id]}
                      title=${a?"Click again to delete":""}
                      aria-label=${a?'Confirm delete "'+(e.title||"task")+'". Press again to delete, Escape to cancel':'Delete "'+(e.title||"task")+'"'}
                      onClick=${function(){G(e)}}
                      onKeyDown=${function(t){"Escape"===t.key&&_[e.id]&&(t.stopPropagation(),H(e.id))}}
                      >×</button>`:null}
        </span>`}function Q(t,e){var n="task"===t.kind;return n&&t.id&&k===t.id?ke`
          <input type="text" class="sched-row__rename-input" dir="auto"
                 value=${t.title||""}
                 aria-label=${'Rename "'+(t.title||"task")+'"'}
                 ref=${function(t){t&&!t.dataset.focused&&(t.dataset.focused="1",t.focus(),t.select())}}
                 onKeyDown=${function(t){"Enter"===t.key?(t.preventDefault(),Y(t.target.value)):"Escape"===t.key&&(t.stopPropagation(),q())}}
                 onBlur=${function(t){Y(t.target.value)}} />`:n&&t.id?ke`
          <span class=${"sched-row__title sched-row__title--edit"+(A[t.id]?" is-saving":"")}
                dir="auto" role="button" tabindex="0"
                title="Double-click to rename"
                aria-label=${'"'+(t.title||e)+'". Press Enter to rename'}
                onDblClick=${function(){V(t)}}
                onKeyDown=${function(e){"Enter"===e.key&&(e.preventDefault(),V(t))}}>${t.title||e}</span>`:ke`<span class="sched-row__title" dir="auto">${t.title||e}</span>`}function Z(t){var e="task"===t.kind,n=t.when?new Date(t.when):null,r=n&&n.getTime()<z,a=n?Ha(t.when,z):t.dueRelative||"",i=Ga(a),o=e&&!!t.id,l=ke`
        <span class=${"sched-row__time"+(r?" is-past":"")}>${n?qa(n):String.fromCharCode(8212)}</span>
        <span class="sched-row__date">${n?za(n,z):""}</span>`;return ke`
        <div key=${t.kind+":"+t.id}
             class=${"sched-row"+(e&&t.isOverdue?" is-overdue":"")+(f[t.id]||v[t.id]?" is-completing":"")}>
          ${o?ke`<span class=${"sched-row__timewrap sched-row__timewrap--edit"+(E[t.id]?" is-saving":"")}
                      role="button" tabindex="0" title="Click to reschedule"
                      aria-label=${'Reschedule "'+(t.title||"task")+'"'}
                      onClick=${function(){W(t)}}
                      onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),W(t))}}>${l}</span>`:ke`<span class="sched-row__timewrap">${l}</span>`}
          <span class=${"sched-row__track sched-row__track--"+(e?"task":"event")}>
            <span aria-hidden="true">${e?"•":String.fromCharCode(9670)}</span>
            ${t.track||(e?"A":"M")}
          </span>
          <span class="sched-row__titlewrap">
            ${Q(t,"(untitled)")}
            ${t.platform?ke`<span class="sched-row__platform">${t.platform}</span>`:null}
            ${e&&t.isOverdue?ke`<span class="sched-row__overdue">overdue</span>`:null}
          </span>
          <span class=${"sched-row__rel"+(i?" is-"+i:"")}>${a}</span>
          ${X(t)}
        </div>`}function tt(t){var e="signal"===t.kind?"sched-row__track--signal":"sched-row__track--task";return ke`
        <div key=${"u:"+t.id}
             class=${"sched-row sched-row--undated"+(f[t.id]||v[t.id]?" is-completing":"")}>
          <span class=${"sched-row__track "+e}>${t.track||"A"}</span>
          <span class="sched-row__titlewrap">
            ${Q(t,"(untitled task)")}
            ${t.platform?ke`<span class="sched-row__platform">${t.platform}</span>`:null}
          </span>
          ${X(t)}
        </div>`}if(a.error&&!t)J=ke`
        <div class="sched-error" role="alert">
          <div class="sched-error__title">Schedule unavailable</div>
          <div class="sched-error__msg">${a.error}</div>
          <button type="button" class="sched-error__retry" onClick=${function(){I("retry")}}>Retry</button>
        </div>`;else if(t){var nt=Ba(t.board),rt=nt.dated,at=nt.undated;J=ke`
        ${rt.length||at.length||n.length?rt.length?rt.map(Z):ke`<div class="sched-empty">Nothing scheduled in the next 7 days. Undated tasks below.</div>`:ke`<div class="sched-empty">
              <div class="sched-empty__title">No tasks or events.</div>
            </div>`}
        ${at.length?ke`<div class="sched-undated">
              <div class="sched-undated__hdr">undated</div>
              ${at.map(tt)}
            </div>`:null}
        ${n.length?ke`<div class="sched-crosstool">
              <div class="sched-crosstool__hdr">cross-tool signals · ${n.length}</div>
              ${n.map(tt)}
            </div>`:null}
      `}else{var it=Ya(T.current,z);J=ke`
        <div class="sched-loading" aria-busy="true">
          <span class="sched-loading__spin" aria-hidden="true">↻</span> Loading Schedule
          ${it?ke`<div class="sched-loading__hint" role="status">${it}</div>`:null}
        </div>`}var ot="";if(t){ot=(t.tasks||[]).length+" tasks · "+(t.events||[]).length+" events";var lt=Wa(a.fetchedAt,z);lt&&(ot+="  "+lt),a.error&&(ot+="  ·  refresh failed")}else ot=a.error?"unavailable":"loading";return ke`
      <div class="sched-view" data-state=${t?"live":a.error?"error":"loading"}>
        <header class="sched-view__hdr">
          <h2 class="sched-view__title hdr-stub">Departures</h2>
          <span class="sched-view__meta">${ot}</span>
          <button type="button" class=${"sched-view__refresh"+(a.fetching?" is-refreshing":"")}
                  title="Refresh schedule" aria-label="Refresh schedule"
                  onClick=${function(){I("manual")}}>↻</button>
        </header>
        <div class="sched-board">${J}</div>
      </div>
    `}function Ba(t){var e=[],n=[];return(Array.isArray(t)?t:[]).forEach(function(t){t&&t.when?e.push(t):t&&n.push(t)}),{dated:e,undated:n}}function Ha(t,e){if(!t)return"";var n=new Date(t);if(isNaN(n.getTime()))return"";var r=null!=e?e:Date.now(),a=Math.round((n.getTime()-r)/6e4),i=Math.abs(a);if(i<1)return"now";if(i<60)return a>0?"in "+i+"m":i+"m ago";var o=Math.round(i/60);if(o<24)return a>0?"in "+o+"h":o+"h ago";var l=Math.round(o/24);return l<14?a>0?"in "+l+"d":l+"d ago":n.toISOString().substring(0,10)}function Ga(t){return"now"===t?"now":t&&/^in \d+m$/.test(t)?"soon":""}function Wa(t,e){if(!t)return"";var n=null!=e?e:Date.now(),r=n-t;if(r<9e4)return"";var a=Math.round(r/1e3);return a<120?"· "+a+"s stale":"· "+Math.round(a/60)+"m stale"}var Va=8e3;function Ya(t,e){if(!t)return"";var n=null!=e?e:Date.now(),r=n-t;return r<Va?"":"still loading · "+Math.floor(r/1e3)+"s · the schedule backend can take up to a minute"}function qa(t){return String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")}var Ja=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function za(t,e){var n=new Date(null!=e?e:Date.now()),r=t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate();return r?"today":Ja[t.getDay()]+" "+t.getDate()+"/"+(t.getMonth()+1)}function Xa(t){var e=String(t||"").match(/https?:\/\/[^\s"'<>)\]]+/i);return e?e[0]:null}function Qa(t,e){if(!t||!Array.isArray(t.tasks)||!e||"task"!==e.kind)return null;for(var n=0;n<t.tasks.length;n++)if(t.tasks[n]&&t.tasks[n].id===e.id)return t.tasks[n];return null}ke=t.bind(n);function Za(t){var e=t.row,n=t.rowKey,r=t.editedAmount,a=t.actions||{},o=s(!1),u=o[0],c=o[1],d=s(!1),f=d[0],p=d[1],h=l(null),v=ho(e,r),m=v.isPending||null!=r&&""!==r;function g(t){t&&t.stopPropagation(),m&&c(!0)}function _(t){var e=String(t).replace(/[,\s]/g,"");return/^\d+(\.\d+)?$/.test(e)}function y(){var t=h.current,r=t?String(t.value).trim():"";if(!r||_(r))if(p(!1),c(!1),r){var i=r.replace(/[,\s]/g,""),o=parseFloat(i);a.commitAmount&&a.commitAmount(e,n,o)}else a.clearAmount&&a.clearAmount(n);else p(!0)}function b(t){"Enter"===t.key?(t.preventDefault(),t.target.blur()):"Escape"===t.key&&(t.preventDefault(),p(!1),c(!1))}i(function(){if(u&&h.current)try{h.current.focus(),h.current.select()}catch(t){}},[u]);var w="tx-amt"+(v.isPending?" is-pending":"")+(r?" tx-amt--edited":"")+(m?" tx-amt--editable":"");if(u){var k=r&&/\d/.test(String(r))?String(r):"",$="tx-amt-err-"+String(n||"row");return ke`
        <div class=${w}>
          <input ref=${h} type="text" class="tx-amt__input" placeholder="amount…"
                 inputMode="decimal" value=${k}
                 aria-invalid=${f?"true":null}
                 aria-describedby=${f?$:null}
                 onBlur=${y} onKeyDown=${b}
                 onInput=${f?function(){p(!1)}:null}
                 onClick=${function(t){t.stopPropagation()}} />
          ${f?ke`<span id=${$} class="tx-amt__err" role="alert">Numbers only. Not saved.</span>`:null}
        </div>`}var S="tx-amt__cc"+(!1===v.currencyKnown&&v.currencySymbol?" tx-amt__cc--unknown":""),x=!1===v.currencyKnown&&v.currencySymbol?"Unrecognized currency. Verify the unit before wiring.":null;return ke`
      <div class=${w} role=${m?"button":null} tabindex=${m?"0":null}
           onClick=${g}
           onKeyDown=${m?function(t){"Enter"===t.key&&g(t)}:null}>
        <span class=${S} title=${x}>${v.currencySymbol||""}</span>
        <span class="tx-amt__val">${v.amtText}</span>
      </div>
    `}ke=t.bind(n);function ti(){return ke`
      <div class="tx-calm" role="status">
        <div class="tx-calm__mark" aria-hidden="true">✓</div>
        <div class="tx-calm__line">All caught up. No transfers in motion.</div>
        <div class="tx-calm__sub">New Gmail suggestions land here as they arrive.</div>
      </div>
    `}ke=t.bind(n);function ei(t){var e=t.stats||{};function n(t,e,n){return ke`
        <div class=${"tx-hero__cell"+(n?" tx-hero__cell--"+n:"")}>
          <span class="tx-hero__num">${null==e?0:e}</span>
          <span class="tx-hero__lbl">${t}</span>
        </div>`}return ke`
      <div class="tx-hero" role="group" aria-label="Transfer counts">
        ${n("active",e.active)}
        ${n("in flight",e.inFlight)}
        ${n("awaiting Avi",e.awaitingAvi,"mustard")}
        ${n("ready",e.ready,"kelly")}
      </div>
    `}ke=t.bind(n);var ni={drafted:{title:"Drafted",sub:"חדש",hairline:"ink",calm:null},atAvi:{title:"At Avi",sub:"נשלח לאבי",hairline:"mustard",calm:"no one awaiting Avi · all caught up",hint:"signed, not yet wired. Either Avi's step or the funds still landing."},approved:{title:"Approved",sub:"מאושר",hairline:"kelly",calm:"nothing ready to wire right now"},transferred:{title:"Transferred",sub:"הועברו",hairline:"sage",calm:null,collapsible:!0}},ri={};function ai(t){var e={},n=[];return t.forEach(function(t){var r=Yi(t);e[r]||(e[r]=[],n.push(r)),e[r].push(t)}),n.map(function(t){return{name:t,rows:e[t]}})}function ii(t){var e=t.group,n=t.keyOf,r=t.actions,a=t.flaggedOf,i=t.onToggleFlag,o=t.marksOf,l=s(!1),u=l[0],c=l[1];if(1===e.rows.length){var d=e.rows[0],f=n(d);return ke`<${xi} row=${d} rowKey=${f} actions=${r}
                    flagged=${a(f)} onToggleFlag=${i}
                    manualMarks=${o(f)} />`}var p=e.rows[0],h=n(p);return ke`
      <${xi} row=${p} rowKey=${h} count=${e.rows.length} isParent=${!0}
         expanded=${u} onToggleGroup=${function(){c(!u)}}
         actions=${r} flagged=${a(h)} onToggleFlag=${i} manualMarks=${o(h)} />
      ${e.rows.slice(1).map(function(t){var e=n(t);return ke`<${xi} row=${t} rowKey=${e} isChild=${!0} expanded=${u}
                      actions=${r} flagged=${a(e)} onToggleFlag=${i} manualMarks=${o(e)} />`})}
    `}function oi(t){var e=t.band,n=ni[e]||{title:e,hairline:"ink",calm:null},r=t.rows||[],a=t.keyOf||function(t){return t&&t.rowKey||""},i=s(function(){return Object.prototype.hasOwnProperty.call(ri,e)?ri[e]:"transferred"===e}),o=i[0];function l(t){ri[e]=t,i[1](t)}if(t.skeleton)return ke`
        <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline} aria-busy="true">
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?ke`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__rows">
            <div class="tx-row tx-row--skeleton"></div>
            <div class="tx-row tx-row--skeleton"></div>
          </div>
        </section>`;if(!r.length)return n.calm?ke`
        <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline+" is-calm"}>
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?ke`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__calm">${n.calm}</div>
        </section>`:null;var u=_o(e,r,a),c=ai(u);function d(e){return!!t.flaggedOf&&t.flaggedOf(e)}function f(e){return t.marksOf?t.marksOf(e):null}var p=null;if(n.collapsible){var h=mo(u,function(t){var e=a(t);return e?O("tx:amt:"+e):null});p=u.length+" wires"+(h?" · "+h:"")}return ke`
      <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline+(n.collapsible&&o?" is-collapsed":"")}>
        <header class=${"tx-band__hdr"+(n.collapsible?" tx-band__hdr--toggle":"")}
                role=${n.collapsible?"button":null} tabindex=${n.collapsible?"0":null}
                aria-expanded=${n.collapsible?o?"false":"true":null}
                onClick=${n.collapsible?function(){l(!o)}:null}
                onKeyDown=${n.collapsible?function(t){"Enter"!==t.key&&" "!==t.key||l(!o)}:null}>
          <h3 class="tx-band__title">${n.title}</h3>
          ${n.sub?ke`<span class="tx-band__sub">${n.sub}</span>`:null}
          ${p?ke`<span class="tx-band__summary">${p}</span>`:null}
          ${n.collapsible?ke`<span class="tx-band__chevron">${o?"▾":"▴"}</span>`:ke`<span class="tx-band__count">${u.length}</span>`}
        </header>
        ${!n.hint||n.collapsible&&o?null:ke`<div class="tx-band__hint">${n.hint}</div>`}
        ${n.collapsible&&o?null:ke`<div class="tx-band__rows">
              ${c.map(function(e){return ke`<${ii} group=${e} keyOf=${a} actions=${t.actions}
                              flaggedOf=${d} onToggleFlag=${t.onToggleFlag} marksOf=${f} />`})}
            </div>`}
      </section>
    `}ke=t.bind(n);var li="#B6AE99",si="#F2EDE0",ui=["","SENT (link sent)","SIGNED (LP completed)","WIRED (money landed)"],ci=[63,190,317];function di(t){var e=!!t.sigDone,n=!!t.wireDone,r=t.color||"#1F5DB0",a=t.tooltipBase||"",i=t.manualMarks||null,o=[!0,e,n],l=e,s=e&&n;function u(t){var e=o[t-1],n=(e?"✓ ":"○ ")+ui[t];return a&&(n+="\n\n"+a),n}function c(e,n){n&&(n.preventDefault(),n.stopPropagation()),2===e&&t.onSign?t.onSign():3===e&&t.onWire&&t.onWire()}function d(t,e,n,a){return n?ke`<line key=${a} x1=${t} y1="13" x2=${e} y2="13" stroke=${r} stroke-width="4" />`:ke`<line key=${a} x1=${t} y1="13" x2=${e} y2="13" stroke=${li} stroke-width="1.5" stroke-dasharray="3 4" />`}function f(t){var e=ci[t-1],n=o[t-1],a=2===t||3===t,i=u(t),l=a?"stop-hit stop-hit--clickable":"stop-hit",s=a?"stop-dot stop-dot--clickable":"stop-dot",d=a?ui[t]+(n?" · done. Activate to undo.":" · not done. Activate to mark."):null;return ke`
        <g>
          <rect class=${l} data-stop=${t} x=${e-14} y="0" width="28" height="26"
                fill="transparent" role=${a?"button":null}
                tabindex=${a?"0":null}
                aria-label=${d}
                onClick=${a?function(e){c(t,e)}:null}
                onKeyDown=${a?function(e){"Enter"!==e.key&&" "!==e.key||c(t,e)}:null}>
            <title>${i}</title>
          </rect>
          ${n?ke`<circle class=${s} data-stop=${t} cx=${e} cy="13" r="6.5" fill=${r}
                    onClick=${a?function(e){c(t,e)}:null}><title>${i}</title></circle>`:ke`<circle class=${s} data-stop=${t} cx=${e} cy="13" r="6.5" fill=${si} stroke=${li} stroke-width="2"
                    onClick=${a?function(e){c(t,e)}:null}><title>${i}</title></circle>`}
        </g>`}return ke`
      <svg class="subway" viewBox="0 0 380 26" preserveAspectRatio="none">
        ${d(ci[0],ci[1],l,"s1")}
        ${d(ci[1],ci[2],s,"s2")}
        ${f(1)} ${f(2)} ${f(3)}
        ${t.overridden?ke`<circle class="stop-override-mark" cx="362" cy="6" r="3.5" fill="#C24A56"><title>Wire marked locally. Click the dot to clear.</title></circle>`:null}
        ${i&&i.sig?ke`<text class="stop-manual-mark" x=${ci[1]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"SIGN flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
        ${i&&i.wire?ke`<text class="stop-manual-mark" x=${ci[2]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"WIRE flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
      </svg>
    `}ke=t.bind(n);var fi=6048e5;function pi(t){return"tx:sg:skip:"+t}function hi(t){var e=O(pi(t));if(!e)return!1;var n=parseInt(e,10);return!!n&&Date.now()-n<fi}function vi(t){L(pi(t),String(Date.now()))}var mi={};function gi(t){return String(t||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _i(t,e){var n,r=String(t||""),a={},i=[];if((e||[]).forEach(function(t){var e=String(t||"").split(/\s+/)[0];e&&!a[e]&&(a[e]=!0,i.push(e))}),!i.length)return[{text:r,mark:!1}];try{n=new RegExp("("+i.map(gi).join("|")+")","g")}catch(t){return[{text:r,mark:!1}]}return r.split(n).map(function(t,e){return{text:t,mark:e%2==1}}).filter(function(t){return""!==t.text})}function yi(t){return"tx-sg-det-"+String(t||"").replace(/[^A-Za-z0-9_-]/g,"-")}function bi(t){var e=t.s||{},n=e.evidence&&"object"==typeof e.evidence?e.evidence:{},r=e.confidence||{};return ke`
      <div class="tx-suggestion__details" id=${yi(e.id)}>
        ${r.reasoning&&r.reasoning.length?ke`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Confidence</span>
              <span class="tx-suggestion__det-val">${(null!=r.score?r.score+" · ":"")+r.reasoning.join(", ")}</span>
            </div>`:null}
        ${n.matchedPhrases&&n.matchedPhrases.length?ke`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Matched</span>
              <span class="tx-suggestion__det-val">
                ${n.matchedPhrases.map(function(t){return ke`<span class="tx-pill tx-pill--pos">${t}</span> `})}
              </span>
            </div>`:null}
        ${n.negativeSignals&&n.negativeSignals.length?ke`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Against</span>
              <span class="tx-suggestion__det-val">
                ${n.negativeSignals.map(function(t){return ke`<span class="tx-pill tx-pill--neg">${t&&t.label||""}<span class="tx-pill__sub">${t&&t.kind||""}</span></span> `})}
              </span>
            </div>`:null}
        ${n.snippet?ke`<div class="tx-suggestion__det-row tx-suggestion__det-row--snippet">
              <span class="tx-suggestion__det-lbl">Snippet</span>
              <span class="tx-suggestion__det-val tx-suggestion__det-snippet">
                ${_i(n.snippet,n.matchedPhrases).map(function(t){return t.mark?ke`<mark>${t.text}</mark>`:t.text})}
              </span>
            </div>`:null}
        ${n.subject?ke`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Subject</span>
              <span class="tx-suggestion__det-val">${n.subject}</span>
            </div>`:null}
      </div>
    `}function wi(t){var e=t.rpc||{},n=t.toast||function(){},r=t.audit||function(){},a=t.patchRowKey||function(t){return t},i=t.isWired||function(){return!1},o=s({}),l=o[0],u=o[1],c=s({}),d=c[0],f=c[1],p=s({}),h=p[0],v=p[1],m=(t.suggestions||[]).filter(function(t){return!(!t||!t.id)&&(!l[t.id]&&(!hi(t.id)&&!i(t)))});if(!m.length)return null;m.forEach(function(t){if(!mi[t.id]){mi[t.id]=!0;try{r("shown",t)}catch(t){}}});var g=m.filter(function(t){return t.confidence&&"high"===t.confidence.tier});function _(t){v(ki(h,t.id,!h[t.id]))}function y(r){r=a(r),r.rowKey?(f(ki(d,r.id,!0)),n("Applying · "+(r.lpName||""),"success"),e.applyTransferSuggestion(r).then(function(e){if(f(ki(d,r.id,!1)),e&&e.ok){var a=e.noop?"Already marked · "+(r.lpName||""):"Done · "+(r.lpName||"")+" marked wired";n(a,"success");try{H(r.rowKey),W(r.rowKey)}catch(t){}t.onApplied&&t.onApplied(r),u(ki(l,r.id,!0))}else n("Failed · "+(e&&e.error||"unknown"),"error")},function(t){f(ki(d,r.id,!1)),n("Failed · "+(t&&t.message?t.message:"server error"),"error")})):n("Cannot match · "+(r.lpName||"")+" (no local row)","error")}function b(){var r=g.map(a).filter(function(t){return t.rowKey});r.length?(n("Applying "+r.length+" …","success"),e.applyMultipleTransferSuggestions(r).then(function(e){if(e&&Array.isArray(e.results)){var a={};e.results.forEach(function(t){t&&t.id&&t.result&&t.result.ok&&(a[t.id]=!0)});var i=$i(l),o=0;r.forEach(function(e){if(a[e.id]){try{H(e.rowKey),W(e.rowKey)}catch(t){}t.onApplied&&t.onApplied(e),i[e.id]=!0,o++}}),u(i);var s=r.length-o;o&&n("Applied "+o+(1===o?" wire":" wires"),"success"),s&&n("Batch · "+s+" failed, kept visible","error")}else n("Batch failed · "+(e&&e.error||"unknown"),"error")},function(t){n("Batch failed · "+(t&&t.message?t.message:"server error"),"error")})):n("No matchable high-confidence suggestions","error")}function w(t){vi(t.id),r("skipped",t),u(ki(l,t.id,!0)),n("Hidden for 7 days · "+(t.lpName||""),"success")}return ke`
      <div class="tx-suggestions" role="region" aria-label="Transfer suggestions">
        <div class="tx-suggestions__bar">
          <div class="tx-suggestions__summary">
            <b>${m.length}</b> ${1===m.length?"suggestion":"suggestions"}
            ${g.length?ke` · <span class="tx-conf tx-conf--high tx-conf--inline">${g.length} high</span>`:null}
          </div>
          ${g.length>=2?ke`<button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                     onClick=${b}>Approve all high (${g.length})</button>`:null}
        </div>
        ${m.map(function(t){var e=t.evidence&&"object"==typeof t.evidence?t.evidence:null,n=e?(e.fromName?e.fromName+" · ":"")+String(e.dateIso||"").slice(0,10):"string"==typeof t.evidence?t.evidence:"";e&&!n&&(n=e.subject||"");var r=e&&(e.subject||e.snippet)||"",a=e&&e.threadUrl||t.threadUrl||"",i=!!h[t.id];return ke`
            <div class=${"tx-suggestion"+(d[t.id]?" is-applying":"")+(i?" is-expanded":"")}>
              <div class="tx-suggestion__body">
                <div class="tx-suggestion__lp">
                  <bdi>${t.lpName||t.label||"(unnamed)"}</bdi>
                  ${t.confidence&&t.confidence.tier?ke`<span class=${"tx-conf tx-conf--"+t.confidence.tier}>${t.confidence.tier}</span>`:null}
                </div>
                <div class="tx-suggestion__change">${t.changeLabel||t.change||"mark wired"}</div>
                ${n||a?ke`<div class="tx-suggestion__evidence"
                          onClick=${function(e){e&&e.target&&"A"===e.target.tagName||_(t)}}>
                      ${a&&/^https?:\/\//i.test(a)?ke`<a href=${a} target="_blank" rel="noopener" title=${r}>${n||"open thread ↗"}</a>`:ke`<span title=${r}>${n}</span>`}
                    </div>`:null}
              </div>
              <div class="tx-suggestion__actions">
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                        onClick=${function(){y(t)}}>approve</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip"
                        onClick=${function(){w(t)}}>skip</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip tx-suggestion__btn--ghost"
                        title="Explain confidence"
                        aria-expanded=${i?"true":"false"}
                        aria-controls=${yi(t.id)}
                        onClick=${function(){_(t)}}>Why?</button>
              </div>
              ${i?ke`<${bi} s=${t} />`:null}
            </div>`})}
      </div>
    `}function ki(t,e,n){var r=$i(t);return r[e]=n,r}function $i(t){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}ke=t.bind(n);function Si(t){var e=String(t||"");return/^https?:\/\//i.test(e)}function xi(t){var e=t.row,n=t.rowKey,r=t.count||1,a=t.actions||{},i=Z(e,n),o=no(e,n),l=lo(e),s=so(e),u=vo(e),c=n?O("tx:amt:"+n):null,d=!!n&&null!=K(n),f=io(e,n),p=e&&e.rowDeepLink,h="tx-row"+(t.isParent?" tx-row--parent":"")+(t.isChild?" tx-row--child":"")+(t.expanded?" is-expanded":"");function v(){t.isParent&&t.onToggleGroup&&t.onToggleGroup()}function m(e){e.stopPropagation(),t.onToggleFlag&&t.onToggleFlag(n)}return ke`
      <div class=${h} hidden=${!(!t.isChild||t.expanded)||null}
           role=${t.isParent?"button":null}
           tabindex=${t.isParent?"0":null}
           aria-expanded=${t.isParent?t.expanded?"true":"false":null}
           onClick=${v}
           onKeyDown=${t.isParent?function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),v())}:null}>
        <div class="tx-lp">
          <div class="tx-name">
            <span class="tx-dir" style=${"color:"+l} aria-hidden="true">${s}</span>
            <bdi class="tx-name-bdi">${Yi(e)}</bdi>
            ${u?ke`<span class="tx-kind">${u}</span>`:null}
            ${r>1?ke`<span class="tx-count">×${r}</span>`:null}
            <span class=${"tx-flag"+(t.flagged?" is-on":"")}
                  role="button" tabindex="0"
                  title=${t.flagged?"Marked for review · click to clear":"Mark for review"}
                  onClick=${m}
                  onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key||m(t)}}>⚑</span>
            ${o&&o.label?ke`<span class=${"tx-stage tx-stage--"+o.tier} title=${o.blocker}>${o.label}</span>`:null}
          </div>
          ${o&&o.blocker?ke`<div class="tx-state tx-state--prose">
                     ${o.blocker}
                     ${f&&p&&Si(p)?ke`<a class="tx-triage" href=${p} target="_blank" rel="noopener"
                                title="Money moved before paperwork done. Triage." onClick=${function(t){t.stopPropagation()}}> ↗</a>`:null}
                   </div>`:null}
          ${e.note||e.subtitle||e.lastNote?ke`<div class="tx-note"><span class="arr">→</span>${" "+(e.note||e.subtitle||e.lastNote)}</div>`:null}
        </div>

        <div class=${"tx-track"+(d?" tx-track--overridden":"")}
             onClick=${function(t){t.stopPropagation()}}>
          <${di}
            sigDone=${i.signed}
            wireDone=${i.wired}
            color=${l}
            overridden=${d}
            manualMarks=${t.manualMarks}
            tooltipBase=${go(e,n)}
            onSign=${function(){a.signDot&&a.signDot(e,n)}}
            onWire=${function(){a.wireDot&&a.wireDot(e,n)}} />
        </div>

        <${Za} row=${e} rowKey=${n} editedAmount=${c} actions=${a} />
      </div>
    `}ke=t.bind(n);function Ai(t){return"transfers:payload:"+String(t||"current")}var Ci=[2e3,4e3,6e3];function Ni(t){var e=T(Ai(t));return e?Math.max(0,Date.now()-(e.ts||0)):0}var Ei=function(){for(var t=void 0!==cr&&cr||[],e=0;e<t.length;e++)if(t[e]&&"transfer-tracker"===t[e].id)return t[e].href||null;return null}(),Di={scrollY:null},Pi=["drafted","atAvi","approved","transferred"],Oi=["drafted","atAvi","approved"],Ti=String.fromCharCode(8212)+" departed "+String.fromCharCode(8212);function Ri(t,e){var n=ho(t,O("tx:amt:"+e)),r=n.amtText?(n.currencySymbol||"")+n.amtText:"",a=Z(t,e),i=["Sent"];a.signed&&i.push("Signed"),a.wired&&i.push("Wired");var o=[Yi(t)];if(t.subKind)o.push(/רווחי\s*הון/.test(t.subKind)?"capital gains tax":/דמי\s*הצלחה/.test(t.subKind)?"success fee":t.subKind);else{var l=vo(t);l&&o.push(l)}return r&&o.push(r),o.push(i.join(", ")),o.join(" · ")}function Mi(t,e,n){var r=_o(t,e||[],n),a={},i=[];r.forEach(function(t){var e=Yi(t);a[e]||(a[e]=[],i.push(e)),a[e].push(t)});var o=[];return i.forEach(function(t){a[t].forEach(function(t){o.push(t)})}),o}function Li(t,e,n){var r=[];Oi.forEach(function(n){Mi(n,t[n],e).forEach(function(t){r.push(t)})});var a=Mi("transferred",t.transferred,e);if(!r.length&&!a.length)return{text:"",count:0};var i=["Transfers · "+(n||"")];return r.forEach(function(t){i.push(Ri(t,e(t)))}),a.length&&(i.push(Ti),a.forEach(function(t){i.push(Ri(t,e(t)))})),{text:i.join("\n"),count:r.length+a.length}}function Fi(){var t=et.transfers.value,e=et.suggestions.value,n=t&&t.monthLabel||"current",r=s(function(){if(t)return{state:"LIVE",data:t,watchdogPhase:null,ageMs:0};var e=O(Ai(n));return e?{state:"CACHED",data:e,watchdogPhase:null,ageMs:Ni(n)}:{state:"LOADING",data:null,watchdogPhase:null,ageMs:0}}),a=r[0],o=r[1],u=s(0),c=(u[0],u[1]);function d(){c(function(t){return t+1})}var f=l([]),p=l(0);i(function(){if(t&&Array.isArray(t.rows)){try{L(Ai(n),t)}catch(t){}o({state:"LIVE",data:t,watchdogPhase:null,ageMs:0})}},[t,n]),i(function(){try{U()}catch(t){}try{t&&Q({transfers:t})}catch(t){}},[]),i(function(){if("undefined"!=typeof window){var t=Di.scrollY;if(null!=t&&t>0){try{window.scrollTo(0,t)}catch(t){}try{requestAnimationFrame(function(){try{window.scrollTo(0,t)}catch(t){}})}catch(t){}}return function(){try{Di.scrollY=window.pageYOffset||0}catch(t){}}}},[]);var h=s(null),v=h[0],m=h[1],g=s(!1),_=g[0],y=g[1],b=l(0);function w(){f.current.forEach(function(t){try{clearTimeout(t)}catch(t){}}),f.current=[]}function k(){var t=ot();p.current=t,w();var e=!(!a.data&&!O(Ai(n)));o(function(t){return{state:e?"CACHED":"LOADING",data:t.data,watchdogPhase:null,ageMs:t.ageMs}}),f.current.push(setTimeout(function(){p.current===t&&o(function(t){return Ui(t,{watchdogPhase:"slow"})})},Ci[0])),f.current.push(setTimeout(function(){if(p.current===t){var e=O(Ai(n));o(function(t){return e?{state:"STALE",data:e,watchdogPhase:"fallback",ageMs:Ni(n)}:Ui(t,{watchdogPhase:"fallback"})})}},Ci[1])),f.current.push(setTimeout(function(){p.current===t&&(O(Ai(n))||a.data||o(function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:t.ageMs}}))},Ci[2])),ge.bootstrap({lite:!1}).then(function(e){if(p.current===t){if(w(),!e||!e.transfers){var r=O(Ai(n));return o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Ni(n)}:function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:0}}),void pe("transfers:refresh:empty",new Error("no transfers in refetch"))}lt(e,t);try{L(Ai(n),e.transfers)}catch(t){}o({state:"LIVE",data:e.transfers,watchdogPhase:null,ageMs:0})}},function(e){if(p.current===t){w();var r=O(Ai(n));o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Ni(n)}:function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:0}}),pe("transfers:refresh",e)}})}i(function(){var t=++b.current;try{ge.rowsWithManualEvents(30).then(function(e){b.current===t&&(m(e&&"object"==typeof e?e:{}),y(!0))},function(){b.current===t&&(m({}),y(!1))})}catch(t){}return function(){b.current++}},[]),i(function(){return w},[]);var $=l(null);$.current||($.current=Co({rpc:ge,toast:we,toastUndo:ji,audit:function(t,e){try{ge.recordTransferSuggestionEvent(t,e).catch(function(){})}catch(t){}},repaint:d,failBus:"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,confirmSigClear:function(t){return"undefined"==typeof window||!window.confirm||window.confirm("Clear signed status"+(t?" for "+t:"")+"? This clears the signature cell in the tracker.")}}));var S=$.current,x=a.data||t||null,A=x&&Array.isArray(x.rows)?x.rows:[],C=v&&_?v:x&&x.manualMarks||{},N=co(A,n),E=Bi(),D=!1,P=N.map(function(t){var e=Hi(t,E);return Gi(t)&&(D=!0),{row:t,rowKey:e}});if(D)try{console.warn("[atriumX] a transfer row has no server rowKey; using unstable display-field key. Local overrides may orphan on edit.")}catch(t){}var T=new Map;function R(t){return T.has(t)?T.get(t):Hi(t,null)}P.forEach(function(t){T.set(t.row,t.rowKey)});var M={drafted:[],atAvi:[],approved:[],transferred:[]};P.forEach(function(t){var e=oo(t.row,t.rowKey);(M[e]||M.drafted).push(t.row)});var F={active:M.drafted.length+M.atAvi.length+M.approved.length,inFlight:M.drafted.length,awaitingAvi:M.atAvi.length,ready:M.approved.length},I=Oi.every(function(t){return 0===M[t].length});function j(t){return!!t&&V(t)}function K(t){t&&(Y(t),d())}function H(t){return t&&C&&C[t]||null}function G(t){if(!t||t.rowKey)return t;var e=String(t.lpName||"").toLowerCase().trim();if(!e)return t;for(var n=-1,r=0,a=0;a<P.length;a++){var i=P[a].row,o=String(i.engName||i.label||i.name||i.lpName||"").toLowerCase().trim();o&&o===e&&(r++,n=a)}if(1!==r)return t;var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(l[s]=t[s]);return l.rowKey=P[n].rowKey,l}function W(t){if(!t||!t.rowKey)return!1;for(var e=0;e<P.length;e++)if(P[e].rowKey===t.rowKey)return Z(P[e].row,t.rowKey).wired;return!1}function q(t){t&&t.rowKey&&(B(t.rowKey,3),d())}function J(){var t=Li(M,R,n);t.text?Kt(t.text,function(e){e?we("Copied · "+t.count+" transfers","success"):we("Copy failed","error")},"transfers:copy:fallback"):we("Nothing to copy","error")}var z=Ii(a,k),X="LOADING"===a.state&&!x;return ke`
      <div class="tx-view" data-fetch-state=${a.state}>
        <header class="tx-view__hdr">
          <h2 class="tx-view__title hdr-stub">Transfers</h2>
          <span class="tx-view__month">${Ki(n)}</span>
          <button type="button" class="tx-view__copy" title="Copy the list as shown" aria-label="Copy transfers list" onClick=${J}>⧉</button>
          <button type="button" class="tx-view__refresh" title="Refresh transfers" aria-label="Refresh transfers" onClick=${k}>↻</button>
        </header>

        <${ei} stats=${F} />

        ${z}

        <${wi}
          suggestions=${e||x&&x.suggestions||[]}
          rpc=${ge}
          toast=${we}
          audit=${function(t,e){try{ge.recordTransferSuggestionEvent(t,e).catch(function(){})}catch(t){}}}
          patchRowKey=${G}
          isWired=${W}
          onApplied=${q} />

        ${X?Pi.map(function(t){return ke`<${oi} band=${t} skeleton=${!0} />`}):ke`
            ${Pi.map(function(t){return ke`<${oi} band=${t} rows=${M[t]} keyOf=${R}
                            actions=${S} flaggedOf=${j} onToggleFlag=${K} marksOf=${H} />`})}
            ${I&&0===M.transferred.length?ke`<${ti} />`:null}
          `}

        ${Ei?ke`<div class="tx-view__builder">
              <a class="tx-builder-link" href=${Ei} target="_blank" rel="noopener">Open the transfer-form builder ↗</a>
            </div>`:null}
      </div>
    `}function Ii(t,e){var n=t.state,r=t.watchdogPhase;return"CACHED"===n&&"slow"===r?ke`<div class="tx-banner tx-banner--soft">showing cached · refreshing…</div>`:"LOADING"===n&&"slow"===r?ke`<div class="tx-banner tx-banner--soft">fetching latest…</div>`:"STALE"===n?ke`<div class="tx-banner tx-banner--warn">showing last cached · <button type="button" class="tx-banner__retry" onClick=${e}>retry ↻</button></div>`:"ERROR"===n?ke`<div class="tx-banner tx-banner--err">transfers fetch slow · <button type="button" class="tx-banner__retry" onClick=${e}>retry ↻</button></div>`:null}function ji(t,e,n){if("undefined"!=typeof document){var r=document.getElementById("toast-stack");if(r){var a=n||6e3,i=document.createElement("div");i.className="toast-stack__item is-success";var o=document.createElement("span");o.textContent=t,i.appendChild(o);var l=document.createElement("span");l.textContent=" · ",l.style.opacity="0.5",i.appendChild(l);var s=document.createElement("button");s.type="button",s.className="toast__undo",s.textContent="UNDO";var u=!1;s.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),c();try{e&&e()}catch(t){}}),i.appendChild(s),r.appendChild(i),requestAnimationFrame(function(){i.classList.add("is-show")}),setTimeout(c,a)}else we(t,"success")}function c(){if(!u){u=!0;try{i.classList.remove("is-show"),setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i)},250)}catch(t){}}}}function Ui(t,e){var n={};for(var r in t)n[r]=t[r];for(var a in e)n[a]=e[a];return n}function Ki(t){var e=String(t||"").match(/^(\d{1,2})\/(\d{4})$/);if(!e)return String(t||"");var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=parseInt(e[1],10)-1;return(n[r]||e[1])+" "+e[2]}function Bi(){return{n:0}}function Hi(t,e){if(!t)return"";var n=t.rowKey||t.masterRid||t.rid||t.uid;if(n)return String(n);var r=Vi(t.label||t.name)+":"+(t.kind||"")+":"+(t.startDateIso||"");if(!t.startDateIso){var a=e||{n:0};r+=":#"+a.n++}return r}function Gi(t){return!t||!(t.rowKey||t.masterRid||t.rid||t.uid)}var Wi={"עדי רמניק":"Adi Ramnik","אלמוג חזון":"Almog Hazon","אקסל":"EXCEL","תיגבור קבו":"TIGBUR"};function Vi(t){var e=String(null==t?"":t).trim();return e?e.indexOf("להשלים")>=0?"NAV":Wi[e]?Wi[e]:e:"NAV"}function Yi(t){if(!t)return"";if(t.engName&&String(t.engName).trim())return String(t.engName).trim();var e=String(null==(t.label||t.name)?"":t.label||t.name).trim(),n=Vi(t.label||t.name);return"NAV"===n&&!e&&t.identityPending?"NAV (pending identity)":n}var qi=["paid to client","הועבר ללקוח","moved to trading","הועבר למסחר","בברוקר"];function Ji(t){for(var e=String(t||""),n=0;n<qi.length;n++)if(e.indexOf(qi[n])>=0)return!0;return!1}function zi(t){var e=String(t&&t.type||t&&t.kind||"").toLowerCase();return e.indexOf("הצטר")>=0||e.indexOf("join")>=0||e.indexOf("הגדל")>=0||e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0}var Xi=["נשלח","נוצר","sent","emailed","נפתח","פתוח","בתהליך","open","viewed","clicked"];function Qi(t){for(var e=String(t||""),n=0;n<Xi.length;n++)if(e.indexOf(Xi[n])>=0)return!0;return!1}function Zi(t){var e=String(t&&t.amountText||"").trim();if(!e)return!1;if(t&&t.needsNavNumbers)return!1;if(e.indexOf("להשלים")>=0)return!1;var n=e.replace(/[₪$€£,\s]/g,""),r=parseFloat(n);return isFinite(r)?0!==r:/\d/.test(e)}var to=["received in transit","התקבל במעבר","in transit"];function eo(t){for(var e=String(t||""),n=0;n<to.length;n++)if(e.indexOf(to[n])>=0)return!0;return!1}function no(t,e){var n=Z(t,e),r=String(t&&t.execStatus||"").toLowerCase(),a=Zi(t);if(ro(t))return{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+String(t&&t.amountText||"").trim()+'". Avi sends this figure from the struck NAV.'};if(Ji(r)||n.wired&&a)return{stage:"done",label:"Done",tier:"done",blocker:"Settled. Money landed."};if(!n.signed){var i=String(t&&t.sigStatus||"").toLowerCase();return{stage:"awaiting-sig",label:"Awaiting signature",tier:"muted",blocker:Qi(i)?"Link sent / opened, not signed yet.":"Not signed. No signature link evidence in the tracker yet."}}if(!a){var o=String(t&&t.amountText||"").trim();return o.indexOf("להשלים")>=0?{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+o+'". Avi sends this figure from the struck NAV.'}:{stage:"amount-missing",label:"Amount missing in tracker",tier:"amber",blocker:o?'Amount cell holds "'+o+'". Fill the amount, then it can wire.':"Amount cell is empty. Fill the amount, then it can wire."}}return zi(t)&&eo(r)?{stage:"funds-in",label:"Funds received",tier:"ready",blocker:"Money received. Funds in the account."}:zi(t)&&!n.wired?{stage:"awaiting-funds",label:"Awaiting funds in",tier:"muted",blocker:"Signed. Money not received yet."}:{stage:"ready",label:"Ready to wire",tier:"ready",blocker:"Signed, amount set. Ready to wire."}}function ro(t){return!(!t||!0!==t.needsNavNumbers)||String(t&&t.amountText||"").indexOf("להשלים")>=0}function ao(t,e){if(ro(t))return!1;var n=Z(t,e);return n.signed&&n.wired}function io(t,e){var n=Z(t,e);return n.wired&&!n.signed}function oo(t,e){if(ao(t,e))return"transferred";var n=no(t,e);return"ready"===n.stage||"funds-in"===n.stage?"approved":"amount-missing"===n.stage?io(t,e)||Z(t,e).signed?"atAvi":"drafted":"awaiting-sig"===n.stage?io(t,e)?"atAvi":"drafted":"atAvi"}function lo(t){var e=String(t&&t.kind||"").toLowerCase();return e.indexOf("withdraw")>=0||e.indexOf("redem")>=0?"#C0202E":e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0||e.indexOf("subscrip")>=0?"#2E8540":"#1F5DB0"}function so(t){var e=String(t&&t.kind||"").toLowerCase();return e.indexOf("withdraw")>=0||e.indexOf("redem")>=0?"↑":e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0||e.indexOf("subscrip")>=0?"↓":"·"}var uo=["January","February","March","April","May","June","July","August","September","October","November","December"];function co(t,e){if(!Array.isArray(t))return[];var n=String(e||""),r=-1,a=-1,i=n.match(/^(\d{1,2})\/(\d{4})$/);if(i)r=parseInt(i[1],10)-1,a=parseInt(i[2],10);else{var o=n.match(/(\w+)\s+(\d{4})/);o&&(r=uo.indexOf(o[1]),a=parseInt(o[2],10))}if(r<0)return t.slice();var l=("0"+(r+1)).slice(-2)+"/"+a;return t.filter(function(t){if(t.monthTab)return t.monthTab===l;var e=String(t.startDateIso||t.startDate||"").match(/(\d{4})-(\d{2})/);if(!e)return!1;var n=parseInt(e[1],10),i=parseInt(e[2],10)-1;return n===a&&i===r})}var fo=/[֐-׿]/;function po(t){var e=String(t||"").trim();return/^[\d.,\s]+$/.test(e)&&(e=""),!e||/ש["׳]?ח|שקל|ils|nis|₪/i.test(e)?{symbol:"₪",known:!0}:/דולר|usd|\$/i.test(e)?{symbol:"$",known:!0}:/(יורו|אירו|eur|€)/i.test(e)?{symbol:"€",known:!0}:/(לירה|£|gbp)/i.test(e)?{symbol:"£",known:!0}:{symbol:e.slice(0,4),known:!1}}function ho(t,e){var n=null!=e&&""!==e?String(e):String(t&&t.amountText||"").trim();if(!n)return{amtText:"",isPending:!0,currencySymbol:""};if(n.indexOf("להשלים")>=0)return{amtText:"NAV",isPending:!0,currencySymbol:""};if(fo.test(n))return{amtText:"unparsed",isPending:!0,currencySymbol:""};if(!/\d/.test(n))return{amtText:n,isPending:!0,currencySymbol:""};var r=n.replace(/[₪$€£,\s]/g,""),a=parseFloat(r),i=isFinite(a)?Math.round(a).toLocaleString("en-US"):n,o=po(t&&t.currency);return{amtText:i,isPending:!1,currencySymbol:o.symbol,currencyKnown:o.known}}function vo(t){var e=String(t&&t.kind||"").toLowerCase().trim();return e?e.indexOf("carry")>=0?"carry":e.indexOf("tax")>=0?"tax":e.indexOf("redem")>=0?"redemption":e.indexOf("sub")>=0?"sub":e.indexOf("fo-pay")>=0?"fo":e.indexOf("rev")>=0?"rev":e.slice(0,8):""}function mo(t,e){e=e||function(){return null};var n={};return(t||[]).forEach(function(t){var r=ho(t,e(t));if(r&&!r.isPending){var a=parseFloat(String(r.amtText).replace(/,/g,""));if(isFinite(a)){var i=r.currencySymbol||"₪";n[i]=(n[i]||0)+a}}}),Object.keys(n).map(function(t){var e=n[t];return e>=1e6?t+(e/1e6).toFixed(1)+"M":e>=1e3?t+Math.round(e/1e3)+"K":t+Math.round(e)}).join(" · ")}function go(t,e){var n=String(t&&t.sigStatus||"").trim(),r=String(t&&t.execStatus||"").trim(),a=String(t&&t.amountText||"").trim(),i=/\d/.test(a),o=[];return n&&o.push("STATUS="+n),r&&o.push("EXEC="+r),i&&o.push("AMOUNT="+a),t&&t.isDone&&o.push("isDone=✓"),o.length?o.join(" · "):"no upstream signal yet"}function _o(t,e,n){var r=(e||[]).slice();function a(t,e){return String(Yi(t)).localeCompare(String(Yi(e)),"he")}return n=n||function(t){return Hi(t,null)},"atAvi"===t||"approved"===t?(r.sort(function(t,e){function r(t){var e=n(t),r=Z(t,e);return r.signed&&!r.wired?0:r.signed||r.wired?2:1}var i=r(t),o=r(e);return i!==o?i-o:a(t,e)}),r):(r.sort(a),r)}dn="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function yo(t){return dn&&"function"==typeof dn.optimisticWrite?dn.optimisticWrite(t):Ht(t)}var bo=600,wo=new Map;function ko(t,e,n){var r=t+":"+e,a="number"==typeof n?n:Date.now(),i=wo.get(r);return null!=i&&a-i<bo||(wo.set(r,a),!1)}function $o(t){return String(t&&(t.engName||t.label||t.name||t.lpName)||"").trim()}var So="transfer-tracker",xo={};function Ao(t,e,n){if(!t)return null;var r=n||e;return{raise:function(n,a,i){var o=a instanceof Error?a:new Error(String(null==a?"write reverted":a));try{o.message=e+" · "+(o.message||"write reverted")}catch(t){}return xo[r]=!0,t.raise(So,o,i)},resolve:function(){for(var e in delete xo[r],xo)if(Object.prototype.hasOwnProperty.call(xo,e))return!1;return!!t.resolve&&t.resolve(So)}}}function Co(t){t=t||{};var e=t.rpc||{},n=t.toast||function(){},r=t.toastUndo||function(){},a=t.audit||function(){},i=t.repaint||function(){},o=t.failBus||null,l=t.now||function(){return Date.now()},s=t.confirmSigClear||function(){return!0};function u(t,s){if(!s)return!1;if(ko(s,3,l()))return!1;var c=$o(t),d=K(s),f=Z(t,null).wired,p=3===d||null==d&&f;if(p)return B(s,1),i(),r("Unmarked wired (local) · "+c,function(){B(s,3),i()},6e3),!0;var h={id:"manual-wire-"+s,rowKey:s,lpName:c,change:"manual_wire_set",confidence:{tier:"manual",score:0}};return yo({key:"tx:stop:"+s,applyLocal:function(){B(s,3),i()},audit:function(t){a(t||"applied",h)},rpc:function(t,n){e.setTransferStatus(s,"Wired").then(t,n)},onConfirm:function(){H(s),n("Synced · wired","success")},onRevert:function(t){H(s),i(),n("Save failed · "+No(t)+" · reverted","error")},retry:function(){u(t,s)},failBus:Ao(o,"wire "+s+(c?" ("+c+")":""),"transfers:wire:"+s),source:"transfers:wire:"+s}),r("Marked wired · "+c,function(){B(s,1),i()},6e3),!0}function c(t,u){if(!u)return!1;if(ko(u,2,l()))return!1;var d=$o(t),f=Z(t,u).signed;if(f&&!s(d))return!1;var p=f?"":"הושלם",h=f?"0":"1",v=f?"הושלם":"",m=f?"1":"0",g={id:"manual-sig-"+u,rowKey:u,lpName:d,change:p?"manual_sig_set":"manual_sig_clear",confidence:{tier:"manual",score:0}},_=null;return yo({key:"tx:sig:"+u,applyLocal:function(){G(u,h),i()},audit:function(t){a(t||"applied",g)},rpc:function(t,n){_=e.setTransferSigStatus(u,p),_.then(t,n)},onConfirm:function(){W(u),n("Synced · "+(p?"signed":"unsigned"),"success")},onRevert:function(t){W(u),i(),n("Save failed · "+No(t)+" · reverted","error")},retry:function(){c(t,u)},failBus:Ao(o,"sign "+u+(d?" ("+d+")":""),"transfers:sign:"+u),source:"transfers:sign:"+u}),r((p?"Marked signed · ":"Unmarked · ")+d,function(){G(u,m),i();var t=_||Promise.resolve();function n(){e.setTransferSigStatus(u,v).then(function(t){t&&t.ok&&W(u)},function(){})}t.then(n,n)},6e3),!0}function d(t,r,a){if(r)if("number"==typeof a&&isFinite(a)){L("tx:amt:"+r,a),n("Saved locally · "+a,"success"),i();var l={rowKey:r,amount:a,monthTab:t&&t.monthTab,kind:t&&t.kind,lp:Vi(t&&(t.label||t.name))},s="transfers:amount:"+r;e.setTransferAmount(l).then(function(t){if(t&&t.ok){if(F("tx:amt:"+r),n("Synced · "+a,"success"),i(),o)try{Ao(o,"amount "+r,s).resolve()}catch(t){}}else{if(t&&"no-backend-writeback-yet"===t.reason)return n("Saved locally only · this transfer kind has no tracker write path yet","error"),void i();u(new Error(t&&t.message||t&&t.reason||"server rejected write"))}},function(t){u(t)})}else n("Save failed · amount must be a number · not sent","error");function u(e){if(F("tx:amt:"+r),n("Save failed · "+No(e)+" · reverted","error"),i(),o)try{Ao(o,"amount "+r,s).raise(null,e,{severity:"station",retry:function(){d(t,r,a)}})}catch(t){}}}function f(t){t&&(F("tx:amt:"+t),i())}return{wireDot:u,signDot:c,commitAmount:d,clearAmount:f}}function No(t){return t&&t.message?t.message:"server error"}"function"==typeof c&&c(),"function"==typeof st&&st()}();
