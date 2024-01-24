// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"
// }, 1000)

// setTimeout(()=>{
//     document.body.style.backgroundColor = "blue"
// }, 2000)

// setTimeout(()=>{
//     document.body.style.backgroundColor = "green"
// }, 3000)


// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "blue";
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "green"
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() =>{
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayedColorChange("olive", 1000, () => {
    delayedColorChange("darkgreen", 1000, () => {
        delayedColorChange("teal", 1000)
    })
})