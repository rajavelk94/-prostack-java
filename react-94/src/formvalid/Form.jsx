import React from "react";
class Form extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        ename :"",
        eemail:"",
        enumber:""
}

}
updateHandler =(event)=>{
    this.setState({[event.target.name]:event.target.value})

}
submitHandler =(event)=>{
    event.preventDefault()
    console.log(this.state)

}

    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                                <h3>registration details</h3>
                        </div>
                         <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input placeholder="user Name" type="text"className="form-control"onChange={this.updateHandler}name="ename"/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="pls enter email" type="text"className="form-control"onChange={this.updateHandler}name="eemail"/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="mobile" type="number"className="form-control"onChange={this.updateHandler}name="enumber"/>
                                </div>
                                <input type="submit"className="btn-btn-success"value="Registration"/>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        
    }

}
export default Form