import React, { useState } from 'react';
import { FaPhone, FaWater, FaAward, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Hero() {
  const [currentBottle, setCurrentBottle] = useState(0);

  // Custom branded bottles images
  const bottleImages = [
    'images/AQUA1.jpg',
    'images/AQUA2.jpg',
    'images/AQUA3.jpg',
    'images/AQUA3.jpg'
  ];

  // Bottle carousel navigation
  const nextBottle = () => {
    setCurrentBottle((prev) => (prev + 1) % bottleImages.length);
  };

  const prevBottle = () => {
    setCurrentBottle((prev) => (prev - 1 + bottleImages.length) % bottleImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start sm:items-center justify-center pt-20 sm:pt-0 bg-white">
      {/* Content - Pure White Background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">

          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">


            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4">
                Adplus<span className="text-cyan-600">.aqua</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-cyan-600 font-light mb-6">
                Custom Branded Water Bottles
              </h2>
              {/* Certification Badges */}
              {/* Certification Badges with Images */}
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                  <img
                    src="images/fssai_login.jpg"
                    alt="FSSAI Certified"
                    className="w-50 h-20 object-contain border-2 text-cyan-600 rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text agar image load na ho */}
                 
                </div>

                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                  <img
                    src="images/ISO.jpg"
                    alt="ISO Certified"
                    className="w-20 h-20 object-contain border-2 text-cyan-600 rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                </div>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
                We create customized, high quality packaged drinking water bottles that carry your brand message wherever they go
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <FaPhone />
                Get Custom Quote
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white border-2 border-gray-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View Portfolio
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaTag className="text-white text-xl" />
                </div>
                <h3 className="text-gray-800 text-lg font-bold mb-1">Custom Labels</h3>
                <p className="text-gray-600 text-xs">Your brand, your design</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaWater className="text-white text-xl" />
                </div>
                <h3 className="text-gray-800 text-lg font-bold mb-1">7-Stage Purified</h3>
                <p className="text-gray-600 text-xs">Premium quality water</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaAward className="text-white text-xl" />
                </div>
                <h3 className="text-gray-800 text-lg font-bold mb-1">Premium Quality</h3>
                <p className="text-gray-600 text-xs">FSSAI & ISO certified</p>
              </div>
            </div>
          </div>

          {/* Right Side - Bottle Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-6">Our Custom Bottles</h3>

              {/* Main Bottle Image */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={bottleImages[currentBottle]}
                  alt={`Custom bottle design ${currentBottle + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevBottle}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-900 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextBottle}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-900 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Bottle Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {bottleImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBottle(index)}
                    className={`relative h-16 rounded-lg overflow-hidden transition-all duration-300 bg-gray-100 ${index === currentBottle
                        ? 'ring-2 ring-cyan-500 transform scale-105'
                        : 'opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Bottle Indicator */}
              <div className="flex justify-center mt-4">
                <span className="text-gray-700 text-sm bg-gray-200 px-3 py-1 rounded-full">
                  {currentBottle + 1} / {bottleImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;