const fs = require("fs");
const fileUrl = '/ex5_input.txt';

fs.readFile(__dirname + fileUrl, (error, data) => {
    if(error) {
        throw error;
    }
    const cleanData = data.toString().trim().split('\n');
    calc(cleanData) // Result: 15463
});

const calc = arr => {
    const cleanedCoords = cleanCoords(arr);
    let diagram = createDiagram(cleanedCoords);

    for (let coordsLine of cleanedCoords) {
        markLine(diagram, coordsLine);
    }

    const result = diagram.reduce((acc, line) => {
        let count = 0;
        line.forEach(num => num >= 2 && count++)
        return acc + count
    }, 0)

    console.log(result);
    return result;
}

const markLine = (diagram, line) => {
    const spreadX = line.x1 - line.x2
    const spreadY = line.y1 - line.y2

    if (spreadX === 0 && line.y1 > line.y2) {
        for (let i = 0; i <= spreadY; i++) {
            diagram[line.y2 + i][line.x1]++
        }
    }

    if (spreadX === 0 && line.y1 < line.y2) {
        for (let i = 0; i <= (spreadY * -1); i++) {
            diagram[line.y1 + i][line.x1]++
        }
    }

    if (spreadY === 0 && line.x1 > line.x2) {
        for (let i = 0; i <= spreadX; i++) {
            diagram[line.y1][line.x2 + i]++
        }
    }

    if (spreadY === 0 && line.x1 < line.x2) {
        for (let i = 0; i <= (spreadX * -1); i++) {
            diagram[line.y1][line.x1 + i]++
        }
    }

    // Diagonals
    if (spreadY !== 0 && spreadX !== 0) {

        if (line.y1 > line.y2 && line.x1 > line.x2) {
            for (let i = 0; i <= spreadY; i++) {
                diagram[line.y1 - i][line.x1 - i]++
            }
        }
    
        if (line.y1 > line.y2 && line.x1 < line.x2) {
            for (let i = 0; i <= spreadY; i++) {
                diagram[line.y1 - i][line.x1 + i]++
            }
        }
    
        if (line.y1 < line.y2 && line.x1 > line.x2) {
            for (let i = 0; i <= spreadX; i++) {
                diagram[line.y1 + i][line.x1 - i]++
            }
        }
    
        if (line.y1 < line.y2 && line.x1 < line.x2) {
            for (let i = 0; i <= (spreadX * -1); i++) {
                diagram[line.y1 + i][line.x1 + i]++
            }
        }   
    }
}

const createDiagram = arr => {
    const diagram = [];
    const row = [];
    let biggestX = 0;
    let biggestY = 0;

    for (let line of arr) {
        if (line.x1 > biggestX ) biggestX = line.x1
        if (line.x2 > biggestX ) biggestX = line.x2
        if (line.y1 > biggestY ) biggestY = line.y1
        if (line.y2 > biggestY ) biggestY = line.y2
    }

    for (let dot = 0; dot <= biggestX; dot++) {
        row.push(0)
    }

    for (let dot = 0; dot <= biggestX; dot++) {
        diagram.push([...row])
    }

    return diagram;
}


const cleanCoords = arr => {
    return arr.reduce((acc, coords) => {
        const newCoords = coords.split(' ')
        const a = newCoords[0].split(',')
        const b = newCoords[2].split(',')
        return acc = [...acc, 
            {
                x1: parseInt(a[0]),
                y1: parseInt(a[1]),
                x2: parseInt(b[0]),
                y2: parseInt(b[1])}
        ]
    }, [])
}

const example = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2'
]

// calc(example)

