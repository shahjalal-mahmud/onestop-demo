import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            ONE STOP LIQUOR
          </h3>
          <p className="text-primary font-semibold mb-4">
            & WHOLE MARKET
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            A trusted retail and wholesale destination serving the community
            with quality products and reliable service since 2017.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Information
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Los Angeles, CA, USA</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a
                href="mailto:hr@onestopliquorandwholemart.info"
                className="hover:text-white transition"
              >
                hr@onestopliquorandwholemart.info
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {["Home", "About Us", "Our Team", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-primary transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} ONE STOP LIQUOR AND WHOLE MARKET
          </span>
          <span>
            A business of <span className="text-gray-200 font-medium">SVK GROUP LLC</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
