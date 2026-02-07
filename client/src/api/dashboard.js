import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"
import { setSubjects } from "../features/dashboard/dashboardSlice"


export const dashboardApi = async(student)=>{
    try {
        store.dispatch(showLoader())
        const response = await axios.post('http://localhost:3000/api/v1/subject/all-subjects', {
            withCredentials : true
        })
       console.log(response);
       
        
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