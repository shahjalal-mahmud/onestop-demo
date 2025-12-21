import React from "react";
import { MapPin, Calendar, Truck, Users } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="relative py-4 sm:py-6 lg:py-8 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <div className="text-center mb-8 lg:mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full 
              bg-white/10 backdrop-blur border border-white/20
              text-xs font-semibold tracking-[0.3em] text-amber-400 uppercase">
              Strategic Location
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Serving The Heart Of{" "}
              <span className="text-amber-400">Los Angeles</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
              Strategically located in one of the most dynamic beverage markets, 
              serving retail customers and wholesale partners across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
            {/* LEFT CONTENT - Feature Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Los Angeles, California",
                  description: "Prime location with access to major transport routes, diverse customer segments, and thriving business districts.",
                  bgColor: "from-amber-400/10 to-amber-500/5",
                  borderColor: "border-amber-400/20"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Established Since 2017",
                  description: "Seven years of trusted service, steady growth, and building lasting relationships with our community.",
                  bgColor: "from-amber-500/10 to-amber-600/5",
                  borderColor: "border-amber-500/20"
                },
                {
                  icon: <Truck className="w-6 h-6" />,
                  title: "Convenient Access",
                  description: "Easy access from major freeways with ample parking and delivery services for wholesale partners.",
                  bgColor: "from-amber-600/10 to-amber-700/5",
                  borderColor: "border-amber-600/20"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community Focused",
                  description: "Deeply rooted in the LA community, understanding local preferences and market trends.",
                  bgColor: "from-amber-700/10 to-amber-800/5",
                  borderColor: "border-amber-700/20"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${item.bgColor} 
                    border ${item.borderColor} hover:border-amber-400/40 
                    transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 
                      group-hover:from-amber-400/30 group-hover:to-amber-500/20 transition-all duration-300">
                      <div className="text-amber-400">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT INFO CARD */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-800/50
                hover:border-amber-500/30 transition-all duration-500">
                
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br 
                  from-amber-400 to-amber-600 rounded-2xl -rotate-12 opacity-20 blur-sm" />
                
                <h3 className="text-3xl font-bold text-white mb-10 relative z-10">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    California Operations
                  </span>
                </h3>

                <div className="space-y-6">
                  {[
                    ["Primary Market", "Los Angeles Metropolitan Area"],
                    ["Operating Since", "2017"],
                    ["Business Type", "Retail & Wholesale Liquor"],
                    ["Parent Company", "SVK GROUP LLC"],
                    ["Service Region", "All Southern California"],
                    ["Store Hours", "Daily: 8:00 AM – 10:00 PM"],
                  ].map(([label, value], i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-gray-800/50 
                      last:border-0 group">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {label}
                      </span>
                      <span className="font-bold text-white text-lg">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="mt-10 pt-8 border-t border-gray-800/50">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-amber-400 mb-2">
                        7+
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">
                        Years Serving LA
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-amber-400 mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">
                        Wholesale Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br 
                from-amber-500/10 to-transparent rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;