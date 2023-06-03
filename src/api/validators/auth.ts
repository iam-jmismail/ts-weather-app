import { NextFunction, Request, Response } from "express";

import { ValidationChain, body } from "express-validator";


export const register: ValidationChain[] = [
    body('first_name').isString().withMessage('Invalid Firstname'),
    body('email').isString().isEmail().withMessage('Invalid Email'),
    body('password').isString().isLength({ min: 4 }).withMessage('Invalid Password'),
]

export const login: ValidationChain[] = [
    body('email').isString().isEmail().withMessage('Invalid Email'),
    body('password').isString().isLength({ min: 4 }).withMessage('Invalid Password'),
]