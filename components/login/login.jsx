import React from "react";
import { Component } from "react";
import './login.css'

export class Login extends Component{
    constructor(props){
        super(props);
    };


    formData(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
        if(email!=="" && password!==""){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'email' : email,
                    'password' : password })
            };
            fetch('/api/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data['success']){
                        localStorage.setItem('token',data['token']);
                        document.getElementById('message').innerHTML = '';
                        // redirect to homepage 
                        window.location = '/';
                    }
                    else{
                        document.getElementById('message').innerHTML = data['failed'];
                    }
                });
        }
        else{
            document.getElementById('message').innerHTML = 'Fill up all the fields';
        }
    };

    render(){
        return(<div>
            {localStorage.getItem('token')!==null && 
            <div id='loggedin'>
            <h4>You are already logged in</h4>
                </div>}
            {localStorage.getItem('token')===null && 
            <div className='form'>
            <h2>Login</h2><br/>
            <div className='form-group'>
                <input type='email' name='email' id='email' placeholder='email@xyz.com'/>
            </div><br/>
            <div className='form-group'>
                <input type='password' name='password' id='password' placeholder='password'/>
            </div><br/>
            <div className='form-group'>
                <button id='sign-in' className="btn btn-info" onClick={this.formData}>Login</button>
                &nbsp;&nbsp;&nbsp;
                <a href='/register'><button id='sign-up' className="btn btn-warning">Sign-up</button></a>
            </div><br/>
            <div id="message"></div>
        </div>}
        </div>
        );
    };
}

