(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{21:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(1),n=r.n(s),c=r(13),i=r.n(c),l=r(3),d=r(15),o=n.a.createContext({}),j=function(){var e=Object(s.useContext)(o);function t(e){var t=e.split("-"),r=t[0];return[t[1],t[2].split("T")[0],r].join("-")}return Object(a.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var r=e.login,s=e.name,n=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(a.jsx)("img",{src:n.medium,alt:"profile image for "+s.first+" "+s.last,className:"img-responsive"})}),Object(a.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[s.first," ",s.last]}),Object(a.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(a.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(a.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(a.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(l.date)})]},r.uuid)})):Object(a.jsx)(a.Fragment,{})})},h=function(){var e=Object(s.useContext)(o);return Object(a.jsx)("div",{className:"table mt-5",children:Object(a.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:e.developerState.headings.map((function(t){var r=t.name,s=t.width;return Object(a.jsxs)("th",{className:"col",style:{width:s},onClick:function(){e.handleSort(r.toLowerCase())},children:[r,Object(a.jsx)("span",{className:"pointer"})]},r)}))})}),Object(a.jsx)(j,{})]})})},b=(r(21),function(){var e=Object(s.useContext)(o);return Object(a.jsx)("div",{className:"searchbox",children:Object(a.jsxs)("form",{className:"form-inline",children:[Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(a.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})});var m=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsx)("div",{className:"search-area col-4",children:Object(a.jsx)(b,{})})})},u=r(14),O=r.n(u),f=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},x=(r(39),function(){var e=Object(s.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(d.a)(e,2),r=t[0],n=t[1];return Object(s.useEffect)((function(){f().then((function(e){n(Object(l.a)(Object(l.a)({},r),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(a.jsxs)(o.Provider,{value:{developerState:r,handleSearchChange:function(e){var t=e.target.value,a=r.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));n(Object(l.a)(Object(l.a)({},r),{},{filteredUsers:a}))},handleSort:function(e){"descend"===r.order?n({order:"ascend"}):n({order:"descend"});var t=r.filteredUsers.sort((function(t,a){return"ascend"===r.order?void 0===t[e]?1:void 0===a[e]?-1:"name"===e?t[e].first.localeCompare(a[e].first):a[e]-t[e]:void 0===t[e]?1:void 0===a[e]?-1:"name"===e?a[e].first.localeCompare(t[e].first):a[e]-t[e]}));n(Object(l.a)(Object(l.a)({},r),{},{filteredUsers:t}))}},children:[Object(a.jsx)(m,{}),Object(a.jsx)("div",{className:"area",children:r.filteredUsers.length>0?Object(a.jsx)(h,{}):Object(a.jsx)("div",{})})]})});var v=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(x,{})})};var p=function(e){var t=e.children;return Object(a.jsx)("div",{className:"wrapper",children:t})};var g=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("p",{children:"Click on each heading to filter or use the search box to narrow your results"})]})};var N=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(p,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(v,{})]})})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0df13069.chunk.js.map