import { useEffect, useState } from "react";
import {useAuth} from './Auth'

let setCartItems = (cart_items) =>{
    cartItems = cart_items
}
let cartItems = [];

export const useCartItems = () =>{
    const userInfo = useAuth();
    const [_cartItems, _setCartItems] = useState(cartItems)
    cartItems = _cartItems;
    setCartItems = _setCartItems;
    
    useEffect(async () => {
        if(userInfo !== null)
        {
            const {token} = userInfo
            if(token)
            {
                const localCartItems = await getCartItems(token);
                setCartItems(localCartItems);
            }
        }
    },[userInfo])
    
    return Object.values(cartItems);
}

export const getCartItems = async (token) =>{
    const res = await fetch('/api/getCartItemsForUser',
    {
        headers: {
            token,
            'Content-type': 'Application/json'
        }
    })
    const {cart, success} = await res.json();
    if(success)
    {
        return cart;
    }
    return [];
}


export const addToCart = async (token, product_info) =>{
    const finalCartItems = [...cartItems, product_info];
    const itemIds = finalCartItems.map((cartItem) => ({ item_id: cartItem.product_id }))

    console.info('final Cart Items , ItemIds, Token', finalCartItems, itemIds, token)
    const res = await fetch('/api/updateCart',
    {
        method: 'POST',
        headers: {
            token,
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(itemIds)

    })
    const {success} = await res.json();
    if(success)
    {   getCartTotal()
        setCartItems(finalCartItems);
    }
}

export const deleteFromCart = async (token, id) =>{
    const finalCartItems = [...cartItems].filter((cartItem) => {
        return cartItem.product_id !== id
    })
    const itemIds = finalCartItems.map((cartItem) => {
        return {
            item_id: cartItem.product_id
        }
    })
    const res = await fetch('/api/updateCart',
    {
        method: 'POST',
        headers: {
            token,
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(itemIds)

    })
    const {success} = await res.json();
    if(success)
    {   getCartTotal()
        setCartItems(finalCartItems);
    }
    return [];
}


export const getCartTotal = () =>{
    
    fetch('/api/getCartTotalForUser',
    {
        method: 'GET',
        headers: {
            token: localStorage.getItem('userToken'),
            'Content-type': 'Application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => localStorage.setItem('cartTotal',res.total))
    
}

