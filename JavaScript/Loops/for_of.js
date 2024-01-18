const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"]

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ["blasdf", "ČLKJSDF", "dalkjsdf"],
    ["dfkasl", "perpow", "pšodefa"],
    ["mnasdča", "šdpfja", "špadkja"]
]

for(let row of seatingChart){
    console.log(`Row #${seatingChart.indexOf(row) +1 }`)
    for(let student of row){
        console.log(student);
    }
}

for(char of "string"){
    console.log(char.toUpperCase())
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for(let num of numbers){
    console.log(parseInt(num) * parseInt(num))
}

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 71,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for(let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let sum = 0;

for(let score of Object.values(testScores)){
    sum += score;
}

console.log(sum / Object.values(testScores).length)