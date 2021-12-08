import { render } from '@testing-library/react';
import React from 'react';
import '../pcard/styles.css'

const PageHeading = (props) => {

render()
{
    return(
        <>
             <div className="header">
                <div><h1>{props.content}</h1></div>
             </div>
        </>
    )
}

}
export default PageHeading;