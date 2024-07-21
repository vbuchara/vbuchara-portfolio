import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/blocks/footer/view.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

const {
  state,
  callbacks
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("vbuchara-portfolio/footer", {
  state: {
    intersectionObservers: new Map()
  },
  actions: {
    copyToClipboard: function* (event) {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const target = event.target;
      const popoverClass = "site-footer__social-contact-item-link-popover";
      if (target instanceof HTMLElement && target.classList.contains(popoverClass)) return;
      if (!navigator.clipboard) return;
      yield navigator.clipboard.writeText(context.socialLinks.gmail || "");
      context.gmailHasBeingCopied = true;
      window.clearTimeout(context.gmailHasBeingCopiedTimeout || undefined);
      context.gmailHasBeingCopiedTimeout = window.setTimeout(() => {
        context.gmailHasBeingCopied = false;
      }, 3000);
    },
    doLinkAnimation: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const linkElement = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      if (!linkElement.ref) return;
      window.clearTimeout(context.repeatAnimationTimeout || undefined);
      context.shouldAnimate = true;
    },
    onLinkAnimationEnd: event => {
      if (!event.animationName.includes("element-highlight-animation")) return;
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.shouldAnimate = false;
      window.clearTimeout(context.repeatAnimationTimeout || undefined);
      context.repeatAnimationTimeout = window.setTimeout(() => {
        context.shouldAnimate = true;
      }, 2000);
    },
    onLinkAnimationClear: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.shouldAnimate = false;
      window.clearTimeout(context.repeatAnimationTimeout || undefined);
    }
  },
  callbacks: {
    onFooterInit: () => {
      const footer = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      if (!footer.ref) return;
      const observerCallback = entries => {
        entries.forEach(entry => {
          const socialLinksList = entry.target;
          const socialLinks = socialLinksList.querySelectorAll(".site-footer__social-contact-item-link");
          if (entry.isIntersecting) {
            socialLinks.forEach(socialLink => {
              socialLink.dispatchEvent(new Event("animate"));
            });
          } else {
            socialLinks.forEach(socialLink => {
              socialLink.dispatchEvent(new Event("animation-clear"));
            });
          }
        });
      };
      const intersectionObserver = new IntersectionObserver((0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.withScope)(observerCallback), {
        root: null,
        threshold: 0.2
      });
      const elementsToAnimate = footer.ref.querySelectorAll(".site-footer__social-contact-items");
      elementsToAnimate.forEach(element => intersectionObserver.observe(element));
      state.intersectionObservers = new Map([...state.intersectionObservers, ["vbuchara-portfolio/footer", intersectionObserver]]);
    }
  }
});
})();


//# sourceMappingURL=view.js.map