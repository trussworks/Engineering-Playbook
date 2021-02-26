# [Engineering Playbook](../../../../README.md) / [Web Development](../../../README.md) / [API Guide](../../README.md) / [REST API Design](../README.md) / Concurrency Control

When you have more than one client using your API, you might want to think about concurrency control.

Consider any data a client can read and update on the server, let's call that a resource.

Most clients retrieve a copy of the resource, update it locally and then send the update some time later. If you have more than one client, it's possible for a client to send an update that is now out of date with changes on the server. It will unintentionally overwrite changes that others have made.

## Optimistic Locking

Optimistic locking is one strategy for handling this issue in your API.

In an optimistic locking scheme, you only allow a resource to be updated after you verify that the resource hasn't been modified since the client last checked.

You can do this with an *eTag*. An eTag is an identifier for the version of the underlying resource.

When the client requests a resource, you return an eTag that identifies the version they received. When they wish to update that resource, the eTag they send must match the current version in the database.

Read more, with diagrams, about [Optimistic Locking here](https://medium.com/swlh/api-concurrency-control-strategies-cd546c2cdc16).

### Optimistic Locking Example

#### Step 1 - Client requests resource

When the client requests information about a shipment, they get an etag for that version of the record.

Request:

```
GET /v1/shipments/99783f4d-ee83 HTTP/1.1
Host: api.move.mil
Content-Type: application/json
```

Response, notice the `eTag` value:

```
HTTP/1.1 200 OK
Content-Type: application/json
Body:
{
  "eTag": "MjAyMC0xMi0wMVQxODo1NjoxMy4zNjkxNzRa",
  "shipmentType": "UHAUL",
  "deliveryDate": "2020-06-01"
  "destinationAddress": {
    "streetAddress1": "812 S 129th Street",
    "city": "San Diego",
    "state": "CA",
    "postalCode": "92102"
  },
}

```

This eTag was created by hashing the last updated date of the record.

#### Step 2 - Client updates resource

Then when the client wishes to update this resource, they send the eTag in the `If-Match` header of the PUT or PATCH request.

Request, notice the `If-Match` in the header:

```
PUT /v1/shipments/01b9671e-b268 HTTP/1.1
Host: api.move.mil
Content-Type: application/json
If-Match: MjAyMC0xMi0wMVQxODo1NjoxMy4zNjkxNzRa
Body:
{
    "shipmentType": "UPS",
    "deliveryDate": "2020-06-08"
}
```

If the eTag matches the resource in our database (which we can check by rehashing the lastUpdated date), we return a `200 Success` Response.

If the eTag does not match, we do not update the resource and we return the `412 Precondition Failed` response.

This would only happen if another client had updated the data in the meanwhile. The client must then re-request the data to get the latest eTag.
