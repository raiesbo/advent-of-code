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
    const days = 256;
    // const days = 80;
    let result = 0;

    for (let num of newArr) {
        let data = 6 - num;
        const children = calcChildren(days + data, 0)
        result += children + 1;
    }

    console.log("result", result);
    return result;
}

let tab = []

for (let i = 0; i < 270; i++) {
    const subTab = []
    for (let j = 0; j < 270; j++) {
        subTab.push(null)
    }
    tab.push(subTab)
}

const calcChildren = (days, day) => {
    let children = Math.floor((days - day) / 7);

    if (tab[days][day]) {
        return tab[days][day]
    }

    if (days - day <= 6) {
        tab[days][day] = 0;
        return 0;
    } else {
        let subChildren = 0;

        for (let i = 1; i <= children; i++) {
            children += calcChildren(days, day + (7 * i) + 2)
        }

        tab[days][day] = children + subChildren;
        return children + subChildren;
    }
}

// const example = [3,4,3,1,2]; // 18 => 26 // 80 => 5934

// const example = [3];

// calc(example)