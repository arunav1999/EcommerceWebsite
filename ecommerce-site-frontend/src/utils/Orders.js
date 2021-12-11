import { useEffect, useState } from "react";

let setOrders;
let Orders;

export const useOrders = () =>{
    const [_Orders, _setOrders] = useState({})
    Orders = _Orders;
    setOrders = _setOrders;
    
    useEffect(() => {
        const localOrders = getOrders();
        setOrders(localOrders);
    },[])
    
    return Object.values(Orders);
}

export const getOrders = () =>{
    return fetch('/getOrderForUser')
            .then((res) => res.json())
            .catch((err) => {
                console.log('Error fetching the products',err)
                return [];
            })
    
    const localOrders = JSON.parse(localStorage.getItem("cartData")) || {};
    
    return localOrders;
}


export const addToCart = (productInfo) =>{
    const localOrders = {...Orders}

    localOrders[productInfo.product_id] = productInfo;
    
    localStorage.setItem("cartData", JSON.stringify(localOrders));
    setOrders(localOrders);
}

export const deleteFromCart = (id) =>{

    const localOrders = {...Orders}

    delete localOrders[id]
    
    localStorage.setItem("cartData", JSON.stringify(localOrders));
    setOrders(localOrders);
}

