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
                <PageHeading content={"Name: Arunav Dey "}/>
                <PageHeading content={"Email: arunav.dey.7@gmail.com"}/>
                <PageHeading content={"Contact: 9870794470"}/>
                <PageHeading content={"Address: 240 Gyani Colony, Linepar, Moradabad, 244001"}/>
            </div>

        </>
    )

}
export default UserProfile;