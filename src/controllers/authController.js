import Student from "../models/student.js";
import bcrypt from "bcryptjs";
import createError from "http-errors";
import { login_secret_key } from "../../secret.js";
import { createToken } from "../helper/createToken.js";
import { successResponse } from "../helper/response.js";

const handleLogin =  async(req, res, next)=>{
    try {
        //taken email and password from req.body

        const { email, password } = req.body;
        //find user  by email

        const user = await Student.findOne({ email }, {isBanned: 0, });
        //if user is not found send error response

        if (!user) {
            throw createError(404,  "User not found");

        }

        //compare password
       
        const isMatch = await bcrypt.compare(password, user.password);

        //check match 
        if (!isMatch) {

            throw createError(401, "Invalid password or email");
         
        }
        
        //check banned user

        if(user.isBanned){
            throw  createError(401, "Your account is banned.  Please contact admin");
        }
        const student = {name : user.name, email : user.email, id : user._id};
        // create  token
        const accessToken = createToken({student}, login_secret_key, "10m" ) 
          
        //set token in cookie
        res.cookie("access_token", accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 10, // 10 minutes
            // secure: true,
            sameSite : "none"
        })
       
        return successResponse(res,{
            statusCode  : 200,
            message  : 'user login successfully',
            
        })
        
    } catch (error) {
        next(error)
    }
  
}

const handleLogout =  async(req, res, next)=>{
    try {
        
        //clear  cookie
        res.clearCookie("access_token");

        return successResponse(res,{
            statusCode  : 200,
            message  : 'user logout successfully',
            payload : {
                        
            }
        })
        
    } catch (error) {
        next(error)
    }
  
}


export {handleLogin, handleLogout}