import React from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-12 flex-grow">
      <div className="bg-white p-8 shadow rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Réinitialiser le mot de passe
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Entrez votre adresse email pour recevoir un lien de réinitialisation.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
