// models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    stylist_id: { type: mongoose.Schema.Types.ObjectId, ref: "Stylist", required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true }, // Storing date as Date type
    time: { type: String, required: true },
    status: { type: String, enum: ["Confirmed", "Pending", "Cancelled"], default: "Pending" },
  });
export default mongoose.model("Appointment", appointmentSchema);/// goes and finds Appointments schema ffrom mongodb. it pluralises by default.
