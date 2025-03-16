import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Hairprices from './pages/Hairprices.jsx';
import BookingPage from "./pages/Booking.jsx"; // the booking page you created

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/hairprices" element={<Layout><Hairprices /></Layout>} />
        <Route path="/book" element={<Layout><BookingPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
