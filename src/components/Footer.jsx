import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { Shield, Award, Users, Truck } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const businessInfo = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Licensed & Insured",
      description: "Fully licensed liquor retailer"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Est. 2017",
      description: "7+ years of excellence"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Trusted Partner",
      description: "Retail & wholesale solutions"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Local Delivery",
      description: "Serving greater LA area"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

      {/* Ambient glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      {/* Top border decoration */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Business Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {businessInfo.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                  border border-gray-800 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 
                    group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                    <div className="text-amber-400">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">

            {/* Brand Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  ONE STOP LIQUOR
                </h2>
                <p className="text-lg font-semibold text-amber-400">
                  & GROCERY WHOLE MART
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                A premium liquor and wholesale destination serving the Los Angeles community
                with exceptional quality, reliable service, and competitive pricing since 2017.
              </p>

              {/* Hours */}
              <div className="flex items-center gap-3 text-gray-400 mb-4">
                <FaClock className="text-amber-400" />
                <span className="text-sm">Open Daily: 7:00 AM – 11:00 PM</span>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 relative">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              </h4>

              <ul className="space-y-6">
                <li>
                  <a
                    href="https://maps.app.goo.gl/2VCLBh9Qc9j3TpJX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 
        group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                      <FaMapMarkerAlt className="text-amber-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Our Location</h5>
                      <p className="text-gray-400">5028 Normandie Ave</p>
                      <p className="text-gray-400">Los Angeles, CA 90037</p>
                      <p className="text-gray-400">United States</p>
                      <span className="text-amber-400/80 text-sm mt-1 inline-flex items-center gap-1">
                        Get Directions
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:3232927591"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 
                      group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                      <FaPhoneAlt className="text-amber-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Phone Number</h5>
                      <p className="text-gray-400 text-lg">+1 323-293-6838</p>
                      <span className="text-amber-400/80 text-sm mt-1 inline-block">
                        Call to Order • 24/7 Wholesale Support
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:hr@onestopliquorandwholemart.info"
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 
                      group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                      <FaEnvelope className="text-amber-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Email Address</h5>
                      <p className="text-gray-400">hr@onestopliquorandwholemart.info</p>
                      <span className="text-amber-400/80 text-sm mt-1 inline-block">
                        Business Inquiries • Partnerships
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links & Business Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              </h4>

              <ul className="grid grid-cols-2 gap-4 mb-10">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="flex items-center gap-3 p-3 rounded-lg 
                        text-gray-400 hover:text-white hover:bg-gray-800/50 
                        transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400/50 
                        group-hover:bg-amber-400 transition-all duration-300" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Parent Company Info */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                border border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-600/10">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <h5 className="font-bold text-white">Parent Company</h5>
                </div>
                <p className="text-amber-400 font-semibold text-lg mb-2">
                  SVK GROUP LLC
                </p>
                <p className="text-gray-400 text-sm">
                  A trusted name in retail and wholesale operations,
                  providing corporate backing and operational excellence since 2017.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 mb-2">
                  © {new Date().getFullYear()} ONE STOP LIQUOR & GROCERY WHOLE MART
                </p>
                <p className="text-gray-500 text-sm">
                  A premium business of{" "}
                  <span className="text-amber-400 font-semibold">SVK GROUP LLC</span>
                  {" • "}All rights reserved.
                </p>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Premium Liquor Retailer
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  California Licensed
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Wholesale Available
                </span>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-800/30">
              <p className="text-gray-600 text-xs text-center">
                ONE STOP LIQUOR & WHOLE MARKET operates under SVK GROUP LLC. All products are sold
                in compliance with California state laws. Must be 21+ to purchase alcoholic beverages.
                Drink responsibly.
              </p>
            </div>
            
            {/* Developer Credit */}
            <div className="mt-8 pt-6 border-t border-gray-800/30 text-center">
              <p className="text-gray-600 text-sm">
                Developed by{" "}
                <a
                  href="https://appriyo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Appriyo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;