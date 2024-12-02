package main

import (
	"os"
	"strconv"
	"strings"
)

func Day2A(filePath string) int {
	data, _ := os.ReadFile(filePath)
	lines := strings.Split(string(data), "\n")

	safeRecords := 0

	for _, line := range lines {
		numbers := strings.Split(line, " ")
		if len(numbers) < 2 {
			continue
		}

		i := 0
		isIncremental := true
		isDecremental := true

		for i < len(numbers)-1 && (isIncremental || isDecremental) {
			current, _ := strconv.Atoi(numbers[i])
			next, _ := strconv.Atoi(numbers[i+1])
			dif := current - next

			if dif > 3 || dif < -3 || dif == 0 {
				isIncremental = false
				isDecremental = false
			}
			if current > next {
				isDecremental = false
			}
			if current < next {
				isIncremental = false
			}

			i++
		}

		if isIncremental || isDecremental {
			safeRecords++
		}
	}

	return safeRecords
}
