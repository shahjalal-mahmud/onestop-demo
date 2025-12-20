import React from 'react';

const AboutOverview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Our <span className="text-primary">Business</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <p className="text-lg text-gray-700 leading-relaxed relative">
                  Founded in 2017 under the SVK GROUP LLC portfolio, <span className="font-semibold text-gray-900">ONE STOP LIQUOR AND WHOLE MARKET</span> has established itself as a premier retail and wholesale operation in the greater Los Angeles area.
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our company specializes in providing comprehensive beverage solutions to both retail customers and wholesale partners, maintaining a reputation for reliability, product excellence, and professional service throughout Southern California.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Premium Selection</h3>
                      <p className="text-sm text-gray-600">Wide variety of quality products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Trusted Service</h3>
                      <p className="text-sm text-gray-600">Reliable since 2017</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              With seven years of operational stability and management excellence, we continue to expand our offerings while maintaining the highest standards of customer satisfaction and business integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;