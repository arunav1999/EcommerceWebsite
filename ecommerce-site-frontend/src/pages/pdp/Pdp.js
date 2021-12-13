import { render } from '@testing-library/react';
import React, {useState ,useEffect} from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import Pcontainer from '../../components/pcontainer/Pcontainer';
import '../../pages/pdp/styles.css'
import Navbar from '../../components/navbar/Navbar'
import Pcard from '../../components/pcard/Pcard';
//import {getProductForId} from '../../utils/Product'

const getProductForId = (product_id) =>{
    var receivedProduct = {}
    fetch('/api/getproductById/'+product_id)
            .then((res) => res.json())
            .then((res) => console.log(res))
    return receivedProduct;
}

const Pdp = (props) =>{

    const [pInfo, setPInfo] = useState([])
    let params = (new URL(document.location)).searchParams;
    let product_id = params.get('product_id');
    
    useEffect(() => {
        fetch('/api/getproductById/'+product_id)
            .then((res) => res.json())
            .then((res) => setPInfo(res))
    }, [])

    render()
    {   console.info('PINFO',pInfo[0])
        return(
            <>
                <PageHeading content={"Product Info:"}/>
                <div className="outer_container">
                    <div className="inner_container">
                        <Pcard {...pInfo[0]}/>
                    </div>
                </div>
            </>
        )
    }

}
export default Pdp;