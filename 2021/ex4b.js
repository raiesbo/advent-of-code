const fs = require("fs");
const fileUrl = '/ex4_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    calc(cleanData) // Result: 1830
});



const calc = (arr) => {
    const callNumbers = arr[0].split(',');
    const boards = arr.slice(1);

    const cleanedBoards = cleanBoards(boards);
    
    const winnersList = [];

    for (let i = 0; i < callNumbers.length; i++) {
        markNumber(cleanedBoards, callNumbers[i]);

        for (let j = 0; j < 10; j++) {
            const winner = checkWinner(cleanedBoards);

            if (winner) {
                winnersList.push({
                    table: cleanedBoards[winner],
                    number: callNumbers[i]
                });
                cleanedBoards.splice(winner, 1);
            }
        }
    }

    const lastWinnersTable = winnersList[winnersList.length - 1].table;
    const lastWinnersNumber = winnersList[winnersList.length - 1].number;
    calcWinner(lastWinnersTable, lastWinnersNumber);
}

const cleanBoards = (arr) => {
    const newArr = [];
    let subArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            i !== 0 && newArr.push(subArr)
            subArr = []
        }

        if (arr[i] !== '') {
            subArr.push(arr[i])
            i === arr.length - 1 && newArr.push(subArr)
        }
    }

    return newArr.map(table => {
        return table.map(row => {
            return row.replace(/\s+/g, ' ').trim().split(' ').map(num => {
                return {num, marked: false}
            })
        })
    })
}

const markNumber = (arr, num) => {
    arr.forEach(table => {
        table.forEach(row => {
            row.forEach(number => {
                 if (num === number.num) number.marked = true
            })
        })
    }) 
}

const checkWinner = arr => {
    let winnerIndex = null;
    const rowIndex = [0,1,2,3,4]

    for (let i = 0; i < arr.length; i++) {
        const table = arr[i];

        for (let row of table) {
            if (row.every(item => item.marked)) {
                winnerIndex = i;
                break;
            }
        }

        for (let id of rowIndex) {
            let isFullColumn = true;
            for (let colNum in table) {
            
                if (!table[colNum][id].marked) {
                    isFullColumn = false;
                    break;
                }
            }

            if (isFullColumn) {
                winnerIndex = i;
                break;
            }

            isFullColumn = true;
        }
    }

    return winnerIndex
}

const calcWinner = (table, calledNum) => {
    let sum = 0;

    table.forEach(row => {
        row.forEach(number => {
             if (!number.marked) sum += parseInt(number.num)
        })
    })

    console.log(sum * parseInt(calledNum))

    return sum * parseInt(calledNum)
}

const example = [
    '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
    '',
    '22 13 17 11  0',
    '8  2 23  4 24',
    '21  9 14 16  7',
    '6 10  3 18  5',
    '1 12 20 15 19',
    '',
    '3 15  0  2 22',
    '9 18 13 17  5',
    '19 8 7 25 23',
    '20 11 10 24  4',
    '14 21 16 12  6',
    '',
    '14 21 17 24  4',
    '10 16 15  9 19',
    '18  8 23 26 20',
    '22 11 13  6  5',
    '2  0 12  3  7',
]

// calc(example);