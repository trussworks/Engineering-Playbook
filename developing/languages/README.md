# [Tools and Practice](../README.md) / Programming Languages

## Overview

This section will contain our collective observations about the strengths and challenges offered up by many of the different programming languages out there.

While Truss may have opinions on particular languages and strategic reasons for investing in some languages over others, we recognize that our clients will may make different choices for different reasons. As such, Trussels should aim to be proficient in more than one language and able to get by with several.

## Languages Trussels are proficient in

* [Go](./GO.md)
* JavaScript (including TypeScript/FlowScript)
* Swift
* Rust
* Kotlin
* [Ruby](./ruby/README.md)
* [Python](./python/README.md)
* Java
* C/C++
* [bash](./BASH.md)
* SQL

## Language Resources

### Go

If you are new to Go, these are resources that can help you get started:

1. [A Tour of Go](https://tour.golang.org) (in-browser interactive language tutorial)
1. [How to Write Go Code](https://golang.org/doc/code.html) (info about the Go environment, testing, etc.)
1. [Effective Go](https://golang.org/doc/effective_go.html) (how to do things “the Go way”)
1. [Daily Dep documentation](https://golang.github.io/dep/docs/daily-dep.html) (common tasks you’ll encounter with our dependency manager)
1. [Exercism](http://exercism.io/languages/go/about) offers a series of exercises with gradually increasing complexity

Additional resources:

* [GoDoc](https://godoc.org/) (where you can read the docs for nearly any Go package)
* Check out the [Go wiki](https://github.com/golang/go/wiki/Learn)
* Advanced Testing with Go [Video](https://www.youtube.com/watch?v=yszygk1cpEc) and [Article](https://about.sourcegraph.com/go/advanced-testing-in-go) (great overview of useful techniques, useful for all Go programmers)
* _Book_: [The Go Programming Language](http://www.gopl.io/)
* _Article_: [Copying data from S3 to EBS 30x faster using Golang](https://medium.com/@venks.sa/copying-data-from-s3-to-ebs-30x-faster-using-go-e2cdb1093284)

### JavaScript

Important JS patterns and features to understand:

* Destructuring Assignment
  * [A Dead Simple Intro to Destructuring JavaScript Objects](http://wesbos.com/destructuring-objects/)
* Fat Arrow Functions
  * [ES5 Functions vs ES6 Fat Arrow Functions](https://medium.com/@thejasonfile/es5-functions-vs-es6-fat-arrow-functions-864033baa1a)
* Higher Order Components
  * [Higher Order Components: A React Application Design Pattern](https://www.sitepoint.com/react-higher-order-components/)
* Promises
  * [An incremental tutorial on promises](https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/)
* Spread Operator/Rest Params
  * [JavaScript & The Spread Operator](https://codeburst.io/javascript-the-spread-operator-a867a71668ca)
  * [How Three Dots Changed JavaScript](https://dmitripavlutin.com/how-three-dots-changed-javascript/)
* Template Literals
  * [Template Literals](https://css-tricks.com/template-literals/)
* React and Typescript
  * [Truss resources for React, Typescript, and front end tooling](https://github.com/trussworks/Engineering-Playbook/tree/master/web/frontend)

### SQL

Did you know that SQL dialects have provisions for leaving comments within their queries? The following observability hint comes directly from [Database Reliability Engineering](https://www.oreilly.com/library/view/database-reliability-engineering/9781491925935/?sortby=bestSellers):

> When doing SQL tuning, a big challenge is mapping SQL running in the database to the specific place in the codebase from which it is being called. In many database engines, you can add comments for information. These comments will show up in the database query logs. This is a great place to insert the codebase location.

Additionally, if you have a request-scoped identifier (e.g. a `requestID` or `traceID`), you might be able to weave that into a built SQL query to give even finer-grained visibility.
