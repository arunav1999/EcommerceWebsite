import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';

const Container = (props) =>{

    
    return(
        <>
           <div className="container">
               <div>
                    <Ccard/>
                    <Ccard/>
                    <Ccard/>
               </div>
            </div> 
        </>
    )
}

export default Container;