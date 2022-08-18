import React from 'react'
class Oilboot extends React.Component{
    constructor(props){
        super(props)
    this.state ={
        name:'usha sun flower oil',
        price:200,
        qlt:1,
        img:'https://namkalam.in/wp-content/uploads/2020/12/Usha-Sunflower-Oil1.jpg'
    }
    }
    decrHandler =()=>{
        this.setState({qlt:this.state.qlt-1})
    }
    incrHandler =()=>{
         this.setState({qlt:this.state.qlt+1})
    }
     
        render(){
        return <div className='continer mt-5'>
        <div className='row'>
        <div className='column-md-12'>
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
                            <td><img src={this.state.img } width="80px" alt ='oil'/></td>
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
export default Oilboot