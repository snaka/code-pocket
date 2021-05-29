#!/bin/bash

# リリース当番表
set -x
DATABASE_ID=2b6991f019f643feb5a2bc27a4f37d8e

# 今日の当番を抜き出す
function today() {
  TODAY='2021-05-25'
  curl --silent -X POST "https://api.notion.com/v1/databases/$DATABASE_ID/query" \
    -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
    -H 'Notion-Version: 2021-05-13' \
    -H "Content-Type: application/json" \
    --data @- <<EOS
{
  "filter": {
    "property": "Date",
    "date": {
      "equals": "$TODAY"
    }
  },
  "sorts": [
    {
      "property": "Date",
      "direction": "ascending"
    }
  ]
}
EOS
}

case "$1" in
  "list" )
    list ;;
  * )
    today ;;
esac
