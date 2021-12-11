import React, {useState, useEffect} from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import './styles.css'


const AdminPanel = () =>{

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
                        <label for="exampleInputEmail1">Product Name</label>
                        <input onChange={handleEmailChange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Product Image Link</label>
                        <input onChange={handlePasswordChange} type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter product image link"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Product Price</label>
                        <input onChange={handlePasswordChange} type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter product price"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input onChange={handlePasswordChange} type="textarea" class="form-control" id="exampleInputPassword1" placeholder="Enter product price"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
        </>
        
    )
}
export default AdminPanel;