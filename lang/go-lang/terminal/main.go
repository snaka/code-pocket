package main

import(
  "fmt"
  "log"
  "os"

  "golang.org/x/crypto/ssh/terminal"
)

func main() {
  w, h, err := terminal.GetSize(int(os.Stdout.Fd()))
  if err != nil {
    log.Fatal(err)
  }

  fmt.Println("width", w)
  fmt.Println("height", h)
}
