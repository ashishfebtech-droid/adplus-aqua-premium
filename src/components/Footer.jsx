import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaArrowRight,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Hotels & Cafes", href: "#services" },
    { name: "Events & Weddings", href: "#services" },
    { name: "Campaigns", href: "#services" },
    { name: "Corporate", href: "#services" },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-lg" />,
      info: "+91 9458381868",
      description: "Customer Care",
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      info: "+91 9458381868",
      description: "WhatsApp",
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      info: "adplus.aqua@gmail.com",
      description: "Email Us",
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      info: "Roorkee, Haridwar",
      description: "Uttarakhand",
    },
  ];

  // Contact Info के नीचे add करो
  const waterDropImage = 'images/WhatsApp Image 2025-10-10 at 19.33.26_14e6c578.jpg';

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-blue-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Ready to Brand Your Water?
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Get custom branded water bottles that speak your brand story.
                Minimum order 500 bottles.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                Get Custom Quote
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group ">
                  <img
                    src={waterDropImage}
                    alt="Water Drop"
                    className="w-10 h-10 object-contain rounded-md"
                  />
                  <div className="text-white">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
                      Adplus<span className="text-cyan-300">.aqua</span>
                    </h1>
                    <p className="text-xs text-blue-100 hidden sm:block">
                      Custom Branded Water
                    </p>
                  </div>
                </a>
                <p className="text-blue-100 leading-relaxed mt-3 text-left ">
                  We create customized, high quality packaged drinking water
                  bottles that carry your brand message wherever they go.
                </p>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-100">
                  <FaShieldAlt className="text-cyan-300" />
                  <span className="text-sm">FSSAI Certified</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <FaAward className="text-cyan-300" />
                  <span className="text-sm">ISO Certified</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white text-left">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-cyan-300 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white text-left">
                Our Solutions
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-cyan-300 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white text-left">
                Contact Us
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-left"
                  >
                    <div className="text-cyan-300">{contact.icon}</div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {contact.info}
                      </div>
                      <div className="text-blue-100 text-xs">
                        {contact.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="text-white font-semibold mb-4 text-left">
                  Follow Us
                </h5>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/adplus.aqua"
                    className="bg-blue-800/50 hover:bg-cyan-600 border border-blue-600/30 w-10 h-10 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/919458381868"
                    className="bg-blue-800/50 hover:bg-green-500 border border-blue-600/30 w-10 h-10 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-blue-100 text-sm text-center md:text-left">
                © {currentYear} Adplus Aqua. All rights reserved. | FSSAI Lic.
                No. 12625006000491
              </div>

              {/* Additional Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919458381868"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
