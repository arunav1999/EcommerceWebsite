import React from 'react';
import '../container/Container'
import './styles.css'

const Ocard = ({
    date,
    description,
    name,
    imglink,
    price
}) =>{

    return(
        <>
            <div class="card-outer">
                <div class="card-inner">
                    <div>
                        <img src={imglink} height="120" width="120"></img>
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <h6>Total: Rs. {price}</h6>
                        <p>Date: {date}</p>
                        <p>Order Status: Delivered</p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Ocard;