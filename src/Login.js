import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
      <div className='login__logo'>
      <Link to '/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>
      </div>
    )
}

export default Login