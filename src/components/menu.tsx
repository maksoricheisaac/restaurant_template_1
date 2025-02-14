"use client"
import React, { useState, useMemo } from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { menuItems } from '../data/menu-items';
import { previewCategories } from '../data/preview-categories';



export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('entrees');

  // Sélectionner aléatoirement 2 plats par catégorie pour l'aperçu
  const previewItems = useMemo(() => {
    const preview: { [key: string]: typeof menuItems } = {};
    
    previewCategories.forEach(category => {
      const categoryItems = menuItems.filter(item => item.category === category.id);
      preview[category.id] = categoryItems
        .sort(() => Math.random() - 0.5) // Mélanger les plats
        .slice(0, 3); // Prendre les 2 premiers
    });
    
    return preview;
  }, []);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Carte</h2>
          <p className="text-lg text-gray-600">Un aperçu de nos créations culinaires</p>
        </div>

        {/* Category Navigation - Preview Only */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-3">
              {previewCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer
                    ${activeCategory === category.id
                      ? 'bg-red-800 text-white shadow-md transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-red-800'}
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewItems[activeCategory]?.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={250}
                  height={250}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  {item.isSpecial && (
                    <ChefHat size={20} className="text-red-800" />
                  )}
                </div>
                <p className="text-lg font-semibold text-red-800">
                  {item.price.toLocaleString()} FCFA
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/menu"
            className="inline-flex items-center px-8 py-4 bg-red-800 text-white rounded-lg font-semibold text-lg hover:bg-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir toute notre carte
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

