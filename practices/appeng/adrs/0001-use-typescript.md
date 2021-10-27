# Preference to use TypeScript in place of JavaScript

- Status: In progress
- Deciders: @suzubara <tag yourself!>
- Date: Oct 26, 2021

## Decision drivers

As consultants, we want to write understandable, maintainable code that people can use in our absence. Types provide a kind of built-in documentation for anyone looking at the code.

​​TypeScript has many helpful autocomplete and snippet generation features that make development faster.

Used with Create React App requires no additional setup

TypeScript community is large and well maintained (also backed by Microsoft)

TypeScript is typically compiled at build time, so run-time type errors (due to external data, user input, etc.) are not eliminated

Surfacing compile time errors (or errors in IDE) allows us to catch bugs earlier

Static types reduce the need to write unit tests or use guard clauses for a class of bugs related to variables being missing, undefined etc in vanilla JS

## Considered options

- Use TypeScript in place of JavaScript
- Use framework/tool-specific type-validation methods (e.g. React PropTypes)
- Don’t use TypeScript and continue using JavaScript

## Pros and cons of each option

### Use TypeScript

**Pros:**

- `+` Documentation and community support are well-established
- `+` Readily available linting and compile tools, including IDE integrations
- `+` Enables many helpful autocomplete and snippet generation features that make development faster

**Cons:**

- `-` Potentially considerable learning overhead
- `-` Typically compiled at build time, so run-time type errors (due to external data, user input, etc.) are not eliminated
- `-` Requires changes to build system and config - need to be compiling types for local dev, before deploy, etc. Also need to manipulate the tsconfig. However, most widely used tools have clear docs or libraries that assist with this.

**Impact of this decision:**

- Potential technical debt of having to convert existing code to TypeScript
- Financial / time cost of training everyone to learn how to use TypeScript

### Use framework/tool-specific validation methods (e.g. React PropTypes)

**Pros:**

- `+` No need for developers to learn a new language
- `+` No need to add TypeScript dependency to build toolchain
- `+` Compile-time build failures can be frustrating

**Cons:**

- `-` Likely, less code editor/linting integration than TypeScript
- `-` Typing coverage limited to specific problem domains
- `-` Unlikely to cover interaction between problem domains
- `-` Each validation method has a different style/method of reporting errors, which all need to be accounted for separately
- `-` Custom linting and reporting may implement framework/tool-specific validation inconsistently and idiosyncratically

**Impact of this decision:**

### Don’t use TypeScript and continue using JavaScript

**Pros:**

- `+` Less learning overhead
- `+` JS has heavier usage and community support compared to TypeScript

**Cons:**

- `-` No static type checking

**Impact of this decision:**

## Decision outcome: Use TypeScript

## Exceptions:

- If the project is not using JavaScript
- If the learning curve is too costly given the project circumstances (i.e., timeline)
- If the handoff cost is too high for client to maintain continuity of the project
