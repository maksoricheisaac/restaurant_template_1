import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Image from 'next/image';



export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Avis et Témoignages</h2>
          <p className="text-lg text-gray-600">Ce que nos clients disent de nous</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-800/20" />
              
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

