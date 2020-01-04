package main

import (
  "os"
  "log"
  "fmt"
)

func main() {
  // open current dir
  f, err := os.Open(".")
  if err != nil {
    log.Fatal(err)
  }
  defer f.Close()
  // show directories
  fis, err := f.Readdir(0)
  for _, fi := range fis {
    if fi.IsDir() {
      fmt.Println(fi.Name())
    }
  }
}
