import React from "react";
import Shirt from './Shirt';
function Cloth(props){
    return(
        <div>
        <h1>Cloth Function</h1>
        <hr/>
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <Shirt button_Ama1={props.button_Ama}
               but_brand1={props.but_brand}/>
        </div>)
    }
export default Cloth;