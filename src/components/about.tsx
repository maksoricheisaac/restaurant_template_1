/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Star, Award, Users } from 'lucide-react';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <p className="text-lg text-gray-600 mb-8">
              Depuis 1985, Le Délice perpétue l'excellence de la gastronomie congolaise
              au cœur de Brazzaville. Notre chef étoilé Jean-Pierre Dubois, formé auprès des plus
              grands noms de la cuisine congolaise, sublime les produits du terroir en créations
              contemporaines tout en respectant les traditions culinaires.
            </p>
            
            {/* Stats/Awards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xs">
                <Star className="w-8 h-8 text-brand-gold mb-2" />
                <span className="text-2xl font-bold text-gray-900">2</span>
                <span className="text-sm text-gray-600">Étoiles Michelin</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xs">
                <Award className="w-8 h-8 text-brand-gold mb-2" />
                <span className="text-2xl font-bold text-gray-900">35</span>
                <span className="text-sm text-gray-600">Ans d'Excellence</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xs">
                <Users className="w-8 h-8 text-brand-gold mb-2" />
                <span className="text-2xl font-bold text-gray-900">50k+</span>
                <span className="text-sm text-gray-600">Clients Satisfaits</span>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chef en cuisine"
              className="w-full h-64 object-cover rounded-lg"
              width={250}
              height={250}
            />
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Salle du restaurant"
              className="w-full h-64 object-cover rounded-lg"
              width={250}
              height={250}
            />
            <Image
              src="https://images.unsplash.com/photo-1574966739987-65e42566b611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Plat signature"
              className="w-full h-64 object-cover rounded-lg"
              width={250}
              height={250}
            />
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ingrédients frais"
              className="w-full h-64 object-cover rounded-lg"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

