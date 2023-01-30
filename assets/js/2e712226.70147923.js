"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||h[g]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={},i="Go",l={unversionedId:"developing/languages/GO",id:"developing/languages/GO",title:"Go",description:"Overview",source:"@site/docs/developing/languages/GO.md",sourceDirName:"developing/languages",slug:"/developing/languages/GO",permalink:"/docs/developing/languages/GO",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/languages/GO.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"Shell programming",permalink:"/docs/developing/languages/BASH"},next:{title:"Python",permalink:"/docs/developing/languages/python/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning Resources",id:"learning-resources",level:2},{value:"References",id:"references",level:3},{value:"Tours/Lessons",id:"tourslessons",level:3},{value:"Testing",id:"testing",level:2},{value:"General",id:"general",level:3},{value:"Coverage",id:"coverage",level:3},{value:"Context",id:"context",level:2},{value:"Function First Parameter",id:"function-first-parameter",level:3},{value:"Errors",id:"errors",level:2},{value:"Wrap Errors",id:"wrap-errors",level:3},{value:"Handle Errors Once",id:"handle-errors-once",level:3},{value:"Eliminate Errors",id:"eliminate-errors",level:3},{value:"Packages",id:"packages",level:2},{value:"Dependency Management",id:"dependency-management",level:3},{value:"Prefer Standard Libraries",id:"prefer-standard-libraries",level:3},{value:"Third Party Packages",id:"third-party-packages",level:3},{value:"Time",id:"time",level:2},{value:"Clock Dependency",id:"clock-dependency",level:3},{value:"Setting the Mock Clock",id:"setting-the-mock-clock",level:4},{value:"<code>http.ResponseWriter</code>",id:"httpresponsewriter",level:2},{value:"HTTP Status Codes &amp; Bytes Written",id:"http-status-codes--bytes-written",level:3}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go"},"Go"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Go (a.k.a. Golang) is a programming language designed by folks at Google."),(0,r.kt)("p",null,"This guide provides some general resources for working in Go.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/web/server/go"},"Web Application in Go"),"\nprovides some specifics to web development."),(0,r.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/"},"The Go Programming Language Official Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/effective_go.html"},"Effective Go")," (how to do things \u201cthe Go way\u201d)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/trussworks/go-pointer-primer"},"Go Pointer Primer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/"},"pkg.go.dev")," (where you can read the docs for nearly any Go package)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/Learn"},"Go wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Book"),": ",(0,r.kt)("a",{parentName:"li",href:"http://www.gopl.io/"},"The Go Programming Language")),(0,r.kt)("li",{parentName:"ul"},"Advanced Testing with Go\n",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yszygk1cpEc"},"Video"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"https://about.sourcegraph.com/go/advanced-testing-in-go"},"Article")," (great overview of useful techniques, useful for all Go programmers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go-proverbs.github.io/"},"Go Proverbs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@matryer/line-of-sight-in-code-186dd7cdea88"},"Line of Sight Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://peter.bourgon.org/go-for-industrial-programming/"},"Go for Industrial Programming"))),(0,r.kt)("h3",{id:"tourslessons"},"Tours/Lessons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tour.golang.org"},"A Tour of Go")," (in-browser interactive language tutorial)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/code.html"},"How to Write Go Code")," (info about the Go environment, testing, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gobyexample.com"},"Go by Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://exercism.io/tracks/go"},"Go Track on Exercism")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Article"),": ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@venks.sa/copying-data-from-s3-to-ebs-30x-faster-using-go-e2cdb1093284"},"Copying data from S3 to EBS 30x faster using Golang"))),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://dave.cheney.net/2019/05/07/prefer-table-driven-tests"},"table-driven tests")," where appropriate."),(0,r.kt)("li",{parentName:"ul"},"Make judicious use of helper functions so that the intent of a test is not lost in a sea of error checking and boilerplate."),(0,r.kt)("li",{parentName:"ul"},"Comments delineating the ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80"},"3")," or ",(0,r.kt)("a",{parentName:"li",href:"https://thoughtbot.com/blog/four-phase-test"},"4")," phases of your tests can help with comprehension."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/pkg/testing/#T.Helper"},(0,r.kt)("inlineCode",{parentName:"a"},"t.Helper()"))," in your test helper functions to keep stack traces clean."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://rakyll.org/parallelize-test-tables/"},(0,r.kt)("inlineCode",{parentName:"a"},"t.Parallel()"))," to speed up tests."),(0,r.kt)("li",{parentName:"ul"},"Trend away from using ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/stretchr/testify/suite"},(0,r.kt)("inlineCode",{parentName:"a"},"testify/suite")),". (It used to address some shortcomings in the standard library ",(0,r.kt)("inlineCode",{parentName:"li"},"testing")," tools that have since been addressed.)"),(0,r.kt)("li",{parentName:"ul"},"Lightweight assertion packages can help with expressiveness. Consider using ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/stretchr/testify@v1.7.0/assert"},(0,r.kt)("inlineCode",{parentName:"a"},"testify/assert"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/matryer/is"},(0,r.kt)("inlineCode",{parentName:"a"},"is")))),(0,r.kt)("h3",{id:"coverage"},"Coverage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always test exported functions.\nExported functions should be treated as an API layer for other packages.\nCover the expected behavior and error scenarios as a user of that API.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consider using the ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/cmd/go/#hdr-Test_packages"},(0,r.kt)("inlineCode",{parentName:"a"},"_test")," package suffix"),"\nto simulate calling the package under test from an external package"))),(0,r.kt)("li",{parentName:"ul"},"Try not to test unexported functions.\nUnexported functions are implementation details of exported ones\nand should not change the intended usage.\nIf you find that an unexported function is complex and needs testing,\nit might mean it needs to be refactored as it's exported function elsewhere.")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h3",{id:"function-first-parameter"},"Function First Parameter"),(0,r.kt)("p",null,"As a general rule, ",(0,r.kt)("inlineCode",{parentName:"p"},"context.Context")," should be passed down through the layers of your program, as this is the conventional Go way ",(0,r.kt)("a",{parentName:"p",href:"https://blog.golang.org/context-and-structs#TOC_5."},'to address "cross cutting concerns"'),", e.g. cancellation, logging, distributed tracing, or other types of instrumentation (which in other languages might be addressed via Thread Locals or similar constructs)."),(0,r.kt)("p",null,"At Google, they found this pattern to be so useful that ",(0,r.kt)("a",{parentName:"p",href:"https://blog.golang.org/context#TOC_5."},"they require it"),"."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"FYI, Go's error handling had a bit of a shift and update\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.golang.org/go1.13-errors"},"as of 1.13")," in ~2019."),(0,r.kt)("h3",{id:"wrap-errors"},"Wrap Errors"),(0,r.kt)("p",null,'Prior to Go 1.13, people were forced to make a hard choice: either add\ndescriptive context around an error that was received, or to just pass the\nerror through in case it was a "sentinel error" like the canonical ',(0,r.kt)("inlineCode",{parentName:"p"},"io.EOF"),"\nexample. Nowadays you can both add context to an error, and still ensure the\ncaller can examine the error to see if it is a sentinel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'err := ...\nif err != nil {\n  if oldStyle == true {\n    // this is the pre-1.13 error encapsulation.\n    // the problem here is that this created a whole new error,\n    // which hid the underlying error type.\n    return fmt.Errorf("<richer contextual information>: %v", err)\n  }\n\n  // using the "%w" (wrap) verb means that the error chain is returned\n  // and can be examined by the caller using the\n  // `errors.Unrwap(...)` or `errors.Is(...)` functions\n  return fmt.Errorf("<richer contextual information>: %w", err)\n}\n')),(0,r.kt)("p",null,"Since these capabilities changed fairly recently, it's common to see many\nlibraries and legacy code not using the wrapping pattern, but going forward it\nis preferable to opt for wrapping errors where possible."),(0,r.kt)("h3",{id:"handle-errors-once"},"Handle Errors Once"),(0,r.kt)("p",null,"This advice is mostly stolen from the second-to-last section of Dave Cheney's\nsomewhat dated ",(0,r.kt)("a",{parentName:"p",href:"https://dave.cheney.net/2016/04/27/dont-just-check-errors-handle-them-gracefully"},"blog post"),"."),(0,r.kt)("p",null,"If there are 0 side effects from an error received in your code, this means\nyou are swallowing it, and this will generally make someone's life (maybe even\nyours) more difficult in the future. Please don't ignore errors."),(0,r.kt)("p",null,"If there are 2+ side effects from receiving an error, you are adding too much\nnoise to the system. This usually manifests as doing BOTH logging of the error\nAND returning the error back up the call stack, but if every layer were to do\nthis you'd fill your logs with unnecessary duplication."),(0,r.kt)("h3",{id:"eliminate-errors"},"Eliminate Errors"),(0,r.kt)("p",null,"This section is ispired by another Dave Cheney\n",(0,r.kt)("a",{parentName:"p",href:"https://dave.cheney.net/2019/01/27/eliminate-error-handling-by-eliminating-errors"},"missive"),"."),(0,r.kt)("p",null,"It is possible to reduce error handling overhead by considering if your\nfunctions absolutely need to return errors. Consider the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Logger(ctx context.Context) (*zap.Logger, bool) {\n  logger, ok := ctx.Value(loggerKey).(*zap.Logger)\n  return logger, ok\n}\n")),(0,r.kt)("p",null,"This function means that every place that wants a ",(0,r.kt)("inlineCode",{parentName:"p"},"*zap.Logger")," has to deal\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"!ok")," condition, creating a lot of boilerplate checking at callsites\nwho likely have no idea what the proper fallback is if there is no logger\ndefined."),(0,r.kt)("p",null,"As a consumer, wouldn't the following function signature be easier to deal\nwith?:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func Logger(ctx context.Context) *zap.Logger {\n  logger, ok := ctx.Value(loggerKey).(*zap.Logger)\n  if ok {\n    return logger\n  }\n  fmt.Fprintf(os.Stderr, "no logger configured")\n  return zap.NewNoopLogger()\n}\n')),(0,r.kt)("p",null,"Callers can now be sure that they will always get a logger of ",(0,r.kt)("em",{parentName:"p"},"some")," type. And\nwe've centralized, rather than distributed, the fallback behavior. (This\nimplementation chose to communicate the configuration problem to the system\noperators via ",(0,r.kt)("inlineCode",{parentName:"p"},"stderr"),", but you might also choose to ",(0,r.kt)("inlineCode",{parentName:"p"},"panic()"),", or do something\nelse, YMMV.)"),(0,r.kt)("h2",{id:"packages"},"Packages"),(0,r.kt)("h3",{id:"dependency-management"},"Dependency Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.golang.org/v2-go-modules"},"Go Modules")," has become the standard way to manage your dependencies"),(0,r.kt)("li",{parentName:"ul"},"Before Go Modules were solidified, ",(0,r.kt)("inlineCode",{parentName:"li"},"dep")," was frequently used for dependency management.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This might be helpful if you are dealing with an older project: ",(0,r.kt)("a",{parentName:"li",href:"https://golang.github.io/dep/docs/daily-dep.html"},"Daily Dep documentation")," (common tasks you\u2019ll encounter with the dependency manager)")))),(0,r.kt)("h3",{id:"prefer-standard-libraries"},"Prefer Standard Libraries"),(0,r.kt)("p",null,"In general,\nwhen selecting new packages,\nhighly consider standard libraries over third party dependencies.\nOne of the strengths of Go\nis its core packages,\nsuch as\n",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/"},"http"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/encoding/json/"},"json"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/database/sql/"},"sql"),".\nThese libraries also use vocabulary and patterns\neasily accessible via popular public Go resources,\nwhich are often translatable to modern programming approaches\nin their respective areas.\nThis creates an easier bridge\nfor Engineers new to Go\nor domain areas (such as relational databases)\nto adjust and onboard."),(0,r.kt)("p",null,"Since the third party ecosystem is still new,\npackages may have little community support,\nfollow opinionated patterns inconsistent with Go idioms,\nor lack long term support.\nWhen choosing a third party package,\ncarefully weigh the cost adoption and support contributions.\nDocument the decision\nand any shortcomings of a comparable standard library\nalong with a rollback plan."),(0,r.kt)("h3",{id:"third-party-packages"},"Third Party Packages"),(0,r.kt)("p",null,"Some examples of third party packages we've found to be helpful and stable are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jmoiron/sqlx"},"sqlx"),"\nfor SQL querying and struct marshalling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra/pflag/viper"),"\nfor writing command line utilities.")),(0,r.kt)("p",null,"If you're exploring a new package,\n",(0,r.kt)("a",{parentName:"p",href:"https://awesome-go.com/"},"Awesome Go"),"\nis a good place to start."),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("h3",{id:"clock-dependency"},"Clock Dependency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time.Now()"),' can cause a lot of side effects in a codebase.\nOne example is\nthat you can\'t test the "current" time\nthat happened in a function you called in the past'),(0,r.kt)("p",null,"For example, let's say we have the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "time"\n\nfunc MyTimeFunc() time.Time {\n    return time.Now()\n}\n\nfunc TestMyTimeFunc(t *testing.T) {\n    if MyTimeFunc() != time.Now() {\n        // This will error!\n        // The time in the function and the test happen at different times\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("p",null,"How do we test the contents of the return here?\nIf we want to assert the time\nwe need a way to know what ",(0,r.kt)("inlineCode",{parentName:"p"},"time.Now()")," was when the function was called."),(0,r.kt)("p",null,"Instead of directly using the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," package,\nwe can pass a clock as a dependency and call ",(0,r.kt)("inlineCode",{parentName:"p"},".Now()")," on that.\nThen in our tests, we can assert against that clock!\nThe clock can be anything as long as it adheres to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock.Clock")," interface\nas defined in the\n",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Clock"},"facebookgo clock package"),".\nWe could, for example,\nmake the clock always return the year 0,\nor the 2019 New Year,\nor maybe your birthday!\nIn this clock package,\nthere are two clocks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The real clock where ",(0,r.kt)("inlineCode",{parentName:"li"},"clock.Now()")," will call ",(0,r.kt)("inlineCode",{parentName:"li"},"time.Now()"),"."),(0,r.kt)("li",{parentName:"ul"},"A mock clock where ",(0,r.kt)("inlineCode",{parentName:"li"},"clock.Now()")," always returns epoch time.\nWe'll show later how to change that!")),(0,r.kt)("p",null,"Let's look at the example above with the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "fmt"\nimport "time"\n\nimport "github.com/facebookgo/clock"\n\nfunc MyTimeFunc(clock clock.Clock) time.Time {\n    return clock.Now()\n}\n\n// Then our caller\nfunc main() {\n    // clock.New() creates a clock that uses the time package\n    // it will output current time when .Now() is called\n    fmt.Print(MyTimeFunc(clock.New()))\n}\n')),(0,r.kt)("p",null,"Then in our tests we can use a mock clock that freezes ",(0,r.kt)("inlineCode",{parentName:"p"},".Now()")," at epoch time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both should equal epoch time, we won\'t hit this error\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("p",null,"Cool, but what if I want to use a different date?\nSay my test relies on our ",(0,r.kt)("inlineCode",{parentName:"p"},"TestYear")," constant.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Mock"},"clock.Mock clock"),"\nallows us to add durations to the clock and set the current time.\nNote that the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock.Clock")," interface does not allow this,\nit needs to happen before passing the mock clock through the interface parameter."),(0,r.kt)("h4",{id:"setting-the-mock-clock"},"Setting the Mock Clock"),(0,r.kt)("p",null,"Here's an example using the test above and setting the time to September 30 of TestYear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    dateToTest := time.Date(TestYear, time.September, 30, 0, 0, 0, 0, time.UTC)\n    timeDiff := dateToTest.Sub(c.Now())\n    testClock.Add(timeDiff)\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both will now be September 30 of TestYear\n        // we\'ll pass the test again\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("h2",{id:"httpresponsewriter"},(0,r.kt)("inlineCode",{parentName:"h2"},"http.ResponseWriter")),(0,r.kt)("h3",{id:"http-status-codes--bytes-written"},"HTTP Status Codes & Bytes Written"),(0,r.kt)("p",null,"There are a surprising number of\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/footgun"},"footguns"),' associated with trying to\ngather statistics about an HTTP request, having to do with several obscure\nand optional ("smuggled"?) ',(0,r.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter")," interfaces. This is a\nregularly occurring challenge for anyone trying to implement a request-\nlogging middleware."),(0,r.kt)("p",null,"The recommended package for this task is called\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felixge/httpsnoop"},"httpsnoop"),", and the author has a great\nexplaination of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/felixge/httpsnoop#why-this-package-exists"},'"Why this package exists"'),"."))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);