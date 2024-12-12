package main

import (
	"os"
	"strings"
)

const (
	VISITED = "."
)

type Garden struct {
	plots        [][]string
	visitedPlots [][]bool
	height       int
	width        int
}

func NewGarden(data string) *Garden {
	plots := [][]string{}
	visited := [][]bool{}

	for i, line := range strings.Split(data, "\n") {
		if len(line) < 1 {
			continue
		}
		plots = append(plots, []string{})
		visited = append(visited, []bool{})

		for _, plant := range line {
			plots[i] = append(plots[i], string(plant))
			visited[i] = append(visited[i], false)
		}
	}

	return &Garden{
		plots:        plots,
		visitedPlots: visited,
		height:       len(plots),
		width:        len(plots[0]),
	}
}

func (g *Garden) CalcPlots() int {
	res := 0

	for i, row := range g.plots {
		for j, plant := range row {
			if !g.visitedPlots[i][j] {
				res += g.CalcArea(i, j, plant)
			}
		}
	}

	return res
}

type Plot struct {
	x int
	y int
}

func (g *Garden) CalcArea(x int, y int, plant string) int {
	visiting := []Plot{Plot{x: x, y: y}}
	g.visitedPlots[x][y] = true
	nodes := 0
	fences := 0

	for len(visiting) > 0 {
		p := visiting[0]
		visiting = visiting[1:]
		nodes++

		if p.x-1 >= 0 && g.plots[p.x-1][p.y] == plant {
			if !g.visitedPlots[p.x-1][p.y] {
				visiting = append(visiting, Plot{x: p.x - 1, y: p.y})
				g.visitedPlots[p.x-1][p.y] = true
			}
		} else {
			fences++
		}

		if p.y+1 < g.width && g.plots[p.x][p.y+1] == plant {
			if !g.visitedPlots[p.x][p.y+1] {
				visiting = append(visiting, Plot{x: p.x, y: p.y + 1})
				g.visitedPlots[p.x][p.y+1] = true
			}
		} else {
			fences++
		}

		if p.x+1 < g.height && g.plots[p.x+1][p.y] == plant {
			if !g.visitedPlots[p.x+1][p.y] {
				visiting = append(visiting, Plot{x: p.x + 1, y: p.y})
				g.visitedPlots[p.x+1][p.y] = true
			}
		} else {
			fences++
		}

		if p.y-1 >= 0 && g.plots[p.x][p.y-1] == plant {
			if !g.visitedPlots[p.x][p.y-1] {
				visiting = append(visiting, Plot{x: p.x, y: p.y - 1})
				g.visitedPlots[p.x][p.y-1] = true
			}
		} else {
			fences++
		}
	}

	return nodes * fences
}

func Day12A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	garden := NewGarden(string(fileData))
	return garden.CalcPlots()
}
