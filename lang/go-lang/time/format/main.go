package main

import (
  "fmt"
  "time"
)

func main() {
  t := time.Date(2020, 1, 4, 8, 15, 0, 12345, time.Local)
  fmt.Println(t.Format(time.RFC822))
  fmt.Println(t.Format(time.RFC3339Nano))
  fmt.Println(t.Format("2006年1月2日 15時04分05秒"))
  fmt.Println(t.Format("2006/01/02"))
}
