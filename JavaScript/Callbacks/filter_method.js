const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(numbers.filter(n => {
    return n %  2 === 1
}))

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

const goodMovies = movies.filter(m => m.score > 90)
const badMovies = movies.filter(m => m.score < 90)

console.log(goodMovies)
console.log(badMovies)

const goodTitles = movies
    .filter(m => m.score > 90)
    .map(m => m.title) //komba filter i map

console.log(goodTitles)