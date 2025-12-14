import express from 'express';
import { activeUserProcess, getUserById, userRegister } from '../controllers/studentController.js';
import { isLoggedIn } from '../middleware/authMiddleware.js';
const router = express.Router();


router.post("/register", userRegister );
router.post("/activation-student", activeUserProcess);
router.get("/:id", isLoggedIn, getUserById)


export default router;