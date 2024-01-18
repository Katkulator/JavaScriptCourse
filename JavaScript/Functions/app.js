function spinDice(sides) {
    let dice = Math.floor(Math.random() * sides) + 1;
    return dice
}

console.log(spinDice(6))
console.log(spinDice(12))
console.log(spinDice(20))

function rant (message) {
    console.log(message.toUpperCase()) 
    console.log(message.toUpperCase()) 
    console.log(message.toUpperCase()) 
}

rant("baldkaf")
rant("hfsdhsd")

function repeat(message, numTimes){
    for (let i = 0; i < numTimes; i++){
        console.log(message)
    }
}

repeat("bezveze", 4)

function isSnakeEyes(num1, num2){
    if (num1 === 1 && num2 === 1){
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

isSnakeEyes(1,1)

function lastElement(element){
    let iOfElement = element.length - 1
    if (element.length === 0){
        return null
    }
    return element[iOfElement]

    }
console.log(lastElement([1,2,3,4,5]))

function capitalize(word){
    let upperLetter = word[0].toUpperCase()
    return upperLetter + word.slice(1)
}

console.log(capitalize("majmune"))

function sumArray(nums){
    let total = 0;
    for(let num of nums){
        total += num;
    }
    return total;
}

console.log(sumArray([2,2,2,2]))

function returnDay(num){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (num < 1 || num > 7){
        return null;
    }
    return days[num - 1];
}

console.log(returnDay(5))