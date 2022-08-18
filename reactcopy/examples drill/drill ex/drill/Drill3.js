import React from "react";
class Drill3 extends React.Component{
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h3>emp id:{this.props.eid}</h3>
            </div>
        )
    }

}
export default Drill3