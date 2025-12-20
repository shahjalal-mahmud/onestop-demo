import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, BadgeCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

const About = () => {
  const companyInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Company Name",
      value: "ONE STOP LIQUOR AND WHOLE MARKET",
      description: "Operating under SVK Group LLC"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Established",
      value: "2017",
      description: "Over 7 years of excellence"
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Parent Company",
      value: "SVK GROUP LLC",
      description: "Trusted corporate backing"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageHeader
        title="About Our Company"
        subtitle="Building trust through excellence since 2017"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section */}
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Established in 2017, <span className="font-semibold text-blue-600">ONE STOP LIQUOR AND WHOLE MARKET</span> has 
              built an unwavering reputation for reliability and operational consistency under the esteemed 
              <span className="font-semibold text-purple-600"> SVK Group LLC</span>. We've grown to become a trusted 
              name in the industry through dedication to quality and customer satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
                <p className="text-blue-700">
                  To provide exceptional quality products with consistent reliability, setting new standards 
                  in the liquor and wholesale market.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Our Vision</h3>
                <p className="text-purple-700">
                  To be the leading choice for customers seeking premium quality and unparalleled service 
                  in our industry.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Info Cards */}
        <motion.div 
          {...fadeInUp}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="relative">
              Company Information
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                      <div className="text-blue-600">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          {...fadeInUp}
          className="mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Years of Excellence
            </h3>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/90">
                  7+
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-lg md:text-xl font-semibold bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                  Years in Business
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6">
              <BadgeCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We continue to uphold our founding principles of integrity, quality, and customer-centric 
              service. Every day, we strive to exceed expectations and maintain the trust we've built 
              with our community and partners over the years.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;