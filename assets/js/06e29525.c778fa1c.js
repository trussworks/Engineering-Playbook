"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3029],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1354:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={},s="Best Practices for Submitting a Pull Request",c={unversionedId:"developing/code-reviews/pull-request-best-practices",id:"developing/code-reviews/pull-request-best-practices",title:"Best Practices for Submitting a Pull Request",description:"Generally, a best practice to engage in before submitting your own pull request is to do a code review on your work.",source:"@site/docs/developing/code-reviews/pull-request-best-practices.md",sourceDirName:"developing/code-reviews",slug:"/developing/code-reviews/pull-request-best-practices",permalink:"/docs/developing/code-reviews/pull-request-best-practices",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/code-reviews/pull-request-best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Great Code Reviews Bring Happiness to my Heart",permalink:"/docs/developing/code-reviews/great-code-reviews"},next:{title:"Command Line Tools",permalink:"/docs/developing/command-line-tools/"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"best-practices-for-submitting-a-pull-request"},"Best Practices for Submitting a Pull Request"),(0,a.kt)("p",null,"Generally, a best practice to engage in before submitting your own pull request is to do a code review on your work."),(0,a.kt)("p",null,"Prior to submitting a PR, review your code for the following characteristics:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Is the code ",(0,a.kt)("strong",{parentName:"p"},"READABLE"),"?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Is it well-organized?"),(0,a.kt)("li",{parentName:"ul"},"Are the class, variable, and method names clear and descriptive?"),(0,a.kt)("li",{parentName:"ul"},"Are the formatting, spacing, comments, and indentations consistent?"),(0,a.kt)("li",{parentName:"ul"},"Have you refactored the code to reduce repetition and nested code?"),(0,a.kt)("li",{parentName:"ul"},"Have you included the appropriate comments to make your code readable to others?"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Have you followed the language\u2019s ",(0,a.kt)("strong",{parentName:"p"},"STYLE CONVENTIONS"),"?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Are class, variable, and method names cased and capitalized according to the style conventions of the language (e.g. camelCase vs. snake_case)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Is the code ",(0,a.kt)("strong",{parentName:"p"},"CORRECT"),"?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Does the code work as intended?"),(0,a.kt)("li",{parentName:"ul"},"Does the logic make sense and solve the intended problem?"),(0,a.kt)("li",{parentName:"ul"},"Have you provided instructions for reviewers to setup and verify the solution works?"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Have you identified and accounted for ",(0,a.kt)("strong",{parentName:"p"},"BUGS")," and ",(0,a.kt)("strong",{parentName:"p"},"EDGE CASES"),"?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Have you anticipated all the issues that could arise in your code that the person doing your code review will raise?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do you understand every line of code you are submitting? If not, go through each line and write down questions to clarify everything you do not understand, then ask!"))))}m.isMDXComponent=!0}}]);