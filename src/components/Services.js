import React from "react";

const Services = () => {
  return (
    <section className="services">
      <h2>Οι Υπηρεσίες μας</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Υγειονομική Βοήθεια για Κατοικίδια</h3>
          <p>
            Κτηνιατρική φροντίδα, ιατρική υποστήριξη και υπηρεσίες
            αποκατάστασης.
          </p>
        </div>
        <div className="card">
          <h3>Υιοθεσία Κατοικιδίων</h3>
          <p>Σας βοηθάμε να βρείτε τον τέλειο σύντροφο μέσω υιοθεσίας.</p>
        </div>
        <div className="card">
          <h3>Τροφές & Εφόδια για Κατοικίδια</h3>
          <p>
            Παρέχουμε ποιοτική τροφή και απαραίτητα εφόδια για κατοικίδια που
            χρειάζονται βοήθεια.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
