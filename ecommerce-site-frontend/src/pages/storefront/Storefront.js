import { render } from '@testing-library/react';
import React from 'react';
import { Router, Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import PageHeading from '../../components/pageheading/PageHeading'
import Pcontainer from '../../components/pcontainer/Pcontainer'

const Storefront = () => {

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