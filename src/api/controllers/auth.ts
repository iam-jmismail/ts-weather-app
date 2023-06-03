import { NextFunction, Request, Response } from "express";
import { ErrorObjectMap, JWTPayload, LoginRequest, RegisterRequest } from "@type/payload";
import { CryptoPassword, generateToken } from "@lib/index";
import { UserModel, UserSessionModel } from "@models/index";
import { NotFoundError, ResourceConflictError, ValidationError } from "@helpers/error-Handler";

/**
 * Login User 
 */

export const login = async (req: LoginRequest, res: Response, next: NextFunction) => {
    const { body: { email, password } } = req;
    try {
        // Check If User Exists 
        const user = await UserModel.findOne({ email })
        if (!user) throw new NotFoundError('User Not Found')

        // Check Password
        const password_match = await CryptoPassword.comparePassword(password, user.password);
        if (!password_match) throw new ValidationError(null, 'Invalid Password')

        // Generate JWT Token 
        const { first_name, last_name } = user
        const payload = {
            email, first_name, last_name
        }

        const access_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'access_token' }, '10m');
        const refresh_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'refresh_token' }, '30m');

        // Create a Session 
        await UserSessionModel.create({
            token: access_token,
            login_time: Date.now(),
            user_id: user._id
        })

        return res.sendSuccessResponse({
            access_token,
            refresh_token
        }, 'Login Success');

    } catch (error) {
        return next(error)
    }
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
            email, first_name, last_name
        }

        const access_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'access_token' }, '10m');
        const refresh_token = generateToken<JWTPayload<typeof payload>>({ ...payload, token_type: 'refresh_token' }, '30m');


        // Encrypt Password
        const hashed_password = await CryptoPassword.hashPassword(password)

        // Insert into DB
        const created_user = await UserModel.create({ ...payload, token: access_token, password: hashed_password })

        // Create a Session 
        await UserSessionModel.create({
            token: access_token,
            login_time: Date.now(),
            user_id: created_user._id
        })

        return res.sendSuccessResponse({
            access_token,
            refresh_token
        }, 'Registration Success');

    } catch (error) {
        return next(error)
    }
}

export const getMe = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findOne({ _id: req.user._id }).select('-password -token')
    res.sendSuccessResponse(user, "User data fetched")
}

export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
    const { user: { email, first_name, last_name } } = req
    try {

        // Generate JWT Token using User_ID
        const payload = {
            email, first_name, last_name
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