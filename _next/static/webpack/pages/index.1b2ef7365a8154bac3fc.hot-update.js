webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var _store_count_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/count/action */ \"./store/count/action.js\");\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/pages/index.tsx\";\n\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\nfunction Home(props) {\n  var preloadedState = {};\n\n  if (true) {\n    preloadedState = window.__NEXT_DATA__.props;\n    console.log('asdasd');\n    console.log('preloadedState11', preloadedState);\n  }\n\n  function renderProps() {\n    if (props && props.data) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: props.data.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 14\n      }, this);\n    }\n\n    return null;\n  }\n\n  var renderPropsComp = renderProps();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"\\uC548\\uB155\\uD558\\uC138\\uC694.\",\n      children: \"\\uACF5\\uBD80\\uD55C \\uAC83\\uC744 \\uAE30\\uB85D\\uD558\\uACE0, \\uD14C\\uC2A4\\uD2B8 \\uD558\\uAE30\\uC704\\uD574 \\uB9CC\\uB4E0 \\uBE14\\uB85C\\uADF8 \\uC785\\uB2C8\\uB2E4.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), renderPropsComp]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Home;\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addCount: Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(_store_count_action__WEBPACK_IMPORTED_MODULE_5__[\"addCount\"], dispatch)\n  };\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = _store_store__WEBPACK_IMPORTED_MODULE_4__[\"wrapper\"].withRedux(Home));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicHJlbG9hZGVkU3RhdGUiLCJ3aW5kb3ciLCJfX05FWFRfREFUQV9fIiwiY29uc29sZSIsImxvZyIsInJlbmRlclByb3BzIiwiZGF0YSIsIm5hbWUiLCJyZW5kZXJQcm9wc0NvbXAiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFkZENvdW50IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBNEI7QUFDMUIsTUFBSUMsY0FBc0IsR0FBRyxFQUE3Qjs7QUFDQSxZQUFtQztBQUNqQ0Esa0JBQWMsR0FBR0MsTUFBTSxDQUFDQyxhQUFQLENBQXFCSCxLQUF0QztBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDSixjQUFoQztBQUNEOztBQUVELFdBQVNLLFdBQVQsR0FBdUI7QUFDckIsUUFBSU4sS0FBSyxJQUFJQSxLQUFLLENBQUNPLElBQW5CLEVBQXlCO0FBQ3ZCLDBCQUFPO0FBQUEsa0JBQU1QLEtBQUssQ0FBQ08sSUFBTixDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFNQyxlQUFlLEdBQUdILFdBQVcsRUFBbkM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUksOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLFdBQUssRUFBQyxpQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdGLGVBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7S0F2QlFWLEk7O0FBNkJULElBQU1hLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTEMsWUFBUSxFQUFFQyxnRUFBa0IsQ0FBQ0QsNERBQUQsRUFBV0QsUUFBWDtBQUR2QixHQUFQO0FBR0QsQ0FKRDs7O0FBTWUscUVBQUFHLG9EQUFPLENBQUNDLFNBQVIsQ0FBa0JsQixJQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IGFkZENvdW50IH0gZnJvbSAnLi4vc3RvcmUvY291bnQvYWN0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gSG9tZShwcm9wczogUHJvcHMpIHtcbiAgbGV0IHByZWxvYWRlZFN0YXRlOiBPYmplY3QgPSB7fTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19ORVhUX0RBVEFfXy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnYXNkYXNkJyk7XG4gICAgY29uc29sZS5sb2coJ3ByZWxvYWRlZFN0YXRlMTEnLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9wcygpIHtcbiAgICBpZiAocHJvcHMgJiYgcHJvcHMuZGF0YSkge1xuICAgICAgcmV0dXJuIDxkaXY+e3Byb3BzLmRhdGEubmFtZX08L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlbmRlclByb3BzQ29tcCA9IHJlbmRlclByb3BzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFBvc3QgdGl0bGU9XCLslYjrhZXtlZjshLjsmpQuXCI+XG4gICAgICAgIOqzteu2gO2VnCDqsoPsnYQg6riw66Gd7ZWY6rOgLCDthYzsiqTtirgg7ZWY6riw7JyE7ZW0IOunjOuToCDruJTroZzqt7gg7J6F64uI64ukLlxuICAgICAgPC9Qb3N0PlxuICAgICAge3JlbmRlclByb3BzQ29tcH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyhhc3luYyAoeyBzdG9yZSB9KSA9PiB7XG4gIHN0b3JlLmRpc3BhdGNoKGFkZENvdW50KCkpO1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})