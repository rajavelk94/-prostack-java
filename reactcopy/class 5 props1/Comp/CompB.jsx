import React from "react";
class CompB extends React.Component{
    render(){
        return <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <pre>{this .props.message}</pre>
        <pre>{JSON.stringify(this.props.details)}</pre>
            
        {<h1>{this.props.details.ename}</h1>}
    </div>
    }
}
export default CompB