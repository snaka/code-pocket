curl -XPOST 'http://localhost:9200/my_index/my_type/' \
  -H 'Content-Type: application/json' \
  -d '
{
  "user_name": "John Smith",
  "date": "2017-10-15T15:00:00",
  "message": "Hello Elasticsearch world."
}
' \
| jq
