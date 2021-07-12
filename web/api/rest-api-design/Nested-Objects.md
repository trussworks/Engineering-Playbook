# How to Handle Nested Objects


> How are requests for multiple nested objects handled?
> Which object is considered the parent? Which object is most important from a data integrity perspective?
> If an update fails for one of the nested objects, how will that affect the entire transaction? Should the entire update fail in that case?
> What is a nested object? add definition for that

Handling HTTP requests with nested data structures can be difficult and often involves making judgement calls. While working on your endpoint, you'll need to decide:

- **What information should be in the path? Which objects' IDs are needed?**
	- All endpoint paths need to be logically grouped with other endpoints. Ex: All actions to view or edit Farm data would likely have paths starting with `/farms[/...]`.
	- All endpoints that involve viewing or updating a specific object need to have a path that is uniquely determined. Is there one ID that will ensure this URL is unique, or do you need more specificity? 

- **What should the request body look like?**
	- If you need to send a complex request for an update endpoint, should the user also be allowed to included nested/child objects?

- **What should the response look like?**
	- When you're returning data, what information is needed to give the user a complete picture? Maybe you need to include related objects that aren't as tightly coupled as child/parent objects.

In general, you want to make sure this endpoint is clear and intuitive to the user while also following best practices for Optimistic Locking and data integrity. Your strategy may also change depending on the action being performed by the endpoint.

## Endpoints for specific objects (GET, PUT, PATCH, DELETE)

Ask yourself these questions:

- What is the minimum amount of information needed to uniquely find this object?
- What information from the parent object, if any, is needed to perform this action?
- Which object(s), if any, are being modified by this endpoint?

### What to put in the path

In general, keep the path as short as possible. If you do not need the parent ID to uniquely determine the object being modified by this endpoint, it most likely shouldn't be in the path. The rare exception to this would be if information from the parent is needed by the endpoint, and _the parent's ID isn't on the child object._

An example from MilMove would be the `addresses` table. Records on this table are referenced by many other tables - `shipments`, `duty_stations`, `service_items` - and the information from `addresses` is just a _subset_ of the information needed to have a complete record on these other tables. This means that we could refer to `addresses` as a child object of shipments, duty stations, or service items. 

However, because addresses are referenced by so many other objects, there is no "parent ID" on this table. Instead, shipments, duty stations, and service items refer to the address ID in one (or more) of their columns. In order to find the true parent for an address, the user must provide the ID of the parent object and indicate which type of object it is. A valid way to do this is by including this ID in the path, like:

`/shipments/{shipmentID}/addresses/{addressID}`
`/duty-stations/{dutyStationID}/addresses/{addressID}`
`/service-items/{serviceItemID}/addresses/{addressID}`

On the otherhand, `shipments` in MilMove also have a child object called `agents`. Agents are people who serve as contacts for the shipment, and they can only ever belong to one shipment. Therefore, the data model for this table is a little different - the agent itself has a field called `shipmentID` that refers to the parent object. Having this path:

`/shipments/{shipmentID}/agents/{agentID}`

is redundant. If we have an agent's ID, we will always be able to get the shipment's ID. In this case, it is preferable to go with the simpler version:

`/agents/{agentID}`

which is enough to give you everything you need to know about this object.

### What should the request look like

- add example of when you WOULD want to update nested objects together
- also batch updates (or deletes)

Think about how expansive this action should be. Do you think the user should be able to update everything about the object at once, including its nested objects? Why is this necessary?

You'll quickly run into a problem with this strategy if your project uses Optimistic Locking, or Concurrency Control DEPENDING ON ITS IMPLEMENTATION (explain - ex. what if the etag was passed through the body instead of headers). Each unique object has its own Entity Tag that identifies which version of the object we're looking at, but you can only pass through one `If-Match`  value in the request headers. This means you will be violating your project's policy of Optimistic Locking if you allow the user to update the parent and its nested objects in one update, even if they are tightly linked. 

It is rarely a bad idea to break down endpoints into smaller actions. The advice here is thus fairly simple: **When in doubt, do not allow nested objects to be sent in the request for these endpoints.**

### What should the response look like

It is generally a good idea to send back a complete image of the object. Even if your endpoint only updates one field, it is usually valid to send back the whole object, including references to nested objects (for example, the addresses on a shipment), in the response. This logic also applies to POST actions. 

## Endpoints for new objects (POST)

Most of the considerations for GET, PUT, PATCH, and DELETE endpoints apply to POST endpoints as well, with slightly different outcomes. First, ask yourself these questions:

- What information from the parent object, if any, is needed to perform this action?
- Which object(s) are being created by this endpoint?

### What to put in the path

Use the same logic you applied when you were designing the path for the GET, PUT, PATCH, or DELETE endpoint, but drop the ID of the nested/child object from the path. For example, we could have:

`/shipments/{shipmentID}/addresses`

as the path for a POST endpoint to create an address on a shipment, and:

`/agents`

as the path for a POST endpoint to create an agent for a shipment. 

### What should the request look like

If the object being created includes a field for the parent ID, then the request can simply look like the object's usual definition. Your rules on required and read-only fields will apply, but otherwise, you don't need to make any special considerations. If the parent ID is not on the object being created, however, things become a little trickier. 

Think again about the example of addresses on a shipment. One shipment may actually be linked to multiple addresses - for example, the pickup address and the destination. How do we indicate which address we're creating? There is nothing on the address record itself that will tell us which field on the shipment it will belong to. 

There are 3 ways we can approach this:

1. Set a value in the request that indicates which address field on the shipment we're creating
  **Advantages:** Our endpoint design pattern for POST actions will mirror the suggested pattern for PUT/PATCH endpoints.
	**Drawbacks** This means that we need a field on the request payload that doesn't actually correspond to a database field, which could get confusing. The backend will need to handle this somewhat clunky logic. 

2. Require the user to create the address and then hit another endpoint to assign set a field on the shipment with the new address's ID
  **Advantages:** This is the simplest option for this specific endpoint.
	**Drawbacks:** This sets us up to get orphaned records in our system when the user (inevitably) forgets to do this. We also need another endpoint to update the correct address field. In general, you should avoid this option. 
	
3. Allow the user to create the address when they create the shipment
  **Advantages:** Two birds with one stone! Intuitively makes sense to require address info when you create a shipment as well. Does not break Optimistic Locking requirements either, as neither of these objects exist yet. 
	**Drawbacks:** Doesn't match the pattern suggested for PUT/PATCH endpoints.
	
When selecting one of these methods, try to be as consistent as possible with the rest of your API.

## Endpoints for lists of objects (ALL METHODS)

