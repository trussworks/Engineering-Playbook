"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6760],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(i),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return i?n.createElement(h,l(l({ref:t},u),{},{components:i})):n.createElement(h,l({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7636:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));i(8209);const r={},l="REST API Design",o={unversionedId:"web/api/rest-api-design/README",id:"web/api/rest-api-design/README",title:"REST API Design",description:"Most of this structure was pulled from https://apiguide.readthedocs.io/en/latest/index.html which is an API guide written by the AusDTO which appears to be the Aussie version of the U.S. Digital Services.",source:"@site/docs/web/api/rest-api-design/README.md",sourceDirName:"web/api/rest-api-design",slug:"/web/api/rest-api-design/",permalink:"/docs/web/api/rest-api-design/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/api/rest-api-design/README.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"GraphQL API",permalink:"/docs/web/api/GraphQL-Design-Guide"},next:{title:"Concurrency Control",permalink:"/docs/web/api/rest-api-design/Concurrency-Control"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Audience",id:"audience",level:3},{value:"Principles",id:"principles",level:2},{value:"Building REST APIs",id:"building-rest-apis",level:2}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rest-api-design"},"REST API Design"),(0,a.kt)("p",null,"Most of this structure was pulled from ",(0,a.kt)("a",{parentName:"p",href:"https://apiguide.readthedocs.io/en/latest/index.html"},"https://apiguide.readthedocs.io/en/latest/index.html")," which is an API guide written by the AusDTO which appears to be the Aussie version of the U.S. Digital Services."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"audience"},"Audience"),(0,a.kt)("p",null,"This guide is for developers of an API, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Engineers starting on a project looking to develop a REST API"),(0,a.kt)("li",{parentName:"ul"},"Feature leads for API development"),(0,a.kt)("li",{parentName:"ul"},"Individual developer implementing / extending / testing an API")),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("p",null,"I like the concept of shared principles, so I'm including this section here. But ideally we share principles between the GraphQL and REST API guides, and this moves up a level."),(0,a.kt)("p",null,"These principles were copied from ",(0,a.kt)("a",{parentName:"p",href:"https://apiguide.readthedocs.io/en/latest/principles/index.html"},"https://apiguide.readthedocs.io/en/latest/principles/index.html")," and don't need to be our principles, but they are listed here to prompt thought and discussion."),(0,a.kt)("p",null,"We will first be focusing on the ",(0,a.kt)("strong",{parentName:"p"},"Building REST APIs")," section. And will decide our principles in collaboration with the GraphQL documentation team."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developer empathy"),(0,a.kt)("li",{parentName:"ul"},"Functionality"),(0,a.kt)("li",{parentName:"ul"},"Ubiquitous standards"),(0,a.kt)("li",{parentName:"ul"},"Special technologies"),(0,a.kt)("li",{parentName:"ul"},"Endpoint stability"),(0,a.kt)("li",{parentName:"ul"},"Security"),(0,a.kt)("li",{parentName:"ul"},"Documentation"),(0,a.kt)("li",{parentName:"ul"},"Dogfooding",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dogfooding is the term applied to using your own public apis as much as possible when implementing internal features.")))),(0,a.kt)("h2",{id:"building-rest-apis"},"Building REST APIs"),(0,a.kt)("p",null,"This guide is ",(0,a.kt)("strong",{parentName:"p"},"not meant to be comprehensive"),". Rather it outlines what we have already learned in projects here at Truss. Please do contribute more sections if you have tackled some of these and have more or different insight to offer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/web/api/rest-api-design/HTTP-Methods"},"HTTP Methods")," - Use HTTP methods and status codes correctly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/web/api/rest-api-design/URL-Design"},"URL Design")," - How to pick the right URL for your endpoint."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"URL Depth"),(0,a.kt)("li",{parentName:"ul"},"Using plurals for the objects"),(0,a.kt)("li",{parentName:"ul"},"Noun vs. verb endpoints"),(0,a.kt)("li",{parentName:"ul"},"Good and bad RESTful url examples"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/web/api/rest-api-design/Style-Guide"},"Style Guide")," - Simple style guide for a REST API"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cases for url and body"),(0,a.kt)("li",{parentName:"ul"},"Linter to enforce rules"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/web/api/rest-api-design/Data-Design"},"Data Design")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Path, Query, Body and Header Parameters"),(0,a.kt)("li",{parentName:"ul"},"Security considerations related to parameter location"),(0,a.kt)("li",{parentName:"ul"},"Batching, filtering and pagination ","[","content needed","]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/web/api/rest-api-design/Error-Response-Strategy"},"Error Response Strategy"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Versioning ","[","Open Questions","]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How are we versioning the api and how does that effect work on any one endpoint?"),(0,a.kt)("li",{parentName:"ul"},"When is it ok to make a breaking API change?  How is that communicated?"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Security ","[","Open Questions","]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"What security considerations should I be aware of"),(0,a.kt)("li",{parentName:"ul"},"What is/are valid authentication strategies for contacting the API?"),(0,a.kt)("li",{parentName:"ul"},"Is CORS applicable? What client(s) can access it?"),(0,a.kt)("li",{parentName:"ul"},"Is MTLS supported or required, how is authorization and revocation handled"),(0,a.kt)("li",{parentName:"ul"},"How are permissions handled? What if there are different levels of permissions?"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Data coherence strategies ","[","Open Questions","]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/web/api/rest-api-design/Concurrency-Control"},"Concurrency Control"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Optimistic Locking"))),(0,a.kt)("li",{parentName:"ul"},"Is the API data cached? Should the client cache it? When should it be refreshed?"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Documentation ","[","Open Questions","]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How are we documenting the API for the end-user?"),(0,a.kt)("li",{parentName:"ul"},"What level of documentation is expected?"),(0,a.kt)("li",{parentName:"ul"},"How should I indicate how an endpoint is supposed to be used? Is there a description template?")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Heavily borrowed from ",(0,a.kt)("a",{parentName:"p",href:"https://apiguide.readthedocs.io/en/latest/preface.html"},"https://apiguide.readthedocs.io/en/latest/preface.html"))))}d.isMDXComponent=!0},8209:(e,t,i)=>{i(7294)}}]);