import mongoose from "mongoose";

const voterSchema = new mongoose.Schema(
  {
    customId: {
      type: String,
      unique: true,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    secondname: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    hometown: {
      type: String,
      required: true,
    },
    studentNumber: {
      type: String,
      required: true,
      unique: true,
    },
    registrationnumber: {
      type: String,
      required: true,
      unique: true,
    },
    residencehall: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Voter =
  mongoose.models?.Voter || mongoose.model("Voter", voterSchema);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
