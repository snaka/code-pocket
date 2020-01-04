package main

import (
  "os"
  "fmt"
)

func main() {
  f, _ := os.Create("foo.txt")
  defer f.Close()

  // file status
  fi, _ := f.Stat()
  fmt.Println("Name:", fi.Name())
  fmt.Println("Size:", fi.Size())
  fmt.Println("IsDir:", fi.IsDir())

  // write to file
  f.Write([]byte("Hello, World!\n"))
  f.WriteAt([]byte("Golang"), 7)
  f.Seek(0, os.SEEK_END)
  f.WriteString("Yeah!")
}
