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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ leftPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leftPanel.module.css */ \"./components/leftPanel.module.css\");\n/* harmony import */ var _leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ \"./node_modules/@material-ui/icons/ExpandLess.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/a31/git/monsterfairy2-blog/components/leftPanel.js\";\n\n\n\n\n\nfunction leftPanel(props) {\n  var _this = this;\n\n  console.log(\"props.menulist\", props.menulist);\n\n  var handleMenuClick = function handleMenuClick(idx) {\n    props.handleMenuClick(idx);\n  };\n\n  var getExpandIcon = function getExpandIcon(item) {\n    if (!item.children) {\n      return null;\n    } else if (item.children.length === 0) {\n      return null;\n    } else {\n      return item.active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_2__.default, {\n        style: {\n          fontSize: '15'\n        },\n        classes: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().padding)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__.default, {\n        style: {\n          fontSize: '15'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this);\n    }\n  };\n\n  var handleClickLinkIcon = function handleClickLinkIcon(location) {\n    window.open(location);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        style: {\n          cursor: 'pointer'\n        },\n        href: \"/\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().circle)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"Injae Woo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          style: {\n            cursor: 'pointer'\n          },\n          onClick: function onClick() {\n            handleClickLinkIcon('https://github.com/wooinjae2');\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__.default, {\n            style: {\n              fontSize: '20'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 110\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuList),\n      children: props.menulist ? props.menulist.map(function (item, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: function onClick() {\n              handleMenuClick(idx);\n            },\n            children: [item.name, getExpandIcon(item)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 19\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().transition), \" \").concat(item.active ? (_leftPanel_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\", \" \"),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              children: item.children ? item.children.map(function (child) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(item.name, \"/\").concat(child.link),\n                    children: child.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 33\n                  }, _this)\n                }, child.name, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 31\n                }, _this);\n              }) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 19\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, _this);\n      }) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sZWZ0UGFuZWwuanM/YWU5MyJdLCJuYW1lcyI6WyJsZWZ0UGFuZWwiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51bGlzdCIsImhhbmRsZU1lbnVDbGljayIsImlkeCIsImdldEV4cGFuZEljb24iLCJpdGVtIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJhY3RpdmUiLCJmb250U2l6ZSIsInN0eWxlcyIsInBhZGRpbmciLCJoYW5kbGVDbGlja0xpbmtJY29uIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJvcGVuIiwiY3Vyc29yIiwiY2lyY2xlIiwibWFwIiwibmFtZSIsImNoaWxkIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQUssQ0FBQ0csUUFBcEM7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQVM7QUFDL0JMLFNBQUssQ0FBQ0ksZUFBTixDQUFzQkMsR0FBdEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCLFFBQUksQ0FBQ0EsSUFBSSxDQUFDQyxRQUFWLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTyxJQUFJRCxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUNyQyxhQUFPLElBQVA7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPRixJQUFJLENBQUNHLE1BQUwsZ0JBQ0wsOERBQUMsa0VBQUQ7QUFBZ0IsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUM7QUFBWCxTQUF2QjtBQUEwQyxlQUFPLEVBQUVDLHNFQUFjQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBR0wsOERBQUMsa0VBQUQ7QUFBZ0IsYUFBSyxFQUFFO0FBQUVGLGtCQUFRLEVBQUM7QUFBWDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFLRDtBQUNGLEdBWkQ7O0FBY0EsTUFBTUcsbUJBQW1CLEdBQUksU0FBdkJBLG1CQUF1QixDQUFDQyxRQUFELEVBQWE7QUFFeENDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaO0FBRUQsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUgsa0VBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG1FQUFoQjtBQUFBLDhCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUNNLGdCQUFNLEVBQUU7QUFBVCxTQUFWO0FBQStCLFlBQUksRUFBQyxHQUFwQztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRU4scUVBQWFPO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUEsK0JBQ0U7QUFBRyxlQUFLLEVBQUU7QUFBQ0Qsa0JBQU0sRUFBRTtBQUFULFdBQVY7QUFBOEIsaUJBQU8sRUFBRSxtQkFBSTtBQUFDSiwrQkFBbUIsQ0FBQyw4QkFBRCxDQUFuQjtBQUFvRCxXQUFoRztBQUFBLHVDQUFtRyw4REFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBQ0gsc0JBQVEsRUFBRTtBQUFYO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFQyx1RUFBaEI7QUFBQSxnQkFDR1osS0FBSyxDQUFDRyxRQUFOLEdBQ0dILEtBQUssQ0FBQ0csUUFBTixDQUFlaUIsR0FBZixDQUFtQixVQUFDYixJQUFELEVBQU9GLEdBQVAsRUFBZTtBQUNoQyw0QkFDRTtBQUFxQixtQkFBUyxFQUFFTyx1RUFBaEM7QUFBQSxrQ0FDRTtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYlIsNkJBQWUsQ0FBQ0MsR0FBRCxDQUFmO0FBQ0QsYUFISDtBQUFBLHVCQUtHRSxJQUFJLENBQUNjLElBTFIsRUFNR2YsYUFBYSxDQUFDQyxJQUFELENBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFO0FBQ0UscUJBQVMsWUFBS0sseUVBQUwsY0FDUEwsSUFBSSxDQUFDRyxNQUFMLEdBQWNFLHFFQUFkLEdBQThCLEVBRHZCLE1BRFg7QUFBQSxtQ0FLRTtBQUFBLHdCQUNHTCxJQUFJLENBQUNDLFFBQUwsR0FDR0QsSUFBSSxDQUFDQyxRQUFMLENBQWNZLEdBQWQsQ0FBa0IsVUFBQ0UsS0FBRCxFQUFXO0FBQzNCLG9DQUNFO0FBQUEseUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxhQUFNZixJQUFJLENBQUNjLElBQVgsY0FBbUJDLEtBQUssQ0FBQ0MsSUFBekIsQ0FBVjtBQUFBLDhCQUNHRCxLQUFLLENBQUNEO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQUFTQyxLQUFLLENBQUNELElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQU9ELGVBUkQsQ0FESCxHQVVHO0FBWE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQSxXQUFVZCxJQUFJLENBQUNjLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQStCRCxPQWhDRCxDQURILEdBa0NHO0FBbkNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1ERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGVmdFBhbmVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sZWZ0UGFuZWwubW9kdWxlLmNzc1wiO1xuXG5cbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0UGFuZWwocHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJwcm9wcy5tZW51bGlzdFwiLCBwcm9wcy5tZW51bGlzdCk7XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKGlkeCkgPT4ge1xuICAgIHByb3BzLmhhbmRsZU1lbnVDbGljayhpZHgpO1xuICB9O1xuXG4gIGNvbnN0IGdldEV4cGFuZEljb24gPSAoaXRlbSkgPT4ge1xuICAgIGlmICghaXRlbS5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtLmFjdGl2ZSA/IChcbiAgICAgICAgPEV4cGFuZExlc3NJY29uIHN0eWxlPXt7IGZvbnRTaXplOicxNScgfX0gY2xhc3Nlcz17c3R5bGVzLnBhZGRpbmd9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8RXhwYW5kTW9yZUljb24gc3R5bGU9e3sgZm9udFNpemU6JzE1JyB9fS8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja0xpbmtJY29uID0gIChsb2NhdGlvbikgPT57XG5cbiAgICB3aW5kb3cub3Blbihsb2NhdGlvbik7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgPGEgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319IGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGV9PjwvZGl2PlxuICAgICAgICAgIDxoMj5JbmphZSBXb288L2gyPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319b25DbGljaz17KCk9PntoYW5kbGVDbGlja0xpbmtJY29uKCdodHRwczovL2dpdGh1Yi5jb20vd29vaW5qYWUyJyl9fT4gPEdpdEh1Ykljb24gc3R5bGU9e3tmb250U2l6ZTogJzIwJ319Lz48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUxpc3R9PlxuICAgICAgICB7cHJvcHMubWVudWxpc3RcbiAgICAgICAgICA/IHByb3BzLm1lbnVsaXN0Lm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWVudUNsaWNrKGlkeCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtnZXRFeHBhbmRJY29uKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRyYW5zaXRpb259ICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2hpbGQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpdGVtLm5hbWV9LyR7Y2hpbGQubGlua31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/leftPanel.js\n");

/***/ })

});