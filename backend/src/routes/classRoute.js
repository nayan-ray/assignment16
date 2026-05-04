import express from "express";
import { createClass, deleteClass, getAllClasses, updateClass } from "../controllers/classController.js";


const router = express.Router();


router.post("/add-class", createClass);
router.put("/edit-class/:id", updateClass);
router.delete("/delete-class/:id", deleteClass);
router.get("/get-all-classes", getAllClasses);



export default router;