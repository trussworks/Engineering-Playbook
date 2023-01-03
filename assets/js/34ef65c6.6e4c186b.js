"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(8209);const i={},a="Source Control",s={unversionedId:"developing/vcs/README",id:"developing/vcs/README",title:"Source Control",description:"Overview",source:"@site/docs/developing/vcs/README.md",sourceDirName:"developing/vcs",slug:"/developing/vcs/",permalink:"/docs/developing/vcs/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/vcs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Template Technical Design Document",permalink:"/docs/developing/technical-design/design-document-template"},next:{title:"Git Repos",permalink:"/docs/developing/vcs/git-repos"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"External Resources",id:"external-resources",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-control"},"Source Control"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Source control has less to do with the VCS system you use, and more to\ndo with the stages code goes through on the journey from inside a\ndeveloper's head, tested and merged into the main line, deployed to\nproduction, and thence in time to being identified as that accursed\nlegacy system that is causing all the problems."),(0,o.kt)("p",null,"At Truss, most of our projects will use ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," as\ntheir VCS, and usually with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," as the host for\ntheir repositories, but this is not a hard and fast rule (clients will\noften host their own repositories in their own system)."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developing/vcs/tools"},"Tools")," - A summary of tools we use for source code management"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developing/vcs/git-repos"},"Git Repos")," - How to set up and maintain your Git repos"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developing/vcs/git-workflow"},"Git Workflow")," - How best to work with Git as a developer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developing/vcs/master-to-main"},"Master-to-Main")," - Rename default branch")),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dangitgit.com"},"Dangit, Git!")," - A plain English guide to solving common Git issues")))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);