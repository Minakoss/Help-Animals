import React from "react";

const Services = () => {
  return (
    <section className="services">
      <h2>Οι Υπηρεσίες μας</h2>
      <div className="service-cards">
        <div className="card">
          <div className="card-inner">
            {/* Μπροστινή πλευρά με εικόνα */}
            <div className="card-front">
              <img
                src="istockphoto-1386206447-612x612.jpg"
                alt="Υγειονομική Βοήθεια για Κατοικίδια"
              />
            </div>
            {/* Πίσω πλευρά με πληροφορίες */}
            <div className="card-back">
              <div>
                <h3>Υγειονομική Βοήθεια για Κατοικίδια</h3>
                <p>
                  Κτηνιατρική φροντίδα, ιατρική υποστήριξη και υπηρεσίες
                  αποκατάστασης.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img
                src="istockphoto-837572972-612x612.jpg"
                alt="Υιοθεσία Κατοικιδίων"
              />
            </div>
            <div className="card-back">
              <div>
                <h3>Υιοθεσία Κατοικιδίων</h3>
                <p>Σας βοηθάμε να βρείτε τον τέλειο σύντροφο μέσω υιοθεσίας.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img
                src="ai-generated-carnivorous-dog-enjoys-dish-with-natural-food-sticking-out-photo.jpg"
                alt="Τροφές & Εφόδια για Κατοικίδια"
              />
            </div>
            <div className="card-back">
              <div>
                <h3>Τροφές & Εφόδια για Κατοικίδια</h3>
                <p>
                  Παρέχουμε ποιοτική τροφή και απαραίτητα εφόδια για κατοικίδια
                  που χρειάζονται βοήθεια.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="volunteer.webp" alt="Τροφές & Εφόδια για Κατοικίδια" />
            </div>
            <div className="card-back">
              <div>
                <h3>Εθελοντικη δράση</h3>
                <p>Αναζητάτε έναν τετράποδο φίλο; Θέλετε να βοηθήσετε;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
