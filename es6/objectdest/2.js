
let contact = {
    name: {
        first_Name: "Rahul",
        last_Name: "Gandhi"
    },
    id: 101,
    loc: ['Wayanad', 'New Delhi'],
    sal: 45000
}

let { name,id,loc,sal } = contact
console.log(name,id,loc,sal)
let { first_Name } = name
console.log(first_Name)
;