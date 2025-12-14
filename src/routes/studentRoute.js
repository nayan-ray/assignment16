import express from 'express';
import { activeUserProcess, deleteUserById, getUserById, updateUser, userRegister } from '../controllers/studentController.js';
import { isLoggedIn } from '../middleware/authMiddleware.js';
import upload from '../middleware/fileUpload.js';
const router = express.Router();


router.post("/register", userRegister );
router.post("/activation-student", activeUserProcess);
router.get("/:id", isLoggedIn, getUserById);
router.delete("/:id", isLoggedIn, deleteUserById);
router.put("/:id", isLoggedIn, upload.single("uploadFile"), updateUser);


export default router;