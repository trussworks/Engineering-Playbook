# Data-Design

[Data Design] Where to pass in data or parameters to your endpoint

When should you use query, body, or header params?
should be careful about putting any secure data in query
headers tend to be consistent across the api (we use content-type and if-match)
everything else we put in the body, and we use json

## Passing Parameters

One of the first things you'll need to figure out after decided on the [HTTP Method](HTTP-Methods.md) you intend to use for your endpoint is how to supply data to the endpoint.

There are four different ways to do so, so it can be confusing. They are:

- Path
- Query
- Body
- Headers

Let's dive into these and understand what they are. We'll look at the following request to update a shipment.

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

### Path Parameter

This parameter is in the URI of the path, the web address so to speak.

**Typically, path parameters are used to pass identifiers of the resource in the path**. This is handy as it means you do not have to send a body for a simple GET request, for example.

In our example request, which is a PATCH request, the path is:

```
api.move.mil/v1/shipments/01b9671e-b268
```

The code at the end `01b9671e-b268` identifies the shipment we are trying to update. You may have more than one id in the path but it's recommended to keep the [URL depth low](Data-Design.md#Url-Depth).

### Query Parameter

The next type of parameter is also tacked on to the address but is passed in after the main URL.

**Queries are usually used for pagination, filtering, expansion of nested objects.**

In our example request, the query parameter is `expand` and the value is `services`:

```
?expand=services
```

This could be used to ask the endpoint to expand a nested object called services. You can send more than one query parameter, but must follow the [rules for query string formatting](https://en.wikipedia.org/wiki/Query_string).

One important thing to keep in mind is that since the query is in the path, it will be exposed in some situations and therefore is **not the right place for sensitive data**.

No matter whether you are using https/TLS, the URL and query will be exposed.

Read here for more details on [Information exposure through query strings in url](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url)

### Body Parameter

**The body of the post is where the bulk of the parameters are passed in.**

Usually we use a JSON representation to provide structure to the body. This is perfect as it is very flexible and is a well understood standard. We also return data back to the caller in this format.

In the example, the body that we send is:

```
{
    "shipmentType": "UPS",
    "deliveryDate": "2020-06-08"
}
```

In an https/TLS request, the body will be safely encrypted and never exposed so it is **safe to send sensitive data**.
