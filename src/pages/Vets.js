import React, { useState } from "react";
import "./Vets.css";

const Vets = () => {
  const vets = [
    { id: 1, name: "Φιλοζωική Ομάδα Αθήνας", region: "Αθήνα" },
    { id: 2, name: "Φιλοζωική Ομάδα Θεσσαλονίκης", region: "Θεσσαλονίκη" },
    { id: 3, name: "Φιλοζωική Ομάδα Πειραιά", region: "Πειραιάς" },
    { id: 4, name: "Φιλοζωική Ομάδα Πάτρας", region: "Πάτρα" },
    { id: 5, name: "Φιλοζωική Ομάδα Χαλκίδας", region: "Χαλκίδα" },
    { id: 6, name: "Φιλοζωική Ομάδα Ηρακλείου", region: "Ηράκλειο" },
    { id: 7, name: "Φιλοζωική Ομάδα Ρόδου", region: "Ρόδος" },
    { id: 8, name: "Φιλοζωική Ομάδα Λαμίας", region: "Λαμία" },
    { id: 9, name: "Φιλοζωική Ομάδα Βόλου", region: "Βόλος" },
    { id: 10, name: "Φιλοζωική Ομάδα Ιωαννίνων", region: "Ιωάννινα" },
    { id: 11, name: "Φιλοζωική Ομάδα Κέρκυρας", region: "Κέρκυρα" },
    { id: 12, name: "Φιλοζωική Ομάδα Τρικάλων", region: "Τρίκαλα" },
    // Προσθέστε περισσότερες ομάδες αν χρειάζεται
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Φιλτράρισμα των ομάδων ανάλογα με το αναζητούμενο κείμενο
  const filteredVets = vets.filter((vet) =>
    vet.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="list-section">
      <h1>Λίστα Φιλοζωικών Ομάδων</h1>

      {/* Μπάρα Αναζήτησης στο κέντρο */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Αναζητήστε περιοχή..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Λίστα φιλοζωικών ομάδων */}
      <div className="filozoikes-grid">
        {filteredVets.length > 0 ? (
          filteredVets.map((group) => (
            <div key={group.id} className="filozoiki-item">
              {group.name}
            </div>
          ))
        ) : (
          <p>Δεν βρέθηκαν ομάδες για την περιοχή που αναζητήσατε.</p>
        )}
      </div>
    </section>
  );
};

export default Vets;
