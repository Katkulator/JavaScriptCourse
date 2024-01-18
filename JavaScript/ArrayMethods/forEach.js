const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// function print(element) {
//     console.log(element)
// }
// nums.forEach(print)

// nums.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})