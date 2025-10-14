import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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

import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import MediaBlog from "./pages/MediaBlog";
import OurRoots from "./components/OurRoots";
import Activities from "./pages/Activities";
import PravasiSambalYojana from "./pages/PravasiSambalYojana";
import Initiatives from "./pages/Initiatives";
import InvestmentSectors from "./pages/InvestmentSectors";  

export default function AppWrapper() {
  return (
    <AppContextProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AppContextProvider>
  );
}

// ✅ Routes where Navbar should be visible
const navbarRoutes = [
  "/",
  "/about",
  "/gallery",
  "/contact",
  "/media-blog",
  "/faq",
  "/our-roots",
  "/activities",              // <-- add
  "/pravasi-sambal-yojana",   // <-- add
  "/initiatives",             // <-- add
  "/investment-sectors", // <-- Add this
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Toaster />
      {navbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes location={location} key={location.pathname}>
        {/* Public pages (no transition) */}  
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media-blog" element={<MediaBlog />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Auth pages (with transition) */}
        <Route
          path="/login"
          element={
            <AnimatePresence mode="wait">
              <PageTransition>
                <Login />
              </PageTransition>
            </AnimatePresence>
          }
        />
        <Route
          path="/signup"
          element={<Navigate to="/signup/step-1" replace />}
        />
        <Route
          path="/signup/step-1"
          element={
            <AnimatePresence mode="wait">
              <PageTransition>
                <Step1Personal />
              </PageTransition>
            </AnimatePresence>
          }
        />
        <Route
          path="/signup/step-2"
          element={
            <AnimatePresence mode="wait">
              <PageTransition>
                <Step2Additional />
              </PageTransition>
            </AnimatePresence>
          }
        />
        <Route
          path="/signup/step-3"
          element={
            <AnimatePresence mode="wait">
              <PageTransition>
                <Step3Address />
              </PageTransition>
            </AnimatePresence>
          }
        />

        {/* Dashboard (no transition for layout/content) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashHome />} />
          <Route path="chat" element={<Chat />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="membership" element={<Membership />} />
          <Route path="settings" element={<Settings />} />
          
        </Route>

        {/* Additional Route */}
        <Route path="/our-roots" element={<OurRoots />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/pravasi-sambal-yojana" element={<PravasiSambalYojana />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/investment-sectors" element={<InvestmentSectors />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
