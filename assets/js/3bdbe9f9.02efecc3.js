"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6062],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));r(8209);const o={},a="Tutorials",s={unversionedId:"infrasec/tutorials/README",id:"infrasec/tutorials/README",title:"Tutorials",description:"AWS",source:"@site/docs/infrasec/tutorials/README.md",sourceDirName:"infrasec/tutorials",slug:"/infrasec/tutorials/",permalink:"/docs/infrasec/tutorials/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/tutorials/README.md",tags:[],version:"current",frontMatter:{},sidebar:"practices",previous:{title:"Terratest Guide",permalink:"/docs/infrasec/terraform/terratest"},next:{title:"CircleCi Honeycomb Integration",permalink:"/docs/infrasec/tutorials/circle-ci-honeycomb-integrations"}},c={},l=[{value:"AWS",id:"aws",level:2},{value:"CI/CD",id:"cicd",level:2},{value:"Security",id:"security",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorials"},"Tutorials"),(0,i.kt)("h2",{id:"aws"},"AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/trussworks/legendary-waddle/blob/master/docs/how-to/setup-new-user.md"},"Setting Up Your AWS User")," \u2014 How to set up your AWS user in the Truss internal infrastructure. You will need the assistance of someone with administrative privileges in our AWS organization to help you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/your_first_lambda_function"},"Your First Lambda Function")," \u2014\xa0A guide to deploying your first AWS Lambda Function with Go and Terraform.")),(0,i.kt)("h2",{id:"cicd"},"CI/CD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/circle-ci-honeycomb-integrations"},"Honeycomb CircleCi Metrics")," - How to add Honeycomb to CircleCi for build metrics.")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/one-time-passwords"},"One-Time Passwords")," \u2014 How to set up one-time passwords for GitHub with 1Password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/yubikey-configuration"},"YubiKey Configuration Guide")," \u2014\xa0How to get and configure a YubiKey for use in commit signing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/infrasec/tutorials/yubikey-sso"},"YubiKey SSO")," \u2014\xa0How to configure a Google Account to use YubiKey (for GSuite admins).")))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);