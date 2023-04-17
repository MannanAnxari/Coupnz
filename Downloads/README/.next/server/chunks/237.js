"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StoreItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5850);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2681);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2670);
// import Image from 'next/image'




// import Spinner from './Spinner'


const Popular = ({ styledata , popularStore  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container pt-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "head1",
                    children: styledata.Style === 1 ? " Most Popular Stores" : "Your Most Favorite Stores"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row p-2",
                    children: popularStore?.popular_stores?.map((item)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StoreItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            item: item,
                            img: popularStore?.store_url,
                            data: styledata
                        });
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popular);


/***/ }),

/***/ 1446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Slider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/slider/apparel-promozons-01.jpg
/* harmony default export */ const apparel_promozons_01 = ({"src":"/_next/static/media/apparel-promozons-01.b9e6b973.jpg","height":530,"width":1900,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAp4Ff/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQAEBTVysv/aAAgBAQABPwCbqn2R0F//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQMx/9oACAECAQE/AKaj/8QAFREBAQAAAAAAAAAAAAAAAAAAAAL/2gAIAQMBAT8Ah//Z","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/assets/slider/Memoria-Day-Sale-morecouponcode.png
/* harmony default export */ const Memoria_Day_Sale_morecouponcode = ({"src":"/_next/static/media/Memoria-Day-Sale-morecouponcode.68aa778d.png","height":560,"width":1888,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAO0lEQVR42mMoSUhdIqzlqefKwMAQ4B84e/acmtpaLx9fhpa6xty4dNvQbgZm2cjIiFmzZhcUFsYnJAIAlSkRL+osi4EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/assets/slider/Happy-Memorial Day-couponive.png
/* harmony default export */ const Happy_Memorial_Day_couponive = ({"src":"/_next/static/media/Happy-Memorial Day-couponive.ca83604d.png","height":98,"width":1164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGP8/vrV/38sLAw//jMwMDIwMLAA2X/+/mXg+P+fgQmIAfI6DdNdD3i5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./components/Spinner.jsx
var Spinner = __webpack_require__(2670);
// EXTERNAL MODULE: ./public/settings/there_is_nothing_holding_me_back/config.js
var config = __webpack_require__(2681);
;// CONCATENATED MODULE: ./components/Slider.js








const Slider = ({ data , sliderData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.Style === 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "carouselExampleControlsNoTouching",
            class: "carousel slide slider-css",
            "data-bs-touch": "false",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "carousel-inner",
                    children: sliderData?.slider?.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "carousel-item active h-100",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: `${sliderData?.slider_url + "/" + item.media}`,
                                class: "d-block w-100 position-relative",
                                fill: true,
                                alt: "..."
                            })
                        }, item.id);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    class: "carousel-control-prev",
                    type: "button",
                    "data-bs-target": "#carouselExampleControlsNoTouching",
                    "data-bs-slide": "prev",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            class: "carousel-control-prev-icon",
                            "aria-hidden": "true"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            class: "visually-hidden",
                            children: "Previous"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    class: "carousel-control-next",
                    type: "button",
                    "data-bs-target": "#carouselExampleControlsNoTouching",
                    "data-bs-slide": "next",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            class: "carousel-control-next-icon",
                            "aria-hidden": "true"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            class: "visually-hidden",
                            children: "Next"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid bg-white px-0",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `${sliderData?.slider_url + "/" + sliderData?.slider[sliderData?.slider?.length - 1].media}`,
                fill: true,
                className: "position-relative custom-slider w-100"
            })
        })
    });
};
/* harmony default export */ const components_Slider = (Slider);


/***/ })

};
;