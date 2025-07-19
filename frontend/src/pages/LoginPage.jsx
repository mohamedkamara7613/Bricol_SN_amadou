import { Link } from "react-router-dom"; // Assure-toi d'avoir ça en haut si tu utilises un lien
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-gray-100 py-8 flex-grow">
      <div className="bg-white p-8 shadow rounded w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Connexion</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
          <button
            onClick={() => navigate('/register/step1')}
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
            
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
