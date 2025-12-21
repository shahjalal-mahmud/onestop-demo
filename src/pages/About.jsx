import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, BadgeCheck, Users, Target, Award, Shield } from "lucide-react";

const About = () => {
  const companyInfo = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Name",
      value: "ONE STOP LIQUOR & WHOLE MARKET",
      description: "Operating under SVK Group LLC"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Established",
      value: "2017",
      description: "Over 7 years of excellence"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Parent Company",
      value: "SVK GROUP LLC",
      description: "Trusted corporate backing"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Los Angeles, California",
      description: "Serving the greater LA area"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Background Section - Matching Hero Section */}
      <section className="relative min-h-[90vh] pt-28 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/front2.jpg"
            alt="One Stop Liquor & Whole Market"
            className="w-full h-full object-cover"
          />
          {/* Strong Readability Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center mb-6 px-5 py-2 rounded-full 
              bg-black/40 backdrop-blur border border-white/20 
              text-sm tracking-widest text-white uppercase">
              About Us • SVK Group LLC
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
              font-extrabold leading-tight mb-6 text-white">
              Our Story
              <span className="block mt-2 text-amber-400">
                & Commitment
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Serving the Los Angeles community since 2017 with premium spirits, 
              everyday essentials, and trusted local service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Our Story Section */}
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto mb-20 lg:mb-28"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 border border-gray-700/50">
            <div className="flex items-center mb-8">
              <div className="w-3 h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Building Trust Since 2017
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              Established in 2017, <span className="font-bold text-amber-400">ONE STOP LIQUOR & WHOLE MARKET</span> has 
              built an unwavering reputation for reliability and operational excellence under the esteemed 
              <span className="font-bold text-amber-300"> SVK Group LLC</span>. We've grown to become a trusted 
              name in the industry through our unwavering dedication to quality, customer satisfaction, 
              and community service.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 mr-4">
                    <Target className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To provide exceptional quality products with consistent reliability, setting new standards 
                  in the liquor and wholesale market while maintaining competitive pricing for our valued customers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 mr-4">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading choice for customers seeking premium quality, unparalleled service, 
                  and a diverse selection of products in our industry throughout Southern California.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Info Cards */}
        <motion.div 
          {...fadeInUp}
          className="mb-20 lg:mb-28"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 mb-6">
              <BadgeCheck className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Information
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {companyInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 hover:border-amber-500/30 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300">
                      <div className="text-amber-400">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-amber-300 mb-3 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 mb-8">
              <Shield className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Commitment to You
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              We continue to uphold our founding principles of integrity, quality, and customer-centric 
              service. Every day, we strive to exceed expectations and maintain the trust we've built 
              with our community and partners over the years. Your satisfaction is our success.
            </p>
            
            <div className="inline-flex items-center justify-center px-8 py-4 
              rounded-xl border border-amber-500 text-amber-400 
              font-semibold text-lg hover:bg-amber-500 hover:text-gray-900 
              transition-all duration-300 cursor-pointer">
              Visit Our Store Today
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;