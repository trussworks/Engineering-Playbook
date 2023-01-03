"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(8209);const o={},i="Engineering Playbook",l={unversionedId:"README",id:"README",title:"Engineering Playbook",description:"Build",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Federal Compliance",permalink:"/docs/compliance/"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Contents",id:"contents",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Install Dependencies(Mac OS)",id:"install-dependenciesmac-os",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"engineering-playbook"},"Engineering Playbook"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/TrussWorks/Engineering-Playbook/actions/workflows/pre_commit.yaml/badge.svg",alt:"Build"})),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Within Truss we have much experience of and opinions regarding engineering tools, processes, and practices. The problems and choices that we encounter in our day-to-day practice are rarely new. Having a straightforward way of applying the things we collectively know to the problems we face would be a source of great efficiency for us."),(0,a.kt)("p",null,"This collection of documents is intended to be simple and searchable, each one containing the essence of Truss opinions on a particular topic. Whilst any Trussel is free to edit these documents, there is some expectation that these are to be curated by the broad engineering community at Truss. To that end, proposed changes should be submitted via a PR and SMEs will be identified to act as curators for particular areas of knowledge."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/compliance/"},"ATOs & Risk Management Framework")," - A high level overview of Federal compliance requirements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developing/"},"Developer Tools & Practice")," - Opinions and resources relating to the tools we use to do our work."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/documentation/"},"Documentation")," - How to write effective documentation your users will read."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/web/"},"Web Development")," - Languages, frameworks and tools used to develop web applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/infrasec/"},"InfraSec")," - Infrastructure and security are foundational disciplines for building and maintaining stable systems."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/leadership/"},"Leadership")," - Guidance and resources around being an Engineering Lead or Manager at Truss."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/templates/"},"Templates"),' - "Ooh, ooh... I have a thing to add." Here\'s how to add to this Playbook.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/practices/"},"Practices")," - Resources on how the Truss Engineering practices organize.")),(0,a.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,a.kt)("h3",{id:"install-dependenciesmac-os"},"Install Dependencies(Mac OS)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew update\nbrew install pre-commit\npre-commit install\n")))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);