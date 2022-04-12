"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4475],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:9},c="Problems of the Assessment and Authorization",l={unversionedId:"compliance/risk-management/problems",id:"compliance/risk-management/problems",title:"Problems of the Assessment and Authorization",description:"Many agencies have created strong processes for creating an ATO document, which describes a system and its controls at a single point in time. This is useful as a compliance check, but point-in-time documentation is insufficient to modern information security needs.",source:"@site/docs/compliance/risk-management/problems.md",sourceDirName:"compliance/risk-management",slug:"/compliance/risk-management/problems",permalink:"/docs/compliance/risk-management/problems",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/compliance/risk-management/problems.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Authorization package",permalink:"/docs/compliance/risk-management/package"},next:{title:"Tools and Practice",permalink:"/docs/developing/"}},u={},m=[{value:"Out-of-date controls",id:"out-of-date-controls",level:2},{value:"Lagging security reviews",id:"lagging-security-reviews",level:2},{value:"Lagging product improvements",id:"lagging-product-improvements",level:2},{value:"Reduced contributions to compliance from developers",id:"reduced-contributions-to-compliance-from-developers",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"problems-of-the-assessment-and-authorization"},"Problems of the Assessment and Authorization"),(0,i.kt)("p",null,"Many agencies have created strong processes for creating an ATO document, which describes a system and its controls at a single point in time. This is useful as a compliance check, but point-in-time documentation is insufficient to modern information security needs."),(0,i.kt)("h2",{id:"out-of-date-controls"},"Out-of-date controls"),(0,i.kt)("p",null,"An ATO can be a very large document that takes a long time to write, often longer than it takes new threats to evolve or new capabilities that might require new controls. The point-in-time ATO cannot describe new controls and new risks."),(0,i.kt)("h2",{id:"lagging-security-reviews"},"Lagging security reviews"),(0,i.kt)("p",null,"ATOs define a point at which they must be reviewed or renewed, even if controls have not changed. This requires review of the whole management framework. But traditional implementation of information security did not require review more frequently. Developers might work on security improvements, but they are not included in the documents that inform compliance."),(0,i.kt)("h2",{id:"lagging-product-improvements"},"Lagging product improvements"),(0,i.kt)("p",null,"One way to prevent out-of-date controls is to slow down the adoption of enhancements. But slowing adoption can create other problems. Issues that could have been discovered and addressed earlier are instead discovered late in development. Because so many other decisions or assumptions have already been made, they are more expensive to address and the organization has fewer choices to solve them."),(0,i.kt)("p",null,"Slowing work can also leave systems lagging behind the skills of good developers. This has knock-on effects, reducing the pool of developers who want to join government, and reducing opportunities for government developers to build on their own skills."),(0,i.kt)("h2",{id:"reduced-contributions-to-compliance-from-developers"},"Reduced contributions to compliance from developers"),(0,i.kt)("p",null,"The people who develop systems think about the security of a system in terms of how the system works and what modules serve as security controls. Compliance reviews work from the opposite direction: starting from the controls and identifying which modules implement them. Information security teams can ask which module implements each control repeatedly until they satisfy a list of controls."),(0,i.kt)("p",null,"If information security teams could ask instead what security controls a particular module implements, a development team could provide the full range at once. This allows developers to think more proactively about how each module they develop functions as a security feature."))}d.isMDXComponent=!0}}]);