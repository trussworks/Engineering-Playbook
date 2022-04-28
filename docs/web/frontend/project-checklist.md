# Project Checklist

## A Front End Application Lifecycle

```
+---------+     +-----------+    +-------------+
| develop |     |  compile  |    | user views  |--> user interaction, JS & API calls
|   &     |====>| to static |===>| in browser  |<-- update the DOM
|  test   |     |  assets   |    | (page load) |
+---------+     +-----------+    +-------------+
                      ^
        this can happen locally, on CI, or on a server.
        it can also be triggered by a job,
        a webhook, content update, prerender, etc.
```

## What are you building?

- Is your web app designed to be:
  - \[ \] a single page application (SPA) -- usually a data-rich, dynamic experience where most of, if not the entire page, is rendered _after_ page-load by JS
    - \[ \] If a SPA, do you need server-side rendering (such as for optimized performance, accessibility, and SEO)?
  - \[ \] primarily static HTML with some isolated JS components that don't need to communicate with each other
  - \[ \] static HTML with no DOM-manipulating JS required at runtime
- What browsers and devices do you need to optimize for?
  - Who is your audience? Is this app for a specific organization’s internal use or the general public?
  - What kind of access do they have? Primarily desktop or mobile? Reliable, high speed network access, or offline-first? High or low-end devices?
  - Are there specific browsers or network restrictions they are required to use when interacting with your app?
  - Also consider screen size, touch vs. no touch, screen readers, and low network/offline access. Centering thinking around "desktop vs. mobile" is usually a trap -- there are laptops with touch screens, tablets in every size, and there are no guarantees that a user won't try to access your URL from a Nintendo Switch or a Kindle. Focus on feature-detection over device-detection.
  - Should it be a [progressive web app](https://developers.google.com/web/progressive-web-apps/)?

## How will you build it?

> Even if you answered “static HTML” above, that doesn’t mean you have to write and maintain HTML files by hand. You can still take advantage of tools like JS frameworks and compilers to componentize UI elements, fetch and organize content, and test the DOM output. It may just mean generating static markup at compile time, instead of serving JS directly to users.

- How will the markup (HTML) be rendered?
  - \[ \] Static assets (i.e., HTML/JS files uploaded to a web server)
    - If static assets, what kind of client-side code will you be writing?
      - \[ \] Native HTML / CSS / JS (including external scripts or libraries loaded into the DOM)
      - \[ \] Code requiring a compile step to be browser-compatible (such as ES6+, TypeScript, and SCSS)
        - See "Additional considerations if using a build tool" below
  - \[ \] A server application will be responsible for returning HTML
    - How will the server compile markup? Will it use a templating language (i.e., `.erb` in a Rails application)?
    - Do you need to augment server-rendered markup with CSS or client-side JS?
    - Will there be any DOM manipulation after page load?
    - Try to identify which UI elements will be rendered or manipulated by the server vs. client-side JS
    - Consider serving markup from a Node.JS server in order to share templates and code across the stack.
- Do you need to include other assets such as fonts, images, or SVG?

### Additional considerations if using a build tool

- \[ \] What tool to use? (webpack, gulp, rollup, parcel, etc.)
- \[ \] What environment to build in (Node version)
- \[ \] Do you need loaders for any or all of HTML, CSS, JS, static files?
- For JS:
  - What JS version(s) do you want to write in and target? (i.e., ES6 > ES5)
  - What will you use to transpile JS (i.e., Babel)
  - Do you need additional polyfills or plugins for your target output?
  - Do you want static type checking? (TypeScript / flow / PropTypes)
  - What will you use for running scripts and managing dependencies (npm or yarn)?
  - Will you use a JS framework (React, vue, etc.)?
- For CSS:
  - How do you want to write CSS?
  - What classname conventions do you want to use? (BEM, OOCSS)
  - Normalize (resets native browser CSS to one standard)
  - Autoprefixer (automatically adds browser prefixes to newer CSS features that may not have consistent support or syntax)
  - Pre-/post-compilers (SASS/SCSS, LESS, PostCSS)
  - CSS modules
  - CSS-in-JS (styled components, etc.)

### Additional considerations if building a SPA

- \[ \] Global state management (Redux, context, etc.)
  - \[ \] side effects (sagas, thunks, hooks?)
- \[ \] Client-side routing
- \[ \] Managing head/meta/title tags
- \[ \] XHR/fetch service
  - What kind of API(s) do you need to interact with? (REST, GraphQL)
- \[ \] Static asset loading (HTML, CSS, images, fonts, SVGs, etc.)

### User Interaction

- Forms
  - Validating
  - Submitting
  - Showing output
- File uploads

### Managing & Displaying Content

- Static content from the code
  - i18n
- Dynamic content from a CMS, API, etc.
- User-generated content (UGC)
  - Escaping entities
  - Formatting

### Maintaining code standards & developer tools

- \[ \] Linting/formatting (eslint, prettier, stylelint)
- \[ \] Commit hooks (husky)
- Browser dev tools
- React developer tools
- Redux debugger

### Working with Design

- Pre-fab frameworks (i.e., Bootstrap, MaterialUI, etc.)
- Component-driven development
  - Maintain component libraries for documentation and testing (i.e., Storybook)
  - Build and view UI components outside the context of the application (don't need to connect to API, database, etc.)
  - Iterate on UI elements over time
  - Automate cross-browser/device testing by using this with visual testing tools (see below)
- How do you want to render icons? SVGs? FontAwesome?

## Testing

- Unit tests
  - Test small pieces or components in isolated environments
  - Good to run continuously during development, as well as part of CI checks
  - Jest, Testing Library
- Integration tests
  - Test larger chunks of the app and how they work together with partial or complete context
  - Good to run continuously during development, as well as part of CI checks
  - Jest, Testing Library, Enzyme
- End-to-end (E2E) tests
  - Test complete user flows in the browser, as if you were a user
  - Most often useful for high-level regression tests and critical paths
  - Testing in different environments (browsers, devices) can be useful at this point
  - Heavy load, often best done in CI
  - Good to run during development for high-level changes such as refactors, changing URLs or entrypoints
  - Cypress, Saucelabs, Browserstack
- Visual testing
  - Scripts that crawl through URLs or component libraries and take screenshots
  - Tests pass or fail when the images are compared to references
  - Heavy load, often best done in CI
  - Happo, Loki, Percy
- Accessibility Testing
  - Can be done through unit/integration testing and/or end to end.
  - pa11y, axe-core, Cypress audit

## Deploying

- How will the front end code fit in with the rest of the application ecosystem, other systems and services?
  - \[ \] Where will front end assets be hosted? Do they need their own CI/CD pipeline?
  - \[ \] Will you use a CDN, and how will you manage caching?
  - \[ \] How will you manage non-code assets, like images and fonts?
  - \[ \] If making API calls to an internal backend, what will the various environments and domains be? Will you need to set up CORS and/or CSRF protection?

## Optimization

- Build tool config/integrations
  - \[ \] an asset manifest
  - \[ \] sourcemaps
  - \[ \] versioning/hashing
  - \[ \] code splitting/chunking/dynamic imports
  - \[ \] absolute imports
  - \[ \] bundle analyzer
  - \[ \] minification
