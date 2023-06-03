import { NextFunction, Request, Response } from "express";
import { JWTPayload, RegisterRequest } from "@type/payload";
import { generateToken } from "@lib/index";
import { UserModel, UserSessionModel } from "@models/index";
import { ResourceConflictError } from "@helpers/error-Handler";

/**
 * Login User 
 */

export const login = (req: Request, res: Response, next: NextFunction) => {
    console.log("Login_User")
}

/**
 * Register a new User 
 */
export const register = async (req: RegisterRequest, res: Response, next: NextFunction) => {
    try {
        const { body: { email, first_name, last_name, password } } = req;

        // Check If User Exists 
        const user = await UserModel.findOne({ email })
        if (user) throw new ResourceConflictError('Email already exists')

        // Generate JWT Token 
        const payload = {
            email, first_name, last_name, password
        }

        const access_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'access_token' }, '10m');
        const refresh_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'refresh_token' }, '30m');

        // Insert into DB
        const created_user = await UserModel.create({ ...payload, token: access_token })

        // Create a Session 
        await UserSessionModel.create({
            token: access_token,
            login_time: Date.now(),
            user_id: created_user._id
        })

        return res.sendSuccessResponse({
            access_token,
            refresh_token
        }, 'Login Success');

    } catch (error) {
        return next(error)
    }
}

export const getMe = (req: Request, res: Response, next: NextFunction) => {
    console.log("user", req.user)
    res.sendSuccessResponse("From Me ")
}

export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
    try {

        // Generate JWT Token using User_ID
        const payload = {
            user_id: 1
        }

        const access_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'access_token' }, '10m');
        const refresh_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'refresh_token' }, '30m');

        return res.sendSuccessResponse({
            access_token,
            refresh_token
        }, 'Token Refresh Success');

    } catch (error) {
        return next(error)
    }
}