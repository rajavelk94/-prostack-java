import React from "react";
class Msg extends React.Component{
    ename= 'rajavel'
    esal= 30000
    eimg= "https://www.freecodecamp.org/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    render(){
    return <div>
        <h3>employee name:{this.ename}</h3>
        <h3>employee salary:{this.esal}</h3>
        <img src={this.eimg} alt='react' height="250px"/>
        <button class= 'btn btn-success'>confirm</button>
    </div>
}
}
export default Msg