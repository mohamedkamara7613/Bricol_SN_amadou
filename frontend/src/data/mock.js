// Mock data for workers around the user location
export const mockWorkers = [
  {
    id: 1,
    name: "Pierre Dubois",
    specialty: "Électricien",
    rating: 4.8,
    position: { x: 35, y: 30 },
    available: true,
    distance: 2.1,
    phone: "06 12 34 56 78",
    email: "pierre.dubois@email.com",
    experience: "8 ans",
    hourlyRate: "45€/h",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description: "Électricien qualifié avec 8 ans d'expérience. Spécialisé dans les installations résidentielles et la domotique moderne.",
    skills: ["Installation électrique", "Domotique", "Tableau électrique", "Éclairage LED"],
    certifications: ["Qualification RGE", "Habilitation électrique"],
    projects: [
      {
        title: "Rénovation complète maison 120m²",
        description: "Installation électrique complète, domotique et éclairage LED",
        duration: "2 semaines",
        year: "2024"
      },
      {
        title: "Installation système solaire",
        description: "Raccordement panneaux solaires et onduleur",
        duration: "3 jours",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Marie L.",
        rating: 5,
        comment: "Excellent travail, très professionnel et ponctuel. Je recommande vivement !",
        date: "2024-01-15"
      },
      {
        author: "Jean M.",
        rating: 4,
        comment: "Bon travail, quelques petits détails à revoir mais globalement satisfait.",
        date: "2023-12-10"
      },
      {
        author: "Sophie B.",
        rating: 5,
        comment: "Parfait ! Installation domotique impeccable, tout fonctionne parfaitement.",
        date: "2023-11-22"
      }
    ]
  },
  {
    id: 2,
    name: "Marie Lefebvre",
    specialty: "Plombier",
    rating: 4.9,
    position: { x: 65, y: 25 },
    available: true,
    distance: 1.8,
    phone: "06 98 76 54 32",
    email: "marie.lefebvre@email.com",
    experience: "12 ans",
    hourlyRate: "50€/h",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c96375b4?w=150&h=150&fit=crop&crop=face",
    description: "Plombier expérimenté avec 12 ans d'expérience. Spécialisée dans les réparations d'urgence et les installations sanitaires.",
    skills: ["Réparations d'urgence", "Installation sanitaire", "Chauffage", "Détection de fuites"],
    certifications: ["Qualification PGN", "Certificat soudure"],
    projects: [
      {
        title: "Rénovation salle de bain",
        description: "Installation complète douche italienne et WC suspendu",
        duration: "1 semaine",
        year: "2024"
      },
      {
        title: "Réparation fuite importante",
        description: "Détection et réparation fuite sous dalle",
        duration: "2 jours",
        year: "2024"
      }
    ],
    reviews: [
      {
        author: "Pierre D.",
        rating: 5,
        comment: "Intervention rapide et efficace, problème résolu en 2h !",
        date: "2024-02-01"
      },
      {
        author: "Claire R.",
        rating: 5,
        comment: "Très professionnelle, travail soigné et prix correct.",
        date: "2024-01-20"
      },
      {
        author: "Michel K.",
        rating: 5,
        comment: "Excellente prestation, je ferai de nouveau appel à elle.",
        date: "2023-12-15"
      }
    ]
  },
  {
    id: 3,
    name: "Jean Martin",
    specialty: "Menuisier",
    rating: 4.7,
    position: { x: 40, y: 70 },
    available: true,
    distance: 3.2,
    phone: "06 11 22 33 44",
    email: "jean.martin@email.com",
    experience: "15 ans",
    hourlyRate: "55€/h",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description: "Menuisier artisan avec 15 ans d'expérience. Spécialisé dans la menuiserie sur mesure et l'agencement intérieur.",
    skills: ["Menuiserie sur mesure", "Agencement", "Parquet", "Placards"],
    certifications: ["CAP Menuiserie", "Qualification Artisan"],
    projects: [
      {
        title: "Cuisine sur mesure",
        description: "Conception et réalisation cuisine bois massif",
        duration: "3 semaines",
        year: "2024"
      },
      {
        title: "Bibliothèque intégrée",
        description: "Bibliothèque sur mesure avec éclairage intégré",
        duration: "1 semaine",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Anne T.",
        rating: 5,
        comment: "Travail magnifique, Jean est un vrai artisan ! Très satisfaite.",
        date: "2024-01-10"
      },
      {
        author: "Paul V.",
        rating: 4,
        comment: "Bonne qualité, délais respectés, quelques finitions à revoir.",
        date: "2023-12-05"
      },
      {
        author: "Louise M.",
        rating: 5,
        comment: "Parfait ! Cuisine de rêve réalisée avec passion.",
        date: "2023-11-18"
      }
    ]
  },
  {
    id: 4,
    name: "Sophie Bernard",
    specialty: "Peintre",
    rating: 4.6,
    position: { x: 70, y: 60 },
    available: true,
    distance: 2.9,
    phone: "06 55 44 33 22",
    email: "sophie.bernard@email.com",
    experience: "6 ans",
    hourlyRate: "35€/h",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    description: "Peintre décoratrice avec 6 ans d'expérience. Spécialisée dans la peinture décorative et les finitions haut de gamme.",
    skills: ["Peinture décorative", "Enduits", "Papier peint", "Finitions"],
    certifications: ["CAP Peinture", "Formation décoration"],
    projects: [
      {
        title: "Décoration salon moderne",
        description: "Peinture et pose papier peint design",
        duration: "5 jours",
        year: "2024"
      },
      {
        title: "Rénovation façade",
        description: "Nettoyage et peinture façade maison",
        duration: "1 semaine",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "David L.",
        rating: 5,
        comment: "Travail soigné et créatif, Sophie a de très bonnes idées !",
        date: "2024-01-25"
      },
      {
        author: "Emma S.",
        rating: 4,
        comment: "Bonne prestation, quelques retouches nécessaires.",
        date: "2023-12-30"
      },
      {
        author: "Thomas R.",
        rating: 5,
        comment: "Excellent rendu, très professionnelle et à l'écoute.",
        date: "2023-11-28"
      }
    ]
  },
  {
    id: 5,
    name: "Laurent Moreau",
    specialty: "Carreleur",
    rating: 4.5,
    position: { x: 25, y: 45 },
    available: true,
    distance: 3.5,
    phone: "06 77 88 99 00",
    email: "laurent.moreau@email.com",
    experience: "10 ans",
    hourlyRate: "40€/h",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    description: "Carreleur expérimenté avec 10 ans d'expérience. Spécialisé dans la pose de carrelage et faïence pour tous espaces.",
    skills: ["Carrelage sol", "Faïence", "Pierre naturelle", "Mosaïque"],
    certifications: ["CAP Carrelage", "Formation pierres naturelles"],
    projects: [
      {
        title: "Carrelage terrasse 50m²",
        description: "Pose carrelage extérieur antidérapant",
        duration: "4 jours",
        year: "2024"
      },
      {
        title: "Salle de bain mosaïque",
        description: "Pose mosaïque et carrelage salle de bain",
        duration: "3 jours",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Isabelle P.",
        rating: 4,
        comment: "Travail correct, respecte les délais, bon rapport qualité/prix.",
        date: "2024-01-08"
      },
      {
        author: "François M.",
        rating: 5,
        comment: "Excellent travail sur ma terrasse, très satisfait !",
        date: "2023-12-20"
      },
      {
        author: "Céline B.",
        rating: 4,
        comment: "Bonne prestation, quelques joints à reprendre.",
        date: "2023-11-12"
      }
    ]
  },
  {
    id: 6,
    name: "Isabelle Petit",
    specialty: "Électricien",
    rating: 4.8,
    position: { x: 60, y: 40 },
    available: true,
    distance: 1.4,
    phone: "06 33 22 11 00",
    email: "isabelle.petit@email.com",
    experience: "7 ans",
    hourlyRate: "42€/h",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    description: "Électricienne spécialisée avec 7 ans d'expérience. Experte en dépannage et installation électrique résidentielle.",
    skills: ["Dépannage urgent", "Installation prises", "Éclairage", "Remise aux normes"],
    certifications: ["Qualification RGE", "Habilitation B1V"],
    projects: [
      {
        title: "Remise aux normes électriques",
        description: "Mise aux normes tableau électrique complet",
        duration: "2 jours",
        year: "2024"
      },
      {
        title: "Installation éclairage jardin",
        description: "Éclairage extérieur LED avec minuterie",
        duration: "1 jour",
        year: "2024"
      }
    ],
    reviews: [
      {
        author: "Marc D.",
        rating: 5,
        comment: "Intervention rapide, problème résolu efficacement !",
        date: "2024-02-05"
      },
      {
        author: "Julie K.",
        rating: 5,
        comment: "Très professionnelle, travail soigné et propre.",
        date: "2024-01-18"
      },
      {
        author: "Robert L.",
        rating: 4,
        comment: "Bonne prestation, prix un peu élevé mais qualité au rendez-vous.",
        date: "2023-12-25"
      }
    ]
  },
  {
    id: 7,
    name: "Michel Rousseau",
    specialty: "Maçon",
    rating: 4.4,
    position: { x: 20, y: 20 },
    available: false,
    distance: 4.2,
    phone: "06 44 55 66 77",
    email: "michel.rousseau@email.com",
    experience: "20 ans",
    hourlyRate: "48€/h",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    description: "Maçon expérimenté avec 20 ans d'expérience. Spécialisé dans la construction et rénovation de maçonnerie.",
    skills: ["Maçonnerie générale", "Rénovation", "Enduits", "Fondations"],
    certifications: ["CAP Maçonnerie", "Qualification RGE"],
    projects: [
      {
        title: "Extension maison 30m²",
        description: "Construction extension avec fondations",
        duration: "3 semaines",
        year: "2023"
      },
      {
        title: "Rénovation mur pierre",
        description: "Rejointoiement mur en pierre naturelle",
        duration: "1 semaine",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Patricia G.",
        rating: 4,
        comment: "Travail sérieux, respecte les délais, bon professionnel.",
        date: "2023-12-01"
      },
      {
        author: "André M.",
        rating: 5,
        comment: "Excellent maçon, travail de qualité sur mon extension.",
        date: "2023-10-15"
      },
      {
        author: "Catherine R.",
        rating: 4,
        comment: "Bonne prestation, quelques finitions à améliorer.",
        date: "2023-09-20"
      }
    ]
  },
  {
    id: 8,
    name: "Nathalie Garnier",
    specialty: "Plombier",
    rating: 4.9,
    position: { x: 80, y: 35 },
    available: true,
    distance: 4.8,
    phone: "06 88 77 66 55",
    email: "nathalie.garnier@email.com",
    experience: "9 ans",
    hourlyRate: "47€/h",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    description: "Plombier expert avec 9 ans d'expérience. Spécialisée dans les installations sanitaires et le chauffage.",
    skills: ["Installation sanitaire", "Chauffage", "Climatisation", "Énergies renouvelables"],
    certifications: ["Qualification PGN", "RGE QualiPAC"],
    projects: [
      {
        title: "Installation pompe à chaleur",
        description: "Installation PAC air-eau avec radiateurs",
        duration: "2 jours",
        year: "2024"
      },
      {
        title: "Rénovation chauffage",
        description: "Remplacement chaudière et radiateurs",
        duration: "1 semaine",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Sylvain B.",
        rating: 5,
        comment: "Excellente prestation, très compétente en énergies renouvelables.",
        date: "2024-01-30"
      },
      {
        author: "Martine L.",
        rating: 5,
        comment: "Parfait ! Installation impeccable, très satisfaite.",
        date: "2024-01-12"
      },
      {
        author: "Philippe T.",
        rating: 5,
        comment: "Professionnelle et efficace, je recommande !",
        date: "2023-12-08"
      }
    ]
  },
  {
    id: 9,
    name: "Claude Leroy",
    specialty: "Chauffagiste",
    rating: 4.7,
    position: { x: 45, y: 55 },
    available: true,
    distance: 1.9,
    phone: "06 99 88 77 66",
    email: "claude.leroy@email.com",
    experience: "14 ans",
    hourlyRate: "52€/h",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    description: "Chauffagiste expérimenté avec 14 ans d'expérience. Spécialisé dans l'installation et maintenance de systèmes de chauffage.",
    skills: ["Chauffage central", "Chaudière", "Radiateurs", "Maintenance"],
    certifications: ["Qualification RGE", "PGN Chauffage"],
    projects: [
      {
        title: "Installation chaudière gaz",
        description: "Remplacement chaudière avec thermostat connecté",
        duration: "1 jour",
        year: "2024"
      },
      {
        title: "Système chauffage complet",
        description: "Installation chauffage central maison neuve",
        duration: "1 semaine",
        year: "2023"
      }
    ],
    reviews: [
      {
        author: "Valérie D.",
        rating: 5,
        comment: "Très professionnel, installation parfaite et conseils utiles.",
        date: "2024-01-22"
      },
      {
        author: "Gérard P.",
        rating: 4,
        comment: "Bon travail, délais respectés, prix raisonnable.",
        date: "2023-12-18"
      },
      {
        author: "Brigitte S.",
        rating: 5,
        comment: "Excellent chauffagiste, très compétent et soigneux.",
        date: "2023-11-30"
      }
    ]
  },
  {
    id: 10,
    name: "Véronique Bonnet",
    specialty: "Jardinier",
    rating: 4.6,
    position: { x: 75, y: 75 },
    available: true,
    distance: 5.1,
    phone: "06 11 00 99 88",
    email: "veronique.bonnet@email.com",
    experience: "11 ans",
    hourlyRate: "30€/h",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    description: "Jardinière paysagiste avec 11 ans d'expérience. Spécialisée dans la création et entretien d'espaces verts.",
    skills: ["Paysagisme", "Entretien", "Élagage", "Plantation"],
    certifications: ["CAP Paysagisme", "Certificat phytosanitaire"],
    projects: [
      {
        title: "Aménagement jardin 200m²",
        description: "Création jardin paysager avec bassin",
        duration: "2 semaines",
        year: "2024"
      },
      {
        title: "Entretien espaces verts",
        description: "Taille haies et entretien pelouse",
        duration: "1 jour",
        year: "2024"
      }
    ],
    reviews: [
      {
        author: "Christophe M.",
        rating: 5,
        comment: "Magnifique travail, mon jardin est superbe maintenant !",
        date: "2024-01-14"
      },
      {
        author: "Monique T.",
        rating: 4,
        comment: "Bonne prestation, travail soigné et prix correct.",
        date: "2023-12-28"
      },
      {
        author: "Alain R.",
        rating: 5,
        comment: "Très professionnelle, excellent résultat sur mon aménagement.",
        date: "2023-11-25"
      }
    ]
  }
];

// Mock specialties for filtering
export const mockSpecialties = [
  "Électricien",
  "Plombier",
  "Menuisier",
  "Peintre",
  "Carreleur",
  "Maçon",
  "Chauffagiste",
  "Jardinier",
  "Couvreur",
  "Serrurier"
];

// Mock user location
export const mockUserLocation = {
  latitude: 48.8566,
  longitude: 2.3522,
  address: "Paris, France"
};