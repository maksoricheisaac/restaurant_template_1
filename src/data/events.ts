type Events = {
    id: number
    title: string
    description: string
    date: string
    image: string
}[]

export const events : Events= [
    {
      id: 1,
      title: 'Soirée Dégustation de Vins',
      description: 'Une soirée exceptionnelle de dégustation des meilleurs vins de Bourgogne, accompagnée de mets raffinés.',
      date: '2024-04-15',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      title: 'Masterclass avec le Chef',
      description: 'Apprenez les secrets de la cuisine française avec notre chef étoilé lors d\'une masterclass exclusive.',
      date: '2024-04-22',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 3,
      title: 'Menu Spécial Truffe',
      description: 'Un menu exceptionnel célébrant la truffe noire du Périgord à travers des créations uniques.',
      date: '2024-05-01',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];