import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to RealEstatePro</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Manage your real estate investments efficiently. Add properties, calculate key financial metrics, and stay organized.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
        <Link
          to="/input"
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Add Property
        </Link>
      </div>
    </div>
  );
}
