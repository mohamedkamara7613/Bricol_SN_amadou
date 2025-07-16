import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
     <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-8 flex-grow">
      <div className="text-center space-y-8">
        <h1 className="text-2xl font-bold text-blue-800">BIENVENUE</h1>
        <img
          src="/logo_bricol_sn.png"
          alt="Logo Bricol SN"
          className="w-32 h-32 object-contain rounded bg-black mx-auto"
        />
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-800 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
        >
          Accéder
        </button>
      </div>
    </div>
  );
}
