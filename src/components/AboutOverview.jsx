import React from "react";

const AboutOverview = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 xl:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                About Us
              </span>
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Business</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0"></span>
              </span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                A trusted retail and wholesale partner delivering quality,
                reliability, and excellence since 2017.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20 lg:mb-24">
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed sm:leading-loose">
                  Founded in 2017 under the{" "}
                  <span className="font-semibold text-gray-900 bg-primary/5 px-1 py-0.5 rounded">
                    SVK GROUP LLC
                  </span>{" "}
                  portfolio,{" "}
                  <span className="font-semibold text-gray-900">
                    ONE STOP LIQUOR AND WHOLE MARKET
                  </span>{" "}
                  has grown into a respected retail and wholesale operation serving
                  the greater Los Angeles area.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed sm:leading-loose">
                  We specialize in comprehensive beverage solutions for both
                  individual customers and wholesale partners, focusing on
                  consistent quality, competitive pricing, and dependable service.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">7+</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Products Available
                  </div>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                      <svg
                        className="h-7 w-7 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Premium Selection
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        A wide variety of trusted and high-quality products curated for discerning customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative rounded-xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                      <svg
                        className="h-7 w-7 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Trusted Service
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Consistently reliable service and support since 2017, building lasting relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
            <div className="relative max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 lg:p-12 border border-gray-100 shadow-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed sm:leading-loose">
                  With years of operational excellence and strong management
                  practices, we continue to grow while maintaining the highest
                  standards of integrity, service, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;