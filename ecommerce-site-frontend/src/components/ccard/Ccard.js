import React from 'react';
import '../container/Container'
import './styles.css'
import {deleteFromCart} from '../../utils/Cart'

const Ccard = ({
    pname,
    price,
    quantity,
    product_id,
    imglink
}) =>{

    return(
        
        <div class="card-outer">
            <div class="card-inner">
                <div>
                    <img src={imglink}></img>
                </div>
                <div>
                    <h5>{pname}</h5>
                    <h6>Total: {price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <button onClick={() => deleteFromCart(product_id)} type="button" class="btn btn-danger">Remove from Cart</button>
                </div>
            </div>
        </div>
    )    
    

}
export default Ccard;