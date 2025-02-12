type Team = {
    id: number
    name: string
    role: string
    image: string
    social: {
        instagram: string
        twitter: string
    }
}[]

export const team : Team= [
    {
      id: 1,
      name: 'Jean-Pierre Dubois',
      role: 'Chef Exécutif',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Marie Dubois',
      role: 'Sommelière',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Paul Martin',
      role: 'Chef Pâtissier',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Sophie Lambert',
      role: 'Chef de Salle',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#'
      }
    }
  ];