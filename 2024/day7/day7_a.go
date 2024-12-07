package main

import (
	"os"
	"strconv"
	"strings"
)

type Equation struct {
	control  int
	operands []int
}

func NewEquation(line string) *Equation {
	div := strings.Split(line, ":")
	constrol, _ := strconv.Atoi(div[0])
	operandsStr := strings.Split(div[1], " ")
	operandsInt := []int{}
	for _, str := range operandsStr {
		i, err := strconv.Atoi(str)
		if err == nil {
			operandsInt = append(operandsInt, i)
		}
	}

	return &Equation{
		control:  constrol,
		operands: operandsInt,
	}
}

func calcCombinations(control int, operands []int, curRes int) int {
	if len(operands) == 0 {
		if curRes == control {
			return control
		}
		return 0
	}

	num := operands[0]

	count := 0
	count += calcCombinations(control, operands[1:], curRes+num)
	if count == 0 {
		count += calcCombinations(control, operands[1:], curRes*num)
	}

	return count
}

func Day7A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	lines := strings.Split(string(fileData), "\n")

	count := 0

	for _, line := range lines {
		if len(line) < 1 {
			continue
		}

		eq := NewEquation(line)
		count += calcCombinations(eq.control, eq.operands, 0)
	}

	return count
}
