
class Employee {
    constructor(emp) {
        this.state = emp
    }
    get_Name() {
        let { name } = this.state
        //let{ id } =this.state
        //return this.state.name
        return name,id
       }
}
let e1 = new Employee({ id: 101, name: "Rahul", sal: 45000 })
console.log(e1)
console.log(e1.get_Name())
