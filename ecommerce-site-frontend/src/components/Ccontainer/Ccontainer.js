
import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';
import { useAuth } from '../../utils/Auth';
import { addToOrder } from '../../utils/Orders'
import PageHeading from '../pageheading/PageHeading';

// const userInfo = null;
// const finalOrders = []
//     const handleClick = (cartItems) =>{
//         cartItems.map((cartItem) => {
//             finalOrders.push({'item_id':cartItem.product_id, 'date':new Date().toISOString().split("T")[0]})
//         });
//         addToOrder(userInfo, finalOrders)
//     }

const CContainer = ({
    cartItems
}) =>{
    return(
        <>
           <div className="container">
               <div>
                   {
                    cartItems.map((cartItem) => {
                        return <Ccard {...cartItem} />
                    })
                   }
               </div>
            </div> 
        </>
    )
}

export default CContainer;