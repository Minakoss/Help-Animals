import React from "react";

const Adoption = () => {
  return (
    <section className="adoption">
      <h2>Υιοθετήστε ένα Κατοικίδιο</h2>
      <div className="adoption-cards">
        <div className="card">
          <div className="card-inner">
            {/* Μπροστινή πλευρά με εικόνα */}
            <div className="card-front">
              <img src="dog1.jpg" alt="Σκύλος προς Υιοθεσία" />
            </div>
            {/* Πίσω πλευρά με πληροφορίες */}
            <div className="card-back">
              <div>
                <h3>Σκύλος: Max</h3>
                <p>
                  Φυλή: Λαμπραντόρ, Ηλικία: 3 χρονών. Ένας φιλικός και
                  παιχνιδιάρης σκύλος που ψάχνει το παντοτινό του σπίτι.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="cat1.jpg" alt="Γάτα προς Υιοθεσία" />
            </div>
            <div className="card-back">
              <div>
                <h3>Γάτα: Bella</h3>
                <p>
                  Φυλή: Περσική, Ηλικία: 2 χρονών. Αναζητά ένα ήρεμο περιβάλλον
                  για να προσφέρει αγάπη.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="rabbit1.jpg" alt="Κουνέλι προς Υιοθεσία" />
            </div>
            <div className="card-back">
              <div>
                <h3>Κουνέλι: Fluffy</h3>
                <p>
                  Ηλικία: 1 χρονών. Ένα παιχνιδιάρικο κουνέλι που αγαπά τις
                  αγκαλιές.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="bird1.jpg" alt="Πουλί προς Υιοθεσία" />
            </div>
            <div className="card-back">
              <div>
                <h3>Παπαγάλος: Kiwi</h3>
                <p>
                  Ηλικία: 4 χρονών. Ένας έξυπνος και ομιλητικός παπαγάλος
                  έτοιμος για υιοθεσία.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
