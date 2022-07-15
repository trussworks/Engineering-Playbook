"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[553],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||h[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Template topic"},c="Topic",l={unversionedId:"templates/topic",id:"templates/topic",title:"Template topic",description:"Topic is add a brief description of what the topic means in the context of this subject area. E.g. Authentication is the process of establishing whether or not we can trust that the person or entity interacting with an application is who they claim to be. Login is an example of a user giving a password as credentials to authenticate that they are the rightful owner of the username they claim. Authentication should be distinguished from Authorization which is the process of determining whether or not a person/entity is entitled to perform a particular action.",source:"@site/docs/templates/topic.md",sourceDirName:"templates",slug:"/templates/topic",permalink:"/docs/templates/topic",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/templates/topic.md",tags:[],version:"current",frontMatter:{title:"Template topic"},sidebar:"tutorialSidebar",previous:{title:"Template subject",permalink:"/docs/templates/subject/"},next:{title:"Web Development",permalink:"/docs/web/"}},p={},h=[{value:"Context",id:"context",level:2},{value:"Approaches",id:"approaches",level:2},{value:"Ruby on Rails",id:"ruby-on-rails",level:3},{value:"OAuth",id:"oauth",level:3},{value:"Pitfalls",id:"pitfalls",level:2},{value:"The Trussel Way",id:"the-trussel-way",level:2}],u={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topic"},"Topic"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Topic")," is ",(0,a.kt)("em",{parentName:"p"},"add a brief description of what the topic means in the context of this subject area"),". E.g. Authentication is the process of establishing whether or not we can trust that the person or entity interacting with an application is who they claim to be. Login is an example of a user giving a password as credentials to authenticate that they are the rightful owner of the username they claim. ",(0,a.kt)("em",{parentName:"p"},"Authentication")," should be distinguished from ",(0,a.kt)("a",{parentName:"p",href:"#"},"Authorization")," which is the process of determining whether or not a person/entity is entitled to perform a particular action."),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Provide a Paragraph here which gives some context for why Trussels should care about the topic, how it occurs in client engagements and any relevant background"),(0,a.kt)("h2",{id:"approaches"},"Approaches"),(0,a.kt)("p",null,"Give examples of approaches to the problem that may be relevant. These might be broken down by language/framework if there are different dominant tools per framework. These might also be broken down by framework independent tools, e.g."),(0,a.kt)("h3",{id:"ruby-on-rails"},"Ruby on Rails"),(0,a.kt)("p",null,"In the RoR world ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/plataformatec/devise"},"Devise")," is a standard, if slightly heavyweight, solution. Use it unless you have a good reason not to."),(0,a.kt)("h3",{id:"oauth"},"OAuth"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"OAuth")," is a standard pattern for delegating authorization across systems. It is well supported in most frameworks and ..."),(0,a.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("p",null,"This is the place to point out any common gotchas, e.g. confusing authentication and authorization, or confusing the authentication entities (oAuth token etc) with the Users they apply to."),(0,a.kt)("h2",{id:"the-trussel-way"},"The Trussel Way"),(0,a.kt)("p",null,"Often we have to work within the constraints of the Client's existing frameworks and choices. In those cases the ",(0,a.kt)("a",{parentName:"p",href:"#approaches"},"Approaches")," and ",(0,a.kt)("a",{parentName:"p",href:"#pitfalls"},"Pitfalls")," sections should hopefully contain the information a Trussel needs to think critically about the choices and alternatives. On those occasions where we have a blank slate or are being asked for recommendations, this section should give a sound default choice to pick an answer and move forward."))}f.isMDXComponent=!0}}]);