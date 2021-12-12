import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({
    userInfo,
    children,
    ...rest
}) =>{
    console.info('User info in Private route', userInfo)
    return(
        <Route
      {...rest}
      render={({ location }) =>
        userInfo !== null && userInfo.role === 'admin' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}
export default PrivateRoute;