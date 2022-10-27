"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9366],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},i="AppEng Decision Making Primer and Values",s={unversionedId:"practices/appeng/decision-values",id:"practices/appeng/decision-values",title:"AppEng Decision Making Primer and Values",description:"This guide is intended to help",source:"@site/docs/practices/appeng/decision-values.md",sourceDirName:"practices/appeng",slug:"/practices/appeng/decision-values",permalink:"/docs/practices/appeng/decision-values",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/practices/appeng/decision-values.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AppEng Decision Process",permalink:"/docs/practices/appeng/decision-process"},next:{title:"AppEng Team Charter",permalink:"/docs/practices/appeng/team-charter"}},l={},c=[{value:"Intended Audience",id:"intended-audience",level:2},{value:"Engineering Values and Decision Factors",id:"engineering-values-and-decision-factors",level:2},{value:"Learnable",id:"learnable",level:3},{value:"Maintainable",id:"maintainable",level:3},{value:"Shareable",id:"shareable",level:3},{value:"Automatable",id:"automatable",level:3},{value:"User Friendly",id:"user-friendly",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"appeng-decision-making-primer-and-values"},"AppEng Decision Making Primer and Values"),(0,o.kt)("p",null,'This guide is intended to help\nengineers navigate making an AppEng decision.\nIt is focused on the "why" of decisions\nand meant to help align them\nwith the core values of the AppEng practice\nand Truss organization'),(0,o.kt)("h2",{id:"intended-audience"},"Intended Audience"),(0,o.kt)("p",null,'While we\'re here to focus on the "why",\ntaking a step back and focusing on the "who"\nis a prequisite to making decision.\nWithin the context of an ADR,\nit\'s important to enumerate who a decision benefits\nand draw back to that group within decision factors.\nBe curious about what that group\'s needs are\nand how the values in this guide intertwine with them.'),(0,o.kt)("p",null,"Commonly,\ndecisions will affect the following groups:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The users of a service.\nDepending on the makeup of a project team,\nthis will include other client stakeholders."),(0,o.kt)("li",{parentName:"ol"},"The team building a service.\nIf the team building the service includes client stakeholders\n(ex. a product owner involved in development),\nthis group may encompass them."),(0,o.kt)("li",{parentName:"ol"},'When creating practice level ADRs,\nwe\'re adding in one more group to focus on:\nthe AppEng practice.\nThis is mentioned in the\n"What makes this decision generally applicable" section\nof the ',(0,o.kt)("a",{parentName:"li",href:"/docs/practices/appeng/adrs/template"},"template"),".")),(0,o.kt)("p",null,"Here is an example drawing back to those groups\nin an ADR focused on picking a new database:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently, the org's database isn't easily learnable,\ncausing difficult onboarding for developers\nand slow releases for database related features\nand bugfixes\nto users.")),(0,o.kt)("p",null,"And for the practice:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Most (if not all) of our projects use a database,\nand commonly they are relational.\nTo make onboarding between projects easier\nand to generate better shared learning resources,\ndeciding on a common relational database for the practice\nwill increase effeciency delivering on all projects.")),(0,o.kt)("h2",{id:"engineering-values-and-decision-factors"},"Engineering Values and Decision Factors"),(0,o.kt)("p",null,"Now that we've established a clear context and user group,\nwe can apply a set of common values\nto aid in making a decision."),(0,o.kt)("p",null,"Note that these values won't always apply.\nThey're outlined as a guide for our work,\nnot an exhaustive list.\nA single decision likely won't tick all these boxes.\nIn addition,\nclient or individual use case may have different needs.\nRely on these as a default\nand be sure to review the context for your decision\nfor making exceptions."),(0,o.kt)("p",null,"Keeping with the above example\n(choosing a relational store),\nwe'll follow an example for each value,\nprefacing with this statement:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We chose to standardize on PostgreSQL\nas a default relational database for the practice.\n...")),(0,o.kt)("h3",{id:"learnable"},"Learnable"),(0,o.kt)("p",null,"Due to the nature of contracting,\nour teams are often shifting\nand working on different services\nand projects.\nIn order to facilitate these changes smoothly\nwe must build software that is easily understood\nand modified.\nIn addition,\nto be a successful organization in the long term,\nand to support our craft,\nwe must teach and grow engineers\nthroughout their careers."),(0,o.kt)("p",null,"This means using tools that\ncan have easily accessible knowledge bases\nand can be supported throughout the org."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"... Postgres has one of the largest documentation sources\nand accessible community driven learning resources.\nIn addition,\nit's widely used and supported,\nmeaning supporting software (such as ORMs)\nare often beginner friendly.")),(0,o.kt)("h3",{id:"maintainable"},"Maintainable"),(0,o.kt)("p",null,"While software can be short lived,\nwe're most often focused on delivering long term value\nto our clients and users.\nIn order to do so,\nwe must build maintainable software,\nwhich remains modern from a user perspective\nand malleable by an engineer."),(0,o.kt)("p",null,"This means seeking tools with active long support,\nchoosing design patterns that allow for change,\nand avoiding locking into experimental/cutting edge libraries\nthat may become obsolete."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"... Postgres has long standing support\nand regular receives bugfixes,\nlanguage integration support,\nand feature updates.\nThis makes it easier for us\nto keep our code up to date\nand adapt with more modern features\nwithout using a new database in the future.")),(0,o.kt)("h3",{id:"shareable"},"Shareable"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../developing/open-source"},"Open source"),"\nstrengthens the collective quality of our software.\nWe seek to use and contribute to the open source community."),(0,o.kt)("p",null,"Like with this ADRs,\nwe also seek to share among the members of the practice\nand beyond.\nThis means, reusing past code,\nteaching best practices,\nand sharing our experiments with each other."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"... Postgres is widely used\nand open source,\nmaking it easier to write third party extensions\nwhen our work is applicable to the community at large.\nIt also means third parties will more easily understand\nour open source code\nallowing for better collaboration.")),(0,o.kt)("h3",{id:"automatable"},"Automatable"),(0,o.kt)("p",null,'From the team charter:\n"People should not have to spend time and energy\non things computers can do better."\nIn order to better serve our users,\nwe seek to automate ourselves out of tasks\nthat can consume time\nand not deliver value.\nConsistently used tools and tasks\nshould be easy to deploy and operate,\nand require little user interaction\n(past customization and improvement)\nto manage.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"... Postgres is well supported by many popular ORMs\nallowing us to reduce repetitive work of\nwriting manual SQL statements.\nThere are also many SAS tools (like RDS)\nand Terraform libraries\nto reduce manual orchestration of the DB")),(0,o.kt)("h3",{id:"user-friendly"},"User Friendly"),(0,o.kt)("p",null,'Drawing from our team charter,\n"Software is only as valuable as the people it helps".\nWe seek to make decisions and use tools\nthat drive end user value\nand usability.\nRegardless of how cutting edge,\norganized,\nor fast\nour software is underneath the hood,\nif a user can\'t access it\nand perform its intended purpose with ease,\nwe have not built good software.\nThis includes making our software accessible\nto our users,\nstakeholders,\nand team.'),(0,o.kt)("p",null,"Often,\nnot all the values will fit a decision perfectly.\nRemember,\nit's not a checklist,\nbut general guidance.\nIn this case,\nPostgres may not be a shining example of how to improve accessibility,\nso you may choose to include/remove an example such as this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"... Postgres default internal types align well with common API level types\nand tooling --\nsuch as OpenAPI and GraphQL.\nThis allows us to build easily consumable and readable\nAPIs for end users.\nIt also allows us to use commonly used data translation packages\nthat save us time\nso we can focus more on how we're displaying data to our users.")))}d.isMDXComponent=!0}}]);