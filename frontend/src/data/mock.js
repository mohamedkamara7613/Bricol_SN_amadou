// Mock data for workers around the user location
export const mockWorkers = [
  {
    id: 1,
    name: "Pierre Dubois",
    specialty: "Électricien",
    rating: 4.8,
    position: { x: 35, y: 30 },
    available: true,
    distance: 2.1
  },
  {
    id: 2,
    name: "Marie Lefebvre",
    specialty: "Plombier",
    rating: 4.9,
    position: { x: 65, y: 25 },
    available: true,
    distance: 1.8
  },
  {
    id: 3,
    name: "Jean Martin",
    specialty: "Menuisier",
    rating: 4.7,
    position: { x: 40, y: 70 },
    available: true,
    distance: 3.2
  },
  {
    id: 4,
    name: "Sophie Bernard",
    specialty: "Peintre",
    rating: 4.6,
    position: { x: 70, y: 60 },
    available: true,
    distance: 2.9
  },
  {
    id: 5,
    name: "Laurent Moreau",
    specialty: "Carreleur",
    rating: 4.5,
    position: { x: 25, y: 45 },
    available: true,
    distance: 3.5
  },
  {
    id: 6,
    name: "Isabelle Petit",
    specialty: "Électricien",
    rating: 4.8,
    position: { x: 60, y: 40 },
    available: true,
    distance: 1.4
  },
  {
    id: 7,
    name: "Michel Rousseau",
    specialty: "Maçon",
    rating: 4.4,
    position: { x: 20, y: 20 },
    available: false,
    distance: 4.2
  },
  {
    id: 8,
    name: "Nathalie Garnier",
    specialty: "Plombier",
    rating: 4.9,
    position: { x: 80, y: 35 },
    available: true,
    distance: 4.8
  },
  {
    id: 9,
    name: "Claude Leroy",
    specialty: "Chauffagiste",
    rating: 4.7,
    position: { x: 45, y: 55 },
    available: true,
    distance: 1.9
  },
  {
    id: 10,
    name: "Véronique Bonnet",
    specialty: "Jardinier",
    rating: 4.6,
    position: { x: 75, y: 75 },
    available: true,
    distance: 5.1
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