package main

import (
  "log"
  "os"
  "io/ioutil"
)

func OpenAndReadAll() {
  f, err := os.Open("foo.txt")
  if err != nil {
    log.Fatal(err)
  }

  bs, err := ioutil.ReadAll(f)
  if err != nil {
    log.Fatal(err)
  }

  log.Println(string(bs))
}

func ReadAllFile() {
  bs, err := ioutil.ReadFile("bar.txt")
  if err != nil {
    log.Fata(err)
  }

  log.Println(string(bs))
}

func main() {
  OpenAndReadAll()
  ReadAllFile()
}
