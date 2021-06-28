curl -XPOST 'http://localhost:9200/my_index/my_type/1/_update' \
  -H 'Content-Type: application/json' \
  -d '
{
  "doc": {
    "message": "Only message was updated."
  }
}
'
