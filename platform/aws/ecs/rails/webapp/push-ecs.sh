#!/bin/sh
LC=$(git rev-parse --short HEAD)
docker build -t snaka/webapp:ecs-${LC} .
docker push snaka/webapp:ecs-${LC}
