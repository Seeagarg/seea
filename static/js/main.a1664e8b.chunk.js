(this["webpackJsonpseea-app"]=this["webpackJsonpseea-app"]||[]).push([[0],[,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(4),o=t.n(n),l=(t(9),t(2)),i=(t(10),t(0));var r=function(e){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:e.about})}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}),Object(i.jsxs)("div",{className:"switch form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.darkMode}),Object(i.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"," "),htmlFor:"flexSwitchCheckDefault",children:e.darkText})]})]})})]})})})};t(12);function d(e){var a=Object(c.useState)("Enter the text here"),t=Object(l.a)(a,2),s=t[0],n=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"my-3",children:[Object(i.jsxs)("h1",{children:[e.heading," "]}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){console.log("changed"),n(e.target.value)},id:"my box",rows:"10"}),Object(i.jsx)("button",{className:"btn-btn-primary",onClick:function(){console.log("uppercase is clicked"+s);var e=s.toUpperCase();n(e)},children:"convert to uppercase"}),Object(i.jsx)("button",{className:"btn-btn-primary",onClick:function(){console.log("lowercase is clicked"+s);var e=s.toLowerCase();n(e)},children:"convert to lowrcase"}),Object(i.jsx)("button",{className:"btn-btn-primary",onClick:function(){n(" ")},children:"clear text"}),Object(i.jsx)("button",{className:"btn-btn-primary",onClick:function(){var e=s.split(/[ ]+/);n(e.join(" "))},children:"Remove Extra Spaces"})]})}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Your Summary text"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," minutes to read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter something in the text box above to preview here"})]})]})}function b(){var e=Object(c.useState)({color:"black",backgroundColor:"pink"}),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)("Enable dark mode"),o=Object(l.a)(n,2),r=o[0],d=o[1];return Object(i.jsxs)("div",{className:"container",style:t,children:[Object(i.jsx)("h1",{children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",style:t,children:[Object(i.jsxs)("div",{className:"accordion-item",style:t,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button ",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:t,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:t,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)("button",{type:"button",onClick:function(){"white"===t.color?(s({color:"black",backgroundColor:"pink"}),d("Enable dark mode")):(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable light mode"))},className:"btn-btn-primary ",children:r})})]})}t(13);var h=function(){var e=Object(c.useState)("light"),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)("Enable dark mode"),o=Object(l.a)(n,2),h=o[0],j=o[1],m=Object(c.useState)(!1),u=Object(l.a)(m,2),p=u[0],x=u[1],g=function(e,a){x({msg:e,type:a})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"my_app",children:[Object(i.jsx)(r,{title:"textutils ",about:"about text",mode:t,darkMode:function(){"light"===t?(s("dark"),document.body.style.backgroundColor="#042743",j("disable dark mode"),g("dark mode has been enabled","sucess")):(s("light"),j("Enable dark mode"),document.body.style.backgroundColor=" oldlace",g("light mode has been enabled","sucess"))},darkText:h,alert:p}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)(d,{heading:"Enter the text to analyse"}),Object(i.jsx)(b,{className:"about"})]})]})})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,o=a.getTTFB;t(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.a1664e8b.chunk.js.map