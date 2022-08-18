import React from 'react'
class Counter1 extends React.Component{
    state ={
        qlt:1
    }
    decrhandler = ()=>{
        this.setState({qlt:this.state.qlt-1})
    }
    incrhandler = ()=>{
        this.setState({qlt:this.state.qlt+1})
    }

    render(){
    return <div>
        <h4>materials</h4>
        <button onClick={this.decrhandler} >-</button>
        <span>qty:{this.state.qlt}</span>
         <button onClick={this.incrhandler}>+</button>        

    </div>
}
}
export default Counter1