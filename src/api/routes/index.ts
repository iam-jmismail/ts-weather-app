import { Router } from "express";
import auth from "./auth"
import weather from "./weather"

const router = Router();

router.use("/auth", auth);
router.use("/weather", weather);

export default router;
