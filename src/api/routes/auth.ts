import { Router } from "express";
import {
    authController
} from "@controllers/index";

import validate from "../middlewares/validator";
import authorize from "../middlewares/auth";

import { authValidator } from "../validators";

const router = Router();

router.post("/login", authValidator.login, validate, authController.login);
router.post("/register", authValidator.register, validate, authController.register);
router.get("/refresh-token", authorize, authController.refreshToken);
router.get("/me", authorize, authController.getMe);

export default router;
