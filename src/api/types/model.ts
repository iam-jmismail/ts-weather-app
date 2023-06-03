import { Model, Document } from 'mongoose'
import { UserEntity, UserSessionEntity } from './entities';

// Users
export interface UserDocument extends UserEntity, Document { }
export interface UserModelType extends Model<UserDocument> { }

// User Session 
export interface UserSessionDocument extends UserSessionEntity, Document { }
export interface UserSessionModelType extends Model<UserSessionDocument> { }