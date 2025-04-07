import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import backgroundImage from "../images/aboutus_image.png";
import image1 from "../images/ser_waxing.jpg";
import image2 from "../images/ser_nails.jpg"; 
import image3 from "../images/ser_manipedi.jpg";
import image4 from "../images/ser_hairspa.jpg"; 
import image5 from "../images/rightcoloum2.jpg"; 
import image6 from "../images/ranveer.jpg"; 
import image7 from "../images/sharukh.jpg"; 
import logo from "../images/logo_transparent.png";

import brochure from '../assets/documents/beautymark_book.pdf';


const Academy = () => {


    const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;
  
  // Add all your images to this array
  const allImages = [image1, image2, image3, image4, image5, image6];
  const totalPages = Math.ceil(allImages.length / imagesPerPage);
  const currentImages = allImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };




  return (
    <div className="bg-[#5A3376] min-h-screen flex flex-col items-center">
      
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[75vh] items-center justify-end text-right px-20 bg-contain bg-no-repeat bg-center"
        
       style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        </div>

         {/* Content Section */}
 
        <div className="w-full max-w-4xl text-center py-20 px-6">
        {/* Logo */}
        <img src={logo}  alt="The Bounce Academy Logo" className="mx-auto w-80 mb-8" />
        
        {/* Title */}
        <h2 className="text-3xl text-[#5A3376] font-bold italic">Courses</h2>
        <hr className="w-16 border-[#5A3376] border-2 mx-auto mt-2 mb-6" />
        
        {/* Subtitle */}
        <h3 className="text-xl font-bold text-black">MASTER THE ART OF BEAUTY.</h3>

        {/* Description */}
        <p className="text-white mt-4">
          Learn contemporary beauty techniques taught by our handpicked, knowledgeable educators. 
          The curriculum at Bounce Style Academy is loaded with valuable information on all hair-related subjects 
          with attention to personal skill and communication, which ensure your success once you're on the job.
        </p>
        
        <p className="text-white mt-4">
          The courses are certified by Schwarzkopf, the leaders in hair cosmetics, thus integrating their 
          techniques and know-how into the curriculum. The experienced instructors are industry veterans that help 
          you develop your abilities and evolve into a contemporary hair technician. Trust the artist in you.
        </p>
      </div>

         {/* ✅ Image Grid (Three Images Below the Paragraph) */}
       {/* Updated Image Carousel */}
<div className="w-full max-w-6xl px-6 py-8 relative">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {currentImages.map((img, index) => (
      <div key={index} className="relative h-[500px] w-full group"> {/* Increased height */}
        <img
          src={img}
          alt={`Training Image ${currentPage * imagesPerPage + index + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  {allImages.length > imagesPerPage && (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
      <button
        onClick={handlePrev}
        className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all scale-300" 
      >
        <ChevronLeftIcon className="h-10 w-10 text-purple-900" /> {/* Increased icon size */}
      </button>
      
      <button
        onClick={handleNext}
        className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all scale-300" 
      >
        <ChevronRightIcon className="h-10 w-10 text-purple-900" /> 
      </button>
    </div>
  )}
</div>



          {/* ✅ New Section (Academy Course Details) */}
      <div className="w-full max-w-4xl text-center py-10 px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-black">HEAD START</h2>
        <p className="text-white mt-2">
          Duration – 2 months. Timings – 9.45 am to 6 pm. Days – Monday to Saturday. Fee – Rs.100,000 + tax.
        </p>
        <p className="text-white mt-4">
          Our curriculum covers Hair Science, Consultation and Analysis, Health, Safety and Security, Terminology, 
          Shampooing, Conditioning, Blow Drying, Hair Cutting, Styling and Finishing, Hair Colouring, Straightening, 
          Rebonding, Perming, and Treatments for Hair and Scalp.
        </p>

        {/* Haircuts */}
        <h3 className="text-xl font-bold text-black mt-6">Hair Cuts include:</h3>
        <p className="text-white mt-2">Long – one length, forward graduation, square layers, pie layers, natural inversion.</p>
        <p className="text-white mt-2">Medium – round layers, one length bob, graduated bob.</p>
        <p className="text-white mt-2">Short – vertical graduation, textured crop.</p>
        <p className="text-white mt-2">Men’s hair – short square crop, scissors over comb.</p>

        {/* Address */}
        <h3 className="text-xl font-bold text-black mt-6">ADDRESS</h3>
        <p className="text-white mt-2">Shop No.6, Plot No. E,</p>
        <p className="text-white mt-2">28-A II Avenue above Spencers Supermarket,</p>
        <p className="text-white mt-2">Besant Nagar, Chennai 90.</p>

        {/* Contact */}
        <p className="text-black font-bold mt-4">Phone: +91 44 45090068</p>
        <p className="text-black font-bold">Email: academy.chennai@spalon.in</p>
      </div>


            {/* ✅ Faculty Section (Placed Below Course Details) */}
            <div className="w-full max-w-4xl text-center py-16 px-6 bg-gray-200">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#5A3376] italic">Faculty</h2>
        <div className="w-16 h-1 bg-[#5A3376] mx-auto mt-2"></div>
        
        {/* Faculty Description */}
        <p className="text-gray-700 font-bold mt-4">
          At Bounce Style Academy, hair is treated like a science as well as an art, and that’s why we have an 
          eclectic blend of educators with knowledge ranging from commercial to the creative and avant-garde.
        </p>
        <p className="text-gray-700 font-boldmt-4">
          The faculty, with work experience ranging over 30 years, selflessly share their knowledge and expertise 
          and promise to transform you into an all-round salon professional. Apart from the core team of trainers, 
          you can expect ongoing sessions by visiting faculty for updates on current trends & techniques, 
          guaranteeing a comprehensive learning experience.
        </p>

        {/* Buttons */}
       
        <div className="flex justify-center gap-6 mt-6">
        <a href={brochure} download>
          <button className="bg-[#5A3376] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-purple-800 transition duration-300">
            DOWNLOAD BROCHURE
          </button>
          </a>

          <Link to="/contact">
          <button className="bg-[#5A3376] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-purple-800 transition duration-300">
            GET IN TOUCH
          </button>
          </Link>
        </div>
      </div>
      </div>
)}
export default Academy;