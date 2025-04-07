import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hairprices = () => {
  const [services, setServices] = useState([]);
  const [stylists, setStylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeStylist, setActiveStylist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(`Fetched data from ${url}:`, data);

        if (isMounted) setter(data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
        if (isMounted) setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData("http://localhost:5002/hairservices", setServices);
    fetchData("http://localhost:5002/stylists", setStylists);

    return () => {
      isMounted = false;
    };
  }, []);

  // Debug state updates
  useEffect(() => {
    console.log("Updated Stylists State:", stylists);
  }, [stylists]);

  const handleConfirmBooking = () => {
    if (!selectedService || !activeStylist) {
      alert("Please select a service and a stylist!");
      return;
    }

    console.log("Navigating with:", { service: selectedService, stylist: activeStylist });
    navigate("/book", { state: { service: selectedService, stylist: activeStylist } });
  };

  return (
    <section className="min-h-screen bg-[#F8F1EA] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mt-20 mb-6 text-gray-900">Hair Service Prices</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <ServiceTable services={services} setSelectedService={setSelectedService} stylists={stylists} setActiveStylist={setActiveStylist} />
        )}
        <div className="mt-6">
          <Link to="/services" className="inline-block px-6 py-3 bg-[#d9a79d] text-gray-800 font-semibold rounded shadow hover:bg-gray-300 transition">Back to Services</Link>
        </div>
      </div>
      {selectedService && (
        <StylistSelectionModal
          stylists={stylists}
          selectedService={selectedService}
          activeStylist={activeStylist}
          setActiveStylist={setActiveStylist}
          onProceed={handleConfirmBooking}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

const ServiceTable = ({ services, setSelectedService, stylists, setActiveStylist }) => (
  <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
    <thead>
      <tr className="bg-[#d9a79d] text-white">
        <th className="py-3 px-4 text-left rounded-tl-lg">Service</th>
        <th className="py-3 px-2 text-left">Price</th>
        <th className="py-3 px-2 text-left rounded-tr-lg">Time</th>
      </tr>
    </thead>
    <tbody>
      {services.map((service) => (
        <tr key={service._id} className="border-b last:border-none cursor-pointer hover:bg-gray-100 transition duration-200" onClick={() => { 
          setSelectedService(service); 
          setActiveStylist(stylists.length > 0 ? stylists[0] : null);
        }}>
          <td className="py-3 px-4 text-gray-800">{service.name}</td>
          <td className="py-3 px-2 text-gray-800">{service.price}</td>
          <td className="py-3 px-2 text-gray-800">{service.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const StylistSelectionModal = ({ stylists, selectedService, activeStylist, setActiveStylist, onProceed, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md mx-auto relative">
      <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-lg" onClick={onClose}>✕</button>
      <h3 className="text-xl font-bold mb-4 text-center">Select your favorite hairstylist</h3>
      <div className="flex justify-center gap-4 mb-6">
        {stylists.map((stylist) => (
          <button key={stylist._id} onClick={() => setActiveStylist(stylist)} className={`px-4 py-2 rounded-lg font-medium transition ${activeStylist && activeStylist._id === stylist._id ? "bg-[#d9a79d] text-white" : "bg-gray-200 text-gray-800"}`}>
            {stylist.name}
          </button>
        ))}
      </div>
      <div className="text-center">
        <p className="mb-4"><strong>Service:</strong> {selectedService?.name}</p>
        <p className="mb-4"><strong>Selected Stylist:</strong> {activeStylist?.name || "No stylists available"}</p>
      </div>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 block mx-auto transition" onClick={onProceed} disabled={!activeStylist}>
        Proceed
      </button>
    </div>
  </div>
);

export default Hairprices;
