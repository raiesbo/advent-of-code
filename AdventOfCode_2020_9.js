// --- Day 9: Encoding Error ---

const fs = require('fs');
fs.readFile("./input9.txt", 'utf8', (err, data) => {
  if (err) throw err;
  XMSCalc(data.trim().split('\n'), 25)
});

const XMSCalc = (arr, preambleNum) => {
    const parsedArr = arr.map(item => parseInt(item))
    let preamble = []
    let result = []

    for (let i = 0; i < parsedArr.length; i++) {
        if ( i <= preambleNum - 1 ) {
            preamble.push(parsedArr[i])
        } else {
            let included = false
            
            for (let j = 0; j < preamble.length; j++) {
                const rest = parsedArr[i] - preamble[j]
                const invertRest = preamble[j] - parsedArr[i]

                // console.log(parsedArr[i], rest, invertRest, preamble)
                if (preamble.includes(rest) || preamble.includes(invertRest)) {
                    included = true
                }
            }
            included ? null : result.push(parsedArr[i])
            preamble.shift();
            preamble.push(parsedArr[i])
        }

    }

    console.log(result)
    return result
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
