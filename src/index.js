import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nome from './Components/Nome';


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Nome nome="luiz"/>

  </React.StrictMode>,
  document.getElementById('root')
);