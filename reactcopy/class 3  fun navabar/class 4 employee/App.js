import React from "react";
import Navbar from "./Navbar/Navbar";
import Emp from "./Employee/Emp";
class App extends React.Component{
render(){
    return (
    <div>
        <Navbar/>
        <Emp/>
    </div>)
}
}
export default App