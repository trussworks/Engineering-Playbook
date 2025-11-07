# Data-Design

## Passing Parameters

One of the first things you'll need to figure out, after you've decided on the [HTTP Method](HTTP-Methods.md) to use, is how to supply data to the endpoint.

There are four different ways to do so, which can be confusing. They are:

- Path
- Query
- Body
- Headers

Let's dive into each of these and understand what they are. We'll look at the following example request to update a shipment.

```
PATCH /v1/shipments/01b9671e-b268?expand=services HTTP/1.1
Host: api.move.mil
Content-Type: application/json
If-Match: MjAyMC0xMi0wMVQxODo1NjoxMy4zNjkxNzRa
Body:
{
    "shipmentType": "UPS",
    "deliveryDate": "2020-06-08"
}
```

## Types of Parameters

### Path Parameter

This parameter is in the URI of the path, the web address so to speak.

**Typically, path parameters are used to pass in a resource identifier**. This is handy as it means you don't have to send a body for a simple GET request.

In our example request, which is a PATCH request, the path is:

```
api.move.mil/v1/shipments/01b9671e-b268
```

The code at the end `01b9671e-b268` identifies the shipment we are trying to update. You may have more than one ID in the path but it's recommended to keep the [URL length and depth constrained](URL-Design.md#url-depth).

### Query Parameter

The next type of parameter is also tacked on to the address, but is passed in after the main URL.

**Queries are usually used for pagination, filtering and expansion of nested objects.**

In our example request, the query parameter is `expand` and the value is `services`:

```
?expand=services
```

This could be used to request the server to expand a nested object called services. You can send more than one query parameter, but must follow the [rules for query string formatting](https://en.wikipedia.org/wiki/Query_string).

One important thing to keep in mind is that since the query is in the path, it will be exposed in some situations and therefore is **not the right place for sensitive data**.

No matter whether you are using https/TLS, the user may inadvertently share the path and expose a session token or other vital data.

Read here for more details on [Information exposure through URL query strings](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url).

### Body Parameter

**The body of the post is where the bulk of the parameters are passed in.**

Usually we use a JSON representation to provide structure to the body. JSON is very flexible and a well-understood standard, which makes it perfect for this use. We also return data back to the caller in this format.

In the example, the body that we send is:

```
{
    "shipmentType": "UPS",
    "deliveryDate": "2020-06-08"
}
```

This is requesting a change to two fields, named `shipmentType` and `deliveryDate`.

In an https/TLS request, the body will be safely encrypted and never exposed, so it is **safe to send sensitive data**.

### Header Parameter

**Headers are typically used provide data that is not specific to the current request, and may be processed upstream from the handler.**

Headers are especially useful for data that is needed prior to processing the request body, or by an entity other than the receiver of the request.

For e.g. caching and proxying relies on headers. Proxy servers might even change some headers before passing on the request.

Another example is content type negotiation. The server needs to know the payload will be in JSON and utf-8 _before_ it tries to parse the payload.

Headers tend to come from **a set of common known headers**, rather than completely custom options. Some are even mandatory.

Some examples are:

- `Host` : specifies the domain of the server it is communicating with. Mandatory.
- `Content-Type` : specifies the type of content in the body and optionally, the charset.
- `Authorization` : specifies the authorization scheme and any associated data or token.

Read here to learn more about the [most common HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

In our example, we have the following headers:

```
Host: api.move.mil
Content-Type: application/json
If-Match: MjAyMC0xMi0wMVQxODo1NjoxMy4zNjkxNzRa
```

This shows

- The mandatory `Host` header used to send the hostname.
- The commonly used `Content-Type` header specifies that we are using JSON.
- The `If-Match` header is used for [Concurrency Control or Optimistic Locking](Concurrency-Control.md).

## Conclusion

It's important to follow conventions related to the positioning of parameters. Many other tools and frameworks will depend on these conventions which will make client implementation and integration simpler and more robust.
