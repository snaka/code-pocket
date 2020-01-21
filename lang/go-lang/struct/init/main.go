package main

import (
  "time"

  "github.com/k0kubun/pp"
)

type Inner struct {
  Date time.Time
  Count int
}

type Outer struct {
  Dates []Inner
}

func (o *Outer) init() {
  for i, v := range o.Dates {
    v.Date = time.Now()
    v.Count = i * 10
  }
}

func main() {
  outer := Outer{
    Dates: make([]Inner, 3),
  }
  outer.init()
  pp.Print(outer)
}
