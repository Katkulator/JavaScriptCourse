function d6 () {
    return Math.floor(Math.random() * 6) + 1;
}

// generates an array of n integers, where each walue is a value from a function called d6
function getRolls(n) {
    return Array.from({length: n}, () => d6()); 
}

function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0)
}

export {d6, getRolls, sum};

