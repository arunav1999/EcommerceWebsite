import { render } from '@testing-library/react';
import React from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Pcard from '../pcard/Pcard'
import '../pcontainer/styles.css'

const Pcontainer = (props) => {
render()
{
    return(
        <>
            <div className="product_container">
                <div className="product_row">
                    <Pcard name={props.products[0].pname} description={props.products[0].description} imglink = {props.products[0].imglink} product_id = {props.products[0].id} setCartState = {props.setCartState} cartState = {props.cartState} price = {props.products[0].price}/>
                    <Pcard name={props.products[1].pname} description={props.products[1].description} imglink = {props.products[1].imglink} product_id = {props.products[1].id} setCartState = {props.setCartState} cartState = {props.cartState} price = {props.products[1].price}/>
                    <Pcard name={props.products[2].pname} description={props.products[2].description} imglink = {props.products[2].imglink} product_id = {props.products[2].id} setCartState = {props.setCartState} cartState = {props.cartState} price = {props.products[2].price}/>  
                </div>
            
            </div>
        </>
    )
}

}
export default Pcontainer;