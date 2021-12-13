import React from 'react';
import '../container/Container'
import './styles.css'
import {deleteFromCart} from '../../utils/Cart'
import {useAuth} from '../../utils/Auth'

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
                <div className="img_container">
                    <img src={imglink} height="130" width="130"></img>
                </div>
                <div>
                    <h5>{pname}</h5>
                    <h6>Total: Rs. {price}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <button onClick={() => deleteFromCart(localStorage.getItem('userToken') ,product_id)} type="button" class="btn btn-danger">Remove from Cart</button>
                </div>
            </div>
        </div>
    )    
    

}
export default Ccard;