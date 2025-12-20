import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      {/* ───────────── Top Info Bar ───────────── */}
      <div className="hidden lg:block bg-gray-900 text-gray-200 text-sm">
        <div className="container mx-auto flex justify-between items-center py-2">
          <span>📍 Los Angeles, CA • Open Daily 8AM – 10PM</span>
          <a
            href="https://wa.me/15551234567"
            className="flex items-center gap-2 text-green-400 hover:text-green-300"
          >
            <FaWhatsapp />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* ───────────── Main Navbar ───────────── */}
      <nav
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
              <MdLocalGroceryStore className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">
                ONE STOP LIQUOR
              </h1>
              <p className="text-sm text-primary font-semibold">
                & WHOLE MARKET
              </p>
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-gray-700 hover:text-primary"
            >
              <FaPhoneAlt />
              <span className="font-medium">Order Now</span>
            </a>

            <button className="relative">
              <FaShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* ───────────── Mobile Menu ───────────── */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto py-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </NavLink>
              ))}

              <button className="w-full btn btn-primary mt-3">
                <FaPhoneAlt className="mr-2" />
                Call to Order
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ───────────── Categories Bar ───────────── */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto py-3 flex items-center gap-8 text-sm">
          <span className="font-semibold text-gray-900">
            Shop Categories:
          </span>
          {[
            "Beer & Ale",
            "Wine",
            "Spirits",
            "Non-Alcoholic",
            "Offers",
          ].map((cat) => (
            <a
              key={cat}
              href="#"
              className="text-gray-600 hover:text-primary transition"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;