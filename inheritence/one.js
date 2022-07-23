class parent{
    assets='1cr'

}
class child extends parent{  
   // assets='2cr'

}
let c1=new parent()
console.log(c1.assets)
let c2=new child()
console.log(c2.assets)
console.log(c2)