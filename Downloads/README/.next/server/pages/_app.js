(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,367];
exports.modules = {

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-white.8bcb980c.png","height":363,"width":1050,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXklEQVR42mP49++fDRAr/Pv/T+z310/K////5304LWTCk8VFjSA2A1CyGIjbgXj+v79/ZwMFmx8vzF/y5d6lCiB7IkgBOxCzArHYn5/feYCY4X6/Y8jtCgb22xUMDABWs0XPO7YhoQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.c2d19fe3.png","height":81,"width":568,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nGPMWHdv0dv71+atLm+7LzdrvuiPP384GBgZvzFAAB8ALXoNyZuolTMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 9878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Footer1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/footerlogo.png
/* harmony default export */ const footerlogo = ({"src":"/_next/static/media/footerlogo.6609b121.png","height":80,"width":567,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nGN88/nnUjZmptm8nCz3////L8bAwMABxN+A+D8Q8wMA2F0KPRUW58gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Footer1.js





const Footer1 = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid bg-footer  footer-1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-3 my-auto text-center text-md-start",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: data?.url + "/" + data?.logo?.header || footerlogo,
                                    fill: true,
                                    className: "footer1-logo w-40 position-relative"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-3 text-white text-center my-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "my-auto text-footer ",
                            children: " All Right Reserved"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-6 footer-link text-center my-auto",
                        children: [
                            data?.pages?.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/pages/${item.slug}`,
                                    children: item.name
                                });
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/all-stores",
                                children: "stores"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/category",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    class: "fab fa-twitter",
                                    "aria-hidden": "true"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    class: "fab fa-pinterest",
                                    "aria-hidden": "true"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    class: "fab fa-facebook",
                                    "aria-hidden": "true"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Footer1 = (Footer1);


/***/ }),

/***/ 7314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2053);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_settings_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1274);





const Footer2 = ({ season , country , data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-secondary",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container py-4 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    className: "footer-2-logo",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: data?.url + "/" + data?.logo?.header || _public_assets_logo_white_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                        alt: "",
                                        className: "position-relative my-1 header-logo w-100",
                                        style: {
                                            objectFit: "contain"
                                        },
                                        fill: true
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-white",
                                    children: _public_settings_config__WEBPACK_IMPORTED_MODULE_1__.FOOTER_ABOUT
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "footer-link footer2-icon  p-0 text-white pt-1 d-flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-pinterest-p"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-twitter "
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-8 row ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-4 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "my-auto text-white fw-bolder",
                                            children: "About US"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "footer-link p-0 text-white pt-3",
                                            children: [
                                                data?.pages?.map((item)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "mb-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            className: "ms-0",
                                                            href: `/pages/${item.slug}`,
                                                            children: item.name
                                                        })
                                                    });
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "ms-0",
                                                        href: "/contact",
                                                        children: "Contact Us"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-4 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "my-auto text-white fw-bolder",
                                            children: "Shop By Country"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "footer-link p-0 text-white pt-3",
                                            children: country?.slice(0, 6).map((countrydd)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "ms-0",
                                                        href: `/country/${countrydd.slug}`,
                                                        children: countrydd.name
                                                    })
                                                });
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-4 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "my-auto text-white fw-bolder",
                                            children: "What's Trending"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "footer-link p-0 text-white pt-3",
                                            children: season?.data?.slice(0, 6).map((seasondd)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "ms-0",
                                                        href: `/season/${seasondd.slug}`,
                                                        children: seasondd.name
                                                    })
                                                });
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer2);


/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_country_slug___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2988);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2053);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_settings_config__WEBPACK_IMPORTED_MODULE_7__);








const Header1 = ({ data , category , season , coupons , country  })=>{
    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    // const category = [
    //     'Apparel and Accessories', 'Arts and Entertainment ', 'Business'
    // ]
    // const coupons = [
    //     'Coupon Code ', 'Free Gift', 'Discount'
    // ]
    // const season = [
    //     'Back to school ', 'Cyber Monday', 'Discount'
    // ]
    // const country = [
    //     'United State ', 'United Kingdom', 'Canada'
    // ]
    // console.log(data); 
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleSearch = (e)=>{
        setQuery(e);
        if (e.length > 1) {
            setIsActive(true);
            setIsLoading(true);
            fetch(`${_public_settings_config__WEBPACK_IMPORTED_MODULE_7__.APP_URL}api/store?key=${_public_settings_config__WEBPACK_IMPORTED_MODULE_7__.APP_KEY}&search=${e}`).then((res)=>res.json()).then((results)=>{
                let query = [];
                results?.data?.map((item)=>query.push({
                        name: item.name,
                        slug: item.slug
                    }));
                setIsLoading(false);
                setSearchQuery(query);
            });
        } else {
            setIsLoading(false);
            setIsActive(false);
            setSearchQuery([]);
        }
    };
    const closeMenu = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "navbar navbar-expand-lg bg-header",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "navbar-brand col-md-2 col-4",
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: data?.url + "/" + data?.logo?.header || _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                            alt: "",
                            className: "position-relative my-1 header-logo w-100",
                            fill: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "navbar-toggler shadow-none ",
                        ref: closeMenu,
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "36",
                            height: "36",
                            fill: "currentColor",
                            class: "bi bi-justify text-header",
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "navbar-nav ms-2 mb-2 mb-lg-0 nav-css ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "nav-link active text-header",
                                            href: "/all-stores",
                                            children: "Stores"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "nav-link dropdown-toggle  text-header",
                                                href: "/category",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "dropdown-menu rounded-0",
                                                children: category?.slice(0, 10).map((cat)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            className: "dropdown-item dropdown-item-hov ",
                                                            href: `/category/${cat.slug}`,
                                                            children: cat.name
                                                        })
                                                    });
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "nav-link dropdown-toggle text-header",
                                                href: "#",
                                                role: "button",
                                                "data-bs-toggle": "dropdown",
                                                "aria-expanded": "false",
                                                children: "Coupons"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "dropdown-menu rounded-0",
                                                children: coupons?.slice(0, 10).map((coupondd)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            className: "dropdown-item dropdown-item-hov",
                                                            href: `/coupon/${coupondd.slug}`,
                                                            children: coupondd.name
                                                        })
                                                    });
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "nav-link dropdown-toggle text-header",
                                                href: "#",
                                                role: "button",
                                                "data-bs-toggle": "dropdown",
                                                "aria-expanded": "false",
                                                children: "Season"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "dropdown-menu rounded-0",
                                                children: season?.slice(0, 10).map((seasondd)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            className: "dropdown-item dropdown-item-hov",
                                                            href: `/season/${seasondd.slug}`,
                                                            children: seasondd.name
                                                        })
                                                    });
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "nav-item dropdown",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                className: "nav-link dropdown-toggle text-header",
                                                href: "#",
                                                role: "button",
                                                "data-bs-toggle": "dropdown",
                                                "aria-expanded": "false",
                                                children: "Country"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "dropdown-menu rounded-0",
                                                children: country?.slice(0, 10).map((countrydd)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            className: "dropdown-item dropdown-item-hov",
                                                            href: `/country/${countrydd.slug}`,
                                                            children: countrydd.name
                                                        })
                                                    });
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item dropdown memorial-btn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `${data.header.button_url}`,
                                            className: "button header-btn-bg header-btn-text",
                                            children: data?.header?.button_text
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "d-flex mx-auto position-relative col-md-3 flex-column",
                                role: "search",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-control me-2 rounded-0 ",
                                        type: "search",
                                        placeholder: "Search...",
                                        "aria-label": "Search",
                                        onChange: (e)=>handleSearch(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-100 z-2 top-100 pl-0 position-absolute header-search",
                                        children: isActive && isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "list-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                class: "list-group-item list-group-item-action z-index-2  rounded-0",
                                                children: "Loading..."
                                            })
                                        }) : searchQuery.length ? searchQuery.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "list-group",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: `/store/${item.slug}`,
                                                    class: "list-group-item list-group-item-action rounded-0 ",
                                                    children: item.name
                                                })
                                            });
                                        }) : query.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "list-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                class: "list-group-item list-group-item-action rounded-0",
                                                children: "No Result Found"
                                            })
                                        }) : ""
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header1);


/***/ }),

/***/ 6891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_logo_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1274);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2053);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_settings_config__WEBPACK_IMPORTED_MODULE_5__);






const Header2 = ({ data , category , season , coupons , country  })=>{
    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleSearch = (e)=>{
        setQuery(e);
        if (e.length > 1) {
            setIsActive(true);
            setIsLoading(true);
            fetch(`${_public_settings_config__WEBPACK_IMPORTED_MODULE_5__.APP_URL}api/store?key=${_public_settings_config__WEBPACK_IMPORTED_MODULE_5__.APP_KEY}&search=${e}`).then((res)=>res.json()).then((results)=>{
                let query = [];
                results?.data?.map((item)=>query.push({
                        name: item.name,
                        slug: item.slug
                    }));
                setIsLoading(false);
                setSearchQuery(query);
            });
        } else {
            setIsLoading(false);
            setIsActive(false);
            setSearchQuery([]);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "navbar navbar-expand-lg bg-header px-3 py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "navbar-brand col-md-2 col-4",
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: data?.url + "/" + data?.logo?.header || _public_assets_logo_white_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                alt: "",
                                className: "position-relative my-1 header-logo w-100",
                                fill: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "navbar-toggler shadow-none",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "36",
                                height: "36",
                                fill: "currentColor",
                                class: "bi bi-justify text-header",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    "fill-rule": "evenodd",
                                    d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "collapse navbar-collapse w-75 mt-2 h2 position-relative",
                            id: "navbarSupportedContent",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "mx-auto mx-md-0 d-flex w-75 rounded-2",
                                role: "search",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "form-control  rounded-1",
                                        type: "search",
                                        placeholder: "Search 5000+ Brands Coupons & Promo Codes",
                                        "aria-label": "Search",
                                        onChange: (e)=>handleSearch(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-75 top-100 pl-0 z-2 position-absolute header-search z-2",
                                        children: isActive && isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "list-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                class: "list-group-item list-group-item-action rounded-0 z-2",
                                                children: "Loading..."
                                            })
                                        }) : searchQuery.length ? searchQuery.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "list-group",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: `/store/${item.slug}`,
                                                    class: "list-group-item list-group-item-action rounded-0",
                                                    children: item.name
                                                })
                                            });
                                        }) : query.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "list-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                class: "list-group-item list-group-item-action rounded-0",
                                                children: "No Result Found"
                                            })
                                        }) : ""
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "navbar navbar-expand-lg py-0 bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "navbar-nav mb-2 mb-lg-0 nav-css",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "nav-link",
                                        href: "/all-stores",
                                        children: "All Stores"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/category",
                                            className: "nav-link dropdown-toggle",
                                            children: "Category"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "dropdown-menu rounded-0 header-dd-2",
                                            children: category?.slice(0, 10).map((cat)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        className: "dropdown-item dropdown-item-hov ",
                                                        href: `/category/${cat.slug}`,
                                                        children: cat.name
                                                    })
                                                });
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "nav-link dropdown-toggle",
                                            href: "#",
                                            role: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: "Coupon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "dropdown-menu rounded-0 header-dd-2",
                                            children: coupons?.slice(0, 10).map((coupondd)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        className: "dropdown-item dropdown-item-hov",
                                                        href: `/coupon/${coupondd.slug}`,
                                                        children: coupondd.name
                                                    })
                                                });
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "nav-link dropdown-toggle",
                                            href: "#",
                                            role: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: "Seasons"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "dropdown-menu  rounded-0 header-dd-2",
                                            children: season?.slice(0, 10).map((seasondd)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        className: "dropdown-item dropdown-item-hov",
                                                        href: `/season/${seasondd.slug}`,
                                                        children: seasondd.name
                                                    })
                                                });
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item dropdown memorial-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: `${data.header.button_url}`,
                                        className: "button header-btn-bg header-btn-text",
                                        children: data?.header?.button_text
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header2);


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Header1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5079);
/* harmony import */ var _components_layout_Header2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6891);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8321);
/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1465);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1446);
/* harmony import */ var _components_Popular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84);
/* harmony import */ var _components_layout_Footer1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9878);
/* harmony import */ var _components_layout_Footer2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7314);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2053);
/* harmony import */ var _public_settings_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_settings_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2670);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_15__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const Toaster = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "react-hot-toast"
        ]
    },
    ssr: false
});
function App({ Component , pageProps  }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
    const [category, setcategory] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const [season, setseason] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const [coupons, setcoupons] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const [country, setcountry] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
    const [metas, setMetas] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)({
        title: data?.siteTitle ? data?.siteTitle : "Home",
        metaTitle: data?.siteTitle ? data?.siteTitle : "",
        metaDescription: `${data?.meta ? data?.meta?.description : ""}`,
        metaKeyword: `${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`
    });
    (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        async function fetchData() {
            const response = await fetch("/settings/data.json");
            const theme = await response.json();
            setData(theme);
            setcategory(theme?.category);
            setcoupons(theme?.type);
            setseason(theme?.season);
            setcountry(theme?.country);
            setLoading(false);
        }
        fetchData();
    }, []);
    console.log(data?.header?.background);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: `${data?.siteTitle ? data?.siteTitle : "Home"}`,
        metaTitle: `${data?.siteTitle ? data?.siteTitle : "Home"}`,
        metaDescription: `${data?.meta ? data?.meta?.description : "More Coupon Codes"}`,
        logo: "",
        metaKeywords: `${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-white vh-100 vw-100 d-flex justify-content-center align-items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        })
    });
    if (err) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center error my-auto vw-100 vh-100 d-flex justify-content-center align-items-center",
        children: "Something went wrong!"
    });
    else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                [
                    "877b7e191979dc3f",
                    [
                        data?.color?.primary || "green",
                        data?.color?.secondary || "#1b96b8",
                        data?.header?.background || "blue",
                        data?.header?.color || "white",
                        data?.header?.button_background || "white",
                        data?.header?.button_color || "white",
                        data?.footer?.background || "blue",
                        data?.footer?.color || "white"
                    ]
                ]
            ]) + " " + `_element ${_public_settings_config__WEBPACK_IMPORTED_MODULE_13__.CONTAINER_TYPE === "wide" ? "wide" : "none-wide"}`,
            children: [
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "877b7e191979dc3f",
                    dynamic: [
                        data?.color?.primary || "green",
                        data?.color?.secondary || "#1b96b8",
                        data?.header?.background || "blue",
                        data?.header?.color || "white",
                        data?.header?.button_background || "white",
                        data?.header?.button_color || "white",
                        data?.footer?.background || "blue",
                        data?.footer?.color || "white"
                    ],
                    children: `:root{--primary:${data?.color?.primary || "green"};--secondary:${data?.color?.secondary || "#1b96b8"};--header:${data?.header?.background || "blue"};--header-text:${data?.header?.color || "white"};--header-btn-bg:${data?.header?.button_background || "white"};--header-btn-text:${data?.header?.button_color || "white"};--footer-bg:${data?.footer?.background || "blue"};--footer-text:${data?.footer?.color || "white"}}`
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    title: `${metas.title}`,
                    metaTitle: `${metas.metaTitle}`,
                    metaDescription: metas.metaDescription,
                    logo: "",
                    metaKeywords: metas.metaKeyword,
                    children: [
                        data.Style === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Header1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            data: data,
                            category: category,
                            season: season,
                            coupons: coupons,
                            country: country
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Header2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            data: data,
                            category: category,
                            season: season,
                            coupons: coupons,
                            country: country
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "877b7e191979dc3f",
                                    [
                                        data?.color?.primary || "green",
                                        data?.color?.secondary || "#1b96b8",
                                        data?.header?.background || "blue",
                                        data?.header?.color || "white",
                                        data?.header?.button_background || "white",
                                        data?.header?.button_color || "white",
                                        data?.footer?.background || "blue",
                                        data?.footer?.color || "white"
                                    ]
                                ]
                            ]) + " " + `min-vh-90`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps,
                                data: data,
                                metas: metas,
                                setMetas: setMetas,
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "877b7e191979dc3f",
                                        [
                                            data?.color?.primary || "green",
                                            data?.color?.secondary || "#1b96b8",
                                            data?.header?.background || "blue",
                                            data?.header?.color || "white",
                                            data?.header?.button_background || "white",
                                            data?.header?.button_color || "white",
                                            data?.footer?.background || "blue",
                                            data?.footer?.color || "white"
                                        ]
                                    ]
                                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toaster, {
                            position: "top-right"
                        }),
                        data.Style === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer1__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            data: data,
                            category: category,
                            season: season,
                            coupons: coupons,
                            country: country
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            data: data,
                            category: category,
                            season: season,
                            coupons: coupons,
                            country: country
                        })
                    ]
                })
            ]
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,459,664,443,675,298,152,196,321,850,498,237,988], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();