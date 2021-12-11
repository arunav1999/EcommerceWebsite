import React, {useState, useEffect} from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import './styles.css'


const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    
    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };
    const handleIsAdminChange = event => {
        setIsAdmin(event.target.checked)
    };

    const handleSubmit = event => {
        event.preventDefault();
        //Code
        
    };


    return(
        <>
        <PageHeading content={"Login"}/>
        <div className="inp_outer_container">
            <div className="inp_inner_container">
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input onChange={handleIsAdminChange} type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I am an Admin</label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Login</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/register">Not an user? Register</a>
                </form>
            </div>
        </div>
        </>
        
    )
}
export default Login;