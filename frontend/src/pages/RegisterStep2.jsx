import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterStep2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adresse: '',
    ville: '',
    codePostal: '',
    motDePasse: '',
    confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.motDePasse !== formData.confirmation) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    // Sauvegarde ou envoi des données
    console.log('Étape 2 données :', formData);

    navigate('/register/summary'); // Étape suivante (confirmation / résumé)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-8 flex-grow">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Inscription - Étape 2</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="adresse"
            placeholder="Adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="ville"
            placeholder="Ville"
            value={formData.ville}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="codePostal"
            placeholder="Code postal"
            value={formData.codePostal}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="motDePasse"
            placeholder="Mot de passe"
            value={formData.motDePasse}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmation"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmation}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
          >
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
}
