#!/bin/bash

# リリース当番表
DATABASE_ID=2b6991f019f643feb5a2bc27a4f37d8e

# リリース当番表から日付と担当を抜き出す
function list() {
  curl -X POST "https://api.notion.com/v1/databases/$DATABASE_ID/query" \
    -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
    -H 'Notion-Version: 2021-05-13' \
    -H "Content-Type: application/json" \
    --data '{
      "sorts": [
        {
          "property": "Date",
          "direction": "ascending"
        }
      ]
    }' \
    | jq '.results[].properties | { Date: .Date.date.start, Name: .Name.title[].plain_text}'
}

# 今日の当番を抜き出す
function today() {
  TODAY=$(date +%Y-%m-%d)
  curl -X POST "https://api.notion.com/v1/databases/$DATABASE_ID/query" \
    -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
    -H 'Notion-Version: 2021-05-13' \
    -H "Content-Type: application/json" \
    --data @- <<EOS | jq '.results[].properties | { Date: .Date.date.start, Name: .Name.title[].plain_text}'
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
