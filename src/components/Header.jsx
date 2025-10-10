import React, { useState, useEffect } from 'react';
import { 
  FaBars, FaTimes, FaInstagram, FaWhatsapp,
  FaHome, FaInfoCircle, FaBox, FaUsers, FaFlask, FaPhoneAlt 
} from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaInfoCircle />, href: '#about' },
    { name: 'Products', icon: <FaBox />, href: '#products' },
    { name: 'Portfolio', icon: <FaUsers />, href: '#portfolio' },
    { name: 'Purification', icon: <FaFlask />, href: '#purification' },
    { name: 'Contact', icon: <FaPhoneAlt />, href: '#contact' }
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-blue-800/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-blue-800/90 backdrop-blur-sm py-5'
        } ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="text-3xl transition-transform duration-300 group-hover:scale-110">💧</div>
            <div className="text-white">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
                Adplus<span className="text-cyan-300">.aqua</span>
              </h1>
              <p className="text-xs text-blue-100 hidden sm:block">Custom Branded Water</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 xl:px-4 py-2 text-white font-medium rounded-lg hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm text-cyan-300">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-300 transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button + Social Icons (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-sm"
            >
              Get Quote
            </a>
            
            {/* Social Icons */}
            <div className="flex gap-3 text-white text-xl">
              <a 
                href="https://www.instagram.com/adplus.aqua?igsh=cGUwYzNsNTd0NWJx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/919458381868"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-gradient-to-b from-blue-800 via-blue-700 to-cyan-800 z-50 transform transition-transform duration-300 flex flex-col shadow-2xl lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-cyan-600/30 backdrop-blur-md text-white flex justify-between items-center p-6 shadow-md border-b border-cyan-400/20">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <div>
              <h2 className="text-xl font-bold">
                Adplus<span className="text-cyan-300">.aqua</span>
              </h2>
              <p className="text-xs text-blue-100">Custom Branded Water</p>
            </div>
          </div>
          <button 
            className="text-2xl hover:rotate-90 transition-transform duration-300 text-cyan-300" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:translate-x-1 transition-all duration-200 text-white font-medium"
            >
              <span className="text-xl text-cyan-300">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-cyan-400/20 bg-white/5 backdrop-blur-md">
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center mb-4"
          >
            Get Free Quote
          </a>
          
          <p className="text-blue-100 text-sm mb-3 text-center font-medium">
            💧 Purity with Personalization
          </p>
          
          <div className="flex justify-center gap-6 text-white text-2xl">
            <a 
              href="https://www.instagram.com/adplus.aqua?igsh=cGUwYzNsNTd0NWJx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/919458381868"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 hover:scale-125 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-center">
            <p className="text-blue-100 text-xs">📞 +91 9458381868</p>
            <p className="text-blue-100 text-xs">📧 adplus.aqua@gmail.com</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;