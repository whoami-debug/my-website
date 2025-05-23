"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ScrollAnimationCache=new Map,ScrollAnimation=function(){function e(t){_classCallCheck(this,e),this.classPrefix="animate__",this.speedMap=["slow","","fast"],this.$=t,this.elementsSelectors=[".ul-widget",".ul-blog-post"],this.excludedElemsSelectrosToPreview=[".ul-w-imagezoom",".ul-widget-slider-2",".ul-w-gallery2"],this.excludeElemsSelectorsToAlways=[".ul-absolute-widgets .ul-widget",".ul-w-spacer",".ul-w-mainmenu",'[type="uSpacer"]'],this.excludedElementsSelectors=window.previewMode||window.backupPreviewMode?this.excludeElemsSelectorsToAlways.concat(this.excludedElemsSelectrosToPreview):this.excludeElemsSelectorsToAlways,this.wasAnimatedAttr="data-was-animated",this.MAGIC_TUNE=20,this.handleScroll=this.handleScroll.bind(this)}return _createClass(e,[{key:"animation",get:function(){var e=window.cache.animation,t=void 0===e?{}:e,n=t.speed,i=void 0===n?1:n,o=t.kind,s=void 0===o?"oldFade":o;return{animationSpeed:i,animationKind:s}}},{key:"speedClassName",get:function(){var e=this.animation.animationSpeed,t=this.speedMap[e],n=t&&"".concat(this.classPrefix).concat(t);return n}},{key:"kindClass",get:function(){var e=this.animation.animationKind;return"".concat(this.classPrefix).concat(e)}},{key:"offset",get:function(){return Math.min(100,this.$(window).height())}},{key:"$elements",get:function(){var e=ScrollAnimationCache.get("$elements");if(!e||!e.length){var t=this.$(this.elementsSelectors.join(","),"#main");ScrollAnimationCache.set("$elements",t)}return e||ScrollAnimationCache.get("$elements")}},{key:"$excludedElements",get:function(){var e=ScrollAnimationCache.get("$excludedElements");if(!e||!e.length){var t=this.$(this.excludedElementsSelectors.join(","),"#main");ScrollAnimationCache.set("$excludedElements",t)}return e||ScrollAnimationCache.get("$excludedElements")}},{key:"$elementsToAnimate",get:function(){var e=ScrollAnimationCache.get("$elementsToAnimate");if(!e){var t=this.$elements.not(this.$excludedElements).addClass("ul-scroll-animate animate__animated").addClass(this.speedClassName);ScrollAnimationCache.set("$elementsToAnimate",t)}return e||ScrollAnimationCache.get("$elementsToAnimate")},set:function(e){return this._elementsToAnimate=e,this._elementsToAnimate}},{key:"$elementsToRemoveAnimation",get:function(){return this._elementsToRemoveAnimation&&this._elementsToRemoveAnimation?this._elementsToRemoveAnimation:$()},set:function(e){return this._elementsToRemoveAnimation=e,this._elementsToRemoveAnimation}},{key:"pickElementsToAnimate",value:function(e){var t=this.$,n=this.MAGIC_TUNE,i=this.offset,o=t(),s=t(window).height(),a=t(window).scrollTop(),l=a+s;return e.each(function(){var e=t(this),s=e.offset().top,r=s+e.outerHeight()-n,c=s>=a&&l>=r,m=l>s+i&&s>a,d=a>r;(c||m||d)&&(o=o.add(e))}),o}},{key:"handleScroll",value:function(){if(!this.$elementsToAnimate.length)return void this.removeListeners();var e=this.pickElementsToAnimate(this.$elementsToAnimate);e.addClass(this.kindClass).attr("data-was-animated","true"),this.$elementsToAnimate=this.$elementsToAnimate.not(e),this.$elementsToRemoveAnimation=this.$elementsToRemoveAnimation.add(e)}},{key:"collectElements",value:function(){var e=this.$elements,t=this.$excludedElements;return this.$elementsToAnimate=e.not(t).addClass("ul-scroll-animate animate__animated").addClass(this.speedClassName),this.$elementsToAnimate}},{key:"addListeners",value:function(){var e=this.$;e(window).on("scroll.scrollAnimation",this.handleScroll),("ontouchstart"in window||"onmsgesturechange"in window)&&e(document).on("touchmove.scrollAnimation MSPointerMove.scrollAnimation pointermove.scrollAnimation",this.handleScroll),this.observer=new MutationObserver(this.handleScroll),this.observer.observe(document.body,{childList:!0,attributes:!1,characterData:!1,subtree:!0})}},{key:"removeListeners",value:function(){var e=this.$;this.observer&&this.observer.disconnect(),e(window).off(".scrollAnimation"),e(document).off(".scrollAnimation")}},{key:"debounce",value:function(e,t){var n=this,i=!1,o=function(){for(var o=arguments.length,s=new Array(o),a=0;o>a;a++)s[a]=arguments[a];var l=s;i||(e.apply(n,l),i=!0,setTimeout(function(){i=!1},t))};return o}},{key:"removeClasses",value:function(){var e=this.$;this.$elementsToRemoveAnimation.removeClass(this.speedClassName).removeClass(this.kindClass).attr("data-was-animated","false"),this.$elementsToRemoveAnimation=e()}},{key:"destructor",value:function(){this.removeListeners(),this.$elementsToRemoveAnimation&&this.removeClasses()}},{key:"init",value:function(){this.collectElements(),this.addListeners(),this.handleScroll()}}]),e}();!function(){if(!window.constructorMode){var e=function(){window.constructorMode||window.require(["jquery"],function(e){var t=new ScrollAnimation(e);t.init(),"function"==typeof window.top.$&&(window.top.$(window.top.document).on("changePreviewDevise",function(){t.destructor(),t.init()}),e(window).on("unload",function(){t.destructor(),window.top.$(window.top.document).off("changePreviewDevise")}))})};"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){e()}):e()}}();
//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map

//# sourceMappingURL=scroll-animation.js.map
