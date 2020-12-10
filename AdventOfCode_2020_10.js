// --- Day 10: Adapter Array ---

const fs = require('fs');
fs.readFile("./input10.txt", 'utf8', (err, data) => {
  if (err) throw err;
  adapterCalc(data.trim().split('\n').map(item => parseInt(item)))
});


const adapterCalc = (arr) => {
    let joltAdapters_1 = 0
    let joltAdapters_2 = 0
    let joltAdapters_3 = 1 // +1 since the last adapter is 3uds higher than the highest-rated adapter
    let current = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(current + 1)) {
            joltAdapters_1++
            current = current + 1
        } else if (arr.includes(current + 2)) {
            joltAdapters_2++
            current = current + 2
        } else if (arr.includes(current + 3)) {
            joltAdapters_3++
            current = current + 3
        }
    }

    const result = joltAdapters_1 * (joltAdapters_3)
    // console.log(joltAdapters_1, joltAdapters_2, joltAdapters_3)
    console.log(result)
    return result
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


// adapterCalc(data)