const fs = require("fs");
const fileUrl = '/ex6_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split(',');
    const fixedData = cleanData.map(num => parseInt(num))
    calc(fixedData) // Result: 379414
});

const calc = (arr) => {
    const newArr = [...arr];

    for (let j = 0; j < 80; j++) {
        let count = 0;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === 0) {
                newArr[i] = 6
                count++
            } else {
                newArr[i] -= 1
            }
        }

        for (let z = 0; z < count; z++) {
            newArr.push(8)
        }

        count = 0;
    }

    console.log(newArr.length)
    return newArr.length
}

const example = [3,4,3,1,2];

calc(example)