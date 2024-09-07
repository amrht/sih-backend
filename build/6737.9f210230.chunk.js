"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6737],{

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

/***/ 26737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginEE: () => (/* binding */ LoginEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87795);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17715);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6803);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17937);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6442);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40948);
/* harmony import */ var _admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37198);
/* harmony import */ var _admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62093);
/* harmony import */ var _hooks_useAuthProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86085);
/* harmony import */ var _Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40811);









const DividerFull = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Divider */ .c))`
  flex: 1;
`;
const LoginEE = (loginProps) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();
  const { isLoading, providers } = (0,_hooks_useAuthProviders__WEBPACK_IMPORTED_MODULE_3__/* .useAuthProviders */ .E)({
    enabled: window.strapi.features.isEnabled(window.strapi.features.SSO)
  });
  if (!window.strapi.features.isEnabled(window.strapi.features.SSO) || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { ...loginProps }));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { ...loginProps }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { paddingTop: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .s, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .a, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.divider" }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, { providers, displayAllProviders: false })))));
};
LoginEE.defaultProps = {
  onSubmit: (e) => e.preventDefault(),
  requestError: null
};
LoginEE.propTypes = {
  formErrors: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  modifiedData: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  requestError: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
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


/***/ })

}]);