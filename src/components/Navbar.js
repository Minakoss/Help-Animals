import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Αρχική</Link>
        </li>
        <li>
          <Link to="/about">Σχετικά με εμάς</Link>
        </li>
        <li>
          <Link to="/adoption">Βρείτε κατοικίδιο</Link>
        </li>
        <li>
          <Link to="/actions">Δράσεις</Link> {/* Νέα διαδρομή */}
        </li>
        <li>
          <Link to="/contact">Επικοινωνία</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
