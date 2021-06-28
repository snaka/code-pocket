curl -XPUT 'http://localhost:9200/my_index' \
  -H 'Content-Type: application/json' -d '
{
  "settings": {
    "number_of_shards": "3",
    "number_of_replicas": "2"
  }
}
'
# デフォルトはそれぞれ以下
#   shard: 5
#   replica: 1
