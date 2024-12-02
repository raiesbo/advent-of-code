package main

import (
	"os"
	"strconv"
	"strings"
)

func Day2B(filePath string) int {
	data, _ := os.ReadFile(filePath)
	lines := strings.Split(string(data), "\n")

	safeRecords := 0

	for _, line := range lines {
		numArr := strings.Split(line, " ")
		if len(numArr) < 2 {
			continue
		}

		for i := 0; i < len(numArr); i++ {
			cpyNumbers := make([]string, len(numArr))
			copy(cpyNumbers, numArr)

			if isValidLine(append(cpyNumbers[:i], cpyNumbers[i+1:]...)) {
				safeRecords++
				break
			}
		}
	}

	return safeRecords
}

func isValidLine(numbers []string) bool {
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

	return isIncremental || isDecremental
}
