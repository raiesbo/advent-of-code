// --- Day 5: Binary Boarding ---
/*
fetch("https://adventofcode.com/2020/day/5/input")
    .then(response => response.text())
    .then(text => text.trim().split('\n'))
    .then(inputData => seatCalc(inputData))
    .catch(e => console.log(e))
*/


const seatCalc = (arr) => {
    const rows = 128
    const collumns = 8

    let highestId = 0

    for (let seat of arr) {
        const rowCode = seat.slice(0, 7)
        const collumnCode = seat.slice(7, 10)

        let rowPos = [0, 127]
        let collumnPos = [0, 7]
        
        // ROWS CALCULATION
        for (let i = 0; i < collumnCode.length; i++) {
            if (i === collumnCode.length - 1) {
                if (collumnCode[i] === "R") {
                    collumnPos = collumnPos[1]
                } else {
                    collumnPos = collumnPos[0]
                }
            } else if (collumnCode[i] === "R") {
                collumnPos[0] = Math.round(collumnPos[1] / 2)
            } else if (collumnCode[i] === "L") {
                collumnPos[1] = collumnPos[1] - Math.round(collumnPos[0] / 2)
            }
        }
        // console.log(collumnPos)

        // COLLUMNS CALCULATION
        for (let i = 0; i < rowCode.length; i++) {

            if (i === rowCode.length - 1) {
                if (rowCode[i] === "B") {
                    rowPos = rowPos[1]
                } else {
                    rowPos = rowPos[0]
                }
            } else if (rowCode[i] === "B") {
                if (rowPos[0] === 0) {
                    rowPos[0] = Math.round(rowPos[1] / 2)
                } else {
                    rowPos[0] = rowPos[0] + Math.round((rowPos[1] - rowPos[0]) / 2)
                }
            } else if (rowCode[i] === "F") {
                if (rowPos[0] === 0) {
                    rowPos[1] = Math.round(rowPos[1] / 2)
                } else {
                    rowPos[1] = rowPos[1] - Math.round((rowPos[1] - rowPos[0]) / 2)
                }
                
            }

        }
        // console.log(rowPos)

        let newId = (rowPos * 8 ) + collumnPos
        console.log(newId)
        newId > highestId ? highestId = newId : null

    }
    console.log(highestId)
    return highestId
}


const Data1 = [
    "FBFBBFFRLR"
]

const Data = [
    "BFFFBBFRRR",
    "FFFBBBFRRR",
    "BBFFBBFRLL"
]

const Data2 = [
    "BFBBFFBRRL",
    "BFBFFFFRLL",
    "FBFBFFBRRR",
    "FFBBBFBRLL",
    "BBBFBFBRLR",
    "BFBBFBFLRR",
    "FBBBFFFRRL",
    "BBFFBFFLLL",
    "BBBFBBBRLR",
    "BFFBFFBRRL",
    "FFBFFFFLRR",
    "BFBBBFFRRR",
    "BFFBBFFRRR",
    "BBFFFFBLLL",
    "BFBBBFFLLL",
    "FBFFBBFRLR",
    "BFBBFBFRLR",
    "FBFBBBFRRL",
    "BBFFBBFLRL",
    "FBBFBFBLLR",
    "FBFFFFFLLR",
    "BFBFFFFLRL",
    "FBFFFFFLRR",
    "FBBBFFBRLL"
]


seatCalc(Data)
