import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"
import { setSubjects } from "../features/dashboard/dashboardSlice"


export const dashboardApi = async()=>{
    try {
        store.dispatch(showLoader())
        const response = await axios.get('http://localhost:3000/api/v1/subject/all-subjects', {
             headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })
        console.log(response);
        if(response.status === 200 && response.data.success){
            store.dispatch(setSubjects(response.data.payload))
        }
       
        
    } catch (error) {
        if(error.status === 401){
            alert("Please login first.");
            return;
        }
     
       alert("Something went wrong while fetching subjects.")      
    }finally{
        store.dispatch(hideLoader())
    }
   
}