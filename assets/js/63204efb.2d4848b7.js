"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7494],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8895:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="[Engineering Playbook](/docs/) / [Web Development](/docs/web/) / Front End",p={unversionedId:"web/frontend/README",id:"web/frontend/README",title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / Front End",description:"Overview",source:"@site/docs/web/frontend/README.md",sourceDirName:"web/frontend",slug:"/web/frontend/",permalink:"/docs/web/frontend/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / Browser Support",permalink:"/docs/web/browsersupport/"},next:{title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Frontend Architecture",permalink:"/docs/web/frontend/architecture"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"TLDR",id:"tldr",level:2},{value:"What is front end development?",id:"what-is-front-end-development",level:3},{value:"ReactUSWDS",id:"reactuswds",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Libraries We Like",id:"libraries-we-like",level:3},{value:"Learning",id:"learning",level:3},{value:"More Topics to Cover",id:"more-topics-to-cover",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"engineering-playbook--web-development--front-end"},(0,o.kt)("a",{parentName:"h1",href:"/docs/"},"Engineering Playbook")," / ",(0,o.kt)("a",{parentName:"h1",href:"/docs/web/"},"Web Development")," / Front End"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"These are our recommendations and best practices for front end development at Truss."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/architecture"},"Project Architecture")," - guidance around starting a new F/E project from scratch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/developing-ui"},"General Guide to Implementing UI")," - includes best practices around writing HTML, CSS, and using CSS modules"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/project-checklist"},"Project Checklist")," - a high-level list of things to consider when setting up a F/E project or making architectural decisions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/react"},"React Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/typescript"},"TypeScript Resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/testing"},"Testing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/developer-experience"},"Developer Experience")," - information about using debugging tools, linters and auto-formatters")),(0,o.kt)("h2",{id:"tldr"},"TLDR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We typically choose React as our front end framework of choice."),(0,o.kt)("li",{parentName:"ul"},"We recommend using ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," when possible. We have compiled some ",(0,o.kt)("a",{parentName:"li",href:"/docs/web/frontend/typescript"},"TypeScript Resources"),"."),(0,o.kt)("li",{parentName:"ul"},"We like to practice component-driven development and often use ",(0,o.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook")," for design system documentation.")),(0,o.kt)("h3",{id:"what-is-front-end-development"},"What is front end development?"),(0,o.kt)("p",null,'In order to make informed decisions around what kind of tools, libraries, and frameworks to use for your web application, it helps to have a strong understanding of what "front end" means in the context of web development. The front end part of an application stack refers to the client-side code that is downloaded from a web server, and executed in the browser on an end user\'s device. It includes, but is not limited to, the HTML and CSS that renders the user interface.'),(0,o.kt)("p",null,"It is also important to keep in mind, especially as the ecosystem of front end development continues to expand, that the compiled code that will be executed natively by the browser is ultimately HTML, CSS, and JavaScript. While it is certainly possible to build a dynamic web app using just these languages, it is all run in a single environment, uncompartamentalized, making it easy to introduce bugs and unintended side effects. Therefore, many of the tools we see in modern front end development are actually used in order to improve the developer experience, and in turn the users, by enforcing consistent patterns, reducing the potentiality for bugs, and automating tasks that assist in performance optimization."),(0,o.kt)("h2",{id:"reactuswds"},"ReactUSWDS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds"},"ReactUSWDS")," is an internal Truss project aiming to create React implementations of USWDS 2.0 UI components. If you are building a new UI component that is based on a USWDS design, and might be useful to abstract so it can be shared by other projects, you may want to consider building it in ReactUSWDS instead. You can find more information about ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trussworks/react-uswds"},"contributing to and using ReactUSWDS here"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("h3",{id:"libraries-we-like"},"Libraries We Like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"["," ","]"," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JedWatson/classnames"},"classnames")," (managing CSS classes in JS components)"),(0,o.kt)("li",{parentName:"ul"},"["," ","]"," ",(0,o.kt)("a",{parentName:"li",href:"https://day.js.org/"},"DayJS"),", ",(0,o.kt)("a",{parentName:"li",href:"https://moment.github.io/luxon/index.html"},"luxon")," (newer alternatives to Moment, working with dates and times)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: ",(0,o.kt)("a",{parentName:"li",href:"https://momentjs.com/"},"MomentJS")," has been deprecated, ",(0,o.kt)("strong",{parentName:"li"},"do not use on new projects")))),(0,o.kt)("li",{parentName:"ul"},"["," ","]"," ",(0,o.kt)("a",{parentName:"li",href:"https://validatejs.org/"},"validateJS"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jquense/yup"},"yup")," (validating form object models)"),(0,o.kt)("li",{parentName:"ul"},"["," ","]"," ",(0,o.kt)("a",{parentName:"li",href:"https://formik.org/"},"Formik"),", ",(0,o.kt)("a",{parentName:"li",href:"https://react-hook-form.com/"},"React-hook-form")," (building forms in React)"),(0,o.kt)("li",{parentName:"ul"},"["," ","]"," ",(0,o.kt)("a",{parentName:"li",href:"http://numeraljs.com/"},"numeral.js"),", ",(0,o.kt)("a",{parentName:"li",href:"https://mikemcl.github.io/big.js/"},"big.js")," (working with numbers and decimals)")),(0,o.kt)("h3",{id:"learning"},"Learning"),(0,o.kt)("p",null,"Various resources on React, Redux, etc, for a variety of learning styles."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Read"),": ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"React Tutorial")," - Official tutorial from React. I (Alexi) personally found this cumbersome. If you stick with it you\u2019ll learn the basics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Watch"),": ",(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/courses/getting-started-with-redux"},"Getting Started with Redux")," - Free 30 video series by the author of Redux."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Watch"),": ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_"},"ReactJS / Redux Tutorial")," - ~60 minutes of YouTube videos that will get you up and running with React and Redux. The content is useful, the guy\u2019s voice can be a bit of a challenge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Watch"),": ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&v=nYkdrAPrdcw"},"This video")," from the introduction of Flux can be useful for some high-level background about the pattern (the MVC bashing is overdone, but otherwise this video is useful.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Do"),": Roll your own React app! Make a little project of your own. This works well if you\u2019re more hands-on. Here are some rough steps, but you\u2019ll need to do a bit of filling-in-the-blanks:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/create-react-app"},"create-react-app")," to bootstrap a new React project."),(0,o.kt)("li",{parentName:"ul"},"Figure out how to run the app live (hint: yarn start)"),(0,o.kt)("li",{parentName:"ul"},"Find and skim through some of the important files it made: ",(0,o.kt)("inlineCode",{parentName:"li"},"index.hmtl"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"App.js"),". What do these look like they\u2019re doing?"),(0,o.kt)("li",{parentName:"ul"},"Change the page title to something of your choosing."),(0,o.kt)("li",{parentName:"ul"},"Create a new React ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-component.html"},"component")," that has a ",(0,o.kt)("inlineCode",{parentName:"li"},"<button>")," or something in it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"import")," that component into ",(0,o.kt)("inlineCode",{parentName:"li"},"App.js"),", and make sure you can see it!"),(0,o.kt)("li",{parentName:"ul"},"Write a new test for your component. (Hint: ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn test"),"). create-react-app gives you Jest for free, look at its manual."),(0,o.kt)("li",{parentName:"ul"},"Make the thing in your component clickable, even if it just does ",(0,o.kt)("inlineCode",{parentName:"li"},"alert(\u2018hey there!\u2019)")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router"},"React Router")," to your project."),(0,o.kt)("li",{parentName:"ul"},"Make a new component like the first one, and add routes so that they display depending on the URL. E.g:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/component1")," shows the first one on the page;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/component2")," shows the second one."))),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")," to your project.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is a rather big step. You\u2019ll need to have some sort of state, so make a login button and \u201clogged in\u201d will be the state you are going to keep track of."),(0,o.kt)("li",{parentName:"ul"},"When the user is logged in, there should be a \u201clog out\u201d button shown.")))))),(0,o.kt)("h2",{id:"more-topics-to-cover"},"More Topics to Cover"),(0,o.kt)("p",null,"This guide is not complete, and always a work in progress! These are other areas of frontend development that we'd like to develop more resources and best practices for. Feel free to add onto this playbook!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single page application development"),(0,o.kt)("li",{parentName:"ul"},"Server-side rendering"),(0,o.kt)("li",{parentName:"ul"},"Progressive web app (PWA)"),(0,o.kt)("li",{parentName:"ul"},"Non-React frameworks"),(0,o.kt)("li",{parentName:"ul"},"Webpack & frontend compilation tooling")))}m.isMDXComponent=!0}}]);