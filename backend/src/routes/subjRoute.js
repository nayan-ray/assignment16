import express from "express";
import { createSubject, deleteSubject, getAllSubjectsByClassId, getSubjIdBySubjName, updateSubject } from "../controllers/subjectController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";



const router = express.Router();

router.get("/all-subjects", isLoggedIn, getAllSubjectsByClassId)
router.post("/add-subject", createSubject);
router.put("/update-subject/:id", updateSubject);
router.delete("/delete-subject/:id", deleteSubject);

router.get("/get-subj-id/:subjName", isLoggedIn, getSubjIdBySubjName)


export default router;