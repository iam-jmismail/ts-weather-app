import { Request as ExpressRequest } from 'express'
import { ParamsDictionary } from './common'
import { UserEntity } from './entities'

/**
 * Register Request 
 * End Point /auth/register
 */
export type RegisterRequestBody = Omit<UserEntity, 'role' | 'location' | 'token' | '_id'>
export type RegisterRequest = ExpressRequest<ParamsDictionary, void, RegisterRequestBody>


/**
 * Login  
 * End Point /auth/login
 */
export type LoginRequestBody = Pick<UserEntity, 'email' | 'password'>
export type LoginRequest = ExpressRequest<ParamsDictionary, void, LoginRequestBody>