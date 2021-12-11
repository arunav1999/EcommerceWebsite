import React from 'react';
import '../container/styles.css'
import Ccard from '../ccard/Ccard';
import Ocard from '../ocard/Ocard';

const Container = (props) =>{

    
    return(
        <>
           <div className="container">
               <div>
                    <Ocard/>
                    <Ocard/>
                    <Ocard/>
                    <Ocard/>
                    <Ocard/>
                    <Ocard/>
               </div>
            </div> 
        </>
    )
}

export default Container;