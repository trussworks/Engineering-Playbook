# Front End

## Overview

These are our recommendations and best practices for front end development at Truss.

## Contents

- [Project Architecture](./architecture.md) - guidance around starting a new F/E project from scratch
- [General Guide to Implementing UI](./developing-ui.md) - includes best practices around writing HTML, CSS, and using CSS modules
- [Project Checklist](./project-checklist.md) - a high-level list of things to consider when setting up a F/E project or making architectural decisions
- [React Guide](./react.md)
- [TypeScript Resources](./typescript.md)
- [Testing](./testing.md)
- [Developer Experience](./developer-experience.md) - information about using debugging tools, linters and auto-formatters

## TLDR

- We typically choose React as our front end framework of choice.
- We recommend using [TypeScript](https://www.typescriptlang.org/) when possible. We have compiled some [TypeScript Resources](./typescript.md).
- We like to practice component-driven development and often use [Storybook](https://storybook.js.org/) for design system documentation.

### What is front end development?

In order to make informed decisions around what kind of tools, libraries, and frameworks to use for your web application, it helps to have a strong understanding of what "front end" means in the context of web development. The front end part of an application stack refers to the client-side code that is downloaded from a web server, and executed in the browser on an end user's device. It includes, but is not limited to, the HTML and CSS that renders the user interface.

It is also important to keep in mind, especially as the ecosystem of front end development continues to expand, that the compiled code that will be executed natively by the browser is ultimately HTML, CSS, and JavaScript. While it is certainly possible to build a dynamic web app using just these languages, it is all run in a single environment, uncompartamentalized, making it easy to introduce bugs and unintended side effects. Therefore, many of the tools we see in modern front end development are actually used in order to improve the developer experience, and in turn the users, by enforcing consistent patterns, reducing the potentiality for bugs, and automating tasks that assist in performance optimization.

## ReactUSWDS

[ReactUSWDS](https://github.com/trussworks/react-uswds) is an internal Truss project aiming to create React implementations of USWDS 2.0 UI components. If you are building a new UI component that is based on a USWDS design, and might be useful to abstract so it can be shared by other projects, you may want to consider building it in ReactUSWDS instead. You can find more information about [contributing to and using ReactUSWDS here](https://github.com/trussworks/react-uswds).

## Additional Resources

### Libraries We Like

- \[ \] [classnames](https://github.com/JedWatson/classnames) (managing CSS classes in JS components)
- \[ \] [DayJS](https://day.js.org/), [luxon](https://moment.github.io/luxon/index.html) (newer alternatives to Moment, working with dates and times)
  - Note: [MomentJS](https://momentjs.com/) has been deprecated, **do not use on new projects**
- \[ \] [validateJS](https://validatejs.org/), [yup](https://github.com/jquense/yup) (validating form object models)
- \[ \] [Formik](https://formik.org/), [React-hook-form](https://react-hook-form.com/) (building forms in React)
- \[ \] [numeral.js](http://numeraljs.com/), [big.js](https://mikemcl.github.io/big.js/) (working with numbers and decimals)

### Learning

Various resources on React, Redux, etc, for a variety of learning styles.

- _Read_: [React Tutorial](https://reactjs.org/tutorial/tutorial.html) - Official tutorial from React. I (Alexi) personally found this cumbersome. If you stick with it you’ll learn the basics.
- _Watch_: [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) - Free 30 video series by the author of Redux.
- _Watch_: [ReactJS / Redux Tutorial](https://www.youtube.com/playlist?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_) - ~60 minutes of YouTube videos that will get you up and running with React and Redux. The content is useful, the guy’s voice can be a bit of a challenge.
- _Watch_: [This video](https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&v=nYkdrAPrdcw) from the introduction of Flux can be useful for some high-level background about the pattern (the MVC bashing is overdone, but otherwise this video is useful.)
- _Do_: Roll your own React app! Make a little project of your own. This works well if you’re more hands-on. Here are some rough steps, but you’ll need to do a bit of filling-in-the-blanks:
  - Use [create-react-app](https://github.com/facebookincubator/create-react-app) to bootstrap a new React project.
  - Figure out how to run the app live (hint: npm run start)
  - Find and skim through some of the important files it made: `index.hmtl`, `index.js`, `App.js`. What do these look like they’re doing?
  - Change the page title to something of your choosing.
  - Create a new React [component](https://reactjs.org/docs/react-component.html) that has a `<button>` or something in it.
  - [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) that component into `App.js`, and make sure you can see it!
  - Write a new test for your component. (Hint: `npm run test`). create-react-app gives you Jest for free, look at its manual.
  - Make the thing in your component clickable, even if it just does `alert(‘hey there!’)`
  - Add [React Router](https://github.com/ReactTraining/react-router) to your project.
  - Make a new component like the first one, and add routes so that they display depending on the URL. E.g:
    - `http://localhost:3000/component1` shows the first one on the page;
    - `http://localhost:3000/component2` shows the second one.
  - Add [Redux](https://redux.js.org/) to your project.
    - This is a rather big step. You’ll need to have some sort of state, so make a login button and “logged in” will be the state you are going to keep track of.
    - When the user is logged in, there should be a “log out” button shown.

## More Topics to Cover

This guide is not complete, and always a work in progress! These are other areas of frontend development that we'd like to develop more resources and best practices for. Feel free to add onto this playbook!

- Single page application development
- Server-side rendering
- Progressive web app (PWA)
- Non-React frameworks
- Webpack & frontend compilation tooling
