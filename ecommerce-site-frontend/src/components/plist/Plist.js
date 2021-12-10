import React from 'react';
import Pcard from '../pcard/Pcard'
import './styles.css'

const Plist = ({
    products
}) => {

    return(
        <>
            <div className="product_container">
                {
                    products.map(({
                        product_id,
                        price,
                        pname,
                        quanity,
                        description,
                        imglink
                    }) => {
                        return  <Pcard pname={pname} 
                                       description={description} 
                                       imglink = {imglink} 
                                       product_id = {product_id} 
                                       price = {price}
                                />
                    })
                }
            </div>
        </>
    )
}
export default Plist;