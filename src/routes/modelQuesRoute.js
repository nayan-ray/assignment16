import express from "express";

import modelQuesUpload from "../middleware/noteFileUpload.js";
import { createModelQues, deleteModelQues, updateModelQues } from "../controllers/modelQuesController.js";



const router = express.Router();


router.post("/add-ques", modelQuesUpload.fields([{ name: "quesTitleImg", maxCount: 1 }, { name: "ansAImg", maxCount: 1 }, {name : "ansBImg", maxCount : 1}, {name : "ansCImg", maxCount : 1} ]), createModelQues);

router.put("/update-ques/:id", modelQuesUpload.fields([{ name: "quesTitleImg", maxCount: 1 }, { name: "ansAImg", maxCount: 1 }, {name : "ansBImg", maxCount : 1}, {name : "ansCImg", maxCount : 1} ]), updateModelQues);
router.delete("/delete-ques/:id", deleteModelQues);


export default router;