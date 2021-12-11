import React from 'react';
import Container from '../../components/container/Container';
import PageHeading from '../../components/pageheading/PageHeading';
import CContainer from '../../components/Ccontainer/Ccontainer';

const Cart = (props) =>{
    return(
        <>
            <PageHeading content={"All Cart Items"}/>
            <CContainer/>
            <button type="button" class="btn btn-success">Buy Now</button>
        </>
    )
}
export default Cart;