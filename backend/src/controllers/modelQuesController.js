import { UPLOAD_DIR } from "../config/path.js";
import { findUserById } from "../helper/commonService.js";
import { deleteImageByPath } from "../helper/deleteImagePath.js";
import { successResponse } from "../helper/response.js";
import ModelQues from "../models/modelQues.js";
import path from "path";


const createModelQues = async (req, res, next) => {

    const {subjId, classId, unitId, quesTitle, quesA , quesB, quesC, ansA, ansB, ansC} = req.body;
 

   try {
     const quesTitleImgFile = req.files?.quesTitleImg?.[0];
     const ansAImgFile = req.files?.ansAImg?.[0];
     const ansBImgFile = req.files?.ansBImg?.[0];
     const ansCImgFile = req.files?.ansCImg?.[0];


        let modelQuesObj = {
            subjId,
            classId,
            unitId, 
            quesTitle,
            quesA,
            quesB,
            quesC,
            ansA,
            ansB,
            ansC,
          
        }
       
       if(quesTitleImgFile?.filename){
        modelQuesObj.quesTitleImg = `${req.protocol}://${req.get("host")}/uploads/${quesTitleImgFile?.filename}`;
       }
       if(ansAImgFile?.filename){
        modelQuesObj.ansAImg = `${req.protocol}://${req.get("host")}/uploads/${ansAImgFile?.filename}`;
       }
       if(ansBImgFile?.filename){
        modelQuesObj.ansBImg = `${req.protocol}://${req.get("host")}/uploads/${ansBImgFile?.filename}`;
       }
       if(ansCImgFile?.filename){
        modelQuesObj.ansCImg = `${req.protocol}://${req.get("host")}/uploads/${ansCImgFile?.filename}`;
       }

        const newModelQues = await ModelQues.create(modelQuesObj);
        return successResponse(res, {
            statusCode: 201,
            message: 'Model Question created successfully',
            payload: newModelQues
        });
   } catch (error) {
      next(error);
   }
}

const updateModelQues = async (req, res, next) => {
    const id = req.params.id;

    try {
        const modelQues = await findUserById(id, ModelQues);
        let updateObject = {};

        if(req.body.quesTitle){
            updateObject.quesTitle = req.body.quesTitle;
        }
        if(req.body.quesA){
            updateObject.quesA = req.body.quesA;
        }
        if(req.body.quesB){
            updateObject.quesB = req.body.quesB;
        }
        if(req.body.quesC){
            updateObject.quesC = req.body.quesC;
        }
        if(req.body.ansA){
            updateObject.ansA = req.body.ansA;
        }
        if(req.body.ansB){
            updateObject.ansB = req.body.ansB;
        }
        if(req.body.ansC){
            updateObject.ansC = req.body.ansC;
        }
        const quesTitleImgFile = req.files?.quesTitleImg?.[0];
        const ansAImgFile = req.files?.ansAImg?.[0];
        const ansBImgFile = req.files?.ansBImg?.[0];
        const ansCImgFile = req.files?.ansCImg?.[0];

        if(quesTitleImgFile){
            updateObject.quesTitleImg = `${req.protocol}://${req.get("host")}/uploads/${quesTitleImgFile?.filename}`;
            if(modelQues.quesTitleImg){
                const oldFilename = modelQues.quesTitleImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(ansAImgFile){
            updateObject.ansAImg = `${req.protocol}://${req.get("host")}/uploads/${ansAImgFile?.filename}`;
            if(modelQues.ansAImg){
                const oldFilename = modelQues.ansAImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(ansAImgFile){
            updateObject.ansAImg = `${req.protocol}://${req.get("host")}/uploads/${ansAImgFile?.filename}`;
            if(modelQues.ansAImg){
                const oldFilename = modelQues.ansAImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(ansBImgFile){
            updateObject.ansBImg = `${req.protocol}://${req.get("host")}/uploads/${ansBImgFile?.filename}`;
            if(modelQues.ansBImg){
                const oldFilename = modelQues.ansBImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }
        if(ansCImgFile){
            updateObject.ansCImg = `${req.protocol}://${req.get("host")}/uploads/${ansCImgFile?.filename}`;
            if(modelQues.ansCImg){
                const oldFilename = modelQues.ansCImg.split("/")[4];
                const oldPath = path.join(UPLOAD_DIR, oldFilename);
                oldPath && deleteImageByPath(oldPath);
            }
        }

        const options = { new: true };

        const updatedModelQues = await ModelQues.findByIdAndUpdate(id, updateObject, options);

        return successResponse(res,{
            statusCode  : 200,
            message  : 'Model Question updated successfully',
            payload  : updatedModelQues
        })
    } catch (error) {
         next(error);
    }
}

const deleteModelQues = async (req, res, next) => {
    const id = req.params.id;

    try {
        const modelQues = await findUserById(id, ModelQues);

        if(modelQues.quesTitleImg){
            const oldFilename = modelQues.quesTitleImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(modelQues.ansAImg){
            const oldFilename = modelQues.ansAImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(modelQues.ansBImg){
            const oldFilename = modelQues.ansBImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }
        if(modelQues.ansCImg){
            const oldFilename = modelQues.ansCImg.split("/")[4];
            const oldPath = path.join(UPLOAD_DIR, oldFilename);
            oldPath && deleteImageByPath(oldPath);
        }

        await ModelQues.findByIdAndDelete(id);

        return successResponse(res,{
            statusCode  : 200,
            message  : 'Model Question deleted successfully',
        })
    } catch (error) {
         next(error);
    }
}

const getQuesByUnitId = async(req, res, next) => {
    const id = req.params.id;
    try {
        const modelQues = await ModelQues.find({ unitId: id });

        return successResponse(res, {
            statusCode: 200,
            message: 'Model Questions retrieved successfully',
            payload: modelQues
        });
    } catch (error) {
        next(error);
    }
}

export { createModelQues, updateModelQues, deleteModelQues, getQuesByUnitId };