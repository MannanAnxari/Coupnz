(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{1571:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return n(8785)}])},8726:function(e,s,n){"use strict";var o=n(5893);n(2053);var a=n(1664),c=n.n(a);n(7294),n(2670);let t=e=>{var s;let{styledata:n}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"container pb-3 py-md-5",children:[(0,o.jsxs)("h3",{className:"fw-500 head1 ",children:[" ",1===n?"CODES FOR YOUR FAVOURITE BRANDS":"Shop Your Desired Categories"," "]}),(0,o.jsx)("div",{className:"row bg-white py-1 ",children:null==n?void 0:null===(s=n.brands)||void 0===s?void 0:s.map(e=>(0,o.jsxs)("div",{className:"col-6 col-md-3 my-2 fav-brand-coupon",children:[" ",(0,o.jsxs)(c(),{href:"/store/".concat(e.slug),children:[" ",e.name," "]}),"  "]}))})]})})};s.Z=t},8785:function(e,s,n){"use strict";n.r(s);var o=n(5893),a=n(6498),c=n(8726),t=n(2670),l=n(2053),i=n(1664),r=n.n(i),d=n(1163),u=n(7294);let m=e=>{var s,n;let{data:i,metas:m,setMetas:h}=e,v=(0,d.useRouter)(),x=null==v?void 0:null===(s=v.query)||void 0===s?void 0:s.slug,[j,p]=(0,u.useState)({}),[f,N]=(0,u.useState)(null),[g,_]=(0,u.useState)(!0);return((0,u.useEffect)(()=>{_(!0),fetch("".concat(l.APP_URL,"api/store?key=").concat(l.APP_KEY,"&category=").concat(x)).then(e=>e.json()).then(e=>{_(!1),p(e),h({...m,title:"".concat((null==e?void 0:e.name)?(null==e?void 0:e.name)+" Coupons & Promo Codes":"Coupon & Promo Codes")}),!1===e.success?N(null==e?void 0:e.message):N(null)}).catch(e=>{N("No Season Found!"),_(!1)})},[x]),g)?(0,o.jsx)("div",{className:"bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1",children:(0,o.jsx)(t.Z,{})}):(0,o.jsxs)("div",{className:"min-vh-100",children:[f?(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"container my-3",children:[(0,o.jsxs)("h2",{children:[" ",j.name," Coupons & Promo Codes"]}),(0,o.jsx)("p",{className:"text-center my-auto py-5",children:f})]})}):(0,o.jsx)("div",{className:"container my-3",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("h2",{children:[" ",j.name," Coupons & Promo Codes"]}),null==j?void 0:null===(n=j.data)||void 0===n?void 0:n.map(e=>(0,o.jsx)("div",{className:"cat-card col-md-4",children:(0,o.jsxs)(r(),{href:"/store/".concat(e.slug),children:[" ",(0,o.jsx)(a.Z,{item:e,img:j.url,data:i})]})}))]})}),1===i?(0,o.jsx)(c.Z,{}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"container bg-white p-2 mb-2",children:(0,o.jsx)("p",{className:"mb-0",dangerouslySetInnerHTML:{__html:j.description}})})})]})};s.default=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1571)}),_N_E=e.O()}]);