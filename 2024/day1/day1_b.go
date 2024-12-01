package main

import (
	"os"
	"strconv"
	"strings"
)

func Day1B(filePath string) int {
	data, _ := os.ReadFile(filePath)
	lines := strings.Split(string(data), "\n")

	lCol := []int{}
	rCol := []int{}

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

	for _, numLeft := range lCol {
		repetitions := 0

		for _, numRight := range rCol {
			if numLeft == numRight {
				repetitions++
			}
		}

		result += numLeft * repetitions
	}

	return result
}
