const a = [1,2,3,,5]
console.log(a)

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const dubles = numbers.map(function(num){
    return num * 2
})

console.log(dubles)

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

const titles = movies.map(function(movie){
    return movie.title;
})

console.log(titles)