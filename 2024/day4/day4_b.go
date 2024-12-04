package main

import (
	"os"
	"strings"
)

func Day4B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	lines := strings.Split(string(fileData), "\n")

	count := 0

	for i, line := range lines {
		for j, letter := range line {
			if i == 0 || len(lines)-i == 2 || j == 0 ||
				len(line)-j == 1 || letter != 'A' {
				continue
			}
			if (lines[i-1][j+1] == 'S' && lines[i+1][j-1] == 'M' ||
				lines[i-1][j+1] == 'M' && lines[i+1][j-1] == 'S') &&
				(lines[i+1][j+1] == 'S' && lines[i-1][j-1] == 'M' ||
					lines[i+1][j+1] == 'M' && lines[i-1][j-1] == 'S') {
				count++
			}
		}
	}

	return count
}
