import { UserEntity } from "./entities";
import { FallbackUndefined } from "./utils"

export type Location<T = undefined> = {
    lat: FallbackUndefined<T, string>,
    lng: FallbackUndefined<T, string>
}

export interface ParamsDictionary {
    [key: string]: string;
}

// JWT 
export type JWTTimeDuration = `${number}${'d' | 'h' | 'y' | 's' | 'm'}` | number;

export type JWTTokenType = 'access_token' | 'refresh_token' | '2fa_token'

export type JWTPayload<T> = T & {
    token_type: JWTTokenType
}

export type JWTDecodedToken = {
    [key: string]: string | number | boolean,
    token_type: JWTTokenType,
}

export type JWTAccessTokenExpiryAction = 'LOGIN' | 'REFRESH'

export type RequestUserMeta = Pick<UserEntity, 'first_name' | 'last_name' | 'email'> & { _id: string }