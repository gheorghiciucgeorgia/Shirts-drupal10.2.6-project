"use strict";
self["webpackHotUpdatereact_ecommerce_theme"]("main",{

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f03cac479499a285cd55")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d534a92f5eabed95efc9.hot-update.js.map