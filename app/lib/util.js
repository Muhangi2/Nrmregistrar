import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export const connectToDatabase = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connection to database established");
  } catch (error) {
    console.log(error, "error while connecting to the database");
  }
};
