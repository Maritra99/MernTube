import express from "express";
import authenticationController from "../Controllers/authenticationController.js";

const router = express.Router();

router.post("/login", authenticationController.loginUser);
router.post("/sign-up", authenticationController.registerUser);

export default router;
