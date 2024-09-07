"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[2785],{

/***/ 62785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EventTableEE: () => (/* reexport */ EventTableEE)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/Events/index.js
var Events = __webpack_require__(67070);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/EventTableEE.js


const events = {
  "review-workflows": ["review-workflows.updateEntryStage"]
};
const getHeaders = () => {
  return [{ id: "review-workflows.updateEntryStage", defaultMessage: "Stage Change" }];
};
function EventTableEE() {
  return /* @__PURE__ */ react.createElement(Events/* default */.A.Root, null, /* @__PURE__ */ react.createElement(Events/* default */.A.Headers, null), /* @__PURE__ */ react.createElement(Events/* default */.A.Body, null), /* @__PURE__ */ react.createElement(Events/* default */.A.Headers, { getHeaders }), /* @__PURE__ */ react.createElement(Events/* default */.A.Body, { providedEvents: events }));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/index.js



/***/ })

}]);