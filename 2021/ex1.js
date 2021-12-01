const fs = require("fs");
const fileUrl = '/ex1_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    const numbersArr = cleanData.map(num => parseInt(num))
    calcNumber(numbersArr) // Result: 1532
});

const calcNumber = (arr) => {
    let times = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[i] > arr[i - 1] && times++
    }
    console.log(times)
    return times
}

const dataExample = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263,
]

calcNumber(dataExample);