/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_app_jsx";
export const ids = ["src_app_jsx"];
export const modules = {

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n // import App1 from \"newapp1/app1\";\n\nconst App = () => {\n  const [state, setstate] = useState(false);\n  const OtherComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lazy(() => Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module 'newapp1/app1'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, state && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(OtherComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"App rendered second time\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    onClick: () => setstate(true)\n  }, \"click me\"));\n};\n\n//# sourceURL=webpack://newapp/./src/app.jsx?");

/***/ })

};
