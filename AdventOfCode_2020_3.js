
fetch("https://adventofcode.com/2020/day/3/input")
    .then(response => response.text())
    .then(text => text.trim())
    .then((inputData) => {
        const resultA = treesCounter(inputData.split('\n'), 1, 1)
        const resultB = treesCounter(inputData.split('\n'), 3, 1)
        const resultC = treesCounter(inputData.split('\n'), 5, 1)
        const resultD = treesCounter(inputData.split('\n'), 7, 1)
        const resultE = treesCounter(inputData.split('\n'), 1, 2)

        return resultA * resultB * resultC * resultD * resultE
    })
    .then(result => console.log(result))
    .catch(e => console.log(e))


const treesCounter = (arr, slopeA, slopeB) => {
    let loc = 0
    let trees = 0
    let patternLength = 0

    for ( i = 0; i < arr.length; i = i + slopeB ) {
        patternLength = arr[i].length
        const row = arr[i].split('')

        row[loc] === "#" && trees++, loc = loc + slopeA
        loc >= patternLength ? loc = loc - patternLength : null

    }
    console.log(trees)
    return trees;
}

/*
const forest = [
    "#...",
    "...#.",
    ".#....#...",
    "....#....#",
    ".......#............",
    "..........#..................."
]

// console.log(forest[0].length)
treesCounter(forest, 3, 1)

*/