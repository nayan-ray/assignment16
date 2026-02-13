import express from 'express';
import { activeUserProcess, checkEmail, deleteUserById, getUserById, resetPassword, updateUser, userRegister } from '../controllers/studentController.js';
import { isLoggedIn } from '../middleware/authMiddleware.js';
import upload from '../middleware/fileUpload.js';
const router = express.Router();


router.post("/register", userRegister );
router.post("/activation-student", activeUserProcess);
router.get("/info", isLoggedIn, getUserById);
router.delete("/:id", isLoggedIn, deleteUserById);
router.put("/:id", isLoggedIn, upload.single("uploadFile"), updateUser);
router.post("/email-verification", checkEmail)
router.post("/reset-password", resetPassword)

export default router;