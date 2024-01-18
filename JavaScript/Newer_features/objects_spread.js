const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const felineColor = {...feline, color: "orange"};
const catDog = {...feline, ...canine} //canine overrides feline's family property
const dogCat = { ...canine, ...feline }

console.log(felineColor)
console.log(catDog)
console.log(dogCat)


const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
}

const newUser = {...dataFromForm, id: 123, isAdmin: false}
console.log(newUser)