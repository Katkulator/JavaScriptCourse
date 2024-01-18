// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(2,3))
// ///////////////////////////////////////////////////
// const square = (x) => {
//     return x**2;
// }
// console.log(square(9))
// //////////////////////////////////////////////////
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDie())

// // IMPLICIT RETURNS //
// const rollDieTwo = () => (
//     Math.floor(Math.random() * 6) + 1
// );

// const isEven = num => num % 2 === 0;
// /////////////////////////////////////////////////

// const movies = [
//     {
//         title: "Amadeus",
//         score: 99
//     },
//     {
//         title: "Stand By Me",
//         score: 85
//     },
//     {
//         title: "Parasite",
//         score: 95
//     },
//     {
//         title: "Alien",
//         score: 90
//     }
// ]

// const scores = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

// console.log(scores)

// const newScores = movies.map(movie => `${movie.title} - ${movie.score / 10}`)
// const newScores = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))
    
// console.log(newScores)


// const person = {
//     firstName: 'Vigo',
//     lastName: 'Mortensen',
//     fullName: function () {
//        return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(person.fullName())

const person2 = {
    firstName: 'Vigo',
    lastName: 'Mortensen',
    fullName: function () {
       return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout( function () {
            console.log(this.fullName())
        }, 3000)
    }
}

console.log(person2.shoutName())