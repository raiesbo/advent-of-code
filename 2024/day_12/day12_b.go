package main

import (
	"fmt"
	"os"
)

const (
	TOP    = "TOP"
	RIGHT  = "RIGHT"
	BOTTOM = "BOTTOM"
	LEFT   = "LEFT"
)

type Edge struct {
	dir string
	p   Plot
}

func (g *Garden) CalcPlotsPlus() int {
	res := 0

	for i, row := range g.plots {
		for j, plant := range row {
			if !g.visitedPlots[i][j] {
				g.visitedPlots[i][j] = true
				res += g.CalcAreaSides(i, j, plant)
			}
		}
	}

	return res
}

func getKey(x int, y int, dir string) string {
	return fmt.Sprintf("%d:%d:%s", x, y, dir)
}

func (g *Garden) CalcAreaSides(x int, y int, plant string) int {
	visiting := []Plot{Plot{x: x, y: y}}
	nodes := 0
	sides := 0

	totalSides := make(map[string]bool)

	for len(visiting) > 0 {
		p := visiting[0]
		visiting = visiting[1:]
		nodes++

		if g.isBoundary(p.x-1, p.y, plant) {
			totalSides[getKey(p.x, p.y, TOP)] = true
			existsLeft := totalSides[getKey(p.x, p.y-1, TOP)]
			existsRight := totalSides[getKey(p.x, p.y+1, TOP)]
			if !existsLeft && !existsRight {
				sides++
			}
		} else {
			if !g.visitedPlots[p.x-1][p.y] {
				g.visitedPlots[p.x-1][p.y] = true
				visiting = append(visiting, Plot{x: p.x - 1, y: p.y})
			}
		}

		if g.isBoundary(p.x, p.y+1, plant) {
			totalSides[getKey(p.x, p.y, RIGHT)] = true
			existsTop := totalSides[getKey(p.x-1, p.y, RIGHT)]
			existsBottom := totalSides[getKey(p.x+1, p.y, RIGHT)]
			if !existsTop && !existsBottom {
				sides++
			}
		} else {
			if !g.visitedPlots[p.x][p.y+1] {
				g.visitedPlots[p.x][p.y+1] = true
				visiting = append(visiting, Plot{x: p.x, y: p.y + 1})
			}
		}

		if g.isBoundary(p.x+1, p.y, plant) {
			totalSides[getKey(p.x, p.y, BOTTOM)] = true
			existsLeft := totalSides[getKey(p.x, p.y-1, BOTTOM)]
			existsRight := totalSides[getKey(p.x, p.y+1, BOTTOM)]
			if !existsLeft && !existsRight {
				sides++
			}
		} else {
			if !g.visitedPlots[p.x+1][p.y] {
				g.visitedPlots[p.x+1][p.y] = true
				visiting = append(visiting, Plot{x: p.x + 1, y: p.y})
			}
		}

		if g.isBoundary(p.x, p.y-1, plant) {
			totalSides[getKey(p.x, p.y, LEFT)] = true
			existsTop := totalSides[getKey(p.x-1, p.y, LEFT)]
			existsBottom := totalSides[getKey(p.x+1, p.y, LEFT)]
			if !existsTop && !existsBottom {
				sides++
			}
		} else {
			if !g.visitedPlots[p.x][p.y-1] {
				g.visitedPlots[p.x][p.y-1] = true
				visiting = append(visiting, Plot{x: p.x, y: p.y - 1})
			}
		}
	}

	fmt.Println("Plant: ", plant, "Nodes: ", nodes, "Sides: ", sides, "Res: ", nodes*sides)
	return nodes * sides
}

func Day12B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	garden := NewGarden(string(fileData))
	return garden.CalcPlotsPlus()
}

// Expected: 909564
// Curr: 909761
