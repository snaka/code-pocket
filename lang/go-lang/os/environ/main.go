package main

import (
  "fmt"
  "os"
)

func main() {
  for _, v := range os.Environ() {
    fmt.Println(v)
  }
  fmt.Println("---")
  // get
  fmt.Println("HOME:", os.Getenv("HOME"))
  fmt.Println("---")
  // set
  os.Setenv("HOGE", "hogehoge")
  fmt.Println("HOGE:", os.Getenv("HOGE"))
  fmt.Println("---")
  // lookup
  if fuga, ok := os.LookupEnv("FUGA"); ok {
    fmt.Println(fuga)
  } else {
    fmt.Println("no $FUGA")
  }
}
