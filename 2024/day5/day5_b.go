package main

import (
	"os"
	"strconv"
	"strings"
)

func Day5B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	lines := strings.Split(string(fileData), "\n")
	rules := [99][]int{}
	result := 0

	for _, line := range lines {
		if strings.Contains(line, "|") {
			numbers := strings.Split(line, "|")

			fNum, _ := strconv.Atoi(string(numbers[0]))
			lNum, _ := strconv.Atoi(string(numbers[1]))
			rules[fNum] = append(rules[fNum], lNum)
		} else if strings.Contains(line, ",") {
			numbers := strings.Split(line, ",")

			isToBeFixed := false

			for i, num := range numbers {
				currNum, _ := strconv.Atoi(string(num))
				postPages := rules[currNum]

				isCorrectOrder, _ := isCorrectNumber(currNum, i, numbers, postPages)

				if !isCorrectOrder {
					isToBeFixed = true
					break
				}
			}

			if isToBeFixed {
				sortedArr := sortArray(numbers, rules)
				id := len(sortedArr) / 2
				middleNum, _ := strconv.Atoi(string(sortedArr[id]))
				result += middleNum
				continue
			}
		}
	}

	return result
}

func sortArray(numbers []string, rules [99][]int) []string {
	isCorrectOrder := true

	for i, num := range numbers {
		currNum, _ := strconv.Atoi(string(num))
		postPages := rules[currNum]

		isCorrect, idx := isCorrectNumber(currNum, i, numbers, postPages)

		if !isCorrect {
			isCorrectOrder = isCorrect
			numbers[i], numbers[idx] = numbers[idx], numbers[i]
			break
		}
	}

	if isCorrectOrder {
		return numbers
	}

	return sortArray(numbers, rules)
}

func isCorrectNumber(currentNum int, idx int, numbers []string, postPages []int) (bool, int) {
	for _, postPage := range postPages {
		for j, cLetter := range numbers {
			cNum, _ := strconv.Atoi(string(cLetter))
			if cNum == postPage && idx > j {
				return false, j
			}
		}
	}

	return true, -1
}
