package main

import (
  "fmt"
  "time"
)

func main() {
  day := time.Now()
  aYearAgo := day.AddDate(0,0,-364)
  lastDay := day.AddDate(0,0,1)
  const layout = "[2006-01-02] "

  for i := aYearAgo; i.Before(lastDay); i = i.AddDate(0,0,1) {
    fmt.Print(i.Format(layout))
  }
}
