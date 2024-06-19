"use strict";
self["webpackHotUpdatereact_ecommerce_theme"]("main",{

/***/ "./js/src/components/NodeAdd.jsx":
/*!***************************************!*\
  !*** ./js/src/components/NodeAdd.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NodeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeForm */ "./js/src/components/NodeForm.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var NodeAdd = function NodeAdd(_ref) {
  var onSuccess = _ref.onSuccess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NodeForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: null,
    onSuccess: onSuccess
  });
};
_c = NodeAdd;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeAdd);
var _c;
__webpack_require__.$Refresh$.register(_c, "NodeAdd");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/components/NodeDelete.jsx":
/*!******************************************!*\
  !*** ./js/src/components/NodeDelete.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetch */ "./js/src/utils/fetch.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var NodeDelete = function NodeDelete(_ref) {
  var id = _ref.id,
    title = _ref.title,
    onSuccess = _ref.onSuccess;
  function doConfirm() {
    return window.confirm("Are you sure you want to delete ".concat(title, "?"));
  }
  function doDelete() {
    var csrfUrl = "/session/token?_format=json";
    var fetchUrl = "/jsonapi/node/article/".concat(id);
    var fetchOptions = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: new Headers({
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Cache': 'no-cache'
      })
    };
    try {
      (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWithCSRFToken)(csrfUrl, fetchUrl, fetchOptions).then(function (response) {
        // Should be 204. If so, call the onSuccess callback.
        if (response.status === 204) {
          if (typeof onSuccess === 'function') {
            onSuccess(id);
          }
        }
      });
    } catch (error) {
      console.log('API error', error);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(event) {
      return doConfirm() && doDelete();
    }
  }, "delete");
};
_c = NodeDelete;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeDelete);
var _c;
__webpack_require__.$Refresh$.register(_c, "NodeDelete");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/components/NodeEdit.jsx":
/*!****************************************!*\
  !*** ./js/src/components/NodeEdit.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NodeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeForm */ "./js/src/components/NodeForm.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var NodeEdit = function NodeEdit(_ref) {
  var id = _ref.id,
    title = _ref.title,
    body = _ref.body,
    onSuccess = _ref.onSuccess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NodeForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    title: title,
    body: body,
    onSuccess: onSuccess
  });
};
_c = NodeEdit;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeEdit);
var _c;
__webpack_require__.$Refresh$.register(_c, "NodeEdit");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/components/NodeForm.jsx":
/*!****************************************!*\
  !*** ./js/src/components/NodeForm.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetch */ "./js/src/utils/fetch.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _s = __webpack_require__.$Refresh$.signature();
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var NodeForm = function NodeForm(_ref) {
  _s();
  var id = _ref.id,
    title = _ref.title,
    body = _ref.body,
    onSuccess = _ref.onSuccess;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmitting = _useState2[0],
    setSubmitting = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      success: null,
      error: null,
      message: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    result = _useState4[0],
    setResult = _useState4[1];
  var defaultValues = {
    title: title ? title : '',
    body: body ? body : ''
  };
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValues),
    _useState6 = _slicedToArray(_useState5, 2),
    values = _useState6[0],
    setValues = _useState6[1];
  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(event) {
    setSubmitting(true);
    event.preventDefault();
    var csrfUrl = "/session/token?_format=json";
    var fetchUrl = id ? "/jsonapi/node/article/".concat(id) : "/jsonapi/node/article";
    var data = {
      "data": {
        "type": "node--article",
        "attributes": {
          "title": "".concat(values.title),
          "body": {
            "value": "".concat(values.body),
            "format": 'plain_text'
          }
        }
      }
    };

    // If we have an ID that means we're editing an existing node and not
    // creating a new one.
    if (id) {
      // Set the ID in the data we'll send to the API.
      data.data.id = id;
    }
    var fetchOptions = {
      // Use HTTP PATCH for edits, and HTTP POST to create new articles.
      method: id ? 'PATCH' : 'POST',
      credentials: 'same-origin',
      headers: new Headers({
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Cache': 'no-cache'
      }),
      body: JSON.stringify(data)
    };
    try {
      (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWithCSRFToken)(csrfUrl, fetchUrl, fetchOptions).then(function (response) {
        return response.json();
      }).then(function (data) {
        // We're done processing.
        setSubmitting(false);

        // If there are any errors display the error and return early.
        if (data.errors && data.errors.length > 0) {
          setResult({
            success: false,
            error: true,
            message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "messages messages--error"
            }, data.errors[0].title, ": ", data.errors[0].detail)
          });
          return false;
        }

        // If the request was successful, remove existing form values and
        // display a success message.
        setValues(defaultValues);
        if (data.data.id) {
          setResult({
            success: true,
            message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
              className: "messages messages--status"
            }, id ? 'Updated' : 'Added', ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, data.data.attributes.title))
          });
          if (typeof onSuccess === 'function') {
            onSuccess(data.data);
          }
        }
      });
    } catch (error) {
      console.log('Error while contacting API', error);
      setSubmitting(false);
    }
  };

  // If the form is currently being processed display a spinner.
  if (isSubmitting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Processing ...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (result.success || result.error) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, result.success ? 'Success!' : 'Error', ":"), result.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "title",
    type: "text",
    value: values.title,
    placeholder: "Title",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "body",
    rows: "4",
    cols: "30",
    value: values.body,
    placeholder: "Body",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "submit",
    type: "submit",
    value: id ? 'Edit existing node' : 'Add new node'
  })));
};
_s(NodeForm, "Pzauddxxt8JMkQ/VXbW3d2ZRTuY=");
_c = NodeForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeForm);
var _c;
__webpack_require__.$Refresh$.register(_c, "NodeForm");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/components/NodeReadWrite.jsx":
/*!*********************************************!*\
  !*** ./js/src/components/NodeReadWrite.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetch */ "./js/src/utils/fetch.js");
/* harmony import */ var _NodeAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeAdd */ "./js/src/components/NodeAdd.jsx");
/* harmony import */ var _NodeEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeEdit */ "./js/src/components/NodeEdit.jsx");
/* harmony import */ var _NodeDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeDelete */ "./js/src/components/NodeDelete.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






/**
 * Helper function to validate data retrieved from JSON:API.
 */
function isValidData(data) {
  if (data === null) {
    return false;
  }
  if (data.data === undefined || data.data === null || data.data.length === 0) {
    return false;
  }
  return true;
}

/**
 * Component for displaying an individual article, with optional admin features.
 */
var NodeItem = function NodeItem(_ref) {
  _s();
  var id = _ref.id,
    drupal_internal__nid = _ref.drupal_internal__nid,
    title = _ref.title,
    body = _ref.body,
    contentList = _ref.contentList,
    updateContent = _ref.updateContent;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showAdminOptions = _useState2[0],
    setShowAdminOptions = _useState2[1];
  function handleClick(event) {
    event.preventDefault();
    setShowAdminOptions(!showAdminOptions);
  }
  function onEditSuccess(data) {
    // Replace the edited item in the list with updated values.
    var idx = contentList.findIndex(function (item) {
      return item.id === data.id;
    });
    console.log('index', {
      idx: idx,
      data: data,
      content: contentList
    });
    contentList[idx] = data;
    updateContent(_toConsumableArray(contentList));
  }
  function onDeleteSuccess(id) {
    // Remove the deleted item from the list.
    var list = contentList.filter(function (item) {
      return item.id !== id;
    });
    updateContent(_toConsumableArray(list));
  }

  // Show the item with admin options.
  if (showAdminOptions) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), "Admin options for ", title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NodeEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      title: title,
      body: body.value,
      onSuccess: onEditSuccess
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleClick
    }, "cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NodeDelete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id,
      title: title,
      onSuccess: onDeleteSuccess
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null));
  }

  // Show just the item.
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/node/".concat(drupal_internal__nid)
  }, title), " -- ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "edit"));
};

/**
 * Component to render when there are no articles to display.
 */
_s(NodeItem, "XFVS3IiesmXaxSliW3UsLzbiiRw=");
_c = NodeItem;
var NoData = function NoData() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "No articles found.");
};

/**
 * Display a list of Drupal article nodes.
 *
 * Retrieves articles from Drupal's JSON:API and then displays them along with
 * admin features to create, update, and delete articles.
 */
_c2 = NoData;
var NodeReadWrite = function NodeReadWrite() {
  _s2();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    content = _useState4[0],
    updateContent = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    filter = _useState6[0],
    setFilter = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showNodeAdd = _useState8[0],
    setShowNodeAdd = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // This should point to your local Drupal instance. Alternatively, for React
    // applications embedded in a Drupal theme or module this could also be set
    // to a relative path.
    var API_ROOT = '/jsonapi/';
    var url = "".concat(API_ROOT, "node/article?fields[node--article]=id,drupal_internal__nid,title,body&sort=-created&page[limit]=10");
    var headers = new Headers({
      Accept: 'application/vnd.api+json'
    });

    // Note the use of fetch() and not fetchWithCSRFToken() here. This works
    // because you don't need a CSRF token if you're only performing read
    // operations.
    fetch(url, {
      headers: headers
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (isValidData(data)) {
        // Initialize the list of content with data retrieved from Drupal.
        updateContent(data.data);
      }
    })["catch"](function (err) {
      return console.log('There was an error accessing the API', err);
    });
  }, []);

  // Handle updates to state when a node is added.
  function onNodeAddSuccess(data) {
    // Add the new item to the top of the list.
    content.unshift(data);
    // Note the use of [...content] here, this is because we're
    // computing new state based on previous state and need to use a
    // functional update. https://reactjs.org/docs/hooks-reference.html#functional-updates
    // [...content] syntax creates a new array with the values of
    // content, and updates the state to that new array.
    updateContent(_toConsumableArray(content));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Site content"), content.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "filter"
  }, "Type to filter:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "filter",
    placeholder: "Start typing ...",
    onChange: function onChange(event) {
      return setFilter(event.target.value.toLowerCase());
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null),
  // If there's a `filter` apply it to the list of nodes.
  content.filter(function (item) {
    if (!filter) {
      return item;
    }
    if (filter && (item.attributes.title.toLowerCase().includes(filter) || item.attributes.body.value.toLowerCase().includes(filter))) {
      return item;
    }
  }).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NodeItem, _extends({
      key: item.id,
      id: item.id,
      updateContent: updateContent,
      contentList: content
    }, item.attributes));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoData, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), showNodeAdd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Add a new article"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NodeAdd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSuccess: onNodeAddSuccess
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Don't see what you're looking for?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowNodeAdd(true);
    }
  }, "Add a node")));
};
_s2(NodeReadWrite, "8TapRBw3pZVjgY+pUtJZ82RY3UA=");
_c3 = NodeReadWrite;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeReadWrite);
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "NodeItem");
__webpack_require__.$Refresh$.register(_c2, "NoData");
__webpack_require__.$Refresh$.register(_c3, "NodeReadWrite");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/index.jsx":
/*!**************************!*\
  !*** ./js/src/index.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_NodeListOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NodeListOnly */ "./js/src/components/NodeListOnly.jsx");
/* harmony import */ var _components_NodeReadWrite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NodeReadWrite */ "./js/src/components/NodeReadWrite.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

//From the component Creating a component DrupalProjectStats
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// /* Import Components */
// import DrupalProjectStats from './components/DrupalProjectStats';

// const Main = () => (
//   <DrupalProjectStats projectName="drupal" />
// );

// // Get the container for your app.
// const container = document.getElementById('react-app');

// // Check if the container exists to avoid null errors.
// if (container) {
//   // Create a root.
//   const root = ReactDOM.createRoot(container);

//   // Render the Main component.
//   root.render(<Main />);
// } else {
//   console.error('Failed to find the root element');
// }



/* Import Components */


var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NodeListOnly__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

// Get the container for your app.
_c = Main;
var container = document.getElementById('react-app');

// Check if the container exists to avoid null errors.
if (container) {
  // Create a root.
  var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);

  // Render the Main component.
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null));
} else {
  console.error('Failed to find the root element');
}
var _c;
__webpack_require__.$Refresh$.register(_c, "Main");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./js/src/utils/fetch.js":
/*!*******************************!*\
  !*** ./js/src/utils/fetch.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWithCSRFToken: () => (/* binding */ fetchWithCSRFToken)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

/**
 * Helper function wraps a normal fetch call with a fetch request that first
 * retrieves a CSRF token and then adds the token as an X-CSRF-Token header
 * to the options for desired fetch call.
 *
 * @param {string} csrfUrl
 *   URL where we can retrieve a CSRF token for the current user.
 * @param {string} fetchUrl
 *   URL to fetch with X-CSRF-Token header included.
 * @param {object} fetchOptions
 *   Options to pass to fetch for the call to fetchUrl.
 */
var fetchWithCSRFToken = function fetchWithCSRFToken(csrfUrl, fetchUrl, fetchOptions) {
  if (!fetchOptions.headers.get('X-CSRF-Token')) {
    return fetch(csrfUrl).then(function (response) {
      return response.text();
    }).then(function (csrfToken) {
      fetchOptions.headers.append('X-CSRF-Token', csrfToken);
      return fetch(fetchUrl, fetchOptions);
    });
  } else {
    return fetch(fetchUrl, fetchOptions);
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("354238ca307c86622bd7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e70dd24c90db6573c2a3.hot-update.js.map