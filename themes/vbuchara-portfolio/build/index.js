/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/svgs/color.svg":
/*!*******************************!*\
  !*** ./assets/svgs/color.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgColor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _circle, _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgColor = function SvgColor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 800,
    height: 800,
    fill: "none",
    stroke: "#33363F",
    viewBox: "0 0 24 24"
  }, props), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9,
    fill: "transparent",
    strokeWidth: 2
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzMzNjNGIiBzdHJva2U9IiMzMzM2M0YiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0idHJhbnNwYXJlbnQiIC8+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTE4LjM2NCA1LjYzNjA0QzE2LjY3NjEgMy45NDgyMSAxNC4zODY5IDMgMTIgM0M5LjYxMzA1IDMgNy4zMjM4NyAzLjk0ODIxIDUuNjM2MDQgNS42MzYwNEMzLjk0ODIxIDcuMzIzODcgMyA5LjYxMzA1IDMgMTJDMyAxNC4zODY5IDMuOTQ4MjEgMTYuNjc2MSA1LjYzNjA0IDE4LjM2NEwxMiAxMkwxOC4zNjQgNS42MzYwNFoiDQogICAgICAgIC8+DQo8L3N2Zz4=");

/***/ }),

/***/ "./src/components/editor-color-gradient-picker.tsx":
/*!*********************************************************!*\
  !*** ./src/components/editor-color-gradient-picker.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorColorGradientPicker: () => (/* binding */ EditorColorGradientPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function EditorColorGradientPicker(props) {
  const {
    colors: themeColors,
    gradients: themeGradients
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getSettings();
  }, []);
  const colors = props.colors ? [...props.colors, ...(props.extraColors || [])] : [...themeColors, ...(props.extraColors || [])];
  const gradients = props.gradients ? [...props.gradients, ...(props.extraGradients || [])] : [...themeGradients, ...(props.extraGradients || [])];
  const TabPanels = {
    Color: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      colors: colors,
      value: props.colorValue,
      onChange: props.onColorChange
    }),
    Gradient: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker, {
      gradients: gradients,
      value: props.gradientValue,
      onChange: props.onGradientChange
    })
  };
  const [currentTabSelected, setCurrentTabSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Color");
  const CurrentTab = TabPanels[currentTabSelected];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: [{
      name: "Color",
      title: "Color"
    }, {
      name: "Gradient",
      title: "Gradient"
    }],
    onSelect: tabName => {
      if (tabName in TabPanels) {
        setCurrentTabSelected(tabName);
      }
    },
    children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "portfolio-editor-formats__text-color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CurrentTab, {})
    })
  });
}

/***/ }),

/***/ "./src/formats/text-color/edit.tsx":
/*!*****************************************!*\
  !*** ./src/formats/text-color/edit.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextColorEditComponent: () => (/* binding */ TextColorEditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svgs_color_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svgs/color.svg */ "./assets/svgs/color.svg");
/* harmony import */ var _src_components_editor_color_gradient_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/components/editor-color-gradient-picker */ "./src/components/editor-color-gradient-picker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function TextColorEditComponent(props) {
  const [showPopover, setShowPopover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const colorSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const dummyDiv = document.createElement("div");
    dummyDiv.style.cssText = props.activeAttributes.style;
    const colorProperty = dummyDiv.style.getPropertyValue("--color");
    return colorProperty;
  }, [props.value.start, props.value.end, props.isActive, props.activeAttributes.style]);
  const gradientSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const dummyDiv = document.createElement("div");
    dummyDiv.style.cssText = props.activeAttributes.style;
    const backgroundImageProperty = dummyDiv.style.getPropertyValue("--background-image");
    return backgroundImageProperty ? backgroundImageProperty : undefined;
  }, [props.value.start, props.value.end, props.isActive, props.activeAttributes.style]);
  function handleOnColorChange(color) {
    const removedValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.removeFormat)(props.value, "vbuchara-portfolio/text-color", props.value.start, props.value.end);
    props.onChange(removedValue);
    if (!color) return;
    const newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(props.value, {
      type: "vbuchara-portfolio/text-color",
      attributes: {
        style: `--color: ${color};`
      }
    }, props.value.start, props.value.end);
    props.onChange(newValue);
  }
  function handleOnGradientChange(gradient) {
    const removedValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.removeFormat)(props.value, "vbuchara-portfolio/text-color", props.value.start, props.value.end);
    props.onChange(removedValue);
    if (!gradient) return;
    const newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(props.value, {
      type: "vbuchara-portfolio/text-color",
      attributes: {
        style: `--background-image: ${gradient};`
      }
    }, props.value.start, props.value.end);
    props.onChange(newValue);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
      name: "RichText.ToolbarControls",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
        icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_svgs_color_svg__WEBPACK_IMPORTED_MODULE_3__.ReactComponent, {
          stroke: "currentColor",
          width: "24",
          height: "24",
          color: "inherit"
        }),
        title: "Text Color",
        onClick: () => setShowPopover(true),
        isActive: props.isActive
      })
    }), !showPopover ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      anchor: props.contentRef.current,
      onClose: () => setShowPopover(false),
      variant: "toolbar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_components_editor_color_gradient_picker__WEBPACK_IMPORTED_MODULE_4__.EditorColorGradientPicker, {
        colorValue: colorSelected,
        gradientValue: gradientSelected,
        onColorChange: handleOnColorChange,
        onGradientChange: handleOnGradientChange
      })
    })]
  });
}

/***/ }),

/***/ "./src/formats/text-color/index.ts":
/*!*****************************************!*\
  !*** ./src/formats/text-color/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-color */ "./src/formats/text-color/text-color.tsx");


/***/ }),

/***/ "./src/formats/text-color/text-color.tsx":
/*!***********************************************!*\
  !*** ./src/formats/text-color/text-color.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/formats/text-color/edit.tsx");


(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)("vbuchara-portfolio/text-color", {
  title: "Text Color",
  name: "vbuchara-portfolio/text-color",
  tagName: "span",
  interactive: false,
  className: "portfolio-formats__text-color",
  attributes: {
    style: "style"
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.TextColorEditComponent
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _src_formats_text_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/formats/text-color */ "./src/formats/text-color/index.ts");


})();

/******/ })()
;
//# sourceMappingURL=index.js.map