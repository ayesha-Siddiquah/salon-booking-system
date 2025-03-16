import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  // Retrieve service and stylist info passed via router state
  const location = useLocation();
  const navigate = useNavigate();
  const { service, stylist } = location.state || {};

  // State for selected date (default to today's date in YYYY-MM-DD format)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  // State to hold available time slots for the selected date
  const [availableSlots, setAvailableSlots] = useState([]);
  // State for the selected time slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Generate available time slots for demonstration purposes.
  // In a real app, you might fetch available slots for the selected date from your backend.
  useEffect(() => {
    const slots = [];
    for (let hour = 9; hour < 18; hour++) {
      // For simplicity, slots are in the format "09:00", "10:00", etc.
      const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      slots.push(formattedHour);
    }
    setAvailableSlots(slots);
    // Reset selected slot when date changes
    setSelectedSlot(null);
  }, [selectedDate]);

  // Handler for confirming the booking
  const handleConfirmBooking = async () => {
    if (!selectedSlot) return;
    
    // Build booking data. In a real app, customer_id would come from the logged-in user.
    const bookingData = {
      customer_id: "dummyCustomerId", // Replace with actual customer id if available
      stylist_id: stylist ? stylist._id : null,
      service: service,
    date: new Date(selectedDate), // Using the selected date
      time: selectedSlot,
      status: "Confirmed"
    };

    try {
      const response = await axios.post("http://localhost:5000/appointments", bookingData);
      alert("Booking confirmed!");
      // Redirect to a confirmation page or home page as needed
      navigate("/confirmation");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Book Your Appointment</h2>
        <div className="text-center mb-6">
          <p><strong>Service:</strong> {service}</p>
          <p>
            <strong>Stylist:</strong>{" "}
             {stylist ? (typeof stylist === "string" ? stylist : stylist.name) : "N/A"}
           </p>
        </div>

        {/* Date Picker */}
        <div className="text-center mb-6">
          <label htmlFor="date" className="mr-2 font-medium">Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Time Slot Selection */}
        <h3 className="text-xl font-semibold mb-2 mt-3 text-center">Select a Time Slot:</h3>
        <div className="grid grid-cols-3 gap-4">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              className={`py-2 px-4 border rounded transition ${
                selectedSlot === slot
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Confirm Booking Button */}
        <div className="mt-6 text-center">
          <button
            className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded transition ${
              !selectedSlot && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleConfirmBooking}
            disabled={!selectedSlot}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
