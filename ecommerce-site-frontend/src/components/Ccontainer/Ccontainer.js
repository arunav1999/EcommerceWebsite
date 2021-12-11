
import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';

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