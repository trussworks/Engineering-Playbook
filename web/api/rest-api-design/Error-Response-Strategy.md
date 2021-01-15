# Key Takeaways

* Use a consistent error response strategy
* Have a default list of errors
* Your error code should not change, unlink messages, which can change.
* Consider readability by providing a list of errors and using strings for messages instead of integers.

## Terms

__Error/Code__        — A unique, machine readable, identifier for the error.\
__Message__           — A brief human-readable message.\
__Detail__            — A lengthier explanation of the error.\
__Parameters / Path__ — a description of which part of the request triggered the error.

### Strategy on returning consistent errors across the API

* You should always return consistent errors
This way your error handling code on the front end can be somewhat generic, instead of having to adapt to different response types based on the API
This is an argument in favor of returning a list of error objects, rather than a single error object, so that the front end doesn’t have to check every time what the shape of the error response is

### Example of error strategies for each type of error (i.e. server, client, validation, etc.)

#### Errors

Any logic or presentation of the error in the front end should be based on the code here, never match against the message
Some people use `ints` for this but a short string is more readable:

* 2123 vs. “MISSING_PARAMETER”

#### Messages

Messages are mainly used by developers who are reading a raw response, errors presented to users can be switched on the “code” parameter.
Provide detail. It’s best to always return a list of errors, lists are easier to read.
Consider adding parameters to your messages. This is most commonly used for validation errors, describing what parameter in the request is wrong. E.g. “submitter.email”

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

```
    Server error.
```

### Reporting validation errors

Validation issues can be global, per object, and per field and a single request can have multiple errors.
This is why it is important to be able return an array of errors.
We reccomend having a list of errors be the default, even in cases when there is only one error returned.
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

### Internationalizing errors

#### Best practice is to handle internationalization in the Front End

React uses the React-Intl library. Examples of how errors are

### Handling errors in API requests that affect multiple "objects"

If an API request could affect multiple “objects”, how are errors handled? Are all changes rolled back?

From [Rest Api Error Handling](https://alidg.me/blog/2016/9/24/rest-api-error-handling)

1. Define ranges for error codes
2. Define Resource Based Error Codes.
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

### TODO: LIST TRADEOFFS in this document

## Topics for Discussion

* HTTP Status Code - how are we using them across [MilMove], are they used differently, provide examples..

### Resources

[Internationalization of API error messages](https://stackoverflow.com/questions/30109787/internationalization-of-api-error-messages-on-front-end-or-back-end)\
[Best practices for localization](https://www.at-it-translator.com/best-practicestips-for-software-application-and-game-localization/)\
[String Internationalization](https://docs.ckan.org/en/2.9/contributing/string-i18n.html)\
[Best practices for API error handling](https://nordicapis.com/best-practices-api-error-handling/)\
[Rest API Error Handling](https://www.baeldung.com/rest-api-error-handling-best-practices)
