import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="Rajasthan Pravasi Foundation" className="h-10" />
          <Link to="/login" className="text-sm text-blue-600">Logout</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-blue-900 mb-4">Welcome 👋</h1>
        <p className="text-gray-600">
          This is a placeholder dashboard. Replace with real content after authentication.
        </p>
      </main>
    </div>
  );
}
