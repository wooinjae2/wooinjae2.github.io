/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/prism.css */ \"./styles/prism.css\");\n/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      menuList = _useState[0],\n      setMenuList = _useState[1];\n\n  console.log('layout render');\n  /**\n   * {\n        name: 'programming',\n        children: [\n          { name: 'test', link: '1' },\n          { name: 'ab', link: '2' },\n          { name: 'ac' },\n          { name: 'ad' },\n        ],\n      },\n   */\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setMenuList([{\n      name: 'TIL',\n      children: [{\n        name: '20210619',\n        link: '20210619'\n      }, {\n        name: '20210620',\n        link: '20210620'\n      }, {\n        name: '20210624',\n        link: '20210624'\n      }, {\n        name: '20210626',\n        link: '20210626'\n      }, {\n        name: '20210627',\n        link: '20210627'\n      }, {\n        name: '20210628',\n        link: '20210628'\n      }, {\n        name: '20210629',\n        link: '20210629'\n      }, {\n        name: '20210630',\n        link: '20210630'\n      }, {\n        name: '20210703',\n        link: '20210703'\n      }, {\n        name: '20210705',\n        link: '20210705'\n      }, {\n        name: '20210707',\n        link: '20210707'\n      }, {\n        name: '20210711',\n        link: '20210711'\n      }, {\n        name: '20210718',\n        link: '20210718'\n      }, {\n        name: 'howtobrowserwork',\n        link: 'howtobrowserwork'\n      }]\n    } // {\n    //   name: 'Test',\n    // },\n    ]);\n  }, []);\n\n  var handleMenuClick = function handleMenuClick(clickIdx) {\n    console.log(clickIdx);\n    var newMenuList = menuList.map(function (menu, idx) {\n      if (idx === clickIdx) {\n        return menu.active ? {\n          name: menu.name,\n          children: menu.children,\n          active: false\n        } : {\n          name: menu.name,\n          children: menu.children ? (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(menu.children) : [],\n          active: true\n        };\n      }\n\n      return {\n        name: menu.name,\n        children: menu.children ? (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(menu.children) : [],\n        active: false\n      };\n    });\n    setMenuList(newMenuList);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n    handleMenuClick: handleMenuClick,\n    menulist: menuList,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"Iqig5vTaWdCmNlwO7o+GJ2jjKcw=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwibWVudUxpc3QiLCJzZXRNZW51TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY2hpbGRyZW4iLCJsaW5rIiwiaGFuZGxlTWVudUNsaWNrIiwiY2xpY2tJZHgiLCJuZXdNZW51TGlzdCIsIm1hcCIsIm1lbnUiLCJpZHgiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBYUEsU0FBU0EsS0FBVCxPQUFtRDtBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCOztBQUFBLGtCQUNqQkMsK0NBQVEsQ0FBUyxFQUFULENBRFM7QUFBQSxNQUMxQ0MsUUFEMEM7QUFBQSxNQUNoQ0MsV0FEZ0M7O0FBRWpEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RILGVBQVcsQ0FBQyxDQUNWO0FBQ0VJLFVBQUksRUFBRSxLQURSO0FBRUVDLGNBQVEsRUFBRSxDQUNSO0FBQUVELFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FEUSxFQUVSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FGUSxFQUdSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FIUSxFQUlSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FKUSxFQUtSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FMUSxFQU1SO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FOUSxFQU9SO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FQUSxFQVFSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FSUSxFQVNSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FUUSxFQVVSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FWUSxFQVdSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FYUSxFQVlSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FaUSxFQWFSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FiUSxFQWNSO0FBQUVGLFlBQUksRUFBRSxrQkFBUjtBQUE0QkUsWUFBSSxFQUFFO0FBQWxDLE9BZFE7QUFGWixLQURVLENBb0JWO0FBQ0E7QUFDQTtBQXRCVSxLQUFELENBQVg7QUF3QkQsR0F6QlEsRUF5Qk4sRUF6Qk0sQ0FBVDs7QUEyQkEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxRQUFELEVBQXNCO0FBQzVDUCxXQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR1YsUUFBUSxDQUFDVyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDOUMsVUFBSUEsR0FBRyxLQUFLSixRQUFaLEVBQXNCO0FBQ3BCLGVBQU9HLElBQUksQ0FBQ0UsTUFBTCxHQUNIO0FBQUVULGNBQUksRUFBRU8sSUFBSSxDQUFDUCxJQUFiO0FBQW1CQyxrQkFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQWxDO0FBQTRDUSxnQkFBTSxFQUFFO0FBQXBELFNBREcsR0FFSDtBQUNFVCxjQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFEYjtBQUVFQyxrQkFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQUwsdUlBQW9CTSxJQUFJLENBQUNOLFFBQXpCLElBQXFDLEVBRmpEO0FBR0VRLGdCQUFNLEVBQUU7QUFIVixTQUZKO0FBT0Q7O0FBQ0QsYUFBTztBQUNMVCxZQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFETjtBQUVMQyxnQkFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQUwsdUlBQW9CTSxJQUFJLENBQUNOLFFBQXpCLElBQXFDLEVBRjFDO0FBR0xRLGNBQU0sRUFBRTtBQUhILE9BQVA7QUFLRCxLQWZtQixDQUFwQjtBQWlCQWIsZUFBVyxDQUFDUyxXQUFELENBQVg7QUFDRCxHQXBCRDs7QUFzQkEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxtQkFBZSxFQUFFRixlQUF6QjtBQUEwQyxZQUFRLEVBQUVSLFFBQXBEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBckVRRixLOztLQUFBQSxLO0FBdUVULCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcHJpc20uY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5pbnRlcmZhY2UgY2hpbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNZW51IHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEFycmF5PGNoaWxkPjtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbbWVudUxpc3QsIHNldE1lbnVMaXN0XSA9IHVzZVN0YXRlPE1lbnVbXT4oW10pO1xuICBjb25zb2xlLmxvZygnbGF5b3V0IHJlbmRlcicpO1xuXG4gIC8qKlxuICAgKiB7XG4gICAgICAgIG5hbWU6ICdwcm9ncmFtbWluZycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBuYW1lOiAndGVzdCcsIGxpbms6ICcxJyB9LFxuICAgICAgICAgIHsgbmFtZTogJ2FiJywgbGluazogJzInIH0sXG4gICAgICAgICAgeyBuYW1lOiAnYWMnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnYWQnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNZW51TGlzdChbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUSUwnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjE5JywgbGluazogJzIwMjEwNjE5JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjIwJywgbGluazogJzIwMjEwNjIwJyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjI0JywgbGluazogJzIwMjEwNjI0JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjI2JywgbGluazogJzIwMjEwNjI2JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjI3JywgbGluazogJzIwMjEwNjI3JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjI4JywgbGluazogJzIwMjEwNjI4JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjI5JywgbGluazogJzIwMjEwNjI5JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNjMwJywgbGluazogJzIwMjEwNjMwJyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNzAzJywgbGluazogJzIwMjEwNzAzJyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNzA1JywgbGluazogJzIwMjEwNzA1JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNzA3JywgbGluazogJzIwMjEwNzA3JyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNzExJywgbGluazogJzIwMjEwNzExJyB9LFxuICAgICAgICAgIHsgbmFtZTogJzIwMjEwNzE4JywgbGluazogJzIwMjEwNzE4JyB9LFxuICAgICAgICAgIHsgbmFtZTogJ2hvd3RvYnJvd3NlcndvcmsnLCBsaW5rOiAnaG93dG9icm93c2Vyd29yaycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIG5hbWU6ICdUZXN0JyxcbiAgICAgIC8vIH0sXG4gICAgXSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoY2xpY2tJZHg6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNsaWNrSWR4KTtcbiAgICBjb25zdCBuZXdNZW51TGlzdCA9IG1lbnVMaXN0Lm1hcCgobWVudSwgaWR4KSA9PiB7XG4gICAgICBpZiAoaWR4ID09PSBjbGlja0lkeCkge1xuICAgICAgICByZXR1cm4gbWVudS5hY3RpdmVcbiAgICAgICAgICA/IHsgbmFtZTogbWVudS5uYW1lLCBjaGlsZHJlbjogbWVudS5jaGlsZHJlbiwgYWN0aXZlOiBmYWxzZSB9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIG5hbWU6IG1lbnUubmFtZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IG1lbnUuY2hpbGRyZW4gPyBbLi4ubWVudS5jaGlsZHJlbl0gOiBbXSxcbiAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG1lbnUubmFtZSxcbiAgICAgICAgY2hpbGRyZW46IG1lbnUuY2hpbGRyZW4gPyBbLi4ubWVudS5jaGlsZHJlbl0gOiBbXSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBzZXRNZW51TGlzdChuZXdNZW51TGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhhbmRsZU1lbnVDbGljaz17aGFuZGxlTWVudUNsaWNrfSBtZW51bGlzdD17bWVudUxpc3R9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});