package main

import (
	"os"
)

func (c *City) AppendAntinodes(x int, y int, vX int, vY int) {
	cX := x + vX
	cY := y + vY

	for cX < c.Height &&
		cX >= 0 &&
		cY < c.Width &&
		cY >= 0 {
		if c.Map[cX][cY] != ANTINODE {
			c.numAntinodes++
			c.Map[cX][cY] = ANTINODE
		}

		if vX == 0 && vY == 0 {
			break
		} else {
			cX = cX + vX
			cY = cY + vY
		}
	}
}

func (c *City) CalcAntinodesPlus() {
	for _, antennas := range c.Antennas {
		for i, antenna := range antennas {
			if len(antennas) > 1 {
				c.AppendAntinodes(antenna.x, antenna.y, 0, 0)
			}

			for j := i + 1; j < len(antennas); j++ {
				c.AppendAntinodes(antenna.x, antenna.y, antenna.x-antennas[j].x, antenna.y-antennas[j].y)
				c.AppendAntinodes(antennas[j].x, antennas[j].y, antennas[j].x-antenna.x, antennas[j].y-antenna.y)
			}
		}
	}
}

func Day8B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	city := NewCity(string(fileData))
	city.CalcAntinodesPlus()
	return city.numAntinodes
}
