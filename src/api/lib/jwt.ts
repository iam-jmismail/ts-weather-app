import jwt, { JwtPayload } from 'jsonwebtoken';



import { JWT_SECRET } from "@config/*"
import { JWTDecodedToken, JWTPayload, JWTTimeDuration, JWTTokenType } from '@type/*';

/**
 * Generate JWT Token by accepting a payload and expiry_time
 */
export const generateToken = <T extends object>(payload: T,
    /** expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2d", "10h", "7y" */
    expires_on: JWTTimeDuration = '1d') => {
    return jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: expires_on
    })
}


/** Verifies validity of a jwt token */
export const verifyTokenExpiry = (token: string) => {
    try {
        const decoded_token = jwt.verify(token, JWT_SECRET)
        return typeof decoded_token !== 'object'
    } catch (error) {
        return true
    }
}

export const decodeToken = (token: string) => {
    try {
        const decoded_token = jwt.decode(token)
        return decoded_token
    } catch (error) {
        console.log("error", error)
        return null
    }
}
