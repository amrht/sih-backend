"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[1188],{

/***/ 3502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(68154);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useConfig.js
var useConfig = __webpack_require__(19753);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(50314);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.mjs
var Layout = __webpack_require__(76061);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.mjs
var ActionLayout = __webpack_require__(11663);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.mjs + 2 modules
var BaseCheckbox = __webpack_require__(91479);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(42091);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(87795);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(26793);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/List.mjs
var List = __webpack_require__(45176);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Grid.mjs
var Grid = __webpack_require__(33756);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(87455);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(54625);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/AssetGridList/index.js + 1 modules
var AssetGridList = __webpack_require__(29232);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 13 modules
var EditAssetDialog = __webpack_require__(61610);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(67608);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderCard/index.js + 9 modules
var FolderCard = __webpack_require__(31426);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderGridList/index.js + 1 modules
var FolderGridList = __webpack_require__(82792);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* PageSizeURLQuery */._u, null), /* @__PURE__ */ react.createElement(helper_plugin_esm/* PaginationURLQuery */.W7, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js
var SortPicker = __webpack_require__(77619);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/TableList/index.js + 4 modules
var TableList = __webpack_require__(89558);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(24103);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(85022);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js
var useAssets = __webpack_require__(17090);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolder.js
var useFolder = __webpack_require__(40307);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolders.js
var useFolders = __webpack_require__(78230);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js
var useMediaLibraryPermissions = __webpack_require__(26);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(34254);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(39594);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemove.js
var useBulkRemove = __webpack_require__(28459);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkDeleteButton.js








const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { isLoading, remove } = (0,useBulkRemove/* useBulkRemove */.y)();
  const handleConfirmRemove = async () => {
    await remove(selected);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.$,
    {
      variant: "danger-light",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.delete", defaultMessage: "Delete" })
  ), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      isConfirmButtonLoading: isLoading,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRemove
    }
  ));
};
BulkDeleteButton.propTypes = {
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.E_, constants/* FolderDefinition */.SI).isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.mjs
var Folder = __webpack_require__(23332);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(26883);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(16457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.mjs + 1 modules
var Loader = __webpack_require__(13630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(13398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid_Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.mjs
var FieldLabel = __webpack_require__(26871);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(61592);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(62193);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js




const useBulkMove = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const queryClient = (0,es.useQueryClient)();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return post("/upload/actions/bulk-move", { ...payload, destinationFolderId });
  };
  const mutation = (0,es.useMutation)(bulkMoveQuery, {
    onSuccess(res) {
      const {
        data: { data }
      } = res;
      if (data?.files?.length > 0) {
        queryClient.refetchQueries([pluginId/* default */.A, "assets"], { active: true });
        queryClient.refetchQueries([pluginId/* default */.A, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([pluginId/* default */.A, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.gT)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return { ...mutation, move };
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolderStructure.js + 1 modules
var useFolderStructure = __webpack_require__(60922);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SelectTree/index.js + 4 modules
var SelectTree = __webpack_require__(35733);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/BulkMoveDialog.js












const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { data: folderStructure, isLoading } = (0,useFolderStructure/* useFolderStructure */.F)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = async (values, { setErrors }) => {
    try {
      await move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const normalizedError = (0,helper_plugin_esm/* normalizeAPIError */.u7)(error);
      const formikErrors = normalizedError.errors.reduce((acc, error2) => {
        acc[error2.values?.path?.length || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!isEmpty_default()(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  };
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center", paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
      id: (0,utils/* getTrad */.gT)("content.isLoading"),
      defaultMessage: "Content is loading."
    })))));
  }
  const initialFormData = {
    destination: {
      value: currentFolder?.id || "",
      label: currentFolder?.name || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(formik_esm/* Formik */.l1, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.gT)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Grid_Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { xs: 12, col: 12 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.d, { htmlFor: "folder-destination" }, formatMessage({
    id: (0,utils/* getTrad */.gT)("form.input.label.folder-location"),
    defaultMessage: "Location"
  })), /* @__PURE__ */ react.createElement(
    SelectTree/* default */.A,
    {
      options: folderStructure,
      onChange: (value) => {
        setFieldValue("destination", value);
      },
      defaultValue: values.destination,
      name: "destination",
      menuPortalTarget: document.querySelector("body"),
      inputId: "folder-destination",
      error: errors?.destination,
      ariaErrorMessage: "destination-error"
    }
  ), errors.destination && /* @__PURE__ */ react.createElement(
    Typography/* Typography */.o,
    {
      variant: "pi",
      as: "p",
      id: "folder-destination-error",
      textColor: "danger600"
    },
    errors.destination
  ))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.j,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { onClick: handleClose, variant: "tertiary", name: "cancel" }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", loading: isLoading }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
    }
  ))));
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.SI,
  selected: prop_types_default().arrayOf(constants/* FolderDefinition */.SI, constants/* AssetDefinition */.E_).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkMoveButton.js







const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.$,
    {
      variant: "secondary",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Folder/* default */.A, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.move", defaultMessage: "Move" })
  ), showConfirmDialog && /* @__PURE__ */ react.createElement(
    BulkMoveDialog,
    {
      currentFolder,
      onClose: handleConfirmMove,
      selected
    }
  ));
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.SI,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.E_, constants/* FolderDefinition */.SI).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkActions.js








const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
    {
      id: (0,getTrad/* default */.A)("list.assets.selected"),
      defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
    },
    {
      numberFolders: selected.filter(({ type }) => type === "folder").length,
      numberAssets: selected.filter(({ type }) => type === "asset").length
    }
  )), /* @__PURE__ */ react.createElement(BulkDeleteButton, { selected, onSuccess }), /* @__PURE__ */ react.createElement(BulkMoveButton, { currentFolder, selected, onSuccess }));
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.SI,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.E_, constants/* FolderDefinition */.SI).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.mjs
var EmptyPermissions = __webpack_require__(21089);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(45072);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js + 1 modules
var EmptyAssets = __webpack_require__(64304);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/EmptyOrNoPermissions.js







const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ react.createElement(
    EmptyAssets/* EmptyAssets */.r,
    {
      icon: !canRead ? EmptyPermissions/* default */.A : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), onClick: onActionClick }, formatMessage({
        id: (0,utils/* getTrad */.gT)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })),
      content: formatMessage({
        ...content,
        id: (0,utils/* getTrad */.gT)(content.id)
      })
    }
  );
};
EmptyOrNoPermissions.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  isFiltering: (prop_types_default()).bool.isRequired,
  onActionClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.mjs
var Filter = __webpack_require__(53894);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js + 1 modules
var FilterList = __webpack_require__(70169);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js + 2 modules
var FilterPopover = __webpack_require__(17397);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js
var displayedFilters = __webpack_require__(13003);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Filters.js








const Filters = () => {
  const buttonRef = (0,react.useRef)(null);
  const [isVisible, setVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const [{ query }, setQuery] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const filters = query?.filters?.$and || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Button/* Button */.$,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.A, null),
      onClick: toggleFilter,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    FilterPopover/* default */.A,
    {
      displayedFilters: displayedFilters/* default */.A,
      filters,
      onSubmit: handleSubmit,
      onToggle: toggleFilter,
      source: buttonRef
    }
  ), /* @__PURE__ */ react.createElement(
    FilterList/* default */.A,
    {
      appliedFilters: filters,
      filtersSchema: displayedFilters/* default */.A,
      onRemoveFilter: handleRemoveFilter
    }
  ));
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.mjs
var Link = __webpack_require__(11821);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.mjs
var ArrowLeft = __webpack_require__(10440);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 4 modules
var Breadcrumbs = __webpack_require__(47782);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Header.js











const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const [{ query }] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const backQuery = {
    ...query,
    folder: folder?.parent?.id ?? void 0,
    folderPath: folder?.parent?.path ?? void 0
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.gT)("plugin.name"),
        defaultMessage: `Media Library`
      }),
      subtitle: breadcrumbs && folder && /* @__PURE__ */ react.createElement(
        Breadcrumbs/* Breadcrumbs */.B,
        {
          as: "nav",
          label: formatMessage({
            id: (0,utils/* getTrad */.gT)("header.breadcrumbs.nav.label"),
            defaultMessage: "Folders navigation"
          }),
          breadcrumbs,
          currentFolderId: folder?.id
        }
      ),
      navigationAction: folder && /* @__PURE__ */ react.createElement(
        Link/* Link */.N,
        {
          startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null),
          to: `${pathname}?${(0,lib.stringify)(backQuery, { encode: false })}`
        },
        formatMessage({
          id: (0,utils/* getTrad */.gT)("header.actions.folder-level-up"),
          defaultMessage: "Back"
        })
      ),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.$, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), variant: "secondary", onClick: onToggleEditFolderDialog }, formatMessage({
        id: (0,utils/* getTrad */.gT)("header.actions.add-folder"),
        defaultMessage: "Add new folder"
      })), /* @__PURE__ */ react.createElement(Button/* Button */.$, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), onClick: onToggleUploadAssetDialog }, formatMessage({
        id: (0,utils/* getTrad */.gT)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })))
    }
  );
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types_default().oneOfType([constants/* BreadcrumbsDefinition */.qu, (prop_types_default()).bool]),
  canCreate: (prop_types_default()).bool.isRequired,
  folder: constants/* FolderDefinition */.SI,
  onToggleEditFolderDialog: (prop_types_default()).func.isRequired,
  onToggleUploadAssetDialog: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/index.js



























const BoxWithHeight = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  max-width: 100%;
`;
const ActionContainer = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const MediaLibrary = () => {
  const { push } = (0,react_router/* useHistory */.W6)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,useMediaLibraryPermissions/* useMediaLibraryPermissions */.n)();
  const currentFolderToEditRef = (0,react.useRef)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const [{ query }, setQuery] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const isFiltering = Boolean(query._q || query.filters);
  const [view, setView] = (0,helper_plugin_esm/* usePersistentState */.ud)(constants/* localStorageKeys */.lO.view, constants/* viewOptions */.IG.GRID);
  const isGridView = view === constants/* viewOptions */.IG.GRID;
  const {
    data: assetsData,
    isLoading: assetsLoading,
    errors: assetsError
  } = (0,useAssets/* useAssets */.d)({
    skipWhen: !canRead,
    query
  });
  const {
    data: foldersData,
    isLoading: foldersLoading,
    errors: foldersError
  } = (0,useFolders/* useFolders */.n)({
    enabled: canRead && assetsData?.pagination?.page === 1 && !(0,utils/* containsAssetFilter */.Ao)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,useFolder/* useFolder */.a)(query?.folder, {
    enabled: canRead && !!query?.folder
  });
  if (currentFolderError?.response?.status === 404) {
    push(pathname);
  }
  const folders = foldersData?.map((folder) => ({
    ...folder,
    type: "folder",
    folderURL: (0,utils/* getFolderURL */._0)(pathname, query, folder.id),
    isSelectable: canUpdate
  })) ?? [];
  const folderCount = folders?.length || 0;
  const assets = assetsData?.results?.map((asset) => ({ ...asset, type: "asset", isSelectable: canUpdate })) || [];
  const assetCount = assets?.length ?? 0;
  const totalAssetCount = assetsData?.pagination?.total;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,helper_plugin_esm/* useSelectionState */.$0)(["type", "id"], []);
  const indeterminateBulkSelect = selected?.length > 0 && selected?.length !== assetCount + folderCount;
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && query?.page !== "1") {
      setQuery({
        ...query,
        page: 1
      });
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleBulkSelect = (event, elements) => {
    if (event.target.checked) {
      trackUsage("didSelectAllMediaLibraryElements");
    }
    selectAll(elements);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  const handleAssetDeleted = (numberOfAssets) => {
    if (numberOfAssets === assetCount && assetsData.pagination.page === assetsData.pagination.pageCount && assetsData.pagination.page > 1) {
      setQuery({
        ...query,
        page: assetsData.pagination.page - 1
      });
    }
  };
  const handleBulkActionSuccess = () => {
    selectAll();
    handleAssetDeleted(selected.length);
  };
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    Header,
    {
      breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.Tw)(currentFolder, { pathname, query }),
      canCreate,
      onToggleEditFolderDialog: toggleEditFolderDialog,
      onToggleUploadAssetDialog: toggleUploadAssetDialog,
      folder: currentFolder
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.B,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, canUpdate && isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
        BoxWithHeight,
        {
          paddingLeft: 2,
          paddingRight: 2,
          background: "neutral0",
          hasRadius: true,
          borderColor: "neutral200"
        },
        /* @__PURE__ */ react.createElement(
          BaseCheckbox/* BaseCheckbox */.J,
          {
            "aria-label": formatMessage({
              id: (0,utils/* getTrad */.gT)("bulk.select.label"),
              defaultMessage: "Select all folders & assets"
            }),
            indeterminate: indeterminateBulkSelect,
            value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
            onChange: (e) => handleBulkSelect(e, [...assets, ...folders])
          }
        )
      ), canRead && isGridView && /* @__PURE__ */ react.createElement(SortPicker/* default */.A, { value: query?.sort, onChangeSort: handleChangeSort }), canRead && /* @__PURE__ */ react.createElement(Filters, null)),
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPermissions */.d4, { permissions: constants/* PERMISSIONS */.Jj.configureView }, /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          forwardedAs: react_router_dom/* Link */.N_,
          to: {
            pathname: `${pathname}/configuration`,
            search: (0,lib.stringify)(query, { encode: false })
          },
          icon: /* @__PURE__ */ react.createElement(Cog/* default */.A, null),
          label: formatMessage({
            id: "app.links.configure-view",
            defaultMessage: "Configure the view"
          })
        }
      ))), /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          icon: isGridView ? /* @__PURE__ */ react.createElement(List/* default */.A, null) : /* @__PURE__ */ react.createElement(Grid/* default */.A, null),
          label: isGridView ? formatMessage({
            id: (0,utils/* getTrad */.gT)("view-switch.list"),
            defaultMessage: "List View"
          }) : formatMessage({
            id: (0,utils/* getTrad */.gT)("view-switch.grid"),
            defaultMessage: "Grid View"
          }),
          onClick: () => setView(isGridView ? constants/* viewOptions */.IG.LIST : constants/* viewOptions */.IG.GRID)
        }
      )), /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* SearchURLQuery */.q7,
        {
          label: formatMessage({
            id: (0,utils/* getTrad */.gT)("search.label"),
            defaultMessage: "Search for an asset"
          }),
          trackedEvent: "didSearchMediaLibraryElements",
          trackedEventDetails: { location: "upload" }
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, selected.length > 0 && /* @__PURE__ */ react.createElement(
    BulkActions,
    {
      currentFolder,
      selected,
      onSuccess: handleBulkActionSuccess
    }
  ), isLoading && /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(helper_plugin_esm/* AnErrorOccurred */.hH, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(
    EmptyOrNoPermissions,
    {
      canCreate,
      canRead,
      isFiltering,
      onActionClick: toggleUploadAssetDialog
    }
  ), canRead && !isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
    TableList/* TableList */.B,
    {
      assetCount,
      folderCount,
      indeterminate: indeterminateBulkSelect,
      onChangeSort: handleChangeSort,
      onChangeFolder: (folderID, folderPath) => push((0,utils/* getFolderURL */._0)(pathname, query, { folder: folderID, folderPath })),
      onEditAsset: setAssetToEdit,
      onEditFolder: handleEditFolder,
      onSelectOne: selectOne,
      onSelectAll: handleBulkSelect,
      rows: [...folders, ...assets],
      selected,
      shouldDisableBulkSelect: !canUpdate,
      sortQuery: query?.sort ?? ""
    }
  ), canRead && isGridView && /* @__PURE__ */ react.createElement(react.Fragment, null, folderCount > 0 && /* @__PURE__ */ react.createElement(
    FolderGridList/* FolderGridList */.r,
    {
      title: (
        // Folders title should only appear if:
        // user is filtering and there are assets to display, to divide both type of elements
        // user is not filtering
        (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
          {
            id: (0,utils/* getTrad */.gT)("list.folders.title"),
            defaultMessage: "Folders ({count})"
          },
          { count: folderCount }
        ) || ""
      )
    },
    folders.map((folder) => {
      const selectedFolders = selected.filter(({ type }) => type === "folder");
      const isSelected = !!selectedFolders.find(
        (currentFolder2) => currentFolder2.id === folder.id
      );
      const url = (0,utils/* getFolderURL */._0)(pathname, query, {
        folder: folder?.id,
        folderPath: folder?.path
      });
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 3, key: `folder-${folder.id}` }, /* @__PURE__ */ react.createElement(
        FolderCard/* FolderCard */.Rx,
        {
          ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
          ariaLabel: folder.name,
          id: `folder-${folder.id}`,
          to: url,
          startAction: selectOne && folder.isSelectable ? /* @__PURE__ */ react.createElement(
            FolderCard/* FolderCardCheckbox */.gc,
            {
              "data-testid": `folder-checkbox-${folder.id}`,
              value: isSelected,
              onChange: () => selectOne(folder)
            }
          ) : null,
          cardActions: /* @__PURE__ */ react.createElement(
            IconButton/* IconButton */.K,
            {
              icon: /* @__PURE__ */ react.createElement(Pencil/* default */.A, null),
              "aria-label": formatMessage({
                id: (0,utils/* getTrad */.gT)("list.folder.edit"),
                defaultMessage: "Edit folder"
              }),
              onClick: () => handleEditFolder(folder)
            }
          )
        },
        /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.fC, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.nB, { to: url }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%" }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true }, folder.name, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, ":")), /* @__PURE__ */ react.createElement(
          TypographyMaxWidth,
          {
            as: "span",
            textColor: "neutral600",
            variant: "pi",
            ellipsis: true
          },
          formatMessage(
            {
              id: (0,utils/* getTrad */.gT)("list.folder.subtitle"),
              defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
            },
            {
              folderCount: folder.children.count,
              filesCount: folder.files.count
            }
          )
        ))))
      ));
    })
  ), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.c, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(
    AssetGridList/* AssetGridList */.L,
    {
      assets,
      onEditAsset: setAssetToEdit,
      onSelectAsset: selectOne,
      selectedAssets: selected.filter(({ type }) => type === "asset"),
      title: (
        // Assets title should only appear if:
        // - user is not filtering
        // - user is filtering and there are folders to display, to separate them
        // - user is on page 1 since folders won't appear on any other page than the first one (no need to visually separate them)
        (!isFiltering || isFiltering && folderCount > 0) && assetsData?.pagination?.page === 1 && formatMessage(
          {
            id: (0,utils/* getTrad */.gT)("list.assets.title"),
            defaultMessage: "Assets ({count})"
          },
          { count: totalAssetCount }
        ) || ""
      )
    }
  )), assetsData?.pagination && /* @__PURE__ */ react.createElement(PaginationFooter, { pagination: assetsData.pagination }))), showUploadAssetDialog && /* @__PURE__ */ react.createElement(
    UploadAssetDialog/* UploadAssetDialog */.w,
    {
      onClose: toggleUploadAssetDialog,
      trackedLocation: "upload",
      folderId: query?.folder
    }
  ), showEditFolderDialog && /* @__PURE__ */ react.createElement(
    EditFolderDialog/* EditFolderDialog */.v,
    {
      onClose: handleEditFolderClose,
      folder: folderToEdit,
      parentFolderId: query?.folder,
      location: "upload"
    }
  ), assetToEdit && /* @__PURE__ */ react.createElement(
    EditAssetDialog/* EditAssetDialog */.H,
    {
      onClose: (editedAsset) => {
        if (editedAsset === null) {
          handleAssetDeleted(1);
        }
        setAssetToEdit(void 0);
      },
      asset: assetToEdit,
      canUpdate,
      canCopyLink,
      canDownload,
      trackedLocation: "upload"
    }
  ));
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js










const ConfigureTheView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Upload_ConfigureTheView */ 8065).then(__webpack_require__.bind(__webpack_require__, 7427))
);
const Upload = () => {
  const {
    config: { isLoading, isError, data: config }
  } = (0,useConfig/* useConfig */.U)();
  const [{ rawQuery }, setQuery] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const title = formatMessage({ id: (0,utils/* getTrad */.gT)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (isLoading || isError || rawQuery) {
      return;
    }
    setQuery({ sort: config.sort, page: 1, pageSize: config.pageSize });
  }, [isLoading, isError, config, rawQuery, setQuery]);
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(Helmet/* Helmet */.m, { title }), isLoading && /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null), rawQuery ? /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.dO, null, /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { exact: true, path: `/plugins/${pluginId/* default */.A}`, component: MediaLibrary }), /* @__PURE__ */ react.createElement(
    react_router/* Route */.qh,
    {
      exact: true,
      path: `/plugins/${pluginId/* default */.A}/configuration`,
      render: () => /* @__PURE__ */ react.createElement(ConfigureTheView, { config })
    }
  ))) : null);
};
/* harmony default export */ const App = (Upload);


/***/ }),

/***/ 11663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ 11821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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