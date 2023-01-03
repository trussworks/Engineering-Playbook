"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[7024],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(8209);const i={},l="Programming Languages",o={unversionedId:"developing/languages/README",id:"developing/languages/README",title:"Programming Languages",description:"Overview",source:"@site/docs/developing/languages/README.md",sourceDirName:"developing/languages",slug:"/developing/languages/",permalink:"/docs/developing/languages/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/languages/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Health Checks",permalink:"/docs/developing/healthcheck/"},next:{title:"Shell programming",permalink:"/docs/developing/languages/BASH"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Languages Trussels are proficient in",id:"languages-trussels-are-proficient-in",level:2},{value:"Language Resources",id:"language-resources",level:2},{value:"Cross-Language Patterns",id:"cross-language-patterns",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"SQL",id:"sql",level:3},{value:"Query Log Observability",id:"query-log-observability",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"programming-languages"},"Programming Languages"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This section will contain our collective observations about the strengths and challenges offered up by many of the different programming languages out there."),(0,r.kt)("p",null,"While Truss may have opinions on particular languages and strategic reasons for investing in some languages over others, we recognize that our clients will may make different choices for different reasons. As such, Trussels should aim to be proficient in more than one language and able to get by with several."),(0,r.kt)("h2",{id:"languages-trussels-are-proficient-in"},"Languages Trussels are proficient in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/languages/GO"},"Go")),(0,r.kt)("li",{parentName:"ul"},"JavaScript (including TypeScript/FlowScript)"),(0,r.kt)("li",{parentName:"ul"},"Swift"),(0,r.kt)("li",{parentName:"ul"},"Rust"),(0,r.kt)("li",{parentName:"ul"},"Kotlin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/languages/ruby/"},"Ruby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/languages/python/"},"Python")),(0,r.kt)("li",{parentName:"ul"},"Java"),(0,r.kt)("li",{parentName:"ul"},"C/C++"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developing/languages/BASH"},"bash")),(0,r.kt)("li",{parentName:"ul"},"SQL")),(0,r.kt)("h2",{id:"language-resources"},"Language Resources"),(0,r.kt)("h3",{id:"cross-language-patterns"},"Cross-Language Patterns"),(0,r.kt)("p",null,"In many projects, it is fairly common to have interoperation between disparate\nlanguages, e.g. a Python codebase that also builds an OpenAPI spec or Go\nentities that are marshaled into JSON."),(0,r.kt)("p",null,"As a general guideline, it is recommended to use identifiers that are idiomatic\nto the destination representation. For example, prefer using ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase")," with\nJSON APIs."),(0,r.kt)("p",null,"Some things to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Swagger/OpenAPI specs are intended to be JSON (or YAML), so whether you're\ncoming from Python (",(0,r.kt)("inlineCode",{parentName:"li"},"snake_case"),") or BASIC (",(0,r.kt)("inlineCode",{parentName:"li"},"CAPITAL_CASE"),") or Go\n(",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase"),"), prefer to output JSON with idiomatic ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase")," identifiers."),(0,r.kt)("li",{parentName:"ul"},"Structured logging usually uses JSON as the destination structure, so when\ncreating log attributes/names, prefer JSON idiomatic identifiers in\n",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase")," where possible."),(0,r.kt)("li",{parentName:"ul"},'Go\'s idiomatic "acronyms should be capitalized" is actually lossy when it\ncomes to acronym/word boundaries, so carefully consider where you apply that\ncapitalization rule. For example, some code generators might turn the\nidentifier ',(0,r.kt)("inlineCode",{parentName:"li"},"ExampleHTTPID")," into a filename that looks like\n",(0,r.kt)("inlineCode",{parentName:"li"},"example_h_t_t_p_i_d.txt"),", but if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"ExampleHttpId")," the generator has\na much better chance of spitting out something reasonable like\n",(0,r.kt)("inlineCode",{parentName:"li"},"example_http_id.txt"),".")),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"Important JS patterns and features to understand:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Destructuring Assignment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://wesbos.com/destructuring-objects/"},"A Dead Simple Intro to Destructuring JavaScript Objects")))),(0,r.kt)("li",{parentName:"ul"},"Fat Arrow Functions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@thejasonfile/es5-functions-vs-es6-fat-arrow-functions-864033baa1a"},"ES5 Functions vs ES6 Fat Arrow Functions")))),(0,r.kt)("li",{parentName:"ul"},"Higher Order Components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/react-higher-order-components/"},"Higher Order Components: A React Application Design Pattern")))),(0,r.kt)("li",{parentName:"ul"},"Promises",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/"},"An incremental tutorial on promises")))),(0,r.kt)("li",{parentName:"ul"},"Spread Operator/Rest Params",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codeburst.io/javascript-the-spread-operator-a867a71668ca"},"JavaScript & The Spread Operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dmitripavlutin.com/how-three-dots-changed-javascript/"},"How Three Dots Changed JavaScript")))),(0,r.kt)("li",{parentName:"ul"},"Template Literals",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://css-tricks.com/template-literals/"},"Template Literals")))),(0,r.kt)("li",{parentName:"ul"},"React and Typescript",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/trussworks/Engineering-Playbook/tree/master/web/frontend"},"Truss resources for React, Typescript, and front end tooling"))))),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("h4",{id:"query-log-observability"},"Query Log Observability"),(0,r.kt)("p",null,"Did you know that SQL dialects have provisions for leaving comments within their queries? The following observability hint comes directly from ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/database-reliability-engineering/9781491925935/?sortby=bestSellers"},"Database Reliability Engineering"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When doing SQL tuning, a big challenge is mapping SQL running in the database to the specific place in the codebase from which it is being called. In many database engines, you can add comments for information. These comments will show up in the database query logs. This is a great place to insert the codebase location.")),(0,r.kt)("p",null,"Some relevant docs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-COMMENTS"},"Postgres")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/comments.html"},"MySQL"))),(0,r.kt)("p",null,"Additionally, if you have a request-scoped identifier (e.g. a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"traceID"),"), you might be able to weave that into a built SQL query to give even finer-grained visibility."),(0,r.kt)("p",null,"A quick example code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (s *Store) listSystems(ctx context.Context) ([]*models.System, error) {\n  results := []*models.System{}\n  comment := fmt.Sprintf("/* storage/system.go:listSystems %s */", appcontext.TraceID(ctx))\n  err := s.db.Select(&results, comment+sqlListSystems)\n  if err != nil {\n    appcontext.ZLogger(ctx).Error("Failed to fetch systems", zap.Error(err))\n    return nil, err\n  }\n  return results, nil\n}\n')),(0,r.kt)("p",null,"Results in query log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"2021-02-09 16:59:18.686 UTC [456] LOG:  statement: /* storage/system.go:listSystems 211956de-ebc3-4096-8496-329c622dba2a */\n  SELECT\n    id, created_at, updated_at, project_name\n  FROM system_intake\n  WHERE\n    status='LCID_ISSUED' AND request_type='NEW' AND lcid IS NOT NULL;\n")))}c.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);