import React, { useState, useEffect } from 'react';
import { FaClipboardCheck, FaPalette, FaPrint, FaFlask, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: 1,
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "Consultation & Quote",
      description: "Share your requirements and get a custom quote within 24 hours",
      duration: "1-2 Days",
      color: "from-cyan-400 to-blue-500"
    },
    {
      step: 2,
      icon: <FaPalette className="text-2xl" />,
      title: "Design Approval", 
      description: "Our designers create your custom label design for approval",
      duration: "2-3 Days",
      color: "from-blue-400 to-cyan-500"
    },
    {
      step: 3,
      icon: <FaPrint className="text-2xl" />,
      title: "Label Printing",
      description: "High-quality waterproof label printing with your brand design",
      duration: "1-2 Days", 
      color: "from-cyan-500 to-blue-600"
    },
    {
      step: 4,
      icon: <FaFlask className="text-2xl" />,
      title: "7-Stage Purification",
      description: "Water undergoes advanced 7-stage purification process",
      duration: "1 Day",
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: 5,
      icon: <FaShippingFast className="text-2xl" />,
      title: "Bottling & Packaging",
      description: "Automated bottling with quality checks and secure packaging", 
      duration: "1-2 Days",
      color: "from-cyan-600 to-blue-700"
    },
    {
      step: 6,
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Delivery",
      description: "Safe and timely delivery to your location",
      duration: "1-3 Days",
      color: "from-blue-600 to-cyan-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects - Light Version */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Simple 6-step process to get your custom branded water bottles delivered
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-400/40 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className={`flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0 w-full`}>
                    <div 
                      className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 border-2 ${
                        activeStep === index 
                          ? 'border-cyan-400 shadow-lg shadow-cyan-500/25' 
                          : 'border-blue-200'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mr-4 bg-gradient-to-r ${step.color} ${
                            activeStep === index ? 'ring-4 ring-cyan-400/50' : ''
                          }`}
                        >
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                      </div>
                      <p className="text-blue-700 mb-3">{step.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-cyan-600 font-semibold">{step.duration}</span>
                        {activeStep === index && (
                          <div className="flex items-center text-green-500">
                            <FaCheckCircle className="mr-1" />
                            <span className="text-sm font-semibold">Active</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="md:w-2/12 flex justify-center relative">
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${step.color} ${
                        activeStep === index 
                          ? 'ring-4 ring-cyan-400' 
                          : ''
                      }`}
                    >
                      {step.icon}
                    </div>
                    
                    {/* Connecting Line for Mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-cyan-400/40 md:hidden"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to Start Your Order?
              </h3>
              <p className="text-blue-700 mb-6">
                Complete process takes 7-12 days. Minimum order 500 bottles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-md">
                  <FaClipboardCheck />
                  Get Started Now
                </button>
                <button className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWeWork;