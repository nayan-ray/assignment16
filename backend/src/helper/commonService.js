import mongoose from "mongoose";
import createError from "http-errors";

const findUserById = async  (id, Model, options={}) => {

      try {
        
        const  user = await Model.findById(id , options);
                       
        if(!user) {
            throw createError(404, `${Model.modelName} not found with this id`);
        };

        return user;

      } catch (error) {

        if(error instanceof mongoose.Error.CastError){

          throw createError(400,  'Invalid user id'); 
                 
         }

       throw error;
   }


}

export {findUserById}