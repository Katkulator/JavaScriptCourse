// fetch("https://swapi.dev/api/people/1/") //fetch sends request to this url and returns a promise which can be resolved or rejected
//     .then(res => {
//         console.log("Resolved", res);
//         return res.json()  //.json also return a promise
//     })
//     .then((data) => {
//         console.log("JSON DONE", data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((res) => {
//         console.log("Second request!")
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Error!", err)
//     })

const loadStarWarsPeople = async () => {
    try{
        let response = await fetch("https://swapi.dev/api/people/1/")
        let data = await response.json()
        console.log(data)
        response = await fetch("https://swapi.dev/api/people/2/")
        data = await response.json()
        console.log(data)
    } 
    catch (err) {
        console.log("Error!", err)
    }

}

loadStarWarsPeople();