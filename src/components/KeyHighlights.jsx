import React from 'react';

const KeyHighlights = () => {
  const keyHighlights = [
    {
      title: "Established in 2017",
      description: "Seven years of continuous operation and community service",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Retail & Wholesale",
      description: "Comprehensive solutions for both individual and business customers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Experienced Management",
      description: "Professionals with deep industry expertise and market knowledge",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Los Angeles Based",
      description: "Strategically located to serve the Southern California region",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Company <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Key factors that define our operational excellence and market position
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {keyHighlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-sm group-hover:blur-md opacity-0 group-hover:opacity-100"></div>
              
              <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10 h-full">
                <div className="card-body p-6 sm:p-8 items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {highlight.icon}
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900/10 mb-2 absolute -top-2 right-4">
                    0{index + 1}
                  </div>
                  
                  <h3 className="card-title text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Feature
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;