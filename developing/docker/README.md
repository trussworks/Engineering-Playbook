# [Tools and Practice](../README.md) / Docker

## Overview

Docker is useful because it allows you to both package and run
software with all its dependencies and configuration in isolation.  It
also allows you (in theory) to have the same environment in
development as in CI and production.

## Installation

Install [Docker for Mac](https://docs.docker.com/docker-for-mac/install/).

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

## Cleaning Up

To see where all your disk space is going:

    docker system df
   
To remove stopped containers, dangling images, the build cache and
unused networks:

    docker system prune

See [the docker system prune
documentation](https://docs.docker.com/engine/reference/commandline/system_prune/)
for more options like pruning volumes

