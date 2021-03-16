(this["webpackJsonpshopping-tracking-list"]=this["webpackJsonpshopping-tracking-list"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),r=a.n(c),i=a(14),s=a(8),o=a(156),l=a(159),d=a(161),j=a(178),u=a(162),b=a(30),h=a(70),p=a(42),m=a.n(p),O=a(180),g=a(2),x=Object(n.createContext)(),f="addItem",y="archiveItem",v="reactiveItem",I="switchCurrency",w="updateConverter",C="error";function N(e,t){return new Date(e.dest).getTime()-new Date(t.dest).getTime()}var S=function(e,t){var a,n;switch(t.type){case f:var c=Object(O.a)(),r=Object(s.a)(Object(s.a)({},t.payload.item),{},{id:c}),i=e.deliveryItems;return a=[].concat(Object(h.a)(i),[r]).sort(N),m.a.set("deliveryItems",JSON.stringify(a)),Object(s.a)(Object(s.a)({},e),{},{deliveryItems:a});case y:var o=e.deliveryItems.findIndex((function(e){return e.id===t.payload.id})),l=e.deliveryItems.splice(o,1)[0];return n=[].concat(Object(h.a)(e.archiveItems),[l]),m.a.set("deliveryItems",JSON.stringify(e.deliveryItems)),m.a.set("archiveItems",JSON.stringify(n)),Object(s.a)(Object(s.a)({},e),{},{archiveItems:n});case v:var d=e.archiveItems.findIndex((function(e){return e.id===t.payload.id})),j=e.archiveItems.splice(d,1)[0];return a=[].concat(Object(h.a)(e.deliveryItems),[j]).sort(N),m.a.set("deliveryItems",JSON.stringify(a)),m.a.set("archiveItems",JSON.stringify(e.archiveItems)),Object(s.a)(Object(s.a)({},e),{},{deliveryItems:a});case w:if(!isNaN(t.payload.newValue))return Object(s.a)(Object(s.a)({},e),{},{converter:t.payload.newValue});break;case I:if(["USD","ILS"].includes(t.payload.newValue))return Object(s.a)(Object(s.a)({},e),{},{currency:t.payload.newValue});break;case C:return Object(s.a)(Object(s.a)({},e),{},{error:t.payload})}return Object(s.a)({},e)};function k(e){var t=e.children,a=Object(n.useReducer)(S,function(){var e=m.a.get("deliveryItems"),t=m.a.get("archiveItems");return{error:[!1,""],deliveryItems:e?JSON.parse(e):[],archiveItems:t?JSON.parse(t):[],currency:"USD",converter:0}}());return Object(g.jsx)(x.Provider,{value:a,children:t})}function D(){return Object(n.useContext)(x)}function L(e){return{id:"standard-tab-".concat(e),"aria-controls":"standard-tabpanel-".concat(e)}}var P=Object(o.a)((function(e){return{appBar:{width:"100%",background:"linear-gradient(to left, ".concat(e.palette.primary.light,", ").concat(e.palette.secondary.main,")"),display:"flex",color:"white",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbar:{alignItems:"center",justifyContent:"space-between"},currencySwitch:{minWidth:"100px"},currencyTab:{minWidth:"50%"}}}));function T(){var e=P(),t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)("USD"),h=Object(i.a)(o,2),p=h[0],m=h[1],O=D(),x=Object(i.a)(O,2),f=x[0],y=x[1],v=Object(n.useRef)(0);Object(n.useEffect)((function(){m(f.currency);var e=function(){fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).then((function(e){y({type:"updateConverter",payload:{newValue:e.rates.ILS}})})).catch((function(e){return y({type:"error",payload:[!0,"Currency rates API is no accessible, trying to re-connect..."]})}))};return e(),v.current=setInterval((function(){e()}),1e4),function(){clearInterval(v.current)}}),[y,f.currency]);var I=function(e){var t=e.target.innerText;f.currency!==t&&y({type:"switchCurrency",payload:{newValue:t}})};return Object(g.jsx)(l.a,{className:e.appBar,position:"static",color:"primary",children:Object(g.jsxs)(d.a,{className:e.toolbar,children:[Object(g.jsxs)(j.a,{value:c,onChange:function(e,t){r(t)},indicatorColor:"secondary","aria-label":"tabs",children:[Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({label:"Purchase by item"},L(0)),{},{component:b.b,to:"/purchase/byItem/delivery"})),Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({label:"Purchase by stores"},L(1)),{},{component:b.b,to:"/purchase/byStores"}))]}),Object(g.jsxs)(j.a,{className:e.currencySwitch,value:p,onChange:function(e,t){m(t)},indicatorColor:"secondary","aria-label":"currency-switch",children:[Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({className:e.currencyTab,value:"USD",label:"USD"},L("USD")),{},{onClick:I})),Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({className:e.currencyTab,value:"ILS",label:"ILS"},L("ILS")),{},{onClick:I}))]})]})})}var W=a(19),B=a(9);function F(e){return{id:"standard-tab-".concat(e),"aria-controls":"standard-tabpanel-".concat(e)}}var R=Object(o.a)((function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},root:{backgroundColor:e.palette.background.paper,width:500},search:Object(W.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(W.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function E(){var e=R(),t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(g.jsx)(l.a,{className:e.appBar,position:"static",color:"default",children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(j.a,{value:c,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",variant:"standard","aria-label":"tabs",children:[Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({label:"delivery"},F(0)),{},{component:b.b,to:"/purchase/byItem/delivery"})),Object(g.jsx)(u.a,Object(s.a)(Object(s.a)({label:"archive"},F(1)),{},{component:b.b,to:"/purchase/byItem/archive"}))]})})})}var U=a(163),A=a(16),q=a(184),J=a(164),V=a(117),$=a(165),H=a(166),z=a(167),Q=a(168),X=a(169),G=a(170),K=a(45),M=a.n(K),Y=Object(o.a)((function(e){return{toolBar:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},search:Object(W.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(W.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),dark:{backgroundColor:"#eaeaea"},totalPrice:{marginTop:e.spacing(2)}}}));function Z(){var e=Y(),t=D(),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(n.useState)(p()),u=Object(i.a)(j,2),b=u[0],h=u[1];function p(){var e=0;return c.archiveItems.filter((function(e){return e.itemName.includes(l)})).forEach((function(t){return e+=t.price})),e}return Object(n.useEffect)((function(){h(p())}),[c.archiveItems.length,l.length]),Object(g.jsx)(U.a,{container:!0,className:e.container,children:Object(g.jsxs)(U.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(g.jsx)(U.a,{container:!0,className:e.toolBar,direction:"row",justify:"space-between",alignItems:"stretch",children:Object(g.jsxs)("div",{className:e.search,children:[Object(g.jsx)("div",{className:e.searchIcon,children:Object(g.jsx)(M.a,{})}),Object(g.jsx)(q.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){d(e.target.value)}})]})}),Object(g.jsx)(J.a,{component:V.a,className:e.tableContainer,children:Object(g.jsxs)($.a,{className:e.table,"aria-label":"items-list",children:[Object(g.jsx)(H.a,{children:Object(g.jsxs)(z.a,{className:e.dark,children:[Object(g.jsx)(Q.a,{style:{minWidth:600},children:"Item name"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Store"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Price"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Delivery estimate"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Action"})]})}),Object(g.jsx)(X.a,{children:c.archiveItems.filter((function(e){return e.itemName.includes(l)})).map((function(e,t){return Object(g.jsxs)(z.a,{children:[Object(g.jsx)(Q.a,{component:"th",scope:"row",children:e.itemName}),Object(g.jsx)(Q.a,{align:"right",children:e.store}),Object(g.jsx)(Q.a,{align:"right",children:"USD"===c.currency?"".concat(e.price.toFixed(2),"$"):"".concat((e.price*c.converter).toFixed(2),"\u20aa")}),Object(g.jsx)(Q.a,{align:"right",children:e.dest}),Object(g.jsx)(Q.a,{align:"right",children:Object(g.jsx)(G.a,{label:"remove",color:"primary",onClick:function(){return t=e.id,r({type:"reactiveItem",payload:{itemID:t}}),void h(p());var t},children:"reactive"})})]},e.id)}))})]})}),Object(g.jsxs)(U.a,{item:!0,xs:4,className:e.totalPrice,children:["Total:"," ","USD"===c.currency?"".concat(b.toFixed(2),"$"):"".concat((b*c.converter).toFixed(2),"\u20aa")]})]})})}var _=a(69),ee=a.n(_),te=a(182),ae=a(172),ne=a(118),ce=a(119),re=a(177),ie=a(175),se=a(179),oe=a(89),le=a.n(oe),de=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"50vmin",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),minHeight:"300px",minWidth:"380px"},padding:{margin:e.spacing(1)},margin:{margin:e.spacing(1)},dateInput:{maxWidth:"100%"},buttonContainer:{display:"flex",justifyContent:"center"}}})),je=function(){return{itemName:"",store:"",price:"",dest:(new Date).toISOString().split("T")[0].split("-").join("-")}},ue=["ebay","amazon","aliexpress","boom","shein","asos","American Eagle","Boohoo","Lululemon","forevertwentyone","Anthropologie"];function be(e){var t=e.open,a=e.setOpen,c=de(),r=D()[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(je()),b=Object(i.a)(u,2),h=b[0],p=b[1];Object(n.useEffect)((function(){p(je())}),[t]);var m=function(e){return function(t){13===t.keyCode?p(Object(s.a)(Object(s.a)({},h),{},Object(W.a)({},e,t.target.defaultValue))):p(Object(s.a)(Object(s.a)({},h),{},Object(W.a)({},e,t.target.innerText)))}},O=function(e){return function(t){var a=t.target.value;"price"===e&&isNaN(a)||p(Object(s.a)(Object(s.a)({},h),{},Object(W.a)({},e,a)))}};return Object(n.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return r({type:"error",payload:[!0,"Fake store API is not accessible, trying to re-connect..."]})}))}),[r]),Object(g.jsx)(te.a,{"aria-labelledby":"add-item-modal-title","aria-describedby":"add-new-item",className:c.modal,open:t,onClose:function(){a(!1)},closeAfterTransition:!0,BackdropComponent:ae.a,BackdropProps:{timeout:500},children:Object(g.jsx)(ne.a,{in:t,children:Object(g.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),h.store&&h.itemName)r({type:"addItem",payload:{item:Object(s.a)(Object(s.a)({},h),{},{price:parseFloat(h.price)})}}),a(!1);else{var t=document.querySelector("#item-name-auto-complete").value,n=document.querySelector("#store-name-auto-complete").value;r({type:"addItem",payload:{item:Object(s.a)(Object(s.a)({},h),{},{price:parseFloat(h.price),store:n,itemName:t})}}),a(!1)}},children:Object(g.jsxs)(U.a,{container:!0,justify:"center",className:c.paper,children:[Object(g.jsx)(ce.a,{variant:"h5",gutterBottom:!0,children:"Add Item"}),Object(g.jsx)(U.a,{item:!0,xs:12,children:Object(g.jsx)(se.a,{className:c.margin,id:"item-name-auto-complete",freeSolo:!0,onInputChange:m("itemName"),options:d.map((function(e){return e.title})),renderInput:function(e){return Object(g.jsx)(re.a,Object(s.a)(Object(s.a)({id:"item-name-input",type:"text"},e),{},{value:h.itemName,onChange:O("itemName"),label:"item name",margin:"normal",variant:"outlined",required:!0}))}})}),Object(g.jsx)(U.a,{item:!0,xs:12,children:Object(g.jsx)(se.a,{className:c.margin,id:"store-name-auto-complete",options:ue,onInputChange:m("store"),freeSolo:!0,renderInput:function(e){return Object(g.jsx)(re.a,Object(s.a)(Object(s.a)({id:"store-input",type:"text"},e),{},{value:h.store,onChange:O("store"),label:"store",margin:"normal",variant:"outlined",required:!0}))}})}),Object(g.jsxs)(U.a,{container:!0,item:!0,xs:12,children:[Object(g.jsx)(U.a,{item:!0,xs:12,sm:4,children:Object(g.jsx)(re.a,{className:c.margin,type:"text",label:"amount",id:"amount-input",value:h.price,onChange:O("price"),InputProps:{startAdornment:Object(g.jsx)(ie.a,{position:"start",children:"$"})},variant:"outlined",required:!0})}),Object(g.jsx)(U.a,{item:!0,xs:12,sm:8,children:Object(g.jsx)(re.a,{className:le()(c.margin,c.dateInput),id:"delivery-estimate-input",label:"delivery estimate",type:"date",value:h.dest,onChange:O("dest"),InputLabelProps:{shrink:!0},variant:"outlined",required:!0})})]}),Object(g.jsx)(U.a,{item:!0,xs:12,className:c.buttonContainer,children:Object(g.jsx)(G.a,{type:"submit",variant:"contained",color:"secondary",startIcon:Object(g.jsx)(ee.a,{}),children:"add"})})]})})})})}var he=Object(o.a)((function(e){return{toolBar:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},search:Object(W.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(W.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),tableContainer:{minWidth:"450px"},dark:{backgroundColor:"#eaeaea"},totalPrice:{marginTop:e.spacing(2)}}}));function pe(){var e=he(),t=D(),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],p=Object(n.useState)(f()),m=Object(i.a)(p,2),O=m[0],x=m[1];function f(){var e=0;return c.deliveryItems.filter((function(e){return e.itemName.includes(b)})).forEach((function(t){return e+=t.price})),e}return Object(n.useEffect)((function(){x(f())}),[c.deliveryItems.length,b.length]),Object(g.jsxs)(U.a,{container:!0,children:[Object(g.jsxs)(U.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(g.jsxs)(U.a,{className:e.toolBar,container:!0,direction:"row",justify:"space-between",alignItems:"stretch",children:[Object(g.jsxs)("div",{className:e.search,children:[Object(g.jsx)("div",{className:e.searchIcon,children:Object(g.jsx)(M.a,{})}),Object(g.jsx)(q.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){h(e.target.value)}})]}),Object(g.jsx)(G.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(g.jsx)(ee.a,{}),onClick:function(){d(!0)},children:"add Item"})]}),Object(g.jsx)(J.a,{component:V.a,className:e.tableContainer,children:Object(g.jsxs)($.a,{className:e.table,"aria-label":"simple table",children:[Object(g.jsx)(H.a,{children:Object(g.jsxs)(z.a,{className:e.dark,children:[Object(g.jsx)(Q.a,{style:{minWidth:600},children:"Item name"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Store"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Price"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Delivery estimate"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Action"})]})}),Object(g.jsx)(X.a,{children:c.deliveryItems.filter((function(e){return e.itemName.includes(b)})).map((function(e,t){return Object(g.jsxs)(z.a,{children:[Object(g.jsx)(Q.a,{component:"th",scope:"row",children:e.itemName}),Object(g.jsx)(Q.a,{align:"right",children:e.store}),Object(g.jsx)(Q.a,{align:"right",children:"USD"===c.currency?"".concat(e.price.toFixed(2),"$"):"".concat((e.price*c.converter).toFixed(2),"\u20aa")}),Object(g.jsx)(Q.a,{align:"right",children:e.dest}),Object(g.jsx)(Q.a,{align:"right",children:Object(g.jsx)(G.a,{label:"archive",color:"primary",onClick:function(){return t=e.id,void r({type:"archiveItem",payload:{itemID:t}});var t},children:"Archive"})})]},e.id)}))})]})}),Object(g.jsxs)(U.a,{item:!0,xs:4,className:e.totalPrice,children:["Total:"," ","USD"===c.currency?"".concat(O.toFixed(2),"$"):"".concat((O*c.converter).toFixed(2),"\u20aa")]})]}),l&&Object(g.jsx)(be,{open:l,setOpen:d})]})}function me(){return Object(g.jsx)(U.a,{container:!0,children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(E,{}),Object(g.jsxs)(A.d,{children:[Object(g.jsx)(A.b,{path:"/purchase/byItem/delivery",component:pe}),Object(g.jsx)(A.b,{path:"/purchase/byItem/archive",component:Z})]})]})})}var Oe=Object(o.a)((function(e){return{table:{minWidth:"100vmin"},dark:{backgroundColor:"#eaeaea"},toolbar:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},search:Object(W.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(W.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function ge(){var e=Oe(),t=D()[0],a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),d=l[0],j=l[1];return Object(n.useEffect)((function(){var e=[];t.deliveryItems.forEach((function(t){var a=e.find((function(e){return e.name===t.store}));a?(a.quantity+=1,a.summary+=parseInt(t.price)):e.push(function(e){return{name:e.store,quantity:1,summary:parseInt(e.price)}}(t))})),s(e)}),[t.deliveryItems]),Object(g.jsx)(U.a,{container:!0,children:Object(g.jsxs)(U.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(g.jsx)(U.a,{className:e.toolbar,container:!0,direction:"row",justify:"space-between",alignItems:"stretch",children:Object(g.jsxs)("div",{className:e.search,children:[Object(g.jsx)("div",{className:e.searchIcon,children:Object(g.jsx)(M.a,{})}),Object(g.jsx)(q.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},onChange:function(e){return j(e.target.value)},inputProps:{"aria-label":"search"}})]})}),Object(g.jsx)(J.a,{component:V.a,children:Object(g.jsxs)($.a,{className:e.table,"aria-label":"simple table",children:[Object(g.jsx)(H.a,{children:Object(g.jsxs)(z.a,{className:e.dark,children:[Object(g.jsx)(Q.a,{style:{minWidth:100},children:"Store"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Quantity"}),Object(g.jsx)(Q.a,{style:{minWidth:100},align:"right",children:"Total Price"})]})}),Object(g.jsx)(X.a,{children:r.filter((function(e){return e.name.includes(d)})).map((function(e,a){return Object(g.jsxs)(z.a,{children:[Object(g.jsx)(Q.a,{component:"th",scope:"row",children:e.name}),Object(g.jsx)(Q.a,{align:"right",children:"X".concat(e.quantity)}),Object(g.jsx)(Q.a,{align:"right",children:"USD"===t.currency?"".concat(e.summary.toFixed(2),"$"):"".concat((e.summary*t.converter).toFixed(2),"\u20aa")})]},e.name)}))})]})})]})})}var xe=a(183),fe=a(181),ye=a(176),ve=a(91),Ie=Object(ve.a)({palette:{secondary:{light:"#8db4e0",main:"#661fd1",dark:"rgba(91, 97, 251, 0.6)"},primary:{light:"#00e3ce",main:"#75c9c9",dark:"rgba(117, 201, 201, 0.6)"}}});function we(e){return Object(g.jsx)(fe.a,Object(s.a)({elevation:6,variant:"filled"},e))}var Ce=function(){var e=D(),t=Object(i.a)(e,2),a=t[0],n=t[1],c=function(e,t){"clickaway"!==t&&n({type:"error",payload:[!1,""]})};return Object(g.jsx)(ye.a,{theme:Ie,children:Object(g.jsxs)(U.a,{container:!0,children:[Object(g.jsxs)(b.a,{children:[Object(g.jsx)(A.a,{to:"/purchase/byItem/delivery"}),Object(g.jsx)(T,{}),Object(g.jsxs)(A.d,{children:[Object(g.jsx)(A.b,{path:"/purchase/byItem",component:me}),Object(g.jsx)(A.b,{path:"/purchase/byStores",component:ge})]})]}),Object(g.jsx)(xe.a,{open:a.error[0],autoHideDuration:6e3,onClose:c,children:Object(g.jsx)(we,{onClose:c,severity:"error",children:a.error[1]})})]})})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,185)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};r.a.render(Object(g.jsx)(k,{children:Object(g.jsx)(Ce,{})}),document.getElementById("root")),Ne()}},[[116,1,2]]]);
//# sourceMappingURL=main.c86e6cb1.chunk.js.map