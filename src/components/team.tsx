import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { team } from '../data/team';
import Image from 'next/image';



export const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
          <p className="text-lg text-gray-600">Des professionnels passionnés à votre service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={member.social.instagram}
                    className="p-2 bg-white rounded-full text-gray-900 hover:text-red-800 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-white rounded-full text-gray-900 hover:text-red-800 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-red-800 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
