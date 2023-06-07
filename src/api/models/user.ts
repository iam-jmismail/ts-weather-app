import { Schema, model } from 'mongoose';
import { UserDocument, UserModelType } from '@type/index'
import { getSchemaOption } from './utils';

export const userSchema = new Schema<UserDocument>({
    email: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    location: {
        lat: {
            type: Number,
            required: false
        },
        lng: {
            type: Number,
            required: false
        }
    },
    token: {
        type: String,
        required: false
    }
}, getSchemaOption<UserDocument>())

export const UserModel = model<UserDocument, UserModelType>('user', userSchema)