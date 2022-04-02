"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[2251],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(n),y=o,d=g["".concat(l,".").concat(y)]||g[y]||s[y]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],p={},l="[Python](/docs/developing/languages/python/) / Project Setup",c={unversionedId:"developing/languages/python/project_setup",id:"developing/languages/python/project_setup",title:"[Python](./README.md) / Project Setup",description:"Layout",source:"@site/docs/developing/languages/python/project_setup.md",sourceDirName:"developing/languages/python",slug:"/developing/languages/python/project_setup",permalink:"/docs/developing/languages/python/project_setup",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/languages/python/project_setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Python](./README.md) / Linters and Checkers",permalink:"/docs/developing/languages/python/linters_and_checkers"},next:{title:"Ruby",permalink:"/docs/developing/languages/ruby/"}},u={},s=[{value:"Layout",id:"layout",level:2},{value:"Simple project",id:"simple-project",level:3},{value:"Application or larger project",id:"application-or-larger-project",level:3},{value:"Library",id:"library",level:3},{value:".gitignore",id:"gitignore",level:2}],g={toc:s};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python--project-setup"},(0,i.kt)("a",{parentName:"h1",href:"/docs/developing/languages/python/"},"Python")," / Project Setup"),(0,i.kt)("h2",{id:"layout"},"Layout"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"These recommendations are based on ",(0,i.kt)("a",{parentName:"em",href:"https://docs.python-guide.org/writing/structure"},"this article"),", updated to reflect the use of Pipenv.")),(0,i.kt)("h3",{id:"simple-project"},"Simple project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".gitignore\nREADME.md\nLICENSE\nPipfile\nPipfile.lock\nsample.py               # module lives in a single file\ntests/test_sample.py\n")),(0,i.kt)("h3",{id:"application-or-larger-project"},"Application or larger project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".gitignore\nREADME.md\nLICENSE\nPipfile\nPipfile.lock\nsample/__init__.py\nsample/*.py             # module lives in a directory\ndocs/\ntests/test_*.py\n")),(0,i.kt)("h3",{id:"library"},"Library"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.ionelmc.ro/2014/05/25/python-packaging/#the-structure"},"Packaging a python library")),(0,i.kt)("h2",{id:"gitignore"},".gitignore"),(0,i.kt)("p",null,"We suggest copying ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/github/gitignore/blob/master/Python.gitignore"},"this Python-specific .gitignore")," into the root of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://raw.githubusercontent.com/github/gitignore/master/Python.gitignore -o .gitignore\n")))}y.isMDXComponent=!0}}]);