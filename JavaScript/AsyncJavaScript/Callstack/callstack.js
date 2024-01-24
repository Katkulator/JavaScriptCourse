const multiply = (x,y) => x * y;

const square = x => multiply(x, x); //square function calls the multiply function

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c) //isRightTriangle calls the square function three times
}

isRightTriangle(3,4,5);


console.log("sending request to server");

setTimeout(() => (console.log("here is your data")), 3000)

console.log("end of the file")