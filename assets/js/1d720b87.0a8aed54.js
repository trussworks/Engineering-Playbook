"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));r(8209);const o={},a="CI/CD",l={unversionedId:"developing/cicd/README",id:"developing/cicd/README",title:"CI/CD",description:"The release process is one of the most important parts of development",source:"@site/docs/developing/cicd/README.md",sourceDirName:"developing/cicd",slug:"/developing/cicd/",permalink:"/docs/developing/cicd/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/cicd/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defects/Bugs",permalink:"/docs/developing/bugs/"},next:{title:"CircleCI Orbs",permalink:"/docs/developing/cicd/circleci-orbs"}},c={},s=[{value:"Resources",id:"resources",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cicd"},"CI/CD"),(0,i.kt)("p",null,"The release process is one of the most important parts of development\nfor obvious reasons: without a release, your code is never going to\nactually be used by anyone. What follows are resources for setting\nup a continuous integration and continuous delivery (CI/CD) pipeline\naccording to Truss best practices to deliver software to customers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/intro"},"Intro to CI/CD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/delivery-pipeline"},"Standard Delivery Pipeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/circleci-patterns"},"CircleCI Config Patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/circleci-orbs"},"CircleCI Orbs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/circleci-utilities"},"CircleCI Utilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/cicd/dependabot"},"Dependabot"))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"Wikipedia: Continuous Delivery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"},"Atlassian's Basic Primer on CI/CD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://landing.google.com/sre/sre-book/chapters/release-engineering/"},"Google SRE book: Ch 8 Release Enginering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://12factor.net/build-release-run"},"12 Factor app: Build/Release/Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.singlestoneconsulting.com/blog/7-pipeline-design-patterns-for-continuous-delivery/"},"7 Pipeline Design Patterns for Continuous Delivery from Singlestone"))),(0,i.kt)("p",null,"Some OG references:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/ContinuousDelivery.html"},"Martin Fowler on Continuous Delivery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://timothyfitz.com/2009/02/08/continuous-deployment/"},"Timothy Fitz on Continuous Deployment"))))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);