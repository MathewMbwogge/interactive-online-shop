import React from "react";

const TotalPrice = ({totalPrice}) => {

    return (
        <div style={{position: "absolute", top: "180px", right: "35px"}}>
            <h2>Total Price: £{totalPrice}</h2>
        </div>
    )
}

export default TotalPrice;