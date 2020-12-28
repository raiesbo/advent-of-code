// --- Day 8: Handheld Halting ---

const fs = require('fs');
fs.readFile("./input8.txt", 'utf8', (err, data) => {
  if (err) throw err;
  programFixer(data.trim().split('\n').map(item => item.split(' ')))
});


const accFiller = (arr) => {
    let accumulator = 0
    let infiniteLoop = false

    let iAccumulator = []

    for (let i = 0; i < arr.length; i++) {

        if (iAccumulator.includes(i)) {
            infiniteLoop = true
            // console.log( accumulator, infiniteLoop)
            return { result: accumulator, isInfinit: infiniteLoop }
        }

        iAccumulator.push(i)

        let item = arr[i][0]
        const num = parseInt(arr[i][1])

        switch (item) {
            case "acc":
                accumulator = accumulator + num
                break;
            case "jmp":
                i = i + num - 1
                break;
            default:
                break;
        }
    }
    console.log("Right Answer:", accumulator)
    return { result: accumulator, isInfinit: infiniteLoop}
}


const programFixer = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i][0]

        if (item === "acc") {
            continue;
        }

        item = (item === "jmp") ? "nop" : "jmp"

        const newArr = arr.map((data) => {
            if (arr.indexOf(data) === i) {
                return data = item
            } else {
                return data
            }
        })
        
        const result = accFiller(newArr)

        if (!result.isInfinit) {
            return result;
        }
    }
}


