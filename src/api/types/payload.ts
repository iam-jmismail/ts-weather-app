import { Request as ExpressRequest } from 'express'
import { ParamsDictionary, SupportedLanguages, Units } from './common'
import { UserEntity } from './entities'

/**
 * Register Request 
 * End Point /auth/register
 */
export type RegisterRequestBody = Pick<UserEntity<number>, 'email' | 'first_name' | 'last_name' | 'password' | 'location'>
export type RegisterRequest = ExpressRequest<ParamsDictionary, void, RegisterRequestBody>


/**
 * Login  
 * End Point /auth/login
 */
export type LoginRequestBody = Pick<UserEntity, 'email' | 'password'>
export type LoginRequest = ExpressRequest<ParamsDictionary, void, LoginRequestBody>


/**
 * Current Weather Data  
 * End Point /weather
 */
export type WeatherRequestQuery = {
    lat_lng? : `${string},${string}`;
    city?: string,
    units?: Units,
    language? : SupportedLanguages
};
export type WeatherRequest = ExpressRequest<ParamsDictionary, void, void, WeatherRequestQuery>