import { decodeToken, verifyTokenExpiry } from "@lib/jwt";
import { Request, Response, NextFunction } from "express";
import { JWTDecodedToken, RequestUserMeta } from "../types/common";
import { UnAuthorizedError } from "@helpers/error-Handler";
import { UserSessionModel } from "@models/user-session";
import { UserModel } from "@models/user";

export const authorize = async (req: Request, _res: Response, next: NextFunction) => {
    try {
        const authorization = req.headers.authorization as string;
        const token = authorization.split('Bearer').pop()?.trim() as string

        const { token_type, user_id } = decodeToken(token) as JWTDecodedToken
        const is_expired = verifyTokenExpiry(token as string);

        // Tokens Expired 
        if (is_expired && token_type === 'refresh_token') {
            throw new UnAuthorizedError("Session expired! Please login again.");
        }

        if (is_expired && token_type === 'access_token') {
            throw new UnAuthorizedError("Session refresh required!.", 'REFRESH');
        }

        // Check login_status
        const user_session = await UserSessionModel.findOne({ token })
        if (!user_session?.login_status) throw new UnAuthorizedError("Session expired! Please login again.");

        // Access Resource if token is valid 
        const user = await UserModel.findOne({ _id: user_session.user_id }).select({ email: 1, first_name: 1, last_name: 1 }) as RequestUserMeta
        req.user = user
        next()
    } catch (error) {
        return next(error)
    }
};

export default authorize;
