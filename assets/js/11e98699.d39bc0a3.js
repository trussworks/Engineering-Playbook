"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=r,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(8209);const i={},o="Building a React App from Scratch",l={unversionedId:"web/frontend/react",id:"web/frontend/react",title:"Building a React App from Scratch",description:"This is a WIP: Updated Recommendations Coming Soon!",source:"@site/docs/web/frontend/react.md",sourceDirName:"web/frontend",slug:"/web/frontend/react",permalink:"/docs/web/frontend/react",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/frontend/react.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"Project Checklist",permalink:"/docs/web/frontend/project-checklist"},next:{title:"Testing",permalink:"/docs/web/frontend/testing"}},s={},p=[{value:"Tools",id:"tools",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Testing",id:"testing",level:2},{value:"Jasmine alone",id:"jasmine-alone",level:3},{value:"Karma, integrating Jasmine and possibly other test frameworks",id:"karma-integrating-jasmine-and-possibly-other-test-frameworks",level:3},{value:"Notes on each option",id:"notes-on-each-option",level:2},{value:"Jasmine",id:"jasmine",level:2},{value:"Karma",id:"karma",level:2},{value:"Enzyme",id:"enzyme",level:2},{value:"Jest",id:"jest",level:2},{value:"Mocha",id:"mocha",level:2},{value:"Chutzpah",id:"chutzpah",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-a-react-app-from-scratch"},"Building a React App from Scratch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is a WIP: Updated Recommendations Coming Soon!")),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("p",null,"View Layer: ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")),(0,r.kt)("p",null,"Application State Management: ",(0,r.kt)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux")," + ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-redux"},"React-Redux")," (",(0,r.kt)("a",{parentName:"p",href:"https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree"},"Tutorial"),")"),(0,r.kt)("p",null,"Javascript: ",(0,r.kt)("a",{parentName:"p",href:"https://leanpub.com/understandinges6/read"},"ES6")," with ",(0,r.kt)("a",{parentName:"p",href:"http://babeljs.io/"},"Babel")," compiler"),(0,r.kt)("p",null,"Web Framework: ",(0,r.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"Express")),(0,r.kt)("p",null,"Linter: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint"},"ESLint")),(0,r.kt)("p",null,"React Source Code: ",(0,r.kt)("a",{parentName:"p",href:"https://react.rocks/tag/Bootstrap"},"Examples")),(0,r.kt)("p",null,"Module Bundler: ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.github.io/"},"Webpack")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MoOx/eslint-loader"},"ESLint Loader")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"Babel Loader")),(0,r.kt)("p",null,"Style Guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbnb/javascript"},"Example 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbnb/javascript/tree/master/react"},"Example 2"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://blog.andrewray.me/the-reactjs-controller-view-pattern/"},"The ReactJS Controller View Pattern")),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/"},"React.js Tutorial Pt 1: A Comprehensive Guide to Building Apps with React.js"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/"},"Tyler McGinnis"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/"},"Sitepoint"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://blog.krawaller.se/posts/a-react-redux-example-app/"},"The Superhero battler app"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html"},"Teropa"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://hashnode.com/post/react-tutorial-using-mern-stack-ciiyus9m700qqge53mer0isxz"},"React Tutorial Using the MERN Stack"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html"},"Full Stack Redux Tutorial"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://survivejs.com/webpack_react/react_and_flux/"},"React & Flux")),(0,r.kt)("p",null,"Resources for above tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSX"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/jsx-in-depth.html"},"In-depth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/jsx-gotchas.html"},"Gotchas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jsx.github.io/"},"Official site")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Virtual DOM"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://jbi.sh/what-is-virtual-dom/"},"Disambiguation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/glossary.html"},"Glossary")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Router"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/reactjs/react-router"},"Github repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.themarketingtechnologist.co/react-router-an-introduction/"},"A Comprehensive Introduction"))))),(0,r.kt)("p",null,"Key Javascript Concepts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://ryanmorr.com/understanding-scope-and-context-in-javascript/"},"Scope & Context")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/"},"ES6 Fat Arrow Functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.datchley.name/es6-rest-spread-defaults-and-destructuring/"},"ES6 Spread Operators")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.benmvp.com/learning-es6-enhanced-object-literals/"},"ES6 Object Literal Shorthand")),(0,r.kt)("p",null,"Other good articles"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.andyet.com/2015/08/06/what-the-flux-lets-redux/"},"Redux Shill"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://blog.andrewray.me/the-reactjs-controller-view-pattern/"},"MVC context")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Breanne\u2019s recommendation, after research\nEither Jasmine on its own, or Karma. Here\u2019s why:"),(0,r.kt)("h3",{id:"jasmine-alone"},"Jasmine alone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jasmine is an incredibly common standard, and we\u2019d gain a lot by learning to use it"),(0,r.kt)("li",{parentName:"ul"},"Flexible; works directly with a number of JS libraries and with others with a little adaptation work"),(0,r.kt)("li",{parentName:"ul"},"Lovely, clear, and abundant documentation"),(0,r.kt)("li",{parentName:"ul"},"Getting help, either online or within Truss, would probably be fairly straightforward")),(0,r.kt)("h3",{id:"karma-integrating-jasmine-and-possibly-other-test-frameworks"},"Karma, integrating Jasmine and possibly other test frameworks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows us to learn to use three different testing frameworks (Jasmine, Mocha, and QUnit), with the option of writing an adapter for any other framework we\u2019d like"),(0,r.kt)("li",{parentName:"ul"},"Tests on multiple browsers and devices"),(0,r.kt)("li",{parentName:"ul"},"Lets you use React import syntax"),(0,r.kt)("li",{parentName:"ul"},"Integrates with a number of different CIs, if we were so inclined"),(0,r.kt)("li",{parentName:"ul"},"We could add Enzyme, for easier use of React components, and a nice complement to Jasmine")),(0,r.kt)("h2",{id:"notes-on-each-option"},"Notes on each option"),(0,r.kt)("p",null,"A little on ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/test-utils.html"},"React\u2019s test utilities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They still require a testing framework to use, but they can provide the data needed to perform the tests."),(0,r.kt)("li",{parentName:"ul"},"Lets you simulate clicks, enter and submit text in an input field, find components that have particular class names, tags,  types,"),(0,r.kt)("li",{parentName:"ul"},"Shallow rendering lets you render components one level deep without worrying about child components.")),(0,r.kt)("h2",{id:"jasmine"},(0,r.kt)("a",{parentName:"h2",href:"http://jasmine.github.io/"},"Jasmine")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://revelry.co/react-testing-with-jasmine/"},"Jasmine Testing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seems to be the most widely used, certainly a standard in front-end testing"),(0,r.kt)("li",{parentName:"ul"},"Readable, easy-to-interpret function names"),(0,r.kt)("li",{parentName:"ul"},"Does not have instructions or helper code specifically for React/Redux, but does for many other JS libraries. The other instructions may be enough, but we might end up doing more tailoring to work with it than we would with, say, Karma.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://revelry.co/react-testing-with-jasmine/react-addons-test-utils"},"However...")),(0,r.kt)("li",{parentName:"ul"},"And ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tommyh/jasmine-react"},"this repo")," lets you use Jasmine with the more typical React syntax for creating components\n-Seems to be a pretty standard tool, so we might benefit from using it in learning a more transferrable skill")))),(0,r.kt)("p",null,"Handy, and also sounds like someone explaining a heist in a Guy Ritchie movie: ",(0,r.kt)("a",{parentName:"p",href:"https://egghead.io/lessons/react-unit-testing-a-react-component-using-jasmine-and-webpack"},"React Using Jasmine and Webpack")),(0,r.kt)("h2",{id:"karma"},(0,r.kt)("a",{parentName:"h2",href:"http://karma-runner.github.io/0.13/index.html"},"Karma")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.toptal.com/react/how-react-components-make-ui-testing-easy"},"Karma Testing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test runner")," (uses multiple external testing frameworks)"),(0,r.kt)("li",{parentName:"ul"},"Describe your tests with Jasmine, Mocha, QUnit, or write a simple adapter for any framework"),(0,r.kt)("li",{parentName:"ul"},"Uses the same modules (",(0,r.kt)("inlineCode",{parentName:"li"},"<TodoList />"),", etc.) involved in rendering to run the tests, no translation or alteration needed"),(0,r.kt)("li",{parentName:"ul"},"Run from the command line"),(0,r.kt)("li",{parentName:"ul"},"Test your code on real browsers and real devices such as phones, tablets or on a headless PhantomJS instance."),(0,r.kt)("li",{parentName:"ul"},"Most tests render, find a specific node, and test the contents"),(0,r.kt)("li",{parentName:"ul"},"Emulates multiple browsers"),(0,r.kt)("li",{parentName:"ul"},"Integrates with a number of CIs and other JS frameworks")),(0,r.kt)("h2",{id:"enzyme"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/airbnb/enzyme"},"Enzyme")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbnb/enzyme/blob/master/docs/guides/react-native.md"},"Documentation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/blainekasten/jasmine-enzyme"},"Use with Jasmine")),(0,r.kt)("li",{parentName:"ul"},"Made for React"),(0,r.kt)("li",{parentName:"ul"},"Works with Karma and other test runners"),(0,r.kt)("li",{parentName:"ul"},"Shallow and full DOM rendering"),(0,r.kt)("li",{parentName:"ul"},"Uses the same modules (",(0,r.kt)("inlineCode",{parentName:"li"},"<TodoList />"),", etc.) involved in rendering to run the tests, no translation or alteration needed"),(0,r.kt)("li",{parentName:"ul"},"Could be a good addition to Jasmine if we elect to use Karma")),(0,r.kt)("h2",{id:"jest"},(0,r.kt)("a",{parentName:"h2",href:"https://facebook.github.io/jest/"},"Jest")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Facebook\u2019s own testing suite"),(0,r.kt)("li",{parentName:"ul"},"Facebook would like you to use it"),(0,r.kt)("li",{parentName:"ul"},"Other people are not so into it"),(0,r.kt)("li",{parentName:"ul"},"Doesn\u2019t support running in multiple browsers"),(0,r.kt)("li",{parentName:"ul"},"Good reasons why not ",(0,r.kt)("a",{parentName:"li",href:"https://www.toptal.com/react/how-react-components-make-ui-testing-easy"},"here:"))),(0,r.kt)("h2",{id:"mocha"},(0,r.kt)("a",{parentName:"h2",href:"http://mochajs.org"},"Mocha")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test framework running on Node.js and in the browser"),(0,r.kt)("li",{parentName:"ul"},"Asynchronous testing"),(0,r.kt)("li",{parentName:"ul"},"Access through the terminal"),(0,r.kt)("li",{parentName:"ul"},"Speed tests available for some tests\nbefore() and after() hooks reminiscent of setup and teardown in Xcode"),(0,r.kt)("li",{parentName:"ul"},"Nyan reporter (yep)")),(0,r.kt)("h2",{id:"chutzpah"},(0,r.kt)("a",{parentName:"h2",href:"http://mmanela.github.io/chutzpah/"},"Chutzpah")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mmanela/chutzpah/wiki"},"Documentation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test runner which enables you to run unit tests using QUnit, Jasmine, Mocha, CoffeeScript and TypeScript"),(0,r.kt)("li",{parentName:"ul"},"Access through the terminal"),(0,r.kt)("li",{parentName:"ul"},"Basically, yeah, another test runner.")))}m.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);