import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import Fotografia from "./pages/servicios/Fotografia";

import CommunityManagement from "./pages/servicios/CommunityManagement";


import Clientes from "./components/Clientes";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Nosotros />} />
        <Route path="/" element={<Servicios />} />
        <Route path="/servicios/fotografia" element={<Fotografia />} />
        
        <Route path="/servicios/community-management" element={<CommunityManagement />} />
        
        <Route path="/" element={<Clientes />} />
        
        
      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;