set -x
curl -XPUT 'http://localhost:9200/my_index' \
  -H 'Content-Type: application/json' -d '
{
  "mappings": {
    "my_type": {
      "properties": {
        "user_name": { "type": "text" },
        "date": { "type": "date" },
        "message": { "type": "text" }
      }
    }
  }
}
'
