import mongoose from "mongoose";

const stylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    default: "General",
  },
  available_slots: [
    {
      date: { type: Date, required: true }, // 📅 Adds the date of availability
      slots: { type: [String], default: [] }, // ⏰ Keeps time slots per day
    },
  ],
});

export default mongoose.model("Stylist", stylistSchema);
