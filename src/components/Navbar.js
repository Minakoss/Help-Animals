import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Αρχική</a>
        </li>
        <li>
          <a href="/about">Σχετικά με εμάς</a>
        </li>
        <li>
          <a href="#">Υπηρεσίες</a>
        </li>
        <li>
          <a href="/contact">Επικοινωνία</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
