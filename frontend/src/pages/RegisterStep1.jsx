import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterStep1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    role:'',
    metier:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici tu pourrais sauvegarder dans un contexte ou localStorage si multi-étapes
    console.log('Données saisies :', formData);
    navigate('/register/step2'); // ou la suite du processus d'inscription
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-8 flex-grow">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Inscription - Étape 1</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
            {/* Radio pour rôle */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Vous êtes :</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="particulier"
                  checked={formData.role === 'particulier'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Particulier
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="ouvrier"
                  checked={formData.role === 'ouvrier'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Ouvrier
              </label>
            </div>
          </div>

            {formData.role === 'ouvrier' && (
            <input
                type="text"
                name="metier"
                placeholder="Métier"
                value={formData.metier || ''}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            )}

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
            onClick={() => navigate('/register/step2')}
          >
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
}
