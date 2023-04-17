"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 6815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2681);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const horizentalcoupon = ({ data , coupon , is_ico , img , isSingle , padd  })=>{
    const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var date = new Date(coupon.update_date);
    var edate = new Date(coupon.expire_date);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data?.Style === 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white my-2 h-100 p-3 coupon d-flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2  my-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: img,
                        fill: true,
                        className: "h-85-px object-fit-contain position-relative"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-8 my-auto px-2 px-md-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "#",
                            className: `h3 coupon-code-card-head text-${!coupon?.code ? "secondary" : "primary"}`,
                            children: coupon?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "tr-2  d-md-block d-none fs-px",
                            dangerouslySetInnerHTML: {
                                __html: coupon.description
                            }
                        }),
                        coupon.featured === "on" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            class: "new-tag m-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    class: "fas fa-star  text-primary",
                                    "aria-hidden": "true"
                                }),
                                " New Coupon"
                            ]
                        }) : "",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-md-flex justify-content-between mb-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "x-small mb-0 expiredate",
                                    children: [
                                        "Expires",
                                        coupon.expire_date ? ` ${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}` : "Expire Soon..."
                                    ]
                                }),
                                !is_ico && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " coupon-social d-md-block d-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        class: "list-unstyled d-flex mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `http://www.facebook.com/sharer.php?u=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-facebook text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `https://wa.me/?text=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-whatsapp text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `https://telegram.me/share/url?url=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-telegram-plane text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " col-2 text-end m-auto my-auto ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `${coupon?.url || ""}`,
                            onClick: ()=>{
                                window.open(`/store/${coupon.store_slug}/${coupon?.id}`);
                            },
                            className: `p-2 d-md-block fw-bold d-none button button-${!coupon?.code ? "primary" : "secondary"}`,
                            children: !coupon?.code ? "Show Deal" : "Show Code"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `${coupon?.url || ""}`,
                            onClick: ()=>{
                                window.open(`/store/${coupon.store_slug}/${coupon?.id}`);
                            },
                            className: `p-2 fw-bold d-md-none d-block button button-${!coupon?.code ? "secondary" : "primary"}`,
                            children: !coupon?.code ? ">" : ">"
                        }),
                        coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "d-md-block fw-bold d-none x-small text-center pt-3",
                            children: [
                                "Update:  ",
                                `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                            ]
                        }) : ""
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `bg-white my-2 h-100 ${padd ? "py-2 px-3" : "p-3"} coupon ${isSingle && "theme-2-card"}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${isSingle ? "col-md-2 col-3" : "col-2"} my-auto`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: img,
                                fill: true,
                                className: "h-85-px object-fit-contain position-relative"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `my-auto px-2 px-md-4 ${isSingle ? "col-sm-7 col-9 mt-0" : "col-8"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "#",
                                    className: `h3 text-black`,
                                    children: coupon?.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `tr-2 d-md-block lh-1 ${!isSingle && "d-none"} fs-6`,
                                    dangerouslySetInnerHTML: {
                                        __html: coupon.description
                                    }
                                }),
                                coupon.featured === "on" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    class: "expiredate m-0 text-primary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: "fas fa-star text-primary",
                                            "aria-hidden": "true"
                                        }),
                                        " New Coupon"
                                    ]
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-none justify-content-between mb-0",
                                    children: !is_ico && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " coupon-social d-none",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            class: "list-unstyled d-flex mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `http://www.facebook.com/sharer.php?u=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-facebook text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `https://wa.me/?text=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-whatsapp text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `https://telegram.me/share/url?url=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-telegram-plane text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        coupon?.code ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${isSingle ? "col-sm-3 col-12" : "card-footer bg-transparent col-3"}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "btncard_link position-relative ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `${coupon?.url || ""}`,
                                            onClick: ()=>{
                                                window.open(`/store/${coupon.store_slug}/${coupon?.id}`);
                                            },
                                            class: "btn btn-sm  why w-100 show-code-2-btn position-relative btn code-btn bg-orange    text-white font-weight-bold",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Show Code"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto",
                                            children: coupon.code
                                        })
                                    ]
                                }),
                                coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-md-block fw-bold d-none x-small text-center pt-3",
                                    children: [
                                        "Update:  ",
                                        `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                                    ]
                                }) : ""
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `text-end m-auto my-auto fw-bold ${isSingle ? "col-sm-3 col-12" : "col-3"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `${coupon?.url || ""}`,
                                    onClick: ()=>{
                                        window.open(`/store/${coupon.store_slug}/${coupon?.id}`);
                                    },
                                    className: `p-2 d-md-block d-none button button-${!coupon?.code ? "secondary" : "primary"}`,
                                    children: "Show Deal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `${coupon?.url || ""}`,
                                    onClick: ()=>{
                                        window.open(`/store/${coupon.store_slug}/${coupon?.id}`);
                                    },
                                    className: `p-2  d-md-none d-block button button-${!coupon?.code ? "secondary" : "primary"}`,
                                    children: !coupon?.code ? "Show Deal" : "Show Deal"
                                }),
                                coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-md-block fw-bold d-none x-small text-center pt-3",
                                    children: [
                                        "Update:  ",
                                        `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                                    ]
                                }) : ""
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `border-top w-100 d-flex justify-content-between ${padd ? "pt-2" : "py-2"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6 text-center ms-2 my-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "x-small mb-0 expiredate",
                                children: [
                                    "Expires:  ",
                                    coupon.expire_date ? ` ${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}` : "Expire Soon..."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (horizentalcoupon);


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2681);
/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const horizentalcoupon = ({ data , coupon , is_ico , img , isSingle , padd  })=>{
    const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var date = new Date(coupon.update_date);
    var edate = new Date(coupon.expire_date);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data?.Style === 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " bg-white  my-2 h-100 p-3 coupon d-flex pb-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2  my-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: img,
                        fill: true,
                        className: "h-85-px object-fit-contain position-relative"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-8 my-auto px-2 px-md-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "#",
                            className: `h3 coupon-code-card-head text-${!coupon?.code ? "secondary" : "primary"}`,
                            children: coupon?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "tr-2  d-md-block d-none fs-px",
                            dangerouslySetInnerHTML: {
                                __html: coupon.description
                            }
                        }),
                        coupon.featured === "on" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            class: "new-tag m-0   text-primary",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    class: "fas fa-star  text-primary",
                                    "aria-hidden": "true"
                                }),
                                " New Coupon"
                            ]
                        }) : "",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-md-flex justify-content-between mb-0 py-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "x-small mb-0 expiredate",
                                    children: [
                                        "Expires:",
                                        coupon.expire_date ? ` ${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}` : " Expire Soon..."
                                    ]
                                }),
                                !is_ico && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " coupon-social d-md-block d-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        class: "list-unstyled d-flex mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `http://www.facebook.com/sharer.php?u=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-facebook text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `https://wa.me/?text=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-whatsapp text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                class: "px-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `https://telegram.me/share/url?url=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: `fab fa-telegram-plane text-${!coupon?.code ? "secondary" : "primary"}`,
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " col-2 text-end m-auto my-auto ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `${coupon?.url || ""}`,
                            onClick: ()=>{
                                window.open(`/store/${slug?.query?.slug}/${coupon?.id}`);
                            },
                            className: `p-2 d-md-block fw-bold d-none button button-${!coupon?.code ? "primary" : "secondary"}`,
                            children: !coupon?.code ? "Show Deal" : "Show Code"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `${coupon?.url || ""}`,
                            onClick: ()=>{
                                window.open(`/store/${slug?.query?.slug}/${coupon?.id}`);
                            },
                            className: `p-2 fw-bold d-md-none d-block button button-${!coupon?.code ? "secondary" : "primary"}`,
                            children: !coupon?.code ? ">" : ">"
                        }),
                        coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "d-md-block fw-bold d-none x-small text-center pt-3",
                            children: [
                                "Update:  ",
                                `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                            ]
                        }) : ""
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `bg-white my-2 h-100 ${padd ? "py-2 px-3" : "p-3 pb-0"} coupon ${isSingle && "theme-2-card"}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${isSingle ? "col-md-2 col-3" : "col-2"} my-auto`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: img,
                                fill: true,
                                className: "h-85-px object-fit-contain position-relative"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `my-auto px-2 px-md-4 ${isSingle ? "col-sm-7 col-9 mt-0" : "col-8"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "#",
                                    className: `h3 text-${coupon?.code ? "secondary" : "primary"}`,
                                    children: coupon?.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `tr-2 d-md-block lh-1 ${!isSingle && "d-none"} fs-6`,
                                    dangerouslySetInnerHTML: {
                                        __html: coupon.description
                                    }
                                }),
                                coupon.featured === "on" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    class: "expiredate m-0   text-primary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: "fas fa-star  text-primary",
                                            "aria-hidden": "true"
                                        }),
                                        " New Coupon"
                                    ]
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-none justify-content-between mb-0",
                                    children: !is_ico && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " coupon-social d-none",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            class: "list-unstyled d-flex mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `http://www.facebook.com/sharer.php?u=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-facebook text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `https://wa.me/?text=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-whatsapp text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    class: "px-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: `https://telegram.me/share/url?url=${_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_1__.APP_URL}/store/${coupon.title}/${coupon.id}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: `fab fa-telegram-plane text-${!coupon?.code ? "secondary" : "primary"}`,
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        coupon?.code ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${isSingle ? "col-sm-3 col-12" : "card-footer bg-transparent col-3"}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "btncard_link position-relative ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: `${coupon?.url || ""}`,
                                            onClick: ()=>{
                                                window.open(`/store/${slug?.query?.slug}/${coupon?.id}`);
                                            },
                                            class: "btn btn-sm  why w-100 show-code-2-btn position-relative btn code-btn bg-orange text-white font-weight-bold",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Show Code"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center my-auto",
                                            children: coupon.code
                                        })
                                    ]
                                }),
                                coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-md-block fw-bold d-none x-small text-center pt-3",
                                    children: [
                                        "Update:  ",
                                        `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                                    ]
                                }) : ""
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `text-end m-auto my-auto fw-bold ${isSingle ? "col-sm-3 col-12" : "col-3"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `${coupon?.url || ""}`,
                                    onClick: ()=>{
                                        window.open(`/store/${slug?.query?.slug}/${coupon?.id}`);
                                    },
                                    className: `p-2 d-md-block d-none button button-${!coupon?.code ? "secondary" : "primary"}`,
                                    children: "Show Deal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `${coupon?.url || ""}`,
                                    onClick: ()=>{
                                        window.open(`/store/${slug?.query?.slug}/${coupon?.id}`);
                                    },
                                    className: `p-2  d-md-none d-block button button-${!coupon?.code ? "secondary" : "primary"}`,
                                    children: !coupon?.code ? "Show Deal" : "Show Deal"
                                }),
                                coupon.update_date ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-md-block fw-bold d-none x-small text-center pt-3",
                                    children: [
                                        "Update:  ",
                                        `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                                    ]
                                }) : ""
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `border-top w-100 d-flex justify-content-between ${padd ? "pt-2" : "py-2"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6 text-center ms-2 my-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "x-small mb-0 expiredate",
                                children: [
                                    "Expires:  ",
                                    coupon.expire_date ? `${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}` : " Expire Soon..."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (horizentalcoupon);


/***/ })

};
;