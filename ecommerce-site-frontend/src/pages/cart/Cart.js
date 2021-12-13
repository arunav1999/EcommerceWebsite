import React from 'react';
import Container from '../../components/container/Container';
import PageHeading from '../../components/pageheading/PageHeading';
import CContainer from '../../components/Ccontainer/Ccontainer';
import {getCartTotal, useCartItems} from '../../utils/Cart'
import '../../pages/cart/styles.css'
import {addToOrder} from '../../utils/Orders'
import {useAuth} from '../../utils/Auth'




const Cart = (props) =>{
    const cartItems = useCartItems();
    const userInfo = useAuth();
    if(localStorage.getItem('userToken') === null)
    {
        return (
            <>
                <PageHeading content={"You need to Login first !"}/>
            </>
        )
    }
    return(
        <React.Fragment>
            <PageHeading content={"All Cart Items"}/>
            <PageHeading content={"Total Cost: Rs." + localStorage.getItem('cartTotal')}/>
            <div className="cart_page_container">
                <CContainer cartItems={cartItems}/>
                {
                    userInfo !== null &&
                <div className="btn_container">
                
                    <div>
                        <button onClick={() => {
                            addToOrder(userInfo.token, cartItems.map(({
                                product_id
                            }) => product_id))
                        }} type="button" class="btn btn-success b">Buy Now</button>
                    </div>
                </div>
                }               
            </div>
        </React.Fragment>
    )
}
export default Cart;