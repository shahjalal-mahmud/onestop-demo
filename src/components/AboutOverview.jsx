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
              Premium Selection
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Discover Our{" "}
              <span className="text-amber-400">Premium Collections</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
              Explore our carefully curated selection of premium spirits, wines, and beverages from world-renowned brands.
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
                offers an extensive collection of premium beverages sourced from
                around the world, ensuring quality and authenticity in every bottle.
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Whether you're looking for rare spirits, fine wines, or popular beers,
                our expert team selects only the best for our valued customers.
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
                    Premium Products
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT IMAGES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* LIQUOR CARD */}
              <div
                className="group relative rounded-2xl overflow-hidden 
                bg-gradient-to-br from-gray-900 to-black p-1
                shadow-xl hover:shadow-2xl transition-all duration-500 
                hover:-translate-y-2"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden rounded-xl">
                  {/* Product Image */}
                  <img
                    src="/liquor-collection.jpg" // Replace with your actual image path
                    alt="Premium Liquor Collection"
                    className="w-full h-full object-cover group-hover:scale-110 
                      transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Premium Liquor
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Curated selection of fine spirits including whiskey, vodka,
                      tequila, and premium imported brands.
                    </p>
                  </div>
                </div>
              </div>

              {/* WINE CARD */}
              <div
                className="group relative rounded-2xl overflow-hidden 
                bg-gradient-to-br from-gray-900 to-black p-1
                shadow-xl hover:shadow-2xl transition-all duration-500 
                hover:-translate-y-2"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden rounded-xl">
                  {/* Product Image */}
                  <img
                    src="/wine-collection.png"
                    alt="Fine Wine Selection"
                    className="w-full h-full object-cover group-hover:scale-110 
                      transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Fine Wines
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Exclusive collection of red, white, and sparkling wines
                      from renowned vineyards worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADDITIONAL FEATURES SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* FEATURE 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 
              border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Quality Guaranteed</h3>
              </div>
              <p className="text-gray-400">
                Every product is carefully selected and verified for authenticity
                and quality assurance.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 
              border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Best Prices</h3>
              </div>
              <p className="text-gray-400">
                Competitive pricing with special wholesale rates for businesses
                and bulk purchases.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 
              border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Fast Delivery</h3>
              </div>
              <p className="text-gray-400">
                Quick and reliable delivery service across Los Angeles area.
                Order online or visit our store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;