//////////////////////////// getElementsByTagName & ClassName //////////////////////////// 

const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
    console.log(img.src)
}

const squareImgs = document.getElementsByClassName("square");

for (let img of squareImgs) {
    img.src = "https://www.otvoreno.hr/wp-content/uploads/2023/02/Jaran.jpg"
}


//////////////////////////// querySelector & querySelectorAll //////////////////////////// 

const title = document.querySelector("a[title = 'Java']")

const allTitles = document.querySelectorAll("a")

const links = document.querySelectorAll("p a");

for(let link of links){
    console.log(link.href)
}

//////////////////////////// innerHTML, textContent, innerText //////////////////////////// 

const allLinks = document.querySelectorAll("a");

for(let link of allLinks) {
    link.innerText = "I'm a link BRALEE" // The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
}


const getHtml = document.querySelector("p");

console.log(getHtml)

document.querySelector("h1").innerHTML = "<i>Changed through innerHTML</i>"
document.querySelector("h1").innerHTML += "<sup>BRALEE</sup>"


//////////////////////////// Attributes //////////////////////////// 

document.querySelector("#banner").id = "newId" //removes styles because of new id
document.querySelector("#newId").id = "banner" //get back the styles because we reasigned the id to an old id

console.log(document.querySelector("#banner").src) //accessing an atribute by .src

// Accessing an atribute by a method getAttribute()

const firstLink = document.querySelector("a")

console.log(firstLink.href) // this is going through JavaScript object. You can think of it like a computed value

console.log(firstLink.getAttribute("href")) // this method geting the attribute directly from HTML(taking the text between the quotes)

const getInput = document.querySelector("input[type = 'text']")

getInput.type = "password" // we can set an attribute directly

getInput.setAttribute("type", "text") // and we can set the attribute with setAttribute method

// Setting an atribute by setAttribute()

firstLink.setAttribute("href", "http://www.google.com")