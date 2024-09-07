"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[43],{

/***/ 57306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useDocumentation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36042);
/* harmony import */ var _utils_getTrad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42691);





const useDocumentation = () => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const { del, post, put, get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .ry)();
  const { formatAPIError } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useAPIErrorHandler */ .wq)();
  const { isLoading, isError, data, refetch, error } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["get-documentation", _pluginId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
    async () => {
      const { data: data2 } = await get(`/${_pluginId__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A}/getInfos`);
      return data2;
    }
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isError && error) {
      toggleNotification({
        type: "warning",
        message: error ? formatAPIError(error) : { id: "notification.error" }
      });
    }
  }, [isError, error, toggleNotification, formatAPIError]);
  const handleError = (err) => {
    toggleNotification({
      type: "warning",
      message: formatAPIError(err)
    });
  };
  const handleSuccess = (type, tradId, defaultMessage) => {
    refetch();
    toggleNotification({
      type,
      message: { id: (0,_utils_getTrad__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(tradId), defaultMessage }
    });
  };
  const deleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(
    ({ prefix, version }) => del(`${prefix}/deleteDoc/${version}`),
    {
      onSuccess: () => handleSuccess("info", "notification.delete.success", "Successfully deleted documentation"),
      onError: handleError
    }
  );
  const submit = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(({ prefix, body }) => put(`${prefix}/updateSettings`, body), {
    onSuccess: () => handleSuccess("success", "notification.update.success", "Successfully updated settings"),
    onError: handleError
  });
  const regenerate = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(
    ({ prefix, version }) => post(`${prefix}/regenerateDoc`, { version }),
    {
      onSuccess: () => handleSuccess(
        "info",
        "notification.generate.success",
        "Successfully generated documentation"
      ),
      onError: handleError
    }
  );
  return { data, isLoading, isError, remove: deleteMutation, submit, regenerate };
};


/***/ }),

/***/ 66728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45171);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65813);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48921);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7480);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17715);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6803);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17937);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99525);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49583);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14591);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94285);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95844);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(94995);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90687);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6442);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40948);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20627);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43991);
/* harmony import */ var _hooks_useDocumentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57306);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35936);











const schema = yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({
  restrictedAccess: yup__WEBPACK_IMPORTED_MODULE_3__/* .boolean */ .zM(),
  password: yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().when("restrictedAccess", (value, initSchema) => {
    return value ? initSchema.required(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .translatedErrors */ .iW.required) : initSchema;
  })
});
const SettingsPage = () => {
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWhenNavigate */ .L4)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();
  const { submit, data, isLoading } = (0,_hooks_useDocumentation__WEBPACK_IMPORTED_MODULE_5__/* .useDocumentation */ .E)();
  const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { allowedActions } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useRBAC */ .ec)(_constants__WEBPACK_IMPORTED_MODULE_4__/* .PERMISSIONS */ .J);
  const handleUpdateSettingsSubmit = (body) => {
    submit.mutate({
      prefix: data?.prefix,
      body
    });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Main */ .g, null, isLoading ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIndicatorPage */ .Bl, null, "Plugin settings are loading") : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .l1,
    {
      initialValues: {
        restrictedAccess: data?.documentationAccess.restrictedAccess || false,
        password: ""
      },
      onSubmit: handleUpdateSettingsSubmit,
      validationSchema: schema
    },
    ({
      handleSubmit,
      values,
      handleChange,
      errors,
      setFieldTouched,
      setFieldValue,
      dirty
    }) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .Form */ .lV, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .HeaderLayout */ .Q,
        {
          title: formatMessage({
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .g)("plugin.name"),
            defaultMessage: "Documentation"
          }),
          subtitle: formatMessage({
            id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .g)("pages.SettingsPage.header.description"),
            defaultMessage: "Configure the documentation plugin"
          }),
          primaryAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .$,
            {
              type: "submit",
              startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null),
              disabled: !dirty && allowedActions.canUpdate
            },
            formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .g)("pages.SettingsPage.Button.save"),
              defaultMessage: "Save"
            })
          )
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .ContentLayout */ .s, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .a,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Typography */ .o, { variant: "delta", as: "h2" }, formatMessage({
          id: "global.settings",
          defaultMessage: "Settings"
        })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Grid */ .x, { gap: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .GridItem */ .E, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_18__/* .ToggleInput */ .l,
          {
            name: "restrictedAccess",
            label: formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .g)("pages.SettingsPage.toggle.label"),
              defaultMessage: "Restricted Access"
            }),
            hint: formatMessage({
              id: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTrad */ .g)("pages.SettingsPage.toggle.hint"),
              defaultMessage: "Make the documentation endpoint private"
            }),
            checked: values.restrictedAccess,
            onChange: () => {
              if (values.restrictedAccess === true) {
                setFieldValue("password", "", false);
                setFieldTouched("password", false, false);
              }
              setFieldValue("restrictedAccess", !values.restrictedAccess, false);
            },
            onLabel: "On",
            offLabel: "Off"
          }
        )), values.restrictedAccess && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .GridItem */ .E, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .k,
          {
            label: formatMessage({
              id: "global.password",
              defaultMessage: "Password"
            }),
            name: "password",
            placeholder: "**********",
            type: passwordShown ? "text" : "password",
            value: values.password,
            onChange: handleChange,
            error: errors.password ? formatMessage({
              id: errors.password,
              defaultMessage: "Invalid value"
            }) : null,
            endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              FieldActionWrapper,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  passwordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                )
              },
              passwordShown ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, null) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, null)
            )
          }
        ))))
      )));
    }
  ));
};
const FieldActionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_23__/* .FieldAction */ .T))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);


/***/ }),

/***/ 42691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36042);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 35936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* reexport safe */ _getTrad__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _getTrad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42691);



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