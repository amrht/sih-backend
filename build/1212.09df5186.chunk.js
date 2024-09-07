"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[1212],{

/***/ 86085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useAuthProviders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);



const useAuthProviders = (queryOptions = {}) => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFetchClient */ .ry)();
  const { data, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(
    ["ee", "providers"],
    async () => {
      const { data: data2 } = await get("/admin/providers");
      return data2;
    },
    queryOptions
  );
  const providers = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => data ?? [], [data]);
  return { providers, isLoading };
};


/***/ }),

/***/ 40811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6803);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91675);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17937);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99525);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88888);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54625);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40948);






const SSOButton = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.a`
  width: ${136 / 16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48 / 16}rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({ theme }) => theme.colors.neutral600};
`;
const SSOProvidersWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .s))`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({ theme }) => theme.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
`;
const SSOProviderButton = ({ provider }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .m, { label: provider.displayName }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { href: `${window.strapi.backendURL}/admin/connect/${provider.uid}` }, provider.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: provider.icon, "aria-hidden": true, alt: "", height: "32px" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .o, null, provider.displayName)));
};
SSOProviderButton.propTypes = {
  provider: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    displayName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
    uid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
  }).isRequired
};
const SSOProviders = ({ providers, displayAllProviders }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  if (displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .x, { gap: 4 }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))));
  }
  if (providers.length > 2 && !displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .x, { gap: 4 }, providers.slice(0, 2).map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .E, { col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .m,
      {
        label: formatMessage({
          id: "global.see-more"
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N_, to: "/auth/providers" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": true }, "\u2022\u2022\u2022"))
    )));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProvidersWrapper, { justifyContent: "center" }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { key: provider.uid, provider })));
};
SSOProviders.defaultProps = {
  displayAllProviders: true
};
SSOProviders.propTypes = {
  providers: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)).isRequired,
  displayAllProviders: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSOProviders);


/***/ }),

/***/ 11212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FORMS: () => (/* binding */ FORMS)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(87795);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(13630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(81594);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(37198);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useAuthProviders.js
var useAuthProviders = __webpack_require__(86085);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/SSOProviders.js
var SSOProviders = __webpack_require__(40811);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/index.js










const DividerFull = (0,styled_components_browser_esm/* default */.Ay)((0,Divider/* Divider */.c))`
  flex: 1;
`;
const Providers = () => {
  const { push } = (0,react_router/* useHistory */.W6)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { isLoading, providers } = (0,useAuthProviders/* useAuthProviders */.E)({
    enabled: window.strapi.features.isEnabled(window.strapi.features.SSO)
  });
  const handleClick = () => {
    push("/auth/login");
  };
  if (!window.strapi.features.isEnabled(window.strapi.features.SSO) || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.rd, { to: "/auth/login" });
  }
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha" }, formatMessage({ id: "Auth.form.welcome.title" }))), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.subtitle" })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 7 }, isLoading ? /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({ id: "Auth.login.sso.loading" }))) : /* @__PURE__ */ react.createElement(SSOProviders/* default */.A, { providers }), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, /* @__PURE__ */ react.createElement(DividerFull, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "or" }))), /* @__PURE__ */ react.createElement(DividerFull, null)), /* @__PURE__ */ react.createElement(Button/* Button */.$, { fullWidth: true, size: "L", onClick: handleClick }, formatMessage({ id: "Auth.form.button.login.strapi" })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { to: "/auth/forgot-password" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "pi" }, formatMessage({ id: "Auth.link.forgot-password" })))))));
};
/* harmony default export */ const components_Providers = (Providers);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/constants.js

const FORMS = {
  providers: {
    Component: components_Providers,
    endPoint: null,
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: null,
    inputsPrefix: ""
  }
};


/***/ })

}]);