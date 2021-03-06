import React, { useEffect, useState } from 'react';
import '../pcard/styles.css'
import { addToCart } from '../../utils/Cart';
import { useAuth } from '../../utils/Auth'; 
import { toast } from 'react-toastify';

const Pcard = ({
    product_id,
    price,
    pname,
    description,
    imglink
}) => {
const userInfo = useAuth()
const addDataToCart = () =>{
    if(userInfo === null)
    {
        window.location.href = '/login'
        toast("Kindly login first")
        toast("Kindly login first")
    }
    const productInfo = {
        product_id,
        price,
        pname,
        quantity: 1,
        imglink
    }
    
    addToCart(userInfo.token, productInfo);
}


    return(
        <>
            <div class="card">
                <img class="card-img-top" src={imglink} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title"><a href={"/pdp?product_id="+ product_id}>{pname}</a></h5>
                    <p class="card-text">{description}</p>
                    <h4>Price: Rs. {price} /-</h4>
                    <a onClick={addDataToCart} href="javascript:void(0)" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </>
    )


}
export default Pcard;