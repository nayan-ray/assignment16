import axios from "axios"

export const authApi = async(student)=>{
    try {
        const response = await axios.post('http://localhost:3000/api/v1/student/register', student, {
            headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })
        console.log("success", response.data);
        
    } catch (error) {
        if(error.status === 409){
            alert("User already exists. Please Login.");
            return;
        }
        alert("Registration failed. Please try again." )
           
    }
   
}