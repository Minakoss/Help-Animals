import React, { useState } from "react";
import "./Vets.css";

const Vets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVet, setSelectedVet] = useState(null);

  const vets = [
    {
      id: 1,
      name: "Φιλοζωική Ομάδα Αθήνας",
      region: "Αθήνα",
      phone: "2101234567",
      email: "info@athens-pets.gr",
      image: "/images/athens-pet.jpg",
    },
    {
      id: 2,
      name: "Φιλοζωική Ομάδα Θεσσαλονίκης",
      region: "Θεσσαλονίκη",
      phone: "2310123456",
      email: "info@thessaloniki-pets.gr",
      image: "/images/thessaloniki-pet.jpg",
    },
    {
      id: 3,
      name: "Φιλοζωική Ομάδα Πειραιά",
      region: "Πειραιάς",
      phone: "2107654321",
      email: "info@piraeus-pets.gr",
      image: "/images/piraeus-pet.jpg",
    },
    // Πρόσθεσε περισσότερες ομάδες αν χρειάζεται
  ];

  // Φιλτράρισμα των ομάδων ανάλογα με το αναζητούμενο κείμενο
  const filteredVets = vets.filter((vet) =>
    vet.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Λειτουργία για εμφάνιση των λεπτομερειών της επιλεγμένης ομάδας
  const handleVetClick = (vet) => {
    setSelectedVet(vet);
  };

  // Κλείσιμο του modal
  const closeModal = () => {
    setSelectedVet(null);
  };

  return (
    <section className="list-section">
      <h1>Λίστα Κτηνιατρίων</h1>

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
            <div
              key={group.id}
              className="filozoiki-item"
              onClick={() => handleVetClick(group)}
            >
              <img
                src={group.image}
                alt={group.name}
                className="filozoiki-image"
              />
            </div>
          ))
        ) : (
          <p>Δεν βρέθηκαν ομάδες για την περιοχή που αναζητήσατε.</p>
        )}
      </div>

      {/* Modal με τις λεπτομέρειες της επιλεγμένης ομάδας */}
      {selectedVet && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedVet.image}
              alt={selectedVet.name}
              className="modal-image"
            />
            <p>
              <strong>Όνομα:</strong> {selectedVet.name}
            </p>
            <p>
              <strong>Τηλέφωνο:</strong> {selectedVet.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedVet.email}
            </p>
            <button onClick={closeModal}>Κλείσιμο</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Vets;
