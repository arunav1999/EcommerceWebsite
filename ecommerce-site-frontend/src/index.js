import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

ReactDOM.render(
  <React.StrictMode>
      <Navbar user_name={"Arunav Dey"}/>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

