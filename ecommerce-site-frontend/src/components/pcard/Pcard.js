import React, { useEffect, useState } from 'react';
import '../pcard/styles.css'
import { addToCart } from '../../utils/Cart';


const Pcard = (props) => {
//{"/addItemToCart?id="+props.product_id+"&uid=xyz"}
const [autoGenId,incrementId] = useState(0);

const addDataToCart = () =>{
    props.setCartState(props.cartState+1);
    const productInfo = {
        cart_item_id:autoGenId,
        product_id: props.product_id,
        price:300,
        pname:props.name,
        quanity:3
    }
    incrementId(autoGenId+1)
    
    addToCart(productInfo);
}


    return(
        <>
            <div class="card">
                <img class="card-img-top" src={props.imglink} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <h4>Price: Rs. {props.price} /-</h4>
                    <a onClick={addDataToCart} href="javascript:void(0)" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </>
    )


}
export default Pcard;