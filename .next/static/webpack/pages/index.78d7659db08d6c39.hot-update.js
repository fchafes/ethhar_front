"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BigVideo.js":
/*!************************************!*\
  !*** ./src/components/BigVideo.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst BigVideo = (param)=>{\n    let { reproducir  } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // useEffect(() => {\n    //   if (reproducir) {\n    //     videoRef.current.play();\n    //   }\n    // }, [reproducir]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (reproducir && iframeRef.current) {\n            const srcWithAutoplay = iframeRef.current.src + \"&autoplay=1\";\n            iframeRef.current.src = srcWithAutoplay;\n        }\n    }, [\n        reproducir\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"content-9\",\n        className: \"content-9 bg-01 pt-100 content-section division mb-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container white-color\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"video-preview wow fadeInUp\",\n                            style: {\n                                height: \"80vh\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                ref: iframeRef,\n                                width: \"100%\",\n                                height: \"100%\",\n                                src: \"https://www.youtube.com/embed/Q6-bt9XhOjc?si=pxcEsZuDn6BE3xSf\",\n                                title: \"YouTube video player\",\n                                frameborder: \"0\",\n                                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                                referrerpolicy: \"strict-origin-when-cross-origin\",\n                                allowfullscreen: true\n                            }, void 0, false, {\n                                fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-10 col-lg-9\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section-title title-02 mb-60 custom-mobile-vid-sec\",\n                            style: {\n                                marginTop: \"50px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"h2-xs h3-custom-resp\",\n                                children: \"Intervenciones musicales personalizadas enfocadas en personas de tercera edad, principalmente en aquellas diagnosticadas con enfermedades neurodegenerativas, como el Alzheimer.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/fede/Documents/GitHub/ethhar_front/src/components/BigVideo.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BigVideo, \"ZpWjifzoCL3CXi5QKkMKEcK9YRM=\");\n_c = BigVideo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BigVideo);\nvar _c;\n$RefreshReg$(_c, \"BigVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CaWdWaWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRTFDLE1BQU1FLFdBQVcsU0FBb0I7UUFBbkIsRUFBRUMsV0FBVSxFQUFFOztJQUM5QixNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQzVCLE1BQU1LLFlBQVlMLDZDQUFNQSxDQUFDLElBQUk7SUFDN0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlFLGNBQWNFLFVBQVVDLE9BQU8sRUFBRTtZQUNuQyxNQUFNQyxrQkFBa0JGLFVBQVVDLE9BQU8sQ0FBQ0UsR0FBRyxHQUFHO1lBQ2hESCxVQUFVQyxPQUFPLENBQUNFLEdBQUcsR0FBR0Q7UUFDMUIsQ0FBQztJQUNILEdBQUc7UUFBQ0o7S0FBVztJQUVmLHFCQUNFLDhEQUFDTTtRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7a0JBRVYsNEVBQUNDO1lBQUlELFdBQVU7OzhCQWFiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUNDRCxXQUFVOzRCQUNWRSxPQUFPO2dDQUFFQyxRQUFROzRCQUFPO3NDQUV4Qiw0RUFBQ0M7Z0NBQ0RDLEtBQUtYO2dDQUNIWSxPQUFNO2dDQUNOSCxRQUFPO2dDQUNQTixLQUFJO2dDQUNKVSxPQUFNO2dDQUNOQyxhQUFZO2dDQUNaQyxPQUFNO2dDQUNOQyxnQkFBZTtnQ0FDZkMsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU92Qiw4REFBQ1Y7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFDQ0QsV0FBVTs0QkFDVkUsT0FBTztnQ0FBRVUsV0FBVzs0QkFBTztzQ0FFM0IsNEVBQUNDO2dDQUFHYixXQUFVOzBDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbkQ7R0F6RU1UO0tBQUFBO0FBMkVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JpZ1ZpZGVvLmpzPzFiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJpZ1ZpZGVvID0gKHsgcmVwcm9kdWNpciB9KSA9PiB7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaWZyYW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAocmVwcm9kdWNpcikge1xyXG4gIC8vICAgICB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcmVwcm9kdWNpcl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVwcm9kdWNpciAmJiBpZnJhbWVSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzcmNXaXRoQXV0b3BsYXkgPSBpZnJhbWVSZWYuY3VycmVudC5zcmMgKyBcIiZhdXRvcGxheT0xXCI7XHJcbiAgICAgIGlmcmFtZVJlZi5jdXJyZW50LnNyYyA9IHNyY1dpdGhBdXRvcGxheTtcclxuICAgIH1cclxuICB9LCBbcmVwcm9kdWNpcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgaWQ9XCJjb250ZW50LTlcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250ZW50LTkgYmctMDEgcHQtMTAwIGNvbnRlbnQtc2VjdGlvbiBkaXZpc2lvbiBtYi0zXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd2hpdGUtY29sb3JcIj5cclxuICAgICAgICB7LyogSU1BR0UgQkxPQ0sgKi99XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtOS1pbWcgdmlkZW8tcHJldmlldyB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gY29udHJvbHMgcG9zdGVyPVwiL3N1cGEvdmlkZW8tcHJvbW8tcG9zdGVyLmpwZ1wiIGNsYXNzTmFtZT1cInZpZGVvLXByb21vLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJzdXBhL2NvbXByaW1pZG8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgICAgICBUdSBuYXZlZ2Fkb3Igbm8gc29wb3J0YSBsYSByZXByb2R1Y2Npw7NuIGRlIHZpZGVvLlxyXG4gICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLXByZXZpZXcgd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiODB2aFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgcmVmPXtpZnJhbWVSZWZ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9RNi1idDlYaE9qYz9zaT1weGNFc1p1RG42QkUzeFNmXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCJcclxuICAgICAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiXHJcbiAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBTRUNUSU9OIFRJVExFICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIHRpdGxlLTAyIG1iLTYwIGN1c3RvbS1tb2JpbGUtdmlkLXNlY1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgyLXhzIGgzLWN1c3RvbS1yZXNwXCI+XHJcbiAgICAgICAgICAgICAgICBJbnRlcnZlbmNpb25lcyBtdXNpY2FsZXMgcGVyc29uYWxpemFkYXMgZW5mb2NhZGFzIGVuIHBlcnNvbmFzIGRlXHJcbiAgICAgICAgICAgICAgICB0ZXJjZXJhIGVkYWQsIHByaW5jaXBhbG1lbnRlIGVuIGFxdWVsbGFzIGRpYWdub3N0aWNhZGFzIGNvblxyXG4gICAgICAgICAgICAgICAgZW5mZXJtZWRhZGVzIG5ldXJvZGVnZW5lcmF0aXZhcywgY29tbyBlbCBBbHpoZWltZXIuXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBFbmQgY29udGFpbmVyICovfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWdWaWRlbztcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsIkJpZ1ZpZGVvIiwicmVwcm9kdWNpciIsInZpZGVvUmVmIiwiaWZyYW1lUmVmIiwiY3VycmVudCIsInNyY1dpdGhBdXRvcGxheSIsInNyYyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwiaWZyYW1lIiwicmVmIiwid2lkdGgiLCJ0aXRsZSIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJyZWZlcnJlcnBvbGljeSIsImFsbG93ZnVsbHNjcmVlbiIsIm1hcmdpblRvcCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BigVideo.js\n"));

/***/ })

});