/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/heading/components/controls.tsx":
/*!****************************************************!*\
  !*** ./src/blocks/heading/components/controls.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadingBlockControls: () => (/* binding */ HeadingBlockControls),
/* harmony export */   HeadingInspectorControls: () => (/* binding */ HeadingInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-1.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-2.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-3.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-4.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading-level-5.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/align-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/align-center.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/align-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony import */ var _constants_block_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constants/block-styles */ "./src/constants/block-styles.ts");
/* harmony import */ var _components_editor_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var _components_editor_color_gradient_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-color-gradient-picker */ "./src/components/editor-color-gradient-picker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








;
function HeadingInspectorControls({
  attributes,
  setAttributes
}) {
  const whiteSpaceSelected = _constants_block_styles__WEBPACK_IMPORTED_MODULE_3__.WhiteSpaceSelectOptions.find(option => {
    return option.value === attributes.styles.whiteSpace;
  });
  function handleOnChangeWhiteSpace(value) {
    setAttributes({
      styles: {
        ...attributes.styles,
        whiteSpace: value?.value || "normal"
      }
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "styles",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Typography",
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: "Line Height",
          value: attributes.styles.lineHeight,
          onChange: value => setAttributes({
            styles: {
              ...attributes.styles,
              lineHeight: value
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: "White Space",
          className: "portfolio-heading__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_4__.EditorSelect, {
            type: "select",
            value: whiteSpaceSelected,
            onChange: handleOnChangeWhiteSpace,
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_3__.WhiteSpaceSelectOptions
          })
        })
      })]
    })
  });
}
;
const headingIcons = new Map([["h1", _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]], ["h2", _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]], ["h3", _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]], ["h4", _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]], ["h5", _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"]]]);
const textAlignmentIcons = new Map([["left", _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"]], ["center", _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"]], ["right", _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"]]]);
function HeadingBlockControls({
  attributes,
  setAttributes
}) {
  const underlineButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [showUnderlinePopover, setShowUnderlinePopover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const headingIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return headingIcons.get(attributes.tagName) || _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"];
  }, [attributes.tagName]);
  const textAlignmentIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return textAlignmentIcons.get(attributes.textAlignment) || _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"];
  }, [attributes.textAlignment]);
  function handleOnChangeUnderlineColor(value) {
    setAttributes({
      styles: {
        ...attributes.styles,
        underlineColor: value,
        underlineGradient: undefined
      }
    });
  }
  function handleOnChangeUnderlineGradient(value) {
    setAttributes({
      styles: {
        ...attributes.styles,
        underlineColor: undefined,
        underlineGradient: value
      }
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarDropdownMenu, {
        label: "Heading Size",
        icon: headingIcon,
        controls: [{
          title: "Heading 1",
          icon: headingIcons.get("h1"),
          onClick: () => setAttributes({
            tagName: "h1"
          }),
          isActive: attributes.tagName === "h1"
        }, {
          title: "Heading 2",
          icon: headingIcons.get("h2"),
          onClick: () => setAttributes({
            tagName: "h2"
          }),
          isActive: attributes.tagName === "h2"
        }, {
          title: "Heading 3",
          icon: headingIcons.get("h3"),
          onClick: () => setAttributes({
            tagName: "h3"
          }),
          isActive: attributes.tagName === "h3"
        }, {
          title: "Heading 4",
          icon: headingIcons.get("h4"),
          onClick: () => setAttributes({
            tagName: "h4"
          }),
          isActive: attributes.tagName === "h4"
        }, {
          title: "Heading 5",
          icon: headingIcons.get("h5"),
          onClick: () => setAttributes({
            tagName: "h5"
          }),
          isActive: attributes.tagName === "h5"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarDropdownMenu, {
        label: "Heading Text Alignment",
        icon: textAlignmentIcon,
        controls: [{
          title: "Align Left",
          icon: textAlignmentIcons.get("left"),
          onClick: () => setAttributes({
            textAlignment: "left"
          }),
          isActive: attributes.textAlignment === "left"
        }, {
          title: "Align Center",
          icon: textAlignmentIcons.get("center"),
          onClick: () => setAttributes({
            textAlignment: "center"
          }),
          isActive: attributes.textAlignment === "center"
        }, {
          title: "Align Right",
          icon: textAlignmentIcons.get("right"),
          onClick: () => setAttributes({
            textAlignment: "right"
          }),
          isActive: attributes.textAlignment === "right"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        label: "Underline Color",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
        ref: underlineButtonRef,
        isActive: Boolean(attributes.styles.underlineColor || attributes.styles.underlineGradient),
        onClick: () => setShowUnderlinePopover(true)
      })]
    }), !showUnderlinePopover ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      anchor: underlineButtonRef.current,
      variant: "toolbar",
      onClose: () => setShowUnderlinePopover(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_editor_color_gradient_picker__WEBPACK_IMPORTED_MODULE_5__.EditorColorGradientPicker, {
        colorValue: attributes.styles.underlineColor,
        gradientValue: attributes.styles.underlineGradient,
        onColorChange: handleOnChangeUnderlineColor,
        onGradientChange: handleOnChangeUnderlineGradient
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/heading/edit.tsx":
/*!*************************************!*\
  !*** ./src/blocks/heading/edit.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_editor_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/editor-wrapper */ "./src/components/editor-wrapper.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/heading/components/controls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const extraClasses = attributes.extraClasses.join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_editor_wrapper__WEBPACK_IMPORTED_MODULE_1__.EditorWrapper, {
    className: extraClasses,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_2__.HeadingInspectorControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_2__.HeadingBlockControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: attributes.tagName,
      className: `portfolio-heading ${extraClasses}`,
      allowedFormats: ["core/italic", "core/bold", "vbuchara-portfolio/text-color"],
      value: attributes.textContent,
      onChange: value => setAttributes({
        textContent: value
      }),
      style: {
        "--text-align": attributes.textAlignment,
        "--line-height": attributes.styles.lineHeight,
        "--white-space": attributes.styles.whiteSpace,
        ...(attributes.styles.underlineColor && {
          "--underline-color": attributes.styles.underlineColor
        }),
        ...(attributes.styles.underlineGradient && {
          "--underline-image": attributes.styles.underlineGradient
        })
      }
    })]
  });
}

/***/ }),

/***/ "./src/blocks/heading/heading.tsx":
/*!****************************************!*\
  !*** ./src/blocks/heading/heading.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/heading/style.scss");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.scss */ "./src/blocks/heading/edit.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/heading.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/heading/edit.tsx");





const {
  default: block
} = await __webpack_require__.e(/*! import() */ "src_blocks_heading_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/heading/block.json", 19));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(block.name, {
  ...block,
  attributes: {
    tagName: {
      type: "string",
      default: "h1"
    },
    textContent: {
      type: "string",
      default: ""
    },
    textAlignment: {
      type: "string",
      default: "left"
    },
    extraClasses: {
      type: "array",
      default: []
    },
    styles: {
      type: "object",
      default: {
        lineHeight: "1.5",
        whiteSpace: "normal"
      }
    }
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.EditComponent
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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

/***/ "./src/components/editor-select.tsx":
/*!******************************************!*\
  !*** ./src/components/editor-select.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorSelect: () => (/* binding */ EditorSelect)
/* harmony export */ });
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select-creatable.esm.js");
/* harmony import */ var react_select_async_creatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select-async-creatable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function EditorSelect({
  styles: propsStyle,
  type,
  ...props
}) {
  const {
    container: _,
    input: __,
    ...styles
  } = propsStyle || {};
  const selectStyles = {
    container: (base, props) => {
      const newBase = {
        ...base,
        flex: 1
      };
      return {
        ...newBase,
        ...propsStyle?.container?.(newBase, props)
      };
    },
    input: (base, props) => {
      const newBase = {
        ...base,
        "input:focus": {
          boxShadow: "none"
        }
      };
      return {
        ...newBase,
        ...propsStyle?.input?.(newBase, props)
      };
    },
    ...styles
  };
  if (type === "async-creatable") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select_async_creatable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isSearchable: true,
    styles: selectStyles,
    ...props
  });
  if (type === "creatable") return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select_creatable__WEBPACK_IMPORTED_MODULE_0__["default"], {
    isSearchable: true,
    styles: selectStyles,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSearchable: true,
    styles: selectStyles,
    ...props
  });
}

/***/ }),

/***/ "./src/components/editor-wrapper.tsx":
/*!*******************************************!*\
  !*** ./src/components/editor-wrapper.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorWrapper: () => (/* binding */ EditorWrapper)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EditorWrapper({
  children,
  style,
  ...props
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    ...props,
    className: `${blockProps.className} ${props.className ? props.className : ""}`,
    style: {
      ...blockProps.style,
      padding: 0,
      ...style
    },
    children: children
  });
}

/***/ }),

/***/ "./src/constants/block-styles.ts":
/*!***************************************!*\
  !*** ./src/constants/block-styles.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignContentOptions: () => (/* binding */ AlignContentOptions),
/* harmony export */   AlignItemsOptions: () => (/* binding */ AlignItemsOptions),
/* harmony export */   BoxContentAlignmentCommonOptions: () => (/* binding */ BoxContentAlignmentCommonOptions),
/* harmony export */   BoxItemsAlignmentCommonOptions: () => (/* binding */ BoxItemsAlignmentCommonOptions),
/* harmony export */   GridAutoFlowOptions: () => (/* binding */ GridAutoFlowOptions),
/* harmony export */   JustifyContentOptions: () => (/* binding */ JustifyContentOptions),
/* harmony export */   JustifyItemsOptions: () => (/* binding */ JustifyItemsOptions),
/* harmony export */   StyleGlobalOptions: () => (/* binding */ StyleGlobalOptions),
/* harmony export */   WhiteSpaceSelectOptions: () => (/* binding */ WhiteSpaceSelectOptions)
/* harmony export */ });
const StyleGlobalOptions = [{
  label: "Inherit",
  value: "inherit"
}, {
  label: "Initial",
  value: "initial"
}, {
  label: "Unset",
  value: "unset"
}, {
  label: "Revert",
  value: "revert"
}, {
  label: "Revert Layer",
  value: "revert-layer"
}];
const WhiteSpaceSelectOptions = [{
  label: "Normal",
  value: "normal"
}, {
  label: "No Wrap",
  value: "nowrap"
}, {
  label: "Pre",
  value: "pre"
}, {
  label: "Pre Wrap",
  value: "pre-wrap"
}, {
  label: "Pre Line",
  value: "pre-line"
}, {
  label: "Break Words",
  value: "break-word"
}, ...StyleGlobalOptions];
const GridAutoFlowOptions = [{
  label: "Row",
  value: "row"
}, {
  label: "Column",
  value: "column"
}, {
  label: "Dense",
  value: "dense"
}, {
  label: "Row Dense",
  value: "row dense"
}, {
  label: "Column Dense",
  value: "column dense"
}, ...StyleGlobalOptions];
const BoxContentAlignmentCommonOptions = [{
  label: "Start",
  value: "start"
}, {
  label: "Center",
  value: "center"
}, {
  label: "End",
  value: "end"
}, {
  label: "Left",
  value: "left"
}, {
  label: "Right",
  value: "right"
}, {
  label: "Normal",
  value: "normal"
}, {
  label: "Space Between",
  value: "space-between"
}, {
  label: "Space Around",
  value: "space-around"
}, {
  label: "Space Evenly",
  value: "space-evenly"
}, {
  label: "Stretch",
  value: "stretch"
}, {
  label: "Safe Center",
  value: "safe center"
}, {
  label: "Unsafe Center",
  value: "unsafe center"
}];
const JustifyContentOptions = [...BoxContentAlignmentCommonOptions, ...StyleGlobalOptions];
const AlignContentOptions = [...BoxContentAlignmentCommonOptions, {
  label: "Baseline",
  value: "baseline"
}, {
  label: "First Baseline",
  value: "first baseline"
}, {
  label: "Last Baseline",
  value: "last baseline"
}, ...StyleGlobalOptions];
const BoxItemsAlignmentCommonOptions = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Stretch",
  value: "stretch"
}, {
  label: "Start",
  value: "start"
}, {
  label: "Center",
  value: "center"
}, {
  label: "End",
  value: "end"
}, {
  label: "Self Start",
  value: "self-start"
}, {
  label: "Self End",
  value: "self-end"
}, {
  label: "Left",
  value: "left"
}, {
  label: "Right",
  value: "right"
}, {
  label: "Anchor Center",
  value: "anchor-center"
}, {
  label: "Baseline",
  value: "baseline"
}, {
  label: "First Baseline",
  value: "first baseline"
}, {
  label: "Last Baseline",
  value: "last baseline"
}, {
  label: "Safe Center",
  value: "safe center"
}, {
  label: "Unsafe Center",
  value: "unsafe center"
}];
const JustifyItemsOptions = [...BoxItemsAlignmentCommonOptions, {
  label: "Legacy Right",
  value: "legacy right"
}, {
  label: "Legacy Left",
  value: "legacy left"
}, {
  label: "Legacy Center",
  value: "legacy center"
}, ...StyleGlobalOptions];
const AlignItemsOptions = [...BoxItemsAlignmentCommonOptions, ...StyleGlobalOptions];

/***/ }),

/***/ "./src/blocks/heading/edit.scss":
/*!**************************************!*\
  !*** ./src/blocks/heading/edit.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/heading/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/heading/style.scss ***!
  \***************************************/
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vbuchara-portfolio-theme:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/heading/heading": 0,
/******/ 			"blocks/heading/style-heading": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("blocks/heading/style-heading" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkvbuchara_portfolio_theme"] = globalThis["webpackChunkvbuchara_portfolio_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","blocks/heading/style-heading"], () => (__webpack_require__("./src/blocks/heading/heading.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=heading.js.map