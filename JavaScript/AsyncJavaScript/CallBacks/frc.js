////////////////////////////// CALLBACK HELL //////////////////////////////

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout( () => {
        if (delay > 4000) {
            failure("Connection timeout!")
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


// fakeRequestCallback ("books.com",
//     function (response) {
//         console.log("IT WORKED!")
//         console.log(response)
//         fakeRequestCallback("books.com/page2",
//             function (response) {
//                 console.log("IT WORKED AGAIN!")
//                 console.log(response)
//                 fakeRequestCallback("books.com/page3",
//                     function (response){
//                         console.log("IT WORKED X3")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR ON PAGE 3", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR ON PAGE 2", err)
//             })
//     }, function (err) {
//         console.log("ERROR", err)
// })
 
////////////////////////////// PROMISES //////////////////////////////

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) =>{
        const delay = Math.floor(Math.random() * (4500) + 500);
        setTimeout(() => {
            if (delay > 4000) {
                reject ("Connecion timeout!")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const request = fakeRequestPromise("yelp.com/api/coffe/page1")

// request
//     .then(() => {
//         console.log("IT WORKED")
// })
//     .catch( (err) => {
//         console.log("ERROR", err)
// })

fakeRequestPromise("yelp.com/api/coffe/page1")
    .then(() => {
        console.log("PROMISE RESOLVED")
        console.log("IT WORKED")
        fakeRequestPromise("yelp.com/api/coffe/page2")
            .then(() => {
                console.log("PROMISE RESOLVED ON PAGE 2")
                console.log("IT WORKED")
                fakeRequestPromise("yelp.com/api/coffe/page3")
                .then( () => {
                    console.log("PROMISE RESOLVED ON PAGE 3")
                    console.log("IT WORKED")
                })
                .catch((err) => {
                    console.log("PROMISE RESOLVED PAGE 3")
                    console.log("ERROR", err)
                })
            })
            .catch((err) => {
                console.log("PROMISE RESOLVED PAGE 2")
                console.log("ERROR", err)
            })
})
    .catch( (err) => {
        console.log("PROMISE RESOLVED")
        console.log("ERROR", err)
})