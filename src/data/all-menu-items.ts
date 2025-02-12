type AllMenuItems = {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  dietary?: {
    vegetarian: boolean
    glutenFree?: boolean
  }
  allergens?: string[]
  isSpecial?: boolean
}

export const allMenuItems: AllMenuItems[] = [
    {
      id: 1,
      name: "Salade Niçoise",
      description: "Salade fraîche avec thon, olives, œufs et anchois",
      price: 6500,
      category: 'entrees',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dietary: { vegetarian: false },
      allergens: ['poisson']
    },
    {
      id: 2,
      name: 'Foie Gras Maison',
      description: 'Foie gras mi-cuit, chutney de figues et pain brioché',
      price: 15000,
      category: 'entrees',
      isSpecial: true,
      image: 'https://images.unsplash.com/photo-1583964304576-7da0cc9ec2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'Poulet Yassa',
      description: 'Poulet mariné aux oignons et citron, riz parfumé',
      price: 8000,
      category: 'plats_principaux',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      name: 'Thiéboudienne',
      description: 'Riz au poisson et légumes, sauce tomate',
      price: 7500,
      category: 'plats_principaux',
      isSpecial: true,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      allergens: ['poisson']
    },
    {
      id: 5,
      name: 'Mafé Végétarien',
      description: 'Ragoût de légumes à la sauce arachide',
      price: 6000,
      category: 'plats_principaux',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dietary: { vegetarian: true, glutenFree: true }
    },
    {
      id: 6,
      name: 'Alloco',
      description: 'Bananes plantains frites',
      price: 2000,
      category: 'accompagnements',
      image: 'https://images.unsplash.com/photo-1598511796432-32663d0875f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dietary: { vegetarian: true, glutenFree: true }
    },
    {
      id: 7,
      name: 'Tiramisu',
      description: 'Biscuits café, mascarpone et cacao',
      price: 4500,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dietary: { vegetarian: true },
      allergens: ['lait']
    },
    {
      id: 8,
      name: 'Bissap',
      description: 'Boisson rafraîchissante à base d\'hibiscus',
      price: 1000,
      category: 'boissons',
      image: 'https://images.unsplash.com/photo-1592483478492-686b24b6f55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      dietary: { vegetarian: true, glutenFree: true }
    },
    {
      id: 9,
      name: 'Poulet DG',
      description: 'Poulet mijoté avec plantains et légumes',
      price: 8500,
      category: 'specialites',
      isSpecial: true,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];