// --- Day 7: Handy Haversacks ---

const fs = require('fs');

fs.readFile("./input7.txt", 'utf8', function(err, data) {
  if (err) throw err;
  bagChecker(data.trim().split('\n'))
});


const bagChecker = (arr) => {
    let shinyGoldBagContainters = []


    for (let bag of arr) {
        const subBag = bag.split('contain')
        // console.log(bag)
        // console.log(subBag)
        if (subBag[1].includes("shiny gold") && !shinyGoldBagContainters.includes(subBag[0].slice(0, -2))) {
            shinyGoldBagContainters.push(subBag[0].slice(0, -2))
        }
    }

    for (let i = 0; i < 20; i++) {
        for (let bag of arr) {
            const subBag = bag.split('contain')
    
            for (let color of shinyGoldBagContainters) {
                if (subBag[1].includes(color) && !shinyGoldBagContainters.includes(subBag[0].slice(0, -2)) && !shinyGoldBagContainters.includes(subBag[0].slice(0, -2))) {
                    shinyGoldBagContainters.push(subBag[0].slice(0, -2)) 
                    
                }
            }
        }
    }
    
    
    // console.log(shinyGoldBagContainters)

    console.log(shinyGoldBagContainters.length)
    return shinyGoldBagContainters.length
}




const Data = [
    "light red bags contain 1 bright white bag, 2 muted yellow bags.",
    "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
    "bright white bags contain 1 shiny gold bag.",
    "bright white bags contain 1 shiny gold bag.",
    "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
    "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
    "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
    "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
    "faded blue bags contain no other bags.",
    "dotted black bags contain no other bags."
]

const Data1 = [
    "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
    "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags."
]

const Data3 = [
    "posh crimson bags contain 2 mirrored tan bags, 1 faded red bag, 1 striped gray bag.",
    "bright gray bags contain 1 striped white bag, 4 vi…cyan bags, 4 clear white bags, 4 muted gold bags.",
    "pale plum bags contain 1 dark silver bag.",
    "light tomato bags contain 5 plaid brown bags, 5 bright maroon bags, 5 shiny beige bags.",
    "wavy brown bags contain 2 faded lavender bags, 2 wavy coral bags, 5 clear gold bags.",
    "dark chartreuse bags contain 4 striped lavender bags, 2 shiny silver bags, 5 wavy plum bags.",
    "dotted chartreuse bags contain 3 shiny teal bags, 4 posh maroon bags.",
    "muted purple bags contain 2 pale lavender bags, 5 drab red bags, 3 wavy fuchsia bags.",
    "shiny gray bags contain 5 pale red bags, 1 light c…reuse bag, 5 bright blue bags, 3 light gold bags.",
    "dull cyan bags contain 2 light green bags, 2 vibrant fuchsia bags.",
    "dotted gray bags contain 4 light bronze bags, 5 dim blue bags.",
    "muted plum bags contain 3 shiny brown bags, 4 shiny teal bags.",
    "bright magenta bags contain 1 plaid yellow bag, 1 dull white bag.",
    "dotted lime bags contain 4 shiny gray bags, 2 brig…gs, 5 dim fuchsia bags, 1 vibrant chartreuse bag.",
    "mirrored beige bags contain 2 plaid crimson bags, 3 wavy tomato bags.",
    "pale purple bags contain 2 faded chartreuse bags, …lime bags, 4 drab white bags, 4 shiny olive bags.", "dull bronze bags contain 3 bright lavender bags.", "striped bronze bags contain 1 dark olive bag, 5 dotted orange bags.", "vibrant orange bags contain 1 plaid plum bag, 1 fa…ime bag, 1 clear lavender bag, 1 muted brown bag.", "dull blue bags contain 5 dotted tan bags, 2 light crimson bags.", "mirrored red bags contain 1 shiny crimson bag.", "vibrant coral bags contain 1 vibrant gray bag.", "plaid tan bags contain 4 clear magenta bags, 5 posh brown bags, 5 drab lime bags.", "dark yellow bags contain 2 striped bronze bags, 3 shiny tomato bags.", "mirrored lime bags contain 3 bright orange bags.", "mirrored salmon bags contain 3 dark white bags, 5 clear salmon bags.", "light crimson bags contain 1 plaid cyan bag, 2 pal…er bags, 5 pale violet bags, 1 shiny crimson bag.", "clear white bags contain 2 muted blue bags, 5 dotted olive bags.", "muted magenta bags contain 4 dark purple bags.", "clear red bags contain 4 dark gray bags, 3 striped beige bags.", "plaid gray bags contain 3 faded olive bags.", "posh teal bags contain 3 pale gray bags, 3 dim beige bags, 2 dark gray bags, 1 shiny coral bag.", "pale violet bags contain 5 pale silver bags, 2 shi…son bags, 5 dull olive bags, 2 drab magenta bags.", "shiny purple bags contain 5 shiny indigo bags, 3 d…reen bags, 2 wavy blue bags, 3 light salmon bags.", "mirrored gold bags contain 2 muted coral bags, 4 shiny lavender bags.", "drab brown bags contain 1 posh lime bag."
]


//bagChecker(Data)
