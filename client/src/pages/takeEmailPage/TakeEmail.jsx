import React from 'react'

import "./emailCheck.css"

const TakeEmail = () => {
   return (
    <div className='sign-up-container'>
       <div className="sign-up-wrapper">
          
           <form className="sign-up-form email-check-form" >
           
            <div className="form-group">
               
                <input type="email" placeholder='Enter your email' required />
            </div>
           
               
            <button type="submit">Check Email</button>
           
           </form>
       </div>
    </div>
  )
}

export default TakeEmail