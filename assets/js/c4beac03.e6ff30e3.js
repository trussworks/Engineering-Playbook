"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),l=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(7462),n=(a(7294),a(3905));const r={},o="0001 - Preference to use TypeScript in place of JavaScript",s={unversionedId:"practices/appeng/adrs/use-typescript",id:"practices/appeng/adrs/use-typescript",title:"0001 - Preference to use TypeScript in place of JavaScript",description:"Status: Accepted",source:"@site/docs/practices/appeng/adrs/0001-use-typescript.md",sourceDirName:"practices/appeng/adrs",slug:"/practices/appeng/adrs/use-typescript",permalink:"/docs/practices/appeng/adrs/use-typescript",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/practices/appeng/adrs/0001-use-typescript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADRs",permalink:"/docs/practices/appeng/adrs/"},next:{title:"0002 - Use OpenTelemetry to instrument code for distributed tracing",permalink:"/docs/practices/appeng/adrs/distributed-tracing"}},p={},l=[{value:"Context",id:"context",level:2},{value:"Why type safety?",id:"why-type-safety",level:3},{value:"Decision",id:"decision",level:2},{value:"Why is this applicable to the practice as a whole",id:"why-is-this-applicable-to-the-practice-as-a-whole",level:2},{value:"When to not implement this decision",id:"when-to-not-implement-this-decision",level:2},{value:"Why TypeScript?",id:"why-typescript",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"Rely on React PropTypes (or other framework-specific validation)",id:"rely-on-react-proptypes-or-other-framework-specific-validation",level:3},{value:"Use Flow",id:"use-flow",level:3},{value:"Don\u2019t use type checking",id:"dont-use-type-checking",level:3}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0001---preference-to-use-typescript-in-place-of-javascript"},"0001 - Preference to use TypeScript in place of JavaScript"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Status:")," Accepted"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Date Accepted:")," 12/1/2021"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reviewers:")," @suzubara @jim @rswerve @macrael @gidjin @jenniferlynparsons @kylehilltruss"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"When in the business of building software for the web, JavaScript is largely unavoidable. It is virtually the only language option for interacting with browser APIs in order to enhance user experience & interfaces, and implement modern features that meet the high expectations of users today. It is also rapidly gaining popularity as a backend language, with the advent of Node.JS, web frameworks such as Express and Next.js, and the growing need to better optimize UI code by rendering it on the server first."),(0,n.kt)("p",null,"However, JavaScript has more than its share of quirks, and because it runs natively in browsers, it can be too easy to introduce bugs and errors that aren't realized until encountered by an end user. These days it is crucial to accompany JavaScript code with development tools such as linters and automated tests in order to avoid those scenarios. TypeScript is another such tool, ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/why-create-typescript"},"introduced by Microsoft")," as a superset of JavaScript that adds ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Type_safety"},"type safety")," to the language. By writing code in TypeScript instead of JavaScript, engineers can avoid entire categories of errors that would be caught well ahead of code being deployed to production."),(0,n.kt)("h3",{id:"why-type-safety"},"Why type safety?"),(0,n.kt)("p",null,"The decision to use TypeScript assumes a consensus that type safety in a programming language is better than no type safety. Below are some reasons for this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A strong static typing system can help to reduce the possibility of bugs at runtime, since type errors are captured earlier, during compilation."),(0,n.kt)("li",{parentName:"ul"},"Type checking significantly reduces the need to write tests or runtime logic that check for unexpected types, since we can be sure that functions are called with the correct argument types. The scope of these errors are largely narrowed down to dealing with unvalidated user input or external data, such as from a 3rd party API."),(0,n.kt)("li",{parentName:"ul"},"Type checking can also be used to define whether a variable or field is required or possibly undefined. The ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions"},"billion-dollar mistake")," was due to an insufficienlty expressive type system.")),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"Our decision is to declare a general preference to use TypeScript over JavaScript when the opportunity comes up."),(0,n.kt)("p",null,"To clarify, this is ",(0,n.kt)("em",{parentName:"p"},"not")," a decision to use TypeScript whenever possible, including as a server language. Rather, when presented with a scenario where JavaScript might be the natural choice of language, TypeScript should be ",(0,n.kt)("em",{parentName:"p"},"strongly")," considered instead."),(0,n.kt)("h2",{id:"why-is-this-applicable-to-the-practice-as-a-whole"},"Why is this applicable to the practice as a whole"),(0,n.kt)("p",null,"As stated above, many of the projects Truss works on use JavaScript to some extent. This decision is applicable to any such project, with the intention of encouraging high code quality and consistent tooling across engineering practices."),(0,n.kt)("h2",{id:"when-to-not-implement-this-decision"},"When to not implement this decision"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the project has no reason to use JavaScript, there may be no reason to use TypeScript. However, this decision does not preclude the option to use TypeScript as a server language if otherwise appropriate."),(0,n.kt)("li",{parentName:"ul"},"It can be very challenging and time consuming to introduce TypeScript to an existing JavaScript code base, especially if there are many dependencies and/or integrations that may or may not have TypeScript support. In this case it might not be feasible to spend time configuring TypeScript, although the option of introducing TypeScript incrementally (such as only to new code, or by using ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/play#example/jsdoc-support"},"JSDoc"),") should also be considered."),(0,n.kt)("li",{parentName:"ul"},"TypeScript can have a notoriously high learning curve, and may be too costly to adopt by certain projects with tight timing and/or staffing circumstances. However, that overhead in this situation should still be weighed carefully against the payoff of using TypeScript to prevent errors and reduce the need for writing certain kinds of tests later on."),(0,n.kt)("li",{parentName:"ul"},"For the same reason, the handoff cost may be too high for a client to maintain continuity of the project, if the incoming engineering team is not experienced with TypeScript. As consultants, Truss should be well-positioned to recommend TypeScript as a best practice, but there may be scenarios where this recommendation is not acted upon.")),(0,n.kt)("h2",{id:"why-typescript"},"Why TypeScript?"),(0,n.kt)("p",null,"TypeScript is not the only option available for adding static type checking to JavaScript. Below are some of the reasons why we\u2019ve landed on TypeScript above the alternatives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TypeScript code is somewhat self-documenting, by way of ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"},"type")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/interfaces.html"},"interface")," annotations. This is particularly useful when integrating with third-party dependencies that have type definitions."),(0,n.kt)("li",{parentName:"ul"},"TypeScript is widely used to the point that it is supported out-of-the-box with common frameworks such as ",(0,n.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/adding-typescript/"},"Create React App")," and ",(0,n.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/typescript"},"NextJS"),"."),(0,n.kt)("li",{parentName:"ul"},"TypeScript has many helpful autocomplete and snippet generation features for IDEs such as ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Docs/languages/typescript"},"VSCode")," that can speed up development."),(0,n.kt)("li",{parentName:"ul"},"Built & maintained by Microsoft, TypeScript has a steady and reliable release history, and its documentation and community support are well-established. It has been the ",(0,n.kt)("a",{parentName:"li",href:"https://2020.stateofjs.com/en-US/technologies/javascript-flavors/"},"most popular JavaScript \u201cflavor\u201d since 2017"),", and was ranked second most loved programming language in the ",(0,n.kt)("a",{parentName:"li",href:"https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted"},"2020 Stack Overflow developer survey"),"."),(0,n.kt)("li",{parentName:"ul"},"TypeScript implements ",(0,n.kt)("a",{parentName:"li",href:"https://levelup.gitconnected.com/typescript-object-oriented-concepts-in-a-nutshell-cb2fdeeffe6e"},"object-oriented concepts")," to a stronger level than ",(0,n.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/"},"ES6 classes")," in vanilla JavaScript, making it a useful environment within which to learn object-oriented programming.")),(0,n.kt)("p",null,"It is also worth noting the potential pitfalls and impacts of the decision to use TypeScript:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TypeScript can add a layer of complexity for engineers unfamiliar with it, which may increase onboarding overhead."),(0,n.kt)("li",{parentName:"ul"},"TypeScript is typically compiled at build time, so run-time type errors (due to external data, user input, etc.) are not eliminated and should still be tested for."),(0,n.kt)("li",{parentName:"ul"},"TypeScript requires specific changes and/or configuration to the build pipeline (such as compiling types used for local development), and the ",(0,n.kt)("inlineCode",{parentName:"li"},"tsconfig")," file needs to be maintained. However, most widely used tools have clear docs or libraries that assist with this."),(0,n.kt)("li",{parentName:"ul"},"The decision to convert existing code to TypeScript can be time consuming, and should be considered carefully. Often the decision to use TypeScript on a project is best made earlier rather than later."),(0,n.kt)("li",{parentName:"ul"},"There may be a financial & time cost for training engineers on how to use TypeScript.")),(0,n.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,n.kt)("h3",{id:"rely-on-react-proptypes-or-other-framework-specific-validation"},"Rely on ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/facebook/prop-types"},"React PropTypes")," (or other framework-specific validation)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Just a JavaScript dependency, so no need to learn a new language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," No configuration or changes needed to the build toolchain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Performs runtime checking in addition to during compilation & test"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Can be used in addition to TypeScript, not instead of"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," PropTypes surfaces warnings and does not prevent code from compiling or running")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Type checking is limited to a very specific scope (i.e., React component props and similar objects)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Doesn\u2019t cover checking types of data used between concerns (i.e., arguments passed to a function)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Fewer editor/linting integration tools available than TypeScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Locks us into a given framework, each of which have their own method of validating types and reporting errors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Because PropTypes just surfaces warnings, it's easy to ignore")),(0,n.kt)("h3",{id:"use-flow"},"Use ",(0,n.kt)("a",{parentName:"h3",href:"https://flow.org/en/"},"Flow")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Very similar to JavaScript with type annotations, less of a learning curve than TypeScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Easier to adopt over time using flow declarations per each file")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Less adoption and momentum than the TypeScript community"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Requires incorporating into the build toolchain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Less IDE integration & debugging support than TypeScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Some have had negative experiences with unclear error messages and limited support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Reported issues of sluggish activity across IDE, background process hogging bandwidth on machines"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Fewer engineers at Truss are experienced with Flow")),(0,n.kt)("h3",{id:"dont-use-type-checking"},"Don\u2019t use type checking"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Less learning overhead"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Removes a layer of complexity from writing JavaScript code in general"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Vanilla JavaScript has broader usage and community support compared to TypeScript")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cons:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We lose the aforementioned benefits of static type checking"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," It is easier to write less maintainable, less testable code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," It is easier to introduce bugs that will make their way to end users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," It necessitates writing more test cases to check for unexpected type errors")))}d.isMDXComponent=!0}}]);