
type BlogPosts = {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    category: string
}[]

export const blogPosts : BlogPosts = [
    {
      id: 1,
      title: 'Les Secrets de la Sauce Béarnaise',
      excerpt: 'Découvrez les astuces de notre chef pour réaliser une sauce béarnaise parfaite...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Recettes'
    },
    {
      id: 2,
      title: 'Le Guide des Vins de Bourgogne',
      excerpt: 'Notre sommelier vous guide à travers les meilleurs crus de Bourgogne...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Vins'
    },
    {
      id: 3,
      title: 'Les Produits de Saison : Printemps',
      excerpt: 'Découvrez notre sélection de produits frais pour le printemps...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Saison'
    }
  ];