import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

      <div
        className='absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      ></div>

      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="mb-6">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
              Get Started
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-primary">Learn More</span>?
          </h2>

          <p className="text-lg sm:text-xl mb-8 lg:mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Discover our company history, management team, operational excellence,
            and comprehensive business solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
            <a
              href="/about"
              className="btn btn-primary btn-lg px-6 sm:px-8 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span className="flex items-center gap-3">
                Learn About Our Company
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="/contact"
              className="btn btn-outline btn-lg px-6 sm:px-8 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                Get In Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="pt-8 lg:pt-12 border-t border-gray-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-300">

              {[
                'ONE STOP LIQUOR AND WHOLE MARKET',
                'SVK GROUP LLC',
                'EST. 2017 • LOS ANGELES, CA',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">{text}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;