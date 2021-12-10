import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import { Router, Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import PageHeading from '../../components/pageheading/PageHeading'
import Pcontainer from '../../components/pcontainer/Pcontainer'
import Plist from '../../components/plist/Plist';

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
                
                <PageHeading content={"Latest Arrivals"} />
                <Plist/>
                <PageHeading content={"Latest in Electronics"} />
                <Plist/>
                <PageHeading content={"Latest in Home Decor"} />
                <Plist/>

            </>
        )
    }

}
export default Storefront;