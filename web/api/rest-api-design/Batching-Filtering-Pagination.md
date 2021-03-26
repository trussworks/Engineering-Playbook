## Batching, Filtering, and Pagination

### Filtering:

- Topics covered: Elasticsearch and URL Parameters

#### Elasticsearch:

- Elasticsearch is a distributed RESTful search engine that is recommended for most filtering needs.
- It works by sorting results by a relevance score, which is a way to quantify how well each result matches a query (higher score = more relevance, e.g. the more relevant the document being searched)
- The score is also determined by whether the query is run via a query or filter context.
- In a **query context** the following query clause is passed to a query parameter to calculate a relevance score: How well does this document match this query clause?
- When a **filter context** is used, which happens mostly when filtering structured data, a query clause is passed to a filter parameter (e.g. `filter`). Some examples include:

  - Does this timestamp fall into the range 2015 to 2016?
  - Is the status field set to "published"?

Examples of a query and filter context:

```
GET /_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title":   "Search" }},
        { "match": { "content": "Elasticsearch" }}
      ],
      "filter": [
        { "term":  { "status": "published" }},
        { "range": { "publish_date": { "gte": "2015-01-01" }}}
      ]
    }
  }
}

```

In this example we see the query parameter `”query”:{...}` indicates a context. The `bool` and two `match clauses` within the query context are used to score the document relevance. Finally, the filter parameters `”filter”: [...]` have two clauses, `term` and `range`, which are part of the filter context and allow it to filter out the documents that don’t match.

#### URL parameters:

**TODO:** Add more examples

- You can filter using resource names. For example, if you have an API that tracks different dogs breeds, their names, and their birth years.

`GET https://api.thedogapi.com/v1/breeds`

- If adding a query to your url parameters, use question marks before providing a query parameters, e.g. limits:
  `GET https://api.thedogapi.com/v1/breeds?limit=2`
- Square brackets on key names within a resource provide more flexibility with filtering and enable you to indicate a range. For example, one way to indicate a range of values:

  If you want to search for dogs born between 2019 and 2021:
  `GET https://api.thedogapi.com/v1/dogs/birth[year]=2019&birth[year]=2021`

  If you want to search for dogs whose birthdays are in the Spring:
  `GET https://api.thedogapi.com/v1/dogs/birth[month]=March&birth[month]=May`

- The above examples using brackets indicate different resources that can be passed in as URL parameters to indicate range.

- Search Query Params allow for more flexibility in adding filters to a URL. You can add sorts and other search parameters to make filtering suit your needs more efficiently

#### Downside to URL Parameters in Filtering:

- The URL parameter method of filtering works best when there are exact matches in property names. For example, moves exatly 100 to 200 miles of a given location.

- Filtering by a range of data is also tricky with url parameters.

- How you use URL parameters can also be risky because if you are adding parameters in plain text in your URL, this may expose information you don’t want to show up.

- Information in brackets is harder to parse on the server side.

- Search Query Params are not the easiest tool to use.

- When searching documents for similar terms, elasticsearch is much more efficient because it uses [fuzzy queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html).
