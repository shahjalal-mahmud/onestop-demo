import React from "react";
import { ChevronRight, Mail, Phone, MapPin, Shield, Award, Truck } from "lucide-react";

const CallToAction = () => {
  const trustItems = [
    {
      text: "ONE STOP LIQUOR & WHOLE MARKET",
      icon: <Shield className="w-6 h-6" />,
      description: "Premium liquor & wholesale destination"
    },
    {
      text: "SVK GROUP LLC",
      icon: <Award className="w-6 h-6" />,
      description: "Trusted corporate backing since 2017"
    },
    {
      text: "LOS ANGELES, CALIFORNIA",
      icon: <MapPin className="w-6 h-6" />,
      description: "Serving the greater LA area"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-[40rem] h-[40rem] bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-16 lg:mb-20">
            {/* Section badge */}
            <span className="inline-block mb-6 px-5 py-2 rounded-full 
              bg-white/10 backdrop-blur border border-white/20
              text-sm tracking-widest text-amber-400 uppercase">
              Discover More
            </span>

            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Ready To{" "}
              <span className="text-amber-400">Experience Excellence</span>
              ?
            </h2>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed mb-12">
              Explore our premium selection, learn about our journey of trust and reliability, 
              and discover how we deliver exceptional value to customers and wholesale partners.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
              {[
                { value: "7+ Years", label: "Of Excellence", icon: <Award className="w-5 h-5" /> },
                { value: "500+", label: "Premium Products", icon: <Shield className="w-5 h-5" /> },
                { value: "24/7", label: "Customer Support", icon: <Truck className="w-5 h-5" /> }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 
                    border border-gray-800 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="text-amber-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-20 lg:mb-24">
            {/* Primary button */}
            <a
              href="/about"
              className="group w-full sm:w-auto px-10 py-5 lg:px-12 lg:py-6 
                bg-gradient-to-r from-amber-500 to-amber-600 
                text-gray-900 font-bold text-lg rounded-2xl 
                hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 
                hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <span>Explore Our Story</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary button */}
            <a
              href="mailto:hr@onestopliquorandwholemart.info"
              className="group w-full sm:w-auto px-10 py-5 lg:px-12 lg:py-6 
                bg-transparent text-white font-semibold text-lg rounded-2xl 
                border-2 border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 
                transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <span>Contact Our Team</span>
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* TRUST BADGES */}
          <div className="pt-16 lg:pt-20 border-t border-gray-800/50">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Trusted By The Community
              </span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                    border border-gray-800 hover:border-amber-500/40 transition-all duration-500 
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 
                      group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                      <div className="text-amber-400">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                      {item.text}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* Phone */}
              <a
                href="tel:3232927591"
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                  border border-gray-800 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-lg font-semibold text-white mb-2">
                    +1 323-292-7591
                  </span>
                  <span className="text-sm text-gray-400">
                    Call to Order
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                border border-gray-800">
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-white mb-2">
                    7AM - 11PM
                  </span>
                  <span className="text-sm text-gray-400">
                    Daily Store Hours
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 
                border border-gray-800">
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-lg font-semibold text-white mb-2">
                    Los Angeles
                  </span>
                  <span className="text-sm text-gray-400">
                    California, USA
                  </span>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-gray-800/50">
              <p className="text-gray-400 text-lg">
                Premium Liquor • Wholesale Solutions • Community Trust
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  Quality Guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  Competitive Wholesale Pricing
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  Reliable Local Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;