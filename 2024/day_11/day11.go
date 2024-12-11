package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Stones struct {
	elems      []int
	countCache map[string]int
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
		elems:      stones,
		countCache: make(map[string]int),
	}
}

func (s *Stones) CalcStones(n int) int {
	stonesCount := 0
	for _, val := range s.elems {
		stonesCount += s.Blick(val, n)
	}
	return stonesCount
}

func (s *Stones) Blick(val int, blicks int) int {
	if blicks == 0 {
		return 1
	}

	key := fmt.Sprintf("%d:%d", val, blicks)
	if cachedStone, exists := s.countCache[key]; exists {
		return cachedStone
	}

	str := strconv.Itoa(val)
	res := 0
	if val == 0 {
		res = s.Blick(1, blicks-1)
	} else if len(strconv.Itoa(val))%2 == 0 {
		middle := len(str) / 2
		firsHalf, _ := strconv.Atoi(str[:middle])
		secondHalf, _ := strconv.Atoi(str[middle:])
		res = s.Blick(firsHalf, blicks-1) + s.Blick(secondHalf, blicks-1)
	} else {
		res = s.Blick(val*2024, blicks-1)
	}

	s.countCache[key] = res
	return res
}

func Day11(filePath string, blicks int) int {
	fileData, _ := os.ReadFile(filePath)
	stones := NewStones(string(fileData))
	return stones.CalcStones(blicks)
}
