package main

import (
  "fmt"
)

var HELLO = ""

func init() {
  HELLO += "Hello "
}

func init() {
  HELLO += "world"
}

func init() {
  HELLO += " from init()"
}

func main() {
  fmt.Println(HELLO)
}
