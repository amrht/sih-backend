"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[9298],{

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ useAdminUsers)
});

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/useAdminUsers.js


function useAdminUsers(params = {}, queryOptions = {}) {
  const { id = "", ...queryParams } = params;
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { data, isError, isLoading, refetch } = (0,es.useQuery)(
    ["users", id, queryParams],
    async () => {
      const {
        data: { data: data2 }
      } = await get(`/admin/users/${id}`, {
        params: queryParams
      });
      return data2;
    },
    queryOptions
  );
  let users = [];
  if (id && data) {
    users = [data];
  } else if (Array.isArray(data?.results)) {
    users = data.results;
  }
  return {
    users,
    pagination: data?.pagination ?? null,
    isLoading,
    isError,
    refetch
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js



/***/ }),

/***/ 86209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
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
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(10440);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(44383);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(289);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(74090);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(80005);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/MagicLink/index.js
var components_MagicLink = __webpack_require__(94844);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(85842);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(84241);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/api.js

const putUser = async (id, body) => {
  const { put } = (0,helper_plugin_esm/* getFetchClient */.GD)();
  const { data } = await put(`/admin/users/${id}`, body);
  return data.data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/index.js



















const fieldsToPick = ["email", "firstname", "lastname", "username", "isActive", "roles"];
const EditPage = ({ canUpdate }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.W5)("/settings/users/:id");
  const { push } = (0,react_router/* useHistory */.W6)();
  const { setUserDisplayName } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const MagicLink = (0,useEnterprise/* useEnterprise */.h)(
    components_MagicLink/* MagicLinkCE */.g,
    async () => (await __webpack_require__.e(/* import() */ 9034).then(__webpack_require__.bind(__webpack_require__, 69034))).MagicLinkEE
  );
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const {
    users: [user],
    isLoading: isLoadingAdminUsers
  } = (0,useAdminUsers/* useAdminUsers */.F)(
    { id },
    {
      cacheTime: 0,
      onError(error) {
        const { status } = error.response;
        if (status === 403) {
          toggleNotification({
            type: "info",
            message: {
              id: "notification.permission.not-allowed-read",
              defaultMessage: "You are not allowed to see this document"
            }
          });
          push("/");
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    lockApp();
    try {
      const data = await putUser(id, omit_default()(body, "confirmPassword"));
      toggleNotification({
        type: "success",
        message: formatMessage({ id: "notification.success.saved", defaultMessage: "Saved" })
      });
      const userInfos = helper_plugin_esm/* auth */.j2.getUserInfo();
      if (id.toString() === userInfos.id.toString()) {
        helper_plugin_esm/* auth */.j2.setUserInfo(data);
        const userDisplayName = get_default()(body, "username") || (0,utils/* getFullName */.dS)(body.firstname, body.lastname);
        setUserDisplayName(userDisplayName);
      }
      actions.setValues(pick_default()(body, fieldsToPick));
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.N_)(err.response.data);
      const fieldsErrors = Object.keys(errors).reduce((acc, current) => {
        acc[current] = errors[current].id;
        return acc;
      }, {});
      actions.setErrors(fieldsErrors);
      toggleNotification({
        type: "warning",
        message: get_default()(err, "response.data.error.message", "notification.error")
      });
    }
    unlockApp();
  };
  const isLoading = isLoadingAdminUsers || !MagicLink;
  const headerLabel = isLoading ? { id: "app.containers.Users.EditPage.header.label-loading", defaultMessage: "Edit user" } : { id: "app.containers.Users.EditPage.header.label", defaultMessage: "Edit {name}" };
  const initialData = Object.keys(pick_default()(user, fieldsToPick)).reduce((acc, current) => {
    if (current === "roles") {
      acc[current] = (user?.roles || []).map(({ id: id2 }) => id2);
      return acc;
    }
    acc[current] = user?.[current];
    return acc;
  }, {});
  const headerLabelName = initialData.username || (0,utils/* getFullName */.dS)(initialData.firstname, initialData.lastname);
  const title = formatMessage(headerLabel, { name: headerLabelName });
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Users" }), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.$, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
        title,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null), to: "/settings/users?pageSize=10&page=1&sort=firstname" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Users" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      onSubmit: handleSubmit,
      initialValues: initialData,
      validateOnChange: false,
      validationSchema: users/* editValidation */.Gd
    },
    ({ errors, values, handleChange, isSubmitting, dirty }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.Q,
        {
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.$,
            {
              disabled: isSubmitting || !canUpdate ? true : !dirty,
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null),
              loading: isSubmitting,
              type: "submit",
              size: "L"
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          ),
          title,
          navigationAction: /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* Link */.N_,
            {
              startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null),
              to: "/settings/users?pageSize=10&page=1&sort=firstname"
            },
            formatMessage({
              id: "global.back",
              defaultMessage: "Back"
            })
          )
        }
      ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, user?.registrationToken && /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(MagicLink, { registrationToken: user.registrationToken })), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
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
          id: "app.components.Users.ModalCreateBody.block-title.details",
          defaultMessage: "Details"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, utils_layout.map((row) => {
          return row.map((input) => {
            return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
              helper_plugin_esm/* GenericInput */.ah,
              {
                ...input,
                disabled: !canUpdate,
                error: errors[input.name],
                onChange: handleChange,
                value: values[input.name] || ""
              }
            ));
          });
        })))
      ), /* @__PURE__ */ react.createElement(
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
          id: "global.roles",
          defaultMessage: "User's role"
        })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
          SelectRoles/* default */.A,
          {
            disabled: !canUpdate,
            error: errors.roles,
            onChange: handleChange,
            value: values.roles
          }
        ))))
      ))));
    }
  ));
};
EditPage.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const Users_EditPage = (EditPage);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedEditPage/index.js






const ProtectedEditPage = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const memoizedPermissions = react.useMemo(
    () => ({
      read: permissions.settings.users.read,
      update: permissions.settings.users.update
    }),
    [permissions.settings.users]
  );
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(memoizedPermissions);
  const { state } = (0,react_router/* useLocation */.zy)();
  const from = state?.from ?? "/";
  (0,react.useEffect)(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.rd, { to: from });
  }
  return /* @__PURE__ */ react.createElement(Users_EditPage, { canUpdate });
};
/* harmony default export */ const Users_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 16888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1919);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40203);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);






const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .iD)();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .bQ,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .K, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { fontSize: 32 } }, "\u2709\uFE0F"),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 94844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ MagicLinkCE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6442);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13275);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16888);





const MagicLinkCE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLinkCE.defaultProps = {
  registrationToken: ""
};
MagicLinkCE.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};


/***/ }),

/***/ 85842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28753);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39410);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37149);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40948);








const rotation = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .keyframes */ .i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null));
const fetchData = async () => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .getFetchClient */ .GD)();
  const { data } = await get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .l,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, { key: role.id, value: role.id.toString() }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 84241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gd: () => (/* reexport */ edit),
  pK: () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(20627);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js


const commonUserSchema = {
  firstname: es/* string */.Yj().trim().required(helper_plugin_esm/* translatedErrors */.iW.required),
  lastname: es/* string */.Yj(),
  email: es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).lowercase().required(helper_plugin_esm/* translatedErrors */.iW.required),
  username: es/* string */.Yj().nullable(),
  password: es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).oneOf([es/* ref */.KR("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : passSchema;
  })
};
const schema = {
  ...commonUserSchema,
  currentPassword: es/* string */.Yj().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : passSchema;
  }),
  preferedLanguage: es/* string */.Yj().nullable()
};
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: es/* array */.YO().min(1, helper_plugin_esm/* translatedErrors */.iW.required).required(helper_plugin_esm/* translatedErrors */.iW.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js



const edit_schema = es/* object */.Ik().shape({
  ...commonUserSchema,
  isActive: es/* bool */.lc(),
  ...roles
});
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ }),

/***/ 10440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ })

}]);