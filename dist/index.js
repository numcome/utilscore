parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uc/H":[function(require,module,exports) {
module.exports={name:"utilscore",version:"0.0.26",description:"javascript 工具函数包",main:"index.js",scripts:{test:'echo "Error: no test specified" && exit 1',start:"parcel index.js",build:"parcel build index.js"},repository:{type:"git",url:"https://github.com/cgxqd/utilscore"},keywords:["utilscore","core","common","commonJS","common-js","util","utils","lib","libs","javascript"],author:"cgx",license:"ISC"};
},{}],"jcwa":[function(require,module,exports) {
"use strict";function r(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function e(r,e){return o(r)||n(r,e)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(r,e){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(f){o=!0,i=f}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return t}function o(r){if(Array.isArray(r))return r}function i(r){return f(r)||u(r)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function f(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.findPathByLeafId=exports.orderBy=exports.deepClone=void 0;var c=function r(e){if(null===e)return e;if(e instanceof Array)return e.map(function(e){return r(e)});if(e instanceof Object){var t={};return Object.keys(e).forEach(function(n){e[n]instanceof Date?t[n]=new Date(e[n].getTime()):t[n]=r(e[n])}),t}return e};exports.deepClone=c;var l=function(r,t,n){return i(r).sort(function(r,o){return t.reduce(function(t,i,a){if(0===t){var u=e(n&&"desc"===n[a]?[o[i],r[i]]:[r[i],o[i]],2),f=u[0],c=u[1];t=f>c?1:f<c?-1:0}return t},0)})};exports.orderBy=l;var s=function e(t,n,o){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=0;u<o.length;u++){var f,c=i(a);if(n==o[u][t])return c;if(c.push((r(f={},t,o[u][t]),r(f,"value",o[u].name),f)),o[u].children){var l=e(t,n,o[u].children,c);if(l)return l}}};exports.findPathByLeafId=s;
},{}],"QOLq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.minNum=exports.maxNum=exports.minNumBy=exports.maxNumBy=exports.unique=exports.uniqueBy=void 0;var n=function(n,t){return n.filter(function(n,r,u){return u.findIndex(function(r){return r[t]===n[t]})===r})};exports.uniqueBy=n;var t=function(n){return n.filter(function(n,t,r){return r.indexOf(n)===t})};exports.unique=t;var r=function(n,t){return n.find(function(r){return r[t]===Math.max.apply(Math,n.map(function(n){return n[t]}))})};exports.maxNumBy=r;var u=function(n,t){return n.find(function(r){return r[t]===Math.min.apply(Math,n.map(function(n){return n[t]}))})};exports.minNumBy=u;var e=function(n){return Math.max.apply(Math,n)};exports.maxNum=e;var i=function(n){return Math.min.apply(Math,n)};exports.minNum=i;
},{}],"ouKC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttleOnce=void 0;var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,o=null,r=!0;clearTimeout(o),r&&(r=!1,e.call(this,arguments)),o=setTimeout(function(){return r=!0},t)};exports.throttleOnce=e;
},{}],"i504":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getType=exports.isFunction=exports.isArray=exports.isRegExp=exports.isObject=exports.isSymbol=exports.isString=exports.isNumber=exports.isBoolean=exports.isUndefined=exports.isNull=void 0;var t=function(t){return"[object Null]"==Object.prototype.toString.call(t)};exports.isNull=t;var e=function(t){return"[object Undefined]"==Object.prototype.toString.call(t)};exports.isUndefined=e;var o=function(t){return"[object Boolean]"==Object.prototype.toString.call(t)};exports.isBoolean=o;var r=function(t){return"[object Number]"==Object.prototype.toString.call(t)};exports.isNumber=r;var n=function(t){return"[object String]"==Object.prototype.toString.call(t)};exports.isString=n;var i=function(t){return"[object Symbol]"==Object.prototype.toString.call(t)};exports.isSymbol=i;var c=function(t){return"[object Object]"==Object.prototype.toString.call(t)};exports.isObject=c;var p=function(t){return"[object RegExp]"==Object.prototype.toString.call(t)};exports.isRegExp=p;var s=function(t){return"[object Array]"==Object.prototype.toString.call(t)};exports.isArray=s;var l=function(t){return"[object Function]"==Object.prototype.toString.call(t)};exports.isFunction=l;var u=function(t){return Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLocaleLowerCase()};exports.getType=u;
},{}],"trYz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.URLSearchParams=exports.insertUrl=void 0;var e=require("./types"),r=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.replace(/:([a-zA-Z0-9_]{1,})/g,function(t,n){var o=encodeURIComponent(r[n]);return void 0===o&&new Error("URL ".concat(e," not find ").concat(n)),o})};exports.insertUrl=r;var t=function(r){if((0,e.isObject)(r))return Object.keys(r).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(JSON.stringify(r[e])))}).join("&");if((0,e.isString)(r)){var t={},n=r.match(/([\w\%\d]+\=[\w\%\d]+)/g);return n&&n.match(/([\w\%\d]+\=[\w\%\d]+)/g).forEach(function(e){var r=decodeURIComponent(e).split("=");try{t[r[0]+""]=JSON.parse(decodeURIComponent(r[1]))}catch(n){t[r[0]+""]=decodeURIComponent(r[1])}}),t}};exports.URLSearchParams=t;
},{"./types":"i504"}],"cF+e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toDecimalMark=exports.sumBy=exports.sum=exports.round=exports.randomNum=void 0;var r=function(r,t){return Math.floor(Math.random()*(t-r+1))+r};exports.randomNum=r;var t=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Number("".concat(Math.round("".concat(r,"e").concat(t)),"e-").concat(t))};exports.round=t;var n=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return[].concat(t).reduce(function(r,t){return r+t},0)};exports.sum=n;var e=function(r,t){return r.map("function"==typeof t?t:function(r){return r[t]}).reduce(function(r,t){return r+t},0)};exports.sumBy=e;var o=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=r.toLocaleString("en-US");return t?n.padStart(n.length+1,t):n};exports.toDecimalMark=o;
},{}],"aXX2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCounts=exports.randomHexColorCode=exports.maskRight=exports.maskLeft=exports.mask=void 0;var e=require("./array"),t=require("./types"),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"*",o=new RegExp("^(.{".concat(t,"})(.{").concat(r-t,"})(.").concat(r>=e.length?"?":"+",")$"));return e.replace(o,function(e,t,r,o){return t+r.replace(/./g,n)+o})};exports.mask=r;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return r(e,0,t,n)};exports.maskLeft=n;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*",o=e.length;return r(e,t>o?0:o-t,o,n)};exports.maskRight=o;var a=function(){var e=(1048575*Math.random()|0).toString(16);return"#"+(6!==e.length?(15*Math.random()|0).toString(16)+e:e)};exports.randomHexColorCode=a;var i=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o={},a=r.split("");return((0,t.isArray)(n)?(0,e.unique)(n):(0,t.isString)(n)?n.split(" "):(0,e.unique)(a)).map(function(e){var t=new RegExp("([`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？])","g"),n=e.replace(t,"\\$1"),a=r.match(new RegExp(n,"g"));o[e]=a?o[e]=a.length:0}),o};exports.getCounts=i;
},{"./array":"QOLq","./types":"i504"}],"jAV6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatHMS=exports.formatTime=void 0;var e=function(e,t){if(t){var o,n={"M+":(o=e instanceof Date?e:new Date(e)).getMonth()<9?"0"+(o.getMonth()+1):o.getMonth()+1,"d+":o.getDate()<10?"0"+o.getDate():o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds()<10?"0"+o.getSeconds():o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),"S+":o.getMilliseconds(),"D+":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"][o.getDay()]};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,"".concat(o.getFullYear()).substr(4-RegExp.$1.length))),n)new RegExp("(".concat(r,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:"\n00".concat(n[r]).substr("".concat(n[r]).length)));return t}var a=new Date(e);return a.getFullYear()+"-"+(a.getMonth()+1>9?a.getMonth()+1:"0"+(a.getMonth()+1))+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()};exports.formatTime=e;var t=function(e){return e>3600?Math.floor(e/3600)+"h"+Math.floor(e%3600/60)+"m"+e%60+"s":e>60?Math.floor(e/60)+"m"+e%60+"s":e%60+"s"};exports.formatHMS=t;
},{}],"5GKo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRate=void 0;var e=function(e){return"★★★★★☆☆☆☆☆".slice(5-e,10-e)};exports.getRate=e;
},{}],"EKJu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.graceChecker=void 0;var r={error:"",check:function(r,e){for(var t=0;t<e.length;t++){if(!e[t].checkType)return!0;if(!e[t].name)return!0;if(!e[t].errorMsg)return!0;if(!r[e[t].name])return this.error=e[t].errorMsg,!1;switch(e[t].checkType){case"string":if(!new RegExp("^.{"+e[t].checkRule+"}$").test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"int":if(!new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[t].checkRule+"}$").test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"between":if(!this.isNumber(r[e[t].name]))return this.error=e[t].errorMsg,!1;if((s=e[t].checkRule.split(","))[0]=Number(s[0]),s[1]=Number(s[1]),r[e[t].name]>s[1]||r[e[t].name]<s[0])return this.error=e[t].errorMsg,!1;break;case"betweenD":if(!/^-?[1-9][0-9]?$/.test(r[e[t].name]))return this.error=e[t].errorMsg,!1;if((s=e[t].checkRule.split(","))[0]=Number(s[0]),s[1]=Number(s[1]),r[e[t].name]>s[1]||r[e[t].name]<s[0])return this.error=e[t].errorMsg,!1;break;case"betweenF":var s;if(!/^-?[0-9][0-9]?.+[0-9]+$/.test(r[e[t].name]))return this.error=e[t].errorMsg,!1;if((s=e[t].checkRule.split(","))[0]=Number(s[0]),s[1]=Number(s[1]),r[e[t].name]>s[1]||r[e[t].name]<s[0])return this.error=e[t].errorMsg,!1;break;case"same":if(r[e[t].name]!=e[t].checkRule)return this.error=e[t].errorMsg,!1;break;case"notsame":if(r[e[t].name]==e[t].checkRule)return this.error=e[t].errorMsg,!1;break;case"email":if(!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"phoneno":if(!/^1[0-9]{10,10}$/.test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"zipcode":if(!/^[0-9]{6}$/.test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"reg":if(!new RegExp(e[t].checkRule).test(r[e[t].name]))return this.error=e[t].errorMsg,!1;break;case"in":if(!e[t].checkRule.some(function(s){return s===r[e[t].name]}))return this.error=e[t].errorMsg,!1;break;case"notnull":if(null==r[e[t].name]||r[e[t].name].length<1)return this.error=e[t].errorMsg,!1}}return!0},isNumber:function(r){return/^-?[1-9][0-9]?.?[0-9]*$/.test(r)}};exports.graceChecker=r;
},{}],"HCYu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.decode=exports.encode=void 0;var r=function(r){return r=r.replace(" ","+"),console.log("base64:".concat(r.length)),t(r)},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=function(){var r,o,t,a,d,h,c,C=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i="",f=0;for(C=n(C);f<C.length;)a=(r=C.charCodeAt(f++))>>2,d=(3&r)<<4|(o=C.charCodeAt(f++))>>4,h=(15&o)<<2|(t=C.charCodeAt(f++))>>6,c=63&t,isNaN(o)?h=c=64:isNaN(t)&&(c=64),i=i+e.charAt(a)+e.charAt(d)+e.charAt(h)+e.charAt(c);return i};exports.encode=o;var t=function(){var r,o,t,n,d,h,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",C="",i=0;for(c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<c.length;)r=e.indexOf(c.charAt(i++))<<2|(n=e.indexOf(c.charAt(i++)))>>4,o=(15&n)<<4|(d=e.indexOf(c.charAt(i++)))>>2,t=(3&d)<<6|(h=e.indexOf(c.charAt(i++))),C+=String.fromCharCode(r),64!==d&&(C+=String.fromCharCode(o)),64!==h&&(C+=String.fromCharCode(t));return C=a(C)};function n(r){r=r.replace(/\r\n/g,"\n");for(var e="",o=0;o<r.length;o++){var t=r.charCodeAt(o);t<128?e+=String.fromCharCode(t):t>127&&t<2048?(e+=String.fromCharCode(t>>6|192),e+=String.fromCharCode(63&t|128)):(e+=String.fromCharCode(t>>12|224),e+=String.fromCharCode(t>>6&63|128),e+=String.fromCharCode(63&t|128))}return e}function a(r){for(var e="",o=0,t=0,n=0,a=0;o<r.length;)(t=r.charCodeAt(o))<128?(e+=String.fromCharCode(t),o++):t>191&&t<224?(n=r.charCodeAt(o+1),e+=String.fromCharCode((31&t)<<6|63&n),o+=2):(n=r.charCodeAt(o+1),a=r.charCodeAt(o+2),e+=String.fromCharCode((15&t)<<12|(63&n)<<6|63&a),o+=3);return e}exports.decode=t;
},{}],"z8c5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.downFiles=void 0;var e=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log("文件下载")};exports.downFiles=e;
},{}],"f59V":[function(require,module,exports) {
String.prototype.match_all=function(t){for(var r=[],n="";null!=(n=t.exec(this));)r.push(n[1]);return r};
},{}],"Focm":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],r=O(require("./package.json")),t=y(require("./libs/object")),i=y(require("./libs/array")),n=y(require("./libs/function")),o=y(require("./libs/url")),u=y(require("./libs/types")),l=y(require("./libs/number")),s=y(require("./libs/string")),b=y(require("./libs/date")),a=y(require("./libs/other")),c=y(require("./libs/validator")),f=y(require("./libs/base64")),p=y(require("./libs/files"));function y(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};i.get||i.set?Object.defineProperty(r,t,i):r[t]=e[t]}return r.default=e,r}function O(e){return e&&e.__esModule?e:{default:e}}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(r){j(e,r,t[r])})}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}require("./libs/prototype");var v=q({},t,i,b,n,s,l,u,o,a,c,f,p,{version:r.default.version});for(var g in e.utilscore=v,v)exports[g]=v[g];
},{"./package.json":"uc/H","./libs/object":"jcwa","./libs/array":"QOLq","./libs/function":"ouKC","./libs/url":"trYz","./libs/types":"i504","./libs/number":"cF+e","./libs/string":"aXX2","./libs/date":"jAV6","./libs/other":"5GKo","./libs/validator":"EKJu","./libs/base64":"HCYu","./libs/files":"z8c5","./libs/prototype":"f59V"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map