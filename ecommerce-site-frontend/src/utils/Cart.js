import { useEffect, useState } from "react";

let setCartItems;
let cartItems;

export const useCartItems = () =>{
    const [_cartItems, _setCartItems] = useState({})
    cartItems = _cartItems;
    setCartItems = _setCartItems;
    
    useEffect(() => {
        const localCartItems = getCartItems();
        setCartItems(localCartItems);
    },[])
    
    return Object.values(cartItems);
}

export const getCartItems = () =>{
    const localCartItems = JSON.parse(localStorage.getItem("cartData")) || {};
    
    return localCartItems;
}


export const addToCart = (productInfo) =>{
    const localCartItems = {...cartItems}

    localCartItems[productInfo.product_id] = productInfo;
    
    localStorage.setItem("cartData", JSON.stringify(localCartItems));
    setCartItems(localCartItems);
}

export const deleteFromCart = (id) =>{

    const localCartItems = {...cartItems}

    delete localCartItems[id]
    
    localStorage.setItem("cartData", JSON.stringify(localCartItems));
    setCartItems(localCartItems);
}

