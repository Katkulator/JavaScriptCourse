const login = async (username, password) => {
    if(!username || !password) throw "Missing credentials"
    if(password === "password") return "Welcome!"
    throw "Invalid Password"
}

login("matko", "password")
    .then(msg => {
        console.log("Logged In!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })