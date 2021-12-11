import React from 'react';
import Pcard from '../pcard/Pcard'
import '../plist/styles.css'

const Plist = ({
    products
}) => {

    return(
        <>
            <div className="product_container">
                {
                    products.map((product) => {
                        return  <Pcard {...product}/>
                    })
                }
            </div>
        </>
    )
}
export default Plist;