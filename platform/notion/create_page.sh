#!/bin/bash
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2021-05-13" \
  --data '{
    "parent": { "database_id": "b384efc0df0f47c7b6665d6c5774d497" },
    "properties": {
      "Key": {
        "title": [
          {
            "text": {
              "content": "Yurts in Big Sur, California"
            }
          }
        ]
      }
    }
  }' | jq
