import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-12 flex-grow">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-blue-800">404</h1>
        <p className="text-xl font-semibold text-gray-700">Page non trouvée</p>
        <p className="text-gray-600">Désolé, cette page n'existe pas.</p>
        <Link
          to="/"
          className="inline-block mt-4 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
