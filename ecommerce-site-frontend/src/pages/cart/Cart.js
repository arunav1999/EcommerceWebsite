import React from 'react';
import Container from '../../components/container/Container';
import PageHeading from '../../components/pageheading/PageHeading';
import CContainer from '../../components/Ccontainer/Ccontainer';
import {useCartItems} from '../../utils/Cart'
import '../../pages/cart/styles.css'
import {addToOrder} from '../../utils/Orders'

const Cart = (props) =>{
    const cartItems = useCartItems();
    

    return(
        <React.Fragment>
            <PageHeading content={"All Cart Items"}/>
            <PageHeading content={"Total Cost: Rs.45647356"}/>
            <div className="cart_page_container">
                <CContainer cartItems={cartItems}/>
                <div className="btn_container">
                
                    <div>
                        <button type="button" class="btn btn-success b">Buy Now</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Cart;