import mongoose from "mongoose";

let connection = {};

export const connectToDatabase = async () => {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 60000, // Increase the timeout
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connection to database established");
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    throw new Error("Failed to connect to the database");
  }
};
