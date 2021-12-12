import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';
import Ocard from '../ocard/Ocard';

const Container = ({
    orderItems
}) =>{

    
    return(
        <>
           <div className="container">
               <div>
               {
                    orderItems.map((orderItem) => {
                        return <Ocard {...orderItem} />
                    })
                   }
               </div>
            </div> 
        </>
    )
}

export default Container;