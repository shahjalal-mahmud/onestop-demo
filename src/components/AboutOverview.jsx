import React from "react";

const AboutOverview = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-[28rem] h-[28rem] bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[24rem] h-[24rem] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <div className="text-center mb-20 lg:mb-28">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full 
              bg-white/10 backdrop-blur border border-white/20
              text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">
              About Us
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Trusted{" "}
              <span className="text-amber-400">Liquor & Wholesale</span>
              <br className="hidden sm:block" /> Partner
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
              Serving our community with quality products, honest pricing, and
              dependable service since 2017.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

            {/* TEXT SIDE */}
            <div className="space-y-8">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Founded under{" "}
                <span className="font-semibold text-white bg-white/10 px-2 py-1 rounded">
                  SVK GROUP LLC
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  ONE STOP LIQUOR & WHOLE MARKET
                </span>{" "}
                has become a reliable destination for premium beverages and
                everyday essentials across the Los Angeles area.
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                From individual customers to wholesale partners, we focus on
                consistency, selection, and service you can trust.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-amber-400 mb-1">
                    7+
                  </div>
                  <div className="text-sm tracking-widest text-gray-400 uppercase">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-amber-400 mb-1">
                    500+
                  </div>
                  <div className="text-sm tracking-widest text-gray-400 uppercase">
                    Products
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* CARD */}
              {[
                {
                  title: "Premium Selection",
                  desc: "Carefully curated liquor, wine, beer, and grocery items from trusted brands.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  ),
                },
                {
                  title: "Trusted Service",
                  desc: "Local, reliable, and customer-first service built over years of experience.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-white/95 p-8 
                  shadow-md hover:shadow-xl transition-all duration-300 
                  hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl 
                      bg-amber-400/15">
                      <svg
                        className="h-7 w-7 text-amber-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="relative">
            <div className="relative max-w-4xl mx-auto rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              px-8 sm:px-12 py-10 text-center shadow-lg">
              
              <div className="inline-flex items-center justify-center w-14 h-14 
                rounded-full bg-amber-400/20 mb-6">
                <svg
                  className="w-7 h-7 text-amber-400"
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

              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                We continue to grow with integrity, strong management, and a
                commitment to delivering the best experience to every customer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOverview;