import { render } from '@testing-library/react';
import React, { useEffect,useState } from 'react';
import Navbar from '../navbar/Navbar';
import Pcontainer from '../pcontainer/Pcontainer'
import PageHeading from '../pageheading/PageHeading'
import Searchbar from '../searchbar/Searchbar'
import Storefront from '../../pages/storefront/Storefront';
import Pdp from '../../pages/pdp/Pdp'
import Plp from '../../pages/plp/Plp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = () => {


const [cart_item_count,updateCartItemCount] = useState(0);

render()
{
    return(
        <>
           <Plp/>
        </>
    )
}

}
export default Main;