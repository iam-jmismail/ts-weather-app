import mongoose from "mongoose";
import { DATABASE } from '@config/index'

const MONGO_URL = `mongodb+srv://${DATABASE.MONGO_DB_USERNAME}:${DATABASE.MONGO_DB_PASSWORD}@${DATABASE.MONGO_DB_APP}`

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL, {})
    console.log("Connected to Database")
  } catch (error) {
    console.error('DB_ERROR', error)
  }
}
