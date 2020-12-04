const passportChecker = (arr) => {
    const stats  = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    let count = true
    //const newArray = arr.replace(/↵/g , " ").split(' ');

    //console.log(newArray)

    for (let stat of stats) {
        console.log(arr.includes(stat))
        if (arr.includes(stat)) {
            count = false
        }
    }

    return ("COUNT", count)
}

const Data = "eyr:2028  byr:1995 ecl:oth↵pid:543685203 hcl:#c0946f↵hgt:152cm↵cid:252"


console.log(passportChecker(Data))