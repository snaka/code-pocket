package main

import(
  "fmt"
  "time"
  "log"
)

func ParsePresetFormat() {
  t, err := time.Parse(time.RFC822, "27 Nov 15 18:00 JST")
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(t)
}

func ParseOriginalFormat() {
  t, err := time.Parse("2006年1月2日 15時04分05秒 MST", "2020年1月3日 08時15分00秒 JST")
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(t)
}

func main() {
  ParsePresetFormat()
  ParseOriginalFormat()
}
