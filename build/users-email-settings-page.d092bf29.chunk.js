"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[3064],{

/***/ 42761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmailTemplates)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.mjs
var useNotifyAT = __webpack_require__(99759);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.mjs + 2 modules
var HeaderLayout = __webpack_require__(65813);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.mjs
var ContentLayout = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(69224);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 1 modules
var utils = __webpack_require__(46215);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.mjs
var ModalLayout = __webpack_require__(26883);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.mjs
var ModalHeader = __webpack_require__(13398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.mjs
var ModalBody = __webpack_require__(16457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.mjs
var Textarea = __webpack_require__(90493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.mjs
var ModalFooter = __webpack_require__(61592);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.mjs + 1 modules
var Breadcrumbs = __webpack_require__(93117);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.mjs
var Crumb = __webpack_require__(84877);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js


const schema = yup_es/* object */.Ik().shape({
  options: yup_es/* object */.Ik().shape({
    from: yup_es/* object */.Ik().shape({
      name: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
      email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).required(helper_plugin_esm/* translatedErrors */.iW.required)
    }).required(),
    response_email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email),
    object: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
    message: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required)
  }).required(helper_plugin_esm/* translatedErrors */.iW.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js









const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(
    ModalLayout/* ModalLayout */.k,
    {
      onClose: onToggle,
      labelledBy: `${formatMessage({
        id: (0,utils/* getTrad */.gT)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })}, ${formatMessage({ id: (0,utils/* getTrad */.gT)(template.display), defaultMessage: template.display })}`
    },
    /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(
      Breadcrumbs/* Breadcrumbs */.B,
      {
        label: `${formatMessage({
          id: (0,utils/* getTrad */.gT)("PopUpForm.header.edit.email-templates"),
          defaultMessage: "Edit email template"
        })}, ${formatMessage({
          id: (0,utils/* getTrad */.gT)(template.display),
          defaultMessage: template.display
        })}`
      },
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.m, null, formatMessage({
        id: (0,utils/* getTrad */.gT)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })),
      /* @__PURE__ */ react.createElement(Crumb/* Crumb */.m, { isCurrent: true }, formatMessage({ id: (0,utils/* getTrad */.gT)(template.display), defaultMessage: template.display }))
    )),
    /* @__PURE__ */ react.createElement(
      formik_esm/* Formik */.l1,
      {
        onSubmit,
        initialValues: template,
        validateOnChange: false,
        validationSchema: utils_schema,
        enableReinitialize: true
      },
      ({ errors, values, handleChange, isSubmitting }) => {
        return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin_esm/* GenericInput */.ah,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.gT)("PopUpForm.Email.options.from.name.label"),
              defaultMessage: "Shipper name"
            },
            name: "options.from.name",
            onChange: handleChange,
            value: values.options.from.name,
            error: errors?.options?.from?.name,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin_esm/* GenericInput */.ah,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.gT)("PopUpForm.Email.options.from.email.label"),
              defaultMessage: "Shipper email"
            },
            name: "options.from.email",
            onChange: handleChange,
            value: values.options.from.email,
            error: errors?.options?.from?.email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin_esm/* GenericInput */.ah,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.gT)("PopUpForm.Email.options.response_email.label"),
              defaultMessage: "Response email"
            },
            name: "options.response_email",
            onChange: handleChange,
            value: values.options.response_email,
            error: errors?.options?.response_email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin_esm/* GenericInput */.ah,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.gT)("PopUpForm.Email.options.object.label"),
              defaultMessage: "Subject"
            },
            name: "options.object",
            onChange: handleChange,
            value: values.options.object,
            error: errors?.options?.object,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 12, s: 12 }, /* @__PURE__ */ react.createElement(
          Textarea/* Textarea */.T,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.gT)("PopUpForm.Email.options.message.label"),
              defaultMessage: "Message"
            }),
            id: "options.message",
            onChange: handleChange,
            value: values.options.message,
            error: errors?.options?.message && formatMessage({
              id: errors.options.message,
              defaultMessage: errors.options.message
            })
          }
        )))), /* @__PURE__ */ react.createElement(
          ModalFooter/* ModalFooter */.j,
          {
            startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { onClick: onToggle, variant: "tertiary" }, "Cancel"),
            endActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { loading: isSubmitting, type: "submit" }, "Finish")
          }
        ));
      }
    )
  );
};
EmailForm.propTypes = {
  template: prop_types_default().shape({
    display: (prop_types_default()).string,
    icon: (prop_types_default()).string,
    options: prop_types_default().shape({
      from: prop_types_default().shape({
        name: (prop_types_default()).string,
        email: (prop_types_default()).string
      }),
      message: (prop_types_default()).string,
      object: (prop_types_default()).string,
      response_email: (prop_types_default()).string
    })
  }).isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailForm = (EmailForm);

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
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.mjs
var Tbody = __webpack_require__(90667);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.mjs
var Icon = __webpack_require__(46699);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.mjs
var IconButton = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Refresh.mjs
var Refresh = __webpack_require__(40897);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.mjs
var Pencil = __webpack_require__(87455);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.mjs
var Check = __webpack_require__(95844);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js







const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Table/* Table */.X, { colCount: 3, rowCount: 3 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, formatMessage({
    id: (0,utils/* getTrad */.gT)("Email.template.table.icon.label"),
    defaultMessage: "icon"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.gT)("Email.template.table.name.label"),
    defaultMessage: "name"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, formatMessage({
    id: (0,utils/* getTrad */.gT)("Email.template.table.action.label"),
    defaultMessage: "action"
  }))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,helper_plugin_esm/* onRowClick */.qM)({ fn: () => onEditClick("reset_password") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, null, /* @__PURE__ */ react.createElement(
    Refresh/* default */.A,
    {
      "aria-label": formatMessage({
        id: "global.reset-password",
        defaultMessage: "Reset password"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
    id: "global.reset-password",
    defaultMessage: "Reset password"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.dG }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      onClick: () => onEditClick("reset_password"),
      label: formatMessage({
        id: (0,utils/* getTrad */.gT)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.A, null)
    }
  ))), /* @__PURE__ */ react.createElement(Tr.Tr, { ...(0,helper_plugin_esm/* onRowClick */.qM)({ fn: () => onEditClick("email_confirmation") }) }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, null, /* @__PURE__ */ react.createElement(
    Check/* default */.A,
    {
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.gT)("Email.template.email_confirmation"),
        defaultMessage: "Email address confirmation"
      })
    }
  ))), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
    id: (0,utils/* getTrad */.gT)("Email.template.email_confirmation"),
    defaultMessage: "Email address confirmation"
  }))), /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.dG }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      onClick: () => onEditClick("email_confirmation"),
      label: formatMessage({
        id: (0,utils/* getTrad */.gT)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(Pencil/* default */.A, null)
    }
  )))));
};
EmailTable.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired,
  onEditClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailTable = (EmailTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js









const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.readEmailTemplates }, /* @__PURE__ */ react.createElement(EmailTemplatesPage, null));
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const queryClient = (0,es.useQueryClient)();
  const { get, put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const [isModalOpen, setIsModalOpen] = react.useState(false);
  const [templateToEdit, setTemplateToEdit] = react.useState(null);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin_esm/* useRBAC */.ec)({ update: constants/* PERMISSIONS */.J.updateEmailTemplates });
  const { isLoading: isLoadingData, data } = (0,es.useQuery)(
    ["users-permissions", "email-templates"],
    async () => {
      const { data: data2 } = await get("/users-permissions/email-templates");
      return data2;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: (0,utils/* getTrad */.gT)("Email.template.data.loaded"),
            defaultMessage: "Email templates has been loaded"
          })
        );
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  );
  const isLoading = isLoadingForPermissions || isLoadingData;
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,es.useMutation)(
    (body) => put("/users-permissions/email-templates", { "email-templates": body }),
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["users-permissions", "email-templates"]);
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
        trackUsage("didEditEmailTemplates");
        unlockApp();
        handleToggle();
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
        unlockApp();
      },
      refetchActive: true
    }
  );
  const handleSubmit = (body) => {
    lockApp();
    trackUsage("willEditEmailTemplates");
    const editedTemplates = { ...data, [templateToEdit]: body };
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* SettingsPageTitle */.x7,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.gT)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.gT)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": submitMutation.isLoading }, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* SettingsPageTitle */.x7,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.gT)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.gT)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(components_EmailTable, { onEditClick: handleEditClick, canUpdate }), isModalOpen && /* @__PURE__ */ react.createElement(
    components_EmailForm,
    {
      template: data[templateToEdit],
      onToggle: handleToggle,
      onSubmit: handleSubmit
    }
  )));
};
/* harmony default export */ const EmailTemplates = (ProtectedEmailTemplatesPage);


/***/ }),

/***/ 46215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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