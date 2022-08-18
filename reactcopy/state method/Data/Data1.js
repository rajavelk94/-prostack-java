
import React from 'react'
class Data1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {                                // this method used
        message: "Hello"
    }
    changeMessageHandler = () => {
        this.setState({ message: "Hi,Mr Rahul Gandhi, GM" })
    }
    render() {
        console.log("second time - render and after updating state ")///not
        return <div>
            <h1>Wish Messaage:{this.state.message}</h1>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Data1
