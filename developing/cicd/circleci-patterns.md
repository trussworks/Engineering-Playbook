# [Intro to CI/CD](README.md) / CircleCI Config Patterns

At Truss, CircleCI tends to be our CI/CD tool of choice. In order to help
developers and infrastructure engineers get their pipelines working quickly,
there are some patterns you can use to make your pipeline more robust.

## Split Build/Push Steps

If you are building a pipeline that builds docker images and then deploys
them to multiple repositories, you can save the built image to the CircleCI
workspace, then load it via another. You will have two commands, a build
command and a push command, and you'll run the build job once, and a push
job for each repository.

<details>
  <summary>Build/Push Config Pattern</summary>

  ```yaml
  commands:
    build_image:
      parameters:
        dockerfile:
          type: string
        image_name:
          type: string
        tag:
          type: string
      steps:
        - run:
            name: 'Build docker image'
            command: |
              docker build -f << parameters.dockerfile >> -t << parameters.image_name >>:<< parameters.tag >> .
              mkdir -p workspace
              docker save -o workspace/<< parameters.image_name >> << parameters.image_name >>:<< parameters.tag >>
        - persist_to_workspace:
            root: workspace
            paths:
              - << parameters.image_name >>

    push_image:
      parameters:
        image_name:
          type: string
        tag:
          type: string
        repo:
          type: string
      steps:
        - attach_workspace:
            at: /tmp/workspace
        - run:
            name: 'Retrieve docker image from workspace'
            command: |
              docker load -i /tmp/workspace/<< parameters.image_name >>
        - run:
            name: 'Tag and push docker image'
            command: |
              bash -c "$(aws ecr get-login --no-include-email --region $AWS_REGION)"
              docker tag << parameters.image_name >>:<< parameters.tag >> ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/<< parameters.repo >>:git-commit-${CIRCLE_SHA1}
              docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/<< parameters.repo >>:git-commit-${CIRCLE_SHA1}

  jobs:
    build:
      executor: main
      steps:
        - checkout
        - setup_remote_docker:
            # You can set docker_layer_caching to true if you have a paid plan
            docker_layer_caching: false
        - make bin_linux/my_app
        - build_image:
            dockerfile: Dockerfile
            image_name: my_app
            tag: latest

    push:
      executor: main
      steps:
        - setup_remote_docker:
            # You can set docker_layer_caching to true if you have a paid plan
            docker_layer_caching: false
        - push_image:
            image_name: my_app
            tag: latest
            repo: app-my_app
  ```

</details>

Reference: [Build Docker image in one job and use in another job](https://support.circleci.com/hc/en-us/articles/360019182513-Build-Docker-image-in-one-job-and-use-in-another-job)

## Multiple Account Operations

With the use of AWS Organizations, it's not uncommon that we want CircleCI
to execute steps in different AWS accounts. You can update AWS credentials
and variables by saving multiple versions of the environment variables in
CircleCI, and then using commands to swap between them. See the example
code below:

<details>
  <summary>Multiple AWS Account Credentials Pattern</summary>

  ```yaml
    commands:
      aws_vars_dev:
        steps:
          - run:
              name: 'Setting up AWS environment variables for dev'
              command: |
                echo "export AWS_REGION=$DEV_REGION" >> $BASH_ENV
                echo "export AWS_ACCOUNT_ID=$DEV_ACCOUNT_ID" >> $BASH_ENV
                echo "export AWS_ACCESS_KEY_ID=$DEV_ACCESS_KEY" >> $BASH_ENV
                echo "export AWS_SECRET_ACCESS_KEY=$DEV_SECRET_ACCESS_KEY" >> $BASH_ENV

      aws_vars_prod:
        steps:
          - run:
              name: 'Setting up AWS environment variables for prod'
              command: |
                echo "export AWS_REGION=$PROD_REGION" >> $BASH_ENV
                echo "export AWS_ACCOUNT_ID=$PROD_ACCOUNT_ID" >> $BASH_ENV
                echo "export AWS_ACCESS_KEY_ID=$PROD_ACCESS_KEY" >> $BASH_ENV
                echo "export AWS_SECRET_ACCESS_KEY=$PROD_SECRET_ACCESS_KEY" >> $BASH_ENV

    jobs:
      do_thing_dev:
        executor: main
        steps:
          - aws_vars_dev
          - do_thing:
              environment: dev

      do_thing_prod:
        executor: main
        steps:
          - aws_vars_prod
          - do_thing:
              environment: prod
  ```

</details>

Reference: [Using `BASH_ENV` to set environment variables](https://circleci.com/docs/2.0/env-vars/#using-bash_env-to-set-environment-variables)

## Manual Approval by Restricted Groups

If you need to gate part of your CI/CD pipeline to a small group (for
example, you want only product managers to be able to approve deploys to
your production environment), you can use a CircleCI restricted context
to achieve this. You will need to create a GitHub team for the people you
want to be able to approve these jobs, create a context in the CircleCI
UI that includes this team only, and then add the context to all jobs
*after* the approval job.

Reference: [CircleCI Contexts](https://circleci.com/docs/2.0/contexts/)
