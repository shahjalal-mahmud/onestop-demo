import React from "react";

const CallToAction = () => {
  const trustItems = [
    {
      text: "ONE STOP LIQUOR AND WHOLE MARKET",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      text: "SVK GROUP LLC",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      text: "EST. 2017 • LOS ANGELES, CA",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 xl:py-32 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Simple decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                Premium Service
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Discover More
              </span>
              ?
            </h2>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Explore our premium selection, learn about our journey, and discover 
              how we deliver exceptional value to customers and partners.
            </p>

            {/* Stats - Simplified */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mb-10">
              {[
                { value: "7+ Years", label: "Experience" },
                { value: "500+", label: "Products" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Professional style */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-16 lg:mb-20">
            {/* Primary button */}
            <a
              href="/about"
              className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md hover:shadow-primary/30 flex items-center justify-center gap-3"
            >
              <span>Learn About Us</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secondary button */}
            <a
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 bg-white text-gray-900 font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-3"
            >
              <span>Contact Us</span>
              <svg 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Trust badges - Clean professional style */}
          <div className="pt-12 lg:pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-sm transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-sm lg:text-base font-medium text-gray-900">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional info for supershop */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Premium Beverage Solutions • Retail & Wholesale • Serving Greater Los Angeles
            </p>
            <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Quality Guaranteed
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Competitive Pricing
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Reliable Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;