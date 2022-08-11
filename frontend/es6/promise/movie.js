
let gotomovie = (success, failure) => {
    let amount = 1000
    amount > 500 ? success("Go and Enjoy") : failure("Go to PSA")
}
gotomovie((msg) => { console.log(msg) }, (err) => { console.log(err) })
