# Docker

<!-- mdformat-toc start --slug=github --no-anchors --maxlevel=6 --minlevel=2 -->

- [Overview](#overview)
- [Installation](#installation)
  - [Configuration of Shared Folders](#configuration-of-shared-folders)
  - [Configuration of Storage Driver](#configuration-of-storage-driver)
  - [Configuration of Disk Image](#configuration-of-disk-image)
  - [Configuration of Resources](#configuration-of-resources)
- [Volume Mount Performance](#volume-mount-performance)
- [Inspecting the Docker Virtual Machine](#inspecting-the-docker-virtual-machine)
- [Inspecting Container Resources](#inspecting-container-resources)
- [Cleaning Up](#cleaning-up)
- [Docker Configuration](#docker-configuration)
  - [Keybindings](#keybindings)
  - [Credentials Store](#credentials-store)
- [Additional Resources](#additional-resources)

<!-- mdformat-toc end -->

## Overview

Docker is useful because it allows you to both package and run
software with all its dependencies and configuration in isolation.  It
also allows you (in theory) to have the same environment in
development as in CI and production.

## Installation

You should install via homebrew

```
brew cask install docker
```

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

```
$ docker info |grep Storage
Storage Driver: overlay2
```

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

```
docker run --rm=true -it --privileged --pid=host \
    justincormack/nsenter1 /usr/bin/top
```

## Inspecting Container Resources

To get a `top` like report of what your containers are doing

```
docker stats
```

## Cleaning Up

To see where all your disk space is going:

```
docker system df
```

To remove stopped containers, dangling images, the build cache and
unused networks:

```
docker system prune
```

See [the docker system prune
documentation](https://docs.docker.com/engine/reference/commandline/system_prune/)
for more options like pruning volumes

## Docker Configuration

You can configure all sorts of defaults in the [docker
config.json](https://docs.docker.com/engine/reference/commandline/cli/#configuration-files).

### Keybindings

If you dislike the default detach keybindings of `CTRL-p CTRL-q`, you
can override it in `config.json` with something like:

```
{
  "detachKeys": "ctrl-@,ctrl-["
}
```

### Credentials Store

You can store docker credentials in an [external credentials
store](https://docs.docker.com/engine/reference/commandline/login/#credentials-store).

On macOS, the keychain will be used by default, but if you need/want
to store shared credentials, [pass](https://www.passwordstore.org/)
can be used.

## Additional Resources

If you would like to dig deeper into how Docker works, how it isolates code from the host machine, and related ramifications a good place to start are the articles listed below.

- [Official Docker Getiting Started Guide](https://docs.docker.com/get-started/)
- [Linux Journal Weekend Reading Containers](https://www.linuxjournal.com/content/weekend-reading-containers)
  - Particularly the articles _Everything You Need to Know about Linux Containers Part I and II_
