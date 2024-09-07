(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6719],{

/***/ 23005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Roles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(69224);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(14591);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(90493);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/contexts/UsersPermissionsContext/index.js


const UsersPermissions = (0,react.createContext)({});
const UsersPermissionsProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(UsersPermissions.Provider, { value }, children);
};
const useUsersPermissions = () => (0,react.useContext)(UsersPermissions);
UsersPermissionsProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: (prop_types_default()).object.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js + 1 modules
var getTrad = __webpack_require__(34075);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(48043);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs + 1 modules
var AccordionToggle = __webpack_require__(60157);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.mjs
var AccordionContent = __webpack_require__(16134);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(55808);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPluginName.js

function formatPluginName(pluginSlug) {
  switch (pluginSlug) {
    case "application":
      return "Application";
    case "plugin::content-manager":
      return "Content manager";
    case "plugin::content-type-builder":
      return "Content types builder";
    case "plugin::documentation":
      return "Documentation";
    case "plugin::email":
      return "Email";
    case "plugin::i18n":
      return "i18n";
    case "plugin::upload":
      return "Upload";
    case "plugin::users-permissions":
      return "Users-permissions";
    default:
      return upperFirst_default()(pluginSlug.replace("api::", "").replace("plugin::", ""));
  }
}
/* harmony default export */ const utils_formatPluginName = (formatPluginName);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/init.js
const init = (initialState, permissions) => {
  const collapses = Object.keys(permissions).sort().map((name) => ({ name, isOpen: false }));
  return { ...initialState, collapses };
};
/* harmony default export */ const Permissions_init = (init);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(33031);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(74427);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(42091);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(26793);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/CheckboxWrapper.js


const activeCheckboxWrapperStyles = (0,styled_components_browser_esm/* css */.AH)`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const PermissionRow_CheckboxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/SubCategory.js









const Border = styled_components_browser_esm/* default */.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const SubCategory = ({ subCategory }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { onChange, onChangeSelectAll, onSelectedAction, selectedAction, modifiedData } = useUsersPermissions();
  const currentScopedModifiedData = (0,react.useMemo)(() => {
    return get_default()(modifiedData, subCategory.name, {});
  }, [modifiedData, subCategory]);
  const hasAllActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).every((action) => action.enabled === true);
  }, [currentScopedModifiedData]);
  const hasSomeActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).some((action) => action.enabled === true) && !hasAllActionsSelected;
  }, [currentScopedModifiedData, hasAllActionsSelected]);
  const handleChangeSelectAll = (0,react.useCallback)(
    ({ target: { name } }) => {
      onChangeSelectAll({ target: { name, value: !hasAllActionsSelected } });
    },
    [hasAllActionsSelected, onChangeSelectAll]
  );
  const isActionSelected = (0,react.useCallback)(
    (actionName) => {
      return selectedAction === actionName;
    },
    [selectedAction]
  );
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "space-between", alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, subCategory.label)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.S,
    {
      name: subCategory.name,
      value: hasAllActionsSelected,
      onValueChange: (value) => handleChangeSelectAll({ target: { name: subCategory.name, value } }),
      indeterminate: hasSomeActionsSelected
    },
    formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 2, style: { flex: 1 } }, subCategory.actions.map((action) => {
    const name = `${action.name}.enabled`;
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, key: action.name }, /* @__PURE__ */ react.createElement(PermissionRow_CheckboxWrapper, { isActive: isActionSelected(action.name), padding: 2, hasRadius: true }, /* @__PURE__ */ react.createElement(
      Checkbox/* Checkbox */.S,
      {
        value: get_default()(modifiedData, name, false),
        name,
        onValueChange: (value) => onChange({ target: { name, value } })
      },
      action.label
    ), /* @__PURE__ */ react.createElement(
      "button",
      {
        type: "button",
        onClick: () => onSelectedAction(action.name),
        style: { display: "inline-flex", alignItems: "center" }
      },
      /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, { as: "span" }, formatMessage(
        {
          id: "app.utils.show-bound-route",
          defaultMessage: "Show bound route for {route}"
        },
        {
          route: action.name
        }
      )),
      /* @__PURE__ */ react.createElement(Cog/* default */.A, null)
    )));
  }))));
};
SubCategory.propTypes = {
  subCategory: (prop_types_default()).object.isRequired
};
/* harmony default export */ const PermissionRow_SubCategory = (SubCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/index.js





const PermissionRow = ({ name, permissions }) => {
  const subCategories = (0,react.useMemo)(() => {
    return sortBy_default()(
      Object.values(permissions.controllers).reduce((acc, curr, index) => {
        const currentName = `${name}.controllers.${Object.keys(permissions.controllers)[index]}`;
        const actions = sortBy_default()(
          Object.keys(curr).reduce((acc2, current) => {
            return [
              ...acc2,
              {
                ...curr[current],
                label: current,
                name: `${currentName}.${current}`
              }
            ];
          }, []),
          "label"
        );
        return [
          ...acc,
          {
            actions,
            label: Object.keys(permissions.controllers)[index],
            name: currentName
          }
        ];
      }, []),
      "label"
    );
  }, [name, permissions]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { padding: 6 }, subCategories.map((subCategory) => /* @__PURE__ */ react.createElement(PermissionRow_SubCategory, { key: subCategory.name, subCategory })));
};
PermissionRow.propTypes = {
  name: (prop_types_default()).string.isRequired,
  permissions: (prop_types_default()).object.isRequired
};
/* harmony default export */ const Permissions_PermissionRow = (PermissionRow);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(41261);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/reducer.js

const initialState = {
  collapses: []
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.Ay)(state, (draftState) => {
    switch (action.type) {
      case "TOGGLE_COLLAPSE": {
        draftState.collapses = state.collapses.map((collapse, index) => {
          if (index === action.index) {
            return { ...collapse, isOpen: !collapse.isOpen };
          }
          return { ...collapse, isOpen: false };
        });
        break;
      }
      default:
        return draftState;
    }
  })
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/index.js








const Permissions = () => {
  const { modifiedData } = useUsersPermissions();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [{ collapses }, dispatch] = (0,react.useReducer)(
    reducer,
    initialState,
    (state) => Permissions_init(state, modifiedData)
  );
  const handleToggle = (index) => dispatch({
    type: "TOGGLE_COLLAPSE",
    index
  });
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, collapses.map((collapse, index) => /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.n,
    {
      expanded: collapse.isOpen,
      onToggle: () => handleToggle(index),
      key: collapse.name,
      variant: index % 2 === 0 ? "secondary" : void 0
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.P,
      {
        title: utils_formatPluginName(collapse.name),
        description: formatMessage(
          {
            id: "users-permissions.Plugin.permissions.plugins.description",
            defaultMessage: "Define all allowed actions for the {name} plugin."
          },
          { name: collapse.name }
        ),
        variant: index % 2 ? "primary" : "secondary"
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.u, null, /* @__PURE__ */ react.createElement(Permissions_PermissionRow, { permissions: modifiedData[collapse.name], name: collapse.name }))
  )));
};
/* harmony default export */ const components_Permissions = (Permissions);

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(62193);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/without.js
var without = __webpack_require__(91648);
var without_default = /*#__PURE__*/__webpack_require__.n(without);
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(55378);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(44384);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/index.js








const MethodBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h3" }, formatMessage({
    id: "users-permissions.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { hasRadius: true, background: "neutral0", borderColor: "neutral200", gap: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Policies/index.js








const Policies = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { selectedAction, routes } = useUsersPermissions();
  const path = without_default()(selectedAction.split("."), "controllers");
  const controllerRoutes = get_default()(routes, path[0]);
  const pathResolved = path.slice(1).join(".");
  const displayedRoutes = isEmpty_default()(controllerRoutes) ? [] : controllerRoutes.filter((o) => o.handler.endsWith(pathResolved));
  return /* @__PURE__ */ react.createElement(
    GridItem/* GridItem */.E,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2 }, displayedRoutes.map((route, key) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ react.createElement(components_BoundRoute, { key, route })
    ))) : /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h3" }, formatMessage({
      id: "users-permissions.Policies.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "users-permissions.Policies.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_Policies = (Policies);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/init.js
const init_init = (state, permissions, routes) => {
  return {
    ...state,
    initialData: permissions,
    modifiedData: permissions,
    routes
  };
};
/* harmony default export */ const UsersPermissions_init = (init_init);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(63560);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(34921);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/reducer.js




const reducer_initialState = {
  initialData: {},
  modifiedData: {},
  routes: {},
  selectedAction: "",
  policies: []
};
const reducer_reducer = (state, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const keysLength = action.keys.length;
      const isChangingCheckbox = action.keys[keysLength - 1] === "enabled";
      if (action.value && isChangingCheckbox) {
        const selectedAction = take_default()(action.keys, keysLength - 1).join(".");
        draftState.selectedAction = selectedAction;
      }
      set_default()(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SELECT_ALL": {
      const pathToValue = ["modifiedData", ...action.keys];
      const oldValues = get_default()(state, pathToValue, {});
      const updatedValues = Object.keys(oldValues).reduce((acc, current) => {
        acc[current] = { ...oldValues[current], enabled: action.value };
        return acc;
      }, {});
      set_default()(draftState, pathToValue, updatedValues);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "SELECT_ACTION": {
      const { actionToSelect } = action;
      draftState.selectedAction = actionToSelect === state.selectedAction ? "" : actionToSelect;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const UsersPermissions_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/index.js










const UsersPermissions_UsersPermissions = (0,react.forwardRef)(({ permissions, routes }, ref) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [state, dispatch] = (0,react.useReducer)(
    UsersPermissions_reducer,
    reducer_initialState,
    (state2) => UsersPermissions_init(state2, permissions, routes)
  );
  (0,react.useImperativeHandle)(ref, () => ({
    getPermissions() {
      return {
        permissions: state.modifiedData
      };
    },
    resetForm() {
      dispatch({ type: "ON_RESET" });
    },
    setFormAfterSubmit() {
      dispatch({ type: "ON_SUBMIT_SUCCEEDED" });
    }
  }));
  const handleChange = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE",
    keys: name.split("."),
    value: value === "empty__string_value" ? "" : value
  });
  const handleChangeSelectAll = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE_SELECT_ALL",
    keys: name.split("."),
    value
  });
  const handleSelectedAction = (actionToSelect) => dispatch({
    type: "SELECT_ACTION",
    actionToSelect
  });
  const providerValue = {
    ...state,
    onChange: handleChange,
    onChangeSelectAll: handleChangeSelectAll,
    onSelectedAction: handleSelectedAction
  };
  return /* @__PURE__ */ react.createElement(UsersPermissionsProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.A)("Plugins.header.title"),
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.A)("Plugins.header.description"),
    defaultMessage: "Only actions bound by a route are listed below."
  }))), /* @__PURE__ */ react.createElement(components_Permissions, null))), /* @__PURE__ */ react.createElement(components_Policies, null)));
});
UsersPermissions_UsersPermissions.propTypes = {
  permissions: (prop_types_default()).object.isRequired,
  routes: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_UsersPermissions = ((0,react.memo)(UsersPermissions_UsersPermissions));

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/constants.js


const createRoleSchema = yup_es/* object */.Ik().shape({
  name: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
  description: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required)
});

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(46215);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/hooks/usePlugins.js




const usePlugins = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)(utils/* getTrad */.gT);
  const [
    {
      data: permissions,
      isLoading: isLoadingPermissions,
      error: permissionsError,
      refetch: refetchPermissions
    },
    { data: routes, isLoading: isLoadingRoutes, error: routesError, refetch: refetchRoutes }
  ] = (0,es.useQueries)([
    {
      queryKey: ["users-permissions", "permissions"],
      async queryFn() {
        const {
          data: { permissions: permissions2 }
        } = await get(`/users-permissions/permissions`);
        return permissions2;
      }
    },
    {
      queryKey: ["users-permissions", "routes"],
      async queryFn() {
        const {
          data: { routes: routes2 }
        } = await get(`/users-permissions/routes`);
        return routes2;
      }
    }
  ]);
  const refetchQueries = async () => {
    await Promise.all([refetchPermissions(), refetchRoutes()]);
  };
  (0,react.useEffect)(() => {
    if (permissionsError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(permissionsError)
      });
    }
  }, [toggleNotification, permissionsError, formatAPIError]);
  (0,react.useEffect)(() => {
    if (routesError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(routesError)
      });
    }
  }, [toggleNotification, routesError, formatAPIError]);
  const isLoading = isLoadingPermissions || isLoadingRoutes;
  return {
    // TODO: these return values need to be memoized, otherwise
    // they will create infinite rendering loops when used as
    // effect dependencies
    permissions: permissions ? (0,utils/* cleanPermissions */.mr)(permissions) : {},
    routes: routes ?? {},
    getData: refetchQueries,
    isLoading
  };
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/CreatePage.js













const CreatePage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { goBack } = (0,react_router/* useHistory */.W6)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { isLoading: isLoadingPlugins, permissions, routes } = usePlugins();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const permissionsRef = react.useRef();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const mutation = (0,es.useMutation)((body) => post(`/users-permissions/roles`, body), {
    onError() {
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    },
    onSuccess() {
      trackUsage("didCreateRole");
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.A)("Settings.roles.created"),
          defaultMessage: "Role created"
        }
      });
      goBack();
    }
  });
  const handleCreateRoleSubmit = async (data) => {
    lockApp();
    const permissions2 = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions2, users: [] });
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues: { name: "", description: "" },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: createRoleSchema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", loading: mutation.isLoading, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.s,
      {
        background: "neutral0",
        direction: "column",
        alignItems: "stretch",
        gap: 7,
        hasRadius: true,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7,
        shadow: "filterShadow"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.A)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.k,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
          required: true
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.T,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors?.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Description is required"
          }) : false,
          required: true
        }
      )))),
      !isLoadingPlugins && /* @__PURE__ */ react.createElement(
        components_UsersPermissions,
        {
          ref: permissionsRef,
          permissions,
          routes
        }
      )
    )))
  ));
};
const ProtectedRolesCreatePage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.createRole }, /* @__PURE__ */ react.createElement(CreatePage, null));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(10440);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/EditPage.js













const EditPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.W5)(`/settings/users-permissions/roles/:id`);
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { isLoading: isLoadingPlugins, routes } = usePlugins();
  const {
    data: role,
    isLoading: isLoadingRole,
    refetch: refetchRole
  } = (0,es.useQuery)(["users-permissions", "role", id], async () => {
    const {
      data: { role: role2 }
    } = await get(`/users-permissions/roles/${id}`);
    return role2;
  });
  const permissionsRef = react.useRef();
  const { put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const mutation = (0,es.useMutation)((body) => put(`/users-permissions/roles/${id}`, body), {
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    },
    async onSuccess() {
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.A)("Settings.roles.created"),
          defaultMessage: "Role edited"
        }
      });
      await refetchRole();
    }
  });
  const handleEditRoleSubmit = async (data) => {
    lockApp();
    const permissions = permissionsRef.current.getPermissions();
    await mutation.mutate({ ...data, ...permissions, users: [] });
    unlockApp();
  };
  if (isLoadingRole) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues: { name: role.name, description: role.description },
      onSubmit: handleEditRoleSubmit,
      validationSchema: createRoleSchema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(
          Button/* Button */.$,
          {
            disabled: role.code === "strapi-super-admin",
            type: "submit",
            loading: mutation.isLoading,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null)
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: role.name,
        subtitle: role.description,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null), to: "/settings/users-permissions/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(
      Flex/* Flex */.s,
      {
        background: "neutral0",
        direction: "column",
        alignItems: "stretch",
        gap: 7,
        hasRadius: true,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7,
        shadow: "filterShadow"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.A)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.k,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors?.name ? formatMessage({ id: errors.name, defaultMessage: "Name is required" }) : false,
          required: true
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.T,
        {
          id: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors?.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Description is required"
          }) : false,
          required: true
        }
      )))),
      !isLoadingPlugins && /* @__PURE__ */ react.createElement(
        components_UsersPermissions,
        {
          ref: permissionsRef,
          permissions: role.permissions,
          routes
        }
      )
    )))
  ));
};
const ProtectedRolesEditPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.updateRole }, /* @__PURE__ */ react.createElement(EditPage, null));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(99759);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(76061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(11663);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(69239);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(33609);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(4293);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(45072);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(11821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(90667);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(87455);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(39594);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/components/TableBody.js








const EditLink = (0,styled_components_browser_esm/* default */.Ay)((0,Link/* Link */.N))`
  align-items: center;
  height: ${(0,helper_plugin_esm/* pxToRem */.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[2]}}`};
  width: ${(0,helper_plugin_esm/* pxToRem */.a8)(32)};

  svg {
    height: ${(0,helper_plugin_esm/* pxToRem */.a8)(12)};
    width: ${(0,helper_plugin_esm/* pxToRem */.a8)(12)};

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
const TableBody = ({ sortedRoles, canDelete, permissions, setRoleToDelete, onDelete }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { push } = (0,react_router/* useHistory */.W6)();
  const [showConfirmDelete, setShowConfirmDelete] = onDelete;
  const checkCanDeleteRole = (role) => canDelete && !["public", "authenticated"].includes(role.type);
  const handleClickDelete = (id) => {
    setRoleToDelete(id);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleClickEdit = (id) => {
    push(`/settings/users-permissions/roles/${id}`);
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, sortedRoles?.map((role) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: role.name, ...(0,helper_plugin_esm/* onRowClick */.qM)({ fn: () => handleClickEdit(role.id) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, role.name)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, role.description)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "30%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage(
    {
      id: "Roles.RoleRow.user-count",
      defaultMessage: "{number, plural, =0 {# user} one {# user} other {# users}}"
    },
    { number: role.nb_users }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "end", ...helper_plugin_esm/* stopPropagation */.dG }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPermissions */.d4, { permissions: permissions.updateRole }, /* @__PURE__ */ react.createElement(
    EditLink,
    {
      to: `/settings/users-permissions/roles/${role.id}`,
      "aria-label": formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: `${role.name}` }
      )
    },
    /* @__PURE__ */ react.createElement(Pencil/* default */.A, null)
  )), checkCanDeleteRole(role) && /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPermissions */.d4, { permissions: permissions.deleteRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      onClick: () => handleClickDelete(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null),
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: `${role.name}` }
      )
    }
  )))))));
};
/* harmony default export */ const components_TableBody = (TableBody);
TableBody.defaultProps = {
  canDelete: false
};
TableBody.propTypes = {
  onDelete: (prop_types_default()).array.isRequired,
  permissions: (prop_types_default()).object.isRequired,
  setRoleToDelete: (prop_types_default()).func.isRequired,
  sortedRoles: (prop_types_default()).array.isRequired,
  canDelete: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/utils/api.js

const fetchData = async (toggleNotification, notifyStatus) => {
  try {
    const { get } = (0,helper_plugin_esm/* getFetchClient */.GD)();
    const { data } = await get("/users-permissions/roles");
    notifyStatus("The roles have loaded successfully");
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error(err);
  }
};
const deleteData = async (id, toggleNotification) => {
  try {
    const { del } = (0,helper_plugin_esm/* getFetchClient */.GD)();
    await del(`/users-permissions/roles/${id}`);
  } catch (error) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error", defaultMessage: "An error occured" }
    });
  }
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/pages/ListPage/index.js










const RolesListPage = () => {
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { formatMessage, locale } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const [{ query }] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const _q = query?._q || "";
  const [showConfirmDelete, setShowConfirmDelete] = (0,react.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react.useState)(false);
  const [roleToDelete, setRoleToDelete] = (0,react.useState)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canRead, canDelete }
  } = (0,helper_plugin_esm/* useRBAC */.ec)({
    create: constants/* PERMISSIONS */.J.createRole,
    read: constants/* PERMISSIONS */.J.readRoles,
    update: constants/* PERMISSIONS */.J.updateRole,
    delete: constants/* PERMISSIONS */.J.deleteRole
  });
  const {
    isLoading: isLoadingForData,
    data: { roles },
    isFetching,
    refetch
  } = (0,es.useQuery)("get-roles", () => fetchData(toggleNotification, notifyStatus), {
    initialData: {},
    enabled: canRead
  });
  const { includes } = (0,helper_plugin_esm/* useFilter */.U2)(locale, {
    sensitivity: "base"
  });
  const formatter = (0,helper_plugin_esm/* useCollator */.QM)(locale, {
    sensitivity: "base"
  });
  const isLoading = isLoadingForData || isFetching;
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const emptyLayout = {
    roles: {
      id: (0,utils/* getTrad */.gT)("Roles.empty"),
      defaultMessage: "You don't have any roles yet."
    },
    search: {
      id: (0,utils/* getTrad */.gT)("Roles.empty.search"),
      defaultMessage: "No roles match the search."
    }
  };
  const pageTitle = formatMessage({
    id: "global.roles",
    defaultMessage: "Roles"
  });
  const deleteMutation = (0,es.useMutation)((id) => deleteData(id, toggleNotification), {
    async onSuccess() {
      await refetch();
    }
  });
  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync(roleToDelete);
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };
  const sortedRoles = (roles || []).filter((role) => includes(role.name, _q) || includes(role.description, _q)).sort(
    (a, b) => formatter.compare(a.name, b.name) || formatter.compare(a.description, b.description)
  );
  const emptyContent = _q && !sortedRoles.length ? "search" : "roles";
  const colCount = 4;
  const rowCount = (roles?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: "global.roles",
        defaultMessage: "Roles"
      }),
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPermissions */.d4, { permissions: constants/* PERMISSIONS */.J.createRole }, /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* LinkButton */.z9,
        {
          to: "/settings/users-permissions/roles/new",
          onClick: () => trackUsage("willCreateRole"),
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null),
          size: "S"
        },
        formatMessage({
          id: (0,utils/* getTrad */.gT)("List.button.roles"),
          defaultMessage: "Add new role"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.B,
    {
      startActions: /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* SearchURLQuery */.q7,
        {
          label: formatMessage({
            id: "app.component.search.label",
            defaultMessage: "Search"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, !canRead && /* @__PURE__ */ react.createElement(helper_plugin_esm/* NoPermissions */.UW, null), (isLoading || isLoadingForPermissions) && /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null), canRead && sortedRoles && sortedRoles?.length ? /* @__PURE__ */ react.createElement(Table/* Table */.X, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "Description"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, formatMessage({
    id: "global.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      sortedRoles,
      canDelete,
      permissions: constants/* PERMISSIONS */.J,
      setRoleToDelete,
      onDelete: [showConfirmDelete, setShowConfirmDelete]
    }
  )) : /* @__PURE__ */ react.createElement(helper_plugin_esm/* EmptyStateLayout */.pA, { content: emptyLayout[emptyContent] })), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      isConfirmButtonLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: handleShowConfirmDelete,
      isOpen: showConfirmDelete
    }
  )));
};
const ProtectedRolesListPage = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.accessRoles }, /* @__PURE__ */ react.createElement(RolesListPage, null));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/index.js







const Roles = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.accessRoles }, /* @__PURE__ */ react.createElement(react_router/* Switch */.dO, null, /* @__PURE__ */ react.createElement(
    react_router/* Route */.qh,
    {
      path: "/settings/users-permissions/roles/new",
      component: ProtectedRolesCreatePage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(
    react_router/* Route */.qh,
    {
      path: "/settings/users-permissions/roles/:id",
      component: ProtectedRolesEditPage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/settings/users-permissions/roles", component: ProtectedRolesListPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "", component: helper_plugin_esm/* AnErrorOccurred */.hH })));
};
/* harmony default export */ const pages_Roles = (Roles);


/***/ }),

/***/ 46215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 15325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(96131);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 29905:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 83915:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(38859),
    arrayIncludes = __webpack_require__(15325),
    arrayIncludesWith = __webpack_require__(29905),
    arrayMap = __webpack_require__(34932),
    baseUnary = __webpack_require__(27301),
    cacheHas = __webpack_require__(19219);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 80909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(30641),
    createBaseEach = __webpack_require__(38329);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 2523:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 96131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(2523),
    baseIsNaN = __webpack_require__(85463),
    strictIndexOf = __webpack_require__(76959);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 85463:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 5128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(80909),
    isArrayLike = __webpack_require__(64894);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 46155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(34932),
    baseGet = __webpack_require__(47422),
    baseIteratee = __webpack_require__(15389),
    baseMap = __webpack_require__(5128),
    baseSortBy = __webpack_require__(73937),
    baseUnary = __webpack_require__(27301),
    compareMultiple = __webpack_require__(43714),
    identity = __webpack_require__(83488),
    isArray = __webpack_require__(56449);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 73937:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 53730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(44394);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 43714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(53730);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 38329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(64894);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 76959:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 55378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(34932),
    baseIteratee = __webpack_require__(15389),
    baseMap = __webpack_require__(5128),
    isArray = __webpack_require__(56449);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 33031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(83120),
    baseOrderBy = __webpack_require__(46155),
    baseRest = __webpack_require__(69302),
    isIterateeCall = __webpack_require__(36800);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 44384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(25160);

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ }),

/***/ 34921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(25160),
    toInteger = __webpack_require__(61489);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ 91648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(83915),
    baseRest = __webpack_require__(69302),
    isArrayLikeObject = __webpack_require__(83693);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ 48043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ AccordionTypography),
/* harmony export */   n: () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40948);
/* harmony import */ var _AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36012);
/* harmony import */ var _hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11961);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17937);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6803);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17715);









const getBorder = ({ theme, expanded, variant, disabled, error }) => {
    if (error) {
        return `1px solid ${theme.colors.danger600} !important`;
    }
    if (disabled) {
        return `1px solid ${theme.colors.neutral150}`;
    }
    if (expanded) {
        return `1px solid ${theme.colors.primary600}`;
    }
    if (variant === 'primary') {
        return `1px solid ${theme.colors.neutral0}`;
    }
    return `1px solid ${theme.colors.neutral100}`;
};
const AccordionTypography = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((0,_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o)) ``;
const AccordionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .a)) `
  border: ${getBorder};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme }) => theme.colors.primary600};

    ${AccordionTypography} {
      color: ${({ theme, expanded }) => (expanded ? undefined : theme.colors.primary700)};
    }

    ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o} {
      color: ${({ theme, expanded }) => (expanded ? undefined : theme.colors.primary600)};
    }

    & > ${_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .s} {
      background: ${({ theme }) => theme.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const Accordion = ({ children, disabled = false, error, expanded = false, hasErrorMessage = true, id, onToggle, toggle, size = 'M', variant = 'primary', shadow, }) => {
    const generatedId = (0,_hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .B)(id);
    const context = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ expanded, onToggle, toggle, id: generatedId, size, variant, disabled }), [disabled, expanded, generatedId, onToggle, size, toggle, variant]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext */ .C.Provider, { value: context, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AccordionWrapper, { "data-strapi-expanded": expanded, disabled: disabled, "aria-disabled": disabled, expanded: expanded, hasRadius: true, variant: variant, error: error, shadow: shadow, children: children }), error && hasErrorMessage && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .a, { paddingTop: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o, { variant: "pi", textColor: "danger600", children: error }) }))] }));
};




/***/ }),

/***/ 16134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ AccordionContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36012);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17715);




const AccordionContent = ({ children, ...props }) => {
    const { expanded, id } = (0,_AccordionContext_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .O)();
    if (!expanded) {
        return null;
    }
    const idContent = `accordion-content-${id}`;
    const ariaLabelId = `accordion-label-${id}`;
    const ariaDescriptionId = `accordion-desc-${id}`;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { role: "region", id: idContent, "aria-labelledby": ariaLabelId, "aria-describedby": ariaDescriptionId, ...props, children: children }));
};




/***/ }),

/***/ 36012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext),
/* harmony export */   O: () => (/* binding */ useAccordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    disabled: false,
    expanded: false,
    id: '',
    size: 'M',
    variant: 'primary',
});
const useAccordion = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccordionContext);




/***/ }),

/***/ 60157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ AccordionToggle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(2711);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.mjs
var Accordion = __webpack_require__(48043);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.mjs
var AccordionContext = __webpack_require__(36012);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.mjs
const getBackground = ({ expanded, disabled, variant, }) => {
    let boxBackground = 'neutral100';
    if (expanded) {
        boxBackground = 'primary100';
    }
    else if (disabled) {
        boxBackground = 'neutral150';
    }
    else if (variant === 'primary') {
        boxBackground = 'neutral0';
    }
    return boxBackground;
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(65299);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(46699);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.mjs











const ToggleButton = (0,styled_components_browser_esm/* default */.Ay)((0,TextButton/* TextButton */.Q)) `
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme, expanded }) => (expanded ? theme.colors.primary600 : theme.colors.neutral500)};
    }
  }
`;
const FlexWithSize = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s)) `
  min-height: ${({ theme, size }) => theme.sizes.accordions[size]};
  border-radius: ${({ theme, expanded }) => expanded ? `${theme.borderRadius} ${theme.borderRadius} 0 0` : theme.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const AccordionToggle = ({ title, description, as = 'span', togglePosition = 'right', action, ...props }) => {
    const { onToggle, toggle, expanded, id, size, variant, disabled } = (0,AccordionContext/* useAccordion */.O)();
    // Accessibility identifiers
    const ariaControls = `accordion-content-${id}`;
    const ariaLabelId = `accordion-label-${id}`;
    const ariaDescriptionId = `accordion-desc-${id}`;
    // Style overrides
    const boxPaddingX = size === 'M' ? 6 : 4;
    const boxPaddingY = size === 'M' ? boxPaddingX : boxPaddingX - 2;
    const boxBackground = getBackground({ expanded, disabled, variant });
    const titleColor = expanded ? 'primary600' : 'neutral700';
    const titleProps = {
        as,
        fontWeight: size === 'S' ? 'bold' : undefined,
        id: ariaLabelId,
        textColor: titleColor,
        ellipsis: true,
        variant: size === 'M' ? 'delta' : undefined,
    };
    const descriptionColor = expanded ? 'primary600' : 'neutral600';
    const iconColor = expanded ? 'primary200' : 'neutral200';
    const iconSize = size === 'M' ? `${32 / 16}rem` : `${24 / 16}rem`;
    const handleToggle = () => {
        if (!disabled) {
            if (toggle && !onToggle) {
                console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead');
                toggle();
            }
            else if (onToggle) {
                onToggle();
            }
        }
    };
    const dropdownIcon = ((0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "center", borderRadius: "50%", height: iconSize, width: iconSize, transform: expanded ? `rotate(180deg)` : undefined, "data-strapi-dropdown": true, "aria-hidden": true, as: "span", background: iconColor, cursor: disabled ? 'not-allowed' : 'pointer', onClick: handleToggle, shrink: 0, children: (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: CarretDown/* default */.A, width: size === 'M' ? `${11 / 16}rem` : `${8 / 16}rem`, color: expanded ? 'primary600' : 'neutral600' }) }));
    return ((0,jsx_runtime.jsx)(FlexWithSize, { paddingBottom: boxPaddingY, paddingLeft: boxPaddingX, paddingRight: boxPaddingX, paddingTop: boxPaddingY, background: boxBackground, expanded: expanded, size: size, justifyContent: "space-between", cursor: disabled ? 'not-allowed' : '', children: (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, flex: 1, maxWidth: "100%", children: [togglePosition === 'left' && dropdownIcon, (0,jsx_runtime.jsx)(ToggleButton, { onClick: handleToggle, "aria-disabled": disabled, "aria-expanded": expanded, "aria-controls": ariaControls, "aria-labelledby": ariaLabelId, "data-strapi-accordion-toggle": true, expanded: expanded, type: "button", flex: 1, minWidth: 0, ...props, children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.I, { ...titleProps, children: title }), description && ((0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "p", id: ariaDescriptionId, textColor: descriptionColor, children: description }))] }) }), togglePosition === 'right' && ((0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, children: [dropdownIcon, action] })), togglePosition === 'left' && action] }) }));
};




/***/ }),

/***/ 11663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ActionLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6803);



const ActionLayout = ({ startActions, endActions }) => {
    if (!startActions && !endActions) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { gap: 2, wrap: "wrap", children: startActions }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { gap: 2, shrink: 0, wrap: "wrap", children: endActions })] }));
};




/***/ }),

/***/ 7480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";

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

/***/ 76061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ 11821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28325);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54625);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40948);
/* harmony import */ var _themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75206);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17937);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17715);









const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.a `
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : undefined)};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.neutral600 : theme.colors.primary600)};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary700};
  }

  ${_themes_utils_mjs__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .AP};
`;
const IconWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .a)) `
  display: flex;
`;
const Link = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, href, to, disabled = false, startIcon, endIcon, ...restProps }, ref) => {
    const target = href ? '_blank' : undefined;
    const rel = href ? 'noreferrer noopener' : undefined;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LinkWrapper, { as: to && !disabled ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .k2 : 'a', target: target, rel: rel, to: disabled ? undefined : to, href: disabled ? '#' : href, disabled: disabled, ref: ref, ...restProps, children: [startIcon && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingRight: 2, children: startIcon })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o, { children: children }), endIcon && !href && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: endIcon })), href && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { as: "span", "aria-hidden": true, paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {}) }))] }));
});




/***/ }),

/***/ 45171:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ 10440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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



/***/ }),

/***/ 26793:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const c = (a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...a, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
    clipRule: "evenodd"
  }
) }), o = c;



/***/ })

}]);