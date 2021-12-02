const fs = require("fs");
const fileUrl = '/ex2_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    calcPosition(cleanData) // Result: 1855892637
});



const calcPosition = (arr) => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let i = 0; i < arr.length; i++) {
        const splitEntriy = arr[i].split(' ');

        switch (splitEntriy[0]) {
            case 'forward':
                horizontal += parseInt(splitEntriy[1])
                depth += aim * parseInt(splitEntriy[1])
              break;
            case 'down':
                aim += parseInt(splitEntriy[1])
                break;
            case 'up':
                aim -= parseInt(splitEntriy[1])
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
