"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[2076],{

/***/ 13572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_InstalledPluginsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(68154);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(99759);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(76061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(69239);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(33609);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(4293);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(90667);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/hooks/usePlugins/index.js


const usePlugins = (notifyLoad) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  return (0,react_query_es.useQuery)(
    ["plugins"],
    async () => {
      const { data } = await get("/admin/plugins");
      return data;
    },
    {
      onSuccess() {
        if (notifyLoad) {
          notifyLoad();
        }
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js





const Plugins = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const title = formatMessage({
    id: "global.plugins",
    defaultMessage: "Plugins"
  });
  const notifyPluginPageLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: title }
      )
    );
  };
  const { status, data } = usePlugins(notifyPluginPageLoad);
  const isLoading = status !== "success" && status !== "error";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": true }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title,
      subtitle: formatMessage({
        id: "app.components.ListPluginsPage.description",
        defaultMessage: "List of the installed plugins in the project."
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(Table/* Table */.X, { colCount: 2, rowCount: data?.plugins?.length ?? 0 + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.name",
    defaultMessage: "Name"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "description"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, data.plugins.map(({ name, displayName, description }) => {
    return /* @__PURE__ */ react.createElement(Tr.Tr, { key: name }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", variant: "omega", fontWeight: "bold" }, formatMessage({
      id: `global.plugins.${name}`,
      defaultMessage: displayName
    }))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, formatMessage({
      id: `global.plugins.${name}.description`,
      defaultMessage: description
    }))));
  }))))));
};
/* harmony default export */ const InstalledPluginsPage_Plugins = (Plugins);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/index.js







const InstalledPluginsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: permissions.marketplace.main }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.m,
    {
      title: formatMessage({
        id: "global.plugins",
        defaultMessage: "Plugins"
      })
    }
  ), /* @__PURE__ */ react.createElement(InstalledPluginsPage_Plugins, null));
};
/* harmony default export */ const pages_InstalledPluginsPage = (InstalledPluginsPage);


/***/ }),

/***/ 76061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40948);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17715);




const GridContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a)) `
  display: grid;
  grid-template-columns: ${({ hasSideNav }) => (hasSideNav ? `auto 1fr` : '1fr')};
`;
const OverflowingItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a)) `
  overflow-x: hidden;
`;
const Layout = ({ sideNav, children }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, { hasSideNav: Boolean(sideNav), children: [sideNav, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverflowingItem, { paddingBottom: 10, children: children })] }));
};




/***/ })

}]);