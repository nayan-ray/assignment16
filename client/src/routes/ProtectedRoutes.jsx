import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthenContex";

const ProtectedRoutes = ({children}) => {
    const {student} = useContext(AuthContext)
    if(!student){
        return <Navigate to={'/login'} replace={true} />
    }
  return children;
}

export default ProtectedRoutes