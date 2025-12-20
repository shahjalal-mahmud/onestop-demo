import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Our Presence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                  Strategic <span className="text-primary">Location</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Based in Los Angeles, California
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Strategically positioned in one of America's largest and most dynamic markets, 
                      providing easy access to major transportation routes and diverse customer base.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Established 2017
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Seven years of dedicated service to the Southern California community, 
                      building strong relationships and a reputation for excellence in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full translate-y-20 -translate-x-20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    California Operations
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 font-medium">Primary Market</span>
                      <span className="text-white font-semibold">Los Angeles Area</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 font-medium">Operating Since</span>
                      <span className="text-white font-semibold">2017</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 font-medium">Business Type</span>
                      <span className="text-white font-semibold">Retail & Wholesale</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 font-medium">Parent Company</span>
                      <span className="text-white font-semibold">SVK GROUP LLC</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-300 font-medium">Service Region</span>
                      <span className="text-white font-semibold">Southern California</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Mon-Sat: 8AM-10PM | Sun: 10AM-8PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;