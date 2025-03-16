import React from "react";
import { motion } from "framer-motion";
import ser_hairspa from "../images/ser_hairspa.jpg";
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <section className="bg-[#F8F1EA] min-h-screen flex items-center ">
      <div className="container mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
        {/* Image on the Left */}
        <div className="md:w-1/2">
          <img
            src = {ser_hairspa} 
            alt="Beauty Services"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on the Right */}
        <div className="md:w-1/2 md:pl-10 pt-auto self-start ">
          <motion.h2 
          className="text-4xl font-bold text-gray-900"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true, amount: 0.3 }}
          >
            Beauty Without Compromise  </motion.h2>
          <motion.p 
          className="text-lg text-gray-700 mt-4"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true, amount: 0.3 }}
          
          
          >
          Your personal beauty identity begins at the top of your head. At Beauty Lounge, we help you care for your hair with specialized scalp treatments, cuts, blowouts, and custom color services to enhance your natural look or make a statement.
          </motion.p>



          
          <motion.button
    className="px-10 py-6 mt-10 bg-[#d9a79d] text-black font-medium text-2xl rounded-lg flex items-center gap-2 shadow-md hover:bg-[#c9968d] transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.8 }}
    viewport={{ once: true }}
  >
      <Link to="/hairprices" className="flex items-center gap-2"> 
    See Prices
    <span className="text-black text-xl">➝</span>
    </Link>
  </motion.button>

        </div>
      </div>
    </section>
  );
};

export default Services;
