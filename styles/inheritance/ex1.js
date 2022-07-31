
class Account {
    constructor(id, name, email) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
    }
    get_Account_Details() {
        return this.acc_Id  + ':'+ this.acc_Name + ':'+ this.acc_Email
    }
    get_Address() {
        return "new Address"
    }
}

class Savings_Account extends Account {
    constructor(id, name, email, amount) {
        super(id, name, email);
        this.acc_Amount = amount
    }
    get_Account_Bal() {
        return this.acc_Amount
    }
}
let sa1 = new Savings_Account(100, "Raja", "raja@gmail.com", 30000)

console.log(sa1.get_Account_Details())
console.log(sa1.get_Address())
console.log(sa1.get_Account_Bal())
//class Current_Account extends Account { }
