package main

import (
	"os"
	"strconv"
	"strings"
)

type Stones struct {
	elems []int
}

func NewStones(data string) *Stones {
	stones := []int{}
	for _, line := range strings.Split(data, "\n") {
		if len(line) < 1 {
			continue
		}
		for _, val := range strings.Split(line, " ") {
			num, _ := strconv.Atoi(val)
			stones = append(stones, num)
		}
	}
	return &Stones{
		elems: stones,
	}
}

func (s *Stones) CalculateBlicks(n int) {

	for i := 0; i < n; i++ {
		newElems := []int{}
		for _, val := range s.elems {
			str := strconv.Itoa(val)

			if val == 0 {
				newElems = append(newElems, 1)
			} else if len(str)%2 == 0 {
				firsHalf, _ := strconv.Atoi(str[:len(str)/2])
				secondHalf, _ := strconv.Atoi(str[len(str)/2:])
				newElems = append(newElems, firsHalf, secondHalf)
			} else {
				newElems = append(newElems, val*2024)
			}
		}
		s.elems = newElems
	}
}

func Day11A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	stones := NewStones(string(fileData))
	stones.CalculateBlicks(25)
	return len(stones.elems)
}

// 15754 too low
// 54440 too low
