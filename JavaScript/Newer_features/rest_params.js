// Rest Parameter syntax allows a function to accept an indefinite number of arguments as an array.

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

function sum(...nums){
    return nums.reduce((total, el) => total + el);
}

console.log(sum(1,2,3,36,5))

