class acount{
minbal=1000
}
class NA extends acount{ minbal=500}
class SA extends acount{ minbal=1500}

let c1=new NA()
console.log(c1.minbal)
let c2=new SA()
console.log(c2.minbal)
let c3=new acount()
console.log(c3.minbal)
console.log(c1)