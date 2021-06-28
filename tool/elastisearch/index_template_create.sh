set -x
curl -XPUT 'http://localhost:9200/_template/my_template' \
  -H 'Content-Type: application/json' -d '
{
  "index_patterns": "accesslog-*",
  "settings": {
    "number_of_shards": 1
  },
  "mappings": {
    "access_log_type": {
      "properties": {
        "host": { "type": "keyword" },
        "uri": { "type": "keyword" },
        "method": { "type": "keyword" },
        "accesstime": { "type": "date" }
      }
    }
  }
}
'
