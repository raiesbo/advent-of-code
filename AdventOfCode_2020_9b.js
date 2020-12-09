// --- Day 9: Encoding Error ---

const fs = require('fs');
fs.readFile("./input9.txt", 'utf8', (err, data) => {
  if (err) throw err;
  XMSCalc(data.trim().split('\n'), 25)
});

const XMSCalc = (arr, preambleNum) => {
    const parsedArr = arr.map(item => parseInt(item))
    let preamble = []
    let result = 0

    for (let i = 0; i < parsedArr.length; i++) {
        if ( i <= preambleNum - 1 ) {
            preamble.push(parsedArr[i])
        } else {
            
            let res = XMASBreacker(preamble)

            if (res.solved) {
                result = res.numbers
                let min = 0
                let max = 0
                for (let i = 0; i < result.length; i++) {
                    if (i === 0) {
                        min = result[i]
                    } else if (result[i] < min) {
                        min = result[i]
                    } else if (result[i] > max) {
                        max = result[i]
                    }
                }

                console.log(max + min)
                return (max + min)
            }


            preamble.shift();
            preamble.push(parsedArr[i])
        }

    }


    
}


const XMASBreacker = (arr) => {
    const total = 26134589 // DATA RESULT FROM PART A
    let result = 0
    let numbers = []
    let solved = false

    for (let num of arr) {
        result = num + result
        numbers.push(num)

        if (result === total) {
            solved = true
            return {
                arr,
                numbers,
                solved
            }
        }
    }
    return {
        solved
    }
}


const data = [
    "35",
    "20",
    "15",
    "25",
    "47",
    "40",
    "62",
    "55",
    "65",
    "95",
    "102",
    "117",
    "150",
    "182",
    "127",
    "219",
    "299",
    "277",
    "309",
    "576"
]

//XMSCalc(data, 5)
