import { Schema, model } from 'mongoose';
import { UserSessionDocument, UserSessionModelType } from '@type/index'
import { getSchemaOption } from './utils';

const userSessionSchema = new Schema<UserSessionDocument>({
    token: {
        type: String,
        required: true
    },
    login_time: {
        type: Number,
        required: true
    },
    logout_time: Number,
    login_status: {
        type: Boolean,
        default: true,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }

}, getSchemaOption<UserSessionDocument>())

export const UserSessionModel = model<UserSessionDocument, UserSessionModelType>('user-session', userSessionSchema)