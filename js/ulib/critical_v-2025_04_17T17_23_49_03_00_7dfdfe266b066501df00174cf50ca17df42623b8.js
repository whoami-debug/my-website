"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function e(){return{elements:[],selectors:[],loadAll:function(){for(var e=0;e<this.selectors.length;e++){var t=this.selectors[e];if(this.load(t))return}},load:function(e){var t=document.querySelector(e);if(!t.children)return!1;for(var n=0;n<t.children.length;n++){var r=t.children[n];if(u(r))for(var o=0;o<this.elements.length;o++){var i=this.elements[o];if("function"==typeof i&&i(r))return!0}}return!1}}}var t=[250,650,1250],n=t[t.length-1],r=window.cache.lazyLoad,o=r&&t[r.range-1]||n,i=window.VERSION&&"?v=".concat(window.VERSION)||"",c=function(e){var t=e.src,n=document.createElement("script");n.setAttribute("src","".concat(t).concat(i)),document.head.appendChild(n)},s=function(e){var t=e.src,n=document.createElement("script");n.setAttribute("defer",""),n.setAttribute("src","".concat(t).concat(i)),document.body.appendChild(n)},a=function(e,t){var n=null;return t||(t=300),function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,o)},t)}},u=function(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=t.top-o<=n&&t.top+t.height+o>=0;return r},d=function(){document.getElementById("orderform-fallback")||s({src:"/js/ulib/orderForm.js"})},l=['[class*="srcset"]','[class*="background-images"]',"img[data-src]","img[data-srcset]","source[data-srcset]","source[data-src]"],f=function(e){-1!==e.className.indexOf("srcset-block")&&e.classList.add("srcset-lazy");for(var t=e.querySelectorAll('[class*="srcset-block"]'),n=0;n<t.length;n++){var r=t[n];u(r)&&r.classList.add("srcset-lazy")}for(var o=e.querySelectorAll(".ul-widget"),i=0;i<o.length;i++){var c=o[i];if(u(c))for(var s=c.querySelectorAll(l.join(",")),a=0;a<s.length;a++){var d=s[a];-1!==d.className.indexOf("srcset-widget")&&d.classList.add("srcset-lazy");var f=d.getAttribute("data-src");f&&(d.setAttribute("src",f),d.removeAttribute("data-src"));var w=d.getAttribute("data-srcset");w&&(d.setAttribute("srcset",w),d.removeAttribute("data-srcset"))}}return!1},w=!1,v=new Map,h=window.getSafeWidgetsData(),m=function(e){for(var t=e.querySelectorAll(".ul-widget"),n=function(e){var n=t[e];if(!u(n))return"continue";var r=n.dataset.widget,o=0;if(w){for(var i=0;i<h.length;i++){var c=h[i];if(c.id===n.id&&!c.loaded){o=c;break}}if(!o)return"continue";var s=window.widgetsDeps[r];return s?(o.loaded=!0,window.require([s],function(e){e.open(n.id)}),"continue"):"continue"}var a=window.widgetsDepsPaths[r];return a?"undefined"==typeof a.greenJs?(b(),v.clear(),{v:!0}):void v.set(n.id,a.greenJs):"continue"},r=0;r<t.length;r++){var o=n(r);if("continue"!==o&&"object"===_typeof(o))return o.v}return!1},p=new e;r&&r.enabled&&p.elements.push(f),p.elements.push(m),window.cache.isScreenshotMode?document.querySelector("#body-fict")&&p.selectors.push("#body-fict"):(document.querySelector("header")&&p.selectors.push("header"),document.querySelector("#ul-content")&&p.selectors.push("#ul-content"),document.querySelector("footer")&&p.selectors.push("footer"));var g=a(function(){window.requireFullConfOnce(function(){p.loadAll()})},100),y=function(){window.require&&(window.cache.isExistCustomHtml||window.require(["ulErrorHandler"],function(e){return new e("/api/errors")}),window.cache.orderForms&&window.cache.orderForms.length&&window.require(["aDialogAppearOptions"],function(){})),c({src:"/js/ulib/viewportObserver.js"}),d()},b=function(){w||(w=!0,window.cache.isRequireConfLoaded?y():(window.addEventListener("requireConfReady",y,{once:!0}),c({src:"/js/requireConf.js"})),window.addEventListener("scroll",g))},q=function(e){window.requireFullConfOnce(function(){for(var t=function(t){var n=e[t],r=window.widgetsDeps[n.type];window.require([r],function(e){e.open(n.id)})},n=0;n<e.length;n++)t(n)})},S=function(){if(p.loadAll(),w)window.requireFullConfOnce(function(){p.loadAll()});else{var e={};v.forEach(function(t,n){t.viewPath&&(e[t.viewName]=t.viewPath)});var t={baseUrl:"/",paths:e};window.VERSION&&(t.urlArgs="v=".concat(window.VERSION)),window.requirejs.config(t)}for(var n=[],r=function(e){var t=h[e];if((t.data&&t.data.abs||t.abs)&&n.push(t),w||!v.has(t.id))return"continue";var r=v.get(t.id),o=r.viewName;t.loaded=!0,window.require([o],function(e){e.open(t.id)})},o=0;o<h.length;o++){r(o)}n.length&&(w?q(n):setTimeout(function(){q(n)},3e3))};window.addEventListener("load",S),window.cache.isRequireConfLoaded?b():(window.addEventListener("requireFullConf",b,{once:!0}),window.addEventListener("scroll",b,{once:!0}),window.addEventListener("resize",g))}();
//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map

//# sourceMappingURL=critical.js.map
