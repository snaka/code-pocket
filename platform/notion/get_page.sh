#!/bin/bash
# page=8933187f7f884a4a84f83476114456dd
page=9b39500b7a0044b69159be8428e44904
curl "https://api.notion.com/v1/pages/${page}" \
  -H 'Notion-Version: 2021-05-13' \
  -H 'Authorization: Bearer '"$NOTION_API_KEY"''
