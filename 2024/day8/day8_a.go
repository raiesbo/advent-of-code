package main

import (
	"os"
	"strings"
)

const (
	ANTINODE = "#"
	FREE     = "."
)

type Antenna struct {
	x int
	y int
}

type City struct {
	Width        int
	Height       int
	Map          [][]string
	Antennas     map[string][]Antenna
	numAntinodes int
}

func NewCity(data string) *City {
	nCity := &City{
		Antennas: make(map[string][]Antenna),
	}
	lines := strings.Split(data, "\n")
	for i, line := range lines {
		if len(line) < 1 {
			continue
		}
		nCity.Map = append(nCity.Map, []string{})
		for j, pos := range line {
			char := string(pos)
			nCity.Map[i] = append(nCity.Map[i], char)
			if char != FREE {
				nCity.Antennas[char] = append(nCity.Antennas[char], Antenna{
					x: i,
					y: j,
				})
			}
		}
	}
	nCity.Width = len(nCity.Map[0])
	nCity.Height = len(nCity.Map)
	nCity.numAntinodes = 0
	return nCity
}

func (c *City) AppendAtinode(x int, y int) {
	if x < c.Height &&
		x >= 0 &&
		y < c.Width &&
		y >= 0 &&
		c.Map[x][y] != ANTINODE {
		c.numAntinodes++
		c.Map[x][y] = ANTINODE
	}
}

func (c *City) CalcAntinodes() {
	for _, antennas := range c.Antennas {
		for i, antenna := range antennas {
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
						c.AppendAtinode(antenna.x+difX, antenna.y+difY)
						c.AppendAtinode(antennas[j].x-difX, antennas[j].y-difY)
					} else {
						c.AppendAtinode(antenna.x+difX, antenna.y-difY)
						c.AppendAtinode(antennas[j].x-difX, antennas[j].y+difY)
					}
				} else {
					if antenna.y > antennas[j].y {
						c.AppendAtinode(antenna.x-difX, antenna.y+difY)
						c.AppendAtinode(antennas[j].x+difX, antennas[j].y-difY)
					} else {
						c.AppendAtinode(antenna.x-difX, antenna.y-difY)
						c.AppendAtinode(antennas[j].x+difX, antennas[j].y+difY)
					}
				}
			}
		}
	}
}

func Day8A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	city := NewCity(string(fileData))
	city.CalcAntinodes()
	return city.numAntinodes
}
