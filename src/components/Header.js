import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import logo from "./logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Domov
        </Link>
        <Link
          to="/parents"
          className={`nav-link ${
            location.pathname === "/parents" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Pre rodičov
        </Link>
        <Link
          to="/news"
          className={`nav-link ${
            location.pathname === "/news" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Oznamy
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          O nás
        </Link>
        <Link
          to="/zapis"
          className={`nav-link ${
            location.pathname === "/zapis" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Zápis
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Kontakt
        </Link>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
