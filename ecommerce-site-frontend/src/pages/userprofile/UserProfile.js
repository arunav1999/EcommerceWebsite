import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import '../userprofile/styles.css'

const UserProfile = () =>{

    return(
        <>
            <PageHeading content={"Profile"}/>
            <div className="profile_container">
                <div className="profile_inner_container">
                    <img src="https://picsum.photos/300/300"></img>
                </div>
            </div>
            <div>
                <div>Name: </div>
            </div>
        </>
    )

}
export default UserProfile;