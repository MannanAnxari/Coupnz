"use strict";
(() => {
var exports = {};
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 4748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./public/settings/config.js
var config = __webpack_require__(357);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/racecar.js

var fs = __webpack_require__(7147);

function handler(req, res) {
    try {
        fetch(`${config.APP_URL}api/settings?key=${config.APP_KEY}`).then((res)=>res.json()).then((theme)=>{
            let data = theme || {};
            const json = JSON.stringify(data);
            const filePath = external_path_default().join(process.cwd(), "public", "settings/data.json");
            fs.writeFile(filePath, json, "utf8", (err)=>{
                if (err) throw err;
                console.log("Data written to file");
            });
            return res.status(200).json({
                success: true,
                message: "Data written to file! \uD83D\uDE01"
            });
        }).catch((err)=>{
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


/***/ }),

/***/ 357:
/***/ ((module) => {


module.exports = {
    APP_URL: "https://creativeitsols.com/system/public/",
    APP_KEY: "app_oKzcxb5FK7e0KRwMPANEGRuqjSh40JrMSgbyTyAN",
    DEFAULT_TITLE: "More Coupon Codes",
    DEFAULT_DESC: "More Coupon Codes",
    CONTAINER_TYPE: "wisde",
    FOOTER_ABOUT: "Couponive is the website where you can find latest and verified coupons and promotion codes. Redeem and save now! Big Discounts. Simple Search. Get Code. Big Discount. Always Sale. The Best Price. Paste Code at Checkout. ALmost 5000+ Stores. Redeem Code Online."
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4748));
module.exports = __webpack_exports__;

})();