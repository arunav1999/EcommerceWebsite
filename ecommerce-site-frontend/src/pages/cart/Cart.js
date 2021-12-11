import React from 'react';
import Container from '../../components/container/Container';
import PageHeading from '../../components/pageheading/PageHeading';
import CContainer from '../../components/Ccontainer/Ccontainer';
import {useCartItems} from '../../utils/Cart'

const Cart = (props) =>{
    const cartItems = useCartItems();

    return(
        <React.Fragment>
            <PageHeading content={"All Cart Items"}/>
            <CContainer cartItems={cartItems}/>
            <button type="button" class="btn btn-success">Buy Now</button>
        </React.Fragment>
    )
}
export default Cart;