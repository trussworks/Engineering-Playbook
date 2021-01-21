# URL Design

Under REST principles, a URL identifies a resource. The following URL design patterns are considered REST best practices:

  - URLs should include nouns, not verbs.
  - Use plural nouns only for consistency (no singular nouns).
  - Use HTTP methods (HTTP/1.1) to operate on these resources:
  - Use HTTP response status codes to represent the outcome of operations on resources.

An example of this is as follows:
```
  POST /prime/v1/shipments
```
- We use POST as that is the HTTP method used for creation. 
- The resource being created is a shipment, therefore we use the plural noun `shipments`.
- This endpoint will respond with a `201 - Created` which is the HTTP status cdoe for successful creation.

A **bad example** would be as follows
``` 
  PUT /prime/v1/shipment/create
```
- PUT is not used to create new resources but to replace existing ones.
- The resource is using the singular not plural word `shipment`
- It also uses a verb `create` in the URL.

Check here for more examples of [good and bad RESTful URLs](https://apiguide.readthedocs.io/en/latest/build_and_publish/use_RESTful_urls.html#good-restful-url-examples).

### State change

In practice, state change actions often need their own endpoint, as there are side effects to state change. The pattern represented above works well for creating, updating or deleting objects, but not always for managing state. 

To that end, we do sometimes have endpoints that specifically change state and therefore have a "verb" url. It is understood that only one thing is changing about the resource when this endpoint is hit.

```
  PATCH /prime/v1/shipments/shipmentID/updateStatus
```

This is not considered REST best practice but if you are building an API where the goal is guide the user through a very specific flow, this can be useful. Be thoughtful about when you use it.

### URL Depth

The `resource/identifier/resource` URL pattern is usually sufficient to support most resource graphs. If your URL depth goes deeper than `resource/identifier/resource`, it may be evidence that the granularity of your API is too coarse.

For e.g. if you have an address on a shipment on a move, avoid using urls like
```
/api/v1/move/moveID/shipments/shipmentID/agents
```

Instead consider using
```
/api/v1/shipments/shipmentID/agents
```

## API Payload formats

To interact with an API, a consumer needs to be able to produce and consume messages in the appropriate format. For a sucessful interaction both parties would need to be able to process (parse and generate) these messages.

It is best to use standardized formats such as JSON or XML throughout the API, both on successful or erroneous results. 

In case of an error, you return a consistent error payload. In case of success, you return a payload matching the following conventions.

- **POST** 

  Usually, the URL specifies the resource type in plural `api/v1/shipments` but the response payload will be the single `shipment` that was created.

- **PUT** and **PATCH** 
  
  Usually, the url will specify a specific resource `api/v1/shipments/shipmentID` and the response payload will be that specific resource updated.

- **GET** 

  The URL may specify the resource type in plural `api/v1/shipments` in which case the response payload will be a list of `shipments`.

  OR the URL may specify a specific resournce `api/v1/shipments/shipmentID` in which case the response payload will be that specific shipment. 

These guidelines were adapted from the [Australian Digital Service's API Design Guide](https://apiguide.readthedocs.io/en/latest/build_and_publish/use_RESTful_urls.html#).
