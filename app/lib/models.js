import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    position: {
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

export const User = mongoose.models.User || mongoose.model("User", userSchema);
