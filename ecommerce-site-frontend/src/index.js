import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Plp from './pages/plp/Plp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Storefront from './pages/storefront/Storefront';
import Orders from './pages/orders/Orders';
import Cart from './pages/cart/Cart'
import Pdp from './pages/pdp/Pdp';

ReactDOM.render(
  <React.Fragment>
      <Navbar user_name={"Arunav Dey"}/>
      <div>
        <Router>
          <Switch>
            <Route path='/storefront'>
              <Storefront/>
            </Route>
            <Route path='/orders'>
              <Orders/>
            </Route>
            <Route path='/plp'>
              <Plp/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/pdp'>
              <Pdp/>
            </Route>
          </Switch>
        </Router>
        </div>
  </React.Fragment>,
  document.getElementById('root')
);

//TODO: Check DB for existing cart items on login.

