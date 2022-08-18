
import React from 'react'
class Data3 extends React.Component {
    constructor(props) {
        super(props);
    }
    message = "Hello"
    changeMessageHandler = () => {
        console.log(this.message)                           // this method not used
        this.message = "Hello,Rahul Gandhi"
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.message}</h3>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Data3
