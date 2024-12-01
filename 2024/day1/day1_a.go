package main

import (
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func Day1A(filePath string) int {
	data, _ := os.ReadFile(filePath)
	lines := strings.Split(string(data), "\n")

	lCol := make([]int, 0, 1000)
	rCol := make([]int, 0, 1000)

	for _, line := range lines {
		numbers := strings.Split(line, "   ")
		if len(numbers) != 2 {
			continue
		}

		firstNumber, _ := strconv.Atoi(numbers[0])
		lastNumber, _ := strconv.Atoi(numbers[1])

		lCol = append(lCol, firstNumber)
		rCol = append(rCol, lastNumber)
	}

	result := 0

	sort.Ints(lCol)
	sort.Ints(rCol)

	for i, num := range lCol {
		dif := num - rCol[i]
		if math.Signbit(float64(dif)) {
			dif = dif * -1
		}
		result += int(dif)
	}

	return result
}
