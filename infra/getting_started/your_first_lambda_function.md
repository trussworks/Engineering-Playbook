# [Getting Started](./README.md) / Deploying your first AWS Lambda Function with Go and Terraform

## Intro

This tutorial focuses on deploying a "Hello, World" Go program as a Lambda function using Terraform. The first section will cover creating the program in Go and the second section will cover writing the Terraform script that will deploy the program into AWS. As a bonus, we'll cover how you can configure AWS CloudWatch to invoke your Lambda function on a recurring schedule.

## Assumptions

* You're at least on macOS Mojave 10.14
* You have the following installed on your machine:
  * Terraform
  * AWS CLI
  * Go
* You have an AWS account.
* You have awscli configured with you credentials.
* You know some Terraform basics like "plan" and "apply".

## Creating the Go program

1. First things first, open up that command line.
2. Create a directory wherever you desire and name it `hello-lambda`.
3. Set your current directory to `hello-lambda`.
4. AWS has kindly provided a Go library to develop Lambda functions. Let's install it.

    ```shell
    go get github.com/aws/aws-lambda-go/lambda
    ```

5. Create a new file called `main.go`. This will contain the code that runs in our Lambda function.
6. Within `main.go`:

    ```go
    package main

    import (
        "github.com/aws/aws-lambda-go/lambda"
    )

    func hello() (string, error) {
        return "Hello, world!", nil
    }

    func main() {
        lambda.Start(hello)
    }

    ```

    Let's dissect this program for a second.

    As you can see, we imported the AWS library we installed. We then utilize it to call `lambda.Start()`. This takes a handler function that will be called when a request comes in.

    The handler in this case is our function `hello`. This handler is relatively simple. It doesn't take any internal Lambda requests and just returns the classic "Hello, world!".

7. All that's left is to transform our Go program into something Lambda can actually run. We can accomplish this by creating a binary and storing it in a `.zip` file.

    ```shell
    env GOOS=linux GOARCH=amd64 go build -o main main.go
    zip main.zip main
    ```

    You'll notice that we are setting some environment variables using `usr/bin/env` before calling `go build`. This is because when we normally run `go build`, Go assumes that an executable will be built for the architecture that the program what written on. In this case, we want it to run on Linux and an amd64 architecure, so we set the Go "OS" (GOOS) and the Go "Architecture" (GOARCH). Using the `-o` flag allows us to specify the name and location of the executable produced by `go build`.

## Deploying with Terraform

1. In the `hello-lambda` directory, create a new file called `main.tf`.
2. Open that new file up in your favorite text editor or IDE.
3. Before we create our Lambda function, we need to tell Terraform the basics such as that we'll be deploying to AWS and what region we'll be deploying this function to.

    ```terraform
    variable "aws_region" {
        default = "us-west-2"
    }

    provider "aws" {
        region = "${var.aws_region}"
    }
    ```

4. Let's create that Lambda function. Add the following lines to the file. Click [here](../aws/naming.md) for more on how we name our AWS resources.

    ```terraform
    resource "aws_lambda_function" "hello_world_test" {
        filename = "main.zip"
        function_name = "hello-world-test"
        role             = "${aws_iam_role.lambda-hello-world-test.arn}"
        handler          = "main"
        source_code_hash = "${base64sha256(file("main.zip"))}"
        runtime          = "go1.x"
    }
    ```

    `filename` points to where our `.zip` file is.

    `function_name` is the name given to the function. We can invoke our Lambda function by calling this name.

    `role` is the IAM role attached to this function. We will be creating this in the next step.

    `handler` is the entrypoint into the function. In this particular case, it's the `main` executable produced by `go build`.

    `runtime` specifies what language this function will be running in.

    `source_code_hash` is used to trigger updates when your source code changes.

5. What's left to do finish `main.tf` is creating that IAM role.

    ```terraform
    resource "aws_iam_role" "lambda_hello_world_test_policy" {
        name = "lambda-hello-world-test-policy"

        assume_role_policy = <<EOF
        {
        "Version": "2012-10-17",
        "Statement": [
            {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Effect": "Allow",
            "Sid": ""
            }
        ]
        }
    EOF
    }
    ```

    This particular function doesn't need access to other AWS services so we're giving it a role with a no access policy.

6. Save the file.
7. Back on the command line, it's time to initialize the setup for your Terraform plan.

   ```shell
   terraform init
   ```

8. If that's looking good, let's check out what our plan looks like.

    ```shell
    terraform plan
    ```

9. Once you've read over the plan, it's time to deploy your function!

    ```shell
    terraform apply
    ```

## Invoking your Lambda function

1. To first check if you deployed successfully, let's print out a list of the existing Lambda functions.

    ```shell
    aws lambda list-functions --region=us-west-2
    ```

2. Once you confirm your function is within that list, invoke your function!

   ```shell
   aws lambda invoke --function-name=lambda-hello-world-test output.txt
   ```

3. Congrats, you deployed your first Lambda function with Terraform!!!

## Bonus: Set up a recurring schedule for your Lambda Function

Let's say you want your shiny new Lambda function to run every day. Maybe every hour! To do this, you will need to use another AWS service called [CloudWatch](https://aws.amazon.com/cloudwatch/). Let's open our `main.tf` up again and add a few things:

1. Add a CloudWatch rule that specifies how often the event will trigger. [This article](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html) has more info on how to use the `schedule_expression` value.

    ```terraform
    resource "aws_cloudwatch_event_rule" "run_hello_world_lambda_every_hour_test" {
      name = "run-hello-world-lambda-every-hour-test"
      description = "Fires the hello world lambda every hour"
      schedule_expression = "rate(1 hour)"
    }
    ```

2. Specify a target, our Lambda function.

    ```terraform
    resource "aws_cloudwatch_event_target" "cloudwatch_event_target_hello_world_lambda_test" {
      rule = "${aws_cloudwatch_event_rule.every_hour.name}"
      target_id = "hello-world-test"
      arn = "${aws_lambda_function.hello_world_test.arn}"
    }
    ```

3. Make sure CloudWatch has permission to invoke the Lambda function.

    ```shell
    resource "aws_lambda_permission" "permit_hello_world_lambda_execution_from_cloudwatch_test" {
      statement_id = "AllowExecutionFromCloudWatch"
      action = "lambda:InvokeFunction"
      function_name = "${aws_lambda_function.hello_world_test.function_name}"
      principal = "events.amazonaws.com"
      source_arn = "${aws_cloudwatch_event_rule.every_hour.arn}"
    }
    ```

4. Run our Terraform commands form the command line: `terraform plan` and `terraform apply`.

5. Your function will now run every hour!

## Cleaning up

We've been hard at work setting up our Lambda function, but let's face it &mdash; we probably won't be relying on it as part of our production infrastructure. This is a good opportunity to learn about taking down infrastructure with Terraform. __Make sure you are inside the correct directory when running the following commands!__

1. Run `terraform plan -destroy`, to generate a plan for destroying the infrastructure you have created. You'll see a list of all the resources you created in your `main.tf` file.
2. If everything in the list looks good, you can run `terraform apply`'s destructive counterpart, `terraform destroy`. It's like our Lambda function was never even there!
