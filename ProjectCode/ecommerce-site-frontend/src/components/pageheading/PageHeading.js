import React from 'react';
import '../../components/pageheading/styles.css'

const PageHeading = (props) => {

    return(
        
        <div className="header">
            <div><h1>{props.content}</h1></div>
        </div>
        
    )

}
export default PageHeading;