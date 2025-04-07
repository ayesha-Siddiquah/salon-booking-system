import React from "react";
import { motion } from "framer-motion";
import acrylicnails from "../images/acrylicnails.jpg";
import waxing from "../images/waxing.jpg";
import manicurepedicure from "../images/manicurepedicure.jpg";
import hair from "../images/hair.jpg";
import hair2 from "../images/hair2.jpg";
import bridalmakeup from "../images/bridalmakeup.jpg";
import backgroundImage from "../images/backgroundimage.jpeg"; // Use the correct image path

const Home = () => {
  return (
    <div className="bg-[#A9A9A9] min-h-screen flex flex-col items-center">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-screen flex items-center justify-end text-right px-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Dark Overlay */}
        <div className="relative z-10 max-w-full -mt-20 text-left">
          <motion.h1
            className="text-6xl font-extrabold text-black mb-4"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Beauty Mark Salon & Studio
          </motion.h1>

          <motion.p
            className="text-3xl text-customPurple text-left"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          >
            Your destination for premium beauty services.
          </motion.p>

          <motion.button
            className="mt-10 px-8 py-4 bg-white text-black font-medium text-xl rounded-lg shadow-md hover:bg-[#e0d4e4] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Schedule Appointment
          </motion.button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            <h3 className="text-3xl font-bold text-[#5A3376] mb-2">
              Experienced Stylist
            </h3>
            <p className="text-lg text-black">Easily Accessible</p>
            <p className="text-lg text-black">25 Years Experience</p>
            <p className="text-lg text-black">800 Salons</p>
            <p className="text-lg text-black">Uncompromised Quality</p>
            <motion.button
              className="mt-6 px-6 py-3 bg-[#5A3376] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#4a2b5e] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Book A Service Today
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#5A3376] mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-black leading-relaxed">
              With 25 years of experience, Beauty Mark Salon & Studio offers
              the benefit of over two decades of expertise in the beauty
              industry. Our personalized services are tailored to meet your
              unique needs and preferences, ensuring that you receive the care
              and attention you deserve. We are committed to uncompromised
              quality, using only the highest-quality premium products to
              provide exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-7xl bg-[#5A3376] px-4 pt-20">
        <h2 className="text-center text-6xl font-bold text-black mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[hair, bridalmakeup, hair2, waxing, manicurepedicure, acrylicnails].map(
            (image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Service ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            )
          )}
        </div>

        {/* Content section */}
        <div className="mt-16 max-w-3xl mx-auto text-center mb-16">
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl font-bold mb-6 text-black"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            A Professional Salon for Everyone
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-lg leading-relaxed text-white px-4"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          >
            Located in the vibrant Hillcrest neighborhood of San Diego, Beauty
            Lounge is an open and inclusive, full-service salon. Whoever you
            are, however you identify, you are invited to discover our welcoming
            atmosphere, talented technicians, and outstanding customer service.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="px-10 py-6 mt-10 bg-[#ffffff] text-[#5A3376] font-medium text-2xl rounded-lg flex items-center gap-2 shadow-md hover:bg-[#e0d4e4] transition ml-auto mx-auto flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            Schedule Appointment <span className="text-xl">➝</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
