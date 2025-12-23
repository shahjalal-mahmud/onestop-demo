import React from "react";

const AboutOverview = () => {
  const collections = [
    {
      title: "Premium Liquor",
      description: "Curated selection of fine spirits including whiskey, vodka, tequila, rum, and premium imported brands from around the world.",
      image: "/liquor-collection.jpg",
      color: "from-amber-600/20 to-amber-800/10",
      borderColor: "border-amber-500/30",
      icon: "🥃",
      items: ["Whiskey", "Vodka", "Tequila", "Rum", "Gin", "Brandy"]
    },
    {
      title: "Fine Wines",
      description: "Exclusive collection of red, white, rosé, and sparkling wines from renowned vineyards across California and international regions.",
      image: "/wine-collection.png",
      color: "from-red-600/20 to-red-900/10",
      borderColor: "border-red-500/30",
      icon: "🍷",
      items: ["Red Wines", "White Wines", "Sparkling", "Rosé", "Dessert Wines"]
    },
    {
      title: "Fresh Groceries",
      description: "Quality groceries including fresh produce, dairy, snacks, beverages, and household essentials for your daily needs.",
      image: "/grocery-collection.jpg",
      color: "from-emerald-600/20 to-emerald-800/10",
      borderColor: "border-emerald-500/30",
      icon: "🛒",
      items: ["Fresh Produce", "Dairy", "Snacks", "Beverages", "Pantry Items"]
    }
  ];

  const features = [
    {
      title: "Quality Assurance",
      description: "Every product is carefully selected and quality-checked to ensure premium standards.",
      icon: "✓"
    },
    {
      title: "Wide Selection",
      description: "From everyday essentials to rare finds, we cater to all your liquor and grocery needs.",
      icon: "📦"
    },
    {
      title: "Competitive Pricing",
      description: "Best prices guaranteed for both retail customers and wholesale partners.",
      icon: "💰"
    },
    {
      title: "Local Community",
      description: "Serving the Los Angeles community with pride since 2017.",
      icon: "🤝"
    }
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-5% w-[35rem] h-[35rem] bg-amber-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10% w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-red-500/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-transparent via-white to-transparent" 
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* ENHANCED SECTION HEADER */}
          <div className="text-center mb-12 lg:mb-16 relative">
            {/* Animated Floating Elements */}
            <div className="absolute -top-10 left-10% text-4xl opacity-10 animate-float">🥃</div>
            <div className="absolute -top-5 right-15% text-4xl opacity-10 animate-float-delayed">🍷</div>
            <div className="absolute top-20 left-20% text-4xl opacity-10 animate-float-slower">🛒</div>
            
            <span className="inline-block mb-4 px-5 py-2 rounded-full 
              bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30
              text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase animate-fade-in">
              Premium Selection
            </span>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Your Ultimate{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  One Stop
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent"></span>
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
              Discover our extensive collection of premium liquors, fine wines, and fresh groceries – 
              all under one roof at{" "}
              <span className="font-semibold text-white bg-gradient-to-r from-amber-500/20 to-transparent px-2 py-1 rounded">
                ONE STOP LIQUOR & GROCERY WHOLE MARKET
              </span>
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent 
                  border border-white/10 hover:border-amber-500/30 transition-all duration-300 
                  hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* COLLECTIONS SECTION */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-10 lg:mb-14">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden 
                  bg-gradient-to-br from-gray-900 via-gray-900 to-black
                  border border-gray-800 shadow-2xl
                  hover:shadow-amber-500/20 hover:border-amber-500/40
                  transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-50`} />
                  
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    {/* Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 
                        transition-transform duration-700"
                    />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 text-4xl bg-black/60 backdrop-blur-sm 
                      p-3 rounded-full border border-white/20">
                      {collection.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {collection.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    {/* Items List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {collection.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 
                            text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.07; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite 2s; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 12s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default AboutOverview;