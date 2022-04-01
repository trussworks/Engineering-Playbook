"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9043],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8415:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="NPMjs Registry",u={unversionedId:"web/frontend/npm",id:"web/frontend/npm",title:"NPMjs Registry",description:"Enabling 2FA",source:"@site/docs/web/frontend/npm.md",sourceDirName:"web/frontend",slug:"/web/frontend/npm",permalink:"/docs/web/frontend/npm",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/npm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Implementing UI",permalink:"/docs/web/frontend/developing-ui"},next:{title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Project Checklist",permalink:"/docs/web/frontend/project-checklist"}},c={},p=[{value:"Enabling 2FA",id:"enabling-2fa",level:2},{value:"Adding someone to Trussworks NPM org",id:"adding-someone-to-trussworks-npm-org",level:2},{value:"Removing someone from the Trussworks NPM org",id:"removing-someone-from-the-trussworks-npm-org",level:2}],m={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"npmjs-registry"},"NPMjs Registry"),(0,i.kt)("h2",{id:"enabling-2fa"},"Enabling 2FA"),(0,i.kt)("p",null,"Following best practices Truss requires that we enable 2FA when it is available. NPM allows enabling 2FA for both logging in, as well as publishing NPM packages. We can't force the enrollment, so enrollment is done so on the honor system. Please enable 2FA for ",(0,i.kt)("em",{parentName:"p"},"both")," logging into NPM as well as publishing packages."),(0,i.kt)("p",null,"Docs to do so exist ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-two-factor-authentication"},"here")),(0,i.kt)("h2",{id:"adding-someone-to-trussworks-npm-org"},"Adding someone to Trussworks NPM org"),(0,i.kt)("p",null,"To add an individual to the Trussworks NPM org, ping ",(0,i.kt)("inlineCode",{parentName:"p"},"@npm-admins")," in Slack requesting they be added. Their username and/or email address is required, preference towards email address."),(0,i.kt)("h2",{id:"removing-someone-from-the-trussworks-npm-org"},"Removing someone from the Trussworks NPM org"),(0,i.kt)("p",null,"To remove an individual from the Trussworks NPM org, ping ",(0,i.kt)("inlineCode",{parentName:"p"},"@npm-admins")," in Slack requesting they be removed. Their username and/or email address is required."))}d.isMDXComponent=!0}}]);