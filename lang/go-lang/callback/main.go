package main

import (
  "fmt"
  "time"
)

type callback func(string)

func waiter(cb func(string)) {
  time.Sleep(5*time.Second)
  cb("Finish!")
}

func main() {
  fmt.Println("call waiter")
  waiter(func(msg string) {
    fmt.Println(msg)
  })
  fmt.Println("waiter finished")
}
