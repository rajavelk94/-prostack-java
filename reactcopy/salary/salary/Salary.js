
import React from 'react'
class Salary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 30000
        }
    }
    hikeHandler = (hike) => {
        this.setState({
            salary: hike
        })
    }
    render() {
        return <div>
            <h1>Salary Component </h1>
            <h2>Employee Salary: {this.state.salary}</h2>
            <button onClick={this.hikeHandler.bind(this, 50000)}>Hike 200 %</button><>&nbsp;</>
            <button onClick={this.hikeHandler.bind(this, 40000)}>Hike 100 %</button><>&nbsp;</>
            <button onClick={this.hikeHandler.bind(this, 35000)}>Hike 50 %</button><>&nbsp;</>
            <button onClick={this.hikeHandler.bind(this, 30000)}>Hike 0 %</button>
        </div>
    }
}
export default Salary
