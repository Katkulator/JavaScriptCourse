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

const user2 = {
    email: "stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma"
}

const {firstName, lastName} = user;

console.log(firstName)
console.log(lastName)

const { born: birthYear } = user; //extracts born property into a variable called birthYear

console.log(birthYear)