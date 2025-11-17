// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Designers from "./pages/Designers.jsx";
import PriceCalculator from "./pages/PriceCalculator.jsx"; // ✅ new import
import Interiors from "./pages/Interiors";
import Furnishings from "./pages/Furnishings";
import ThreeDEditor from "./pages/ThreeDEditor.jsx";
// import ModularJourney from "./pages/ModularJourney.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/interior-editor" element={<ThreeDEditor />} />
        <Route path="/" element={<Home />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/price-calculator" element={<PriceCalculator />} /> {/* ✅ route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/furnishings" element={<Furnishings />} />
        {/* <Route path="/modular-journey" element={<ModularJourney />} /> */}
      </Routes>
      <Footer />
      
    </>
  );
}
