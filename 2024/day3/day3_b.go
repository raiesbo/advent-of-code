package main

import (
	"os"
	"strconv"
)

func Day3B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)

	sum := 0
	i := 0

	isActive := true
	mutFound := false
	comaFound := false
	firstNum := ""
	secondNum := ""

	for i < len(fileData)-1 {
		currentChar := string(fileData[i])
		_, err := strconv.Atoi(currentChar)

		if currentChar == "d" {
			if string(fileData[i+1]) == "o" &&
				string(fileData[i+2]) == "(" {
				isActive = true
				i += 2
			}
			if string(fileData[i+1]) == "o" &&
				string(fileData[i+2]) == "n" &&
				string(fileData[i+3]) == "'" &&
				string(fileData[i+4]) == "t" &&
				string(fileData[i+5]) == "(" {
				isActive = false
				i += 5
			}
		} else if !mutFound && currentChar == "m" {
			if string(fileData[i+1]) == "u" &&
				string(fileData[i+2]) == "l" &&
				string(fileData[i+3]) == "(" {
				mutFound = true
				i += 3
			}
		} else if mutFound && !comaFound && err == nil {
			firstNum += currentChar
		} else if mutFound && comaFound && err == nil {
			secondNum += currentChar
		} else if mutFound && currentChar == "," && firstNum != "" {
			comaFound = true
		} else if isActive && mutFound && currentChar == ")" && firstNum != "" && secondNum != "" {
			f, _ := strconv.Atoi(firstNum)
			s, _ := strconv.Atoi(secondNum)
			sum += f * s
			isActive = true
			mutFound = false
			comaFound = false
			firstNum = ""
			secondNum = ""
		} else {
			mutFound = false
			comaFound = false
			firstNum = ""
			secondNum = ""
		}

		i++
	}

	return sum
}
