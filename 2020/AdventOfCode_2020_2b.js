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

    if (password[min-1] === letter && password[max-1] !== letter) {
        return true
    } else if (password[min-1] !== letter && password[max-1] === letter) {
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

// Test Data: 

/*
const dataInput = [
    "4-10 q: qqqqqqqqqiqbkdqrgqq"
]


const dataInput = [
    "4-10 q: qqqpqqqqqqqbkdqrgqq",
    "14-20 m: mmrmmmmmmfmmmlmmzcmw",
    "1-2 t: qvxzmfgpxwgkt",
    "7-11 w: wwwwwwwwcppppp",
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
    "13-14 v: vvvvvvvvvvvvhv",
    "4-6 d: ddddwd",
    "4-8 f: zfqqdrfwcng",
    "2-6 s: ssnscs",
    "4-8 z: fzzzzvgbzwrzqzz",
    "14-18 z: thmkmmggvkfzbzfzvzt",
    "2-8 h: hhhhhhhh",
    "7-9 p: ppppppgpll",
    "1-2 x: cxkcrk",
    "1-2 h: lbrhhp",
    "1-9 k: knnnnnnnnn"
]

console.log(dataCalc(dataInput))

*/