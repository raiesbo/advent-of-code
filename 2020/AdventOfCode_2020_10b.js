// --- Day 10: Adapter Array ---

const fs = require('fs');
fs.readFile("./input10.txt", 'utf8', (err, data) => {
  if (err) throw err;
  adapterCalc(data.trim().split('\n').map(item => parseInt(item)), 0, 168)
  console.log(counter2)
}); // result: 6044831973376

let counter2 = 0

const adapterCalc = (arr, start, end) => {
    let final = end
    let current = start


    if (current === end) {
        return 1;
    }

    for (let j = 1; j < 4; j++) {
        // console.log(current, j)
        if (arr.includes(current + j)) {
            counter =+ adapterCalc(arr, current + j, final)
        }

    }

    // console.log(counter2)
    return counter

}

const data = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3
]


// adapterCalc(data, 0, 49) // result: 19208