/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/leftPanel.js":
/*!*********************************!*\
  !*** ./components/leftPanel.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ leftPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leftPanel.module.css */ \"./components/leftPanel.module.css\");\n/* harmony import */ var _leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ \"./node_modules/@material-ui/icons/ExpandLess.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/components/leftPanel.js\";\n\n\n\n\n\nfunction leftPanel(props) {\n  var _this = this;\n\n  console.log(\"props.menulist\", props.menulist);\n\n  var handleMenuClick = function handleMenuClick(idx) {\n    props.handleMenuClick(idx);\n  };\n\n  var getExpandIcon = function getExpandIcon(item) {\n    if (!item.children) {\n      return null;\n    } else if (item.children.length === 0) {\n      return null;\n    } else {\n      return item.active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__.default, {\n        style: {\n          fontSize: '15'\n        },\n        classes: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().padding)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__.default, {\n        style: {\n          fontSize: '15'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this);\n    }\n  };\n\n  var handleClickLinkIcon = function handleClickLinkIcon(location) {\n    window.open(location);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        style: {\n          cursor: 'pointer'\n        },\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().circle)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Injae Woo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          style: {\n            cursor: 'pointer'\n          },\n          onClick: function onClick() {\n            handleClickLinkIcon('https://github.com/wooinjae2');\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__.default, {\n            style: {\n              fontSize: '20'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 110\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuList),\n      children: props.menulist ? props.menulist.map(function (item, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: function onClick() {\n              handleMenuClick(idx);\n            },\n            children: [item.name, getExpandIcon(item)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 19\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().transition), \" \").concat(item.active ? (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\", \" \"),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              children: item.children ? item.children.map(function (child) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(item.name, \"/\").concat(child.link),\n                    children: child.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 33\n                  }, _this)\n                }, child.name, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 31\n                }, _this);\n              }) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, _this);\n      }) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZWZ0UGFuZWwuanM/YWU5MyJdLCJuYW1lcyI6WyJsZWZ0UGFuZWwiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51bGlzdCIsImhhbmRsZU1lbnVDbGljayIsImlkeCIsImdldEV4cGFuZEljb24iLCJpdGVtIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJhY3RpdmUiLCJmb250U2l6ZSIsInN0eWxlcyIsInBhZGRpbmciLCJoYW5kbGVDbGlja0xpbmtJY29uIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJvcGVuIiwiY3Vyc29yIiwiY2lyY2xlIiwibWFwIiwibmFtZSIsImNoaWxkIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQUssQ0FBQ0csUUFBcEM7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQVM7QUFDL0JMLFNBQUssQ0FBQ0ksZUFBTixDQUFzQkMsR0FBdEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCLFFBQUksQ0FBQ0EsSUFBSSxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTyxJQUFJRCxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUNyQyxhQUFPLElBQVA7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPRixJQUFJLENBQUNHLE1BQUwsZ0JBQ0wsOERBQUMsa0VBQUQ7QUFBZ0IsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUM7QUFBWCxTQUF2QjtBQUEwQyxlQUFPLEVBQUVDLHNFQUFjQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBR0wsOERBQUMsa0VBQUQ7QUFBZ0IsYUFBSyxFQUFFO0FBQUVGLGtCQUFRLEVBQUM7QUFBWDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFLRDtBQUNGLEdBWkQ7O0FBY0EsTUFBTUcsbUJBQW1CLEdBQUksU0FBdkJBLG1CQUF1QixDQUFDQyxRQUFELEVBQWE7QUFFeENDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaO0FBRUQsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUgsa0VBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG1FQUFoQjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUNNLGdCQUFNLEVBQUU7QUFBVCxTQUFiO0FBQWtDLFlBQUksRUFBQyxHQUF2QztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRU4scUVBQWFPO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0U7QUFBQSwrQkFDRTtBQUFHLGVBQUssRUFBRTtBQUFDRCxrQkFBTSxFQUFFO0FBQVQsV0FBVjtBQUE4QixpQkFBTyxFQUFFLG1CQUFJO0FBQUNKLCtCQUFtQixDQUFDLDhCQUFELENBQW5CO0FBQW9ELFdBQWhHO0FBQUEsdUNBQW1HLDhEQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBRTtBQUFDSCxzQkFBUSxFQUFFO0FBQVg7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBSyxlQUFTLEVBQUVDLHVFQUFoQjtBQUFBLGdCQUNHWixLQUFLLENBQUNHLFFBQU4sR0FDR0gsS0FBSyxDQUFDRyxRQUFOLENBQWVpQixHQUFmLENBQW1CLFVBQUNiLElBQUQsRUFBT0YsR0FBUCxFQUFlO0FBQ2hDLDRCQUNFO0FBQXFCLG1CQUFTLEVBQUVPLHVFQUFoQztBQUFBLGtDQUNFO0FBQ0UsbUJBQU8sRUFBRSxtQkFBTTtBQUNiUiw2QkFBZSxDQUFDQyxHQUFELENBQWY7QUFDRCxhQUhIO0FBQUEsdUJBS0dFLElBQUksQ0FBQ2MsSUFMUixFQU1HZixhQUFhLENBQUNDLElBQUQsQ0FOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFDRSxxQkFBUyxZQUFLSyx5RUFBTCxjQUNQTCxJQUFJLENBQUNHLE1BQUwsR0FBY0UscUVBQWQsR0FBOEIsRUFEdkIsTUFEWDtBQUFBLG1DQUtFO0FBQUEsd0JBQ0dMLElBQUksQ0FBQ0MsUUFBTCxHQUNHRCxJQUFJLENBQUNDLFFBQUwsQ0FBY1ksR0FBZCxDQUFrQixVQUFDRSxLQUFELEVBQVc7QUFDM0Isb0NBQ0U7QUFBQSx5Q0FDRSw4REFBQyxrREFBRDtBQUFNLHdCQUFJLGFBQU1mLElBQUksQ0FBQ2MsSUFBWCxjQUFtQkMsS0FBSyxDQUFDQyxJQUF6QixDQUFWO0FBQUEsOEJBQ0dELEtBQUssQ0FBQ0Q7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBQVNDLEtBQUssQ0FBQ0QsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBT0QsZUFSRCxDQURILEdBVUc7QUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBLFdBQVVkLElBQUksQ0FBQ2MsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBK0JELE9BaENELENBREgsR0FrQ0c7QUFuQ047QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUREIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sZWZ0UGFuZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xlZnRQYW5lbC5tb2R1bGUuY3NzXCI7XG5cblxuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRQYW5lbChwcm9wcykge1xuICBjb25zb2xlLmxvZyhcInByb3BzLm1lbnVsaXN0XCIsIHByb3BzLm1lbnVsaXN0KTtcblxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoaWR4KSA9PiB7XG4gICAgcHJvcHMuaGFuZGxlTWVudUNsaWNrKGlkeCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RXhwYW5kSWNvbiA9IChpdGVtKSA9PiB7XG4gICAgaWYgKCFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlID8gKFxuICAgICAgICA8RXhwYW5kTGVzc0ljb24gc3R5bGU9e3sgZm9udFNpemU6JzE1JyB9fSBjbGFzc2VzPXtzdHlsZXMucGFkZGluZ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxFeHBhbmRNb3JlSWNvbiBzdHlsZT17eyBmb250U2l6ZTonMTUnIH19Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrTGlua0ljb24gPSAgKGxvY2F0aW9uKSA9PntcblxuICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICA8TGluayBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0gaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0+PC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8aDI+SW5qYWUgV29vPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1vbkNsaWNrPXsoKT0+e2hhbmRsZUNsaWNrTGlua0ljb24oJ2h0dHBzOi8vZ2l0aHViLmNvbS93b29pbmphZTInKX19PiA8R2l0SHViSWNvbiBzdHlsZT17e2ZvbnRTaXplOiAnMjAnfX0vPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlzdH0+XG4gICAgICAgIHtwcm9wcy5tZW51bGlzdFxuICAgICAgICAgID8gcHJvcHMubWVudWxpc3QubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNZW51Q2xpY2soaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAge2dldEV4cGFuZEljb24oaXRlbSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudHJhbnNpdGlvbn0gJHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGlsZC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2l0ZW0ubmFtZX0vJHtjaGlsZC5saW5rfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/leftPanel.js\n");

/***/ })

});