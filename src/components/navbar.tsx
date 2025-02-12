"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/nav-items';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xs shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className={`font-playfair text-2xl md:text-3xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Le Délice
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-800 rounded-md transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
            <a
              href="#reservations"
              className="bg-red-800 text-white px-6 py-2.5 rounded-md hover:bg-red-900 transition-colors duration-300 transform hover:scale-105"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 focus:outline-hidden z-50"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" style={{ top: '80px' }}>
          <div className="bg-white w-full">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-800 text-lg hover:text-red-800 transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#reservations"
                className="block w-full text-center bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Réserver
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

