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

#### Query Log Observability

Did you know that SQL dialects have provisions for leaving comments within their queries? The following observability hint comes directly from [Database Reliability Engineering](https://www.oreilly.com/library/view/database-reliability-engineering/9781491925935/?sortby=bestSellers):

> When doing SQL tuning, a big challenge is mapping SQL running in the database to the specific place in the codebase from which it is being called. In many database engines, you can add comments for information. These comments will show up in the database query logs. This is a great place to insert the codebase location.

Some relevant docs:

* [Postgres](https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-COMMENTS)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/comments.html)

Additionally, if you have a request-scoped identifier (e.g. a `requestID` or `traceID`), you might be able to weave that into a built SQL query to give even finer-grained visibility.

A quick example code snippet:

```go
func (s *Store) listSystems(ctx context.Context) ([]*models.System, error) {
  results := []*models.System{}
  comment := fmt.Sprintf("/* storage/system.go:listSystems %s */", appcontext.TraceID(ctx))
  err := s.db.Select(&results, comment+sqlListSystems)
  if err != nil {
    appcontext.ZLogger(ctx).Error("Failed to fetch systems", zap.Error(err))
    return nil, err
  }
  return results, nil
}
```

Results in query log:

```shell
2021-02-09 16:59:18.686 UTC [456] LOG:  statement: /* storage/system.go:listSystems 211956de-ebc3-4096-8496-329c622dba2a */
  SELECT
    id, created_at, updated_at, project_name
  FROM system_intake
  WHERE
    status='LCID_ISSUED' AND request_type='NEW' AND lcid IS NOT NULL;
```
