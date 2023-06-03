import { JWTAccessTokenExpiryAction } from "@type/*";
import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";

export class NotFoundError extends Error {
    constructor(message = "Resource not found") {
        super(message)
        this.name = "NotFoundError"
        this.message = message
    }
}

export class UnAuthorizedError extends Error {
    action: JWTAccessTokenExpiryAction
    constructor(message = "You are Unauthorized to access", action: JWTAccessTokenExpiryAction = 'LOGIN') {
        super(message)
        this.name = "UnAuthorizedError"
        this.message = message;
        this.action = action
    }
}

export class ResourceConflictError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "ResourceConflictError"
        this.message = message;
    }
}


export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {

    // console.log("errorHandler", err)

    // Not Found Error 
    if (err instanceof NotFoundError) {
        return res.sendNotFoundResponse(err.message);
    }

    // JWT Token Error
    if (err instanceof TokenExpiredError) {
        return res.sendUnAuthorizedResponse(err.message)
    }

    // UnAuthorized User
    if (err instanceof UnAuthorizedError) {
        return res.sendUnAuthorizedResponse(err.message, err.action)
    }

    // Resource Conflicts!
    if (err instanceof ResourceConflictError) {
        return res.sendConflictResponse(err.message)
    }

    // Other Errors 
    return res.status(500).send({
        message: err.message ?? "Something went wrong! ",
    });
}