import { render } from '@testing-library/react';
import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import Pcontainer from '../../components/pcontainer/Pcontainer';
import '../../pages/pdp/styles.css'
import Navbar from '../../components/navbar/Navbar'
import Pcard from '../../components/pcard/Pcard';

const Pdp = (props) =>{

    render()
    {
        return(
            <>
                <PageHeading content={"Some Product Name"}/>
                <div className="outer_container">
                    <div className="inner_container">
                        <Pcard/>
                    </div>
                </div>
            </>
        )
    }

}
export default Pdp;