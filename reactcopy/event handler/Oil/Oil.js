import React from 'react'
class Oil extends React.Component{
    state ={
        name:'usha sun flower oil',
        price:200,
        qlt:1,
        img:'https://namkalam.in/wp-content/uploads/2020/12/Usha-Sunflower-Oil1.jpg'
    }
    decrHandler =()=>{
        this.setState({qlt:this.state.qlt-1})
    }
    incrHandler =()=>{
         this.setState({qlt:this.state.qlt+1})
    }
     
        render(){
        return <div className='container-fluid mt-5'>
        <div className='row'>
            <div className='col-md-10'>
            <table className='table table-hover'>
                <thead className='bg-secondary text-white'>
                    <th>name</th>
                    <th>image</th>
                    <th>qlt</th>
                    <th>price</th>
                    <th>total</th>

                     
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>{this.state.name}</td>
                            <td><img src={this.state.img } height='200px' alt ='oil'/></td>
                            <td><button onClick={this.decrHandler} >-</button>
                                <span>qty:{this.state.qlt}</span>
                                <button onClick={this.incrHandler}>+</button> </td> 
                            <td>{this.state.price}  </td>
                            <td>{this.state.qlt*this.state.price}</td>
                             
                        </tr>
                    </tbody>

            </table>
            </div>    
        </div>
        </div>
    }

}
export default Oil