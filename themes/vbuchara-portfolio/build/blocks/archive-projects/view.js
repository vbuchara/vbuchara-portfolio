import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "./src/hooks/useInteractivityIntersection.ts":
/*!***************************************************!*\
  !*** ./src/hooks/useInteractivityIntersection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInteractivityIntersection: () => (/* binding */ useInteractivityIntersection)
/* harmony export */ });
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

function useInteractivityIntersection(selector, options) {
  const [intersection, setIntersection] = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const intersectionObserver = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return new IntersectionObserver(entries => {
      const entry = entries[0];
      setIntersection(entry || null);
    }, options);
  }, [options?.root, options?.rootMargin, options?.threshold]);
  (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      ref: element
    } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
    if (!element) return;
    const selectedElement = !selector ? element : element.querySelector(selector);
    if (selectedElement) {
      intersectionObserver.disconnect();
      intersectionObserver.observe(selectedElement);
    }
    ;
    return () => {
      intersectionObserver.disconnect();
    };
  }, [options?.root, options?.rootMargin, options?.threshold, selector]);
  return intersection;
}

/***/ }),

/***/ "./src/hooks/useInteractivityMeasure.ts":
/*!**********************************************!*\
  !*** ./src/hooks/useInteractivityMeasure.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInteractivityMeasure: () => (/* binding */ useInteractivityMeasure)
/* harmony export */ });
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var _utils_getMeasureFromResizeEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/getMeasureFromResizeEntry */ "./src/utils/getMeasureFromResizeEntry.ts");


function useInteractivityMeasure(selector) {
  const [measure, setMeasure] = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const measureResizeObserver = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return new ResizeObserver(entries => {
      if (!entries[0]) return;
      const entry = entries[0];
      setMeasure((0,_utils_getMeasureFromResizeEntry__WEBPACK_IMPORTED_MODULE_1__.getMeasureFromResizeEntry)(entry));
    });
  }, []);
  (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      ref: element
    } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
    if (!element) return;
    const selectedElement = !selector ? element : element.querySelector(selector);
    if (selectedElement) measureResizeObserver.observe(selectedElement);
    return () => {
      measureResizeObserver.disconnect();
    };
  }, [selector]);
  return measure;
}

/***/ }),

/***/ "./src/utils/getMeasureFromResizeEntry.ts":
/*!************************************************!*\
  !*** ./src/utils/getMeasureFromResizeEntry.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMeasureFromResizeEntry: () => (/* binding */ getMeasureFromResizeEntry)
/* harmony export */ });
function getMeasureFromResizeEntry(entry) {
  return {
    x: entry.contentRect.x,
    y: entry.contentRect.y,
    width: entry.contentRect.width,
    height: entry.contentRect.height,
    bottom: entry.contentRect.bottom,
    top: entry.contentRect.top,
    left: entry.contentRect.left,
    right: entry.contentRect.right
  };
}

/***/ }),

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
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
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
/*!*********************************************!*\
  !*** ./src/blocks/archive-projects/view.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var _hooks_useInteractivityMeasure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useInteractivityMeasure */ "./src/hooks/useInteractivityMeasure.ts");
/* harmony import */ var _hooks_useInteractivityIntersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useInteractivityIntersection */ "./src/hooks/useInteractivityIntersection.ts");



;
;
const {} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("vbuchara-portfolio/archive-projects", {
  actions: {
    onClickInfoButtonExpand: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.shouldExpandInfo = !context.shouldExpandInfo;
    },
    onClickSkillsButtonExpand: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.shouldExpandSkills = !context.shouldExpandSkills;
    },
    onAnimationEndProjectLink: event => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (!event.animationName.includes("element-highlight-animation")) return;
      window.clearTimeout(context.repeatAnimationTimeout || undefined);
      context.shouldAnimate = false;
      context.repeatAnimationTimeout = window.setTimeout(() => {
        context.shouldAnimate = true;
      }, 5 * 1000);
    }
  },
  callbacks: {
    shouldExpandInfoBeVisible: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return context.isInfoOverflowing || context.shouldExpandInfo;
    },
    shouldExpandSkillsBeVisible: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return context.isSkillsOverflowing || context.shouldExpandSkills;
    },
    onRunProjectItem: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const descriptionSelector = ".portfolio-archive-projects__item-description";
      const skillsListSelector = ".portfolio-archive-projects__item-skills-list";
      const linksSelector = ".portfolio-archive-projects__item-links";
      const projectItemMeasure = (0,_hooks_useInteractivityMeasure__WEBPACK_IMPORTED_MODULE_1__.useInteractivityMeasure)();
      const descriptionMeasure = (0,_hooks_useInteractivityMeasure__WEBPACK_IMPORTED_MODULE_1__.useInteractivityMeasure)(descriptionSelector);
      const skillsListMeasure = (0,_hooks_useInteractivityMeasure__WEBPACK_IMPORTED_MODULE_1__.useInteractivityMeasure)(skillsListSelector);
      const linksIntersection = (0,_hooks_useInteractivityIntersection__WEBPACK_IMPORTED_MODULE_2__.useInteractivityIntersection)(linksSelector, {
        root: null,
        threshold: 0.2
      });
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const {
          ref: projectItem
        } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
        const description = projectItem?.querySelector(descriptionSelector);
        if (!description) return;
        context.isInfoOverflowing = description.scrollHeight > description.clientHeight;
      }, [descriptionMeasure?.width, descriptionMeasure?.height, context.shouldExpandInfo]);
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const {
          ref: projectItem
        } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
        const skillsList = projectItem?.querySelector(skillsListSelector);
        if (!skillsList) return;
        context.isSkillsOverflowing = skillsList.scrollHeight > skillsList.clientHeight;
      }, [skillsListMeasure?.width, skillsListMeasure?.height, context.shouldExpandSkills]);
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        context.shouldExpandInfo = false;
        context.shouldExpandSkills = false;
      }, [projectItemMeasure?.width]);
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        context.isProjectLinksIntersecting = linksIntersection ? linksIntersection.isIntersecting : false;
      }, [linksIntersection?.isIntersecting]);
    },
    onRunProjectLink: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        context.shouldAnimate = context.isProjectLinksIntersecting;
        window.clearTimeout(context.repeatAnimationTimeout || undefined);
      }, [context.isProjectLinksIntersecting]);
    }
  }
});
})();


//# sourceMappingURL=view.js.map