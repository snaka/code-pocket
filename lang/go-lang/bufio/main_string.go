package main

import (
  "fmt"
  "bufio"
  "strings"
)

func main() {
  s := `XXXXXXX
YYYYY
ZZZZZ`
  r := strings.NewReader(s)

  scanner := bufio.NewScanner(r)
  scanner.Scan()
  fmt.Println(scanner.Text())
  scanner.Scan()
  fmt.Println(scanner.Text())
  scanner.Scan()
  fmt.Println(scanner.Text())
}
