// --- Day 8: Handheld Halting ---

const fs = require('fs');

fs.readFile("./input8.txt", 'utf8', (err, data) => {
  if (err) throw err;
  accFiller(data.trim().split('\n'))
});


const accFiller = (arr) => {
    let accumulator = 0
    const newArr = arr.map(item => item.split(' '))

    let iAccumulator = []

    for (let i = 0; i < newArr.length; i++) {

        if (iAccumulator.includes(i)) {
            i = newArr.length
            console.log(accumulator)
            return accumulator
        }

        iAccumulator.push(i)

        const item = newArr[i][0]
        const num = parseInt(newArr[i][1])

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
}


const Data = [
    "nop +0",
    "acc +1",
    "jmp +4",
    "acc +3",
    "jmp -3",
    "acc -99",
    "acc +1",
    "jmp -4",
    "acc +6"
]


// accFiller(Data)
