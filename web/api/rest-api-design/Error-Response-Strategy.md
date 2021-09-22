# Error Response Strategy

Well formatted errors are an important component of education to the user of the API and should be given as much care as the API design.

Just like an HTML error page shows a useful error message to a visitor, an API should provide a **useful error message** in a known consumable format.

## Key Takeaways

- Use a consistent error response strategy.
- Have a default list of errors, in addition to abiding by the correct HTTP status codes.
- Your error codes should not change, unlike descriptive messages, which can change.
- Consider readability by providing a list of errors and using strings for messages instead of integers.

## Terms

__Error Code__        — A unique, machine readable, identifier for the error.\
__Status Code__ — The status code on the HTTP response. \
__Message__           — A brief human-readable message.\
__Detail__            — A lengthier explanation of the error.\
__Parameters / Path__ — a description of which part of the request triggered the error.

### Use a consistent error format across the API

When the client handles an error, they should know the format of the error beforehand. To make this simple, use the same error format across all errors, at least at the top level.

This way the error handling code on the frontend can be somewhat generic, instead of having to adapt to different response types based on the API.

**Example**
A bad example would be to return errors like these in the same system. Notice one has parameters `Message` and `MissingParameter` and the other `Code` and `Message`:

```json
  "Message": "Required parameter AppId is missing.",
  "MissingParameter": "SearchRequest.AppId",
```

```json
  "Code": "125764",
  "Message": "Transaction could not be completed"
```

The client cannot tell whether `code` will always be returned or not, they would have to match the string. The string could change in another similar error.

A good example would be to return an error like this, where the `Code`, `Title` and `Message` are available in ALL errors across the API:

```json
  "Code": "VALIDATION_ERROR",
  "Title": "Validation Error",
  "Message": "Required parameter is missing from body"
  "Body": {
    "Parameter": "appId"
  }
```

There's an argument in favor of returning a list of error objects, rather than a single error object, so that the frontend doesn’t have to check every time what the shape of the error response is. This is especially true if you may return multiple errors anywhere in the API.

### Use the correct HTTP status codes

HTTP defines a lot of [meaningful status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) that can be returned from an API. Use these as your HTTP response type.

For e.g. The types of responses are grouped into the following top level categories.

The error codes are 3-digit numbers, and `2xx` below indicates any number from 200-299.

- `2xx` **Success** - This category indicates the action requested by the client was received, understood, and accepted.
- `4xx` **Client Error** - This category indicate that the error seems to have been caused by the client.
- `5xx` **Server Error** - This category indicates the server failed to fulfill a request.

**Importance of the Client vs. Server Error Distinction** - `500` server errors signal that something went wrong on the backend *that shouldn't have*.

If a client sends a request and it has a bad value, the source of the error is the client. That is a known error that should be detected and returned with a `4xx`. Most known errors should be a `4xx`. Some can even be fixed by the client.

Most `500` errors are bugs, unexpected situations on the server that cannot be fixed by the client. Keep this in mind as you select which type of error response your situation calls for.

Why is this important? 500 errors are usually serious enough that a slew of them should cause on-call staff to be paged. You wouldn't want on-call staff to be paged for something any client can trigger by mashing the submit key on a badly formed request.

Since there are a lot of status codes, it's advisable to pick a well-known subset of HTTP responses and return mainly those. It makes it easier for the client to support.

- `200` **OK** - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
- `201` **Created** - Response to a POST that results in a creation.
- `404` **Not Found** - When a non-existent resource is requested.
- `409` **Conflict** - When we cannot process the request due to the current state of the server.
- `412` **Precondition Failed** - A precondition like [optimistic locking](./Concurrency-Control.md) has failed.
- `422` **Unprocessable Entity** - Used for validation errors.

### Use a constant error code to uniquely identify errors

A constant error code in the body allows the logic on the frontend to understand and handle the error correctly. Note this is different from the HTTP status code.

For e.g. rather than a message stating "Last name was missing from the response", it's better to send a code as well as the message. The frontend code can then look for `code == MISSING_PARAMETER` and know how to handle it consistently for all missing parameters.

Without a code, a different error might return, "Phone number is required" resulting in special handling for very similar issues.

Any logic that handles this error code should match on the error code and not on an error string. This ensures error handling won’t break if the message changes.

For the error code itself, consider using an enumerated short string for readability. This provides the twofold benefit of being a constant value, but also being human-readable.

```json
  "Code": "MISSING_PARAMETER"
```

### Provide Detailed Messages

Messages are mainly used by developers who are reading a raw response, so help them understand what went wrong and how they could fix it.

Provide detail. If there are multiple errors, it's best to always return a list of errors, lists are easier to read and process.

Consider adding parameters to your messages. This is most commonly
used for validation errors, describing what parameter in the request
is wrong. E.g. “submitter.email”

### Examples

_From Bing, a good error response:_

```json
{
  "SearchResponse": {
    "Version": "2.2",
    "Query": {
      "SearchTerms": "api error codes"
    },
    "Errors": [
      {
        "Code": 1001,
        "Message": "Required parameter is missing.",
        "Parameter": "SearchRequest.AppId",
        "HelpUrl": "http://msdn.microsoft.com/en-us/library/dd251042.aspx"
      }
    ]
  }
}
```

_From go, a bad error response:_

```json
    Bad Request
```

### Security

While detailed messages are good, do not reveal the internals of the system unnecessarily.

For e.g. do not return the raw SQL error that reveals schema information to your user. Instead log that error securely, and return a rewritten message that clearly states to the user what _they_ might fix in their request.

The following message reveals table names and column names and an ID. Do not return this to the client.

```json
{
        "Code": 1001,
        "Message": "ERROR: insert or update on table 'user_auth' violates foreign key constraint 'user_auth_address_id_fkey' DETAIL: Key (user_auth)=(27856) is not present in table 'address'."
}
```

Instead, return a succinct, readable message that is useful to the user but doesn't reveal sytem internals:

```json
{
        "Code": CONFLICT_ERROR,
        "Message": "User account is incomplete and causes a conflict. Please add address information."
}
```

### Reporting validation errors

Validation issues can be global, per object, and per field and a single request can have multiple errors. This is why it is important to be able return an array of errors.

We recommend having a list of errors be the default, even in cases when there is only one error returned.

This simplifies client side code to be able to assume the top level format of error bodies.

You can tie individual errors to the invalid request using a “parameters/path” key

```json
{
  "errors": [
    {
      "Code": "PARAMETER_MISSING",
      "Message": "First name is missing.",
      "Parameter": "geek.firstname"
    },
    {
      "Code": "TOO_SHORT",
      "Message": "Phone number must be at least 10 digits.",
      "Parameter": "geek.phone_number"
    }
    ]
}
```

### Add a requestID to help track errors

It can be useful to add a parameter that uniquely identifies the specific request with a UUID. Then in your server logs, be sure to add that parameter in your structured logging data. Also, it is beneficial to add this as a header in all responses.

When a client has an error and cannot solve it themselves, they can report the error with the requestID, allowing backend developers to find the associated logs.

```json
 {
      "code": "CONFLICT_ERROR",
      "title": "Conflict Error",
      "detail": "Estimated weight must be set before this item can be approved.",
      "requestID": "7673868d-231e-490d-9c4f-19288e7e668d"
 }
```

### Handling errors in API requests that affect multiple "objects"

If an API request could affect multiple “objects”, how are errors handled? Are all changes rolled back?

From [Rest Api Error Handling](https://alidg.me/blog/2016/9/24/rest-api-error-handling)

1. Define ranges for error codes
1. Define Resource Based Error Codes.
   That is, we use a string prefix for each error code and that prefix is determined by the resource itself.
   Example:

```json
{
  "status_code": 400,
  "reason_phrase": "Bad Request",
  "errors": [
    {"code": "geeks-2", "message": "The first_name is mandatory"},
    {"code": "geeks-3", "message": "The last_name is mandatory"}
  ]
}
```

## Todo

- Internationalizing errors

### Resources

[Internationalization of API error messages](https://stackoverflow.com/questions/30109787/internationalization-of-api-error-messages-on-front-end-or-back-end)\
[Best practices for localization](https://www.at-it-translator.com/best-practicestips-for-software-application-and-game-localization/)\
[String Internationalization](https://docs.ckan.org/en/2.9/contributing/string-i18n.html)\
[Best practices for API error handling](https://nordicapis.com/best-practices-api-error-handling/)\
[Rest API Error Handling](https://www.baeldung.com/rest-api-error-handling-best-practices)
