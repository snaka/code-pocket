package main

import (
  "log"
  "os"
)

func main() {
  f, err := os.Open("foo.txt")
  if err != nil {
    log.Fatal(err)
  }
  defer f.Close()
}
