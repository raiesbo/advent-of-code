package main

import (
	"os"
	"strconv"
	"strings"
)

type Position struct {
	x int
	y int
}

type Game struct {
	aButton Position
	bButton Position
	price   Position
}

type Games struct {
	elems []Game
	count int
}

func NewGames(fileData string) *Games {
	games := []Game{}
	aX, aY, bX, bY, pX, pY := 0, 0, 0, 0, 0, 0

	for _, line := range strings.Split(string(fileData), "\n") {
		if strings.Contains(line, "Button A") {
			parts := strings.Split(line, "+")
			aX, _ = strconv.Atoi(parts[1][:2])
			aY, _ = strconv.Atoi(parts[2][:2])
		} else if strings.Contains(line, "Button B") {
			parts := strings.Split(line, "+")
			bX, _ = strconv.Atoi(parts[1][:2])
			bY, _ = strconv.Atoi(parts[2])
		} else if strings.Contains(line, "Prize") {
			parts := strings.Split(line, "=")
			firstNum := strings.Split(parts[1], ",")
			pX, _ = strconv.Atoi(firstNum[0])
			pY, _ = strconv.Atoi(parts[2])
		} else {
			games = append(games, Game{
				aButton: Position{
					x: aX,
					y: aY,
				},
				bButton: Position{
					x: bX,
					y: bY,
				},
				price: Position{
					x: pX,
					y: pY,
				},
			})
			aX, aY, bX, bY, pX, pY = 0, 0, 0, 0, 0, 0
		}
	}

	return &Games{
		elems: games,
		count: 0,
	}
}

func (g *Games) CalcGames() {
	for _, game := range g.elems {
		cA := float64(game.price.x*game.bButton.y-game.price.y*game.bButton.x) /
			float64(game.aButton.x*game.bButton.y-game.aButton.y*game.bButton.x)
		cB := float64(game.price.y*game.aButton.x-game.price.x*game.aButton.y) /
			float64(game.aButton.x*game.bButton.y-game.aButton.y*game.bButton.x)
		if cA == float64(int(cA)) && cB == float64(int(cB)) {
			g.count += int(cA*3 + cB)
		}
	}
}

func Day13A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	games := NewGames(string(fileData))
	games.CalcGames()
	return games.count
}

// Too log 2012
// Too high 105782
