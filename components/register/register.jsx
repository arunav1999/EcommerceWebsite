import React from "react";
import { Component } from "react";
import './register.css'

export class Register extends Component{
    constructor(props){
        super(props);
    };


    formData(){
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const password1 = document.getElementById('password1').value;
        if(username!=="" && email!=="" && password!=="" && password1!=="" && password1===password){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'username' : username,
                    'email' : email,
                    'password' : password })
            };
            fetch('/api/register', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data['success']){
                        document.getElementById('message').innerHTML = '';
                        //redirect to login
                        window.location = '/login';
                    }
                    else{
                        document.getElementById('message').innerHTML = data['failed'];
                    }
                });
        }
        else if(username!=="" && email!=="" && password!=="" && password1!=="" && password !== password1){
            document.getElementById('message').innerHTML = 'Both passwords are not same';
        }
        else{
            document.getElementById('message').innerHTML = 'Fill up all the fields';
        }
        
    };

    render(){
        return(<>
            {localStorage.getItem('token')!==null && 
            <div id='loggedin'>
                <h4>You are already logged in</h4>
            </div>}
            {localStorage.getItem('token')===null  && 
            <div className='form'>
                <h2>Register</h2><br/>
                <div className='form-group'>
                    <input type='text' name='username' id='username' placeholder='user-name'/>
                </div><br/>
                <div className='form-group'>
                    <input type='email' name='email' id='email' placeholder='email@xyz.com'/>
                </div><br/>
                <div className='form-group'>
                    <input type='password' name='password' id='password' placeholder='password'/>
                </div><br/>
                <div className='form-group'>
                    <input type='password' name='password1' id='password1' placeholder='re-type password'/>
                </div><br/>
                <div className='form-group'>
                    <button className="btn btn-info" onClick={this.formData}>Register</button>
                    &nbsp;&nbsp;&nbsp;
                    <a href='/login'><button id='sign-in' className="btn btn-warning">Sign-in</button></a>
                </div><br/>
                <div id="message"></div>
            </div>}
        </>
        
        
        );
    };
}

