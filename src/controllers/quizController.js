import { successResponse } from "../helper/response.js";
import {findUserById} from "../helper/commonService.js"
import path from "path";


import Quiz from "../models/quiz.js";
import { UPLOAD_DIR } from "../config/path.js";
import { deleteImageByPath } from "../helper/deleteImagePath.js";


const createQuiz = async (req, res, next) => {

    const {subjId, classId, unitId, quizTitle, quizOptionA , quizOptionB, quizOptionC, quizOptionD, quizAnsIn} = req.body;
 

   try {
     const quizTitleImgFile = req.files?.quizTitleImg?.[0];
     const quizOptionAImgFile = req.files?.quizOptionAImg?.[0];
     const quizOptionBImgFile = req.files?.quizOptionBImg?.[0];
     const quizOptionCImgFile = req.files?.quizOptionCImg?.[0];
     const quizOptionDImgFile = req.files?.quizOptionDImg?.[0];


        let quizObj = {
            subjId,
            classId,
            unitId, 
            quizTitle,
            quizOptionA,
            quizOptionB,
            quizOptionC,
            quizOptionD,
            quizAnsIn
           
          
        }

       if(quizTitleImgFile?.filename){
        quizObj.quizTitleImg = `${req.protocol}://${req.get("host")}/uploads/${quizTitleImgFile?.filename}`;
       }
       if(quizOptionAImgFile?.filename){
        quizObj.quizOptionAImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionAImgFile?.filename}`;
       }
       if(quizOptionBImgFile?.filename){
        quizObj.quizOptionBImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionBImgFile?.filename}`;
       }
       if(quizOptionCImgFile?.filename){
        quizObj.quizOptionCImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionCImgFile?.filename}`;
       }
       if(quizOptionDImgFile?.filename){
        quizObj.quizOptionDImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionDImgFile?.filename}`;
       }
       

       const newQuiz = await Quiz.create(quizObj);
        return successResponse(res, {
            statusCode: 201,
            message: 'Quiz created successfully',
            payload: newQuiz
        });
   } catch (error) {
      next(error);
   }
}

const updateQuiz = async (req, res, next) => {

    const id = req.params.id;
    try {
        const quiz = await findUserById(id, Quiz);
        let updateObject = {};

        if(req.body.quizTitle){
            updateObject.quizTitle = req.body.quizTitle;
        }
        if(req.body.quizOptionA){
            updateObject.quizOptionA = req.body.quizOptionA;
        }
        if(req.body.quizOptionB){
            updateObject.quizOptionB = req.body.quizOptionB;
        }
        if(req.body.quizOptionC){
            updateObject.quizOptionC = req.body.quizOptionC;
        }
        if(req.body.quizOptionD){
            updateObject.quizOptionD = req.body.quizOptionD;
        }
        if(req.body.quizAnsIn){
            updateObject.quizAnsIn = req.body.quizAnsIn;
        }

        const quizTitleImgFile = req.files?.quizTitleImg?.[0];
        const quizOptionAImgFile = req.files?.quizOptionAImg?.[0];
        const quizOptionBImgFile = req.files?.quizOptionBImg?.[0];
        const quizOptionCImgFile = req.files?.quizOptionCImg?.[0];
        const quizOptionDImgFile = req.files?.quizOptionDImg?.[0];

        if(quizTitleImgFile){
            updateObject.quizTitleImg = `${req.protocol}://${req.get("host")}/uploads/${quizTitleImgFile?.filename}`;
            if(quiz.quizTitleImg){
                const oldFilename = quiz.quizTitleImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(quizOptionAImgFile){
            updateObject.quizOptionAImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionAImgFile?.filename}`;
            if(quiz.quizOptionAImg){
                const oldFilename = quiz.quizOptionAImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(quizOptionBImgFile){
            updateObject.quizOptionBImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionBImgFile?.filename}`;
            if(quiz.quizOptionBImg){
                const oldFilename = quiz.quizOptionBImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(quizOptionCImgFile){
            updateObject.quizOptionCImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionCImgFile?.filename}`;
            if(quiz.quizOptionCImg){
                const oldFilename = quiz.quizOptionCImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(quizOptionDImgFile){
            updateObject.quizOptionDImg = `${req.protocol}://${req.get("host")}/uploads/${quizOptionDImgFile?.filename}`;
            if(quiz.quizOptionDImg){
                const oldFilename = quiz.quizOptionDImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }

        const options = { new: true };

        const updatedQuiz = await Quiz.findByIdAndUpdate(id, updateObject, options);

        return successResponse(res,{
            statusCode  : 200,
            message  : 'Quiz updated successfully',
            payload  : updatedQuiz
        })
    } catch (error) {
         next(error);
    }
}

const deleteQuiz = async (req, res, next) => {
    const id = req.params.id;
    try {
        const quiz =  await findUserById(id, Quiz);

        if(quiz.quizTitleImg){
            const oldFilename = quiz.quizTitleImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(quiz.quizOptionAImg){
            const oldFilename = quiz.quizOptionAImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(quiz.quizOptionBImg){
            const oldFilename = quiz.quizOptionBImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(quiz.quizOptionCImg){
            const oldFilename = quiz.quizOptionCImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(quiz.quizOptionDImg){
            const oldFilename = quiz.quizOptionDImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        await Quiz.findByIdAndDelete(id);

        return successResponse(res,{
            statusCode  : 200,
            message  : 'Quiz deleted successfully'
        })
    } catch (error) {
        next(error);
    }
}

const getQuizByUnitId = async (req, res, next)=>{
    const id = req.params.id;

    try {
        const quizzes = await Quiz.find({unitId : id});

         return successResponse(res,{
            statusCode  : 200,
            message  : 'Quiz deleted successfully',
            payload : quizzes
        })
        
    } catch (error) {
        next(error)
    }

}

export { createQuiz, updateQuiz, deleteQuiz, getQuizByUnitId };