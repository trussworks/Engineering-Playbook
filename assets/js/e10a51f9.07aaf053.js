"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));r(8209);const o={},a="Developer Experience",l={unversionedId:"web/frontend/developer-experience",id:"web/frontend/developer-experience",title:"Developer Experience",description:"Debugging Tools",source:"@site/docs/web/frontend/developer-experience.md",sourceDirName:"web/frontend",slug:"/web/frontend/developer-experience",permalink:"/docs/web/frontend/developer-experience",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/developer-experience.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frontend Architecture",permalink:"/docs/web/frontend/architecture"},next:{title:"Implementing UI",permalink:"/docs/web/frontend/developing-ui"}},p={},c=[{value:"Debugging Tools",id:"debugging-tools",level:2},{value:"Style and Formatting",id:"style-and-formatting",level:2},{value:"Auto-formatting",id:"auto-formatting",level:2},{value:"Linting",id:"linting",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-experience"},"Developer Experience"),(0,i.kt)("h2",{id:"debugging-tools"},"Debugging Tools"),(0,i.kt)("p",null,"The following browser extensions can be installed to assist with debugging React and Redux applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-devtools#installation"},"React Developer Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-devtools/tree/main/packages/redux-devtools-extension"},"Redux DevTools Extension"))),(0,i.kt)("h2",{id:"style-and-formatting"},"Style and Formatting"),(0,i.kt)("p",null,"We generally adhere to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"Airbnb JavaScript Style Guide"),", unless they conflict with project specific Prettier or lint rules."),(0,i.kt)("h2",{id:"auto-formatting"},"Auto-formatting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prettier.io"},"Prettier")," is recommended.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prettier.io/docs/en/editors.html"},"Prettier editor integration")," to make it easy to format and autosave."),(0,i.kt)("li",{parentName:"ul"},"Prefer single quotes for non-JSX code (CLI: ",(0,i.kt)("inlineCode",{parentName:"li"},"--single-quote")," API: ",(0,i.kt)("inlineCode",{parentName:"li"},"singleQuote: true"),")"),(0,i.kt)("li",{parentName:"ul"},"Prefer trailing commas for cleaner PRs and error reduction (CLI: ",(0,i.kt)("inlineCode",{parentName:"li"},"--trailing-comma true")," API: ",(0,i.kt)("inlineCode",{parentName:"li"},"trailingComma: true"),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierrc")," will be in the project for custom settings.")))),(0,i.kt)("h2",{id:"linting"},"Linting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eslint.org"},"ESLint"),".")))}s.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);