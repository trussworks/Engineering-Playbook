"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[938],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={},p="0003 Open Source Application Code",s={unversionedId:"practices/appeng/adrs/open-source-application-code",id:"practices/appeng/adrs/open-source-application-code",title:"0003 Open Source Application Code",description:"Status: Accepted",source:"@site/docs/practices/appeng/adrs/0003-open-source-application-code.md",sourceDirName:"practices/appeng/adrs",slug:"/practices/appeng/adrs/open-source-application-code",permalink:"/docs/practices/appeng/adrs/open-source-application-code",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/practices/appeng/adrs/0003-open-source-application-code.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0002 - Use OpenTelemetry to instrument code for distributed tracing",permalink:"/docs/practices/appeng/adrs/distributed-tracing"},next:{title:"Number - Title",permalink:"/docs/practices/appeng/adrs/template"}},l={},u=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Why is this Applicable to the Practice as a Whole",id:"why-is-this-applicable-to-the-practice-as-a-whole",level:2},{value:"When to Not Implement This Decision",id:"when-to-not-implement-this-decision",level:2},{value:"Alternatives Considered",id:"alternatives-considered",level:2},{value:"Links",id:"links",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0003-open-source-application-code"},"0003 Open Source Application Code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status:")," Accepted"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Superseded:")," n/a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Accepted:")," 12/6/2021"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reviewers:")," @sarboc, @jim, @pkarman"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"As Truss starts new projects, teams set up source code repositories.\nPart of this process involves answering where the code should live\nand who should have access to it."),(0,i.kt)("p",null,"Note that for the purpose of this ADR,\nwe're referring to ",(0,i.kt)("em",{parentName:"p"},"just")," the application code.\nThis does not refer to the infrastructure code\nthat is used to manage production environments\nand cloud services."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/developing/open-source/intent"},"More information on our Open Source Statement of Intent"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/12UYIN3XfRPdKQV87_0ILa9-z6eWRBcLqtwP9fCyR6Tg/edit"},"This TDR"),"\noutlines or preferred licenses."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://opensource.org/osd"},"Open Sourcing"),"\nallows for the free sharing and modification of code\nand provides a number of benefits to software teams\nand the outside community."),(0,i.kt)("p",null,"Open Sourcing application code\nprovides wins on many surfaces.\nOn an organizational level,\nit increases technology transparency\nwhich fosters public trust.\nEspecially for government projects, other agencies\nwill be able to benefit from the project's success\nwithin both their development and user communities.\nWhile the Truss development team would remain maintainers\nand deciders of code contributions,\nopen source code allows us\nto accept community input and contributions.\nSharing code among our internal Truss Engineering practice\nis also how we better our engineering discipline,\nand ultimately better serve our clients."),(0,i.kt)("p",null,"While sensitive data could potentially be shared through public repositories,\nmodern security practices,\nsuch as secret storage separate of code,\ncan mitigate this risk."),(0,i.kt)("p",null,"Truss has had great success with this in the past,\nincluding the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove"},"MilMove Application Code"),",\nand the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CMSgov/easi-app"},"EASi Application Code"),"."),(0,i.kt)("h2",{id:"why-is-this-applicable-to-the-practice-as-a-whole"},"Why is this Applicable to the Practice as a Whole"),(0,i.kt)("p",null,"We work on a number of government projects that\nall benefit from having open source application code.\nThe more projects we convince to work open source,\nthe easier it gets to convince subsequent projects\nto work open source."),(0,i.kt)("h2",{id:"when-to-not-implement-this-decision"},"When to Not Implement This Decision"),(0,i.kt)("p",null,"When working for private corporations that want\nto keep their code proprietary."),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives Considered"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open source application code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Can easily share code\nwith anyone,\nincluding CMS employees,\nTruss employees,\nor general software community."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Community contribute code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Other agencies can copy, modify, and deploy their own EASi."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Community can audit security practices and report bugs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Provides public transparency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Possible sensitive data public commits."))),(0,i.kt)("li",{parentName:"ul"},"Keep application code close sourced to the agency who owns the project",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Less concern for what,\npossibly private,\ninformation resides in repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Hard to share code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Hard to share documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Code cannot be easily reused by outside community.")))),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sourcecode.cio.gov/OSS/"},"Federal Source Code Policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove"},"MilMove Open Source Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CMSgov/easi-app"},"EASi Open Source Repository"))))}m.isMDXComponent=!0}}]);