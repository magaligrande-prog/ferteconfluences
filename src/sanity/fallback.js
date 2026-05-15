export const fallbackEvents = [
  { _id: 'e1', title: 'Festival des 2 rivières', startDate: '2025-06-11', endDate: '2025-06-18', image: '/images/marina.jpg' },
  { _id: 'e2', title: 'Foire Paysanne',           startDate: '2025-06-11', endDate: '2025-06-18', image: '/images/riverside.jpg' },
  { _id: 'e3', title: 'Triathlon de la Ferté',     startDate: '2025-09-21', endDate: null,         image: '/images/events.png' },
]

export const fallbackPosts = [
  { _id: 'p1', category: 'Nautisme',     title: 'Les bonnes pratiques du plaisancier',              publishedAt: '2025-05-12', tags: ['Amarrage', 'Équipement'], image: '/images/marina.jpg',    slug: { current: 'bonnes-pratiques-plaisancier' } },
  { _id: 'p2', category: 'Loisirs',      title: 'Les 5 meilleures balades en canoë sur la Marne',   publishedAt: '2025-05-08', tags: ['Canoë', 'Nature'],         image: '/images/riverside.jpg', slug: { current: 'balades-canoe-marne' } },
  { _id: 'p3', category: 'Port',         title: "Arrivée par voie fluviale : mode d'emploi complet", publishedAt: '2025-05-02', tags: ['Navigation', 'Conseils'],  image: '/images/hero-2.jpg',    slug: { current: 'arrivee-voie-fluviale' } },
  { _id: 'p4', category: 'Événements',   title: 'Festival des 2 rivières : programme complet',       publishedAt: '2025-04-28', tags: ['Festival', 'Culture'],     image: '/images/events.png',    slug: { current: 'festival-2-rivieres-programme' } },
  { _id: 'p5', category: 'Gastronomie',  title: 'La guinguette du port : les saveurs de la Marne',   publishedAt: '2025-04-20', tags: ['Restaurant', 'Local'],     image: '/images/activities.png',slug: { current: 'guinguette-port-saveurs' } },
  { _id: 'p6', category: 'Nature',       title: 'Découvrir la biodiversité des berges',               publishedAt: '2025-04-15', tags: ['Écologie', 'Randonnée'],   image: '/images/hero-port.jpg', slug: { current: 'biodiversite-berges' } },
]

export const fallbackActivities = [
  { _id: 'a1', title: 'Canoë & Kayak',         category: 'Nautisme', description: "Descendez la Marne au fil de l'eau.",           image: '/images/riverside.jpg' },
  { _id: 'a2', title: 'Vélo sur les berges',    category: 'Sport',    description: 'Parcourez les pistes cyclables en bord de Marne.', image: '/images/hero-2.jpg' },
  { _id: 'a3', title: 'Bateau électrique',      category: 'Nautisme', description: 'Navigation calme et éco-responsable.',            image: '/images/marina.jpg' },
  { _id: 'a4', title: 'Pêche fluviale',         category: 'Famille',  description: 'Activité en plein air pour petits et grands.',    image: '/images/activities.png' },
  { _id: 'a5', title: 'Initiation voile',       category: 'Nautisme', description: 'Cours et stages pour tous niveaux.',               image: '/images/riverside.jpg' },
  { _id: 'a6', title: 'Randonnée riverside',    category: 'Sport',    description: 'Chemins balisés au bord de la Marne.',            image: '/images/hero-port.jpg' },
]

export const fallbackEngagements = [
  { _id: 'g1', title: 'Excellence nautique',    image: '/images/marina.jpg' },
  { _id: 'g2', title: 'Accessibilité tarifaire', image: '/images/activities.png' },
  { _id: 'g3', title: 'Vision durable',          image: '/images/riverside.jpg' },
]

export const fallbackFeaturedPost = fallbackPosts[0]

export function formatEventDate(event) {
  if (!event.startDate) return ''
  const start = new Date(event.startDate)
  const options = { day: 'numeric', month: 'long' }
  const startStr = start.toLocaleDateString('fr-FR', options)
  if (event.endDate) {
    const end = new Date(event.endDate)
    const endStr = end.toLocaleDateString('fr-FR', options)
    return `du ${startStr} au ${endStr}`
  }
  return `le ${startStr}`
}
