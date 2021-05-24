#!/bin/bash
curl 'https://api.notion.com/v1/databases' \
  -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
  -H 'Notion-Version: 2021-05-13' | jq '.results[] | [.id, .title[].plain_text]'
