import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] pt-28 flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/shop-front.jpg"
          alt="One Stop Liquor & Whole Market"
          className="w-full h-full object-cover"
        />

        {/* Strong Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center mb-6 px-5 py-2 rounded-full 
            bg-black/40 backdrop-blur border border-white/20 
            text-sm tracking-widest text-white uppercase">
            Serving Since 2017 • SVK Group LLC
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
            font-extrabold leading-tight mb-6 text-white">
            One Stop Liquor
            <span className="block mt-2 text-amber-400">
              & Grocery Whole Market
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
            Your neighborhood liquor & grocery destination — offering premium
            spirits, everyday essentials, wholesale pricing, and trusted local
            service.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary CTA */}
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 
                rounded-xl bg-amber-400 text-gray-900 
                font-bold text-lg shadow-lg 
                hover:bg-amber-300 hover:scale-105 
                transition-all duration-300"
            >
              Explore Our Store
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:contact@onestopliquorandwholemart.info"
              className="inline-flex items-center justify-center px-8 py-4 
    rounded-xl border border-white/50 
    text-white font-semibold text-lg 
    backdrop-blur hover:bg-white hover:text-gray-900 
    transition-all duration-300"
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 14l-7 7-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
