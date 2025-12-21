import express from "express";

import quizUpload from "../middleware/noteFileUpload.js";

import { createExamQuiz, deleteExamQuiz, getQuizByUnitId, updateExamQuiz } from "../controllers/examQuizController.js";



const router = express.Router();


router.post("/add-quiz", quizUpload.fields([{ name: "quizTitleImg", maxCount: 1 }, { name: "quizOptionAImg", maxCount: 1 }, {name : "quizOptionBImg", maxCount : 1}, {name : "quizOptionCImg", maxCount : 1},  {name : "quizOptionDImg", maxCount : 1}]), createExamQuiz);
router.put("/edit-quiz/:id", quizUpload.fields([{ name: "quizTitleImg", maxCount: 1 }, { name: "quizOptionAImg", maxCount: 1 }, {name : "quizOptionBImg", maxCount : 1}, {name : "quizOptionCImg", maxCount : 1},  {name : "quizOptionDImg", maxCount : 1}]), updateExamQuiz);
router.delete("/delete-quiz/:id", deleteExamQuiz);
router.get("/get-quiz-unit/:id", getQuizByUnitId);

export default router;