"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));n(8209);const r={},o="0002 - Use OpenTelemetry to instrument code for distributed tracing",l={unversionedId:"appeng/adrs/distributed-tracing",id:"appeng/adrs/distributed-tracing",title:"0002 - Use OpenTelemetry to instrument code for distributed tracing",description:"Status: Accepted",source:"@site/docs/appeng/adrs/0002-distributed-tracing.md",sourceDirName:"appeng/adrs",slug:"/appeng/adrs/distributed-tracing",permalink:"/docs/appeng/adrs/distributed-tracing",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/appeng/adrs/0002-distributed-tracing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"practices",previous:{title:"0001 - Preference to use TypeScript in place of JavaScript",permalink:"/docs/appeng/adrs/use-typescript"},next:{title:"0003 Open Source Application Code",permalink:"/docs/appeng/adrs/open-source-application-code"}},s={},p=[{value:"Context",id:"context",level:2},{value:"Objective",id:"objective",level:3},{value:"Why Distributed Tracing?",id:"why-distributed-tracing",level:3},{value:"ADR Goals and Anti-goals",id:"adr-goals-and-anti-goals",level:3},{value:"Decision",id:"decision",level:2},{value:"Use OpenTelemetry",id:"use-opentelemetry",level:3},{value:"Why is this Applicable to the Practice as a Whole",id:"why-is-this-applicable-to-the-practice-as-a-whole",level:2},{value:"When to Not Implement This Decision",id:"when-to-not-implement-this-decision",level:2},{value:"Alternatives Considered",id:"alternatives-considered",level:2},{value:"Use a vendor&#39;s instrumentation libraries",id:"use-a-vendors-instrumentation-libraries",level:3},{value:"Do not instrument",id:"do-not-instrument",level:3},{value:"Links",id:"links",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0002---use-opentelemetry-to-instrument-code-for-distributed-tracing"},"0002 - Use OpenTelemetry to instrument code for distributed tracing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status:")," Accepted"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Accepted:")," 12/8/2021"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reviewers:")," @ahobson @felipe-lee @gidjin @jim @macrael @mikena-truss @reggieriser @rogeruiz"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("h3",{id:"objective"},"Objective"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Give developers and operators an easier way to understand the behavior and\nstructure of running systems by instrumenting code for distributed tracing,\nleading to a more consistent experience for the systems' users.")),(0,i.kt)("h3",{id:"why-distributed-tracing"},"Why Distributed Tracing?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Observability is defined as the ability of the internal states of a system to\nbe determined by its external outputs.")),(0,i.kt)("p",null,"There are several established techniques for gaining observability into complex\nsoftware systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logging",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for known knowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "I want to know when a specific condition is reached"'))),(0,i.kt)("li",{parentName:"ul"},"Metrics",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for assessing known unknowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "How many requests per second was the system handling last Tuesday?"'))),(0,i.kt)("li",{parentName:"ul"},"Distributed Tracing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for learning about unknown unknowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "What was the execution context for User X that caused their\ninteraction to timeout last Tuesday?"')))),(0,i.kt)("p",null,"Some of the benefits of distributed tracing as outlined in\n",(0,i.kt)("a",{parentName:"p",href:"https://petabridge.com/blog/why-use-distributed-tracing/"},(0,i.kt)("em",{parentName:"a"},"How Distributed Tracing Solves One of the Worst Microservices Problems")),"\nare:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"radically improves developer productivity and output"),(0,i.kt)("li",{parentName:"ul"},"works across multiple applications, programming languages, and transports"),(0,i.kt)("li",{parentName:"ul"},"improve time to market"),(0,i.kt)("li",{parentName:"ul"},"facilitates excellent cross-team communication and cooperation")),(0,i.kt)("p",null,"Here are several example scenarios or questions that distributed tracing can\nhelp answer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a new engineer on the team, I want to understand how many separate systems\nare involved when a certain user type logs in and the first page is rendered."),(0,i.kt)("li",{parentName:"ul"},"As an operations engineer, I want to know how many SQL queries are executed\nfor a given endpoint or interaction."),(0,i.kt)("li",{parentName:"ul"},"As a product manager, I want to know if a new feature is being used by a\ncertain cohort of users on a regular basis."),(0,i.kt)("li",{parentName:"ul"},"As an engineer, I want to prove that an optimization I wrote is effective\nin a production environment."),(0,i.kt)("li",{parentName:"ul"},"As a load tester, after I have shown that a problem exists, I want to\nunderstand how the system is interacting so I can debug and fix the issue.")),(0,i.kt)("h3",{id:"adr-goals-and-anti-goals"},"ADR Goals and Anti-goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Goal: Choose which set of libraries to use within a codebase (across\nprogramming languages) for generating distributed tracing data"),(0,i.kt)("li",{parentName:"ul"},'Anti-goal: Committing to a specific "backend", i.e. platform or service for\ngathering, exploring, and displaying trace information',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sub-goal: Leaving open as many options as possible for the backend")))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("h3",{id:"use-opentelemetry"},"Use OpenTelemetry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry is an emerging industry standard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vendors find benefit of being in the OpenTelemetry ecosystem because they\nno longer have to create or support instrumentation libraries in an ever\ngrowing array of languages, i.e. as soon as language library exists for\nOpenTelemetry, the vendors automatically become available to support that\ngiven language."))),(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry is vendor agnostic",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tracing information can be sent to hosted services (e.g. Honeycomb.io, AWS\nX-Ray, etc) or self-hosted Open Source implementations (e.g. Zipkin, Jaeger,\netc)"),(0,i.kt)("li",{parentName:"ul"},"if left unconfigured, OpenTelemetry instrumentation calls default to\nlightweight/noop executions"))),(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry has well-maintained libraries for the languages used in the\nlayers of most Truss projects",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"i.e. Go (back-end); JavaScript (front-end); Python (load testing); etc"))),(0,i.kt)("li",{parentName:"ul"},"Easily swappable back-ends",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. could choose a local Docker version of OpenZipkin for an all-local\ndevelopment environment"),(0,i.kt)("li",{parentName:"ul"},"e.g. can use Honeycomb.io in the experimental commercial-cloud hosted\nenvironment"),(0,i.kt)("li",{parentName:"ul"},"e.g. can swap in AWS X-Ray for use in GovCloud hosted environments"))),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"as an abstraction layer, OpenTelemetry may prohibit usage of vendor-specific\ncapabilities"),(0,i.kt)("li",{parentName:"ul"},"some OpenTelemetry libraries and tools may trail their vendor-supported\ncounterparts"),(0,i.kt)("li",{parentName:"ul"},"instrumentation for tracing may be a vector for performance overhead"),(0,i.kt)("li",{parentName:"ul"},"the specification is relatively new so you may have to use pre-1.0\nversions of some libraries")))),(0,i.kt)("h2",{id:"why-is-this-applicable-to-the-practice-as-a-whole"},"Why is this Applicable to the Practice as a Whole"),(0,i.kt)("p",null,"Most applications will benefit from instrumentation once they are accepting\nproduction traffic. For many systems, a significant amount of work is required\nto add tracing calls to the code after substantial development has been\ncompleted. Therefore, instrumentation needs to be part of the development\nprocess early in a project."),(0,i.kt)("p",null,"Projects should identify what types of calls need to be traced as a part of\ndiscovery and document these decisions in a project-level ADR. For example,\na web backend might add tracing to HTTP requests, service invocations,\ndatabase calls, and any network requests made by the backend."),(0,i.kt)("h2",{id:"when-to-not-implement-this-decision"},"When to Not Implement This Decision"),(0,i.kt)("p",null,"Don't use OpenTelemetry if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ecosystem you are working in doesn't have a mature instrumentation\nlibrary"),(0,i.kt)("li",{parentName:"ul"},"the project already has a working instrumentation solution using a\nproprietary hosted service that is satisfying the project's needs"),(0,i.kt)("li",{parentName:"ul"},"the project is too small to support the effort required to implement\ntracing. If this is the case, it is probably worth investigating if there\nare other implementation options for the project, potentially in\nhigher-level languages or batteries-included frameworks."),(0,i.kt)("li",{parentName:"ul"},"it isn't possible to setup a backend to collect data")),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives Considered"),(0,i.kt)("h3",{id:"use-a-vendors-instrumentation-libraries"},"Use a vendor's instrumentation libraries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Enables accessing vendor-specific capabilities"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Vendor lock-in in code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"lock-in may be somewhat mitigated by translation layers available within\nthe OpenTelemetry ecosystem, at the expense of increased configuration burden"),(0,i.kt)("li",{parentName:"ul"},"example - choosing AWS X-Ray would work well in the deployed GovCloud\nenvironments, but it does not scale down to exclusively local development\nenvironments, i.e. X-Ray does not provide a UI for browsing distributed\ntraces with their local X-Ray daemon"),(0,i.kt)("li",{parentName:"ul"},"example - choosing Honeycomb.io's instrumentation libraries adds a lot of\nnice auto-instrumentation capabilities over OpenTelemetry, but since\nHoneycomb does not have FedRAMP (nor do most of their peers), the distributed\ntracing could not be enabled in the GovCloud deployed environments"),(0,i.kt)("li",{parentName:"ul"},"example - using an open source tool (e.g. OpenZipkin) can scale down to\nlocal development, but would require more infrastructure support to self-host\nthe data storage and UI tools in the GovCloud environments")))),(0,i.kt)("h3",{id:"do-not-instrument"},"Do not instrument"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," No work to be done"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," developers and operators continue to use current methods to build their\nunderstanding of the system, which is likely slower and less complete than when\nusing distributed tracing")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/_OXYCzwFd1Y"},"Modern Observability with OpenTelemetry")," (YouTube video, 12 minutes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://player.fm/series/the-infoq-podcast-2896265/ted-young-on-observability-and-the-release-of-opentelemetry-10"},"Ted Young on Observability and the Release of OpenTelemetry 1.0")," (The InfoQ Podcast, 33 minutes)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://petabridge.com/blog/why-use-distributed-tracing/"},"How Distributed Tracing Solves One of the Worst Microservices Problems")," (article)")))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);