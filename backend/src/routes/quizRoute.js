import express from "express";

import quizUpload from "../middleware/noteFileUpload.js";

import { createQuiz, deleteQuiz, getQuizByUnitId, updateQuiz } from "../controllers/quizController.js";



const router = express.Router();


router.post("/add-quiz", quizUpload.fields([{ name: "quizTitleImg", maxCount: 1 }, { name: "quizOptionAImg", maxCount: 1 }, {name : "quizOptionBImg", maxCount : 1}, {name : "quizOptionCImg", maxCount : 1},  {name : "quizOptionDImg", maxCount : 1}]), createQuiz);
router.put("/edit-quiz/:id", quizUpload.fields([{ name: "quizTitleImg", maxCount: 1 }, { name: "quizOptionAImg", maxCount: 1 }, {name : "quizOptionBImg", maxCount : 1}, {name : "quizOptionCImg", maxCount : 1},  {name : "quizOptionDImg", maxCount : 1}]), updateQuiz);
router.delete("/delete-quiz/:id", deleteQuiz);
router.get("/get-quiz-unit/:id", getQuizByUnitId);
export default router;