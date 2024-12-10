package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

const (
	PICK = 9
)

type Map struct {
	data         [][]int
	visitedPicks map[string]bool
	height       int
	width        int
	numPaths     int
}

func NewMap(data string) *Map {
	newMap := &Map{
		data:         [][]int{},
		visitedPicks: make(map[string]bool),
		numPaths:     0,
	}

	lines := strings.Split(data, "\n")
	for i, line := range lines {
		if len(line) < 1 {
			continue
		}
		newMap.data = append(newMap.data, []int{})
		for _, char := range line {
			val, _ := strconv.Atoi(string(char))
			newMap.data[i] = append(newMap.data[i], val)
		}
	}
	newMap.height = len(newMap.data)
	newMap.width = len(newMap.data[0])
	return newMap
}

func (m *Map) IsPickVisited(key string) bool {
	_, exists := m.visitedPicks[key]
	return exists
}

func (m *Map) AppendPick(key string) {
	m.visitedPicks[key] = true
}

func (m *Map) CalcTrails() int {
	for i, row := range m.data {
		for j, val := range row {
			if val == 0 {
				m.dfsSingleTrail(i, j+1, 1, i, j)
				m.dfsSingleTrail(i, j-1, 1, i, j)
				m.dfsSingleTrail(i+1, j, 1, i, j)
				m.dfsSingleTrail(i-1, j, 1, i, j)
			}
		}
	}
	return m.numPaths
}

func (m *Map) dfsSingleTrail(x int, y int, val int, oX int, oY int) {
	if x >= 0 && y >= 0 && x < m.height && y < m.width && m.data[x][y] == val {
		key := fmt.Sprintf("%d:%d:%d:%d", x, y, oX, oY)
		if val == PICK && !m.IsPickVisited(key) {
			m.numPaths++
			m.AppendPick(key)
		} else if val != PICK {
			m.dfsSingleTrail(x, y+1, val+1, oX, oY)
			m.dfsSingleTrail(x, y-1, val+1, oX, oY)
			m.dfsSingleTrail(x+1, y, val+1, oX, oY)
			m.dfsSingleTrail(x-1, y, val+1, oX, oY)
		}
	}
}

func Day10A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	topoMap := NewMap(string(fileData))
	return topoMap.CalcTrails()
}
