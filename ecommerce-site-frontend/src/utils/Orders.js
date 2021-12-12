import { useEffect, useState } from "react";
import {useAuth} from './Auth'
import {toast} from 'react-toastify'
let setOrderItems = (order_items) =>{
    orderItems = order_items
}
let orderItems = [];

// export const useOrderItems = () =>{
//     const userInfo = useAuth();
//     const [_orderItems, _setOrderItems] = useState(orderItems)
//     orderItems = _orderItems;
//     setOrderItems = _setOrderItems;
    
//     useEffect(async () => {
//         if(userInfo !== null)
//         {
//             const {token} = userInfo
//             if(token)
//             {
//                 const localOrderItems = await getOrderItems(token);
//                 setOrderItems(localOrderItems);
//             }
//         }
//     },[userInfo])
    
//     return Object.values(orderItems);
// }

export const getOrderItems = async (token) =>{
    const res = await fetch('/api/getOrdersForUser',
    {
        headers: {
            token,
            'Content-type': 'Application/json'
        }
    })
    const {order, success} = await res.json();
    if(success)
    {
        return order;
    }
    return [];
}


export const addToOrder = async (token, ids) =>{
    const preparedData = ids.map((id) => {
        return {
            item_id:id,
            date: Date.now()
        }
    })
    const res = await fetch('/api/placeOrder',
    {
        method: 'POST',
        headers: {
            token,
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(preparedData)

    })
    const {success} = await res.json();
    if(success)
    {
        toast('Order Successfully Placed !')
        //setOrderItems(finalOrderItems);
    }
}

