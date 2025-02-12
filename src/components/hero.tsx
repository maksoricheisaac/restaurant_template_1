import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className={`${pacifico.className} text-5xl md:text-7xl font-playfair mb-6`}>
          Le Délice 
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light">
          Un voyage culinaire à travers les saveurs raffinées de la gastronomie congolaise
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#reservations"
            className="bg-red-800 text-white px-8 py-3 rounded-sm hover:bg-red-900 transition-colors duration-200"
          >
            Réserver une table
          </a>
          <a
            href="#menu"
            className="border border-white text-white px-8 py-3 rounded-sm hover:bg-white/10 transition-colors duration-200"
          >
            Découvrir notre menu
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
};

