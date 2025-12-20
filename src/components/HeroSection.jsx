import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Subtle pattern overlay */}
      <div
        className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      ></div>

      <div className="hero-content text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="mb-6 animate-fade-in">
            <span className="text-sm sm:text-base uppercase tracking-wider text-gray-300 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
              SVK GROUP LLC
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 tracking-tight leading-tight">
            <span className="block mb-2">ONE STOP LIQUOR</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              AND WHOLE MARKET
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 lg:mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto px-4">
            Serving the community with reliable retail and wholesale solutions since 2017
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/about"
              className="btn btn-primary btn-lg px-6 sm:px-8 text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl animate-pulse-slow"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href="#contact"
              className="btn btn-outline btn-lg px-6 sm:px-8 border-white/50 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
