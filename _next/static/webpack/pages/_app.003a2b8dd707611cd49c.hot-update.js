/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      menuList = _useState[0],\n      setMenuList = _useState[1];\n\n  console.log('layout render');\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setMenuList([{\n      name: \"programming\",\n      children: [{\n        name: \"test\",\n        link: 1\n      }, {\n        name: \"ab\",\n        link: 2\n      }, {\n        name: \"ac\"\n      }, {\n        name: \"ad\"\n      }]\n    }, {\n      name: \"TIL\",\n      children: [{\n        name: \"b\"\n      }, {\n        name: \"bb\"\n      }, {\n        name: \"bc\"\n      }, {\n        name: \"bd\"\n      }]\n    }, {\n      name: \"메뉴3\"\n    }]);\n  }, []);\n\n  var handleMenuClick = function handleMenuClick(clickIdx) {\n    console.log(clickIdx);\n    var newMenuList = menuList.map(function (menu, idx) {\n      if (idx === clickIdx) {\n        return menu.active ? {\n          name: menu.name,\n          children: (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(menu.children),\n          active: false\n        } : {\n          name: menu.name,\n          children: menu.children ? (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(menu.children) : [],\n          active: true\n        };\n      } else {\n        return {\n          name: menu.name,\n          children: menu.children ? (0,_Users_a31_git_monsterfairy2_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(menu.children) : [],\n          active: false\n        };\n      }\n    });\n    메인페이지;\n    setMenuList(newMenuList);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {\n    handleMenuClick: handleMenuClick,\n    menulist: menuList,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 10\n  }, this);\n}\n\n_s(MyApp, \"Iqig5vTaWdCmNlwO7o+GJ2jjKcw=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJtZW51TGlzdCIsInNldE1lbnVMaXN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5hbWUiLCJjaGlsZHJlbiIsImxpbmsiLCJoYW5kbGVNZW51Q2xpY2siLCJjbGlja0lkeCIsIm5ld01lbnVMaXN0IiwibWFwIiwibWVudSIsImlkeCIsImFjdGl2ZSIsIuuplOyduO2OmOydtOyngCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDUEMsK0NBQVEsQ0FBQyxFQUFELENBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBRXZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FDLGtEQUFTLENBQUMsWUFBTTtBQUNkSCxlQUFXLENBQUMsQ0FDVjtBQUNFSSxVQUFJLEVBQUUsYUFEUjtBQUVFQyxjQUFRLEVBQUUsQ0FDUjtBQUFFRCxZQUFJLEVBQUUsTUFBUjtBQUFnQkUsWUFBSSxFQUFFO0FBQXRCLE9BRFEsRUFFUjtBQUFFRixZQUFJLEVBQUUsSUFBUjtBQUFjRSxZQUFJLEVBQUU7QUFBcEIsT0FGUSxFQUdSO0FBQUVGLFlBQUksRUFBRTtBQUFSLE9BSFEsRUFJUjtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUpRO0FBRlosS0FEVSxFQVVWO0FBQ0VBLFVBQUksRUFBRSxLQURSO0FBRUVDLGNBQVEsRUFBRSxDQUNSO0FBQUVELFlBQUksRUFBRTtBQUFSLE9BRFEsRUFFUjtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUZRLEVBR1I7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FIUSxFQUlSO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BSlE7QUFGWixLQVZVLEVBbUJWO0FBQ0VBLFVBQUksRUFBRTtBQURSLEtBbkJVLENBQUQsQ0FBWDtBQXVCRCxHQXhCUSxFQXdCTixFQXhCTSxDQUFUOztBQTBCQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBYztBQUNwQ1AsV0FBTyxDQUFDQyxHQUFSLENBQVlNLFFBQVo7QUFDQSxRQUFNQyxXQUFXLEdBQUdWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQzlDLFVBQUlBLEdBQUcsS0FBS0osUUFBWixFQUFzQjtBQUNwQixlQUFPRyxJQUFJLENBQUNFLE1BQUwsR0FDSDtBQUFFVCxjQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFBYjtBQUFtQkMsa0JBQVEsRUFBRSxvSUFBSU0sSUFBSSxDQUFDTixRQUFYLENBQTNCO0FBQWlEUSxnQkFBTSxFQUFFO0FBQXpELFNBREcsR0FFSDtBQUNFVCxjQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFEYjtBQUVFQyxrQkFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQUwsdUlBQW9CTSxJQUFJLENBQUNOLFFBQXpCLElBQXFDLEVBRmpEO0FBR0VRLGdCQUFNLEVBQUU7QUFIVixTQUZKO0FBT0QsT0FSRCxNQVFPO0FBQ0wsZUFBTztBQUNMVCxjQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFETjtBQUVMQyxrQkFBUSxFQUFFTSxJQUFJLENBQUNOLFFBQUwsdUlBQW9CTSxJQUFJLENBQUNOLFFBQXpCLElBQXFDLEVBRjFDO0FBR0xRLGdCQUFNLEVBQUU7QUFISCxTQUFQO0FBS0Q7QUFDRixLQWhCbUIsQ0FBcEI7QUFpQkFDLFNBQUs7QUFDTGQsZUFBVyxDQUFDUyxXQUFELENBQVg7QUFDRCxHQXJCRDs7QUF1QkEsc0JBQU8sOERBQUMsdURBQUQ7QUFBUSxtQkFBZSxFQUFFRixlQUF6QjtBQUEwQyxZQUFRLEVBQUVSLFFBQXBEO0FBQUEsMkJBQ0wsOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0dBdkRRRixLOztLQUFBQSxLO0FBeURULCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFttZW51TGlzdCwgc2V0TWVudUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zb2xlLmxvZygnbGF5b3V0IHJlbmRlcicpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lbnVMaXN0KFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJwcm9ncmFtbWluZ1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgbmFtZTogXCJ0ZXN0XCIsIGxpbms6IDEgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiYWJcIiwgbGluazogMiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJhY1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImFkXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVElMXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBuYW1lOiBcImJcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJiYlwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcImJjXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiYmRcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCLrqZTribQzXCIsXG4gICAgICB9LFxuICAgIF0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGNsaWNrSWR4KSA9PiB7XG4gICAgY29uc29sZS5sb2coY2xpY2tJZHgpO1xuICAgIGNvbnN0IG5ld01lbnVMaXN0ID0gbWVudUxpc3QubWFwKChtZW51LCBpZHgpID0+IHtcbiAgICAgIGlmIChpZHggPT09IGNsaWNrSWR4KSB7XG4gICAgICAgIHJldHVybiBtZW51LmFjdGl2ZVxuICAgICAgICAgID8geyBuYW1lOiBtZW51Lm5hbWUsIGNoaWxkcmVuOiBbLi4ubWVudS5jaGlsZHJlbl0sIGFjdGl2ZTogZmFsc2UgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBuYW1lOiBtZW51Lm5hbWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBtZW51LmNoaWxkcmVuID8gWy4uLm1lbnUuY2hpbGRyZW5dIDogW10sXG4gICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IG1lbnUubmFtZSxcbiAgICAgICAgICBjaGlsZHJlbjogbWVudS5jaGlsZHJlbiA/IFsuLi5tZW51LmNoaWxkcmVuXSA6IFtdLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAg66mU7J247Y6Y7J207KeAXG4gICAgc2V0TWVudUxpc3QobmV3TWVudUxpc3QpO1xuICB9O1xuICBcbiAgcmV0dXJuIDxMYXlvdXQgaGFuZGxlTWVudUNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9IG1lbnVsaXN0PXttZW51TGlzdH0+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});