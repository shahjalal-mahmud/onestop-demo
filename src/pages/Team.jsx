import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Sparkles,
  Target,
  Shield,
  Mail,
  Phone
} from "lucide-react";

const Team = () => {
  const [imageErrors, setImageErrors] = useState({});

  const teamMembers = [
    {
      name: "ABDULLAH AL RIAN",
      role: "Business & Management Information System Analyst",
      department: "Executive Leadership",
      bio: "With deep expertise in business systems and management analytics, Abdullah drives our strategic digital transformation and operational excellence initiatives.",
      experience: "8+ years in Business Systems Analysis",
      education: "MS, Management Information Systems",
      image: "/team/operations.jpg",
      joinDate: "Founding Member",
      initials: "AR",
      specialties: ["Business Analytics", "System Architecture", "Strategic Planning"],
      email: "abdullah@onestopliquor.com"
    },
    {
      name: "POOJAN VACHHANI",
      role: "Managing Director",
      department: "Operations & Strategic Leadership",
      bio: "Leading our operations with visionary strategy, Poojan ensures seamless business processes and sustainable growth across all divisions.",
      experience: "10+ years in Executive Management",
      education: "MBA, Strategic Leadership",
      image: "/team/customer.png",
      joinDate: "2018",
      initials: "PV",
      specialties: ["Operations Management", "Business Development", "Team Leadership"],
      email: "poojan@onestopliquor.com"
    },
    {
      name: "DARSHAN KUMAR",
      role: "Senior Operations Executive",
      department: "Customer Experience & Service Excellence",
      bio: "Dedicated to exceptional customer service, Darshan focuses on building lasting relationships and ensuring premium experiences for all clients.",
      experience: "7+ years in Customer Relations",
      education: "BS, Business Administration",
      image: "/team/ceo.jpg",
      joinDate: "2019",
      initials: "DK",
      specialties: ["Customer Service", "Client Relations", "Service Optimization"],
      email: "darshan@onestopliquor.com"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Background Section */}
      <section className="relative min-h-[70vh] pt-28 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/front2.jpg"
            alt="Our Team - One Stop Liquor & Whole Market"
            className="w-full h-full object-cover"
          />
          {/* Strong Readability Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mb-6 px-5 py-2 rounded-full 
                bg-black/40 backdrop-blur border border-amber-500/30 
                text-sm tracking-widest text-white uppercase"
            >
              <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
              Leadership Team • SVK Group LLC
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 
                font-extrabold leading-tight mb-6 text-white"
            >
              Our Leadership
              <span className="block mt-2 text-amber-400">
                Team
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Meet the dedicated professionals who drive our success and maintain 
              our commitment to excellence in service and quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Team Grid */}
        <motion.div
          {...fadeInUp}
          className="mb-20 lg:mb-28"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 mb-6">
              <Users className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership Team
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
            {teamMembers.map((member, index) => {
              const showInitials = imageErrors[index] || !member.image;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl 
                    overflow-hidden h-full border border-gray-700/50 
                    hover:border-amber-500/30 transition-all duration-500 
                    hover:-translate-y-2 hover:shadow-2xl">
                    
                    {/* Profile Image Section */}
                    <div className="h-64 relative overflow-hidden bg-gradient-to-br from-amber-500/5 to-amber-600/5">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
                      
                      {!showInitials ? (
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={() => handleImageError(index)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-8">
                          <div className="text-center relative z-20">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 
                              mx-auto mb-6 flex items-center justify-center shadow-2xl 
                              border-4 border-amber-500/30 group-hover:border-amber-500/50 transition-all duration-300">
                              <span className="text-white text-5xl font-bold">
                                {member.initials}
                              </span>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                              <p className="text-sm text-amber-300 font-semibold">
                                Executive Profile
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Profile Content */}
                    <div className="p-6 md:p-8">
                      <div className="mb-6">
                        {/* Department Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full 
                          bg-amber-500/10 border border-amber-500/20 mb-4">
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                            {member.department}
                          </span>
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-lg font-semibold text-amber-400 mb-4">
                          {member.role}
                        </p>
                        
                        {/* Bio */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {member.bio}
                        </p>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-xs font-medium rounded-full 
                                bg-gray-800/50 text-gray-300 border border-gray-700/50 
                                hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 
                                transition-all duration-300"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="pt-6 border-t border-gray-700/50">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10">
                              <Briefcase className="w-4 h-4 text-amber-400" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Experience</p>
                              <p className="text-sm text-white font-medium">{member.experience}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10">
                              <GraduationCap className="w-4 h-4 text-amber-400" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Education</p>
                              <p className="text-sm text-white font-medium">{member.education}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-500/10">
                              <Calendar className="w-4 h-4 text-amber-400" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Member Since</p>
                              <p className="text-sm text-white font-medium">{member.joinDate}</p>
                            </div>
                          </div>

                          {member.email && (
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-amber-500/10">
                                <Mail className="w-4 h-4 text-amber-400" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">Contact</p>
                                <p className="text-sm text-white font-medium">{member.email}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Team;