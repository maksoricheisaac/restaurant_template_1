import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { blogPosts } from '../data/blog-posts';



export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Blog</h2>
          <p className="text-lg text-gray-600">Découvrez nos articles, recettes et conseils culinaires</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-800 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-800 hover:text-red-900 transition-colors duration-200"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-800 text-white px-8 py-3 rounded-md hover:bg-red-900 transition-colors duration-200">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};
