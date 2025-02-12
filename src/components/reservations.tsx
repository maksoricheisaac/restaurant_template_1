"use client"
import React, { useState } from 'react';
import { Calendar, Clock, Users, UtensilsCrossed, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface FormErrors {
  [key: string]: string;
}

// Simuler une base de données de réservations
const existingReservations = [
  { date: '2024-03-20', time: '19:00' },
  { date: '2024-03-20', time: '20:00' },
  // Ajoutez d'autres réservations si nécessaire
];

export const Reservations = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate date
    if (!formData.date) {
      newErrors.date = 'La date est requise';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'La date doit être aujourd\'hui ou dans le futur';
      }
    }

    // Validate time
    if (!formData.time) {
      newErrors.time = 'L\'heure est requise';
    } else {
      const now = new Date();
      const selectedDateTime = new Date(formData.date + 'T' + formData.time);
      const timeDiff = selectedDateTime.getTime() - now.getTime();
      const hoursDiff = timeDiff / (1000 * 60 * 60);

      if (hoursDiff < 1) {
        newErrors.time = 'La réservation doit être faite au moins 1 heure à l\'avance';
      }

      // Vérifier si l'horaire est déjà réservé
      const isTimeSlotTaken = existingReservations.some(
        reservation => reservation.date === formData.date && reservation.time === formData.time
      );

      if (isTimeSlotTaken) {
        newErrors.time = 'Cet horaire n\'est plus disponible, veuillez en choisir un autre';
      }
    }

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

    // Validate phone
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
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
        date: '',
        time: '',
        guests: '2',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    } catch (error : unknown) {
      if(error instanceof Error) {
        console.log(`Une erreur est survenue : ${error.message}`)
        setSubmitStatus('error');
      }
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="reservations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Réservez Votre Table</h2>
          <p className="text-lg text-gray-600">
            Pour une expérience gastronomique inoubliable, réservez votre table dès maintenant
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              <div className="flex items-center">
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p>Votre réservation a été enregistrée avec succès !</p>
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

          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Date</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Heure</span>
                  </div>
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Sélectionnez une heure</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Nombre de convives</span>
                  </div>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                  <option value="9+">9+ personnes</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed size={16} />
                    <span>Régime spécial</span>
                  </div>
                </label>
                <input
                  type="text"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Allergies, préférences..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-800 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-8 px-6 py-3 rounded-md text-white transition-colors duration-200 cursor-pointer ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-800 hover:bg-red-900'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

