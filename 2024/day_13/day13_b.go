package main

import (
	"os"
)

func (g *Games) CalcGamesPlus() {
	for _, game := range g.elems {
		game.price.x += 10000000000000
		game.price.y += 10000000000000

		cA := float64(game.price.x*game.bButton.y-game.price.y*game.bButton.x) /
			float64(game.aButton.x*game.bButton.y-game.aButton.y*game.bButton.x)
		cB := float64(game.price.y*game.aButton.x-game.price.x*game.aButton.y) /
			float64(game.aButton.x*game.bButton.y-game.aButton.y*game.bButton.x)
		if cA == float64(int(cA)) && cB == float64(int(cB)) {
			g.count += int(cA*3 + cB)
		}
	}
}

func Day13B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	games := NewGames(string(fileData))
	games.CalcGamesPlus()
	return games.count
}
