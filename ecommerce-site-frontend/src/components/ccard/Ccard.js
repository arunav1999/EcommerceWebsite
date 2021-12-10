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
                        <p>Date: 12th December 2021</p>
                        <p>Order Status: Delivered</p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Ccard;