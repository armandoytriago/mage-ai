(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3853],{1210:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(82394),i=n(21831),o=n(82684),u=n(47999),c=n(49894),s=n(93461),d=n(57384),l=n(40881),a=n(72454),f=n(28598);function p(e,t){var n=e.children;return(0,f.jsx)(a.HS,{ref:t,children:n})}var h=o.forwardRef(p),v=n(32063),b=n(85019),m=n(82531),j=n(66166),g=n(3055),O=n(49125),k=n(91427),y=n(24141);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t,n=e.after,r=e.afterHidden,p=e.afterWidth,x=e.afterWidthOverride,_=e.before,P=e.beforeWidth,Z=e.breadcrumbs,S=e.children,I=e.errors,C=e.headerMenuItems,W=e.navigationItems,E=e.setErrors,H=e.subheaderChildren,A=e.title,M=e.uuid,D=(0,y.i)().width,N="dashboard_after_width_".concat(M),R="dashboard_before_width_".concat(M),T=(0,o.useRef)(null),Y=(0,o.useState)(x?p:(0,k.U2)(N,p)),B=Y[0],U=Y[1],z=(0,o.useState)(!1),F=z[0],G=z[1],X=(0,o.useState)(_?Math.max((0,k.U2)(R,P),13*O.iI):null),Q=X[0],q=X[1],J=(0,o.useState)(!1),K=J[0],L=J[1],V=(0,o.useState)(null)[1],$=m.ZP.projects.list({},{revalidateOnFocus:!1}).data,ee=null===$||void 0===$?void 0:$.projects,te=[];Z?te.push.apply(te,(0,i.Z)(Z)):(null===ee||void 0===ee?void 0:ee.length)>=1&&te.push.apply(te,[{label:function(){var e;return null===(e=ee[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return A}}]),(0,o.useEffect)((function(){null===T||void 0===T||!T.current||F||K||null===V||void 0===V||V(T.current.getBoundingClientRect().width)}),[F,B,K,Q,T,V,D]),(0,o.useEffect)((function(){F||(0,k.t8)(N,B)}),[r,F,B,N]),(0,o.useEffect)((function(){K||(0,k.t8)(R,Q)}),[K,Q,R]);var ne=(0,j.Z)(p);return(0,o.useEffect)((function(){x&&ne!==p&&U(p)}),[x,p,ne]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{title:A}),(0,f.jsx)(l.Z,{breadcrumbs:te,menuItems:C,project:null===ee||void 0===ee?void 0:ee[0],version:null===ee||void 0===ee||null===(t=ee[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(a.Nk,{children:[0!==(null===W||void 0===W?void 0:W.length)&&(0,f.jsx)(a.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:W,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(v.Z,{after:n,afterHeightOffset:g.Mz,afterHidden:r,afterMousedownActive:F,afterWidth:B,before:_,beforeHeightOffset:g.Mz,beforeMousedownActive:K,beforeWidth:a.k1+(_?Q:0),hideAfterCompletely:!0,leftOffset:_?a.k1:null,mainContainerRef:T,setAfterMousedownActive:G,setAfterWidth:U,setBeforeMousedownActive:L,setBeforeWidth:q,children:[H&&(0,f.jsx)(h,{children:H}),S]})})]}),I&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===E||void 0===E?void 0:E(null)},children:(0,f.jsx)(c.Z,w(w({},I),{},{onClose:function(){return null===E||void 0===E?void 0:E(null)}}))})]})}},2850:function(e,t,n){"use strict";n.d(t,{M:function(){return c},W:function(){return u}});var r=n(9518),i=n(23831),o=n(3055),u=34*n(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},79585:function(e,t,n){"use strict";n.d(t,{DQ:function(){return l},HY:function(){return u},SA:function(){return a},WH:function(){return o},eC:function(){return s},fF:function(){return c},tC:function(){return d}});var r=n(81132),i=n(9736),o="Workspace",u="Preferences",c="Git settings",s="Users",d="Account",l="Profile",a=function(e){var t=e.owner,n=e.roles,a=[{linkProps:{href:"/settings/workspace/preferences"},uuid:u}];t&&a.push({linkProps:{href:"/settings/workspace/users"},uuid:s}),(!(0,i.YB)()||n<=r.No.EDITOR)&&a.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:c});var f=[{items:a,uuid:o}];return(0,i.YB)()?f.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:l}],uuid:d}]):f}},30775:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(1210),i=n(82394),o=n(12691),u=n.n(o),c=n(10919),s=n(86673),d=n(19711),l=n(9518),a=n(23831),f=n(49125),p=n(90880),h=(f.iI,l.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),v=l.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||a.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||a.Z.background).codeTextarea,";\n  ")})),b=n(28598),m=n(82684);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.isItemSelected,n=e.sections;return(0,b.jsx)(s.Z,{py:f.Gg,children:null===n||void 0===n?void 0:n.map((function(e){var n=e.items,r=e.title,i=e.uuid;return(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(h,{children:(0,b.jsx)(d.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===n||void 0===n?void 0:n.map((function(e){var n=e.label,r=e.linkProps,o=e.onClick,s=e.uuid,d=n?n():s,l=(0,b.jsx)(v,{selected:null===t||void 0===t?void 0:t(g(g({},e),{},{uuidWorkspace:i})),children:d});return r?(0,m.createElement)(u(),g(g({},r),{},{key:s,passHref:!0}),(0,b.jsx)(c.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:l})):(0,b.jsx)(c.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:l},s)}))]},i)}))})},k=n(2850),y=n(79585),x=n(9736);var w=function(e){var t=e.after,n=e.afterHidden,i=e.children,o=e.uuidItemSelected,u=e.uuidWorkspaceSelected,c=(0,x.PR)()||{};return(0,b.jsx)(r.Z,{after:t,afterHidden:!t||n,afterWidth:t?50*f.iI:0,afterWidthOverride:!0,before:(0,b.jsx)(k.M,{children:(0,b.jsx)(O,{isItemSelected:function(e){var t=e.uuid,n=e.uuidWorkspace;return u===n&&o===t},sections:(0,y.SA)(c)})}),beforeWidth:k.W,title:"Settings",uuid:"settings/index",children:i})}},42949:function(e,t,n){"use strict";n.r(t);var r=n(77837),i=n(38860),o=n.n(i),u=n(82684),c=n(38341),s=n(67971),d=n(41788),l=n(30775),a=n(86673),f=n(11366),p=n(49125),h=n(79585),v=n(91427),b=n(28598);function m(){var e=(0,u.useState)(!!(0,v.U2)(f.kY)),t=e[0],n=e[1];return(0,b.jsx)(l.Z,{uuidItemSelected:h.HY,uuidWorkspaceSelected:h.WH,children:(0,b.jsx)(a.Z,{p:p.cd,children:(0,b.jsx)(s.Z,{alignItems:"center",children:(0,b.jsx)(c.Z,{checked:t,label:"Automatically use randomly generated name for blocks created in the future",onClick:function(){n(!t),(0,v.t8)(f.kY,!t)}})})})})}m.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,d.Z)(m)},11366:function(e,t,n){"use strict";n.d(t,{H8:function(){return i},g6:function(){return o},kY:function(){return r}});var r="automatically_name_blocks",i="pipeline_edit_before_tab_selected",o="pipeline_edit_hidden_blocks"},33323:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/preferences",function(){return n(42949)}])}},function(e){e.O(0,[3879,881,4506,9774,2888,179],(function(){return t=33323,e(e.s=t);var t}));var t=e.O();_N_E=t}]);