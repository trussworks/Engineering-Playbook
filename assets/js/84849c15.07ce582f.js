"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[61],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={},i="Tools and Practice",l={unversionedId:"developing/README",id:"developing/README",title:"Tools and Practice",description:"Overview",source:"@site/docs/developing/README.md",sourceDirName:"developing",slug:"/developing/",permalink:"/docs/developing/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Federal Compliance",permalink:"/docs/compliance/"},next:{title:"Defects/Bugs",permalink:"/docs/developing/bugs/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Note on Default Branches",id:"note-on-default-branches",level:2},{value:"Contents",id:"contents",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tools-and-practice"},"Tools and Practice"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This section addresses the tools and practices which are part of the everyday habits of being a Software Engineer at Truss. If you'd like to get a sense for how Trussels solve problems, take a look at the \ud83d\udd12",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/interview-solutions"},"interview solutions repo"),". If you haven't already, post your solution!"),(0,r.kt)("p",null,"Truss aims to find a balance between giving the autonomy and tools to make the best choices in any given situation, but to also avoid revisiting the same questions again and again. The latter is especially true when the question is not material or core to how we do business. In some cases, we have strong opinions about which questions are not valuable as a cause for debate, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://truss.works/blog/2017/11/3/tabs-vs-spaces-a-tale-of-asking-the-wrong-questions"},"Tabs vs Spaces"),"."),(0,r.kt)("p",null,'Generally, our approach should be "if there is a suggestion or answer in these pages, follow it until you have a ',(0,r.kt)("em",{parentName:"p"},"compelling"),' reason not to". Once you have a compelling reason to change the practice document it by adding to or updating these pages.'),(0,r.kt)("h2",{id:"note-on-default-branches"},"Note on Default Branches"),(0,r.kt)("p",null,"Where possible the documents here should refer to the Default Branch instead of using the word ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),". Where this\nis not possible try to use the default branch name ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". In links to repos in GitHub please also attempt to get\nthe reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," and not to ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/command-line-tools/"},"Command Line Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/eid/"},"Editors, IDEs and Debuggers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/docker/"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/direnv/"},"direnv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/languages/"},"Programming Languages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/cycle/"},"Development Cycle")," aka Sprint"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/vcs/"},"Source Control")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/cicd/"},"CI/CD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/bugs/"},"Defects/Bugs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/technical-design/"},"Technical Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/code-reviews/"},"Code Reviews")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/slack/"},"Slack Best Practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/growth/"},"Growth on Client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/learning/"},"Learning Resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/command-line-tools/HOW2GORELEASER"},"Building and Releasing Go CLI tools with ",(0,r.kt)("inlineCode",{parentName:"a"},"goreleaser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/healthcheck/"},"Health Checks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/pairing/"},"Pair Programming")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/open-source/"},"Open Source"))))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);