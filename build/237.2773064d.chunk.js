"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[237],{

/***/ 55205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ STAGE_ATTRIBUTE_NAME),
/* harmony export */   Z: () => (/* binding */ ASSIGNEE_ATTRIBUTE_NAME)
/* harmony export */ });
const STAGE_ATTRIBUTE_NAME = "strapi_stage";
const ASSIGNEE_ATTRIBUTE_NAME = "strapi_assignee";


/***/ }),

/***/ 44725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InformationBoxEE: () => (/* reexport */ InformationBoxEE)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/index.js + 1 modules
var Information = __webpack_require__(78852);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.mjs
var Field = __webpack_require__(75551);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(60731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(66392);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 11 modules
var utils = __webpack_require__(98342);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(289);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/constants.js
var constants = __webpack_require__(55205);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/components/AssigneeSelect/AssigneeSelect.js










function AssigneeSelect() {
  const {
    initialData,
    layout: { uid },
    isSingleType,
    onChange
  } = (0,helper_plugin_esm/* useCMEditViewDataManager */.Cu)();
  const permissions = (0,react_redux_es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const {
    allowedActions: { canReadUsers },
    isLoading: isLoadingPermissions
  } = (0,helper_plugin_esm/* useRBAC */.ec)({
    readUsers: permissions.settings.users.read
  });
  const { users, isLoading, isError } = (0,useAdminUsers/* useAdminUsers */.F)(
    {},
    {
      enabled: !isLoadingPermissions && canReadUsers
    }
  );
  const currentAssignee = initialData?.[constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z] ?? null;
  const handleChange = async ({ value: assigneeId }) => {
    mutation.mutate({
      entityId: initialData.id,
      assigneeId: parseInt(assigneeId, 10),
      uid
    });
  };
  const mutation = (0,es.useMutation)(
    async ({ entityId, assigneeId, uid: uid2 }) => {
      const typeSlug = isSingleType ? "single-types" : "collection-types";
      const {
        data: { data: createdEntity }
      } = await put(`/admin/content-manager/${typeSlug}/${uid2}/${entityId}/assignee`, {
        data: { id: assigneeId }
      });
      onChange(
        {
          target: { name: constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z, value: createdEntity[constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z] }
        },
        true
      );
      return createdEntity;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: {
            id: "content-manager.reviewWorkflows.assignee.notification.saved",
            defaultMessage: "Assignee updated"
          }
        });
      }
    }
  );
  return /* @__PURE__ */ react.createElement(Field/* Field */.D, { name: constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z, id: constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", gap: 2, alignItems: "stretch" }, /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.G3,
    {
      clearLabel: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.clear",
        defaultMessage: "Clear assignee"
      }),
      error: isError && canReadUsers && formatMessage({
        id: "content-manager.reviewWorkflows.assignee.error",
        defaultMessage: "An error occurred while fetching users"
      }) || mutation.error && formatAPIError(mutation.error),
      disabled: !isLoadingPermissions && !isLoading && users.length === 0,
      name: constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z,
      id: constants/* ASSIGNEE_ATTRIBUTE_NAME */.Z,
      value: currentAssignee ? currentAssignee.id : null,
      onChange: (value) => handleChange({ value }),
      onClear: () => handleChange({ value: null }),
      placeholder: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.placeholder",
        defaultMessage: "Select \u2026"
      }),
      label: formatMessage({
        id: "content-manager.reviewWorkflows.assignee.label",
        defaultMessage: "Assignee"
      }),
      loading: isLoading || isLoadingPermissions || mutation.isLoading
    },
    users.map((user) => {
      return /* @__PURE__ */ react.createElement(
        ComboboxOption/* ComboboxOption */.j,
        {
          key: user.id,
          value: user.id,
          textValue: (0,utils/* getDisplayName */.Mn)(user, formatMessage)
        },
        (0,utils/* getDisplayName */.Mn)(user, formatMessage)
      );
    })
  )));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/components/AssigneeSelect/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(78909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(13630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.mjs
var FieldError = __webpack_require__(59655);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits.js
var useLicenseLimits = __webpack_require__(20022);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js + 2 modules
var LimitsModal = __webpack_require__(59984);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var ReviewWorkflows_constants = __webpack_require__(11714);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(78101);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(30405);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/components/StageSelect/StageSelect.js











function StageSelect() {
  const {
    initialData,
    layout: { uid },
    isSingleType,
    onChange
  } = (0,helper_plugin_esm/* useCMEditViewDataManager */.Cu)();
  const { put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const {
    meta,
    workflows: [workflow],
    isLoading
  } = (0,useReviewWorkflows/* useReviewWorkflows */.W)({ filters: { contentTypes: uid } });
  const { getFeature } = (0,useLicenseLimits/* useLicenseLimits */.b)();
  const [showLimitModal, setShowLimitModal] = react.useState(false);
  const limits = getFeature("review-workflows");
  const activeWorkflowStage = initialData?.[constants/* STAGE_ATTRIBUTE_NAME */.U] ?? null;
  const mutation = (0,es.useMutation)(
    async ({ entityId, stageId, uid: uid2 }) => {
      const typeSlug = isSingleType ? "single-types" : "collection-types";
      const {
        data: { data: createdEntity }
      } = await put(`/admin/content-manager/${typeSlug}/${uid2}/${entityId}/stage`, {
        data: { id: stageId }
      });
      onChange(
        { target: { name: constants/* STAGE_ATTRIBUTE_NAME */.U, value: createdEntity[constants/* STAGE_ATTRIBUTE_NAME */.U] } },
        true
      );
      return createdEntity;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: {
            id: "content-manager.reviewWorkflows.stage.notification.saved",
            defaultMessage: "Review stage updated"
          }
        });
      }
    }
  );
  const handleChange = async ({ value: stageId }) => {
    try {
      if (limits?.[ReviewWorkflows_constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK] && parseInt(limits[ReviewWorkflows_constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK], 10) < meta.workflowCount) {
        setShowLimitModal("workflow");
      } else if (limits?.[ReviewWorkflows_constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */.Dp] && parseInt(limits[ReviewWorkflows_constants/* CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME */.Dp], 10) < workflow.stages.length) {
        setShowLimitModal("stage");
      } else {
        mutation.mutateAsync({
          entityId: initialData.id,
          stageId,
          uid
        });
      }
    } catch (error) {
    }
  };
  const { themeColorName } = activeWorkflowStage?.color ? (0,colors/* getStageColorByHex */.w)(activeWorkflowStage?.color) : {};
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Field/* Field */.D, { name: constants/* STAGE_ATTRIBUTE_NAME */.U, id: constants/* STAGE_ATTRIBUTE_NAME */.U }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", gap: 2, alignItems: "stretch" }, /* @__PURE__ */ react.createElement(
    SingleSelect/* SingleSelect */.Z,
    {
      error: mutation.error && formatAPIError(mutation.error) || null,
      name: constants/* STAGE_ATTRIBUTE_NAME */.U,
      id: constants/* STAGE_ATTRIBUTE_NAME */.U,
      value: activeWorkflowStage?.id,
      onChange: (value) => handleChange({ value }),
      label: formatMessage({
        id: "content-manager.reviewWorkflows.stage.label",
        defaultMessage: "Review stage"
      }),
      startIcon: /* @__PURE__ */ react.createElement(
        Flex/* Flex */.s,
        {
          as: "span",
          height: 2,
          background: activeWorkflowStage?.color,
          borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
          hasRadius: true,
          shrink: 0,
          width: 2,
          marginRight: "-3px"
        }
      ),
      customizeContent: () => /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { as: "span", justifyContent: "space-between", alignItems: "center", width: "100%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", ellipsis: true }, activeWorkflowStage?.name), isLoading ? /* @__PURE__ */ react.createElement(Loader/* Loader */.a, { small: true, style: { display: "flex" } }) : null)
    },
    workflow ? workflow.stages.map(({ id, color, name }) => {
      const { themeColorName: themeColorName2 } = (0,colors/* getStageColorByHex */.w)(color);
      return /* @__PURE__ */ react.createElement(
        SingleSelect/* SingleSelectOption */.eY,
        {
          key: id,
          startIcon: /* @__PURE__ */ react.createElement(
            Flex/* Flex */.s,
            {
              height: 2,
              background: color,
              borderColor: themeColorName2 === "neutral0" ? "neutral150" : "transparent",
              hasRadius: true,
              shrink: 0,
              width: 2
            }
          ),
          value: id,
          textValue: name
        },
        name
      );
    }) : []
  ), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.b, null))), /* @__PURE__ */ react.createElement(
    LimitsModal/* Root */.bL,
    {
      isOpen: showLimitModal === "workflow",
      onClose: () => setShowLimitModal(false)
    },
    /* @__PURE__ */ react.createElement(LimitsModal/* Title */.hE, null, formatMessage({
      id: "content-manager.reviewWorkflows.workflows.limit.title",
      defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
    })),
    /* @__PURE__ */ react.createElement(LimitsModal/* Body */.nB, null, formatMessage({
      id: "content-manager.reviewWorkflows.workflows.limit.body",
      defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
    }))
  ), /* @__PURE__ */ react.createElement(
    LimitsModal/* Root */.bL,
    {
      isOpen: showLimitModal === "stage",
      onClose: () => setShowLimitModal(false)
    },
    /* @__PURE__ */ react.createElement(LimitsModal/* Title */.hE, null, formatMessage({
      id: "content-manager.reviewWorkflows.stages.limit.title",
      defaultMessage: "You have reached the limit of stages for this workflow in your plan"
    })),
    /* @__PURE__ */ react.createElement(LimitsModal/* Body */.nB, null, formatMessage({
      id: "content-manager.reviewWorkflows.stages.limit.body",
      defaultMessage: "Try deleting some stages or contact Sales to enable more stages."
    }))
  ));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/components/StageSelect/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/InformationBoxEE.js





function InformationBoxEE() {
  const {
    isCreatingEntry,
    layout: { options }
  } = (0,helper_plugin_esm/* useCMEditViewDataManager */.Cu)();
  const hasReviewWorkflowsEnabled = options?.reviewWorkflows ?? false;
  return /* @__PURE__ */ react.createElement(Information/* Information */.$.Root, null, /* @__PURE__ */ react.createElement(Information/* Information */.$.Title, null), hasReviewWorkflowsEnabled && !isCreatingEntry && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StageSelect, null), /* @__PURE__ */ react.createElement(AssigneeSelect, null)), /* @__PURE__ */ react.createElement(Information/* Information */.$.Body, null));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/EditView/InformationBox/index.js



/***/ }),

/***/ 20022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useLicenseLimits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);



function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .ry)();
  const { data, isError, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["ee", "license-limit-info"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/license-limit-information");
      return data2;
    },
    {
      enabled
    }
  );
  const license = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => data ?? {}, [data]);
  const getFeature = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (name) => {
      const feature = (license?.features ?? []).find((feature2) => feature2.name === name);
      return feature?.options ?? {};
    },
    [license?.features]
  );
  return { license, getFeature, isError, isLoading };
}


/***/ }),

/***/ 59984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nB: () => (/* reexport */ Body),
  bL: () => (/* reexport */ LimitsModal),
  hE: () => (/* reexport */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(26883);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(16457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.mjs
var LinkButton = __webpack_require__(53812);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.mjs
var Cross = __webpack_require__(964);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/assets/balloon.png
const balloon_namespaceObject = __webpack_require__.p + "0cd5f8915b265d5b1856.png";
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/LimitsModal.js








const TITLE_ID = "limits-title";
const CTA_LEARN_MORE_HREF = "https://strapi.io/pricing-cloud";
const CTA_SALES_HREF = "https://strapi.io/contact-sales";
function Title({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "alpha", id: TITLE_ID }, children);
}
Title.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function Body({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "omega" }, children);
}
Body.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function CallToActions() {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, paddingTop: 4 }, /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.z, { variant: "default", isExternal: true, href: CTA_LEARN_MORE_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.learn",
    defaultMessage: "Learn more"
  })), /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.z, { variant: "tertiary", isExternal: true, href: CTA_SALES_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.sales",
    defaultMessage: "Contact Sales"
  })));
}
const BalloonImage = styled_components_browser_esm/* default */.Ay.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({ theme }) => `-${theme.spaces[7]}`};
  margin-top: ${({ theme }) => `-${theme.spaces[7]}`};
  width: 360px;
`;
function LimitsModal({ children, isOpen, onClose }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { labelledBy: TITLE_ID }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, paddingLeft: 7, position: "relative" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "start", direction: "column", gap: 2, width: "60%" }, children, /* @__PURE__ */ react.createElement(CallToActions, null)), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "end", height: "100%", width: "40%" }, /* @__PURE__ */ react.createElement(BalloonImage, { src: balloon_namespaceObject, "aria-hidden": true, alt: "", loading: "lazy" }), /* @__PURE__ */ react.createElement(Box/* Box */.a, { display: "flex", position: "absolute", right: 0, top: 0 }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      icon: /* @__PURE__ */ react.createElement(Cross/* default */.A, null),
      "aria-label": formatMessage({
        id: "global.close",
        defaultMessage: "Close"
      }),
      onClick: onClose
    }
  ))))));
}
LimitsModal.defaultProps = {
  isOpen: false
};
LimitsModal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  isOpen: (prop_types_default()).bool,
  onClose: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js




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