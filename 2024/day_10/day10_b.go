package main

import (
	"os"
)

func (m *Map) CalcTrailsPlus() int {
	for i, row := range m.data {
		for j, val := range row {
			if val == 0 {
				m.dfsMultiTrails(i, j+1, 1)
				m.dfsMultiTrails(i, j-1, 1)
				m.dfsMultiTrails(i+1, j, 1)
				m.dfsMultiTrails(i-1, j, 1)
			}
		}
	}
	return m.numPaths
}

func (m *Map) dfsMultiTrails(x int, y int, val int) {
	if x >= 0 && y >= 0 && x < m.height && y < m.width && m.data[x][y] == val {
		if val == PICK {
			m.numPaths++
		} else {
			m.dfsMultiTrails(x, y+1, val+1)
			m.dfsMultiTrails(x, y-1, val+1)
			m.dfsMultiTrails(x+1, y, val+1)
			m.dfsMultiTrails(x-1, y, val+1)
		}
	}
}

func Day10B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	topoMap := NewMap(string(fileData))
	return topoMap.CalcTrailsPlus()
}
