import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className={`${pacifico.className} text-2xl font-playfair mb-4`}>Le Délice</h3>
            <p className="text-gray-400 mb-4">
              Une expérience gastronomique unique au cœur de Brazzaville
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 rue Lamy</li>
              <li>Brazzaville, CONGO</li>
              <li>+(242) 06 606 31 33</li>
              <li>contact@ledelice.fr</li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi</li>
              <li>12h00 - 14h30</li>
              <li>19h00 - 22h30</li>
              <li>Samedi : 19h00 - 23h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#menu" className="hover:text-white transition-colors duration-200">Menu</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors duration-200">Réservations</a></li>
              <li><a href="#events" className="hover:text-white transition-colors duration-200">Événements</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Le Délice. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

