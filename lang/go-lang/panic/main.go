package main

import (
  "fmt"
)

func main() {
  defer func() {
    if x := recover(); x != nil {
      fmt.Println("recover:", x)
    }
  }()

  panic("runtime error")
  fmt.Println("Hello World") // do not reach
}
