import React, { useEffect, useState } from 'react';
import './styles.css'
import Autosuggest from 'react-autosuggest';
import Searchbar from '../searchbar/Searchbar';
import { getCartItems, deleteFromCart, useCartItems} from '../../utils/Cart'; 


const Navbar = (props) => {

const cartItems = useCartItems();

// const updateCartData = () =>{
  
  
 

//   const cart_items = getCartItems();
//   setCartItems(cart_items);
 
  
// }

//   useEffect(() => {
//     updateCartData();
//   },[props.cartState])

    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark cust_nav">
  <a class="navbar-brand" href="#">BuyItNow</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Categories</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.user_name}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Cart</a>
          <a class="dropdown-item" href="#">Orders</a>
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Wishlist</a>
          <a class="dropdown-item" href="#">Signout</a>
          
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cart [{cartItems.length} Items]
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {cartItems.map((item) => {
            return <a class="dropdown-item" href={`/product/${item.product_id}`}>
              {item.pname +" "+ item.quantity +" Price: Rs." +item.price}
                &nbsp;  &nbsp; 
                  <span>
                    <a onClick={() => deleteFromCart(item.product_id)} href="javascript:void(0)">
                      <i className="fa fa-trash"></i>
                    </a>
                  </span></a>
                  
          })}
          
          <button type="button" class="btn btn-success">Checkout</button>
          
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search for a product" aria-label="Search"/> */}
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <Searchbar/>
    </form>
  </div>
</nav>
        </>
    )


}
export default Navbar;