import express from 'express';
import { handleLogin, handleLogout } from '../controllers/authController.js';
import { isLoggedIn, isLoggedOut } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post("/login",isLoggedOut, handleLogin);
router.post("/logout",   handleLogout);


export default router;