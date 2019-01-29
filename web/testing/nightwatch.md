# Feature and QA testing in eApp

This is documentation of a decision on the eApp project as to why cypress was not chosen for this project. Though typically Truss would recommend [cypress](cypress.md)

## Why selenium and nightwatch
### Requirements

1. Automated tests we can run
1. Ability to run tests against IE locally and in a CI environment
1. Green tests of basics

#### Automated Tests We Can Run

The tests need to be run regularly to ensure they are still passing. If they are not run they will inevitably begin to fail and if no one notices, then regressions are not caught and the value of the tests goes down since when they are run it will be unclear as to what has caused them to fail.

So to support this we will mark all the currently failing tests as pending except for the newly fixed identification section tests. Once this is complete then ensure that the tests are run regularly. Primary desire is to have Circle CI build process run on a regular basis, ideally on every PR branch, but if not at least once a week against master. If these options are not possible or we run out of time the tests should be run at least once a week by one of the eApp team developers.

#### Ability To Run Tests Against IE Locally And In A CI Environment

The current user base of eApp is primarily IE11 based at this time. In eApp history some major bugs that affected only IE users made it all the way into the hands of eApp end users. Due to this and the need to ensure that IE as well as other browsers are supported we need to ensure that whatever system we use supports multiple browsers. To that end selenium will be used as it already has wide support for multiple browsers and can be deployed with the help of selenium grid in a private environment controlled by NBIS.

## What other options were considered

We considered cypress.io as an alternative. While it provided better testing tools for developers and debugging tests, as well as better consistency between runs. However, it lacks support for IE currently, and no eta on when support for that will be added leads us to not choose it.
