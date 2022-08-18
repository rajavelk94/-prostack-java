import React from "react";
function Shirt (props){
    return (
        <div>
            <h1>Shirt Brand{props.button_Ama}</h1>
            <pre>{JSON.stringify(props)}</pre>
            
            
            <hr />
        </div>
    )
}
export default Shirt


