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
	STEP  = "X"
	BLOCK = "#"
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
		if len(line) < 2 {
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
	if dir == UP {
		if x-1 < 0 {
			return 0
		}

		nextStep := (*matrix)[x-1][y]
		if nextStep != BLOCK {
			if nextStep == STEP {
				return moveStep(matrix, x-1, y, UP)
			}
			(*matrix)[x-1][y] = STEP
			return 1 + moveStep(matrix, x-1, y, UP)
		} else {
			return moveStep(matrix, x, y, RIGHT)
		}
	} else if dir == RIGHT {
		if len((*matrix)[x])-1 < y+1 {
			return 0
		}

		nextStep := (*matrix)[x][y+1]
		if nextStep != BLOCK {
			if nextStep == STEP {
				return moveStep(matrix, x, y+1, RIGHT)
			}
			(*matrix)[x][y+1] = STEP
			return 1 + moveStep(matrix, x, y+1, RIGHT)
		} else {
			return moveStep(matrix, x, y, DOWN)
		}
	} else if dir == DOWN {
		if len((*matrix))-1 < x+1 {
			return 0
		}

		nextStep := (*matrix)[x+1][y]
		if nextStep != BLOCK {
			if nextStep == STEP {
				return moveStep(matrix, x+1, y, DOWN)
			}
			(*matrix)[x+1][y] = STEP
			return 1 + moveStep(matrix, x+1, y, DOWN)
		} else {
			return moveStep(matrix, x, y, LEFT)
		}
	} else {
		if y-1 < 0 {
			return 0
		}

		nextStep := (*matrix)[x][y-1]
		if nextStep != BLOCK {
			if nextStep == STEP {
				return moveStep(matrix, x, y-1, LEFT)
			}
			(*matrix)[x][y-1] = STEP
			return 1 + moveStep(matrix, x, y-1, LEFT)
		} else {
			return moveStep(matrix, x, y, UP)
		}
	}
}
