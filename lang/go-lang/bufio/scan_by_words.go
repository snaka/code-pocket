package main

import (
  "fmt"
  "bufio"
  "strings"
)

func main() {
  s := `ABC DEF
GHI JKL MNO
PQR STU VWX
YZ`
  r := strings.NewReader(s)
  scanner := bufio.NewScanner(r)

  scanner.Split(bufio.ScanWords)

  for scanner.Scan() {
    fmt.Println(scanner.Text())
  }
}
