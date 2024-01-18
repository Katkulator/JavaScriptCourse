// const square = function (num) {
//     return Math.pow(num, 2)
// }
// console.log(square(7))

// function callTenTimes(f){
//     for(let i = 0; i < 10; i++){
//         f();
//     }
// }

// function callTwice(func){
//     func();
//     func();
// }

// function rollDice() {
//     const dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }

// callTenTimes(rollDice)


// function makeMisteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrats!")
//         }
//     } else {
//         return function(){
//             console.log("Fuck you!")
//         }
//     }
// }

// const mistery = makeMisteryFunc()
// console.log(mistery())

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const isBetween = makeBetweenFunc(100, 200);
const isAdult = makeBetweenFunc(18, 55);
const isSenior = makeBetweenFunc(55, 120)

console.log(isBetween(150))
console.log(isAdult(13))
console.log(isSenior(100))