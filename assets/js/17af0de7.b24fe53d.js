"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1300],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return t?o.createElement(d,a(a({ref:n},s),{},{components:t})):o.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));t(8209);const i={},a="Configuration",l={unversionedId:"developing/configuration/README",id:"developing/configuration/README",title:"Configuration",description:"Projects should adhere to the following guidelines for managing configuration:",source:"@site/docs/developing/configuration/README.md",sourceDirName:"developing/configuration",slug:"/developing/configuration/",permalink:"/docs/developing/configuration/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/configuration/README.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"Docker",permalink:"/docs/developing/command-line-tools/docker"},next:{title:"Development Cycle",permalink:"/docs/developing/cycle/"}},c={},p=[],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Projects should adhere to the following guidelines for managing configuration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configuration values should be provided to programs via environment variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Programs should validate configuration immediately when they are run.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If config is incomplete or invalid, programs should:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Exit with a non-zero status"),(0,r.kt)("li",{parentName:"ol"},"Print a helpful error message to assist humans in resolving the issue"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All environment values should be cataloged in a single location."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This should generally be a project's ",(0,r.kt)("a",{parentName:"li",href:"/docs/developing/command-line-tools/direnv"},".envrc")," file (values can be left blank as needed), although ecosystems that have a strong convention for this configuration living elsewhere should follow that convention."),(0,r.kt)("li",{parentName:"ul"},"The purpose of maintaining this catalog of environment variables is to document all possible configuration points."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Projects should define default configuration for local development in an ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc.local")," file. This file should be loaded from the project's main ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")," file if it exists. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CMSgov/easi-app/blob/master/.envrc#L77-L80"},"Here is an example"),"."))),(0,r.kt)("p",null,"Following the above guidelines should yield projects with a setup that allows developers to get a new project clone running with minimal manual configuration."))}u.isMDXComponent=!0},8209:(e,n,t)=>{t(7294)}}]);