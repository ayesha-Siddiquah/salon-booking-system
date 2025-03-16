import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col">
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding-top to push content below the header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;