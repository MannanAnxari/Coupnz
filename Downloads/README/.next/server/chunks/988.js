"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 2988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Categorycard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6498);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2670);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2681);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8321);








const country = ({ data , setMetas , metas  })=>{
    const dta = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    let slug = dta?.query?.slug;
    const [countrycard, setcountrycard] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [loading, setloading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setloading(true);
        fetch(`${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_3__.APP_URL}api/store?key=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_3__.APP_KEY}&country=${slug}`).then((res)=>res.json()).then((dta)=>{
            setMetas({
                ...metas,
                title: `${dta?.name ? dta?.name + " Coupons & Promo Codes" : "Coupon & Promo Codes"}`
            });
            if (dta.success) {
                setcountrycard(dta);
                setError(null);
            } else {
                setError(dta.message);
            }
            setloading(false);
        }).catch((err)=>{
            setError("something went wrong!");
            setloading(false);
        });
    }, [
        slug
    ]);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container my-3",
        children: err ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-center my-auto py-5",
            children: err
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        " ",
                        countrycard.name,
                        " Coupons & Promo Codes "
                    ]
                }),
                countrycard?.data?.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cat-card col-md-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/store/${item.slug}`,
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Categorycard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    item: item,
                                    img: countrycard.url
                                })
                            ]
                        })
                    });
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (country);


/***/ })

};
;