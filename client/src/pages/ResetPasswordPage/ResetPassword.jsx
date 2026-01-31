import React from 'react'
import "./resetPassword.css"

const ResetPassword = () => {
  return (
    <div className='sign-up-container'>
       <div className="sign-up-wrapper">
          
           <form className="sign-up-form password-reset-form" >
           
             <div className="form-group">
                
                <input type="password"  placeholder='Enter new password' required />
            </div>
           
           <div className="form-group">
               
                <input type="password"  placeholder='Confirm password' required />
            </div>
               
            <button type="submit">Reset password</button>
           
           </form>
       </div>
    </div>
  )
}

export default ResetPassword