const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * 10)
        setTimeout(() => {
            if (rand < 7){
                resolve("Fake data");
            }
            reject("Request error")
        }, 1000)
    })
}

// fakeRequest("/dogs/1")
//     .then((data) => {
//         console.log("Done with request!")
//         console.log("Data is:", data)
//     })
//     .catch((err) => {
//         console.log("Request failed!", err)
//     })


    const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    }

delayedColorChange("black", 1000)
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("red", 1000))
    .then(() => delayedColorChange("brown", 1000))
    .then(() => delayedColorChange("black", 1000))
    
