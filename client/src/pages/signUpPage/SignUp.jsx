import React from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setStudent } from '../../features/signUp/signUpSlice'

const SignUp = () => {
     const student = useSelector((state) => state.signup.student)
     const dispatch = useDispatch();
     console.log("student data from redux store:", student);
  return (
    <div className='sign-up-container'>
       <div className="sign-up-wrapper">
           <h2 className='sign-up-title'>Sign Up</h2>
           <form className="sign-up-form" >
            <div className="form-group">
                <label htmlFor="user-name">
                   Student Name : 
                </label>
                <input type="text"  value={student?.name || ''} placeholder='Enter your name' required onChange={(e) => dispatch(setStudent({field: "name", value: e.target.value}))}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-email">
                   email : 
                </label>
                <input type="email" id='user-email' placeholder='Enter your email' required />
            </div>
            <div className="form-group">
                <label htmlFor="user-password">
                   password : 
                </label>
                <input type="password" id='user-password' placeholder='Enter your password' required />
            </div>
            <div className="form-group">
                <label htmlFor="user-address">
                   address : 
                </label>
                <input type="text" id='user-address' placeholder='Enter your address' required />
            </div>
            <div className="form-group">
                <label htmlFor="user-phone">
                   phone : 
                </label>
                <input type="text" id='user-phone' placeholder='Enter your phone' required />
            </div>
            <div className="form-group">
                <label htmlFor="user-class">
                   class : 
                </label>
                {/* dropdown for class */}
                <select className='dropdown-class' name="" id="user-class">
                    <option value="">Select Class</option>
                    <option value="class1">Ten</option>
                    <option value="class2">Eight</option> 
                    <option value="class3">Class 3</option>
                    <option value="class4">Class 4</option>
                    <option value="class5">Class 5</option>
                </select>
            </div>
           
            <button type="submit">Sign Up</button>
            <p>Already have an account? please <Link to={"/login"}>Login</Link></p>
           </form>
       </div>
    </div>
  )
}

export default SignUp