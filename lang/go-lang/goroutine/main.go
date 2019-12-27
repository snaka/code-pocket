package main

import (
  "fmt"
)

func main() {
  go func() {
    for {
      fmt.Println("sub loop")
    }
  }()
  for {
    fmt.Println("main loop")
  }
}
