import React from "react";

const LocationSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gray-50 overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left content */}
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Our Presence
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
              Strategic <span className="text-primary">Location</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Located in Los Angeles, we operate at the heart of one of the most
              dynamic beverage markets in the United States.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Los Angeles, California",
                  text: "Access to major transport routes and diverse customer segments."
                },
                {
                  title: "Established 2017",
                  text: "Seven years of trusted service and steady growth."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right info card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-8">
              California Operations
            </h3>

            <div className="space-y-5">
              {[
                ["Primary Market", "Los Angeles Area"],
                ["Operating Since", "2017"],
                ["Business Type", "Retail & Wholesale"],
                ["Parent Company", "SVK GROUP LLC"],
                ["Service Region", "Southern California"],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-300">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-300">
              Mon–Sat: 8AM–10PM • Sun: 10AM–8PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;