import { createToken } from "../helper/createToken.js";
import { emailWithNodeMailer } from "../helper/email.js";
import { successResponse } from "../helper/response.js";
import createHttpError from "http-errors";
import Student from "../models/student.js";
import { secretKey } from "../../secret.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userRegister= async(req, res,next) => {
    try {
        //taken user info
       const  {name, email, password, phone, address, classId} = req.body;
       //take user image

       let image  = null;


       if(req.file){
           image = req.file.path;
       }
       //check user exist
       const userExist = await Student.exists({email : email});
       
       if(userExist){
           throw createHttpError(409,"User already exists");
        }
        

        //create newUSer object
        const newUser = {
            name, email, password, phone, address,  image, classId

        }
        
        //create token
        
        const token = createToken(newUser, secretKey, '10m');

                //prepare email

                 const emailData = {
                    email: email,
                    subject : 'Account Activation Email',
                    text: '',
                    html : `
                         <h2> Hello ${name} </h2>
                       <p>welcome to our online nctb books learning platform</p>
                     
                      <p>Please click here to
                         <a href='http://localhost:3000/api/user/activate/${token}'>
                          activate your account
                        </a>
                       </p>
                    `
               }
      
      
         //sendEmail
      
         try {
            await emailWithNodeMailer(emailData);
         } catch (error) {
             throw error;
         }

 
        return successResponse(res,{
            statusCode  : 200,
            message  : 'Student registered successfully',
            payload :{
                token
            }
        })



    } catch (error) {
        
        next(error)
    }
}

const activeUserProcess= async(req, res, next) => {
    
    try {
        //accept token and check
        const token = req.body.token;
        
         
        if(!token) {
          throw createHttpError(404, 'token not found');
        }
      // token verify and check

        try {

            const decoded = jwt.verify(token, secretKey);
            
            if(!decoded ) {
            throw createHttpError(404, 'unable to create user');
            }
             
             
             //user  exist or not check

              const userExist = await Student.exists({email  : decoded.email});
       
              if(userExist){
                  throw createHttpError(409,
                  "User with this email  already exist. Please sign in"
                 );

               }

              
        
           //finally save user in database
 
           const user = await Student.create(decoded);
             return successResponse(res,{
            statusCode  : 200,
            message  : 'student created successfully',
            payload : user
            
        })

        } catch (error) {
             if(error.name === "TokenExpiredError"){
                throw createHttpError(401, 'token expired');
             } else if(  error.name === "JsonWebTokenError"){

               throw createHttpError(401, 'invalid token');
             } else if(error instanceof mongoose.Error){
                throw createHttpError(500, 'mongoose error');
             } else{
                throw error;
             }
            
        }
   
    } catch (error) {
        
        next(error) ; 
    }
    
    
}

export {userRegister, activeUserProcess};