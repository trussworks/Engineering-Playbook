"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5859],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2293:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={},s="GraphQL API",p={unversionedId:"web/api/GraphQL-Design-Guide",id:"web/api/GraphQL-Design-Guide",title:"GraphQL API",description:"This guide was heavily influenced by https://graphql.org/learn/best-practices/",source:"@site/docs/web/api/GraphQL-Design-Guide.md",sourceDirName:"web/api",slug:"/web/api/GraphQL-Design-Guide",permalink:"/docs/web/api/GraphQL-Design-Guide",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/web/api/GraphQL-Design-Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Engineering Playbook](../../README.md) / [Web Development](../README.md) / API Guide",permalink:"/docs/web/api/"},next:{title:"[Engineering Playbook](../../../README.md) / [Web Development](../../README.md) / [API Guide](../README.md) / REST API Design",permalink:"/docs/web/api/rest-api-design/"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Principles",id:"principles",level:2},{value:"Building GraphQL APIs",id:"building-graphql-apis",level:3},{value:"Schema First",id:"schema-first",level:4},{value:"Versioning and Backwards Compatibility",id:"versioning-and-backwards-compatibility",level:4},{value:"Mutations Communicate Intent",id:"mutations-communicate-intent",level:4},{value:"Errors and Nullability",id:"errors-and-nullability",level:4},{value:"Pagination",id:"pagination",level:4},{value:"Caching",id:"caching",level:4},{value:"Errors",id:"errors",level:4},{value:"Tooling",id:"tooling",level:3}],h={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphql-api"},"GraphQL API"),(0,i.kt)("p",null,"This guide was heavily influenced by ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/"},"https://graphql.org/learn/best-practices/")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who is the audience for this guide"),(0,i.kt)("li",{parentName:"ul"},"Who is the audience for the API")),(0,i.kt)("h2",{id:"principles"},"Principles"),(0,i.kt)("p",null,"One of the most important things to keep in mind when building a\nGraphQL API is that GraphQL is not REST. In particular, GraphQL is\nmost powerful when used as a way to model your problem domain. This is\nprobably not an exact 1:1 mapping with your database models."),(0,i.kt)("p",null,"GraphQL is ... a graph. Graphs offer a ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/thinking-in-graphs/"},"different way of\nthinking")," or modeling\nyour data than you may be used to."),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"https://graphql-rules.com"},"GraphQL Rules")," for additional recommendations and best practices"),(0,i.kt)("h3",{id:"building-graphql-apis"},"Building GraphQL APIs"),(0,i.kt)("h4",{id:"schema-first"},"Schema First"),(0,i.kt)("p",null,"Prefer schema first tooling that allows producers and consumers agree\nupon a data shape prior to implementation.  This allows a discussion\nabout the problem domain that is independent of the technology being\nused on either side of the API."),(0,i.kt)("p",null,"By designing your GraphQL schema to fit the way you want to think\nabout the data instead of your implementation, you can evolve your\nimplementation without changing clients."),(0,i.kt)("h4",{id:"versioning-and-backwards-compatibility"},"Versioning and Backwards Compatibility"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/#versioning"},"Versioning"),"\nsection of GraphQL Best Practices describes why GraphQL APIs should be\nbackwards compatible and not versioned. ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/blog/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5/"},"Building Evolvable\nSchemas"),"\nhas some concrete advice on how to structure your schema."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@calebmer/when-to-use-graphql-non-null-fields-4059337f6fc8"},"Nullability also influences schema\nevolution"),",\nso think carefully about which fields to require."),(0,i.kt)("h4",{id:"mutations-communicate-intent"},"Mutations Communicate Intent"),(0,i.kt)("p",null,"GraphQL mutations should be specific enough to communicate the intent\nof the change.  Avoid ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@__xuorig__/graphql-mutation-design-anemic-mutations-dd107ba70496"},"anemic\nmutations")),(0,i.kt)("h4",{id:"errors-and-nullability"},"Errors and Nullability"),(0,i.kt)("p",null,"GraphQL is designed for returning as much data as possible, even if an\nerror occurs.  That can be ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@calebmer/when-to-use-graphql-non-null-fields-4059337f6fc8"},"surprising"),", and surprisingly powerful."),(0,i.kt)("p",null,"That means both data and errors can be returned."),(0,i.kt)("h4",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/pagination/"},"Pagination")," can heavily\ninfluence schema design. The concept of ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"GraphQL\nConnections")," is yet another\nnew and powerful concept to grasp when designing a schema.  By\nthinking about this early, you can avoid having to make breaking\nchanges to your schema."),(0,i.kt)("p",null,"Simplicity is nice when first starting out and prototyping, but\nit is ",(0,i.kt)("em",{parentName:"p"},"strongly")," recommended to use the connection concept when using\nthe schema in production."),(0,i.kt)("h4",{id:"caching"},"Caching"),(0,i.kt)("p",null,"GraphQL prefers to use GUID for objects to facilitate\n",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/caching/"},"Caching"),"."),(0,i.kt)("h4",{id:"errors"},"Errors"),(0,i.kt)("p",null,"Error handling in GraphQL is ",(0,i.kt)("a",{parentName:"p",href:"https://blog.atomist.com/error-handling-in-graphql/"},"not fully\nstandardized"),"."),(0,i.kt)("p",null,"Some folks are using ",(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/handling-graphql-errors-like-a-champ-with-unions-and-interfaces/"},"unions and interfaces to handle\nerrors"),"\nto encode errors in the response data instead of in the basically\nuntyped ",(0,i.kt)("inlineCode",{parentName:"p"},"errors")," field. This makes the most sense for errors that are\nspecific to the operation being made that you want the client to\nhandle gracefully. It also encourages you to include errors as part of\nyour domain modeling, which is a good thing."),(0,i.kt)("h3",{id:"tooling"},"Tooling"),(0,i.kt)("p",null,"Using a schema linter (such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cjoudrey/graphql-schema-linter"},"graphql-schema-linter"),") and running it as part of your pre-commit checks is recommended. Some of the defaults of such linters may be optimized for large public APIs and should be adjusted to best suit your project."))}d.isMDXComponent=!0}}]);