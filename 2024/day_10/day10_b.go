package main

import (
	"os"
)

func (m *Map) CalcTrailsPlus() int {
	for i, row := range m.data {
		for j, val := range row {
			if val == 0 {
				m.dfsMultiTrails(i, j+1, 1, i, j)
				m.dfsMultiTrails(i, j-1, 1, i, j)
				m.dfsMultiTrails(i+1, j, 1, i, j)
				m.dfsMultiTrails(i-1, j, 1, i, j)
			}
		}
	}
	return m.numPaths
}

func (m *Map) dfsMultiTrails(x int, y int, val int, oX int, oY int) {
	if x >= 0 && y >= 0 && x < m.height && y < m.width && m.data[x][y] == val {
		if val == PICK {
			m.numPaths++
		} else {
			m.dfsMultiTrails(x, y+1, val+1, oX, oY)
			m.dfsMultiTrails(x, y-1, val+1, oX, oY)
			m.dfsMultiTrails(x+1, y, val+1, oX, oY)
			m.dfsMultiTrails(x-1, y, val+1, oX, oY)
		}
	}
}

func Day10B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	topoMap := NewMap(string(fileData))
	return topoMap.CalcTrailsPlus()
}
