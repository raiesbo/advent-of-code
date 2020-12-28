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
        let teamMembers = 0

        for (let person of separatedTeam) {
            teamMembers++

            // FIRST TEST
            // Getting all the unic answers
            for(let answer of person) {
                if (!answers.includes(answer)) {
                    answers.push(answer)
                }
            }

        }
        console.log(separatedTeam)
        for (let answer of answers) {
            if (separatedTeam.every((person) => person.includes(answer))) {
                yesTotal++
            }
        }
        
        // console.log(teamMembers)

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



yesCalc(Data)
