package main

import (
  "fmt"
  "log"
  "os"
  "io/ioutil"
)

func main() {
  // open temporary file with prefix 'foo'
  f, err := ioutil.TempFile(os.TempDir(), "foo")
  if err != nil {
    log.Fatal(err)
  }
  defer f.Close()

  // write to temporary file
  f.WriteString("Hello, WOrld!\n")

  fmt.Println(f.Name())
}
