const fs = require("fs");
const fileUrl = '/ex2_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    // const numbersArr = cleanData.map(num => parseInt(num))
    calcPosition(cleanData) // Result: 571
    // console.log(cleanData)
});



const calcPosition = (arr) => {
    let horizontal = 0;
    let depth = 0;

    for (let i = 0; i < arr.length; i++) {
        const splitEntriy = arr[i].split(' ');

        switch (splitEntriy[0]) {
            case 'forward':
                horizontal += parseInt(splitEntriy[1])
              break;
            case 'down':
                depth += parseInt(splitEntriy[1])
                break;
            case 'up':
                depth -= parseInt(splitEntriy[1])
              break;
          }
    }

    console.log(horizontal * depth)
    return horizontal * depth
}

const example = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
]

calcPosition(example)
