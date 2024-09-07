(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6378],{

/***/ 44081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		41830,
		9785
	],
	"./ca.json": [
		49637,
		5994
	],
	"./cs.json": [
		51771,
		1500
	],
	"./de.json": [
		95070,
		9409
	],
	"./dk.json": [
		74920,
		5543
	],
	"./en.json": [
		39334,
		6969
	],
	"./es.json": [
		34349,
		9146
	],
	"./eu.json": [
		69983,
		9952
	],
	"./fr.json": [
		48373,
		5826
	],
	"./gu.json": [
		16389,
		9994
	],
	"./he.json": [
		62530,
		7837
	],
	"./hi.json": [
		36854,
		9865
	],
	"./hu.json": [
		48978,
		6669
	],
	"./id.json": [
		64960,
		9823
	],
	"./it.json": [
		88912,
		8159
	],
	"./ja.json": [
		29220,
		8363
	],
	"./ko.json": [
		21575,
		2800
	],
	"./ml.json": [
		5916,
		2355
	],
	"./ms.json": [
		77189,
		9714
	],
	"./nl.json": [
		73735,
		424
	],
	"./no.json": [
		30374,
		7897
	],
	"./pl.json": [
		48845,
		2634
	],
	"./pt-BR.json": [
		46304,
		6815
	],
	"./pt.json": [
		22133,
		1490
	],
	"./ru.json": [
		31248,
		4191
	],
	"./sa.json": [
		87797,
		2218
	],
	"./sk.json": [
		34371,
		6836
	],
	"./sv.json": [
		59108,
		9683
	],
	"./th.json": [
		5237,
		3522
	],
	"./tr.json": [
		10419,
		28
	],
	"./uk.json": [
		73413,
		2834
	],
	"./vi.json": [
		22432,
		7935
	],
	"./zh-Hans.json": [
		98590,
		7929
	],
	"./zh.json": [
		73519,
		864
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 44081;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_StrapiApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/lightTheme/index.mjs + 2 modules
var lightTheme = __webpack_require__(4499);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/index.mjs + 2 modules
var darkTheme = __webpack_require__(30474);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(20311);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(1882);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(55364);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(44383);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(68154);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(54625);
// EXTERNAL MODULE: ./.cache/admin/src/assets/images/logo-strapi-2022.svg
var logo_strapi_2022 = __webpack_require__(58786);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js
const localStorageKey = "strapi-admin-language";
/* harmony default export */ const utils_localStorageKey = (localStorageKey);

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(2256);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(41261);
;// CONCATENATED MODULE: ./.cache/admin/src/components/ConfigurationsProvider/reducer.js

const initialState = {
  menuLogo: null,
  authLogo: null
};
const reducer = (state = initialState, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "UPDATE_PROJECT_SETTINGS": {
      Object.assign(draftState, action.values);
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const ConfigurationsProvider_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/components/ConfigurationsProvider/index.js




const ConfigurationsProvider = ({
  children,
  authLogo: defaultAuthLogo,
  menuLogo: defaultMenuLogo,
  showReleaseNotification,
  showTutorials
}) => {
  const [{ menuLogo, authLogo }, dispatch] = (0,react.useReducer)(ConfigurationsProvider_reducer, initialState);
  const updateProjectSettings = (0,react.useCallback)(
    ({ menuLogo: menuLogo2, authLogo: authLogo2 }) => {
      return dispatch({
        type: "UPDATE_PROJECT_SETTINGS",
        values: {
          menuLogo: menuLogo2 || defaultMenuLogo,
          authLogo: authLogo2 || defaultAuthLogo
        }
      });
    },
    [defaultAuthLogo, defaultMenuLogo]
  );
  const configurationValue = (0,react.useMemo)(() => {
    return {
      logos: {
        menu: { custom: menuLogo, default: defaultMenuLogo },
        auth: { custom: authLogo, default: defaultAuthLogo }
      },
      updateProjectSettings,
      showReleaseNotification,
      showTutorials
    };
  }, [
    menuLogo,
    defaultMenuLogo,
    authLogo,
    defaultAuthLogo,
    updateProjectSettings,
    showReleaseNotification,
    showTutorials
  ]);
  return /* @__PURE__ */ react.createElement(contexts/* ConfigurationsContext */.tm.Provider, { value: configurationValue }, children);
};
ConfigurationsProvider.propTypes = {
  authLogo: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).element.isRequired,
  menuLogo: (prop_types_default()).string.isRequired,
  showReleaseNotification: (prop_types_default()).bool.isRequired,
  showTutorials: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_ConfigurationsProvider = (ConfigurationsProvider);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(63560);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js
const CURRENT_STEP = "GUIDED_TOUR_CURRENT_STEP";
const COMPLETED_STEPS = "GUIDED_TOUR_COMPLETED_STEPS";
const SKIPPED = "GUIDED_TOUR_SKIPPED";
const parse = JSON.parse;
const stringify = JSON.stringify;
const persistStateToLocaleStorage = {
  clear() {
    localStorage.removeItem(CURRENT_STEP);
    localStorage.removeItem(COMPLETED_STEPS);
  },
  addCompletedStep(completedStep) {
    const currentSteps = parse(localStorage.getItem(COMPLETED_STEPS))?.slice() || [];
    const isAlreadyStored = currentSteps.includes(completedStep);
    if (isAlreadyStored) {
      return;
    }
    currentSteps.push(completedStep);
    localStorage.setItem(COMPLETED_STEPS, stringify(currentSteps));
  },
  addCurrentStep(currentStep) {
    localStorage.setItem(CURRENT_STEP, stringify(currentStep));
  },
  setSkipped(value) {
    localStorage.setItem(SKIPPED, stringify(value));
  },
  get(item) {
    return parse(localStorage.getItem(item));
  }
};
/* harmony default export */ const utils_persistStateToLocaleStorage = (persistStateToLocaleStorage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/init.js


const init = (initialState) => {
  const copyInitialState = { ...initialState };
  const guidedTourLocaleStorage = utils_persistStateToLocaleStorage.get(COMPLETED_STEPS);
  const currentStepLocaleStorage = utils_persistStateToLocaleStorage.get(CURRENT_STEP);
  const skippedLocaleStorage = utils_persistStateToLocaleStorage.get(SKIPPED);
  if (guidedTourLocaleStorage) {
    guidedTourLocaleStorage.forEach((step) => {
      const [sectionName, stepName] = step.split(".");
      set_default()(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    });
  }
  if (currentStepLocaleStorage) {
    const [sectionName, stepName] = currentStepLocaleStorage.split(".");
    set_default()(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    utils_persistStateToLocaleStorage.addCompletedStep(currentStepLocaleStorage);
    utils_persistStateToLocaleStorage.addCurrentStep(null);
  }
  if (skippedLocaleStorage !== null) {
    set_default()(copyInitialState, "isSkipped", skippedLocaleStorage);
  }
  return copyInitialState;
};
/* harmony default export */ const GuidedTour_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/reducer.js

const reducer_initialState = {
  currentStep: null,
  guidedTourState: {
    contentTypeBuilder: {
      create: false,
      success: false
    },
    contentManager: {
      create: false,
      success: false
    },
    apiTokens: {
      create: false,
      success: false
    }
  },
  isGuidedTourVisible: false,
  isSkipped: true
};
const reducer_reducer = (state = reducer_initialState, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "SET_CURRENT_STEP": {
      draftState.currentStep = action.step;
      break;
    }
    case "SET_STEP_STATE": {
      const [section, step] = action.currentStep.split(".");
      draftState.guidedTourState[section][step] = action.value;
      break;
    }
    case "SET_SKIPPED": {
      draftState.isSkipped = action.value;
      break;
    }
    case "SET_GUIDED_TOUR_VISIBILITY": {
      draftState.isGuidedTourVisible = action.value;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const GuidedTour_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/arePreviousSectionsDone.js
const arePreviousSectionsDone = (sectionName, guidedTourState) => {
  const guidedTourArray = Object.entries(guidedTourState);
  const currentSectionIndex = guidedTourArray.findIndex(([key]) => key === sectionName);
  const previousSections = guidedTourArray.slice(0, currentSectionIndex);
  return previousSections.every(([, sectionValue]) => Object.values(sectionValue).every(Boolean));
};
/* harmony default export */ const utils_arePreviousSectionsDone = (arePreviousSectionsDone);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/arePreviousStepsDone.js
const arePreviousStepsDone = (step, guidedTourState) => {
  const stepSplit = step.split(".");
  const stepName = stepSplit[1];
  const sectionArray = Object.entries(guidedTourState[stepSplit[0]]);
  const currentStepIndex = sectionArray.findIndex(([key]) => key === stepName);
  const previousSteps = sectionArray.slice(0, currentStepIndex);
  return previousSteps.every(([, sectionValue]) => sectionValue);
};
/* harmony default export */ const utils_arePreviousStepsDone = (arePreviousStepsDone);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/index.js









const GuidedTour = ({ children }) => {
  const [{ currentStep, guidedTourState, isGuidedTourVisible, isSkipped }, dispatch] = (0,react.useReducer)(
    GuidedTour_reducer,
    reducer_initialState,
    GuidedTour_init
  );
  const setCurrentStep = (step) => {
    if (step !== null) {
      const isStepAlreadyDone = get_default()(guidedTourState, step);
      const isStepToShow = utils_arePreviousStepsDone(step, guidedTourState);
      if (isStepAlreadyDone || isSkipped || !isStepToShow) {
        return null;
      }
    }
    utils_persistStateToLocaleStorage.addCurrentStep(step);
    return dispatch({
      type: "SET_CURRENT_STEP",
      step
    });
  };
  const setGuidedTourVisibility = (value) => {
    dispatch({
      type: "SET_GUIDED_TOUR_VISIBILITY",
      value
    });
  };
  const setStepState = (currentStep2, value) => {
    utils_persistStateToLocaleStorage.addCompletedStep(currentStep2);
    dispatch({
      type: "SET_STEP_STATE",
      currentStep: currentStep2,
      value
    });
  };
  const startSection = (sectionName) => {
    const sectionSteps = guidedTourState[sectionName];
    if (sectionSteps) {
      const isSectionToShow = utils_arePreviousSectionsDone(sectionName, guidedTourState);
      const firstStep = Object.keys(sectionSteps)[0];
      const isFirstStepDone = sectionSteps[firstStep];
      if (isSectionToShow && !currentStep && !isFirstStepDone) {
        return setCurrentStep(`${sectionName}.${firstStep}`);
      }
    }
    return null;
  };
  const setSkipped = (value) => {
    utils_persistStateToLocaleStorage.setSkipped(value);
    dispatch({
      type: "SET_SKIPPED",
      value
    });
  };
  return /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* GuidedTourProvider */.g0,
    {
      guidedTourState,
      currentStep,
      setCurrentStep,
      setGuidedTourVisibility,
      setSkipped,
      setStepState,
      startSection,
      isGuidedTourVisible,
      isSkipped
    },
    children
  );
};
GuidedTour.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_GuidedTour = (GuidedTour);

// EXTERNAL MODULE: ./node_modules/lodash/defaultsDeep.js
var defaultsDeep = __webpack_require__(74354);
var defaultsDeep_default = /*#__PURE__*/__webpack_require__.n(defaultsDeep);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/provider.js + 8 modules
var provider = __webpack_require__(5463);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/context.js
var context = __webpack_require__(83606);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LocalesProvider/index.js



const LocalesProvider = ({ changeLocale, children, localeNames }) => {
  return /* @__PURE__ */ react.createElement(context/* default */.A.Provider, { value: { changeLocale, localeNames } }, children);
};
LocalesProvider.propTypes = {
  changeLocale: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).element.isRequired,
  localeNames: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_LocalesProvider = (LocalesProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/init.js

const init_init = (localeNames) => {
  const languageFromLocaleStorage = window.localStorage.getItem(utils_localStorageKey);
  const appLanguage = localeNames[languageFromLocaleStorage] ? languageFromLocaleStorage : "en";
  return {
    locale: appLanguage,
    localeNames
  };
};
/* harmony default export */ const LanguageProvider_init = (init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/reducer.js
const LanguageProvider_reducer_initialState = {
  localeNames: { en: "English" },
  locale: "en"
};
const languageProviderReducer = (state = LanguageProvider_reducer_initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOCALE": {
      const { locale } = action;
      if (!state.localeNames[locale]) {
        return state;
      }
      return { ...state, locale };
    }
    default: {
      return state;
    }
  }
};
/* harmony default export */ const LanguageProvider_reducer = (languageProviderReducer);


;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/index.js








const LanguageProvider = ({ children, localeNames, messages }) => {
  const [{ locale }, dispatch] = (0,react.useReducer)(LanguageProvider_reducer, LanguageProvider_reducer_initialState, () => LanguageProvider_init(localeNames));
  (0,react.useEffect)(() => {
    window.localStorage.setItem(utils_localStorageKey, locale);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);
  const changeLocale = (locale2) => {
    dispatch({
      type: "CHANGE_LOCALE",
      locale: locale2
    });
  };
  const appMessages = defaultsDeep_default()(messages[locale], messages.en);
  return /* @__PURE__ */ react.createElement(provider/* default */.A, { locale, defaultLocale: "en", messages: appMessages, textComponent: "span" }, /* @__PURE__ */ react.createElement(components_LocalesProvider, { changeLocale, localeNames }, children));
};
LanguageProvider.propTypes = {
  children: (prop_types_default()).element.isRequired,
  localeNames: prop_types_default().objectOf((prop_types_default()).string).isRequired,
  messages: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_LanguageProvider = (LanguageProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/DesignSystemProvider.mjs + 2 modules
var DesignSystemProvider = __webpack_require__(72);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 16 modules
var hooks = __webpack_require__(35287);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GlobalStyle/index.js

const GlobalStyle = (0,styled_components_browser_esm/* createGlobalStyle */.DU)`
  body {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;
/* harmony default export */ const components_GlobalStyle = (GlobalStyle);

;// CONCATENATED MODULE: ./.cache/admin/src/components/Theme/index.js






const Theme = ({ children }) => {
  const { currentTheme, themes } = (0,hooks/* useThemeToggle */.fD)();
  const { locale } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(DesignSystemProvider/* DesignSystemProvider */.b, { locale, theme: themes[currentTheme] || themes.light }, children, /* @__PURE__ */ react.createElement(components_GlobalStyle, null));
};
Theme.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_Theme = (Theme);

;// CONCATENATED MODULE: ./.cache/admin/src/components/ThemeToggleProvider/index.js



const THEME_KEY = "STRAPI_THEME";
const getDefaultTheme = () => {
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const persistedTheme = localStorage.getItem(THEME_KEY);
  if (!persistedTheme) {
    localStorage.setItem(THEME_KEY, browserTheme);
  }
  return persistedTheme || browserTheme;
};
const ThemeToggleProvider = ({ children, themes }) => {
  const [currentTheme, setCurrentTheme] = (0,react.useState)(getDefaultTheme());
  const handleChangeTheme = (0,react.useCallback)(
    (nextTheme) => {
      setCurrentTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    },
    [setCurrentTheme]
  );
  const themeValues = (0,react.useMemo)(() => {
    return {
      currentTheme,
      onChangeTheme: handleChangeTheme,
      themes
    };
  }, [currentTheme, handleChangeTheme, themes]);
  return /* @__PURE__ */ react.createElement(contexts/* ThemeToggleContext */.ZY.Provider, { value: themeValues }, children);
};
ThemeToggleProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  themes: prop_types_default().shape({
    light: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    dark: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    custom: (prop_types_default()).object
  }).isRequired
};
/* harmony default export */ const components_ThemeToggleProvider = (ThemeToggleProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/Providers/index.js











const queryClient = new es.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
const Providers = ({
  authLogo,
  children,
  components,
  customFields,
  fields,
  getAdminInjectedComponents,
  getPlugin,
  localeNames,
  menu,
  menuLogo,
  messages,
  plugins,
  runHookParallel,
  runHookSeries,
  runHookWaterfall,
  settings,
  showReleaseNotification,
  showTutorials,
  store,
  themes
}) => {
  return /* @__PURE__ */ react.createElement(components_LanguageProvider, { messages, localeNames }, /* @__PURE__ */ react.createElement(components_ThemeToggleProvider, { themes }, /* @__PURE__ */ react.createElement(components_Theme, null, /* @__PURE__ */ react.createElement(es.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ react.createElement(react_redux_es/* Provider */.Kq, { store }, /* @__PURE__ */ react.createElement(contexts/* AdminContext */.tl.Provider, { value: { getAdminInjectedComponents } }, /* @__PURE__ */ react.createElement(
    components_ConfigurationsProvider,
    {
      authLogo,
      menuLogo,
      showReleaseNotification,
      showTutorials
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* StrapiAppProvider */._F,
      {
        getPlugin,
        menu,
        plugins,
        runHookParallel,
        runHookWaterfall,
        runHookSeries,
        settings
      },
      /* @__PURE__ */ react.createElement(helper_plugin_esm/* LibraryProvider */.$B, { components, fields }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* CustomFieldsProvider */.Eq, { customFields }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* AutoReloadOverlayBlockerProvider */.O0, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* OverlayBlockerProvider */.e3, null, /* @__PURE__ */ react.createElement(components_GuidedTour, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* NotificationsProvider */._b, null, children))))))
    )
  )))))));
};
Providers.propTypes = {
  authLogo: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).any]).isRequired,
  children: (prop_types_default()).element.isRequired,
  components: (prop_types_default()).object.isRequired,
  customFields: (prop_types_default()).object.isRequired,
  fields: (prop_types_default()).object.isRequired,
  getAdminInjectedComponents: (prop_types_default()).func.isRequired,
  getPlugin: (prop_types_default()).func.isRequired,
  localeNames: prop_types_default().objectOf((prop_types_default()).string).isRequired,
  menu: prop_types_default().arrayOf(
    prop_types_default().shape({
      to: (prop_types_default()).string.isRequired,
      icon: (prop_types_default()).func.isRequired,
      intlLabel: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }).isRequired,
      permissions: (prop_types_default()).array,
      Component: (prop_types_default()).func
    })
  ).isRequired,
  menuLogo: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).any]).isRequired,
  messages: (prop_types_default()).object.isRequired,
  plugins: (prop_types_default()).object.isRequired,
  runHookParallel: (prop_types_default()).func.isRequired,
  runHookWaterfall: (prop_types_default()).func.isRequired,
  runHookSeries: (prop_types_default()).func.isRequired,
  settings: (prop_types_default()).object.isRequired,
  showReleaseNotification: (prop_types_default()).bool.isRequired,
  showTutorials: (prop_types_default()).bool.isRequired,
  store: (prop_types_default()).object.isRequired,
  themes: prop_types_default().shape({
    light: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    dark: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    custom: (prop_types_default()).object
  }).isRequired
};
/* harmony default export */ const components_Providers = (Providers);

// EXTERNAL MODULE: ./.cache/admin/src/core/apis/index.js + 6 modules
var apis = __webpack_require__(32807);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(82960);
;// CONCATENATED MODULE: ./.cache/admin/src/core/store/configureStore.js

const configureStore = (appMiddlewares, appReducers) => {
  let composeEnhancers = redux.compose;
  const middlewares = [];
  appMiddlewares.forEach((middleware) => {
    middlewares.push(middleware());
  });
  if (false) {}
  const store = (0,redux.createStore)(
    createReducer(appReducers, {}),
    {},
    composeEnhancers((0,redux.applyMiddleware)(...middlewares))
  );
  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(appReducers, store.asyncReducers));
  };
  return store;
};
const createReducer = (appReducers, asyncReducers) => {
  return (0,redux.combineReducers)({
    ...appReducers,
    ...asyncReducers
  });
};
/* harmony default export */ const store_configureStore = (configureStore);

// EXTERNAL MODULE: ./.cache/admin/src/core/utils/basename.js
var basename = __webpack_require__(13275);
;// CONCATENATED MODULE: ./.cache/admin/src/core/utils/createHook.js
const createHook = () => {
  const _handlers = [];
  return {
    register(fn) {
      _handlers.push(fn);
    },
    delete(handler) {
      _handlers.splice(_handlers.indexOf(handler), 1);
    },
    runWaterfall(args, store) {
      return _handlers.reduce((acc, fn) => fn(acc, store), args);
    },
    async runWaterfallAsync(args, store) {
      let result = args;
      for (const fn of _handlers) {
        result = await fn(result, store);
      }
      return result;
    },
    runSeries(...args) {
      return _handlers.map((fn) => fn(...args));
    },
    async runSeriesAsync(...args) {
      const result = [];
      for (const fn of _handlers) {
        result.push(await fn(...args));
      }
      return result;
    },
    runParallel(...args) {
      return Promise.all(
        _handlers.map((fn) => {
          return fn(...args);
        })
      );
    }
  };
};
/* harmony default export */ const utils_createHook = (createHook);

;// CONCATENATED MODULE: ./.cache/admin/src/core/utils/index.js



// EXTERNAL MODULE: ./.cache/admin/src/exposedHooks.js
var exposedHooks = __webpack_require__(38167);
;// CONCATENATED MODULE: ./.cache/admin/src/favicon.png
const favicon_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAXVBMVEUAAABIRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9IRP9JRf9IRf9IRP5IRP5JRP9JRf////+Vk/+zsv++vf9mY/9taf9/fP+Jh//c3P9RTf/Ibar2AAAAFHRSTlMA/MJX+fPt48cahaff1dMaGqcahSpTPmAAAAEvSURBVFjD7dfNTsMwEATgXcf5cdKEtixtcYH3f0xEibIguba1g8Slc+58iqUedmhNaMbJzX3Xema5G2bfdv3iprE50s80g7Yqw0Oz1Z+cmOL2a38nxuy+BSfmuNv7BUhDRAMCDESBEYCDvsD6hmcMGGnCgIkcBjhaMGCmHgN66jCgoxYDWvIY4IkxgHFAkrmeU7kmfpkG4uUllXMtEE82QPs2QPs2QPs2QPs2QPsAoH0DoH0LoH0QeN3ydtnyXg38ok76MQ/gAfwf8JH8V18LQOljomBAFAyIkga4CGT7XAtEuQf4IpDri6e2BoiZA6OrAGLuxOnLQMweWXMRyPVlwQ/NAwZMNGLACJ/76ODYo5MHHl3o7EOHZ6BbjtbpG/5kfOv8P7ilbv7PX/M/rMVPqrI3XI3nd3sAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./.cache/admin/src/injectionZones.js
const injectionZones = {
  admin: {
    // Temporary injection zone, support for the react-tour plugin in foodadvisor
    tutorials: {
      links: []
    }
  },
  contentManager: {
    editView: { informations: [], "right-links": [] },
    listView: {
      actions: [],
      deleteModalAdditionalInfos: [],
      publishModalAdditionalInfos: [],
      unpublishModalAdditionalInfos: []
    }
  }
};
/* harmony default export */ const src_injectionZones = (injectionZones);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/SkipToContent.mjs
var SkipToContent = __webpack_require__(43509);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
;// CONCATENATED MODULE: ./.cache/admin/src/components/PrivateRoute/index.js




const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { pathname, search } = (0,react_router/* useLocation */.zy)();
  return /* @__PURE__ */ react.createElement(
    react_router/* Route */.qh,
    {
      path,
      render: (props) => helper_plugin_esm/* auth */.j2.getToken() !== null ? /* @__PURE__ */ react.createElement(Component, { ...rest, ...props }) : /* @__PURE__ */ react.createElement(
        react_router/* Redirect */.rd,
        {
          to: {
            pathname: "/auth/login",
            search: pathname !== "/" && `?redirectTo=${encodeURIComponent(`${pathname}${search}`)}`
          }
        }
      )
    }
  );
};
PrivateRoute.propTypes = {
  component: (prop_types_default()).any.isRequired,
  path: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_PrivateRoute = ((0,react.memo)(PrivateRoute));

;// CONCATENATED MODULE: ./.cache/admin/src/constants.js
const ADMIN_PERMISSIONS_CE = {
  contentManager: {
    main: [],
    collectionTypesConfigurations: [
      {
        action: "plugin::content-manager.collection-types.configure-view",
        subject: null
      }
    ],
    componentsConfigurations: [
      {
        action: "plugin::content-manager.components.configure-layout",
        subject: null
      }
    ],
    singleTypesConfigurations: [
      {
        action: "plugin::content-manager.single-types.configure-view",
        subject: null
      }
    ]
  },
  marketplace: {
    main: [{ action: "admin::marketplace.read", subject: null }],
    read: [{ action: "admin::marketplace.read", subject: null }]
  },
  settings: {
    roles: {
      main: [
        { action: "admin::roles.create", subject: null },
        { action: "admin::roles.update", subject: null },
        { action: "admin::roles.read", subject: null },
        { action: "admin::roles.delete", subject: null }
      ],
      create: [{ action: "admin::roles.create", subject: null }],
      delete: [{ action: "admin::roles.delete", subject: null }],
      read: [{ action: "admin::roles.read", subject: null }],
      update: [{ action: "admin::roles.update", subject: null }]
    },
    users: {
      main: [
        { action: "admin::users.create", subject: null },
        { action: "admin::users.read", subject: null },
        { action: "admin::users.update", subject: null },
        { action: "admin::users.delete", subject: null }
      ],
      create: [{ action: "admin::users.create", subject: null }],
      delete: [{ action: "admin::users.delete", subject: null }],
      read: [{ action: "admin::users.read", subject: null }],
      update: [{ action: "admin::users.update", subject: null }]
    },
    webhooks: {
      main: [
        { action: "admin::webhooks.create", subject: null },
        { action: "admin::webhooks.read", subject: null },
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      create: [{ action: "admin::webhooks.create", subject: null }],
      delete: [{ action: "admin::webhooks.delete", subject: null }],
      read: [
        { action: "admin::webhooks.read", subject: null },
        // NOTE: We need to check with the API
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      update: [{ action: "admin::webhooks.update", subject: null }]
    },
    "api-tokens": {
      main: [{ action: "admin::api-tokens.access", subject: null }],
      create: [{ action: "admin::api-tokens.create", subject: null }],
      delete: [{ action: "admin::api-tokens.delete", subject: null }],
      read: [{ action: "admin::api-tokens.read", subject: null }],
      update: [{ action: "admin::api-tokens.update", subject: null }],
      regenerate: [{ action: "admin::api-tokens.regenerate", subject: null }]
    },
    "transfer-tokens": {
      main: [{ action: "admin::transfer.tokens.access", subject: null }],
      create: [{ action: "admin::transfer.tokens.create", subject: null }],
      delete: [{ action: "admin::transfer.tokens.delete", subject: null }],
      read: [{ action: "admin::transfer.tokens.read", subject: null }],
      update: [{ action: "admin::transfer.tokens.update", subject: null }],
      regenerate: [{ action: "admin::transfer.tokens.regenerate", subject: null }]
    },
    "project-settings": {
      read: [{ action: "admin::project-settings.read", subject: null }],
      update: [{ action: "admin::project-settings.update", subject: null }]
    }
  }
};

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(74090);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(80005);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(96275);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(84058);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(99498);
// EXTERNAL MODULE: ./.cache/admin/src/utils/formatAPIErrors.js
var formatAPIErrors = __webpack_require__(14879);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(37198);
// EXTERNAL MODULE: ./.cache/admin/src/pages/AuthPage/components/Login/BaseLogin.js
var BaseLogin = __webpack_require__(62093);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/Login/index.js




const LoginCE = (loginProps) => {
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(BaseLogin/* default */.A, { ...loginProps }));
};
LoginCE.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
LoginCE.propTypes = {
  onSubmit: (prop_types_default()).func
};

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.mjs
var Main = __webpack_require__(45171);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs + 2 modules
var Typography = __webpack_require__(17937);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.mjs
var TextInput = __webpack_require__(14591);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.mjs
var Button = __webpack_require__(48921);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(81594);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ForgotPassword/index.js








const ForgotPassword = ({ onSubmit, schema }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues: {
        email: ""
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha" }, formatMessage({
      id: "Auth.form.button.password-recovery",
      defaultMessage: "Password Recovery"
    }))), errors.errorMessage && /* @__PURE__ */ react.createElement(
      Typography/* Typography */.o,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      formatMessage({
        id: errors.errorMessage,
        defaultMessage: "An error occurred"
      })
    )), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.k,
      {
        error: errors.email ? formatMessage({
          id: errors.email,
          defaultMessage: "This email is invalid."
        }) : "",
        value: values.email,
        onChange: handleChange,
        label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
        placeholder: formatMessage({
          id: "Auth.form.email.placeholder",
          defaultMessage: "kai@doe.com"
        }),
        name: "email",
        required: true
      }
    ), /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", fullWidth: true }, formatMessage({
      id: "Auth.form.button.forgot-password",
      defaultMessage: "Send Email"
    }))))
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { to: "/auth/login" }, formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }))))));
};
ForgotPassword.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
ForgotPassword.propTypes = {
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const components_ForgotPassword = (ForgotPassword);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ForgotPasswordSuccess/index.js






const ForgotPasswordSuccess = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha" }, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.title",
    defaultMessage: "Email sent"
  }))), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.text.email",
    defaultMessage: "It can take a few minutes to receive your password recovery link."
  })), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin",
    defaultMessage: "If you do not receive this link, please contact your administrator."
  }))))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { to: "/auth/login" }, formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }))))));
};
/* harmony default export */ const components_ForgotPasswordSuccess = (ForgotPasswordSuccess);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/Oops/index.js






const Oops = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const query = (0,helper_plugin_esm/* useQuery */.IT)();
  const message = query.get("info") || formatMessage({
    id: "Auth.components.Oops.text",
    defaultMessage: "Your account has been suspended."
  });
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha" }, formatMessage({ id: "Auth.components.Oops.title", defaultMessage: "Oops..." }))), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, message), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
    id: "Auth.components.Oops.text.admin",
    defaultMessage: "If this is a mistake, please contact your administrator."
  }))))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { to: "/auth/login" }, formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }))))));
};
/* harmony default export */ const components_Oops = (Oops);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.mjs
var Grid = __webpack_require__(99525);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.mjs
var GridItem = __webpack_require__(88888);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.mjs
var Checkbox = __webpack_require__(74427);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.mjs
var Eye = __webpack_require__(94995);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EyeStriked.mjs
var EyeStriked = __webpack_require__(90687);
// EXTERNAL MODULE: ./.cache/admin/src/components/NpsSurvey/hooks/useNpsSurveySettings.js
var useNpsSurveySettings = __webpack_require__(31612);
// EXTERNAL MODULE: ./.cache/admin/src/pages/AuthPage/components/FieldActionWrapper/index.js
var FieldActionWrapper = __webpack_require__(99507);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/Register/index.js














const A = styled_components_browser_esm/* default */.Ay.a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const PasswordInput = (0,styled_components_browser_esm/* default */.Ay)((0,TextInput/* TextInput */.k))`
  ::-ms-reveal {
    display: none;
  }
`;
const Register = ({ authType, fieldsToDisable, noSignin, onSubmit, schema }) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { push } = (0,react_router/* useHistory */.W6)();
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = (0,react.useState)(false);
  const [submitCount, setSubmitCount] = (0,react.useState)(0);
  const [userInfo, setUserInfo] = (0,react.useState)({});
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const query = (0,helper_plugin_esm/* useQuery */.IT)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { setNpsSurveySettings } = (0,useNpsSurveySettings/* useNpsSurveySettings */.W)();
  const registrationToken = query.get("registrationToken");
  (0,react.useEffect)(() => {
    if (registrationToken) {
      const getData = async () => {
        try {
          const {
            data: { data }
          } = await get(`/admin/registration-info`, {
            params: {
              registrationToken
            }
          });
          if (data) {
            setUserInfo(data);
          }
        } catch (error) {
          const message = formatAPIError(error);
          toggleNotification({
            type: "warning",
            message
          });
          push(`/auth/oops?info=${encodeURIComponent(message)}`);
        }
      };
      getData();
    }
  }, [registrationToken]);
  function normalizeData(data) {
    return Object.entries(data).reduce((acc, [key, value]) => {
      let normalizedvalue = value;
      if (!["password", "confirmPassword"].includes(key) && typeof value === "string") {
        normalizedvalue = normalizedvalue.trim();
        if (key === "lastname") {
          normalizedvalue = normalizedvalue || null;
        }
      }
      acc[key] = normalizedvalue;
      return acc;
    }, {});
  }
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues: {
        firstname: userInfo.firstname || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || "",
        password: "",
        confirmPassword: "",
        registrationToken: registrationToken || void 0,
        news: false
      },
      onSubmit: async (data, formik) => {
        const normalizedData = normalizeData(data);
        try {
          await schema.validate(normalizedData, { abortEarly: false });
          if (submitCount > 0 && authType === "register-admin") {
            trackUsage("didSubmitWithErrorsFirstAdmin", { count: submitCount.toString() });
          }
          if (registrationToken) {
            onSubmit(
              { userInfo: omit_default()(normalizedData, ["registrationToken"]), registrationToken },
              formik
            );
          } else {
            onSubmit(normalizedData, formik);
          }
          setNpsSurveySettings({ enabled: data.news });
        } catch (err) {
          const errors = (0,helper_plugin_esm/* getYupInnerErrors */.ed)(err);
          setSubmitCount(submitCount + 1);
          formik.setErrors(errors);
        }
      },
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true }, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "center", gap: 3 }, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha", textAlign: "center" }, formatMessage({
        id: "Auth.form.welcome.title",
        defaultMessage: "Welcome to Strapi!"
      })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600", textAlign: "center" }, formatMessage({
        id: "Auth.form.register.subtitle",
        defaultMessage: "Credentials are only used to authenticate in Strapi. All saved data will be stored in your database."
      }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6, marginTop: 7 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.k,
        {
          name: "firstname",
          required: true,
          value: values.firstname,
          error: errors.firstname ? formatMessage(errors.firstname) : void 0,
          onChange: handleChange,
          label: formatMessage({
            id: "Auth.form.firstname.label",
            defaultMessage: "Firstname"
          })
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.k,
        {
          name: "lastname",
          value: values.lastname,
          onChange: handleChange,
          label: formatMessage({
            id: "Auth.form.lastname.label",
            defaultMessage: "Lastname"
          })
        }
      ))), /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.k,
        {
          name: "email",
          disabled: fieldsToDisable.includes("email"),
          value: values.email,
          onChange: handleChange,
          error: errors.email ? formatMessage(errors.email) : void 0,
          required: true,
          label: formatMessage({
            id: "Auth.form.email.label",
            defaultMessage: "Email"
          }),
          type: "email"
        }
      ), /* @__PURE__ */ react.createElement(
        PasswordInput,
        {
          name: "password",
          onChange: handleChange,
          value: values.password,
          error: errors.password ? formatMessage(errors.password) : void 0,
          endAction: /* @__PURE__ */ react.createElement(
            FieldActionWrapper/* default */.A,
            {
              onClick: (e) => {
                e.preventDefault();
                setPasswordShown((prev) => !prev);
              },
              label: formatMessage(
                passwordShown ? {
                  id: "Auth.form.password.show-password",
                  defaultMessage: "Show password"
                } : {
                  id: "Auth.form.password.hide-password",
                  defaultMessage: "Hide password"
                }
              )
            },
            passwordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
          ),
          hint: formatMessage({
            id: "Auth.form.password.hint",
            defaultMessage: "Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number"
          }),
          required: true,
          label: formatMessage({
            id: "global.password",
            defaultMessage: "Password"
          }),
          type: passwordShown ? "text" : "password"
        }
      ), /* @__PURE__ */ react.createElement(
        PasswordInput,
        {
          name: "confirmPassword",
          onChange: handleChange,
          value: values.confirmPassword,
          error: errors.confirmPassword ? formatMessage(errors.confirmPassword) : void 0,
          endAction: /* @__PURE__ */ react.createElement(
            FieldActionWrapper/* default */.A,
            {
              onClick: (e) => {
                e.preventDefault();
                setConfirmPasswordShown((prev) => !prev);
              },
              label: formatMessage(
                confirmPasswordShown ? {
                  id: "Auth.form.password.show-password",
                  defaultMessage: "Show password"
                } : {
                  id: "Auth.form.password.hide-password",
                  defaultMessage: "Hide password"
                }
              )
            },
            confirmPasswordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
          ),
          required: true,
          label: formatMessage({
            id: "Auth.form.confirmPassword.label",
            defaultMessage: "Confirm Password"
          }),
          type: confirmPasswordShown ? "text" : "password"
        }
      ), /* @__PURE__ */ react.createElement(
        Checkbox/* Checkbox */.S,
        {
          onValueChange: (checked) => {
            handleChange({ target: { value: checked, name: "news" } });
          },
          value: values.news,
          name: "news",
          "aria-label": "news"
        },
        formatMessage(
          {
            id: "Auth.form.register.news.label",
            defaultMessage: "Keep me updated about new features & upcoming improvements (by doing this you accept the {terms} and the {policy})."
          },
          {
            terms: /* @__PURE__ */ react.createElement(A, { target: "_blank", href: "https://strapi.io/terms", rel: "noreferrer" }, formatMessage({
              id: "Auth.privacy-policy-agreement.terms",
              defaultMessage: "terms"
            })),
            policy: /* @__PURE__ */ react.createElement(A, { target: "_blank", href: "https://strapi.io/privacy", rel: "noreferrer" }, formatMessage({
              id: "Auth.privacy-policy-agreement.policy",
              defaultMessage: "policy"
            }))
          }
        )
      ), /* @__PURE__ */ react.createElement(Button/* Button */.$, { fullWidth: true, size: "L", type: "submit" }, formatMessage({
        id: "Auth.form.button.register",
        defaultMessage: "Let's start"
      })))));
    }
  ), !noSignin && /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { label: "Auth.link.signin", to: "/auth/login" }, formatMessage({
    id: "Auth.link.signin.account",
    defaultMessage: "Already have an account?"
  }))))));
};
Register.defaultProps = {
  fieldsToDisable: [],
  noSignin: false,
  onSubmit: (e) => e.preventDefault()
};
Register.propTypes = {
  authType: (prop_types_default()).string.isRequired,
  fieldsToDisable: (prop_types_default()).array,
  noSignin: (prop_types_default()).bool,
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    validate: (prop_types_default()).func.isRequired,
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const components_Register = (Register);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ResetPassword/index.js











const ResetPassword_PasswordInput = (0,styled_components_browser_esm/* default */.Ay)((0,TextInput/* TextInput */.k))`
  ::-ms-reveal {
    display: none;
  }
`;
const ResetPassword_ForgotPassword = ({ onSubmit, schema }) => {
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues: {
        password: "",
        confirmPassword: ""
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, { noValidate: true }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h1", variant: "alpha" }, formatMessage({
      id: "global.reset-password",
      defaultMessage: "Reset password"
    }))), errors.errorMessage && /* @__PURE__ */ react.createElement(
      Typography/* Typography */.o,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      formatMessage({
        id: errors.errorMessage,
        defaultMessage: "An error occurred"
      })
    )), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(
      ResetPassword_PasswordInput,
      {
        name: "password",
        onChange: handleChange,
        value: values.password,
        error: errors.password ? formatMessage({
          id: errors.password,
          defaultMessage: "This field is required."
        }) : void 0,
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper/* default */.A,
          {
            onClick: (e) => {
              e.preventDefault();
              setPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
        ),
        hint: formatMessage({
          id: "Auth.form.password.hint",
          defaultMessage: "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"
        }),
        required: true,
        label: formatMessage({
          id: "global.password",
          defaultMessage: "Password"
        }),
        type: passwordShown ? "text" : "password"
      }
    ), /* @__PURE__ */ react.createElement(
      ResetPassword_PasswordInput,
      {
        name: "confirmPassword",
        onChange: handleChange,
        value: values.confirmPassword,
        error: errors.confirmPassword ? formatMessage({
          id: errors.confirmPassword,
          defaultMessage: "This value is required."
        }) : void 0,
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper/* default */.A,
          {
            onClick: (e) => {
              e.preventDefault();
              setConfirmPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          confirmPasswordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
        ),
        required: true,
        label: formatMessage({
          id: "Auth.form.confirmPassword.label",
          defaultMessage: "Confirm Password"
        }),
        type: confirmPasswordShown ? "text" : "password"
      }
    ), /* @__PURE__ */ react.createElement(Button/* Button */.$, { fullwidth: true, type: "submit" }, formatMessage({
      id: "global.change-password",
      defaultMessage: "Change password"
    }))))
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { to: "/auth/login" }, formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }))))));
};
ResetPassword_ForgotPassword.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
ResetPassword_ForgotPassword.propTypes = {
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const ResetPassword = (ResetPassword_ForgotPassword);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/constants.js







const FORMS = {
  "forgot-password": {
    Component: components_ForgotPassword,
    endPoint: "forgot-password",
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: yup_es/* object */.Ik().shape({
      email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).required(helper_plugin_esm/* translatedErrors */.iW.required)
    }),
    inputsPrefix: ""
  },
  "forgot-password-success": {
    Component: components_ForgotPasswordSuccess,
    endPoint: "",
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: null,
    inputsPrefix: ""
  },
  // the `Component` attribute is set after all forms and CE/EE components are loaded, but since we
  // are here outside of a React component we can not use the hook directly
  login: {
    endPoint: "login",
    fieldsToDisable: [],
    fieldsToOmit: ["rememberMe"],
    schema: yup_es/* object */.Ik().shape({
      email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).required(helper_plugin_esm/* translatedErrors */.iW.required),
      password: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
      rememberMe: yup_es/* bool */.lc().nullable()
    }),
    inputsPrefix: ""
  },
  oops: {
    Component: components_Oops,
    endPoint: null,
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: null,
    inputsPrefix: ""
  },
  register: {
    Component: components_Register,
    endPoint: "register",
    fieldsToDisable: ["email"],
    fieldsToOmit: ["userInfo.confirmPassword", "userInfo.news", "userInfo.email"],
    schema: yup_es/* object */.Ik().shape({
      firstname: yup_es/* string */.Yj().trim().required(helper_plugin_esm/* translatedErrors */.iW.required),
      lastname: yup_es/* string */.Yj().nullable(),
      password: yup_es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helper_plugin_esm/* translatedErrors */.iW.required),
      confirmPassword: yup_es/* string */.Yj().oneOf([yup_es/* ref */.KR("password"), null], "components.Input.error.password.noMatch").required(helper_plugin_esm/* translatedErrors */.iW.required),
      registrationToken: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required)
    }),
    inputsPrefix: "userInfo."
  },
  "register-admin": {
    Component: components_Register,
    endPoint: "register-admin",
    noSignin: true,
    fieldsToDisable: [],
    fieldsToOmit: ["confirmPassword", "news"],
    schema: yup_es/* object */.Ik().shape({
      firstname: yup_es/* string */.Yj().trim().required(helper_plugin_esm/* translatedErrors */.iW.required),
      lastname: yup_es/* string */.Yj().nullable(),
      password: yup_es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helper_plugin_esm/* translatedErrors */.iW.required),
      email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).strict().lowercase(helper_plugin_esm/* translatedErrors */.iW.lowercase).required(helper_plugin_esm/* translatedErrors */.iW.required),
      confirmPassword: yup_es/* string */.Yj().oneOf([yup_es/* ref */.KR("password"), null], "components.Input.error.password.noMatch").required(helper_plugin_esm/* translatedErrors */.iW.required)
    }),
    inputsPrefix: ""
  },
  "reset-password": {
    Component: ResetPassword,
    endPoint: "reset-password",
    fieldsToDisable: [],
    fieldsToOmit: ["confirmPassword"],
    schema: yup_es/* object */.Ik().shape({
      password: yup_es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number").required(helper_plugin_esm/* translatedErrors */.iW.required),
      confirmPassword: yup_es/* string */.Yj().oneOf([yup_es/* ref */.KR("password"), null], "components.Input.error.password.noMatch").required(helper_plugin_esm/* translatedErrors */.iW.required)
    })
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/init.js
const AuthPage_init_init = (initialState) => {
  return initialState;
};
/* harmony default export */ const AuthPage_init = (AuthPage_init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/reducer.js


const AuthPage_reducer_initialState = {
  formErrors: {},
  modifiedData: {},
  requestError: null
};
const AuthPage_reducer_reducer = (state, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      set_default()(draftState.modifiedData, action.keys.split("."), action.value);
      break;
    }
    case "RESET_PROPS": {
      return AuthPage_reducer_initialState;
    }
    case "SET_DATA": {
      draftState.modifiedData = action.data;
      break;
    }
    case "SET_ERRORS": {
      draftState.formErrors = action.errors;
      break;
    }
    case "SET_REQUEST_ERROR": {
      draftState.requestError = {
        errorMessage: action.errorMessage,
        errorStatus: action.errorStatus
      };
      break;
    }
    default:
      return draftState;
  }
});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/index.js
















const AuthPage = ({ hasAdmin, setHasAdmin }) => {
  const {
    push,
    location: { search }
  } = (0,react_router/* useHistory */.W6)();
  const { changeLocale } = (0,useLocalesProvider/* default */.A)();
  const { setSkipped } = (0,helper_plugin_esm/* useGuidedTour */.Cx)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const {
    params: { authType }
  } = (0,react_router/* useRouteMatch */.W5)("/auth/:authType");
  const query = (0,helper_plugin_esm/* useQuery */.IT)();
  const Login = (0,useEnterprise/* useEnterprise */.h)(
    LoginCE,
    async () => (await __webpack_require__.e(/* import() */ 6737).then(__webpack_require__.bind(__webpack_require__, 26737))).LoginEE
  );
  const forms = (0,useEnterprise/* useEnterprise */.h)(
    FORMS,
    async () => (await __webpack_require__.e(/* import() */ 1212).then(__webpack_require__.bind(__webpack_require__, 11212))).FORMS,
    {
      combine(ceForms, eeForms) {
        return {
          ...ceForms,
          ...eeForms
        };
      },
      defaultValue: FORMS
    }
  );
  const [{ formErrors, modifiedData, requestError }, dispatch] = (0,react.useReducer)(
    AuthPage_reducer_reducer,
    AuthPage_reducer_initialState,
    AuthPage_init
  );
  const CancelToken = axios/* default */.A.CancelToken;
  const source = CancelToken.source();
  const { endPoint, fieldsToDisable, fieldsToOmit, inputsPrefix, schema, ...rest } = forms?.[authType] ?? {};
  (0,react.useEffect)(() => {
    return () => {
      source.cancel("Component unmounted");
    };
  }, []);
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  (0,react.useEffect)(() => {
    dispatch({
      type: "RESET_PROPS"
    });
  }, [authType]);
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  const handleSubmit = async (e, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    const body = omit_default()(e, fieldsToOmit);
    const requestURL = `/admin/${endPoint}`;
    if (authType === "login") {
      await loginRequest(e, requestURL, { setSubmitting, setErrors });
    }
    if (authType === "register" || authType === "register-admin") {
      await registerRequest(e, requestURL, { setSubmitting, setErrors });
    }
    if (authType === "forgot-password") {
      await forgotPasswordRequest(body, requestURL, { setSubmitting, setErrors });
    }
    if (authType === "reset-password") {
      await resetPasswordRequest(body, requestURL, { setSubmitting, setErrors });
    }
  };
  const forgotPasswordRequest = async (body, requestURL, { setSubmitting, setErrors }) => {
    try {
      await post(requestURL, body, { cancelToken: source.token });
      push("/auth/forgot-password-success");
    } catch (err) {
      console.error(err);
      setErrors({ errorMessage: "notification.error" });
    } finally {
      setSubmitting(false);
    }
  };
  const loginRequest = async (body, requestURL, { setSubmitting, setErrors }) => {
    try {
      const {
        data: {
          data: { token, user }
        }
      } = await post(requestURL, omit_default()(body, fieldsToOmit), { cancelToken: source.token });
      if (user.preferedLanguage) {
        changeLocale(user.preferedLanguage);
      }
      helper_plugin_esm/* auth */.j2.setToken(token, body.rememberMe);
      helper_plugin_esm/* auth */.j2.setUserInfo(user, body.rememberMe);
      redirectToPreviousLocation();
    } catch (err) {
      if (err.response) {
        const errorMessage = get_default()(
          err,
          ["response", "data", "error", "message"],
          "Something went wrong"
        );
        if (camelCase_default()(errorMessage).toLowerCase() === "usernotactive") {
          push("/auth/oops");
          dispatch({
            type: "RESET_PROPS"
          });
          return;
        }
        setErrors({ errorMessage });
      }
    } finally {
      setSubmitting(false);
    }
  };
  const registerRequest = async (body, requestURL, { setSubmitting, setErrors }) => {
    try {
      trackUsage("willCreateFirstAdmin");
      const {
        data: {
          data: { token, user }
        }
      } = await post(requestURL, omit_default()(body, fieldsToOmit), { cancelToken: source.token });
      helper_plugin_esm/* auth */.j2.setToken(token, false);
      helper_plugin_esm/* auth */.j2.setUserInfo(user, false);
      setSubmitting(false);
      setHasAdmin(true);
      const { roles } = user;
      if (roles) {
        const isUserSuperAdmin = roles.find(({ code }) => code === "strapi-super-admin");
        if (isUserSuperAdmin) {
          utils_persistStateToLocaleStorage.setSkipped(false);
          setSkipped(false);
          trackUsage("didLaunchGuidedtour");
        }
      }
      if (authType === "register" && body.userInfo.news === true || authType === "register-admin" && body.news === true) {
        push({
          pathname: "/usecase",
          search: `?hasAdmin=${hasAdmin}`
        });
        return;
      }
      redirectToPreviousLocation();
    } catch (err) {
      trackUsage("didNotCreateFirstAdmin");
      if (err.response) {
        const { data } = err.response;
        const apiErrors = (0,formatAPIErrors/* default */.A)(data);
        setErrors({ apiErrors });
      }
    }
  };
  const resetPasswordRequest = async (body, requestURL, { setErrors, setSubmitting }) => {
    try {
      const {
        data: {
          data: { token, user }
        }
      } = await post(
        requestURL,
        { ...body, resetPasswordToken: query.get("code") },
        { cancelToken: source.token }
      );
      helper_plugin_esm/* auth */.j2.setToken(token, false);
      helper_plugin_esm/* auth */.j2.setUserInfo(user, false);
      push("/");
    } catch (err) {
      if (err.response) {
        const errorMessage = get_default()(err, ["response", "data", "message"], "Something went wrong");
        const errorStatus = get_default()(err, ["response", "data", "statusCode"], 400);
        dispatch({
          type: "SET_REQUEST_ERROR",
          errorMessage,
          errorStatus
        });
        setErrors({ errorMessage });
      }
    } finally {
      setSubmitting(false);
    }
  };
  const redirectToPreviousLocation = () => {
    if (authType === "login") {
      const redirectTo = query.get("redirectTo");
      const redirectUrl = redirectTo ? decodeURIComponent(redirectTo) : "/";
      push(redirectUrl);
    } else {
      push("/");
    }
  };
  if (!forms[authType] || hasAdmin && authType === "register-admin" || helper_plugin_esm/* auth */.j2.getToken()) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.rd, { to: "/" });
  }
  if (!hasAdmin && authType !== "register-admin") {
    return /* @__PURE__ */ react.createElement(
      react_router/* Redirect */.rd,
      {
        to: {
          pathname: "/auth/register-admin",
          // Forward the `?redirectTo` from /auth/login
          // /abc => /auth/login?redirectTo=%2Fabc => /auth/register-admin?redirectTo=%2Fabc
          search
        }
      }
    );
  }
  if (Login) {
    forms.login.Component = Login;
  }
  if (!Login) {
    return null;
  }
  const { Component } = forms?.[authType] ?? {};
  return /* @__PURE__ */ react.createElement(
    Component,
    {
      ...rest,
      authType,
      fieldsToDisable,
      formErrors,
      inputsPrefix,
      modifiedData,
      onChange: handleChange,
      onSubmit: handleSubmit,
      requestError,
      schema
    }
  );
};
AuthPage.defaultProps = {
  hasAdmin: false
};
AuthPage.propTypes = {
  hasAdmin: (prop_types_default()).bool,
  setHasAdmin: (prop_types_default()).func.isRequired
};
/* harmony default export */ const pages_AuthPage = (AuthPage);

// EXTERNAL MODULE: ./.cache/admin/src/pages/NotFoundPage/index.js
var NotFoundPage = __webpack_require__(57817);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.mjs
var Select = __webpack_require__(28753);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.mjs
var Option = __webpack_require__(39410);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.mjs
var TextButton = __webpack_require__(65299);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/UseCasePage/index.js









const options = [
  {
    intlLabel: {
      id: "Usecase.front-end",
      defaultMessage: "Front-end developer"
    },
    value: "front_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.back-end",
      defaultMessage: "Back-end developer"
    },
    value: "back_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.full-stack",
      defaultMessage: "Full-stack developer"
    },
    value: "full_stack_developer"
  },
  {
    intlLabel: {
      id: "global.content-manager",
      defaultMessage: "Content Manager"
    },
    value: "content_manager"
  },
  {
    intlLabel: {
      id: "Usecase.content-creator",
      defaultMessage: "Content Creator"
    },
    value: "content_creator"
  },
  {
    intlLabel: {
      id: "Usecase.other",
      defaultMessage: "Other"
    },
    value: "other"
  }
];
const TypographyCenter = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  text-align: center;
`;
const UseCasePage = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { push, location } = (0,react_router/* useHistory */.W6)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [role, setRole] = (0,react.useState)();
  const [otherRole, setOtherRole] = (0,react.useState)("");
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { firstname, email } = helper_plugin_esm/* auth */.j2.getUserInfo();
  const { hasAdmin } = (0,lib.parse)(location?.search, { ignoreQueryPrefix: true });
  const isOther = role === "other";
  const handleSubmit = async (event, skipPersona) => {
    event.preventDefault();
    try {
      await post("https://analytics.strapi.io/register", {
        email,
        username: firstname,
        firstAdmin: Boolean(!hasAdmin),
        persona: {
          role: skipPersona ? void 0 : role,
          otherRole: skipPersona ? void 0 : otherRole
        }
      });
      toggleNotification({
        type: "success",
        message: {
          id: "Usecase.notification.success.project-created",
          defaultMessage: "Project has been successfully created"
        }
      });
      push("/");
    } catch (err) {
    }
  };
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, { labelledBy: "usecase-title" }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement("form", { onSubmit: (e) => handleSubmit(e, false) }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", paddingBottom: 7 }, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingBottom: 1, width: (0,helper_plugin_esm/* pxToRem */.a8)(250) }, /* @__PURE__ */ react.createElement(TypographyCenter, { variant: "alpha", as: "h1", id: "usecase-title" }, formatMessage({
    id: "Usecase.title",
    defaultMessage: "Tell us a bit more about yourself"
  })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.l,
    {
      id: "usecase",
      "data-testid": "usecase",
      label: formatMessage({
        id: "Usecase.input.work-type",
        defaultMessage: "What type of work do you do?"
      }),
      onChange: setRole,
      value: role
    },
    options.map(({ intlLabel, value }) => /* @__PURE__ */ react.createElement(Option/* Option */.c, { key: value, value }, formatMessage(intlLabel)))
  ), isOther && /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      name: "other",
      label: formatMessage({ id: "Usecase.other", defaultMessage: "Other" }),
      value: otherRole,
      onChange: (e) => setOtherRole(e.target.value),
      "data-testid": "other"
    }
  ), /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", size: "L", fullWidth: true, disabled: !role }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(TextButton/* TextButton */.Q, { onClick: () => handleSubmit(true) }, formatMessage({
    id: "Usecase.button.skip",
    defaultMessage: "Skip this question"
  }))))));
};
/* harmony default export */ const pages_UseCasePage = (UseCasePage);

// EXTERNAL MODULE: ./.cache/admin/src/pages/App/constants.js
var constants = __webpack_require__(45901);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/index.js
















const AuthenticatedApp = (0,react.lazy)(
  () => Promise.all(/* import() | Admin-authenticatedApp */[__webpack_require__.e(7989), __webpack_require__.e(6651)]).then(__webpack_require__.bind(__webpack_require__, 28385))
);
function App() {
  const adminPermissions = (0,useEnterprise/* useEnterprise */.h)(
    ADMIN_PERMISSIONS_CE,
    async () => (await __webpack_require__.e(/* import() */ 3380).then(__webpack_require__.bind(__webpack_require__, 33380))).ADMIN_PERMISSIONS_EE,
    {
      combine(cePermissions, eePermissions) {
        return merge_default()({}, cePermissions, eePermissions);
      },
      defaultValue: ADMIN_PERMISSIONS_CE
    }
  );
  const routes = (0,useEnterprise/* useEnterprise */.h)(
    constants/* ROUTES_CE */.g1,
    async () => (await __webpack_require__.e(/* import() */ 7088).then(__webpack_require__.bind(__webpack_require__, 7088))).ROUTES_EE,
    {
      defaultValue: []
    }
  );
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { updateProjectSettings } = (0,hooks/* useConfigurations */.Bp)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [{ isLoading, hasAdmin, uuid, deviceId }, setState] = (0,react.useState)({
    isLoading: true,
    hasAdmin: false
  });
  const dispatch = (0,react_redux_es/* useDispatch */.wA)();
  const appInfo = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const { get, post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const authRoutes = (0,react.useMemo)(() => {
    return (0,utils/* makeUniqueRoutes */._f)(
      routes.map(({ to, Component, exact }) => (0,utils/* createRoute */.un)(Component, to, exact))
    );
  }, [routes]);
  const [telemetryProperties, setTelemetryProperties] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    dispatch({ type: constants/* SET_ADMIN_PERMISSIONS */.wF, payload: adminPermissions });
  }, [adminPermissions, dispatch]);
  (0,react.useEffect)(() => {
    const currentToken = helper_plugin_esm/* auth */.j2.getToken();
    const renewToken = async () => {
      try {
        const {
          data: {
            data: { token }
          }
        } = await post("/admin/renew-token", { token: currentToken });
        helper_plugin_esm/* auth */.j2.updateToken(token);
      } catch (err) {
        helper_plugin_esm/* auth */.j2.clearAppStorage();
        window.location.reload();
      }
    };
    if (currentToken) {
      renewToken();
    }
  }, [post]);
  (0,react.useEffect)(() => {
    const getData = async () => {
      try {
        const {
          data: {
            data: { hasAdmin: hasAdmin2, uuid: uuid2, menuLogo, authLogo }
          }
        } = await get(`/admin/init`);
        updateProjectSettings({
          menuLogo: (0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.vX)(menuLogo),
          authLogo: (0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.vX)(authLogo)
        });
        if (uuid2) {
          const {
            data: { data: properties }
          } = await get(`/admin/telemetry-properties`, {
            // NOTE: needed because the interceptors of the fetchClient redirect to /login when receive a 401 and it would end up in an infinite loop when the user doesn't have a session.
            validateStatus: (status) => status < 500
          });
          setTelemetryProperties(properties);
          try {
            const event = "didInitializeAdministration";
            await post(
              "https://analytics.strapi.io/api/v2/track",
              {
                // This event is anonymous
                event,
                userId: "",
                deviceId,
                eventPropeties: {},
                userProperties: { environment: appInfo.currentEnvironment },
                groupProperties: { ...properties, projectId: uuid2 }
              },
              {
                headers: {
                  "X-Strapi-Event": event
                }
              }
            );
          } catch (e) {
          }
        }
        setState({ isLoading: false, hasAdmin: hasAdmin2, uuid: uuid2, deviceId });
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: { id: "app.containers.App.notification.error.init" }
        });
      }
    };
    getData();
  }, [toggleNotification, updateProjectSettings]);
  const setHasAdmin = (hasAdmin2) => setState((prev) => ({ ...prev, hasAdmin: hasAdmin2 }));
  const trackingInfo = (0,react.useMemo)(
    () => ({
      uuid,
      telemetryProperties,
      deviceId
    }),
    [uuid, telemetryProperties, deviceId]
  );
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  return /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null) }, /* @__PURE__ */ react.createElement(SkipToContent/* SkipToContent */.o, null, formatMessage({ id: "skipToContent" })), /* @__PURE__ */ react.createElement(helper_plugin_esm/* TrackingProvider */.J0, { value: trackingInfo }, /* @__PURE__ */ react.createElement(react_router/* Switch */.dO, null, authRoutes, /* @__PURE__ */ react.createElement(
    react_router/* Route */.qh,
    {
      path: "/auth/:authType",
      render: (routerProps) => /* @__PURE__ */ react.createElement(pages_AuthPage, { ...routerProps, setHasAdmin, hasAdmin }),
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(components_PrivateRoute, { path: "/usecase", component: pages_UseCasePage }), /* @__PURE__ */ react.createElement(components_PrivateRoute, { path: "/", component: AuthenticatedApp }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "", component: NotFoundPage["default"] }))));
}
/* harmony default export */ const pages_App = (App);

;// CONCATENATED MODULE: ./.cache/admin/src/translations/languageNativeNames.js
const languageNativeNames = {
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  ca: "Catal\xE0",
  cs: "\u010Ce\u0161tina",
  de: "Deutsch",
  dk: "Dansk",
  en: "English",
  es: "Espa\xF1ol",
  eu: "Euskara",
  fr: "Fran\xE7ais",
  gu: "Gujarati",
  he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
  hu: "Magyar",
  id: "Indonesian",
  it: "Italiano",
  ja: "\u65E5\u672C\u8A9E",
  ko: "\uD55C\uAD6D\uC5B4",
  ml: "Malayalam",
  ms: "Melayu",
  nl: "Nederlands",
  no: "Norwegian",
  pl: "Polski",
  "pt-BR": "Portugu\xEAs (Brasil)",
  pt: "Portugu\xEAs (Portugal)",
  ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  sk: "Sloven\u010Dina",
  sv: "Swedish",
  th: "\u0E44\u0E17\u0E22",
  tr: "T\xFCrk\xE7e",
  uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  vi: "Ti\u1EBFng Vi\u1EC7t",
  "zh-Hans": "\u4E2D\u6587 (\u7B80\u4F53)",
  zh: "\u4E2D\u6587 (\u7E41\u9AD4)",
  sa: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924",
  hi: "\u0939\u093F\u0928\u094D\u0926\u0940"
};
/* harmony default export */ const translations_languageNativeNames = (languageNativeNames);

;// CONCATENATED MODULE: ./.cache/admin/src/StrapiApp.js



















class StrapiApp {
  constructor({ adminConfig, appPlugins, library, middlewares, reducers }) {
    this.customConfigurations = adminConfig.config;
    this.customBootstrapConfiguration = adminConfig.bootstrap;
    this.configurations = {
      authLogo: logo_strapi_2022,
      head: { favicon: favicon_namespaceObject },
      locales: ["en"],
      menuLogo: logo_strapi_2022,
      notifications: { releases: true },
      themes: { light: lightTheme/* lightTheme */._, dark: darkTheme/* darkTheme */.a },
      translations: {},
      tutorials: true
    };
    this.appPlugins = appPlugins || {};
    this.library = library;
    this.middlewares = middlewares;
    this.plugins = {};
    this.reducers = reducers;
    this.translations = {};
    this.hooksDict = {};
    this.admin = {
      injectionZones: src_injectionZones
    };
    this.customFields = apis/* customFields */.VB;
    this.menu = [];
    this.settings = {
      global: {
        id: "global",
        intlLabel: {
          id: "Settings.global",
          defaultMessage: "Global Settings"
        },
        links: []
      }
    };
  }
  addComponents = (components) => {
    if (Array.isArray(components)) {
      components.map((compo) => this.library.components.add(compo));
    } else {
      this.library.components.add(components);
    }
  };
  addCorePluginMenuLink = (link) => {
    const stringifiedLink = JSON.stringify(link);
    browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
    browser_default()(
      typeof link.to === "string",
      `Expected link.to to be a string instead received ${typeof link.to}`
    );
    browser_default()(
      ["/plugins/content-type-builder", "/plugins/upload"].includes(link.to),
      "This method is not available for your plugin"
    );
    browser_default()(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    this.menu.push(link);
  };
  addFields = (fields) => {
    if (Array.isArray(fields)) {
      fields.map((field) => this.library.fields.add(field));
    } else {
      this.library.fields.add(fields);
    }
  };
  addMenuLink = (link) => {
    const stringifiedLink = JSON.stringify(link);
    browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
    browser_default()(
      typeof link.to === "string",
      `Expected link.to to be a string instead received ${typeof link.to}`
    );
    browser_default()(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    browser_default()(
      link.Component && typeof link.Component === "function",
      `link.Component should be a valid React Component`
    );
    browser_default()(
      link.icon && typeof link.icon === "function",
      `link.Icon should be a valid React Component`
    );
    this.menu.push(link);
  };
  addMiddlewares = (middlewares) => {
    middlewares.forEach((middleware) => {
      this.middlewares.add(middleware);
    });
  };
  addReducers = (reducers) => {
    Object.keys(reducers).forEach((reducerName) => {
      this.reducers.add(reducerName, reducers[reducerName]);
    });
  };
  addSettingsLink = (sectionId, link) => {
    browser_default()(this.settings[sectionId], "The section does not exist");
    const stringifiedLink = JSON.stringify(link);
    browser_default()(link.id, `link.id should be defined for ${stringifiedLink}`);
    browser_default()(
      link.intlLabel?.id && link.intlLabel?.defaultMessage,
      `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
    );
    browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
    browser_default()(
      link.Component && typeof link.Component === "function",
      `link.Component should be a valid React Component`
    );
    this.settings[sectionId].links.push(link);
  };
  addSettingsLinks = (sectionId, links) => {
    browser_default()(this.settings[sectionId], "The section does not exist");
    browser_default()(Array.isArray(links), "TypeError expected links to be an array");
    links.forEach((link) => {
      this.addSettingsLink(sectionId, link);
    });
  };
  async bootstrap() {
    Object.keys(this.appPlugins).forEach((plugin) => {
      const bootstrap = this.appPlugins[plugin].bootstrap;
      if (bootstrap) {
        bootstrap({
          addSettingsLink: this.addSettingsLink,
          addSettingsLinks: this.addSettingsLinks,
          getPlugin: this.getPlugin,
          injectContentManagerComponent: this.injectContentManagerComponent,
          injectAdminComponent: this.injectAdminComponent,
          registerHook: this.registerHook
        });
      }
    });
    if (isFunction_default()(this.customBootstrapConfiguration)) {
      this.customBootstrapConfiguration({
        addComponents: this.addComponents,
        addFields: this.addFields,
        addMenuLink: this.addMenuLink,
        addReducers: this.addReducers,
        addSettingsLink: this.addSettingsLink,
        addSettingsLinks: this.addSettingsLinks,
        getPlugin: this.getPlugin,
        injectContentManagerComponent: this.injectContentManagerComponent,
        injectAdminComponent: this.injectAdminComponent,
        registerHook: this.registerHook
      });
    }
  }
  bootstrapAdmin = async () => {
    await this.createCustomConfigurations();
    this.createHook(exposedHooks/* INJECT_COLUMN_IN_TABLE */.kT);
    this.createHook(exposedHooks/* MUTATE_COLLECTION_TYPES_LINKS */.OC);
    this.createHook(exposedHooks/* MUTATE_SINGLE_TYPES_LINKS */.Md);
    this.createHook(exposedHooks/* MUTATE_EDIT_VIEW_LAYOUT */.$4);
    return Promise.resolve();
  };
  createCustomConfigurations = async () => {
    if (this.customConfigurations?.locales) {
      this.configurations.locales = [
        "en",
        ...this.customConfigurations.locales?.filter((loc) => loc !== "en") || []
      ];
    }
    if (this.customConfigurations?.auth?.logo) {
      this.configurations.authLogo = this.customConfigurations.auth.logo;
    }
    if (this.customConfigurations?.menu?.logo) {
      this.configurations.menuLogo = this.customConfigurations.menu.logo;
    }
    if (this.customConfigurations?.head?.favicon) {
      this.configurations.head.favicon = this.customConfigurations.head.favicon;
    }
    if (this.customConfigurations?.theme) {
      const darkTheme2 = this.customConfigurations.theme.dark;
      const lightTheme2 = this.customConfigurations.theme.light;
      if (!darkTheme2 && !lightTheme2) {
        console.warn(
          `[deprecated] In future versions, Strapi will stop supporting this theme customization syntax. The theme configuration accepts a light and a dark key to customize each theme separately. See https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#theme-extension.`
        );
        merge_default()(this.configurations.themes.light, this.customConfigurations.theme);
      }
      if (lightTheme2)
        merge_default()(this.configurations.themes.light, lightTheme2);
      if (darkTheme2)
        merge_default()(this.configurations.themes.dark, darkTheme2);
    }
    if (this.customConfigurations?.notifications?.releases !== void 0) {
      this.configurations.notifications.releases = this.customConfigurations.notifications.releases;
    }
    if (this.customConfigurations?.tutorials !== void 0) {
      this.configurations.tutorials = this.customConfigurations.tutorials;
    }
  };
  createHook = (name) => {
    this.hooksDict[name] = utils_createHook();
  };
  createSettingSection = (section, links) => {
    browser_default()(section.id, "section.id should be defined");
    browser_default()(
      section.intlLabel?.id && section.intlLabel?.defaultMessage,
      "section.intlLabel should be defined"
    );
    browser_default()(Array.isArray(links), "TypeError expected links to be an array");
    browser_default()(this.settings[section.id] === void 0, "A similar section already exists");
    this.settings[section.id] = { ...section, links: [] };
    links.forEach((link) => {
      this.addSettingsLink(section.id, link);
    });
  };
  createStore = () => {
    const store = store_configureStore(this.middlewares.middlewares, this.reducers.reducers);
    return store;
  };
  getAdminInjectedComponents = (moduleName, containerName, blockName) => {
    try {
      return this.admin.injectionZones[moduleName][containerName][blockName] || [];
    } catch (err) {
      console.error("Cannot get injected component", err);
      return err;
    }
  };
  getPlugin = (pluginId) => {
    return this.plugins[pluginId];
  };
  async initialize() {
    Object.keys(this.appPlugins).forEach((plugin) => {
      this.appPlugins[plugin].register(this);
    });
  }
  injectContentManagerComponent = (containerName, blockName, component) => {
    browser_default()(
      this.admin.injectionZones.contentManager[containerName]?.[blockName],
      `The ${containerName} ${blockName} zone is not defined in the content manager`
    );
    browser_default()(component, "A Component must be provided");
    this.admin.injectionZones.contentManager[containerName][blockName].push(component);
  };
  injectAdminComponent = (containerName, blockName, component) => {
    browser_default()(
      this.admin.injectionZones.admin[containerName]?.[blockName],
      `The ${containerName} ${blockName} zone is not defined in the admin`
    );
    browser_default()(component, "A Component must be provided");
    this.admin.injectionZones.admin[containerName][blockName].push(component);
  };
  /**
   * Load the admin translations
   * @returns {Object} The imported admin translations
   */
  async loadAdminTrads() {
    const arrayOfPromises = this.configurations.locales.map((locale) => {
      return __webpack_require__(44081)(`./${locale}.json`).then(({ default: data }) => {
        return { data, locale };
      }).catch(() => {
        return { data: null, locale };
      });
    });
    const adminLocales = await Promise.all(arrayOfPromises);
    const translations = adminLocales.reduce((acc, current) => {
      if (current.data) {
        acc[current.locale] = current.data;
      }
      return acc;
    }, {});
    return translations;
  }
  /**
   * Load the application's translations and merged the custom translations
   * with the default ones.
   *
   */
  async loadTrads() {
    const adminTranslations = await this.loadAdminTrads();
    const arrayOfPromises = Object.keys(this.appPlugins).map((plugin) => {
      const registerTrads = this.appPlugins[plugin].registerTrads;
      if (registerTrads) {
        return registerTrads({ locales: this.configurations.locales });
      }
      return null;
    }).filter((a) => a);
    const pluginsTrads = await Promise.all(arrayOfPromises);
    const mergedTrads = pluginsTrads.reduce((acc, currentPluginTrads) => {
      const pluginTrads = currentPluginTrads.reduce((acc1, current) => {
        acc1[current.locale] = current.data;
        return acc1;
      }, {});
      Object.keys(pluginTrads).forEach((locale) => {
        acc[locale] = { ...acc[locale], ...pluginTrads[locale] };
      });
      return acc;
    }, {});
    const translations = this.configurations.locales.reduce((acc, current) => {
      acc[current] = {
        ...adminTranslations[current],
        ...mergedTrads[current] || {},
        ...this.customConfigurations?.translations?.[current]
      };
      return acc;
    }, {});
    this.configurations.translations = translations;
    return Promise.resolve();
  }
  registerHook = (name, fn) => {
    browser_default()(
      this.hooksDict[name],
      `The hook ${name} is not defined. You are trying to register a hook that does not exist in the application.`
    );
    this.hooksDict[name].register(fn);
  };
  registerPlugin = (pluginConf) => {
    const plugin = (0,apis/* Plugin */.k_)(pluginConf);
    this.plugins[plugin.pluginId] = plugin;
  };
  runHookSeries = (name, asynchronous = false) => asynchronous ? this.hooksDict[name].runSeriesAsync() : this.hooksDict[name].runSeries();
  runHookWaterfall = (name, initialValue, asynchronous = false, store) => {
    return asynchronous ? this.hooksDict[name].runWaterfallAsync(initialValue, store) : this.hooksDict[name].runWaterfall(initialValue, store);
  };
  runHookParallel = (name) => this.hooksDict[name].runParallel();
  render() {
    const store = this.createStore();
    const localeNames = pick_default()(translations_languageNativeNames, this.configurations.locales || []);
    const {
      components: { components },
      fields: { fields }
    } = this.library;
    return /* @__PURE__ */ react.createElement(
      components_Providers,
      {
        authLogo: this.configurations.authLogo,
        components,
        fields,
        customFields: this.customFields,
        localeNames,
        getAdminInjectedComponents: this.getAdminInjectedComponents,
        getPlugin: this.getPlugin,
        messages: this.configurations.translations,
        menu: this.menu,
        menuLogo: this.configurations.menuLogo,
        plugins: this.plugins,
        runHookParallel: this.runHookParallel,
        runHookWaterfall: (name, initialValue, async = false) => {
          return this.runHookWaterfall(name, initialValue, async, store);
        },
        runHookSeries: this.runHookSeries,
        themes: this.configurations.themes,
        settings: this.settings,
        showTutorials: this.configurations.tutorials,
        showReleaseNotification: this.configurations.notifications.releases,
        store
      },
      /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        Helmet/* Helmet */.m,
        {
          link: [
            {
              rel: "icon",
              type: "image/png",
              href: this.configurations.head.favicon
            }
          ],
          htmlAttributes: { lang: localStorage.getItem(utils_localStorageKey) || "en" }
        }
      ), /* @__PURE__ */ react.createElement(react_router_dom/* BrowserRouter */.Kd, { basename: basename/* default */.A }, /* @__PURE__ */ react.createElement(pages_App, { store })))
    );
  }
}
/* harmony default export */ const src_StrapiApp = (({ adminConfig = {}, appPlugins, library, middlewares, reducers }) => new StrapiApp({ adminConfig, appPlugins, library, middlewares, reducers }));


/***/ }),

/***/ 83606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const LocalesProviderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalesProviderContext);


/***/ }),

/***/ 99498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83606);


const useLocalesProvider = () => {
  const { changeLocale, localeNames, messages } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
  return { changeLocale, localeNames, messages };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalesProvider);


/***/ }),

/***/ 31612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useNpsSurveySettings)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39150);

function useNpsSurveySettings() {
  const [npsSurveySettings, setNpsSurveySettings] = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .usePersistentState */ .ud)(
    "STRAPI_NPS_SURVEY_SETTINGS",
    {
      enabled: true,
      lastResponseDate: null,
      firstDismissalDate: null,
      lastDismissalDate: null
    }
  );
  return { npsSurveySettings, setNpsSurveySettings };
}


/***/ }),

/***/ 81594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40948);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35287);



const Img = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.img`
  height: ${72 / 16}rem;
`;
const Logo = () => {
  const {
    logos: { auth }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useConfigurations */ .Bp)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Img, { src: auth?.custom ?? auth.default, "aria-hidden": true, alt: "" });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 2256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tl: () => (/* reexport */ Admin),
  tm: () => (/* reexport */ Configurations),
  he: () => (/* reexport */ PermisssionsDataManagerContext),
  ZY: () => (/* reexport */ ThemeToggle)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/Admin/index.js

const AdminContext = (0,react.createContext)({});
/* harmony default export */ const Admin = (AdminContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/Configurations/index.js

const ConfigurationsContext = (0,react.createContext)({});
/* harmony default export */ const Configurations = (ConfigurationsContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/PermisssionsDataManagerContext/index.js

const PermissionsDataManagerContext = (0,react.createContext)({});
/* harmony default export */ const PermisssionsDataManagerContext = (PermissionsDataManagerContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ThemeToggle/index.js

const ThemeToggleContext = (0,react.createContext)({});
/* harmony default export */ const ThemeToggle = (ThemeToggleContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/index.js






/***/ }),

/***/ 13275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const basename = "/admin/".replace(window.location.origin, "");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basename);


/***/ }),

/***/ 38167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $4: () => (/* binding */ MUTATE_EDIT_VIEW_LAYOUT),
/* harmony export */   Md: () => (/* binding */ MUTATE_SINGLE_TYPES_LINKS),
/* harmony export */   OC: () => (/* binding */ MUTATE_COLLECTION_TYPES_LINKS),
/* harmony export */   kT: () => (/* binding */ INJECT_COLUMN_IN_TABLE)
/* harmony export */ });
const INJECT_COLUMN_IN_TABLE = "Admin/CM/pages/ListView/inject-column-in-table";
const MUTATE_COLLECTION_TYPES_LINKS = "Admin/CM/pages/App/mutate-collection-types-links";
const MUTATE_EDIT_VIEW_LAYOUT = "Admin/CM/pages/EditView/mutate-edit-view-layout";
const MUTATE_SINGLE_TYPES_LINKS = "Admin/CM/pages/App/mutate-single-types-links";


/***/ }),

/***/ 35287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bp: () => (/* reexport */ hooks_useConfigurations),
  b: () => (/* reexport */ hooks_useMenu),
  pn: () => (/* reexport */ hooks_usePermissionsDataManager),
  g4: () => (/* reexport */ hooks_useRegenerate),
  T6: () => (/* reexport */ hooks_useSettingsForm),
  ki: () => (/* reexport */ hooks_useSettingsMenu),
  fD: () => (/* reexport */ hooks_useThemeToggle)
});

// UNUSED EXPORTS: useContentTypes, useLicenseLimitNotification, useReleaseNotification

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(2256);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useConfigurations/index.js


const useConfigurations = () => {
  const context = (0,react.useContext)(contexts/* ConfigurationsContext */.tm);
  return context;
};
/* harmony default export */ const hooks_useConfigurations = (useConfigurations);

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(30420);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Puzzle.mjs
var Puzzle = __webpack_require__(93920);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ShoppingCart.mjs
var ShoppingCart = __webpack_require__(85422);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.mjs
var Cog = __webpack_require__(26793);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(88055);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js

const checkPermissions = (userPermissions, permissionsToCheck) => permissionsToCheck.map(({ permissions }) => (0,helper_plugin_esm/* hasPermissions */.v$)(userPermissions, permissions));
/* harmony default export */ const utils_checkPermissions = (checkPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/getGeneralLinks.js


const getGeneralLinks = async (userPermissions, generalSectionRawLinks, shouldUpdateStrapi) => {
  const generalSectionPermissionsPromises = utils_checkPermissions(
    userPermissions,
    generalSectionRawLinks
  );
  const generalSectionLinksPermissions = await Promise.all(generalSectionPermissionsPromises);
  const authorizedGeneralSectionLinks = generalSectionRawLinks.filter(
    (_, index) => generalSectionLinksPermissions[index]
  );
  const settingsLinkIndex = authorizedGeneralSectionLinks.findIndex(
    (obj) => obj.to === "/settings"
  );
  if (settingsLinkIndex === -1) {
    return [];
  }
  const authorizedGeneralLinksClone = cloneDeep_default()(authorizedGeneralSectionLinks);
  authorizedGeneralLinksClone[settingsLinkIndex].notificationsCount = shouldUpdateStrapi ? 1 : 0;
  return authorizedGeneralLinksClone;
};
/* harmony default export */ const utils_getGeneralLinks = (getGeneralLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/getPluginSectionLinks.js

const getPluginSectionLinks = async (userPermissions, pluginsSectionRawLinks) => {
  const pluginSectionPermissionsPromises = utils_checkPermissions(
    userPermissions,
    pluginsSectionRawLinks
  );
  const pluginSectionLinksPermissions = await Promise.all(pluginSectionPermissionsPromises);
  const authorizedPluginSectionLinks = pluginsSectionRawLinks.filter(
    (_, index) => pluginSectionLinksPermissions[index]
  );
  return authorizedPluginSectionLinks;
};
/* harmony default export */ const utils_getPluginSectionLinks = (getPluginSectionLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/index.js







const useMenu = () => {
  const { allPermissions: userPermissions } = (0,helper_plugin_esm/* useRBACProvider */.r5)();
  const { shouldUpdateStrapi } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const { menu } = (0,helper_plugin_esm/* useStrapiApp */.vD)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const [menuWithUserPermissions, setMenuWithUserPermissions] = react.useState({
    generalSectionLinks: [
      {
        icon: Puzzle/* default */.A,
        intlLabel: {
          id: "global.plugins",
          defaultMessage: "Plugins"
        },
        to: "/list-plugins",
        permissions: permissions.marketplace.main
      },
      {
        icon: ShoppingCart/* default */.A,
        intlLabel: {
          id: "global.marketplace",
          defaultMessage: "Marketplace"
        },
        to: "/marketplace",
        permissions: permissions.marketplace.main
      },
      {
        icon: Cog/* default */.A,
        intlLabel: {
          id: "global.settings",
          defaultMessage: "Settings"
        },
        to: "/settings",
        // Permissions of this link are retrieved in the init phase
        // using the settings menu
        permissions: [],
        notificationsCount: 0
      }
    ],
    pluginsSectionLinks: [],
    isLoading: true
  });
  const generalSectionLinksRef = react.useRef(menuWithUserPermissions.generalSectionLinks);
  react.useEffect(() => {
    async function applyMenuPermissions() {
      const authorizedPluginSectionLinks = await utils_getPluginSectionLinks(userPermissions, menu);
      const authorizedGeneralSectionLinks = await utils_getGeneralLinks(
        userPermissions,
        generalSectionLinksRef.current,
        shouldUpdateStrapi
      );
      setMenuWithUserPermissions((state) => ({
        ...state,
        generalSectionLinks: authorizedGeneralSectionLinks,
        pluginsSectionLinks: authorizedPluginSectionLinks,
        isLoading: false
      }));
    }
    applyMenuPermissions();
  }, [
    setMenuWithUserPermissions,
    generalSectionLinksRef,
    userPermissions,
    menu,
    permissions,
    shouldUpdateStrapi
  ]);
  return menuWithUserPermissions;
};
/* harmony default export */ const hooks_useMenu = (useMenu);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/usePermissionsDataManager/index.js


const usePermissionsDataManager = () => (0,react.useContext)(contexts/* PermissionsDataManagerContext */.he);
/* harmony default export */ const hooks_usePermissionsDataManager = (usePermissionsDataManager);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useRegenerate/index.js


const useRegenerate = (url, id, onRegenerate, onError) => {
  const [isLoadingConfirmation, setIsLoadingConfirmation] = (0,react.useState)(false);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const regenerateData = async () => {
    try {
      const {
        data: {
          data: { accessKey }
        }
      } = await post(`${url}${id}/regenerate`);
      setIsLoadingConfirmation(false);
      onRegenerate(accessKey);
    } catch (error) {
      setIsLoadingConfirmation(false);
      if (onError) {
        onError(error);
      } else {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
    }
  };
  return {
    regenerateData,
    isLoadingConfirmation
  };
};
/* harmony default export */ const hooks_useRegenerate = (useRegenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useReleaseNotification/index.js


const showUpdateNotif = !JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF"));
const useReleaseNotification = () => {
  const { latestStrapiReleaseTag, shouldUpdateStrapi } = useAppInfo();
  const toggleNotification = useNotification();
  useEffect(() => {
    if (shouldUpdateStrapi && showUpdateNotif) {
      toggleNotification({
        type: "info",
        message: { id: "notification.version.update.message" },
        link: {
          url: `https://github.com/strapi/strapi/releases/tag/${latestStrapiReleaseTag}`,
          label: {
            id: "global.see-more"
          }
        },
        blockTransition: true,
        onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true)
      });
    }
  }, [latestStrapiReleaseTag, shouldUpdateStrapi, toggleNotification]);
  return null;
};
/* harmony default export */ const hooks_useReleaseNotification = ((/* unused pure expression or super */ null && (useReleaseNotification)));

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 4 modules
var utils = __webpack_require__(80005);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/init.js
const init = (initialState, fieldsToPick) => {
  return { ...initialState, fieldsToPick };
};
/* harmony default export */ const useSettingsForm_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(41261);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(44383);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(63560);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__(73357);
var unset_default = /*#__PURE__*/__webpack_require__.n(unset);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/reducer.js




const initialState = {
  fieldsToPick: [],
  formErrors: {},
  initialData: {},
  isLoading: true,
  modifiedData: {},
  showHeaderButtonLoader: false,
  showHeaderLoader: true
};
const reducer = (state, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.isLoading = false;
      draftState.showHeaderLoader = false;
      draftState.initialData = pick_default()(action.data, state.fieldsToPick);
      draftState.modifiedData = pick_default()(action.data, state.fieldsToPick);
      break;
    }
    case "ON_CANCEL": {
      draftState.modifiedData = state.initialData;
      draftState.formErrors = {};
      break;
    }
    case "ON_CHANGE": {
      if (action.inputType === "password" && !action.value) {
        unset_default()(draftState.modifiedData, action.keys.split("."));
      } else if (action.keys.includes("username") && !action.value) {
        set_default()(draftState.modifiedData, action.keys.split("."), null);
      } else {
        set_default()(draftState.modifiedData, action.keys.split("."), action.value);
      }
      break;
    }
    case "ON_SUBMIT": {
      draftState.showHeaderButtonLoader = true;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = pick_default()(action.data, state.fieldsToPick);
      draftState.modifiedData = pick_default()(action.data, state.fieldsToPick);
      draftState.showHeaderButtonLoader = false;
      break;
    }
    case "SET_ERRORS": {
      draftState.formErrors = action.errors;
      draftState.showHeaderButtonLoader = false;
      break;
    }
    default:
      return draftState;
  }
});


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/index.js






const useSettingsForm = (endPoint, schema, cbSuccess, fieldsToPick) => {
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader, showHeaderLoader },
    dispatch
  ] = (0,react.useReducer)(reducer, initialState, () => useSettingsForm_init(initialState, fieldsToPick));
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { get, put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  (0,react.useEffect)(() => {
    const getData = async () => {
      try {
        const {
          data: { data }
        } = await get(endPoint);
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data,
          fieldsToPick
        });
      } catch (err) {
        console.error(err.response);
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    };
    if (endPoint) {
      getData();
    }
  }, [endPoint]);
  const handleCancel = () => {
    dispatch({
      type: "ON_CANCEL"
    });
  };
  const handleChange = ({ target: { name, value, type: inputType } }) => {
    dispatch({
      type: "ON_CHANGE",
      inputType,
      keys: name,
      value
    });
  };
  const setField = (fieldName, value) => {
    dispatch({
      type: "ON_CHANGE",
      keys: fieldName,
      value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await (0,utils/* checkFormValidity */.RB)(modifiedData, schema);
    dispatch({
      type: "SET_ERRORS",
      errors: errors || {}
    });
    if (!errors) {
      try {
        lockApp();
        dispatch({
          type: "ON_SUBMIT"
        });
        const cleanedData = omit_default()(modifiedData, ["confirmPassword", "registrationToken"]);
        if (cleanedData.roles) {
          cleanedData.roles = cleanedData.roles.map((role) => role.id);
        }
        if (cleanedData.ssoLockedRoles) {
          cleanedData.ssoLockedRoles = [...new Set(cleanedData.ssoLockedRoles)];
        }
        const {
          data: { data }
        } = await put(endPoint, cleanedData);
        cbSuccess(data);
        dispatch({
          type: "ON_SUBMIT_SUCCEEDED",
          data
        });
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved" }
        });
      } catch (err) {
        const data = err?.response?.payload ?? { data: {} };
        if (!!data?.data && typeof data.data === "string") {
          toggleNotification({
            type: "warning",
            message: data.data
          });
        } else {
          toggleNotification({
            type: "warning",
            message: data.message
          });
        }
        const apiErrors = (0,utils/* formatAPIErrors */.N_)(data);
        dispatch({
          type: "SET_ERRORS",
          errors: apiErrors
        });
      } finally {
        unlockApp();
      }
    }
  };
  return [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader, showHeaderLoader },
    dispatch,
    { handleCancel, handleChange, handleSubmit, setField }
  ];
};
/* harmony default export */ const hooks_useSettingsForm = (useSettingsForm);

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(74090);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/constants.js
const LINKS_CE = {
  global: [
    {
      intlLabel: { id: "Settings.application.title", defaultMessage: "Overview" },
      to: "/settings/application-infos",
      id: "000-application-infos",
      permissions: []
    },
    {
      intlLabel: { id: "Settings.webhooks.title", defaultMessage: "Webhooks" },
      to: "/settings/webhooks",
      id: "webhooks"
    },
    {
      intlLabel: { id: "Settings.apiTokens.title", defaultMessage: "API Tokens" },
      to: "/settings/api-tokens?sort=name:ASC",
      id: "api-tokens"
    },
    {
      intlLabel: { id: "Settings.transferTokens.title", defaultMessage: "Transfer Tokens" },
      to: "/settings/transfer-tokens?sort=name:ASC",
      id: "transfer-tokens"
    }
  ],
  admin: [
    {
      intlLabel: { id: "global.roles", defaultMessage: "Roles" },
      to: "/settings/roles",
      id: "roles"
    },
    {
      intlLabel: { id: "global.users" },
      // Init the search params directly
      to: "/settings/users?pageSize=10&page=1&sort=firstname",
      id: "users"
    }
  ]
};

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/formatLinks.js
const formatLinks = (menu) => {
  return menu.map((menuSection) => {
    const formattedLinks = menuSection.links.map((link) => ({
      ...link,
      isDisplayed: false
    }));
    return { ...menuSection, links: formattedLinks };
  });
};
/* harmony default export */ const utils_formatLinks = (formatLinks);

// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(33031);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/sortLinks.js

const sortLinks = (links) => sortBy_default()(links, (link) => link.id);
/* harmony default export */ const utils_sortLinks = (sortLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/index.js








const useSettingsMenu = () => {
  const [{ isLoading, menu }, setData] = (0,react.useState)({
    isLoading: true,
    menu: []
  });
  const { allPermissions: userPermissions } = (0,helper_plugin_esm/* useRBACProvider */.r5)();
  const { shouldUpdateStrapi } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const { settings } = (0,helper_plugin_esm/* useStrapiApp */.vD)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const { global: globalLinks, admin: adminLinks } = (0,useEnterprise/* useEnterprise */.h)(
    LINKS_CE,
    async () => (await __webpack_require__.e(/* import() */ 3221).then(__webpack_require__.bind(__webpack_require__, 5602))).LINKS_EE,
    {
      combine(ceLinks, eeLinks) {
        return {
          admin: [...eeLinks.admin, ...ceLinks.admin],
          global: [...ceLinks.global, ...eeLinks.global]
        };
      },
      defaultValue: {
        admin: [],
        global: []
      }
    }
  );
  const addPermissions = (0,react.useCallback)(
    (link) => {
      if (!link.id) {
        throw new Error("The settings menu item must have an id attribute.");
      }
      return {
        ...link,
        permissions: permissions.settings?.[link.id]?.main
      };
    },
    [permissions.settings]
  );
  (0,react.useEffect)(() => {
    const getData = async () => {
      const buildMenuPermissions = (sections2) => Promise.all(
        sections2.reduce((acc, section, sectionIndex) => {
          const buildMenuPermissions2 = (links) => links.map(async (link, linkIndex) => ({
            hasPermission: await (0,helper_plugin_esm/* hasPermissions */.v$)(userPermissions, link.permissions),
            sectionIndex,
            linkIndex
          }));
          return [...acc, ...buildMenuPermissions2(section.links)];
        }, [])
      );
      const menuPermissions = await buildMenuPermissions(sections);
      setData((prev) => ({
        ...prev,
        isLoading: false,
        menu: sections.map((section, sectionIndex) => ({
          ...section,
          links: section.links.map((link, linkIndex) => {
            const permission = menuPermissions.find(
              (permission2) => permission2.sectionIndex === sectionIndex && permission2.linkIndex === linkIndex
            );
            return {
              ...link,
              isDisplayed: Boolean(permission.hasPermission)
            };
          })
        }))
      }));
    };
    const { global, ...otherSections } = settings;
    const sections = utils_formatLinks([
      {
        ...settings.global,
        links: utils_sortLinks([...settings.global.links, ...globalLinks.map(addPermissions)]).map(
          (link) => ({
            ...link,
            hasNotification: link.id === "000-application-infos" && shouldUpdateStrapi
          })
        )
      },
      {
        id: "permissions",
        intlLabel: { id: "Settings.permissions", defaultMessage: "Administration Panel" },
        links: adminLinks.map(addPermissions)
      },
      ...Object.values(otherSections)
    ]);
    getData();
  }, [adminLinks, globalLinks, userPermissions, settings, shouldUpdateStrapi, addPermissions]);
  const filterMenu = (menuItem) => {
    return {
      ...menuItem,
      links: menuItem.links.filter((link) => link.isDisplayed)
    };
  };
  return { isLoading, menu: menu.map(filterMenu) };
};
/* harmony default export */ const hooks_useSettingsMenu = (useSettingsMenu);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useThemeToggle/index.js


const useThemeToggle = () => {
  const context = (0,react.useContext)(contexts/* ThemeToggleContext */.ZY);
  return context;
};
/* harmony default export */ const hooks_useThemeToggle = (useThemeToggle);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/index.js












/***/ }),

/***/ 30420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* reexport */ useContentTypes)
});

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useContentTypes/useContentTypes.js


function useContentTypes() {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const queries = (0,es.useQueries)(
    ["components", "content-types"].map((type) => {
      return {
        queryKey: ["content-manager", type],
        async queryFn() {
          const {
            data: { data }
          } = await get(`/content-manager/${type}`);
          return data;
        },
        onError(error) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      };
    })
  );
  const [components, contentTypes] = queries;
  const isLoading = components.isLoading || contentTypes.isLoading;
  const collectionTypes = (contentTypes?.data ?? []).filter(
    (contentType) => contentType.kind === "collectionType" && contentType.isDisplayed
  );
  const singleTypes = (contentTypes?.data ?? []).filter(
    (contentType) => contentType.kind !== "collectionType" && contentType.isDisplayed
  );
  return {
    isLoading,
    components: components?.data ?? [],
    collectionTypes,
    singleTypes
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js



/***/ }),

/***/ 74090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ useEnterprise)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useEnterprise/useEnterprise.js


function isEnterprise() {
  return window.strapi.isEE;
}
function useEnterprise(ceData, eeCallback, { defaultValue = null, combine = (ceData2, eeData) => eeData, enabled = true } = {}) {
  const eeCallbackRef = (0,helper_plugin_esm/* useCallbackRef */.c9)(eeCallback);
  const combineCallbackRef = (0,helper_plugin_esm/* useCallbackRef */.c9)(combine);
  const [{ data }, setData] = react.useState({
    data: isEnterprise() && enabled ? defaultValue : ceData
  });
  react.useEffect(() => {
    async function importEE() {
      const eeData = await eeCallbackRef();
      setData({ data: combineCallbackRef(ceData, eeData) });
    }
    if (isEnterprise() && enabled) {
      importEE();
    }
  }, [ceData, eeCallbackRef, combineCallbackRef, enabled]);
  return data;
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js



/***/ }),

/***/ 37198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VP: () => (/* binding */ Column),
  A1: () => (/* binding */ LayoutContent),
  Ay: () => (/* binding */ layouts_UnauthenticatedLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(17715);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(40948);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.mjs
var SingleSelect = __webpack_require__(78909);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(99498);
;// CONCATENATED MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/LocaleToggle/index.js




const LocaleToggle = () => {
  const { changeLocale, localeNames } = (0,useLocalesProvider/* default */.A)();
  const { locale } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(SingleSelect/* SingleSelect */.Z, { value: locale, onChange: (language) => changeLocale(language) }, Object.entries(localeNames).map(([language, name]) => /* @__PURE__ */ react.createElement(SingleSelect/* SingleSelectOption */.eY, { key: language, value: language }, name)));
};
/* harmony default export */ const UnauthenticatedLayout_LocaleToggle = (LocaleToggle);

;// CONCATENATED MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js





const Wrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  margin: 0 auto;
  width: 552px;
`;
const Column = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  flex-direction: column;
`;
const LayoutContent = ({ children }) => /* @__PURE__ */ react.createElement(
  Wrapper,
  {
    shadow: "tableShadow",
    hasRadius: true,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 10,
    background: "neutral0",
    justifyContent: "center"
  },
  children
);
LayoutContent.propTypes = {
  children: (prop_types_default()).node.isRequired
};
const UnauthenticatedLayout = ({ children }) => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { as: "header", justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6, paddingRight: 8 }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout_LocaleToggle, null))), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 2, paddingBottom: 11 }, children));
};
UnauthenticatedLayout.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const layouts_UnauthenticatedLayout = (UnauthenticatedLayout);


/***/ }),

/***/ 71526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ selectAdminPermissions)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22325);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57852);


const selectAppDomain = () => (state) => {
  return state.admin_app || _reducer__WEBPACK_IMPORTED_MODULE_0__/* .initialState */ .u;
};
const selectAdminPermissions = (0,reselect__WEBPACK_IMPORTED_MODULE_1__/* .createSelector */ .Mz)(
  selectAppDomain(),
  (state) => state.permissions
);


/***/ }),

/***/ 99507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40948);


const FieldActionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .FieldAction */ .T))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldActionWrapper);


/***/ }),

/***/ 62093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14591);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45171);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17715);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17937);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6803);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74427);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48921);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94995);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90687);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6442);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40948);
/* harmony import */ var _components_UnauthenticatedLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81594);
/* harmony import */ var _layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37198);
/* harmony import */ var _FieldActionWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99507);











const PasswordInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .TextInput */ .k))`
  ::-ms-reveal {
    display: none;
  }
`;
const Login = ({ onSubmit, schema, children }) => {
  const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Main */ .g, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutContent */ .A1, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    formik__WEBPACK_IMPORTED_MODULE_2__/* .Formik */ .l1,
    {
      enableReinitialize: true,
      initialValues: {
        email: "",
        password: "",
        rememberMe: false
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .Form */ .lV, { noValidate: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .VP, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UnauthenticatedLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .a, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { variant: "alpha", as: "h1" }, formatMessage({
      id: "Auth.form.welcome.title",
      defaultMessage: "Welcome!"
    }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .a, { paddingBottom: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o, { variant: "epsilon", textColor: "neutral600" }, formatMessage({
      id: "Auth.form.welcome.subtitle",
      defaultMessage: "Log in to your Strapi account"
    }))), errors.errorMessage && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .o,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      errors.errorMessage
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .TextInput */ .k,
      {
        error: errors.email ? formatMessage({
          id: errors.email,
          defaultMessage: "This value is required."
        }) : "",
        value: values.email,
        onChange: handleChange,
        label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
        placeholder: formatMessage({
          id: "Auth.form.email.placeholder",
          defaultMessage: "kai@doe.com"
        }),
        name: "email",
        required: true
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      PasswordInput,
      {
        error: errors.password ? formatMessage({
          id: errors.password,
          defaultMessage: "This value is required."
        }) : "",
        onChange: handleChange,
        value: values.password,
        label: formatMessage({
          id: "global.password",
          defaultMessage: "Password"
        }),
        name: "password",
        type: passwordShown ? "text" : "password",
        endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _FieldActionWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
          {
            onClick: (e) => {
              e.stopPropagation();
              setPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordShown ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null)
        ),
        required: true
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .Checkbox */ .S,
      {
        onValueChange: (checked) => {
          handleChange({ target: { value: checked, name: "rememberMe" } });
        },
        value: values.rememberMe,
        "aria-label": "rememberMe",
        name: "rememberMe"
      },
      formatMessage({
        id: "Auth.form.rememberMe.label",
        defaultMessage: "Remember me"
      })
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Button */ .$, { fullWidth: true, type: "submit" }, formatMessage({ id: "Auth.form.button.login", defaultMessage: "Login" }))))
  ), children), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .s, { justifyContent: "center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .a, { paddingTop: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N_, { to: "/auth/forgot-password" }, formatMessage({
    id: "Auth.link.forgot-password",
    defaultMessage: "Forgot your password?"
  })))));
};
Login.defaultProps = {
  children: null,
  onSubmit() {
  }
};
Login.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().node),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),
  schema: prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string).isRequired
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 57817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45171);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65813);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7480);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10753);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88419);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59798);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);





const NoContentType = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWhenNavigate */ .L4)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Main */ .g, { labelledBy: "title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLayout */ .Q,
    {
      id: "title",
      title: formatMessage({
        id: "content-manager.pageNotFound",
        defaultMessage: "Page not found"
      })
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .ContentLayout */ .s, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .EmptyStateLayout */ .p,
    {
      action: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z9, { variant: "secondary", endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null), to: "/" }, formatMessage({
        id: "app.components.NotFoundPage.back",
        defaultMessage: "Back to homepage"
      })),
      content: formatMessage({
        id: "app.page.not.found",
        defaultMessage: "Oops! We can't seem to find the page you're looging for..."
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoContentType);


/***/ }),

/***/ 21428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39150);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56347);




const LazyCompo = ({ loadComponent }) => {
  const [Compo, setCompo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadCompo = async () => {
      try {
        const loadedCompo = await loadComponent();
        setCompo(() => loadedCompo.default);
      } catch (err) {
        console.log(err);
      }
    };
    loadCompo();
  }, [loadComponent]);
  if (Compo) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Compo, null);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIndicatorPage */ .Bl, null);
};
const createRoute = (Component, to, exact) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .qh,
    {
      render: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LazyCompo, { loadComponent: Component }),
      key: to,
      path: to,
      exact: exact || false
    }
  );
};
LazyCompo.propTypes = {
  loadComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRoute);


/***/ }),

/***/ 14879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatAPIError = ({ data }) => {
  try {
    return Object.keys(data).reduce((acc, current) => {
      const errorMessage = data[current][0];
      acc[current] = {
        id: errorMessage,
        defaultMessage: errorMessage
      };
      return acc;
    }, {});
  } catch (err) {
    return {};
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatAPIError);


/***/ }),

/***/ 80005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RB: () => (/* reexport */ utils_checkFormValidity),
  un: () => (/* reexport */ createRoute/* default */.A),
  N_: () => (/* reexport */ formatAPIErrors/* default */.A),
  dS: () => (/* reexport */ getFullName),
  xQ: () => (/* reexport */ hashAdminUserEmail),
  _f: () => (/* reexport */ makeUniqueRoutes/* default */.A)
});

// UNUSED EXPORTS: getAttributesToDisplay, getExistingActions, sortLinks

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(39150);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/checkFormValidity.js

const checkFormValidity = async (data, schema) => {
  let errors = null;
  try {
    await schema.validate(data, { abortEarly: false });
  } catch (err) {
    errors = (0,helper_plugin_esm/* getYupInnerErrors */.ed)(err);
  }
  return errors;
};
/* harmony default export */ const utils_checkFormValidity = (checkFormValidity);

// EXTERNAL MODULE: ./.cache/admin/src/utils/createRoute.js
var createRoute = __webpack_require__(21428);
// EXTERNAL MODULE: ./.cache/admin/src/utils/formatAPIErrors.js
var formatAPIErrors = __webpack_require__(14879);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/getFullName.js
/* harmony default export */ const getFullName = ((firstname, lastname = "") => {
  return [firstname, lastname].filter((str) => str).join(" ");
});

// EXTERNAL MODULE: ./.cache/admin/src/utils/makeUniqueRoutes.js
var makeUniqueRoutes = __webpack_require__(57918);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var lodash_sortBy = __webpack_require__(33031);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/sortLinks.js

const sortLinks = (links) => sortBy(links, (object) => object.name);
/* harmony default export */ const utils_sortLinks = ((/* unused pure expression or super */ null && (sortLinks)));

;// CONCATENATED MODULE: ./.cache/admin/src/utils/uniqueAdminHash.js
const utils = {
  bufferToHex(buffer) {
    return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
  },
  async digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    return this.bufferToHex(hashBuffer);
  }
};
async function hashAdminUserEmail(payload) {
  if (!payload) {
    return null;
  }
  try {
    return await utils.digestMessage(payload.email);
  } catch (error) {
    return null;
  }
}

;// CONCATENATED MODULE: ./.cache/admin/src/utils/index.js











/***/ }),

/***/ 57918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeUniqueRoutes = (routes) => routes.filter((route, index, refArray) => {
  return refArray.findIndex((obj) => obj.key === route.key) === index;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeUniqueRoutes);


/***/ }),

/***/ 58786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70674f63fc3904c20de0.svg";

/***/ })

}]);