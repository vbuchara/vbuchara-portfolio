/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/image/components/controls.tsx":
/*!**************************************************!*\
  !*** ./src/blocks/image/components/controls.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlockControls: () => (/* binding */ ImageBlockControls),
/* harmony export */   ImageInspectorControls: () => (/* binding */ ImageInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_front_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images/front-image.png */ "./assets/images/front-image.png");
/* harmony import */ var _constants_block_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constants/block-breakpoints */ "./src/constants/block-breakpoints.ts");
/* harmony import */ var _components_editor_media_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-media-picker */ "./src/components/editor-media-picker.tsx");
/* harmony import */ var _components_editor_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var _components_editor_metrics_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/editor-metrics-settings */ "./src/components/editor-metrics-settings.tsx");
/* harmony import */ var _components_editor_position_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/editor-position-settings */ "./src/components/editor-position-settings.tsx");
/* harmony import */ var _utils_getArrayDependency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/getArrayDependency */ "./src/utils/getArrayDependency.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











;
function ImageInspectorControls({
  attributes,
  setAttributes
}) {
  const hideImageAtBreakpointsDependency = (0,_utils_getArrayDependency__WEBPACK_IMPORTED_MODULE_9__.getArrayDependency)(attributes.hideImageAtBreakpoints);
  const hideImageAtBreakpointsSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return _constants_block_breakpoints__WEBPACK_IMPORTED_MODULE_4__.BreakpointsOptions.filter(option => {
      return attributes.hideImageAtBreakpoints.includes(option.value);
    });
  }, [hideImageAtBreakpointsDependency]);
  const mediaAttributes = {
    imageId: attributes.imageId,
    imageUrl: attributes.imageUrl,
    imageAlt: attributes.imageAlt
  };
  function setMediaAttributes(mediaAttributes) {
    setAttributes({
      imageId: mediaAttributes.imageId,
      imageUrl: mediaAttributes.imageUrl,
      imageAlt: mediaAttributes.imageAlt
    });
  }
  function handleOnChangeHideImageAt(values) {
    setAttributes({
      hideImageAtBreakpoints: values.map(value => value.value)
    });
  }
  function handleOnChangeMetrics(metricStyles) {
    setAttributes({
      styles: {
        ...attributes.styles,
        metrics: {
          ...attributes.styles.metrics,
          ...metricStyles
        }
      }
    });
  }
  function handleOnChangePosition(positionStyles) {
    setAttributes({
      styles: {
        ...attributes.styles,
        position: {
          ...attributes.styles.position,
          ...positionStyles
        }
      }
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "settings",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Settings",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
            className: "portfolio-image__editor-control",
            label: "Image Source",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_editor_media_picker__WEBPACK_IMPORTED_MODULE_5__.EditorMediaPicker, {
              attributes: mediaAttributes,
              setAttributes: setMediaAttributes,
              defaultImage: _assets_images_front_image_png__WEBPACK_IMPORTED_MODULE_3__
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Alt Text",
            value: attributes.imageAlt,
            onChange: value => setAttributes({
              imageAlt: value
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Exhibition",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
            className: "portfolio-image__editor-control",
            label: "Hide Image At",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_editor_select__WEBPACK_IMPORTED_MODULE_6__.EditorSelect, {
              type: "select",
              isMulti: true,
              options: _constants_block_breakpoints__WEBPACK_IMPORTED_MODULE_4__.BreakpointsOptions,
              value: hideImageAtBreakpointsSelected,
              onChange: handleOnChangeHideImageAt
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_editor_metrics_settings__WEBPACK_IMPORTED_MODULE_7__.EditorMetricsSettings, {
        metrics: attributes.styles.metrics,
        setMetrics: handleOnChangeMetrics,
        title: "Dimensions",
        initialOpen: false
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_editor_position_settings__WEBPACK_IMPORTED_MODULE_8__.EditorPositionSettings, {
        position: attributes.styles.position,
        setPosition: handleOnChangePosition,
        title: "Position",
        initialOpen: false
      })]
    })]
  });
}
;
function ImageBlockControls({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: "Configuration here"
    })
  });
}

/***/ }),

/***/ "./src/blocks/image/edit.tsx":
/*!***********************************!*\
  !*** ./src/blocks/image/edit.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _components_editor_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/editor-wrapper */ "./src/components/editor-wrapper.tsx");
/* harmony import */ var _components_editor_position_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/editor-position-settings */ "./src/components/editor-position-settings.tsx");
/* harmony import */ var _components_editor_metrics_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/editor-metrics-settings */ "./src/components/editor-metrics-settings.tsx");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/image/components/controls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    styles
  } = attributes;
  function isHideImageBreakpointActive(breakpoint) {
    return attributes.hideImageAtBreakpoints.includes(breakpoint) ? true : undefined;
  }
  const metricsStyles = (0,_components_editor_metrics_settings__WEBPACK_IMPORTED_MODULE_2__.getMetricSettingsVariables)(styles.metrics);
  const positionStyles = (0,_components_editor_position_settings__WEBPACK_IMPORTED_MODULE_1__.getPositionSettingsVariables)(styles.position);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_editor_wrapper__WEBPACK_IMPORTED_MODULE_0__.EditorWrapper, {
    style: {
      ...positionStyles
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_3__.ImageInspectorControls, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      className: "portfolio-image portfolio-image--editor",
      src: attributes.imageUrl,
      alt: attributes.imageAlt,
      "data-hide-on-xxs": isHideImageBreakpointActive("xxs"),
      "data-hide-on-xs": isHideImageBreakpointActive("xs"),
      "data-hide-on-sm": isHideImageBreakpointActive("sm"),
      "data-hide-on-md": isHideImageBreakpointActive("md"),
      "data-hide-on-lg": isHideImageBreakpointActive("lg"),
      "data-hide-on-xl": isHideImageBreakpointActive("xl"),
      "data-hide-on-xxl": isHideImageBreakpointActive("xxl"),
      style: {
        ...metricsStyles,
        ...positionStyles
      }
    })]
  });
}

/***/ }),

/***/ "./src/blocks/image/image.tsx":
/*!************************************!*\
  !*** ./src/blocks/image/image.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image/style.scss");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.scss */ "./src/blocks/image/edit.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _assets_images_front_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images/front-image.png */ "./assets/images/front-image.png");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/image/edit.tsx");






const {
  default: block
} = await __webpack_require__.e(/*! import() */ "src_blocks_image_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/image/block.json", 19));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(block.name, {
  ...block,
  attributes: {
    imageId: {
      type: "number",
      default: 0
    },
    imageUrl: {
      type: "string",
      default: _assets_images_front_image_png__WEBPACK_IMPORTED_MODULE_3__
    },
    imageAlt: {
      type: "string",
      default: "Image of a guy sitting on a chair, in front of a computer, and coding"
    },
    hideImageAtBreakpoints: {
      type: "array",
      default: []
    },
    styles: {
      type: "object",
      default: {
        metrics: {},
        position: {}
      }
    }
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.EditComponent
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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

/***/ "./src/components/editor-metrics-settings.tsx":
/*!****************************************************!*\
  !*** ./src/components/editor-metrics-settings.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorMetricsSettings: () => (/* binding */ EditorMetricsSettings),
/* harmony export */   getMetricSettingsVariables: () => (/* binding */ getMetricSettingsVariables)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EditorMetricsSettings(props) {
  const {
    metrics,
    setMetrics,
    title,
    initialOpen
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    initialOpen: initialOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Min Width",
        className: "portfolio-editor__control",
        value: metrics.minWidth || "",
        onChange: value => setMetrics({
          minWidth: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Width",
        className: "portfolio-editor__control",
        value: metrics.width || "",
        onChange: value => setMetrics({
          width: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Max Width",
        className: "portfolio-editor__control",
        value: metrics.maxWidth || "",
        onChange: value => setMetrics({
          maxWidth: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Min Height",
        className: "portfolio-editor__control",
        value: metrics.minHeight || "",
        onChange: value => setMetrics({
          minHeight: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Height",
        className: "portfolio-editor__control",
        value: metrics.height || "",
        onChange: value => setMetrics({
          height: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Max Height",
        className: "portfolio-editor__control",
        value: metrics.maxHeight || "",
        onChange: value => setMetrics({
          maxHeight: value
        })
      })
    })]
  });
}
function getMetricSettingsVariables(metrics) {
  return {
    "--min-width": metrics.minWidth,
    "--width": metrics.width,
    "--max-width": metrics.maxWidth,
    "--min-height": metrics.minHeight,
    "--height": metrics.height,
    "--max-height": metrics.maxHeight
  };
}

/***/ }),

/***/ "./src/components/editor-position-settings.tsx":
/*!*****************************************************!*\
  !*** ./src/components/editor-position-settings.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorPositionSettings: () => (/* binding */ EditorPositionSettings),
/* harmony export */   getPositionSettingsVariables: () => (/* binding */ getPositionSettingsVariables)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/block-styles */ "./src/constants/block-styles.ts");
/* harmony import */ var _editor_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function EditorPositionSettings(props) {
  const {
    position,
    setPosition,
    title,
    initialOpen
  } = props;
  const positionOptionSelected = _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.PositionOptions.find(option => {
    return option.value === position.position;
  });
  function handleOnChangePosition(newPosition) {
    setPosition({
      position: newPosition?.value
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    initialOpen: initialOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
        label: "Position",
        className: "portfolio-editor__control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_2__.EditorSelect, {
          value: positionOptionSelected,
          onChange: handleOnChangePosition,
          options: _constants_block_styles__WEBPACK_IMPORTED_MODULE_1__.PositionOptions
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Top",
        className: "portfolio-editor__control",
        value: position.top || "",
        onChange: value => setPosition({
          top: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Bottom",
        className: "portfolio-editor__control",
        value: position.bottom || "",
        onChange: value => setPosition({
          bottom: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Left",
        className: "portfolio-editor__control",
        value: position.left || "",
        onChange: value => setPosition({
          left: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Right",
        className: "portfolio-editor__control",
        value: position.right || "",
        onChange: value => setPosition({
          right: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNumberControl, {
        label: "Z Index",
        className: "portfolio-editor__control",
        value: position.zIndex || "",
        onChange: value => setPosition({
          zIndex: Number(value)
        }),
        step: 1
      })
    })]
  });
}
function getPositionSettingsVariables(position) {
  return {
    "--position": position.position,
    "--top": position.top,
    "--left": position.left,
    "--right": position.right,
    "--bottom": position.bottom,
    "--z-index": position.zIndex
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

/***/ "./src/constants/block-breakpoints.ts":
/*!********************************************!*\
  !*** ./src/constants/block-breakpoints.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointsOptions: () => (/* binding */ BreakpointsOptions)
/* harmony export */ });
const BreakpointsOptions = [{
  label: "Extra Extra Small (Less than 360px)",
  value: "xxs"
}, {
  label: "Extra Small (Between 360px and 576px)",
  value: "xs"
}, {
  label: "Small (Between 576px and 768px)",
  value: "sm"
}, {
  label: "Medium (Between 768px and 992px)",
  value: "md"
}, {
  label: "Large (Between 992px and 1200px)",
  value: "lg"
}, {
  label: "Extra Large (Between 1200px and 1400px)",
  value: "xl"
}, {
  label: "Extra Extra Large (Greater than 1400px)",
  value: "xxl"
}];

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

/***/ "./src/utils/getArrayDependency.ts":
/*!*****************************************!*\
  !*** ./src/utils/getArrayDependency.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayDependency: () => (/* binding */ getArrayDependency)
/* harmony export */ });
function getArrayDependency(arrayDependency, keys) {
  if (!arrayDependency) return "";
  return arrayDependency.reduce((result, value) => {
    if (!isValidDependency(value)) return result;
    if (typeof value === "string" || typeof value === "number") {
      return result + value;
    }
    if (typeof value === "object" && isArrayOfKeys(keys, value)) {
      return result + keys.reduce((result, key) => {
        return result + value[key];
      }, "");
    }
    return result;
  }, "");
}
function isValidDependency(value) {
  const typesAllowed = ["number", "string", "object"];
  return typesAllowed.includes(typeof value);
}
function isArrayOfKeys(arrayKey, object) {
  return Array.isArray(arrayKey) && arrayKey.every(key => key in object);
}

/***/ }),

/***/ "./src/blocks/image/edit.scss":
/*!************************************!*\
  !*** ./src/blocks/image/edit.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/image/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/image/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/front-image.png":
/*!***************************************!*\
  !*** ./assets/images/front-image.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/front-image.6faefbf7.png";

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
/******/ 			"blocks/image/image": 0,
/******/ 			"blocks/image/style-image": 0
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
/******/ 						if("blocks/image/style-image" != chunkId) {
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","blocks/image/style-image"], () => (__webpack_require__("./src/blocks/image/image.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=image.js.map