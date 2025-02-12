/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Calendar, Users, ChefHat } from 'lucide-react';
import Image from 'next/image';
import { events } from '../data/events';



export const Events = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements</h2>
          <p className="text-lg text-gray-600">Découvrez nos événements spéciaux et expériences culinaires uniques</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Events Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Événements Privés</h3>
            <p className="text-lg text-gray-600">
              Organisez vos événements privés dans un cadre d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-red-800 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Mariages</h4>
              <p className="text-gray-600">Jusqu'à 80 convives</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ChefHat className="w-12 h-12 text-red-800 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Séminaires</h4>
              <p className="text-gray-600">Espaces adaptés aux entreprises</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-12 h-12 text-red-800 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Anniversaires</h4>
              <p className="text-gray-600">Menus personnalisés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

