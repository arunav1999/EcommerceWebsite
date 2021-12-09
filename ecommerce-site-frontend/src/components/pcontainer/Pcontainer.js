import { render } from '@testing-library/react';
import React from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Pcard from '../pcard/Pcard'
import '../pcontainer/styles.css'

const Pcontainer = (props) => {

render()
{
    return(
        <>
            <div className="product_container">
                <div className="product_row">
                    <Pcard/>
                    <Pcard/>
                    <Pcard/>
                </div>
            
            </div>
        </>
    )
}

}
export default Pcontainer;