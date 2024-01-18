//

const nums = [1, 2, 33, 65, 21, 65, 585, 874, 54, 15, 62]

console.log(Math.max(...nums)) // equivalent of Math.max(1, 2, 33, 65, 21, 65, 585, 874, 54, 15, 62)
console.log(...nums)

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs]

console.log(allPets)

