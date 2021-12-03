const fs = require("fs");
const fileUrl = '/ex3_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    calc(cleanData) // Result: 2135254
});


const calc = arr => {
    const oxygen = parseInt(oxygenCalc(arr), 2);
    const co2 = parseInt(CO2Calc(arr), 2);

    console.log(oxygen * co2)
    return oxygen * co2
}

const oxygenCalc = arr => {
    let filteredArr = arr
    let index = 0

    while (index <= arr[0].length) {
        if (filteredArr.length <= 1) {
            return filteredArr
        }
        const frequesy = {'0': 0, '1': 0};

        for (let i = 0; i < filteredArr.length; i++) {
            frequesy[filteredArr[i][index]]++
        }

        const mostCommon = frequesy['1'] >= frequesy['0'] ? '1' : '0'

        filteredArr = filteredArr.filter(arrNum => {
            return arrNum[index] === mostCommon
        })

        index++
    }
}

const CO2Calc = arr => {
    let filteredArr = arr
    let index = 0

    while (index <= arr[0].length) {
        if (filteredArr.length <= 1) {
            return filteredArr[0]
        }
        const frequesy = {'0': 0, '1': 0};

        for (let i = 0; i < filteredArr.length; i++) {
            frequesy[filteredArr[i][index]]++
        }

        const mostCommon = frequesy['1'] >= frequesy['0'] ? '0' : '1'

        filteredArr = filteredArr.filter(arrNum => {
            return arrNum[index] === mostCommon
        })

        index++
    }
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