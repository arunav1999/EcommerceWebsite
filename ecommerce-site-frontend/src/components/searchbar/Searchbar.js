import { render } from '@testing-library/react';
import React from 'react';
import { Router,Link, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Pcard from '../pcard/Pcard'
import '../searchbar/styles.css'

const Searchbar = () => {

render()
{
    return(
        <>
         <div className="search_bar_container">
             <div>
                <form>
                    <div class="form-group search_bar">
                        <div>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a product here"/>
                        </div>
                        
                        <div>
                            <button type="submit" class="btn btn-primary">Submit</button> 
                        </div>
                    </div>
                </form>          
             </div>
         </div>
        </>
    )
}

}
export default Searchbar;