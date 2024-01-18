const user = {
    email: "matkokatic92@gmail.com",
    password: "jendvatri",
    firstName: "Matko",
    lastName: "Katic",
    born: 1992,
    died: null,
    bio: "nema di nisam bio",
    city: "Našice",
    country: "Croatia"
}

function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

function fullNameDestruct(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

function fullNameDestruct2({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

console.log(fullName(user))
console.log(fullNameDestruct(user))
console.log(fullNameDestruct2(user))


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

// const goodMovies = movies.filter(movie => movie.score > 90);
// const goodMovies = movies.filter(({ score }) => score >= 90)
const goodMovies = movies.map(movie => {
    return `${movie.title} is rated ${movie.score}`
})

const goodMoviesDestruct = movies.map(({ title, score }) => {
    return `${title} is rated ${score}`
})

console.log(goodMovies)
console.log(goodMoviesDestruct)