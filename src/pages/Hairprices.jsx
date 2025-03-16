import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hairprices = () => {
  const servicesData = [
    { name: "Step/Level/Measure/Layer Haircut", price: "250 & up", time: "30 min" },
    { name: "Brazilian Blowout", price: "250 & up", time: "90 min" },
    { name: "Color Retouch", price: "75 & up", time: "45 min" },
    { name: "Deluxe Wash Blow Dry (scalp facial)", price: "85 & up", time: "60 min" },
    { name: "Full Highlights", price: "145 & up", time: "75 min" },
    { name: "Keratin/Smoothing", price: "300 & up", time: "240 min" },
    { name: "Men’s Haircut", price: "40 & up", time: "15 min" },
  ];

  const stylists = ["Ayesha", "Shabnam", "Waseem"];

  const [selectedService, setSelectedService] = useState(null);
  const [activeStylist, setActiveStylist] = useState(stylists[0]);
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/book", { state: { service: selectedService, stylist: activeStylist } });
    setSelectedService(null); // Close the modal after proceeding
  };

  return (
    <section className="min-h-screen bg-[#F8F1EA] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mt-20 mb-6 text-gray-900">Hair Service Prices</h2>
        <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#d9a79d] text-white">
              <th className="py-3 px-4 text-left rounded-tl-lg">Service</th>
              <th className="py-3 px-2 text-left">Price</th>
              <th className="py-3 px-2 text-left rounded-tr-lg">Time</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr
                key={index}
                className="border-b last:border-none cursor-pointer hover:bg-gray-100 transition duration-200"
                onClick={() => {
                  setSelectedService(service.name);
                  setActiveStylist(stylists[0]); // Reset to default stylist each time
                }}
              >
                <td className="py-3 px-4 text-gray-800">{service.name}</td>
                <td className="py-3 px-2 text-gray-800">{service.price}</td>
                <td className="py-3 px-2 text-gray-800">{service.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            to="/services"
            className="inline-block px-6 py-3 bg-[#d9a79d] text-gray-800 font-semibold rounded shadow hover:bg-gray-300 transition"
          >
            Back to Services
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md mx-auto relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-lg"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">Select your favorite hairstylist</h3>

            {/* Stylist Selection */}
            <div className="flex justify-center gap-4 mb-6">
              {stylists.map((stylist) => (
                <button
                  key={stylist}
                  onClick={() => setActiveStylist(stylist)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    activeStylist === stylist ? "bg-[#d9a79d] text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {stylist}
                </button>
              ))}
            </div>

            {/* Selected Service & Stylist Info */}
            <div className="text-center">
              <p className="mb-4">
                <strong>Service:</strong> {selectedService}
              </p>
              <p className="mb-4">
                <strong>Selected Stylist:</strong> {activeStylist}
              </p>
            </div>

            {/* Proceed Button */}
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 block mx-auto transition"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hairprices;
