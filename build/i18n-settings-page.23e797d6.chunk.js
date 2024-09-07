"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[821],{

/***/ 23544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/constants.js
var constants = __webpack_require__(11235);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/EmptyStateLayout/EmptyStateLayout.mjs
var EmptyStateLayout = __webpack_require__(10753);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.mjs
var Plus = __webpack_require__(45072);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.mjs
var EmptyDocuments = __webpack_require__(26507);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(58272);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js
var utils = __webpack_require__(56668);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(26883);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(13398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(16457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.mjs
var TabGroup = __webpack_require__(74471);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.mjs + 1 modules
var Tabs = __webpack_require__(86323);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.mjs
var Divider = __webpack_require__(87795);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.mjs
var TabPanels = __webpack_require__(28963);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(61592);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var hooks_constants = __webpack_require__(84012);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js






const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,es/* useDispatch */.wA)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const persistLocale = async (locale) => {
    setLoading(true);
    try {
      const { data } = await post("/i18n/locales", locale);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.g)("Settings.locales.modal.create.success") }
      });
      dispatch({ type: hooks_constants/* ADD_LOCALE */.TI, newLocale: data });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.g)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,yup_es/* object */.Ik)().shape({
  code: (0,yup_es/* string */.Yj)().required(),
  displayName: (0,yup_es/* string */.Yj)().max(50, "Settings.locales.modal.locales.displayName.error").required(helper_plugin_esm/* translatedErrors */.iW.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(74427);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm = () => {
  const { values, setFieldValue } = (0,formik_esm/* useFormikContext */.j7)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.S,
    {
      hint: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault
    },
    formatMessage({
      id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(14591);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.mjs
var Combobox = __webpack_require__(60731);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.mjs
var ComboboxOption = __webpack_require__(66392);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(99759);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js





const useDefaultLocales = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { isLoading, data } = (0,react_query_es.useQuery)(["plugin-i18n", "locales"], async () => {
    try {
      const { data: data2 } = await get("/i18n/iso-locales");
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    } catch (e) {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
      return [];
    }
  });
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.A)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.G3,
    {
      "aria-busy": isLoading,
      error,
      label: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: computedValue,
      onClear: value ? onClear : void 0,
      onChange: (selectedLocaleKey) => {
        const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
        if (selectedLocale) {
          onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
        }
      },
      placeholder: formatMessage({
        id: "components.placeholder.select",
        defaultMessage: "Select"
      })
    },
    options.map((option) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.j, { value: option.value, key: option.value }, option.label))
  );
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear() {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js






const BaseForm = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { values, handleChange, setFieldValue, errors } = (0,formik_esm/* useFormikContext */.j7)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    components_LocaleSelect,
    {
      error: errors.code,
      value: values.code,
      onLocaleChange: handleLocaleChange,
      onClear: handleClear
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js












const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { refetchPermissions } = (0,helper_plugin_esm/* useRBACProvider */.r5)();
  const handleLocaleAdd = async (values) => {
    await addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose, labelledBy: "add-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      initialValues: initialFormValues,
      onSubmit: handleLocaleAdd,
      validationSchema: schemas,
      validateOnChange: false
    },
    /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "add-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.g)("Settings.list.actions.add"),
      defaultMessage: "Add new locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.f,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.g)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h2", variant: "beta" }, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.t, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.c, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.T, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.j,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null), disabled: isAdding }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
      }
    ))
  ));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js





const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,es/* useDispatch */.wA)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { del } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const removeLocale = async (id) => {
    try {
      setLoading(true);
      await del(`/i18n/locales/${id}`);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.g)("Settings.locales.modal.delete.success") }
      });
      dispatch({ type: hooks_constants/* DELETE_LOCALE */.V2, id });
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      setLoading(false);
    }
  };
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      isConfirmButtonLoading: isDeleting,
      onConfirm: handleDelete,
      onToggleDialog: onClose,
      isOpen: isOpened
    }
  );
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js





const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,es/* useDispatch */.wA)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const modifyLocale = async (id, payload) => {
    try {
      setLoading(true);
      const { data } = await put(`/i18n/locales/${id}`, payload);
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.g)("Settings.locales.modal.edit.success") }
      });
      dispatch({ type: hooks_constants/* UPDATE_LOCALE */.JX, editedLocale: data });
    } catch {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      setLoading(false);
    }
  };
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm_AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,formik_esm/* useFormikContext */.j7)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.S,
    {
      name: "isDefault",
      hint: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault,
      disabled: isDefaultLocale
    },
    formatMessage({
      id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
AdvancedForm_AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm_AdvancedForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(28753);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(39410);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js







const BaseForm_BaseForm = ({ locale }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { values, handleChange, errors } = (0,formik_esm/* useFormikContext */.j7)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const localeDetails = !isLoading && defaultLocales.find((row) => row.code === locale.code);
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.l,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: localeDetails?.code || locale.code,
      disabled: true
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.c, { value: localeDetails?.code || locale.code }, localeDetails?.name || locale.code)
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm_BaseForm);
BaseForm_BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js












const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,helper_plugin_esm/* useRBACProvider */.r5)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const handleSubmit = async ({ displayName, isDefault }) => {
    await editLocale(locale.id, { name: displayName, isDefault });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose, labelledBy: "edit-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      initialValues: {
        code: locale?.code,
        displayName: locale?.name || "",
        isDefault: Boolean(locale?.isDefault)
      },
      onSubmit: handleSubmit,
      validationSchema: schemas
    },
    /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "edit-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.g)("Settings.list.actions.edit"),
      defaultMessage: "Edit a locale"
    }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(
      TabGroup/* TabGroup */.f,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.g)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tabs */.t, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
        id: (0,utils/* getTrad */.g)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(Divider/* Divider */.c, null),
      /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.T, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, { locale })), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, { isDefaultLocale: Boolean(locale && locale.isDefault) }))))
    )), /* @__PURE__ */ react.createElement(
      ModalFooter/* ModalFooter */.j,
      {
        startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel" })),
        endActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null), disabled: isEditing }, formatMessage({ id: "global.save" }))
      }
    ))
  ));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.mjs
var Table = __webpack_require__(69239);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.mjs
var Thead = __webpack_require__(33609);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.mjs
var Tr = __webpack_require__(52603);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.mjs
var Cell = __webpack_require__(4293);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(42091);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(90667);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(87455);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.mjs
var Trash = __webpack_require__(39594);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js







const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.X, { colCount: 4, rowCount: locales.length + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.g)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.g)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.g)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, "Actions")))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, locales.map((locale) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      key: locale.id,
      ...(0,helper_plugin_esm/* onRowClick */.qM)({
        fn: () => onEditLocale(locale),
        condition: onEditLocale
      })
    },
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, locale.id)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, locale.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.g)("Settings.locales.default") }) : null)),
    /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 1, justifyContent: "flex-end", ...helper_plugin_esm/* stopPropagation */.dG }, onEditLocale && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.K,
      {
        onClick: () => onEditLocale(locale),
        label: formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.actions.edit") }),
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.A, null),
        noBorder: true
      }
    ), onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.K,
      {
        onClick: () => onDeleteLocale(locale),
        label: formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.actions.delete") }),
        icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null),
        noBorder: true
      }
    )))
  ))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js












const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.A)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.$, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), onClick: onToggleCreateModal, size: "S" }, formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.actions.add") })),
      title: formatMessage({ id: (0,utils/* getTrad */.g)("plugin.name") }),
      subtitle: formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.description") })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, locales?.length > 0 ? /* @__PURE__ */ react.createElement(
    LocaleList_LocaleTable,
    {
      locales,
      onDeleteLocale: handleDeleteLocale,
      onEditLocale: handleEditLocale
    }
  ) : /* @__PURE__ */ react.createElement(
    EmptyStateLayout/* EmptyStateLayout */.p,
    {
      icon: /* @__PURE__ */ react.createElement(EmptyDocuments/* default */.A, { width: void 0, height: void 0 }),
      content: formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.empty.title") }),
      action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null), onClick: onToggleCreateModal }, formatMessage({ id: (0,utils/* getTrad */.g)("Settings.list.actions.add") })) : null
    }
  )), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, { onClose: onToggleCreateModal }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, { onClose: closeModalToEdit, locale: localeToEdit }), /* @__PURE__ */ react.createElement(components_ModalDelete, { localeToDelete, onClose: closeModalToDelete }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(
    components_LocaleList,
    {
      canUpdateLocale,
      canDeleteLocale,
      onToggleCreateModal: handleToggleModalCreate,
      isCreating: isOpenedCreateModal
    }
  ) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(constants/* PERMISSIONS */.J);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    SettingsPage_LocaleSettingsPage,
    {
      canReadLocale: canRead,
      canCreateLocale: canCreate,
      canUpdateLocale: canUpdate,
      canDeleteLocale: canDelete
    }
  );
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ }),

/***/ 66392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ComboboxOption)
/* harmony export */ });
/* harmony import */ var _Combobox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60731);


const ComboboxOption = _Combobox_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Option */ .c$;




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