# Web Applications in Go

This section is meant to contain some of the lessons
Truss has had with building web applications in Go.
It borrows from the format of [Effective Go](https://golang.org/doc/effective_go.html)
along with some lightweight "starter templates",
to provide some basic standards and patterns we follow.
Code samples are not meant to be "copy and paste" ready,
but provide fundamental principles
that can be incorporated into various applications, frameworks, and packages.

We attempt to use plain Go code when possible,
but package code may be incorporated or pseudocoded
to mimic production use cases.

## Application Layers

Defining application layers is crucial
to a maintainable API or web service.
Picking responsibilities and contracts across layers
can define how an application grows
and how long code iterations in a mature codebase will take.
In Go,
these layers will likely take the form of packages.
There is no one-size-fits-all approach to defining the contract of these packages,
but we'll attempt to define some common patterns and inform future approaches.

### Handlers

The term "handler" is used to describe the layer that accepts HTTP requests
and returns a response.
While it may vary in implementation between different libraries,
the term comes from the Go standard library [HTTP Package](https://golang.org/pkg/net/http/#Handler).

The responsibility of a handler is to accept an HTTP request,
delegate the work to complete the request,
and respond based on error or success scenarios.
Business logic, database code, etc. should not be in a handler.

It should look rather declarative
with error and success cases drawing two vertical lines via indentation.
Here's a trimmed down example of a basic GET handler:

```go
package handlers

type getDogHandler struct {
    // service implementation, we'll get back to this later
    fetchDog FetchDog
    //logger implementation may vary, we'll psuedocode for this example
    logger Logger
}

func (h *getDogHandler) handleGetDog(w http.ResponseWriter, r *http.Request) {
    // the only work here is getting params
    // the marshalling likely would be delegated to a middleware in production
    p := dogGetParams(r)

    // offload querying to a service `fetchDog`
    dog, err := h.fetchDog(p.DogID)

    // the error parallel
    if err != nil {
        http.Error(w, "Could not fetch dog!", http.StatusInternalServerError)
        return
    }

    // the success parallel
    // marshalling here is also likely to be handled by some middleware
    w.Write(dogPayload(dog))
}
```

#### Testing Handlers

Handlers will likely become the entry point for integration testing main workflows.
They can be spun up with full service layer implementations
and tested for high priority requests flows (ex. success paths).
Be careful to limit integration tests here,
as they can quickly slow down the application.
If the integration tests become complex,
it's a good indicator that the application logic for that handler
is due for a refactor.

Unit testing handlers often involves mocking
[service layers](#services).
From there,
they will answer the question of:
"given a set of service layer responses,
what response does the handler return?"
This verifies the response/request responsibilities of the handler,
and can be used to test edge cases with little test performance impact.

#### Composing Handlers

Handlers, and middlewares more generally, can greatly benefit from being written as ["adapters"](https://medium.com/@matryer/the-http-handler-wrapper-technique-in-golang-updated-bc7fbcffa702). You can then compose very complex flows out of many smaller parts, which is really just another expression of the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

When building adapters, please ensure the signature of the returned type is `http.Handler`, even if the underlying implementation is an `http.HandlerFunc`... All `http.HandlerFunc`s are `http.Handler`s, but not all `http.Handler`s are `http.HandlerFunc`s.

### Models

Put simply, models describe data.
They are agnostic to the data source
(JSON over HTTP, in-memory data structures, DB tables, etc.),
however in many cases the term will be used synonymously
with data queried from a DB.

The model code should provide the structure of the data
along with methods dictating how outside sources interact with it.

For example,
here's a pretty simple example of a model struct for a dog.

```go
package models

type Dog struct {
    ID      uuid.UUID `json:"id" db:"id"`
    Name    string    `json:"name" db:"name"`
    Owner     Owner
}
```

It has a a unique ID, name, and `Owner`.
The latter being a `struct` that encompasses an association.

The field tags follow the syntax patterns for the
[json](https://golang.org/pkg/encoding/json/)
and [sqlx](https://godoc.org/github.com/jmoiron/sqlx) packages.
This is not to prescribe specific packages,
but to provide a more decorative example that may be encountered in a Truss codebase.

Interacting with this model is likely going to happen in two ways:

1. marshalling from an outside data source
1. modifying/viewing the data in Go
   (ex. executing business logic).

#### Marshalling Models

In the most basic cases of accepting an HTTP request
or writing/reading from a SQL DB,
marshalling is unlikely to happen manually.
Many web app frameworks or DB connectors/ORMs
are going to handle that hidden by their public APIs
and provide convenience query methods
or, in the case of JSON HTTP requests,
parameter wrappers for handlers.
Within a handler or service,
the model is likely to be accessed only in its Go struct form.
If you're curious what that marshalling code might look like,
you can look at this [json blog post](https://blog.golang.org/json-and-go)
or take a look at some of the
[sqlx column mapping code](https://github.com/jmoiron/sqlx/blob/master/sqlx.go#L23)
that works in tandem with the sql standard library.
We'll get more into the interaction between those packages
and our application code in the next section about [services](#services).

#### Working with Models in Go

In the second case,
we need to utilize our models to store results of our application logic.
After all, model structs and databases don't deliver client value on their own.
Let's take a look back at our dog model
and perform some operations.

First, let's try to add a dog.

```go
package models

type Dog struct {
    ID      uuid.UUID `json:"id" db:"id"`
    Name    string    `json:"name" db:"name"`
    Owner     Owner
}
```

Elsewhere in the code,
we create a new dog and save it.

```go
package services

func MyDogFunc(name string, owner Owner) (Dog, error) {
    dog := Dog{}
    dog.Name = name
    dog.Owner = Owner
    // Save is an external method to interface with DB passed as dependency
    db.Save(&dog)
    return dog, nil
}
```

Notice how our data source is queried entirely outside of the model.
This allows us to separate the model structure
and the dependencies such as external packages for DB connectors
or the type of database itself.
Using this separation helps to isolate data source specific code,
allowing mutability of underlying infrastructure
and enforcing code reuse.

Let's say our Owner can leave the application,
and in this case the owner's dogs should also be marked as inactive.
We want our Dog model code to maintain this constraint.

Here's a method to demonstrate that relationship:

```go
package models

type Dog struct {
    // ...
    Status Status
}

type Owner struct {
    Dogs []Dog
    Status Status
}

func (o *Owner) Deactivate() {
    o.Status = Inactive
    dogs := o.Dogs[:0]
    for _, dog := range o.Dogs {
        dog.Status = Inactive
        dogs = append(dogs, dog)
    }
    o.Dogs = dogs
}
```

The purpose here is to set up the public model API
to only allow valid modifications throughout the codebase.
We've explicitly linked the dog and owner
to enforce any data constraints.
Similar methodology may follow for reactivating the owner,
changing a dog's owner, etc.
Note that in many cases when writing Go code,
we'd set parameters like these as unexported
to avoid invalid state changes,
however this isn't possible due to required exposure
by DB/JSON packages that will use the model's public fields.

We've continued to separate any DB concerns
to outside the model.
For example,
it's likely we'd want to wrap these changes in a transaction:

```go
package services

func DeactiveOwner(owner Owner) error {
    transaction := db.Transaction.Begin()
    owner.Deactivate()
    err := transaction.Save(owner)
    if err !=nil {
        transaction.Rollback()
        return err
    }
    err = transaction.Save(owner.Dogs)
    if err !=nil {
        transaction.Rollback()
        return err
    }
    err := transaction.Save(owner)
    transaction.Commit()
    return nil
}
```

Separating the database concerns from the model
allows us to interact with them separate of the data structure concerns.
Since models have to be passed via `struct` to marshall their fields
and are commonly used across codebase layers,
adding too many methods and dependencies
can cause excessive package imports across the codebase.
For example,
if we wanted to use a locking feature specific to Postgres
or our database connector library,
we can make those changes independent of the model,
allowing the model to be reused elsewhere
without pulling in possibly irrelevant packages or patterns.
It also allows for isolating experiments and changes
to a small portion of the codebase,
rather than propagated them throughout all model usages.

#### Where/When to Write Query Code

The above examples make use of an abstracted dependency for a DB connector.
In reality,
any ORM or query interface is likely to be much more complex than `Fetch`/`Save`.
As data requirements become more complex,
it becomes much harder to maintain models as purely structural.
It's hard to make an exact recommendation for Go code structure
as data requirements may vary considerably.
Backends could vary from REST APIs,
highly normalized SQL tables,
serialized document stores,
sparsely column oriented data,
and so on.

Some general considerations when organizing query code are:

- If query patterns vary greatly for individual models,
  consider tying them closer to the business logic they mirror
  (such as a service layer).
- If individual query patterns satisfy multiple models,
  consider a separate query layer that can abstract/share code.
  When designing something like this,
  be wary of over-abstracting and reinventing a query language/ORM.
- If models are single use (ie. they are queried and fetched in one way),
  adding query code to the model may make sense.
  Note though, models are often shared across multiple code layers,
  and due to struct field marshalling,
  cannot utilize interface abstractions.
  Keeping models as simple as possible (ie. without save/fetch methods),
  keeps code changes from propagating across the codebase
  and becoming unmaintainable.

#### Testing Models

Theoretically models should have little responsibility
other than struct definition.
Any exported methods should be unit tested,
such as data validations
or state change methods, like above.

#### Model References

- [SQL Standard Library](https://golang.org/pkg/database/sql/)
  and some [helpful examples](https://golang.org/src/database/sql/example_test.go)
- [Illustrated Guide to SQLX](https://jmoiron.github.io/sqlx/)

### Services

So, we have handlers,
which delegate a request/reponse flow
and models that describe data.
Where does the application logic go?
Into the service layer!
The service layer is where work gets delegated from a handler.
The pattern is borrowed from other languages
[like Ruby](https://medium.com/selleo/essential-rubyonrails-patterns-part-1-service-objects-1af9f9573ca1),
where controllers and models
get encumbered with multiple responsibilities.
The service layer becomes a space
for single use, reusable objects (service objects)
to be built out.
This layer will often be referred to as "business logic"
or "application logic",
but it's more or less
what makes your application/API useful to a client.
It's also where the various package dependencies
of the application
are likely to meet,
answering the question of
"how do I accomplish the client need with the given dependencies?"

Let's take a look at an example!
In our dog application,
it's unlikely all we want to do
is create dogs in a database.
Let's say the purpose of the application
is to show the user how cute a dog is
given various attributes.

Our handler may look something like this:

```go
package handlers

type CalculateCutenessScore = func(dogID uuid.UUID) (int, error)

type getCutenessScoreHandler struct {
    calculateCutenessScore CalculateCutenessScore
    //logger implementation may vary, we'll psuedocode for this example
    logger Logger
}

func (h *getCutenessScoreHandler) handleGetCutenessScore(w http.ResponseWriter, r *http.Request) {
    // like above we've deferred marshalling for this example
    p := dogGetParams(r)

    // offload calculation to service function
    score, err := h.calculateCutenessScore(p.DogID)

    if err == errors.CatchableError {
        h.logger.Error(fmt.Sprintf("Could not calculate cuteness for dog %v", p.DogID), err)
        w.Write(cutnessPayload(DEFAULT_CUTENESS_SCORE))
    } else if err != nil {
        http.Error(w, "Could not calculate dog's cuteness!", http.StatusInternalServerError)
        return
    }

    w.Write(cutenessPayload(score))
}
```

The handler here is not too much different than our `GetDog` example above.
We've changed from `GetDog` to `GetCutenessScore`
and likewise updated the service definition.
We've also updated the error catching to be a little more robust.
In this case,
we've defined a "catchable error" to demonstrate
when we should return a default case to the client
and log an error.
Then we default to 500 when unknown errors appear.

The service definition is passed into the handler as a dependency,
but unlike in the original handler definition,
we've also defined the service contract.
This is important to understanding services,
so let's dive in a little deeper.

First let's look at a possible service definition for the cuteness score.

```go
package services

// NewCalculateCutenessScore return an implementation for calculating dog cuteness
func NewCalculateCutenessScore(db Database) func(dogID uuid.UUID) (int, error) {
    return func(dogID uuid.UUID) (int, error) {
        dog := models.Dog{}
        err := db.Fetch(&dog, dogID)
        if err != nil {
            return 0, err
        }
        nameAsInt := strconv.Atoi(dog.Name)
        // they're all good dogs brent
        cutenessScore := nameAsInt%10 + BRONT_ADDER
        return cutenessScore, nil
    }
}
```

So, we've added a new implementation for cuteness score
to the `services` package.
It returns a function that can calculate cuteness for a given dog ID.
The dependencies, like the `Database` connector,
are passed into the function generator and hidden from the return value.
This return function, along with its dependencies,
is created when the server is configured.
The constructor will be called once,
whereas the returned function will be called per request.

Notice how this definition is independent of the definition in the handler
(in a different package).
The handler only needs to know what is required to return a score,
it does *not* need to know how.
Developing the implementation independently
allows us to easily swap out function implementations
if the user, client, or dependency requirements ever change.
For example,
what if the cuteness score changes to be out of 100 instead of 10?
Instead of dealing with that in a handler,
which we've defined as being responsible for request/response satisfaction,
it's segmented to the service function/package.
Likewise, if we want to use a new DB connector,
the dependency for the service will change,
but the handler will be agnostic to that difference.
If we reuse the calculator elsewhere,
changes will not have to be updated sparsely across the handlers codebase.

Be careful when defining pointers or values in the service functions.
Pointers in a closure can create concurrency concerns between handlers
or any multi-threaded code within them.
On the flip side,
using values could create excessive memory usage
if a service function is called repetitively.

#### Testing Services

The focus on testing services
should be unit testing business logic.
These tests will likely follow feature workflows.
An example from above would be:
given a dog with X characters in its name,
what is its dog score?
This layer is ripe for testing with
[table driven tests](https://github.com/golang/go/wiki/TableDrivenTests)
(ex. given this array of dog names,
what are their scores).

Avoid over-testing dependencies,
and attempt to mock them when possible
(such as DB calls),
especially expensive or unknown resources such as third party APIs.
These are likely to create long
and flaky tests.

#### Service Resources

There are three patterns worth understanding are:

1. [Service Objects in Go](https://www.calhoun.io/using-the-service-object-pattern-in-go/).
   This demonstrates the origin of the pattern,
   where single function structs/interfaces
   are used to encapsulate work.
1. [How to Use Go Interface](https://blog.chewxy.com/2018/03/18/golang-interfaces/).
   This guide will provide a "Go" styling to interfaces.
   Rather than use global objects (like in Ruby)
   or tightly coupled interfaces/classes (Java),
   we'll keep interfaces close to usage (the handler in this case),
   and implementations will implicitly satisfy those contracts.
1. [What is a Closure](https://www.calhoun.io/what-is-a-closure/).
   Taking the "one function interface" pattern a step further,
   we can utilize Go's first class functions and closures
   to simply pass the function rather than struct,
   removing a layer of indirection.

### General Patterns

This section is for patterns that don't fit into the specific layers defined above
or should be used throughout all of them.

### Resources

- [GopherCon 2019: Mat Ryer - How I Write HTTP Web Services after Eight Years](https://www.youtube.com/watch?v=rWBSMsLG8po&feature=youtu.be)
- [Loggers are dependencies](https://peter.bourgon.org/go-best-practices-2016/#top-tip-10)
- [Context as first argument](https://blog.golang.org/context)
