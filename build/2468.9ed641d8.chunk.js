"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[2468],{

/***/ 55205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ STAGE_ATTRIBUTE_NAME),
/* harmony export */   Z: () => (/* binding */ ASSIGNEE_ATTRIBUTE_NAME)
/* harmony export */ });
const STAGE_ATTRIBUTE_NAME = "strapi_stage";
const ASSIGNEE_ATTRIBUTE_NAME = "strapi_assignee";


/***/ }),

/***/ 2468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REVIEW_WORKFLOW_COLUMNS_EE: () => (/* binding */ REVIEW_WORKFLOW_COLUMNS_EE)
/* harmony export */ });
/* harmony import */ var _admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7706);
/* harmony import */ var _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55205);


const REVIEW_WORKFLOW_COLUMNS_EE = [
  {
    key: `__${_EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_ATTRIBUTE_NAME */ .U}_temp_key__`,
    name: _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_ATTRIBUTE_NAME */ .U,
    fieldSchema: {
      type: "relation"
    },
    metadatas: {
      // formatMessage() will be applied when the column is rendered
      label: {
        id: (0,_admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(`containers.ListPage.table-headers.reviewWorkflows.stage`),
        defaultMessage: "Review stage"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "name",
        schema: {
          type: "string"
        }
      }
    }
  },
  {
    key: `__${_EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .ASSIGNEE_ATTRIBUTE_NAME */ .Z}_temp_key__`,
    name: _EditView_InformationBox_constants__WEBPACK_IMPORTED_MODULE_0__/* .ASSIGNEE_ATTRIBUTE_NAME */ .Z,
    fieldSchema: {
      type: "relation"
    },
    metadatas: {
      label: {
        id: (0,_admin_src_content_manager_utils_getTrad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(`containers.ListPage.table-headers.reviewWorkflows.assignee`),
        defaultMessage: "Assignee"
      },
      searchable: false,
      sortable: true,
      mainField: {
        name: "firstname",
        schema: {
          type: "string"
        }
      }
    }
  }
];


/***/ })

}]);