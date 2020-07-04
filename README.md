# t-maj-800-infra

This repository contains the infrastructure required to deploy the whole system.

## Building

First, make sure to clone the submodules: `git submodule update --init`.

Then, because we use Docker, building all the components is as easy as: `docker-compose build`.

## Deploying

Similarly, deploying the system is done in one command: `docker-compose up`.
