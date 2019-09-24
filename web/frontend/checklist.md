# Front End Checklist

## A Front End Application Lifecycle
```
+---------+     +-----------+    +-------------+
| develop |     |  compile  |    | user views  |--> JS & API calls
|   &     |====>| to static |===>| in browser  |<-- update DOM
|  test   |     |  assets   |    | (page load) |
+---------+     +-----------+    +-------------+
                      ^
        this can happen locally, on CI, or on a server
        it can also be triggered by a job,
        a webhook, content update, prerender, etc.
```

### High Level
- [ ] Will the markup be rendered from static assets, or from a server application?
- [ ] Will the client code be written in vanilla JS / CSS / HTML, or require a build pipeline?
- Is your front end:
  - [ ] a single page application (SPA)
  - [ ] primarily static HTML with some isolated JS components
  - [ ] static HTML with no JS required at runtime
- [ ] What browsers and devices do you need to support?
  - Consider screen size, touch/no touch, screen readers, low network/offline access
- [ ] Should it be a progressive web app?

### Static assets
- [ ] CSS normalize
- [ ] CSS autoprefixer
- [ ] CSS framework? (i.e., Bootstrap)
- [ ] Fonts?
- [ ] Icons? (font, SVG)

### Build pipeline
- [ ] Build tool/bundler (webpack, gulp, rollup, etc.)
- [ ] npm or yarn
- [ ] Load any or all of HTML, CSS, JS, static files?
- Do you need (in dev and/or production):
  - [ ] an asset manifest
  - [ ] sourcemaps
  - [ ] versioning/hashing
  - [ ] code splitting/chunking/dynamic imports
  - [ ] absolute imports
  - [ ] bundle analyzer
  - [ ] minification

### Developer Experience (DX)
- [ ] TypeScript / flow / PropTypes
- [ ] ES6, babel, polyfills?
- [ ] Linting/formatting (eslint, prettier)
- [ ] Testing
- [ ] Commit hooks (precommit, husky)
- [ ] Component library (Storybook, Styleguidist)
- [ ] CSS modules, SCSS, styled components, etc.

### JS Frameworks
- [ ] React
- [ ] Vue
- [ ] other

### SPA Considerations
- [ ] Global state management (Redux, context, etc.)
  - [ ] side effects (sagas, thunks, hooks?)
- [ ] Routing
- [ ] Managing head/meta/title tags
- [ ] XHR/fetch service
- [ ] Static asset loading (HTML, CSS, images, fonts, SVGs, etc.)

### Miscellaneous JS libs
- [ ] classnames
- [ ] luxon (datetime handling)
- [ ] validateJS
- [ ] big.js (decimals)