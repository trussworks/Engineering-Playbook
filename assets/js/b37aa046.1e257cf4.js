"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8417],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},c="[Development Cycle](/docs/developing/cycle/) / Pivotal Tracker",p={unversionedId:"developing/cycle/tracker",id:"developing/cycle/tracker",title:"[Development Cycle](./README.md) / Pivotal Tracker",description:"Overview",source:"@site/docs/developing/cycle/tracker.md",sourceDirName:"developing/cycle",slug:"/developing/cycle/tracker",permalink:"/docs/developing/cycle/tracker",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/cycle/tracker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Tools and Practice](../README.md) / Development Cycle",permalink:"/docs/developing/cycle/"},next:{title:"[Tools and Practice](../README.md) / direnv",permalink:"/docs/developing/direnv/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Stories",id:"stories",level:2},{value:"State definitions",id:"state-definitions",level:3},{value:"Creating",id:"creating",level:3},{value:"Finishing / Delivering",id:"finishing--delivering",level:3},{value:"Accepting",id:"accepting",level:3},{value:"Weekly planning",id:"weekly-planning",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-cycle--pivotal-tracker"},(0,i.kt)("a",{parentName:"h1",href:"/docs/developing/cycle/"},"Development Cycle")," / Pivotal Tracker"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We use Pivotal Tracker to track tasks and estimate how much time each task will take."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd12",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1abmxQdYol6Zi3kR3U__JNJl3uPdKF9WPYWfu75AkZ50/edit#heading=h.yyb7wuihugn8"},"How to organize a Pivotal project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/articles/workflow_overview/"},"Pivotal workflow"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Remember, agile processes should be treated ",(0,i.kt)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=jl0hMfqNQ-g"},"more like guidelines than actual\nrules"),".")),(0,i.kt)("h2",{id:"stories"},"Stories"),(0,i.kt)("h3",{id:"state-definitions"},"State definitions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Started (waiting to be finished) -- The story is ",(0,i.kt)("em",{parentName:"p"},"actively")," being worked on.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finished (waiting to be delivered) -- The work is believed to be done. It may\nor may not have passed code review yet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delivered (waiting on acceptance) -- For code, this means it's landed in\nthe default branch and passed the build, or has gone all the way to production, whichever\nmakes sense for the story. For other work, use common sense."))),(0,i.kt)("h3",{id:"creating"},"Creating"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add enough information so anyone on the team can pick it up.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Include acceptance criteria (AC) to make it clear what "done" means and to\nhelp the person accepting the work know what to validate.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Leave the story unestimated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add it to the top of the inbox (at the top of icebox)."))),(0,i.kt)("h3",{id:"finishing--delivering"},"Finishing / Delivering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add comments, PRs, etc. to the story that will help someone else accept the work.")),(0,i.kt)("h3",{id:"accepting"},"Accepting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Throughout the week, everyone should take time to accept other people's work.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Look at the acceptance criteria, validate they've been met, and click the\ngreen button."))),(0,i.kt)("h2",{id:"weekly-planning"},"Weekly planning"),(0,i.kt)("p",null,"Weekly sprints begin with a planning session. It goes like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go through in progress stories"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Determine if the story is blocked.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a story will be blocked for an unknown amount of time, or if it's\nunlikely it'll be unblocked this week, move it into the \"blocked\" section\nof the icebox.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Go through "blocked" section of the icebox'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a story is no longer blocked, move it into backlog.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a story has been blocked for more than a few weeks, delete it or move it\nto the bottom of the icebox. Own up to the fact that it's not getting done.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If a "really important" story has been blocked for more than a few weeks,\nprioritize unblocking it: create a new chore to do the work that it will\ntake to unblock it and move it to the top of the backlog.')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go through the inbox"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Read each story and make sure everyone understands what it means. If there\nis missing context, acceptance criteria, etc. then add that in.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the story is work that needs to be done soon, ro-sham-bo for points,\ndiscuss any differences, and move into the backlog.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the story can wait, move it into the icebox for later. Having good tags\n(debt, security, etc.) can help uncover them later."))))))}d.isMDXComponent=!0}}]);