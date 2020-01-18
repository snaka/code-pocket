package calc

import (
  "fmt"
  "testing"
)

// TestSum の説明
func TestSum(t *testing.T) {
  if sum(1, 2) != 3 {
    t.Fatal("sum(1,2) should be 3, but doesn't match")
  }
}

func ExampleHello() {
  fmt.Println("Hello")
  // Output: Hello
}

func ExampleUnordered() {
  for _, v := range []int{1, 2, 3} {
    fmt.Println(v)
  }
  // Unordered output:
  // 2
  // 3
  // 1
}
