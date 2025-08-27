// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Step1Personal from "./pages/signup/Step1Personal";
import Step2Additional from "./pages/signup/Step2Additional";
import Step3Address from "./pages/signup/Step3Address";

import DashboardLayout from "./dashboard/layout/DashboardLayout";
import DashHome from "./dashboard/pages/DashHome";
import Chat from "./dashboard/pages/Chat";
import Notifications from "./dashboard/pages/Notifications";
import Membership from "./dashboard/pages/Membership";
import Settings from "./dashboard/pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />

        {/* Signup flow */}
        <Route
          path="/signup"
          element={<Navigate to="/signup/step-1" replace />}
        />
        <Route path="/signup/step-1" element={<Step1Personal />} />
        <Route path="/signup/step-2" element={<Step2Additional />} />
        <Route path="/signup/step-3" element={<Step3Address />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashHome />} />
          <Route path="chat" element={<Chat />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="membership" element={<Membership />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
