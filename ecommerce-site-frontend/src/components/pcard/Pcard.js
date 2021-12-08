import { render } from '@testing-library/react';
import React from 'react';
import '../pcard/styles.css'

const Pcard = () => {

render()
{
    return(
        <>
            <div class="card">
                <img class="card-img-top" src="https://picsum.photos/100/100?random=1" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
                    <p class="card-text">Basic description about the product</p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    
                </div>
            </div>
        </>
    )
}

}
export default Pcard;