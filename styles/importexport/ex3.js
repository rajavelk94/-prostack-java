
let min_Bal = 1000
let get_Details = () => {
    console.log("create account")
}
class Account {
    constructor() {
        console.log("Constructor execute Automatically")
    }
}
module.exports = { min_Bal, Account, get_Details }  //ES5
//export { min_Bal, Account, get_Details }   //ES6
