import express from 'express';
import { handleLogin, handleLogout } from '../controllers/authController.js';
import { isLoggedIn, isLoggedOut } from '../middleware/authMiddleware.js';
import Limiter from '../middleware/rateLimiter.js';

const router = express.Router();


router.post("/login",isLoggedOut, Limiter, handleLogin);
router.post("/logout",   handleLogout);


export default router;