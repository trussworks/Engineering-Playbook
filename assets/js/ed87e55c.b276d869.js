"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Testing",s={unversionedId:"web/frontend/testing",id:"web/frontend/testing",title:"Testing",description:"Unit & partial frontend integration testing",source:"@site/docs/web/frontend/testing.md",sourceDirName:"web/frontend",slug:"/web/frontend/testing",permalink:"/docs/web/frontend/testing",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building a React App from Scratch",permalink:"/docs/web/frontend/react"},next:{title:"TypeScript Resources",permalink:"/docs/web/frontend/typescript"}},l={},p=[{value:"Unit &amp; partial frontend integration testing",id:"unit--partial-frontend-integration-testing",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"E2E &amp; Browser Testing",id:"e2e--browser-testing",level:2},{value:"Visual Regression Testing",id:"visual-regression-testing",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("h2",{id:"unit--partial-frontend-integration-testing"},"Unit & partial frontend integration testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The go-to framework for testing React components, but can also be used to test regular JS."),(0,i.kt)("li",{parentName:"ul"},"If you use create-react-app, this is included."),(0,i.kt)("li",{parentName:"ul"},"Provides snapshot and DOM testing."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"testing-library"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The current recommendation for F/E unit testing, testing-library always renders components in full and makes assertions against the resulting DOM in order to most accurately capture an actual user experience"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://enzymejs.github.io/enzyme/"},"Enzyme"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows you to assert and manipulate rendered components with jQuery-like selectors."),(0,i.kt)("li",{parentName:"ul"},"More useful for testing implementations of React class components, Enzyme can make assertions against React props and state, and instances of class components")))),(0,i.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each React component should have a test.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"At minimum, does the component render?"),(0,i.kt)("li",{parentName:"ul"},"Container components have logic in them, and that logic should be tested.")))),(0,i.kt)("h2",{id:"e2e--browser-testing"},"E2E & Browser Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("a",{parentName:"li",href:"https://www.cypress.io"},"Cypress")," for most browser testing with both Chrome and headless Chrome.")),(0,i.kt)("h2",{id:"visual-regression-testing"},"Visual Regression Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("a",{parentName:"li",href:"https://happo.io/"},"Happo")," for cloud-based visual regression testing")))}c.isMDXComponent=!0}}]);