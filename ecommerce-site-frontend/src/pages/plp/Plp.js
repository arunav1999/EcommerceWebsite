import { render } from '@testing-library/react';
import React from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Pdp from '../../pages/pdp/Pdp'
import Navbar from '../../components/navbar/Navbar'
import PageHeading from '../../components/pageheading/PageHeading'
import Pcontainer from '../../components/pcontainer/Pcontainer'

const Plp = () => {

render()
{
    return(
        <>
            <>
            <Navbar user_name={"Arunav Dey"}/>
            <PageHeading content={"All Products"}/>
            <Pcontainer/>
            <Pcontainer/>
            <Pcontainer/>
            </>
        </>
    )
}

}
export default Plp;