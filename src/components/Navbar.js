import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Importación correcta desde assets
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setShowSubmenu(!showSubmenu);

  return (
    <>
      <nav className="navbar">
        <button className="hamburger-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="logo-container">
          <img src={logo} alt="Logo de ALPHA LLAMA" className="logo-img" />
        </div>
      </nav>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <ul>
            <li><a href="/">Home</a></li>

            <li><a href="/servicios/community-management">Marketing</a></li>
            <li><a href="/servicios/fotografia">Video y Fotografía</a></li>

            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;