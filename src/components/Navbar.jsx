import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      {scrolled && (
        <div className="hidden lg:block bg-gray-900 text-gray-200 text-sm fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <span>Los Angeles, CA • Open Daily 8AM – 10PM</span>
            <a
              href="https://wa.me/3232927591"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled
            ? "top-8 bg-white/90 backdrop-blur border-b border-gray-200 shadow-md"
            : "top-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="One Stop Liquor Logo"
              className={`w-10 h-10 object-contain transition ${
                scrolled
                  ? ""
                  : "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              }`}
            />
            <div className="leading-tight">
              <h1
                className={`font-bold text-lg transition ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                ONE STOP LIQUOR
              </h1>
              <p
                className={`text-sm font-semibold transition ${
                  scrolled ? "text-amber-500" : "text-amber-400"
                }`}
              >
                LIQUOR MARKET WHOLE MART
              </p>
            </div>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition ${
                    scrolled
                      ? isActive
                        ? "text-amber-500"
                        : "text-gray-700 hover:text-amber-500"
                      : isActive
                      ? "text-amber-400"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:3232927591"
              className={`flex items-center gap-2 font-medium transition ${
                scrolled
                  ? "text-gray-700 hover:text-amber-500"
                  : "text-white hover:text-amber-400"
              }`}
            >
              <FaPhoneAlt />
              Order Now
            </a>

            <button className="relative">
              <FaShoppingCart
                className={`w-5 h-5 transition ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              />
              <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto py-4 space-y-2 px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 font-medium"
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href="tel:3232927591"
                className="flex items-center justify-center gap-2 w-full 
                  bg-amber-400 text-gray-900 py-3 rounded-lg 
                  font-bold mt-3 hover:bg-amber-300 transition"
              >
                <FaPhoneAlt />
                Call to Order
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;