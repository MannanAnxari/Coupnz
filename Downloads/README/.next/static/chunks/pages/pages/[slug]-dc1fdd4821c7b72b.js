(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{9714:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/[slug]",function(){return t(9625)}])},9625:function(e,n,t){"use strict";t.r(n);var i=t(5893),l=t(2670),o=t(1838),d=t(1163),a=t(7294);let s=e=>{var n,t,s;let{metas:u,setMetas:c}=e,[v,r]=(0,a.useState)({}),[_,h]=(0,a.useState)(!0),f=(0,d.useRouter)(),m=null==f?void 0:null===(n=f.query)||void 0===n?void 0:n.slug;return((0,a.useEffect)(()=>{h(!0),fetch("".concat(o.APP_URL,"api/pages?key=").concat(o.APP_KEY,"&slug=").concat(m)).then(e=>e.json()).then(e=>{var n,t,i,l,o;r(e),h(!1),console.log(e),c({...u,title:"".concat((null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.name)?null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.name:m),metaTitle:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.seo_title,metaDescription:null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.seo_description,metaKeyword:null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.meta_key})}).catch(e=>{h(!1)})},[m]),_)?(0,i.jsx)("div",{className:"bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1",children:(0,i.jsx)(l.Z,{})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"container my-5",children:[(0,i.jsx)("h2",{className:"my-3 fw-bolder",children:null==v?void 0:null===(t=v.data)||void 0===t?void 0:t.name}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:null==v?void 0:null===(s=v.data)||void 0===s?void 0:s.description}})]})})};n.default=s}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9714)}),_N_E=e.O()}]);