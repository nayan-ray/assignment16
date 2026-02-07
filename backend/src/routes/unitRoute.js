import express from "express";
import { createUnit, deleteUnit, getAllUnitsBySubjectId, getUnitDetails, getUnitIdByName, updateUnit } from "../controllers/unitController.js";
import { isLoggedIn} from "../middleware/authMiddleware.js"

const router = express.Router();


router.post("/add-unit", createUnit);
router.put("/update-unit/:id", updateUnit);
router.delete("/delete-unit/:id", deleteUnit);
router.get("/subject/:id", getAllUnitsBySubjectId);
router.get("/details/:id", getUnitDetails)
router.get("/id-by-name/:unitName", isLoggedIn, getUnitIdByName)

export default router;