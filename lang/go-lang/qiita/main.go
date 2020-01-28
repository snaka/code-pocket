package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	resp, err := http.Get("http://qiita.com/api/v2/users/snaka/items?page=1&per_page=2")
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	var buf bytes.Buffer
	if err := json.Indent(&buf, body, "", "  "); err != nil {
		log.Fatal(err)
	}
	fmt.Println(buf.String())
}
