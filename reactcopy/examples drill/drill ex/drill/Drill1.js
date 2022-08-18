import React, { Component } from 'react'
import Drill2 from './Drill2'
class Drill1 extends React.Component{
 eid = 101
 ename = 'raja'
render(){
    return(
    
        <div>
            <h3> Drill1 method</h3>
            <Drill2 id={this.eid} name={this.ename}/>
        </div>
        )
    
}
}
export default Drill1