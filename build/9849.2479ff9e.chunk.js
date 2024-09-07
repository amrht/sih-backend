"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[9849],{

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

/***/ 59849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSeatInfoEE: () => (/* binding */ AdminSeatInfoEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88888);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17937);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6803);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91675);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46699);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96808);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5392);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28325);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69733);
/* harmony import */ var _admin_src_pages_App_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71526);
/* harmony import */ var _hooks_useLicenseLimits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20022);









const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const AdminSeatInfoEE = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .d4)(_admin_src_pages_App_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectAdminPermissions */ .G);
  const {
    isLoading: isRBACLoading,
    allowedActions: { canRead, canCreate, canUpdate, canDelete }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useRBAC */ .ec)(permissions.settings.users);
  const {
    license: { licenseLimitStatus, enforcementUserCount, permittedSeats, isHostedOnStrapiCloud },
    isError,
    isLoading: isLicenseLoading
  } = (0,_hooks_useLicenseLimits__WEBPACK_IMPORTED_MODULE_4__/* .useLicenseLimits */ .b)({
    // TODO: this creates a waterfall which we should avoid to render earlier, but for that
    // we will have to move away from data-fetching hooks to query functions.
    // Short-term we could at least implement a loader, for the user to have visual feedback
    // in case the requests take a while
    enabled: !isRBACLoading && canRead && canCreate && canUpdate && canDelete
  });
  const isLoading = isRBACLoading || isLicenseLoading;
  if (isError || isLoading || !permittedSeats) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .E, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "Settings.application.admin-seats",
    defaultMessage: "Admin seats"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .s, { gap: 2 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .s, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .o, { as: "p" }, formatMessage(
    {
      id: "Settings.application.ee.admin-seats.count",
      defaultMessage: "<text>{enforcementUserCount}</text>/{permittedSeats}"
    },
    {
      permittedSeats,
      enforcementUserCount,
      // eslint-disable-next-line react/no-unstable-nested-components
      text: (chunks) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .o,
        {
          fontWeight: "semiBold",
          textColor: enforcementUserCount > permittedSeats ? "danger500" : null
        },
        chunks
      )
    }
  ))), licenseLimitStatus === "OVER_LIMIT" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Tooltip */ .m,
    {
      description: formatMessage({
        id: "Settings.application.ee.admin-seats.at-limit-tooltip",
        defaultMessage: "At limit: add seats to invite more users"
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Icon */ .I,
      {
        width: `${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(14)}rem`,
        height: `${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(14)}rem`,
        color: "danger500",
        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A
      }
    )
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_12__/* .Link */ .N,
    {
      href: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
      isExternal: true,
      endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null)
    },
    formatMessage(
      {
        id: "Settings.application.ee.admin-seats.add-seats",
        defaultMessage: "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"
      },
      { isHostedOnStrapiCloud }
    )
  ));
};


/***/ })

}]);