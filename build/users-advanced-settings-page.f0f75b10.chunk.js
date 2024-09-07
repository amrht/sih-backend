"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[8754],{

/***/ 1382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdvancedSettings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(99759);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(28753);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(39410);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(69224);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(46215);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js

const layout = [
  {
    intlLabel: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.label.email"),
      defaultMessage: "One account per email address"
    },
    description: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.description.email"),
      defaultMessage: "Disallow the user to create multiple accounts using the same email address with different authentication providers."
    },
    name: "unique_email",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.label.sign-up"),
      defaultMessage: "Enable sign-ups"
    },
    description: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.description.sign-up"),
      defaultMessage: "When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."
    },
    name: "allow_register",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.label.email-reset-password"),
      defaultMessage: "Reset password page"
    },
    description: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.description.email-reset-password"),
      defaultMessage: "URL of your application's reset password page."
    },
    placeholder: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.placeholder.email-reset-password"),
      defaultMessage: "ex: https://youtfrontend.com/reset-password"
    },
    name: "email_reset_password",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.label.email-confirmation"),
      defaultMessage: "Enable email confirmation"
    },
    description: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.description.email-confirmation"),
      defaultMessage: "When enabled (ON), new registered users receive a confirmation email."
    },
    name: "email_confirmation",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.label.email-confirmation-redirection"),
      defaultMessage: "Redirection url"
    },
    description: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.description.email-confirmation-redirection"),
      defaultMessage: "After you confirmed your email, choose where you will be redirected."
    },
    placeholder: {
      id: (0,utils/* getTrad */.gT)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),
      defaultMessage: "ex: https://youtfrontend.com/email-confirmation"
    },
    name: "email_confirmation_redirection",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  }
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js


const URL_REGEX = new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");
const schema = yup_es/* object */.Ik().shape({
  email_confirmation_redirection: yup_es/* mixed */.gl().when("email_confirmation", {
    is: true,
    then: yup_es/* string */.Yj().matches(URL_REGEX).required(),
    otherwise: yup_es/* string */.Yj().nullable()
  }),
  email_reset_password: yup_es/* string */.Yj(helper_plugin_esm/* translatedErrors */.iW.string).matches(URL_REGEX, helper_plugin_esm/* translatedErrors */.iW.regex).nullable()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js











const ProtectedAdvancedSettingsPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.readAdvancedSettings }, /* @__PURE__ */ react.createElement(AdvancedSettingsPage, null));
const AdvancedSettingsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const queryClient = (0,es.useQueryClient)();
  const { get, put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin_esm/* useRBAC */.ec)({ update: constants/* PERMISSIONS */.J.updateAdvancedSettings });
  const { isLoading: isLoadingData, data } = (0,es.useQuery)(
    ["users-permissions", "advanced"],
    async () => {
      const { data: data2 } = await get("/users-permissions/advanced");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,utils/* getTrad */.gT)("Form.advancedSettings.data.loaded"),
            defaultMessage: "Advanced settings data has been loaded"
          })
        );
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.gT)("notification.error"), defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const submitMutation = (0,es.useMutation)((body) => put("/users-permissions/advanced", body), {
    async onSuccess() {
      await queryClient.invalidateQueries(["users-permissions", "advanced"]);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.gT)("notification.success.saved"), defaultMessage: "Saved" }
      });
      unlockApp();
    },
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = async (body) => {
    lockApp();
    submitMutation.mutate({
      ...body,
      email_confirmation_redirection: body.email_confirmation ? body.email_confirmation_redirection : ""
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* SettingsPageTitle */.x7,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.gT)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.gT)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* SettingsPageTitle */.x7,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.gT)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      onSubmit: handleSubmit,
      initialValues: data.settings,
      validateOnChange: false,
      validationSchema: utils_schema,
      enableReinitialize: true
    },
    ({ errors, values, handleChange, isSubmitting, dirty }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.Q,
        {
          title: formatMessage({
            id: (0,utils/* getTrad */.gT)("HeaderNav.link.advancedSettings"),
            defaultMessage: "Advanced Settings"
          }),
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.$,
            {
              loading: isSubmitting,
              type: "submit",
              disabled: canUpdate ? !dirty : !canUpdate,
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null),
              size: "S"
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          )
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(
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
          id: "global.settings",
          defaultMessage: "Settings"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          Select/* Select */.l,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.gT)("EditForm.inputSelect.label.role"),
              defaultMessage: "Default role for authenticated users"
            }),
            value: values.default_role,
            hint: formatMessage({
              id: (0,utils/* getTrad */.gT)("EditForm.inputSelect.description.role"),
              defaultMessage: "It will attach the new authenticated user to the selected role."
            }),
            onChange: (e) => handleChange({ target: { name: "default_role", value: e } })
          },
          data.roles.map((role) => {
            return /* @__PURE__ */ react.createElement(Option/* Option */.c, { key: role.type, value: role.type }, role.name);
          })
        )), utils_layout.map((input) => {
          let value = values[input.name];
          if (!value) {
            value = input.type === "bool" ? false : "";
          }
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* GenericInput */.ah,
            {
              ...input,
              value,
              error: errors[input.name],
              disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
              onChange: handleChange
            }
          ));
        })))
      )));
    }
  ));
};
/* harmony default export */ const AdvancedSettings = (ProtectedAdvancedSettingsPage);


/***/ }),

/***/ 46215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mr: () => (/* reexport */ utils_cleanPermissions),
  gT: () => (/* reexport */ getTrad/* default */.A)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(62193);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (isEmpty_default()(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (isEmpty_default()(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js + 1 modules
var getTrad = __webpack_require__(34075);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js





/***/ }),

/***/ 7480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ContentLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17715);



const ContentLayout = ({ children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingLeft: 10, paddingRight: 10, children: children }));
};




/***/ }),

/***/ 65813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ HeaderLayout)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.mjs


const useElementOnScreen = (options) => {
    const containerRef = (0,react.useRef)(null);
    const [isVisible, setIsVisible] = (0,react.useState)(true);
    const callback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };
    (0,react.useEffect)(() => {
        const containerEl = containerRef.current;
        const observer = new IntersectionObserver(callback, options);
        if (containerEl) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerEl) {
                observer.disconnect();
            }
        };
    }, [containerRef, options]);
    return [containerRef, isVisible];
};



// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(10263);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.mjs



const useResizeObserver = (sources, onResize) => {
    const handleResize = (0,dist/* useCallbackRef */.c)(onResize);
    (0,react.useLayoutEffect)(() => {
        const resizeObs = new ResizeObserver(handleResize);
        if (Array.isArray(sources)) {
            sources.forEach((source) => {
                if (source.current) {
                    resizeObs.observe(source.current);
                }
            });
        }
        else if (sources.current) {
            resizeObs.observe(sources.current);
        }
        return () => {
            resizeObs.disconnect();
        };
    }, [sources, handleResize]);
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs









const HeaderLayout = (props) => {
    const baseHeaderLayoutRef = (0,react.useRef)(null);
    const [headerSize, setHeaderSize] = (0,react.useState)(null);
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    useResizeObserver(containerRef, () => {
        if (containerRef.current) {
            setHeaderSize(containerRef.current.getBoundingClientRect());
        }
    });
    (0,react.useEffect)(() => {
        if (baseHeaderLayoutRef.current) {
            setHeaderSize(baseHeaderLayoutRef.current.getBoundingClientRect());
        }
    }, [baseHeaderLayoutRef]);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: headerSize?.height }, ref: containerRef, children: isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ref: baseHeaderLayoutRef, ...props }) }), !isVisible && (0,jsx_runtime.jsx)(BaseHeaderLayout, { ...props, sticky: true, width: headerSize?.width })] }));
};
HeaderLayout.displayName = 'HeaderLayout';
const StickyBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a)) `
  width: ${({ width }) => (width ? `${width / 16}rem` : undefined)};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
const BaseHeaderLayout = react.forwardRef(({ navigationAction, primaryAction, secondaryAction, subtitle, title, sticky, width, ...props }, ref) => {
    const isSubtitleString = typeof subtitle === 'string';
    if (sticky) {
        return ((0,jsx_runtime.jsx)(StickyBox, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: width, "data-strapi-header-sticky": true, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [navigationAction && (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingRight: 3, children: navigationAction }), (0,jsx_runtime.jsxs)(Box/* Box */.a, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "beta", as: "h1", ...props, children: title }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: subtitle })) : (subtitle)] }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 4, children: secondaryAction }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: primaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 2, children: primaryAction }) : undefined })] }) }));
    }
    return ((0,jsx_runtime.jsxs)(Box/* Box */.a, { ref: ref, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: navigationAction ? 6 : 8, background: "neutral100", "data-strapi-header": true, children: [navigationAction ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 2, children: navigationAction }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.s, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "h1", variant: "alpha", ...props, children: title }), secondaryAction ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 4, children: secondaryAction }) : null] }), primaryAction] }), isSubtitleString ? ((0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600", as: "p", children: subtitle })) : (subtitle)] }));
});




/***/ }),

/***/ 45171:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40948);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17715);




const MainWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a)) `
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;
const Main = ({ labelledBy = 'main-content-title', ...props }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainWrapper, { "aria-labelledby": labelledBy, as: "main", id: "main-content", tabIndex: -1, ...props });
};




/***/ })

}]);