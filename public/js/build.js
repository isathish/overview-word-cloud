"format register";

System.register("lib/modernizr.custom", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-elem_progress_meter-load
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("progressbar",function(){return document.createElement("progress").max!==undefined}),Modernizr.addTest("meter",function(){return document.createElement("meter").max!==undefined});
  }).call(System.global);  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});

System.register("lib/webfont", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
/*
 * Copyright 2014 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.5.3 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){var j=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var q=this;function r(a,b){var c=a.split("."),d=q;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function aa(a,b,c){return a.call.apply(a.bind,arguments)}
function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(l,arguments)}var u=Date.now||function(){return+new Date};function v(a,b){this.G=a;this.v=b||a;this.z=this.v.document}v.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function w(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function x(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var g=m,f=0;f<d.length;f+=1)if(b[e]===d[f]){g=j;break}g||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){g=m;for(f=0;f<c.length;f+=1)if(d[e]===c[f]){g=j;break}g||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ca(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return m}
function y(a){var b=a.v.location.protocol;"about:"==b&&(b=a.G.location.protocol);return"https:"==b?"https:":"http:"}function da(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=m;c.onload=function(){d||(d=j)};c.onerror=function(){d||(d=j)};w(a,"head",c)}
function z(a,b,c,d){var e=a.z.getElementsByTagName("head")[0];if(e){var g=a.createElement("script",{src:b}),f=m;g.onload=g.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(l),g.onload=g.onreadystatechange=l,"HEAD"==g.parentNode.tagName&&e.removeChild(g)};e.appendChild(g);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},d||5E3);return g}return l};function A(a,b,c){this.M=a;this.U=b;this.Aa=c}r("webfont.BrowserInfo",A);A.prototype.pa=n("M");A.prototype.hasWebFontSupport=A.prototype.pa;A.prototype.qa=n("U");A.prototype.hasWebKitFallbackBug=A.prototype.qa;A.prototype.ra=n("Aa");A.prototype.hasWebKitMetricsBug=A.prototype.ra;function B(a,b,c,d){this.d=a!=l?a:l;this.o=b!=l?b:l;this.aa=c!=l?c:l;this.f=d!=l?d:l}var ea=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;B.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")};
function C(a){a=ea.exec(a);var b=l,c=l,d=l,e=l;a&&(a[1]!==l&&a[1]&&(b=parseInt(a[1],10)),a[2]!==l&&a[2]&&(c=parseInt(a[2],10)),a[3]!==l&&a[3]&&(d=parseInt(a[3],10)),a[4]!==l&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,e)};function D(a,b,c,d,e,g,f,h,k,p,s){this.K=a;this.Ga=b;this.za=c;this.fa=d;this.Ea=e;this.ea=g;this.wa=f;this.Fa=h;this.va=k;this.da=p;this.j=s}r("webfont.UserAgent",D);D.prototype.getName=n("K");D.prototype.getName=D.prototype.getName;D.prototype.oa=n("za");D.prototype.getVersion=D.prototype.oa;D.prototype.ka=n("fa");D.prototype.getEngine=D.prototype.ka;D.prototype.la=n("ea");D.prototype.getEngineVersion=D.prototype.la;D.prototype.ma=n("wa");D.prototype.getPlatform=D.prototype.ma;D.prototype.na=n("va");
D.prototype.getPlatformVersion=D.prototype.na;D.prototype.ja=n("da");D.prototype.getDocumentMode=D.prototype.ja;D.prototype.ia=n("j");D.prototype.getBrowserInfo=D.prototype.ia;function E(a,b){this.a=a;this.I=b}var fa=new D("Unknown",new B,"Unknown","Unknown",new B,"Unknown","Unknown",new B,"Unknown",void 0,new A(m,m,m));
E.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=F(this);var b=G(this),c=C(b),d=l,e=l,g=l,f=l,h=H(this.a,/Trident\/([\d\w\.]+)/,1),k=I(this.I),d=-1!=this.a.indexOf("MSIE")?H(this.a,/MSIE ([\d\w\.]+)/,1):H(this.a,/rv:([\d\w\.]+)/,1),e=C(d);""!=h?(g="Trident",f=C(h)):(g="Unknown",f=new B,h="Unknown");a=new D("MSIE",e,d,g,f,h,a,c,b,k,new A("Windows"==a&&6<=e.d||"Windows Phone"==a&&8<=c.d,m,m))}else if(-1!=this.a.indexOf("Opera"))a:if(a="Unknown",b=H(this.a,
/Presto\/([\d\w\.]+)/,1),c=C(b),d=G(this),e=C(d),g=I(this.I),c.d!==l?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=H(this.a,/rv:([^\)]+)/,1),c=C(b)),-1!=this.a.indexOf("Opera Mini/"))f=H(this.a,/Opera Mini\/([\d\.]+)/,1),h=C(f),a=new D("OperaMini",h,f,a,c,b,F(this),e,d,g,new A(m,m,m));else{if(-1!=this.a.indexOf("Version/")&&(f=H(this.a,/Version\/([\d\.]+)/,1),h=C(f),h.d!==l)){a=new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m));break a}f=H(this.a,/Opera[\/ ]([\d\.]+)/,1);h=C(f);a=
h.d!==l?new D("Opera",h,f,a,c,b,F(this),e,d,g,new A(10<=h.d,m,m)):new D("Opera",new B,"Unknown",a,c,b,F(this),e,d,g,new A(m,m,m))}else/OPR\/[\d.]+/.test(this.a)?a=ga(this):/AppleWeb(K|k)it/.test(this.a)?a=ga(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new B,c="Unknown",d=G(this),e=C(d),g=m,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=H(this.a,/Firefox\/([\d\w\.]+)/,1),b=C(c),g=3<=b.d&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),f=H(this.a,/rv:([^\)]+)/,1),h=C(f),g||(g=1<h.d||1==h.d&&
9<h.o||1==h.d&&9==h.o&&2<=h.aa||f.match(/1\.9\.1b[123]/)!=l||f.match(/1\.9\.1\.[\d\.]+/)!=l),a=new D(a,b,c,"Gecko",h,f,F(this),e,d,I(this.I),new A(g,m,m))):a=fa;return a};function F(a){var b=H(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=H(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function G(a){var b=H(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=H(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=H(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=H(a.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=H(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function ga(a){var b=F(a),c=G(a),d=C(c),e=H(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=C(e),f="Unknown",h=new B,k="Unknown",p=m;/OPR\/[\d.]+/.test(a.a)?f="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?f="Chrome":/Silk\/\d/.test(a.a)?f="Silk":"BlackBerry"==b||"Android"==b?f="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?f="PhantomJS":-1!=a.a.indexOf("Safari")?f="Safari":-1!=a.a.indexOf("AdobeAIR")&&(f="AdobeAIR");"BuiltinBrowser"==f?k="Unknown":"Silk"==f?k=H(a.a,
/Silk\/([\d\._]+)/,1):"Chrome"==f?k=H(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?k=H(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==f?k=H(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==f?k=H(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==f&&(k=H(a.a,/PhantomJS\/([\d.]+)/,1));h=C(k);p="AdobeAIR"==f?2<h.d||2==h.d&&5<=h.o:"BlackBerry"==b?10<=d.d:"Android"==b?2<d.d||2==d.d&&1<d.o:526<=g.d||525<=g.d&&13<=g.o;return new D(f,h,k,"AppleWebKit",g,e,b,d,c,I(a.I),new A(p,536>g.d||536==g.d&&11>g.o,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function H(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function I(a){if(a.documentMode)return a.documentMode};function ha(a){this.ua=a||"-"}ha.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)};function J(a,b){this.K=a;this.V=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.V=parseInt(c[2],10))}J.prototype.getName=n("K");function K(a){return a.L+a.V}function ia(a){var b=4,c="n",d=l;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ka(a,b,c){this.c=a;this.m=b;this.O=c;this.h="wf";this.g=new ha("-")}function M(a){var b=ca(a.m,a.g.f(a.h,"active")),c=[],d=[a.g.f(a.h,"loading")];b||c.push(a.g.f(a.h,"inactive"));x(a.m,c,d);N(a,"inactive")}function N(a,b,c){if(a.O[b])if(c)a.O[b](c.getName(),K(c));else a.O[b]()};function la(){this.w={}};function O(a,b){this.c=a;this.C=b;this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}
function P(a,b){var c;c=[];for(var d=b.K.split(/,\s*/),e=0;e<d.length;e++){var g=d[e].replace(/['"]/g,"");-1==g.indexOf(" ")?c.push(g):c.push("'"+g+"'")}c=c.join(",");d="normal";e=b.V+"00";"o"===b.L?d="oblique":"i"===b.L&&(d="italic");a.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function Q(a){w(a.c,"body",a.s)}O.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};function ma(a,b,c,d,e,g,f,h){this.W=a;this.sa=b;this.c=c;this.q=d;this.C=h||"BESbswy";this.j=e;this.F={};this.T=g||5E3;this.Z=f||l;this.B=this.A=l;a=new O(this.c,this.C);Q(a);for(var k in R)R.hasOwnProperty(k)&&(P(a,new J(R[k],K(this.q))),this.F[R[k]]=a.s.offsetWidth);a.remove()}var R={Da:"serif",Ca:"sans-serif",Ba:"monospace"};
ma.prototype.start=function(){this.A=new O(this.c,this.C);Q(this.A);this.B=new O(this.c,this.C);Q(this.B);this.xa=u();P(this.A,new J(this.q.getName()+",serif",K(this.q)));P(this.B,new J(this.q.getName()+",sans-serif",K(this.q)));na(this)};function oa(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.F[R[d]]&&c===a.F[R[d]])return j;return m}
function na(a){var b=a.A.s.offsetWidth,c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.j.U&&oa(a,b,c)?u()-a.xa>=a.T?a.j.U&&oa(a,b,c)&&(a.Z===l||a.Z.hasOwnProperty(a.q.getName()))?S(a,a.W):S(a,a.sa):setTimeout(t(function(){na(this)},a),25):S(a,a.W)}function S(a,b){a.A.remove();a.B.remove();b(a.q)};function T(a,b,c,d){this.c=b;this.t=c;this.P=0;this.ba=this.Y=m;this.T=d;this.j=a.j}function pa(a,b,c,d,e){if(0===b.length&&e)M(a.t);else{a.P+=b.length;e&&(a.Y=e);for(e=0;e<b.length;e++){var g=b[e],f=c[g.getName()],h=a.t,k=g;x(h.m,[h.g.f(h.h,k.getName(),K(k).toString(),"loading")]);N(h,"fontloading",k);(new ma(t(a.ga,a),t(a.ha,a),a.c,g,a.j,a.T,d,f)).start()}}}
T.prototype.ga=function(a){var b=this.t;x(b.m,[b.g.f(b.h,a.getName(),K(a).toString(),"active")],[b.g.f(b.h,a.getName(),K(a).toString(),"loading"),b.g.f(b.h,a.getName(),K(a).toString(),"inactive")]);N(b,"fontactive",a);this.ba=j;qa(this)};T.prototype.ha=function(a){var b=this.t,c=ca(b.m,b.g.f(b.h,a.getName(),K(a).toString(),"active")),d=[],e=[b.g.f(b.h,a.getName(),K(a).toString(),"loading")];c||d.push(b.g.f(b.h,a.getName(),K(a).toString(),"inactive"));x(b.m,d,e);N(b,"fontinactive",a);qa(this)};
function qa(a){0==--a.P&&a.Y&&(a.ba?(a=a.t,x(a.m,[a.g.f(a.h,"active")],[a.g.f(a.h,"loading"),a.g.f(a.h,"inactive")]),N(a,"active")):M(a.t))};function U(a){this.G=a;this.u=new la;this.ya=new E(a.navigator.userAgent,a.document);this.a=this.ya.parse();this.Q=this.R=0}
U.prototype.load=function(a){var b=a.context||this.G;this.c=new v(this.G,b);var b=new ka(this.c,b.document.documentElement,a),c=[],d=a.timeout;x(b.m,[b.g.f(b.h,"loading")]);N(b,"loading");var c=this.u,e=this.c,g=[],f;for(f in a)if(a.hasOwnProperty(f)){var h=c.w[f];h&&g.push(h(a[f],e))}c=g;this.Q=this.R=c.length;a=new T(this.a,this.c,b,d);f=0;for(d=c.length;f<d;f++)e=c[f],e.H(this.a,t(this.ta,this,e,b,a))};
U.prototype.ta=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){var k=0==--e.R;setTimeout(function(){pa(c,a,b||{},d||l,k)},0)}):(a=0==--this.R,this.Q--,a&&0==this.Q&&M(b),pa(c,[],{},l,a))};function V(a,b){this.c=a;this.e=b;this.k=[]}V.prototype.D=function(a){return y(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
V.prototype.H=function(a,b){var c=this.e.id,d=this.c.v,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,k=c.fonts.length;d<k;++d){var p=c.fonts[d];e.k.push(new J(p.name,ia("font-weight:"+p.weight+";font-style:"+p.style)))}b(a)},z(this.c,this.D(c),function(a){a&&b(m)})):b(m)};V.prototype.load=function(a){a(this.k)};function W(a,b){this.c=a;this.e=b;this.k=[]}W.prototype.D=function(a){var b=y(this.c);return(this.e.api||b+"//use.typekit.net")+"/"+a+".js"};
W.prototype.H=function(a,b){var c=this.e.id,d=this.e,e=this.c.v,g=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var f=0;f<c.length;f+=1){var e=d[c[f]];if(e)for(var L=0;L<e.length;L+=1)g.k.push(new J(c[f],e[L]));else g.k.push(new J(c[f]))}b(a)})},z(this.c,this.D(c),function(a){a&&b(m)},2E3)):b(m)};W.prototype.load=function(a){a(this.k)};function X(a,b){this.c=a;this.e=b}X.prototype.load=function(a){var b,c,d=this.e.urls||[],e=this.e.families||[],g=this.e.testStrings||{};b=0;for(c=d.length;b<c;b++)da(this.c,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var h=f[1].split(","),k=0;k<h.length;k+=1)d.push(new J(f[0],h[k]));else d.push(new J(f[0]))}a(d,g)};X.prototype.H=function(a,b){return b(a.j.M)};function ra(a,b,c){this.N=a?a:b+sa;this.p=[];this.S=[];this.ca=c||""}var sa="//fonts.googleapis.com/css";ra.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));a=this.N+"?family="+b.join("%7C");0<this.S.length&&(a+="&subset="+this.S.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a};function ta(a){this.p=a;this.$=[];this.J={}}
var ua={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ta.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var g;var f=c[1];g=[];if(f)for(var f=f.split(","),h=f.length,k=0;k<h;k++){var p;p=f[k];if(p.match(/^[\w-]+$/)){p=xa.exec(p.toLowerCase());var s=void 0;if(p==l)s="";else{s=void 0;s=p[1];if(s==l||""==s)s="4";else var ja=va[s],s=ja?ja:isNaN(s)?"4":s.substr(0,1);s=[p[2]==l||""==p[2]?"n":wa[p[2]],s].join("")}p=s}else p="";p&&g.push(p)}0<g.length&&(e=g);3==c.length&&
(c=c[2],g=[],c=!c?g:c.split(","),0<c.length&&(c=ua[c[0]])&&(this.J[d]=c))}this.J[d]||(c=ua[d])&&(this.J[d]=c);for(c=0;c<e.length;c+=1)this.$.push(new J(d,e[c]))}};function Y(a,b){this.a=(new E(navigator.userAgent,document)).parse();this.c=a;this.e=b}var ya={Arimo:j,Cousine:j,Tinos:j};Y.prototype.H=function(a,b){b(a.j.M)};Y.prototype.load=function(a){var b=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=j){var c=t(this.X,this,a),d=function(){b.z.body?c():setTimeout(d,0)};d()}else this.X(a)};
Y.prototype.X=function(a){for(var b=this.c,c=new ra(this.e.api,y(b),this.e.text),d=this.e.families,e=d.length,g=0;g<e;g++){var f=d[g].split(":");3==f.length&&c.S.push(f.pop());var h="";2==f.length&&""!=f[1]&&(h=":");c.p.push(f.join(h))}d=new ta(d);d.parse();da(b,c.f());a(d.$,d.J,ya)};function Z(a,b){this.c=a;this.e=b;this.k=[]}Z.prototype.H=function(a,b){var c=this,d=c.e.projectId,e=c.e.version;if(d){var g=c.c.v;z(this.c,c.D(d,e),function(f){if(f)b(m);else{if(g["__mti_fntLst"+d]&&(f=g["__mti_fntLst"+d]()))for(var e=0;e<f.length;e++)c.k.push(new J(f[e].fontfamily));b(a.j.M)}}).id="__MonotypeAPIScript__"+d}else b(m)};Z.prototype.D=function(a,b){var c=y(this.c),d=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
Z.prototype.load=function(a){a(this.k)};var $=new U(q);$.u.w.custom=function(a,b){return new X(b,a)};$.u.w.fontdeck=function(a,b){return new V(b,a)};$.u.w.monotype=function(a,b){return new Z(b,a)};$.u.w.typekit=function(a,b){return new W(b,a)};$.u.w.google=function(a,b){return new Y(b,a)};q.WebFont||(q.WebFont={},q.WebFont.load=t($.load,$),q.WebFontConfig&&$.load(q.WebFontConfig));})(this,document);


  this["WebFont"] = WebFont;
  }).call(System.global);  return System.get("@@global-helpers").retrieveGlobal(__module.id, "WebFont");
});

System.register("lib/selectonic", ["lib/jquery"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["lib/jquery"]);
  (function() {
/*! Selectonic - v0.6.0 - 2014-07-19
* https://github.com/anovi/selectonic
* Copyright (c) 2014 Alexey Novichkov; Licensed MIT */

!function(a,b,c){"use strict";function d(b,c,d){return this._schema=b,this._options={},this._callbacks={},this.set(a.extend({},c,d||{}),!0),this}function e(b,c){this._name=e.pluginName,this.el=b,this.$el=a(b),this.ui={},this._selected=0,this._isEnable=!0,this._keyModes={},this.options=new d(l,k,c);var f=this;this.options.on("filter",function(a){return f._itemsSelector="."+f.options.get("listClass")+" "+a,a}),this.options.on("autoScroll",function(a){return f._setScrolledElem(a),a}),this._itemsSelector="."+this.options.get("listClass")+" "+this.options.get("filter"),this._setScrolledElem(this.options.get("autoScroll")),this._init()}var f=a.fn.outerHeight?"outerHeight":"height";a.fn.jquery||a.fn.zepto||(a.fn.zepto=!0);var g=function(a,b,c){var d,e,f,g=null,h=0;c=c||{};var i=function(){h=c.leading===!1?0:new Date,g=null,f=a.apply(d,e)};return function(){var j=new Date;h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},h=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},i=function(a,b){return a instanceof Array?h.call(a,b)>=0:!1},j=a(b.document);d.isCorrectType=function(a,b){var c=typeof a,d=null===a&&b.nullable;return b.type instanceof Array?i(b.type,c)||d:c===b.type||d},d.prototype.set=function(b,e){var f,g;for(f in b){var h=b[f],j=this._schema[f];if(j!==c){if(j.unchangeable&&!e)throw new Error('Option "'+f+'" could be setted once at the begining.');if(!d.isCorrectType(h,j)){var k='Option "'+f+'" must be '+(j.type instanceof Array?j.type.join(", "):j.type)+(j.nullable?" or null.":".");throw new TypeError(k)}if(j.values&&!i(j.values,h))throw new RangeError('Option "'+f+'" only could be in these values: "'+j.values.join('", "')+'".')}}for(f in b)(g=this._callbacks[f])&&(b[f]=g.call(this,b[f]));this._options=a.extend(this._options,b)},d.prototype.get=function(b){return b?this._options[b]:a.extend({},this._options)},d.prototype.on=function(a,b){this._callbacks[a]=b},d.prototype.off=function(a){this._callbacks[a]&&delete this._callbacks[a]};var k={filter:"> *",multi:!0,mouseMode:"standard",focusBlur:!1,selectionBlur:!1,handle:null,textSelection:!1,focusOnHover:!1,keyboard:!1,keyboardMode:"select",autoScroll:!0,loop:!1,preventInputs:!0,listClass:"j-selectable",focusClass:"j-focused",selectedClass:"j-selected",disabledClass:"j-disabled",create:null,before:null,focusLost:null,select:null,unselect:null,unselectAll:null,stop:null,destroy:null},l={filter:{type:"string"},multi:{type:"boolean"},mouseMode:{type:"string",values:["standard","mouseup","toggle"]},focusBlur:{type:"boolean"},selectionBlur:{type:"boolean"},handle:{type:"string",nullable:!0},textSelection:{type:"boolean"},focusOnHover:{type:"boolean"},keyboard:{type:"boolean"},keyboardMode:{type:"string",values:["select","toggle"]},autoScroll:{type:["boolean","string"]},loop:{type:"boolean"},preventInputs:{type:"boolean"},listClass:{type:"string",unchangeable:!0},focusClass:{type:"string",unchangeable:!0},selectedClass:{type:"string",unchangeable:!0},disabledClass:{type:"string",unchangeable:!0},create:{type:"function",nullable:!0},before:{type:"function",nullable:!0},focusLost:{type:"function",nullable:!0},select:{type:"function",nullable:!0},unselect:{type:"function",nullable:!0},unselectAll:{type:"function",nullable:!0},stop:{type:"function",nullable:!0},destroy:{type:"function",nullable:!0}};e.pluginName="selectonic",e.keyCode={DOWN:40,UP:38,SHIFT:16,END:35,HOME:36,PAGE_DOWN:34,PAGE_UP:33,A:65,SPACE:32,ENTER:13},e.getDataObject=function(b){return a(b).data("plugin_"+e.pluginName)},e.prototype._init=function(){this.$el.addClass(this.options.get("listClass")),this._bindEvents(),this.$el.data("plugin_"+e.pluginName,this),this._trigger("create")},e.prototype._setScrolledElem=function(b){var c;if(null===b||!1===b)return void delete this._scrolledElem;if("string"==typeof b){if(c=a(b),!(c.length>0))throw new Error('There are no elements that matches to selector - "'+b+'"');return void(this._scrolledElem=c[0])}this._scrolledElem=this.el},e.prototype._cancel=function(b,c){if(!c.wasCancelled){c.isCancellation=this._isPrevented=!0;var d=this;a.each(a(c.changedItems),function(e,f){c.prevItemsStates[e]?d._select(b,c,a(f),!0):d._unselect(b,c,a(f),!0)}),c.prevFocus&&this._setFocus(c.prevFocus),delete c.isCancellation,c.wasCancelled=!0}},e.prototype._bindEvents=function(){var a=this,b=this._name;this._mouseEvent=function(b){a._isEnable&&1===b.which&&a._mouseHandler.call(a,b)},this._keyboardEvent=function(b){a.options.get("keyboard")&&a._isEnable&&a._keyHandler.call(a,b)},this._selectstartEvent=function(){return a.options.get("textSelection")?void 0:!1},this._mousemoveEvent=g(function(b){a._isEnable&&a.options&&a.options.get("focusOnHover")&&a._mousemoveHandler.call(a,b)},20),j.on("keydown."+b,this._keyboardEvent),j.on("keyup."+b,this._keyboardEvent),j.on("mousemove."+b,this._mousemoveEvent),j.on("click."+b,this._mouseEvent),j.on("mousedown."+b,this._mouseEvent),j.on("mouseup."+b,this._mouseEvent),this.$el.on("selectstart."+b,this._selectstartEvent)},e.prototype._unbindEvents=function(){var a=this._name;j.off("keydown."+a,this._keyboardEvent),j.off("keyup."+a,this._keyboardEvent),j.off("mousemove."+a,this._mousemoveEvent),j.off("click."+a,this._mouseEvent),j.off("mousedown."+a,this._mouseEvent),j.off("mouseup."+a,this._mouseEvent),this.$el.off("selectstart."+a,this._selectstartEvent)},e.prototype._getTarget=function(c){for(var d,e,f,g=c.target,h=this.options.get("handle");null!==g&&g!==this.el;)d=a(g),d.context=b.document,d.is(this._itemsSelector)&&(e=g),h&&d.is(h)&&(f=g),g=g.parentNode;return h&&g&&f?e:!h&&g?e:null},e.prototype._getItems=function(c,d,e){var f;switch(d){case"next":case"prev":for(var g=e.jquery?e:a(e),h=a.fn[d];;){if(g=h.call(g),0===g.length)break;if(g.context=b.document,g.is(this._itemsSelector))return g}return null;case"pageup":case"pagedown":return this._getNextPageElem(c,d,e);case"first":return f=c.allItems?c.allItems:this.$el.find(this.options.get("filter")),c.allItems=f,f.first();case"last":return f=c.allItems?c.allItems:this.$el.find(this.options.get("filter")),c.allItems=f,f.last();default:return f=c.allItems?c.allItems:this.$el.find(this.options.get("filter")),c.allItems=f,f}},e.prototype._getNextPageElem=function(c,d,e){var g,h,i,j,k,l=c.isShiftPageRange,m=this._scrolledElem||this.el,n=m.clientHeight,o=a(b)[f](),p=a(e),q=n>o,r=q?o:n,s=p[f](),t=s,u=s,v="pageup"===d?"prev":"next";for(l&&(v="pageup"===d?-1:1,j=this._getItems(c),c.rangeStart=i=j.index(e));;){if(l?(i+=v,k=i>=0?j.eq(i):null,g=k&&k.length>0?k:null):g=this._getItems(c,v,p),!g&&p[0]===e)break;if(!g)return l&&(c.rangeEnd=i-v),p;if(h=g[f](),u+=h,u>r)return t+h>r?(l&&(c.rangeEnd=i),g):(l&&(c.rangeEnd=i-v),p);t=h,p=g}return null},e.prototype._trigger=function(a,b,c){var d,e=this.options.get(a);if(e){if("create"===a||"destroy"===a)return e.call(this.$el);switch(d={},c.target&&(d.target=c.target),this.ui.focus&&(d.focus=this.ui.focus),a){case"select":d.items=c.selected;break;case"unselectAll":case"unselect":d.items=c.unselected;break;case"stop":c.wasCancelled||(d.items=c.changedItems)}e.call(this.$el,b||null,d)}},e.prototype._controller=function(a,b){var d;return b.changedItems=[],b.prevItemsStates=[],delete this._isPrevented,this._trigger("before",a,b),this._isPrevented?(this._cancel(a,b),void this._stop(a,b)):(b.wasSelected=this._selected>0,b.target&&b.isTargetWasSelected===c&&(b.isTargetWasSelected=this._getIsSelected(b.target)),b.isRangeSelect&&b.isTargetWasSelected&&b.target===this.ui.focus||(b.isRangeSelect?this._perfomRangeSelect(a,b):b.isMultiSelect?(d=b.isTargetWasSelected?this._unselect:this._select,d.call(this,a,b,b.items)):b.target&&!b.items&&"mouseover"===a.type||(b.target&&b.items?(this._selected&&1===this._selected&&this._getIsSelected(this.ui.focus)?this._unselect(a,b,this.ui.focus,b.isTargetWasSelected):this._selected&&this._unselectAll(a,b),this._select(a,b,b.items,b.isTargetWasSelected)):!b.target&&this._selected>0&&this.options.get("selectionBlur")&&this._unselectAll(a,b))),!this._selected&&b.wasSelected&&this._trigger("unselectAll",a,b),b.prevFocus=this.ui.focus?this.ui.focus:null,!b.target&&this.options.get("focusBlur")?this._blur(a,b):b.target&&!b.wasCancelled&&this._setFocus(b.target),void this._stop(a,b))},e.prototype._perfomRangeSelect=function(a,b){var c,d,e,f,g,h,i,j=b.rangeStart<b.rangeEnd,k=this._getItems(b),l=j?b.rangeStart:b.rangeEnd,m=j?b.rangeEnd:b.rangeStart;b.isNewSolidSelection?(d=k.slice(0,l),d=d.add(k.slice(m+1)),this._unselect(a,b,d),this._select(a,b,b.items)):this.ui.solidInitialElem&&!b.isTargetWasSelected&&(e=b.items.index(this.ui.solidInitialElem))>=0?(e=j?b.rangeStart+e:b.rangeEnd+e,f=e<b.rangeStart,g=b.rangeStart<e,h=e<b.rangeEnd,i=b.rangeEnd<e,(!h&&f||!i&&g)&&(d=g?k.slice(l,e):k.slice(e+1,m+1),d.length>0&&this._unselect(a,b,d)),(i&&!g||h&&!f)&&(d=i?k.slice(l,e):k.slice(e+1,m+1),d.length>0&&this._select(a,b,d))):(c=b.isTargetWasSelected?this._unselect:this._select,c.call(this,a,b,b.items))},e.prototype._changeItemsStates=function(b,c,d){var e=c>0,f=[],g=this;a(b).each(function(b,h){var i=g._getIsSelected(h),j=e?!i:i,k=h===d.target&&d.isTargetWasSelected;(!k||e||d.isMultiSelect||d.isRangeSelect)&&(j&&(d.isCancellation||(f.push(h),d.prevItemsStates.push(i)),g._selected+=c),a(h).toggleClass(g.options.get("selectedClass"),e))}),d.isCancellation||(d[e?"selected":"unselected"]=a(f),d.changedItems=d.changedItems.concat(f))},e.prototype._select=function(a,b,c,d){this._changeItemsStates(c,1,b),d||this._trigger("select",a,b),this._isPrevented&&!b.isCancellation&&this._cancel(a,b)},e.prototype._unselect=function(a,b,c,d){this._changeItemsStates(c,-1,b),d||this._trigger("unselect",a,b),this._isPrevented&&!b.isCancellation&&this._cancel(a,b)},e.prototype._unselectAll=function(a,b){var c,d;this._selected&&0!==this._selected&&(d=this._getItems(b),c=b.target&&b.isTargetWasSelected&&1===this._selected,this._unselect(a,b,d,c))},e.prototype._multiSelect=function(b){return b.isMultiSelect=!0,a(b.target)},e.prototype._rangeSelect=function(b){if(b.isRangeSelect=!0,b.target===this.ui.focus)return a(b.target);var c=b.allItems?b.allItems:this._getItems(b),d=c.index(b.target),e=c.index(this.ui.focus),f=e>d?c.slice(d,e):c.slice(e,d);return f.push(e>d?c[e]:c[d]),b.allItems=c,b.rangeStart=e,b.rangeEnd=d,f},e.prototype._getIsSelected=function(b){var c=this.options.get();return a(b).length<=1?a(b).hasClass(c.selectedClass):a.map(a(b),function(b){return a(b).hasClass(c.selectedClass)})},e.prototype._blur=function(b,c,d){!d&&this.ui.focus&&this._trigger("focusLost",b,c),this.ui.focus&&(a(this.ui.focus).removeClass(this.options.get("focusClass")),delete this.ui.focus)},e.prototype._setFocus=function(b){return b?(this.ui.focus&&a(this.ui.focus).removeClass(this.options.get("focusClass")),this.ui.focus=b,a(this.ui.focus).addClass(this.options.get("focusClass")),this.ui.focus):void 0},e.prototype._stop=function(a,b){this._trigger("stop",a,b),this._isPrevented&&this._cancel(a,b)},e.prototype._checkIfElem=function(b){var c;return b&&(b.jquery||b.zepto||b.nodeType)?(b=b.jquery||b.zepto?b:a(b),c=b.filter(this._itemsSelector),c.length>0?c:null):!1},e.prototype._checkIfSelector=function(a){var b;return a&&"string"==typeof a?(b=this.$el.find(a).filter(this._itemsSelector),b.jquery&&b.length>0?b:null):!1},e.prototype._keyHandler=function(b){if(this.options.get("keyboard")&&!(this.options.get("preventInputs")&&"INPUT"===b.target.tagName||"TEXTAREA"===b.target.tagName)){var c,d,f,g,h=b.which,i={};if("keyup"===b.type)return void(h===e.keyCode.SHIFT&&(delete this._shiftModeAction,delete this._keyModes.shift));if(h===e.keyCode.A&&this._isMulti(b)&&this.options.get("multi"))c=this._getItems(i),d=!0;else switch(h){case e.keyCode.DOWN:f="next",c=this._findNextTarget("next",i);break;case e.keyCode.UP:f="prev",c=this._findNextTarget("prev",i);break;case e.keyCode.HOME:f="prev",c=this._getItems(i,"first");break;case e.keyCode.END:f="next",c=this._getItems(i,"last");break;case e.keyCode.PAGE_DOWN:case e.keyCode.PAGE_UP:var j=h===e.keyCode.PAGE_DOWN;f=j?"next":"prev",g=j?"pagedown":"pageup",i.isShiftPageRange=this.options.get("multi")&&b.shiftKey&&!d,c=this._findNextTarget(g,i);break;case e.keyCode.SPACE:c=a(this.ui.focus);break;case e.keyCode.ENTER:this.options.get("multi")||(c=a(this.ui.focus))}c&&c.length>0?(b.preventDefault(),i.target=c[0],i.items=c,"toggle"===this.options.get("keyboardMode")?(h===e.keyCode.SPACE||h===e.keyCode.ENTER&&!this.options.get("multi")||delete i.items,this.options.get("multi")&&(i.isMultiSelect=!0),delete this.ui.solidInitialElem):this.ui.focus&&this.options.get("multi")&&b.shiftKey&&!d?(h===e.keyCode.END||h===e.keyCode.HOME||h===e.keyCode.PAGE_UP||h===e.keyCode.PAGE_DOWN?this._rangeVariator(i):this._multiVariator(i,h,f,c),this.ui.solidInitialElem||i.target===this.ui.focus||(this.ui.solidInitialElem=this.ui.focus,i.isNewSolidSelection=!0),this._shiftModeAction||(this._shiftModeAction="select"),this._keyModes.shift||(this._keyModes.shift=h)):delete this.ui.solidInitialElem,this._controller(b,i),this.scroll()):(i.prevItemsStates=[],this._trigger("before",b,i),this._trigger("stop",b,i))}},e.prototype._rangeVariator=function(a){var b=void 0===a.isFocusSelected?this._getIsSelected(this.ui.focus):a.isFocusSelected,c=a.isTargetWasSelected=this._getIsSelected(a.target);b||c?(a.items=this._rangeSelect(a),c&&(a.items=a.rangeStart<a.rangeEnd?a.items.slice(0,a.items.length-1):a.items.slice(1))):(a.target=a.items=this.ui.focus,a.isMultiSelect=!0)},e.prototype._multiVariator=function(a,b,c,d){var e,f=void 0===a.isFocusSelected?this._getIsSelected(this.ui.focus):a.isFocusSelected,g=this._getIsSelected(a.target),h=this._getItems(a,c,d),i=this._getIsSelected(h);if(this._keyModes.shift&&this._keyModes.shift!==b&&(this._keyModes.shift=this._shiftModeAction=null),this._keyModes.shift&&"select"===this._shiftModeAction&&g){for(;this._getIsSelected(a.items)&&a.items.length>0;)e=a.items,a.items=this._getItems(a,c,a.items);a.target=a.items?a.items:e}else g&&f&&!i?(this._keyModes.shift=this._shiftModeAction=null,a.items=this.ui.focus):f&&g?(a.items=this.ui.focus,this._shiftModeAction||(this._shiftModeAction="unselect")):f||(a.target=a.items=this.ui.focus);a.isMultiSelect=!0},e.prototype._findNextTarget=function(a,b){var c="next"===a||"pagedown"===a?"first":"last",d=this.ui.focus?this._getItems(b,a,this.ui.focus):this._getItems(b,c);return null!==d&&0!==d.length||!this.options.get("loop")||(d=this._getItems(b,c)),d},e.prototype._refreshBoxScroll=function(c){var d=a(c),e=c===b,g=e?d[f]():c.clientHeight,h=d.scrollTop(),i=e?0:d.offset().top,j=a(this.ui.focus),k=j[f](),l=e?j.offset().top:j.offset().top-i+h;h>l?d.scrollTop(l):l+k>h+g&&d.scrollTop(l+k-g)},e.prototype._isRange=function(a){return a.shiftKey||a.shiftKey&&a.ctrlKey||a.shiftKey&&a.metaKey},e.prototype._isMulti=function(a){return a.ctrlKey||a.metaKey},e.prototype._mouseHandler=function(b){var c=this.options.get(),d=b.type,e=this._isMulti(b),f=this._isRange(b),g={};if("mouseup"===c.mouseMode){if(g.target=this._getTarget(b),"click"===d||g.target&&"mousedown"===d)return}else{if("click"===d&&!this._mousedownOnItem)return;if("mousedown"!==d&&"click"!==d)return;if(g.target=this._getTarget(b),"mousedown"===d&&g.target&&(!c.multi||!e&&!f||"standard"!==c.mouseMode))return void(this._mousedownOnItem=g.target);if(delete this._mousedownOnItem,!g.target&&"click"===d)return}c.multi&&g.target&&(f&&this.ui.focus?g.items=this._rangeSelect(g):(e||"toggle"===c.mouseMode)&&(g.items=this._multiSelect(g))),g.target&&!g.items&&(g.items=a(g.target)),delete this.ui.solidInitialElem,this._controller(b,g)},e.prototype._mousemoveHandler=function(a){if(!this._isFocusOnHoverPrevented){var b={},c=this._getTarget(a);c?(delete this.ui.solidInitialElem,this._isHovered=!0,c!==this.ui.focus&&(b.target=c,this._controller(a,b))):this._isHovered&&(this._isHovered=!1,this._controller(a,b))}},e.prototype._preventMouseMove=function(){var a=this;this._isFocusOnHoverPrevented=!0,this._focusHoverTimeout&&(clearTimeout(this._focusHoverTimeout),delete this._focusHoverTimeout),this._focusHoverTimeout=setTimeout(function(){delete a._isFocusOnHoverPrevented,delete a._focusHoverTimeout},250)},e._callPublicMethod=function(b){var c,d,f=e.getDataObject(this);if(null===f||void 0===f)throw new Error("Element "+this[0]+" has no plugin "+e.pluginName);if(f[b]&&a.isFunction(f[b])&&(c=f[b]),c&&a.isFunction(c)&&"_"!==b.charAt(0))return d=Array.prototype.slice.call(arguments),d.shift(),c.apply(f,d);throw new Error('Plugin "'+e.pluginName+'" has no method "'+b+'"')},e.prototype.isEnabled=function(){return this._isEnable},e.prototype.option=function(b,c){var d=arguments.length;if(d>0&&"string"==typeof b){if(d>1){var e={};return e[b]=c,this.options.set(e),this.$el}return this.options.get(b)}if(d>0&&a.isPlainObject(b))return this.options.set(b),this.$el;if(0===d)return this.options.get();throw new Error('Format of "option" could be: "option" or "option","name" or "option","name",val or "option",{}')},e.prototype.destroy=function(){this._trigger("destroy"),this._unbindEvents(),this._focusHoverTimeout&&clearTimeout(this._focusHoverTimeout),this.ui.focus&&(a(this.ui.focus).removeClass(this.options.get("focusClass")),delete this.ui.focus),this._selected>0&&this.getSelected().removeClass(this.options.get("selectedClass")),this.$el.removeClass(this.options.get("disabledClass")),this.$el.removeClass(this.options.get("listClass")),this.options.off(),delete this.options,delete this._scrolledElem,delete this.ui.solidInitialElem,this.$el.removeData("plugin_"+e.pluginName),this.$el=null},e.prototype.unselect=function(a){return this.select(a,!0)},e.prototype.select=function(b,c){var d,e;if(c===!0&&void 0===b)e={isTargetWasSelected:!0,isMultiSelect:!0},e.items=this._getItems(e);else{if(d=this._checkIfElem(b),d===!1&&(d=this._checkIfSelector(b)),d===!1)throw new Error('You shold pass DOM element or selector to "select" method.');e={items:d.addClass?d:a(d),isTargetWasSelected:c?!0:!1,isMultiSelect:!0}}return delete this.ui.solidInitialElem,this._controller(null,e),this.$el},e.prototype.blur=function(){return this._controller(null,{target:null}),this.$el},e.prototype.getSelected=function(a){var b,c=this._getItems({}).filter("."+this.options.get("selectedClass"));if(a){b=[];for(var d=0;d<c.length;d++)b.push(c[d].id||null);return b&&b.length>0?b:null}return c},e.prototype.getSelectedId=function(){return this.getSelected(!0)},e.prototype.focus=function(a){var b;if(arguments.length>0){if(b=(b=this._checkIfElem(a))===!1?this._checkIfSelector(a):b,b&&(b.jquery||b.zepto))this._setFocus(b[0]);else if(b===!1)throw new Error("You shold pass DOM element or CSS selector to set focus or nothing to get it.");return this.$el}return this.ui.focus?this.ui.focus:null},e.prototype.scroll=function(){this._preventMouseMove(),this.ui.focus&&(this._scrolledElem&&this._refreshBoxScroll(this._scrolledElem),this._refreshBoxScroll(b))},e.prototype.enable=function(){return this._isEnable=!0,this.$el.removeClass(this.options.get("disabledClass")),this.$el},e.prototype.disable=function(){return this._isEnable=!1,this._isHovered=!1,this.$el.addClass(this.options.get("disabledClass")),this.$el},e.prototype.cancel=function(){return this._isPrevented=!0,this.$el},e.prototype.refresh=function(){var b=this.ui.focus;return b&&!a(b).is(":visible")&&delete this.ui.focus,this._selected=this.getSelected().length,this.$el},a.fn[e.pluginName]=function(a){return a&&a.charAt?e._callPublicMethod.apply(this,arguments):this.each(function(b,c){e.getDataObject(c)||new e(c,a)})},a.fn[e.pluginName].defaults=k,b["_"+e.pluginName]=e}(window.jQuery||window.Zepto,window);

  }).call(System.global);  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});

(function() {
function define(){};  define.amd = {};
!function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document)
      throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.1",
      n = function(a, b) {
        return new n.fn.init(a, b);
      },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function(a, b) {
        return b.toUpperCase();
      };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this);
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function(a, b) {
      return n.each(this, a, b);
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a)
          c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a);
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window;
    },
    isNumeric: function(a) {
      return !n.isArray(a) && a - parseFloat(a) >= 0;
    },
    isPlainObject: function(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a)
        return !1;
      return !0;
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
    },
    globalEval: function(a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1)
              break;
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1)
              break;
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      return a;
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function(a, b) {
      for (var c = +b.length,
          d = 0,
          e = a.length; c > d; d++)
        a[e++] = b[d];
      return a.length = e, a;
    },
    grep: function(a, b, c) {
      for (var d,
          e = [],
          f = 0,
          g = a.length,
          h = !c; g > f; f++)
        d = !b(a[f], f), d !== h && e.push(a[f]);
      return e;
    },
    map: function(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
      if (h)
        for (; g > f; f++)
          d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a)
          d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i);
    },
    guid: 1,
    proxy: function(a, b) {
      var c,
          e,
          f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });
  function s(a) {
    var b = a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }
  var t = function(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + -new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = gb(),
        z = gb(),
        A = gb(),
        B = function(a, b) {
          return a === b && (l = !0), 0;
        },
        C = "undefined",
        D = 1 << 31,
        E = {}.hasOwnProperty,
        F = [],
        G = F.pop,
        H = F.push,
        I = F.push,
        J = F.slice,
        K = F.indexOf || function(a) {
          for (var b = 0,
              c = this.length; c > b; b++)
            if (this[b] === a)
              return b;
          return -1;
        },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        O = N.replace("w", "w#"),
        P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
        Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
        R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        S = new RegExp("^" + M + "*," + M + "*"),
        T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        V = new RegExp(Q),
        W = new RegExp("^" + O + "$"),
        X = {
          ID: new RegExp("^#(" + N + ")"),
          CLASS: new RegExp("^\\.(" + N + ")"),
          TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + P),
          PSEUDO: new RegExp("^" + Q),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        db = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = {apply: F.length ? function(a, b) {
          H.apply(a, J.call(b));
        } : function(a, b) {
          var c = a.length,
              d = 0;
          while (a[c++] = b[d++])
            ;
          a.length = c - 1;
        }};
    }
    function fb(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w,
          x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
        return d;
      if (1 !== (k = b.nodeType) && 9 !== k)
        return [];
      if (p && !e) {
        if (f = _.exec(a))
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode)
                return d;
              if (h.id === j)
                return d.push(h), d;
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
              return d.push(h), d;
          } else {
            if (f[2])
              return I.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
              return I.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--)
              o[l] = s + qb(o[l]);
            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
          }
          if (x)
            try {
              return I.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {} finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function gb() {
      var a = [];
      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }
      return b;
    }
    function hb(a) {
      return a[u] = !0, a;
    }
    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }
    function jb(a, b) {
      var c = a.split("|"),
          e = a.length;
      while (e--)
        d.attrHandle[c[e]] = b;
    }
    function kb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d)
        return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b)
            return -1;
      return a ? 1 : -1;
    }
    function lb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function mb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function nb(a) {
      return hb(function(b) {
        return b = +b, hb(function(c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;
          while (g--)
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }
    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a;
    }
    c = fb.support = {}, f = fb.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fb.setDocument = function(a) {
      var b,
          e = a ? a.ownerDocument || a : v,
          g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
        m();
      }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
        m();
      })), c.attributes = ib(function(a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ib(function(a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
      }), c.getById = ib(function(a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function(a, b) {
        if (typeof b.getElementById !== C && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(cb, db);
        return function(a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(cb, db);
        return function(a) {
          var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
      } : function(a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++])
            1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
      }), ib(function(a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a)
              return !0;
        return !1;
      }, B = b ? function(a, b) {
        if (a === b)
          return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
      } : function(a, b) {
        if (a === b)
          return l = !0, 0;
        var c,
            d = 0,
            f = a.parentNode,
            g = b.parentNode,
            h = [a],
            i = [b];
        if (!f || !g)
          return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g)
          return kb(a, b);
        c = a;
        while (c = c.parentNode)
          h.unshift(c);
        c = b;
        while (c = c.parentNode)
          i.unshift(c);
        while (h[d] === i[d])
          d++;
        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, e) : n;
    }, fb.matches = function(a, b) {
      return fb(a, null, null, b);
    }, fb.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
        try {
          var d = s.call(a, b);
          if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
            return d;
        } catch (e) {}
      return fb(b, n, null, [a]).length > 0;
    }, fb.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fb.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fb.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fb.uniqueSort = function(a) {
      var b,
          d = [],
          e = 0,
          f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])
          b === a[f] && (e = d.push(f));
        while (e--)
          a.splice(d[e], 1);
      }
      return k = null, a;
    }, e = fb.getText = function(a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent)
            return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)
            c += e(a);
        } else if (3 === f || 4 === f)
          return a.nodeValue;
      } else
        while (b = a[d++])
          c += e(b);
      return c;
    }, d = fb.selectors = {
      cacheLength: 50,
      createPseudo: hb,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
        },
        PSEUDO: function(a) {
          var b,
              c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(cb, db).toLowerCase();
          return "*" === a ? function() {
            return !0;
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
          });
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = fb.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode;
          } : function(b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                      return !1;
                  o = p = "only" === a && !o && "nextSibling";
                }
                return !0;
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break;
                  }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))
                    break;
              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
            var d,
                f = e(a, b),
                g = f.length;
            while (g--)
              d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function(a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: hb(function(a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
          return d[u] ? hb(function(a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;
            while (h--)
              (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop();
          };
        }),
        has: hb(function(a) {
          return function(b) {
            return fb(a, b).length > 0;
          };
        }),
        contains: hb(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: hb(function(a) {
          return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
            var c;
            do
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
 while ((b = b.parentNode) && 1 === b.nodeType);
            return !1;
          };
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function(a) {
          return a === o;
        },
        focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function(a) {
          return a.disabled === !1;
        },
        disabled: function(a) {
          return a.disabled === !0;
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6)
              return !1;
          return !0;
        },
        parent: function(a) {
          return !d.pseudos.empty(a);
        },
        header: function(a) {
          return Z.test(a.nodeName);
        },
        input: function(a) {
          return Y.test(a.nodeName);
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: nb(function() {
          return [0];
        }),
        last: nb(function(a, b) {
          return [b - 1];
        }),
        eq: nb(function(a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: nb(function(a, b) {
          for (var c = 0; b > c; c += 2)
            a.push(c);
          return a;
        }),
        odd: nb(function(a, b) {
          for (var c = 1; b > c; c += 2)
            a.push(c);
          return a;
        }),
        lt: nb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0; )
            a.push(d);
          return a;
        }),
        gt: nb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b; )
            a.push(d);
          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })
      d.pseudos[b] = lb(b);
    for (b in {
      submit: !0,
      reset: !0
    })
      d.pseudos[b] = mb(b);
    function pb() {}
    pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k)
        return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));
        for (g in d.filter)
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        if (!c)
          break;
      }
      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
    };
    function qb(a) {
      for (var b = 0,
          c = a.length,
          d = ""; c > b; b++)
        d += a[b].value;
      return d;
    }
    function rb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e)
            return a(b, c, f);
      } : function(b, c, g) {
        var h,
            i,
            j = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g))
              return !0;
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g))
                return !0;
            }
      };
    }
    function sb(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d))
            return !1;
        return !0;
      } : a[0];
    }
    function tb(a, b, c) {
      for (var d = 0,
          e = b.length; e > d; d++)
        fb(a, b[d], c);
      return c;
    }
    function ub(a, b, c, d, e) {
      for (var f,
          g = [],
          h = 0,
          i = a.length,
          j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || tb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ub(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;
          while (k--)
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)
                (l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i);
            }
            k = r.length;
            while (k--)
              (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else
          r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
      });
    }
    function wb(a) {
      for (var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = rb(function(a) {
            return a === b;
          }, h, !0),
          l = rb(function(a) {
            return K.call(b, a) > -1;
          }, h, !0),
          m = [function(a, c, d) {
            return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          }]; f > i; i++)
        if (c = d.relative[a[i].type])
          m = [rb(sb(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type])
                break;
            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
          }
          m.push(c);
        }
      return sb(m);
    }
    function xb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function(f, g, h, i, k) {
            var l,
                m,
                o,
                p = 0,
                q = "0",
                r = f && [],
                s = [],
                t = j,
                u = f || e && d.find.TAG("*", k),
                v = w += null == t ? 1 : Math.random() || .1,
                x = u.length;
            for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
              if (e && l) {
                m = 0;
                while (o = a[m++])
                  if (o(l, g, h)) {
                    i.push(l);
                    break;
                  }
                k && (w = v);
              }
              c && ((l = !o && l) && p--, f && r.push(l));
            }
            if (p += q, c && q !== p) {
              m = 0;
              while (o = b[m++])
                o(r, s, g, h);
              if (f) {
                if (p > 0)
                  while (q--)
                    r[q] || s[q] || (s[q] = G.call(i));
                s = ub(s);
              }
              I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
            }
            return k && (w = v, j = t), r;
          };
      return c ? hb(f) : f;
    }
    return h = fb.compile = function(a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)
          f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xb(e, d)), f.selector = a;
      }
      return f;
    }, i = fb.select = function(a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
            return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type])
            break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a)
              return I.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ib(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || jb("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ib(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || jb("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ib(function(a) {
      return null == a.getAttribute("disabled");
    }) || jb(L, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fb;
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function(a) {
        return a === b !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b))
        return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function(a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function(a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ("string" != typeof a)
        return this.pushStack(n(a).filter(function() {
          for (b = 0; c > b; b++)
            if (n.contains(e[b], this))
              return !0;
        }));
      for (b = 0; c > b; b++)
        n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    },
    filter: function(a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function(a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });
  var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function(a, b) {
        var c,
            d;
        if (!a)
          return this;
        if ("string" == typeof a) {
          if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)
            return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
          if (c[1]) {
            if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
              for (c in b)
                n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this;
          }
          return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
      };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
  n.extend({
    dir: function(a, b, c) {
      var d = [],
          e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c))
            break;
          d.push(a);
        }
      return d;
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }), n.fn.extend({
    has: function(a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function() {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a]))
            return !0;
      });
    },
    closest: function(a, b) {
      for (var c,
          d = 0,
          e = this.length,
          f = [],
          g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function(a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType)
      ;
    return a;
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function(a) {
      return n.dir(a, "parentNode");
    },
    parentsUntil: function(a, b, c) {
      return n.dir(a, "parentNode", c);
    },
    next: function(a) {
      return D(a, "nextSibling");
    },
    prev: function(a) {
      return D(a, "previousSibling");
    },
    nextAll: function(a) {
      return n.dir(a, "nextSibling");
    },
    prevAll: function(a) {
      return n.dir(a, "previousSibling");
    },
    nextUntil: function(a, b, c) {
      return n.dir(a, "nextSibling", c);
    },
    prevUntil: function(a, b, c) {
      return n.dir(a, "previousSibling", c);
    },
    siblings: function(a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function(a) {
      return n.sibling(a.firstChild);
    },
    contents: function(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var E = /\S+/g,
      F = {};
  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function(a, c) {
      b[c] = !0;
    }), b;
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function(l) {
          for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
            if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
              b = !1;
              break;
            }
          d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        },
        k = {
          add: function() {
            if (h) {
              var c = h.length;
              !function g(b) {
                n.each(b, function(b, c) {
                  var d = n.type(c);
                  "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                });
              }(arguments), d ? f = h.length : b && (e = c, j(b));
            }
            return this;
          },
          remove: function() {
            return h && n.each(arguments, function(a, b) {
              var c;
              while ((c = n.inArray(b, h, c)) > -1)
                h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
            }), this;
          },
          has: function(a) {
            return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
          },
          empty: function() {
            return h = [], f = 0, this;
          },
          disable: function() {
            return h = i = b = void 0, this;
          },
          disabled: function() {
            return !h;
          },
          lock: function() {
            return i = void 0, b || k.disable(), this;
          },
          locked: function() {
            return !i;
          },
          fireWith: function(a, b) {
            return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
          },
          fire: function() {
            return k.fireWith(this, arguments), this;
          },
          fired: function() {
            return !!c;
          }
        };
    return k;
  }, n.extend({
    Deferred: function(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
            state: function() {
              return c;
            },
            always: function() {
              return e.done(arguments).fail(arguments), this;
            },
            then: function() {
              var a = arguments;
              return n.Deferred(function(c) {
                n.each(b, function(b, f) {
                  var g = n.isFunction(a[b]) && a[b];
                  e[f[1]](function() {
                    var a = g && g.apply(this, arguments);
                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                  });
                }), a = null;
              }).promise();
            },
            promise: function(a) {
              return null != a ? n.extend(a, d) : d;
            }
          },
          e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function(a, b, c) {
            return function(e) {
              b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
          c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    }
  });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
  }
  n.ready.promise = function(b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, n.ready.promise();
  var J = n.access = function(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c)
        n.access(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
      return j.call(n(a), c);
    })), b))
      for (; i > h; h++)
        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };
  n.acceptData = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty(this.cache = {}, 0, {get: function() {
        return {};
      }}), this.expando = n.expando + Math.random();
  }
  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function(a) {
      if (!K.accepts(a))
        return 0;
      var b = {},
          c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = {value: c}, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c;
    },
    set: function(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];
      if ("string" == typeof b)
        f[b] = c;
      else if (n.isEmptyObject(f))
        n.extend(this.cache[e], b);
      else
        for (d in b)
          f[d] = b[d];
      return f;
    },
    get: function(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b];
    },
    access: function(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
      if (void 0 === b)
        this.cache[f] = {};
      else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--)
          delete g[d[c]];
      }
    },
    hasData: function(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  };
  var L = new K,
      M = new K,
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}
        M.set(a, b, c);
      } else
        c = void 0;
    return c;
  }
  n.extend({
    hasData: function(a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function(a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function(a, b) {
      M.remove(a, b);
    },
    _data: function(a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function(a, b) {
      L.remove(a, b);
    }
  }), n.fn.extend({
    data: function(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--)
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof a ? this.each(function() {
        M.set(this, a);
      }) : J(this, function(b) {
        var c,
            d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c)
            return c;
          if (c = M.get(f, d), void 0 !== c)
            return c;
          if (c = P(f, d, void 0), void 0 !== c)
            return c;
        } else
          this.each(function() {
            var c = M.get(this, d);
            M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
          });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function(a) {
      return this.each(function() {
        M.remove(this, a);
      });
    }
  }), n.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function() {
            n.dequeue(a, b);
          };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {empty: n.Callbacks("once memory").add(function() {
          L.remove(a, [b + "queue", c]);
        })});
    }
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function(a) {
      return this.each(function() {
        n.dequeue(this, a);
      });
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", []);
    },
    promise: function(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f]);
          };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--)
        c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
      },
      T = /^(?:checkbox|radio)$/i;
  !function() {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(E) || [""], j = b.length;
        while (j--)
          h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    },
    remove: function(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--)
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else
            for (o in i)
              n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
            p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            });
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c,
            d,
            e,
            f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    fix: function(a) {
      if (a[n.expando])
        return a;
      var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--)
        c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: {noBubble: !0},
      focus: {
        trigger: function() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }}
    },
    simulate: function(a, b, c, d) {
      var e = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
            e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      },
      teardown: function() {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      }
    };
  }), n.fn.extend({
    on: function(a, b, c, d, e) {
      var f,
          g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a)
          this.on(g, b, c, a[g], e);
        return this;
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
        d = $;
      else if (!d)
        return this;
      return 1 === e && (f = d, d = function(a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function(a, b, c) {
      var d,
          e;
      if (a && a.preventDefault && a.handleObj)
        return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a)
          this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bb = /<([\w:]+)/,
      cb = /<|&#?\w+;/,
      db = /<(?:script|style|link)/i,
      eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fb = /^$|\/(?:java|ecma)script/i,
      gb = /^true\/(.*)/,
      hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
  ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
  function jb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function kb(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }
  function lb(a) {
    var b = gb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }
  function mb(a, b) {
    for (var c = 0,
        d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function nb(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++)
            n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }
  function ob(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }
  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
          pb(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
            nb(f[d], g[d]);
        else
          nb(a, h);
      return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
    },
    buildFragment: function(a, b, c, d) {
      for (var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length; o > m; m++)
        if (e = a[m], e || 0 === e)
          if ("object" === n.type(e))
            n.merge(l, e.nodeType ? [e] : e);
          else if (cb.test(e)) {
            f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
            while (j--)
              f = f.lastChild;
            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
          } else
            l.push(b.createTextNode(e));
      k.textContent = "", m = 0;
      while (e = l[m++])
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
          j = 0;
          while (e = f[j++])
            fb.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function(a) {
      for (var b,
          c,
          d,
          e,
          f = n.event.special,
          g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    }
  }), n.fn.extend({
    text: function(a) {
      return J(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function(a, b) {
      for (var c,
          d = a ? n.filter(a, this) : this,
          e = 0; null != (c = d[e]); e++)
        b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
      return this;
    },
    empty: function() {
      for (var a,
          b = 0; null != (a = this[b]); b++)
        1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
      return this;
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b);
      });
    },
    html: function(a) {
      return J(this, function(a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType)
          return b.innerHTML;
        if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(ab, "<$1></$2>");
          try {
            for (; d > c; c++)
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
            b = 0;
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function(a) {
      return this.remove(a, !0);
    },
    domManip: function(a, b) {
      a = e.apply([], a);
      var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))
        return this.each(function(c) {
          var d = m.eq(c);
          q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
        });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
        if (g)
          for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
            h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
      }
      return this;
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c,
          d = [],
          e = n(a),
          g = e.length - 1,
          h = 0; g >= h; h++)
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d);
    };
  });
  var qb,
      rb = {};
  function sb(b, c) {
    var d,
        e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f;
  }
  function tb(a) {
    var b = l,
        c = rb[a];
    return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
  }
  var ub = /^margin/,
      vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
      };
  function xb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }
  function yb(a, b) {
    return {get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }};
  }
  !function() {
    var b,
        c,
        d = l.documentElement,
        e = l.createElement("div"),
        f = l.createElement("div");
    if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
      function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
      }
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function() {
          return g(), b;
        },
        boxSizingReliable: function() {
          return null == c && g(), c;
        },
        reliableMarginRight: function() {
          var b,
              c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
        }
      });
    }
  }(), n.swap = function(a, b, c, d) {
    var e,
        f,
        g = {};
    for (f in b)
      g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)
      a.style[f] = g[f];
    return e;
  };
  var zb = /^(none|table(?!-c[ea]).+)/,
      Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
      Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
      Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Db = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Eb = ["Webkit", "O", "Moz", "ms"];
  function Fb(a, b) {
    if (b in a)
      return b;
    var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Eb.length;
    while (e--)
      if (b = Eb[e] + c, b in a)
        return b;
    return d;
  }
  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Hb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0; 4 > f; f += 2)
      "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wb(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
        return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Jb(a, b) {
    for (var c,
        d,
        e,
        f = [],
        g = 0,
        h = a.length; h > g; g++)
      d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {opacity: {get: function(a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c;
          }
        }}},
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": "cssFloat"},
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    },
    css: function(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
          return Ib(a, b, d);
        }) : Ib(a, b, d) : void 0;
      },
      set: function(a, c, d) {
        var e = d && wb(a);
        return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
    return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {expand: function(c) {
        for (var d = 0,
            e = {},
            f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e;
      }}, ub.test(a) || (n.cssHooks[a + b].set = Gb);
  }), n.fn.extend({
    css: function(a, b) {
      return J(this, function(a, b, c) {
        var d,
            e,
            f = {},
            g = 0;
        if (n.isArray(b)) {
          for (d = wb(a), e = b.length; e > g; g++)
            f[b[g]] = n.css(a, b[g], !1, d);
          return f;
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function() {
      return Jb(this, !0);
    },
    hide: function() {
      return Jb(this);
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  n.Tween = Kb, Kb.prototype = {
    constructor: Kb,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function() {
      var a = Kb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
    },
    run: function(a) {
      var b,
          c = Kb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
    }
  }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {_default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }}, n.easing = {
    linear: function(a) {
      return a;
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, n.fx = Kb.prototype.init, n.fx.step = {};
  var Lb,
      Mb,
      Nb = /^(?:toggle|show|hide)$/,
      Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pb = /queueHooks$/,
      Qb = [Vb],
      Rb = {"*": [function(a, b) {
          var c = this.createTween(a, b),
              d = c.cur(),
              e = Ob.exec(b),
              f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
              g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
              h = 1,
              i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do
              h = h || ".5", g /= h, n.style(c.elem, a, g + f);
 while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }]};
  function Sb() {
    return setTimeout(function() {
      Lb = void 0;
    }), Lb = n.now();
  }
  function Tb(a, b) {
    var c,
        d = 0,
        e = {height: a};
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      c = R[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (var d,
        e = (Rb[b] || []).concat(Rb["*"]),
        f = 0,
        g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a))
        return d;
  }
  function Vb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i();
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));
    for (d in b)
      if (e = b[d], Nb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d])
            continue;
          p = !0;
        }
        m[d] = q && q[d] || n.style(a, d);
      } else
        j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
        n(a).hide();
      }), l.done(function() {
        var b;
        L.remove(a, "fxshow");
        for (b in m)
          n.style(a, b, m[b]);
      });
      for (d in m)
        g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }
  function Wb(a, b) {
    var c,
        d,
        e,
        f,
        g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f)
          c in a || (a[c] = f[c], b[c] = e);
      } else
        b[d] = e;
  }
  function Xb(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qb.length,
        h = n.Deferred().always(function() {
          delete i.elem;
        }),
        i = function() {
          if (e)
            return !1;
          for (var b = Lb || Sb(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length; i > g; g++)
            j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
        j = h.promise({
          elem: a,
          props: n.extend({}, b),
          opts: n.extend(!0, {specialEasing: {}}, c),
          originalProperties: b,
          originalOptions: c,
          startTime: Lb || Sb(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d;
          },
          stop: function(b) {
            var c = 0,
                d = b ? j.tweens.length : 0;
            if (e)
              return this;
            for (e = !0; d > c; c++)
              j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
          }
        }),
        k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)
      if (d = Qb[f].call(j, a, k, j.opts))
        return d;
    return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  n.Animation = n.extend(Xb, {
    tweener: function(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c,
          d = 0,
          e = a.length; e > d; d++)
        c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
    },
    prefilter: function(a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    }
  }), n.speed = function(a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function(a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
    },
    animate: function(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = Xb(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function(a, b, c) {
      var d = function(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);
        if (e)
          g[e] && g[e].stop && d(g[e]);
        else
          for (e in g)
            g[e] && g[e].stop && Pb.test(e) && d(g[e]);
        for (e = f.length; e--; )
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function(a) {
      return a !== !1 && (a = a || "fx"), this.each(function() {
        var b,
            c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)
          d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function(a, b) {
    var c = n.fn[b];
    n.fn[b] = function(a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Tb("show"),
    slideUp: Tb("hide"),
    slideToggle: Tb("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(a, b) {
    n.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function() {
    var a,
        b = 0,
        c = n.timers;
    for (Lb = n.now(); b < c.length; b++)
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), Lb = void 0;
  }, n.fx.timer = function(a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function() {
    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function() {
    clearInterval(Mb), Mb = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function(a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
      var d = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(d);
      };
    });
  }, function() {
    var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
    a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
  }();
  var Yb,
      Zb,
      $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)
        return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    },
    removeAttr: function(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);
      if (f && 1 === a.nodeType)
        while (c = f[e++])
          d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    },
    attrHooks: {type: {set: function(a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }}}
  }), Zb = {set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = $b[b] || n.find.attr;
    $b[b] = function(a, b, d) {
      var e,
          f;
      return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
    };
  });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)
        return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {tabIndex: {get: function(a) {
          return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }}}
  }), k.optSelected || (n.propHooks.selected = {get: function(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this;
  });
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a))
        return this.each(function(b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
            f = 0;
            while (e = b[f++])
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = n.trim(d), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a))
        return this.each(function(b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function() {
        if ("string" === c) {
          var b,
              d = 0,
              e = n(this),
              f = a.match(E) || [];
          while (b = f[d++])
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else
          (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
      });
    },
    hasClass: function(a) {
      for (var b = " " + a + " ",
          c = 0,
          d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
          return !0;
      return !1;
    }
  });
  var bc = /\r/g;
  n.fn.extend({val: function(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length)
          return d = n.isFunction(a), this.each(function(c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
              return null == a ? "" : a + "";
            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
          });
        if (e)
          return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c);
      }
    }}), n.extend({valHooks: {
      option: {get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a));
        }},
      select: {
        get: function(a) {
          for (var b,
              c,
              d = a.options,
              e = a.selectedIndex,
              f = "select-one" === a.type || 0 > e,
              g = f ? null : [],
              h = f ? e + 1 : d.length,
              i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f)
                return b;
              g.push(b);
            }
          return g;
        },
        set: function(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
          while (g--)
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f;
        }
      }
    }}), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      }}, k.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function(a, b) {
      return this.off(a, null, b);
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  var cc = n.now(),
      dc = /\?/;
  n.parseJSON = function(a) {
    return JSON.parse(a + "");
  }, n.parseXML = function(a) {
    var b,
        c;
    if (!a || "string" != typeof a)
      return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  };
  var ec,
      fc,
      gc = /#.*$/,
      hc = /([?&])_=[^&]*/,
      ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      kc = /^(?:GET|HEAD)$/,
      lc = /^\/\//,
      mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      nc = {},
      oc = {},
      pc = "*/".concat("*");
  try {
    fc = location.href;
  } catch (qc) {
    fc = l.createElement("a"), fc.href = "", fc = fc.href;
  }
  ec = mc.exec(fc.toLowerCase()) || [];
  function rc(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while (d = f[e++])
          "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }
  function sc(a, b, c, d) {
    var e = {},
        f = a === oc;
    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }
  function tc(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};
    for (c in b)
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function uc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;
    while ("*" === i[0])
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c)
      f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function vc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters)
        j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f)
          f = i;
        else if ("*" !== i && i !== f) {
          if (g = j[i + " " + f] || j["* " + f], !g)
            for (e in j)
              if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"])
              b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f
                };
              }
        }
    return {
      state: "success",
      data: b
    };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fc,
      type: "GET",
      isLocal: jc.test(ec[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": pc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
    },
    ajaxPrefilter: rc(nc),
    ajaxTransport: rc(oc),
    ajax: function(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!f) {
                  f = {};
                  while (b = ic.exec(e))
                    f[b[1].toLowerCase()] = b[2];
                }
                b = f[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function() {
              return 2 === t ? e : null;
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this;
            },
            overrideMimeType: function(a) {
              return t || (k.mimeType = a), this;
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t)
                  for (b in a)
                    q[b] = [q[b], a[b]];
                else
                  v.always(a[v.status]);
              return this;
            },
            abort: function(a) {
              var b = a || u;
              return c && c.abort(b), x(0, b), this;
            }
          };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
        return v;
      i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers)
        v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in {
        success: 1,
        error: 1,
        complete: 1
      })
        v[j](k[j]);
      if (c = sc(oc, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
          v.abort("timeout");
        }, k.timeout));
        try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t))
            throw w;
          x(-1, w);
        }
      } else
        x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a);
    };
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function(a) {
      var b;
      return n.isFunction(a) ? this.each(function(b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var a = this;
        while (a.firstElementChild)
          a = a.firstElementChild;
        return a;
      }).append(this)), this);
    },
    wrapInner: function(a) {
      return this.each(n.isFunction(a) ? function(b) {
        n(this).wrapInner(a.call(this, b));
      } : function() {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function(a) {
    return !n.expr.filters.hidden(a);
  };
  var wc = /%20/g,
      xc = /\[\]$/,
      yc = /\r?\n/g,
      zc = /^(?:submit|button|image|reset|file)$/i,
      Ac = /^(?:input|select|textarea|keygen)/i;
  function Bc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function(b, e) {
        c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b))
      d(a, b);
    else
      for (e in b)
        Bc(a + "[" + e + "]", b[e], c, d);
  }
  n.param = function(a, b) {
    var c,
        d = [],
        e = function(a, b) {
          b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
      n.each(a, function() {
        e(this.name, this.value);
      });
    else
      for (c in a)
        Bc(c, a[c], b, e);
    return d.join("&").replace(wc, "+");
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(yc, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(yc, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest;
    } catch (a) {}
  };
  var Cc = 0,
      Dc = {},
      Ec = {
        0: 200,
        1223: 204
      },
      Fc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function() {
    for (var a in Dc)
      Dc[a]();
  }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function(a) {
    var b;
    return k.cors || Fc && !a.crossDomain ? {
      send: function(c, d) {
        var e,
            f = a.xhr(),
            g = ++Cc;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields)
            f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c)
          f.setRequestHeader(e, c[e]);
        b = function(a) {
          return function() {
            b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (b)
            throw h;
        }
      },
      abort: function() {
        b && b();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {"text script": function(a) {
        return n.globalEval(a), a;
      }}
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b,
          c;
      return {
        send: function(d, e) {
          b = n("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function(a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        },
        abort: function() {
          c && c();
        }
      };
    }
  });
  var Gc = [],
      Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Gc.pop() || n.expando + "_" + cc++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments;
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a)
      return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };
  var Ic = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && Ic)
      return Ic.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function(a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem;
    }).length;
  };
  var Jc = a.document.documentElement;
  function Kc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  n.offset = {setOffset: function(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }}, n.fn.extend({
    offset: function(a) {
      if (arguments.length)
        return void 0 === a ? this : this.each(function(b) {
          n.offset.setOffset(this, a, b);
        });
      var b,
          c,
          d = this[0],
          e = {
            top: 0,
            left: 0
          },
          f = d && d.ownerDocument;
      if (f)
        return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
          top: e.top + c.pageYOffset - b.clientTop,
          left: e.left + c.pageXOffset - b.clientLeft
        }) : e;
    },
    position: function() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = {
              top: 0,
              left: 0
            };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent || Jc;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
          a = a.offsetParent;
        return a || Jc;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(b, c) {
    var d = "pageYOffset" === c;
    n.fn[b] = function(e) {
      return J(this, function(b, e, f) {
        var g = Kc(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
      return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function() {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && System.register("lib/jquery", [], false, function(__require, __exports, __module) {
    return (function() {
      return n;
    }).call(this);
  });
  var Lc = a.jQuery,
      Mc = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
  }, typeof b === U && (a.jQuery = a.$ = n), n;
});
})();
(function() {
function define(){};  define.amd = {};
!function(a, b, c, d, e, f) {
  function g(a, b) {
    return function() {
      return a.call(this, b.apply(this, arguments));
    };
  }
  function h(a) {
    return function(b) {
      return b[a];
    };
  }
  function i(a, b) {
    return b.apply(f, a);
  }
  function j(a) {
    var b = a.length - 1,
        d = c.prototype.slice;
    if (0 == b)
      return function() {
        return a.call(this, d.call(arguments));
      };
    if (1 == b)
      return function() {
        return a.call(this, arguments[0], d.call(arguments, 1));
      };
    var e = c(a.length);
    return function() {
      for (var c = 0; b > c; c++)
        e[c] = arguments[c];
      return e[b] = d.call(arguments, b), a.apply(this, e);
    };
  }
  function k(a) {
    return function(b, c) {
      return a(c, b);
    };
  }
  function l(a, b) {
    return function(c) {
      return a(c) && b(c);
    };
  }
  function m() {}
  function n() {
    return !0;
  }
  function o(a) {
    return function() {
      return a;
    };
  }
  function p(a, b) {
    return b && b.constructor === a;
  }
  function q(a) {
    return a !== f;
  }
  function r(a, c) {
    return c instanceof b && y(function(a) {
      return a in c;
    }, a);
  }
  function s(a, b) {
    return [a, b];
  }
  function t(a) {
    return A(a.reduce(k(s), X));
  }
  function u(a) {
    return w(function(a, b) {
      return a.unshift(b), a;
    }, [], a);
  }
  function v(a, b) {
    return b ? s(a(Y(b)), v(a, Z(b))) : X;
  }
  function w(a, b, c) {
    return c ? a(w(a, b, Z(c)), Y(c)) : b;
  }
  function x(a, b, c) {
    function d(a, c) {
      return a ? b(Y(a)) ? (c(Y(a)), Z(a)) : s(Y(a), d(Z(a), c)) : X;
    }
    return d(a, c || m);
  }
  function y(a, b) {
    return !b || a(Y(b)) && y(a, Z(b));
  }
  function z(a, b) {
    a && (Y(a).apply(null, b), z(Z(a), b));
  }
  function A(a) {
    function b(a, c) {
      return a ? b(Z(a), s(Y(a), c)) : c;
    }
    return b(a, X);
  }
  function B(a, b) {
    return b && (a(Y(b)) ? Y(b) : B(a, Z(b)));
  }
  function C(a) {
    "use strict";
    function b() {
      var a = 0;
      P.length > p && (c("Max buffer length exceeded: textNode"), a = Math.max(a, P.length)), Q.length > p && (c("Max buffer length exceeded: numberNode"), a = Math.max(a, Q.length)), O = p - a + Y;
    }
    function c(a) {
      P && (m(P), n(), P = ""), i = d(a + "\nLn: " + $ + "\nCol: " + Z + "\nChr: " + j), o(N(f, f, i));
    }
    function e() {
      (T !== t || 0 !== X) && c("Unexpected end"), P && (m(P), n(), P = ""), S = !0;
    }
    function g(a) {
      return "\r" == a || "\n" == a || " " == a || "	" == a;
    }
    function h(a) {
      if (!i) {
        if (S)
          return c("Cannot write after close");
        var d = 0;
        for (j = a[0]; j && (k = j, j = a[d++]); )
          switch (Y++, "\n" == j ? ($++, Z = 0) : Z++, T) {
            case s:
              if ("{" === j)
                T = u;
              else if ("[" === j)
                T = w;
              else if (!g(j))
                return c("Non-whitespace before {[.");
              continue;
            case z:
            case u:
              if (g(j))
                continue;
              if (T === z)
                U.push(A);
              else {
                if ("}" === j) {
                  m({}), n(), T = U.pop() || t;
                  continue;
                }
                U.push(v);
              }
              if ('"' !== j)
                return c('Malformed object key should start with " ');
              T = y;
              continue;
            case A:
            case v:
              if (g(j))
                continue;
              if (":" === j)
                T === v ? (U.push(v), P && (m({}), l(P), P = ""), X++) : P && (l(P), P = ""), T = t;
              else if ("}" === j)
                P && (m(P), n(), P = ""), n(), X--, T = U.pop() || t;
              else {
                if ("," !== j)
                  return c("Bad object");
                T === v && U.push(v), P && (m(P), n(), P = ""), T = z;
              }
              continue;
            case w:
            case t:
              if (g(j))
                continue;
              if (T === w) {
                if (m([]), X++, T = t, "]" === j) {
                  n(), X--, T = U.pop() || t;
                  continue;
                }
                U.push(x);
              }
              if ('"' === j)
                T = y;
              else if ("{" === j)
                T = u;
              else if ("[" === j)
                T = w;
              else if ("t" === j)
                T = B;
              else if ("f" === j)
                T = E;
              else if ("n" === j)
                T = I;
              else if ("-" === j)
                Q += j;
              else if ("0" === j)
                Q += j, T = M;
              else {
                if (-1 === "123456789".indexOf(j))
                  return c("Bad value");
                Q += j, T = M;
              }
              continue;
            case x:
              if ("," === j)
                U.push(x), P && (m(P), n(), P = ""), T = t;
              else {
                if ("]" !== j) {
                  if (g(j))
                    continue;
                  return c("Bad array");
                }
                P && (m(P), n(), P = ""), n(), X--, T = U.pop() || t;
              }
              continue;
            case y:
              var e = d - 1;
              a: for (; ; ) {
                for (; W > 0; )
                  if (V += j, j = a.charAt(d++), 4 === W ? (P += String.fromCharCode(parseInt(V, 16)), W = 0, e = d - 1) : W++, !j)
                    break a;
                if ('"' === j && !R) {
                  T = U.pop() || t, P += a.substring(e, d - 1), P || (m(""), n());
                  break;
                }
                if ("\\" === j && !R && (R = !0, P += a.substring(e, d - 1), j = a.charAt(d++), !j))
                  break;
                if (R) {
                  if (R = !1, "n" === j ? P += "\n" : "r" === j ? P += "\r" : "t" === j ? P += "	" : "f" === j ? P += "\f" : "b" === j ? P += "\b" : "u" === j ? (W = 1, V = "") : P += j, j = a.charAt(d++), e = d - 1, j)
                    continue;
                  break;
                }
                q.lastIndex = d;
                var f = q.exec(a);
                if (!f) {
                  d = a.length + 1, P += a.substring(e, d - 1);
                  break;
                }
                if (d = f.index + 1, j = a.charAt(f.index), !j) {
                  P += a.substring(e, d - 1);
                  break;
                }
              }
              continue;
            case B:
              if (!j)
                continue;
              if ("r" !== j)
                return c("Invalid true started with t" + j);
              T = C;
              continue;
            case C:
              if (!j)
                continue;
              if ("u" !== j)
                return c("Invalid true started with tr" + j);
              T = D;
              continue;
            case D:
              if (!j)
                continue;
              if ("e" !== j)
                return c("Invalid true started with tru" + j);
              m(!0), n(), T = U.pop() || t;
              continue;
            case E:
              if (!j)
                continue;
              if ("a" !== j)
                return c("Invalid false started with f" + j);
              T = F;
              continue;
            case F:
              if (!j)
                continue;
              if ("l" !== j)
                return c("Invalid false started with fa" + j);
              T = G;
              continue;
            case G:
              if (!j)
                continue;
              if ("s" !== j)
                return c("Invalid false started with fal" + j);
              T = H;
              continue;
            case H:
              if (!j)
                continue;
              if ("e" !== j)
                return c("Invalid false started with fals" + j);
              m(!1), n(), T = U.pop() || t;
              continue;
            case I:
              if (!j)
                continue;
              if ("u" !== j)
                return c("Invalid null started with n" + j);
              T = J;
              continue;
            case J:
              if (!j)
                continue;
              if ("l" !== j)
                return c("Invalid null started with nu" + j);
              T = K;
              continue;
            case K:
              if (!j)
                continue;
              if ("l" !== j)
                return c("Invalid null started with nul" + j);
              m(null), n(), T = U.pop() || t;
              continue;
            case L:
              if ("." !== j)
                return c("Leading zero not followed by .");
              Q += j, T = M;
              continue;
            case M:
              if (-1 !== "0123456789".indexOf(j))
                Q += j;
              else if ("." === j) {
                if (-1 !== Q.indexOf("."))
                  return c("Invalid number has two dots");
                Q += j;
              } else if ("e" === j || "E" === j) {
                if (-1 !== Q.indexOf("e") || -1 !== Q.indexOf("E"))
                  return c("Invalid number has two exponential");
                Q += j;
              } else if ("+" === j || "-" === j) {
                if ("e" !== k && "E" !== k)
                  return c("Invalid symbol in number");
                Q += j;
              } else
                Q && (m(parseFloat(Q)), n(), Q = ""), d--, T = U.pop() || t;
              continue;
            default:
              return c("Unknown state: " + T);
          }
        Y >= O && b();
      }
    }
    var i,
        j,
        k,
        l = a(qb).emit,
        m = a(rb).emit,
        n = a(sb).emit,
        o = a(jb).emit,
        p = 65536,
        q = /[\\"\n]/g,
        r = 0,
        s = r++,
        t = r++,
        u = r++,
        v = r++,
        w = r++,
        x = r++,
        y = r++,
        z = r++,
        A = r++,
        B = r++,
        C = r++,
        D = r++,
        E = r++,
        F = r++,
        G = r++,
        H = r++,
        I = r++,
        J = r++,
        K = r++,
        L = r++,
        M = r,
        O = p,
        P = "",
        Q = "",
        R = !1,
        S = !1,
        T = s,
        U = [],
        V = null,
        W = 0,
        X = 0,
        Y = 0,
        Z = 0,
        $ = 1;
    a(nb).on(h), a(ob).on(e);
  }
  function D(a, b) {
    "use strict";
    function d(a) {
      return function(b) {
        e = a(e, b);
      };
    }
    var e,
        f = {};
    for (var g in b)
      a(g).on(d(b[g]), f);
    a(hb).on(function(a) {
      var b,
          c = Y(e),
          d = ab(c),
          f = Z(e);
      f && (b = bb(Y(f)), b[d] = a);
    }), a(ib).on(function() {
      var a,
          b = Y(e),
          d = ab(b),
          f = Z(e);
      f && (a = bb(Y(f)), p(c, a) ? a.length-- : delete a[d]);
    }), a(pb).on(function() {
      for (var c in b)
        a(c).un(f);
    });
  }
  function E(a) {
    var b = {};
    return a && a.split("\r\n").forEach(function(a) {
      var c = a.indexOf(": ");
      b[a.substring(0, c)] = a.substring(c + 2);
    }), b;
  }
  function F(a, b) {
    function c(a) {
      return {
        "http:": 80,
        "https:": 443
      }[a];
    }
    function d(b) {
      return b.port || c(b.protocol || a.protocol);
    }
    return !!(b.protocol && b.protocol != a.protocol || b.host && b.host != a.host || b.host && d(b) != d(a));
  }
  function G(a) {
    var b = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/,
        c = b.exec(a) || [];
    return {
      protocol: c[1] || "",
      host: c[2] || "",
      port: c[3] || ""
    };
  }
  function H() {
    return new XMLHttpRequest;
  }
  function I(b, c, d, e, g, h, i) {
    "use strict";
    function j() {
      var a = c.responseText,
          b = a.substr(m);
      b && k(b), m = V(a);
    }
    var k = b(nb).emit,
        l = b(jb).emit,
        m = 0,
        n = !0;
    b(pb).on(function() {
      c.onreadystatechange = null, c.abort();
    }), "onprogress" in c && (c.onprogress = j), c.onreadystatechange = function() {
      function a() {
        try {
          n && b(mb).emit(c.status, E(c.getAllResponseHeaders())), n = !1;
        } catch (a) {}
      }
      switch (c.readyState) {
        case 2:
        case 3:
          return a();
        case 4:
          a();
          var d = 2 == String(c.status)[0];
          d ? (j(), b(ob).emit()) : l(N(c.status, c.responseText));
      }
    };
    try {
      c.open(d, e, !0);
      for (var o in h)
        c.setRequestHeader(o, h[o]);
      F(a.location, G(e)) || c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.withCredentials = i, c.send(g);
    } catch (p) {
      a.setTimeout(T(l, N(f, f, p)), 0);
    }
  }
  function J(a, b) {
    return {
      key: a,
      node: b
    };
  }
  function K(a) {
    function b(a, b) {
      var d = bb(Y(a));
      return p(c, d) ? f(a, V(d), b) : a;
    }
    function d(a, c) {
      if (!a)
        return j(c), f(a, cb, c);
      var d = b(a, c),
          g = Z(d),
          h = ab(Y(d));
      return e(g, h, c), s(J(h, c), g);
    }
    function e(a, b, c) {
      bb(Y(a))[b] = c;
    }
    function f(a, b, c) {
      a && e(a, b, c);
      var d = s(J(b, c), a);
      return h(d), d;
    }
    function g(a) {
      return i(a), Z(a) || k(bb(Y(a)));
    }
    var h = a(fb).emit,
        i = a(gb).emit,
        j = a(lb).emit,
        k = a(kb).emit,
        l = {};
    return l[rb] = d, l[sb] = g, l[qb] = f, l;
  }
  function L(a, b, c) {
    function d(a) {
      return function(b) {
        return b.id == a;
      };
    }
    var e,
        f;
    return {
      on: function(c, d) {
        var g = {
          listener: c,
          id: d || c
        };
        return b && b.emit(a, c, g.id), e = s(g, e), f = s(c, f), this;
      },
      emit: function() {
        z(f, arguments);
      },
      un: function(b) {
        var g;
        e = x(e, d(b), function(a) {
          g = a;
        }), g && (f = x(f, function(a) {
          return a == g.listener;
        }), c && c.emit(a, g.listener, g.id));
      },
      listeners: function() {
        return f;
      },
      hasListener: function(a) {
        var b = a ? d(a) : n;
        return q(B(b, e));
      }
    };
  }
  function M() {
    function a(a) {
      return c[a] = L(a, d, e);
    }
    function b(b) {
      return c[b] || a(b);
    }
    var c = {},
        d = a("newListener"),
        e = a("removeListener");
    return ["emit", "on", "un"].forEach(function(a) {
      b[a] = j(function(c, d) {
        i(d, b(c)[a]);
      });
    }), b;
  }
  function N(a, b, c) {
    try {
      var d = e.parse(b);
    } catch (f) {}
    return {
      statusCode: a,
      body: b,
      jsonBody: d,
      thrown: c
    };
  }
  function O(a, b) {
    function c(a, b, c) {
      var d = A(c);
      a(b, u(Z(v(ab, d))), u(v(bb, d)));
    }
    function d(b, d, e) {
      var f = a(b).emit;
      d.on(function(a) {
        var b = e(a);
        b !== !1 && c(f, bb(b), a);
      }, b), a("removeListener").on(function(c) {
        c == b && (a(c).listeners() || d.un(b));
      });
    }
    var e = {
      node: a(gb),
      path: a(fb)
    };
    a("newListener").on(function(a) {
      var c = /(node|path):(.*)/.exec(a);
      if (c) {
        var f = e[c[1]];
        f.hasListener(a) || d(a, f, b(c[2]));
      }
    });
  }
  function P(a, b) {
    function c(b, c) {
      return a(b).on(e(c), c), p;
    }
    function d(a, b, c) {
      c = c || b;
      var d = e(b);
      return a.on(function() {
        var b = !1;
        p.forget = function() {
          b = !0;
        }, i(arguments, d), delete p.forget, b && a.un(c);
      }, c), p;
    }
    function e(b) {
      return function() {
        try {
          return b.apply(p, arguments);
        } catch (c) {
          a(jb).emit(N(f, f, c));
        }
      };
    }
    function g(b, c) {
      return a(b + ":" + c);
    }
    function h(a) {
      return function() {
        var b = a.apply(this, arguments);
        q(b) && (b == S.drop ? t() : u(b));
      };
    }
    function k(a, b, c) {
      var e;
      e = "node" == a ? h(c) : c, d(g(a, b), e, c);
    }
    function l(a, b) {
      for (var c in b)
        k(a, c, b[c]);
    }
    function n(a, b, c) {
      return W(b) ? k(a, b, c) : l(a, b), p;
    }
    var p,
        r = /^(node|path):./,
        s = a(kb),
        t = a(ib).emit,
        u = a(hb).emit,
        v = j(function(b, c) {
          if (p[b])
            i(c, p[b]);
          else {
            var e = a(b),
                f = c[0];
            r.test(b) ? d(e, f) : e.on(f);
          }
          return p;
        }),
        w = function(b, c, d) {
          if ("done" == b)
            s.un(c);
          else if ("node" == b || "path" == b)
            a.un(b + ":" + c, d);
          else {
            var e = c;
            a(b).un(e);
          }
          return p;
        };
    return a(lb).on(function(a) {
      p.root = o(a);
    }), a(mb).on(function(a, b) {
      p.header = function(a) {
        return a ? b[a] : b;
      };
    }), p = {
      on: v,
      addListener: v,
      removeListener: w,
      emit: a.emit,
      node: T(n, "node"),
      path: T(n, "path"),
      done: T(d, s),
      start: T(c, mb),
      fail: a(jb).on,
      abort: a(pb).emit,
      header: m,
      root: m,
      source: b
    };
  }
  function Q(a, b, c, d, e) {
    var f = M();
    return b && I(f, H(), a, b, c, d, e), C(f), D(f, K(f)), O(f, db), P(f, b);
  }
  function R(a, b, c, d, f, g, h) {
    function i(a, b) {
      return b === !1 && (a += -1 == a.indexOf("?") ? "?" : "&", a += "_=" + (new Date).getTime()), a;
    }
    return f = f ? e.parse(e.stringify(f)) : {}, d ? W(d) || (d = e.stringify(d), f["Content-Type"] = f["Content-Type"] || "application/json") : d = null, a(c || "GET", i(b, h), d, f, g || !1);
  }
  function S(a) {
    var b = $("resume", "pause", "pipe", "unpipe", "unshift"),
        c = T(r, b);
    return a ? c(a) || W(a) ? R(Q, a) : R(Q, a.url, a.method, a.body, a.headers, a.withCredentials, a.cached) : Q();
  }
  var T = j(function(a, b) {
    var c = b.length;
    return j(function(d) {
      for (var e = 0; e < d.length; e++)
        b[c + e] = d[e];
      return b.length = c + d.length, a.apply(this, b);
    });
  }),
      U = (j(function(a) {
        function b(a, b) {
          return [i(a, b)];
        }
        var c = t(a);
        return j(function(a) {
          return w(b, a, c)[0];
        });
      }), j(function(a) {
        return j(function(b) {
          for (var c,
              d = 0; d < V(a); d++)
            if (c = i(b, a[d]))
              return c;
        });
      })),
      V = h("length"),
      W = T(p, String),
      X = null,
      Y = h(0),
      Z = h(1),
      $ = j(t),
      _ = function() {
        var a = function(a) {
          return a.exec.bind(a);
        },
            b = j(function(b) {
              return b.unshift(/^/), a(RegExp(b.map(h("source")).join("")));
            }),
            c = /(\$?)/,
            d = /([\w-_]+|\*)/,
            e = /()/,
            f = /\["([^"]+)"\]/,
            g = /\[(\d+|\*)\]/,
            i = /{([\w ]*?)}/,
            k = /(?:{([\w ]*?)})?/,
            l = b(c, d, k),
            m = b(c, f, k),
            n = b(c, g, k),
            o = b(c, e, i),
            p = b(/\.\./),
            q = b(/\./),
            r = b(c, /!/),
            s = b(/$/);
        return function(a) {
          return a(U(l, m, n, o), p, q, r, s);
        };
      }(),
      ab = h("key"),
      bb = h("node"),
      cb = {},
      db = _(function(a, b, c, e, f) {
        function h(a, b) {
          var c = b[z],
              d = c && "*" != c ? function(a) {
                return B(a) == c;
              } : n;
          return l(d, a);
        }
        function i(a, b) {
          var c = b[A];
          if (!c)
            return a;
          var d = T(r, t(c.split(/\W+/))),
              e = g(d, C);
          return l(e, a);
        }
        function j(a, b) {
          var c = !!b[y];
          return c ? l(a, Y) : a;
        }
        function k(a) {
          function b(a) {
            return B(a) != cb;
          }
          return a == n ? n : l(b, g(a, Z));
        }
        function m(a) {
          if (a == n)
            return n;
          var b = o(),
              c = a,
              d = k(function(a) {
                return e(a);
              }),
              e = U(b, c, d);
          return e;
        }
        function o() {
          return function(a) {
            return B(a) == cb;
          };
        }
        function p(a) {
          return function(b) {
            var c = a(b);
            return c === !0 ? Y(b) : c;
          };
        }
        function q(a, b, c) {
          return w(function(a, b) {
            return b(a, c);
          }, b, a);
        }
        function s(a, b, c, d, e) {
          var f = a(c);
          if (f) {
            var g = q(b, d, f),
                h = c.substr(V(f[0]));
            return e(h, g);
          }
        }
        function u(a, b) {
          return T(s, a, b);
        }
        function v(a, b) {
          return b;
        }
        function x(a, b) {
          var c = a ? x : v;
          return D(a, b, c);
        }
        var y = 1,
            z = 2,
            A = 3,
            B = g(ab, Y),
            C = g(bb, Y),
            D = U(u(a, $(j, i, h, k)), u(b, $(m)), u(c, $()), u(e, $(j, o)), u(f, $(p)), function(a) {
              throw d('"' + a + '" could not be tokenised');
            });
        return function(a) {
          try {
            return x(a, n);
          } catch (b) {
            throw d('Could not compile "' + a + '" because ' + b.message);
          }
        };
      }),
      eb = 1,
      fb = eb++,
      gb = eb++,
      hb = eb++,
      ib = eb++,
      jb = "fail",
      kb = eb++,
      lb = eb++,
      mb = "start",
      nb = "data",
      ob = "end",
      pb = eb++,
      qb = eb++,
      rb = eb++,
      sb = eb++;
  S.drop = function() {
    return S.drop;
  }, "function" == typeof define && define.amd ? System.register("lib/oboe-browser", [], false, function(__require, __exports, __module) {
    return (function() {
      return S;
    }).call(this);
  }) : "object" == typeof exports ? module.exports = S : a.oboe = S;
}(window, Object, Array, Error, JSON);
})();
System.register("app/utils", [], function($__export) {
  "use strict";
  var __moduleName = "app/utils";
  function require(path) {
    return $traceurRuntime.require("app/utils", path);
  }
  function registerObserver(event, fn) {
    (this.listeners[event] || (this.listeners[event] = [])).push(fn);
  }
  function dispatch(event, argsArr) {
    var $__0 = this;
    if (this.listeners[event] instanceof Array) {
      this.listeners[event].forEach((function(listener) {
        return listener.apply($__0, argsArr);
      }));
    }
  }
  function Observable(constructorFn) {
    if (!constructorFn.prototype.observe) {
      constructorFn.prototype.observe = registerObserver;
    }
    if (!constructorFn.prototype._dispatch) {
      constructorFn.prototype._dispatch = dispatch;
    }
    return function() {
      var obj = Object.create(constructorFn.prototype);
      obj.listeners = {};
      constructorFn.apply(obj, arguments);
      return obj;
    };
  }
  function readPoint(point) {
    if (point instanceof Array) {
      return point;
    }
    return point.x !== undefined ? [point.x, point.y] : [point.r, point.theta];
  }
  function polarToCartesian(point) {
    var $__1 = readPoint(point),
        r = $__1[0],
        theta = $__1[1];
    return [r * Math.cos(theta), r * Math.sin(theta)];
  }
  function cartesianToPolar(point) {
    var $__1 = readPoint(point),
        x = $__1[0],
        y = $__1[1];
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
  }
  function offsetsToCartesian(point, newOrigin) {
    var $__1 = readPoint(point),
        pointX = $__1[0],
        pointY = $__1[1];
    var $__2 = readPoint(newOrigin),
        newOriginX = $__2[0],
        newOriginY = $__2[1];
    return [pointX - newOriginX, newOriginY - pointY];
  }
  function cartesianToOffsets(point, origin) {
    var $__1 = readPoint(point),
        x = $__1[0],
        y = $__1[1];
    var $__2 = readPoint(origin),
        originX = $__2[0],
        originY = $__2[1];
    return [x + originX, originY - y];
  }
  $__export("Observable", Observable);
  $__export("polarToCartesian", polarToCartesian);
  $__export("cartesianToPolar", cartesianToPolar);
  $__export("offsetsToCartesian", offsetsToCartesian);
  $__export("cartesianToOffsets", cartesianToOffsets);
  return {
    setters: [],
    execute: function() {
      ;
    }
  };
});

(function() {
function define(){};  define.amd = {};
!function() {
  function n(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0;
  }
  function t(n) {
    return null === n ? 0 / 0 : +n;
  }
  function e(n) {
    return !isNaN(n);
  }
  function r(n) {
    return {
      left: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
          var i = r + u >>> 1;
          n(t[i], e) < 0 ? r = i + 1 : u = i;
        }
        return r;
      },
      right: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
          var i = r + u >>> 1;
          n(t[i], e) > 0 ? u = i : r = i + 1;
        }
        return r;
      }
    };
  }
  function u(n) {
    return n.length;
  }
  function i(n) {
    for (var t = 1; n * t % 1; )
      t *= 10;
    return t;
  }
  function o(n, t) {
    for (var e in t)
      Object.defineProperty(n.prototype, e, {
        value: t[e],
        enumerable: !1
      });
  }
  function a() {
    this._ = Object.create(null);
  }
  function c(n) {
    return (n += "") === la || n[0] === sa ? sa + n : n;
  }
  function l(n) {
    return (n += "")[0] === sa ? n.slice(1) : n;
  }
  function s(n) {
    return c(n) in this._;
  }
  function f(n) {
    return (n = c(n)) in this._ && delete this._[n];
  }
  function h() {
    var n = [];
    for (var t in this._)
      n.push(l(t));
    return n;
  }
  function g() {
    var n = 0;
    for (var t in this._)
      ++n;
    return n;
  }
  function p() {
    for (var n in this._)
      return !1;
    return !0;
  }
  function v() {
    this._ = Object.create(null);
  }
  function d(n, t, e) {
    return function() {
      var r = e.apply(t, arguments);
      return r === t ? n : r;
    };
  }
  function m(n, t) {
    if (t in n)
      return t;
    t = t.charAt(0).toUpperCase() + t.slice(1);
    for (var e = 0,
        r = fa.length; r > e; ++e) {
      var u = fa[e] + t;
      if (u in n)
        return u;
    }
  }
  function y() {}
  function x() {}
  function M(n) {
    function t() {
      for (var t,
          r = e,
          u = -1,
          i = r.length; ++u < i; )
        (t = r[u].on) && t.apply(this, arguments);
      return n;
    }
    var e = [],
        r = new a;
    return t.on = function(t, u) {
      var i,
          o = r.get(t);
      return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {on: u})), n);
    }, t;
  }
  function _() {
    Bo.event.preventDefault();
  }
  function b() {
    for (var n,
        t = Bo.event; n = t.sourceEvent; )
      t = n;
    return t;
  }
  function w(n) {
    for (var t = new x,
        e = 0,
        r = arguments.length; ++e < r; )
      t[arguments[e]] = M(t);
    return t.of = function(e, r) {
      return function(u) {
        try {
          var i = u.sourceEvent = Bo.event;
          u.target = n, Bo.event = u, t[u.type].apply(e, r);
        } finally {
          Bo.event = i;
        }
      };
    }, t;
  }
  function S(n) {
    return ga(n, ya), n;
  }
  function k(n) {
    return "function" == typeof n ? n : function() {
      return pa(n, this);
    };
  }
  function E(n) {
    return "function" == typeof n ? n : function() {
      return va(n, this);
    };
  }
  function A(n, t) {
    function e() {
      this.removeAttribute(n);
    }
    function r() {
      this.removeAttributeNS(n.space, n.local);
    }
    function u() {
      this.setAttribute(n, t);
    }
    function i() {
      this.setAttributeNS(n.space, n.local, t);
    }
    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }
    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    }
    return n = Bo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u;
  }
  function C(n) {
    return n.trim().replace(/\s+/g, " ");
  }
  function N(n) {
    return new RegExp("(?:^|\\s+)" + Bo.requote(n) + "(?:\\s+|$)", "g");
  }
  function z(n) {
    return (n + "").trim().split(/^|\s+/);
  }
  function L(n, t) {
    function e() {
      for (var e = -1; ++e < u; )
        n[e](this, t);
    }
    function r() {
      for (var e = -1,
          r = t.apply(this, arguments); ++e < u; )
        n[e](this, r);
    }
    n = z(n).map(T);
    var u = n.length;
    return "function" == typeof t ? r : e;
  }
  function T(n) {
    var t = N(n);
    return function(e, r) {
      if (u = e.classList)
        return r ? u.add(n) : u.remove(n);
      var u = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", C(u + " " + n))) : e.setAttribute("class", C(u.replace(t, " ")));
    };
  }
  function q(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }
    function u() {
      this.style.setProperty(n, t, e);
    }
    function i() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    }
    return null == t ? r : "function" == typeof t ? i : u;
  }
  function R(n, t) {
    function e() {
      delete this[n];
    }
    function r() {
      this[n] = t;
    }
    function u() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e;
    }
    return null == t ? e : "function" == typeof t ? u : r;
  }
  function D(n) {
    return "function" == typeof n ? n : (n = Bo.ns.qualify(n)).local ? function() {
      return this.ownerDocument.createElementNS(n.space, n.local);
    } : function() {
      return this.ownerDocument.createElementNS(this.namespaceURI, n);
    };
  }
  function P(n) {
    return {__data__: n};
  }
  function U(n) {
    return function() {
      return ma(this, n);
    };
  }
  function j(t) {
    return arguments.length || (t = n), function(n, e) {
      return n && e ? t(n.__data__, e.__data__) : !n - !e;
    };
  }
  function F(n, t) {
    for (var e = 0,
        r = n.length; r > e; e++)
      for (var u,
          i = n[e],
          o = 0,
          a = i.length; a > o; o++)
        (u = i[o]) && t(u, o, e);
    return n;
  }
  function H(n) {
    return ga(n, Ma), n;
  }
  function O(n) {
    var t,
        e;
    return function(r, u, i) {
      var o,
          a = n[i].update,
          c = a.length;
      for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c; )
        ;
      return o;
    };
  }
  function Y() {
    var n = this.__transition__;
    n && ++n.active;
  }
  function I(n, t, e) {
    function r() {
      var t = this[o];
      t && (this.removeEventListener(n, t, t.$), delete this[o]);
    }
    function u() {
      var u = c(t, Jo(arguments));
      r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t;
    }
    function i() {
      var t,
          e = new RegExp("^__on([^.]+)" + Bo.requote(n) + "$");
      for (var r in this)
        if (t = r.match(e)) {
          var u = this[r];
          this.removeEventListener(t[1], u, u.$), delete this[r];
        }
    }
    var o = "__on" + n,
        a = n.indexOf("."),
        c = Z;
    a > 0 && (n = n.slice(0, a));
    var l = ba.get(n);
    return l && (n = l, c = V), a ? t ? u : r : t ? y : i;
  }
  function Z(n, t) {
    return function(e) {
      var r = Bo.event;
      Bo.event = e, t[0] = this.__data__;
      try {
        n.apply(this, t);
      } finally {
        Bo.event = r;
      }
    };
  }
  function V(n, t) {
    var e = Z(n, t);
    return function(n) {
      var t = this,
          r = n.relatedTarget;
      r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
    };
  }
  function X() {
    var n = ".dragsuppress-" + ++Sa,
        t = "click" + n,
        e = Bo.select(Qo).on("touchmove" + n, _).on("dragstart" + n, _).on("selectstart" + n, _);
    if (wa) {
      var r = Ko.style,
          u = r[wa];
      r[wa] = "none";
    }
    return function(i) {
      function o() {
        e.on(t, null);
      }
      e.on(n, null), wa && (r[wa] = u), i && (e.on(t, function() {
        _(), o();
      }, !0), setTimeout(o, 0));
    };
  }
  function $(n, t) {
    t.changedTouches && (t = t.changedTouches[0]);
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      if (0 > ka && (Qo.scrollX || Qo.scrollY)) {
        e = Bo.select("body").append("svg").style({
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: "none"
        }, "important");
        var u = e[0][0].getScreenCTM();
        ka = !(u.f || u.e), e.remove();
      }
      return ka ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    var i = n.getBoundingClientRect();
    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
  }
  function B() {
    return Bo.event.changedTouches[0].identifier;
  }
  function W() {
    return Bo.event.target;
  }
  function J() {
    return Qo;
  }
  function G(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0;
  }
  function K(n, t, e) {
    return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
  }
  function Q(n) {
    return n > 1 ? 0 : -1 > n ? Ea : Math.acos(n);
  }
  function nt(n) {
    return n > 1 ? Ca : -1 > n ? -Ca : Math.asin(n);
  }
  function tt(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }
  function et(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }
  function rt(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }
  function ut(n) {
    return (n = Math.sin(n / 2)) * n;
  }
  function it() {}
  function ot(n, t, e) {
    return this instanceof ot ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof ot ? new ot(n.h, n.s, n.l) : Mt("" + n, _t, ot) : new ot(n, t, e);
  }
  function at(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i;
    }
    function u(n) {
      return Math.round(255 * r(n));
    }
    var i,
        o;
    return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new dt(u(n + 120), u(n), u(n - 120));
  }
  function ct(n, t, e) {
    return this instanceof ct ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof ct ? new ct(n.h, n.c, n.l) : n instanceof st ? ht(n.l, n.a, n.b) : ht((n = bt((n = Bo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new ct(n, t, e);
  }
  function lt(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new st(e, Math.cos(n *= La) * t, Math.sin(n) * t);
  }
  function st(n, t, e) {
    return this instanceof st ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof st ? new st(n.l, n.a, n.b) : n instanceof ct ? lt(n.h, n.c, n.l) : bt((n = dt(n)).r, n.g, n.b) : new st(n, t, e);
  }
  function ft(n, t, e) {
    var r = (n + 16) / 116,
        u = r + t / 500,
        i = r - e / 200;
    return u = gt(u) * Ya, r = gt(r) * Ia, i = gt(i) * Za, new dt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i), vt(-.969266 * u + 1.8760108 * r + .041556 * i), vt(.0556434 * u - .2040259 * r + 1.0572252 * i));
  }
  function ht(n, t, e) {
    return n > 0 ? new ct(Math.atan2(e, t) * Ta, Math.sqrt(t * t + e * e), n) : new ct(0 / 0, 0 / 0, n);
  }
  function gt(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }
  function pt(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }
  function vt(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055));
  }
  function dt(n, t, e) {
    return this instanceof dt ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof dt ? new dt(n.r, n.g, n.b) : Mt("" + n, dt, at) : new dt(n, t, e);
  }
  function mt(n) {
    return new dt(n >> 16, 255 & n >> 8, 255 & n);
  }
  function yt(n) {
    return mt(n) + "";
  }
  function xt(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
  }
  function Mt(n, t, e) {
    var r,
        u,
        i,
        o = 0,
        a = 0,
        c = 0;
    if (r = /([a-z]+)\((.*)\)/i.exec(n))
      switch (u = r[2].split(","), r[1]) {
        case "hsl":
          return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
        case "rgb":
          return t(St(u[0]), St(u[1]), St(u[2]));
      }
    return (i = $a.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c));
  }
  function _t(n, t, e) {
    var r,
        u,
        i = Math.min(n /= 255, t /= 255, e /= 255),
        o = Math.max(n, t, e),
        a = o - i,
        c = (o + i) / 2;
    return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new ot(r, u, c);
  }
  function bt(n, t, e) {
    n = wt(n), t = wt(t), e = wt(e);
    var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Ya),
        u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Ia),
        i = pt((.0193339 * n + .119192 * t + .9503041 * e) / Za);
    return st(116 * u - 16, 500 * (r - u), 200 * (u - i));
  }
  function wt(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
  }
  function St(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }
  function kt(n) {
    return "function" == typeof n ? n : function() {
      return n;
    };
  }
  function Et(n) {
    return n;
  }
  function At(n) {
    return function(t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Ct(t, e, n, r);
    };
  }
  function Ct(n, t, e, r) {
    function u() {
      var n,
          t = c.status;
      if (!t && zt(c) || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(i, c);
        } catch (r) {
          return o.error.call(i, r), void 0;
        }
        o.load.call(i, n);
      } else
        o.error.call(i, c);
    }
    var i = {},
        o = Bo.dispatch("beforesend", "progress", "load", "error"),
        a = {},
        c = new XMLHttpRequest,
        l = null;
    return !Qo.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
      c.readyState > 3 && u();
    }, c.onprogress = function(n) {
      var t = Bo.event;
      Bo.event = n;
      try {
        o.progress.call(i, c);
      } finally {
        Bo.event = t;
      }
    }, i.header = function(n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i);
    }, i.mimeType = function(n) {
      return arguments.length ? (t = null == n ? null : n + "", i) : t;
    }, i.responseType = function(n) {
      return arguments.length ? (l = n, i) : l;
    }, i.response = function(n) {
      return e = n, i;
    }, ["get", "post"].forEach(function(n) {
      i[n] = function() {
        return i.send.apply(i, [n].concat(Jo(arguments)));
      };
    }), i.send = function(e, r, u) {
      if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
        for (var s in a)
          c.setRequestHeader(s, a[s]);
      return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
        u(null, n);
      }), o.beforesend.call(i, c), c.send(null == r ? null : r), i;
    }, i.abort = function() {
      return c.abort(), i;
    }, Bo.rebind(i, o, "on"), null == r ? i : i.get(Nt(r));
  }
  function Nt(n) {
    return 1 === n.length ? function(t, e) {
      n(null == t ? e : null);
    } : n;
  }
  function zt(n) {
    var t = n.responseType;
    return t && "text" !== t ? n.response : n.responseText;
  }
  function Lt() {
    var n = Tt(),
        t = qt() - n;
    t > 24 ? (isFinite(t) && (clearTimeout(Ga), Ga = setTimeout(Lt, t)), Ja = 0) : (Ja = 1, Qa(Lt));
  }
  function Tt() {
    var n = Date.now();
    for (Ka = Ba; Ka; )
      n >= Ka.t && (Ka.f = Ka.c(n - Ka.t)), Ka = Ka.n;
    return n;
  }
  function qt() {
    for (var n,
        t = Ba,
        e = 1 / 0; t; )
      t.f ? t = n ? n.n = t.n : Ba = t.n : (t.t < e && (e = t.t), t = (n = t).n);
    return Wa = n, e;
  }
  function Rt(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }
  function Dt(n, t) {
    var e = Math.pow(10, 3 * ca(8 - t));
    return {
      scale: t > 8 ? function(n) {
        return n / e;
      } : function(n) {
        return n * e;
      },
      symbol: n
    };
  }
  function Pt(n) {
    var t = n.decimal,
        e = n.thousands,
        r = n.grouping,
        u = n.currency,
        i = r && e ? function(n, t) {
          for (var u = n.length,
              i = [],
              o = 0,
              a = r[0],
              c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), i.push(n.substring(u -= a, u + a)), !((c += a + 1) > t)); )
            a = r[o = (o + 1) % r.length];
          return i.reverse().join(e);
        } : Et;
    return function(n) {
      var e = tc.exec(n),
          r = e[1] || " ",
          o = e[2] || ">",
          a = e[3] || "-",
          c = e[4] || "",
          l = e[5],
          s = +e[6],
          f = e[7],
          h = e[8],
          g = e[9],
          p = 1,
          v = "",
          d = "",
          m = !1,
          y = !0;
      switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === o) && (l = r = "0", o = "="), g) {
        case "n":
          f = !0, g = "g";
          break;
        case "%":
          p = 100, d = "%", g = "f";
          break;
        case "p":
          p = 100, d = "%", g = "r";
          break;
        case "b":
        case "o":
        case "x":
        case "X":
          "#" === c && (v = "0" + g.toLowerCase());
        case "c":
          y = !1;
        case "d":
          m = !0, h = 0;
          break;
        case "s":
          p = -1, g = "r";
      }
      "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = ec.get(g) || Ut;
      var x = l && f;
      return function(n) {
        var e = d;
        if (m && n % 1)
          return "";
        var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a;
        if (0 > p) {
          var c = Bo.formatPrefix(n, h);
          n = c.scale(n), e = c.symbol + d;
        } else
          n *= p;
        n = g(n, h);
        var M,
            _,
            b = n.lastIndexOf(".");
        if (0 > b) {
          var w = y ? n.lastIndexOf("e") : -1;
          0 > w ? (M = n, _ = "") : (M = n.substring(0, w), _ = n.substring(w));
        } else
          M = n.substring(0, b), _ = t + n.substring(b + 1);
        !l && f && (M = i(M, 1 / 0));
        var S = v.length + M.length + _.length + (x ? 0 : u.length),
            k = s > S ? new Array(S = s - S + 1).join(r) : "";
        return x && (M = i(k + M, k.length ? s - _.length : 1 / 0)), u += v, n = M + _, ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (x ? n : k + n)) + e;
      };
    };
  }
  function Ut(n) {
    return n + "";
  }
  function jt() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  function Ft(n, t, e) {
    function r(t) {
      var e = n(t),
          r = i(e, 1);
      return r - t > t - e ? e : r;
    }
    function u(e) {
      return t(e = n(new uc(e - 1)), 1), e;
    }
    function i(n, e) {
      return t(n = new uc(+n), e), n;
    }
    function o(n, r, i) {
      var o = u(n),
          a = [];
      if (i > 1)
        for (; r > o; )
          e(o) % i || a.push(new Date(+o)), t(o, 1);
      else
        for (; r > o; )
          a.push(new Date(+o)), t(o, 1);
      return a;
    }
    function a(n, t, e) {
      try {
        uc = jt;
        var r = new jt;
        return r._ = n, o(r, t, e);
      } finally {
        uc = Date;
      }
    }
    n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
    var c = n.utc = Ht(n);
    return c.floor = c, c.round = Ht(r), c.ceil = Ht(u), c.offset = Ht(i), c.range = a, n;
  }
  function Ht(n) {
    return function(t, e) {
      try {
        uc = jt;
        var r = new jt;
        return r._ = t, n(r, e)._;
      } finally {
        uc = Date;
      }
    };
  }
  function Ot(n) {
    function t(n) {
      function t(t) {
        for (var e,
            u,
            i,
            o = [],
            a = -1,
            c = 0; ++a < r; )
          37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (u = oc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
        return o.push(n.slice(c, a)), o.join("");
      }
      var r = n.length;
      return t.parse = function(t) {
        var r = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        },
            u = e(r, n, t, 0);
        if (u != t.length)
          return null;
        "p" in r && (r.H = r.H % 12 + 12 * r.p);
        var i = null != r.Z && uc !== jt,
            o = new (i ? jt : uc);
        return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (0 | r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o;
      }, t.toString = function() {
        return n;
      }, t;
    }
    function e(n, t, e, r) {
      for (var u,
          i,
          o,
          a = 0,
          c = t.length,
          l = e.length; c > a; ) {
        if (r >= l)
          return -1;
        if (u = t.charCodeAt(a++), 37 === u) {
          if (o = t.charAt(a++), i = N[o in oc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0)
            return -1;
        } else if (u != e.charCodeAt(r++))
          return -1;
      }
      return r;
    }
    function r(n, t, e) {
      b.lastIndex = 0;
      var r = b.exec(t.slice(e));
      return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }
    function u(n, t, e) {
      M.lastIndex = 0;
      var r = M.exec(t.slice(e));
      return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }
    function i(n, t, e) {
      E.lastIndex = 0;
      var r = E.exec(t.slice(e));
      return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }
    function o(n, t, e) {
      S.lastIndex = 0;
      var r = S.exec(t.slice(e));
      return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }
    function a(n, t, r) {
      return e(n, C.c.toString(), t, r);
    }
    function c(n, t, r) {
      return e(n, C.x.toString(), t, r);
    }
    function l(n, t, r) {
      return e(n, C.X.toString(), t, r);
    }
    function s(n, t, e) {
      var r = x.get(t.slice(e, e += 2).toLowerCase());
      return null == r ? -1 : (n.p = r, e);
    }
    var f = n.dateTime,
        h = n.date,
        g = n.time,
        p = n.periods,
        v = n.days,
        d = n.shortDays,
        m = n.months,
        y = n.shortMonths;
    t.utc = function(n) {
      function e(n) {
        try {
          uc = jt;
          var t = new uc;
          return t._ = n, r(t);
        } finally {
          uc = Date;
        }
      }
      var r = t(n);
      return e.parse = function(n) {
        try {
          uc = jt;
          var t = r.parse(n);
          return t && t._;
        } finally {
          uc = Date;
        }
      }, e.toString = r.toString, e;
    }, t.multi = t.utc.multi = ae;
    var x = Bo.map(),
        M = It(v),
        _ = Zt(v),
        b = It(d),
        w = Zt(d),
        S = It(m),
        k = Zt(m),
        E = It(y),
        A = Zt(y);
    p.forEach(function(n, t) {
      x.set(n.toLowerCase(), t);
    });
    var C = {
      a: function(n) {
        return d[n.getDay()];
      },
      A: function(n) {
        return v[n.getDay()];
      },
      b: function(n) {
        return y[n.getMonth()];
      },
      B: function(n) {
        return m[n.getMonth()];
      },
      c: t(f),
      d: function(n, t) {
        return Yt(n.getDate(), t, 2);
      },
      e: function(n, t) {
        return Yt(n.getDate(), t, 2);
      },
      H: function(n, t) {
        return Yt(n.getHours(), t, 2);
      },
      I: function(n, t) {
        return Yt(n.getHours() % 12 || 12, t, 2);
      },
      j: function(n, t) {
        return Yt(1 + rc.dayOfYear(n), t, 3);
      },
      L: function(n, t) {
        return Yt(n.getMilliseconds(), t, 3);
      },
      m: function(n, t) {
        return Yt(n.getMonth() + 1, t, 2);
      },
      M: function(n, t) {
        return Yt(n.getMinutes(), t, 2);
      },
      p: function(n) {
        return p[+(n.getHours() >= 12)];
      },
      S: function(n, t) {
        return Yt(n.getSeconds(), t, 2);
      },
      U: function(n, t) {
        return Yt(rc.sundayOfYear(n), t, 2);
      },
      w: function(n) {
        return n.getDay();
      },
      W: function(n, t) {
        return Yt(rc.mondayOfYear(n), t, 2);
      },
      x: t(h),
      X: t(g),
      y: function(n, t) {
        return Yt(n.getFullYear() % 100, t, 2);
      },
      Y: function(n, t) {
        return Yt(n.getFullYear() % 1e4, t, 4);
      },
      Z: ie,
      "%": function() {
        return "%";
      }
    },
        N = {
          a: r,
          A: u,
          b: i,
          B: o,
          c: a,
          d: Qt,
          e: Qt,
          H: te,
          I: te,
          j: ne,
          L: ue,
          m: Kt,
          M: ee,
          p: s,
          S: re,
          U: Xt,
          w: Vt,
          W: $t,
          x: c,
          X: l,
          y: Wt,
          Y: Bt,
          Z: Jt,
          "%": oe
        };
    return t;
  }
  function Yt(n, t, e) {
    var r = 0 > n ? "-" : "",
        u = (r ? -n : n) + "",
        i = u.length;
    return r + (e > i ? new Array(e - i + 1).join(t) + u : u);
  }
  function It(n) {
    return new RegExp("^(?:" + n.map(Bo.requote).join("|") + ")", "i");
  }
  function Zt(n) {
    for (var t = new a,
        e = -1,
        r = n.length; ++e < r; )
      t.set(n[e].toLowerCase(), e);
    return t;
  }
  function Vt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 1));
    return r ? (n.w = +r[0], e + r[0].length) : -1;
  }
  function Xt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e));
    return r ? (n.U = +r[0], e + r[0].length) : -1;
  }
  function $t(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e));
    return r ? (n.W = +r[0], e + r[0].length) : -1;
  }
  function Bt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 4));
    return r ? (n.y = +r[0], e + r[0].length) : -1;
  }
  function Wt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1;
  }
  function Jt(n, t, e) {
    return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1;
  }
  function Gt(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }
  function Kt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
  }
  function Qt(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.d = +r[0], e + r[0].length) : -1;
  }
  function ne(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 3));
    return r ? (n.j = +r[0], e + r[0].length) : -1;
  }
  function te(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.H = +r[0], e + r[0].length) : -1;
  }
  function ee(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.M = +r[0], e + r[0].length) : -1;
  }
  function re(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 2));
    return r ? (n.S = +r[0], e + r[0].length) : -1;
  }
  function ue(n, t, e) {
    ac.lastIndex = 0;
    var r = ac.exec(t.slice(e, e + 3));
    return r ? (n.L = +r[0], e + r[0].length) : -1;
  }
  function ie(n) {
    var t = n.getTimezoneOffset(),
        e = t > 0 ? "-" : "+",
        r = 0 | ca(t) / 60,
        u = ca(t) % 60;
    return e + Yt(r, "0", 2) + Yt(u, "0", 2);
  }
  function oe(n, t, e) {
    cc.lastIndex = 0;
    var r = cc.exec(t.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function ae(n) {
    for (var t = n.length,
        e = -1; ++e < t; )
      n[e][0] = this(n[e][0]);
    return function(t) {
      for (var e = 0,
          r = n[e]; !r[1](t); )
        r = n[++e];
      return r[0](t);
    };
  }
  function ce() {}
  function le(n, t, e) {
    var r = e.s = n + t,
        u = r - n,
        i = r - u;
    e.t = n - i + (t - u);
  }
  function se(n, t) {
    n && hc.hasOwnProperty(n.type) && hc[n.type](n, t);
  }
  function fe(n, t, e) {
    var r,
        u = -1,
        i = n.length - e;
    for (t.lineStart(); ++u < i; )
      r = n[u], t.point(r[0], r[1], r[2]);
    t.lineEnd();
  }
  function he(n, t) {
    var e = -1,
        r = n.length;
    for (t.polygonStart(); ++e < r; )
      fe(n[e], t, 1);
    t.polygonEnd();
  }
  function ge() {
    function n(n, t) {
      n *= La, t = t * La / 2 + Ea / 4;
      var e = n - r,
          o = e >= 0 ? 1 : -1,
          a = o * e,
          c = Math.cos(t),
          l = Math.sin(t),
          s = i * l,
          f = u * c + s * Math.cos(a),
          h = s * o * Math.sin(a);
      pc.add(Math.atan2(h, f)), r = n, u = c, i = l;
    }
    var t,
        e,
        r,
        u,
        i;
    vc.point = function(o, a) {
      vc.point = n, r = (t = o) * La, u = Math.cos(a = (e = a) * La / 2 + Ea / 4), i = Math.sin(a);
    }, vc.lineEnd = function() {
      n(t, e);
    };
  }
  function pe(n) {
    var t = n[0],
        e = n[1],
        r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }
  function ve(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }
  function de(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
  }
  function me(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2];
  }
  function ye(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }
  function xe(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t, n[1] /= t, n[2] /= t;
  }
  function Me(n) {
    return [Math.atan2(n[1], n[0]), nt(n[2])];
  }
  function _e(n, t) {
    return ca(n[0] - t[0]) < Na && ca(n[1] - t[1]) < Na;
  }
  function be(n, t) {
    n *= La;
    var e = Math.cos(t *= La);
    we(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }
  function we(n, t, e) {
    ++dc, yc += (n - yc) / dc, xc += (t - xc) / dc, Mc += (e - Mc) / dc;
  }
  function Se() {
    function n(n, u) {
      n *= La;
      var i = Math.cos(u *= La),
          o = i * Math.cos(n),
          a = i * Math.sin(n),
          c = Math.sin(u),
          l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
      mc += l, _c += l * (t + (t = o)), bc += l * (e + (e = a)), wc += l * (r + (r = c)), we(t, e, r);
    }
    var t,
        e,
        r;
    Ac.point = function(u, i) {
      u *= La;
      var o = Math.cos(i *= La);
      t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Ac.point = n, we(t, e, r);
    };
  }
  function ke() {
    Ac.point = be;
  }
  function Ee() {
    function n(n, t) {
      n *= La;
      var e = Math.cos(t *= La),
          o = e * Math.cos(n),
          a = e * Math.sin(n),
          c = Math.sin(t),
          l = u * c - i * a,
          s = i * o - r * c,
          f = r * a - u * o,
          h = Math.sqrt(l * l + s * s + f * f),
          g = r * o + u * a + i * c,
          p = h && -Q(g) / h,
          v = Math.atan2(h, g);
      Sc += p * l, kc += p * s, Ec += p * f, mc += v, _c += v * (r + (r = o)), bc += v * (u + (u = a)), wc += v * (i + (i = c)), we(r, u, i);
    }
    var t,
        e,
        r,
        u,
        i;
    Ac.point = function(o, a) {
      t = o, e = a, Ac.point = n, o *= La;
      var c = Math.cos(a *= La);
      r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i);
    }, Ac.lineEnd = function() {
      n(t, e), Ac.lineEnd = ke, Ac.point = be;
    };
  }
  function Ae() {
    return !0;
  }
  function Ce(n, t, e, r, u) {
    var i = [],
        o = [];
    if (n.forEach(function(n) {
      if (!((t = n.length - 1) <= 0)) {
        var t,
            e = n[0],
            r = n[t];
        if (_e(e, r)) {
          u.lineStart();
          for (var a = 0; t > a; ++a)
            u.point((e = n[a])[0], e[1]);
          return u.lineEnd(), void 0;
        }
        var c = new ze(e, n, null, !0),
            l = new ze(e, null, c, !1);
        c.o = l, i.push(c), o.push(l), c = new ze(r, n, null, !1), l = new ze(r, null, c, !0), c.o = l, i.push(c), o.push(l);
      }
    }), o.sort(t), Ne(i), Ne(o), i.length) {
      for (var a = 0,
          c = e,
          l = o.length; l > a; ++a)
        o[a].e = c = !c;
      for (var s,
          f,
          h = i[0]; ; ) {
        for (var g = h,
            p = !0; g.v; )
          if ((g = g.n) === h)
            return;
        s = g.z, u.lineStart();
        do {
          if (g.v = g.o.v = !0, g.e) {
            if (p)
              for (var a = 0,
                  l = s.length; l > a; ++a)
                u.point((f = s[a])[0], f[1]);
            else
              r(g.x, g.n.x, 1, u);
            g = g.n;
          } else {
            if (p) {
              s = g.p.z;
              for (var a = s.length - 1; a >= 0; --a)
                u.point((f = s[a])[0], f[1]);
            } else
              r(g.x, g.p.x, -1, u);
            g = g.p;
          }
          g = g.o, s = g.z, p = !p;
        } while (!g.v);
        u.lineEnd();
      }
    }
  }
  function Ne(n) {
    if (t = n.length) {
      for (var t,
          e,
          r = 0,
          u = n[0]; ++r < t; )
        u.n = e = n[r], e.p = u, u = e;
      u.n = e = n[0], e.p = u;
    }
  }
  function ze(n, t, e, r) {
    this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }
  function Le(n, t, e, r) {
    return function(u, i) {
      function o(t, e) {
        var r = u(t, e);
        n(t = r[0], e = r[1]) && i.point(t, e);
      }
      function a(n, t) {
        var e = u(n, t);
        d.point(e[0], e[1]);
      }
      function c() {
        y.point = a, d.lineStart();
      }
      function l() {
        y.point = o, d.lineEnd();
      }
      function s(n, t) {
        v.push([n, t]);
        var e = u(n, t);
        M.point(e[0], e[1]);
      }
      function f() {
        M.lineStart(), v = [];
      }
      function h() {
        s(v[0][0], v[0][1]), M.lineEnd();
        var n,
            t = M.clean(),
            e = x.buffer(),
            r = e.length;
        if (v.pop(), p.push(v), v = null, r)
          if (1 & t) {
            n = e[0];
            var u,
                r = n.length - 1,
                o = -1;
            if (r > 0) {
              for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r; )
                i.point((u = n[o])[0], u[1]);
              i.lineEnd();
            }
          } else
            r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Te));
      }
      var g,
          p,
          v,
          d = t(i),
          m = u.invert(r[0], r[1]),
          y = {
            point: o,
            lineStart: c,
            lineEnd: l,
            polygonStart: function() {
              y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = [];
            },
            polygonEnd: function() {
              y.point = o, y.lineStart = c, y.lineEnd = l, g = Bo.merge(g);
              var n = je(m, p);
              g.length ? (_ || (i.polygonStart(), _ = !0), Ce(g, Re, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null;
            },
            sphere: function() {
              i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
            }
          },
          x = qe(),
          M = t(x),
          _ = !1;
      return y;
    };
  }
  function Te(n) {
    return n.length > 1;
  }
  function qe() {
    var n,
        t = [];
    return {
      lineStart: function() {
        t.push(n = []);
      },
      point: function(t, e) {
        n.push([t, e]);
      },
      lineEnd: y,
      buffer: function() {
        var e = t;
        return t = [], n = null, e;
      },
      rejoin: function() {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      }
    };
  }
  function Re(n, t) {
    return ((n = n.x)[0] < 0 ? n[1] - Ca - Na : Ca - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ca - Na : Ca - t[1]);
  }
  function De(n) {
    var t,
        e = 0 / 0,
        r = 0 / 0,
        u = 0 / 0;
    return {
      lineStart: function() {
        n.lineStart(), t = 1;
      },
      point: function(i, o) {
        var a = i > 0 ? Ea : -Ea,
            c = ca(i - e);
        ca(c - Ea) < Na ? (n.point(e, r = (r + o) / 2 > 0 ? Ca : -Ca), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Ea && (ca(e - u) < Na && (e -= u * Na), ca(i - a) < Na && (i -= a * Na), r = Pe(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a;
      },
      lineEnd: function() {
        n.lineEnd(), e = r = 0 / 0;
      },
      clean: function() {
        return 2 - t;
      }
    };
  }
  function Pe(n, t, e, r) {
    var u,
        i,
        o = Math.sin(n - e);
    return ca(o) > Na ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2;
  }
  function Ue(n, t, e, r) {
    var u;
    if (null == n)
      u = e * Ca, r.point(-Ea, u), r.point(0, u), r.point(Ea, u), r.point(Ea, 0), r.point(Ea, -u), r.point(0, -u), r.point(-Ea, -u), r.point(-Ea, 0), r.point(-Ea, u);
    else if (ca(n[0] - t[0]) > Na) {
      var i = n[0] < t[0] ? Ea : -Ea;
      u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u);
    } else
      r.point(t[0], t[1]);
  }
  function je(n, t) {
    var e = n[0],
        r = n[1],
        u = [Math.sin(e), -Math.cos(e), 0],
        i = 0,
        o = 0;
    pc.reset();
    for (var a = 0,
        c = t.length; c > a; ++a) {
      var l = t[a],
          s = l.length;
      if (s)
        for (var f = l[0],
            h = f[0],
            g = f[1] / 2 + Ea / 4,
            p = Math.sin(g),
            v = Math.cos(g),
            d = 1; ; ) {
          d === s && (d = 0), n = l[d];
          var m = n[0],
              y = n[1] / 2 + Ea / 4,
              x = Math.sin(y),
              M = Math.cos(y),
              _ = m - h,
              b = _ >= 0 ? 1 : -1,
              w = b * _,
              S = w > Ea,
              k = p * x;
          if (pc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * Aa : _, S ^ h >= e ^ m >= e) {
            var E = de(pe(f), pe(n));
            xe(E);
            var A = de(u, E);
            xe(A);
            var C = (S ^ _ >= 0 ? -1 : 1) * nt(A[2]);
            (r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1);
          }
          if (!d++)
            break;
          h = m, p = x, v = M, f = n;
        }
    }
    return (-Na > i || Na > i && 0 > pc) ^ 1 & o;
  }
  function Fe(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > i;
    }
    function e(n) {
      var e,
          i,
          c,
          l,
          s;
      return {
        lineStart: function() {
          l = c = !1, s = 1;
        },
        point: function(f, h) {
          var g,
              p = [f, h],
              v = t(f, h),
              d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ea : -Ea), h) : 0;
          if (!e && (l = c = v) && n.lineStart(), v !== c && (g = r(e, p), (_e(e, g) || _e(p, g)) && (p[0] += Na, p[1] += Na, v = t(p[0], p[1]))), v !== c)
            s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
          else if (a && e && o ^ v) {
            var m;
            d & i || !(m = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])));
          }
          !v || e && _e(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d;
        },
        lineEnd: function() {
          c && n.lineEnd(), e = null;
        },
        clean: function() {
          return s | (l && c) << 1;
        }
      };
    }
    function r(n, t, e) {
      var r = pe(n),
          u = pe(t),
          o = [1, 0, 0],
          a = de(r, u),
          c = ve(a, a),
          l = a[0],
          s = c - l * l;
      if (!s)
        return !e && n;
      var f = i * c / s,
          h = -i * l / s,
          g = de(o, a),
          p = ye(o, f),
          v = ye(a, h);
      me(p, v);
      var d = g,
          m = ve(p, d),
          y = ve(d, d),
          x = m * m - y * (ve(p, p) - 1);
      if (!(0 > x)) {
        var M = Math.sqrt(x),
            _ = ye(d, (-m - M) / y);
        if (me(_, p), _ = Me(_), !e)
          return _;
        var b,
            w = n[0],
            S = t[0],
            k = n[1],
            E = t[1];
        w > S && (b = w, w = S, S = b);
        var A = S - w,
            C = ca(A - Ea) < Na,
            N = C || Na > A;
        if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (ca(_[0] - w) < Na ? k : E) : k <= _[1] && _[1] <= E : A > Ea ^ (w <= _[0] && _[0] <= S)) {
          var z = ye(d, (-m + M) / y);
          return me(z, p), [_, Me(z)];
        }
      }
    }
    function u(t, e) {
      var r = o ? n : Ea - n,
          u = 0;
      return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u;
    }
    var i = Math.cos(n),
        o = i > 0,
        a = ca(i) > Na,
        c = gr(n, 6 * La);
    return Le(t, e, c, o ? [0, -n] : [-Ea, n - Ea]);
  }
  function He(n, t, e, r) {
    return function(u) {
      var i,
          o = u.a,
          a = u.b,
          c = o.x,
          l = o.y,
          s = a.x,
          f = a.y,
          h = 0,
          g = 1,
          p = s - c,
          v = f - l;
      if (i = n - c, p || !(i > 0)) {
        if (i /= p, 0 > p) {
          if (h > i)
            return;
          g > i && (g = i);
        } else if (p > 0) {
          if (i > g)
            return;
          i > h && (h = i);
        }
        if (i = e - c, p || !(0 > i)) {
          if (i /= p, 0 > p) {
            if (i > g)
              return;
            i > h && (h = i);
          } else if (p > 0) {
            if (h > i)
              return;
            g > i && (g = i);
          }
          if (i = t - l, v || !(i > 0)) {
            if (i /= v, 0 > v) {
              if (h > i)
                return;
              g > i && (g = i);
            } else if (v > 0) {
              if (i > g)
                return;
              i > h && (h = i);
            }
            if (i = r - l, v || !(0 > i)) {
              if (i /= v, 0 > v) {
                if (i > g)
                  return;
                i > h && (h = i);
              } else if (v > 0) {
                if (h > i)
                  return;
                g > i && (g = i);
              }
              return h > 0 && (u.a = {
                x: c + h * p,
                y: l + h * v
              }), 1 > g && (u.b = {
                x: c + g * p,
                y: l + g * v
              }), u;
            }
          }
        }
      }
    };
  }
  function Oe(n, t, e, r) {
    function u(r, u) {
      return ca(r[0] - n) < Na ? u > 0 ? 0 : 3 : ca(r[0] - e) < Na ? u > 0 ? 2 : 1 : ca(r[1] - t) < Na ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
    }
    function i(n, t) {
      return o(n.x, t.x);
    }
    function o(n, t) {
      var e = u(n, 1),
          r = u(t, 1);
      return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
    }
    return function(a) {
      function c(n) {
        for (var t = 0,
            e = d.length,
            r = n[1],
            u = 0; e > u; ++u)
          for (var i,
              o = 1,
              a = d[u],
              c = a.length,
              l = a[0]; c > o; ++o)
            i = a[o], l[1] <= r ? i[1] > r && K(l, i, n) > 0 && ++t : i[1] <= r && K(l, i, n) < 0 && --t, l = i;
        return 0 !== t;
      }
      function l(i, a, c, l) {
        var s = 0,
            f = 0;
        if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
          do
            l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
 while ((s = (s + c + 4) % 4) !== f);
        } else
          l.point(a[0], a[1]);
      }
      function s(u, i) {
        return u >= n && e >= u && i >= t && r >= i;
      }
      function f(n, t) {
        s(n, t) && a.point(n, t);
      }
      function h() {
        N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0;
      }
      function g() {
        v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd();
      }
      function p(n, t) {
        n = Math.max(-Nc, Math.min(Nc, n)), t = Math.max(-Nc, Math.min(Nc, t));
        var e = s(n, t);
        if (d && m.push([n, t]), S)
          y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t));
        else if (e && w)
          a.point(n, t);
        else {
          var r = {
            a: {
              x: _,
              y: b
            },
            b: {
              x: n,
              y: t
            }
          };
          C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
        }
        _ = n, b = t, w = e;
      }
      var v,
          d,
          m,
          y,
          x,
          M,
          _,
          b,
          w,
          S,
          k,
          E = a,
          A = qe(),
          C = He(n, t, e, r),
          N = {
            point: f,
            lineStart: h,
            lineEnd: g,
            polygonStart: function() {
              a = A, v = [], d = [], k = !0;
            },
            polygonEnd: function() {
              a = E, v = Bo.merge(v);
              var t = c([n, r]),
                  e = k && t,
                  u = v.length;
              (e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, l, a), a.polygonEnd()), v = d = m = null;
            }
          };
      return N;
    };
  }
  function Ye(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1]);
    }
    return n.invert && t.invert && (e.invert = function(e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1]);
    }), e;
  }
  function Ie(n) {
    var t = 0,
        e = Ea / 3,
        r = ir(n),
        u = r(t, e);
    return u.parallels = function(n) {
      return arguments.length ? r(t = n[0] * Ea / 180, e = n[1] * Ea / 180) : [180 * (t / Ea), 180 * (e / Ea)];
    }, u;
  }
  function Ze(n, t) {
    function e(n, t) {
      var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
      return [e * Math.sin(n *= u), o - e * Math.cos(n)];
    }
    var r = Math.sin(n),
        u = (r + Math.sin(t)) / 2,
        i = 1 + r * (2 * u - r),
        o = Math.sqrt(i) / u;
    return e.invert = function(n, t) {
      var e = o - t;
      return [Math.atan2(n, e) / u, nt((i - (n * n + e * e) * u * u) / (2 * u))];
    }, e;
  }
  function Ve() {
    function n(n, t) {
      Lc += u * n - r * t, r = n, u = t;
    }
    var t,
        e,
        r,
        u;
    Pc.point = function(i, o) {
      Pc.point = n, t = r = i, e = u = o;
    }, Pc.lineEnd = function() {
      n(t, e);
    };
  }
  function Xe(n, t) {
    Tc > n && (Tc = n), n > Rc && (Rc = n), qc > t && (qc = t), t > Dc && (Dc = t);
  }
  function $e() {
    function n(n, t) {
      o.push("M", n, ",", t, i);
    }
    function t(n, t) {
      o.push("M", n, ",", t), a.point = e;
    }
    function e(n, t) {
      o.push("L", n, ",", t);
    }
    function r() {
      a.point = n;
    }
    function u() {
      o.push("Z");
    }
    var i = Be(4.5),
        o = [],
        a = {
          point: n,
          lineStart: function() {
            a.point = t;
          },
          lineEnd: r,
          polygonStart: function() {
            a.lineEnd = u;
          },
          polygonEnd: function() {
            a.lineEnd = r, a.point = n;
          },
          pointRadius: function(n) {
            return i = Be(n), a;
          },
          result: function() {
            if (o.length) {
              var n = o.join("");
              return o = [], n;
            }
          }
        };
    return a;
  }
  function Be(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
  }
  function We(n, t) {
    yc += n, xc += t, ++Mc;
  }
  function Je() {
    function n(n, r) {
      var u = n - t,
          i = r - e,
          o = Math.sqrt(u * u + i * i);
      _c += o * (t + n) / 2, bc += o * (e + r) / 2, wc += o, We(t = n, e = r);
    }
    var t,
        e;
    jc.point = function(r, u) {
      jc.point = n, We(t = r, e = u);
    };
  }
  function Ge() {
    jc.point = We;
  }
  function Ke() {
    function n(n, t) {
      var e = n - r,
          i = t - u,
          o = Math.sqrt(e * e + i * i);
      _c += o * (r + n) / 2, bc += o * (u + t) / 2, wc += o, o = u * n - r * t, Sc += o * (r + n), kc += o * (u + t), Ec += 3 * o, We(r = n, u = t);
    }
    var t,
        e,
        r,
        u;
    jc.point = function(i, o) {
      jc.point = n, We(t = r = i, e = u = o);
    }, jc.lineEnd = function() {
      n(t, e);
    };
  }
  function Qe(n) {
    function t(t, e) {
      n.moveTo(t, e), n.arc(t, e, o, 0, Aa);
    }
    function e(t, e) {
      n.moveTo(t, e), a.point = r;
    }
    function r(t, e) {
      n.lineTo(t, e);
    }
    function u() {
      a.point = t;
    }
    function i() {
      n.closePath();
    }
    var o = 4.5,
        a = {
          point: t,
          lineStart: function() {
            a.point = e;
          },
          lineEnd: u,
          polygonStart: function() {
            a.lineEnd = i;
          },
          polygonEnd: function() {
            a.lineEnd = u, a.point = t;
          },
          pointRadius: function(n) {
            return o = n, a;
          },
          result: y
        };
    return a;
  }
  function nr(n) {
    function t(n) {
      return (a ? r : e)(n);
    }
    function e(t) {
      return rr(t, function(e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      });
    }
    function r(t) {
      function e(e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      }
      function r() {
        x = 0 / 0, S.point = i, t.lineStart();
      }
      function i(e, r) {
        var i = pe([e, r]),
            o = n(e, r);
        u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M);
      }
      function o() {
        S.point = e, t.lineEnd();
      }
      function c() {
        r(), S.point = l, S.lineEnd = s;
      }
      function l(n, t) {
        i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i;
      }
      function s() {
        u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o();
      }
      var f,
          h,
          g,
          p,
          v,
          d,
          m,
          y,
          x,
          M,
          _,
          b,
          w,
          S = {
            point: e,
            lineStart: r,
            lineEnd: o,
            polygonStart: function() {
              t.polygonStart(), S.lineStart = c;
            },
            polygonEnd: function() {
              t.polygonEnd(), S.lineStart = r;
            }
          };
      return S;
    }
    function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
      var y = s - t,
          x = f - e,
          M = y * y + x * x;
      if (M > 4 * i && d--) {
        var _ = a + g,
            b = c + p,
            w = l + v,
            S = Math.sqrt(_ * _ + b * b + w * w),
            k = Math.asin(w /= S),
            E = ca(ca(w) - 1) < Na || ca(r - h) < Na ? (r + h) / 2 : Math.atan2(b, _),
            A = n(E, k),
            C = A[0],
            N = A[1],
            z = C - t,
            L = N - e,
            T = x * z - y * L;
        (T * T / M > i || ca((y * z + x * L) / M - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, s, f, h, g, p, v, d, m));
      }
    }
    var i = .5,
        o = Math.cos(30 * La),
        a = 16;
    return t.precision = function(n) {
      return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i);
    }, t;
  }
  function tr(n) {
    var t = nr(function(t, e) {
      return n([t * Ta, e * Ta]);
    });
    return function(n) {
      return or(t(n));
    };
  }
  function er(n) {
    this.stream = n;
  }
  function rr(n, t) {
    return {
      point: t,
      sphere: function() {
        n.sphere();
      },
      lineStart: function() {
        n.lineStart();
      },
      lineEnd: function() {
        n.lineEnd();
      },
      polygonStart: function() {
        n.polygonStart();
      },
      polygonEnd: function() {
        n.polygonEnd();
      }
    };
  }
  function ur(n) {
    return ir(function() {
      return n;
    })();
  }
  function ir(n) {
    function t(n) {
      return n = a(n[0] * La, n[1] * La), [n[0] * h + c, l - n[1] * h];
    }
    function e(n) {
      return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Ta, n[1] * Ta];
    }
    function r() {
      a = Ye(o = lr(m, y, x), i);
      var n = i(v, d);
      return c = g - n[0] * h, l = p + n[1] * h, u();
    }
    function u() {
      return s && (s.valid = !1, s = null), t;
    }
    var i,
        o,
        a,
        c,
        l,
        s,
        f = nr(function(n, t) {
          return n = i(n, t), [n[0] * h + c, l - n[1] * h];
        }),
        h = 150,
        g = 480,
        p = 250,
        v = 0,
        d = 0,
        m = 0,
        y = 0,
        x = 0,
        M = Cc,
        _ = Et,
        b = null,
        w = null;
    return t.stream = function(n) {
      return s && (s.valid = !1), s = or(M(o, f(_(n)))), s.valid = !0, s;
    }, t.clipAngle = function(n) {
      return arguments.length ? (M = null == n ? (b = n, Cc) : Fe((b = +n) * La), u()) : b;
    }, t.clipExtent = function(n) {
      return arguments.length ? (w = n, _ = n ? Oe(n[0][0], n[0][1], n[1][0], n[1][1]) : Et, u()) : w;
    }, t.scale = function(n) {
      return arguments.length ? (h = +n, r()) : h;
    }, t.translate = function(n) {
      return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p];
    }, t.center = function(n) {
      return arguments.length ? (v = n[0] % 360 * La, d = n[1] % 360 * La, r()) : [v * Ta, d * Ta];
    }, t.rotate = function(n) {
      return arguments.length ? (m = n[0] % 360 * La, y = n[1] % 360 * La, x = n.length > 2 ? n[2] % 360 * La : 0, r()) : [m * Ta, y * Ta, x * Ta];
    }, Bo.rebind(t, f, "precision"), function() {
      return i = n.apply(this, arguments), t.invert = i.invert && e, r();
    };
  }
  function or(n) {
    return rr(n, function(t, e) {
      n.point(t * La, e * La);
    });
  }
  function ar(n, t) {
    return [n, t];
  }
  function cr(n, t) {
    return [n > Ea ? n - Aa : -Ea > n ? n + Aa : n, t];
  }
  function lr(n, t, e) {
    return n ? t || e ? Ye(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr;
  }
  function sr(n) {
    return function(t, e) {
      return t += n, [t > Ea ? t - Aa : -Ea > t ? t + Aa : t, e];
    };
  }
  function fr(n) {
    var t = sr(n);
    return t.invert = sr(-n), t;
  }
  function hr(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          c = Math.sin(n) * e,
          l = Math.sin(t),
          s = l * r + a * u;
      return [Math.atan2(c * i - s * o, a * r - l * u), nt(s * i + c * o)];
    }
    var r = Math.cos(n),
        u = Math.sin(n),
        i = Math.cos(t),
        o = Math.sin(t);
    return e.invert = function(n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          c = Math.sin(n) * e,
          l = Math.sin(t),
          s = l * i - c * o;
      return [Math.atan2(c * i + l * o, a * r + s * u), nt(s * r - a * u)];
    }, e;
  }
  function gr(n, t) {
    var e = Math.cos(n),
        r = Math.sin(n);
    return function(u, i, o, a) {
      var c = o * t;
      null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * Aa)) : (u = n + o * Aa, i = n - .5 * c);
      for (var l,
          s = u; o > 0 ? s > i : i > s; s -= c)
        a.point((l = Me([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1]);
    };
  }
  function pr(n, t) {
    var e = pe(t);
    e[0] -= n, xe(e);
    var r = Q(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Na) % (2 * Math.PI);
  }
  function vr(n, t, e) {
    var r = Bo.range(n, t - Na, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [n, t];
      });
    };
  }
  function dr(n, t, e) {
    var r = Bo.range(n, t - Na, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [t, n];
      });
    };
  }
  function mr(n) {
    return n.source;
  }
  function yr(n) {
    return n.target;
  }
  function xr(n, t, e, r) {
    var u = Math.cos(t),
        i = Math.sin(t),
        o = Math.cos(r),
        a = Math.sin(r),
        c = u * Math.cos(n),
        l = u * Math.sin(n),
        s = o * Math.cos(e),
        f = o * Math.sin(e),
        h = 2 * Math.asin(Math.sqrt(ut(r - t) + u * o * ut(e - n))),
        g = 1 / Math.sin(h),
        p = h ? function(n) {
          var t = Math.sin(n *= h) * g,
              e = Math.sin(h - n) * g,
              r = e * c + t * s,
              u = e * l + t * f,
              o = e * i + t * a;
          return [Math.atan2(u, r) * Ta, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ta];
        } : function() {
          return [n * Ta, t * Ta];
        };
    return p.distance = h, p;
  }
  function Mr() {
    function n(n, u) {
      var i = Math.sin(u *= La),
          o = Math.cos(u),
          a = ca((n *= La) - t),
          c = Math.cos(a);
      Fc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o;
    }
    var t,
        e,
        r;
    Hc.point = function(u, i) {
      t = u * La, e = Math.sin(i *= La), r = Math.cos(i), Hc.point = n;
    }, Hc.lineEnd = function() {
      Hc.point = Hc.lineEnd = y;
    };
  }
  function _r(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
          u = Math.cos(e),
          i = n(r * u);
      return [i * u * Math.sin(t), i * Math.sin(e)];
    }
    return e.invert = function(n, e) {
      var r = Math.sqrt(n * n + e * e),
          u = t(r),
          i = Math.sin(u),
          o = Math.cos(u);
      return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)];
    }, e;
  }
  function br(n, t) {
    function e(n, t) {
      o > 0 ? -Ca + Na > t && (t = -Ca + Na) : t > Ca - Na && (t = Ca - Na);
      var e = o / Math.pow(u(t), i);
      return [e * Math.sin(i * n), o - e * Math.cos(i * n)];
    }
    var r = Math.cos(n),
        u = function(n) {
          return Math.tan(Ea / 4 + n / 2);
        },
        i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
        o = r * Math.pow(u(n), i) / i;
    return i ? (e.invert = function(n, t) {
      var e = o - t,
          r = G(i) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ca];
    }, e) : Sr;
  }
  function wr(n, t) {
    function e(n, t) {
      var e = i - t;
      return [e * Math.sin(u * n), i - e * Math.cos(u * n)];
    }
    var r = Math.cos(n),
        u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
        i = r / u + n;
    return ca(u) < Na ? ar : (e.invert = function(n, t) {
      var e = i - t;
      return [Math.atan2(n, e) / u, i - G(u) * Math.sqrt(n * n + e * e)];
    }, e);
  }
  function Sr(n, t) {
    return [n, Math.log(Math.tan(Ea / 4 + t / 2))];
  }
  function kr(n) {
    var t,
        e = ur(n),
        r = e.scale,
        u = e.translate,
        i = e.clipExtent;
    return e.scale = function() {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.translate = function() {
      var n = u.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.clipExtent = function(n) {
      var o = i.apply(e, arguments);
      if (o === e) {
        if (t = null == n) {
          var a = Ea * r(),
              c = u();
          i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]]);
        }
      } else
        t && (o = null);
      return o;
    }, e.clipExtent(null);
  }
  function Er(n, t) {
    return [Math.log(Math.tan(Ea / 4 + t / 2)), -n];
  }
  function Ar(n) {
    return n[0];
  }
  function Cr(n) {
    return n[1];
  }
  function Nr(n) {
    for (var t = n.length,
        e = [0, 1],
        r = 2,
        u = 2; t > u; u++) {
      for (; r > 1 && K(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0; )
        --r;
      e[r++] = u;
    }
    return e.slice(0, r);
  }
  function zr(n, t) {
    return n[0] - t[0] || n[1] - t[1];
  }
  function Lr(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }
  function Tr(n, t, e, r) {
    var u = n[0],
        i = e[0],
        o = t[0] - u,
        a = r[0] - i,
        c = n[1],
        l = e[1],
        s = t[1] - c,
        f = r[1] - l,
        h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
    return [u + h * o, c + h * s];
  }
  function qr(n) {
    var t = n[0],
        e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1]);
  }
  function Rr() {
    tu(this), this.edge = this.site = this.circle = null;
  }
  function Dr(n) {
    var t = Kc.pop() || new Rr;
    return t.site = n, t;
  }
  function Pr(n) {
    Xr(n), Wc.remove(n), Kc.push(n), tu(n);
  }
  function Ur(n) {
    var t = n.circle,
        e = t.x,
        r = t.cy,
        u = {
          x: e,
          y: r
        },
        i = n.P,
        o = n.N,
        a = [n];
    Pr(n);
    for (var c = i; c.circle && ca(e - c.circle.x) < Na && ca(r - c.circle.cy) < Na; )
      i = c.P, a.unshift(c), Pr(c), c = i;
    a.unshift(c), Xr(c);
    for (var l = o; l.circle && ca(e - l.circle.x) < Na && ca(r - l.circle.cy) < Na; )
      o = l.N, a.push(l), Pr(l), l = o;
    a.push(l), Xr(l);
    var s,
        f = a.length;
    for (s = 1; f > s; ++s)
      l = a[s], c = a[s - 1], Kr(l.edge, c.site, l.site, u);
    c = a[0], l = a[f - 1], l.edge = Jr(c.site, l.site, null, u), Vr(c), Vr(l);
  }
  function jr(n) {
    for (var t,
        e,
        r,
        u,
        i = n.x,
        o = n.y,
        a = Wc._; a; )
      if (r = Fr(a, o) - i, r > Na)
        a = a.L;
      else {
        if (u = i - Hr(a, o), !(u > Na)) {
          r > -Na ? (t = a.P, e = a) : u > -Na ? (t = a, e = a.N) : t = e = a;
          break;
        }
        if (!a.R) {
          t = a;
          break;
        }
        a = a.R;
      }
    var c = Dr(n);
    if (Wc.insert(t, c), t || e) {
      if (t === e)
        return Xr(t), e = Dr(t.site), Wc.insert(c, e), c.edge = e.edge = Jr(t.site, c.site), Vr(t), Vr(e), void 0;
      if (!e)
        return c.edge = Jr(t.site, c.site), void 0;
      Xr(t), Xr(e);
      var l = t.site,
          s = l.x,
          f = l.y,
          h = n.x - s,
          g = n.y - f,
          p = e.site,
          v = p.x - s,
          d = p.y - f,
          m = 2 * (h * d - g * v),
          y = h * h + g * g,
          x = v * v + d * d,
          M = {
            x: (d * y - g * x) / m + s,
            y: (h * x - v * y) / m + f
          };
      Kr(e.edge, l, p, M), c.edge = Jr(l, n, null, M), e.edge = Jr(n, p, null, M), Vr(t), Vr(e);
    }
  }
  function Fr(n, t) {
    var e = n.site,
        r = e.x,
        u = e.y,
        i = u - t;
    if (!i)
      return r;
    var o = n.P;
    if (!o)
      return -1 / 0;
    e = o.site;
    var a = e.x,
        c = e.y,
        l = c - t;
    if (!l)
      return a;
    var s = a - r,
        f = 1 / i - 1 / l,
        h = s / l;
    return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2;
  }
  function Hr(n, t) {
    var e = n.N;
    if (e)
      return Fr(e, t);
    var r = n.site;
    return r.y === t ? r.x : 1 / 0;
  }
  function Or(n) {
    this.site = n, this.edges = [];
  }
  function Yr(n) {
    for (var t,
        e,
        r,
        u,
        i,
        o,
        a,
        c,
        l,
        s,
        f = n[0][0],
        h = n[1][0],
        g = n[0][1],
        p = n[1][1],
        v = Bc,
        d = v.length; d--; )
      if (i = v[d], i && i.prepare())
        for (a = i.edges, c = a.length, o = 0; c > o; )
          s = a[o].end(), r = s.x, u = s.y, l = a[++o % c].start(), t = l.x, e = l.y, (ca(r - t) > Na || ca(u - e) > Na) && (a.splice(o, 0, new Qr(Gr(i.site, s, ca(r - f) < Na && p - u > Na ? {
            x: f,
            y: ca(t - f) < Na ? e : p
          } : ca(u - p) < Na && h - r > Na ? {
            x: ca(e - p) < Na ? t : h,
            y: p
          } : ca(r - h) < Na && u - g > Na ? {
            x: h,
            y: ca(t - h) < Na ? e : g
          } : ca(u - g) < Na && r - f > Na ? {
            x: ca(e - g) < Na ? t : f,
            y: g
          } : null), i.site, null)), ++c);
  }
  function Ir(n, t) {
    return t.angle - n.angle;
  }
  function Zr() {
    tu(this), this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function Vr(n) {
    var t = n.P,
        e = n.N;
    if (t && e) {
      var r = t.site,
          u = n.site,
          i = e.site;
      if (r !== i) {
        var o = u.x,
            a = u.y,
            c = r.x - o,
            l = r.y - a,
            s = i.x - o,
            f = i.y - a,
            h = 2 * (c * f - l * s);
        if (!(h >= -za)) {
          var g = c * c + l * l,
              p = s * s + f * f,
              v = (f * g - l * p) / h,
              d = (c * p - s * g) / h,
              f = d + a,
              m = Qc.pop() || new Zr;
          m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
          for (var y = null,
              x = Gc._; x; )
            if (m.y < x.y || m.y === x.y && m.x <= x.x) {
              if (!x.L) {
                y = x.P;
                break;
              }
              x = x.L;
            } else {
              if (!x.R) {
                y = x;
                break;
              }
              x = x.R;
            }
          Gc.insert(y, m), y || (Jc = m);
        }
      }
    }
  }
  function Xr(n) {
    var t = n.circle;
    t && (t.P || (Jc = t.N), Gc.remove(t), Qc.push(t), tu(t), n.circle = null);
  }
  function $r(n) {
    for (var t,
        e = $c,
        r = He(n[0][0], n[0][1], n[1][0], n[1][1]),
        u = e.length; u--; )
      t = e[u], (!Br(t, n) || !r(t) || ca(t.a.x - t.b.x) < Na && ca(t.a.y - t.b.y) < Na) && (t.a = t.b = null, e.splice(u, 1));
  }
  function Br(n, t) {
    var e = n.b;
    if (e)
      return !0;
    var r,
        u,
        i = n.a,
        o = t[0][0],
        a = t[1][0],
        c = t[0][1],
        l = t[1][1],
        s = n.l,
        f = n.r,
        h = s.x,
        g = s.y,
        p = f.x,
        v = f.y,
        d = (h + p) / 2,
        m = (g + v) / 2;
    if (v === g) {
      if (o > d || d >= a)
        return;
      if (h > p) {
        if (i) {
          if (i.y >= l)
            return;
        } else
          i = {
            x: d,
            y: c
          };
        e = {
          x: d,
          y: l
        };
      } else {
        if (i) {
          if (i.y < c)
            return;
        } else
          i = {
            x: d,
            y: l
          };
        e = {
          x: d,
          y: c
        };
      }
    } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
      if (h > p) {
        if (i) {
          if (i.y >= l)
            return;
        } else
          i = {
            x: (c - u) / r,
            y: c
          };
        e = {
          x: (l - u) / r,
          y: l
        };
      } else {
        if (i) {
          if (i.y < c)
            return;
        } else
          i = {
            x: (l - u) / r,
            y: l
          };
        e = {
          x: (c - u) / r,
          y: c
        };
      }
    else if (v > g) {
      if (i) {
        if (i.x >= a)
          return;
      } else
        i = {
          x: o,
          y: r * o + u
        };
      e = {
        x: a,
        y: r * a + u
      };
    } else {
      if (i) {
        if (i.x < o)
          return;
      } else
        i = {
          x: a,
          y: r * a + u
        };
      e = {
        x: o,
        y: r * o + u
      };
    }
    return n.a = i, n.b = e, !0;
  }
  function Wr(n, t) {
    this.l = n, this.r = t, this.a = this.b = null;
  }
  function Jr(n, t, e, r) {
    var u = new Wr(n, t);
    return $c.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Bc[n.i].edges.push(new Qr(u, n, t)), Bc[t.i].edges.push(new Qr(u, t, n)), u;
  }
  function Gr(n, t, e) {
    var r = new Wr(n, null);
    return r.a = t, r.b = e, $c.push(r), r;
  }
  function Kr(n, t, e, r) {
    n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
  }
  function Qr(n, t, e) {
    var r = n.a,
        u = n.b;
    this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y);
  }
  function nu() {
    this._ = null;
  }
  function tu(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null;
  }
  function eu(n, t) {
    var e = t,
        r = t.R,
        u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }
  function ru(n, t) {
    var e = t,
        r = t.L,
        u = e.U;
    u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }
  function uu(n) {
    for (; n.L; )
      n = n.L;
    return n;
  }
  function iu(n, t) {
    var e,
        r,
        u,
        i = n.sort(ou).pop();
    for ($c = [], Bc = new Array(n.length), Wc = new nu, Gc = new nu; ; )
      if (u = Jc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))
        (i.x !== e || i.y !== r) && (Bc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
      else {
        if (!u)
          break;
        Ur(u.arc);
      }
    t && ($r(t), Yr(t));
    var o = {
      cells: Bc,
      edges: $c
    };
    return Wc = Gc = $c = Bc = null, o;
  }
  function ou(n, t) {
    return t.y - n.y || t.x - n.x;
  }
  function au(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
  }
  function cu(n) {
    return n.x;
  }
  function lu(n) {
    return n.y;
  }
  function su() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function fu(n, t, e, r, u, i) {
    if (!n(t, e, r, u, i)) {
      var o = .5 * (e + u),
          a = .5 * (r + i),
          c = t.nodes;
      c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i);
    }
  }
  function hu(n, t) {
    n = Bo.rgb(n), t = Bo.rgb(t);
    var e = n.r,
        r = n.g,
        u = n.b,
        i = t.r - e,
        o = t.g - r,
        a = t.b - u;
    return function(n) {
      return "#" + xt(Math.round(e + i * n)) + xt(Math.round(r + o * n)) + xt(Math.round(u + a * n));
    };
  }
  function gu(n, t) {
    var e,
        r = {},
        u = {};
    for (e in n)
      e in t ? r[e] = du(n[e], t[e]) : u[e] = n[e];
    for (e in t)
      e in n || (u[e] = t[e]);
    return function(n) {
      for (e in r)
        u[e] = r[e](n);
      return u;
    };
  }
  function pu(n, t) {
    return n = +n, t = +t, function(e) {
      return n * (1 - e) + t * e;
    };
  }
  function vu(n, t) {
    var e,
        r,
        u,
        i = tl.lastIndex = el.lastIndex = 0,
        o = -1,
        a = [],
        c = [];
    for (n += "", t += ""; (e = tl.exec(n)) && (r = el.exec(t)); )
      (u = r.index) > i && (u = t.slice(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
        i: o,
        x: pu(e, r)
      })), i = el.lastIndex;
    return i < t.length && (u = t.slice(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
      return t(n) + "";
    }) : function() {
      return t;
    } : (t = c.length, function(n) {
      for (var e,
          r = 0; t > r; ++r)
        a[(e = c[r]).i] = e.x(n);
      return a.join("");
    });
  }
  function du(n, t) {
    for (var e,
        r = Bo.interpolators.length; --r >= 0 && !(e = Bo.interpolators[r](n, t)); )
      ;
    return e;
  }
  function mu(n, t) {
    var e,
        r = [],
        u = [],
        i = n.length,
        o = t.length,
        a = Math.min(n.length, t.length);
    for (e = 0; a > e; ++e)
      r.push(du(n[e], t[e]));
    for (; i > e; ++e)
      u[e] = n[e];
    for (; o > e; ++e)
      u[e] = t[e];
    return function(n) {
      for (e = 0; a > e; ++e)
        u[e] = r[e](n);
      return u;
    };
  }
  function yu(n) {
    return function(t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
    };
  }
  function xu(n) {
    return function(t) {
      return 1 - n(1 - t);
    };
  }
  function Mu(n) {
    return function(t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }
  function _u(n) {
    return n * n;
  }
  function bu(n) {
    return n * n * n;
  }
  function wu(n) {
    if (0 >= n)
      return 0;
    if (n >= 1)
      return 1;
    var t = n * n,
        e = t * n;
    return 4 * (.5 > n ? e : 3 * (n - t) + e - .75);
  }
  function Su(n) {
    return function(t) {
      return Math.pow(t, n);
    };
  }
  function ku(n) {
    return 1 - Math.cos(n * Ca);
  }
  function Eu(n) {
    return Math.pow(2, 10 * (n - 1));
  }
  function Au(n) {
    return 1 - Math.sqrt(1 - n * n);
  }
  function Cu(n, t) {
    var e;
    return arguments.length < 2 && (t = .45), arguments.length ? e = t / Aa * Math.asin(1 / n) : (n = 1, e = t / 4), function(r) {
      return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Aa / t);
    };
  }
  function Nu(n) {
    return n || (n = 1.70158), function(t) {
      return t * t * ((n + 1) * t - n);
    };
  }
  function zu(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
  }
  function Lu(n, t) {
    n = Bo.hcl(n), t = Bo.hcl(t);
    var e = n.h,
        r = n.c,
        u = n.l,
        i = t.h - e,
        o = t.c - r,
        a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
      return lt(e + i * n, r + o * n, u + a * n) + "";
    };
  }
  function Tu(n, t) {
    n = Bo.hsl(n), t = Bo.hsl(t);
    var e = n.h,
        r = n.s,
        u = n.l,
        i = t.h - e,
        o = t.s - r,
        a = t.l - u;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function(n) {
      return at(e + i * n, r + o * n, u + a * n) + "";
    };
  }
  function qu(n, t) {
    n = Bo.lab(n), t = Bo.lab(t);
    var e = n.l,
        r = n.a,
        u = n.b,
        i = t.l - e,
        o = t.a - r,
        a = t.b - u;
    return function(n) {
      return ft(e + i * n, r + o * n, u + a * n) + "";
    };
  }
  function Ru(n, t) {
    return t -= n, function(e) {
      return Math.round(n + t * e);
    };
  }
  function Du(n) {
    var t = [n.a, n.b],
        e = [n.c, n.d],
        r = Uu(t),
        u = Pu(t, e),
        i = Uu(ju(e, t, -u)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ta, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ta : 0;
  }
  function Pu(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }
  function Uu(n) {
    var t = Math.sqrt(Pu(n, n));
    return t && (n[0] /= t, n[1] /= t), t;
  }
  function ju(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n;
  }
  function Fu(n, t) {
    var e,
        r = [],
        u = [],
        i = Bo.transform(n),
        o = Bo.transform(t),
        a = i.translate,
        c = o.translate,
        l = i.rotate,
        s = o.rotate,
        f = i.skew,
        h = o.skew,
        g = i.scale,
        p = o.scale;
    return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
      i: 1,
      x: pu(a[0], c[0])
    }, {
      i: 3,
      x: pu(a[1], c[1])
    })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
      i: r.push(r.pop() + "rotate(", null, ")") - 2,
      x: pu(l, s)
    })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({
      i: r.push(r.pop() + "skewX(", null, ")") - 2,
      x: pu(f, h)
    }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
      i: e - 4,
      x: pu(g[0], p[0])
    }, {
      i: e - 2,
      x: pu(g[1], p[1])
    })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function(n) {
      for (var t,
          i = -1; ++i < e; )
        r[(t = u[i]).i] = t.x(n);
      return r.join("");
    };
  }
  function Hu(n, t) {
    return t = (t -= n = +n) || 1 / t, function(e) {
      return (e - n) / t;
    };
  }
  function Ou(n, t) {
    return t = (t -= n = +n) || 1 / t, function(e) {
      return Math.max(0, Math.min(1, (e - n) / t));
    };
  }
  function Yu(n) {
    for (var t = n.source,
        e = n.target,
        r = Zu(t, e),
        u = [t]; t !== r; )
      t = t.parent, u.push(t);
    for (var i = u.length; e !== r; )
      u.splice(i, 0, e), e = e.parent;
    return u;
  }
  function Iu(n) {
    for (var t = [],
        e = n.parent; null != e; )
      t.push(n), n = e, e = e.parent;
    return t.push(n), t;
  }
  function Zu(n, t) {
    if (n === t)
      return n;
    for (var e = Iu(n),
        r = Iu(t),
        u = e.pop(),
        i = r.pop(),
        o = null; u === i; )
      o = u, u = e.pop(), i = r.pop();
    return o;
  }
  function Vu(n) {
    n.fixed |= 2;
  }
  function Xu(n) {
    n.fixed &= -7;
  }
  function $u(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y;
  }
  function Bu(n) {
    n.fixed &= -5;
  }
  function Wu(n, t, e) {
    var r = 0,
        u = 0;
    if (n.charge = 0, !n.leaf)
      for (var i,
          o = n.nodes,
          a = o.length,
          c = -1; ++c < a; )
        i = o[c], null != i && (Wu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var l = t * e[n.point.index];
      n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y;
    }
    n.cx = r / n.charge, n.cy = u / n.charge;
  }
  function Ju(n, t) {
    return Bo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ei, n;
  }
  function Gu(n, t) {
    for (var e = [n]; null != (n = e.pop()); )
      if (t(n), (u = n.children) && (r = u.length))
        for (var r,
            u; --r >= 0; )
          e.push(u[r]);
  }
  function Ku(n, t) {
    for (var e = [n],
        r = []; null != (n = e.pop()); )
      if (r.push(n), (i = n.children) && (u = i.length))
        for (var u,
            i,
            o = -1; ++o < u; )
          e.push(i[o]);
    for (; null != (n = r.pop()); )
      t(n);
  }
  function Qu(n) {
    return n.children;
  }
  function ni(n) {
    return n.value;
  }
  function ti(n, t) {
    return t.value - n.value;
  }
  function ei(n) {
    return Bo.merge(n.map(function(n) {
      return (n.children || []).map(function(t) {
        return {
          source: n,
          target: t
        };
      });
    }));
  }
  function ri(n) {
    return n.x;
  }
  function ui(n) {
    return n.y;
  }
  function ii(n, t, e) {
    n.y0 = t, n.y = e;
  }
  function oi(n) {
    return Bo.range(n.length);
  }
  function ai(n) {
    for (var t = -1,
        e = n[0].length,
        r = []; ++t < e; )
      r[t] = 0;
    return r;
  }
  function ci(n) {
    for (var t,
        e = 1,
        r = 0,
        u = n[0][1],
        i = n.length; i > e; ++e)
      (t = n[e][1]) > u && (r = e, u = t);
    return r;
  }
  function li(n) {
    return n.reduce(si, 0);
  }
  function si(n, t) {
    return n + t[1];
  }
  function fi(n, t) {
    return hi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }
  function hi(n, t) {
    for (var e = -1,
        r = +n[0],
        u = (n[1] - r) / t,
        i = []; ++e <= t; )
      i[e] = u * e + r;
    return i;
  }
  function gi(n) {
    return [Bo.min(n), Bo.max(n)];
  }
  function pi(n, t) {
    return n.value - t.value;
  }
  function vi(n, t) {
    var e = n._pack_next;
    n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
  }
  function di(n, t) {
    n._pack_next = t, t._pack_prev = n;
  }
  function mi(n, t) {
    var e = t.x - n.x,
        r = t.y - n.y,
        u = n.r + t.r;
    return .999 * u * u > e * e + r * r;
  }
  function yi(n) {
    function t(n) {
      s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g);
    }
    if ((e = n.children) && (l = e.length)) {
      var e,
          r,
          u,
          i,
          o,
          a,
          c,
          l,
          s = 1 / 0,
          f = -1 / 0,
          h = 1 / 0,
          g = -1 / 0;
      if (e.forEach(xi), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
        for (i = e[2], bi(r, u, i), t(i), vi(r, i), r._pack_prev = i, vi(i, u), u = r._pack_next, o = 3; l > o; o++) {
          bi(r, u, i = e[o]);
          var p = 0,
              v = 1,
              d = 1;
          for (a = u._pack_next; a !== u; a = a._pack_next, v++)
            if (mi(a, i)) {
              p = 1;
              break;
            }
          if (1 == p)
            for (c = r._pack_prev; c !== a._pack_prev && !mi(c, i); c = c._pack_prev, d++)
              ;
          p ? (d > v || v == d && u.r < r.r ? di(r, u = a) : di(r = c, u), o--) : (vi(r, i), u = i, t(i));
        }
      var m = (s + f) / 2,
          y = (h + g) / 2,
          x = 0;
      for (o = 0; l > o; o++)
        i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
      n.r = x, e.forEach(Mi);
    }
  }
  function xi(n) {
    n._pack_next = n._pack_prev = n;
  }
  function Mi(n) {
    delete n._pack_next, delete n._pack_prev;
  }
  function _i(n, t, e, r) {
    var u = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
      for (var i = -1,
          o = u.length; ++i < o; )
        _i(u[i], t, e, r);
  }
  function bi(n, t, e) {
    var r = n.r + e.r,
        u = t.x - n.x,
        i = t.y - n.y;
    if (r && (u || i)) {
      var o = t.r + e.r,
          a = u * u + i * i;
      o *= o, r *= r;
      var c = .5 + (r - o) / (2 * a),
          l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
      e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u;
    } else
      e.x = n.x + r, e.y = n.y;
  }
  function wi(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }
  function Si(n) {
    var t = n.children;
    return t.length ? t[0] : n.t;
  }
  function ki(n) {
    var t,
        e = n.children;
    return (t = e.length) ? e[t - 1] : n.t;
  }
  function Ei(n, t, e) {
    var r = e / (t.i - n.i);
    t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
  }
  function Ai(n) {
    for (var t,
        e = 0,
        r = 0,
        u = n.children,
        i = u.length; --i >= 0; )
      t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c);
  }
  function Ci(n, t, e) {
    return n.a.parent === t.parent ? n.a : e;
  }
  function Ni(n) {
    return 1 + Bo.max(n, function(n) {
      return n.y;
    });
  }
  function zi(n) {
    return n.reduce(function(n, t) {
      return n + t.x;
    }, 0) / n.length;
  }
  function Li(n) {
    var t = n.children;
    return t && t.length ? Li(t[0]) : n;
  }
  function Ti(n) {
    var t,
        e = n.children;
    return e && (t = e.length) ? Ti(e[t - 1]) : n;
  }
  function qi(n) {
    return {
      x: n.x,
      y: n.y,
      dx: n.dx,
      dy: n.dy
    };
  }
  function Ri(n, t) {
    var e = n.x + t[3],
        r = n.y + t[0],
        u = n.dx - t[1] - t[3],
        i = n.dy - t[0] - t[2];
    return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
      x: e,
      y: r,
      dx: u,
      dy: i
    };
  }
  function Di(n) {
    var t = n[0],
        e = n[n.length - 1];
    return e > t ? [t, e] : [e, t];
  }
  function Pi(n) {
    return n.rangeExtent ? n.rangeExtent() : Di(n.range());
  }
  function Ui(n, t, e, r) {
    var u = e(n[0], n[1]),
        i = r(t[0], t[1]);
    return function(n) {
      return i(u(n));
    };
  }
  function ji(n, t) {
    var e,
        r = 0,
        u = n.length - 1,
        i = n[r],
        o = n[u];
    return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n;
  }
  function Fi(n) {
    return n ? {
      floor: function(t) {
        return Math.floor(t / n) * n;
      },
      ceil: function(t) {
        return Math.ceil(t / n) * n;
      }
    } : gl;
  }
  function Hi(n, t, e, r) {
    var u = [],
        i = [],
        o = 0,
        a = Math.min(n.length, t.length) - 1;
    for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a; )
      u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
    return function(t) {
      var e = Bo.bisect(n, t, 1, a) - 1;
      return i[e](u[e](t));
    };
  }
  function Oi(n, t, e, r) {
    function u() {
      var u = Math.min(n.length, t.length) > 2 ? Hi : Ui,
          c = r ? Ou : Hu;
      return o = u(n, t, c, e), a = u(t, n, c, du), i;
    }
    function i(n) {
      return o(n);
    }
    var o,
        a;
    return i.invert = function(n) {
      return a(n);
    }, i.domain = function(t) {
      return arguments.length ? (n = t.map(Number), u()) : n;
    }, i.range = function(n) {
      return arguments.length ? (t = n, u()) : t;
    }, i.rangeRound = function(n) {
      return i.range(n).interpolate(Ru);
    }, i.clamp = function(n) {
      return arguments.length ? (r = n, u()) : r;
    }, i.interpolate = function(n) {
      return arguments.length ? (e = n, u()) : e;
    }, i.ticks = function(t) {
      return Vi(n, t);
    }, i.tickFormat = function(t, e) {
      return Xi(n, t, e);
    }, i.nice = function(t) {
      return Ii(n, t), u();
    }, i.copy = function() {
      return Oi(n, t, e, r);
    }, u();
  }
  function Yi(n, t) {
    return Bo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }
  function Ii(n, t) {
    return ji(n, Fi(Zi(n, t)[2]));
  }
  function Zi(n, t) {
    null == t && (t = 10);
    var e = Di(n),
        r = e[1] - e[0],
        u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
        i = t / r * u;
    return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e;
  }
  function Vi(n, t) {
    return Bo.range.apply(Bo, Zi(n, t));
  }
  function Xi(n, t, e) {
    var r = Zi(n, t);
    if (e) {
      var u = tc.exec(e);
      if (u.shift(), "s" === u[8]) {
        var i = Bo.formatPrefix(Math.max(ca(r[0]), ca(r[1])));
        return u[7] || (u[7] = "." + $i(i.scale(r[2]))), u[8] = "f", e = Bo.format(u.join("")), function(n) {
          return e(i.scale(n)) + i.symbol;
        };
      }
      u[7] || (u[7] = "." + Bi(u[8], r)), e = u.join("");
    } else
      e = ",." + $i(r[2]) + "f";
    return Bo.format(e);
  }
  function $i(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + .01);
  }
  function Bi(n, t) {
    var e = $i(t[2]);
    return n in pl ? Math.abs(e - $i(Math.max(ca(t[0]), ca(t[1])))) + +("e" !== n) : e - 2 * ("%" === n);
  }
  function Wi(n, t, e, r) {
    function u(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
    }
    function i(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n);
    }
    function o(t) {
      return n(u(t));
    }
    return o.invert = function(t) {
      return i(n.invert(t));
    }, o.domain = function(t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r;
    }, o.base = function(e) {
      return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t;
    }, o.nice = function() {
      var t = ji(r.map(u), e ? Math : dl);
      return n.domain(t), r = t.map(i), o;
    }, o.ticks = function() {
      var n = Di(r),
          o = [],
          a = n[0],
          c = n[1],
          l = Math.floor(u(a)),
          s = Math.ceil(u(c)),
          f = t % 1 ? 2 : t;
      if (isFinite(s - l)) {
        if (e) {
          for (; s > l; l++)
            for (var h = 1; f > h; h++)
              o.push(i(l) * h);
          o.push(i(l));
        } else
          for (o.push(i(l)); l++ < s; )
            for (var h = f - 1; h > 0; h--)
              o.push(i(l) * h);
        for (l = 0; o[l] < a; l++)
          ;
        for (s = o.length; o[s - 1] > c; s--)
          ;
        o = o.slice(l, s);
      }
      return o;
    }, o.tickFormat = function(n, t) {
      if (!arguments.length)
        return vl;
      arguments.length < 2 ? t = vl : "function" != typeof t && (t = Bo.format(t));
      var r,
          a = Math.max(.1, n / o.ticks().length),
          c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
      return function(n) {
        return n / i(c(u(n) + r)) <= a ? t(n) : "";
      };
    }, o.copy = function() {
      return Wi(n.copy(), t, e, r);
    }, Yi(o, n);
  }
  function Ji(n, t, e) {
    function r(t) {
      return n(u(t));
    }
    var u = Gi(t),
        i = Gi(1 / t);
    return r.invert = function(t) {
      return i(n.invert(t));
    }, r.domain = function(t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e;
    }, r.ticks = function(n) {
      return Vi(e, n);
    }, r.tickFormat = function(n, t) {
      return Xi(e, n, t);
    }, r.nice = function(n) {
      return r.domain(Ii(e, n));
    }, r.exponent = function(o) {
      return arguments.length ? (u = Gi(t = o), i = Gi(1 / t), n.domain(e.map(u)), r) : t;
    }, r.copy = function() {
      return Ji(n.copy(), t, e);
    }, Yi(r, n);
  }
  function Gi(n) {
    return function(t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }
  function Ki(n, t) {
    function e(e) {
      return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length];
    }
    function r(t, e) {
      return Bo.range(n.length).map(function(n) {
        return t + e * n;
      });
    }
    var u,
        i,
        o;
    return e.domain = function(r) {
      if (!arguments.length)
        return n;
      n = [], u = new a;
      for (var i,
          o = -1,
          c = r.length; ++o < c; )
        u.has(i = r[o]) || u.set(i, n.push(i));
      return e[t.t].apply(e, t.a);
    }, e.range = function(n) {
      return arguments.length ? (i = n, o = 0, t = {
        t: "range",
        a: arguments
      }, e) : i;
    }, e.rangePoints = function(u, a) {
      arguments.length < 2 && (a = 0);
      var c = u[0],
          l = u[1],
          s = (l - c) / (Math.max(1, n.length - 1) + a);
      return i = r(n.length < 2 ? (c + l) / 2 : c + s * a / 2, s), o = 0, t = {
        t: "rangePoints",
        a: arguments
      }, e;
    }, e.rangeBands = function(u, a, c) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
      var l = u[1] < u[0],
          s = u[l - 0],
          f = u[1 - l],
          h = (f - s) / (n.length - a + 2 * c);
      return i = r(s + h * c, h), l && i.reverse(), o = h * (1 - a), t = {
        t: "rangeBands",
        a: arguments
      }, e;
    }, e.rangeRoundBands = function(u, a, c) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
      var l = u[1] < u[0],
          s = u[l - 0],
          f = u[1 - l],
          h = Math.floor((f - s) / (n.length - a + 2 * c)),
          g = f - s - (n.length - a) * h;
      return i = r(s + Math.round(g / 2), h), l && i.reverse(), o = Math.round(h * (1 - a)), t = {
        t: "rangeRoundBands",
        a: arguments
      }, e;
    }, e.rangeBand = function() {
      return o;
    }, e.rangeExtent = function() {
      return Di(t.a[0]);
    }, e.copy = function() {
      return Ki(n, t);
    }, e.domain(n);
  }
  function Qi(r, u) {
    function i() {
      var n = 0,
          t = u.length;
      for (a = []; ++n < t; )
        a[n - 1] = Bo.quantile(r, n / t);
      return o;
    }
    function o(n) {
      return isNaN(n = +n) ? void 0 : u[Bo.bisect(a, n)];
    }
    var a;
    return o.domain = function(u) {
      return arguments.length ? (r = u.map(t).filter(e).sort(n), i()) : r;
    }, o.range = function(n) {
      return arguments.length ? (u = n, i()) : u;
    }, o.quantiles = function() {
      return a;
    }, o.invertExtent = function(n) {
      return n = u.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]];
    }, o.copy = function() {
      return Qi(r, u);
    }, i();
  }
  function no(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))];
    }
    function u() {
      return i = e.length / (t - n), o = e.length - 1, r;
    }
    var i,
        o;
    return r.domain = function(e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t];
    }, r.range = function(n) {
      return arguments.length ? (e = n, u()) : e;
    }, r.invertExtent = function(t) {
      return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i];
    }, r.copy = function() {
      return no(n, t, e);
    }, u();
  }
  function to(n, t) {
    function e(e) {
      return e >= e ? t[Bo.bisect(n, e)] : void 0;
    }
    return e.domain = function(t) {
      return arguments.length ? (n = t, e) : n;
    }, e.range = function(n) {
      return arguments.length ? (t = n, e) : t;
    }, e.invertExtent = function(e) {
      return e = t.indexOf(e), [n[e - 1], n[e]];
    }, e.copy = function() {
      return to(n, t);
    }, e;
  }
  function eo(n) {
    function t(n) {
      return +n;
    }
    return t.invert = t, t.domain = t.range = function(e) {
      return arguments.length ? (n = e.map(t), t) : n;
    }, t.ticks = function(t) {
      return Vi(n, t);
    }, t.tickFormat = function(t, e) {
      return Xi(n, t, e);
    }, t.copy = function() {
      return eo(n);
    }, t;
  }
  function ro(n) {
    return n.innerRadius;
  }
  function uo(n) {
    return n.outerRadius;
  }
  function io(n) {
    return n.startAngle;
  }
  function oo(n) {
    return n.endAngle;
  }
  function ao(n) {
    function t(t) {
      function o() {
        l.push("M", i(n(s), a));
      }
      for (var c,
          l = [],
          s = [],
          f = -1,
          h = t.length,
          g = kt(e),
          p = kt(r); ++f < h; )
        u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
      return s.length && o(), l.length ? l.join("") : null;
    }
    var e = Ar,
        r = Cr,
        u = Ae,
        i = co,
        o = i.key,
        a = .7;
    return t.x = function(n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r;
    }, t.defined = function(n) {
      return arguments.length ? (u = n, t) : u;
    }, t.interpolate = function(n) {
      return arguments.length ? (o = "function" == typeof n ? i = n : (i = wl.get(n) || co).key, t) : o;
    }, t.tension = function(n) {
      return arguments.length ? (a = n, t) : a;
    }, t;
  }
  function co(n) {
    return n.join("L");
  }
  function lo(n) {
    return co(n) + "Z";
  }
  function so(n) {
    for (var t = 0,
        e = n.length,
        r = n[0],
        u = [r[0], ",", r[1]]; ++t < e; )
      u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    return e > 1 && u.push("H", r[0]), u.join("");
  }
  function fo(n) {
    for (var t = 0,
        e = n.length,
        r = n[0],
        u = [r[0], ",", r[1]]; ++t < e; )
      u.push("V", (r = n[t])[1], "H", r[0]);
    return u.join("");
  }
  function ho(n) {
    for (var t = 0,
        e = n.length,
        r = n[0],
        u = [r[0], ",", r[1]]; ++t < e; )
      u.push("H", (r = n[t])[0], "V", r[1]);
    return u.join("");
  }
  function go(n, t) {
    return n.length < 4 ? co(n) : n[1] + mo(n.slice(1, n.length - 1), yo(n, t));
  }
  function po(n, t) {
    return n.length < 3 ? co(n) : n[0] + mo((n.push(n[0]), n), yo([n[n.length - 2]].concat(n, [n[1]]), t));
  }
  function vo(n, t) {
    return n.length < 3 ? co(n) : n[0] + mo(n, yo(n, t));
  }
  function mo(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
      return co(n);
    var e = n.length != t.length,
        r = "",
        u = n[0],
        i = n[1],
        o = t[0],
        a = o,
        c = 1;
    if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
      a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
      for (var l = 2; l < t.length; l++, c++)
        i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
    }
    if (e) {
      var s = n[c];
      r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1];
    }
    return r;
  }
  function yo(n, t) {
    for (var e,
        r = [],
        u = (1 - t) / 2,
        i = n[0],
        o = n[1],
        a = 1,
        c = n.length; ++a < c; )
      e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
    return r;
  }
  function xo(n) {
    if (n.length < 3)
      return co(n);
    var t = 1,
        e = n.length,
        r = n[0],
        u = r[0],
        i = r[1],
        o = [u, u, u, (r = n[1])[0]],
        a = [i, i, i, r[1]],
        c = [u, ",", i, "L", wo(El, o), ",", wo(El, a)];
    for (n.push(n[e - 1]); ++t <= e; )
      r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), So(c, o, a);
    return n.pop(), c.push("L", r), c.join("");
  }
  function Mo(n) {
    if (n.length < 4)
      return co(n);
    for (var t,
        e = [],
        r = -1,
        u = n.length,
        i = [0],
        o = [0]; ++r < 3; )
      t = n[r], i.push(t[0]), o.push(t[1]);
    for (e.push(wo(El, i) + "," + wo(El, o)), --r; ++r < u; )
      t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), So(e, i, o);
    return e.join("");
  }
  function _o(n) {
    for (var t,
        e,
        r = -1,
        u = n.length,
        i = u + 4,
        o = [],
        a = []; ++r < 4; )
      e = n[r % u], o.push(e[0]), a.push(e[1]);
    for (t = [wo(El, o), ",", wo(El, a)], --r; ++r < i; )
      e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), So(t, o, a);
    return t.join("");
  }
  function bo(n, t) {
    var e = n.length - 1;
    if (e)
      for (var r,
          u,
          i = n[0][0],
          o = n[0][1],
          a = n[e][0] - i,
          c = n[e][1] - o,
          l = -1; ++l <= e; )
        r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
    return xo(n);
  }
  function wo(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }
  function So(n, t, e) {
    n.push("C", wo(Sl, t), ",", wo(Sl, e), ",", wo(kl, t), ",", wo(kl, e), ",", wo(El, t), ",", wo(El, e));
  }
  function ko(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }
  function Eo(n) {
    for (var t = 0,
        e = n.length - 1,
        r = [],
        u = n[0],
        i = n[1],
        o = r[0] = ko(u, i); ++t < e; )
      r[t] = (o + (o = ko(u = i, i = n[t + 1]))) / 2;
    return r[t] = o, r;
  }
  function Ao(n) {
    for (var t,
        e,
        r,
        u,
        i = [],
        o = Eo(n),
        a = -1,
        c = n.length - 1; ++a < c; )
      t = ko(n[a], n[a + 1]), ca(t) < Na ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
    for (a = -1; ++a <= c; )
      u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
    return i;
  }
  function Co(n) {
    return n.length < 3 ? co(n) : n[0] + mo(n, Ao(n));
  }
  function No(n) {
    for (var t,
        e,
        r,
        u = -1,
        i = n.length; ++u < i; )
      t = n[u], e = t[0], r = t[1] + _l, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    return n;
  }
  function zo(n) {
    function t(t) {
      function c() {
        v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z");
      }
      for (var h,
          g,
          p,
          v = [],
          d = [],
          m = [],
          y = -1,
          x = t.length,
          M = kt(e),
          _ = kt(u),
          b = e === r ? function() {
            return g;
          } : kt(r),
          w = u === i ? function() {
            return p;
          } : kt(i); ++y < x; )
        o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
      return d.length && c(), v.length ? v.join("") : null;
    }
    var e = Ar,
        r = Ar,
        u = 0,
        i = Cr,
        o = Ae,
        a = co,
        c = a.key,
        l = a,
        s = "L",
        f = .7;
    return t.x = function(n) {
      return arguments.length ? (e = r = n, t) : r;
    }, t.x0 = function(n) {
      return arguments.length ? (e = n, t) : e;
    }, t.x1 = function(n) {
      return arguments.length ? (r = n, t) : r;
    }, t.y = function(n) {
      return arguments.length ? (u = i = n, t) : i;
    }, t.y0 = function(n) {
      return arguments.length ? (u = n, t) : u;
    }, t.y1 = function(n) {
      return arguments.length ? (i = n, t) : i;
    }, t.defined = function(n) {
      return arguments.length ? (o = n, t) : o;
    }, t.interpolate = function(n) {
      return arguments.length ? (c = "function" == typeof n ? a = n : (a = wl.get(n) || co).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c;
    }, t.tension = function(n) {
      return arguments.length ? (f = n, t) : f;
    }, t;
  }
  function Lo(n) {
    return n.radius;
  }
  function To(n) {
    return [n.x, n.y];
  }
  function qo(n) {
    return function() {
      var t = n.apply(this, arguments),
          e = t[0],
          r = t[1] + _l;
      return [e * Math.cos(r), e * Math.sin(r)];
    };
  }
  function Ro() {
    return 64;
  }
  function Do() {
    return "circle";
  }
  function Po(n) {
    var t = Math.sqrt(n / Ea);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z";
  }
  function Uo(n, t) {
    return ga(n, Tl), n.id = t, n;
  }
  function jo(n, t, e, r) {
    var u = n.id;
    return F(n, "function" == typeof e ? function(n, i, o) {
      n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)));
    } : (e = r(e), function(n) {
      n.__transition__[u].tween.set(t, e);
    }));
  }
  function Fo(n) {
    return null == n && (n = ""), function() {
      this.textContent = n;
    };
  }
  function Ho(n, t, e, r) {
    var u = n.__transition__ || (n.__transition__ = {
      active: 0,
      count: 0
    }),
        i = u[e];
    if (!i) {
      var o = r.time;
      i = u[e] = {
        tween: new a,
        time: o,
        ease: r.ease,
        delay: r.delay,
        duration: r.duration
      }, ++u.count, Bo.timer(function(r) {
        function a(r) {
          return u.active > e ? l() : (u.active = e, i.event && i.event.start.call(n, s, t), i.tween.forEach(function(e, r) {
            (r = r.call(n, s, t)) && v.push(r);
          }), Bo.timer(function() {
            return p.c = c(r || 1) ? Ae : c, 1;
          }, 0, o), void 0);
        }
        function c(r) {
          if (u.active !== e)
            return l();
          for (var o = r / g,
              a = f(o),
              c = v.length; c > 0; )
            v[--c].call(n, a);
          return o >= 1 ? (i.event && i.event.end.call(n, s, t), l()) : void 0;
        }
        function l() {
          return --u.count ? delete u[e] : delete n.__transition__, 1;
        }
        var s = n.__data__,
            f = i.ease,
            h = i.delay,
            g = i.duration,
            p = Ka,
            v = [];
        return p.t = h + o, r >= h ? a(r - h) : (p.c = a, void 0);
      }, 0, o);
    }
  }
  function Oo(n, t, e) {
    n.attr("transform", function(n) {
      var r = t(n);
      return "translate(" + (isFinite(r) ? r : e(n)) + ",0)";
    });
  }
  function Yo(n, t, e) {
    n.attr("transform", function(n) {
      var r = t(n);
      return "translate(0," + (isFinite(r) ? r : e(n)) + ")";
    });
  }
  function Io(n) {
    return n.toISOString();
  }
  function Zo(n, t, e) {
    function r(t) {
      return n(t);
    }
    function u(n, e) {
      var r = n[1] - n[0],
          u = r / e,
          i = Bo.bisect(Ol, u);
      return i == Ol.length ? [t.year, Zi(n.map(function(n) {
        return n / 31536e6;
      }), e)[2]] : i ? t[u / Ol[i - 1] < Ol[i] / u ? i - 1 : i] : [Zl, Zi(n, e)[2]];
    }
    return r.invert = function(t) {
      return Vo(n.invert(t));
    }, r.domain = function(t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(Vo);
    }, r.nice = function(n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, Vo(+e + 1), t).length;
      }
      var i = r.domain(),
          o = Di(i),
          a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
      return a && (n = a[0], t = a[1]), r.domain(ji(i, t > 1 ? {
        floor: function(t) {
          for (; e(t = n.floor(t)); )
            t = Vo(t - 1);
          return t;
        },
        ceil: function(t) {
          for (; e(t = n.ceil(t)); )
            t = Vo(+t + 1);
          return t;
        }
      } : n));
    }, r.ticks = function(n, t) {
      var e = Di(r.domain()),
          i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{range: n}, t];
      return i && (n = i[0], t = i[1]), n.range(e[0], Vo(+e[1] + 1), 1 > t ? 1 : t);
    }, r.tickFormat = function() {
      return e;
    }, r.copy = function() {
      return Zo(n.copy(), t, e);
    }, Yi(r, n);
  }
  function Vo(n) {
    return new Date(n);
  }
  function Xo(n) {
    return JSON.parse(n.responseText);
  }
  function $o(n) {
    var t = Go.createRange();
    return t.selectNode(Go.body), t.createContextualFragment(n.responseText);
  }
  var Bo = {version: "3.4.13"};
  Date.now || (Date.now = function() {
    return +new Date;
  });
  var Wo = [].slice,
      Jo = function(n) {
        return Wo.call(n);
      },
      Go = document,
      Ko = Go.documentElement,
      Qo = window;
  try {
    Jo(Ko.childNodes)[0].nodeType;
  } catch (na) {
    Jo = function(n) {
      for (var t = n.length,
          e = new Array(t); t--; )
        e[t] = n[t];
      return e;
    };
  }
  try {
    Go.createElement("div").style.setProperty("opacity", 0, "");
  } catch (ta) {
    var ea = Qo.Element.prototype,
        ra = ea.setAttribute,
        ua = ea.setAttributeNS,
        ia = Qo.CSSStyleDeclaration.prototype,
        oa = ia.setProperty;
    ea.setAttribute = function(n, t) {
      ra.call(this, n, t + "");
    }, ea.setAttributeNS = function(n, t, e) {
      ua.call(this, n, t, e + "");
    }, ia.setProperty = function(n, t, e) {
      oa.call(this, n, t + "", e);
    };
  }
  Bo.ascending = n, Bo.descending = function(n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0;
  }, Bo.min = function(n, t) {
    var e,
        r,
        u = -1,
        i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e); )
        e = void 0;
      for (; ++u < i; )
        null != (r = n[u]) && e > r && (e = r);
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); )
        e = void 0;
      for (; ++u < i; )
        null != (r = t.call(n, n[u], u)) && e > r && (e = r);
    }
    return e;
  }, Bo.max = function(n, t) {
    var e,
        r,
        u = -1,
        i = n.length;
    if (1 === arguments.length) {
      for (; ++u < i && !(null != (e = n[u]) && e >= e); )
        e = void 0;
      for (; ++u < i; )
        null != (r = n[u]) && r > e && (e = r);
    } else {
      for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); )
        e = void 0;
      for (; ++u < i; )
        null != (r = t.call(n, n[u], u)) && r > e && (e = r);
    }
    return e;
  }, Bo.extent = function(n, t) {
    var e,
        r,
        u,
        i = -1,
        o = n.length;
    if (1 === arguments.length) {
      for (; ++i < o && !(null != (e = u = n[i]) && e >= e); )
        e = u = void 0;
      for (; ++i < o; )
        null != (r = n[i]) && (e > r && (e = r), r > u && (u = r));
    } else {
      for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e); )
        e = void 0;
      for (; ++i < o; )
        null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r));
    }
    return [e, u];
  }, Bo.sum = function(n, t) {
    var r,
        u = 0,
        i = n.length,
        o = -1;
    if (1 === arguments.length)
      for (; ++o < i; )
        e(r = +n[o]) && (u += r);
    else
      for (; ++o < i; )
        e(r = +t.call(n, n[o], o)) && (u += r);
    return u;
  }, Bo.mean = function(n, r) {
    var u,
        i = 0,
        o = n.length,
        a = -1,
        c = o;
    if (1 === arguments.length)
      for (; ++a < o; )
        e(u = t(n[a])) ? i += u : --c;
    else
      for (; ++a < o; )
        e(u = t(r.call(n, n[a], a))) ? i += u : --c;
    return c ? i / c : void 0;
  }, Bo.quantile = function(n, t) {
    var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        u = +n[r - 1],
        i = e - r;
    return i ? u + i * (n[r] - u) : u;
  }, Bo.median = function(r, u) {
    var i,
        o = [],
        a = r.length,
        c = -1;
    if (1 === arguments.length)
      for (; ++c < a; )
        e(i = t(r[c])) && o.push(i);
    else
      for (; ++c < a; )
        e(i = t(u.call(r, r[c], c))) && o.push(i);
    return o.length ? Bo.quantile(o.sort(n), .5) : void 0;
  };
  var aa = r(n);
  Bo.bisectLeft = aa.left, Bo.bisect = Bo.bisectRight = aa.right, Bo.bisector = function(t) {
    return r(1 === t.length ? function(e, r) {
      return n(t(e), r);
    } : t);
  }, Bo.shuffle = function(n) {
    for (var t,
        e,
        r = n.length; r; )
      e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
    return n;
  }, Bo.permute = function(n, t) {
    for (var e = t.length,
        r = new Array(e); e--; )
      r[e] = n[t[e]];
    return r;
  }, Bo.pairs = function(n) {
    for (var t,
        e = 0,
        r = n.length - 1,
        u = n[0],
        i = new Array(0 > r ? 0 : r); r > e; )
      i[e] = [t = u, u = n[++e]];
    return i;
  }, Bo.zip = function() {
    if (!(r = arguments.length))
      return [];
    for (var n = -1,
        t = Bo.min(arguments, u),
        e = new Array(t); ++n < t; )
      for (var r,
          i = -1,
          o = e[n] = new Array(r); ++i < r; )
        o[i] = arguments[i][n];
    return e;
  }, Bo.transpose = function(n) {
    return Bo.zip.apply(Bo, n);
  }, Bo.keys = function(n) {
    var t = [];
    for (var e in n)
      t.push(e);
    return t;
  }, Bo.values = function(n) {
    var t = [];
    for (var e in n)
      t.push(n[e]);
    return t;
  }, Bo.entries = function(n) {
    var t = [];
    for (var e in n)
      t.push({
        key: e,
        value: n[e]
      });
    return t;
  }, Bo.merge = function(n) {
    for (var t,
        e,
        r,
        u = n.length,
        i = -1,
        o = 0; ++i < u; )
      o += n[i].length;
    for (e = new Array(o); --u >= 0; )
      for (r = n[u], t = r.length; --t >= 0; )
        e[--o] = r[t];
    return e;
  };
  var ca = Math.abs;
  Bo.range = function(n, t, e) {
    if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e)
      throw new Error("infinite range");
    var r,
        u = [],
        o = i(ca(e)),
        a = -1;
    if (n *= o, t *= o, e *= o, 0 > e)
      for (; (r = n + e * ++a) > t; )
        u.push(r / o);
    else
      for (; (r = n + e * ++a) < t; )
        u.push(r / o);
    return u;
  }, Bo.map = function(n) {
    var t = new a;
    if (n instanceof a)
      n.forEach(function(n, e) {
        t.set(n, e);
      });
    else
      for (var e in n)
        t.set(e, n[e]);
    return t;
  };
  var la = "__proto__",
      sa = "\x00";
  o(a, {
    has: s,
    get: function(n) {
      return this._[c(n)];
    },
    set: function(n, t) {
      return this._[c(n)] = t;
    },
    remove: f,
    keys: h,
    values: function() {
      var n = [];
      for (var t in this._)
        n.push(this._[t]);
      return n;
    },
    entries: function() {
      var n = [];
      for (var t in this._)
        n.push({
          key: l(t),
          value: this._[t]
        });
      return n;
    },
    size: g,
    empty: p,
    forEach: function(n) {
      for (var t in this._)
        n.call(this, l(t), this._[t]);
    }
  }), Bo.nest = function() {
    function n(t, o, c) {
      if (c >= i.length)
        return r ? r.call(u, o) : e ? o.sort(e) : o;
      for (var l,
          s,
          f,
          h,
          g = -1,
          p = o.length,
          v = i[c++],
          d = new a; ++g < p; )
        (h = d.get(l = v(s = o[g]))) ? h.push(s) : d.set(l, [s]);
      return t ? (s = t(), f = function(e, r) {
        s.set(e, n(t, r, c));
      }) : (s = {}, f = function(e, r) {
        s[e] = n(t, r, c);
      }), d.forEach(f), s;
    }
    function t(n, e) {
      if (e >= i.length)
        return n;
      var r = [],
          u = o[e++];
      return n.forEach(function(n, u) {
        r.push({
          key: n,
          values: t(u, e)
        });
      }), u ? r.sort(function(n, t) {
        return u(n.key, t.key);
      }) : r;
    }
    var e,
        r,
        u = {},
        i = [],
        o = [];
    return u.map = function(t, e) {
      return n(e, t, 0);
    }, u.entries = function(e) {
      return t(n(Bo.map, e, 0), 0);
    }, u.key = function(n) {
      return i.push(n), u;
    }, u.sortKeys = function(n) {
      return o[i.length - 1] = n, u;
    }, u.sortValues = function(n) {
      return e = n, u;
    }, u.rollup = function(n) {
      return r = n, u;
    }, u;
  }, Bo.set = function(n) {
    var t = new v;
    if (n)
      for (var e = 0,
          r = n.length; r > e; ++e)
        t.add(n[e]);
    return t;
  }, o(v, {
    has: s,
    add: function(n) {
      return this._[c(n += "")] = !0, n;
    },
    remove: f,
    values: h,
    size: g,
    empty: p,
    forEach: function(n) {
      for (var t in this._)
        n.call(this, l(t));
    }
  }), Bo.behavior = {}, Bo.rebind = function(n, t) {
    for (var e,
        r = 1,
        u = arguments.length; ++r < u; )
      n[e = arguments[r]] = d(n, t, t[e]);
    return n;
  };
  var fa = ["webkit", "ms", "moz", "Moz", "o", "O"];
  Bo.dispatch = function() {
    for (var n = new x,
        t = -1,
        e = arguments.length; ++t < e; )
      n[arguments[t]] = M(n);
    return n;
  }, x.prototype.on = function(n, t) {
    var e = n.indexOf("."),
        r = "";
    if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)
      return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
    if (2 === arguments.length) {
      if (null == t)
        for (n in this)
          this.hasOwnProperty(n) && this[n].on(r, null);
      return this;
    }
  }, Bo.event = null, Bo.requote = function(n) {
    return n.replace(ha, "\\$&");
  };
  var ha = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      ga = {}.__proto__ ? function(n, t) {
        n.__proto__ = t;
      } : function(n, t) {
        for (var e in t)
          n[e] = t[e];
      },
      pa = function(n, t) {
        return t.querySelector(n);
      },
      va = function(n, t) {
        return t.querySelectorAll(n);
      },
      da = Ko.matches || Ko[m(Ko, "matchesSelector")],
      ma = function(n, t) {
        return da.call(n, t);
      };
  "function" == typeof Sizzle && (pa = function(n, t) {
    return Sizzle(n, t)[0] || null;
  }, va = Sizzle, ma = Sizzle.matchesSelector), Bo.selection = function() {
    return _a;
  };
  var ya = Bo.selection.prototype = [];
  ya.select = function(n) {
    var t,
        e,
        r,
        u,
        i = [];
    n = k(n);
    for (var o = -1,
        a = this.length; ++o < a; ) {
      i.push(t = []), t.parentNode = (r = this[o]).parentNode;
      for (var c = -1,
          l = r.length; ++c < l; )
        (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null);
    }
    return S(i);
  }, ya.selectAll = function(n) {
    var t,
        e,
        r = [];
    n = E(n);
    for (var u = -1,
        i = this.length; ++u < i; )
      for (var o = this[u],
          a = -1,
          c = o.length; ++a < c; )
        (e = o[a]) && (r.push(t = Jo(n.call(e, e.__data__, a, u))), t.parentNode = e);
    return S(r);
  };
  var xa = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  Bo.ns = {
    prefix: xa,
    qualify: function(n) {
      var t = n.indexOf(":"),
          e = n;
      return t >= 0 && (e = n.slice(0, t), n = n.slice(t + 1)), xa.hasOwnProperty(e) ? {
        space: xa[e],
        local: n
      } : n;
    }
  }, ya.attr = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = Bo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
      }
      for (t in n)
        this.each(A(t, n[t]));
      return this;
    }
    return this.each(A(n, t));
  }, ya.classed = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
            r = (n = z(n)).length,
            u = -1;
        if (t = e.classList) {
          for (; ++u < r; )
            if (!t.contains(n[u]))
              return !1;
        } else
          for (t = e.getAttribute("class"); ++u < r; )
            if (!N(n[u]).test(t))
              return !1;
        return !0;
      }
      for (t in n)
        this.each(L(t, n[t]));
      return this;
    }
    return this.each(L(n, t));
  }, ya.style = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = "");
        for (e in n)
          this.each(q(e, n[e], t));
        return this;
      }
      if (2 > r)
        return Qo.getComputedStyle(this.node(), null).getPropertyValue(n);
      e = "";
    }
    return this.each(q(n, t, e));
  }, ya.property = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n)
        return this.node()[n];
      for (t in n)
        this.each(R(t, n[t]));
      return this;
    }
    return this.each(R(n, t));
  }, ya.text = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "" : t;
    } : null == n ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = n;
    }) : this.node().textContent;
  }, ya.html = function(n) {
    return arguments.length ? this.each("function" == typeof n ? function() {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "" : t;
    } : null == n ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = n;
    }) : this.node().innerHTML;
  }, ya.append = function(n) {
    return n = D(n), this.select(function() {
      return this.appendChild(n.apply(this, arguments));
    });
  }, ya.insert = function(n, t) {
    return n = D(n), t = k(t), this.select(function() {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
    });
  }, ya.remove = function() {
    return this.each(function() {
      var n = this.parentNode;
      n && n.removeChild(this);
    });
  }, ya.data = function(n, t) {
    function e(n, e) {
      var r,
          u,
          i,
          o = n.length,
          f = e.length,
          h = Math.min(o, f),
          g = new Array(f),
          p = new Array(f),
          v = new Array(o);
      if (t) {
        var d,
            m = new a,
            y = new Array(o);
        for (r = -1; ++r < o; )
          m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u), y[r] = d;
        for (r = -1; ++r < f; )
          (u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u, u.__data__ = i) : p[r] = P(i), m.set(d, !0);
        for (r = -1; ++r < o; )
          m.get(y[r]) !== !0 && (v[r] = n[r]);
      } else {
        for (r = -1; ++r < h; )
          u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = P(i);
        for (; f > r; ++r)
          p[r] = P(e[r]);
        for (; o > r; ++r)
          v[r] = n[r];
      }
      p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), l.push(g), s.push(v);
    }
    var r,
        u,
        i = -1,
        o = this.length;
    if (!arguments.length) {
      for (n = new Array(o = (r = this[0]).length); ++i < o; )
        (u = r[i]) && (n[i] = u.__data__);
      return n;
    }
    var c = H([]),
        l = S([]),
        s = S([]);
    if ("function" == typeof n)
      for (; ++i < o; )
        e(r = this[i], n.call(r, r.parentNode.__data__, i));
    else
      for (; ++i < o; )
        e(r = this[i], n);
    return l.enter = function() {
      return c;
    }, l.exit = function() {
      return s;
    }, l;
  }, ya.datum = function(n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__");
  }, ya.filter = function(n) {
    var t,
        e,
        r,
        u = [];
    "function" != typeof n && (n = U(n));
    for (var i = 0,
        o = this.length; o > i; i++) {
      u.push(t = []), t.parentNode = (e = this[i]).parentNode;
      for (var a = 0,
          c = e.length; c > a; a++)
        (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
    }
    return S(u);
  }, ya.order = function() {
    for (var n = -1,
        t = this.length; ++n < t; )
      for (var e,
          r = this[n],
          u = r.length - 1,
          i = r[u]; --u >= 0; )
        (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
    return this;
  }, ya.sort = function(n) {
    n = j.apply(this, arguments);
    for (var t = -1,
        e = this.length; ++t < e; )
      this[t].sort(n);
    return this.order();
  }, ya.each = function(n) {
    return F(this, function(t, e, r) {
      n.call(t, t.__data__, e, r);
    });
  }, ya.call = function(n) {
    var t = Jo(arguments);
    return n.apply(t[0] = this, t), this;
  }, ya.empty = function() {
    return !this.node();
  }, ya.node = function() {
    for (var n = 0,
        t = this.length; t > n; n++)
      for (var e = this[n],
          r = 0,
          u = e.length; u > r; r++) {
        var i = e[r];
        if (i)
          return i;
      }
    return null;
  }, ya.size = function() {
    var n = 0;
    return F(this, function() {
      ++n;
    }), n;
  };
  var Ma = [];
  Bo.selection.enter = H, Bo.selection.enter.prototype = Ma, Ma.append = ya.append, Ma.empty = ya.empty, Ma.node = ya.node, Ma.call = ya.call, Ma.size = ya.size, Ma.select = function(n) {
    for (var t,
        e,
        r,
        u,
        i,
        o = [],
        a = -1,
        c = this.length; ++a < c; ) {
      r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
      for (var l = -1,
          s = u.length; ++l < s; )
        (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null);
    }
    return S(o);
  }, Ma.insert = function(n, t) {
    return arguments.length < 2 && (t = O(this)), ya.insert.call(this, n, t);
  }, ya.transition = function() {
    for (var n,
        t,
        e = Cl || ++ql,
        r = [],
        u = Nl || {
          time: Date.now(),
          ease: wu,
          delay: 0,
          duration: 250
        },
        i = -1,
        o = this.length; ++i < o; ) {
      r.push(n = []);
      for (var a = this[i],
          c = -1,
          l = a.length; ++c < l; )
        (t = a[c]) && Ho(t, c, e, u), n.push(t);
    }
    return Uo(r, e);
  }, ya.interrupt = function() {
    return this.each(Y);
  }, Bo.select = function(n) {
    var t = ["string" == typeof n ? pa(n, Go) : n];
    return t.parentNode = Ko, S([t]);
  }, Bo.selectAll = function(n) {
    var t = Jo("string" == typeof n ? va(n, Go) : n);
    return t.parentNode = Ko, S([t]);
  };
  var _a = Bo.select(Ko);
  ya.on = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);
        for (e in n)
          this.each(I(e, n[e], t));
        return this;
      }
      if (2 > r)
        return (r = this.node()["__on" + n]) && r._;
      e = !1;
    }
    return this.each(I(n, t, e));
  };
  var ba = Bo.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  ba.forEach(function(n) {
    "on" + n in Go && ba.remove(n);
  });
  var wa = "onselectstart" in Go ? null : m(Ko.style, "userSelect"),
      Sa = 0;
  Bo.mouse = function(n) {
    return $(n, b());
  };
  var ka = /WebKit/.test(Qo.navigator.userAgent) ? -1 : 0;
  Bo.touch = function(n, t, e) {
    if (arguments.length < 3 && (e = t, t = b().changedTouches), t)
      for (var r,
          u = 0,
          i = t.length; i > u; ++u)
        if ((r = t[u]).identifier === e)
          return $(n, r);
  }, Bo.behavior.drag = function() {
    function n() {
      this.on("mousedown.drag", u).on("touchstart.drag", i);
    }
    function t(n, t, u, i, o) {
      return function() {
        function a() {
          var n,
              e,
              r = t(h, v);
          r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
            type: "drag",
            x: r[0] + l[0],
            y: r[1] + l[1],
            dx: n,
            dy: e
          }));
        }
        function c() {
          t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Bo.event.target === f), g({type: "dragend"}));
        }
        var l,
            s = this,
            f = Bo.event.target,
            h = s.parentNode,
            g = e.of(s, arguments),
            p = 0,
            v = n(),
            d = ".drag" + (null == v ? "" : "-" + v),
            m = Bo.select(u()).on(i + d, a).on(o + d, c),
            y = X(),
            x = t(h, v);
        r ? (l = r.apply(s, arguments), l = [l.x - x[0], l.y - x[1]]) : l = [0, 0], g({type: "dragstart"});
      };
    }
    var e = w(n, "drag", "dragstart", "dragend"),
        r = null,
        u = t(y, Bo.mouse, J, "mousemove", "mouseup"),
        i = t(B, Bo.touch, W, "touchmove", "touchend");
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r;
    }, Bo.rebind(n, e, "on");
  }, Bo.touches = function(n, t) {
    return arguments.length < 2 && (t = b().touches), t ? Jo(t).map(function(t) {
      var e = $(n, t);
      return e.identifier = t.identifier, e;
    }) : [];
  };
  var Ea = Math.PI,
      Aa = 2 * Ea,
      Ca = Ea / 2,
      Na = 1e-6,
      za = Na * Na,
      La = Ea / 180,
      Ta = 180 / Ea,
      qa = Math.SQRT2,
      Ra = 2,
      Da = 4;
  Bo.interpolateZoom = function(n, t) {
    function e(n) {
      var t = n * y;
      if (m) {
        var e = et(v),
            o = i / (Ra * h) * (e * rt(qa * t + v) - tt(v));
        return [r + o * l, u + o * s, i * e / et(qa * t + v)];
      }
      return [r + n * l, u + n * s, i * Math.exp(qa * t)];
    }
    var r = n[0],
        u = n[1],
        i = n[2],
        o = t[0],
        a = t[1],
        c = t[2],
        l = o - r,
        s = a - u,
        f = l * l + s * s,
        h = Math.sqrt(f),
        g = (c * c - i * i + Da * f) / (2 * i * Ra * h),
        p = (c * c - i * i - Da * f) / (2 * c * Ra * h),
        v = Math.log(Math.sqrt(g * g + 1) - g),
        d = Math.log(Math.sqrt(p * p + 1) - p),
        m = d - v,
        y = (m || Math.log(c / i)) / qa;
    return e.duration = 1e3 * y, e;
  }, Bo.behavior.zoom = function() {
    function n(n) {
      n.on(A, l).on(ja + ".zoom", f).on("dblclick.zoom", h).on(z, s);
    }
    function t(n) {
      return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k];
    }
    function e(n) {
      return [n[0] * S.k + S.x, n[1] * S.k + S.y];
    }
    function r(n) {
      S.k = Math.max(E[0], Math.min(E[1], n));
    }
    function u(n, t) {
      t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1];
    }
    function i() {
      x && x.domain(y.range().map(function(n) {
        return (n - S.x) / S.k;
      }).map(y.invert)), b && b.domain(M.range().map(function(n) {
        return (n - S.y) / S.k;
      }).map(M.invert));
    }
    function o(n) {
      n({type: "zoomstart"});
    }
    function a(n) {
      i(), n({
        type: "zoom",
        scale: S.k,
        translate: [S.x, S.y]
      });
    }
    function c(n) {
      n({type: "zoomend"});
    }
    function l() {
      function n() {
        s = 1, u(Bo.mouse(r), h), a(l);
      }
      function e() {
        f.on(C, null).on(N, null), g(s && Bo.event.target === i), c(l);
      }
      var r = this,
          i = Bo.event.target,
          l = L.of(r, arguments),
          s = 0,
          f = Bo.select(Qo).on(C, n).on(N, e),
          h = t(Bo.mouse(r)),
          g = X();
      Y.call(r), o(l);
    }
    function s() {
      function n() {
        var n = Bo.touches(g);
        return h = S.k, n.forEach(function(n) {
          n.identifier in v && (v[n.identifier] = t(n));
        }), n;
      }
      function e() {
        var t = Bo.event.target;
        Bo.select(t).on(x, i).on(M, f), b.push(t);
        for (var e = Bo.event.changedTouches,
            o = 0,
            c = e.length; c > o; ++o)
          v[e[o].identifier] = null;
        var l = n(),
            s = Date.now();
        if (1 === l.length) {
          if (500 > s - m) {
            var h = l[0],
                g = v[h.identifier];
            r(2 * S.k), u(h, g), _(), a(p);
          }
          m = s;
        } else if (l.length > 1) {
          var h = l[0],
              y = l[1],
              w = h[0] - y[0],
              k = h[1] - y[1];
          d = w * w + k * k;
        }
      }
      function i() {
        for (var n,
            t,
            e,
            i,
            o = Bo.touches(g),
            c = 0,
            l = o.length; l > c; ++c, i = null)
          if (e = o[c], i = v[e.identifier]) {
            if (t)
              break;
            n = e, t = i;
          }
        if (i) {
          var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s,
              f = d && Math.sqrt(s / d);
          n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * h);
        }
        m = null, u(n, t), a(p);
      }
      function f() {
        if (Bo.event.touches.length) {
          for (var t = Bo.event.changedTouches,
              e = 0,
              r = t.length; r > e; ++e)
            delete v[t[e].identifier];
          for (var u in v)
            return void n();
        }
        Bo.selectAll(b).on(y, null), w.on(A, l).on(z, s), k(), c(p);
      }
      var h,
          g = this,
          p = L.of(g, arguments),
          v = {},
          d = 0,
          y = ".zoom-" + Bo.event.changedTouches[0].identifier,
          x = "touchmove" + y,
          M = "touchend" + y,
          b = [],
          w = Bo.select(g),
          k = X();
      Y.call(g), e(), o(p), w.on(A, null).on(z, e);
    }
    function f() {
      var n = L.of(this, arguments);
      d ? clearTimeout(d) : (g = t(p = v || Bo.mouse(this)), Y.call(this), o(n)), d = setTimeout(function() {
        d = null, c(n);
      }, 50), _(), r(Math.pow(2, .002 * Pa()) * S.k), u(p, g), a(n);
    }
    function h() {
      var n = L.of(this, arguments),
          e = Bo.mouse(this),
          i = t(e),
          l = Math.log(S.k) / Math.LN2;
      o(n), r(Math.pow(2, Bo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), u(e, i), a(n), c(n);
    }
    var g,
        p,
        v,
        d,
        m,
        y,
        x,
        M,
        b,
        S = {
          x: 0,
          y: 0,
          k: 1
        },
        k = [960, 500],
        E = Ua,
        A = "mousedown.zoom",
        C = "mousemove.zoom",
        N = "mouseup.zoom",
        z = "touchstart.zoom",
        L = w(n, "zoomstart", "zoom", "zoomend");
    return n.event = function(n) {
      n.each(function() {
        var n = L.of(this, arguments),
            t = S;
        Cl ? Bo.select(this).transition().each("start.zoom", function() {
          S = this.__chart__ || {
            x: 0,
            y: 0,
            k: 1
          }, o(n);
        }).tween("zoom:zoom", function() {
          var e = k[0],
              r = k[1],
              u = e / 2,
              i = r / 2,
              o = Bo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
          return function(t) {
            var r = o(t),
                c = e / r[2];
            this.__chart__ = S = {
              x: u - r[0] * c,
              y: i - r[1] * c,
              k: c
            }, a(n);
          };
        }).each("end.zoom", function() {
          c(n);
        }) : (this.__chart__ = S, o(n), a(n), c(n));
      });
    }, n.translate = function(t) {
      return arguments.length ? (S = {
        x: +t[0],
        y: +t[1],
        k: S.k
      }, i(), n) : [S.x, S.y];
    }, n.scale = function(t) {
      return arguments.length ? (S = {
        x: S.x,
        y: S.y,
        k: +t
      }, i(), n) : S.k;
    }, n.scaleExtent = function(t) {
      return arguments.length ? (E = null == t ? Ua : [+t[0], +t[1]], n) : E;
    }, n.center = function(t) {
      return arguments.length ? (v = t && [+t[0], +t[1]], n) : v;
    }, n.size = function(t) {
      return arguments.length ? (k = t && [+t[0], +t[1]], n) : k;
    }, n.x = function(t) {
      return arguments.length ? (x = t, y = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : x;
    }, n.y = function(t) {
      return arguments.length ? (b = t, M = t.copy(), S = {
        x: 0,
        y: 0,
        k: 1
      }, n) : b;
    }, Bo.rebind(n, L, "on");
  };
  var Pa,
      Ua = [0, 1 / 0],
      ja = "onwheel" in Go ? (Pa = function() {
        return -Bo.event.deltaY * (Bo.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in Go ? (Pa = function() {
        return Bo.event.wheelDelta;
      }, "mousewheel") : (Pa = function() {
        return -Bo.event.detail;
      }, "MozMousePixelScroll");
  Bo.color = it, it.prototype.toString = function() {
    return this.rgb() + "";
  }, Bo.hsl = ot;
  var Fa = ot.prototype = new it;
  Fa.brighter = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ot(this.h, this.s, this.l / n);
  }, Fa.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ot(this.h, this.s, n * this.l);
  }, Fa.rgb = function() {
    return at(this.h, this.s, this.l);
  }, Bo.hcl = ct;
  var Ha = ct.prototype = new it;
  Ha.brighter = function(n) {
    return new ct(this.h, this.c, Math.min(100, this.l + Oa * (arguments.length ? n : 1)));
  }, Ha.darker = function(n) {
    return new ct(this.h, this.c, Math.max(0, this.l - Oa * (arguments.length ? n : 1)));
  }, Ha.rgb = function() {
    return lt(this.h, this.c, this.l).rgb();
  }, Bo.lab = st;
  var Oa = 18,
      Ya = .95047,
      Ia = 1,
      Za = 1.08883,
      Va = st.prototype = new it;
  Va.brighter = function(n) {
    return new st(Math.min(100, this.l + Oa * (arguments.length ? n : 1)), this.a, this.b);
  }, Va.darker = function(n) {
    return new st(Math.max(0, this.l - Oa * (arguments.length ? n : 1)), this.a, this.b);
  }, Va.rgb = function() {
    return ft(this.l, this.a, this.b);
  }, Bo.rgb = dt;
  var Xa = dt.prototype = new it;
  Xa.brighter = function(n) {
    n = Math.pow(.7, arguments.length ? n : 1);
    var t = this.r,
        e = this.g,
        r = this.b,
        u = 30;
    return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new dt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new dt(u, u, u);
  }, Xa.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new dt(n * this.r, n * this.g, n * this.b);
  }, Xa.hsl = function() {
    return _t(this.r, this.g, this.b);
  }, Xa.toString = function() {
    return "#" + xt(this.r) + xt(this.g) + xt(this.b);
  };
  var $a = Bo.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  $a.forEach(function(n, t) {
    $a.set(n, mt(t));
  }), Bo.functor = kt, Bo.xhr = At(Et), Bo.dsv = function(n, t) {
    function e(n, e, i) {
      arguments.length < 3 && (i = e, e = null);
      var o = Ct(n, t, null == e ? r : u(e), i);
      return o.row = function(n) {
        return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e;
      }, o;
    }
    function r(n) {
      return e.parse(n.responseText);
    }
    function u(n) {
      return function(t) {
        return e.parse(t.responseText, n);
      };
    }
    function i(t) {
      return t.map(o).join(n);
    }
    function o(n) {
      return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }
    var a = new RegExp('["' + n + "\n]"),
        c = n.charCodeAt(0);
    return e.parse = function(n, t) {
      var r;
      return e.parseRows(n, function(n, e) {
        if (r)
          return r(n, e - 1);
        var u = new Function("d", "return {" + n.map(function(n, t) {
          return JSON.stringify(n) + ": d[" + t + "]";
        }).join(",") + "}");
        r = t ? function(n, e) {
          return t(u(n), e);
        } : u;
      });
    }, e.parseRows = function(n, t) {
      function e() {
        if (s >= l)
          return o;
        if (u)
          return u = !1, i;
        var t = s;
        if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < l; )
            if (34 === n.charCodeAt(e)) {
              if (34 !== n.charCodeAt(e + 1))
                break;
              ++e;
            }
          s = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"');
        }
        for (; l > s; ) {
          var r = n.charCodeAt(s++),
              a = 1;
          if (10 === r)
            u = !0;
          else if (13 === r)
            u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
          else if (r !== c)
            continue;
          return n.slice(t, s - a);
        }
        return n.slice(t);
      }
      for (var r,
          u,
          i = {},
          o = {},
          a = [],
          l = n.length,
          s = 0,
          f = 0; (r = e()) !== o; ) {
        for (var h = []; r !== i && r !== o; )
          h.push(r), r = e();
        t && null == (h = t(h, f++)) || a.push(h);
      }
      return a;
    }, e.format = function(t) {
      if (Array.isArray(t[0]))
        return e.formatRows(t);
      var r = new v,
          u = [];
      return t.forEach(function(n) {
        for (var t in n)
          r.has(t) || u.push(r.add(t));
      }), [u.map(o).join(n)].concat(t.map(function(t) {
        return u.map(function(n) {
          return o(t[n]);
        }).join(n);
      })).join("\n");
    }, e.formatRows = function(n) {
      return n.map(i).join("\n");
    }, e;
  }, Bo.csv = Bo.dsv(",", "text/csv"), Bo.tsv = Bo.dsv("	", "text/tab-separated-values");
  var Ba,
      Wa,
      Ja,
      Ga,
      Ka,
      Qa = Qo[m(Qo, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17);
      };
  Bo.timer = function(n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now());
    var u = e + t,
        i = {
          c: n,
          t: u,
          f: !1,
          n: null
        };
    Wa ? Wa.n = i : Ba = i, Wa = i, Ja || (Ga = clearTimeout(Ga), Ja = 1, Qa(Lt));
  }, Bo.timer.flush = function() {
    Tt(), qt();
  }, Bo.round = function(n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
  };
  var nc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
  Bo.formatPrefix = function(n, t) {
    var e = 0;
    return n && (0 > n && (n *= -1), t && (n = Bo.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), nc[8 + e / 3];
  };
  var tc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      ec = Bo.map({
        b: function(n) {
          return n.toString(2);
        },
        c: function(n) {
          return String.fromCharCode(n);
        },
        o: function(n) {
          return n.toString(8);
        },
        x: function(n) {
          return n.toString(16);
        },
        X: function(n) {
          return n.toString(16).toUpperCase();
        },
        g: function(n, t) {
          return n.toPrecision(t);
        },
        e: function(n, t) {
          return n.toExponential(t);
        },
        f: function(n, t) {
          return n.toFixed(t);
        },
        r: function(n, t) {
          return (n = Bo.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))));
        }
      }),
      rc = Bo.time = {},
      uc = Date;
  jt.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      ic.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      ic.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      ic.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      ic.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      ic.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      ic.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      ic.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      ic.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      ic.setTime.apply(this._, arguments);
    }
  };
  var ic = Date.prototype;
  rc.year = Ft(function(n) {
    return n = rc.day(n), n.setMonth(0, 1), n;
  }, function(n, t) {
    n.setFullYear(n.getFullYear() + t);
  }, function(n) {
    return n.getFullYear();
  }), rc.years = rc.year.range, rc.years.utc = rc.year.utc.range, rc.day = Ft(function(n) {
    var t = new uc(2e3, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
  }, function(n, t) {
    n.setDate(n.getDate() + t);
  }, function(n) {
    return n.getDate() - 1;
  }), rc.days = rc.day.range, rc.days.utc = rc.day.utc.range, rc.dayOfYear = function(n) {
    var t = rc.year(n);
    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
  }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
    t = 7 - t;
    var e = rc[n] = Ft(function(n) {
      return (n = rc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
    }, function(n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t));
    }, function(n) {
      var e = rc.year(n).getDay();
      return Math.floor((rc.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
    });
    rc[n + "s"] = e.range, rc[n + "s"].utc = e.utc.range, rc[n + "OfYear"] = function(n) {
      var e = rc.year(n).getDay();
      return Math.floor((rc.dayOfYear(n) + (e + t) % 7) / 7);
    };
  }), rc.week = rc.sunday, rc.weeks = rc.sunday.range, rc.weeks.utc = rc.sunday.utc.range, rc.weekOfYear = rc.sundayOfYear;
  var oc = {
    "-": "",
    _: " ",
    0: "0"
  },
      ac = /^\s*\d+/,
      cc = /^%/;
  Bo.locale = function(n) {
    return {
      numberFormat: Pt(n),
      timeFormat: Ot(n)
    };
  };
  var lc = Bo.locale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  Bo.format = lc.numberFormat, Bo.geo = {}, ce.prototype = {
    s: 0,
    t: 0,
    add: function(n) {
      le(n, this.t, sc), le(sc.s, this.s, this), this.s ? this.t += sc.t : this.s = sc.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var sc = new ce;
  Bo.geo.stream = function(n, t) {
    n && fc.hasOwnProperty(n.type) ? fc[n.type](n, t) : se(n, t);
  };
  var fc = {
    Feature: function(n, t) {
      se(n.geometry, t);
    },
    FeatureCollection: function(n, t) {
      for (var e = n.features,
          r = -1,
          u = e.length; ++r < u; )
        se(e[r].geometry, t);
    }
  },
      hc = {
        Sphere: function(n, t) {
          t.sphere();
        },
        Point: function(n, t) {
          n = n.coordinates, t.point(n[0], n[1], n[2]);
        },
        MultiPoint: function(n, t) {
          for (var e = n.coordinates,
              r = -1,
              u = e.length; ++r < u; )
            n = e[r], t.point(n[0], n[1], n[2]);
        },
        LineString: function(n, t) {
          fe(n.coordinates, t, 0);
        },
        MultiLineString: function(n, t) {
          for (var e = n.coordinates,
              r = -1,
              u = e.length; ++r < u; )
            fe(e[r], t, 0);
        },
        Polygon: function(n, t) {
          he(n.coordinates, t);
        },
        MultiPolygon: function(n, t) {
          for (var e = n.coordinates,
              r = -1,
              u = e.length; ++r < u; )
            he(e[r], t);
        },
        GeometryCollection: function(n, t) {
          for (var e = n.geometries,
              r = -1,
              u = e.length; ++r < u; )
            se(e[r], t);
        }
      };
  Bo.geo.area = function(n) {
    return gc = 0, Bo.geo.stream(n, vc), gc;
  };
  var gc,
      pc = new ce,
      vc = {
        sphere: function() {
          gc += 4 * Ea;
        },
        point: y,
        lineStart: y,
        lineEnd: y,
        polygonStart: function() {
          pc.reset(), vc.lineStart = ge;
        },
        polygonEnd: function() {
          var n = 2 * pc;
          gc += 0 > n ? 4 * Ea + n : n, vc.lineStart = vc.lineEnd = vc.point = y;
        }
      };
  Bo.geo.bounds = function() {
    function n(n, t) {
      x.push(M = [s = n, h = n]), f > t && (f = t), t > g && (g = t);
    }
    function t(t, e) {
      var r = pe([t * La, e * La]);
      if (m) {
        var u = de(m, r),
            i = [u[1], -u[0], 0],
            o = de(i, u);
        xe(o), o = Me(o);
        var c = t - p,
            l = c > 0 ? 1 : -1,
            v = o[0] * Ta * l,
            d = ca(c) > 180;
        if (d ^ (v > l * p && l * t > v)) {
          var y = o[1] * Ta;
          y > g && (g = y);
        } else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
          var y = -o[1] * Ta;
          f > y && (f = y);
        } else
          f > e && (f = e), e > g && (g = e);
        d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t);
      } else
        n(t, e);
      m = r, p = t;
    }
    function e() {
      _.point = t;
    }
    function r() {
      M[0] = s, M[1] = h, _.point = n, m = null;
    }
    function u(n, e) {
      if (m) {
        var r = n - p;
        y += ca(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else
        v = n, d = e;
      vc.point(n, e), t(n, e);
    }
    function i() {
      vc.lineStart();
    }
    function o() {
      u(v, d), vc.lineEnd(), ca(y) > Na && (s = -(h = 180)), M[0] = s, M[1] = h, m = null;
    }
    function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }
    function c(n, t) {
      return n[0] - t[0];
    }
    function l(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }
    var s,
        f,
        h,
        g,
        p,
        v,
        d,
        m,
        y,
        x,
        M,
        _ = {
          point: n,
          lineStart: e,
          lineEnd: r,
          polygonStart: function() {
            _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, vc.polygonStart();
          },
          polygonEnd: function() {
            vc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > pc ? (s = -(h = 180), f = -(g = 90)) : y > Na ? g = 90 : -Na > y && (f = -90), M[0] = s, M[1] = h;
          }
        };
    return function(n) {
      g = h = -(s = f = 1 / 0), x = [], Bo.geo.stream(n, _);
      var t = x.length;
      if (t) {
        x.sort(c);
        for (var e,
            r = 1,
            u = x[0],
            i = [u]; t > r; ++r)
          e = x[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
        for (var o,
            e,
            p = -1 / 0,
            t = i.length - 1,
            r = 0,
            u = i[t]; t >= r; u = e, ++r)
          e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1]);
      }
      return x = M = null, 1 / 0 === s || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[s, f], [h, g]];
    };
  }(), Bo.geo.centroid = function(n) {
    dc = mc = yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = 0, Bo.geo.stream(n, Ac);
    var t = Sc,
        e = kc,
        r = Ec,
        u = t * t + e * e + r * r;
    return za > u && (t = _c, e = bc, r = wc, Na > mc && (t = yc, e = xc, r = Mc), u = t * t + e * e + r * r, za > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ta, nt(r / Math.sqrt(u)) * Ta];
  };
  var dc,
      mc,
      yc,
      xc,
      Mc,
      _c,
      bc,
      wc,
      Sc,
      kc,
      Ec,
      Ac = {
        sphere: y,
        point: be,
        lineStart: Se,
        lineEnd: ke,
        polygonStart: function() {
          Ac.lineStart = Ee;
        },
        polygonEnd: function() {
          Ac.lineStart = Se;
        }
      },
      Cc = Le(Ae, De, Ue, [-Ea, -Ea / 2]),
      Nc = 1e9;
  Bo.geo.clipExtent = function() {
    var n,
        t,
        e,
        r,
        u,
        i,
        o = {
          stream: function(n) {
            return u && (u.valid = !1), u = i(n), u.valid = !0, u;
          },
          extent: function(a) {
            return arguments.length ? (i = Oe(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [[n, t], [e, r]];
          }
        };
    return o.extent([[0, 0], [960, 500]]);
  }, (Bo.geo.conicEqualArea = function() {
    return Ie(Ze);
  }).raw = Ze, Bo.geo.albers = function() {
    return Bo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  }, Bo.geo.albersUsa = function() {
    function n(n) {
      var i = n[0],
          o = n[1];
      return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t;
    }
    var t,
        e,
        r,
        u,
        i = Bo.geo.albers(),
        o = Bo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        a = Bo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        c = {point: function(n, e) {
            t = [n, e];
          }};
    return n.invert = function(n) {
      var t = i.scale(),
          e = i.translate(),
          r = (n[0] - e[0]) / t,
          u = (n[1] - e[1]) / t;
      return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n);
    }, n.stream = function(n) {
      var t = i.stream(n),
          e = o.stream(n),
          r = a.stream(n);
      return {
        point: function(n, u) {
          t.point(n, u), e.point(n, u), r.point(n, u);
        },
        sphere: function() {
          t.sphere(), e.sphere(), r.sphere();
        },
        lineStart: function() {
          t.lineStart(), e.lineStart(), r.lineStart();
        },
        lineEnd: function() {
          t.lineEnd(), e.lineEnd(), r.lineEnd();
        },
        polygonStart: function() {
          t.polygonStart(), e.polygonStart(), r.polygonStart();
        },
        polygonEnd: function() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
        }
      };
    }, n.precision = function(t) {
      return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision();
    }, n.scale = function(t) {
      return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale();
    }, n.translate = function(t) {
      if (!arguments.length)
        return i.translate();
      var l = i.scale(),
          s = +t[0],
          f = +t[1];
      return e = i.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + Na, f + .12 * l + Na], [s - .214 * l - Na, f + .234 * l - Na]]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + Na, f + .166 * l + Na], [s - .115 * l - Na, f + .234 * l - Na]]).stream(c).point, n;
    }, n.scale(1070);
  };
  var zc,
      Lc,
      Tc,
      qc,
      Rc,
      Dc,
      Pc = {
        point: y,
        lineStart: y,
        lineEnd: y,
        polygonStart: function() {
          Lc = 0, Pc.lineStart = Ve;
        },
        polygonEnd: function() {
          Pc.lineStart = Pc.lineEnd = Pc.point = y, zc += ca(Lc / 2);
        }
      },
      Uc = {
        point: Xe,
        lineStart: y,
        lineEnd: y,
        polygonStart: y,
        polygonEnd: y
      },
      jc = {
        point: We,
        lineStart: Je,
        lineEnd: Ge,
        polygonStart: function() {
          jc.lineStart = Ke;
        },
        polygonEnd: function() {
          jc.point = We, jc.lineStart = Je, jc.lineEnd = Ge;
        }
      };
  Bo.geo.path = function() {
    function n(n) {
      return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Bo.geo.stream(n, o)), i.result();
    }
    function t() {
      return o = null, n;
    }
    var e,
        r,
        u,
        i,
        o,
        a = 4.5;
    return n.area = function(n) {
      return zc = 0, Bo.geo.stream(n, u(Pc)), zc;
    }, n.centroid = function(n) {
      return yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = 0, Bo.geo.stream(n, u(jc)), Ec ? [Sc / Ec, kc / Ec] : wc ? [_c / wc, bc / wc] : Mc ? [yc / Mc, xc / Mc] : [0 / 0, 0 / 0];
    }, n.bounds = function(n) {
      return Rc = Dc = -(Tc = qc = 1 / 0), Bo.geo.stream(n, u(Uc)), [[Tc, qc], [Rc, Dc]];
    }, n.projection = function(n) {
      return arguments.length ? (u = (e = n) ? n.stream || tr(n) : Et, t()) : e;
    }, n.context = function(n) {
      return arguments.length ? (i = null == (r = n) ? new $e : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r;
    }, n.pointRadius = function(t) {
      return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a;
    }, n.projection(Bo.geo.albersUsa()).context(null);
  }, Bo.geo.transform = function(n) {
    return {stream: function(t) {
        var e = new er(t);
        for (var r in n)
          e[r] = n[r];
        return e;
      }};
  }, er.prototype = {
    point: function(n, t) {
      this.stream.point(n, t);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  }, Bo.geo.projection = ur, Bo.geo.projectionMutator = ir, (Bo.geo.equirectangular = function() {
    return ur(ar);
  }).raw = ar.invert = ar, Bo.geo.rotation = function(n) {
    function t(t) {
      return t = n(t[0] * La, t[1] * La), t[0] *= Ta, t[1] *= Ta, t;
    }
    return n = lr(n[0] % 360 * La, n[1] * La, n.length > 2 ? n[2] * La : 0), t.invert = function(t) {
      return t = n.invert(t[0] * La, t[1] * La), t[0] *= Ta, t[1] *= Ta, t;
    }, t;
  }, cr.invert = ar, Bo.geo.circle = function() {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = lr(-n[0] * La, -n[1] * La, 0).invert,
          u = [];
      return e(null, null, 1, {point: function(n, e) {
          u.push(n = t(n, e)), n[0] *= Ta, n[1] *= Ta;
        }}), {
        type: "Polygon",
        coordinates: [u]
      };
    }
    var t,
        e,
        r = [0, 0],
        u = 6;
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r;
    }, n.angle = function(r) {
      return arguments.length ? (e = gr((t = +r) * La, u * La), n) : t;
    }, n.precision = function(r) {
      return arguments.length ? (e = gr(t * La, (u = +r) * La), n) : u;
    }, n.angle(90);
  }, Bo.geo.distance = function(n, t) {
    var e,
        r = (t[0] - n[0]) * La,
        u = n[1] * La,
        i = t[1] * La,
        o = Math.sin(r),
        a = Math.cos(r),
        c = Math.sin(u),
        l = Math.cos(u),
        s = Math.sin(i),
        f = Math.cos(i);
    return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a);
  }, Bo.geo.graticule = function() {
    function n() {
      return {
        type: "MultiLineString",
        coordinates: t()
      };
    }
    function t() {
      return Bo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Bo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(Bo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
        return ca(n % d) > Na;
      }).map(s)).concat(Bo.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
        return ca(n % m) > Na;
      }).map(f));
    }
    var e,
        r,
        u,
        i,
        o,
        a,
        c,
        l,
        s,
        f,
        h,
        g,
        p = 10,
        v = p,
        d = 90,
        m = 360,
        y = 2.5;
    return n.lines = function() {
      return t().map(function(n) {
        return {
          type: "LineString",
          coordinates: n
        };
      });
    }, n.outline = function() {
      return {
        type: "Polygon",
        coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
      };
    }, n.extent = function(t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
    }, n.majorExtent = function(t) {
      return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [[i, l], [u, c]];
    }, n.minorExtent = function(t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [[r, a], [e, o]];
    }, n.step = function(t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
    }, n.majorStep = function(t) {
      return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m];
    }, n.minorStep = function(t) {
      return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v];
    }, n.precision = function(t) {
      return arguments.length ? (y = +t, s = vr(a, o, 90), f = dr(r, e, y), h = vr(l, c, 90), g = dr(i, u, y), n) : y;
    }, n.majorExtent([[-180, -90 + Na], [180, 90 - Na]]).minorExtent([[-180, -80 - Na], [180, 80 + Na]]);
  }, Bo.geo.greatArc = function() {
    function n() {
      return {
        type: "LineString",
        coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
      };
    }
    var t,
        e,
        r = mr,
        u = yr;
    return n.distance = function() {
      return Bo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments));
    }, n.source = function(e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r;
    }, n.target = function(t) {
      return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u;
    }, n.precision = function() {
      return arguments.length ? n : 0;
    }, n;
  }, Bo.geo.interpolate = function(n, t) {
    return xr(n[0] * La, n[1] * La, t[0] * La, t[1] * La);
  }, Bo.geo.length = function(n) {
    return Fc = 0, Bo.geo.stream(n, Hc), Fc;
  };
  var Fc,
      Hc = {
        sphere: y,
        point: y,
        lineStart: Mr,
        lineEnd: y,
        polygonStart: y,
        polygonEnd: y
      },
      Oc = _r(function(n) {
        return Math.sqrt(2 / (1 + n));
      }, function(n) {
        return 2 * Math.asin(n / 2);
      });
  (Bo.geo.azimuthalEqualArea = function() {
    return ur(Oc);
  }).raw = Oc;
  var Yc = _r(function(n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t);
  }, Et);
  (Bo.geo.azimuthalEquidistant = function() {
    return ur(Yc);
  }).raw = Yc, (Bo.geo.conicConformal = function() {
    return Ie(br);
  }).raw = br, (Bo.geo.conicEquidistant = function() {
    return Ie(wr);
  }).raw = wr;
  var Ic = _r(function(n) {
    return 1 / n;
  }, Math.atan);
  (Bo.geo.gnomonic = function() {
    return ur(Ic);
  }).raw = Ic, Sr.invert = function(n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Ca];
  }, (Bo.geo.mercator = function() {
    return kr(Sr);
  }).raw = Sr;
  var Zc = _r(function() {
    return 1;
  }, Math.asin);
  (Bo.geo.orthographic = function() {
    return ur(Zc);
  }).raw = Zc;
  var Vc = _r(function(n) {
    return 1 / (1 + n);
  }, function(n) {
    return 2 * Math.atan(n);
  });
  (Bo.geo.stereographic = function() {
    return ur(Vc);
  }).raw = Vc, Er.invert = function(n, t) {
    return [-t, 2 * Math.atan(Math.exp(n)) - Ca];
  }, (Bo.geo.transverseMercator = function() {
    var n = kr(Er),
        t = n.center,
        e = n.rotate;
    return n.center = function(n) {
      return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]]);
    }, n.rotate = function(n) {
      return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]);
    }, e([0, 0, 90]);
  }).raw = Er, Bo.geom = {}, Bo.geom.hull = function(n) {
    function t(n) {
      if (n.length < 3)
        return [];
      var t,
          u = kt(e),
          i = kt(r),
          o = n.length,
          a = [],
          c = [];
      for (t = 0; o > t; t++)
        a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
      for (a.sort(zr), t = 0; o > t; t++)
        c.push([a[t][0], -a[t][1]]);
      var l = Nr(a),
          s = Nr(c),
          f = s[0] === l[0],
          h = s[s.length - 1] === l[l.length - 1],
          g = [];
      for (t = l.length - 1; t >= 0; --t)
        g.push(n[a[l[t]][2]]);
      for (t = +f; t < s.length - h; ++t)
        g.push(n[a[s[t]][2]]);
      return g;
    }
    var e = Ar,
        r = Cr;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function(n) {
      return arguments.length ? (r = n, t) : r;
    }, t);
  }, Bo.geom.polygon = function(n) {
    return ga(n, Xc), n;
  };
  var Xc = Bo.geom.polygon.prototype = [];
  Xc.area = function() {
    for (var n,
        t = -1,
        e = this.length,
        r = this[e - 1],
        u = 0; ++t < e; )
      n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
    return .5 * u;
  }, Xc.centroid = function(n) {
    var t,
        e,
        r = -1,
        u = this.length,
        i = 0,
        o = 0,
        a = this[u - 1];
    for (arguments.length || (n = -1 / (6 * this.area())); ++r < u; )
      t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
    return [i * n, o * n];
  }, Xc.clip = function(n) {
    for (var t,
        e,
        r,
        u,
        i,
        o,
        a = qr(n),
        c = -1,
        l = this.length - qr(this),
        s = this[l - 1]; ++c < l; ) {
      for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r; )
        o = t[e], Lr(o, s, u) ? (Lr(i, s, u) || n.push(Tr(i, o, s, u)), n.push(o)) : Lr(i, s, u) && n.push(Tr(i, o, s, u)), i = o;
      a && n.push(n[0]), s = u;
    }
    return n;
  };
  var $c,
      Bc,
      Wc,
      Jc,
      Gc,
      Kc = [],
      Qc = [];
  Or.prototype.prepare = function() {
    for (var n,
        t = this.edges,
        e = t.length; e--; )
      n = t[e].edge, n.b && n.a || t.splice(e, 1);
    return t.sort(Ir), t.length;
  }, Qr.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  }, nu.prototype = {
    insert: function(n, t) {
      var e,
          r,
          u;
      if (n) {
        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
          for (n = n.R; n.L; )
            n = n.L;
          n.L = t;
        } else
          n.R = t;
        e = n;
      } else
        this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
      for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; )
        r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
      this._.C = !1;
    },
    remove: function(n) {
      n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
      var t,
          e,
          r,
          u = n.U,
          i = n.L,
          o = n.R;
      if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
        if (n && n.C)
          return n.C = !1, void 0;
        do {
          if (n === this._)
            break;
          if (n === u.L) {
            if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
              t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
              break;
            }
          } else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
            t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
            break;
          }
          t.C = !0, n = u, u = u.U;
        } while (!n.C);
        n && (n.C = !1);
      }
    }
  }, Bo.geom.voronoi = function(n) {
    function t(n) {
      var t = new Array(n.length),
          r = a[0][0],
          u = a[0][1],
          i = a[1][0],
          o = a[1][1];
      return iu(e(n), a).cells.forEach(function(e, a) {
        var c = e.edges,
            l = e.site,
            s = t[a] = c.length ? c.map(function(n) {
              var t = n.start();
              return [t.x, t.y];
            }) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [[r, o], [i, o], [i, u], [r, u]] : [];
        s.point = n[a];
      }), t;
    }
    function e(n) {
      return n.map(function(n, t) {
        return {
          x: Math.round(i(n, t) / Na) * Na,
          y: Math.round(o(n, t) / Na) * Na,
          i: t
        };
      });
    }
    var r = Ar,
        u = Cr,
        i = r,
        o = u,
        a = nl;
    return n ? t(n) : (t.links = function(n) {
      return iu(e(n)).edges.filter(function(n) {
        return n.l && n.r;
      }).map(function(t) {
        return {
          source: n[t.l.i],
          target: n[t.r.i]
        };
      });
    }, t.triangles = function(n) {
      var t = [];
      return iu(e(n)).cells.forEach(function(e, r) {
        for (var u,
            i,
            o = e.site,
            a = e.edges.sort(Ir),
            c = -1,
            l = a.length,
            s = a[l - 1].edge,
            f = s.l === o ? s.r : s.l; ++c < l; )
          u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]]);
      }), t;
    }, t.x = function(n) {
      return arguments.length ? (i = kt(r = n), t) : r;
    }, t.y = function(n) {
      return arguments.length ? (o = kt(u = n), t) : u;
    }, t.clipExtent = function(n) {
      return arguments.length ? (a = null == n ? nl : n, t) : a === nl ? null : a;
    }, t.size = function(n) {
      return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === nl ? null : a && a[1];
    }, t);
  };
  var nl = [[-1e6, -1e6], [1e6, 1e6]];
  Bo.geom.delaunay = function(n) {
    return Bo.geom.voronoi().triangles(n);
  }, Bo.geom.quadtree = function(n, t, e, r, u) {
    function i(n) {
      function i(n, t, e, r, u, i, o, a) {
        if (!isNaN(e) && !isNaN(r))
          if (n.leaf) {
            var c = n.x,
                s = n.y;
            if (null != c)
              if (ca(c - e) + ca(s - r) < .01)
                l(n, t, e, r, u, i, o, a);
              else {
                var f = n.point;
                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a);
              }
            else
              n.x = e, n.y = r, n.point = t;
          } else
            l(n, t, e, r, u, i, o, a);
      }
      function l(n, t, e, r, u, o, a, c) {
        var l = .5 * (u + a),
            s = .5 * (o + c),
            f = e >= l,
            h = r >= s,
            g = (h << 1) + f;
        n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = su()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c);
      }
      var s,
          f,
          h,
          g,
          p,
          v,
          d,
          m,
          y,
          x = kt(a),
          M = kt(c);
      if (null != t)
        v = t, d = e, m = r, y = u;
      else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
        for (g = 0; p > g; ++g)
          s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
      else
        for (g = 0; p > g; ++g) {
          var _ = +x(s = n[g], g),
              b = +M(s, g);
          v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b);
        }
      var w = m - v,
          S = y - d;
      w > S ? y = d + w : m = v + S;
      var k = su();
      if (k.add = function(n) {
        i(k, n, +x(n, ++g), +M(n, g), v, d, m, y);
      }, k.visit = function(n) {
        fu(n, k, v, d, m, y);
      }, g = -1, null == t) {
        for (; ++g < p; )
          i(k, n[g], f[g], h[g], v, d, m, y);
        --g;
      } else
        n.forEach(k.add);
      return f = h = n = s = null, k;
    }
    var o,
        a = Ar,
        c = Cr;
    return (o = arguments.length) ? (a = cu, c = lu, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
      return arguments.length ? (a = n, i) : a;
    }, i.y = function(n) {
      return arguments.length ? (c = n, i) : c;
    }, i.extent = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [[t, e], [r, u]];
    }, i.size = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e];
    }, i);
  }, Bo.interpolateRgb = hu, Bo.interpolateObject = gu, Bo.interpolateNumber = pu, Bo.interpolateString = vu;
  var tl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      el = new RegExp(tl.source, "g");
  Bo.interpolate = du, Bo.interpolators = [function(n, t) {
    var e = typeof t;
    return ("string" === e ? $a.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? hu : vu : t instanceof it ? hu : Array.isArray(t) ? mu : "object" === e && isNaN(t) ? gu : pu)(n, t);
  }], Bo.interpolateArray = mu;
  var rl = function() {
    return Et;
  },
      ul = Bo.map({
        linear: rl,
        poly: Su,
        quad: function() {
          return _u;
        },
        cubic: function() {
          return bu;
        },
        sin: function() {
          return ku;
        },
        exp: function() {
          return Eu;
        },
        circle: function() {
          return Au;
        },
        elastic: Cu,
        back: Nu,
        bounce: function() {
          return zu;
        }
      }),
      il = Bo.map({
        "in": Et,
        out: xu,
        "in-out": Mu,
        "out-in": function(n) {
          return Mu(xu(n));
        }
      });
  Bo.ease = function(n) {
    var t = n.indexOf("-"),
        e = t >= 0 ? n.slice(0, t) : n,
        r = t >= 0 ? n.slice(t + 1) : "in";
    return e = ul.get(e) || rl, r = il.get(r) || Et, yu(r(e.apply(null, Wo.call(arguments, 1))));
  }, Bo.interpolateHcl = Lu, Bo.interpolateHsl = Tu, Bo.interpolateLab = qu, Bo.interpolateRound = Ru, Bo.transform = function(n) {
    var t = Go.createElementNS(Bo.ns.prefix.svg, "g");
    return (Bo.transform = function(n) {
      if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate();
      }
      return new Du(e ? e.matrix : ol);
    })(n);
  }, Du.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  var ol = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  Bo.interpolateTransform = Fu, Bo.layout = {}, Bo.layout.bundle = function() {
    return function(n) {
      for (var t = [],
          e = -1,
          r = n.length; ++e < r; )
        t.push(Yu(n[e]));
      return t;
    };
  }, Bo.layout.chord = function() {
    function n() {
      var n,
          l,
          f,
          h,
          g,
          p = {},
          v = [],
          d = Bo.range(i),
          m = [];
      for (e = [], r = [], n = 0, h = -1; ++h < i; ) {
        for (l = 0, g = -1; ++g < i; )
          l += u[h][g];
        v.push(l), m.push(Bo.range(i)), n += l;
      }
      for (o && d.sort(function(n, t) {
        return o(v[n], v[t]);
      }), a && m.forEach(function(n, t) {
        n.sort(function(n, e) {
          return a(u[t][n], u[t][e]);
        });
      }), n = (Aa - s * i) / n, l = 0, h = -1; ++h < i; ) {
        for (f = l, g = -1; ++g < i; ) {
          var y = d[h],
              x = m[y][g],
              M = u[y][x],
              _ = l,
              b = l += M * n;
          p[y + "-" + x] = {
            index: y,
            subindex: x,
            startAngle: _,
            endAngle: b,
            value: M
          };
        }
        r[y] = {
          index: y,
          startAngle: f,
          endAngle: l,
          value: (l - f) / n
        }, l += s;
      }
      for (h = -1; ++h < i; )
        for (g = h - 1; ++g < i; ) {
          var w = p[h + "-" + g],
              S = p[g + "-" + h];
          (w.value || S.value) && e.push(w.value < S.value ? {
            source: S,
            target: w
          } : {
            source: w,
            target: S
          });
        }
      c && t();
    }
    function t() {
      e.sort(function(n, t) {
        return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
      });
    }
    var e,
        r,
        u,
        i,
        o,
        a,
        c,
        l = {},
        s = 0;
    return l.matrix = function(n) {
      return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u;
    }, l.padding = function(n) {
      return arguments.length ? (s = n, e = r = null, l) : s;
    }, l.sortGroups = function(n) {
      return arguments.length ? (o = n, e = r = null, l) : o;
    }, l.sortSubgroups = function(n) {
      return arguments.length ? (a = n, e = null, l) : a;
    }, l.sortChords = function(n) {
      return arguments.length ? (c = n, e && t(), l) : c;
    }, l.chords = function() {
      return e || n(), e;
    }, l.groups = function() {
      return r || n(), r;
    }, l;
  }, Bo.layout.force = function() {
    function n(n) {
      return function(t, e, r, u) {
        if (t.point !== n) {
          var i = t.cx - n.x,
              o = t.cy - n.y,
              a = u - e,
              c = i * i + o * o;
          if (c > a * a / d) {
            if (p > c) {
              var l = t.charge / c;
              n.px -= i * l, n.py -= o * l;
            }
            return !0;
          }
          if (t.point && c && p > c) {
            var l = t.pointCharge / c;
            n.px -= i * l, n.py -= o * l;
          }
        }
        return !t.charge;
      };
    }
    function t(n) {
      n.px = Bo.event.x, n.py = Bo.event.y, a.resume();
    }
    var e,
        r,
        u,
        i,
        o,
        a = {},
        c = Bo.dispatch("start", "tick", "end"),
        l = [1, 1],
        s = .9,
        f = al,
        h = cl,
        g = -30,
        p = ll,
        v = .1,
        d = .64,
        m = [],
        y = [];
    return a.tick = function() {
      if ((r *= .99) < .005)
        return c.end({
          type: "end",
          alpha: r = 0
        }), !0;
      var t,
          e,
          a,
          f,
          h,
          p,
          d,
          x,
          M,
          _ = m.length,
          b = y.length;
      for (e = 0; b > e; ++e)
        a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
      if ((d = r * v) && (x = l[0] / 2, M = l[1] / 2, e = -1, d))
        for (; ++e < _; )
          a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
      if (g)
        for (Wu(t = Bo.geom.quadtree(m), r, o), e = -1; ++e < _; )
          (a = m[e]).fixed || t.visit(n(a));
      for (e = -1; ++e < _; )
        a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
      c.tick({
        type: "tick",
        alpha: r
      });
    }, a.nodes = function(n) {
      return arguments.length ? (m = n, a) : m;
    }, a.links = function(n) {
      return arguments.length ? (y = n, a) : y;
    }, a.size = function(n) {
      return arguments.length ? (l = n, a) : l;
    }, a.linkDistance = function(n) {
      return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f;
    }, a.distance = a.linkDistance, a.linkStrength = function(n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h;
    }, a.friction = function(n) {
      return arguments.length ? (s = +n, a) : s;
    }, a.charge = function(n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g;
    }, a.chargeDistance = function(n) {
      return arguments.length ? (p = n * n, a) : Math.sqrt(p);
    }, a.gravity = function(n) {
      return arguments.length ? (v = +n, a) : v;
    }, a.theta = function(n) {
      return arguments.length ? (d = n * n, a) : Math.sqrt(d);
    }, a.alpha = function(n) {
      return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
        type: "start",
        alpha: r = n
      }), Bo.timer(a.tick)), a) : r;
    }, a.start = function() {
      function n(n, r) {
        if (!e) {
          for (e = new Array(c), a = 0; c > a; ++a)
            e[a] = [];
          for (a = 0; l > a; ++a) {
            var u = y[a];
            e[u.source.index].push(u.target), e[u.target.index].push(u.source);
          }
        }
        for (var i,
            o = e[t],
            a = -1,
            l = o.length; ++a < l; )
          if (!isNaN(i = o[a][n]))
            return i;
        return Math.random() * r;
      }
      var t,
          e,
          r,
          c = m.length,
          s = y.length,
          p = l[0],
          v = l[1];
      for (t = 0; c > t; ++t)
        (r = m[t]).index = t, r.weight = 0;
      for (t = 0; s > t; ++t)
        r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
      for (t = 0; c > t; ++t)
        r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
      if (u = [], "function" == typeof f)
        for (t = 0; s > t; ++t)
          u[t] = +f.call(this, y[t], t);
      else
        for (t = 0; s > t; ++t)
          u[t] = f;
      if (i = [], "function" == typeof h)
        for (t = 0; s > t; ++t)
          i[t] = +h.call(this, y[t], t);
      else
        for (t = 0; s > t; ++t)
          i[t] = h;
      if (o = [], "function" == typeof g)
        for (t = 0; c > t; ++t)
          o[t] = +g.call(this, m[t], t);
      else
        for (t = 0; c > t; ++t)
          o[t] = g;
      return a.resume();
    }, a.resume = function() {
      return a.alpha(.1);
    }, a.stop = function() {
      return a.alpha(0);
    }, a.drag = function() {
      return e || (e = Bo.behavior.drag().origin(Et).on("dragstart.force", Vu).on("drag.force", t).on("dragend.force", Xu)), arguments.length ? (this.on("mouseover.force", $u).on("mouseout.force", Bu).call(e), void 0) : e;
    }, Bo.rebind(a, c, "on");
  };
  var al = 20,
      cl = 1,
      ll = 1 / 0;
  Bo.layout.hierarchy = function() {
    function n(u) {
      var i,
          o = [u],
          a = [];
      for (u.depth = 0; null != (i = o.pop()); )
        if (a.push(i), (l = e.call(n, i, i.depth)) && (c = l.length)) {
          for (var c,
              l,
              s; --c >= 0; )
            o.push(s = l[c]), s.parent = i, s.depth = i.depth + 1;
          r && (i.value = 0), i.children = l;
        } else
          r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
      return Ku(u, function(n) {
        var e,
            u;
        t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value);
      }), a;
    }
    var t = ti,
        e = Qu,
        r = ni;
    return n.sort = function(e) {
      return arguments.length ? (t = e, n) : t;
    }, n.children = function(t) {
      return arguments.length ? (e = t, n) : e;
    }, n.value = function(t) {
      return arguments.length ? (r = t, n) : r;
    }, n.revalue = function(t) {
      return r && (Gu(t, function(n) {
        n.children && (n.value = 0);
      }), Ku(t, function(t) {
        var e;
        t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value);
      })), t;
    }, n;
  }, Bo.layout.partition = function() {
    function n(t, e, r, u) {
      var i = t.children;
      if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
        var o,
            a,
            c,
            l = -1;
        for (r = t.value ? r / t.value : 0; ++l < o; )
          n(a = i[l], e, c = a.value * r, u), e += c;
      }
    }
    function t(n) {
      var e = n.children,
          r = 0;
      if (e && (u = e.length))
        for (var u,
            i = -1; ++i < u; )
          r = Math.max(r, t(e[i]));
      return 1 + r;
    }
    function e(e, i) {
      var o = r.call(this, e, i);
      return n(o[0], 0, u[0], u[1] / t(o[0])), o;
    }
    var r = Bo.layout.hierarchy(),
        u = [1, 1];
    return e.size = function(n) {
      return arguments.length ? (u = n, e) : u;
    }, Ju(e, r);
  }, Bo.layout.pie = function() {
    function n(i) {
      var o = i.map(function(e, r) {
        return +t.call(n, e, r);
      }),
          a = +("function" == typeof r ? r.apply(this, arguments) : r),
          c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Bo.sum(o),
          l = Bo.range(i.length);
      null != e && l.sort(e === sl ? function(n, t) {
        return o[t] - o[n];
      } : function(n, t) {
        return e(i[n], i[t]);
      });
      var s = [];
      return l.forEach(function(n) {
        var t;
        s[n] = {
          data: i[n],
          value: t = o[n],
          startAngle: a,
          endAngle: a += t * c
        };
      }), s;
    }
    var t = Number,
        e = sl,
        r = 0,
        u = Aa;
    return n.value = function(e) {
      return arguments.length ? (t = e, n) : t;
    }, n.sort = function(t) {
      return arguments.length ? (e = t, n) : e;
    }, n.startAngle = function(t) {
      return arguments.length ? (r = t, n) : r;
    }, n.endAngle = function(t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };
  var sl = {};
  Bo.layout.stack = function() {
    function n(a, c) {
      if (!(h = a.length))
        return a;
      var l = a.map(function(e, r) {
        return t.call(n, e, r);
      }),
          s = l.map(function(t) {
            return t.map(function(t, e) {
              return [i.call(n, t, e), o.call(n, t, e)];
            });
          }),
          f = e.call(n, s, c);
      l = Bo.permute(l, f), s = Bo.permute(s, f);
      var h,
          g,
          p,
          v,
          d = r.call(n, s, c),
          m = l[0].length;
      for (p = 0; m > p; ++p)
        for (u.call(n, l[0][p], v = d[p], s[0][p][1]), g = 1; h > g; ++g)
          u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]);
      return a;
    }
    var t = Et,
        e = oi,
        r = ai,
        u = ii,
        i = ri,
        o = ui;
    return n.values = function(e) {
      return arguments.length ? (t = e, n) : t;
    }, n.order = function(t) {
      return arguments.length ? (e = "function" == typeof t ? t : fl.get(t) || oi, n) : e;
    }, n.offset = function(t) {
      return arguments.length ? (r = "function" == typeof t ? t : hl.get(t) || ai, n) : r;
    }, n.x = function(t) {
      return arguments.length ? (i = t, n) : i;
    }, n.y = function(t) {
      return arguments.length ? (o = t, n) : o;
    }, n.out = function(t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };
  var fl = Bo.map({
    "inside-out": function(n) {
      var t,
          e,
          r = n.length,
          u = n.map(ci),
          i = n.map(li),
          o = Bo.range(r).sort(function(n, t) {
            return u[n] - u[t];
          }),
          a = 0,
          c = 0,
          l = [],
          s = [];
      for (t = 0; r > t; ++t)
        e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
      return s.reverse().concat(l);
    },
    reverse: function(n) {
      return Bo.range(n.length).reverse();
    },
    "default": oi
  }),
      hl = Bo.map({
        silhouette: function(n) {
          var t,
              e,
              r,
              u = n.length,
              i = n[0].length,
              o = [],
              a = 0,
              c = [];
          for (e = 0; i > e; ++e) {
            for (t = 0, r = 0; u > t; t++)
              r += n[t][e][1];
            r > a && (a = r), o.push(r);
          }
          for (e = 0; i > e; ++e)
            c[e] = (a - o[e]) / 2;
          return c;
        },
        wiggle: function(n) {
          var t,
              e,
              r,
              u,
              i,
              o,
              a,
              c,
              l,
              s = n.length,
              f = n[0],
              h = f.length,
              g = [];
          for (g[0] = c = l = 0, e = 1; h > e; ++e) {
            for (t = 0, u = 0; s > t; ++t)
              u += n[t][e][1];
            for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
              for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                o += (n[r][e][1] - n[r][e - 1][1]) / a;
              i += o * n[t][e][1];
            }
            g[e] = c -= u ? i / u * a : 0, l > c && (l = c);
          }
          for (e = 0; h > e; ++e)
            g[e] -= l;
          return g;
        },
        expand: function(n) {
          var t,
              e,
              r,
              u = n.length,
              i = n[0].length,
              o = 1 / u,
              a = [];
          for (e = 0; i > e; ++e) {
            for (t = 0, r = 0; u > t; t++)
              r += n[t][e][1];
            if (r)
              for (t = 0; u > t; t++)
                n[t][e][1] /= r;
            else
              for (t = 0; u > t; t++)
                n[t][e][1] = o;
          }
          for (e = 0; i > e; ++e)
            a[e] = 0;
          return a;
        },
        zero: ai
      });
  Bo.layout.histogram = function() {
    function n(n, i) {
      for (var o,
          a,
          c = [],
          l = n.map(e, this),
          s = r.call(this, l, i),
          f = u.call(this, s, l, i),
          i = -1,
          h = l.length,
          g = f.length - 1,
          p = t ? 1 : 1 / h; ++i < g; )
        o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
      if (g > 0)
        for (i = -1; ++i < h; )
          a = l[i], a >= s[0] && a <= s[1] && (o = c[Bo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
      return c;
    }
    var t = !0,
        e = Number,
        r = gi,
        u = fi;
    return n.value = function(t) {
      return arguments.length ? (e = t, n) : e;
    }, n.range = function(t) {
      return arguments.length ? (r = kt(t), n) : r;
    }, n.bins = function(t) {
      return arguments.length ? (u = "number" == typeof t ? function(n) {
        return hi(n, t);
      } : kt(t), n) : u;
    }, n.frequency = function(e) {
      return arguments.length ? (t = !!e, n) : t;
    }, n;
  }, Bo.layout.pack = function() {
    function n(n, i) {
      var o = e.call(this, n, i),
          a = o[0],
          c = u[0],
          l = u[1],
          s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
            return t;
          };
      if (a.x = a.y = 0, Ku(a, function(n) {
        n.r = +s(n.value);
      }), Ku(a, yi), r) {
        var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
        Ku(a, function(n) {
          n.r += f;
        }), Ku(a, yi), Ku(a, function(n) {
          n.r -= f;
        });
      }
      return _i(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o;
    }
    var t,
        e = Bo.layout.hierarchy().sort(pi),
        r = 0,
        u = [1, 1];
    return n.size = function(t) {
      return arguments.length ? (u = t, n) : u;
    }, n.radius = function(e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t;
    }, n.padding = function(t) {
      return arguments.length ? (r = +t, n) : r;
    }, Ju(n, e);
  }, Bo.layout.tree = function() {
    function n(n, u) {
      var s = o.call(this, n, u),
          f = s[0],
          h = t(f);
      if (Ku(h, e), h.parent.m = -h.z, Gu(h, r), l)
        Gu(f, i);
      else {
        var g = f,
            p = f,
            v = f;
        Gu(f, function(n) {
          n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n);
        });
        var d = a(g, p) / 2 - g.x,
            m = c[0] / (p.x + a(p, g) / 2 + d),
            y = c[1] / (v.depth || 1);
        Gu(f, function(n) {
          n.x = (n.x + d) * m, n.y = n.depth * y;
        });
      }
      return s;
    }
    function t(n) {
      for (var t,
          e = {
            A: null,
            children: [n]
          },
          r = [e]; null != (t = r.pop()); )
        for (var u,
            i = t.children,
            o = 0,
            a = i.length; a > o; ++o)
          r.push((i[o] = u = {
            _: i[o],
            parent: t,
            children: (u = i[o].children) && u.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: o
          }).a = u);
      return e.children[0];
    }
    function e(n) {
      var t = n.children,
          e = n.parent.children,
          r = n.i ? e[n.i - 1] : null;
      if (t.length) {
        Ai(n);
        var i = (t[0].z + t[t.length - 1].z) / 2;
        r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i;
      } else
        r && (n.z = r.z + a(n._, r._));
      n.parent.A = u(n, r, n.parent.A || e[0]);
    }
    function r(n) {
      n._.x = n.z + n.parent.m, n.m += n.parent.m;
    }
    function u(n, t, e) {
      if (t) {
        for (var r,
            u = n,
            i = n,
            o = t,
            c = u.parent.children[0],
            l = u.m,
            s = i.m,
            f = o.m,
            h = c.m; o = ki(o), u = Si(u), o && u; )
          c = Si(c), i = ki(i), i.a = n, r = o.z + f - u.z - l + a(o._, u._), r > 0 && (Ei(Ci(o, n, e), n, r), l += r, s += r), f += o.m, l += u.m, h += c.m, s += i.m;
        o && !ki(i) && (i.t = o, i.m += f - s), u && !Si(c) && (c.t = u, c.m += l - h, e = n);
      }
      return e;
    }
    function i(n) {
      n.x *= c[0], n.y = n.depth * c[1];
    }
    var o = Bo.layout.hierarchy().sort(null).value(null),
        a = wi,
        c = [1, 1],
        l = null;
    return n.separation = function(t) {
      return arguments.length ? (a = t, n) : a;
    }, n.size = function(t) {
      return arguments.length ? (l = null == (c = t) ? i : null, n) : l ? null : c;
    }, n.nodeSize = function(t) {
      return arguments.length ? (l = null == (c = t) ? null : i, n) : l ? c : null;
    }, Ju(n, o);
  }, Bo.layout.cluster = function() {
    function n(n, i) {
      var o,
          a = t.call(this, n, i),
          c = a[0],
          l = 0;
      Ku(c, function(n) {
        var t = n.children;
        t && t.length ? (n.x = zi(t), n.y = Ni(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n);
      });
      var s = Li(c),
          f = Ti(c),
          h = s.x - e(s, f) / 2,
          g = f.x + e(f, s) / 2;
      return Ku(c, u ? function(n) {
        n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1];
      } : function(n) {
        n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1];
      }), a;
    }
    var t = Bo.layout.hierarchy().sort(null).value(null),
        e = wi,
        r = [1, 1],
        u = !1;
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e;
    }, n.size = function(t) {
      return arguments.length ? (u = null == (r = t), n) : u ? null : r;
    }, n.nodeSize = function(t) {
      return arguments.length ? (u = null != (r = t), n) : u ? r : null;
    }, Ju(n, t);
  }, Bo.layout.treemap = function() {
    function n(n, t) {
      for (var e,
          r,
          u = -1,
          i = n.length; ++u < i; )
        r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r;
    }
    function t(e) {
      var i = e.children;
      if (i && i.length) {
        var o,
            a,
            c,
            l = f(e),
            s = [],
            h = i.slice(),
            p = 1 / 0,
            v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
        for (n(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0; )
          s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
        s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t);
      }
    }
    function e(t) {
      var r = t.children;
      if (r && r.length) {
        var i,
            o = f(t),
            a = r.slice(),
            c = [];
        for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop(); )
          c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
        r.forEach(e);
      }
    }
    function r(n, t) {
      for (var e,
          r = n.area,
          u = 0,
          i = 1 / 0,
          o = -1,
          a = n.length; ++o < a; )
        (e = n[o].area) && (i > e && (i = e), e > u && (u = e));
      return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0;
    }
    function u(n, t, e, r) {
      var u,
          i = -1,
          o = n.length,
          a = e.x,
          l = e.y,
          s = t ? c(n.area / t) : 0;
      if (t == e.dx) {
        for ((r || s > e.dy) && (s = e.dy); ++i < o; )
          u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
        u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s;
      } else {
        for ((r || s > e.dx) && (s = e.dx); ++i < o; )
          u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
        u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s;
      }
    }
    function i(r) {
      var u = o || a(r),
          i = u[0];
      return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u;
    }
    var o,
        a = Bo.layout.hierarchy(),
        c = Math.round,
        l = [1, 1],
        s = null,
        f = qi,
        h = !1,
        g = "squarify",
        p = .5 * (1 + Math.sqrt(5));
    return i.size = function(n) {
      return arguments.length ? (l = n, i) : l;
    }, i.padding = function(n) {
      function t(t) {
        var e = n.call(i, t, t.depth);
        return null == e ? qi(t) : Ri(t, "number" == typeof e ? [e, e, e, e] : e);
      }
      function e(t) {
        return Ri(t, n);
      }
      if (!arguments.length)
        return s;
      var r;
      return f = null == (s = n) ? qi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i;
    }, i.round = function(n) {
      return arguments.length ? (c = n ? Math.round : Number, i) : c != Number;
    }, i.sticky = function(n) {
      return arguments.length ? (h = n, o = null, i) : h;
    }, i.ratio = function(n) {
      return arguments.length ? (p = n, i) : p;
    }, i.mode = function(n) {
      return arguments.length ? (g = n + "", i) : g;
    }, Ju(i, a);
  }, Bo.random = {
    normal: function(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1), 1 > e && (n = 0), function() {
        var e,
            r,
            u;
        do
          e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
 while (!u || u > 1);
        return n + t * e * Math.sqrt(-2 * Math.log(u) / u);
      };
    },
    logNormal: function() {
      var n = Bo.random.normal.apply(Bo, arguments);
      return function() {
        return Math.exp(n());
      };
    },
    bates: function(n) {
      var t = Bo.random.irwinHall(n);
      return function() {
        return t() / n;
      };
    },
    irwinHall: function(n) {
      return function() {
        for (var t = 0,
            e = 0; n > e; e++)
          t += Math.random();
        return t;
      };
    }
  }, Bo.scale = {};
  var gl = {
    floor: Et,
    ceil: Et
  };
  Bo.scale.linear = function() {
    return Oi([0, 1], [0, 1], du, !1);
  };
  var pl = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  Bo.scale.log = function() {
    return Wi(Bo.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
  };
  var vl = Bo.format(".0e"),
      dl = {
        floor: function(n) {
          return -Math.ceil(-n);
        },
        ceil: function(n) {
          return -Math.floor(-n);
        }
      };
  Bo.scale.pow = function() {
    return Ji(Bo.scale.linear(), 1, [0, 1]);
  }, Bo.scale.sqrt = function() {
    return Bo.scale.pow().exponent(.5);
  }, Bo.scale.ordinal = function() {
    return Ki([], {
      t: "range",
      a: [[]]
    });
  }, Bo.scale.category10 = function() {
    return Bo.scale.ordinal().range(ml);
  }, Bo.scale.category20 = function() {
    return Bo.scale.ordinal().range(yl);
  }, Bo.scale.category20b = function() {
    return Bo.scale.ordinal().range(xl);
  }, Bo.scale.category20c = function() {
    return Bo.scale.ordinal().range(Ml);
  };
  var ml = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(yt),
      yl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(yt),
      xl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(yt),
      Ml = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(yt);
  Bo.scale.quantile = function() {
    return Qi([], []);
  }, Bo.scale.quantize = function() {
    return no(0, 1, [0, 1]);
  }, Bo.scale.threshold = function() {
    return to([.5], [0, 1]);
  }, Bo.scale.identity = function() {
    return eo([0, 1]);
  }, Bo.svg = {}, Bo.svg.arc = function() {
    function n() {
      var n = t.apply(this, arguments),
          i = e.apply(this, arguments),
          o = r.apply(this, arguments) + _l,
          a = u.apply(this, arguments) + _l,
          c = (o > a && (c = o, o = a, a = c), a - o),
          l = Ea > c ? "0" : "1",
          s = Math.cos(o),
          f = Math.sin(o),
          h = Math.cos(a),
          g = Math.sin(a);
      return c >= bl ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z";
    }
    var t = ro,
        e = uo,
        r = io,
        u = oo;
    return n.innerRadius = function(e) {
      return arguments.length ? (t = kt(e), n) : t;
    }, n.outerRadius = function(t) {
      return arguments.length ? (e = kt(t), n) : e;
    }, n.startAngle = function(t) {
      return arguments.length ? (r = kt(t), n) : r;
    }, n.endAngle = function(t) {
      return arguments.length ? (u = kt(t), n) : u;
    }, n.centroid = function() {
      var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
          i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + _l;
      return [Math.cos(i) * n, Math.sin(i) * n];
    }, n;
  };
  var _l = -Ca,
      bl = Aa - Na;
  Bo.svg.line = function() {
    return ao(Et);
  };
  var wl = Bo.map({
    linear: co,
    "linear-closed": lo,
    step: so,
    "step-before": fo,
    "step-after": ho,
    basis: xo,
    "basis-open": Mo,
    "basis-closed": _o,
    bundle: bo,
    cardinal: vo,
    "cardinal-open": go,
    "cardinal-closed": po,
    monotone: Co
  });
  wl.forEach(function(n, t) {
    t.key = n, t.closed = /-closed$/.test(n);
  });
  var Sl = [0, 2 / 3, 1 / 3, 0],
      kl = [0, 1 / 3, 2 / 3, 0],
      El = [0, 1 / 6, 2 / 3, 1 / 6];
  Bo.svg.line.radial = function() {
    var n = ao(No);
    return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
  }, fo.reverse = ho, ho.reverse = fo, Bo.svg.area = function() {
    return zo(Et);
  }, Bo.svg.area.radial = function() {
    var n = zo(No);
    return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n;
  }, Bo.svg.chord = function() {
    function n(n, a) {
      var c = t(this, i, n, a),
          l = t(this, o, n, a);
      return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z";
    }
    function t(n, t, e, r) {
      var u = t.call(n, e, r),
          i = a.call(n, u, r),
          o = c.call(n, u, r) + _l,
          s = l.call(n, u, r) + _l;
      return {
        r: i,
        a0: o,
        a1: s,
        p0: [i * Math.cos(o), i * Math.sin(o)],
        p1: [i * Math.cos(s), i * Math.sin(s)]
      };
    }
    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1;
    }
    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > Ea) + ",1 " + t;
    }
    function u(n, t, e, r) {
      return "Q 0,0 " + r;
    }
    var i = mr,
        o = yr,
        a = Lo,
        c = io,
        l = oo;
    return n.radius = function(t) {
      return arguments.length ? (a = kt(t), n) : a;
    }, n.source = function(t) {
      return arguments.length ? (i = kt(t), n) : i;
    }, n.target = function(t) {
      return arguments.length ? (o = kt(t), n) : o;
    }, n.startAngle = function(t) {
      return arguments.length ? (c = kt(t), n) : c;
    }, n.endAngle = function(t) {
      return arguments.length ? (l = kt(t), n) : l;
    }, n;
  }, Bo.svg.diagonal = function() {
    function n(n, u) {
      var i = t.call(this, n, u),
          o = e.call(this, n, u),
          a = (i.y + o.y) / 2,
          c = [i, {
            x: i.x,
            y: a
          }, {
            x: o.x,
            y: a
          }, o];
      return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3];
    }
    var t = mr,
        e = yr,
        r = To;
    return n.source = function(e) {
      return arguments.length ? (t = kt(e), n) : t;
    }, n.target = function(t) {
      return arguments.length ? (e = kt(t), n) : e;
    }, n.projection = function(t) {
      return arguments.length ? (r = t, n) : r;
    }, n;
  }, Bo.svg.diagonal.radial = function() {
    var n = Bo.svg.diagonal(),
        t = To,
        e = n.projection;
    return n.projection = function(n) {
      return arguments.length ? e(qo(t = n)) : t;
    }, n;
  }, Bo.svg.symbol = function() {
    function n(n, r) {
      return (Al.get(t.call(this, n, r)) || Po)(e.call(this, n, r));
    }
    var t = Do,
        e = Ro;
    return n.type = function(e) {
      return arguments.length ? (t = kt(e), n) : t;
    }, n.size = function(t) {
      return arguments.length ? (e = kt(t), n) : e;
    }, n;
  };
  var Al = Bo.map({
    circle: Po,
    cross: function(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z";
    },
    diamond: function(n) {
      var t = Math.sqrt(n / (2 * Ll)),
          e = t * Ll;
      return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z";
    },
    square: function(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z";
    },
    "triangle-down": function(n) {
      var t = Math.sqrt(n / zl),
          e = t * zl / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    },
    "triangle-up": function(n) {
      var t = Math.sqrt(n / zl),
          e = t * zl / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    }
  });
  Bo.svg.symbolTypes = Al.keys();
  var Cl,
      Nl,
      zl = Math.sqrt(3),
      Ll = Math.tan(30 * La),
      Tl = [],
      ql = 0;
  Tl.call = ya.call, Tl.empty = ya.empty, Tl.node = ya.node, Tl.size = ya.size, Bo.transition = function(n) {
    return arguments.length ? Cl ? n.transition() : n : _a.transition();
  }, Bo.transition.prototype = Tl, Tl.select = function(n) {
    var t,
        e,
        r,
        u = this.id,
        i = [];
    n = k(n);
    for (var o = -1,
        a = this.length; ++o < a; ) {
      i.push(t = []);
      for (var c = this[o],
          l = -1,
          s = c.length; ++l < s; )
        (r = c[l]) && (e = n.call(r, r.__data__, l, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Ho(e, l, u, r.__transition__[u]), t.push(e)) : t.push(null);
    }
    return Uo(i, u);
  }, Tl.selectAll = function(n) {
    var t,
        e,
        r,
        u,
        i,
        o = this.id,
        a = [];
    n = E(n);
    for (var c = -1,
        l = this.length; ++c < l; )
      for (var s = this[c],
          f = -1,
          h = s.length; ++f < h; )
        if (r = s[f]) {
          i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
          for (var g = -1,
              p = e.length; ++g < p; )
            (u = e[g]) && Ho(u, g, o, i), t.push(u);
        }
    return Uo(a, o);
  }, Tl.filter = function(n) {
    var t,
        e,
        r,
        u = [];
    "function" != typeof n && (n = U(n));
    for (var i = 0,
        o = this.length; o > i; i++) {
      u.push(t = []);
      for (var e = this[i],
          a = 0,
          c = e.length; c > a; a++)
        (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
    }
    return Uo(u, this.id);
  }, Tl.tween = function(n, t) {
    var e = this.id;
    return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : F(this, null == t ? function(t) {
      t.__transition__[e].tween.remove(n);
    } : function(r) {
      r.__transition__[e].tween.set(n, t);
    });
  }, Tl.attr = function(n, t) {
    function e() {
      this.removeAttribute(a);
    }
    function r() {
      this.removeAttributeNS(a.space, a.local);
    }
    function u(n) {
      return null == n ? e : (n += "", function() {
        var t,
            e = this.getAttribute(a);
        return e !== n && (t = o(e, n), function(n) {
          this.setAttribute(a, t(n));
        });
      });
    }
    function i(n) {
      return null == n ? r : (n += "", function() {
        var t,
            e = this.getAttributeNS(a.space, a.local);
        return e !== n && (t = o(e, n), function(n) {
          this.setAttributeNS(a.space, a.local, t(n));
        });
      });
    }
    if (arguments.length < 2) {
      for (t in n)
        this.attr(t, n[t]);
      return this;
    }
    var o = "transform" == n ? Fu : du,
        a = Bo.ns.qualify(n);
    return jo(this, "attr." + n, t, a.local ? i : u);
  }, Tl.attrTween = function(n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(u));
      return r && function(n) {
        this.setAttribute(u, r(n));
      };
    }
    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
      return r && function(n) {
        this.setAttributeNS(u.space, u.local, r(n));
      };
    }
    var u = Bo.ns.qualify(n);
    return this.tween("attr." + n, u.local ? r : e);
  }, Tl.style = function(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }
    function u(t) {
      return null == t ? r : (t += "", function() {
        var r,
            u = Qo.getComputedStyle(this, null).getPropertyValue(n);
        return u !== t && (r = du(u, t), function(t) {
          this.style.setProperty(n, r(t), e);
        });
      });
    }
    var i = arguments.length;
    if (3 > i) {
      if ("string" != typeof n) {
        2 > i && (t = "");
        for (e in n)
          this.style(e, n[e], t);
        return this;
      }
      e = "";
    }
    return jo(this, "style." + n, t, u);
  }, Tl.styleTween = function(n, t, e) {
    function r(r, u) {
      var i = t.call(this, r, u, Qo.getComputedStyle(this, null).getPropertyValue(n));
      return i && function(t) {
        this.style.setProperty(n, i(t), e);
      };
    }
    return arguments.length < 3 && (e = ""), this.tween("style." + n, r);
  }, Tl.text = function(n) {
    return jo(this, "text", n, Fo);
  }, Tl.remove = function() {
    return this.each("end.transition", function() {
      var n;
      this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this);
    });
  }, Tl.ease = function(n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Bo.ease.apply(Bo, arguments)), F(this, function(e) {
      e.__transition__[t].ease = n;
    }));
  }, Tl.delay = function(n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].delay : F(this, "function" == typeof n ? function(e, r, u) {
      e.__transition__[t].delay = +n.call(e, e.__data__, r, u);
    } : (n = +n, function(e) {
      e.__transition__[t].delay = n;
    }));
  }, Tl.duration = function(n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].duration : F(this, "function" == typeof n ? function(e, r, u) {
      e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u));
    } : (n = Math.max(1, n), function(e) {
      e.__transition__[t].duration = n;
    }));
  }, Tl.each = function(n, t) {
    var e = this.id;
    if (arguments.length < 2) {
      var r = Nl,
          u = Cl;
      Cl = e, F(this, function(t, r, u) {
        Nl = t.__transition__[e], n.call(t, t.__data__, r, u);
      }), Nl = r, Cl = u;
    } else
      F(this, function(r) {
        var u = r.__transition__[e];
        (u.event || (u.event = Bo.dispatch("start", "end"))).on(n, t);
      });
    return this;
  }, Tl.transition = function() {
    for (var n,
        t,
        e,
        r,
        u = this.id,
        i = ++ql,
        o = [],
        a = 0,
        c = this.length; c > a; a++) {
      o.push(n = []);
      for (var t = this[a],
          l = 0,
          s = t.length; s > l; l++)
        (e = t[l]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Ho(e, l, i, r)), n.push(e);
    }
    return Uo(o, i);
  }, Bo.svg.axis = function() {
    function n(n) {
      n.each(function() {
        var n,
            l = Bo.select(this),
            s = this.__chart__ || e,
            f = this.__chart__ = e.copy(),
            h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
            g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : Et : t,
            p = l.selectAll(".tick").data(h, f),
            v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Na),
            d = Bo.transition(p.exit()).style("opacity", Na).remove(),
            m = Bo.transition(p.order()).style("opacity", 1),
            y = Math.max(u, 0) + o,
            x = Pi(f),
            M = l.selectAll(".domain").data([0]),
            _ = (M.enter().append("path").attr("class", "domain"), Bo.transition(M));
        v.append("line"), v.append("text");
        var b,
            w,
            S,
            k,
            E = v.select("line"),
            A = m.select("line"),
            C = p.select("text").text(g),
            N = v.select("text"),
            z = m.select("text"),
            L = "top" === r || "left" === r ? -1 : 1;
        if ("bottom" === r || "top" === r ? (n = Oo, b = "x", S = "y", w = "x2", k = "y2", C.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + L * i + "V0H" + x[1] + "V" + L * i)) : (n = Yo, b = "y", S = "x", w = "y2", k = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"), _.attr("d", "M" + L * i + "," + x[0] + "H0V" + x[1] + "H" + L * i)), E.attr(k, L * u), N.attr(S, L * y), A.attr(w, 0).attr(k, L * u), z.attr(b, 0).attr(S, L * y), f.rangeBand) {
          var T = f,
              q = T.rangeBand() / 2;
          s = f = function(n) {
            return T(n) + q;
          };
        } else
          s.rangeBand ? s = f : d.call(n, f, s);
        v.call(n, s, f), m.call(n, f, f);
      });
    }
    var t,
        e = Bo.scale.linear(),
        r = Rl,
        u = 6,
        i = 6,
        o = 3,
        a = [10],
        c = null;
    return n.scale = function(t) {
      return arguments.length ? (e = t, n) : e;
    }, n.orient = function(t) {
      return arguments.length ? (r = t in Dl ? t + "" : Rl, n) : r;
    }, n.ticks = function() {
      return arguments.length ? (a = arguments, n) : a;
    }, n.tickValues = function(t) {
      return arguments.length ? (c = t, n) : c;
    }, n.tickFormat = function(e) {
      return arguments.length ? (t = e, n) : t;
    }, n.tickSize = function(t) {
      var e = arguments.length;
      return e ? (u = +t, i = +arguments[e - 1], n) : u;
    }, n.innerTickSize = function(t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.outerTickSize = function(t) {
      return arguments.length ? (i = +t, n) : i;
    }, n.tickPadding = function(t) {
      return arguments.length ? (o = +t, n) : o;
    }, n.tickSubdivide = function() {
      return arguments.length && n;
    }, n;
  };
  var Rl = "bottom",
      Dl = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      };
  Bo.svg.brush = function() {
    function n(i) {
      i.each(function() {
        var i = Bo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
            o = i.selectAll(".background").data([0]);
        o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var a = i.selectAll(".resize").data(p, Et);
        a.exit().remove(), a.enter().append("g").attr("class", function(n) {
          return "resize " + n;
        }).style("cursor", function(n) {
          return Pl[n];
        }).append("rect").attr("x", function(n) {
          return /[ew]$/.test(n) ? -3 : null;
        }).attr("y", function(n) {
          return /^[ns]/.test(n) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
        var s,
            f = Bo.transition(i),
            h = Bo.transition(o);
        c && (s = Pi(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), e(f)), l && (s = Pi(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), t(f);
      });
    }
    function t(n) {
      n.selectAll(".resize").attr("transform", function(n) {
        return "translate(" + s[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")";
      });
    }
    function e(n) {
      n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0]);
    }
    function r(n) {
      n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0]);
    }
    function u() {
      function u() {
        32 == Bo.event.keyCode && (C || (y = null, z[0] -= s[1], z[1] -= f[1], C = 2), _());
      }
      function p() {
        32 == Bo.event.keyCode && 2 == C && (z[0] += s[1], z[1] += f[1], C = 0, _());
      }
      function v() {
        var n = Bo.mouse(M),
            u = !1;
        x && (n[0] += x[0], n[1] += x[1]), C || (Bo.event.altKey ? (y || (y = [(s[0] + s[1]) / 2, (f[0] + f[1]) / 2]), z[0] = s[+(n[0] < y[0])], z[1] = f[+(n[1] < y[1])]) : y = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, l, 1) && (r(S), u = !0), u && (t(S), w({
          type: "brush",
          mode: C ? "move" : "resize"
        }));
      }
      function d(n, t, e) {
        var r,
            u,
            a = Pi(t),
            c = a[0],
            l = a[1],
            p = z[e],
            v = e ? f : s,
            d = v[1] - v[0];
        return C && (c -= p, l -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(l, n[e])) : n[e], C ? u = (r += p) + d : (y && (p = Math.max(c, Math.min(l, 2 * y[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0;
      }
      function m() {
        v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), Bo.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), N(), w({type: "brushend"});
      }
      var y,
          x,
          M = this,
          b = Bo.select(Bo.event.target),
          w = a.of(M, arguments),
          S = Bo.select(M),
          k = b.datum(),
          E = !/^(n|s)$/.test(k) && c,
          A = !/^(e|w)$/.test(k) && l,
          C = b.classed("extent"),
          N = X(),
          z = Bo.mouse(M),
          L = Bo.select(Qo).on("keydown.brush", u).on("keyup.brush", p);
      if (Bo.event.changedTouches ? L.on("touchmove.brush", v).on("touchend.brush", m) : L.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), C)
        z[0] = s[0] - z[0], z[1] = f[0] - z[1];
      else if (k) {
        var T = +/w$/.test(k),
            q = +/^n/.test(k);
        x = [s[1 - T] - z[0], f[1 - q] - z[1]], z[0] = s[T], z[1] = f[q];
      } else
        Bo.event.altKey && (y = z.slice());
      S.style("pointer-events", "none").selectAll(".resize").style("display", null), Bo.select("body").style("cursor", b.style("cursor")), w({type: "brushstart"}), v();
    }
    var i,
        o,
        a = w(n, "brushstart", "brush", "brushend"),
        c = null,
        l = null,
        s = [0, 0],
        f = [0, 0],
        h = !0,
        g = !0,
        p = Ul[0];
    return n.event = function(n) {
      n.each(function() {
        var n = a.of(this, arguments),
            t = {
              x: s,
              y: f,
              i: i,
              j: o
            },
            e = this.__chart__ || t;
        this.__chart__ = t, Cl ? Bo.select(this).transition().each("start.brush", function() {
          i = e.i, o = e.j, s = e.x, f = e.y, n({type: "brushstart"});
        }).tween("brush:brush", function() {
          var e = mu(s, t.x),
              r = mu(f, t.y);
          return i = o = null, function(u) {
            s = t.x = e(u), f = t.y = r(u), n({
              type: "brush",
              mode: "resize"
            });
          };
        }).each("end.brush", function() {
          i = t.i, o = t.j, n({
            type: "brush",
            mode: "resize"
          }), n({type: "brushend"});
        }) : (n({type: "brushstart"}), n({
          type: "brush",
          mode: "resize"
        }), n({type: "brushend"}));
      });
    }, n.x = function(t) {
      return arguments.length ? (c = t, p = Ul[!c << 1 | !l], n) : c;
    }, n.y = function(t) {
      return arguments.length ? (l = t, p = Ul[!c << 1 | !l], n) : l;
    }, n.clamp = function(t) {
      return arguments.length ? (c && l ? (h = !!t[0], g = !!t[1]) : c ? h = !!t : l && (g = !!t), n) : c && l ? [h, g] : c ? h : l ? g : null;
    }, n.extent = function(t) {
      var e,
          r,
          u,
          a,
          h;
      return arguments.length ? (c && (e = t[0], r = t[1], l && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != s[0] || r != s[1]) && (s = [e, r])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], l.invert && (u = l(u), a = l(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), l && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (h = u, u = a, a = h))), c && l ? [[e, u], [r, a]] : c ? [e, r] : l && [u, a]);
    }, n.clear = function() {
      return n.empty() || (s = [0, 0], f = [0, 0], i = o = null), n;
    }, n.empty = function() {
      return !!c && s[0] == s[1] || !!l && f[0] == f[1];
    }, Bo.rebind(n, a, "on");
  };
  var Pl = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
      Ul = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
      jl = rc.format = lc.timeFormat,
      Fl = jl.utc,
      Hl = Fl("%Y-%m-%dT%H:%M:%S.%LZ");
  jl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Io : Hl, Io.parse = function(n) {
    var t = new Date(n);
    return isNaN(t) ? null : t;
  }, Io.toString = Hl.toString, rc.second = Ft(function(n) {
    return new uc(1e3 * Math.floor(n / 1e3));
  }, function(n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t));
  }, function(n) {
    return n.getSeconds();
  }), rc.seconds = rc.second.range, rc.seconds.utc = rc.second.utc.range, rc.minute = Ft(function(n) {
    return new uc(6e4 * Math.floor(n / 6e4));
  }, function(n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t));
  }, function(n) {
    return n.getMinutes();
  }), rc.minutes = rc.minute.range, rc.minutes.utc = rc.minute.utc.range, rc.hour = Ft(function(n) {
    var t = n.getTimezoneOffset() / 60;
    return new uc(36e5 * (Math.floor(n / 36e5 - t) + t));
  }, function(n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t));
  }, function(n) {
    return n.getHours();
  }), rc.hours = rc.hour.range, rc.hours.utc = rc.hour.utc.range, rc.month = Ft(function(n) {
    return n = rc.day(n), n.setDate(1), n;
  }, function(n, t) {
    n.setMonth(n.getMonth() + t);
  }, function(n) {
    return n.getMonth();
  }), rc.months = rc.month.range, rc.months.utc = rc.month.utc.range;
  var Ol = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
      Yl = [[rc.second, 1], [rc.second, 5], [rc.second, 15], [rc.second, 30], [rc.minute, 1], [rc.minute, 5], [rc.minute, 15], [rc.minute, 30], [rc.hour, 1], [rc.hour, 3], [rc.hour, 6], [rc.hour, 12], [rc.day, 1], [rc.day, 2], [rc.week, 1], [rc.month, 1], [rc.month, 3], [rc.year, 1]],
      Il = jl.multi([[".%L", function(n) {
        return n.getMilliseconds();
      }], [":%S", function(n) {
        return n.getSeconds();
      }], ["%I:%M", function(n) {
        return n.getMinutes();
      }], ["%I %p", function(n) {
        return n.getHours();
      }], ["%a %d", function(n) {
        return n.getDay() && 1 != n.getDate();
      }], ["%b %d", function(n) {
        return 1 != n.getDate();
      }], ["%B", function(n) {
        return n.getMonth();
      }], ["%Y", Ae]]),
      Zl = {
        range: function(n, t, e) {
          return Bo.range(Math.ceil(n / e) * e, +t, e).map(Vo);
        },
        floor: Et,
        ceil: Et
      };
  Yl.year = rc.year, rc.scale = function() {
    return Zo(Bo.scale.linear(), Yl, Il);
  };
  var Vl = Yl.map(function(n) {
    return [n[0].utc, n[1]];
  }),
      Xl = Fl.multi([[".%L", function(n) {
        return n.getUTCMilliseconds();
      }], [":%S", function(n) {
        return n.getUTCSeconds();
      }], ["%I:%M", function(n) {
        return n.getUTCMinutes();
      }], ["%I %p", function(n) {
        return n.getUTCHours();
      }], ["%a %d", function(n) {
        return n.getUTCDay() && 1 != n.getUTCDate();
      }], ["%b %d", function(n) {
        return 1 != n.getUTCDate();
      }], ["%B", function(n) {
        return n.getUTCMonth();
      }], ["%Y", Ae]]);
  Vl.year = rc.year.utc, rc.scale.utc = function() {
    return Zo(Bo.scale.linear(), Vl, Xl);
  }, Bo.text = At(function(n) {
    return n.responseText;
  }), Bo.json = function(n, t) {
    return Ct(n, "application/json", Xo, t);
  }, Bo.html = function(n, t) {
    return Ct(n, "text/html", $o, t);
  }, Bo.xml = At(function(n) {
    return n.responseXML;
  }), "function" == typeof define && define.amd ? System.register("lib/d3", [], false, typeof Bo == "function" ? Bo : function() {
    return Bo;
  }) : "object" == typeof module && module.exports && (module.exports = Bo), this.d3 = Bo;
}();
})();
System.register("app/OverviewWordCloud", ["./utils"], function($__export) {
  "use strict";
  var __moduleName = "app/OverviewWordCloud";
  function require(path) {
    return $traceurRuntime.require("app/OverviewWordCloud", path);
  }
  var Observable,
      OverviewWordCloud;
  return {
    setters: [function(m) {
      Observable = m.Observable;
    }],
    execute: function() {
      OverviewWordCloud = (function() {
        var OverviewWordCloud = function OverviewWordCloud(DataStreamer) {
          var $__0 = this;
          this.progress = 0;
          this.words = {};
          this.excluded = {};
          DataStreamer().node("![*]", (function(data) {
            $__0.words = data.tokens;
            $__0._dispatch("data", [$__0.words, $__0.progress]);
            $__0.updateProgress(data.progress);
            return oboe.drop;
          })).done((function() {
            return $__0._dispatch("done", [$__0.words, $__0.progress]);
          }));
        };
        return ($traceurRuntime.createClass)(OverviewWordCloud, {
          updateProgress: function(newProgress) {
            var oldProgress = this.progress;
            if (newProgress > oldProgress) {
              this.progress = newProgress;
              this._dispatch("progress", [newProgress, oldProgress, this.words]);
            }
          },
          setExcludedWords: function(exclude) {
            for (var key in this.excluded) {
              this.words[key] = this.excluded[key];
            }
            this.excluded = {};
            exclude.forEach(this.excludeWord.bind(this));
          },
          includeWord: function(word) {
            if (this.excluded.hasOwnProperty(word)) {
              this.words[word] = this.excluded[word];
              delete this.excluded[word];
            }
            this._dispatch("inclusionchange", [this.words, this.excluded]);
          },
          excludeWord: function(word) {
            if (this.words.hasOwnProperty(word)) {
              this.excluded[word] = this.words[word];
              delete this.words[word];
            }
            this._dispatch("inclusionchange", [this.words, this.excluded]);
          }
        }, {});
      }());
      $__export('default', Observable(OverviewWordCloud));
    }
  };
});

System.register("app/CloudLayout", ["lib/webfont", "lib/d3", "./utils"], function($__export) {
  "use strict";
  var __moduleName = "app/CloudLayout";
  function require(path) {
    return $traceurRuntime.require("app/CloudLayout", path);
  }
  var WebFont,
      d3,
      polarToCartesian,
      cartesianToPolar,
      offsetsToCartesian,
      cartesianToOffsets,
      fontsDonePromise,
      CloudLayout;
  function tokensToArray(tokens) {
    return Object.keys(tokens).map((function(k) {
      return ({
        text: k,
        value: tokens[k]
      });
    })).sort((function(o1, o2) {
      return o2.value - o1.value;
    }));
  }
  return {
    setters: [function(m) {
      WebFont = m.default;
    }, function(m) {
      d3 = m.default;
    }, function(m) {
      polarToCartesian = m.polarToCartesian;
      cartesianToPolar = m.cartesianToPolar;
      offsetsToCartesian = m.offsetsToCartesian;
      cartesianToOffsets = m.cartesianToOffsets;
    }],
    execute: function() {
      fontsDonePromise = new Promise((function(resolve, reject) {
        WebFont.load({
          google: {families: ['Open Sans:400,700']},
          timeout: 5000,
          active: resolve,
          inactive: reject
        });
      }));
      CloudLayout = (function() {
        var CloudLayout = function CloudLayout() {
          var friction = arguments[0] !== (void 0) ? arguments[0] : .9;
          var $__0 = this;
          this.layout = d3.layout.force().friction(friction).gravity(0).on('tick', this._tick.bind(this));
          this.layout.charge(((function(d, i) {
            var size = $__0.layout.size();
            return (-.15 * (120 / $__0.tokensToShow) * size[0] * size[1] * d.value) / $__0.totalTokenFreqs;
          })));
          this.totalTokenFreqs = null;
          this.tokensToShow = null;
          this.fontScale = d3.scale.linear().domain([1, Infinity]).range([7, 45]);
          this.toCenterScale = d3.scale.linear().domain([1, Infinity]).range([0, 1]);
          this.container = null;
          this.containerSvgElm = null;
          this.containerGElm = null;
        };
        return ($traceurRuntime.createClass)(CloudLayout, {
          _renderSetContainer: function(container) {
            if (container != this.container) {
              this.container = container;
              this.containerSvgElm = d3.select(container).append('svg');
              this.containerGElm = this.containerSvgElm.append('g');
            }
          },
          _renderSetSize: function(size) {
            var currSize = this.layout.size();
            if (size[0] != currSize[0] || size[1] != currSize[1]) {
              this.layout.size(size);
              this.fontScale.range([7, 40]);
              this.container.style.width = size[0] + 'px';
              this.container.style.height = size[1] + 'px';
              this.containerSvgElm.attr('width', size[0]).attr('height', size[1]);
            }
          },
          _renderSetPercentComplete: function(percentComplete) {
            this.containerSvgElm.style('transform', 'scale(' + percentComplete + ')').style('filter', 'grayscale(' + (1 - percentComplete) + ')').style('-webkit-filter', 'grayscale(' + (1 - percentComplete) + ')');
          },
          _renderSetTokens: function(tokens) {
            var $__0 = this;
            var size = this.layout.size(),
                center = size.map((function(it) {
                  return it / 2;
                })),
                maxValue,
                nodes,
                tokensArray;
            this.tokensToShow = Math.ceil(120 / (1 + Math.pow(Math.E, (-1 * size[0] * size[1] + 125000) / 200000)));
            tokensArray = tokensToArray(tokens).slice(0, this.tokensToShow);
            this.totalTokenFreqs = tokensArray.reduce(((function(prev, v) {
              return prev + v.value;
            })), 0);
            maxValue = Math.max.apply(null, tokensArray.map((function(d) {
              return d.value;
            })));
            this.fontScale.domain([1, maxValue]);
            this.toCenterScale.domain([1, maxValue]);
            nodes = tokensArray.map((function(d) {
              var angle = 2 * Math.PI * ((d.value % 360) / 360);
              var distanceToEdgeAtAngle = Math.min(Math.abs(center[0] / Math.cos(angle)), Math.abs(center[1] / Math.sin(angle)));
              var offsets = cartesianToOffsets(polarToCartesian([distanceToEdgeAtAngle * (1 - $__0.toCenterScale(d.value)), angle]), center);
              d.x = offsets[0];
              d.y = offsets[1];
              return d;
            }));
            this.layout.nodes(nodes);
          },
          _tick: function(event) {
            var $__0 = this;
            var animationDuration = 500,
                fontStack = "'Open Sans', Helvetica, Arial, sans-serif",
                size = this.layout.size(),
                center = size.map((function(it) {
                  return it / 2;
                })),
                nodes = this.layout.nodes(),
                fontSizer = this.nodeHelpers.fontSize.bind(null, this.fontScale),
                buffer = 8,
                gravity = (function(distance, strength) {
                  return Math.pow(Math.abs(distance), strength) * (distance < 0 ? -1 : 1);
                });
            nodes.forEach((function(d, i) {
              var nodeSize = $__0.nodeHelpers.visualSize(d, $__0.fontScale);
              var amount = $__0.toCenterScale(d.value);
              var dxFromCenter = center[0] - d.x;
              var dyFromCenter = center[1] - d.y;
              var thisBufferX = buffer + nodeSize[0] / 2 + size[0] * .1 * amount;
              var thisBufferY = buffer + nodeSize[1] / 2 + size[0] * .1 * amount;
              d.x += gravity(dxFromCenter, .93) * event.alpha * (.7 * center[1] / center[0] + .3);
              d.y += gravity(dyFromCenter, .93) * event.alpha * (.7 * center[0] / center[1] + .3);
              d.x = Math.max(thisBufferX, Math.min(size[0] - thisBufferX, d.x));
              d.y = Math.max(thisBufferY, Math.min(size[1] - thisBufferY, d.y));
            }));
            var text = this.containerGElm.selectAll('text').data(nodes, this.nodeHelpers.text);
            text.transition().duration(animationDuration).attr('transform', this.nodeHelpers.transform).style('font-size', fontSizer).style('fill', this.nodeHelpers.color);
            text.enter().append('text').text(this.nodeHelpers.text).attr('text-anchor', 'middle').attr('transform', this.nodeHelpers.transform).style('font-family', fontStack).style('font-size', fontSizer).style('fill', this.nodeHelpers.color).style('opacity', 1 - event.alpha);
            var exitGroup = this.containerSvgElm.append('g').attr('transform', this.containerGElm.attr('transform'));
            var exitGroupNode = exitGroup.node();
            text.exit().each(function() {
              exitGroupNode.appendChild(this);
            });
            exitGroup.transition().duration(animationDuration).style('opacity', 0).remove();
          },
          render: function(container, size, tokens, percentComplete) {
            this.layout.stop();
            this._renderSetContainer(container);
            this._renderSetSize(size);
            this._renderSetPercentComplete(percentComplete);
            this._renderSetTokens(tokens);
            this.layout.start();
          }
        }, {});
      }());
      CloudLayout.prototype.nodeHelpers = {
        transform: function(d) {
          return "translate(" + [d.x, d.y] + ")";
        },
        text: function(d) {
          return d.text;
        },
        color: function(d, i) {
          return 'hsl(' + Math.floor(i % 360) + ', 80%, 35%)';
        },
        fontSize: function(fontScale, d) {
          return fontScale(d.value) + 'px';
        },
        visualSize: function(d, fontScale) {
          var leading = arguments[2] !== (void 0) ? arguments[2] : 1.2;
          return [d.text.length * fontScale(d.value), fontScale(d.value) * leading];
        }
      };
      $__export('default', CloudLayout);
    }
  };
});

System.register("app/ChipList", ["./utils", "lib/selectonic"], function($__export) {
  "use strict";
  var __moduleName = "app/ChipList";
  function require(path) {
    return $traceurRuntime.require("app/ChipList", path);
  }
  var Observable,
      ChipList;
  return {
    setters: [function(m) {
      Observable = m.Observable;
    }, function(m) {}],
    execute: function() {
      ChipList = (function() {
        var ChipList = function ChipList($container, id) {
          var $__0 = this;
          this.id = id;
          this.listeners = {};
          this.$container = $('<ul id="chiplist-' + id + '" class="chipList"></ul>');
          this.$container.appendTo($container);
          this.$container.selectonic({
            multi: true,
            keyboard: true,
            focusBlur: true,
            selectionBlur: true,
            select: function(e, ui) {
              ui.items.eq(0).focus();
            }
          });
          this.$container.click((function(e) {
            var $target = $(e.target),
                selected,
                prevLI;
            if ($target.hasClass('delete')) {
              var selected = $__0.$container.selectonic("getSelected"),
                  prevLI = selected.eq(0).prev('li'),
                  toSelect;
              $__0.delete($target.parent('li').get(0));
              toSelect = prevLI.length ? prevLI : $__0.$container.find('li').eq(0);
              $__0.$container.selectonic('select', toSelect);
            }
          }));
          this.$container.keydown((function(e) {
            switch (e.which) {
              case 8:
                e.preventDefault();
                var selected = $__0.$container.selectonic("getSelected"),
                    prevLI = selected.eq(0).prev('li'),
                    toSelect;
                selected.each(function() {
                  this.delete(this);
                });
                toSelect = prevLI.length ? prevLI : $__0.$container.find('li').eq(0);
                $__0.$container.selectonic('select', toSelect);
                break;
              case 37:
              case 39:
                e.preventDefault();
                e.which += 1;
                $(e.target).trigger(e);
            }
          }));
        };
        return ($traceurRuntime.createClass)(ChipList, {
          delete: function(item) {
            var $item = $(item),
                value = $item.text();
            $item.remove();
            this._dispatch("delete", [value]);
            this.$container.selectonic("refresh");
          },
          prepend: function(value) {
            $('<li class="chip" tabindex="0">' + '<span class="word">' + value + '</span>' + '<span class="delete"></span>' + '</li>').prependTo(this.$container);
          },
          deleteAll: function() {
            this.$container.empty();
            this.$container.selectonic("refresh");
          },
          getAll: function() {
            return this.$container.find('li').map((function(i, it) {
              return it.textContent;
            })).get();
          }
        }, {});
      }());
      $__export('default', Observable(ChipList));
    }
  };
});

System.register("app/app", ["lib/jquery", "lib/oboe-browser", "lib/modernizr.custom", "./OverviewWordCloud", "./CloudLayout", "./ChipList"], function($__export) {
  "use strict";
  var __moduleName = "app/app";
  function require(path) {
    return $traceurRuntime.require("app/app", path);
  }
  var $,
      oboe,
      Modernizr,
      Cloud,
      CloudLayout,
      ChipList;
  return {
    setters: [function(m) {
      $ = m.default;
    }, function(m) {
      oboe = m.default;
    }, function(m) {
      Modernizr = m.default;
    }, function(m) {
      Cloud = m.default;
    }, function(m) {
      CloudLayout = m.default;
    }, function(m) {
      ChipList = m.default;
    }],
    execute: function() {
      $__export('default', function(paramString, server) {
        var $window = $(window),
            $html = $('html'),
            $container = $('#cloud-container'),
            $progress = $('progress'),
            $hideBtn = $('.delete'),
            $hiddenBtn = $('#hidden-btn'),
            $hiddenDiv = $('#hidden-list'),
            wordsSelector = 'text';
        var cloud = new Cloud((function() {
          return oboe('/generate?' + paramString);
        })),
            layout = new CloudLayout(),
            $hoveredWord;
        var render = function() {
          layout.render($container[0], [parseInt($window.width(), 10), parseInt($window.height(), 10)], cloud.words, cloud.progress);
        };
        cloud.observe("progress", function(newProgress) {
          $progress.attr('value', newProgress);
          render();
        });
        cloud.observe("done", function() {
          $progress.remove();
          render();
        });
        cloud.observe("inclusionchange", function(included, excluded) {
          render();
          for (var key in excluded) {
            $hiddenDiv.addClass('hasHidden');
            return;
          }
          $hiddenDiv.removeClass('hasHidden');
        });
        $hiddenDiv.on("click", "li", function(e) {
          cloud.includeWord(e.target.textContent);
          $(e.target).remove();
        });
        var resizeTimer;
        $window.resize(function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(render, 100);
        });
        $html.on("click", "#cloud-container, .close", (function(e) {
          $hiddenDiv.hide();
        }));
        $html.click(function(e) {
          handleClick(e, $container);
        });
        $html.on("mouseenter mouseleave", wordsSelector, function(e) {
          var $target = $(e.target),
              offset;
          if (e.type != "mouseleave") {
            offset = $target.offset();
            $hoveredWord = $target;
            $hideBtn.css({
              'top': (offset.top) + 'px',
              'left': (offset.left + $target.width()) + 'px',
              'opacity': 1
            });
          } else {
            setTimeout(function() {
              $hideBtn.css('opacity', 0);
              $hoveredWord = null;
            }, 1000);
          }
        });
        $hideBtn.on("click", function(e) {
          var text = $hoveredWord.text();
          $hoveredWord.remove();
          $hiddenDiv.find('ul').prepend('<li>' + text + '</li>');
          cloud.excludeWord(text);
        });
        $hiddenBtn.click(function() {
          $hiddenDiv.show();
        });
        var handleClick = (function() {
          debugger;
          var oldMarginTop = 0,
              oldMarginLeft = 0,
              oldScaleFactor = 1;
          return function(e) {
            var $target = $(e.target),
                term,
                termRect,
                windowWidth,
                windowCenter,
                marginTop,
                marginLeft,
                scaleFactor,
                scaleChange;
            if (e.target.tagName.toLowerCase() !== 'text') {
              window.parent.postMessage({
                call: 'setDocumentListParams',
                args: [{name: 'in document set'}]
              }, server);
              $container.removeClass('with-selection').css({
                'transform': 'scale(1)',
                'margin-top': 0,
                'margin-left': 0
              }).find('.active').attr('class', '');
            } else {
              term = e.target.textContent;
              window.parent.postMessage({
                call: 'setDocumentListParams',
                args: [{
                  q: term,
                  name: 'with the word ' + term
                }]
              }, server);
              $container.find('.active').removeAttr('class');
              $target.attr('class', 'active');
              $container.addClass('with-selection');
            }
          };
        }());
      });
      ;
    }
  };
});
