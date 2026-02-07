import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthenContex";

const ProtectedRoutes = ({children}) => {
    const {student, loading} = useContext(AuthContext)
   if(loading){
    return <p>Loading...</p>
   }

    if(!student){
        return <Navigate to={'/login'} replace={true} />
    }
  return children;
}

export default ProtectedRoutes