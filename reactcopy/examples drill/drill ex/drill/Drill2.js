import React from 'react'
import Drill3 from './Drill3'
class Drill2 extends React.Component{
    render(){
        return(
            <div>
                 <h3> drill2 Component</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <Drill3 id={this.props.eid} ename={this.props.name}/>
            </div>
        )

        
    }

}
export default Drill2