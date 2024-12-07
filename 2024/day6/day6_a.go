package main

import (
	"os"
	"strings"
)

const (
	UP    = "^"
	RIGHT = ">"
	DOWN  = "v"
	LEFT  = "<"

	BLOCK = "#"
	STEP  = "X"
)

func Day6A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	matrix, x, y := buildMatrix(string(fileData))

	return moveStep(&matrix, x, y, matrix[x][y])
}

func buildMatrix(data string) ([][]string, int, int) {
	matrix := [][]string{}
	x := -1
	y := -1

	lines := strings.Split(data, "\n")

	for i, line := range lines {
		if len(line) < 1 {
			continue
		}

		matrix = append(matrix, []string{})

		for j, char := range line {
			str := string(char)
			matrix[i] = append(matrix[i], str)

			if str == UP ||
				str == RIGHT ||
				str == DOWN ||
				str == LEFT {
				x = i
				y = j
			}
		}
	}

	return matrix, x, y
}

func moveStep(matrix *[][]string, x int, y int, dir string) int {
	if x == 0 || y == 0 || y == len((*matrix)[0])-1 || x == len((*matrix))-1 {
		return 0
	}

	if dir == UP {
		nextStep := (*matrix)[x-1][y]
		if nextStep == STEP {
			return moveStep(matrix, x-1, y, UP)
		} else if nextStep != BLOCK {
			(*matrix)[x-1][y] = STEP
			return 1 + moveStep(matrix, x-1, y, UP)
		}
		return moveStep(matrix, x, y, RIGHT)
	} else if dir == RIGHT {
		nextStep := (*matrix)[x][y+1]
		if nextStep == STEP {
			return moveStep(matrix, x, y+1, RIGHT)
		} else if nextStep != BLOCK {
			(*matrix)[x][y+1] = STEP
			return 1 + moveStep(matrix, x, y+1, RIGHT)
		}
		return moveStep(matrix, x, y, DOWN)
	} else if dir == DOWN {
		nextStep := (*matrix)[x+1][y]
		if nextStep == STEP {
			return moveStep(matrix, x+1, y, DOWN)
		} else if nextStep != BLOCK {
			(*matrix)[x+1][y] = STEP
			return 1 + moveStep(matrix, x+1, y, DOWN)
		}
		return moveStep(matrix, x, y, LEFT)
	} else {
		nextStep := (*matrix)[x][y-1]
		if nextStep == STEP {
			return moveStep(matrix, x, y-1, LEFT)
		} else if nextStep != BLOCK {
			(*matrix)[x][y-1] = STEP
			return 1 + moveStep(matrix, x, y-1, LEFT)
		}
		return moveStep(matrix, x, y, UP)
	}
}
