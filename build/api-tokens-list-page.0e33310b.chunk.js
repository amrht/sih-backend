"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[1007],{

/***/ 12186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tokens_Table)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(90667);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(4293);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(39594);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/DeleteButton/index.js






const DeleteButton = ({ tokenName, onClickDelete, tokenType }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleClickDelete = () => {
    setShowConfirmDialog(false);
    trackUsage("willDeleteToken", {
      tokenType
    });
    onClickDelete();
  };
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 1, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      onClick: () => {
        setShowConfirmDialog(true);
      },
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: "Delete {target}"
        },
        { target: `${tokenName}` }
      ),
      name: "delete",
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null)
    }
  ), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleClickDelete,
      isOpen: showConfirmDialog
    }
  ));
};
DeleteButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  onClickDelete: (prop_types_default()).func.isRequired,
  tokenType: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Table_DeleteButton = (DeleteButton);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.mjs
var Eye = __webpack_require__(94995);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/DefaultButton/index.js






const MESSAGES_MAP = {
  edit: {
    id: "app.component.table.edit",
    defaultMessage: "Edit {target}"
  },
  read: {
    id: "app.component.table.read",
    defaultMessage: "Read {target}"
  }
};
const LinkStyled = (0,styled_components_browser_esm/* default */.Ay)((0,helper_plugin_esm/* Link */.N_))`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const DefaultButton = ({ tokenName, tokenId, buttonType, children }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const {
    location: { pathname }
  } = (0,react_router/* useHistory */.W6)();
  return /* @__PURE__ */ react.createElement(
    LinkStyled,
    {
      to: `${pathname}/${tokenId}`,
      title: formatMessage(MESSAGES_MAP[buttonType], { target: tokenName })
    },
    children
  );
};
DefaultButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  buttonType: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
DefaultButton.defaultProps = {
  buttonType: "edit"
};
/* harmony default export */ const Table_DefaultButton = (DefaultButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/ReadButton/index.js




const ReadButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(Table_DefaultButton, { tokenName, tokenId, buttonType: "read" }, /* @__PURE__ */ react.createElement(Eye/* default */.A, null));
};
ReadButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const Table_ReadButton = (ReadButton);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(87455);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/UpdateButton/index.js




const UpdateButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(Table_DefaultButton, { tokenName, tokenId }, /* @__PURE__ */ react.createElement(Pencil/* default */.A, null));
};
UpdateButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const Table_UpdateButton = (UpdateButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/index.js









const Table = ({
  permissions,
  headers,
  contentType,
  isLoading,
  tokens,
  onConfirmDelete,
  tokenType
}) => {
  const { canDelete, canUpdate, canRead } = permissions;
  const withBulkActions = canDelete || canUpdate || canRead;
  const [{ query }] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [, sortOrder] = query ? query.sort.split(":") : "ASC";
  const {
    push,
    location: { pathname }
  } = (0,react_router/* useHistory */.W6)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const sortedTokens = tokens.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparison : comparison;
  });
  return /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* DynamicTable */.Ee,
    {
      headers,
      contentType,
      rows: tokens,
      withBulkActions,
      isLoading,
      onConfirmDelete
    },
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, sortedTokens.map((token) => {
      return /* @__PURE__ */ react.createElement(
        Tr.Tr,
        {
          key: token.id,
          ...(0,helper_plugin_esm/* onRowClick */.qM)({
            fn() {
              trackUsage("willEditTokenFromList", {
                tokenType
              });
              push(`${pathname}/${token.id}`);
            },
            condition: canUpdate
          })
        },
        /* @__PURE__ */ react.createElement(Cell.Td, { maxWidth: (0,helper_plugin_esm/* pxToRem */.a8)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", fontWeight: "bold", ellipsis: true }, token.name)),
        /* @__PURE__ */ react.createElement(Cell.Td, { maxWidth: (0,helper_plugin_esm/* pxToRem */.a8)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", ellipsis: true }, token.description)),
        /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* RelativeTime */.sR, { timestamp: new Date(token.createdAt) }))),
        /* @__PURE__ */ react.createElement(Cell.Td, null, token.lastUsedAt && /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(
          helper_plugin_esm/* RelativeTime */.sR,
          {
            timestamp: new Date(token.lastUsedAt),
            customIntervals: [
              {
                unit: "hours",
                threshold: 1,
                text: formatMessage({
                  id: "Settings.apiTokens.lastHour",
                  defaultMessage: "last hour"
                })
              }
            ]
          }
        ))),
        withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "end" }, canUpdate && /* @__PURE__ */ react.createElement(Table_UpdateButton, { tokenName: token.name, tokenId: token.id }), !canUpdate && canRead && /* @__PURE__ */ react.createElement(Table_ReadButton, { tokenName: token.name, tokenId: token.id }), canDelete && /* @__PURE__ */ react.createElement(
          Table_DeleteButton,
          {
            tokenName: token.name,
            onClickDelete: () => onConfirmDelete(token.id),
            tokenType
          }
        )))
      );
    }))
  );
};
Table.propTypes = {
  tokens: (prop_types_default()).array,
  permissions: prop_types_default().shape({
    canRead: (prop_types_default()).bool,
    canDelete: (prop_types_default()).bool,
    canUpdate: (prop_types_default()).bool
  }).isRequired,
  headers: prop_types_default().arrayOf(
    prop_types_default().shape({
      cellFormatter: (prop_types_default()).func,
      key: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({
        label: (prop_types_default()).string.isRequired,
        sortable: (prop_types_default()).bool
      }).isRequired,
      name: (prop_types_default()).string.isRequired
    })
  ),
  contentType: (prop_types_default()).string.isRequired,
  isLoading: (prop_types_default()).bool,
  onConfirmDelete: (prop_types_default()).func,
  tokenType: (prop_types_default()).string.isRequired
};
Table.defaultProps = {
  tokens: [],
  headers: [],
  isLoading: false,
  onConfirmDelete() {
  }
};
/* harmony default export */ const Tokens_Table = (Table);


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

/***/ 48977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(45072);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(55286);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/index.js + 4 modules
var Table = __webpack_require__(12186);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/index.js













const ApiTokenListView = () => {
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const queryClient = (0,react_query_es.useQueryClient)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(permissions.settings["api-tokens"]);
  const { push } = (0,react_router/* useHistory */.W6)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { startSection } = (0,helper_plugin_esm/* useGuidedTour */.Cx)();
  const startSectionRef = react.useRef(startSection);
  const { get, del } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  react.useEffect(() => {
    if (startSectionRef.current) {
      startSectionRef.current("apiTokens");
    }
  }, []);
  react.useEffect(() => {
    push({ search: lib_default().stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const { data: apiTokens, isLoading: isLoadingTokens } = (0,react_query_es.useQuery)(
    ["api-tokens"],
    async () => {
      trackUsage("willAccessTokenList", {
        tokenType: constants/* API_TOKEN_TYPE */.I
      });
      const {
        data: { data }
      } = await get(`/admin/api-tokens`);
      trackUsage("didAccessTokenList", { number: data.length, tokenType: constants/* API_TOKEN_TYPE */.I });
      return data;
    },
    {
      cacheTime: 0,
      enabled: canRead,
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const isLoading = isLoadingTokens;
  const deleteMutation = (0,react_query_es.useMutation)(
    async (id) => {
      await del(`/admin/api-tokens/${id}`);
    },
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["api-tokens"]);
        trackUsage("didDeleteToken");
      },
      onError(error) {
        toggleNotification({ type: "warning", message: formatAPIError(error) });
      }
    }
  );
  const hasApiTokens = apiTokens && apiTokens.length > 0;
  const shouldDisplayDynamicTable = canRead && hasApiTokens;
  const shouldDisplayNoContent = canRead && !hasApiTokens && !canCreate;
  const shouldDisplayNoContentWithCreationButton = canRead && !hasApiTokens && canCreate;
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
      subtitle: formatMessage({
        id: "Settings.apiTokens.description",
        defaultMessage: "List of generated tokens to consume the API"
      }),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* LinkButton */.z9,
        {
          "data-testid": "create-api-token-button",
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null),
          size: "S",
          onClick: () => trackUsage("willAddTokenFromList", {
            tokenType: constants/* API_TOKEN_TYPE */.I
          }),
          to: "/settings/api-tokens/create"
        },
        formatMessage({
          id: "Settings.apiTokens.create",
          defaultMessage: "Create new API Token"
        })
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, !canRead && /* @__PURE__ */ react.createElement(helper_plugin_esm/* NoPermissions */.UW, null), shouldDisplayDynamicTable && /* @__PURE__ */ react.createElement(
    Table/* default */.A,
    {
      permissions: { canRead, canDelete, canUpdate },
      headers,
      contentType: "api-tokens",
      rows: apiTokens,
      isLoading,
      onConfirmDelete: (id) => deleteMutation.mutateAsync(id),
      tokens: apiTokens,
      tokenType: constants/* API_TOKEN_TYPE */.I
    }
  ), shouldDisplayNoContentWithCreationButton && /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* NoContent */.R1,
    {
      content: {
        id: "Settings.apiTokens.addFirstToken",
        defaultMessage: "Add your first API Token"
      },
      action: /* @__PURE__ */ react.createElement(helper_plugin_esm/* LinkButton */.z9, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), to: "/settings/api-tokens/create" }, formatMessage({
        id: "Settings.apiTokens.addNewToken",
        defaultMessage: "Add new API Token"
      }))
    }
  ), shouldDisplayNoContent && /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* NoContent */.R1,
    {
      content: {
        id: "Settings.apiTokens.emptyStateLayout",
        defaultMessage: "You don\u2019t have any content yet..."
      }
    }
  )));
};
/* harmony default export */ const ListView = (ApiTokenListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ProtectedListView/index.js





const ProtectedApiTokenListView = () => {
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: permissions.settings["api-tokens"].main }, /* @__PURE__ */ react.createElement(ListView, null));
};
/* harmony default export */ const ProtectedListView = (ProtectedApiTokenListView);


/***/ })

}]);