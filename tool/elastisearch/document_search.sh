curl -XGET 'http://localhost:9200/my_index/my_type/_search?pretty' \
  -H 'Content-Type: application/json' \
  -d '
{
  "query": {
    "match": {
      "message": "Elasticsearch"
    }
  }
}
'
