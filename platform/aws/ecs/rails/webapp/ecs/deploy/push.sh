#!/bin/sh
set -x

LC=$(git rev-parse --short HEAD)
docker build -f Dockerfile -t snaka/webapp:ecs-${LC} .
docker push snaka/webapp:ecs-${LC}

# LAST_COMMIT をhashに置き換える
sed "s/webapp:LAST_COMMIT/webapp:$LC/g" ecs/task-definitions/webapp.json > webapp.json.tmp

# Task定義を登録しtmp削除
aws ecs register-task-definition --cli-input-json file://webapp.json.tmp
rm webapp.json.tmp

# サービスの更新
aws ecs update-service --service webapp-service --task-definition webapp --desired-count 1 --cluster ecs-cluster
