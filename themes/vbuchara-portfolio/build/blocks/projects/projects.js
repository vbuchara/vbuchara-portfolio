/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/svgs/folder.svg":
/*!********************************!*\
  !*** ./assets/svgs/folder.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFolder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgFolder = function SvgFolder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 52,
    height: 52,
    fill: "#1C2033",
    viewBox: "0 0 64 64"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M61 19.6v-3.3c0-3.4-2.7-6.1-6.1-6.1H32.7l-.3-.8c-.7-1.8-2.4-2.9-4.3-2.9H7.9c-3.4 0-6.1 2.7-6.1 6.1v38.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1V22.7c0-1.2-.5-2.3-1.3-3.1m-6.1-5c.9 0 1.6.7 1.6 1.6v1.9H35.9l-1.4-3.5zm2.9 36.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-39c0-.9.7-1.6 1.6-1.6l20.3.1 4.1 10.2c.3.9 1.2 1.4 2.1 1.4h23.3s.1 0 .1.1z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMUMyMDMzIiB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZlcnNpb249IjEuMSIgaWQ9ImxuaV9sbmktZm9sZGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTYxLDE5LjZ2LTMuM2MwLTMuNC0yLjctNi4xLTYuMS02LjFIMzIuN2wtMC4zLTAuOGMtMC43LTEuOC0yLjQtMi45LTQuMy0yLjlINy45Yy0zLjQsMC02LjEsMi43LTYuMSw2LjF2MzguOQ0KCWMwLDMuNCwyLjcsNi4xLDYuMSw2LjFoNDguM2MzLjQsMCw2LjEtMi43LDYuMS02LjFWMjIuN0M2Mi4zLDIxLjUsNjEuOCwyMC40LDYxLDE5LjZ6IE01NC45LDE0LjZjMC45LDAsMS42LDAuNywxLjYsMS42djEuOUgzNS45DQoJbC0xLjQtMy41SDU0Ljl6IE01Ny44LDUxLjVjMCwwLjktMC43LDEuNi0xLjYsMS42SDcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42VjEyLjVjMC0wLjksMC43LTEuNiwxLjYtMS42TDI4LjIsMTFsNC4xLDEwLjINCgljMC4zLDAuOSwxLjIsMS40LDIuMSwxLjRoMjMuM2MwLDAsMC4xLDAsMC4xLDAuMVY1MS41eiIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./src/blocks/projects/components/controls.tsx":
/*!*****************************************************!*\
  !*** ./src/blocks/projects/components/controls.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsBlockControls: () => (/* binding */ ProjectsBlockControls),
/* harmony export */   ProjectsInspectorControls: () => (/* binding */ ProjectsInspectorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_editor_sortable_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/editor-sortable-select */ "./src/components/editor-sortable-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





;
function ProjectsInspectorControls({
  attributes,
  setAttributes,
  projects
}) {
  const projectsOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return projects?.map(project => ({
      id: project.id,
      label: project.title.rendered,
      value: project
    }));
  }, [projects]);
  const projectsSelected = projectsOptions?.filter(projectOption => attributes.projectsIdsToShow.includes(projectOption.value.id)).toSorted((leftProjectOption, rightProjectOption) => {
    const {
      projectsIdsToShow
    } = attributes;
    return projectsIdsToShow.indexOf(leftProjectOption.id) - projectsIdsToShow.indexOf(rightProjectOption.id);
  });
  function setProjectsToShow(options) {
    setAttributes({
      projectsIdsToShow: options.map(option => option.value.id)
    });
  }
  function handleOnChangeProjectsQuantity(value) {
    setAttributes({
      projectsQuantity: value ? Number(value) : undefined
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    group: "settings",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Settings",
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
          label: "Number of Projects to Show",
          className: "portfolio-projects__editor-control",
          value: attributes.projectsQuantity,
          onChange: handleOnChangeProjectsQuantity,
          step: 1,
          min: 0
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
          label: "Show Specific Projects?",
          className: "portfolio-projects__editor-control",
          checked: attributes.showSpecificProjects,
          onChange: value => setAttributes({
            showSpecificProjects: value
          })
        })
      }), !attributes.showSpecificProjects ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: "Projects to Show",
        className: "portfolio-projects__editor-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_sortable_select__WEBPACK_IMPORTED_MODULE_3__.EditorSortableSelect, {
          isLoading: !projectsOptions,
          options: projectsOptions,
          value: projectsSelected,
          onChange: setProjectsToShow,
          setValue: setProjectsToShow
        })
      })]
    })
  });
}
;
function ProjectsBlockControls({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
      children: "Configuration here"
    })
  });
}

/***/ }),

/***/ "./src/blocks/projects/components/project-card.tsx":
/*!*********************************************************!*\
  !*** ./src/blocks/projects/components/project-card.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectCard: () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_project_default_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/images/project-default-image.png */ "./assets/images/project-default-image.png");
/* harmony import */ var _components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/editor-anchor */ "./src/components/editor-anchor.tsx");
/* harmony import */ var _hooks_useTextScrollAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useTextScrollAnimation */ "./src/hooks/useTextScrollAnimation.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ProjectCard(props) {
  const {
    project,
    classPrefix,
    projectArchiveLink,
    idPrefix
  } = props;
  const projectImage = project.acf.project_image?.size_urls["project-image"] || _assets_images_project_default_image_png__WEBPACK_IMPORTED_MODULE_1__;
  const projectImageAlt = project.acf.project_image?.alt || "No image or alt text for the project provided";
  const projectLink = projectArchiveLink ? `${projectArchiveLink}#${project.slug}` : "";
  const projectHtmlId = idPrefix ? `${idPrefix}-${project.slug}` : `project-card-${project.slug}`;
  const projectLinkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    startScrollLeft,
    revertScroll
  } = (0,_hooks_useTextScrollAnimation__WEBPACK_IMPORTED_MODULE_3__.useTextScrollAnimation)(projectLinkRef);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    id: projectHtmlId,
    className: `${classPrefix}__card`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      className: `${classPrefix}__card-image`,
      src: projectImage,
      alt: projectImageAlt
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: `${classPrefix}__card-title`,
      onFocus: startScrollLeft,
      onBlur: revertScroll,
      onMouseOver: startScrollLeft,
      onMouseLeave: revertScroll,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_editor_anchor__WEBPACK_IMPORTED_MODULE_2__.EditorAnchor, {
        className: `${classPrefix}__card-title-link`,
        href: projectLink,
        ref: projectLinkRef,
        children: project.title.rendered
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/projects/edit.tsx":
/*!**************************************!*\
  !*** ./src/blocks/projects/edit.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditComponent: () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _components_editor_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/editor-wrapper */ "./src/components/editor-wrapper.tsx");
/* harmony import */ var _utils_getArrayDependency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/getArrayDependency */ "./src/utils/getArrayDependency.ts");
/* harmony import */ var _utils_hasElementTotallyScrolled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/hasElementTotallyScrolled */ "./src/utils/hasElementTotallyScrolled.ts");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/controls */ "./src/blocks/projects/components/controls.tsx");
/* harmony import */ var _components_project_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-card */ "./src/blocks/projects/components/project-card.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const projectPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getPostType("project");
  }, []);
  const projects = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords("postType", "project", {
      context: "view",
      per_page: -1,
      order: "desc",
      orderby: "title"
    });
  }, []);
  const projectsToShow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!attributes.showSpecificProjects) {
      return projects?.slice(0, attributes.projectsQuantity);
    }
    const projectsSelected = projects?.filter(project => attributes.projectsIdsToShow.includes(project.id)).toSorted((leftProject, rightProject) => {
      const {
        projectsIdsToShow
      } = attributes;
      return projectsIdsToShow.indexOf(leftProject.id) - projectsIdsToShow.indexOf(rightProject.id);
    });
    return projectsSelected?.slice(0, attributes.projectsQuantity);
  }, [attributes.showSpecificProjects, attributes.projectsQuantity, (0,_utils_getArrayDependency__WEBPACK_IMPORTED_MODULE_6__.getArrayDependency)(attributes.projectsIdsToShow), projects]);
  const mainDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const portfolioCardsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [mainDivMeasureRef, mainDivMeasure] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [portfolioCardsMeasureRef, portfolioCardsMeasure] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [cardsScrollLeft, setCardsScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const activeScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement) return false;
    const divPadding = 10;
    return cardsDivElement.scrollWidth - divPadding > cardsDivElement.clientWidth;
  }, [mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);
  const activeScrollLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement) return false;
    return activeScroll && cardsDivElement.scrollLeft > 0;
  }, [activeScroll, mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);
  const activeScrollRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement) return false;
    return activeScroll && !(0,_utils_hasElementTotallyScrolled__WEBPACK_IMPORTED_MODULE_7__.hasElementTotallyScrolled)(cardsDivElement, "horizontal");
  }, [activeScroll, mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);
  const portfolioProjectsClasses = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])({
      "portfolio-projects": true,
      "portfolio-projects--with-scroll": activeScrollLeft || activeScrollRight
    });
  }, [activeScrollLeft, activeScrollRight]);
  const scrollLeftClasses = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])({
      "portfolio-projects__scroll-left": true,
      "portfolio-projects__scroll-left--disabled": !activeScrollLeft
    });
  }, [activeScrollLeft]);
  const scrollRightClasses = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])({
      "portfolio-projects__scroll-right": true,
      "portfolio-projects__scroll-right--disabled": !activeScrollRight
    });
  }, [activeScrollRight]);
  const debouncedHandleOnScrollCards = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(handleOnScrollCards, 10, {
    leading: true
  }), []);
  function handleOnScrollCards() {
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement) return;
    setCardsScrollLeft(cardsDivElement.scrollLeft);
  }
  function handleScrollLeft() {
    if (!activeScrollLeft) return;
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement || cardsDivElement.scrollLeft <= 0) return;
    const cardsBoundingRect = cardsDivElement.getBoundingClientRect();
    const cardsElements = cardsDivElement.querySelectorAll(".portfolio-projects__card");
    const firstCardOutOfView = Array.from(cardsElements).toReversed().find(card => {
      const cardBoundingRect = card.getBoundingClientRect();
      return Math.floor(cardBoundingRect.left + 1) < Math.floor(cardsBoundingRect.left);
    });
    const firstChildElement = cardsDivElement.firstElementChild;
    if (firstCardOutOfView && firstCardOutOfView !== firstChildElement) {
      firstCardOutOfView.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
      });
      return;
    }
    cardsDivElement.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  }
  function handleScrollRight() {
    if (!activeScrollRight) return;
    const cardsDivElement = portfolioCardsRef.current;
    if (!cardsDivElement || (0,_utils_hasElementTotallyScrolled__WEBPACK_IMPORTED_MODULE_7__.hasElementTotallyScrolled)(cardsDivElement, "horizontal")) return;
    const cardsBoundingRect = cardsDivElement.getBoundingClientRect();
    const cardsElements = cardsDivElement.querySelectorAll(".portfolio-projects__card");
    const firstCardOutOfView = Array.from(cardsElements).find(card => {
      const cardBoundingRect = card.getBoundingClientRect();
      return Math.floor(cardBoundingRect.right - 1) > Math.floor(cardsBoundingRect.right);
    });
    const lastChildElement = cardsDivElement.lastElementChild;
    if (firstCardOutOfView && firstCardOutOfView !== lastChildElement) {
      firstCardOutOfView.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "nearest"
      });
      return;
    }
    cardsDivElement.scrollTo({
      left: cardsDivElement.scrollWidth,
      behavior: "smooth"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_editor_wrapper__WEBPACK_IMPORTED_MODULE_5__.EditorWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_controls__WEBPACK_IMPORTED_MODULE_8__.ProjectsInspectorControls, {
      attributes: attributes,
      setAttributes: setAttributes,
      projects: projects
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: portfolioProjectsClasses,
      ref: element => {
        if (!element) return;
        mainDivMeasureRef(element);
        mainDivRef.current = element;
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
        type: "button",
        className: scrollLeftClasses,
        onClick: handleScrollLeft,
        disabled: !activeScrollLeft,
        children: "<"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "portfolio-projects__cards",
        onScroll: debouncedHandleOnScrollCards,
        ref: element => {
          if (!element) return;
          portfolioCardsMeasureRef(element);
          portfolioCardsRef.current = element;
        },
        children: projectsToShow?.map(project => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_project_card__WEBPACK_IMPORTED_MODULE_9__.ProjectCard, {
          project: project,
          classPrefix: "portfolio-projects",
          projectArchiveLink: projectPostType?.archive_link,
          idPrefix: "portfolio-projects__card"
        }, project.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
        type: "button",
        className: scrollRightClasses,
        onClick: handleScrollRight,
        disabled: !activeScrollRight,
        children: ">"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/projects/projects.tsx":
/*!******************************************!*\
  !*** ./src/blocks/projects/projects.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/projects/style.scss");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.scss */ "./src/blocks/projects/edit.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svgs_folder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svgs/folder.svg */ "./assets/svgs/folder.svg");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/projects/edit.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  default: block
} = await __webpack_require__.e(/*! import() */ "src_blocks_projects_block_json").then(__webpack_require__.t.bind(__webpack_require__, /*! ./block.json */ "./src/blocks/projects/block.json", 19));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(block.name, {
  ...block,
  attributes: {
    projectsQuantity: {
      type: "number"
    },
    showSpecificProjects: {
      type: "boolean",
      default: false
    },
    projectsIdsToShow: {
      type: "array",
      default: []
    }
  },
  icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_svgs_folder_svg__WEBPACK_IMPORTED_MODULE_3__.ReactComponent, {
    fill: "currentColor"
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.EditComponent
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/components/editor-anchor.tsx":
/*!******************************************!*\
  !*** ./src/components/editor-anchor.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorAnchor: () => (/* binding */ EditorAnchor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EditorAnchorComponent(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    ref: ref,
    onClick: event => event.preventDefault(),
    ...props
  });
}
const EditorAnchor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(EditorAnchorComponent);

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

/***/ "./src/components/editor-sortable-select.tsx":
/*!***************************************************!*\
  !*** ./src/components/editor-sortable-select.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorSortableSelect: () => (/* binding */ EditorSortableSelect),
/* harmony export */   EditorSortableSelectMultiValue: () => (/* binding */ EditorSortableSelectMultiValue),
/* harmony export */   EditorSortableSelectMultiValueLabel: () => (/* binding */ EditorSortableSelectMultiValueLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-a301f526.esm.js");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _editor_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-select */ "./src/components/editor-select.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function EditorSortableSelectMultiValue(props) {
  const {
    setNodeRef,
    transform,
    transition,
    isDragging
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable)({
    id: props.data.id
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };
  function handleOnMouseDownMultiValue(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_6__.c.MultiValue, {
    ...props,
    innerProps: {
      ...props.innerProps,
      style: style,
      onMouseDown: handleOnMouseDownMultiValue,
      ref: setNodeRef
    }
  });
}
function EditorSortableSelectMultiValueLabel(props) {
  const {
    attributes,
    listeners
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable)({
    id: props.data.id
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_6__.c.MultiValueLabel, {
    ...props,
    innerProps: {
      ...props.innerProps,
      ...attributes,
      ...listeners
    }
  });
}
function EditorSortableSelect({
  setValue,
  ...props
}) {
  const {
    options,
    value
  } = props;
  const sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.PointerSensor), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardSensor, {
    coordinateGetter: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.sortableKeyboardCoordinates
  }));
  const multiValuesProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
  const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const activeOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return value?.find(option => option.id === activeId);
  }, [activeId]);
  const activeMultiValueProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return activeId ? multiValuesProps.current.get(activeId) : undefined;
  }, [activeId]);
  function handleOnDragStart(event) {
    const {
      active
    } = event;
    setActiveId(active.id);
  }
  function handleOnDragEnd(event) {
    if (!value) return;
    const {
      active,
      over
    } = event;
    if (active.id !== over?.id) {
      const oldIndex = value.findIndex(({
        id
      }) => id === active.id);
      const newIndex = value.findIndex(({
        id
      }) => id === over?.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        const newValue = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.arrayMove)([...value], oldIndex, newIndex);
        ;
        setValue(newValue);
      }
      ;
    }
    setActiveId(null);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.DndContext, {
    sensors: sensors,
    collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.closestCenter,
    onDragStart: handleOnDragStart,
    onDragEnd: handleOnDragEnd,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.SortableContext, {
      items: [...(options || [])],
      strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.rectSwappingStrategy,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_editor_select__WEBPACK_IMPORTED_MODULE_4__.EditorSelect, {
        ...props,
        isMulti: true,
        components: {
          ...props.components,
          MultiValue: props => {
            multiValuesProps.current.set(props.data.id, props);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(EditorSortableSelectMultiValue, {
              ...props
            });
          },
          MultiValueLabel: EditorSortableSelectMultiValueLabel
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.DragOverlay, {
      children: !activeOption || !activeMultiValueProps ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_6__.c.MultiValue, {
        ...activeMultiValueProps
      })
    })]
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

/***/ "./src/hooks/useTextScrollAnimation.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useTextScrollAnimation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTextScrollAnimation: () => (/* binding */ useTextScrollAnimation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs");


function useTextScrollAnimation(ref) {
  const animationCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const scrollRef = ref instanceof HTMLElement || !ref ? {
    current: ref
  } : ref;
  const [_, scrollAnimationController] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(() => ({
    scrollX: 0,
    onChange: result => {
      if (!scrollRef.current) return;
      const {
        scrollX
      } = result.value;
      scrollRef.current.scrollTo({
        left: scrollX
      });
    },
    config: {
      duration: 3000
    }
  }), ref instanceof HTMLElement || !ref ? [ref] : undefined);
  function startScrollLeft() {
    if (!scrollRef.current) return;
    scrollAnimationController.set({
      scrollX: 0
    });
    animationCancel.current = false;
    scrollRef.current.style.setProperty("text-overflow", "unset");
    setTimeout(() => {
      if (!scrollRef.current || animationCancel.current) return;
      scrollAnimationController.start({
        scrollX: scrollRef.current.scrollWidth
      });
    }, 500);
  }
  function revertScroll() {
    if (!scrollRef.current) return;
    scrollAnimationController.stop(true);
    scrollRef.current.style.removeProperty("text-overflow");
    scrollRef.current.scrollTo({
      left: 0
    });
    animationCancel.current = true;
  }
  return {
    startScrollLeft,
    revertScroll,
    scrollAnimationController
  };
}

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

/***/ "./src/utils/hasElementTotallyScrolled.ts":
/*!************************************************!*\
  !*** ./src/utils/hasElementTotallyScrolled.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasElementTotallyScrolled: () => (/* binding */ hasElementTotallyScrolled)
/* harmony export */ });
function hasElementTotallyScrolled(element, direction = "vertical") {
  if (direction === "vertical") {
    return Math.ceil(element.clientHeight + element.scrollTop) >= element.scrollHeight;
  }
  if (direction === "horizontal") {
    return Math.ceil(element.clientWidth + element.scrollLeft) >= element.scrollWidth;
  }
  return false;
}

/***/ }),

/***/ "./src/blocks/projects/edit.scss":
/*!***************************************!*\
  !*** ./src/blocks/projects/edit.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/projects/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/projects/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/project-default-image.png":
/*!*************************************************!*\
  !*** ./assets/images/project-default-image.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/project-default-image.dc2888cf.png";

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			"blocks/projects/projects": 0,
/******/ 			"blocks/projects/style-projects": 0
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
/******/ 						if("blocks/projects/style-projects" != chunkId) {
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","blocks/projects/style-projects"], () => (__webpack_require__("./src/blocks/projects/projects.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=projects.js.map