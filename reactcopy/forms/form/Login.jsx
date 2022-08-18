import React from "react";
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=()=>{
          this.setState({email:"raja@gmail.com"})
    }
    passwordHandler=()=>{
        this.setState({password:"Raja1234"})

    }
    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h3><>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>Login Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input onClick={this.emailHandler}type="text"required className="form-control"  placeholder="EmailId"/>
                                    </div>
                                    <div className="form-group">
                                        <input onClick={this.passwordHandler}type="password"required className="form-control"placeholder="Password"/>
                                    </div>
                                    <button type="button" class="btn btn-primary">login</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login