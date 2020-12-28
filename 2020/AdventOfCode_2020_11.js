// --- Day 11: Seating System ---

/* const fs = require('fs');
fs.readFile("./input11.txt", 'utf8', (err, data) => {
  if (err) throw err;
  seatsCalc(data.trim().split('\n').map(item => item.split('')))
}); */


const seatsCalc = (arr) => {
    let counter = 0
    let newArr = arr
    //console.log(newArr)

    for (let i = 0; i < 300; i++) {
        for (let y = 0; y < arr.length; y++) {
            for (let x = 0; x < arr[y].length; x++) {
                if (newArr[y][x] === 'L') {
                    newArr[y][x] = "#"
                }

                if (newArr[y][x] === "#" && seatChecker(newArr, y, x)) {
                    newArr[y][x] = 'L'
                }
            }
        }
    }
    
    
    let flatArr = newArr.flat().flat()

    for (let item of flatArr) {
        if (item === "#") {
            counter++
        }
    }

    console.log(newArr)
    console.log(counter)
}


const seatChecker = (arr, y, x) => {
    let counter = 0
    const maxY = arr.length - 1
    const maxX = arr[0].length
    //console.log(y, x)
    //console.log(maxY, maxX)
    
    y >= 1 && x >= 1 && arr[y - 1][x - 1] == "#" ? counter++ : null
    y >= 1 && arr[y - 1][x] == "#" ? counter++ : null
    y >= 1 && x < maxX && arr[y - 1][x + 1] == "#" ? counter++ : null

    x >= 1 && arr[y][x - 1] == "#"  ? counter++ : null
    x < maxX && arr[y][x + 1] == "#" ? counter++ : null

    y < maxY && x >= 1 && arr[y + 1][x - 1] == "#" ? counter++ : null
    y < maxY && arr[y + 1][x] == "#" ? counter++ : null
    y < maxY && x < maxX && arr[y + 1][x + 1] == "#" ? counter++ : null


    if (counter >= 4) {
        return true
    } else {
        return false
    }
}


const data2 = [
    "L.LL.LL.LL"
]

const data = [
    "L.LL.LL.LL",
    "LLLLLLL.LL",
    "L.L.L..L..",
    "LLLL.LL.LL",
    "L.LL.LL.LL",
    "L.LLLLL.LL",
    "..L.L.....",
    "LLLLLLLLLL",
    "L.LLLLLL.L",
    "L.LLLLL.LL"
]

seatsCalc(data.map(item => item.split(''))) // 37