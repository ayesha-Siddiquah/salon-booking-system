

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Updated from Link to NavLink
import { FaSearch, FaTimes } from "react-icons/fa";
import logo from "../images/logo_transparent.png"; 



const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    if (isSearchVisible) {
      setSearchQuery("");
    }
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchQuery("");
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchVisible]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const searchContainer = document.querySelector(".search-container");
      if (searchContainer && !searchContainer.contains(e.target)) {
        setSearchQuery("");
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <header className="bg-black shadow-lg w-full fixed top-0 left-0 z-[10000] py-4">
      <div className="container mx-auto flex justify-between items-center p-6 h-40">
      <div className="flex items-center h-full">
  <NavLink to="/">
    <img 
      src={logo} 
      alt="Beauty Mark Saloon & Studio Logo"  
      className="h-[194px] w-auto object-contain" // Adjust height
      style={{
        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))", // Stronger shadow
        background: "transparent",  // ✅ Make sure background is transparent
      }} 
    /> 
  </NavLink>
</div>



      {/* <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-5xl font-bold text-white font-greatvibes">
          <NavLink to="/" className="hover:text-gray-300 transition duration-300">
            Beauty Mark Saloon & Studio
          </NavLink>
        </div> */}

        {/* Navigation Menu */}
        <div className="flex items-center space-x-8">
          <nav className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-400 text-[20px]" : "text-white text-[20px] hover:text-gray-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-pink-400 text-[20px]" : "text-white text-[20px] hover:text-gray-300"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "text-pink-400 text-[20px]" : "text-white text-[20px] hover:text-gray-300"
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/academy"
              className={({ isActive }) =>
                isActive ? "text-pink-400 text-[20px]" : "text-white text-[20px] hover:text-gray-300"
              }
            >
              Academy
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-pink-400 text-[20px]" : "text-white text-[20px] hover:text-gray-300"
              }
            >
              Contact us
            </NavLink>
          </nav>


          {/* Search Icon */}
          <button onClick={toggleSearch} className="text-white hover:text-gray-300 transition text-lg">
            <FaSearch size={20} />
          </button>
        </div>

        {/* Call-to-Action Button */}
        <button className="text-white bg-[#5A3376]  px-8 py-4 rounded-full hover:bg-[#4a2b5e] transition duration-300 shadow-lg text-lg font-semibold">
          Book Now
        </button>
      </div>

      {/* Search Bar */}
      {isSearchVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSearch}></div>

          <div className="fixed top-16 left-0 w-full bg-gray-800 z-50 p-6 shadow-lg search-container">
            <div className="container mx-auto">
              <form onSubmit={handleSearch} className="flex items-center border-b-2 border-white">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
                />
                <button type="button" onClick={toggleSearch} className="text-white hover:text-gray-300 transition ml-4">
                  <FaTimes size={20} />
                </button>
              </form>
              <p className="text-white text-sm mt-2 text-left">Hit enter to search or ESC to close</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;



































// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch, FaTimes } from 'react-icons/fa';

// const Header = () => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleSearch = () => {
//     if (isSearchVisible) {
//       // Reset the search query when closing the search bar
//       setSearchQuery('');
//     }
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle search logic here (e.g., filter services or redirect to a search page)
//     console.log('Search Query:', searchQuery);
//   };

//   // Close search bar on ESC key press
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') {
//         setSearchQuery(''); // Clear the search query
//         setIsSearchVisible(false);
//       }
//     };

//     if (isSearchVisible) {
//       window.addEventListener('keydown', handleKeyDown);
//     }

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isSearchVisible]);

//   // Close search bar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       const searchContainer = document.querySelector('.search-container');
//       if (searchContainer && !searchContainer.contains(e.target)) {
//         setSearchQuery(''); // Clear the search query
//         setIsSearchVisible(false);
//       }
//     };

//     if (isSearchVisible) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSearchVisible]);

//   return (
//     <header className="bg-gray-800 shadow-lg w-full fixed top-0 left-0 z-[10000] py-8">
//       {/* Header Content */}
//       <div className="container mx-auto flex justify-between items-center p-6">
//         {/* Logo */}
//         <div className="text-5xl font-bold text-white font-greatvibes">
//           <Link to="/" className="hover:text-gray-300 transition duration-300">
//             Beauty Mark Saloon & Studio
//           </Link>
//         </div>

//         {/* Navigation Menu, Phone Number, and Search */}
//         <div className="flex items-center space-x-8">
//           <nav className="flex space-x-8">
//             <Link
//               to="/"
//               className="text-white hover:text-gray-300 transition duration-300 text-[20px]">
//               Home
//             </Link>


//             <Link
//               to="/services"
//               className="text-white hover:text-gray-300 transition duration-300 text-[20px]">
//               Services
//             </Link>
            


//             <Link
//               to="/aboutus"
//               className="text-white hover:text-gray-300 transition duration-300 text-[20px]">
//               About US
//             </Link>




//             <Link
//               to="/contact"
//               className="text-white hover:text-gray-300 transition duration-300 text-[20px]">
//               Contact
//             </Link>
//           </nav>

//           {/* Phone Number */}
//           <a
//             href="tel:+16192552591" // Replace with your phone number
//             className="text-white hover:text-gray-300 transition duration-300 text-lg"
//           >
//             (619) 255-2591
//           </a>

//           {/* Search Icon */}
//           <button
//             onClick={toggleSearch}
//             className="text-white hover:text-gray-300 transition duration-300 text-lg"
//           >
//             <FaSearch size={20} />
//           </button>
//         </div>

//         {/* Call-to-Action Button */}
//         <button className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition duration-300 shadow-lg text-lg font-semibold">
//   Book Now
// </button>
//       </div>

//       {/* Search Bar (Below the Header) */}
//       {isSearchVisible && (
//         <>
//           {/* Overlay to Disable Background */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={toggleSearch} // Close search bar when clicking outside
//           ></div>

//           {/* Search Bar and Text Description */}
//           <div className="fixed top-16 left-0 w-full bg-gray-800 z-50 p-6 shadow-lg search-container">
//             <div className="container mx-auto">
//               <form onSubmit={handleSearch} className="flex items-center border-b-2 border-white">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
//                 />
//                 {/* Close Button */}
//                 <button
//                   type="button"
//                   onClick={toggleSearch}
//                   className="text-white hover:text-gray-300 transition duration-300 ml-4"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </form>
//               <p className="text-white text-sm mt-2 text-left">
//                 Hit enter to search or ESC to close
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;