// --- Day 6: Custom Customs ---
/*
fetch("https://adventofcode.com/2020/day/6/input")
    .then(response => response.text())
    .then(text => text.trim().split('\n\n'))
    .then(inputData => yesCalc(inputData))
    .catch(e => console.log(e))
*/


const yesCalc = (arr) => {
    let yesTotal = 0

    for (let team of arr) {
        // const separatedTeam = team.replace(/↵/g, " ").split(' '); // TEST LOCAL
        const separatedTeam = team.replace(/\n/g , " ").split(' '); // TEST CHROME
        let answers = []

        for (let person of separatedTeam) {
            for(let answer of person) {
                if (!answers.includes(answer)) {
                    answers.push(answer)
                    yesTotal++
                }
            }
        }

    }
    console.log(yesTotal)
    return yesTotal
}


const Data = [
    "abc",
    "a↵b↵c",
    "ab↵ac",
    "a↵a↵a↵a",
    "b"
]

const Data1 = [
    "mxuwh↵hwuxm↵uhxmw↵hwumx↵hwuxm",
    "k↵k↵tl↵k",
    "qebagdfvhr↵alvkif↵yufaovwi↵fivsa↵nwifazovu"
]

const Data2 = [
    "BFBBFFBRRL",
    "BFBFFFFRLL",
    "FBFBFFBRRR",
    "FFBBBFBRLL",
    "BBBFBFBRLR",
    "BFBBFBFLRR",
    "FBBBFFFRRL",
    "BBFFBFFLLL",
    "BBBFBBBRLR",
    "BFFBFFBRRL",
    "FFBFFFFLRR",
    "BFBBBFFRRR",
    "BFFBBFFRRR",
    "BBFFFFBLLL",
    "BFBBBFFLLL",
    "FBFFBBFRLR",
    "BFBBFBFRLR",
    "FBFBBBFRRL",
    "BBFFBBFLRL",
    "FBBFBFBLLR",
    "FBFFFFFLLR",
    "BFBFFFFLRL",
    "FBFFFFFLRR",
    "FBBBFFBRLL"
]


yesCalc(Data)
