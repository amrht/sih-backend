"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6364],{

/***/ 19595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tokens_FormHead)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(10440);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(40897);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 16 modules
var hooks = __webpack_require__(35287);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Regenerate/index.js







const Regenerate = ({ onRegenerate, idToRegenerate, backUrl, onError }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { regenerateData, isLoadingConfirmation } = (0,hooks/* useRegenerate */.g4)(
    backUrl,
    idToRegenerate,
    onRegenerate,
    onError
  );
  const handleConfirmRegeneration = async () => {
    regenerateData();
    setShowConfirmDialog(false);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.$,
    {
      startIcon: /* @__PURE__ */ react.createElement(Refresh/* default */.A, null),
      type: "button",
      size: "S",
      variant: "tertiary",
      onClick: () => setShowConfirmDialog(true),
      name: "regenerate"
    },
    formatMessage({
      id: "Settings.tokens.regenerate",
      defaultMessage: "Regenerate"
    })
  ), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      bodyText: {
        id: "Settings.tokens.popUpWarning.message",
        defaultMessage: "Are you sure you want to regenerate this token?"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(Refresh/* default */.A, null),
      isConfirmButtonLoading: isLoadingConfirmation,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRegeneration,
      leftButtonText: {
        id: "Settings.tokens.Button.cancel",
        defaultMessage: "Cancel"
      },
      rightButtonText: {
        id: "Settings.tokens.Button.regenerate",
        defaultMessage: "Regenerate"
      },
      title: {
        id: "Settings.tokens.RegenerateDialog.title",
        defaultMessage: "Regenerate token"
      }
    }
  ));
};
Regenerate.defaultProps = { onRegenerate() {
}, onError: void 0 };
Regenerate.propTypes = {
  onRegenerate: (prop_types_default()).func,
  idToRegenerate: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  backUrl: (prop_types_default()).string.isRequired,
  onError: (prop_types_default()).func
};
/* harmony default export */ const Tokens_Regenerate = (Regenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js







const FormHead = ({
  title,
  token,
  setToken,
  canEditInputs,
  canRegenerate,
  isSubmitting,
  backUrl,
  regenerateUrl,
  onErrorRegenerate
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const handleRegenerate = (newKey) => {
    setToken({
      ...token,
      accessKey: newKey
    });
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: token?.name || formatMessage(title),
      primaryAction: canEditInputs ? /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2 }, canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          backUrl: regenerateUrl,
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id,
          onError: onErrorRegenerate
        }
      ), /* @__PURE__ */ react.createElement(
        Button/* Button */.$,
        {
          disabled: isSubmitting,
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null),
          type: "submit",
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )) : canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id,
          backUrl: regenerateUrl
        }
      ),
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null), to: backUrl }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      })),
      ellipsis: true
    }
  );
};
FormHead.propTypes = {
  token: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  canEditInputs: (prop_types_default()).bool.isRequired,
  canRegenerate: (prop_types_default()).bool.isRequired,
  setToken: (prop_types_default()).func.isRequired,
  isSubmitting: (prop_types_default()).bool.isRequired,
  backUrl: (prop_types_default()).string.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  regenerateUrl: (prop_types_default()).string.isRequired,
  onErrorRegenerate: (prop_types_default()).func
};
FormHead.defaultProps = {
  token: void 0,
  onErrorRegenerate: void 0
};
/* harmony default export */ const Tokens_FormHead = (FormHead);


/***/ }),

/***/ 91146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28753);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39410);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17937);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);
/* harmony import */ var _pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31713);





const LifeSpanInput = ({ token, errors, values, onChange, isCreating }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Select */ .l,
    {
      name: "lifespan",
      label: formatMessage({
        id: "Settings.tokens.form.duration",
        defaultMessage: "Token duration"
      }),
      value: values.lifespan !== null ? values.lifespan : "0",
      error: errors.lifespan ? formatMessage(
        errors.lifespan?.id ? errors.lifespan : { id: errors.lifespan, defaultMessage: errors.lifespan }
      ) : null,
      onChange: (value) => {
        onChange({ target: { name: "lifespan", value } });
      },
      required: true,
      disabled: !isCreating,
      placeholder: "Select"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, { value: "604800000" }, formatMessage({
      id: "Settings.tokens.duration.7-days",
      defaultMessage: "7 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, { value: "2592000000" }, formatMessage({
      id: "Settings.tokens.duration.30-days",
      defaultMessage: "30 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, { value: "7776000000" }, formatMessage({
      id: "Settings.tokens.duration.90-days",
      defaultMessage: "90 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Option */ .c, { value: "0" }, formatMessage({
      id: "Settings.tokens.duration.unlimited",
      defaultMessage: "Unlimited"
    }))
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { variant: "pi", textColor: "neutral600" }, !isCreating && `${formatMessage({
    id: "Settings.tokens.duration.expiration-date",
    defaultMessage: "Expiration date"
  })}: ${(0,_pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__/* .getDateOfExpiration */ .N1)(token?.createdAt, parseInt(values.lifespan, 10))}`));
};
LifeSpanInput.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    lifespan: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)])
  }).isRequired,
  isCreating: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool).isRequired,
  token: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    accessKey: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    permissions: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    createdAt: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
  })
};
LifeSpanInput.defaultProps = {
  errors: {},
  token: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifeSpanInput);


/***/ }),

/***/ 54134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1919);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40203);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17409);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);






const TokenBox = ({ token, tokenType }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useTracking */ .z1)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .iD)();
  const handleClick = (token2) => async () => {
    const didCopy = await copy(token2);
    if (didCopy) {
      trackUsage("didCopyTokenKey", {
        tokenType
      });
      toggleNotification({
        type: "success",
        message: { id: "Settings.tokens.notification.copied" }
      });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .bQ,
    {
      endAction: token && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { alignSelf: "start" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .K,
        {
          label: formatMessage({
            id: "app.component.CopyToClipboard.label",
            defaultMessage: "Copy to clipboard"
          }),
          onClick: handleClick(token),
          noBorder: true,
          icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null),
          style: { padding: 0, height: "1rem" }
        }
      )),
      title: token || formatMessage({
        id: "Settings.tokens.copy.editTitle",
        defaultMessage: "This token isn\u2019t accessible anymore."
      }),
      subtitle: token ? formatMessage({
        id: "Settings.tokens.copy.lastWarning",
        defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
      }) : formatMessage({
        id: "Settings.tokens.copy.editMessage",
        defaultMessage: "For security reasons, you can only see your token once."
      }),
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null),
      iconBackground: "neutral100"
    }
  );
};
TokenBox.defaultProps = {
  token: null
};
TokenBox.propTypes = {
  token: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  tokenType: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenBox);


/***/ }),

/***/ 6937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90493);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6442);




const TokenDescription = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Textarea */ .T,
    {
      label: formatMessage({
        id: "Settings.tokens.form.description",
        defaultMessage: "Description"
      }),
      id: "description",
      error: errors.description ? formatMessage(
        errors.description?.id ? errors.description : {
          id: errors.description,
          defaultMessage: errors.description
        }
      ) : null,
      onChange,
      disabled: !canEditInputs
    },
    values.description
  );
};
TokenDescription.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenDescription.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenDescription);


/***/ }),

/***/ 28506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14591);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6442);




const TokenName = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .TextInput */ .k,
    {
      name: "name",
      error: errors.name ? formatMessage(
        errors.name?.id ? errors.name : { id: errors.name, defaultMessage: errors.name }
      ) : null,
      label: formatMessage({
        id: "Settings.tokens.form.name",
        defaultMessage: "Name"
      }),
      onChange,
      value: values.name,
      disabled: !canEditInputs,
      required: true
    }
  );
};
TokenName.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenName.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenName);


/***/ }),

/***/ 85021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28753);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39410);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6442);




const TokenTypeSelect = ({ name, errors, values, onChange, canEditInputs, options, label }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .l,
    {
      name,
      label: formatMessage({
        id: label.id,
        defaultMessage: label.defaultMessage
      }),
      value: values && values[name],
      error: errors[name] ? formatMessage(
        errors[name]?.id ? errors[name] : { id: errors[name], defaultMessage: errors[name] }
      ) : null,
      onChange,
      placeholder: "Select",
      required: true,
      disabled: !canEditInputs
    },
    options && options.map(({ value, label: label2 }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Option */ .c, { key: value, value }, formatMessage(label2)))
  );
};
TokenTypeSelect.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      label: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        defaultMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
      }),
      value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    })
  ),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    defaultMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }).isRequired
};
TokenTypeSelect.defaultProps = {
  name: "type",
  errors: {},
  options: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenTypeSelect);


/***/ }),

/***/ 55286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   j: () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 31713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N1: () => (/* reexport */ utils_getDateOfExpiration),
  wQ: () => (/* reexport */ utils_schema),
  z1: () => (/* reexport */ utils_transformPermissionsData)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 17 modules
var format = __webpack_require__(81207);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(92998);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/index.js + 510 modules
var locale = __webpack_require__(64123);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/getDateOfExpiration.js


const getDateOfExpiration = (createdAt, duration, language = "en") => {
  if (duration && typeof duration === "number") {
    const durationInDays = duration / 24 / 60 / 60 / 1e3;
    return (0,format/* default */.A)((0,addDays/* default */.A)(new Date(createdAt), durationInDays), "PPP", {
      locale: locale[language]
    });
  }
  return "Unlimited";
};
/* harmony default export */ const utils_getDateOfExpiration = (getDateOfExpiration);

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = es/* object */.Ik().shape({
  name: es/* string */.Yj(helper_plugin_esm/* translatedErrors */.iW.string).max(100).required(helper_plugin_esm/* translatedErrors */.iW.required),
  type: es/* string */.Yj(helper_plugin_esm/* translatedErrors */.iW.string).oneOf(["read-only", "full-access", "custom"]).required(helper_plugin_esm/* translatedErrors */.iW.required),
  description: es/* string */.Yj().nullable(),
  lifespan: es/* number */.ai().integer().min(0).nullable().defined(helper_plugin_esm/* translatedErrors */.iW.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/transformPermissionsData.js
const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.keys(data).map((apiId) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: Object.keys(data[apiId].controllers).map((controller) => ({
      controller,
      actions: data[apiId].controllers[controller].map((action) => {
        const actionId = `${apiId}.${controller}.${action}`;
        if (apiId.includes("api::")) {
          layout.allActionsIds.push(actionId);
        }
        return {
          action,
          actionId
        };
      }).flat()
    })).flat()
  }));
  return layout;
};
/* harmony default export */ const utils_transformPermissionsData = (transformPermissionsData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js






/***/ }),

/***/ 56364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(80005);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(55286);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js + 1 modules
var FormHead = __webpack_require__(19595);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenBox/index.js
var TokenBox = __webpack_require__(54134);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/LifeSpanInput/index.js
var LifeSpanInput = __webpack_require__(91146);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenDescription/index.js
var TokenDescription = __webpack_require__(6937);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenName/index.js
var TokenName = __webpack_require__(28506);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenTypeSelect/index.js
var TokenTypeSelect = __webpack_require__(85021);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/FormTransferTokenContainer/index.js








const FormTransferTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const typeOptions = [
    {
      value: "push",
      label: {
        id: "Settings.transferTokens.types.push",
        defaultMessage: "Push"
      }
    },
    {
      value: "pull",
      label: {
        id: "Settings.transferTokens.types.pull",
        defaultMessage: "Pull"
      }
    },
    {
      value: "push-pull",
      label: {
        id: "Settings.transferTokens.types.push-pull",
        defaultMessage: "Full Access"
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenName/* default */.A,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenDescription/* default */.A,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      LifeSpanInput/* default */.A,
      {
        isCreating,
        errors,
        values,
        onChange,
        token: transferToken
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: "permissions", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenTypeSelect/* default */.A,
      {
        name: "permissions",
        values,
        errors,
        label: {
          id: "Settings.tokens.form.type",
          defaultMessage: "Token type"
        },
        onChange: (value) => {
          onChange({ target: { name: "permissions", value } });
        },
        options: typeOptions,
        canEditInputs
      }
    ))))
  );
};
FormTransferTokenContainer.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  transferToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  })
};
FormTransferTokenContainer.defaultProps = {
  errors: {},
  transferToken: {}
};
/* harmony default export */ const components_FormTransferTokenContainer = (FormTransferTokenContainer);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ transferTokenName }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.$, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: transferTokenName || formatMessage({
        id: "Settings.transferTokens.createPage.title",
        defaultMessage: "Create Transfer Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
};
LoadingView.defaultProps = {
  transferTokenName: null
};
LoadingView.propTypes = {
  transferTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/schema.js


const schema = yup_es/* object */.Ik().shape({
  name: yup_es/* string */.Yj(helper_plugin_esm/* translatedErrors */.iW.string).max(100).required(helper_plugin_esm/* translatedErrors */.iW.required),
  description: yup_es/* string */.Yj().nullable(),
  lifespan: yup_es/* number */.ai().integer().min(0).nullable().defined(helper_plugin_esm/* translatedErrors */.iW.required),
  permissions: yup_es/* string */.Yj(helper_plugin_esm/* translatedErrors */.iW.string).required(helper_plugin_esm/* translatedErrors */.iW.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/index.js
















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const TransferTokenCreateView = () => {
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const history = (0,react_router/* useHistory */.W6)();
  const [transferToken, setTransferToken] = (0,react.useState)(
    history.location.state?.transferToken.accessKey ? {
      ...history.location.state.transferToken
    } : null
  );
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,helper_plugin_esm/* useGuidedTour */.Cx)();
  const permissions = (0,react_redux_es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(permissions.settings["transfer-tokens"]);
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.W5)("/settings/transfer-tokens/:id");
  const { get, post, put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const isCreating = id === "create";
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.j
    });
  }, [isCreating]);
  const { status } = (0,es.useQuery)(
    ["transfer-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/transfer/tokens/${id}`);
      setTransferToken({
        ...data
      });
      return data;
    },
    {
      enabled: !isCreating && !transferToken,
      onError(err) {
        if (err.response.data.error.details?.code === "INVALID_TOKEN_SALT") {
          toggleNotification({
            type: "warning",
            message: {
              id: "notification.error.invalid.configuration",
              defaultMessage: "You have an invalid configuration, check your server log for more information."
            }
          });
        } else {
          toggleNotification({
            type: "warning",
            message: formatAPIError(err)
          });
        }
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.j
    });
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    const permissions2 = body.permissions.split("-");
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/transfer/tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: permissions2
      }) : await put(`/admin/transfer/tokens/${id}`, {
        name: body.name,
        description: body.description,
        permissions: permissions2
      });
      unlockApp();
      if (isCreating) {
        history.replace(`/settings/transfer-tokens/${response.id}`, { transferToken: response });
        setCurrentStep("transferTokens.success");
      }
      setTransferToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.transfertokencreated",
          defaultMessage: "Transfer Token successfully created"
        }) : formatMessage({
          id: "notification.success.transfertokenedited",
          defaultMessage: "Transfer Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: transferToken?.permissions,
        tokenType: constants/* TRANSFER_TOKEN_TYPE */.j
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.N_)(err.response.data);
      actions.setErrors(errors);
      if (err?.response?.data?.error?.message === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else if (err?.response?.data?.error?.details?.code === "INVALID_TOKEN_SALT") {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error.invalid.configuration",
            defaultMessage: "You have an invalid configuration, check your server log for more information."
          }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: err?.response?.data?.message || "notification.error"
        });
      }
      unlockApp();
    }
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !transferToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { transferTokenName: transferToken?.name });
  }
  const handleErrorRegenerate = (err) => {
    if (err?.response?.data?.error?.details?.code === "INVALID_TOKEN_SALT") {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error.invalid.configuration",
          defaultMessage: "You have an invalid configuration, check your server log for more information."
        }
      });
    } else {
      toggleNotification({
        type: "warning",
        message: formatAPIError(err)
      });
    }
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      validationSchema: utils_schema,
      validateOnChange: false,
      initialValues: {
        name: transferToken?.name || "",
        description: transferToken?.description || "",
        lifespan: transferToken?.lifespan ? transferToken.lifespan.toString() : transferToken?.lifespan,
        permissions: transferToken?.permissions.join("-")
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(
        FormHead/* default */.A,
        {
          backUrl: "/settings/transfer-tokens",
          title: {
            id: "Settings.transferTokens.createPage.title",
            defaultMessage: "Create Transfer Token"
          },
          token: transferToken,
          setToken: setTransferToken,
          canEditInputs,
          canRegenerate,
          isSubmitting,
          regenerateUrl: "/admin/transfer/tokens/",
          onErrorRegenerate: handleErrorRegenerate
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, Boolean(transferToken?.name) && /* @__PURE__ */ react.createElement(TokenBox/* default */.A, { token: transferToken?.accessKey, tokenType: constants/* TRANSFER_TOKEN_TYPE */.j }), /* @__PURE__ */ react.createElement(
        components_FormTransferTokenContainer,
        {
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          transferToken
        }
      ))));
    }
  ));
};
/* harmony default export */ const EditView = (TransferTokenCreateView);


/***/ })

}]);