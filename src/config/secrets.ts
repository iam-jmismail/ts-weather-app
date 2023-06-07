import { config } from "dotenv";
config()

export const JWT_SECRET = process.env['JWT_SECRET'] || ""
export const WEATHER_API_KEY = process.env['WEATHER_API_KEY'] || ""