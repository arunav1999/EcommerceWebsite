import { render } from '@testing-library/react';
import React, { useEffect , useState} from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Pdp from '../../pages/pdp/Pdp'
import Navbar from '../../components/navbar/Navbar'
import PageHeading from '../../components/pageheading/PageHeading'
import Pcontainer from '../../components/pcontainer/Pcontainer'

const Plp = (props) => {

const [products,setProducts] = useState([]);
const [cartState, setCartState] = useState(1);


useEffect(() => {
    console.log('Fetching content')
    fetch('/getProducts')
        .then(response => response.json())
        .then(products => setProducts(products));
}, []);
//console.log(products)
var product_list_size = products.length;

var pcontainers = []
var start = 0
var end = 3
while(end < product_list_size)
{
    pcontainers.push(<Pcontainer products = {products.slice(start,end)} setCartState = {setCartState} cartState = {cartState}/>)
    //console.log(products.slice(start,end))
    start+=3
    end+=3
}


render()
{
    return(
        <>
            <>
            <Navbar user_name={"Arunav Dey"} setCartState = {setCartState} cartState = {cartState}/>
            <PageHeading content={"All Products"}/>
            {pcontainers}
            </>
        </>
    )
}

}
export default Plp;