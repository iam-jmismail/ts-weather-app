import { UserTypeUnion } from "./unions";
import { Location } from "./common";

export interface UserEntity<T = string> {
    first_name: string;
    last_name?: string;
    email: string;
    password: string;
    role: UserTypeUnion,
    location?: Location<T>
    token: string,
    status: boolean,
    is_deleted: boolean
}

export interface UserSessionEntity {
    user_id: string | UserEntity;
    token: string;
    login_time: number;
    logout_time: number;
    login_status: boolean;
}



/** Weather  */
export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}
export interface Wind {
    speed: number;
    deg: number;
}
export interface Clouds {
    all: number;
}
export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}


export interface Coord {
    lon: number;
    lat: number;
}

export interface WeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherEntity {
    coord: Coord;
    weather?: (WeatherData)[] | null;
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}


