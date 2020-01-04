package main

import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  src := rand.NewSource(time.Now().UnixNano())
  rnd := rand.New(src)
  fmt.Println("Intn(100):", rnd.Intn(100))
  fmt.Println("Int:", rnd.Int())
}
