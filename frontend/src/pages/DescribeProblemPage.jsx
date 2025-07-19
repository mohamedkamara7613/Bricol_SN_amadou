import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DescribeProblemePage() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center justify-center py-8 flex-grow">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">
        Décrivez votre problème
      </h1>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ex : Ma douche fuit depuis ce matin..."
        className="w-full max-w-xl h-48 p-4 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => {navigate('/search')}}
        className="mt-8 bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition"
      >
        Continuer
      </button>
    </div>
  );
}
