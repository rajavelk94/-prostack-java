import React from "react";
class Emp extends React.Component{
    
        emp = {
            eid :100,
            ename:"raja",
            esal:30000,
            eloc:['salem',    'namakkal'],
            status:"single",
            eimg:"https://www.careerindia.com/img/600x40/2020/10/abdulkalamquotesonwork-1602703503.jpg"
        }
        render(){
        return <div className="continer mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card-header">
                        <img src={this.emp.eimg} height='300px'alt="raja"/>
                        <div className="card-body">
                            <ul className="list-group">
                                <ol className="list-group-item">id:{this.emp.eid}</ol>
                                <ol className="list-group-item">Name:{this.emp.ename}</ol>
                                <ol className="list-group-item">salary:{this.emp.esal}</ol>
                                <ol className="list-group-item">status:{this.emp.status}</ol>
                                <ol className="list-group-item">location:{this.emp.eloc}</ol>

                            
                             </ul>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    }

}
export default Emp