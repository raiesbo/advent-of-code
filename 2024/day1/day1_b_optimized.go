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
	rColReps := [99999]int{}

	for _, line := range lines {
		numbers := strings.Split(line, "   ")
		if len(numbers) != 2 {
			continue
		}

		firstNumber, _ := strconv.Atoi(numbers[0])
		lastNumber, _ := strconv.Atoi(numbers[1])

		lCol = append(lCol, firstNumber)
		rColReps[lastNumber]++
	}

	result := 0

	for _, numLeft := range lCol {
		reps := rColReps[numLeft]
		result += numLeft * reps
	}

	return result
}
