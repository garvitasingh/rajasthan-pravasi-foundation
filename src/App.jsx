// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LandingPage from "./pages/LandingPage";
import FAQ from "./pages/FAQ";
// import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() { 
  return ( 
    <Router> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
  