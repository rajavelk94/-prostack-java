
let a = [10, 20, 30, 40]
let b = [...a]                  //copy a value using ...a
console.log(b)
   


let user = {
    id: 101,
    name: "Rahul",
    email: "Rahul@gmail.com"
}                                           //object merge
let detaisl = {
    email: "rahul@ibm.com",
    sal: 45000
}
let user_Details = { ...user, ...detaisl }
console.log(user_Details)
