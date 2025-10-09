import React from 'react';
import { FaQuoteLeft, FaHeart, FaLightbulb } from 'react-icons/fa';

function FoundersMessage() {
  const founders = [
    {
      name: "Arif Siddiqui",
      role: "Co-Founder",
      message: "Ek healthcare professional hone ke nate, main jaanta hoon ki shuddh paani hamari health ke liye kitna zaruri hai. Aur ek entrepreneur hone ke nate, main maanta hoon ki har brand ke liye sabse zaruri hota hai advertisement and marketing, to kyu na in dono ko ek sath jod diya jaye to isi soch ke sath hamne shuru kiya Adplus.aqua - purity aur personalization ka perfect combination.",
      vision: "Humara aim hai ki har bottle ke zariye logon tak ek soch, ek style aur ek standard pahunchayein.",
      color: "from-cyan-400 to-blue-500",
      icon: <FaHeart />
    },
    {
      name: "Subhan Khan",
      role: "Co-Founder",
      message: "Adplus.aqua ka safar ek simple vichar se shuru hua — paani sirf ek zarurat nahi, ek pehchaan bhi ho sakta hai. Hospitality, events aur campaigns ke dauraan jab log bottled water lete hain, humne socha kyun na uss bottle par unki apni kahani likhi jaaye?",
      vision: "Aaj Adplus.aqua isi soch ko aage badha raha hai - har bottle ek story, har sip ek experience.",
      color: "from-blue-400 to-cyan-500",
      icon: <FaLightbulb />
    }
  ];

  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects - Light Version */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              The visionaries behind Adplus.aqua's journey of purity and personalization
            </p>
          </div>

          {/* Founders Cards */}
          <div className="space-y-12">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${founder.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md`}>
                    {founder.icon}
                  </div>
                  
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-1">{founder.name}</h3>
                    <p className="text-cyan-600 font-semibold text-lg">{founder.role}</p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className={`inline-flex bg-gradient-to-r ${founder.color} w-14 h-14 rounded-2xl items-center justify-center mb-6 shadow-md`}>
                  <FaQuoteLeft className="text-white text-xl" />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <p className="text-blue-700 text-lg leading-relaxed mb-4 italic">
                    "{founder.message}"
                  </p>
                  
                  {/* Vision Box */}
                  <div className={`bg-gradient-to-r ${founder.color} bg-opacity-10 rounded-2xl p-6 border border-cyan-300 mt-6 shadow-sm`}>
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-r ${founder.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm`}>
                        {founder.icon}
                      </div>
                      <div>
                        <h4 className="text-cyan-700 font-semibold mb-2">Our Vision</h4>
                        <p className="text-blue-800 font-medium leading-relaxed">
                          {founder.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Company Journey Timeline */}
          <div className="mt-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-8 border border-cyan-300 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">💡</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">The Idea</h4>
                <p className="text-blue-700">Combining healthcare expertise with entrepreneurial vision to create something unique</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">The Launch</h4>
                <p className="text-blue-700">Started Adplus.aqua with a mission to transform how brands connect through water</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white text-2xl font-bold">🌟</span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">The Impact</h4>
                <p className="text-blue-700">Serving 200+ clients across hotels, events, and corporate sector with pride</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FoundersMessage;