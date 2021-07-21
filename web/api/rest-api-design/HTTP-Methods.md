# [Engineering Playbook](../../../../README.md) / [Web Development](../../../README.md) / [API Guide](../../README.md) / [REST API Design](../README.md) / HTTP Methods

When using HTTP methods like PUT or GET in your REST API, it's important to comply with their definitions under the [HTTP/1.1 Standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

Complying with the standard means that the users of your API will be able to understand it more easily and use it correctly. In addition, if you hook up observability or load testing tools in the future, they are more likely to work out of the box if you have abided by the common expectations.

The most important ones will be covered here.

## GET

The GET method requests a specified resource. Requests using GET should only retrieve data.

Example: This request returns a list of moves from the server.

```
GET /v1/moves HTTP/1.1
Host: api.move.mil
```

## POST

The POST method is used to send data to create/update a type of resource.

Example: This request creates a shipment by sending a body with the shipment data.

```
POST /v1/shipments/ HTTP/1.1
Host: api.move.mil
Content-Type: application/json
Body:
{
    "shipmentType": "UHAUL",
    "destinationAddress": {
        "streetAddress1": "812 S 129th Street",
        "city": "San Diego",
        "state": "CA",
        "postalCode": "92102"
    },
}
```

## PATCH

The PATCH method is used to partially update a resource.

Example: This request updates two fields on a shipment that exists on the server.

```
PUT /v1/shipments/01b9671e-b268 HTTP/1.1
Host: api.move.mil
Content-Type: application/json
Body:
{
    "shipmentType": "UPS",
    "deliveryDate": "2020-11-08"
}
```

## PUT

The PUT method is used to send data to create/update a specified resource but it is generally used to replace an existing resource, rather than create a new one.

Example: Update an address by replacing with a complete address resource.

```
PUT /v1/mto-shipment/c548a243-9705/address/701a2bf8 HTTP/1.1
Host: api.move.mil
Content-Type: application/json

{
  "streetAddress1": "3373 NW Martin Luther King Jr Blvd",
  "city": "Alameda",
  "state": "CA",
  "postalCode": "94501",
  "country": "USA"
}
```

The PUT method is idempotent, which means calling the same PUT request multiple times **must** always produce the same result.

Calling PUT five times will repeatedly replace the same resource, with the same result. Calling POST five times will create 5 instances of the resource.

See this [article](https://restfulapi.net/rest-put-vs-post/) for more discussion.

## DELETE

The DELETE method deletes the specified resource.
