import { render } from '@testing-library/react';
import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import Pcontainer from '../../components/pcontainer/Pcontainer';
import '../../pages/pdp/styles.css'
import Navbar from '../../components/navbar/Navbar'
import Pcard from '../../components/pcard/Pcard';
import {getProductForId} from '../../utils/Product'

const Pdp = (props) =>{

    let params = (new URL(document.location)).searchParams;
    let product_id = params.get('product_id');
    const product = getProductForId(product_id);
    console.info('PRPRPRP ',product)
    render()
    {
        return(
            <>
                <PageHeading content={product.pname}/>
                <div className="outer_container">
                    <div className="inner_container">
                        <Pcard {...product}/>
                    </div>
                </div>
            </>
        )
    }

}
export default Pdp;