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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_editor_background_image_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-background-image-settings */ "./src/components/editor-background-image-settings.tsx");
/* harmony import */ var _components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/editor-grid-settings */ "./src/components/editor-grid-settings.tsx");
/* harmony import */ var _src_utils_isEmptyString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/utils/isEmptyString */ "./src/utils/isEmptyString.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







;
function SectionInspectorControls({
  attributes,
  setAttributes
}) {
  const isChangingBackgroundColor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  function handleSetSectionGrid(grid) {
    setAttributes({
      styles: {
        ...attributes.styles,
        grid: {
          ...attributes.styles.grid,
          ...grid
        }
      }
    });
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
  function handleSetBackgroundImageStyles(newBackgroundImageStyles) {
    const {
      backgroundImage,
      ...otherProperties
    } = newBackgroundImageStyles;
    setAttributes({
      backgroundImage: {
        ...attributes.backgroundImage,
        ...otherProperties,
        backgroundImage: (0,_src_utils_isEmptyString__WEBPACK_IMPORTED_MODULE_5__.isEmptyString)(backgroundImage) ? undefined : attributes.backgroundImage.backgroundImage,
        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage})`
        })
      }
    });
  }
  function handleOnChangeBackgroundColor(color) {
    if (!color && isChangingBackgroundColor.current) {
      isChangingBackgroundColor.current = false;
      return;
    }
    setAttributes({
      styles: {
        ...attributes.styles,
        backgroundColor: color,
        backgroundGradient: undefined
      }
    });
    isChangingBackgroundColor.current = true;
  }
  function handleOnChangeBackgroundGradient(gradient) {
    if (!gradient && isChangingBackgroundColor.current) {
      isChangingBackgroundColor.current = false;
      return;
    }
    setAttributes({
      styles: {
        ...attributes.styles,
        backgroundColor: undefined,
        backgroundGradient: gradient
      }
    });
    isChangingBackgroundColor.current = true;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_editor_background_image_settings__WEBPACK_IMPORTED_MODULE_3__.EditorBackgroundImageSettings, {
        backgroundImageStyles: attributes.backgroundImage,
        setBackgroundImageStyles: handleSetBackgroundImageStyles,
        title: "Background Image",
        initialOpen: true,
        mediaPickerProps: {
          defaultToClear: true,
          sizePriority: ["full"]
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalPanelColorGradientSettings, {
        title: "Colors",
        initialOpen: true,
        settings: [{
          label: "Background Color",
          colorValue: attributes.styles.backgroundColor,
          gradientValue: attributes.styles.backgroundGradient,
          onColorChange: handleOnChangeBackgroundColor,
          onGradientChange: handleOnChangeBackgroundGradient
        }],
        __experimentalIsRenderedInSidebar: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Dimensions",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Padding",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Block (Top and Bottom)",
            value: attributes.styles.padding.paddingBlock || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingBlock")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Inline (Left and Right)",
            value: attributes.styles.padding.paddingInline || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingInline")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Block Start (Top)",
            value: attributes.styles.padding.paddingBlockStart || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingBlockStart")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Block End (Bottom)",
            value: attributes.styles.padding.paddingBlockEnd || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingBlockEnd")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Inline Start (Left)",
            value: attributes.styles.padding.paddingInlineStart || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingInlineStart")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Inline End (Right)",
            value: attributes.styles.padding.paddingInlineEnd || "",
            onChange: getHandleOnChangeTextPaddingStyle("paddingInlineEnd")
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_4__.EditorGridSettings, {
        grid: attributes.styles.grid,
        setGrid: handleSetSectionGrid,
        initialOpen: false
      })]
    })]
  });
}
;
function SectionBlockControls({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
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
/* harmony import */ var _components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/editor-grid-settings */ "./src/components/editor-grid-settings.tsx");
/* harmony import */ var _components_editor_background_image_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-background-image-settings */ "./src/components/editor-background-image-settings.tsx");
/* harmony import */ var _components_editor_padding_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/editor-padding-settings */ "./src/components/editor-padding-settings.tsx");
/* harmony import */ var _hooks_useBlockDefaultAttributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hooks/useBlockDefaultAttributes */ "./src/hooks/useBlockDefaultAttributes.ts");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/section/components/controls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const {
  default: sectionBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_section_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/section/block.json", 19));
const {
  default: welcomeContainerBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_welcome-container_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/welcome-container/block.json */ "./src/blocks/welcome-container/block.json", 19));
const {
  default: containerBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_container_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/container/block.json */ "./src/blocks/container/block.json", 19));
const {
  default: imageBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_image_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/image/block.json */ "./src/blocks/image/block.json", 19));
const {
  default: headingBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_heading_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/heading/block.json */ "./src/blocks/heading/block.json", 19));
const {
  default: paragraphBlock
} = await __webpack_require__.e(/*! import() */ "src_blocks_paragraph_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! @blocks/paragraph/block.json */ "./src/blocks/paragraph/block.json", 19));
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
  const defaultAttributes = (0,_hooks_useBlockDefaultAttributes__WEBPACK_IMPORTED_MODULE_7__.useBlockDefaultAttributes)(sectionBlock.name);
  if (!defaultAttributes) return null;
  if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(Object.keys(defaultAttributes), Object.keys(attributes))) {
    setAttributes(lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(defaultAttributes, props.attributes));
    return null;
  }
  ;
  const gridStyles = (0,_components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_4__.getGridSettingsVariables)(styles.grid);
  const paddingStyles = (0,_components_editor_padding_settings__WEBPACK_IMPORTED_MODULE_6__.getPaddingSettingsVariables)(styles.padding);
  const backgroundImageStyles = (0,_components_editor_background_image_settings__WEBPACK_IMPORTED_MODULE_5__.getBackgroundImageSettingVariables)(attributes.backgroundImage);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_editor_wrapper__WEBPACK_IMPORTED_MODULE_3__.EditorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_8__.SectionInspectorControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "site-section site-section--editor",
      style: {
        ...gridStyles,
        ...paddingStyles,
        ...backgroundImageStyles,
        "--min-height": styles.minHeight,
        "--background-color": styles.backgroundColor,
        ...(!attributes.backgroundImage.backgroundImage && {
          "--background-image": styles.backgroundGradient
        })
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
        allowedBlocks: [welcomeContainerBlock.name, containerBlock.name, imageBlock.name, headingBlock.name, paragraphBlock.name, buttonBlock.name, skillsBlock.name, projectsBlock.name]
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/columns.js");
/* harmony import */ var _components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-grid-settings */ "./src/components/editor-grid-settings.tsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/section/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/section/save.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit__WEBPACK_IMPORTED_MODULE_4__]);
_edit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







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
        grid: _components_editor_grid_settings__WEBPACK_IMPORTED_MODULE_3__.defaultGridSettingsVariables,
        padding: {},
        minHeight: "900px"
      }
    },
    backgroundImage: {
      type: "object",
      default: {}
    }
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.EditComponent,
  save: _save__WEBPACK_IMPORTED_MODULE_5__.SaveComponent
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/components/editor-background-image-settings.tsx":
/*!*************************************************************!*\
  !*** ./src/components/editor-background-image-settings.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorBackgroundImageSettings: () => (/* binding */ EditorBackgroundImageSettings),
/* harmony export */   getBackgroundImageSettingVariables: () => (/* binding */ getBackgroundImageSettingVariables)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_media_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-media-picker */ "./src/components/editor-media-picker.tsx");
/* harmony import */ var _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/block-styles */ "./src/constants/block-styles.ts");
/* harmony import */ var _editor_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function EditorBackgroundImageSettings(props) {
  const {
    backgroundImageStyles,
    setBackgroundImageStyles,
    title,
    initialOpen,
    mediaPickerProps
  } = props;
  function getBackgroundImageStylePropertySelected(options, property) {
    return options.find(option => {
      return option.value === backgroundImageStyles[property];
    });
  }
  function handleOnChangeBackgroundImage(newImage) {
    if (!newImage.imageId || !newImage.imageUrl) {
      setBackgroundImageStyles({
        backgroundImageId: 0,
        backgroundImage: ""
      });
      return;
    }
    setBackgroundImageStyles({
      backgroundImageId: newImage.imageId,
      backgroundImage: newImage.imageUrl
    });
  }
  function getHandleOnChangeSelectBackgroundImageStyle(property) {
    return option => {
      if (!option) return;
      setBackgroundImageStyles({
        [property]: option.value
      });
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    initialOpen: initialOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Image Source",
        className: "portfolio-editor__control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_editor_media_picker__WEBPACK_IMPORTED_MODULE_1__.EditorMediaPicker, {
          attributes: {
            imageId: backgroundImageStyles.backgroundImageId,
            imageUrl: backgroundImageStyles.backgroundImage
          },
          setAttributes: handleOnChangeBackgroundImage,
          ...mediaPickerProps
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Background Attachment",
        className: "portfolio-editor__control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
          value: getBackgroundImageStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundAttachmentOptions, "backgroundAttachment"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundAttachmentOptions,
          onChange: getHandleOnChangeSelectBackgroundImageStyle("backgroundAttachment")
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Background Clip",
        className: "portfolio-editor__control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
          value: getBackgroundImageStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundClipOptions, "backgroundClip"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundClipOptions,
          onChange: getHandleOnChangeSelectBackgroundImageStyle("backgroundClip")
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Background Origin",
        className: "portfolio-editor__control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_3__.EditorSelect, {
          value: getBackgroundImageStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundOriginOptions, "backgroundOrigin"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_2__.BackgroundOriginOptions,
          onChange: getHandleOnChangeSelectBackgroundImageStyle("backgroundOrigin")
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Background Position",
        value: backgroundImageStyles.backgroundPosition || "",
        onChange: value => setBackgroundImageStyles({
          backgroundPosition: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Background Position X",
        value: backgroundImageStyles.backgroundPositionX || "",
        onChange: value => setBackgroundImageStyles({
          backgroundPositionX: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Background Position Y",
        value: backgroundImageStyles.backgroundPositionY || "",
        onChange: value => setBackgroundImageStyles({
          backgroundPositionY: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Background Repeat",
        value: backgroundImageStyles.backgroundRepeat || "",
        onChange: value => setBackgroundImageStyles({
          backgroundRepeat: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Background Size",
        value: backgroundImageStyles.backgroundSize || "",
        onChange: value => setBackgroundImageStyles({
          backgroundSize: value
        })
      })
    })]
  });
}
function getBackgroundImageSettingVariables(backgroundImage) {
  return {
    "--background-image": backgroundImage.backgroundImage,
    "--background-attachment": backgroundImage.backgroundAttachment,
    "--background-clip": backgroundImage.backgroundClip,
    "--background-origin": backgroundImage.backgroundOrigin,
    "--background-position": backgroundImage.backgroundPosition,
    "--background-position-x": backgroundImage.backgroundPositionX,
    "--background-position-y": backgroundImage.backgroundPositionY,
    "--background-repeat": backgroundImage.backgroundRepeat,
    "--background-size": backgroundImage.backgroundSize
  };
}

/***/ }),

/***/ "./src/components/editor-grid-settings.tsx":
/*!*************************************************!*\
  !*** ./src/components/editor-grid-settings.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorGridSettings: () => (/* binding */ EditorGridSettings),
/* harmony export */   defaultGridSettingsVariables: () => (/* binding */ defaultGridSettingsVariables),
/* harmony export */   getGridSettingsVariables: () => (/* binding */ getGridSettingsVariables)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/block-styles */ "./src/constants/block-styles.ts");
/* harmony import */ var _editor_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function EditorGridSettings(props) {
  const {
    grid,
    setGrid,
    disableGridProperties
  } = props;
  function getGridStylePropertySelected(options, property) {
    return options.find(option => {
      return option.value === grid[property];
    });
  }
  function getHandleOnChangeSelectGridStyle(property) {
    return option => {
      if (!option) return;
      setGrid({
        [property]: option.value
      });
    };
  }
  function getHandleOnChangeTextGridStyle(property) {
    return value => {
      setGrid({
        [property]: value
      });
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: props.title ? props.title : "Grid",
    initialOpen: props.initialOpen ? props.initialOpen : false,
    children: [disableGridProperties?.gridTemplateColumns ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Grid Template Columns",
        value: grid.gridTemplateColumns,
        onChange: getHandleOnChangeTextGridStyle("gridTemplateColumns")
      })
    }), disableGridProperties?.gridTemplateRows ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Grid Template Rows",
        value: grid.gridTemplateRows,
        onChange: getHandleOnChangeTextGridStyle("gridTemplateRows")
      })
    }), disableGridProperties?.gridAutoFlow ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Grid Auto Flow",
        className: "site-section__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.GridAutoFlowOptions, "gridAutoFlow"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.GridAutoFlowOptions,
          onChange: getHandleOnChangeSelectGridStyle("gridAutoFlow")
        })
      })
    }), disableGridProperties?.gridAutoColumns ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Grid Auto Columns",
        value: grid.gridAutoColumns,
        onChange: getHandleOnChangeTextGridStyle("gridAutoColumns")
      })
    }), disableGridProperties?.gridAutoRows ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Grid Auto Rows",
        value: grid.gridAutoRows,
        onChange: getHandleOnChangeTextGridStyle("gridAutoRows")
      })
    }), disableGridProperties?.columnGap ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Column Gap",
        value: grid.columnGap,
        onChange: getHandleOnChangeTextGridStyle("columnGap")
      })
    }), disableGridProperties?.rowGap ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Row Gap",
        value: grid.rowGap,
        onChange: getHandleOnChangeTextGridStyle("rowGap")
      })
    }), disableGridProperties?.justifyContent ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Justify Content",
        className: "site-section__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.JustifyContentOptions, "justifyContent"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.JustifyContentOptions,
          onChange: getHandleOnChangeSelectGridStyle("justifyContent")
        })
      })
    }), disableGridProperties?.alignContent ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Align Content",
        className: "site-section__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.AlignContentOptions, "alignContent"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.AlignContentOptions,
          onChange: getHandleOnChangeSelectGridStyle("alignContent")
        })
      })
    }), disableGridProperties?.justifyItems ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Justify Items",
        className: "site-section__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.JustifyItemsOptions, "justifyItems"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.JustifyItemsOptions,
          onChange: getHandleOnChangeSelectGridStyle("justifyItems")
        })
      })
    }), disableGridProperties?.alignItems ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Align Items",
        className: "site-section__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: getGridStylePropertySelected(_constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.AlignItemsOptions, "alignItems"),
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.AlignItemsOptions,
          onChange: getHandleOnChangeSelectGridStyle("alignItems")
        })
      })
    })]
  });
}
function getGridSettingsVariables(grid) {
  return {
    "--grid-template-columns": grid.gridTemplateColumns,
    "--grid-template-rows": grid.gridTemplateRows,
    "--grid-auto-flow": grid.gridAutoFlow,
    "--grid-auto-columns": grid.gridAutoColumns,
    "--grid-auto-rows": grid.gridAutoRows,
    "--row-gap": grid.rowGap,
    "--column-gap": grid.columnGap,
    "--justify-content": grid.justifyContent,
    "--justify-items": grid.justifyItems,
    "--align-content": grid.alignContent,
    "--align-items": grid.alignItems
  };
  ;
}
const defaultGridSettingsVariables = {
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
};

/***/ }),

/***/ "./src/components/editor-media-picker.tsx":
/*!************************************************!*\
  !*** ./src/components/editor-media-picker.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorMediaPicker: () => (/* binding */ EditorMediaPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function EditorMediaPicker({
  attributes,
  setAttributes,
  defaultToClear: defaultToNone,
  defaultImage,
  defaultImageAlt,
  sizePriority
}) {
  function getImageSizeFromMediaDetails(mediaDetails) {
    return sizePriority?.reduce((imageSize, imageSizeName) => {
      if (imageSize) return imageSize;
      const mediaImageSizes = mediaDetails.sizes;
      if (imageSizeName in mediaImageSizes && mediaImageSizes[imageSizeName]) {
        return mediaImageSizes[imageSizeName];
      }
      return imageSize;
    }, undefined);
  }
  async function onSelectMedia(media) {
    try {
      const {
        source_url,
        media_details
      } = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/wp/v2/media/${media.id}`
      });
      const imageSize = getImageSizeFromMediaDetails(media_details);
      setAttributes({
        imageId: media.id,
        imageUrl: imageSize ? imageSize.source_url : source_url,
        imageAlt: media.alt
      });
    } catch (error) {
      console.log(error);
    }
  }
  function onClickSetToDefault() {
    if (defaultToNone) {
      setAttributes({
        imageId: undefined,
        imageUrl: undefined,
        imageAlt: undefined
      });
      return;
    }
    if (!defaultImage) return;
    setAttributes({
      imageId: undefined,
      imageUrl: defaultImage,
      imageAlt: defaultImageAlt || "Image of a guy sitting on a chair, in front of a computer coding"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
        onSelect: onSelectMedia,
        value: attributes.imageId,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            onClick: open,
            children: "Choose Image"
          }), !defaultImage && !defaultToNone ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: onClickSetToDefault,
            children: "Set to Default"
          })]
        })
      })
    })
  });
}
;

/***/ }),

/***/ "./src/components/editor-padding-settings.tsx":
/*!****************************************************!*\
  !*** ./src/components/editor-padding-settings.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorPaddingSettings: () => (/* binding */ EditorPaddingSettings),
/* harmony export */   getPaddingSettingsVariables: () => (/* binding */ getPaddingSettingsVariables)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EditorPaddingSettings(props) {
  const {
    padding,
    setPadding,
    title,
    initialOpen
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    initialOpen: initialOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Block (Top and Bottom)",
        value: padding.paddingBlock || "",
        onChange: value => setPadding({
          paddingBlock: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Inline (Left and Right)",
        value: padding.paddingInline || "",
        onChange: value => setPadding({
          paddingInline: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Block Start (Top)",
        value: padding.paddingBlockStart || "",
        onChange: value => setPadding({
          paddingBlockStart: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Block End (Bottom)",
        value: padding.paddingBlockEnd || "",
        onChange: value => setPadding({
          paddingBlockEnd: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Inline Start (Left)",
        value: padding.paddingInlineStart || "",
        onChange: value => setPadding({
          paddingInlineStart: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Inline End (Right)",
        value: padding.paddingInlineEnd || "",
        onChange: value => setPadding({
          paddingInlineEnd: value
        })
      })
    })]
  });
}
function getPaddingSettingsVariables(padding) {
  return {
    "--padding-block": padding.paddingBlock,
    "--padding-inline": padding.paddingInline,
    "--padding-block-start": padding.paddingBlockStart,
    "--padding-block-end": padding.paddingBlockEnd,
    "--padding-inline-start": padding.paddingInlineStart,
    "--padding-inline-end": padding.paddingInlineEnd
  };
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
/* harmony export */   BackgroundAttachmentOptions: () => (/* binding */ BackgroundAttachmentOptions),
/* harmony export */   BackgroundBoxCommonOptions: () => (/* binding */ BackgroundBoxCommonOptions),
/* harmony export */   BackgroundClipOptions: () => (/* binding */ BackgroundClipOptions),
/* harmony export */   BackgroundOriginOptions: () => (/* binding */ BackgroundOriginOptions),
/* harmony export */   BoxContentAlignmentCommonOptions: () => (/* binding */ BoxContentAlignmentCommonOptions),
/* harmony export */   BoxItemsAlignmentCommonOptions: () => (/* binding */ BoxItemsAlignmentCommonOptions),
/* harmony export */   GridAutoFlowOptions: () => (/* binding */ GridAutoFlowOptions),
/* harmony export */   JustifyContentOptions: () => (/* binding */ JustifyContentOptions),
/* harmony export */   JustifyItemsOptions: () => (/* binding */ JustifyItemsOptions),
/* harmony export */   PositionOptions: () => (/* binding */ PositionOptions),
/* harmony export */   StyleGlobalOptions: () => (/* binding */ StyleGlobalOptions),
/* harmony export */   WhiteSpaceSelectOptions: () => (/* binding */ WhiteSpaceSelectOptions)
/* harmony export */ });
// Global Styles Options
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

// White Space Options 
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
// Grid Options
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
// Background Options
const BackgroundAttachmentOptions = [{
  label: "Scroll",
  value: "scroll"
}, {
  label: "Fixed",
  value: "fixed"
}, {
  label: "Local",
  value: "local"
}, ...StyleGlobalOptions];
const BackgroundBoxCommonOptions = [{
  label: "Border Box",
  value: "border-box"
}, {
  label: "Padding Box",
  value: "padding-box"
}, {
  label: "Content Box",
  value: "content-box"
}];
const BackgroundClipOptions = [...BackgroundBoxCommonOptions, {
  label: "Text",
  value: "text"
}, ...StyleGlobalOptions];
const BackgroundOriginOptions = [...BackgroundBoxCommonOptions, ...StyleGlobalOptions];
// Position Options
const PositionOptions = [{
  label: "Static",
  value: "static"
}, {
  label: "Relative",
  value: "relative"
}, {
  label: "Absolute",
  value: "absolute"
}, {
  label: "Fixed",
  value: "fixed"
}, {
  label: "Sticky",
  value: "sticky"
}, ...StyleGlobalOptions];

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

/***/ "./src/utils/isEmptyString.ts":
/*!************************************!*\
  !*** ./src/utils/isEmptyString.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString)
/* harmony export */ });
function isEmptyString(value) {
  return typeof value === 'string' && (value.trim().length === 0 || !value);
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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