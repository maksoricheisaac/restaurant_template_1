/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { galleryImages } from '../data/gallery-images';



export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'plats', 'ambiance', 'cuisine', 'vins'];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Galerie</h2>
          <p className="text-lg text-gray-600">Découvrez l'ambiance et les créations du Délice Français</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer
                ${activeCategory === category 
                  ? 'bg-red-800 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.url)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            >
              <Image
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </section>
  );
};

