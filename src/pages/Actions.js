import React from "react";
import "./Actions.css";

const Actions = () => {
  return (
    <section className="actions-section">
      <div className="actions-container">
        <h1>Δράσεις Φιλοζωικών Ομάδων</h1>
        <p>
          Οι φιλοζωικές ομάδες μας είναι ενεργές με διάφορες δράσεις, από τη
          διάσωση ζώων έως την ευαισθητοποίηση της κοινωνίας για τα δικαιώματα
          των ζώων.
        </p>

        <div className="actions-cards">
          <div className="action-card">
            <img src="resque.jpg" alt="Δράση Διάσωσης" />
            <h3>Διάσωση Αδέσποτων Ζώων</h3>
            <p>
              Οι εθελοντές συμμετέχουν στη διάσωση αδέσποτων ζώων από τους
              δρόμους και την παροχή άμεσης φροντίδας.
            </p>
          </div>

          <div className="action-card">
            <img src="adopt.jpg" alt="Δράση Ευαισθητοποίησης" />
            <h3>Εκδηλώσεις Ευαισθητοποίησης</h3>
            <p>
              Οργανώνουμε εκδηλώσεις για την ενημέρωση του κοινού σχετικά με τα
              δικαιώματα των ζώων και τη σωστή φροντίδα τους.
            </p>
          </div>

          <div className="action-card">
            <img src="dog_1.jpg" alt="Υιοθεσίες" />
            <h3>Προγράμματα Υιοθεσίας</h3>
            <p>
              Παρέχουμε πλατφόρμα για την υιοθεσία κατοικιδίων έτσι ώστε να
              μπορεί η οικογένεια να βρει και να προσφέρει μια νέα ζωή σε ένα
              ζώο.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
