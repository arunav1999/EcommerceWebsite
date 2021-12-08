import { render } from '@testing-library/react';
import React from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Pcontainer from '../pcontainer/Pcontainer'
import '../main/styles.css'
import PageHeading from '../pageheading/PageHeading'
import Searchbar from '../searchbar/Searchbar';

const Main = () => {

render()
{
    return(
        <>
            <Navbar/>
            <PageHeading content={"Latest Arrivals"}/>
            <Pcontainer/>
            <PageHeading content={"Latest in Electronics"}/>
            <Pcontainer/>
            <PageHeading content={"Latest in Home Decor"}/>
            <Pcontainer/>
            
        </>
    )
}

}
export default Main;