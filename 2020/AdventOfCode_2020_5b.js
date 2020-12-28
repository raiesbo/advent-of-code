// --- Day 5: Binary Boarding ---

const fs = require('fs');

fs.readFile("./input5.txt", 'utf8', (err, data) => {
  if (err) throw err;
  seatCalc(data.trim().split('\n'))
});



const seatCalc = (arr) => {

    let highestId = 0
    let myId = []
    let idList = []

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
                if (collumnPos[0] === 0) {
                    collumnPos[0] = ((collumnPos[1] + 1) / 2)
                } else {
                    collumnPos[0] = collumnPos[0] + ((collumnPos[1] + 1 - collumnPos[0]) / 2)
                }
            } else if (collumnCode[i] === "L") {
                if (collumnPos[0] === 0) {
                    collumnPos[1] = ((collumnPos[1] + 1) / 2) - 1
                } else {
                    collumnPos[1] = collumnPos[1] - ((collumnPos[1] + 1 - collumnPos[0]) / 2)
                }
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
                    rowPos[0] = ((rowPos[1] + 1) / 2)
                } else {
                    rowPos[0] = rowPos[0] + ((rowPos[1] + 1 - rowPos[0]) / 2)
                }
            } else if (rowCode[i] === "F") {
                if (rowPos[0] === 0) {
                    rowPos[1] = ((rowPos[1] + 1) / 2) - 1
                } else {
                    rowPos[1] = rowPos[1] - ((rowPos[1] + 1 - rowPos[0]) / 2)
                }
                
            }
            //console.log(rowPos)
        }
        // console.log(rowPos)

        // ID CALCULATION and PUSH
        let newId = (rowPos * 8 ) + collumnPos
        idList.push(newId)

        // ID TEST
        // console.log(newId)
        newId > highestId ? highestId = newId : null

    }
    
    // SECOND TEST 
    const sortedList = idList.sort()

    for (let i = 0; i < sortedList.length; i++) {
        if(!sortedList.includes(sortedList[i] + 1))
        myId.push(sortedList[i] + 1)
    }


    console.log(myId)
    return myId
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


// seatCalc(Data)
