import React from 'react';
import '../container/Container'
import './styles.css'

const Ccard = (props) =>{

    return(
        <>
            <div class="card-outer">
                <div class="card-inner">
                    <div>
                        <img src="https://picsum.photos/120/120"></img>
                    </div>
                    <div>
                        <h5>Some Product Name</h5>
                        <h6>Total: Rs. 250</h6>
                        <h6>Quantity: 1</h6>
                        <button type="button" class="btn btn-danger">Remove from Cart</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Ccard;