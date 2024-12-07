package main

import (
	"fmt"
	"os"
)

type Route struct {
	steps map[string]bool
}

func NewRoute() *Route {
	return &Route{
		steps: make(map[string]bool),
	}
}

func (r *Route) append(key string) {
	r.steps[key] = true
}

func (r *Route) isRepeated(key string) bool {
	_, exists := r.steps[key]
	return exists
}

func addObstruction(matrix [][]string, x int, y int) [][]string {
	newMatrix := make([][]string, len(matrix))
	for i := range matrix {
		newMatrix[i] = append([]string{}, matrix[i]...)
	}
	newMatrix[x][y] = BLOCK
	return newMatrix
}

func Day6B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	matrix, x, y := buildMatrix(string(fileData))
	count := 0

	for i, row := range matrix {
		for j, c := range row {
			if c == FREE {
				route := NewRoute()
				newMatrix := addObstruction(matrix, i, j)
				if withLoop(newMatrix, x, y, route) {
					count++
				}
			}
		}
	}

	return count
}

func withLoop(matrix [][]string, x int, y int, r *Route) bool {
	cX := x
	cY := y
	cDir := UP

	for {
		if cX == 0 || cY == 0 || cY == len(matrix[x])-1 || cX == len(matrix)-1 {
			return false
		}

		key := fmt.Sprintf("%d;%d;%s", cX, cY, cDir)
		if r.isRepeated(key) {
			return true
		}
		r.append(key)

		if cDir == UP {
			if matrix[cX-1][cY] != BLOCK {
				cX--
			} else {
				cDir = RIGHT
			}
		} else if cDir == RIGHT {
			if matrix[cX][cY+1] != BLOCK {
				cY++
			} else {
				cDir = DOWN
			}
		} else if cDir == DOWN {
			if matrix[cX+1][cY] != BLOCK {
				cX++
			} else {
				cDir = LEFT
			}
		} else if cDir == LEFT {
			if matrix[cX][cY-1] != BLOCK {
				cY--
			} else {
				cDir = UP
			}
		}
	}
}
