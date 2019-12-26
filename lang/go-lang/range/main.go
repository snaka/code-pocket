package main

import (
  "fmt"
)

func main() {
  for i, r := range "ABC" {
    fmt.Printf("[%d] -> %d\n", i, r)
  }

  for i, r := range "あいうえお" {
    fmt.Printf("[%d] -> %d\n", i, r)
  }
}
