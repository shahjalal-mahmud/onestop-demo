import React from 'react';

const Home = () => {
  const keyHighlights = [
    {
      title: "Established in 2017",
      description: "Seven years of continuous operation and community service",
    },
    {
      title: "Retail & Wholesale",
      description: "Comprehensive solutions for both individual and business customers",
    },
    {
      title: "Experienced Management",
      description: "Professionals with deep industry expertise and market knowledge",
    },
    {
      title: "Los Angeles Based",
      description: "Strategically located to serve the Southern California region",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-300">
                SVK GROUP LLC
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              ONE STOP LIQUOR AND WHOLE MARKET
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Serving the community with reliable retail and wholesale solutions since 2017
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="btn btn-primary btn-lg px-8">
                Learn More
              </a>
              <a href="#contact" className="btn btn-outline btn-lg px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Business
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2017 under the SVK GROUP LLC portfolio, ONE STOP LIQUOR AND WHOLE MARKET has established itself as a premier retail and wholesale operation in the greater Los Angeles area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our company specializes in providing comprehensive beverage solutions to both retail customers and wholesale partners, maintaining a reputation for reliability, product excellence, and professional service throughout Southern California.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With seven years of operational stability and management excellence, we continue to expand our offerings while maintaining the highest standards of customer satisfaction and business integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key factors that define our operational excellence and market position
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="card-title text-xl text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Based in Los Angeles, California
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Strategically positioned in one of America's largest and most dynamic markets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Established 2017
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Seven years serving the Southern California community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  California Operations
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Primary Market:</span> Los Angeles Metropolitan Area
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Operating Since:</span> 2017
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Business Type:</span> Retail & Wholesale Distribution
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Parent Company:</span> SVK GROUP LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Discover our company history, management team, operational excellence, 
              and comprehensive business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about" 
                className="btn btn-primary btn-lg px-8 text-white hover:bg-primary/90"
              >
                Learn About Our Company
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline btn-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Get In Touch
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-300">
                ONE STOP LIQUOR AND WHOLE MARKET • SVK GROUP LLC • EST. 2017 • LOS ANGELES, CA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;