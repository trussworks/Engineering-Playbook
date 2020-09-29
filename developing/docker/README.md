# [Tools and Practice](../README.md) / Docker

<!-- toc -->

* [Overview](#overview)
* [Installation](#installation)
  * [Configuration of Shared Folders](#configuration-of-shared-folders)
  * [Configuration of Storage Driver](#configuration-of-storage-driver)
  * [Configuration of Disk Image](#configuration-of-disk-image)
  * [Configuration of Resources](#configuration-of-resources)
* [Volume Mount Performance](#volume-mount-performance)
* [Inspecting the Docker Virtual Machine](#inspecting-the-docker-virtual-machine)
* [Inspecting Container Resources](#inspecting-container-resources)
* [Image IDs, Tags, and Digests](#image-ids-tags-and-digests)
  * [Problem Statement and Summary](#problem-statement-and-summary)
  * [Deep Dive](#deep-dive)
  * [Locally Built Images vs. Images Pushed to a Registry](#locally-built-images-vs-images-pushed-to-a-registry)
* [Cleaning Up](#cleaning-up)
* [Docker Configuration](#docker-configuration)
  * [Keybindings](#keybindings)
  * [Credentials Store](#credentials-store)
* [Additional Resources](#additional-resources)

<!-- Regenerate with "pre-commit run -a markdown-toc" -->

<!-- tocstop -->

## Overview

Docker is useful because it allows you to both package and run
software with all its dependencies and configuration in isolation.  It
also allows you (in theory) to have the same environment in
development as in CI and production.

## Installation

You should install via homebrew

     brew cask install docker

### Configuration of Shared Folders

Anecdata suggests that removing some of the default shared folders can
decrease CPU usage.  Usually you only need to share volumes under your
home directory.  Open the docker for mac preferences, then select
"File Sharing" and then remove `/Volumes` and `/private`.  You may
also find improvements removing `/Users` and replacing it with
`/Users/YOUR_USERNAME_GOES_HERE`.

### Configuration of Storage Driver

If you've been running Docker for Mac for some time, make sure you are
using the `overlay2` storage driver.

    $ docker info |grep Storage
    Storage Driver: overlay2

If you don't see overlay2, upgrading to the latest version will add
that support, but you would need to recreate all of your docker data
to utilize it.  The `Reset` bomb should do it.

### Configuration of Disk Image

If you've been running Docker for Mac for some time, make sure you are
using the `raw` disk image format and not `qcow2`.  Open Docker for
Mac preferences and select `Disk`.  Make sure the image ends with
`Docker.raw`.

### Configuration of Resources

Because docker uses a Virtual Machine under the hood on macOS, you can
choose the maximum number of resources it is allowed to use. In the
preferences under `Advanced`, you can select how many CPUs to assign,
how much memory to assign, and how much swap to give the VM.

See also [Understanding memory usage in Docker Desktop on
Mac](https://docs.google.com/document/d/17ZiQC1Tp9iH320K-uqVLyiJmk4DHJ3c4zgQetJiKYQM/edit)
by the docker developers.

## Volume Mount Performance

Synchronizing the data between the host (your Mac) and the container
can be resource intensive and/or slow.  Read about the [performance
tuning options](https://docs.docker.com/docker-for-mac/osxfs-caching/)
to see if they might apply to the conditions in your project.

## Inspecting the Docker Virtual Machine

If you are having performance problems or are just curious, you can
run commands inside the Virtual Machine with

    docker run --rm=true -it --privileged --pid=host \
        justincormack/nsenter1 /usr/bin/top

## Inspecting Container Resources

To get a `top` like report of what your containers are doing

    docker stats

## Image IDs, Tags, and Digests

Docker image identifiers and SHA256 digests (aka hashes or checksums) are a
complex topic. In the context of our work at Truss, the topic is especially
relevant when figuring out which value to use when referencing an image in an
Amazon Elastic Container Service (ECS) task definition.

### Problem Statement and Summary

An [ECS task
definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definition_image)
can pull an image by tag or digest, so which should you use? Image tags are
potentially mutable and are not tied to the image contents. For instance, a new
image could be created with different contents, but could reuse the same tag as
an earlier, different image. If your ECS task definition pulls the image based
on tag, you could be pulling in a different image than expected. An image's
digest, on the other hand, is a hash based on the image contents. Pulling the
image based on digest provides greater security and protection against
unintended changes.

When building a Docker image locally, the SHA256 digest to use in the ECS task
definition won't be known until the image has been pushed to the Docker
registry. The reason for this is explained in more detail in the sections
below.

However, once the image has been pushed to the registry, the SHA256 digest to
use in the ECS task definition can be found with the following command:

    docker image inspect some_image_name -f '{{.RepoDigests}}'

Or if using Amazon's Elastic Container Registry (ECR):

    aws ecr describe-images --repository-name some_repo_name --image-ids imageTag=some_image_tag | jq ".imageDetails[0].imageDigest" -r

### Deep Dive

For a deep dive into docker image IDs and digests, pull and inspect the
`hello-world` image:

    docker image pull hello-world:latest
    docker image inspect hello-world:latest

The output will look something like this (not all fields are shown):

    [
        {
            "Id": "sha256:bf756fb1ae65adf866bd8c456593cd24beb6a0a061dedf42b26a993176745f6b",
            "RepoTags": [
                "hello-world:latest"
            ],
            "RepoDigests": [
                "hello-world@sha256:4cf9c47f86df71d48364001ede3a4fcd85ae80ce02ebad74156906caff5378bc"
            ],
            "Parent": "",
            ...
            "Container": "71237a2659e6419aee44fc0b51ffbd12859d1a50ba202e02c2586ed999def583",
            "ContainerConfig": {
                ...
                "Image": "sha256:eb850c6a1aedb3d5c62c3a484ff01b6b4aade130b950e3bf3e9c016f17f70c34",
                ...
            },
            ...
            "Config": {
                ...
                "Image": "sha256:eb850c6a1aedb3d5c62c3a484ff01b6b4aade130b950e3bf3e9c016f17f70c34",
                ...
            },
            ...
            "RootFS": {
                "Type": "layers",
                "Layers": [
                    "sha256:9c27e219663c25e0f28493790cc0b88bc973ba3b1686355f221c38a36978ac63"
                ]
            },
        }
    ]

In this example, there are four unique sha256 digests: Id, RepoDigests,
ContainerConfig/Config (which share the same sha256), and Layers (many images
will have more one than layer, each with its own sha256).

For comparison, here is the `docker image ls` output for the same image:

    docker image ls --digests hello-world

Output:

    REPOSITORY          TAG                 DIGEST                                                                    IMAGE ID            CREATED             SIZE
    hello-world         latest              sha256:4cf9c47f86df71d48364001ede3a4fcd85ae80ce02ebad74156906caff5378bc   bf756fb1ae65        9 months ago        13.3kB

The following table shows how the digests and IDs correspond between the output
of the `docker image ls` and `docker image inspect` commands.

| docker image ls| docker image inspect |
| :------------- | :------------------- |
| DIGEST | RepoDigests |
| IMAGE ID | Id |

Why are there so many sha256 digests? Why are they different? Which one(s) will
you most likely use in your daily workflow?

Let's start by reviewing some of the terminology involved:

    Image: a collection of one more layers.

    Layer: identified by a digest, which is a computed SHA256 of the layer's
    content. If the content changes, the digest will change.

    Image configuration object (JSON): includes, among other things, an ordered
    list of all the layer digests that combine to form an image.

Now, let's go through some of the fields in the `docker image inspect` output:

    Id: this is the Image ID, a digest or computed SHA256 hash of the image's JSON
    configuration object. Note: this is different from the RepoDigest.

    RepoTags: the Repository and Tag for the image. Images that have been built
    locally and those that have been pushed to or pulled from a Docker registry
    will have RepoTags.

    RepoDigests: the SHA256 of an image that has been pushed to or pulled from a
    Docker registry. Note: a locally built Docker image will not have a
    RepoDigest until it has been pushed to a Docker registry (more on that in
    the section below).

    Parent, Container, ContainerConfig, Config: these relate to the intermediate
    container and image used to build the image. You will most likely not need
    to use these fields in your daily Docker development.

    RootFS: contains the list of layers that make up the image.

### Locally Built Images vs. Images Pushed to a Registry

The difference between locally built images and those that are pushed to or
pulled from from a Docker registry are where things get especially complicated.

The article [Explaining Docker Image
IDs](https://windsock.io/explaining-docker-image-ids/) has a very helpful
description of the concepts discussed in this and the above sections, in particular:

* [Locally Built
Images](https://windsock.io/explaining-docker-image-ids/#locallybuiltimages).
Summary: a locally built Docker image includes information about the
intermediate image used to build the image; when the image is pushed to a Docker
registry, only the leaf image is uploaded.
* [Content Digest vs. Distribution
  Digest](https://windsock.io/explaining-docker-image-ids/#afinaltwist).
  Summary: the digests for a locally built image are based on the layers' tar
  archived content; the layers pushed to the registry are compressed, and the
  manifest created and uploaded to the registry refer to the compressed
  versions.

The entire article is worth a careful read, but hopefully the summaries above
will help to explain why locally built images and registry images have different
digests.

## Cleaning Up

To see where all your disk space is going:

    docker system df

To remove stopped containers, dangling images, the build cache and
unused networks:

    docker system prune

See [the docker system prune
documentation](https://docs.docker.com/engine/reference/commandline/system_prune/)
for more options like pruning volumes

## Docker Configuration

You can configure all sorts of defaults in the [docker
config.json](https://docs.docker.com/engine/reference/commandline/cli/#configuration-files).

### Keybindings

If you dislike the default detach keybindings of `CTRL-p CTRL-q`, you
can override it in `config.json` with something like:

    {
      "detachKeys": "ctrl-@,ctrl-["
    }

### Credentials Store

You can store docker credentials in an [external credentials
store](https://docs.docker.com/engine/reference/commandline/login/#credentials-store).

On macOS, the keychain will be used by default, but if you need/want
to store shared credentials, [pass](https://www.passwordstore.org/)
can be used.

## Additional Resources

If you would like to dig deeper into how Docker works, how it isolates code from the host machine, and related ramifications a good place to start are the articles listed below.

* [Official Docker Getiting Started Guide](https://docs.docker.com/get-started/)
* [Linux Journal Weekend Reading Containers](https://www.linuxjournal.com/content/weekend-reading-containers)
  * Particularly the articles _Everything You Need to Know about Linux Containers Part I and II_
