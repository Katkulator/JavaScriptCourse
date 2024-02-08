const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 }
];


// ADDING THE ELEMENT
const addToArray = [...shoppingCart, {id: 4, product: "Coffe Mug", price: 7.99}]

console.log(addToArray)


// REMOVING THE ELEMENT
const removeById = addToArray.filter((item) => item.id !== 2);

console.log(removeById)

//UPDATING ALL ELEMENTS IN AN ARRAY
const updateAll = shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});

console.log(updateAll)


//MODIFIYING A PARTICULAR ELEMENT IN AN ARRAY
const moddedCart = shoppingCart.map((item) => {
    if (item.id === 3) {
        return {...item, price: 10.99};
    } else {
        return item;
    }
});

console.log(moddedCart)