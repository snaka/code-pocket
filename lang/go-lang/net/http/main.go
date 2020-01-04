package main

import (
  "fmt"
  "log"
  "io/ioutil"
  "net/http"
)

func main() {
  res, err := http.Get("https://www.example.com/")
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("StatusCode:", res.StatusCode)
  fmt.Println("Content-Type:", res.Header["Content-Type"])
  fmt.Println("Request.Method:", res.Request.Method)
  fmt.Println("Request.URL:", res.Request.URL)

  // read body
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(string(body))
}
