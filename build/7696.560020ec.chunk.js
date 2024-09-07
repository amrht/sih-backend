"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[7696],{

/***/ 47696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  REVIEW_WORKFLOW_FILTERS: () => (/* binding */ REVIEW_WORKFLOW_FILTERS)
});

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(98342);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(60731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(66392);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/getDisplayName.js
var getDisplayName = __webpack_require__(58900);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(289);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/AssigneeFilter.js






const AssigneeFilter = ({ value, onChange }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { users, isLoading } = (0,useAdminUsers/* useAdminUsers */.F)();
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.G3,
    {
      value,
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.usersSelect.label",
        defaultMessage: "Search and select an user to filter"
      }),
      onChange,
      loading: isLoading
    },
    users.map((user) => {
      return /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.j, { key: user.id, value: user.id.toString() }, (0,getDisplayName/* getDisplayName */.M)(user, formatMessage));
    })
  );
};
AssigneeFilter.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
AssigneeFilter.defaultProps = {
  value: ""
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(78909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(13630);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(78101);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(30405);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/StageFilter.js






const StageFilter = ({ value, onChange, uid }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const {
    workflows: [workflow],
    isLoading
  } = (0,useReviewWorkflows/* useReviewWorkflows */.W)({ filters: { contentTypes: uid } });
  return /* @__PURE__ */ react.createElement(
    SingleSelect/* SingleSelect */.Z,
    {
      "aria-label": formatMessage({
        id: "content-manager.components.Filters.reviewWorkflows.label",
        defaultMessage: "Search and select an workflow stage to filter"
      }),
      value,
      onChange,
      loading: isLoading,
      customizeContent: () => /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", ellipsis: true }, value), isLoading ? /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true, style: { display: "flex" } }) : null)
    },
    (workflow?.stages ?? []).map(({ id, color, name }) => {
      const { themeColorName } = (0,colors/* getStageColorByHex */.w)(color);
      return /* @__PURE__ */ react.createElement(
        SingleSelect/* SingleSelectOption */.eY,
        {
          key: id,
          startIcon: /* @__PURE__ */ react.createElement(
            Flex/* Flex */.s,
            {
              height: 2,
              background: color,
              borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
              hasRadius: true,
              shrink: 0,
              width: 2
            }
          ),
          value: name
        },
        name
      );
    })
  );
};
StageFilter.defaultProps = {
  value: ""
};
StageFilter.propTypes = {
  onChange: (prop_types_default()).func.isRequired,
  uid: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/components/Filter/CustomInputs/ReviewWorkflows/constants.js



const REVIEW_WORKFLOW_FILTERS = [
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "name",
        schema: {
          type: "string"
        }
      }
    },
    metadatas: {
      customInput: StageFilter,
      label: {
        id: (0,utils/* getTrad */.gT)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      }
    },
    name: "strapi_stage"
  },
  {
    fieldSchema: {
      type: "relation",
      mainField: {
        name: "id",
        schema: {
          type: "int"
        }
      }
    },
    metadatas: {
      customInput: AssigneeFilter,
      customOperators: [
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$eq",
            defaultMessage: "is"
          },
          value: "$eq"
        },
        {
          intlLabel: {
            id: "components.FilterOptions.FILTER_TYPES.$ne",
            defaultMessage: "is not"
          },
          value: "$ne"
        }
      ],
      label: {
        id: (0,utils/* getTrad */.gT)(`containers.ListPage.table-headers.reviewWorkflows.assignee.label`),
        defaultMessage: "Assignee"
      }
    },
    name: "strapi_assignee"
  }
];


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

/***/ 78101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useReviewWorkflows)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39150);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75942);


function useReviewWorkflows(params = {}) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .useFetchClient */ .ry)();
  const { id = "", ...queryParams } = params;
  const defaultQueryParams = {
    populate: "stages"
  };
  const { data, isLoading, status, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
    ["review-workflows", "workflows", id],
    async () => {
      const res = await get(`/admin/review-workflows/workflows/${id}`, {
        params: { ...defaultQueryParams, ...queryParams }
      });
      return res.data;
    }
  );
  let workflows = [];
  if (id && data?.data) {
    workflows = [data.data];
  } else if (Array.isArray(data?.data)) {
    workflows = data.data;
  }
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta: data?.meta ?? {},
    workflows,
    isLoading,
    status,
    refetch
  };
}


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