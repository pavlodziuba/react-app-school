import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css"; // Import CSS file for styling
import logo from "./logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Get the navigate function
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  // Handle log out (you can modify this function to perform the actual logout logic)
  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
        {/* Conditionally render the logout button on the /admin page */}
        {location.pathname === "/admin" && (
          <button className="logout-button nav-link" onClick={handleLogout}>
            Odhlásiť sa
          </button>
        )}
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
