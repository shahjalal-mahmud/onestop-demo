import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaClock,
  FaStore,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOrderClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Our Team" },
  ];

  return (
    <>
      {/* Order Unavailable Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-fadeIn">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                <FaShoppingCart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ordering Unavailable
              </h3>
              <p className="text-gray-600 mb-6">
                Online ordering is not available at the moment.
                Please visit our physical store or contact us for inquiries.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Got It
                </button>
                <a
                  href="https://maps.app.goo.gl/1CzZUigZGggpzdq47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  <FaMapMarkerAlt />
                  Find Store
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP INFO BAR - Only show on desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-900 to-black text-gray-200 text-sm fixed top-0 w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/1CzZUigZGggpzdq47"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-amber-400 transition-colors group"
              >
                <FaMapMarkerAlt className="text-amber-400 group-hover:scale-110 transition-transform" />
                Los Angeles, CA
              </a>
              <span className="flex items-center gap-1">
                <FaClock className="text-amber-400" />
                Open Daily 7AM – 11PM
              </span>
            </div>
            <a
              href="https://maps.app.goo.gl/1CzZUigZGggpzdq47"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <FaStore />
              Visit Our Store
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "lg:top-10 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "lg:top-10 bg-gradient-to-b from-black/90 to-transparent"
        } top-0 bg-gray-900 lg:bg-transparent`}
        style={{ width: '100vw', maxWidth: '100%' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LOGO */}
            <NavLink 
              to="/" 
              className="flex items-center gap-3 flex-shrink-0"
              onClick={() => setOpen(false)}
            >
              <img
                src="/logo.png"
                alt="One Stop Liquor Logo"
                className={`w-14 h-14 object-contain transition-all duration-300 ${
                  scrolled
                    ? ""
                    : "lg:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                }`}
              />
              <div className="hidden sm:block leading-tight">
                <h1
                  className={`font-bold text-lg transition-colors duration-300 ${
                    scrolled ? "text-gray-900" : "lg:text-white text-white"
                  }`}
                >
                  ONE STOP LIQUOR
                </h1>
                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    scrolled ? "text-amber-600" : "lg:text-amber-400 text-amber-400"
                  }`}
                >
                  LIQUOR & GROCERY WHOLE MART
                </p>
              </div>
            </NavLink>

            {/* DESKTOP NAVIGATION - Center aligned */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-medium text-sm uppercase tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${
                        scrolled
                          ? isActive
                            ? "text-amber-600 after:w-full"
                            : "text-gray-700 hover:text-amber-600"
                          : isActive
                          ? "text-amber-400 after:w-full"
                          : "text-white/90 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* DESKTOP ACTIONS - Right side */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              <button
                onClick={handleOrderClick}
                className={`flex items-center gap-2 font-medium transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
              >
                <FaPhoneAlt className="flex-shrink-0" />
                <span className="whitespace-nowrap">Order Now</span>
              </button>

              <button 
                className="relative group"
                onClick={handleOrderClick}
              >
                <FaShoppingCart
                  className={`w-6 h-6 transition-colors duration-300 cursor-pointer ${
                    scrolled ? "text-gray-700 group-hover:text-amber-600" : "text-white group-hover:text-amber-400"
                  }`}
                />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className={`lg:hidden transition-colors duration-300 z-50 ${
                scrolled || open ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {open && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="lg:hidden fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-gray-900 to-black shadow-2xl z-50 overflow-y-auto animate-slideIn">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <NavLink 
                    to="/" 
                    className="flex items-center gap-3"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src="/logo.png"
                      alt="One Stop Liquor Logo"
                      className="w-10 h-10 object-contain"
                    />
                    <div className="leading-tight">
                      <h1 className="font-bold text-lg text-white">
                        ONE STOP LIQUOR
                      </h1>
                      <p className="text-sm font-semibold text-amber-400">
                        LIQUOR MARKET WHOLE MART
                      </p>
                    </div>
                  </NavLink>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 p-6 space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium transition-colors ${
                          isActive
                            ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-500"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="p-6 border-t border-gray-800 space-y-4">
                  <div className="space-y-3">
                    <button
                      onClick={(e) => {
                        setOpen(false);
                        handleOrderClick(e);
                      }}
                      className="flex items-center justify-center gap-3 w-full 
                        bg-amber-500 text-gray-900 py-3 rounded-lg 
                        font-bold hover:bg-amber-400 transition-colors cursor-pointer"
                    >
                      <FaPhoneAlt />
                      Call to Order
                    </button>
                    
                    <a
                      href="https://maps.app.goo.gl/1CzZUigZGggpzdq47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full 
                        bg-gray-800 text-white py-3 rounded-lg 
                        font-bold hover:bg-gray-700 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <FaStore />
                      Visit Our Store
                      <FaExternalLinkAlt className="text-xs ml-1" />
                    </a>
                  </div>
                  
                  <div className="text-center text-gray-400 text-sm pt-4 border-t border-gray-800">
                    <a
                      href="https://maps.app.goo.gl/1CzZUigZGggpzdq47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 mb-2 hover:text-white transition-colors group"
                      onClick={() => setOpen(false)}
                    >
                      <FaMapMarkerAlt className="text-amber-400" />
                      Los Angeles, CA
                      <FaExternalLinkAlt className="text-xs opacity-70 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <p className="flex items-center justify-center gap-2">
                      <FaClock className="text-amber-400" />
                      Open Daily 7AM – 11PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Add animations */}
      <style jsx="true">{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;