import React from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import '../userprofile/styles.css'
import {useAuth} from '../../utils/Auth'

const UserProfile = () =>{
    const userInfo = useAuth();
    if(localStorage.getItem('userToken') === null)
    {
        return (
            <>
                <PageHeading content={"You need to Login first !"}/>
            </>
        )
    }


    return(
        <>
            <PageHeading content={"Profile"}/>
            <div className="profile_container">
                <div className="profile_inner_container">
                    <img src="https://picsum.photos/300/300"></img>
                </div>
            </div>
            <div>
                <PageHeading content={"Name:" + JSON.parse(localStorage.getItem('userInfo')).name}/>
                <PageHeading content={"Email:" + JSON.parse(localStorage.getItem('userInfo')).email}/>
                <PageHeading content={"Contact:" + JSON.parse(localStorage.getItem('userInfo')).contact}/>
                <PageHeading content={"Address:" + JSON.parse(localStorage.getItem('userInfo')).address}/>
            </div>

        </>
    )

}
export default UserProfile;