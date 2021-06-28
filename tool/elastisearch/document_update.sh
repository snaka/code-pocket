curl -XPUT 'http://localhost:9200/my_index/my_type/1' \
  -H 'Content-Type: application/json' \
  -d '
{
  "user_name": "Mike Stuart",
  "date": "2017-11-04T00:00:00",
  "message": "This message was updated."
}
'
