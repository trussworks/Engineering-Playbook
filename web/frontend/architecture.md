# [Engineering Playbook](../../README.md) / [Web Development](../README.md) / [Front End](./README.md) / Frontend Architecture

## Selecting a version of Node.js

When starting a new project, you will want to select an Active LTS release of Node.js and make plans to move to the next LTS release after it becomes active and before the selected release goes out of maintenance. You could choose a “current” release but there is a good chance that the libraries you want to use have not been tested until it becomes active. Odd-numbered releases are short-lived, so only choose one intentionally. (For instance, if some library you want to use doesn't work in an LTS release.) Please refer to this [release schedule](https://nodejs.org/en/about/releases/) to make your selection.

Once you have done this, you may want to enforce it by configuring the `engines` key in your project’s package.json file. For instance, if you have selected 12.x, you might want to add this section:

```
# package.json
"engines": {
  "node": "^12"
}
```

You may also want to create team recommendations for how your team manages their local version of node.js. For instance, you could recommend they use [nodenv](https://github.com/nodenv/nodenv) or [nvm](https://github.com/nvm-sh/nvm) and provide configuration to keep it on the release path you want.

## Directory Structure

This is a suggested directory structure for your frontend application. It's not a hard requirement and you may end up using some, all, or none of these suggestions based on your project needs. Generally it's a good idea to be intentional about how you organize frontend code, separate code by concerns, and avoid coupling multiple functions or systems together (ie, React code, Redux code, native JS, etc.).

- `/src/components` - Low-level **React Components** that are more about rendering UI than handling application logic, and should typically _not_ be connected to providers directly. Aim for abstract, generic components that can be shared across the application easily, and will usually have corresponding `stories` files for viewing in Storybook.

- `/src/config` - High-level configuration definitions relevant to the whole application (such as routes).

- `/src/constants` - Define constants here instead of using string literals for any values with specific meaning in the context of the application. For example, data that comes back from the API that may be used in UI logic (such as a user role or casefile status).

- `/src/containers` - **React Components** that are primarily concerned with connecting UI to containers or providers (such as Redux), and sharing behavior or patterns via hooks or higher-order components.

- `/src/content` - Content that ends up displayed in the UI to the end-user. This is often expressed as plain text, but can also include JSX nodes in order to support formatted text. An example is defining how specific values from API data should be displayed as user-friendly language.

- `/src/graphql` - GraphQL code is in here! (but not all of it!)

  - `/src/graphql/fragments` - Common GraphQL fragments that may be shared across queries/mutations.

  - `/src/graphql/mocks` - Not to be confused with testing mocks. This defines client-only schema and resolvers for GraphQL requests that have not yet been implemented in the API.

- `/src/helpers` - Miscellaneous utilities that implement logic, data handling, and other common functions used throughout the application. These should not include React-specific code such as JSX, and they should generally be purely functional and well-tested.

- `/src/layout` - **React components** used to render common layout elements, such as header, footer, page content, etc. Similar to the components located in `/src/components`, they should focus on rendering UI rather than application logic or connecting to providers. However, they are designed such that there should only ever be one instance on each page.

- `/src/pages` - **React components** that correspond to actual routes (URLs). These are responsible for assembling the UI components for a page, and hooking them up with the necessary providers such as Redux or GraphQL. Queries should be co-located with page components, since pages are explicitly dependent on them.

- `/src/store` - Redux or other application state management code is in here! For more info on whether to use Redux or GraphQL, [read here](#to-redux-or-graphql).

  - `/src/store/store.ts` - Configures and exports the Redux store
  - Directories in here correspond to reducers, or "slices" of the store. Each directory contains its own types, actions, and reducer. These should all be well-tested.

- `/src/stories` - Storybook stories that aren't specific to a single component live here.

- `/src/styles` - Sometimes we also have to write CSS.

- `/src/types` - Type definitions that are shared throughout the application.

### Application Bootstrap

#### (or, how does all of this come together?)

The primary entry point is `src/index.tsx`. This file is responsible for:

- (if using GraphQL) Initializing ApolloClient with our configuration and any client-side mocks.
- Including the CSS entry point (`src/index.scss`) so it doesn't feel left out, and so our webpages look pretty.
- Wrapping the main `<App />` component inside of top-level providers, such as `<ApolloProvider>` (GraphQL), `<Provider>` (Redux), and `<PersistGate>` (redux-persist).
- Finally, rendering the resulting `<App />` component into the DOM (!!)

The next most important file is `src/App.tsx`. This is the top-level component that is rendered into the DOM. It is responsible for 2 important things:

- Imposing a global `<Layout />` onto _all pages_.
- Mapping whatever the current route is to the matching page component. If there is no matching page component, it will render the `NotFound` page component instead.

## Application State & Data Management

Choosing a method of state management for your application will depend a lot on the project’s needs, and how much & what kind of data is being cached from an API or is just being set and stored locally. Some common options are:

- [React Context](https://reactjs.org/docs/context.html) - built-in to React, “context provides a way to pass data through the component tree without having to pass props down manually at every level”
- [Redux](https://redux.js.org/) - client-side global state management and action dispatch, can persist to local storage and also use with [Redux-Saga](https://redux-saga.js.org/) to control complex logic flows and side effects
- [Apollo Client](https://www.apollographql.com/docs/react/) - caching API data for projects that are interacting with a GraphQL API
- [React Query](https://react-query.tanstack.com/) - similar API to ApolloClient but can be used with any kind of API (including REST)

### Local state vs. API data?

A lot of confusion can stem from where to store data and how to access it in React applications. An important thing to consider is whether the data is saved in a database, or if it represents local ephemeral state. In other words: does it need to be re-hydrated if the user refreshes their window? Here are some things to consider:

- Avoid using Redux to cache API data, as this will require a lot of manual handling to make associations for relational data, and knowing when to update or re-fetch resources. If you are using a GraphQL API, we recommend using [ApolloClient](https://www.apollographql.com/docs/react/), and if you aren't then try out [React Query](https://react-query.tanstack.com/). Both of these tools are very smart at caching, so when we get API data we don't need to store it anywhere else! Storing API data in Redux in addition to Apollo or ReactQuery would be redundant.
- React Context and Redux are useful for storing local application state. That means any UI state that the entire application needs to be aware of, but that _doesn't_ need to be saved to a database for later. Examples include the current page URL, and whether or not a full page modal is open. They can also be useful for storing mock data that will eventually come from the API, but hasn't been implemented yet.
