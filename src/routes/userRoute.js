import Router from "express";
import userControllers from "../controllers/userController.js";

const router = Router();

router.get("/read-user", userControllers.readUser);
router.put("/update-user", userControllers.updateUser);



export default router;