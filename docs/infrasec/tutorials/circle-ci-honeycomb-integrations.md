# CircleCi Honeycomb Integration

[Honeycomb](https://www.honeycomb.io/) provides CI integrations allowing better instrumentation of builds. One such integration is for CircleCi via an [Orb](https://github.com/honeycombio/buildevents-orb). This document provides a guide for adding Honeycomb instrumentation to CircleCi builds.

## Setup

A few items need to be setup before modifying the repo.

1. CircleCI needs to have the following environment variables configured: `BUILDEVENT_APIKEY` and `BUILDEVENT_CIRCLE_API_TOKEN`. These have been populated for the Trussworks CircleCi Organization using the `org-global` context.
1. CircleCI also needs a per project environment variable `BUILDEVENT_DATASET` to separate the Honeycomb datasets.

More information on the environment variables used by the Honeycomb integration can be found [here](https://github.com/honeycombio/buildevents#environment-variables).

## CircleCi Repo Changes

### Adding Orb

Add the following to the circleci file

```yaml
orbs:
  buildevents: honeycombio/buildevents@0.2.7
```

### Add Dependent Jobs

The Orb requires two additional jobs.

Setup: This job downloads the build events binary and helps setting up the workspace to be instrumented. It should be the first job and all workflow jobs should depend on it.

Watch: This job is a parallel job that polls the CircleCi API using the `BUILDEVENT_CIRCLE_API_TOKEN`. It is the main trace span and "watches" the build until completion providing top span metrics.

```yaml
  # Do not forget to add the executor to the below jobs
  setup:
    steps:
      - buildevents/start_trace
  watch:
    steps:
      - buildevents/watch_build_and_finish
```

Now we'll start to use the new jobs. Here we add in the `setup` and `watch` jobs to happen before the main `terratest` job. Each of these jobs uses the `org-global` context for access to the global environment variables.

```yaml
workflows:
  validate:
    jobs:
    - setup:
        context:
        - org-global
    -  watch:
        context:
        - org-global
        requires:
          - setup
    - terratest:
        requires:
          - setup
        context:
        - org-global
```

## Update Existing Jobs

To add the correct trace information existing jobs will need to be updated with a span. This tells Honeycomb that a particular job will need to be traced.

```yaml
 # Sample job before Honeycomb tracing
 terratest:
    steps:
    - checkout
    - restore_cache:
```

We can add the span using the Orb's `with_job_span`. It contains a `step` directive for all the build steps.

```yaml
terratest:
    steps:
      # Here we add the tracing along with redefine the steps for the job
      - buildevents/with_job_span:
          steps:
          - checkout
          - restore_cache:
```

For more advanced tracing the [Orb](https://circleci.com/developer/orbs/orb/honeycombio/buildevents#commands) does provide additional directives for more detailed information such as running commands and pushing custom metrics such as assets sizes.

## Verification

When working properly the CircleCI workflow should look like below.

![honeycomb-circleci-workflow](./images/honeycomb-circleci-workflow.png)

In Honeycomb there is a trace id for each build that matches the build id in CircleCi. Viewing the trace for a particular build should display a trace as below.

![Honeycomb Trace](images/honeycomb-circleci-trace.png)
