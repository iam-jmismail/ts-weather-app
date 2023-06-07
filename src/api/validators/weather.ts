import { NextFunction, Request, Response } from "express";

import { ValidationChain, body, query } from "express-validator";


/**
 *    lat? : number;
    lng? : number;
    city?: string,
    units?: Units,
    language? : SupportedLanguages
 */

export const currentWeather: ValidationChain[] = [
    query('lat_lng').isLatLong().optional(),
    query('city').isString().optional(),
]
