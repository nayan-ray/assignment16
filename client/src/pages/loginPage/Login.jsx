import React from 'react'
import {Link} from 'react-router-dom'
import "./login.css"

const Login = () => {
  return (
    <div className='login-container'>
       <div className="login-wrapper">
           <h2 className='login-title'>Login</h2>
           <form className="login-form" >
           
            <div className="form-group">
                <label htmlFor="user-email">
                   email : 
                </label>
                <input type="text" id='user-email' placeholder='Enter your email' required />
            </div>
            <div className="form-group">
                <label htmlFor="user-password">
                   password : 
                </label>
                <input type="text" id='user-password' placeholder='Enter your password' required />
            </div>
           
            
          
           
            <button type="submit">Log in</button>
            <p>Not registered yet? please <Link to={"/register"}>Sign Up</Link> </p>
           </form>
       </div>
    </div>
  )
}

export default Login