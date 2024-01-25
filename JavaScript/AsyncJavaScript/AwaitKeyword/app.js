const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange("black", 1000)
// .then(() => delayedColorChange("yellow", 1000))
// .then(() => delayedColorChange("orange", 1000))
// .then(() => delayedColorChange("red", 1000))
// .then(() => delayedColorChange("brown", 1000))
// .then(() => delayedColorChange("black", 1000))

async function rainbow () {
    await delayedColorChange("red", 1000)
    console.log("red") //shows up after red is resolved
    await delayedColorChange("orange", 1000)
    console.log("orange")
    await delayedColorChange("yellow", 1000)
    console.log("yellow")
    await delayedColorChange("purple", 1000)
    console.log("purple")
    await delayedColorChange("green", 1000)
    console.log("green")
    return "All Done!"
}

//rainbow().then(() => console.log("End of Rainbow"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow")
}

printRainbow();