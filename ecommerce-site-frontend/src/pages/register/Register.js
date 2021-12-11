import React, {useState, useEffect} from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import './styles.css'


const Register = () =>{

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
        <PageHeading content={"Register"}/>
        <div className="inp_outer_container_reg">
            <div className="inp_inner_container_reg">
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Set a password"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handlePasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password again"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contact</label>
                        <input onChange={handlePasswordChange} type="number" class="form-control" id="exampleInputPassword1" placeholder="Contact"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input onChange={handlePasswordChange} type="number" class="form-control" id="exampleInputPassword1" placeholder="Address"/>
                    </div>
                    <div class="form-check">
                        <input onChange={handleIsAdminChange} type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I will be an Admin</label>
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