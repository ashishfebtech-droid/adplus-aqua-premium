import React from 'react';
import { FaTint, FaCheckCircle, FaBox, FaPrint, FaShieldAlt } from 'react-icons/fa';

function ProductDetails() {
  const bottleSizes = [
    {
      size: "250 ml",
      title: "Compact Size",
      icon: "🥤",
      features: [
        "Perfect for events & weddings",
        "Easy to carry & distribute",
        "Ideal for short gatherings",
        "Cost-effective option"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      size: "1 Litre",
      title: "Premium Size",
      icon: "💧",
      features: [
        "Best for hotels & offices",
        "Long-lasting hydration",
        "Premium feel & look",
        "Greater brand visibility"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const specifications = [
    {
      icon: <FaBox />,
      title: "Minimum Order",
      value: "500 Bottles",
      description: "Flexible quantity options available"
    },
    {
      icon: <FaPrint />,
      title: "Label Printing",
      value: "Waterproof",
      description: "High-quality, fade-resistant printing"
    },
    {
      icon: <FaTint />,
      title: "Material",
      value: "Premium PET",
      description: "Food-grade, BPA-free bottles"
    },
    {
      icon: <FaShieldAlt />,
      title: "Certification",
      value: "FSSAI & ISO",
      description: "Fully certified & compliant"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Product Details
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Choose the perfect size for your needs with premium quality assured
            </p>
          </div>

          {/* Bottle Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {bottleSizes.map((bottle, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{bottle.icon}</div>
                  <div className={`inline-block bg-gradient-to-r ${bottle.color} px-6 py-2 rounded-full mb-4`}>
                    <h3 className="text-3xl font-bold text-white">{bottle.size}</h3>
                  </div>
                  <h4 className="text-2xl font-semibold text-cyan-200 mb-4">{bottle.title}</h4>
                </div>

                <div className="space-y-3">
                  {bottle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specifications Grid */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-cyan-400/30 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Product Specifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    {spec.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-cyan-200 mb-2">{spec.title}</h4>
                  <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                  <p className="text-sm text-gray-300">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Options */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Customization Options
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/30">
                  <h4 className="text-cyan-200 font-semibold mb-2">🎨 Full Color Printing</h4>
                  <p className="text-gray-300 text-sm">Your logo, message, and design in vibrant colors</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                  <h4 className="text-purple-200 font-semibold mb-2">💦 Waterproof Labels</h4>
                  <p className="text-gray-300 text-sm">Durable labels that don't fade or peel</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                  <h4 className="text-green-200 font-semibold mb-2">📐 Custom Sizes</h4>
                  <p className="text-gray-300 text-sm">Special sizes available on request</p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Request Product Catalog
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetails;