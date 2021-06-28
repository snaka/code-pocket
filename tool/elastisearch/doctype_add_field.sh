set -x
curl -XPUT 'http://localhost:9200/my_index/_mapping/my_type' \
  -H 'Content-Type: application/json' -d '
{
  "properties": {
    "additional_comment": { "type": "text" }
  }
}
'
