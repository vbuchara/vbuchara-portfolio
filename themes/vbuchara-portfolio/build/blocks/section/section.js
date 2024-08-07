/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/section/components/controls.tsx":
/*!****************************************************!*\
  !*** ./src/blocks/section/components/controls.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionBlockControls: () => (/* binding */ SectionBlockControls),
/* harmony export */   SectionInspectorControls: () => (/* binding */ SectionInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/block-styles */ "./src/constants/block-styles.ts");
/* harmony import */ var _components_editor_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





;
function SectionInspectorControls({
  attributes,
  setAttributes
}) {
  function getGridStylePropertySelected(options, property) {
    return options.find(option => {
      return option.value === attributes.styles.grid[property];
    });
  }
  function getHandleOnChangeSelectGridStyle(property) {
    return option => {
      if (!option) return;
      setAttributes({
        styles: {
          ...attributes.styles,
          grid: {
            ...attributes.styles.grid,
            [property]: option.value
          }
        }
      });
    };
  }
  function getHandleOnChangeTextGridStyle(property) {
    return value => {
      setAttributes({
        styles: {
          ...attributes.styles,
          grid: {
            ...attributes.styles.grid,
            [property]: value
          }
        }
      });
    };
  }
  function getHandleOnChangeTextPaddingStyle(property) {
    return value => {
      setAttributes({
        styles: {
          ...attributes.styles,
          padding: {
            ...attributes.styles.padding,
            [property]: value
          }
        }
      });
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    group: "styles",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Dimensions",
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Min Height",
          value: attributes.styles.minHeight,
          onChange: value => setAttributes({
            ...attributes.styles,
            styles: {
              ...attributes.styles,
              minHeight: value
            }
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Padding",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Block (Top and Bottom)",
          value: attributes.styles.padding.paddingBlock || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingBlock")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Inline (Left and Right)",
          value: attributes.styles.padding.paddingInline || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingInline")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Block Start (Top)",
          value: attributes.styles.padding.paddingBlockStart || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingBlockStart")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Block End (Bottom)",
          value: attributes.styles.padding.paddingBlockEnd || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingBlockEnd")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Inline Start (Left)",
          value: attributes.styles.padding.paddingInlineStart || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingInlineStart")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Inline End (Right)",
          value: attributes.styles.padding.paddingInlineEnd || "",
          onChange: getHandleOnChangeTextPaddingStyle("paddingInlineEnd")
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Grid",
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Grid Template Columns",
          value: attributes.styles.grid.gridTemplateColumns,
          onChange: getHandleOnChangeTextGridStyle("gridTemplateColumns")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Grid Template Rows",
          value: attributes.styles.grid.gridTemplateRows,
          onChange: getHandleOnChangeTextGridStyle("gridTemplateRows")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: "Grid Auto Flow",
          className: "site-section__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
            value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.GridAutoFlowOptions, "gridAutoFlow"),
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.GridAutoFlowOptions,
            onChange: getHandleOnChangeSelectGridStyle("gridAutoFlow")
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Grid Auto Columns",
          value: attributes.styles.grid.gridAutoColumns,
          onChange: getHandleOnChangeTextGridStyle("gridAutoColumns")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Grid Auto Rows",
          value: attributes.styles.grid.gridAutoRows,
          onChange: getHandleOnChangeTextGridStyle("gridAutoRows")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Column Gap",
          value: attributes.styles.grid.columnGap,
          onChange: getHandleOnChangeTextGridStyle("columnGap")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Row Gap",
          value: attributes.styles.grid.rowGap,
          onChange: getHandleOnChangeTextGridStyle("rowGap")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: "Justify Content",
          className: "site-section__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
            value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.JustifyContentOptions, "justifyContent"),
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.JustifyContentOptions,
            onChange: getHandleOnChangeSelectGridStyle("justifyContent")
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: "Align Content",
          className: "site-section__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
            value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.AlignContentOptions, "alignContent"),
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.AlignContentOptions,
            onChange: getHandleOnChangeSelectGridStyle("alignContent")
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: "Justify Items",
          className: "site-section__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
            value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.JustifyItemsOptions, "justifyItems"),
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.JustifyItemsOptions,
            onChange: getHandleOnChangeSelectGridStyle("justifyItems")
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
          label: "Align Items",
          className: "site-section__editor-control",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
            value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.AlignItemsOptions, "alignItems"),
            options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.AlignItemsOptions,
            onChange: getHandleOnChangeSelectGridStyle("alignItems")
          })
        })
      })]
    })]
  });
}
;
function SectionBlockControls({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
      children: "Configuration here"
    })
  });
}

/***/ }),

/***/ "./src/blocks/section/edit.tsx":
/*!*************************************!*\
  !*** ./src/blocks/section/edit.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_editor_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-wrapper */ "./src/components/editor-wrapper.tsx");
/* harmony import */ var _hooks_useBlockDefaultAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useBlockDefaultAttributes */ "./src/hooks/useBlockDefaultAttributes.ts");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/section/components/controls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const {
  default: sectionBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_section_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/section/block.json", 19));
const {
  default: blobContainerBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_blob-container_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/blob-container/block.json */ "./src/blocks/blob-container/block.json", 19));
const {
  default: imageBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_image_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/image/block.json */ "./src/blocks/image/block.json", 19));
const {
  default: headingBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_heading_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/heading/block.json */ "./src/blocks/heading/block.json", 19));
const {
  default: buttonBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_button_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/button/block.json */ "./src/blocks/button/block.json", 19));
const {
  default: skillsBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_skills_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/skills/block.json */ "./src/blocks/skills/block.json", 19));
const {
  default: projectsBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_projects_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/projects/block.json */ "./src/blocks/projects/block.json", 19));
function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    styles
  } = attributes;
  const defaultAttributes = (0,_hooks_useBlockDefaultAttributes__WEBPACK_IMPORTED_MODULE_4__.useBlockDefaultAttributes)(sectionBlock.name);
  if (!defaultAttributes) return null;
  if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(Object.keys(defaultAttributes), Object.keys(attributes))) {
    setAttributes(lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(defaultAttributes, props.attributes));
    return null;
  }
  ;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_editor_wrapper__WEBPACK_IMPORTED_MODULE_3__.EditorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_5__.SectionInspectorControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "site-section site-section--editor",
      style: {
        "--grid-template-columns": styles.grid.gridTemplateColumns,
        "--grid-template-rows": styles.grid.gridTemplateRows,
        "--grid-auto-flow": styles.grid.gridAutoFlow,
        "--grid-auto-columns": styles.grid.gridAutoColumns,
        "--grid-auto-rows": styles.grid.gridAutoRows,
        "--row-gap": styles.grid.rowGap,
        "--column-gap": styles.grid.columnGap,
        "--justify-content": styles.grid.justifyContent,
        "--justify-items": styles.grid.justifyItems,
        "--align-content": styles.grid.alignContent,
        "--align-items": styles.grid.alignItems,
        ...(styles.padding.paddingBlock && {
          "--padding-block": styles.padding.paddingBlock
        }),
        ...(styles.padding.paddingInline && {
          "--padding-inline": styles.padding.paddingInline
        }),
        ...(styles.padding.paddingBlockStart && {
          "--padding-block-start": styles.padding.paddingBlockStart
        }),
        ...(styles.padding.paddingBlockEnd && {
          "--padding-block-start": styles.padding.paddingBlockEnd
        }),
        ...(styles.padding.paddingInlineStart && {
          "--padding-inline-start": styles.padding.paddingInlineStart
        }),
        ...(styles.padding.paddingInlineEnd && {
          "--padding-inline-end": styles.padding.paddingInlineEnd
        }),
        "--min-height": styles.minHeight
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
        allowedBlocks: [blobContainerBlock.name, imageBlock.name, headingBlock.name, buttonBlock.name, skillsBlock.name, projectsBlock.name]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/blocks/section/save.tsx":
/*!*************************************!*\
  !*** ./src/blocks/section/save.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function SaveComponent(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {});
}

/***/ }),

/***/ "./src/blocks/section/section.tsx":
/*!****************************************!*\
  !*** ./src/blocks/section/section.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/section/style.scss");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.scss */ "./src/blocks/section/edit.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/columns.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/section/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/section/save.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit__WEBPACK_IMPORTED_MODULE_3__]);
_edit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const {
  default: block
} = await __webpack_require__.e(/*! import() */ "src_blocks_section_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/section/block.json", 19));
;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(block.name, {
  ...block,
  attributes: {
    styles: {
      type: "object",
      default: {
        grid: {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          gridAutoFlow: "row",
          gridAutoColumns: "1fr",
          gridAutoRows: "auto",
          rowGap: "0px",
          columnGap: "0px",
          justifyContent: "normal",
          alignContent: "normal",
          justifyItems: "normal",
          alignItems: "normal"
        },
        padding: {},
        minHeight: "900px"
      }
    }
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_4__.SaveComponent
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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

/***/ "./src/hooks/useBlockDefaultAttributes.ts":
/*!************************************************!*\
  !*** ./src/hooks/useBlockDefaultAttributes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBlockDefaultAttributes: () => (/* binding */ useBlockDefaultAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function useBlockDefaultAttributes(blockName, deps) {
  function mapBlockDefaultAttributes(entry) {
    const [key, value] = entry;
    if (typeof value === "object" && "default" in value) {
      return [key, value.default];
    }
    return false;
  }
  const defaultAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const block = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.store).getBlockType(blockName);
    const newBlockAttributesEntries = Object.entries(block?.attributes || {}).map(mapBlockDefaultAttributes).filter(Boolean);
    if (newBlockAttributesEntries.length === 0) return undefined;
    return Object.fromEntries(newBlockAttributesEntries);
  }, deps || []);
  return defaultAttributes;
}

/***/ }),

/***/ "./src/blocks/section/edit.scss":
/*!**************************************!*\
  !*** ./src/blocks/section/edit.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/section/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/section/style.scss ***!
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
/******/ 			"blocks/section/section": 0,
/******/ 			"blocks/section/style-section": 0
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
/******/ 						if("blocks/section/style-section" != chunkId) {
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","blocks/section/style-section"], () => (__webpack_require__("./src/blocks/section/section.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=section.js.map