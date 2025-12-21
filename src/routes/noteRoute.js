import express from "express";
import { createNote, deleteNote, editNote, getNotesByUnitId } from "../controllers/noteController.js";
import noteImgUpload from "../middleware/noteFileUpload.js";



const router = express.Router();


router.post("/add-note", noteImgUpload.fields([{ name: "noteTitleImg", maxCount: 1 }, { name: "noteExplanationImg", maxCount: 1 }]), createNote);
router.put("/edit-note/:id", noteImgUpload.fields([{ name: "noteTitleImg", maxCount: 1 }, { name: "noteExplanationImg", maxCount: 1 }]), editNote);
router.delete("/delete-note/:id", deleteNote);
router.get("/notes-by-unit/:id", getNotesByUnitId);

export default router;