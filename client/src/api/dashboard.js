import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"
import { setSubjects } from "../features/dashboard/dashboardSlice"
import { removeStudentLocal } from "../helper/auth"
import { replace } from "react-router-dom"


export const dashboardApi = async(setStudent, navigate)=>{
    try {
        store.dispatch(showLoader())
        const response = await axios.get('http://localhost:3000/api/v1/subject/all-subjects', {
             headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })
        
        if(response.status === 200 && response.data.success){
            store.dispatch(setSubjects(response.data.payload))
            
        }
              
    } catch (error) {
        if(error.response?.status === 401){
            setStudent(null);
            removeStudentLocal();
            navigate('/login', {replace : true})
           
        }
     
        console.log(error.message);
        
       
    }finally{
        store.dispatch(hideLoader())
    }
   
}