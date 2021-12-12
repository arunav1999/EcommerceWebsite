import React, {useState, useEffect} from 'react';
import PageHeading from '../../components/pageheading/PageHeading';
import './styles.css'
import {addProducts} from '../../utils/Product'
import { logout } from '../../utils/Auth';

const AdminPanel = () =>{

    const [pname, setPname] = useState('');
    const [imglink, setImgLink] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    const handleProductName = event => {
        setPname(event.target.value)
    };
    const handleImageLink = event => {
        setImgLink(event.target.value)
    };
    const handlePrice = event => {
        setPrice(event.target.value)
    };
    const handleDescription = event => {
        setDescription(event.target.value)
    };
    const handleSubmit = event => {
        event.preventDefault();
        addProducts(pname,price,imglink,description,localStorage.getItem('userToken'))
    };


    return(
        <>
        <PageHeading content={"Admin Panel: Add a Product"}/>
        <div className="inp_outer_container">
            <div className="inp_inner_container">
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Product Name</label>
                        <input onChange={handleProductName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Product Image Link</label>
                        <input onChange={handleImageLink} type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter product image link"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Product Price</label>
                        <input onChange={handlePrice} type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter product price"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input onChange={handleDescription} type="textarea" class="form-control" id="exampleInputPassword1" placeholder="Enter product price"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add Product</button>
                </form>
                
            </div>
            
        </div>
        <button onClick = {logout}>Logout</button>
        </>
        
    )
}
export default AdminPanel;