let maximum = parseInt(prompt("Enter the maximum number:!"));
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; 

let guess = prompt(`Guess a number from 1 to ${maximum}! Type 'q' to quit the game! `);
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new number!");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new number!");
        attempts++;
    } else {
        guess = prompt("Invalid guess! Please a number or 'q' to quit!");
    }
}
if (guess === "q") {
    console.log("bye bye");
} else {
    console.log(`Congrats! The number is ${targetNum}`);
    console.log(`You got it in ${attempts} attempts`);
}
