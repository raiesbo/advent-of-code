package main

import (
	"os"
)

func (d *Disk) DefragmentPlus() {
	p1 := 0
	p1b := 0
	p2 := len(d.fragments) - 1
	p2b := p2

	for p2b > 0 && p2 > 0 {
		if p2 < p1b {
			p1 = 0
			p1b = 0
			p2--
			p2b = p2
		} else if d.fragments[p2-1] == d.fragments[p2b] {
			p2--
		} else if p1 == p1b && d.fragments[p1] >= 0 {
			p1++
			p1b++
		} else if d.fragments[p1b+1] < 0 {
			p1b++
		} else if d.fragments[p1] < 0 && d.fragments[p1b+1] >= 0 {
			difP1 := p1b - p1
			difP2 := p2b - p2
			if difP1 >= difP2 {
				for i := 0; i <= difP2; i++ {
					d.fragments[p1+i], d.fragments[p2b-i] = d.fragments[p2b-i], d.fragments[p1+i]
				}
				p1 = 0
				p1b = 0
				p2--
				p2b = p2
			} else {
				p1b++
				p1 = p1b
			}
		}
	}
}

func Day9B(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	disk := NewDisk(string(fileData))
	disk.FindBlocks()
	disk.DefragmentPlus()
	return disk.CalcTotal()
}
