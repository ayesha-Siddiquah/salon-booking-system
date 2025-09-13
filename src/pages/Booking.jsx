import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, stylist } = location.state || {};
  
  const stylistId = stylist?._id || "INVALID";

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  useEffect(() => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      slots.push(`${hour}:00`);
    }
    setAvailableSlots(slots);
    setSelectedSlot(null);
  }, [selectedDate]);

  const handleConfirmBooking = async () => {
    if (!customerName || !customerEmail || !customerPhone || !selectedSlot || stylistId === "INVALID") {
      alert("Please fill in all details before confirming the booking.");
      return;
    }

    const bookingData = {
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      stylist_id: stylist?._id || "INVALID",
      service: service?.name || "Unknown Service",  // ✅ Send only the service name
       date: new Date(selectedDate).toISOString().split("T")[0],
       time: selectedSlot,
      status: "Confirmed",
    };

    try {
      console.log("🔗 Sending booking to:", bookingData);
      await axios.post("http://localhost:5002/appointments", bookingData);
      alert("✅ Appointment confirmed! Check your email and SMS.");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("❌ Error booking appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Book Your Appointment</h2>

        <div className="mb-6">
          <label className="block font-medium">Service:</label>
          <input type="text" value={service?.name || ""} readOnly className="w-full px-4 py-2 border rounded bg-gray-100" />
        </div>

        <div className="mb-6">
          <label className="block font-medium">Stylist:</label>
          <input type="text" value={stylist?.name || ""} readOnly className="w-full px-4 py-2 border rounded bg-gray-100" />
        </div>

        <div className="mb-6">
          <label className="block font-medium">Full Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full px-4 py-2 border rounded" placeholder="Enter your name" />
        </div>

        <div className="mb-6">
          <label className="block font-medium">Email:</label>
          <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className="w-full px-4 py-2 border rounded" placeholder="Enter your email" />
        </div>

        <div className="mb-6">
          <label className="block font-medium">Phone Number:</label>
          <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full px-4 py-2 border rounded" placeholder="Enter your phone number" />
        </div>

        <div className="text-center mb-6">
          <label htmlFor="date" className="mr-2 font-medium">Select Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="border px-2 py-1 rounded" />
        </div>

        <h3 className="text-xl font-semibold mb-2 mt-3 text-center">Select a Time Slot:</h3>
        <div className="grid grid-cols-3 gap-4">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              className={`py-2 px-4 border rounded transition ${selectedSlot === slot ? "bg-green-500 text-white" : "bg-white text-gray-800 hover:bg-gray-200"}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <button className="inline-block px-6 py-3 bg-[#d9a79d] text-gray-800 font-semibold rounded shadow hover:bg-gray-300 transition" onClick={() => navigate("/hairprices")}>
            Back to Services
          </button>

          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded transition disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleConfirmBooking} disabled={!selectedSlot}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;