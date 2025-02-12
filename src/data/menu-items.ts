type MenuItems = {
    id: number
    name: string
    price: number
    category: string
    isSpecial?: boolean
    image: string
}[]

export const menuItems : MenuItems = [
    // Les items du menu restent les mêmes...
    {
      id: 1,
      name: "Salade Niçoise",
      price: 6500,
      category: 'entrees',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Foie Gras Maison',
      price: 15000,
      category: 'entrees',
      isSpecial: true,
      image: 'https://media.istockphoto.com/id/1422866960/fr/photo/foie-gras-saisi-%C3%A0-la-po%C3%AAle.jpg?s=612x612&w=0&k=20&c=475_txeCb2h1MSdqcVKsFzJvZSLg-ON--iQKFeZYgjc='
    },
    {
      id: 3,
      name: 'Poulet Yassa',
      price: 8000,
      category: 'plats_principaux',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      name: 'Thiéboudienne',
      price: 7500,
      category: 'plats_principaux',
      isSpecial: true,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      name: 'Riz Blanc',
      price: 1500,
      category: 'specialites',
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      name: 'Alloco',
      price: 2000,
      category: 'specialites',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Du_bon_Alloko.JPG'
    },
    
  ];