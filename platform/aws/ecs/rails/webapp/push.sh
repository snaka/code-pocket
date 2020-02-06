#!/bin/sh
LC=$(git rev-parse --short HEAD)
docker build -t snaka/webapp:${LC} .
docker push snaka/webapp:${LC}
