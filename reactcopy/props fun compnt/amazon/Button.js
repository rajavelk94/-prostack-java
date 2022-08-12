import React from 'react';
import Cloth from './Cloth';
function Button(){
    let button=5
    let but_brand="provogue";

    return(
        <div>
        <h1>Button function</h1>
        <hr/>
        <Cloth button_Ama = {button}
               but_brand = {but_brand} />
        </div>)
    }
export default Button;