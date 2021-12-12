import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';

import PageHeading from '../../components/pageheading/PageHeading';
import {signup} from '../../utils/Auth'

import './styles.css'

const defaultUserInfo = {
    name:'',
    email:'',
    contact:'',
    address:'',
    password:''
}
const validateUserInfo = (userInfo) =>{
    return true
}

const Register = () =>{
    const [userInfo, setUserInfo] = useState(defaultUserInfo)
    const {
        name,
        email,
        contact,
        address,
        password
    } = userInfo
    const history = useHistory()
    const handleChange = (event) =>{
        const localUserInfo = {...userInfo, [event.target.name]: event.target.value}

        setUserInfo(localUserInfo)
    } 

    const handleSubmit = event => {
        event.preventDefault();

        if(validateUserInfo(userInfo))
        {
            signup(userInfo)
                .then((signupSuccess) => {
                    if(signupSuccess)
                    {
                        setUserInfo(defaultUserInfo)
                        toast('Registration successful');
                        window.location.href = '/plp'
                    }
                    else
                    {
                        toast("Registration failed !");
                    }
                })
        }
        else
        {
            toast('Info not valid !')
        }
    };


    return(
        <>
        <PageHeading content={"Register"}/>
        <div className="inp_outer_container_reg">
            <div className="inp_inner_container_reg">
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input name="name" onChange={handleChange} type="text" class="form-control"  placeholder="Enter full name" value={name}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name="email" onChange={handleChange} type="email" class="form-control"  placeholder="Enter email"  value={email}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name="password" onChange={handleChange} type="password" class="form-control"  placeholder="Set a password"  value={password}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contact</label>
                        <input name="contact" onChange={handleChange} type="number" class="form-control" placeholder="Contact"  value={contact}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input name="address" onChange={handleChange} type="text" class="form-control"  placeholder="Address"  value={address}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/login">Already an user? Login</a>
                </form>
            </div>
        </div>
        </>
        
    )
}
export default Register;