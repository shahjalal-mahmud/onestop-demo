import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";

const Team = () => {
  const [imageErrors, setImageErrors] = useState({});

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "With over 15 years of retail management experience, Michael leads our strategic vision and ensures operational excellence across all locations.",
      experience: "15+ years in Retail Management",
      education: "MBA, Business Administration",
      image: "/team/ceo.jpg",
      joinDate: "Founding Member",
      initials: "MR"
    },
    {
      name: "Hussain Ali",
      role: "Operations Director",
      department: "Operations & Logistics",
      bio: "Sarah oversees daily operations, inventory management, and ensures efficient supply chain processes for our retail and wholesale divisions.",
      experience: "12+ years in Supply Chain Management",
      education: "BS, Operations Management",
      image: "/team/operations.jpg",
      joinDate: "2018",
      initials: "SC"
    },
    {
      name: "David Wilson",
      role: "Customer Relations Manager",
      department: "Customer Service",
      bio: "David leads our customer service team, focusing on building lasting relationships with both retail customers and wholesale partners.",
      experience: "10+ years in Customer Service Leadership",
      education: "BA, Business Communications",
      image: "/team/customer.png",
      joinDate: "2019",
      initials: "DW"
    }
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <PageHeader
        title="Our Leadership Team"
        subtitle="Meet the dedicated professionals who drive our success and maintain our commitment to excellence"
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Leadership Team */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in retail management,
              customer service, and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => {
              const showInitials = imageErrors[index] || !member.image;

              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  {/* Image container */}
                  <div className="h-64 relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                    {!showInitials ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(index)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <span className="text-white text-4xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                            Profile Photo
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Department badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary rounded-full shadow-sm">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {member.bio}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        </svg>
                        <span>{member.education}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Joined: {member.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;