package main

import (
	"os"
	"strconv"
	"strings"
)

func Day5A(filePath string) int {
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
			numLen := len(numbers)

			isCorrectOrder := true

			for i, num := range numbers {
				currNum, _ := strconv.Atoi(string(num))
				postPages := rules[currNum]

				for _, postPage := range postPages {
					for j, cLetter := range numbers {
						cNum, _ := strconv.Atoi(string(cLetter))
						if cNum == postPage && i > j {
							isCorrectOrder = false
							break
						}
					}

					if !isCorrectOrder {
						break
					}
				}

				if !isCorrectOrder {
					break
				}
			}

			if isCorrectOrder {
				id := numLen / 2
				middleNum, _ := strconv.Atoi(string(numbers[id]))
				result += middleNum
			}
		}
	}

	return result
}
