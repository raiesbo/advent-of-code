package main

import (
	"os"
)

func (c *City) AppendAtinodes(x int, y int, vX int, vY int) {
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
				c.AppendAtinodes(antenna.x, antenna.y, 0, 0)
			}

			for j := i + 1; j < len(antennas); j++ {
				difX := antenna.x - antennas[j].x
				if difX < 0 {
					difX *= -1
				}
				difY := antenna.y - antennas[j].y
				if difY < 0 {
					difY *= -1
				}

				if antenna.x >= antennas[j].x {
					if antenna.y > antennas[j].y {
						c.AppendAtinodes(antenna.x, antenna.y, difX, difY)
						c.AppendAtinodes(antennas[j].x-difX, antennas[j].y-difY, difX*-1, difY*-1)
					} else {
						c.AppendAtinodes(antenna.x, antenna.y, difX, difY-1)
						c.AppendAtinodes(antennas[j].x, antennas[j].y, difX*-1, difY)
					}
				} else {
					if antenna.y > antennas[j].y {
						c.AppendAtinodes(antenna.x, antenna.y, difX*-1, difY)
						c.AppendAtinodes(antennas[j].x, antennas[j].y, difX, difY*-1)
					} else {
						c.AppendAtinodes(antenna.x, antenna.y, difX*-1, difY*-1)
						c.AppendAtinodes(antennas[j].x, antennas[j].y, difX, difY)
					}
				}
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
