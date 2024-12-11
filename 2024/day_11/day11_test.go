package main

import (
	"testing"
)

func BenchmarkDay11A(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Day11("./data.txt", 25)
	}
}

func BenchmarkDay11B(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Day11("./data.txt", 75)
	}
}
