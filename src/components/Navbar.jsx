import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocalGroceryStore, MdLocalOffer, MdWineBar } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: <MdLocalGroceryStore className="w-4 h-4" /> },
    { to: "/about", label: "About Us", icon: <MdWineBar className="w-4 h-4" /> },
    { to: "/team", label: "Our Team", icon: <FaShoppingCart className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <FaPhoneAlt className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt className="w-3 h-3" />, text: "(555) 123-4567", href: "tel:5551234567" },
    { icon: <FaMapMarkerAlt className="w-3 h-3" />, text: "Los Angeles, CA", href: "#location" },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                >
                  {info.icon}
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Open: Mon-Sun 8AM-10PM</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <NavLink 
                to="/" 
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <MdLocalGroceryStore className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900 tracking-tight">
                    ONE STOP
                  </span>
                  <span className="text-sm font-semibold text-primary -mt-1">
                    LIQUOR & WHOLE MARKET
                  </span>
                </div>
              </NavLink>
              
              {/* Special Offer Badge */}
              <div className="hidden lg:block relative">
                <div className="absolute -top-2 -right-2">
                  <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                    HOT DEALS
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <MdLocalOffer className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Daily Offers</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => 
                      `flex items-center gap-2 font-medium transition-all duration-200 group relative ${
                        isActive 
                          ? 'text-primary' 
                          : 'text-gray-700 hover:text-primary'
                      }`
                    }
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {link.icon}
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </NavLink>
                ))}
              </div>
              
              {/* Call to Action Button */}
              <div className="flex items-center gap-4">
                <div className="w-px h-6 bg-gray-200"></div>
                <button className="btn btn-primary btn-sm rounded-full px-6 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg group">
                  <FaPhoneAlt className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Order Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden btn btn-ghost btn-square hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-gray-700" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <div className={`p-2 rounded-lg ${link.to === "/" ? 'bg-primary/10' : 'bg-gray-100'}`}>
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </NavLink>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="space-y-3 px-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {info.icon}
                        </div>
                        <span>{info.text}</span>
                      </a>
                    ))}
                    
                    <button className="w-full btn btn-primary mt-2 rounded-lg">
                      <FaPhoneAlt className="w-4 h-4 mr-2" />
                      Call to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cart Button (Mobile Only) */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button className="btn btn-primary btn-circle shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 animate-bounce">
            <FaShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>

      {/* Shopping Categories Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <span className="font-semibold text-gray-900">Shop Categories:</span>
              <div className="flex items-center gap-6">
                {['Beer & Ale', 'Wine Collection', 'Spirits', 'Non-Alcoholic', 'Special Offers'].map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors duration-200 relative group"
                  >
                    {category}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2">
                  <FaShoppingCart className="w-4 h-4" />
                  <span className="font-medium">Cart</span>
                  <span className="badge badge-primary badge-sm">3</span>
                </div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-72 p-2 shadow-lg bg-white mt-3">
                  <div className="card-body">
                    <span className="font-bold text-lg">Shopping Cart</span>
                    <span className="text-info">3 items</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-sm btn-block">View Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;