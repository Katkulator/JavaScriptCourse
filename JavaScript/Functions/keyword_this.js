const cat = {
    name: "Blue Steele",
    color: "Grey",
    breed: "Scottish Fold",
    describeCat(){
        return `I am ${this.name} and I'm ${this.breed} breed and my color is ${this.color}`
    }
}

let description = cat.describeCat()
console.log(description)