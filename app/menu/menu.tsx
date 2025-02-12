/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, useEffect } from 'react';
import { ChefHat, ArrowUp, Leaf, Wheat, Fish, Milk, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { allMenuItems } from '@/src/data/all-menu-items';
import { categories } from '@/src/data/categories';



export const FullMenu = () => {
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Home Button - Fixed Position */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-red-800 hover:text-white transition-all duration-300 group"
        aria-label="Retour à l'accueil"
      >
        <Home className="w-6 h-6" />
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Retour à l'accueil
        </span>
      </Link>

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Notre Carte</h1>
            <p className="text-xl text-white/90">Découvrez notre sélection de plats raffinés</p>
          </div>
        </div>
      </div>

      {/* Navigation Sticky */}
      <div className="sticky top-0 bg-white shadow-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className="px-6 py-2 text-gray-700 hover:text-red-800 font-medium whitespace-nowrap transition-colors duration-200"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-16 scroll-mt-24 animate-fadeIn"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allMenuItems
                .filter(item => item.category === category.id)
                .map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {item.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        {item.isSpecial && (
                          <ChefHat size={20} className="text-red-800" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-red-800">
                          {item.price.toLocaleString()} FCFA
                        </p>
                        <div className="flex gap-2">
                          {item.dietary?.vegetarian && (
                            <Leaf size={20} className="text-green-600"  />
                          )}
                          {item.dietary?.glutenFree && (
                            <Wheat size={20} className="text-amber-600" />
                          )}
                          {item.allergens?.includes('poisson') && (
                            <Fish size={20} className="text-blue-600"  />
                          )}
                          {item.allergens?.includes('lait') && (
                            <Milk size={20} className="text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-900 transition-all duration-300 z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

