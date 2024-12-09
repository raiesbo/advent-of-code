package main

import (
	"os"
	"strconv"
)

const (
	SPACE = -1
)

type Disk struct {
	memMap    string
	fragments []int
}

func NewDisk(data string) *Disk {
	return &Disk{
		memMap: data,
	}
}

func (d *Disk) FindBlocks() {
	blocks := []int{}
	fileNum := 0

	for i, char := range d.memMap {
		n, _ := strconv.Atoi(string(char))
		if i%2 == 0 {
			for j := 0; j < n; j++ {
				blocks = append(blocks, fileNum)
			}
			fileNum++
		} else {
			for j := 0; j < n; j++ {
				blocks = append(blocks, SPACE)
			}
		}
	}

	d.fragments = blocks
}

func (d *Disk) Defragment() {
	pos1 := 0
	pos2 := len(d.fragments) - 1

	for pos1 != pos2 {
		if d.fragments[pos1] >= 0 {
			pos1++
		} else {
			if d.fragments[pos2] >= 0 {
				d.fragments[pos1], d.fragments[pos2] = d.fragments[pos2], d.fragments[pos1]
			} else {
				pos2--
			}
		}
	}
}

func (d *Disk) CalcTotal() int {
	res := 0

	for i, val := range d.fragments {
		if val >= 0 {
			res += val * i
		}
	}

	return res
}

func Day9A(filePath string) int {
	fileData, _ := os.ReadFile(filePath)
	disk := NewDisk(string(fileData))
	disk.FindBlocks()
	disk.Defragment()
	return disk.CalcTotal()
}
