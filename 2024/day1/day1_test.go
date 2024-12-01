package main

import "testing"

func TestDay1A(t *testing.T) {
	res := Day1A("./day1_data.txt")
	if res != 1660292 {
		t.Errorf("Day1 A resulted in %d, and should have been %d", res, 1660292)
	}
}

func TestDay1B(t *testing.T) {
	res := Day1B("./day1_data.txt")
	if res != 22776016 {
		t.Errorf("Day1 B resulted in %d, and should have been %d", res, 22776016)
	}
}

func TestDay1B_optimized(t *testing.T) {
	res := Day1B_optimized("./day1_data.txt")
	if res != 22776016 {
		t.Errorf("Day1 B optimized resulted in %d, and should have been %d", res, 22776016)
	}
}

func BenchmarkDay1A(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Day1A("./day1_data.txt")
	}
}

func BenchmarkDay1B(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Day1B("./day1_data.txt")
	}
}

func BenchmarkDay1BOptimized(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Day1B_optimized("./day1_data.txt")
	}
}
