import mongoose from "mongoose";

const stylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
     index: true // Add index for faster lookups
  },
  specialty: {
    type: String,
    default: "General",
  },
  available_slots: [
    {
      date: { type: Date, required: true }, // 📅stores available dates
      slots: { type: [String], default: [] }, // ⏰ Keeps time slots per day
    },
  ],
});


// Method to remove a booked slot
stylistSchema.methods.removeBookedSlot = async function (date, time) {
  const slotIndex = this.available_slots.findIndex(
    (slot) => slot.date.toISOString().split("T")[0] === date
  );

  if (slotIndex !== -1) {
    this.available_slots[slotIndex].slots = this.available_slots[slotIndex].slots.filter(
      (slotTime) => slotTime !== time
    );

    if (this.available_slots[slotIndex].slots.length === 0) {
      this.available_slots.splice(slotIndex, 1); // Remove the date if no slots left
    }

    await this.save();
  }
};

export default mongoose.model("Stylist", stylistSchema);
