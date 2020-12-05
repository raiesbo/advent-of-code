// --- Day 4: Passport Processing ---

fetch("https://adventofcode.com/2020/day/4/input")
    .then(response => response.text())
    .then(text => text.trim().split('\n\n'))
    .then(inputData => console.log(passportChecker(inputData)))
    .catch(e => console.log(e))


const passportChecker = (arr) => {
    const stats  = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let tested = true
        
        for (let stat of stats) {
            console.log(arr[i].includes(stat))
            if (!arr[i].includes(stat)) {
                tested = false
            }
        }
        tested && count++
    }
    return count
}

// Test Data:
/*
const Data = [
    "eyr:2028 iyr:2016 byr:1995 ecl:oth↵pid:543685203 hcl:#c0946f↵hgt:152cm↵cid:252",
    "hcl:#733820 hgt:155cm↵iyr:2013 byr:1989 pid:728471979↵ecl:grn eyr:2022",
    "hgt:171cm↵iyr:2013 pid:214368857 hcl:#cfa07d byr:1986 eyr:2028 ecl:grn",
    "hgt:167cm cid:210 ecl:brn pid:429131951 hcl:#cfa07d eyr:2029 iyr:2010↵byr:1945",
    "hcl:#888785 iyr:2015↵hgt:170cm pid:893805464 ecl:amb byr:1966 eyr:2028",
    "hgt:170cm ecl:amb↵hcl:#c0946f eyr:2020 iyr:2016 pid:725010548↵byr:1928",
    "byr:1999 hcl:#888785↵eyr:2026↵ecl:hzl↵iyr:2016 hgt:193cm pid:170608679",
    "eyr:2024 iyr:2016 hcl:#cfa07d ecl:grn byr:2001 pid:391942873 cid:104 hgt:164cm",
    "iyr:2019↵eyr:2025 pid:138912840 byr:1996↵hgt:166cm↵hcl:#888785 ecl:grn"
]

passportChecker(Data)
*/

/*
const passportChecker = (arr) => {
    const stats  = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        const newArray = arr[i].replace(/↵/g , " ").split(' ');
        //const categories = newArray.map(item => item.substring(0,3))
        let tested = true


        for (let stat of stats) {
            if (!newArray.includes(stat)) {
                tested = false
            }
            console.log(tested)
        }

        tested && count++
        
    }

    console.log(count)
    return count
}
*/