import { UserTypeUnion } from "./unions";
import { Location } from "./common";

export interface UserEntity {
    first_name: string;
    last_name?: string;
    email: string;
    password: string;
    role: UserTypeUnion,
    location?: Location
    token: string
}

export interface UserSessionEntity {
    user_id: string | UserEntity;
    token: string;
    login_time: number;
    logout_time: number;
    login_status: boolean;
}

