import { useState } from 'react';

const services = [
    { label: 'Plomberie', value: 'plomberie' },
    { label: 'Électricité', value: 'electricite' },
    { label: 'Peinture', value: 'peinture' },
    { label: 'Menuiserie', value: 'menuiserie' },
    { label: 'Jardinage', value: 'jardinage' },
    { label: 'Déménagement', value: 'demenagement' },
    { label: 'Nettoyage', value: 'nettoyage' },
    { label: 'Autre', value: 'autre' }
];

export default function ServiceChoicePage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className=" bg-gray-100 p-6 flex flex-col items-center justify-center py-8 flex-grow">
      <h1 className="text-2xl font-bold mb-8 text-blue-800">Choisissez un service</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
        {services.map((service) => (
          <button
            key={service.value}
            onClick={() => setSelectedService(service.value)}
            className={`px-4 py-3 rounded-lg border transition-all shadow-sm text-center font-semibold ${
              selectedService === service.value
                ? 'bg-blue-800 text-white border-blue-800'
                : 'bg-white text-blue-800 border-gray-300 hover:bg-blue-100'
            }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="mt-6 text-blue-800 font-medium">
          Service sélectionné : <span className="font-bold">{selectedService}</span>
        </div>
      )}

      <button
        className="mt-10 bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition"
        onClick={() => {
          // redirection ou stockage à venir
        }}
      >
        Continuer
      </button>
    </div>
  );
}
