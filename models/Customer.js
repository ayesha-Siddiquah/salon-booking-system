import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer name is required"], // Better validation message
  },
  email: {
    type: String,
    required: [true, "Email is required"], // Add required
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] // Add validation
  },
  phone_number: { // Changed from 'phone' to match appointment schema
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"] // Add validation
  },

  appointments: [{ // Add reference to appointments
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  }]
});

export default mongoose.model("Customer", customerSchema);
