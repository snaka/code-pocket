curl -XPUT 'http://localhost:9200/my_index/_settings' \
  -H 'Content-Type: application/json' -d '
{
  "index": {
    "number_of_replicas": "4"
  }
}
'
# shard の更新はできない
