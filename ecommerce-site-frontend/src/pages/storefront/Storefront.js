import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import { Router, Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import PageHeading from '../../components/pageheading/PageHeading'
import Pcontainer from '../../components/pcontainer/Pcontainer'

const Storefront = (props) => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        console.log('Fetching content')
        fetch('/getProducts')
            .then(response => response.json())
            .then(products => setProducts(products));
    }, []);


    render()
    {
        return (
            <>
                <Navbar user_name={"Arunav"} cart_item_count={3} />
                <PageHeading content={"Latest Arrivals"} />
                <Pcontainer />
                <PageHeading content={"Latest in Electronics"} />
                <Pcontainer />
                <PageHeading content={"Latest in Home Decor"} />
                <Pcontainer />

            </>
        )
    }

}
export default Storefront;