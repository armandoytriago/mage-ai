(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6308],{63153:function(e,n,t){"use strict";t.d(n,{Z3:function(){return r},ms:function(){return i},s7:function(){return o}});var r=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",disabled:!1,label:"Email",required:!0,type:"email",uuid:"email"}],o="password_current",i=[{autoComplete:"current-password",label:"Current password",type:"password",uuid:o},{autoComplete:"new-password",label:"New password",type:"password",uuid:"password"},{autoComplete:"new-password",label:"Confirm new password",type:"password",uuid:"password_confirmation"}]},20582:function(e,n,t){"use strict";var r=t(82394),o=t(21831),i=t(75582),u=t(21764),c=t(82684),d=t(83455),s=t(60328),a=t(67971),l=t(87372),f=t(55378),p=t(86673),h=t(82944),m=t(81132),v=t(82531),b=t(66166),g=t(63153),w=t(7715),x=t(96510),Z=t(28598);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.disabledFields,t=e.hideFields,j=e.newUser,_=e.onDeleteSuccess,O=e.onSaveSuccess,P=e.showDelete,C=e.title,k=e.user,I=(0,c.useState)(!0),N=I[0],S=I[1],E=(0,c.useState)({}),W=E[0],T=E[1],D=(0,c.useState)(null),H=D[0],R=D[1],V=(0,d.Db)(j?v.ZP.users.useCreate():v.ZP.users.useUpdate(null===k||void 0===k?void 0:k.id),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(e){var n=e.user,t=(0,w.GL)(n,g.Z3.concat(g.ms).map((function(e){return e.uuid})));R(t),u.Am.success(j?"New user created successfully.":"User profile successfully updated.",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),null===O||void 0===O||O(t)},onErrorCallback:function(e){var n=e.error,t=n.exception,r=n.message,o=n.type;u.Am.error(t||r,{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:o})}})}}),q=(0,i.Z)(V,2),F=q[0],G=q[1].isLoading,M=(0,d.Db)(v.ZP.users.useDelete(null===k||void 0===k?void 0:k.id),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(){null===_||void 0===_||_()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;alert(r),console.log(t)}})}}),A=(0,i.Z)(M,2),B=A[0],L=A[1].isLoading,U=t?(0,o.Z)(t):[];j&&U.push(g.s7);var Q=!U||!U.includes(g.s7),X=(0,b.Z)(k);return(0,c.useEffect)((function(){!k||H&&(null===X||void 0===X?void 0:X.id)===(null===k||void 0===k?void 0:k.id)||R((0,w.GL)(k,g.Z3.concat(g.ms).map((function(e){return e.uuid})))),null!==H&&void 0!==H&&H.password||null!==H&&void 0!==H&&H.password_confirmation?(null===H||void 0===H?void 0:H.password)!==(null===H||void 0===H?void 0:H.password_confirmation)?T({password_confirmation:"Password confirmation does not match."}):!Q||null!==H&&void 0!==H&&H.password_current?T(null):T({password_current:"This field is required."}):null!==H&&void 0!==H&&H.password_current&&Q?null!==H&&void 0!==H&&H.password&&null!==H&&void 0!==H&&H.password_confirmation?T(null):T({password:"This field is required.",password_confirmation:"This field is required."}):null!==H&&void 0!==H&&H.password_current||null!==H&&void 0!==H&&H.password||null!==H&&void 0!==H&&H.password_confirmation||T(null)}),[H,Q,k,X]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.Z,{children:C||"Edit profile"}),(0,Z.jsxs)("form",{children:[g.Z3.filter((function(e){var n=e.uuid;return!U||!U.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,o=e.label,i=e.required,u=e.type,c=e.uuid;return(0,Z.jsx)(p.Z,{mt:2,children:(0,Z.jsx)(h.Z,{autoComplete:n,disabled:t&&!j,label:o,onChange:function(e){S(!1),R((function(n){return y(y({},n),{},(0,r.Z)({},c,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:u,value:(null===H||void 0===H?void 0:H[c])||""})},c)})),!(null!==k&&void 0!==k&&k.owner)&&(0,Z.jsx)(p.Z,{mt:2,children:(0,Z.jsxs)(f.Z,{disabled:null===n||void 0===n?void 0:n.includes("roles"),label:"Roles",onChange:function(e){S(!1),e.target.value===m.No.OWNER?R((function(e){return y(y({},e),{},{owner:!0,roles:null})})):R((function(n){return y(y({},n),{},{owner:!1,roles:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null!==H&&void 0!==H&&H.owner?m.No.OWNER:null===H||void 0===H?void 0:H.roles)||(null===k||void 0===k?void 0:k.roles)||"",children:[(0,Z.jsx)("option",{value:""}),m.K$.map((function(e){return(0,Z.jsx)("option",{value:e,children:m.gG[e]},e)})),!j&&(0,Z.jsx)("option",{value:m.No.OWNER,children:m.gG[m.No.OWNER]},"owner_role")]})}),(0,Z.jsxs)(p.Z,{mt:5,children:[(0,Z.jsx)(l.Z,{children:j?"Password":"Change password"}),g.ms.filter((function(e){var n=e.uuid;return!U||!U.includes(n)})).map((function(e){var n=e.autoComplete,t=e.disabled,o=e.label,i=e.required,u=e.type,c=e.uuid;return(0,Z.jsx)(p.Z,{mt:2,children:(0,Z.jsx)(h.Z,{autoComplete:n,disabled:t,label:o,meta:{error:null===W||void 0===W?void 0:W[c],touched:!(null===W||void 0===W||!W[c])},onChange:function(e){S(!1),R((function(n){return y(y({},n),{},(0,r.Z)({},c,e.target.value))}))},primary:!0,required:i,setContentOnMount:!0,type:u,value:(null===H||void 0===H?void 0:H[c])||""})},c)}))]}),(0,Z.jsx)(p.Z,{mt:5,children:(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(s.Z,{disabled:N||W&&!(0,w.Qr)(W),loading:G,onClick:function(){return F({user:H})},primary:!0,children:j?"Create new user":"Update user profile"}),P&&(0,Z.jsx)(p.Z,{ml:1,children:(0,Z.jsx)(s.Z,{danger:!0,loading:L,onClick:function(){window.confirm("Are you sure you want to delete ".concat(H.username||H.email,"?"))&&B()},children:"Delete user"})})]})})]})]})}},29237:function(e,n,t){"use strict";var r=t(9518),o=t(67971),i=t(86673),u=t(19711),c=t(23831),d=t(73942),s=t(37391),a=t(49125),l=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*a.iI,1.5*a.iI,1.5*a.iI),p=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],d.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||c.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||c.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||c.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],d.n_,d.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||c.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||c.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),m=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*a.iI,s.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*a.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),v=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],d.M8,d.YF,1.75*a.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,c=e.contentContainerRef,d=e.dark,s=e.footer,a=e.fullHeight,f=void 0===a||a,b=e.fullWidth,g=void 0===b||b,w=e.header,x=e.headerHeight,Z=e.headerIcon,j=e.headerPaddingVertical,y=e.headerTitle,_=e.maxHeight,O=e.maxWidth,P=e.minWidth,C=e.noPadding,k=e.overflowVisible,I=e.subtitle,N=e.success;return(0,l.jsxs)(p,{borderless:n,dark:d,fullHeight:f,fullWidth:g,maxHeight:_,maxWidth:O,minWidth:P,overflowVisible:k,ref:r,success:N,children:[(w||y)&&(0,l.jsxs)(h,{headerPaddingVertical:j,height:x,children:[w&&w,y&&(0,l.jsx)(o.Z,{alignItems:"center",justifyContent:"space-between",children:(0,l.jsxs)(o.Z,{alignItems:"center",children:[Z&&Z,(0,l.jsx)(i.Z,{ml:Z?1:0,children:(0,l.jsx)(u.ZP,{bold:!0,default:!0,children:y})})]})})]}),(0,l.jsxs)(m,{maxHeight:_,noPadding:C,overflowVisible:k,ref:c,children:[I&&(0,l.jsx)(i.Z,{mb:2,children:(0,l.jsx)(u.ZP,{default:!0,children:I})}),t]}),s&&(0,l.jsx)(v,{children:s})]})}},96283:function(e,n,t){"use strict";t.r(n);var r=t(77837),o=t(38860),i=t.n(o),u=t(29237),c=t(41788),d=t(30775),s=t(86673),a=t(20582),l=t(82531),f=t(49125),p=t(79585),h=t(9736),m=t(28598);function v(){var e=((0,h.PR)()||{}).id,n=l.ZP.users.detail(e),t=n.data,r=n.mutate,o=null===t||void 0===t?void 0:t.user;return(0,m.jsx)(d.Z,{uuidItemSelected:p.DQ,uuidWorkspaceSelected:p.tC,children:(0,m.jsx)(s.Z,{p:f.cd,children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(a.Z,{disabledFields:["roles"],onSaveSuccess:r,user:o})})})})}v.getInitialProps=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,c.Z)(v)},10736:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account/profile",function(){return t(96283)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return o}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(12539),o=t(80022);function i(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[844,881,1005,3077,9774,2888,179],(function(){return n=10736,e(e.s=n);var n}));var n=e.O();_N_E=n}]);