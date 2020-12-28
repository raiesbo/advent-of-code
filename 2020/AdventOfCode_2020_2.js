// --- Day 2: Password Philosophy ---


fetch("https://adventofcode.com/2020/day/2/input")
    .then(response => response.text())
    .then(text => text.trim())
    .then(inputData => console.log(dataCalc(inputData.split('\n'))))
    .catch(e => console.log(e))


const inputCalc = (input) => {
    const splitInput = input.split(" ")
    const minMax = splitInput[0].split("-")
    const password = splitInput[2]
    let min = parseInt(minMax[0])
    let max = parseInt(minMax[1])
    let letter = splitInput[1][0]
    let letterCount = 0

    for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) {
            letterCount++
        }
    }

    if (letterCount >= min && letterCount <= max) {
        return true
    } else {
        return false
    }

}


const dataCalc = (list) => {
    let count = 0
    for (let j = 0; j < list.length; j++) {
        if (inputCalc(list[j]) === true) {
            count++
        }
    }
    return count
}

// Test
/*
const dataInput = [
    "4-10 q: qqqpqqqqqqqbkdqrgqq",
    "14-20 m: mmrmmmmmmfmmmlmmzcmw",
    "1-2 t: qvxzmfgpxwgkt",
    "7-11 w: wwwwwwcwwwlwp",
    "12-13 g: gggsslggggggg",
    "9-11 v: vvvvgvnvhvvgvv",
    "1-11 z: tgksdczwmtzsfs",
    "13-15 t: hrshwjqvtlcqtrtttjhv",
    "4-13 h: hhhrxhhfhhmhhhhsdh",
    "2-3 s: shcsssss",
    "6-14 g: gggwgtgfpgqggwgg",
    "3-5 t: gsmtttttcbf",
    "8-9 b: gbbbbbbbbb",
    "8-9 f: ffqfffflf",
    "13-14 f: ffffffffffffnf",
    "13-14 v: vvvvvvvvvvvvhv"
]

console.log(dataCalc(dataInput))
*/