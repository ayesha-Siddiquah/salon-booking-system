import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email and phone in real-time
    if (name === 'email') {
      setErrors({
        ...errors,
        email: validateEmail(value) ? '' : 'Please enter a valid email address.',
      });
    }

    if (name === 'phone') {
      setErrors({
        ...errors,
        phone: validatePhone(value) ? '' : 'Phone number must be 10 digits.',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: emailValid ? '' : 'Please enter a valid email address.',
        phone: phoneValid ? '' : 'Phone number must be 10 digits.',
      });
      return;
    }

    // If validation passes, submit the form
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="p-8 bg-[#f5f1eb] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-8">Get in touch with us for bookings and inquiries.</p>

      <div className="max-w-4xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information with Thick Border */}
          <div className="border-4 border-gray-800 p-6 rounded-lg bg-[#f5f1eb] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              Please book the appointments online by clicking on the Book Now option at the top of our website. Phone bookings are not encouraged.
            </p>
            <p className="mb-2"><strong>Phone:</strong> (13) 213-2171</p>
            <p className="mb-2"><strong>Email:</strong> info@beautylounge.com</p>
            <p className="mb-4"><strong>Address:</strong> 3745 Fifth Ave, San Diego, CA 92103</p>
            <p className="mb-4"><strong>Preferred Payment:</strong> Cash is our favorite way to be paid, especially so that our technicians receive your thanks and recognition in tips right away. We do, however, accept Visa, Mastercard, AMEX, and Apple Pay.</p>
            <a
              href="https://maps.google.com/?q=3745 Fifth Ave, San Diego, CA 92103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Get Directions
            </a>
          </div>

          {/* Contact Form */}
          <div className="border-4 border-gray-800 p-6 rounded-lg bg-[#f5f1eb] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;