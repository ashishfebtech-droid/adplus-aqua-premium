import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaBuilding, FaHeart, FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Portfolio() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Client testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "The Grand Heritage Hotel",
      role: "General Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      text: "Adplus.aqua ne hamare hotel ki branding ko next level par le gaya. Guests humare custom bottles ko bahut pasand karte hain. Quality aur service dono excellent hai!",
      rating: 5,
      category: "hotel"
    },
    {
      name: "Priya & Arjun Mehta",
      company: "Wedding - Dec 2024",
      role: "Couple",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&q=80",
      text: "Hamari shaadi mein personalized water bottles ne guests ko impress kiya. Design beautiful tha aur delivery on-time mili. Highly recommended for weddings!",
      rating: 5,
      category: "wedding"
    },
    {
      name: "Amit Sharma",
      company: "TechVision Solutions Pvt Ltd",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      text: "For our corporate events and office, Adplus.aqua provides consistent quality. Professional service and the branded bottles add value to our brand image.",
      rating: 5,
      category: "corporate"
    },
    {
      name: "Neha Gupta",
      company: "Event Management Pro",
      role: "Event Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      text: "Multiple events mein Adplus.aqua ke saath kaam kiya hai. Unki customization options aur quick turnaround time impressive hai. Best for large scale events!",
      rating: 5,
      category: "events"
    }
  ];

  // Client logos/categories
  const clientCategories = [
    {
      title: "Hotels & Resorts",
      icon: <FaBuilding />,
      count: "25+",
      color: "from-cyan-400 to-blue-500",
      description: "Luxury hospitality partners"
    },
    {
      title: "Weddings & Events",
      icon: <FaHeart />,
      count: "150+",
      color: "from-blue-400 to-cyan-500",
      description: "Memorable celebrations"
    },
    {
      title: "Corporate Clients",
      icon: <FaBriefcase />,
      count: "40+",
      color: "from-cyan-500 to-blue-600",
      description: "Professional partnerships"
    }
  ];

  // Sample client work images
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      title: "Luxury Hotel Collection",
      category: "Hotels"
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
      title: "Wedding Special Edition",
      category: "Weddings"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      title: "Corporate Branding",
      category: "Corporate"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
      title: "Event Series",
      category: "Events"
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects - Light Version */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Trusted by leading hotels, businesses, and thousands of happy clients across India
            </p>
          </div>

          {/* Client Categories Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {clientCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${category.color} text-white text-2xl shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">
                  {category.count}
                </h3>
                <h4 className="text-lg font-semibold text-blue-800 text-center mb-2">
                  {category.title}
                </h4>
                <p className="text-blue-600 text-sm text-center">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          {/* Portfolio Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">Our Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioImages.map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-cyan-300 text-xs font-semibold mb-1">{item.category}</span>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-8 border border-cyan-300 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 text-center mb-8">
              What Our Clients Say
            </h3>

            {/* Testimonial Slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-blue-200 shadow-md">
                
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                    <FaQuoteLeft className="text-white text-2xl" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center mb-6">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-blue-800 text-lg leading-relaxed mb-6 italic">
                    "{testimonials[activeTestimonial].text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-center gap-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                    />
                    <div className="text-left">
                      <h4 className="text-blue-900 font-bold text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-cyan-600 text-sm">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <p className="text-blue-600 text-xs">
                        {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-blue-200 hover:bg-blue-300 text-blue-700 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaChevronLeft />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`transition-all duration-300 ${
                          index === activeTestimonial 
                            ? 'w-8 h-3 bg-cyan-500 rounded-full' 
                            : 'w-3 h-3 bg-blue-300 rounded-full hover:bg-blue-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextTestimonial}
                    className="bg-blue-200 hover:bg-blue-300 text-blue-700 p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to Join Our Growing Family?
              </h3>
              <p className="text-blue-700 mb-6">
                Over 200+ satisfied clients trust us for their custom water bottle needs
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Your Custom Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;