const fs = require("fs");
const fileUrl = '/ex3_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    calc(cleanData) // Result: 2595824
});


const calc = (arr) => {
    let frequesy = []

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (!frequesy[j]) {
                frequesy[j] = {0: 0, 1: 0}
            }

            frequesy[j][arr[i][j]]++
        }
    }

    const mostCommon = frequesy.reduce((acc, digit) => {
        const most = digit['0'] > digit['1'] ? '0' : '1'
        return acc + most
    }, '')

    const leastCommon = frequesy.reduce((acc, digit) => {
        const lest = digit['0'] < digit['1'] ? '0' : '1'
        return acc + lest
    }, '')

    const result = parseInt(mostCommon, 2) * parseInt(leastCommon, 2)
    
    console.log(result)
    return (result)
}

const example = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
];

calc(example);