import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hairSpaImage from "../images/backgroundimage.jpeg"; // Your image

const services = [
  {
    id: 1,
    image: hairSpaImage,
    title: "Beauty Without Compromise",
    description: "Your personal beauty identity begins at the top of your head. We provide specialized scalp treatments, cuts, blowouts, and custom color services to enhance your natural look.",
    link: "/hairprices",
  },
  {
    id: 2,
    image: hairSpaImage,
    title: "Luxury Hair Spa",
    description: "Relax and rejuvenate with our luxury hair spa treatments designed to restore moisture and shine to your hair.",
    link: "/hairspa",
  },

  {
    id: 3,
    image: hairSpaImage,
    title: "Luxury Hair Spa",
    description: "Relax and rejuvenate with our luxury hair spa treatments designed to restore moisture and shine to your hair.",
    link: "/hairspa",
  },

  {
    id: 4,
    image: hairSpaImage,
    title: "Luxury Hair Spa",
    description: "Relax and rejuvenate with our luxury hair spa treatments designed to restore moisture and shine to your hair.",
    link: "/hairspa",
  },

  {
    id: 5,
    image: hairSpaImage,
    title: "Luxury Hair Spa",
    description: "Relax and rejuvenate with our luxury hair spa treatments designed to restore moisture and shine to your hair.",
    link: "/hairspa"
  }
];

const Services = () => {
  return (
    <section className="relative bg-[#5A3376] min-h-screen py-12 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 space-y-24">
        {services.map((service, index) => (
          <div
          key={`${service.name}-${index}`} /// Uses service._id (MongoDB's unique ID) instead of service.id (which may not exist), Fallback to a unique key: ${service.name}-${index} if _id is missing.
            className={`relative md:flex md:items-center bg-[#5A3376] text-white py-12 px-6 rounded-lg ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* ✅ Image Section - Slides in from left if on left, from right if on right */}
            <motion.div
              className="md:w-1/2"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Image moves from left if index is even, right if odd
              whileInView={{ x: 0, opacity: 1 }} // Moves to normal position
              transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
              viewport={{ amount: 0.3 }} // Triggers when 30% is visible
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* ✅ Content Section - Slides in from right if on left, from left if on right */}
            <motion.div
              className="relative z-10 md:w-1/2 md:px-10"
              initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }} // Content moves from right if index is even, left if odd
              whileInView={{ x: 0, opacity: 1 }} // Moves to normal position
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <motion.h2
                className="text-4xl font-bold"
              >
                {service.title}
              </motion.h2>

              <motion.p className="text-lg mt-4">
                {service.description}
              </motion.p>

              <Link to={service.link}>
                <motion.button
                  className="px-10 py-6 mt-10 bg-[#ffffff] text-[#5A3376] font-medium text-2xl rounded-lg flex items-center gap-2 shadow-md hover:bg-[#e0d4e4] transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ amount: 0.3 }}
                >
                  See Prices <span className="text-xl">➝</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
