import { config } from "dotenv";

config()

export const DATABASE = {
    MONGO_DB_USERNAME: process.env['MONGO_DB_USERNAME'] || "",
    MONGO_DB_PASSWORD: process.env['MONGO_DB_PASSWORD'] || "",
    MONGO_DB_APP: process.env['MONGO_DB_APP'] || ""
}


