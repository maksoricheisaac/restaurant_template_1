
type Testimonials = {
    id: number
    name: string
    role: string
    comment: string
    rating: number
    image: string
}[]

export const testimonials : Testimonials= [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Cliente régulière',
      comment: 'Une expérience gastronomique exceptionnelle ! Les plats sont raffinés et le service est impeccable. Je recommande particulièrement le menu dégustation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Pierre Dubois',
      role: 'Critique culinaire',
      comment: 'Le chef réussit à marier tradition et modernité avec brio. Chaque assiette est un tableau gustatif qui ravit les papilles.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Marie Lambert',
      role: 'Influenceuse culinaire',
      comment: 'Un cadre élégant, une carte des vins impressionnante et des plats qui racontent une histoire. Une adresse incontournable !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];