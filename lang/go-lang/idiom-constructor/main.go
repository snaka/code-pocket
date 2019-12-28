package main

import (
  "fmt"
)

type User struct {
  Id int
  Name string
}

func NewUser(id int, name string) *User {
  u := new(User)
  u.Id = id
  u.Name = name
  return u
}

func main() {
  fmt.Println(NewUser(1, "Taro"))
}
