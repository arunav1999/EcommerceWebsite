import { render } from '@testing-library/react';
import React from 'react';
import './styles.css'
import Autosuggest from 'react-autosuggest';
import Searchbar from '../searchbar/Searchbar';


const Navbar = (props) => {



render()
{
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
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cart [{props.cart_item_count} Items]
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Product 1 Title (x1)&nbsp;  &nbsp; <span><a href="/remove"><i className="fa fa-trash"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-plus"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-minus"></i></a></span></a>
          <a class="dropdown-item" href="#">Product 2 Title (x1)&nbsp;  &nbsp; <span><a href="/remove"><i className="fa fa-trash"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-plus"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-minus"></i></a></span></a>
          <a class="dropdown-item" href="#">Product 3 Title (x1)&nbsp;  &nbsp; <span><a href="/remove"><i className="fa fa-trash"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-plus"></i></a></span>&nbsp;&nbsp;<span><a href="/remove"><i className="fa fa-minus"></i></a></span></a>
          
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

}
export default Navbar;