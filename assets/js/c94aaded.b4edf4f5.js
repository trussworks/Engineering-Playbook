"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));n(8209);const a={},o="Style Guide",l={unversionedId:"web/api/rest-api-design/Style-Guide",id:"web/api/rest-api-design/Style-Guide",title:"Style Guide",description:"In addition to consistent design of the API, a consistent style is also important.",source:"@site/docs/web/api/rest-api-design/Style-Guide.md",sourceDirName:"web/api/rest-api-design",slug:"/web/api/rest-api-design/Style-Guide",permalink:"/docs/web/api/rest-api-design/Style-Guide",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/api/rest-api-design/Style-Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Methods",permalink:"/docs/web/api/rest-api-design/HTTP-Methods"},next:{title:"URL Design",permalink:"/docs/web/api/rest-api-design/URL-Design"}},s={},p=[{value:"Linters",id:"linters",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"style-guide"},"Style Guide"),(0,i.kt)("p",null,"In addition to consistent design of the API, a consistent style is also important."),(0,i.kt)("p",null,"The details of a style guide are often a matter of personal opinion, but the most important aspect is simply consistency."),(0,i.kt)("p",null,"Here's one example for the MilMove Prime API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All URLs must be in ",(0,i.kt)("inlineCode",{parentName:"li"},"kebab-case"),", however any parameters listed in the URL documentation must be in ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase"),"."),(0,i.kt)("li",{parentName:"ul"},"All resources must be plural."),(0,i.kt)("li",{parentName:"ul"},"All JSON response payloads must use ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase")," for all keys."),(0,i.kt)("li",{parentName:"ul"},"All simple resource identifier keys, with no prefix, should be lowercase ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},"All keys suffixed with ID in response payloads should be capitalize ID, so ",(0,i.kt)("inlineCode",{parentName:"li"},"shipmentID")," is correct - not ",(0,i.kt)("inlineCode",{parentName:"li"},"shipmentId")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"shipmentid"),"."),(0,i.kt)("li",{parentName:"ul"},"All timestamps are post-fixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"At"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"updatedAt"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"createdAt"),".")),(0,i.kt)("p",null,"It does not matter if you choose a different style than what is described here, just that you define it and stick with it."),(0,i.kt)("h2",{id:"linters"},"Linters"),(0,i.kt)("p",null,"A good way to ensure compliance is to use a linter. If you are using a ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," format such as OpenAPI to define the REST API, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://stoplight.io/open-source/spectral"},"Spectral")," as a linter."),(0,i.kt)("p",null,"In this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/swagger/.spectral.yml"},"sample ",(0,i.kt)("inlineCode",{parentName:"a"},"ruleset")," we use on\nMilMove"),",\nyou can see examples that enforce some rules of the above style guide."))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);