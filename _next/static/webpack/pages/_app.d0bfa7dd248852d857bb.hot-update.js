webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
false,

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-thunk/es/index.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/prism.css */ \"./styles/prism.css\");\n/* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable no-undef */\n\n/* eslint-disable import/no-extraneous-dependencies */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      menuList = _useState[0],\n      setMenuList = _useState[1];\n\n  console.log('layout render');\n  /**\n   * {\n        name: 'programming',\n        children: [\n          { name: 'test', link: '1' },\n          { name: 'ab', link: '2' },\n          { name: 'ac' },\n          { name: 'ad' },\n        ],\n      },\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setMenuList([{\n      name: 'TIL',\n      children: [{\n        name: '20210619',\n        link: '20210619'\n      }, {\n        name: '20210620',\n        link: '20210620'\n      }, {\n        name: '20210624',\n        link: '20210624'\n      }, {\n        name: '20210626',\n        link: '20210626'\n      }, {\n        name: '20210627',\n        link: '20210627'\n      }]\n    }, {\n      name: 'Test'\n    }]);\n  }, []);\n\n  var handleMenuClick = function handleMenuClick(clickIdx) {\n    console.log(clickIdx);\n    var newMenuList = menuList.map(function (menu, idx) {\n      if (idx === clickIdx) {\n        return menu.active ? {\n          name: menu.name,\n          children: menu.children,\n          active: false\n        } : {\n          name: menu.name,\n          children: menu.children ? Object(_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(menu.children) : [],\n          active: true\n        };\n      }\n\n      return {\n        name: menu.name,\n        children: menu.children ? Object(_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(menu.children) : [],\n        active: false\n      };\n    });\n    setMenuList(newMenuList);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    handleMenuClick: handleMenuClick,\n    menulist: menuList,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyApp, \"Iqig5vTaWdCmNlwO7o+GJ2jjKcw=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = wrapper.withRedux(MyApp));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwibWVudUxpc3QiLCJzZXRNZW51TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY2hpbGRyZW4iLCJsaW5rIiwiaGFuZGxlTWVudUNsaWNrIiwiY2xpY2tJZHgiLCJuZXdNZW51TGlzdCIsIm1hcCIsIm1lbnUiLCJpZHgiLCJhY3RpdmUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBYUEsU0FBU0EsS0FBVCxPQUFtRDtBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBUyxFQUFULENBRFM7QUFBQSxNQUMxQ0MsUUFEMEM7QUFBQSxNQUNoQ0MsV0FEZ0M7O0FBRWpEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RILGVBQVcsQ0FBQyxDQUNWO0FBQ0VJLFVBQUksRUFBRSxLQURSO0FBRUVDLGNBQVEsRUFBRSxDQUNSO0FBQUVELFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FEUSxFQUVSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FGUSxFQUdSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FIUSxFQUlSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FKUSxFQUtSO0FBQUVGLFlBQUksRUFBRSxVQUFSO0FBQW9CRSxZQUFJLEVBQUU7QUFBMUIsT0FMUTtBQUZaLEtBRFUsRUFXVjtBQUNFRixVQUFJLEVBQUU7QUFEUixLQVhVLENBQUQsQ0FBWDtBQWVELEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7O0FBa0JBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsUUFBRCxFQUFzQjtBQUM1Q1AsV0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQzlDLFVBQUlBLEdBQUcsS0FBS0osUUFBWixFQUFzQjtBQUNwQixlQUFPRyxJQUFJLENBQUNFLE1BQUwsR0FDSDtBQUFFVCxjQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFBYjtBQUFtQkMsa0JBQVEsRUFBRU0sSUFBSSxDQUFDTixRQUFsQztBQUE0Q1EsZ0JBQU0sRUFBRTtBQUFwRCxTQURHLEdBRUg7QUFDRVQsY0FBSSxFQUFFTyxJQUFJLENBQUNQLElBRGI7QUFFRUMsa0JBQVEsRUFBRU0sSUFBSSxDQUFDTixRQUFMLDhJQUFvQk0sSUFBSSxDQUFDTixRQUF6QixJQUFxQyxFQUZqRDtBQUdFUSxnQkFBTSxFQUFFO0FBSFYsU0FGSjtBQU9EOztBQUNELGFBQU87QUFDTFQsWUFBSSxFQUFFTyxJQUFJLENBQUNQLElBRE47QUFFTEMsZ0JBQVEsRUFBRU0sSUFBSSxDQUFDTixRQUFMLDhJQUFvQk0sSUFBSSxDQUFDTixRQUF6QixJQUFxQyxFQUYxQztBQUdMUSxjQUFNLEVBQUU7QUFISCxPQUFQO0FBS0QsS0FmbUIsQ0FBcEI7QUFpQkFiLGVBQVcsQ0FBQ1MsV0FBRCxDQUFYO0FBQ0QsR0FwQkQ7O0FBc0JBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVEsbUJBQWUsRUFBRUYsZUFBekI7QUFBMEMsWUFBUSxFQUFFUixRQUFwRDtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTVEUUYsSzs7S0FBQUEsSztBQThETSxxRUFBQW1CLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQnBCLEtBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9wcmlzbS5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmludGVyZmFjZSBjaGlsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGluaz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1lbnUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogQXJyYXk8Y2hpbGQ+O1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFttZW51TGlzdCwgc2V0TWVudUxpc3RdID0gdXNlU3RhdGU8TWVudVtdPihbXSk7XG4gIGNvbnNvbGUubG9nKCdsYXlvdXQgcmVuZGVyJyk7XG5cbiAgLyoqXG4gICAqIHtcbiAgICAgICAgbmFtZTogJ3Byb2dyYW1taW5nJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IG5hbWU6ICd0ZXN0JywgbGluazogJzEnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnYWInLCBsaW5rOiAnMicgfSxcbiAgICAgICAgICB7IG5hbWU6ICdhYycgfSxcbiAgICAgICAgICB7IG5hbWU6ICdhZCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lbnVMaXN0KFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RJTCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBuYW1lOiAnMjAyMTA2MTknLCBsaW5rOiAnMjAyMTA2MTknIH0sXG4gICAgICAgICAgeyBuYW1lOiAnMjAyMTA2MjAnLCBsaW5rOiAnMjAyMTA2MjAnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnMjAyMTA2MjQnLCBsaW5rOiAnMjAyMTA2MjQnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnMjAyMTA2MjYnLCBsaW5rOiAnMjAyMTA2MjYnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnMjAyMTA2MjcnLCBsaW5rOiAnMjAyMTA2MjcnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGVzdCcsXG4gICAgICB9LFxuICAgIF0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGNsaWNrSWR4OiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjbGlja0lkeCk7XG4gICAgY29uc3QgbmV3TWVudUxpc3QgPSBtZW51TGlzdC5tYXAoKG1lbnUsIGlkeCkgPT4ge1xuICAgICAgaWYgKGlkeCA9PT0gY2xpY2tJZHgpIHtcbiAgICAgICAgcmV0dXJuIG1lbnUuYWN0aXZlXG4gICAgICAgICAgPyB7IG5hbWU6IG1lbnUubmFtZSwgY2hpbGRyZW46IG1lbnUuY2hpbGRyZW4sIGFjdGl2ZTogZmFsc2UgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBuYW1lOiBtZW51Lm5hbWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBtZW51LmNoaWxkcmVuID8gWy4uLm1lbnUuY2hpbGRyZW5dIDogW10sXG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBtZW51Lm5hbWUsXG4gICAgICAgIGNoaWxkcmVuOiBtZW51LmNoaWxkcmVuID8gWy4uLm1lbnUuY2hpbGRyZW5dIDogW10sXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgc2V0TWVudUxpc3QobmV3TWVudUxpc3QpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBoYW5kbGVNZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja30gbWVudWxpc3Q9e21lbnVMaXN0fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/store.js":
false,

/***/ "./store/tick/action.js":
false,

/***/ "./store/tick/reducer.js":
false

})