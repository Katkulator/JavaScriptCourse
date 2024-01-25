fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("Resolved", res)
    })
    .catch(err => {
        console.log("Error!", err)
    })