import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Αρχική
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            Σχετικά με εμάς
          </Link>
        </li>
        <li>
          <Link to="/adoption" onClick={() => setIsOpen(false)}>
            Βρείτε κατοικίδιο
          </Link>
        </li>
        <li>
          <Link to="/actions" onClick={() => setIsOpen(false)}>
            Δράσεις
          </Link>
        </li>
        <li>
          <Link to="/filozoikes" onClick={() => setIsOpen(false)}>
            Φιλοζωικές
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Επικοινωνία
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
