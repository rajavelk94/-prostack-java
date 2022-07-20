class emp{
first_Name;
set_Name(Name){
    this.first_Name =Name
}
get_Name(){
    return this.first_Name
}
}
let e1=new emp()
e1.set_Name('rajavel')
console.log(e1)
console.log(e1.get_Name())

let e2=new emp()
e2.set_Name('sathish')
console.log(e2)
console.log(e2.get_Name())