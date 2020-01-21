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
  Dates []*Inner
}

func (o *Outer) init() {
  for i := 0; i < len(o.Dates); i++ {
    o.Dates[i] = &Inner{
      Date: time.Now(),
      Count: i * 10,
    }
  }
}

func main() {
  outer := Outer{
    Dates: make([]*Inner, 3),
  }
  outer.init()
  pp.Print(outer)
}
