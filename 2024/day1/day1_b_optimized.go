package main

import (
	"os"
	"strconv"
	"strings"
)

func Day1B_optimized(filePath string) int {
	data, _ := os.ReadFile(filePath)
	lines := strings.Split(string(data), "\n")

	lCol := []int{}
	rColReps := make(map[int]int)

	for _, line := range lines {
		numbers := strings.Split(line, "   ")
		if len(numbers) != 2 {
			continue
		}

		firstNumber, _ := strconv.Atoi(numbers[0])
		lastNumber, _ := strconv.Atoi(numbers[1])

		lCol = append(lCol, firstNumber)

		_, exists := rColReps[lastNumber]
		if exists {
			rColReps[lastNumber]++
		} else {
			rColReps[lastNumber] = 1
		}
	}

	result := 0

	for _, numLeft := range lCol {
		reps, exists := rColReps[numLeft]
		if exists {
			result += numLeft * reps
		}
	}

	return result
}
