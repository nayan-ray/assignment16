import express from 'express';
import { activeUserProcess, checkEmail, deleteUserById, getUserById, resetPassword, updateUser, userRegister } from '../controllers/studentController.js';
import { isLoggedIn } from '../middleware/authMiddleware.js';
import upload from '../middleware/fileUpload.js';
import Limiter from '../middleware/rateLimiter.js';
import { registerValidator } from '../validators/userValidators.js';
import { validate } from '../middleware/validate.js';
const router = express.Router();


router.post("/register",Limiter , registerValidator, validate, userRegister );
router.post("/activation-student", Limiter, activeUserProcess);
router.get("/info", isLoggedIn, Limiter, getUserById);
router.delete("/:id", isLoggedIn, deleteUserById);
router.put("/update",Limiter, isLoggedIn, upload.single("uploadFile"), updateUser);
router.post("/email-verification", Limiter, checkEmail)
router.post("/reset-password", Limiter, resetPassword)

export default router;