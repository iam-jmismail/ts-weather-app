import { Router } from "express";
import {
    weatherController
} from "@controllers/index";

import validate from "../middlewares/validator";
import authorize from "../middlewares/auth";

import { weatherValidator } from "../validators";

const router = Router();

router.get("/", authorize, weatherValidator.currentWeather, validate, weatherController.getCurrentWeather);

export default router;
