import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "",
    unique: true, // Ensures emails are unique
    trim: true, // Removes extra spaces
    lowercase: true, // Stores emails in lowercase
  },
  phone: {
    type: String,
    default: "",
    unique: true, // Ensures no duplicate phone numbers
  },
});

export default mongoose.model("Customer", customerSchema);
