// --- Day 4b: Passport Processing ---
/*
fetch("https://adventofcode.com/2020/day/4/input")
    .then(response => response.text())
    .then(text => text.trim().split('\n\n'))
    .then(inputData => passportChecker(inputData))
    .catch(e => console.log(e))
*/

const passportChecker = (arr) => {
    const stats  = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
    let passIsCorrect = true
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        passIsCorrect = true
        
        // FIRST CONDITION (TEST_A)
        for (let stat of stats) {
            if (!arr[i].includes(stat)) {
                passIsCorrect = false
            }
        }
        // HERE FINISHES THE FIRST TEST

        // NEW CONDITIONS (TEST_B)
        if (passIsCorrect) {
            // const newArray = arr[i].replace(/\n/g , " ").split(' '); // CHROME TESTS  // IMP!!!!
            const newArray = arr[i].replace(/↵/g , " ").split(' '); // LOCAL TESTS  // IMP!!!!
            const splittedArray = newArray.map(item => item.split(":"))
            // console.log(splittedArray)

            for (let item of splittedArray) {
                // ej: item = ["ecl", "hzl"]
                // console.log(item)
                // console.log(item[0])
                // console.log(item[1])

                switch (item[0]) {
                    case stats[0]:
                        // console.log(item, stats[0], parseInt(item[1]), item[1].length)
                        if (parseInt(item[1]) < 1920 || parseInt(item[1]) > 2002 || item[1].length !== 4) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[1]:
                        // console.log(item, stats[1], parseInt(item[1]), item[1].length)
                        if (parseInt(item[1]) < 2010 || parseInt(item[1]) > 2020 || item[1].length !== 4) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[2]:
                        // console.log(item, stats[2], parseInt(item[1]), item[1].length )
                        if (parseInt(item[1]) < 2020 || parseInt(item[1]) > 2030 || item[1].length !== 4) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[3]:
                        // console.log(item, stats[3], item[1].slice(-2), parseInt(item[1].slice(0, 3)))
                        if (item[1].slice(-2) === "in" && parseInt(item[1].slice(0, 2)) < 59) {
                            passIsCorrect = false;
                        } else if (item[1].slice(-2) === "in" && parseInt(item[1].slice(0, 2)) > 79) {
                            passIsCorrect = false;
                        } else if (item[1].slice(-2) === "cm" && parseInt(item[1].slice(0, 3)) < 150) {
                            passIsCorrect = false;
                        } else if (item[1].slice(-2) === "cm" && parseInt(item[1].slice(0, 3)) > 193) {
                            passIsCorrect = false;
                        } else if (!item[1].includes("cm") && !item[1].includes("in")) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[4]:
                        // console.log(item, stats[4])
                        if (item[1].length !== 7 || item[1][0] !== "#" || !item[1].match("^[A-Za-z0-9#]+$") === null) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[5]:
                        // console.log(item, stats[5])
                        if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(item[1])) {
                            passIsCorrect = false;
                        }
                        break;
                    case stats[6]:
                        // console.log(item, stats[6])
                        if (item[1].length !== 9) {
                            passIsCorrect = false;
                        }
                        break;
                }
            }
        }
        // HERE FINISHES THE SECOND TEST

        passIsCorrect && count++
    }
    console.log(count)
    return count
}


const Data2 = [
    "eyr:2028 iyr:2016 byr:1995 ecl:oth↵pid:543685203 hcl:#c0946f↵hgt:152cm↵cid:252"
]

const Data3 = [
    "eyr:2028 iyr:2016 byr:1995 ecl:oth↵pid:543685203 hcl:#c0946f↵hgt:152cm↵cid:252",
    "hcl:#733820 hgt:155cm↵iyr:2013 byr:1900 pid:728471979↵ecl:grn eyr:2022",
    "hgt:171cm↵iyr:2013 pid:214368857 hcl:#cfa07d byr:1986 eyr:2028 ecl:grn",
    "hgt:167cm cid:210 ecl:brn pid:429131951 hcl:#cfa07d eyr:2029 iyr:2010↵byr:1945",
    "hcl:#888785 iyr:2015↵hgt:170cm pid:893805464 ecl:amb byr:1966",
    "hgt:170cm ecl:amb↵hcl:#c0946f eyr:2020 iyr:2009 pid:725010548↵byr:1928",
    "byr:1999 hcl:#888785↵eyr:2026↵ecl:hzl↵iyr:2016 hgt:193cm pid:170608679",
    "eyr:2024 iyr:2016 hcl:#cfa07d ecl:grn byr:2001 pid:391942873 cid:104 hgt:164cm",
    "iyr:2019↵eyr:2025 pid:138912840 byr:1996↵hgt:166cm↵hcl:#888785 ecl:grn"
]

const Data = [
    "eyr:2028 iyr:2016 byr:1995 ecl:oth↵pid:543685203 hcl:#c0946f↵hgt:152cm↵cid:252",
    "hcl:#733820 hgt:155cm↵iyr:2013 byr:1989 pid:728471979↵ecl:grn eyr:2022",
    "hgt:171cm↵iyr:2013 pid:214368857 hcl:#cfa07d byr:1986 eyr:2028 ecl:grn",
    "hgt:167cm cid:210 ecl:brn pid:429131951 hcl:#cfa07d eyr:2029 iyr:2010↵byr:1945",
    "hcl:#888785 iyr:2015↵hgt:170cm pid:893805464 ecl:amb byr:1966 eyr:2028",
    "hgt:170cm ecl:amb↵hcl:#c0946f eyr:2020 iyr:2016 pid:725010548↵byr:1928",
    "byr:1999 hcl:#888785↵eyr:2026↵ecl:hzl↵iyr:2016 hgt:193cm pid:170608679",
    "eyr:2024 iyr:2016 hcl:#cfa07d ecl:grn byr:2001 pid:391942873 cid:104 hgt:164cm",
    "iyr:2019↵eyr:2025 pid:138912840 byr:1996↵hgt:166cm↵hcl:#888785 ecl:grn",
    "iyr:2023 hcl:a58381 pid:#401a29 eyr:1940↵byr:1920↵ecl:utc hgt:183cm",
    "pid:493510244 ecl:gry hgt:153cm byr:1950 cid:181 eyr:2028↵hcl:#ceb3a1↵iyr:2020",
    "iyr:2018 pid:074340974 hgt:182cm↵hcl:#866857 byr:1988 ecl:hzl eyr:2023",
    "hcl:#866857 ecl:oth byr:1977 iyr:2014 hgt:180cm pid:860745884↵eyr:2023",
    "eyr:2026 pid:815594641↵ecl:gry iyr:2012 byr:1992 hgt:161cm hcl:#b6652a",
    "ecl:gry cid:338 eyr:2021 pid:777099878 hgt:193cm hcl:#efcc98↵byr:1945↵iyr:2015",
    "iyr:2016 byr:1934 hcl:#b6652a↵hgt:162cm ecl:hzl↵cid:296↵pid:742610207↵eyr:2022",
    "ecl:#ba3242↵hgt:80 byr:1931↵pid:550004054 iyr:1949 eyr:1944 hcl:fb3859",
    "ecl:amb eyr:2024↵byr:1965 iyr:2010 pid:094059049↵hcl:#fffffd↵hgt:168cm",
    "pid:159cm↵iyr:1923 eyr:2032 hcl:701107 cid:343 ecl:gmt byr:2010↵hgt:177cm",
    "eyr:2021↵ecl:grn byr:1991↵hcl:#fffffd hgt:167cm pid:243218792 iyr:2019",
    "hgt:157cm byr:2017 ecl:grn iyr:2012↵eyr:2030 hcl:#18171d pid:173cm",
    "pid:260101979 hgt:187cm eyr:2033 ecl:lzr↵byr:2020 hcl:1058ce cid:133 iyr:2012",
    "hcl:#7d3b0c↵pid:307828343 byr:2001↵cid:317 iyr:2013↵eyr:2029",
    "pid:472940417 eyr:1960↵hgt:181cm hcl:#c0946f cid:269↵byr:2014↵iyr:1956",
    "hcl:#18171d eyr:2021 byr:2001 pid:421443124↵ecl:brn iyr:2020 hgt:156cm",
    "cid:347 hgt:60in pid:359783692 byr:1932↵ecl:hzl↵eyr:2023↵hcl:#888785 iyr:2019",
    "pid:230915137↵byr:1999↵iyr:2011 eyr:2020 hcl:#7d3b0c ecl:hzl↵hgt:164cm",
    "iyr:1989↵byr:2008↵hgt:154cm↵eyr:2028 pid:280298169↵cid:208↵ecl:oth",
    "byr:1954 iyr:2017↵ecl:hzl↵eyr:2026↵pid:966957581 hgt:175cm hcl:#18171d",
    "pid:308053355 hgt:192cm eyr:2022 ecl:amb cid:146 iyr:2015↵byr:1991 hcl:#c0946f",
    "hcl:#a97842 pid:244441133 iyr:2019↵hgt:182cm↵ecl:amb cid:172 byr:1973 eyr:2029",
    "iyr:2017↵byr:1985 cid:215↵ecl:blu hcl:#623a2f hgt:160cm pid:157856689 eyr:2030",
    "eyr:2027 ecl:#d72f9b hgt:162cm↵iyr:2018 hcl:#a97842↵byr:1945↵pid:131243258",
    "hcl:#b3f2f0 pid:204254353 cid:169 eyr:2020↵iyr:2013 hgt:172cm ecl:blu byr:1950",
    "byr:1957 hcl:#c0946f hgt:152cm ecl:blu eyr:2027 pid:325917033↵iyr:2010",
    "ecl:oth byr:1950 hgt:166cm pid:007352351↵hcl:#b6652a↵iyr:2020↵eyr:2024",
    "hgt:165 eyr:2030 iyr:2027↵ecl:#1a34f1 pid:2894591864 byr:2024 hcl:z",
    "byr:1971 ecl:oth↵hgt:163cm eyr:2021 pid:040443396",
    "hgt:177cm↵byr:1955 pid:585735590 iyr:2010 ecl:grn eyr:2024↵hcl:#602927",
    "cid:74↵iyr:2010↵pid:014378493 hgt:174cm eyr:2020↵ecl:grn byr:1944",
    "pid:404141049↵byr:1947 ecl:blu hgt:170cm iyr:2011↵eyr:2028↵hcl:#cfa07d",
    "ecl:hzl byr:1938 pid:235085606 cid:180 hcl:8fb74c eyr:2021 hgt:73 iyr:2015",
    "pid:860077423 ecl:gry↵hcl:#3e845b↵hgt:167cm byr:1933 iyr:2016 eyr:2021",
    "hcl:#733820 hgt:66in eyr:1920↵ecl:oth byr:1941 pid:979460474 iyr:2010↵cid:247"
]

passportChecker(Data)
