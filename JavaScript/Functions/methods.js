const math = {
    PI: 3.14159,
    multiply: function(x, y){
        return x * y;
    },
    divide: function(x, y){
        return x / y;
    },
    square: function(x){
        return x * x;
    }
}

let nums = math.multiply(2,3);
console.log(nums)

let circumference = math.multiply(2, math.PI)
console.log(circumference)

const someDict = {a: "a", b: "b", c:"c"}
console.log(someDict["a"])

// kraći način #######################

const myMath = {
    PI: 3.14159,
    muliply(x, y){
        return x * y;
    },
    divide(x, y){
        return x / y;
    },
    square(x){
        return x * x;
    }
}

let numbers = myMath.muliply(2,8);
console.log(numbers)