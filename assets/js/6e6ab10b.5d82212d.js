"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6194],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},s="General Tips",u={unversionedId:"compliance/atos/tips",id:"compliance/atos/tips",title:"General Tips",description:"General",source:"@site/docs/compliance/atos/tips.md",sourceDirName:"compliance/atos",slug:"/compliance/atos/tips",permalink:"/docs/compliance/atos/tips",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/compliance/atos/tips.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ATO Document Templates",permalink:"/docs/compliance/atos/templates"},next:{title:"Risk Management Framework",permalink:"/docs/compliance/risk-management/"}},c={},p=[{value:"General",id:"general",level:2},{value:"System Security Plans (SSPs)",id:"system-security-plans-ssps",level:2},{value:"System/network diagrams",id:"systemnetwork-diagrams",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-tips"},"General Tips"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As soon as you have a stable server that isn\u2019t changing its security boundary (talk to the project developers about this, but it can be very early on), you should start this process. As long as there aren\u2019t those significant changes, the tests will run periodically on any updates you make. At the very latest, start this process at least two months before launch. Do not commit to a launch date without coordinating with your AO on this first."),(0,o.kt)("li",{parentName:"ul"},"One thing that will help the process is great documentation, which can mitigate some problems from occurring during the ATO process. Documentation, and specifically your README, should reflect a high level narrative of the architecture and data flows of the application. Questions to consider include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"What does it do?"),(0,o.kt)("li",{parentName:"ul"},"How does it move information around?"),(0,o.kt)("li",{parentName:"ul"},"What does it accomplish by doing it?"))),(0,o.kt)("li",{parentName:"ul"},"The DigitalGov team at GSA has collected a list of ",(0,o.kt)("a",{parentName:"li",href:"http://www.digitalgov.gov/resources/checklist-of-requirements-for-federal-digital-services/"},"Requirements for Federal Websites and Digital Services")," that you should familiarize yourself with."),(0,o.kt)("li",{parentName:"ul"},"Exactly how big of a splashy launch are you planning? Is POTUS announcing it? Have you figured out what level of traffic you need to support? This should be coordinated between the engineers on your team, your client, and the Infrastructure Team.")),(0,o.kt)("h2",{id:"system-security-plans-ssps"},"System Security Plans (SSPs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remember that the reviewer knows nothing about your system, and likely doesn't have software development background. The purpose of the SSP is to get the entire system and everything security-related around it into the brain of the reviewer."),(0,o.kt)("li",{parentName:"ul"},"Filling out the SSP is hard, and will likely be the most time-consuming part of the ATO process."),(0,o.kt)("li",{parentName:"ul"},"Sections 9, 10, and 13 are the hard/important ones to fill out. Focus on these first."),(0,o.kt)("li",{parentName:"ul"},"It will be easiest to fill out your SSP while going through side-by-side with a recent SSP, ideally for a similar system.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Looking at another SSP will help you understand the language/detail required."),(0,o.kt)("li",{parentName:"ul"},"Reuse/adapt content from previous SSP(s) whenever possible."))),(0,o.kt)("li",{parentName:"ul"},"When filling out the SSP, try taking a rough first pass, and flesh it out later."),(0,o.kt)("li",{parentName:"ul"},"Don't Repeat Yourself.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lots of controls and sections have overlap - you will be tempted to restate the same thing multiple times. If this seems to be the case, reread the question ",(0,o.kt)("em",{parentName:"li"},"carefully")," to be sure. The SSP template authors choose their words carefully."),(0,o.kt)("li",{parentName:"ul"},"Rather than repeating the same thing across multiple controls/sections, give a brief summary with the core details of who's responsible and how the control is fulfilled, and then cross-reference the more detailed explanation in the other place."))),(0,o.kt)("li",{parentName:"ul"},"Maintain consistency.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Inconsistency can confuse the reviewers, forcing them to come back and say "well, which is it?" which slows down the process.'),(0,o.kt)("li",{parentName:"ul"},"Be especially careful to be consistent with terminology, using the exact names from the following tables throughout your ATO materials:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"User Roles"),(0,o.kt)("li",{parentName:"ul"},"Software Components"))))),(0,o.kt)("li",{parentName:"ul"},"Refer to specific User Roles and Software Components in Title Case."),(0,o.kt)("li",{parentName:"ul"},"Only include information about your ","[","soon-to-be","]"," production system. Other environments (development/staging) are out of scope.")),(0,o.kt)("h2",{id:"systemnetwork-diagrams"},"System/network diagrams"),(0,o.kt)("p",null,"One of the requirements for an SSP (and the Rules of Engagement) is to include a network diagram for your system. Some tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The diagram should be as detailed as possible."),(0,o.kt)("li",{parentName:"ul"},"The boxes in the diagram should roughly correspond to the rows in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Software Components")," tables.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Include all external services, such as:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Digital Analytics Program"),(0,o.kt)("li",{parentName:"ul"},"New Relic"))))),(0,o.kt)("li",{parentName:"ul"},"The arrows should correspond to rows in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Ports, Protocols, and Services")," table(s), with labels of the format ",(0,o.kt)("inlineCode",{parentName:"li"},"<protocol> <port>(<T(CP) or U(DP)>) - <Purpose>"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS 443(T) - uploading files")))),(0,o.kt)("li",{parentName:"ul"},'Include a visual "ATO Boundary."',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A dotted line box is a nice way to do this."),(0,o.kt)("li",{parentName:"ul"},"The system diagram includes things outside of the ATO boundary for context. Delineating the parts of the diagram being ATOd versus the parts that exist for context (such as the cloud.gov router) is helpful for reviewers.")))))}h.isMDXComponent=!0}}]);