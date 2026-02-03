import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"

export const authApi = async(student)=>{
    try {
        store.dispatch(showLoader())
         await axios.post('http://localhost:3000/api/v1/student/register', student, {
            headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })
        alert("Student's info taken successfully. Please check your email to activate your account.")
        
    } catch (error) {
        if(error.status === 409){
            alert("User already exists. Please Login.");
            return;
        }
        alert("Registration failed. Please try again." )
           
    }finally{
        store.dispatch(hideLoader())
    }
   
}

export const activateAccountApi = async(token)=>{
     try {
        store.dispatch(showLoader())
         await axios.post('http://localhost:3000/api/v1/student/activation-student', {token }, {
            headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })
        alert("Student's info taken successfully. Please check your email to activate your account.")
        return true;
    } catch (error) {
       
        alert("Registration failed. Please try again." )
         return false ; 
    }finally{
        store.dispatch(hideLoader())
    }
}