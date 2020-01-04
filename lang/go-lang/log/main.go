package main

import (
  "log"
  "os"
)

func main() {
  // default (std err)
  log.Print("1行目\n")
  log.Println("2行目")
  log.Printf("%d行目\n", 3)
  // stdout
  log.SetOutput(os.Stdout)
  log.Println("4行目")
  // file
  f, err := os.Create("test.log")
  if err != nil {
    return
  }
  log.SetOutput(f)
  log.Println("5行目")
  // New logger
  logger := log.New(os.Stdout, "[abc] ", log.Ldate|log.Ltime|log.Lshortfile)
  logger.Println("6行目")
}
