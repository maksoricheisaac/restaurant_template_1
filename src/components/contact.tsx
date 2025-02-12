"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, XCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simuler une réponse réussie
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error : unknown) {
      if(error instanceof Error){
        console.log(`Une erreur est survenue : ${error.message}`)
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Accès</h2>
          <p className="text-lg text-gray-600">Nous sommes à votre disposition pour toute information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white h-full p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-800 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-800 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-800 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@ledelice.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-red-800 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi: 12h00 - 14h30, 19h00 - 22h30</p>
                      <p>Samedi: 19h00 - 23h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                <div className="flex items-center">
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <p>Votre message a été envoyé avec succès !</p>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 mr-2" />
                      <p>Une erreur est survenue. Veuillez réessayer.</p>
                    </>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white h-full p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-800 text-white px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-red-900'
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7957.180154885764!2d15.2536677!3d-4.2995091!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scg!4v1739354186361!5m2!1sen!2scg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

