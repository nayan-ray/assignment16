import express from 'express';
import { activeUserProcess, userRegister } from '../controllers/studentController.js';
const router = express.Router();


router.post("/register", userRegister );
router.post("/activation-student", activeUserProcess)


export default router;