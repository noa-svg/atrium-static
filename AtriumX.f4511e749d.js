!function(){"use strict";!function(t){function e(e){var n=new Function("module","exports","define","return (function () {\n"+e+"\n}).call(this);");n.call(t,void 0,void 0,void 0)}e('!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,t,u,i,o,e,r,f,c,s,h,a,p=65536,v=1<<17,d={},y=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_=Array.isArray;function g(n,l){for(var t in l)n[t]=l[t];return n}function b(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function m(n,t,u){var i,o,e,r={};for(e in t)"key"==e?i=t[e]:"ref"==e?o=t[e]:r[e]=t[e];if(arguments.length>2&&(r.children=arguments.length>3?l.call(arguments,2):u),"function"==typeof n&&null!=n.defaultProps)for(e in n.defaultProps)void 0===r[e]&&(r[e]=n.defaultProps[e]);return k(n,r,i,o,null)}function k(n,l,i,o,e){var r={type:n,props:l,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==e?++u:e,__i:-1,__u:0};return null==e&&null!=t.vnode&&t.vnode(r),r}function x(n){return n.children}function S(n,l){this.props=n,this.context=l}function C(n,l){if(null==l)return n.__?C(n.__,n.__i+1):null;for(var t;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e)return t.__e;return"function"==typeof n.type?C(n):null}function M(n){var l,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(t=n.__k[l])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return M(n)}}function P(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!T.__r++||e!==t.debounceRendering)&&((e=t.debounceRendering)||r)(T)}function T(){var n,l,u,i,e,r,c,s;for(o.sort(f);n=o.shift();)n.__d&&(l=o.length,i=void 0,r=(e=(u=n).__v).__e,c=[],s=[],u.__P&&((i=g({},e)).__v=e.__v+1,t.vnode&&t.vnode(i),O(u.__P,i,e,u.__n,u.__P.namespaceURI,32&e.__u?[r]:null,c,null==r?C(e):r,!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,z(c,i,s),i.__e!=r&&M(i)),o.length>l&&o.sort(f));T.__r=0}function $(n,l,t,u,i,o,e,r,f,c,s){var h,a,v,w,_,g=u&&u.__k||y,b=l.length;for(t.__d=f,I(t,l,g),f=t.__d,h=0;h<b;h++)null!=(v=t.__k[h])&&(a=-1===v.__i?d:g[v.__i]||d,v.__i=h,O(n,v,a,i,o,e,r,f,c,s),w=v.__e,v.ref&&a.ref!=v.ref&&(a.ref&&V(a.ref,null,v),s.push(v.ref,v.__c||w,v)),null==_&&null!=w&&(_=w),v.__u&p||a.__k===v.__k?f=H(v,f,n):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:w&&(f=w.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=f,t.__e=_}function I(n,l,t){var u,i,o,e,r,f=l.length,c=t.length,s=c,h=0;for(n.__k=[],u=0;u<f;u++)null!=(i=l[u])&&"boolean"!=typeof i&&"function"!=typeof i?(e=u+h,(i=n.__k[u]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?k(null,i,null,null,null):_(i)?k(x,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?k(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(r=i.__i=L(i,t,e,s))&&(s--,(o=t[r])&&(o.__u|=v)),null==o||null===o.__v?(-1==r&&h--,"function"!=typeof i.type&&(i.__u|=p)):r!==e&&(r==e-1?h--:r==e+1?h++:(r>e?h--:h++,i.__u|=p))):i=n.__k[u]=null;if(s)for(u=0;u<c;u++)null!=(o=t[u])&&0==(o.__u&v)&&(o.__e==n.__d&&(n.__d=C(o)),q(o,o))}function H(n,l,t){var u,i;if("function"==typeof n.type){for(u=n.__k,i=0;u&&i<u.length;i++)u[i]&&(u[i].__=n,l=H(u[i],l,t));return l}n.__e!=l&&(l&&n.type&&!t.contains(l)&&(l=C(n)),t.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function L(n,l,t,u){var i=n.key,o=n.type,e=t-1,r=t+1,f=l[t];if(null===f||f&&i==f.key&&o===f.type&&0==(f.__u&v))return t;if(u>(null!=f&&0==(f.__u&v)?1:0))for(;e>=0||r<l.length;){if(e>=0){if((f=l[e])&&0==(f.__u&v)&&i==f.key&&o===f.type)return e;e--}if(r<l.length){if((f=l[r])&&0==(f.__u&v)&&i==f.key&&o===f.type)return r;r++}}return-1}function j(n,l,t){"-"===l[0]?n.setProperty(l,null==t?"":t):n[l]=null==t?"":"number"!=typeof t||w.test(l)?t:t+"px"}function A(n,l,t,u,i){var o;n:if("style"===l)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(l in u)t&&l in t||j(n.style,l,"");if(t)for(l in t)u&&t[l]===u[l]||j(n.style,l,t[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=t,t?u?t.t=u.t:(t.t=c,n.addEventListener(l,o?h:s,o)):n.removeEventListener(l,o?h:s,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==t?"":t))}}function F(n){return function(l){if(this.l){var u=this.l[l.type+n];if(null==l.u)l.u=c++;else if(l.u<u.t)return;return u(t.event?t.event(l):l)}}}function O(n,l,u,i,o,e,r,f,c,s){var h,a,p,v,d,y,w,b,m,k,C,M,P,T,I,H,L=l.type;if(void 0!==l.constructor)return null;128&u.__u&&(c=!!(32&u.__u),e=[f=l.__e=u.__e]),(h=t.__b)&&h(l);n:if("function"==typeof L)try{if(b=l.props,m="prototype"in L&&L.prototype.render,k=(h=L.contextType)&&i[h.__c],C=h?k?k.props.value:h.__:i,u.__c?w=(a=l.__c=u.__c).__=a.__E:(m?l.__c=a=new L(b,C):(l.__c=a=new S(b,C),a.constructor=L,a.render=B),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=i,p=a.__d=!0,a.__h=[],a._sb=[]),m&&null==a.__s&&(a.__s=a.state),m&&null!=L.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=g({},a.__s)),g(a.__s,L.getDerivedStateFromProps(b,a.__s))),v=a.props,d=a.state,a.__v=l,p)m&&null==L.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),m&&null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(m&&null==L.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&(null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)||l.__v===u.__v)){for(l.__v!==u.__v&&(a.props=b,a.state=a.__s,a.__d=!1),l.__e=u.__e,l.__k=u.__k,l.__k.some(function(n){n&&(n.__=l)}),M=0;M<a._sb.length;M++)a.__h.push(a._sb[M]);a._sb=[],a.__h.length&&r.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),m&&null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,d,y)})}if(a.context=C,a.props=b,a.__P=n,a.__e=!1,P=t.__r,T=0,m){for(a.state=a.__s,a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),I=0;I<a._sb.length;I++)a.__h.push(a._sb[I]);a._sb=[]}else do{a.__d=!1,P&&P(l),h=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++T<25);a.state=a.__s,null!=a.getChildContext&&(i=g(g({},i),a.getChildContext())),m&&!p&&null!=a.getSnapshotBeforeUpdate&&(y=a.getSnapshotBeforeUpdate(v,d)),$(n,_(H=null!=h&&h.type===x&&null==h.key?h.props.children:h)?H:[H],l,u,i,o,e,r,f,c,s),a.base=l.__e,l.__u&=-161,a.__h.length&&r.push(a),w&&(a.__E=a.__=null)}catch(n){if(l.__v=null,c||null!=e){for(l.__u|=c?160:128;f&&8===f.nodeType&&f.nextSibling;)f=f.nextSibling;e[e.indexOf(f)]=null,l.__e=f}else l.__e=u.__e,l.__k=u.__k;t.__e(n,l,u)}else null==e&&l.__v===u.__v?(l.__k=u.__k,l.__e=u.__e):l.__e=N(u.__e,l,u,i,o,e,r,c,s);(h=t.diffed)&&h(l)}function z(n,l,u){l.__d=void 0;for(var i=0;i<u.length;i++)V(u[i],u[++i],u[++i]);t.__c&&t.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){t.__e(n,l.__v)}})}function N(n,u,i,o,e,r,f,c,s){var h,a,p,v,y,w,g,m=i.props,k=u.props,x=u.type;if("svg"===x?e="http://www.w3.org/2000/svg":"math"===x?e="http://www.w3.org/1998/Math/MathML":e||(e="http://www.w3.org/1999/xhtml"),null!=r)for(h=0;h<r.length;h++)if((y=r[h])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[h]=null;break}if(null==n){if(null===x)return document.createTextNode(k);n=document.createElementNS(e,x,k.is&&k),c&&(t.__m&&t.__m(u,r),c=!1),r=null}if(null===x)m===k||c&&n.data===k||(n.data=k);else{if(r=r&&l.call(n.childNodes),m=i.props||d,!c&&null!=r)for(m={},h=0;h<n.attributes.length;h++)m[(y=n.attributes[h]).name]=y.value;for(h in m)if(y=m[h],"children"==h);else if("dangerouslySetInnerHTML"==h)p=y;else if(!(h in k)){if("value"==h&&"defaultValue"in k||"checked"==h&&"defaultChecked"in k)continue;A(n,h,null,y,e)}for(h in k)y=k[h],"children"==h?v=y:"dangerouslySetInnerHTML"==h?a=y:"value"==h?w=y:"checked"==h?g=y:c&&"function"!=typeof y||m[h]===y||A(n,h,y,m[h],e);if(a)c||p&&(a.__html===p.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),u.__k=[];else if(p&&(n.innerHTML=""),$(n,_(v)?v:[v],u,i,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":e,r,f,r?r[0]:i.__k&&C(i,0),c,s),null!=r)for(h=r.length;h--;)b(r[h]);c||(h="value","progress"===x&&null==w?n.removeAttribute("value"):void 0!==w&&(w!==n[h]||"progress"===x&&!w||"option"===x&&w!==m[h])&&A(n,h,w,m[h],e),h="checked",void 0!==g&&g!==n[h]&&A(n,h,g,m[h],e))}return n}function V(n,l,u){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==l||(n.__u=n(l))}else n.current=l}catch(n){t.__e(n,u)}}function q(n,l,u){var i,o;if(t.unmount&&t.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||V(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.__e(n,l)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],l,u||"function"!=typeof n.type);u||b(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function B(n,l,t){return this.constructor(n,t)}function D(n,u,i){var o,e,r,f;t.__&&t.__(n,u),e=(o="function"==typeof i)?null:i&&i.__k||u.__k,r=[],f=[],O(u,n=(!o&&i||u).__k=m(x,null,[n]),e||d,d,u.namespaceURI,!o&&i?[i]:e?null:u.firstChild?l.call(u.childNodes):null,r,!o&&i?i:e?e.__e:u.firstChild,o,f),z(r,n,f)}l=y.slice,t={__e:function(n,l,t,u){for(var i,o,e;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),e=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),e=i.__d),e)return i.__E=i}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&null==n.constructor},S.prototype.setState=function(n,l){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof n&&(n=n(g({},t),this.props)),n&&g(t,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this))},S.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this))},S.prototype.render=x,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},T.__r=0,c=0,s=F(!1),h=F(!0),a=0,n.Component=S,n.Fragment=x,n.cloneElement=function(n,t,u){var i,o,e,r,f=g({},n.props);for(e in n.type&&n.type.defaultProps&&(r=n.type.defaultProps),t)"key"==e?i=t[e]:"ref"==e?o=t[e]:f[e]=void 0===t[e]&&void 0!==r?r[e]:t[e];return arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):u),k(n.type,f,i||n.key,o||n.ref,null)},n.createContext=function(n,l){var t={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,u;return this.getChildContext||(t=new Set,(u={})[l]=this,this.getChildContext=function(){return u},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.forEach(function(n){n.__e=!0,P(n)})},this.sub=function(n){t.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t&&t.delete(n),l&&l.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t},n.createElement=m,n.createRef=function(){return{current:null}},n.h=m,n.hydrate=function n(l,t){D(l,t,n)},n.isValidElement=i,n.options=t,n.render=D,n.toChildArray=function n(l,t){return t=t||[],null==l||"boolean"==typeof l||(_(l)?l.some(function(l){n(l,t)}):t.push(l)),t}});\n//# sourceMappingURL=preact.umd.js.map'),e('!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=t.options,a=e.__b,v=e.__r,l=e.diffed,d=e.__c,s=e.unmount,p=e.__;function h(n,t){e.__h&&e.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y(n){return f=1,m(j,n)}function m(n,t,i){var o=h(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):j(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=!1;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,u))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=h(u++,4);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function _(n,t){var r=h(u++,7);return g(r.__H,t)&&(r.__=n(),r.__H=t,r.__h=n),r.__}function b(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p&&p(n,t)},e.__r=function(n){v&&v(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(A),t.__h.forEach(F),t.__h=[],u=0)),i=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===e.requestAnimationFrame||((o=e.requestAnimationFrame)||x)(b)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),i=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(u,n.__v)}}),d&&d(n,t)},e.unmount=function(n){s&&s(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),u.__H=void 0,t&&e.__e(t,u.__v))};var q="function"==typeof requestAnimationFrame;function x(n){var t,u=function(){clearTimeout(r),q&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);q&&(t=requestAnimationFrame(u))}function A(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function F(n){var t=r;n.__c=n.__(),r=t}function g(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function j(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,_(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=h(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=h(u++,3);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=h(u++,10),i=y();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=h(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=_,n.useReducer=m,n.useRef=function(n){return f=5,_(function(){return{current:n}},[])},n.useState=y});\n//# sourceMappingURL=hooks.umd.js.map'),e('!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((i||self).preactSignalsCore={})}(this,function(i){var t=Symbol.for("preact-signals");function o(){if(!(f>1)){var i,t=!1;while(void 0!==n){var o=n;n=void 0;h++;while(void 0!==o){var r=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&u(o))try{o.c()}catch(o){if(!t){i=o;t=!0}}o=r}}h=0;f--;if(t)throw i}else f--}var r=void 0,n=void 0,f=0,h=0,s=0;function e(i){if(void 0!==r){var t=i.n;if(void 0===t||t.t!==r){t={i:0,S:i,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:t};if(void 0!==r.s)r.s.n=t;r.s=t;i.n=t;if(32&r.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=r.s;t.n=void 0;r.s.n=t;r.s=t}return t}}}function v(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0}v.prototype.brand=t;v.prototype.h=function(){return!0};v.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i}};v.prototype.U=function(i){if(void 0!==this.t){var t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0}if(void 0!==o){o.e=t;i.x=void 0}if(i===this.t)this.t=o}};v.prototype.subscribe=function(i){var t=this;return b(function(){var o=t.value,n=r;r=void 0;try{i(o)}finally{r=n}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){var i=r;r=void 0;try{return this.value}finally{r=i}};Object.defineProperty(v.prototype,"value",{get:function(){var i=e(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(h>100)throw new Error("Cycle detected");this.v=i;this.i++;s++;f++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{o()}}}});function u(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function d(i){for(var t=i.s;void 0!==t;t=t.n){var o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function c(i){var t=i.s,o=void 0;while(void 0!==t){var r=t.p;if(-1===t.i){t.S.U(t);if(void 0!==r)r.n=t.n;if(void 0!==t.n)t.n.p=r}else o=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=r}i.s=o}function a(i){v.call(this,void 0);this.x=i;this.s=void 0;this.g=s-1;this.f=4}(a.prototype=new v).h=function(){this.f&=-3;if(1&this.f)return!1;if(32==(36&this.f))return!0;this.f&=-5;if(this.g===s)return!0;this.g=s;this.f|=1;if(this.i>0&&!u(this)){this.f&=-2;return!0}var i=r;try{d(this);r=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++}}catch(i){this.v=i;this.f|=16;this.i++}r=i;c(this);this.f&=-2;return!0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}v.prototype.S.call(this,i)};a.prototype.U=function(i){if(void 0!==this.t){v.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N()}};Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function l(i){var t=i.u;i.u=void 0;if("function"==typeof t){f++;var n=r;r=void 0;try{t()}catch(t){i.f&=-2;i.f|=8;y(i);throw t}finally{r=n;o()}}}function y(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;l(i)}function w(i){if(r!==this)throw new Error("Out-of-order effect");c(this);r=i;this.f&=-2;if(8&this.f)y(this);o()}function p(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t}finally{i()}};p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;l(this);d(this);f++;var i=r;r=this;return w.bind(this,i)};p.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=n;n=this}};p.prototype.d=function(){this.f|=8;if(!(1&this.f))y(this)};function b(i){var t=new p(i);try{t.c()}catch(i){t.d();throw i}return t.d.bind(t)}i.Signal=v;i.batch=function(i){if(f>0)return i();f++;try{return i()}finally{o()}};i.computed=function(i){return new a(i)};i.effect=b;i.signal=function(i){return new v(i)};i.untracked=function(i){var t=r;r=void 0;try{return i()}finally{r=t}}});//# sourceMappingURL=signals-core.min.js.map'),e('!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("preact"),require("preact/hooks"),require("@preact/signals-core")):"function"==typeof define&&define.amd?define(["exports","preact","preact/hooks","@preact/signals-core"],i):i((n||self).preactSignals={},n.preact,n.preactHooks,n.preactSignalsCore)}(this,function(n,i,r,t){var e,f;function o(n,r){i.options[n]=r.bind(null,i.options[n]||function(){})}function u(n){if(f)f();f=n&&n.S()}function a(n){var e=this,f=n.data,o=useSignal(f);o.value=f;var u=r.useMemo(function(){var n=e.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}e.__$u.c=function(){var n;if(!i.isValidElement(u.peek())&&3===(null==(n=e.base)?void 0:n.nodeType))e.base.data=u.peek();else{e.__$f|=1;e.setState({})}};return t.computed(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return u.value}a.displayName="_st";Object.defineProperties(t.Signal.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:a},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});o("__b",function(n,i){if("string"==typeof i.type){var r,e=i.props;for(var f in e)if("children"!==f){var o=e[f];if(o instanceof t.Signal){if(!r)i.__np=r={};r[f]=o;e[f]=o.peek()}}}n(i)});o("__r",function(n,i){u();var r,f=i.__c;if(f){f.__$f&=-2;if(void 0===(r=f.__$u))f.__$u=r=function(n){var i;t.effect(function(){i=this});i.c=function(){f.__$f|=1;f.setState({})};return i}()}e=f;u(r);n(i)});o("__e",function(n,i,r,t){u();e=void 0;n(i,r,t)});o("diffed",function(n,i){u();e=void 0;var r;if("string"==typeof i.type&&(r=i.__e)){var t=i.__np,f=i.props;if(t){var o=r.U;if(o)for(var a in o){var v=o[a];if(void 0!==v&&!(a in t)){v.d();o[a]=void 0}}else r.U=o={};for(var s in t){var l=o[s],d=t[s];if(void 0===l){l=c(r,s,d,f);o[s]=l}else l.o(d,f)}}}n(i)});function c(n,i,r,e){var f=i in n&&void 0===n.ownerSVGElement,o=t.signal(r);return{o:function(n,i){o.value=n;e=i},d:t.effect(function(){var r=o.value.value;if(e[i]!==r){e[i]=r;if(f)n[i]=r;else if(r)n.setAttribute(i,r);else n.removeAttribute(i)}})}}o("unmount",function(n,i){if("string"==typeof i.type){var r=i.__e;if(r){var t=r.U;if(t){r.U=void 0;for(var e in t){var f=t[e];if(f)f.d()}}}}else{var o=i.__c;if(o){var u=o.__$u;if(u){o.__$u=void 0;u.d()}}}n(i)});o("__h",function(n,i,r,t){if(t<3||9===t)i.__$f|=2;n(i,r,t)});i.Component.prototype.shouldComponentUpdate=function(n,i){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var t in i)return!0;for(var e in n)if("__source"!==e&&n[e]!==this.props[e])return!0;for(var f in this.props)if(!(f in n))return!0;return!1};function useSignal(n){return r.useMemo(function(){return t.signal(n)},[])}n.Signal=t.Signal;n.batch=t.batch;n.computed=t.computed;n.effect=t.effect;n.signal=t.signal;n.untracked=t.untracked;n.useComputed=function(n){var i=r.useRef(n);i.current=n;e.__$f|=4;return r.useMemo(function(){return t.computed(function(){return i.current()})},[])};n.useSignal=useSignal;n.useSignalEffect=function(n){var i=r.useRef(n);i.current=n;r.useEffect(function(){return t.effect(function(){return i.current()})},[])}});//# sourceMappingURL=signals.min.js.map'),e('!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.htm=e()}(this,function(){var n=function(e,t,u,s){var r;t[0]=0;for(var p=1;p<t.length;p++){var h=t[p++],o=t[p]?(t[0]|=h?1:2,u[t[p++]]):t[++p];3===h?s[0]=o:4===h?s[1]=Object.assign(s[1]||{},o):5===h?(s[1]=s[1]||{})[t[++p]]=o:6===h?s[1][t[++p]]+=o+"":h?(r=e.apply(o,n(e,o,u,["",null])),s.push(r),o[0]?t[0]|=2:(t[p-2]=0,t[p]=r)):s.push(o)}return s},e=new Map;return function(t){var u=e.get(this);return u||(u=new Map,e.set(this,u)),(u=n(this,u.get(t)||(u.set(t,u=function(n){for(var e,t,u=1,s="",r="",p=[0],h=function(n){1===u&&(n||(s=s.replace(/^\\s*\\n\\s*|\\s*\\n\\s*$/g,"")))?p.push(0,n,s):3===u&&(n||s)?(p.push(3,n,s),u=2):2===u&&"..."===s&&n?p.push(4,n,0):2===u&&s&&!n?p.push(5,0,!0,s):u>=5&&((s||!n&&5===u)&&(p.push(u,0,s,t),u=6),n&&(p.push(u,n,0,t),u=6)),s=""},o=0;o<n.length;o++){o&&(1===u&&h(),h(o));for(var f=0;f<n[o].length;f++)e=n[o][f],1===u?"<"===e?(h(),p=[p],u=3):s+=e:4===u?"--"===s&&">"===e?(u=1,s=""):s=e+s[0]:r?e===r?r="":s+=e:\'"\'===e||"\'"===e?r=e:">"===e?(h(),u=1):u&&("="===e?(u=5,t=s,s=""):"/"===e&&(u<5||">"===n[o][f+1])?(h(),3===u&&(p=p[0]),u=p,(p=p[0]).push(2,0,u),u=0):" "===e||"\\t"===e||"\\n"===e||"\\r"===e?(h(),u=2):s+=e),3===u&&"!--"===s&&(u=4,p=p[0])}return h(),p}(t)),u),arguments,[])).length>1?u:u[0]}});')}("undefined"!=typeof window?window:this);var t=window.htm,{Component:e,h:n,render:r}=window.preact,{useCallback:a,useEffect:i,useMemo:o,useRef:l,useState:s}=window.preactHooks,{signal:u}=window.preactSignals;function c(){if(!("undefined"==typeof window||"undefined"==typeof document||window.AtriumReliability&&window.AtriumReliability.failBus)){var t;try{t=O({})}catch(t){try{console.error("[atriumX] reliability init failed",t)}catch(t){}return}window.AtriumReliability=t;var e=t.failBus;try{if(void 0!==yn&&yn&&yn.length&&"function"==typeof e.setKnownStations){for(var n=[],r=0;r<yn.length;r++)yn[r]&&yn[r].id&&n.push(yn[r].id);e.setKnownStations(n)}}catch(t){}e.on("station",function(){try{"object"==typeof rt&&rt&&rt.failNonce&&(rt.failNonce.value=rt.failNonce.value+1)}catch(t){}}),e.on("toast",function(t){try{var e=(t&&t.source?t.source+" · ":"")+(t&&t.message||"failed");if("function"==typeof Pt)return void Pt(e,"error");try{console.error("[atriumX:failBus]",t&&t.source,t&&t.message)}catch(t){}}catch(t){}}),e.on("banner",function(t){try{var e=document.getElementById("atrium-fail-banner");e||(e=document.createElement("div"),e.id="atrium-fail-banner",e.className="fail-banner",e.setAttribute("role","alert"),document.body.insertBefore(e,document.body.firstChild)),e.textContent=(t&&t.message||"a portal-wide failure occurred")+" · reload to retry",e.hidden=!1}catch(t){}})}}var d=3e5,f=216e5,p="atrium2:";function h(t){return 0===t.indexOf("tx:stop:")?f:d}function v(t){if(t)return t;try{if("undefined"!=typeof window&&window.localStorage)return window.localStorage}catch(t){}try{if("undefined"!=typeof localStorage)return localStorage}catch(t){}return null}function m(t,e){var n=v(t),r=e||function(){return Date.now()};function a(t){try{if(!n)return null;var e=n.getItem(p+t);if(!e)return null;var a=JSON.parse(e),i=h(t);if(!a||r()-(a.ts||0)>i){try{n.removeItem(p+t)}catch(t){}return null}return a.data}catch(t){return null}}function i(t,e){try{if(!n)return null;var a=n.getItem(p+t);if(!a)return null;var i=JSON.parse(a),o=null!=e?e:h(t);if(!i||r()-(i.ts||0)>o){try{n.removeItem(p+t)}catch(t){}return null}return i}catch(t){return null}}function o(){var t=[];try{for(var e=0;e<n.length;e++){var r=n.key(e);r&&0===r.indexOf(p)&&t.push(r)}}catch(t){}return t}function l(t){var e=r(),a=o().map(function(t){var r=0;try{var a=JSON.parse(n.getItem(t));r=a&&a.ts||0}catch(t){}var i=0===t.indexOf(p)?t.slice(p.length):t,o=h(i),l=e-r>o,s=0===i.indexOf("tx:stop:")&&!l;return{k:t,ts:r,expired:l,isLiveOverride:s}});a.sort(function(t,e){return t.isLiveOverride!==e.isLiveOverride?t.isLiveOverride?1:-1:t.expired!==e.expired?t.expired?-1:1:t.ts-e.ts});for(var i=0,l=0;l<a.length&&i<t&&!a[l].isLiveOverride;l++)try{n.removeItem(a[l].k),i++}catch(t){}}function s(t,e){if(n){var a=JSON.stringify({ts:r(),data:e});try{n.setItem(p+t,a)}catch(e){try{l(Math.max(1,Math.ceil(.2*o().length))),n.setItem(p+t,a)}catch(e){try{"undefined"!=typeof console&&console.warn("[atriumX] cache full; write dropped for "+t)}catch(t){}}}}}function u(t){try{n&&n.removeItem(p+t)}catch(t){}}return{get:a,getWithMeta:i,set:s,del:u,_store:n}}function g(){var t={};return{getItem:function(e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:null},setItem:function(e,n){t[e]=String(n)},removeItem:function(e){delete t[e]},clear:function(){t={}},key:function(e){return Object.keys(t)[e]||null},get length(){return Object.keys(t).length}}}var _={makeCache:m,memoryStore:g,CACHE_TTL_MS:d,OVERRIDE_TTL_MS:f,_ttlForKey:h};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumCache=_);var y={toast:1,station:2,banner:3};function b(t){t=t||{};var e=t.ringMax||50,n=[],r={toast:[],station:[],banner:[]},a={},i=null;function o(t){if(null!=t){var e={};if("number"==typeof t.length)for(var n=0;n<t.length;n++)null!=t[n]&&(e[String(t[n])]=!0);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[String(r)]=!0);i=e}else i=null}function l(t){return!i||!0===i[String(t)]}function s(t){return y[t]?t:"toast"}function u(t){try{"undefined"!=typeof console&&console.error("[atriumX] failBus sink threw",t)}catch(t){}}function c(t,i,o){o=o||{};var c=s(o.severity),d={source:String(t||"unknown"),message:i&&i.message||String(null==i?"error":i),stack:i&&i.stack||"",severity:c,retry:"function"==typeof o.retry?o.retry:null,ts:Date.now()};if(n.push(d),n.length>e&&n.shift(),"station"===c)if(l(d.source))a[d.source]=d;else{d.orphaned=!0;try{"undefined"!=typeof console&&console.error('[atriumX] failBus.raise: unknown station id "'+d.source+'" (not in topology); the persistent glow would be orphaned. Dropped.')}catch(t){}}for(var f=r[c]||[],p=0;p<f.length;p++)try{f[p](d)}catch(t){u(t)}return d}function d(t){if(a[t]){delete a[t];for(var e=r.station||[],n=0;n<e.length;n++)try{e[n]({source:t,resolved:!0,ts:Date.now()})}catch(t){u(t)}return!0}return!1}function f(t,e){return r[t]||(r[t]=[]),r[t].push(e),function(){var n=r[t].indexOf(e);n>=0&&r[t].splice(n,1)}}function p(t){return a[t]||null}function h(t){var e=t||n.length;return n.slice(Math.max(0,n.length-e))}function v(){n.length=0,a={}}return{raise:c,resolve:d,on:f,stationHealth:p,recent:h,clear:v,setKnownStations:o,SEVERITIES:y}}_={makeFailBus:b,SEVERITIES:y};"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumFailBus=_);var $={PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"},w={CONFIRMED:"CONFIRMED",PENDING_WRITE:"PENDING_WRITE",REVERTED:"REVERTED"},k={states:[$.PENDING,$.RUNNING,$.OK,$.ANOMALY,$.FAILED,$.STALE],initial:$.PENDING,transitions:{PENDING:{upload:$.RUNNING},RUNNING:{reconPass:$.OK,reconFail:$.ANOMALY,rpcFail:$.FAILED},OK:{monthBoundary:$.STALE,upload:$.RUNNING},ANOMALY:{upload:$.RUNNING},FAILED:{upload:$.RUNNING},STALE:{upload:$.RUNNING}}},x={states:[$.PENDING,$.RUNNING,$.OK,$.FAILED,$.STALE],initial:$.PENDING,transitions:{PENDING:{fanout:$.RUNNING},RUNNING:{ackOk:$.OK,ackFail:$.FAILED},OK:{newNavMonth:$.PENDING,fanout:$.RUNNING},FAILED:{fanout:$.RUNNING,newNavMonth:$.PENDING},STALE:{fanout:$.RUNNING,newNavMonth:$.PENDING}}},S={states:[w.PENDING_WRITE,w.CONFIRMED,w.REVERTED],initial:null,transitions:{null:{click:w.PENDING_WRITE},PENDING_WRITE:{ackOk:w.CONFIRMED,ackFail:w.REVERTED},CONFIRMED:{click:w.PENDING_WRITE},REVERTED:{click:w.PENDING_WRITE}}},A={states:[$.PENDING,$.OK,$.ANOMALY],initial:$.ANOMALY,transitions:{ANOMALY:{dismiss:$.OK,ack:$.PENDING},PENDING:{dismiss:$.OK,flag:$.ANOMALY},OK:{redetect:$.ANOMALY}}},C={navMonth:k,consumer:x,transferWrite:S,silentSignal:A},N={OK:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function D(t,e){var n=null==N[t]?-1:N[t],r=null==N[e]?-1:N[e];return r>n?e:t}function E(t,e){var n=C[t];if(!n)throw new Error("unknown entity type: "+t);var r=n.initial,a=[];function i(t){return null==t?"null":t}function o(t){var e=n.transitions[i(r)]||{},o=e[t];return void 0===o?(a.push({from:r,trigger:t}),r):(r=o,r)}function l(t){var e=n.transitions[i(r)]||{};return void 0!==e[t]}return{type:t,id:e,get state(){return r},set:function(t){return r=t,r},send:o,can:l,rejects:a}}_={HEALTH:$,WRITE:w,ENTITY_TYPES:C,HEALTH_RANK:N,worse:D,makeEntity:E};function P(){return"undefined"!=typeof module&&module.exports?{cache:require("./cache.js"),failBus:require("./failBus.js"),health:require("./health.js"),ow:require("./optimisticWrite.js")}:{cache:window.AtriumCache,failBus:window.AtriumFailBus,health:window.AtriumHealth,ow:window.AtriumOptimisticWrite}}function O(t){t=t||{};var e=P(),n=e.cache.makeCache(t.store,t.now),r=e.failBus.makeFailBus(t.failBusOpts);return{cache:n,failBus:r,health:e.health,optimisticWrite:e.ow.optimisticWrite}}if("undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumHealth=_),"undefined"!=typeof module&&module.exports){var T=P();module.exports={createReliability:O,cache:T.cache,failBus:T.failBus,health:T.health,optimisticWrite:T.ow.optimisticWrite}}function L(t){t=t||{};var e=t.entity||null,n=t.failBus||null,r=t.source||"write:"+(t.key||"unknown");e&&e.send("click");try{t.applyLocal&&t.applyLocal()}catch(t){}try{t.audit&&t.audit("applied")}catch(t){}var a=!1;function i(){if(!a){a=!0,e&&e.send("ackOk");try{t.audit&&t.audit("confirmed")}catch(t){}try{t.onConfirm&&t.onConfirm()}catch(t){}try{n&&n.resolve&&n.resolve(r)}catch(t){}}}function o(i){if(!a){a=!0,e&&e.send("ackFail");try{t.audit&&t.audit("reverted")}catch(t){}try{t.onRevert&&t.onRevert(i)}catch(t){}if(n)try{n.raise(r,i||new Error("write reverted"),{severity:"station",retry:t.retry||null})}catch(t){}}}try{t.rpc(function(t){t&&t.ok?i():o(new Error(t&&t.message||"server rejected write"))},function(t){o(t)})}catch(t){o(t)}return{confirm:i,revert:o,isSettled:function(){return a}}}_={optimisticWrite:L};function I(t,e){try{console.error("[atriumX:overrides] "+t,e)}catch(t){}try{"function"==typeof Ct&&Ct("overrides:"+t,e)}catch(t){}}"undefined"!=typeof module&&module.exports&&(module.exports=_),"undefined"!=typeof window&&(window.AtriumOptimisticWrite=_);d=3e5,f=216e5;function h(t){return 0===t.indexOf("tx:stop:")?f:d}function R(t){try{var e=localStorage.getItem("atrium2:"+t);if(!e)return null;var n=JSON.parse(e),r=h(t);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+t)}catch(t){}return null}return n.data}catch(t){return null}}function F(t){try{var e=localStorage.getItem("atrium2:"+t);if(!e)return null;var n=JSON.parse(e),r=h(t);if(!n||Date.now()-(n.ts||0)>r){try{localStorage.removeItem("atrium2:"+t)}catch(t){}return null}return n}catch(t){return null}}function M(t,e){try{localStorage.setItem("atrium2:"+t,JSON.stringify({ts:Date.now(),data:e}))}catch(t){}}function j(t){try{localStorage.removeItem("atrium2:"+t)}catch(t){}}var K=["atrium2:tx:stop:","atrium2:tx:sig:","atrium2:tx:amt:","atrium2:tx:flag:"];function U(t){for(var e=0;e<K.length;e++)if(0===t.indexOf(K[e]))return K[e];return null}function B(){try{for(var t=Date.now(),e=[],n=0;n<localStorage.length;n++){var r=localStorage.key(n);if(r&&U(r)){var a=h(r.slice(8));try{var i=JSON.parse(localStorage.getItem(r));(!i||t-(i.ts||0)>a)&&e.push(r)}catch(t){e.push(r)}}}e.forEach(function(t){try{localStorage.removeItem(t)}catch(t){}}),e.length&&console.log("[atriumX] cleared "+e.length+" stale override(s)")}catch(t){}}function H(t){var e=R("tx:stop:"+t);return null==e?null:parseInt(e,10)}function G(t,e){M("tx:stop:"+t,e)}function V(t){j("tx:stop:"+t)}function W(t,e){M("tx:sig:"+t,String(e))}function Y(t){j("tx:sig:"+t)}function q(t){return"1"===R("tx:flag:"+t)}function J(t){q(t)?j("tx:flag:"+t):M("tx:flag:"+t,"1")}var X=["✓","wir","paid","transf","שולם","moved to trading","paid to client"];function z(t){for(var e=String(t||""),n=0;n<X.length;n++)if(e.indexOf(X[n])>=0)return!0;return e.indexOf("הועבר")>=0&&-1===e.indexOf("טרם")}var Q=["הושלם","sign","complet","done","נחתם","חתום"];function Z(t){for(var e=String(t||""),n=0;n<Q.length;n++)if(e.indexOf(Q[n])>=0)return!0;return!1}function tt(t){try{if(!t||!t.transfers||!Array.isArray(t.transfers.rows))return 0;var e=0;return t.transfers.rows.forEach(function(t){var n=t&&t.rowKey;if(n){var r=z(String(t.execStatus||"").toLowerCase()),a=Z(String(t.sigStatus||t.status||"").toLowerCase()),i=/\d/.test(String(t.amountText||"").trim()),o=H(n);null!=o&&r&&(V(n),e++);var l=R("tx:sig:"+n);"1"!==l&&"0"!==l||!a||(Y(n),e++),i&&null!=R("tx:amt:"+n)&&(j("tx:amt:"+n),e++)}}),e&&console.log("[atriumX] reconciled "+e+" override(s) against fresh boot"),e}catch(t){return I("reconcileOverridesWithBoot_",t),0}}function et(t,e){var n=Z(String(t&&t.sigStatus||"").toLowerCase()),r=z(String(t&&t.execStatus||"").toLowerCase()),a=n;if(e){var i=R("tx:sig:"+e);"1"===i?a=!0:"0"===i&&(a=!1)}var o=r,l=e?H(e):null;return 3===l?o=!0:1!==l&&2!==l||(o=!1),{sent:!0,signed:a,wired:o,overridden:null!=l}}var nt="object"==typeof BOOT&&BOOT||null,rt={transfers:u(nt&&nt.transfers||null),navWidget:u(nt&&nt.navWidget||null),playbook:u(nt&&nt.playbook||null),suggestions:u(nt&&nt.transferSuggestions||null),portfolio:u(nt&&nt.portfolio||null),closePack:u(null),schedule:u(null),fanOut:u(null),silentSignals:u([]),navRecon:u(null),health:u({}),failNonce:u(0),staleData:u(nt&&nt._stale?{lastKnownAt:nt._lastKnownAt||null}:null),view:u("home")};function at(t){var e=t||"home";rt.view.value!==e&&(rt.view.value=e)}function it(t,e){var n=rt.health.value||{};if(n[t]!==e){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);r[t]=e,rt.health.value=r}}function ot(t,e){try{it(t,"error")}catch(t){}try{rt.failNonce.value=rt.failNonce.value+1}catch(t){}}rt.recordHealthError=ot,"undefined"!=typeof window&&(window.atriumStore=rt);var lt=0;function st(){return++lt}function ut(t,e){if(null!=e&&e<lt){try{console.log("[atriumX] dropped superseded boot (gen "+e+" < "+lt+")")}catch(t){}return!1}if(!t)return!1;"transfers"in t&&(rt.transfers.value=t.transfers||null),"navWidget"in t&&(rt.navWidget.value=t.navWidget||null),"playbook"in t&&(rt.playbook.value=t.playbook||null),"transferSuggestions"in t&&(rt.suggestions.value=t.transferSuggestions||null),"portfolio"in t&&(rt.portfolio.value=t.portfolio||null),"closePack"in t&&(rt.closePack.value=t.closePack||null),"schedule"in t&&(rt.schedule.value=t.schedule||null),rt.staleData.value=t._stale?{lastKnownAt:t._lastKnownAt||null}:null;try{tt(t)}catch(t){}return!0}function ct(t){t=t||{};var e=t.render,n=t.rpc,r=t.report||function(t,e){try{console.error("[atriumX:boot] "+t,e)}catch(t){}};try{B()}catch(t){r("boot:sweep",t)}try{tt(nt)}catch(t){r("boot:reconcile",t)}if("function"==typeof e)try{e()}catch(t){r("boot:render",t)}try{null!=rt.portfolio.value&&it("portfolio","live")}catch(t){r("portfolio:seed",t)}n&&setTimeout(function(){try{n.transferSuggestions().then(function(t){rt.suggestions.value=t,it("suggestions","live")}).catch(function(t){it("suggestions","error"),r("suggestions",t)})}catch(t){r("suggestions:sync",t)}},2e3)}function dt(t,e){t&&"function"==typeof t.bootstrap&&t.bootstrap({lite:!0}).then(function(t){t&&t.portfolio&&(rt.portfolio.value=t.portfolio,it("portfolio","live"))}).catch(function(t){it("portfolio","error"),"function"==typeof e&&e("portfolio",t)})}const ft="lvp_atrium_id_token",pt=6e4;function ht(t){try{const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(e).split("").map(t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(t){return null}}function vt(){if("undefined"==typeof localStorage)return null;let t;try{t=localStorage.getItem(ft)}catch(t){return null}if(!t)return null;const e=ht(t);return e&&e.exp?1e3*Number(e.exp)<Date.now()+pt?null:t:null}function mt(t,e,n){function r(){try{var r=document.createElement("textarea");r.value=t,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r),e(!0)}catch(t){Ct(n||"copy:fallback",t),e(!1)}}e=e||function(){},"undefined"!=typeof navigator&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(function(){e(!0)},r):r()}function gt(t){return(t>=0?"+":"")+(100*t).toFixed(2)+"%"}const _t="https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxIzQKx6SbDzJj0ezjZUkZVKuBB5Go4amrMyZWvWTIZaI3n92dT-cBjUWX9nIQKPTGf/exec";function yt(){return"undefined"!=typeof google&&!!google.script&&!!google.script.run}const bt=9e4;Error;class $t extends Error{constructor(t,e){super("RPC "+t+" did not return within "+e+"ms"),this.name="RpcTimeoutError",this.fnName=t,this.timeoutMs=e,this.rpcTimeout=!0}}class wt extends Error{constructor(t){super("no idToken available for "+t),this.name="RpcUnauthenticatedError",this.fnName=t,this.rpcUnauthenticated=!0}}class kt extends Error{constructor(t,e){super("RPC "+t+" rejected: "+e),this.name="RpcUnauthorizedError",this.fnName=t,this.reason=e,this.rpcUnauthorized=!0}}function xt(t,e){return new Promise((n,r)=>{let a=!1;const i=setTimeout(()=>{a||(a=!0,r(new $t(t,bt)))},bt);google.script.run.withSuccessHandler(t=>{a||(a=!0,clearTimeout(i),n(t))}).withFailureHandler(t=>{a||(a=!0,clearTimeout(i),r(t))})[t](...e)})}function St(t,e,n){n=n||{};const r=vt();if(!r&&!n.skipAuthGuard)return Promise.reject(new wt(t));const a="undefined"!=typeof AbortController?new AbortController:null,i=a?setTimeout(()=>a.abort(),bt):null;return fetch(_t,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({fn:t,args:e||[],idToken:r||""}),signal:a?a.signal:void 0}).then(t=>t.json()).then(e=>{if(i&&clearTimeout(i),!e||!0!==e.ok){const n=e&&(e.reason||e.error)||"unknown_error";if(e&&("unauthorized"===e.error||"unknown_fn"===e.error))throw new kt(t,n);throw new Error("RPC "+t+" failed: "+n+(e&&e.message?" / "+e.message:""))}return e.result}).catch(e=>{if(i&&clearTimeout(i),e&&"AbortError"===e.name)throw new $t(t,bt);throw e})}function At(t,e,n){return yt()?xt(t,e||[]):St(t,e||[],n)}function Ct(t,e){try{console.error("[atriumX] "+t,e)}catch(t){}try{const n="undefined"!=typeof window&&window.atriumStore||("undefined"!=typeof atriumStore?atriumStore:null);if(n)if("function"==typeof n.recordHealthError)n.recordHealthError(t,e);else if(n.health&&"object"==typeof n.health){const e=n.health.value&&"object"==typeof n.health.value?n.health.value:{},r={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);r[t]="error",n.health.value=r}}catch(t){}try{At("logErrorForPortal",["atriumX:"+t,e&&e.message||String(e),e&&e.stack||""],{skipAuthGuard:!0}).catch(()=>{})}catch(t){}return e}function Nt(t,...e){return At(t,e).catch(e=>{throw Ct(t,e),e})}function Dt(t,e,n){return At("logErrorForPortal",[t,e,n],{skipAuthGuard:!0}).catch(()=>!1)}const Et={bootstrap:t=>Nt("getPortalBootstrap",t),transferSuggestions:()=>Nt("getTransferSuggestionsForPortal"),transferSuggestionLog:t=>Nt("getTransferSuggestionLogForPortal",t),applyTransferSuggestion:t=>Nt("applyTransferSuggestionForPortal",t),applyMultipleTransferSuggestions:t=>Nt("applyMultipleTransferSuggestionsForPortal",t),recordTransferSuggestionEvent:(t,e)=>Nt("recordTransferSuggestionEventForPortal",t,e),setTransferStatus:(t,e)=>Nt("setPortalTransferStatusForPortal",t,e),setTransferSigStatus:(t,e)=>Nt("setPortalTransferSigStatusForPortal",t,e),setTransferAmount:t=>Nt("setTransferAmountForPortal",t),rowsWithManualEvents:t=>Nt("getRowsWithManualEventsForPortal",t),monthlyTransferBreakdown:t=>Nt("getMonthlyTransferBreakdownForPortal",t),manualUpload:(t,e,n,r)=>Nt("manualUpload",t,e,n,r),fanOutStatus:(t,e)=>Nt("getFanOutStatusForPortal",t,e),triggerFanOut:(t,e)=>Nt("triggerFanOutForPortal",t,e),navReconciliation:(t,e)=>Nt("getNavReconciliationForPortal",t,e),approveNavClose:(t,e,n)=>Nt("approveNavCloseForPortal",t,e,n),playbookState:(t,e)=>Nt("getPlaybookStateForPortal",t,e),togglePlaybookStep:(t,e,n,r)=>Nt("togglePlaybookStepForPortal",t,e,n,r),lpSyncMoveToGroup:(t,e)=>Nt("lpSyncMoveToGroup",t,e),saveStoredRoughYield:(t,e)=>Nt("saveStoredRoughYield",t,e),portfolio:()=>Nt("getPortfolioForPortal"),quotes:t=>Nt("fetchQuotesForPortal",t),history:(t,e)=>Nt("fetchHistoryForPortal",t,e),fx:()=>Nt("fetchFxForPortal"),fundNavHistory:()=>Nt("fetchFundNavHistoryForPortal"),benchmarkHistory:(t,e)=>Nt("fetchBenchmarkHistoryForPortal",t,e),scheduleState:t=>Nt("getScheduleStateForPortal",t),completeTask:t=>Nt("completeTaskForPortal",t),removeTask:t=>Nt("removeTaskForPortal",t),updateTask:(t,e)=>Nt("updateTaskForPortal",t,e),onboardingSilentSignals:t=>Nt("getOnboardingSilentSignalsForPortal",t),dismissSilentSignal:t=>Nt("dismissSilentSignalForPortal",t),chatHistory:()=>Nt("getChatHistoryForPortal"),sendChatMessage:t=>Nt("sendChatMessageForPortal",t),resetChat:()=>Nt("resetChatForPortal"),logError:(t,e,n)=>Dt(t,e,n)};function Pt(t,e){if("undefined"!=typeof document){var n=document.getElementById("toast");if(n){var r="error"===e;n.textContent=t;try{n.setAttribute("role",r?"alert":"status"),n.setAttribute("aria-live",r?"assertive":"polite")}catch(t){}n.className="toast is-show"+(r?" is-error":"success"===e?" is-success":""),clearTimeout(Pt._t),Pt._t=setTimeout(function(){n.className="toast"},r?8e3:3200)}else try{console.log("[toast] "+t)}catch(t){}}else try{console.log("[toast] "+t)}catch(t){}}var Ot=t.bind(n);function Tt(){var t=rt.staleData.value;if(!t)return null;var e="";try{if(t.lastKnownAt){var n=new Date(t.lastKnownAt);isNaN(n.getTime())||(e=" from "+n.toLocaleString())}}catch(t){}return Ot`
      <div class="stale-banner" role="status" aria-live="polite">
        Connection issue. Showing last-known data${e}. Retrying now; numbers may be behind.
      </div>
    `}function Lt(t){var e=l(null);return i(function(){try{e.current&&e.current.focus&&e.current.focus({preventScroll:!0})}catch(t){}},[t.view]),Ot`
      <div class=${"page page--focused"} data-view=${t.view}>
        <${Tt} />
        <${Ft} label="masthead" fallback=${Mt("masthead")}><${Bt} /><//>
        <${Ft} label="statusStrip" fallback=${Mt("status strip")}><${qt} /><//>
        <nav class="focused-nav" aria-label="Focused view navigation">
          <button type="button" class="focused-nav__back" ref=${e}
                  onClick=${function(){at("home")}}
                  aria-label="Back to the live map">← Map</button>
          <span class="focused-nav__crumb">${t.crumb}</span>
        </nav>
        <${Ft} label=${"focused:"+t.view} fallback=${Mt(t.crumb+" view")}>
          ${t.children}
        <//>
        <${Ft} label="commandPalette" fallback=${null}><${Ln} /><//>
      </div>
    `}var It={transfers:{crumb:"Transfers",comp:Ka},close:{crumb:"Close",comp:zt},projecting:{crumb:"Projecting",comp:Er},portfolio:{crumb:"Portfolio",comp:Zn},schedule:{crumb:"Schedule",comp:Wr}},Rt=ct;function Ft(){e.call(this),this.state={err:null}}function Mt(t){return Ot`<div class="boundary-fallback" role="alert">${t} unavailable</div>`}function jt(){var t=rt.view.value,e=It[t];return e?Ot`
        <${Lt} view=${t} crumb=${e.crumb}>
          <${e.comp} />
        <//>
      `:Ot`
      <div class="page" data-view="home">
        <${Tt} />
        <${Ft} label="masthead" fallback=${Mt("masthead")}><${Bt} /><//>
        <${Ft} label="statusStrip" fallback=${Mt("status strip")}><${qt} /><//>
        <${Ft} label="liveMap" fallback=${Mt("live map")}><${je} /><//>
        <${Ft} label="homeSchedule" fallback=${Mt("schedule")}><${Wr} /><//>
        <${Ft} label="portfolioPanel" fallback=${Ot`<section class="pfp" data-state="error" aria-label="Portfolio"><div class="pfp__msg" role="alert">portfolio panel unavailable</div></section>`}><${Gn} /><//>
        <${Ft} label="companionStrip" fallback=${Mt("companion strip")}><${me} /><//>
        <${Ft} label="commandPalette" fallback=${null}><${Ln} /><//>
      </div>
    `}function Kt(){if("undefined"!=typeof document){var t=document.getElementById("atrium-root");t?r(Ot`<${jt} />`,t):Ct("mount:no-root",new Error("#atrium-root missing"))}}Ft.prototype=Object.create(e.prototype),Ft.prototype.componentDidCatch=function(t){try{Ct("home:"+(this.props.label||"panel"),t)}catch(t){}this.setState({err:t||new Error("render error")})},Ft.prototype.render=function(){return this.state&&this.state.err?null!=this.props.fallback?this.props.fallback:null:this.props.children},ct=function(){Rt({render:Kt,rpc:Et,report:Ct})};Ot=t.bind(n);function Ut(t,e){try{if("undefined"!=typeof window&&null!=window[t]&&""!==window[t])return window[t]}catch(t){}return e}function Bt(){var t=Ut("__dateStr",""),e=Ut("__initialMe","noa@legacyvpartners.com"),n=Ut("__buildTag","dev");return Ot`
      <header class="wm">
        <div class="wm__brand" aria-label="Legacy Value Partners">
          <svg class="wm__logo" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="6" fill="#D85E4C"></rect>
            <text x="50%" y="58%" dominant-baseline="central" text-anchor="middle"
                  font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  font-weight="800" font-size="44" fill="#F2EDE0">L</text>
          </svg>
          <span>Legacy</span>
          <span class="wm__sub">Value Partners</span>
        </div>
        <div class="wm__right">
          ${t?Ot`<span>${t}</span>`:null}
          <span class="you">${e}</span>
          <span class="wm__build">build <b>${n}</b></span>
        </div>
      </header>
    `}var Ht=gt;Ot=t.bind(n);function Gt(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}var Vt=String.fromCharCode(8212);function Wt(t){if(!t)return"";var e=new Date(t);if(isNaN(e.getTime()))return"";try{return e.toLocaleString()}catch(t){return e.toISOString()}}function Yt(t){var e=t.lbl,n=t.state||"live",r="status__val"+(t.tone?" status__val--"+t.tone:""),a=t.title?e+(null!=t.value?" "+t.value:"")+" · "+t.title:null;return"loading"===n?Ot`
        <div class="status__item" title=${t.title||null}
             role=${a?"group":null} aria-label=${a}>
          <span class="status__lbl">${e}</span>
          <span class="status__val is-loading" aria-busy="true">${Vt}</span>
        </div>`:"error"===n?Ot`
        <div class="status__item">
          <span class="status__lbl">${e}</span>
          <span class="status__val status__val--err"
                role="button" tabindex="0" title=${t.title||"fetch failed, click to retry"}
                aria-label=${e+": "+(t.title||"fetch failed, click to retry")}
                onClick=${t.onRetry}>err / retry</span>
        </div>`:Ot`
      <div class="status__item" title=${t.title||null}
           role=${a?"group":null} aria-label=${a}>
        <span class="status__lbl">${e}</span>
        <span class=${r}>${t.value}</span>
      </div>`}function qt(){Gt([rt.navWidget,rt.portfolio,rt.health]);var t=rt.navWidget.value,e=rt.portfolio.value,n=rt.health.value||{},r=t&&t.closed||{},a=t&&t.recon||null,i=n.portfolio||(e?"live":"loading"),o=e&&e.headline||null;function l(){return"error"===i?"error":o&&null!=o.ytd_pct?"live":"loading"}function s(){return"error"===i?"error":o&&null!=o.mtd_pct?"live":"loading"}function u(){try{dt(Et,Ct)}catch(t){Ct("portfolio:retry",t)}}var c=o&&null!=o.ytd_pct?Ht(o.ytd_pct):null,d=o&&null!=o.mtd_pct?Ht(o.mtd_pct):null,f=o&&null!=o.ytd_pct?o.ytd_pct>=0?"up":"down":null,p=o&&null!=o.mtd_pct?o.mtd_pct>=0?"up":"down":null,h="live",v=Vt,m=null,g="no snapshot reconciliation available";a&&(v=a.passed?"pass":"fail",a.deltaPctDisplay&&(v+=" ("+a.deltaPctDisplay+")"),m=a.passed?"up":"down",g=(a.monthLabel?a.monthLabel+" . ":"")+"NAV reconciliation "+(a.passed?"passed":"FAILED"));var _=null!=r.numeralDisplay?"live":"loading",y=null!=r.monthLabel||null!=r.label?"live":"loading",b=null;if(r.monthLabel){b="BDO NAV "+r.monthLabel;var $=Wt(r.uploadedAt);$&&(b+=" · uploaded "+$)}var w="latest closed NAV month",k=e&&(e.as_of_iso||e.as_of)||"",x="FIBI portfolio basis"+(k?" · as of "+k:"");return Ot`
      <div class="status">
        <${Yt} lbl="NAV"   state=${_}   value=${r.numeralDisplay} title=${b} />
        <${Yt} lbl="Month" state=${y} value=${r.monthLabel||r.label} title=${w} />
        <${Yt} lbl="YTD"   state=${l()} value=${c} tone=${f} onRetry=${u} title=${"live"===l()?x:null} />
        <${Yt} lbl="MTD"   state=${s()} value=${d} tone=${p} onRetry=${u} title=${"live"===s()?x:null} />
        <${Yt} lbl="Recon" state=${h} value=${v} tone=${m} title=${g} />
      </div>
    `}Ot=t.bind(n);var Jt=Pt;function Xt(){return Et.playbookState(null,{force:!0}).then(function(t){return t&&(rt.playbook.value=t),t}).catch(function(t){return Ct("close:playbookReload",t),null})}function zt(){var t=rt.playbook.value,e=rt.navWidget.value,n=s({}),r=n[0],a=n[1];function i(t,e){a(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return e?r[t]=e:delete r[t],r})}function o(t){var e=rt.playbook.value,n=e&&e.steps||[];return n[t]||null}function l(t){var e=o(t);if(e){var n=String(e.revShareCopy||"").trim();if(n){var r=e.revShareRows&&e.revShareRows.length||0;mt(n,function(t){t?Jt("Copied"+(r?" · "+r+" LPs":"")+" for Omri","success"):Jt("Copy failed","error")},"close:copy:fallback")}else Jt("Nothing to copy","error")}}function u(t){var e=o(t);if(e){var n=ae(e);if(n.length){if("undefined"==typeof window||!window.confirm||window.confirm("File "+n.length+" into their People-board group?\n\n"+ie(n))){i(t,"filing");var r=0,a=0,l=[];s()}}else Jt("Nothing to file","success")}function s(){if(r>=n.length)return u();var t=n[r++];Et.lpSyncMoveToGroup(t.itemId,t.toGroup).then(function(e){e&&e.ok?a++:l.push(t.name||t.itemId),s()}).catch(function(e){Ct("close:lpSyncMoveToGroup",e),l.push(t.name||t.itemId),s()})}function u(){Jt(le(a,l.length),l.length?"error":"success"),Xt().then(function(){i(t,null)})}}function c(t){var e=o(t);if(e){var n=rt.playbook.value||{},r=n.month||{},a=!e.done,l=oe(e.id),s=n,u=(n.steps||[]).map(function(e,n){if(n!==t)return e;var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r.done=a,r}),c={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.steps=u,"number"==typeof n.completedCount&&(c.completedCount=n.completedCount+(a?1:-1)),rt.playbook.value=c,i(t,"toggling"),Et.togglePlaybookStep(r.year,r.month,l,a).then(function(){return Xt()}).catch(function(t){rt.playbook.value=s,Ct("close:toggleStep",t),Jt("Could not toggle the step. Reverted.","error")}).then(function(){i(t,null)})}}if(!t)return Ot`
        <div class="close-view" data-state="loading">
          <div class="close-view__empty">awaiting playbook…</div>
        </div>`;var d=Array.isArray(t.steps)?t.steps:[];if(!d.length)return Ot`
        <div class="close-view" data-state="empty">
          <div class="close-view__empty">no close steps yet</div>
        </div>`;var f=te(t),p=Qt(d),h=f.total>0?Math.max(0,Math.min(100,f.done/f.total*100)):0,v=f.total>0&&f.done>=f.total,m=e&&Array.isArray(e.fanOut)?e.fanOut:[],g=t.month&&t.month.month,_=m.filter(function(t){return!(t.hideMonths&&g&&-1!==t.hideMonths.indexOf(g))}),y=!(!e||!0!==e.closedOk),b=!(!e||"boolean"!=typeof e.closedOk);return Ot`
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
            <div class="close-vessel__month">${ne(t)}</div>
          </div>

          <ol class="close-steps" aria-label="Close checklist steps">
            ${d.map(function(t,e){var n=!t.done&&e===p,a="close-step"+(t.done?" is-done":n?" is-now":" is-pending"),i=t.link&&Zt(t.link);t.link&&!i&&Ct("close:unsafe-link",new Error("non-http(s) link dropped: "+t.link));var o=se(t,e),s=re(t),d=r[e];return Ot`
                <li key=${null!=t.id?t.id:e} class=${a} role="checkbox" aria-checked=${!!t.done}>
                  <span class="close-step__dot" aria-hidden="true"></span>
                  <span class="close-step__name">
                    ${i?Ot`<a class="close-step__link" href=${t.link} target="_blank" rel="noopener">${o}</a>`:o}
                    ${t.autoDetail?Ot`<span class="close-step__detail">${t.autoDetail}</span>`:null}
                  </span>
                  <span class="close-step__when">
                    ${t.done?"done":n?"now":""}
                    ${s&&"rscopy"===s.type?Ot`<button type="button" class="close-step__act close-step__act--ghost"
                                aria-label="Copy the incoming-LP rev-share list for Omri"
                                title="Copy the incoming-LP rev-share list for Omri"
                                onClick=${function(){l(e)}}>⧉</button>`:null}
                    ${s&&"filelps"===s.type?Ot`<button type="button" class="close-step__act"
                                disabled=${"filing"===d}
                                aria-label=${"Open File "+s.count+" for "+o}
                                title="Move these LPs into their People-board group"
                                onClick=${function(){u(e)}}>${"filing"===d?"Filing…":"File "+s.count}</button>`:null}
                    ${s&&"toggle-manual"===s.type?Ot`<button type="button" class=${"close-step__act"+(t.done?" close-step__act--ghost":"")}
                                disabled=${"toggling"===d}
                                aria-label=${(t.done?"Undo ":"Mark ")+o+(t.done?"":" done")}
                                onClick=${function(){c(e)}}>${s.label}</button>`:null}
                  </span>
                </li>`})}
          </ol>
        </div>
        ${b?Ot`
          <div class=${"close-actually"+(y?" is-clean":" is-not-clean")}
               role="status" aria-live="polite">
            ${y?"✓ Actually clean. Reconciled and every fan-out consumer done.":"○ Not yet. Checklist may look done, but reconciliation or fan-out is not."}
          </div>`:null}
        ${_.length?Ot`
          <div class="close-fanout">
            <div class="close-fanout__title">Fan-out</div>
            <ul class="close-fanout__list">
              ${_.map(function(t){var e="close-fanout__row is-"+t.status,n=t.summaryLines&&t.summaryLines[0]||"";return Ot`
                  <li key=${t.key} class=${e} title=${t.lpsTooltip||null}>
                    <span class="close-fanout__dot" aria-hidden="true"></span>
                    <span class="close-fanout__label">${t.label}</span>
                    <span class="close-fanout__status">${t.status}</span>
                    ${t.ranAt?Ot`<span class="close-fanout__ran">${t.ranAt}</span>`:null}
                    <span class="close-fanout__summary">${n}</span>
                  </li>`})}
            </ul>
          </div>`:null}
      </div>
    `}function Qt(t){t=t||[];for(var e=0;e<t.length;e++)if(!t[e].done&&(0===e||t[e-1].done))return e;return-1}function Zt(t){return/^https?:\/\//i.test(String(null==t?"":t).trim())}function te(t){var e=t&&Array.isArray(t.steps)?t.steps:[],n=t&&"number"==typeof t.completedCount?t.completedCount:e.filter(function(t){return t&&t.done}).length,r=t&&"number"==typeof t.totalCount?t.totalCount:e.length;return{done:n,total:r}}var ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ne(t,e){var n=t&&t.month;if(n&&"number"==typeof n.month&&n.month>=1&&n.month<=12)return ee[n.month-1]+" · in progress";var r=e||new Date;return ee[r.getMonth()]+" · in progress"}function re(t){return t?"revshare"===t.id&&t.revShareCopy?{type:"rscopy"}:"filelps"===t.id&&t.lpMoves&&t.lpMoves.length?{type:"filelps",count:t.lpMoves.length}:t.auto?null:{type:"toggle-manual",label:t.done?"undo":"done"}:null}function ae(t){return(t&&t.lpMoves||[]).filter(function(t){return!!(t&&t.itemId&&t.toGroup)})}function ie(t){return(t||[]).map(function(t){return"• "+(t.name||t.itemId)+" → "+(t.toGroupLabel||t.toGroup)}).join("\n")}function oe(t){return"string"!=typeof t||""===t||isNaN(Number(t))?t:Number(t)}function le(t,e){return e?"Filed "+t+" · "+e+" failed":"Filed "+t+" into their groups"}function se(t,e){return t&&(t.title||t.label)||"Step "+(e+1)}Ht=gt,Ot=t.bind(n);function Gt(t){var e=s(0);i(function(){var n=t.map(function(t){return t.subscribe(function(){e[1](function(t){return t+1})})});return function(){n.forEach(function(t){try{t()}catch(t){}})}},[])}Vt=String.fromCharCode(8212),$="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};var ue={PENDING:"pending",RUNNING:"working",OK:"live",STALE:"cached",FAILED:"failed",ANOMALY:"check"};function ce(t){var e=t.lbl,n=t.state||"live",r=t.health||$.OK,a=ue[r]||"",i=t.aria||e+": "+a;if("loading"===n)return Ot`
        <div class="companion__chip" data-health=${$.PENDING}
             tabindex="0" role="group" aria-label=${e+": loading"} title=${t.title||null}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${e}</span>
            <span class="companion__val is-loading" aria-busy="true">${Vt}</span>
            <span class="companion__sub">loading</span>
          </span>
        </div>`;if("error"===n)return Ot`
        <div class="companion__chip" data-health=${$.FAILED}
             tabindex="0" role="group" aria-label=${e+": failed, activate to retry"} title=${t.title||"fetch failed, click to retry"}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${e}</span>
            <span class="companion__val companion__val--err"
                  role="button" tabindex="0"
                  onClick=${t.onRetry}
                  onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key||!t.onRetry||(e.preventDefault(),t.onRetry(e))}}
            >retry</span>
            <span class="companion__sub">failed</span>
          </span>
        </div>`;var o="companion__val"+(t.tone?" companion__val--"+t.tone:"");if(t.onOpen){function l(e){e&&e.preventDefault(),t.onOpen(e)}return Ot`
        <div class="companion__chip companion__chip--open" data-health=${r}
             role="button" tabindex="0" aria-label=${i+", activate to open"}
             title=${t.title||null}
             onClick=${l}
             onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||l(t)}}>
          <span class="companion__mark" aria-hidden="true"></span>
          <span class="companion__body">
            <span class="companion__lbl">${e}</span>
            <span class=${o}>${null!=t.value?t.value:Vt}</span>
            <span class="companion__sub">${null!=t.sub?t.sub:a}</span>
          </span>
        </div>`}return Ot`
      <div class="companion__chip" data-health=${r}
           tabindex="0" role="group" aria-label=${i} title=${t.title||null}>
        <span class="companion__mark" aria-hidden="true"></span>
        <span class="companion__body">
          <span class="companion__lbl">${e}</span>
          <span class=${o}>${null!=t.value?t.value:Vt}</span>
          <span class="companion__sub">${null!=t.sub?t.sub:a}</span>
        </span>
      </div>`}function de(t){if(!t||!Array.isArray(t.steps))return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Close: loading"};var e=t.steps,n="number"==typeof t.completedCount?t.completedCount:e.filter(function(t){return t&&t.done}).length,r="number"==typeof t.totalCount?t.totalCount:e.length,a=r>0&&n>=r;return{state:"live",health:$.OK,value:n+" / "+r,sub:a?"complete":"in progress",title:"Close checklist: "+n+" of "+r+" steps done",aria:"Close progress: "+n+" of "+r+" steps, "+(a?"complete":"in progress")}}function fe(t){var e=t&&t.closed||null;if(!t||!e||null==e.numeralDisplay)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"NAV: loading"};var n=t.recon||null,r=e.monthLabel||e.label||"",a=$.OK,i=r||"closed",o="Closed NAV "+e.numeralDisplay+(r?" . "+r:"");return n&&(n.passed?(a=$.OK,i=(r?r+" . ":"")+"recon ok",o+=" . reconciliation passed"+(n.deltaPctDisplay?" ("+n.deltaPctDisplay+")":"")):(a=$.ANOMALY,i="recon fail"+(n.deltaPctDisplay?" "+n.deltaPctDisplay:""),o=(n.monthLabel?n.monthLabel+" . ":"")+"NAV reconciliation FAILED"+(n.deltaPctDisplay?" . delta "+n.deltaPctDisplay:""))),{state:"live",health:a,value:e.numeralDisplay,sub:i,title:o,aria:"NAV "+e.numeralDisplay+", "+(ue[a]||"")}}function pe(t){var e=t&&t.yield||null,n=e&&null!=e.netFlowsDisplay?String(e.netFlowsDisplay):null;if(null==n&&e&&null!=e.netFlowsValue&&isFinite(Number(e.netFlowsValue))){var r=Number(e.netFlowsValue),a=r<0?String.fromCharCode(8722):"+";n=a+"₪"+(Math.abs(r)/1e6).toFixed(1)+"M"}if(!e||null==n)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Yield: pending"};var i=!0===e.netFlowsConfirmed;return{state:"live",health:i?$.OK:$.RUNNING,value:n,sub:i?"net flows":"provisional",title:"Month net flows "+n+(i?" (confirmed)":" (provisional, awaiting breakdown)"),aria:"Yield net flows "+n+", "+(i?"confirmed":"provisional")}}function he(t){if(!t||!Array.isArray(t.rows))return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"Transfers: loading"};for(var e=t.monthLabel||"",n=pi(t.rows,e),r=Va(),a=0,i=0;i<n.length;i++)et(n[i],Wa(n[i],r)).wired||a++;return{state:"live",health:$.OK,value:String(a),sub:0===a?"clear":"open",title:a+" transfer"+(1===a?"":"s")+" still open"+(e?" . "+e:""),aria:a+" open transfer"+(1===a?"":"s")}}function ve(t,e){if("error"===e)return{state:"error",health:$.FAILED,aria:"YTD: fetch failed",title:"portfolio fetch failed, click to retry"};var n=t&&t.headline||null;if(!n||null==n.ytd_pct)return{state:"loading",health:$.PENDING,value:null,sub:"loading",aria:"YTD: loading"};var r=n.ytd_pct,a=t&&(t.as_of_iso||t.as_of)||"",i="FIBI portfolio basis"+(a?" · as of "+a:"");return{state:"live",health:$.OK,value:Ht(r),sub:"year to date",tone:r>=0?"up":"down",title:i,aria:"Year to date return "+Ht(r)+" · "+i}}function me(){Gt([rt.playbook,rt.navWidget,rt.transfers,rt.portfolio,rt.health]);var t=rt.playbook.value,e=rt.navWidget.value,n=rt.transfers.value,r=rt.portfolio.value,a=rt.health.value||{},i=a.portfolio||(r?"live":"loading");function o(){try{dt(Et,Ct)}catch(t){Ct("portfolio:retry",t)}}var l=de(t),s=fe(e),u=pe(e),c=he(n),d=ve(r,i);return Ot`
      <section class="companion" aria-label="Live map companion . firm status in words">
        <${ce} lbl="CLOSE" state=${l.state} health=${l.health}
                 value=${l.value} sub=${l.sub} title=${l.title} aria=${l.aria}
                 onOpen=${"live"===l.state?function(){at("close")}:null} />
        <${ce} lbl="NAV" state=${s.state} health=${s.health}
                 value=${s.value} sub=${s.sub} title=${s.title} aria=${s.aria} />
        <${ce} lbl="YIELD" state=${u.state} health=${u.health}
                 value=${u.value} sub=${u.sub} title=${u.title} aria=${u.aria}
                 onOpen=${function(){at("projecting")}} />
        <${ce} lbl="TRANSFERS" state=${c.state} health=${c.health}
                 value=${c.value} sub=${c.sub} title=${c.title} aria=${c.aria}
                 onOpen=${"live"===c.state?function(){at("transfers")}:null} />
        <${ce} lbl="YTD" state=${d.state} health=${d.health}
                 value=${d.value} sub=${d.sub} tone=${d.tone} title=${d.title}
                 aria=${d.aria} onRetry=${o}
                 onOpen=${"live"===d.state?function(){at("portfolio")}:null} />
      </section>
    `}Ot=t.bind(n);var ge={};function _e(t){if(null!=ge[t])return ge[t];var e=1e3;try{if("undefined"!=typeof document){var n=document.getElementById(t);n&&"function"==typeof n.getTotalLength&&(e=n.getTotalLength())}}catch(t){}return ge[t]=e,e}function ye(t){var e=175,n=1080,r=(t-e)/(n-e);return r<0?0:r>1?1:r}function be(t){t=t||{};var e=[],n={sequence:[],recon:void 0,frac:0,fillFrac:0,stalledAt:null,phase:"idle"};function r(){for(var t=0;t<e.length;t++)try{e[t](a())}catch(t){}}function a(){return{frac:n.frac,fillFrac:n.fillFrac,stalledAt:n.stalledAt,phase:n.phase,recon:n.recon}}function i(){if(null===n.recon)return n.phase="reconciling",n.stalledAt=l(),n.frac=s(n.stalledAt),void(n.fillFrac=n.frac);if(n.recon&&!1===n.recon.passed)return n.phase="recon-fail",n.stalledAt=l(),n.frac=s(n.stalledAt),void(n.fillFrac=n.frac);for(var t=n.sequence,e=0,r=null,a=0;a<t.length;a++){var i=t[a],u=s(i.stationId);if("FAILED"===i.health){r=i.stationId;break}if("OK"===i.health||"SKIPPED"===i.health)e=u;else if("RUNNING"===i.health||"PENDING"===i.health)return r=i.stationId,e=Math.max(e,o(t,a,e)),n.frac=u,n.fillFrac=e,n.stalledAt=r,void(n.phase="travelling")}if(r)return n.stalledAt=r,n.frac=s(r),n.fillFrac=e,void(n.phase="travelling");var c=t.length>0&&t.every(function(t){return"OK"===t.health||"SKIPPED"===t.health});n.stalledAt=null,n.fillFrac=e,n.frac=c?1:e,n.phase=c?"done":"idle"}function o(t,e,n){for(var r=e-1;r>=0;r--)if("OK"===t[r].health||"SKIPPED"===t[r].health)return s(t[r].stationId);return n}function l(){return n.sequence.length?n.sequence[0].stationId:null}function s(t){var e=$e(t);return e?ye(e.x):0}return{load:function(t){return n.sequence=t||[],i(),r(),this},gate:function(t){return n.recon=t,i(),r(),this},position:a,onStep:function(t){e.push(t);try{t(a())}catch(t){}return function(){var n=e.indexOf(t);n>=0&&e.splice(n,1)}},reset:function(){return n.sequence=[],n.recon=void 0,n.frac=0,n.fillFrac=0,n.stalledAt=null,n.phase="idle",r(),this},_state:n}}function $e(t){for(var e=0;e<yn.length;e++)if(yn[e].id===t)return yn[e];return null}function we(t){var e=t.pos||{frac:0,fillFrac:0,phase:"idle"},n=mn.filter(function(t){return t.flow&&"nav"===t.key})[0]||mn[0],r=_e(n.id),a=r*(1-(e.fillFrac||0)),i=ke(n.id,e.frac),o="flow-packet"+("reconciling"===e.phase?" is-reconciling":"")+("recon-fail"===e.phase?" is-recon-fail":"")+("done"===e.phase?" is-done":"")+(e.stalledAt?" is-stalled":"");return Ot`
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
        ${"idle"!==e.phase?Ot`<circle class=${o} r="7" cx=${i.x} cy=${i.y} fill=${n.color} />`:null}
      </g>
    `}function ke(t,e){e=e<0?0:e>1?1:e;try{if("undefined"!=typeof document){var n=document.getElementById(t);if(n&&"function"==typeof n.getTotalLength){var r=n.getPointAtLength(n.getTotalLength()*e);return{x:r.x,y:r.y}}}}catch(t){}return{x:175+905*e,y:150}}Ot=t.bind(n);function xe(t){var e=t.line;return Ot`
      <path
        id=${e.id}
        class=${"rail rail--"+e.key}
        d=${e.d}
        fill="none"
        stroke=${e.color}
        stroke-width="6"
        stroke-linecap="butt"
        stroke-linejoin="round"
      />
    `}function Se(){return Ot`
      <g class="rail-lines">
        ${null}
        ${_n.map(function(t){return Ot`<text class="region-label" x=${t.x} y=${t.y}>${t.text}</text>`})}

        ${null}
        ${mn.map(function(t){return Ot`<${xe} line=${t} key=${t.id} />`})}

        ${null}
        ${gn.map(function(t,e){return Ot`<line
            key=${"tick-"+e}
            x1=${t.x1} y1=${t.y1} x2=${t.x2} y2=${t.y2}
            stroke=${t.color} stroke-width="6" />`})}
      </g>
    `}Ot=t.bind(n);var Ae="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function Ce(t){return Ae&&"function"==typeof Ae.optimisticWrite?Ae.optimisticWrite(t):Ne(t)}function Ne(t){t=t||{};try{t.applyLocal&&t.applyLocal()}catch(t){}var e=!1;function n(){if(!e){e=!0;try{t.onConfirm&&t.onConfirm()}catch(t){}}}function r(n){if(!e){e=!0;try{t.onRevert&&t.onRevert(n)}catch(t){}}}try{t.rpc(function(t){t&&t.ok?n():r(new Error(t&&t.message||"server rejected write"))},function(t){r(t)})}catch(t){r(t)}return{confirm:n,revert:r,isSettled:function(){return e}}}var De=2500,Ee=30,Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Oe="https://script.google.com/macros/s/AKfycbxSu6wp_NHktucOde1kS-rCVeV1IjkMnJxpycHffy62YU7lb4o-A349gF6_wwSiXLywfg/exec?api=consoleSummary",Te=6e4,Le=18e4,Ie=6e4,Re={fetchedAt:0},Fe={fetchedAt:0,attention:0},Me={fetchedAt:0,key:null};function je(){var t=rt.navWidget.value,e=rt.playbook.value,n=(rt.health.value||{}).portfolio||(rt.portfolio.value?"live":"loading"),r=rt.fanOut.value;function a(t){rt.fanOut.value=t}var o=rt.silentSignals.value;function u(t){rt.silentSignals.value=t}var c=rt.navRecon.value,d=rt.failNonce?rt.failNonce.value:0,f="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,p=s({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),h=p[0],v=p[1],m=s(!1),g=m[0],_=m[1],y=s(null),b=y[0],$=y[1],w=s(!1),k=w[0],x=w[1],S=s(!1),A=S[0],C=S[1],N=s(!1),D=N[0],E=N[1],P=s(!1),O=P[0],T=P[1],L=l({timer:null,polls:0,ym:null,gen:0}),I=l(null),R=l(!0);function F(){Et&&"function"==typeof Et.onboardingSilentSignals&&Et.onboardingSilentSignals({}).then(function(t){Re.fetchedAt=Date.now(),C(!1);var e=t&&Array.isArray(t.rows)?t.rows:Array.isArray(t)?t:t&&t.signals||[],n=e.map(function(t){return t=t||{},t.kind&&!t.signalClass?t:{kind:t.signalClass,key:t.key,label:(t.lpNameHe?t.lpNameHe+" · ":"")+(t.signalLabelHe||""),gmailUrl:t.gmailUrl||null,severity:t.severity||"medium",ageRelHe:t.ageRelHe||null,evidence:t.evidence||null}});if(u(n),t&&t.banner){var r="undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null;r&&"function"==typeof r.raise&&r.raise("onboarding:"+(t.banner.signalClass||"banner"),new Error(t.banner.text||t.banner.signalLabelHe||"onboarding banner"),{severity:"banner"})}}).catch(function(t){C(!0),Ct("map:silentSignals",t)})}i(function(){return R.current=!0,function(){R.current=!1}},[]),i(function(){if("undefined"!=typeof document){var t=document.createElement("input");return t.type="file",t.id="nav-file-input",t.accept=".xlsx,.xls",t.style.display="none",t.addEventListener("change",function(){var e=t.files&&t.files[0];if(e){var n=new Date,r=new Date(n.getFullYear(),n.getMonth()-1,1);W(r.getFullYear(),r.getMonth()+1,e),t.value=""}}),document.body.appendChild(t),I.current=t,function(){try{document.body.removeChild(t)}catch(t){}}}},[]),i(function(){var t=Re.fetchedAt>0&&Date.now()-Re.fetchedAt<Te;t||F()},[]);var M=s(0),j=M[0],K=M[1];function U(t,e){return t&&e?Et.navReconciliation(t,e).then(function(t){return rt.navRecon.value=t||null,E(!1),t}).catch(function(t){return E(!0),Ct("map:navRecon",t),null}):Promise.resolve(null)}function B(){L.current.timer&&(clearTimeout(L.current.timer),L.current.timer=null)}function H(t,e){if(R.current){var n=L.current,r=n.gen;n.ym={year:t,month:e},Et.fanOutStatus(t,e).then(function(i){if(n.gen===r&&R.current){a(i||null);var o=!(!i||!i._stale);if(_(o),$(o&&i&&i._lastKnownAt||null),n.polls++,o&&n.polls<=Ee)n.timer=setTimeout(function(){H(t,e)},De);else{var l=!o&&(!(!i||!i.pending)||(i&&i.consumers||[]).some(function(t){return"running"===t.status||"pending"===t.status||t.isPending}));!l||n.polls>Ee?(B(),x(l&&n.polls>Ee),o||U(t,e)):n.timer=setTimeout(function(){H(t,e)},De)}}}).catch(function(t){n.gen===r&&R.current&&(Ct("map:fanOutStatus",t),B(),_(!0),$(null),x(!1))})}}function G(){_(!1),x(!1);var e=L.current.ym||hn(t);e&&V(e.year,e.month)}function V(t,e){R.current&&(B(),L.current.polls=0,L.current.gen+=1,H(t,e))}function W(t,e,n){Pe[e-1];v({uploadPhase:"reading",readingPct:0,uploading:!1,failReason:null});var r=new FileReader;r.onprogress=function(t){t.lengthComputable&&v({uploadPhase:"reading",readingPct:t.loaded/t.total*100,uploading:!1,failReason:null})},r.onerror=function(){var t=r.error||new Error("file read failed");v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:t&&t.message||"file read failed"}),Ct("map:upload:read",t)},r.onload=function(){try{v({uploadPhase:"uploading",readingPct:null,uploading:!0,failReason:null});var a=String(r.result).split(",").pop();Et.manualUpload(t,e,n.name,a).then(function(n){v({uploadPhase:"reconciling",readingPct:null,uploading:!1,failReason:null}),V(t,e);var r=st();Et.bootstrap({lite:!1}).then(function(n){n&&ut(n,r),v({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),U(t,e)}).catch(function(t){v({uploadPhase:null,readingPct:null,uploading:!1,failReason:null}),Ct("map:upload:reboot",t)})}).catch(function(t){v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:t&&t.message||"upload failed"}),Ct("map:manualUpload",t)})}catch(t){v({uploadPhase:"failed",readingPct:null,uploading:!1,failReason:t&&t.message||"upload failed"}),Ct("map:upload:run",t)}},r.readAsDataURL(n)}function Y(){I.current&&I.current.click()}function q(t,e){Et.triggerFanOut(t,e).then(function(){V(t,e)}).catch(function(t){Ct("map:triggerFanOut",t),Pt("Retry failed, try again","error")})}function J(t){if(t){var e=o.filter(function(e){return e.key===t})[0]||null,n=o;Ce({key:"map:dismissSignal:"+t,applyLocal:function(){u(n.filter(function(e){return e.key!==t}))},rpc:function(e,n){Et.dismissSilentSignal(t).then(e).catch(n)},onRevert:function(n){var r=rt.silentSignals.value;e&&!r.some(function(e){return e.key===t})&&u(r.concat([e])),Ct("map:dismissSignal",n),Pt("Dismiss failed, alarm restored","error")}})}}function X(){var e=rt.navRecon.value;if(e&&e.monthKey){var n=/^(\d{4})-(\d{1,2})/.exec(e.monthKey);if(n)return{year:parseInt(n[1],10),month:parseInt(n[2],10)}}return L.current.ym||hn(t)}function z(t){var e=X();if(!e||!t){var n=new Error(t?"no close month resolved":"no sha256 on the reconciliation payload");return Ct("map:approveNavClose",n),Promise.resolve({ok:!1,error:n.message})}return Et.approveNavClose(e.year,e.month,t).then(function(t){return t&&!1===t.ok?(Ct("map:approveNavClose",new Error(t.error||"approve rejected")),t):(U(e.year,e.month),V(e.year,e.month),t||{ok:!0})}).catch(function(t){return Ct("map:approveNavClose",t),{ok:!1,error:t&&t.message||String(t)}})}function Q(){var t=X();return t?U(t.year,t.month):Promise.resolve(null)}function Z(t){at(t)}return i(function(){if("function"==typeof fetch){Fe.fetchedAt>0&&K(Fe.attention);var t=Fe.fetchedAt>0&&Date.now()-Fe.fetchedAt<Le;if(!t){var e=!1,n=null,r=setTimeout(function(){try{var t="function"==typeof AbortController?new AbortController:null;t&&(n=setTimeout(function(){t.abort()},2e4)),fetch(Oe,t?{signal:t.signal}:void 0).then(function(t){return t.json()}).then(function(t){if(n&&(clearTimeout(n),n=null),!e&&t&&t.ok){var r=Number(t.attention)||0;K(r),T(!1),Fe={fetchedAt:Date.now(),attention:r}}}).catch(function(t){n&&(clearTimeout(n),n=null),e||(T(!0),Ct("map:consoleSummary",t))})}catch(t){e||(T(!0),Ct("map:consoleSummary",t))}},3e3);return function(){e=!0,clearTimeout(r),n&&clearTimeout(n)}}}},[]),i(function(){var e=hn(t);if(e){var n=e.year+"-"+e.month,r=Me.key===n&&Me.fetchedAt>0&&Date.now()-Me.fetchedAt<Ie&&!!rt.navRecon.value;r||U(e.year,e.month).then(function(t){t&&(Me={key:n,fetchedAt:Date.now()})})}},[t&&t.closed&&t.closed.monthLabel]),i(function(){var e=hn(t);return e&&V(e.year,e.month),B},[t&&t.closed&&t.closed.monthLabel]),Ot`
      <div class="map-home">
        <${ze}
          navWidget=${t}
          fanOut=${r}
          navRecon=${c}
          silentSignals=${o}
          playbook=${e}
          portfolioHealth=${n}
          consoleAttention=${j}
          failBus=${f}
          failNonce=${d}
          uploadCtx=${h}
          onUpload=${Y}
          onRetryConsumer=${q}
          onDismissSignal=${J}
          onApprove=${z}
          onRerun=${Q}
          onOpenView=${Z} />
        ${g?Ot`<div class="map-stale" role="alert">fan-out status${b?" stale · last known "+new Date(b).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):" stale · last poll failed"} ·${" "}
              <button type="button" class="map-stale__retry" onClick=${G}>retry ↻</button>
            </div>`:null}
        ${k&&!g?Ot`<div class="map-stale map-stale--capped" role="status">checked out · some consumers still pending ·${" "}
              <button type="button" class="map-stale__retry" onClick=${G}>keep watching ↻</button>
            </div>`:null}
        ${A?Ot`<div class="map-stale" role="alert">alarms unavailable · onboarding signal feed failed ·${" "}
              <button type="button" class="map-stale__retry" onClick=${F}>retry ↻</button>
            </div>`:null}
        ${D?Ot`<div class="map-stale" role="alert">nav reconciliation check unavailable</div>`:null}
        ${O?Ot`<div class="map-stale" role="alert">console attention count unavailable</div>`:null}
      </div>
    `}Ot=t.bind(n);var Ke=1180,Ue=410;function Be(t){return"left:"+t.x/Ke*100+"%;top:"+t.y/Ue*100+"%;"}function He(t){var e=t.station,n=bn[e.line]||"--blue";if(e.isHub)return Ot`
        <span class="st-mark st-mark--hub" aria-hidden="true">
          <span class="st-hub__stripe st-hub__stripe--top"></span>
          <span class="st-hub__stripe st-hub__stripe--mid"></span>
          <span class="st-hub__stripe st-hub__stripe--bot"></span>
          <span class="st-hub__core"></span>
        </span>`;if(e.lines&&e.lines.length>=2&&e.capTop)return Ot`
        <span class="st-mark st-mark--cap" aria-hidden="true"
              style=${"--cap-top:var("+e.capTop+");--cap-bottom:var("+e.capBottom+");"}></span>`;var r="st-mark st-mark--dot"+("consumer"===e.role?" st-mark--consumer":"");return Ot`<span class=${r} aria-hidden="true" style=${"--mark-color:var("+n+");"}></span>`}function Ge(t){var e=t.station,n=t.info||{},r=an(n.health),a="station station--"+(e.role||"through")+" station--"+(e.labelSide||"above")+(t.active?" is-active":"");function i(n){n&&n.preventDefault(),t.onActivate&&t.onActivate(e)}function o(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||i(t)}var l=e.label+(e.tip?" · "+e.tip:"")+(n.health?" · "+String(n.health).toLowerCase():"")+(n.badge?" · "+n.badge:"")+("unknown"===n.dispatch?" · send status unknown":n.dispatch?" · "+(n.dispatch.sent?"dispatched":"not dispatched"):"");return Ot`
      <div
        class=${a}
        style=${Be(e)}
        data-health=${r}
        data-station=${e.id}
        role="button"
        tabindex="0"
        aria-label=${l}
        title=${l}
        onClick=${i}
        onKeyDown=${o}
      >
        <span class="st-hit" aria-hidden="true"></span>
        <${He} station=${e} />
        <span class="st-ring" aria-hidden="true"></span>
        ${n.badge?Ot`<span class="st-badge" aria-hidden="true">${n.badge}</span>`:null}
        <span class="st-label">${e.label}</span>
        ${"unknown"===n.dispatch?Ot`<span class="st-chip st-chip--unknown" aria-hidden="true">send status unknown</span>`:n.dispatch?Ot`<span class=${"st-chip "+(n.dispatch.sent?"st-chip--sent":"st-chip--unsent")}
                         aria-hidden="true">${n.dispatch.sent?"sent":"not sent"}</span>`:null}
      </div>
    `}function Ve(t){var e=t.station,n=t.info||{},r=n.health||"ready",a=t.readingPct,i="failed"===r&&t.failReason?String(t.failReason):null;function o(n){n&&n.preventDefault(),"reading"!==r&&"uploading"!==r&&"reconciling"!==r&&t.onActivate&&t.onActivate(e)}function l(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||o(t)}var s="Upload NAV";return"reading"===r&&null!=a?s="↑ "+Math.round(a)+"%":"uploading"===r?s="Uploading…":"reconciling"===r?s="Reconciling…":"recon-pass"===r?s="NAV in ✓":"recon-fail"===r?s="Recon failed":"failed"===r&&(s="Upload failed · retry"),Ot`
      <div
        class=${"station station--upload station--right"}
        style=${Be(e)}
        data-health=${r}
        data-station=${e.id}
        role="button"
        tabindex="0"
        aria-label=${"Upload audited NAV (xlsx to cache to pipeline) · "+r+(i?" · "+i:"")}
        title=${e.tip}
        onClick=${o}
        onKeyDown=${l}
      >
        <span class="st-hit" aria-hidden="true"></span>
        <span class="up-terminus" aria-hidden="true">
          <span class="up-arrow">↑</span>
        </span>
        <span class="st-ring st-ring--upload" aria-hidden="true"></span>
        <span class="st-label st-label--upload">${s}</span>
        ${i?Ot`<span class="st-label__reason">${i}</span>`:null}
      </div>
    `}Ot=t.bind(n);function We(t){return t.href?Ot`<a class="st-pop__act" href=${t.href} target="_blank" rel="noopener"
                     onClick=${t.onClick}>${t.label}</a>`:Ot`<button type="button" class=${"st-pop__act"+(t.tone?" st-pop__act--"+t.tone:"")}
                    onClick=${t.onClick}>${t.label}</button>`}function Ye(t){var e=t.station||{},n=t.info||{},r=t.recon||null,a=t.signals||[],o=l(null),u=l(t.onClose);u.current=t.onClose,i(function(){if("undefined"!=typeof document){var t=document.activeElement,e=setTimeout(function(){try{var t=n();t.length&&t[0].focus()}catch(t){}},0);return document.addEventListener("keydown",r),document.addEventListener("mousedown",a),function(){clearTimeout(e),document.removeEventListener("keydown",r),document.removeEventListener("mousedown",a);try{t&&"function"==typeof t.focus&&t.focus()}catch(t){}}}function n(){var t=o.current;return t?Array.prototype.slice.call(t.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')):[]}function r(t){if("Escape"!==t.key){if("Tab"===t.key){var e=n();if(!e.length)return;var r=e[0],a=e[e.length-1],i=document.activeElement;t.shiftKey&&i===r?(t.preventDefault(),a.focus()):t.shiftKey||i!==a?o.current&&!o.current.contains(i)&&(t.preventDefault(),r.focus()):(t.preventDefault(),r.focus())}}else u.current&&u.current()}function a(t){var e=t.target;e&&e.closest&&e.closest(".station-layer")||o.current&&!o.current.contains(e)&&u.current&&u.current()}},[]);var c=n.health?String(n.health).toLowerCase():"idle",d=s(null),f=d[0],p=d[1],h=s(null),v=h[0],m=h[1];function g(){!f&&t.onApprove&&r&&r.sha256&&(p("approve"),m(null),Promise.resolve(t.onApprove(r.sha256)).then(function(t){p(null),t&&!1===t.ok&&m(t.error||"approve rejected")}).catch(function(t){p(null),m(t&&t.message||String(t))}))}function _(){!f&&t.onRerun&&(p("rerun"),m(null),Promise.resolve(t.onRerun()).then(function(){p(null)}).catch(function(t){p(null),m(t&&t.message||String(t))}))}if(null!=r&&"recon"===t.kind){var y=r.anomalies&&r.anomalies.length?r.anomalies:null,b=0,$=0;return(r.anomalies||[]).forEach(function(t){"hard"===t.severity?b++:"soft"===t.severity&&$++}),Ot`
        <div ref=${o} class="st-pop st-pop--recon" role="dialog" aria-modal="true" aria-label=${"Reconciliation "+e.label} data-health=${c}>
          <div class="st-pop__head">
            <span class="st-pop__title">Reconciliation</span>
            <button type="button" class="st-pop__x" aria-label="Close" onClick=${t.onClose}>×</button>
          </div>
          <div class=${"st-pop__recon "+(r.passed?"is-ok":"is-fail")} role=${r.passed?null:"alert"}>
            ${r.passed?"Passed":"FAILED"}
            ${r.deltaPctDisplay?Ot`<span class="st-pop__delta"> · Δ ${r.deltaPctDisplay}</span>`:null}
            ${r.monthLabel?Ot`<span class="st-pop__mo"> · ${r.monthLabel}</span>`:null}
          </div>
          ${y?Ot`<p class="st-pop__counts">${y.length} item${1===y.length?"":"s"}${b?" · "+b+" hard":""}${$?" · "+$+" soft":""}</p>`:null}
          ${y?Ot`<ul class="st-pop__anoms">
                ${y.map(function(t,e){return Ot`<li key=${e} class="st-pop__anom">
                    <span class="st-pop__anom-lp">${t.lp||t.kind||"item"}
                      ${t.severity?Ot`<span class=${"st-pop__anom-sev st-pop__anom-sev--"+t.severity}>${t.severity}</span>`:null}
                    </span>
                    <span class="st-pop__anom-ex">${t.explanation||""}</span>
                    ${t.action?Ot`<span class="st-pop__anom-act">${t.action}</span>`:null}
                  </li>`})}
              </ul>`:r.passed?null:Ot`<p class="st-pop__note">Fan-out is gated until the anomaly is resolved.</p>`}
          ${r.error?Ot`<p class="st-pop__reason is-fail">${r.error}</p>`:null}
          ${v?Ot`<p class="st-pop__reason is-fail" role="alert">${v}</p>`:null}
          ${r.approvable&&r.sha256&&t.onApprove||t.onRerun?Ot`<div class="st-pop__acts st-pop__acts--recon">
                ${r.approvable&&r.sha256&&t.onApprove?Ot`<button type="button" class="st-pop__act st-pop__act--retry"
                            disabled=${!!f} onClick=${g}>${"approve"===f?"Approving…":"Approve and release"}</button>`:null}
                ${t.onRerun?Ot`<button type="button" class="st-pop__act st-pop__act--ghost"
                            disabled=${!!f} onClick=${_}>${"rerun"===f?"Re-running…":"Re-run"}</button>`:null}
              </div>`:null}
        </div>
      `}return a&&a.length?Ot`
        <div ref=${o} class="st-pop st-pop--alarm" role="dialog" aria-modal="true" aria-label=${"Attention · "+e.label} data-health=${c}>
          <div class="st-pop__head">
            <span class="st-pop__title">${e.label} · ${a.length} item${1===a.length?"":"s"}</span>
            <button type="button" class="st-pop__x" aria-label="Close" onClick=${t.onClose}>×</button>
          </div>
          <ul class="st-pop__sigs">
            ${a.map(function(e,n){return Ot`<li key=${e.key||n} class="st-pop__sig">
                <span class="st-pop__sig-txt">${e.label||e.kind||"signal"}
                  ${e.ageRelHe?Ot`<span class="st-pop__sig-age">${" · "+e.ageRelHe}</span>`:null}
                </span>
                ${e.gmailUrl?Ot`<a class="st-pop__act" href=${e.gmailUrl} target="_blank" rel="noopener">Open</a>`:null}
                <button type="button" class="st-pop__act st-pop__act--ghost"
                        onClick=${function(){t.onDismiss&&t.onDismiss(e.key)}}>Dismiss</button>
              </li>`})}
          </ul>
        </div>
      `:Ot`
      <div ref=${o} class="st-pop" role="dialog" aria-modal="true" aria-label=${e.label+" status"} data-health=${c}>
        <div class="st-pop__head">
          <span class="st-pop__title">${e.label}</span>
          <button type="button" class="st-pop__x" aria-label="Close" onClick=${t.onClose}>×</button>
        </div>
        <p class="st-pop__tip">${e.tip||""}</p>
        ${n.reason?Ot`<p class=${"st-pop__reason"+("failed"===c?" is-fail":"")}>${n.reason}</p>`:null}
        ${n.dispatch?Ot`<p class="st-pop__dispatch">${n.dispatch.sent?"Dispatched · "+(n.dispatch.count||0)+" thread"+(1===n.dispatch.count?"":"s")+(n.dispatch.lastTs?" · "+Wt(n.dispatch.lastTs):""):"Not dispatched yet"}</p>`:null}
        <div class="st-pop__acts">
          ${n.retryable&&t.onRetry?Ot`<${We} label="Retry" tone="retry" onClick=${function(){t.onRetry()}} />`:null}
          ${n.openUrl?Ot`<${We} label="Open" href=${n.openUrl} onClick=${t.onClose} />`:null}
        </div>
      </div>
    `}function Wt(t){try{var e=new Date(t);if(!isNaN(e.getTime()))return e.toLocaleString()}catch(t){}return String(t)}Ot=t.bind(n);var qe=null;function Je(){var t=[{cls:"running",label:"running"},{cls:"ok",label:"done"},{cls:"failed",label:"failed"},{cls:"pending",label:"pending"},{cls:"anomaly",label:"attention"}];return Ot`
      <div class="map-key">
        ${mn.map(function(t){return Ot`<span key=${t.key}>
            <span class="map-key__sw" style=${"background:"+t.color+";"}></span>${t.label}
          </span>`})}
        <span class="map-key__sep" aria-hidden="true"></span>
        ${t.map(function(t){return Ot`<span key=${"h-"+t.cls} class="map-key__health">
            <span class=${"map-key__hsw map-key__hsw--"+t.cls}></span>${t.label}
          </span>`})}
      </div>
    `}function Xe(t){return Ot`
      <svg class="rails" viewBox="0 0 1180 410" role="img" aria-label="Firm operations map">
        <${Se} />
        <${we} pos=${t.flowPos} />
      </svg>
    `}function ze(t){t=t||{};var e=t.navWidget||null,n=t.fanOut||null,r=t.navRecon||null,a=t.silentSignals||[],i=t.playbook||null,l=t.portfolioHealth||null,u=t.consoleAttention||0,c=t.failBus||null,d=t.failNonce||0,f=t.uploadCtx||{},p=s(null),h=p[0],v=p[1],m=o(function(){return un({navWidget:e,fanOut:n,navRecon:r,silentSignals:a,playbook:i,portfolioHealth:l,consoleAttention:u,failBus:c,uploadCtx:f})},[e,n,r,a,i,l,u,c,d,f]),g=s(function(){return be()}),_=g[0],y=o(function(){var t=vn(m),n=e&&void 0!==e.recon?e.recon||(e.ingestRunning?null:void 0):void 0;if(r){var a=!(n&&!1===n.passed),i=!1!==r.reconciled||!0===r.approved;n={passed:i&&a}}return _.gate(n),_.load(t),_.position()},[m,e,r]),b=Qe("upload"),$=e&&e.recon,w=s(0),k=w[1],x=r?String(r.monthKey||"")+":"+String(r.sha256||""):"sumtie:"+String($&&$.monthLabel||""),S=(r&&!1===r.reconciled&&!0!==r.approved||$&&!1===$.passed)&&qe!==x;function A(e){if(e.isUpload)t.onUpload&&t.onUpload(e);else if(e.focusView&&t.onOpenView)t.onOpenView(e.focusView,e);else{var n=m[e.id]||{};n.health||!e.href||e.alarmKey?v(e.id===h?null:e.id):"undefined"!=typeof window&&window.open(e.href,"_blank","noopener")}}function C(){S&&null==h&&(qe=x,k(function(t){return t+1})),v(null)}var N=h?Qe(h):S?b:null,D=N?m[N.id]||{}:null,E=N?tn(N,a):[],P=N&&"upload"===N.id&&S,O=null;function T(){if(t.onRetryConsumer&&e&&e.closed){var r=en(n)||hn(e);r&&t.onRetryConsumer(r.year,r.month)}}function L(e){t.onDismissSignal&&t.onDismissSignal(e)}return P&&(O={passed:!($&&!1===$.passed||r&&!1===r.reconciled),deltaPctDisplay:$?$.deltaPctDisplay:null,monthLabel:$&&$.monthLabel||r&&r.monthKey||null},r&&(O.approvable=!!r.approvable,O.sha256=r.sha256||null,O.counts=r.counts||null,O.error=r.error||null,O.anomalies=(r.anomalies||[]).map(function(t){return{lp:t.name||null,kind:t.class||null,severity:t.severity||null,explanation:t.detail||"",action:t.suggestedAction||null}}))),Ot`
      <div class="map-wrap">
        <${Je} />
        <div class="map-scroll">
          <div class="map">
            <${Xe} flowPos=${y} />
            <div class="station-layer">
              ${yn.map(function(t){return t.isUpload?Ot`<${Ve}
                    key=${t.id}
                    station=${t}
                    info=${m[t.id]}
                    readingPct=${f.readingPct}
                    failReason=${f.failReason}
                    onActivate=${A} />`:Ot`<${Ge}
                  key=${t.id}
                  station=${t}
                  info=${m[t.id]}
                  active=${h===t.id}
                  onActivate=${A} />`})}
            </div>
          </div>
        </div>
        ${N&&(P||"upload"!==N.id)?Ot`<div class="st-pop-anchor" style=${Ze(N)}>
              <${Ye}
                station=${N}
                info=${D}
                recon=${P?O:null}
                kind=${P?"recon":null}
                signals=${E}
                onRetry=${T}
                onDismiss=${L}
                onApprove=${t.onApprove}
                onRerun=${t.onRerun}
                onClose=${C} />
            </div>`:null}
      </div>
    `}function Qe(t){for(var e=0;e<yn.length;e++)if(yn[e].id===t)return yn[e];return null}function Ze(t){return t?"left:"+t.x/1180*100+"%;top:"+t.y/410*100+"%;":""}function tn(t,e){return t&&t.alarmKey&&e?e.filter(function(e){var n=e.station||fn(e.kind);return n===t.alarmKey}):[]}function en(t){if(!t||!t.monthKey)return null;var e=/^(\d{4})-(\d{1,2})/.exec(t.monthKey);return e?{year:parseInt(e[1],10),month:parseInt(e[2],10)}:null}var nn="undefined"!=typeof window&&window.AtriumHealth&&window.AtriumHealth.HEALTH||{PENDING:"PENDING",RUNNING:"RUNNING",OK:"OK",STALE:"STALE",FAILED:"FAILED",ANOMALY:"ANOMALY"};function rn(t){switch(t){case"done":return nn.OK;case"running":return nn.RUNNING;case"failed":return nn.FAILED;case"skipped_seasonal":return"SKIPPED";case"pending":return nn.PENDING;default:return null}}function an(t){return t?String(t).toLowerCase():"idle"}function on(t){if(t=t||{},t.uploadPhase)return t.uploadPhase;var e=t.navWidget||null;return t.uploading?"uploading":null!=t.readingPct?"reading":e&&e.ingestRunning?"reconciling":ln(t.navRecon,e&&e.recon)}function ln(t,e){var n=!(!t||!1!==t.reconciled||!0===t.approved),r=!(!e||e.passed);if(n||r)return"recon-fail";var a=!(!t||!0!==t.reconciled),i=!(!e||!0!==e.passed);return a||i?"recon-pass":"ready"}var sn={close:function(t,e){var n=e.playbook;if(n&&Array.isArray(n.steps)&&n.steps.length){var r="number"==typeof n.completedCount?n.completedCount:n.steps.filter(function(t){return t&&t.done}).length,a="number"==typeof n.totalCount?n.totalCount:n.steps.length;t.health=dn(t.health,a>0&&r>=a?nn.OK:nn.RUNNING),t.reason||(t.reason="close "+r+" / "+a)}},portfolio:function(t,e){if(e.portfolioHealth){var n="error"===e.portfolioHealth?nn.FAILED:"loading"===e.portfolioHealth?nn.PENDING:nn.OK;t.health=dn(t.health,n),n===nn.FAILED&&(t.badge=t.badge||"!",t.retryable=!0,t.reason||(t.reason="portfolio fetch failed"))}},"operator-console":function(t,e,n){"number"==typeof e.consoleAttention&&e.consoleAttention>0&&(t.health=dn(t.health,nn.ANOMALY),t.badge=String(e.consoleAttention+n),t.reason=(t.reason?t.reason+" · ":"")+e.consoleAttention+" console attention item"+(1===e.consoleAttention?"":"s"))}};function un(t){t=t||{};var e=t.fanOut||null,n=t.silentSignals||[],r=t.failBus||null,a={};if(e&&e.consumers)for(var i=0;i<e.consumers.length;i++){var o=e.consumers[i];o&&o.key&&(a[o.key]=o)}for(var l={},s=0;s<n.length;s++){var u=n[s]||{},c=u.station||fn(u.kind)||"console";l[c]=(l[c]||0)+1}for(var d={},f=0;f<yn.length;f++){var p=yn[f],h=null,v=null,m=null,g=!1,_=p.href||null,y=null;if(p.isUpload){var b=t.uploadCtx||{},$={uploadPhase:b.uploadPhase,uploading:b.uploading,readingPct:b.readingPct,navWidget:t.navWidget||b.navWidget||null,navRecon:t.navRecon||null};h=on($),d[p.id]={health:h,badge:null,reason:null,retryable:!1,openUrl:null,isUpload:!0}}else{if(p.consumerKey&&a[p.consumerKey]){var w=a[p.consumerKey],k=rn(w.status);k&&(h=k,w.details&&(m=w.details),w.manualOpenUrl&&(_=w.manualOpenUrl),k===nn.FAILED&&(v="!",g=!0)),y=Object.prototype.hasOwnProperty.call(w,"dispatch")?null===w.dispatch?"unknown":w.dispatch:null}p.alarmKey&&l[p.alarmKey]&&(h=dn(h,nn.ANOMALY),v=String(l[p.alarmKey]),m||(m=l[p.alarmKey]+" attention item"+(1===l[p.alarmKey]?"":"s")));var x=sn[p.id];if(x){var S={health:h,badge:v,reason:m,retryable:g};x(S,t,l[p.alarmKey]||0),h=S.health,v=S.badge,m=S.reason,g=S.retryable}if(r&&"function"==typeof r.stationHealth){var A=r.stationHealth(p.id);A&&!A.resolved&&(h=dn(h,nn.FAILED),v=v||"!",g=!0,m||(m=A.message||"fetch failed"),A.retry&&(d[p.id+":__retry"]=A.retry))}d[p.id]={health:h,badge:v,reason:m,retryable:g,openUrl:_,dispatch:y,consumerKey:p.consumerKey||null}}}return d}var cn={OK:0,SKIPPED:0,PENDING:1,RUNNING:2,STALE:3,ANOMALY:4,FAILED:5};function dn(t,e){if(null==t)return e;if(null==e)return t;var n=null==cn[t]?-1:cn[t],r=null==cn[e]?-1:cn[e];return r>n?e:t}function fn(t){switch(t){case"sig_mismatch":case"bank_pushback":return"transfers";case"drive_proxy_request":case"easysend_error":return"easysend";case"bdo_ishur_unapproved":case"bdo_ooo_banner":return"console";default:return null}}var pn=["January","February","March","April","May","June","July","August","September","October","November","December"];function hn(t){var e=t&&t.closed;if(!e)return null;if(e.year&&e.month)return{year:e.year,month:e.month};if(e.monthLabel){var n=/^(\w+)\s+(\d{4})$/.exec(String(e.monthLabel).trim());if(n){var r=pn.indexOf(n[1]);if(r>=0)return{year:parseInt(n[2],10),month:r+1}}}return null}function vn(t){return t=t||{},$n.map(function(e){var n=t[e]&&t[e].health||null;return{stationId:e,health:n}})}var mn=[{id:"route-nav-main",key:"nav",color:"#1F5DB0",label:"NAV pipeline",flow:!0,d:"M 175,150 L 488,150 Q 500,150 508,158 L 562,212 Q 570,220 582,220 L 688,220 Q 700,220 708,212 L 762,158 Q 770,150 782,150 L 1080,150"},{id:"route-nav-867",key:"nav-867",color:"#1F5DB0",label:"NAV · 867 branch",flow:!0,d:"M 935,150 C 970,150 970,90 1000,90 L 1020,90"},{id:"route-daily",key:"daily",color:"#D4A227",label:"Daily ops",d:"M 175,250 L 1080,250"},{id:"route-lp",key:"lp",color:"#D85E4C",label:"LP onboarding",d:"M 175,300 L 300,300 Q 325,300 325,325 Q 325,350 350,350 L 1080,350"},{id:"route-cross",key:"cross",color:"#5C2C82",label:"Cross-cut",d:"M 475,150 L 755,350"},{id:"route-ext",key:"ext",color:"#5C7585",label:"External",d:"M 1060,150 L 1060,350"}],gn=[{x1:1080,y1:140,x2:1080,y2:160,color:"#1F5DB0"},{x1:1020,y1:80,x2:1020,y2:100,color:"#1F5DB0"},{x1:1080,y1:240,x2:1080,y2:260,color:"#D4A227"},{x1:1080,y1:340,x2:1080,y2:360,color:"#D85E4C"}],_n=[{text:"INVESTMENTS",x:335,y:115},{text:"OPERATIONS",x:345,y:395},{text:"PARTNERS",x:745,y:320}],yn=[{id:"upload",role:"upload",line:"nav",x:175,y:150,labelSide:"right",label:"Upload NAV",tip:"Upload audited NAV (xlsx to cache to pipeline)",isUpload:!0},{id:"factsheet",role:"consumer",line:"nav",x:235,y:150,labelSide:"above",label:"Fct",tip:"Fact sheet · monthly LP-facing",href:"https://docs.google.com/spreadsheets/d/1Z34Yq3rlfQSRKhsexRVnb42XPb88YeabSv7mcpgJ4qs/edit",consumerKey:"factsheet",flowOrder:1},{id:"fo-reports",role:"consumer",line:"nav",x:310,y:150,labelSide:"below",label:"Foa",tip:"FO carry · semi-annual H1/H2 distribution + payout docs",href:"https://docs.google.com/spreadsheets/d/13SDNCrSNP_lthyr4woacjl8HEsPXZlo4lyFimmSPed4/edit",consumerKey:"family-office",flowOrder:2},{id:"operator-console",role:"through",line:"nav",x:475,y:90,labelSide:"above",label:"Op",tip:"Operator Console · LP onboarding (Cayman + Israel)",href:"https://sign.legacyvpartners.com/console",alarmKey:"console"},{id:"easysend-agent",role:"interchange",line:"nav",x:475,y:150,labelSide:"above",label:"Es",tip:"EasySend agent · live process management (NAV ↔ Cross-cut)",href:"https://legacy-value-partners.easysend.app/global-agent",lines:["nav","cross"],capTop:"--blue",capBottom:"--plum",alarmKey:"easysend"},{id:"gafner",role:"consumer",line:"nav",x:820,y:150,labelSide:"below",label:"Gfn",tip:"Gafner statement",href:"https://docs.google.com/spreadsheets/d/198ZVw-4RPr-KWX-KwpccHV1ofzqqHdq7adqSGVwAkVQ/edit",consumerKey:"gafner-bound",flowOrder:3},{id:"fibi-ws",role:"through",line:"nav",x:895,y:150,labelSide:"above",label:"Ws",tip:"WS Signer · upload xlsm, code signs and dates",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbwYp1O7A_GpikCM-bbazwkPjPc4MtID5oV8S-c338iptQfCxUanSu6qSgqhczwitG7GfA/exec"},{id:"form-867",role:"through",line:"nav-867",x:1005,y:90,labelSide:"above",label:"867",tip:"Form 867 · annual withholding-tax generator",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbytfIVXYCmzqtAg0u33YVNue03vBq5ZGlYGGYnYtrWMsJZt-grhi0pXgVHWrGbyMi3z/exec"},{id:"transfer-tracker",role:"through",line:"daily",x:235,y:250,labelSide:"above",label:"Tf",tip:"Transfers · the money workshop (sign / wire / amounts)",href:"https://docs.google.com/spreadsheets/d/1BcFFah16W-sYUHqIt6JyUttMOIQgQ7OyGEPE2zHpy6c/edit",alarmKey:"transfers",focusView:"transfers"},{id:"invoice",role:"through",line:"daily",x:310,y:250,labelSide:"below",label:"Inv",tip:"Invoice Reviewer · AI-assisted invoice approval drafts",href:"https://script.google.com/a/macros/legacyvpartners.com/s/AKfycbxGsshd9Cc9TB7nl0WzMTWaBHiMBIE97UHoLWVQlT4K/exec",consumerKey:"invoice-processor"},{id:"close",role:"through",line:"daily",x:400,y:250,labelSide:"above",label:"Cls",tip:"Close · monthly close checklist (the filling vessel)",focusView:"close"},{id:"projecting",role:"through",line:"daily",x:470,y:250,labelSide:"above",label:"Prj",tip:"Projecting · Rough Yield / day-1 WhatsApp yield card",focusView:"projecting"},{id:"portfolio",role:"through",line:"daily",x:540,y:250,labelSide:"below",label:"Pf",tip:"Portfolio · positions, movers, NAV chart",focusView:"portfolio"},{id:"builder-hub",role:"hub",line:"daily",x:615,y:237,labelSide:"below",label:"Bld",tip:"EasySend Builder · MAJOR HUB · NAV ↔ Daily ↔ Cross-cut",href:"https://builder.easysend.io/app/customers/legacy-value-partners/agent-dashboard",lines:["nav","cross","daily"],isHub:!0},{id:"payslip",role:"consumer",line:"daily",x:850,y:250,labelSide:"above",label:"Pyl",tip:"Payslip · monthly payslip parser",href:"https://docs.google.com/spreadsheets/d/1QhfGYFxKAnJHHSkBzI2N1aMyDi94fqCJ3PvZ3jxl8xA/edit",consumerKey:"salary"},{id:"monday",role:"interchange",line:"ext",x:1060,y:150,labelSide:"right",label:"Mon",tip:"Monday · People board (investor profiles, qualification, files)",href:"https://legacyvpartners.monday.com/boards/1606766164",lines:["nav","ext"],capTop:"--blue",capBottom:"--slate"},{id:"calendar",role:"through",line:"ext",x:1060,y:200,labelSide:"right",label:"Cal",tip:"Google Calendar · daily",href:"https://calendar.google.com/",focusView:"schedule"},{id:"gmail",role:"interchange",line:"ext",x:1060,y:250,labelSide:"right",label:"Gml",tip:"Gmail · daily inbox (Daily terminus interchange)",href:"https://mail.google.com/",lines:["daily","ext"],capTop:"--mustard",capBottom:"--slate"},{id:"drive",role:"interchange",line:"ext",x:1060,y:350,labelSide:"right",label:"Drv",tip:"Drive · shared files (LP onboarding terminus interchange)",href:"https://drive.google.com/",lines:["lp","ext"],capTop:"--coral",capBottom:"--slate"}],bn={nav:"--blue","nav-867":"--blue",daily:"--mustard",lp:"--coral",cross:"--plum",ext:"--slate"},$n=yn.filter(function(t){return null!=t.flowOrder}).sort(function(t,e){return t.flowOrder-e.flowOrder}).map(function(t){return t.id}),wn=(function(){for(var t={},e=0;e<yn.length;e++)yn[e].consumerKey&&(t[yn[e].consumerKey]=yn[e].id)}(),Ot=t.bind(n),String.fromCharCode(8230));function kn(t){var e=bn[t];return e?"var("+e+")":"var(--ink-faint)"}function xn(t){if(t.tip){var e=t.tip.split(String.fromCharCode(183))[0].trim();if(e)return e}return t.label}function Sn(){return yn.filter(function(t){return!t.isUpload&&!t.focusView}).map(function(t){var e=xn(t);return{id:"go-"+t.id,kind:"destination",stationId:t.id,consumerKey:t.consumerKey||null,label:e,hint:t.label,keywords:(e+" "+t.label+" "+(t.tip||"")).toLowerCase(),lineColor:kn(t.line),href:t.href,isUpload:!!t.isUpload,run:function(e){Nn(t),e.close()}}})}function An(){return[{id:"act-upload",kind:"action",label:"Upload audited NAV",hint:"upload",keywords:"upload nav audited xlsx fan out fanout trigger ingest",run:function(t){En(),t.close()}},{id:"act-transfers",kind:"action",label:"Jump to Transfers",hint:"tracker",keywords:"transfers transfer tracker daily jump money wires",run:function(t){Cn("transfer-tracker"),t.close()}},{id:"act-refresh-portfolio",kind:"action",label:"Refresh portfolio",hint:"ytd / mtd",keywords:"refresh portfolio reload ytd mtd retry performance",run:function(t){Pn(),t.close()}},{id:"act-open-close",kind:"action",label:"Open Close",hint:"checklist",keywords:"close checklist playbook month vessel steps filing revshare",run:function(t){at("close"),t.close()}},{id:"act-open-projecting",kind:"action",label:"Open Projecting",hint:"rough yield",keywords:"projecting yield rough net flows closing whatsapp omri",run:function(t){at("projecting"),t.close()}},{id:"act-open-portfolio",kind:"action",label:"Open Portfolio",hint:"positions",keywords:"portfolio positions movers chart benchmark nav fx allocation",run:function(t){at("portfolio"),t.close()}},{id:"act-open-schedule",kind:"action",label:"Open Schedule",hint:"departures",keywords:"schedule departures board tasks events calendar today",run:function(t){at("schedule"),t.close()}}]}function Cn(t){for(var e=0;e<yn.length;e++)if(yn[e].id===t)return void Nn(yn[e])}function Nn(t){if(t.isUpload)En();else if(t.focusView)at(t.focusView);else if(t.href)try{var e=window.open(t.href,"_blank","noopener");e||(location.href=t.href)}catch(e){Ct("palette:open:"+t.id,e)}else Dn(t.id)}function Dn(t){try{var e=document.querySelector('[data-station="'+t+'"]');e&&e.scrollIntoView&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});try{window.dispatchEvent(new CustomEvent("atrium:open-station",{detail:{id:t}}))}catch(t){}}catch(e){Ct("palette:scroll:"+t,e)}}function En(){"home"!==rt.view.value&&at("home");var t=0;!function e(){var n=document.getElementById("nav-file-input");n&&"function"==typeof n.click?n.click():t++<20?setTimeout(e,50):Ct("palette:upload:no-input",new Error("#nav-file-input not mounted after routing home"))}()}function Pn(){try{"function"==typeof dt?dt(Et,Ct):Et.portfolio().catch(function(t){Ct("palette:portfolio",t)})}catch(t){Ct("palette:portfolio:sync",t)}}function On(t){switch(t){case"ok":return{txt:"ok",tone:"ok"};case"running":return{txt:"running",tone:"running"};case"pending":return{txt:"queued",tone:"pending"};case"skipped":return{txt:"skipped",tone:"stale"};case"stale":return{txt:"stale",tone:"stale"};case"failed":return{txt:"failed",tone:"failed"};case"anomaly":return{txt:"anomaly",tone:"anomaly"};default:return null}}function Tn(t,e){if(!e)return 1;var n=t.keywords,r=t.label.toLowerCase();if(0===r.indexOf(e))return 1e3;if(r.indexOf(e)>=0)return 800;if(n.indexOf(e)>=0)return 500;for(var a=0,i=0;i<n.length&&a<e.length;i++)n.charCodeAt(i)===e.charCodeAt(a)&&a++;return a===e.length?100:-1}function Ln(){var t=s(!1),e=t[0],n=t[1],r=s(""),u=r[0],c=r[1],d=s(0),f=d[0],p=d[1],h=l(null),v=l(null),m=l(null),g=rt.navWidget.value,_=rt.fanOut&&rt.fanOut.value||null,y=rt.silentSignals&&rt.silentSignals.value||[],b=o(function(){try{return un({navWidget:g,fanOut:_,silentSignals:y})||{}}catch(t){return Ct("palette:health",t),{}}},[g,_,y]),$=o(function(){return An().concat(Sn())},[]),w=o(function(){for(var t=u.trim().toLowerCase(),e=[],n=0;n<$.length;n++){var r=Tn($[n],t);r>=0&&e.push({item:$[n],sc:r,ord:n})}return e.sort(function(t,e){return e.sc-t.sc||t.ord-e.ord}),e.map(function(t){return t.item})},[u,$]);i(function(){f>=w.length&&p(w.length?w.length-1:0)},[w.length]),i(function(){function t(t){var r=t.key,a=t.metaKey||t.ctrlKey;if(a&&("k"===r||"K"===r))return t.preventDefault(),void n(function(t){return!t});var i=t.target,o=i&&i.tagName?i.tagName.toLowerCase():"",l="input"===o||"textarea"===o||i&&i.isContentEditable;if(!e&&!l){if("/"===r)return t.preventDefault(),void n(!0);if(!a&&!t.altKey){var s=String(r||"").toLowerCase();if("u"===s)t.preventDefault(),En();else if("r"===s&&"transfers"===rt.view.value){var u=document.querySelector(".tx-view__refresh");u&&(t.preventDefault(),u.click())}else if("e"===s){var c=document.querySelector(".tx-band--transferred .tx-band__hdr--toggle");c&&(t.preventDefault(),c.click())}}}}return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[e]),i(function(){if(e){try{m.current=document.activeElement}catch(t){}c(""),p(0);var t=setTimeout(function(){try{h.current&&h.current.focus()}catch(t){}},0);return function(){clearTimeout(t)}}try{var n=m.current;n&&"function"==typeof n.focus&&n.focus()}catch(t){}},[e]);var k=a(function(){n(!1)},[]);function x(t){if(t)try{t.run({close:k})}catch(e){Ct("palette:run:"+t.id,e),k()}}function S(t){var e=t.key;if("Escape"===e)return t.preventDefault(),void k();if("ArrowDown"===e)return t.preventDefault(),void p(function(t){return w.length?(t+1)%w.length:0});if("ArrowUp"===e)return t.preventDefault(),void p(function(t){return w.length?(t-1+w.length)%w.length:0});if("Home"===e)return t.preventDefault(),void p(0);if("End"===e)return t.preventDefault(),void p(w.length?w.length-1:0);if("Enter"===e)return t.preventDefault(),void x(w[f]);if("Tab"===e){t.preventDefault();try{h.current&&h.current.focus()}catch(t){}}}if(i(function(){if(e&&v.current){var t=v.current.querySelector("#palette-opt-"+f);if(t&&t.scrollIntoView)try{t.scrollIntoView({block:"nearest"})}catch(t){}}},[f,e]),!e)return null;var A=w.length?"palette-opt-"+f:null,C="Jump to a station, view, or action"+wn;return Ot`
      <div class="cmdp-overlay" onMouseDown=${function(t){t.target===t.currentTarget&&k()}}>
        <div class="cmdp" role="dialog" aria-modal="true" aria-label="Command palette"
             onKeyDown=${S}>
          <div class="cmdp__search">
            <span class="cmdp__icon" aria-hidden="true">${String.fromCharCode(8981)}</span>
            <input ref=${h} class="cmdp__input" type="text"
                   placeholder=${C}
                   role="combobox" aria-expanded="true" aria-controls="cmdp-list"
                   aria-activedescendant=${A}
                   autocomplete="off" autocorrect="off" spellcheck=${!1}
                   value=${u}
                   onInput=${function(t){c(t.target.value),p(0)}} />
            <kbd class="cmdp__kbd" aria-hidden="true">esc</kbd>
          </div>

          <ul ref=${v} id="cmdp-list" class="cmdp__list" role="listbox"
              aria-label="Results">
            ${0===w.length?Ot`
              <li class="cmdp__empty" role="option" aria-disabled="true">No matches</li>
            `:w.map(function(t,e){var n=e===f,r="destination"===t.kind&&t.stationId&&b[t.stationId]||null,a=r&&r.health?On(String(r.health).toLowerCase()):null;return Ot`
                <li id=${"palette-opt-"+e}
                    role="option"
                    aria-selected=${n}
                    class=${"cmdp__opt"+(n?" is-active":"")}
                    onMouseEnter=${function(){p(e)}}
                    onClick=${function(){x(t)}}>
                  <span class="cmdp__kind" data-kind=${t.kind} aria-hidden="true">
                    ${"action"===t.kind?String.fromCharCode(9656):Ot`<span class="cmdp__line" style=${"background:"+(t.lineColor||"transparent")}></span>`}
                  </span>
                  <span class="cmdp__label">${t.label}</span>
                  ${t.hint?Ot`<span class="cmdp__hint">${t.hint}</span>`:null}
                  ${a?Ot`<span class=${"cmdp__health cmdp__health--"+a.tone}>${a.txt}</span>`:null}
                </li>`})}
          </ul>

          <div class="cmdp__foot" aria-hidden="true">
            <span><kbd>${String.fromCharCode(8593)}</kbd><kbd>${String.fromCharCode(8595)}</kbd> move</span>
            <span><kbd>${String.fromCharCode(8629)}</kbd> open</span>
            <span><kbd>${String.fromCharCode(8984)}K</kbd> toggle</span>
          </div>
        </div>
      </div>
    `}Ot=t.bind(n);var In=["day","mtd","hy","ytd","1y"];function Rn(t){var e=dr(t.p);return"bloomberg"===e.kind?Ot`<span class="ticker-cell">
        <span class=${"ticker "+e.pill}>${e.base}</span>
        <span class="ticker-sub ticker-sub--xch">${e.sub}</span>
      </span>`:"tase"===e.kind?Ot`<span class="ticker-cell">
        <span class="ticker ticker--he">${e.base}</span>
        <span class="ticker-sub ticker-sub--tase">TASE</span>
      </span>`:"empty"===e.kind?Ot`<span class="ticker">${e.base}</span>`:Ot`<span class=${"ticker "+e.pill}>${e.base}</span>`}function Fn(t){var e=t.cell,n="pf-metric pf-metric--"+e.cls+(t.active?" is-active":"");return Ot`<span class=${n}>${"closed"===e.kind?"closed "+e.text:e.text}</span>`}function Mn(t){var e=t.e,n=hr(e.quote);return Ot`
      <div class="pf-mover-row">
        <${Rn} p=${e.p} />
        ${In.map(function(r){var a="day"===r?!!e.quote:!!e.hist,i=br(e[r],e.ysym,a,"day"===r&&n);return Ot`<${Fn} key=${r} cell=${i} active=${r===t.rank} />`})}
      </div>`}function jn(t){var e=t.rankBy||"mtd",n=_r(t.enriched||[],e);function r(t,n,r){return Ot`
        <div class=${"pf-movers__col "+r}>
          <div class="pf-movers__hdr">
            <span class="pf-movers__lbl">${t}</span>
            ${In.map(function(t){return Ot`<span key=${t} class=${"pf-movers__m"+(t===e?" is-active":"")}>${t.toUpperCase()}</span>`})}
          </div>
          ${n.length?n.map(function(t,n){return Ot`<${Mn} key=${t.ysym||n} e=${t} rank=${e} />`}):Ot`<div class="pf-movers__none">none</div>`}
        </div>`}return Ot`
      <div class="pf-movers" aria-label="Top movers, weighted fund contribution">
        ${r("UP",n.ups,"pf-movers__col--up")}
        ${r("DOWN",n.downs,"pf-movers__col--down")}
      </div>`}Ot=t.bind(n);function Kn(t){var e=t.model;return e?Ot`
      <div class="pf-chart" data-state="live">
        <div class="pf-chart__y" aria-hidden="true">
          ${e.yLabels.map(function(t,e){return Ot`<span key=${e}>${t}</span>`})}
        </div>
        <svg class="pf-chart__svg" viewBox=${"0 0 "+e.W+" "+e.H}
             preserveAspectRatio="none" role="img" aria-label="Fund return vs benchmark">
          <line x1="0" y1="0" x2=${e.W} y2="0" stroke="rgba(20,20,20,0.06)" />
          <line x1="0" y1=${e.zeroY} x2=${e.W} y2=${e.zeroY}
                stroke="rgba(20,20,20,0.18)" stroke-dasharray="2 4" />
          <line x1="0" y1=${e.H} x2=${e.W} y2=${e.H} stroke="rgba(20,20,20,0.06)" />
          <path d=${e.areaPath} fill="rgba(46,133,64,0.10)" />
          ${e.benchPoints?Ot`<polyline points=${e.benchPoints} fill="none"
                     stroke=${e.benchStrokeVar} stroke-width="1.5"
                     stroke-dasharray="4 3" opacity="0.75" />`:null}
          <polyline points=${e.fundPoints} fill="none" stroke="var(--up)" stroke-width="2" />
          <circle cx=${e.lastX} cy=${e.lastY} r="4" fill="var(--up)" />
        </svg>
        <div class="pf-chart__x" aria-hidden="true">
          ${e.xTicks.map(function(t,e){return Ot`<span key=${e}>${t}</span>`})}
        </div>
      </div>
    `:Ot`
        <div class="pf-chart" data-state=${t.failed?"failed":"loading"}>
          <svg class="pf-chart__svg" viewBox="0 0 1000 280" role="img"
               aria-label=${t.failed?"NAV history unavailable":"NAV history loading"}>
            <text x="500" y="140" text-anchor="middle" font-size="13" fill="rgba(20,20,20,0.4)">
              ${t.failed?"history unavailable":"history loading"}
            </text>
          </svg>
        </div>`}Ot=t.bind(n);var Un=[{key:"mtd",label:"MTD"},{key:"hy",label:"HY"},{key:"ytd",label:"YTD"}];function Bn(t,e){return t?"mtd"===e?t.mtd_pct:"hy"===e?t.hy_pct:t.ytd_pct:null}function Hn(t){var e=t.e,n=e[t.tf],r=null!=n?ir(n):"na";return Ot`
      <div class="pfp-row">
        <${Rn} p=${e.p} />
        <span class=${"pfp-row__pct pf-metric--"+r}>${null!=n?or(n):ar}</span>
      </div>`}function Gn(){var t=rt.portfolio.value,e=rt.health.value||{},n=e.portfolio||(t?"live":"loading"),r=s("mtd"),a=r[0],i=r[1];if(!t&&"error"===n)return Ot`
        <section class="pfp" data-state="error" aria-label="Portfolio">
          <div class="pfp__msg" role="alert">portfolio unavailable</div>
        </section>`;if(!t)return Ot`
        <section class="pfp" data-state="loading" aria-label="Portfolio">
          <div class="pfp__msg" aria-busy="true">loading portfolio…</div>
        </section>`;var o=t.headline||{},l=xr(t.as_of_iso),u=Sr(t.data_freshness),c=gr(t,{},{}),d=_r(c,a),f=Bn(o,a);function p(){return Ot`
        <div class="pfp__tfs" role="group" aria-label="Timeframe">
          ${Un.map(function(t){var e=a===t.key,n="hy"===t.key?"HY is a projected (predicted) return, not yet realized":null;return Ot`<button key=${t.key} type="button"
                class=${"pfp__tf"+(e?" is-active":"")}
                aria-pressed=${String(e)} title=${n}
                onClick=${function(){i(t.key)}}>${t.label}</button>`})}
        </div>`}function h(t,e,n){return Ot`
        <div class=${"pfp__col "+n}>
          <div class="pfp__col-hdr">${t}</div>
          ${e.length?e.map(function(t,e){return Ot`<${Hn} key=${t.ysym||e} e=${t} tf=${a} />`}):Ot`<div class="pfp__none">none</div>`}
        </div>`}return Ot`
      <section class="pfp" data-state="live" aria-label="Portfolio">
        <header class="pfp__head">
          <div class="pfp__id">
            <span class="pfp__nav">${null!=o.nav_rolling?lr(o.nav_rolling):ar}</span>
            <span class="pfp__sub">${[c.length+" positions",null!=t.num_lps?t.num_lps+" LPs":null].filter(Boolean).join(" · ")||"unavailable"}</span>
            <span class=${"pfp__fresh pfp__fresh--"+(l.cls||"ok")}>${l.text}</span>
            ${u?Ot`<span class=${"pfp__fresh pfp__fresh--"+u.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${u.text}</span>`:null}
          </div>
          <div class="pfp__perf">
            <span class=${"pfp__perf-pct "+(null!=f?ir(f):"na")}>${null!=f?or(f):ar}</span>
            ${p()}
          </div>
          <button type="button" class="pfp__open" onClick=${function(){at("portfolio")}}
                  aria-label="Open the full portfolio view">positions, chart ↗</button>
        </header>

        ${"loading"===n?Ot`<div class="pfp__banner" aria-busy="true">refreshing portfolio…</div>`:null}
        ${"error"===n?Ot`<div class="pfp__banner pfp__banner--err" role="alert">refresh failed · showing last-known</div>`:null}

        <div class="pfp__movers">
          ${h("Gainers",d.ups,"pfp__col--up")}
          ${h("Detractors",d.downs,"pfp__col--down")}
        </div>
      </section>`}Ot=t.bind(n);var Vn=["1mo","3mo","ytd","1y","3y","max"],Wn=["day","mtd","hy","ytd","1y"],Yn=[{value:"",label:"None"},{value:"SPX",label:"SPX"},{value:"TASE35",label:"TASE 35"},{value:"USDILS",label:"USD/ILS"}];function qn(t){return null==t.v?Ot`<span class="pf-id__pct"></span>`:Ot`<span class=${"pf-id__pct "+ir(t.v)}>${or(t.v)}</span>`}var Jn=3e5,Xn={key:null,ts:0,md:null};function zn(t){var e=(t&&t.positions||[]).map(sr).filter(Boolean);return(t&&t.as_of_iso||"")+"|"+e.join(",")}function Qn(t){return t&&Xn.md?Xn.key!==zn(t)||Date.now()-Xn.ts>Jn?null:Xn.md:null}function Zn(){var t=rt.portfolio.value,e=rt.health.value||{},n=e.portfolio||(t?"live":"loading"),r=s(function(){return Cr()}),a=r[0],o=r[1];function u(t,e){o(function(n){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a]);return r[t]=e,Nr(r),r})}var c=s(function(){return Qn(t)||{quotes:{},history:{},fx:null,fxFailed:!1,navHistory:null,navHistoryFailed:!1,bench:null}}),d=c[0],f=c[1];function p(t){f(function(e){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n})}var h=l(0);function v(){dt(Et,Ct)}if(i(function(){t&&(Xn={key:zn(t),ts:Date.now(),md:d})},[d,t]),i(function(){if(t){var e=++h.current,n=(t.positions||[]).map(sr).filter(Boolean);n.length&&(Et.quotes(n).then(function(t){e===h.current&&t&&p({quotes:t})}).catch(function(t){Ct("pf:quotes",t)}),Et.history(n,"2y").then(function(t){e===h.current&&t&&p({history:t})}).catch(function(t){Ct("pf:history",t)})),Et.fx().then(function(t){e===h.current&&p({fx:t,fxFailed:!t})}).catch(function(t){e===h.current&&p({fx:null,fxFailed:!0}),Ct("pf:fx",t)});var r=wr(t);r&&r.length?p({navHistory:r,navHistoryFailed:!1}):Et.fundNavHistory().then(function(t){e===h.current&&p({navHistory:t||[],navHistoryFailed:!1})}).catch(function(t){e===h.current&&p({navHistory:[],navHistoryFailed:!0}),Ct("pf:fundNavHistory",t)})}},[t]),i(function(){var t=h.current,e=a.activeBenchmark;e?Et.benchmarkHistory(e,a.activeRange).then(function(e){t===h.current&&p({bench:e})}).catch(function(e){t===h.current&&p({bench:null}),Ct("pf:benchmarkHistory",e)}):p({bench:null})},[a.activeBenchmark,a.activeRange,t]),!t&&"error"===n)return Ot`
        <div class="pf-view" data-state="error">
          <div class="pf-view__err" role="alert">portfolio unavailable ·${" "}
            <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button>
          </div>
        </div>`;if(!t)return Ot`
        <div class="pf-view" data-state="loading">
          <div class="pf-view__empty" aria-busy="true">loading portfolio…</div>
        </div>`;var m=Array.isArray(t.positions)?t.positions:[],g=gr(t,d.quotes,d.history),_=t.headline||{},y=xr(t.as_of_iso),b=Sr(t.data_freshness),$=kr(d.navHistory||[],d.bench,a.activeRange,a.activeBenchmark);function w(t){a.sortBy===t?u("sortDir","asc"===a.sortDir?"desc":"asc"):o(function(e){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.sortBy=t,n.sortDir="sym"===t?"asc":"desc",Nr(n),n})}var k=d.fx,x="unavailable";if(k)if(k.last_updated_iso){var S=new Date(k.last_updated_iso);x="spot · live "+String(S.getHours()).padStart(2,"0")+":"+String(S.getMinutes()).padStart(2,"0")}else x="spot";else d.fxFailed||(x="loading");return Ot`
      <div class="pf-view" data-state="live">
        <div class="pf-id">
          <div class="pf-id__main">
            <span class="pf-id__nav">${null!=_.nav_rolling?lr(_.nav_rolling):ar}</span>
            <span class="pf-id__sub">
              ${[null!=t.num_lps?t.num_lps+" LPs":null,g.length+" positions"].filter(Boolean).join(" · ")||"unavailable"}
            </span>
            <span class=${"pf-id__fresh pf-id__fresh--"+(y.cls||"ok")}>${y.text}</span>
            ${b?Ot`<span class=${"pf-id__fresh pf-id__fresh--"+b.cls} title="Upstream data quality flag from the pipeline, distinct from export age">${b.text}</span>`:null}
          </div>
          <div class="pf-id__perf">
            <span class="pf-id__perf-lbl">YTD</span><${qn} v=${_.ytd_pct} />
            <span class="pf-id__perf-lbl">MTD</span><${qn} v=${_.mtd_pct} />
          </div>
          <div class="pf-id__fx" aria-label="USD ILS spot">
            <span class="pf-id__fx-spot">${k&&null!=k.spot?k.spot.toFixed(3):d.fxFailed?ar:String.fromCharCode(8230)}</span>
            <span class="pf-id__fx-sub">${"USD/ILS · "+x}</span>
            ${k&&null!=k.mtd_pct?Ot`<span class=${"pf-id__fx-pct "+ir(k.mtd_pct)}>${or(k.mtd_pct)} mtd</span>`:null}
            ${k&&null!=k.ytd_pct?Ot`<span class=${"pf-id__fx-pct "+ir(k.ytd_pct)}>${or(k.ytd_pct)} ytd</span>`:null}
          </div>
          <button type="button" class="pf-view__refreshbtn" title="Refresh portfolio"
                  aria-label="Refresh portfolio" onClick=${v}>↻</button>
        </div>

        ${"loading"===n?Ot`<div class="pf-banner pf-banner--soft">refreshing portfolio…</div>`:null}
        ${"error"===n?Ot`<div class="pf-banner pf-banner--err" role="alert">portfolio refresh failed · showing last-known ·${" "}
              <button type="button" class="pf-view__retry" onClick=${v}>retry ↻</button></div>`:null}

        ${0===m.length?Ot`<div class="pf-view__empty">no positions in this snapshot</div>`:Ot`
            <div class="pf-rank" role="group" aria-label="Rank movers by">
              ${Wn.map(function(t){var e=a.rankBy===t,n="hy"===t?"HY is a projected (predicted) return, not yet realized":null;return Ot`<button key=${t} type="button"
                    class=${"pf-pill"+(e?" pf-pill--active":"")}
                    aria-pressed=${String(e)} title=${n}
                    onClick=${function(){u("rankBy",t)}}>${t.toUpperCase()}</button>`})}
            </div>
            <${jn} enriched=${g} rankBy=${a.rankBy} />
            <${nr}
              enriched=${g}
              sortBy=${a.sortBy} sortDir=${a.sortDir}
              showAll=${a.showAllPositions}
              onSort=${w}
              onToggleShowAll=${function(){u("showAllPositions",!a.showAllPositions)}} />
          `}

        <div class="pf-graph">
          <div class="pf-graph__controls">
            <div class="pf-graph__pills" role="group" aria-label="Chart range">
              ${Vn.map(function(t){var e=a.activeRange===t;return Ot`<button key=${t} type="button"
                    class=${"pf-pill"+(e?" pf-pill--active":"")}
                    aria-pressed=${String(e)}
                    onClick=${function(){u("activeRange",t)}}>${t.toUpperCase()}</button>`})}
            </div>
            <select class="pf-graph__bench" aria-label="Benchmark"
                    value=${a.activeBenchmark}
                    onChange=${function(t){u("activeBenchmark",t.target.value)}}>
              ${Yn.map(function(t){return Ot`<option key=${t.value||"none"} value=${t.value}>${t.label}</option>`})}
            </select>
            ${a.activeBenchmark&&!d.bench?Ot`<span class="pf-graph__benchwarn" role="status">benchmark unavailable</span>`:null}
          </div>
          <${Kn} model=${$} failed=${d.navHistoryFailed} />
        </div>
      </div>
    `}Ot=t.bind(n);var tr=[{key:"sym",label:"Position"},{key:"alloc",label:"Alloc",title:"Allocation % is of gross position value, not the headline NAV"},{key:"day",label:"Day"},{key:"mtd",label:"MTD"},{key:"ytd",label:"YTD"},{key:"1y",label:"1Y"}];function er(t){var e=t.cell;return Ot`<td class=${"num pf-td--"+e.cls}>${"closed"===e.kind?"closed "+e.text:e.text}</td>`}function nr(t){var e=t.enriched||[],n=t.sortBy||"alloc",r=t.sortDir||"desc",a=yr(e,n,r),i=t.showAll?a:a.slice(0,12),o=l(null);function s(){var e=!t.showAll;if(t.onToggleShowAll&&t.onToggleShowAll(),!e&&o.current&&o.current.scrollIntoView)try{o.current.scrollIntoView({behavior:"smooth",block:"start"})}catch(t){}}return e.length?Ot`
      <div class="pf-positions" ref=${o}>
        <table class="pf-positions__table">
          <thead>
            <tr>
              ${tr.map(function(e){var a=e.key===n,i=a?"asc"===r?"ascending":"descending":null;return Ot`<th key=${e.key} scope="col" aria-sort=${i}
                    class=${(a?"sorted":"")+(a&&"asc"===r?" asc":"")}>
                  <button type="button" class="pf-positions__sortbtn" title=${e.title||null}
                          onClick=${function(){t.onSort&&t.onSort(e.key)}}>
                    ${e.label}${a?"asc"===r?" "+String.fromCharCode(8593):" "+String.fromCharCode(8595):""}
                  </button>
                </th>`})}
            </tr>
          </thead>
          <tbody>
            ${i.map(function(t,e){var n=hr(t.quote);return Ot`<tr key=${t.ysym||t.p&&t.p.name||e}>
                <th scope="row"><${Rn} p=${t.p} /></th>
                <td class="num">${(100*t.alloc).toFixed(1)+"%"}</td>
                <${er} cell=${br(t.day,t.ysym,!!t.quote,n)} />
                <${er} cell=${br(t.mtd,t.ysym,!!t.hist,!1)} />
                <${er} cell=${br(t.ytd,t.ysym,!!t.hist,!1)} />
                <${er} cell=${br(t["1y"],t.ysym,!!t.hist,!1)} />
              </tr>`})}
          </tbody>
        </table>
        <div class="pf-positions__foot">
          <span class="pf-positions__count">${i.length} shown of ${a.length}</span>
          ${a.length>12?Ot`<button type="button" class="pf-positions__expand" onClick=${s}>
                ${t.showAll?"Show top 12 only":"Show all "+a.length+" positions"}
              </button>`:null}
        </div>
      </div>
    `:Ot`<div class="pf-positions" ref=${o}>
        <div class="pf-positions__empty">portfolio unavailable</div>
      </div>`}var rr={"AIXA GY":"AIXA.DE","EXA FP":"EXA.PA","AVIO IM":"AVIO.MI","7013 JP":"7013.T","PLUS LN":"PLUS.L","LSEG LN":"LSEG.L","FFH CN":"FFH.TO","FQT GY":"FQT.DE","K7X GR":"K7X.DE","RW5 GR":"RW5.DE"},ar=String.fromCharCode(8212);function ir(t){return t>=0?"up":"down"}function or(t){return gt(t)}function lr(t){var e=Number(t);if(!isFinite(e)||0===e)return ar;var n=Math.abs(e);return n>=1e9?"₪"+(e/1e9).toFixed(2)+"B":n>=1e6?"₪"+(e/1e6).toFixed(1)+"M":n>=1e3?"₪"+Math.round(e/1e3)+"K":"₪"+Math.round(e)}function sr(t){if(!t||!t.sym)return null;var e=String(t.sym).trim();return e?rr[e]||e:null}function ur(t){if(!t)return"tase";var e=String(t).trim();if(!e)return"tase";if(e.indexOf(" ")<0)return"americas";var n=e.split(/\s+/)[1];switch(n){case"GY":case"GR":case"FP":case"IM":case"LN":return"europe";case"JP":return"asia";case"CN":return"americas";case"TA":return"tase";default:return"other"}}var cr={americas:"ticker--blue",europe:"ticker--mustard",asia:"ticker--coral",other:"ticker--slate"};function dr(t){var e=String(t&&t.sym||"").trim();if(e){var n=ur(e),r=cr[n]||"ticker--slate";if(e.indexOf(" ")>=0){var a=e.split(/\s+/);return{kind:"bloomberg",pill:r,base:a[0],sub:a[1]}}return{kind:"us",pill:r,base:e,sub:null}}var i=String(t&&t.name||"").trim();return i?{kind:"tase",pill:"ticker--he",base:i,sub:"TASE"}:{kind:"empty",pill:"ticker",base:String.fromCharCode(8230),sub:null}}function fr(t,e){if(!t||!t.closes||!t.timestamps)return null;for(var n=null,r=-1/0,a=0;a<t.timestamps.length;a++){var i=1e3*t.timestamps[a];if(i>e)break;i>r&&(r=i,n=t.closes[a])}return n}function pr(t,e,n,r){if("day"===n)return t&&null!=t.change_pct?t.change_pct:null;if(!t||null==t.price)return null;var a,i=r||new Date;if("mtd"===n)a=new Date(i.getFullYear(),i.getMonth(),0).getTime();else if("ytd"===n)a=new Date(i.getFullYear()-1,11,31).getTime();else{if("1y"!==n)return null;a=i.getTime()-31536e6}var o=fr(e,a);return null==o||0===o?null:(t.price-o)/o}function hr(t){if(!t)return!1;var e=String(t.market_state||"").toUpperCase();return!(!e||"REGULAR"===e||"PRE"===e||"PREPRE"===e||"POST"===e||"POSTPOST"===e)}function vr(t,e){return e&&t&&null!=t.value?Number(t.value)/e:0}function mr(t,e,n,r,a){var i=sr(t),o=i?(n||{})[i]:null,l=i?(r||{})[i]:null,s=vr(t,e);function u(t){if(!i)return null;var e="day"===t?o?pr(o,l,"day",a):null:l?pr(o,l,t,a):null;return null==e?null:e*s}return{p:t,ysym:i,quote:o,hist:l,alloc:s,day:u("day"),mtd:null!=t.mtd_contrib_pct?t.mtd_contrib_pct:u("mtd"),hy:null!=t.hy_contrib_pct?t.hy_contrib_pct:null,ytd:null!=t.ytd_contrib_pct?t.ytd_contrib_pct:u("ytd"),"1y":u("1y")}}function gr(t,e,n,r){var a=t&&t.positions||[],i=a.reduce(function(t,e){return t+(Number(e.value)||0)},0)||1;return a.filter(function(t){return(t.value||0)>0}).map(function(t){return mr(t,i,e,n,r)})}function _r(t,e){var n=e||"mtd",r=(t||[]).filter(function(t){return null!=t[n]}),a=r.filter(function(t){return t[n]>0}).sort(function(t,e){return e[n]-t[n]}).slice(0,4),i=r.filter(function(t){return t[n]<0}).sort(function(t,e){return t[n]-e[n]}).slice(0,4);return{ups:a,downs:i}}function yr(t,e,n){var r=(t||[]).slice(),a="desc"===n?1:-1;return r.sort(function(t,r){if("sym"===e){var i=String(t.p.sym||t.p.name),o=String(r.p.sym||r.p.name);return("asc"===n?1:-1)*i.localeCompare(o)}var l="alloc"===e?t.alloc:t[e],s="alloc"===e?r.alloc:r[e];return null==l&&null==s?0:null==l?1:null==s?-1:a*(s-l)}),r}function br(t,e,n,r){return null!=t?r?{kind:"closed",text:or(t),cls:"closed"}:{kind:"value",text:or(t),cls:ir(t)}:e?n?{kind:"na",text:ar,cls:"na"}:{kind:"cold",text:String.fromCharCode(8230),cls:"cold"}:{kind:"na",text:ar,cls:"na"}}function $r(t,e){var n=null!=e?e:Date.now();switch(t){case"1mo":return 26784e5;case"3mo":return 79488e5;case"ytd":return n-new Date(new Date(n).getFullYear(),0,1).getTime();case"1y":default:return 31536e6;case"3y":return 94608e6;case"max":return null}}function wr(t){return t&&Array.isArray(t.historical_nav)&&t.historical_nav.length?t.historical_nav.map(function(t){var e=String(t.month||"").split("-");if(2!==e.length)return null;var n=parseInt(e[0],10),r=parseInt(e[1],10);return isFinite(n)&&isFinite(r)?{year:n,month:r,label:t.month,nav_ils:Number(t.total_ils)||0}:null}).filter(function(t){return t&&t.nav_ils>0}):null}function kr(t,e,n,r,a){if(t=t||[],!t.length)return null;var i=null!=a?a:Date.now(),o=$r(n,i),l=t.filter(function(t){var e=new Date(t.year,t.month-1,28).getTime();return null==o||i-e<=o});l.length<2&&(l=t.slice(-Math.max(2,t.length)));var s=l[0].nav_ils,u=l.map(function(t){return(t.nav_ils-s)/s}),c=l.map(function(t){return new Date(t.year,t.month-1,28).getTime()}),d=null;if(e&&e.closes&&e.closes.length&&e.timestamps){for(var f=c[0]/1e3,p=[],h=0;h<e.timestamps.length;h++)e.timestamps[h]>=f&&null!=e.closes[h]&&p.push({ts:e.timestamps[h],close:e.closes[h]});if(p.length>=2){var v=p[0].close;d=p.map(function(t){return{t:1e3*t.ts,v:(t.close-v)/v}})}}var m=u.slice();d&&(m=m.concat(d.map(function(t){return t.v})));var g=Math.min.apply(null,m),_=Math.max.apply(null,m);g===_&&(g-=.01,_+=.01);var y=.1*(_-g);g-=y,_+=y;var b=c[0],$=c[c.length-1];d&&(b=Math.min(b,d[0].t),$=Math.max($,d[d.length-1].t)),$===b&&($=b+1);var w=1e3,k=280;function x(t){return(_-t)/(_-g)*k}function S(t){return(t-b)/($-b)*w}var A=x(0).toFixed(1),C=u.map(function(t,e){return S(c[e]).toFixed(1)+","+x(t).toFixed(1)}),N=S(c[0]).toFixed(1),D=S(c[c.length-1]).toFixed(1),E="M"+N+","+A+" L"+C.join(" L")+" L"+D+","+A+" Z",P=null;d&&(P=d.map(function(t){return S(t.t).toFixed(1)+","+x(t.v).toFixed(1)}).join(" "));for(var O=[],T=(_-g)/4,L=4;L>=0;L--)O.push(or(g+T*L));for(var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=l.length,F=[],M=Math.max(1,Math.floor(R/6)),j=0;j<R;j+=M){var K=l[j];F.push(I[K.month-1]+(0===j?" '"+String(K.year).slice(2):""))}if((R-1)%M!=0){var U=l[R-1];F.push(I[U.month-1])}return{W:w,H:k,fundPoints:C.join(" "),areaPath:E,lastX:D,lastY:x(u[u.length-1]).toFixed(1),zeroY:A,benchPoints:P,benchStrokeVar:"USDILS"===r?"var(--mustard)":"var(--slate)",yLabels:O,xTicks:F}}function xr(t,e){if(!t)return{text:"no Drive file registered",cls:"missing"};var n=new Date(t+"T00:00:00");if(isNaN(n.getTime()))return{text:"exported "+t,cls:""};var r=null!=e?e:Date.now(),a=Math.floor((r-n.getTime())/864e5),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o="exported "+n.getDate()+" "+i[n.getMonth()];return a>14?{text:o+" · "+a+"d stale",cls:"very-stale"}:a>7?{text:o+" · "+a+"d ago",cls:"stale"}:{text:o+(a>0?" · "+a+"d ago":" · today"),cls:""}}function Sr(t){if(!t||!1!==t.ok)return null;var e=[];return t.flow_months_missing&&t.flow_months_missing.length&&e.push("flows incomplete for "+t.flow_months_missing.join(", ")),!1===t.naaman_ok&&e.push("NAV "+(null!=t.naaman_stale_months?t.naaman_stale_months+"mo stale":"stale")+(t.naaman_as_of?" (as of "+t.naaman_as_of+")":"")),!1===t.benchmarks_ok&&e.push("benchmarks unavailable"),{text:e.length?e.join(" · "):"data freshness degraded",cls:"very-stale"}}var Ar={activeRange:"1y",activeBenchmark:"",rankBy:"mtd",sortBy:"alloc",sortDir:"desc",showAllPositions:!1};function Cr(t){var e={};for(var n in Ar)Object.prototype.hasOwnProperty.call(Ar,n)&&(e[n]=Ar[n]);try{var r=t||("undefined"!=typeof localStorage?localStorage:null);if(!r)return e;var a=r.getItem("pf:prefs");if(!a)return e;var i=JSON.parse(a);["activeRange","activeBenchmark","rankBy","sortBy","sortDir"].forEach(function(t){"string"==typeof i[t]&&(e[t]=i[t])}),"boolean"==typeof i.showAllPositions&&(e.showAllPositions=i.showAllPositions)}catch(t){}return e}function Nr(t,e){try{var n=e||("undefined"!=typeof localStorage?localStorage:null);if(!n)return;n.setItem("pf:prefs",JSON.stringify({activeRange:t.activeRange,activeBenchmark:t.activeBenchmark,rankBy:t.rankBy,sortBy:t.sortBy,sortDir:t.sortDir,showAllPositions:t.showAllPositions}))}catch(t){}}Ot=t.bind(n);function Dr(t){var e=t.rows||[];return e.length?Ot`
      <div class="pj-bd__group">
        <div class="pj-bd__heading">${t.label}</div>
        ${e.map(function(e,n){return Ot`<div key=${n} class="pj-bd__row">
            <span class="pj-bd__lp">${e.lp}</span>
            <span class=${"pj-bd__amt pj-bd__amt--"+("dep"===t.kind?"up":"down")}>
              ${("dep"===t.kind?"+":String.fromCharCode(8722))+Ir(e.amount,t.sym)}
            </span>
          </div>`})}
        <div class="pj-bd__subtotal">Subtotal${" "}
          <b>${("dep"===t.kind?"+":String.fromCharCode(8722))+Ir(t.total,t.sym)}</b>
        </div>
      </div>`:null}function Er(){var t=rt.navWidget.value,e=rt.transfers.value,n=Fr(t,e&&e.monthLabel),r=s({state:"idle",net:null,agg:null}),a=r[0],o=r[1],u=s(""),c=u[0],d=u[1],f=s(!1),p=f[0],h=f[1],v=s(null),m=v[0],g=v[1],_=l(!1),y=l(null),b="ok"===a.state?a.net:n.net,$="ok"===a.state||("idle"===a.state||"loading"===a.state)&&n.netConfirmed;i(function(){if(!_.current){_.current=!0;var t=n.lastResult;if(t&&(y.current={display:t.display||null,closingMillions:"number"==typeof t.closingMillions?t.closingMillions:null},"number"==typeof t.closingMillions&&isFinite(t.closingMillions)&&t.closingMillions>0?d(String(t.closingMillions)):t.display&&g(t)),!n.projectingMonthSlash)return o({state:"no-month",net:null,agg:null}),void Ct("projecting:no-month",new Error("no projectingMonthSlash resolved; net stays unconfirmed"));o({state:"loading",net:null,agg:null}),Et.monthlyTransferBreakdown(n.projectingMonthSlash).then(function(t){var e=jr(t),n=Mr(e.rows),r=Kr(e.totals,n);o({state:"ok",net:r/1e6,agg:n})}).catch(function(t){o({state:"fail",net:null,agg:null}),Ct("projecting:breakdown",t)})}},[]);var w=Ur(c,n.prev,b);function k(){if(w&&null!=w.pct){var t=Br(w.pct),e=y.current;if(!e||e.display!==t||e.closingMillions!==w.closing){var r=n.projectingMonthSlash;r?Et.saveStoredRoughYield(r,{display:t,tag:"rough · pre-BDO",ts:(new Date).toISOString(),closingMillions:w.closing}).then(function(){y.current={display:t,closingMillions:w.closing}}).catch(function(t){Ct("projecting:save",t)}):Ct("projecting:save:badLabel",new Error('cannot derive MM/YYYY from "'+n.prevMonthLabel+'"'))}}}var x,S=Lr(n.prev,n.cur),A=Lr(b,n.cur);w?(x=(n.prevMonthLabel?n.prevMonthLabel+" · ":"")+"projecting · read as "+Lr(w.closing,n.cur),$||(x+=" · net flows unconfirmed")):x=n.prevMonthLabel?n.prevMonthLabel+" · projecting":"projecting";var C=Pr,N="",D=null,E=null;w?(C=Br(w.pct)+($?"":" ?"),N=$?w.pct>=0?"is-up":"is-down":"is-provisional",$||(D="Net flows not confirmed by the breakdown service. This yield is provisional.")):m&&m.display&&(C=m.display,N=/^[-−]/.test(m.display)?"is-down":"is-up",D=(m.tag||"saved")+(m.ts?" · "+String(m.ts).slice(0,16).replace("T"," "):""),E=(m.tag||"rough · saved")+(m.ts?" "+String(m.ts).slice(0,10):""));var P=a.agg,O=t?"live":"loading";return Ot`
      <div class="pj-view" data-state=${O} data-confirmed=${String(!!$)}>
        ${t?Ot`
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
                  ${$?null:Ot`<span class="pj-net-warn" role="status"
                            title="Net flows not confirmed by the breakdown service. Rough yield is provisional.">${String.fromCharCode(9888)} unconfirmed</span>`}
                </span>
                <span class="pj-formula__rule" aria-hidden="true"></span>
                <span class="pj-formula__den">${S}</span>
              </div>

              ${"fail"===a.state?Ot`<div class="pj-banner pj-banner--err" role="alert">net flows unconfirmed · breakdown fetch failed · rough yield is provisional</div>`:null}
              ${"no-month"===a.state?Ot`<div class="pj-banner pj-banner--err" role="alert">no projecting month resolved · net flows unconfirmed</div>`:null}
              ${"loading"===a.state?Ot`<div class="pj-banner pj-banner--soft">confirming net flows…</div>`:null}

              ${p&&P?Ot`<div class="pj-bd" aria-label="Net flows breakdown detail">
                    <div class="pj-bd__title">${(n.prevMonthLabel||n.projectingMonthSlash||"")+" · net flows"}</div>
                    <${Dr} label="+ Subscriptions / increases (ILS)" kind="dep" rows=${P.items.filter(function(t){return"ILS"===t.currency&&"dep"===t.kind})} total=${P.ilsDep} sym="₪" />
                    <${Dr} label=${String.fromCharCode(8722)+" Redemptions (ILS)"} kind="red" rows=${P.items.filter(function(t){return"ILS"===t.currency&&"red"===t.kind})} total=${P.ilsRed} sym="₪" />
                    <${Dr} label="+ Subscriptions / increases (USD)" kind="dep" rows=${P.items.filter(function(t){return"USD"===t.currency&&"dep"===t.kind})} total=${P.usdDep} sym="$" />
                    <${Dr} label=${String.fromCharCode(8722)+" Redemptions (USD)"} kind="red" rows=${P.items.filter(function(t){return"USD"===t.currency&&"red"===t.kind})} total=${P.usdRed} sym="$" />
                    ${P.items.length?Ot`
                        <div class="pj-bd__nets">
                          ${0!==P.netIls||P.items.some(function(t){return"ILS"===t.currency})?Ot`<div class="pj-bd__subtotal">Net ILS <b>${(P.netIls<0?String.fromCharCode(8722):"+")+Ir(P.netIls,"₪")}</b></div>`:null}
                          ${0!==P.netUsd||P.items.some(function(t){return"USD"===t.currency})?Ot`<div class="pj-bd__subtotal">Net USD <b>${(P.netUsd<0?String.fromCharCode(8722):"+")+Ir(P.netUsd,"$")}</b></div>`:null}
                        </div>`:Ot`<div class="pj-bd__empty">No settled transfers logged for this month</div>`}
                    ${null!=b&&isFinite(b)?Ot`<div class="pj-bd__total">Net (formula) <b>${(b<0?String.fromCharCode(8722):"+")+Ir(1e6*Math.abs(b),"₪")}</b></div>`:null}
                  </div>`:null}

              <div class="pj-input-row">
                <label class="pj-input-lbl" for="pj-closing-input">closing</label>
                <input id="pj-closing-input" class="pj-input" type="text"
                       inputmode="decimal" autocomplete="off"
                       placeholder=${"closing in millions ("+n.cur+")"}
                       value=${c}
                       onInput=${function(t){d(t.target.value),g(null)}}
                       onBlur=${k} />
                <output class=${"pj-result "+N} for="pj-closing-input"
                        title=${D}
                        aria-label=${"Rough yield "+C+($?"":", provisional")}>${C}</output>
                ${E?Ot`<span class="pj-restored-badge">${E}</span>`:null}
              </div>
            </div>
          `:Ot`<div class="pj-view__empty">awaiting NAV widget…</div>`}
      </div>
    `}var Pr=String.fromCharCode(8212);function Or(t){if(!t)return null;var e=String(t).match(/([0-9.]+)\s*([MBK])?/i);if(!e)return null;var n=parseFloat(e[1]);if(!isFinite(n))return null;var r=(e[2]||"M").toUpperCase();return"B"===r?1e3*n:"K"===r?n/1e3:n}function Tr(t){var e=String(t||"").match(/([₪$€£])/);return e?e[1]:"₪"}function Lr(t,e){if(null==t||!isFinite(t))return Pr;if(0===t)return e+"0";var n=t<0?String.fromCharCode(8722):"",r=Math.abs(t);return r>=1e3?n+e+(r/1e3).toFixed(2)+"B":n+e+r.toFixed(1)+"M"}function Ir(t,e){if(null==t||!isFinite(t))return Pr;if(0===t)return e+"0";var n=Math.abs(t);return n>=1e9?e+(n/1e9).toFixed(2)+"B":n>=1e6?e+(n/1e6).toFixed(2)+"M":n>=1e3?e+Math.round(n/1e3)+"K":e+Math.round(n)}function Rr(t){if(!t)return"";var e=String(t).trim();if(/^\d{1,2}\/\d{4}$/.test(e))return e.replace(/^(\d)\//,"0$1/");var n=e.match(/(\w+)\s+(\d{4})/);if(!n)return"";var r=["january","february","march","april","may","june","july","august","september","october","november","december"],a=r.indexOf(n[1].toLowerCase());return a<0?"":String(a+1).padStart(2,"0")+"/"+n[2]}function Fr(t,e){var n=null,r=null,a=!1,i="₪",o="",l="",s=null;if(t){var u=t.closed||{},c=t.yield||{};if(i=Tr(u.numeralDisplay)||Tr(c.netFlowsDisplay)||"₪",o=c.projectingLabel||c.prevMonthLabel||u.label||"",l=c.projectingMonthSlash||Rr(c.projectingLabel)||Rr(c.prevMonthLabel)||"",!l&&e&&(l=Rr(e)),null!=c.prevAmountExact){var d=Number(c.prevAmountExact);isFinite(d)&&(n=d/1e6)}if(null==n&&c.prevAmountDisplay){var f=Or(c.prevAmountDisplay);null!=f&&(n=f)}if(null==n)if(null!=u.numeralExact)n=Number(u.numeralExact)/1e6;else{var p=Or(u.numeralDisplay);null!=p&&(n=p)}if(null!=c.netFlowsValue)r=Number(c.netFlowsValue)/1e6;else{var h=Or(c.netFlowsDisplay);null!=h&&(r=h)}null!=r&&!0===c.netFlowsConfirmed&&(a=!0),s=c.lastResult||null}return{prev:n,net:r,netConfirmed:a,cur:i,prevMonthLabel:o,projectingMonthSlash:l,lastResult:s}}function Mr(t){var e=0,n=0,r=0,a=0,i=[];return(t||[]).forEach(function(t){if(t&&"number"==typeof t.amount&&t.amount>0&&t.direction&&t.settled){var o=Ja(t.label||t.name||t.lp||"?"),l="USD"===t.currency,s="redemption"===t.direction?"red":"dep";i.push({lp:o,amount:t.amount,currency:l?"USD":"ILS",kind:s}),l?"red"===s?a+=t.amount:r+=t.amount:"red"===s?n+=t.amount:e+=t.amount}}),i.sort(function(t,e){return e.amount-t.amount}),{ilsDep:e,ilsRed:n,usdDep:r,usdRed:a,netIls:e-n,netUsd:r-a,items:i}}function jr(t){var e=t&&Array.isArray(t.rows)?t.rows:Array.isArray(t)?t:[],n=t&&t.totals||{};return{rows:e,totals:n}}function Kr(t,e){return t&&"number"==typeof t.netConverted&&isFinite(t.netConverted)?t.netConverted:t&&"number"==typeof t.netIls&&isFinite(t.netIls)?t.netIls:e?e.netIls:0}function Ur(t,e,n){var r=String(null==t?"":t).replace(/[^0-9.]/g,""),a=parseFloat(r);if(isNaN(a)||a<=0||null==e||e<=0)return null;var i=!1;a>1e4&&(a/=1e6,i=!0);var o=null==n?0:n,l=a/(e+o)-1;return{closing:a,pct:l,rescaled:i}}function Br(t){var e=t>=0?"+":"";return e+(100*t).toFixed(2)+"%"}Ot=t.bind(n);var Hr=Pt,Gr=6e4,Vr={fetchedAt:0};function Wr(){var t=rt.schedule.value,e=s({fetching:!1,error:null,fetchedAt:Vr.fetchedAt}),n=e[0],r=e[1],a=s(0),o=(a[0],a[1]),u=s({}),c=u[0],d=u[1],f=s({}),p=f[0],h=f[1],v=s({}),m=v[0],g=v[1],_=l({}),y=s(null),b=y[0],$=y[1],w=l(null),k=s({}),x=k[0],S=k[1],A=s({}),C=A[0],N=A[1],D=l(null),E=l(0);function P(t){return function(e){var n={};for(var r in e)n[r]=e[r];return n[t]=!0,n}}function O(t){return function(e){var n={};for(var r in e)n[r]=e[r];return delete n[t],n}}function T(t){var e=++E.current;r(function(t){return{fetching:!0,error:null,fetchedAt:t.fetchedAt}}),Et.scheduleState({}).then(function(t){e===E.current&&(t?(rt.schedule.value=t,Vr.fetchedAt=Date.now(),r({fetching:!1,error:null,fetchedAt:Vr.fetchedAt})):r(function(t){return{fetching:!1,error:"schedule returned no state",fetchedAt:t.fetchedAt}}))}).catch(function(n){e===E.current&&(Ct("schedule:fetch:"+(t||""),n),r(function(t){return{fetching:!1,error:n&&n.message||String(n),fetchedAt:t.fetchedAt}}))})}function L(t){D.current&&clearTimeout(D.current),D.current=setTimeout(function(){D.current=null,T(t||"debounced")},600)}function I(t){var e=rt.schedule.value;e&&(rt.schedule.value={asOf:e.asOf,tasks:(e.tasks||[]).filter(function(e){return e.id!==t}),events:e.events||[],board:(e.board||[]).filter(function(e){return!("task"===e.kind&&e.id===t)})})}function R(t,e){var n=rt.schedule.value;n&&(rt.schedule.value={asOf:n.asOf,tasks:(n.tasks||[]).map(function(n){return n&&n.id===t?Object.assign({},n,{title:e}):n}),events:n.events||[],board:(n.board||[]).map(function(n){return n&&"task"===n.kind&&n.id===t?Object.assign({},n,{title:e}):n})})}function F(t){t&&t.id&&!c[t.id]&&!p[t.id]&&(d(P(t.id)),Et.completeTask(t.id).then(function(e){if(!e||!1===e.ok)return d(O(t.id)),void Hr("Could not complete: "+(e&&e.error||"unknown"),"error");I(t.id),d(O(t.id)),Hr("✓ "+(t.title||"Done"),"success"),L("completed")}).catch(function(e){d(O(t.id)),Ct("schedule:complete",e),Hr("Could not confirm completion, restored the task","error")}))}function M(t){var e=_.current;e[t]&&(clearTimeout(e[t]),delete e[t]),g(O(t))}function j(t){if(t&&t.id&&!c[t.id]&&!p[t.id]){if(!m[t.id])return g(P(t.id)),void(_.current[t.id]=setTimeout(function(){delete _.current[t.id],g(O(t.id))},3e3));M(t.id),h(P(t.id)),Et.removeTask(t.id).then(function(e){if(!e||!1===e.ok)return h(O(t.id)),void Hr("Could not delete: "+(e&&e.error||"unknown"),"error");I(t.id),h(O(t.id)),Hr("Deleted "+(t.title||"task"),"success"),L("deleted")}).catch(function(e){h(O(t.id)),Ct("schedule:delete",e),Hr(e&&e.rpcTimeout?"Could not confirm delete, restored the task":"Server error deleting task","error")})}}function K(t){if(t&&t.id&&!C[t.id]&&!c[t.id]&&!p[t.id]){var e=t.when?t.when.substring(0,10):"",n=document.createElement("input");n.type="date",n.value=e||"",n.className="sched-row__reschedule-input",n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var r=!1,a=!1;n.addEventListener("change",function(){r=!0;var a=n.value||"";i(),a&&a!==e&&(N(P(t.id)),Et.updateTask(t.id,{due:a}).then(function(e){N(O(t.id)),e&&!1!==e.ok?(Hr("Rescheduled to "+a,"success"),L("rescheduled")):Hr("Could not reschedule: "+(e&&e.error||"unknown"),"error")}).catch(function(e){N(O(t.id)),Ct("schedule:reschedule",e),Hr("Server error rescheduling","error")}))}),n.addEventListener("cancel",i),n.addEventListener("blur",function(){setTimeout(function(){r||i()},200)}),setTimeout(i,8e3);try{n.showPicker?n.showPicker():n.focus()}catch(t){n.focus()}}function i(){a||(a=!0,n.parentNode&&document.body.removeChild(n))}}function U(t){!t||!t.id||x[t.id]||c[t.id]||p[t.id]||b!==t.id&&(w.current={id:t.id,prev:t.title||"",done:!1},$(t.id))}function B(t){var e=w.current;if(e&&!e.done){e.done=!0,$(null);var n=String(null==t?"":t).trim();if(n&&n!==e.prev){var r=e.id,a=e.prev;R(r,n),S(P(r)),Et.updateTask(r,{title:n}).then(function(t){if(S(O(r)),!t||!1===t.ok)return R(r,a),void Hr("Rename failed: "+(t&&t.error||"unknown"),"error");Hr("Renamed","success"),L("renamed")}).catch(function(t){S(O(r)),R(r,a),Ct("schedule:rename",t),Hr("Server error renaming","error")})}}}function H(){var t=w.current;t&&!t.done&&(t.done=!0,$(null))}i(function(){var t=!!rt.schedule.value&&Vr.fetchedAt>0&&Date.now()-Vr.fetchedAt<Gr;t||T("mount");var e=setInterval(function(){"undefined"!=typeof document&&document.hidden||o(function(t){return t+1})},3e4);return function(){clearInterval(e),D.current&&clearTimeout(D.current);var t=_.current;for(var n in t)t[n]&&clearTimeout(t[n]);_.current={}}},[]);var G,V=Date.now();function W(e){var n=ea(t,e),r=n?ta(n.notes):null,a=!!m[e.id];return Ot`
        <span class="sched-row__acts">
          ${r?Ot`<a class="sched-row__open" href=${r} target="_blank" rel="noopener"
                      aria-label=${'Open the linked thread for "'+(e.title||"task")+'"'}>Open</a>`:null}
          ${"task"===e.kind&&e.id?Ot`<button type="button" class="sched-row__check"
                      disabled=${!!c[e.id]||!!p[e.id]}
                      aria-label=${'Mark "'+(e.title||"task")+'" done'}
                      onClick=${function(){F(e)}}>✓</button>`:null}
          ${"task"===e.kind&&e.id?Ot`<button type="button" class=${"sched-row__del"+(a?" is-armed":"")}
                      disabled=${!!c[e.id]||!!p[e.id]}
                      title=${a?"Click again to delete":""}
                      aria-label=${a?'Confirm delete "'+(e.title||"task")+'". Press again to delete, Escape to cancel':'Delete "'+(e.title||"task")+'"'}
                      onClick=${function(){j(e)}}
                      onKeyDown=${function(t){"Escape"===t.key&&m[e.id]&&(t.stopPropagation(),M(e.id))}}
                      >×</button>`:null}
        </span>`}function Y(t,e){var n="task"===t.kind;return n&&t.id&&b===t.id?Ot`
          <input type="text" class="sched-row__rename-input" dir="auto"
                 value=${t.title||""}
                 aria-label=${'Rename "'+(t.title||"task")+'"'}
                 ref=${function(t){t&&!t.dataset.focused&&(t.dataset.focused="1",t.focus(),t.select())}}
                 onKeyDown=${function(t){"Enter"===t.key?(t.preventDefault(),B(t.target.value)):"Escape"===t.key&&(t.stopPropagation(),H())}}
                 onBlur=${function(t){B(t.target.value)}} />`:n&&t.id?Ot`
          <span class=${"sched-row__title sched-row__title--edit"+(x[t.id]?" is-saving":"")}
                dir="auto" role="button" tabindex="0"
                title="Double-click to rename"
                aria-label=${'"'+(t.title||e)+'". Press Enter to rename'}
                onDblClick=${function(){U(t)}}
                onKeyDown=${function(e){"Enter"===e.key&&(e.preventDefault(),U(t))}}>${t.title||e}</span>`:Ot`<span class="sched-row__title" dir="auto">${t.title||e}</span>`}function q(t){var e="task"===t.kind,n=t.when?new Date(t.when):null,r=n&&n.getTime()<V,a=n?qr(t.when,V):t.dueRelative||"",i=Jr(a),o=e&&!!t.id,l=Ot`
        <span class=${"sched-row__time"+(r?" is-past":"")}>${n?zr(n):String.fromCharCode(8212)}</span>
        <span class="sched-row__date">${n?Zr(n,V):""}</span>`;return Ot`
        <div key=${t.kind+":"+t.id}
             class=${"sched-row"+(e&&t.isOverdue?" is-overdue":"")+(c[t.id]||p[t.id]?" is-completing":"")}>
          ${o?Ot`<span class=${"sched-row__timewrap sched-row__timewrap--edit"+(C[t.id]?" is-saving":"")}
                      role="button" tabindex="0" title="Click to reschedule"
                      aria-label=${'Reschedule "'+(t.title||"task")+'"'}
                      onClick=${function(){K(t)}}
                      onKeyDown=${function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),K(t))}}>${l}</span>`:Ot`<span class="sched-row__timewrap">${l}</span>`}
          <span class=${"sched-row__track sched-row__track--"+(e?"task":"event")}>
            <span aria-hidden="true">${e?"•":String.fromCharCode(9670)}</span>
            ${t.track||(e?"A":"M")}
          </span>
          <span class="sched-row__titlewrap">
            ${Y(t,"(untitled)")}
            ${t.platform?Ot`<span class="sched-row__platform">${t.platform}</span>`:null}
            ${e&&t.isOverdue?Ot`<span class="sched-row__overdue">overdue</span>`:null}
          </span>
          <span class=${"sched-row__rel"+(i?" is-"+i:"")}>${a}</span>
          ${W(t)}
        </div>`}function J(t){return Ot`
        <div key=${"u:"+t.id}
             class=${"sched-row sched-row--undated"+(c[t.id]||p[t.id]?" is-completing":"")}>
          <span class="sched-row__track sched-row__track--task">${t.track||"A"}</span>
          <span class="sched-row__titlewrap">
            ${Y(t,"(untitled task)")}
            ${t.platform?Ot`<span class="sched-row__platform">${t.platform}</span>`:null}
          </span>
          ${W(t)}
        </div>`}if(n.error&&!t)G=Ot`
        <div class="sched-error" role="alert">
          <div class="sched-error__title">Schedule unavailable</div>
          <div class="sched-error__msg">${n.error}</div>
          <button type="button" class="sched-error__retry" onClick=${function(){T("retry")}}>Retry</button>
        </div>`;else if(t){var X=Yr(t.board),z=X.dated,Q=X.undated;G=Ot`
        ${z.length||Q.length?z.length?z.map(q):Ot`<div class="sched-empty">Nothing scheduled in the next 7 days. Undated tasks below.</div>`:Ot`<div class="sched-empty">
              <div class="sched-empty__title">No tasks or events.</div>
            </div>`}
        ${Q.length?Ot`<div class="sched-undated">
              <div class="sched-undated__hdr">undated</div>
              ${Q.map(J)}
            </div>`:null}
      `}else G=Ot`
        <div class="sched-loading" aria-busy="true">
          <span class="sched-loading__spin" aria-hidden="true">↻</span> Loading Schedule
        </div>`;var Z="";if(t){Z=(t.tasks||[]).length+" tasks · "+(t.events||[]).length+" events";var tt=Xr(n.fetchedAt,V);tt&&(Z+="  "+tt)}else Z=n.error?"unavailable":"loading";return Ot`
      <div class="sched-view" data-state=${t?"live":n.error?"error":"loading"}>
        <header class="sched-view__hdr">
          <h2 class="sched-view__title">Departures</h2>
          <span class="sched-view__meta">${Z}</span>
          <button type="button" class=${"sched-view__refresh"+(n.fetching?" is-refreshing":"")}
                  title="Refresh schedule" aria-label="Refresh schedule"
                  onClick=${function(){T("manual")}}>↻</button>
        </header>
        <div class="sched-board">${G}</div>
      </div>
    `}function Yr(t){var e=[],n=[];return(Array.isArray(t)?t:[]).forEach(function(t){t&&t.when?e.push(t):t&&n.push(t)}),{dated:e,undated:n}}function qr(t,e){if(!t)return"";var n=new Date(t);if(isNaN(n.getTime()))return"";var r=null!=e?e:Date.now(),a=Math.round((n.getTime()-r)/6e4),i=Math.abs(a);if(i<1)return"now";if(i<60)return a>0?"in "+i+"m":i+"m ago";var o=Math.round(i/60);if(o<24)return a>0?"in "+o+"h":o+"h ago";var l=Math.round(o/24);return l<14?a>0?"in "+l+"d":l+"d ago":n.toISOString().substring(0,10)}function Jr(t){return"now"===t?"now":t&&/^in \d+m$/.test(t)?"soon":""}function Xr(t,e){if(!t)return"";var n=null!=e?e:Date.now(),r=n-t;if(r<9e4)return"";var a=Math.round(r/1e3);return a<120?"· "+a+"s stale":"· "+Math.round(a/60)+"m stale"}function zr(t){return String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")}var Qr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Zr(t,e){var n=new Date(null!=e?e:Date.now()),r=t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate();return r?"today":Qr[t.getDay()]+" "+t.getDate()+"/"+(t.getMonth()+1)}function ta(t){var e=String(t||"").match(/https?:\/\/[^\s"'<>)\]]+/i);return e?e[0]:null}function ea(t,e){if(!t||!Array.isArray(t.tasks)||!e||"task"!==e.kind)return null;for(var n=0;n<t.tasks.length;n++)if(t.tasks[n]&&t.tasks[n].id===e.id)return t.tasks[n];return null}Ot=t.bind(n);function na(t){var e=t.row,n=t.rowKey,r=t.editedAmount,a=t.actions||{},o=s(!1),u=o[0],c=o[1],d=s(!1),f=d[0],p=d[1],h=l(null),v=mi(e,r),m=v.isPending||null!=r&&""!==r;function g(t){t&&t.stopPropagation(),m&&c(!0)}function _(t){var e=String(t).replace(/[,\s]/g,"");return/^\d+(\.\d+)?$/.test(e)}function y(){var t=h.current,r=t?String(t.value).trim():"";if(!r||_(r))if(p(!1),c(!1),r){var i=r.replace(/[,\s]/g,""),o=parseFloat(i);a.commitAmount&&a.commitAmount(e,n,o)}else a.clearAmount&&a.clearAmount(n);else p(!0)}function b(t){"Enter"===t.key?(t.preventDefault(),t.target.blur()):"Escape"===t.key&&(t.preventDefault(),p(!1),c(!1))}i(function(){if(u&&h.current)try{h.current.focus(),h.current.select()}catch(t){}},[u]);var $="tx-amt"+(v.isPending?" is-pending":"")+(r?" tx-amt--edited":"")+(m?" tx-amt--editable":"");if(u){var w=r&&/\d/.test(String(r))?String(r):"",k="tx-amt-err-"+String(n||"row");return Ot`
        <div class=${$}>
          <input ref=${h} type="text" class="tx-amt__input" placeholder="amount…"
                 inputMode="decimal" value=${w}
                 aria-invalid=${f?"true":null}
                 aria-describedby=${f?k:null}
                 onBlur=${y} onKeyDown=${b}
                 onInput=${f?function(){p(!1)}:null}
                 onClick=${function(t){t.stopPropagation()}} />
          ${f?Ot`<span id=${k} class="tx-amt__err" role="alert">Numbers only. Not saved.</span>`:null}
        </div>`}var x="tx-amt__cc"+(!1===v.currencyKnown&&v.currencySymbol?" tx-amt__cc--unknown":""),S=!1===v.currencyKnown&&v.currencySymbol?"Unrecognized currency. Verify the unit before wiring.":null;return Ot`
      <div class=${$} role=${m?"button":null} tabindex=${m?"0":null}
           onClick=${g}
           onKeyDown=${m?function(t){"Enter"===t.key&&g(t)}:null}>
        <span class=${x} title=${S}>${v.currencySymbol||""}</span>
        <span class="tx-amt__val">${v.amtText}</span>
      </div>
    `}Ot=t.bind(n);function ra(){return Ot`
      <div class="tx-calm" role="status">
        <div class="tx-calm__mark" aria-hidden="true">✓</div>
        <div class="tx-calm__line">All caught up. No transfers in motion.</div>
        <div class="tx-calm__sub">New Gmail suggestions land here as they arrive.</div>
      </div>
    `}Ot=t.bind(n);function aa(t){var e=t.stats||{};function n(t,e,n){return Ot`
        <div class=${"tx-hero__cell"+(n?" tx-hero__cell--"+n:"")}>
          <span class="tx-hero__num">${null==e?0:e}</span>
          <span class="tx-hero__lbl">${t}</span>
        </div>`}return Ot`
      <div class="tx-hero" role="group" aria-label="Transfer counts">
        ${n("active",e.active)}
        ${n("in flight",e.inFlight)}
        ${n("awaiting Avi",e.awaitingAvi,"mustard")}
        ${n("ready",e.ready,"kelly")}
      </div>
    `}Ot=t.bind(n);var ia={drafted:{title:"Drafted",sub:"חדש",hairline:"ink",calm:null},atAvi:{title:"At Avi",sub:"נשלח לאבי",hairline:"mustard",calm:"no one awaiting Avi · all caught up"},approved:{title:"Approved",sub:"מאושר",hairline:"kelly",calm:"nothing ready to wire right now"},transferred:{title:"Transferred",sub:"הועברו",hairline:"sage",calm:null,collapsible:!0}},oa={};function la(t){var e={},n=[];return t.forEach(function(t){var r=Xa(t);e[r]||(e[r]=[],n.push(r)),e[r].push(t)}),n.map(function(t){return{name:t,rows:e[t]}})}function sa(t){var e=t.group,n=t.keyOf,r=t.actions,a=t.flaggedOf,i=t.onToggleFlag,o=t.marksOf,l=s(!1),u=l[0],c=l[1];if(1===e.rows.length){var d=e.rows[0],f=n(d);return Ot`<${Na} row=${d} rowKey=${f} actions=${r}
                    flagged=${a(f)} onToggleFlag=${i}
                    manualMarks=${o(f)} />`}var p=e.rows[0],h=n(p);return Ot`
      <${Na} row=${p} rowKey=${h} count=${e.rows.length} isParent=${!0}
         expanded=${u} onToggleGroup=${function(){c(!u)}}
         actions=${r} flagged=${a(h)} onToggleFlag=${i} manualMarks=${o(h)} />
      ${e.rows.slice(1).map(function(t){var e=n(t);return Ot`<${Na} row=${t} rowKey=${e} isChild=${!0} expanded=${u}
                      actions=${r} flagged=${a(e)} onToggleFlag=${i} manualMarks=${o(e)} />`})}
    `}function ua(t){var e=t.band,n=ia[e]||{title:e,hairline:"ink",calm:null},r=t.rows||[],a=t.keyOf||function(t){return t&&t.rowKey||""},i=s(function(){return Object.prototype.hasOwnProperty.call(oa,e)?oa[e]:"transferred"===e}),o=i[0];function l(t){oa[e]=t,i[1](t)}if(t.skeleton)return Ot`
        <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline} aria-busy="true">
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?Ot`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__rows">
            <div class="tx-row tx-row--skeleton"></div>
            <div class="tx-row tx-row--skeleton"></div>
          </div>
        </section>`;if(!r.length)return n.calm?Ot`
        <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline+" is-calm"}>
          <header class="tx-band__hdr">
            <h3 class="tx-band__title">${n.title}</h3>
            ${n.sub?Ot`<span class="tx-band__sub">${n.sub}</span>`:null}
          </header>
          <div class="tx-band__calm">${n.calm}</div>
        </section>`:null;var u=bi(e,r,a),c=la(u);function d(e){return!!t.flaggedOf&&t.flaggedOf(e)}function f(e){return t.marksOf?t.marksOf(e):null}var p=null;if(n.collapsible){var h=_i(u,function(t){var e=a(t);return e?R("tx:amt:"+e):null});p=u.length+" wires"+(h?" · "+h:"")}return Ot`
      <section class=${"tx-band tx-band--"+e+" tx-band--"+n.hairline+(n.collapsible&&o?" is-collapsed":"")}>
        <header class=${"tx-band__hdr"+(n.collapsible?" tx-band__hdr--toggle":"")}
                role=${n.collapsible?"button":null} tabindex=${n.collapsible?"0":null}
                onClick=${n.collapsible?function(){l(!o)}:null}
                onKeyDown=${n.collapsible?function(t){"Enter"!==t.key&&" "!==t.key||l(!o)}:null}>
          <h3 class="tx-band__title">${n.title}</h3>
          ${n.sub?Ot`<span class="tx-band__sub">${n.sub}</span>`:null}
          ${p?Ot`<span class="tx-band__summary">${p}</span>`:null}
          ${n.collapsible?Ot`<span class="tx-band__chevron">${o?"▾":"▴"}</span>`:Ot`<span class="tx-band__count">${u.length}</span>`}
        </header>
        ${n.collapsible&&o?null:Ot`<div class="tx-band__rows">
              ${c.map(function(e){return Ot`<${sa} group=${e} keyOf=${a} actions=${t.actions}
                              flaggedOf=${d} onToggleFlag=${t.onToggleFlag} marksOf=${f} />`})}
            </div>`}
      </section>
    `}Ot=t.bind(n);var ca="#B6AE99",da="#F2EDE0",fa=["","SENT (link sent)","SIGNED (LP completed)","WIRED (money landed)"],pa=[63,190,317];function ha(t){var e=!!t.sigDone,n=!!t.wireDone,r=t.color||"#1F5DB0",a=t.tooltipBase||"",i=t.manualMarks||null,o=[!0,e,n],l=e,s=e&&n;function u(t){var e=o[t-1],n=(e?"✓ ":"○ ")+fa[t];return a&&(n+="\n\n"+a),n}function c(e,n){n&&(n.preventDefault(),n.stopPropagation()),2===e&&t.onSign?t.onSign():3===e&&t.onWire&&t.onWire()}function d(t,e,n,a){return n?Ot`<line key=${a} x1=${t} y1="13" x2=${e} y2="13" stroke=${r} stroke-width="4" />`:Ot`<line key=${a} x1=${t} y1="13" x2=${e} y2="13" stroke=${ca} stroke-width="1.5" stroke-dasharray="3 4" />`}function f(t){var e=pa[t-1],n=o[t-1],a=2===t||3===t,i=u(t),l=a?"stop-hit stop-hit--clickable":"stop-hit",s=a?"stop-dot stop-dot--clickable":"stop-dot",d=a?fa[t]+(n?" · done. Activate to undo.":" · not done. Activate to mark."):null;return Ot`
        <g>
          <rect class=${l} data-stop=${t} x=${e-14} y="0" width="28" height="26"
                fill="transparent" role=${a?"button":null}
                tabindex=${a?"0":null}
                aria-label=${d}
                onClick=${a?function(e){c(t,e)}:null}
                onKeyDown=${a?function(e){"Enter"!==e.key&&" "!==e.key||c(t,e)}:null}>
            <title>${i}</title>
          </rect>
          ${n?Ot`<circle class=${s} data-stop=${t} cx=${e} cy="13" r="6.5" fill=${r}
                    onClick=${a?function(e){c(t,e)}:null}><title>${i}</title></circle>`:Ot`<circle class=${s} data-stop=${t} cx=${e} cy="13" r="6.5" fill=${da} stroke=${ca} stroke-width="2"
                    onClick=${a?function(e){c(t,e)}:null}><title>${i}</title></circle>`}
        </g>`}return Ot`
      <svg class="subway" viewBox="0 0 380 26" preserveAspectRatio="none">
        ${d(pa[0],pa[1],l,"s1")}
        ${d(pa[1],pa[2],s,"s2")}
        ${f(1)} ${f(2)} ${f(3)}
        ${t.overridden?Ot`<circle class="stop-override-mark" cx="362" cy="6" r="3.5" fill="#C24A56"><title>Wire marked locally. Click the dot to clear.</title></circle>`:null}
        ${i&&i.sig?Ot`<text class="stop-manual-mark" x=${pa[1]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"SIGN flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
        ${i&&i.wire?Ot`<text class="stop-manual-mark" x=${pa[2]} y="4.5" text-anchor="middle" font-size="7" font-weight="800" fill=${r}>M<title>${"WIRE flipped manually"+(i.lastTs?" · last "+String(i.lastTs).slice(0,10):"")}</title></text>`:null}
      </svg>
    `}Ot=t.bind(n);var va=6048e5;function ma(t){return"tx:sg:skip:"+t}function ga(t){var e=R(ma(t));if(!e)return!1;var n=parseInt(e,10);return!!n&&Date.now()-n<va}function _a(t){M(ma(t),String(Date.now()))}var ya={};function ba(t){return String(t||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $a(t,e){var n,r=String(t||""),a={},i=[];if((e||[]).forEach(function(t){var e=String(t||"").split(/\s+/)[0];e&&!a[e]&&(a[e]=!0,i.push(e))}),!i.length)return[{text:r,mark:!1}];try{n=new RegExp("("+i.map(ba).join("|")+")","g")}catch(t){return[{text:r,mark:!1}]}return r.split(n).map(function(t,e){return{text:t,mark:e%2==1}}).filter(function(t){return""!==t.text})}function wa(t){return"tx-sg-det-"+String(t||"").replace(/[^A-Za-z0-9_-]/g,"-")}function ka(t){var e=t.s||{},n=e.evidence&&"object"==typeof e.evidence?e.evidence:{},r=e.confidence||{};return Ot`
      <div class="tx-suggestion__details" id=${wa(e.id)}>
        ${r.reasoning&&r.reasoning.length?Ot`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Confidence</span>
              <span class="tx-suggestion__det-val">${(null!=r.score?r.score+" · ":"")+r.reasoning.join(", ")}</span>
            </div>`:null}
        ${n.matchedPhrases&&n.matchedPhrases.length?Ot`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Matched</span>
              <span class="tx-suggestion__det-val">
                ${n.matchedPhrases.map(function(t){return Ot`<span class="tx-pill tx-pill--pos">${t}</span> `})}
              </span>
            </div>`:null}
        ${n.negativeSignals&&n.negativeSignals.length?Ot`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Against</span>
              <span class="tx-suggestion__det-val">
                ${n.negativeSignals.map(function(t){return Ot`<span class="tx-pill tx-pill--neg">${t&&t.label||""}<span class="tx-pill__sub">${t&&t.kind||""}</span></span> `})}
              </span>
            </div>`:null}
        ${n.snippet?Ot`<div class="tx-suggestion__det-row tx-suggestion__det-row--snippet">
              <span class="tx-suggestion__det-lbl">Snippet</span>
              <span class="tx-suggestion__det-val tx-suggestion__det-snippet">
                ${$a(n.snippet,n.matchedPhrases).map(function(t){return t.mark?Ot`<mark>${t.text}</mark>`:t.text})}
              </span>
            </div>`:null}
        ${n.subject?Ot`<div class="tx-suggestion__det-row">
              <span class="tx-suggestion__det-lbl">Subject</span>
              <span class="tx-suggestion__det-val">${n.subject}</span>
            </div>`:null}
      </div>
    `}function xa(t){var e=t.rpc||{},n=t.toast||function(){},r=t.audit||function(){},a=t.patchRowKey||function(t){return t},i=t.isWired||function(){return!1},o=s({}),l=o[0],u=o[1],c=s({}),d=c[0],f=c[1],p=s({}),h=p[0],v=p[1],m=(t.suggestions||[]).filter(function(t){return!(!t||!t.id)&&(!l[t.id]&&(!ga(t.id)&&!i(t)))});if(!m.length)return null;m.forEach(function(t){if(!ya[t.id]){ya[t.id]=!0;try{r("shown",t)}catch(t){}}});var g=m.filter(function(t){return t.confidence&&"high"===t.confidence.tier});function _(t){v(Sa(h,t.id,!h[t.id]))}function y(r){r=a(r),r.rowKey?(f(Sa(d,r.id,!0)),n("Applying · "+(r.lpName||""),"success"),e.applyTransferSuggestion(r).then(function(e){if(f(Sa(d,r.id,!1)),e&&e.ok){var a=e.noop?"Already marked · "+(r.lpName||""):"Done · "+(r.lpName||"")+" marked wired";n(a,"success");try{V(r.rowKey),Y(r.rowKey)}catch(t){}t.onApplied&&t.onApplied(r),u(Sa(l,r.id,!0))}else n("Failed · "+(e&&e.error||"unknown"),"error")},function(t){f(Sa(d,r.id,!1)),n("Failed · "+(t&&t.message?t.message:"server error"),"error")})):n("Cannot match · "+(r.lpName||"")+" (no local row)","error")}function b(){var r=g.map(a).filter(function(t){return t.rowKey});r.length?(n("Applying "+r.length+" …","success"),e.applyMultipleTransferSuggestions(r).then(function(e){if(e&&Array.isArray(e.results)){var a={};e.results.forEach(function(t){t&&t.id&&t.result&&t.result.ok&&(a[t.id]=!0)});var i=Aa(l),o=0;r.forEach(function(e){if(a[e.id]){try{V(e.rowKey),Y(e.rowKey)}catch(t){}t.onApplied&&t.onApplied(e),i[e.id]=!0,o++}}),u(i);var s=r.length-o;o&&n("Applied "+o+(1===o?" wire":" wires"),"success"),s&&n("Batch · "+s+" failed, kept visible","error")}else n("Batch failed · "+(e&&e.error||"unknown"),"error")},function(t){n("Batch failed · "+(t&&t.message?t.message:"server error"),"error")})):n("No matchable high-confidence suggestions","error")}function $(t){_a(t.id),r("skipped",t),u(Sa(l,t.id,!0)),n("Hidden for 7 days · "+(t.lpName||""),"success")}return Ot`
      <div class="tx-suggestions" role="region" aria-label="Transfer suggestions">
        <div class="tx-suggestions__bar">
          <div class="tx-suggestions__summary">
            <b>${m.length}</b> ${1===m.length?"suggestion":"suggestions"}
            ${g.length?Ot` · <span class="tx-conf tx-conf--high tx-conf--inline">${g.length} high</span>`:null}
          </div>
          ${g.length>=2?Ot`<button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                     onClick=${b}>Approve all high (${g.length})</button>`:null}
        </div>
        ${m.map(function(t){var e=t.evidence&&"object"==typeof t.evidence?t.evidence:null,n=e?(e.fromName?e.fromName+" · ":"")+String(e.dateIso||"").slice(0,10):"string"==typeof t.evidence?t.evidence:"";e&&!n&&(n=e.subject||"");var r=e&&(e.subject||e.snippet)||"",a=e&&e.threadUrl||t.threadUrl||"",i=!!h[t.id];return Ot`
            <div class=${"tx-suggestion"+(d[t.id]?" is-applying":"")+(i?" is-expanded":"")}>
              <div class="tx-suggestion__body">
                <div class="tx-suggestion__lp">
                  <bdi>${t.lpName||t.label||"(unnamed)"}</bdi>
                  ${t.confidence&&t.confidence.tier?Ot`<span class=${"tx-conf tx-conf--"+t.confidence.tier}>${t.confidence.tier}</span>`:null}
                </div>
                <div class="tx-suggestion__change">${t.changeLabel||t.change||"mark wired"}</div>
                ${n||a?Ot`<div class="tx-suggestion__evidence"
                          onClick=${function(e){e&&e.target&&"A"===e.target.tagName||_(t)}}>
                      ${a&&/^https?:\/\//i.test(a)?Ot`<a href=${a} target="_blank" rel="noopener" title=${r}>${n||"open thread ↗"}</a>`:Ot`<span title=${r}>${n}</span>`}
                    </div>`:null}
              </div>
              <div class="tx-suggestion__actions">
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--approve"
                        onClick=${function(){y(t)}}>approve</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip"
                        onClick=${function(){$(t)}}>skip</button>
                <button type="button" class="tx-suggestion__btn tx-suggestion__btn--skip tx-suggestion__btn--ghost"
                        title="Explain confidence"
                        aria-expanded=${i?"true":"false"}
                        aria-controls=${wa(t.id)}
                        onClick=${function(){_(t)}}>Why?</button>
              </div>
              ${i?Ot`<${ka} s=${t} />`:null}
            </div>`})}
      </div>
    `}function Sa(t,e,n){var r=Aa(t);return r[e]=n,r}function Aa(t){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}Ot=t.bind(n);function Ca(t){var e=String(t||"");return/^https?:\/\//i.test(e)}function Na(t){var e=t.row,n=t.rowKey,r=t.count||1,a=t.actions||{},i=et(e,n),o=ii(e,n),l=ci(e),s=di(e),u=gi(e),c=n?R("tx:amt:"+n):null,d=!!n&&null!=H(n),f=si(e,n),p=e&&e.rowDeepLink,h="tx-row"+(t.isParent?" tx-row--parent":"")+(t.isChild?" tx-row--child":"")+(t.expanded?" is-expanded":"");function v(){t.isParent&&t.onToggleGroup&&t.onToggleGroup()}function m(e){e.stopPropagation(),t.onToggleFlag&&t.onToggleFlag(n)}return Ot`
      <div class=${h} hidden=${!(!t.isChild||t.expanded)||null}
           role=${t.isParent?"button":null}
           tabindex=${t.isParent?"0":null}
           aria-expanded=${t.isParent?t.expanded?"true":"false":null}
           onClick=${v}
           onKeyDown=${t.isParent?function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),v())}:null}>
        <div class="tx-lp">
          <div class="tx-name">
            <span class="tx-dir" style=${"color:"+l} aria-hidden="true">${s}</span>
            <bdi class="tx-name-bdi">${Xa(e)}</bdi>
            ${u?Ot`<span class="tx-kind">${u}</span>`:null}
            ${r>1?Ot`<span class="tx-count">×${r}</span>`:null}
            <span class=${"tx-flag"+(t.flagged?" is-on":"")}
                  role="button" tabindex="0"
                  title=${t.flagged?"Marked for review · click to clear":"Mark for review"}
                  onClick=${m}
                  onKeyDown=${function(t){"Enter"!==t.key&&" "!==t.key||m(t)}}>⚑</span>
            ${o&&o.label?Ot`<span class=${"tx-stage tx-stage--"+o.tier} title=${o.blocker}>${o.label}</span>`:null}
          </div>
          ${o&&o.blocker?Ot`<div class="tx-state tx-state--prose">
                     ${o.blocker}
                     ${f&&p&&Ca(p)?Ot`<a class="tx-triage" href=${p} target="_blank" rel="noopener"
                                title="Money moved before paperwork done. Triage." onClick=${function(t){t.stopPropagation()}}> ↗</a>`:null}
                   </div>`:null}
          ${e.note||e.subtitle||e.lastNote?Ot`<div class="tx-note"><span class="arr">→</span>${" "+(e.note||e.subtitle||e.lastNote)}</div>`:null}
        </div>

        <div class=${"tx-track"+(d?" tx-track--overridden":"")}
             onClick=${function(t){t.stopPropagation()}}>
          <${ha}
            sigDone=${i.signed}
            wireDone=${i.wired}
            color=${l}
            overridden=${d}
            manualMarks=${t.manualMarks}
            tooltipBase=${yi(e,n)}
            onSign=${function(){a.signDot&&a.signDot(e,n)}}
            onWire=${function(){a.wireDot&&a.wireDot(e,n)}} />
        </div>

        <${na} row=${e} rowKey=${n} editedAmount=${c} actions=${a} />
      </div>
    `}Ot=t.bind(n);function Da(t){return"transfers:payload:"+String(t||"current")}var Ea=[2e3,4e3,6e3];function Pa(t){var e=F(Da(t));return e?Math.max(0,Date.now()-(e.ts||0)):0}var Oa=function(){for(var t=void 0!==yn&&yn||[],e=0;e<t.length;e++)if(t[e]&&"transfer-tracker"===t[e].id)return t[e].href||null;return null}(),Ta={scrollY:null},La=["drafted","atAvi","approved","transferred"],Ia=["drafted","atAvi","approved"],Ra=String.fromCharCode(8212)+" departed "+String.fromCharCode(8212);function Fa(t,e){var n=mi(t,R("tx:amt:"+e)),r=n.amtText?(n.currencySymbol||"")+n.amtText:"",a=et(t,e),i=["Sent"];a.signed&&i.push("Signed"),a.wired&&i.push("Wired");var o=[Xa(t)];if(t.subKind)o.push(/רווחי\s*הון/.test(t.subKind)?"capital gains tax":/דמי\s*הצלחה/.test(t.subKind)?"success fee":t.subKind);else{var l=gi(t);l&&o.push(l)}return r&&o.push(r),o.push(i.join(", ")),o.join(" · ")}function Ma(t,e,n){var r=bi(t,e||[],n),a={},i=[];r.forEach(function(t){var e=Xa(t);a[e]||(a[e]=[],i.push(e)),a[e].push(t)});var o=[];return i.forEach(function(t){a[t].forEach(function(t){o.push(t)})}),o}function ja(t,e,n){var r=[];Ia.forEach(function(n){Ma(n,t[n],e).forEach(function(t){r.push(t)})});var a=Ma("transferred",t.transferred,e);if(!r.length&&!a.length)return{text:"",count:0};var i=["Transfers · "+(n||"")];return r.forEach(function(t){i.push(Fa(t,e(t)))}),a.length&&(i.push(Ra),a.forEach(function(t){i.push(Fa(t,e(t)))})),{text:i.join("\n"),count:r.length+a.length}}function Ka(){var t=rt.transfers.value,e=rt.suggestions.value,n=t&&t.monthLabel||"current",r=s(function(){if(t)return{state:"LIVE",data:t,watchdogPhase:null,ageMs:0};var e=R(Da(n));return e?{state:"CACHED",data:e,watchdogPhase:null,ageMs:Pa(n)}:{state:"LOADING",data:null,watchdogPhase:null,ageMs:0}}),a=r[0],o=r[1],u=s(0),c=(u[0],u[1]);function d(){c(function(t){return t+1})}var f=l([]),p=l(0);i(function(){if(t&&Array.isArray(t.rows)){try{M(Da(n),t)}catch(t){}o({state:"LIVE",data:t,watchdogPhase:null,ageMs:0})}},[t,n]),i(function(){try{B()}catch(t){}try{t&&tt({transfers:t})}catch(t){}},[]),i(function(){if("undefined"!=typeof window){var t=Ta.scrollY;if(null!=t&&t>0){try{window.scrollTo(0,t)}catch(t){}try{requestAnimationFrame(function(){try{window.scrollTo(0,t)}catch(t){}})}catch(t){}}return function(){try{Ta.scrollY=window.pageYOffset||0}catch(t){}}}},[]);var h=s(null),v=h[0],m=h[1],g=s(!1),_=g[0],y=g[1],b=l(0);function $(){f.current.forEach(function(t){try{clearTimeout(t)}catch(t){}}),f.current=[]}function w(){var t=st();p.current=t,$();var e=!(!a.data&&!R(Da(n)));o(function(t){return{state:e?"CACHED":"LOADING",data:t.data,watchdogPhase:null,ageMs:t.ageMs}}),f.current.push(setTimeout(function(){p.current===t&&o(function(t){return Ha(t,{watchdogPhase:"slow"})})},Ea[0])),f.current.push(setTimeout(function(){if(p.current===t){var e=R(Da(n));o(function(t){return e?{state:"STALE",data:e,watchdogPhase:"fallback",ageMs:Pa(n)}:Ha(t,{watchdogPhase:"fallback"})})}},Ea[1])),f.current.push(setTimeout(function(){p.current===t&&(R(Da(n))||a.data||o(function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:t.ageMs}}))},Ea[2])),Et.bootstrap({lite:!1}).then(function(e){if(p.current===t){if($(),!e||!e.transfers){var r=R(Da(n));return o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Pa(n)}:function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:0}}),void Ct("transfers:refresh:empty",new Error("no transfers in refetch"))}ut(e,t);try{M(Da(n),e.transfers)}catch(t){}o({state:"LIVE",data:e.transfers,watchdogPhase:null,ageMs:0})}},function(e){if(p.current===t){$();var r=R(Da(n));o(r?{state:"STALE",data:r,watchdogPhase:null,ageMs:Pa(n)}:function(t){return{state:"ERROR",data:t.data,watchdogPhase:"error",ageMs:0}}),Ct("transfers:refresh",e)}})}i(function(){var t=++b.current;try{Et.rowsWithManualEvents(30).then(function(e){b.current===t&&(m(e&&"object"==typeof e?e:{}),y(!0))},function(){b.current===t&&(m({}),y(!1))})}catch(t){}return function(){b.current++}},[]),i(function(){return $},[]);var k=l(null);k.current||(k.current=Di({rpc:Et,toast:Pt,toastUndo:Ba,audit:function(t,e){try{Et.recordTransferSuggestionEvent(t,e).catch(function(){})}catch(t){}},repaint:d,failBus:"undefined"!=typeof window&&window.AtriumReliability&&window.AtriumReliability.failBus||null,confirmSigClear:function(t){return"undefined"==typeof window||!window.confirm||window.confirm("Clear signed status"+(t?" for "+t:"")+"? This clears the signature cell in the tracker.")}}));var x=k.current,S=a.data||t||null,A=S&&Array.isArray(S.rows)?S.rows:[],C=v&&_?v:S&&S.manualMarks||{},N=pi(A,n),D=Va(),E=!1,P=N.map(function(t){var e=Wa(t,D);return Ya(t)&&(E=!0),{row:t,rowKey:e}});if(E)try{console.warn("[atriumX] a transfer row has no server rowKey; using unstable display-field key. Local overrides may orphan on edit.")}catch(t){}var O=new Map;function T(t){return O.has(t)?O.get(t):Wa(t,null)}P.forEach(function(t){O.set(t.row,t.rowKey)});var L={drafted:[],atAvi:[],approved:[],transferred:[]};P.forEach(function(t){var e=ui(t.row,t.rowKey);(L[e]||L.drafted).push(t.row)});var I={active:L.drafted.length+L.atAvi.length+L.approved.length,inFlight:L.drafted.length,awaitingAvi:L.atAvi.length,ready:L.approved.length},F=Ia.every(function(t){return 0===L[t].length});function j(t){return!!t&&q(t)}function K(t){t&&(J(t),d())}function U(t){return t&&C&&C[t]||null}function H(t){if(!t||t.rowKey)return t;var e=String(t.lpName||"").toLowerCase().trim();if(!e)return t;for(var n=-1,r=0,a=0;a<P.length;a++){var i=P[a].row,o=String(i.engName||i.label||i.name||i.lpName||"").toLowerCase().trim();o&&o===e&&(r++,n=a)}if(1!==r)return t;var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(l[s]=t[s]);return l.rowKey=P[n].rowKey,l}function V(t){if(!t||!t.rowKey)return!1;for(var e=0;e<P.length;e++)if(P[e].rowKey===t.rowKey)return et(P[e].row,t.rowKey).wired;return!1}function W(t){t&&t.rowKey&&(G(t.rowKey,3),d())}function Y(){var t=ja(L,T,n);t.text?mt(t.text,function(e){e?Pt("Copied · "+t.count+" transfers","success"):Pt("Copy failed","error")},"transfers:copy:fallback"):Pt("Nothing to copy","error")}var X=Ua(a,w),z="LOADING"===a.state&&!S;return Ot`
      <div class="tx-view" data-fetch-state=${a.state}>
        <header class="tx-view__hdr">
          <h2 class="tx-view__title">Transfers</h2>
          <span class="tx-view__month">${Ga(n)}</span>
          <button type="button" class="tx-view__copy" title="Copy the list as shown" aria-label="Copy transfers list" onClick=${Y}>⧉</button>
          <button type="button" class="tx-view__refresh" title="Refresh transfers" aria-label="Refresh transfers" onClick=${w}>↻</button>
        </header>

        <${aa} stats=${I} />

        ${X}

        <${xa}
          suggestions=${e||S&&S.suggestions||[]}
          rpc=${Et}
          toast=${Pt}
          audit=${function(t,e){try{Et.recordTransferSuggestionEvent(t,e).catch(function(){})}catch(t){}}}
          patchRowKey=${H}
          isWired=${V}
          onApplied=${W} />

        ${z?La.map(function(t){return Ot`<${ua} band=${t} skeleton=${!0} />`}):Ot`
            ${La.map(function(t){return Ot`<${ua} band=${t} rows=${L[t]} keyOf=${T}
                            actions=${x} flaggedOf=${j} onToggleFlag=${K} marksOf=${U} />`})}
            ${F&&0===L.transferred.length?Ot`<${ra} />`:null}
          `}

        ${Oa?Ot`<div class="tx-view__builder">
              <a class="tx-builder-link" href=${Oa} target="_blank" rel="noopener">Open the transfer-form builder ↗</a>
            </div>`:null}
      </div>
    `}function Ua(t,e){var n=t.state,r=t.watchdogPhase;return"CACHED"===n&&"slow"===r?Ot`<div class="tx-banner tx-banner--soft">showing cached · refreshing…</div>`:"LOADING"===n&&"slow"===r?Ot`<div class="tx-banner tx-banner--soft">fetching latest…</div>`:"STALE"===n?Ot`<div class="tx-banner tx-banner--warn">showing last cached · <button type="button" class="tx-banner__retry" onClick=${e}>retry ↻</button></div>`:"ERROR"===n?Ot`<div class="tx-banner tx-banner--err">transfers fetch slow · <button type="button" class="tx-banner__retry" onClick=${e}>retry ↻</button></div>`:null}function Ba(t,e,n){if("undefined"!=typeof document){var r=document.getElementById("toast-stack");if(r){var a=n||6e3,i=document.createElement("div");i.className="toast-stack__item is-success";var o=document.createElement("span");o.textContent=t,i.appendChild(o);var l=document.createElement("span");l.textContent=" · ",l.style.opacity="0.5",i.appendChild(l);var s=document.createElement("button");s.type="button",s.className="toast__undo",s.textContent="UNDO";var u=!1;s.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),c();try{e&&e()}catch(t){}}),i.appendChild(s),r.appendChild(i),requestAnimationFrame(function(){i.classList.add("is-show")}),setTimeout(c,a)}else Pt(t,"success")}function c(){if(!u){u=!0;try{i.classList.remove("is-show"),setTimeout(function(){i.parentNode&&i.parentNode.removeChild(i)},250)}catch(t){}}}}function Ha(t,e){var n={};for(var r in t)n[r]=t[r];for(var a in e)n[a]=e[a];return n}function Ga(t){var e=String(t||"").match(/^(\d{1,2})\/(\d{4})$/);if(!e)return String(t||"");var n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=parseInt(e[1],10)-1;return(n[r]||e[1])+" "+e[2]}function Va(){return{n:0}}function Wa(t,e){if(!t)return"";var n=t.rowKey||t.masterRid||t.rid||t.uid;if(n)return String(n);var r=Ja(t.label||t.name)+":"+(t.kind||"")+":"+(t.startDateIso||"");if(!t.startDateIso){var a=e||{n:0};r+=":#"+a.n++}return r}function Ya(t){return!t||!(t.rowKey||t.masterRid||t.rid||t.uid)}var qa={"עדי רמניק":"Adi Ramnik","אלמוג חזון":"Almog Hazon","אקסל":"EXCEL","תיגבור קבו":"TIGBUR"};function Ja(t){var e=String(null==t?"":t).trim();return e?e.indexOf("להשלים")>=0?"NAV":qa[e]?qa[e]:e:"NAV"}function Xa(t){if(!t)return"";if(t.engName&&String(t.engName).trim())return String(t.engName).trim();var e=String(null==(t.label||t.name)?"":t.label||t.name).trim(),n=Ja(t.label||t.name);return"NAV"===n&&!e&&t.identityPending?"NAV (pending identity)":n}var za=["paid to client","הועבר ללקוח","moved to trading","הועבר למסחר","בברוקר"];function Qa(t){for(var e=String(t||""),n=0;n<za.length;n++)if(e.indexOf(za[n])>=0)return!0;return!1}function Za(t){var e=String(t&&t.type||t&&t.kind||"").toLowerCase();return e.indexOf("הצטר")>=0||e.indexOf("join")>=0||e.indexOf("הגדל")>=0||e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0}var ti=["נשלח","נוצר","sent","emailed","נפתח","פתוח","בתהליך","open","viewed","clicked"];function ei(t){for(var e=String(t||""),n=0;n<ti.length;n++)if(e.indexOf(ti[n])>=0)return!0;return!1}function ni(t){var e=String(t&&t.amountText||"").trim();if(!e)return!1;if(t&&t.needsNavNumbers)return!1;if(e.indexOf("להשלים")>=0)return!1;var n=e.replace(/[₪$€£,\s]/g,""),r=parseFloat(n);return isFinite(r)?0!==r:/\d/.test(e)}var ri=["received in transit","התקבל במעבר","in transit"];function ai(t){for(var e=String(t||""),n=0;n<ri.length;n++)if(e.indexOf(ri[n])>=0)return!0;return!1}function ii(t,e){var n=et(t,e),r=String(t&&t.execStatus||"").toLowerCase(),a=ni(t);if(oi(t))return{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+String(t&&t.amountText||"").trim()+'". Avi sends this figure from the struck NAV.'};if(Qa(r)||n.wired&&a)return{stage:"done",label:"Done",tier:"done",blocker:"Settled. Money landed."};if(!n.signed){var i=String(t&&t.sigStatus||"").toLowerCase();return{stage:"awaiting-sig",label:"Awaiting signature",tier:"muted",blocker:ei(i)?"Link sent / opened, not signed yet.":"Not signed. No signature link evidence in the tracker yet."}}if(!a){var o=String(t&&t.amountText||"").trim();return o.indexOf("להשלים")>=0?{stage:"amount-missing",label:"Awaiting amount from Avi",tier:"amber",blocker:'Amount cell holds "'+o+'". Avi sends this figure from the struck NAV.'}:{stage:"amount-missing",label:"Amount missing in tracker",tier:"amber",blocker:o?'Amount cell holds "'+o+'". Fill the amount, then it can wire.':"Amount cell is empty. Fill the amount, then it can wire."}}return Za(t)&&ai(r)?{stage:"funds-in",label:"Funds received",tier:"ready",blocker:"Money received. Funds in the account."}:Za(t)&&!n.wired?{stage:"awaiting-funds",label:"Awaiting funds in",tier:"muted",blocker:"Signed. Money not received yet."}:{stage:"ready",label:"Ready to wire",tier:"ready",blocker:"Signed, amount set. Ready to wire."}}function oi(t){return!(!t||!0!==t.needsNavNumbers)||String(t&&t.amountText||"").indexOf("להשלים")>=0}function li(t,e){if(oi(t))return!1;var n=et(t,e);return n.signed&&n.wired}function si(t,e){var n=et(t,e);return n.wired&&!n.signed}function ui(t,e){if(li(t,e))return"transferred";var n=ii(t,e);return"ready"===n.stage||"funds-in"===n.stage?"approved":"amount-missing"===n.stage?si(t,e)||et(t,e).signed?"atAvi":"drafted":"awaiting-sig"===n.stage?si(t,e)?"atAvi":"drafted":"atAvi"}function ci(t){var e=String(t&&t.kind||"").toLowerCase();return e.indexOf("withdraw")>=0||e.indexOf("redem")>=0?"#C0202E":e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0||e.indexOf("subscrip")>=0?"#2E8540":"#1F5DB0"}function di(t){var e=String(t&&t.kind||"").toLowerCase();return e.indexOf("withdraw")>=0||e.indexOf("redem")>=0?"↑":e.indexOf("increase")>=0||e.indexOf("onboard")>=0||e.indexOf("sub")>=0||e.indexOf("subscrip")>=0?"↓":"·"}var fi=["January","February","March","April","May","June","July","August","September","October","November","December"];function pi(t,e){if(!Array.isArray(t))return[];var n=String(e||""),r=-1,a=-1,i=n.match(/^(\d{1,2})\/(\d{4})$/);if(i)r=parseInt(i[1],10)-1,a=parseInt(i[2],10);else{var o=n.match(/(\w+)\s+(\d{4})/);o&&(r=fi.indexOf(o[1]),a=parseInt(o[2],10))}if(r<0)return t.slice();var l=("0"+(r+1)).slice(-2)+"/"+a;return t.filter(function(t){if(t.monthTab)return t.monthTab===l;var e=String(t.startDateIso||t.startDate||"").match(/(\d{4})-(\d{2})/);if(!e)return!1;var n=parseInt(e[1],10),i=parseInt(e[2],10)-1;return n===a&&i===r})}var hi=/[֐-׿]/;function vi(t){var e=String(t||"").trim();return/^[\d.,\s]+$/.test(e)&&(e=""),!e||/ש["׳]?ח|שקל|ils|₪/i.test(e)?{symbol:"₪",known:!0}:/דולר|usd|\$/i.test(e)?{symbol:"$",known:!0}:/(יורו|אירו|eur|€)/i.test(e)?{symbol:"€",known:!0}:/(לירה|£|gbp)/i.test(e)?{symbol:"£",known:!0}:{symbol:e.slice(0,4),known:!1}}function mi(t,e){var n=null!=e&&""!==e?String(e):String(t&&t.amountText||"").trim();if(!n)return{amtText:"",isPending:!0,currencySymbol:""};if(n.indexOf("להשלים")>=0)return{amtText:"NAV",isPending:!0,currencySymbol:""};if(hi.test(n))return{amtText:"unparsed",isPending:!0,currencySymbol:""};if(!/\d/.test(n))return{amtText:n,isPending:!0,currencySymbol:""};var r=n.replace(/[₪$€£,\s]/g,""),a=parseFloat(r),i=isFinite(a)?Math.round(a).toLocaleString("en-US"):n,o=vi(t&&t.currency);return{amtText:i,isPending:!1,currencySymbol:o.symbol,currencyKnown:o.known}}function gi(t){var e=String(t&&t.kind||"").toLowerCase().trim();return e?e.indexOf("carry")>=0?"carry":e.indexOf("tax")>=0?"tax":e.indexOf("redem")>=0?"redemption":e.indexOf("sub")>=0?"sub":e.indexOf("fo-pay")>=0?"fo":e.indexOf("rev")>=0?"rev":e.slice(0,8):""}function _i(t,e){e=e||function(){return null};var n={};return(t||[]).forEach(function(t){var r=mi(t,e(t));if(r&&!r.isPending){var a=parseFloat(String(r.amtText).replace(/,/g,""));if(isFinite(a)){var i=r.currencySymbol||"₪";n[i]=(n[i]||0)+a}}}),Object.keys(n).map(function(t){var e=n[t];return e>=1e6?t+(e/1e6).toFixed(1)+"M":e>=1e3?t+Math.round(e/1e3)+"K":t+Math.round(e)}).join(" · ")}function yi(t,e){var n=String(t&&t.sigStatus||"").trim(),r=String(t&&t.execStatus||"").trim(),a=String(t&&t.amountText||"").trim(),i=/\d/.test(a),o=[];return n&&o.push("STATUS="+n),r&&o.push("EXEC="+r),i&&o.push("AMOUNT="+a),t&&t.isDone&&o.push("isDone=✓"),o.length?o.join(" · "):"no upstream signal yet"}function bi(t,e,n){var r=(e||[]).slice();function a(t,e){return String(Xa(t)).localeCompare(String(Xa(e)),"he")}return n=n||function(t){return Wa(t,null)},"atAvi"===t||"approved"===t?(r.sort(function(t,e){function r(t){var e=n(t),r=et(t,e);return r.signed&&!r.wired?0:r.signed||r.wired?2:1}var i=r(t),o=r(e);return i!==o?i-o:a(t,e)}),r):(r.sort(a),r)}Ae="undefined"!=typeof window&&window.AtriumOptimisticWrite||"undefined"!=typeof globalThis&&globalThis.AtriumOptimisticWrite||null;function $i(t){return Ae&&"function"==typeof Ae.optimisticWrite?Ae.optimisticWrite(t):Ne(t)}function Ne(t){t=t||{};var e=t.failBus||null,n=t.source||"write:"+(t.key||"unknown");try{t.applyLocal&&t.applyLocal()}catch(t){}try{t.audit&&t.audit("applied")}catch(t){}var r=!1;function a(){if(!r){r=!0;try{t.audit&&t.audit("confirmed")}catch(t){}try{t.onConfirm&&t.onConfirm()}catch(t){}try{e&&e.resolve&&e.resolve(n)}catch(t){}}}function i(a){if(!r){r=!0;try{t.audit&&t.audit("reverted")}catch(t){}try{t.onRevert&&t.onRevert(a)}catch(t){}if(e)try{e.raise(n,a||new Error("write reverted"),{severity:"station",retry:t.retry||null})}catch(t){}}}try{t.rpc(function(t){t&&t.ok?a():i(new Error(t&&t.message||"server rejected write"))},function(t){i(t)})}catch(t){i(t)}return{confirm:a,revert:i,isSettled:function(){return r}}}var wi=600,ki=new Map;function xi(t,e,n){var r=t+":"+e,a="number"==typeof n?n:Date.now(),i=ki.get(r);return null!=i&&a-i<wi||(ki.set(r,a),!1)}function Si(t){return String(t&&(t.engName||t.label||t.name||t.lpName)||"").trim()}var Ai="transfer-tracker",Ci={};function Ni(t,e,n){if(!t)return null;var r=n||e;return{raise:function(n,a,i){var o=a instanceof Error?a:new Error(String(null==a?"write reverted":a));try{o.message=e+" · "+(o.message||"write reverted")}catch(t){}return Ci[r]=!0,t.raise(Ai,o,i)},resolve:function(){for(var e in delete Ci[r],Ci)if(Object.prototype.hasOwnProperty.call(Ci,e))return!1;return!!t.resolve&&t.resolve(Ai)}}}function Di(t){t=t||{};var e=t.rpc||{},n=t.toast||function(){},r=t.toastUndo||function(){},a=t.audit||function(){},i=t.repaint||function(){},o=t.failBus||null,l=t.now||function(){return Date.now()},s=t.confirmSigClear||function(){return!0};function u(t,s){if(!s)return!1;if(xi(s,3,l()))return!1;var c=Si(t),d=H(s),f=et(t,null).wired,p=3===d||null==d&&f;if(p)return G(s,1),i(),r("Unmarked wired (local) · "+c,function(){G(s,3),i()},6e3),!0;var h={id:"manual-wire-"+s,rowKey:s,lpName:c,change:"manual_wire_set",confidence:{tier:"manual",score:0}};return $i({key:"tx:stop:"+s,applyLocal:function(){G(s,3),i()},audit:function(t){a(t||"applied",h)},rpc:function(t,n){e.setTransferStatus(s,"Wired").then(t,n)},onConfirm:function(){V(s),n("Synced · wired","success")},onRevert:function(t){V(s),i(),n("Save failed · "+Ei(t)+" · reverted","error")},retry:function(){u(t,s)},failBus:Ni(o,"wire "+s+(c?" ("+c+")":""),"transfers:wire:"+s),source:"transfers:wire:"+s}),r("Marked wired · "+c,function(){G(s,1),i()},6e3),!0}function c(t,u){if(!u)return!1;if(xi(u,2,l()))return!1;var d=Si(t),f=et(t,u).signed;if(f&&!s(d))return!1;var p=f?"":"הושלם",h=f?"0":"1",v=f?"הושלם":"",m=f?"1":"0",g={id:"manual-sig-"+u,rowKey:u,lpName:d,change:p?"manual_sig_set":"manual_sig_clear",confidence:{tier:"manual",score:0}},_=null;return $i({key:"tx:sig:"+u,applyLocal:function(){W(u,h),i()},audit:function(t){a(t||"applied",g)},rpc:function(t,n){_=e.setTransferSigStatus(u,p),_.then(t,n)},onConfirm:function(){Y(u),n("Synced · "+(p?"signed":"unsigned"),"success")},onRevert:function(t){Y(u),i(),n("Save failed · "+Ei(t)+" · reverted","error")},retry:function(){c(t,u)},failBus:Ni(o,"sign "+u+(d?" ("+d+")":""),"transfers:sign:"+u),source:"transfers:sign:"+u}),r((p?"Marked signed · ":"Unmarked · ")+d,function(){W(u,m),i();var t=_||Promise.resolve();function n(){e.setTransferSigStatus(u,v).then(function(t){t&&t.ok&&Y(u)},function(){})}t.then(n,n)},6e3),!0}function d(t,r,a){if(r)if("number"==typeof a&&isFinite(a)){M("tx:amt:"+r,a),n("Saved locally · "+a,"success"),i();var l={rowKey:r,amount:a,monthTab:t&&t.monthTab,kind:t&&t.kind,lp:Ja(t&&(t.label||t.name))},s="transfers:amount:"+r;e.setTransferAmount(l).then(function(t){if(t&&t.ok){if(j("tx:amt:"+r),n("Synced · "+a,"success"),i(),o)try{Ni(o,"amount "+r,s).resolve()}catch(t){}}else t&&"no-backend-writeback-yet"===t.reason||u(new Error(t&&t.message||t&&t.reason||"server rejected write"))},function(t){u(t)})}else n("Save failed · amount must be a number · not sent","error");function u(e){if(j("tx:amt:"+r),n("Save failed · "+Ei(e)+" · reverted","error"),i(),o)try{Ni(o,"amount "+r,s).raise(null,e,{severity:"station",retry:function(){d(t,r,a)}})}catch(t){}}}function f(t){t&&(j("tx:amt:"+t),i())}return{wireDot:u,signDot:c,commitAmount:d,clearAmount:f}}function Ei(t){return t&&t.message?t.message:"server error"}"function"==typeof c&&c(),"function"==typeof ct&&ct()}();
