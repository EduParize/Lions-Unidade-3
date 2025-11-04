import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: [String],
    default: "USER",
    enum: ["USER", "ADMIN", "MODERATOR"],
  },
});
export const user = mongoose.model('user', userSchema);
