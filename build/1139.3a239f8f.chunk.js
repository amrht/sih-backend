"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[1139],{

/***/ 71139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReviewWorkflowsAssigneeEE: () => (/* reexport */ ReviewWorkflowsAssigneeEE),
  ReviewWorkflowsStageEE: () => (/* reexport */ ReviewWorkflowsStageEE)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(11714);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(30405);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/ListView/ReviewWorkflowsColumn/ReviewWorkflowsStageEE.js






function ReviewWorkflowsStageEE({ color, name }) {
  const { themeColorName } = (0,colors/* getStageColorByHex */.w)(color);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "center", gap: 2, maxWidth: (0,helper_plugin_esm/* pxToRem */.a8)(300) }, /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      height: 2,
      background: color,
      borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
      hasRadius: true,
      shrink: 0,
      width: 2
    }
  ), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "regular", textColor: "neutral700", ellipsis: true }, name));
}
ReviewWorkflowsStageEE.defaultProps = {
  color: constants/* STAGE_COLOR_DEFAULT */.hH
};
ReviewWorkflowsStageEE.propTypes = {
  color: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired
};

// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(98342);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/ListView/ReviewWorkflowsColumn/ReviewWorkflowsAssigneeEE.js





function ReviewWorkflowsAssigneeEE({ user }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, (0,utils/* getDisplayName */.Mn)(user, formatMessage));
}
ReviewWorkflowsAssigneeEE.propTypes = {
  user: prop_types_default().shape({
    firstname: (prop_types_default()).string,
    lastname: (prop_types_default()).string,
    username: (prop_types_default()).string
  }).isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/ListView/ReviewWorkflowsColumn/index.js




/***/ }),

/***/ 11714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ae: () => (/* binding */ ACTION_UPDATE_STAGE_POSITION),
/* harmony export */   Al: () => (/* binding */ ACTION_UPDATE_STAGE),
/* harmony export */   Cx: () => (/* binding */ ACTION_ADD_STAGE),
/* harmony export */   Dp: () => (/* binding */ CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   TE: () => (/* binding */ DRAG_DROP_TYPES),
/* harmony export */   U: () => (/* binding */ ACTION_DELETE_STAGE),
/* harmony export */   fR: () => (/* binding */ ACTION_RESET_WORKFLOW),
/* harmony export */   h$: () => (/* binding */ ACTION_UPDATE_WORKFLOW),
/* harmony export */   hH: () => (/* binding */ STAGE_COLOR_DEFAULT),
/* harmony export */   hK: () => (/* binding */ CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   oA: () => (/* binding */ STAGE_COLORS),
/* harmony export */   p6: () => (/* binding */ REDUX_NAMESPACE),
/* harmony export */   sT: () => (/* binding */ ACTION_SET_WORKFLOW)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4499);

const REDUX_NAMESPACE = "settings_review-workflows";
const ACTION_RESET_WORKFLOW = `Settings/Review_Workflows/RESET_WORKFLOW`;
const ACTION_SET_WORKFLOW = `Settings/Review_Workflows/SET_WORKFLOW`;
const ACTION_DELETE_STAGE = `Settings/Review_Workflows/WORKFLOW_DELETE_STAGE`;
const ACTION_ADD_STAGE = `Settings/Review_Workflows/WORKFLOW_ADD_STAGE`;
const ACTION_UPDATE_STAGE = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE`;
const ACTION_UPDATE_STAGE_POSITION = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION`;
const ACTION_UPDATE_WORKFLOW = `Settings/Review_Workflows/WORKFLOW_UPDATE`;
const STAGE_COLORS = {
  primary600: "Blue",
  primary200: "Lilac",
  alternative600: "Violet",
  alternative200: "Lavender",
  success600: "Green",
  success200: "Pale Green",
  danger500: "Cherry",
  danger200: "Pink",
  warning600: "Orange",
  warning200: "Yellow",
  secondary600: "Teal",
  secondary200: "Baby Blue",
  neutral400: "Gray",
  neutral0: "White"
};
const STAGE_COLOR_DEFAULT = _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ ._.colors.primary600;
const DRAG_DROP_TYPES = {
  STAGE: "stage"
};
const CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME = "numberOfWorkflows";
const CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME = "stagesPerWorkflow";


/***/ }),

/***/ 30405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getAvailableStageColors),
/* harmony export */   w: () => (/* binding */ getStageColorByHex)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4499);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11714);


function getStageColorByHex(hex) {
  if (!hex) {
    return null;
  }
  const themeColors = Object.entries(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ ._.colors).filter(
    ([, value]) => value.toUpperCase() === hex.toUpperCase()
  );
  const themeColorName = themeColors.reduce((acc, [name]) => {
    if (_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA?.[name]) {
      acc = name;
    }
    return acc;
  }, null);
  if (!themeColorName) {
    return null;
  }
  return {
    themeColorName,
    name: _constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA[themeColorName]
  };
}
function getAvailableStageColors() {
  return Object.entries(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA).map(([themeColorName, name]) => ({
    hex: _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ ._.colors[themeColorName].toUpperCase(),
    name
  }));
}


/***/ })

}]);