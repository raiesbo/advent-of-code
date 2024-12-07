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
			if c != BLOCK {
				route := NewRoute()
				newMatrix := addObstruction(matrix, i, j)
				if withLoop(newMatrix, x, y, matrix[x][y], route) {
					count++
				}
			}
		}
	}

	return count
}

func withLoop(matrix [][]string, x int, y int, dir string, r *Route) bool {
	cX := x
	cY := y
	cDir := dir

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
		} else {
			if matrix[cX][cY-1] != BLOCK {
				cY--
			} else {
				cDir = UP
			}
		}
	}
}

// func moveFoward(matrix [][]string, x int, y int, dir string, r *Route) int {
// 	key := fmt.Sprintf("%d;%d;%s", x, y, dir)
// 	if r.isRepeated(key) {
// 		return 1
// 	}
// 	r.append(key)

// 	if dir == UP {
// 		if x == 0 {
// 			return 0
// 		}

// 		if matrix[x-1][y] != BLOCK {
// 			return moveFoward(matrix, x-1, y, UP, r)
// 		}
// 		return moveFoward(matrix, x, y, RIGHT, r)
// 	} else if dir == RIGHT {
// 		if y == len(matrix[0])-1 {
// 			return 0
// 		}

// 		if matrix[x][y+1] != BLOCK {
// 			return moveFoward(matrix, x, y+1, RIGHT, r)
// 		}
// 		return moveFoward(matrix, x, y, DOWN, r)
// 	} else if dir == DOWN {
// 		if x == len(matrix)-1 {
// 			return 0
// 		}

// 		if matrix[x+1][y] != BLOCK {
// 			return moveFoward(matrix, x+1, y, DOWN, r)
// 		}
// 		return moveFoward(matrix, x, y, LEFT, r)
// 	} else {
// 		if y == 0 {
// 			return 0
// 		}

// 		if matrix[x][y-1] != BLOCK {
// 			return moveFoward(matrix, x, y-1, LEFT, r)
// 		}
// 		return moveFoward(matrix, x, y, UP, r)
// 	}
// }

// 1274
// 1587
