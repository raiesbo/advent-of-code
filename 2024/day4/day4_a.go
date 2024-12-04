package main

import (
	"os"
	"strings"
)

func Day4A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	lines := strings.Split(string(fileData), "\n")

	count := 0

	for i, line := range lines {
		if len(line) < 1 {
			continue
		}

		for j, letter := range line {
			if letter == 'X' {
				// Check right
				if len(lines)-j > 3 && line[j+1] == 'M' && line[j+2] == 'A' && line[j+3] == 'S' {
					count++
				}
				// Check Left
				if j > 2 && line[j-1] == 'M' && line[j-2] == 'A' && line[j-3] == 'S' {
					count++
				}
				// Check Vertical Up
				if i > 2 && lines[i-1][j] == 'M' && lines[i-2][j] == 'A' && lines[i-3][j] == 'S' {
					count++
				}
				// Check Vertical Down
				if len(lines)-i > 3 && lines[i+1][j] == 'M' && lines[i+2][j] == 'A' && lines[i+3][j] == 'S' {
					count++
				}
				// Check Diagonal Right Up
				if i > 2 && len(line)-j > 2 && lines[i-1][j+1] == 'M' && lines[i-2][j+2] == 'A' && lines[i-3][j+3] == 'S' {
					count++
				}
				// Check Diagonal Right Down
				if len(lines)-i > 3 && len(line)-j > 3 && lines[i+1][j+1] == 'M' && lines[i+2][j+2] == 'A' && lines[i+3][j+3] == 'S' {
					count++
				}
				// Check Diagonal Left Down
				if len(lines)-i > 3 && j > 2 && lines[i+1][j-1] == 'M' && lines[i+2][j-2] == 'A' && lines[i+3][j-3] == 'S' {
					count++
				}
				// Check Diagonal Left Up
				if i > 2 && j > 2 && lines[i-1][j-1] == 'M' && lines[i-2][j-2] == 'A' && lines[i-3][j-3] == 'S' {
					count++
				}
			}
		}
	}

	return count
}
