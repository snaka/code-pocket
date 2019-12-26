package main

import "fmt"

func TypeCheck(x interface{}) {
  switch x.(type) {
  case bool:
    fmt.Println("bool")
  case int, uint:
    fmt.Println("integer or usigned integer")
  case string:
    fmt.Println("string")
  default:
    fmt.Println("don't know")
  }
}

func main() {
  TypeCheck(1)
  TypeCheck("hoge")
}
