"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[3031],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={},s="[Engineering Playbook](/docs/) / [Web Development](/docs/web/) / [Front End](/docs/web/frontend/) / Project Checklist",u={unversionedId:"web/frontend/project-checklist",id:"web/frontend/project-checklist",title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Project Checklist",description:"A Front End Application Lifecycle",source:"@site/docs/web/frontend/project-checklist.md",sourceDirName:"web/frontend",slug:"/web/frontend/project-checklist",permalink:"/docs/web/frontend/project-checklist",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/project-checklist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NPMjs Registry",permalink:"/docs/web/frontend/npm"},next:{title:"Building a React App from Scratch",permalink:"/docs/web/frontend/react"}},p={},c=[{value:"A Front End Application Lifecycle",id:"a-front-end-application-lifecycle",level:2},{value:"What are you building?",id:"what-are-you-building",level:2},{value:"How will you build it?",id:"how-will-you-build-it",level:2},{value:"Additional considerations if using a build tool",id:"additional-considerations-if-using-a-build-tool",level:3},{value:"Additional considerations if building a SPA",id:"additional-considerations-if-building-a-spa",level:3},{value:"User Interaction",id:"user-interaction",level:3},{value:"Managing &amp; Displaying Content",id:"managing--displaying-content",level:3},{value:"Maintaining code standards &amp; developer tools",id:"maintaining-code-standards--developer-tools",level:3},{value:"Working with Design",id:"working-with-design",level:3},{value:"Testing",id:"testing",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Optimization",id:"optimization",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engineering-playbook--web-development--front-end--project-checklist"},(0,r.kt)("a",{parentName:"h1",href:"/docs/"},"Engineering Playbook")," / ",(0,r.kt)("a",{parentName:"h1",href:"/docs/web/"},"Web Development")," / ",(0,r.kt)("a",{parentName:"h1",href:"/docs/web/frontend/"},"Front End")," / Project Checklist"),(0,r.kt)("h2",{id:"a-front-end-application-lifecycle"},"A Front End Application Lifecycle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+---------+     +-----------+    +-------------+\n| develop |     |  compile  |    | user views  |--\x3e user interaction, JS & API calls\n|   &     |====>| to static |===>| in browser  |<-- update the DOM\n|  test   |     |  assets   |    | (page load) |\n+---------+     +-----------+    +-------------+\n                      ^\n        this can happen locally, on CI, or on a server.\n        it can also be triggered by a job,\n        a webhook, content update, prerender, etc.\n")),(0,r.kt)("h2",{id:"what-are-you-building"},"What are you building?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is your web app designed to be:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," a single page application (SPA) -- usually a data-rich, dynamic experience where most of, if not the entire page, is rendered ",(0,r.kt)("em",{parentName:"li"},"after")," page-load by JS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," If a SPA, do you need server-side rendering (such as for optimized performance, accessibility, and SEO)?"))),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," primarily static HTML with some isolated JS components that don't need to communicate with each other"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," static HTML with no DOM-manipulating JS required at runtime"))),(0,r.kt)("li",{parentName:"ul"},"What browsers and devices do you need to optimize for?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Who is your audience? Is this app for a specific organization\u2019s internal use or the general public?"),(0,r.kt)("li",{parentName:"ul"},"What kind of access do they have? Primarily desktop or mobile? Reliable, high speed network access, or offline-first? High or low-end devices?"),(0,r.kt)("li",{parentName:"ul"},"Are there specific browsers or network restrictions they are required to use when interacting with your app?"),(0,r.kt)("li",{parentName:"ul"},'Also consider screen size, touch vs. no touch, screen readers, and low network/offline access. Centering thinking around "desktop vs. mobile" is usually a trap -- there are laptops with touch screens, tablets in every size, and there are no guarantees that a user won\'t try to access your URL from a Nintendo Switch or a Kindle. Focus on feature-detection over device-detection.'),(0,r.kt)("li",{parentName:"ul"},"Should it be a ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/web/progressive-web-apps/"},"progressive web app"),"?")))),(0,r.kt)("h2",{id:"how-will-you-build-it"},"How will you build it?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Even if you answered \u201cstatic HTML\u201d above, that doesn\u2019t mean you have to write and maintain HTML files by hand. You can still take advantage of tools like JS frameworks and compilers to componentize UI elements, fetch and organize content, and test the DOM output. It may just mean generating static markup at compile time, instead of serving JS directly to users.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How will the markup (HTML) be rendered?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Static assets (i.e., HTML/JS files uploaded to a web server)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If static assets, what kind of client-side code will you be writing?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Native HTML / CSS / JS (including external scripts or libraries loaded into the DOM)"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Code requiring a compile step to be browser-compatible (such as ES6+, TypeScript, and SCSS)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'See "Additional considerations if using a build tool" below'))))))),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," A server application will be responsible for returning HTML",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How will the server compile markup? Will it use a templating language (i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},".erb")," in a Rails application)?"),(0,r.kt)("li",{parentName:"ul"},"Do you need to augment server-rendered markup with CSS or client-side JS?"),(0,r.kt)("li",{parentName:"ul"},"Will there be any DOM manipulation after page load?"),(0,r.kt)("li",{parentName:"ul"},"Try to identify which UI elements will be rendered or manipulated by the server vs. client-side JS"),(0,r.kt)("li",{parentName:"ul"},"Consider serving markup from a Node.JS server in order to share templates and code across the stack."))))),(0,r.kt)("li",{parentName:"ul"},"Do you need to include other assets such as fonts, images, or SVG?")),(0,r.kt)("h3",{id:"additional-considerations-if-using-a-build-tool"},"Additional considerations if using a build tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"["," ","]"," What tool to use? (webpack, gulp, rollup, parcel, etc.)"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," What environment to build in (Node version)"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Do you need loaders for any or all of HTML, CSS, JS, static files?"),(0,r.kt)("li",{parentName:"ul"},"For JS:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What JS version(s) do you want to write in and target? (i.e., ES6 > ES5)"),(0,r.kt)("li",{parentName:"ul"},"What will you use to transpile JS (i.e., Babel)"),(0,r.kt)("li",{parentName:"ul"},"Do you need additional polyfills or plugins for your target output?"),(0,r.kt)("li",{parentName:"ul"},"Do you want static type checking? (TypeScript / flow / PropTypes)"),(0,r.kt)("li",{parentName:"ul"},"What will you use for running scripts and managing dependencies (npm or yarn)?"),(0,r.kt)("li",{parentName:"ul"},"Will you use a JS framework (React, vue, etc.)?"))),(0,r.kt)("li",{parentName:"ul"},"For CSS:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How do you want to write CSS?"),(0,r.kt)("li",{parentName:"ul"},"What classname conventions do you want to use? (BEM, OOCSS)"),(0,r.kt)("li",{parentName:"ul"},"Normalize (resets native browser CSS to one standard)"),(0,r.kt)("li",{parentName:"ul"},"Autoprefixer (automatically adds browser prefixes to newer CSS features that may not have consistent support or syntax)"),(0,r.kt)("li",{parentName:"ul"},"Pre-/post-compilers (SASS/SCSS, LESS, PostCSS)"),(0,r.kt)("li",{parentName:"ul"},"CSS modules"),(0,r.kt)("li",{parentName:"ul"},"CSS-in-JS (styled components, etc.)")))),(0,r.kt)("h3",{id:"additional-considerations-if-building-a-spa"},"Additional considerations if building a SPA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Global state management (Redux, context, etc.)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," side effects (sagas, thunks, hooks?)"))),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Client-side routing"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Managing head/meta/title tags"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," XHR/fetch service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"What kind of API(s) do you need to interact with? (REST, GraphQL)"))),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Static asset loading (HTML, CSS, images, fonts, SVGs, etc.)")),(0,r.kt)("h3",{id:"user-interaction"},"User Interaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forms",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Validating"),(0,r.kt)("li",{parentName:"ul"},"Submitting"),(0,r.kt)("li",{parentName:"ul"},"Showing output"))),(0,r.kt)("li",{parentName:"ul"},"File uploads")),(0,r.kt)("h3",{id:"managing--displaying-content"},"Managing & Displaying Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static content from the code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"i18n"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic content from a CMS, API, etc."),(0,r.kt)("li",{parentName:"ul"},"User-generated content (UGC)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Escaping entities"),(0,r.kt)("li",{parentName:"ul"},"Formatting")))),(0,r.kt)("h3",{id:"maintaining-code-standards--developer-tools"},"Maintaining code standards & developer tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Linting/formatting (eslint, prettier, stylelint)"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Commit hooks (husky)"),(0,r.kt)("li",{parentName:"ul"},"Browser dev tools"),(0,r.kt)("li",{parentName:"ul"},"React developer tools"),(0,r.kt)("li",{parentName:"ul"},"Redux debugger")),(0,r.kt)("h3",{id:"working-with-design"},"Working with Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pre-fab frameworks (i.e., Bootstrap, MaterialUI, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Component-driven development",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maintain component libraries for documentation and testing (i.e., Storybook)"),(0,r.kt)("li",{parentName:"ul"},"Build and view UI components outside the context of the application (don't need to connect to API, database, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Iterate on UI elements over time"),(0,r.kt)("li",{parentName:"ul"},"Automate cross-browser/device testing by using this with visual testing tools (see below)"))),(0,r.kt)("li",{parentName:"ul"},"How do you want to render icons? SVGs? FontAwesome?")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit tests",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test small pieces or components in isolated environments"),(0,r.kt)("li",{parentName:"ul"},"Good to run continuously during development, as well as part of CI checks"),(0,r.kt)("li",{parentName:"ul"},"Jest, Testing Library"))),(0,r.kt)("li",{parentName:"ul"},"Integration tests",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test larger chunks of the app and how they work together with partial or complete context"),(0,r.kt)("li",{parentName:"ul"},"Good to run continuously during development, as well as part of CI checks"),(0,r.kt)("li",{parentName:"ul"},"Jest, Testing Library, Enzyme"))),(0,r.kt)("li",{parentName:"ul"},"End-to-end (E2E) tests",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test complete user flows in the browser, as if you were a user"),(0,r.kt)("li",{parentName:"ul"},"Most often useful for high-level regression tests and critical paths"),(0,r.kt)("li",{parentName:"ul"},"Testing in different environments (browsers, devices) can be useful at this point"),(0,r.kt)("li",{parentName:"ul"},"Heavy load, often best done in CI"),(0,r.kt)("li",{parentName:"ul"},"Good to run during development for high-level changes such as refactors, changing URLs or entrypoints"),(0,r.kt)("li",{parentName:"ul"},"Cypress, Saucelabs, Browserstack"))),(0,r.kt)("li",{parentName:"ul"},"Visual testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Scripts that crawl through URLs or component libraries and take screenshots"),(0,r.kt)("li",{parentName:"ul"},"Tests pass or fail when the images are compared to references"),(0,r.kt)("li",{parentName:"ul"},"Heavy load, often best done in CI"),(0,r.kt)("li",{parentName:"ul"},"Happo, Loki, Percy"))),(0,r.kt)("li",{parentName:"ul"},"Accessibility Testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can be done through unit/integration testing and/or end to end."),(0,r.kt)("li",{parentName:"ul"},"pa11y, axe-core, Cypress audit")))),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How will the front end code fit in with the rest of the application ecosystem, other systems and services?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Where will front end assets be hosted? Do they need their own CI/CD pipeline?"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," Will you use a CDN, and how will you manage caching?"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," How will you manage non-code assets, like images and fonts?"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," If making API calls to an internal backend, what will the various environments and domains be? Will you need to set up CORS and/or CSRF protection?")))),(0,r.kt)("h2",{id:"optimization"},"Optimization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build tool config/integrations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"["," ","]"," an asset manifest"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," sourcemaps"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," versioning/hashing"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," code splitting/chunking/dynamic imports"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," absolute imports"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," bundle analyzer"),(0,r.kt)("li",{parentName:"ul"},"["," ","]"," minification")))))}m.isMDXComponent=!0}}]);