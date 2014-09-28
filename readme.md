## Simple Docker Guide

Basic dockerfile example usign NodeJs.

This repository is part of the post: [Hello, my name is Docker](http://raphamorim.com/hello-my-name-is-docker/).

Let's start, to build an image with docker:

```sh
  cd docker-guide
  docker build -t="docknode" .
```

Then to run that image and attach to it at the same time:

```sh
  docker run -i -t docknode
```
