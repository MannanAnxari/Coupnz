"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/racecar";
exports.ids = ["pages/api/racecar"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/racecar.js":
/*!******************************!*\
  !*** ./pages/api/racecar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"(api)/./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nfunction handler(req, res) {\n    try {\n        fetch(`${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_0__.APP_URL}api/settings?key=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_0__.APP_KEY}`).then((res)=>res.json()).then((theme)=>{\n            let data = theme || {};\n            const json = JSON.stringify(data);\n            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"settings/data.json\");\n            fs.writeFile(filePath, json, \"utf8\", (err)=>{\n                if (err) throw err;\n                console.log(\"Data written to file\");\n            });\n            return res.status(200).json({\n                success: true,\n                message: \"Data written to file! \\uD83D\\uDE01\"\n            });\n        }).catch((err)=>{\n            res.status(500).json({\n                success: false,\n                message: err.message\n            });\n        });\n    } catch (err) {\n        res.status(500).json({\n            success: false,\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFjZWNhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RjtBQUM3RixJQUFJRSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNPO0FBRVQsU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFJeEMsSUFBSTtRQUNGQyxNQUFNLENBQUMsRUFBRVAsNkZBQU9BLENBQUMsaUJBQWlCLEVBQUVELDZGQUFPQSxDQUFDLENBQUMsRUFBRVMsSUFBSSxDQUFDRixDQUFBQSxNQUFPQSxJQUFJRyxJQUFJLElBQUlELElBQUksQ0FBQyxDQUFDRSxRQUFVO1lBQ3JGLElBQUlDLE9BQU9ELFNBQVMsQ0FBQztZQUNyQixNQUFNRCxPQUFPRyxLQUFLQyxTQUFTLENBQUNGO1lBQzVCLE1BQU1HLFdBQVdYLGdEQUFTLENBQUNhLFFBQVFDLEdBQUcsSUFBSSxVQUFVO1lBRXBEaEIsR0FBR2lCLFNBQVMsQ0FBQ0osVUFBVUwsTUFBTSxRQUFRLENBQUNVLE1BQVE7Z0JBQzVDLElBQUlBLEtBQUssTUFBTUEsSUFBSTtnQkFDbkJDLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1lBRUEsT0FBT2YsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLYixJQUFJLENBQUM7Z0JBQUVjLFNBQVMsSUFBSTtnQkFBRUMsU0FBUztZQUEyQjtRQUNuRixHQUFHQyxLQUFLLENBQUNOLENBQUFBLE1BQU87WUFDZGIsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLYixJQUFJLENBQUM7Z0JBQUVjLFNBQVMsS0FBSztnQkFBRUMsU0FBU0wsSUFBSUssT0FBTztZQUFDO1FBQzlEO0lBQ0YsRUFDQSxPQUFPTCxLQUFLO1FBQ1ZiLElBQUlnQixNQUFNLENBQUMsS0FBS2IsSUFBSSxDQUFDO1lBQUVjLFNBQVMsS0FBSztZQUFFQyxTQUFTTCxJQUFJSyxPQUFPO1FBQUM7SUFDOUQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cG9uLy4vcGFnZXMvYXBpL3JhY2VjYXIuanM/ZDA2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfS0VZLCBBUFBfVVJMIH0gZnJvbSAnQC9wdWJsaWMvc2V0dGluZ3MvdGhlcmVfaXNfbm90aGluZ19ob2xkaW5nX21lX2JhY2svY29uZmlnJztcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKVxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcblxyXG5cclxuICB0cnkge1xyXG4gICAgZmV0Y2goYCR7QVBQX1VSTH1hcGkvc2V0dGluZ3M/a2V5PSR7QVBQX0tFWX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKCh0aGVtZSkgPT4geyBcclxuICAgICAgbGV0IGRhdGEgPSB0aGVtZSB8fCB7fTtcclxuICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3NldHRpbmdzL2RhdGEuanNvbicpO1xyXG5cclxuICAgICAgZnMud3JpdGVGaWxlKGZpbGVQYXRoLCBqc29uLCAndXRmOCcsIChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgd3JpdHRlbiB0byBmaWxlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0RhdGEgd3JpdHRlbiB0byBmaWxlISDwn5iBJyB9KTsgXHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBUFBfS0VZIiwiQVBQX1VSTCIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsInRoZW1lIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwid3JpdGVGaWxlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/racecar.js\n");

/***/ }),

/***/ "(api)/./public/settings/there_is_nothing_holding_me_back/config.js":
/*!********************************************************************!*\
  !*** ./public/settings/there_is_nothing_holding_me_back/config.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    APP_URL: \"https://creativeitsols.com/system/public/\",\n    APP_KEY: \"app_oKzcxb5FK7e0KRwMPANEGRuqjSh40JrMSgbyTyAN\",\n    DEFAULT_TITLE: \"More Coupon Codes\",\n    DEFAULT_DESC: \"More Coupon Codes\",\n    CONTAINER_TYPE: \"wisde\",\n    FOOTER_ABOUT: \"Discountss Co is the website where you can find latest and verified coupons and promotion codes. Redeem and save now! Big Discounts. Simple Search. Get Code. Big Discount. Always Sale. The Best Price. Paste Code at Checkout. ALmost 5000+ Stores. Redeem Code Online.\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wdWJsaWMvc2V0dGluZ3MvdGhlcmVfaXNfbm90aGluZ19ob2xkaW5nX21lX2JhY2svY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2JDLFNBQVM7SUFDVEMsU0FBUztJQUNUQyxlQUFlO0lBQ2ZDLGNBQWM7SUFDZEMsZ0JBQWdCO0lBQ2hCQyxjQUFjO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cG9uLy4vcHVibGljL3NldHRpbmdzL3RoZXJlX2lzX25vdGhpbmdfaG9sZGluZ19tZV9iYWNrL2NvbmZpZy5qcz84YWM3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQVBQX1VSTDogXCJodHRwczovL2NyZWF0aXZlaXRzb2xzLmNvbS9zeXN0ZW0vcHVibGljL1wiLFxyXG4gICAgQVBQX0tFWTogXCJhcHBfb0t6Y3hiNUZLN2UwS1J3TVBBTkVHUnVxalNoNDBKck1TZ2J5VHlBTlwiLFxyXG4gICAgREVGQVVMVF9USVRMRTogXCJNb3JlIENvdXBvbiBDb2Rlc1wiLFxyXG4gICAgREVGQVVMVF9ERVNDOiBcIk1vcmUgQ291cG9uIENvZGVzXCIsXHJcbiAgICBDT05UQUlORVJfVFlQRTogXCJ3aXNkZVwiLFxyXG4gICAgRk9PVEVSX0FCT1VUOiBcIkRpc2NvdW50c3MgQ28gaXMgdGhlIHdlYnNpdGUgd2hlcmUgeW91IGNhbiBmaW5kIGxhdGVzdCBhbmQgdmVyaWZpZWQgY291cG9ucyBhbmQgcHJvbW90aW9uIGNvZGVzLiBSZWRlZW0gYW5kIHNhdmUgbm93ISBCaWcgRGlzY291bnRzLiBTaW1wbGUgU2VhcmNoLiBHZXQgQ29kZS4gQmlnIERpc2NvdW50LiBBbHdheXMgU2FsZS4gVGhlIEJlc3QgUHJpY2UuIFBhc3RlIENvZGUgYXQgQ2hlY2tvdXQuIEFMbW9zdCA1MDAwKyBTdG9yZXMuIFJlZGVlbSBDb2RlIE9ubGluZS5cIixcclxufSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQVBQX1VSTCIsIkFQUF9LRVkiLCJERUZBVUxUX1RJVExFIiwiREVGQVVMVF9ERVNDIiwiQ09OVEFJTkVSX1RZUEUiLCJGT09URVJfQUJPVVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./public/settings/there_is_nothing_holding_me_back/config.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/racecar.js"));
module.exports = __webpack_exports__;

})();