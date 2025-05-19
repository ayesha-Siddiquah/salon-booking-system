import React from 'react';
import Marquee from 'react-fast-marquee';
import rightColumnImage from '../images/rightcoloum2.jpg';
import team1 from '../images/ranveer.jpg';
import team2 from '../images/sharukh.jpg';
import team3 from '../images/varundhawan.jpg';

const AboutUs = () => {
  return (
    <div>
      {/* News Ticker - Below Header */}
      <div 
        className=" bg-[#d9a79d] text-black py-4 fixed top-40 left-0 w-full" 
        style={{ zIndex: 40 }}
      >
        
      </div>

      {/* Page Content */}
      <div className="pt-48 bg-[#5A3376] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-black text-center">Our Mission</h2>
            <p className="text-[23px] text-white text-gray-700 leading-relaxed mb-6">
              At Beauty Mark Salon & Studio, we are dedicated to providing a luxurious and personalized experience for every client. Our mission is to create a welcoming space where you can relax, rejuvenate, and leave feeling confident and beautiful. We are committed to using high-quality products and techniques to ensure your satisfaction and to help you look and feel your best.
            </p>
            <p className="text-[23px] text-white leading-relaxed">
              We believe that beauty is more than skin deep. It’s about feeling good from the inside out. That’s why we offer complimentary beverages and a relaxing atmosphere to make your visit truly special.
            </p>

            {/* Services List */}
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-4 text-center">
                Welcome to Beauty Mark Salon & Studio, Beautiful!
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-[23px] text-white list-disc list-inside">
                  <li>Professional trained and licensed technicians</li>
                  <li>Love is love</li>
                  <li>Top-quality service</li>
                </ul>
                <ul className="space-y-4 text-[23px] text-white list-disc list-inside">
                  <li>Highest standards of cleanliness and care</li>
                  <li>Check your attitude at the door</li>
                  <li>Complimentary beverages!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={rightColumnImage}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src={team1}
                alt="Team Member"
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
                <p className="text-xl font-semibold">Ranveer Singh </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src={team2}
                alt="Team Member"
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
                <p className="text-xl font-semibold">Sharukh Khan </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img
                src={team3}
                alt="Team Member"
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
                <p className="text-xl font-semibold">Varun Dhawan</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;