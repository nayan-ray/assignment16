import Router from "express";
import userControllers from "../controllers/userController.js";
import upload from "../middleware/fileUpload.js";

const router = Router();
router.post("/create-user", userControllers.createUser);
router.get("/read-user", userControllers.readUser);
router.put("/update-user", userControllers.updateUser);
router.delete("/delete-user", userControllers.deleteUser);
router.get("/all-users", userControllers.getAllUsers);
router.get("/user/:id", userControllers.getUserById);


router.post("/login", userControllers.loginUser);
router.post("/logout", userControllers.logoutUser);

router.put("/change-password", userControllers.changePassword);

router.put("/update-profile", userControllers.updateProfile);
router.put("/make-admin/:id", userControllers.makeAdmin);
router.put("/remove-admin/:id", userControllers.removeAdmin);
router.get("/search", userControllers.searchUsers);
router.get("/filter", userControllers.filterUsers);
router.patch("/block-user/:id", userControllers.blockUser);
router.patch("/unblock-user/:id", userControllers.unblockUser);
router.post("/verify-email", userControllers.verifyEmail);
router.post("/resend-verification", userControllers.resendVerification);

router.post("/upload-profile-picture", upload.single('uploaded_file'), userControllers.uploadProfilePicture);
router.delete("/delete-account", userControllers.deleteAccount);

export default router;