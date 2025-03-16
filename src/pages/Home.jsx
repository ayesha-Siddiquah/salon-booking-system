import React from "react";
import { motion } from "framer-motion";
import acrylicnails from "../images/acrylicnails.jpg";
import waxing from "../images/waxing.jpg";
import manicurepedicure from "../images/manicurepedicure.jpg";
import hair from "../images/hair.jpg";
import hair2 from "../images/hair2.jpg";
import bridalmakeup from "../images/bridalmakeup.jpg";

const Home = () => {
  return (
    <div className="pt-32 mb-12 bg-[#f5f5ef] min-h-screen flex flex-col items-center">
      {/* Header with Staggered Animation */}
      <main className="text-center my-12">
        <motion.h1
          className="text-8xl font-extrabold bg-[#b07b71] text-transparent bg-clip-text mb-10"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          Welcome to Beauty Mark Salon & Studio
        </motion.h1>

        <motion.p
          className="text-3xl text-gray-700"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }} // Slight delay for sequential effect
        >
          Your destination for premium beauty services.
        </motion.p>
      </main>

      {/* Image Gallery */}
      <section className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Rounded Image */}
          <img
            src={hair}
            alt="Hair Styling"
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />

          {/* Small Rounded Square */}
          <div className="bridalmakeup flex justify-center items-center bg-[#f6f2ed] p-6">
            <div className="relative w-[800px] h-[600px] overflow-hidden rounded-tl-[50%]">
              <img
                src={bridalmakeup}
                alt="Acrylic Nails"
                className="w-full h-full rounded-tl-[50%] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Arch Shape */}
          <div className="arch w-full h-96 shadow-xl">
            <img src={hair2} alt="Curly Hair" className="w-full h-full object-cover" />
          </div>

          {/* Horizontal Rounded Rectangle */}
          <img
            src={waxing}
            alt="Waxing Services"
            className="w-full h-64 object-cover rounded-xl shadow-xl"
          />

          {/* Small Square */}
          <img
            src={manicurepedicure}
            alt="Manicure & Pedicure"
            className="w-full h-80 object-cover rounded-lg shadow-xl"
          />

          {/* Diamond Shape */}
          <div className="diamond w-full h-80 shadow-xl">
            <img
              src={acrylicnails}
              alt="Beauty Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Animated Section */}
      <div className="text-center mx-auto ">
        <motion.h1
          className="text-7xl mt-40 font-bold bg-[#b07b71] text-transparent bg-clip-text"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          A Professional Salon for Everyone
        </motion.h1>

        <motion.p
          className="mt-20 max-w-3xl text-3xl mx-auto text-gray-700 text-xl font-bold leading-relaxed"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Located in the vibrant Hillcrest neighborhood of San Diego, Beauty Lounge is an open and
          inclusive, full-service salon. Whoever you are, however you identify, you are invited to
          discover our welcoming atmosphere, talented technicians, and outstanding customer service.
        </motion.p>


        <div className="flex justify-center pt-20 w-full">
  <motion.button
    className="px-10 py-10 bg-[#d9a79d] text-black font-medium text-2xl rounded-lg flex items-center gap-2 shadow-md hover:bg-[#c9968d] transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.4 }}
    viewport={{ once: true }}
  >
    Schedule Appointment
    <span className="text-black text-xls">➝</span>
  </motion.button>
</div>



      </div>
    </div>
  );
};

export default Home;
