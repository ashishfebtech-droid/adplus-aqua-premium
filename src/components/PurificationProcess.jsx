import React, { useState } from 'react';
import { FaFilter, FaFlask, FaShieldAlt, FaCheckCircle, FaAward, FaCertificate } from 'react-icons/fa';

function PurificationProcess() {
  const [activeStage, setActiveStage] = useState(0);

  const purificationStages = [
    {
      stage: 1,
      icon: <FaFilter />,
      title: "Pre-Filtration",
      description: "Removes large particles, sediments, and visible impurities from raw water",
      color: "from-blue-500 to-cyan-500",
      detail: "Multi-media filter removes suspended solids"
    },
    {
      stage: 2,
      icon: <FaFlask />,
      title: "Activated Carbon",
      description: "Eliminates chlorine, odor, color, and organic compounds",
      color: "from-cyan-500 to-teal-500",
      detail: "Improves taste and removes chemical impurities"
    },
    {
      stage: 3,
      icon: <FaFilter />,
      title: "Micro Filtration",
      description: "Removes bacteria, cysts, and microscopic particles",
      color: "from-teal-500 to-green-500",
      detail: "0.1 micron filter ensures crystal clear water"
    },
    {
      stage: 4,
      icon: <FaFlask />,
      title: "Reverse Osmosis",
      description: "Core purification removes dissolved salts, heavy metals, and TDS",
      color: "from-green-500 to-emerald-500",
      detail: "Semi-permeable membrane technology"
    },
    {
      stage: 5,
      icon: <FaShieldAlt />,
      title: "UV Treatment",
      description: "Kills 99.9% of harmful microorganisms and bacteria",
      color: "from-purple-500 to-indigo-500",
      detail: "Ultraviolet disinfection without chemicals"
    },
    {
      stage: 6,
      icon: <FaFlask />,
      title: "Mineralizer",
      description: "Adds essential minerals for health and taste enhancement",
      color: "from-indigo-500 to-purple-500",
      detail: "Calcium, Magnesium, and other vital minerals"
    },
    {
      stage: 7,
      icon: <FaCheckCircle />,
      title: "Ozonation",
      description: "Final disinfection and oxygen enrichment for freshness",
      color: "from-pink-500 to-rose-500",
      detail: "Keeps water fresh in sealed bottles"
    }
  ];

  const certifications = [
    {
      icon: <FaCertificate />,
      name: "FSSAI Certified",
      license: "Lic. No. 12625006000401",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaAward />,
      name: "ISO Certified",
      license: "Quality Management System",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="purification" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              7-Stage Purification Process
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto mb-8">
              Your trust deserves purity — every drop of Adplus.aqua passes through 7 advanced stages of purification before it's bottled
            </p>
            
            {/* Quality Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-green-400/30">
              <FaShieldAlt className="text-green-400 text-xl" />
              <span className="text-white font-semibold">99.9% Pure & Safe</span>
            </div>
          </div>

          {/* Purification Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {purificationStages.map((stage, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStage(index)}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeStage === index 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 transform scale-105' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {/* Stage Number */}
                <div className={`inline-flex bg-gradient-to-r ${stage.color} w-12 h-12 rounded-full items-center justify-center font-bold text-white text-lg mb-4`}>
                  {stage.stage}
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-r ${stage.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                  {stage.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{stage.title}</h3>
                <p className="text-gray-300 text-sm mb-3 text-center leading-relaxed">{stage.description}</p>
                
                {/* Detail Badge */}
                <div className="bg-white/10 rounded-lg p-2 text-center">
                  <p className="text-cyan-200 text-xs font-semibold">{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Diagram - Visual Representation */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/30 shadow-2xl mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Purification Flow
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {purificationStages.map((stage, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div className={`bg-gradient-to-r ${stage.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {stage.stage}
                    </div>
                    <span className="text-white text-xs mt-2 max-w-[80px] text-center">{stage.title}</span>
                  </div>
                  {index < purificationStages.length - 1 && (
                    <div className="text-cyan-400 text-2xl hidden sm:block">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl`}>
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">{cert.name}</h3>
                <p className="text-cyan-200 text-center font-semibold">{cert.license}</p>
              </div>
            ))}
          </div>

          {/* Quality Assurance Points */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Our Quality Commitment
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h4 className="text-white font-semibold mb-2">Lab Tested</h4>
                <p className="text-gray-300 text-sm">Every batch tested for purity</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h4 className="text-white font-semibold mb-2">Food Grade</h4>
                <p className="text-gray-300 text-sm">BPA-free premium bottles</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h4 className="text-white font-semibold mb-2">Certified</h4>
                <p className="text-gray-300 text-sm">FSSAI & ISO standards</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaFlask className="text-white text-2xl" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fresh</h4>
                <p className="text-gray-300 text-sm">Ozonation keeps it fresh</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PurificationProcess;