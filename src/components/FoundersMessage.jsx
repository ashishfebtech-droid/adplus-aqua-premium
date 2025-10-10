import React from 'react';
import { FaQuoteLeft, FaHeart, FaLightbulb } from 'react-icons/fa';

function FoundersMessage() {
  const founders = [
    {
      name: "Arif Siddiqui",
      role: "Co-Founder",
      message: "EK HEALTHCARE PROFESSIONAL HONE KE NATE, MAIN JAANTA HOON KI SHUDDH PAANI HAMARI HEALTH KE LIYE KITNA ZARURI HAI. AUR EK ENTREPRENEUR HONE KE NATE, MAIN MAANTA HOON KI HAR BRAND KE LIYE SABSE ZARURI HOTA HAI ADVERTISEMENT AND MARKETING, TO KYU NA IN DONO KO EK SATH JOD DIYA JAYE TO ISI SOCH KE SATH HAMNE SHURU KIYA ADPLUS.AQUA - PURITY AUR PERSONALIZATION KA PERFECT COMBINATION.",
      vision: "HUMARA AIM HAI KI HAR BOTTLE KE ZARIYE LOGON TAK EK SOCH, EK STYLE AUR EK STANDARD PAHUNCHAYEIN.",
      color: "from-cyan-400 to-blue-500",
      icon: <FaHeart />
    },
    {
      name: "Subhan Khan",
      role: "Co-Founder",
      message: "ADPLUS.AQUA KA SAFAR EK SIMPLE VICHAR SE SHURU HUA — PAANI SIRF EK ZARURAT NAHI, EK PEHCHAAN BHI HO SAKTA HAI. HOSPITALITY, EVENTS AUR CAMPAIGNS KE DAURAAN JAB LOG BOTTLED WATER LETE HAIN, HUMNE SOCHA KYUN NA US BOTTLE PAR UNKI APNI KAHANI LIKHI JAAYE",
      vision: "AAAJ ADPLUS.AQUA ISI SOCH KO AAGE BADHA RAHA HAI - HAR BOTTLE EK STORY, HAR SIP EK EXPERIENCE.",
      color: "from-blue-400 to-cyan-500",
      icon: <FaLightbulb />
    }
  ];

  return (
    <section id="founders" className="py-20 bg-blue-50 relative overflow-hidden">
      
      {/* Background Effects - Very Light */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries behind Adplus.aqua's journey of purity and personalization
            </p>
          </div>

          {/* Founders Cards */}
          <div className="space-y-12">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Founder Header - Better Alignment */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${founder.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-md`}>
                    {founder.icon}
                  </div>
                  
                  {/* Name & Role */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{founder.name}</h3>
                    <p className="text-cyan-600 font-semibold text-lg">{founder.role}</p>
                  </div>
                </div>

                {/* Quote Section - Better Structure */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Quote Icon */}
                  <div className={`bg-gradient-to-r ${founder.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md mt-1`}>
                    <FaQuoteLeft className="text-white text-lg" />
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1">
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "{founder.message}"
                    </p>
                  </div>
                </div>

                {/* Vision Box - Better Alignment */}
                <div className={`bg-gradient-to-r ${founder.color} bg-opacity-10 rounded-2xl p-6 border border-cyan-200 mt-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${founder.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm mt-1`}>
                      {founder.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-cyan-700 font-semibold text-lg mb-3">Our Vision</h4>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {founder.vision}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Company Journey Timeline */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">💡</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Idea</h4>
                <p className="text-gray-600">Combining healthcare expertise with entrepreneurial vision to create something unique</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Launch</h4>
                <p className="text-gray-600">Started Adplus.aqua with a mission to transform how brands connect through water</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">🌟</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Impact</h4>
                <p className="text-gray-600">Serving 200+ clients across hotels, events, and corporate sector with pride</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FoundersMessage;