import React from "react";

const KeyHighlights = () => {
  const keyHighlights = [
    {
      title: "Established in 2017",
      description: "Seven years of continuous operation and trusted community service",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745" />
        </svg>
      )
    },
    {
      title: "Retail & Wholesale",
      description: "Serving both individual customers and business partners",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v13h14V7" />
        </svg>
      )
    },
    {
      title: "Experienced Management",
      description: "Industry professionals with deep operational expertise",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857" />
        </svg>
      )
    },
    {
      title: "Los Angeles Based",
      description: "Strategically located in Southern California",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Company <span className="text-primary">Highlights</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Key pillars that define our growth, reliability, and reputation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {keyHighlights.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <span className="mt-6 text-xs font-semibold tracking-wider text-primary uppercase">
                  Feature 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;