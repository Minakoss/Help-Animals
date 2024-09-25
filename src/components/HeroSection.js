import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Βρείτε τον επομενό σας φίλο </h1>
      </div>

      <div className="hero-image">
        <img
          src="black_dog_paw_transparent.png"
          alt="Εικόνα φροντίδας κατοικίδιου"
        />
      </div>
      <p>Βοηθάμε και φροντίσουμε τους αγαπημένους μας φίλους.</p>
    </section>
  );
};

export default HeroSection;
