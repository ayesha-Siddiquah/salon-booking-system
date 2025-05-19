// models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: false }, // Optional
  name: { type: String, required: true },  // Store name inside the appointment
  email: { type: String, required: true }, // Store email inside the appointment
  phone_number: { type: String, required: true }, // Store phone inside the appointment
  stylist_id: { type: mongoose.Schema.Types.ObjectId, ref: "Stylist", required: true },/// change to false of stylist is optional
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Hairservice", required: true }, // Updated: Reference to Hairservice
  date: { type: Date, required: true }, 
  time: { type: String, required: true },
  status: { type: String, enum: ["Confirmed", "Pending", "Cancelled"], default: "Pending" },
});

export default mongoose.model("Appointment", appointmentSchema);