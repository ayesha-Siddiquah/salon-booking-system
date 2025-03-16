import React from 'react';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const facebookLink = 'https://www.facebook.com/yourpage';
  const instagramLink = 'https://www.instagram.com/yourpage';

  return (
    <footer className="bg-gray-800 text-white">
      {/* Upper Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Salon Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Beauty Mark Salon & Studio</h2>
            <p className="text-gray-300 leading-relaxed">
              We are a full-service, all-inclusive, LGBTQIA+ beauty salon that believes love is love 
              and discrimination is wrong. We serve the beauty and self-care needs of men, women, 
              non-binary, and gender nonconforming individuals in our warm and welcoming salon.
            </p>
          </div>

          {/* Menu Links */}
          <div className="flex justify-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-rose-300 transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-rose-300 transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-rose-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="text-gray-300 space-y-2">
              <p>📞 (619) 255-2591</p>
              <p>📍 123 Beauty Street, San Diego, CA</p>
              <div className="pt-4 flex space-x-4">
                <a href={facebookLink} className="hover:text-rose-300">
                  <FaFacebook size={24} />
                </a>
                <a href={instagramLink} className="hover:text-rose-300">
                  <FaInstagram size={24} />
                </a>
                <a href="tel:+16192552591" className="hover:text-rose-300">
                  <FaPhone size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Line Separator */}
      <hr className="border-gray-700" />

      {/* Copyright Section */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Beauty Mark Salon & Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;