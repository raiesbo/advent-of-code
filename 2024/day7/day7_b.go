package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func calcCombinationsPlus(control int, operands []int, curRes int) int {
	if len(operands) == 0 {
		if curRes == control {
			return control
		}
		return 0
	}

	count := 0
	num := operands[0]

	if count == 0 {
		count += calcCombinationsPlus(control, operands[1:], curRes+num)
	}
	if count == 0 {
		count += calcCombinationsPlus(control, operands[1:], curRes*num)
	}
	if count == 0 {
		comb, _ := strconv.Atoi(fmt.Sprintf("%d%d", curRes, num))
		count += calcCombinationsPlus(control, operands[1:], comb)
	}

	return count
}

func Day7B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	lines := strings.Split(string(fileData), "\n")

	count := 0

	for _, line := range lines {
		if len(line) < 1 {
			continue
		}

		eq := NewEquation(line)
		count += calcCombinationsPlus(eq.control, eq.operands, 0)
	}

	return count
}
