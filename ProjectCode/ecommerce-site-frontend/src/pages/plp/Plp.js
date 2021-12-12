import React, { useEffect , useState} from 'react';
import PageHeading from '../../components/pageheading/PageHeading'
import Plist from '../../components/plist/Plist';
import { getProducts } from '../../utils/Product';

const Plp = (props) => {

const [products,setProducts] = useState([]);

useEffect(() => {
        getProducts()
            .then((_products) => {
                setProducts(_products)
            })
}, []);

    return(
        <>
            <PageHeading content={"All Products"}/>
            <Plist products={products}/>
        </>
    )

}
export default Plp;