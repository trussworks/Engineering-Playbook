"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));n(8209);const a={},i="Open Source Statement of Intent",s={unversionedId:"developing/open-source/intent",id:"developing/open-source/intent",title:"Open Source Statement of Intent",description:"At Truss, we prefer to open source our code whenever possible; there are a variety of reasons for this:",source:"@site/docs/developing/open-source/intent.md",sourceDirName:"developing/open-source",slug:"/developing/open-source/intent",permalink:"/docs/developing/open-source/intent",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/open-source/intent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open Source",permalink:"/docs/developing/open-source/"},next:{title:"Pair Programming",permalink:"/docs/developing/pairing/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-source-statement-of-intent"},"Open Source Statement of Intent"),(0,r.kt)("p",null,"At Truss, we prefer to open source our code whenever possible; there are a variety of reasons for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transparency is one of our most important values; by open sourcing our work, we show our clients and potential clients that we are willing to expose our work to scrutiny. This also allows us to get feedback from the larger community around open source, which can make our products better."),(0,r.kt)("li",{parentName:"ul"},"In addition, by open sourcing our projects, we make it easy to share code between clients and with the general public. As we benefit from open source projects for much of our work, contributing back to that pool returns the favor, so to speak. In addition, both we and the clients benefit from us not needing to reinvent the wheel on every project, and also means that clients can rely on maintained code even if we leave the project."),(0,r.kt)("li",{parentName:"ul"},"Not only does it make sharing code between clients and the general public easier, it also eases project onboarding for new Trussels -- the process of getting access to repositories can sometimes take weeks or months, and if the code is open-sourced, a new team member can immediately begin reviewing code and working locally."),(0,r.kt)("li",{parentName:"ul"},"Open sourcing our code is also good for Truss in terms of publicity and recruiting; people who have used our code will be more aware of us and what we do, and have a better idea of the quality of work that we provide. For potential clients, they can see the level of work they will receive, and for potential employees, they can see the type of work they will be doing.")),(0,r.kt)("p",null,"This extends even beyond the code for our software; we make our Engineering Playbook and the Trussels\u2019 Guide public for the same reasons."),(0,r.kt)("p",null,"Truss prefers to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License v2.0")," for software projects, the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU Affero GPL")," for bids or tech challenges (but MUST NOT use this for client work), and the ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"Creative Commons Attribution 4.0 International License")," for non-software projects. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/12UYIN3XfRPdKQV87_0ILa9-z6eWRBcLqtwP9fCyR6Tg/edit"},"This TDR")," (Truss internal link) discusses how we came to these conclusions and any exceptions."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);