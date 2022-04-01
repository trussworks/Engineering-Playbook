"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6237],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9558:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},c="[Tools and Practice](/docs/developing/) / Code Reviews",l={unversionedId:"developing/code-reviews/README",id:"developing/code-reviews/README",title:"[Tools and Practice](../README.md) / Code Reviews",description:"Overview",source:"@site/docs/developing/code-reviews/README.md",sourceDirName:"developing/code-reviews",slug:"/developing/code-reviews/",permalink:"/docs/developing/code-reviews/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/code-reviews/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[CI/CD](README.md) / Intro to CI/CD",permalink:"/docs/developing/cicd/intro"},next:{title:"Great Code Reviews Bring Happiness to my Heart",permalink:"/docs/developing/code-reviews/great-code-reviews"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"Resources",id:"resources",level:2}],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tools-and-practice--code-reviews"},(0,i.kt)("a",{parentName:"h1",href:"/docs/developing/"},"Tools and Practice")," / Code Reviews"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Effective code reviews provide some of the best opportunities for learning,\ngaining valuable feedback from peers, ensuring that quality standards are upheld\nthroughout a project, and defects are caught as early as possible."),(0,i.kt)("p",null,"We recognize code reviews can be a vulnerable exercise and should be approached\nwith care and deliberate intention.  We've collected some of the best practices\nfor projects to systematize the code review process and lay out expectations for\nthe creator of the pull request as well as the role of the reviewer."),(0,i.kt)("p",null,"Also worth reading is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/developing/pairing/"},"pairing")," section because some\nof the same lessons overlap with code reviews even if it is happening informally\nor at a different stage."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/code-reviews/great-code-reviews"},"Guide to Great Code Reviews")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developing/code-reviews/pull-request-best-practices"},"Best Practices for Submitting a Pull Request"))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/"},"11 Proven Practices for Peer Review | IBM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://smartbear.com/SmartBear/media/pdfs/Best-Kept-Secrets-of-Peer-Code-Review_Redirected.pdf"},"Best Kept Secrets of Code Review | SmartBear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://truss.works/blog/2018/1/5/of-tracked-changes-and-diffs-moving-from-editorial-to-engineering"},"Of Tracked Changes and Diffs | Truss Blog"))))}f.isMDXComponent=!0}}]);