package main

// import (
// 	"fmt"
// 	"io"
// 	"log"
// 	"os"
// 	"strings"
// )

// type Dir int

// const (
// 	N Dir = iota
// 	E
// 	S
// 	W
// )

// type Coord struct {
// 	x int
// 	y int
// }

// type Edge struct {
// 	c Coord
// 	// the direction of the edge's outward-facing normal vector
// 	dir Dir
// }

// func parse(s string) []string {
// 	s = strings.TrimSpace(s)
// 	lines := strings.Split(s, "\n")
// 	for i := 0; i < len(lines); i++ {
// 		lines[i] = strings.TrimSpace(lines[i])
// 	}
// 	return lines
// }

// func neighbors(c Coord) []Coord {
// 	return []Coord{
// 		{c.x + 1, c.y},
// 		{c.x - 1, c.y},
// 		{c.x, c.y + 1},
// 		{c.x, c.y - 1},
// 	}
// }

// func inbounds(plot []string, c Coord) bool {
// 	return c.y >= 0 && c.y < len(plot) &&
// 		c.x >= 0 && c.x < len(plot[0])
// }

// func findregion(plot []string, c Coord) []Coord {
// 	plant := plot[c.y][c.x]
// 	tovisit := []Coord{c}
// 	visited := make(map[Coord]bool)
// 	visited[c] = true
// 	region := []Coord{}
// 	var cur Coord
// 	for len(tovisit) > 0 {
// 		cur, tovisit = tovisit[0], tovisit[1:]
// 		region = append(region, cur)
// 		ns := neighbors(cur)
// 		for _, n := range ns {
// 			if !inbounds(plot, n) || visited[n] {
// 				continue
// 			}
// 			if plot[n.y][n.x] == plant {
// 				tovisit = append(tovisit, n)
// 			}
// 			visited[n] = true
// 		}
// 	}
// 	return region
// }

// func findperimeter(region []Coord) int {
// 	inregion := make(map[Coord]bool)
// 	for _, s := range region {
// 		inregion[s] = true
// 	}
// 	perimeter := 0
// 	for _, s := range region {
// 		if !inregion[Coord{s.x + 1, s.y}] {
// 			perimeter++
// 		}
// 		if !inregion[Coord{s.x - 1, s.y}] {
// 			perimeter++
// 		}
// 		if !inregion[Coord{s.x, s.y + 1}] {
// 			perimeter++
// 		}
// 		if !inregion[Coord{s.x, s.y - 1}] {
// 			perimeter++
// 		}
// 	}
// 	return perimeter
// }

// func part1(input string) string {
// 	plot := parse(input)
// 	inregion := make(map[Coord]bool)
// 	regions := [][]Coord{}
// 	for y := 0; y < len(plot); y++ {
// 		for x := 0; x < len(plot[y]); x++ {
// 			c := Coord{x, y}
// 			if inregion[c] {
// 				continue
// 			} else {
// 				region := findregion(plot, c)
// 				for _, regcoord := range region {
// 					inregion[regcoord] = true
// 				}
// 				regions = append(regions, region)
// 			}
// 		}
// 	}

// 	prices := []int{}
// 	for _, r := range regions {
// 		area := len(r)
// 		perimeter := findperimeter(r)
// 		prices = append(prices, area*perimeter)
// 	}
// 	total := 0
// 	for _, price := range prices {
// 		total += price
// 	}
// 	return fmt.Sprint(total)
// }

// func slideleft(dir Dir) (int, int) {
// 	if dir == N {
// 		return -1, 0
// 	} else if dir == W {
// 		return 0, 1
// 	} else if dir == S {
// 		return 1, 0
// 	} else {
// 		return 0, -1
// 	}
// }

// func findnumsides(region []Coord) int {
// 	inregion := make(map[Coord]bool)
// 	for _, s := range region {
// 		inregion[s] = true
// 	}

// 	perimeteredges := []Edge{}
// 	for _, square := range region {
// 		e := Coord{square.x + 1, square.y}
// 		if !inregion[e] {
// 			perimeteredges = append(perimeteredges, Edge{e, W})
// 		}
// 		w := Coord{square.x - 1, square.y}
// 		if !inregion[w] {
// 			perimeteredges = append(perimeteredges, Edge{w, E})
// 		}
// 		s := Coord{square.x, square.y + 1}
// 		if !inregion[s] {
// 			perimeteredges = append(perimeteredges, Edge{s, N})
// 		}
// 		n := Coord{square.x, square.y - 1}
// 		if !inregion[n] {
// 			perimeteredges = append(perimeteredges, Edge{n, S})
// 		}
// 	}

// 	perimeteredgesset := make(map[Edge]bool)
// 	for _, edge := range perimeteredges {
// 		perimeteredgesset[edge] = true
// 	}
// 	countededges := make(map[Edge]bool)
// 	sides := 0
// 	for _, edge := range perimeteredges {
// 		if countededges[edge] {
// 			continue
// 		}
// 		dx, dy := slideleft(edge.dir)
// 		for i := 0; ; i++ {
// 			x, y := edge.c.x+dx*i, edge.c.y+dy*i
// 			maybeedge := Edge{Coord{x, y}, edge.dir}
// 			if perimeteredgesset[maybeedge] {
// 				countededges[maybeedge] = true
// 			} else {
// 				break
// 			}
// 		}
// 		dx, dy = -dx, -dy
// 		for i := 0; ; i++ {
// 			x, y := edge.c.x+dx*i, edge.c.y+dy*i
// 			maybeedge := Edge{Coord{x, y}, edge.dir}
// 			if perimeteredgesset[maybeedge] {
// 				countededges[maybeedge] = true
// 			} else {
// 				break
// 			}
// 		}
// 		sides++
// 	}
// 	return sides
// }

// func part2(input string) string {
// 	plot := parse(input)
// 	inregion := make(map[Coord]bool)
// 	regions := [][]Coord{}
// 	for y := 0; y < len(plot); y++ {
// 		for x := 0; x < len(plot[y]); x++ {
// 			c := Coord{x, y}
// 			if inregion[c] {
// 				continue
// 			} else {
// 				region := findregion(plot, c)
// 				for _, regcoord := range region {
// 					inregion[regcoord] = true
// 				}
// 				regions = append(regions, region)
// 			}
// 		}
// 	}

// 	prices := []int{}
// 	for _, r := range regions {
// 		area := len(r)
// 		sides := findnumsides(r)
// 		prices = append(prices, area*sides)
// 	}
// 	total := 0
// 	for _, price := range prices {
// 		total += price
// 	}
// 	return fmt.Sprint(total)
// }

// func Testing() {
// 	f, err := os.Open("data.txt")
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	b, err := io.ReadAll(f)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	s := string(b)
// 	fmt.Printf("Part 1: %s\n", part1(s))
// 	fmt.Printf("Part 2: %s\n", part2(s))
// }
