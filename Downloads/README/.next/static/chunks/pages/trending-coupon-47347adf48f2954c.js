(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{2357:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trending-coupon",function(){return s(3421)}])},6639:function(e,t,s){"use strict";var n=s(5893);s(1838);var o=s(5675),c=s.n(o),r=s(1664),a=s.n(r);s(7294);let l=e=>{let{data:t,item:s,img:o}=e;return(0,n.jsx)(n.Fragment,{children:1===t.Style?(0,n.jsxs)("div",{className:"card card-hover rounded-0 new-coupon",children:[(0,n.jsx)("div",{className:"card-img new-coupon-img",children:(0,n.jsx)(c(),{src:"".concat(o?o+"/"+(null==s?void 0:s.store_logo):""),alt:s.store_name,fill:!0,className:"w-100 position-relative p-4"})}),(0,n.jsx)("div",{className:"card-body text-center text-secondary",children:(0,n.jsx)("h5",{className:"ship-hover",children:s.title})}),(0,n.jsxs)("div",{className:"card-footer bg-transparent text-center ",children:[(0,n.jsx)(a(),{href:"/store/".concat(s.store_slug),className:"text-black new-coupon-title",children:s.store_name}),(0,n.jsx)("div",{children:(0,n.jsx)(a(),{href:"".concat(s.url),onClick:()=>{window.open("/store/".concat(s.store_slug,"/").concat(s.id))},className:"coupon-btn py-1 px-0 col-6 mt-1  button button-".concat("Coupon Code"===s.type?"secondary":"primary"),children:"Coupon Code"===s.type?"Show Code":"Show Deal"})})]})]}):(0,n.jsxs)("div",{class:"card position-relative border-0 h-100  ",children:[(0,n.jsx)("div",{className:"img-overlay  ",children:(0,n.jsx)(c(),{src:"".concat(o?o+"/"+(null==s?void 0:s.store_logo):""),alt:s.store_name,fill:!0,className:"w-100 position-relative p-4"})}),(0,n.jsxs)("div",{class:"card-body",children:[(0,n.jsxs)(a(),{href:"/store/".concat(s.store_slug),children:[" ",(0,n.jsx)("h5",{class:"card-title text-primary fw-bold",children:s.store_name})]}),(0,n.jsx)("h3",{class:"card-text text-secondary fw-bold",dangerouslySetInnerHTML:{__html:s.title}}),(0,n.jsx)("p",{class:"card-text",dangerouslySetInnerHTML:{__html:s.description}}),(0,n.jsx)("h6",{class:"card-text fw-bold",children:s.offertime})]}),(0,n.jsx)("div",{className:"card-footer bg-transparent ",children:"showdeal"===s.type?(0,n.jsx)(a(),{href:"".concat(s.url),className:"button button-secondary w-100 rounded-1 px-1 py-2",children:"Show Deal"}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{class:"btncard_link position-relative ",children:[(0,n.jsx)(a(),{href:"".concat(s.url),class:"btn btn-sm  why w-100 show-code-2-btn position-relative bg-orange btn code-btn  text-white font-weight-bold",children:(0,n.jsx)("span",{children:"Show Code"})}),(0,n.jsx)("div",{class:"show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto",children:s.code})]})})})]})})};t.Z=l},3421:function(e,t,s){"use strict";s.r(t);var n=s(5893),o=s(2670),c=s(1838),r=s(7294),a=s(6639);let l=e=>{var t;let{data:s}=e,[l,i]=(0,r.useState)({}),[d,h]=(0,r.useState)(!1),[u,x]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{fetch("".concat(c.APP_URL,"api/coupon?key=").concat(c.APP_KEY,"&graph=tranding&ttype=coupon-type(slug)")).then(e=>e.json()).then(e=>{i(e),x(!1)}).catch(e=>{x(!1),h(!0)})},[]),u)?(0,n.jsx)("div",{className:"bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1",children:(0,n.jsx)(o.Z,{})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"container my-5",children:[(0,n.jsx)("h3",{className:"head1 pt-5",children:"Most Trending Coupons"}),(0,n.jsx)("div",{className:"row ",children:null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.map(e=>(0,n.jsx)("div",{className:" col-12 col-sm-6 col-md-3 my-1 p-1",children:(0,n.jsx)(a.Z,{item:e,data:s,img:null==l?void 0:l.url})}))})]})})};t.default=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2357)}),_N_E=e.O()}]);