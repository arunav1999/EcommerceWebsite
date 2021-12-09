import { render } from '@testing-library/react';
import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import Pcontainer from '../../components/pcontainer/Pcontainer';
import '../../pages/pdp/styles.css'
import Navbar from '../../components/navbar/Navbar'

const Pdp = (props) =>{

    render()
    {
        return(
            <>
            <Navbar user_name={"Arunav Dey"}/>
            <PageHeading content={"All Products"}/>
            <Pcontainer/>
            <Pcontainer/>
            <Pcontainer/>
            </>
        )
    }

}
export default Pdp;